/**
 * The tone-mapping resolve of a multisampled tier (MPES §10.3), made aware of transparency. The scene is drawn into a
 * target cleared to transparent, so an edge pixel holds its colour already multiplied by how much of it the vehicle
 * covers (premultiplied). Tone mapping and the sRGB curve are not linear: applied to that product they brighten the
 * edge into a pale fringe on the dark stage (Codex G3 review). So the colour is divided by its coverage first, mapped,
 * then multiplied again for the canvas, which expects premultiplied colour.
 */
const READ = 'gl_FragColor = texture2D( tDiffuse, vUv );';
const END = /\}\s*$/;

/** three.js's OutputShader fragment source with the division and multiplication added; throws if its shape changed. */
export function premultipliedOutput(fragment: string): string {
  if (!fragment.includes(READ) || !END.test(fragment)) throw new Error('OutputShader changed: review source/showcase/resolve.ts');
  return fragment
    .replace(READ, `${READ}\n\tif ( gl_FragColor.a > 0.0 ) gl_FragColor.rgb /= gl_FragColor.a;`)
    .replace(END, '\tgl_FragColor.rgb *= gl_FragColor.a;\n}');
}
