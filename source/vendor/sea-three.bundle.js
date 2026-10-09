var SEAThree=(()=>{var sl=Object.defineProperty;var Ed=Object.getOwnPropertyDescriptor;var wd=Object.getOwnPropertyNames;var Td=Object.prototype.hasOwnProperty;var Ad=(n,e)=>{for(var t in e)sl(n,t,{get:e[t],enumerable:!0})},Rd=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of wd(e))!Td.call(n,s)&&s!==t&&sl(n,s,{get:()=>e[s],enumerable:!(i=Ed(e,s))||i.enumerable});return n};var Cd=n=>Rd(sl({},"__esModule",{value:!0}),n);var L1={};Ad(L1,{mount:()=>D1});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ph=0,Vl=1,Ih=2;var Di=1,Dh=2,ys=3,_i=0,Wt=1,At=2,kn=0,vs=1,Gl=2,Wl=3,Xl=4,Lh=5;var Li=100,Nh=101,Uh=102,Fh=103,Oh=104,Bh=200,kh=201,zh=202,Hh=203,ql=204,Yl=205,Vh=206,Gh=207,Wh=208,Xh=209,qh=210,Yh=211,Zh=212,Jh=213,Kh=214,_o=0,xo=1,yo=2,ss=3,vo=4,So=5,bo=6,Mo=7,ea=0,$h=1,jh=2,An=0,Zl=1,Jl=2,Kl=3,wr=4,$l=5,jl=6,Ql=7;var ec=300,xi=301,Ni=302,ta=303,na=304,Tr=306,Eo=1e3,Ln=1001,wo=1002,Bt=1003,Qh=1004;var Ar=1005;var Vt=1006,ia=1007;var yi=1008;var sn=1009,tc=1010,nc=1011,Ss=1012,sa=1013,Rn=1014,mn=1015,Cn=1016,ra=1017,oa=1018,bs=1020,ic=35902,sc=35899,rc=1021,oc=1022,gn=1023,Un=1026,vi=1027,aa=1028,la=1029,Si=1030,ca=1031;var ha=1033,Rr=33776,Cr=33777,Pr=33778,Ir=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37488,ya=37489,Dr=37490,va=37491,Sa=37808,ba=37809,Ma=37810,Ea=37811,wa=37812,Ta=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,Ia=37818,Da=37819,La=37820,Na=37821,Ua=36492,Fa=36494,Oa=36495,Ba=36283,ka=36284,Lr=36285,za=36286;var Xs=2300,To=2301,mo=2302,Pl=2303,Il=2400,Dl=2401,Ll=2402;var eu=3200;var Nr=0,tu=1,$n="",zt="srgb",qs="srgb-linear",Ys="linear",ft="srgb";var go=7680;var nu=519,iu=512,su=513,ru=514,Ha=515,ou=516,au=517,Va=518,lu=519,cu=35044;var ac="300 es",bn=2e3,rs=2001;function Pd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Id(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hu(){let n=Zs("canvas");return n.style.display="block",n}var Zc={},os=null;function lc(...n){let e="THREE."+n.shift();os?os("log",e,...n):console.log(e,...n)}function uu(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=uu(n);let e="THREE."+n.shift();if(os)os("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=uu(n);let e="THREE."+n.shift();if(os)os("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ai(...n){let e=n.join(" ");e in Zc||(Zc[e]=!0,Ge(...n))}function du(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var fu={[_o]:xo,[yo]:bo,[vo]:Mo,[ss]:So,[xo]:_o,[bo]:yo,[Mo]:vo,[So]:ss},Mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=1234567,Hs=Math.PI/180,as=180/Math.PI;function Ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function cc(n,e){return(n%e+e)%e}function Dd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Ld(n,e,t){return n!==e?(t-n)/(e-n):0}function Vs(n,e,t){return(1-t)*n+t*e}function Nd(n,e,t,i){return Vs(n,e,1-Math.exp(-t*i))}function Ud(n,e=1){return e-Math.abs(cc(n,e*2)-e)}function Fd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Od(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Bd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kd(n,e){return n+Math.random()*(e-n)}function zd(n){return n*(.5-Math.random())}function Hd(n){n!==void 0&&(Jc=n);let e=Jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vd(n){return n*Hs}function Gd(n){return n*as}function Wd(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Xd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yd(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),p=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*p,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*p,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*p,a*c);break;case"XZX":n.set(a*p,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*p,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*p,a*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ms={DEG2RAD:Hs,RAD2DEG:as,generateUUID:Ui,clamp:tt,euclideanModulo:cc,mapLinear:Dd,inverseLerp:Ld,lerp:Vs,damp:Nd,pingpong:Ud,smoothstep:Fd,smootherstep:Od,randInt:Bd,randFloat:kd,randFloatSpread:zd,seededRandom:Hd,degToRad:Vd,radToDeg:Gd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:qd,setQuaternionFromProperEuler:Yd,normalize:$t,denormalize:ns},ce=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],p=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(d!==_||l!==h||c!==f||p!==m){let g=l*h+c*f+p*m+d*_;g<0&&(h=-h,f=-f,m=-m,_=-_,g=-g);let u=1-a;if(g<.9995){let x=Math.acos(g),M=Math.sin(x);u=Math.sin(u*x)/M,a=Math.sin(a*x)/M,l=l*u+h*a,c=c*u+f*a,p=p*u+m*a,d=d*u+_*a}else{l=l*u+h*a,c=c*u+f*a,p=p*u+m*a,d=d*u+_*a;let x=1/Math.sqrt(l*l+c*c+p*p+d*d);l*=x,c*=x,p*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=p,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],p=i[s+3],d=r[o],h=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+p*d+l*f-c*h,e[t+1]=l*m+p*h+c*d-a*f,e[t+2]=c*m+p*f+a*h-l*d,e[t+3]=p*m-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),p=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*p*d+c*f*m,this._y=c*f*d-h*p*m,this._z=c*p*m+h*f*d,this._w=c*p*d-h*f*m;break;case"YXZ":this._x=h*p*d+c*f*m,this._y=c*f*d-h*p*m,this._z=c*p*m-h*f*d,this._w=c*p*d+h*f*m;break;case"ZXY":this._x=h*p*d-c*f*m,this._y=c*f*d+h*p*m,this._z=c*p*m+h*f*d,this._w=c*p*d-h*f*m;break;case"ZYX":this._x=h*p*d-c*f*m,this._y=c*f*d+h*p*m,this._z=c*p*m-h*f*d,this._w=c*p*d+h*f*m;break;case"YZX":this._x=h*p*d+c*f*m,this._y=c*f*d+h*p*m,this._z=c*p*m-h*f*d,this._w=c*p*d-h*f*m;break;case"XZY":this._x=h*p*d-c*f*m,this._y=c*f*d-h*p*m,this._z=c*p*m+h*f*d,this._w=c*p*d+h*f*m;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],p=t[6],d=t[10],h=i+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(p-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(p-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+p)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+p)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,p=t._w;return this._x=i*p+o*a+s*c-r*l,this._y=s*p+o*l+r*a-i*c,this._z=r*p+o*c+i*l-s*a,this._w=o*p-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),p=Math.sin(c);l=Math.sin(l*c)/p,t=Math.sin(t*c)/p,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),p=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*p,this.y=i+l*p+a*c-r*d,this.z=s+l*d+r*p-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rl=new L,Kc=new cn,$e=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let p=this.elements;return p[0]=e,p[1]=s,p[2]=a,p[3]=t,p[4]=r,p[5]=l,p[6]=i,p[7]=o,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],p=i[4],d=i[7],h=i[2],f=i[5],m=i[8],_=s[0],g=s[3],u=s[6],x=s[1],M=s[4],v=s[7],w=s[2],T=s[5],I=s[8];return r[0]=o*_+a*x+l*w,r[3]=o*g+a*M+l*T,r[6]=o*u+a*v+l*I,r[1]=c*_+p*x+d*w,r[4]=c*g+p*M+d*T,r[7]=c*u+p*v+d*I,r[2]=h*_+f*x+m*w,r[5]=h*g+f*M+m*T,r[8]=h*u+f*v+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],p=e[8];return t*o*p-t*a*c-i*r*p+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],p=e[8],d=p*o-a*c,h=a*l-p*r,f=c*r-o*l,m=t*d+i*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=d*_,e[1]=(s*c-p*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(p*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ol.makeScale(e,t)),this}rotate(e){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ol=new $e,$c=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zd(){let n={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qs]:{primaries:e,whitePoint:i,transfer:Ys,toXYZ:$c,fromXYZ:jc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:$c,fromXYZ:jc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),n}var ot=Zd();function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vi,Ao=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vi===void 0&&(Vi=Zs("canvas")),Vi.width=e.width,Vi.height=e.height;let s=Vi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Vi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jd=0,ls=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ao.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var Kd=0,ll=new L,Qt=class n extends Mn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ln,s=Ln,r=Vt,o=yi,a=gn,l=sn,c=n.DEFAULT_ANISOTROPY,p=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Ui(),this.name="",this.source=new ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=ec;Qt.DEFAULT_ANISOTROPY=1;var Tt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],p=l[4],d=l[8],h=l[1],f=l[5],m=l[9],_=l[2],g=l[6],u=l[10];if(Math.abs(p-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(p+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(f+1)/2,w=(u+1)/2,T=(p+h)/4,I=(d+_)/4,y=(m+g)/4;return M>v&&M>w?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=I/i):v>w?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=y/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=I/r,s=y/r),this.set(i,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(h-p)*(h-p));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(d-_)/x,this.z=(h-p)/x,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ro=class extends Mn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Qt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ls(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Ro{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Js=class extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var pt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,p,d,h,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,p,d,h,f,m,_,g)}set(e,t,i,s,r,o,a,l,c,p,d,h,f,m,_,g){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=p,u[10]=d,u[14]=h,u[3]=f,u[7]=m,u[11]=_,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),p=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=o*p,f=o*d,m=a*p,_=a*d;t[0]=l*p,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*p,f=l*d,m=c*p,_=c*d;t[0]=h+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*p,t[9]=-a,t[2]=f*a-m,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*p,f=l*d,m=c*p,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*p,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*p,f=o*d,m=a*p,_=a*d;t[0]=l*p,t[4]=m*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*p,t[4]=_-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*p,t[9]=-a*p,t[2]=-c*p,t[6]=f*d+m,t[10]=h-_*d}else if(e.order==="XZY"){let h=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*p,t[4]=-d,t[8]=c*p,t[1]=h*d+_,t[5]=o*p,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*p,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($d,e,jd)}lookAt(e,t,i){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ni.crossVectors(i,on),ni.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ni.crossVectors(i,on)),ni.normalize(),Gr.crossVectors(on,ni),s[0]=ni.x,s[4]=Gr.x,s[8]=on.x,s[1]=ni.y,s[5]=Gr.y,s[9]=on.y,s[2]=ni.z,s[6]=Gr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],p=i[1],d=i[5],h=i[9],f=i[13],m=i[2],_=i[6],g=i[10],u=i[14],x=i[3],M=i[7],v=i[11],w=i[15],T=s[0],I=s[4],y=s[8],b=s[12],C=s[1],D=s[5],E=s[9],R=s[13],P=s[2],F=s[6],B=s[10],V=s[14],ee=s[3],J=s[7],X=s[11],K=s[15];return r[0]=o*T+a*C+l*P+c*ee,r[4]=o*I+a*D+l*F+c*J,r[8]=o*y+a*E+l*B+c*X,r[12]=o*b+a*R+l*V+c*K,r[1]=p*T+d*C+h*P+f*ee,r[5]=p*I+d*D+h*F+f*J,r[9]=p*y+d*E+h*B+f*X,r[13]=p*b+d*R+h*V+f*K,r[2]=m*T+_*C+g*P+u*ee,r[6]=m*I+_*D+g*F+u*J,r[10]=m*y+_*E+g*B+u*X,r[14]=m*b+_*R+g*V+u*K,r[3]=x*T+M*C+v*P+w*ee,r[7]=x*I+M*D+v*F+w*J,r[11]=x*y+M*E+v*B+w*X,r[15]=x*b+M*R+v*V+w*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],p=e[2],d=e[6],h=e[10],f=e[14],m=e[3],_=e[7],g=e[11],u=e[15],x=l*f-c*h,M=a*f-c*d,v=a*h-l*d,w=o*f-c*p,T=o*h-l*p,I=o*d-a*p;return t*(_*x-g*M+u*v)-i*(m*x-g*w+u*T)+s*(m*M-_*w+u*I)-r*(m*v-_*T+g*I)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],p=e[10];return t*(o*p-a*c)-i*(r*p-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],p=e[8],d=e[9],h=e[10],f=e[11],m=e[12],_=e[13],g=e[14],u=e[15],x=t*a-i*o,M=t*l-s*o,v=t*c-r*o,w=i*l-s*a,T=i*c-r*a,I=s*c-r*l,y=p*_-d*m,b=p*g-h*m,C=p*u-f*m,D=d*g-h*_,E=d*u-f*_,R=h*u-f*g,P=x*R-M*E+v*D+w*C-T*b+I*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/P;return e[0]=(a*R-l*E+c*D)*F,e[1]=(s*E-i*R-r*D)*F,e[2]=(_*I-g*T+u*w)*F,e[3]=(h*T-d*I-f*w)*F,e[4]=(l*C-o*R-c*b)*F,e[5]=(t*R-s*C+r*b)*F,e[6]=(g*v-m*I-u*M)*F,e[7]=(p*I-h*v+f*M)*F,e[8]=(o*E-a*C+c*y)*F,e[9]=(i*C-t*E-r*y)*F,e[10]=(m*T-_*v+u*x)*F,e[11]=(d*v-p*T-f*x)*F,e[12]=(a*b-o*D-l*y)*F,e[13]=(t*D-i*b+s*y)*F,e[14]=(_*M-m*w-g*x)*F,e[15]=(p*w-d*M+h*x)*F,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,p=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,p*a+i,p*l-s*o,0,c*l-s*a,p*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,p=o+o,d=a+a,h=r*c,f=r*p,m=r*d,_=o*p,g=o*d,u=a*d,x=l*c,M=l*p,v=l*d,w=i.x,T=i.y,I=i.z;return s[0]=(1-(_+u))*w,s[1]=(f+v)*w,s[2]=(m-M)*w,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(h+u))*T,s[6]=(g+x)*T,s[7]=0,s[8]=(m+M)*I,s[9]=(g-x)*I,s[10]=(1-(h+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Gi.set(s[0],s[1],s[2]).length(),a=Gi.set(s[4],s[5],s[6]).length(),l=Gi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yn.copy(this);let c=1/o,p=1/a,d=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=p,yn.elements[5]*=p,yn.elements[6]*=p,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=bn,l=!1){let c=this.elements,p=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===bn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===rs)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=bn,l=!1){let c=this.elements,p=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===bn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===rs)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=p,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Gi=new L,yn=new pt,$d=new L(0,0,0),jd=new L(1,1,1),ni=new L,Gr=new L,on=new L,Qc=new pt,eh=new cn,Fn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],p=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-p,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-p,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eh.setFromEuler(this),this.setFromQuaternion(eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qd=0,th=new L,Wi=new cn,Gn=new pt,Wr=new L,Ls=new L,ef=new L,tf=new cn,nh=new L(1,0,0),ih=new L(0,1,0),sh=new L(0,0,1),rh={type:"added"},nf={type:"removed"},Xi={type:"childadded",child:null},cl={type:"childremoved",child:null},Lt=class n extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Fn,i=new cn,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new $e}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(nh,e)}rotateY(e){return this.rotateOnAxis(ih,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return th.copy(e).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nh,e)}translateY(e){return this.translateOnAxis(ih,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wr.copy(e):Wr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ls,Wr,this.up):Gn.lookAt(Wr,Ls,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nf),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rh),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,ef),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,tf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),p=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let p=a[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new L(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var St=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sf={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),u=this._getHandJoint(c,_);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let p=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=p.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new St;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function hl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ke=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=cc(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=hl(o,r,e+1/3),this.g=hl(o,r,e),this.b=hl(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=pu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ot.workingToColorSpace(Yt.copy(this),e),Math.round(tt(Yt.r*255,0,255))*65536+Math.round(tt(Yt.g*255,0,255))*256+Math.round(tt(Yt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Yt.copy(this),t);let i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,p=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=p<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=zt){ot.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,s=Yt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Xr);let i=Vs(ii.h,Xr.h,t),s=Vs(ii.s,Xr.s,t),r=Vs(ii.l,Xr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Ke;Ke.NAMES=pu;var On=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},vn=new L,Wn=new L,ul=new L,Xn=new L,qi=new L,Yi=new L,oh=new L,dl=new L,fl=new L,pl=new L,ml=new Tt,gl=new Tt,_l=new Tt,ai=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),Wn.subVectors(i,t),ul.subVectors(e,t);let o=vn.dot(vn),a=vn.dot(Wn),l=vn.dot(ul),c=Wn.dot(Wn),p=Wn.dot(ul),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-a*p)*h,m=(o*p-a*l)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,i),_l.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ml,r.x),o.addScaledVector(gl,r.y),o.addScaledVector(_l,r.z),o}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),Wn.subVectors(e,t),vn.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),vn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;qi.subVectors(s,i),Yi.subVectors(r,i),dl.subVectors(e,i);let l=qi.dot(dl),c=Yi.dot(dl);if(l<=0&&c<=0)return t.copy(i);fl.subVectors(e,s);let p=qi.dot(fl),d=Yi.dot(fl);if(p>=0&&d<=p)return t.copy(s);let h=l*d-p*c;if(h<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(i).addScaledVector(qi,o);pl.subVectors(e,r);let f=qi.dot(pl),m=Yi.dot(pl);if(m>=0&&f<=m)return t.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Yi,a);let g=p*m-f*d;if(g<=0&&d-p>=0&&f-m>=0)return oh.subVectors(r,s),a=(d-p)/(d-p+(f-m)),t.copy(s).addScaledVector(oh,a);let u=1/(g+_+h);return o=_*u,a=h*u,t.copy(i).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Yr.subVectors(this.max,Ns),Zi.subVectors(e.a,Ns),Ji.subVectors(e.b,Ns),Ki.subVectors(e.c,Ns),si.subVectors(Ji,Zi),ri.subVectors(Ki,Ji),Mi.subVectors(Zi,Ki);let t=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Mi.z,Mi.y,si.z,0,-si.x,ri.z,0,-ri.x,Mi.z,0,-Mi.x,-si.y,si.x,0,-ri.y,ri.x,0,-Mi.y,Mi.x,0];return!xl(t,Zi,Ji,Ki,Yr)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,Zi,Ji,Ki,Yr))?!1:(Zr.crossVectors(si,ri),t=[Zr.x,Zr.y,Zr.z],xl(t,Zi,Ji,Ki,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qn=[new L,new L,new L,new L,new L,new L,new L,new L],Sn=new L,qr=new bt,Zi=new L,Ji=new L,Ki=new L,si=new L,ri=new L,Mi=new L,Ns=new L,Yr=new L,Zr=new L,Ei=new L;function xl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ei.fromArray(n,r);let a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),p=i.dot(Ei);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>a)return!1}return!0}var It=new L,Jr=new ce,rf=0,jt=class extends Mn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cu,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ks=class extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var $s=class extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Qe=class extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}},of=new bt,Us=new L,yl=new L,Jn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):of.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);let t=Us.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Us,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(yl)),this.expandByPoint(Us.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},af=0,pn=new pt,vl=new Lt,$i=new L,an=new bt,Fs=new bt,Ot=new L,_t=class n extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?$s:Ks)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(an.min,Fs.min),an.expandByPoint(Ot),Ot.addVectors(an.max,Fs.max),an.expandByPoint(Ot)):(an.expandByPoint(Fs.min),an.expandByPoint(Fs.max))}an.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,p=a.count;c<p;c++)Ot.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(e,c),Ot.add($i)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new jt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new L,l[y]=new L;let c=new L,p=new L,d=new L,h=new ce,f=new ce,m=new ce,_=new L,g=new L;function u(y,b,C){c.fromBufferAttribute(i,y),p.fromBufferAttribute(i,b),d.fromBufferAttribute(i,C),h.fromBufferAttribute(r,y),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),p.sub(c),d.sub(c),f.sub(h),m.sub(h);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(_.copy(p).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(p,-m.x).multiplyScalar(D),a[y].add(_),a[b].add(_),a[C].add(_),l[y].add(g),l[b].add(g),l[C].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,b=x.length;y<b;++y){let C=x[y],D=C.start,E=C.count;for(let R=D,P=D+E;R<P;R+=3)u(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let M=new L,v=new L,w=new L,T=new L;function I(y){w.fromBufferAttribute(s,y),T.copy(w);let b=a[y];M.copy(b),M.sub(w.multiplyScalar(w.dot(b))).normalize(),v.crossVectors(T,b);let D=v.dot(l[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,D)}for(let y=0,b=x.length;y<b;++y){let C=x[y],D=C.start,E=C.count;for(let R=D,P=D+E;R<P;R+=3)I(e.getX(R+0)),I(e.getX(R+1)),I(e.getX(R+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,p=new L,d=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){let m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),p.subVectors(o,r),d.subVectors(s,r),p.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(p),l.add(p),c.add(p),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),p.subVectors(o,r),d.subVectors(s,r),p.cross(d),i.setXYZ(h+0,p.x,p.y,p.z),i.setXYZ(h+1,p.x,p.y,p.z),i.setXYZ(h+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,p=a.itemSize,d=a.normalized,h=new c.constructor(l.length*p),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*p;for(let u=0;u<p;u++)h[m++]=c[f++]}return new jt(h,p,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let p=0,d=c.length;p<d;p++){let h=c[p],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],p=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];p.push(f.toJSON(e.data))}p.length>0&&(s[l]=p,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let p=s[c];this.setAttribute(c,p.clone(t))}let r=e.morphAttributes;for(let c in r){let p=[],d=r[c];for(let h=0,f=d.length;h<f;h++)p.push(d[h].clone(t));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,p=o.length;c<p;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sl=new L,lf=new L,cf=new $e,ln=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Sl.subVectors(i,t).cross(lf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||cf.getNormalMatrix(e),s=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hf=0,En=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=vs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Yl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ln().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Yn=new L,bl=new L,Kr=new L,$r=new L,li=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){bl.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(bl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=$r.dot(this.direction),l=-$r.dot(Kr),c=$r.lengthSq(),p=Math.abs(1-o*o),d,h,f,m;if(p>0)if(d=o*l-a,h=o*a-l,m=r*p,d>=0)if(h>=-m)if(h<=m){let _=1/p;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(bl).addScaledVector(Kr,h),f}intersectSphere(e,t){if(e.radius<0)return null;Yn.subVectors(e.center,this.origin);let i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),p>=0?(r=(e.min.y-h.y)*p,o=(e.max.y-h.y)*p):(r=(e.max.y-h.y)*p,o=(e.min.y-h.y)*p),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,p=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,m=t.x-o.x,_=t.y-o.y,g=t.z-o.z,u=i.x-o.x,x=i.y-o.y,M=i.z-o.z,v=Math.abs(l),w=Math.abs(c),T=Math.abs(p),I,y,b,C,D,E,R,P,F,B,V,ee;if(v>=w&&v>=T?(b=l,E=d,F=m,ee=u,l>=0?(I=c,y=p,C=h,D=f,R=_,P=g,B=x,V=M):(I=p,y=c,C=f,D=h,R=g,P=_,B=M,V=x)):w>=T?(b=c,E=h,F=_,ee=x,c>=0?(I=p,y=l,C=f,D=d,R=g,P=m,B=M,V=u):(I=l,y=p,C=d,D=f,R=m,P=g,B=u,V=M)):(b=p,E=f,F=g,ee=M,p>=0?(I=l,y=c,C=d,D=h,R=m,P=_,B=u,V=x):(I=c,y=l,C=h,D=d,R=_,P=m,B=x,V=u)),b===0)return null;let J=I/b,X=y/b,K=1/b,q=C-J*E,le=D-X*E,ge=R-J*F,se=P-X*F,fe=B-J*ee,W=V-X*ee,j=fe*se-W*ge,ue=q*W-le*fe,ze=ge*le-se*q;if(s){if(j<0||ue<0||ze<0)return null}else if((j<0||ue<0||ze<0)&&(j>0||ue>0||ze>0))return null;let xe=j+ue+ze;if(xe===0)return null;let Ie=K*(j*E+ue*F+ze*ee);return(xe>0?Ie<0:Ie>0)?null:this.at(Ie/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ci=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ah=new pt,wi=new li,jr=new Jn,lh=new L,Qr=new L,eo=new L,to=new L,Ml=new L,no=new L,ch=new L,io=new L,we=class extends Lt{constructor(e=new _t,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let p=a[l],d=r[l];p!==0&&(Ml.fromBufferAttribute(d,e),o?no.addScaledVector(Ml,p):no.addScaledVector(Ml.sub(t),p))}t.add(no)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(jr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(jr,lh)===null||wi.origin.distanceToSquared(lh)>(e.far-e.near)**2))&&(ah.copy(r).invert(),wi.copy(e.ray).applyMatrix4(ah),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,p=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let g=h[m],u=o[g.materialIndex],x=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,w=M;v<w;v+=3){let T=a.getX(v),I=a.getX(v+1),y=a.getX(v+2);s=so(this,u,e,i,c,p,d,T,I,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,u=_;g<u;g+=3){let x=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=so(this,o,e,i,c,p,d,x,M,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let g=h[m],u=o[g.materialIndex],x=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,w=M;v<w;v+=3){let T=v,I=v+1,y=v+2;s=so(this,u,e,i,c,p,d,T,I,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,u=_;g<u;g+=3){let x=g,M=g+1,v=g+2;s=so(this,o,e,i,c,p,d,x,M,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function uf(n,e,t,i,s,r,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===_i,a),l===null)return null;io.copy(a),io.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:n}}function so(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Qr),n.getVertexPosition(l,eo),n.getVertexPosition(c,to);let p=uf(n,e,t,i,Qr,eo,to,ch);if(p){let d=new L;ai.getBarycoord(ch,Qr,eo,to,d),s&&(p.uv=ai.getInterpolatedAttribute(s,a,l,c,d,new ce)),r&&(p.uv1=ai.getInterpolatedAttribute(r,a,l,c,d,new ce)),o&&(p.normal=ai.getInterpolatedAttribute(o,a,l,c,d,new L),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new L,materialIndex:0};ai.getNormal(Qr,eo,to,h.normal),p.face=h,p.barycoord=d}return p}var js=class extends Qt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Bt,p=Bt,d,h){super(null,o,a,l,c,p,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ji=new pt,hh=new pt,ro=[],uh=new bt,df=new pt,Os=new we,Bs=new Jn,er=class extends we{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,df)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ji),uh.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(uh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ji),Bs.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),hh.multiplyMatrices(i,ji),Os.matrixWorld=hh,Os.raycast(e,ro);for(let o=0,a=ro.length;o<a;o++){let l=ro[o];l.instanceId=r,l.object=this,t.push(l)}ro.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new js(new Float32Array(s*this.count),s,this.count,aa,mn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new Jn,ff=new ce(.5,.5),oo=new L,us=class{constructor(e=new ln,t=new ln,i=new ln,s=new ln,r=new ln,o=new ln){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],p=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],g=r[10],u=r[11],x=r[12],M=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,f-p,u-m,w-x).normalize(),s[1].setComponents(c+o,f+p,u+m,w+x).normalize(),s[2].setComponents(c+a,f+d,u+_,w+M).normalize(),s[3].setComponents(c-a,f-d,u-_,w-M).normalize(),i)s[4].setComponents(l,h,g,v).normalize(),s[5].setComponents(c-l,f-h,u-g,w-v).normalize();else if(s[4].setComponents(c-l,f-h,u-g,w-v).normalize(),t===bn)s[5].setComponents(c+l,f+h,u+g,w+v).normalize();else if(t===rs)s[5].setComponents(l,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=ff.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ri=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Po=new L,Io=new L,dh=new pt,ks=new li,ao=new Jn,El=new L,fh=new L,Do=class extends Lt{constructor(e=new _t,t=new Ri){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Po.fromBufferAttribute(t,s-1),Io.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Po.distanceTo(Io);e.setAttribute("lineDistance",new Qe(i,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ao.copy(i.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;dh.copy(s).invert(),ks.copy(e.ray).applyMatrix4(dh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,p=i.index,h=i.attributes.position;if(p!==null){let f=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let u=p.getX(_),x=p.getX(_+1),M=lo(this,e,ks,l,u,x,_);M&&t.push(M)}if(this.isLineLoop){let _=p.getX(m-1),g=p.getX(f),u=lo(this,e,ks,l,_,g,m-1);u&&t.push(u)}}else{let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let u=lo(this,e,ks,l,_,_+1,_);u&&t.push(u)}if(this.isLineLoop){let _=lo(this,e,ks,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lo(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Po.fromBufferAttribute(a,s),Io.fromBufferAttribute(a,r),t.distanceSqToSegment(Po,Io,El,fh)>i)return;El.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(El);if(!(c<e.near||c>e.far))return{distance:c,point:fh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var ph=new L,mh=new L,ds=class extends Do{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)ph.fromBufferAttribute(t,s),mh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ph.distanceTo(mh);e.setAttribute("lineDistance",new Qe(i,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tr=class extends Qt{constructor(e=[],t=xi,i,s,r,o,a,l,c,p){super(e,t,i,s,r,o,a,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nr=class extends Qt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hi=class extends Qt{constructor(e,t,i=Rn,s,r,o,a=Bt,l=Bt,c,p=Un,d=1){if(p!==Un&&p!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,o,a,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Lo=class extends hi{constructor(e,t=Rn,i=xi,s,r,o=Bt,a=Bt,l,c=Un){let p={width:e,height:e,depth:1},d=[p,p,p,p,p,p];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ir=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},nn=class n extends _t{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],p=[],d=[],h=0,f=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(p,3)),this.setAttribute("uv",new Qe(d,2));function m(_,g,u,x,M,v,w,T,I,y,b){let C=v/I,D=w/y,E=v/2,R=w/2,P=T/2,F=I+1,B=y+1,V=0,ee=0,J=new L;for(let X=0;X<B;X++){let K=X*D-R;for(let q=0;q<F;q++){let le=q*C-E;J[_]=le*x,J[g]=K*M,J[u]=P,c.push(J.x,J.y,J.z),J[_]=0,J[g]=0,J[u]=T>0?1:-1,p.push(J.x,J.y,J.z),d.push(q/I),d.push(1-X/y),V+=1}}for(let X=0;X<y;X++)for(let K=0;K<I;K++){let q=h+K+F*X,le=h+K+F*(X+1),ge=h+(K+1)+F*(X+1),se=h+(K+1)+F*X;l.push(q,le,se),l.push(le,ge,se),ee+=6}a.addGroup(f,ee,b),f+=ee,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},sr=class n extends _t{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],p=t/2,d=Math.PI/2*e,h=t,f=2*d+h,m=i*2+r,_=s+1,g=new L,u=new L;for(let x=0;x<=m;x++){let M=0,v=0,w=0,T=0;if(x<=i){let b=x/i,C=b*Math.PI/2;v=-p-e*Math.cos(C),w=e*Math.sin(C),T=-e*Math.cos(C),M=b*d}else if(x<=i+r){let b=(x-i)/r;v=-p+b*t,w=e,T=0,M=d+b*h}else{let b=(x-i-r)/i,C=b*Math.PI/2;v=p+e*Math.sin(C),w=e*Math.cos(C),T=e*Math.sin(C),M=d+h+b*d}let I=Math.max(0,Math.min(1,M/f)),y=0;x===0?y=.5/s:x===m&&(y=-.5/s);for(let b=0;b<=s;b++){let C=b/s,D=C*Math.PI*2,E=Math.sin(D),R=Math.cos(D);u.x=-w*R,u.y=v,u.z=w*E,a.push(u.x,u.y,u.z),g.set(-w*R,T,w*E),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+y,I)}if(x>0){let b=(x-1)*_;for(let C=0;C<s;C++){let D=b+C,E=b+C+1,R=x*_+C,P=x*_+C+1;o.push(D,E,R),o.push(E,P,R)}}}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var rr=class n extends _t{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let p=[],d=[],h=[],f=[],m=0,_=[],g=i/2,u=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(p),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(f,2));function x(){let v=new L,w=new L,T=0,I=(t-e)/i;for(let y=0;y<=r;y++){let b=[],C=y/r,D=C*(t-e)+e;for(let E=0;E<=s;E++){let R=E/s,P=R*l+a,F=Math.sin(P),B=Math.cos(P);w.x=D*F,w.y=-C*i+g,w.z=D*B,d.push(w.x,w.y,w.z),v.set(F,I,B).normalize(),h.push(v.x,v.y,v.z),f.push(R,1-C),b.push(m++)}_.push(b)}for(let y=0;y<s;y++)for(let b=0;b<r;b++){let C=_[b][y],D=_[b+1][y],E=_[b+1][y+1],R=_[b][y+1];(e>0||b!==0)&&(p.push(C,D,R),T+=3),(t>0||b!==r-1)&&(p.push(D,E,R),T+=3)}c.addGroup(u,T,0),u+=T}function M(v){let w=m,T=new ce,I=new L,y=0,b=v===!0?e:t,C=v===!0?1:-1;for(let E=1;E<=s;E++)d.push(0,g*C,0),h.push(0,C,0),f.push(.5,.5),m++;let D=m;for(let E=0;E<=s;E++){let P=E/s*l+a,F=Math.cos(P),B=Math.sin(P);I.x=b*B,I.y=g*C,I.z=b*F,d.push(I.x,I.y,I.z),h.push(0,C,0),T.x=F*.5+.5,T.y=B*.5*C+.5,f.push(T.x,T.y),m++}for(let E=0;E<s;E++){let R=w+E,P=D+E;v===!0?p.push(P,P+1,R):p.push(P+1,P,R),y+=3}c.addGroup(u,y,v===!0?1:2),u+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let p=i[s],h=i[s+1]-p,f=(o-p)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,s=[],r=[],o=[],a=new L,l=new pt;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,p=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);p<=c&&(c=p,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(tt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(tt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fs=class extends hn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let p=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*p-f*d+this.aX,c=h*d+f*p+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},No=class extends fs{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,p,d){let h=(o-r)/c-(a-r)/(c+p)+(a-o)/p,f=(a-o)/p-(l-o)/(p+d)+(l-a)/d;h*=p,f*=p,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var gh=new L,_h=new L,wl=new hc,Tl=new hc,Al=new hc,ps=class extends hn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,p;this.closed||a>0?c=s[(a-1)%r]:(_h.subVectors(s[0],s[1]).add(s[0]),c=_h);let d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?p=s[(a+2)%r]:(gh.subVectors(s[r-1],s[r-2]).add(s[r-1]),p=gh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(p),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),wl.initNonuniformCatmullRom(c.x,d.x,h.x,p.x,m,_,g),Tl.initNonuniformCatmullRom(c.y,d.y,h.y,p.y,m,_,g),Al.initNonuniformCatmullRom(c.z,d.z,h.z,p.z,m,_,g)}else this.curveType==="catmullrom"&&(wl.initCatmullRom(c.x,d.x,h.x,p.x,this.tension),Tl.initCatmullRom(c.y,d.y,h.y,p.y,this.tension),Al.initCatmullRom(c.z,d.z,h.z,p.z,this.tension));return i.set(wl.calc(l),Tl.calc(l),Al.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xh(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function pf(n,e){let t=1-n;return t*t*e}function mf(n,e){return 2*(1-n)*n*e}function gf(n,e){return n*n*e}function Gs(n,e,t,i){return pf(n,e)+mf(n,t)+gf(n,i)}function _f(n,e){let t=1-n;return t*t*t*e}function xf(n,e){let t=1-n;return 3*t*t*n*e}function yf(n,e){return 3*(1-n)*n*n*e}function vf(n,e){return n*n*n*e}function Ws(n,e,t,i,s){return _f(n,e)+xf(n,t)+yf(n,i)+vf(n,s)}var or=class extends hn{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ws(e,s.x,r.x,o.x,a.x),Ws(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Uo=class extends hn{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ws(e,s.x,r.x,o.x,a.x),Ws(e,s.y,r.y,o.y,a.y),Ws(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ar=class extends hn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends hn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lr=class extends hn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(e,s.x,r.x,o.x),Gs(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cr=class extends hn{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(e,s.x,r.x,o.x),Gs(e,s.y,r.y,o.y),Gs(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hr=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],p=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(xh(a,l.x,c.x,p.x,d.x),xh(a,l.y,c.y,p.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Oo=Object.freeze({__proto__:null,ArcCurve:No,CatmullRomCurve3:ps,CubicBezierCurve:or,CubicBezierCurve3:Uo,EllipseCurve:fs,LineCurve:ar,LineCurve3:Fo,QuadraticBezierCurve:lr,QuadraticBezierCurve3:cr,SplineCurve:hr}),Bo=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let p=l[c];i&&i.equals(p)||(t.push(p),i=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Oo[s.type]().fromJSON(s))}return this}},en=class extends Bo{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ar(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new lr(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new or(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new hr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+c,t+p,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new fs(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let p=c.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Dt=class extends en{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new en().fromJSON(s))}return this}};function Sf(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=mu(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Tf(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let p=a,d=l;for(let h=t;h<s;h+=t){let f=n[h],m=n[h+1];f<a&&(a=f),m<l&&(l=m),f>p&&(p=f),m>d&&(d=m)}c=Math.max(p-a,d-l),c=c!==0?32767/c:0}return ur(r,o,t,a,l,c,0),o}function mu(n,e,t,i,s){let r;if(s===Of(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=yh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=yh(o/i|0,n[o],n[o+1],r);return r&&ms(r,r.next)&&(fr(r),r=r.next),r}function Ci(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ms(t,t.next)||Rt(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ur(n,e,t,i,s,r,o){if(!n)return;!o&&r&&If(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Mf(n,i,s,r):bf(n)){e.push(l.i,n.i,c.i),fr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Ef(Ci(n),e),ur(n,e,t,i,s,r,2)):o===2&&wf(n,e,t,i,s,r):ur(Ci(n),e,t,i,s,r,1);break}}}function bf(n){let e=n.prev,t=n,i=n.next;if(Rt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,p=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c),m=i.next;for(;m!==e;){if(m.x>=p&&m.x<=h&&m.y>=d&&m.y<=f&&zs(s,a,r,l,o,c,m.x,m.y)&&Rt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Mf(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Rt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,p=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),m=Math.min(p,d,h),_=Math.max(a,l,c),g=Math.max(p,d,h),u=Nl(f,m,e,t,i),x=Nl(_,g,e,t,i),M=n.prevZ,v=n.nextZ;for(;M&&M.z>=u&&v&&v.z<=x;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&zs(a,p,l,d,c,h,M.x,M.y)&&Rt(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&zs(a,p,l,d,c,h,v.x,v.y)&&Rt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=u;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&zs(a,p,l,d,c,h,M.x,M.y)&&Rt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&zs(a,p,l,d,c,h,v.x,v.y)&&Rt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ef(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ms(i,s)&&_u(i,t,t.next,s)&&dr(i,s)&&dr(s,i)&&(e.push(i.i,t.i,s.i),fr(t),fr(t.next),t=n=s),t=t.next}while(t!==n);return Ci(t)}function wf(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nf(o,a)){let l=xu(o,a);o=Ci(o,o.next),l=Ci(l,l.next),ur(o,e,t,i,s,r,0),ur(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Tf(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=mu(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Lf(c))}s.sort(Af);for(let r=0;r<s.length;r++)t=Rf(s[r],t);return t}function Af(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Rf(n,e){let t=Cf(n,e);if(!t)return e;let i=xu(t,n);return Ci(i,i.next),Ci(t,t.next)}function Cf(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(ms(n,t))return t;do{if(ms(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,p=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&gu(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);dr(t,n)&&(d<p||d===p&&(t.x>o.x||t.x===o.x&&Pf(o,t)))&&(o=t,p=d)}t=t.next}while(t!==a);return o}function Pf(n,e){return Rt(n.prev,n,e.prev)<0&&Rt(e.next,n,n.next)<0}function If(n,e,t,i){let s=n;do s.z===0&&(s.z=Nl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Df(s)}function Df(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Nl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Lf(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function gu(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function zs(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&gu(n,e,t,i,s,r,o,a)}function Nf(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Uf(n,e)&&(dr(n,e)&&dr(e,n)&&Ff(n,e)&&(Rt(n.prev,n,e.prev)||Rt(n,e.prev,e))||ms(n,e)&&Rt(n.prev,n,n.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ms(n,e){return n.x===e.x&&n.y===e.y}function _u(n,e,t,i){let s=ho(Rt(n,e,t)),r=ho(Rt(n,e,i)),o=ho(Rt(t,i,n)),a=ho(Rt(t,i,e));return!!(s!==r&&o!==a||s===0&&co(n,t,e)||r===0&&co(n,i,e)||o===0&&co(t,n,i)||a===0&&co(t,e,i))}function co(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ho(n){return n>0?1:n<0?-1:0}function Uf(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&_u(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function dr(n,e){return Rt(n.prev,n,n.next)<0?Rt(n,e,n.next)>=0&&Rt(n,n.prev,e)>=0:Rt(n,e,n.prev)<0||Rt(n,n.next,e)<0}function Ff(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function xu(n,e){let t=Ul(n.i,n.x,n.y),i=Ul(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function yh(n,e,t,i){let s=Ul(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function fr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ul(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Of(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Fl=class{static triangulate(e,t,i=2){return Sf(e,t,i)}},Nn=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];vh(e),Sh(i,e);let o=e.length;t.forEach(vh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Sh(i,t[l]);let a=Fl.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function vh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Sh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Gt=class n extends _t{constructor(e=new Dt([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Bf,M,v=!1,w,T,I,y;if(u){M=u.getSpacedPoints(p),v=!0,h=!1;let oe=u.isCatmullRomCurve3?u.closed:!1;w=u.computeFrenetFrames(p,oe),T=new L,I=new L,y=new L}h||(g=0,f=0,m=0,_=0);let b=a.extractPoints(c),C=b.shape,D=b.holes;if(!Nn.isClockWise(C)){C=C.reverse();for(let oe=0,de=D.length;oe<de;oe++){let pe=D[oe];Nn.isClockWise(pe)&&(D[oe]=pe.reverse())}}function R(oe){let pe=10000000000000001e-36,me=oe[0];for(let ve=1;ve<=oe.length;ve++){let We=ve%oe.length,Ve=oe[We],Je=Ve.x-me.x,je=Ve.y-me.y,O=Je*Je+je*je,ht=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(me.x),Math.abs(me.y)),st=pe*ht*ht;if(O<=st){oe.splice(We,1),ve--;continue}me=Ve}}R(C),D.forEach(R);let P=D.length,F=C;for(let oe=0;oe<P;oe++){let de=D[oe];C=C.concat(de)}function B(oe,de,pe){return de||qe("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(de,pe)}let V=C.length;function ee(oe,de,pe){let me,ve,We,Ve=oe.x-de.x,Je=oe.y-de.y,je=pe.x-oe.x,O=pe.y-oe.y,ht=Ve*Ve+Je*Je,st=Ve*O-Je*je;if(Math.abs(st)>Number.EPSILON){let N=Math.sqrt(ht),S=Math.sqrt(je*je+O*O),G=de.x-Je/N,$=de.y+Ve/N,te=pe.x-O/S,_e=pe.y+je/S,ye=((te-G)*O-(_e-$)*je)/(Ve*O-Je*je);me=G+Ve*ye-oe.x,ve=$+Je*ye-oe.y;let ie=me*me+ve*ve;if(ie<=2)return new ce(me,ve);We=Math.sqrt(ie/2)}else{let N=!1;Ve>Number.EPSILON?je>Number.EPSILON&&(N=!0):Ve<-Number.EPSILON?je<-Number.EPSILON&&(N=!0):Math.sign(Je)===Math.sign(O)&&(N=!0),N?(me=-Je,ve=Ve,We=Math.sqrt(ht)):(me=Ve,ve=Je,We=Math.sqrt(ht/2))}return new ce(me/We,ve/We)}let J=[];for(let oe=0,de=F.length,pe=de-1,me=oe+1;oe<de;oe++,pe++,me++)pe===de&&(pe=0),me===de&&(me=0),J[oe]=ee(F[oe],F[pe],F[me]);let X=[],K,q=J.concat();for(let oe=0,de=P;oe<de;oe++){let pe=D[oe];K=[];for(let me=0,ve=pe.length,We=ve-1,Ve=me+1;me<ve;me++,We++,Ve++)We===ve&&(We=0),Ve===ve&&(Ve=0),K[me]=ee(pe[me],pe[We],pe[Ve]);X.push(K),q=q.concat(K)}let le;if(g===0)le=Nn.triangulateShape(F,D);else{let oe=[],de=[];for(let pe=0;pe<g;pe++){let me=pe/g,ve=f*Math.cos(me*Math.PI/2),We=m*Math.sin(me*Math.PI/2)+_;for(let Ve=0,Je=F.length;Ve<Je;Ve++){let je=B(F[Ve],J[Ve],We);ue(je.x,je.y,-ve),me===0&&oe.push(je)}for(let Ve=0,Je=P;Ve<Je;Ve++){let je=D[Ve];K=X[Ve];let O=[];for(let ht=0,st=je.length;ht<st;ht++){let N=B(je[ht],K[ht],We);ue(N.x,N.y,-ve),me===0&&O.push(N)}me===0&&de.push(O)}}le=Nn.triangulateShape(oe,de)}let ge=le.length,se=m+_;for(let oe=0;oe<V;oe++){let de=h?B(C[oe],q[oe],se):C[oe];v?(I.copy(w.normals[0]).multiplyScalar(de.x),T.copy(w.binormals[0]).multiplyScalar(de.y),y.copy(M[0]).add(I).add(T),ue(y.x,y.y,y.z)):ue(de.x,de.y,0)}for(let oe=1;oe<=p;oe++)for(let de=0;de<V;de++){let pe=h?B(C[de],q[de],se):C[de];v?(I.copy(w.normals[oe]).multiplyScalar(pe.x),T.copy(w.binormals[oe]).multiplyScalar(pe.y),y.copy(M[oe]).add(I).add(T),ue(y.x,y.y,y.z)):ue(pe.x,pe.y,d/p*oe)}for(let oe=g-1;oe>=0;oe--){let de=oe/g,pe=f*Math.cos(de*Math.PI/2),me=m*Math.sin(de*Math.PI/2)+_;for(let ve=0,We=F.length;ve<We;ve++){let Ve=B(F[ve],J[ve],me);ue(Ve.x,Ve.y,d+pe)}for(let ve=0,We=D.length;ve<We;ve++){let Ve=D[ve];K=X[ve];for(let Je=0,je=Ve.length;Je<je;Je++){let O=B(Ve[Je],K[Je],me);v?ue(O.x,O.y+M[p-1].y,M[p-1].x+pe):ue(O.x,O.y,d+pe)}}}fe(),W();function fe(){let oe=s.length/3;if(h){let de=0,pe=V*de;for(let me=0;me<ge;me++){let ve=le[me];ze(ve[2]+pe,ve[1]+pe,ve[0]+pe)}de=p+g*2,pe=V*de;for(let me=0;me<ge;me++){let ve=le[me];ze(ve[0]+pe,ve[1]+pe,ve[2]+pe)}}else{for(let de=0;de<ge;de++){let pe=le[de];ze(pe[2],pe[1],pe[0])}for(let de=0;de<ge;de++){let pe=le[de];ze(pe[0]+V*p,pe[1]+V*p,pe[2]+V*p)}}i.addGroup(oe,s.length/3-oe,0)}function W(){let oe=s.length/3,de=0;j(F,de),de+=F.length;for(let pe=0,me=D.length;pe<me;pe++){let ve=D[pe];j(ve,de),de+=ve.length}i.addGroup(oe,s.length/3-oe,1)}function j(oe,de){let pe=oe.length;for(;--pe>=0;){let me=pe,ve=pe-1;ve<0&&(ve=oe.length-1);for(let We=0,Ve=p+g*2;We<Ve;We++){let Je=V*We,je=V*(We+1),O=de+me+Je,ht=de+ve+Je,st=de+ve+je,N=de+me+je;xe(O,ht,st,N)}}}function ue(oe,de,pe){l.push(oe),l.push(de),l.push(pe)}function ze(oe,de,pe){Ie(oe),Ie(de),Ie(pe);let me=s.length/3,ve=x.generateTopUV(i,s,me-3,me-2,me-1);at(ve[0]),at(ve[1]),at(ve[2])}function xe(oe,de,pe,me){Ie(oe),Ie(de),Ie(me),Ie(de),Ie(pe),Ie(me);let ve=s.length/3,We=x.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);at(We[0]),at(We[1]),at(We[3]),at(We[1]),at(We[2]),at(We[3])}function Ie(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function at(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return kf(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Oo[s.type]().fromJSON(s)),new n(i,e.options)}},Bf={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],p=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,p)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],p=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],u=e[r*3+2];return Math.abs(a-p)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-d),new ce(h,1-m),new ce(_,1-u)]:[new ce(a,1-l),new ce(p,1-d),new ce(f,1-m),new ce(g,1-u)]}};function kf(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wn=class n extends _t{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=tt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],p=1/t,d=new L,h=new ce,f=new L,m=new L,_=new L,g=0,u=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,u=e[x+1].y-e[x].y,f.x=u*1,f.y=-g,f.z=u*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[x+1].x-e[x].x,u=e[x+1].y-e[x].y,f.x=u*1,f.y=-g,f.z=u*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let x=0;x<=t;x++){let M=i+x*p*s,v=Math.sin(M),w=Math.cos(M);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*v,d.y=e[T].y,d.z=e[T].x*w,o.push(d.x,d.y,d.z),h.x=x/t,h.y=T/(e.length-1),a.push(h.x,h.y);let I=l[3*T+0]*v,y=l[3*T+1],b=l[3*T+0]*w;c.push(I,y,b)}}for(let x=0;x<t;x++)for(let M=0;M<e.length-1;M++){let v=M+x*e.length,w=v,T=v+e.length,I=v+e.length+1,y=v+1;r.push(w,T,y),r.push(I,y,T)}this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Bn=class n extends _t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,p=l+1,d=e/a,h=t/l,f=[],m=[],_=[],g=[];for(let u=0;u<p;u++){let x=u*h-o;for(let M=0;M<c;M++){let v=M*d-r;m.push(v,-x,0),_.push(0,0,1),g.push(M/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){let M=x+c*u,v=x+c*(u+1),w=x+1+c*(u+1),T=x+1+c*u;f.push(M,v,T),f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var pr=class n extends _t{constructor(e=new Dt([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let p=0;p<e.length;p++)c(e[p]),this.addGroup(a,l,p),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(o,2));function c(p){let d=s.length/3,h=p.extractPoints(t),f=h.shape,m=h.holes;Nn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,u=m.length;g<u;g++){let x=m[g];Nn.isClockWise(x)===!0&&(m[g]=x.reverse())}let _=Nn.triangulateShape(f,m);for(let g=0,u=m.length;g<u;g++){let x=m[g];f=f.concat(x)}for(let g=0,u=f.length;g<u;g++){let x=f[g];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,u=_.length;g<u;g++){let x=_[g],M=x[0]+d,v=x[1]+d,w=x[2]+d;i.push(M,v,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return zf(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function zf(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var ui=class n extends _t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,p=[],d=new L,h=new L,f=[],m=[],_=[],g=[];for(let u=0;u<=i;u++){let x=[],M=u/i,v=o+M*a,w=e*Math.cos(v),T=Math.sqrt(e*e-w*w),I=0;u===0&&o===0?I=.5/t:u===i&&l===Math.PI&&(I=-.5/t);for(let y=0;y<=t;y++){let b=y/t,C=s+b*r;d.x=-T*Math.cos(C),d.y=w,d.z=T*Math.sin(C),m.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(b+I,1-M),x.push(c++)}p.push(x)}for(let u=0;u<i;u++)for(let x=0;x<t;x++){let M=p[u][x+1],v=p[u][x],w=p[u+1][x],T=p[u+1][x+1];(u!==0||o>0)&&f.push(M,v,T),(u!==i-1||l<Math.PI)&&f.push(v,w,T)}this.setIndex(f),this.setAttribute("position",new Qe(m,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var kt=class n extends _t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],p=[],d=[],h=new L,f=new L,m=new L;for(let _=0;_<=i;_++){let g=o+_/i*a;for(let u=0;u<=s;u++){let x=u/s*r;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),m.subVectors(f,h).normalize(),p.push(m.x,m.y,m.z),d.push(u/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){let u=(s+1)*_+g-1,x=(s+1)*(_-1)+g-1,M=(s+1)*(_-1)+g,v=(s+1)*_+g;l.push(u,x,v),l.push(x,M,v)}this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(p,3)),this.setAttribute("uv",new Qe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var mr=class n extends _t{constructor(e=new cr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new ce,p=new L,d=[],h=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(f,2));function _(){for(let M=0;M<t;M++)g(M);g(r===!1?t:0),x(),u()}function g(M){p=e.getPointAt(M/t,p);let v=o.normals[M],w=o.binormals[M];for(let T=0;T<=s;T++){let I=T/s*Math.PI*2,y=Math.sin(I),b=-Math.cos(I);l.x=b*v.x+y*w.x,l.y=b*v.y+y*w.y,l.z=b*v.z+y*w.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=p.x+i*l.x,a.y=p.y+i*l.y,a.z=p.z+i*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let M=1;M<=t;M++)for(let v=1;v<=s;v++){let w=(s+1)*(M-1)+(v-1),T=(s+1)*M+(v-1),I=(s+1)*M+v,y=(s+1)*(M-1)+v;m.push(w,T,y),m.push(T,I,y)}}function x(){for(let M=0;M<=t;M++)for(let v=0;v<=s;v++)c.x=M/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Oo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var gr=class extends En{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Fi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(bh(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(bh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Zt(n){let e={};for(let t=0;t<n.length;t++){let i=Fi(n[t]);for(let s in i)e[s]=i[s]}return e}function bh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Hf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var yu={clone:Fi,merge:Zt},Vf=`void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
  gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ko=class extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tn=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gs=class extends Tn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pi=class extends En{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=ea,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zo=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ho=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qi(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Rl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var di=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vo=class extends di{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dl:r=e,a=2*t-i;break;case Ll:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Dl:o=e,l=2*i-t;break;case Ll:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,p=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,p=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(i-t)/(s-t),_=m*m,g=_*m,u=-h*g+2*h*_-h*m,x=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,M=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let w=0;w!==a;++w)r[w]=u*o[p+w]+x*o[c+w]+M*o[l+w]+v*o[d+w];return r}},Go=class extends di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,p=(i-t)/(s-t),d=1-p;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*p;return r}},Wo=class extends di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xo=class extends di{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,p=this.inTangents,d=this.outTangents;if(!p||!d){let m=(i-t)/(s-t),_=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*m;return r}let h=a*2,f=e-1;for(let m=0;m!==a;++m){let _=o[c+m],g=o[l+m],u=f*h+m*2,x=d[u],M=d[u+1],v=e*h+m*2,w=p[v],T=p[v+1],I=Xf(i,t,x,w,s);r[m]=vu(I,_,M,T,g)}return r}};function vu(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Wf(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Xf(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=vu(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Wf(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var dn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qi(t,this.TimeBufferType),this.values=Qi(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qi(e.times,Array),values:Qi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Rl(e.settings)&&(i.settings={inTangents:Qi(e.settings.inTangents,Array),outTangents:Qi(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case To:t=this.InterpolantFactoryMethodLinear;break;case mo:t=this.InterpolantFactoryMethodSmooth;break;case Pl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return mo;case this.InterpolantFactoryMethodBezier:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Rl(this.settings)&&(Mh(this.settings.inTangents,e),Mh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Id(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===mo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],p=e[a+1];if(c!==p&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,h=d-i,f=d+i;for(let m=0;m!==i;++m){let _=t[d+m];if(_!==t[h+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Mh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=To;var fi=class extends dn{constructor(e,t,i){super(e,t,i)}};fi.prototype.ValueTypeName="bool";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Xs;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};qo.prototype.ValueTypeName="color";var Yo=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};Yo.prototype.ValueTypeName="number";var Zo=class extends di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let p=c+a;c!==p;c+=4)cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},_r=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Zo(this.times,this.values,this.getValueSize(),e)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends dn{constructor(e,t,i){super(e,t,i)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Xs;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};Jo.prototype.ValueTypeName="vector";var Ko=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(p){a++,r===!1&&s.onStart!==void 0&&s.onStart(p,o,a),r=!0},this.itemEnd=function(p){o++,s.onProgress!==void 0&&s.onProgress(p,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),l?l(p):p},this.setURLModifier=function(p){return l=p,this},this.addHandler=function(p,d){return c.push(p,d),this},this.removeHandler=function(p){let d=c.indexOf(p);return d!==-1&&c.splice(d,2),this},this.getHandler=function(p){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(p))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Su=new Ko,$o=class{constructor(e){this.manager=e!==void 0?e:Su,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$o.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xr=class extends _s{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Cl=new pt,Eh=new L,wh=new L,yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new us,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eh),wh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Cl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===rs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uo=new L,fo=new cn,Dn=new L,vr=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uo,fo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,fo,Dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(uo,fo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uo,fo,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},oi=new L,Th=new ce,Ah=new ce,Ht=class extends vr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Th,Ah),t.subVectors(Ah,Th)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ol=class extends yr{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},Sr=class extends _s{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ol}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Kn=class extends vr{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=p*this.view.offsetY,l=a-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bl=class extends yr{constructor(){super(new Kn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ii=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Bl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var es=-90,ts=1,jo=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(es,ts,e,t);s.layers=this.layers,this.add(s);let r=new Ht(es,ts,e,t);r.layers=this.layers,this.add(r);let o=new Ht(es,ts,e,t);o.layers=this.layers,this.add(o);let a=new Ht(es,ts,e,t);a.layers=this.layers,this.add(a);let l=new Ht(es,ts,e,t);l.layers=this.layers,this.add(l);let c=new Ht(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,p]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(d,h,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Qo=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var dc="\\[\\]\\.:\\/",qf=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",Yf="[^"+dc.replace("\\.","")+"]",Zf=/((?:WC+[\/:])*)/.source.replace("WC",fc),Jf=/(WCOD+)?/.source.replace("WCOD",Yf),Kf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),$f=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),jf=new RegExp("^"+Zf+Jf+Kf+$f+"$"),Qf=["material","materials","bones","map"],kl=class{constructor(e,t,i){let s=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qf,"")}static parseTrackName(e){let t=jf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Qf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===c){c=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=kl;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U1=new Float32Array(1);var Rh=new pt,br=class{constructor(e,t,i=0,s=1/0){this.ray=new li(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rh),this}intersectObject(e,t=!0,i=[]){return zl(e,this,i,t),i.sort(Ch),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)zl(e[s],this,i,t);return i.sort(Ch),i}};function Ch(n,e){return n.distance-e.distance}function zl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)zl(r[o],e,t,!0)}}var xs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Hl=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var po=new bt,Mr=class extends ds{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new _t;r.setIndex(new jt(i,1)),r.setAttribute("position",new jt(s,3)),super(r,new Ri({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&po.setFromObject(this.object),po.isEmpty())return;let e=po.min,t=po.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Er=class extends Mn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function pc(n,e,t,i){let s=ep(i);switch(t){case rc:return n*e;case aa:return n*e/s.components*s.byteLength;case la:return n*e/s.components*s.byteLength;case Si:return n*e*2/s.components*s.byteLength;case ca:return n*e*2/s.components*s.byteLength;case oc:return n*e*3/s.components*s.byteLength;case gn:return n*e*4/s.components*s.byteLength;case ha:return n*e*4/s.components*s.byteLength;case Rr:case Cr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Ir:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case da:case pa:return Math.max(n,16)*Math.max(e,8)/4;case ua:case fa:return Math.max(n,8)*Math.max(e,8)/2;case ma:case ga:case xa:case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _a:case Dr:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Na:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ua:case Fa:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ba:case ka:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lr:case za:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ep(n){switch(n){case sn:case tc:return{byteLength:1,components:1};case Ss:case nc:case Cn:return{byteLength:2,components:1};case ra:case oa:return{byteLength:2,components:4};case Rn:case sa:case mn:return{byteLength:4,components:1};case ic:case sc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gu(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ip(n){let e=new WeakMap;function t(a,l){let c=a.array,p=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,p),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let p=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,p);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){let m=d[h],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];n.bufferSubData(c,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let p=e.get(a);(!p||p.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var sp=`#ifdef USE_ALPHAHASH
  if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
  diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ap=`#ifdef USE_ALPHAMAP
  uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
  #ifdef ALPHA_TO_COVERAGE
  diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
  if ( diffuseColor.a == 0.0 ) discard;
  #else
  if ( diffuseColor.a < alphaTest ) discard;
  #endif
#endif`,cp=`#ifdef USE_ALPHATEST
  uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,up=`#ifdef USE_AOMAP
  uniform sampler2D aoMap;
  uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
#endif`,fp=`#ifdef USE_BATCHING
  mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
  vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
  vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
  uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
  vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  diffuseColor *= vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  varying vec4 vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  varying vec4 vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ap=`#define PI 3.141592653589793
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
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
  uniform sampler2D displacementMap;
  uniform float displacementScale;
  uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
  transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
  vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
  #ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
    emissiveColor = sRGBTransferEOTF( emissiveColor );
  #endif
  totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
  uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
  return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
  uniform float envMapIntensity;
  uniform mat3 envMapRotation;
  #ifdef ENVMAP_TYPE_CUBE
    uniform samplerCube envMap;
  #else
    uniform sampler2D envMap;
  #endif
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
  #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
    #define ENV_WORLDPOS
  #endif
  #ifdef ENV_WORLDPOS

    varying vec3 vWorldPosition;
  #else
    varying vec3 vReflect;
    uniform float refractionRatio;
  #endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
  varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
  uniform sampler2D lightMap;
  uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Kp=`#ifdef USE_ENVMAP
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
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
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
#endif`,nm=`uniform sampler2D dfgLUT;
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
}`,im=`
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
  #if defined( LAMBERT ) || defined( PHONG )
    irradiance += iblIrradiance;
  #endif
  RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
  RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  uniform float logDepthBufFC;
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  vFragDepth = 1.0 + gl_Position.w;
  vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D( map, vMapUv );
  #ifdef DECODE_VIDEO_TEXTURE
    sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
  #endif
  diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
  uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
  vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
  metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
  uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
  float morphTargetInfluences[ MORPHTARGETS_COUNT ];
  float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
  }
#endif`,xm=`#if defined( USE_MORPHCOLORS )
  vColor *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    #if defined( USE_COLOR_ALPHA )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
    #elif defined( USE_COLOR )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
    #endif
  }
#endif`,ym=`#ifdef USE_MORPHNORMALS
  objectNormal *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Sm=`#ifdef USE_MORPHTARGETS
  transformed *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,bm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Em=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,wm=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,Tm=`#ifndef FLAT_SHADED
  vNormal = normalize( transformedNormal );
  #ifdef USE_TANGENT
    vTangent = normalize( transformedTangent );
    vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
    #ifdef FLIP_SIDED
      vBitangent = - vBitangent;
    #endif
  #endif
#endif`,Am=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
  vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
  vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
  clearcoatMapN.xy *= clearcoatNormalScale;
  clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
  uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  uniform sampler2D clearcoatNormalMap;
  uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
  uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
  gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
  gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
  vec3 dithering( vec3 color ) {
    float grid_position = rand( gl_FragCoord.xy );
    vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
    dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
    return color + dither_shift_RGB;
  }
#endif`,Bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
  vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
  roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
  uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,Wm=`#ifdef USE_SKINNING
  mat4 boneMatX = getBoneMatrix( skinIndex.x );
  mat4 boneMatY = getBoneMatrix( skinIndex.y );
  mat4 boneMatZ = getBoneMatrix( skinIndex.z );
  mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,qm=`#ifdef USE_SKINNING
  vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
  vec4 skinned = vec4( 0.0 );
  skinned += boneMatX * skinVertex * skinWeight.x;
  skinned += boneMatY * skinVertex * skinWeight.y;
  skinned += boneMatZ * skinVertex * skinWeight.z;
  skinned += boneMatW * skinVertex * skinWeight.w;
  transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,Zm=`float specularStrength;
#ifdef USE_SPECULARMAP
  vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
  specularStrength = texelSpecular.r;
#else
  specularStrength = 1.0;
#endif`,Jm=`#ifdef USE_SPECULARMAP
  uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
  vec4 worldPosition = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
    worldPosition = batchingMatrix * worldPosition;
  #endif
  #ifdef USE_INSTANCING
    worldPosition = instanceMatrix * worldPosition;
  #endif
  worldPosition = modelMatrix * worldPosition;
#endif`,s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
  vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r0=`uniform sampler2D t2D;
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
  vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
  gl_FragColor = texColor;
  gl_FragColor.a *= opacity;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,h0=`#include <common>
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
}`,u0=`#if DEPTH_PACKING == 3200
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
}`,d0=`#define DISTANCE
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
}`,f0=`#define DISTANCE
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
  vec3 direction = normalize( vWorldDirection );
  vec2 sampleUV = equirectUv( direction );
  gl_FragColor = texture2D( tEquirect, sampleUV );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,g0=`uniform float scale;
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
}`,_0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,y0=`uniform vec3 diffuse;
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
}`,v0=`#define LAMBERT
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
}`,S0=`#define LAMBERT
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
}`,b0=`#define MATCAP
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
}`,M0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
}`,w0=`#define NORMAL
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
}`,T0=`#define PHONG
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
}`,A0=`#define PHONG
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
}`,R0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
}`,P0=`#define TOON
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
}`,I0=`#define TOON
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
}`,D0=`uniform float size;
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
}`,L0=`uniform vec3 diffuse;
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
}`,N0=`#include <common>
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
}`,U0=`uniform vec3 color;
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
}`,F0=`uniform float rotation;
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
}`,O0=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:op,alphamap_pars_fragment:ap,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:_p,bumpmap_pars_fragment:xp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:bp,color_fragment:Mp,color_pars_fragment:Ep,color_pars_vertex:wp,color_vertex:Tp,common:Ap,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Ip,emissivemap_fragment:Dp,emissivemap_pars_fragment:Lp,colorspace_fragment:Np,colorspace_pars_fragment:Up,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:Bp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:Kp,envmap_vertex:zp,fog_vertex:Hp,fog_pars_vertex:Vp,fog_fragment:Gp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:Zp,lights_pars_begin:Jp,lights_toon_fragment:$p,lights_toon_pars_fragment:jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:em,lights_physical_fragment:tm,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:sm,lights_fragment_end:rm,lightprobes_pars_fragment:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:_m,morphcolor_vertex:xm,morphnormal_vertex:ym,morphtarget_pars_vertex:vm,morphtarget_vertex:Sm,normal_fragment_begin:bm,normal_fragment_maps:Mm,normal_pars_fragment:Em,normal_pars_vertex:wm,normal_vertex:Tm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Im,opaque_fragment:Dm,packing:Lm,premultiplied_alpha_fragment:Nm,project_vertex:Um,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Gm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:qm,skinnormal_vertex:Ym,specularmap_fragment:Zm,specularmap_pars_fragment:Jm,tonemapping_fragment:Km,tonemapping_pars_fragment:$m,transmission_fragment:jm,transmission_pars_fragment:Qm,uv_pars_fragment:e0,uv_pars_vertex:t0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:r0,backgroundCube_vert:o0,backgroundCube_frag:a0,cube_vert:l0,cube_frag:c0,depth_vert:h0,depth_frag:u0,distance_vert:d0,distance_frag:f0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:_0,meshbasic_vert:x0,meshbasic_frag:y0,meshlambert_vert:v0,meshlambert_frag:S0,meshmatcap_vert:b0,meshmatcap_frag:M0,meshnormal_vert:E0,meshnormal_frag:w0,meshphong_vert:T0,meshphong_frag:A0,meshphysical_vert:R0,meshphysical_frag:C0,meshtoon_vert:P0,meshtoon_frag:I0,points_vert:D0,points_frag:L0,shadow_vert:N0,shadow_frag:U0,sprite_vert:F0,sprite_frag:O0},Ae={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Hn={basic:{uniforms:Zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Zt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Zt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Zt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ke(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Zt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Zt([Ae.points,Ae.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Zt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Zt([Ae.common,Ae.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Zt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Zt([Ae.sprite,Ae.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Zt([Ae.common,Ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Zt([Ae.lights,Ae.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Hn.physical={uniforms:Zt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var Ga={r:0,b:0,g:0},B0=new pt,Wu=new $e;Wu.set(-1,0,0,0,1,0,0,0,1);function k0(n,e,t,i,s,r){let o=new Ke(0),a=s===!0?0:1,l,c,p=null,d=0,h=null;function f(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let v=x.backgroundBlurriness>0;M=e.get(M,v)}return M}function m(x){let M=!1,v=f(x);v===null?g(o,a):v&&v.isColor&&(g(v,1),M=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(x,M){let v=f(M);v&&(v.isCubeTexture||v.mapping===Tr)?(c===void 0&&(c=new we(new nn(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Fi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wu),c.material.toneMapped=ot.getTransfer(v.colorSpace)!==ft,(p!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,p=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new we(new Bn(2,2),new un({name:"BackgroundMaterial",uniforms:Fi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ot.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,p=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,M){x.getRGB(Ga,uc(n)),t.buffers.color.setClear(Ga.r,Ga.g,Ga.b,M,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:m,addToRenderList:_,dispose:u}}function z0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(D,E,R,P,F){let B=!1,V=d(D,P,R,E);r!==V&&(r=V,c(r.object)),B=f(D,P,R,F),B&&m(D,P,R,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(D,E,R,P),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function p(D){return n.deleteVertexArray(D)}function d(D,E,R,P){let F=P.wireframe===!0,B=i[E.id];B===void 0&&(B={},i[E.id]=B);let V=D.isInstancedMesh===!0?D.id:0,ee=B[V];ee===void 0&&(ee={},B[V]=ee);let J=ee[R.id];J===void 0&&(J={},ee[R.id]=J);let X=J[F];return X===void 0&&(X=h(l()),J[F]=X),X}function h(D){let E=[],R=[],P=[];for(let F=0;F<t;F++)E[F]=0,R[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:R,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,E,R,P){let F=r.attributes,B=E.attributes,V=0,ee=R.getAttributes();for(let J in ee)if(ee[J].location>=0){let K=F[J],q=B[J];if(q===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),K===void 0||K.attribute!==q||q&&K.data!==q.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function m(D,E,R,P){let F={},B=E.attributes,V=0,ee=R.getAttributes();for(let J in ee)if(ee[J].location>=0){let K=B[J];K===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));let q={};q.attribute=K,K&&K.data&&(q.data=K.data),F[J]=q,V++}r.attributes=F,r.attributesNum=V,r.index=P}function _(){let D=r.newAttributes;for(let E=0,R=D.length;E<R;E++)D[E]=0}function g(D){u(D,0)}function u(D,E){let R=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;R[D]=1,P[D]===0&&(n.enableVertexAttribArray(D),P[D]=1),F[D]!==E&&(n.vertexAttribDivisor(D,E),F[D]=E)}function x(){let D=r.newAttributes,E=r.enabledAttributes;for(let R=0,P=E.length;R<P;R++)E[R]!==D[R]&&(n.disableVertexAttribArray(R),E[R]=0)}function M(D,E,R,P,F,B,V){V===!0?n.vertexAttribIPointer(D,E,R,F,B):n.vertexAttribPointer(D,E,R,P,F,B)}function v(D,E,R,P){_();let F=P.attributes,B=R.getAttributes(),V=E.defaultAttributeValues;for(let ee in B){let J=B[ee];if(J.location>=0){let X=F[ee];if(X===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){let K=X.normalized,q=X.itemSize,le=e.get(X);if(le===void 0)continue;let ge=le.buffer,se=le.type,fe=le.bytesPerElement,W=se===n.INT||se===n.UNSIGNED_INT||X.gpuType===sa;if(X.isInterleavedBufferAttribute){let j=X.data,ue=j.stride,ze=X.offset;if(j.isInstancedInterleavedBuffer){for(let xe=0;xe<J.locationSize;xe++)u(J.location+xe,j.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xe=0;xe<J.locationSize;xe++)g(J.location+xe);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let xe=0;xe<J.locationSize;xe++)M(J.location+xe,q/J.locationSize,se,K,ue*fe,(ze+q/J.locationSize*xe)*fe,W)}else{if(X.isInstancedBufferAttribute){for(let j=0;j<J.locationSize;j++)u(J.location+j,X.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let j=0;j<J.locationSize;j++)g(J.location+j);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let j=0;j<J.locationSize;j++)M(J.location+j,q/J.locationSize,se,K,q*fe,q/J.locationSize*j*fe,W)}}else if(V!==void 0){let K=V[ee];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(J.location,K);break;case 3:n.vertexAttrib3fv(J.location,K);break;case 4:n.vertexAttrib4fv(J.location,K);break;default:n.vertexAttrib1fv(J.location,K)}}}}x()}function w(){b();for(let D in i){let E=i[D];for(let R in E){let P=E[R];for(let F in P){let B=P[F];for(let V in B)p(B[V].object),delete B[V];delete P[F]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;let E=i[D.id];for(let R in E){let P=E[R];for(let F in P){let B=P[F];for(let V in B)p(B[V].object),delete B[V];delete P[F]}}delete i[D.id]}function I(D){for(let E in i){let R=i[E];for(let P in R){let F=R[P];if(F[D.id]===void 0)continue;let B=F[D.id];for(let V in B)p(B[V].object),delete B[V];delete F[D.id]}}}function y(D){for(let E in i){let R=i[E],P=D.isInstancedMesh===!0?D.id:0,F=R[P];if(F!==void 0){for(let B in F){let V=F[B];for(let ee in V)p(V[ee].object),delete V[ee];delete F[B]}delete R[P],Object.keys(R).length===0&&delete i[E]}}}function b(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function H0(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,p){p!==0&&(n.drawArraysInstanced(i,l,c,p),t.update(c,i,p))}function a(l,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let h=0;for(let f=0;f<p;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function V0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==gn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let y=I===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==sn&&I!==mn&&!y&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",p=l(c);p!==c&&(Ge("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,maxSamples:w,samples:T}}function G0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ln,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=p(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,u=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?p(null):c();else{let x=r?0:i,M=x*4,v=u.clippingState||null;l.value=v,v=p(m,h,M,f);for(let w=0;w!==M;++w)v[w]=t[w];u.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(d,h,f,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let u=f+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<u)&&(g=new Float32Array(u));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(d[M]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var ws=4,W0=6,X0=20,q0=256,Ur=new Kn,bu=new Ke,mc=null,gc=0,_c=0,xc=!1,Y0=new L,Oi=new L,As=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Y0}=r;mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,_c),this._renderer.xr.enabled=xc,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Cn,format:gn,colorSpace:qs,depthBuffer:!1},s=Mu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Z0(r)),this._blurMaterial=K0(r,e,t),this._ggxMaterial=J0(r,e,t)}return s}_compileMaterial(e){let t=new we(new _t,e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,i,s,r){let l=new Ht(90,1,t,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(bu),d.toneMapping=An,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new nn,new ci({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,u=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,u=!0):(g.color.copy(bu),u=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+p[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+p[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+p[M]));let w=this._cubeSize;Es(s,v*w,M>2?w:0,w,w),d.setRenderTarget(s),u&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=x}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===xi||e.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Es(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ur)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-p*p),h=c*1.25,f=d*h,{_lodMax:m}=this,_=this._sizeLods[i],g=3*_*(i>m-ws?i-m+ws:0),u=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Es(r,g,u,3*_,2*_),s.setRenderTarget(r),s.render(a,Ur),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,Es(e,g,u,3*_,2*_),s.setRenderTarget(e),s.render(a,Ur)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let p=this._sizeLods[s],d=3*p*(s>this._lodMax-ws?s-this._lodMax+ws:0),h=4*(this._cubeSize-p);Es(t,d,h,3*p,2*p),o.setRenderTarget(t),o.render(l,Ur)}};function Z0(n){let e=[],t=[],i=n,s=n-ws+1+W0;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),l=-a,c=1+a,p=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,m=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let u=0;u<d;u++){let x=u%3*2/3-1,M=u>2?0:-1,v=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];m.set(v,f*h*u);for(let w=0;w<h;w++){let T=p[w*2]*2-1,I=p[w*2+1]*2-1;u===0?Oi.set(1,I,T):u===1?Oi.set(-T,1,-I):u===2?Oi.set(-T,I,1):u===3?Oi.set(-1,I,-T):u===4?Oi.set(-T,-1,I):Oi.set(T,I,-1),Oi.toArray(_,(u*h+w)*f)}}let g=new _t;g.setAttribute("position",new jt(m,f)),g.setAttribute("outputDirection",new jt(_,f)),t.push(new we(g,null)),i>ws&&i--}return{lodMeshes:t,sizeLods:e}}function Mu(n,e,t){let i=new tn(n,e,t);return i.texture.mapping=Tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function J0(n,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

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
    `,blending:kn,depthTest:!1,depthWrite:!1})}function K0(n,e,t){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:X0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

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
    `,blending:kn,depthTest:!1,depthWrite:!1})}function Eu(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

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
    `,blending:kn,depthTest:!1,depthWrite:!1})}function wu(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

      precision mediump float;
      precision mediump int;

      uniform float flipEnvMap;

      varying vec3 vOutputDirection;

      uniform samplerCube envMap;

      void main() {

        gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

      }
    `,blending:kn,depthTest:!1,depthWrite:!1})}function Ya(){return`

    precision mediump float;
    precision mediump int;

    attribute vec3 outputDirection;

    varying vec3 vOutputDirection;

    void main() {

      vOutputDirection = outputDirection;
      gl_Position = vec4( position, 1.0 );

    }
  `}var Xa=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new tr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
      `},s=new nn(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Fi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:kn});r.uniforms.tEquirect.value=t;let o=new we(s,r),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=Vt),new jo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function $0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===ta||f===na)if(e.has(h)){let m=e.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let _=new Xa(m.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,m=f===ta||f===na,_=f===xi||f===Ni;if(m||_){let g=t.get(h),u=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return i===null&&(i=new As(n)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let x=h.image;return m&&x&&x.height>0||_&&x&&l(x)?(i===null&&(i=new As(n)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",p),g.texture):null}}}return h}function a(h,f){return f===ta?h.mapping=xi:f===na&&(h.mapping=Ni),h}function l(h){let f=0,m=6;for(let _=0;_<m;_++)h[_]!==void 0&&f++;return f===m}function c(h){let f=h.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function p(h){let f=h.target;f.removeEventListener("dispose",p);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function j0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ai("WebGLRenderer: "+i+" extension not supported."),s}}}function Q0(n,e,t,i){let s={},r=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(f!==null){let x=f.array;_=f.version;for(let M=0,v=x.length;M<v;M+=3){let w=x[M+0],T=x[M+1],I=x[M+2];h.push(w,T,T,I,I,w)}}else{let x=m.array;_=m.version;for(let M=0,v=x.length/3-1;M<v;M+=3){let w=M+0,T=M+1,I=M+2;h.push(w,T,T,I,I,w)}}let g=new(m.count>=65535?$s:Ks)(h,1);g.version=_;let u=r.get(d);u&&e.remove(u),r.set(d,g)}function p(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:p}}function eg(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function p(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function tg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ng(n,e,t){let i=new WeakMap,s=new Tt;function r(o,a,l){let c=o.morphTargetInfluences,p=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=p!==void 0?p.length:0,h=i.get(a);if(h===void 0||h.count!==d){let b=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*w*4*d),I=new Js(T,v,w,d);I.type=mn,I.needsUpdate=!0;let y=M*4;for(let C=0;C<d;C++){let D=g[C],E=u[C],R=x[C],P=v*w*4*C;for(let F=0;F<D.count;F++){let B=F*y;f===!0&&(s.fromBufferAttribute(D,F),T[P+B+0]=s.x,T[P+B+1]=s.y,T[P+B+2]=s.z,T[P+B+3]=0),m===!0&&(s.fromBufferAttribute(E,F),T[P+B+4]=s.x,T[P+B+5]=s.y,T[P+B+6]=s.z,T[P+B+7]=0),_===!0&&(s.fromBufferAttribute(R,F),T[P+B+8]=s.x,T[P+B+9]=s.y,T[P+B+10]=s.z,T[P+B+11]=R.itemSize===4?s.w:1)}}h={count:d,texture:I,size:new ce(v,w)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function ig(n,e,t,i,s){let r=new WeakMap;function o(c){let p=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==p&&(e.update(h),r.set(h,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==p&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,p))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==p&&(f.update(),r.set(f,p))}return h}function a(){r=new WeakMap}function l(c){let p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:a}}var sg={[Zl]:"LINEAR_TONE_MAPPING",[Jl]:"REINHARD_TONE_MAPPING",[Kl]:"CINEON_TONE_MAPPING",[wr]:"ACES_FILMIC_TONE_MAPPING",[jl]:"AGX_TONE_MAPPING",[Ql]:"NEUTRAL_TONE_MAPPING",[$l]:"CUSTOM_TONE_MAPPING"};function rg(n,e,t,i,s,r){let o=new tn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new _t;c.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let p=new ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
      }`,depthTest:!1,depthWrite:!1}),d=new we(c,p),h=new Kn(-1,1,1,-1,0,1),f=null,m=null,_=!1,g,u=null,x=[],M=!1;this.setSize=function(v,w){o.setSize(v,w),a!==null&&a.setSize(v,w),l!==null&&l.setSize(v,w);for(let T=0;T<x.length;T++){let I=x[T];I.setSize&&I.setSize(v,w)}},this.setEffects=function(v){x=v,M=x.length>0&&x[0].isRenderPass===!0;let w=o.width,T=o.height;x.length>0&&a===null&&(a=new tn(w,T,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),l=new tn(w,T,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<x.length;I++){let y=x[I];y.setSize&&y.setSize(w,T)}},this.begin=function(v,w){if(_||v.toneMapping===An&&x.length===0)return!1;if(u=w,w!==null){let T=w.width,I=w.height;(o.width!==T||o.height!==I)&&this.setSize(T,I)}return M===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=An,!0},this.hasRenderPass=function(){return M},this.end=function(v,w){v.toneMapping=g,_=!0;let T=o,I=a;for(let y=0;y<x.length;y++){let b=x[y];b.enabled!==!1&&(b.render(v,I,T,w),b.needsSwap!==!1&&(T=I,I=I===a?l:a))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,p.defines={},ot.getTransfer(f)===ft&&(p.defines.SRGB_TRANSFER="");let y=sg[m];y&&(p.defines[y]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(u),v.render(d,h),u=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),p.dispose()}}var Xu=new Qt,Sc=new hi(1,1),qu=new Js,Yu=new Co,Zu=new tr,Tu=[],Au=[],Ru=new Float32Array(16),Cu=new Float32Array(9),Pu=new Float32Array(4);function Rs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Tu[s];if(r===void 0&&(r=new Float32Array(s),Tu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Za(n,e){let t=Au[e];t===void 0&&(t=new Int32Array(e),Au[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function og(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ag(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function lg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function cg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function hg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Pu.set(i),n.uniformMatrix2fv(this.addr,!1,Pu),Ut(t,i)}}function ug(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Cu.set(i),n.uniformMatrix3fv(this.addr,!1,Cu),Ut(t,i)}}function dg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Ru.set(i),n.uniformMatrix4fv(this.addr,!1,Ru),Ut(t,i)}}function fg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function mg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function _g(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function vg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function Sg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Sc.compareFunction=t.isReversedDepthBuffer()?Va:Ha,r=Sc):r=Xu,t.setTexture2D(e||r,s)}function bg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Yu,s)}function Mg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Zu,s)}function Eg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||qu,s)}function wg(n){switch(n){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return xg;case 36295:return yg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return Eg}}function Tg(n,e){n.uniform1fv(this.addr,e)}function Ag(n,e){let t=Rs(e,this.size,2);n.uniform2fv(this.addr,t)}function Rg(n,e){let t=Rs(e,this.size,3);n.uniform3fv(this.addr,t)}function Cg(n,e){let t=Rs(e,this.size,4);n.uniform4fv(this.addr,t)}function Pg(n,e){let t=Rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ig(n,e){let t=Rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dg(n,e){let t=Rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lg(n,e){n.uniform1iv(this.addr,e)}function Ng(n,e){n.uniform2iv(this.addr,e)}function Ug(n,e){n.uniform3iv(this.addr,e)}function Fg(n,e){n.uniform4iv(this.addr,e)}function Og(n,e){n.uniform1uiv(this.addr,e)}function Bg(n,e){n.uniform2uiv(this.addr,e)}function kg(n,e){n.uniform3uiv(this.addr,e)}function zg(n,e){n.uniform4uiv(this.addr,e)}function Hg(n,e,t){let i=this.cache,s=e.length,r=Za(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Sc:o=Xu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Vg(n,e,t){let i=this.cache,s=e.length,r=Za(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yu,r[o])}function Gg(n,e,t){let i=this.cache,s=e.length,r=Za(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Zu,r[o])}function Wg(n,e,t){let i=this.cache,s=e.length,r=Za(t,s);Nt(i,r)||(n.uniform1iv(this.addr,r),Ut(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qu,r[o])}function Xg(n){switch(n){case 5126:return Tg;case 35664:return Ag;case 35665:return Rg;case 35666:return Cg;case 35674:return Pg;case 35675:return Ig;case 35676:return Dg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ng;case 35668:case 35672:return Ug;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return Bg;case 36295:return kg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}var bc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wg(t.type)}},Mc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xg(t.type)}},Ec=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},yc=/(\w+)(\])?(\[|\.)?/g;function Iu(n,e){n.seq.push(e),n.map[e.id]=e}function qg(n,e,t){let i=n.name,s=i.length;for(yc.lastIndex=0;;){let r=yc.exec(i),o=yc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Iu(t,c===void 0?new bc(a,n,e):new Mc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Ec(a),Iu(t,d)),t=d}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);qg(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Du(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Yg=37297,Zg=0;function Jg(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Lu=new $e;function Kg(n){ot._getMatrix(Lu,ot.workingColorSpace,n);let e=`mat3( ${Lu.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case Ys:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Jg(n.getShaderSource(e),a)}else return r}function $g(n,e){let t=Kg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var jg={[Zl]:"Linear",[Jl]:"Reinhard",[Kl]:"Cineon",[wr]:"ACESFilmic",[jl]:"AgX",[Ql]:"Neutral",[$l]:"Custom"};function Qg(n,e){let t=jg[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Wa=new L;function e_(){ot.getLuminanceCoefficients(Wa);let n=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function n_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function i_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Or(n){return n!==""}function Uu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(n){return n.replace(s_,o_)}var r_=new Map;function o_(n,e){let t=it[e];if(t===void 0){let i=r_.get(e);if(i!==void 0)t=it[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return wc(t)}var a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(n){return n.replace(a_,l_)}function l_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var c_={[Di]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function h_(n){return c_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var u_={[xi]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE_UV"};function d_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":u_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var f_={[Ni]:"ENVMAP_MODE_REFRACTION"};function p_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":f_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var m_={[ea]:"ENVMAP_BLENDING_MULTIPLY",[$h]:"ENVMAP_BLENDING_MIX",[jh]:"ENVMAP_BLENDING_ADD"};function g_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":m_[n.combine]||"ENVMAP_BLENDING_NONE"}function __(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function x_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=h_(t),c=d_(t),p=p_(t),d=g_(t),h=__(t),f=t_(t),m=n_(r),_=s.createProgram(),g,u,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Or).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Or).join(`
`),u.length>0&&(u+=`
`)):(g=[Bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),u=[Bu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?it.tonemapping_pars_fragment:"",t.toneMapping!==An?Qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,$g("linearToOutputTexel",t.outputColorSpace),e_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=wc(o),o=Uu(o,t),o=Fu(o,t),a=wc(a),a=Uu(a,t),a=Fu(a,t),o=Ou(o),a=Ou(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let M=x+g+o,v=x+u+a,w=Du(s,s.VERTEX_SHADER,M),T=Du(s,s.FRAGMENT_SHADER,v);s.attachShader(_,w),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(D){if(n.debug.checkShaderErrors){let E=s.getProgramInfoLog(_)||"",R=s.getShaderInfoLog(w)||"",P=s.getShaderInfoLog(T)||"",F=E.trim(),B=R.trim(),V=P.trim(),ee=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,T);else{let X=Nu(s,w,"vertex"),K=Nu(s,T,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+X+`
`+K)}else F!==""?Ge("WebGLProgram: Program Info Log:",F):(B===""||V==="")&&(J=!1);J&&(D.diagnostics={runnable:ee,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:V,prefix:u}})}s.deleteShader(w),s.deleteShader(T),y=new Ts(s,_),b=i_(s,_)}let y;this.getUniforms=function(){return y===void 0&&I(this),y};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,Yg)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}var y_=0,Tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ac(e),t.set(e,i)),i}},Ac=class{constructor(e){this.id=y_++,this.code=e,this.usedTimes=0}};function v_(n){return n===Si||n===Dr||n===Lr}function S_(n,e,t,i,s,r){let o=new cs,a=new Tc,l=new Set,c=[],p=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,b,C,D,E,R){let P=D.fog,F=E.geometry,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ee=e.get(y.envMap||B,V),J=ee&&ee.mapping===Tr?ee.image.height:null,X=f[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&Ge("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,q=K!==void 0?K.length:0,le=0;F.morphAttributes.position!==void 0&&(le=1),F.morphAttributes.normal!==void 0&&(le=2),F.morphAttributes.color!==void 0&&(le=3);let ge,se,fe,W;if(X){let yt=Hn[X];ge=yt.vertexShader,se=yt.fragmentShader}else{ge=y.vertexShader,se=y.fragmentShader;let yt=a.getVertexShaderStage(y),ut=a.getFragmentShaderStage(y);a.update(y,yt,ut),fe=yt.id,W=ut.id}let j=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),ze=E.isInstancedMesh===!0,xe=E.isBatchedMesh===!0,Ie=!!y.map,at=!!y.matcap,oe=!!ee,de=!!y.aoMap,pe=!!y.lightMap,me=!!y.bumpMap&&y.wireframe===!1,ve=!!y.normalMap,We=!!y.displacementMap,Ve=!!y.emissiveMap,Je=!!y.metalnessMap,je=!!y.roughnessMap,O=y.anisotropy>0,ht=y.clearcoat>0,st=y.dispersion>0,N=y.retroreflectivity>0,S=y.iridescence>0,G=y.sheen>0,$=y.transmission>0,te=O&&!!y.anisotropyMap,_e=ht&&!!y.clearcoatMap,ye=ht&&!!y.clearcoatNormalMap,ie=ht&&!!y.clearcoatRoughnessMap,ae=S&&!!y.iridescenceMap,Se=S&&!!y.iridescenceThicknessMap,Be=G&&!!y.sheenColorMap,Te=G&&!!y.sheenRoughnessMap,be=!!y.specularMap,ke=!!y.specularColorMap,Xe=!!y.specularIntensityMap,et=$&&!!y.transmissionMap,H=$&&!!y.thicknessMap,Me=!!y.gradientMap,re=!!y.alphaMap,Ee=y.alphaTest>0,Pe=!!y.alphaHash,he=!!y.extensions,He=An;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(He=n.toneMapping);let Fe={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:ge,fragmentShader:se,defines:y.defines,customVertexShaderID:fe,customFragmentShaderID:W,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:xe,batchingColor:xe&&E._colorsTexture!==null,instancing:ze,instancingColor:ze&&E.instanceColor!==null,instancingMorph:ze&&E.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ie,matcap:at,envMap:oe,envMapMode:oe&&ee.mapping,envMapCubeUVHeight:J,aoMap:de,lightMap:pe,bumpMap:me,normalMap:ve,displacementMap:We,emissiveMap:Ve,normalMapObjectSpace:ve&&y.normalMapType===tu,normalMapTangentSpace:ve&&y.normalMapType===Nr,packedNormalMap:ve&&y.normalMapType===Nr&&v_(y.normalMap.format),metalnessMap:Je,roughnessMap:je,anisotropy:O,anisotropyMap:te,clearcoat:ht,clearcoatMap:_e,clearcoatNormalMap:ye,clearcoatRoughnessMap:ie,dispersion:st,retroreflection:N,iridescence:S,iridescenceMap:ae,iridescenceThicknessMap:Se,sheen:G,sheenColorMap:Be,sheenRoughnessMap:Te,specularMap:be,specularColorMap:ke,specularIntensityMap:Xe,transmission:$,transmissionMap:et,thicknessMap:H,gradientMap:Me,opaque:y.transparent===!1&&y.blending===vs&&y.alphaToCoverage===!1,alphaMap:re,alphaTest:Ee,alphaHash:Pe,combine:y.combine,mapUv:Ie&&m(y.map.channel),aoMapUv:de&&m(y.aoMap.channel),lightMapUv:pe&&m(y.lightMap.channel),bumpMapUv:me&&m(y.bumpMap.channel),normalMapUv:ve&&m(y.normalMap.channel),displacementMapUv:We&&m(y.displacementMap.channel),emissiveMapUv:Ve&&m(y.emissiveMap.channel),metalnessMapUv:Je&&m(y.metalnessMap.channel),roughnessMapUv:je&&m(y.roughnessMap.channel),anisotropyMapUv:te&&m(y.anisotropyMap.channel),clearcoatMapUv:_e&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(y.sheenRoughnessMap.channel),specularMapUv:be&&m(y.specularMap.channel),specularColorMapUv:ke&&m(y.specularColorMap.channel),specularIntensityMapUv:Xe&&m(y.specularIntensityMap.channel),transmissionMapUv:et&&m(y.transmissionMap.channel),thicknessMapUv:H&&m(y.thicknessMap.channel),alphaMapUv:re&&m(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ve||O),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!F.attributes.uv&&(Ie||re),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&ve===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ue,skinning:E.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:le,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:R.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Ie&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===ft,decodeVideoTextureEmissive:Ve&&y.emissiveMap.isVideoTexture===!0&&ot.getTransfer(y.emissiveMap.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===At,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:he&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&y.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function g(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(u(b,y),x(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function u(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numSunLights),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numSunLightShadows),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function M(y){let b=f[y.type],C;if(b){let D=Hn[b];C=yu.clone(D.uniforms)}else C=y.uniforms;return C}function v(y,b){let C=p.get(b);return C!==void 0?++C.usedTimes:(C=new x_(n,b,y,s),c.push(C),p.set(b,C)),C}function w(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),p.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function I(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:M,acquireProgram:v,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:I}}function b_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function M_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,m,_,g,u){let x=n[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:u},n[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=m,x.materialVariant=o(h),x.groupOrder=_,x.renderOrder=h.renderOrder,x.z=g,x.group=u),e++,x}function l(h,f,m,_,g,u,x){x.reversedDepth===!0&&(g=-g);let M=a(h,f,m,_,g,u);m.transmission>0?i.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(h,f,m,_,g,u){let x=a(h,f,m,_,g,u);m.transmission>0?i.unshift(x):m.transparent===!0?s.unshift(x):t.unshift(x)}function p(h,f){t.length>1&&t.sort(h||M_),i.length>1&&i.sort(f||ku),s.length>1&&s.sort(f||ku)}function d(){for(let h=e,f=n.length;h<f;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:p}}function E_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new zu,n.set(i,[o])):s>=r.length?(o=new zu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function w_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ke};break;case"SpotLight":t={position:new L,direction:new L,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function T_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var A_=0;function R_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function C_(n){let e=new w_,t=T_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);let s=new L,r=new pt,o=new pt;function a(c){let p=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,u=0,x=0,M=0,v=0,w=0,T=0,I=0,y=0,b=0,C=0;c.sort(R_);for(let E=0,R=c.length;E<R;E++){let P=c[E],F=P.color,B=P.intensity,V=P.distance,ee=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Si?ee=P.shadow.map.texture:ee=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)p+=F.r*B,d+=F.g*B,h+=F.b*B;else if(P.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(P.sh.coefficients[J],B);C++}else if(P.isSunLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,K=t.get(P);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[m]=K,i.sunShadowMap[m]=ee;let q=X.getViewportCount();for(let le=0;le<q;le++)i.sunShadowMatrix[_+le]=X.getMatrix(le),i.sunShadowCascade[_+le]=X._cascadeData[le];_+=q,m++}i.sun[f]=J,f++}else if(P.isDirectionalLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,K=t.get(P);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=ee,i.directionalShadowMatrix[g]=P.shadow.matrix,w++}i.directional[g]=J,g++}else if(P.isSpotLight){let J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(F).multiplyScalar(B),J.distance=V,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,i.spot[x]=J;let X=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,X.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[x]=X.matrix,P.castShadow){let K=t.get(P);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.spotShadow[x]=K,i.spotShadowMap[x]=ee,I++}x++}else if(P.isRectAreaLight){let J=e.get(P);J.color.copy(F).multiplyScalar(B),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),i.rectArea[M]=J,M++}else if(P.isPointLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){let X=P.shadow,K=t.get(P);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,i.pointShadow[u]=K,i.pointShadowMap[u]=ee,i.pointShadowMatrix[u]=P.shadow.matrix,T++}i.point[u]=J,u++}else if(P.isHemisphereLight){let J=e.get(P);J.skyColor.copy(P.color).multiplyScalar(B),J.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[v]=J,v++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==u||D.spotLength!==x||D.rectAreaLength!==M||D.hemiLength!==v||D.numSunShadows!==m||D.numDirectionalShadows!==w||D.numPointShadows!==T||D.numSpotShadows!==I||D.numSpotMaps!==y||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=g,i.spot.length=x,i.rectArea.length=M,i.point.length=u,i.hemi.length=v,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+y-b,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,D.sunLength=f,D.directionalLength=g,D.pointLength=u,D.spotLength=x,D.rectAreaLength=M,D.hemiLength=v,D.numSunShadows=m,D.numDirectionalShadows=w,D.numPointShadows=T,D.numSpotShadows=I,D.numSpotMaps=y,D.numLightProbes=C,i.version=A_++)}function l(c,p){let d=0,h=0,f=0,m=0,_=0,g=0,u=p.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){let v=c[x];if(v.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(u),d++}else if(v.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),h++}else if(v.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),m++}else if(v.isRectAreaLight){let w=i.rectArea[_];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),o.identity(),r.copy(v.matrixWorld),r.premultiply(u),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),f++}else if(v.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(u),g++}}}return{setup:a,setupView:l,state:i}}function Hu(n){let e=new C_(n),t=[],i=[],s=[];function r(h){d.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function p(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:p,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function P_(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Hu(n),e.set(s,[a])):r>=o.length?(a=new Hu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var I_=`void main() {
  gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
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
}`,L_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],N_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Vu=new pt,Fr=new L,vc=new L;function U_(n,e,t){let i=new us,s=new ce,r=new ce,o=new Tt,a=new zo,l=new Ho,c={},p=t.maxTextureSize,d={[_i]:Wt,[Wt]:_i,[At]:At},h=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:I_,fragmentShader:D_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new _t;m.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new we(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Di;let u=this.type;this.render=function(T,I,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Dh&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Di);let b=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),E=n.state;E.setBlending(kn),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let R=u!==this.type;R&&I.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=T.length;P<F;P++){let B=T[P],V=B.shadow;if(V===void 0){Ge("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ee=V.getFrameExtents();s.multiply(ee),r.copy(V.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/ee.x),s.x=r.x*ee.x,V.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/ee.y),s.y=r.y*ee.y,V.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||R===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ys){if(B.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new tn(s.x,s.y,{format:Si,type:Cn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new hi(s.x,s.y,mn),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=Un,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt}else B.isPointLight?(V.map=new Xa(s.x),V.map.depthTexture=new Lo(s.x,Rn)):(V.map=new tn(s.x,s.y),V.map.depthTexture=new hi(s.x,s.y,Rn)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=Un,this.type===Di?(V.map.depthTexture.compareFunction=J?Va:Ha,V.map.depthTexture.minFilter=Vt,V.map.depthTexture.magFilter=Vt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let X=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();B.isPointLight!==!0&&V.updateMatrices(B,y);for(let K=0;K<X;K++){let q=V.getCamera(K);if(B.isPointLight){let le=V.camera,ge=V.matrix,se=B.distance||le.far;se!==le.far&&(le.far=se,le.updateProjectionMatrix()),Fr.setFromMatrixPosition(B.matrixWorld),le.position.copy(Fr),vc.copy(le.position),vc.add(L_[K]),le.up.copy(N_[K]),le.lookAt(vc),le.updateMatrixWorld(),ge.makeTranslation(-Fr.x,-Fr.y,-Fr.z),Vu.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Vu,le.coordinateSystem,le.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,K),n.clear();else{K===0&&(n.setRenderTarget(V.map),n.clear());let le=V.getViewport(K);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),E.viewport(o)}i=V.getFrustum(K),v(I,y,q,B,this.type)}V.isPointLightShadow!==!0&&this.type===ys&&x(V,y),V.needsUpdate=!1}u=this.type,g.needsUpdate=!1,n.setRenderTarget(b,C,D)};function x(T,I){let y=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new tn(s.x,s.y,{format:Si,type:Cn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(I,null,y,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(I,null,y,f,_,null)}function M(T,I,y,b){let C=null,D=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=y.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let E=C.uuid,R=I.uuid,P=c[E];P===void 0&&(P={},c[E]=P);let F=P[R];F===void 0&&(F=C.clone(),P[R]=F,I.addEventListener("dispose",w)),C=F}if(C.visible=I.visible,C.wireframe=I.wireframe,b===ys?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:d[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let E=n.properties.get(C);E.light=y}return C}function v(T,I,y,b,C){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===ys)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let R=e.update(T),P=T.material;if(Array.isArray(P)){let F=R.groups;for(let B=0,V=F.length;B<V;B++){let ee=F[B],J=P[ee.materialIndex];if(J&&J.visible){let X=M(T,J,b,C);T.onBeforeShadow(n,T,I,y,R,X,ee),n.renderBufferDirect(y,null,R,X,T,ee),T.onAfterShadow(n,T,I,y,R,X,ee)}}}else if(P.visible){let F=M(T,P,b,C);T.onBeforeShadow(n,T,I,y,R,F,null),n.renderBufferDirect(y,null,R,F,T,null),T.onAfterShadow(n,T,I,y,R,F,null)}}let E=T.children;for(let R=0,P=E.length;R<P;R++)v(E[R],I,y,b,C)}function w(T){T.target.removeEventListener("dispose",w);for(let y in c){let b=c[y],C=T.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function F_(n,e){function t(){let H=!1,Me=new Tt,re=null,Ee=new Tt(0,0,0,0);return{setMask:function(Pe){re!==Pe&&!H&&(n.colorMask(Pe,Pe,Pe,Pe),re=Pe)},setLocked:function(Pe){H=Pe},setClear:function(Pe,he,He,Fe,yt){yt===!0&&(Pe*=Fe,he*=Fe,He*=Fe),Me.set(Pe,he,He,Fe),Ee.equals(Me)===!1&&(n.clearColor(Pe,he,He,Fe),Ee.copy(Me))},reset:function(){H=!1,re=null,Ee.set(-1,0,0,0)}}}function i(){let H=!1,Me=!1,re=null,Ee=null,Pe=null;return{setReversed:function(he){if(Me!==he){let He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Me=he;let Fe=Pe;Pe=null,this.setClear(Fe)}},getReversed:function(){return Me},setTest:function(he){he?j(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(he){re!==he&&!H&&(n.depthMask(he),re=he)},setFunc:function(he){if(Me&&(he=fu[he]),Ee!==he){switch(he){case _o:n.depthFunc(n.NEVER);break;case xo:n.depthFunc(n.ALWAYS);break;case yo:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case vo:n.depthFunc(n.EQUAL);break;case So:n.depthFunc(n.GEQUAL);break;case bo:n.depthFunc(n.GREATER);break;case Mo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=he}},setLocked:function(he){H=he},setClear:function(he){Pe!==he&&(Pe=he,Me&&(he=1-he),n.clearDepth(he))},reset:function(){H=!1,re=null,Ee=null,Pe=null,Me=!1}}}function s(){let H=!1,Me=null,re=null,Ee=null,Pe=null,he=null,He=null,Fe=null,yt=null;return{setTest:function(ut){H||(ut?j(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(ut){Me!==ut&&!H&&(n.stencilMask(ut),Me=ut)},setFunc:function(ut,xn,Pn){(re!==ut||Ee!==xn||Pe!==Pn)&&(n.stencilFunc(ut,xn,Pn),re=ut,Ee=xn,Pe=Pn)},setOp:function(ut,xn,Pn){(he!==ut||He!==xn||Fe!==Pn)&&(n.stencilOp(ut,xn,Pn),he=ut,He=xn,Fe=Pn)},setLocked:function(ut){H=ut},setClear:function(ut){yt!==ut&&(n.clearStencil(ut),yt=ut)},reset:function(){H=!1,Me=null,re=null,Ee=null,Pe=null,he=null,He=null,Fe=null,yt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,p={},d={},h={},f=new WeakMap,m=[],_=null,g=!1,u=null,x=null,M=null,v=null,w=null,T=null,I=null,y=new Ke(0,0,0),b=0,C=!1,D=null,E=null,R=null,P=null,F=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ee=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=ee>=1):J.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=ee>=2);let X=null,K={},q=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),ge=new Tt().fromArray(q),se=new Tt().fromArray(le);function fe(H,Me,re,Ee){let Pe=new Uint8Array(4),he=n.createTexture();n.bindTexture(H,he),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<re;He++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Pe):n.texImage2D(Me+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pe);return he}let W={};W[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(ss),me(!1),ve(Vl),j(n.CULL_FACE),de(kn);function j(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function ue(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function ze(H,Me){return h[H]!==Me?(n.bindFramebuffer(H,Me),h[H]=Me,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Me),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function xe(H,Me){let re=m,Ee=!1;if(H){re=f.get(Me),re===void 0&&(re=[],f.set(Me,re));let Pe=H.textures;if(re.length!==Pe.length||re[0]!==n.COLOR_ATTACHMENT0){for(let he=0,He=Pe.length;he<He;he++)re[he]=n.COLOR_ATTACHMENT0+he;re.length=Pe.length,Ee=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(re)}function Ie(H){return _!==H?(n.useProgram(H),_=H,!0):!1}let at={[Li]:n.FUNC_ADD,[Nh]:n.FUNC_SUBTRACT,[Uh]:n.FUNC_REVERSE_SUBTRACT};at[Fh]=n.MIN,at[Oh]=n.MAX;let oe={[Bh]:n.ZERO,[kh]:n.ONE,[zh]:n.SRC_COLOR,[ql]:n.SRC_ALPHA,[qh]:n.SRC_ALPHA_SATURATE,[Wh]:n.DST_COLOR,[Vh]:n.DST_ALPHA,[Hh]:n.ONE_MINUS_SRC_COLOR,[Yl]:n.ONE_MINUS_SRC_ALPHA,[Xh]:n.ONE_MINUS_DST_COLOR,[Gh]:n.ONE_MINUS_DST_ALPHA,[Yh]:n.CONSTANT_COLOR,[Zh]:n.ONE_MINUS_CONSTANT_COLOR,[Jh]:n.CONSTANT_ALPHA,[Kh]:n.ONE_MINUS_CONSTANT_ALPHA};function de(H,Me,re,Ee,Pe,he,He,Fe,yt,ut){if(H===kn){g===!0&&(ue(n.BLEND),g=!1);return}if(g===!1&&(j(n.BLEND),g=!0),H!==Lh){if(H!==u||ut!==C){if((x!==Li||w!==Li)&&(n.blendEquation(n.FUNC_ADD),x=Li,w=Li),ut)switch(H){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",H);break}else switch(H){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Wl:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",H);break}M=null,v=null,T=null,I=null,y.set(0,0,0),b=0,u=H,C=ut}return}Pe=Pe||Me,he=he||re,He=He||Ee,(Me!==x||Pe!==w)&&(n.blendEquationSeparate(at[Me],at[Pe]),x=Me,w=Pe),(re!==M||Ee!==v||he!==T||He!==I)&&(n.blendFuncSeparate(oe[re],oe[Ee],oe[he],oe[He]),M=re,v=Ee,T=he,I=He),(Fe.equals(y)===!1||yt!==b)&&(n.blendColor(Fe.r,Fe.g,Fe.b,yt),y.copy(Fe),b=yt),u=H,C=!1}function pe(H,Me){H.side===At?ue(n.CULL_FACE):j(n.CULL_FACE);let re=H.side===Wt;Me&&(re=!re),me(re),H.blending===vs&&H.transparent===!1?de(kn):de(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ee=H.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ve(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function me(H){D!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),D=H)}function ve(H){H!==Ph?(j(n.CULL_FACE),H!==E&&(H===Vl?n.cullFace(n.BACK):H===Ih?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),E=H}function We(H){H!==R&&(V&&n.lineWidth(H),R=H)}function Ve(H,Me,re){H?(j(n.POLYGON_OFFSET_FILL),(P!==Me||F!==re)&&(P=Me,F=re,o.getReversed()&&(Me=-Me),n.polygonOffset(Me,re))):ue(n.POLYGON_OFFSET_FILL)}function Je(H){H?j(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function je(H){H===void 0&&(H=n.TEXTURE0+B-1),X!==H&&(n.activeTexture(H),X=H)}function O(H,Me,re){re===void 0&&(X===null?re=n.TEXTURE0+B-1:re=X);let Ee=K[re];Ee===void 0&&(Ee={type:void 0,texture:void 0},K[re]=Ee),(Ee.type!==H||Ee.texture!==Me)&&(X!==re&&(n.activeTexture(re),X=re),n.bindTexture(H,Me||W[H]),Ee.type=H,Ee.texture=Me)}function ht(){let H=K[X];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function st(){try{n.compressedTexImage2D(...arguments)}catch(H){qe("WebGLState:",H)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(H){qe("WebGLState:",H)}}function S(){try{n.texSubImage2D(...arguments)}catch(H){qe("WebGLState:",H)}}function G(){try{n.texSubImage3D(...arguments)}catch(H){qe("WebGLState:",H)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(H){qe("WebGLState:",H)}}function te(){try{n.compressedTexSubImage3D(...arguments)}catch(H){qe("WebGLState:",H)}}function _e(){try{n.texStorage2D(...arguments)}catch(H){qe("WebGLState:",H)}}function ye(){try{n.texStorage3D(...arguments)}catch(H){qe("WebGLState:",H)}}function ie(){try{n.texImage2D(...arguments)}catch(H){qe("WebGLState:",H)}}function ae(){try{n.texImage3D(...arguments)}catch(H){qe("WebGLState:",H)}}function Se(H){return d[H]!==void 0?d[H]:n.getParameter(H)}function Be(H,Me){d[H]!==Me&&(n.pixelStorei(H,Me),d[H]=Me)}function Te(H){ge.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ge.copy(H))}function be(H){se.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),se.copy(H))}function ke(H,Me){let re=c.get(Me);re===void 0&&(re=new WeakMap,c.set(Me,re));let Ee=re.get(H);Ee===void 0&&(Ee=n.getUniformBlockIndex(Me,H.name),re.set(H,Ee))}function Xe(H,Me){let Ee=c.get(Me).get(H);l.get(Me)!==Ee&&(n.uniformBlockBinding(Me,Ee,H.__bindingPointIndex),l.set(Me,Ee))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},d={},X=null,K={},h={},f=new WeakMap,m=[],_=null,g=!1,u=null,x=null,M=null,v=null,w=null,T=null,I=null,y=new Ke(0,0,0),b=0,C=!1,D=null,E=null,R=null,P=null,F=null,ge.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ue,bindFramebuffer:ze,drawBuffers:xe,useProgram:Ie,setBlending:de,setMaterial:pe,setFlipSided:me,setCullFace:ve,setLineWidth:We,setPolygonOffset:Ve,setScissorTest:Je,activeTexture:je,bindTexture:O,unbindTexture:ht,compressedTexImage2D:st,compressedTexImage3D:N,texImage2D:ie,texImage3D:ae,pixelStorei:Be,getParameter:Se,updateUBOMapping:ke,uniformBlockBinding:Xe,texStorage2D:_e,texStorage3D:ye,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:$,compressedTexSubImage3D:te,scissor:Te,viewport:be,reset:et}}function O_(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,p=new WeakMap,d=new Set,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,S){return m?new OffscreenCanvas(N,S):Zs("canvas")}function g(N,S,G){let $=1,te=st(N);if((te.width>G||te.height>G)&&($=G/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let _e=Math.floor($*te.width),ye=Math.floor($*te.height);h===void 0&&(h=_(_e,ye));let ie=S?_(_e,ye):h;return ie.width=_e,ie.height=ye,ie.getContext("2d").drawImage(N,0,0,_e,ye),Ge("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+_e+"x"+ye+")."),ie}else return"data"in N&&Ge("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),N;return N}function u(N){return N.generateMipmaps}function x(N){n.generateMipmap(N)}function M(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(N,S,G,$,te,_e=!1){if(N!==null){if(n[N]!==void 0)return n[N];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ye;$&&(ye=e.get("EXT_texture_norm16"),ye||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=S;if(S===n.RED&&(G===n.FLOAT&&(ie=n.R32F),G===n.HALF_FLOAT&&(ie=n.R16F),G===n.UNSIGNED_BYTE&&(ie=n.R8),G===n.UNSIGNED_SHORT&&ye&&(ie=ye.R16_EXT),G===n.SHORT&&ye&&(ie=ye.R16_SNORM_EXT)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.R8UI),G===n.UNSIGNED_SHORT&&(ie=n.R16UI),G===n.UNSIGNED_INT&&(ie=n.R32UI),G===n.BYTE&&(ie=n.R8I),G===n.SHORT&&(ie=n.R16I),G===n.INT&&(ie=n.R32I)),S===n.RG&&(G===n.FLOAT&&(ie=n.RG32F),G===n.HALF_FLOAT&&(ie=n.RG16F),G===n.UNSIGNED_BYTE&&(ie=n.RG8),G===n.UNSIGNED_SHORT&&ye&&(ie=ye.RG16_EXT),G===n.SHORT&&ye&&(ie=ye.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RG8UI),G===n.UNSIGNED_SHORT&&(ie=n.RG16UI),G===n.UNSIGNED_INT&&(ie=n.RG32UI),G===n.BYTE&&(ie=n.RG8I),G===n.SHORT&&(ie=n.RG16I),G===n.INT&&(ie=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),G===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),G===n.UNSIGNED_INT&&(ie=n.RGB32UI),G===n.BYTE&&(ie=n.RGB8I),G===n.SHORT&&(ie=n.RGB16I),G===n.INT&&(ie=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),G===n.UNSIGNED_INT&&(ie=n.RGBA32UI),G===n.BYTE&&(ie=n.RGBA8I),G===n.SHORT&&(ie=n.RGBA16I),G===n.INT&&(ie=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_SHORT&&ye&&(ie=ye.RGB16_EXT),G===n.SHORT&&ye&&(ie=ye.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(ie=n.R11F_G11F_B10F)),S===n.RGBA){let ae=_e?Ys:ot.getTransfer(te);G===n.FLOAT&&(ie=n.RGBA32F),G===n.HALF_FLOAT&&(ie=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ie=ae===ft?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&ye&&(ie=ye.RGBA16_EXT),G===n.SHORT&&ye&&(ie=ye.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(N,S){let G;return N?S===null||S===Rn||S===bs?G=n.DEPTH24_STENCIL8:S===mn?G=n.DEPTH32F_STENCIL8:S===Ss&&(G=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Rn||S===bs?G=n.DEPTH_COMPONENT24:S===mn?G=n.DEPTH_COMPONENT32F:S===Ss&&(G=n.DEPTH_COMPONENT16),G}function T(N,S){return u(N)===!0||N.isFramebufferTexture&&N.minFilter!==Bt&&N.minFilter!==Vt?Math.log2(Math.max(S.width,S.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?S.mipmaps.length:1}function I(N){let S=N.target;S.removeEventListener("dispose",I),b(S),S.isVideoTexture&&p.delete(S),S.isHTMLTexture&&d.delete(S)}function y(N){let S=N.target;S.removeEventListener("dispose",y),D(S)}function b(N){let S=i.get(N);if(S.__webglInit===void 0)return;let G=N.source,$=f.get(G);if($){let te=$[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(N),Object.keys($).length===0&&f.delete(G)}i.remove(N)}function C(N){let S=i.get(N);n.deleteTexture(S.__webglTexture);let G=N.source,$=f.get(G);delete $[S.__cacheKey],o.memory.textures--}function D(N){let S=i.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),i.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let te=0;te<S.__webglFramebuffer[$].length;te++)n.deleteFramebuffer(S.__webglFramebuffer[$][te]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=N.textures;for(let $=0,te=G.length;$<te;$++){let _e=i.get(G[$]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(G[$])}i.remove(N)}let E=0;function R(){E=0}function P(){return E}function F(N){E=N}function B(){let N=E;return N>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),E+=1,N}function V(N){let S=[];return S.push(N.wrapS),S.push(N.wrapT),S.push(N.wrapR||0),S.push(N.magFilter),S.push(N.minFilter),S.push(N.anisotropy),S.push(N.internalFormat),S.push(N.format),S.push(N.type),S.push(N.generateMipmaps),S.push(N.premultiplyAlpha),S.push(N.flipY),S.push(N.unpackAlignment),S.push(N.colorSpace),S.join()}function ee(N,S){let G=i.get(N);if(N.isVideoTexture&&O(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){let $=N.image;if($===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(G,N,S);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function J(N,S){let G=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ue(G,N,S);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function X(N,S){let G=i.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){ue(G,N,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function K(N,S){let G=i.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){ze(G,N,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}let q={[Eo]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[wo]:n.MIRRORED_REPEAT},le={[Bt]:n.NEAREST,[Qh]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[ia]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},ge={[iu]:n.NEVER,[lu]:n.ALWAYS,[su]:n.LESS,[Ha]:n.LEQUAL,[ru]:n.EQUAL,[Va]:n.GEQUAL,[ou]:n.GREATER,[au]:n.NOTEQUAL};function se(N,S){if(S.type===mn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Vt||S.magFilter===ia||S.magFilter===Ar||S.magFilter===yi||S.minFilter===Vt||S.minFilter===ia||S.minFilter===Ar||S.minFilter===yi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,q[S.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,q[S.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,q[S.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,le[S.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,le[S.minFilter]),S.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bt||S.minFilter!==Ar&&S.minFilter!==yi||S.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function fe(N,S){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,S.addEventListener("dispose",I));let $=S.source,te=f.get($);te===void 0&&(te={},f.set($,te));let _e=V(S);if(_e!==N.__cacheKey){te[_e]===void 0&&(te[_e]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[_e].usedTimes++;let ye=te[N.__cacheKey];ye!==void 0&&(te[N.__cacheKey].usedTimes--,ye.usedTimes===0&&C(S)),N.__cacheKey=_e,N.__webglTexture=te[_e].texture}return G}function W(N,S,G){return Math.floor(Math.floor(N/G)/S)}function j(N,S,G,$){let _e=N.updateRanges;if(_e.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,$,S.data);else{_e.sort((Be,Te)=>Be.start-Te.start);let ye=0;for(let Be=1;Be<_e.length;Be++){let Te=_e[ye],be=_e[Be],ke=Te.start+Te.count,Xe=W(be.start,S.width,4),et=W(Te.start,S.width,4);be.start<=ke+1&&Xe===et&&W(be.start+be.count-1,S.width,4)===Xe?Te.count=Math.max(Te.count,be.start+be.count-Te.start):(++ye,_e[ye]=be)}_e.length=ye+1;let ie=t.getParameter(n.UNPACK_ROW_LENGTH),ae=t.getParameter(n.UNPACK_SKIP_PIXELS),Se=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Be=0,Te=_e.length;Be<Te;Be++){let be=_e[Be],ke=Math.floor(be.start/4),Xe=Math.ceil(be.count/4),et=ke%S.width,H=Math.floor(ke/S.width),Me=Xe,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,et),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,et,H,Me,re,G,$,S.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ie),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function ue(N,S,G){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);let te=fe(N,S),_e=S.source;t.bindTexture($,N.__webglTexture,n.TEXTURE0+G);let ye=i.get(_e);if(_e.version!==ye.__version||te===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let re=ot.getPrimaries(ot.workingColorSpace),Ee=S.colorSpace===$n?null:ot.getPrimaries(S.colorSpace),Pe=S.colorSpace===$n||re===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let ae=g(S.image,!1,s.maxTextureSize);ae=ht(S,ae);let Se=r.convert(S.format,S.colorSpace),Be=r.convert(S.type),Te=v(S.internalFormat,Se,Be,S.normalized,S.colorSpace,S.isVideoTexture);se($,S);let be,ke=S.mipmaps,Xe=S.isVideoTexture!==!0,et=ye.__version===void 0||te===!0,H=_e.dataReady,Me=T(S,ae);if(S.isDepthTexture)Te=w(S.format===vi,S.type),et&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Te,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Te,ae.width,ae.height,0,Se,Be,null));else if(S.isDataTexture)if(ke.length>0){Xe&&et&&t.texStorage2D(n.TEXTURE_2D,Me,Te,ke[0].width,ke[0].height);for(let re=0,Ee=ke.length;re<Ee;re++)be=ke[re],Xe?H&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,be.width,be.height,Se,Be,be.data):t.texImage2D(n.TEXTURE_2D,re,Te,be.width,be.height,0,Se,Be,be.data);S.generateMipmaps=!1}else Xe?(et&&t.texStorage2D(n.TEXTURE_2D,Me,Te,ae.width,ae.height),H&&j(S,ae,Se,Be)):t.texImage2D(n.TEXTURE_2D,0,Te,ae.width,ae.height,0,Se,Be,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xe&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Te,ke[0].width,ke[0].height,ae.depth);for(let re=0,Ee=ke.length;re<Ee;re++)if(be=ke[re],S.format!==gn)if(Se!==null)if(Xe){if(H)if(S.layerUpdates.size>0){let Pe=pc(be.width,be.height,S.format,S.type);for(let he of S.layerUpdates){let He=be.data.subarray(he*Pe/be.data.BYTES_PER_ELEMENT,(he+1)*Pe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,he,be.width,be.height,1,Se,He)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,ae.depth,Se,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Te,be.width,be.height,ae.depth,0,be.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,be.width,be.height,ae.depth,Se,Be,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Te,be.width,be.height,ae.depth,0,Se,Be,be.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Xe&&et&&t.texStorage2D(n.TEXTURE_2D,Me,Te,ke[0].width,ke[0].height);for(let re=0,Ee=ke.length;re<Ee;re++)be=ke[re],S.format!==gn?Se!==null?Xe?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,be.width,be.height,Se,be.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Te,be.width,be.height,0,be.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?H&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,be.width,be.height,Se,Be,be.data):t.texImage2D(n.TEXTURE_2D,re,Te,be.width,be.height,0,Se,Be,be.data)}else if(S.isDataArrayTexture)if(Xe){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Te,ae.width,ae.height,ae.depth),H)if(S.layerUpdates.size>0){let re=pc(ae.width,ae.height,S.format,S.type);for(let Ee of S.layerUpdates){let Pe=ae.data.subarray(Ee*re/ae.data.BYTES_PER_ELEMENT,(Ee+1)*re/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,ae.width,ae.height,1,Se,Be,Pe)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,Be,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ae.width,ae.height,ae.depth,0,Se,Be,ae.data);else if(S.isData3DTexture)Xe?(et&&t.texStorage3D(n.TEXTURE_3D,Me,Te,ae.width,ae.height,ae.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,Be,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ae.width,ae.height,ae.depth,0,Se,Be,ae.data);else if(S.isFramebufferTexture){if(et)if(Xe)t.texStorage2D(n.TEXTURE_2D,Me,Te,ae.width,ae.height);else{let re=ae.width,Ee=ae.height;for(let Pe=0;Pe<Me;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Te,re,Ee,0,Se,Be,null),re>>=1,Ee>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ae.parentNode!==re){re.appendChild(ae),d.add(S),re.onpaint=Ee=>{let Pe=Ee.changedElements;for(let he of d)Pe.includes(he.image)&&(he.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ae);else{let Pe=n.RGBA,he=n.RGBA,He=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pe,he,He,ae)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Xe&&et){let re=st(ke[0]);t.texStorage2D(n.TEXTURE_2D,Me,Te,re.width,re.height)}for(let re=0,Ee=ke.length;re<Ee;re++)be=ke[re],Xe?H&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Se,Be,be):t.texImage2D(n.TEXTURE_2D,re,Te,Se,Be,be);S.generateMipmaps=!1}else if(Xe){if(et){let re=st(ae);t.texStorage2D(n.TEXTURE_2D,Me,Te,re.width,re.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Be,ae)}else t.texImage2D(n.TEXTURE_2D,0,Te,Se,Be,ae);u(S)&&x($),ye.__version=_e.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function ze(N,S,G){if(S.image.length!==6)return;let $=fe(N,S),te=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+G);let _e=i.get(te);if(te.version!==_e.__version||$===!0){t.activeTexture(n.TEXTURE0+G);let ye=ot.getPrimaries(ot.workingColorSpace),ie=S.colorSpace===$n?null:ot.getPrimaries(S.colorSpace),ae=S.colorSpace===$n||ye===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Se=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let he=0;he<6;he++)!Se&&!Be?Te[he]=g(S.image[he],!0,s.maxCubemapSize):Te[he]=Be?S.image[he].image:S.image[he],Te[he]=ht(S,Te[he]);let be=Te[0],ke=r.convert(S.format,S.colorSpace),Xe=r.convert(S.type),et=v(S.internalFormat,ke,Xe,S.normalized,S.colorSpace),H=S.isVideoTexture!==!0,Me=_e.__version===void 0||$===!0,re=te.dataReady,Ee=T(S,be);se(n.TEXTURE_CUBE_MAP,S);let Pe;if(Se){H&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,et,be.width,be.height);for(let he=0;he<6;he++){Pe=Te[he].mipmaps;for(let He=0;He<Pe.length;He++){let Fe=Pe[He];S.format!==gn?ke!==null?H?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,Fe.width,Fe.height,ke,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,et,Fe.width,Fe.height,0,Fe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,Fe.width,Fe.height,ke,Xe,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,et,Fe.width,Fe.height,0,ke,Xe,Fe.data)}}}else{if(Pe=S.mipmaps,H&&Me){Pe.length>0&&Ee++;let he=st(Te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,et,he.width,he.height)}for(let he=0;he<6;he++)if(Be){H?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Te[he].width,Te[he].height,ke,Xe,Te[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,et,Te[he].width,Te[he].height,0,ke,Xe,Te[he].data);for(let He=0;He<Pe.length;He++){let yt=Pe[He].image[he].image;H?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,yt.width,yt.height,ke,Xe,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,et,yt.width,yt.height,0,ke,Xe,yt.data)}}else{H?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ke,Xe,Te[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,et,ke,Xe,Te[he]);for(let He=0;He<Pe.length;He++){let Fe=Pe[He];H?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,ke,Xe,Fe.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,et,ke,Xe,Fe.image[he])}}}u(S)&&x(n.TEXTURE_CUBE_MAP),_e.__version=te.version,S.onUpdate&&S.onUpdate(S)}N.__version=S.version}function xe(N,S,G,$,te,_e){let ye=r.convert(G.format,G.colorSpace),ie=r.convert(G.type),ae=v(G.internalFormat,ye,ie,G.normalized,G.colorSpace),Se=i.get(S),Be=i.get(G);if(Be.__renderTarget=S,!Se.__hasExternalTextures){let Te=Math.max(1,S.width>>_e),be=Math.max(1,S.height>>_e);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,_e,ae,Te,be,S.depth,0,ye,ie,null):t.texImage2D(te,_e,ae,Te,be,0,ye,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),je(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,te,Be.__webglTexture,0,Je(S)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,te,Be.__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(N,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,N),S.depthBuffer){let $=S.depthTexture,te=$&&$.isDepthTexture?$.type:null,_e=w(S.stencilBuffer,te),ye=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;je(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je(S),_e,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je(S),_e,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,_e,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,N)}else{let $=S.textures;for(let te=0;te<$.length;te++){let _e=$[te],ye=r.convert(_e.format,_e.colorSpace),ie=r.convert(_e.type),ae=v(_e.internalFormat,ye,ie,_e.normalized,_e.colorSpace);je(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Je(S),ae,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Je(S),ae,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ae,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(N,S,G){let $=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",I)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),se(n.TEXTURE_CUBE_MAP,S.depthTexture);let Se=r.convert(S.depthTexture.format),Be=r.convert(S.depthTexture.type),Te;S.depthTexture.format===Un?Te=n.DEPTH_COMPONENT24:S.depthTexture.format===vi&&(Te=n.DEPTH24_STENCIL8);for(let be=0;be<6;be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Te,S.width,S.height,0,Se,Be,null)}}else ee(S.depthTexture,0);let _e=te.__webglTexture,ye=Je(S),ie=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,ae=S.depthTexture.format===vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Un)je(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ie,_e,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,ae,ie,_e,0);else if(S.depthTexture.format===vi)je(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ie,_e,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,ae,ie,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(N){let S=i.get(N),G=N.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==N.depthTexture){let $=N.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=$}if(N.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let $=0;$<6;$++)at(S.__webglFramebuffer[$],N,$);else{let $=N.texture.mipmaps;$&&$.length>0?at(S.__webglFramebuffer[0],N,0):at(S.__webglFramebuffer,N,0)}else if(G){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),Ie(S.__webglDepthbuffer[$],N,!1);else{let te=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,_e)}}else{let $=N.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Ie(S.__webglDepthbuffer,N,!1);else{let te=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,_e)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(N,S,G){let $=i.get(N);S!==void 0&&xe($.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&oe(N)}function pe(N){let S=N.texture,G=i.get(N),$=i.get(S);N.addEventListener("dispose",y);let te=N.textures,_e=N.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,o.memory.textures++),_e){G.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ie]=[];for(let ae=0;ae<S.mipmaps.length;ae++)G.__webglFramebuffer[ie][ae]=n.createFramebuffer()}else G.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)G.__webglFramebuffer[ie]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ie=0,ae=te.length;ie<ae;ie++){let Se=i.get(te[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(N.samples>0&&je(N)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ie=0;ie<te.length;ie++){let ae=te[ie];G.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ie]);let Se=r.convert(ae.format,ae.colorSpace),Be=r.convert(ae.type),Te=v(ae.internalFormat,Se,Be,ae.normalized,ae.colorSpace,N.isXRRenderTarget===!0),be=Je(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Te,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,G.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),se(n.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)xe(G.__webglFramebuffer[ie][ae],N,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else xe(G.__webglFramebuffer[ie],N,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);u(S)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ie=0,ae=te.length;ie<ae;ie++){let Se=te[ie],Be=i.get(Se),Te=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,Be.__webglTexture),se(Te,Se),xe(G.__webglFramebuffer,N,Se,n.COLOR_ATTACHMENT0+ie,Te,0),u(Se)&&x(Te)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ie=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,$.__webglTexture),se(ie,S),S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)xe(G.__webglFramebuffer[ae],N,S,n.COLOR_ATTACHMENT0,ie,ae);else xe(G.__webglFramebuffer,N,S,n.COLOR_ATTACHMENT0,ie,0);u(S)&&x(ie),t.unbindTexture()}N.depthBuffer&&oe(N)}function me(N){let S=N.textures;for(let G=0,$=S.length;G<$;G++){let te=S[G];if(u(te)){let _e=M(N),ye=i.get(te).__webglTexture;t.bindTexture(_e,ye),x(_e),t.unbindTexture()}}}let ve=[],We=[];function Ve(N){if(N.samples>0){if(je(N)===!1){let S=N.textures,G=N.width,$=N.height,te=n.COLOR_BUFFER_BIT,_e=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(N),ie=S.length>1;if(ie)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let ae=N.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Se]);let Be=i.get(S[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,G,$,0,0,G,$,te,n.NEAREST),l===!0&&(ve.length=0,We.length=0,ve.push(n.COLOR_ATTACHMENT0+Se),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(ve.push(_e),We.push(_e),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Se]);let Be=i.get(S[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let S=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Je(N){return Math.min(s.maxSamples,N.samples)}function je(N){let S=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(N){let S=o.render.frame;p.get(N)!==S&&(p.set(N,S),N.update())}function ht(N,S){let G=N.colorSpace,$=N.format,te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==qs&&G!==$n&&(ot.getTransfer(G)===ft?($!==gn||te!==sn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",G)),S}function st(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=R,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=ee,this.setTexture2DArray=J,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=de,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function B_(n,e){function t(i,s=$n){let r,o=ot.getTransfer(s);if(i===sn)return n.UNSIGNED_BYTE;if(i===ra)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ic)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===tc)return n.BYTE;if(i===nc)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===sa)return n.INT;if(i===Rn)return n.UNSIGNED_INT;if(i===mn)return n.FLOAT;if(i===Cn)return n.HALF_FLOAT;if(i===rc)return n.ALPHA;if(i===oc)return n.RGB;if(i===gn)return n.RGBA;if(i===Un)return n.DEPTH_COMPONENT;if(i===vi)return n.DEPTH_STENCIL;if(i===aa)return n.RED;if(i===la)return n.RED_INTEGER;if(i===Si)return n.RG;if(i===ca)return n.RG_INTEGER;if(i===ha)return n.RGBA_INTEGER;if(i===Rr||i===Cr||i===Pr||i===Ir)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ua||i===da||i===fa||i===pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ma||i===ga||i===_a||i===xa||i===ya||i===Dr||i===va)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ma||i===ga)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_a)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===xa)return r.COMPRESSED_R11_EAC;if(i===ya)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Dr)return r.COMPRESSED_RG11_EAC;if(i===va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sa||i===ba||i===Ma||i===Ea||i===wa||i===Ta||i===Aa||i===Ra||i===Ca||i===Pa||i===Ia||i===Da||i===La||i===Na)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ba)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ma)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ea)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ta)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Aa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ra)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ca)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ia)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Da)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Na)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ua||i===Fa||i===Oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ua)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ba||i===ka||i===Lr||i===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ba)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var k_=`
void main() {

  gl_Position = vec4( position, 1.0 );

}`,z_=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ir(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new un({vertexShader:k_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new Bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cc=class extends Mn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,p=null,d=null,h=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new Rc,u={},x=t.getContextAttributes(),M=null,v=null,w=[],T=[],I=new ce,y=null,b=null,C=new Ht;C.viewport=new Tt;let D=new Ht;D.viewport=new Tt;let E=[C,D],R=new Qo,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=w[W];return j===void 0&&(j=new hs,w[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=w[W];return j===void 0&&(j=new hs,w[W]=j),j.getGripSpace()},this.getHand=function(W){let j=w[W];return j===void 0&&(j=new hs,w[W]=j),j.getHandSpace()};function B(W){let j=T.indexOf(W.inputSource);if(j===-1)return;let ue=w[j];ue!==void 0&&(ue.update(W.inputSource,W.frame,c||o),ue.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ee);for(let W=0;W<w.length;W++){let j=T[W];j!==null&&(T[W]=null,w[W].disconnect(j))}P=null,F=null,g.reset();for(let W in u)delete u[W];if(e.setRenderTarget(M),f=null,h=null,d=null,s=null,v=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(I.width,I.height,!1),b!==null){let W=b.camera;W.fov=b.fov,W.zoom=b.zoom,W.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ze=null,xe=null;x.depth&&(xe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=x.stencil?vi:Un,ze=x.stencil?bs:Rn);let Ie={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ie),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new tn(h.textureWidth,h.textureHeight,{format:gn,type:sn,depthTexture:new hi(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new tn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(W){for(let j=0;j<W.removed.length;j++){let ue=W.removed[j],ze=T.indexOf(ue);ze>=0&&(T[ze]=null,w[ze].disconnect(ue))}for(let j=0;j<W.added.length;j++){let ue=W.added[j],ze=T.indexOf(ue);if(ze===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=T.length){T.push(ue),ze=Ie;break}else if(T[Ie]===null){T[Ie]=ue,ze=Ie;break}if(ze===-1)break}let xe=w[ze];xe&&xe.connect(ue)}}let J=new L,X=new L;function K(W,j,ue){J.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(ue.matrixWorld);let ze=J.distanceTo(X),xe=j.projectionMatrix.elements,Ie=ue.projectionMatrix.elements,at=xe[14]/(xe[10]-1),oe=xe[14]/(xe[10]+1),de=(xe[9]+1)/xe[5],pe=(xe[9]-1)/xe[5],me=(xe[8]-1)/xe[0],ve=(Ie[8]+1)/Ie[0],We=at*me,Ve=at*ve,Je=ze/(-me+ve),je=Je*-me;if(j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(je),W.translateZ(Je),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),xe[10]===-1)W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let O=at+Je,ht=oe+Je,st=We-je,N=Ve+(ze-je),S=de*oe/ht*O,G=pe*oe/ht*O;W.projectionMatrix.makePerspective(st,N,S,G,O,ht),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function q(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let j=W.near,ue=W.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),R.near=D.near=C.near=j,R.far=D.far=C.far=ue,(P!==R.near||F!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),P=R.near,F=R.far),R.layers.mask=W.layers.mask|6,C.layers.mask=R.layers.mask&-5,D.layers.mask=R.layers.mask&-3;let ze=W.parent,xe=R.cameras;q(R,ze);for(let Ie=0;Ie<xe.length;Ie++)q(xe[Ie],ze);xe.length===2?K(R,C,D):R.projectionMatrix.copy(C.projectionMatrix),b===null&&W.isPerspectiveCamera&&(b={camera:W,fov:W.fov,zoom:W.zoom}),le(W,R,ze)};function le(W,j,ue){ue===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(ue.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=as*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(W){return u[W]};let ge=null;function se(W,j){if(p=j.getViewerPose(c||o),m=j,p!==null){let ue=p.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ze=!1;ue.length!==R.cameras.length&&(R.cameras.length=0,ze=!0);for(let oe=0;oe<ue.length;oe++){let de=ue[oe],pe=null;if(f!==null)pe=f.getViewport(de);else{let ve=d.getViewSubImage(h,de);pe=ve.viewport,oe===0&&(e.setRenderTargetTextures(v,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(v))}let me=E[oe];me===void 0&&(me=new Ht,me.layers.enable(oe),me.viewport=new Tt,E[oe]=me),me.matrix.fromArray(de.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(de.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(pe.x,pe.y,pe.width,pe.height),oe===0&&(R.matrix.copy(me.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ze===!0&&R.cameras.push(me)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let oe=d.getDepthInformation(ue[0]);oe&&oe.isValid&&oe.texture&&g.init(oe,s.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let oe=0;oe<ue.length;oe++){let de=ue[oe].camera;if(de){let pe=u[de];pe||(pe=new ir,u[de]=pe);let me=d.getCameraImage(de);pe.sourceTexture=me}}}}for(let ue=0;ue<w.length;ue++){let ze=T[ue],xe=w[ue];ze!==null&&xe!==void 0&&xe.update(ze,j,c||o)}ge&&ge(W,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),m=null}let fe=new Gu;fe.setAnimationLoop(se),this.setAnimationLoop=function(W){ge=W},this.dispose=function(){}}},H_=new pt,Ju=new $e;Ju.set(-1,0,0,0,1,0,0,0,1);function V_(n,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,uc(n)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,x,M,v){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(g,u):u.isMeshLambertMaterial?(r(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(g,u),d(g,u)):u.isMeshPhongMaterial?(r(g,u),p(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(g,u),h(g,u),u.isMeshPhysicalMaterial&&f(g,u,v)):u.isMeshMatcapMaterial?(r(g,u),m(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),_(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,x,M):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Wt&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Wt&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let x=e.get(u),M=x.envMap,v=x.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ju),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,x,M){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*x,g.scale.value=M*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function p(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function f(g,u,x){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Wt&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.retroreflectivity>0&&(g.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,u){u.matcap&&(g.matcap.value=u.matcap)}function _(g,u){let x=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function G_(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,w){let T=w.program;i.uniformBlockBinding(v,T)}function c(v,w){let T=s[v.id];T===void 0&&(g(v),T=p(v),s[v.id]=T,v.addEventListener("dispose",x));let I=w.program;i.updateUBOMapping(v,I);let y=e.render.frame;r[v.id]!==y&&(h(v),r[v.id]=y)}function p(v){let w=d();v.__bindingPointIndex=w;let T=n.createBuffer(),I=v.__size,y=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,I,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,T),T}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let w=s[v.id],T=v.uniforms,I=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let y=0,b=T.length;y<b;y++){let C=T[y];if(Array.isArray(C))for(let D=0,E=C.length;D<E;D++)f(C[D],y,D,I);else f(C,y,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,w,T,I){if(_(v,w,T,I)===!0){let y=v.__offset,b=v.value;if(Array.isArray(b)){let C=0;for(let D=0;D<b.length;D++){let E=b[D],R=u(E);m(E,v.__data,C),typeof E!="number"&&typeof E!="boolean"&&!E.isMatrix3&&!ArrayBuffer.isView(E)&&(C+=R.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(b,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,v.__data)}}function m(v,w,T){typeof v=="number"||typeof v=="boolean"?w[0]=v:v.isMatrix3?(w[0]=v.elements[0],w[1]=v.elements[1],w[2]=v.elements[2],w[3]=0,w[4]=v.elements[3],w[5]=v.elements[4],w[6]=v.elements[5],w[7]=0,w[8]=v.elements[6],w[9]=v.elements[7],w[10]=v.elements[8],w[11]=0):ArrayBuffer.isView(v)?w.set(new v.constructor(v.buffer,v.byteOffset,w.length)):v.toArray(w,T)}function _(v,w,T,I){let y=v.value,b=w+"_"+T;if(I[b]===void 0)return typeof y=="number"||typeof y=="boolean"?I[b]=y:ArrayBuffer.isView(y)?I[b]=y.slice():I[b]=y.clone(),!0;{let C=I[b];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return I[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(C.equals(y)===!1)return C.copy(y),!0}}return!1}function g(v){let w=v.uniforms,T=0,I=16;for(let b=0,C=w.length;b<C;b++){let D=Array.isArray(w[b])?w[b]:[w[b]];for(let E=0,R=D.length;E<R;E++){let P=D[E],F=Array.isArray(P.value)?P.value:[P.value];for(let B=0,V=F.length;B<V;B++){let ee=F[B],J=u(ee),X=T%I,K=X%J.boundary,q=X+K;T+=K,q!==0&&I-q<J.storage&&(T+=I-q),P.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=J.storage}}}let y=T%I;return y>0&&(T+=I-y),v.__size=T,v.__cache={},this}function u(v){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",v),w}function x(v){let w=v.target;w.removeEventListener("dispose",x);let T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function M(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:M}}var W_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function X_(){return zn===null&&(zn=new js(W_,16,16,Si,Cn),zn.name="DFG_LUT",zn.minFilter=Vt,zn.magFilter=Vt,zn.wrapS=Ln,zn.wrapT=Ln,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var qa=class{constructor(e={}){let{canvas:t=hu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let _=f,g=new Set([ha,ca,la]),u=new Set([sn,Rn,Ss,bs,ra,oa]),x=new Uint32Array(4),M=new Int32Array(4),v=new L,w=null,T=null,I=[],y=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,E=null,R=null,P=null,F=null;this._outputColorSpace=zt;let B=0,V=0,ee=null,J=-1,X=null,K=new Tt,q=new Tt,le=null,ge=new Ke(0),se=0,fe=t.width,W=t.height,j=1,ue=null,ze=null,xe=new Tt(0,0,fe,W),Ie=new Tt(0,0,fe,W),at=!1,oe=new us,de=!1,pe=!1,me=new pt,ve=new L,We=new Tt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function je(){return ee===null?j:1}let O=i;function ht(A,z){return t.getContext(A,z)}let st,N,S,G,$,te,_e,ye,ie,ae,Se,Be,Te,be,ke,Xe,et,H,Me,re,Ee,Pe,he;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",xn,!1),O===null){let z="webgl2";if(O=ht(z,A),O===null)throw ht(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(A){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),qe("WebGLRenderer: "+A.message),A}function He(){st=new j0(O),st.init(),Ee=new B_(O,st),N=new V0(O,st,e,Ee),S=new F_(O,st),N.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),R=O.createFramebuffer(),P=O.createFramebuffer(),F=O.createFramebuffer(),G=new tg(O),$=new b_,te=new O_(O,st,S,$,N,Ee,G),_e=new $0(C),ye=new ip(O),Pe=new z0(O,ye),ie=new Q0(O,ye,G,Pe),ae=new ig(O,ie,ye,Pe,G),H=new ng(O,N,te),ke=new G0($),Se=new S_(C,_e,st,N,Pe,ke),Be=new V_(C,$),Te=new E_,be=new P_(st),et=new k0(C,_e,S,ae,m,l),Xe=new U_(C,ae,N),he=new G_(O,G,N,S),Me=new H0(O,st,G),re=new eg(O,st,G),G.programs=Se.programs,C.capabilities=N,C.extensions=st,C.properties=$,C.renderLists=Te,C.shadowMap=Xe,C.state=S,C.info=G}_!==sn&&(b=new rg(_,t.width,t.height,a,s,r));let Fe=new Cc(C,O);this.xr=Fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=st.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=st.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(fe,W,!1))},this.getSize=function(A){return A.set(fe,W)},this.setSize=function(A,z,Q=!0){if(Fe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=A,W=z,t.width=Math.floor(A*j),t.height=Math.floor(z*j),Q===!0&&(t.style.width=A+"px",t.style.height=z+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(fe*j,W*j).floor()},this.setDrawingBufferSize=function(A,z,Q){fe=A,W=z,j=Q,t.width=Math.floor(A*Q),t.height=Math.floor(z*Q),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(_===sn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(xe)},this.setViewport=function(A,z,Q,Y){A.isVector4?xe.set(A.x,A.y,A.z,A.w):xe.set(A,z,Q,Y),S.viewport(K.copy(xe).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(Ie)},this.setScissor=function(A,z,Q,Y){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,z,Q,Y),S.scissor(q.copy(Ie).multiplyScalar(j).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(A){S.setScissorTest(at=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){ze=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,Q=!0){let Y=0;if(A){let Z=!1;if(ee!==null){let Ce=ee.texture.format;Z=g.has(Ce)}if(Z){let Ce=ee.texture.type,Le=u.has(Ce),Re=et.getClearColor(),Ne=et.getClearAlpha(),Oe=Re.r,nt=Re.g,rt=Re.b;Le?(x[0]=Oe,x[1]=nt,x[2]=rt,x[3]=Ne,O.clearBufferuiv(O.COLOR,0,x)):(M[0]=Oe,M[1]=nt,M[2]=rt,M[3]=Ne,O.clearBufferiv(O.COLOR,0,M))}else Y|=O.COLOR_BUFFER_BIT}z&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),E=A},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),et.dispose(),Te.dispose(),be.dispose(),$.dispose(),_e.dispose(),ae.dispose(),Pe.dispose(),he.dispose(),Se.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",kc),Fe.removeEventListener("sessionend",zc),bi.stop()};function yt(A){A.preventDefault(),lc("WebGLRenderer: Context Lost."),D=!0}function ut(){lc("WebGLRenderer: Context Restored."),D=!1;let A=G.autoReset,z=Xe.enabled,Q=Xe.autoUpdate,Y=Xe.needsUpdate,Z=Xe.type;He(),G.autoReset=A,Xe.enabled=z,Xe.autoUpdate=Q,Xe.needsUpdate=Y,Xe.type=Z}function xn(A){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Pn(A){let z=A.target;z.removeEventListener("dispose",Pn),_d(z)}function _d(A){xd(A),$.remove(A)}function xd(A){let z=$.get(A).programs;z!==void 0&&(z.forEach(function(Q){Se.releaseProgram(Q)}),A.isShaderMaterial&&Se.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Q,Y,Z,Ce){z===null&&(z=Ve);let Le=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Re=Sd(A,z,Q,Y,Z);S.setMaterial(Y,Le);let Ne=Q.index,Oe=1;if(Y.wireframe===!0){if(Ne=ie.getWireframeAttribute(Q),Ne===void 0)return;Oe=2}let nt=Q.drawRange,rt=Q.attributes.position,Ue=nt.start*Oe,dt=(nt.start+nt.count)*Oe;Ce!==null&&(Ue=Math.max(Ue,Ce.start*Oe),dt=Math.min(dt,(Ce.start+Ce.count)*Oe)),Ne!==null?(Ue=Math.max(Ue,0),dt=Math.min(dt,Ne.count)):rt!=null&&(Ue=Math.max(Ue,0),dt=Math.min(dt,rt.count));let Pt=dt-Ue;if(Pt<0||Pt===1/0)return;Pe.setup(Z,Y,Re,Q,Ne);let Et,xt=Me;if(Ne!==null&&(Et=ye.get(Ne),xt=re,xt.setIndex(Et)),Z.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*je()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(Z.isLine){let Xt=Y.linewidth;Xt===void 0&&(Xt=1),S.setLineWidth(Xt*je()),Z.isLineSegments?xt.setMode(O.LINES):Z.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else Z.isPoints?xt.setMode(O.POINTS):Z.isSprite&&xt.setMode(O.TRIANGLES);if(Z.isBatchedMesh)if(st.get("WEBGL_multi_draw"))xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Xt=Z._multiDrawStarts,De=Z._multiDrawCounts,Kt=Z._multiDrawCount,lt=Ne?ye.get(Ne).bytesPerElement:1,fn=$.get(Y).currentProgram.getUniforms();for(let In=0;In<Kt;In++)fn.setValue(O,"_gl_DrawID",In),xt.render(Xt[In]/lt,De[In])}else if(Z.isInstancedMesh)xt.renderInstances(Ue,Pt,Z.count);else if(Q.isInstancedBufferGeometry){let Xt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,De=Math.min(Q.instanceCount,Xt);xt.renderInstances(Ue,Pt,De)}else xt.render(Ue,Pt)};function Bc(A,z,Q,Y){E!==null&&A.isNodeMaterial&&E.setObject(Y,A),de===!0&&ke.setState(A,Q,!1),A.transparent===!0&&A.side===At&&A.forceSinglePass===!1?(A.side=Wt,A.needsUpdate=!0,Vr(A,z,Y),A.side=_i,A.needsUpdate=!0,Vr(A,z,Y),A.side=At):Vr(A,z,Y)}this.compile=function(A,z,Q=null){Q===null&&(Q=A),E!==null&&E.renderStart(A,z,Q),T=be.get(Q),T.init(z),y.push(T),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),A!==Q&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),E!==null&&E.updateLights(T.state.lightsArray),pe=this.localClippingEnabled,de=ke.init(this.clippingPlanes,pe),de===!0&&ke.setGlobalState(this.clippingPlanes,z),E!==null&&Xe.render(T.state.shadowsArray,Q,z);let Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ce=Z.material;if(Ce)if(Array.isArray(Ce))for(let Le=0;Le<Ce.length;Le++){let Re=Ce[Le];Bc(Re,Q,z,Z),Y.add(Re)}else Bc(Ce,Q,z,Z),Y.add(Ce)}),T=y.pop(),E!==null&&E.renderEnd(),Y},this.compileAsync=function(A,z,Q=null){let Y=this.compile(A,z,Q);return new Promise(Z=>{function Ce(){if(Y.forEach(function(Le){let Ne=$.get(Le).currentProgram;(Ne===void 0||Ne.isReady())&&Y.delete(Le)}),Y.size===0){Z(A);return}setTimeout(Ce,10)}st.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let nl=null;function yd(A){nl&&nl(A)}function kc(){bi.stop()}function zc(){bi.start()}let bi=new Gu;bi.setAnimationLoop(yd),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){nl=A,Fe.setAnimationLoop(A),A===null?bi.stop():bi.start()},Fe.addEventListener("sessionstart",kc),Fe.addEventListener("sessionend",zc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;E!==null&&E.renderStart(A,z);let Q=Fe.enabled===!0&&Fe.isPresenting===!0,Y=b!==null&&(ee===null||Q)&&b.begin(C,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(z),z=Fe.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,z,ee),T=be.get(A,y.length),T.init(z),T.state.textureUnits=te.getTextureUnits(),y.push(T),me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),oe.setFromProjectionMatrix(me,bn,z.reversedDepth),pe=this.localClippingEnabled,de=ke.init(this.clippingPlanes,pe),w=Te.get(A,I.length),w.init(),I.push(w),Fe.enabled===!0&&Fe.isPresenting===!0){let Le=C.xr.getDepthSensingMesh();Le!==null&&il(Le,z,-1/0,C.sortObjects)}il(A,z,0,C.sortObjects),w.finish(),E!==null&&E.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(ue,ze),Je=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Je&&et.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),de===!0&&ke.beginShadows();let Z=T.state.shadowsArray;if(Xe.render(Z,A,z),de===!0&&ke.endShadows(),(Y&&b.hasRenderPass())===!1){let Le=w.opaque,Re=w.transmissive;if(T.setupLights(),z.isArrayCamera){let Ne=z.cameras;if(Re.length>0)for(let Oe=0,nt=Ne.length;Oe<nt;Oe++){let rt=Ne[Oe];Vc(Le,Re,A,rt)}Je&&et.render(A);for(let Oe=0,nt=Ne.length;Oe<nt;Oe++){let rt=Ne[Oe];Hc(w,A,rt,rt.viewport)}}else Re.length>0&&Vc(Le,Re,A,z),Je&&et.render(A),Hc(w,A,z)}ee!==null&&V===0&&(te.updateMultisampleRenderTarget(ee),te.updateRenderTargetMipmap(ee)),Y&&b.end(C),A.isScene===!0&&A.onAfterRender(C,A,z),Pe.resetDefaultState(),J=-1,X=null,y.pop(),y.length>0?(T=y[y.length-1],te.setTextureUnits(T.state.textureUnits),de===!0&&ke.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,I.pop(),I.length>0?w=I[I.length-1]:w=null,E!==null&&E.renderEnd()};function il(A,z,Q,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)T.pushLightProbeGrid(A);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(oe)){Y&&We.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);let Le=ae.update(A),Re=A.material;Re.visible&&w.push(A,Le,Re,Q,We.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(oe))){let Le=ae.update(A),Re=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),We.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),We.copy(Le.boundingSphere.center)),We.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Re)){let Ne=Le.groups;for(let Oe=0,nt=Ne.length;Oe<nt;Oe++){let rt=Ne[Oe],Ue=Re[rt.materialIndex];Ue&&Ue.visible&&w.push(A,Le,Ue,Q,We.z,rt,z)}}else Re.visible&&w.push(A,Le,Re,Q,We.z,null,z)}}let Ce=A.children;for(let Le=0,Re=Ce.length;Le<Re;Le++)il(Ce[Le],z,Q,Y)}function Hc(A,z,Q,Y){let{opaque:Z,transmissive:Ce,transparent:Le}=A;T.setupLightsView(Q),de===!0&&ke.setGlobalState(C.clippingPlanes,Q),Y&&S.viewport(K.copy(Y)),Z.length>0&&Hr(Z,z,Q),Ce.length>0&&Hr(Ce,z,Q),Le.length>0&&Hr(Le,z,Q),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Vc(A,z,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){let Ue=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new tn(1,1,{generateMipmaps:!0,type:Ue?Cn:sn,minFilter:yi,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Ce=T.state.transmissionRenderTarget[Y.id],Le=Y.viewport||K;Ce.setSize(Le.z*C.transmissionResolutionScale,Le.w*C.transmissionResolutionScale);let Re=C.getRenderTarget(),Ne=C.getActiveCubeFace(),Oe=C.getActiveMipmapLevel();C.setRenderTarget(Ce),C.getClearColor(ge),se=C.getClearAlpha(),se<1&&C.setClearColor(16777215,.5),C.clear(),Je&&et.render(Q);let nt=C.toneMapping;C.toneMapping=An;let rt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),de===!0&&ke.setGlobalState(C.clippingPlanes,Y),Hr(A,Q,Y),te.updateMultisampleRenderTarget(Ce),te.updateRenderTargetMipmap(Ce),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let dt=0,Pt=z.length;dt<Pt;dt++){let Et=z[dt],{object:xt,geometry:Xt,material:De,group:Kt}=Et;if(De.side===At&&xt.layers.test(Y.layers)){let lt=De.side;De.side=Wt,De.needsUpdate=!0,Gc(xt,Q,Y,Xt,De,Kt),De.side=lt,De.needsUpdate=!0,Ue=!0}}Ue===!0&&(te.updateMultisampleRenderTarget(Ce),te.updateRenderTargetMipmap(Ce))}C.setRenderTarget(Re,Ne,Oe),C.setClearColor(ge,se),rt!==void 0&&(Y.viewport=rt),C.toneMapping=nt}function Hr(A,z,Q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,Ce=A.length;Z<Ce;Z++){let Le=A[Z],{object:Re,geometry:Ne,group:Oe}=Le,nt=Le.material;nt.allowOverride===!0&&Y!==null&&(nt=Y),Re.layers.test(Q.layers)&&Gc(Re,z,Q,Ne,nt,Oe)}}function Gc(A,z,Q,Y,Z,Ce){E!==null&&Z.isNodeMaterial&&E.setObject(A,Z),A.onBeforeRender(C,z,Q,Y,Z,Ce),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(C,z,Q,Y,A,Ce),Z.transparent===!0&&Z.side===At&&Z.forceSinglePass===!1?(Z.side=Wt,Z.needsUpdate=!0,C.renderBufferDirect(Q,z,Y,Z,A,Ce),Z.side=_i,Z.needsUpdate=!0,C.renderBufferDirect(Q,z,Y,Z,A,Ce),Z.side=At):C.renderBufferDirect(Q,z,Y,Z,A,Ce),A.onAfterRender(C,z,Q,Y,Z,Ce)}function Vr(A,z,Q){z.isScene!==!0&&(z=Ve);let Y=$.get(A),Z=T.state.lights,Ce=T.state.shadowsArray,Le=Z.state.version,Re=Se.getParameters(A,Z.state,Ce,z,Q,T.state.lightProbeGridArray),Ne=Se.getProgramCacheKey(Re),Oe=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let nt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=_e.get(A.envMap||Y.environment,nt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",Pn),Oe=new Map,Y.programs=Oe);let rt=Oe.get(Ne);if(rt!==void 0){if(Y.currentProgram===rt&&Y.lightsStateVersion===Le)return Xc(A,Re),rt}else Re.uniforms=Se.getUniforms(A),E!==null&&A.isNodeMaterial&&E.build(A,Q,Re),A.onBeforeCompile(Re,C),rt=Se.acquireProgram(Re,Ne),Oe.set(Ne,rt),Y.uniforms=Re.uniforms;let Ue=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=ke.uniform),Xc(A,Re),Y.needsLights=Md(A),Y.lightsStateVersion=Le,Y.needsLights&&(Ue.ambientLightColor.value=Z.state.ambient,Ue.lightProbe.value=Z.state.probe,Ue.sunLights.value=Z.state.sun,Ue.sunLightShadows.value=Z.state.sunShadow,Ue.directionalLights.value=Z.state.directional,Ue.directionalLightShadows.value=Z.state.directionalShadow,Ue.spotLights.value=Z.state.spot,Ue.spotLightShadows.value=Z.state.spotShadow,Ue.rectAreaLights.value=Z.state.rectArea,Ue.ltc_1.value=Z.state.rectAreaLTC1,Ue.ltc_2.value=Z.state.rectAreaLTC2,Ue.pointLights.value=Z.state.point,Ue.pointLightShadows.value=Z.state.pointShadow,Ue.hemisphereLights.value=Z.state.hemi,Ue.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ue.sunShadowCascade.value=Z.state.sunShadowCascade,Ue.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Z.state.spotLightMatrix,Ue.spotLightMap.value=Z.state.spotLightMap,Ue.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=T.state.lightProbeGridArray.length>0,Y.currentProgram=rt,Y.uniformsList=null,rt}function Wc(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Ts.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Xc(A,z){let Q=$.get(A);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function vd(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let Q=0,Y=A.length;Q<Y;Q++){let Z=A[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function Sd(A,z,Q,Y,Z){z.isScene!==!0&&(z=Ve),te.resetTextureUnits();let Ce=z.fog,Le=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Re=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ot.workingColorSpace,Ne=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Oe=_e.get(Y.envMap||Le,Ne),nt=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,rt=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!Q.morphAttributes.position,dt=!!Q.morphAttributes.normal,Pt=!!Q.morphAttributes.color,Et=An;Y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Et=C.toneMapping);let xt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Xt=xt!==void 0?xt.length:0,De=$.get(Y),Kt=T.state.lights;if(de===!0&&(pe===!0||A!==X)){let vt=A===X&&Y.id===J;ke.setState(Y,A,vt)}let lt=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Kt.state.version||De.outputColorSpace!==Re||Z.isBatchedMesh&&De.batching===!1||!Z.isBatchedMesh&&De.batching===!0||Z.isBatchedMesh&&De.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&De.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&De.instancing===!1||!Z.isInstancedMesh&&De.instancing===!0||Z.isSkinnedMesh&&De.skinning===!1||!Z.isSkinnedMesh&&De.skinning===!0||Z.isInstancedMesh&&De.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&De.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&De.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&De.instancingMorph===!1&&Z.morphTexture!==null||De.envMap!==Oe||Y.fog===!0&&De.fog!==Ce||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ke.numPlanes||De.numIntersection!==ke.numIntersection)||De.vertexAlphas!==nt||De.vertexTangents!==rt||De.morphTargets!==Ue||De.morphNormals!==dt||De.morphColors!==Pt||De.toneMapping!==Et||De.morphTargetsCount!==Xt||!!De.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,De.__version=Y.version);let fn=De.currentProgram;lt===!0&&(fn=Vr(Y,z,Z),E&&Y.isNodeMaterial&&E.onUpdateProgram(Y,fn,De));let In=!1,Qn=!1,zi=!1,gt=fn.getUniforms(),Ct=De.uniforms;if(S.useProgram(fn.program)&&(In=!0,Qn=!0,zi=!0),Y.id!==J&&(J=Y.id,Qn=!0),De.needsLights){let vt=vd(T.state.lightProbeGridArray,Z);De.lightProbeGrid!==vt&&(De.lightProbeGrid=vt,Qn=!0)}if(In||X!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),gt.setValue(O,"projectionMatrix",A.projectionMatrix),gt.setValue(O,"viewMatrix",A.matrixWorldInverse);let ti=gt.map.cameraPosition;ti!==void 0&&ti.setValue(O,ve.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&gt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&gt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,Qn=!0,zi=!0)}if(De.needsLights&&(Kt.state.sunShadowMap.length>0&&gt.setValue(O,"sunShadowMap",Kt.state.sunShadowMap,te),Kt.state.directionalShadowMap.length>0&&gt.setValue(O,"directionalShadowMap",Kt.state.directionalShadowMap,te),Kt.state.spotShadowMap.length>0&&gt.setValue(O,"spotShadowMap",Kt.state.spotShadowMap,te),Kt.state.pointShadowMap.length>0&&gt.setValue(O,"pointShadowMap",Kt.state.pointShadowMap,te)),Z.isSkinnedMesh){gt.setOptional(O,Z,"bindMatrix"),gt.setOptional(O,Z,"bindMatrixInverse");let vt=Z.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),gt.setValue(O,"boneTexture",vt.boneTexture,te))}Z.isBatchedMesh&&(gt.setOptional(O,Z,"batchingTexture"),gt.setValue(O,"batchingTexture",Z._matricesTexture,te),gt.setOptional(O,Z,"batchingIdTexture"),gt.setValue(O,"batchingIdTexture",Z._indirectTexture,te),gt.setOptional(O,Z,"batchingColorTexture"),Z._colorsTexture!==null&&gt.setValue(O,"batchingColorTexture",Z._colorsTexture,te));let ei=Q.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&H.update(Z,Q,fn),(Qn||De.receiveShadow!==Z.receiveShadow)&&(De.receiveShadow=Z.receiveShadow,gt.setValue(O,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(Ct.envMapIntensity.value=z.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=X_()),Qn){if(gt.setValue(O,"toneMappingExposure",C.toneMappingExposure),De.needsLights&&bd(Ct,zi),Ce&&Y.fog===!0&&Be.refreshFogUniforms(Ct,Ce),Be.refreshMaterialUniforms(Ct,Y,j,W,T.state.transmissionRenderTarget[A.id]),De.needsLights&&De.lightProbeGrid){let vt=De.lightProbeGrid;Ct.probesSH.value=vt.texture,Ct.probesMin.value.copy(vt.boundingBox.min),Ct.probesMax.value.copy(vt.boundingBox.max),Ct.probesResolution.value.copy(vt.resolution)}Ts.upload(O,Wc(De),Ct,te)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ts.upload(O,Wc(De),Ct,te),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&gt.setValue(O,"center",Z.center),gt.setValue(O,"modelViewMatrix",Z.modelViewMatrix),gt.setValue(O,"normalMatrix",Z.normalMatrix),gt.setValue(O,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let vt=Y.uniformsGroups;for(let ti=0,Hi=vt.length;ti<Hi;ti++){let Yc=vt[ti];he.update(Yc,fn),he.bind(Yc,fn)}}return fn}function bd(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Md(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,z,Q){let Y=$.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=z,$.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let Q=$.get(A);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Q=0){ee=A,B=z,V=Q;let Y=null,Z=!1,Ce=!1;if(A){let Re=$.get(A);if(Re.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(O.FRAMEBUFFER,Re.__webglFramebuffer),K.copy(A.viewport),q.copy(A.scissor),le=A.scissorTest,S.viewport(K),S.scissor(q),S.setScissorTest(le),J=-1;return}else if(Re.__webglFramebuffer===void 0)te.setupRenderTarget(A);else if(Re.__hasExternalTextures)te.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let nt=A.depthTexture;if(Re.__boundDepthTexture!==nt){if(nt!==null&&$.has(nt)&&(A.width!==nt.image.width||A.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(A)}}let Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ce=!0);let Oe=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?Y=Oe[z][Q]:Y=Oe[z],Z=!0):A.samples>0&&te.useMultisampledRTT(A)===!1?Y=$.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?Y=Oe[Q]:Y=Oe,K.copy(A.viewport),q.copy(A.scissor),le=A.scissorTest}else K.copy(xe).multiplyScalar(j).floor(),q.copy(Ie).multiplyScalar(j).floor(),le=at;if(Q!==0&&(Y=R),S.bindFramebuffer(O.FRAMEBUFFER,Y)&&S.drawBuffers(A,Y),S.viewport(K),S.scissor(q),S.setScissorTest(le),Z){let Re=$.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,Q)}else if(Ce){let Re=z;for(let Ne=0;Ne<A.textures.length;Ne++){let Oe=$.get(A.textures[Ne]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,Q,Re)}}else if(A!==null&&Q!==0){let Re=$.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Re.__webglTexture,Q)}J=-1};function qc(A){let z=$.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=N.textureFormatReadable(A.format),z.__typeReadable=N.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,Q,Y,Z,Ce,Le,Re=0){if(!(A&&A.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){S.bindFramebuffer(O.FRAMEBUFFER,Ne);try{let Oe=A.textures[Re],nt=Oe.format,rt=Oe.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Re);let Ue=qc(Oe);if(Ue.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&Q>=0&&Q<=A.height-Z&&O.readPixels(z,Q,Y,Z,Ee.convert(nt),Ee.convert(rt),Ce)}finally{let Oe=ee!==null?$.get(ee).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,z,Q,Y,Z,Ce,Le,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(z>=0&&z<=A.width-Y&&Q>=0&&Q<=A.height-Z){S.bindFramebuffer(O.FRAMEBUFFER,Ne);let Oe=A.textures[Re],nt=Oe.format,rt=Oe.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Re);let Ue=qc(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.bufferData(O.PIXEL_PACK_BUFFER,Ce.byteLength,O.STREAM_READ),O.readPixels(z,Q,Y,Z,Ee.convert(nt),Ee.convert(rt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Pt=ee!==null?$.get(ee).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Pt);let Et=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await du(O,Et,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,dt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ce),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(dt),O.deleteSync(Et),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(A.image.width*Y),Ce=Math.floor(A.image.height*Y),Le=z!==null?z.x:0,Re=z!==null?z.y:0;te.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Le,Re,Z,Ce),S.unbindTexture()},this.copyTextureToTexture=function(A,z,Q=null,Y=null,Z=0,Ce=0){let Le,Re,Ne,Oe,nt,rt,Ue,dt,Pt,Et=A.isCompressedTexture?A.mipmaps[Ce]:A.image;if(Q!==null)Le=Q.max.x-Q.min.x,Re=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,Oe=Q.min.x,nt=Q.min.y,rt=Q.isBox3?Q.min.z:0;else{let Ct=Math.pow(2,-Z);Le=Math.floor(Et.width*Ct),Re=Math.floor(Et.height*Ct),A.isDataArrayTexture?Ne=Et.depth:A.isData3DTexture?Ne=Math.floor(Et.depth*Ct):Ne=1,Oe=0,nt=0,rt=0}Y!==null?(Ue=Y.x,dt=Y.y,Pt=Y.z):(Ue=0,dt=0,Pt=0);let xt=Ee.convert(z.format),Xt=Ee.convert(z.type),De;z.isData3DTexture?(te.setTexture3D(z,0),De=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(te.setTexture2DArray(z,0),De=O.TEXTURE_2D_ARRAY):(te.setTexture2D(z,0),De=O.TEXTURE_2D),S.activeTexture(O.TEXTURE0),S.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),S.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),S.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let Kt=S.getParameter(O.UNPACK_ROW_LENGTH),lt=S.getParameter(O.UNPACK_IMAGE_HEIGHT),fn=S.getParameter(O.UNPACK_SKIP_PIXELS),In=S.getParameter(O.UNPACK_SKIP_ROWS),Qn=S.getParameter(O.UNPACK_SKIP_IMAGES);S.pixelStorei(O.UNPACK_ROW_LENGTH,Et.width),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et.height),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Oe),S.pixelStorei(O.UNPACK_SKIP_ROWS,nt),S.pixelStorei(O.UNPACK_SKIP_IMAGES,rt);let zi=A.isDataArrayTexture||A.isData3DTexture,gt=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let Ct=$.get(A),ei=$.get(z),vt=$.get(Ct.__renderTarget),ti=$.get(ei.__renderTarget);S.bindFramebuffer(O.READ_FRAMEBUFFER,vt.__webglFramebuffer),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let Hi=0;Hi<Ne;Hi++)zi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(A).__webglTexture,Z,rt+Hi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(z).__webglTexture,Ce,Pt+Hi)),O.blitFramebuffer(Oe,nt,Le,Re,Ue,dt,Le,Re,O.DEPTH_BUFFER_BIT,O.NEAREST);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||$.has(A)){let Ct=$.get(A),ei=$.get(z);S.bindFramebuffer(O.READ_FRAMEBUFFER,P),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let vt=0;vt<Ne;vt++)zi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.__webglTexture,Z,rt+vt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ct.__webglTexture,Z),gt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ei.__webglTexture,Ce,Pt+vt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ei.__webglTexture,Ce),Z!==0?O.blitFramebuffer(Oe,nt,Le,Re,Ue,dt,Le,Re,O.COLOR_BUFFER_BIT,O.NEAREST):gt?O.copyTexSubImage3D(De,Ce,Ue,dt,Pt+vt,Oe,nt,Le,Re):O.copyTexSubImage2D(De,Ce,Ue,dt,Oe,nt,Le,Re);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else gt?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(De,Ce,Ue,dt,Pt,Le,Re,Ne,xt,Xt,Et.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(De,Ce,Ue,dt,Pt,Le,Re,Ne,xt,Et.data):O.texSubImage3D(De,Ce,Ue,dt,Pt,Le,Re,Ne,xt,Xt,Et):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ce,Ue,dt,Le,Re,xt,Xt,Et.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ce,Ue,dt,Et.width,Et.height,xt,Et.data):O.texSubImage2D(O.TEXTURE_2D,Ce,Ue,dt,Le,Re,xt,Xt,Et);S.pixelStorei(O.UNPACK_ROW_LENGTH,Kt),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,lt),S.pixelStorei(O.UNPACK_SKIP_PIXELS,fn),S.pixelStorei(O.UNPACK_SKIP_ROWS,In),S.pixelStorei(O.UNPACK_SKIP_IMAGES,Qn),Ce===0&&z.generateMipmaps&&O.generateMipmap(De),S.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&te.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?te.setTextureCube(A,0):A.isData3DTexture?te.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?te.setTexture2DArray(A,0):te.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){B=0,V=0,ee=null,S.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Ja=class extends On{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new nn;e.deleteAttribute("uv");let t=new Tn({side:Wt}),i=new Tn,s=new Sr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new we(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new er(e,i,6),a=new Lt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new we(e,Cs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new we(e,Cs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let p=new we(e,Cs(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let d=new we(e,Cs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new we(e,Cs(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new we(e,Cs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Cs(n){return new Pi({color:0,emissive:16777215,emissiveIntensity:n})}var Ku={type:"change"},Ic={type:"start"},ju={type:"end"},Ka=new li,$u=new ln,q_=Math.cos(70*Ms.DEG2RAD),Ft=new L,rn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pc=1e-6,$a=class extends Er{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:gi.ROTATE,TWO:gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new cn,this._lastTargetPosition=new L,this._quat=new cn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xs,this._sphericalDelta=new xs,this._scale=1,this._panOffset=new L,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new L,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z_.bind(this),this._onPointerDown=Y_.bind(this),this._onPointerUp=J_.bind(this),this._onContextMenu=n1.bind(this),this._onMouseWheel=j_.bind(this),this._onKeyDown=Q_.bind(this),this._onTouchStart=e1.bind(this),this._onTouchMove=t1.bind(this),this._onMouseDown=K_.bind(this),this._onMouseMove=$_.bind(this),this._interceptControlDown=i1.bind(this),this._interceptControlUp=s1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=mt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ku),this.update(),this.state=mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ft.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ka.origin.copy(this.object.position),Ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ka.direction))<q_?this.object.lookAt(this.target):($u.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ka.intersectPlane($u,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pc||this._lastTargetPosition.distanceToSquared(this.target)>Pc?(this.dispatchEvent(Ku),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rn/60*this.autoRotateSpeed*e:rn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Y_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Z_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function J_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ju),this.state=mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function K_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case mi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case mi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Ic)}function $_(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function j_(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(Ic),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ju))}function Q_(n){this.enabled!==!1&&this._handleKeyDown(n)}function e1(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Ic)}function t1(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function n1(n){this.enabled!==!1&&n.preventDefault()}function i1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function s1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Br=new L;function _n(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Br.copy(e),Br[i]=0,Br.normalize();let c=.5*o/(o+a),p=1-Br.angleTo(n)/l;return Math.sign(Br[t])===1?p*c:a/(o+a)+c+c*(1-p)}var Jt=class n extends nn{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new L,c=new L,p=new L(e,t,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,_=new L,g=.5/o;for(let u=0,x=0;u<d.length;u+=3,x+=2)switch(l.fromArray(d,u),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[u+0]=p.x*Math.sign(l.x)+c.x*r,d[u+1]=p.y*Math.sign(l.y)+c.y*r,d[u+2]=p.z*Math.sign(l.z)+c.z*r,h[u+0]=c.x,h[u+1]=c.y,h[u+2]=c.z,Math.floor(u/m)){case 0:_.set(1,0,0),f[x+0]=_n(_,c,"z","y",r,i),f[x+1]=1-_n(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[x+0]=1-_n(_,c,"z","y",r,i),f[x+1]=1-_n(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[x+0]=1-_n(_,c,"x","z",r,e),f[x+1]=_n(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),f[x+0]=1-_n(_,c,"x","z",r,e),f[x+1]=1-_n(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),f[x+0]=1-_n(_,c,"x","y",r,e),f[x+1]=1-_n(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[x+0]=_n(_,c,"x","y",r,e),f[x+1]=1-_n(_,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Qu(n=!1){let e=(t,i=.7,s=0)=>n?new Pi({color:t}):new Tn({color:t,roughness:i,metalness:s});return{paint:e("#60654b",.74,.25),edge:e("#464b37",.78,.3),steel:e("#8b9290",.32,.85),darkSteel:e("#3b4140",.5,.75),rubber:e("#242726",.95),glass:e("#233e45",.19,.45),amber:e("#ca852b",.3),lamp:e("#dce1d2",.23),red:e("#9d3026",.4)}}function ja(n,e,t,i=[0,0,0],s=""){let r=new we(e,t);return r.position.set(...i),r.name=s,r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}function U(n,e,t,i,s=""){return ja(n,new nn(...t),e,i,s)}function k(n,e,t,i,s,r="y",o=t,a=20){let l=ja(n,new rr(o,t,i,a),e,s);return r==="x"&&(l.rotation.z=Math.PI/2),r==="z"&&(l.rotation.x=Math.PI/2),l}function ne(n,e,t,i,s=.018){let r=new L(...t),o=new L(...i),a=o.clone().sub(r),l=k(n,e,s,a.length(),r.clone().add(o).multiplyScalar(.5).toArray());return l.quaternion.setFromUnitVectors(new L(0,1,0),a.normalize()),l}function Ye(n,e,t,i=.018,s=40){let r=new ps(t.map(o=>new L(...o)));return ja(n,new mr(r,s,i,8,!1),e)}function Ps(n,e,t){let i=new _t,s=[];for(let o=1;o<t.length-1;o++)s.push(...t[0],...t[o],...t[o+1]);i.setAttribute("position",new Qe(s,3)),i.computeVertexNormals();let r=e.clone();return r.side=At,ja(n,i,r)}function jn(n,e,t,i,s=8,r="z",o=.014){for(let a=0;a<s;a++){let l=a/s*Math.PI*2,c=[...t];r==="z"?(c[0]+=Math.cos(l)*i,c[1]+=Math.sin(l)*i):(c[1]+=Math.cos(l)*i,c[2]+=Math.sin(l)*i),k(n,e,o,o*1.3,c,r,o,6)}}function kr(n=Qu()){let e=new St;e.name="WR-12 hydraulic recovery winch",e.userData={units:"metres",concept:!0,sharedPart:"WR-12",ratedLoad:"unspecified illustrative model"},U(e,n.edge,[1.12,.085,.56],[0,.0425,0],"mounting skid");for(let s of[-.42,.42])for(let r of[-.2,.2])k(e,n.steel,.023,.022,[s,.097,r],"y",.023,6);for(let s of[-.42,.42])U(e,n.paint,[.1,.44,.4],[s,.29,0],"bearing pedestal"),k(e,n.paint,.225,.065,[s,.34,0],"x"),jn(e,n.steel,[s+(s>0?.04:-.04),.34,0],.176,8,"x");k(e,n.darkSteel,.14,.71,[0,.34,0],"x");for(let s of[-.34,.34])k(e,n.steel,.212,.025,[s,.34,0],"x");let t=[];for(let s=0;s<=720;s++){let r=s/720,o=r*Math.PI*2*36;t.push([-.326+r*.652,.34+Math.cos(o)*.172,Math.sin(o)*.172])}Ye(e,n.steel,t,.0075,900),k(e,n.paint,.12,.24,[-.59,.34,0],"x"),k(e,n.darkSteel,.079,.15,[-.75,.34,0],"x");for(let s of[.205,.445])ne(e,n.steel,[-.45,s,.27],[.45,s,.27],.035);for(let s of[-.43,.43])ne(e,n.steel,[s,.19,.27],[s,.46,.27],.035);Ye(e,n.darkSteel,[[-.71,.38,-.08],[-.74,.52,-.12],[-.43,.56,-.18],[-.39,.17,-.21]],.016),Ye(e,n.darkSteel,[[-.67,.31,-.09],[-.74,.2,-.12],[-.61,.12,-.2],[-.41,.12,-.22]],.014),Ye(e,n.steel,[[0,.34,.17],[0,.32,.33],[0,.21,.46]],.012);let i=new St;return i.name="forged hook and safety latch",e.add(i),Ye(i,n.steel,[[0,.23,.46],[.04,.14,.47],[.1,.085,.49],[.11,.027,.51],[.06,-.015,.52],[-.02,-.012,.52],[-.073,.05,.51],[-.071,.12,.49]],.025),ne(i,n.darkSteel,[-.07,.12,.49],[.031,.15,.48],.008),e}function Is(n){let e=new St;e.name="run-flat wheel";let t=k(e,n.rubber,.585,.37,[0,0,0],"z");for(let i of[-.196,.196])k(e,n.rubber,.505,.026,[0,0,i],"z"),k(e,n.paint,.325,.03,[0,0,i*1.09],"z"),k(e,n.darkSteel,.19,.04,[0,0,i*1.22],"z"),k(e,n.paint,.105,.055,[0,0,i*1.4],"z"),jn(e,n.steel,[0,0,i*1.26],.247,10,"z",.018);for(let i=0;i<30;i++)for(let s of[-1,1]){let r=i/30*Math.PI*2+s*.035,o=U(e,n.rubber,[.095,.075,.16],[Math.sin(r)*.586,Math.cos(r)*.586,s*.1]);o.rotation.z=-r,o.rotation.y=s*.24}return e}function ed(n=Qu()){let e=new St;e.name="R8 recovery vehicle",e.userData={units:"metres",concept:!0,axles:4,sharedPart:"WR-12"},U(e,n.darkSteel,[6.25,.24,1.2],[0,.91,0],"chassis"),U(e,n.edge,[5.85,.48,2.18],[-.1,1.27,0],"lower armored hull"),U(e,n.paint,[6.15,.25,2.4],[0,1.63,0],"deck");for(let h of[-2.17,-.74,.72,2.15]){k(e,n.darkSteel,.085,2.15,[h,.73,0],"z"),U(e,n.darkSteel,[.35,.23,.42],[h,.75,0],"differential");for(let f of[-1,1]){let m=Is(n);m.position.set(h,.605,f*1.19),e.add(m),ne(e,n.steel,[h-.13,.84,f*.81],[h+.19,1.34,f*.85],.043),U(e,n.paint,[1.2,.1,.47],[h,1.3,f*1.19],"wheel guard")}}let t=1.15,i=h=>[[.52,1.74,h*t],[2.94,1.74,h*t],[1.98,2.75,h*t],[.52,2.75,h*t]];Ps(e,n.paint,i(1)),Ps(e,n.paint,i(-1).reverse()),Ps(e,n.paint,[[.52,2.75,-t],[1.98,2.75,-t],[1.98,2.75,t],[.52,2.75,t]]),Ps(e,n.paint,[[2.94,1.74,-t],[2.94,1.74,t],[1.98,2.75,t],[1.98,2.75,-t]]),U(e,n.edge,[.08,1.03,2.3],[.49,2.25,0],"cab rear wall");let s=h=>2.94-(h-1.74)*(.96/1.01)+.008;for(let h of[[-1.02,-.09],[.09,1.02]])Ps(e,n.glass,[[s(2.03),2.03,h[0]],[s(2.03),2.03,h[1]],[s(2.57),2.57,h[1]],[s(2.57),2.57,h[0]]]),ne(e,n.rubber,[s(2.06)+.018,2.06,(h[0]+h[1])*.5],[s(2.4)+.018,2.4,h[1]-.1],.012);for(let h of[-1,1])Ps(e,n.glass,[[.76,2.15,h*1.158],[1.95,2.15,h*1.158],[1.87,2.57,h*1.158],[.76,2.57,h*1.158]]),ne(e,n.edge,[.64,1.86,h*1.166],[.64,2.66,h*1.166],.01),ne(e,n.edge,[.64,1.86,h*1.166],[1.7,1.86,h*1.166],.01),U(e,n.steel,[.15,.027,.033],[.87,2.015,h*1.185],"door handle"),ne(e,n.darkSteel,[2.11,2.25,h*1.16],[2.1,2.32,h*1.47],.024),U(e,n.glass,[.06,.22,.16],[2.1,2.32,h*1.47],"mirror"),U(e,n.edge,[.68,.07,.3],[1.17,1.61,h*1.36],"entry step");U(e,n.darkSteel,[.18,.24,2.53],[3.13,1.46,0],"front bumper");for(let h of[-1,1])k(e,n.lamp,.08,.04,[3.02,1.79,h*.83],"x"),k(e,n.amber,.036,.04,[3.025,1.79,h*1.02],"x"),k(e,n.steel,.075,.07,[3.25,1.42,h*.92],"x"),U(e,n.red,[.035,.09,.14],[-3.13,1.57,h*.99]);let r=kr(n);r.name="mounted WR-12",r.rotation.y=Math.PI/2,r.position.set(2.98,1,0),e.add(r);let o=new St;o.name="recovery stowage",e.add(o);for(let h of[-1,1]){U(o,n.paint,[2.6,.51,.43],[-1.56,1.99,h*.97],"tool locker");for(let f of[-2.3,-1.55,-.8])U(o,n.edge,[.014,.36,.017],[f,1.99,h*1.197]),U(o,n.steel,[.07,.018,.025],[f+.12,2.05,h*1.207]);ne(o,n.darkSteel,[-2.6,2.3,h*.8],[-.59,2.3,h*.8],.025)}let a=new St;a.name="recovery crane",e.add(a),k(a,n.darkSteel,.44,.14,[-.85,1.84,0]),k(a,n.paint,.33,.36,[-.85,2.04,0]),U(a,n.edge,[.48,.4,.48],[-.85,2.32,0],"crane pivot");let l=[-.85,2.49,0],c=[-2.51,3.13,0],p=new L(...c).sub(new L(...l));U(a,n.paint,[.34,p.length(),.34],new L(...l).add(new L(...c)).multiplyScalar(.5).toArray(),"main crane boom").quaternion.setFromUnitVectors(new L(0,1,0),p.clone().normalize()),ne(a,n.darkSteel,[-2.47,3.115,0],[-3,3.32,0],.112),ne(a,n.paint,[-.84,2.1,.24],[-1.74,2.78,.24],.078),ne(a,n.steel,[-1.74,2.78,.24],[-2.13,2.99,.24],.035),k(a,n.darkSteel,.105,.15,[-3.03,3.31,0],"z"),ne(a,n.darkSteel,[-3.06,3.26,0],[-3.06,2.55,0],.012),Ye(a,n.steel,[[-3.06,2.56,0],[-3.13,2.47,0],[-3.1,2.37,0],[-3,2.37,0],[-2.98,2.45,0]],.028),Ye(a,n.rubber,[[-.67,2.09,.28],[-.54,2.49,.27],[-.94,2.66,.25],[-1.7,2.95,.22]],.018),k(e,n.paint,.29,.05,[1.04,2.8,0],"y"),k(e,n.amber,.065,.14,[.6,2.9,-.72]),ne(e,n.darkSteel,[.37,2.8,.73],[.37,3.69,.73],.012);for(let h of[-1,1])for(let f=0;f<12;f++)k(e,n.steel,.014,.018,[-2.7+f*.45,1.79,h*1.22],"z",.014,6);return e}var r1=Object.freeze({coated:Object.freeze({wavelength:65e-5,variation:.022,directional:0}),pressed:Object.freeze({wavelength:8e-4,variation:.016,directional:0}),cast:Object.freeze({wavelength:.002,variation:.045,directional:0}),machined:Object.freeze({wavelength:35e-5,variation:.018,directional:1}),rubber:Object.freeze({wavelength:.0012,variation:.023,directional:0}),upholstery:Object.freeze({wavelength:9e-4,variation:.065,directional:2})}),td=Object.freeze({coated:Object.freeze({wavelength:.02,roughness:.012,tone:.003}),pressed:Object.freeze({wavelength:.012,roughness:.012,tone:0}),cast:Object.freeze({wavelength:.008,roughness:.02,tone:0}),machined:Object.freeze({wavelength:.01,roughness:.01,tone:0}),rubber:Object.freeze({wavelength:.012,roughness:.015,tone:.003}),upholstery:Object.freeze({wavelength:.01,roughness:.025,tone:.006})}),o1=`
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
`,Dc=class extends gs{constructor(e={},t="coated"){super(e),this.finish=t,this.finishProfile={...nd(t)},this.surfaceProfile={...td[t]}}copy(e){return super.copy(e),this.finish=e.finish??"coated",this.finishProfile={...e.finishProfile??nd(this.finish)},this.surfaceProfile={...e.surfaceProfile??td[this.finish]},this}customProgramCacheKey(){return"sea-metres-finish-v3"}onBeforeCompile(e){let t="#include <project_vertex>",i="#include <roughnessmap_fragment>",s="#include <color_fragment>";if(!e.vertexShader.includes(t)||!e.fragmentShader.includes(i)||!e.fragmentShader.includes(s))throw new Error("SEA finish shader anchors changed");let r=this.finishProfile;e.uniforms.seaFinish={value:new L(r.wavelength,r.variation,r.directional)};let o=this.surfaceProfile;e.uniforms.seaSurface={value:new L(o.wavelength,o.roughness,o.tone)},e.vertexShader=`varying vec3 vSeaFinishPosition;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(t,`
   vSeaFinishPosition=transformed*vec3(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz),length(modelMatrix[2].xyz));
   ${t}
  `),e.fragmentShader=o1+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(s,`${s}
float seaSurfaceResponse=seaVisibleSurface();
diffuseColor.rgb*=1.0+seaSurfaceResponse*seaSurface.z;`),e.fragmentShader=e.fragmentShader.replace(i,`${i}
roughnessFactor=clamp(roughnessFactor+seaSurfaceFinish()+seaSurfaceResponse*seaSurface.y,0.04,1.0);`)}};function nd(n){let e=r1[n];if(!e)throw new Error(`Unknown SEA material finish: ${n}`);return e}function ki(){let n=(s,r,o,a,l={})=>new Dc({color:s,roughness:r,metalness:o,...l},a),e=(s,r,o=0,a={})=>new gs({color:s,roughness:r,metalness:o,...a}),t={paint:n("#626e51",.53,0,"coated",{clearcoat:.1,clearcoatRoughness:.48}),edge:n("#394136",.61,.08,"pressed"),steel:n("#a0a7a5",.29,.92,"machined"),darkSteel:n("#41494a",.62,.86,"cast"),rubber:n("#222622",.82,0,"rubber"),glass:e("#78949a",.065,0,{ior:1.5,clearcoat:0,envMapIntensity:1.15}),amber:e("#dc9b30",.25,0,{clearcoat:.32,clearcoatRoughness:.16}),lamp:e("#e2e9db",.22,0,{clearcoat:.3,clearcoatRoughness:.14}),red:e("#a94432",.39,0,{clearcoat:.16,clearcoatRoughness:.28}),pressedSteel:n("#828c87",.4,.88,"pressed"),castSteel:n("#596160",.66,.84,"cast"),upholstery:n("#343a32",.91,0,"upholstery",{sheen:.2,sheenColor:"#565d4d",sheenRoughness:.9})},i={paint:"powder coated metal",edge:"coated frame metal",steel:"machined steel",darkSteel:"cast dark steel",rubber:"moulded rubber",glass:"optical glass",amber:"amber lamp lens",lamp:"clear lamp lens",red:"red lamp lens",pressedSteel:"pressed steel",castSteel:"cast steel",upholstery:"woven seat upholstery"};for(let[s,r]of Object.entries(i))t[s].name=r;return t}function Vn(n){return n.traverse(e=>{if(e.isMesh&&e.geometry.type==="BoxGeometry"){let{width:t,height:i,depth:s}=e.geometry.parameters;Math.min(t,i,s)>.045&&(e.geometry.dispose(),e.geometry=new Jt(t,i,s,1,Math.min(.024,Math.min(t,i,s)*.12)))}}),n}function a1(n,e,t,i,s="z"){let r=U(n,e.paint,t,i,"service panel"),[o,a,l]=i;if(s==="z")for(let c of[-1,1])for(let p of[-1,1])k(n,e.steel,.009,.012,[o+c*t[0]*.4,a+p*t[1]*.4,l+Math.sign(l||1)*(t[2]/2+.007)],"z",.009,6);return r}function Uc(n,e,t,i){if(t==="MOB")return Nc(n,e),Vn(n);if(t==="CAP")return Vn(n);if(t==="FP")return Vn(n);if(t==="PRO")return Vn(n);if(t==="COM")for(let s=0;s<(i===1?3:i===6?2:1);s++){let r=(s-((i===1?3:i===6?2:1)-1)/2)*.4;ne(n,e.darkSteel,[r-.13,.47,.17],[r+.13,.47,.17],.015);for(let o=0;o<7;o++)U(n,e.darkSteel,[.26,.012,.025],[r,.15+o*.042,-.13]);for(let o of[-.085,.085])k(n,e.steel,.02,.025,[r+o,.17,.145],"z"),Ye(n,e.rubber,[[r+o,.17,.16],[r+o,.1,.23],[r+o+.08,.06,.3]],.012);for(let o=0;o<3;o++)U(n,e.lamp,[.025,.006,.003],[r-.065+o*.05,.41,.134])}else if(t==="SA"){for(let s of[-.105,.105])k(n,e.steel,.081,.014,[s,i===3?1.75:.43,.172],"z"),k(n,e.glass,.055,.012,[s,i===3?1.75:.43,.185],"z");Ye(n,e.rubber,[[0,.07,-.08],[.12,.17,-.14],[.12,.37,-.14]],.012)}else if(t==="ACC"){if([0,5].includes(i))U(n,e.amber,[.13,.05,.022],[.18,.49,.29],"safety marking");else if(i===1){for(let s of[-1,1])U(n,e.red,[.025,.05,.11],[-.73,.45,s*.3]),ne(n,e.steel,[-.65,.8,s*.38],[.6,.8,s*.38],.014);k(n,e.darkSteel,.055,.12,[1.27,.38,0],"y")}else if([3,6].includes(i)){for(let s=0;s<3;s++){ne(n,e.darkSteel,[-.47+s*.37,.4,.24],[-.3+s*.37,.4,.24],.012);for(let r of[-1,1])k(n,e.steel,.009,.016,[-.46+s*.37,.24,r*.245],"z",.009,6)}Ye(n,e.rubber,[[-.6,.03,-.29],[-.51,.1,-.35],[.5,.1,-.35],[.6,.04,-.29]],.018)}}else if(t==="SE"){U(n,e.darkSteel,[.44,.025,.29],[.25,.75,.12],"laptop base");for(let s=0;s<4;s++)for(let r=0;r<10;r++)U(n,e.steel,[.025,.003,.023],[.09+r*.032,.766,.03+s*.034]);U(n,e.rubber,[.09,.003,.045],[.25,.766,.23],"trackpad"),U(n,e.paint,[.28,.019,.22],[-.38,.758,.15],"review binder");for(let s=0;s<4;s++)U(n,e.lamp,[.25,.003,.19],[-.38+s*.003,.772+s*.003,.15]);ne(n,e.darkSteel,[-.54,.78,.26],[-.32,.78,.26],.005)}return f1(n,e,t,i),Nc(n,e),Vn(n)}function Qa(n,e,t){let i=[];for(let a=1;a<t.length-1;a++)i.push(...t[0],...t[a],...t[a+1]);let s=new _t;s.setAttribute("position",new Qe(i,3)),s.computeVertexNormals();let r=e.clone();r.side=At;let o=new we(s,r);return o.name=e.name==="optical glass"?"cab glazing":"hull shell",n.add(o),o}function ct(n,e,t,i,s=.045){let r=new en;return r.moveTo(n+s,e),r.lineTo(t-s,e),r.quadraticCurveTo(t,e,t,e+s),r.lineTo(t,i-s),r.quadraticCurveTo(t,i,t-s,i),r.lineTo(n+s,i),r.quadraticCurveTo(n,i,n,i-s),r.lineTo(n,e+s),r.quadraticCurveTo(n,e,n+s,e),r}function Ze(n,e,t,i,s){let r=new Dt;t.forEach(([p,d],h)=>h?r.lineTo(p,d):r.moveTo(p,d)),r.closePath(),r.holes.push(...i);let o=new Gt(r,{depth:.04,steps:1,curveSegments:6,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:3}),a=o.attributes.position;for(let p=0;p<a.count;p++)a.setXYZ(p,...s(a.getX(p),a.getY(p),a.getZ(p)));o.computeVertexNormals();let l=e.clone();l.side=At;let c=new we(o,l);return c.name="hull shell",c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function Ds(n,e,t,i,s,r,o){let a=new Dt;t.forEach(([h,f],m)=>m?a.lineTo(h,f):a.moveTo(h,f)),a.closePath(),a.holes.push(...i);let l=new Gt(a,{depth:r,steps:1,curveSegments:12,bevelEnabled:!0,bevelSize:.002,bevelThickness:.001,bevelSegments:2}),c=l.attributes.position;for(let h=0;h<c.count;h++)c.setXYZ(h,...s(c.getX(h),c.getY(h),c.getZ(h)));l.computeVertexNormals();let p=e.clone();p.side=At;let d=new we(l,p);return d.name=o,d.castShadow=d.receiveShadow=!0,n.add(d),d}function Lc(n,e,t,i){let[s,r,o,a]=t,l=ct(s,r,o,a,.045),c=ct(s-.038,r-.038,o+.038,a+.038,.065).getPoints(12).map(h=>[h.x,h.y]);Ds(n,e.edge,c,[l.clone()],(h,f,m)=>i(h,f,.013+m),.017,"hull shell").userData.component="carrier window retaining bezel";let p=ct(s-.007,r-.007,o+.007,a+.007,.052).getPoints(12).map(h=>[h.x,h.y]);Ds(n,e.rubber,p,[ct(s+.016,r+.016,o-.016,a-.016,.029)],(h,f,m)=>i(h,f,-.034+m),.066,"carrier window compression gasket");let d=e.glass.clone();d.color.set("#92b2b0"),d.transparent=!0,d.opacity=.38,d.metalness=0,d.depthWrite=!1,Ds(n,d,l.getPoints(12).map(h=>[h.x,h.y]),[],(h,f,m)=>i(h,f,-.025-m),.01,"cab glazing").castShadow=!1,Ds(n,e.edge,c,[l.clone()],(h,f,m)=>i(h,f,-.057-m),.012,"hull shell").userData.component="carrier window inner retaining frame";for(let h of[s-.023,o+.023])for(let f of[r+.04,a-.04]){let m=new L(...i(h,f,.032)),_=new L(...i(h,f,.042)).sub(m).normalize(),g=k(n,e.steel,.007,.009,m.toArray(),"y",.007,6);g.quaternion.setFromUnitVectors(new L(0,1,0),_),g.name="carrier bezel seated fastener"}}function sd(n,e){if(n==="RECOVERY"){let h=ed(e);h.traverse(_=>{_.isMesh&&_.geometry.type==="BufferGeometry"&&_.material.name!=="optical glass"&&(_.name="hull shell")}),l1(h,e);let f=h.getObjectByName("mounted WR-12"),m=Uc(kr(e),e,"ACC",5);return m.name="mounted WR-12",m.position.copy(f.position),m.quaternion.copy(f.quaternion),f.removeFromParent(),f.traverse(_=>_.geometry?.dispose()),h.add(m),id(h,e,6.25,2.3),Vn(h)}let t={COMBAT:[6.8,2.65,4],RECCE:[5.5,2.3,2],TROOP:[6.9,2.6,3],COMMAND:[6.7,2.6,3],MINE:[6.8,2.65,4]}[n],[i,s,r]=t,o=new St;o.name=n,o.userData={units:"metres",concept:!0,axles:r,roof:n==="COMMAND"?2.75:2.37,length:i,width:s};let a=i/2,l=-a,c=s/2;U(o,e.darkSteel,[i-.45,.2,s*.58],[0,.82,0],"chassis"),U(o,e.edge,[i-.25,.48,s*.8],[0,1.16,0],"lower hull");for(let h of[-1,1]){let f=g=>h*c*(.75+(g-1.2)*.1/1.16),m=[a-1.86,1.87,a-1.02,2.16],_=[ct(...m)];if(n==="TROOP")for(let g=0;g<4;g++)_.push(ct(l+.48+g*.94,1.97,l+1.05+g*.94,2.2,.035));if(Ze(o,e.paint,[[l,1.2],[a,1.2],[a-.75,2.36],[l+.17,2.36]],_,(g,u,x)=>[g,u,f(u)-h*x]),n==="TROOP")for(let g=0;g<4;g++)Lc(o,e,[l+.48+g*.94,1.97,l+1.05+g*.94,2.2],(u,x,M)=>[u,x,f(x)+h*M]);n==="COMMAND"&&(Ze(o,e.paint,[[l+.17,2.36],[1.14,2.36],[.95,2.74],[l+.17,2.74]],[],(g,u,x)=>[g,u,h*(c*.85-x)]).userData.component="command raised rear side"),Ds(o,e.paint,[[a-2.01,1.48],[a-.97,1.48],[a-.86,2.28],[a-1.02,2.31],[a-2.01,2.31]],[ct(...m)],(g,u,x)=>[g,u,f(u)+h*(.012+x)],.015,"hull shell").userData.component="carrier formed cab door",Lc(o,e,m,(g,u,x)=>[g,u,f(u)+h*x])}if(n==="COMBAT"){let h=new en;h.absarc(-.35,0,.405,0,Math.PI*2,!0),Ze(o,e.paint,[[l+.17,-c*.85],[a-.75,-c*.85],[a-.75,c*.85],[l+.17,c*.85]],[h],(f,m,_)=>[f,2.36-_,m])}else if(n==="RECCE"){let h=new en;h.absarc(-1,-.48,.092,0,Math.PI*2,!0),Ze(o,e.paint,[[l+.17,-c*.85],[a-.75,-c*.85],[a-.75,c*.85],[l+.17,c*.85]],[h],(f,m,_)=>[f,2.36-_,m])}else n==="COMMAND"?(Qa(o,e.paint,[[1.14,2.36,-c*.85],[a-.75,2.36,-c*.85],[a-.75,2.36,c*.85],[1.14,2.36,c*.85]]),Ze(o,e.paint,[[l+.17,-c*.85],[.95,-c*.85],[.95,c*.85],[l+.17,c*.85]],[],(h,f,m)=>[h,2.74-m,f]).userData.component="command raised rear roof",Ze(o,e.paint,[[.95,-c*.85],[1.14,-c*.85],[1.14,c*.85],[.95,c*.85]],[],(h,f,m)=>[h,2.74-(h-.95)*.38/.19-m,f]).userData.component="command roof transition"):Qa(o,e.paint,[[l+.17,2.36,-c*.85],[a-.75,2.36,-c*.85],[a-.75,2.36,c*.85],[l+.17,2.36,c*.85]]);let p=h=>a-(h-1.2)*.75/1.16;Ze(o,e.paint,[[-c*.75,1.2],[c*.75,1.2],[c*.85,2.36],[-c*.85,2.36]],[ct(-c*.67,1.8,-.09,2.13),ct(.09,1.8,c*.67,2.13)],(h,f,m)=>[p(f)-m,f,h]);for(let h of[[-c*.67,-.09],[.09,c*.67]])Lc(o,e,[h[0],1.8,h[1],2.13],(f,m,_)=>[p(m)+_,m,f]),ne(o,e.rubber,[p(1.83)+.02,1.83,(h[0]+h[1])*.5],[p(2.03)+.02,2.03,h[1]-.08],.009).name="carrier seated windshield wiper";n==="TROOP"?Ze(o,e.edge,[[-c*.75,1.2],[c*.75,1.2],[c*.85,2.36],[-c*.85,2.36]],[ct(-.74,1.34,.74,2.23,.045)],(h,f,m)=>[l+(f-1.2)*.17/1.16+m,f,h]):n==="COMMAND"?Ze(o,e.edge,[[-c*.75,1.2],[c*.75,1.2],[c*.85,2.36],[c*.85,2.74],[-c*.85,2.74],[-c*.85,2.36]],[ct(-.47,1.47,.47,2.5,.045)],(h,f,m)=>[l+(Math.min(f,2.36)-1.2)*.17/1.16+m,f,h]):Qa(o,e.edge,[[l,1.2,-c*.75],[l+.17,2.36,-c*.85],[l+.17,2.36,c*.85],[l,1.2,c*.75]]);let d=r===2?[-1.67,1.67]:r===3?[-2.25,-.75,1.9]:[-2.55,-1.05,1,2.4];for(let h of d){k(o,e.darkSteel,.06,s*.81,[h,.67,0],"z"),k(o,e.edge,.13,.31,[h,.67,0],"z");for(let f of[-1,1]){let m=Is(e);m.position.set(h,.62,f*c*.88),o.add(m),ne(o,e.steel,[h-.15,.75,f*c*.62],[h+.1,1.2,f*c*.68],.045),U(o,e.paint,[1.22,.075,.48],[h,1.3,f*c*.91],"wheel guard")}}for(let h of[-1,1]){let f=h*c*.855,m=M=>h*c*(.75+(M-1.2)*.1/1.16)+h*.01;for(let M of[1.65,2.24])U(o,e.darkSteel,[.055,.09,.041],[a-1.97,M,m(M)+h*.024],"carrier door seated hinge leaf"),k(o,e.steel,.01,.065,[a-1.97,M,m(M)+h*.043],"y",.01,16).name="carrier door hinge pin";let _=m(1.76)+h*.054;for(let M of[a-1.56,a-1.34])ne(o,e.edge,[M,1.76,m(1.76)+h*.017],[M,1.76,_],.011).name="carrier door pull mounting post";ne(o,e.steel,[a-1.56,1.76,_],[a-1.34,1.76,_],.012).name="carrier exterior door pull",U(o,e.edge,[.68,.05,.32],[a-1.61,1.36,h*(c*.87+.14)],"entry step");for(let M of[a-1.83,a-1.39]){let v=Math.abs(m(1.36))-.01,w=c*.87+.14;U(o,e.edge,[.05,.1,w-v+.05],[M,1.33,h*(v+w)/2],"carrier entry step hull bracket")}if(ne(o,e.darkSteel,[a-.98,1.86,f],[a-.9,2.07,h*(c+.1)],.02),U(o,e.glass,[.055,.2,.15],[a-.9,2.07,h*(c+.1)],"mirror"),n!=="TROOP")for(let M=0;M<4;M++){let v=l+.6+M*.64;a1(o,e,[.51,.49,.04],[v,1.95,h*c*.85])}for(let M=0;M<10;M++)U(o,e.darkSteel,[.02,.22,.02],[a-1.6+M*.06,2.38,h*.57],"vent grille");let g=1.385,u=p(g),x=h*c*.65;U(o,e.edge,[.16,.21,.205],[u+.035,g,x],"carrier front lamp housing"),U(o,e.rubber,[.02,.175,.174],[u+.121,g,x],"carrier lamp seated gasket"),k(o,e.lamp,.058,.023,[u+.137,1.355,x],"x",.058,32).name="carrier headlamp lens",k(o,e.amber,.022,.023,[u+.137,1.445,x],"x",.022,24).name="carrier indicator lens",U(o,e.red,[.03,.07,.13],[l-.02,1.32,h*c*.65])}U(o,e.darkSteel,[.15,.17,s*.85],[a,1.12,0],"front bumper");for(let h of[-1,1])k(o,e.steel,.055,.08,[a+.1,1.14,h*.73],"x"),ne(o,e.steel,[l+.25,1.44,h*.5],[l+.25,2.05,h*.5],.016);return k(o,e.edge,.32,.04,[.4,n==="COMMAND"?2.77:2.39,.5],"roof hatch"),id(o,e,i,s),Vn(o)}function l1(n,e){let t=n.children.filter(m=>m.isMesh&&m.geometry.type==="BufferGeometry"),i=t.filter(m=>m.material.name!=="optical glass"),s=t.filter(m=>m.material.name==="optical glass");function r(m,_){if(!m)return;let g=[];for(let u=1;u<_.length-1;u++)g.push(..._[0],..._[u],..._[u+1]);m.geometry.dispose(),m.geometry=new _t,m.geometry.setAttribute("position",new Qe(g,3)),m.geometry.computeVertexNormals()}let o=m=>2.94-(m-1.74)*(.47/1.01)+.012;c1(n,e);for(let m of[...n.children]){let _=m.geometry?.type==="CylinderGeometry"&&m.geometry.parameters.radiusTop===.01&&Math.abs(Math.abs(m.position.z)-1.166)<.001;(m.name==="door handle"||_)&&(m.removeFromParent(),m.geometry?.dispose())}for(let m of n.children.filter(_=>_.name==="wheel guard")){let _=new Dt;_.moveTo(-.74,-.04),_.lineTo(-.74,.19),_.quadraticCurveTo(-.72,.25,-.68,.31),_.lineTo(-.47,.68),_.quadraticCurveTo(-.43,.74,-.36,.74),_.lineTo(.36,.74),_.quadraticCurveTo(.43,.74,.47,.68),_.lineTo(.68,.31),_.quadraticCurveTo(.72,.25,.74,.19),_.lineTo(.74,-.04),_.lineTo(.66,-.04),_.lineTo(.66,.18),_.lineTo(.39,.66),_.lineTo(-.39,.66),_.lineTo(-.66,.18),_.lineTo(-.66,-.04),_.closePath(),m.geometry.dispose(),m.geometry=new Gt(_,{depth:.5,curveSegments:5,bevelEnabled:!0,bevelSize:.016,bevelThickness:.016,bevelSegments:3,steps:1}),m.name="recovery formed wheel guard",m.position.y=.605,m.position.z-=.25}for(let m of i)m.removeFromParent(),m.geometry.dispose(),m.material.dispose();for(let m of[-1,1]){Ze(n,e.paint,[[.52,1.74],[2.94,1.74],[2.47,2.75],[.52,2.75]],[ct(1.22,2.15,2.28,2.6)],(_,g,u)=>[_,g,m*(1.15-u)]),Ze(n,e.paint,[[.52,1.4],[2.83,1.4],[2.98,1.65],[2.94,1.74],[.52,1.74]],[],(_,g,u)=>[_,g,m*(1.15-u)]),Ze(n,e.paint,[[1.08,1.78],[2.32,1.78],[2.55,2.1],[2.34,2.64],[1.08,2.64]],[ct(1.24,2.17,2.26,2.58)],(_,g,u)=>[_,g,m*(1.174-u*.35)]),U(n,e.edge,[.34,.58,.017],[.8,2.11,m*1.171],"rear cab access gasket"),U(n,e.paint,[.3,.54,.025],[.8,2.11,m*1.183],"rear cab service cover");for(let _ of[1.87,2.35])U(n,e.darkSteel,[.04,.07,.021],[.65,_,m*1.202],"cab service cover hinge");U(n,e.darkSteel,[.035,.09,.023],[.92,2.1,m*1.203],"cab service cover latch")}let a=[[-1.15,1.74],[1.15,1.74],[1.15,2.75],[-1.15,2.75]];Ze(n,e.paint,a,[ct(-1.02,2.04,-.07,2.62),ct(.07,2.04,1.02,2.62)],(m,_,g)=>[o(_)-g,_,m]);let l=new we(new Jt(1.95,.07,2.3,3,.028),e.paint);l.position.set(1.495,2.745,0),l.name="hull shell",l.castShadow=!0,l.receiveShadow=!0,n.add(l),Ze(n,e.paint,[[-1.15,1.49],[1.15,1.49],[1.15,1.74],[-1.15,1.74]],[],(m,_,g)=>[2.98-(_-1.49)*.16-g,_,m]);let c=e.glass.clone();c.color.set("#a9c8c5"),c.transparent=!0,c.opacity=.28,c.metalness=0,c.roughness=.12,c.depthWrite=!1;for(let m of s)m.material.dispose(),m.material=c,m.castShadow=!1;let p=[];n.traverse(m=>{m.material===e.rubber&&m.geometry.type==="CylinderGeometry"&&m.geometry.parameters.radiusTop===.012&&m.position.y>2.1&&p.push(m)});for(let m of p)m.removeFromParent(),m.geometry.dispose();for(let[m,_]of[[0,[-1.02,-.07]],[1,[.07,1.02]]]){let g=[[o(2.04),2.04,_[0]],[o(2.04),2.04,_[1]],[o(2.62),2.62,_[1]],[o(2.62),2.62,_[0]]];r(s[m],g),s[m].name="cab glazing";for(let x=0;x<4;x++)ne(n,e.rubber,g[x],g[(x+1)%4],.018);let u=(_[0]+_[1])/2;ne(n,e.darkSteel,[o(2.05)+.018,2.05,u],[o(2.3)+.024,2.3,u-.2],.014),ne(n,e.rubber,[o(2.21)+.025,2.21,u-.27],[o(2.47)+.025,2.47,u-.09],.012)}for(let[m,_]of[[2,-1],[3,1]]){let g=[[1.25,2.18,_*1.178],[2.25,2.18,_*1.178],[2.25,2.57,_*1.178],[1.25,2.57,_*1.178]];r(s[m],g),s[m].name="cab glazing";for(let u=0;u<4;u++)ne(n,e.rubber,g[u],g[(u+1)%4],.017);U(n,e.edge,[.025,.39,.025],[2.05,2.375,_*1.196],"door quarter window divider"),U(n,e.rubber,[.085,.25,.18],[2.065,2.32,_*1.47],"mirror housing"),ne(n,e.darkSteel,[2.11,2.08,_*1.16],[2.1,2.24,_*1.46],.018);for(let u of[1.93,2.47])U(n,e.darkSteel,[.065,.13,.035],[1.09,u,_*1.185],"door hinge");U(n,e.edge,[.2,.1,.021],[1.3,2.015,_*1.194],"door handle recess"),ne(n,e.steel,[1.25,2.015,_*1.213],[1.37,2.015,_*1.213],.013).name="door release pull",U(n,e.edge,[.22,.26,.13],[2.99,1.79,_*.83],"recessed headlight surround"),k(n,e.lamp,.08,.033,[3.112,1.79,_*.83],"x",.08,32),k(n,e.amber,.029,.024,[2.25,2.79,_*.9],"y",.029,20)}let d=U(n,e.edge,[.025,.28,1.35],[o(1.84)+.015,1.84,0],"radiator grille frame");d.rotation.z=Math.atan(.47/1.01);for(let m=0;m<7;m++){let _=1.73+m*.033;U(n,e.darkSteel,[.025,.025,1.24],[o(_)+.034,_,0],"radiator grille slat")}for(let m of[-.52,0,.52]){let _=U(n,e.edge,[.034,.27,.023],[o(1.83)+.055,1.83,m],"grille support");_.rotation.z=Math.atan(.47/1.01)}ne(n,e.edge,[2.47,2.75,-1.15],[2.47,2.75,1.15],.031);for(let m of[-.75,-.38,0,.38,.75])U(n,e.amber,[.12,.04,.07],[2.38,2.8,m],"roof clearance lamp");let h=n.getObjectByName("recovery stowage");if(h){for(let m of h.children.filter(_=>_.name==="tool locker"))m.geometry.dispose(),m.geometry=new nn(2.6,.64,.43),m.position.y=1.99;for(let m of[-1,1])for(let _ of[-2.41,-1.56,-.71]){U(h,e.edge,[.78,.54,.015],[_,1.99,m*1.195],"locker door gasket"),U(h,e.paint,[.73,.49,.019],[_,1.99,m*1.21],"formed locker door");for(let g of[1.83,2.15])U(h,e.darkSteel,[.05,.08,.028],[_-.31,g,m*1.235],"locker hinge");U(h,e.darkSteel,[.13,.14,.019],[_+.23,2.04,m*1.237],"recessed latch cup"),ne(h,e.steel,[_+.19,2.04,m*1.253],[_+.27,2.04,m*1.253],.012).name="locker latch lever"}for(let m of[-1,1]){U(h,e.darkSteel,[2.64,.055,.47],[-1.56,1.68,m*.97],"locker load bearing plinth");for(let _ of[-2.41,-1.56,-.71]){for(let g of[1.84,2.14])U(h,e.paint,[.55,.018,.016],[_-.03,g,m*1.225],"pressed locker stiffening rib");U(h,e.edge,[.045,.59,.025],[_-.4,1.99,m*1.212],"locker frame stile")}}for(let m of[-1,1]){U(h,e.darkSteel,[2.58,.024,.41],[-1.56,2.325,m*.97],"locker top tread plate");for(let _=0;_<13;_++){let g=-2.75+_*.19;ne(h,e.steel,[g,2.342,m*.97-.14],[g+.075,2.342,m*.97+.14],.006).name="raised walkway tread"}}}h1(n,e),U(n,e.edge,[.26,.055,.18],[.43,2.755,.73],"rear bulkhead antenna bracket"),k(n,e.rubber,.04,.075,[.37,2.81,.73],"y",.04,24).name="antenna spring base",k(n,e.edge,.088,.08,[.6,2.8,-.72],"y",.088,32).name="beacon mounting pedestal";let f=n.getObjectByName("recovery crane");f&&u1(f,e)}function c1(n,e){for(let i of["chassis","lower armored hull","deck"]){let s=n.getObjectByName(i);s&&(s.removeFromParent(),s.geometry.dispose())}let t=new St;t.name="reinforced recovery chassis",n.add(t);for(let i of[-1,1]){let s=i*.52;U(t,e.darkSteel,[6.05,.26,.055],[0,.91,s],"chassis rail web");for(let r of[.77,1.05])U(t,e.darkSteel,[6.05,.04,.16],[0,r,s],"chassis rail flange");U(t,e.edge,[3.4,.17,.085],[-1.1,1.135,s],"crane subframe rail");for(let r of[-2.6,-1.6,-.85,-.3])U(t,e.darkSteel,[.14,.51,.12],[r,1.38,i*.76],"deck support post"),ne(t,e.edge,[r,1.12,s],[r,1.55,i*1.02],.035).name="deck outrigger brace";Ze(t,e.paint,[[.53,1.4],[2.83,1.4],[2.83,1.57],[.53,1.57]],[],(r,o,a)=>[r,o,i*(1.11-a)]).name="cab sill skirt";for(let r of[-2.17,-.74,.72,2.15]){U(t,e.darkSteel,[.23,.16,.16],[r+.19,1.3,i*.85],"suspension upper mount"),U(t,e.edge,[.23,.23,.15],[r+.19,1.45,i*.85],"suspension deck hanger"),U(t,e.edge,[.55,.24,.08],[r,1.45,i*1.12],"wheel guard mounting apron"),U(t,e.edge,[.46,.042,.1],[r,.86,i*.52],"axle spring saddle");for(let o=0;o<3;o++)U(t,e.darkSteel,[.64-o*.08,.016,.1],[r,.83-o*.018,i*.52],"leaf spring pack")}}for(let i of[-2.85,-2.17,-.85,.72,2.15,2.82])U(t,e.darkSteel,[.12,.17,1.22],[i,.93,0],"chassis crossmember");U(t,e.paint,[6.12,.08,2.38],[-.005,1.6,0],"formed load deck");for(let i of[-1,1])U(t,e.edge,[6.08,.11,.05],[-.005,1.57,i*1.175],"deck folded edge");U(t,e.darkSteel,[1.14,.16,1.6],[-.85,1.68,0],"crane foundation crossbeam");for(let i of[-1,1])Ze(t,e.darkSteel,[[-1.28,1.19],[-.44,1.19],[-.62,1.59],[-1.1,1.59]],[],(s,r,o)=>[s,r,i*(.56+o)]).name="crane foundation gusset";U(t,e.edge,[.32,.22,2.08],[-2.92,1.16,0],"stabilizer crossbeam");for(let i of[-1,1])U(t,e.darkSteel,[.24,.14,.93],[-2.92,1.16,i*.58],"stowed telescopic stabilizer beam"),U(t,e.paint,[.32,.36,.24],[-2.92,1.13,i*1.02],"stabilizer jack guide"),k(t,e.paint,.08,.33,[-2.92,.92,i*1.02],"y",.08,32).name="stabilizer jack barrel",k(t,e.steel,.033,.12,[-2.92,.72,i*1.02],"y",.033,24).name="stowed jack piston",k(t,e.darkSteel,.06,.17,[-2.92,.68,i*1.02],"z",.06,24).name="jack foot pivot",U(t,e.darkSteel,[.27,.065,.29],[-2.92,.64,i*1.02],"carried stabilizer foot"),Ye(t,e.rubber,[[-2.55,1.25,i*.6],[-2.75,1.3,i*.7],[-2.94,1.3,i*.89],[-2.96,1.06,i*.93]],.018,24).name="stabilizer hydraulic supply",U(t,e.edge,[.1,.21,.41],[-3.035,1.4,i*.92],"rear lamp carrier"),U(t,e.red,[.025,.09,.2],[-3.1,1.43,i*.97],"rear tail lamp"),U(t,e.amber,[.026,.07,.09],[-3.1,1.43,i*.79],"rear turn lamp"),U(t,e.rubber,[.05,.37,.26],[-2.88,.9,i*1.28],"rear flexible mudflap");U(t,e.darkSteel,[.18,.25,1.25],[-3.015,1.1,0],"rear towing crossmember"),U(t,e.edge,[.21,.23,.28],[-3.075,1.1,0],"rear tow coupling body"),k(t,e.steel,.034,.3,[-3.15,1.1,0],"y",.034,24).name="tow coupling pin"}function h1(n,e){let t=new St;t.name="cab services",n.add(t);for(let i of[-1,1])U(t,e.darkSteel,[.37,.065,.38],[.24,1.8,i*.79],"service tower deck bracket");k(t,e.edge,.135,.65,[.24,2.14,.79],"y",.135,40).name="air cleaner housing",k(t,e.darkSteel,.153,.036,[.24,2.47,.79],"y",.153,40).name="air cleaner lid",k(t,e.paint,.1,.25,[.24,2.61,.79],"y",.1,32).name="intake riser",k(t,e.edge,.17,.05,[.24,2.75,.79],"y",.17,40).name="intake rain cap";for(let i of[1.94,2.35]){let s=new we(new kt(.137,.012,8,36),e.steel);s.rotation.x=Math.PI/2,s.position.set(.24,i,.79),s.name="air cleaner retaining band",t.add(s),U(t,e.edge,[.2,.065,.065],[.39,i,.79],"bulkhead service bracket")}Ye(t,e.rubber,[[.24,1.84,.79],[.24,1.7,.79],[.34,1.58,.64],[.6,1.5,.64]],.065,24).name="connected air inlet duct",k(t,e.darkSteel,.093,.75,[.24,2.22,-.79],"y",.093,40).name="exhaust silencer";for(let i=0;i<12;i++){let s=i*Math.PI/6;ne(t,e.steel,[.24+Math.cos(s)*.12,1.87,-.79+Math.sin(s)*.12],[.24+Math.cos(s)*.12,2.57,-.79+Math.sin(s)*.12],.012).name="exhaust heat shield rib"}for(let i of[1.88,2.08,2.37,2.57]){let s=new we(new kt(.12,.013,8,36),e.darkSteel);s.rotation.x=Math.PI/2,s.position.set(.24,i,-.79),s.name="heat shield retaining band",t.add(s)}Ye(t,e.darkSteel,[[.24,1.85,-.79],[.24,1.7,-.79],[.35,1.57,-.72],[.59,1.5,-.72]],.05,24).name="exhaust inlet elbow",Ye(t,e.darkSteel,[[.24,2.59,-.79],[.24,2.75,-.79],[.1,2.83,-.79]],.053,24).name="exhaust outlet elbow";for(let i of[1.97,2.42])U(t,e.edge,[.2,.07,.07],[.39,i,-.79],"exhaust bulkhead bracket");U(t,e.paint,[.54,.28,.64],[-.04,1.16,-.48],"underbody utility tank");for(let i of[-.2,.13])U(t,e.darkSteel,[.044,.31,.68],[i,1.16,-.48],"utility tank strap");Ye(t,e.darkSteel,[[.2,1.29,-.7],[.35,1.29,-.7],[.45,1.43,-.79]],.014,20).name="tank supply pipe"}function u1(n,e){for(let c of[...n.children])c.removeFromParent(),c.traverse(p=>p.geometry?.dispose());let t=(c,p,d,h,f,m,_)=>{let g=new L(...p).sub(new L(...c)),u=g.length(),x=[],M=([b,C],D,E)=>{let R=b/2-D,P=C/2-D,F=Math.min(R,P)*.28;return[[-R+F,-P,E],[R-F,-P,E],[R,-P+F,E],[R,P-F,E],[R-F,P,E],[-R+F,P,E],[-R,P-F,E],[-R,-P+F,E]]},v=[M(d,0,0),M(h,0,u)],w=[M(d,f,0),M(h,f,u)],T=(b,C,D,E)=>x.push(...b,...C,...D,...b,...D,...E);for(let b=0;b<8;b++){let C=(b+1)%8;T(v[0][b],v[0][C],v[1][C],v[1][b]),T(w[0][C],w[0][b],w[1][b],w[1][C]),T(v[0][C],v[0][b],w[0][b],w[0][C]),T(v[1][b],v[1][C],w[1][C],w[1][b])}let I=new _t;I.setAttribute("position",new Qe(x,3)),I.computeVertexNormals();let y=new we(I,m);return y.position.set(...c),y.quaternion.setFromUnitVectors(new L(0,0,1),g.normalize()),y.name=_,y.castShadow=!0,y.receiveShadow=!0,n.add(y),y};U(n,e.edge,[.95,.12,1.2],[-.85,1.78,0],"crane mounting crossmember"),k(n,e.darkSteel,.44,.14,[-.85,1.88,0],"y",.44,48).name="slewing ring",k(n,e.paint,.33,.32,[-.85,2.1,0],"y",.33,40).name="crane pedestal";for(let c of[-1,1])Ze(n,e.paint,[[-1.17,2.1],[-1.13,2.51],[-1.04,2.62],[-.66,2.62],[-.57,2.51],[-.53,2.1]],[],(p,d,h)=>[p,d,c*(.27+h)]).name="crane pivot cheek",k(n,e.steel,.095,.075,[-.85,2.46,c*.32],"z",.095,40).name="boom pivot bearing",ne(n,e.edge,[-.85,1.8,c*.55],[-.85,2.14,c*.29],.045).name="pedestal brace";k(n,e.darkSteel,.075,.73,[-.85,2.46,0],"z",.075,40).name="boom hinge pin",t([-.65,2.38,0],[-2.47,3.12,0],[.42,.46],[.32,.34],.025,e.paint,"formed main boom"),t([-2.34,3.067,0],[-3.05,3.356,0],[.245,.26],[.205,.22],.017,e.darkSteel,"telescoping extension"),t([-2.37,3.079,0],[-2.49,3.128,0],[.36,.38],[.355,.375],.026,e.edge,"boom mouth reinforcement");for(let c of[-1,1]){let p=U(n,e.rubber,[.14,.12,.035],[-2.435,3.105,c*.141],"telescopic wear pad");p.rotation.z=-.386}for(let c of[-1,1])k(n,e.paint,.16,.055,[-.85,2.46,c*.225],"z",.16,40).name="boom root trunnion";Ze(n,e.paint,[[-2.02,2.77],[-2.25,2.85],[-2.2,2.99],[-1.96,2.89]],[],(c,p,d)=>[c,p,.25+d]).name="boom cylinder lug";let i=[-.73,2.08,.32],s=[-2.13,2.91,.32],r=new L(...s).sub(new L(...i)),o=c=>new L(...i).addScaledVector(r,c).toArray(),a=o(.68);ne(n,e.paint,i,a,.085).name="lift cylinder barrel",ne(n,e.steel,a,s,.032).name="lift piston rod",ne(n,e.darkSteel,o(.65),o(.71),.103).name="cylinder gland",ne(n,e.edge,o(.04),o(.12),.098).name="cylinder end cap";for(let[c,p]of[[i[0],i[1]],[s[0],s[1]]])k(n,e.steel,.067,.13,[c,p,.32],"z",.067,32).name="cylinder clevis pin",U(n,e.paint,[.17,.17,.08],[c,p,.26],"lift cylinder clevis");k(n,e.edge,.135,.34,[-.36,2.37,0],"z",.135,48).name="hoist drum";for(let c=0;c<13;c++){let p=new we(new kt(.137,.0075,6,36),e.darkSteel);p.position.set(-.36,2.37,-.15+c*.025),p.name="hoist cable winding",n.add(p)}for(let c of[-1,1])k(n,e.steel,.18,.03,[-.36,2.37,c*.185],"z",.18,40).name="hoist drum flange",Ze(n,e.paint,[[-.62,2.1],[-.08,2.1],[-.08,2.36],[-.2,2.54],[-.47,2.54],[-.62,2.36]],[],(p,d,h)=>[p,d,c*(.225+h)]).name="hoist bearing cradle";U(n,e.edge,[.55,.065,.6],[-.35,2.105,0],"hoist cradle base"),ne(n,e.edge,[-.68,2.1,0],[-.35,2.1,0],.055).name="hoist support tie",k(n,e.paint,.17,.13,[-.36,2.37,-.335],"z",.14,40).name="planetary hoist gearbox",k(n,e.darkSteel,.095,.21,[-.36,2.37,-.505],"z",.095,32).name="hoist hydraulic motor",Ye(n,e.rubber,[[-.36,2.35,-.6],[-.18,2.2,-.62],[-.44,2.06,-.46],[-.73,2,-.36]],.018,24).name="hoist motor supply";for(let c of[-1,1])Ze(n,e.paint,[[-3.13,3.19],[-3.17,3.4],[-2.94,3.48],[-2.85,3.35]],[],(p,d,h)=>[p,d,c*(.12+h)]).name="boom head cheek";k(n,e.darkSteel,.095,.18,[-3.04,3.35,0],"z",.095,40).name="head sheave",k(n,e.steel,.035,.35,[-3.04,3.35,0],"z",.035,32).name="head sheave axle";for(let c of[-1,1]){let p=new we(new kt(.086,.013,8,36),e.steel);p.position.set(-3.04,3.35,c*.075),p.name="sheave flange",n.add(p)}ne(n,e.darkSteel,[-.36,2.507,0],[-2.995,3.433,0],.011).name="hoist rope";let l=[];for(let c=0;c<=12;c++){let p=Math.PI*.34+c/12*Math.PI*.66;l.push([-3.04+Math.cos(p)*.095,3.35+Math.sin(p)*.095,0])}Ye(n,e.darkSteel,l,.011,24).name="hoist rope sheave wrap",ne(n,e.darkSteel,[-3.135,3.35,0],[-3.135,2.79,0],.011).name="hoist rope fall",k(n,e.darkSteel,.047,.16,[-3.12,2.77,0]).name="hook swivel",Ye(n,e.amber,[[-3.12,2.7,0],[-3.19,2.65,0],[-3.23,2.54,0],[-3.18,2.45,0],[-3.07,2.46,0],[-3.01,2.55,0],[-3.04,2.61,0]],.033,32).name="forged lifting hook",ne(n,e.darkSteel,[-3.04,2.61,0],[-3.14,2.67,0],.008).name="hook safety latch";for(let c=0;c<2;c++){let p=o(.58+c*.05),d=.44+c*.045;k(n,e.steel,.025,.065,[p[0],p[1],.409],"z",.025,24).name="lift cylinder hose union",Ye(n,e.rubber,[[-.8,2,d],[-.59,2.18,d+.03],[-.71,2.59,d+.03],[-1.16,2.67,d],[p[0],p[1],.444]],.018,32).name="lift cylinder hydraulic line"}}function d1(n,e){let t=new St;t.name="driver controls",n.add(t);let i=new Tn({color:"#79816f",roughness:.86,metalness:0});i.name="cab interior trim";let s=e.upholstery.clone();s.name="woven seat upholstery";let r=(h,f,m,_,g=.035)=>{let u=new we(new Jt(...f,3,g),h);return u.position.set(...m),u.name=_,u.castShadow=!0,u.receiveShadow=!0,t.add(u),u},o=1.79;r(e.rubber,[1.86,.045,1.99],[1.49,o,0],"cab floor mat",.018);let a=new Dt;[[2.11,1.85],[2.71,1.85],[2.75,2.05],[2.58,2.14],[2.18,2.14]].forEach(([h,f],m)=>m?a.lineTo(h,f):a.moveTo(h,f)),a.closePath();let l=new we(new Gt(a,{depth:1.98,steps:1,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2}),i);l.position.z=-.99,l.name="dashboard cowl",l.castShadow=!0,l.receiveShadow=!0,t.add(l),r(e.edge,[.08,.23,1.86],[2.13,2.025,0],"dashboard instrument fascia",.015),r(e.rubber,[.26,.07,.63],[2.06,2.155,-.5],"instrument sun hood",.025),r(i,[.05,.075,.6],[2.075,2.015,.55],"glove compartment",.012),ne(t,e.darkSteel,[2.043,1.99,.44],[2.043,1.99,.65],.011).name="glove compartment pull";for(let h of[-.85,.14,.81]){r(e.darkSteel,[.014,.1,.15],[2.075,2.075,h],"dashboard air vent",.005);for(let f=0;f<4;f++)U(t,e.edge,[.015,.01,.13],[2.064,2.04+f*.023,h],"vent louvre")}for(let h of[-1,1]){let f=h*.58;for(let _ of[-.16,.16])U(t,e.darkSteel,[.59,.046,.044],[1.27,o+.042,f+_],"seat adjustment rail");r(e.darkSteel,[.39,.105,.34],[1.27,1.91,f],"seat suspension pan",.016),r(s,[.54,.15,.43],[1.33,2.02,f],"driver seat",.055);let m=r(s,[.16,.52,.42],[1.065,2.245,f],"seat back",.05);m.rotation.z=-.08;for(let _ of[-.19,.19]){let g=r(s,[.12,.48,.072],[1.14,2.235,f+_],"seat back bolster",.025);g.rotation.z=-.08,r(s,[.43,.1,.066],[1.36,2.09,f+_],"seat cushion bolster",.023)}for(let _ of[-.13,.13])ne(t,e.steel,[1.04,2.43,f+_],[1.04,2.56,f+_],.013).name="headrest support";r(s,[.14,.18,.3],[1.03,2.57,f],"driver head restraint",.035);for(let _ of[-.11,0,.11])ne(t,e.edge,[1.18,2.09,f+_],[1.51,2.09,f+_],.003).name="upholstery stitch channel";Ye(t,e.darkSteel,[[1.15,2.46,f+h*.16],[1.23,2.29,f],[1.33,2.12,f-h*.13],[1.52,2.08,f-h*.17]],.014,24).name="diagonal restraint",Ye(t,e.darkSteel,[[1.18,2.105,f+h*.19],[1.48,2.105,f+h*.14],[1.52,2.08,f-h*.17]],.012,20).name="lap restraint",r(e.red,[.035,.036,.04],[1.52,2.08,f-h*.17],"restraint buckle",.006),r(i,[1.51,.3,.038],[1.51,1.98,h*1.108],"door interior liner",.018),ne(t,e.darkSteel,[1.38,2.06,h*1.077],[1.74,2.06,h*1.077],.021).name="door interior grab pull"}let c=new we(new kt(.18,.018,10,48),e.rubber);c.rotation.y=Math.PI/2-.28,c.position.set(1.86,2.16,-.58),c.name="steering wheel",t.add(c);let p=new L(1,0,0).applyAxisAngle(new L(0,1,0),-.28),d=new L(1.86,2.16,-.58);for(let h=0;h<3;h++){let f=h*Math.PI*2/3,m=new L(0,Math.cos(f)*.155,Math.sin(f)*.155).applyAxisAngle(new L(0,1,0),-.28).add(d);ne(t,e.darkSteel,d.toArray(),m.toArray(),.013).name="steering spoke"}ne(t,e.darkSteel,d.toArray(),[2.08,2.04,-.58],.033).name="steering column",ne(t,e.edge,d.clone().addScaledVector(p,-.025).toArray(),d.clone().addScaledVector(p,.025).toArray(),.045).name="steering hub";for(let[h,f]of[[-.65,.06],[-.48,.052],[-.32,.033],[-.23,.033]])k(t,e.steel,f+.006,.009,[2.074,2.04,h],"x",f+.006,32).name="instrument bezel",k(t,e.rubber,f,.012,[2.064,2.04,h],"x",f,32).name="instrument dial",ne(t,e.lamp,[2.055,2.04,h],[2.055,2.04+f*.58,h+f*.3],.003).name="instrument needle";for(let h of[-.71,-.55,-.39]){ne(t,e.darkSteel,[2.24,o+.025,h],[2.05,o+.17,h],.014).name="pedal arm";let f=U(t,e.rubber,[.1,.025,.085],[2.05,o+.18,h],"driver pedal");f.rotation.z=-.5}r(i,[.42,.22,.2],[1.76,1.92,0],"centre console",.028),ne(t,e.darkSteel,[1.76,2.04,0],[1.72,2.18,0],.017).name="gear selector",r(e.rubber,[.06,.06,.065],[1.72,2.2,0],"selector grip",.015)}function id(n,e,t,i){if(n.userData.sharedPart==="WR-12")d1(n,e);else{let o=new St;o.name="driver controls",n.add(o);let a=t/2-1.4,l=n.userData.roof?1.53:1.86,c=e.edge.clone();c.color.set("#79816f"),c.metalness=0,c.roughness=.85,c.name="carrier moulded interior trim";let p=e.upholstery.clone();p.name="woven seat upholstery";let d=(g,u,x,M,v=.025)=>{let w=new we(new Jt(...u,3,v),g);return w.position.set(...x),w.name=M,w.castShadow=w.receiveShadow=!0,o.add(w),w},h=l-.12,f=new Dt;[[a+.23,h+.012],[a+.33,h+.012],[a+.33,l+.32],[a+.05,l+.32],[a+.02,l+.17],[a+.23,l+.17]].forEach(([g,u],x)=>x?f.lineTo(g,u):f.moveTo(g,u)),f.closePath();let m=new we(new Gt(f,{depth:1.68,steps:1,bevelEnabled:!0,bevelSize:.009,bevelThickness:.007,bevelSegments:2}),c);m.position.z=-.84,m.name="carrier supported dashboard cowl",m.castShadow=m.receiveShadow=!0,o.add(m),d(e.edge,[.035,.16,1.55],[a+.029,l+.24,0],"dashboard",.012),d(e.darkSteel,[.2,.055,.48],[a-.02,l+.34,-.43],"carrier instrument sun hood",.018);for(let g of[-1,1]){d(e.darkSteel,[.41,.105,.33],[a-.45,h+.075,g*.48],"carrier seat suspension pedestal",.018);for(let M of[h+.047,h+.076,h+.105])d(e.rubber,[.425,.01,.34],[a-.45,M,g*.48],"carrier seat suspension bellows",.004);d(p,[.49,.15,.44],[a-.43,l+.06,g*.48],"driver seat",.048);let u=d(p,[.115,.49,.4],[a-.67,l+.31,g*.48],"seat back",.032);u.rotation.z=-.1;for(let M of[-.17,.17]){d(p,[.41,.07,.065],[a-.42,l+.14,g*.48+M],"carrier cushion side bolster",.023);let v=d(p,[.105,.39,.065],[a-.615,l+.31,g*.48+M],"carrier back side bolster",.021);v.rotation.z=-.1}for(let M of[-.09,.09])Ye(o,e.edge,[[a-.13,l+.137,g*.48+M],[a-.43,l+.137,g*.48+M],[a-.64,l+.16,g*.48+M]],.0025,14).name="carrier cushion stitched channel";Ds(o,c,[[a-.71,l-.015],[a-.09,l-.015],[a-.09,l+.235],[a-.71,l+.235]],[],(M,v,w)=>[M,v,g*(i/2*(.75+(v-1.2)*.1/1.16)-.038-w)],.03,"carrier door interior liner");let x=g*(i/2*(.75+(l+.22-1.2)*.1/1.16)-.08);ne(o,e.darkSteel,[a-.59,l+.22,x],[a-.29,l+.22,x],.015).name="carrier interior door pull"}let _=new we(new kt(.18,.019,10,48),e.rubber);_.rotation.y=Math.PI/2,_.position.set(a-.15,l+.41,-.48),_.name="steering wheel",o.add(_);for(let g=0;g<3;g++){let u=g*Math.PI*2/3;ne(o,e.darkSteel,[a-.15,l+.41,-.48],[a-.15,l+.41+Math.cos(u)*.16,-.48+Math.sin(u)*.16],.012).name="steering spoke"}for(let g=0;g<4;g++)k(o,e.rubber,.034,.012,[a+.007,l+.21,-.57+g*.09],"x").name="instrument dial";U(o,e.edge,[1.5,.05,1.8],[a-.18,h,0],"cab floor");for(let g of[-1,1]){for(let u of[g*.48-.16,g*.48+.16])U(o,e.darkSteel,[.58,.045,.04],[a-.47,h+.04,u],"seat adjustment rail");d(p,[.13,.17,.32],[a-.67,l+.6,g*.48],"driver head restraint",.03);for(let u of[g*.48-.1,g*.48+.1])ne(o,e.steel,[a-.67,l+.5,u],[a-.67,l+.6,u],.013);Ye(o,e.darkSteel,[[a-.6,l+.47,g*.65],[a-.55,l+.31,g*.48],[a-.32,l+.147,g*.36],[a-.13,l+.137,g*.34]],.012,24).name="diagonal restraint",U(o,e.red,[.025,.035,.045],[a-.13,l+.14,g*.34],"restraint buckle"),Ye(o,e.darkSteel,[[a-.55,l+.147,g*.66],[a-.32,l+.147,g*.6],[a-.13,l+.137,g*.34]],.009,22).name="lap restraint"}ne(o,e.darkSteel,[a-.15,l+.41,-.48],[a+.07,l+.3,-.48],.026).name="steering column",k(o,e.edge,.04,.06,[a-.15,l+.41,-.48],"x",.04,24).name="steering hub";for(let g of[-.6,-.43,-.26]){ne(o,e.steel,[a+.2,h+.025,g],[a+.08,h+.13,g],.012).name="pedal arm";let u=U(o,e.rubber,[.09,.025,.07],[a+.08,h+.14,g],"driver pedal");u.rotation.z=-.45}U(o,e.edge,[.3,.16,.19],[a-.1,h+.1,.02],"gear selector console"),ne(o,e.darkSteel,[a-.1,h+.18,.02],[a-.14,l+.16,.02],.012).name="gear selector",k(o,e.rubber,.03,.045,[a-.14,l+.18,.02]).name="selector grip";for(let g=0;g<4;g++){let u=-.57+g*.09;k(o,e.steel,.037,.009,[a+.006,l+.21,u],"x",.037,32).name="instrument bezel",ne(o,e.lamp,[a-.001,l+.21,u],[a-.001,l+.23,u+.009],.0025).name="instrument needle"}}if(Nc(n,e),n.userData.sharedPart==="WR-12")return;let s=[];n.traverse(o=>{o.name==="wheel guard"&&s.push(o)});for(let o of s){let a=new Dt;for(let l=0;l<=12;l++){let c=l*Math.PI/12,p=Math.cos(c)*.7,d=Math.sin(c)*.7;l?a.lineTo(p,d):a.moveTo(p,d)}for(let l=12;l>=0;l--){let c=l*Math.PI/12;a.lineTo(Math.cos(c)*.64,Math.sin(c)*.64)}a.closePath(),o.geometry.dispose(),o.geometry=new Gt(a,{depth:.46,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.009,bevelThickness:.009}),o.position.y=.62,o.position.z-=.23}if(!["TROOP","COMMAND","RECCE"].includes(n.name))for(let o of[-1,1]){let a=o*i*.45;for(let l of[-t*.38,-t*.22])U(n,e.edge,[.028,.12,.028],[l,1.75,a],"panel hinge"),k(n,e.steel,.011,.07,[l,1.75,a+o*.024],"y",.011,12);for(let l=0;l<6;l++)U(n,e.darkSteel,[.3,.02,.03],[-t*.27,2.08+l*.035,a+o*.018],"louvred cooling intake");ne(n,e.darkSteel,[t*.36,1.38,a],[t*.36,1.95,a],.016)}ne(n,e.darkSteel,[-t*.34,.8,0],[t*.31,.8,0],.06),U(n,e.edge,[t*.56,.065,i*.48],[0,.9,0],"belly protection"),k(n,e.darkSteel,.11,.85,[-t*.22,1.18,-i*.28],"x"),Ye(n,e.darkSteel,[[-t*.22,1.18,-i*.28],[-t*.38,1.18,-i*.28],[-t*.42,1.37,-i*.37]],.034);let r=-t/2;for(let o of[-1,1])Ye(n,e.darkSteel,[[r+.7,1.4,o*i*.43],[r+.7,2.1,o*i*.46],[r+1.3,2.13,o*i*.46]],.024),U(n,e.edge,[.4,.2,.42],[r+.55,1.07,o*i*.39],"mud flap");for(let o=0;o<4;o++)ne(n,e.steel,[r+.1,1.15+o*.18,-.3],[r+.1,1.15+o*.18,.3],.014)}function Nc(n,e){let t=[];n.traverse(i=>{i.name==="run-flat wheel"&&t.push(i)});for(let i of t){if(i.userData.detailed)continue;i.userData.detailed=!0;let s=i.children[0];for(let l of[...i.children].slice(1))l.removeFromParent(),l.geometry?.dispose();s.geometry.dispose();let r=[[.315,-.165],[.33,-.185],[.4,-.211],[.48,-.213],[.54,-.19],[.574,-.152],[.588,-.096],[.59,-.04],[.59,.04],[.588,.096],[.574,.152],[.54,.19],[.48,.213],[.4,.211],[.33,.185],[.315,.165],[.315,-.165]].map(([l,c])=>new ce(l,c));s.geometry=new wn(r,64),s.rotation.x=Math.PI/2,s.name="rounded tyre carcass";let o=new Dt;o.moveTo(-.055,-.071),o.lineTo(.018,-.071),o.lineTo(.059,-.035),o.lineTo(.043,.071),o.lineTo(-.027,.071),o.lineTo(-.063,.025),o.closePath();let a=new Gt(o,{depth:.03,steps:1,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:1});a.rotateX(Math.PI/2);for(let l=0;l<32;l++)for(let c of[-1,1]){let p=l*Math.PI/16+c*.028,d=new we(a,e.rubber);d.position.set(Math.sin(p)*.607,Math.cos(p)*.607,c*.091),d.rotation.z=-p,d.rotation.y=c*.24,d.name="directional tread lug",d.castShadow=!0,d.receiveShadow=!0,i.add(d)}for(let l of[-1,1]){let c=[[.11,.08],[.15,.095],[.23,.13],[.31,.173],[.325,.19],[.334,.184],[.331,.164],[.307,.15],[.236,.109],[.15,.071],[.11,.068]].map(([_,g])=>new ce(_,g)),p=new we(new wn(c,48),e.paint);p.rotation.x=l*Math.PI/2,p.name="dished wheel rim",i.add(p);let d=new we(new kt(.322,.012,8,48),e.darkSteel);d.position.z=l*.184,d.name="rim bead retaining lip",i.add(d),k(i,e.darkSteel,.11,.08,[0,0,l*.112],"z",.11,40).name="wheel hub shoulder",k(i,e.paint,.085,.07,[0,0,l*.16],"z",.085,40).name="hub cap";for(let _=0;_<10;_++){let g=_*Math.PI/5;k(i,e.steel,.015,.021,[Math.sin(g)*.15,Math.cos(g)*.15,l*.12],"z",.015,6).name="hub fastener"}let h=l===-Math.sign(i.position.z),f=k(i,e.steel,.265,.015,[0,0,l*.066],"z",.265,48);f.name=h?"ventilated brake rotor":"rim inner web",h&&U(i,e.darkSteel,[.12,.21,.08],[.23,0,l*.065],"brake caliper"),k(i,e.steel,.012,.025,[.12,.28,l*.18],"z",.012,8).name="tyre valve";let m=new we(new kt(.47,.0035,6,48),e.rubber);m.position.z=l*.214,m.name="moulded sidewall seam",i.add(m)}}}function f1(n,e,t,i){if(t==="CAP"){let s=[];n.traverse(r=>{r.name==="crew seat cushion"&&s.push(r)});for(let r of s){let{x:o,z:a}=r.position;U(n,e.rubber,[.12,.15,.28],[o-.19,1.06,a],"head restraint");for(let l of[-1,1])ne(n,e.darkSteel,[o-.16,.73,a+l*.25],[o+.18,.73,a+l*.25],.021),k(n,e.steel,.023,.025,[o-.18,.28,a+l*.17],"z");U(n,e.amber,[.035,.045,.028],[o+.13,.51,a+.22],"belt buckle");for(let l=0;l<3;l++)U(n,e.edge,[.31,.005,.009],[o,.56,a+(l-1)*.08],"seat seam")}}else if(t==="FP"){U(n,e.darkSteel,[.39,.12,.14],[.12,.73,0],"breech cover");for(let s=0;s<7;s++)U(n,e.edge,[.018,.04,.13],[-.06+s*.045,.81,0],"receiver cooling fin");for(let s of[-1,1])U(n,e.paint,[.055,.27,.3],[-.1,.55,s*.31],"mount cheek"),k(n,e.steel,.045,.038,[-.1,.57,s*.35],"z",.045,32);for(let s=0;s<8;s++)k(n,e.amber,.018,.08,[-.24+s*.034,.58,-.4],"y",.013,12);Ye(n,e.rubber,[[-.23,.38,-.37],[-.36,.48,-.3],[-.35,.64,-.17],[-.1,.72,-.11]],.018,24);for(let s=0;s<6;s++)U(n,e.steel,[.033,.007,.017],[.18+s*.038,.8,0],"accessory rail")}else if(t==="COM"){let s=i===1?3:i===6?2:1;for(let r=0;r<s;r++){let o=(r-(s-1)/2)*.4;for(let a of[-.13,.13])for(let l of[.12,.47])k(n,e.steel,.008,.012,[o+a,l,.127],"z",.008,6);for(let a=0;a<4;a++)k(n,e.steel,.013,.012,[o-.1+a*.063,.1,.13],"z"),k(n,e.darkSteel,.009,.016,[o-.1+a*.063,.1,.14],"z");U(n,e.darkSteel,[.04,.18,.023],[o+.145,.3,.126],"grip")}}else if(t==="SA"){let s=i===3?1.75:.43;for(let r of[-.105,.105]){let o=new we(new kt(.068,.008,8,40),e.darkSteel);o.position.set(r,s,.198),n.add(o),U(n,e.edge,[.19,.025,.18],[r,s+.14,.065],"lens sunshade");for(let a of[-.09,.09])k(n,e.steel,.006,.012,[r+a,s+.09,.123],"z",.006,6)}}else if(t==="ACC"&&[0,5].includes(i)){for(let r of[-.42,.42]){U(n,e.edge,[.09,.08,.46],[r,.14,0],"gusseted pedestal");for(let o of[-.19,.19])k(n,e.steel,.011,.02,[r,.19,o],"y",.011,6),Qa(n,e.paint,[[r-.085,.085,o],[r+.085,.085,o],[r,.26,o]]).name="bearing pedestal gusset"}k(n,e.paint,.145,.15,[-.57,.34,0],"x",.145,40).name="reduction gearcase",k(n,e.darkSteel,.155,.026,[-.66,.34,0],"x",.155,40).name="gearcase joint",jn(n,e.steel,[-.678,.34,0],.123,8,"x",.009);for(let r=0;r<6;r++)k(n,e.darkSteel,.086,.012,[-.7-r*.021,.34,0],"x",.086,32).name="hydraulic motor cooling ring";k(n,e.paint,.09,.025,[-.835,.34,0],"x",.09,32).name="motor end cover";for(let r of[.21,.46])ne(n,e.darkSteel,[-.42,r,-.235],[.42,r,-.235],.018).name="rear frame tie rod";U(n,e.paint,[.21,.065,.12],[-.23,.602,.12],"hydraulic valve block");for(let r of[-.3,-.16])ne(n,e.darkSteel,[-.42,.49,.12],[r,.57,.12],.013).name="valve block support",k(n,e.steel,.017,.03,[r,.65,.12]).name="valve port";for(let[r,o]of[[-.3,-.74],[-.16,-.79]])Ye(n,e.rubber,[[r,.65,.12],[r,.68,.12],[-.52,.69,.1],[o,.52,.065],[o,.38,.065]],.013,40).name="motor hydraulic supply";k(n,e.steel,.02,.055,[0,.235,.455]).name="rope ferrule";let s=new we(new kt(.035,.007,8,28),e.steel);s.rotation.y=Math.PI/2,s.position.set(0,.22,.46),s.name="rope eye thimble",n.add(s),k(n,e.darkSteel,.027,.025,[-.068,.122,.49],"z",.027,20).name="hook latch pivot"}}var p1=Object.freeze(["COMBAT","RECCE","TROOP","COMMAND","RECOVERY","MINE"]),rd=Object.freeze([...["ACC","CAP","COM","FP","MOB","PRO","SA"].flatMap(n=>"ABCDEFG".split("").map(e=>`${n}-${e}`)),..."ABCDEFGHIJKLMNOPQRSTU".split("").map(n=>`SE-${n}`),"TRAIN-CAP"]);function Mt(n){let e=new St;return e.name=n,e}function tl(n,e,t,i,s=!1){let o=Mt("supported crew seat");o.position.set(t,.4,i),n.add(o);let a=e.upholstery.clone();a.name="woven seat upholstery";let l=(d,h,f,m,_)=>{let g=new we(new Jt(...h,3,m),d);return g.position.set(...f),g.name=_,o.add(g),g};if(s){U(o,e.darkSteel,[.48,.055,.36],[.01,.148,0],"crew seat floor mounting cassette");for(let d of[-1,1]){U(o,e.edge,[.49,.035,.07],[.01,.128,d*.145],"crew seat bolted floor rail");for(let h of[-.17,.19])k(o,e.steel,.012,.023,[h,.157,d*.145],"y",.012,6).name="seat rail retaining fastener";U(o,e.edge,[.36,.18,.035],[0,.25,d*.145],"seat suspension side cheek");for(let h of[-.13,.13])k(o,e.steel,.021,.044,[h,.25,d*.165],"z",.021,12).name="suspension pivot"}U(o,e.darkSteel,[.3,.14,.22],[0,.25,0],"seat suspension bellows");for(let d of[.197,.232,.267,.302])U(o,e.rubber,[.325,.018,.25],[0,d,0],"suspension bellows convolution");U(o,e.edge,[.41,.047,.33],[0,.338,0],"suspension upper cradle");for(let d of[-1,1])U(o,e.edge,[.075,.28,.055],[-.22,.515,d*.135],"connected seat back support"),k(o,e.steel,.038,.052,[-.21,.4,d*.19],"z",.038,20).name="seat back recline housing"}else for(let d of[-1,1]){U(o,e.darkSteel,[.49,.035,.035],[.01,.15,d*.15],"seat adjustment rail");for(let h of[-.16,.19])U(o,e.edge,[.065,.04,.09],[h,.105,d*.15],"seat floor foot"),k(o,e.steel,.009,.015,[h,.134,d*.15],"y",.009,6),ne(o,e.steel,[h,.17,d*.15],[h-.04,.35,d*.15],.018)}U(o,e.edge,[.44,.045,.4],[0,.37,0],"seat suspension pan"),l(a,[.43,.11,.36],[.025,.45,0],.045,"crew seat cushion");for(let d of[-1,1]){let h=new we(new sr(.038,.31,6,14),a);h.rotation.z=Math.PI/2,h.position.set(.015,.505,d*.17),h.name="cushion side bolster",o.add(h)}let c=l(e.edge,[.074,.49,.38],[-.215,.77,0],.025,"seat back shell");c.rotation.z=.12;let p=l(a,[.095,.46,.32],[-.16,.78,0],.035,"contoured back cushion");if(p.rotation.z=.12,s){let d=a.clone();d.color.multiplyScalar(.82),d.roughness=.93,d.name="crew seat woven center insert";let h=l(d,[.018,.335,.205],[-.108,.782,0],.008,"crew seat contoured back insert");h.rotation.z=.12,l(d,[.295,.018,.235],[.045,.508,0],.008,"crew seat cushion center insert");for(let f of[-1,1])Ye(o,e.darkSteel,[[-.08,.632,f*.065],[-.098,.782,f*.065],[-.117,.932,f*.065]],.0018,18).name="seat back stitched channel",Ye(o,e.darkSteel,[[-.087,.52,f*.075],[.045,.52,f*.075],[.175,.52,f*.075]],.0018,18).name="seat cushion stitched channel"}for(let d of[-1,1]){let h=l(a,[.1,.39,.075],[-.135,.77,d*.16],.03,"back side bolster");h.rotation.z=.12,ne(o,e.steel,[-.225,.99,d*.09],[-.225,1.08,d*.09],.009)}l(a,[.115,.15,.28],[-.225,1.085,0],.04,"adjustable head restraint");for(let d of[.66,.82])Ye(o,e.edge,[[-.111-(d-.78)*.12,d,-.11],[-.108-(d-.78)*.12,d,0],[-.111-(d-.78)*.12,d,.11]],.003,16).name="back upholstery seam";Ye(o,e.darkSteel,[[-.14,.98,-.125],[-.095,.82,-.055],[-.075,.65,.05],[.005,.518,.1],[.1,.513,.115]],.012,24),Ye(o,e.darkSteel,[[.08,.515,-.19],[.1,.518,0],[.08,.515,.19]],.013,20),l(e.steel,[.035,.024,.042],[.1,.526,.065],.006,"restraint buckle"),U(o,e.red,[.018,.007,.025],[.105,.542,.065],"restraint release");for(let d of[-1,1])ne(o,e.edge,[-.14,.38,d*.21],[-.14,.65,d*.21],.014),l(a,[.29,.05,.055],[.005,.65,d*.225],.018,"supported armrest");for(let d of o.children)d.position.y-=.4;return o}function m1(n,e){let t=Mt("crew bay"),i=[6,6,4,8,5,5,4][e],s=[2.65,3.05,2.05,3.25,2.2,2.5,2.1][e],r=e===6?1.26:1.47,o=Math.ceil(i/2),a=(s-.65)/o,l=s/2,c=r/2,p=e===4||e===6;U(t,n.paint,[s,.1,r],[0,.055,0],"crew module floor");for(let d of[-1,1])U(t,n.edge,[s-.12,.055,.075],[0,.105,d*(c-.06)],"floor edge rail"),U(t,n.darkSteel,[s-.12,.06,.08],[0,.035,d*(c-.13)],"module lower mounting rail");for(let d of[-l+.15,l-.15])for(let h of[-1,1])U(t,n.edge,[.19,.055,.16],[d,.023,h*(c-.1)],"module chassis mounting foot"),k(t,n.steel,.015,.025,[d,.065,h*(c-.1)],"y",.015,6);for(let d=0;d<o;d++){let h=(d-(o-1)/2)*a;U(t,n.darkSteel,[.065,.04,r-.16],[h,.104,0],"seat row crossmember")}for(let d=0;d<i;d++){let h=Math.floor(d/2),f=d===i-1&&i%2;tl(t,n,(h-(o-1)/2)*a,f?0:(d%2?1:-1)*r*.25)}if(e!==4){for(let d of[-l+.05,l-.05]){let h=[[-c,.12],[c,.12],[c,1.12],[c-.13,1.3],[-c+.13,1.3],[-c,1.12]],f=ct(-c+.07,.18,c-.07,1.23,.065);Ze(t,n.paint,h,[f],(m,_,g)=>[d+g,_,m]).name="hull shell";for(let m of[-1,1])ne(t,n.steel,[d,.24,m*(c-.04)],[d,.6,m*(c-.04)],.015).name="boarding grab handle"}for(let d of[-1,1])if(U(t,n.edge,[s-.12,.065,.075],[0,1.28,d*(c-.1)],"roof perimeter rail"),p)ne(t,n.steel,[-l+.05,.56,d*c],[l-.05,.56,d*c],.019).name="open module side rail";else{let h=e===5?1.1:.62,f=[[-l,.13],[l,.13],[l-.06,h],[-l+.06,h]],m=[];if(e===5)for(let _ of[-s*.25,s*.25])m.push(ct(_-.23,.79,_+.23,1,.035));if(Ze(t,n.paint,f,m,(_,g,u)=>[_,g,d*(c-u)]).name="hull shell",e===5)for(let _ of[-s*.25,s*.25])U(t,n.rubber,[.48,.25,.016],[_,.895,d*(c+.008)],"window gasket"),U(t,n.glass,[.43,.2,.017],[_,.895,d*(c+.018)],"protected crew glazing");for(let _ of[-l+.12,l-.12])for(let g of[.22,h-.08])k(t,n.steel,.009,.018,[_,g,d*(c+.028)],"z",.009,6)}for(let d of[-l+.17,l-.17])U(t,n.edge,[.065,.055,r-.14],[d,1.28,0],"roof crossmember");if(!p){for(let d of[-1,1])U(t,n.paint,[s-.16,.047,r*.22],[0,1.31,d*r*.34],"hull shell");U(t,n.paint,[s-.16,.045,r*.3],[0,1.32,0],"hull shell")}}else for(let d of[-1,1])for(let h of[-l+.15,l-.15])U(t,n.steel,[.08,.07,.075],[h,.13,d*(c-.1)],"removable pallet latch"),ne(t,n.darkSteel,[h-.035,.18,d*(c-.1)],[h+.035,.18,d*(c-.1)],.012);return U(t,n.edge,[.15,.05,r-.18],[l+.03,.09,0],"boarding threshold"),t}function g1(n,e,t,i,s="x",r="cast transmission casing"){let o=new wn(t.map(([l,c])=>new ce(l,c)),40),a=new we(o,e);return a.position.set(...i),a.rotation[s==="x"?"z":"x"]=Math.PI/2,a.name=r,n.add(a),a}function od(n,e){let t=Mt("inline diesel power pack"),i=e===5,s=n.castSteel||n.darkSteel,r=n.pressedSteel||n.steel,o=(u,x,M,v,w)=>{let T=new we(new Jt(...x,3,v),u);return T.position.set(...M),T.name=w,T.castShadow=T.receiveShadow=!0,t.add(T),T},a=(u,x,M,v,w,T=[])=>{let I=new Dt;u.forEach(([E,R],P)=>P?I.lineTo(E,R):I.moveTo(E,R)),I.closePath();for(let E of T){let R=new en;E.forEach(([P,F],B)=>B?R.lineTo(P,F):R.moveTo(P,F)),R.closePath(),I.holes.push(R)}let y=new Gt(I,{depth:x,steps:1,bevelEnabled:!0,bevelSize:.009,bevelThickness:.007,bevelSegments:3}),b=y.attributes.position;for(let E=0;E<b.count;E++)b.setXYZ(E,M+b.getZ(E),b.getY(E),b.getX(E));y.computeVertexNormals();let C=v.clone();C.side=At;let D=new we(y,C);return D.name=w,D.castShadow=D.receiveShadow=!0,t.add(D),D},l=(u,x,M,v)=>{let w=Ye(t,u,x,M,32);return w.name=v,w},c=(u,x,M,v="z",w=.042)=>{k(t,s,w,.02,[u,x,M],v,w,24).name="manifold seated port flange"};for(let u of[-.38,.38])U(t,n.edge,[2.17,.09,.085],[-.2,.11,u],"power pack skid rail");for(let u of[-1.08,.77])U(t,n.edge,[.1,.07,e===4?1.35:.85],[u,.13,e===4?-.24:0],"skid crossmember");a([[-.22,.31],[-.26,.4],[-.25,.58],[-.205,.7],[.205,.7],[.25,.58],[.26,.4],[.22,.31]],.96,-.48,n.paint,"cast crankcase with tapered shoulders",[[[-.18,.345],[.18,.345],[.21,.41],[.2,.58],[.165,.677],[-.165,.677],[-.2,.58],[-.21,.41]]]),a([[-.215,.315],[-.215,.265],[-.145,.195],[.145,.195],[.215,.265],[.215,.315]],.85,-.425,s,"pressed deep oil sump",[[[-.185,.298],[.185,.298],[.128,.215],[-.128,.215]]]),o(r,[.91,.025,.46],[0,.317,0],.01,"continuous sump sealing flange"),k(t,n.steel,.018,.026,[.27,.198,0],"y",.018,6).name="seated sump drain plug",o(n.paint,[1,.175,.49],[0,.7875,0],.025,"cast cylinder head with port band"),o(n.darkSteel,[1.018,.019,.455],[0,.881,0],.006,"rocker cover continuous gasket"),o(n.edge,[.99,.126,.438],[0,.948,0],.03,"formed crowned rocker cover");for(let u of[-1,1])o(n.edge,[.92,.019,.02],[0,.976,u*.204],.007,"rocker cover pressed perimeter return");for(let u of[-.4,-.24,-.08,.08,.24,.4])o(n.edge,[.055,.013,.31],[u,1.011,0],.006,"rocker cover pressed transverse stiffener");k(t,n.darkSteel,.037,.029,[.29,1.024,0],"y",.037,24).name="rocker cover seated oil filler cap";for(let u of[-.31,.31]){let x=new we(new kt(.024,.007,8,20),n.steel);x.position.set(u,.983,.216),x.name="head lifting eye seated tab",t.add(x),U(t,n.edge,[.055,.035,.02],[u,.955,.211],"head lifting eye foot")}for(let u of[-.4,-.24,-.08,.08,.24,.4]){for(let x of[-1,1]){a([[x*.237,.365],[x*.272,.405],[x*.257,.62],[x*.218,.69],[x*.211,.69],[x*.237,.4]],.032,u-.016,n.paint,"cast crankcase buttress"),o(s,[.122,.16,.024],[u,.535,x*.254],.018,"recessed crankcase service cover");for(let M of[.48,.59])k(t,n.steel,.007,.012,[u,M,x*.272],"z",.007,6).name="service cover captive fastener";k(t,n.darkSteel,.009,.022,[u,.902,x*.19],"y",.009,6).name="rocker cover seated fastener"}c(u,.79,.255),c(u,.8,-.255),l(s,[[u,.79,.25],[u,.775,.305],[u+.028,.735,.375]],.033,"exhaust branch into collector"),l(n.paint,[[u,.8,-.25],[u,.815,-.3],[u,.825,-.345]],.036,"intake runner into plenum")}o(n.paint,[.98,.115,.105],[0,.835,-.355],.045,"continuous intake plenum"),l(s,[[-.44,.735,.375],[0,.735,.375],[.43,.735,.375]],.046,"continuous cast exhaust collector");let p=(u,x,M)=>{k(t,x,.104,.09,[u,.755,.49],"x",.117,32).name=M+" backing";let v=[];for(let w=0;w<=40;w++){let T=w/40*Math.PI*2,I=.094+.026*w/40;v.push([u,.755+Math.cos(T)*I,.49+Math.sin(T)*I])}l(x,v,.037,M+" scroll")};p(-.205,s,"turbine housing"),p(-.365,r,"compressor housing"),k(t,n.steel,.057,.12,[-.285,.755,.49],"x",.057,24).name="turbo centre bearing",l(s,[[-.06,.735,.375],[-.16,.79,.398],[-.205,.848,.46]],.043,"collector to turbine inlet"),l(s,[[-.205,.76,.612],[-.205,.91,.65],[-.205,1.075,.65]],.046,"supported exhaust riser"),k(t,n.steel,.053,.012,[-.205,1.052,.65],"y",.053,24).name="exhaust riser seated clamp",ne(t,n.edge,[-.205,.89,.65],[-.205,.85,.25],.013).name="exhaust riser support bracket",l(n.steel,[[-.365,.895,.49],[-.1,1.1,.44],[.32,1.09,.3],[.4,1.02,-.16],[.35,.835,-.355]],.055,"compressor delivery to intake plenum");for(let[u,x,M]of[[-.1,1.1,.44],[.32,1.09,.3]])k(t,n.darkSteel,.063,.043,[u,x,M],"x",.063,24).name="charge pipe coupling";k(t,n.darkSteel,.122,.44,[-.085,1.18,-.39],"x",.122,32).name="air cleaner cylindrical shell";for(let u of[-.315,.145])k(t,n.edge,.13,.018,[u,1.18,-.39],"x",.13,32).name="air cleaner retained end cap";for(let u of[-.22,.055])k(t,n.steel,.125,.018,[u,1.18,-.39],"x",.125,32).name="air cleaner mounting band",ne(t,n.edge,[u,1.07,-.39],[u,.87,-.355],.018).name="air cleaner plenum bracket";l(n.rubber,[[-.315,1.18,-.39],[-.59,1.16,-.37],[-.61,.96,.23],[-.52,.755,.49],[-.412,.755,.49]],.061,"air cleaner outlet to compressor inlet"),l(n.steel,[[-.275,.745,.49],[-.27,.56,.34],[-.27,.39,.24]],.01,"turbo oil return into crankcase"),g1(t,s,[[0,-.025],[.23,-.025],[.275,0],[.28,.09],[.26,.17],[.225,.24],[0,.24]],[-.48,.425,0],"x","cast flywheel and transmission casing"),o(s,[.405,.36,.4],[-.915,.505,0],.045,"transmission main gear case"),o(s,[.37,.1,.32],[-.895,.313,0],.025,"transmission lower oil pan"),o(r,[.33,.024,.34],[-.905,.699,0],.009,"transmission bolted top service closure");for(let u of[-1,1]){o(s,[.33,.235,.026],[-.915,.507,u*.207],.025,"transmission removable side cover");for(let x of[-1.065,-.905,-.765])for(let M of[.41,.61])k(t,n.steel,.009,.023,[x,M,u*.224],"z",.009,6).name="transmission side cover seated fastener";for(let x of[.37,.445,.535,.63])U(t,s,[.36,.017,.026],[-.915,x,u*.197],"transmission longitudinal casting rib")}for(let u of[-1.085,-.965,-.845,-.745]){U(t,s,[.02,.34,.028],[u,.505,-.192],"transmission vertical casting web"),U(t,s,[.02,.34,.028],[u,.505,.192],"transmission vertical casting web");for(let x of[-1,1])k(t,n.steel,.008,.017,[u,.714,x*.125],"y",.008,6).name="transmission top cover seated fastener"}for(let u of[-.515,-.715,-1.115]){let x=u>-.74?.425:.51;k(t,r,u>-.74?.275:.17,.02,[u,x,0],"x",u>-.74?.275:.17,40).name="transmission machined split flange",jn(t,n.steel,[u-.015,x,0],u>-.74?.245:.145,8,"x",.009)}k(t,s,.108,.09,[-1.14,.51,0],"x",.108,32).name="transmission rear output bearing housing",k(t,n.steel,.083,.08,[-1.19,.51,0],"x").name="transmission output coupling",k(t,n.steel,.012,.017,[-.89,.708,0],"y",.012,6).name="transmission service filler plug",o(n.darkSteel,[.085,.82,.69],[.8,.665,0],.008,"radiator dark fin substrate");for(let u of[-.389,.389])o(r,[.135,.88,.075],[.8,.665,u],.018,"radiator formed side tank");for(let u of[.215,1.115])o(r,[.135,.08,.84],[.8,u,0],.017,"radiator folded header");for(let u=0;u<36;u++)U(t,r,[.012,.8,.005],[.849,.665,-.333+u*.019],"radiator vertical cooling passage");for(let u=0;u<28;u++)U(t,s,[.008,.005,.68],[.856,.273+u*.029,0],"radiator transverse fin fold");for(let u of[-.388,.388]){U(t,n.edge,[.17,.07,.13],[.8,.178,u],"radiator bolted skid foot");for(let x of[.3,1.04])k(t,n.steel,.01,.019,[.879,x,u],"x",.01,6).name="radiator frame fastener"}let d=new we(new kt(.291,.019,8,48),n.darkSteel);d.rotation.y=Math.PI/2,d.position.set(.691,.665,0),d.name="open circular cooling fan shroud",t.add(d);for(let u of[-1,1])ne(t,n.darkSteel,[.7,.665,u*.291],[.754,.665,u*.34],.023).name="shroud to radiator support";k(t,n.darkSteel,.063,.1,[.651,.665,0],"x",.063,32).name="cooling fan driven hub";for(let u=0;u<7;u++){let x=u*Math.PI*2/7,M=new Dt;M.moveTo(.045,-.025),M.quadraticCurveTo(.17,-.055,.267,-.01),M.lineTo(.26,.04),M.quadraticCurveTo(.16,.023,.045,.025),M.closePath();let v=new Gt(M,{depth:.013,bevelEnabled:!0,bevelSize:.003,bevelThickness:.002,bevelSegments:2}),w=v.attributes.position;for(let y=0;y<w.count;y++){let b=w.getX(y),C=w.getY(y),D=w.getZ(y);w.setXYZ(y,.647+D+b*.035,.665+Math.cos(x)*b-Math.sin(x)*C,Math.sin(x)*b+Math.cos(x)*C)}v.computeVertexNormals();let T=n.darkSteel.clone();T.side=At;let I=new we(v,T);I.name="swept cooling fan blade",I.castShadow=!0,t.add(I)}o(n.paint,[.075,.38,.34],[.516,.515,0],.035,"front timing gear housing"),ne(t,s,[.516,.665,0],[.652,.665,0],.041).name="water pump and fan shaft",l(n.rubber,[[.43,.84,.19],[.59,.96,.29],[.64,.965,.389],[.72,.965,.389],[.8,.965,.389]],.04,"upper coolant hose seated into side tank"),l(n.rubber,[[.48,.4,.16],[.6,.26,.29],[.64,.285,.389],[.72,.285,.389],[.8,.285,.389]],.037,"lower coolant hose seated into side tank");for(let u of[.965,.285])k(t,r,.047,.09,[.7275,u,.389],"x",.047,24).name="radiator coolant inlet neck",k(t,n.steel,.049,.024,[.705,u,.389],"x",.049,24).name="coolant hose seated clamp";k(t,r,.08,.135,[.493,.462,-.245],"x",.08,28).name="alternator ventilated body";for(let u=0;u<10;u++){let x=u*Math.PI/5;ne(t,s,[.44,.462+Math.cos(x)*.078,-.245+Math.sin(x)*.078],[.546,.462+Math.cos(x)*.078,-.245+Math.sin(x)*.078],.008).name="alternator longitudinal cooling rib"}U(t,n.edge,[.16,.05,.16],[.435,.365,-.205],"alternator seated mounting bracket");let h=(u,x,M)=>{k(t,n.darkSteel,M,.029,[.575,u,x],"x",M,32).name="accessory drive pulley",k(t,n.steel,M*.34,.034,[.579,u,x],"x",M*.34,24).name="pulley seated hub"};ne(t,s,[.54,.425,0],[.58,.425,0],.043).name="crank pulley shaft into timing housing",h(.425,0,.106),h(.665,0,.075),h(.462,-.245,.064),l(n.rubber,[[.595,.322,0],[.595,.34,-.195],[.595,.43,-.31],[.595,.515,-.272],[.595,.739,-.024],[.595,.714,.056],[.595,.431,.106],[.595,.322,0]],.009,"continuous accessory drive belt"),o(s,[.16,.09,.17],[.11,.57,-.285],.02,"oil filter connected housing"),k(t,n.lamp,.059,.19,[.11,.434,-.285],"y",.059,28).name="replaceable oil filter canister",k(t,n.steel,.062,.017,[.11,.529,-.285],"y",.062,24).name="oil filter sealing rim",ne(t,n.steel,[.34,.39,.24],[.34,.68,.32],.005).name="oil dipstick seated guide",k(t,n.amber,.02,.009,[.34,.69,.325],"z",.02,16).name="dipstick service handle";for(let u of[-.34,.31])for(let x of[-1,1])U(t,n.edge,[.14,.03,.13],[u,.166,x*.38],"engine skid mounting shoe"),k(t,n.rubber,.048,.072,[u,.217,x*.38],"y",.048,24).name="engine mounting isolator",a([[x*.235,.36],[x*.42,.258],[x*.42,.25],[x*.33,.25],[x*.235,.29]],.115,u-.0575,n.paint,"cast engine mounting ear"),k(t,n.steel,.009,.043,[u,.266,x*.38],"y",.009,6).name="engine mount seated retaining bolt";let f=t.children.length;k(t,n.steel,.023,1.025,[0,.425,0],"x",.023,32).name="engine crankshaft main axis";for(let u=0;u<6;u++){let x=-.4+u*.16,M=[0,Math.PI*2/3,Math.PI*4/3,Math.PI*4/3,Math.PI*2/3,0][u],v=.425+Math.cos(M)*.031,w=Math.sin(M)*.031,T=.605+Math.cos(M)*.031,I=new Dt;I.absarc(0,0,.065,0,Math.PI*2,!1);let y=new en;y.absarc(0,0,.058,0,Math.PI*2,!0),I.holes.push(y);let b=new Gt(I,{depth:.255,steps:1,bevelEnabled:!1,curveSegments:24}),C=b.attributes.position;for(let R=0;R<C.count;R++)C.setXYZ(R,x+C.getX(R),.448+C.getZ(R),C.getY(R));b.computeVertexNormals();let D=r.clone();D.side=At;let E=new we(b,D);E.name="engine cylinder liner",E.userData.inspectionKey="engine:block",t.add(E),k(t,n.steel,.054,.066,[x,T,0],"y",.054,32).name="engine piston crown and skirt";for(let R of[T+.018,T+.027])k(t,n.darkSteel,.055,.004,[x,R,0],"y",.055,32).name="piston compression ring";k(t,n.steel,.014,.102,[x,T-.014,0],"z",.014,24).name="piston seated wrist pin",ne(t,r,[x,v,w],[x,T-.014,0],.013).name="engine connecting rod",k(t,n.steel,.019,.105,[x,v,w],"x",.019,24).name="crankshaft offset crankpin";for(let R of[-.055,.055])ne(t,s,[x+R,.425,0],[x+R,v,w],.035).name="crankshaft connected web",k(t,s,.049,.023,[x+R,.425-.016*Math.cos(M),-.016*Math.sin(M)],"x",.049,24).name="crankshaft counterweight"}for(let u of[-.48,-.32,-.16,0,.16,.32,.48])k(t,r,.036,.03,[u,.425,0],"x",.036,24).name="crankshaft main bearing journal",U(t,s,[.035,.055,.17],[u,.3815,0],"crankshaft bearing cap");k(t,n.steel,.215,.035,[-.525,.425,0],"x",.215,40).name="engine crankshaft seated flywheel",k(t,n.steel,.024,.59,[-.8175,.425,0],"x",.024,24).name="transmission connected input shaft",k(t,n.steel,.027,.405,[-.9875,.51,0],"x",.027,24).name="transmission connected output shaft";for(let[u,x]of[[.425,0],[.51,Math.PI/16]]){k(t,r,.034,.055,[-.885,u,0],"x",.034,32).name="transmission illustrative meshing gear";for(let M=0;M<16;M++){let v=M*Math.PI/8+x,w=U(t,r,[.055,.014,.011],[-.885,u+Math.cos(v)*.039,Math.sin(v)*.039],"transmission gear seated tooth");w.rotation.x=v}}for(let u of t.children.slice(f))u.userData.inspectionKey??="engine:rotating";let m=t.children.length;ne(t,n.steel,[-.47,.933,0],[.47,.933,0],.012).name="head supported rocker shaft";for(let u of[-.4,-.24,-.08,.08,.24,.4]){U(t,s,[.028,.041,.054],[u,.912,0],"rocker shaft seated pedestal");for(let x of[-1,1]){k(t,n.steel,.007,.16,[u,.841,x*.08],"y",.007,16).name="head valve stem",k(t,n.steel,.025,.009,[u,.765,x*.08],"y",.025,24).name="head valve seated disc";let M=[];for(let v=0;v<=40;v++){let w=v/40*Math.PI*10;M.push([u+Math.cos(w)*.013,.866+v/40*.04,x*.08+Math.sin(w)*.013])}l(n.darkSteel,M,.003,"valve retained compression spring"),ne(t,r,[u,.934,0],[u,.923,x*.08],.012).name="rocker arm on shaft and valve"}}for(let u of t.children.slice(m))u.userData.inspectionKey="engine:head";l(n.steel,[[-.42,.65,-.288],[.42,.65,-.288]],.012,"supported fuel common rail");for(let u of[-.34,.31])ne(t,n.edge,[u,.65,-.288],[u,.6,-.24],.01).name="fuel rail block support";o(s,[.11,.14,.1],[.33,.583,-.265],.018,"seated fuel metering pump"),l(n.rubber,[[.11,.57,-.285],[.22,.565,-.3],[.33,.583,-.265]],.011,"filter housing to fuel metering pump"),l(n.steel,[[.33,.583,-.265],[.35,.65,-.288]],.011,"fuel metering pump to common rail");for(let u of[-.4,-.24,-.08,.08,.24,.4])k(t,s,.016,.034,[u,.881,-.075],"y",.016,20).name="head seated fuel injector",l(n.steel,[[u,.65,-.288],[u,.73,-.29],[u,.89,-.19],[u,.895,-.075]],.005,"common rail feed into injector");if(e===4){o(n.paint,[.76,.68,.4],[-.54,.535,-.78],.05,"long range fuel reservoir");for(let u of[-.79,-.29])U(t,n.darkSteel,[.04,.7,.42],[u,.535,-.78],"fuel tank restraint"),U(t,n.edge,[.18,.06,.45],[u,.17,-.78],"fuel tank supported saddle");k(t,n.steel,.045,.04,[-.54,.889,-.78],"y",.045,24).name="fuel reservoir filler cap",l(n.rubber,[[-.28,.25,-.62],[-.18,.33,-.5],[.11,.5,-.35],[.11,.57,-.285]],.014,"reservoir fuel supply seated at filter housing")}let _=new Map,g=new Set(["cast crankcase with tapered shoulders","pressed deep oil sump","continuous sump sealing flange","cast cylinder head with port band","formed crowned rocker cover","cast flywheel and transmission casing","transmission main gear case","transmission lower oil pan","transmission removable side cover","transmission bolted top service closure","transmission machined split flange"]);for(let u of[...t.children]){g.has(u.name)&&(u.userData.cutawayShell=!0);let x=u.userData.inspectionKey;if(!x){let M=u.name;x=/transmission/.test(M)?"engine:transmission":/sump/.test(M)?"engine:sump":/rocker|head lifting|head seated fuel/.test(M)||/cylinder head|manifold seated port|intake runner|exhaust branch/.test(M)?"engine:head":/radiator|cooling fan|shroud|coolant|water pump/.test(M)?"engine:cooling":/air cleaner|compressor housing|compressor delivery|charge pipe/.test(M)?"engine:intake":/turbine|turbo|exhaust/.test(M)?"engine:exhaust":/skid|mounting shoe|mounting isolator|mount seated/.test(M)?"engine:skid":/fuel|filter|dipstick|reservoir|alternator|pulley|accessory|timing/.test(M)?"engine:services":"engine:block"}if(!_.has(x)){let M=Mt(x);M.userData.inspectionKey=x,_.set(x,M),t.add(M)}_.get(x).add(u)}return i&&t.scale.setScalar(.78),t}function el(n,{wheels:e=!1,light:t=!1,adaptive:i=!1,springs:s=!1,widthOverride:r=null}={}){let o=Mt("connected drive axle"),a=r??(t?1.3:1.65),l=.44,c=t?.13:.19,p=new we(new ui(c,32,20),n.paint);p.scale.set(1.18,1,1.05),p.position.set(0,l,0),p.name="cast differential housing",o.add(p),k(o,n.darkSteel,c*.9,.055,[c*.8,l,0],"x",c*.9,32),k(o,n.steel,.065,.17,[c*1.2,l,0],"x");for(let d of[-1,1]){ne(o,n.paint,[0,l,d*.07],[0,l,d*a*.43],t?.043:.068);for(let f=0;f<5;f++)k(o,n.rubber,t?.06:.09,.045,[0,l,d*(.24+f*.05)],"z",t?.06:.09,24);if(k(o,n.steel,.16,.045,[0,l,d*a*.47],"z",.16,32),k(o,n.darkSteel,.1,.1,[0,l,d*a*.46],"z"),e){let f=Is(n);f.scale.setScalar(t?.56:.76),f.position.set(0,l,d*a*.49),o.add(f)}else jn(o,n.steel,[0,l,d*(a*.47+.03)],.115,8,"z",.014);let h=d*a*.29;if(ne(o,n.edge,[-.28,l+.03,h],[.12,l+.41,h],t?.025:.043),ne(o,n.edge,[.28,l+.03,h],[.12,l+.41,h],t?.025:.043),U(o,n.edge,[.16,.095,.15],[.12,l+.43,h],"suspension upper mount"),s){ne(o,n.steel,[-.1,l+.03,h],[-.1,l+.58,h],.022);let f=[];for(let m=0;m<=144;m++){let _=m/144*Math.PI*16;f.push([-.1+Math.cos(_)*.074,l+.09+m/144*.4,h+Math.sin(_)*.074])}Ye(o,n.darkSteel,f,.015,144),k(o,n.amber,.034,.32,[.12,l+.18,h]),ne(o,n.steel,[.12,l+.34,h],[.12,l+.61,h],.018)}}ne(o,n.darkSteel,[-.21,l-.07,-a*.42],[-.21,l-.07,a*.42],.023);for(let d of[-1,1])ne(o,n.darkSteel,[-.21,l-.07,d*a*.42],[0,l,d*a*.45],.023);if(i){U(o,n.steel,[.37,.1,.34],[0,l+.23,0],"traction controller");for(let d of[-1,1])Ye(o,n.rubber,[[0,l+.23,d*.12],[.19,l+.18,d*.2],[.14,l-.15,d*.42],[0,l,d*a*.45]],.015,28)}return o}function _1(n,e){if(e!==2)return el(n,{wheels:e===1,adaptive:e===6,springs:e===1});let t=el(n,{wheels:!0,light:!0,springs:!0});t.name="lightweight running gear";for(let i of[-.3,.3])U(t,n.paint,[.075,.09,.83],[i,.22,0],"lightweight cradle crossmember");for(let i of[-.4,.4])U(t,n.paint,[.67,.09,.07],[0,.22,i],"lightweight cradle side rail");return t}function x1(n){return el(n,{springs:!0})}function ad(n,e){let t=Mt("weapon station"),i=Mt("station mounting ring"),s=Mt("station shield and cradle"),r=Mt("station barrel exterior");s.position.y=.5,r.position.set(.45,.7,0),t.add(i,s,r);let o=[[.405,-.01],[.51,-.01],[.51,.035],[.47,.055],[.43,.19],[.405,.2],[.34,.2],[.34,.15],[.395,.02],[.405,-.01]].map(u=>new ce(...u)),a=new we(new wn(o,64),n.paint);a.name="station hollow mounting ring",a.castShadow=a.receiveShadow=!0,i.add(a),a.userData.cutawayShell=!0;for(let u=0;u<12;u++){let x=u*Math.PI/6,M=Math.cos(x)*.475,v=Math.sin(x)*.475;k(i,n.steel,.013,.02,[M,.045,v],"y",.013,6).name="station flange seated fastener"}let l=new we(new kt(.373,.017,8,64),n.darkSteel);l.rotation.x=Math.PI/2,l.position.y=.2,l.name="station ring bearing seal",i.add(l);for(let u of[-1,1])U(s,n.castSteel,[.6,.06,.14],[0,-.27,u*.265],"station cradle bearing strip");let c=e===6?.53:e===2?.45:.36,p=e===4,d=[[-.42,-.24],[.34,-.24],[.38,.12],[.18,.47],[-.22,.52],[-.46,.19]];for(let u of[-1,1]){Ze(s,n.castSteel,[[-.24,-.24],[.26,-.24],[.26,.3],[.11,.37],[-.2,.3]],[],(v,w,T)=>[v,w,u*(.22+T)]).name="station structural trunnion cheek";let x=k(s,n.steel,.085,.105,[.1,.2,u*.265],"z",.085,40);x.name="station seated trunnion pivot";let M=k(s,n.edge,.108,.026,[.1,.2,u*.33],"z",.108,40);if(M.name="station retained trunnion cap",jn(s,n.steel,[.1,.2,u*.347],.077,6,"z",.009),!p){let v=Ze(s,n.paint,d,[],(w,T,I)=>[w,T,u*(c+I)]);v.name="station formed side shield",v.userData.cutawayShell=!0;for(let w of[-.2,.23])U(s,n.edge,[.06,.065,c-.245],[w,-.14,u*(c+.245)/2],"station shield retaining standoff");for(let[w,T]of[[-.34,-.16],[.25,-.15],[.2,.16],[-.19,.43],[-.4,.13]])k(s,n.steel,.008,.014,[w,T,u*(c+.052)],"z",.008,6).name="station shield seated screw"}}U(s,n.castSteel,[.43,.075,.47],[.025,-.195,0],"station connected cradle crossmember");let h=new we(new Jt(.53,.17,.33,3,.035),n.darkSteel);h.position.set(.035,.2,0),h.name="station supported inert carriage",s.add(h);for(let u of[-1,1])ne(s,n.steel,[-.23,.105,u*.125],[.3,.105,u*.125],.02).name="station carriage support rail";for(let u of[-1,1])U(s,n.castSteel,[.12,.28,.06],[.1,-.025,u*.125],"station connected carriage saddle");let f=e===6?2:1,m=[.68,1.05,1.6,.74,.65,1.14,1.04][e],_=e===2?.055:.032;for(let u=0;u<f;u++){let x=f===2?(u-.5)*.26:0,M=k(s,n.castSteel,.102,.25,[.32,.2,x],"x",.092,40);M.name="station seated mantlet collar";let v=[[_*.64,-.02],[_,-.02],[_*.94,m-.02],[_*.64,m-.02],[_*.64,-.02]].map(y=>new ce(...y)),w=new we(new wn(v,48),n.darkSteel);w.rotation.z=-Math.PI/2,w.position.z=x,w.name="station continuous barrel exterior",r.add(w);for(let y of[.015,.105])k(r,n.edge,_+.012,.025,[y,0,x],"x",_+.012,40).name="station barrel retaining band";let T=[[_*.64,-.025],[_+.012,-.025],[_+.012,.035],[_*.64,.035],[_*.64,-.025]].map(y=>new ce(...y)),I=new we(new wn(T,40),n.darkSteel);I.rotation.z=-Math.PI/2,I.position.set(m-.02,0,x),I.name="station open muzzle exterior",r.add(I),k(r,n.rubber,_*.62,.003,[m-.12,0,x],"x",_*.62,40).name="station recessed inert bore backing"}if(!p){let u=[];for(let T=0;T<f;T++){let I=f===2?(T-.5)*.26:0,y=new en;y.absarc(I,.2,.108,0,Math.PI*2,!0),u.push(y)}let x=Ze(s,n.paint,[[-c,-.24],[c,-.24],[c,.47],[-c,.47]],u,(T,I,y)=>[.38-Math.max(0,I-.12)*.2/.35-y,I,T]);x.name="station front shield with mantlet aperture",x.userData.cutawayShell=!0;let M=Ze(s,n.paint,[[-.22,-c],[.18,-c],[.18,c],[-.22,c]],[],(T,I,y)=>[T,.52-(T+.22)*.125-y,I]);M.name="station sloped service roof",M.userData.cutawayShell=!0;let v=Ze(s,n.paint,[[-.46,-c],[-.22,-c],[-.22,c],[-.46,c]],[],(T,I,y)=>[T,.19+(T+.46)*.33/.24-y,I]);v.name="station sloped rear shoulder",v.userData.cutawayShell=!0;let w=Ze(s,n.paint,[[-c,-.24],[c,-.24],[c,.19],[-c,.19]],[],(T,I,y)=>[-.46+y,I,T]);w.name="station removable rear cover",w.userData.cutawayShell=!0,U(s,n.edge,[.023,.2,.25],[-.474,.08,0],"station rear service hatch").userData.cutawayShell=!0;for(let T of[-.075,.075])ne(s,n.steel,[-.475,.08,T],[-.5,.08,T],.01).name="station hatch handle post";ne(s,n.steel,[-.5,.08,-.075],[-.5,.08,.075],.01).name="station service hatch handle"}U(s,n.castSteel,[.1,.12,.15],[-.28,-.16,-c-.06],"station control enclosure bracket");let g=new we(new Jt(.25,.24,.18,3,.018),n.paint);g.position.set(-.28,-.02,-c-.075),g.name="station supported control enclosure",s.add(g),U(s,n.edge,[.2,.18,.015],[-.28,-.02,-c-.172],"station control service cover");for(let u of[-.355,-.205])for(let x of[-.08,.04])k(s,n.steel,.007,.014,[u,x,-c-.183],"z",.007,6).name="station control cover fastener";if(Ye(s,n.rubber,[[-.28,-.1,-c-.075],[-.28,-.17,-c-.075],[-.2,-.24,-c-.02],[-.14,-.25,-.265]],.014,24).name="station supported control harness",[3,5,6].includes(e)){U(s,n.edge,[.17,.095,.17],[-.09,.505,0],"station optical package seated foot");let u=new we(new Jt(.22,.21,.23,3,.028),n.paint);u.position.set(-.09,.64,0),u.name="station optical housing",s.add(u),k(s,n.edge,.078,.035,[.034,.64,0],"x",.078,40).name="station optical retaining bezel",k(s,n.glass,.058,.008,[.055,.64,0],"x",.058,40).name="station optical lens"}return t}function y1(n,e){let t=Mt("protection kit"),i=(r,o,a=n.paint,l="formed protection panel")=>{let c=Ze(t,a,r,[],(p,d,h)=>[p,d,o+h]);return c.name=l,c},s=(r,o,a)=>{k(t,n.steel,.016,.035,[r,o,a],"z",.016,6).name="protection attachment bolt",k(t,n.darkSteel,.024,.008,[r,o,a-.015],"z").name="attachment washer"};if([3,6].includes(e)){let r=e===3?.67:.77,o=e===3?1.7:2.3,a=-o/2,l=o/2,c=e===3?1.38:1.3;if(e===3){U(t,n.edge,[o,.024,r*2],[0,.083,0],"crew cell cassette deck");for(let E of[-1,1]){U(t,n.darkSteel,[o,.12,.12],[0,.015,E*.55],"crew cell longitudinal floor sill");for(let R of[-.61,.61]){U(t,n.darkSteel,[.16,.08,.12],[R,-.08,E*.55],"crew cell attachment pedestal"),k(t,n.rubber,.067,.035,[R,-.1375,E*.55],"y",.067,24).name="crew cell mounting isolator",U(t,n.steel,[.2,.025,.18],[R,-.1675,E*.55],"crew cell attachment shoe");for(let P of[-.065,.065])k(t,n.steel,.01,.03,[R+P,-.146,E*.55],"y",.01,6).name="crew cell shoe retaining bolt"}}for(let E of[-.27,.09])U(t,n.darkSteel,[.085,.1,1.14],[E,.025,0],"crew cell seat load crossmember");for(let E of[a+.065,l-.065])U(t,n.darkSteel,[.13,.1,1.14],[E,.025,0],"crew cell cassette end member")}else U(t,n.edge,[o,.09,r*2],[0,.045,0],"reinforced floor");let p=c-.22,d=r-.13,h=E=>E<=p?r-.065*(E-.09)/(p-.09):r-.065-.065*Math.min(1,(E-p)/(c-p)),f=n.paint.clone();f.color.set("#a0a58e"),f.metalness=.04,f.roughness=.86,f.name="crew cell interior lining";let m=n.edge.clone();m.color.set("#414b3e"),m.roughness=.7;let _=(E,R)=>(E.name="hull shell",E.userData.component=R,E),g=(E,R,P,F,B,V,ee=.018)=>{let J=new Dt;P.forEach(([ge,se],fe)=>fe?J.lineTo(ge,se):J.moveTo(ge,se)),J.closePath(),J.holes.push(...F);let X=new Gt(J,{depth:ee,steps:1,curveSegments:12,bevelEnabled:!0,bevelSize:.0025,bevelThickness:.002,bevelSegments:3}),K=X.attributes.position;for(let ge=0;ge<K.count;ge++)K.setXYZ(ge,...B(K.getX(ge),K.getY(ge),K.getZ(ge)));X.computeVertexNormals();let q=R.clone();q.side=At;let le=new we(X,q);return le.name=V,le.castShadow=!0,le.receiveShadow=!0,E.add(le),le},u=(E,R,P)=>{let[F,B,V,ee]=E,J=ct(F,B,V,ee,.045),X=J.getPoints(12).map(q=>[q.x,q.y]);_(g(t,n.paint,ct(F-.052,B-.052,V+.052,ee+.052,.075).getPoints(12).map(q=>[q.x,q.y]),[J.clone()],(q,le,ge)=>R(q,le,.015+ge),"window outer retaining bezel"),"window outer retaining bezel"),g(t,n.rubber,ct(F-.012,B-.012,V+.012,ee+.012,.057).getPoints(12).map(q=>[q.x,q.y]),[ct(F+.018,B+.018,V-.018,ee-.018,.027)],(q,le,ge)=>R(q,le,-.02+ge),"window compression gasket",.056);let K=g(t,x,X,[],(q,le,ge)=>R(q,le,-.014-ge*.2),P,.012);K.castShadow=!1,_(g(t,m,ct(F-.042,B-.042,V+.042,ee+.042,.07).getPoints(12).map(q=>[q.x,q.y]),[J.clone()],(q,le,ge)=>R(q,le,-.057-ge),"window interior retaining frame"),"window interior retaining frame")},x=n.glass.clone();x.transparent=!0,x.opacity=.58,x.metalness=0,x.depthWrite=!1;let M=(E,R,P="cell flange retaining fastener")=>{let F=new L(...R(0)),B=new L(...R(.01)).sub(F).normalize(),V=k(E,n.steel,.02,.004,F.clone().addScaledVector(B,.002).toArray(),"y",.02,24);V.quaternion.setFromUnitVectors(new L(0,1,0),B),V.name="cell flange seated washer";let ee=k(E,n.darkSteel,.012,.009,F.clone().addScaledVector(B,.0085).toArray(),"y",.012,6);ee.quaternion.copy(V.quaternion),ee.name=P};for(let E of[-1,1]){let R=[[a,.09],[l,.09],[l-.25,c-.08],[l-.42,c],[a+.07,c]],P=ct(a+.2,.85,l-.48,c-.13,.045);Ze(t,n.paint,R,[P],(F,B,V)=>[F,B,E*(h(B)-V)]),_(Ze(t,f,[[a+.09,.17],[l-.07,.17],[l-.3,c-.13],[a+.09,c-.09]],[P],(F,B,V)=>[F,B,E*(h(B)-.067-V*.25)]),"interior liner"),u([a+.2,.85,l-.48,c-.13],(F,B,V)=>[F,B,E*(h(B)+V)],"protected glazing");for(let F of[a+.13,l-.38])Ye(t,m,[[F,.13,E*(h(.13)-.065)],[F,p,E*(h(p)-.065)],[F,c-.065,E*(h(c-.065)-.065)]],.025,16).name="interior shell rib";_(Ze(t,m,[[a+.2,.23],[l-.2,.23],[l-.25,.71],[a+.2,.71]],[],(F,B,V)=>[F,B,E*(h(B)+.014+V*.2)]),"lower service panel recess"),_(Ze(t,n.paint,[[a+.23,.26],[l-.24,.26],[l-.28,.68],[a+.23,.68]],[],(F,B,V)=>[F,B,E*(h(B)+.03+V*.2)]),"lower formed service panel"),Ye(t,n.darkSteel,[[a+.14,.17,E*(h(.17)-.09)],[a+.14,.72,E*(h(.72)-.09)],[l-.32,.72,E*(h(.72)-.09)]],.012,24).name="secured interior cable conduit";for(let F of[a+.26,l-.36])Ze(t,f,[[F-.05,.3],[F+.05,.3],[F+.05,.6],[F-.05,.6]],[],(B,V,ee)=>[B,V,E*(h(V)-.08+ee*.25)]).name="interior panel retaining strip";for(let F of[a+.12,l-.2])s(F,.2,E*(r+.02));if(g(t,n.paint,[[a,.085],[l-.03,.085],[l-.03,.19],[a,.19]],[],(F,B,V)=>[F,B,E*(r-.026+V)],"formed crew cell lower sill",.03),e===3){for(let F of[a+.28,-.1,l-.32])for(let B of[.285,.655])M(t,V=>[F,B,E*(h(B)+.04+V)],"service cover retaining fastener");for(let F of[a+.18,-.1,l-.32])M(t,B=>[F,.14,E*(r+.006+B)],"lower sill flange retaining fastener");for(let F of[a+.14,l-.39]){let B=[[F-.036,.135],[F+.036,.135],[F+.036,p-.015],[F+.025,c-.092],[F-.025,c-.092],[F-.036,p-.015]];g(t,m,B,[],(V,ee,J)=>[V,ee,E*(h(ee)-.087-J)],"crew cell formed interior pillar",.033),U(t,m,[.13,.028,.16],[F,.135,E*(r-.115)],"interior pillar foot flange")}}}let v=E=>l-(E-.09)*.25/(c-.17),w=ct(-r+.16,.85,r-.16,c-.18);if(Ze(t,n.paint,[[-r,.09],[r,.09],[r,c-.08],[-r,c-.08]],[w],(E,R,P)=>[v(R)-P,R,E*h(R)/r]),u([-r+.16,.85,r-.16,c-.18],(E,R,P)=>[v(R)+P,R,E*h(R)/r],"protected windshield"),e===3){let E=[[-r+.16,.255],[r-.16,.255],[r-.2,.68],[-r+.2,.68]];_(g(t,m,E,[],(R,P,F)=>[v(P)+.009+F*.25,P,R*h(P)/r],"front closure perimeter backing",.018),"front closure perimeter backing"),_(g(t,n.paint,[[-r+.18,.275],[r-.18,.275],[r-.22,.66],[-r+.22,.66]],[],(R,P,F)=>[v(P)+.018+F*.25,P,R*h(P)/r],"formed front service closure",.018),"formed front service closure");for(let R of[-r+.235,r-.235])for(let P of[.315,.62])M(t,F=>[v(P)+.0225+F,P,R*h(P)/r],"front closure retaining fastener")}let T=[[a+.07,-d],[l-.42,-d],[l-.32,-d+.1],[l-.32,d-.1],[l-.42,d],[a+.07,d],[a,d-.075],[a,-d+.075]],I=[];for(let E=0;E<=16;E++){let R=-d+E*d/8;I.push([R,c-.015+.018*(1-(R/d)**2)])}for(let E=16;E>=0;E--){let[R,P]=I[E];I.push([R,P-.028])}_(g(t,n.paint,I,[],(E,R,P)=>[a+.07+P,R,E],"crowned formed cell roof",o-.43),"formed cell roof"),_(Ze(t,f,T,[],(E,R,P)=>[E,c-.061-P*.25,R]),"insulated roof liner");for(let E of[-1,1]){let R=[[a+.065,p+.075],[l-.36,p+.075],[l-.42,c-.018],[a+.065,c-.018]];_(Ze(t,n.paint,R,[],(P,F,B)=>[P,F,E*(h(F)+.012+B*.35)]),"formed roof shoulder cap"),U(t,m,[o-.5,.075,.1],[-.16,c-.056,E*(d-.05)],"roof perimeter box stiffener"),U(t,n.paint,[o-.54,.036,.095],[-.16,c+.024,E*(d-.06)],"roof shoulder mounting flange");for(let P of[a+.19,l-.49])U(t,m,[.13,.035,.14],[P,c+.049,E*(d-.085)],"roof flange attachment pad"),k(t,n.steel,.014,.017,[P,c+.075,E*(d-.085)],"y",.014,6).name="roof attachment fastener"}for(let E of[a+.16,l-.45])U(t,m,[.075,.063,d*2-.09],[E,c-.056,0],"connected roof transverse box member");U(t,n.paint,[.18,.09,d*2],[l-.33,c-.055,0],"folded windshield header");let y=[[-r+.105,.18],[r-.105,.18],[r-.105,c-.31],[d-.075,c-.13],[-d+.075,c-.13],[-r+.105,c-.31]],b=new en;if(y.forEach(([E,R],P)=>P?b.lineTo(E,R):b.moveTo(E,R)),b.closePath(),Ze(t,n.paint,[[-r,.09],[r,.09],[r,c-.26],[d,c],[-d,c],[-r,c-.26]],[b],(E,R,P)=>[a+P,R,E]),e===3){let E=[[-r+.018,.108],[r-.018,.108],[r-.018,c-.267],[d-.012,c-.018],[-d+.012,c-.018],[-r+.018,c-.267]];_(g(t,n.paint,E,[b.clone()],(R,P,F)=>[a-.026+F,P,R],"boarding aperture bolted perimeter flange",.042),"boarding aperture bolted perimeter flange");for(let R of[-1,1])for(let P of[.26,.52,.8,1.035])M(t,F=>[a-.026-F,P,R*(r-.052)],"boarding perimeter retaining fastener");for(let R of[-.4,-.2,0,.2,.4])M(t,P=>[a-.026-P,.13,R],"boarding lower flange retaining fastener");for(let R of[-.36,-.18,0,.18,.36])M(t,P=>[a-.026-P,c-.062,R],"boarding header flange retaining fastener")}for(let E=0;E<y.length;E++){let[R,P]=y[E],[F,B]=y[(E+1)%y.length],V=new L(a+.077,(P+B)/2,(R+F)/2),ee=new L(0,B-P,F-R);U(t,m,[.095,ee.length()+.028,.052],V.toArray(),"rear aperture structural ring").quaternion.setFromUnitVectors(new L(0,1,0),ee.normalize())}let C=Mt("rear aperture weather seal");t.add(C);let D=y.map(([E,R])=>[a-.007,R,E]);for(let E=0;E<D.length;E++){ne(C,n.rubber,D[E],D[(E+1)%D.length],.018).name="aperture gasket edge";let R=new we(new ui(.018,12,8),n.rubber);R.position.set(...D[E]),R.name="aperture gasket corner",R.castShadow=!0,R.receiveShadow=!0,C.add(R)}for(let E of[-1,1])Ye(t,m,[[a+.059,.15,E*(r-.065)],[a+.059,c-.29,E*(r-.065)],[a+.059,c-.065,E*(d-.045)]],.027,24).name="rear door jamb reinforcement",Ye(t,n.steel,[[a-.022,.46,E*(r-.04)],[a-.09,.46,E*(r-.04)],[a-.09,.77,E*(r-.04)],[a-.022,.77,E*(r-.04)]],.016,24).name="connected boarding grab handle";for(let E of[-.25,.25])U(t,n.lamp,[.17,.024,.075],[a+.24,c-.087,E],"interior overhead light");if(U(t,n.darkSteel,[o-.2,.026,r*2-.17],[0,.108,0],"non slip crew floor insert"),e===3){let E=Mt("open crew cell boarding door"),R=2*(r-.105),P=-r+.105;E.position.set(a-.014,0,P),E.rotation.y=-Math.PI*.56,t.add(E);let F=[[0,.19],[R,.19],[R,c-.32],[R-.105,c-.14],[.105,c-.14],[0,c-.32]],B=[[.105,.3],[R-.105,.3],[R-.105,c-.37],[R-.18,c-.25],[.18,c-.25],[.105,c-.37]],V=new en;B.forEach(([X,K],q)=>q?V.lineTo(X,K):V.moveTo(X,K)),V.closePath(),_(g(E,n.paint,F,[V],(X,K,q)=>[-.045+q,K,X],"open boarding door outer skin",.025),"open boarding door outer skin"),_(Ze(E,f,[[.065,.26],[R-.065,.26],[R-.065,c-.35],[R-.15,c-.21],[.15,c-.21],[.065,c-.35]],[],(X,K,q)=>[.024+q*.25,K,X]),"open boarding door interior liner");for(let X=0;X<B.length;X++){let[K,q]=B[X],[le,ge]=B[(X+1)%B.length],se=new L(0,ge-q,le-K),fe=U(E,n.paint,[.048,se.length()+.005,.017],[-.02,(q+ge)/2,(K+le)/2],"door pressed recess return");fe.quaternion.setFromUnitVectors(new L(0,1,0),se.normalize()),_(fe,"door pressed recess return")}_(g(E,n.paint,B,[],(X,K,q)=>[.004+q*.4,K,X],"boarding door formed face panel",.018),"boarding door formed face panel");for(let X of[.06,R-.06])U(E,m,[.07,c-.49,.065],[.017,(c+.03)/2,X],"door perimeter upright return");for(let X of[.245,c-.235])U(E,m,[.07,.065,R-.13],[.017,X,R/2],"door transverse return");U(E,m,[.05,.05,R-.18],[.062,.49,R/2],"door inner reinforcing rib");for(let X of[.38,.96]){k(t,n.steel,.029,.13,[a-.016,X,P],"y",.029,20).name="boarding door hinge pin",U(t,m,[.08,.1,.065],[a+.007,X,P-.025],"boarding hinge fixed leaf"),U(E,m,[.07,.1,.09],[.012,X,.035],"boarding hinge moving leaf");for(let K of[-.047,0,.047])k(E,m,.035,.038,[0,X+K,0],"y",.035,24).name="boarding hinge barrel knuckle";for(let K of[-.062,.062])k(t,n.darkSteel,.038,.013,[a-.014,X+K,P],"y",.038,24).name="boarding hinge pin end collar";for(let K of[-.029,.029])M(t,q=>[a-.033-q,X+K,P-.046],"fixed hinge leaf retaining fastener"),M(E,q=>[.047+q,X+K,.061],"moving hinge leaf retaining fastener")}Ye(E,n.steel,[[.061,.64,R-.14],[.105,.64,R-.14],[.105,.8,R-.14],[.061,.8,R-.14]],.013,20).name="door interior pull handle",U(E,n.darkSteel,[.08,.105,.07],[.064,.7,R-.08],"boarding door latch housing");let ee=R-.085;for(let X of[.4,1.025])U(E,m,[.048,.07,.06],[.075,X,ee],"door latch rod guide"),k(E,n.steel,.009,Math.abs(X-.7),[.094,(X+.7)/2,ee],"y",.009,16).name="guided boarding latch linkage",U(E,n.steel,[.026,.045,.055],[.086,X,ee],"boarding latch cam");for(let X of[.16,R-.16])for(let K of[.3,c-.29])M(E,q=>[.03+q,K,X],"door liner retaining fastener");U(E,m,[.018,.23,.1],[-.07,.7,R-.08],"exterior latch backing plate"),k(E,n.steel,.021,.055,[-.061,.7,R-.08],"x",.021,16).name="external latch spindle",U(E,n.steel,[.022,.04,.135],[-.092,.7,R-.13],"exterior boarding latch lever");for(let X of[.62,.78])k(E,n.steel,.009,.018,[-.079,X,R-.08],"x",.009,6).name="latch backing plate fastener";let J=new L(.035,.42,.24).applyEuler(E.rotation).add(E.position);ne(t,m,[a+.015,.42,P+.1],J.toArray(),.013).name="open door restraint arm",U(t,n.darkSteel,[.07,.11,.045],[a+.025,.7,r-.105],"boarding latch keeper")}if(e===3){for(let E of[-1,1])tl(t,n,-.1,E*.32,!0);U(t,n.edge,[.18,.055,1.1],[a-.08,.12,0],"boarding threshold"),U(t,n.paint,[.055,.13,1.14],[a-.015,.06,0],"formed boarding sill return")}else for(let E of[a+.26,l-.48])ne(t,n.edge,[E,c-.06,-d+.07],[E,c-.06,d-.07],.027).name="roof hoop";if(e!==3)for(let E of[-1,1])for(let R of[.35,1.02])U(t,n.darkSteel,[.045,.1,.06],[a+.025,R,E*(r-.055)],"rear aperture hinge")}else if(e===5){for(let r of[-1,1]){Ze(t,n.paint,[[-.92,.02],[.92,.02],[1.04,.18],[.9,.48],[-.9,.48],[-1.04,.18]],[],(o,a,l)=>[o,.12+a*.42+l,r*a*1.55]).name="V underbody plate",U(t,n.edge,[1.82,.075,.08],[0,.39,r*.67],"underbody mounting rail");for(let o of[-.65,.65])ne(t,n.darkSteel,[o,.3,r*.58],[o,.44,r*.58],.032).name="energy absorbing mount",k(t,n.rubber,.047,.075,[o,.41,r*.58]),k(t,n.steel,.018,.055,[o,.455,r*.58],"y",.018,6).name="underbody attachment bolt"}ne(t,n.edge,[-.94,.12,0],[.94,.12,0],.025).name="V keel joint"}else{let r=e===4||e===2?3:1,o=r===1?1.55:.57;for(let a of[.18,.79])U(t,n.edge,[r===1?1.5:1.93,.055,.06],[0,a,-.1],"protection mounting rail");for(let a=0;a<r;a++){let l=(a-(r-1)/2)*.66,c=[[l-o/2,.12],[l+o/2-.08,.12],[l+o/2,.23],[l+o/2,.77],[l+o/2-.1,.9],[l-o/2+.08,.9],[l-o/2,.8]];if(e===0)i(c,0,n.darkSteel,"inner support plate"),i(c,.18,n.paint,"outer spaced plate");else if(e===1){let d=n.paint.clone();d.color.set("#c5c0a9"),d.metalness=0,d.roughness=.94,i(c,0,n.darkSteel,"composite backing"),i(c,.045,d,"ceramic core"),i(c,.09,n.paint,"composite outer plate")}else{let d=i(c,.055,n.paint,e===2?"light formed panel":"replaceable side skirt");if(e===2){let h=d.geometry.attributes.position;for(let f=0;f<h.count;f++)h.setZ(f,h.getZ(f)+.032*Math.sin((h.getY(f)-.12)/.78*Math.PI));d.geometry.computeVertexNormals()}}let p=e===0?.235:e===1?.145:.115;for(let d of[-o*.36,o*.36])for(let h of[.23,.77])ne(t,n.darkSteel,[l+d,h,-.09],[l+d,h,p],.015).name="panel standoff",s(l+d,h,p)}}return t}function ld(n,e){let t=Mt("radio suite"),i=e===1?3:e===6?2:1;for(let s=0;s<i;s++){let r=(s-(i-1)/2)*.4;U(t,n.paint,[.35,.46,.23],[r,.29,0]),U(t,n.glass,[.2,.09,.014],[r,.4,.125]);for(let o=0;o<4;o++)k(t,n.darkSteel,.026,.027,[r-.09+o*.06,.26,.135],"z");ne(t,n.darkSteel,[r+.1,.5,0],[r+.1,1.1+(e===4?.6:0)+s*.13,0],.009),Ye(t,n.rubber,[[r-.08,.2,.12],[r-.2,.09,.22],[r-.15,.06,.35],[r+.17,.1,.3]],.012)}if([3,4].includes(e)){let s=1.65+e*.12;ne(t,n.paint,[.42,.1,-.28],[.42,s,-.28],.028);for(let r of[-1,1])ne(t,n.darkSteel,[.42,s*.8,-.28],[.42+r*.55,.02,-.28+r*.45],.006);if(e===3){let r=new we(new ui(.3,20,12,0,Math.PI*2,0,Math.PI/2),n.paint);r.rotation.x=Math.PI/2,r.position.set(.42,s,-.28),t.add(r)}}return t}function Fc(n,e){let t=Mt("sensor suite");k(t,n.edge,.17,.1,[0,.05,0]),ne(t,n.paint,[0,.1,0],[0,e===3?1.65:.35,0],.05);let i=e===3?1.75:.43;U(t,n.paint,[.4,.24,.22],[0,i,0]);for(let s of[-.105,.105])k(t,n.darkSteel,.078,.05,[s,i,.14],"z"),k(t,n.glass,.058,.012,[s,i,.172],"z");if((e===1||e===5)&&(U(t,n.paint,[.26,.22,.22],[.26,i-.05,0]),k(t,n.glass,.075,.025,[.26,i-.05,.13],"z")),e===3||e===6)for(let s of[-1,1])ne(t,n.darkSteel,[0,.37,0],[s*.35,0,.25],.017);if(e===4){let s=new we(new ui(.28,24,12,0,Math.PI*2,0,Math.PI*.64),n.paint);s.position.set(0,.4,-.2),t.add(s)}if(e===6)for(let s of[-.5,.5]){let r=Fc(n,3);r.scale.setScalar(.54),r.position.set(s,0,-.25),t.add(r)}return t}function cd(n){let e=Mt("clearance roller");U(e,n.paint,[1.1,.12,.35],[0,.48,-.1]);for(let t of[-.45,.45])ne(e,n.edge,[t,.48,-.3],[t,.16,.32],.032).name="clearance roller trailing arm",k(e,n.darkSteel,.17,.13,[t,.17,.34],"x");for(let t=0;t<7;t++){let i=-.45+t*.15;k(e,n.paint,.14,.095,[i,.17,.34],"x"),jn(e,n.steel,[i+.05,.17,.34],.1,8,"x",.013)}return e}function v1(n,e){if([0,5].includes(e))return kr(n);if([2,4].includes(e))return cd(n);let t=Mt("field equipment");if(e===1){U(t,n.paint,[1.4,.14,.85],[0,.39,0]);for(let i of[-1,1]){let s=Is(n);s.scale.setScalar(.5),s.position.set(-.15,.3,i*.43),t.add(s)}ne(t,n.edge,[.7,.38,-.25],[1.28,.38,0],.036),ne(t,n.edge,[.7,.38,.25],[1.28,.38,0],.036),U(t,n.paint,[1.33,.4,.8],[0,.64,0])}else{U(t,n.edge,[1.15,.06,.65],[0,.03,0]);for(let i=0;i<3;i++)U(t,n.paint,[.29,.35,.47],[-.37+i*.37,.24,0]),U(t,n.steel,[.14,.025,.018],[-.37+i*.37,.34,.25]);if(e===6)for(let i of[-.55,.55])ne(t,n.darkSteel,[i,0,0],[i,.65,0],.025)}return t}function S1(n,e){let t=Mt("engineering review");U(t,n.edge,[1.3,.065,.78],[0,.7,0]);for(let s of[-.54,.54])for(let r of[-.3,.3])ne(t,n.darkSteel,[s,0,r],[s,.69,r],.023);U(t,n.darkSteel,[.95,.68,.055],[0,1.14,-.24]),U(t,n.lamp,[.88,.61,.02],[0,1.14,-.205]);let i=[n.paint,n.amber,n.glass][e%3];for(let s=0;s<4;s++)U(t,i,[.11+(s+e)%4*.035,.032,.013],[-.22+e%2*.08,.95+s*.115,-.188]),U(t,n.edge,[.16,.016,.013],[.18,.95+s*.115,-.187]);if(U(t,n.lamp,[.35,.017,.27],[-.34,.75,.18]),U(t,n.glass,[.27,.018,.19],[.36,.75,.18]),k(t,n.steel,.046,.11,[.54,.8,-.09]),[2,7,10,12,15].includes(e))for(let s=0;s<3;s++)U(t,i,[.09,.09,.08],[-.27+s*.27,1.5,-.19]),s<2&&ne(t,n.darkSteel,[-.22+s*.27,1.5,-.19],[-.08+s*.27,1.5,-.19],.008);if([3,11,16,17,20].includes(e)){let s=od(n,0);s.scale.setScalar(.22),s.position.set(0,.74,.08),t.add(s)}return t}function zr(n,e=ki()){if(!rd.includes(n))throw new Error("Unknown 3D asset: "+n);let t=n==="TRAIN-CAP"?"CAP-C":n,[i,s]=t.split("-"),r=s.charCodeAt(0)-65,a=Uc({CAP:()=>m1(e,r),MOB:()=>r===3?x1(e):[1,2,6].includes(r)?_1(e,r):od(e,r),FP:()=>ad(e,r),PRO:()=>y1(e,r),COM:()=>ld(e,r),SA:()=>Fc(e,r),ACC:()=>v1(e,r),SE:()=>S1(e,r)}[i](),e,i,r);return a.name=n,a.userData={assetId:n,illustrative:!0,units:"metres"},a}function Oc(n,e=ki()){if(!p1.includes(n))throw new Error("Unknown 3D mission: "+n);let t=sd(n,e);t.name=n,t.userData.mission=n;let i=t.userData.roof||2.75;if(n==="COMBAT"||n==="MINE"){let s=ad(e,n==="COMBAT"?2:1);s.name="mission weapon",s.position.set(-.35,i,0),t.add(s)}if(n==="COMBAT"&&M1(t,e,i),n==="RECCE"){let s=Fc(e,3);s.name="mission sensor",s.position.set(-1,i,-.48),t.add(s)}if(n==="COMMAND"){let s=ld(e,4);s.name="mission radio",s.position.set(-1.5,i,-.4),t.add(s)}if(["TROOP","COMMAND","RECCE"].includes(n)&&b1(t,e,n),n==="TROOP"&&E1(t,e),n==="MINE"){let s=cd(e);s.name="mission roller",s.scale.setScalar(1.9),s.rotation.y=Math.PI/2,s.position.set(4.45,.1,0),t.add(s),w1(t,e,s)}return Vn(t)}function b1(n,e,t){let i=-n.userData.length/2,s=n.userData.width/2,r=n.userData.length/2-2.65,o=t==="COMMAND"?2.63:2.31,a=Mt(t.toLowerCase()+" mission interior");a.position.y=1.41,n.add(a);let l=i+.18,c=r-l,p=(l+r)/2,d=s*.75-.035;U(a,e.edge,[c,.05,d*2],[p,0,0],"mission supported rear floor"),U(a,e.rubber,[c-.06,.004,d*2-.04],[p,.027,0],"mission nonslip rear floor insert");for(let b of[l+.16,p,r-.16])for(let C of[-1,1])U(a,e.castSteel,[.18,.065,.18],[b,-.025,C*s*.53],"mission floor hull bearing shoe");let h=e.paint.clone();h.color.set("#a3a78f"),h.metalness=0,h.roughness=.87,h.name="mission cabin interior lining";let f=t==="COMMAND"?Math.min(.8,r-.03):r-.03,m=s*.85-.075,_=b=>s*(.75+(Math.min(b,2.36)-1.2)*.1/1.16)-.075;for(let b of[-1,1]){let C=[];if(t==="TROOP")for(let E=0;E<4;E++)C.push(ct(i+.46+E*.94,1.95,i+1.07+E*.94,2.22,.04));let D=Ze(a,h,[[l,1.435],[f,1.435],[f,o],[l,o]],C,(E,R,P)=>[E,R-1.41,b*(_(R)-P*.4)]);D.name="mission interior removable liner",D.userData.cutawayShell=!0;for(let E=l+.15;E<f-.05;E+=.92)U(a,e.edge,[.1,.05,.12],[E,.05,b*_(1.46)],"mission rib floor attachment"),Ye(a,e.pressedSteel,[[E,.05,b*_(1.46)],[E,.8,b*_(2.21)],[E,o-1.41,b*m]],.024,16).name="mission floor connected cabin rib",b===1&&(ne(a,e.pressedSteel,[E,o-1.41,-m],[E,o-1.41,m],.025).name="mission connected roof bow")}let g=U(a,h,[f-l,.018,m*2],[(l+f)/2,o-1.41+.028,0],"mission removable ceiling liner");g.userData.cutawayShell=!0;for(let b of[l+.35,f-.35])U(a,e.lamp,[.3,.025,.13],[b,o-1.41+.012,0],"mission supported overhead luminaire");let u=(b,C,D,E=.73)=>{let R=tl(a,e,b,C,!0);return R.name=t.toLowerCase()+" mission restrained seat",R.rotation.y=D,R.scale.setScalar(E),R.position.y=.029+.2895*E,R},x=(b,C,D,E,R=.02)=>{let P=new we(new Jt(...C,3,R),b);return P.position.set(...D),P.name=E,P.castShadow=P.receiveShadow=!0,a.add(P),P},M=e.glass.clone();M.color.set("#183037"),M.roughness=.24;let v=(b,C,D,E=.62)=>{x(e.edge,[E+.06,.34,.08],[b,C,D],"mission supported monitor enclosure",.025),U(a,e.darkSteel,[E+.01,.295,.02],[b,C,D-.041],"mission monitor seated bezel"),U(a,M,[E-.03,.245,.006],[b,C,D-.054],"mission inert monitor display"),ne(a,e.castSteel,[b,C-.252,D+.025],[b,C-.075,D+.025],.023).name="mission monitor connected stand",U(a,e.edge,[.2,.026,.16],[b,C-.2545,D+.015],"mission monitor seated foot");for(let R of[-.08,0,.08])ne(a,e.edge,[b-E*.38,C+R,D-.058],[b+E*.38,C+R,D-.058],.002).name="mission display inert chart grid";Ye(a,e.lamp,[[b-E*.35,C-.065,D-.059],[b-E*.14,C+.025,D-.059],[b+E*.05,C-.02,D-.059],[b+E*.32,C+.07,D-.059]],.003,12).name="mission display illustrative trace"},w=(b,C,D=.91)=>{x(e.edge,[D,.045,.5],[b,.53,C],"mission supported workstation top",.015);for(let E of[-D*.38,D*.38])for(let R of[-.18,.18])U(a,e.castSteel,[.07,.04,.085],[b+E,.049,C+R],"mission workstation floor foot"),ne(a,e.edge,[b+E,.068,C+R],[b+E,.516,C+R],.023).name="mission floor connected workstation leg";U(a,e.darkSteel,[D-.12,.023,.2],[b,.564,C-.08],"mission seated keyboard enclosure");for(let E=0;E<3;E++)for(let R=0;R<9;R++)U(a,e.edge,[.041,.004,.027],[b+(R-4)*.056,.577,C-.14+E*.039],"mission keyboard key");v(b,.82,C+.13,D-.15)},T=(b,C,D=.53,E=1.05)=>{for(let P of[-D*.42,D*.42]){U(a,e.edge,[.07,.035,.44],[b+P,.0465,C],"mission equipment rack floor rail");for(let F of[-.17,.17])ne(a,e.edge,[b+P,.06,C+F],[b+P,E,C+F],.019).name="mission equipment rack continuous post"}for(let P=0;P<3;P++){let F=.1+P*.29;U(a,e.pressedSteel,[D,.023,.43],[b,F,C],"mission rack supported shelf"),x(e.paint,[D-.06,.24,.37],[b,F+.1315,C],"mission rack isolated equipment enclosure",.021),U(a,e.darkSteel,[D-.1,.185,.015],[b,F+.133,C+.192],"mission rack equipment front panel");for(let B of[-1,1])ne(a,e.edge,[b+B*(D/2-.065),F+.075,C+.205],[b+B*(D/2-.065),F+.19,C+.205],.009).name="mission rack supported extraction handle";for(let B=0;B<5;B++)U(a,e.edge,[.055,.007,.009],[b-.05,F+.09+B*.021,C+.204],"mission equipment ventilation slot");k(a,e.amber,.008,.009,[b+.09,F+.18,C+.203],"z",.008,16).name="mission equipment inert status lens"}let R=U(a,e.paint,[D,.024,.43],[b,E,C],"mission equipment rack lid");R.userData.cutawayShell=!0},I=Mt("mission role electronic installation");a.add(I);let y=b=>{let C=new Set(a.children);b();for(let D of[...a.children])C.has(D)||I.add(D)};if(t==="TROOP"){for(let b of[-1,1])for(let C=0;C<4;C++){let D=i+.77+C*.94,E=u(D,b*.7,b*Math.PI/2),R=x(e.paint,[.39,.276,.16],[D,.167,b*.88],"troop floor supported underseat stowage",.019),P=U(a,e.darkSteel,[.23,.05,.008],[D,.23,b*.963],"troop stowage retained latch");if(b===-1&&C===3)for(let F of[E,R,P])F.userData.reservedOriginalRadioZone=!0}for(let b of[-1,1]){ne(a,e.darkSteel,[l+.17,.87,b*.45],[f-.1,.87,b*.45],.016).name="troop supported aisle grab rail";for(let C=l+.15;C<f-.05;C+=.92)ne(a,e.edge,[C,o-1.41,b*.45],[C,.87,b*.45],.01).name="troop grab rail roof bow hanger"}U(a,e.edge,[.18,.044,1.39],[l-.02,.012,0],"troop continuous boarding threshold")}else if(t==="COMMAND"){for(let R of[i+1.03,i+2.4])u(R,-.1,-Math.PI/2,.8),y(()=>w(R,.64,1.02));y(()=>{T(i+3.58,-.76,.58,1.07),Ye(a,e.rubber,[[i+3.58,.99,-.56],[i+3.58,1.14,-.91],[-1.5,1.14,-.91],[-1.5,1.14,-.4],[-1.5,1.35,-.4]],.018,24).name="command supported roof radio feed conduit"}),U(n,e.edge,[.36,.1,.28],[-1.5,2.78,-.4],"command roof radio bearing pedestal").userData.originalRoleElectronics=!0,U(n,e.edge,[.16,.12,.16],[-1.08,2.8,-.68],"command roof mast bearing pedestal").userData.originalRoleElectronics=!0;for(let R of[-1,1])U(n,e.edge,[.15,.06,.15],[-1.08+R*.55,2.77,-.68+R*.45],"command radio guy roof anchor pad").userData.originalRoleElectronics=!0;let b=Mt("command rear access assembly");b.userData.retainWithCrewModule=!0,a.add(b);let C=new Set(a.children),D=R=>i+(Math.min(R,2.36)-1.2)*.17/1.16,E=Ze(a,e.paint,ct(-.45,1.48,.45,2.48,.04).getPoints(12).map(R=>[R.x,R.y]),[],(R,P,F)=>[D(P)-.01-F,P-1.41,R]);E.name="command fitted rear service door",E.userData.cutawayShell=!0;for(let R of[1.73,2.26])U(a,e.edge,[.065,.095,.09],[D(R)-.013,R-1.41,-.49],"command rear door seated hinge leaf"),k(a,e.steel,.019,.1,[D(R)-.035,R-1.41,-.49],"z",.019,24).name="command rear door retained hinge pin";for(let R of[1.79,1.96])ne(a,e.edge,[D(R)-.057,R-1.41,.29],[D(R)-.093,R-1.41,.29],.012).name="command rear door handle seated post";ne(a,e.steel,[D(1.79)-.093,1.79-1.41,.29],[D(1.96)-.093,1.96-1.41,.29],.012).name="command rear access pull";for(let R of[...a.children])C.has(R)||b.add(R)}else{u(i+1.44,-.17,-Math.PI/2,.74),y(()=>w(i+1.44,.53,.9)),u(i+.48,.52,0,.7),y(()=>T(i+.4,-.64,.34,.82));let b=-1,C=-.48,D=k(a,e.edge,.14,.055,[b,.0565,C],"y",.14,40);D.name="recce mast floor bearing flange",D.userData.originalRoleSensor=!0;let E=k(a,e.castSteel,.065,.94,[b,.55,C],"y",.065,40);E.name="recce continuous internal mast support",E.userData.originalRoleSensor=!0;let R=k(n,e.edge,.21,.05,[b,2.375,C],"y",.21,48);R.name="recce mast seated roof bearing",R.userData.originalRoleSensor=!0;for(let P of[-1,1])U(n,e.edge,[.12,.035,.12],[b+P*.35,2.375,C+.25],"recce sensor brace roof bearing pad").userData.originalRoleSensor=!0;y(()=>{let P=Ye(a,e.rubber,[[i+1.44,.835,.69],[i+1.44,.35,.83],[b,.1,.83],[b,.1,C],[b,.99,C]],.013,24);P.name="recce supported sensor console harness",P.userData.originalRoleSensor=!0})}}function M1(n,e,t){let i=Mt("combat supported crew compartment");i.position.set(-.35,t-.94,0),n.add(i),k(i,e.edge,.6,.06,[0,0,0],"y",.6,64).name="combat suspended crew floor",k(i,e.rubber,.565,.012,[0,.036,0],"y",.565,64).name="combat nonslip crew floor insert";for(let[o,a]of[[-.35,0],[.35,0],[0,-.35],[0,.35]])ne(i,e.castSteel,[o,.02,a],[o,1.14,a],.025).name="combat continuous roof ring basket support",U(i,e.edge,[.085,.055,.085],[o,.032,a],"combat basket floor support shoe"),U(i,e.edge,[.085,.07,.085],[o,1.12,a],"combat basket roof ring attachment");for(let o of[-1,1]){let a=tl(i,e,-.16,o*.33,!0);a.scale.setScalar(.75),a.position.y=.259125,a.name="combat restrained operator seat"}U(i,e.castSteel,[.19,.05,.19],[.24,.066,0],"combat console floor shoe"),ne(i,e.edge,[.24,.08,0],[.24,.48,0],.033).name="combat crew console supported column";let s=new we(new Jt(.18,.25,.34,3,.025),e.paint);s.position.set(.24,.51,0),s.name="combat crew console enclosure",i.add(s),U(i,e.edge,[.014,.18,.26],[.144,.54,0],"combat crew console screen bezel");let r=e.glass.clone();r.color.set("#182d32"),r.roughness=.2,U(i,r,[.005,.14,.22],[.134,.54,0],"combat crew console inert display");for(let o of[-1,1])ne(i,e.edge,[.15,.43,o*.13],[.08,.43,o*.13],.012).name="combat crew console grip support",k(i,e.rubber,.02,.08,[.08,.47,o*.13]).name="combat crew console grip";Ye(i,e.rubber,[[.24,.385,0],[.24,.14,0],[.3,.075,0],[.35,.075,0],[.35,1.12,0]],.013,24).name="combat supported console harness"}function E1(n,e){let t=-n.userData.length/2,i=l=>t+(l-1.2)*.17/1.16,s=Mt("troop boarding ramp");s.userData.inspectionKey="body",n.add(s);let r=ct(-.74,1.34,.74,2.23,.045),o=ct(-.8,1.28,.8,2.29,.07).getPoints(12).map(l=>[l.x,l.y]);Ze(n,e.edge,o,[r.clone()],(l,c,p)=>[i(c)-.004-p,c,l]).userData.component="troop ramp aperture retaining frame",Ze(n,e.rubber,ct(-.756,1.316,.756,2.246,.06).getPoints(12).map(l=>[l.x,l.y]),[ct(-.695,1.346,.695,2.196,.025)],(l,c,p)=>[i(c)-.004-p*.75,c,l]).name="troop ramp continuous compression seal";let a=Ze(s,e.paint,ct(-.72,1.33,.72,2.215,.035).getPoints(12).map(l=>[l.x,l.y]),[],(l,c,p)=>[i(c)-.016-p,c,l]);a.name="rear ramp",a.userData.cutawayShell=!0;for(let l of[-1,1])U(n,e.darkSteel,[.22,.105,.16],[t+.085,1.3,l*.54],"troop ramp chassis hinge bracket"),k(s,e.steel,.035,.17,[i(1.338)-.042,1.338,l*.54],"z",.035,24).name="troop ramp seated hinge barrel",k(n,e.darkSteel,.014,.23,[i(1.338)-.042,1.338,l*.54],"z",.014,24).name="troop ramp retained hinge pin",ne(s,e.edge,[i(1.41)-.064,1.41,l*.58],[i(2.16)-.064,2.16,l*.58],.018).name="troop ramp supported outer stiffener",k(s,e.darkSteel,.02,.02,[i(2.16)-.063,2.16,l*.59],"x",.02,6).name="troop ramp seated latch";for(let l of[1.47,1.62,1.77,1.92,2.07])ne(s,e.edge,[i(l)-.012,l,-.61],[i(l)-.012,l,.61],.01).name="troop ramp interior tread return"}function w1(n,e,t){let i=n.userData.length/2,s=Mt("mine roller carrier integration frame");s.userData.inspectionKey="chassis",n.add(s),t.updateMatrix();for(let r of[-1,1]){let o=new L(-r*.45,.48,-.3).applyMatrix4(t.matrix);U(s,e.darkSteel,[.24,.2,.28],[i-.26,.89,r*.64],"mine roller chassis bearing"),U(s,e.edge,[.25,.1,.36],[i-.26,.94,r*.78],"mine roller pivot bearing cross shoe");for(let l of[r*.74,r*.9])U(s,e.edge,[.16,.22,.035],[i-.22,.99,l],"mine roller seated pivot cheek");k(s,e.steel,.026,.3,[i-.22,1,r*.79],"z",.026,24).name="mine roller retained chassis pivot";let a=Mt("mine roller chassis-connected linkage");a.userData.inspectionKey="front",n.add(a),Ze(a,e.paint,[[i-.3,.93],[o.x+.04,o.y-.07],[o.x+.04,o.y+.062],[i-.28,1.085]],[],(l,c,p)=>[l,c,o.z-.02+p]).name="mine roller continuous draw arm",k(a,e.darkSteel,.049,.1,[i-.22,1,r*.855],"z",.049,24).name="mine roller draw arm pivot bushing",k(a,e.steel,.034,.12,o.toArray(),"z",.034,24).name="mine roller implement clevis pin"}}function T1(n){let e=n.userData.mission==="RECOVERY",t=n.userData.length||6.25,i=n.userData.width||2.3,s=t/2,r=[];return n.traverse(o=>{o.name==="run-flat wheel"&&r.push(o)}),{recovery:e,length:t,width:i,front:s,rear:-s,crewStart:-s+.28,crewEnd:e?-.58:s-2.65,crewBase:e?1.64:1.4,cabFloor:e?1.8125:1.435,cabRoof:e?2.78:2.36,cabBack:e?.7:s-2.15,cabFront:e?2.3:s-.98,cabHalf:e?.95:.76,axles:[...new Set(r.map(o=>o.position.x))].sort((o,a)=>o-a),wheelY:r[0]?.position.y??.62,wheelZ:Math.abs(r[0]?.position.z??i*.44)}}function A1(n,e,t,i){let s=zr(t,e),r=s.children.filter(_=>_.name==="supported crew seat"),o=new Set(r),a=new Set,l=new Set;for(let _ of[...s.children])o.has(_)||(_.removeFromParent(),_.traverse(g=>{g.geometry&&a.add(g.geometry),g.material&&!Object.values(e).includes(g.material)&&l.add(g.material)}));for(let _ of a)_.dispose();for(let _ of l)_.dispose();let c=i.crewEnd-i.crewStart,p=(i.crewEnd+i.crewStart)/2,d=i.width*.34,h=.7,f=Math.ceil(r.length/2),m=(c-.35)/f;U(s,e.edge,[c,.035,d*2],[p,i.crewBase+.0175,0],"fitted capacity carrier floor"),U(s,e.rubber,[c-.04,.004,d*2-.035],[p,i.crewBase+.037,0],"fitted capacity nonslip floor");for(let _=0;_<r.length;_++){let g=Math.floor(_/2),u=_===r.length-1&&r.length%2;r[_].position.set(p+(g-(f-1)/2)*m,i.crewBase+.039+.315*h,u?0:(_%2?1:-1)*Math.min(.49,d-.22)),r[_].scale.setScalar(h)}for(let _ of[i.crewStart+.12,i.crewEnd-.12])for(let g of[-1,1])U(s,e.castSteel,[.16,.04,.16],[_,i.crewBase+.02,g*(d-.12)],"fitted capacity floor bearing foot");return s.userData.fittedZone="rear crew floor",s.userData.fittedSeatCount=r.length,s}function R1(n,e,t,i){let s=t.charCodeAt(4)-65,r=Mt(t);if(r.userData={assetId:t,illustrative:!0,units:"metres",fittedZone:s===3?"existing front cab":s===6?"existing carrier skins":"carrier protective surfaces"},s===6){n.updateWorldMatrix(!0,!0);let o=[];n.traverse(a=>{a.isMesh&&a.name==="hull shell"&&o.push(a)});for(let a of o){let l=new we(a.geometry.clone().applyMatrix4(a.matrixWorld),e.paint.clone());l.material.color.multiplyScalar(1.075),l.name="hull shell",l.userData={...a.userData,component:"fitted lightweight carrier skin"},l.castShadow=a.castShadow,l.receiveShadow=a.receiveShadow,r.add(l),a.removeFromParent(),a.geometry.dispose()}}else if(s===3){for(let h of[i.cabBack,i.cabFront])for(let f of[-1,1])i.recovery||U(r,e.edge,[.18,.035,.19],[h,1.4175,f*i.cabHalf],"fitted cab lower-hull bearing rail"),U(r,e.castSteel,[.12,.04,.12],[h,i.cabFloor+.02,f*i.cabHalf],"fitted cab frame bearing foot"),ne(r,e.pressedSteel,[h,i.cabFloor+.035,f*i.cabHalf],[h,i.cabRoof-.035,f*i.cabHalf],.029).name="fitted reinforced cab continuous pillar";for(let h of[-1,1])U(r,e.pressedSteel,[i.cabFront-i.cabBack+.08,.05,.065],[(i.cabFront+i.cabBack)/2,i.cabRoof-.025,h*i.cabHalf],"fitted cab roof longitudinal reinforcement");for(let h of[i.cabBack,i.cabFront])U(r,e.pressedSteel,[.065,.05,i.cabHalf*2+.06],[h,i.cabRoof-.025,0],"fitted cab roof transverse reinforcement");let o=h=>i.recovery?2.94-(h-1.74)*(.47/1.01)+.012:i.front-(h-1.2)*.75/1.16,a=i.recovery?1.8:1.48,l=i.recovery?1.99:1.73,c=i.recovery?1.03:i.width*.32,p=Ze(r,e.paint,[[-c,a],[c,a],[c-.055,l],[-c+.055,l]],[],(h,f,m)=>[o(f)+.004+m*.45,f,h]);p.name="fitted reinforced cab lower front skin",p.userData.cutawayShell=!0;let d=n.getObjectByName("driver controls");d&&(d.userData.reinforcedBy=t)}else if(s===5)for(let o of[-1,1]){Ze(r,e.paint,[[-i.length*.36,0],[i.length*.36,0],[i.length*.4,.2],[-i.length*.4,.2]],[],(a,l,c)=>[a,.83+l*.28+c*.3,o*l*3]).name="fitted underside protective plate";for(let a of[-i.length*.3,i.length*.3])U(r,e.edge,[.16,.14,.16],[a,.94,o*.5],"fitted underside carrier attachment")}else{let o=i.recovery?1.13:i.front-1.94,a=i.recovery?2.22:i.front-1.08,l=i.recovery?1.83:1.5,c=i.recovery?2.06:1.83;for(let p of[-1,1]){let d=f=>i.recovery?1.174:i.width/2*(.75+(f-1.2)*.1/1.16)+.012,h=Ze(r,s===1?e.castSteel:e.paint,[[o,l],[a,l],[a+.035,c-.05],[a-.05,c],[o+.03,c]],[],(f,m,_)=>[f,m,p*(d(m)+_*.45)]);h.name="fitted cab side protective panel",h.userData.cutawayShell=!0}}return r}function C1(n,e,t,i,s){let r=t.charCodeAt(4)-65;if([1,2,3,6].includes(r)){let c=Mt(t);c.userData={assetId:t,illustrative:!0,units:"metres",fittedZone:"existing axle stations"};for(let p of[...n.children])p.isMesh&&p.geometry.type==="CylinderGeometry"&&p.position.y<1.35&&i.axles.some(d=>Math.abs(p.position.x-d)<.35)&&s(p);for(let p of i.axles){let d=el(e,{light:r===2,adaptive:r===6,springs:[1,2,3].includes(r),widthOverride:i.wheelZ/.49});d.position.set(p,i.wheelY-.44,0),c.add(d);for(let h of[-1,1]){let f=h*i.wheelZ/.49*.29,m=i.wheelY+.43;i.recovery?U(c,e.edge,[.12,1.6-m,.14],[p+.12,(1.6+m)/2,f],"fitted suspension load-deck bearing bracket"):(U(c,e.edge,[.15,.03,.16],[p+.12,.935,f],"fitted suspension chassis bearing shoe"),ne(c,e.castSteel,[p+.12,.94,f],[p+.12,m,f],.03).name="fitted suspension connected chassis hanger")}}return Vn(c)}let o=zr(t,e);if(o.scale.multiplyScalar(.64),o.position.set(i.front-1.13,i.recovery?.98:1.12,i.recovery?0:.37),o.userData.fittedZone="enclosed front power bay",o.userData.illustrativeFitScale=.64,!i.recovery){let c=n.getObjectByName("driver controls");if(c){for(let d of[...c.children])d.isMesh&&d.position.z>.25&&/seat|bolster|head restraint|restraint|bellows/.test(d.name)&&s(d);for(let d of["cab floor","dashboard","carrier supported dashboard cowl"]){let h=c.getObjectByName(d);if(h)if(h.geometry.type==="ExtrudeGeometry"){let f=h.geometry.parameters;h.geometry.dispose(),h.geometry=new Gt(f.shapes,{...f.options,depth:.84})}else{let f=new bt().setFromObject(h),m=f.getSize(new L);h.geometry.dispose(),h.geometry=new Jt(m.x,m.y,m.z/2,2,Math.min(.01,m.y*.2)),h.position.z=-m.z/4}}}let p=U(n,e.edge,[1.65,.74,.035],[i.front-1.15,1.77,-.015],"fitted engine crew bulkhead");p.userData.cutawayShell=!0}let a=i.recovery?1.64:1.4,l=o.position.y+.064*.64*(r===5?.78:1);for(let c of[-1,1])U(n,e.edge,[1.47,Math.abs(a-l)+.025,.14],[o.position.x-.12,(a+l)/2,o.position.z+c*.38*.64*(r===5?.78:1)],"fitted power-pack carrier bearing beam");return o}function hd(n,e,t=ki()){let i=Oc(n,t),s=new Map,r=new Map,o=[];e.forEach(f=>{let m=typeof f=="string"?f:f.id;if(!rd.includes(m))throw new Error("Unknown 3D asset: "+m);if(o.push(m),!m.startsWith("SE-")){let _=m.split("-")[0];s.set(_,m),r.has(_)||r.set(_,[]),r.get(_).push(m)}});let a=i.userData.length||6.25,l=i.userData.width||2.3,c=i.userData.roof||2.75,p=T1(i),d=f=>{f.removeFromParent();let m=new Set,_=new Set(Object.values(t));i.traverse(x=>{x.geometry&&m.add(x.geometry);for(let M of Array.isArray(x.material)?x.material:[x.material])M&&_.add(M)});let g=new Set,u=new Set;f.traverse(x=>{x.geometry&&g.add(x.geometry);for(let M of Array.isArray(x.material)?x.material:[x.material])M&&u.add(M)});for(let x of g)m.has(x)||x.dispose();for(let x of u)_.has(x)||x.dispose()},h=i.getObjectByName(n.toLowerCase()+" mission interior");if(s.has("CAP")&&h){let f=h.getObjectByName("command rear access assembly");f&&(i.updateWorldMatrix(!0,!0),i.attach(f)),d(h)}if(s.has("COM")){let f=i.getObjectByName("mission role electronic installation");f&&d(f);let m=[];i.traverse(_=>{(_.userData.reservedOriginalRadioZone||_.userData.originalRoleElectronics)&&m.push(_)});for(let _ of m)d(_)}if(s.has("SA")&&n==="RECCE"){let f=[];i.traverse(_=>{_.userData.originalRoleSensor&&f.push(_)});for(let _ of f)d(_);let m=k(i,t.paint,.12,.035,[-1,2.37,-.48],"y",.12,40);m.name="recce replaced mast port blanking cover",m.userData.cutawayShell=!0}for(let[f,m]of s){let _=f==="CAP"?A1(i,t,m,p):f==="PRO"?R1(i,t,m,p):f==="MOB"?C1(i,t,m,p,d):zr(m,t);if(_.userData.mountedCard=m,_.userData.representativeOnly=!0,_.userData.contributingPurchasedIds=[...r.get(f)],f==="CAP"&&n==="RECOVERY"){let g=i.getObjectByName("recovery stowage");g&&d(g);let u=i.getObjectByName("recovery crane");u&&(u.position.z=-.95)}if(f==="FP"&&(i.getObjectByName("mission weapon")?.removeFromParent(),_.position.set(-.35,c,0)),f==="COM"&&(i.getObjectByName("mission radio")?.removeFromParent(),_.position.set(.1,1.45,-.65),h&&!s.has("CAP"))){let g=m==="COM-B"?3:m==="COM-G"?2:1;U(i,t.edge,[g*.4-.03,.08,.29],[.1,1.47,-.65],"purchased radio supported carrier shelf")}if(f==="SA"&&(i.getObjectByName("mission sensor")?.removeFromParent(),_.position.set(-2.3,c,.5)),f==="ACC")if(m==="ACC-B")_.position.set(-a/2-1.43,0,0);else if(["ACC-C","ACC-E"].includes(m))i.getObjectByName("mission roller")?.removeFromParent(),_.scale.setScalar(1.9),_.rotation.y=Math.PI/2,_.position.set(a/2+1.05,.1,0);else if(["ACC-A","ACC-F"].includes(m)){i.getObjectByName("mounted WR-12")?.removeFromParent(),_.rotation.y=Math.PI/2,_.position.set(a/2+.15,1.15,0),U(i,t.edge,[.8,.27,1.3],[a/2+.1,1.015,0],"winch chassis crossmember");for(let g of[-1,1])ne(i,t.darkSteel,[a/2-.3,.92,g*.44],[a/2+.38,1.12,g*.44],.035).name="winch mounting brace"}else _.position.set(-a/2+.9,1.35,0);i.add(_)}return i.userData.configuration=!0,i.userData.installed=Object.fromEntries(s),i.userData.authoritativePurchaseIds=[...o],i.userData.purchaseSources=Object.fromEntries([...r].map(([f,m])=>[f,[...m]])),i.userData.representation="one physical representative per family; authoritative purchase effects remain additive",i}function ud(n){let e=[];n.traverse(s=>{s.isMesh&&(s.name==="hull shell"||s.userData.cutawayShell===!0)&&e.push({mesh:s,material:s.material,castShadow:s.castShadow,temporary:null})});let t=!1;function i(s){if(t!==!!s){t=!!s;for(let r of e)if(t){let o=a=>{let l=a.clone();return l.transparent=!0,l.opacity=.13,l.depthWrite=!1,l.needsUpdate=!0,l};r.temporary=Array.isArray(r.material)?r.material.map(o):o(r.material),r.mesh.material=r.temporary,r.mesh.castShadow=!1}else{r.mesh.material=r.material,r.mesh.castShadow=r.castShadow;for(let o of Array.isArray(r.temporary)?r.temporary:[r.temporary])o?.dispose();r.temporary=null}}}return{apply:i,dispose(){i(!1)}}}function dd(n){let e=[...n.children],t=new Map,i=!!n.userData.mission,s=(n.userData.assetId||"").split("-")[0],r=0;function o(d){return d.userData.mountedCard?"equipment:"+d.userData.mountedCard:typeof d.userData.inspectionKey=="string"&&/^engine:(?:head|block|sump|rotating|transmission|intake|exhaust|cooling|services|skid)$/.test(d.userData.inspectionKey)?d.userData.inspectionKey:d.name==="run-flat wheel"?"wheel:"+ ++r:/crane/.test(d.name)?"crane":/driver controls/.test(d.name)?"cockpit":d.name==="mission weapon"?"mount":d.name==="mission radio"?"controls":d.name==="mission sensor"?"optics":d.name==="mission roller"?"front":d.name==="mounted WR-12"?"mechanism":/hull shell|cab rear|deck|lower.*hull/.test(d.name)?"body":/glazing|mirror/.test(d.name)||d.material?.name==="optical glass"?"glass":i?d.position.y<1.25?"chassis":d.position.x>1.5?"front":"body":s==="CAP"||s==="TRAIN"?/roof/.test(d.name)?"roof":d.position.y>.39?"seating":"frame":s==="MOB"?d.position.x>.49?"cooling":d.position.y>.72?"heads":d.material?.name==="machined steel"?"connections":"powertrain":s==="FP"?d.position.x>.45?"barrel":d.position.y<.3?"mount":"controls":s==="COM"||s==="SA"?d.position.y>.65?"optics":d.material?.name==="machined steel"?"connections":"controls":s==="PRO"?d.material?.name==="machined steel"?"connections":"protection":s==="ACC"?d.position.y<.16?"frame":d.material?.name==="machined steel"?"connections":"mechanism":d.position.y>.85?"display":d.position.y>.7?"documents":"frame"}for(let d of e){let h=o(d);if(!t.has(h)){let f=new St;f.name=h,n.add(f),t.set(h,f)}t.get(h).add(d)}n.updateWorldMatrix(!0,!0);let a=new bt().setFromObject(n),l=a.getCenter(new L),c=a.getSize(new L),p=[...t].map(([d,h],f)=>{let m=new bt().setFromObject(h),_=m.getCenter(new L),g=_.clone().sub(l),u;return d==="engine:rotating"||d==="engine:skid"?u=new L:d==="engine:head"?u=new L(0,c.y*.46,0):d==="engine:block"?u=new L(0,c.y*.18,-c.z*.38):d==="engine:sump"?u=new L(0,-c.y*.25,0):d==="engine:transmission"?u=new L(-c.x*.28,0,0):d==="engine:cooling"?u=new L(c.x*.25,0,0):d==="engine:intake"?u=new L(0,c.y*.2,-c.z*.38):d==="engine:exhaust"?u=new L(0,c.y*.15,c.z*.4):d==="engine:services"?u=new L(0,0,-c.z*.3):d.startsWith("wheel:")?u=new L(0,-.15,Math.sign(_.z)||1).multiplyScalar(c.z*.4):d==="body"||d==="roof"?u=new L(0,c.y*.55,0):d==="chassis"||d==="frame"?u=new L(0,-c.y*.26,0):d==="glass"?u=new L(c.x*.18,c.y*.25,0):d==="cockpit"?u=new L(c.x*.2,c.y*.15,-c.z*.55):(g.lengthSq()<.01&&g.set(Math.sin(f*2.4),.8,Math.cos(f*2.4)),u=g.normalize().multiplyScalar(Math.max(c.length()*.24,.22)),u.y+=c.y*.16),{key:d,object:h,origin:h.position.clone(),vector:u,center:_}});return{parts:p,apply(d){if(!Number.isFinite(d)||d<0||d>1)throw Error("Invalid assembly separation");for(let h of p)h.object.position.copy(h.origin).addScaledVector(h.vector,d);n.updateWorldMatrix(!0,!0)},restore(){this.apply(0)}}}function fd(n,e,t,i=[7,4.5,7],s=null){e.updateWorldMatrix(!0,!0);let r=s||new bt().setFromObject(e,!0),o=r.getCenter(new L),a=r.getSize(new L).length()/2;n.aspect=t;let l=Ms.degToRad(n.fov),c=Math.min(l/2,Math.atan(Math.tan(l/2)*t)),p=Math.max(a/Math.sin(c)/.86,1),d=new L(...i).normalize(),h=[];for(let _ of[r.min.x,r.max.x])for(let g of[r.min.y,r.max.y])for(let u of[r.min.z,r.max.z])h.push(new L(_,g,u));let f=Math.max(a*1.01,.1),m=p;n.near=.001,n.far=p+a*3+1,n.updateProjectionMatrix();for(let _=0;_<24;_++){let g=(f+m)/2;n.position.copy(o).addScaledVector(d,g),n.lookAt(o),n.updateMatrixWorld(!0);let u=0;for(let x of h){let M=x.clone().project(n);u=Math.max(u,Math.abs(M.x),Math.abs(M.y))}u>.86?f=g:m=g}return n.position.copy(o).addScaledVector(d,m),n.lookAt(o),n.near=Math.max(.01,m-a*1.5),n.far=m+a*3+1,n.updateProjectionMatrix(),n.updateMatrixWorld(!0),o}function pd(n,e,t,i=null){e.updateWorldMatrix(!0,!0),n.updateWorldMatrix(!0,!1),n.target.updateWorldMatrix(!0,!1);let s=i||new bt().setFromObject(e,!0);if(s.isEmpty())return;let r=new L().setFromMatrixPosition(n.matrixWorld).sub(new L().setFromMatrixPosition(n.target.matrixWorld)).normalize();n.shadow.updateMatrices(n);let o=n.shadow.camera,a=[];for(let h of[s.min.x,s.max.x])for(let f of[s.min.y,s.max.y])for(let m of[s.min.z,s.max.z]){let _=new L(h,f,m);a.push(_),r.y>1e-4&&a.push(_.clone().addScaledVector(r,-(f-t)/r.y))}let l=new bt().setFromPoints(a.map(h=>h.applyMatrix4(o.matrixWorldInverse))),c=s.getSize(new L),p=Math.max(.08,c.length()*.025);Object.assign(o,{left:l.min.x-p,right:l.max.x+p,bottom:l.min.y-p,top:l.max.y+p,near:Math.max(.01,-l.max.z-p),far:Math.max(.1,-l.min.z+p)}),n.shadow.normalBias=Math.min(.006,Math.max(.001,c.length()*65e-5));let d=Math.max((o.right-o.left)/n.shadow.mapSize.x,(o.top-o.bottom)/n.shadow.mapSize.y);n.shadow.radius=Ms.clamp(.045/d,3,48),o.updateProjectionMatrix(),n.shadow.updateMatrices(n)}function md(n,e,t=0){n=Math.max(1,n),e=Math.max(1,e);let i=n>=850,s=!i&&e<520,r=i?{x:n-Math.min(420,n*.4),y:0,w:Math.min(420,n*.4),h:e}:s?{x:0,y:0,w:n,h:e}:{x:0,y:Math.round(e*.42),w:n,h:Math.round(e*.58)},o=i?{x:0,y:0,w:r.x,h:e}:{x:0,y:0,w:n,h:s?e:r.y},a=54,l=Math.max(1,Math.floor((r.h-140)/a));return{panel:r,model:o,rowHeight:a,capacity:l,pages:Math.max(1,Math.ceil(t/l))}}function P1(n,e,t,i,s=0){let r=f=>e>=f.x&&e<f.x+f.w&&t>=f.y&&t<f.y+f.h,o=n.inspectionButtons?.find(r);if(o)return o.row.disabled?"__panel":o.row.key;if(n.primaryButton&&r(n.primaryButton))return n.primaryButton.row.disabled?"__panel":n.primaryButton.row.key;let a=n.panel;if(e<a.x||e>a.x+a.w||t<a.y||t>a.y+a.h)return null;let l=n.sectionButtons?.find(f=>e>=f.x&&e<f.x+f.w&&t>=f.y&&t<f.y+f.h);if(l)return l.key;let c=n.headerButtons?.find(f=>e>=f.x&&e<f.x+f.w&&t>=f.y&&t<f.y+f.h);if(c)return c.row.disabled?"__panel":c.row.key;if(n.pageButtons){let f=n.pageButtons.find(r);if(f)return f.disabled?"__panel":f.key}else if(t>=a.y+a.h-46)return e<a.x+a.w/2?"__previous":"__next";let p=n.placed?.find(f=>t>=f.y&&t<f.y+f.h&&(f.x===void 0||e>=f.x&&e<f.x+f.w)),d=Math.floor((t-a.y-88)/n.rowHeight);if(!n.placed&&(d<0||d>=n.capacity))return"__panel";let h=n.placed?p?.row:i[s*n.capacity+d];return h&&h.kind!=="text"&&!h.disabled?h.key:"__panel"}function I1(n,e,t,i=140){let s=Math.max(2,Math.floor((t-i-10)/18)),r=[[]],o=0;function a(p,d){let h=String(p??"").split(/\s+/),f=[],m="";for(let _ of h){for(;_.length>d;)m&&(f.push(m),m=""),f.push(_.slice(0,d)),_=_.slice(d);m.length+_.length+1>d?(f.push(m),m=_):m+=(m?" ":"")+_}return m&&f.push(m),f}function l(p,d){let h=Math.max(12,Math.floor(((e-24-(d-1)*8)/d-20)/8)),f=[...a(p.label,h),...a(p.value,h)],m=[];for(let _=0;_<Math.max(1,f.length);_+=s){let g=f.slice(_,_+s);m.push({row:{...p,label:g.join(`
`),value:null},h:Math.max(48,g.length*18+14)})}return m}function c(p){let d=Math.max(...p.map(h=>h.h));o+d>t-i&&r.at(-1).length&&(r.push([]),o=0),p.forEach((h,f)=>r.at(-1).push({...h,h:d,column:f,columns:p.length===2?2:1,lastInBand:f===p.length-1})),o+=d}for(let p=0;p<n.length;p++){let d=n[p];if(e>=380&&d.compact==="bid"&&n[p+1]?.compact==="bid"){let f=l(d,2),m=l(n[++p],2);for(let _=0;_<Math.max(f.length,m.length);_++){let g=[f[_],m[_]].filter(Boolean);c(g)}}else for(let f of l(d,1))c([f])}return r}function gd(){let n=new On,e=new Kn(0,1,0,1,-10,10),t={rows:[]},i=null,s=md(1,1),r=0,o=null,a=new Map,l=[],c={panel:"#f7f7f2",ink:"#1f302b",muted:"#52675d",line:"#d6ded5",field:"#ffffff",accent:"#365a46",selected:"#e3ece0",disabled:"#edf0e9",disabledInk:"#78877c"};function p(){for(let m of l)m.dispose();l.length=0,n.clear()}function d(m,_,g,u,x,M=0,v=0){if(g<=0||u<=0)return;let w;if(v){let y=Math.min(v,g/2,u/2),b=new Dt;b.moveTo(y,0),b.lineTo(g-y,0),b.quadraticCurveTo(g,0,g,y),b.lineTo(g,u-y),b.quadraticCurveTo(g,u,g-y,u),b.lineTo(y,u),b.quadraticCurveTo(0,u,0,u-y),b.lineTo(0,y),b.quadraticCurveTo(0,0,y,0),w=new pr(b),w.translate(-g/2,-u/2,0)}else w=new Bn(g,u);let T=new ci({color:x,side:At,toneMapped:!1,depthTest:!1,depthWrite:!1});l.push(w,T);let I=new we(w,T);I.position.set(m+g/2,_+u/2,M),n.add(I)}function h(m,_,g,u,x,M=14,v=c.ink,w="400"){if(u<=0||x<=0)return;let T=document.createElement("canvas"),I=2;T.width=Math.max(2,Math.ceil(u*I)),T.height=Math.max(2,Math.ceil(x*I));let y=T.getContext("2d");y.scale(I,I),y.font=`${w} ${M}px system-ui, sans-serif`,y.fillStyle=v,y.textBaseline="middle";let b=[];for(let P of String(m??"").split(`
`)){let F=P.split(/\s+/),B="";for(let V of F){for(;y.measureText(V).width>u-4&&V.length>1;){B&&(b.push(B),B="");let J=V.length;for(;J>1&&y.measureText(V.slice(0,J)).width>u-4;)J--;b.push(V.slice(0,J)),V=V.slice(J)}let ee=B?B+" "+V:V;y.measureText(ee).width>u-4&&B?(b.push(B),B=V):B=ee}B&&b.push(B)}b.forEach((P,F)=>y.fillText(P,2,(F+.5)*M*1.25,u-4));let C=new nr(T);C.colorSpace=zt;let D=new ci({map:C,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,side:At}),E=new Bn(u,x);l.push(C,D,E);let R=new we(E,D);R.scale.y=-1,R.position.set(_+u/2,g+x/2,2),n.add(R)}function f(m,_){o=[m,_],p(),s=md(m,_);let g=s.panel,u=g.h<340,x=t.rows.find(q=>q.utility==="language"),M=t.rows.filter(q=>q.utility==="inspection"),v=t.rows.filter(q=>!q.utility),w=v.find(q=>q.primary&&q.kind==="button"&&!q.disabled),T=t.lang==="fr"?{task:"En cours",teams:"\xC9quipes",market:"Manche",tools:"Gestion",inspect:"Explorer",help:u?"Aide":"Aide / sauvegarde"}:{task:"Current",teams:"Teams",market:"Round",tools:"Manage",inspect:"Inspect",help:u?"Help":"Help / save"},I=Object.keys(T).filter(q=>v.some(le=>(le.section||"task")===q)),y=I.includes(t.section)?t.section:I[0]||"task",b=v.filter(q=>(q.section||"task")===y&&q.key!==w?.key),C=s.model.h===_&&g.y===0&&g.w===m,D=C&&M.length?48:0,E=C&&u?0:u?44:76,R=u?Math.max(1,I.length):Math.min(3,Math.max(1,I.length)),P=I.length>1?Math.ceil(I.length/R):0;s.contentY=E+P*48+D+8,s.section=y,a=new Map;let F=w?u?48:Math.max(52,Math.ceil((w.label.length||0)/Math.max(18,Math.floor((g.w-56)/8)))*18+18):0,B=s.contentY+F+56,V=I1(b,g.w,g.h,B);s.pages=V.length,r=Math.min(Math.max(0,Number(t.page)||0),s.pages-1);let ee=s.pages>1||C&&x?44:0;if(s.footerHeight=F+ee+12,e.left=0,e.right=m,e.top=0,e.bottom=_,e.updateProjectionMatrix(),d(g.x,g.y,g.w,g.h,c.panel),d(g.x,g.y,1,g.h,c.line,1),E&&h(t.title,g.x+20,g.y+12,g.w-(x?94:40),30,u?18:24,c.ink,"600"),!u){let q=t.context,le=q?[q.role,q.mission,q.team].filter(Boolean).join(" \xB7 "):t.subtitle;h(le,g.x+20,g.y+44,g.w-40,26,12,c.muted)}if(s.headerButtons=[],x){let q={row:x,x:C&&u?g.x+g.w-116:g.x+g.w-60,y:C&&u?g.y+g.h-56:g.y+4,w:48,h:44};s.headerButtons.push(q),d(q.x,q.y,q.w,q.h,c.field,1,8),h(x.label,q.x+10,q.y+13,q.w-20,26,13,c.accent,"600")}if(s.inspectionButtons=[],M.length){let q=C?g:s.model,le=4,ge=q.x+12,se=q.w-24,fe=Math.min(M.length,Math.max(1,Math.floor((se+le)/48))),W=Math.min(108,(se-le*(fe-1))/fe),j=q.y+(C?E:12);M.forEach((ue,ze)=>{let xe={row:ue,x:ge+ze%fe*(W+le),y:j+Math.floor(ze/fe)*48,w:W,h:44};s.inspectionButtons.push(xe),d(xe.x,xe.y,xe.w,xe.h,ue.disabled?c.disabled:ue.selected?c.accent:c.field,1,9);let Ie=xe.w<72&&ue.label==="Vue g\xE9n\xE9rale"?"Aper\xE7u":ue.label;h(Ie,xe.x+5,xe.y+8,xe.w-10,32,xe.w<72?10:12,ue.disabled?c.disabledInk:ue.selected?"#ffffff":c.ink,ue.selected?"600":"400")})}s.sectionButtons=[];let J=g.y+E+D;P&&I.forEach((q,le)=>{let ge={key:"__section:"+String(t.sectionEpoch||0)+":"+q,x:g.x+12+le%R*(g.w-24)/R,y:J+Math.floor(le/R)*48,w:(g.w-24)/R-4,h:44};a.set(ge.key,q),s.sectionButtons.push(ge),d(ge.x,ge.y,ge.w,ge.h,q===y?c.selected:c.panel,1,8),q===y&&d(ge.x+8,ge.y+41,ge.w-16,2,c.accent,1),h(T[q],ge.x+5,ge.y+9,ge.w-10,32,u?10:12,q===y?c.ink:c.muted,q===y?"600":"400")});let X=g.y+s.contentY;s.placed=[];for(let q of V[r]){let{row:le,h:ge}=q,se=g.y+g.h-s.footerHeight;if(X+ge>se)break;let fe=(g.w-24-((q.columns||1)-1)*8)/(q.columns||1),W=g.x+12+(q.column||0)*(fe+8);s.placed.push({row:le,x:W,w:fe,y:X,h:ge});let j=le.kind==="text",ue=!j&&!le.disabled;j?d(W+8,X+ge-4,fe-16,1,c.line,1):(d(W,X,fe,ge-6,le.disabled?c.disabled:le.kind==="button"?c.selected:c.field,1,8),ue&&le.emphasis==="danger"&&d(W,X,3,ge-6,"#965c44",1));let ze=le.kind==="checkbox"?(le.label.includes("\u2713")?"\u25CF ":"\u25CB ")+le.label:le.label;h(ze,W+10,X+7,fe-20,ge-14,14,le.disabled?c.disabledInk:j?c.muted:c.ink,le.kind==="button"?"500":"400"),q.lastInBand!==!1&&(X+=ge)}s.primaryButton=null,s.pageButtons=[];let K=g.y+g.h-s.footerHeight;if(w){let q={row:w,x:g.x+12,y:K,w:g.w-24,h:F};s.primaryButton=q,d(q.x,q.y,q.w,q.h-4,w.emphasis==="danger"?"#855744":c.accent,1,10),h(w.label,q.x+12,q.y+9,q.w-24,q.h-14,u?w.label.length>70?10:12:14,"#ffffff","600"),K+=F}if(ee){let q={key:"__previous",x:g.x+12,y:K,w:48,h:44,disabled:r===0},le={key:"__next",x:g.x+g.w-60,y:K,w:48,h:44,disabled:r===s.pages-1};s.pageButtons.push(q,le);for(let ge of[q,le])d(ge.x,ge.y,ge.w,ge.h-4,c.field,1,8),h(ge.key==="__previous"?"\u2039":"\u203A",ge.x+16,ge.y+7,ge.w-24,28,22,ge.disabled?c.disabledInk:c.accent);h(C&&u?`${t.title} \xB7 ${r+1}/${s.pages}`:`${r+1} / ${s.pages}`,g.x+68,K+9,g.w-(C&&u&&x?188:136),30,C&&u?10:12,c.muted)}return s}return{scene:n,camera:e,set(m,_,g,u){return t={...m,context:m.context?{...m.context}:void 0,rows:(m.rows||[]).map(x=>({...x}))},i=_,f(g,u)},resize(m,_){return o?.[0]===m&&o?.[1]===_?s:f(m,_)},hit(m,_){return P1(s,m,_,t.rows,r)},activate(m){if(m?.startsWith("__section:")){let g=a.get(m);g&&(t.section=g,t.page=0,i?.("__section",g),o&&f(...o));return}if(m==="__previous"||m==="__next"){let g=Math.max(0,Math.min(s.pages-1,r+(m==="__next"?1:-1)));g!==r&&(t.page=g,i?.(m,g),r!==g&&o&&f(...o));return}let _=t.rows.find(g=>g.key===m);_&&_.kind!=="text"&&!_.disabled&&i?.(m)},get layout(){return s},dispose:p}}function D1(n,e,t){let i=new qa({antialias:!0,alpha:!1,powerPreference:"low-power"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.outputColorSpace=zt,i.toneMapping=wr,i.toneMappingExposure=.95,i.shadowMap.enabled=!0,i.shadowMap.type=Di,i.domElement.tabIndex=0,n.appendChild(i.domElement);let s=gd(),r=!1,o=new On;o.background=new Ke("#f0f3f0");let a=new As(i),l=new Ja,c=a.fromScene(l,.04);o.environment=c.texture,o.environmentIntensity=.65,l.dispose(),a.dispose(),o.add(new xr(15135231,7433055,.28));let p=new Ii(16773595,1.8);p.position.set(-5,9,6),p.castShadow=!0,p.shadow.mapSize.set(2048,2048),Object.assign(p.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:.1,far:50}),p.shadow.normalBias=.015,p.shadow.bias=-1e-4,p.shadow.radius=5,o.add(p);let d=new Ii(15134719,.3);d.position.set(-6,5,-7),o.add(d);let h=new Ht(38,1,.01,100),f=new $a(h,i.domElement);f.enableDamping=!1,f.enablePan=!1,f.enableRotate=!1,f.minZoom=.25,f.maxZoom=5,f.maxPolarAngle=Math.PI*.49;let m=new we(new Bn(100,100),new gr({opacity:.17}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,o.add(m);let _=null,g=!1,u=null,x=0,M=!0,v=null,w=[7,4.5,7],T=null,I=null,y="assembled",b=.7,C=null,D=null;function E(){if(x=0,!M)return;let se=Math.max(n.clientWidth,1),fe=Math.max(n.clientHeight,1);if(i.setViewport(0,0,se,fe),i.setScissorTest(!1),i.clear(),u){let W=r?s.layout.model:{x:0,y:0,w:se,h:fe};i.setViewport(W.x,fe-W.y-W.h,W.w,W.h),i.setScissor(W.x,fe-W.y-W.h,W.w,W.h),i.setScissorTest(!0),i.render(o,h)}r&&(i.setScissorTest(!1),i.setViewport(0,0,se,fe),i.autoClear=!1,i.clearDepth(),i.render(s.scene,s.camera),i.autoClear=!0)}function R(){M&&!x&&(x=requestAnimationFrame(E))}f.addEventListener("change",R);function P(){let se=Math.max(n.clientWidth,1),fe=Math.max(n.clientHeight,1);if(i.setSize(se,fe,!1),r&&s.resize(se,fe),!u){R();return}let W=r?s.layout.model:{w:se,h:fe};T.apply(0);let j=new bt().setFromObject(u,!0);y==="exploded"&&(T.apply(1),j.union(new bt().setFromObject(u,!0))),m.position.y=j.min.y-.025,f.target.copy(fd(h,u,W.w/W.h,w,j)),pd(p,u,m.position.y,j),T.apply(y==="exploded"?b:0),f.update(),D?.update(),R()}function F(){if(!u)return;o.remove(u);let se=new Set,fe=new Set,W=new Set;u.traverse(j=>{j.geometry&&se.add(j.geometry),j.material&&(Array.isArray(j.material)?j.material:[j.material]).forEach(ue=>fe.add(ue))}),se.forEach(j=>j.dispose()),fe.forEach(j=>{for(let ue of Object.values(j))ue?.isTexture&&W.add(ue);j.dispose()}),W.forEach(j=>j.dispose()),u=null}function B(se,fe){v=[se,fe],V(),F();let W=ki();if(u=new St,fe.startsWith("part:")){let Ie=fe.slice(5);if(![se.current?.id,...se.owned.map(at=>at.id)].includes(Ie))throw Error("Part is not visible");u.add(zr(Ie,W))}else u.add(fe==="configuration"?hd(se.mission,se.owned,W):Oc(se.mission,W));let j=u.children[0],ue=new bt().setFromObject(j).getCenter(new L);j.position.sub(ue),u.position.copy(ue),T=dd(j);for(let Ie of T.parts)Ie.anchorLocal=u.worldToLocal(Ie.center.clone());u.traverse(Ie=>{if(Ie.isMesh){let at=(Array.isArray(Ie.material)?Ie.material:[Ie.material]).some(oe=>oe.name==="optical glass");Ie.castShadow=!at,Ie.receiveShadow=!0}}),o.add(u);let ze=new bt().setFromObject(u);m.position.y=ze.min.y-.025,h.zoom=1,w=[7,4.5,7],P(),I=ud(j);let xe=new Set;u.traverse(Ie=>{Ie.material&&xe.add(Ie.material)}),Object.values(W).forEach(Ie=>{xe.has(Ie)||Ie.dispose()})}function V(){I?.dispose(),I=null,C&&(C.removeFromParent(),C.geometry.dispose(),C.material.dispose(),C=null),D&&(o.remove(D),D.geometry.dispose(),D.material.dispose(),D=null),T=null}function ee(se,fe){if(!T)return;if(!["assembled","exploded","cutaway"].includes(se)||!Number.isFinite(fe)||fe<0||fe>1)throw Error("Invalid inspection view");let W=y!==se;if(y=se,b=fe,T.apply(y==="exploded"?b:0),I?.apply(y==="cutaway"),C&&(C.removeFromParent(),C.geometry.dispose(),C.material.dispose(),C=null),y==="exploded"){let j=[];for(let ue of T.parts)j.push(ue.anchorLocal.clone(),u.worldToLocal(new bt().setFromObject(ue.object).getCenter(new L)));C=new ds(new _t().setFromPoints(j),new Ri({color:"#748879",transparent:!0,opacity:.5})),u.add(C)}D?.update(),W?P():R()}let J=new ce,X=new br,K=null,q=null;function le(se){if(!r)return null;let fe=i.domElement.getBoundingClientRect();return s.hit((se.clientX-fe.left)*n.clientWidth/fe.width,(se.clientY-fe.top)*n.clientHeight/fe.height)}i.domElement.addEventListener("pointerdown",se=>{let fe=le(se);fe&&(q=fe,se.preventDefault(),se.stopImmediatePropagation(),i.domElement.setPointerCapture(se.pointerId))},!0),i.domElement.addEventListener("pointermove",se=>{(q||le(se))&&(se.stopImmediatePropagation(),i.domElement.style.cursor=le(se)&&le(se)!=="__panel"?"pointer":"default")},!0),i.domElement.addEventListener("pointerup",se=>{if(q){let fe=q;q=null,se.preventDefault(),se.stopImmediatePropagation(),le(se)===fe&&(s.activate(fe),P())}},!0),i.domElement.addEventListener("wheel",se=>{le(se)&&(se.preventDefault(),se.stopImmediatePropagation(),s.activate(se.deltaY>0?"__next":"__previous"),P())},{capture:!0,passive:!1}),i.domElement.addEventListener("pointerdown",se=>{K=[se.clientX,se.clientY],_=[se.clientX,se.clientY],g=!1,i.domElement.setPointerCapture(se.pointerId)}),i.domElement.addEventListener("pointermove",se=>{if(!_||!u)return;let fe=se.clientX-_[0];Math.hypot(se.clientX-K[0],se.clientY-K[1])>4&&(g=!0,u.rotation.y+=fe*.009,u.updateWorldMatrix(!0,!0),D?.update(),P()),_=[se.clientX,se.clientY]}),i.domElement.addEventListener("pointercancel",()=>{_=null,K=null,q=null}),i.domElement.addEventListener("pointerup",se=>{if(_=null,g||!K||Math.hypot(se.clientX-K[0],se.clientY-K[1])>5){K=null;return}if(K=null,!u||!M)return;let fe=i.domElement.getBoundingClientRect(),W=r?s.layout.model:{x:0,y:0,w:n.clientWidth,h:n.clientHeight};J.set(((se.clientX-fe.left)*n.clientWidth/fe.width-W.x)/W.w*2-1,1-((se.clientY-fe.top)*n.clientHeight/fe.height-W.y)/W.h*2),X.setFromCamera(J,h);for(let j of X.intersectObject(u,!0)){let ue=j.object;for(;ue&&!ue.userData.mountedCard;)ue=ue.parent;if(ue?.userData.mountedCard){t?.(ue.userData.mountedCard);break}}});let ge=new ResizeObserver(P);return ge.observe(n),i.domElement.addEventListener("webglcontextlost",se=>{se.preventDefault(),M=!1,x&&cancelAnimationFrame(x),x=0,e()}),i.domElement.addEventListener("webglcontextrestored",()=>{M=!0,v&&(B(...v),n.dispatchEvent(new Event("sea3drestored")))}),{update:B,inspect:ee,interface(se,fe){r=!0;let W=s.set(se,fe,Math.max(n.clientWidth,1),Math.max(n.clientHeight,1));return P(),W},shadows(se){i.shadowMap.enabled=!!se,m.visible=!!se,R()},parts(){return T?.parts.map(se=>se.key)||[]},focus(se){let fe=T?.parts.find(W=>W.key===se);fe&&(D&&(o.remove(D),D.geometry.dispose(),D.material.dispose()),D=new Mr(fe.object,14001476),o.add(D),R())},view(se){u&&(u.rotation.y=0),w=se==="rear"?[-7,4.5,-7]:se==="front"?[7,2.7,0]:[7,4.5,7],h.zoom=1,P()},dispose(){M=!1,ge.disconnect(),f.dispose(),s.dispose(),V(),F(),m.geometry.dispose(),m.material.dispose(),c.dispose(),i.dispose(),x&&cancelAnimationFrame(x),i.domElement.remove()}}}return Cd(L1);})();
