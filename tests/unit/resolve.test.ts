import { describe, expect, it } from 'vitest';
import { OutputShader } from 'three/examples/jsm/shaders/OutputShader.js';
import { premultipliedOutput } from '../../source/showcase/resolve.ts';

describe('multisampled resolve (MPES §10.3, Codex G3 review)', () => {
  const fragment = premultipliedOutput(OutputShader.fragmentShader);

  it('divides by coverage before tone mapping and multiplies after the sRGB curve', () => {
    const read = fragment.indexOf('texture2D( tDiffuse, vUv )'), divide = fragment.indexOf('gl_FragColor.rgb /= gl_FragColor.a');
    const tone = fragment.indexOf('ToneMapping( gl_FragColor.rgb )'), srgb = fragment.indexOf('sRGBTransferOETF( gl_FragColor )');
    const multiply = fragment.indexOf('gl_FragColor.rgb *= gl_FragColor.a');
    expect(read).toBeGreaterThan(0);
    expect([read, divide, tone, srgb, multiply].every((at, i, all) => at > 0 && (i === 0 || at > all[i - 1]!))).toBe(true);
    expect(fragment).toContain('if ( gl_FragColor.a > 0.0 )');
    expect(fragment.trimEnd().endsWith('}')).toBe(true);
  });

  it('refuses a three.js OutputShader whose shape changed, rather than drawing fringes silently', () => {
    expect(() => premultipliedOutput('void main() { gl_FragColor = vec4( 1.0 ); }')).toThrow(/OutputShader changed/);
  });
});
