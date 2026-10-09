import * as THREE from 'three';

// Original finishes for geometry authored in metres. These are surface response
// variations, not wear, damage, manufacturer textures or substitute geometry.
// The former 6 mm paint / 12 mm rubber bump exaggerated smooth metal and tyres.
export const FINISH_PROFILES=Object.freeze({
 coated:Object.freeze({wavelength:.00065,variation:.022,directional:0}),
 pressed:Object.freeze({wavelength:.0008,variation:.016,directional:0}),
 cast:Object.freeze({wavelength:.002,variation:.045,directional:0}),
 machined:Object.freeze({wavelength:.00035,variation:.018,directional:1}),
 rubber:Object.freeze({wavelength:.0012,variation:.023,directional:0}),
 upholstery:Object.freeze({wavelength:.0009,variation:.065,directional:2})
});

const finishFragment=/* glsl */`
varying vec3 vSeaFinishPosition;
uniform vec3 seaFinish;
float seaSurfaceFinish() {
 // Object anchoring keeps the finish attached during inspection rotation.
 // Suppress frequencies below the pixel footprint instead of letting distant
 // paint sparkle, alias or become a coarse repeating UV pattern.
 vec3 p=vSeaFinishPosition/max(seaFinish.x,0.00001);
 float footprint=max(length(dFdx(p)),length(dFdy(p)));
 float visibility=1.0-smoothstep(0.15,0.7,footprint);
 vec3 wave=sin(p*6.28318530718);
 float isotropic=(wave.x*wave.y+wave.y*wave.z+wave.z*wave.x)/3.0;
 float machining=wave.x;
 float weave=(wave.x*wave.y+wave.y*wave.z+wave.z*wave.x)/3.0;
 float pattern=seaFinish.z<0.5?isotropic:(seaFinish.z<1.5?machining:weave);
 return pattern*seaFinish.y*visibility;
}
`;

/** MeshPhysicalMaterial with clone-safe, texture-free microscopic roughness. */
export class FinishMaterial extends THREE.MeshPhysicalMaterial {
 constructor(parameters={},finish='coated'){
  super(parameters);
  this.finish=finish;
  this.finishProfile={...profileFor(finish)};
 }
 copy(source){
  super.copy(source);
  this.finish=source.finish??'coated';
  this.finishProfile={...(source.finishProfile??profileFor(this.finish))};
  return this;
 }
 customProgramCacheKey(){return 'sea-metres-finish-v1';}
 onBeforeCompile(shader){
  const vertexAnchor='#include <project_vertex>',fragmentAnchor='#include <roughnessmap_fragment>';
  if(!shader.vertexShader.includes(vertexAnchor)||!shader.fragmentShader.includes(fragmentAnchor))throw new Error('SEA finish shader anchors changed');
  const p=this.finishProfile;
  shader.uniforms.seaFinish={value:new THREE.Vector3(p.wavelength,p.variation,p.directional)};
  shader.vertexShader='varying vec3 vSeaFinishPosition;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace(vertexAnchor,/* glsl */`
   vSeaFinishPosition=transformed*vec3(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz),length(modelMatrix[2].xyz));
   ${vertexAnchor}
  `);
  shader.fragmentShader=finishFragment+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace(fragmentAnchor,`${fragmentAnchor}\nroughnessFactor=clamp(roughnessFactor+seaSurfaceFinish(),0.04,1.0);`);
 }
}

function profileFor(finish){
 const profile=FINISH_PROFILES[finish];
 if(!profile)throw new Error(`Unknown SEA material finish: ${finish}`);
 return profile;
}

export function materials(){
 const finished=(color,roughness,metalness,finish,extra={})=>new FinishMaterial({color,roughness,metalness,...extra},finish);
 const plain=(color,roughness,metalness=0,extra={})=>new THREE.MeshPhysicalMaterial({color,roughness,metalness,...extra});
 const result={
  // Non-metallic coating masks the substrate. Restrained satin reflection
  // catches formed edges without making armour look chrome or wet plastic.
  paint:finished('#626e51',.53,0,'coated',{clearcoat:.10,clearcoatRoughness:.48}),
  edge:finished('#394136',.61,.08,'pressed'),
  steel:finished('#a0a7a5',.29,.92,'machined'),
  darkSteel:finished('#41494a',.46,.86,'cast'),
  rubber:finished('#222622',.82,0,'rubber'),
  // Reflection-only glazing avoids transmission render targets in the shared
  // model/UI renderer. Cabin factories can retain their transparent variants.
  glass:plain('#78949a',.065,0,{ior:1.50,clearcoat:0,envMapIntensity:1.15}),
  amber:plain('#dc9b30',.25,0,{clearcoat:.32,clearcoatRoughness:.16}),
  lamp:plain('#e2e9db',.22,0,{clearcoat:.30,clearcoatRoughness:.14}),
  red:plain('#a94432',.39,0,{clearcoat:.16,clearcoatRoughness:.28}),
  pressedSteel:finished('#828c87',.40,.88,'pressed'),
  castSteel:finished('#596160',.55,.84,'cast'),
  upholstery:finished('#343a32',.91,0,'upholstery',{sheen:.20,sheenColor:'#565d4d',sheenRoughness:.90})
 };
 const names={paint:'powder coated metal',edge:'coated frame metal',steel:'machined steel',darkSteel:'cast dark steel',rubber:'moulded rubber',glass:'optical glass',amber:'amber lamp lens',lamp:'clear lamp lens',red:'red lamp lens',pressedSteel:'pressed steel',castSteel:'cast steel',upholstery:'woven seat upholstery'};
 for(const [key,name]of Object.entries(names))result[key].name=name;
 return result;
}
