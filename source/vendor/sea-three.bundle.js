"use strict";var SEAThree=(()=>{var ul=Object.defineProperty;var Od=Object.getOwnPropertyDescriptor;var Bd=Object.getOwnPropertyNames;var kd=Object.prototype.hasOwnProperty;var zd=(n,e)=>{for(var t in e)ul(n,t,{get:e[t],enumerable:!0})},Hd=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Bd(e))!kd.call(n,s)&&s!==t&&ul(n,s,{get:()=>e[s],enumerable:!(i=Od(e,s))||i.enumerable});return n};var Vd=n=>Hd(ul({},"__esModule",{value:!0}),n);var cx={};zd(cx,{mount:()=>lx});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zh=0,Jl=1,Hh=2;var Oi=1,Vh=2,ws=3,bi=0,Yt=1,At=2,Gn=0,Ts=1,Kl=2,$l=3,jl=4,Gh=5;var Bi=100,Wh=101,Xh=102,qh=103,Yh=104,Zh=200,Jh=201,Kh=202,$h=203,Ql=204,ec=205,jh=206,Qh=207,eu=208,tu=209,nu=210,iu=211,su=212,ru=213,ou=214,So=0,Mo=1,Eo=2,cs=3,wo=4,To=5,Ao=6,Ro=7,ra=0,au=1,lu=2,In=0,tc=1,nc=2,ic=3,Pr=4,sc=5,rc=6,oc=7;var ac=300,Si=301,ki=302,oa=303,aa=304,Ir=306,Co=1e3,kn=1001,Po=1002,zt=1003,cu=1004;var Dr=1005;var qt=1006,la=1007;var Mi=1008;var on=1009,lc=1010,cc=1011,As=1012,ca=1013,Dn=1014,vn=1015,Ln=1016,ha=1017,ua=1018,Rs=1020,hc=35902,uc=35899,dc=1021,fc=1022,bn=1023,zn=1026,Ei=1027,da=1028,fa=1029,wi=1030,pa=1031;var ma=1033,Lr=33776,Nr=33777,Ur=33778,Fr=33779,ga=35840,_a=35841,xa=35842,ya=35843,va=36196,ba=37492,Sa=37496,Ma=37488,Ea=37489,Or=37490,wa=37491,Ta=37808,Aa=37809,Ra=37810,Ca=37811,Pa=37812,Ia=37813,Da=37814,La=37815,Na=37816,Ua=37817,Fa=37818,Oa=37819,Ba=37820,ka=37821,za=36492,Ha=36494,Va=36495,Ga=36283,Wa=36284,Br=36285,Xa=36286;var js=2300,Io=2301,vo=2302,Ol=2303,Bl=2400,kl=2401,zl=2402;var hu=3200;var kr=0,uu=1,ti="",Gt="srgb",Qs="srgb-linear",er="linear",_t="srgb";var bo=7680;var du=519,fu=512,pu=513,mu=514,qa=515,gu=516,_u=517,Ya=518,xu=519,yu=35044;var pc="300 es",An=2e3,hs=2001;function Gd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function tr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vu(){let n=tr("canvas");return n.style.display="block",n}var sh={},us=null;function mc(...n){let e="THREE."+n.shift();us?us("log",e,...n):console.log(e,...n)}function bu(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=bu(n);let e="THREE."+n.shift();if(us)us("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=bu(n);let e="THREE."+n.shift();if(us)us("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ii(...n){let e=n.join(" ");e in sh||(sh[e]=!0,He(...n))}function Su(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Mu={[So]:Mo,[Eo]:Ao,[wo]:Ro,[cs]:To,[Mo]:So,[Ao]:Eo,[Ro]:wo,[To]:cs},Rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rh=1234567,Zs=Math.PI/180,ds=180/Math.PI;function zi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function gc(n,e){return(n%e+e)%e}function Xd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function qd(n,e,t){return n!==e?(t-n)/(e-n):0}function Js(n,e,t){return(1-t)*n+t*e}function Yd(n,e,t,i){return Js(n,e,1-Math.exp(-t*i))}function Zd(n,e=1){return e-Math.abs(gc(n,e*2)-e)}function Jd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Kd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $d(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jd(n,e){return n+Math.random()*(e-n)}function Qd(n){return n*(.5-Math.random())}function ef(n){n!==void 0&&(rh=n);let e=rh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tf(n){return n*Zs}function nf(n){return n*ds}function sf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function rf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function of(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function af(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),f=o((e+i)/2),u=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*f,c*u,c*h,a*l);break;case"YZY":n.set(c*h,a*f,c*u,a*l);break;case"ZXZ":n.set(c*u,c*h,a*f,a*l);break;case"XZX":n.set(a*f,c*m,c*p,a*l);break;case"YXY":n.set(c*p,a*f,c*m,a*l);break;case"ZYZ":n.set(c*m,c*p,a*f,a*l);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function as(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Cs={DEG2RAD:Zs,RAD2DEG:ds,generateUUID:zi,clamp:it,euclideanModulo:gc,mapLinear:Xd,inverseLerp:qd,lerp:Js,damp:Yd,pingpong:Zd,smoothstep:Jd,smootherstep:Kd,randInt:$d,randFloat:jd,randFloatSpread:Qd,seededRandom:ef,degToRad:tf,radToDeg:nf,isPowerOfTwo:sf,ceilPowerOfTwo:rf,floorPowerOfTwo:of,setQuaternionFromProperEuler:af,normalize:en,denormalize:as},ae=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],f=i[s+2],u=i[s+3],h=r[o+0],p=r[o+1],m=r[o+2],_=r[o+3];if(u!==_||c!==h||l!==p||f!==m){let g=c*h+l*p+f*m+u*_;g<0&&(h=-h,p=-p,m=-m,_=-_,g=-g);let d=1-a;if(g<.9995){let x=Math.acos(g),b=Math.sin(x);d=Math.sin(d*x)/b,a=Math.sin(a*x)/b,c=c*d+h*a,l=l*d+p*a,f=f*d+m*a,u=u*d+_*a}else{c=c*d+h*a,l=l*d+p*a,f=f*d+m*a,u=u*d+_*a;let x=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=x,l*=x,f*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],f=i[s+3],u=r[o],h=r[o+1],p=r[o+2],m=r[o+3];return e[t]=a*m+f*u+c*p-l*h,e[t+1]=c*m+f*h+l*u-a*p,e[t+2]=l*m+f*p+a*h-c*u,e[t+3]=f*m-a*u-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(s/2),u=a(r/2),h=c(i/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=h*f*u+l*p*m,this._y=l*p*u-h*f*m,this._z=l*f*m+h*p*u,this._w=l*f*u-h*p*m;break;case"YXZ":this._x=h*f*u+l*p*m,this._y=l*p*u-h*f*m,this._z=l*f*m-h*p*u,this._w=l*f*u+h*p*m;break;case"ZXY":this._x=h*f*u-l*p*m,this._y=l*p*u+h*f*m,this._z=l*f*m+h*p*u,this._w=l*f*u-h*p*m;break;case"ZYX":this._x=h*f*u-l*p*m,this._y=l*p*u+h*f*m,this._z=l*f*m-h*p*u,this._w=l*f*u+h*p*m;break;case"YZX":this._x=h*f*u+l*p*m,this._y=l*p*u+h*f*m,this._z=l*f*m-h*p*u,this._w=l*f*u-h*p*m;break;case"XZY":this._x=h*f*u-l*p*m,this._y=l*p*u-h*f*m,this._z=l*f*m+h*p*u,this._w=l*f*u+h*p*m;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],u=t[10],h=i+a+u;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(f-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+f)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+o*a+s*l-r*c,this._y=s*f+o*c+r*a-i*l,this._z=r*f+o*l+i*c-s*a,this._w=o*f-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),f=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*f,this.y=i+c*f+a*l-r*u,this.z=s+c*u+r*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dl.copy(this).projectOnVector(e),this.sub(dl)}reflect(e){return this.sub(dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dl=new L,oh=new tn,Qe=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],u=i[7],h=i[2],p=i[5],m=i[8],_=s[0],g=s[3],d=s[6],x=s[1],b=s[4],y=s[7],S=s[2],E=s[5],I=s[8];return r[0]=o*_+a*x+c*S,r[3]=o*g+a*b+c*E,r[6]=o*d+a*y+c*I,r[1]=l*_+f*x+u*S,r[4]=l*g+f*b+u*E,r[7]=l*d+f*y+u*I,r[2]=h*_+p*x+m*S,r[5]=h*g+p*b+m*E,r[8]=h*d+p*y+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-i*r*f+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=f*o-a*l,h=a*c-f*r,p=l*r-o*c,m=t*u+i*h+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(s*l-f*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(f*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ii("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fl.makeScale(e,t)),this}rotate(e){return Ii("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fl.makeRotation(-e)),this}translate(e,t){return Ii("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fl=new Qe,ah=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){let n={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ii("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ii("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qs]:{primaries:e,whitePoint:i,transfer:er,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),n}var lt=lf();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ls(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Yi,Do=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yi===void 0&&(Yi=tr("canvas")),Yi.width=e.width,Yi.height=e.height;let s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=tr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jn(t[i]/255)*255):t[i]=jn(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cf=0,fs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pl(s[o].image)):r.push(pl(s[o]))}else r=pl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Do.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var hf=0,ml=new L,nn=class n extends Rn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=kn,s=kn,r=qt,o=Mi,a=bn,c=on,l=n.DEFAULT_ANISOTROPY,f=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=zi(),this.name="",this.source=new fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Co:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Co:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=ac;nn.DEFAULT_ANISOTROPY=1;var Rt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],f=c[4],u=c[8],h=c[1],p=c[5],m=c[9],_=c[2],g=c[6],d=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,y=(p+1)/2,S=(d+1)/2,E=(f+h)/4,I=(u+_)/4,v=(m+g)/4;return b>y&&b>S?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=E/i,r=I/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=v/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=I/r,s=v/r),this.set(i,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-_)/x,this.z=(h-f)/x,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lo=class extends Rn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new nn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Lo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},nr=class extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var No=class extends nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var dt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,f,u,h,p,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,f,u,h,p,m,_,g)}set(e,t,i,s,r,o,a,c,l,f,u,h,p,m,_,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=f,d[10]=u,d[14]=h,d[3]=p,d[7]=m,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),o=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=o*f,p=o*u,m=a*f,_=a*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=p+m*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=m+p*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*f,p=c*u,m=l*f,_=l*u;t[0]=h+_*a,t[4]=m*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*f,t[9]=-a,t[2]=p*a-m,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*f,p=c*u,m=l*f,_=l*u;t[0]=h-_*a,t[4]=-o*u,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*f,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*f,p=o*u,m=a*f,_=a*u;t[0]=c*f,t[4]=m*l-p,t[8]=h*l+_,t[1]=c*u,t[5]=_*l+h,t[9]=p*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,p=o*l,m=a*c,_=a*l;t[0]=c*f,t[4]=_-h*u,t[8]=m*u+p,t[1]=u,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=p*u+m,t[10]=h-_*u}else if(e.order==="XZY"){let h=o*c,p=o*l,m=a*c,_=a*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=h*u+_,t[5]=o*f,t[9]=p*u-m,t[2]=m*u-p,t[6]=a*f,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uf,e,df)}lookAt(e,t,i){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),oi.crossVectors(i,cn),oi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),oi.crossVectors(i,cn)),oi.normalize(),Zr.crossVectors(cn,oi),s[0]=oi.x,s[4]=Zr.x,s[8]=cn.x,s[1]=oi.y,s[5]=Zr.y,s[9]=cn.y,s[2]=oi.z,s[6]=Zr.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],u=i[5],h=i[9],p=i[13],m=i[2],_=i[6],g=i[10],d=i[14],x=i[3],b=i[7],y=i[11],S=i[15],E=s[0],I=s[4],v=s[8],w=s[12],C=s[1],D=s[5],T=s[9],R=s[13],P=s[2],F=s[6],k=s[10],V=s[14],te=s[3],J=s[7],Y=s[11],K=s[15];return r[0]=o*E+a*C+c*P+l*te,r[4]=o*I+a*D+c*F+l*J,r[8]=o*v+a*T+c*k+l*Y,r[12]=o*w+a*R+c*V+l*K,r[1]=f*E+u*C+h*P+p*te,r[5]=f*I+u*D+h*F+p*J,r[9]=f*v+u*T+h*k+p*Y,r[13]=f*w+u*R+h*V+p*K,r[2]=m*E+_*C+g*P+d*te,r[6]=m*I+_*D+g*F+d*J,r[10]=m*v+_*T+g*k+d*Y,r[14]=m*w+_*R+g*V+d*K,r[3]=x*E+b*C+y*P+S*te,r[7]=x*I+b*D+y*F+S*J,r[11]=x*v+b*T+y*k+S*Y,r[15]=x*w+b*R+y*V+S*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],u=e[6],h=e[10],p=e[14],m=e[3],_=e[7],g=e[11],d=e[15],x=c*p-l*h,b=a*p-l*u,y=a*h-c*u,S=o*p-l*f,E=o*h-c*f,I=o*u-a*f;return t*(_*x-g*b+d*y)-i*(m*x-g*S+d*E)+s*(m*b-_*S+d*I)-r*(m*y-_*E+g*I)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],f=e[10];return t*(o*f-a*l)-i*(r*f-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],p=e[11],m=e[12],_=e[13],g=e[14],d=e[15],x=t*a-i*o,b=t*c-s*o,y=t*l-r*o,S=i*c-s*a,E=i*l-r*a,I=s*l-r*c,v=f*_-u*m,w=f*g-h*m,C=f*d-p*m,D=u*g-h*_,T=u*d-p*_,R=h*d-p*g,P=x*R-b*T+y*D+S*C-E*w+I*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/P;return e[0]=(a*R-c*T+l*D)*F,e[1]=(s*T-i*R-r*D)*F,e[2]=(_*I-g*E+d*S)*F,e[3]=(h*E-u*I-p*S)*F,e[4]=(c*C-o*R-l*w)*F,e[5]=(t*R-s*C+r*w)*F,e[6]=(g*y-m*I-d*b)*F,e[7]=(f*I-h*y+p*b)*F,e[8]=(o*T-a*C+l*v)*F,e[9]=(i*C-t*T-r*v)*F,e[10]=(m*E-_*y+d*x)*F,e[11]=(u*y-f*E-p*x)*F,e[12]=(a*w-o*D-c*v)*F,e[13]=(t*D-i*w+s*v)*F,e[14]=(_*b-m*S-g*x)*F,e[15]=(f*S-u*b+h*x)*F,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,f=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,f*a+i,f*c-s*o,0,l*c-s*a,f*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,f=o+o,u=a+a,h=r*l,p=r*f,m=r*u,_=o*f,g=o*u,d=a*u,x=c*l,b=c*f,y=c*u,S=i.x,E=i.y,I=i.z;return s[0]=(1-(_+d))*S,s[1]=(p+y)*S,s[2]=(m-b)*S,s[3]=0,s[4]=(p-y)*E,s[5]=(1-(h+d))*E,s[6]=(g+x)*E,s[7]=0,s[8]=(m+b)*I,s[9]=(g-x)*I,s[10]=(1-(h+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Zi.set(s[0],s[1],s[2]).length(),a=Zi.set(s[4],s[5],s[6]).length(),c=Zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),En.copy(this);let l=1/o,f=1/a,u=1/c;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=f,En.elements[5]*=f,En.elements[6]*=f,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=An,c=!1){let l=this.elements,f=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===An)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===hs)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=An,c=!1){let l=this.elements,f=2/(t-e),u=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===An)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===hs)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zi=new L,En=new dt,uf=new L(0,0,0),df=new L(1,1,1),oi=new L,Zr=new L,cn=new L,ch=new dt,hh=new tn,xn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],f=s[9],u=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var ps=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ff=0,uh=new L,Ji=new tn,Yn=new dt,Jr=new L,zs=new L,pf=new L,mf=new tn,dh=new L(1,0,0),fh=new L(0,1,0),ph=new L(0,0,1),mh={type:"added"},gf={type:"removed"},Ki={type:"childadded",child:null},gl={type:"childremoved",child:null},Ut=class n extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new xn,i=new tn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Qe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(fh,e)}rotateZ(e){return this.rotateOnAxis(ph,e)}translateOnAxis(e,t){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(fh,e)}translateZ(e){return this.translateOnAxis(ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jr.copy(e):Jr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(zs,Jr,this.up):Yn.lookAt(Jr,zs,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Yn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mh),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gf),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mh),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let c=[];for(let l in a){let f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new L(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ut=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},_f={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),d=this._getHandJoint(l,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&h>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_f)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function _l(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=lt.workingColorSpace){if(e=gc(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=_l(o,r,e+1/3),this.g=_l(o,r,e),this.b=_l(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let i=Eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return lt.workingToColorSpace(Kt.copy(this),e),Math.round(it(Kt.r*255,0,255))*65536+Math.round(it(Kt.g*255,0,255))*256+Math.round(it(Kt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Kt.copy(this),t);let i=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,f=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=f<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Gt){lt.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,s=Kt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Kr);let i=Js(ai.h,Kr.h,t),s=Js(ai.s,Kr.s,t),r=Js(ai.l,Kr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Ke;Ke.NAMES=Eu;var Hn=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wn=new L,Zn=new L,xl=new L,Jn=new L,$i=new L,ji=new L,gh=new L,yl=new L,vl=new L,bl=new L,Sl=new Rt,Ml=new Rt,El=new Rt,ui=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),Zn.subVectors(i,t),xl.subVectors(e,t);let o=wn.dot(wn),a=wn.dot(Zn),c=wn.dot(xl),l=Zn.dot(Zn),f=Zn.dot(xl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let h=1/u,p=(l*c-a*f)*h,m=(o*f-a*c)*h;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Sl.setScalar(0),Ml.setScalar(0),El.setScalar(0),Sl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,i),El.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Sl,r.x),o.addScaledVector(Ml,r.y),o.addScaledVector(El,r.z),o}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),Zn.subVectors(e,t),wn.cross(Zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;$i.subVectors(s,i),ji.subVectors(r,i),yl.subVectors(e,i);let c=$i.dot(yl),l=ji.dot(yl);if(c<=0&&l<=0)return t.copy(i);vl.subVectors(e,s);let f=$i.dot(vl),u=ji.dot(vl);if(f>=0&&u<=f)return t.copy(s);let h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector($i,o);bl.subVectors(e,r);let p=$i.dot(bl),m=ji.dot(bl);if(m>=0&&p<=m)return t.copy(r);let _=p*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(ji,a);let g=f*m-p*u;if(g<=0&&u-f>=0&&p-m>=0)return gh.subVectors(r,s),a=(u-f)/(u-f+(p-m)),t.copy(s).addScaledVector(gh,a);let d=1/(g+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector($i,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),jr.subVectors(this.max,Hs),Qi.subVectors(e.a,Hs),es.subVectors(e.b,Hs),ts.subVectors(e.c,Hs),li.subVectors(es,Qi),ci.subVectors(ts,es),Ai.subVectors(Qi,ts);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ai.z,Ai.y,li.z,0,-li.x,ci.z,0,-ci.x,Ai.z,0,-Ai.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ai.y,Ai.x,0];return!wl(t,Qi,es,ts,jr)||(t=[1,0,0,0,1,0,0,0,1],!wl(t,Qi,es,ts,jr))?!1:(Qr.crossVectors(li,ci),t=[Qr.x,Qr.y,Qr.z],wl(t,Qi,es,ts,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kn=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,$r=new Mt,Qi=new L,es=new L,ts=new L,li=new L,ci=new L,Ai=new L,Hs=new L,jr=new L,Qr=new L,Ri=new L;function wl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ri.fromArray(n,r);let a=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=e.dot(Ri),l=t.dot(Ri),f=i.dot(Ri);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}var Nt=new L,eo=new ae,xf=0,Xt=class extends Rn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yu,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=as(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=as(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=as(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=as(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=as(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ir=class extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var sr=class extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var je=class extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}},yf=new Mt,Vs=new L,Tl=new L,Qn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):yf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);let t=Vs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(Tl)),this.expandByPoint(Vs.copy(e.center).sub(Tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vf=0,gn=new dt,Al=new Ut,ns=new L,hn=new Mt,Gs=new Mt,kt=new L,ft=class n extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?sr:ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Al.lookAt(e),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(hn.min,Gs.min),hn.expandByPoint(kt),kt.addVectors(hn.max,Gs.max),hn.expandByPoint(kt)):(hn.expandByPoint(Gs.min),hn.expandByPoint(Gs.max))}hn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)kt.fromBufferAttribute(a,l),c&&(ns.fromBufferAttribute(e,l),kt.add(ns)),s=Math.max(s,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Xt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let v=0;v<i.count;v++)a[v]=new L,c[v]=new L;let l=new L,f=new L,u=new L,h=new ae,p=new ae,m=new ae,_=new L,g=new L;function d(v,w,C){l.fromBufferAttribute(i,v),f.fromBufferAttribute(i,w),u.fromBufferAttribute(i,C),h.fromBufferAttribute(r,v),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,C),f.sub(l),u.sub(l),p.sub(h),m.sub(h);let D=1/(p.x*m.y-m.x*p.y);isFinite(D)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(D),g.copy(u).multiplyScalar(p.x).addScaledVector(f,-m.x).multiplyScalar(D),a[v].add(_),a[w].add(_),a[C].add(_),c[v].add(g),c[w].add(g),c[C].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,w=x.length;v<w;++v){let C=x[v],D=C.start,T=C.count;for(let R=D,P=D+T;R<P;R+=3)d(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let b=new L,y=new L,S=new L,E=new L;function I(v){S.fromBufferAttribute(s,v),E.copy(S);let w=a[v];b.copy(w),b.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(E,w);let D=y.dot(c[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,D)}for(let v=0,w=x.length;v<w;++v){let C=x[v],D=C.start,T=C.count;for(let R=D,P=D+T;R<P;R+=3)I(e.getX(R+0)),I(e.getX(R+1)),I(e.getX(R+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,f=new L,u=new L;if(e)for(let h=0,p=e.count;h<p;h+=3){let m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(f),c.add(f),l.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){let l=a.array,f=a.itemSize,u=a.normalized,h=new l.constructor(c.length*f),p=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*f;for(let d=0;d<f;d++)h[m++]=l[p++]}return new Xt(h,f,u)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let f=0,u=l.length;f<u;f++){let h=l[f],p=e(h,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){let p=l[u];f.push(p.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let f=s[l];this.setAttribute(l,f.clone(t))}let r=e.morphAttributes;for(let l in r){let f=[],u=r[l];for(let h=0,p=u.length;h<p;h++)f.push(u[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,f=o.length;l<f;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rl=new L,bf=new L,Sf=new Qe,un=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Rl.subVectors(i,t).cross(bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Rl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sf.getNormalMatrix(e),s=this.coplanarPoint(Rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Mf=0,Cn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Ts,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=ec,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new un().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var $n=new L,Cl=new L,to=new L,no=new L,di=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Cl.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),no.copy(this.origin).sub(Cl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=no.dot(this.direction),c=-no.dot(to),l=no.lengthSq(),f=Math.abs(1-o*o),u,h,p,m;if(f>0)if(u=o*c-a,h=o*a-c,m=r*f,u>=0)if(h>=-m)if(h<=m){let _=1/f;u*=_,h*=_,p=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*c)+l;else h<=-m?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+h*(h+2*c)+l):h<=m?(u=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+h*(h+2*c)+l);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Cl).addScaledVector(to,h),p}intersectSphere(e,t){if(e.radius<0)return null;$n.subVectors(e.center,this.origin);let i=$n.dot(this.direction),s=$n.dot($n)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),f>=0?(r=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,f=a.z,u=e.x-o.x,h=e.y-o.y,p=e.z-o.z,m=t.x-o.x,_=t.y-o.y,g=t.z-o.z,d=i.x-o.x,x=i.y-o.y,b=i.z-o.z,y=Math.abs(c),S=Math.abs(l),E=Math.abs(f),I,v,w,C,D,T,R,P,F,k,V,te;if(y>=S&&y>=E?(w=c,T=u,F=m,te=d,c>=0?(I=l,v=f,C=h,D=p,R=_,P=g,k=x,V=b):(I=f,v=l,C=p,D=h,R=g,P=_,k=b,V=x)):S>=E?(w=l,T=h,F=_,te=x,l>=0?(I=f,v=c,C=p,D=u,R=g,P=m,k=b,V=d):(I=c,v=f,C=u,D=p,R=m,P=g,k=d,V=b)):(w=f,T=p,F=g,te=b,f>=0?(I=c,v=l,C=u,D=h,R=m,P=_,k=d,V=x):(I=l,v=c,C=h,D=u,R=_,P=m,k=x,V=d)),w===0)return null;let J=I/w,Y=v/w,K=1/w,le=C-J*T,me=D-Y*T,Ue=R-J*F,$e=P-Y*F,oe=k-J*te,G=V-Y*te,$=oe*$e-G*Ue,he=le*G-me*oe,Ce=Ue*me-$e*le;if(s){if($<0||he<0||Ce<0)return null}else if(($<0||he<0||Ce<0)&&($>0||he>0||Ce>0))return null;let Re=$+he+Ce;if(Re===0)return null;let Ve=K*($*T+he*F+Ce*te);return(Re>0?Ve<0:Ve>0)?null:this.at(Ve/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_h=new dt,Ci=new di,io=new Qn,xh=new L,so=new L,ro=new L,oo=new L,Pl=new L,ao=new L,yh=new L,lo=new L,xe=class extends Ut{constructor(e=new ft,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let f=a[c],u=r[c];f!==0&&(Pl.fromBufferAttribute(u,e),o?ao.addScaledVector(Pl,f):ao.addScaledVector(Pl.sub(t),f))}t.add(ao)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(io.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(io,xh)===null||Ci.origin.distanceToSquared(xh)>(e.far-e.near)**2))&&(_h.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(_h),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let g=h[m],d=o[g.materialIndex],x=Math.max(g.start,p.start),b=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,S=b;y<S;y+=3){let E=a.getX(y),I=a.getX(y+1),v=a.getX(y+2);s=co(this,d,e,i,l,f,u,E,I,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=m,d=_;g<d;g+=3){let x=a.getX(g),b=a.getX(g+1),y=a.getX(g+2);s=co(this,o,e,i,l,f,u,x,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let g=h[m],d=o[g.materialIndex],x=Math.max(g.start,p.start),b=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,S=b;y<S;y+=3){let E=y,I=y+1,v=y+2;s=co(this,d,e,i,l,f,u,E,I,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let g=m,d=_;g<d;g+=3){let x=g,b=g+1,y=g+2;s=co(this,o,e,i,l,f,u,x,b,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Ef(n,e,t,i,s,r,o,a){let c;if(e.side===Yt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===bi,a),c===null)return null;lo.copy(a),lo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(lo);return l<t.near||l>t.far?null:{distance:l,point:lo.clone(),object:n}}function co(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,so),n.getVertexPosition(c,ro),n.getVertexPosition(l,oo);let f=Ef(n,e,t,i,so,ro,oo,yh);if(f){let u=new L;ui.getBarycoord(yh,so,ro,oo,u),s&&(f.uv=ui.getInterpolatedAttribute(s,a,c,l,u,new ae)),r&&(f.uv1=ui.getInterpolatedAttribute(r,a,c,l,u,new ae)),o&&(f.normal=ui.getInterpolatedAttribute(o,a,c,l,u,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new L,materialIndex:0};ui.getNormal(so,ro,oo,h.normal),f.face=h,f.barycoord=u}return f}var rr=class extends nn{constructor(e=null,t=1,i=1,s,r,o,a,c,l=zt,f=zt,u,h){super(null,o,a,c,l,f,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gs=class extends Xt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},is=new dt,vh=new dt,ho=[],bh=new Mt,wf=new dt,Ws=new xe,Xs=new Qn,or=class extends xe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,is),bh.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(bh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,is),Xs.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(i),e.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),vh.multiplyMatrices(i,is),Ws.matrixWorld=vh,Ws.raycast(e,ho);for(let o=0,a=ho.length;o<a;o++){let c=ho[o];c.instanceId=r,c.object=this,t.push(c)}ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(s*this.count),s,this.count,da,vn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pi=new Qn,Tf=new ae(.5,.5),uo=new L,_s=class{constructor(e=new un,t=new un,i=new un,s=new un,r=new un,o=new un){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],f=r[4],u=r[5],h=r[6],p=r[7],m=r[8],_=r[9],g=r[10],d=r[11],x=r[12],b=r[13],y=r[14],S=r[15];if(s[0].setComponents(l-o,p-f,d-m,S-x).normalize(),s[1].setComponents(l+o,p+f,d+m,S+x).normalize(),s[2].setComponents(l+a,p+u,d+_,S+b).normalize(),s[3].setComponents(l-a,p-u,d-_,S-b).normalize(),i)s[4].setComponents(c,h,g,y).normalize(),s[5].setComponents(l-c,p-h,d-g,S-y).normalize();else if(s[4].setComponents(l-c,p-h,d-g,S-y).normalize(),t===An)s[5].setComponents(l+c,p+h,d+g,S+y).normalize();else if(t===hs)s[5].setComponents(c,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);let t=Tf.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Di=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Uo=new L,Fo=new L,Sh=new dt,qs=new di,fo=new Qn,Il=new L,Mh=new L,Oo=class extends Ut{constructor(e=new ft,t=new Di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Uo.fromBufferAttribute(t,s-1),Fo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Uo.distanceTo(Fo);e.setAttribute("lineDistance",new je(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;Sh.copy(s).invert(),qs.copy(e.ray).applyMatrix4(Sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=l){let d=f.getX(_),x=f.getX(_+1),b=po(this,e,qs,c,d,x,_);b&&t.push(b)}if(this.isLineLoop){let _=f.getX(m-1),g=f.getX(p),d=po(this,e,qs,c,_,g,m-1);d&&t.push(d)}}else{let p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=p,g=m-1;_<g;_+=l){let d=po(this,e,qs,c,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){let _=po(this,e,qs,c,m-1,p,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function po(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Uo.fromBufferAttribute(a,s),Fo.fromBufferAttribute(a,r),t.distanceSqToSegment(Uo,Fo,Il,Mh)>i)return;Il.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Il);if(!(l<e.near||l>e.far))return{distance:l,point:Mh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Eh=new L,wh=new L,xs=class extends Oo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Eh.fromBufferAttribute(t,s),wh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Eh.distanceTo(wh);e.setAttribute("lineDistance",new je(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ar=class extends nn{constructor(e=[],t=Si,i,s,r,o,a,c,l,f){super(e,t,i,s,r,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lr=class extends nn{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends nn{constructor(e,t,i=Dn,s,r,o,a=zt,c=zt,l,f=zn,u=1){if(f!==zn&&f!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,o,a,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Bo=class extends pi{constructor(e,t=Dn,i=Si,s,r,o=zt,a=zt,c,l=zn){let f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,i,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},cr=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rn=class n extends ft{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],f=[],u=[],h=0,p=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(u,2));function m(_,g,d,x,b,y,S,E,I,v,w){let C=y/I,D=S/v,T=y/2,R=S/2,P=E/2,F=I+1,k=v+1,V=0,te=0,J=new L;for(let Y=0;Y<k;Y++){let K=Y*D-R;for(let le=0;le<F;le++){let me=le*C-T;J[_]=me*x,J[g]=K*b,J[d]=P,l.push(J.x,J.y,J.z),J[_]=0,J[g]=0,J[d]=E>0?1:-1,f.push(J.x,J.y,J.z),u.push(le/I),u.push(1-Y/v),V+=1}}for(let Y=0;Y<v;Y++)for(let K=0;K<I;K++){let le=h+K+F*Y,me=h+K+F*(Y+1),Ue=h+(K+1)+F*(Y+1),$e=h+(K+1)+F*Y;c.push(le,me,$e),c.push(me,Ue,$e),te+=6}a.addGroup(p,te,w),p+=te,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},hr=class n extends ft{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],f=t/2,u=Math.PI/2*e,h=t,p=2*u+h,m=i*2+r,_=s+1,g=new L,d=new L;for(let x=0;x<=m;x++){let b=0,y=0,S=0,E=0;if(x<=i){let w=x/i,C=w*Math.PI/2;y=-f-e*Math.cos(C),S=e*Math.sin(C),E=-e*Math.cos(C),b=w*u}else if(x<=i+r){let w=(x-i)/r;y=-f+w*t,S=e,E=0,b=u+w*h}else{let w=(x-i-r)/i,C=w*Math.PI/2;y=f+e*Math.sin(C),S=e*Math.cos(C),E=e*Math.sin(C),b=u+h+w*u}let I=Math.max(0,Math.min(1,b/p)),v=0;x===0?v=.5/s:x===m&&(v=-.5/s);for(let w=0;w<=s;w++){let C=w/s,D=C*Math.PI*2,T=Math.sin(D),R=Math.cos(D);d.x=-S*R,d.y=y,d.z=S*T,a.push(d.x,d.y,d.z),g.set(-S*R,E,S*T),g.normalize(),c.push(g.x,g.y,g.z),l.push(C+v,I)}if(x>0){let w=(x-1)*_;for(let C=0;C<s;C++){let D=w+C,T=w+C+1,R=x*_+C,P=x*_+C+1;o.push(D,T,R),o.push(T,P,R)}}}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(c,3)),this.setAttribute("uv",new je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Li=class n extends ft{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let f=[],u=[],h=[],p=[],m=0,_=[],g=i/2,d=0;x(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(f),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2));function x(){let y=new L,S=new L,E=0,I=(t-e)/i;for(let v=0;v<=r;v++){let w=[],C=v/r,D=C*(t-e)+e;for(let T=0;T<=s;T++){let R=T/s,P=R*c+a,F=Math.sin(P),k=Math.cos(P);S.x=D*F,S.y=-C*i+g,S.z=D*k,u.push(S.x,S.y,S.z),y.set(F,I,k).normalize(),h.push(y.x,y.y,y.z),p.push(R,1-C),w.push(m++)}_.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let C=_[w][v],D=_[w+1][v],T=_[w+1][v+1],R=_[w][v+1];(e>0||w!==0)&&(f.push(C,D,R),E+=3),(t>0||w!==r-1)&&(f.push(D,T,R),E+=3)}l.addGroup(d,E,0),d+=E}function b(y){let S=m,E=new ae,I=new L,v=0,w=y===!0?e:t,C=y===!0?1:-1;for(let T=1;T<=s;T++)u.push(0,g*C,0),h.push(0,C,0),p.push(.5,.5),m++;let D=m;for(let T=0;T<=s;T++){let P=T/s*c+a,F=Math.cos(P),k=Math.sin(P);I.x=w*k,I.y=g*C,I.z=w*F,u.push(I.x,I.y,I.z),h.push(0,C,0),E.x=F*.5+.5,E.y=k*.5*C+.5,p.push(E.x,E.y),m++}for(let T=0;T<s;T++){let R=S+T,P=D+T;y===!0?f.push(P,P+1,R):f.push(P+1,P,R),v+=3}l.addGroup(d,v,y===!0?1:2),d+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let f=i[s],h=i[s+1]-f,p=(o-f)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ae:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,s=[],r=[],o=[],a=new L,c=new dt;for(let p=0;p<=e;p++){let m=p/e;s[p]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,f=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);f<=l&&(l=f,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(it(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(it(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ys=class extends dn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*f-p*u+this.aX,l=h*u+p*f+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ko=class extends ys{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,f,u){let h=(o-r)/l-(a-r)/(l+f)+(a-o)/f,p=(a-o)/f-(c-o)/(f+u)+(c-a)/u;h*=f,p*=f,s(o,a,h,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Th=new L,Ah=new L,Dl=new _c,Ll=new _c,Nl=new _c,vs=class extends dn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,f;this.closed||a>0?l=s[(a-1)%r]:(Ah.subVectors(s[0],s[1]).add(s[0]),l=Ah);let u=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(Th.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=Th),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(f),p);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Dl.initNonuniformCatmullRom(l.x,u.x,h.x,f.x,m,_,g),Ll.initNonuniformCatmullRom(l.y,u.y,h.y,f.y,m,_,g),Nl.initNonuniformCatmullRom(l.z,u.z,h.z,f.z,m,_,g)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(l.x,u.x,h.x,f.x,this.tension),Ll.initCatmullRom(l.y,u.y,h.y,f.y,this.tension),Nl.initCatmullRom(l.z,u.z,h.z,f.z,this.tension));return i.set(Dl.calc(c),Ll.calc(c),Nl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rh(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function Af(n,e){let t=1-n;return t*t*e}function Rf(n,e){return 2*(1-n)*n*e}function Cf(n,e){return n*n*e}function Ks(n,e,t,i){return Af(n,e)+Rf(n,t)+Cf(n,i)}function Pf(n,e){let t=1-n;return t*t*t*e}function If(n,e){let t=1-n;return 3*t*t*n*e}function Df(n,e){return 3*(1-n)*n*n*e}function Lf(n,e){return n*n*n*e}function $s(n,e,t,i,s){return Pf(n,e)+If(n,t)+Df(n,i)+Lf(n,s)}var ur=class extends dn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($s(e,s.x,r.x,o.x,a.x),$s(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zo=class extends dn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set($s(e,s.x,r.x,o.x,a.x),$s(e,s.y,r.y,o.y,a.y),$s(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dr=class extends dn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends dn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fr=class extends dn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ks(e,s.x,r.x,o.x),Ks(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pr=class extends dn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ks(e,s.x,r.x,o.x),Ks(e,s.y,r.y,o.y),Ks(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mr=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],f=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Rh(a,c.x,l.x,f.x,u.x),Rh(a,c.y,l.y,f.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},Vo=Object.freeze({__proto__:null,ArcCurve:ko,CatmullRomCurve3:vs,CubicBezierCurve:ur,CubicBezierCurve3:zo,EllipseCurve:ys,LineCurve:dr,LineCurve3:Ho,QuadraticBezierCurve:fr,QuadraticBezierCurve3:pr,SplineCurve:mr}),Go=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let f=c[l];i&&i.equals(f)||(t.push(f),i=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Vo[s.type]().fromJSON(s))}return this}},Ht=class extends Go{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new dr(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new fr(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ur(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new mr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+l,t+f,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new ys(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},It=class extends Ht{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ht().fromJSON(s))}return this}};function Nf(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=wu(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=kf(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let f=a,u=c;for(let h=t;h<s;h+=t){let p=n[h],m=n[h+1];p<a&&(a=p),m<c&&(c=m),p>f&&(f=p),m>u&&(u=m)}l=Math.max(f-a,u-c),l=l!==0?32767/l:0}return gr(r,o,t,a,c,l,0),o}function wu(n,e,t,i,s){let r;if(s===Kf(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=Ch(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Ch(o/i|0,n[o],n[o+1],r);return r&&bs(r,r.next)&&(xr(r),r=r.next),r}function Ni(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(bs(t,t.next)||Ct(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function gr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Wf(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Ff(n,i,s,r):Uf(n)){e.push(c.i,n.i,l.i),xr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Of(Ni(n),e),gr(n,e,t,i,s,r,2)):o===2&&Bf(n,e,t,i,s,r):gr(Ni(n),e,t,i,s,r,1);break}}}function Uf(n){let e=n.prev,t=n,i=n.next;if(Ct(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,f=Math.min(s,r,o),u=Math.min(a,c,l),h=Math.max(s,r,o),p=Math.max(a,c,l),m=i.next;for(;m!==e;){if(m.x>=f&&m.x<=h&&m.y>=u&&m.y<=p&&Ys(s,a,r,c,o,l,m.x,m.y)&&Ct(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ff(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Ct(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,f=s.y,u=r.y,h=o.y,p=Math.min(a,c,l),m=Math.min(f,u,h),_=Math.max(a,c,l),g=Math.max(f,u,h),d=Hl(p,m,e,t,i),x=Hl(_,g,e,t,i),b=n.prevZ,y=n.nextZ;for(;b&&b.z>=d&&y&&y.z<=x;){if(b.x>=p&&b.x<=_&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Ys(a,f,c,u,l,h,b.x,b.y)&&Ct(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=p&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Ys(a,f,c,u,l,h,y.x,y.y)&&Ct(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=_&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Ys(a,f,c,u,l,h,b.x,b.y)&&Ct(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Ys(a,f,c,u,l,h,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Of(n,e){let t=n;do{let i=t.prev,s=t.next.next;!bs(i,s)&&Au(i,t,t.next,s)&&_r(i,s)&&_r(s,i)&&(e.push(i.i,t.i,s.i),xr(t),xr(t.next),t=n=s),t=t.next}while(t!==n);return Ni(t)}function Bf(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yf(o,a)){let c=Ru(o,a);o=Ni(o,o.next),c=Ni(c,c.next),gr(o,e,t,i,s,r,0),gr(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function kf(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=wu(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(qf(l))}s.sort(zf);for(let r=0;r<s.length;r++)t=Hf(s[r],t);return t}function zf(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Hf(n,e){let t=Vf(n,e);if(!t)return e;let i=Ru(t,n);return Ni(i,i.next),Ni(t,t.next)}function Vf(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(bs(n,t))return t;do{if(bs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,f=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Tu(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);_r(t,n)&&(u<f||u===f&&(t.x>o.x||t.x===o.x&&Gf(o,t)))&&(o=t,f=u)}t=t.next}while(t!==a);return o}function Gf(n,e){return Ct(n.prev,n,e.prev)<0&&Ct(e.next,n,n.next)<0}function Wf(n,e,t,i){let s=n;do s.z===0&&(s.z=Hl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Xf(s)}function Xf(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Hl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function qf(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Tu(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ys(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Tu(n,e,t,i,s,r,o,a)}function Yf(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Zf(n,e)&&(_r(n,e)&&_r(e,n)&&Jf(n,e)&&(Ct(n.prev,n,e.prev)||Ct(n,e.prev,e))||bs(n,e)&&Ct(n.prev,n,n.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function bs(n,e){return n.x===e.x&&n.y===e.y}function Au(n,e,t,i){let s=go(Ct(n,e,t)),r=go(Ct(n,e,i)),o=go(Ct(t,i,n)),a=go(Ct(t,i,e));return!!(s!==r&&o!==a||s===0&&mo(n,t,e)||r===0&&mo(n,i,e)||o===0&&mo(t,n,i)||a===0&&mo(t,e,i))}function mo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function go(n){return n>0?1:n<0?-1:0}function Zf(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Au(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function _r(n,e){return Ct(n.prev,n,n.next)<0?Ct(n,e,n.next)>=0&&Ct(n,n.prev,e)>=0:Ct(n,e,n.prev)<0||Ct(n,n.next,e)<0}function Jf(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ru(n,e){let t=Vl(n.i,n.x,n.y),i=Vl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Ch(n,e,t,i){let s=Vl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vl(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kf(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Gl=class{static triangulate(e,t,i=2){return Nf(e,t,i)}},_n=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Ph(e),Ih(i,e);let o=e.length;t.forEach(Ph);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Ih(i,t[c]);let a=Gl.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ph(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ih(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Vt=class n extends ft{constructor(e=new It([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:$f,b,y=!1,S,E,I,v;if(d){b=d.getSpacedPoints(f),y=!0,h=!1;let se=d.isCatmullRomCurve3?d.closed:!1;S=d.computeFrenetFrames(f,se),E=new L,I=new L,v=new L}h||(g=0,p=0,m=0,_=0);let w=a.extractPoints(l),C=w.shape,D=w.holes;if(!_n.isClockWise(C)){C=C.reverse();for(let se=0,ue=D.length;se<ue;se++){let de=D[se];_n.isClockWise(de)&&(D[se]=de.reverse())}}function R(se){let de=10000000000000001e-36,fe=se[0];for(let _e=1;_e<=se.length;_e++){let Ge=_e%se.length,ze=se[Ge],Je=ze.x-fe.x,et=ze.y-fe.y,O=Je*Je+et*et,pt=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(fe.x),Math.abs(fe.y)),ot=de*pt*pt;if(O<=ot){se.splice(Ge,1),_e--;continue}fe=ze}}R(C),D.forEach(R);let P=D.length,F=C;for(let se=0;se<P;se++){let ue=D[se];C=C.concat(ue)}function k(se,ue,de){return ue||Xe("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ue,de)}let V=C.length;function te(se,ue,de){let fe,_e,Ge,ze=se.x-ue.x,Je=se.y-ue.y,et=de.x-se.x,O=de.y-se.y,pt=ze*ze+Je*Je,ot=ze*O-Je*et;if(Math.abs(ot)>Number.EPSILON){let N=Math.sqrt(pt),M=Math.sqrt(et*et+O*O),W=ue.x-Je/N,Z=ue.y+ze/N,ee=de.x-O/M,pe=de.y+et/M,ge=((ee-W)*O-(pe-Z)*et)/(ze*O-Je*et);fe=W+ze*ge-se.x,_e=Z+Je*ge-se.y;let ne=fe*fe+_e*_e;if(ne<=2)return new ae(fe,_e);Ge=Math.sqrt(ne/2)}else{let N=!1;ze>Number.EPSILON?et>Number.EPSILON&&(N=!0):ze<-Number.EPSILON?et<-Number.EPSILON&&(N=!0):Math.sign(Je)===Math.sign(O)&&(N=!0),N?(fe=-Je,_e=ze,Ge=Math.sqrt(pt)):(fe=ze,_e=Je,Ge=Math.sqrt(pt/2))}return new ae(fe/Ge,_e/Ge)}let J=[];for(let se=0,ue=F.length,de=ue-1,fe=se+1;se<ue;se++,de++,fe++)de===ue&&(de=0),fe===ue&&(fe=0),J[se]=te(F[se],F[de],F[fe]);let Y=[],K,le=J.concat();for(let se=0,ue=P;se<ue;se++){let de=D[se];K=[];for(let fe=0,_e=de.length,Ge=_e-1,ze=fe+1;fe<_e;fe++,Ge++,ze++)Ge===_e&&(Ge=0),ze===_e&&(ze=0),K[fe]=te(de[fe],de[Ge],de[ze]);Y.push(K),le=le.concat(K)}let me;if(g===0)me=_n.triangulateShape(F,D);else{let se=[],ue=[];for(let de=0;de<g;de++){let fe=de/g,_e=p*Math.cos(fe*Math.PI/2),Ge=m*Math.sin(fe*Math.PI/2)+_;for(let ze=0,Je=F.length;ze<Je;ze++){let et=k(F[ze],J[ze],Ge);he(et.x,et.y,-_e),fe===0&&se.push(et)}for(let ze=0,Je=P;ze<Je;ze++){let et=D[ze];K=Y[ze];let O=[];for(let pt=0,ot=et.length;pt<ot;pt++){let N=k(et[pt],K[pt],Ge);he(N.x,N.y,-_e),fe===0&&O.push(N)}fe===0&&ue.push(O)}}me=_n.triangulateShape(se,ue)}let Ue=me.length,$e=m+_;for(let se=0;se<V;se++){let ue=h?k(C[se],le[se],$e):C[se];y?(I.copy(S.normals[0]).multiplyScalar(ue.x),E.copy(S.binormals[0]).multiplyScalar(ue.y),v.copy(b[0]).add(I).add(E),he(v.x,v.y,v.z)):he(ue.x,ue.y,0)}for(let se=1;se<=f;se++)for(let ue=0;ue<V;ue++){let de=h?k(C[ue],le[ue],$e):C[ue];y?(I.copy(S.normals[se]).multiplyScalar(de.x),E.copy(S.binormals[se]).multiplyScalar(de.y),v.copy(b[se]).add(I).add(E),he(v.x,v.y,v.z)):he(de.x,de.y,u/f*se)}for(let se=g-1;se>=0;se--){let ue=se/g,de=p*Math.cos(ue*Math.PI/2),fe=m*Math.sin(ue*Math.PI/2)+_;for(let _e=0,Ge=F.length;_e<Ge;_e++){let ze=k(F[_e],J[_e],fe);he(ze.x,ze.y,u+de)}for(let _e=0,Ge=D.length;_e<Ge;_e++){let ze=D[_e];K=Y[_e];for(let Je=0,et=ze.length;Je<et;Je++){let O=k(ze[Je],K[Je],fe);y?he(O.x,O.y+b[f-1].y,b[f-1].x+de):he(O.x,O.y,u+de)}}}oe(),G();function oe(){let se=s.length/3;if(h){let ue=0,de=V*ue;for(let fe=0;fe<Ue;fe++){let _e=me[fe];Ce(_e[2]+de,_e[1]+de,_e[0]+de)}ue=f+g*2,de=V*ue;for(let fe=0;fe<Ue;fe++){let _e=me[fe];Ce(_e[0]+de,_e[1]+de,_e[2]+de)}}else{for(let ue=0;ue<Ue;ue++){let de=me[ue];Ce(de[2],de[1],de[0])}for(let ue=0;ue<Ue;ue++){let de=me[ue];Ce(de[0]+V*f,de[1]+V*f,de[2]+V*f)}}i.addGroup(se,s.length/3-se,0)}function G(){let se=s.length/3,ue=0;$(F,ue),ue+=F.length;for(let de=0,fe=D.length;de<fe;de++){let _e=D[de];$(_e,ue),ue+=_e.length}i.addGroup(se,s.length/3-se,1)}function $(se,ue){let de=se.length;for(;--de>=0;){let fe=de,_e=de-1;_e<0&&(_e=se.length-1);for(let Ge=0,ze=f+g*2;Ge<ze;Ge++){let Je=V*Ge,et=V*(Ge+1),O=ue+fe+Je,pt=ue+_e+Je,ot=ue+_e+et,N=ue+fe+et;Re(O,pt,ot,N)}}}function he(se,ue,de){c.push(se),c.push(ue),c.push(de)}function Ce(se,ue,de){Ve(se),Ve(ue),Ve(de);let fe=s.length/3,_e=x.generateTopUV(i,s,fe-3,fe-2,fe-1);Ze(_e[0]),Ze(_e[1]),Ze(_e[2])}function Re(se,ue,de,fe){Ve(se),Ve(ue),Ve(fe),Ve(ue),Ve(de),Ve(fe);let _e=s.length/3,Ge=x.generateSideWallUV(i,s,_e-6,_e-3,_e-2,_e-1);Ze(Ge[0]),Ze(Ge[1]),Ze(Ge[3]),Ze(Ge[1]),Ze(Ge[2]),Ze(Ge[3])}function Ve(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function Ze(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return jf(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Vo[s.type]().fromJSON(s)),new n(i,e.options)}},$f={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],f=e[s*3+1];return[new ae(r,o),new ae(a,c),new ae(l,f)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],f=e[i*3+1],u=e[i*3+2],h=e[s*3],p=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],d=e[r*3+2];return Math.abs(a-f)<Math.abs(o-l)?[new ae(o,1-c),new ae(l,1-u),new ae(h,1-m),new ae(_,1-d)]:[new ae(a,1-c),new ae(f,1-u),new ae(p,1-m),new ae(g,1-d)]}};function jf(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yn=class n extends ft{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],f=1/t,u=new L,h=new ae,p=new L,m=new L,_=new L,g=0,d=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-g,p.z=d*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,d=e[x+1].y-e[x].y,p.x=d*1,p.y=-g,p.z=d*0,m.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(m)}for(let x=0;x<=t;x++){let b=i+x*f*s,y=Math.sin(b),S=Math.cos(b);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*S,o.push(u.x,u.y,u.z),h.x=x/t,h.y=E/(e.length-1),a.push(h.x,h.y);let I=c[3*E+0]*y,v=c[3*E+1],w=c[3*E+0]*S;l.push(I,v,w)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){let y=b+x*e.length,S=y,E=y+e.length,I=y+e.length+1,v=y+1;r.push(S,E,v),r.push(I,v,E)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Vn=class n extends ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,f=c+1,u=e/a,h=t/c,p=[],m=[],_=[],g=[];for(let d=0;d<f;d++){let x=d*h-o;for(let b=0;b<l;b++){let y=b*u-r;m.push(y,-x,0),_.push(0,0,1),g.push(b/a),g.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<a;x++){let b=x+l*d,y=x+l*(d+1),S=x+1+l*(d+1),E=x+1+l*d;p.push(b,y,E),p.push(y,S,E)}this.setIndex(p),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var yr=class n extends ft{constructor(e=new It([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let f=0;f<e.length;f++)l(e[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function l(f){let u=s.length/3,h=f.extractPoints(t),p=h.shape,m=h.holes;_n.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,d=m.length;g<d;g++){let x=m[g];_n.isClockWise(x)===!0&&(m[g]=x.reverse())}let _=_n.triangulateShape(p,m);for(let g=0,d=m.length;g<d;g++){let x=m[g];p=p.concat(x)}for(let g=0,d=p.length;g<d;g++){let x=p[g];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,d=_.length;g<d;g++){let x=_[g],b=x[0]+u,y=x[1]+u,S=x[2]+u;i.push(b,y,S),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Qf(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function Qf(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var mi=class n extends ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,f=[],u=new L,h=new L,p=[],m=[],_=[],g=[];for(let d=0;d<=i;d++){let x=[],b=d/i,y=o+b*a,S=e*Math.cos(y),E=Math.sqrt(e*e-S*S),I=0;d===0&&o===0?I=.5/t:d===i&&c===Math.PI&&(I=-.5/t);for(let v=0;v<=t;v++){let w=v/t,C=s+w*r;u.x=-E*Math.cos(C),u.y=S,u.z=E*Math.sin(C),m.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),g.push(w+I,1-b),x.push(l++)}f.push(x)}for(let d=0;d<i;d++)for(let x=0;x<t;x++){let b=f[d][x+1],y=f[d][x],S=f[d+1][x],E=f[d+1][x+1];(d!==0||o>0)&&p.push(b,y,E),(d!==i-1||c<Math.PI)&&p.push(y,S,E)}this.setIndex(p),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Dt=class n extends ft{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],f=[],u=[],h=new L,p=new L,m=new L;for(let _=0;_<=i;_++){let g=o+_/i*a;for(let d=0;d<=s;d++){let x=d/s*r;p.x=(e+t*Math.cos(g))*Math.cos(x),p.y=(e+t*Math.cos(g))*Math.sin(x),p.z=t*Math.sin(g),l.push(p.x,p.y,p.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),m.subVectors(p,h).normalize(),f.push(m.x,m.y,m.z),u.push(d/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){let d=(s+1)*_+g-1,x=(s+1)*(_-1)+g-1,b=(s+1)*(_-1)+g,y=(s+1)*_+g;c.push(d,x,y),c.push(x,b,y)}this.setIndex(c),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var vr=class n extends ft{constructor(e=new pr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new ae,f=new L,u=[],h=[],p=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2));function _(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),x(),d()}function g(b){f=e.getPointAt(b/t,f);let y=o.normals[b],S=o.binormals[b];for(let E=0;E<=s;E++){let I=E/s*Math.PI*2,v=Math.sin(I),w=-Math.cos(I);c.x=w*y.x+v*S.x,c.y=w*y.y+v*S.y,c.z=w*y.z+v*S.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=f.x+i*c.x,a.y=f.y+i*c.y,a.z=f.z+i*c.z,u.push(a.x,a.y,a.z)}}function d(){for(let b=1;b<=t;b++)for(let y=1;y<=s;y++){let S=(s+1)*(b-1)+(y-1),E=(s+1)*b+(y-1),I=(s+1)*b+y,v=(s+1)*(b-1)+y;m.push(S,E,v),m.push(E,I,v)}}function x(){for(let b=0;b<=t;b++)for(let y=0;y<=s;y++)l.x=b/t,l.y=y/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Vo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var br=class extends Cn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Hi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Dh(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Dh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function $t(n){let e={};for(let t=0;t<n.length;t++){let i=Hi(n[t]);for(let s in i)e[s]=i[s]}return e}function Dh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ep(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Cu={clone:Hi,merge:$t},tp=`void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
  gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tp,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=ep(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new dt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Wo=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pn=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ss=class extends Pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ui=class extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=ra,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xo=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qo=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ss(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ul(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var gi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yo=class extends gi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kl:r=e,a=2*t-i;break;case zl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case kl:o=e,c=2*i-t;break;case zl:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,f=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,m=(i-t)/(s-t),_=m*m,g=_*m,d=-h*g+2*h*_-h*m,x=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,b=(-1-p)*g+(1.5+p)*_+.5*m,y=p*g-p*_;for(let S=0;S!==a;++S)r[S]=d*o[f+S]+x*o[l+S]+b*o[c+S]+y*o[u+S];return r}},Zo=class extends gi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=(i-t)/(s-t),u=1-f;for(let h=0;h!==a;++h)r[h]=o[l+h]*u+o[c+h]*f;return r}},Jo=class extends gi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ko=class extends gi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=this.inTangents,u=this.outTangents;if(!f||!u){let m=(i-t)/(s-t),_=1-m;for(let g=0;g!==a;++g)r[g]=o[l+g]*_+o[c+g]*m;return r}let h=a*2,p=e-1;for(let m=0;m!==a;++m){let _=o[l+m],g=o[c+m],d=p*h+m*2,x=u[d],b=u[d+1],y=e*h+m*2,S=f[y],E=f[y+1],I=sp(i,t,x,S,s);r[m]=Pu(I,_,b,E,g)}return r}};function Pu(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function ip(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function sp(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Pu(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=ip(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var pn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Ul(e.settings)&&(i.settings={inTangents:ss(e.settings.inTangents,Array),outTangents:ss(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ko(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Io:t=this.InterpolantFactoryMethodLinear;break;case vo:t=this.InterpolantFactoryMethodSmooth;break;case Ol:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return vo;case this.InterpolantFactoryMethodBezier:return Ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Ul(this.settings)&&(Lh(this.settings.inTangents,e),Lh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Xe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Xe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Wd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Xe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===vo,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],f=e[a+1];if(l!==f&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,h=u-i,p=u+i;for(let m=0;m!==i;++m){let _=t[u+m];if(_!==t[h+m]||_!==t[p+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ul(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=Io;var _i=class extends pn{constructor(e,t,i){super(e,t,i)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=js;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}};$o.prototype.ValueTypeName="color";var jo=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}};jo.prototype.ValueTypeName="number";var Qo=class extends gi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let f=l+a;l!==f;l+=4)tn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Sr=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Qo(this.times,this.values,this.getValueSize(),e)}};Sr.prototype.ValueTypeName="quaternion";Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends pn{constructor(e,t,i){super(e,t,i)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=js;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}};ea.prototype.ValueTypeName="vector";var ta=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){let u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=l.length;u<h;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(f))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Iu=new ta,na=class{constructor(e){this.manager=e!==void 0?e:Iu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};na.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ms=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Mr=class extends Ms{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fl=new dt,Nh=new L,Uh=new L,Er=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Fl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===hs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_o=new L,xo=new tn,Bn=new L,wr=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_o,xo,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,xo,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(_o,xo,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,xo,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hi=new L,Fh=new ae,Oh=new ae,Wt=class extends wr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,Oh),t.subVectors(Oh,Fh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Wl=class extends Er{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}},Tr=class extends Ms{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Wl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ei=class extends wr{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xl=class extends Er{constructor(){super(new ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fi=class extends Ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Xl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rs=-90,os=1,ia=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(rs,os,e,t);s.layers=this.layers,this.add(s);let r=new Wt(rs,os,e,t);r.layers=this.layers,this.add(r);let o=new Wt(rs,os,e,t);o.layers=this.layers,this.add(o);let a=new Wt(rs,os,e,t);a.layers=this.layers,this.add(a);let c=new Wt(rs,os,e,t);c.layers=this.layers,this.add(c);let l=new Wt(rs,os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===hs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(u,h,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},sa=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var yc="\\[\\]\\.:\\/",rp=new RegExp("["+yc+"]","g"),vc="[^"+yc+"]",op="[^"+yc.replace("\\.","")+"]",ap=/((?:WC+[\/:])*)/.source.replace("WC",vc),lp=/(WCOD+)?/.source.replace("WCOD",op),cp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),hp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),up=new RegExp("^"+ap+lp+cp+hp+"$"),dp=["material","materials","bones","map"],ql=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rp,"")}static parseTrackName(e){let t=up.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);dp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=ql;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ux=new Float32Array(1);var Bh=new dt,Ar=class{constructor(e,t,i=0,s=1/0){this.ray=new di(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(e,t=!0,i=[]){return Yl(e,this,i,t),i.sort(kh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Yl(e[s],this,i,t);return i.sort(kh),i}};function kh(n,e){return n.distance-e.distance}function Yl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Yl(r[o],e,t,!0)}}var Es=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Zl=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var yo=new Mt,Rr=class extends xs{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new ft;r.setIndex(new Xt(i,1)),r.setAttribute("position",new Xt(s,3)),super(r,new Di({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&yo.setFromObject(this.object),yo.isEmpty())return;let e=yo.min,t=yo.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Cr=class extends Rn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function bc(n,e,t,i){let s=fp(i);switch(t){case dc:return n*e;case da:return n*e/s.components*s.byteLength;case fa:return n*e/s.components*s.byteLength;case wi:return n*e*2/s.components*s.byteLength;case pa:return n*e*2/s.components*s.byteLength;case fc:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case ma:return n*e*4/s.components*s.byteLength;case Lr:case Nr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Fr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _a:case ya:return Math.max(n,16)*Math.max(e,8)/4;case ga:case xa:return Math.max(n,8)*Math.max(e,8)/2;case va:case ba:case Ma:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sa:case Or:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Na:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Oa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case za:case Ha:case Va:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ga:case Wa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Br:case Xa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fp(n){switch(n){case on:case lc:return{byteLength:1,components:1};case As:case cc:case Ln:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case Dn:case ca:case vn:return{byteLength:4,components:1};case hc:case uc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qu(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function bp(n){let e=new WeakMap;function t(a,c){let l=a.array,f=a.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,f),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let f=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,f);else{u.sort((p,m)=>p.start-m.start);let h=0;for(let p=1;p<u.length;p++){let m=u[h],_=u[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,u[h]=_)}u.length=h+1;for(let p=0,m=u.length;p<m;p++){let _=u[p];n.bufferSubData(l,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Sp=`#ifdef USE_ALPHAHASH
  if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
  const float ALPHA_HASH_SCALE = 0.05;
  float hash2D( vec2 value ) {
    return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
  }
  float hash3D( vec3 value ) {
    return hash2D( vec2( hash2D( value.xy ), value.z ) );
  }
  float getAlphaHashThreshold( vec3 position ) {
    float maxDeriv = max(
      length( dFdx( position.xyz ) ),
      length( dFdy( position.xyz ) )
    );
    float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
    vec2 pixScales = vec2(
      exp2( floor( log2( pixScale ) ) ),
      exp2( ceil( log2( pixScale ) ) )
    );
    vec2 alpha = vec2(
      hash3D( floor( pixScales.x * position.xyz ) ),
      hash3D( floor( pixScales.y * position.xyz ) )
    );
    float lerpFactor = fract( log2( pixScale ) );
    float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
    float a = min( lerpFactor, 1.0 - lerpFactor );
    vec3 cases = vec3(
      x * x / ( 2.0 * a * ( 1.0 - a ) ),
      ( x - 0.5 * a ) / ( 1.0 - a ),
      1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
    );
    float threshold = ( x < ( 1.0 - a ) )
      ? ( ( x < a ) ? cases.x : cases.y )
      : cases.z;
    return clamp( threshold , 1.0e-6, 1.0 );
  }
#endif`,Ep=`#ifdef USE_ALPHAMAP
  diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wp=`#ifdef USE_ALPHAMAP
  uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
  #ifdef ALPHA_TO_COVERAGE
  diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
  if ( diffuseColor.a == 0.0 ) discard;
  #else
  if ( diffuseColor.a < alphaTest ) discard;
  #endif
#endif`,Ap=`#ifdef USE_ALPHATEST
  uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
  float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
  reflectedLight.indirectDiffuse *= ambientOcclusion;
  #if defined( USE_CLEARCOAT )
    clearcoatSpecularIndirect *= ambientOcclusion;
  #endif
  #if defined( USE_SHEEN )
    sheenSpecularIndirect *= ambientOcclusion;
  #endif
  #if defined( USE_ENVMAP ) && defined( STANDARD )
    float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
    reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
  #endif
#endif`,Cp=`#ifdef USE_AOMAP
  uniform sampler2D aoMap;
  uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
  #if ! defined( GL_ANGLE_multi_draw )
  #define gl_DrawID _gl_DrawID
  uniform int _gl_DrawID;
  #endif
  uniform highp sampler2D batchingTexture;
  uniform highp usampler2D batchingIdTexture;
  mat4 getBatchingMatrix( const in float i ) {
    int size = textureSize( batchingTexture, 0 ).x;
    int j = int( i ) * 4;
    int x = j % size;
    int y = j / size;
    vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
    vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
    vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
    vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
    return mat4( v1, v2, v3, v4 );
  }
  float getIndirectIndex( const in int i ) {
    int size = textureSize( batchingIdTexture, 0 ).x;
    int x = i % size;
    int y = i / size;
    return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
  }
#endif
#ifdef USE_BATCHING_COLOR
  uniform sampler2D batchingColorTexture;
  vec4 getBatchingColor( const in float i ) {
    int size = textureSize( batchingColorTexture, 0 ).x;
    int j = int( i );
    int x = j % size;
    int y = j / size;
    return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
  }
#endif`,Ip=`#ifdef USE_BATCHING
  mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
  vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
  vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
  return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
  return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
  vec3 halfDir = normalize( lightDir + viewDir );
  float dotNH = saturate( dot( normal, halfDir ) );
  float dotVH = saturate( dot( viewDir, halfDir ) );
  vec3 F = F_Schlick( specularColor, 1.0, dotVH );
  float G = G_BlinnPhong_Implicit( );
  float D = D_BlinnPhong( shininess, dotNH );
  return F * ( G * D );
} // validated`,Up=`#ifdef USE_IRIDESCENCE
  const mat3 XYZ_TO_REC709 = mat3(
     3.2404542, -0.9692660,  0.0556434,
    -1.5371385,  1.8760108, -0.2040259,
    -0.4985314,  0.0415560,  1.0572252
  );
  vec3 Fresnel0ToIor( vec3 fresnel0 ) {
    vec3 sqrtF0 = sqrt( fresnel0 );
    return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
  }
  vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
    return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
  }
  float IorToFresnel0( float transmittedIor, float incidentIor ) {
    return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
  }
  vec3 evalSensitivity( float OPD, vec3 shift ) {
    float phase = 2.0 * PI * OPD * 1.0e-9;
    vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
    vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
    vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
    vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
    xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
    xyz /= 1.0685e-7;
    vec3 rgb = XYZ_TO_REC709 * xyz;
    return rgb;
  }
  vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
    vec3 I;
    float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
    float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
    float cosTheta2Sq = 1.0 - sinTheta2Sq;
    if ( cosTheta2Sq < 0.0 ) {
      return vec3( 1.0 );
    }
    float cosTheta2 = sqrt( cosTheta2Sq );
    float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
    float R12 = F_Schlick( R0, 1.0, cosTheta1 );
    float T121 = 1.0 - R12;
    float phi12 = 0.0;
    if ( iridescenceIOR < outsideIOR ) phi12 = PI;
    float phi21 = PI - phi12;
    vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
    vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
    vec3 phi23 = vec3( 0.0 );
    if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
    if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
    if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
    float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
    vec3 phi = vec3( phi21 ) + phi23;
    vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
    vec3 r123 = sqrt( R123 );
    vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
    vec3 C0 = R12 + Rs;
    I = C0;
    vec3 Cm = Rs - T121;
    for ( int m = 1; m <= 2; ++ m ) {
      Cm *= r123;
      vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
      I += Cm * Sm;
    }
    return max( I, vec3( 0.0 ) );
  }
#endif`,Fp=`#ifdef USE_BUMPMAP
  uniform sampler2D bumpMap;
  uniform float bumpScale;
  vec2 dHdxy_fwd() {
    vec2 dSTdx = dFdx( vBumpMapUv );
    vec2 dSTdy = dFdy( vBumpMapUv );
    float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
    float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
    float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
    return vec2( dBx, dBy );
  }
  vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
    vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
    vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
    vec3 vN = surf_norm;
    vec3 R1 = cross( vSigmaY, vN );
    vec3 R2 = cross( vN, vSigmaX );
    float fDet = dot( vSigmaX, R1 ) * faceDirection;
    vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
    return normalize( abs( fDet ) * surf_norm - vGrad );
  }
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
  vec4 plane;
  #ifdef ALPHA_TO_COVERAGE
    float distanceToPlane, distanceGradient;
    float clipOpacity = 1.0;
    #pragma unroll_loop_start
    for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
      plane = clippingPlanes[ i ];
      distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
      distanceGradient = fwidth( distanceToPlane ) / 2.0;
      clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
      if ( clipOpacity == 0.0 ) discard;
    }
    #pragma unroll_loop_end
    #if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
      float unionClipOpacity = 1.0;
      #pragma unroll_loop_start
      for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
        plane = clippingPlanes[ i ];
        distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
        distanceGradient = fwidth( distanceToPlane ) / 2.0;
        unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
      }
      #pragma unroll_loop_end
      clipOpacity *= 1.0 - unionClipOpacity;
    #endif
    diffuseColor.a *= clipOpacity;
    if ( diffuseColor.a == 0.0 ) discard;
  #else
    #pragma unroll_loop_start
    for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
      plane = clippingPlanes[ i ];
      if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
    }
    #pragma unroll_loop_end
    #if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
      bool clipped = true;
      #pragma unroll_loop_start
      for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
        plane = clippingPlanes[ i ];
        clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
      }
      #pragma unroll_loop_end
      if ( clipped ) discard;
    #endif
  #endif
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
  uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
  vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  diffuseColor *= vColor;
#endif`,Vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  varying vec4 vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
  vColor *= color;
#elif defined( USE_COLOR )
  vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
  vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
  vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
  const highp float a = 12.9898, b = 78.233, c = 43758.5453;
  highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
  return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
  float precisionSafeLength( vec3 v ) { return length( v ); }
#else
  float precisionSafeLength( vec3 v ) {
    float maxComponent = max3( abs( v ) );
    return length( v / maxComponent ) * maxComponent;
  }
#endif
struct IncidentLight {
  vec3 color;
  vec3 direction;
  bool visible;
};
struct ReflectedLight {
  vec3 directDiffuse;
  vec3 directSpecular;
  vec3 indirectDiffuse;
  vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
  varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
  return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
  return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
  return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
  return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
  float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
  float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
  return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
  return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
  float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
  return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
  float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
  return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
  #define cubeUV_minMipLevel 4.0
  #define cubeUV_minTileSize 16.0
  float getFace( vec3 direction ) {
    vec3 absDirection = abs( direction );
    float face = - 1.0;
    if ( absDirection.x > absDirection.z ) {
      if ( absDirection.x > absDirection.y )
        face = direction.x > 0.0 ? 0.0 : 3.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
      if ( absDirection.z > absDirection.y )
        face = direction.z > 0.0 ? 2.0 : 5.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
  }
  vec2 getUV( vec3 direction, float face ) {
    vec2 uv;
    if ( face == 0.0 ) {
      uv = vec2( direction.z, direction.y ) / abs( direction.x );
    } else if ( face == 1.0 ) {
      uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
    } else if ( face == 2.0 ) {
      uv = vec2( - direction.x, direction.y ) / abs( direction.z );
    } else if ( face == 3.0 ) {
      uv = vec2( - direction.z, direction.y ) / abs( direction.x );
    } else if ( face == 4.0 ) {
      uv = vec2( - direction.x, direction.z ) / abs( direction.y );
    } else {
      uv = vec2( direction.x, direction.y ) / abs( direction.z );
    }
    return 0.5 * ( uv + 1.0 );
  }
  vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
    float face = getFace( direction );
    float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
    mipInt = max( mipInt, cubeUV_minMipLevel );
    float faceSize = exp2( mipInt );
    highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
    if ( face > 2.0 ) {
      uv.y += faceSize;
      face -= 3.0;
    }
    uv.x += face * faceSize;
    uv.x += filterInt * 3.0 * cubeUV_minTileSize;
    uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
    uv.x *= CUBEUV_TEXEL_WIDTH;
    uv.y *= CUBEUV_TEXEL_HEIGHT;
    #ifdef texture2DGradEXT
      return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
    #else
      return texture2D( envMap, uv ).rgb;
    #endif
  }
  #define cubeUV_r0 1.0
  #define cubeUV_m0 - 2.0
  #define cubeUV_r1 0.8
  #define cubeUV_m1 - 1.0
  #define cubeUV_r4 0.4
  #define cubeUV_m4 2.0
  #define cubeUV_r5 0.305
  #define cubeUV_m5 3.0
  #define cubeUV_r6 0.21
  #define cubeUV_m6 4.0
  float roughnessToMip( float roughness ) {
    float mip = 0.0;
    if ( roughness >= cubeUV_r1 ) {
      mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
    } else if ( roughness >= cubeUV_r4 ) {
      mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
    } else if ( roughness >= cubeUV_r5 ) {
      mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
    } else if ( roughness >= cubeUV_r6 ) {
      mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
    } else {
      mip = - 2.0 * log2( 1.16 * roughness );		}
    return mip;
  }
  vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
    float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
    float mipF = fract( mip );
    float mipInt = floor( mip );
    vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
    if ( mipF == 0.0 ) {
      return vec4( color0, 1.0 );
    } else {
      vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
      return vec4( mix( color0, color1, mipF ), 1.0 );
    }
  }
#endif`,Yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
  vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
  mat3 bm = mat3( batchingMatrix );
  transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
  transformedNormal = bm * transformedNormal;
  #ifdef USE_TANGENT
    transformedTangent = bm * transformedTangent;
  #endif
#endif
#ifdef USE_INSTANCING
  mat3 im = mat3( instanceMatrix );
  transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
  transformedNormal = im * transformedNormal;
  #ifdef USE_TANGENT
    transformedTangent = im * transformedTangent;
  #endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
  transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
  transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
  uniform sampler2D displacementMap;
  uniform float displacementScale;
  uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
  transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
  vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
  #ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
    emissiveColor = sRGBTransferEOTF( emissiveColor );
  #endif
  totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
  uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
  return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
  #ifdef ENV_WORLDPOS
    vec3 cameraToFrag;
    if ( isOrthographic ) {
      cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
    } else {
      cameraToFrag = normalize( vWorldPosition - cameraPosition );
    }
    vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
    #ifdef ENVMAP_MODE_REFLECTION
      vec3 reflectVec = reflect( cameraToFrag, worldNormal );
    #else
      vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
    #endif
  #else
    vec3 reflectVec = vReflect;
  #endif
  #ifdef ENVMAP_TYPE_CUBE
    vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
    #ifdef ENVMAP_BLENDING_MULTIPLY
      outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
    #elif defined( ENVMAP_BLENDING_MIX )
      outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
    #elif defined( ENVMAP_BLENDING_ADD )
      outgoingLight += envColor.xyz * specularStrength * reflectivity;
    #endif
  #endif
#endif`,tm=`#ifdef USE_ENVMAP
  uniform float envMapIntensity;
  uniform mat3 envMapRotation;
  #ifdef ENVMAP_TYPE_CUBE
    uniform samplerCube envMap;
  #else
    uniform sampler2D envMap;
  #endif
#endif`,nm=`#ifdef USE_ENVMAP
  uniform float reflectivity;
  #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
    #define ENV_WORLDPOS
  #endif
  #ifdef ENV_WORLDPOS
    varying vec3 vWorldPosition;
    uniform float refractionRatio;
  #else
    varying vec3 vReflect;
  #endif
#endif`,im=`#ifdef USE_ENVMAP
  #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
    #define ENV_WORLDPOS
  #endif
  #ifdef ENV_WORLDPOS

    varying vec3 vWorldPosition;
  #else
    varying vec3 vReflect;
    uniform float refractionRatio;
  #endif
#endif`,sm=`#ifdef USE_ENVMAP
  #ifdef ENV_WORLDPOS
    vWorldPosition = worldPosition.xyz;
  #else
    vec3 cameraToVertex;
    if ( isOrthographic ) {
      cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
    } else {
      cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
    }
    vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
    #ifdef ENVMAP_MODE_REFLECTION
      vReflect = reflect( cameraToVertex, worldNormal );
    #else
      vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
    #endif
  #endif
#endif`,rm=`#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
  varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
  uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
  float dotNL = dot( normal, lightDirection );
  vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
  #ifdef USE_GRADIENTMAP
    return vec3( texture2D( gradientMap, coord ).r );
  #else
    vec2 fw = fwidth( coord ) * 0.5;
    return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
  #endif
}`,hm=`#ifdef USE_LIGHTMAP
  uniform sampler2D lightMap;
  uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
struct LambertMaterial {
  vec3 diffuseColor;
  float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
  float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
  vec3 irradiance = dotNL * directLight.color;
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
  uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
  float x = normal.x, y = normal.y, z = normal.z;
  vec3 result = shCoefficients[ 0 ] * 0.886227;
  result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
  result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
  result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
  result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
  result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
  result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
  result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
  result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
  return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
  vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
  vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
  return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
  vec3 irradiance = ambientLightColor;
  return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
  float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
  if ( cutoffDistance > 0.0 ) {
    distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
  }
  return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
  return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
  struct SunLight {
    vec3 direction;
    vec3 color;
  };
  uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
  void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
    light.color = sunLight.color;
    light.direction = sunLight.direction;
    light.visible = true;
  }
#endif
#if NUM_DIR_LIGHTS > 0
  struct DirectionalLight {
    vec3 direction;
    vec3 color;
  };
  uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
  void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
    light.color = directionalLight.color;
    light.direction = directionalLight.direction;
    light.visible = true;
  }
#endif
#if NUM_POINT_LIGHTS > 0
  struct PointLight {
    vec3 position;
    vec3 color;
    float distance;
    float decay;
  };
  uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
  void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
    vec3 lVector = pointLight.position - geometryPosition;
    light.direction = normalize( lVector );
    float lightDistance = length( lVector );
    light.color = pointLight.color;
    light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
    light.visible = ( light.color != vec3( 0.0 ) );
  }
#endif
#if NUM_SPOT_LIGHTS > 0
  struct SpotLight {
    vec3 position;
    vec3 direction;
    vec3 color;
    float distance;
    float decay;
    float coneCos;
    float penumbraCos;
  };
  uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
  void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
    vec3 lVector = spotLight.position - geometryPosition;
    light.direction = normalize( lVector );
    float angleCos = dot( light.direction, spotLight.direction );
    float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
    if ( spotAttenuation > 0.0 ) {
      float lightDistance = length( lVector );
      light.color = spotLight.color * spotAttenuation;
      light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
      light.visible = ( light.color != vec3( 0.0 ) );
    } else {
      light.color = vec3( 0.0 );
      light.visible = false;
    }
  }
#endif
#if NUM_RECT_AREA_LIGHTS > 0
  struct RectAreaLight {
    vec3 color;
    vec3 position;
    vec3 halfWidth;
    vec3 halfHeight;
  };
  uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
  uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
  struct HemisphereLight {
    vec3 direction;
    vec3 skyColor;
    vec3 groundColor;
  };
  uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
  vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
    float dotNL = dot( normal, hemiLight.direction );
    float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
    vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
    return irradiance;
  }
#endif
#include <lightprobes_pars_fragment>`,pm=`#ifdef USE_ENVMAP
  vec3 getIBLIrradiance( const in vec3 normal ) {
    #ifdef ENVMAP_TYPE_CUBE_UV
      vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
      vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
      return PI * envMapColor.rgb * envMapIntensity;
    #else
      return vec3( 0.0 );
    #endif
  }
  vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
    #ifdef ENVMAP_TYPE_CUBE_UV
      vec3 reflectVec = reflect( - viewDir, normal );
      reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
      reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
      vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
      return envMapColor.rgb * envMapIntensity;
    #else
      return vec3( 0.0 );
    #endif
  }
  #ifdef USE_RETROREFLECTION
    vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
      #ifdef ENVMAP_TYPE_CUBE_UV
        vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
        retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
        vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
        return envMapColor.rgb * envMapIntensity;
      #else
        return vec3( 0.0 );
      #endif
    }
  #endif
  #ifdef USE_ANISOTROPY
    vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
      #ifdef ENVMAP_TYPE_CUBE_UV
        vec3 bentNormal = cross( bitangent, viewDir );
        bentNormal = normalize( cross( bentNormal, bitangent ) );
        bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
        return getIBLRadiance( viewDir, bentNormal, roughness );
      #else
        return vec3( 0.0 );
      #endif
    }
    #ifdef USE_RETROREFLECTION
      vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
        #ifdef ENVMAP_TYPE_CUBE_UV
          vec3 bentNormal = cross( bitangent, viewDir );
          bentNormal = normalize( cross( bentNormal, bitangent ) );
          bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
          return getIBLRetroRadiance( viewDir, bentNormal, roughness );
        #else
          return vec3( 0.0 );
        #endif
      }
    #endif
  #endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
  vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
  vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
  vec3 diffuseColor;
  vec3 specularColor;
  float specularShininess;
  float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
  float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
  vec3 irradiance = dotNL * directLight.color;
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
  reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
  material.ior = ior;
  #ifdef USE_SPECULAR
    float specularIntensityFactor = specularIntensity;
    vec3 specularColorFactor = specularColor;
    #ifdef USE_SPECULAR_COLORMAP
      specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
    #endif
    #ifdef USE_SPECULAR_INTENSITYMAP
      specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
    #endif
    material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
  #else
    float specularIntensityFactor = 1.0;
    vec3 specularColorFactor = vec3( 1.0 );
    material.specularF90 = 1.0;
  #endif
  material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
  material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
  material.specularColor = vec3( 0.04 );
  material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
  material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
  material.clearcoat = clearcoat;
  material.clearcoatRoughness = clearcoatRoughness;
  material.clearcoatF0 = vec3( 0.04 );
  material.clearcoatF90 = 1.0;
  #ifdef USE_CLEARCOATMAP
    material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
  #endif
  #ifdef USE_CLEARCOAT_ROUGHNESSMAP
    material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
  #endif
  material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
  material.clearcoatRoughness += geometryRoughness;
  material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
  material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
  material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
  material.iridescence = iridescence;
  material.iridescenceIOR = iridescenceIOR;
  #ifdef USE_IRIDESCENCEMAP
    material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
  #endif
  #ifdef USE_IRIDESCENCE_THICKNESSMAP
    material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
  #else
    material.iridescenceThickness = iridescenceThicknessMaximum;
  #endif
#endif
#ifdef USE_SHEEN
  material.sheenColor = sheenColor;
  #ifdef USE_SHEEN_COLORMAP
    material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
  #endif
  material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
  #ifdef USE_SHEEN_ROUGHNESSMAP
    material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
  #endif
#endif
#ifdef USE_ANISOTROPY
  #ifdef USE_ANISOTROPYMAP
    mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
    vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
    vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
  #else
    vec2 anisotropyV = anisotropyVector;
  #endif
  material.anisotropy = length( anisotropyV );
  if( material.anisotropy == 0.0 ) {
    anisotropyV = vec2( 1.0, 0.0 );
  } else {
    anisotropyV /= material.anisotropy;
    material.anisotropy = saturate( material.anisotropy );
  }
  material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
  material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
  material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
  vec3 diffuseColor;
  vec3 diffuseContribution;
  vec3 specularColor;
  vec3 specularColorBlended;
  float roughness;
  float metalness;
  float specularF90;
  float dispersion;
  vec2 dfg;
  vec3 multiScatteringCompensation;
  #ifdef USE_RETROREFLECTION
    float retroreflectivity;
  #endif
  #ifdef USE_CLEARCOAT
    float clearcoat;
    float clearcoatRoughness;
    vec3 clearcoatF0;
    float clearcoatF90;
  #endif
  #ifdef USE_IRIDESCENCE
    float iridescence;
    float iridescenceIOR;
    float iridescenceThickness;
    vec3 iridescenceFresnel;
    vec3 iridescenceF0Dielectric;
    vec3 iridescenceF0Metallic;
  #endif
  #ifdef USE_SHEEN
    vec3 sheenColor;
    float sheenRoughness;
  #endif
  #ifdef IOR
    float ior;
  #endif
  #ifdef USE_TRANSMISSION
    float transmission;
    float transmissionAlpha;
    float thickness;
    float attenuationDistance;
    vec3 attenuationColor;
  #endif
  #ifdef USE_ANISOTROPY
    float anisotropy;
    float alphaT;
    vec3 anisotropyT;
    vec3 anisotropyB;
  #endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
  float a2 = pow2( alpha );
  float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
  float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
  return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
  float a2 = pow2( alpha );
  float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
  return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
  float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
    float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
    float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
    return 0.5 / max( gv + gl, EPSILON );
  }
  float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
    float a2 = alphaT * alphaB;
    highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
    highp float v2 = dot( v, v );
    float w2 = a2 / v2;
    return RECIPROCAL_PI * a2 * pow2 ( w2 );
  }
#endif
#ifdef USE_CLEARCOAT
  vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
    vec3 f0 = material.clearcoatF0;
    float f90 = material.clearcoatF90;
    float roughness = material.clearcoatRoughness;
    float alpha = pow2( roughness );
    vec3 halfDir = normalize( lightDir + viewDir );
    float dotNL = saturate( dot( normal, lightDir ) );
    float dotNV = saturate( dot( normal, viewDir ) );
    float dotNH = saturate( dot( normal, halfDir ) );
    float dotVH = saturate( dot( viewDir, halfDir ) );
    vec3 F = F_Schlick( f0, f90, dotVH );
    float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
    float D = D_GGX( alpha, dotNH );
    return F * ( V * D );
  }
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
  vec3 f0 = material.specularColorBlended;
  float f90 = material.specularF90;
  float roughness = material.roughness;
  float alpha = pow2( roughness );
  vec3 halfDir = normalize( lightDir + viewDir );
  float dotNL = saturate( dot( normal, lightDir ) );
  float dotNV = saturate( dot( normal, viewDir ) );
  float dotNH = saturate( dot( normal, halfDir ) );
  float dotVH = saturate( dot( viewDir, halfDir ) );
  vec3 F = F_Schlick( f0, f90, dotVH );
  #ifdef USE_IRIDESCENCE
    F = mix( F, material.iridescenceFresnel, material.iridescence );
  #endif
  #ifdef USE_ANISOTROPY
    float dotTL = dot( material.anisotropyT, lightDir );
    float dotTV = dot( material.anisotropyT, viewDir );
    float dotTH = dot( material.anisotropyT, halfDir );
    float dotBL = dot( material.anisotropyB, lightDir );
    float dotBV = dot( material.anisotropyB, viewDir );
    float dotBH = dot( material.anisotropyB, halfDir );
    float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
    float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
  #else
    float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
    float D = D_GGX( alpha, dotNH );
  #endif
  return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
  const float LUT_SIZE = 64.0;
  const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
  const float LUT_BIAS = 0.5 / LUT_SIZE;
  float dotNV = saturate( dot( N, V ) );
  vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
  uv = uv * LUT_SCALE + LUT_BIAS;
  return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
  float l = length( f );
  return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
  float x = dot( v1, v2 );
  float y = abs( x );
  float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
  float b = 3.4175940 + ( 4.1616724 + y ) * y;
  float v = a / b;
  float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
  return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
  vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
  vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
  vec3 lightNormal = cross( v1, v2 );
  if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
  vec3 T1, T2;
  T1 = normalize( V - N * dot( V, N ) );
  T2 = - cross( N, T1 );
  mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
  vec3 coords[ 4 ];
  coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
  coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
  coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
  coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
  coords[ 0 ] = normalize( coords[ 0 ] );
  coords[ 1 ] = normalize( coords[ 1 ] );
  coords[ 2 ] = normalize( coords[ 2 ] );
  coords[ 3 ] = normalize( coords[ 3 ] );
  vec3 vectorFormFactor = vec3( 0.0 );
  vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
  vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
  vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
  vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
  float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
  return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
  float alpha = pow2( roughness );
  float invAlpha = 1.0 / alpha;
  float cos2h = dotNH * dotNH;
  float sin2h = max( 1.0 - cos2h, 0.0078125 );
  return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
  return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
  vec3 halfDir = normalize( lightDir + viewDir );
  float dotNL = saturate( dot( normal, lightDir ) );
  float dotNV = saturate( dot( normal, viewDir ) );
  float dotNH = saturate( dot( normal, halfDir ) );
  float D = D_Charlie( sheenRoughness, dotNH );
  float V = V_Neubelt( dotNV, dotNL );
  return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
  float dotNV = saturate( dot( normal, viewDir ) );
  float r2 = roughness * roughness;
  float rInv = 1.0 / ( roughness + 0.1 );
  float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
  float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
  float DG = exp( a * dotNV + b );
  return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
  float dotNV = saturate( dot( normal, viewDir ) );
  vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
  return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
  #ifdef USE_IRIDESCENCE
    vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
  #else
    vec3 Fr = specularColor;
  #endif
  vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
  float Ess = fab.x + fab.y;
  float Ems = 1.0 - Ess;
  vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
  singleScatter += FssEss;
  multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
  void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
    vec3 normal = geometryNormal;
    vec3 viewDir = geometryViewDir;
    vec3 position = geometryPosition;
    vec3 lightPos = rectAreaLight.position;
    vec3 halfWidth = rectAreaLight.halfWidth;
    vec3 halfHeight = rectAreaLight.halfHeight;
    vec3 lightColor = rectAreaLight.color;
    float roughness = material.roughness;
    vec3 rectCoords[ 4 ];
    rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
    rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
    rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
    vec2 uv = LTC_Uv( normal, viewDir, roughness );
    vec4 t1 = texture2D( ltc_1, uv );
    vec4 t2 = texture2D( ltc_2, uv );
    mat3 mInv = mat3(
      vec3( t1.x, 0, t1.y ),
      vec3(    0, 1,    0 ),
      vec3( t1.z, 0, t1.w )
    );
    vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
    reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
    reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
    #ifdef USE_CLEARCOAT
      vec3 Ncc = geometryClearcoatNormal;
      vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
      vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
      vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
      mat3 mInvClearcoat = mat3(
        vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
        vec3(             0, 1,             0 ),
        vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
      );
      vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
      clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
    #endif
  }
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
  float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
  vec3 irradiance = dotNL * directLight.color;
  #ifdef USE_CLEARCOAT
    float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
    vec3 ccIrradiance = dotNLcc * directLight.color;
    clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
  #endif
  #ifdef USE_SHEEN

     sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

     float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
     float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );

     float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );

     irradiance *= sheenEnergyComp;

   #endif
  vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
  #ifdef USE_RETROREFLECTION
    vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
    vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
    specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
  #endif
  reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
  vec3 halfDir = normalize( directLight.direction + geometryViewDir );
  float dotVH = saturate( dot( geometryViewDir, halfDir ) );
  vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
  #ifdef USE_RETROREFLECTION
    vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
    float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
    vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
    F = mix( F, retroF, saturate( material.retroreflectivity ) );
  #endif
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
  vec3 singleScattering = vec3( 0.0 );
  vec3 multiScattering = vec3( 0.0 );
  #ifdef USE_IRIDESCENCE
    computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
  #else
    computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
  #endif
  vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
  #ifdef USE_SHEEN
    float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
    sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
    float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
    diffuse *= sheenEnergyComp;
  #endif
  reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
  #ifdef USE_CLEARCOAT
    clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
  #endif
  #ifdef USE_SHEEN
    sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
   #endif
  vec3 singleScatteringDielectric = vec3( 0.0 );
  vec3 multiScatteringDielectric = vec3( 0.0 );
  vec3 singleScatteringMetallic = vec3( 0.0 );
  vec3 multiScatteringMetallic = vec3( 0.0 );
  #ifdef USE_IRIDESCENCE
    computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
    computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
  #else
    computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
    computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
  #endif
  vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
  vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
  vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
  vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
  vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
  vec3 indirectSpecular = radiance * singleScattering;
  indirectSpecular += multiScattering * cosineWeightedIrradiance;
  vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
  #ifdef USE_SHEEN
    float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
    float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
    indirectSpecular *= sheenEnergyComp;
    indirectDiffuse *= sheenEnergyComp;
  #endif
  reflectedLight.indirectSpecular += indirectSpecular;
  reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
  return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
  geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
  float dotNVi = saturate( dot( normal, geometryViewDir ) );
  if ( material.iridescenceThickness == 0.0 ) {
    material.iridescence = 0.0;
  } else {
    material.iridescence = saturate( material.iridescence );
  }
  if ( material.iridescence > 0.0 ) {
    vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
    vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
    material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
    material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
    material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
  }
#endif
#ifdef STANDARD
  float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
  material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
  #if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
    float EssMs = material.dfg.x + material.dfg.y;
    material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
  #endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
  PointLight pointLight;
  #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
  PointLightShadow pointLightShadow;
  #endif
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
    pointLight = pointLights[ i ];
    getPointLightInfo( pointLight, geometryPosition, directLight );
    #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
    pointLightShadow = pointLightShadows[ i ];
    directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
    #endif
    RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
  }
  #pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
  SpotLight spotLight;
  vec4 spotColor;
  vec3 spotLightCoord;
  bool inSpotLightMap;
  #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
  SpotLightShadow spotLightShadow;
  #endif
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
    spotLight = spotLights[ i ];
    getSpotLightInfo( spotLight, geometryPosition, directLight );
    #if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
    #define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
    #elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
    #define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
    #else
    #define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
    #endif
    #if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
      spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
      inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
      spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
      directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
    #endif
    #undef SPOT_LIGHT_MAP_INDEX
    #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
    spotLightShadow = spotLightShadows[ i ];
    directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
    #endif
    RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
  }
  #pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
  SunLight sunLight;
  #if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
  SunLightShadow sunLightShadow;
  #endif
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
    sunLight = sunLights[ i ];
    getSunLightInfo( sunLight, directLight );
    #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
    sunLightShadow = sunLightShadows[ i ];
    directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
    #endif
    RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
  }
  #pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
  DirectionalLight directionalLight;
  #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
  DirectionalLightShadow directionalLightShadow;
  #endif
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
    directionalLight = directionalLights[ i ];
    getDirectionalLightInfo( directionalLight, directLight );
    #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
    directionalLightShadow = directionalLightShadows[ i ];
    directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
    #endif
    RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
  }
  #pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
  RectAreaLight rectAreaLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
    rectAreaLight = rectAreaLights[ i ];
    RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
  }
  #pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
  vec3 iblIrradiance = vec3( 0.0 );
  vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
  #if defined( USE_LIGHT_PROBES )
    irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
  #endif
  #if ( NUM_HEMI_LIGHTS > 0 )
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
      irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
    }
    #pragma unroll_loop_end
  #endif
  #ifdef USE_LIGHT_PROBES_GRID
    vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
    vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
    irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
  #endif
#endif
#if defined( RE_IndirectSpecular )
  vec3 radiance = vec3( 0.0 );
  vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
  #ifdef USE_LIGHTMAP
    vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
    vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
    irradiance += lightMapIrradiance;
  #endif
  #if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
    #if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
      iblIrradiance += getIBLIrradiance( geometryNormal );
    #endif
  #endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
  #ifdef USE_ANISOTROPY
    vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
  #else
    vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
  #endif
  #ifdef USE_RETROREFLECTION
    #ifdef USE_ANISOTROPY
      vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
    #else
      vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
    #endif
    iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
  #endif
  radiance += iblRadiance;
  #ifdef USE_CLEARCOAT
    clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
  #endif
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
  #if defined( LAMBERT ) || defined( PHONG )
    irradiance += iblIrradiance;
  #endif
  RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
  RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
  vec3 res = probesResolution;
  vec3 gridRange = probesMax - probesMin;
  vec3 resMinusOne = res - 1.0;
  vec3 probeSpacing = gridRange / resMinusOne;
  vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
  vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
  uvw = uvw * resMinusOne / res + 0.5 / res;
  float nz          = res.z;
  float paddedSlices = nz + 2.0;
  float atlasDepth  = 7.0 * paddedSlices;
  float uvZBase     = uvw.z * nz + 1.0;
  vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
  vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
  vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
  vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
  vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
  vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
  vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
  vec3 c0 = s0.xyz;
  vec3 c1 = vec3( s0.w, s1.xy );
  vec3 c2 = vec3( s1.zw, s2.x );
  vec3 c3 = s2.yzw;
  vec3 c4 = s3.xyz;
  vec3 c5 = vec3( s3.w, s4.xy );
  vec3 c6 = vec3( s4.zw, s5.x );
  vec3 c7 = s5.yzw;
  vec3 c8 = s6.xyz;
  float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
  vec3 result = c0 * 0.886227;
  result += c1 * 2.0 * 0.511664 * y;
  result += c2 * 2.0 * 0.511664 * z;
  result += c3 * 2.0 * 0.511664 * x;
  result += c4 * 2.0 * 0.429043 * x * y;
  result += c5 * 2.0 * 0.429043 * y * z;
  result += c6 * ( 0.743125 * z * z - 0.247708 );
  result += c7 * 2.0 * 0.429043 * x * z;
  result += c8 * 0.429043 * ( x * x - y * y );
  return max( result, vec3( 0.0 ) );
}
#endif`,wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  uniform float logDepthBufFC;
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,Rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  vFragDepth = 1.0 + gl_Position.w;
  vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cm=`#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D( map, vMapUv );
  #ifdef DECODE_VIDEO_TEXTURE
    sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
  #endif
  diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
  uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
  #if defined( USE_POINTS_UV )
    vec2 uv = vUv;
  #else
    vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
  #endif
#endif
#ifdef USE_MAP
  diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
  diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dm=`#if defined( USE_POINTS_UV )
  varying vec2 vUv;
#else
  #if defined( USE_MAP ) || defined( USE_ALPHAMAP )
    uniform mat3 uvTransform;
  #endif
#endif
#ifdef USE_MAP
  uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
  uniform sampler2D alphaMap;
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
  vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
  metalnessFactor *= texelMetalness.b;
#endif`,Nm=`#ifdef USE_METALNESSMAP
  uniform sampler2D metalnessMap;
#endif`,Um=`#ifdef USE_INSTANCING_MORPH
  float morphTargetInfluences[ MORPHTARGETS_COUNT ];
  float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
  }
#endif`,Fm=`#if defined( USE_MORPHCOLORS )
  vColor *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    #if defined( USE_COLOR_ALPHA )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
    #elif defined( USE_COLOR )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
    #endif
  }
#endif`,Om=`#ifdef USE_MORPHNORMALS
  objectNormal *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,Bm=`#ifdef USE_MORPHTARGETS
  #ifndef USE_INSTANCING_MORPH
    uniform float morphTargetBaseInfluence;
    uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
  #endif
  uniform sampler2DArray morphTargetsTexture;
  uniform ivec2 morphTargetsTextureSize;
  vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
    int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
    int y = texelIndex / morphTargetsTextureSize.x;
    int x = texelIndex - y * morphTargetsTextureSize.x;
    ivec3 morphUV = ivec3( x, y, morphTargetIndex );
    return texelFetch( morphTargetsTexture, morphUV, 0 );
  }
#endif`,km=`#ifdef USE_MORPHTARGETS
  transformed *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
  vec3 fdx = dFdx( vViewPosition );
  vec3 fdy = dFdy( vViewPosition );
  vec3 normal = normalize( cross( fdx, fdy ) );
#else
  vec3 normal = normalize( vNormal );
  #ifdef DOUBLE_SIDED
    normal *= faceDirection;
  #endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
  #ifdef USE_TANGENT
    mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
  #else
    mat3 tbn = getTangentFrame( - vViewPosition, normal,
    #if defined( USE_NORMALMAP )
      vNormalMapUv
    #elif defined( USE_CLEARCOAT_NORMALMAP )
      vClearcoatNormalMapUv
    #else
      vUv
    #endif
    );
  #endif
  #ifdef DOUBLE_SIDED
    tbn[0] *= faceDirection;
    tbn[1] *= faceDirection;
  #endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  #ifdef USE_TANGENT
    mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
  #else
    mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
  #endif
  #ifdef DOUBLE_SIDED
    tbn2[0] *= faceDirection;
    tbn2[1] *= faceDirection;
  #endif
#endif
vec3 nonPerturbedNormal = normal;`,Hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
  normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
  #ifdef FLIP_SIDED
    normal = - normal;
  #endif
  #ifdef DOUBLE_SIDED
    normal = normal * faceDirection;
  #endif
  normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
  vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
  #if defined( USE_PACKED_NORMALMAP )
    mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
  #endif
  mapN.xy *= normalScale;
  normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
  normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vm=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,Gm=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,Wm=`#ifndef FLAT_SHADED
  vNormal = normalize( transformedNormal );
  #ifdef USE_TANGENT
    vTangent = normalize( transformedTangent );
    vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
    #ifdef FLIP_SIDED
      vBitangent = - vBitangent;
    #endif
  #endif
#endif`,Xm=`#ifdef USE_NORMALMAP
  uniform sampler2D normalMap;
  uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
  uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
  mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
    vec3 q0 = dFdx( eye_pos.xyz );
    vec3 q1 = dFdy( eye_pos.xyz );
    vec2 st0 = dFdx( uv.st );
    vec2 st1 = dFdy( uv.st );
    vec3 N = surf_norm;
    vec3 q1perp = cross( q1, N );
    vec3 q0perp = cross( N, q0 );
    vec3 T = q1perp * st0.x + q0perp * st1.x;
    vec3 B = q1perp * st0.y + q0perp * st1.y;
    float det = max( dot( T, T ), dot( B, B ) );
    float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
    return mat3( T * scale, B * scale, N );
  }
#endif`,qm=`#ifdef USE_CLEARCOAT
  vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ym=`#ifdef USE_CLEARCOAT_NORMALMAP
  vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
  clearcoatMapN.xy *= clearcoatNormalScale;
  clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
  uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  uniform sampler2D clearcoatNormalMap;
  uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
  uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
  return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
  return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
  if( v <= 0.0 )
    return vec4( 0., 0., 0., 0. );
  if( v >= 1.0 )
    return vec4( 1., 1., 1., 1. );
  float vuf;
  float af = modf( v * PackFactors.a, vuf );
  float bf = modf( vuf * ShiftRight8, vuf );
  float gf = modf( vuf * ShiftRight8, vuf );
  return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
  if( v <= 0.0 )
    return vec3( 0., 0., 0. );
  if( v >= 1.0 )
    return vec3( 1., 1., 1. );
  float vuf;
  float bf = modf( v * PackFactors.b, vuf );
  float gf = modf( vuf * ShiftRight8, vuf );
  return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
  if( v <= 0.0 )
    return vec2( 0., 0. );
  if( v >= 1.0 )
    return vec2( 1., 1. );
  float vuf;
  float gf = modf( v * 256., vuf );
  return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
  return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
  return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
  return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
  vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
  return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
  return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
  return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
  #ifdef USE_REVERSED_DEPTH_BUFFER

    return depth * ( far - near ) - far;
  #else
    return depth * ( near - far ) - near;
  #endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
  return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {

  #ifdef USE_REVERSED_DEPTH_BUFFER
    return ( near * far ) / ( ( near - far ) * depth - near );
  #else
    return ( near * far ) / ( ( far - near ) * depth - far );
  #endif
}`,jm=`#ifdef PREMULTIPLIED_ALPHA
  gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e0=`#ifdef DITHERING
  gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
  vec3 dithering( vec3 color ) {
    float grid_position = rand( gl_FragCoord.xy );
    vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
    dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
    return color + dither_shift_RGB;
  }
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
  vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
  roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
  uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
  #if NUM_SUN_LIGHT_SHADOWS > 0
    #define SUN_LIGHT_CASCADES 2
    #if defined( SHADOWMAP_TYPE_PCF )
      uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
    #else
      uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
    #endif
    uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
    uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
    varying vec4 vSunShadowWorldPosition;
    varying vec3 vSunShadowWorldNormal;
    struct SunLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
    };
    uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
  #endif
  #if NUM_DIR_LIGHT_SHADOWS > 0
    #if defined( SHADOWMAP_TYPE_PCF )
      uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
    #else
      uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
    #endif
    varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
    struct DirectionalLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
    };
    uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
  #endif
  #if NUM_SPOT_LIGHT_SHADOWS > 0
    #if defined( SHADOWMAP_TYPE_PCF )
      uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
    #else
      uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
    #endif
    struct SpotLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
    };
    uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
  #endif
  #if NUM_POINT_LIGHT_SHADOWS > 0
    #if defined( SHADOWMAP_TYPE_PCF )
      uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
    #elif defined( SHADOWMAP_TYPE_BASIC )
      uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
    #endif
    varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
    struct PointLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
      float shadowCameraNear;
      float shadowCameraFar;
    };
    uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
  #endif
  #if defined( SHADOWMAP_TYPE_PCF )
    float interleavedGradientNoise( vec2 position ) {
      return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
    }
    vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
      const float goldenAngle = 2.399963229728653;
      float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
      float theta = float( sampleIndex ) * goldenAngle + phi;
      return vec2( cos( theta ), sin( theta ) ) * r;
    }
  #endif
  #if defined( SHADOWMAP_TYPE_PCF )
    float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
      float shadow = 1.0;
      shadowCoord.xyz /= shadowCoord.w;
      shadowCoord.z += shadowBias;
      bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
      bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
      if ( frustumTest ) {
        vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
        float radius = shadowRadius * texelSize.x;
        float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
        shadow = (
          texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
          texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
          texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
          texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
          texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
        ) * 0.2;
      }
      return mix( 1.0, shadow, shadowIntensity );
    }
  #elif defined( SHADOWMAP_TYPE_VSM )
    float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
      float shadow = 1.0;
      shadowCoord.xyz /= shadowCoord.w;
      #ifdef USE_REVERSED_DEPTH_BUFFER
        shadowCoord.z -= shadowBias;
      #else
        shadowCoord.z += shadowBias;
      #endif
      bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
      bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
      if ( frustumTest ) {
        vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
        float mean = distribution.x;
        float variance = distribution.y * distribution.y;
        #ifdef USE_REVERSED_DEPTH_BUFFER
          float hard_shadow = step( mean, shadowCoord.z );
        #else
          float hard_shadow = step( shadowCoord.z, mean );
        #endif

        if ( hard_shadow == 1.0 ) {
          shadow = 1.0;
        } else {
          variance = max( variance, 0.0000001 );
          float d = shadowCoord.z - mean;
          float p_max = variance / ( variance + d * d );
          p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
          shadow = max( hard_shadow, p_max );
        }
      }
      return mix( 1.0, shadow, shadowIntensity );
    }
  #else
    float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
      float shadow = 1.0;
      shadowCoord.xyz /= shadowCoord.w;
      #ifdef USE_REVERSED_DEPTH_BUFFER
        shadowCoord.z -= shadowBias;
      #else
        shadowCoord.z += shadowBias;
      #endif
      bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
      bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
      if ( frustumTest ) {
        float depth = texture2D( shadowMap, shadowCoord.xy ).r;
        #ifdef USE_REVERSED_DEPTH_BUFFER
          shadow = step( depth, shadowCoord.z );
        #else
          shadow = step( shadowCoord.z, depth );
        #endif
      }
      return mix( 1.0, shadow, shadowIntensity );
    }
  #endif
  #if NUM_SUN_LIGHT_SHADOWS > 0
    float getSunShadow(
      #if defined( SHADOWMAP_TYPE_PCF )
        sampler2DShadow shadowMap,
      #else
        sampler2D shadowMap,
      #endif
      SunLightShadow sunLightShadow,
      int shadowIndex
    ) {
      vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
      float viewDepth = vSunShadowWorldPosition.w;
      int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
      float shadow = 1.0;
      for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
        vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
        if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
          float cascadeShadow = getShadow(
            shadowMap,
            sunLightShadow.shadowMapSize,
            sunLightShadow.shadowIntensity,
            sunLightShadow.shadowBias,
            sunLightShadow.shadowRadius,
            sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
          );
          shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
        }
      }
      return shadow;
    }
  #endif
  #if NUM_POINT_LIGHT_SHADOWS > 0
  #if defined( SHADOWMAP_TYPE_PCF )
  float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
    float shadow = 1.0;
    vec3 lightToPosition = shadowCoord.xyz;
    vec3 bd3D = normalize( lightToPosition );
    vec3 absVec = abs( lightToPosition );
    float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
    if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
      #ifdef USE_REVERSED_DEPTH_BUFFER
        float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
        dp -= shadowBias;
      #else
        float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
        dp += shadowBias;
      #endif
      float texelSize = shadowRadius / shadowMapSize.x;
      vec3 absDir = abs( bd3D );
      vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
      tangent = normalize( cross( bd3D, tangent ) );
      vec3 bitangent = cross( bd3D, tangent );
      float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
      vec2 sample0 = vogelDiskSample( 0, 5, phi );
      vec2 sample1 = vogelDiskSample( 1, 5, phi );
      vec2 sample2 = vogelDiskSample( 2, 5, phi );
      vec2 sample3 = vogelDiskSample( 3, 5, phi );
      vec2 sample4 = vogelDiskSample( 4, 5, phi );
      shadow = (
        texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
        texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
        texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
        texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
        texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
      ) * 0.2;
    }
    return mix( 1.0, shadow, shadowIntensity );
  }
  #elif defined( SHADOWMAP_TYPE_BASIC )
  float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
    float shadow = 1.0;
    vec3 lightToPosition = shadowCoord.xyz;
    vec3 absVec = abs( lightToPosition );
    float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
    if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
      float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
      dp += shadowBias;
      vec3 bd3D = normalize( lightToPosition );
      float depth = textureCube( shadowMap, bd3D ).r;
      #ifdef USE_REVERSED_DEPTH_BUFFER
        depth = 1.0 - depth;
      #endif
      shadow = step( dp, depth );
    }
    return mix( 1.0, shadow, shadowIntensity );
  }
  #endif
  #endif
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
  #if NUM_SUN_LIGHT_SHADOWS > 0
    varying vec4 vSunShadowWorldPosition;
    varying vec3 vSunShadowWorldNormal;
  #endif
  #if NUM_DIR_LIGHT_SHADOWS > 0
    uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
    varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
    struct DirectionalLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
    };
    uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
  #endif
  #if NUM_SPOT_LIGHT_SHADOWS > 0
    struct SpotLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
    };
    uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
  #endif
  #if NUM_POINT_LIGHT_SHADOWS > 0
    uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
    varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
    struct PointLightShadow {
      float shadowIntensity;
      float shadowBias;
      float shadowNormalBias;
      float shadowRadius;
      vec2 shadowMapSize;
      float shadowCameraNear;
      float shadowCameraFar;
    };
    uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
  #endif
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
  #ifdef HAS_NORMAL
    vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
  #else
    vec3 shadowWorldNormal = vec3( 0.0 );
  #endif
  vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
  #if NUM_SUN_LIGHT_SHADOWS > 0
    vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
    vSunShadowWorldNormal = shadowWorldNormal;
  #endif
  #if NUM_DIR_LIGHT_SHADOWS > 0
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
      shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
      vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
    }
    #pragma unroll_loop_end
  #endif
  #if NUM_POINT_LIGHT_SHADOWS > 0
    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
      shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
      vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
    }
    #pragma unroll_loop_end
  #endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
    shadowWorldPosition = worldPosition;
    #if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
    #endif
    vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
  }
  #pragma unroll_loop_end
#endif`,a0=`float getShadowMask() {
  float shadow = 1.0;
  #ifdef USE_SHADOWMAP
  #if NUM_SUN_LIGHT_SHADOWS > 0
  SunLightShadow sunLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
    sunLight = sunLightShadows[ i ];
    shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
  }
  #pragma unroll_loop_end
  #endif
  #if NUM_DIR_LIGHT_SHADOWS > 0
  DirectionalLightShadow directionalLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
    directionalLight = directionalLightShadows[ i ];
    shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
  }
  #pragma unroll_loop_end
  #endif
  #if NUM_SPOT_LIGHT_SHADOWS > 0
  SpotLightShadow spotLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
    spotLight = spotLightShadows[ i ];
    shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
  }
  #pragma unroll_loop_end
  #endif
  #if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
  PointLightShadow pointLight;
  #pragma unroll_loop_start
  for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
    pointLight = pointLightShadows[ i ];
    shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
  }
  #pragma unroll_loop_end
  #endif
  #endif
  return shadow;
}`,l0=`#ifdef USE_SKINNING
  mat4 boneMatX = getBoneMatrix( skinIndex.x );
  mat4 boneMatY = getBoneMatrix( skinIndex.y );
  mat4 boneMatZ = getBoneMatrix( skinIndex.z );
  mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
  uniform mat4 bindMatrix;
  uniform mat4 bindMatrixInverse;
  uniform highp sampler2D boneTexture;
  mat4 getBoneMatrix( const in float i ) {
    int size = textureSize( boneTexture, 0 ).x;
    int j = int( i ) * 4;
    int x = j % size;
    int y = j / size;
    vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
    vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
    vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
    vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
    return mat4( v1, v2, v3, v4 );
  }
#endif`,h0=`#ifdef USE_SKINNING
  vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
  vec4 skinned = vec4( 0.0 );
  skinned += boneMatX * skinVertex * skinWeight.x;
  skinned += boneMatY * skinVertex * skinWeight.y;
  skinned += boneMatZ * skinVertex * skinWeight.z;
  skinned += boneMatW * skinVertex * skinWeight.w;
  transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
  mat4 skinMatrix = mat4( 0.0 );
  skinMatrix += skinWeight.x * boneMatX;
  skinMatrix += skinWeight.y * boneMatY;
  skinMatrix += skinWeight.z * boneMatZ;
  skinMatrix += skinWeight.w * boneMatW;
  skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
  objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
  #ifdef USE_TANGENT
    objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
  #endif
#endif`,d0=`float specularStrength;
#ifdef USE_SPECULARMAP
  vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
  specularStrength = texelSpecular.r;
#else
  specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
  uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
  return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
  color *= toneMappingExposure;
  color = max( vec3( 0.0 ), color - 0.004 );
  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
  vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
  vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
  return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
  const mat3 ACESInputMat = mat3(
    vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
    vec3( 0.04823, 0.01566, 0.83777 )
  );
  const mat3 ACESOutputMat = mat3(
    vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
    vec3( -0.07367, -0.00605,  1.07602 )
  );
  color *= toneMappingExposure / 0.6;
  color = ACESInputMat * color;
  color = RRTAndODTFit( color );
  color = ACESOutputMat * color;
  return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
  vec3( 1.6605, - 0.1246, - 0.0182 ),
  vec3( - 0.5876, 1.1329, - 0.1006 ),
  vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
  vec3( 0.6274, 0.0691, 0.0164 ),
  vec3( 0.3293, 0.9195, 0.0880 ),
  vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
  vec3 x2 = x * x;
  vec3 x4 = x2 * x2;
  return + 15.5 * x4 * x2
    - 40.14 * x4 * x
    + 31.96 * x4
    - 6.868 * x2 * x
    + 0.4298 * x2
    + 0.1191 * x
    - 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
  const mat3 AgXInsetMatrix = mat3(
    vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
    vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
    vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
  );
  const mat3 AgXOutsetMatrix = mat3(
    vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
    vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
    vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
  );
  const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
  color *= toneMappingExposure;
  color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
  color = AgXInsetMatrix * color;
  color = max( color, 1e-10 );	color = log2( color );
  color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
  color = clamp( color, 0.0, 1.0 );
  color = agxDefaultContrastApprox( color );
  color = AgXOutsetMatrix * color;
  color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
  color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
  color = clamp( color, 0.0, 1.0 );
  return color;
}
vec3 NeutralToneMapping( vec3 color ) {
  const float StartCompression = 0.8 - 0.04;
  const float Desaturation = 0.15;
  color *= toneMappingExposure;
  float x = min( color.r, min( color.g, color.b ) );
  float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
  color -= offset;
  float peak = max( color.r, max( color.g, color.b ) );
  if ( peak < StartCompression ) return color;
  float d = 1. - StartCompression;
  float newPeak = 1. - d * d / ( peak + d - StartCompression );
  color *= newPeak / peak;
  float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
  return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
  material.transmission = transmission;
  material.transmissionAlpha = 1.0;
  material.thickness = thickness;
  material.attenuationDistance = attenuationDistance;
  material.attenuationColor = attenuationColor;
  #ifdef USE_TRANSMISSIONMAP
    material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
  #endif
  #ifdef USE_THICKNESSMAP
    material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
  #endif
  vec3 pos = vWorldPosition;
  vec3 v = normalize( cameraPosition - pos );
  vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
  vec4 transmitted = getIBLVolumeRefraction(
    n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
    pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
    material.attenuationColor, material.attenuationDistance );
  material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
  totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_0=`#ifdef USE_TRANSMISSION
  uniform float transmission;
  uniform float thickness;
  uniform float attenuationDistance;
  uniform vec3 attenuationColor;
  #ifdef USE_TRANSMISSIONMAP
    uniform sampler2D transmissionMap;
  #endif
  #ifdef USE_THICKNESSMAP
    uniform sampler2D thicknessMap;
  #endif
  uniform vec2 transmissionSamplerSize;
  uniform sampler2D transmissionSamplerMap;
  uniform mat4 modelMatrix;
  uniform mat4 projectionMatrix;
  varying vec3 vWorldPosition;
  float w0( float a ) {
    return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
  }
  float w1( float a ) {
    return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
  }
  float w2( float a ){
    return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
  }
  float w3( float a ) {
    return ( 1.0 / 6.0 ) * ( a * a * a );
  }
  float g0( float a ) {
    return w0( a ) + w1( a );
  }
  float g1( float a ) {
    return w2( a ) + w3( a );
  }
  float h0( float a ) {
    return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
  }
  float h1( float a ) {
    return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
  }
  vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
    uv = uv * texelSize.zw + 0.5;
    vec2 iuv = floor( uv );
    vec2 fuv = fract( uv );
    float g0x = g0( fuv.x );
    float g1x = g1( fuv.x );
    float h0x = h0( fuv.x );
    float h1x = h1( fuv.x );
    float h0y = h0( fuv.y );
    float h1y = h1( fuv.y );
    vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
    vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
    vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
    vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
    return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
      g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
  }
  vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
    vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
    vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
    vec2 fLodSizeInv = 1.0 / fLodSize;
    vec2 cLodSizeInv = 1.0 / cLodSize;
    vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
    vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
    return mix( fSample, cSample, fract( lod ) );
  }
  vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
    vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
    vec3 modelScale;
    modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
    modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
    modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
    return normalize( refractionVector ) * thickness * modelScale;
  }
  float applyIorToRoughness( const in float roughness, const in float ior ) {
    return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
  }
  vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
    float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
    return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
  }
  vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
    if ( isinf( attenuationDistance ) ) {
      return vec3( 1.0 );
    } else {
      vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
      vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
    }
  }
  vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
    const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
    const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
    const in vec3 attenuationColor, const in float attenuationDistance ) {
    vec4 transmittedLight;
    vec3 transmittance;
    #ifdef USE_DISPERSION
      float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
      vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
      for ( int i = 0; i < 3; i ++ ) {
        vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
        vec3 refractedRayExit = position + transmissionRay;
        vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
        vec2 refractionCoords = ndcPos.xy / ndcPos.w;
        refractionCoords += 1.0;
        refractionCoords /= 2.0;
        vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
        transmittedLight[ i ] = transmissionSample[ i ];
        transmittedLight.a += transmissionSample.a;
        transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
      }
      transmittedLight.a /= 3.0;
    #else
      vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
      vec3 refractedRayExit = position + transmissionRay;
      vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
      vec2 refractionCoords = ndcPos.xy / ndcPos.w;
      refractionCoords += 1.0;
      refractionCoords /= 2.0;
      transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
      transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
    #endif
    vec3 attenuatedColor = transmittance * transmittedLight.rgb;
    vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
    float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
    return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
  }
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
  varying vec2 vUv;
#endif
#ifdef USE_MAP
  varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
  varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
  varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
  varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
  varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
  varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
  varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
  varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
  varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
  varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
  varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
  varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
  varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
  varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
  varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
  varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
  varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
  uniform mat3 transmissionMapTransform;
  varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
  uniform mat3 thicknessMapTransform;
  varying vec2 vThicknessMapUv;
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
  varying vec2 vUv;
#endif
#ifdef USE_MAP
  uniform mat3 mapTransform;
  varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
  uniform mat3 alphaMapTransform;
  varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
  uniform mat3 lightMapTransform;
  varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
  uniform mat3 aoMapTransform;
  varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
  uniform mat3 bumpMapTransform;
  varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
  uniform mat3 normalMapTransform;
  varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
  uniform mat3 displacementMapTransform;
  varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapTransform;
  varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
  uniform mat3 metalnessMapTransform;
  varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
  uniform mat3 roughnessMapTransform;
  varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
  uniform mat3 anisotropyMapTransform;
  varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
  uniform mat3 clearcoatMapTransform;
  varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  uniform mat3 clearcoatNormalMapTransform;
  varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  uniform mat3 clearcoatRoughnessMapTransform;
  varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
  uniform mat3 sheenColorMapTransform;
  varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
  uniform mat3 sheenRoughnessMapTransform;
  varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
  uniform mat3 iridescenceMapTransform;
  varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  uniform mat3 iridescenceThicknessMapTransform;
  varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
  uniform mat3 specularMapTransform;
  varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
  uniform mat3 specularColorMapTransform;
  varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
  uniform mat3 specularIntensityMapTransform;
  varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
  uniform mat3 transmissionMapTransform;
  varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
  uniform mat3 thicknessMapTransform;
  varying vec2 vThicknessMapUv;
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
  vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
  vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
  vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
  vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
  vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
  vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
  vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
  vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
  vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
  vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
  vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
  vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
  vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
  vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
  vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
  vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
  vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
  vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
  vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
  vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
  vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
  vec4 worldPosition = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
    worldPosition = batchingMatrix * worldPosition;
  #endif
  #ifdef USE_INSTANCING
    worldPosition = instanceMatrix * worldPosition;
  #endif
  worldPosition = modelMatrix * worldPosition;
#endif`,S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
  vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
  vec4 texColor = texture2D( t2D, vUv );
  #ifdef DECODE_VIDEO_TEXTURE
    texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
  #endif
  texColor.rgb *= backgroundIntensity;
  gl_FragColor = texColor;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,w0=`#ifdef ENVMAP_TYPE_CUBE
  uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
  uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
  #ifdef ENVMAP_TYPE_CUBE
    vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
  #elif defined( ENVMAP_TYPE_CUBE_UV )
    vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
  #else
    vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
  #endif
  texColor.rgb *= backgroundIntensity;
  gl_FragColor = texColor;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,A0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
  vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
  gl_FragColor = texColor;
  gl_FragColor.a *= opacity;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
  #include <uv_vertex>
  #include <batching_vertex>
  #include <skinbase_vertex>
  #include <morphinstance_vertex>
  #ifdef USE_DISPLACEMENTMAP
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinnormal_vertex>
  #endif
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vHighPrecisionZW = gl_Position.zw;
}`,C0=`#if DEPTH_PACKING == 3200
  uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
  vec4 diffuseColor = vec4( 1.0 );
  #include <clipping_planes_fragment>
  #if DEPTH_PACKING == 3200
    diffuseColor.a = opacity;
  #endif
  #include <map_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <logdepthbuf_fragment>
  #ifdef USE_REVERSED_DEPTH_BUFFER
    float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
  #else
    float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
  #endif
  #if DEPTH_PACKING == 3200
    gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
  #elif DEPTH_PACKING == 3201
    gl_FragColor = packDepthToRGBA( fragCoordZ );
  #elif DEPTH_PACKING == 3202
    gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
  #elif DEPTH_PACKING == 3203
    gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
  #endif
}`,P0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <batching_vertex>
  #include <skinbase_vertex>
  #include <morphinstance_vertex>
  #ifdef USE_DISPLACEMENTMAP
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinnormal_vertex>
  #endif
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <worldpos_vertex>
  #include <clipping_planes_vertex>
  vWorldPosition = worldPosition.xyz;
}`,I0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( 1.0 );
  #include <clipping_planes_fragment>
  #include <map_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  float dist = length( vWorldPosition - referencePosition );
  dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
  dist = saturate( dist );
  gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
  vec3 direction = normalize( vWorldDirection );
  vec2 sampleUV = equirectUv( direction );
  gl_FragColor = texture2D( tEquirect, sampleUV );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,N0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  vLineDistance = scale * lineDistance;
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  if ( mod( vLineDistance, totalSize ) > dashSize ) {
    discard;
  }
  vec3 outgoingLight = vec3( 0.0 );
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  outgoingLight = diffuseColor.rgb;
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <defaultnormal_vertex>
  #endif
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <worldpos_vertex>
  #include <envmap_vertex>
  #include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <specularmap_fragment>
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  #ifdef USE_LIGHTMAP
    vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
    reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
  #else
    reflectedLight.indirectDiffuse += vec3( 1.0 );
  #endif
  #include <aomap_fragment>
  reflectedLight.indirectDiffuse *= diffuseColor.rgb;
  vec3 outgoingLight = reflectedLight.indirectDiffuse;
  #include <envmap_fragment>
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`,B0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #include <worldpos_vertex>
  #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
}`,k0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive;
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <specularmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_lambert_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
  #include <envmap_fragment>
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`,z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
  vViewPosition = - mvPosition.xyz;
}`,H0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  vec3 viewDir = normalize( vViewPosition );
  vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
  vec3 y = cross( viewDir, x );
  vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
  #ifdef USE_MATCAP
    vec4 matcapColor = texture2D( matcap, uv );
  #else
    vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
  #endif
  vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`,V0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
  varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphinstance_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
  vViewPosition = - mvPosition.xyz;
#endif
}`,G0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
  varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
  #ifdef OPAQUE
    gl_FragColor.a = 1.0;
  #endif
}`,W0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphinstance_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #include <worldpos_vertex>
  #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
}`,X0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive;
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <specularmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_phong_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
  #include <envmap_fragment>
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`,q0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
  varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
#ifdef USE_TRANSMISSION
  vWorldPosition = worldPosition.xyz;
#endif
}`,Y0=`#define STANDARD
#ifdef PHYSICAL
  #define IOR
  #define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
  uniform float ior;
#endif
#ifdef USE_SPECULAR
  uniform float specularIntensity;
  uniform vec3 specularColor;
  #ifdef USE_SPECULAR_COLORMAP
    uniform sampler2D specularColorMap;
  #endif
  #ifdef USE_SPECULAR_INTENSITYMAP
    uniform sampler2D specularIntensityMap;
  #endif
#endif
#ifdef USE_CLEARCOAT
  uniform float clearcoat;
  uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
  uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
  uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
  uniform float iridescence;
  uniform float iridescenceIOR;
  uniform float iridescenceThicknessMinimum;
  uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
  uniform vec3 sheenColor;
  uniform float sheenRoughness;
  #ifdef USE_SHEEN_COLORMAP
    uniform sampler2D sheenColorMap;
  #endif
  #ifdef USE_SHEEN_ROUGHNESSMAP
    uniform sampler2D sheenRoughnessMap;
  #endif
#endif
#ifdef USE_ANISOTROPY
  uniform vec2 anisotropyVector;
  #ifdef USE_ANISOTROPYMAP
    uniform sampler2D anisotropyMap;
  #endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive;
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
  vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
  #include <transmission_fragment>
  vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
  #ifdef USE_SHEEN

    outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;

   #endif
  #ifdef USE_CLEARCOAT
    float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
    vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
    outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
  #endif
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`,Z0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  vViewPosition = - mvPosition.xyz;
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
}`,J0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive;
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_toon_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}`,K0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
  varying vec2 vUv;
  uniform mat3 uvTransform;
#endif
void main() {
  #ifdef USE_POINTS_UV
    vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  #endif
  #include <color_vertex>
  #include <morphinstance_vertex>
  #include <morphcolor_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  gl_PointSize = size;
  #ifdef USE_SIZEATTENUATION
    bool isPerspective = isPerspectiveMatrix( projectionMatrix );
    if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
  #endif
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <worldpos_vertex>
  #include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  vec3 outgoingLight = vec3( 0.0 );
  #include <logdepthbuf_fragment>
  #include <map_particle_fragment>
  #include <color_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  outgoingLight = diffuseColor.rgb;
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
}`,j0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
  #include <batching_vertex>
  #include <beginnormal_vertex>
  #include <morphinstance_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <worldpos_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>
}`,Q0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
  #include <logdepthbuf_fragment>
  gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
}`,eg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
  #include <uv_vertex>
  vec4 mvPosition = modelViewMatrix[ 3 ];
  vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
  #ifndef USE_SIZEATTENUATION
    bool isPerspective = isPerspectiveMatrix( projectionMatrix );
    if ( isPerspective ) scale *= - mvPosition.z;
  #endif
  vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
  vec2 rotatedPosition;
  rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
  rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
  mvPosition.xy += rotatedPosition;
  gl_Position = projectionMatrix * mvPosition;
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
  vec4 diffuseColor = vec4( diffuse, opacity );
  #include <clipping_planes_fragment>
  vec3 outgoingLight = vec3( 0.0 );
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <alphahash_fragment>
  outgoingLight = diffuseColor.rgb;
  #include <opaque_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`,rt={alphahash_fragment:Sp,alphahash_pars_fragment:Mp,alphamap_fragment:Ep,alphamap_pars_fragment:wp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Ip,begin_vertex:Dp,beginnormal_vertex:Lp,bsdfs:Np,iridescence_fragment:Up,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:zp,color_fragment:Hp,color_pars_fragment:Vp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Jp,emissivemap_fragment:Kp,emissivemap_pars_fragment:$p,colorspace_fragment:jp,colorspace_pars_fragment:Qp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:_m,lights_phong_pars_fragment:xm,lights_physical_fragment:ym,lights_physical_pars_fragment:vm,lights_fragment_begin:bm,lights_fragment_maps:Sm,lights_fragment_end:Mm,lightprobes_pars_fragment:Em,logdepthbuf_fragment:wm,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:Am,logdepthbuf_vertex:Rm,map_fragment:Cm,map_pars_fragment:Pm,map_particle_fragment:Im,map_particle_pars_fragment:Dm,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Nm,morphinstance_vertex:Um,morphcolor_vertex:Fm,morphnormal_vertex:Om,morphtarget_pars_vertex:Bm,morphtarget_vertex:km,normal_fragment_begin:zm,normal_fragment_maps:Hm,normal_pars_fragment:Vm,normal_pars_vertex:Gm,normal_vertex:Wm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:Ym,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Jm,opaque_fragment:Km,packing:$m,premultiplied_alpha_fragment:jm,project_vertex:Qm,dithering_fragment:e0,dithering_pars_fragment:t0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:r0,shadowmap_vertex:o0,shadowmask_pars_fragment:a0,skinbase_vertex:l0,skinning_pars_vertex:c0,skinning_vertex:h0,skinnormal_vertex:u0,specularmap_fragment:d0,specularmap_pars_fragment:f0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:_0,uv_pars_fragment:x0,uv_pars_vertex:y0,uv_vertex:v0,worldpos_vertex:b0,background_vert:S0,background_frag:M0,backgroundCube_vert:E0,backgroundCube_frag:w0,cube_vert:T0,cube_frag:A0,depth_vert:R0,depth_frag:C0,distance_vert:P0,distance_frag:I0,equirect_vert:D0,equirect_frag:L0,linedashed_vert:N0,linedashed_frag:U0,meshbasic_vert:F0,meshbasic_frag:O0,meshlambert_vert:B0,meshlambert_frag:k0,meshmatcap_vert:z0,meshmatcap_frag:H0,meshnormal_vert:V0,meshnormal_frag:G0,meshphong_vert:W0,meshphong_frag:X0,meshphysical_vert:q0,meshphysical_frag:Y0,meshtoon_vert:Z0,meshtoon_frag:J0,points_vert:K0,points_frag:$0,shadow_vert:j0,shadow_frag:Q0,sprite_vert:eg,sprite_frag:tg},Ee={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Xn={basic:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:$t([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:$t([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:$t([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:$t([Ee.points,Ee.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:$t([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:$t([Ee.common,Ee.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:$t([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:$t([Ee.sprite,Ee.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:$t([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:$t([Ee.lights,Ee.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Xn.physical={uniforms:$t([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Za={r:0,b:0,g:0},ng=new dt,ed=new Qe;ed.set(-1,0,0,0,1,0,0,0,1);function ig(n,e,t,i,s,r){let o=new Ke(0),a=s===!0?0:1,c,l,f=null,u=0,h=null;function p(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let y=x.backgroundBlurriness>0;b=e.get(b,y)}return b}function m(x){let b=!1,y=p(x);y===null?g(o,a):y&&y.isColor&&(g(y,1),b=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(x,b){let y=p(b);y&&(y.isCubeTexture||y.mapping===Ir)?(l===void 0&&(l=new xe(new rn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Hi(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ng.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ed),l.material.toneMapped=lt.getTransfer(y.colorSpace)!==_t,(f!==y||u!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,u=y.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xe(new Vn(2,2),new fn({name:"BackgroundMaterial",uniforms:Hi(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=lt.getTransfer(y.colorSpace)!==_t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,b){x.getRGB(Za,xc(n)),t.buffers.color.setClear(Za.r,Za.g,Za.b,b,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),a=b,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:m,addToRenderList:_,dispose:d}}function sg(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(D,T,R,P,F){let k=!1,V=u(D,P,R,T);r!==V&&(r=V,l(r.object)),k=p(D,P,R,F),k&&m(D,P,R,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,y(D,T,R,P),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function f(D){return n.deleteVertexArray(D)}function u(D,T,R,P){let F=P.wireframe===!0,k=i[T.id];k===void 0&&(k={},i[T.id]=k);let V=D.isInstancedMesh===!0?D.id:0,te=k[V];te===void 0&&(te={},k[V]=te);let J=te[R.id];J===void 0&&(J={},te[R.id]=J);let Y=J[F];return Y===void 0&&(Y=h(c()),J[F]=Y),Y}function h(D){let T=[],R=[],P=[];for(let F=0;F<t;F++)T[F]=0,R[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:R,attributeDivisors:P,object:D,attributes:{},index:null}}function p(D,T,R,P){let F=r.attributes,k=T.attributes,V=0,te=R.getAttributes();for(let J in te)if(te[J].location>=0){let K=F[J],le=k[J];if(le===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(le=D.instanceColor)),K===void 0||K.attribute!==le||le&&K.data!==le.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function m(D,T,R,P){let F={},k=T.attributes,V=0,te=R.getAttributes();for(let J in te)if(te[J].location>=0){let K=k[J];K===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));let le={};le.attribute=K,K&&K.data&&(le.data=K.data),F[J]=le,V++}r.attributes=F,r.attributesNum=V,r.index=P}function _(){let D=r.newAttributes;for(let T=0,R=D.length;T<R;T++)D[T]=0}function g(D){d(D,0)}function d(D,T){let R=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;R[D]=1,P[D]===0&&(n.enableVertexAttribArray(D),P[D]=1),F[D]!==T&&(n.vertexAttribDivisor(D,T),F[D]=T)}function x(){let D=r.newAttributes,T=r.enabledAttributes;for(let R=0,P=T.length;R<P;R++)T[R]!==D[R]&&(n.disableVertexAttribArray(R),T[R]=0)}function b(D,T,R,P,F,k,V){V===!0?n.vertexAttribIPointer(D,T,R,F,k):n.vertexAttribPointer(D,T,R,P,F,k)}function y(D,T,R,P){_();let F=P.attributes,k=R.getAttributes(),V=T.defaultAttributeValues;for(let te in k){let J=k[te];if(J.location>=0){let Y=F[te];if(Y===void 0&&(te==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),te==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),Y!==void 0){let K=Y.normalized,le=Y.itemSize,me=e.get(Y);if(me===void 0)continue;let Ue=me.buffer,$e=me.type,oe=me.bytesPerElement,G=$e===n.INT||$e===n.UNSIGNED_INT||Y.gpuType===ca;if(Y.isInterleavedBufferAttribute){let $=Y.data,he=$.stride,Ce=Y.offset;if($.isInstancedInterleavedBuffer){for(let Re=0;Re<J.locationSize;Re++)d(J.location+Re,$.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Re=0;Re<J.locationSize;Re++)g(J.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Re=0;Re<J.locationSize;Re++)b(J.location+Re,le/J.locationSize,$e,K,he*oe,(Ce+le/J.locationSize*Re)*oe,G)}else{if(Y.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)d(J.location+$,Y.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let $=0;$<J.locationSize;$++)g(J.location+$);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let $=0;$<J.locationSize;$++)b(J.location+$,le/J.locationSize,$e,K,le*oe,le/J.locationSize*$*oe,G)}}else if(V!==void 0){let K=V[te];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(J.location,K);break;case 3:n.vertexAttrib3fv(J.location,K);break;case 4:n.vertexAttrib4fv(J.location,K);break;default:n.vertexAttrib1fv(J.location,K)}}}}x()}function S(){w();for(let D in i){let T=i[D];for(let R in T){let P=T[R];for(let F in P){let k=P[F];for(let V in k)f(k[V].object),delete k[V];delete P[F]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let T=i[D.id];for(let R in T){let P=T[R];for(let F in P){let k=P[F];for(let V in k)f(k[V].object),delete k[V];delete P[F]}}delete i[D.id]}function I(D){for(let T in i){let R=i[T];for(let P in R){let F=R[P];if(F[D.id]===void 0)continue;let k=F[D.id];for(let V in k)f(k[V].object),delete k[V];delete F[D.id]}}}function v(D){for(let T in i){let R=i[T],P=D.isInstancedMesh===!0?D.id:0,F=R[P];if(F!==void 0){for(let k in F){let V=F[k];for(let te in V)f(V[te].object),delete V[te];delete F[k]}delete R[P],Object.keys(R).length===0&&delete i[T]}}}function w(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function rg(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,f){f!==0&&(n.drawArraysInstanced(i,c,l,f),t.update(l,i,f))}function a(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,f);let h=0;for(let p=0;p<f;p++)h+=l[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function og(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==bn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let v=I===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==on&&I!==vn&&!v&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",f=c(l);f!==l&&(He("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:S,samples:E}}function ag(n){let e=this,t=null,i=0,s=!1,r=!1,o=new un,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let p=u.length!==0||h||i!==0||s;return s=h,i=u.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,p){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,d=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?f(null):l();else{let x=r?0:i,b=x*4,y=d.clippingState||null;c.value=y,y=f(m,h,b,p);for(let S=0;S!==b;++S)y[S]=t[S];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,p,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let d=p+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let b=0,y=p;b!==_;++b,y+=4)o.copy(u[b]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Is=4,lg=6,cg=20,hg=256,zr=new ei,Du=new Ke,Sc=null,Mc=0,Ec=0,wc=!1,ug=new L,Vi=new L,Ls=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=ug}=r;Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Mc,Ec),this._renderer.xr.enabled=wc,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Ln,format:bn,colorSpace:Qs,depthBuffer:!1},s=Lu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dg(r)),this._blurMaterial=pg(r,e,t),this._ggxMaterial=fg(r,e,t)}return s}_compileMaterial(e){let t=new xe(new ft,e);this._renderer.compile(t,zr)}_sceneToCubeUV(e,t,i,s,r){let c=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Du),u.toneMapping=In,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new rn,new fi({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,d=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(Du),d=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[b]));let S=this._cubeSize;Ps(s,y*S,b>2?S:0,S,S),u.setRenderTarget(s),d&&u.render(_,c),u.render(e,c)}u.toneMapping=p,u.autoClear=h,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Si||e.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ps(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,zr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-f*f),h=l*1.25,p=u*h,{_lodMax:m}=this,_=this._sizeLods[i],g=3*_*(i>m-Is?i-m+Is:0),d=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=m-t,Ps(r,g,d,3*_,2*_),s.setRenderTarget(r),s.render(a,zr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-i,Ps(e,g,d,3*_,2*_),s.setRenderTarget(e),s.render(a,zr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],u=3*f*(s>this._lodMax-Is?s-this._lodMax+Is:0),h=4*(this._cubeSize-f);Ps(t,u,h,3*f,2*f),o.setRenderTarget(t),o.render(c,zr)}};function dg(n){let e=[],t=[],i=n,s=n-Is+1+lg;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),c=-a,l=1+a,f=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,h=6,p=3,m=new Float32Array(p*h*u),_=new Float32Array(p*h*u);for(let d=0;d<u;d++){let x=d%3*2/3-1,b=d>2?0:-1,y=[x,b,0,x+2/3,b,0,x+2/3,b+1,0,x,b,0,x+2/3,b+1,0,x,b+1,0];m.set(y,p*h*d);for(let S=0;S<h;S++){let E=f[S*2]*2-1,I=f[S*2+1]*2-1;d===0?Vi.set(1,I,E):d===1?Vi.set(-E,1,-I):d===2?Vi.set(-E,I,1):d===3?Vi.set(-1,I,-E):d===4?Vi.set(-E,-1,I):Vi.set(E,I,-1),Vi.toArray(_,(d*h+S)*p)}}let g=new ft;g.setAttribute("position",new Xt(m,p)),g.setAttribute("outputDirection",new Xt(_,p)),t.push(new xe(g,null)),i>Is&&i--}return{lodMeshes:t,sizeLods:e}}function Lu(n,e,t){let i=new sn(n,e,t);return i.texture.mapping=Ir,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function fg(n,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ja(),fragmentShader:`

      precision highp float;
      precision highp int;

      varying vec3 vOutputDirection;

      uniform sampler2D envMap;
      uniform float roughness;
      uniform float mipInt;

      #define ENVMAP_TYPE_CUBE_UV
      #include <cube_uv_reflection_fragment>

      #define PI 3.14159265359

      // Van der Corput radical inverse
      float radicalInverse_VdC(uint bits) {
        bits = (bits << 16u) | (bits >> 16u);
        bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
        bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
        bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
        bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
        return float(bits) * 2.3283064365386963e-10; // / 0x100000000
      }

      // Hammersley sequence
      vec2 hammersley(uint i, uint N) {
        return vec2(float(i) / float(N), radicalInverse_VdC(i));
      }

      // GGX VNDF importance sampling (Eric Heitz 2018)
      // "Sampling the GGX Distribution of Visible Normals"
      // https://jcgt.org/published/0007/04/01/
      vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
        float alpha = roughness * roughness;

        // Section 4.1: Orthonormal basis
        vec3 T1 = vec3(1.0, 0.0, 0.0);
        vec3 T2 = cross(V, T1);

        // Section 4.2: Parameterization of projected area
        float r = sqrt(Xi.x);
        float phi = 2.0 * PI * Xi.y;
        float t1 = r * cos(phi);
        float t2 = r * sin(phi);
        float s = 0.5 * (1.0 + V.z);
        t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

        // Section 4.3: Reprojection onto hemisphere
        vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

        // Section 3.4: Transform back to ellipsoid configuration
        return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
      }

      void main() {
        vec3 N = normalize(vOutputDirection);
        vec3 V = N; // Assume view direction equals normal for pre-filtering

        vec3 prefilteredColor = vec3(0.0);
        float totalWeight = 0.0;

        // For very low roughness, just sample the environment directly
        if (roughness < 0.001) {
          gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
          return;
        }

        // Tangent space basis for VNDF sampling
        vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
        vec3 tangent = normalize(cross(up, N));
        vec3 bitangent = cross(N, tangent);

        for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
          vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

          // For PMREM, V = N, so in tangent space V is always (0, 0, 1)
          vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

          // Transform H back to world space
          vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
          vec3 L = normalize(2.0 * dot(V, H) * H - V);

          float NdotL = max(dot(N, L), 0.0);

          if(NdotL > 0.0) {
            // Sample environment at fixed mip level
            // VNDF importance sampling handles the distribution filtering
            vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

            // Weight by NdotL for the split-sum approximation
            // VNDF PDF naturally accounts for the visible microfacet distribution
            prefilteredColor += sampleColor * NdotL;
            totalWeight += NdotL;
          }
        }

        if (totalWeight > 0.0) {
          prefilteredColor = prefilteredColor / totalWeight;
        }

        gl_FragColor = vec4(prefilteredColor, 1.0);
      }
    `,blending:Gn,depthTest:!1,depthWrite:!1})}function pg(n,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:cg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ja(),fragmentShader:`

      precision highp float;
      precision highp int;

      varying vec3 vOutputDirection;

      uniform sampler2D envMap;
      uniform float sigma;
      uniform float mipInt;

      #define ENVMAP_TYPE_CUBE_UV
      #include <cube_uv_reflection_fragment>

      #define PI 3.14159265359
      #define GOLDEN_ANGLE 2.39996322973

      void main() {

        if ( sigma == 0.0 ) {

          gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
          return;

        }

        vec3 outputDirection = normalize( vOutputDirection );

        vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
        vec3 tangent = normalize( cross( up, outputDirection ) );
        vec3 bitangent = cross( outputDirection, tangent );

        // Truncate the kernel at three standard deviations or at the antipode.
        float thetaMax = min( 3.0 * sigma, PI );
        float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

        vec3 accumColor = vec3( 0.0 );
        float accumWeight = 0.0;

        for ( int i = 0; i < SAMPLES; i ++ ) {

          // Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
          float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
          float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
          float phi = float( i ) * GOLDEN_ANGLE;

          vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
          vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

          // Correct the planar sample density to solid angle.
          float weight = sin( theta ) / theta;

          accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
          accumWeight += weight;

        }

        gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

      }
    `,blending:Gn,depthTest:!1,depthWrite:!1})}function Nu(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

      precision mediump float;
      precision mediump int;

      varying vec3 vOutputDirection;

      uniform sampler2D envMap;

      #include <common>

      void main() {

        vec3 outputDirection = normalize( vOutputDirection );
        vec2 uv = equirectUv( outputDirection );

        gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

      }
    `,blending:Gn,depthTest:!1,depthWrite:!1})}function Uu(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

      precision mediump float;
      precision mediump int;

      uniform float flipEnvMap;

      varying vec3 vOutputDirection;

      uniform samplerCube envMap;

      void main() {

        gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

      }
    `,blending:Gn,depthTest:!1,depthWrite:!1})}function ja(){return`

    precision mediump float;
    precision mediump int;

    attribute vec3 outputDirection;

    varying vec3 vOutputDirection;

    void main() {

      vOutputDirection = outputDirection;
      gl_Position = vec4( position, 1.0 );

    }
  `}var Ka=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ar(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

        varying vec3 vWorldDirection;

        vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

          return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

        }

        void main() {

          vWorldDirection = transformDirection( position, modelMatrix );

          #include <begin_vertex>
          #include <project_vertex>

        }
      `,fragmentShader:`

        uniform sampler2D tEquirect;

        varying vec3 vWorldDirection;

        #include <common>

        void main() {

          vec3 direction = normalize( vWorldDirection );

          vec2 sampleUV = equirectUv( direction );

          gl_FragColor = texture2D( tEquirect, sampleUV );

        }
      `},s=new rn(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Gn});r.uniforms.tEquirect.value=t;let o=new xe(s,r),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=qt),new ia(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function mg(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===oa||p===aa)if(e.has(h)){let m=e.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let _=new Ka(m.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,m=p===oa||p===aa,_=p===Si||p===ki;if(m||_){let g=t.get(h),d=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Ls(n)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let x=h.image;return m&&x&&x.height>0||_&&x&&c(x)?(i===null&&(i=new Ls(n)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function a(h,p){return p===oa?h.mapping=Si:p===aa&&(h.mapping=ki),h}function c(h){let p=0,m=6;for(let _=0;_<m;_++)h[_]!==void 0&&p++;return p===m}function l(h){let p=h.target;p.removeEventListener("dispose",l);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(h){let p=h.target;p.removeEventListener("dispose",f);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function gg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ii("WebGLRenderer: "+i+" extension not supported."),s}}}function _g(n,e,t,i){let s={},r=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(u){let h=u.attributes;for(let p in h)e.update(h[p],n.ARRAY_BUFFER)}function l(u){let h=[],p=u.index,m=u.attributes.position,_=0;if(m===void 0)return;if(p!==null){let x=p.array;_=p.version;for(let b=0,y=x.length;b<y;b+=3){let S=x[b+0],E=x[b+1],I=x[b+2];h.push(S,E,E,I,I,S)}}else{let x=m.array;_=m.version;for(let b=0,y=x.length/3-1;b<y;b+=3){let S=b+0,E=b+1,I=b+2;h.push(S,E,E,I,I,S)}}let g=new(m.count>=65535?sr:ir)(h,1);g.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,g)}function f(u){let h=r.get(u);if(h){let p=u.index;p!==null&&h.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function xg(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,h){n.drawElements(i,h,r,u*o),t.update(h,i,1)}function l(u,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,u*o,p),t.update(h,i,p))}function f(u,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,u,0,p);let _=0;for(let g=0;g<p;g++)_+=h[g];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function yg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function vg(n,e,t){let i=new WeakMap,s=new Rt;function r(o,a,c){let l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,h=i.get(a);if(h===void 0||h.count!==u){let w=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],b=0;p===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let y=a.attributes.position.count*b,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*S*4*u),I=new nr(E,y,S,u);I.type=vn,I.needsUpdate=!0;let v=b*4;for(let C=0;C<u;C++){let D=g[C],T=d[C],R=x[C],P=y*S*4*C;for(let F=0;F<D.count;F++){let k=F*v;p===!0&&(s.fromBufferAttribute(D,F),E[P+k+0]=s.x,E[P+k+1]=s.y,E[P+k+2]=s.z,E[P+k+3]=0),m===!0&&(s.fromBufferAttribute(T,F),E[P+k+4]=s.x,E[P+k+5]=s.y,E[P+k+6]=s.z,E[P+k+7]=0),_===!0&&(s.fromBufferAttribute(R,F),E[P+k+8]=s.x,E[P+k+9]=s.y,E[P+k+10]=s.z,E[P+k+11]=R.itemSize===4?s.w:1)}}h={count:u,texture:I,size:new ae(y,S)},i.set(a,h),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];let m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function bg(n,e,t,i,s){let r=new WeakMap;function o(l){let f=s.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return h}function a(){r=new WeakMap}function c(l){let f=l.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var Sg={[tc]:"LINEAR_TONE_MAPPING",[nc]:"REINHARD_TONE_MAPPING",[ic]:"CINEON_TONE_MAPPING",[Pr]:"ACES_FILMIC_TONE_MAPPING",[rc]:"AGX_TONE_MAPPING",[oc]:"NEUTRAL_TONE_MAPPING",[sc]:"CUSTOM_TONE_MAPPING"};function Mg(n,e,t,i,s,r){let o=new sn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ft;l.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new je([0,2,0,0,2,0],2));let f=new Wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
      precision highp float;

      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;

      attribute vec3 position;
      attribute vec2 uv;

      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,fragmentShader:`
      precision highp float;

      uniform sampler2D tDiffuse;

      varying vec2 vUv;

      #include <tonemapping_pars_fragment>
      #include <colorspace_pars_fragment>

      void main() {
        gl_FragColor = texture2D( tDiffuse, vUv );

        #ifdef LINEAR_TONE_MAPPING
          gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
        #elif defined( REINHARD_TONE_MAPPING )
          gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
        #elif defined( CINEON_TONE_MAPPING )
          gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
        #elif defined( ACES_FILMIC_TONE_MAPPING )
          gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
        #elif defined( AGX_TONE_MAPPING )
          gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
        #elif defined( NEUTRAL_TONE_MAPPING )
          gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
        #elif defined( CUSTOM_TONE_MAPPING )
          gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
        #endif

        #ifdef SRGB_TRANSFER
          gl_FragColor = sRGBTransferOETF( gl_FragColor );
        #endif
      }`,depthTest:!1,depthWrite:!1}),u=new xe(l,f),h=new ei(-1,1,1,-1,0,1),p=null,m=null,_=!1,g,d=null,x=[],b=!1;this.setSize=function(y,S){o.setSize(y,S),a!==null&&a.setSize(y,S),c!==null&&c.setSize(y,S);for(let E=0;E<x.length;E++){let I=x[E];I.setSize&&I.setSize(y,S)}},this.setEffects=function(y){x=y,b=x.length>0&&x[0].isRenderPass===!0;let S=o.width,E=o.height;x.length>0&&a===null&&(a=new sn(S,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new sn(S,E,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<x.length;I++){let v=x[I];v.setSize&&v.setSize(S,E)}},this.begin=function(y,S){if(_||y.toneMapping===In&&x.length===0)return!1;if(d=S,S!==null){let E=S.width,I=S.height;(o.width!==E||o.height!==I)&&this.setSize(E,I)}return b===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=In,!0},this.hasRenderPass=function(){return b},this.end=function(y,S){y.toneMapping=g,_=!0;let E=o,I=a;for(let v=0;v<x.length;v++){let w=x[v];w.enabled!==!1&&(w.render(y,I,E,S),w.needsSwap!==!1&&(E=I,I=I===a?c:a))}if(p!==y.outputColorSpace||m!==y.toneMapping){p=y.outputColorSpace,m=y.toneMapping,f.defines={},lt.getTransfer(p)===_t&&(f.defines.SRGB_TRANSFER="");let v=Sg[m];v&&(f.defines[v]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(d),y.render(u,h),d=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),f.dispose()}}var td=new nn,Rc=new pi(1,1),nd=new nr,id=new No,sd=new ar,Fu=[],Ou=[],Bu=new Float32Array(16),ku=new Float32Array(9),zu=new Float32Array(4);function Ns(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Fu[s];if(r===void 0&&(r=new Float32Array(s),Fu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qa(n,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Eg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function Tg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function Ag(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function Rg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;zu.set(i),n.uniformMatrix2fv(this.addr,!1,zu),Ot(t,i)}}function Cg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;ku.set(i),n.uniformMatrix3fv(this.addr,!1,ku),Ot(t,i)}}function Pg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;Bu.set(i),n.uniformMatrix4fv(this.addr,!1,Bu),Ot(t,i)}}function Ig(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Dg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function Lg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function Ng(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function Ug(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function Og(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function Bg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function kg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Rc.compareFunction=t.isReversedDepthBuffer()?Ya:qa,r=Rc):r=td,t.setTexture2D(e||r,s)}function zg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||id,s)}function Hg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||sd,s)}function Vg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||nd,s)}function Gg(n){switch(n){case 5126:return Eg;case 35664:return wg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Dg;case 35668:case 35672:return Lg;case 35669:case 35673:return Ng;case 5125:return Ug;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Wg(n,e){n.uniform1fv(this.addr,e)}function Xg(n,e){let t=Ns(e,this.size,2);n.uniform2fv(this.addr,t)}function qg(n,e){let t=Ns(e,this.size,3);n.uniform3fv(this.addr,t)}function Yg(n,e){let t=Ns(e,this.size,4);n.uniform4fv(this.addr,t)}function Zg(n,e){let t=Ns(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jg(n,e){let t=Ns(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Kg(n,e){let t=Ns(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function $g(n,e){n.uniform1iv(this.addr,e)}function jg(n,e){n.uniform2iv(this.addr,e)}function Qg(n,e){n.uniform3iv(this.addr,e)}function e1(n,e){n.uniform4iv(this.addr,e)}function t1(n,e){n.uniform1uiv(this.addr,e)}function n1(n,e){n.uniform2uiv(this.addr,e)}function i1(n,e){n.uniform3uiv(this.addr,e)}function s1(n,e){n.uniform4uiv(this.addr,e)}function r1(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Rc:o=td;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function o1(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||id,r[o])}function a1(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||sd,r[o])}function l1(n,e,t){let i=this.cache,s=e.length,r=Qa(t,s);Ft(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||nd,r[o])}function c1(n){switch(n){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return Zg;case 35675:return Jg;case 35676:return Kg;case 5124:case 35670:return $g;case 35667:case 35671:return jg;case 35668:case 35672:return Qg;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return l1}}var Cc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}},Pc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c1(t.type)}},Ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function Hu(n,e){n.seq.push(e),n.map[e.id]=e}function h1(n,e,t){let i=n.name,s=i.length;for(Tc.lastIndex=0;;){let r=Tc.exec(i),o=Tc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Hu(t,l===void 0?new Cc(a,n,e):new Pc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Ic(a),Hu(t,u)),t=u}}}var Ds=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);h1(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Vu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var u1=37297,d1=0;function f1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Gu=new Qe;function p1(n){lt._getMatrix(Gu,lt.workingColorSpace,n);let e=`mat3( ${Gu.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case er:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+f1(n.getShaderSource(e),a)}else return r}function m1(n,e){let t=p1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var g1={[tc]:"Linear",[nc]:"Reinhard",[ic]:"Cineon",[Pr]:"ACESFilmic",[rc]:"AgX",[oc]:"Neutral",[sc]:"Custom"};function _1(n,e){let t=g1[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ja=new L;function x1(){lt.getLuminanceCoefficients(Ja);let n=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function v1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function b1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vr(n){return n!==""}function Xu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(n){return n.replace(S1,E1)}var M1=new Map;function E1(n,e){let t=rt[e];if(t===void 0){let i=M1.get(e);if(i!==void 0)t=rt[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dc(t)}var w1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(n){return n.replace(w1,T1)}function T1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zu(n){let e=`precision ${n.precision} float;
  precision ${n.precision} int;
  precision ${n.precision} sampler2D;
  precision ${n.precision} samplerCube;
  precision ${n.precision} sampler3D;
  precision ${n.precision} sampler2DArray;
  precision ${n.precision} sampler2DShadow;
  precision ${n.precision} samplerCubeShadow;
  precision ${n.precision} sampler2DArrayShadow;
  precision ${n.precision} isampler2D;
  precision ${n.precision} isampler3D;
  precision ${n.precision} isamplerCube;
  precision ${n.precision} isampler2DArray;
  precision ${n.precision} usampler2D;
  precision ${n.precision} usampler3D;
  precision ${n.precision} usamplerCube;
  precision ${n.precision} usampler2DArray;
  `;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var A1={[Oi]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function R1(n){return A1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var C1={[Si]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[Ir]:"ENVMAP_TYPE_CUBE_UV"};function P1(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":C1[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var I1={[ki]:"ENVMAP_MODE_REFRACTION"};function D1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":I1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var L1={[ra]:"ENVMAP_BLENDING_MULTIPLY",[au]:"ENVMAP_BLENDING_MIX",[lu]:"ENVMAP_BLENDING_ADD"};function N1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":L1[n.combine]||"ENVMAP_BLENDING_NONE"}function U1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function F1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=R1(t),l=P1(t),f=D1(t),u=N1(t),h=U1(t),p=y1(t),m=v1(r),_=s.createProgram(),g,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vr).join(`
`),d.length>0&&(d+=`
`)):(g=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),d=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?rt.tonemapping_pars_fragment:"",t.toneMapping!==In?_1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,m1("linearToOutputTexel",t.outputColorSpace),x1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=Dc(o),o=Xu(o,t),o=qu(o,t),a=Dc(a),a=Xu(a,t),a=qu(a,t),o=Yu(o),a=Yu(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=x+g+o,y=x+d+a,S=Vu(s,s.VERTEX_SHADER,b),E=Vu(s,s.FRAGMENT_SHADER,y);s.attachShader(_,S),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(D){if(n.debug.checkShaderErrors){let T=s.getProgramInfoLog(_)||"",R=s.getShaderInfoLog(S)||"",P=s.getShaderInfoLog(E)||"",F=T.trim(),k=R.trim(),V=P.trim(),te=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,S,E);else{let Y=Wu(s,S,"vertex"),K=Wu(s,E,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+Y+`
`+K)}else F!==""?He("WebGLProgram: Program Info Log:",F):(k===""||V==="")&&(J=!1);J&&(D.diagnostics={runnable:te,programLog:F,vertexShader:{log:k,prefix:g},fragmentShader:{log:V,prefix:d}})}s.deleteShader(S),s.deleteShader(E),v=new Ds(s,_),w=b1(s,_)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,u1)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}var O1=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Nc(e),t.set(e,i)),i}},Nc=class{constructor(e){this.id=O1++,this.code=e,this.usedTimes=0}};function B1(n){return n===wi||n===Or||n===Br}function k1(n,e,t,i,s,r){let o=new ps,a=new Lc,c=new Set,l=[],f=new Map,u=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,w,C,D,T,R){let P=D.fog,F=T.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,te=e.get(v.envMap||k,V),J=te&&te.mapping===Ir?te.image.height:null,Y=p[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&He("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,le=K!==void 0?K.length:0,me=0;F.morphAttributes.position!==void 0&&(me=1),F.morphAttributes.normal!==void 0&&(me=2),F.morphAttributes.color!==void 0&&(me=3);let Ue,$e,oe,G;if(Y){let bt=Xn[Y];Ue=bt.vertexShader,$e=bt.fragmentShader}else{Ue=v.vertexShader,$e=v.fragmentShader;let bt=a.getVertexShaderStage(v),mt=a.getFragmentShaderStage(v);a.update(v,bt,mt),oe=bt.id,G=mt.id}let $=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),Ce=T.isInstancedMesh===!0,Re=T.isBatchedMesh===!0,Ve=!!v.map,Ze=!!v.matcap,se=!!te,ue=!!v.aoMap,de=!!v.lightMap,fe=!!v.bumpMap&&v.wireframe===!1,_e=!!v.normalMap,Ge=!!v.displacementMap,ze=!!v.emissiveMap,Je=!!v.metalnessMap,et=!!v.roughnessMap,O=v.anisotropy>0,pt=v.clearcoat>0,ot=v.dispersion>0,N=v.retroreflectivity>0,M=v.iridescence>0,W=v.sheen>0,Z=v.transmission>0,ee=O&&!!v.anisotropyMap,pe=pt&&!!v.clearcoatMap,ge=pt&&!!v.clearcoatNormalMap,ne=pt&&!!v.clearcoatRoughnessMap,re=M&&!!v.iridescenceMap,ye=M&&!!v.iridescenceThicknessMap,Oe=W&&!!v.sheenColorMap,Me=W&&!!v.sheenRoughnessMap,ve=!!v.specularMap,Be=!!v.specularColorMap,We=!!v.specularIntensityMap,nt=Z&&!!v.transmissionMap,H=Z&&!!v.thicknessMap,be=!!v.gradientMap,ie=!!v.alphaMap,Se=v.alphaTest>0,Ae=!!v.alphaHash,ce=!!v.extensions,ke=In;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ke=n.toneMapping);let Ne={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:$e,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:G,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Re,batchingColor:Re&&T._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&T.instanceColor!==null,instancingMorph:Ce&&T.morphTexture!==null,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:Ze,envMap:se,envMapMode:se&&te.mapping,envMapCubeUVHeight:J,aoMap:ue,lightMap:de,bumpMap:fe,normalMap:_e,displacementMap:Ge,emissiveMap:ze,normalMapObjectSpace:_e&&v.normalMapType===uu,normalMapTangentSpace:_e&&v.normalMapType===kr,packedNormalMap:_e&&v.normalMapType===kr&&B1(v.normalMap.format),metalnessMap:Je,roughnessMap:et,anisotropy:O,anisotropyMap:ee,clearcoat:pt,clearcoatMap:pe,clearcoatNormalMap:ge,clearcoatRoughnessMap:ne,dispersion:ot,retroreflection:N,iridescence:M,iridescenceMap:re,iridescenceThicknessMap:ye,sheen:W,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:ve,specularColorMap:Be,specularIntensityMap:We,transmission:Z,transmissionMap:nt,thicknessMap:H,gradientMap:be,opaque:v.transparent===!1&&v.blending===Ts&&v.alphaToCoverage===!1,alphaMap:ie,alphaTest:Se,alphaHash:Ae,combine:v.combine,mapUv:Ve&&m(v.map.channel),aoMapUv:ue&&m(v.aoMap.channel),lightMapUv:de&&m(v.lightMap.channel),bumpMapUv:fe&&m(v.bumpMap.channel),normalMapUv:_e&&m(v.normalMap.channel),displacementMapUv:Ge&&m(v.displacementMap.channel),emissiveMapUv:ze&&m(v.emissiveMap.channel),metalnessMapUv:Je&&m(v.metalnessMap.channel),roughnessMapUv:et&&m(v.roughnessMap.channel),anisotropyMapUv:ee&&m(v.anisotropyMap.channel),clearcoatMapUv:pe&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&m(v.sheenRoughnessMap.channel),specularMapUv:ve&&m(v.specularMap.channel),specularColorMapUv:Be&&m(v.specularColorMap.channel),specularIntensityMapUv:We&&m(v.specularIntensityMap.channel),transmissionMapUv:nt&&m(v.transmissionMap.channel),thicknessMapUv:H&&m(v.thicknessMap.channel),alphaMapUv:ie&&m(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(_e||O),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!F.attributes.uv&&(Ve||ie),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&_e===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:me,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:R.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:ze&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===At,flipSided:v.side===Yt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function g(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)w.push(C),w.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(d(w,v),x(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function d(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function b(v){let w=p[v.type],C;if(w){let D=Xn[w];C=Cu.clone(D.uniforms)}else C=v.uniforms;return C}function y(v,w){let C=f.get(w);return C!==void 0?++C.usedTimes:(C=new F1(n,w,v,s),l.push(C),f.set(w,C)),C}function S(v){if(--v.usedTimes===0){let w=l.indexOf(v);l[w]=l[l.length-1],l.pop(),f.delete(v.cacheKey),v.destroy()}}function E(v){a.remove(v)}function I(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:S,releaseShaderCache:E,programs:l,dispose:I}}function z1(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function H1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ju(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ku(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,m,_,g,d){let x=n[e];return x===void 0?(x={id:h.id,object:h,geometry:p,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:d},n[e]=x):(x.id=h.id,x.object=h,x.geometry=p,x.material=m,x.materialVariant=o(h),x.groupOrder=_,x.renderOrder=h.renderOrder,x.z=g,x.group=d),e++,x}function c(h,p,m,_,g,d,x){x.reversedDepth===!0&&(g=-g);let b=a(h,p,m,_,g,d);m.transmission>0?i.push(b):m.transparent===!0?s.push(b):t.push(b)}function l(h,p,m,_,g,d){let x=a(h,p,m,_,g,d);m.transmission>0?i.unshift(x):m.transparent===!0?s.unshift(x):t.unshift(x)}function f(h,p){t.length>1&&t.sort(h||H1),i.length>1&&i.sort(p||Ju),s.length>1&&s.sort(p||Ju)}function u(){for(let h=e,p=n.length;h<p;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:f}}function V1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Ku,n.set(i,[o])):s>=r.length?(o=new Ku,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function G1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ke};break;case"SpotLight":t={position:new L,direction:new L,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function W1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var X1=0;function q1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Y1(n){let e=new G1,t=W1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);let s=new L,r=new dt,o=new dt;function a(l){let f=0,u=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,m=0,_=0,g=0,d=0,x=0,b=0,y=0,S=0,E=0,I=0,v=0,w=0,C=0;l.sort(q1);for(let T=0,R=l.length;T<R;T++){let P=l[T],F=P.color,k=P.intensity,V=P.distance,te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===wi?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=F.r*k,u+=F.g*k,h+=F.b*k;else if(P.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(P.sh.coefficients[J],k);C++}else if(P.isSunLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,K=t.get(P);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[m]=K,i.sunShadowMap[m]=te;let le=Y.getViewportCount();for(let me=0;me<le;me++)i.sunShadowMatrix[_+me]=Y.getMatrix(me),i.sunShadowCascade[_+me]=Y._cascadeData[me];_+=le,m++}i.sun[p]=J,p++}else if(P.isDirectionalLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Y=P.shadow,K=t.get(P);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=te,i.directionalShadowMatrix[g]=P.shadow.matrix,S++}i.directional[g]=J,g++}else if(P.isSpotLight){let J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(F).multiplyScalar(k),J.distance=V,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,i.spot[x]=J;let Y=P.shadow;if(P.map&&(i.spotLightMap[v]=P.map,v++,Y.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[x]=Y.matrix,P.castShadow){let K=t.get(P);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=te,I++}x++}else if(P.isRectAreaLight){let J=e.get(P);J.color.copy(F).multiplyScalar(k),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),i.rectArea[b]=J,b++}else if(P.isPointLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){let Y=P.shadow,K=t.get(P);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,i.pointShadow[d]=K,i.pointShadowMap[d]=te,i.pointShadowMatrix[d]=P.shadow.matrix,E++}i.point[d]=J,d++}else if(P.isHemisphereLight){let J=e.get(P);J.skyColor.copy(P.color).multiplyScalar(k),J.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[y]=J,y++}}b>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;let D=i.hash;(D.sunLength!==p||D.directionalLength!==g||D.pointLength!==d||D.spotLength!==x||D.rectAreaLength!==b||D.hemiLength!==y||D.numSunShadows!==m||D.numDirectionalShadows!==S||D.numPointShadows!==E||D.numSpotShadows!==I||D.numSpotMaps!==v||D.numLightProbes!==C)&&(i.sun.length=p,i.directional.length=g,i.spot.length=x,i.rectArea.length=b,i.point.length=d,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,D.sunLength=p,D.directionalLength=g,D.pointLength=d,D.spotLength=x,D.rectAreaLength=b,D.hemiLength=y,D.numSunShadows=m,D.numDirectionalShadows=S,D.numPointShadows=E,D.numSpotShadows=I,D.numSpotMaps=v,D.numLightProbes=C,i.version=X1++)}function c(l,f){let u=0,h=0,p=0,m=0,_=0,g=0,d=f.matrixWorldInverse;for(let x=0,b=l.length;x<b;x++){let y=l[x];if(y.isSunLight){let S=i.sun[u];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(d),u++}else if(y.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),h++}else if(y.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),m++}else if(y.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),o.identity(),r.copy(y.matrixWorld),r.premultiply(d),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(d),g++}}}return{setup:a,setupView:c,state:i}}function $u(n){let e=new Y1(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function f(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Z1(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new $u(n),e.set(s,[a])):r>=o.length?(a=new $u(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var J1=`void main() {
  gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
  const float samples = float( VSM_SAMPLES );
  float mean = 0.0;
  float squared_mean = 0.0;
  float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
  float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
  for ( float i = 0.0; i < samples; i ++ ) {
    float uvOffset = uvStart + i * uvStride;
    #ifdef HORIZONTAL_PASS
      vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
    #else
      float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
      mean += depth;
      squared_mean += depth * depth;
    #endif
  }
  mean = mean / samples;
  squared_mean = squared_mean / samples;
  float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
  gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$1=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],j1=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ju=new dt,Hr=new L,Ac=new L;function Q1(n,e,t){let i=new _s,s=new ae,r=new ae,o=new Rt,a=new Xo,c=new qo,l={},f=t.maxTextureSize,u={[bi]:Yt,[Yt]:bi,[At]:At},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:J1,fragmentShader:K1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let m=new ft;m.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new xe(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oi;let d=this.type;this.render=function(E,I,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Vh&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Oi);let w=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),T=n.state;T.setBlending(Gn),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let R=d!==this.type;R&&I.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=E.length;P<F;P++){let k=E[P],V=k.shadow;if(V===void 0){He("WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let te=V.getFrameExtents();s.multiply(te),r.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/te.x),s.x=r.x*te.x,V.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/te.y),s.y=r.y*te.y,V.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||R===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ws){if(k.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new sn(s.x,s.y,{format:wi,type:Ln,minFilter:qt,magFilter:qt,generateMipmaps:!1}),V.map.texture.name=k.name+".shadowMap",V.map.depthTexture=new pi(s.x,s.y,vn),V.map.depthTexture.name=k.name+".shadowMapDepth",V.map.depthTexture.format=zn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt}else k.isPointLight?(V.map=new Ka(s.x),V.map.depthTexture=new Bo(s.x,Dn)):(V.map=new sn(s.x,s.y),V.map.depthTexture=new pi(s.x,s.y,Dn)),V.map.depthTexture.name=k.name+".shadowMap",V.map.depthTexture.format=zn,this.type===Oi?(V.map.depthTexture.compareFunction=J?Ya:qa,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Y=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();k.isPointLight!==!0&&V.updateMatrices(k,v);for(let K=0;K<Y;K++){let le=V.getCamera(K);if(k.isPointLight){let me=V.camera,Ue=V.matrix,$e=k.distance||me.far;$e!==me.far&&(me.far=$e,me.updateProjectionMatrix()),Hr.setFromMatrixPosition(k.matrixWorld),me.position.copy(Hr),Ac.copy(me.position),Ac.add($1[K]),me.up.copy(j1[K]),me.lookAt(Ac),me.updateMatrixWorld(),Ue.makeTranslation(-Hr.x,-Hr.y,-Hr.z),ju.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ju,me.coordinateSystem,me.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,K),n.clear();else{K===0&&(n.setRenderTarget(V.map),n.clear());let me=V.getViewport(K);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),T.viewport(o)}i=V.getFrustum(K),y(I,v,le,k,this.type)}V.isPointLightShadow!==!0&&this.type===ws&&x(V,v),V.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(w,C,D)};function x(E,I){let v=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new sn(s.x,s.y,{format:wi,type:Ln}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(I,null,v,h,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(I,null,v,p,_,null)}function b(E,I,v,w){let C=null,D=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let T=C.uuid,R=I.uuid,P=l[T];P===void 0&&(P={},l[T]=P);let F=P[R];F===void 0&&(F=C.clone(),P[R]=F,I.addEventListener("dispose",S)),C=F}if(C.visible=I.visible,C.wireframe=I.wireframe,w===ws?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:u[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let T=n.properties.get(C);T.light=v}return C}function y(E,I,v,w,C){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===ws)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);let R=e.update(E),P=E.material;if(Array.isArray(P)){let F=R.groups;for(let k=0,V=F.length;k<V;k++){let te=F[k],J=P[te.materialIndex];if(J&&J.visible){let Y=b(E,J,w,C);E.onBeforeShadow(n,E,I,v,R,Y,te),n.renderBufferDirect(v,null,R,Y,E,te),E.onAfterShadow(n,E,I,v,R,Y,te)}}}else if(P.visible){let F=b(E,P,w,C);E.onBeforeShadow(n,E,I,v,R,F,null),n.renderBufferDirect(v,null,R,F,E,null),E.onAfterShadow(n,E,I,v,R,F,null)}}let T=E.children;for(let R=0,P=T.length;R<P;R++)y(T[R],I,v,w,C)}function S(E){E.target.removeEventListener("dispose",S);for(let v in l){let w=l[v],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function e_(n,e){function t(){let H=!1,be=new Rt,ie=null,Se=new Rt(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!H&&(n.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,ce,ke,Ne,bt){bt===!0&&(Ae*=Ne,ce*=Ne,ke*=Ne),be.set(Ae,ce,ke,Ne),Se.equals(be)===!1&&(n.clearColor(Ae,ce,ke,Ne),Se.copy(be))},reset:function(){H=!1,ie=null,Se.set(-1,0,0,0)}}}function i(){let H=!1,be=!1,ie=null,Se=null,Ae=null;return{setReversed:function(ce){if(be!==ce){let ke=e.get("EXT_clip_control");ce?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),be=ce;let Ne=Ae;Ae=null,this.setClear(Ne)}},getReversed:function(){return be},setTest:function(ce){ce?$(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(ce){ie!==ce&&!H&&(n.depthMask(ce),ie=ce)},setFunc:function(ce){if(be&&(ce=Mu[ce]),Se!==ce){switch(ce){case So:n.depthFunc(n.NEVER);break;case Mo:n.depthFunc(n.ALWAYS);break;case Eo:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case wo:n.depthFunc(n.EQUAL);break;case To:n.depthFunc(n.GEQUAL);break;case Ao:n.depthFunc(n.GREATER);break;case Ro:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=ce}},setLocked:function(ce){H=ce},setClear:function(ce){Ae!==ce&&(Ae=ce,be&&(ce=1-ce),n.clearDepth(ce))},reset:function(){H=!1,ie=null,Se=null,Ae=null,be=!1}}}function s(){let H=!1,be=null,ie=null,Se=null,Ae=null,ce=null,ke=null,Ne=null,bt=null;return{setTest:function(mt){H||(mt?$(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(mt){be!==mt&&!H&&(n.stencilMask(mt),be=mt)},setFunc:function(mt,Mn,Fn){(ie!==mt||Se!==Mn||Ae!==Fn)&&(n.stencilFunc(mt,Mn,Fn),ie=mt,Se=Mn,Ae=Fn)},setOp:function(mt,Mn,Fn){(ce!==mt||ke!==Mn||Ne!==Fn)&&(n.stencilOp(mt,Mn,Fn),ce=mt,ke=Mn,Ne=Fn)},setLocked:function(mt){H=mt},setClear:function(mt){bt!==mt&&(n.clearStencil(mt),bt=mt)},reset:function(){H=!1,be=null,ie=null,Se=null,Ae=null,ce=null,ke=null,Ne=null,bt=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,f={},u={},h={},p=new WeakMap,m=[],_=null,g=!1,d=null,x=null,b=null,y=null,S=null,E=null,I=null,v=new Ke(0,0,0),w=0,C=!1,D=null,T=null,R=null,P=null,F=null,k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,te=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=te>=1):J.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=te>=2);let Y=null,K={},le=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Ue=new Rt().fromArray(le),$e=new Rt().fromArray(me);function oe(H,be,ie,Se){let Ae=new Uint8Array(4),ce=n.createTexture();n.bindTexture(H,ce),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<ie;ke++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(be+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return ce}let G={};G[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(n.DEPTH_TEST),o.setFunc(cs),fe(!1),_e(Jl),$(n.CULL_FACE),ue(Gn);function $(H){f[H]!==!0&&(n.enable(H),f[H]=!0)}function he(H){f[H]!==!1&&(n.disable(H),f[H]=!1)}function Ce(H,be){return h[H]!==be?(n.bindFramebuffer(H,be),h[H]=be,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=be),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=be),!0):!1}function Re(H,be){let ie=m,Se=!1;if(H){ie=p.get(be),ie===void 0&&(ie=[],p.set(be,ie));let Ae=H.textures;if(ie.length!==Ae.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,ke=Ae.length;ce<ke;ce++)ie[ce]=n.COLOR_ATTACHMENT0+ce;ie.length=Ae.length,Se=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,Se=!0);Se&&n.drawBuffers(ie)}function Ve(H){return _!==H?(n.useProgram(H),_=H,!0):!1}let Ze={[Bi]:n.FUNC_ADD,[Wh]:n.FUNC_SUBTRACT,[Xh]:n.FUNC_REVERSE_SUBTRACT};Ze[qh]=n.MIN,Ze[Yh]=n.MAX;let se={[Zh]:n.ZERO,[Jh]:n.ONE,[Kh]:n.SRC_COLOR,[Ql]:n.SRC_ALPHA,[nu]:n.SRC_ALPHA_SATURATE,[eu]:n.DST_COLOR,[jh]:n.DST_ALPHA,[$h]:n.ONE_MINUS_SRC_COLOR,[ec]:n.ONE_MINUS_SRC_ALPHA,[tu]:n.ONE_MINUS_DST_COLOR,[Qh]:n.ONE_MINUS_DST_ALPHA,[iu]:n.CONSTANT_COLOR,[su]:n.ONE_MINUS_CONSTANT_COLOR,[ru]:n.CONSTANT_ALPHA,[ou]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(H,be,ie,Se,Ae,ce,ke,Ne,bt,mt){if(H===Gn){g===!0&&(he(n.BLEND),g=!1);return}if(g===!1&&($(n.BLEND),g=!0),H!==Gh){if(H!==d||mt!==C){if((x!==Bi||S!==Bi)&&(n.blendEquation(n.FUNC_ADD),x=Bi,S=Bi),mt)switch(H){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kl:n.blendFunc(n.ONE,n.ONE);break;case $l:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",H);break}else switch(H){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $l:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",H);break}b=null,y=null,E=null,I=null,v.set(0,0,0),w=0,d=H,C=mt}return}Ae=Ae||be,ce=ce||ie,ke=ke||Se,(be!==x||Ae!==S)&&(n.blendEquationSeparate(Ze[be],Ze[Ae]),x=be,S=Ae),(ie!==b||Se!==y||ce!==E||ke!==I)&&(n.blendFuncSeparate(se[ie],se[Se],se[ce],se[ke]),b=ie,y=Se,E=ce,I=ke),(Ne.equals(v)===!1||bt!==w)&&(n.blendColor(Ne.r,Ne.g,Ne.b,bt),v.copy(Ne),w=bt),d=H,C=!1}function de(H,be){H.side===At?he(n.CULL_FACE):$(n.CULL_FACE);let ie=H.side===Yt;be&&(ie=!ie),fe(ie),H.blending===Ts&&H.transparent===!1?ue(Gn):ue(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Se=H.stencilWrite;a.setTest(Se),Se&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ze(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(H){D!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),D=H)}function _e(H){H!==zh?($(n.CULL_FACE),H!==T&&(H===Jl?n.cullFace(n.BACK):H===Hh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),T=H}function Ge(H){H!==R&&(V&&n.lineWidth(H),R=H)}function ze(H,be,ie){H?($(n.POLYGON_OFFSET_FILL),(P!==be||F!==ie)&&(P=be,F=ie,o.getReversed()&&(be=-be),n.polygonOffset(be,ie))):he(n.POLYGON_OFFSET_FILL)}function Je(H){H?$(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function et(H){H===void 0&&(H=n.TEXTURE0+k-1),Y!==H&&(n.activeTexture(H),Y=H)}function O(H,be,ie){ie===void 0&&(Y===null?ie=n.TEXTURE0+k-1:ie=Y);let Se=K[ie];Se===void 0&&(Se={type:void 0,texture:void 0},K[ie]=Se),(Se.type!==H||Se.texture!==be)&&(Y!==ie&&(n.activeTexture(ie),Y=ie),n.bindTexture(H,be||G[H]),Se.type=H,Se.texture=be)}function pt(){let H=K[Y];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(H){Xe("WebGLState:",H)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(H){Xe("WebGLState:",H)}}function M(){try{n.texSubImage2D(...arguments)}catch(H){Xe("WebGLState:",H)}}function W(){try{n.texSubImage3D(...arguments)}catch(H){Xe("WebGLState:",H)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Xe("WebGLState:",H)}}function ee(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Xe("WebGLState:",H)}}function pe(){try{n.texStorage2D(...arguments)}catch(H){Xe("WebGLState:",H)}}function ge(){try{n.texStorage3D(...arguments)}catch(H){Xe("WebGLState:",H)}}function ne(){try{n.texImage2D(...arguments)}catch(H){Xe("WebGLState:",H)}}function re(){try{n.texImage3D(...arguments)}catch(H){Xe("WebGLState:",H)}}function ye(H){return u[H]!==void 0?u[H]:n.getParameter(H)}function Oe(H,be){u[H]!==be&&(n.pixelStorei(H,be),u[H]=be)}function Me(H){Ue.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ue.copy(H))}function ve(H){$e.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),$e.copy(H))}function Be(H,be){let ie=l.get(be);ie===void 0&&(ie=new WeakMap,l.set(be,ie));let Se=ie.get(H);Se===void 0&&(Se=n.getUniformBlockIndex(be,H.name),ie.set(H,Se))}function We(H,be){let Se=l.get(be).get(H);c.get(be)!==Se&&(n.uniformBlockBinding(be,Se,H.__bindingPointIndex),c.set(be,Se))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},u={},Y=null,K={},h={},p=new WeakMap,m=[],_=null,g=!1,d=null,x=null,b=null,y=null,S=null,E=null,I=null,v=new Ke(0,0,0),w=0,C=!1,D=null,T=null,R=null,P=null,F=null,Ue.set(0,0,n.canvas.width,n.canvas.height),$e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$,disable:he,bindFramebuffer:Ce,drawBuffers:Re,useProgram:Ve,setBlending:ue,setMaterial:de,setFlipSided:fe,setCullFace:_e,setLineWidth:Ge,setPolygonOffset:ze,setScissorTest:Je,activeTexture:et,bindTexture:O,unbindTexture:pt,compressedTexImage2D:ot,compressedTexImage3D:N,texImage2D:ne,texImage3D:re,pixelStorei:Oe,getParameter:ye,updateUBOMapping:Be,uniformBlockBinding:We,texStorage2D:pe,texStorage3D:ge,texSubImage2D:M,texSubImage3D:W,compressedTexSubImage2D:Z,compressedTexSubImage3D:ee,scissor:Me,viewport:ve,reset:nt}}function t_(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,f=new WeakMap,u=new Set,h,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,M){return m?new OffscreenCanvas(N,M):tr("canvas")}function g(N,M,W){let Z=1,ee=ot(N);if((ee.width>W||ee.height>W)&&(Z=W/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let pe=Math.floor(Z*ee.width),ge=Math.floor(Z*ee.height);h===void 0&&(h=_(pe,ge));let ne=M?_(pe,ge):h;return ne.width=pe,ne.height=ge,ne.getContext("2d").drawImage(N,0,0,pe,ge),He("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+pe+"x"+ge+")."),ne}else return"data"in N&&He("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),N;return N}function d(N){return N.generateMipmaps}function x(N){n.generateMipmap(N)}function b(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(N,M,W,Z,ee,pe=!1){if(N!==null){if(n[N]!==void 0)return n[N];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ge;Z&&(ge=e.get("EXT_texture_norm16"),ge||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=M;if(M===n.RED&&(W===n.FLOAT&&(ne=n.R32F),W===n.HALF_FLOAT&&(ne=n.R16F),W===n.UNSIGNED_BYTE&&(ne=n.R8),W===n.UNSIGNED_SHORT&&ge&&(ne=ge.R16_EXT),W===n.SHORT&&ge&&(ne=ge.R16_SNORM_EXT)),M===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.R8UI),W===n.UNSIGNED_SHORT&&(ne=n.R16UI),W===n.UNSIGNED_INT&&(ne=n.R32UI),W===n.BYTE&&(ne=n.R8I),W===n.SHORT&&(ne=n.R16I),W===n.INT&&(ne=n.R32I)),M===n.RG&&(W===n.FLOAT&&(ne=n.RG32F),W===n.HALF_FLOAT&&(ne=n.RG16F),W===n.UNSIGNED_BYTE&&(ne=n.RG8),W===n.UNSIGNED_SHORT&&ge&&(ne=ge.RG16_EXT),W===n.SHORT&&ge&&(ne=ge.RG16_SNORM_EXT)),M===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.RG8UI),W===n.UNSIGNED_SHORT&&(ne=n.RG16UI),W===n.UNSIGNED_INT&&(ne=n.RG32UI),W===n.BYTE&&(ne=n.RG8I),W===n.SHORT&&(ne=n.RG16I),W===n.INT&&(ne=n.RG32I)),M===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),W===n.UNSIGNED_INT&&(ne=n.RGB32UI),W===n.BYTE&&(ne=n.RGB8I),W===n.SHORT&&(ne=n.RGB16I),W===n.INT&&(ne=n.RGB32I)),M===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),W===n.UNSIGNED_INT&&(ne=n.RGBA32UI),W===n.BYTE&&(ne=n.RGBA8I),W===n.SHORT&&(ne=n.RGBA16I),W===n.INT&&(ne=n.RGBA32I)),M===n.RGB&&(W===n.UNSIGNED_SHORT&&ge&&(ne=ge.RGB16_EXT),W===n.SHORT&&ge&&(ne=ge.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),M===n.RGBA){let re=pe?er:lt.getTransfer(ee);W===n.FLOAT&&(ne=n.RGBA32F),W===n.HALF_FLOAT&&(ne=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ne=re===_t?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&ge&&(ne=ge.RGBA16_EXT),W===n.SHORT&&ge&&(ne=ge.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(N,M){let W;return N?M===null||M===Dn||M===Rs?W=n.DEPTH24_STENCIL8:M===vn?W=n.DEPTH32F_STENCIL8:M===As&&(W=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Dn||M===Rs?W=n.DEPTH_COMPONENT24:M===vn?W=n.DEPTH_COMPONENT32F:M===As&&(W=n.DEPTH_COMPONENT16),W}function E(N,M){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==zt&&N.minFilter!==qt?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function I(N){let M=N.target;M.removeEventListener("dispose",I),w(M),M.isVideoTexture&&f.delete(M),M.isHTMLTexture&&u.delete(M)}function v(N){let M=N.target;M.removeEventListener("dispose",v),D(M)}function w(N){let M=i.get(N);if(M.__webglInit===void 0)return;let W=N.source,Z=p.get(W);if(Z){let ee=Z[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(N),Object.keys(Z).length===0&&p.delete(W)}i.remove(N)}function C(N){let M=i.get(N);n.deleteTexture(M.__webglTexture);let W=N.source,Z=p.get(W);delete Z[M.__cacheKey],o.memory.textures--}function D(N){let M=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ee=0;ee<M.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(M.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)n.deleteFramebuffer(M.__webglFramebuffer[Z]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=N.textures;for(let Z=0,ee=W.length;Z<ee;Z++){let pe=i.get(W[Z]);pe.__webglTexture&&(n.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(W[Z])}i.remove(N)}let T=0;function R(){T=0}function P(){return T}function F(N){T=N}function k(){let N=T;return N>=s.maxTextures&&He("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),T+=1,N}function V(N){let M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function te(N,M){let W=i.get(N);if(N.isVideoTexture&&O(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){let Z=N.image;if(Z===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{he(W,N,M);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+M)}function J(N,M){let W=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){he(W,N,M);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+M)}function Y(N,M){let W=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){he(W,N,M);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+M)}function K(N,M){let W=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){Ce(W,N,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+M)}let le={[Co]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[Po]:n.MIRRORED_REPEAT},me={[zt]:n.NEAREST,[cu]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},Ue={[fu]:n.NEVER,[xu]:n.ALWAYS,[pu]:n.LESS,[qa]:n.LEQUAL,[mu]:n.EQUAL,[Ya]:n.GEQUAL,[gu]:n.GREATER,[_u]:n.NOTEQUAL};function $e(N,M){if(M.type===vn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qt||M.magFilter===la||M.magFilter===Dr||M.magFilter===Mi||M.minFilter===qt||M.minFilter===la||M.minFilter===Dr||M.minFilter===Mi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,le[M.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,le[M.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,le[M.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,me[M.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zt||M.minFilter!==Dr&&M.minFilter!==Mi||M.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function oe(N,M){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",I));let Z=M.source,ee=p.get(Z);ee===void 0&&(ee={},p.set(Z,ee));let pe=V(M);if(pe!==N.__cacheKey){ee[pe]===void 0&&(ee[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ee[pe].usedTimes++;let ge=ee[N.__cacheKey];ge!==void 0&&(ee[N.__cacheKey].usedTimes--,ge.usedTimes===0&&C(M)),N.__cacheKey=pe,N.__webglTexture=ee[pe].texture}return W}function G(N,M,W){return Math.floor(Math.floor(N/W)/M)}function $(N,M,W,Z){let pe=N.updateRanges;if(pe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,W,Z,M.data);else{pe.sort((Oe,Me)=>Oe.start-Me.start);let ge=0;for(let Oe=1;Oe<pe.length;Oe++){let Me=pe[ge],ve=pe[Oe],Be=Me.start+Me.count,We=G(ve.start,M.width,4),nt=G(Me.start,M.width,4);ve.start<=Be+1&&We===nt&&G(ve.start+ve.count-1,M.width,4)===We?Me.count=Math.max(Me.count,ve.start+ve.count-Me.start):(++ge,pe[ge]=ve)}pe.length=ge+1;let ne=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),ye=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Oe=0,Me=pe.length;Oe<Me;Oe++){let ve=pe[Oe],Be=Math.floor(ve.start/4),We=Math.ceil(ve.count/4),nt=Be%M.width,H=Math.floor(Be/M.width),be=We,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,nt,H,be,ie,W,Z,M.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function he(N,M,W){let Z=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=n.TEXTURE_3D);let ee=oe(N,M),pe=M.source;t.bindTexture(Z,N.__webglTexture,n.TEXTURE0+W);let ge=i.get(pe);if(pe.version!==ge.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ie=lt.getPrimaries(lt.workingColorSpace),Se=M.colorSpace===ti?null:lt.getPrimaries(M.colorSpace),Ae=M.colorSpace===ti||ie===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment);let re=g(M.image,!1,s.maxTextureSize);re=pt(M,re);let ye=r.convert(M.format,M.colorSpace),Oe=r.convert(M.type),Me=y(M.internalFormat,ye,Oe,M.normalized,M.colorSpace,M.isVideoTexture);$e(Z,M);let ve,Be=M.mipmaps,We=M.isVideoTexture!==!0,nt=ge.__version===void 0||ee===!0,H=pe.dataReady,be=E(M,re);if(M.isDepthTexture)Me=S(M.format===Ei,M.type),nt&&(We?t.texStorage2D(n.TEXTURE_2D,1,Me,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,ye,Oe,null));else if(M.isDataTexture)if(Be.length>0){We&&nt&&t.texStorage2D(n.TEXTURE_2D,be,Me,Be[0].width,Be[0].height);for(let ie=0,Se=Be.length;ie<Se;ie++)ve=Be[ie],We?H&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,ye,Oe,ve.data):t.texImage2D(n.TEXTURE_2D,ie,Me,ve.width,ve.height,0,ye,Oe,ve.data);M.generateMipmaps=!1}else We?(nt&&t.texStorage2D(n.TEXTURE_2D,be,Me,re.width,re.height),H&&$(M,re,ye,Oe)):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,ye,Oe,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Me,Be[0].width,Be[0].height,re.depth);for(let ie=0,Se=Be.length;ie<Se;ie++)if(ve=Be[ie],M.format!==bn)if(ye!==null)if(We){if(H)if(M.layerUpdates.size>0){let Ae=bc(ve.width,ve.height,M.format,M.type);for(let ce of M.layerUpdates){let ke=ve.data.subarray(ce*Ae/ve.data.BYTES_PER_ELEMENT,(ce+1)*Ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,ce,ve.width,ve.height,1,ye,ke)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,re.depth,ye,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Me,ve.width,ve.height,re.depth,0,ve.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,re.depth,ye,Oe,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Me,ve.width,ve.height,re.depth,0,ye,Oe,ve.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{We&&nt&&t.texStorage2D(n.TEXTURE_2D,be,Me,Be[0].width,Be[0].height);for(let ie=0,Se=Be.length;ie<Se;ie++)ve=Be[ie],M.format!==bn?ye!==null?We?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Me,ve.width,ve.height,0,ve.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?H&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ve.width,ve.height,ye,Oe,ve.data):t.texImage2D(n.TEXTURE_2D,ie,Me,ve.width,ve.height,0,ye,Oe,ve.data)}else if(M.isDataArrayTexture)if(We){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,Me,re.width,re.height,re.depth),H)if(M.layerUpdates.size>0){let ie=bc(re.width,re.height,M.format,M.type);for(let Se of M.layerUpdates){let Ae=re.data.subarray(Se*ie/re.data.BYTES_PER_ELEMENT,(Se+1)*ie/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Se,re.width,re.height,1,ye,Oe,Ae)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,Oe,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,ye,Oe,re.data);else if(M.isData3DTexture)We?(nt&&t.texStorage3D(n.TEXTURE_3D,be,Me,re.width,re.height,re.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,Oe,re.data)):t.texImage3D(n.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,ye,Oe,re.data);else if(M.isFramebufferTexture){if(nt)if(We)t.texStorage2D(n.TEXTURE_2D,be,Me,re.width,re.height);else{let ie=re.width,Se=re.height;for(let Ae=0;Ae<be;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Me,ie,Se,0,ye,Oe,null),ie>>=1,Se>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in n){let ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),re.parentNode!==ie){ie.appendChild(re),u.add(M),ie.onpaint=Se=>{let Ae=Se.changedElements;for(let ce of u)Ae.includes(ce.image)&&(ce.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{let Ae=n.RGBA,ce=n.RGBA,ke=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ae,ce,ke,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Be.length>0){if(We&&nt){let ie=ot(Be[0]);t.texStorage2D(n.TEXTURE_2D,be,Me,ie.width,ie.height)}for(let ie=0,Se=Be.length;ie<Se;ie++)ve=Be[ie],We?H&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye,Oe,ve):t.texImage2D(n.TEXTURE_2D,ie,Me,ye,Oe,ve);M.generateMipmaps=!1}else if(We){if(nt){let ie=ot(re);t.texStorage2D(n.TEXTURE_2D,be,Me,ie.width,ie.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Oe,re)}else t.texImage2D(n.TEXTURE_2D,0,Me,ye,Oe,re);d(M)&&x(Z),ge.__version=pe.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Ce(N,M,W){if(M.image.length!==6)return;let Z=oe(N,M),ee=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+W);let pe=i.get(ee);if(ee.version!==pe.__version||Z===!0){t.activeTexture(n.TEXTURE0+W);let ge=lt.getPrimaries(lt.workingColorSpace),ne=M.colorSpace===ti?null:lt.getPrimaries(M.colorSpace),re=M.colorSpace===ti||ge===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ye=M.isCompressedTexture||M.image[0].isCompressedTexture,Oe=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!ye&&!Oe?Me[ce]=g(M.image[ce],!0,s.maxCubemapSize):Me[ce]=Oe?M.image[ce].image:M.image[ce],Me[ce]=pt(M,Me[ce]);let ve=Me[0],Be=r.convert(M.format,M.colorSpace),We=r.convert(M.type),nt=y(M.internalFormat,Be,We,M.normalized,M.colorSpace),H=M.isVideoTexture!==!0,be=pe.__version===void 0||Z===!0,ie=ee.dataReady,Se=E(M,ve);$e(n.TEXTURE_CUBE_MAP,M);let Ae;if(ye){H&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,nt,ve.width,ve.height);for(let ce=0;ce<6;ce++){Ae=Me[ce].mipmaps;for(let ke=0;ke<Ae.length;ke++){let Ne=Ae[ke];M.format!==bn?Be!==null?H?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,0,0,Ne.width,Ne.height,Be,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,nt,Ne.width,Ne.height,0,Ne.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,0,0,Ne.width,Ne.height,Be,We,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,nt,Ne.width,Ne.height,0,Be,We,Ne.data)}}}else{if(Ae=M.mipmaps,H&&be){Ae.length>0&&Se++;let ce=ot(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,nt,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Oe){H?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,Be,We,Me[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,nt,Me[ce].width,Me[ce].height,0,Be,We,Me[ce].data);for(let ke=0;ke<Ae.length;ke++){let bt=Ae[ke].image[ce].image;H?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,0,0,bt.width,bt.height,Be,We,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,nt,bt.width,bt.height,0,Be,We,bt.data)}}else{H?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Be,We,Me[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,nt,Be,We,Me[ce]);for(let ke=0;ke<Ae.length;ke++){let Ne=Ae[ke];H?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,0,0,Be,We,Ne.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,nt,Be,We,Ne.image[ce])}}}d(M)&&x(n.TEXTURE_CUBE_MAP),pe.__version=ee.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Re(N,M,W,Z,ee,pe){let ge=r.convert(W.format,W.colorSpace),ne=r.convert(W.type),re=y(W.internalFormat,ge,ne,W.normalized,W.colorSpace),ye=i.get(M),Oe=i.get(W);if(Oe.__renderTarget=M,!ye.__hasExternalTextures){let Me=Math.max(1,M.width>>pe),ve=Math.max(1,M.height>>pe);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,pe,re,Me,ve,M.depth,0,ge,ne,null):t.texImage2D(ee,pe,re,Me,ve,0,ge,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),et(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,Oe.__webglTexture,0,Je(M)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,Oe.__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(N,M,W){if(n.bindRenderbuffer(n.RENDERBUFFER,N),M.depthBuffer){let Z=M.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,pe=S(M.stencilBuffer,ee),ge=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;et(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je(M),pe,M.width,M.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je(M),pe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,pe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,N)}else{let Z=M.textures;for(let ee=0;ee<Z.length;ee++){let pe=Z[ee],ge=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),re=y(pe.internalFormat,ge,ne,pe.normalized,pe.colorSpace);et(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je(M),re,M.width,M.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je(M),re,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,re,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ze(N,M,W){let Z=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(M.depthTexture);if(ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),$e(n.TEXTURE_CUBE_MAP,M.depthTexture);let ye=r.convert(M.depthTexture.format),Oe=r.convert(M.depthTexture.type),Me;M.depthTexture.format===zn?Me=n.DEPTH_COMPONENT24:M.depthTexture.format===Ei&&(Me=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Me,M.width,M.height,0,ye,Oe,null)}}else te(M.depthTexture,0);let pe=ee.__webglTexture,ge=Je(M),ne=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,re=M.depthTexture.format===Ei?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===zn)et(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ne,pe,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,re,ne,pe,0);else if(M.depthTexture.format===Ei)et(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ne,pe,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,re,ne,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(N){let M=i.get(N),W=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){let Z=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){let ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Z}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let Z=0;Z<6;Z++)Ze(M.__webglFramebuffer[Z],N,Z);else{let Z=N.texture.mipmaps;Z&&Z.length>0?Ze(M.__webglFramebuffer[0],N,0):Ze(M.__webglFramebuffer,N,0)}else if(W){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ve(M.__webglDepthbuffer[Z],N,!1);else{let ee=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,pe)}}else{let Z=N.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ve(M.__webglDepthbuffer,N,!1);else{let ee=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,pe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,pe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(N,M,W){let Z=i.get(N);M!==void 0&&Re(Z.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&se(N)}function de(N){let M=N.texture,W=i.get(N),Z=i.get(M);N.addEventListener("dispose",v);let ee=N.textures,pe=N.isWebGLCubeRenderTarget===!0,ge=ee.length>1;if(ge||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=M.version,o.memory.textures++),pe){W.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[ne]=[];for(let re=0;re<M.mipmaps.length;re++)W.__webglFramebuffer[ne][re]=n.createFramebuffer()}else W.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)W.__webglFramebuffer[ne]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ge)for(let ne=0,re=ee.length;ne<re;ne++){let ye=i.get(ee[ne]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&et(N)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ne=0;ne<ee.length;ne++){let re=ee[ne];W.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ne]);let ye=r.convert(re.format,re.colorSpace),Oe=r.convert(re.type),Me=y(re.internalFormat,ye,Oe,re.normalized,re.colorSpace,N.isXRRenderTarget===!0),ve=Je(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,Me,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,W.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),$e(n.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)Re(W.__webglFramebuffer[ne][re],N,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else Re(W.__webglFramebuffer[ne],N,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(M)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ne=0,re=ee.length;ne<re;ne++){let ye=ee[ne],Oe=i.get(ye),Me=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Me=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,Oe.__webglTexture),$e(Me,ye),Re(W.__webglFramebuffer,N,ye,n.COLOR_ATTACHMENT0+ne,Me,0),d(ye)&&x(Me)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ne=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),$e(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)Re(W.__webglFramebuffer[re],N,M,n.COLOR_ATTACHMENT0,ne,re);else Re(W.__webglFramebuffer,N,M,n.COLOR_ATTACHMENT0,ne,0);d(M)&&x(ne),t.unbindTexture()}N.depthBuffer&&se(N)}function fe(N){let M=N.textures;for(let W=0,Z=M.length;W<Z;W++){let ee=M[W];if(d(ee)){let pe=b(N),ge=i.get(ee).__webglTexture;t.bindTexture(pe,ge),x(pe),t.unbindTexture()}}}let _e=[],Ge=[];function ze(N){if(N.samples>0){if(et(N)===!1){let M=N.textures,W=N.width,Z=N.height,ee=n.COLOR_BUFFER_BIT,pe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(N),ne=M.length>1;if(ne)for(let ye=0;ye<M.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let re=N.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);let Oe=i.get(M[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,W,Z,0,0,W,Z,ee,n.NEAREST),c===!0&&(_e.length=0,Ge.length=0,_e.push(n.COLOR_ATTACHMENT0+ye),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(_e.push(pe),Ge.push(pe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let ye=0;ye<M.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);let Oe=i.get(M[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&c){let M=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Je(N){return Math.min(s.maxSamples,N.samples)}function et(N){let M=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function O(N){let M=o.render.frame;f.get(N)!==M&&(f.set(N,M),N.update())}function pt(N,M){let W=N.colorSpace,Z=N.format,ee=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Qs&&W!==ti&&(lt.getTransfer(W)===_t?(Z!==bn||ee!==on)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",W)),M}function ot(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=R,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=te,this.setTexture2DArray=J,this.setTexture3D=Y,this.setTextureCube=K,this.rebindTextures=ue,this.setupRenderTarget=de,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function n_(n,e){function t(i,s=ti){let r,o=lt.getTransfer(s);if(i===on)return n.UNSIGNED_BYTE;if(i===ha)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ua)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lc)return n.BYTE;if(i===cc)return n.SHORT;if(i===As)return n.UNSIGNED_SHORT;if(i===ca)return n.INT;if(i===Dn)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===Ln)return n.HALF_FLOAT;if(i===dc)return n.ALPHA;if(i===fc)return n.RGB;if(i===bn)return n.RGBA;if(i===zn)return n.DEPTH_COMPONENT;if(i===Ei)return n.DEPTH_STENCIL;if(i===da)return n.RED;if(i===fa)return n.RED_INTEGER;if(i===wi)return n.RG;if(i===pa)return n.RG_INTEGER;if(i===ma)return n.RGBA_INTEGER;if(i===Lr||i===Nr||i===Ur||i===Fr)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ga||i===_a||i===xa||i===ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===va||i===ba||i===Sa||i===Ma||i===Ea||i===Or||i===wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===va||i===ba)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ma)return r.COMPRESSED_R11_EAC;if(i===Ea)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Or)return r.COMPRESSED_RG11_EAC;if(i===wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ta||i===Aa||i===Ra||i===Ca||i===Pa||i===Ia||i===Da||i===La||i===Na||i===Ua||i===Fa||i===Oa||i===Ba||i===ka)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ta)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Aa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ra)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ca)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ia)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Da)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===La)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Na)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ua)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ba)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ka)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===za||i===Ha||i===Va)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===za)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ga||i===Wa||i===Br||i===Xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var i_=`
void main() {

  gl_Position = vec4( position, 1.0 );

}`,s_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

  vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

  if ( coord.x >= 1.0 ) {

    gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

  } else {

    gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

  }

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new cr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new fn({vertexShader:i_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xe(new Vn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fc=class extends Rn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,f=null,u=null,h=null,p=null,m=null,_=typeof XRWebGLBinding<"u",g=new Uc,d={},x=t.getContextAttributes(),b=null,y=null,S=[],E=[],I=new ae,v=null,w=null,C=new Wt;C.viewport=new Rt;let D=new Wt;D.viewport=new Rt;let T=[C,D],R=new sa,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=S[G];return $===void 0&&($=new ms,S[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=S[G];return $===void 0&&($=new ms,S[G]=$),$.getGripSpace()},this.getHand=function(G){let $=S[G];return $===void 0&&($=new ms,S[G]=$),$.getHandSpace()};function k(G){let $=E.indexOf(G.inputSource);if($===-1)return;let he=S[$];he!==void 0&&(he.update(G.inputSource,G.frame,l||o),he.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",te);for(let G=0;G<S.length;G++){let $=E[G];$!==null&&(E[G]=null,S[G].disconnect($))}P=null,F=null,g.reset();for(let G in d)delete d[G];if(e.setRenderTarget(b),p=null,h=null,u=null,s=null,y=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(I.width,I.height,!1),w!==null){let G=w.camera;G.fov=w.fov,G.zoom=w.zoom,G.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ce=null,Re=null;x.depth&&(Re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=x.stencil?Ei:zn,Ce=x.stencil?Rs:Dn);let Ve={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Ve),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new sn(h.textureWidth,h.textureHeight,{format:bn,type:on,depthTexture:new pi(h.textureWidth,h.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let he={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new sn(p.framebufferWidth,p.framebufferHeight,{format:bn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(G){for(let $=0;$<G.removed.length;$++){let he=G.removed[$],Ce=E.indexOf(he);Ce>=0&&(E[Ce]=null,S[Ce].disconnect(he))}for(let $=0;$<G.added.length;$++){let he=G.added[$],Ce=E.indexOf(he);if(Ce===-1){for(let Ve=0;Ve<S.length;Ve++)if(Ve>=E.length){E.push(he),Ce=Ve;break}else if(E[Ve]===null){E[Ve]=he,Ce=Ve;break}if(Ce===-1)break}let Re=S[Ce];Re&&Re.connect(he)}}let J=new L,Y=new L;function K(G,$,he){J.setFromMatrixPosition($.matrixWorld),Y.setFromMatrixPosition(he.matrixWorld);let Ce=J.distanceTo(Y),Re=$.projectionMatrix.elements,Ve=he.projectionMatrix.elements,Ze=Re[14]/(Re[10]-1),se=Re[14]/(Re[10]+1),ue=(Re[9]+1)/Re[5],de=(Re[9]-1)/Re[5],fe=(Re[8]-1)/Re[0],_e=(Ve[8]+1)/Ve[0],Ge=Ze*fe,ze=Ze*_e,Je=Ce/(-fe+_e),et=Je*-fe;if($.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(et),G.translateZ(Je),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Re[10]===-1)G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let O=Ze+Je,pt=se+Je,ot=Ge-et,N=ze+(Ce-et),M=ue*se/pt*O,W=de*se/pt*O;G.projectionMatrix.makePerspective(ot,N,M,W,O,pt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function le(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let $=G.near,he=G.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(he=g.depthFar)),R.near=D.near=C.near=$,R.far=D.far=C.far=he,(P!==R.near||F!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),P=R.near,F=R.far),R.layers.mask=G.layers.mask|6,C.layers.mask=R.layers.mask&-5,D.layers.mask=R.layers.mask&-3;let Ce=G.parent,Re=R.cameras;le(R,Ce);for(let Ve=0;Ve<Re.length;Ve++)le(Re[Ve],Ce);Re.length===2?K(R,C,D):R.projectionMatrix.copy(C.projectionMatrix),w===null&&G.isPerspectiveCamera&&(w={camera:G,fov:G.fov,zoom:G.zoom}),me(G,R,Ce)};function me(G,$,he){he===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(he.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ds*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(G){return d[G]};let Ue=null;function $e(G,$){if(f=$.getViewerPose(l||o),m=$,f!==null){let he=f.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ce=!1;he.length!==R.cameras.length&&(R.cameras.length=0,Ce=!0);for(let se=0;se<he.length;se++){let ue=he[se],de=null;if(p!==null)de=p.getViewport(ue);else{let _e=u.getViewSubImage(h,ue);de=_e.viewport,se===0&&(e.setRenderTargetTextures(y,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(y))}let fe=T[se];fe===void 0&&(fe=new Wt,fe.layers.enable(se),fe.viewport=new Rt,T[se]=fe),fe.matrix.fromArray(ue.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ue.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(de.x,de.y,de.width,de.height),se===0&&(R.matrix.copy(fe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Ce===!0&&R.cameras.push(fe)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let se=u.getDepthInformation(he[0]);se&&se.isValid&&se.texture&&g.init(se,s.renderState)}if(Re&&Re.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let se=0;se<he.length;se++){let ue=he[se].camera;if(ue){let de=d[ue];de||(de=new cr,d[ue]=de);let fe=u.getCameraImage(ue);de.sourceTexture=fe}}}}for(let he=0;he<S.length;he++){let Ce=E[he],Re=S[he];Ce!==null&&Re!==void 0&&Re.update(Ce,$,l||o)}Ue&&Ue(G,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),m=null}let oe=new Qu;oe.setAnimationLoop($e),this.setAnimationLoop=function(G){Ue=G},this.dispose=function(){}}},r_=new dt,rd=new Qe;rd.set(-1,0,0,0,1,0,0,0,1);function o_(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,xc(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,x,b,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),_(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?c(g,d,x,b):d.isSpriteMaterial?l(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Yt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Yt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let x=e.get(d),b=x.envMap,y=x.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(r_.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(rd),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function c(g,d,x,b){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=b*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function l(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){let x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function a_(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let E=S.program;i.uniformBlockBinding(y,E)}function l(y,S){let E=s[y.id];E===void 0&&(g(y),E=f(y),s[y.id]=E,y.addEventListener("dispose",x));let I=S.program;i.updateUBOMapping(y,I);let v=e.render.frame;r[y.id]!==v&&(h(y),r[y.id]=v)}function f(y){let S=u();y.__bindingPointIndex=S;let E=n.createBuffer(),I=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=s[y.id],E=y.uniforms,I=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let v=0,w=E.length;v<w;v++){let C=E[v];if(Array.isArray(C))for(let D=0,T=C.length;D<T;D++)p(C[D],v,D,I);else p(C,v,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,S,E,I){if(_(y,S,E,I)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let C=0;for(let D=0;D<w.length;D++){let T=w[D],R=d(T);m(T,y.__data,C),typeof T!="number"&&typeof T!="boolean"&&!T.isMatrix3&&!ArrayBuffer.isView(T)&&(C+=R.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,y.__data)}}function m(y,S,E){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,E)}function _(y,S,E,I){let v=y.value,w=S+"_"+E;if(I[w]===void 0)return typeof v=="number"||typeof v=="boolean"?I[w]=v:ArrayBuffer.isView(v)?I[w]=v.slice():I[w]=v.clone(),!0;{let C=I[w];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return I[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function g(y){let S=y.uniforms,E=0,I=16;for(let w=0,C=S.length;w<C;w++){let D=Array.isArray(S[w])?S[w]:[S[w]];for(let T=0,R=D.length;T<R;T++){let P=D[T],F=Array.isArray(P.value)?P.value:[P.value];for(let k=0,V=F.length;k<V;k++){let te=F[k],J=d(te),Y=E%I,K=Y%J.boundary,le=Y+K;E+=K,le!==0&&I-le<J.storage&&(E+=I-le),P.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=J.storage}}}let v=E%I;return v>0&&(E+=I-v),y.__size=E,y.__cache={},this}function d(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):He("WebGLRenderer: Unsupported uniform value type.",y),S}function x(y){let S=y.target;S.removeEventListener("dispose",x);let E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function b(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:b}}var l_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function c_(){return Wn===null&&(Wn=new rr(l_,16,16,wi,Ln),Wn.name="DFG_LUT",Wn.minFilter=qt,Wn.magFilter=qt,Wn.wrapS=kn,Wn.wrapT=kn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var $a=class{constructor(e={}){let{canvas:t=vu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:p=on}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let _=p,g=new Set([ma,pa,fa]),d=new Set([on,Dn,As,Rs,ha,ua]),x=new Uint32Array(4),b=new Int32Array(4),y=new L,S=null,E=null,I=[],v=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,T=null,R=null,P=null,F=null;this._outputColorSpace=Gt;let k=0,V=0,te=null,J=-1,Y=null,K=new Rt,le=new Rt,me=null,Ue=new Ke(0),$e=0,oe=t.width,G=t.height,$=1,he=null,Ce=null,Re=new Rt(0,0,oe,G),Ve=new Rt(0,0,oe,G),Ze=!1,se=new _s,ue=!1,de=!1,fe=new dt,_e=new L,Ge=new Rt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function et(){return te===null?$:1}let O=i;function pt(A,z){return t.getContext(A,z)}let ot,N,M,W,Z,ee,pe,ge,ne,re,ye,Oe,Me,ve,Be,We,nt,H,be,ie,Se,Ae,ce;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),O===null){let z="webgl2";if(O=pt(z,A),O===null)throw pt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(A){throw t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),Xe("WebGLRenderer: "+A.message),A}function ke(){ot=new gg(O),ot.init(),Se=new n_(O,ot),N=new og(O,ot,e,Se),M=new e_(O,ot),N.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),R=O.createFramebuffer(),P=O.createFramebuffer(),F=O.createFramebuffer(),W=new yg(O),Z=new z1,ee=new t_(O,ot,M,Z,N,Se,W),pe=new mg(C),ge=new bp(O),Ae=new sg(O,ge),ne=new _g(O,ge,W,Ae),re=new bg(O,ne,ge,Ae,W),H=new vg(O,N,ee),Be=new ag(Z),ye=new k1(C,pe,ot,N,Ae,Be),Oe=new o_(C,Z),Me=new V1,ve=new Z1(ot),nt=new ig(C,pe,M,re,m,c),We=new Q1(C,re,N),ce=new a_(O,W,N,M),be=new rg(O,ot,W),ie=new xg(O,ot,W),W.programs=ye.programs,C.capabilities=N,C.extensions=ot,C.properties=Z,C.renderLists=Me,C.shadowMap=We,C.state=M,C.info=W}_!==on&&(w=new Mg(_,t.width,t.height,a,s,r));let Ne=new Fc(C,O);this.xr=Ne,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(oe,G,!1))},this.getSize=function(A){return A.set(oe,G)},this.setSize=function(A,z,j=!0){if(Ne.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=A,G=z,t.width=Math.floor(A*$),t.height=Math.floor(z*$),j===!0&&(t.style.width=A+"px",t.style.height=z+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(oe*$,G*$).floor()},this.setDrawingBufferSize=function(A,z,j){oe=A,G=z,$=j,t.width=Math.floor(A*j),t.height=Math.floor(z*j),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(_===on){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(Re)},this.setViewport=function(A,z,j,X){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,z,j,X),M.viewport(K.copy(Re).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Ve)},this.setScissor=function(A,z,j,X){A.isVector4?Ve.set(A.x,A.y,A.z,A.w):Ve.set(A,z,j,X),M.scissor(le.copy(Ve).multiplyScalar($).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(A){M.setScissorTest(Ze=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){Ce=A},this.getClearColor=function(A){return A.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,j=!0){let X=0;if(A){let q=!1;if(te!==null){let Te=te.texture.format;q=g.has(Te)}if(q){let Te=te.texture.type,Ie=d.has(Te),we=nt.getClearColor(),De=nt.getClearAlpha(),Fe=we.r,st=we.g,at=we.b;Ie?(x[0]=Fe,x[1]=st,x[2]=at,x[3]=De,O.clearBufferuiv(O.COLOR,0,x)):(b[0]=Fe,b[1]=st,b[2]=at,b[3]=De,O.clearBufferiv(O.COLOR,0,b))}else X|=O.COLOR_BUFFER_BIT}z&&(X|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),T=A},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),nt.dispose(),Me.dispose(),ve.dispose(),Z.dispose(),pe.dispose(),re.dispose(),Ae.dispose(),ce.dispose(),ye.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Jc),Ne.removeEventListener("sessionend",Kc),Ti.stop()};function bt(A){A.preventDefault(),mc("WebGLRenderer: Context Lost."),D=!0}function mt(){mc("WebGLRenderer: Context Restored."),D=!1;let A=W.autoReset,z=We.enabled,j=We.autoUpdate,X=We.needsUpdate,q=We.type;ke(),W.autoReset=A,We.enabled=z,We.autoUpdate=j,We.needsUpdate=X,We.type=q}function Mn(A){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Fn(A){let z=A.target;z.removeEventListener("dispose",Fn),Pd(z)}function Pd(A){Id(A),Z.remove(A)}function Id(A){let z=Z.get(A).programs;z!==void 0&&(z.forEach(function(j){ye.releaseProgram(j)}),A.isShaderMaterial&&ye.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,j,X,q,Te){z===null&&(z=ze);let Ie=q.isMesh&&q.matrixWorld.determinantAffine()<0,we=Nd(A,z,j,X,q);M.setMaterial(X,Ie);let De=j.index,Fe=1;if(X.wireframe===!0){if(De=ne.getWireframeAttribute(j),De===void 0)return;Fe=2}let st=j.drawRange,at=j.attributes.position,Le=st.start*Fe,gt=(st.start+st.count)*Fe;Te!==null&&(Le=Math.max(Le,Te.start*Fe),gt=Math.min(gt,(Te.start+Te.count)*Fe)),De!==null?(Le=Math.max(Le,0),gt=Math.min(gt,De.count)):at!=null&&(Le=Math.max(Le,0),gt=Math.min(gt,at.count));let Lt=gt-Le;if(Lt<0||Lt===1/0)return;Ae.setup(q,X,we,j,De);let wt,vt=be;if(De!==null&&(wt=ge.get(De),vt=ie,vt.setIndex(wt)),q.isMesh)X.wireframe===!0?(M.setLineWidth(X.wireframeLinewidth*et()),vt.setMode(O.LINES)):vt.setMode(O.TRIANGLES);else if(q.isLine){let Zt=X.linewidth;Zt===void 0&&(Zt=1),M.setLineWidth(Zt*et()),q.isLineSegments?vt.setMode(O.LINES):q.isLineLoop?vt.setMode(O.LINE_LOOP):vt.setMode(O.LINE_STRIP)}else q.isPoints?vt.setMode(O.POINTS):q.isSprite&&vt.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))vt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Zt=q._multiDrawStarts,Pe=q._multiDrawCounts,Qt=q._multiDrawCount,ht=De?ge.get(De).bytesPerElement:1,mn=Z.get(X).currentProgram.getUniforms();for(let On=0;On<Qt;On++)mn.setValue(O,"_gl_DrawID",On),vt.render(Zt[On]/ht,Pe[On])}else if(q.isInstancedMesh)vt.renderInstances(Le,Lt,q.count);else if(j.isInstancedBufferGeometry){let Zt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Pe=Math.min(j.instanceCount,Zt);vt.renderInstances(Le,Lt,Pe)}else vt.render(Le,Lt)};function Zc(A,z,j,X){T!==null&&A.isNodeMaterial&&T.setObject(X,A),ue===!0&&Be.setState(A,j,!1),A.transparent===!0&&A.side===At&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,Yr(A,z,X),A.side=bi,A.needsUpdate=!0,Yr(A,z,X),A.side=At):Yr(A,z,X)}this.compile=function(A,z,j=null){j===null&&(j=A),T!==null&&T.renderStart(A,z,j),E=ve.get(j),E.init(z),v.push(E),j.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),A!==j&&A.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),T!==null&&T.updateLights(E.state.lightsArray),de=this.localClippingEnabled,ue=Be.init(this.clippingPlanes,de),ue===!0&&Be.setGlobalState(this.clippingPlanes,z),T!==null&&We.render(E.state.shadowsArray,j,z);let X=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Te=q.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){let we=Te[Ie];Zc(we,j,z,q),X.add(we)}else Zc(Te,j,z,q),X.add(Te)}),E=v.pop(),T!==null&&T.renderEnd(),X},this.compileAsync=function(A,z,j=null){let X=this.compile(A,z,j);return new Promise(q=>{function Te(){if(X.forEach(function(Ie){let De=Z.get(Ie).currentProgram;(De===void 0||De.isReady())&&X.delete(Ie)}),X.size===0){q(A);return}setTimeout(Te,10)}ot.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let cl=null;function Dd(A){cl&&cl(A)}function Jc(){Ti.stop()}function Kc(){Ti.start()}let Ti=new Qu;Ti.setAnimationLoop(Dd),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){cl=A,Ne.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},Ne.addEventListener("sessionstart",Jc),Ne.addEventListener("sessionend",Kc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;T!==null&&T.renderStart(A,z);let j=Ne.enabled===!0&&Ne.isPresenting===!0,X=w!==null&&(te===null||j)&&w.begin(C,te);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(z),z=Ne.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,z,te),E=ve.get(A,v.length),E.init(z),E.state.textureUnits=ee.getTextureUnits(),v.push(E),fe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(fe,An,z.reversedDepth),de=this.localClippingEnabled,ue=Be.init(this.clippingPlanes,de),S=Me.get(A,I.length),S.init(),I.push(S),Ne.enabled===!0&&Ne.isPresenting===!0){let Ie=C.xr.getDepthSensingMesh();Ie!==null&&hl(Ie,z,-1/0,C.sortObjects)}hl(A,z,0,C.sortObjects),S.finish(),T!==null&&T.updateLights(E.state.lightsArray),C.sortObjects===!0&&S.sort(he,Ce),Je=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Je&&nt.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&Be.beginShadows();let q=E.state.shadowsArray;if(We.render(q,A,z),ue===!0&&Be.endShadows(),(X&&w.hasRenderPass())===!1){let Ie=S.opaque,we=S.transmissive;if(E.setupLights(),z.isArrayCamera){let De=z.cameras;if(we.length>0)for(let Fe=0,st=De.length;Fe<st;Fe++){let at=De[Fe];jc(Ie,we,A,at)}Je&&nt.render(A);for(let Fe=0,st=De.length;Fe<st;Fe++){let at=De[Fe];$c(S,A,at,at.viewport)}}else we.length>0&&jc(Ie,we,A,z),Je&&nt.render(A),$c(S,A,z)}te!==null&&V===0&&(ee.updateMultisampleRenderTarget(te),ee.updateRenderTargetMipmap(te)),X&&w.end(C),A.isScene===!0&&A.onAfterRender(C,A,z),Ae.resetDefaultState(),J=-1,Y=null,v.pop(),v.length>0?(E=v[v.length-1],ee.setTextureUnits(E.state.textureUnits),ue===!0&&Be.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,I.pop(),I.length>0?S=I[I.length-1]:S=null,T!==null&&T.renderEnd()};function hl(A,z,j,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(se)){X&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);let Ie=re.update(A),we=A.material;we.visible&&S.push(A,Ie,we,j,Ge.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(se))){let Ie=re.update(A),we=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ge.copy(Ie.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(we)){let De=Ie.groups;for(let Fe=0,st=De.length;Fe<st;Fe++){let at=De[Fe],Le=we[at.materialIndex];Le&&Le.visible&&S.push(A,Ie,Le,j,Ge.z,at,z)}}else we.visible&&S.push(A,Ie,we,j,Ge.z,null,z)}}let Te=A.children;for(let Ie=0,we=Te.length;Ie<we;Ie++)hl(Te[Ie],z,j,X)}function $c(A,z,j,X){let{opaque:q,transmissive:Te,transparent:Ie}=A;E.setupLightsView(j),ue===!0&&Be.setGlobalState(C.clippingPlanes,j),X&&M.viewport(K.copy(X)),q.length>0&&qr(q,z,j),Te.length>0&&qr(Te,z,j),Ie.length>0&&qr(Ie,z,j),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function jc(A,z,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Le=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new sn(1,1,{generateMipmaps:!0,type:Le?Ln:on,minFilter:Mi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Te=E.state.transmissionRenderTarget[X.id],Ie=X.viewport||K;Te.setSize(Ie.z*C.transmissionResolutionScale,Ie.w*C.transmissionResolutionScale);let we=C.getRenderTarget(),De=C.getActiveCubeFace(),Fe=C.getActiveMipmapLevel();C.setRenderTarget(Te),C.getClearColor(Ue),$e=C.getClearAlpha(),$e<1&&C.setClearColor(16777215,.5),C.clear(),Je&&nt.render(j);let st=C.toneMapping;C.toneMapping=In;let at=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),ue===!0&&Be.setGlobalState(C.clippingPlanes,X),qr(A,j,X),ee.updateMultisampleRenderTarget(Te),ee.updateRenderTargetMipmap(Te),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let gt=0,Lt=z.length;gt<Lt;gt++){let wt=z[gt],{object:vt,geometry:Zt,material:Pe,group:Qt}=wt;if(Pe.side===At&&vt.layers.test(X.layers)){let ht=Pe.side;Pe.side=Yt,Pe.needsUpdate=!0,Qc(vt,j,X,Zt,Pe,Qt),Pe.side=ht,Pe.needsUpdate=!0,Le=!0}}Le===!0&&(ee.updateMultisampleRenderTarget(Te),ee.updateRenderTargetMipmap(Te))}C.setRenderTarget(we,De,Fe),C.setClearColor(Ue,$e),at!==void 0&&(X.viewport=at),C.toneMapping=st}function qr(A,z,j){let X=z.isScene===!0?z.overrideMaterial:null;for(let q=0,Te=A.length;q<Te;q++){let Ie=A[q],{object:we,geometry:De,group:Fe}=Ie,st=Ie.material;st.allowOverride===!0&&X!==null&&(st=X),we.layers.test(j.layers)&&Qc(we,z,j,De,st,Fe)}}function Qc(A,z,j,X,q,Te){T!==null&&q.isNodeMaterial&&T.setObject(A,q),A.onBeforeRender(C,z,j,X,q,Te),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,z,j,X,A,Te),q.transparent===!0&&q.side===At&&q.forceSinglePass===!1?(q.side=Yt,q.needsUpdate=!0,C.renderBufferDirect(j,z,X,q,A,Te),q.side=bi,q.needsUpdate=!0,C.renderBufferDirect(j,z,X,q,A,Te),q.side=At):C.renderBufferDirect(j,z,X,q,A,Te),A.onAfterRender(C,z,j,X,q,Te)}function Yr(A,z,j){z.isScene!==!0&&(z=ze);let X=Z.get(A),q=E.state.lights,Te=E.state.shadowsArray,Ie=q.state.version,we=ye.getParameters(A,q.state,Te,z,j,E.state.lightProbeGridArray),De=ye.getProgramCacheKey(we),Fe=X.programs;X.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;let st=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;X.envMap=pe.get(A.envMap||X.environment,st),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",Fn),Fe=new Map,X.programs=Fe);let at=Fe.get(De);if(at!==void 0){if(X.currentProgram===at&&X.lightsStateVersion===Ie)return th(A,we),at}else we.uniforms=ye.getUniforms(A),T!==null&&A.isNodeMaterial&&T.build(A,j,we),A.onBeforeCompile(we,C),at=ye.acquireProgram(we,De),Fe.set(De,at),X.uniforms=we.uniforms;let Le=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=Be.uniform),th(A,we),X.needsLights=Fd(A),X.lightsStateVersion=Ie,X.needsLights&&(Le.ambientLightColor.value=q.state.ambient,Le.lightProbe.value=q.state.probe,Le.sunLights.value=q.state.sun,Le.sunLightShadows.value=q.state.sunShadow,Le.directionalLights.value=q.state.directional,Le.directionalLightShadows.value=q.state.directionalShadow,Le.spotLights.value=q.state.spot,Le.spotLightShadows.value=q.state.spotShadow,Le.rectAreaLights.value=q.state.rectArea,Le.ltc_1.value=q.state.rectAreaLTC1,Le.ltc_2.value=q.state.rectAreaLTC2,Le.pointLights.value=q.state.point,Le.pointLightShadows.value=q.state.pointShadow,Le.hemisphereLights.value=q.state.hemi,Le.sunShadowMatrix.value=q.state.sunShadowMatrix,Le.sunShadowCascade.value=q.state.sunShadowCascade,Le.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Le.spotLightMatrix.value=q.state.spotLightMatrix,Le.spotLightMap.value=q.state.spotLightMap,Le.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=at,X.uniformsList=null,at}function eh(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Ds.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function th(A,z){let j=Z.get(A);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Ld(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(z.matrixWorld);for(let j=0,X=A.length;j<X;j++){let q=A[j];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function Nd(A,z,j,X,q){z.isScene!==!0&&(z=ze),ee.resetTextureUnits();let Te=z.fog,Ie=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,we=te===null?C.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:lt.workingColorSpace,De=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Fe=pe.get(X.envMap||Ie,De),st=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,at=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!j.morphAttributes.position,gt=!!j.morphAttributes.normal,Lt=!!j.morphAttributes.color,wt=In;X.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(wt=C.toneMapping);let vt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Zt=vt!==void 0?vt.length:0,Pe=Z.get(X),Qt=E.state.lights;if(ue===!0&&(de===!0||A!==Y)){let St=A===Y&&X.id===J;Be.setState(X,A,St)}let ht=!1;X.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Qt.state.version||Pe.outputColorSpace!==we||q.isBatchedMesh&&Pe.batching===!1||!q.isBatchedMesh&&Pe.batching===!0||q.isBatchedMesh&&Pe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Pe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Pe.instancing===!1||!q.isInstancedMesh&&Pe.instancing===!0||q.isSkinnedMesh&&Pe.skinning===!1||!q.isSkinnedMesh&&Pe.skinning===!0||q.isInstancedMesh&&Pe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Pe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Pe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Pe.instancingMorph===!1&&q.morphTexture!==null||Pe.envMap!==Fe||X.fog===!0&&Pe.fog!==Te||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Be.numPlanes||Pe.numIntersection!==Be.numIntersection)||Pe.vertexAlphas!==st||Pe.vertexTangents!==at||Pe.morphTargets!==Le||Pe.morphNormals!==gt||Pe.morphColors!==Lt||Pe.toneMapping!==wt||Pe.morphTargetsCount!==Zt||!!Pe.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Pe.__version=X.version);let mn=Pe.currentProgram;ht===!0&&(mn=Yr(X,z,q),T&&X.isNodeMaterial&&T.onUpdateProgram(X,mn,Pe));let On=!1,ii=!1,Xi=!1,yt=mn.getUniforms(),Pt=Pe.uniforms;if(M.useProgram(mn.program)&&(On=!0,ii=!0,Xi=!0),X.id!==J&&(J=X.id,ii=!0),Pe.needsLights){let St=Ld(E.state.lightProbeGridArray,q);Pe.lightProbeGrid!==St&&(Pe.lightProbeGrid=St,ii=!0)}if(On||Y!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),yt.setValue(O,"projectionMatrix",A.projectionMatrix),yt.setValue(O,"viewMatrix",A.matrixWorldInverse);let ri=yt.map.cameraPosition;ri!==void 0&&ri.setValue(O,_e.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&yt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&yt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,ii=!0,Xi=!0)}if(Pe.needsLights&&(Qt.state.sunShadowMap.length>0&&yt.setValue(O,"sunShadowMap",Qt.state.sunShadowMap,ee),Qt.state.directionalShadowMap.length>0&&yt.setValue(O,"directionalShadowMap",Qt.state.directionalShadowMap,ee),Qt.state.spotShadowMap.length>0&&yt.setValue(O,"spotShadowMap",Qt.state.spotShadowMap,ee),Qt.state.pointShadowMap.length>0&&yt.setValue(O,"pointShadowMap",Qt.state.pointShadowMap,ee)),q.isSkinnedMesh){yt.setOptional(O,q,"bindMatrix"),yt.setOptional(O,q,"bindMatrixInverse");let St=q.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),yt.setValue(O,"boneTexture",St.boneTexture,ee))}q.isBatchedMesh&&(yt.setOptional(O,q,"batchingTexture"),yt.setValue(O,"batchingTexture",q._matricesTexture,ee),yt.setOptional(O,q,"batchingIdTexture"),yt.setValue(O,"batchingIdTexture",q._indirectTexture,ee),yt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&yt.setValue(O,"batchingColorTexture",q._colorsTexture,ee));let si=j.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&H.update(q,j,mn),(ii||Pe.receiveShadow!==q.receiveShadow)&&(Pe.receiveShadow=q.receiveShadow,yt.setValue(O,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(Pt.envMapIntensity.value=z.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=c_()),ii){if(yt.setValue(O,"toneMappingExposure",C.toneMappingExposure),Pe.needsLights&&Ud(Pt,Xi),Te&&X.fog===!0&&Oe.refreshFogUniforms(Pt,Te),Oe.refreshMaterialUniforms(Pt,X,$,G,E.state.transmissionRenderTarget[A.id]),Pe.needsLights&&Pe.lightProbeGrid){let St=Pe.lightProbeGrid;Pt.probesSH.value=St.texture,Pt.probesMin.value.copy(St.boundingBox.min),Pt.probesMax.value.copy(St.boundingBox.max),Pt.probesResolution.value.copy(St.resolution)}Ds.upload(O,eh(Pe),Pt,ee)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ds.upload(O,eh(Pe),Pt,ee),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&yt.setValue(O,"center",q.center),yt.setValue(O,"modelViewMatrix",q.modelViewMatrix),yt.setValue(O,"normalMatrix",q.normalMatrix),yt.setValue(O,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let St=X.uniformsGroups;for(let ri=0,qi=St.length;ri<qi;ri++){let ih=St[ri];ce.update(ih,mn),ce.bind(ih,mn)}}return mn}function Ud(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Fd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(A,z,j){let X=Z.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Z.get(A.texture).__webglTexture=z,Z.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:j,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let j=Z.get(A);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,j=0){te=A,k=z,V=j;let X=null,q=!1,Te=!1;if(A){let we=Z.get(A);if(we.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(O.FRAMEBUFFER,we.__webglFramebuffer),K.copy(A.viewport),le.copy(A.scissor),me=A.scissorTest,M.viewport(K),M.scissor(le),M.setScissorTest(me),J=-1;return}else if(we.__webglFramebuffer===void 0)ee.setupRenderTarget(A);else if(we.__hasExternalTextures)ee.rebindTextures(A,Z.get(A.texture).__webglTexture,Z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let st=A.depthTexture;if(we.__boundDepthTexture!==st){if(st!==null&&Z.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(A)}}let De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Te=!0);let Fe=Z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?X=Fe[z][j]:X=Fe[z],q=!0):A.samples>0&&ee.useMultisampledRTT(A)===!1?X=Z.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?X=Fe[j]:X=Fe,K.copy(A.viewport),le.copy(A.scissor),me=A.scissorTest}else K.copy(Re).multiplyScalar($).floor(),le.copy(Ve).multiplyScalar($).floor(),me=Ze;if(j!==0&&(X=R),M.bindFramebuffer(O.FRAMEBUFFER,X)&&M.drawBuffers(A,X),M.viewport(K),M.scissor(le),M.setScissorTest(me),q){let we=Z.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,j)}else if(Te){let we=z;for(let De=0;De<A.textures.length;De++){let Fe=Z.get(A.textures[De]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+De,Fe.__webglTexture,j,we)}}else if(A!==null&&j!==0){let we=Z.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,we.__webglTexture,j)}J=-1};function nh(A){let z=Z.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=N.textureFormatReadable(A.format),z.__typeReadable=N.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,j,X,q,Te,Ie,we=0){if(!(A&&A.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De){M.bindFramebuffer(O.FRAMEBUFFER,De);try{let Fe=A.textures[we],st=Fe.format,at=Fe.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+we);let Le=nh(Fe);if(Le.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&j>=0&&j<=A.height-q&&O.readPixels(z,j,X,q,Se.convert(st),Se.convert(at),Te)}finally{let Fe=te!==null?Z.get(te).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,z,j,X,q,Te,Ie,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De)if(z>=0&&z<=A.width-X&&j>=0&&j<=A.height-q){M.bindFramebuffer(O.FRAMEBUFFER,De);let Fe=A.textures[we],st=Fe.format,at=Fe.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+we);let Le=nh(Fe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.bufferData(O.PIXEL_PACK_BUFFER,Te.byteLength,O.STREAM_READ),O.readPixels(z,j,X,q,Se.convert(st),Se.convert(at),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Lt=te!==null?Z.get(te).__webglFramebuffer:null;M.bindFramebuffer(O.FRAMEBUFFER,Lt);let wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Su(O,wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,gt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Te),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(gt),O.deleteSync(wt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,j=0){let X=Math.pow(2,-j),q=Math.floor(A.image.width*X),Te=Math.floor(A.image.height*X),Ie=z!==null?z.x:0,we=z!==null?z.y:0;ee.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,j,0,0,Ie,we,q,Te),M.unbindTexture()},this.copyTextureToTexture=function(A,z,j=null,X=null,q=0,Te=0){let Ie,we,De,Fe,st,at,Le,gt,Lt,wt=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(j!==null)Ie=j.max.x-j.min.x,we=j.max.y-j.min.y,De=j.isBox3?j.max.z-j.min.z:1,Fe=j.min.x,st=j.min.y,at=j.isBox3?j.min.z:0;else{let Pt=Math.pow(2,-q);Ie=Math.floor(wt.width*Pt),we=Math.floor(wt.height*Pt),A.isDataArrayTexture?De=wt.depth:A.isData3DTexture?De=Math.floor(wt.depth*Pt):De=1,Fe=0,st=0,at=0}X!==null?(Le=X.x,gt=X.y,Lt=X.z):(Le=0,gt=0,Lt=0);let vt=Se.convert(z.format),Zt=Se.convert(z.type),Pe;z.isData3DTexture?(ee.setTexture3D(z,0),Pe=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ee.setTexture2DArray(z,0),Pe=O.TEXTURE_2D_ARRAY):(ee.setTexture2D(z,0),Pe=O.TEXTURE_2D),M.activeTexture(O.TEXTURE0),M.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),M.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),M.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let Qt=M.getParameter(O.UNPACK_ROW_LENGTH),ht=M.getParameter(O.UNPACK_IMAGE_HEIGHT),mn=M.getParameter(O.UNPACK_SKIP_PIXELS),On=M.getParameter(O.UNPACK_SKIP_ROWS),ii=M.getParameter(O.UNPACK_SKIP_IMAGES);M.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),M.pixelStorei(O.UNPACK_SKIP_PIXELS,Fe),M.pixelStorei(O.UNPACK_SKIP_ROWS,st),M.pixelStorei(O.UNPACK_SKIP_IMAGES,at);let Xi=A.isDataArrayTexture||A.isData3DTexture,yt=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let Pt=Z.get(A),si=Z.get(z),St=Z.get(Pt.__renderTarget),ri=Z.get(si.__renderTarget);M.bindFramebuffer(O.READ_FRAMEBUFFER,St.__webglFramebuffer),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let qi=0;qi<De;qi++)Xi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(A).__webglTexture,q,at+qi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(z).__webglTexture,Te,Lt+qi)),O.blitFramebuffer(Fe,st,Ie,we,Le,gt,Ie,we,O.DEPTH_BUFFER_BIT,O.NEAREST);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Z.has(A)){let Pt=Z.get(A),si=Z.get(z);M.bindFramebuffer(O.READ_FRAMEBUFFER,P),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let St=0;St<De;St++)Xi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.__webglTexture,q,at+St):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pt.__webglTexture,q),yt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,si.__webglTexture,Te,Lt+St):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,si.__webglTexture,Te),q!==0?O.blitFramebuffer(Fe,st,Ie,we,Le,gt,Ie,we,O.COLOR_BUFFER_BIT,O.NEAREST):yt?O.copyTexSubImage3D(Pe,Te,Le,gt,Lt+St,Fe,st,Ie,we):O.copyTexSubImage2D(Pe,Te,Le,gt,Fe,st,Ie,we);M.bindFramebuffer(O.READ_FRAMEBUFFER,null),M.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else yt?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Pe,Te,Le,gt,Lt,Ie,we,De,vt,Zt,wt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Pe,Te,Le,gt,Lt,Ie,we,De,vt,wt.data):O.texSubImage3D(Pe,Te,Le,gt,Lt,Ie,we,De,vt,Zt,wt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Te,Le,gt,Ie,we,vt,Zt,wt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Te,Le,gt,wt.width,wt.height,vt,wt.data):O.texSubImage2D(O.TEXTURE_2D,Te,Le,gt,Ie,we,vt,Zt,wt);M.pixelStorei(O.UNPACK_ROW_LENGTH,Qt),M.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht),M.pixelStorei(O.UNPACK_SKIP_PIXELS,mn),M.pixelStorei(O.UNPACK_SKIP_ROWS,On),M.pixelStorei(O.UNPACK_SKIP_IMAGES,ii),Te===0&&z.generateMipmaps&&O.generateMipmap(Pe),M.unbindTexture()},this.initRenderTarget=function(A){Z.get(A).__webglFramebuffer===void 0&&ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){k=0,V=0,te=null,M.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var el=class extends Hn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new rn;e.deleteAttribute("uv");let t=new Pn({side:Yt}),i=new Pn,s=new Tr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new xe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new or(e,i,6),a=new Ut;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new xe(e,Us(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new xe(e,Us(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let f=new xe(e,Us(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let u=new xe(e,Us(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let h=new xe(e,Us(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let p=new xe(e,Us(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Us(n){return new Ui({color:0,emissive:16777215,emissiveIntensity:n})}var od={type:"change"},Bc={type:"start"},ld={type:"end"},tl=new di,ad=new un,h_=Math.cos(70*Cs.DEG2RAD),Bt=new L,an=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oc=1e-6,nl=class extends Cr{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new tn,this._lastTargetPosition=new L,this._quat=new tn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Es,this._sphericalDelta=new Es,this._scale=1,this._panOffset=new L,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new L,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=d_.bind(this),this._onPointerDown=u_.bind(this),this._onPointerUp=f_.bind(this),this._onContextMenu=v_.bind(this),this._onMouseWheel=g_.bind(this),this._onKeyDown=__.bind(this),this._onTouchStart=x_.bind(this),this._onTouchMove=y_.bind(this),this._onMouseDown=p_.bind(this),this._onMouseMove=m_.bind(this),this._interceptControlDown=b_.bind(this),this._interceptControlUp=S_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(od),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Bt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(tl.origin.copy(this.object.position),tl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(tl.direction))<h_?this.object.lookAt(this.target):(ad.setFromNormalAndCoplanarPoint(this.object.up,this.target),tl.intersectPlane(ad,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Oc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oc||this._lastTargetPosition.distanceToSquared(this.target)>Oc?(this.dispatchEvent(od),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Bt.copy(s).sub(this.target);let r=Bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function u_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function d_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function f_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ld),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function p_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case yi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case yi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Bc)}function m_(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function g_(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(Bc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ld))}function __(n){this.enabled!==!1&&this._handleKeyDown(n)}function x_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Bc)}function y_(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function v_(n){this.enabled!==!1&&n.preventDefault()}function b_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function S_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gr=new L;function Sn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Gr.copy(e),Gr[i]=0,Gr.normalize();let l=.5*o/(o+a),f=1-Gr.angleTo(n)/c;return Math.sign(Gr[t])===1?f*l:a/(o+a)+l+l*(1-f)}var jt=class n extends rn{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new L,l=new L,f=new L(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,m=u.length/6,_=new L,g=.5/o;for(let d=0,x=0;d<u.length;d+=3,x+=2)switch(c.fromArray(u,d),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[d+0]=f.x*Math.sign(c.x)+l.x*r,u[d+1]=f.y*Math.sign(c.y)+l.y*r,u[d+2]=f.z*Math.sign(c.z)+l.z*r,h[d+0]=l.x,h[d+1]=l.y,h[d+2]=l.z,Math.floor(d/m)){case 0:_.set(1,0,0),p[x+0]=Sn(_,l,"z","y",r,i),p[x+1]=1-Sn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),p[x+0]=1-Sn(_,l,"z","y",r,i),p[x+1]=1-Sn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),p[x+0]=1-Sn(_,l,"x","z",r,e),p[x+1]=Sn(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),p[x+0]=1-Sn(_,l,"x","z",r,e),p[x+1]=1-Sn(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),p[x+0]=1-Sn(_,l,"x","y",r,e),p[x+1]=1-Sn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),p[x+0]=Sn(_,l,"x","y",r,e),p[x+1]=1-Sn(_,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function cd(n=!1){let e=(t,i=.7,s=0)=>n?new Ui({color:t}):new Pn({color:t,roughness:i,metalness:s});return{paint:e("#60654b",.74,.25),edge:e("#464b37",.78,.3),steel:e("#8b9290",.32,.85),darkSteel:e("#3b4140",.5,.75),rubber:e("#242726",.95),glass:e("#233e45",.19,.45),amber:e("#ca852b",.3),lamp:e("#dce1d2",.23),red:e("#9d3026",.4)}}function il(n,e,t,i=[0,0,0],s=""){let r=new xe(e,t);return r.position.set(...i),r.name=s,r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}function U(n,e,t,i,s=""){return il(n,new rn(...t),e,i,s)}function B(n,e,t,i,s,r="y",o=t,a=20){let c=il(n,new Li(o,t,i,a),e,s);return r==="x"&&(c.rotation.z=Math.PI/2),r==="z"&&(c.rotation.x=Math.PI/2),c}function Q(n,e,t,i,s=.018){let r=new L(...t),o=new L(...i),a=o.clone().sub(r),c=B(n,e,s,a.length(),r.clone().add(o).multiplyScalar(.5).toArray());return c.quaternion.setFromUnitVectors(new L(0,1,0),a.normalize()),c}function qe(n,e,t,i=.018,s=40){let r=new vs(t.map(o=>new L(...o)));return il(n,new vr(r,s,i,8,!1),e)}function Fs(n,e,t){let i=new ft,s=[];for(let o=1;o<t.length-1;o++)s.push(...t[0],...t[o],...t[o+1]);i.setAttribute("position",new je(s,3)),i.computeVertexNormals();let r=e.clone();return r.side=At,il(n,i,r)}function ni(n,e,t,i,s=8,r="z",o=.014){for(let a=0;a<s;a++){let c=a/s*Math.PI*2,l=[...t];r==="z"?(l[0]+=Math.cos(c)*i,l[1]+=Math.sin(c)*i):(l[1]+=Math.cos(c)*i,l[2]+=Math.sin(c)*i),B(n,e,o,o*1.3,l,r,o,6)}}function Wr(n=cd()){let e=new ut;e.name="WR-12 hydraulic recovery winch",e.userData={units:"metres",concept:!0,sharedPart:"WR-12",ratedLoad:"unspecified illustrative model"},U(e,n.edge,[1.12,.085,.56],[0,.0425,0],"mounting skid");for(let s of[-.42,.42])for(let r of[-.2,.2])B(e,n.steel,.023,.022,[s,.097,r],"y",.023,6);for(let s of[-.42,.42])U(e,n.paint,[.1,.44,.4],[s,.29,0],"bearing pedestal"),B(e,n.paint,.225,.065,[s,.34,0],"x"),ni(e,n.steel,[s+(s>0?.04:-.04),.34,0],.176,8,"x");B(e,n.darkSteel,.14,.71,[0,.34,0],"x");for(let s of[-.34,.34])B(e,n.steel,.212,.025,[s,.34,0],"x");let t=[];for(let s=0;s<=720;s++){let r=s/720,o=r*Math.PI*2*36;t.push([-.326+r*.652,.34+Math.cos(o)*.172,Math.sin(o)*.172])}qe(e,n.steel,t,.0075,900),B(e,n.paint,.12,.24,[-.59,.34,0],"x"),B(e,n.darkSteel,.079,.15,[-.75,.34,0],"x");for(let s of[.205,.445])Q(e,n.steel,[-.45,s,.27],[.45,s,.27],.035);for(let s of[-.43,.43])Q(e,n.steel,[s,.19,.27],[s,.46,.27],.035);qe(e,n.darkSteel,[[-.71,.38,-.08],[-.74,.52,-.12],[-.43,.56,-.18],[-.39,.17,-.21]],.016),qe(e,n.darkSteel,[[-.67,.31,-.09],[-.74,.2,-.12],[-.61,.12,-.2],[-.41,.12,-.22]],.014),qe(e,n.steel,[[0,.34,.17],[0,.32,.33],[0,.21,.46]],.012);let i=new ut;return i.name="forged hook and safety latch",e.add(i),qe(i,n.steel,[[0,.23,.46],[.04,.14,.47],[.1,.085,.49],[.11,.027,.51],[.06,-.015,.52],[-.02,-.012,.52],[-.073,.05,.51],[-.071,.12,.49]],.025),Q(i,n.darkSteel,[-.07,.12,.49],[.031,.15,.48],.008),e}function Os(n){let e=new ut;e.name="run-flat wheel";let t=B(e,n.rubber,.585,.37,[0,0,0],"z");for(let i of[-.196,.196])B(e,n.rubber,.505,.026,[0,0,i],"z"),B(e,n.paint,.325,.03,[0,0,i*1.09],"z"),B(e,n.darkSteel,.19,.04,[0,0,i*1.22],"z"),B(e,n.paint,.105,.055,[0,0,i*1.4],"z"),ni(e,n.steel,[0,0,i*1.26],.247,10,"z",.018);for(let i=0;i<30;i++)for(let s of[-1,1]){let r=i/30*Math.PI*2+s*.035,o=U(e,n.rubber,[.095,.075,.16],[Math.sin(r)*.586,Math.cos(r)*.586,s*.1]);o.rotation.z=-r,o.rotation.y=s*.24}return e}function hd(n=cd()){let e=new ut;e.name="R8 recovery vehicle",e.userData={units:"metres",concept:!0,axles:4,sharedPart:"WR-12"},U(e,n.darkSteel,[6.25,.24,1.2],[0,.91,0],"chassis"),U(e,n.edge,[5.85,.48,2.18],[-.1,1.27,0],"lower armored hull"),U(e,n.paint,[6.15,.25,2.4],[0,1.63,0],"deck");for(let h of[-2.17,-.74,.72,2.15]){B(e,n.darkSteel,.085,2.15,[h,.73,0],"z"),U(e,n.darkSteel,[.35,.23,.42],[h,.75,0],"differential");for(let p of[-1,1]){let m=Os(n);m.position.set(h,.605,p*1.19),e.add(m),Q(e,n.steel,[h-.13,.84,p*.81],[h+.19,1.34,p*.85],.043),U(e,n.paint,[1.2,.1,.47],[h,1.3,p*1.19],"wheel guard")}}let t=1.15,i=h=>[[.52,1.74,h*t],[2.94,1.74,h*t],[1.98,2.75,h*t],[.52,2.75,h*t]];Fs(e,n.paint,i(1)),Fs(e,n.paint,i(-1).reverse()),Fs(e,n.paint,[[.52,2.75,-t],[1.98,2.75,-t],[1.98,2.75,t],[.52,2.75,t]]),Fs(e,n.paint,[[2.94,1.74,-t],[2.94,1.74,t],[1.98,2.75,t],[1.98,2.75,-t]]),U(e,n.edge,[.08,1.03,2.3],[.49,2.25,0],"cab rear wall");let s=h=>2.94-(h-1.74)*(.96/1.01)+.008;for(let h of[[-1.02,-.09],[.09,1.02]])Fs(e,n.glass,[[s(2.03),2.03,h[0]],[s(2.03),2.03,h[1]],[s(2.57),2.57,h[1]],[s(2.57),2.57,h[0]]]),Q(e,n.rubber,[s(2.06)+.018,2.06,(h[0]+h[1])*.5],[s(2.4)+.018,2.4,h[1]-.1],.012);for(let h of[-1,1])Fs(e,n.glass,[[.76,2.15,h*1.158],[1.95,2.15,h*1.158],[1.87,2.57,h*1.158],[.76,2.57,h*1.158]]),Q(e,n.edge,[.64,1.86,h*1.166],[.64,2.66,h*1.166],.01),Q(e,n.edge,[.64,1.86,h*1.166],[1.7,1.86,h*1.166],.01),U(e,n.steel,[.15,.027,.033],[.87,2.015,h*1.185],"door handle"),Q(e,n.darkSteel,[2.11,2.25,h*1.16],[2.1,2.32,h*1.47],.024),U(e,n.glass,[.06,.22,.16],[2.1,2.32,h*1.47],"mirror"),U(e,n.edge,[.68,.07,.3],[1.17,1.61,h*1.36],"entry step");U(e,n.darkSteel,[.18,.24,2.53],[3.13,1.46,0],"front bumper");for(let h of[-1,1])B(e,n.lamp,.08,.04,[3.02,1.79,h*.83],"x"),B(e,n.amber,.036,.04,[3.025,1.79,h*1.02],"x"),B(e,n.steel,.075,.07,[3.25,1.42,h*.92],"x"),U(e,n.red,[.035,.09,.14],[-3.13,1.57,h*.99]);let r=Wr(n);r.name="mounted WR-12",r.rotation.y=Math.PI/2,r.position.set(2.98,1,0),e.add(r);let o=new ut;o.name="recovery stowage",e.add(o);for(let h of[-1,1]){U(o,n.paint,[2.6,.51,.43],[-1.56,1.99,h*.97],"tool locker");for(let p of[-2.3,-1.55,-.8])U(o,n.edge,[.014,.36,.017],[p,1.99,h*1.197]),U(o,n.steel,[.07,.018,.025],[p+.12,2.05,h*1.207]);Q(o,n.darkSteel,[-2.6,2.3,h*.8],[-.59,2.3,h*.8],.025)}let a=new ut;a.name="recovery crane",e.add(a),B(a,n.darkSteel,.44,.14,[-.85,1.84,0]),B(a,n.paint,.33,.36,[-.85,2.04,0]),U(a,n.edge,[.48,.4,.48],[-.85,2.32,0],"crane pivot");let c=[-.85,2.49,0],l=[-2.51,3.13,0],f=new L(...l).sub(new L(...c));U(a,n.paint,[.34,f.length(),.34],new L(...c).add(new L(...l)).multiplyScalar(.5).toArray(),"main crane boom").quaternion.setFromUnitVectors(new L(0,1,0),f.clone().normalize()),Q(a,n.darkSteel,[-2.47,3.115,0],[-3,3.32,0],.112),Q(a,n.paint,[-.84,2.1,.24],[-1.74,2.78,.24],.078),Q(a,n.steel,[-1.74,2.78,.24],[-2.13,2.99,.24],.035),B(a,n.darkSteel,.105,.15,[-3.03,3.31,0],"z"),Q(a,n.darkSteel,[-3.06,3.26,0],[-3.06,2.55,0],.012),qe(a,n.steel,[[-3.06,2.56,0],[-3.13,2.47,0],[-3.1,2.37,0],[-3,2.37,0],[-2.98,2.45,0]],.028),qe(a,n.rubber,[[-.67,2.09,.28],[-.54,2.49,.27],[-.94,2.66,.25],[-1.7,2.95,.22]],.018),B(e,n.paint,.29,.05,[1.04,2.8,0],"y"),B(e,n.amber,.065,.14,[.6,2.9,-.72]),Q(e,n.darkSteel,[.37,2.8,.73],[.37,3.69,.73],.012);for(let h of[-1,1])for(let p=0;p<12;p++)B(e,n.steel,.014,.018,[-2.7+p*.45,1.79,h*1.22],"z",.014,6);return e}function dd(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new ft,l=0;for(let f=0;f<n.length;++f){let u=n[f],h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,f),l+=p}}if(t){let f=0,u=[];for(let h=0;h<n.length;++h){let p=n[h].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+f);f+=n[h].attributes.position.count}c.setIndex(u)}for(let f in r){let u=ud(r[f]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,u)}for(let f in o){let u=o[f][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let h=0;h<u;++h){let p=[];for(let _=0;_<o[f].length;++_)p.push(o[f][_][h]);let m=ud(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(m)}}}return c}function ud(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let f=n[l];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}let o=new e(r),a=new Xt(o,t,i),c=0;for(let l=0;l<n.length;++l){let f=n[l];if(f.isInterleavedBufferAttribute){let u=c/t;for(let h=0,p=f.count;h<p;h++)for(let m=0;m<t;m++){let _=f.getComponent(h,m);a.setComponent(h+u,m,_)}}else o.set(f.array,c);c+=f.count*t}return s!==void 0&&(a.gpuType=s),a}var M_=Object.freeze({coated:Object.freeze({wavelength:65e-5,variation:.022,directional:0}),pressed:Object.freeze({wavelength:8e-4,variation:.016,directional:0}),cast:Object.freeze({wavelength:.002,variation:.045,directional:0}),machined:Object.freeze({wavelength:35e-5,variation:.018,directional:1}),rubber:Object.freeze({wavelength:.0012,variation:.023,directional:0}),upholstery:Object.freeze({wavelength:9e-4,variation:.065,directional:2})}),fd=Object.freeze({coated:Object.freeze({wavelength:.02,roughness:.012,tone:.003}),pressed:Object.freeze({wavelength:.012,roughness:.012,tone:0}),cast:Object.freeze({wavelength:.008,roughness:.02,tone:0}),machined:Object.freeze({wavelength:.01,roughness:.01,tone:0}),rubber:Object.freeze({wavelength:.012,roughness:.015,tone:.003}),upholstery:Object.freeze({wavelength:.01,roughness:.025,tone:.006})}),E_=`
varying vec3 vSeaFinishPosition;
uniform vec3 seaFinish;
uniform vec3 seaSurface;
float seaFinishHash(vec3 p) {
 p=fract(p*0.1031);p+=dot(p,p.yzx+33.33);
 return fract((p.x+p.y)*p.z);
}
float seaFinishNoise(vec3 p) {
 vec3 cell=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
 float low=mix(mix(seaFinishHash(cell),seaFinishHash(cell+vec3(1,0,0)),f.x),mix(seaFinishHash(cell+vec3(0,1,0)),seaFinishHash(cell+vec3(1,1,0)),f.x),f.y);
 float high=mix(mix(seaFinishHash(cell+vec3(0,0,1)),seaFinishHash(cell+vec3(1,0,1)),f.x),mix(seaFinishHash(cell+vec3(0,1,1)),seaFinishHash(cell+vec3(1,1,1)),f.x),f.y);
 return mix(low,high,f.z)*2.0-1.0;
}
float seaVisibleSurface() {
 vec3 p=vSeaFinishPosition/max(seaSurface.x,0.00001);
 float footprint=max(length(dFdx(p)),length(dFdy(p)));
 return seaFinishNoise(p)*(1.0-smoothstep(0.35,1.0,footprint));
}
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
`,kc=class extends Ss{constructor(e={},t="coated"){super(e),this.finish=t,this.finishProfile={...pd(t)},this.surfaceProfile={...fd[t]}}copy(e){return super.copy(e),this.finish=e.finish??"coated",this.finishProfile={...e.finishProfile??pd(this.finish)},this.surfaceProfile={...e.surfaceProfile??fd[this.finish]},this}customProgramCacheKey(){return"sea-metres-finish-v3"}onBeforeCompile(e){let t="#include <project_vertex>",i="#include <roughnessmap_fragment>",s="#include <color_fragment>";if(!e.vertexShader.includes(t)||!e.fragmentShader.includes(i)||!e.fragmentShader.includes(s))throw new Error("SEA finish shader anchors changed");let r=this.finishProfile;e.uniforms.seaFinish={value:new L(r.wavelength,r.variation,r.directional)};let o=this.surfaceProfile;e.uniforms.seaSurface={value:new L(o.wavelength,o.roughness,o.tone)},e.vertexShader=`varying vec3 vSeaFinishPosition;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(t,`
   vSeaFinishPosition=transformed*vec3(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz),length(modelMatrix[2].xyz));
   ${t}
  `),e.fragmentShader=E_+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(s,`${s}
float seaSurfaceResponse=seaVisibleSurface();
diffuseColor.rgb*=1.0+seaSurfaceResponse*seaSurface.z;`),e.fragmentShader=e.fragmentShader.replace(i,`${i}
roughnessFactor=clamp(roughnessFactor+seaSurfaceFinish()+seaSurfaceResponse*seaSurface.y,0.04,1.0);`)}};function pd(n){let e=M_[n];if(!e)throw new Error(`Unknown SEA material finish: ${n}`);return e}function Wi(){let n=(s,r,o,a,c={})=>new kc({color:s,roughness:r,metalness:o,...c},a),e=(s,r,o=0,a={})=>new Ss({color:s,roughness:r,metalness:o,...a}),t={paint:n("#626e51",.53,0,"coated",{clearcoat:.1,clearcoatRoughness:.48}),edge:n("#394136",.61,.08,"pressed"),steel:n("#a0a7a5",.29,.92,"machined"),darkSteel:n("#41494a",.62,.86,"cast"),rubber:n("#222622",.82,0,"rubber"),glass:e("#78949a",.065,0,{ior:1.5,clearcoat:0,envMapIntensity:1.15}),amber:e("#dc9b30",.25,0,{clearcoat:.32,clearcoatRoughness:.16}),lamp:e("#e2e9db",.22,0,{clearcoat:.3,clearcoatRoughness:.14}),red:e("#a94432",.39,0,{clearcoat:.16,clearcoatRoughness:.28}),pressedSteel:n("#828c87",.4,.88,"pressed"),castSteel:n("#596160",.66,.84,"cast"),upholstery:n("#343a32",.91,0,"upholstery",{sheen:.2,sheenColor:"#565d4d",sheenRoughness:.9})},i={paint:"powder coated metal",edge:"coated frame metal",steel:"machined steel",darkSteel:"cast dark steel",rubber:"moulded rubber",glass:"optical glass",amber:"amber lamp lens",lamp:"clear lamp lens",red:"red lamp lens",pressedSteel:"pressed steel",castSteel:"cast steel",upholstery:"woven seat upholstery"};for(let[s,r]of Object.entries(i))t[s].name=r;return t}function qn(n){return n.traverse(e=>{if(e.isMesh&&e.geometry.type==="BoxGeometry"){let{width:t,height:i,depth:s}=e.geometry.parameters;Math.min(t,i,s)>.045&&(e.geometry.dispose(),e.geometry=new jt(t,i,s,1,Math.min(.024,Math.min(t,i,s)*.12)))}}),n}function Gc(n,e,t,i){if(t==="MOB")return Vc(n,e),qn(n);if(t==="CAP")return qn(n);if(t==="FP")return qn(n);if(t==="PRO")return qn(n);if(t==="COM")for(let s=0;s<(i===1?3:i===6?2:1);s++){let r=(s-((i===1?3:i===6?2:1)-1)/2)*.4;Q(n,e.darkSteel,[r-.13,.47,.17],[r+.13,.47,.17],.015);for(let o=0;o<7;o++)U(n,e.darkSteel,[.26,.012,.025],[r,.15+o*.042,-.13]);for(let o of[-.085,.085])B(n,e.steel,.02,.025,[r+o,.17,.145],"z"),qe(n,e.rubber,[[r+o,.17,.16],[r+o,.1,.23],[r+o+.08,.06,.3]],.012);for(let o=0;o<3;o++)U(n,e.lamp,[.025,.006,.003],[r-.065+o*.05,.41,.134])}else if(t==="SA"){for(let s of[-.105,.105])B(n,e.steel,.081,.014,[s,i===3?1.75:.43,.172],"z"),B(n,e.glass,.055,.012,[s,i===3?1.75:.43,.185],"z");qe(n,e.rubber,[[0,.07,-.08],[.12,.17,-.14],[.12,.37,-.14]],.012)}else if(t==="ACC"){if([0,5].includes(i))U(n,e.amber,[.13,.05,.022],[.18,.49,.29],"safety marking");else if(i===1){for(let s of[-1,1])U(n,e.red,[.025,.05,.11],[-.73,.45,s*.3]),Q(n,e.steel,[-.65,.8,s*.38],[.6,.8,s*.38],.014);B(n,e.darkSteel,.055,.12,[1.27,.38,0],"y")}else if([3,6].includes(i)){for(let s=0;s<3;s++){Q(n,e.darkSteel,[-.47+s*.37,.4,.24],[-.3+s*.37,.4,.24],.012);for(let r of[-1,1])B(n,e.steel,.009,.016,[-.46+s*.37,.24,r*.245],"z",.009,6)}qe(n,e.rubber,[[-.6,.03,-.29],[-.51,.1,-.35],[.5,.1,-.35],[.6,.04,-.29]],.018)}}else if(t==="SE"){U(n,e.darkSteel,[.44,.025,.29],[.25,.75,.12],"laptop base");for(let s=0;s<4;s++)for(let r=0;r<10;r++)U(n,e.steel,[.025,.003,.023],[.09+r*.032,.766,.03+s*.034]);U(n,e.rubber,[.09,.003,.045],[.25,.766,.23],"trackpad"),U(n,e.paint,[.28,.019,.22],[-.38,.758,.15],"review binder");for(let s=0;s<4;s++)U(n,e.lamp,[.25,.003,.19],[-.38+s*.003,.772+s*.003,.15]);Q(n,e.darkSteel,[-.54,.78,.26],[-.32,.78,.26],.005)}return k_(n,e,t,i),Vc(n,e),qn(n)}function sl(n,e,t){let i=[];for(let a=1;a<t.length-1;a++)i.push(...t[0],...t[a],...t[a+1]);let s=new ft;s.setAttribute("position",new je(i,3)),s.computeVertexNormals();let r=e.clone();r.side=At;let o=new xe(s,r);return o.name=e.name==="optical glass"?"cab glazing":"hull shell",n.add(o),o}function tt(n,e,t,i,s=.045){let r=new Ht;return r.moveTo(n+s,e),r.lineTo(t-s,e),r.quadraticCurveTo(t,e,t,e+s),r.lineTo(t,i-s),r.quadraticCurveTo(t,i,t-s,i),r.lineTo(n+s,i),r.quadraticCurveTo(n,i,n,i-s),r.lineTo(n,e+s),r.quadraticCurveTo(n,e,n+s,e),r}function Ye(n,e,t,i,s){let r=new It;t.forEach(([f,u],h)=>h?r.lineTo(f,u):r.moveTo(f,u)),r.closePath(),r.holes.push(...i);let o=new Vt(r,{depth:.04,steps:1,curveSegments:6,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:3}),a=o.attributes.position;for(let f=0;f<a.count;f++)a.setXYZ(f,...s(a.getX(f),a.getY(f),a.getZ(f)));o.computeVertexNormals();let c=e.clone();c.side=At;let l=new xe(o,c);return l.name="hull shell",l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function ln(n,e,t,i,s,r,o){let a=new It;t.forEach(([h,p],m)=>m?a.lineTo(h,p):a.moveTo(h,p)),a.closePath(),a.holes.push(...i);let c=new Vt(a,{depth:r,steps:1,curveSegments:12,bevelEnabled:!0,bevelSize:.002,bevelThickness:.001,bevelSegments:2}),l=c.attributes.position;for(let h=0;h<l.count;h++)l.setXYZ(h,...s(l.getX(h),l.getY(h),l.getZ(h)));c.computeVertexNormals();let f=e.clone();f.side=At;let u=new xe(c,f);return u.name=o,u.castShadow=u.receiveShadow=!0,n.add(u),u}function zc(n,e,t,i){let[s,r,o,a]=t,c=tt(s,r,o,a,.045),l=tt(s-.038,r-.038,o+.038,a+.038,.065).getPoints(12).map(h=>[h.x,h.y]);ln(n,e.edge,l,[c.clone()],(h,p,m)=>i(h,p,.013+m),.017,"hull shell").userData.component="carrier window retaining bezel";let f=tt(s-.007,r-.007,o+.007,a+.007,.052).getPoints(12).map(h=>[h.x,h.y]);ln(n,e.rubber,f,[tt(s+.016,r+.016,o-.016,a-.016,.029)],(h,p,m)=>i(h,p,-.034+m),.066,"carrier window compression gasket");let u=e.glass.clone();u.color.set("#92b2b0"),u.transparent=!0,u.opacity=.38,u.metalness=0,u.depthWrite=!1,ln(n,u,c.getPoints(12).map(h=>[h.x,h.y]),[],(h,p,m)=>i(h,p,-.025-m),.01,"cab glazing").castShadow=!1,ln(n,e.edge,l,[c.clone()],(h,p,m)=>i(h,p,-.057-m),.012,"hull shell").userData.component="carrier window inner retaining frame";for(let h of[s-.023,o+.023])for(let p of[r+.04,a-.04]){let m=new L(...i(h,p,.032)),_=new L(...i(h,p,.042)).sub(m).normalize(),g=B(n,e.steel,.007,.009,m.toArray(),"y",.007,6);g.quaternion.setFromUnitVectors(new L(0,1,0),_),g.name="carrier bezel seated fastener"}}function w_(n,e,t,i){let s=.646551724137931,r=new L(1,s,0).normalize(),o=(i[0]+i[1])/2,a=new ut;a.name="carrier windshield wiper assembly";let c=new L(t(1.755),1.755,o-.06);a.position.copy(c),n.add(a);let l=(g,d,x,b=!1)=>new L(t(g)-(b?.025:0),g,d).addScaledVector(r,x).sub(c).toArray(),f=(g,d,x,b,y,S)=>{let E=B(a,e.darkSteel,g,d,l(x,b,y),"y",g,24);return E.quaternion.setFromUnitVectors(new L(0,1,0),r),E.name=S,E};f(.027,.028,1.755,o-.06,.014,"carrier wiper spindle housing"),f(.014,.031,1.755,o-.06,.042,"carrier wiper pivot shaft");let u=[1.96,o+.035],h=(i[1]-i[0])*.32;Q(a,e.darkSteel,l(1.755,o-.06,.055),l(1.87,o-.1,.061),.012).name="carrier wiper articulated arm",Q(a,e.darkSteel,l(1.87,o-.1,.061),l(u[0],u[1],.032,!0),.009).name="carrier wiper articulated arm";let p=.003+.001/Math.sqrt(1+s*s),m=l(1.935,o+.035-h,p,!0),_=l(1.985,o+.035+h,p,!0);Q(a,e.rubber,m,_,.003).name="carrier wiper rubber contact lip",Q(a,e.darkSteel,l(1.935,o+.035-h,.012,!0),l(1.985,o+.035+h,.012,!0),.007).name="carrier wiper spring blade spine",Q(a,e.darkSteel,l(u[0],u[1],.012,!0),l(u[0],u[1],.035,!0),.014).name="carrier wiper blade swivel"}function T_(n,e,t,i,s){let r=new Set(n.children),o=u=>s*i*(.75+(u-1.2)*.1/1.16),a=t-.92,c=U(n,e.edge,[.12,.18,.034],[a,1.74,o(1.74)+s*.025],"carrier mirror hull mounting plate");c.rotation.x=-s*Math.atan(i*.1/1.16);let l=[t-.9,2.08,s*(i+.1)];U(n,e.rubber,[.086,.26,.185],l,"carrier mirror sealed backing"),U(n,e.glass,[.006,.218,.15],[l[0]+.045,l[1],l[2]],"mirror");for(let u of[-.055,.055])Q(n,e.darkSteel,[a,1.74+u,o(1.74+u)+s*.04],[l[0]-.025,l[1]+u,l[2]],.014).name="carrier mirror support strut",B(n,e.steel,.014,.014,[a,1.74+u,o(1.74+u)+s*.044],"z",.014,6).name="carrier mirror mount fastener";let f=new ut;f.name="carrier mirror assembly",f.position.copy(c.position),n.add(f),n.updateMatrixWorld(!0);for(let u of[...n.children])u!==f&&!r.has(u)&&f.attach(u)}function A_(n,e,t,i,s){let r=new xe(new Dt(.061,.008,8,36),e.steel);r.rotation.y=Math.PI/2,r.position.set(t+.15,i,s),r.name="carrier headlamp retaining ring",r.castShadow=r.receiveShadow=!0,n.add(r);let o=[[0,-.03],[.022,-.027],[.042,-.014],[.056,0]].map(([l,f])=>new ae(l,f)),a=new xe(new yn(o.reverse(),32),e.steel);a.rotation.z=-Math.PI/2,a.position.set(t+.145,i,s),a.name="carrier headlamp reflector bowl",n.add(a);let c=e.glass.clone();c.color.set("#e0e9df"),c.transparent=!0,c.opacity=.45,c.metalness=0,c.roughness=.1,c.depthWrite=!1,B(n,c,.056,.004,[t+.154,i,s],"x",.056,36).name="carrier headlamp clear cover",B(n,e.lamp,.011,.012,[t+.129,i,s],"x",.011,16).name="carrier headlamp bulb capsule";for(let l of[-.032,-.016,0,.016,.032]){let f=Math.sqrt(.0025000000000000005-l*l);Q(n,c,[t+.157,i-f,s+l],[t+.157,i+f,s+l],.0012).name="carrier headlamp cover rib"}}function R_(n,e,t,i,s){let r=new ut;r.name="hull shell service access assembly",n.add(r);let o=p=>i*t*(.75+(p-1.2)*.1/1.16),a=(p,m,_)=>[p,m,o(m)+i*_],c=tt(s-.34,1.65,s+.34,2.23,.028),l=tt(s-.321,1.669,s+.321,2.211,.022);ln(r,e.rubber,c.getPoints(12).map(p=>[p.x,p.y]),[l],a,.012,"carrier service cover compression joint");let f=e.paint.clone();f.color.multiplyScalar(1.018),ln(r,f,l.getPoints(12).map(p=>[p.x,p.y]),[],(p,m,_)=>a(p,m,.011+_),.012,"carrier formed service cover"),f.dispose();for(let p of[1.73,2.14]){let m=U(r,e.paint,[.08,.056,.018],a(s-.305,p,.033),"carrier service cover hinge leaf");m.rotation.x=-i*Math.atan(t*.1/1.16),B(r,e.steel,.01,.058,a(s-.305,p,.048),"y",.01,20).name="carrier service cover hinge barrel"}let u=tt(s+.216,1.87,s+.296,2.015,.015),h=tt(s+.23,1.888,s+.282,1.998,.012);ln(r,e.darkSteel,u.getPoints(8).map(p=>[p.x,p.y]),[h],(p,m,_)=>a(p,m,.025+_),.012,"carrier service latch recessed rim"),Q(r,e.steel,a(s+.255,1.907,.037),a(s+.255,1.978,.037),.007).name="carrier service latch lever",r.traverse(p=>{p.isMesh&&(p.userData.cutawayShell=!0)})}function C_(n,e,t,i,s,r){let o=new ut;o.name="hull shell welded seams",n.add(o);let a=e.paint.clone();a.color.multiplyScalar(.87),a.roughness=.78;let c=(f,u,h)=>{let p=Q(o,a,f,u,.0035);p.name="carrier hull welded joint",p.userData.surface=h,p.userData.cutawayShell=!0};for(let f of[-1,1]){let u=h=>f*s*(.75+(h-1.2)*.1/1.16);c([r==="COMMAND"?1.16:i+.2,2.374,f*s*.85],[t-.77,2.374,f*s*.85],"roof"),c([i+.014,1.214,u(1.214)+f*.015],[t-.018,1.214,u(1.214)+f*.015],"side"),c([t-.76,2.33,u(2.33)+f*.015],[t-.029,1.245,u(1.245)+f*.015],"side"),c([i+.03,1.24,u(1.24)+f*.015],[i+.166,2.3,u(2.3)+f*.015],"side")}let l=f=>t-(f-1.2)*.75/1.16;if(c([l(1.54)+.015,1.54,-s*.77],[l(1.54)+.015,1.54,s*.77],"nose"),r==="COMMAND")for(let f of[-1,1])c([i+.2,2.754,f*s*.85],[.93,2.754,f*s*.85],"roof")}function P_(n,e,t){let i=new ut;i.name="hull shell roof service assembly",n.add(i);let s=t-1.3,r=2.36,o=tt(s-.49,-.78,s+.49,.78,.04),a=tt(s-.47,-.76,s+.47,.76,.034);ln(i,e.rubber,o.getPoints(12).map(l=>[l.x,l.y]),[a],(l,f,u)=>[l,r+.002+u,f],.012,"carrier roof service sealed joint");let c=[tt(s-.285,-.69,s+.285,-.43,.017),tt(s-.285,.43,s+.285,.69,.017)];ln(i,e.paint,a.getPoints(12).map(l=>[l.x,l.y]),c,(l,f,u)=>[l,r+.015+u,f],.019,"carrier roof intake frame");for(let l of[-1,1]){U(i,e.darkSteel,[.58,.007,.28],[s,r+.008,l*.56],"carrier roof intake dark duct");for(let f=0;f<10;f++){let u=U(i,e.paint,[.038,.007,.292],[s-.248+f*.055,r+.036,l*.56],"carrier roof intake blade");u.rotation.z=-.38}}for(let l of[-.738,.738])for(let f of[s-.426,s+.426])B(i,e.steel,.008,.008,[f,r+.039,l],"y",.008,6).name="carrier roof service captive fastener";i.traverse(l=>{l.isMesh&&(l.userData.cutawayShell=!0)})}function I_(n,e,t){let i=new ut;i.name="hull shell nose service assembly",n.add(i);let s=.75/1.16,r=new L(1,s,0).normalize(),o=(f,u,h)=>[t-(u-1.2)*s+h,u,f],a=tt(-.55,1.265,.55,1.708,.027),c=tt(-.532,1.283,.532,1.69,.022);ln(i,e.rubber,a.getPoints(12).map(f=>[f.x,f.y]),[c],(f,u,h)=>o(f,u,.013+h),.012,"carrier nose service compression joint");let l=e.paint.clone();l.color.multiplyScalar(1.018),ln(i,l,c.getPoints(12).map(f=>[f.x,f.y]),[],(f,u,h)=>o(f,u,.025+h),.011,"carrier nose formed service plate"),l.dispose();for(let f of[-.499,0,.499])for(let u of[1.315,1.658]){let h=B(i,e.steel,.009,.009,o(f,u,.044),"y",.009,6);h.quaternion.setFromUnitVectors(new L(0,1,0),r),h.name="carrier nose captive fastener"}for(let f of[-.31,.31]){for(let u of[-.042,.042])Q(i,e.darkSteel,o(f+u,1.49,.037),o(f+u,1.49,.061),.008).name="carrier nose pull pedestal";Q(i,e.paint,o(f-.042,1.49,.061),o(f+.042,1.49,.061),.009).name="carrier nose service pull"}i.traverse(f=>{f.isMesh&&(f.userData.cutawayShell=!0)})}function D_(n,e,t){let i=new ut;i.name="hull shell roof hatch assembly",n.add(i),B(i,e.paint,.32,.04,[.4,t+.03,.5],"y",.32,64).name="roof hatch";let s=new xe(new Dt(.31,.006,8,64),e.rubber);s.rotation.x=Math.PI/2,s.position.set(.4,t+.012,.5),s.name="carrier roof hatch compression seal",i.add(s);for(let[r,o,a]of[[.061,t+.025,.15],[.162,t+.057,.16]])U(i,e.paint,[a,.018,.16],[r,o,.5],"carrier roof hatch hinge leaf");B(i,e.steel,.016,.2,[.106,t+.065,.5],"z",.016,24).name="carrier roof hatch hinge barrel",U(i,e.darkSteel,[.12,.018,.075],[.709,t+.055,.5],"carrier roof hatch latch base"),Q(i,e.steel,[.658,t+.068,.5],[.763,t+.068,.5],.009).name="carrier roof hatch latch lever",i.traverse(r=>{r.isMesh&&(r.userData.cutawayShell=!0)})}function L_(){let n=[[.653,0],[.647,.012],[.654,.028],[.692,.045],[.697,.055],[.697,.405],[.692,.415],[.654,.432],[.647,.448],[.653,.46],[.66,.453],[.661,.435],[.699,.422],[.704,.405],[.704,.055],[.699,.038],[.661,.025],[.66,.007]],e=[],t=[],i=n.length;for(let o=0;o<=48;o++){let a=o*Math.PI/48;for(let[c,l]of n)e.push(Math.cos(a)*c,Math.sin(a)*c,l)}for(let o=0;o<48;o++)for(let a=0;a<i;a++){let c=o*i+a,l=o*i+(a+1)%i,f=(o+1)*i+a,u=(o+1)*i+(a+1)%i;t.push(c,l,f,l,u,f)}let s=_n.triangulateShape(n.map(([o,a])=>new ae(o,a)),[]);for(let o of s)t.push(...o.slice().reverse()),t.push(...o.map(a=>48*i+a));let r=new ft;return r.setAttribute("position",new je(e,3)),r.setIndex(t),r.computeVertexNormals(),r}function gd(n,e){if(n==="RECOVERY"){let h=hd(e);h.traverse(_=>{_.isMesh&&_.geometry.type==="BufferGeometry"&&_.material.name!=="optical glass"&&(_.name="hull shell")}),N_(h,e);let p=h.getObjectByName("mounted WR-12"),m=Gc(Wr(e),e,"ACC",5);return m.name="mounted WR-12",m.position.copy(p.position),m.quaternion.copy(p.quaternion),p.removeFromParent(),p.traverse(_=>_.geometry?.dispose()),h.add(m),md(h,e,6.25,2.3),qn(h)}let t={COMBAT:[6.8,2.65,4],RECCE:[5.5,2.3,2],TROOP:[6.9,2.6,3],COMMAND:[6.7,2.6,3],MINE:[6.8,2.65,4]}[n],[i,s,r]=t,o=new ut;o.name=n,o.userData={units:"metres",concept:!0,axles:r,roof:n==="COMMAND"?2.75:2.37,length:i,width:s};let a=i/2,c=-a,l=s/2;U(o,e.darkSteel,[i-.45,.2,s*.58],[0,.82,0],"chassis"),U(o,e.edge,[i-.25,.48,s*.8],[0,1.16,0],"lower hull");for(let h of[-1,1]){let p=g=>h*l*(.75+(g-1.2)*.1/1.16),m=[a-1.86,1.87,a-1.02,2.16],_=[tt(...m)];if(n==="TROOP")for(let g=0;g<4;g++)_.push(tt(c+.48+g*.94,1.97,c+1.05+g*.94,2.2,.035));if(Ye(o,e.paint,[[c,1.2],[a,1.2],[a-.75,2.36],[c+.17,2.36]],_,(g,d,x)=>[g,d,p(d)-h*x]),n==="TROOP")for(let g=0;g<4;g++)zc(o,e,[c+.48+g*.94,1.97,c+1.05+g*.94,2.2],(d,x,b)=>[d,x,p(x)+h*b]);n==="COMMAND"&&(Ye(o,e.paint,[[c+.17,2.36],[1.14,2.36],[.95,2.74],[c+.17,2.74]],[],(g,d,x)=>[g,d,h*(l*.85-x)]).userData.component="command raised rear side"),ln(o,e.paint,[[a-2.01,1.48],[a-.97,1.48],[a-.86,2.28],[a-1.02,2.31],[a-2.01,2.31]],[tt(...m)],(g,d,x)=>[g,d,p(d)+h*(.012+x)],.015,"hull shell").userData.component="carrier formed cab door",zc(o,e,m,(g,d,x)=>[g,d,p(d)+h*x])}if(n==="COMBAT"){let h=new Ht;h.absarc(-.35,0,.405,0,Math.PI*2,!0),Ye(o,e.paint,[[c+.17,-l*.85],[a-.75,-l*.85],[a-.75,l*.85],[c+.17,l*.85]],[h],(p,m,_)=>[p,2.36-_,m])}else if(n==="RECCE"){let h=new Ht;h.absarc(-1,-.48,.092,0,Math.PI*2,!0),Ye(o,e.paint,[[c+.17,-l*.85],[a-.75,-l*.85],[a-.75,l*.85],[c+.17,l*.85]],[h],(p,m,_)=>[p,2.36-_,m])}else n==="COMMAND"?(sl(o,e.paint,[[1.14,2.36,-l*.85],[a-.75,2.36,-l*.85],[a-.75,2.36,l*.85],[1.14,2.36,l*.85]]),Ye(o,e.paint,[[c+.17,-l*.85],[.95,-l*.85],[.95,l*.85],[c+.17,l*.85]],[],(h,p,m)=>[h,2.74-m,p]).userData.component="command raised rear roof",Ye(o,e.paint,[[.95,-l*.85],[1.14,-l*.85],[1.14,l*.85],[.95,l*.85]],[],(h,p,m)=>[h,2.74-(h-.95)*.38/.19-m,p]).userData.component="command roof transition"):sl(o,e.paint,[[c+.17,2.36,-l*.85],[a-.75,2.36,-l*.85],[a-.75,2.36,l*.85],[c+.17,2.36,l*.85]]);let f=h=>a-(h-1.2)*.75/1.16;Ye(o,e.paint,[[-l*.75,1.2],[l*.75,1.2],[l*.85,2.36],[-l*.85,2.36]],[tt(-l*.67,1.8,-.09,2.13),tt(.09,1.8,l*.67,2.13)],(h,p,m)=>[f(p)-m,p,h]);for(let h of[[-l*.67,-.09],[.09,l*.67]])zc(o,e,[h[0],1.8,h[1],2.13],(p,m,_)=>[f(m)+_,m,p]),w_(o,e,f,h);n==="TROOP"?Ye(o,e.edge,[[-l*.75,1.2],[l*.75,1.2],[l*.85,2.36],[-l*.85,2.36]],[tt(-.74,1.34,.74,2.23,.045)],(h,p,m)=>[c+(p-1.2)*.17/1.16+m,p,h]):n==="COMMAND"?Ye(o,e.edge,[[-l*.75,1.2],[l*.75,1.2],[l*.85,2.36],[l*.85,2.74],[-l*.85,2.74],[-l*.85,2.36]],[tt(-.47,1.47,.47,2.5,.045)],(h,p,m)=>[c+(Math.min(p,2.36)-1.2)*.17/1.16+m,p,h]):sl(o,e.edge,[[c,1.2,-l*.75],[c+.17,2.36,-l*.85],[c+.17,2.36,l*.85],[c,1.2,l*.75]]);let u=r===2?[-1.67,1.67]:r===3?[-2.25,-.75,1.9]:[-2.55,-1.05,1,2.4];for(let h of u){B(o,e.darkSteel,.06,s*.81,[h,.67,0],"z"),B(o,e.edge,.13,.31,[h,.67,0],"z");for(let p of[-1,1]){let m=Os(e);m.position.set(h,.62,p*l*.88),o.add(m),Q(o,e.steel,[h-.15,.75,p*l*.62],[h+.1,1.2,p*l*.68],.045),U(o,e.paint,[1.22,.075,.48],[h,1.3,p*l*.91],"wheel guard")}}for(let h of[-1,1]){let p=h*l*.855,m=E=>h*l*(.75+(E-1.2)*.1/1.16)+h*.01;for(let E of[1.65,2.24])U(o,e.darkSteel,[.055,.09,.041],[a-1.97,E,m(E)+h*.024],"carrier door seated hinge leaf"),B(o,e.steel,.01,.065,[a-1.97,E,m(E)+h*.043],"y",.01,16).name="carrier door hinge pin";let _=m(1.76)+h*.054;for(let E of[a-1.56,a-1.34])Q(o,e.edge,[E,1.76,m(1.76)+h*.017],[E,1.76,_],.011).name="carrier door pull mounting post";Q(o,e.steel,[a-1.56,1.76,_],[a-1.34,1.76,_],.012).name="carrier exterior door pull",U(o,e.edge,[.68,.05,.32],[a-1.61,1.36,h*(l*.87+.14)],"entry step");for(let E of[a-1.83,a-1.39]){let I=Math.abs(m(1.36))-.01,v=l*.87+.14;U(o,e.edge,[.05,.1,v-I+.05],[E,1.33,h*(I+v)/2],"carrier entry step hull bracket")}if(T_(o,e,a,l,h),n!=="TROOP")for(let E=0;E<3;E++)R_(o,e,l,h,c+.64+E*.81);let g=1.385,d=f(g),x=h*l*.65;U(o,e.edge,[.16,.21,.205],[d+.035,g,x],"carrier front lamp housing");let b=new Ht,y=new Ht;b.absarc(x,1.355,.059,0,Math.PI*2,!0),y.absarc(x,1.445,.023,0,Math.PI*2,!0);let S=tt(x-.087,g-.095,x+.087,g+.095,.008).getPoints(12).map(E=>[E.x,E.y]);ln(o,e.rubber,S,[b,y],(E,I,v)=>[d+.111+v,I,E],.02,"carrier lamp seated gasket"),A_(o,e,d,1.355,x),B(o,e.amber,.022,.023,[d+.137,1.445,x],"x",.022,24).name="carrier indicator lens",U(o,e.red,[.03,.07,.13],[c-.02,1.32,h*l*.65])}U(o,e.darkSteel,[.15,.17,s*.85],[a,1.12,0],"front bumper");for(let h of[-1,1]){U(o,e.darkSteel,[.12,.09,.07],[a+.1,1.14,h*.73],"carrier tow eye bracket "+h);let p=new xe(new Dt(.073,.018,10,32),e.steel);p.position.set(a+.18,1.14,h*.73),p.name="carrier front tow eye",p.castShadow=p.receiveShadow=!0,o.add(p),Q(o,e.steel,[c+.25,1.44,h*.5],[c+.25,2.05,h*.5],.016)}return D_(o,e,n==="COMMAND"?2.74:2.36),P_(o,e,a),I_(o,e,a),C_(o,e,a,c,l,n),md(o,e,i,s),qn(o)}function N_(n,e){let t=n.children.filter(m=>m.isMesh&&m.geometry.type==="BufferGeometry"),i=t.filter(m=>m.material.name!=="optical glass"),s=t.filter(m=>m.material.name==="optical glass");function r(m,_){if(!m)return;let g=[];for(let d=1;d<_.length-1;d++)g.push(..._[0],..._[d],..._[d+1]);m.geometry.dispose(),m.geometry=new ft,m.geometry.setAttribute("position",new je(g,3)),m.geometry.computeVertexNormals()}let o=m=>2.94-(m-1.74)*(.47/1.01)+.012;U_(n,e);for(let m of[...n.children]){let _=m.geometry?.type==="CylinderGeometry"&&m.geometry.parameters.radiusTop===.01&&Math.abs(Math.abs(m.position.z)-1.166)<.001;(m.name==="door handle"||_)&&(m.removeFromParent(),m.geometry?.dispose())}for(let m of n.children.filter(_=>_.name==="wheel guard")){let _=new It;_.moveTo(-.74,-.04),_.lineTo(-.74,.19),_.quadraticCurveTo(-.72,.25,-.68,.31),_.lineTo(-.47,.68),_.quadraticCurveTo(-.43,.74,-.36,.74),_.lineTo(.36,.74),_.quadraticCurveTo(.43,.74,.47,.68),_.lineTo(.68,.31),_.quadraticCurveTo(.72,.25,.74,.19),_.lineTo(.74,-.04),_.lineTo(.66,-.04),_.lineTo(.66,.18),_.lineTo(.39,.66),_.lineTo(-.39,.66),_.lineTo(-.66,.18),_.lineTo(-.66,-.04),_.closePath(),m.geometry.dispose(),m.geometry=new Vt(_,{depth:.5,curveSegments:5,bevelEnabled:!0,bevelSize:.016,bevelThickness:.016,bevelSegments:3,steps:1}),m.name="recovery formed wheel guard",m.position.y=.605,m.position.z-=.25}for(let m of i)m.removeFromParent(),m.geometry.dispose(),m.material.dispose();for(let m of[-1,1]){Ye(n,e.paint,[[.52,1.74],[2.94,1.74],[2.47,2.75],[.52,2.75]],[tt(1.22,2.15,2.28,2.6)],(_,g,d)=>[_,g,m*(1.15-d)]),Ye(n,e.paint,[[.52,1.4],[2.83,1.4],[2.98,1.65],[2.94,1.74],[.52,1.74]],[],(_,g,d)=>[_,g,m*(1.15-d)]),Ye(n,e.paint,[[1.08,1.78],[2.32,1.78],[2.55,2.1],[2.34,2.64],[1.08,2.64]],[tt(1.24,2.17,2.26,2.58)],(_,g,d)=>[_,g,m*(1.174-d*.35)]),U(n,e.edge,[.34,.58,.017],[.8,2.11,m*1.171],"rear cab access gasket"),U(n,e.paint,[.3,.54,.025],[.8,2.11,m*1.183],"rear cab service cover");for(let _ of[1.87,2.35])U(n,e.darkSteel,[.04,.07,.021],[.65,_,m*1.202],"cab service cover hinge");U(n,e.darkSteel,[.035,.09,.023],[.92,2.1,m*1.203],"cab service cover latch")}let a=[[-1.15,1.74],[1.15,1.74],[1.15,2.75],[-1.15,2.75]];Ye(n,e.paint,a,[tt(-1.02,2.04,-.07,2.62),tt(.07,2.04,1.02,2.62)],(m,_,g)=>[o(_)-g,_,m]);let c=new xe(new jt(1.95,.07,2.3,3,.028),e.paint);c.position.set(1.495,2.745,0),c.name="hull shell",c.castShadow=!0,c.receiveShadow=!0,n.add(c),Ye(n,e.paint,[[-1.15,1.49],[1.15,1.49],[1.15,1.74],[-1.15,1.74]],[],(m,_,g)=>[2.98-(_-1.49)*.16-g,_,m]);let l=e.glass.clone();l.color.set("#a9c8c5"),l.transparent=!0,l.opacity=.28,l.metalness=0,l.roughness=.12,l.depthWrite=!1;for(let m of s)m.material.dispose(),m.material=l,m.castShadow=!1;let f=[];n.traverse(m=>{m.material===e.rubber&&m.geometry.type==="CylinderGeometry"&&m.geometry.parameters.radiusTop===.012&&m.position.y>2.1&&f.push(m)});for(let m of f)m.removeFromParent(),m.geometry.dispose();for(let[m,_]of[[0,[-1.02,-.07]],[1,[.07,1.02]]]){let g=[[o(2.04),2.04,_[0]],[o(2.04),2.04,_[1]],[o(2.62),2.62,_[1]],[o(2.62),2.62,_[0]]];r(s[m],g),s[m].name="cab glazing";for(let x=0;x<4;x++)Q(n,e.rubber,g[x],g[(x+1)%4],.018);let d=(_[0]+_[1])/2;Q(n,e.darkSteel,[o(2.05)+.018,2.05,d],[o(2.3)+.024,2.3,d-.2],.014),Q(n,e.rubber,[o(2.21)+.025,2.21,d-.27],[o(2.47)+.025,2.47,d-.09],.012)}for(let[m,_]of[[2,-1],[3,1]]){let g=[[1.25,2.18,_*1.178],[2.25,2.18,_*1.178],[2.25,2.57,_*1.178],[1.25,2.57,_*1.178]];r(s[m],g),s[m].name="cab glazing";for(let d=0;d<4;d++)Q(n,e.rubber,g[d],g[(d+1)%4],.017);U(n,e.edge,[.025,.39,.025],[2.05,2.375,_*1.196],"door quarter window divider"),U(n,e.rubber,[.085,.25,.18],[2.065,2.32,_*1.47],"mirror housing"),Q(n,e.darkSteel,[2.11,2.08,_*1.16],[2.1,2.24,_*1.46],.018);for(let d of[1.93,2.47])U(n,e.darkSteel,[.065,.13,.035],[1.09,d,_*1.185],"door hinge");U(n,e.edge,[.2,.1,.021],[1.3,2.015,_*1.194],"door handle recess"),Q(n,e.steel,[1.25,2.015,_*1.213],[1.37,2.015,_*1.213],.013).name="door release pull",U(n,e.edge,[.22,.26,.13],[2.99,1.79,_*.83],"recessed headlight surround"),B(n,e.lamp,.08,.033,[3.112,1.79,_*.83],"x",.08,32),B(n,e.amber,.029,.024,[2.25,2.79,_*.9],"y",.029,20)}let u=U(n,e.edge,[.025,.28,1.35],[o(1.84)+.015,1.84,0],"radiator grille frame");u.rotation.z=Math.atan(.47/1.01);for(let m=0;m<7;m++){let _=1.73+m*.033;U(n,e.darkSteel,[.025,.025,1.24],[o(_)+.034,_,0],"radiator grille slat")}for(let m of[-.52,0,.52]){let _=U(n,e.edge,[.034,.27,.023],[o(1.83)+.055,1.83,m],"grille support");_.rotation.z=Math.atan(.47/1.01)}Q(n,e.edge,[2.47,2.75,-1.15],[2.47,2.75,1.15],.031);for(let m of[-.75,-.38,0,.38,.75])U(n,e.amber,[.12,.04,.07],[2.38,2.8,m],"roof clearance lamp");let h=n.getObjectByName("recovery stowage");if(h){for(let m of h.children.filter(_=>_.name==="tool locker"))m.geometry.dispose(),m.geometry=new rn(2.6,.64,.43),m.position.y=1.99;for(let m of[-1,1])for(let _ of[-2.41,-1.56,-.71]){U(h,e.edge,[.78,.54,.015],[_,1.99,m*1.195],"locker door gasket"),U(h,e.paint,[.73,.49,.019],[_,1.99,m*1.21],"formed locker door");for(let g of[1.83,2.15])U(h,e.darkSteel,[.05,.08,.028],[_-.31,g,m*1.235],"locker hinge");U(h,e.darkSteel,[.13,.14,.019],[_+.23,2.04,m*1.237],"recessed latch cup"),Q(h,e.steel,[_+.19,2.04,m*1.253],[_+.27,2.04,m*1.253],.012).name="locker latch lever"}for(let m of[-1,1]){U(h,e.darkSteel,[2.64,.055,.47],[-1.56,1.68,m*.97],"locker load bearing plinth");for(let _ of[-2.41,-1.56,-.71]){for(let g of[1.84,2.14])U(h,e.paint,[.55,.018,.016],[_-.03,g,m*1.225],"pressed locker stiffening rib");U(h,e.edge,[.045,.59,.025],[_-.4,1.99,m*1.212],"locker frame stile")}}for(let m of[-1,1]){U(h,e.darkSteel,[2.58,.024,.41],[-1.56,2.325,m*.97],"locker top tread plate");for(let _=0;_<13;_++){let g=-2.75+_*.19;Q(h,e.steel,[g,2.342,m*.97-.14],[g+.075,2.342,m*.97+.14],.006).name="raised walkway tread"}}}F_(n,e),U(n,e.edge,[.26,.055,.18],[.43,2.755,.73],"rear bulkhead antenna bracket"),B(n,e.rubber,.04,.075,[.37,2.81,.73],"y",.04,24).name="antenna spring base",B(n,e.edge,.088,.08,[.6,2.8,-.72],"y",.088,32).name="beacon mounting pedestal";let p=n.getObjectByName("recovery crane");p&&O_(p,e)}function U_(n,e){for(let i of["chassis","lower armored hull","deck"]){let s=n.getObjectByName(i);s&&(s.removeFromParent(),s.geometry.dispose())}let t=new ut;t.name="reinforced recovery chassis",n.add(t);for(let i of[-1,1]){let s=i*.52;U(t,e.darkSteel,[6.05,.26,.055],[0,.91,s],"chassis rail web");for(let r of[.77,1.05])U(t,e.darkSteel,[6.05,.04,.16],[0,r,s],"chassis rail flange");U(t,e.edge,[3.4,.17,.085],[-1.1,1.135,s],"crane subframe rail");for(let r of[-2.6,-1.6,-.85,-.3])U(t,e.darkSteel,[.14,.51,.12],[r,1.38,i*.76],"deck support post"),Q(t,e.edge,[r,1.12,s],[r,1.55,i*1.02],.035).name="deck outrigger brace";Ye(t,e.paint,[[.53,1.4],[2.83,1.4],[2.83,1.57],[.53,1.57]],[],(r,o,a)=>[r,o,i*(1.11-a)]).name="cab sill skirt";for(let r of[-2.17,-.74,.72,2.15]){U(t,e.darkSteel,[.23,.16,.16],[r+.19,1.3,i*.85],"suspension upper mount"),U(t,e.edge,[.23,.23,.15],[r+.19,1.45,i*.85],"suspension deck hanger"),U(t,e.edge,[.55,.24,.08],[r,1.45,i*1.12],"wheel guard mounting apron"),U(t,e.edge,[.46,.042,.1],[r,.86,i*.52],"axle spring saddle");for(let o=0;o<3;o++)U(t,e.darkSteel,[.64-o*.08,.016,.1],[r,.83-o*.018,i*.52],"leaf spring pack")}}for(let i of[-2.85,-2.17,-.85,.72,2.15,2.82])U(t,e.darkSteel,[.12,.17,1.22],[i,.93,0],"chassis crossmember");U(t,e.paint,[6.12,.08,2.38],[-.005,1.6,0],"formed load deck");for(let i of[-1,1])U(t,e.edge,[6.08,.11,.05],[-.005,1.57,i*1.175],"deck folded edge");U(t,e.darkSteel,[1.14,.16,1.6],[-.85,1.68,0],"crane foundation crossbeam");for(let i of[-1,1])Ye(t,e.darkSteel,[[-1.28,1.19],[-.44,1.19],[-.62,1.59],[-1.1,1.59]],[],(s,r,o)=>[s,r,i*(.56+o)]).name="crane foundation gusset";U(t,e.edge,[.32,.22,2.08],[-2.92,1.16,0],"stabilizer crossbeam");for(let i of[-1,1])U(t,e.darkSteel,[.24,.14,.93],[-2.92,1.16,i*.58],"stowed telescopic stabilizer beam"),U(t,e.paint,[.32,.36,.24],[-2.92,1.13,i*1.02],"stabilizer jack guide"),B(t,e.paint,.08,.33,[-2.92,.92,i*1.02],"y",.08,32).name="stabilizer jack barrel",B(t,e.steel,.033,.12,[-2.92,.72,i*1.02],"y",.033,24).name="stowed jack piston",B(t,e.darkSteel,.06,.17,[-2.92,.68,i*1.02],"z",.06,24).name="jack foot pivot",U(t,e.darkSteel,[.27,.065,.29],[-2.92,.64,i*1.02],"carried stabilizer foot"),qe(t,e.rubber,[[-2.55,1.25,i*.6],[-2.75,1.3,i*.7],[-2.94,1.3,i*.89],[-2.96,1.06,i*.93]],.018,24).name="stabilizer hydraulic supply",U(t,e.edge,[.1,.21,.41],[-3.035,1.4,i*.92],"rear lamp carrier"),U(t,e.red,[.025,.09,.2],[-3.1,1.43,i*.97],"rear tail lamp"),U(t,e.amber,[.026,.07,.09],[-3.1,1.43,i*.79],"rear turn lamp"),U(t,e.rubber,[.05,.37,.26],[-2.88,.9,i*1.28],"rear flexible mudflap");U(t,e.darkSteel,[.18,.25,1.25],[-3.015,1.1,0],"rear towing crossmember"),U(t,e.edge,[.21,.23,.28],[-3.075,1.1,0],"rear tow coupling body"),B(t,e.steel,.034,.3,[-3.15,1.1,0],"y",.034,24).name="tow coupling pin"}function F_(n,e){let t=new ut;t.name="cab services",n.add(t);for(let i of[-1,1])U(t,e.darkSteel,[.37,.065,.38],[.24,1.8,i*.79],"service tower deck bracket");B(t,e.edge,.135,.65,[.24,2.14,.79],"y",.135,40).name="air cleaner housing",B(t,e.darkSteel,.153,.036,[.24,2.47,.79],"y",.153,40).name="air cleaner lid",B(t,e.paint,.1,.25,[.24,2.61,.79],"y",.1,32).name="intake riser",B(t,e.edge,.17,.05,[.24,2.75,.79],"y",.17,40).name="intake rain cap";for(let i of[1.94,2.35]){let s=new xe(new Dt(.137,.012,8,36),e.steel);s.rotation.x=Math.PI/2,s.position.set(.24,i,.79),s.name="air cleaner retaining band",t.add(s),U(t,e.edge,[.2,.065,.065],[.39,i,.79],"bulkhead service bracket")}qe(t,e.rubber,[[.24,1.84,.79],[.24,1.7,.79],[.34,1.58,.64],[.6,1.5,.64]],.065,24).name="connected air inlet duct",B(t,e.darkSteel,.093,.75,[.24,2.22,-.79],"y",.093,40).name="exhaust silencer";for(let i=0;i<12;i++){let s=i*Math.PI/6;Q(t,e.steel,[.24+Math.cos(s)*.12,1.87,-.79+Math.sin(s)*.12],[.24+Math.cos(s)*.12,2.57,-.79+Math.sin(s)*.12],.012).name="exhaust heat shield rib"}for(let i of[1.88,2.08,2.37,2.57]){let s=new xe(new Dt(.12,.013,8,36),e.darkSteel);s.rotation.x=Math.PI/2,s.position.set(.24,i,-.79),s.name="heat shield retaining band",t.add(s)}qe(t,e.darkSteel,[[.24,1.85,-.79],[.24,1.7,-.79],[.35,1.57,-.72],[.59,1.5,-.72]],.05,24).name="exhaust inlet elbow",qe(t,e.darkSteel,[[.24,2.59,-.79],[.24,2.75,-.79],[.1,2.83,-.79]],.053,24).name="exhaust outlet elbow";for(let i of[1.97,2.42])U(t,e.edge,[.2,.07,.07],[.39,i,-.79],"exhaust bulkhead bracket");U(t,e.paint,[.54,.28,.64],[-.04,1.16,-.48],"underbody utility tank");for(let i of[-.2,.13])U(t,e.darkSteel,[.044,.31,.68],[i,1.16,-.48],"utility tank strap");qe(t,e.darkSteel,[[.2,1.29,-.7],[.35,1.29,-.7],[.45,1.43,-.79]],.014,20).name="tank supply pipe"}function O_(n,e){for(let l of[...n.children])l.removeFromParent(),l.traverse(f=>f.geometry?.dispose());let t=(l,f,u,h,p,m,_)=>{let g=new L(...f).sub(new L(...l)),d=g.length(),x=[],b=([w,C],D,T)=>{let R=w/2-D,P=C/2-D,F=Math.min(R,P)*.28;return[[-R+F,-P,T],[R-F,-P,T],[R,-P+F,T],[R,P-F,T],[R-F,P,T],[-R+F,P,T],[-R,P-F,T],[-R,-P+F,T]]},y=[b(u,0,0),b(h,0,d)],S=[b(u,p,0),b(h,p,d)],E=(w,C,D,T)=>x.push(...w,...C,...D,...w,...D,...T);for(let w=0;w<8;w++){let C=(w+1)%8;E(y[0][w],y[0][C],y[1][C],y[1][w]),E(S[0][C],S[0][w],S[1][w],S[1][C]),E(y[0][C],y[0][w],S[0][w],S[0][C]),E(y[1][w],y[1][C],S[1][C],S[1][w])}let I=new ft;I.setAttribute("position",new je(x,3)),I.computeVertexNormals();let v=new xe(I,m);return v.position.set(...l),v.quaternion.setFromUnitVectors(new L(0,0,1),g.normalize()),v.name=_,v.castShadow=!0,v.receiveShadow=!0,n.add(v),v};U(n,e.edge,[.95,.12,1.2],[-.85,1.78,0],"crane mounting crossmember"),B(n,e.darkSteel,.44,.14,[-.85,1.88,0],"y",.44,48).name="slewing ring",B(n,e.paint,.33,.32,[-.85,2.1,0],"y",.33,40).name="crane pedestal";for(let l of[-1,1])Ye(n,e.paint,[[-1.17,2.1],[-1.13,2.51],[-1.04,2.62],[-.66,2.62],[-.57,2.51],[-.53,2.1]],[],(f,u,h)=>[f,u,l*(.27+h)]).name="crane pivot cheek",B(n,e.steel,.095,.075,[-.85,2.46,l*.32],"z",.095,40).name="boom pivot bearing",Q(n,e.edge,[-.85,1.8,l*.55],[-.85,2.14,l*.29],.045).name="pedestal brace";B(n,e.darkSteel,.075,.73,[-.85,2.46,0],"z",.075,40).name="boom hinge pin",t([-.65,2.38,0],[-2.47,3.12,0],[.42,.46],[.32,.34],.025,e.paint,"formed main boom"),t([-2.34,3.067,0],[-3.05,3.356,0],[.245,.26],[.205,.22],.017,e.darkSteel,"telescoping extension"),t([-2.37,3.079,0],[-2.49,3.128,0],[.36,.38],[.355,.375],.026,e.edge,"boom mouth reinforcement");for(let l of[-1,1]){let f=U(n,e.rubber,[.14,.12,.035],[-2.435,3.105,l*.141],"telescopic wear pad");f.rotation.z=-.386}for(let l of[-1,1])B(n,e.paint,.16,.055,[-.85,2.46,l*.225],"z",.16,40).name="boom root trunnion";Ye(n,e.paint,[[-2.02,2.77],[-2.25,2.85],[-2.2,2.99],[-1.96,2.89]],[],(l,f,u)=>[l,f,.25+u]).name="boom cylinder lug";let i=[-.73,2.08,.32],s=[-2.13,2.91,.32],r=new L(...s).sub(new L(...i)),o=l=>new L(...i).addScaledVector(r,l).toArray(),a=o(.68);Q(n,e.paint,i,a,.085).name="lift cylinder barrel",Q(n,e.steel,a,s,.032).name="lift piston rod",Q(n,e.darkSteel,o(.65),o(.71),.103).name="cylinder gland",Q(n,e.edge,o(.04),o(.12),.098).name="cylinder end cap";for(let[l,f]of[[i[0],i[1]],[s[0],s[1]]])B(n,e.steel,.067,.13,[l,f,.32],"z",.067,32).name="cylinder clevis pin",U(n,e.paint,[.17,.17,.08],[l,f,.26],"lift cylinder clevis");B(n,e.edge,.135,.34,[-.36,2.37,0],"z",.135,48).name="hoist drum";for(let l=0;l<13;l++){let f=new xe(new Dt(.137,.0075,6,36),e.darkSteel);f.position.set(-.36,2.37,-.15+l*.025),f.name="hoist cable winding",n.add(f)}for(let l of[-1,1])B(n,e.steel,.18,.03,[-.36,2.37,l*.185],"z",.18,40).name="hoist drum flange",Ye(n,e.paint,[[-.62,2.1],[-.08,2.1],[-.08,2.36],[-.2,2.54],[-.47,2.54],[-.62,2.36]],[],(f,u,h)=>[f,u,l*(.225+h)]).name="hoist bearing cradle";U(n,e.edge,[.55,.065,.6],[-.35,2.105,0],"hoist cradle base"),Q(n,e.edge,[-.68,2.1,0],[-.35,2.1,0],.055).name="hoist support tie",B(n,e.paint,.17,.13,[-.36,2.37,-.335],"z",.14,40).name="planetary hoist gearbox",B(n,e.darkSteel,.095,.21,[-.36,2.37,-.505],"z",.095,32).name="hoist hydraulic motor",qe(n,e.rubber,[[-.36,2.35,-.6],[-.18,2.2,-.62],[-.44,2.06,-.46],[-.73,2,-.36]],.018,24).name="hoist motor supply";for(let l of[-1,1])Ye(n,e.paint,[[-3.13,3.19],[-3.17,3.4],[-2.94,3.48],[-2.85,3.35]],[],(f,u,h)=>[f,u,l*(.12+h)]).name="boom head cheek";B(n,e.darkSteel,.095,.18,[-3.04,3.35,0],"z",.095,40).name="head sheave",B(n,e.steel,.035,.35,[-3.04,3.35,0],"z",.035,32).name="head sheave axle";for(let l of[-1,1]){let f=new xe(new Dt(.086,.013,8,36),e.steel);f.position.set(-3.04,3.35,l*.075),f.name="sheave flange",n.add(f)}Q(n,e.darkSteel,[-.36,2.507,0],[-2.995,3.433,0],.011).name="hoist rope";let c=[];for(let l=0;l<=12;l++){let f=Math.PI*.34+l/12*Math.PI*.66;c.push([-3.04+Math.cos(f)*.095,3.35+Math.sin(f)*.095,0])}qe(n,e.darkSteel,c,.011,24).name="hoist rope sheave wrap",Q(n,e.darkSteel,[-3.135,3.35,0],[-3.135,2.79,0],.011).name="hoist rope fall",B(n,e.darkSteel,.047,.16,[-3.12,2.77,0]).name="hook swivel",qe(n,e.amber,[[-3.12,2.7,0],[-3.19,2.65,0],[-3.23,2.54,0],[-3.18,2.45,0],[-3.07,2.46,0],[-3.01,2.55,0],[-3.04,2.61,0]],.033,32).name="forged lifting hook",Q(n,e.darkSteel,[-3.04,2.61,0],[-3.14,2.67,0],.008).name="hook safety latch";for(let l=0;l<2;l++){let f=o(.58+l*.05),u=.44+l*.045;B(n,e.steel,.025,.065,[f[0],f[1],.409],"z",.025,24).name="lift cylinder hose union",qe(n,e.rubber,[[-.8,2,u],[-.59,2.18,u+.03],[-.71,2.59,u+.03],[-1.16,2.67,u],[f[0],f[1],.444]],.018,32).name="lift cylinder hydraulic line"}}function B_(n,e){let t=new ut;t.name="driver controls",n.add(t);let i=new Pn({color:"#79816f",roughness:.86,metalness:0});i.name="cab interior trim";let s=e.upholstery.clone();s.name="woven seat upholstery";let r=(h,p,m,_,g=.035)=>{let d=new xe(new jt(...p,3,g),h);return d.position.set(...m),d.name=_,d.castShadow=!0,d.receiveShadow=!0,t.add(d),d},o=1.79;r(e.rubber,[1.86,.045,1.99],[1.49,o,0],"cab floor mat",.018);let a=new It;[[2.11,1.85],[2.71,1.85],[2.75,2.05],[2.58,2.14],[2.18,2.14]].forEach(([h,p],m)=>m?a.lineTo(h,p):a.moveTo(h,p)),a.closePath();let c=new xe(new Vt(a,{depth:1.98,steps:1,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2}),i);c.position.z=-.99,c.name="dashboard cowl",c.castShadow=!0,c.receiveShadow=!0,t.add(c),r(e.edge,[.08,.23,1.86],[2.13,2.025,0],"dashboard instrument fascia",.015),r(e.rubber,[.26,.07,.63],[2.06,2.155,-.5],"instrument sun hood",.025),r(i,[.05,.075,.6],[2.075,2.015,.55],"glove compartment",.012),Q(t,e.darkSteel,[2.043,1.99,.44],[2.043,1.99,.65],.011).name="glove compartment pull";for(let h of[-.85,.14,.81]){r(e.darkSteel,[.014,.1,.15],[2.075,2.075,h],"dashboard air vent",.005);for(let p=0;p<4;p++)U(t,e.edge,[.015,.01,.13],[2.064,2.04+p*.023,h],"vent louvre")}for(let h of[-1,1]){let p=h*.58;for(let _ of[-.16,.16])U(t,e.darkSteel,[.59,.046,.044],[1.27,o+.042,p+_],"seat adjustment rail");r(e.darkSteel,[.39,.105,.34],[1.27,1.91,p],"seat suspension pan",.016),r(s,[.54,.15,.43],[1.33,2.02,p],"driver seat",.055);let m=r(s,[.16,.52,.42],[1.065,2.245,p],"seat back",.05);m.rotation.z=-.08;for(let _ of[-.19,.19]){let g=r(s,[.12,.48,.072],[1.14,2.235,p+_],"seat back bolster",.025);g.rotation.z=-.08,r(s,[.43,.1,.066],[1.36,2.09,p+_],"seat cushion bolster",.023)}for(let _ of[-.13,.13])Q(t,e.steel,[1.04,2.43,p+_],[1.04,2.56,p+_],.013).name="headrest support";r(s,[.14,.18,.3],[1.03,2.57,p],"driver head restraint",.035);for(let _ of[-.11,0,.11])Q(t,e.edge,[1.18,2.09,p+_],[1.51,2.09,p+_],.003).name="upholstery stitch channel";qe(t,e.darkSteel,[[1.15,2.46,p+h*.16],[1.23,2.29,p],[1.33,2.12,p-h*.13],[1.52,2.08,p-h*.17]],.014,24).name="diagonal restraint",qe(t,e.darkSteel,[[1.18,2.105,p+h*.19],[1.48,2.105,p+h*.14],[1.52,2.08,p-h*.17]],.012,20).name="lap restraint",r(e.red,[.035,.036,.04],[1.52,2.08,p-h*.17],"restraint buckle",.006),r(i,[1.51,.3,.038],[1.51,1.98,h*1.108],"door interior liner",.018),Q(t,e.darkSteel,[1.38,2.06,h*1.077],[1.74,2.06,h*1.077],.021).name="door interior grab pull"}let l=new xe(new Dt(.18,.018,10,48),e.rubber);l.rotation.y=Math.PI/2-.28,l.position.set(1.86,2.16,-.58),l.name="steering wheel",t.add(l);let f=new L(1,0,0).applyAxisAngle(new L(0,1,0),-.28),u=new L(1.86,2.16,-.58);for(let h=0;h<3;h++){let p=h*Math.PI*2/3,m=new L(0,Math.cos(p)*.155,Math.sin(p)*.155).applyAxisAngle(new L(0,1,0),-.28).add(u);Q(t,e.darkSteel,u.toArray(),m.toArray(),.013).name="steering spoke"}Q(t,e.darkSteel,u.toArray(),[2.08,2.04,-.58],.033).name="steering column",Q(t,e.edge,u.clone().addScaledVector(f,-.025).toArray(),u.clone().addScaledVector(f,.025).toArray(),.045).name="steering hub";for(let[h,p]of[[-.65,.06],[-.48,.052],[-.32,.033],[-.23,.033]])B(t,e.steel,p+.006,.009,[2.074,2.04,h],"x",p+.006,32).name="instrument bezel",B(t,e.rubber,p,.012,[2.064,2.04,h],"x",p,32).name="instrument dial",Q(t,e.lamp,[2.055,2.04,h],[2.055,2.04+p*.58,h+p*.3],.003).name="instrument needle";for(let h of[-.71,-.55,-.39]){Q(t,e.darkSteel,[2.24,o+.025,h],[2.05,o+.17,h],.014).name="pedal arm";let p=U(t,e.rubber,[.1,.025,.085],[2.05,o+.18,h],"driver pedal");p.rotation.z=-.5}r(i,[.42,.22,.2],[1.76,1.92,0],"centre console",.028),Q(t,e.darkSteel,[1.76,2.04,0],[1.72,2.18,0],.017).name="gear selector",r(e.rubber,[.06,.06,.065],[1.72,2.2,0],"selector grip",.015)}function md(n,e,t,i){if(n.userData.sharedPart==="WR-12")B_(n,e);else{let o=new ut;o.name="driver controls",n.add(o);let a=t/2-1.4,c=n.userData.roof?1.53:1.86,l=e.edge.clone();l.color.set("#79816f"),l.metalness=0,l.roughness=.85,l.name="carrier moulded interior trim";let f=e.upholstery.clone();f.name="woven seat upholstery";let u=(g,d,x,b,y=.025)=>{let S=new xe(new jt(...d,3,y),g);return S.position.set(...x),S.name=b,S.castShadow=S.receiveShadow=!0,o.add(S),S},h=c-.12,p=new It;[[a+.23,h+.012],[a+.33,h+.012],[a+.33,c+.32],[a+.05,c+.32],[a+.02,c+.17],[a+.23,c+.17]].forEach(([g,d],x)=>x?p.lineTo(g,d):p.moveTo(g,d)),p.closePath();let m=new xe(new Vt(p,{depth:1.68,steps:1,bevelEnabled:!0,bevelSize:.009,bevelThickness:.007,bevelSegments:2}),l);m.position.z=-.84,m.name="carrier supported dashboard cowl",m.castShadow=m.receiveShadow=!0,o.add(m),u(e.edge,[.035,.16,1.55],[a+.029,c+.24,0],"dashboard",.012),u(e.darkSteel,[.2,.055,.48],[a-.02,c+.34,-.43],"carrier instrument sun hood",.018);for(let g of[-1,1]){u(e.darkSteel,[.41,.105,.33],[a-.45,h+.075,g*.48],"carrier seat suspension pedestal",.018);for(let b of[h+.047,h+.076,h+.105])u(e.rubber,[.425,.01,.34],[a-.45,b,g*.48],"carrier seat suspension bellows",.004);u(f,[.49,.15,.44],[a-.43,c+.06,g*.48],"driver seat",.048);let d=u(f,[.115,.49,.4],[a-.67,c+.31,g*.48],"seat back",.032);d.rotation.z=-.1;for(let b of[-.17,.17]){u(f,[.41,.07,.065],[a-.42,c+.14,g*.48+b],"carrier cushion side bolster",.023);let y=u(f,[.105,.39,.065],[a-.615,c+.31,g*.48+b],"carrier back side bolster",.021);y.rotation.z=-.1}for(let b of[-.09,.09])qe(o,e.edge,[[a-.13,c+.137,g*.48+b],[a-.43,c+.137,g*.48+b],[a-.64,c+.16,g*.48+b]],.0025,14).name="carrier cushion stitched channel";ln(o,l,[[a-.71,c-.015],[a-.09,c-.015],[a-.09,c+.235],[a-.71,c+.235]],[],(b,y,S)=>[b,y,g*(i/2*(.75+(y-1.2)*.1/1.16)-.038-S)],.03,"carrier door interior liner");let x=g*(i/2*(.75+(c+.22-1.2)*.1/1.16)-.08);Q(o,e.darkSteel,[a-.59,c+.22,x],[a-.29,c+.22,x],.015).name="carrier interior door pull"}let _=new xe(new Dt(.18,.019,10,48),e.rubber);_.rotation.y=Math.PI/2,_.position.set(a-.15,c+.41,-.48),_.name="steering wheel",o.add(_);for(let g=0;g<3;g++){let d=g*Math.PI*2/3;Q(o,e.darkSteel,[a-.15,c+.41,-.48],[a-.15,c+.41+Math.cos(d)*.16,-.48+Math.sin(d)*.16],.012).name="steering spoke"}for(let g=0;g<4;g++)B(o,e.rubber,.034,.012,[a+.007,c+.21,-.57+g*.09],"x").name="instrument dial";U(o,e.edge,[1.5,.05,1.8],[a-.18,h,0],"cab floor");for(let g of[-1,1]){for(let d of[g*.48-.16,g*.48+.16])U(o,e.darkSteel,[.58,.045,.04],[a-.47,h+.04,d],"seat adjustment rail");u(f,[.13,.17,.32],[a-.67,c+.6,g*.48],"driver head restraint",.03);for(let d of[g*.48-.1,g*.48+.1])Q(o,e.steel,[a-.67,c+.5,d],[a-.67,c+.6,d],.013);qe(o,e.darkSteel,[[a-.6,c+.47,g*.65],[a-.55,c+.31,g*.48],[a-.32,c+.147,g*.36],[a-.13,c+.137,g*.34]],.012,24).name="diagonal restraint",U(o,e.red,[.025,.035,.045],[a-.13,c+.14,g*.34],"restraint buckle"),qe(o,e.darkSteel,[[a-.55,c+.147,g*.66],[a-.32,c+.147,g*.6],[a-.13,c+.137,g*.34]],.009,22).name="lap restraint"}Q(o,e.darkSteel,[a-.15,c+.41,-.48],[a+.07,c+.3,-.48],.026).name="steering column",B(o,e.edge,.04,.06,[a-.15,c+.41,-.48],"x",.04,24).name="steering hub";for(let g of[-.6,-.43,-.26]){Q(o,e.steel,[a+.2,h+.025,g],[a+.08,h+.13,g],.012).name="pedal arm";let d=U(o,e.rubber,[.09,.025,.07],[a+.08,h+.14,g],"driver pedal");d.rotation.z=-.45}U(o,e.edge,[.3,.16,.19],[a-.1,h+.1,.02],"gear selector console"),Q(o,e.darkSteel,[a-.1,h+.18,.02],[a-.14,c+.16,.02],.012).name="gear selector",B(o,e.rubber,.03,.045,[a-.14,c+.18,.02]).name="selector grip";for(let g=0;g<4;g++){let d=-.57+g*.09;B(o,e.steel,.037,.009,[a+.006,c+.21,d],"x",.037,32).name="instrument bezel",Q(o,e.lamp,[a-.001,c+.21,d],[a-.001,c+.23,d+.009],.0025).name="instrument needle"}}if(Vc(n,e),n.userData.sharedPart==="WR-12")return;let s=[];n.traverse(o=>{o.name==="wheel guard"&&s.push(o)});for(let o of s)o.geometry.dispose(),o.geometry=L_(),o.material=e.paint.clone(),o.material.side=At,o.name="carrier formed wheel guard",o.position.y=.62,o.position.z-=.23;Q(n,e.darkSteel,[-t*.34,.8,0],[t*.31,.8,0],.06),U(n,e.edge,[t*.56,.065,i*.48],[0,.9,0],"belly protection"),B(n,e.darkSteel,.11,.85,[-t*.22,1.18,-i*.28],"x"),qe(n,e.darkSteel,[[-t*.22,1.18,-i*.28],[-t*.38,1.18,-i*.28],[-t*.42,1.37,-i*.37]],.034);let r=-t/2;for(let o of[-1,1]){let a=u=>o*i/2*(.75+(u-1.2)*.1/1.16),c=[[r+.7,1.45],[r+.7,1.84],[r+1.26,1.84]],l=qe(n,e.darkSteel,c.map(([u,h])=>[u,h,a(h)+o*.065]),.018);l.name="carrier rear boarding handrail";for(let[u,h]of[c[0],c[2]])Q(n,e.paint,[u,h,a(h)+o*.015],[u,h,a(h)+o*.065],.025).name="carrier rear handrail hull standoff";let f=s.filter(u=>Math.sign(u.position.z+.23)===o).sort((u,h)=>u.position.x-h.position.x)[0];if(f){let u=f.position.z+.23,h=f.position.x-.688;U(n,e.paint,[.044,.045,.43],[h,.633,u],"carrier rear mudflap mounting rail"),U(n,e.rubber,[.012,.55,.416],[h,.34,u],"carrier flexible rear mudflap");for(let p of[-.15,0,.15])B(n,e.steel,.009,.025,[h+.013,.597,u+p],"x",.009,6).name="carrier mudflap clamp fastener"}}for(let o=0;o<4;o++)Q(n,e.steel,[r+.1,1.15+o*.18,-.3],[r+.1,1.15+o*.18,.3],.014)}function Bs(n,e,t,i,s){let r=i.map(({position:c=[0,0,0],rotation:l=[0,0,0]})=>t.clone().applyMatrix4(new dt().compose(new L(...c),new tn().setFromEuler(new xn(...l)),new L(1,1,1)))),o=dd(r,!1);if(r.forEach(c=>c.dispose()),t.dispose(),!o)throw new Error("Incompatible repeated wheel detail");let a=new xe(o,e);return a.name=s,a.castShadow=a.receiveShadow=!0,n.add(a),a}function Hc(n,e,t,i=24){let s=new It;s.absarc(0,0,e,0,Math.PI*2,!1);let r=new Ht;return r.absarc(0,0,n,0,Math.PI*2,!0),s.holes.push(r),new Vt(s,{depth:t,steps:1,curveSegments:i,bevelEnabled:!1})}function Vc(n,e){let t=[];n.traverse(i=>{i.name==="run-flat wheel"&&t.push(i)});for(let i of t){if(i.userData.detailed)continue;i.userData.detailed=!0;let s=i.children[0];for(let l of[...i.children].slice(1))l.removeFromParent(),l.geometry?.dispose();s.geometry.dispose();let r=[[.315,-.165],[.33,-.185],[.4,-.211],[.48,-.213],[.54,-.19],[.574,-.152],[.588,-.096],[.59,-.04],[.59,.04],[.588,.096],[.574,.152],[.54,.19],[.48,.213],[.4,.211],[.33,.185],[.315,.165],[.315,-.165]].map(([l,f])=>new ae(l,f));s.geometry=new yn(r,64),s.rotation.x=Math.PI/2,s.name="rounded tyre carcass";let o=new It;o.moveTo(-.055,-.071),o.lineTo(.018,-.071),o.lineTo(.059,-.035),o.lineTo(.043,.071),o.lineTo(-.027,.071),o.lineTo(-.063,.025),o.closePath();let a=new Vt(o,{depth:.03,steps:1,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:1});a.rotateX(Math.PI/2);let c=[];for(let l=0;l<32;l++)for(let f of[-1,1]){let u=l*Math.PI/16+f*.028;c.push({position:[Math.sin(u)*.607,Math.cos(u)*.607,f*.091],rotation:[0,f*.24,-u]})}Bs(i,e.rubber,a,c,"directional tread lug").userData.physicalLugCount=64;for(let l of[-1,1]){let f=[[.11,.08],[.15,.095],[.23,.13],[.31,.173],[.325,.19],[.334,.184],[.331,.164],[.307,.15],[.236,.109],[.15,.071],[.11,.068]].reverse().map(([d,x])=>new ae(d,x)),u=new xe(new yn(f,48),e.paint);u.rotation.x=l*Math.PI/2,u.name="dished wheel rim",i.add(u);let h=new xe(new Dt(.322,.012,8,48),e.darkSteel);h.position.z=l*.184,h.name="rim bead retaining lip",i.add(h),B(i,e.darkSteel,.11,.08,[0,0,l*.112],"z",.11,40).name="wheel hub shoulder",B(i,e.paint,.085,.07,[0,0,l*.16],"z",.085,40).name="hub cap",Bs(i,e.paint,Hc(.11,.183,.04,16),[{position:[0,0,l*.071],rotation:[l===1?0:Math.PI,0,0]}],"machined rim fastener seating flange");let p=[],m=[];for(let d=0;d<10;d++){let x=d*Math.PI/5,b=Math.sin(x)*.15,y=Math.cos(x)*.15;p.push({position:[b,y,l*.111],rotation:[l===1?0:Math.PI,0,0]}),m.push({position:[b,y,l*.134],rotation:[Math.PI/2,0,0]})}if(Bs(i,e.steel,Hc(.009,.026,.012,8),p,"seated hub fastener washer").userData.physicalWasherCount=10,Bs(i,e.steel,new Li(.015,.015,.022,6),m,"hub fastener").userData.physicalFastenerCount=10,l===-Math.sign(i.position.z)){Bs(i,e.steel,Hc(.115,.265,.005,32),[{position:[0,0,l*.054],rotation:[l===1?0:Math.PI,0,0]},{position:[0,0,l*.073],rotation:[l===1?0:Math.PI,0,0]}],"ventilated brake rotor");let d=new It;[[.125,-.03],[.255,-.03],[.255,.03],[.125,.03]].forEach(([b,y],S)=>{let E=Math.cos(y)*b,I=Math.sin(y)*b;S?d.lineTo(E,I):d.moveTo(E,I)}),d.closePath();let x=[];for(let b=0;b<24;b++)x.push({position:[0,0,l*.059],rotation:[l===1?0:Math.PI,0,b*Math.PI/12]});Bs(i,e.darkSteel,new Vt(d,{depth:.014,steps:1,bevelEnabled:!1}),x,"brake rotor radial cooling vane").userData.physicalVaneCount=24,B(i,e.darkSteel,.121,.03,[0,0,l*.066],"z",.121,32).name="rotor seated hub neck",U(i,e.darkSteel,[.12,.21,.08],[.23,0,l*.065],"brake caliper")}else B(i,e.steel,.265,.015,[0,0,l*.066],"z",.265,48).name="rim inner web";B(i,e.rubber,.014,.012,[.12,.28,l*.174],"z",.014,16).name="valve seated rubber grommet",B(i,e.steel,.006,.02,[.12,.28,l*.19],"z",.006,12).name="tyre valve",B(i,e.darkSteel,.008,.008,[.12,.28,l*.204],"z",.008,12).name="valve threaded dust cap";let g=new xe(new Dt(.47,.0035,6,48),e.rubber);g.position.z=l*.214,g.name="moulded sidewall seam",i.add(g)}}}function k_(n,e,t,i){if(t==="CAP"){let s=[];n.traverse(r=>{r.name==="crew seat cushion"&&s.push(r)});for(let r of s){let{x:o,z:a}=r.position;U(n,e.rubber,[.12,.15,.28],[o-.19,1.06,a],"head restraint");for(let c of[-1,1])Q(n,e.darkSteel,[o-.16,.73,a+c*.25],[o+.18,.73,a+c*.25],.021),B(n,e.steel,.023,.025,[o-.18,.28,a+c*.17],"z");U(n,e.amber,[.035,.045,.028],[o+.13,.51,a+.22],"belt buckle");for(let c=0;c<3;c++)U(n,e.edge,[.31,.005,.009],[o,.56,a+(c-1)*.08],"seat seam")}}else if(t==="FP"){U(n,e.darkSteel,[.39,.12,.14],[.12,.73,0],"breech cover");for(let s=0;s<7;s++)U(n,e.edge,[.018,.04,.13],[-.06+s*.045,.81,0],"receiver cooling fin");for(let s of[-1,1])U(n,e.paint,[.055,.27,.3],[-.1,.55,s*.31],"mount cheek"),B(n,e.steel,.045,.038,[-.1,.57,s*.35],"z",.045,32);for(let s=0;s<8;s++)B(n,e.amber,.018,.08,[-.24+s*.034,.58,-.4],"y",.013,12);qe(n,e.rubber,[[-.23,.38,-.37],[-.36,.48,-.3],[-.35,.64,-.17],[-.1,.72,-.11]],.018,24);for(let s=0;s<6;s++)U(n,e.steel,[.033,.007,.017],[.18+s*.038,.8,0],"accessory rail")}else if(t==="COM"){let s=i===1?3:i===6?2:1;for(let r=0;r<s;r++){let o=(r-(s-1)/2)*.4;for(let a of[-.13,.13])for(let c of[.12,.47])B(n,e.steel,.008,.012,[o+a,c,.127],"z",.008,6);for(let a=0;a<4;a++)B(n,e.steel,.013,.012,[o-.1+a*.063,.1,.13],"z"),B(n,e.darkSteel,.009,.016,[o-.1+a*.063,.1,.14],"z");U(n,e.darkSteel,[.04,.18,.023],[o+.145,.3,.126],"grip")}}else if(t==="SA"){let s=i===3?1.75:.43;for(let r of[-.105,.105]){let o=new xe(new Dt(.068,.008,8,40),e.darkSteel);o.position.set(r,s,.198),n.add(o),U(n,e.edge,[.19,.025,.18],[r,s+.14,.065],"lens sunshade");for(let a of[-.09,.09])B(n,e.steel,.006,.012,[r+a,s+.09,.123],"z",.006,6)}}else if(t==="ACC"&&[0,5].includes(i)){for(let r of[-.42,.42]){U(n,e.edge,[.09,.08,.46],[r,.14,0],"gusseted pedestal");for(let o of[-.19,.19])B(n,e.steel,.011,.02,[r,.19,o],"y",.011,6),sl(n,e.paint,[[r-.085,.085,o],[r+.085,.085,o],[r,.26,o]]).name="bearing pedestal gusset"}B(n,e.paint,.145,.15,[-.57,.34,0],"x",.145,40).name="reduction gearcase",B(n,e.darkSteel,.155,.026,[-.66,.34,0],"x",.155,40).name="gearcase joint",ni(n,e.steel,[-.678,.34,0],.123,8,"x",.009);for(let r=0;r<6;r++)B(n,e.darkSteel,.086,.012,[-.7-r*.021,.34,0],"x",.086,32).name="hydraulic motor cooling ring";B(n,e.paint,.09,.025,[-.835,.34,0],"x",.09,32).name="motor end cover";for(let r of[.21,.46])Q(n,e.darkSteel,[-.42,r,-.235],[.42,r,-.235],.018).name="rear frame tie rod";U(n,e.paint,[.21,.065,.12],[-.23,.602,.12],"hydraulic valve block");for(let r of[-.3,-.16])Q(n,e.darkSteel,[-.42,.49,.12],[r,.57,.12],.013).name="valve block support",B(n,e.steel,.017,.03,[r,.65,.12]).name="valve port";for(let[r,o]of[[-.3,-.74],[-.16,-.79]])qe(n,e.rubber,[[r,.65,.12],[r,.68,.12],[-.52,.69,.1],[o,.52,.065],[o,.38,.065]],.013,40).name="motor hydraulic supply";B(n,e.steel,.02,.055,[0,.235,.455]).name="rope ferrule";let s=new xe(new Dt(.035,.007,8,28),e.steel);s.rotation.y=Math.PI/2,s.position.set(0,.22,.46),s.name="rope eye thimble",n.add(s),B(n,e.darkSteel,.027,.025,[-.068,.122,.49],"z",.027,20).name="hook latch pivot"}}var z_=Object.freeze(["COMBAT","RECCE","TROOP","COMMAND","RECOVERY","MINE"]),_d=Object.freeze([...["ACC","CAP","COM","FP","MOB","PRO","SA"].flatMap(n=>"ABCDEFG".split("").map(e=>`${n}-${e}`)),..."ABCDEFGHIJKLMNOPQRSTU".split("").map(n=>`SE-${n}`),"TRAIN-CAP"]);function Et(n){let e=new ut;return e.name=n,e}function ol(n,e,t,i,s=!1){let o=Et("supported crew seat");o.position.set(t,.4,i),n.add(o);let a=e.upholstery.clone();a.name="woven seat upholstery";let c=(u,h,p,m,_)=>{let g=new xe(new jt(...h,3,m),u);return g.position.set(...p),g.name=_,o.add(g),g};if(s){U(o,e.darkSteel,[.48,.055,.36],[.01,.148,0],"crew seat floor mounting cassette");for(let u of[-1,1]){U(o,e.edge,[.49,.035,.07],[.01,.128,u*.145],"crew seat bolted floor rail");for(let h of[-.17,.19])B(o,e.steel,.012,.023,[h,.157,u*.145],"y",.012,6).name="seat rail retaining fastener";U(o,e.edge,[.36,.18,.035],[0,.25,u*.145],"seat suspension side cheek");for(let h of[-.13,.13])B(o,e.steel,.021,.044,[h,.25,u*.165],"z",.021,12).name="suspension pivot"}U(o,e.darkSteel,[.3,.14,.22],[0,.25,0],"seat suspension bellows");for(let u of[.197,.232,.267,.302])U(o,e.rubber,[.325,.018,.25],[0,u,0],"suspension bellows convolution");U(o,e.edge,[.41,.047,.33],[0,.338,0],"suspension upper cradle");for(let u of[-1,1])U(o,e.edge,[.075,.28,.055],[-.22,.515,u*.135],"connected seat back support"),B(o,e.steel,.038,.052,[-.21,.4,u*.19],"z",.038,20).name="seat back recline housing"}else for(let u of[-1,1]){U(o,e.darkSteel,[.49,.035,.035],[.01,.15,u*.15],"seat adjustment rail");for(let h of[-.16,.19])U(o,e.edge,[.065,.04,.09],[h,.105,u*.15],"seat floor foot"),B(o,e.steel,.009,.015,[h,.134,u*.15],"y",.009,6),Q(o,e.steel,[h,.17,u*.15],[h-.04,.35,u*.15],.018)}U(o,e.edge,[.44,.045,.4],[0,.37,0],"seat suspension pan"),c(a,[.43,.11,.36],[.025,.45,0],.045,"crew seat cushion");for(let u of[-1,1]){let h=new xe(new hr(.038,.31,6,14),a);h.rotation.z=Math.PI/2,h.position.set(.015,.505,u*.17),h.name="cushion side bolster",o.add(h)}let l=c(e.edge,[.074,.49,.38],[-.215,.77,0],.025,"seat back shell");l.rotation.z=.12;let f=c(a,[.095,.46,.32],[-.16,.78,0],.035,"contoured back cushion");if(f.rotation.z=.12,s){let u=a.clone();u.color.multiplyScalar(.82),u.roughness=.93,u.name="crew seat woven center insert";let h=c(u,[.018,.335,.205],[-.108,.782,0],.008,"crew seat contoured back insert");h.rotation.z=.12,c(u,[.295,.018,.235],[.045,.508,0],.008,"crew seat cushion center insert");for(let p of[-1,1])qe(o,e.darkSteel,[[-.08,.632,p*.065],[-.098,.782,p*.065],[-.117,.932,p*.065]],.0018,18).name="seat back stitched channel",qe(o,e.darkSteel,[[-.087,.52,p*.075],[.045,.52,p*.075],[.175,.52,p*.075]],.0018,18).name="seat cushion stitched channel"}for(let u of[-1,1]){let h=c(a,[.1,.39,.075],[-.135,.77,u*.16],.03,"back side bolster");h.rotation.z=.12,Q(o,e.steel,[-.225,.99,u*.09],[-.225,1.08,u*.09],.009)}c(a,[.115,.15,.28],[-.225,1.085,0],.04,"adjustable head restraint");for(let u of[.66,.82])qe(o,e.edge,[[-.111-(u-.78)*.12,u,-.11],[-.108-(u-.78)*.12,u,0],[-.111-(u-.78)*.12,u,.11]],.003,16).name="back upholstery seam";qe(o,e.darkSteel,[[-.14,.98,-.125],[-.095,.82,-.055],[-.075,.65,.05],[.005,.518,.1],[.1,.513,.115]],.012,24),qe(o,e.darkSteel,[[.08,.515,-.19],[.1,.518,0],[.08,.515,.19]],.013,20),c(e.steel,[.035,.024,.042],[.1,.526,.065],.006,"restraint buckle"),U(o,e.red,[.018,.007,.025],[.105,.542,.065],"restraint release");for(let u of[-1,1])Q(o,e.edge,[-.14,.38,u*.21],[-.14,.65,u*.21],.014),c(a,[.29,.05,.055],[.005,.65,u*.225],.018,"supported armrest");for(let u of o.children)u.position.y-=.4;return o}function H_(n,e){let t=Et("crew bay"),i=[6,6,4,8,5,5,4][e],s=[2.65,3.05,2.05,3.25,2.2,2.5,2.1][e],r=e===6?1.26:1.47,o=Math.ceil(i/2),a=(s-.65)/o,c=s/2,l=r/2,f=e===4||e===6;U(t,n.paint,[s,.1,r],[0,.055,0],"crew module floor");for(let u of[-1,1])U(t,n.edge,[s-.12,.055,.075],[0,.105,u*(l-.06)],"floor edge rail"),U(t,n.darkSteel,[s-.12,.06,.08],[0,.035,u*(l-.13)],"module lower mounting rail");for(let u of[-c+.15,c-.15])for(let h of[-1,1])U(t,n.edge,[.19,.055,.16],[u,.023,h*(l-.1)],"module chassis mounting foot"),B(t,n.steel,.015,.025,[u,.065,h*(l-.1)],"y",.015,6);for(let u=0;u<o;u++){let h=(u-(o-1)/2)*a;U(t,n.darkSteel,[.065,.04,r-.16],[h,.104,0],"seat row crossmember")}for(let u=0;u<i;u++){let h=Math.floor(u/2),p=u===i-1&&i%2;ol(t,n,(h-(o-1)/2)*a,p?0:(u%2?1:-1)*r*.25)}if(e!==4){for(let u of[-c+.05,c-.05]){let h=[[-l,.12],[l,.12],[l,1.12],[l-.13,1.3],[-l+.13,1.3],[-l,1.12]],p=tt(-l+.07,.18,l-.07,1.23,.065);Ye(t,n.paint,h,[p],(m,_,g)=>[u+g,_,m]).name="hull shell";for(let m of[-1,1])Q(t,n.steel,[u,.24,m*(l-.04)],[u,.6,m*(l-.04)],.015).name="boarding grab handle"}for(let u of[-1,1])if(U(t,n.edge,[s-.12,.065,.075],[0,1.28,u*(l-.1)],"roof perimeter rail"),f)Q(t,n.steel,[-c+.05,.56,u*l],[c-.05,.56,u*l],.019).name="open module side rail";else{let h=e===5?1.1:.62,p=[[-c,.13],[c,.13],[c-.06,h],[-c+.06,h]],m=[];if(e===5)for(let _ of[-s*.25,s*.25])m.push(tt(_-.23,.79,_+.23,1,.035));if(Ye(t,n.paint,p,m,(_,g,d)=>[_,g,u*(l-d)]).name="hull shell",e===5)for(let _ of[-s*.25,s*.25])U(t,n.rubber,[.48,.25,.016],[_,.895,u*(l+.008)],"window gasket"),U(t,n.glass,[.43,.2,.017],[_,.895,u*(l+.018)],"protected crew glazing");for(let _ of[-c+.12,c-.12])for(let g of[.22,h-.08])B(t,n.steel,.009,.018,[_,g,u*(l+.028)],"z",.009,6)}for(let u of[-c+.17,c-.17])U(t,n.edge,[.065,.055,r-.14],[u,1.28,0],"roof crossmember");if(!f){for(let u of[-1,1])U(t,n.paint,[s-.16,.047,r*.22],[0,1.31,u*r*.34],"hull shell");U(t,n.paint,[s-.16,.045,r*.3],[0,1.32,0],"hull shell")}}else for(let u of[-1,1])for(let h of[-c+.15,c-.15])U(t,n.steel,[.08,.07,.075],[h,.13,u*(l-.1)],"removable pallet latch"),Q(t,n.darkSteel,[h-.035,.18,u*(l-.1)],[h+.035,.18,u*(l-.1)],.012);return U(t,n.edge,[.15,.05,r-.18],[c+.03,.09,0],"boarding threshold"),t}function V_(n,e,t,i,s="x",r="cast transmission casing"){let o=new yn(t.map(([c,l])=>new ae(c,l)),40),a=new xe(o,e);return a.position.set(...i),a.rotation[s==="x"?"z":"x"]=Math.PI/2,a.name=r,n.add(a),a}function xd(n,e){let t=Et("inline diesel power pack"),i=e===5,s=n.castSteel||n.darkSteel,r=n.pressedSteel||n.steel,o=(d,x,b,y,S)=>{let E=new xe(new jt(...x,3,y),d);return E.position.set(...b),E.name=S,E.castShadow=E.receiveShadow=!0,t.add(E),E},a=(d,x,b,y,S,E=[])=>{let I=new It;d.forEach(([T,R],P)=>P?I.lineTo(T,R):I.moveTo(T,R)),I.closePath();for(let T of E){let R=new Ht;T.forEach(([P,F],k)=>k?R.lineTo(P,F):R.moveTo(P,F)),R.closePath(),I.holes.push(R)}let v=new Vt(I,{depth:x,steps:1,bevelEnabled:!0,bevelSize:.009,bevelThickness:.007,bevelSegments:3}),w=v.attributes.position;for(let T=0;T<w.count;T++)w.setXYZ(T,b+w.getZ(T),w.getY(T),w.getX(T));v.computeVertexNormals();let C=y.clone();C.side=At;let D=new xe(v,C);return D.name=S,D.castShadow=D.receiveShadow=!0,t.add(D),D},c=(d,x,b,y)=>{let S=qe(t,d,x,b,32);return S.name=y,S},l=(d,x,b,y="z",S=.042)=>{B(t,s,S,.02,[d,x,b],y,S,24).name="manifold seated port flange"};for(let d of[-.38,.38])U(t,n.edge,[2.17,.09,.085],[-.2,.11,d],"power pack skid rail");for(let d of[-1.08,.77])U(t,n.edge,[.1,.07,e===4?1.35:.85],[d,.13,e===4?-.24:0],"skid crossmember");a([[-.22,.31],[-.26,.4],[-.25,.58],[-.205,.7],[.205,.7],[.25,.58],[.26,.4],[.22,.31]],.96,-.48,n.paint,"cast crankcase with tapered shoulders",[[[-.18,.345],[.18,.345],[.21,.41],[.2,.58],[.165,.677],[-.165,.677],[-.2,.58],[-.21,.41]]]),a([[-.215,.315],[-.215,.265],[-.145,.195],[.145,.195],[.215,.265],[.215,.315]],.85,-.425,s,"pressed deep oil sump",[[[-.185,.298],[.185,.298],[.128,.215],[-.128,.215]]]),o(r,[.91,.025,.46],[0,.317,0],.01,"continuous sump sealing flange"),B(t,n.steel,.018,.026,[.27,.198,0],"y",.018,6).name="seated sump drain plug",o(n.paint,[1,.175,.49],[0,.7875,0],.025,"cast cylinder head with port band"),o(n.darkSteel,[1.018,.019,.455],[0,.881,0],.006,"rocker cover continuous gasket"),o(n.edge,[.99,.126,.438],[0,.948,0],.03,"formed crowned rocker cover");for(let d of[-1,1])o(n.edge,[.92,.019,.02],[0,.976,d*.204],.007,"rocker cover pressed perimeter return");for(let d of[-.4,-.24,-.08,.08,.24,.4])o(n.edge,[.055,.013,.31],[d,1.011,0],.006,"rocker cover pressed transverse stiffener");B(t,n.darkSteel,.037,.029,[.29,1.024,0],"y",.037,24).name="rocker cover seated oil filler cap";for(let d of[-.31,.31]){let x=new xe(new Dt(.024,.007,8,20),n.steel);x.position.set(d,.983,.216),x.name="head lifting eye seated tab",t.add(x),U(t,n.edge,[.055,.035,.02],[d,.955,.211],"head lifting eye foot")}for(let d of[-.4,-.24,-.08,.08,.24,.4]){for(let x of[-1,1]){a([[x*.237,.365],[x*.272,.405],[x*.257,.62],[x*.218,.69],[x*.211,.69],[x*.237,.4]],.032,d-.016,n.paint,"cast crankcase buttress"),o(s,[.122,.16,.024],[d,.535,x*.254],.018,"recessed crankcase service cover");for(let b of[.48,.59])B(t,n.steel,.007,.012,[d,b,x*.272],"z",.007,6).name="service cover captive fastener";B(t,n.darkSteel,.009,.022,[d,.902,x*.19],"y",.009,6).name="rocker cover seated fastener"}l(d,.79,.255),l(d,.8,-.255),c(s,[[d,.79,.25],[d,.775,.305],[d+.028,.735,.375]],.033,"exhaust branch into collector"),c(n.paint,[[d,.8,-.25],[d,.815,-.3],[d,.825,-.345]],.036,"intake runner into plenum")}o(n.paint,[.98,.115,.105],[0,.835,-.355],.045,"continuous intake plenum"),c(s,[[-.44,.735,.375],[0,.735,.375],[.43,.735,.375]],.046,"continuous cast exhaust collector");let f=(d,x,b)=>{B(t,x,.104,.09,[d,.755,.49],"x",.117,32).name=b+" backing";let y=[];for(let S=0;S<=40;S++){let E=S/40*Math.PI*2,I=.094+.026*S/40;y.push([d,.755+Math.cos(E)*I,.49+Math.sin(E)*I])}c(x,y,.037,b+" scroll")};f(-.205,s,"turbine housing"),f(-.365,r,"compressor housing"),B(t,n.steel,.057,.12,[-.285,.755,.49],"x",.057,24).name="turbo centre bearing",c(s,[[-.06,.735,.375],[-.16,.79,.398],[-.205,.848,.46]],.043,"collector to turbine inlet"),c(s,[[-.205,.76,.612],[-.205,.91,.65],[-.205,1.075,.65]],.046,"supported exhaust riser"),B(t,n.steel,.053,.012,[-.205,1.052,.65],"y",.053,24).name="exhaust riser seated clamp",Q(t,n.edge,[-.205,.89,.65],[-.205,.85,.25],.013).name="exhaust riser support bracket",c(n.steel,[[-.365,.895,.49],[-.1,1.1,.44],[.32,1.09,.3],[.4,1.02,-.16],[.35,.835,-.355]],.055,"compressor delivery to intake plenum");for(let[d,x,b]of[[-.1,1.1,.44],[.32,1.09,.3]])B(t,n.darkSteel,.063,.043,[d,x,b],"x",.063,24).name="charge pipe coupling";B(t,n.darkSteel,.122,.44,[-.085,1.18,-.39],"x",.122,32).name="air cleaner cylindrical shell";for(let d of[-.315,.145])B(t,n.edge,.13,.018,[d,1.18,-.39],"x",.13,32).name="air cleaner retained end cap";for(let d of[-.22,.055])B(t,n.steel,.125,.018,[d,1.18,-.39],"x",.125,32).name="air cleaner mounting band",Q(t,n.edge,[d,1.07,-.39],[d,.87,-.355],.018).name="air cleaner plenum bracket";c(n.rubber,[[-.315,1.18,-.39],[-.59,1.16,-.37],[-.61,.96,.23],[-.52,.755,.49],[-.412,.755,.49]],.061,"air cleaner outlet to compressor inlet"),c(n.steel,[[-.275,.745,.49],[-.27,.56,.34],[-.27,.39,.24]],.01,"turbo oil return into crankcase"),V_(t,s,[[0,-.025],[.23,-.025],[.275,0],[.28,.09],[.26,.17],[.225,.24],[0,.24]],[-.48,.425,0],"x","cast flywheel and transmission casing"),o(s,[.405,.36,.4],[-.915,.505,0],.045,"transmission main gear case"),o(s,[.37,.1,.32],[-.895,.313,0],.025,"transmission lower oil pan"),o(r,[.33,.024,.34],[-.905,.699,0],.009,"transmission bolted top service closure");for(let d of[-1,1]){o(s,[.33,.235,.026],[-.915,.507,d*.207],.025,"transmission removable side cover");for(let x of[-1.065,-.905,-.765])for(let b of[.41,.61])B(t,n.steel,.009,.023,[x,b,d*.224],"z",.009,6).name="transmission side cover seated fastener";for(let x of[.37,.445,.535,.63])U(t,s,[.36,.017,.026],[-.915,x,d*.197],"transmission longitudinal casting rib")}for(let d of[-1.085,-.965,-.845,-.745]){U(t,s,[.02,.34,.028],[d,.505,-.192],"transmission vertical casting web"),U(t,s,[.02,.34,.028],[d,.505,.192],"transmission vertical casting web");for(let x of[-1,1])B(t,n.steel,.008,.017,[d,.714,x*.125],"y",.008,6).name="transmission top cover seated fastener"}for(let d of[-.515,-.715,-1.115]){let x=d>-.74?.425:.51;B(t,r,d>-.74?.275:.17,.02,[d,x,0],"x",d>-.74?.275:.17,40).name="transmission machined split flange",ni(t,n.steel,[d-.015,x,0],d>-.74?.245:.145,8,"x",.009)}B(t,s,.108,.09,[-1.14,.51,0],"x",.108,32).name="transmission rear output bearing housing",B(t,n.steel,.083,.08,[-1.19,.51,0],"x").name="transmission output coupling",B(t,n.steel,.012,.017,[-.89,.708,0],"y",.012,6).name="transmission service filler plug",o(n.darkSteel,[.085,.82,.69],[.8,.665,0],.008,"radiator dark fin substrate");for(let d of[-.389,.389])o(r,[.135,.88,.075],[.8,.665,d],.018,"radiator formed side tank");for(let d of[.215,1.115])o(r,[.135,.08,.84],[.8,d,0],.017,"radiator folded header");for(let d=0;d<36;d++)U(t,r,[.012,.8,.005],[.849,.665,-.333+d*.019],"radiator vertical cooling passage");for(let d=0;d<28;d++)U(t,s,[.008,.005,.68],[.856,.273+d*.029,0],"radiator transverse fin fold");for(let d of[-.388,.388]){U(t,n.edge,[.17,.07,.13],[.8,.178,d],"radiator bolted skid foot");for(let x of[.3,1.04])B(t,n.steel,.01,.019,[.879,x,d],"x",.01,6).name="radiator frame fastener"}let u=new xe(new Dt(.291,.019,8,48),n.darkSteel);u.rotation.y=Math.PI/2,u.position.set(.691,.665,0),u.name="open circular cooling fan shroud",t.add(u);for(let d of[-1,1])Q(t,n.darkSteel,[.7,.665,d*.291],[.754,.665,d*.34],.023).name="shroud to radiator support";B(t,n.darkSteel,.063,.1,[.651,.665,0],"x",.063,32).name="cooling fan driven hub";for(let d=0;d<7;d++){let x=d*Math.PI*2/7,b=new It;b.moveTo(.045,-.025),b.quadraticCurveTo(.17,-.055,.267,-.01),b.lineTo(.26,.04),b.quadraticCurveTo(.16,.023,.045,.025),b.closePath();let y=new Vt(b,{depth:.013,bevelEnabled:!0,bevelSize:.003,bevelThickness:.002,bevelSegments:2}),S=y.attributes.position;for(let v=0;v<S.count;v++){let w=S.getX(v),C=S.getY(v),D=S.getZ(v);S.setXYZ(v,.647+D+w*.035,.665+Math.cos(x)*w-Math.sin(x)*C,Math.sin(x)*w+Math.cos(x)*C)}y.computeVertexNormals();let E=n.darkSteel.clone();E.side=At;let I=new xe(y,E);I.name="swept cooling fan blade",I.castShadow=!0,t.add(I)}o(n.paint,[.075,.38,.34],[.516,.515,0],.035,"front timing gear housing"),Q(t,s,[.516,.665,0],[.652,.665,0],.041).name="water pump and fan shaft",c(n.rubber,[[.43,.84,.19],[.59,.96,.29],[.64,.965,.389],[.72,.965,.389],[.8,.965,.389]],.04,"upper coolant hose seated into side tank"),c(n.rubber,[[.48,.4,.16],[.6,.26,.29],[.64,.285,.389],[.72,.285,.389],[.8,.285,.389]],.037,"lower coolant hose seated into side tank");for(let d of[.965,.285])B(t,r,.047,.09,[.7275,d,.389],"x",.047,24).name="radiator coolant inlet neck",B(t,n.steel,.049,.024,[.705,d,.389],"x",.049,24).name="coolant hose seated clamp";B(t,r,.08,.135,[.493,.462,-.245],"x",.08,28).name="alternator ventilated body";for(let d=0;d<10;d++){let x=d*Math.PI/5;Q(t,s,[.44,.462+Math.cos(x)*.078,-.245+Math.sin(x)*.078],[.546,.462+Math.cos(x)*.078,-.245+Math.sin(x)*.078],.008).name="alternator longitudinal cooling rib"}U(t,n.edge,[.16,.05,.16],[.435,.365,-.205],"alternator seated mounting bracket");let h=(d,x,b)=>{B(t,n.darkSteel,b,.029,[.575,d,x],"x",b,32).name="accessory drive pulley",B(t,n.steel,b*.34,.034,[.579,d,x],"x",b*.34,24).name="pulley seated hub"};Q(t,s,[.54,.425,0],[.58,.425,0],.043).name="crank pulley shaft into timing housing",h(.425,0,.106),h(.665,0,.075),h(.462,-.245,.064),c(n.rubber,[[.595,.322,0],[.595,.34,-.195],[.595,.43,-.31],[.595,.515,-.272],[.595,.739,-.024],[.595,.714,.056],[.595,.431,.106],[.595,.322,0]],.009,"continuous accessory drive belt"),o(s,[.16,.09,.17],[.11,.57,-.285],.02,"oil filter connected housing"),B(t,n.lamp,.059,.19,[.11,.434,-.285],"y",.059,28).name="replaceable oil filter canister",B(t,n.steel,.062,.017,[.11,.529,-.285],"y",.062,24).name="oil filter sealing rim",Q(t,n.steel,[.34,.39,.24],[.34,.68,.32],.005).name="oil dipstick seated guide",B(t,n.amber,.02,.009,[.34,.69,.325],"z",.02,16).name="dipstick service handle";for(let d of[-.34,.31])for(let x of[-1,1])U(t,n.edge,[.14,.03,.13],[d,.166,x*.38],"engine skid mounting shoe"),B(t,n.rubber,.048,.072,[d,.217,x*.38],"y",.048,24).name="engine mounting isolator",a([[x*.235,.36],[x*.42,.258],[x*.42,.25],[x*.33,.25],[x*.235,.29]],.115,d-.0575,n.paint,"cast engine mounting ear"),B(t,n.steel,.009,.043,[d,.266,x*.38],"y",.009,6).name="engine mount seated retaining bolt";let p=t.children.length;B(t,n.steel,.023,1.025,[0,.425,0],"x",.023,32).name="engine crankshaft main axis";for(let d=0;d<6;d++){let x=-.4+d*.16,b=[0,Math.PI*2/3,Math.PI*4/3,Math.PI*4/3,Math.PI*2/3,0][d],y=.425+Math.cos(b)*.031,S=Math.sin(b)*.031,E=.605+Math.cos(b)*.031,I=new It;I.absarc(0,0,.065,0,Math.PI*2,!1);let v=new Ht;v.absarc(0,0,.058,0,Math.PI*2,!0),I.holes.push(v);let w=new Vt(I,{depth:.255,steps:1,bevelEnabled:!1,curveSegments:24}),C=w.attributes.position;for(let R=0;R<C.count;R++)C.setXYZ(R,x+C.getX(R),.448+C.getZ(R),C.getY(R));w.computeVertexNormals();let D=r.clone();D.side=At;let T=new xe(w,D);T.name="engine cylinder liner",T.userData.inspectionKey="engine:block",t.add(T),B(t,n.steel,.054,.066,[x,E,0],"y",.054,32).name="engine piston crown and skirt";for(let R of[E+.018,E+.027])B(t,n.darkSteel,.055,.004,[x,R,0],"y",.055,32).name="piston compression ring";B(t,n.steel,.014,.102,[x,E-.014,0],"z",.014,24).name="piston seated wrist pin",Q(t,r,[x,y,S],[x,E-.014,0],.013).name="engine connecting rod",B(t,n.steel,.019,.105,[x,y,S],"x",.019,24).name="crankshaft offset crankpin";for(let R of[-.055,.055])Q(t,s,[x+R,.425,0],[x+R,y,S],.035).name="crankshaft connected web",B(t,s,.049,.023,[x+R,.425-.016*Math.cos(b),-.016*Math.sin(b)],"x",.049,24).name="crankshaft counterweight"}for(let d of[-.48,-.32,-.16,0,.16,.32,.48])B(t,r,.036,.03,[d,.425,0],"x",.036,24).name="crankshaft main bearing journal",U(t,s,[.035,.055,.17],[d,.3815,0],"crankshaft bearing cap");B(t,n.steel,.215,.035,[-.525,.425,0],"x",.215,40).name="engine crankshaft seated flywheel",B(t,n.steel,.024,.59,[-.8175,.425,0],"x",.024,24).name="transmission connected input shaft",B(t,n.steel,.027,.405,[-.9875,.51,0],"x",.027,24).name="transmission connected output shaft";for(let[d,x]of[[.425,0],[.51,Math.PI/16]]){B(t,r,.034,.055,[-.885,d,0],"x",.034,32).name="transmission illustrative meshing gear";for(let b=0;b<16;b++){let y=b*Math.PI/8+x,S=U(t,r,[.055,.014,.011],[-.885,d+Math.cos(y)*.039,Math.sin(y)*.039],"transmission gear seated tooth");S.rotation.x=y}}for(let d of t.children.slice(p))d.userData.inspectionKey??="engine:rotating";let m=t.children.length;Q(t,n.steel,[-.47,.933,0],[.47,.933,0],.012).name="head supported rocker shaft";for(let d of[-.4,-.24,-.08,.08,.24,.4]){U(t,s,[.028,.041,.054],[d,.912,0],"rocker shaft seated pedestal");for(let x of[-1,1]){B(t,n.steel,.007,.16,[d,.841,x*.08],"y",.007,16).name="head valve stem",B(t,n.steel,.025,.009,[d,.765,x*.08],"y",.025,24).name="head valve seated disc";let b=[];for(let y=0;y<=40;y++){let S=y/40*Math.PI*10;b.push([d+Math.cos(S)*.013,.866+y/40*.04,x*.08+Math.sin(S)*.013])}c(n.darkSteel,b,.003,"valve retained compression spring"),Q(t,r,[d,.934,0],[d,.923,x*.08],.012).name="rocker arm on shaft and valve"}}for(let d of t.children.slice(m))d.userData.inspectionKey="engine:head";c(n.steel,[[-.42,.65,-.288],[.42,.65,-.288]],.012,"supported fuel common rail");for(let d of[-.34,.31])Q(t,n.edge,[d,.65,-.288],[d,.6,-.24],.01).name="fuel rail block support";o(s,[.11,.14,.1],[.33,.583,-.265],.018,"seated fuel metering pump"),c(n.rubber,[[.11,.57,-.285],[.22,.565,-.3],[.33,.583,-.265]],.011,"filter housing to fuel metering pump"),c(n.steel,[[.33,.583,-.265],[.35,.65,-.288]],.011,"fuel metering pump to common rail");for(let d of[-.4,-.24,-.08,.08,.24,.4])B(t,s,.016,.034,[d,.881,-.075],"y",.016,20).name="head seated fuel injector",c(n.steel,[[d,.65,-.288],[d,.73,-.29],[d,.89,-.19],[d,.895,-.075]],.005,"common rail feed into injector");if(e===4){o(n.paint,[.76,.68,.4],[-.54,.535,-.78],.05,"long range fuel reservoir");for(let d of[-.79,-.29])U(t,n.darkSteel,[.04,.7,.42],[d,.535,-.78],"fuel tank restraint"),U(t,n.edge,[.18,.06,.45],[d,.17,-.78],"fuel tank supported saddle");B(t,n.steel,.045,.04,[-.54,.889,-.78],"y",.045,24).name="fuel reservoir filler cap",c(n.rubber,[[-.28,.25,-.62],[-.18,.33,-.5],[.11,.5,-.35],[.11,.57,-.285]],.014,"reservoir fuel supply seated at filter housing")}let _=new Map,g=new Set(["cast crankcase with tapered shoulders","pressed deep oil sump","continuous sump sealing flange","cast cylinder head with port band","formed crowned rocker cover","cast flywheel and transmission casing","transmission main gear case","transmission lower oil pan","transmission removable side cover","transmission bolted top service closure","transmission machined split flange"]);for(let d of[...t.children]){g.has(d.name)&&(d.userData.cutawayShell=!0);let x=d.userData.inspectionKey;if(!x){let b=d.name;x=/transmission/.test(b)?"engine:transmission":/sump/.test(b)?"engine:sump":/rocker|head lifting|head seated fuel/.test(b)||/cylinder head|manifold seated port|intake runner|exhaust branch/.test(b)?"engine:head":/radiator|cooling fan|shroud|coolant|water pump/.test(b)?"engine:cooling":/air cleaner|compressor housing|compressor delivery|charge pipe/.test(b)?"engine:intake":/turbine|turbo|exhaust/.test(b)?"engine:exhaust":/skid|mounting shoe|mounting isolator|mount seated/.test(b)?"engine:skid":/fuel|filter|dipstick|reservoir|alternator|pulley|accessory|timing/.test(b)?"engine:services":"engine:block"}if(!_.has(x)){let b=Et(x);b.userData.inspectionKey=x,_.set(x,b),t.add(b)}_.get(x).add(d)}return i&&t.scale.setScalar(.78),t}function rl(n,{wheels:e=!1,light:t=!1,adaptive:i=!1,springs:s=!1,widthOverride:r=null}={}){let o=Et("connected drive axle"),a=r??(t?1.3:1.65),c=.44,l=t?.13:.19,f=new xe(new mi(l,32,20),n.paint);f.scale.set(1.18,1,1.05),f.position.set(0,c,0),f.name="cast differential housing",o.add(f),B(o,n.darkSteel,l*.9,.055,[l*.8,c,0],"x",l*.9,32),B(o,n.steel,.065,.17,[l*1.2,c,0],"x");for(let u of[-1,1]){Q(o,n.paint,[0,c,u*.07],[0,c,u*a*.43],t?.043:.068);for(let p=0;p<5;p++)B(o,n.rubber,t?.06:.09,.045,[0,c,u*(.24+p*.05)],"z",t?.06:.09,24);if(B(o,n.steel,.16,.045,[0,c,u*a*.47],"z",.16,32),B(o,n.darkSteel,.1,.1,[0,c,u*a*.46],"z"),e){let p=Os(n);p.scale.setScalar(t?.56:.76),p.position.set(0,c,u*a*.49),o.add(p)}else ni(o,n.steel,[0,c,u*(a*.47+.03)],.115,8,"z",.014);let h=u*a*.29;if(Q(o,n.edge,[-.28,c+.03,h],[.12,c+.41,h],t?.025:.043),Q(o,n.edge,[.28,c+.03,h],[.12,c+.41,h],t?.025:.043),U(o,n.edge,[.16,.095,.15],[.12,c+.43,h],"suspension upper mount"),s){Q(o,n.steel,[-.1,c+.03,h],[-.1,c+.58,h],.022);let p=[];for(let m=0;m<=144;m++){let _=m/144*Math.PI*16;p.push([-.1+Math.cos(_)*.074,c+.09+m/144*.4,h+Math.sin(_)*.074])}qe(o,n.darkSteel,p,.015,144),B(o,n.amber,.034,.32,[.12,c+.18,h]),Q(o,n.steel,[.12,c+.34,h],[.12,c+.61,h],.018)}}Q(o,n.darkSteel,[-.21,c-.07,-a*.42],[-.21,c-.07,a*.42],.023);for(let u of[-1,1])Q(o,n.darkSteel,[-.21,c-.07,u*a*.42],[0,c,u*a*.45],.023);if(i){U(o,n.steel,[.37,.1,.34],[0,c+.23,0],"traction controller");for(let u of[-1,1])qe(o,n.rubber,[[0,c+.23,u*.12],[.19,c+.18,u*.2],[.14,c-.15,u*.42],[0,c,u*a*.45]],.015,28)}return o}function G_(n,e){if(e!==2)return rl(n,{wheels:e===1,adaptive:e===6,springs:e===1});let t=rl(n,{wheels:!0,light:!0,springs:!0});t.name="lightweight running gear";for(let i of[-.3,.3])U(t,n.paint,[.075,.09,.83],[i,.22,0],"lightweight cradle crossmember");for(let i of[-.4,.4])U(t,n.paint,[.67,.09,.07],[0,.22,i],"lightweight cradle side rail");return t}function W_(n){return rl(n,{springs:!0})}function yd(n,e){let t=Et("weapon station"),i=Et("station mounting ring"),s=Et("station shield and cradle"),r=Et("station barrel exterior");s.position.y=.5,r.position.set(.45,.7,0),t.add(i,s,r);let o=[[.405,-.01],[.51,-.01],[.51,.035],[.47,.055],[.43,.19],[.405,.2],[.34,.2],[.34,.15],[.395,.02],[.405,-.01]].map(d=>new ae(...d)),a=new xe(new yn(o,64),n.paint);a.name="station hollow mounting ring",a.castShadow=a.receiveShadow=!0,i.add(a),a.userData.cutawayShell=!0;for(let d=0;d<12;d++){let x=d*Math.PI/6,b=Math.cos(x)*.475,y=Math.sin(x)*.475;B(i,n.steel,.013,.02,[b,.045,y],"y",.013,6).name="station flange seated fastener"}let c=new xe(new Dt(.373,.017,8,64),n.darkSteel);c.rotation.x=Math.PI/2,c.position.y=.2,c.name="station ring bearing seal",i.add(c);for(let d of[-1,1])U(s,n.castSteel,[.6,.06,.14],[0,-.27,d*.265],"station cradle bearing strip");let l=e===6?.53:e===2?.45:.36,f=e===4,u=[[-.42,-.24],[.34,-.24],[.38,.12],[.18,.47],[-.22,.52],[-.46,.19]];for(let d of[-1,1]){Ye(s,n.castSteel,[[-.24,-.24],[.26,-.24],[.26,.3],[.11,.37],[-.2,.3]],[],(y,S,E)=>[y,S,d*(.22+E)]).name="station structural trunnion cheek";let x=B(s,n.steel,.085,.105,[.1,.2,d*.265],"z",.085,40);x.name="station seated trunnion pivot";let b=B(s,n.edge,.108,.026,[.1,.2,d*.33],"z",.108,40);if(b.name="station retained trunnion cap",ni(s,n.steel,[.1,.2,d*.347],.077,6,"z",.009),!f){let y=Ye(s,n.paint,u,[],(S,E,I)=>[S,E,d*(l+I)]);y.name="station formed side shield",y.userData.cutawayShell=!0;for(let S of[-.2,.23])U(s,n.edge,[.06,.065,l-.245],[S,-.14,d*(l+.245)/2],"station shield retaining standoff");for(let[S,E]of[[-.34,-.16],[.25,-.15],[.2,.16],[-.19,.43],[-.4,.13]])B(s,n.steel,.008,.014,[S,E,d*(l+.052)],"z",.008,6).name="station shield seated screw"}}U(s,n.castSteel,[.43,.075,.47],[.025,-.195,0],"station connected cradle crossmember");let h=new xe(new jt(.53,.17,.33,3,.035),n.darkSteel);h.position.set(.035,.2,0),h.name="station supported inert carriage",s.add(h);for(let d of[-1,1])Q(s,n.steel,[-.23,.105,d*.125],[.3,.105,d*.125],.02).name="station carriage support rail";for(let d of[-1,1])U(s,n.castSteel,[.12,.28,.06],[.1,-.025,d*.125],"station connected carriage saddle");let p=e===6?2:1,m=[.68,1.05,1.6,.74,.65,1.14,1.04][e],_=e===2?.055:.032;for(let d=0;d<p;d++){let x=p===2?(d-.5)*.26:0,b=B(s,n.castSteel,.102,.25,[.32,.2,x],"x",.092,40);b.name="station seated mantlet collar";let y=[[_*.64,-.02],[_,-.02],[_*.94,m-.02],[_*.64,m-.02],[_*.64,-.02]].map(v=>new ae(...v)),S=new xe(new yn(y,48),n.darkSteel);S.rotation.z=-Math.PI/2,S.position.z=x,S.name="station continuous barrel exterior",r.add(S);for(let v of[.015,.105])B(r,n.edge,_+.012,.025,[v,0,x],"x",_+.012,40).name="station barrel retaining band";let E=[[_*.64,-.025],[_+.012,-.025],[_+.012,.035],[_*.64,.035],[_*.64,-.025]].map(v=>new ae(...v)),I=new xe(new yn(E,40),n.darkSteel);I.rotation.z=-Math.PI/2,I.position.set(m-.02,0,x),I.name="station open muzzle exterior",r.add(I),B(r,n.rubber,_*.62,.003,[m-.12,0,x],"x",_*.62,40).name="station recessed inert bore backing"}if(!f){let d=[];for(let E=0;E<p;E++){let I=p===2?(E-.5)*.26:0,v=new Ht;v.absarc(I,.2,.108,0,Math.PI*2,!0),d.push(v)}let x=Ye(s,n.paint,[[-l,-.24],[l,-.24],[l,.47],[-l,.47]],d,(E,I,v)=>[.38-Math.max(0,I-.12)*.2/.35-v,I,E]);x.name="station front shield with mantlet aperture",x.userData.cutawayShell=!0;let b=Ye(s,n.paint,[[-.22,-l],[.18,-l],[.18,l],[-.22,l]],[],(E,I,v)=>[E,.52-(E+.22)*.125-v,I]);b.name="station sloped service roof",b.userData.cutawayShell=!0;let y=Ye(s,n.paint,[[-.46,-l],[-.22,-l],[-.22,l],[-.46,l]],[],(E,I,v)=>[E,.19+(E+.46)*.33/.24-v,I]);y.name="station sloped rear shoulder",y.userData.cutawayShell=!0;let S=Ye(s,n.paint,[[-l,-.24],[l,-.24],[l,.19],[-l,.19]],[],(E,I,v)=>[-.46+v,I,E]);S.name="station removable rear cover",S.userData.cutawayShell=!0,U(s,n.edge,[.023,.2,.25],[-.474,.08,0],"station rear service hatch").userData.cutawayShell=!0;for(let E of[-.075,.075])Q(s,n.steel,[-.475,.08,E],[-.5,.08,E],.01).name="station hatch handle post";Q(s,n.steel,[-.5,.08,-.075],[-.5,.08,.075],.01).name="station service hatch handle"}U(s,n.castSteel,[.1,.12,.15],[-.28,-.16,-l-.06],"station control enclosure bracket");let g=new xe(new jt(.25,.24,.18,3,.018),n.paint);g.position.set(-.28,-.02,-l-.075),g.name="station supported control enclosure",s.add(g),U(s,n.edge,[.2,.18,.015],[-.28,-.02,-l-.172],"station control service cover");for(let d of[-.355,-.205])for(let x of[-.08,.04])B(s,n.steel,.007,.014,[d,x,-l-.183],"z",.007,6).name="station control cover fastener";if(qe(s,n.rubber,[[-.28,-.1,-l-.075],[-.28,-.17,-l-.075],[-.2,-.24,-l-.02],[-.14,-.25,-.265]],.014,24).name="station supported control harness",[3,5,6].includes(e)){U(s,n.edge,[.17,.095,.17],[-.09,.505,0],"station optical package seated foot");let d=new xe(new jt(.22,.21,.23,3,.028),n.paint);d.position.set(-.09,.64,0),d.name="station optical housing",s.add(d),B(s,n.edge,.078,.035,[.034,.64,0],"x",.078,40).name="station optical retaining bezel",B(s,n.glass,.058,.008,[.055,.64,0],"x",.058,40).name="station optical lens"}return t}function X_(n,e){let t=Et("protection kit"),i=(r,o,a=n.paint,c="formed protection panel")=>{let l=Ye(t,a,r,[],(f,u,h)=>[f,u,o+h]);return l.name=c,l},s=(r,o,a)=>{B(t,n.steel,.016,.035,[r,o,a],"z",.016,6).name="protection attachment bolt",B(t,n.darkSteel,.024,.008,[r,o,a-.015],"z").name="attachment washer"};if([3,6].includes(e)){let r=e===3?.67:.77,o=e===3?1.7:2.3,a=-o/2,c=o/2,l=e===3?1.38:1.3;if(e===3){U(t,n.edge,[o,.024,r*2],[0,.083,0],"crew cell cassette deck");for(let T of[-1,1]){U(t,n.darkSteel,[o,.12,.12],[0,.015,T*.55],"crew cell longitudinal floor sill");for(let R of[-.61,.61]){U(t,n.darkSteel,[.16,.08,.12],[R,-.08,T*.55],"crew cell attachment pedestal"),B(t,n.rubber,.067,.035,[R,-.1375,T*.55],"y",.067,24).name="crew cell mounting isolator",U(t,n.steel,[.2,.025,.18],[R,-.1675,T*.55],"crew cell attachment shoe");for(let P of[-.065,.065])B(t,n.steel,.01,.03,[R+P,-.146,T*.55],"y",.01,6).name="crew cell shoe retaining bolt"}}for(let T of[-.27,.09])U(t,n.darkSteel,[.085,.1,1.14],[T,.025,0],"crew cell seat load crossmember");for(let T of[a+.065,c-.065])U(t,n.darkSteel,[.13,.1,1.14],[T,.025,0],"crew cell cassette end member")}else U(t,n.edge,[o,.09,r*2],[0,.045,0],"reinforced floor");let f=l-.22,u=r-.13,h=T=>T<=f?r-.065*(T-.09)/(f-.09):r-.065-.065*Math.min(1,(T-f)/(l-f)),p=n.paint.clone();p.color.set("#a0a58e"),p.metalness=.04,p.roughness=.86,p.name="crew cell interior lining";let m=n.edge.clone();m.color.set("#414b3e"),m.roughness=.7;let _=(T,R)=>(T.name="hull shell",T.userData.component=R,T),g=(T,R,P,F,k,V,te=.018)=>{let J=new It;P.forEach(([Ue,$e],oe)=>oe?J.lineTo(Ue,$e):J.moveTo(Ue,$e)),J.closePath(),J.holes.push(...F);let Y=new Vt(J,{depth:te,steps:1,curveSegments:12,bevelEnabled:!0,bevelSize:.0025,bevelThickness:.002,bevelSegments:3}),K=Y.attributes.position;for(let Ue=0;Ue<K.count;Ue++)K.setXYZ(Ue,...k(K.getX(Ue),K.getY(Ue),K.getZ(Ue)));Y.computeVertexNormals();let le=R.clone();le.side=At;let me=new xe(Y,le);return me.name=V,me.castShadow=!0,me.receiveShadow=!0,T.add(me),me},d=(T,R,P)=>{let[F,k,V,te]=T,J=tt(F,k,V,te,.045),Y=J.getPoints(12).map(le=>[le.x,le.y]);_(g(t,n.paint,tt(F-.052,k-.052,V+.052,te+.052,.075).getPoints(12).map(le=>[le.x,le.y]),[J.clone()],(le,me,Ue)=>R(le,me,.015+Ue),"window outer retaining bezel"),"window outer retaining bezel"),g(t,n.rubber,tt(F-.012,k-.012,V+.012,te+.012,.057).getPoints(12).map(le=>[le.x,le.y]),[tt(F+.018,k+.018,V-.018,te-.018,.027)],(le,me,Ue)=>R(le,me,-.02+Ue),"window compression gasket",.056);let K=g(t,x,Y,[],(le,me,Ue)=>R(le,me,-.014-Ue*.2),P,.012);K.castShadow=!1,_(g(t,m,tt(F-.042,k-.042,V+.042,te+.042,.07).getPoints(12).map(le=>[le.x,le.y]),[J.clone()],(le,me,Ue)=>R(le,me,-.057-Ue),"window interior retaining frame"),"window interior retaining frame")},x=n.glass.clone();x.transparent=!0,x.opacity=.58,x.metalness=0,x.depthWrite=!1;let b=(T,R,P="cell flange retaining fastener")=>{let F=new L(...R(0)),k=new L(...R(.01)).sub(F).normalize(),V=B(T,n.steel,.02,.004,F.clone().addScaledVector(k,.002).toArray(),"y",.02,24);V.quaternion.setFromUnitVectors(new L(0,1,0),k),V.name="cell flange seated washer";let te=B(T,n.darkSteel,.012,.009,F.clone().addScaledVector(k,.0085).toArray(),"y",.012,6);te.quaternion.copy(V.quaternion),te.name=P};for(let T of[-1,1]){let R=[[a,.09],[c,.09],[c-.25,l-.08],[c-.42,l],[a+.07,l]],P=tt(a+.2,.85,c-.48,l-.13,.045);Ye(t,n.paint,R,[P],(F,k,V)=>[F,k,T*(h(k)-V)]),_(Ye(t,p,[[a+.09,.17],[c-.07,.17],[c-.3,l-.13],[a+.09,l-.09]],[P],(F,k,V)=>[F,k,T*(h(k)-.067-V*.25)]),"interior liner"),d([a+.2,.85,c-.48,l-.13],(F,k,V)=>[F,k,T*(h(k)+V)],"protected glazing");for(let F of[a+.13,c-.38])qe(t,m,[[F,.13,T*(h(.13)-.065)],[F,f,T*(h(f)-.065)],[F,l-.065,T*(h(l-.065)-.065)]],.025,16).name="interior shell rib";_(Ye(t,m,[[a+.2,.23],[c-.2,.23],[c-.25,.71],[a+.2,.71]],[],(F,k,V)=>[F,k,T*(h(k)+.014+V*.2)]),"lower service panel recess"),_(Ye(t,n.paint,[[a+.23,.26],[c-.24,.26],[c-.28,.68],[a+.23,.68]],[],(F,k,V)=>[F,k,T*(h(k)+.03+V*.2)]),"lower formed service panel"),qe(t,n.darkSteel,[[a+.14,.17,T*(h(.17)-.09)],[a+.14,.72,T*(h(.72)-.09)],[c-.32,.72,T*(h(.72)-.09)]],.012,24).name="secured interior cable conduit";for(let F of[a+.26,c-.36])Ye(t,p,[[F-.05,.3],[F+.05,.3],[F+.05,.6],[F-.05,.6]],[],(k,V,te)=>[k,V,T*(h(V)-.08+te*.25)]).name="interior panel retaining strip";for(let F of[a+.12,c-.2])s(F,.2,T*(r+.02));if(g(t,n.paint,[[a,.085],[c-.03,.085],[c-.03,.19],[a,.19]],[],(F,k,V)=>[F,k,T*(r-.026+V)],"formed crew cell lower sill",.03),e===3){for(let F of[a+.28,-.1,c-.32])for(let k of[.285,.655])b(t,V=>[F,k,T*(h(k)+.04+V)],"service cover retaining fastener");for(let F of[a+.18,-.1,c-.32])b(t,k=>[F,.14,T*(r+.006+k)],"lower sill flange retaining fastener");for(let F of[a+.14,c-.39]){let k=[[F-.036,.135],[F+.036,.135],[F+.036,f-.015],[F+.025,l-.092],[F-.025,l-.092],[F-.036,f-.015]];g(t,m,k,[],(V,te,J)=>[V,te,T*(h(te)-.087-J)],"crew cell formed interior pillar",.033),U(t,m,[.13,.028,.16],[F,.135,T*(r-.115)],"interior pillar foot flange")}}}let y=T=>c-(T-.09)*.25/(l-.17),S=tt(-r+.16,.85,r-.16,l-.18);if(Ye(t,n.paint,[[-r,.09],[r,.09],[r,l-.08],[-r,l-.08]],[S],(T,R,P)=>[y(R)-P,R,T*h(R)/r]),d([-r+.16,.85,r-.16,l-.18],(T,R,P)=>[y(R)+P,R,T*h(R)/r],"protected windshield"),e===3){let T=[[-r+.16,.255],[r-.16,.255],[r-.2,.68],[-r+.2,.68]];_(g(t,m,T,[],(R,P,F)=>[y(P)+.009+F*.25,P,R*h(P)/r],"front closure perimeter backing",.018),"front closure perimeter backing"),_(g(t,n.paint,[[-r+.18,.275],[r-.18,.275],[r-.22,.66],[-r+.22,.66]],[],(R,P,F)=>[y(P)+.018+F*.25,P,R*h(P)/r],"formed front service closure",.018),"formed front service closure");for(let R of[-r+.235,r-.235])for(let P of[.315,.62])b(t,F=>[y(P)+.0225+F,P,R*h(P)/r],"front closure retaining fastener")}let E=[[a+.07,-u],[c-.42,-u],[c-.32,-u+.1],[c-.32,u-.1],[c-.42,u],[a+.07,u],[a,u-.075],[a,-u+.075]],I=[];for(let T=0;T<=16;T++){let R=-u+T*u/8;I.push([R,l-.015+.018*(1-(R/u)**2)])}for(let T=16;T>=0;T--){let[R,P]=I[T];I.push([R,P-.028])}_(g(t,n.paint,I,[],(T,R,P)=>[a+.07+P,R,T],"crowned formed cell roof",o-.43),"formed cell roof"),_(Ye(t,p,E,[],(T,R,P)=>[T,l-.061-P*.25,R]),"insulated roof liner");for(let T of[-1,1]){let R=[[a+.065,f+.075],[c-.36,f+.075],[c-.42,l-.018],[a+.065,l-.018]];_(Ye(t,n.paint,R,[],(P,F,k)=>[P,F,T*(h(F)+.012+k*.35)]),"formed roof shoulder cap"),U(t,m,[o-.5,.075,.1],[-.16,l-.056,T*(u-.05)],"roof perimeter box stiffener"),U(t,n.paint,[o-.54,.036,.095],[-.16,l+.024,T*(u-.06)],"roof shoulder mounting flange");for(let P of[a+.19,c-.49])U(t,m,[.13,.035,.14],[P,l+.049,T*(u-.085)],"roof flange attachment pad"),B(t,n.steel,.014,.017,[P,l+.075,T*(u-.085)],"y",.014,6).name="roof attachment fastener"}for(let T of[a+.16,c-.45])U(t,m,[.075,.063,u*2-.09],[T,l-.056,0],"connected roof transverse box member");U(t,n.paint,[.18,.09,u*2],[c-.33,l-.055,0],"folded windshield header");let v=[[-r+.105,.18],[r-.105,.18],[r-.105,l-.31],[u-.075,l-.13],[-u+.075,l-.13],[-r+.105,l-.31]],w=new Ht;if(v.forEach(([T,R],P)=>P?w.lineTo(T,R):w.moveTo(T,R)),w.closePath(),Ye(t,n.paint,[[-r,.09],[r,.09],[r,l-.26],[u,l],[-u,l],[-r,l-.26]],[w],(T,R,P)=>[a+P,R,T]),e===3){let T=[[-r+.018,.108],[r-.018,.108],[r-.018,l-.267],[u-.012,l-.018],[-u+.012,l-.018],[-r+.018,l-.267]];_(g(t,n.paint,T,[w.clone()],(R,P,F)=>[a-.026+F,P,R],"boarding aperture bolted perimeter flange",.042),"boarding aperture bolted perimeter flange");for(let R of[-1,1])for(let P of[.26,.52,.8,1.035])b(t,F=>[a-.026-F,P,R*(r-.052)],"boarding perimeter retaining fastener");for(let R of[-.4,-.2,0,.2,.4])b(t,P=>[a-.026-P,.13,R],"boarding lower flange retaining fastener");for(let R of[-.36,-.18,0,.18,.36])b(t,P=>[a-.026-P,l-.062,R],"boarding header flange retaining fastener")}for(let T=0;T<v.length;T++){let[R,P]=v[T],[F,k]=v[(T+1)%v.length],V=new L(a+.077,(P+k)/2,(R+F)/2),te=new L(0,k-P,F-R);U(t,m,[.095,te.length()+.028,.052],V.toArray(),"rear aperture structural ring").quaternion.setFromUnitVectors(new L(0,1,0),te.normalize())}let C=Et("rear aperture weather seal");t.add(C);let D=v.map(([T,R])=>[a-.007,R,T]);for(let T=0;T<D.length;T++){Q(C,n.rubber,D[T],D[(T+1)%D.length],.018).name="aperture gasket edge";let R=new xe(new mi(.018,12,8),n.rubber);R.position.set(...D[T]),R.name="aperture gasket corner",R.castShadow=!0,R.receiveShadow=!0,C.add(R)}for(let T of[-1,1])qe(t,m,[[a+.059,.15,T*(r-.065)],[a+.059,l-.29,T*(r-.065)],[a+.059,l-.065,T*(u-.045)]],.027,24).name="rear door jamb reinforcement",qe(t,n.steel,[[a-.022,.46,T*(r-.04)],[a-.09,.46,T*(r-.04)],[a-.09,.77,T*(r-.04)],[a-.022,.77,T*(r-.04)]],.016,24).name="connected boarding grab handle";for(let T of[-.25,.25])U(t,n.lamp,[.17,.024,.075],[a+.24,l-.087,T],"interior overhead light");if(U(t,n.darkSteel,[o-.2,.026,r*2-.17],[0,.108,0],"non slip crew floor insert"),e===3){let T=Et("open crew cell boarding door"),R=2*(r-.105),P=-r+.105;T.position.set(a-.014,0,P),T.rotation.y=-Math.PI*.56,t.add(T);let F=[[0,.19],[R,.19],[R,l-.32],[R-.105,l-.14],[.105,l-.14],[0,l-.32]],k=[[.105,.3],[R-.105,.3],[R-.105,l-.37],[R-.18,l-.25],[.18,l-.25],[.105,l-.37]],V=new Ht;k.forEach(([Y,K],le)=>le?V.lineTo(Y,K):V.moveTo(Y,K)),V.closePath(),_(g(T,n.paint,F,[V],(Y,K,le)=>[-.045+le,K,Y],"open boarding door outer skin",.025),"open boarding door outer skin"),_(Ye(T,p,[[.065,.26],[R-.065,.26],[R-.065,l-.35],[R-.15,l-.21],[.15,l-.21],[.065,l-.35]],[],(Y,K,le)=>[.024+le*.25,K,Y]),"open boarding door interior liner");for(let Y=0;Y<k.length;Y++){let[K,le]=k[Y],[me,Ue]=k[(Y+1)%k.length],$e=new L(0,Ue-le,me-K),oe=U(T,n.paint,[.048,$e.length()+.005,.017],[-.02,(le+Ue)/2,(K+me)/2],"door pressed recess return");oe.quaternion.setFromUnitVectors(new L(0,1,0),$e.normalize()),_(oe,"door pressed recess return")}_(g(T,n.paint,k,[],(Y,K,le)=>[.004+le*.4,K,Y],"boarding door formed face panel",.018),"boarding door formed face panel");for(let Y of[.06,R-.06])U(T,m,[.07,l-.49,.065],[.017,(l+.03)/2,Y],"door perimeter upright return");for(let Y of[.245,l-.235])U(T,m,[.07,.065,R-.13],[.017,Y,R/2],"door transverse return");U(T,m,[.05,.05,R-.18],[.062,.49,R/2],"door inner reinforcing rib");for(let Y of[.38,.96]){B(t,n.steel,.029,.13,[a-.016,Y,P],"y",.029,20).name="boarding door hinge pin",U(t,m,[.08,.1,.065],[a+.007,Y,P-.025],"boarding hinge fixed leaf"),U(T,m,[.07,.1,.09],[.012,Y,.035],"boarding hinge moving leaf");for(let K of[-.047,0,.047])B(T,m,.035,.038,[0,Y+K,0],"y",.035,24).name="boarding hinge barrel knuckle";for(let K of[-.062,.062])B(t,n.darkSteel,.038,.013,[a-.014,Y+K,P],"y",.038,24).name="boarding hinge pin end collar";for(let K of[-.029,.029])b(t,le=>[a-.033-le,Y+K,P-.046],"fixed hinge leaf retaining fastener"),b(T,le=>[.047+le,Y+K,.061],"moving hinge leaf retaining fastener")}qe(T,n.steel,[[.061,.64,R-.14],[.105,.64,R-.14],[.105,.8,R-.14],[.061,.8,R-.14]],.013,20).name="door interior pull handle",U(T,n.darkSteel,[.08,.105,.07],[.064,.7,R-.08],"boarding door latch housing");let te=R-.085;for(let Y of[.4,1.025])U(T,m,[.048,.07,.06],[.075,Y,te],"door latch rod guide"),B(T,n.steel,.009,Math.abs(Y-.7),[.094,(Y+.7)/2,te],"y",.009,16).name="guided boarding latch linkage",U(T,n.steel,[.026,.045,.055],[.086,Y,te],"boarding latch cam");for(let Y of[.16,R-.16])for(let K of[.3,l-.29])b(T,le=>[.03+le,K,Y],"door liner retaining fastener");U(T,m,[.018,.23,.1],[-.07,.7,R-.08],"exterior latch backing plate"),B(T,n.steel,.021,.055,[-.061,.7,R-.08],"x",.021,16).name="external latch spindle",U(T,n.steel,[.022,.04,.135],[-.092,.7,R-.13],"exterior boarding latch lever");for(let Y of[.62,.78])B(T,n.steel,.009,.018,[-.079,Y,R-.08],"x",.009,6).name="latch backing plate fastener";let J=new L(.035,.42,.24).applyEuler(T.rotation).add(T.position);Q(t,m,[a+.015,.42,P+.1],J.toArray(),.013).name="open door restraint arm",U(t,n.darkSteel,[.07,.11,.045],[a+.025,.7,r-.105],"boarding latch keeper")}if(e===3){for(let T of[-1,1])ol(t,n,-.1,T*.32,!0);U(t,n.edge,[.18,.055,1.1],[a-.08,.12,0],"boarding threshold"),U(t,n.paint,[.055,.13,1.14],[a-.015,.06,0],"formed boarding sill return")}else for(let T of[a+.26,c-.48])Q(t,n.edge,[T,l-.06,-u+.07],[T,l-.06,u-.07],.027).name="roof hoop";if(e!==3)for(let T of[-1,1])for(let R of[.35,1.02])U(t,n.darkSteel,[.045,.1,.06],[a+.025,R,T*(r-.055)],"rear aperture hinge")}else if(e===5){for(let r of[-1,1]){Ye(t,n.paint,[[-.92,.02],[.92,.02],[1.04,.18],[.9,.48],[-.9,.48],[-1.04,.18]],[],(o,a,c)=>[o,.12+a*.42+c,r*a*1.55]).name="V underbody plate",U(t,n.edge,[1.82,.075,.08],[0,.39,r*.67],"underbody mounting rail");for(let o of[-.65,.65])Q(t,n.darkSteel,[o,.3,r*.58],[o,.44,r*.58],.032).name="energy absorbing mount",B(t,n.rubber,.047,.075,[o,.41,r*.58]),B(t,n.steel,.018,.055,[o,.455,r*.58],"y",.018,6).name="underbody attachment bolt"}Q(t,n.edge,[-.94,.12,0],[.94,.12,0],.025).name="V keel joint"}else{let r=e===4||e===2?3:1,o=r===1?1.55:.57;for(let a of[.18,.79])U(t,n.edge,[r===1?1.5:1.93,.055,.06],[0,a,-.1],"protection mounting rail");for(let a=0;a<r;a++){let c=(a-(r-1)/2)*.66,l=[[c-o/2,.12],[c+o/2-.08,.12],[c+o/2,.23],[c+o/2,.77],[c+o/2-.1,.9],[c-o/2+.08,.9],[c-o/2,.8]];if(e===0)i(l,0,n.darkSteel,"inner support plate"),i(l,.18,n.paint,"outer spaced plate");else if(e===1){let u=n.paint.clone();u.color.set("#c5c0a9"),u.metalness=0,u.roughness=.94,i(l,0,n.darkSteel,"composite backing"),i(l,.045,u,"ceramic core"),i(l,.09,n.paint,"composite outer plate")}else{let u=i(l,.055,n.paint,e===2?"light formed panel":"replaceable side skirt");if(e===2){let h=u.geometry.attributes.position;for(let p=0;p<h.count;p++)h.setZ(p,h.getZ(p)+.032*Math.sin((h.getY(p)-.12)/.78*Math.PI));u.geometry.computeVertexNormals()}}let f=e===0?.235:e===1?.145:.115;for(let u of[-o*.36,o*.36])for(let h of[.23,.77])Q(t,n.darkSteel,[c+u,h,-.09],[c+u,h,f],.015).name="panel standoff",s(c+u,h,f)}}return t}function vd(n,e){let t=Et("radio suite"),i=e===1?3:e===6?2:1;for(let s=0;s<i;s++){let r=(s-(i-1)/2)*.4;U(t,n.paint,[.35,.46,.23],[r,.29,0]),U(t,n.glass,[.2,.09,.014],[r,.4,.125]);for(let o=0;o<4;o++)B(t,n.darkSteel,.026,.027,[r-.09+o*.06,.26,.135],"z");Q(t,n.darkSteel,[r+.1,.5,0],[r+.1,1.1+(e===4?.6:0)+s*.13,0],.009),qe(t,n.rubber,[[r-.08,.2,.12],[r-.2,.09,.22],[r-.15,.06,.35],[r+.17,.1,.3]],.012)}if([3,4].includes(e)){let s=1.65+e*.12;Q(t,n.paint,[.42,.1,-.28],[.42,s,-.28],.028);for(let r of[-1,1])Q(t,n.darkSteel,[.42,s*.8,-.28],[.42+r*.55,.02,-.28+r*.45],.006);if(e===3){let r=new xe(new mi(.3,20,12,0,Math.PI*2,0,Math.PI/2),n.paint);r.rotation.x=Math.PI/2,r.position.set(.42,s,-.28),t.add(r)}}return t}function Wc(n,e){let t=Et("sensor suite");B(t,n.edge,.17,.1,[0,.05,0]),Q(t,n.paint,[0,.1,0],[0,e===3?1.65:.35,0],.05);let i=e===3?1.75:.43;U(t,n.paint,[.4,.24,.22],[0,i,0]);for(let s of[-.105,.105])B(t,n.darkSteel,.078,.05,[s,i,.14],"z"),B(t,n.glass,.058,.012,[s,i,.172],"z");if((e===1||e===5)&&(U(t,n.paint,[.26,.22,.22],[.26,i-.05,0]),B(t,n.glass,.075,.025,[.26,i-.05,.13],"z")),e===3||e===6)for(let s of[-1,1])Q(t,n.darkSteel,[0,.37,0],[s*.35,0,.25],.017);if(e===4){let s=new xe(new mi(.28,24,12,0,Math.PI*2,0,Math.PI*.64),n.paint);s.position.set(0,.4,-.2),t.add(s)}if(e===6)for(let s of[-.5,.5]){let r=Wc(n,3);r.scale.setScalar(.54),r.position.set(s,0,-.25),t.add(r)}return t}function bd(n){let e=Et("clearance roller");U(e,n.paint,[1.1,.12,.35],[0,.48,-.1]);for(let t of[-.45,.45])Q(e,n.edge,[t,.48,-.3],[t,.16,.32],.032).name="clearance roller trailing arm",B(e,n.darkSteel,.17,.13,[t,.17,.34],"x");for(let t=0;t<7;t++){let i=-.45+t*.15;B(e,n.paint,.14,.095,[i,.17,.34],"x"),ni(e,n.steel,[i+.05,.17,.34],.1,8,"x",.013)}return e}function q_(n,e){if([0,5].includes(e))return Wr(n);if([2,4].includes(e))return bd(n);let t=Et("field equipment");if(e===1){U(t,n.paint,[1.4,.14,.85],[0,.39,0]);for(let i of[-1,1]){let s=Os(n);s.scale.setScalar(.5),s.position.set(-.15,.3,i*.43),t.add(s)}Q(t,n.edge,[.7,.38,-.25],[1.28,.38,0],.036),Q(t,n.edge,[.7,.38,.25],[1.28,.38,0],.036),U(t,n.paint,[1.33,.4,.8],[0,.64,0])}else{U(t,n.edge,[1.15,.06,.65],[0,.03,0]);for(let i=0;i<3;i++)U(t,n.paint,[.29,.35,.47],[-.37+i*.37,.24,0]),U(t,n.steel,[.14,.025,.018],[-.37+i*.37,.34,.25]);if(e===6)for(let i of[-.55,.55])Q(t,n.darkSteel,[i,0,0],[i,.65,0],.025)}return t}function Y_(n,e){let t=Et("engineering review");U(t,n.edge,[1.3,.065,.78],[0,.7,0]);for(let s of[-.54,.54])for(let r of[-.3,.3])Q(t,n.darkSteel,[s,0,r],[s,.69,r],.023);U(t,n.darkSteel,[.95,.68,.055],[0,1.14,-.24]),U(t,n.lamp,[.88,.61,.02],[0,1.14,-.205]);let i=[n.paint,n.amber,n.glass][e%3];for(let s=0;s<4;s++)U(t,i,[.11+(s+e)%4*.035,.032,.013],[-.22+e%2*.08,.95+s*.115,-.188]),U(t,n.edge,[.16,.016,.013],[.18,.95+s*.115,-.187]);if(U(t,n.lamp,[.35,.017,.27],[-.34,.75,.18]),U(t,n.glass,[.27,.018,.19],[.36,.75,.18]),B(t,n.steel,.046,.11,[.54,.8,-.09]),[2,7,10,12,15].includes(e))for(let s=0;s<3;s++)U(t,i,[.09,.09,.08],[-.27+s*.27,1.5,-.19]),s<2&&Q(t,n.darkSteel,[-.22+s*.27,1.5,-.19],[-.08+s*.27,1.5,-.19],.008);if([3,11,16,17,20].includes(e)){let s=xd(n,0);s.scale.setScalar(.22),s.position.set(0,.74,.08),t.add(s)}return t}function Xr(n,e=Wi()){if(!_d.includes(n))throw new Error("Unknown 3D asset: "+n);let t=n==="TRAIN-CAP"?"CAP-C":n,[i,s]=t.split("-"),r=s.charCodeAt(0)-65,a=Gc({CAP:()=>H_(e,r),MOB:()=>r===3?W_(e):[1,2,6].includes(r)?G_(e,r):xd(e,r),FP:()=>yd(e,r),PRO:()=>X_(e,r),COM:()=>vd(e,r),SA:()=>Wc(e,r),ACC:()=>q_(e,r),SE:()=>Y_(e,r)}[i](),e,i,r);return a.name=n,a.userData={assetId:n,illustrative:!0,units:"metres"},a}function Xc(n,e=Wi()){if(!z_.includes(n))throw new Error("Unknown 3D mission: "+n);let t=gd(n,e);t.name=n,t.userData.mission=n;let i=t.userData.roof||2.75;if(n==="COMBAT"||n==="MINE"){let s=yd(e,n==="COMBAT"?2:1);s.name="mission weapon",s.position.set(-.35,i,0),t.add(s)}if(n==="COMBAT"&&J_(t,e,i),n==="RECCE"){let s=Wc(e,3);s.name="mission sensor",s.position.set(-1,i,-.48),t.add(s)}if(n==="COMMAND"){let s=vd(e,4);s.name="mission radio",s.position.set(-1.5,i,-.4),t.add(s)}if(["TROOP","COMMAND","RECCE"].includes(n)&&Z_(t,e,n),n==="TROOP"&&K_(t,e),n==="MINE"){let s=bd(e);s.name="mission roller",s.scale.setScalar(1.9),s.rotation.y=Math.PI/2,s.position.set(4.45,.1,0),t.add(s),$_(t,e,s)}return qn(t)}function Z_(n,e,t){let i=-n.userData.length/2,s=n.userData.width/2,r=n.userData.length/2-2.65,o=t==="COMMAND"?2.63:2.31,a=Et(t.toLowerCase()+" mission interior");a.position.y=1.41,n.add(a);let c=i+.18,l=r-c,f=(c+r)/2,u=s*.75-.035;U(a,e.edge,[l,.05,u*2],[f,0,0],"mission supported rear floor"),U(a,e.rubber,[l-.06,.004,u*2-.04],[f,.027,0],"mission nonslip rear floor insert");for(let w of[c+.16,f,r-.16])for(let C of[-1,1])U(a,e.castSteel,[.18,.065,.18],[w,-.025,C*s*.53],"mission floor hull bearing shoe");let h=e.paint.clone();h.color.set("#a3a78f"),h.metalness=0,h.roughness=.87,h.name="mission cabin interior lining";let p=t==="COMMAND"?Math.min(.8,r-.03):r-.03,m=s*.85-.075,_=w=>s*(.75+(Math.min(w,2.36)-1.2)*.1/1.16)-.075;for(let w of[-1,1]){let C=[];if(t==="TROOP")for(let T=0;T<4;T++)C.push(tt(i+.46+T*.94,1.95,i+1.07+T*.94,2.22,.04));let D=Ye(a,h,[[c,1.435],[p,1.435],[p,o],[c,o]],C,(T,R,P)=>[T,R-1.41,w*(_(R)-P*.4)]);D.name="mission interior removable liner",D.userData.cutawayShell=!0;for(let T=c+.15;T<p-.05;T+=.92)U(a,e.edge,[.1,.05,.12],[T,.05,w*_(1.46)],"mission rib floor attachment"),qe(a,e.pressedSteel,[[T,.05,w*_(1.46)],[T,.8,w*_(2.21)],[T,o-1.41,w*m]],.024,16).name="mission floor connected cabin rib",w===1&&(Q(a,e.pressedSteel,[T,o-1.41,-m],[T,o-1.41,m],.025).name="mission connected roof bow")}let g=U(a,h,[p-c,.018,m*2],[(c+p)/2,o-1.41+.028,0],"mission removable ceiling liner");g.userData.cutawayShell=!0;for(let w of[c+.35,p-.35])U(a,e.lamp,[.3,.025,.13],[w,o-1.41+.012,0],"mission supported overhead luminaire");let d=(w,C,D,T=.73)=>{let R=ol(a,e,w,C,!0);return R.name=t.toLowerCase()+" mission restrained seat",R.rotation.y=D,R.scale.setScalar(T),R.position.y=.029+.2895*T,R},x=(w,C,D,T,R=.02)=>{let P=new xe(new jt(...C,3,R),w);return P.position.set(...D),P.name=T,P.castShadow=P.receiveShadow=!0,a.add(P),P},b=e.glass.clone();b.color.set("#183037"),b.roughness=.24;let y=(w,C,D,T=.62)=>{x(e.edge,[T+.06,.34,.08],[w,C,D],"mission supported monitor enclosure",.025),U(a,e.darkSteel,[T+.01,.295,.02],[w,C,D-.041],"mission monitor seated bezel"),U(a,b,[T-.03,.245,.006],[w,C,D-.054],"mission inert monitor display"),Q(a,e.castSteel,[w,C-.252,D+.025],[w,C-.075,D+.025],.023).name="mission monitor connected stand",U(a,e.edge,[.2,.026,.16],[w,C-.2545,D+.015],"mission monitor seated foot");for(let R of[-.08,0,.08])Q(a,e.edge,[w-T*.38,C+R,D-.058],[w+T*.38,C+R,D-.058],.002).name="mission display inert chart grid";qe(a,e.lamp,[[w-T*.35,C-.065,D-.059],[w-T*.14,C+.025,D-.059],[w+T*.05,C-.02,D-.059],[w+T*.32,C+.07,D-.059]],.003,12).name="mission display illustrative trace"},S=(w,C,D=.91)=>{x(e.edge,[D,.045,.5],[w,.53,C],"mission supported workstation top",.015);for(let T of[-D*.38,D*.38])for(let R of[-.18,.18])U(a,e.castSteel,[.07,.04,.085],[w+T,.049,C+R],"mission workstation floor foot"),Q(a,e.edge,[w+T,.068,C+R],[w+T,.516,C+R],.023).name="mission floor connected workstation leg";U(a,e.darkSteel,[D-.12,.023,.2],[w,.564,C-.08],"mission seated keyboard enclosure");for(let T=0;T<3;T++)for(let R=0;R<9;R++)U(a,e.edge,[.041,.004,.027],[w+(R-4)*.056,.577,C-.14+T*.039],"mission keyboard key");y(w,.82,C+.13,D-.15)},E=(w,C,D=.53,T=1.05)=>{for(let P of[-D*.42,D*.42]){U(a,e.edge,[.07,.035,.44],[w+P,.0465,C],"mission equipment rack floor rail");for(let F of[-.17,.17])Q(a,e.edge,[w+P,.06,C+F],[w+P,T,C+F],.019).name="mission equipment rack continuous post"}for(let P=0;P<3;P++){let F=.1+P*.29;U(a,e.pressedSteel,[D,.023,.43],[w,F,C],"mission rack supported shelf"),x(e.paint,[D-.06,.24,.37],[w,F+.1315,C],"mission rack isolated equipment enclosure",.021),U(a,e.darkSteel,[D-.1,.185,.015],[w,F+.133,C+.192],"mission rack equipment front panel");for(let k of[-1,1])Q(a,e.edge,[w+k*(D/2-.065),F+.075,C+.205],[w+k*(D/2-.065),F+.19,C+.205],.009).name="mission rack supported extraction handle";for(let k=0;k<5;k++)U(a,e.edge,[.055,.007,.009],[w-.05,F+.09+k*.021,C+.204],"mission equipment ventilation slot");B(a,e.amber,.008,.009,[w+.09,F+.18,C+.203],"z",.008,16).name="mission equipment inert status lens"}let R=U(a,e.paint,[D,.024,.43],[w,T,C],"mission equipment rack lid");R.userData.cutawayShell=!0},I=Et("mission role electronic installation");a.add(I);let v=w=>{let C=new Set(a.children);w();for(let D of[...a.children])C.has(D)||I.add(D)};if(t==="TROOP"){for(let w of[-1,1])for(let C=0;C<4;C++){let D=i+.77+C*.94,T=d(D,w*.7,w*Math.PI/2),R=x(e.paint,[.39,.276,.16],[D,.167,w*.88],"troop floor supported underseat stowage",.019),P=U(a,e.darkSteel,[.23,.05,.008],[D,.23,w*.963],"troop stowage retained latch");if(w===-1&&C===3)for(let F of[T,R,P])F.userData.reservedOriginalRadioZone=!0}for(let w of[-1,1]){Q(a,e.darkSteel,[c+.17,.87,w*.45],[p-.1,.87,w*.45],.016).name="troop supported aisle grab rail";for(let C=c+.15;C<p-.05;C+=.92)Q(a,e.edge,[C,o-1.41,w*.45],[C,.87,w*.45],.01).name="troop grab rail roof bow hanger"}U(a,e.edge,[.18,.044,1.39],[c-.02,.012,0],"troop continuous boarding threshold")}else if(t==="COMMAND"){for(let R of[i+1.03,i+2.4])d(R,-.1,-Math.PI/2,.8),v(()=>S(R,.64,1.02));v(()=>{E(i+3.58,-.76,.58,1.07),qe(a,e.rubber,[[i+3.58,.99,-.56],[i+3.58,1.14,-.91],[-1.5,1.14,-.91],[-1.5,1.14,-.4],[-1.5,1.35,-.4]],.018,24).name="command supported roof radio feed conduit"}),U(n,e.edge,[.36,.1,.28],[-1.5,2.78,-.4],"command roof radio bearing pedestal").userData.originalRoleElectronics=!0,U(n,e.edge,[.16,.12,.16],[-1.08,2.8,-.68],"command roof mast bearing pedestal").userData.originalRoleElectronics=!0;for(let R of[-1,1])U(n,e.edge,[.15,.06,.15],[-1.08+R*.55,2.77,-.68+R*.45],"command radio guy roof anchor pad").userData.originalRoleElectronics=!0;let w=Et("command rear access assembly");w.userData.retainWithCrewModule=!0,a.add(w);let C=new Set(a.children),D=R=>i+(Math.min(R,2.36)-1.2)*.17/1.16,T=Ye(a,e.paint,tt(-.45,1.48,.45,2.48,.04).getPoints(12).map(R=>[R.x,R.y]),[],(R,P,F)=>[D(P)-.01-F,P-1.41,R]);T.name="command fitted rear service door",T.userData.cutawayShell=!0;for(let R of[1.73,2.26])U(a,e.edge,[.065,.095,.09],[D(R)-.013,R-1.41,-.49],"command rear door seated hinge leaf"),B(a,e.steel,.019,.1,[D(R)-.035,R-1.41,-.49],"z",.019,24).name="command rear door retained hinge pin";for(let R of[1.79,1.96])Q(a,e.edge,[D(R)-.057,R-1.41,.29],[D(R)-.093,R-1.41,.29],.012).name="command rear door handle seated post";Q(a,e.steel,[D(1.79)-.093,1.79-1.41,.29],[D(1.96)-.093,1.96-1.41,.29],.012).name="command rear access pull";for(let R of[...a.children])C.has(R)||w.add(R)}else{d(i+1.44,-.17,-Math.PI/2,.74),v(()=>S(i+1.44,.53,.9)),d(i+.48,.52,0,.7),v(()=>E(i+.4,-.64,.34,.82));let w=-1,C=-.48,D=B(a,e.edge,.14,.055,[w,.0565,C],"y",.14,40);D.name="recce mast floor bearing flange",D.userData.originalRoleSensor=!0;let T=B(a,e.castSteel,.065,.94,[w,.55,C],"y",.065,40);T.name="recce continuous internal mast support",T.userData.originalRoleSensor=!0;let R=B(n,e.edge,.21,.05,[w,2.375,C],"y",.21,48);R.name="recce mast seated roof bearing",R.userData.originalRoleSensor=!0;for(let P of[-1,1])U(n,e.edge,[.12,.035,.12],[w+P*.35,2.375,C+.25],"recce sensor brace roof bearing pad").userData.originalRoleSensor=!0;v(()=>{let P=qe(a,e.rubber,[[i+1.44,.835,.69],[i+1.44,.35,.83],[w,.1,.83],[w,.1,C],[w,.99,C]],.013,24);P.name="recce supported sensor console harness",P.userData.originalRoleSensor=!0})}}function J_(n,e,t){let i=Et("combat supported crew compartment");i.position.set(-.35,t-.94,0),n.add(i),B(i,e.edge,.6,.06,[0,0,0],"y",.6,64).name="combat suspended crew floor",B(i,e.rubber,.565,.012,[0,.036,0],"y",.565,64).name="combat nonslip crew floor insert";for(let[o,a]of[[-.35,0],[.35,0],[0,-.35],[0,.35]])Q(i,e.castSteel,[o,.02,a],[o,1.14,a],.025).name="combat continuous roof ring basket support",U(i,e.edge,[.085,.055,.085],[o,.032,a],"combat basket floor support shoe"),U(i,e.edge,[.085,.07,.085],[o,1.12,a],"combat basket roof ring attachment");for(let o of[-1,1]){let a=ol(i,e,-.16,o*.33,!0);a.scale.setScalar(.75),a.position.y=.259125,a.name="combat restrained operator seat"}U(i,e.castSteel,[.19,.05,.19],[.24,.066,0],"combat console floor shoe"),Q(i,e.edge,[.24,.08,0],[.24,.48,0],.033).name="combat crew console supported column";let s=new xe(new jt(.18,.25,.34,3,.025),e.paint);s.position.set(.24,.51,0),s.name="combat crew console enclosure",i.add(s),U(i,e.edge,[.014,.18,.26],[.144,.54,0],"combat crew console screen bezel");let r=e.glass.clone();r.color.set("#182d32"),r.roughness=.2,U(i,r,[.005,.14,.22],[.134,.54,0],"combat crew console inert display");for(let o of[-1,1])Q(i,e.edge,[.15,.43,o*.13],[.08,.43,o*.13],.012).name="combat crew console grip support",B(i,e.rubber,.02,.08,[.08,.47,o*.13]).name="combat crew console grip";qe(i,e.rubber,[[.24,.385,0],[.24,.14,0],[.3,.075,0],[.35,.075,0],[.35,1.12,0]],.013,24).name="combat supported console harness"}function K_(n,e){let t=-n.userData.length/2,i=c=>t+(c-1.2)*.17/1.16,s=Et("troop boarding ramp");s.userData.inspectionKey="body",n.add(s);let r=tt(-.74,1.34,.74,2.23,.045),o=tt(-.8,1.28,.8,2.29,.07).getPoints(12).map(c=>[c.x,c.y]);Ye(n,e.edge,o,[r.clone()],(c,l,f)=>[i(l)-.004-f,l,c]).userData.component="troop ramp aperture retaining frame",Ye(n,e.rubber,tt(-.756,1.316,.756,2.246,.06).getPoints(12).map(c=>[c.x,c.y]),[tt(-.695,1.346,.695,2.196,.025)],(c,l,f)=>[i(l)-.004-f*.75,l,c]).name="troop ramp continuous compression seal";let a=Ye(s,e.paint,tt(-.72,1.33,.72,2.215,.035).getPoints(12).map(c=>[c.x,c.y]),[],(c,l,f)=>[i(l)-.016-f,l,c]);a.name="rear ramp",a.userData.cutawayShell=!0;for(let c of[-1,1])U(n,e.darkSteel,[.22,.105,.16],[t+.085,1.3,c*.54],"troop ramp chassis hinge bracket"),B(s,e.steel,.035,.17,[i(1.338)-.042,1.338,c*.54],"z",.035,24).name="troop ramp seated hinge barrel",B(n,e.darkSteel,.014,.23,[i(1.338)-.042,1.338,c*.54],"z",.014,24).name="troop ramp retained hinge pin",Q(s,e.edge,[i(1.41)-.064,1.41,c*.58],[i(2.16)-.064,2.16,c*.58],.018).name="troop ramp supported outer stiffener",B(s,e.darkSteel,.02,.02,[i(2.16)-.063,2.16,c*.59],"x",.02,6).name="troop ramp seated latch";for(let c of[1.47,1.62,1.77,1.92,2.07])Q(s,e.edge,[i(c)-.012,c,-.61],[i(c)-.012,c,.61],.01).name="troop ramp interior tread return"}function $_(n,e,t){let i=n.userData.length/2,s=Et("mine roller carrier integration frame");s.userData.inspectionKey="chassis",n.add(s),t.updateMatrix();for(let r of[-1,1]){let o=new L(-r*.45,.48,-.3).applyMatrix4(t.matrix);U(s,e.darkSteel,[.24,.2,.28],[i-.26,.89,r*.64],"mine roller chassis bearing"),U(s,e.edge,[.25,.1,.36],[i-.26,.94,r*.78],"mine roller pivot bearing cross shoe");for(let c of[r*.74,r*.9])U(s,e.edge,[.16,.22,.035],[i-.22,.99,c],"mine roller seated pivot cheek");B(s,e.steel,.026,.3,[i-.22,1,r*.79],"z",.026,24).name="mine roller retained chassis pivot";let a=Et("mine roller chassis-connected linkage");a.userData.inspectionKey="front",n.add(a),Ye(a,e.paint,[[i-.3,.93],[o.x+.04,o.y-.07],[o.x+.04,o.y+.062],[i-.28,1.085]],[],(c,l,f)=>[c,l,o.z-.02+f]).name="mine roller continuous draw arm",B(a,e.darkSteel,.049,.1,[i-.22,1,r*.855],"z",.049,24).name="mine roller draw arm pivot bushing",B(a,e.steel,.034,.12,o.toArray(),"z",.034,24).name="mine roller implement clevis pin"}}function j_(n){let e=n.userData.mission==="RECOVERY",t=n.userData.length||6.25,i=n.userData.width||2.3,s=t/2,r=[];return n.traverse(o=>{o.name==="run-flat wheel"&&r.push(o)}),{recovery:e,length:t,width:i,front:s,rear:-s,crewStart:-s+.28,crewEnd:e?-.58:s-2.65,crewBase:e?1.64:1.4,cabFloor:e?1.8125:1.435,cabRoof:e?2.78:2.36,cabBack:e?.7:s-2.15,cabFront:e?2.3:s-.98,cabHalf:e?.95:.76,axles:[...new Set(r.map(o=>o.position.x))].sort((o,a)=>o-a),wheelY:r[0]?.position.y??.62,wheelZ:Math.abs(r[0]?.position.z??i*.44)}}function Q_(n,e,t,i){let s=Xr(t,e),r=s.children.filter(_=>_.name==="supported crew seat"),o=new Set(r),a=new Set,c=new Set;for(let _ of[...s.children])o.has(_)||(_.removeFromParent(),_.traverse(g=>{g.geometry&&a.add(g.geometry),g.material&&!Object.values(e).includes(g.material)&&c.add(g.material)}));for(let _ of a)_.dispose();for(let _ of c)_.dispose();let l=i.crewEnd-i.crewStart,f=(i.crewEnd+i.crewStart)/2,u=i.width*.34,h=.7,p=Math.ceil(r.length/2),m=(l-.35)/p;U(s,e.edge,[l,.035,u*2],[f,i.crewBase+.0175,0],"fitted capacity carrier floor"),U(s,e.rubber,[l-.04,.004,u*2-.035],[f,i.crewBase+.037,0],"fitted capacity nonslip floor");for(let _=0;_<r.length;_++){let g=Math.floor(_/2),d=_===r.length-1&&r.length%2;r[_].position.set(f+(g-(p-1)/2)*m,i.crewBase+.039+.315*h,d?0:(_%2?1:-1)*Math.min(.49,u-.22)),r[_].scale.setScalar(h)}for(let _ of[i.crewStart+.12,i.crewEnd-.12])for(let g of[-1,1])U(s,e.castSteel,[.16,.04,.16],[_,i.crewBase+.02,g*(u-.12)],"fitted capacity floor bearing foot");return s.userData.fittedZone="rear crew floor",s.userData.fittedSeatCount=r.length,s}function ex(n,e,t,i){let s=t.charCodeAt(4)-65,r=Et(t);if(r.userData={assetId:t,illustrative:!0,units:"metres",fittedZone:s===3?"existing front cab":s===6?"existing carrier skins":"carrier protective surfaces"},s===6){n.updateWorldMatrix(!0,!0);let o=[];n.traverse(a=>{a.isMesh&&a.name==="hull shell"&&o.push(a)});for(let a of o){let c=new xe(a.geometry.clone().applyMatrix4(a.matrixWorld),e.paint.clone());c.material.color.multiplyScalar(1.075),c.name="hull shell",c.userData={...a.userData,component:"fitted lightweight carrier skin"},c.castShadow=a.castShadow,c.receiveShadow=a.receiveShadow,r.add(c),a.removeFromParent(),a.geometry.dispose()}}else if(s===3){for(let h of[i.cabBack,i.cabFront])for(let p of[-1,1])i.recovery||U(r,e.edge,[.18,.035,.19],[h,1.4175,p*i.cabHalf],"fitted cab lower-hull bearing rail"),U(r,e.castSteel,[.12,.04,.12],[h,i.cabFloor+.02,p*i.cabHalf],"fitted cab frame bearing foot"),Q(r,e.pressedSteel,[h,i.cabFloor+.035,p*i.cabHalf],[h,i.cabRoof-.035,p*i.cabHalf],.029).name="fitted reinforced cab continuous pillar";for(let h of[-1,1])U(r,e.pressedSteel,[i.cabFront-i.cabBack+.08,.05,.065],[(i.cabFront+i.cabBack)/2,i.cabRoof-.025,h*i.cabHalf],"fitted cab roof longitudinal reinforcement");for(let h of[i.cabBack,i.cabFront])U(r,e.pressedSteel,[.065,.05,i.cabHalf*2+.06],[h,i.cabRoof-.025,0],"fitted cab roof transverse reinforcement");let o=h=>i.recovery?2.94-(h-1.74)*(.47/1.01)+.012:i.front-(h-1.2)*.75/1.16,a=i.recovery?1.8:1.48,c=i.recovery?1.99:1.73,l=i.recovery?1.03:i.width*.32,f=Ye(r,e.paint,[[-l,a],[l,a],[l-.055,c],[-l+.055,c]],[],(h,p,m)=>[o(p)+.004+m*.45,p,h]);f.name="fitted reinforced cab lower front skin",f.userData.cutawayShell=!0;let u=n.getObjectByName("driver controls");u&&(u.userData.reinforcedBy=t)}else if(s===5)for(let o of[-1,1]){Ye(r,e.paint,[[-i.length*.36,0],[i.length*.36,0],[i.length*.4,.2],[-i.length*.4,.2]],[],(a,c,l)=>[a,.83+c*.28+l*.3,o*c*3]).name="fitted underside protective plate";for(let a of[-i.length*.3,i.length*.3])U(r,e.edge,[.16,.14,.16],[a,.94,o*.5],"fitted underside carrier attachment")}else{let o=i.recovery?1.13:i.front-1.94,a=i.recovery?2.22:i.front-1.08,c=i.recovery?1.83:1.5,l=i.recovery?2.06:1.83;for(let f of[-1,1]){let u=p=>i.recovery?1.174:i.width/2*(.75+(p-1.2)*.1/1.16)+.012,h=Ye(r,s===1?e.castSteel:e.paint,[[o,c],[a,c],[a+.035,l-.05],[a-.05,l],[o+.03,l]],[],(p,m,_)=>[p,m,f*(u(m)+_*.45)]);h.name="fitted cab side protective panel",h.userData.cutawayShell=!0}}return r}function tx(n,e,t,i,s){let r=t.charCodeAt(4)-65;if([1,2,3,6].includes(r)){let l=Et(t);l.userData={assetId:t,illustrative:!0,units:"metres",fittedZone:"existing axle stations"};for(let f of[...n.children])f.isMesh&&f.geometry.type==="CylinderGeometry"&&f.position.y<1.35&&i.axles.some(u=>Math.abs(f.position.x-u)<.35)&&s(f);for(let f of i.axles){let u=rl(e,{light:r===2,adaptive:r===6,springs:[1,2,3].includes(r),widthOverride:i.wheelZ/.49});u.position.set(f,i.wheelY-.44,0),l.add(u);for(let h of[-1,1]){let p=h*i.wheelZ/.49*.29,m=i.wheelY+.43;i.recovery?U(l,e.edge,[.12,1.6-m,.14],[f+.12,(1.6+m)/2,p],"fitted suspension load-deck bearing bracket"):(U(l,e.edge,[.15,.03,.16],[f+.12,.935,p],"fitted suspension chassis bearing shoe"),Q(l,e.castSteel,[f+.12,.94,p],[f+.12,m,p],.03).name="fitted suspension connected chassis hanger")}}return qn(l)}let o=Xr(t,e);if(o.scale.multiplyScalar(.64),o.position.set(i.front-1.13,i.recovery?.98:1.12,i.recovery?0:.37),o.userData.fittedZone="enclosed front power bay",o.userData.illustrativeFitScale=.64,!i.recovery){let l=n.getObjectByName("driver controls");if(l){for(let u of[...l.children])u.isMesh&&u.position.z>.25&&/seat|bolster|head restraint|restraint|bellows/.test(u.name)&&s(u);for(let u of["cab floor","dashboard","carrier supported dashboard cowl"]){let h=l.getObjectByName(u);if(h)if(h.geometry.type==="ExtrudeGeometry"){let p=h.geometry.parameters;h.geometry.dispose(),h.geometry=new Vt(p.shapes,{...p.options,depth:.84})}else{let p=new Mt().setFromObject(h),m=p.getSize(new L);h.geometry.dispose(),h.geometry=new jt(m.x,m.y,m.z/2,2,Math.min(.01,m.y*.2)),h.position.z=-m.z/4}}}let f=U(n,e.edge,[1.65,.74,.035],[i.front-1.15,1.77,-.015],"fitted engine crew bulkhead");f.userData.cutawayShell=!0}let a=i.recovery?1.64:1.4,c=o.position.y+.064*.64*(r===5?.78:1);for(let l of[-1,1])U(n,e.edge,[1.47,Math.abs(a-c)+.025,.14],[o.position.x-.12,(a+c)/2,o.position.z+l*.38*.64*(r===5?.78:1)],"fitted power-pack carrier bearing beam");return o}function Sd(n,e,t=Wi()){let i=Xc(n,t),s=new Map,r=new Map,o=[];e.forEach(p=>{let m=typeof p=="string"?p:p.id;if(!_d.includes(m))throw new Error("Unknown 3D asset: "+m);if(o.push(m),!m.startsWith("SE-")){let _=m.split("-")[0];s.set(_,m),r.has(_)||r.set(_,[]),r.get(_).push(m)}});let a=i.userData.length||6.25,c=i.userData.width||2.3,l=i.userData.roof||2.75,f=j_(i),u=p=>{p.removeFromParent();let m=new Set,_=new Set(Object.values(t));i.traverse(x=>{x.geometry&&m.add(x.geometry);for(let b of Array.isArray(x.material)?x.material:[x.material])b&&_.add(b)});let g=new Set,d=new Set;p.traverse(x=>{x.geometry&&g.add(x.geometry);for(let b of Array.isArray(x.material)?x.material:[x.material])b&&d.add(b)});for(let x of g)m.has(x)||x.dispose();for(let x of d)_.has(x)||x.dispose()},h=i.getObjectByName(n.toLowerCase()+" mission interior");if(s.has("CAP")&&h){let p=h.getObjectByName("command rear access assembly");p&&(i.updateWorldMatrix(!0,!0),i.attach(p)),u(h)}if(s.has("COM")){let p=i.getObjectByName("mission role electronic installation");p&&u(p);let m=[];i.traverse(_=>{(_.userData.reservedOriginalRadioZone||_.userData.originalRoleElectronics)&&m.push(_)});for(let _ of m)u(_)}if(s.has("SA")&&n==="RECCE"){let p=[];i.traverse(_=>{_.userData.originalRoleSensor&&p.push(_)});for(let _ of p)u(_);let m=B(i,t.paint,.12,.035,[-1,2.37,-.48],"y",.12,40);m.name="recce replaced mast port blanking cover",m.userData.cutawayShell=!0}for(let[p,m]of s){let _=p==="CAP"?Q_(i,t,m,f):p==="PRO"?ex(i,t,m,f):p==="MOB"?tx(i,t,m,f,u):Xr(m,t);if(_.userData.mountedCard=m,_.userData.representativeOnly=!0,_.userData.contributingPurchasedIds=[...r.get(p)],p==="CAP"&&n==="RECOVERY"){let g=i.getObjectByName("recovery stowage");g&&u(g);let d=i.getObjectByName("recovery crane");d&&(d.position.z=-.95)}if(p==="FP"&&(i.getObjectByName("mission weapon")?.removeFromParent(),_.position.set(-.35,l,0)),p==="COM"&&(i.getObjectByName("mission radio")?.removeFromParent(),_.position.set(.1,1.45,-.65),h&&!s.has("CAP"))){let g=m==="COM-B"?3:m==="COM-G"?2:1;U(i,t.edge,[g*.4-.03,.08,.29],[.1,1.47,-.65],"purchased radio supported carrier shelf")}if(p==="SA"&&(i.getObjectByName("mission sensor")?.removeFromParent(),_.position.set(-2.3,l,.5)),p==="ACC")if(m==="ACC-B")_.position.set(-a/2-1.43,0,0);else if(["ACC-C","ACC-E"].includes(m))i.getObjectByName("mission roller")?.removeFromParent(),_.scale.setScalar(1.9),_.rotation.y=Math.PI/2,_.position.set(a/2+1.05,.1,0);else if(["ACC-A","ACC-F"].includes(m)){i.getObjectByName("mounted WR-12")?.removeFromParent(),_.rotation.y=Math.PI/2,_.position.set(a/2+.15,1.15,0),U(i,t.edge,[.8,.27,1.3],[a/2+.1,1.015,0],"winch chassis crossmember");for(let g of[-1,1])Q(i,t.darkSteel,[a/2-.3,.92,g*.44],[a/2+.38,1.12,g*.44],.035).name="winch mounting brace"}else _.position.set(-a/2+.9,1.35,0);i.add(_)}return i.userData.configuration=!0,i.userData.installed=Object.fromEntries(s),i.userData.authoritativePurchaseIds=[...o],i.userData.purchaseSources=Object.fromEntries([...r].map(([p,m])=>[p,[...m]])),i.userData.representation="one physical representative per family; authoritative purchase effects remain additive",i}function Md(n){let e=[];n.traverse(s=>{s.isMesh&&(s.name==="hull shell"||s.userData.cutawayShell===!0)&&e.push({mesh:s,material:s.material,castShadow:s.castShadow,temporary:null})});let t=!1;function i(s){if(t!==!!s){t=!!s;for(let r of e)if(t){let o=a=>{let c=a.clone();return c.transparent=!0,c.opacity=.13,c.depthWrite=!1,c.needsUpdate=!0,c};r.temporary=Array.isArray(r.material)?r.material.map(o):o(r.material),r.mesh.material=r.temporary,r.mesh.castShadow=!1}else{r.mesh.material=r.material,r.mesh.castShadow=r.castShadow;for(let o of Array.isArray(r.temporary)?r.temporary:[r.temporary])o?.dispose();r.temporary=null}}}return{apply:i,dispose(){i(!1)}}}function Ed(n){let e=[...n.children],t=new Map,i=!!n.userData.mission,s=(n.userData.assetId||"").split("-")[0],r=0;function o(u){return u.userData.mountedCard?"equipment:"+u.userData.mountedCard:typeof u.userData.inspectionKey=="string"&&/^engine:(?:head|block|sump|rotating|transmission|intake|exhaust|cooling|services|skid)$/.test(u.userData.inspectionKey)?u.userData.inspectionKey:u.name==="run-flat wheel"?"wheel:"+ ++r:/crane/.test(u.name)?"crane":/driver controls/.test(u.name)?"cockpit":u.name==="mission weapon"?"mount":u.name==="mission radio"?"controls":u.name==="mission sensor"?"optics":u.name==="mission roller"?"front":u.name==="mounted WR-12"?"mechanism":/hull shell|cab rear|deck|lower.*hull/.test(u.name)?"body":/glazing|mirror/.test(u.name)||u.material?.name==="optical glass"?"glass":i?u.position.y<1.25?"chassis":u.position.x>1.5?"front":"body":s==="CAP"||s==="TRAIN"?/roof/.test(u.name)?"roof":u.position.y>.39?"seating":"frame":s==="MOB"?u.position.x>.49?"cooling":u.position.y>.72?"heads":u.material?.name==="machined steel"?"connections":"powertrain":s==="FP"?u.position.x>.45?"barrel":u.position.y<.3?"mount":"controls":s==="COM"||s==="SA"?u.position.y>.65?"optics":u.material?.name==="machined steel"?"connections":"controls":s==="PRO"?u.material?.name==="machined steel"?"connections":"protection":s==="ACC"?u.position.y<.16?"frame":u.material?.name==="machined steel"?"connections":"mechanism":u.position.y>.85?"display":u.position.y>.7?"documents":"frame"}for(let u of e){let h=o(u);if(!t.has(h)){let p=new ut;p.name=h,n.add(p),t.set(h,p)}t.get(h).add(u)}n.updateWorldMatrix(!0,!0);let a=new Mt().setFromObject(n),c=a.getCenter(new L),l=a.getSize(new L),f=[...t].map(([u,h],p)=>{let m=new Mt().setFromObject(h),_=m.getCenter(new L),g=_.clone().sub(c),d;return u==="engine:rotating"||u==="engine:skid"?d=new L:u==="engine:head"?d=new L(0,l.y*.46,0):u==="engine:block"?d=new L(0,l.y*.18,-l.z*.38):u==="engine:sump"?d=new L(0,-l.y*.25,0):u==="engine:transmission"?d=new L(-l.x*.28,0,0):u==="engine:cooling"?d=new L(l.x*.25,0,0):u==="engine:intake"?d=new L(0,l.y*.2,-l.z*.38):u==="engine:exhaust"?d=new L(0,l.y*.15,l.z*.4):u==="engine:services"?d=new L(0,0,-l.z*.3):u.startsWith("wheel:")?d=new L(0,-.15,Math.sign(_.z)||1).multiplyScalar(l.z*.4):u==="body"||u==="roof"?d=new L(0,l.y*.55,0):u==="chassis"||u==="frame"?d=new L(0,-l.y*.26,0):u==="glass"?d=new L(l.x*.18,l.y*.25,0):u==="cockpit"?d=new L(l.x*.2,l.y*.15,-l.z*.55):(g.lengthSq()<.01&&g.set(Math.sin(p*2.4),.8,Math.cos(p*2.4)),d=g.normalize().multiplyScalar(Math.max(l.length()*.24,.22)),d.y+=l.y*.16),{key:u,object:h,origin:h.position.clone(),vector:d,center:_}});return{parts:f,apply(u){if(!Number.isFinite(u)||u<0||u>1)throw Error("Invalid assembly separation");for(let h of f)h.object.position.copy(h.origin).addScaledVector(h.vector,u);n.updateWorldMatrix(!0,!0)},restore(){this.apply(0)}}}function wd(n,e,t,i=[7,4.5,7],s=null){e.updateWorldMatrix(!0,!0);let r=s||new Mt().setFromObject(e,!0),o=r.getCenter(new L),a=r.getSize(new L).length()/2;n.aspect=t;let c=Cs.degToRad(n.fov),l=Math.min(c/2,Math.atan(Math.tan(c/2)*t)),f=Math.max(a/Math.sin(l)/.86,1),u=new L(...i).normalize(),h=[];for(let _ of[r.min.x,r.max.x])for(let g of[r.min.y,r.max.y])for(let d of[r.min.z,r.max.z])h.push(new L(_,g,d));let p=Math.max(a*1.01,.1),m=f;n.near=.001,n.far=f+a*3+1,n.updateProjectionMatrix();for(let _=0;_<24;_++){let g=(p+m)/2;n.position.copy(o).addScaledVector(u,g),n.lookAt(o),n.updateMatrixWorld(!0);let d=0;for(let x of h){let b=x.clone().project(n);d=Math.max(d,Math.abs(b.x),Math.abs(b.y))}d>.86?p=g:m=g}return n.position.copy(o).addScaledVector(u,m),n.lookAt(o),n.near=Math.max(.01,m-a*1.5),n.far=m+a*3+1,n.updateProjectionMatrix(),n.updateMatrixWorld(!0),o}function Td(n,e,t,i=null){e.updateWorldMatrix(!0,!0),n.updateWorldMatrix(!0,!1),n.target.updateWorldMatrix(!0,!1);let s=i||new Mt().setFromObject(e,!0);if(s.isEmpty())return;let r=new L().setFromMatrixPosition(n.matrixWorld).sub(new L().setFromMatrixPosition(n.target.matrixWorld)).normalize();n.shadow.updateMatrices(n);let o=n.shadow.camera,a=[];for(let h of[s.min.x,s.max.x])for(let p of[s.min.y,s.max.y])for(let m of[s.min.z,s.max.z]){let _=new L(h,p,m);a.push(_),r.y>1e-4&&a.push(_.clone().addScaledVector(r,-(p-t)/r.y))}let c=new Mt().setFromPoints(a.map(h=>h.applyMatrix4(o.matrixWorldInverse))),l=s.getSize(new L),f=Math.max(.08,l.length()*.025);Object.assign(o,{left:c.min.x-f,right:c.max.x+f,bottom:c.min.y-f,top:c.max.y+f,near:Math.max(.01,-c.max.z-f),far:Math.max(.1,-c.min.z+f)}),n.shadow.normalBias=Math.min(.006,Math.max(.001,l.length()*65e-5));let u=Math.max((o.right-o.left)/n.shadow.mapSize.x,(o.top-o.bottom)/n.shadow.mapSize.y);n.shadow.radius=Cs.clamp(.045/u,3,48),o.updateProjectionMatrix(),n.shadow.updateMatrices(n)}var qc=8,nx=12,Un=18,ks=44,ct={panel:"#f7f7f2",ink:"#1f302b",muted:"#52675d",line:"#d6ded5",field:"#ffffff",accent:"#365a46",selected:"#e3ece0",disabled:"#edf0e9",disabledInk:"#78877c"},al=n=>Math.max(1,Number.isFinite(n)?n:1),Nn=(n,e,t)=>n&&e>=n.x&&e<n.x+n.w&&t>=n.y&&t<n.y+n.h,Yc=n=>typeof Intl.Segmenter=="function"?Array.from(new Intl.Segmenter(void 0,{granularity:"grapheme"}).segment(n),e=>e.segment):Array.from(n);function Ad(n,e,t=0){n=al(n),e=al(e);let i=n>=850,s=!i&&e<520,r=Math.min(420,n*.4),o=i?{x:n-r,y:0,w:r,h:e}:s?{x:0,y:0,w:n,h:e}:{x:0,y:Math.round(e*.42),w:n,h:e-Math.round(e*.42)},a=i?{x:0,y:0,w:o.x,h:e}:{x:0,y:0,w:n,h:s?e:o.y},c=Math.max(1,Math.floor((o.h-140)/54));return{panel:o,model:a,rowHeight:54,capacity:c,pages:Math.max(1,Math.ceil(t/c)),short:s}}function ll(n,e,t=i=>String(i).length*8){let i=Math.max(1,e),s=[];for(let r of String(n??"").split(`
`)){let o=r.trim().split(/\s+/).filter(Boolean),a="";for(let c of o){if(a&&t(a+" "+c)<=i){a+=" "+c;continue}a&&(s.push(a),a="");let l=Array.from(c);for(;l.length&&t(l.join(""))>i;){let f=1;for(;f<l.length&&t(l.slice(0,f+1).join(""))<=i;)f++;s.push(l.splice(0,f).join(""))}a=l.join("")}a?s.push(a):o.length||s.push("")}return s}function ix(n,e,t,i,s,r=o=>String(o).length*8){let o=String(n??""),a=Math.max(1,e),c=Math.max(1,Math.floor(t)||1),l=v=>Number.isFinite(v)?Math.min(o.length,Math.max(0,Math.floor(v))):o.length,f=l(i),u=l(s),h=Math.min(f,u),p=Math.max(f,u),m=[],_="",g=0,d=0;for(let v of Yc(o)){if(v===`
`||v==="\r"||v===`\r
`){m.push({text:_,start:g,end:d,breakEnd:d+v.length}),_="",g=d+v.length,d=g;continue}_&&r(_+v)>a&&(m.push({text:_,start:g,end:d,breakEnd:d}),_="",g=d),_+=v,d+=v.length}m.push({text:_,start:g,end:d,breakEnd:d});let x=0;for(let v=0;v<m.length;v++)m[v].start<=u&&(x=v);let b=Math.min(Math.max(0,x-Math.floor(c/2)),Math.max(0,m.length-c)),y=m.slice(b,b+c),S=(v,w)=>{let C="",D=v.start;for(let T of Yc(v.text)){if(D+T.length>w)break;C+=T,D+=T.length}return r(C)},E={offset:u,line:x-b,x:Math.min(a,S(m[x],u))},I=[];return y.forEach((v,w)=>{let C=Math.max(v.start,h),D=Math.min(v.end,p),T=v.breakEnd>v.end&&h<=v.end&&p>v.end;if(D>C||T){let R=Math.min(a,S(v,C)),P=Math.min(a,S(v,D));I.push({line:w,x:R,w:Math.max(2,Math.min(a-R,P-R+(T?6:0)))})}}),{lines:y,caret:E,selections:I,first:b,total:m.length,above:b>0,below:b+y.length<m.length}}function sx(n,e,t,i=s=>String(s).length*8){let s=n?.lines||[];if(!s.length)return 0;let r=Math.max(0,Math.min(s.length-1,Math.floor((Number.isFinite(t)?t:0)/Un))),o=s[r],a=o.start,c="",l=0;for(let f of Yc(o.text)){let u=i(c+f);if(e<(l+u)/2)return a;c+=f,a+=f.length,l=u}return o.end}function Rd(n,e,t,i=140,s=r=>String(r).length*8){let r=Math.max(ks,t-i),o=Math.max(1,Math.floor((r-14)/Un)),a=[[]],c=0,l=(u,h)=>{let p=(e-nx*2-(h-1)*qc)/h,m=[...ll(u.label,p-24,s),...u.value?ll(u.value,p-24,s):[]],_=[];for(let g=0;g<m.length;g+=o){let d=m.slice(g,g+o);_.push({row:{...u,label:d.join(`
`),value:null},lines:d,h:Math.max(ks,d.length*Un+14)})}return _},f=u=>{let h=Math.max(...u.map(p=>p.h));c+h>r&&a.at(-1).length&&(a.push([]),c=0),u.forEach((p,m)=>a.at(-1).push({...p,h,column:m,columns:u.length,lastInBand:m===u.length-1})),c+=h};for(let u=0;u<n.length;u++)if(e>=380&&n[u].compact==="bid"&&n[u+1]?.compact==="bid"){let h=l(n[u],2),p=l(n[++u],2);for(let m=0;m<Math.max(h.length,p.length);m++)f([h[m],p[m]].filter(Boolean))}else for(let h of l(n[u],1))f([h]);return a}function rx(n,e,t,i,s=0){if(n.editor){for(let a of n.editorButtons||[])if(Nn(a,e,t))return a.row.disabled?"__panel":a.row.key;for(let a of n.pageButtons||[])if(Nn(a,e,t))return a.disabled?"__panel":a.key;if(Nn(n.editorInput,e,t))return"__editor_input";for(let a of n.placed||[])if(Nn(a,e,t))return a.row.disabled?"__panel":a.row.key;return Nn(n.modal,e,t)?"__panel":null}for(let a of[...n.inspectionButtons||[],...n.primaryButton?[n.primaryButton]:[],...n.headerButtons||[]])if(Nn(a,e,t))return a.row.disabled?"__panel":a.row.key;if(!Nn(n.panel,e,t))return null;for(let a of n.sectionButtons||[])if(Nn(a,e,t))return a.key;for(let a of n.pageButtons||[])if(Nn(a,e,t))return a.disabled?"__panel":a.key;if(n.placed){let a=n.placed.find(c=>Nn(c,e,t));return a&&a.row.kind!=="text"&&!a.row.disabled?a.row.key:"__panel"}if(t>=n.panel.y+n.panel.h-46)return e<n.panel.x+n.panel.w/2?"__previous":"__next";let r=Math.floor((t-n.panel.y-88)/n.rowHeight),o=r>=0&&r<n.capacity?i[s*n.capacity+r]:null;return o&&o.kind!=="text"&&!o.disabled?o.key:"__panel"}function ox(n,e,t,i){let s=n.editor.type==="select"&&t<220,r=8,o=Math.min(640,Math.max(1,e-r*2)),a=Math.min(520,Math.max(1,t-(s?8:r*2))),c={x:(e-o)/2,y:(t-a)/2,w:o,h:a},l={panel:c,model:{x:0,y:0,w:e,h:t},modal:{x:0,y:0,w:e,h:t},editor:!0,editorHeaderPaging:s,short:t<360,sectionButtons:[],inspectionButtons:[],headerButtons:[],primaryButton:null,placed:[],pageButtons:[],pages:1,page:0,footerHeight:s?48:56},f=s?70:t<220?52:76,u=c.y+c.h-l.footerHeight,h=["__editor_previous","__editor_next","__editor_done"],p=(c.w-32-qc*2)/3;if(l.editorButtons=h.map((m,_)=>({row:n.rows.find(g=>g.key===m)||{key:m,kind:"button",label:m,disabled:!0},x:c.x+16+_*(p+qc),y:u,w:p,h:ks})),n.editor.type==="select"){let m=n.rows.filter(d=>d.key.startsWith("__editor_option:")),_=Rd(m,c.w,c.h,f+l.footerHeight+(s?8:60),d=>i(d,14));l.pages=_.length,l.page=Math.min(Math.max(0,Math.floor(Number(n.page)||0)),_.length-1);let g=c.y+f;l.placed=_[l.page].map(d=>{let x={...d,x:c.x+16,y:g,w:c.w-32};return g+=d.h,x}),_.length>1&&(l.pageButtons=[{key:"__previous",x:s?c.x+c.w-116:c.x+16,y:s?c.y+4:u-52,w:48,h:ks,disabled:l.page===0},{key:"__next",x:c.x+c.w-64,y:s?c.y+4:u-52,w:48,h:ks,disabled:l.page===_.length-1}])}else{l.editorInput={x:c.x+16,y:c.y+f,w:c.w-32,h:Math.max(ks,u-(c.y+f)-12)};let m=l.editorInput;l.editorViewport=ix(n.editor.value,m.w-24,Math.floor((m.h-16)/Un),n.editor.selectionStart,n.editor.selectionEnd,_=>i(_,14))}return{layout:l,header:f,compact:t<360}}function ax(n,e,t,i){if(n.editor)return ox(n,e,t,i);let s=Ad(e,t),r=s.panel,o=r.h<340,a=n.rows,c=a.find(P=>P.utility==="language"),l=a.filter(P=>P.utility==="inspection"),f=a.filter(P=>!P.utility),u=f.find(P=>P.primary&&P.kind==="button"&&!P.disabled),h=n.lang==="fr"?{task:"En cours",teams:"\xC9quipes",market:"Manche",tools:"Gestion",inspect:"Explorer",help:o?"Aide":"Aide / sauvegarde"}:{task:"Current",teams:"Teams",market:"Round",tools:"Manage",inspect:"Inspect",help:o?"Help":"Help / save"},p=Object.keys(h).filter(P=>f.some(F=>(F.section||"task")===P));s.section=p.includes(n.section)?n.section:p[0]||"task";let m=s.short&&o?0:o?44:76,_=o?Math.max(1,p.length):Math.min(3,Math.max(1,p.length)),g=p.length>1?Math.ceil(p.length/_):0,d=Math.min(l.length,Math.max(1,Math.floor((s.model.w-20)/48))),x=s.short&&l.length?Math.ceil(l.length/d)*48:0;s.contentY=m+x+g*48+8;let b=o?12:14,y=u?ll(u.label,r.w-48,P=>i(P,b)):[],S=u?Math.max(48,y.length*b*1.25+18):0,E=f.filter(P=>(P.section||"task")===s.section&&P.key!==u?.key),I=Rd(E,r.w,r.h,s.contentY+S+56,P=>i(P,14));s.pages=I.length,s.page=Math.min(Math.max(0,Math.floor(Number(n.page)||0)),I.length-1);let v=I.length>1||s.short&&c?44:0;s.footerHeight=S+v+12,s.headerButtons=c?[{row:c,x:s.short&&o?r.x+r.w-116:r.x+r.w-60,y:s.short&&o?r.y+r.h-56:r.y+4,w:48,h:44}]:[];let w=s.short?r:s.model,C=Math.max(1,d),D=Math.min(108,(w.w-24-(C-1)*4)/C);s.inspectionButtons=l.map((P,F)=>({row:P,x:w.x+12+F%C*(D+4),y:w.y+(s.short?m:12)+Math.floor(F/C)*48,w:D,h:44})),s.sectionButtons=g?p.map((P,F)=>({section:P,key:"__section:"+String(n.sectionEpoch||0)+":"+P,x:r.x+12+F%_*(r.w-24)/_,y:r.y+m+x+Math.floor(F/_)*48,w:(r.w-24)/_-4,h:44,label:h[P]})):[];let T=r.y+s.contentY;s.placed=I[s.page].map(P=>{let F=(r.w-24-(P.columns-1)*8)/P.columns,k=r.x+12+P.column*(F+8),V={...P,x:k,y:T,w:F};return P.lastInBand&&(T+=P.h),V});let R=r.y+r.h-s.footerHeight;return s.primaryButton=u?{row:u,x:r.x+12,y:R,w:r.w-24,h:S,lines:y,size:b}:null,u&&(R+=S),s.pageButtons=v?[{key:"__previous",x:r.x+12,y:R,w:48,h:44,disabled:s.page===0},{key:"__next",x:r.x+r.w-60,y:R,w:48,h:44,disabled:s.page===I.length-1}]:[],{layout:s,header:m,compact:o}}function Cd(){let n=new Hn,e=new ei(0,1,0,1,-10,10),t=new Set,i=document.createElement("canvas").getContext("2d"),s=(g,d=14)=>(i.font=`400 ${d}px system-ui, sans-serif`,i.measureText(String(g)).width),r={rows:[]},o=null,a=Ad(1,1),c=null,l=!1;function f(){n.clear();for(let g of t)g.dispose();t.clear()}function u(...g){for(let d of g)t.add(d)}function h(g,d,x,b,y,S=0,E=0,I=1){if(x<=0||b<=0)return;let v;if(E){let D=Math.min(E,x/2,b/2),T=new It;T.moveTo(D,0),T.lineTo(x-D,0),T.quadraticCurveTo(x,0,x,D),T.lineTo(x,b-D),T.quadraticCurveTo(x,b,x-D,b),T.lineTo(D,b),T.quadraticCurveTo(0,b,0,b-D),T.lineTo(0,D),T.quadraticCurveTo(0,0,D,0),v=new yr(T),v.translate(-x/2,-b/2,0)}else v=new Vn(x,b);let w=new fi({color:y,side:At,toneMapped:!1,depthTest:!1,depthWrite:!1,transparent:I<1||!!r.editor,opacity:I});u(v,w);let C=new xe(v,w);C.position.set(g+x/2,d+b/2,S),n.add(C)}function p(g,d,x,b,y,S=14,E=ct.ink,I="400",v){if(b<=0||y<=0)return;let w=document.createElement("canvas"),C=2;w.width=Math.max(2,Math.ceil(b*C)),w.height=Math.max(2,Math.ceil(y*C));let D=w.getContext("2d");D.scale(C,C),D.font=`${I} ${S}px system-ui, sans-serif`,D.fillStyle=E,D.textBaseline="middle";let T=v||ll(g,b-4,te=>D.measureText(te).width),R=S*1.25;T.forEach((te,J)=>{(J+1)*R<=y+.01&&D.fillText(te,2,(J+.5)*R,b-4)});let P=new lr(w);P.colorSpace=Gt;let F=new Vn(b,y),k=new fi({map:P,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,side:At});u(P,F,k);let V=new xe(F,k);V.scale.y=-1,V.position.set(d+b/2,x+y/2,2),n.add(V)}function m(g,d,{selected:x=!1,primary:b=!1,size:y=12,lines:S}={}){let E=g.row||g,I=E.disabled?ct.disabled:b?E.emphasis==="danger"?"#855744":ct.accent:x?ct.accent:ct.field;h(g.x,g.y,g.w,g.h-4,I,1,8),p(d,g.x+8,g.y+6,g.w-16,g.h-12,y,E.disabled?ct.disabledInk:b||x?"#fff":ct.ink,"400",S)}function _(g,d){if(l)return a;g=al(g),d=al(d),c=[g,d],f();let x=ax(r,g,d,s);a=x.layout;let b=a.panel;if(e.left=0,e.right=g,e.top=0,e.bottom=d,e.updateProjectionMatrix(),a.editor){h(0,0,g,d,"#203028",0,0,.62),h(b.x,b.y,b.w,b.h,ct.panel,1,12);let y=x.header===52;p(r.title,b.x+16,b.y+(y?5:a.editorHeaderPaging?8:12),b.w-(a.editorHeaderPaging?144:32),y?22:26,y||a.editorHeaderPaging?16:18,ct.ink,"600"),p(r.editor.label,b.x+16,b.y+(y?29:a.editorHeaderPaging?48:43),b.w-32,y||a.editorHeaderPaging?18:26,y||a.editorHeaderPaging?12:14,ct.muted);let S=a.editorInput,E=a.editorViewport;if(S){h(S.x-1,S.y-1,S.w+2,S.h+2,ct.accent,1,8),h(S.x,S.y,S.w,S.h,ct.field,1.1,8);for(let I of E.selections)h(S.x+12+I.x,S.y+8+I.line*Un,Math.min(I.w,S.w-24-I.x),Un,ct.selected,1.2);E.lines.forEach((I,v)=>p(I.text,S.x+10,S.y+8+v*Un,S.w-20,Un,14,ct.ink,"400",[I.text])),!r.editor.value&&r.editor.placeholder&&p(r.editor.placeholder,S.x+10,S.y+8,S.w-20,Un,14,ct.muted),h(S.x+12+E.caret.x,S.y+8+E.caret.line*Un,1,Un,ct.accent,3),E.above&&h(S.x+S.w-6,S.y+6,2,6,ct.muted,3),E.below&&h(S.x+S.w-6,S.y+S.h-12,2,6,ct.muted,3)}for(let I of a.placed)m(I,I.row.label,{selected:I.row.selected,size:14,lines:I.lines});for(let I of a.editorButtons)m(I,I.row.label,{primary:I.row.key==="__editor_done"});for(let I of a.pageButtons)m(I,I.key==="__previous"?"\u2039":"\u203A",{size:22});return a.pageButtons.length&&!a.editorHeaderPaging&&p(`${a.page+1} / ${a.pages}`,b.x+72,a.pageButtons[0].y+9,b.w-144,26,12,ct.muted),a}if(h(b.x,b.y,b.w,b.h,ct.panel),h(b.x,b.y,1,b.h,ct.line,1),x.header&&(p(r.title,b.x+20,b.y+10,b.w-(a.headerButtons.length?94:40),30,x.compact?18:24,ct.ink,"600"),!x.compact)){let y=r.context,S=y?[y.role,y.mission,y.team].filter(Boolean).join(" \xB7 "):r.subtitle;p(S,b.x+20,b.y+44,b.w-40,26,12,ct.muted)}for(let y of a.headerButtons)m(y,y.row.label);for(let y of a.inspectionButtons){let S=y.w<72&&y.row.label==="Vue g\xE9n\xE9rale"?"Aper\xE7u":y.row.label;m(y,S,{selected:y.row.selected,size:y.w<72?10:12})}for(let y of a.sectionButtons){let S=y.section===a.section;h(y.x,y.y,y.w,y.h,S?ct.selected:ct.panel,1,8),S&&h(y.x+8,y.y+41,y.w-16,2,ct.accent,1),p(y.label,y.x+5,y.y+9,y.w-10,32,x.compact?10:12,S?ct.ink:ct.muted)}for(let y of a.placed){let S=y.row,E=S.kind==="text";E?h(y.x+8,y.y+y.h-4,y.w-16,1,ct.line,1):(h(y.x,y.y,y.w,y.h-6,S.disabled?ct.disabled:S.kind==="button"?ct.selected:ct.field,1,8),!S.disabled&&S.emphasis==="danger"&&h(y.x,y.y,3,y.h-6,"#965c44",1)),p(S.label,y.x+10,y.y+7,y.w-20,y.h-14,14,S.disabled?ct.disabledInk:E?ct.muted:ct.ink,"400",y.lines)}a.primaryButton&&m(a.primaryButton,a.primaryButton.row.label,{primary:!0,size:a.primaryButton.size,lines:a.primaryButton.lines});for(let y of a.pageButtons)m(y,y.key==="__previous"?"\u2039":"\u203A",{size:22});if(a.pageButtons.length){let y=a.pageButtons[0].y;p(`${a.page+1} / ${a.pages}`,b.x+68,y+9,b.w-(a.short&&x.compact&&a.headerButtons.length?188:136),26,12,ct.muted)}return a}return{scene:n,camera:e,set(g,d,x,b){return l?a:(r={...g,context:g.context?{...g.context}:void 0,editor:g.editor?{...g.editor}:void 0,rows:(g.rows||[]).map(y=>({...y}))},o=d,_(x,b))},resize(g,d){return c?.[0]===g&&c?.[1]===d?a:_(g,d)},hit(g,d){return l?null:rx(a,g,d,r.rows,a.page)},activate(g,d){if(l)return;if(g?.startsWith("__section:")){let b=a.sectionButtons.find(y=>y.key===g);if(b){let y=a;r.section=b.section,r.page=0,o?.("__section",b.section),a===y&&c&&_(...c)}return}if(g==="__previous"||g==="__next"){let b=Math.max(0,Math.min(a.pages-1,a.page+(g==="__next"?1:-1)));b!==a.page&&(r.page=b,o?.(g,b),a.page!==b&&c&&_(...c));return}let x=r.rows.find(b=>b.key===g);if(x&&x.kind!=="text"&&!x.disabled){let b=a.editorInput;g==="__editor_input"&&b&&Number.isFinite(d?.x)&&Number.isFinite(d?.y)&&Nn(b,d.x,d.y)?o?.(g,sx(a.editorViewport,d.x-b.x-12,d.y-b.y-8,y=>s(y,14))):o?.(g)}},get layout(){return a},dispose(){l||(l=!0,o=null,r={rows:[]},f())}}}function lx(n,e,t){let i=new $a({antialias:!0,alpha:!1,powerPreference:"low-power"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.outputColorSpace=Gt,i.toneMapping=Pr,i.toneMappingExposure=.95,i.shadowMap.enabled=!0,i.shadowMap.type=Oi,i.domElement.tabIndex=0,n.appendChild(i.domElement);let s=Cd(),r=!1,o=new Hn;o.background=new Ke("#f0f3f0");let a=new Ls(i),c=new el,l=a.fromScene(c,.04);o.environment=l.texture,o.environmentIntensity=.65,c.dispose(),a.dispose(),o.add(new Mr(15135231,7433055,.28));let f=new Fi(16773595,1.8);f.position.set(-5,9,6),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),Object.assign(f.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:.1,far:50}),f.shadow.normalBias=.015,f.shadow.bias=-1e-4,f.shadow.radius=5,o.add(f);let u=new Fi(15134719,.3);u.position.set(-6,5,-7),o.add(u);let h=new Wt(38,1,.01,100),p=new nl(h,i.domElement);p.enableDamping=!1,p.enablePan=!1,p.enableRotate=!1,p.minZoom=.25,p.maxZoom=5,p.maxPolarAngle=Math.PI*.49;let m=new xe(new Vn(100,100),new br({opacity:.17}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,o.add(m);let _=null,g=!1,d=null,x=0,b=!0,y=null,S=[7,4.5,7],E=null,I=null,v="assembled",w=.7,C=null,D=null;function T(){if(x=0,!b)return;let oe=Math.max(n.clientWidth,1),G=Math.max(n.clientHeight,1);if(i.setViewport(0,0,oe,G),i.setScissorTest(!1),i.clear(),d){let $=r?s.layout.model:{x:0,y:0,w:oe,h:G};i.setViewport($.x,G-$.y-$.h,$.w,$.h),i.setScissor($.x,G-$.y-$.h,$.w,$.h),i.setScissorTest(!0),i.render(o,h)}r&&(i.setScissorTest(!1),i.setViewport(0,0,oe,G),i.autoClear=!1,i.clearDepth(),i.render(s.scene,s.camera),i.autoClear=!0)}function R(){b&&!x&&(x=requestAnimationFrame(T))}p.addEventListener("change",R);function P(){let oe=Math.max(n.clientWidth,1),G=Math.max(n.clientHeight,1);if(i.setSize(oe,G,!1),r&&s.resize(oe,G),!d){R();return}let $=r?s.layout.model:{w:oe,h:G};E.apply(0);let he=new Mt().setFromObject(d,!0);v==="exploded"&&(E.apply(1),he.union(new Mt().setFromObject(d,!0))),m.position.y=he.min.y-.025,p.target.copy(wd(h,d,$.w/$.h,S,he)),Td(f,d,m.position.y,he),E.apply(v==="exploded"?w:0),p.update(),D?.update(),R()}function F(){if(!d)return;o.remove(d);let oe=new Set,G=new Set,$=new Set;d.traverse(he=>{he.geometry&&oe.add(he.geometry),he.material&&(Array.isArray(he.material)?he.material:[he.material]).forEach(Ce=>G.add(Ce))}),oe.forEach(he=>he.dispose()),G.forEach(he=>{for(let Ce of Object.values(he))Ce?.isTexture&&$.add(Ce);he.dispose()}),$.forEach(he=>he.dispose()),d=null}function k(oe,G){y=[oe,G],V(),F();let $=Wi();if(d=new ut,G.startsWith("part:")){let Ze=G.slice(5);if(![oe.current?.id,...oe.owned.map(se=>se.id)].includes(Ze))throw Error("Part is not visible");d.add(Xr(Ze,$))}else d.add(G==="configuration"?Sd(oe.mission,oe.owned,$):Xc(oe.mission,$));let he=d.children[0],Ce=new Mt().setFromObject(he).getCenter(new L);he.position.sub(Ce),d.position.copy(Ce),E=Ed(he);for(let Ze of E.parts)Ze.anchorLocal=d.worldToLocal(Ze.center.clone());d.traverse(Ze=>{if(Ze.isMesh){let se=(Array.isArray(Ze.material)?Ze.material:[Ze.material]).some(ue=>ue.name==="optical glass");Ze.castShadow=!se,Ze.receiveShadow=!0}}),o.add(d);let Re=new Mt().setFromObject(d);m.position.y=Re.min.y-.025,h.zoom=1,S=[7,4.5,7],P(),I=Md(he);let Ve=new Set;d.traverse(Ze=>{Ze.material&&Ve.add(Ze.material)}),Object.values($).forEach(Ze=>{Ve.has(Ze)||Ze.dispose()})}function V(){I?.dispose(),I=null,C&&(C.removeFromParent(),C.geometry.dispose(),C.material.dispose(),C=null),D&&(o.remove(D),D.geometry.dispose(),D.material.dispose(),D=null),E=null}function te(oe,G){if(!E)return;if(!["assembled","exploded","cutaway"].includes(oe)||!Number.isFinite(G)||G<0||G>1)throw Error("Invalid inspection view");let $=v!==oe;if(v=oe,w=G,E.apply(v==="exploded"?w:0),I?.apply(v==="cutaway"),C&&(C.removeFromParent(),C.geometry.dispose(),C.material.dispose(),C=null),v==="exploded"){let he=[];for(let Ce of E.parts)he.push(Ce.anchorLocal.clone(),d.worldToLocal(new Mt().setFromObject(Ce.object).getCenter(new L)));C=new xs(new ft().setFromPoints(he),new Di({color:"#748879",transparent:!0,opacity:.5})),d.add(C)}D?.update(),$?P():R()}let J=new ae,Y=new Ar,K=null,le=null;function me(oe){let G=i.domElement.getBoundingClientRect();return{x:(oe.clientX-G.left)*n.clientWidth/G.width,y:(oe.clientY-G.top)*n.clientHeight/G.height}}function Ue(oe){if(!r)return null;let G=me(oe);return s.hit(G.x,G.y)}i.domElement.addEventListener("pointerdown",oe=>{let G=Ue(oe);G&&(le=G,oe.preventDefault(),oe.stopImmediatePropagation(),i.domElement.setPointerCapture(oe.pointerId))},!0),i.domElement.addEventListener("pointermove",oe=>{(le||Ue(oe))&&(oe.stopImmediatePropagation(),i.domElement.style.cursor=Ue(oe)&&Ue(oe)!=="__panel"?"pointer":"default")},!0),i.domElement.addEventListener("pointerup",oe=>{if(le){let G=le;le=null,oe.preventDefault(),oe.stopImmediatePropagation(),Ue(oe)===G&&(s.activate(G,me(oe)),P())}},!0),i.domElement.addEventListener("wheel",oe=>{Ue(oe)&&(oe.preventDefault(),oe.stopImmediatePropagation(),s.activate(oe.deltaY>0?"__next":"__previous"),P())},{capture:!0,passive:!1}),i.domElement.addEventListener("pointerdown",oe=>{K=[oe.clientX,oe.clientY],_=[oe.clientX,oe.clientY],g=!1,i.domElement.setPointerCapture(oe.pointerId)}),i.domElement.addEventListener("pointermove",oe=>{if(!_||!d)return;let G=oe.clientX-_[0];Math.hypot(oe.clientX-K[0],oe.clientY-K[1])>4&&(g=!0,d.rotation.y+=G*.009,d.updateWorldMatrix(!0,!0),D?.update(),P()),_=[oe.clientX,oe.clientY]}),i.domElement.addEventListener("pointercancel",()=>{_=null,K=null,le=null}),i.domElement.addEventListener("pointerup",oe=>{if(_=null,g||!K||Math.hypot(oe.clientX-K[0],oe.clientY-K[1])>5){K=null;return}if(K=null,!d||!b)return;let G=i.domElement.getBoundingClientRect(),$=r?s.layout.model:{x:0,y:0,w:n.clientWidth,h:n.clientHeight};J.set(((oe.clientX-G.left)*n.clientWidth/G.width-$.x)/$.w*2-1,1-((oe.clientY-G.top)*n.clientHeight/G.height-$.y)/$.h*2),Y.setFromCamera(J,h);for(let he of Y.intersectObject(d,!0)){let Ce=he.object;for(;Ce&&!Ce.userData.mountedCard;)Ce=Ce.parent;if(Ce?.userData.mountedCard){t?.(Ce.userData.mountedCard);break}}});let $e=new ResizeObserver(P);return $e.observe(n),i.domElement.addEventListener("webglcontextlost",oe=>{oe.preventDefault(),b=!1,x&&cancelAnimationFrame(x),x=0,e()}),i.domElement.addEventListener("webglcontextrestored",()=>{b=!0,y&&(k(...y),n.dispatchEvent(new Event("sea3drestored")))}),{update:k,inspect:te,interface(oe,G){r=!0;let $=s.set(oe,G,Math.max(n.clientWidth,1),Math.max(n.clientHeight,1));return P(),$},shadows(oe){i.shadowMap.enabled=!!oe,m.visible=!!oe,R()},parts(){return E?.parts.map(oe=>oe.key)||[]},focus(oe){let G=E?.parts.find($=>$.key===oe);G&&(D&&(o.remove(D),D.geometry.dispose(),D.material.dispose()),D=new Rr(G.object,14001476),o.add(D),R())},view(oe){d&&(d.rotation.y=0),S=oe==="rear"?[-7,4.5,-7]:oe==="front"?[7,2.7,0]:[7,4.5,7],h.zoom=1,P()},dispose(){b=!1,$e.disconnect(),p.dispose(),s.dispose(),V(),F(),m.geometry.dispose(),m.material.dispose(),l.dispose(),i.dispose(),x&&cancelAnimationFrame(x),i.domElement.remove()}}}return Vd(cx);})();
