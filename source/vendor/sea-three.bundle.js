var SEAThree=(()=>{var tl=Object.defineProperty;var wd=Object.getOwnPropertyDescriptor;var Td=Object.getOwnPropertyNames;var Ad=Object.prototype.hasOwnProperty;var Rd=(n,e)=>{for(var t in e)tl(n,t,{get:e[t],enumerable:!0})},Cd=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Td(e))!Ad.call(n,s)&&s!==t&&tl(n,s,{get:()=>e[s],enumerable:!(i=wd(e,s))||i.enumerable});return n};var Pd=n=>Cd(tl({},"__esModule",{value:!0}),n);var Ax={};Rd(Ax,{mount:()=>Tx});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rh=0,zl=1,Ch=2;var Li=1,Ph=2,ys=3,gi=0,Gt=1,Tt=2,On=0,vs=1,kl=2,Hl=3,Vl=4,Ih=5;var Di=100,Lh=101,Dh=102,Nh=103,Uh=104,Fh=200,Oh=201,Bh=202,zh=203,Gl=204,Wl=205,kh=206,Hh=207,Vh=208,Gh=209,Wh=210,Xh=211,qh=212,Yh=213,Zh=214,go=0,_o=1,xo=2,ss=3,yo=4,vo=5,So=6,Mo=7,Qo=0,Jh=1,Kh=2,wn=0,Xl=1,ql=2,Yl=3,wr=4,Zl=5,Jl=6,Kl=7;var $l=300,_i=301,Ni=302,ea=303,ta=304,Tr=306,bo=1e3,In=1001,Eo=1002,Ot=1003,$h=1004;var Ar=1005;var Ht=1006,na=1007;var xi=1008;var tn=1009,jl=1010,Ql=1011,Ss=1012,ia=1013,Tn=1014,pn=1015,An=1016,sa=1017,ra=1018,Ms=1020,ec=35902,tc=35899,nc=1021,ic=1022,mn=1023,Dn=1026,yi=1027,oa=1028,aa=1029,vi=1030,la=1031;var ca=1033,Rr=33776,Cr=33777,Pr=33778,Ir=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,_a=37488,xa=37489,Lr=37490,ya=37491,va=37808,Sa=37809,Ma=37810,ba=37811,Ea=37812,wa=37813,Ta=37814,Aa=37815,Ra=37816,Ca=37817,Pa=37818,Ia=37819,La=37820,Da=37821,Na=36492,Ua=36494,Fa=36495,Oa=36283,Ba=36284,Dr=36285,za=36286;var Xs=2300,wo=2301,po=2302,Al=2303,Rl=2400,Cl=2401,Pl=2402;var jh=3200;var Nr=0,Qh=1,Kn="",zt="srgb",qs="srgb-linear",Ys="linear",dt="srgb";var mo=7680;var eu=519,tu=512,nu=513,iu=514,ka=515,su=516,ru=517,Ha=518,ou=519,au=35044;var sc="300 es",Sn=2e3,rs=2001;function Id(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ld(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lu(){let n=Zs("canvas");return n.style.display="block",n}var qc={},os=null;function rc(...n){let e="THREE."+n.shift();os?os("log",e,...n):console.log(e,...n)}function cu(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=cu(n);let e="THREE."+n.shift();if(os)os("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=cu(n);let e="THREE."+n.shift();if(os)os("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ai(...n){let e=n.join(" ");e in qc||(qc[e]=!0,Ge(...n))}function hu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var uu={[go]:_o,[xo]:So,[yo]:Mo,[ss]:vo,[_o]:go,[So]:xo,[Mo]:yo,[vo]:ss},Mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=1234567,Hs=Math.PI/180,as=180/Math.PI;function Ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function oc(n,e){return(n%e+e)%e}function Dd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Nd(n,e,t){return n!==e?(t-n)/(e-n):0}function Vs(n,e,t){return(1-t)*n+t*e}function Ud(n,e,t,i){return Vs(n,e,1-Math.exp(-t*i))}function Fd(n,e=1){return e-Math.abs(oc(n,e*2)-e)}function Od(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Bd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function kd(n,e){return n+Math.random()*(e-n)}function Hd(n){return n*(.5-Math.random())}function Vd(n){n!==void 0&&(Yc=n);let e=Yc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(n){return n*Hs}function Wd(n){return n*as}function Xd(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function qd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Yd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zd(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),f=o((e+i)/2),u=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*f,l*u,l*h,a*c);break;case"YZY":n.set(l*h,a*f,l*u,a*c);break;case"ZXZ":n.set(l*u,l*h,a*f,a*c);break;case"XZX":n.set(a*f,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*f,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*f,a*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bs={DEG2RAD:Hs,RAD2DEG:as,generateUUID:Ui,clamp:et,euclideanModulo:oc,mapLinear:Dd,inverseLerp:Nd,lerp:Vs,damp:Ud,pingpong:Fd,smoothstep:Od,smootherstep:Bd,randInt:zd,randFloat:kd,randFloatSpread:Hd,seededRandom:Vd,degToRad:Gd,radToDeg:Wd,isPowerOfTwo:Xd,ceilPowerOfTwo:qd,floorPowerOfTwo:Yd,setQuaternionFromProperEuler:Zd,normalize:Kt,denormalize:ns},ce=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],f=i[s+2],u=i[s+3],h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(u!==_||l!==h||c!==p||f!==g){let m=l*h+c*p+f*g+u*_;m<0&&(h=-h,p=-p,g=-g,_=-_,m=-m);let d=1-a;if(m<.9995){let y=Math.acos(m),M=Math.sin(y);d=Math.sin(d*y)/M,a=Math.sin(a*y)/M,l=l*d+h*a,c=c*d+p*a,f=f*d+g*a,u=u*d+_*a}else{l=l*d+h*a,c=c*d+p*a,f=f*d+g*a,u=u*d+_*a;let y=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=y,c*=y,f*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],f=i[s+3],u=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+f*u+l*p-c*h,e[t+1]=l*g+f*h+c*u-a*p,e[t+2]=c*g+f*p+a*h-l*u,e[t+3]=f*g-a*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(s/2),u=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*f*u+c*p*g,this._y=c*p*u-h*f*g,this._z=c*f*g+h*p*u,this._w=c*f*u-h*p*g;break;case"YXZ":this._x=h*f*u+c*p*g,this._y=c*p*u-h*f*g,this._z=c*f*g-h*p*u,this._w=c*f*u+h*p*g;break;case"ZXY":this._x=h*f*u-c*p*g,this._y=c*p*u+h*f*g,this._z=c*f*g+h*p*u,this._w=c*f*u-h*p*g;break;case"ZYX":this._x=h*f*u-c*p*g,this._y=c*p*u+h*f*g,this._z=c*f*g-h*p*u,this._w=c*f*u+h*p*g;break;case"YZX":this._x=h*f*u+c*p*g,this._y=c*p*u+h*f*g,this._z=c*f*g-h*p*u,this._w=c*f*u-h*p*g;break;case"XZY":this._x=h*f*u-c*p*g,this._y=c*p*u-h*f*g,this._z=c*f*g+h*p*u,this._w=c*f*u+h*p*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=i+a+u;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(f-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-i*c,this._z=r*f+o*c+i*l-s*a,this._w=o*f-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),f=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*f,this.y=i+l*f+a*c-r*u,this.z=s+l*u+r*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nl=new P,Zc=new an,Je=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],y=s[1],M=s[4],v=s[7],b=s[2],w=s[5],D=s[8];return r[0]=o*_+a*y+l*b,r[3]=o*m+a*M+l*w,r[6]=o*d+a*v+l*D,r[1]=c*_+f*y+u*b,r[4]=c*m+f*M+u*w,r[7]=c*d+f*v+u*D,r[2]=h*_+p*y+g*b,r[5]=h*m+p*M+g*w,r[8]=h*d+p*v+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-i*r*f+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=f*o-a*c,h=a*l-f*r,p=c*r-o*l,g=t*u+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-f*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(f*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(il.makeScale(e,t)),this}rotate(e){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(il.makeRotation(-e)),this}translate(e,t){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(il.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},il=new Je,Jc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){let n={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qs]:{primaries:e,whitePoint:i,transfer:Ys,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),n}var rt=Jd();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vi,To=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vi===void 0&&(Vi=Zs("canvas")),Vi.width=e.width,Vi.height=e.height;let s=Vi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Vi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yn(t[i]/255)*255):t[i]=Yn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kd=0,ls=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sl(s[o].image)):r.push(sl(s[o]))}else r=sl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function sl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?To.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var $d=0,rl=new P,jt=class n extends Mn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=In,s=In,r=Ht,o=xi,a=mn,l=tn,c=n.DEFAULT_ANISOTROPY,f=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Ui(),this.name="",this.source=new ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bo:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bo:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=$l;jt.DEFAULT_ANISOTROPY=1;var Et=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,v=(p+1)/2,b=(d+1)/2,w=(f+h)/4,D=(u+_)/4,x=(g+m)/4;return M>v&&M>b?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=w/i,r=D/i):v>b?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=x/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=D/r,s=x/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(h-f)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ao=class extends Mn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new jt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ls(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Ao{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Js=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ro=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ft=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,l,c,f,u,h,p,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,f,u,h,p,g,_,m)}set(e,t,i,s,r,o,a,l,c,f,u,h,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=o*f,p=o*u,g=a*f,_=a*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*f,p=l*u,g=c*f,_=c*u;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*f,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*f,p=l*u,g=c*f,_=c*u;t[0]=h-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*f,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*f,p=o*u,g=a*f,_=a*u;t[0]=l*f,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*u,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*f,t[4]=_-h*u,t[8]=g*u+p,t[1]=u,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=p*u+g,t[10]=h-_*u}else if(e.order==="XZY"){let h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+_,t[5]=o*f,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*f,t[10]=_*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Qd)}lookAt(e,t,i){let s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ei.crossVectors(i,sn),ei.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ei.crossVectors(i,sn)),ei.normalize(),Vr.crossVectors(sn,ei),s[0]=ei.x,s[4]=Vr.x,s[8]=sn.x,s[1]=ei.y,s[5]=Vr.y,s[9]=sn.y,s[2]=ei.z,s[6]=Vr.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],y=i[3],M=i[7],v=i[11],b=i[15],w=s[0],D=s[4],x=s[8],T=s[12],I=s[1],U=s[5],A=s[9],R=s[13],C=s[2],N=s[6],B=s[10],H=s[14],ee=s[3],J=s[7],X=s[11],K=s[15];return r[0]=o*w+a*I+l*C+c*ee,r[4]=o*D+a*U+l*N+c*J,r[8]=o*x+a*A+l*B+c*X,r[12]=o*T+a*R+l*H+c*K,r[1]=f*w+u*I+h*C+p*ee,r[5]=f*D+u*U+h*N+p*J,r[9]=f*x+u*A+h*B+p*X,r[13]=f*T+u*R+h*H+p*K,r[2]=g*w+_*I+m*C+d*ee,r[6]=g*D+_*U+m*N+d*J,r[10]=g*x+_*A+m*B+d*X,r[14]=g*T+_*R+m*H+d*K,r[3]=y*w+M*I+v*C+b*ee,r[7]=y*D+M*U+v*N+b*J,r[11]=y*x+M*A+v*B+b*X,r[15]=y*T+M*R+v*H+b*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15],y=l*p-c*h,M=a*p-c*u,v=a*h-l*u,b=o*p-c*f,w=o*h-l*f,D=o*u-a*f;return t*(_*y-m*M+d*v)-i*(g*y-m*b+d*w)+s*(g*M-_*b+d*D)-r*(g*v-_*w+m*D)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return t*(o*f-a*c)-i*(r*f-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],y=t*a-i*o,M=t*l-s*o,v=t*c-r*o,b=i*l-s*a,w=i*c-r*a,D=s*c-r*l,x=f*_-u*g,T=f*m-h*g,I=f*d-p*g,U=u*m-h*_,A=u*d-p*_,R=h*d-p*m,C=y*R-M*A+v*U+b*I-w*T+D*x;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/C;return e[0]=(a*R-l*A+c*U)*N,e[1]=(s*A-i*R-r*U)*N,e[2]=(_*D-m*w+d*b)*N,e[3]=(h*w-u*D-p*b)*N,e[4]=(l*I-o*R-c*T)*N,e[5]=(t*R-s*I+r*T)*N,e[6]=(m*v-g*D-d*M)*N,e[7]=(f*D-h*v+p*M)*N,e[8]=(o*A-a*I+c*x)*N,e[9]=(i*I-t*A-r*x)*N,e[10]=(g*w-_*v+d*y)*N,e[11]=(u*v-f*w-p*y)*N,e[12]=(a*T-o*U-l*x)*N,e[13]=(t*U-i*T+s*x)*N,e[14]=(_*M-g*b-m*y)*N,e[15]=(f*b-u*M+h*y)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,f=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+i,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,f=o+o,u=a+a,h=r*c,p=r*f,g=r*u,_=o*f,m=o*u,d=a*u,y=l*c,M=l*f,v=l*u,b=i.x,w=i.y,D=i.z;return s[0]=(1-(_+d))*b,s[1]=(p+v)*b,s[2]=(g-M)*b,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(h+d))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+M)*D,s[9]=(m-y)*D,s[10]=(1-(h+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Gi.set(s[0],s[1],s[2]).length(),a=Gi.set(s[4],s[5],s[6]).length(),l=Gi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xn.copy(this);let c=1/o,f=1/a,u=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=f,xn.elements[5]*=f,xn.elements[6]*=f,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=Sn,l=!1){let c=this.elements,f=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),p=(i+s)/(i-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===rs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Sn,l=!1){let c=this.elements,f=2/(t-e),u=2/(i-s),h=-(t+e)/(t-e),p=-(i+s)/(i-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Sn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===rs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Gi=new P,xn=new ft,jd=new P(0,0,0),Qd=new P(1,1,1),ei=new P,Vr=new P,sn=new P,$c=new ft,jc=new an,Nn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],u=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ef=0,Qc=new P,Wi=new an,Vn=new ft,Gr=new P,Ds=new P,tf=new P,nf=new an,eh=new P(1,0,0),th=new P(0,1,0),nh=new P(0,0,1),ih={type:"added"},sf={type:"removed"},Xi={type:"childadded",child:null},ol={type:"childremoved",child:null},Lt=class n extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Nn,i=new an,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Je}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(eh,e)}rotateY(e){return this.rotateOnAxis(th,e)}rotateZ(e){return this.rotateOnAxis(nh,e)}translateOnAxis(e,t){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eh,e)}translateY(e){return this.translateOnAxis(th,e)}translateZ(e){return this.translateOnAxis(nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gr.copy(e):Gr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ds,Gr,this.up):Vn.lookAt(Gr,Ds,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ih),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sf),ol.child=e,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ih),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new P(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var St=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rf={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new St;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function al(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=oc(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=al(o,r,e+1/3),this.g=al(o,r,e),this.b=al(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=du[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return rt.workingToColorSpace(qt.copy(this),e),Math.round(et(qt.r*255,0,255))*65536+Math.round(et(qt.g*255,0,255))*256+Math.round(et(qt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(qt.copy(this),t);let i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=zt){rt.workingToColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,s=qt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Wr);let i=Vs(ti.h,Wr.h,t),s=Vs(ti.s,Wr.s,t),r=Vs(ti.l,Wr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Ze;Ze.NAMES=du;var Un=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yn=new P,Gn=new P,ll=new P,Wn=new P,qi=new P,Yi=new P,sh=new P,cl=new P,hl=new P,ul=new P,dl=new Et,fl=new Et,pl=new Et,ri=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yn.subVectors(e,t),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yn.subVectors(s,t),Gn.subVectors(i,t),ll.subVectors(e,t);let o=yn.dot(yn),a=yn.dot(Gn),l=yn.dot(ll),c=Gn.dot(Gn),f=Gn.dot(ll),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let h=1/u,p=(c*l-a*f)*h,g=(o*f-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return dl.setScalar(0),fl.setScalar(0),pl.setScalar(0),dl.fromBufferAttribute(e,t),fl.fromBufferAttribute(e,i),pl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(dl,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(pl,r.z),o}static isFrontFacing(e,t,i,s){return yn.subVectors(i,t),Gn.subVectors(e,t),yn.cross(Gn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),yn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;qi.subVectors(s,i),Yi.subVectors(r,i),cl.subVectors(e,i);let l=qi.dot(cl),c=Yi.dot(cl);if(l<=0&&c<=0)return t.copy(i);hl.subVectors(e,s);let f=qi.dot(hl),u=Yi.dot(hl);if(f>=0&&u<=f)return t.copy(s);let h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(qi,o);ul.subVectors(e,r);let p=qi.dot(ul),g=Yi.dot(ul);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Yi,a);let m=f*g-p*u;if(m<=0&&u-f>=0&&p-g>=0)return sh.subVectors(r,s),a=(u-f)/(u-f+(p-g)),t.copy(s).addScaledVector(sh,a);let d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xr.copy(i.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),qr.subVectors(this.max,Ns),Zi.subVectors(e.a,Ns),Ji.subVectors(e.b,Ns),Ki.subVectors(e.c,Ns),ni.subVectors(Ji,Zi),ii.subVectors(Ki,Ji),bi.subVectors(Zi,Ki);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!ml(t,Zi,Ji,Ki,qr)||(t=[1,0,0,0,1,0,0,0,1],!ml(t,Zi,Ji,Ki,qr))?!1:(Yr.crossVectors(ni,ii),t=[Yr.x,Yr.y,Yr.z],ml(t,Zi,Ji,Ki,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,Xr=new wt,Zi=new P,Ji=new P,Ki=new P,ni=new P,ii=new P,bi=new P,Ns=new P,qr=new P,Yr=new P,Ei=new P;function ml(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ei.fromArray(n,r);let a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),f=i.dot(Ei);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Pt=new P,Zr=new ce,of=0,$t=class extends Mn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:of++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=au,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ks=class extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var $s=class extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var je=class extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}},af=new wt,Us=new P,gl=new P,Zn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):af.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);let t=Us.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Us,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(gl)),this.expandByPoint(Us.copy(e.center).sub(gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lf=0,dn=new ft,_l=new Lt,$i=new P,rn=new wt,Fs=new wt,Ft=new P,gt=class n extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?$s:Ks)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return _l.lookAt(e),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(rn.min,Fs.min),rn.expandByPoint(Ft),Ft.addVectors(rn.max,Fs.max),rn.expandByPoint(Ft)):(rn.expandByPoint(Fs.min),rn.expandByPoint(Fs.max))}rn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ft.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(e,c),Ft.add($i)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new $t(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new P,l[x]=new P;let c=new P,f=new P,u=new P,h=new ce,p=new ce,g=new ce,_=new P,m=new P;function d(x,T,I){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,T),u.fromBufferAttribute(i,I),h.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),f.sub(c),u.sub(c),p.sub(h),g.sub(h);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(U),m.copy(u).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(U),a[x].add(_),a[T].add(_),a[I].add(_),l[x].add(m),l[T].add(m),l[I].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,T=y.length;x<T;++x){let I=y[x],U=I.start,A=I.count;for(let R=U,C=U+A;R<C;R+=3)d(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let M=new P,v=new P,b=new P,w=new P;function D(x){b.fromBufferAttribute(s,x),w.copy(b);let T=a[x];M.copy(T),M.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(w,T);let U=v.dot(l[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,U)}for(let x=0,T=y.length;x<T;++x){let I=y[x],U=I.start,A=I.count;for(let R=U,C=U+A;R<C;R+=3)D(e.getX(R+0)),D(e.getX(R+1)),D(e.getX(R+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,f=new P,u=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){let c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*f;for(let d=0;d<f;d++)h[g++]=c[p++]}return new $t(h,f,u)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,u=c.length;f<u;f++){let h=c[f],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){let p=c[u];f.push(p.toJSON(e.data))}f.length>0&&(s[l]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(t))}let r=e.morphAttributes;for(let c in r){let f=[],u=r[c];for(let h=0,p=u.length;h<p;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,f=o.length;c<f;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var xl=new P,cf=new P,hf=new Je,on=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=xl.subVectors(i,t).cross(cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(xl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||hf.getNormalMatrix(e),s=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},uf=0,bn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=vs,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Wl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new on().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var qn=new P,yl=new P,Jr=new P,Kr=new P,oi=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){yl.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(yl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=Kr.dot(this.direction),l=-Kr.dot(Jr),c=Kr.lengthSq(),f=Math.abs(1-o*o),u,h,p,g;if(f>0)if(u=o*l-a,h=o*a-l,g=r*f,u>=0)if(h>=-g)if(h<=g){let _=1/f;u*=_,h*=_,p=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yl).addScaledVector(Jr,h),p}intersectSphere(e,t){if(e.radius<0)return null;qn.subVectors(e.center,this.origin);let i=qn.dot(this.direction),s=qn.dot(qn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),f>=0?(r=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,u=e.x-o.x,h=e.y-o.y,p=e.z-o.z,g=t.x-o.x,_=t.y-o.y,m=t.z-o.z,d=i.x-o.x,y=i.y-o.y,M=i.z-o.z,v=Math.abs(l),b=Math.abs(c),w=Math.abs(f),D,x,T,I,U,A,R,C,N,B,H,ee;if(v>=b&&v>=w?(T=l,A=u,N=g,ee=d,l>=0?(D=c,x=f,I=h,U=p,R=_,C=m,B=y,H=M):(D=f,x=c,I=p,U=h,R=m,C=_,B=M,H=y)):b>=w?(T=c,A=h,N=_,ee=y,c>=0?(D=f,x=l,I=p,U=u,R=m,C=g,B=M,H=d):(D=l,x=f,I=u,U=p,R=g,C=m,B=d,H=M)):(T=f,A=p,N=m,ee=M,f>=0?(D=l,x=c,I=u,U=h,R=g,C=_,B=d,H=y):(D=c,x=l,I=h,U=u,R=_,C=g,B=y,H=d)),T===0)return null;let J=D/T,X=x/T,K=1/T,q=I-J*A,ae=U-X*A,ge=R-J*N,ie=C-X*N,fe=B-J*ee,W=H-X*ee,j=fe*ie-W*ge,ue=q*W-ae*fe,ke=ge*ae-ie*q;if(s){if(j<0||ue<0||ke<0)return null}else if((j<0||ue<0||ke<0)&&(j>0||ue>0||ke>0))return null;let xe=j+ue+ke;if(xe===0)return null;let Pe=K*(j*A+ue*N+ke*ee);return(xe>0?Pe<0:Pe>0)?null:this.at(Pe/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ai=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rh=new ft,wi=new oi,$r=new Zn,oh=new P,jr=new P,Qr=new P,eo=new P,vl=new P,to=new P,ah=new P,no=new P,De=class extends Lt{constructor(e=new gt,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],u=r[l];f!==0&&(vl.fromBufferAttribute(u,e),o?to.addScaledVector(vl,f):to.addScaledVector(vl.sub(t),f))}t.add(to)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!($r.containsPoint(wi.origin)===!1&&(wi.intersectSphere($r,oh)===null||wi.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(rh.copy(r).invert(),wi.copy(e.ray).applyMatrix4(rh),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,b=M;v<b;v+=3){let w=a.getX(v),D=a.getX(v+1),x=a.getX(v+2);s=io(this,d,e,i,c,f,u,w,D,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=io(this,o,e,i,c,f,u,y,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,b=M;v<b;v+=3){let w=v,D=v+1,x=v+2;s=io(this,d,e,i,c,f,u,w,D,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let y=m,M=m+1,v=m+2;s=io(this,o,e,i,c,f,u,y,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function df(n,e,t,i,s,r,o,a){let l;if(e.side===Gt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===gi,a),l===null)return null;no.copy(a),no.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:n}}function io(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,jr),n.getVertexPosition(l,Qr),n.getVertexPosition(c,eo);let f=df(n,e,t,i,jr,Qr,eo,ah);if(f){let u=new P;ri.getBarycoord(ah,jr,Qr,eo,u),s&&(f.uv=ri.getInterpolatedAttribute(s,a,l,c,u,new ce)),r&&(f.uv1=ri.getInterpolatedAttribute(r,a,l,c,u,new ce)),o&&(f.normal=ri.getInterpolatedAttribute(o,a,l,c,u,new P),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new P,materialIndex:0};ri.getNormal(jr,Qr,eo,h.normal),f.face=h,f.barycoord=u}return f}var js=class extends jt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Ot,f=Ot,u,h){super(null,o,a,l,c,f,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends $t{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ji=new ft,lh=new ft,so=[],ch=new wt,ff=new ft,Os=new De,Bs=new Zn,er=class extends De{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,ff)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ji),ch.copy(e.boundingBox).applyMatrix4(ji),this.boundingBox.union(ch)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ji),Bs.copy(e.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ji),lh.multiplyMatrices(i,ji),Os.matrixWorld=lh,Os.raycast(e,so);for(let o=0,a=so.length;o<a;o++){let l=so[o];l.instanceId=r,l.object=this,t.push(l)}so.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new js(new Float32Array(s*this.count),s,this.count,oa,pn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new Zn,pf=new ce(.5,.5),ro=new P,us=class{constructor(e=new on,t=new on,i=new on,s=new on,r=new on,o=new on){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],f=r[4],u=r[5],h=r[6],p=r[7],g=r[8],_=r[9],m=r[10],d=r[11],y=r[12],M=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-o,p-f,d-g,b-y).normalize(),s[1].setComponents(c+o,p+f,d+g,b+y).normalize(),s[2].setComponents(c+a,p+u,d+_,b+M).normalize(),s[3].setComponents(c-a,p-u,d-_,b-M).normalize(),i)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,d-m,b-v).normalize();else if(s[4].setComponents(c-l,p-h,d-m,b-v).normalize(),t===Sn)s[5].setComponents(c+l,p+h,d+m,b+v).normalize();else if(t===rs)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=pf.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ro.x=s.normal.x>0?e.max.x:e.min.x,ro.y=s.normal.y>0?e.max.y:e.min.y,ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ri=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Co=new P,Po=new P,hh=new ft,zs=new oi,oo=new Zn,Sl=new P,uh=new P,Io=class extends Lt{constructor(e=new gt,t=new Ri){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Co.fromBufferAttribute(t,s-1),Po.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Co.distanceTo(Po);e.setAttribute("lineDistance",new je(i,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;hh.copy(s).invert(),zs.copy(e.ray).applyMatrix4(hh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let d=f.getX(_),y=f.getX(_+1),M=ao(this,e,zs,l,d,y,_);M&&t.push(M)}if(this.isLineLoop){let _=f.getX(g-1),m=f.getX(p),d=ao(this,e,zs,l,_,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let d=ao(this,e,zs,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){let _=ao(this,e,zs,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ao(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Co.fromBufferAttribute(a,s),Po.fromBufferAttribute(a,r),t.distanceSqToSegment(Co,Po,Sl,uh)>i)return;Sl.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Sl);if(!(c<e.near||c>e.far))return{distance:c,point:uh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var dh=new P,fh=new P,ds=class extends Io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)dh.fromBufferAttribute(t,s),fh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+dh.distanceTo(fh);e.setAttribute("lineDistance",new je(i,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tr=class extends jt{constructor(e=[],t=_i,i,s,r,o,a,l,c,f){super(e,t,i,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nr=class extends jt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends jt{constructor(e,t,i=Tn,s,r,o,a=Ot,l=Ot,c,f=Dn,u=1){if(f!==Dn&&f!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Lo=class extends li{constructor(e,t=Tn,i=_i,s,r,o=Ot,a=Ot,l,c=Dn){let f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ir=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},en=class n extends gt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],u=[],h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(u,2));function g(_,m,d,y,M,v,b,w,D,x,T){let I=v/D,U=b/x,A=v/2,R=b/2,C=w/2,N=D+1,B=x+1,H=0,ee=0,J=new P;for(let X=0;X<B;X++){let K=X*U-R;for(let q=0;q<N;q++){let ae=q*I-A;J[_]=ae*y,J[m]=K*M,J[d]=C,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[d]=w>0?1:-1,f.push(J.x,J.y,J.z),u.push(q/D),u.push(1-X/x),H+=1}}for(let X=0;X<x;X++)for(let K=0;K<D;K++){let q=h+K+N*X,ae=h+K+N*(X+1),ge=h+(K+1)+N*(X+1),ie=h+(K+1)+N*X;l.push(q,ae,ie),l.push(ae,ge,ie),ee+=6}a.addGroup(p,ee,T),p+=ee,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},sr=class n extends gt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],f=t/2,u=Math.PI/2*e,h=t,p=2*u+h,g=i*2+r,_=s+1,m=new P,d=new P;for(let y=0;y<=g;y++){let M=0,v=0,b=0,w=0;if(y<=i){let T=y/i,I=T*Math.PI/2;v=-f-e*Math.cos(I),b=e*Math.sin(I),w=-e*Math.cos(I),M=T*u}else if(y<=i+r){let T=(y-i)/r;v=-f+T*t,b=e,w=0,M=u+T*h}else{let T=(y-i-r)/i,I=T*Math.PI/2;v=f+e*Math.sin(I),b=e*Math.cos(I),w=e*Math.sin(I),M=u+h+T*u}let D=Math.max(0,Math.min(1,M/p)),x=0;y===0?x=.5/s:y===g&&(x=-.5/s);for(let T=0;T<=s;T++){let I=T/s,U=I*Math.PI*2,A=Math.sin(U),R=Math.cos(U);d.x=-b*R,d.y=v,d.z=b*A,a.push(d.x,d.y,d.z),m.set(-b*R,w,b*A),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+x,D)}if(y>0){let T=(y-1)*_;for(let I=0;I<s;I++){let U=T+I,A=T+I+1,R=y*_+I,C=y*_+I+1;o.push(U,A,R),o.push(A,C,R)}}}this.setIndex(o),this.setAttribute("position",new je(a,3)),this.setAttribute("normal",new je(l,3)),this.setAttribute("uv",new je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var rr=class n extends gt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],u=[],h=[],p=[],g=0,_=[],m=i/2,d=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(f),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2));function y(){let v=new P,b=new P,w=0,D=(t-e)/i;for(let x=0;x<=r;x++){let T=[],I=x/r,U=I*(t-e)+e;for(let A=0;A<=s;A++){let R=A/s,C=R*l+a,N=Math.sin(C),B=Math.cos(C);b.x=U*N,b.y=-I*i+m,b.z=U*B,u.push(b.x,b.y,b.z),v.set(N,D,B).normalize(),h.push(v.x,v.y,v.z),p.push(R,1-I),T.push(g++)}_.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let I=_[T][x],U=_[T+1][x],A=_[T+1][x+1],R=_[T][x+1];(e>0||T!==0)&&(f.push(I,U,R),w+=3),(t>0||T!==r-1)&&(f.push(U,A,R),w+=3)}c.addGroup(d,w,0),d+=w}function M(v){let b=g,w=new ce,D=new P,x=0,T=v===!0?e:t,I=v===!0?1:-1;for(let A=1;A<=s;A++)u.push(0,m*I,0),h.push(0,I,0),p.push(.5,.5),g++;let U=g;for(let A=0;A<=s;A++){let C=A/s*l+a,N=Math.cos(C),B=Math.sin(C);D.x=T*B,D.y=m*I,D.z=T*N,u.push(D.x,D.y,D.z),h.push(0,I,0),w.x=N*.5+.5,w.y=B*.5*I+.5,p.push(w.x,w.y),g++}for(let A=0;A<s;A++){let R=b+A,C=U+A;v===!0?f.push(C,C+1,R):f.push(C+1,C,R),x+=3}c.addGroup(d,x,v===!0?1:2),d+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let f=i[s],h=i[s+1]-f,p=(o-f)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ce:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],o=[],a=new P,l=new ft;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,f=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);f<=c&&(c=f,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(et(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(et(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fs=class extends ln{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*f-p*u+this.aX,c=h*u+p*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Do=class extends fs{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ac(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,f,u){let h=(o-r)/c-(a-r)/(c+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+u)+(l-a)/u;h*=f,p*=f,s(o,a,h,p)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var ph=new P,mh=new P,Ml=new ac,bl=new ac,El=new ac,ps=class extends ln{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,f;this.closed||a>0?c=s[(a-1)%r]:(mh.subVectors(s[0],s[1]).add(s[0]),c=mh);let u=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(ph.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=ph),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(f),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ml.initNonuniformCatmullRom(c.x,u.x,h.x,f.x,g,_,m),bl.initNonuniformCatmullRom(c.y,u.y,h.y,f.y,g,_,m),El.initNonuniformCatmullRom(c.z,u.z,h.z,f.z,g,_,m)}else this.curveType==="catmullrom"&&(Ml.initCatmullRom(c.x,u.x,h.x,f.x,this.tension),bl.initCatmullRom(c.y,u.y,h.y,f.y,this.tension),El.initCatmullRom(c.z,u.z,h.z,f.z,this.tension));return i.set(Ml.calc(l),bl.calc(l),El.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gh(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function mf(n,e){let t=1-n;return t*t*e}function gf(n,e){return 2*(1-n)*n*e}function _f(n,e){return n*n*e}function Gs(n,e,t,i){return mf(n,e)+gf(n,t)+_f(n,i)}function xf(n,e){let t=1-n;return t*t*t*e}function yf(n,e){let t=1-n;return 3*t*t*n*e}function vf(n,e){return 3*(1-n)*n*n*e}function Sf(n,e){return n*n*n*e}function Ws(n,e,t,i,s){return xf(n,e)+yf(n,t)+vf(n,i)+Sf(n,s)}var or=class extends ln{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ws(e,s.x,r.x,o.x,a.x),Ws(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},No=class extends ln{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ws(e,s.x,r.x,o.x,a.x),Ws(e,s.y,r.y,o.y,a.y),Ws(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ar=class extends ln{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends ln{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lr=class extends ln{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(e,s.x,r.x,o.x),Gs(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cr=class extends ln{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(e,s.x,r.x,o.x),Gs(e,s.y,r.y,o.y),Gs(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hr=class extends ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],f=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(gh(a,l.x,c.x,f.x,u.x),gh(a,l.y,c.y,f.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Fo=Object.freeze({__proto__:null,ArcCurve:Do,CatmullRomCurve3:ps,CubicBezierCurve:or,CubicBezierCurve3:No,EllipseCurve:fs,LineCurve:ar,LineCurve3:Uo,QuadraticBezierCurve:lr,QuadraticBezierCurve3:cr,SplineCurve:hr}),Oo=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let f=l[c];i&&i.equals(f)||(t.push(f),i=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Fo[s.type]().fromJSON(s))}return this}},fn=class extends Oo{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ar(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new lr(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new or(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new hr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+c,t+f,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new fs(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let f=c.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},It=class extends fn{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new fn().fromJSON(s))}return this}};function Mf(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=fu(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Af(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let f=a,u=l;for(let h=t;h<s;h+=t){let p=n[h],g=n[h+1];p<a&&(a=p),g<l&&(l=g),p>f&&(f=p),g>u&&(u=g)}c=Math.max(f-a,u-l),c=c!==0?32767/c:0}return ur(r,o,t,a,l,c,0),o}function fu(n,e,t,i,s){let r;if(s===Bf(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=_h(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=_h(o/i|0,n[o],n[o+1],r);return r&&ms(r,r.next)&&(fr(r),r=r.next),r}function Ci(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ms(t,t.next)||At(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ur(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Lf(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Ef(n,i,s,r):bf(n)){e.push(l.i,n.i,c.i),fr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=wf(Ci(n),e),ur(n,e,t,i,s,r,2)):o===2&&Tf(n,e,t,i,s,r):ur(Ci(n),e,t,i,s,r,1);break}}}function bf(n){let e=n.prev,t=n,i=n.next;if(At(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,f=Math.min(s,r,o),u=Math.min(a,l,c),h=Math.max(s,r,o),p=Math.max(a,l,c),g=i.next;for(;g!==e;){if(g.x>=f&&g.x<=h&&g.y>=u&&g.y<=p&&ks(s,a,r,l,o,c,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ef(n,e,t,i){let s=n.prev,r=n,o=n.next;if(At(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,f=s.y,u=r.y,h=o.y,p=Math.min(a,l,c),g=Math.min(f,u,h),_=Math.max(a,l,c),m=Math.max(f,u,h),d=Il(p,g,e,t,i),y=Il(_,m,e,t,i),M=n.prevZ,v=n.nextZ;for(;M&&M.z>=d&&v&&v.z<=y;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ks(a,f,l,u,c,h,M.x,M.y)&&At(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ks(a,f,l,u,c,h,v.x,v.y)&&At(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=d;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ks(a,f,l,u,c,h,M.x,M.y)&&At(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ks(a,f,l,u,c,h,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function wf(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ms(i,s)&&mu(i,t,t.next,s)&&dr(i,s)&&dr(s,i)&&(e.push(i.i,t.i,s.i),fr(t),fr(t.next),t=n=s),t=t.next}while(t!==n);return Ci(t)}function Tf(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Uf(o,a)){let l=gu(o,a);o=Ci(o,o.next),l=Ci(l,l.next),ur(o,e,t,i,s,r,0),ur(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Af(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=fu(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Nf(c))}s.sort(Rf);for(let r=0;r<s.length;r++)t=Cf(s[r],t);return t}function Rf(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Cf(n,e){let t=Pf(n,e);if(!t)return e;let i=gu(t,n);return Ci(i,i.next),Ci(t,t.next)}function Pf(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(ms(n,t))return t;do{if(ms(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,f=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&pu(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);dr(t,n)&&(u<f||u===f&&(t.x>o.x||t.x===o.x&&If(o,t)))&&(o=t,f=u)}t=t.next}while(t!==a);return o}function If(n,e){return At(n.prev,n,e.prev)<0&&At(e.next,n,n.next)<0}function Lf(n,e,t,i){let s=n;do s.z===0&&(s.z=Il(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Df(s)}function Df(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Il(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Nf(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function pu(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ks(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&pu(n,e,t,i,s,r,o,a)}function Uf(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Ff(n,e)&&(dr(n,e)&&dr(e,n)&&Of(n,e)&&(At(n.prev,n,e.prev)||At(n,e.prev,e))||ms(n,e)&&At(n.prev,n,n.next)>0&&At(e.prev,e,e.next)>0)}function At(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ms(n,e){return n.x===e.x&&n.y===e.y}function mu(n,e,t,i){let s=co(At(n,e,t)),r=co(At(n,e,i)),o=co(At(t,i,n)),a=co(At(t,i,e));return!!(s!==r&&o!==a||s===0&&lo(n,t,e)||r===0&&lo(n,i,e)||o===0&&lo(t,n,i)||a===0&&lo(t,e,i))}function lo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function co(n){return n>0?1:n<0?-1:0}function Ff(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&mu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function dr(n,e){return At(n.prev,n,n.next)<0?At(n,e,n.next)>=0&&At(n,n.prev,e)>=0:At(n,e,n.prev)<0||At(n,n.next,e)<0}function Of(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function gu(n,e){let t=Ll(n.i,n.x,n.y),i=Ll(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function _h(n,e,t,i){let s=Ll(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function fr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ll(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Bf(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Dl=class{static triangulate(e,t,i=2){return Mf(e,t,i)}},Ln=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];xh(e),yh(i,e);let o=e.length;t.forEach(xh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,yh(i,t[l]);let a=Dl.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function xh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Yt=class n extends gt{constructor(e=new It([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new je(s,3)),this.setAttribute("uv",new je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:zf,M,v=!1,b,w,D,x;if(d){M=d.getSpacedPoints(f),v=!0,h=!1;let re=d.isCatmullRomCurve3?d.closed:!1;b=d.computeFrenetFrames(f,re),w=new P,D=new P,x=new P}h||(m=0,p=0,g=0,_=0);let T=a.extractPoints(c),I=T.shape,U=T.holes;if(!Ln.isClockWise(I)){I=I.reverse();for(let re=0,de=U.length;re<de;re++){let pe=U[re];Ln.isClockWise(pe)&&(U[re]=pe.reverse())}}function R(re){let pe=10000000000000001e-36,me=re[0];for(let ve=1;ve<=re.length;ve++){let We=ve%re.length,Ve=re[We],Ye=Ve.x-me.x,$e=Ve.y-me.y,O=Ye*Ye+$e*$e,ct=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(me.x),Math.abs(me.y)),it=pe*ct*ct;if(O<=it){re.splice(We,1),ve--;continue}me=Ve}}R(I),U.forEach(R);let C=U.length,N=I;for(let re=0;re<C;re++){let de=U[re];I=I.concat(de)}function B(re,de,pe){return de||qe("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(de,pe)}let H=I.length;function ee(re,de,pe){let me,ve,We,Ve=re.x-de.x,Ye=re.y-de.y,$e=pe.x-re.x,O=pe.y-re.y,ct=Ve*Ve+Ye*Ye,it=Ve*O-Ye*$e;if(Math.abs(it)>Number.EPSILON){let L=Math.sqrt(ct),S=Math.sqrt($e*$e+O*O),G=de.x-Ye/L,$=de.y+Ve/L,te=pe.x-O/S,_e=pe.y+$e/S,ye=((te-G)*O-(_e-$)*$e)/(Ve*O-Ye*$e);me=G+Ve*ye-re.x,ve=$+Ye*ye-re.y;let ne=me*me+ve*ve;if(ne<=2)return new ce(me,ve);We=Math.sqrt(ne/2)}else{let L=!1;Ve>Number.EPSILON?$e>Number.EPSILON&&(L=!0):Ve<-Number.EPSILON?$e<-Number.EPSILON&&(L=!0):Math.sign(Ye)===Math.sign(O)&&(L=!0),L?(me=-Ye,ve=Ve,We=Math.sqrt(ct)):(me=Ve,ve=Ye,We=Math.sqrt(ct/2))}return new ce(me/We,ve/We)}let J=[];for(let re=0,de=N.length,pe=de-1,me=re+1;re<de;re++,pe++,me++)pe===de&&(pe=0),me===de&&(me=0),J[re]=ee(N[re],N[pe],N[me]);let X=[],K,q=J.concat();for(let re=0,de=C;re<de;re++){let pe=U[re];K=[];for(let me=0,ve=pe.length,We=ve-1,Ve=me+1;me<ve;me++,We++,Ve++)We===ve&&(We=0),Ve===ve&&(Ve=0),K[me]=ee(pe[me],pe[We],pe[Ve]);X.push(K),q=q.concat(K)}let ae;if(m===0)ae=Ln.triangulateShape(N,U);else{let re=[],de=[];for(let pe=0;pe<m;pe++){let me=pe/m,ve=p*Math.cos(me*Math.PI/2),We=g*Math.sin(me*Math.PI/2)+_;for(let Ve=0,Ye=N.length;Ve<Ye;Ve++){let $e=B(N[Ve],J[Ve],We);ue($e.x,$e.y,-ve),me===0&&re.push($e)}for(let Ve=0,Ye=C;Ve<Ye;Ve++){let $e=U[Ve];K=X[Ve];let O=[];for(let ct=0,it=$e.length;ct<it;ct++){let L=B($e[ct],K[ct],We);ue(L.x,L.y,-ve),me===0&&O.push(L)}me===0&&de.push(O)}}ae=Ln.triangulateShape(re,de)}let ge=ae.length,ie=g+_;for(let re=0;re<H;re++){let de=h?B(I[re],q[re],ie):I[re];v?(D.copy(b.normals[0]).multiplyScalar(de.x),w.copy(b.binormals[0]).multiplyScalar(de.y),x.copy(M[0]).add(D).add(w),ue(x.x,x.y,x.z)):ue(de.x,de.y,0)}for(let re=1;re<=f;re++)for(let de=0;de<H;de++){let pe=h?B(I[de],q[de],ie):I[de];v?(D.copy(b.normals[re]).multiplyScalar(pe.x),w.copy(b.binormals[re]).multiplyScalar(pe.y),x.copy(M[re]).add(D).add(w),ue(x.x,x.y,x.z)):ue(pe.x,pe.y,u/f*re)}for(let re=m-1;re>=0;re--){let de=re/m,pe=p*Math.cos(de*Math.PI/2),me=g*Math.sin(de*Math.PI/2)+_;for(let ve=0,We=N.length;ve<We;ve++){let Ve=B(N[ve],J[ve],me);ue(Ve.x,Ve.y,u+pe)}for(let ve=0,We=U.length;ve<We;ve++){let Ve=U[ve];K=X[ve];for(let Ye=0,$e=Ve.length;Ye<$e;Ye++){let O=B(Ve[Ye],K[Ye],me);v?ue(O.x,O.y+M[f-1].y,M[f-1].x+pe):ue(O.x,O.y,u+pe)}}}fe(),W();function fe(){let re=s.length/3;if(h){let de=0,pe=H*de;for(let me=0;me<ge;me++){let ve=ae[me];ke(ve[2]+pe,ve[1]+pe,ve[0]+pe)}de=f+m*2,pe=H*de;for(let me=0;me<ge;me++){let ve=ae[me];ke(ve[0]+pe,ve[1]+pe,ve[2]+pe)}}else{for(let de=0;de<ge;de++){let pe=ae[de];ke(pe[2],pe[1],pe[0])}for(let de=0;de<ge;de++){let pe=ae[de];ke(pe[0]+H*f,pe[1]+H*f,pe[2]+H*f)}}i.addGroup(re,s.length/3-re,0)}function W(){let re=s.length/3,de=0;j(N,de),de+=N.length;for(let pe=0,me=U.length;pe<me;pe++){let ve=U[pe];j(ve,de),de+=ve.length}i.addGroup(re,s.length/3-re,1)}function j(re,de){let pe=re.length;for(;--pe>=0;){let me=pe,ve=pe-1;ve<0&&(ve=re.length-1);for(let We=0,Ve=f+m*2;We<Ve;We++){let Ye=H*We,$e=H*(We+1),O=de+me+Ye,ct=de+ve+Ye,it=de+ve+$e,L=de+me+$e;xe(O,ct,it,L)}}}function ue(re,de,pe){l.push(re),l.push(de),l.push(pe)}function ke(re,de,pe){Pe(re),Pe(de),Pe(pe);let me=s.length/3,ve=y.generateTopUV(i,s,me-3,me-2,me-1);ot(ve[0]),ot(ve[1]),ot(ve[2])}function xe(re,de,pe,me){Pe(re),Pe(de),Pe(me),Pe(de),Pe(pe),Pe(me);let ve=s.length/3,We=y.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);ot(We[0]),ot(We[1]),ot(We[3]),ot(We[1]),ot(We[2]),ot(We[3])}function Pe(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function ot(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return kf(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fo[s.type]().fromJSON(s)),new n(i,e.options)}},zf={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],f=e[s*3+1];return[new ce(r,o),new ce(a,l),new ce(c,f)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],f=e[i*3+1],u=e[i*3+2],h=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-f)<Math.abs(o-c)?[new ce(o,1-l),new ce(c,1-u),new ce(h,1-g),new ce(_,1-d)]:[new ce(a,1-l),new ce(f,1-u),new ce(p,1-g),new ce(m,1-d)]}};function kf(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ci=class n extends gt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=et(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],f=1/t,u=new P,h=new ce,p=new P,g=new P,_=new P,m=0,d=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let y=0;y<=t;y++){let M=i+y*f*s,v=Math.sin(M),b=Math.cos(M);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*v,u.y=e[w].y,u.z=e[w].x*b,o.push(u.x,u.y,u.z),h.x=y/t,h.y=w/(e.length-1),a.push(h.x,h.y);let D=l[3*w+0]*v,x=l[3*w+1],T=l[3*w+0]*b;c.push(D,x,T)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){let v=M+y*e.length,b=v,w=v+e.length,D=v+e.length+1,x=v+1;r.push(b,w,x),r.push(D,x,w)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Fn=class n extends gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,f=l+1,u=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<f;d++){let y=d*h-o;for(let M=0;M<c;M++){let v=M*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){let M=y+c*d,v=y+c*(d+1),b=y+1+c*(d+1),w=y+1+c*d;p.push(M,v,w),p.push(v,b,w)}this.setIndex(p),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var pr=class n extends gt{constructor(e=new It([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let f=0;f<e.length;f++)c(e[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(r,3)),this.setAttribute("uv",new je(o,2));function c(f){let u=s.length/3,h=f.extractPoints(t),p=h.shape,g=h.holes;Ln.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){let y=g[m];Ln.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=Ln.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){let y=g[m];p=p.concat(y)}for(let m=0,d=p.length;m<d;m++){let y=p[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,d=_.length;m<d;m++){let y=_[m],M=y[0]+u,v=y[1]+u,b=y[2]+u;i.push(M,v,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Hf(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function Hf(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var hi=class n extends gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,f=[],u=new P,h=new P,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){let y=[],M=d/i,v=o+M*a,b=e*Math.cos(v),w=Math.sqrt(e*e-b*b),D=0;d===0&&o===0?D=.5/t:d===i&&l===Math.PI&&(D=-.5/t);for(let x=0;x<=t;x++){let T=x/t,I=s+T*r;u.x=-w*Math.cos(I),u.y=b,u.z=w*Math.sin(I),g.push(u.x,u.y,u.z),h.copy(u).normalize(),_.push(h.x,h.y,h.z),m.push(T+D,1-M),y.push(c++)}f.push(y)}for(let d=0;d<i;d++)for(let y=0;y<t;y++){let M=f[d][y+1],v=f[d][y],b=f[d+1][y],w=f[d+1][y+1];(d!==0||o>0)&&p.push(M,v,w),(d!==i-1||l<Math.PI)&&p.push(v,b,w)}this.setIndex(p),this.setAttribute("position",new je(g,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Vt=class n extends gt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],f=[],u=[],h=new P,p=new P,g=new P;for(let _=0;_<=i;_++){let m=o+_/i*a;for(let d=0;d<=s;d++){let y=d/s*r;p.x=(e+t*Math.cos(m))*Math.cos(y),p.y=(e+t*Math.cos(m))*Math.sin(y),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),g.subVectors(p,h).normalize(),f.push(g.x,g.y,g.z),u.push(d/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){let d=(s+1)*_+m-1,y=(s+1)*(_-1)+m-1,M=(s+1)*(_-1)+m,v=(s+1)*_+m;l.push(d,y,v),l.push(y,M,v)}this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var mr=class n extends gt{constructor(e=new cr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new ce,f=new P,u=[],h=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(p,2));function _(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),y(),d()}function m(M){f=e.getPointAt(M/t,f);let v=o.normals[M],b=o.binormals[M];for(let w=0;w<=s;w++){let D=w/s*Math.PI*2,x=Math.sin(D),T=-Math.cos(D);l.x=T*v.x+x*b.x,l.y=T*v.y+x*b.y,l.z=T*v.z+x*b.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let M=1;M<=t;M++)for(let v=1;v<=s;v++){let b=(s+1)*(M-1)+(v-1),w=(s+1)*M+(v-1),D=(s+1)*M+v,x=(s+1)*(M-1)+v;g.push(b,w,x),g.push(w,D,x)}}function y(){for(let M=0;M<=t;M++)for(let v=0;v<=s;v++)c.x=M/t,c.y=v/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Fo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var gr=class extends bn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Fi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(vh(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(vh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Zt(n){let e={};for(let t=0;t<n.length;t++){let i=Fi(n[t]);for(let s in i)e[s]=i[s]}return e}function vh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Vf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var _u={clone:Fi,merge:Zt},Gf=`void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
  gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ft().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Bo=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},En=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gs=class extends En{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pi=class extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Qo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zo=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ko=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qi(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function wl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ui=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ho=class extends ui{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rl,endingEnd:Rl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cl:r=e,a=2*t-i;break;case Pl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cl:o=e,l=2*i-t;break;case Pl:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,f=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,d=-h*m+2*h*_-h*g,y=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let b=0;b!==a;++b)r[b]=d*o[f+b]+y*o[c+b]+M*o[l+b]+v*o[u+b];return r}},Vo=class extends ui{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=(i-t)/(s-t),u=1-f;for(let h=0;h!==a;++h)r[h]=o[c+h]*u+o[l+h]*f;return r}},Go=class extends ui{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wo=class extends ui{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this.inTangents,u=this.outTangents;if(!f||!u){let g=(i-t)/(s-t),_=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*g;return r}let h=a*2,p=e-1;for(let g=0;g!==a;++g){let _=o[c+g],m=o[l+g],d=p*h+g*2,y=u[d],M=u[d+1],v=e*h+g*2,b=f[v],w=f[v+1],D=qf(i,t,y,b,s);r[g]=xu(D,_,M,w,m)}return r}};function xu(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Xf(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function qf(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=xu(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Xf(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qi(t,this.TimeBufferType),this.values=Qi(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qi(e.times,Array),values:Qi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),wl(e.settings)&&(i.settings={inTangents:Qi(e.settings.inTangents,Array),outTangents:Qi(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Wo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case wo:t=this.InterpolantFactoryMethodLinear;break;case po:t=this.InterpolantFactoryMethodSmooth;break;case Al:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return po;case this.InterpolantFactoryMethodBezier:return Al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;wl(this.settings)&&(Sh(this.settings.inTangents,e),Sh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ld(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===po,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],f=e[a+1];if(c!==f&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,h=u-i,p=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[h+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,h=o*i;for(let p=0;p!==i;++p)t[h+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,wl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Sh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=wo;var di=class extends hn{constructor(e,t,i){super(e,t,i)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Xs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};Xo.prototype.ValueTypeName="color";var qo=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};qo.prototype.ValueTypeName="number";var Yo=class extends ui{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let f=c+a;c!==f;c+=4)an.slerpFlat(r,0,o,c-a,o,c,l);return r}},_r=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends hn{constructor(e,t,i){super(e,t,i)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Xs;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};Zo.prototype.ValueTypeName="vector";var Jo=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){let u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yu=new Jo,Ko=class{constructor(e){this.manager=e!==void 0?e:yu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xr=class extends _s{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Tl=new ft,Mh=new P,bh=new P,yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new us,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Mh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mh),bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Tl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===rs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ho=new P,uo=new an,Pn=new P,vr=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ho,uo,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,uo,Pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ho,uo,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,uo,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},si=new P,Eh=new ce,wh=new ce,kt=class extends vr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Eh,wh),t.subVectors(wh,Eh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Nl=class extends yr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}},Sr=class extends _s{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Nl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Jn=class extends vr{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ul=class extends yr{constructor(){super(new Jn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ii=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Ul}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var es=-90,ts=1,$o=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(es,ts,e,t);s.layers=this.layers,this.add(s);let r=new kt(es,ts,e,t);r.layers=this.layers,this.add(r);let o=new kt(es,ts,e,t);o.layers=this.layers,this.add(o);let a=new kt(es,ts,e,t);a.layers=this.layers,this.add(a);let l=new kt(es,ts,e,t);l.layers=this.layers,this.add(l);let c=new kt(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(u,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},jo=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var cc="\\[\\]\\.:\\/",Yf=new RegExp("["+cc+"]","g"),hc="[^"+cc+"]",Zf="[^"+cc.replace("\\.","")+"]",Jf=/((?:WC+[\/:])*)/.source.replace("WC",hc),Kf=/(WCOD+)?/.source.replace("WCOD",Zf),$f=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hc),jf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hc),Qf=new RegExp("^"+Jf+Kf+$f+jf+"$"),ep=["material","materials","bones","map"],Fl=class{constructor(e,t,i){let s=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yf,"")}static parseTrackName(e){let t=Qf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ep.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Fl;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cx=new Float32Array(1);var Th=new ft,Mr=class{constructor(e,t,i=0,s=1/0){this.ray=new oi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Th.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(e,t=!0,i=[]){return Ol(e,this,i,t),i.sort(Ah),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ol(e[s],this,i,t);return i.sort(Ah),i}};function Ah(n,e){return n.distance-e.distance}function Ol(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Ol(r[o],e,t,!0)}}var xs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Bl=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var fo=new wt,br=class extends ds{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new gt;r.setIndex(new $t(i,1)),r.setAttribute("position",new $t(s,3)),super(r,new Ri({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&fo.setFromObject(this.object),fo.isEmpty())return;let e=fo.min,t=fo.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Er=class extends Mn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function uc(n,e,t,i){let s=tp(i);switch(t){case nc:return n*e;case oa:return n*e/s.components*s.byteLength;case aa:return n*e/s.components*s.byteLength;case vi:return n*e*2/s.components*s.byteLength;case la:return n*e*2/s.components*s.byteLength;case ic:return n*e*3/s.components*s.byteLength;case mn:return n*e*4/s.components*s.byteLength;case ca:return n*e*4/s.components*s.byteLength;case Rr:case Cr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Ir:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ua:case fa:return Math.max(n,16)*Math.max(e,8)/4;case ha:case da:return Math.max(n,8)*Math.max(e,8)/2;case pa:case ma:case _a:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ga:case Lr:case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Da:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Na:case Ua:case Fa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Oa:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dr:case za:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tp(n){switch(n){case tn:case jl:return{byteLength:1,components:1};case Ss:case Ql:case An:return{byteLength:2,components:1};case sa:case ra:return{byteLength:2,components:4};case Tn:case ia:case pn:return{byteLength:4,components:1};case ec:case tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hu(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function sp(n){let e=new WeakMap;function t(a,l){let c=a.array,f=a.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let f=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,f);else{u.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<u.length;p++){let g=u[h],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,u[h]=_)}u.length=h+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];n.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var rp=`#ifdef USE_ALPHAHASH
  if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
  diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
  uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
  #ifdef ALPHA_TO_COVERAGE
  diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
  if ( diffuseColor.a == 0.0 ) discard;
  #else
  if ( diffuseColor.a < alphaTest ) discard;
  #endif
#endif`,hp=`#ifdef USE_ALPHATEST
  uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
  uniform sampler2D aoMap;
  uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
  mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
  vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
  vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,yp=`#ifdef USE_BUMPMAP
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
  uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
  vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  diffuseColor *= vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  varying vec4 vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  varying vec4 vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
  uniform sampler2D displacementMap;
  uniform float displacementScale;
  uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
  transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
  vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
  #ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
    emissiveColor = sRGBTransferEOTF( emissiveColor );
  #endif
  totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
  uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`vec4 LinearTransferOETF( in vec4 value ) {
  return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
  uniform float envMapIntensity;
  uniform mat3 envMapRotation;
  #ifdef ENVMAP_TYPE_CUBE
    uniform samplerCube envMap;
  #else
    uniform sampler2D envMap;
  #endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
  varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
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
}`,Yp=`#ifdef USE_LIGHTMAP
  uniform sampler2D lightMap;
  uniform float lightMapIntensity;
#endif`,Zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$p=`#ifdef USE_ENVMAP
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`uniform sampler2D dfgLUT;
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
}`,sm=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
  #if defined( LAMBERT ) || defined( PHONG )
    irradiance += iblIrradiance;
  #endif
  RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
  RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  uniform float logDepthBufFC;
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  vFragDepth = 1.0 + gl_Position.w;
  vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dm=`#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D( map, vMapUv );
  #ifdef DECODE_VIDEO_TEXTURE
    sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
  #endif
  diffuseColor *= sampledDiffuseColor;
#endif`,fm=`#ifdef USE_MAP
  uniform sampler2D map;
#endif`,pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mm=`#if defined( USE_POINTS_UV )
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
#endif`,gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
  vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
  metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
  uniform sampler2D metalnessMap;
#endif`,xm=`#ifdef USE_INSTANCING_MORPH
  float morphTargetInfluences[ MORPHTARGETS_COUNT ];
  float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
  }
#endif`,ym=`#if defined( USE_MORPHCOLORS )
  vColor *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    #if defined( USE_COLOR_ALPHA )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
    #elif defined( USE_COLOR )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
    #endif
  }
#endif`,vm=`#ifdef USE_MORPHNORMALS
  objectNormal *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,Mm=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,Em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wm=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,Tm=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,Am=`#ifndef FLAT_SHADED
  vNormal = normalize( transformedNormal );
  #ifdef USE_TANGENT
    vTangent = normalize( transformedTangent );
    vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
    #ifdef FLIP_SIDED
      vBitangent = - vBitangent;
    #endif
  #endif
#endif`,Rm=`#ifdef USE_NORMALMAP
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
#endif`,Cm=`#ifdef USE_CLEARCOAT
  vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
  vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
  clearcoatMapN.xy *= clearcoatNormalScale;
  clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Im=`#ifdef USE_CLEARCOATMAP
  uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  uniform sampler2D clearcoatNormalMap;
  uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
  gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Om=`#ifdef DITHERING
  gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
  vec3 dithering( vec3 color ) {
    float grid_position = rand( gl_FragCoord.xy );
    vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
    dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
    return color + dither_shift_RGB;
  }
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
  vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
  roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
  uniform sampler2D roughnessMap;
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wm=`float getShadowMask() {
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
}`,Xm=`#ifdef USE_SKINNING
  mat4 boneMatX = getBoneMatrix( skinIndex.x );
  mat4 boneMatY = getBoneMatrix( skinIndex.y );
  mat4 boneMatZ = getBoneMatrix( skinIndex.z );
  mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`#ifdef USE_SKINNING
  vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
  vec4 skinned = vec4( 0.0 );
  skinned += boneMatX * skinVertex * skinWeight.x;
  skinned += boneMatY * skinVertex * skinWeight.y;
  skinned += boneMatZ * skinVertex * skinWeight.z;
  skinned += boneMatW * skinVertex * skinWeight.w;
  transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
  vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
  specularStrength = texelSpecular.r;
#else
  specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
  uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
  vec4 worldPosition = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
    worldPosition = batchingMatrix * worldPosition;
  #endif
  #ifdef USE_INSTANCING
    worldPosition = instanceMatrix * worldPosition;
  #endif
  worldPosition = modelMatrix * worldPosition;
#endif`,r0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
  vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,l0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
  vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
  gl_FragColor = texColor;
  gl_FragColor.a *= opacity;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,u0=`#include <common>
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
}`,d0=`#if DEPTH_PACKING == 3200
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
}`,f0=`#define DISTANCE
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
}`,p0=`#define DISTANCE
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
  vec3 direction = normalize( vWorldDirection );
  vec2 sampleUV = equirectUv( direction );
  gl_FragColor = texture2D( tEquirect, sampleUV );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,_0=`uniform float scale;
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
}`,x0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,v0=`uniform vec3 diffuse;
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
}`,S0=`#define LAMBERT
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
}`,M0=`#define LAMBERT
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
}`,E0=`#define MATCAP
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
}`,w0=`#define NORMAL
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
}`,T0=`#define NORMAL
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
}`,A0=`#define PHONG
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
}`,R0=`#define PHONG
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
}`,C0=`#define STANDARD
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
}`,P0=`#define STANDARD
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
}`,I0=`#define TOON
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
}`,L0=`#define TOON
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
}`,N0=`uniform vec3 diffuse;
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
}`,U0=`#include <common>
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
}`,F0=`uniform vec3 color;
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
}`,O0=`uniform float rotation;
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
}`,B0=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:xp,bumpmap_pars_fragment:yp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:bp,color_fragment:Ep,color_pars_fragment:wp,color_pars_vertex:Tp,color_vertex:Ap,common:Rp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Lp,emissivemap_fragment:Dp,emissivemap_pars_fragment:Np,colorspace_fragment:Up,colorspace_pars_fragment:Fp,envmap_fragment:Op,envmap_common_pars_fragment:Bp,envmap_pars_fragment:zp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:$p,envmap_vertex:Hp,fog_vertex:Vp,fog_pars_vertex:Gp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:Yp,lights_lambert_fragment:Zp,lights_lambert_pars_fragment:Jp,lights_pars_begin:Kp,lights_toon_fragment:jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,lightprobes_pars_fragment:am,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:um,map_fragment:dm,map_pars_fragment:fm,map_particle_fragment:pm,map_particle_pars_fragment:mm,metalnessmap_fragment:gm,metalnessmap_pars_fragment:_m,morphinstance_vertex:xm,morphcolor_vertex:ym,morphnormal_vertex:vm,morphtarget_pars_vertex:Sm,morphtarget_vertex:Mm,normal_fragment_begin:bm,normal_fragment_maps:Em,normal_pars_fragment:wm,normal_pars_vertex:Tm,normal_vertex:Am,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Cm,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Im,iridescence_pars_fragment:Lm,opaque_fragment:Dm,packing:Nm,premultiplied_alpha_fragment:Um,project_vertex:Fm,dithering_fragment:Om,dithering_pars_fragment:Bm,roughnessmap_fragment:zm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:Hm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Gm,shadowmask_pars_fragment:Wm,skinbase_vertex:Xm,skinning_pars_vertex:qm,skinning_vertex:Ym,skinnormal_vertex:Zm,specularmap_fragment:Jm,specularmap_pars_fragment:Km,tonemapping_fragment:$m,tonemapping_pars_fragment:jm,transmission_fragment:Qm,transmission_pars_fragment:e0,uv_pars_fragment:t0,uv_pars_vertex:n0,uv_vertex:i0,worldpos_vertex:s0,background_vert:r0,background_frag:o0,backgroundCube_vert:a0,backgroundCube_frag:l0,cube_vert:c0,cube_frag:h0,depth_vert:u0,depth_frag:d0,distance_vert:f0,distance_frag:p0,equirect_vert:m0,equirect_frag:g0,linedashed_vert:_0,linedashed_frag:x0,meshbasic_vert:y0,meshbasic_frag:v0,meshlambert_vert:S0,meshlambert_frag:M0,meshmatcap_vert:b0,meshmatcap_frag:E0,meshnormal_vert:w0,meshnormal_frag:T0,meshphong_vert:A0,meshphong_frag:R0,meshphysical_vert:C0,meshphysical_frag:P0,meshtoon_vert:I0,meshtoon_frag:L0,points_vert:D0,points_frag:N0,shadow_vert:U0,shadow_frag:F0,sprite_vert:O0,sprite_frag:B0},Te={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},zn={basic:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Zt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Zt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Zt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Zt([Te.points,Te.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Zt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Zt([Te.common,Te.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Zt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Zt([Te.sprite,Te.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Zt([Te.common,Te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Zt([Te.lights,Te.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};zn.physical={uniforms:Zt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Va={r:0,b:0,g:0},z0=new ft,Vu=new Je;Vu.set(-1,0,0,0,1,0,0,0,1);function k0(n,e,t,i,s,r){let o=new Ze(0),a=s===!0?0:1,l,c,f=null,u=0,h=null;function p(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let v=y.backgroundBlurriness>0;M=e.get(M,v)}return M}function g(y){let M=!1,v=p(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),M=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,M){let v=p(M);v&&(v.isCubeTexture||v.mapping===Tr)?(c===void 0&&(c=new De(new en(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Fi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vu),c.material.toneMapped=rt.getTransfer(v.colorSpace)!==dt,(f!==v||u!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,h=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new De(new Fn(2,2),new cn({name:"BackgroundMaterial",uniforms:Fi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=rt.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,h=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,M){y.getRGB(Va,lc(n)),t.buffers.color.setClear(Va.r,Va.g,Va.b,M,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:_,dispose:d}}function H0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(U,A,R,C,N){let B=!1,H=u(U,C,R,A);r!==H&&(r=H,c(r.object)),B=p(U,C,R,N),B&&g(U,C,R,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(U,A,R,C),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function f(U){return n.deleteVertexArray(U)}function u(U,A,R,C){let N=C.wireframe===!0,B=i[A.id];B===void 0&&(B={},i[A.id]=B);let H=U.isInstancedMesh===!0?U.id:0,ee=B[H];ee===void 0&&(ee={},B[H]=ee);let J=ee[R.id];J===void 0&&(J={},ee[R.id]=J);let X=J[N];return X===void 0&&(X=h(l()),J[N]=X),X}function h(U){let A=[],R=[],C=[];for(let N=0;N<t;N++)A[N]=0,R[N]=0,C[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:R,attributeDivisors:C,object:U,attributes:{},index:null}}function p(U,A,R,C){let N=r.attributes,B=A.attributes,H=0,ee=R.getAttributes();for(let J in ee)if(ee[J].location>=0){let K=N[J],q=B[J];if(q===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(q=U.instanceColor)),K===void 0||K.attribute!==q||q&&K.data!==q.data)return!0;H++}return r.attributesNum!==H||r.index!==C}function g(U,A,R,C){let N={},B=A.attributes,H=0,ee=R.getAttributes();for(let J in ee)if(ee[J].location>=0){let K=B[J];K===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(K=U.instanceColor));let q={};q.attribute=K,K&&K.data&&(q.data=K.data),N[J]=q,H++}r.attributes=N,r.attributesNum=H,r.index=C}function _(){let U=r.newAttributes;for(let A=0,R=U.length;A<R;A++)U[A]=0}function m(U){d(U,0)}function d(U,A){let R=r.newAttributes,C=r.enabledAttributes,N=r.attributeDivisors;R[U]=1,C[U]===0&&(n.enableVertexAttribArray(U),C[U]=1),N[U]!==A&&(n.vertexAttribDivisor(U,A),N[U]=A)}function y(){let U=r.newAttributes,A=r.enabledAttributes;for(let R=0,C=A.length;R<C;R++)A[R]!==U[R]&&(n.disableVertexAttribArray(R),A[R]=0)}function M(U,A,R,C,N,B,H){H===!0?n.vertexAttribIPointer(U,A,R,N,B):n.vertexAttribPointer(U,A,R,C,N,B)}function v(U,A,R,C){_();let N=C.attributes,B=R.getAttributes(),H=A.defaultAttributeValues;for(let ee in B){let J=B[ee];if(J.location>=0){let X=N[ee];if(X===void 0&&(ee==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),ee==="instanceColor"&&U.instanceColor&&(X=U.instanceColor)),X!==void 0){let K=X.normalized,q=X.itemSize,ae=e.get(X);if(ae===void 0)continue;let ge=ae.buffer,ie=ae.type,fe=ae.bytesPerElement,W=ie===n.INT||ie===n.UNSIGNED_INT||X.gpuType===ia;if(X.isInterleavedBufferAttribute){let j=X.data,ue=j.stride,ke=X.offset;if(j.isInstancedInterleavedBuffer){for(let xe=0;xe<J.locationSize;xe++)d(J.location+xe,j.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let xe=0;xe<J.locationSize;xe++)m(J.location+xe);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let xe=0;xe<J.locationSize;xe++)M(J.location+xe,q/J.locationSize,ie,K,ue*fe,(ke+q/J.locationSize*xe)*fe,W)}else{if(X.isInstancedBufferAttribute){for(let j=0;j<J.locationSize;j++)d(J.location+j,X.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let j=0;j<J.locationSize;j++)m(J.location+j);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let j=0;j<J.locationSize;j++)M(J.location+j,q/J.locationSize,ie,K,q*fe,q/J.locationSize*j*fe,W)}}else if(H!==void 0){let K=H[ee];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(J.location,K);break;case 3:n.vertexAttrib3fv(J.location,K);break;case 4:n.vertexAttrib4fv(J.location,K);break;default:n.vertexAttrib1fv(J.location,K)}}}}y()}function b(){T();for(let U in i){let A=i[U];for(let R in A){let C=A[R];for(let N in C){let B=C[N];for(let H in B)f(B[H].object),delete B[H];delete C[N]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;let A=i[U.id];for(let R in A){let C=A[R];for(let N in C){let B=C[N];for(let H in B)f(B[H].object),delete B[H];delete C[N]}}delete i[U.id]}function D(U){for(let A in i){let R=i[A];for(let C in R){let N=R[C];if(N[U.id]===void 0)continue;let B=N[U.id];for(let H in B)f(B[H].object),delete B[H];delete N[U.id]}}}function x(U){for(let A in i){let R=i[A],C=U.isInstancedMesh===!0?U.id:0,N=R[C];if(N!==void 0){for(let B in N){let H=N[B];for(let ee in H)f(H[ee].object),delete H[ee];delete N[B]}delete R[C],Object.keys(R).length===0&&delete i[A]}}}function T(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function V0(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let h=0;for(let p=0;p<f;p++)h+=c[p];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function G0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==mn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let x=D===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==tn&&D!==pn&&!x&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",f=l(c);f!==c&&(Ge("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,maxSamples:b,samples:w}}function W0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new on,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let p=u.length!==0||h||i!==0||s;return s=h,i=u.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?f(null):c();else{let y=r?0:i,M=y*4,v=d.clippingState||null;l.value=v,v=f(g,h,M,p);for(let b=0;b!==M;++b)v[b]=t[b];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,v=p;M!==_;++M,v+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var ws=4,X0=6,q0=20,Y0=256,Ur=new Jn,vu=new Ze,dc=null,fc=0,pc=0,mc=!1,Z0=new P,Oi=new P,As=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Z0}=r;dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dc,fc,pc),this._renderer.xr.enabled=mc,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dc=this._renderer.getRenderTarget(),fc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:An,format:mn,colorSpace:qs,depthBuffer:!1},s=Su(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Su(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=J0(r)),this._blurMaterial=$0(r,e,t),this._ggxMaterial=K0(r,e,t)}return s}_compileMaterial(e){let t=new De(new gt,e);this._renderer.compile(t,Ur)}_sceneToCubeUV(e,t,i,s,r){let l=new kt(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(vu),u.toneMapping=wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new en,new ai({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,d=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,d=!0):(m.color.copy(vu),d=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[M]));let b=this._cubeSize;Es(s,v*b,M>2?b:0,b,b),u.setRenderTarget(s),d&&u.render(_,l),u.render(e,l)}u.toneMapping=p,u.autoClear=h,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===_i||e.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Es(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ur)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),h=c*1.25,p=u*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-ws?i-g+ws:0),d=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Es(r,m,d,3*_,2*_),s.setRenderTarget(r),s.render(a,Ur),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Es(e,m,d,3*_,2*_),s.setRenderTarget(e),s.render(a,Ur)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],u=3*f*(s>this._lodMax-ws?s-this._lodMax+ws:0),h=4*(this._cubeSize-f);Es(t,u,h,3*f,2*f),o.setRenderTarget(t),o.render(l,Ur)}};function J0(n){let e=[],t=[],i=n,s=n-ws+1+X0;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,p=3,g=new Float32Array(p*h*u),_=new Float32Array(p*h*u);for(let d=0;d<u;d++){let y=d%3*2/3-1,M=d>2?0:-1,v=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];g.set(v,p*h*d);for(let b=0;b<h;b++){let w=f[b*2]*2-1,D=f[b*2+1]*2-1;d===0?Oi.set(1,D,w):d===1?Oi.set(-w,1,-D):d===2?Oi.set(-w,D,1):d===3?Oi.set(-1,D,-w):d===4?Oi.set(-w,-1,D):Oi.set(w,D,-1),Oi.toArray(_,(d*h+b)*p)}}let m=new gt;m.setAttribute("position",new $t(g,p)),m.setAttribute("outputDirection",new $t(_,p)),t.push(new De(m,null)),i>ws&&i--}return{lodMeshes:t,sizeLods:e}}function Su(n,e,t){let i=new Qt(n,e,t);return i.texture.mapping=Tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function K0(n,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Y0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

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
    `,blending:On,depthTest:!1,depthWrite:!1})}function $0(n,e,t){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:q0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qa(),fragmentShader:`

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
    `,blending:On,depthTest:!1,depthWrite:!1})}function Mu(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qa(),fragmentShader:`

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
    `,blending:On,depthTest:!1,depthWrite:!1})}function bu(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qa(),fragmentShader:`

      precision mediump float;
      precision mediump int;

      uniform float flipEnvMap;

      varying vec3 vOutputDirection;

      uniform samplerCube envMap;

      void main() {

        gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

      }
    `,blending:On,depthTest:!1,depthWrite:!1})}function qa(){return`

    precision mediump float;
    precision mediump int;

    attribute vec3 outputDirection;

    varying vec3 vOutputDirection;

    void main() {

      vOutputDirection = outputDirection;
      gl_Position = vec4( position, 1.0 );

    }
  `}var Wa=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new tr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
      `},s=new en(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Fi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:On});r.uniforms.tEquirect.value=t;let o=new De(s,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=Ht),new $o(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function j0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,p=!1){return h==null?null:p?o(h):r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===ea||p===ta)if(e.has(h)){let g=e.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new Wa(g.height);return _.fromEquirectangularTexture(n,h),e.set(h,_),h.addEventListener("dispose",c),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let p=h.mapping,g=p===ea||p===ta,_=p===_i||p===Ni;if(g||_){let m=t.get(h),d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new As(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let y=h.image;return g&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new As(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function a(h,p){return p===ea?h.mapping=_i:p===ta&&(h.mapping=Ni),h}function l(h){let p=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&p++;return p===g}function c(h){let p=h.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function f(h){let p=h.target;p.removeEventListener("dispose",f);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Q0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ai("WebGLRenderer: "+i+" extension not supported."),s}}}function eg(n,e,t,i){let s={},r=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(u){let h=[],p=u.index,g=u.attributes.position,_=0;if(g===void 0)return;if(p!==null){let y=p.array;_=p.version;for(let M=0,v=y.length;M<v;M+=3){let b=y[M+0],w=y[M+1],D=y[M+2];h.push(b,w,w,D,D,b)}}else{let y=g.array;_=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let b=M+0,w=M+1,D=M+2;h.push(b,w,w,D,D,b)}}let m=new(g.count>=65535?$s:Ks)(h,1);m.version=_;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function f(u){let h=r.get(u);if(h){let p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function tg(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,h){n.drawElements(i,h,r,u*o),t.update(h,i,1)}function c(u,h,p){p!==0&&(n.drawElementsInstanced(i,h,r,u*o,p),t.update(h,i,p))}function f(u,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,u,0,p);let _=0;for(let m=0;m<p;m++)_+=h[m];t.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function ng(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ig(n,e,t){let i=new WeakMap,s=new Et;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,h=i.get(a);if(h===void 0||h.count!==u){let T=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;p===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,b=1;v>e.maxTextureSize&&(b=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*b*4*u),D=new Js(w,v,b,u);D.type=pn,D.needsUpdate=!0;let x=M*4;for(let I=0;I<u;I++){let U=m[I],A=d[I],R=y[I],C=v*b*4*I;for(let N=0;N<U.count;N++){let B=N*x;p===!0&&(s.fromBufferAttribute(U,N),w[C+B+0]=s.x,w[C+B+1]=s.y,w[C+B+2]=s.z,w[C+B+3]=0),g===!0&&(s.fromBufferAttribute(A,N),w[C+B+4]=s.x,w[C+B+5]=s.y,w[C+B+6]=s.z,w[C+B+7]=0),_===!0&&(s.fromBufferAttribute(R,N),w[C+B+8]=s.x,w[C+B+9]=s.y,w[C+B+10]=s.z,w[C+B+11]=R.itemSize===4?s.w:1)}}h={count:u,texture:D,size:new ce(v,b)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function sg(n,e,t,i,s){let r=new WeakMap;function o(c){let f=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return h}function a(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var rg={[Xl]:"LINEAR_TONE_MAPPING",[ql]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[wr]:"ACES_FILMIC_TONE_MAPPING",[Jl]:"AGX_TONE_MAPPING",[Kl]:"NEUTRAL_TONE_MAPPING",[Zl]:"CUSTOM_TONE_MAPPING"};function og(n,e,t,i,s,r){let o=new Qt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new gt;c.setAttribute("position",new je([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new je([0,2,0,0,2,0],2));let f=new Bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
      }`,depthTest:!1,depthWrite:!1}),u=new De(c,f),h=new Jn(-1,1,1,-1,0,1),p=null,g=null,_=!1,m,d=null,y=[],M=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),l!==null&&l.setSize(v,b);for(let w=0;w<y.length;w++){let D=y[w];D.setSize&&D.setSize(v,b)}},this.setEffects=function(v){y=v,M=y.length>0&&y[0].isRenderPass===!0;let b=o.width,w=o.height;y.length>0&&a===null&&(a=new Qt(b,w,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new Qt(b,w,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<y.length;D++){let x=y[D];x.setSize&&x.setSize(b,w)}},this.begin=function(v,b){if(_||v.toneMapping===wn&&y.length===0)return!1;if(d=b,b!==null){let w=b.width,D=b.height;(o.width!==w||o.height!==D)&&this.setSize(w,D)}return M===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=wn,!0},this.hasRenderPass=function(){return M},this.end=function(v,b){v.toneMapping=m,_=!0;let w=o,D=a;for(let x=0;x<y.length;x++){let T=y[x];T.enabled!==!1&&(T.render(v,D,w,b),T.needsSwap!==!1&&(w=D,D=D===a?l:a))}if(p!==v.outputColorSpace||g!==v.toneMapping){p=v.outputColorSpace,g=v.toneMapping,f.defines={},rt.getTransfer(p)===dt&&(f.defines.SRGB_TRANSFER="");let x=rg[g];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(d),v.render(u,h),d=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var Gu=new jt,xc=new li(1,1),Wu=new Js,Xu=new Ro,qu=new tr,Eu=[],wu=[],Tu=new Float32Array(16),Au=new Float32Array(9),Ru=new Float32Array(4);function Rs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Eu[s];if(r===void 0&&(r=new Float32Array(s),Eu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ya(n,e){let t=wu[e];t===void 0&&(t=new Int32Array(e),wu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ag(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function cg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function hg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function ug(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;Ru.set(i),n.uniformMatrix2fv(this.addr,!1,Ru),Nt(t,i)}}function dg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;Au.set(i),n.uniformMatrix3fv(this.addr,!1,Au),Nt(t,i)}}function fg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;Tu.set(i),n.uniformMatrix4fv(this.addr,!1,Tu),Nt(t,i)}}function pg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function _g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function xg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function vg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function Sg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function Mg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xc.compareFunction=t.isReversedDepthBuffer()?Ha:ka,r=xc):r=Gu,t.setTexture2D(e||r,s)}function bg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Xu,s)}function Eg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qu,s)}function wg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wu,s)}function Tg(n){switch(n){case 5126:return ag;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return yg;case 36295:return vg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return wg}}function Ag(n,e){n.uniform1fv(this.addr,e)}function Rg(n,e){let t=Rs(e,this.size,2);n.uniform2fv(this.addr,t)}function Cg(n,e){let t=Rs(e,this.size,3);n.uniform3fv(this.addr,t)}function Pg(n,e){let t=Rs(e,this.size,4);n.uniform4fv(this.addr,t)}function Ig(n,e){let t=Rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Lg(n,e){let t=Rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dg(n,e){let t=Rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ng(n,e){n.uniform1iv(this.addr,e)}function Ug(n,e){n.uniform2iv(this.addr,e)}function Fg(n,e){n.uniform3iv(this.addr,e)}function Og(n,e){n.uniform4iv(this.addr,e)}function Bg(n,e){n.uniform1uiv(this.addr,e)}function zg(n,e){n.uniform2uiv(this.addr,e)}function kg(n,e){n.uniform3uiv(this.addr,e)}function Hg(n,e){n.uniform4uiv(this.addr,e)}function Vg(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=xc:o=Gu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Gg(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xu,r[o])}function Wg(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||qu,r[o])}function Xg(n,e,t){let i=this.cache,s=e.length,r=Ya(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wu,r[o])}function qg(n){switch(n){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Ig;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return kg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}var yc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Tg(t.type)}},vc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qg(t.type)}},Sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},gc=/(\w+)(\])?(\[|\.)?/g;function Cu(n,e){n.seq.push(e),n.map[e.id]=e}function Yg(n,e,t){let i=n.name,s=i.length;for(gc.lastIndex=0;;){let r=gc.exec(i),o=gc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cu(t,c===void 0?new yc(a,n,e):new vc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Sc(a),Cu(t,u)),t=u}}}var Ts=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Yg(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Pu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Zg=37297,Jg=0;function Kg(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Iu=new Je;function $g(n){rt._getMatrix(Iu,rt.workingColorSpace,n);let e=`mat3( ${Iu.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Ys:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Lu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Kg(n.getShaderSource(e),a)}else return r}function jg(n,e){let t=$g(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Qg={[Xl]:"Linear",[ql]:"Reinhard",[Yl]:"Cineon",[wr]:"ACESFilmic",[Jl]:"AgX",[Kl]:"Neutral",[Zl]:"Custom"};function e_(n,e){let t=Qg[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ga=new P;function t_(){rt.getLuminanceCoefficients(Ga);let n=Ga.x.toFixed(4),e=Ga.y.toFixed(4),t=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function i_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function s_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Or(n){return n!==""}function Du(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(n){return n.replace(r_,a_)}var o_=new Map;function a_(n,e){let t=nt[e];if(t===void 0){let i=o_.get(e);if(i!==void 0)t=nt[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mc(t)}var l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(n){return n.replace(l_,c_)}function c_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var h_={[Li]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function u_(n){return h_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var d_={[_i]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[Tr]:"ENVMAP_TYPE_CUBE_UV"};function f_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":d_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var p_={[Ni]:"ENVMAP_MODE_REFRACTION"};function m_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":p_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var g_={[Qo]:"ENVMAP_BLENDING_MULTIPLY",[Jh]:"ENVMAP_BLENDING_MIX",[Kh]:"ENVMAP_BLENDING_ADD"};function __(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":g_[n.combine]||"ENVMAP_BLENDING_NONE"}function x_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function y_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=u_(t),c=f_(t),f=m_(t),u=__(t),h=x_(t),p=n_(t),g=i_(r),_=s.createProgram(),m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Or).join(`
`),d.length>0&&(d+=`
`)):(m=[Fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),d=[Fu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?nt.tonemapping_pars_fragment:"",t.toneMapping!==wn?e_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,jg("linearToOutputTexel",t.outputColorSpace),t_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=Mc(o),o=Du(o,t),o=Nu(o,t),a=Mc(a),a=Du(a,t),a=Nu(a,t),o=Uu(o),a=Uu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=y+m+o,v=y+d+a,b=Pu(s,s.VERTEX_SHADER,M),w=Pu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,b),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(U){if(n.debug.checkShaderErrors){let A=s.getProgramInfoLog(_)||"",R=s.getShaderInfoLog(b)||"",C=s.getShaderInfoLog(w)||"",N=A.trim(),B=R.trim(),H=C.trim(),ee=!0,J=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,w);else{let X=Lu(s,b,"vertex"),K=Lu(s,w,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+X+`
`+K)}else N!==""?Ge("WebGLProgram: Program Info Log:",N):(B===""||H==="")&&(J=!1);J&&(U.diagnostics={runnable:ee,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:d}})}s.deleteShader(b),s.deleteShader(w),x=new Ts(s,_),T=s_(s,_)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,Zg)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}var v_=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ec(e),t.set(e,i)),i}},Ec=class{constructor(e){this.id=v_++,this.code=e,this.usedTimes=0}};function S_(n){return n===vi||n===Lr||n===Dr}function M_(n,e,t,i,s,r){let o=new cs,a=new bc,l=new Set,c=[],f=new Map,u=i.logarithmicDepthBuffer,h=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,I,U,A,R){let C=U.fog,N=A.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ee=e.get(x.envMap||B,H),J=ee&&ee.mapping===Tr?ee.image.height:null,X=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,q=K!==void 0?K.length:0,ae=0;N.morphAttributes.position!==void 0&&(ae=1),N.morphAttributes.normal!==void 0&&(ae=2),N.morphAttributes.color!==void 0&&(ae=3);let ge,ie,fe,W;if(X){let yt=zn[X];ge=yt.vertexShader,ie=yt.fragmentShader}else{ge=x.vertexShader,ie=x.fragmentShader;let yt=a.getVertexShaderStage(x),ht=a.getFragmentShaderStage(x);a.update(x,yt,ht),fe=yt.id,W=ht.id}let j=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),ke=A.isInstancedMesh===!0,xe=A.isBatchedMesh===!0,Pe=!!x.map,ot=!!x.matcap,re=!!ee,de=!!x.aoMap,pe=!!x.lightMap,me=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,We=!!x.displacementMap,Ve=!!x.emissiveMap,Ye=!!x.metalnessMap,$e=!!x.roughnessMap,O=x.anisotropy>0,ct=x.clearcoat>0,it=x.dispersion>0,L=x.retroreflectivity>0,S=x.iridescence>0,G=x.sheen>0,$=x.transmission>0,te=O&&!!x.anisotropyMap,_e=ct&&!!x.clearcoatMap,ye=ct&&!!x.clearcoatNormalMap,ne=ct&&!!x.clearcoatRoughnessMap,oe=S&&!!x.iridescenceMap,Se=S&&!!x.iridescenceThicknessMap,Be=G&&!!x.sheenColorMap,we=G&&!!x.sheenRoughnessMap,Me=!!x.specularMap,ze=!!x.specularColorMap,Xe=!!x.specularIntensityMap,Qe=$&&!!x.transmissionMap,k=$&&!!x.thicknessMap,be=!!x.gradientMap,se=!!x.alphaMap,Ee=x.alphaTest>0,Ce=!!x.alphaHash,he=!!x.extensions,He=wn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(He=n.toneMapping);let Fe={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:ge,fragmentShader:ie,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:xe,batchingColor:xe&&A._colorsTexture!==null,instancing:ke,instancingColor:ke&&A.instanceColor!==null,instancingMorph:ke&&A.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Pe,matcap:ot,envMap:re,envMapMode:re&&ee.mapping,envMapCubeUVHeight:J,aoMap:de,lightMap:pe,bumpMap:me,normalMap:ve,displacementMap:We,emissiveMap:Ve,normalMapObjectSpace:ve&&x.normalMapType===Qh,normalMapTangentSpace:ve&&x.normalMapType===Nr,packedNormalMap:ve&&x.normalMapType===Nr&&S_(x.normalMap.format),metalnessMap:Ye,roughnessMap:$e,anisotropy:O,anisotropyMap:te,clearcoat:ct,clearcoatMap:_e,clearcoatNormalMap:ye,clearcoatRoughnessMap:ne,dispersion:it,retroreflection:L,iridescence:S,iridescenceMap:oe,iridescenceThicknessMap:Se,sheen:G,sheenColorMap:Be,sheenRoughnessMap:we,specularMap:Me,specularColorMap:ze,specularIntensityMap:Xe,transmission:$,transmissionMap:Qe,thicknessMap:k,gradientMap:be,opaque:x.transparent===!1&&x.blending===vs&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:Ee,alphaHash:Ce,combine:x.combine,mapUv:Pe&&g(x.map.channel),aoMapUv:de&&g(x.aoMap.channel),lightMapUv:pe&&g(x.lightMap.channel),bumpMapUv:me&&g(x.bumpMap.channel),normalMapUv:ve&&g(x.normalMap.channel),displacementMapUv:We&&g(x.displacementMap.channel),emissiveMapUv:Ve&&g(x.emissiveMap.channel),metalnessMapUv:Ye&&g(x.metalnessMap.channel),roughnessMapUv:$e&&g(x.roughnessMap.channel),anisotropyMapUv:te&&g(x.anisotropyMap.channel),clearcoatMapUv:_e&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(x.sheenRoughnessMap.channel),specularMapUv:Me&&g(x.specularMap.channel),specularColorMapUv:ze&&g(x.specularColorMap.channel),specularIntensityMapUv:Xe&&g(x.specularIntensityMap.channel),transmissionMapUv:Qe&&g(x.transmissionMap.channel),thicknessMapUv:k&&g(x.thicknessMap.channel),alphaMapUv:se&&g(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ve||O),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!N.attributes.uv&&(Pe||se),fog:!!C,useFog:x.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ue,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ae,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:R.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Pe&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===dt,decodeVideoTextureEmissive:Ve&&x.emissiveMap.isVideoTexture===!0&&rt.getTransfer(x.emissiveMap.colorSpace)===dt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tt,flipSided:x.side===Gt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&x.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(d(T,x),y(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let T=p[x.type],I;if(T){let U=zn[T];I=_u.clone(U.uniforms)}else I=x.uniforms;return I}function v(x,T){let I=f.get(T);return I!==void 0?++I.usedTimes:(I=new y_(n,T,x,s),c.push(I),f.set(T,I)),I}function b(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function D(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:M,acquireProgram:v,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:D}}function b_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function E_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ou(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,g,_,m,d){let y=n[e];return y===void 0?(y={id:h.id,object:h,geometry:p,material:g,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:d},n[e]=y):(y.id=h.id,y.object=h,y.geometry=p,y.material=g,y.materialVariant=o(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=m,y.group=d),e++,y}function l(h,p,g,_,m,d,y){y.reversedDepth===!0&&(m=-m);let M=a(h,p,g,_,m,d);g.transmission>0?i.push(M):g.transparent===!0?s.push(M):t.push(M)}function c(h,p,g,_,m,d){let y=a(h,p,g,_,m,d);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function f(h,p){t.length>1&&t.sort(h||E_),i.length>1&&i.sort(p||Ou),s.length>1&&s.sort(p||Ou)}function u(){for(let h=e,p=n.length;h<p;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:f}}function w_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Bu,n.set(i,[o])):s>=r.length?(o=new Bu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function T_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ze};break;case"SpotLight":t={position:new P,direction:new P,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function A_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var R_=0;function C_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function P_(n){let e=new T_,t=A_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new ft,o=new ft;function a(c){let f=0,u=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,y=0,M=0,v=0,b=0,w=0,D=0,x=0,T=0,I=0;c.sort(C_);for(let A=0,R=c.length;A<R;A++){let C=c[A],N=C.color,B=C.intensity,H=C.distance,ee=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===vi?ee=C.shadow.map.texture:ee=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)f+=N.r*B,u+=N.g*B,h+=N.b*B;else if(C.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(C.sh.coefficients[J],B);I++}else if(C.isSunLight){let J=e.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,K=t.get(C);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[g]=K,i.sunShadowMap[g]=ee;let q=X.getViewportCount();for(let ae=0;ae<q;ae++)i.sunShadowMatrix[_+ae]=X.getMatrix(ae),i.sunShadowCascade[_+ae]=X._cascadeData[ae];_+=q,g++}i.sun[p]=J,p++}else if(C.isDirectionalLight){let J=e.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,K=t.get(C);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=C.shadow.matrix,b++}i.directional[m]=J,m++}else if(C.isSpotLight){let J=e.get(C);J.position.setFromMatrixPosition(C.matrixWorld),J.color.copy(N).multiplyScalar(B),J.distance=H,J.coneCos=Math.cos(C.angle),J.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),J.decay=C.decay,i.spot[y]=J;let X=C.shadow;if(C.map&&(i.spotLightMap[x]=C.map,x++,X.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[y]=X.matrix,C.castShadow){let K=t.get(C);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.spotShadow[y]=K,i.spotShadowMap[y]=ee,D++}y++}else if(C.isRectAreaLight){let J=e.get(C);J.color.copy(N).multiplyScalar(B),J.halfWidth.set(C.width*.5,0,0),J.halfHeight.set(0,C.height*.5,0),i.rectArea[M]=J,M++}else if(C.isPointLight){let J=e.get(C);if(J.color.copy(C.color).multiplyScalar(C.intensity),J.distance=C.distance,J.decay=C.decay,C.castShadow){let X=C.shadow,K=t.get(C);K.shadowIntensity=X.intensity,K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,i.pointShadow[d]=K,i.pointShadowMap[d]=ee,i.pointShadowMatrix[d]=C.shadow.matrix,w++}i.point[d]=J,d++}else if(C.isHemisphereLight){let J=e.get(C);J.skyColor.copy(C.color).multiplyScalar(B),J.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[v]=J,v++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;let U=i.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==d||U.spotLength!==y||U.rectAreaLength!==M||U.hemiLength!==v||U.numSunShadows!==g||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==D||U.numSpotMaps!==x||U.numLightProbes!==I)&&(i.sun.length=p,i.directional.length=m,i.spot.length=y,i.rectArea.length=M,i.point.length=d,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,U.sunLength=p,U.directionalLength=m,U.pointLength=d,U.spotLength=y,U.rectAreaLength=M,U.hemiLength=v,U.numSunShadows=g,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=D,U.numSpotMaps=x,U.numLightProbes=I,i.version=R_++)}function l(c,f){let u=0,h=0,p=0,g=0,_=0,m=0,d=f.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let v=c[y];if(v.isSunLight){let b=i.sun[u];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(d),u++}else if(v.isDirectionalLight){let b=i.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(v.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),g++}else if(v.isRectAreaLight){let b=i.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),o.identity(),r.copy(v.matrixWorld),r.premultiply(d),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let b=i.point[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:a,setupView:l,state:i}}function zu(n){let e=new P_(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function f(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function I_(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new zu(n),e.set(s,[a])):r>=o.length?(a=new zu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var L_=`void main() {
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
}`,N_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],U_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],ku=new ft,Fr=new P,_c=new P;function F_(n,e,t){let i=new us,s=new ce,r=new ce,o=new Et,a=new zo,l=new ko,c={},f=t.maxTextureSize,u={[gi]:Gt,[Gt]:gi,[Tt]:Tt},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:L_,fragmentShader:D_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new gt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new De(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Li;let d=this.type;this.render=function(w,D,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Ph&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Li);let T=n.getRenderTarget(),I=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),A=n.state;A.setBlending(On),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let R=d!==this.type;R&&D.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(N=>N.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,N=w.length;C<N;C++){let B=w[C],H=B.shadow;if(H===void 0){Ge("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ee=H.getFrameExtents();s.multiply(ee),r.copy(H.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/ee.x),s.x=r.x*ee.x,H.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/ee.y),s.y=r.y*ee.y,H.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=J,H.map===null||R===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ys){if(B.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Qt(s.x,s.y,{format:vi,type:An,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new li(s.x,s.y,pn),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Dn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ot,H.map.depthTexture.magFilter=Ot}else B.isPointLight?(H.map=new Wa(s.x),H.map.depthTexture=new Lo(s.x,Tn)):(H.map=new Qt(s.x,s.y),H.map.depthTexture=new li(s.x,s.y,Tn)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Dn,this.type===Li?(H.map.depthTexture.compareFunction=J?Ha:ka,H.map.depthTexture.minFilter=Ht,H.map.depthTexture.magFilter=Ht):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ot,H.map.depthTexture.magFilter=Ot);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let X=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();B.isPointLight!==!0&&H.updateMatrices(B,x);for(let K=0;K<X;K++){let q=H.getCamera(K);if(B.isPointLight){let ae=H.camera,ge=H.matrix,ie=B.distance||ae.far;ie!==ae.far&&(ae.far=ie,ae.updateProjectionMatrix()),Fr.setFromMatrixPosition(B.matrixWorld),ae.position.copy(Fr),_c.copy(ae.position),_c.add(N_[K]),ae.up.copy(U_[K]),ae.lookAt(_c),ae.updateMatrixWorld(),ge.makeTranslation(-Fr.x,-Fr.y,-Fr.z),ku.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ku,ae.coordinateSystem,ae.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,K),n.clear();else{K===0&&(n.setRenderTarget(H.map),n.clear());let ae=H.getViewport(K);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),A.viewport(o)}i=H.getFrustum(K),v(D,x,q,B,this.type)}H.isPointLightShadow!==!0&&this.type===ys&&y(H,x),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(T,I,U)};function y(w,D){let x=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Qt(s.x,s.y,{format:vi,type:An}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(D,null,x,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(D,null,x,p,_,null)}function M(w,D,x,T){let I=null,U=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)I=U;else if(I=x.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let A=I.uuid,R=D.uuid,C=c[A];C===void 0&&(C={},c[A]=C);let N=C[R];N===void 0&&(N=I.clone(),C[R]=N,D.addEventListener("dispose",b)),I=N}if(I.visible=D.visible,I.wireframe=D.wireframe,T===ys?I.side=D.shadowSide!==null?D.shadowSide:D.side:I.side=D.shadowSide!==null?D.shadowSide:u[D.side],I.alphaMap=D.alphaMap,I.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,I.map=D.map,I.clipShadows=D.clipShadows,I.clippingPlanes=D.clippingPlanes,I.clipIntersection=D.clipIntersection,I.displacementMap=D.displacementMap,I.displacementScale=D.displacementScale,I.displacementBias=D.displacementBias,I.wireframeLinewidth=D.wireframeLinewidth,I.linewidth=D.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let A=n.properties.get(I);A.light=x}return I}function v(w,D,x,T,I){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===ys)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let R=e.update(w),C=w.material;if(Array.isArray(C)){let N=R.groups;for(let B=0,H=N.length;B<H;B++){let ee=N[B],J=C[ee.materialIndex];if(J&&J.visible){let X=M(w,J,T,I);w.onBeforeShadow(n,w,D,x,R,X,ee),n.renderBufferDirect(x,null,R,X,w,ee),w.onAfterShadow(n,w,D,x,R,X,ee)}}}else if(C.visible){let N=M(w,C,T,I);w.onBeforeShadow(n,w,D,x,R,N,null),n.renderBufferDirect(x,null,R,N,w,null),w.onAfterShadow(n,w,D,x,R,N,null)}}let A=w.children;for(let R=0,C=A.length;R<C;R++)v(A[R],D,x,T,I)}function b(w){w.target.removeEventListener("dispose",b);for(let x in c){let T=c[x],I=w.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function O_(n,e){function t(){let k=!1,be=new Et,se=null,Ee=new Et(0,0,0,0);return{setMask:function(Ce){se!==Ce&&!k&&(n.colorMask(Ce,Ce,Ce,Ce),se=Ce)},setLocked:function(Ce){k=Ce},setClear:function(Ce,he,He,Fe,yt){yt===!0&&(Ce*=Fe,he*=Fe,He*=Fe),be.set(Ce,he,He,Fe),Ee.equals(be)===!1&&(n.clearColor(Ce,he,He,Fe),Ee.copy(be))},reset:function(){k=!1,se=null,Ee.set(-1,0,0,0)}}}function i(){let k=!1,be=!1,se=null,Ee=null,Ce=null;return{setReversed:function(he){if(be!==he){let He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),be=he;let Fe=Ce;Ce=null,this.setClear(Fe)}},getReversed:function(){return be},setTest:function(he){he?j(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(he){se!==he&&!k&&(n.depthMask(he),se=he)},setFunc:function(he){if(be&&(he=uu[he]),Ee!==he){switch(he){case go:n.depthFunc(n.NEVER);break;case _o:n.depthFunc(n.ALWAYS);break;case xo:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case yo:n.depthFunc(n.EQUAL);break;case vo:n.depthFunc(n.GEQUAL);break;case So:n.depthFunc(n.GREATER);break;case Mo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=he}},setLocked:function(he){k=he},setClear:function(he){Ce!==he&&(Ce=he,be&&(he=1-he),n.clearDepth(he))},reset:function(){k=!1,se=null,Ee=null,Ce=null,be=!1}}}function s(){let k=!1,be=null,se=null,Ee=null,Ce=null,he=null,He=null,Fe=null,yt=null;return{setTest:function(ht){k||(ht?j(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(ht){be!==ht&&!k&&(n.stencilMask(ht),be=ht)},setFunc:function(ht,_n,Rn){(se!==ht||Ee!==_n||Ce!==Rn)&&(n.stencilFunc(ht,_n,Rn),se=ht,Ee=_n,Ce=Rn)},setOp:function(ht,_n,Rn){(he!==ht||He!==_n||Fe!==Rn)&&(n.stencilOp(ht,_n,Rn),he=ht,He=_n,Fe=Rn)},setLocked:function(ht){k=ht},setClear:function(ht){yt!==ht&&(n.clearStencil(ht),yt=ht)},reset:function(){k=!1,be=null,se=null,Ee=null,Ce=null,he=null,He=null,Fe=null,yt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,f={},u={},h={},p=new WeakMap,g=[],_=null,m=!1,d=null,y=null,M=null,v=null,b=null,w=null,D=null,x=new Ze(0,0,0),T=0,I=!1,U=null,A=null,R=null,C=null,N=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ee=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(J)[1]),H=ee>=1):J.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),H=ee>=2);let X=null,K={},q=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),ge=new Et().fromArray(q),ie=new Et().fromArray(ae);function fe(k,be,se,Ee){let Ce=new Uint8Array(4),he=n.createTexture();n.bindTexture(k,he),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<se;He++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,Ce):n.texImage2D(be+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ce);return he}let W={};W[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(ss),me(!1),ve(zl),j(n.CULL_FACE),de(On);function j(k){f[k]!==!0&&(n.enable(k),f[k]=!0)}function ue(k){f[k]!==!1&&(n.disable(k),f[k]=!1)}function ke(k,be){return h[k]!==be?(n.bindFramebuffer(k,be),h[k]=be,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=be),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=be),!0):!1}function xe(k,be){let se=g,Ee=!1;if(k){se=p.get(be),se===void 0&&(se=[],p.set(be,se));let Ce=k.textures;if(se.length!==Ce.length||se[0]!==n.COLOR_ATTACHMENT0){for(let he=0,He=Ce.length;he<He;he++)se[he]=n.COLOR_ATTACHMENT0+he;se.length=Ce.length,Ee=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(se)}function Pe(k){return _!==k?(n.useProgram(k),_=k,!0):!1}let ot={[Di]:n.FUNC_ADD,[Lh]:n.FUNC_SUBTRACT,[Dh]:n.FUNC_REVERSE_SUBTRACT};ot[Nh]=n.MIN,ot[Uh]=n.MAX;let re={[Fh]:n.ZERO,[Oh]:n.ONE,[Bh]:n.SRC_COLOR,[Gl]:n.SRC_ALPHA,[Wh]:n.SRC_ALPHA_SATURATE,[Vh]:n.DST_COLOR,[kh]:n.DST_ALPHA,[zh]:n.ONE_MINUS_SRC_COLOR,[Wl]:n.ONE_MINUS_SRC_ALPHA,[Gh]:n.ONE_MINUS_DST_COLOR,[Hh]:n.ONE_MINUS_DST_ALPHA,[Xh]:n.CONSTANT_COLOR,[qh]:n.ONE_MINUS_CONSTANT_COLOR,[Yh]:n.CONSTANT_ALPHA,[Zh]:n.ONE_MINUS_CONSTANT_ALPHA};function de(k,be,se,Ee,Ce,he,He,Fe,yt,ht){if(k===On){m===!0&&(ue(n.BLEND),m=!1);return}if(m===!1&&(j(n.BLEND),m=!0),k!==Ih){if(k!==d||ht!==I){if((y!==Di||b!==Di)&&(n.blendEquation(n.FUNC_ADD),y=Di,b=Di),ht)switch(k){case vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kl:n.blendFunc(n.ONE,n.ONE);break;case Hl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",k);break}else switch(k){case vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hl:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",k);break}M=null,v=null,w=null,D=null,x.set(0,0,0),T=0,d=k,I=ht}return}Ce=Ce||be,he=he||se,He=He||Ee,(be!==y||Ce!==b)&&(n.blendEquationSeparate(ot[be],ot[Ce]),y=be,b=Ce),(se!==M||Ee!==v||he!==w||He!==D)&&(n.blendFuncSeparate(re[se],re[Ee],re[he],re[He]),M=se,v=Ee,w=he,D=He),(Fe.equals(x)===!1||yt!==T)&&(n.blendColor(Fe.r,Fe.g,Fe.b,yt),x.copy(Fe),T=yt),d=k,I=!1}function pe(k,be){k.side===Tt?ue(n.CULL_FACE):j(n.CULL_FACE);let se=k.side===Gt;be&&(se=!se),me(se),k.blending===vs&&k.transparent===!1?de(On):de(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Ee=k.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ve(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function me(k){U!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),U=k)}function ve(k){k!==Rh?(j(n.CULL_FACE),k!==A&&(k===zl?n.cullFace(n.BACK):k===Ch?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),A=k}function We(k){k!==R&&(H&&n.lineWidth(k),R=k)}function Ve(k,be,se){k?(j(n.POLYGON_OFFSET_FILL),(C!==be||N!==se)&&(C=be,N=se,o.getReversed()&&(be=-be),n.polygonOffset(be,se))):ue(n.POLYGON_OFFSET_FILL)}function Ye(k){k?j(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function $e(k){k===void 0&&(k=n.TEXTURE0+B-1),X!==k&&(n.activeTexture(k),X=k)}function O(k,be,se){se===void 0&&(X===null?se=n.TEXTURE0+B-1:se=X);let Ee=K[se];Ee===void 0&&(Ee={type:void 0,texture:void 0},K[se]=Ee),(Ee.type!==k||Ee.texture!==be)&&(X!==se&&(n.activeTexture(se),X=se),n.bindTexture(k,be||W[k]),Ee.type=k,Ee.texture=be)}function ct(){let k=K[X];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function it(){try{n.compressedTexImage2D(...arguments)}catch(k){qe("WebGLState:",k)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(k){qe("WebGLState:",k)}}function S(){try{n.texSubImage2D(...arguments)}catch(k){qe("WebGLState:",k)}}function G(){try{n.texSubImage3D(...arguments)}catch(k){qe("WebGLState:",k)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(k){qe("WebGLState:",k)}}function te(){try{n.compressedTexSubImage3D(...arguments)}catch(k){qe("WebGLState:",k)}}function _e(){try{n.texStorage2D(...arguments)}catch(k){qe("WebGLState:",k)}}function ye(){try{n.texStorage3D(...arguments)}catch(k){qe("WebGLState:",k)}}function ne(){try{n.texImage2D(...arguments)}catch(k){qe("WebGLState:",k)}}function oe(){try{n.texImage3D(...arguments)}catch(k){qe("WebGLState:",k)}}function Se(k){return u[k]!==void 0?u[k]:n.getParameter(k)}function Be(k,be){u[k]!==be&&(n.pixelStorei(k,be),u[k]=be)}function we(k){ge.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ge.copy(k))}function Me(k){ie.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ie.copy(k))}function ze(k,be){let se=c.get(be);se===void 0&&(se=new WeakMap,c.set(be,se));let Ee=se.get(k);Ee===void 0&&(Ee=n.getUniformBlockIndex(be,k.name),se.set(k,Ee))}function Xe(k,be){let Ee=c.get(be).get(k);l.get(be)!==Ee&&(n.uniformBlockBinding(be,Ee,k.__bindingPointIndex),l.set(be,Ee))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},u={},X=null,K={},h={},p=new WeakMap,g=[],_=null,m=!1,d=null,y=null,M=null,v=null,b=null,w=null,D=null,x=new Ze(0,0,0),T=0,I=!1,U=null,A=null,R=null,C=null,N=null,ge.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ue,bindFramebuffer:ke,drawBuffers:xe,useProgram:Pe,setBlending:de,setMaterial:pe,setFlipSided:me,setCullFace:ve,setLineWidth:We,setPolygonOffset:Ve,setScissorTest:Ye,activeTexture:$e,bindTexture:O,unbindTexture:ct,compressedTexImage2D:it,compressedTexImage3D:L,texImage2D:ne,texImage3D:oe,pixelStorei:Be,getParameter:Se,updateUBOMapping:ze,uniformBlockBinding:Xe,texStorage2D:_e,texStorage3D:ye,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:$,compressedTexSubImage3D:te,scissor:we,viewport:Me,reset:Qe}}function B_(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,f=new WeakMap,u=new Set,h,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,S){return g?new OffscreenCanvas(L,S):Zs("canvas")}function m(L,S,G){let $=1,te=it(L);if((te.width>G||te.height>G)&&($=G/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let _e=Math.floor($*te.width),ye=Math.floor($*te.height);h===void 0&&(h=_(_e,ye));let ne=S?_(_e,ye):h;return ne.width=_e,ne.height=ye,ne.getContext("2d").drawImage(L,0,0,_e,ye),Ge("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+_e+"x"+ye+")."),ne}else return"data"in L&&Ge("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function d(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(L,S,G,$,te,_e=!1){if(L!==null){if(n[L]!==void 0)return n[L];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ye;$&&(ye=e.get("EXT_texture_norm16"),ye||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===n.RED&&(G===n.FLOAT&&(ne=n.R32F),G===n.HALF_FLOAT&&(ne=n.R16F),G===n.UNSIGNED_BYTE&&(ne=n.R8),G===n.UNSIGNED_SHORT&&ye&&(ne=ye.R16_EXT),G===n.SHORT&&ye&&(ne=ye.R16_SNORM_EXT)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.R8UI),G===n.UNSIGNED_SHORT&&(ne=n.R16UI),G===n.UNSIGNED_INT&&(ne=n.R32UI),G===n.BYTE&&(ne=n.R8I),G===n.SHORT&&(ne=n.R16I),G===n.INT&&(ne=n.R32I)),S===n.RG&&(G===n.FLOAT&&(ne=n.RG32F),G===n.HALF_FLOAT&&(ne=n.RG16F),G===n.UNSIGNED_BYTE&&(ne=n.RG8),G===n.UNSIGNED_SHORT&&ye&&(ne=ye.RG16_EXT),G===n.SHORT&&ye&&(ne=ye.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.RG8UI),G===n.UNSIGNED_SHORT&&(ne=n.RG16UI),G===n.UNSIGNED_INT&&(ne=n.RG32UI),G===n.BYTE&&(ne=n.RG8I),G===n.SHORT&&(ne=n.RG16I),G===n.INT&&(ne=n.RG32I)),S===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),G===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),G===n.UNSIGNED_INT&&(ne=n.RGB32UI),G===n.BYTE&&(ne=n.RGB8I),G===n.SHORT&&(ne=n.RGB16I),G===n.INT&&(ne=n.RGB32I)),S===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),G===n.UNSIGNED_INT&&(ne=n.RGBA32UI),G===n.BYTE&&(ne=n.RGBA8I),G===n.SHORT&&(ne=n.RGBA16I),G===n.INT&&(ne=n.RGBA32I)),S===n.RGB&&(G===n.UNSIGNED_SHORT&&ye&&(ne=ye.RGB16_EXT),G===n.SHORT&&ye&&(ne=ye.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(ne=n.R11F_G11F_B10F)),S===n.RGBA){let oe=_e?Ys:rt.getTransfer(te);G===n.FLOAT&&(ne=n.RGBA32F),G===n.HALF_FLOAT&&(ne=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ne=oe===dt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&ye&&(ne=ye.RGBA16_EXT),G===n.SHORT&&ye&&(ne=ye.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(L,S){let G;return L?S===null||S===Tn||S===Ms?G=n.DEPTH24_STENCIL8:S===pn?G=n.DEPTH32F_STENCIL8:S===Ss&&(G=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Tn||S===Ms?G=n.DEPTH_COMPONENT24:S===pn?G=n.DEPTH_COMPONENT32F:S===Ss&&(G=n.DEPTH_COMPONENT16),G}function w(L,S){return d(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ot&&L.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function D(L){let S=L.target;S.removeEventListener("dispose",D),T(S),S.isVideoTexture&&f.delete(S),S.isHTMLTexture&&u.delete(S)}function x(L){let S=L.target;S.removeEventListener("dispose",x),U(S)}function T(L){let S=i.get(L);if(S.__webglInit===void 0)return;let G=L.source,$=p.get(G);if($){let te=$[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&I(L),Object.keys($).length===0&&p.delete(G)}i.remove(L)}function I(L){let S=i.get(L);n.deleteTexture(S.__webglTexture);let G=L.source,$=p.get(G);delete $[S.__cacheKey],o.memory.textures--}function U(L){let S=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let te=0;te<S.__webglFramebuffer[$].length;te++)n.deleteFramebuffer(S.__webglFramebuffer[$][te]);else n.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)n.deleteFramebuffer(S.__webglFramebuffer[$]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=L.textures;for(let $=0,te=G.length;$<te;$++){let _e=i.get(G[$]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(G[$])}i.remove(L)}let A=0;function R(){A=0}function C(){return A}function N(L){A=L}function B(){let L=A;return L>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),A+=1,L}function H(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function ee(L,S){let G=i.get(L);if(L.isVideoTexture&&O(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){let $=L.image;if($===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(G,L,S);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function J(L,S){let G=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){ue(G,L,S);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function X(L,S){let G=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){ue(G,L,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function K(L,S){let G=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){ke(G,L,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}let q={[bo]:n.REPEAT,[In]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},ae={[Ot]:n.NEAREST,[$h]:n.NEAREST_MIPMAP_NEAREST,[Ar]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[na]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},ge={[tu]:n.NEVER,[ou]:n.ALWAYS,[nu]:n.LESS,[ka]:n.LEQUAL,[iu]:n.EQUAL,[Ha]:n.GEQUAL,[su]:n.GREATER,[ru]:n.NOTEQUAL};function ie(L,S){if(S.type===pn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ht||S.magFilter===na||S.magFilter===Ar||S.magFilter===xi||S.minFilter===Ht||S.minFilter===na||S.minFilter===Ar||S.minFilter===xi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,q[S.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,q[S.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,q[S.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ae[S.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ot||S.minFilter!==Ar&&S.minFilter!==xi||S.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function fe(L,S){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",D));let $=S.source,te=p.get($);te===void 0&&(te={},p.set($,te));let _e=H(S);if(_e!==L.__cacheKey){te[_e]===void 0&&(te[_e]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[_e].usedTimes++;let ye=te[L.__cacheKey];ye!==void 0&&(te[L.__cacheKey].usedTimes--,ye.usedTimes===0&&I(S)),L.__cacheKey=_e,L.__webglTexture=te[_e].texture}return G}function W(L,S,G){return Math.floor(Math.floor(L/G)/S)}function j(L,S,G,$){let _e=L.updateRanges;if(_e.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,G,$,S.data);else{_e.sort((Be,we)=>Be.start-we.start);let ye=0;for(let Be=1;Be<_e.length;Be++){let we=_e[ye],Me=_e[Be],ze=we.start+we.count,Xe=W(Me.start,S.width,4),Qe=W(we.start,S.width,4);Me.start<=ze+1&&Xe===Qe&&W(Me.start+Me.count-1,S.width,4)===Xe?we.count=Math.max(we.count,Me.start+Me.count-we.start):(++ye,_e[ye]=Me)}_e.length=ye+1;let ne=t.getParameter(n.UNPACK_ROW_LENGTH),oe=t.getParameter(n.UNPACK_SKIP_PIXELS),Se=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Be=0,we=_e.length;Be<we;Be++){let Me=_e[Be],ze=Math.floor(Me.start/4),Xe=Math.ceil(Me.count/4),Qe=ze%S.width,k=Math.floor(ze/S.width),be=Xe,se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,Qe,k,be,se,G,$,S.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ne),t.pixelStorei(n.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Se)}}function ue(L,S,G){let $=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=n.TEXTURE_3D);let te=fe(L,S),_e=S.source;t.bindTexture($,L.__webglTexture,n.TEXTURE0+G);let ye=i.get(_e);if(_e.version!==ye.__version||te===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let se=rt.getPrimaries(rt.workingColorSpace),Ee=S.colorSpace===Kn?null:rt.getPrimaries(S.colorSpace),Ce=S.colorSpace===Kn||se===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let oe=m(S.image,!1,s.maxTextureSize);oe=ct(S,oe);let Se=r.convert(S.format,S.colorSpace),Be=r.convert(S.type),we=v(S.internalFormat,Se,Be,S.normalized,S.colorSpace,S.isVideoTexture);ie($,S);let Me,ze=S.mipmaps,Xe=S.isVideoTexture!==!0,Qe=ye.__version===void 0||te===!0,k=_e.dataReady,be=w(S,oe);if(S.isDepthTexture)we=b(S.format===yi,S.type),Qe&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,we,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,we,oe.width,oe.height,0,Se,Be,null));else if(S.isDataTexture)if(ze.length>0){Xe&&Qe&&t.texStorage2D(n.TEXTURE_2D,be,we,ze[0].width,ze[0].height);for(let se=0,Ee=ze.length;se<Ee;se++)Me=ze[se],Xe?k&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,Se,Be,Me.data):t.texImage2D(n.TEXTURE_2D,se,we,Me.width,Me.height,0,Se,Be,Me.data);S.generateMipmaps=!1}else Xe?(Qe&&t.texStorage2D(n.TEXTURE_2D,be,we,oe.width,oe.height),k&&j(S,oe,Se,Be)):t.texImage2D(n.TEXTURE_2D,0,we,oe.width,oe.height,0,Se,Be,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xe&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,we,ze[0].width,ze[0].height,oe.depth);for(let se=0,Ee=ze.length;se<Ee;se++)if(Me=ze[se],S.format!==mn)if(Se!==null)if(Xe){if(k)if(S.layerUpdates.size>0){let Ce=uc(Me.width,Me.height,S.format,S.type);for(let he of S.layerUpdates){let He=Me.data.subarray(he*Ce/Me.data.BYTES_PER_ELEMENT,(he+1)*Ce/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,he,Me.width,Me.height,1,Se,He)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,oe.depth,Se,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,we,Me.width,Me.height,oe.depth,0,Me.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,oe.depth,Se,Be,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,we,Me.width,Me.height,oe.depth,0,Se,Be,Me.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Xe&&Qe&&t.texStorage2D(n.TEXTURE_2D,be,we,ze[0].width,ze[0].height);for(let se=0,Ee=ze.length;se<Ee;se++)Me=ze[se],S.format!==mn?Se!==null?Xe?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,Se,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,se,we,Me.width,Me.height,0,Me.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?k&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,Se,Be,Me.data):t.texImage2D(n.TEXTURE_2D,se,we,Me.width,Me.height,0,Se,Be,Me.data)}else if(S.isDataArrayTexture)if(Xe){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,we,oe.width,oe.height,oe.depth),k)if(S.layerUpdates.size>0){let se=uc(oe.width,oe.height,S.format,S.type);for(let Ee of S.layerUpdates){let Ce=oe.data.subarray(Ee*se/oe.data.BYTES_PER_ELEMENT,(Ee+1)*se/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,oe.width,oe.height,1,Se,Be,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,Be,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,oe.width,oe.height,oe.depth,0,Se,Be,oe.data);else if(S.isData3DTexture)Xe?(Qe&&t.texStorage3D(n.TEXTURE_3D,be,we,oe.width,oe.height,oe.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,Be,oe.data)):t.texImage3D(n.TEXTURE_3D,0,we,oe.width,oe.height,oe.depth,0,Se,Be,oe.data);else if(S.isFramebufferTexture){if(Qe)if(Xe)t.texStorage2D(n.TEXTURE_2D,be,we,oe.width,oe.height);else{let se=oe.width,Ee=oe.height;for(let Ce=0;Ce<be;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,we,se,Ee,0,Se,Be,null),se>>=1,Ee>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),oe.parentNode!==se){se.appendChild(oe),u.add(S),se.onpaint=Ee=>{let Ce=Ee.changedElements;for(let he of u)Ce.includes(he.image)&&(he.needsUpdate=!0)},se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,oe);else{let Ce=n.RGBA,he=n.RGBA,He=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ce,he,He,oe)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Xe&&Qe){let se=it(ze[0]);t.texStorage2D(n.TEXTURE_2D,be,we,se.width,se.height)}for(let se=0,Ee=ze.length;se<Ee;se++)Me=ze[se],Xe?k&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Se,Be,Me):t.texImage2D(n.TEXTURE_2D,se,we,Se,Be,Me);S.generateMipmaps=!1}else if(Xe){if(Qe){let se=it(oe);t.texStorage2D(n.TEXTURE_2D,be,we,se.width,se.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Be,oe)}else t.texImage2D(n.TEXTURE_2D,0,we,Se,Be,oe);d(S)&&y($),ye.__version=_e.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ke(L,S,G){if(S.image.length!==6)return;let $=fe(L,S),te=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+G);let _e=i.get(te);if(te.version!==_e.__version||$===!0){t.activeTexture(n.TEXTURE0+G);let ye=rt.getPrimaries(rt.workingColorSpace),ne=S.colorSpace===Kn?null:rt.getPrimaries(S.colorSpace),oe=S.colorSpace===Kn||ye===ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Se=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,we=[];for(let he=0;he<6;he++)!Se&&!Be?we[he]=m(S.image[he],!0,s.maxCubemapSize):we[he]=Be?S.image[he].image:S.image[he],we[he]=ct(S,we[he]);let Me=we[0],ze=r.convert(S.format,S.colorSpace),Xe=r.convert(S.type),Qe=v(S.internalFormat,ze,Xe,S.normalized,S.colorSpace),k=S.isVideoTexture!==!0,be=_e.__version===void 0||$===!0,se=te.dataReady,Ee=w(S,Me);ie(n.TEXTURE_CUBE_MAP,S);let Ce;if(Se){k&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Qe,Me.width,Me.height);for(let he=0;he<6;he++){Ce=we[he].mipmaps;for(let He=0;He<Ce.length;He++){let Fe=Ce[He];S.format!==mn?ze!==null?k?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,Fe.width,Fe.height,ze,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,Qe,Fe.width,Fe.height,0,Fe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,Fe.width,Fe.height,ze,Xe,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,Qe,Fe.width,Fe.height,0,ze,Xe,Fe.data)}}}else{if(Ce=S.mipmaps,k&&be){Ce.length>0&&Ee++;let he=it(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Qe,he.width,he.height)}for(let he=0;he<6;he++)if(Be){k?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,we[he].width,we[he].height,ze,Xe,we[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Qe,we[he].width,we[he].height,0,ze,Xe,we[he].data);for(let He=0;He<Ce.length;He++){let yt=Ce[He].image[he].image;k?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,yt.width,yt.height,ze,Xe,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,Qe,yt.width,yt.height,0,ze,Xe,yt.data)}}else{k?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ze,Xe,we[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Qe,ze,Xe,we[he]);for(let He=0;He<Ce.length;He++){let Fe=Ce[He];k?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,ze,Xe,Fe.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,Qe,ze,Xe,Fe.image[he])}}}d(S)&&y(n.TEXTURE_CUBE_MAP),_e.__version=te.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function xe(L,S,G,$,te,_e){let ye=r.convert(G.format,G.colorSpace),ne=r.convert(G.type),oe=v(G.internalFormat,ye,ne,G.normalized,G.colorSpace),Se=i.get(S),Be=i.get(G);if(Be.__renderTarget=S,!Se.__hasExternalTextures){let we=Math.max(1,S.width>>_e),Me=Math.max(1,S.height>>_e);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,_e,oe,we,Me,S.depth,0,ye,ne,null):t.texImage2D(te,_e,oe,we,Me,0,ye,ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),$e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,te,Be.__webglTexture,0,Ye(S)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,te,Be.__webglTexture,_e),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(L,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,L),S.depthBuffer){let $=S.depthTexture,te=$&&$.isDepthTexture?$.type:null,_e=b(S.stencilBuffer,te),ye=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(S),_e,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(S),_e,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,_e,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,L)}else{let $=S.textures;for(let te=0;te<$.length;te++){let _e=$[te],ye=r.convert(_e.format,_e.colorSpace),ne=r.convert(_e.type),oe=v(_e.internalFormat,ye,ne,_e.normalized,_e.colorSpace);$e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(S),oe,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(S),oe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,oe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ot(L,S,G){let $=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=i.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",D)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ie(n.TEXTURE_CUBE_MAP,S.depthTexture);let Se=r.convert(S.depthTexture.format),Be=r.convert(S.depthTexture.type),we;S.depthTexture.format===Dn?we=n.DEPTH_COMPONENT24:S.depthTexture.format===yi&&(we=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,we,S.width,S.height,0,Se,Be,null)}}else ee(S.depthTexture,0);let _e=te.__webglTexture,ye=Ye(S),ne=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,oe=S.depthTexture.format===yi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Dn)$e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ne,_e,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ne,_e,0);else if(S.depthTexture.format===yi)$e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,ne,_e,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,oe,ne,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(L){let S=i.get(L),G=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let $=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=$}if(L.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let $=0;$<6;$++)ot(S.__webglFramebuffer[$],L,$);else{let $=L.texture.mipmaps;$&&$.length>0?ot(S.__webglFramebuffer[0],L,0):ot(S.__webglFramebuffer,L,0)}else if(G){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=n.createRenderbuffer(),Pe(S.__webglDepthbuffer[$],L,!1);else{let te=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,_e)}}else{let $=L.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Pe(S.__webglDepthbuffer,L,!1);else{let te=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,_e),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,_e)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(L,S,G){let $=i.get(L);S!==void 0&&xe($.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&re(L)}function pe(L){let S=L.texture,G=i.get(L),$=i.get(S);L.addEventListener("dispose",x);let te=L.textures,_e=L.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=S.version,o.memory.textures++),_e){G.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ne]=[];for(let oe=0;oe<S.mipmaps.length;oe++)G.__webglFramebuffer[ne][oe]=n.createFramebuffer()}else G.__webglFramebuffer[ne]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)G.__webglFramebuffer[ne]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ne=0,oe=te.length;ne<oe;ne++){let Se=i.get(te[ne]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&$e(L)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){let oe=te[ne];G.__webglColorRenderbuffer[ne]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ne]);let Se=r.convert(oe.format,oe.colorSpace),Be=r.convert(oe.type),we=v(oe.internalFormat,Se,Be,oe.normalized,oe.colorSpace,L.isXRRenderTarget===!0),Me=Ye(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,we,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ne,n.RENDERBUFFER,G.__webglColorRenderbuffer[ne])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(_e){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ie(n.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)xe(G.__webglFramebuffer[ne][oe],L,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,oe);else xe(G.__webglFramebuffer[ne],L,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(S)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ne=0,oe=te.length;ne<oe;ne++){let Se=te[ne],Be=i.get(Se),we=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,Be.__webglTexture),ie(we,Se),xe(G.__webglFramebuffer,L,Se,n.COLOR_ATTACHMENT0+ne,we,0),d(Se)&&y(we)}t.unbindTexture()}else{let ne=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ne=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,$.__webglTexture),ie(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)xe(G.__webglFramebuffer[oe],L,S,n.COLOR_ATTACHMENT0,ne,oe);else xe(G.__webglFramebuffer,L,S,n.COLOR_ATTACHMENT0,ne,0);d(S)&&y(ne),t.unbindTexture()}L.depthBuffer&&re(L)}function me(L){let S=L.textures;for(let G=0,$=S.length;G<$;G++){let te=S[G];if(d(te)){let _e=M(L),ye=i.get(te).__webglTexture;t.bindTexture(_e,ye),y(_e),t.unbindTexture()}}}let ve=[],We=[];function Ve(L){if(L.samples>0){if($e(L)===!1){let S=L.textures,G=L.width,$=L.height,te=n.COLOR_BUFFER_BIT,_e=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(L),ne=S.length>1;if(ne)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let oe=L.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ne){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Se]);let Be=i.get(S[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,G,$,0,0,G,$,te,n.NEAREST),l===!0&&(ve.length=0,We.length=0,ve.push(n.COLOR_ATTACHMENT0+Se),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(ve.push(_e),We.push(_e),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ne)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Se]);let Be=i.get(S[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let S=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ye(L){return Math.min(s.maxSamples,L.samples)}function $e(L){let S=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function O(L){let S=o.render.frame;f.get(L)!==S&&(f.set(L,S),L.update())}function ct(L,S){let G=L.colorSpace,$=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==qs&&G!==Kn&&(rt.getTransfer(G)===dt?($!==mn||te!==tn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",G)),S}function it(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=R,this.getTextureUnits=C,this.setTextureUnits=N,this.setTexture2D=ee,this.setTexture2DArray=J,this.setTexture3D=X,this.setTextureCube=K,this.rebindTextures=de,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function z_(n,e){function t(i,s=Kn){let r,o=rt.getTransfer(s);if(i===tn)return n.UNSIGNED_BYTE;if(i===sa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ra)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ec)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===tc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jl)return n.BYTE;if(i===Ql)return n.SHORT;if(i===Ss)return n.UNSIGNED_SHORT;if(i===ia)return n.INT;if(i===Tn)return n.UNSIGNED_INT;if(i===pn)return n.FLOAT;if(i===An)return n.HALF_FLOAT;if(i===nc)return n.ALPHA;if(i===ic)return n.RGB;if(i===mn)return n.RGBA;if(i===Dn)return n.DEPTH_COMPONENT;if(i===yi)return n.DEPTH_STENCIL;if(i===oa)return n.RED;if(i===aa)return n.RED_INTEGER;if(i===vi)return n.RG;if(i===la)return n.RG_INTEGER;if(i===ca)return n.RGBA_INTEGER;if(i===Rr||i===Cr||i===Pr||i===Ir)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ha||i===ua||i===da||i===fa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pa||i===ma||i===ga||i===_a||i===xa||i===Lr||i===ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pa||i===ma)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ga)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_a)return r.COMPRESSED_R11_EAC;if(i===xa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Lr)return r.COMPRESSED_RG11_EAC;if(i===ya)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===va||i===Sa||i===Ma||i===ba||i===Ea||i===wa||i===Ta||i===Aa||i===Ra||i===Ca||i===Pa||i===Ia||i===La||i===Da)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===va)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ma)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ba)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ea)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ta)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Aa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ra)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ca)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pa)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ia)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===La)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Da)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Na||i===Ua||i===Fa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Na)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oa||i===Ba||i===Dr||i===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var k_=`
void main() {

  gl_Position = vec4( position, 1.0 );

}`,H_=`
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

}`,wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ir(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new cn({vertexShader:k_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new Fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tc=class extends Mn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new wc,d={},y=t.getContextAttributes(),M=null,v=null,b=[],w=[],D=new ce,x=null,T=null,I=new kt;I.viewport=new Et;let U=new kt;U.viewport=new Et;let A=[I,U],R=new jo,C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=b[W];return j===void 0&&(j=new hs,b[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=b[W];return j===void 0&&(j=new hs,b[W]=j),j.getGripSpace()},this.getHand=function(W){let j=b[W];return j===void 0&&(j=new hs,b[W]=j),j.getHandSpace()};function B(W){let j=w.indexOf(W.inputSource);if(j===-1)return;let ue=b[j];ue!==void 0&&(ue.update(W.inputSource,W.frame,c||o),ue.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ee);for(let W=0;W<b.length;W++){let j=w[W];j!==null&&(w[W]=null,b[W].disconnect(j))}C=null,N=null,m.reset();for(let W in d)delete d[W];if(e.setRenderTarget(M),p=null,h=null,u=null,s=null,v=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),T!==null){let W=T.camera;W.fov=T.fov,W.zoom=T.zoom,W.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ee),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ke=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=y.stencil?yi:Dn,ke=y.stencil?Ms:Tn);let Pe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Pe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Qt(h.textureWidth,h.textureHeight,{format:mn,type:tn,depthTexture:new li(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Qt(p.framebufferWidth,p.framebufferHeight,{format:mn,type:tn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(W){for(let j=0;j<W.removed.length;j++){let ue=W.removed[j],ke=w.indexOf(ue);ke>=0&&(w[ke]=null,b[ke].disconnect(ue))}for(let j=0;j<W.added.length;j++){let ue=W.added[j],ke=w.indexOf(ue);if(ke===-1){for(let Pe=0;Pe<b.length;Pe++)if(Pe>=w.length){w.push(ue),ke=Pe;break}else if(w[Pe]===null){w[Pe]=ue,ke=Pe;break}if(ke===-1)break}let xe=b[ke];xe&&xe.connect(ue)}}let J=new P,X=new P;function K(W,j,ue){J.setFromMatrixPosition(j.matrixWorld),X.setFromMatrixPosition(ue.matrixWorld);let ke=J.distanceTo(X),xe=j.projectionMatrix.elements,Pe=ue.projectionMatrix.elements,ot=xe[14]/(xe[10]-1),re=xe[14]/(xe[10]+1),de=(xe[9]+1)/xe[5],pe=(xe[9]-1)/xe[5],me=(xe[8]-1)/xe[0],ve=(Pe[8]+1)/Pe[0],We=ot*me,Ve=ot*ve,Ye=ke/(-me+ve),$e=Ye*-me;if(j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX($e),W.translateZ(Ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),xe[10]===-1)W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let O=ot+Ye,ct=re+Ye,it=We-$e,L=Ve+(ke-$e),S=de*re/ct*O,G=pe*re/ct*O;W.projectionMatrix.makePerspective(it,L,S,G,O,ct),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function q(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let j=W.near,ue=W.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),R.near=U.near=I.near=j,R.far=U.far=I.far=ue,(C!==R.near||N!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),C=R.near,N=R.far),R.layers.mask=W.layers.mask|6,I.layers.mask=R.layers.mask&-5,U.layers.mask=R.layers.mask&-3;let ke=W.parent,xe=R.cameras;q(R,ke);for(let Pe=0;Pe<xe.length;Pe++)q(xe[Pe],ke);xe.length===2?K(R,I,U):R.projectionMatrix.copy(I.projectionMatrix),T===null&&W.isPerspectiveCamera&&(T={camera:W,fov:W.fov,zoom:W.zoom}),ae(W,R,ke)};function ae(W,j,ue){ue===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(ue.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=as*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(W){return d[W]};let ge=null;function ie(W,j){if(f=j.getViewerPose(c||o),g=j,f!==null){let ue=f.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ke=!1;ue.length!==R.cameras.length&&(R.cameras.length=0,ke=!0);for(let re=0;re<ue.length;re++){let de=ue[re],pe=null;if(p!==null)pe=p.getViewport(de);else{let ve=u.getViewSubImage(h,de);pe=ve.viewport,re===0&&(e.setRenderTargetTextures(v,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(v))}let me=A[re];me===void 0&&(me=new kt,me.layers.enable(re),me.viewport=new Et,A[re]=me),me.matrix.fromArray(de.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(de.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(pe.x,pe.y,pe.width,pe.height),re===0&&(R.matrix.copy(me.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ke===!0&&R.cameras.push(me)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let re=u.getDepthInformation(ue[0]);re&&re.isValid&&re.texture&&m.init(re,s.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let re=0;re<ue.length;re++){let de=ue[re].camera;if(de){let pe=d[de];pe||(pe=new ir,d[de]=pe);let me=u.getCameraImage(de);pe.sourceTexture=me}}}}for(let ue=0;ue<b.length;ue++){let ke=w[ue],xe=b[ue];ke!==null&&xe!==void 0&&xe.update(ke,j,c||o)}ge&&ge(W,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}let fe=new Hu;fe.setAnimationLoop(ie),this.setAnimationLoop=function(W){ge=W},this.dispose=function(){}}},V_=new ft,Yu=new Je;Yu.set(-1,0,0,0,1,0,0,0,1);function G_(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,lc(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,M,v){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),f(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Gt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Gt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yu),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function W_(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let w=b.program;i.uniformBlockBinding(v,w)}function c(v,b){let w=s[v.id];w===void 0&&(m(v),w=f(v),s[v.id]=w,v.addEventListener("dispose",y));let D=b.program;i.updateUBOMapping(v,D);let x=e.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function f(v){let b=u();v.__bindingPointIndex=b;let w=n.createBuffer(),D=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,D,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let b=s[v.id],w=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let x=0,T=w.length;x<T;x++){let I=w[x];if(Array.isArray(I))for(let U=0,A=I.length;U<A;U++)p(I[U],x,U,D);else p(I,x,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,b,w,D){if(_(v,b,w,D)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let I=0;for(let U=0;U<T.length;U++){let A=T[U],R=d(A);g(A,v.__data,I),typeof A!="number"&&typeof A!="boolean"&&!A.isMatrix3&&!ArrayBuffer.isView(A)&&(I+=R.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function g(v,b,w){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,w)}function _(v,b,w,D){let x=v.value,T=b+"_"+w;if(D[T]===void 0)return typeof x=="number"||typeof x=="boolean"?D[T]=x:ArrayBuffer.isView(x)?D[T]=x.slice():D[T]=x.clone(),!0;{let I=D[T];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return D[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(v){let b=v.uniforms,w=0,D=16;for(let T=0,I=b.length;T<I;T++){let U=Array.isArray(b[T])?b[T]:[b[T]];for(let A=0,R=U.length;A<R;A++){let C=U[A],N=Array.isArray(C.value)?C.value:[C.value];for(let B=0,H=N.length;B<H;B++){let ee=N[B],J=d(ee),X=w%D,K=X%J.boundary,q=X+K;w+=K,q!==0&&D-q<J.storage&&(w+=D-q),C.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=J.storage}}}let x=w%D;return x>0&&(w+=D-x),v.__size=w,v.__cache={},this}function d(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",v),b}function y(v){let b=v.target;b.removeEventListener("dispose",y);let w=o.indexOf(b.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function M(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:M}}var X_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function q_(){return Bn===null&&(Bn=new js(X_,16,16,vi,An),Bn.name="DFG_LUT",Bn.minFilter=Ht,Bn.magFilter=Ht,Bn.wrapS=In,Bn.wrapT=In,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var Xa=class{constructor(e={}){let{canvas:t=lu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:p=tn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let _=p,m=new Set([ca,la,aa]),d=new Set([tn,Tn,Ss,Ms,sa,ra]),y=new Uint32Array(4),M=new Int32Array(4),v=new P,b=null,w=null,D=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,A=null,R=null,C=null,N=null;this._outputColorSpace=zt;let B=0,H=0,ee=null,J=-1,X=null,K=new Et,q=new Et,ae=null,ge=new Ze(0),ie=0,fe=t.width,W=t.height,j=1,ue=null,ke=null,xe=new Et(0,0,fe,W),Pe=new Et(0,0,fe,W),ot=!1,re=new us,de=!1,pe=!1,me=new ft,ve=new P,We=new Et,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function $e(){return ee===null?j:1}let O=i;function ct(E,z){return t.getContext(E,z)}let it,L,S,G,$,te,_e,ye,ne,oe,Se,Be,we,Me,ze,Xe,Qe,k,be,se,Ee,Ce,he;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",_n,!1),O===null){let z="webgl2";if(O=ct(z,E),O===null)throw ct(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(E){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),qe("WebGLRenderer: "+E.message),E}function He(){it=new Q0(O),it.init(),Ee=new z_(O,it),L=new G0(O,it,e,Ee),S=new O_(O,it),L.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),R=O.createFramebuffer(),C=O.createFramebuffer(),N=O.createFramebuffer(),G=new ng(O),$=new b_,te=new B_(O,it,S,$,L,Ee,G),_e=new j0(I),ye=new sp(O),Ce=new H0(O,ye),ne=new eg(O,ye,G,Ce),oe=new sg(O,ne,ye,Ce,G),k=new ig(O,L,te),ze=new W0($),Se=new M_(I,_e,it,L,Ce,ze),Be=new G_(I,$),we=new w_,Me=new I_(it),Qe=new k0(I,_e,S,oe,g,l),Xe=new F_(I,oe,L),he=new W_(O,G,L,S),be=new V0(O,it,G),se=new tg(O,it,G),G.programs=Se.programs,I.capabilities=L,I.extensions=it,I.properties=$,I.renderLists=we,I.shadowMap=Xe,I.state=S,I.info=G}_!==tn&&(T=new og(_,t.width,t.height,a,s,r));let Fe=new Tc(I,O);this.xr=Fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=it.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=it.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(fe,W,!1))},this.getSize=function(E){return E.set(fe,W)},this.setSize=function(E,z,Q=!0){if(Fe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=E,W=z,t.width=Math.floor(E*j),t.height=Math.floor(z*j),Q===!0&&(t.style.width=E+"px",t.style.height=z+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(fe*j,W*j).floor()},this.setDrawingBufferSize=function(E,z,Q){fe=E,W=z,j=Q,t.width=Math.floor(E*Q),t.height=Math.floor(z*Q),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(_===tn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,z,Q,Y){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,z,Q,Y),S.viewport(K.copy(xe).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(Pe)},this.setScissor=function(E,z,Q,Y){E.isVector4?Pe.set(E.x,E.y,E.z,E.w):Pe.set(E,z,Q,Y),S.scissor(q.copy(Pe).multiplyScalar(j).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){S.setScissorTest(ot=E)},this.setOpaqueSort=function(E){ue=E},this.setTransparentSort=function(E){ke=E},this.getClearColor=function(E){return E.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,Q=!0){let Y=0;if(E){let Z=!1;if(ee!==null){let Re=ee.texture.format;Z=m.has(Re)}if(Z){let Re=ee.texture.type,Le=d.has(Re),Ae=Qe.getClearColor(),Ne=Qe.getClearAlpha(),Oe=Ae.r,tt=Ae.g,st=Ae.b;Le?(y[0]=Oe,y[1]=tt,y[2]=st,y[3]=Ne,O.clearBufferuiv(O.COLOR,0,y)):(M[0]=Oe,M[1]=tt,M[2]=st,M[3]=Ne,O.clearBufferiv(O.COLOR,0,M))}else Y|=O.COLOR_BUFFER_BIT}z&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),A=E},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),Qe.dispose(),we.dispose(),Me.dispose(),$.dispose(),_e.dispose(),oe.dispose(),Ce.dispose(),he.dispose(),Se.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",Oc),Fe.removeEventListener("sessionend",Bc),Mi.stop()};function yt(E){E.preventDefault(),rc("WebGLRenderer: Context Lost."),U=!0}function ht(){rc("WebGLRenderer: Context Restored."),U=!1;let E=G.autoReset,z=Xe.enabled,Q=Xe.autoUpdate,Y=Xe.needsUpdate,Z=Xe.type;He(),G.autoReset=E,Xe.enabled=z,Xe.autoUpdate=Q,Xe.needsUpdate=Y,Xe.type=Z}function _n(E){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rn(E){let z=E.target;z.removeEventListener("dispose",Rn),xd(z)}function xd(E){yd(E),$.remove(E)}function yd(E){let z=$.get(E).programs;z!==void 0&&(z.forEach(function(Q){Se.releaseProgram(Q)}),E.isShaderMaterial&&Se.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,Q,Y,Z,Re){z===null&&(z=Ve);let Le=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ae=Md(E,z,Q,Y,Z);S.setMaterial(Y,Le);let Ne=Q.index,Oe=1;if(Y.wireframe===!0){if(Ne=ne.getWireframeAttribute(Q),Ne===void 0)return;Oe=2}let tt=Q.drawRange,st=Q.attributes.position,Ue=tt.start*Oe,ut=(tt.start+tt.count)*Oe;Re!==null&&(Ue=Math.max(Ue,Re.start*Oe),ut=Math.min(ut,(Re.start+Re.count)*Oe)),Ne!==null?(Ue=Math.max(Ue,0),ut=Math.min(ut,Ne.count)):st!=null&&(Ue=Math.max(Ue,0),ut=Math.min(ut,st.count));let Ct=ut-Ue;if(Ct<0||Ct===1/0)return;Ce.setup(Z,Y,Ae,Q,Ne);let Mt,xt=be;if(Ne!==null&&(Mt=ye.get(Ne),xt=se,xt.setIndex(Mt)),Z.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*$e()),xt.setMode(O.LINES)):xt.setMode(O.TRIANGLES);else if(Z.isLine){let Wt=Y.linewidth;Wt===void 0&&(Wt=1),S.setLineWidth(Wt*$e()),Z.isLineSegments?xt.setMode(O.LINES):Z.isLineLoop?xt.setMode(O.LINE_LOOP):xt.setMode(O.LINE_STRIP)}else Z.isPoints?xt.setMode(O.POINTS):Z.isSprite&&xt.setMode(O.TRIANGLES);if(Z.isBatchedMesh)if(it.get("WEBGL_multi_draw"))xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Wt=Z._multiDrawStarts,Ie=Z._multiDrawCounts,Jt=Z._multiDrawCount,at=Ne?ye.get(Ne).bytesPerElement:1,un=$.get(Y).currentProgram.getUniforms();for(let Cn=0;Cn<Jt;Cn++)un.setValue(O,"_gl_DrawID",Cn),xt.render(Wt[Cn]/at,Ie[Cn])}else if(Z.isInstancedMesh)xt.renderInstances(Ue,Ct,Z.count);else if(Q.isInstancedBufferGeometry){let Wt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ie=Math.min(Q.instanceCount,Wt);xt.renderInstances(Ue,Ct,Ie)}else xt.render(Ue,Ct)};function Fc(E,z,Q,Y){A!==null&&E.isNodeMaterial&&A.setObject(Y,E),de===!0&&ze.setState(E,Q,!1),E.transparent===!0&&E.side===Tt&&E.forceSinglePass===!1?(E.side=Gt,E.needsUpdate=!0,Hr(E,z,Y),E.side=gi,E.needsUpdate=!0,Hr(E,z,Y),E.side=Tt):Hr(E,z,Y)}this.compile=function(E,z,Q=null){Q===null&&(Q=E),A!==null&&A.renderStart(E,z,Q),w=Me.get(Q),w.init(z),x.push(w),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),E!==Q&&E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(z.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),w.setupLights(),A!==null&&A.updateLights(w.state.lightsArray),pe=this.localClippingEnabled,de=ze.init(this.clippingPlanes,pe),de===!0&&ze.setGlobalState(this.clippingPlanes,z),A!==null&&Xe.render(w.state.shadowsArray,Q,z);let Y=new Set;return E.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Re=Z.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){let Ae=Re[Le];Fc(Ae,Q,z,Z),Y.add(Ae)}else Fc(Re,Q,z,Z),Y.add(Re)}),w=x.pop(),A!==null&&A.renderEnd(),Y},this.compileAsync=function(E,z,Q=null){let Y=this.compile(E,z,Q);return new Promise(Z=>{function Re(){if(Y.forEach(function(Le){let Ne=$.get(Le).currentProgram;(Ne===void 0||Ne.isReady())&&Y.delete(Le)}),Y.size===0){Z(E);return}setTimeout(Re,10)}it.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Qa=null;function vd(E){Qa&&Qa(E)}function Oc(){Mi.stop()}function Bc(){Mi.start()}let Mi=new Hu;Mi.setAnimationLoop(vd),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(E){Qa=E,Fe.setAnimationLoop(E),E===null?Mi.stop():Mi.start()},Fe.addEventListener("sessionstart",Oc),Fe.addEventListener("sessionend",Bc),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;A!==null&&A.renderStart(E,z);let Q=Fe.enabled===!0&&Fe.isPresenting===!0,Y=T!==null&&(ee===null||Q)&&T.begin(I,ee);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(z),z=Fe.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,z,ee),w=Me.get(E,x.length),w.init(z),w.state.textureUnits=te.getTextureUnits(),x.push(w),me.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),re.setFromProjectionMatrix(me,Sn,z.reversedDepth),pe=this.localClippingEnabled,de=ze.init(this.clippingPlanes,pe),b=we.get(E,D.length),b.init(),D.push(b),Fe.enabled===!0&&Fe.isPresenting===!0){let Le=I.xr.getDepthSensingMesh();Le!==null&&el(Le,z,-1/0,I.sortObjects)}el(E,z,0,I.sortObjects),b.finish(),A!==null&&A.updateLights(w.state.lightsArray),I.sortObjects===!0&&b.sort(ue,ke),Ye=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Ye&&Qe.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),de===!0&&ze.beginShadows();let Z=w.state.shadowsArray;if(Xe.render(Z,E,z),de===!0&&ze.endShadows(),(Y&&T.hasRenderPass())===!1){let Le=b.opaque,Ae=b.transmissive;if(w.setupLights(),z.isArrayCamera){let Ne=z.cameras;if(Ae.length>0)for(let Oe=0,tt=Ne.length;Oe<tt;Oe++){let st=Ne[Oe];kc(Le,Ae,E,st)}Ye&&Qe.render(E);for(let Oe=0,tt=Ne.length;Oe<tt;Oe++){let st=Ne[Oe];zc(b,E,st,st.viewport)}}else Ae.length>0&&kc(Le,Ae,E,z),Ye&&Qe.render(E),zc(b,E,z)}ee!==null&&H===0&&(te.updateMultisampleRenderTarget(ee),te.updateRenderTargetMipmap(ee)),Y&&T.end(I),E.isScene===!0&&E.onAfterRender(I,E,z),Ce.resetDefaultState(),J=-1,X=null,x.pop(),x.length>0?(w=x[x.length-1],te.setTextureUnits(w.state.textureUnits),de===!0&&ze.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,D.pop(),D.length>0?b=D[D.length-1]:b=null,A!==null&&A.renderEnd()};function el(E,z,Q,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(re)){Y&&We.setFromMatrixPosition(E.matrixWorld).applyMatrix4(me);let Le=oe.update(E),Ae=E.material;Ae.visible&&b.push(E,Le,Ae,Q,We.z,null,z)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(re))){let Le=oe.update(E),Ae=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),We.copy(E.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),We.copy(Le.boundingSphere.center)),We.applyMatrix4(E.matrixWorld).applyMatrix4(me)),Array.isArray(Ae)){let Ne=Le.groups;for(let Oe=0,tt=Ne.length;Oe<tt;Oe++){let st=Ne[Oe],Ue=Ae[st.materialIndex];Ue&&Ue.visible&&b.push(E,Le,Ue,Q,We.z,st,z)}}else Ae.visible&&b.push(E,Le,Ae,Q,We.z,null,z)}}let Re=E.children;for(let Le=0,Ae=Re.length;Le<Ae;Le++)el(Re[Le],z,Q,Y)}function zc(E,z,Q,Y){let{opaque:Z,transmissive:Re,transparent:Le}=E;w.setupLightsView(Q),de===!0&&ze.setGlobalState(I.clippingPlanes,Q),Y&&S.viewport(K.copy(Y)),Z.length>0&&kr(Z,z,Q),Re.length>0&&kr(Re,z,Q),Le.length>0&&kr(Le,z,Q),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function kc(E,z,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){let Ue=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new Qt(1,1,{generateMipmaps:!0,type:Ue?An:tn,minFilter:xi,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Re=w.state.transmissionRenderTarget[Y.id],Le=Y.viewport||K;Re.setSize(Le.z*I.transmissionResolutionScale,Le.w*I.transmissionResolutionScale);let Ae=I.getRenderTarget(),Ne=I.getActiveCubeFace(),Oe=I.getActiveMipmapLevel();I.setRenderTarget(Re),I.getClearColor(ge),ie=I.getClearAlpha(),ie<1&&I.setClearColor(16777215,.5),I.clear(),Ye&&Qe.render(Q);let tt=I.toneMapping;I.toneMapping=wn;let st=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),de===!0&&ze.setGlobalState(I.clippingPlanes,Y),kr(E,Q,Y),te.updateMultisampleRenderTarget(Re),te.updateRenderTargetMipmap(Re),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ut=0,Ct=z.length;ut<Ct;ut++){let Mt=z[ut],{object:xt,geometry:Wt,material:Ie,group:Jt}=Mt;if(Ie.side===Tt&&xt.layers.test(Y.layers)){let at=Ie.side;Ie.side=Gt,Ie.needsUpdate=!0,Hc(xt,Q,Y,Wt,Ie,Jt),Ie.side=at,Ie.needsUpdate=!0,Ue=!0}}Ue===!0&&(te.updateMultisampleRenderTarget(Re),te.updateRenderTargetMipmap(Re))}I.setRenderTarget(Ae,Ne,Oe),I.setClearColor(ge,ie),st!==void 0&&(Y.viewport=st),I.toneMapping=tt}function kr(E,z,Q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let Z=0,Re=E.length;Z<Re;Z++){let Le=E[Z],{object:Ae,geometry:Ne,group:Oe}=Le,tt=Le.material;tt.allowOverride===!0&&Y!==null&&(tt=Y),Ae.layers.test(Q.layers)&&Hc(Ae,z,Q,Ne,tt,Oe)}}function Hc(E,z,Q,Y,Z,Re){A!==null&&Z.isNodeMaterial&&A.setObject(E,Z),E.onBeforeRender(I,z,Q,Y,Z,Re),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(I,z,Q,Y,E,Re),Z.transparent===!0&&Z.side===Tt&&Z.forceSinglePass===!1?(Z.side=Gt,Z.needsUpdate=!0,I.renderBufferDirect(Q,z,Y,Z,E,Re),Z.side=gi,Z.needsUpdate=!0,I.renderBufferDirect(Q,z,Y,Z,E,Re),Z.side=Tt):I.renderBufferDirect(Q,z,Y,Z,E,Re),E.onAfterRender(I,z,Q,Y,Z,Re)}function Hr(E,z,Q){z.isScene!==!0&&(z=Ve);let Y=$.get(E),Z=w.state.lights,Re=w.state.shadowsArray,Le=Z.state.version,Ae=Se.getParameters(E,Z.state,Re,z,Q,w.state.lightProbeGridArray),Ne=Se.getProgramCacheKey(Ae),Oe=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let tt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=_e.get(E.envMap||Y.environment,tt),Y.envMapRotation=Y.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",Rn),Oe=new Map,Y.programs=Oe);let st=Oe.get(Ne);if(st!==void 0){if(Y.currentProgram===st&&Y.lightsStateVersion===Le)return Gc(E,Ae),st}else Ae.uniforms=Se.getUniforms(E),A!==null&&E.isNodeMaterial&&A.build(E,Q,Ae),E.onBeforeCompile(Ae,I),st=Se.acquireProgram(Ae,Ne),Oe.set(Ne,st),Y.uniforms=Ae.uniforms;let Ue=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=ze.uniform),Gc(E,Ae),Y.needsLights=Ed(E),Y.lightsStateVersion=Le,Y.needsLights&&(Ue.ambientLightColor.value=Z.state.ambient,Ue.lightProbe.value=Z.state.probe,Ue.sunLights.value=Z.state.sun,Ue.sunLightShadows.value=Z.state.sunShadow,Ue.directionalLights.value=Z.state.directional,Ue.directionalLightShadows.value=Z.state.directionalShadow,Ue.spotLights.value=Z.state.spot,Ue.spotLightShadows.value=Z.state.spotShadow,Ue.rectAreaLights.value=Z.state.rectArea,Ue.ltc_1.value=Z.state.rectAreaLTC1,Ue.ltc_2.value=Z.state.rectAreaLTC2,Ue.pointLights.value=Z.state.point,Ue.pointLightShadows.value=Z.state.pointShadow,Ue.hemisphereLights.value=Z.state.hemi,Ue.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ue.sunShadowCascade.value=Z.state.sunShadowCascade,Ue.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ue.spotLightMatrix.value=Z.state.spotLightMatrix,Ue.spotLightMap.value=Z.state.spotLightMap,Ue.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=w.state.lightProbeGridArray.length>0,Y.currentProgram=st,Y.uniformsList=null,st}function Vc(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=Ts.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Gc(E,z){let Q=$.get(E);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function Sd(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let Q=0,Y=E.length;Q<Y;Q++){let Z=E[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function Md(E,z,Q,Y,Z){z.isScene!==!0&&(z=Ve),te.resetTextureUnits();let Re=z.fog,Le=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Ae=ee===null?I.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:rt.workingColorSpace,Ne=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Oe=_e.get(Y.envMap||Le,Ne),tt=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,st=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!Q.morphAttributes.position,ut=!!Q.morphAttributes.normal,Ct=!!Q.morphAttributes.color,Mt=wn;Y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Mt=I.toneMapping);let xt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Wt=xt!==void 0?xt.length:0,Ie=$.get(Y),Jt=w.state.lights;if(de===!0&&(pe===!0||E!==X)){let vt=E===X&&Y.id===J;ze.setState(Y,E,vt)}let at=!1;Y.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Jt.state.version||Ie.outputColorSpace!==Ae||Z.isBatchedMesh&&Ie.batching===!1||!Z.isBatchedMesh&&Ie.batching===!0||Z.isBatchedMesh&&Ie.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ie.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ie.instancing===!1||!Z.isInstancedMesh&&Ie.instancing===!0||Z.isSkinnedMesh&&Ie.skinning===!1||!Z.isSkinnedMesh&&Ie.skinning===!0||Z.isInstancedMesh&&Ie.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ie.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ie.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ie.instancingMorph===!1&&Z.morphTexture!==null||Ie.envMap!==Oe||Y.fog===!0&&Ie.fog!==Re||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ze.numPlanes||Ie.numIntersection!==ze.numIntersection)||Ie.vertexAlphas!==tt||Ie.vertexTangents!==st||Ie.morphTargets!==Ue||Ie.morphNormals!==ut||Ie.morphColors!==Ct||Ie.toneMapping!==Mt||Ie.morphTargetsCount!==Wt||!!Ie.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Ie.__version=Y.version);let un=Ie.currentProgram;at===!0&&(un=Hr(Y,z,Z),A&&Y.isNodeMaterial&&A.onUpdateProgram(Y,un,Ie));let Cn=!1,$n=!1,ki=!1,mt=un.getUniforms(),Rt=Ie.uniforms;if(S.useProgram(un.program)&&(Cn=!0,$n=!0,ki=!0),Y.id!==J&&(J=Y.id,$n=!0),Ie.needsLights){let vt=Sd(w.state.lightProbeGridArray,Z);Ie.lightProbeGrid!==vt&&(Ie.lightProbeGrid=vt,$n=!0)}if(Cn||X!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),mt.setValue(O,"projectionMatrix",E.projectionMatrix),mt.setValue(O,"viewMatrix",E.matrixWorldInverse);let Qn=mt.map.cameraPosition;Qn!==void 0&&Qn.setValue(O,ve.setFromMatrixPosition(E.matrixWorld)),L.logarithmicDepthBuffer&&mt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,$n=!0,ki=!0)}if(Ie.needsLights&&(Jt.state.sunShadowMap.length>0&&mt.setValue(O,"sunShadowMap",Jt.state.sunShadowMap,te),Jt.state.directionalShadowMap.length>0&&mt.setValue(O,"directionalShadowMap",Jt.state.directionalShadowMap,te),Jt.state.spotShadowMap.length>0&&mt.setValue(O,"spotShadowMap",Jt.state.spotShadowMap,te),Jt.state.pointShadowMap.length>0&&mt.setValue(O,"pointShadowMap",Jt.state.pointShadowMap,te)),Z.isSkinnedMesh){mt.setOptional(O,Z,"bindMatrix"),mt.setOptional(O,Z,"bindMatrixInverse");let vt=Z.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),mt.setValue(O,"boneTexture",vt.boneTexture,te))}Z.isBatchedMesh&&(mt.setOptional(O,Z,"batchingTexture"),mt.setValue(O,"batchingTexture",Z._matricesTexture,te),mt.setOptional(O,Z,"batchingIdTexture"),mt.setValue(O,"batchingIdTexture",Z._indirectTexture,te),mt.setOptional(O,Z,"batchingColorTexture"),Z._colorsTexture!==null&&mt.setValue(O,"batchingColorTexture",Z._colorsTexture,te));let jn=Q.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&k.update(Z,Q,un),($n||Ie.receiveShadow!==Z.receiveShadow)&&(Ie.receiveShadow=Z.receiveShadow,mt.setValue(O,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(Rt.envMapIntensity.value=z.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=q_()),$n){if(mt.setValue(O,"toneMappingExposure",I.toneMappingExposure),Ie.needsLights&&bd(Rt,ki),Re&&Y.fog===!0&&Be.refreshFogUniforms(Rt,Re),Be.refreshMaterialUniforms(Rt,Y,j,W,w.state.transmissionRenderTarget[E.id]),Ie.needsLights&&Ie.lightProbeGrid){let vt=Ie.lightProbeGrid;Rt.probesSH.value=vt.texture,Rt.probesMin.value.copy(vt.boundingBox.min),Rt.probesMax.value.copy(vt.boundingBox.max),Rt.probesResolution.value.copy(vt.resolution)}Ts.upload(O,Vc(Ie),Rt,te)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ts.upload(O,Vc(Ie),Rt,te),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(O,"center",Z.center),mt.setValue(O,"modelViewMatrix",Z.modelViewMatrix),mt.setValue(O,"normalMatrix",Z.normalMatrix),mt.setValue(O,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let vt=Y.uniformsGroups;for(let Qn=0,Hi=vt.length;Qn<Hi;Qn++){let Xc=vt[Qn];he.update(Xc,un),he.bind(Xc,un)}}return un}function bd(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.sunLights.needsUpdate=z,E.sunLightShadows.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Ed(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(E,z,Q){let Y=$.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),$.get(E.texture).__webglTexture=z,$.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){let Q=$.get(E);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,Q=0){ee=E,B=z,H=Q;let Y=null,Z=!1,Re=!1;if(E){let Ae=$.get(E);if(Ae.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(O.FRAMEBUFFER,Ae.__webglFramebuffer),K.copy(E.viewport),q.copy(E.scissor),ae=E.scissorTest,S.viewport(K),S.scissor(q),S.setScissorTest(ae),J=-1;return}else if(Ae.__webglFramebuffer===void 0)te.setupRenderTarget(E);else if(Ae.__hasExternalTextures)te.rebindTextures(E,$.get(E.texture).__webglTexture,$.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let tt=E.depthTexture;if(Ae.__boundDepthTexture!==tt){if(tt!==null&&$.has(tt)&&(E.width!==tt.image.width||E.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(E)}}let Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);let Oe=$.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?Y=Oe[z][Q]:Y=Oe[z],Z=!0):E.samples>0&&te.useMultisampledRTT(E)===!1?Y=$.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?Y=Oe[Q]:Y=Oe,K.copy(E.viewport),q.copy(E.scissor),ae=E.scissorTest}else K.copy(xe).multiplyScalar(j).floor(),q.copy(Pe).multiplyScalar(j).floor(),ae=ot;if(Q!==0&&(Y=R),S.bindFramebuffer(O.FRAMEBUFFER,Y)&&S.drawBuffers(E,Y),S.viewport(K),S.scissor(q),S.setScissorTest(ae),Z){let Ae=$.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,Q)}else if(Re){let Ae=z;for(let Ne=0;Ne<E.textures.length;Ne++){let Oe=$.get(E.textures[Ne]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,Q,Ae)}}else if(E!==null&&Q!==0){let Ae=$.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ae.__webglTexture,Q)}J=-1};function Wc(E){let z=$.get(E);return(z.__readFormat!==E.format||z.__readType!==E.type)&&(z.__readFormat=E.format,z.__readType=E.type,z.__formatReadable=L.textureFormatReadable(E.format),z.__typeReadable=L.textureTypeReadable(E.type)),z}this.readRenderTargetPixels=function(E,z,Q,Y,Z,Re,Le,Ae=0){if(!(E&&E.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){S.bindFramebuffer(O.FRAMEBUFFER,Ne);try{let Oe=E.textures[Ae],tt=Oe.format,st=Oe.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ae);let Ue=Wc(Oe);if(Ue.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&Q>=0&&Q<=E.height-Z&&O.readPixels(z,Q,Y,Z,Ee.convert(tt),Ee.convert(st),Re)}finally{let Oe=ee!==null?$.get(ee).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(E,z,Q,Y,Z,Re,Le,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(z>=0&&z<=E.width-Y&&Q>=0&&Q<=E.height-Z){S.bindFramebuffer(O.FRAMEBUFFER,Ne);let Oe=E.textures[Ae],tt=Oe.format,st=Oe.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ae);let Ue=Wc(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.bufferData(O.PIXEL_PACK_BUFFER,Re.byteLength,O.STREAM_READ),O.readPixels(z,Q,Y,Z,Ee.convert(tt),Ee.convert(st),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ct=ee!==null?$.get(ee).__webglFramebuffer:null;S.bindFramebuffer(O.FRAMEBUFFER,Ct);let Mt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await hu(O,Mt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Re),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ut),O.deleteSync(Mt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(E.image.width*Y),Re=Math.floor(E.image.height*Y),Le=z!==null?z.x:0,Ae=z!==null?z.y:0;te.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Le,Ae,Z,Re),S.unbindTexture()},this.copyTextureToTexture=function(E,z,Q=null,Y=null,Z=0,Re=0){let Le,Ae,Ne,Oe,tt,st,Ue,ut,Ct,Mt=E.isCompressedTexture?E.mipmaps[Re]:E.image;if(Q!==null)Le=Q.max.x-Q.min.x,Ae=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,Oe=Q.min.x,tt=Q.min.y,st=Q.isBox3?Q.min.z:0;else{let Rt=Math.pow(2,-Z);Le=Math.floor(Mt.width*Rt),Ae=Math.floor(Mt.height*Rt),E.isDataArrayTexture?Ne=Mt.depth:E.isData3DTexture?Ne=Math.floor(Mt.depth*Rt):Ne=1,Oe=0,tt=0,st=0}Y!==null?(Ue=Y.x,ut=Y.y,Ct=Y.z):(Ue=0,ut=0,Ct=0);let xt=Ee.convert(z.format),Wt=Ee.convert(z.type),Ie;z.isData3DTexture?(te.setTexture3D(z,0),Ie=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(te.setTexture2DArray(z,0),Ie=O.TEXTURE_2D_ARRAY):(te.setTexture2D(z,0),Ie=O.TEXTURE_2D),S.activeTexture(O.TEXTURE0),S.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),S.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),S.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let Jt=S.getParameter(O.UNPACK_ROW_LENGTH),at=S.getParameter(O.UNPACK_IMAGE_HEIGHT),un=S.getParameter(O.UNPACK_SKIP_PIXELS),Cn=S.getParameter(O.UNPACK_SKIP_ROWS),$n=S.getParameter(O.UNPACK_SKIP_IMAGES);S.pixelStorei(O.UNPACK_ROW_LENGTH,Mt.width),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt.height),S.pixelStorei(O.UNPACK_SKIP_PIXELS,Oe),S.pixelStorei(O.UNPACK_SKIP_ROWS,tt),S.pixelStorei(O.UNPACK_SKIP_IMAGES,st);let ki=E.isDataArrayTexture||E.isData3DTexture,mt=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){let Rt=$.get(E),jn=$.get(z),vt=$.get(Rt.__renderTarget),Qn=$.get(jn.__renderTarget);S.bindFramebuffer(O.READ_FRAMEBUFFER,vt.__webglFramebuffer),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let Hi=0;Hi<Ne;Hi++)ki&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(E).__webglTexture,Z,st+Hi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,$.get(z).__webglTexture,Re,Ct+Hi)),O.blitFramebuffer(Oe,tt,Le,Ae,Ue,ut,Le,Ae,O.DEPTH_BUFFER_BIT,O.NEAREST);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Z!==0||E.isRenderTargetTexture||$.has(E)){let Rt=$.get(E),jn=$.get(z);S.bindFramebuffer(O.READ_FRAMEBUFFER,C),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let vt=0;vt<Ne;vt++)ki?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.__webglTexture,Z,st+vt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Rt.__webglTexture,Z),mt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,jn.__webglTexture,Re,Ct+vt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,jn.__webglTexture,Re),Z!==0?O.blitFramebuffer(Oe,tt,Le,Ae,Ue,ut,Le,Ae,O.COLOR_BUFFER_BIT,O.NEAREST):mt?O.copyTexSubImage3D(Ie,Re,Ue,ut,Ct+vt,Oe,tt,Le,Ae):O.copyTexSubImage2D(Ie,Re,Ue,ut,Oe,tt,Le,Ae);S.bindFramebuffer(O.READ_FRAMEBUFFER,null),S.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else mt?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Ie,Re,Ue,ut,Ct,Le,Ae,Ne,xt,Wt,Mt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ie,Re,Ue,ut,Ct,Le,Ae,Ne,xt,Mt.data):O.texSubImage3D(Ie,Re,Ue,ut,Ct,Le,Ae,Ne,xt,Wt,Mt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Re,Ue,ut,Le,Ae,xt,Wt,Mt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Re,Ue,ut,Mt.width,Mt.height,xt,Mt.data):O.texSubImage2D(O.TEXTURE_2D,Re,Ue,ut,Le,Ae,xt,Wt,Mt);S.pixelStorei(O.UNPACK_ROW_LENGTH,Jt),S.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),S.pixelStorei(O.UNPACK_SKIP_PIXELS,un),S.pixelStorei(O.UNPACK_SKIP_ROWS,Cn),S.pixelStorei(O.UNPACK_SKIP_IMAGES,$n),Re===0&&z.generateMipmaps&&O.generateMipmap(Ie),S.unbindTexture()},this.initRenderTarget=function(E){$.get(E).__webglFramebuffer===void 0&&te.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?te.setTextureCube(E,0):E.isData3DTexture?te.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?te.setTexture2DArray(E,0):te.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){B=0,H=0,ee=null,S.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var Za=class extends Un{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new en;e.deleteAttribute("uv");let t=new En({side:Gt}),i=new En,s=new Sr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new De(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new er(e,i,6),a=new Lt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new De(e,Cs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new De(e,Cs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let f=new De(e,Cs(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let u=new De(e,Cs(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let h=new De(e,Cs(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let p=new De(e,Cs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Cs(n){return new Pi({color:0,emissive:16777215,emissiveIntensity:n})}var Zu={type:"change"},Rc={type:"start"},Ku={type:"end"},Ja=new oi,Ju=new on,Y_=Math.cos(70*bs.DEG2RAD),Ut=new P,nn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ac=1e-6,Ka=class extends Er{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pi.ROTATE,MIDDLE:pi.DOLLY,RIGHT:pi.PAN},this.touches={ONE:mi.ROTATE,TWO:mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new an,this._lastTargetPosition=new P,this._quat=new an().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xs,this._sphericalDelta=new xs,this._scale=1,this._panOffset=new P,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new P,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=J_.bind(this),this._onPointerDown=Z_.bind(this),this._onPointerUp=K_.bind(this),this._onContextMenu=ix.bind(this),this._onMouseWheel=Q_.bind(this),this._onKeyDown=ex.bind(this),this._onTouchStart=tx.bind(this),this._onTouchMove=nx.bind(this),this._onMouseDown=$_.bind(this),this._onMouseMove=j_.bind(this),this._interceptControlDown=sx.bind(this),this._interceptControlUp=rx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=pt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zu),this.update(),this.state=pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ut.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ja.origin.copy(this.object.position),Ja.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ja.direction))<Y_?this.object.lookAt(this.target):(Ju.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ja.intersectPlane(Ju,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ac||this._lastTargetPosition.distanceToSquared(this.target)>Ac?(this.dispatchEvent(Zu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?nn/60*this.autoRotateSpeed*e:nn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ut.copy(s).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Z_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function J_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function K_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ku),this.state=pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pt.DOLLY;break;case pi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}break;case pi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Rc)}function j_(n){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Q_(n){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(n.preventDefault(),this.dispatchEvent(Rc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ku))}function ex(n){this.enabled!==!1&&this._handleKeyDown(n)}function tx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pt.TOUCH_ROTATE;break;case mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pt.TOUCH_DOLLY_PAN;break;case mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Rc)}function nx(n){switch(this._trackPointer(n),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pt.NONE}}function ix(n){this.enabled!==!1&&n.preventDefault()}function sx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Br=new P;function gn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Br.copy(e),Br[i]=0,Br.normalize();let c=.5*o/(o+a),f=1-Br.angleTo(n)/l;return Math.sign(Br[t])===1?f*c:a/(o+a)+c+c*(1-f)}var kn=class n extends en{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,f=new P(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,p=this.attributes.uv.array,g=u.length/6,_=new P,m=.5/o;for(let d=0,y=0;d<u.length;d+=3,y+=2)switch(l.fromArray(u,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[d+0]=f.x*Math.sign(l.x)+c.x*r,u[d+1]=f.y*Math.sign(l.y)+c.y*r,u[d+2]=f.z*Math.sign(l.z)+c.z*r,h[d+0]=c.x,h[d+1]=c.y,h[d+2]=c.z,Math.floor(d/g)){case 0:_.set(1,0,0),p[y+0]=gn(_,c,"z","y",r,i),p[y+1]=1-gn(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),p[y+0]=1-gn(_,c,"z","y",r,i),p[y+1]=1-gn(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),p[y+0]=1-gn(_,c,"x","z",r,e),p[y+1]=gn(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),p[y+0]=1-gn(_,c,"x","z",r,e),p[y+1]=1-gn(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),p[y+0]=1-gn(_,c,"x","y",r,e),p[y+1]=1-gn(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),p[y+0]=gn(_,c,"x","y",r,e),p[y+1]=1-gn(_,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function $u(n=!1){let e=(t,i=.7,s=0)=>n?new Pi({color:t}):new En({color:t,roughness:i,metalness:s});return{paint:e("#60654b",.74,.25),edge:e("#464b37",.78,.3),steel:e("#8b9290",.32,.85),darkSteel:e("#3b4140",.5,.75),rubber:e("#242726",.95),glass:e("#233e45",.19,.45),amber:e("#ca852b",.3),lamp:e("#dce1d2",.23),red:e("#9d3026",.4)}}function $a(n,e,t,i=[0,0,0],s=""){let r=new De(e,t);return r.position.set(...i),r.name=s,r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}function F(n,e,t,i,s=""){return $a(n,new en(...t),e,i,s)}function V(n,e,t,i,s,r="y",o=t,a=20){let l=$a(n,new rr(o,t,i,a),e,s);return r==="x"&&(l.rotation.z=Math.PI/2),r==="z"&&(l.rotation.x=Math.PI/2),l}function le(n,e,t,i,s=.018){let r=new P(...t),o=new P(...i),a=o.clone().sub(r),l=V(n,e,s,a.length(),r.clone().add(o).multiplyScalar(.5).toArray());return l.quaternion.setFromUnitVectors(new P(0,1,0),a.normalize()),l}function Ke(n,e,t,i=.018,s=40){let r=new ps(t.map(o=>new P(...o)));return $a(n,new mr(r,s,i,8,!1),e)}function Ps(n,e,t){let i=new gt,s=[];for(let o=1;o<t.length-1;o++)s.push(...t[0],...t[o],...t[o+1]);i.setAttribute("position",new je(s,3)),i.computeVertexNormals();let r=e.clone();return r.side=Tt,$a(n,i,r)}function Hn(n,e,t,i,s=8,r="z",o=.014){for(let a=0;a<s;a++){let l=a/s*Math.PI*2,c=[...t];r==="z"?(c[0]+=Math.cos(l)*i,c[1]+=Math.sin(l)*i):(c[1]+=Math.cos(l)*i,c[2]+=Math.sin(l)*i),V(n,e,o,o*1.3,c,r,o,6)}}function zr(n=$u()){let e=new St;e.name="WR-12 hydraulic recovery winch",e.userData={units:"metres",concept:!0,sharedPart:"WR-12",ratedLoad:"unspecified illustrative model"},F(e,n.edge,[1.12,.085,.56],[0,.0425,0],"mounting skid");for(let s of[-.42,.42])for(let r of[-.2,.2])V(e,n.steel,.023,.022,[s,.097,r],"y",.023,6);for(let s of[-.42,.42])F(e,n.paint,[.1,.44,.4],[s,.29,0],"bearing pedestal"),V(e,n.paint,.225,.065,[s,.34,0],"x"),Hn(e,n.steel,[s+(s>0?.04:-.04),.34,0],.176,8,"x");V(e,n.darkSteel,.14,.71,[0,.34,0],"x");for(let s of[-.34,.34])V(e,n.steel,.212,.025,[s,.34,0],"x");let t=[];for(let s=0;s<=720;s++){let r=s/720,o=r*Math.PI*2*36;t.push([-.326+r*.652,.34+Math.cos(o)*.172,Math.sin(o)*.172])}Ke(e,n.steel,t,.0075,900),V(e,n.paint,.12,.24,[-.59,.34,0],"x"),V(e,n.darkSteel,.079,.15,[-.75,.34,0],"x");for(let s of[.205,.445])le(e,n.steel,[-.45,s,.27],[.45,s,.27],.035);for(let s of[-.43,.43])le(e,n.steel,[s,.19,.27],[s,.46,.27],.035);Ke(e,n.darkSteel,[[-.71,.38,-.08],[-.74,.52,-.12],[-.43,.56,-.18],[-.39,.17,-.21]],.016),Ke(e,n.darkSteel,[[-.67,.31,-.09],[-.74,.2,-.12],[-.61,.12,-.2],[-.41,.12,-.22]],.014),Ke(e,n.steel,[[0,.34,.17],[0,.32,.33],[0,.21,.46]],.012);let i=new St;return i.name="forged hook and safety latch",e.add(i),Ke(i,n.steel,[[0,.23,.46],[.04,.14,.47],[.1,.085,.49],[.11,.027,.51],[.06,-.015,.52],[-.02,-.012,.52],[-.073,.05,.51],[-.071,.12,.49]],.025),le(i,n.darkSteel,[-.07,.12,.49],[.031,.15,.48],.008),e}function Is(n){let e=new St;e.name="run-flat wheel";let t=V(e,n.rubber,.585,.37,[0,0,0],"z");for(let i of[-.196,.196])V(e,n.rubber,.505,.026,[0,0,i],"z"),V(e,n.paint,.325,.03,[0,0,i*1.09],"z"),V(e,n.darkSteel,.19,.04,[0,0,i*1.22],"z"),V(e,n.paint,.105,.055,[0,0,i*1.4],"z"),Hn(e,n.steel,[0,0,i*1.26],.247,10,"z",.018);for(let i=0;i<30;i++)for(let s of[-1,1]){let r=i/30*Math.PI*2+s*.035,o=F(e,n.rubber,[.095,.075,.16],[Math.sin(r)*.586,Math.cos(r)*.586,s*.1]);o.rotation.z=-r,o.rotation.y=s*.24}return e}function ju(n=$u()){let e=new St;e.name="R8 recovery vehicle",e.userData={units:"metres",concept:!0,axles:4,sharedPart:"WR-12"},F(e,n.darkSteel,[6.25,.24,1.2],[0,.91,0],"chassis"),F(e,n.edge,[5.85,.48,2.18],[-.1,1.27,0],"lower armored hull"),F(e,n.paint,[6.15,.25,2.4],[0,1.63,0],"deck");for(let h of[-2.17,-.74,.72,2.15]){V(e,n.darkSteel,.085,2.15,[h,.73,0],"z"),F(e,n.darkSteel,[.35,.23,.42],[h,.75,0],"differential");for(let p of[-1,1]){let g=Is(n);g.position.set(h,.605,p*1.19),e.add(g),le(e,n.steel,[h-.13,.84,p*.81],[h+.19,1.34,p*.85],.043),F(e,n.paint,[1.2,.1,.47],[h,1.3,p*1.19],"wheel guard")}}let t=1.15,i=h=>[[.52,1.74,h*t],[2.94,1.74,h*t],[1.98,2.75,h*t],[.52,2.75,h*t]];Ps(e,n.paint,i(1)),Ps(e,n.paint,i(-1).reverse()),Ps(e,n.paint,[[.52,2.75,-t],[1.98,2.75,-t],[1.98,2.75,t],[.52,2.75,t]]),Ps(e,n.paint,[[2.94,1.74,-t],[2.94,1.74,t],[1.98,2.75,t],[1.98,2.75,-t]]),F(e,n.edge,[.08,1.03,2.3],[.49,2.25,0],"cab rear wall");let s=h=>2.94-(h-1.74)*(.96/1.01)+.008;for(let h of[[-1.02,-.09],[.09,1.02]])Ps(e,n.glass,[[s(2.03),2.03,h[0]],[s(2.03),2.03,h[1]],[s(2.57),2.57,h[1]],[s(2.57),2.57,h[0]]]),le(e,n.rubber,[s(2.06)+.018,2.06,(h[0]+h[1])*.5],[s(2.4)+.018,2.4,h[1]-.1],.012);for(let h of[-1,1])Ps(e,n.glass,[[.76,2.15,h*1.158],[1.95,2.15,h*1.158],[1.87,2.57,h*1.158],[.76,2.57,h*1.158]]),le(e,n.edge,[.64,1.86,h*1.166],[.64,2.66,h*1.166],.01),le(e,n.edge,[.64,1.86,h*1.166],[1.7,1.86,h*1.166],.01),F(e,n.steel,[.15,.027,.033],[.87,2.015,h*1.185],"door handle"),le(e,n.darkSteel,[2.11,2.25,h*1.16],[2.1,2.32,h*1.47],.024),F(e,n.glass,[.06,.22,.16],[2.1,2.32,h*1.47],"mirror"),F(e,n.edge,[.68,.07,.3],[1.17,1.61,h*1.36],"entry step");F(e,n.darkSteel,[.18,.24,2.53],[3.13,1.46,0],"front bumper");for(let h of[-1,1])V(e,n.lamp,.08,.04,[3.02,1.79,h*.83],"x"),V(e,n.amber,.036,.04,[3.025,1.79,h*1.02],"x"),V(e,n.steel,.075,.07,[3.25,1.42,h*.92],"x"),F(e,n.red,[.035,.09,.14],[-3.13,1.57,h*.99]);let r=zr(n);r.name="mounted WR-12",r.rotation.y=Math.PI/2,r.position.set(2.98,1,0),e.add(r);let o=new St;o.name="recovery stowage",e.add(o);for(let h of[-1,1]){F(o,n.paint,[2.6,.51,.43],[-1.56,1.99,h*.97],"tool locker");for(let p of[-2.3,-1.55,-.8])F(o,n.edge,[.014,.36,.017],[p,1.99,h*1.197]),F(o,n.steel,[.07,.018,.025],[p+.12,2.05,h*1.207]);le(o,n.darkSteel,[-2.6,2.3,h*.8],[-.59,2.3,h*.8],.025)}let a=new St;a.name="recovery crane",e.add(a),V(a,n.darkSteel,.44,.14,[-.85,1.84,0]),V(a,n.paint,.33,.36,[-.85,2.04,0]),F(a,n.edge,[.48,.4,.48],[-.85,2.32,0],"crane pivot");let l=[-.85,2.49,0],c=[-2.51,3.13,0],f=new P(...c).sub(new P(...l));F(a,n.paint,[.34,f.length(),.34],new P(...l).add(new P(...c)).multiplyScalar(.5).toArray(),"main crane boom").quaternion.setFromUnitVectors(new P(0,1,0),f.clone().normalize()),le(a,n.darkSteel,[-2.47,3.115,0],[-3,3.32,0],.112),le(a,n.paint,[-.84,2.1,.24],[-1.74,2.78,.24],.078),le(a,n.steel,[-1.74,2.78,.24],[-2.13,2.99,.24],.035),V(a,n.darkSteel,.105,.15,[-3.03,3.31,0],"z"),le(a,n.darkSteel,[-3.06,3.26,0],[-3.06,2.55,0],.012),Ke(a,n.steel,[[-3.06,2.56,0],[-3.13,2.47,0],[-3.1,2.37,0],[-3,2.37,0],[-2.98,2.45,0]],.028),Ke(a,n.rubber,[[-.67,2.09,.28],[-.54,2.49,.27],[-.94,2.66,.25],[-1.7,2.95,.22]],.018),V(e,n.paint,.29,.05,[1.04,2.8,0],"y"),V(e,n.amber,.065,.14,[.6,2.9,-.72]),le(e,n.darkSteel,[.37,2.8,.73],[.37,3.69,.73],.012);for(let h of[-1,1])for(let p=0;p<12;p++)V(e,n.steel,.014,.018,[-2.7+p*.45,1.79,h*1.22],"z",.014,6);return e}var ox=Object.freeze({coated:Object.freeze({wavelength:65e-5,variation:.022,directional:0}),pressed:Object.freeze({wavelength:8e-4,variation:.016,directional:0}),cast:Object.freeze({wavelength:.002,variation:.045,directional:0}),machined:Object.freeze({wavelength:35e-5,variation:.018,directional:1}),rubber:Object.freeze({wavelength:.0012,variation:.023,directional:0}),upholstery:Object.freeze({wavelength:9e-4,variation:.065,directional:2})}),Qu=Object.freeze({coated:Object.freeze({wavelength:.02,roughness:.012,tone:.003}),pressed:Object.freeze({wavelength:.012,roughness:.012,tone:0}),cast:Object.freeze({wavelength:.008,roughness:.02,tone:0}),machined:Object.freeze({wavelength:.01,roughness:.01,tone:0}),rubber:Object.freeze({wavelength:.012,roughness:.015,tone:.003}),upholstery:Object.freeze({wavelength:.01,roughness:.025,tone:.006})}),ax=`
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
`,Cc=class extends gs{constructor(e={},t="coated"){super(e),this.finish=t,this.finishProfile={...ed(t)},this.surfaceProfile={...Qu[t]}}copy(e){return super.copy(e),this.finish=e.finish??"coated",this.finishProfile={...e.finishProfile??ed(this.finish)},this.surfaceProfile={...e.surfaceProfile??Qu[this.finish]},this}customProgramCacheKey(){return"sea-metres-finish-v3"}onBeforeCompile(e){let t="#include <project_vertex>",i="#include <roughnessmap_fragment>",s="#include <color_fragment>";if(!e.vertexShader.includes(t)||!e.fragmentShader.includes(i)||!e.fragmentShader.includes(s))throw new Error("SEA finish shader anchors changed");let r=this.finishProfile;e.uniforms.seaFinish={value:new P(r.wavelength,r.variation,r.directional)};let o=this.surfaceProfile;e.uniforms.seaSurface={value:new P(o.wavelength,o.roughness,o.tone)},e.vertexShader=`varying vec3 vSeaFinishPosition;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(t,`
   vSeaFinishPosition=transformed*vec3(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz),length(modelMatrix[2].xyz));
   ${t}
  `),e.fragmentShader=ax+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(s,`${s}
float seaSurfaceResponse=seaVisibleSurface();
diffuseColor.rgb*=1.0+seaSurfaceResponse*seaSurface.z;`),e.fragmentShader=e.fragmentShader.replace(i,`${i}
roughnessFactor=clamp(roughnessFactor+seaSurfaceFinish()+seaSurfaceResponse*seaSurface.y,0.04,1.0);`)}};function ed(n){let e=ox[n];if(!e)throw new Error(`Unknown SEA material finish: ${n}`);return e}function zi(){let n=(s,r,o,a,l={})=>new Cc({color:s,roughness:r,metalness:o,...l},a),e=(s,r,o=0,a={})=>new gs({color:s,roughness:r,metalness:o,...a}),t={paint:n("#626e51",.53,0,"coated",{clearcoat:.1,clearcoatRoughness:.48}),edge:n("#394136",.61,.08,"pressed"),steel:n("#a0a7a5",.29,.92,"machined"),darkSteel:n("#41494a",.62,.86,"cast"),rubber:n("#222622",.82,0,"rubber"),glass:e("#78949a",.065,0,{ior:1.5,clearcoat:0,envMapIntensity:1.15}),amber:e("#dc9b30",.25,0,{clearcoat:.32,clearcoatRoughness:.16}),lamp:e("#e2e9db",.22,0,{clearcoat:.3,clearcoatRoughness:.14}),red:e("#a94432",.39,0,{clearcoat:.16,clearcoatRoughness:.28}),pressedSteel:n("#828c87",.4,.88,"pressed"),castSteel:n("#596160",.66,.84,"cast"),upholstery:n("#343a32",.91,0,"upholstery",{sheen:.2,sheenColor:"#565d4d",sheenRoughness:.9})},i={paint:"powder coated metal",edge:"coated frame metal",steel:"machined steel",darkSteel:"cast dark steel",rubber:"moulded rubber",glass:"optical glass",amber:"amber lamp lens",lamp:"clear lamp lens",red:"red lamp lens",pressedSteel:"pressed steel",castSteel:"cast steel",upholstery:"woven seat upholstery"};for(let[s,r]of Object.entries(i))t[s].name=r;return t}function Si(n){return n.traverse(e=>{if(e.isMesh&&e.geometry.type==="BoxGeometry"){let{width:t,height:i,depth:s}=e.geometry.parameters;Math.min(t,i,s)>.045&&(e.geometry.dispose(),e.geometry=new kn(t,i,s,1,Math.min(.024,Math.min(t,i,s)*.12)))}}),n}function id(n,e,t,i,s="z"){let r=F(n,e.paint,t,i,"service panel"),[o,a,l]=i;if(s==="z")for(let c of[-1,1])for(let f of[-1,1])V(n,e.steel,.009,.012,[o+c*t[0]*.4,a+f*t[1]*.4,l+Math.sign(l||1)*(t[2]/2+.007)],"z",.009,6);return r}function Lc(n,e,t,i){if(t==="MOB")return Ic(n,e),Si(n);if(t==="CAP")return Si(n);if(t==="FP"){for(let s of[-1,1])V(n,e.steel,.075,.07,[0,.56,s*.3],"z"),Hn(n,e.darkSteel,[0,.56,s*.345],.05,6,"z",.009);id(n,e,[.31,.25,.018],[-.15,.5,-.57]),le(n,e.darkSteel,[-.26,.63,-.58],[-.04,.63,-.58],.014),Ke(n,e.rubber,[[-.13,.12,.22],[-.3,.28,.35],[-.27,.57,.36],[.08,.69,.32]],.017)}else{if(t==="PRO")return Si(n);if(t==="COM")for(let s=0;s<(i===1?3:i===6?2:1);s++){let r=(s-((i===1?3:i===6?2:1)-1)/2)*.4;le(n,e.darkSteel,[r-.13,.47,.17],[r+.13,.47,.17],.015);for(let o=0;o<7;o++)F(n,e.darkSteel,[.26,.012,.025],[r,.15+o*.042,-.13]);for(let o of[-.085,.085])V(n,e.steel,.02,.025,[r+o,.17,.145],"z"),Ke(n,e.rubber,[[r+o,.17,.16],[r+o,.1,.23],[r+o+.08,.06,.3]],.012);for(let o=0;o<3;o++)F(n,e.lamp,[.025,.006,.003],[r-.065+o*.05,.41,.134])}else if(t==="SA"){for(let s of[-.105,.105])V(n,e.steel,.081,.014,[s,i===3?1.75:.43,.172],"z"),V(n,e.glass,.055,.012,[s,i===3?1.75:.43,.185],"z");Ke(n,e.rubber,[[0,.07,-.08],[.12,.17,-.14],[.12,.37,-.14]],.012)}else if(t==="ACC"){if([0,5].includes(i))F(n,e.amber,[.13,.05,.022],[.18,.49,.29],"safety marking");else if(i===1){for(let s of[-1,1])F(n,e.red,[.025,.05,.11],[-.73,.45,s*.3]),le(n,e.steel,[-.65,.8,s*.38],[.6,.8,s*.38],.014);V(n,e.darkSteel,.055,.12,[1.27,.38,0],"y")}else if([3,6].includes(i)){for(let s=0;s<3;s++){le(n,e.darkSteel,[-.47+s*.37,.4,.24],[-.3+s*.37,.4,.24],.012);for(let r of[-1,1])V(n,e.steel,.009,.016,[-.46+s*.37,.24,r*.245],"z",.009,6)}Ke(n,e.rubber,[[-.6,.03,-.29],[-.51,.1,-.35],[.5,.1,-.35],[.6,.04,-.29]],.018)}}else if(t==="SE"){F(n,e.darkSteel,[.44,.025,.29],[.25,.75,.12],"laptop base");for(let s=0;s<4;s++)for(let r=0;r<10;r++)F(n,e.steel,[.025,.003,.023],[.09+r*.032,.766,.03+s*.034]);F(n,e.rubber,[.09,.003,.045],[.25,.766,.23],"trackpad"),F(n,e.paint,[.28,.019,.22],[-.38,.758,.15],"review binder");for(let s=0;s<4;s++)F(n,e.lamp,[.25,.003,.19],[-.38+s*.003,.772+s*.003,.15]);le(n,e.darkSteel,[-.54,.78,.26],[-.32,.78,.26],.005)}}return fx(n,e,t,i),Ic(n,e),Si(n)}function Pc(n,e,t){let i=[];for(let a=1;a<t.length-1;a++)i.push(...t[0],...t[a],...t[a+1]);let s=new gt;s.setAttribute("position",new je(i,3)),s.computeVertexNormals();let r=e.clone();r.side=Tt;let o=new De(s,r);return o.name=e.name==="optical glass"?"cab glazing":"hull shell",n.add(o),o}function _t(n,e,t,i,s=.045){let r=new fn;return r.moveTo(n+s,e),r.lineTo(t-s,e),r.quadraticCurveTo(t,e,t,e+s),r.lineTo(t,i-s),r.quadraticCurveTo(t,i,t-s,i),r.lineTo(n+s,i),r.quadraticCurveTo(n,i,n,i-s),r.lineTo(n,e+s),r.quadraticCurveTo(n,e,n+s,e),r}function lt(n,e,t,i,s){let r=new It;t.forEach(([f,u],h)=>h?r.lineTo(f,u):r.moveTo(f,u)),r.closePath(),r.holes.push(...i);let o=new Yt(r,{depth:.04,steps:1,curveSegments:6,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:3}),a=o.attributes.position;for(let f=0;f<a.count;f++)a.setXYZ(f,...s(a.getX(f),a.getY(f),a.getZ(f)));o.computeVertexNormals();let l=e.clone();l.side=Tt;let c=new De(o,l);return c.name="hull shell",c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function Ls(n,e,t,i,s,r,o){let a=new It;t.forEach(([h,p],g)=>g?a.lineTo(h,p):a.moveTo(h,p)),a.closePath(),a.holes.push(...i);let l=new Yt(a,{depth:r,steps:1,curveSegments:12,bevelEnabled:!0,bevelSize:.002,bevelThickness:.001,bevelSegments:2}),c=l.attributes.position;for(let h=0;h<c.count;h++)c.setXYZ(h,...s(c.getX(h),c.getY(h),c.getZ(h)));l.computeVertexNormals();let f=e.clone();f.side=Tt;let u=new De(l,f);return u.name=o,u.castShadow=u.receiveShadow=!0,n.add(u),u}function td(n,e,t,i){let[s,r,o,a]=t,l=_t(s,r,o,a,.045),c=_t(s-.038,r-.038,o+.038,a+.038,.065).getPoints(12).map(h=>[h.x,h.y]);Ls(n,e.edge,c,[l.clone()],(h,p,g)=>i(h,p,.013+g),.017,"hull shell").userData.component="carrier window retaining bezel";let f=_t(s-.007,r-.007,o+.007,a+.007,.052).getPoints(12).map(h=>[h.x,h.y]);Ls(n,e.rubber,f,[_t(s+.016,r+.016,o-.016,a-.016,.029)],(h,p,g)=>i(h,p,-.034+g),.066,"carrier window compression gasket");let u=e.glass.clone();u.color.set("#92b2b0"),u.transparent=!0,u.opacity=.38,u.metalness=0,u.depthWrite=!1,Ls(n,u,l.getPoints(12).map(h=>[h.x,h.y]),[],(h,p,g)=>i(h,p,-.025-g),.01,"cab glazing").castShadow=!1,Ls(n,e.edge,c,[l.clone()],(h,p,g)=>i(h,p,-.057-g),.012,"hull shell").userData.component="carrier window inner retaining frame";for(let h of[s-.023,o+.023])for(let p of[r+.04,a-.04]){let g=new P(...i(h,p,.032)),_=new P(...i(h,p,.042)).sub(g).normalize(),m=V(n,e.steel,.007,.009,g.toArray(),"y",.007,6);m.quaternion.setFromUnitVectors(new P(0,1,0),_),m.name="carrier bezel seated fastener"}}function sd(n,e){if(n==="RECOVERY"){let h=ju(e);h.traverse(_=>{_.isMesh&&_.geometry.type==="BufferGeometry"&&_.material.name!=="optical glass"&&(_.name="hull shell")}),lx(h,e);let p=h.getObjectByName("mounted WR-12"),g=Lc(zr(e),e,"ACC",5);return g.name="mounted WR-12",g.position.copy(p.position),g.quaternion.copy(p.quaternion),p.removeFromParent(),p.traverse(_=>_.geometry?.dispose()),h.add(g),nd(h,e,6.25,2.3),Si(h)}let t={COMBAT:[6.8,2.65,4],RECCE:[5.5,2.3,2],TROOP:[6.9,2.6,3],COMMAND:[6.7,2.6,3],MINE:[6.8,2.65,4]}[n],[i,s,r]=t,o=new St;o.name=n,o.userData={units:"metres",concept:!0,axles:r,roof:2.37,length:i,width:s};let a=i/2,l=-a,c=s/2;F(o,e.darkSteel,[i-.45,.2,s*.58],[0,.82,0],"chassis"),F(o,e.edge,[i-.25,.48,s*.8],[0,1.16,0],"lower hull");for(let h of[-1,1]){let p=_=>h*c*(.75+(_-1.2)*.1/1.16),g=[a-1.86,1.87,a-1.02,2.16];lt(o,e.paint,[[l,1.2],[a,1.2],[a-.75,2.36],[l+.17,2.36]],[_t(...g)],(_,m,d)=>[_,m,p(m)-h*d]),Ls(o,e.paint,[[a-2.01,1.48],[a-.97,1.48],[a-.86,2.28],[a-1.02,2.31],[a-2.01,2.31]],[_t(...g)],(_,m,d)=>[_,m,p(m)+h*(.012+d)],.015,"hull shell").userData.component="carrier formed cab door",td(o,e,g,(_,m,d)=>[_,m,p(m)+h*d])}Pc(o,e.paint,[[l+.17,2.36,-c*.85],[a-.75,2.36,-c*.85],[a-.75,2.36,c*.85],[l+.17,2.36,c*.85]]);let f=h=>a-(h-1.2)*.75/1.16;lt(o,e.paint,[[-c*.75,1.2],[c*.75,1.2],[c*.85,2.36],[-c*.85,2.36]],[_t(-c*.67,1.8,-.09,2.13),_t(.09,1.8,c*.67,2.13)],(h,p,g)=>[f(p)-g,p,h]);for(let h of[[-c*.67,-.09],[.09,c*.67]])td(o,e,[h[0],1.8,h[1],2.13],(p,g,_)=>[f(g)+_,g,p]),le(o,e.rubber,[f(1.83)+.02,1.83,(h[0]+h[1])*.5],[f(2.03)+.02,2.03,h[1]-.08],.009).name="carrier seated windshield wiper";n==="TROOP"?lt(o,e.edge,[[-c*.75,1.2],[c*.75,1.2],[c*.85,2.36],[-c*.85,2.36]],[_t(-.74,1.34,.74,2.23,.045)],(h,p,g)=>[l+(p-1.2)*.17/1.16+g,p,h]):Pc(o,e.edge,[[l,1.2,-c*.75],[l+.17,2.36,-c*.85],[l+.17,2.36,c*.85],[l,1.2,c*.75]]);let u=r===2?[-1.67,1.67]:r===3?[-2.25,-.75,1.9]:[-2.55,-1.05,1,2.4];for(let h of u){V(o,e.darkSteel,.06,s*.81,[h,.67,0],"z"),V(o,e.edge,.13,.31,[h,.67,0],"z");for(let p of[-1,1]){let g=Is(e);g.position.set(h,.62,p*c*.88),o.add(g),le(o,e.steel,[h-.15,.75,p*c*.62],[h+.1,1.2,p*c*.68],.045),F(o,e.paint,[1.22,.075,.48],[h,1.3,p*c*.91],"wheel guard")}}for(let h of[-1,1]){let p=h*c*.855,g=M=>h*c*(.75+(M-1.2)*.1/1.16)+h*.01;for(let M of[1.65,2.24])F(o,e.darkSteel,[.055,.09,.041],[a-1.97,M,g(M)+h*.024],"carrier door seated hinge leaf"),V(o,e.steel,.01,.065,[a-1.97,M,g(M)+h*.043],"y",.01,16).name="carrier door hinge pin";let _=g(1.76)+h*.054;for(let M of[a-1.56,a-1.34])le(o,e.edge,[M,1.76,g(1.76)+h*.017],[M,1.76,_],.011).name="carrier door pull mounting post";le(o,e.steel,[a-1.56,1.76,_],[a-1.34,1.76,_],.012).name="carrier exterior door pull",F(o,e.edge,[.68,.05,.32],[a-1.61,1.36,h*(c*.87+.14)],"entry step");for(let M of[a-1.83,a-1.39]){let v=Math.abs(g(1.36))-.01,b=c*.87+.14;F(o,e.edge,[.05,.1,b-v+.05],[M,1.33,h*(v+b)/2],"carrier entry step hull bracket")}le(o,e.darkSteel,[a-.98,1.86,p],[a-.9,2.07,h*(c+.1)],.02),F(o,e.glass,[.055,.2,.15],[a-.9,2.07,h*(c+.1)],"mirror");for(let M=0;M<4;M++){let v=l+.6+M*.64;id(o,e,[.51,.49,.04],[v,1.95,h*c*.85])}for(let M=0;M<10;M++)F(o,e.darkSteel,[.02,.22,.02],[a-1.6+M*.06,2.38,h*.57],"vent grille");let m=1.385,d=f(m),y=h*c*.65;F(o,e.edge,[.16,.21,.205],[d+.035,m,y],"carrier front lamp housing"),F(o,e.rubber,[.02,.175,.174],[d+.121,m,y],"carrier lamp seated gasket"),V(o,e.lamp,.058,.023,[d+.137,1.355,y],"x",.058,32).name="carrier headlamp lens",V(o,e.amber,.022,.023,[d+.137,1.445,y],"x",.022,24).name="carrier indicator lens",F(o,e.red,[.03,.07,.13],[l-.02,1.32,h*c*.65])}F(o,e.darkSteel,[.15,.17,s*.85],[a,1.12,0],"front bumper");for(let h of[-1,1])V(o,e.steel,.055,.08,[a+.1,1.14,h*.73],"x"),le(o,e.steel,[l+.25,1.44,h*.5],[l+.25,2.05,h*.5],.016);return V(o,e.edge,.32,.04,[.4,2.39,.5],"roof hatch"),nd(o,e,i,s),Si(o)}function lx(n,e){let t=n.children.filter(g=>g.isMesh&&g.geometry.type==="BufferGeometry"),i=t.filter(g=>g.material.name!=="optical glass"),s=t.filter(g=>g.material.name==="optical glass");function r(g,_){if(!g)return;let m=[];for(let d=1;d<_.length-1;d++)m.push(..._[0],..._[d],..._[d+1]);g.geometry.dispose(),g.geometry=new gt,g.geometry.setAttribute("position",new je(m,3)),g.geometry.computeVertexNormals()}let o=g=>2.94-(g-1.74)*(.47/1.01)+.012;cx(n,e);for(let g of[...n.children]){let _=g.geometry?.type==="CylinderGeometry"&&g.geometry.parameters.radiusTop===.01&&Math.abs(Math.abs(g.position.z)-1.166)<.001;(g.name==="door handle"||_)&&(g.removeFromParent(),g.geometry?.dispose())}for(let g of n.children.filter(_=>_.name==="wheel guard")){let _=new It;_.moveTo(-.74,-.04),_.lineTo(-.74,.19),_.quadraticCurveTo(-.72,.25,-.68,.31),_.lineTo(-.47,.68),_.quadraticCurveTo(-.43,.74,-.36,.74),_.lineTo(.36,.74),_.quadraticCurveTo(.43,.74,.47,.68),_.lineTo(.68,.31),_.quadraticCurveTo(.72,.25,.74,.19),_.lineTo(.74,-.04),_.lineTo(.66,-.04),_.lineTo(.66,.18),_.lineTo(.39,.66),_.lineTo(-.39,.66),_.lineTo(-.66,.18),_.lineTo(-.66,-.04),_.closePath(),g.geometry.dispose(),g.geometry=new Yt(_,{depth:.5,curveSegments:5,bevelEnabled:!0,bevelSize:.016,bevelThickness:.016,bevelSegments:3,steps:1}),g.name="recovery formed wheel guard",g.position.y=.605,g.position.z-=.25}for(let g of i)g.removeFromParent(),g.geometry.dispose(),g.material.dispose();for(let g of[-1,1]){lt(n,e.paint,[[.52,1.74],[2.94,1.74],[2.47,2.75],[.52,2.75]],[_t(1.22,2.15,2.28,2.6)],(_,m,d)=>[_,m,g*(1.15-d)]),lt(n,e.paint,[[.52,1.4],[2.83,1.4],[2.98,1.65],[2.94,1.74],[.52,1.74]],[],(_,m,d)=>[_,m,g*(1.15-d)]),lt(n,e.paint,[[1.08,1.78],[2.32,1.78],[2.55,2.1],[2.34,2.64],[1.08,2.64]],[_t(1.24,2.17,2.26,2.58)],(_,m,d)=>[_,m,g*(1.174-d*.35)]),F(n,e.edge,[.34,.58,.017],[.8,2.11,g*1.171],"rear cab access gasket"),F(n,e.paint,[.3,.54,.025],[.8,2.11,g*1.183],"rear cab service cover");for(let _ of[1.87,2.35])F(n,e.darkSteel,[.04,.07,.021],[.65,_,g*1.202],"cab service cover hinge");F(n,e.darkSteel,[.035,.09,.023],[.92,2.1,g*1.203],"cab service cover latch")}let a=[[-1.15,1.74],[1.15,1.74],[1.15,2.75],[-1.15,2.75]];lt(n,e.paint,a,[_t(-1.02,2.04,-.07,2.62),_t(.07,2.04,1.02,2.62)],(g,_,m)=>[o(_)-m,_,g]);let l=new De(new kn(1.95,.07,2.3,3,.028),e.paint);l.position.set(1.495,2.745,0),l.name="hull shell",l.castShadow=!0,l.receiveShadow=!0,n.add(l),lt(n,e.paint,[[-1.15,1.49],[1.15,1.49],[1.15,1.74],[-1.15,1.74]],[],(g,_,m)=>[2.98-(_-1.49)*.16-m,_,g]);let c=e.glass.clone();c.color.set("#a9c8c5"),c.transparent=!0,c.opacity=.28,c.metalness=0,c.roughness=.12,c.depthWrite=!1;for(let g of s)g.material.dispose(),g.material=c,g.castShadow=!1;let f=[];n.traverse(g=>{g.material===e.rubber&&g.geometry.type==="CylinderGeometry"&&g.geometry.parameters.radiusTop===.012&&g.position.y>2.1&&f.push(g)});for(let g of f)g.removeFromParent(),g.geometry.dispose();for(let[g,_]of[[0,[-1.02,-.07]],[1,[.07,1.02]]]){let m=[[o(2.04),2.04,_[0]],[o(2.04),2.04,_[1]],[o(2.62),2.62,_[1]],[o(2.62),2.62,_[0]]];r(s[g],m),s[g].name="cab glazing";for(let y=0;y<4;y++)le(n,e.rubber,m[y],m[(y+1)%4],.018);let d=(_[0]+_[1])/2;le(n,e.darkSteel,[o(2.05)+.018,2.05,d],[o(2.3)+.024,2.3,d-.2],.014),le(n,e.rubber,[o(2.21)+.025,2.21,d-.27],[o(2.47)+.025,2.47,d-.09],.012)}for(let[g,_]of[[2,-1],[3,1]]){let m=[[1.25,2.18,_*1.178],[2.25,2.18,_*1.178],[2.25,2.57,_*1.178],[1.25,2.57,_*1.178]];r(s[g],m),s[g].name="cab glazing";for(let d=0;d<4;d++)le(n,e.rubber,m[d],m[(d+1)%4],.017);F(n,e.edge,[.025,.39,.025],[2.05,2.375,_*1.196],"door quarter window divider"),F(n,e.rubber,[.085,.25,.18],[2.065,2.32,_*1.47],"mirror housing"),le(n,e.darkSteel,[2.11,2.08,_*1.16],[2.1,2.24,_*1.46],.018);for(let d of[1.93,2.47])F(n,e.darkSteel,[.065,.13,.035],[1.09,d,_*1.185],"door hinge");F(n,e.edge,[.2,.1,.021],[1.3,2.015,_*1.194],"door handle recess"),le(n,e.steel,[1.25,2.015,_*1.213],[1.37,2.015,_*1.213],.013).name="door release pull",F(n,e.edge,[.22,.26,.13],[2.99,1.79,_*.83],"recessed headlight surround"),V(n,e.lamp,.08,.033,[3.112,1.79,_*.83],"x",.08,32),V(n,e.amber,.029,.024,[2.25,2.79,_*.9],"y",.029,20)}let u=F(n,e.edge,[.025,.28,1.35],[o(1.84)+.015,1.84,0],"radiator grille frame");u.rotation.z=Math.atan(.47/1.01);for(let g=0;g<7;g++){let _=1.73+g*.033;F(n,e.darkSteel,[.025,.025,1.24],[o(_)+.034,_,0],"radiator grille slat")}for(let g of[-.52,0,.52]){let _=F(n,e.edge,[.034,.27,.023],[o(1.83)+.055,1.83,g],"grille support");_.rotation.z=Math.atan(.47/1.01)}le(n,e.edge,[2.47,2.75,-1.15],[2.47,2.75,1.15],.031);for(let g of[-.75,-.38,0,.38,.75])F(n,e.amber,[.12,.04,.07],[2.38,2.8,g],"roof clearance lamp");let h=n.getObjectByName("recovery stowage");if(h){for(let g of h.children.filter(_=>_.name==="tool locker"))g.geometry.dispose(),g.geometry=new en(2.6,.64,.43),g.position.y=1.99;for(let g of[-1,1])for(let _ of[-2.41,-1.56,-.71]){F(h,e.edge,[.78,.54,.015],[_,1.99,g*1.195],"locker door gasket"),F(h,e.paint,[.73,.49,.019],[_,1.99,g*1.21],"formed locker door");for(let m of[1.83,2.15])F(h,e.darkSteel,[.05,.08,.028],[_-.31,m,g*1.235],"locker hinge");F(h,e.darkSteel,[.13,.14,.019],[_+.23,2.04,g*1.237],"recessed latch cup"),le(h,e.steel,[_+.19,2.04,g*1.253],[_+.27,2.04,g*1.253],.012).name="locker latch lever"}for(let g of[-1,1]){F(h,e.darkSteel,[2.64,.055,.47],[-1.56,1.68,g*.97],"locker load bearing plinth");for(let _ of[-2.41,-1.56,-.71]){for(let m of[1.84,2.14])F(h,e.paint,[.55,.018,.016],[_-.03,m,g*1.225],"pressed locker stiffening rib");F(h,e.edge,[.045,.59,.025],[_-.4,1.99,g*1.212],"locker frame stile")}}for(let g of[-1,1]){F(h,e.darkSteel,[2.58,.024,.41],[-1.56,2.325,g*.97],"locker top tread plate");for(let _=0;_<13;_++){let m=-2.75+_*.19;le(h,e.steel,[m,2.342,g*.97-.14],[m+.075,2.342,g*.97+.14],.006).name="raised walkway tread"}}}hx(n,e),F(n,e.edge,[.26,.055,.18],[.43,2.755,.73],"rear bulkhead antenna bracket"),V(n,e.rubber,.04,.075,[.37,2.81,.73],"y",.04,24).name="antenna spring base",V(n,e.edge,.088,.08,[.6,2.8,-.72],"y",.088,32).name="beacon mounting pedestal";let p=n.getObjectByName("recovery crane");p&&ux(p,e)}function cx(n,e){for(let i of["chassis","lower armored hull","deck"]){let s=n.getObjectByName(i);s&&(s.removeFromParent(),s.geometry.dispose())}let t=new St;t.name="reinforced recovery chassis",n.add(t);for(let i of[-1,1]){let s=i*.52;F(t,e.darkSteel,[6.05,.26,.055],[0,.91,s],"chassis rail web");for(let r of[.77,1.05])F(t,e.darkSteel,[6.05,.04,.16],[0,r,s],"chassis rail flange");F(t,e.edge,[3.4,.17,.085],[-1.1,1.135,s],"crane subframe rail");for(let r of[-2.6,-1.6,-.85,-.3])F(t,e.darkSteel,[.14,.51,.12],[r,1.38,i*.76],"deck support post"),le(t,e.edge,[r,1.12,s],[r,1.55,i*1.02],.035).name="deck outrigger brace";lt(t,e.paint,[[.53,1.4],[2.83,1.4],[2.83,1.57],[.53,1.57]],[],(r,o,a)=>[r,o,i*(1.11-a)]).name="cab sill skirt";for(let r of[-2.17,-.74,.72,2.15]){F(t,e.darkSteel,[.23,.16,.16],[r+.19,1.3,i*.85],"suspension upper mount"),F(t,e.edge,[.23,.23,.15],[r+.19,1.45,i*.85],"suspension deck hanger"),F(t,e.edge,[.55,.24,.08],[r,1.45,i*1.12],"wheel guard mounting apron"),F(t,e.edge,[.46,.042,.1],[r,.86,i*.52],"axle spring saddle");for(let o=0;o<3;o++)F(t,e.darkSteel,[.64-o*.08,.016,.1],[r,.83-o*.018,i*.52],"leaf spring pack")}}for(let i of[-2.85,-2.17,-.85,.72,2.15,2.82])F(t,e.darkSteel,[.12,.17,1.22],[i,.93,0],"chassis crossmember");F(t,e.paint,[6.12,.08,2.38],[-.005,1.6,0],"formed load deck");for(let i of[-1,1])F(t,e.edge,[6.08,.11,.05],[-.005,1.57,i*1.175],"deck folded edge");F(t,e.darkSteel,[1.14,.16,1.6],[-.85,1.68,0],"crane foundation crossbeam");for(let i of[-1,1])lt(t,e.darkSteel,[[-1.28,1.19],[-.44,1.19],[-.62,1.59],[-1.1,1.59]],[],(s,r,o)=>[s,r,i*(.56+o)]).name="crane foundation gusset";F(t,e.edge,[.32,.22,2.08],[-2.92,1.16,0],"stabilizer crossbeam");for(let i of[-1,1])F(t,e.darkSteel,[.24,.14,.93],[-2.92,1.16,i*.58],"stowed telescopic stabilizer beam"),F(t,e.paint,[.32,.36,.24],[-2.92,1.13,i*1.02],"stabilizer jack guide"),V(t,e.paint,.08,.33,[-2.92,.92,i*1.02],"y",.08,32).name="stabilizer jack barrel",V(t,e.steel,.033,.12,[-2.92,.72,i*1.02],"y",.033,24).name="stowed jack piston",V(t,e.darkSteel,.06,.17,[-2.92,.68,i*1.02],"z",.06,24).name="jack foot pivot",F(t,e.darkSteel,[.27,.065,.29],[-2.92,.64,i*1.02],"carried stabilizer foot"),Ke(t,e.rubber,[[-2.55,1.25,i*.6],[-2.75,1.3,i*.7],[-2.94,1.3,i*.89],[-2.96,1.06,i*.93]],.018,24).name="stabilizer hydraulic supply",F(t,e.edge,[.1,.21,.41],[-3.035,1.4,i*.92],"rear lamp carrier"),F(t,e.red,[.025,.09,.2],[-3.1,1.43,i*.97],"rear tail lamp"),F(t,e.amber,[.026,.07,.09],[-3.1,1.43,i*.79],"rear turn lamp"),F(t,e.rubber,[.05,.37,.26],[-2.88,.9,i*1.28],"rear flexible mudflap");F(t,e.darkSteel,[.18,.25,1.25],[-3.015,1.1,0],"rear towing crossmember"),F(t,e.edge,[.21,.23,.28],[-3.075,1.1,0],"rear tow coupling body"),V(t,e.steel,.034,.3,[-3.15,1.1,0],"y",.034,24).name="tow coupling pin"}function hx(n,e){let t=new St;t.name="cab services",n.add(t);for(let i of[-1,1])F(t,e.darkSteel,[.37,.065,.38],[.24,1.8,i*.79],"service tower deck bracket");V(t,e.edge,.135,.65,[.24,2.14,.79],"y",.135,40).name="air cleaner housing",V(t,e.darkSteel,.153,.036,[.24,2.47,.79],"y",.153,40).name="air cleaner lid",V(t,e.paint,.1,.25,[.24,2.61,.79],"y",.1,32).name="intake riser",V(t,e.edge,.17,.05,[.24,2.75,.79],"y",.17,40).name="intake rain cap";for(let i of[1.94,2.35]){let s=new De(new Vt(.137,.012,8,36),e.steel);s.rotation.x=Math.PI/2,s.position.set(.24,i,.79),s.name="air cleaner retaining band",t.add(s),F(t,e.edge,[.2,.065,.065],[.39,i,.79],"bulkhead service bracket")}Ke(t,e.rubber,[[.24,1.84,.79],[.24,1.7,.79],[.34,1.58,.64],[.6,1.5,.64]],.065,24).name="connected air inlet duct",V(t,e.darkSteel,.093,.75,[.24,2.22,-.79],"y",.093,40).name="exhaust silencer";for(let i=0;i<12;i++){let s=i*Math.PI/6;le(t,e.steel,[.24+Math.cos(s)*.12,1.87,-.79+Math.sin(s)*.12],[.24+Math.cos(s)*.12,2.57,-.79+Math.sin(s)*.12],.012).name="exhaust heat shield rib"}for(let i of[1.88,2.08,2.37,2.57]){let s=new De(new Vt(.12,.013,8,36),e.darkSteel);s.rotation.x=Math.PI/2,s.position.set(.24,i,-.79),s.name="heat shield retaining band",t.add(s)}Ke(t,e.darkSteel,[[.24,1.85,-.79],[.24,1.7,-.79],[.35,1.57,-.72],[.59,1.5,-.72]],.05,24).name="exhaust inlet elbow",Ke(t,e.darkSteel,[[.24,2.59,-.79],[.24,2.75,-.79],[.1,2.83,-.79]],.053,24).name="exhaust outlet elbow";for(let i of[1.97,2.42])F(t,e.edge,[.2,.07,.07],[.39,i,-.79],"exhaust bulkhead bracket");F(t,e.paint,[.54,.28,.64],[-.04,1.16,-.48],"underbody utility tank");for(let i of[-.2,.13])F(t,e.darkSteel,[.044,.31,.68],[i,1.16,-.48],"utility tank strap");Ke(t,e.darkSteel,[[.2,1.29,-.7],[.35,1.29,-.7],[.45,1.43,-.79]],.014,20).name="tank supply pipe"}function ux(n,e){for(let c of[...n.children])c.removeFromParent(),c.traverse(f=>f.geometry?.dispose());let t=(c,f,u,h,p,g,_)=>{let m=new P(...f).sub(new P(...c)),d=m.length(),y=[],M=([T,I],U,A)=>{let R=T/2-U,C=I/2-U,N=Math.min(R,C)*.28;return[[-R+N,-C,A],[R-N,-C,A],[R,-C+N,A],[R,C-N,A],[R-N,C,A],[-R+N,C,A],[-R,C-N,A],[-R,-C+N,A]]},v=[M(u,0,0),M(h,0,d)],b=[M(u,p,0),M(h,p,d)],w=(T,I,U,A)=>y.push(...T,...I,...U,...T,...U,...A);for(let T=0;T<8;T++){let I=(T+1)%8;w(v[0][T],v[0][I],v[1][I],v[1][T]),w(b[0][I],b[0][T],b[1][T],b[1][I]),w(v[0][I],v[0][T],b[0][T],b[0][I]),w(v[1][T],v[1][I],b[1][I],b[1][T])}let D=new gt;D.setAttribute("position",new je(y,3)),D.computeVertexNormals();let x=new De(D,g);return x.position.set(...c),x.quaternion.setFromUnitVectors(new P(0,0,1),m.normalize()),x.name=_,x.castShadow=!0,x.receiveShadow=!0,n.add(x),x};F(n,e.edge,[.95,.12,1.2],[-.85,1.78,0],"crane mounting crossmember"),V(n,e.darkSteel,.44,.14,[-.85,1.88,0],"y",.44,48).name="slewing ring",V(n,e.paint,.33,.32,[-.85,2.1,0],"y",.33,40).name="crane pedestal";for(let c of[-1,1])lt(n,e.paint,[[-1.17,2.1],[-1.13,2.51],[-1.04,2.62],[-.66,2.62],[-.57,2.51],[-.53,2.1]],[],(f,u,h)=>[f,u,c*(.27+h)]).name="crane pivot cheek",V(n,e.steel,.095,.075,[-.85,2.46,c*.32],"z",.095,40).name="boom pivot bearing",le(n,e.edge,[-.85,1.8,c*.55],[-.85,2.14,c*.29],.045).name="pedestal brace";V(n,e.darkSteel,.075,.73,[-.85,2.46,0],"z",.075,40).name="boom hinge pin",t([-.65,2.38,0],[-2.47,3.12,0],[.42,.46],[.32,.34],.025,e.paint,"formed main boom"),t([-2.34,3.067,0],[-3.05,3.356,0],[.245,.26],[.205,.22],.017,e.darkSteel,"telescoping extension"),t([-2.37,3.079,0],[-2.49,3.128,0],[.36,.38],[.355,.375],.026,e.edge,"boom mouth reinforcement");for(let c of[-1,1]){let f=F(n,e.rubber,[.14,.12,.035],[-2.435,3.105,c*.141],"telescopic wear pad");f.rotation.z=-.386}for(let c of[-1,1])V(n,e.paint,.16,.055,[-.85,2.46,c*.225],"z",.16,40).name="boom root trunnion";lt(n,e.paint,[[-2.02,2.77],[-2.25,2.85],[-2.2,2.99],[-1.96,2.89]],[],(c,f,u)=>[c,f,.25+u]).name="boom cylinder lug";let i=[-.73,2.08,.32],s=[-2.13,2.91,.32],r=new P(...s).sub(new P(...i)),o=c=>new P(...i).addScaledVector(r,c).toArray(),a=o(.68);le(n,e.paint,i,a,.085).name="lift cylinder barrel",le(n,e.steel,a,s,.032).name="lift piston rod",le(n,e.darkSteel,o(.65),o(.71),.103).name="cylinder gland",le(n,e.edge,o(.04),o(.12),.098).name="cylinder end cap";for(let[c,f]of[[i[0],i[1]],[s[0],s[1]]])V(n,e.steel,.067,.13,[c,f,.32],"z",.067,32).name="cylinder clevis pin",F(n,e.paint,[.17,.17,.08],[c,f,.26],"lift cylinder clevis");V(n,e.edge,.135,.34,[-.36,2.37,0],"z",.135,48).name="hoist drum";for(let c=0;c<13;c++){let f=new De(new Vt(.137,.0075,6,36),e.darkSteel);f.position.set(-.36,2.37,-.15+c*.025),f.name="hoist cable winding",n.add(f)}for(let c of[-1,1])V(n,e.steel,.18,.03,[-.36,2.37,c*.185],"z",.18,40).name="hoist drum flange",lt(n,e.paint,[[-.62,2.1],[-.08,2.1],[-.08,2.36],[-.2,2.54],[-.47,2.54],[-.62,2.36]],[],(f,u,h)=>[f,u,c*(.225+h)]).name="hoist bearing cradle";F(n,e.edge,[.55,.065,.6],[-.35,2.105,0],"hoist cradle base"),le(n,e.edge,[-.68,2.1,0],[-.35,2.1,0],.055).name="hoist support tie",V(n,e.paint,.17,.13,[-.36,2.37,-.335],"z",.14,40).name="planetary hoist gearbox",V(n,e.darkSteel,.095,.21,[-.36,2.37,-.505],"z",.095,32).name="hoist hydraulic motor",Ke(n,e.rubber,[[-.36,2.35,-.6],[-.18,2.2,-.62],[-.44,2.06,-.46],[-.73,2,-.36]],.018,24).name="hoist motor supply";for(let c of[-1,1])lt(n,e.paint,[[-3.13,3.19],[-3.17,3.4],[-2.94,3.48],[-2.85,3.35]],[],(f,u,h)=>[f,u,c*(.12+h)]).name="boom head cheek";V(n,e.darkSteel,.095,.18,[-3.04,3.35,0],"z",.095,40).name="head sheave",V(n,e.steel,.035,.35,[-3.04,3.35,0],"z",.035,32).name="head sheave axle";for(let c of[-1,1]){let f=new De(new Vt(.086,.013,8,36),e.steel);f.position.set(-3.04,3.35,c*.075),f.name="sheave flange",n.add(f)}le(n,e.darkSteel,[-.36,2.507,0],[-2.995,3.433,0],.011).name="hoist rope";let l=[];for(let c=0;c<=12;c++){let f=Math.PI*.34+c/12*Math.PI*.66;l.push([-3.04+Math.cos(f)*.095,3.35+Math.sin(f)*.095,0])}Ke(n,e.darkSteel,l,.011,24).name="hoist rope sheave wrap",le(n,e.darkSteel,[-3.135,3.35,0],[-3.135,2.79,0],.011).name="hoist rope fall",V(n,e.darkSteel,.047,.16,[-3.12,2.77,0]).name="hook swivel",Ke(n,e.amber,[[-3.12,2.7,0],[-3.19,2.65,0],[-3.23,2.54,0],[-3.18,2.45,0],[-3.07,2.46,0],[-3.01,2.55,0],[-3.04,2.61,0]],.033,32).name="forged lifting hook",le(n,e.darkSteel,[-3.04,2.61,0],[-3.14,2.67,0],.008).name="hook safety latch";for(let c=0;c<2;c++){let f=o(.58+c*.05),u=.44+c*.045;V(n,e.steel,.025,.065,[f[0],f[1],.409],"z",.025,24).name="lift cylinder hose union",Ke(n,e.rubber,[[-.8,2,u],[-.59,2.18,u+.03],[-.71,2.59,u+.03],[-1.16,2.67,u],[f[0],f[1],.444]],.018,32).name="lift cylinder hydraulic line"}}function dx(n,e){let t=new St;t.name="driver controls",n.add(t);let i=new En({color:"#79816f",roughness:.86,metalness:0});i.name="cab interior trim";let s=e.upholstery.clone();s.name="woven seat upholstery";let r=(h,p,g,_,m=.035)=>{let d=new De(new kn(...p,3,m),h);return d.position.set(...g),d.name=_,d.castShadow=!0,d.receiveShadow=!0,t.add(d),d},o=1.79;r(e.rubber,[1.86,.045,1.99],[1.49,o,0],"cab floor mat",.018);let a=new It;[[2.11,1.85],[2.71,1.85],[2.75,2.05],[2.58,2.14],[2.18,2.14]].forEach(([h,p],g)=>g?a.lineTo(h,p):a.moveTo(h,p)),a.closePath();let l=new De(new Yt(a,{depth:1.98,steps:1,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2}),i);l.position.z=-.99,l.name="dashboard cowl",l.castShadow=!0,l.receiveShadow=!0,t.add(l),r(e.edge,[.08,.23,1.86],[2.13,2.025,0],"dashboard instrument fascia",.015),r(e.rubber,[.26,.07,.63],[2.06,2.155,-.5],"instrument sun hood",.025),r(i,[.05,.075,.6],[2.075,2.015,.55],"glove compartment",.012),le(t,e.darkSteel,[2.043,1.99,.44],[2.043,1.99,.65],.011).name="glove compartment pull";for(let h of[-.85,.14,.81]){r(e.darkSteel,[.014,.1,.15],[2.075,2.075,h],"dashboard air vent",.005);for(let p=0;p<4;p++)F(t,e.edge,[.015,.01,.13],[2.064,2.04+p*.023,h],"vent louvre")}for(let h of[-1,1]){let p=h*.58;for(let _ of[-.16,.16])F(t,e.darkSteel,[.59,.046,.044],[1.27,o+.042,p+_],"seat adjustment rail");r(e.darkSteel,[.39,.105,.34],[1.27,1.91,p],"seat suspension pan",.016),r(s,[.54,.15,.43],[1.33,2.02,p],"driver seat",.055);let g=r(s,[.16,.52,.42],[1.065,2.245,p],"seat back",.05);g.rotation.z=-.08;for(let _ of[-.19,.19]){let m=r(s,[.12,.48,.072],[1.14,2.235,p+_],"seat back bolster",.025);m.rotation.z=-.08,r(s,[.43,.1,.066],[1.36,2.09,p+_],"seat cushion bolster",.023)}for(let _ of[-.13,.13])le(t,e.steel,[1.04,2.43,p+_],[1.04,2.56,p+_],.013).name="headrest support";r(s,[.14,.18,.3],[1.03,2.57,p],"driver head restraint",.035);for(let _ of[-.11,0,.11])le(t,e.edge,[1.18,2.09,p+_],[1.51,2.09,p+_],.003).name="upholstery stitch channel";Ke(t,e.darkSteel,[[1.15,2.46,p+h*.16],[1.23,2.29,p],[1.33,2.12,p-h*.13],[1.52,2.08,p-h*.17]],.014,24).name="diagonal restraint",Ke(t,e.darkSteel,[[1.18,2.105,p+h*.19],[1.48,2.105,p+h*.14],[1.52,2.08,p-h*.17]],.012,20).name="lap restraint",r(e.red,[.035,.036,.04],[1.52,2.08,p-h*.17],"restraint buckle",.006),r(i,[1.51,.3,.038],[1.51,1.98,h*1.108],"door interior liner",.018),le(t,e.darkSteel,[1.38,2.06,h*1.077],[1.74,2.06,h*1.077],.021).name="door interior grab pull"}let c=new De(new Vt(.18,.018,10,48),e.rubber);c.rotation.y=Math.PI/2-.28,c.position.set(1.86,2.16,-.58),c.name="steering wheel",t.add(c);let f=new P(1,0,0).applyAxisAngle(new P(0,1,0),-.28),u=new P(1.86,2.16,-.58);for(let h=0;h<3;h++){let p=h*Math.PI*2/3,g=new P(0,Math.cos(p)*.155,Math.sin(p)*.155).applyAxisAngle(new P(0,1,0),-.28).add(u);le(t,e.darkSteel,u.toArray(),g.toArray(),.013).name="steering spoke"}le(t,e.darkSteel,u.toArray(),[2.08,2.04,-.58],.033).name="steering column",le(t,e.edge,u.clone().addScaledVector(f,-.025).toArray(),u.clone().addScaledVector(f,.025).toArray(),.045).name="steering hub";for(let[h,p]of[[-.65,.06],[-.48,.052],[-.32,.033],[-.23,.033]])V(t,e.steel,p+.006,.009,[2.074,2.04,h],"x",p+.006,32).name="instrument bezel",V(t,e.rubber,p,.012,[2.064,2.04,h],"x",p,32).name="instrument dial",le(t,e.lamp,[2.055,2.04,h],[2.055,2.04+p*.58,h+p*.3],.003).name="instrument needle";for(let h of[-.71,-.55,-.39]){le(t,e.darkSteel,[2.24,o+.025,h],[2.05,o+.17,h],.014).name="pedal arm";let p=F(t,e.rubber,[.1,.025,.085],[2.05,o+.18,h],"driver pedal");p.rotation.z=-.5}r(i,[.42,.22,.2],[1.76,1.92,0],"centre console",.028),le(t,e.darkSteel,[1.76,2.04,0],[1.72,2.18,0],.017).name="gear selector",r(e.rubber,[.06,.06,.065],[1.72,2.2,0],"selector grip",.015)}function nd(n,e,t,i){if(n.userData.sharedPart==="WR-12")dx(n,e);else{let o=new St;o.name="driver controls",n.add(o);let a=t/2-1.4,l=n.userData.roof?1.53:1.86,c=e.edge.clone();c.color.set("#79816f"),c.metalness=0,c.roughness=.85,c.name="carrier moulded interior trim";let f=e.upholstery.clone();f.name="woven seat upholstery";let u=(m,d,y,M,v=.025)=>{let b=new De(new kn(...d,3,v),m);return b.position.set(...y),b.name=M,b.castShadow=b.receiveShadow=!0,o.add(b),b},h=l-.12,p=new It;[[a+.23,h+.012],[a+.33,h+.012],[a+.33,l+.32],[a+.05,l+.32],[a+.02,l+.17],[a+.23,l+.17]].forEach(([m,d],y)=>y?p.lineTo(m,d):p.moveTo(m,d)),p.closePath();let g=new De(new Yt(p,{depth:1.68,steps:1,bevelEnabled:!0,bevelSize:.009,bevelThickness:.007,bevelSegments:2}),c);g.position.z=-.84,g.name="carrier supported dashboard cowl",g.castShadow=g.receiveShadow=!0,o.add(g),u(e.edge,[.035,.16,1.55],[a+.029,l+.24,0],"dashboard",.012),u(e.darkSteel,[.2,.055,.48],[a-.02,l+.34,-.43],"carrier instrument sun hood",.018);for(let m of[-1,1]){u(e.darkSteel,[.41,.105,.33],[a-.45,h+.075,m*.48],"carrier seat suspension pedestal",.018);for(let M of[h+.047,h+.076,h+.105])u(e.rubber,[.425,.01,.34],[a-.45,M,m*.48],"carrier seat suspension bellows",.004);u(f,[.49,.15,.44],[a-.43,l+.06,m*.48],"driver seat",.048);let d=u(f,[.115,.49,.4],[a-.67,l+.31,m*.48],"seat back",.032);d.rotation.z=-.1;for(let M of[-.17,.17]){u(f,[.41,.07,.065],[a-.42,l+.14,m*.48+M],"carrier cushion side bolster",.023);let v=u(f,[.105,.39,.065],[a-.615,l+.31,m*.48+M],"carrier back side bolster",.021);v.rotation.z=-.1}for(let M of[-.09,.09])Ke(o,e.edge,[[a-.13,l+.137,m*.48+M],[a-.43,l+.137,m*.48+M],[a-.64,l+.16,m*.48+M]],.0025,14).name="carrier cushion stitched channel";Ls(o,c,[[a-.71,l-.015],[a-.09,l-.015],[a-.09,l+.235],[a-.71,l+.235]],[],(M,v,b)=>[M,v,m*(i/2*(.75+(v-1.2)*.1/1.16)-.038-b)],.03,"carrier door interior liner");let y=m*(i/2*(.75+(l+.22-1.2)*.1/1.16)-.08);le(o,e.darkSteel,[a-.59,l+.22,y],[a-.29,l+.22,y],.015).name="carrier interior door pull"}let _=new De(new Vt(.18,.019,10,48),e.rubber);_.rotation.y=Math.PI/2,_.position.set(a-.15,l+.41,-.48),_.name="steering wheel",o.add(_);for(let m=0;m<3;m++){let d=m*Math.PI*2/3;le(o,e.darkSteel,[a-.15,l+.41,-.48],[a-.15,l+.41+Math.cos(d)*.16,-.48+Math.sin(d)*.16],.012).name="steering spoke"}for(let m=0;m<4;m++)V(o,e.rubber,.034,.012,[a+.007,l+.21,-.57+m*.09],"x").name="instrument dial";F(o,e.edge,[1.5,.05,1.8],[a-.18,h,0],"cab floor");for(let m of[-1,1]){for(let d of[m*.48-.16,m*.48+.16])F(o,e.darkSteel,[.58,.045,.04],[a-.47,h+.04,d],"seat adjustment rail");u(f,[.13,.17,.32],[a-.67,l+.6,m*.48],"driver head restraint",.03);for(let d of[m*.48-.1,m*.48+.1])le(o,e.steel,[a-.67,l+.5,d],[a-.67,l+.6,d],.013);Ke(o,e.darkSteel,[[a-.6,l+.47,m*.65],[a-.55,l+.31,m*.48],[a-.32,l+.147,m*.36],[a-.13,l+.137,m*.34]],.012,24).name="diagonal restraint",F(o,e.red,[.025,.035,.045],[a-.13,l+.14,m*.34],"restraint buckle"),Ke(o,e.darkSteel,[[a-.55,l+.147,m*.66],[a-.32,l+.147,m*.6],[a-.13,l+.137,m*.34]],.009,22).name="lap restraint"}le(o,e.darkSteel,[a-.15,l+.41,-.48],[a+.07,l+.3,-.48],.026).name="steering column",V(o,e.edge,.04,.06,[a-.15,l+.41,-.48],"x",.04,24).name="steering hub";for(let m of[-.6,-.43,-.26]){le(o,e.steel,[a+.2,h+.025,m],[a+.08,h+.13,m],.012).name="pedal arm";let d=F(o,e.rubber,[.09,.025,.07],[a+.08,h+.14,m],"driver pedal");d.rotation.z=-.45}F(o,e.edge,[.3,.16,.19],[a-.1,h+.1,.02],"gear selector console"),le(o,e.darkSteel,[a-.1,h+.18,.02],[a-.14,l+.16,.02],.012).name="gear selector",V(o,e.rubber,.03,.045,[a-.14,l+.18,.02]).name="selector grip";for(let m=0;m<4;m++){let d=-.57+m*.09;V(o,e.steel,.037,.009,[a+.006,l+.21,d],"x",.037,32).name="instrument bezel",le(o,e.lamp,[a-.001,l+.21,d],[a-.001,l+.23,d+.009],.0025).name="instrument needle"}}if(Ic(n,e),n.userData.sharedPart==="WR-12")return;let s=[];n.traverse(o=>{o.name==="wheel guard"&&s.push(o)});for(let o of s){let a=new It;for(let l=0;l<=12;l++){let c=l*Math.PI/12,f=Math.cos(c)*.7,u=Math.sin(c)*.7;l?a.lineTo(f,u):a.moveTo(f,u)}for(let l=12;l>=0;l--){let c=l*Math.PI/12;a.lineTo(Math.cos(c)*.64,Math.sin(c)*.64)}a.closePath(),o.geometry.dispose(),o.geometry=new Yt(a,{depth:.46,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.009,bevelThickness:.009}),o.position.y=.62,o.position.z-=.23}for(let o of[-1,1]){let a=o*i*.45;for(let l of[-t*.38,-t*.22])F(n,e.edge,[.028,.12,.028],[l,1.75,a],"panel hinge"),V(n,e.steel,.011,.07,[l,1.75,a+o*.024],"y",.011,12);for(let l=0;l<6;l++)F(n,e.darkSteel,[.3,.02,.03],[-t*.27,2.08+l*.035,a+o*.018],"louvred cooling intake");le(n,e.darkSteel,[t*.36,1.38,a],[t*.36,1.95,a],.016)}le(n,e.darkSteel,[-t*.34,.8,0],[t*.31,.8,0],.06),F(n,e.edge,[t*.56,.065,i*.48],[0,.9,0],"belly protection"),V(n,e.darkSteel,.11,.85,[-t*.22,1.18,-i*.28],"x"),Ke(n,e.darkSteel,[[-t*.22,1.18,-i*.28],[-t*.38,1.18,-i*.28],[-t*.42,1.37,-i*.37]],.034);let r=-t/2;for(let o of[-1,1])Ke(n,e.darkSteel,[[r+.7,1.4,o*i*.43],[r+.7,2.1,o*i*.46],[r+1.3,2.13,o*i*.46]],.024),F(n,e.edge,[.4,.2,.42],[r+.55,1.07,o*i*.39],"mud flap");for(let o=0;o<4;o++)le(n,e.steel,[r+.1,1.15+o*.18,-.3],[r+.1,1.15+o*.18,.3],.014)}function Ic(n,e){let t=[];n.traverse(i=>{i.name==="run-flat wheel"&&t.push(i)});for(let i of t){if(i.userData.detailed)continue;i.userData.detailed=!0;let s=i.children[0];for(let l of[...i.children].slice(1))l.removeFromParent(),l.geometry?.dispose();s.geometry.dispose();let r=[[.315,-.165],[.33,-.185],[.4,-.211],[.48,-.213],[.54,-.19],[.574,-.152],[.588,-.096],[.59,-.04],[.59,.04],[.588,.096],[.574,.152],[.54,.19],[.48,.213],[.4,.211],[.33,.185],[.315,.165],[.315,-.165]].map(([l,c])=>new ce(l,c));s.geometry=new ci(r,64),s.rotation.x=Math.PI/2,s.name="rounded tyre carcass";let o=new It;o.moveTo(-.055,-.071),o.lineTo(.018,-.071),o.lineTo(.059,-.035),o.lineTo(.043,.071),o.lineTo(-.027,.071),o.lineTo(-.063,.025),o.closePath();let a=new Yt(o,{depth:.03,steps:1,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:1});a.rotateX(Math.PI/2);for(let l=0;l<32;l++)for(let c of[-1,1]){let f=l*Math.PI/16+c*.028,u=new De(a,e.rubber);u.position.set(Math.sin(f)*.607,Math.cos(f)*.607,c*.091),u.rotation.z=-f,u.rotation.y=c*.24,u.name="directional tread lug",u.castShadow=!0,u.receiveShadow=!0,i.add(u)}for(let l of[-1,1]){let c=[[.11,.08],[.15,.095],[.23,.13],[.31,.173],[.325,.19],[.334,.184],[.331,.164],[.307,.15],[.236,.109],[.15,.071],[.11,.068]].map(([_,m])=>new ce(_,m)),f=new De(new ci(c,48),e.paint);f.rotation.x=l*Math.PI/2,f.name="dished wheel rim",i.add(f);let u=new De(new Vt(.322,.012,8,48),e.darkSteel);u.position.z=l*.184,u.name="rim bead retaining lip",i.add(u),V(i,e.darkSteel,.11,.08,[0,0,l*.112],"z",.11,40).name="wheel hub shoulder",V(i,e.paint,.085,.07,[0,0,l*.16],"z",.085,40).name="hub cap";for(let _=0;_<10;_++){let m=_*Math.PI/5;V(i,e.steel,.015,.021,[Math.sin(m)*.15,Math.cos(m)*.15,l*.12],"z",.015,6).name="hub fastener"}let h=l===-Math.sign(i.position.z),p=V(i,e.steel,.265,.015,[0,0,l*.066],"z",.265,48);p.name=h?"ventilated brake rotor":"rim inner web",h&&F(i,e.darkSteel,[.12,.21,.08],[.23,0,l*.065],"brake caliper"),V(i,e.steel,.012,.025,[.12,.28,l*.18],"z",.012,8).name="tyre valve";let g=new De(new Vt(.47,.0035,6,48),e.rubber);g.position.z=l*.214,g.name="moulded sidewall seam",i.add(g)}}}function fx(n,e,t,i){if(t==="CAP"){let s=[];n.traverse(r=>{r.name==="crew seat cushion"&&s.push(r)});for(let r of s){let{x:o,z:a}=r.position;F(n,e.rubber,[.12,.15,.28],[o-.19,1.06,a],"head restraint");for(let l of[-1,1])le(n,e.darkSteel,[o-.16,.73,a+l*.25],[o+.18,.73,a+l*.25],.021),V(n,e.steel,.023,.025,[o-.18,.28,a+l*.17],"z");F(n,e.amber,[.035,.045,.028],[o+.13,.51,a+.22],"belt buckle");for(let l=0;l<3;l++)F(n,e.edge,[.31,.005,.009],[o,.56,a+(l-1)*.08],"seat seam")}}else if(t==="FP"){F(n,e.darkSteel,[.39,.12,.14],[.12,.73,0],"breech cover");for(let s=0;s<7;s++)F(n,e.edge,[.018,.04,.13],[-.06+s*.045,.81,0],"receiver cooling fin");for(let s of[-1,1])F(n,e.paint,[.055,.27,.3],[-.1,.55,s*.31],"mount cheek"),V(n,e.steel,.045,.038,[-.1,.57,s*.35],"z",.045,32);for(let s=0;s<8;s++)V(n,e.amber,.018,.08,[-.24+s*.034,.58,-.4],"y",.013,12);Ke(n,e.rubber,[[-.23,.38,-.37],[-.36,.48,-.3],[-.35,.64,-.17],[-.1,.72,-.11]],.018,24);for(let s=0;s<6;s++)F(n,e.steel,[.033,.007,.017],[.18+s*.038,.8,0],"accessory rail")}else if(t==="COM"){let s=i===1?3:i===6?2:1;for(let r=0;r<s;r++){let o=(r-(s-1)/2)*.4;for(let a of[-.13,.13])for(let l of[.12,.47])V(n,e.steel,.008,.012,[o+a,l,.127],"z",.008,6);for(let a=0;a<4;a++)V(n,e.steel,.013,.012,[o-.1+a*.063,.1,.13],"z"),V(n,e.darkSteel,.009,.016,[o-.1+a*.063,.1,.14],"z");F(n,e.darkSteel,[.04,.18,.023],[o+.145,.3,.126],"grip")}}else if(t==="SA"){let s=i===3?1.75:.43;for(let r of[-.105,.105]){let o=new De(new Vt(.068,.008,8,40),e.darkSteel);o.position.set(r,s,.198),n.add(o),F(n,e.edge,[.19,.025,.18],[r,s+.14,.065],"lens sunshade");for(let a of[-.09,.09])V(n,e.steel,.006,.012,[r+a,s+.09,.123],"z",.006,6)}}else if(t==="ACC"&&[0,5].includes(i)){for(let r of[-.42,.42]){F(n,e.edge,[.09,.08,.46],[r,.14,0],"gusseted pedestal");for(let o of[-.19,.19])V(n,e.steel,.011,.02,[r,.19,o],"y",.011,6),Pc(n,e.paint,[[r-.085,.085,o],[r+.085,.085,o],[r,.26,o]]).name="bearing pedestal gusset"}V(n,e.paint,.145,.15,[-.57,.34,0],"x",.145,40).name="reduction gearcase",V(n,e.darkSteel,.155,.026,[-.66,.34,0],"x",.155,40).name="gearcase joint",Hn(n,e.steel,[-.678,.34,0],.123,8,"x",.009);for(let r=0;r<6;r++)V(n,e.darkSteel,.086,.012,[-.7-r*.021,.34,0],"x",.086,32).name="hydraulic motor cooling ring";V(n,e.paint,.09,.025,[-.835,.34,0],"x",.09,32).name="motor end cover";for(let r of[.21,.46])le(n,e.darkSteel,[-.42,r,-.235],[.42,r,-.235],.018).name="rear frame tie rod";F(n,e.paint,[.21,.065,.12],[-.23,.602,.12],"hydraulic valve block");for(let r of[-.3,-.16])le(n,e.darkSteel,[-.42,.49,.12],[r,.57,.12],.013).name="valve block support",V(n,e.steel,.017,.03,[r,.65,.12]).name="valve port";for(let[r,o]of[[-.3,-.74],[-.16,-.79]])Ke(n,e.rubber,[[r,.65,.12],[r,.68,.12],[-.52,.69,.1],[o,.52,.065],[o,.38,.065]],.013,40).name="motor hydraulic supply";V(n,e.steel,.02,.055,[0,.235,.455]).name="rope ferrule";let s=new De(new Vt(.035,.007,8,28),e.steel);s.rotation.y=Math.PI/2,s.position.set(0,.22,.46),s.name="rope eye thimble",n.add(s),V(n,e.darkSteel,.027,.025,[-.068,.122,.49],"z",.027,20).name="hook latch pivot"}}var px=Object.freeze(["COMBAT","RECCE","TROOP","COMMAND","RECOVERY","MINE"]),rd=Object.freeze([...["ACC","CAP","COM","FP","MOB","PRO","SA"].flatMap(n=>"ABCDEFG".split("").map(e=>`${n}-${e}`)),..."ABCDEFGHIJKLMNOPQRSTU".split("").map(n=>`SE-${n}`),"TRAIN-CAP"]);function Bt(n){let e=new St;return e.name=n,e}function od(n,e,t,i,s=!1){let o=Bt("supported crew seat");o.position.set(t,.4,i),n.add(o);let a=e.upholstery.clone();a.name="woven seat upholstery";let l=(u,h,p,g,_)=>{let m=new De(new kn(...h,3,g),u);return m.position.set(...p),m.name=_,o.add(m),m};if(s){F(o,e.darkSteel,[.48,.055,.36],[.01,.148,0],"crew seat floor mounting cassette");for(let u of[-1,1]){F(o,e.edge,[.49,.035,.07],[.01,.128,u*.145],"crew seat bolted floor rail");for(let h of[-.17,.19])V(o,e.steel,.012,.023,[h,.157,u*.145],"y",.012,6).name="seat rail retaining fastener";F(o,e.edge,[.36,.18,.035],[0,.25,u*.145],"seat suspension side cheek");for(let h of[-.13,.13])V(o,e.steel,.021,.044,[h,.25,u*.165],"z",.021,12).name="suspension pivot"}F(o,e.darkSteel,[.3,.14,.22],[0,.25,0],"seat suspension bellows");for(let u of[.197,.232,.267,.302])F(o,e.rubber,[.325,.018,.25],[0,u,0],"suspension bellows convolution");F(o,e.edge,[.41,.047,.33],[0,.338,0],"suspension upper cradle");for(let u of[-1,1])F(o,e.edge,[.075,.28,.055],[-.22,.515,u*.135],"connected seat back support"),V(o,e.steel,.038,.052,[-.21,.4,u*.19],"z",.038,20).name="seat back recline housing"}else for(let u of[-1,1]){F(o,e.darkSteel,[.49,.035,.035],[.01,.15,u*.15],"seat adjustment rail");for(let h of[-.16,.19])F(o,e.edge,[.065,.04,.09],[h,.105,u*.15],"seat floor foot"),V(o,e.steel,.009,.015,[h,.134,u*.15],"y",.009,6),le(o,e.steel,[h,.17,u*.15],[h-.04,.35,u*.15],.018)}F(o,e.edge,[.44,.045,.4],[0,.37,0],"seat suspension pan"),l(a,[.43,.11,.36],[.025,.45,0],.045,"crew seat cushion");for(let u of[-1,1]){let h=new De(new sr(.038,.31,6,14),a);h.rotation.z=Math.PI/2,h.position.set(.015,.505,u*.17),h.name="cushion side bolster",o.add(h)}let c=l(e.edge,[.074,.49,.38],[-.215,.77,0],.025,"seat back shell");c.rotation.z=.12;let f=l(a,[.095,.46,.32],[-.16,.78,0],.035,"contoured back cushion");if(f.rotation.z=.12,s){let u=a.clone();u.color.multiplyScalar(.82),u.roughness=.93,u.name="crew seat woven center insert";let h=l(u,[.018,.335,.205],[-.108,.782,0],.008,"crew seat contoured back insert");h.rotation.z=.12,l(u,[.295,.018,.235],[.045,.508,0],.008,"crew seat cushion center insert");for(let p of[-1,1])Ke(o,e.darkSteel,[[-.08,.632,p*.065],[-.098,.782,p*.065],[-.117,.932,p*.065]],.0018,18).name="seat back stitched channel",Ke(o,e.darkSteel,[[-.087,.52,p*.075],[.045,.52,p*.075],[.175,.52,p*.075]],.0018,18).name="seat cushion stitched channel"}for(let u of[-1,1]){let h=l(a,[.1,.39,.075],[-.135,.77,u*.16],.03,"back side bolster");h.rotation.z=.12,le(o,e.steel,[-.225,.99,u*.09],[-.225,1.08,u*.09],.009)}l(a,[.115,.15,.28],[-.225,1.085,0],.04,"adjustable head restraint");for(let u of[.66,.82])Ke(o,e.edge,[[-.111-(u-.78)*.12,u,-.11],[-.108-(u-.78)*.12,u,0],[-.111-(u-.78)*.12,u,.11]],.003,16).name="back upholstery seam";Ke(o,e.darkSteel,[[-.14,.98,-.125],[-.095,.82,-.055],[-.075,.65,.05],[.005,.518,.1],[.1,.513,.115]],.012,24),Ke(o,e.darkSteel,[[.08,.515,-.19],[.1,.518,0],[.08,.515,.19]],.013,20),l(e.steel,[.035,.024,.042],[.1,.526,.065],.006,"restraint buckle"),F(o,e.red,[.018,.007,.025],[.105,.542,.065],"restraint release");for(let u of[-1,1])le(o,e.edge,[-.14,.38,u*.21],[-.14,.65,u*.21],.014),l(a,[.29,.05,.055],[.005,.65,u*.225],.018,"supported armrest");for(let u of o.children)u.position.y-=.4;return o}function mx(n,e){let t=Bt("crew bay"),i=[6,6,4,8,5,5,4][e],s=[2.65,3.05,2.05,3.25,2.2,2.5,2.1][e],r=e===6?1.26:1.47,o=Math.ceil(i/2),a=(s-.65)/o,l=s/2,c=r/2,f=e===4||e===6;F(t,n.paint,[s,.1,r],[0,.055,0],"crew module floor");for(let u of[-1,1])F(t,n.edge,[s-.12,.055,.075],[0,.105,u*(c-.06)],"floor edge rail"),F(t,n.darkSteel,[s-.12,.06,.08],[0,.035,u*(c-.13)],"module lower mounting rail");for(let u of[-l+.15,l-.15])for(let h of[-1,1])F(t,n.edge,[.19,.055,.16],[u,.023,h*(c-.1)],"module chassis mounting foot"),V(t,n.steel,.015,.025,[u,.065,h*(c-.1)],"y",.015,6);for(let u=0;u<o;u++){let h=(u-(o-1)/2)*a;F(t,n.darkSteel,[.065,.04,r-.16],[h,.104,0],"seat row crossmember")}for(let u=0;u<i;u++){let h=Math.floor(u/2),p=u===i-1&&i%2;od(t,n,(h-(o-1)/2)*a,p?0:(u%2?1:-1)*r*.25)}if(e!==4){for(let u of[-l+.05,l-.05]){let h=[[-c,.12],[c,.12],[c,1.12],[c-.13,1.3],[-c+.13,1.3],[-c,1.12]],p=_t(-c+.07,.18,c-.07,1.23,.065);lt(t,n.paint,h,[p],(g,_,m)=>[u+m,_,g]).name="hull shell";for(let g of[-1,1])le(t,n.steel,[u,.24,g*(c-.04)],[u,.6,g*(c-.04)],.015).name="boarding grab handle"}for(let u of[-1,1])if(F(t,n.edge,[s-.12,.065,.075],[0,1.28,u*(c-.1)],"roof perimeter rail"),f)le(t,n.steel,[-l+.05,.56,u*c],[l-.05,.56,u*c],.019).name="open module side rail";else{let h=e===5?1.1:.62,p=[[-l,.13],[l,.13],[l-.06,h],[-l+.06,h]],g=[];if(e===5)for(let _ of[-s*.25,s*.25])g.push(_t(_-.23,.79,_+.23,1,.035));if(lt(t,n.paint,p,g,(_,m,d)=>[_,m,u*(c-d)]).name="hull shell",e===5)for(let _ of[-s*.25,s*.25])F(t,n.rubber,[.48,.25,.016],[_,.895,u*(c+.008)],"window gasket"),F(t,n.glass,[.43,.2,.017],[_,.895,u*(c+.018)],"protected crew glazing");for(let _ of[-l+.12,l-.12])for(let m of[.22,h-.08])V(t,n.steel,.009,.018,[_,m,u*(c+.028)],"z",.009,6)}for(let u of[-l+.17,l-.17])F(t,n.edge,[.065,.055,r-.14],[u,1.28,0],"roof crossmember");if(!f){for(let u of[-1,1])F(t,n.paint,[s-.16,.047,r*.22],[0,1.31,u*r*.34],"hull shell");F(t,n.paint,[s-.16,.045,r*.3],[0,1.32,0],"hull shell")}}else for(let u of[-1,1])for(let h of[-l+.15,l-.15])F(t,n.steel,[.08,.07,.075],[h,.13,u*(c-.1)],"removable pallet latch"),le(t,n.darkSteel,[h-.035,.18,u*(c-.1)],[h+.035,.18,u*(c-.1)],.012);return F(t,n.edge,[.15,.05,r-.18],[l+.03,.09,0],"boarding threshold"),t}function gx(n,e,t,i,s="x",r="cast transmission casing"){let o=new ci(t.map(([l,c])=>new ce(l,c)),40),a=new De(o,e);return a.position.set(...i),a.rotation[s==="x"?"z":"x"]=Math.PI/2,a.name=r,n.add(a),a}function ad(n,e){let t=Bt("inline diesel power pack"),i=e===5,s=n.castSteel||n.darkSteel,r=n.pressedSteel||n.steel,o=(d,y,M,v,b)=>{let w=new De(new kn(...y,3,v),d);return w.position.set(...M),w.name=b,w.castShadow=w.receiveShadow=!0,t.add(w),w},a=(d,y,M,v,b,w=[])=>{let D=new It;d.forEach(([A,R],C)=>C?D.lineTo(A,R):D.moveTo(A,R)),D.closePath();for(let A of w){let R=new fn;A.forEach(([C,N],B)=>B?R.lineTo(C,N):R.moveTo(C,N)),R.closePath(),D.holes.push(R)}let x=new Yt(D,{depth:y,steps:1,bevelEnabled:!0,bevelSize:.009,bevelThickness:.007,bevelSegments:3}),T=x.attributes.position;for(let A=0;A<T.count;A++)T.setXYZ(A,M+T.getZ(A),T.getY(A),T.getX(A));x.computeVertexNormals();let I=v.clone();I.side=Tt;let U=new De(x,I);return U.name=b,U.castShadow=U.receiveShadow=!0,t.add(U),U},l=(d,y,M,v)=>{let b=Ke(t,d,y,M,32);return b.name=v,b},c=(d,y,M,v="z",b=.042)=>{V(t,s,b,.02,[d,y,M],v,b,24).name="manifold seated port flange"};for(let d of[-.38,.38])F(t,n.edge,[2.17,.09,.085],[-.2,.11,d],"power pack skid rail");for(let d of[-1.08,.77])F(t,n.edge,[.1,.07,e===4?1.35:.85],[d,.13,e===4?-.24:0],"skid crossmember");a([[-.22,.31],[-.26,.4],[-.25,.58],[-.205,.7],[.205,.7],[.25,.58],[.26,.4],[.22,.31]],.96,-.48,n.paint,"cast crankcase with tapered shoulders",[[[-.18,.345],[.18,.345],[.21,.41],[.2,.58],[.165,.677],[-.165,.677],[-.2,.58],[-.21,.41]]]),a([[-.215,.315],[-.215,.265],[-.145,.195],[.145,.195],[.215,.265],[.215,.315]],.85,-.425,s,"pressed deep oil sump",[[[-.185,.298],[.185,.298],[.128,.215],[-.128,.215]]]),o(r,[.91,.025,.46],[0,.317,0],.01,"continuous sump sealing flange"),V(t,n.steel,.018,.026,[.27,.198,0],"y",.018,6).name="seated sump drain plug",o(n.paint,[1,.175,.49],[0,.7875,0],.025,"cast cylinder head with port band"),o(n.darkSteel,[1.018,.019,.455],[0,.881,0],.006,"rocker cover continuous gasket"),o(n.edge,[.99,.126,.438],[0,.948,0],.03,"formed crowned rocker cover");for(let d of[-1,1])o(n.edge,[.92,.019,.02],[0,.976,d*.204],.007,"rocker cover pressed perimeter return");for(let d of[-.4,-.24,-.08,.08,.24,.4])o(n.edge,[.055,.013,.31],[d,1.011,0],.006,"rocker cover pressed transverse stiffener");V(t,n.darkSteel,.037,.029,[.29,1.024,0],"y",.037,24).name="rocker cover seated oil filler cap";for(let d of[-.31,.31]){let y=new De(new Vt(.024,.007,8,20),n.steel);y.position.set(d,.983,.216),y.name="head lifting eye seated tab",t.add(y),F(t,n.edge,[.055,.035,.02],[d,.955,.211],"head lifting eye foot")}for(let d of[-.4,-.24,-.08,.08,.24,.4]){for(let y of[-1,1]){a([[y*.237,.365],[y*.272,.405],[y*.257,.62],[y*.218,.69],[y*.211,.69],[y*.237,.4]],.032,d-.016,n.paint,"cast crankcase buttress"),o(s,[.122,.16,.024],[d,.535,y*.254],.018,"recessed crankcase service cover");for(let M of[.48,.59])V(t,n.steel,.007,.012,[d,M,y*.272],"z",.007,6).name="service cover captive fastener";V(t,n.darkSteel,.009,.022,[d,.902,y*.19],"y",.009,6).name="rocker cover seated fastener"}c(d,.79,.255),c(d,.8,-.255),l(s,[[d,.79,.25],[d,.775,.305],[d+.028,.735,.375]],.033,"exhaust branch into collector"),l(n.paint,[[d,.8,-.25],[d,.815,-.3],[d,.825,-.345]],.036,"intake runner into plenum")}o(n.paint,[.98,.115,.105],[0,.835,-.355],.045,"continuous intake plenum"),l(s,[[-.44,.735,.375],[0,.735,.375],[.43,.735,.375]],.046,"continuous cast exhaust collector");let f=(d,y,M)=>{V(t,y,.104,.09,[d,.755,.49],"x",.117,32).name=M+" backing";let v=[];for(let b=0;b<=40;b++){let w=b/40*Math.PI*2,D=.094+.026*b/40;v.push([d,.755+Math.cos(w)*D,.49+Math.sin(w)*D])}l(y,v,.037,M+" scroll")};f(-.205,s,"turbine housing"),f(-.365,r,"compressor housing"),V(t,n.steel,.057,.12,[-.285,.755,.49],"x",.057,24).name="turbo centre bearing",l(s,[[-.06,.735,.375],[-.16,.79,.398],[-.205,.848,.46]],.043,"collector to turbine inlet"),l(s,[[-.205,.76,.612],[-.205,.91,.65],[-.205,1.075,.65]],.046,"supported exhaust riser"),V(t,n.steel,.053,.012,[-.205,1.052,.65],"y",.053,24).name="exhaust riser seated clamp",le(t,n.edge,[-.205,.89,.65],[-.205,.85,.25],.013).name="exhaust riser support bracket",l(n.steel,[[-.365,.895,.49],[-.1,1.1,.44],[.32,1.09,.3],[.4,1.02,-.16],[.35,.835,-.355]],.055,"compressor delivery to intake plenum");for(let[d,y,M]of[[-.1,1.1,.44],[.32,1.09,.3]])V(t,n.darkSteel,.063,.043,[d,y,M],"x",.063,24).name="charge pipe coupling";V(t,n.darkSteel,.122,.44,[-.085,1.18,-.39],"x",.122,32).name="air cleaner cylindrical shell";for(let d of[-.315,.145])V(t,n.edge,.13,.018,[d,1.18,-.39],"x",.13,32).name="air cleaner retained end cap";for(let d of[-.22,.055])V(t,n.steel,.125,.018,[d,1.18,-.39],"x",.125,32).name="air cleaner mounting band",le(t,n.edge,[d,1.07,-.39],[d,.87,-.355],.018).name="air cleaner plenum bracket";l(n.rubber,[[-.315,1.18,-.39],[-.59,1.16,-.37],[-.61,.96,.23],[-.52,.755,.49],[-.412,.755,.49]],.061,"air cleaner outlet to compressor inlet"),l(n.steel,[[-.275,.745,.49],[-.27,.56,.34],[-.27,.39,.24]],.01,"turbo oil return into crankcase"),gx(t,s,[[0,-.025],[.23,-.025],[.275,0],[.28,.09],[.26,.17],[.225,.24],[0,.24]],[-.48,.425,0],"x","cast flywheel and transmission casing"),o(s,[.405,.36,.4],[-.915,.505,0],.045,"transmission main gear case"),o(s,[.37,.1,.32],[-.895,.313,0],.025,"transmission lower oil pan"),o(r,[.33,.024,.34],[-.905,.699,0],.009,"transmission bolted top service closure");for(let d of[-1,1]){o(s,[.33,.235,.026],[-.915,.507,d*.207],.025,"transmission removable side cover");for(let y of[-1.065,-.905,-.765])for(let M of[.41,.61])V(t,n.steel,.009,.023,[y,M,d*.224],"z",.009,6).name="transmission side cover seated fastener";for(let y of[.37,.445,.535,.63])F(t,s,[.36,.017,.026],[-.915,y,d*.197],"transmission longitudinal casting rib")}for(let d of[-1.085,-.965,-.845,-.745]){F(t,s,[.02,.34,.028],[d,.505,-.192],"transmission vertical casting web"),F(t,s,[.02,.34,.028],[d,.505,.192],"transmission vertical casting web");for(let y of[-1,1])V(t,n.steel,.008,.017,[d,.714,y*.125],"y",.008,6).name="transmission top cover seated fastener"}for(let d of[-.515,-.715,-1.115]){let y=d>-.74?.425:.51;V(t,r,d>-.74?.275:.17,.02,[d,y,0],"x",d>-.74?.275:.17,40).name="transmission machined split flange",Hn(t,n.steel,[d-.015,y,0],d>-.74?.245:.145,8,"x",.009)}V(t,s,.108,.09,[-1.14,.51,0],"x",.108,32).name="transmission rear output bearing housing",V(t,n.steel,.083,.08,[-1.19,.51,0],"x").name="transmission output coupling",V(t,n.steel,.012,.017,[-.89,.708,0],"y",.012,6).name="transmission service filler plug",o(n.darkSteel,[.085,.82,.69],[.8,.665,0],.008,"radiator dark fin substrate");for(let d of[-.389,.389])o(r,[.135,.88,.075],[.8,.665,d],.018,"radiator formed side tank");for(let d of[.215,1.115])o(r,[.135,.08,.84],[.8,d,0],.017,"radiator folded header");for(let d=0;d<36;d++)F(t,r,[.012,.8,.005],[.849,.665,-.333+d*.019],"radiator vertical cooling passage");for(let d=0;d<28;d++)F(t,s,[.008,.005,.68],[.856,.273+d*.029,0],"radiator transverse fin fold");for(let d of[-.388,.388]){F(t,n.edge,[.17,.07,.13],[.8,.178,d],"radiator bolted skid foot");for(let y of[.3,1.04])V(t,n.steel,.01,.019,[.879,y,d],"x",.01,6).name="radiator frame fastener"}let u=new De(new Vt(.291,.019,8,48),n.darkSteel);u.rotation.y=Math.PI/2,u.position.set(.691,.665,0),u.name="open circular cooling fan shroud",t.add(u);for(let d of[-1,1])le(t,n.darkSteel,[.7,.665,d*.291],[.754,.665,d*.34],.023).name="shroud to radiator support";V(t,n.darkSteel,.063,.1,[.651,.665,0],"x",.063,32).name="cooling fan driven hub";for(let d=0;d<7;d++){let y=d*Math.PI*2/7,M=new It;M.moveTo(.045,-.025),M.quadraticCurveTo(.17,-.055,.267,-.01),M.lineTo(.26,.04),M.quadraticCurveTo(.16,.023,.045,.025),M.closePath();let v=new Yt(M,{depth:.013,bevelEnabled:!0,bevelSize:.003,bevelThickness:.002,bevelSegments:2}),b=v.attributes.position;for(let x=0;x<b.count;x++){let T=b.getX(x),I=b.getY(x),U=b.getZ(x);b.setXYZ(x,.647+U+T*.035,.665+Math.cos(y)*T-Math.sin(y)*I,Math.sin(y)*T+Math.cos(y)*I)}v.computeVertexNormals();let w=n.darkSteel.clone();w.side=Tt;let D=new De(v,w);D.name="swept cooling fan blade",D.castShadow=!0,t.add(D)}o(n.paint,[.075,.38,.34],[.516,.515,0],.035,"front timing gear housing"),le(t,s,[.516,.665,0],[.652,.665,0],.041).name="water pump and fan shaft",l(n.rubber,[[.43,.84,.19],[.59,.96,.29],[.64,.965,.389],[.72,.965,.389],[.8,.965,.389]],.04,"upper coolant hose seated into side tank"),l(n.rubber,[[.48,.4,.16],[.6,.26,.29],[.64,.285,.389],[.72,.285,.389],[.8,.285,.389]],.037,"lower coolant hose seated into side tank");for(let d of[.965,.285])V(t,r,.047,.09,[.7275,d,.389],"x",.047,24).name="radiator coolant inlet neck",V(t,n.steel,.049,.024,[.705,d,.389],"x",.049,24).name="coolant hose seated clamp";V(t,r,.08,.135,[.493,.462,-.245],"x",.08,28).name="alternator ventilated body";for(let d=0;d<10;d++){let y=d*Math.PI/5;le(t,s,[.44,.462+Math.cos(y)*.078,-.245+Math.sin(y)*.078],[.546,.462+Math.cos(y)*.078,-.245+Math.sin(y)*.078],.008).name="alternator longitudinal cooling rib"}F(t,n.edge,[.16,.05,.16],[.435,.365,-.205],"alternator seated mounting bracket");let h=(d,y,M)=>{V(t,n.darkSteel,M,.029,[.575,d,y],"x",M,32).name="accessory drive pulley",V(t,n.steel,M*.34,.034,[.579,d,y],"x",M*.34,24).name="pulley seated hub"};le(t,s,[.54,.425,0],[.58,.425,0],.043).name="crank pulley shaft into timing housing",h(.425,0,.106),h(.665,0,.075),h(.462,-.245,.064),l(n.rubber,[[.595,.322,0],[.595,.34,-.195],[.595,.43,-.31],[.595,.515,-.272],[.595,.739,-.024],[.595,.714,.056],[.595,.431,.106],[.595,.322,0]],.009,"continuous accessory drive belt"),o(s,[.16,.09,.17],[.11,.57,-.285],.02,"oil filter connected housing"),V(t,n.lamp,.059,.19,[.11,.434,-.285],"y",.059,28).name="replaceable oil filter canister",V(t,n.steel,.062,.017,[.11,.529,-.285],"y",.062,24).name="oil filter sealing rim",le(t,n.steel,[.34,.39,.24],[.34,.68,.32],.005).name="oil dipstick seated guide",V(t,n.amber,.02,.009,[.34,.69,.325],"z",.02,16).name="dipstick service handle";for(let d of[-.34,.31])for(let y of[-1,1])F(t,n.edge,[.14,.03,.13],[d,.166,y*.38],"engine skid mounting shoe"),V(t,n.rubber,.048,.072,[d,.217,y*.38],"y",.048,24).name="engine mounting isolator",a([[y*.235,.36],[y*.42,.258],[y*.42,.25],[y*.33,.25],[y*.235,.29]],.115,d-.0575,n.paint,"cast engine mounting ear"),V(t,n.steel,.009,.043,[d,.266,y*.38],"y",.009,6).name="engine mount seated retaining bolt";let p=t.children.length;V(t,n.steel,.023,1.025,[0,.425,0],"x",.023,32).name="engine crankshaft main axis";for(let d=0;d<6;d++){let y=-.4+d*.16,M=[0,Math.PI*2/3,Math.PI*4/3,Math.PI*4/3,Math.PI*2/3,0][d],v=.425+Math.cos(M)*.031,b=Math.sin(M)*.031,w=.605+Math.cos(M)*.031,D=new It;D.absarc(0,0,.065,0,Math.PI*2,!1);let x=new fn;x.absarc(0,0,.058,0,Math.PI*2,!0),D.holes.push(x);let T=new Yt(D,{depth:.255,steps:1,bevelEnabled:!1,curveSegments:24}),I=T.attributes.position;for(let R=0;R<I.count;R++)I.setXYZ(R,y+I.getX(R),.448+I.getZ(R),I.getY(R));T.computeVertexNormals();let U=r.clone();U.side=Tt;let A=new De(T,U);A.name="engine cylinder liner",A.userData.inspectionKey="engine:block",t.add(A),V(t,n.steel,.054,.066,[y,w,0],"y",.054,32).name="engine piston crown and skirt";for(let R of[w+.018,w+.027])V(t,n.darkSteel,.055,.004,[y,R,0],"y",.055,32).name="piston compression ring";V(t,n.steel,.014,.102,[y,w-.014,0],"z",.014,24).name="piston seated wrist pin",le(t,r,[y,v,b],[y,w-.014,0],.013).name="engine connecting rod",V(t,n.steel,.019,.105,[y,v,b],"x",.019,24).name="crankshaft offset crankpin";for(let R of[-.055,.055])le(t,s,[y+R,.425,0],[y+R,v,b],.035).name="crankshaft connected web",V(t,s,.049,.023,[y+R,.425-.016*Math.cos(M),-.016*Math.sin(M)],"x",.049,24).name="crankshaft counterweight"}for(let d of[-.48,-.32,-.16,0,.16,.32,.48])V(t,r,.036,.03,[d,.425,0],"x",.036,24).name="crankshaft main bearing journal",F(t,s,[.035,.055,.17],[d,.3815,0],"crankshaft bearing cap");V(t,n.steel,.215,.035,[-.525,.425,0],"x",.215,40).name="engine crankshaft seated flywheel",V(t,n.steel,.024,.59,[-.8175,.425,0],"x",.024,24).name="transmission connected input shaft",V(t,n.steel,.027,.405,[-.9875,.51,0],"x",.027,24).name="transmission connected output shaft";for(let[d,y]of[[.425,0],[.51,Math.PI/16]]){V(t,r,.034,.055,[-.885,d,0],"x",.034,32).name="transmission illustrative meshing gear";for(let M=0;M<16;M++){let v=M*Math.PI/8+y,b=F(t,r,[.055,.014,.011],[-.885,d+Math.cos(v)*.039,Math.sin(v)*.039],"transmission gear seated tooth");b.rotation.x=v}}for(let d of t.children.slice(p))d.userData.inspectionKey??="engine:rotating";let g=t.children.length;le(t,n.steel,[-.47,.933,0],[.47,.933,0],.012).name="head supported rocker shaft";for(let d of[-.4,-.24,-.08,.08,.24,.4]){F(t,s,[.028,.041,.054],[d,.912,0],"rocker shaft seated pedestal");for(let y of[-1,1]){V(t,n.steel,.007,.16,[d,.841,y*.08],"y",.007,16).name="head valve stem",V(t,n.steel,.025,.009,[d,.765,y*.08],"y",.025,24).name="head valve seated disc";let M=[];for(let v=0;v<=40;v++){let b=v/40*Math.PI*10;M.push([d+Math.cos(b)*.013,.866+v/40*.04,y*.08+Math.sin(b)*.013])}l(n.darkSteel,M,.003,"valve retained compression spring"),le(t,r,[d,.934,0],[d,.923,y*.08],.012).name="rocker arm on shaft and valve"}}for(let d of t.children.slice(g))d.userData.inspectionKey="engine:head";l(n.steel,[[-.42,.65,-.288],[.42,.65,-.288]],.012,"supported fuel common rail");for(let d of[-.34,.31])le(t,n.edge,[d,.65,-.288],[d,.6,-.24],.01).name="fuel rail block support";o(s,[.11,.14,.1],[.33,.583,-.265],.018,"seated fuel metering pump"),l(n.rubber,[[.11,.57,-.285],[.22,.565,-.3],[.33,.583,-.265]],.011,"filter housing to fuel metering pump"),l(n.steel,[[.33,.583,-.265],[.35,.65,-.288]],.011,"fuel metering pump to common rail");for(let d of[-.4,-.24,-.08,.08,.24,.4])V(t,s,.016,.034,[d,.881,-.075],"y",.016,20).name="head seated fuel injector",l(n.steel,[[d,.65,-.288],[d,.73,-.29],[d,.89,-.19],[d,.895,-.075]],.005,"common rail feed into injector");if(e===4){o(n.paint,[.76,.68,.4],[-.54,.535,-.78],.05,"long range fuel reservoir");for(let d of[-.79,-.29])F(t,n.darkSteel,[.04,.7,.42],[d,.535,-.78],"fuel tank restraint"),F(t,n.edge,[.18,.06,.45],[d,.17,-.78],"fuel tank supported saddle");V(t,n.steel,.045,.04,[-.54,.889,-.78],"y",.045,24).name="fuel reservoir filler cap",l(n.rubber,[[-.28,.25,-.62],[-.18,.33,-.5],[.11,.5,-.35],[.11,.57,-.285]],.014,"reservoir fuel supply seated at filter housing")}let _=new Map,m=new Set(["cast crankcase with tapered shoulders","pressed deep oil sump","continuous sump sealing flange","cast cylinder head with port band","formed crowned rocker cover","cast flywheel and transmission casing","transmission main gear case","transmission lower oil pan","transmission removable side cover","transmission bolted top service closure","transmission machined split flange"]);for(let d of[...t.children]){m.has(d.name)&&(d.userData.cutawayShell=!0);let y=d.userData.inspectionKey;if(!y){let M=d.name;y=/transmission/.test(M)?"engine:transmission":/sump/.test(M)?"engine:sump":/rocker|head lifting|head seated fuel/.test(M)||/cylinder head|manifold seated port|intake runner|exhaust branch/.test(M)?"engine:head":/radiator|cooling fan|shroud|coolant|water pump/.test(M)?"engine:cooling":/air cleaner|compressor housing|compressor delivery|charge pipe/.test(M)?"engine:intake":/turbine|turbo|exhaust/.test(M)?"engine:exhaust":/skid|mounting shoe|mounting isolator|mount seated/.test(M)?"engine:skid":/fuel|filter|dipstick|reservoir|alternator|pulley|accessory|timing/.test(M)?"engine:services":"engine:block"}if(!_.has(y)){let M=Bt(y);M.userData.inspectionKey=y,_.set(y,M),t.add(M)}_.get(y).add(d)}return i&&t.scale.setScalar(.78),t}function Dc(n,{wheels:e=!1,light:t=!1,adaptive:i=!1,springs:s=!1}={}){let r=Bt("connected drive axle"),o=t?1.3:1.65,a=.44,l=t?.13:.19,c=new De(new hi(l,32,20),n.paint);c.scale.set(1.18,1,1.05),c.position.set(0,a,0),c.name="cast differential housing",r.add(c),V(r,n.darkSteel,l*.9,.055,[l*.8,a,0],"x",l*.9,32),V(r,n.steel,.065,.17,[l*1.2,a,0],"x");for(let f of[-1,1]){le(r,n.paint,[0,a,f*.07],[0,a,f*o*.43],t?.043:.068);for(let h=0;h<5;h++)V(r,n.rubber,t?.06:.09,.045,[0,a,f*(.24+h*.05)],"z",t?.06:.09,24);if(V(r,n.steel,.16,.045,[0,a,f*o*.47],"z",.16,32),V(r,n.darkSteel,.1,.1,[0,a,f*o*.46],"z"),e){let h=Is(n);h.scale.setScalar(t?.56:.76),h.position.set(0,a,f*o*.49),r.add(h)}else Hn(r,n.steel,[0,a,f*(o*.47+.03)],.115,8,"z",.014);let u=f*o*.29;if(le(r,n.edge,[-.28,a+.03,u],[.12,a+.41,u],t?.025:.043),le(r,n.edge,[.28,a+.03,u],[.12,a+.41,u],t?.025:.043),F(r,n.edge,[.16,.095,.15],[.12,a+.43,u],"suspension upper mount"),s){le(r,n.steel,[-.1,a+.03,u],[-.1,a+.58,u],.022);let h=[];for(let p=0;p<=144;p++){let g=p/144*Math.PI*16;h.push([-.1+Math.cos(g)*.074,a+.09+p/144*.4,u+Math.sin(g)*.074])}Ke(r,n.darkSteel,h,.015,144),V(r,n.amber,.034,.32,[.12,a+.18,u]),le(r,n.steel,[.12,a+.34,u],[.12,a+.61,u],.018)}}le(r,n.darkSteel,[-.21,a-.07,-o*.42],[-.21,a-.07,o*.42],.023);for(let f of[-1,1])le(r,n.darkSteel,[-.21,a-.07,f*o*.42],[0,a,f*o*.45],.023);if(i){F(r,n.steel,[.37,.1,.34],[0,a+.23,0],"traction controller");for(let f of[-1,1])Ke(r,n.rubber,[[0,a+.23,f*.12],[.19,a+.18,f*.2],[.14,a-.15,f*.42],[0,a,f*o*.45]],.015,28)}return r}function _x(n,e){if(e!==2)return Dc(n,{wheels:e===1,adaptive:e===6,springs:e===1});let t=Dc(n,{wheels:!0,light:!0,springs:!0});t.name="lightweight running gear";for(let i of[-.3,.3])F(t,n.paint,[.075,.09,.83],[i,.22,0],"lightweight cradle crossmember");for(let i of[-.4,.4])F(t,n.paint,[.67,.09,.07],[0,.22,i],"lightweight cradle side rail");return t}function xx(n){return Dc(n,{springs:!0})}function ld(n,e){let t=Bt("weapon station");V(t,n.edge,.37,.12,[0,.06,0]),V(t,n.paint,.28,.27,[0,.25,0]),F(t,n.paint,[.6,.42,.5],[0,.49,0]);let i=[.68,1.05,1.6,.74,.65,1.14,1.04][e],s=e===6?2:1;for(let r=0;r<s;r++){let o=s===2?(r-.5)*.44:0;F(t,n.edge,[.44,.17,.17],[.18,.7,o]),V(t,n.darkSteel,e===2?.055:.032,i,[.45+i/2,.7,o],"x"),V(t,n.darkSteel,.07,.15,[.45+i,.7,o],"x"),V(t,n.rubber,.03,.003,[.53+i,.7,o],"x")}F(t,n.paint,[.34,.35,.34],[-.15,.51,-.39]);for(let r of[-.2,.2])Hn(t,n.steel,[r,.45,.27],.055,5);if([3,5].includes(e)){let r=ja(n,0);r.scale.setScalar(.42),r.position.set(-.1,.73,.29),t.add(r)}return t}function yx(n,e){let t=Bt("protection kit"),i=(r,o,a=n.paint,l="formed protection panel")=>{let c=lt(t,a,r,[],(f,u,h)=>[f,u,o+h]);return c.name=l,c},s=(r,o,a)=>{V(t,n.steel,.016,.035,[r,o,a],"z",.016,6).name="protection attachment bolt",V(t,n.darkSteel,.024,.008,[r,o,a-.015],"z").name="attachment washer"};if([3,6].includes(e)){let r=e===3?.67:.77,o=e===3?1.7:2.3,a=-o/2,l=o/2,c=e===3?1.38:1.3;if(e===3){F(t,n.edge,[o,.024,r*2],[0,.083,0],"crew cell cassette deck");for(let A of[-1,1]){F(t,n.darkSteel,[o,.12,.12],[0,.015,A*.55],"crew cell longitudinal floor sill");for(let R of[-.61,.61]){F(t,n.darkSteel,[.16,.08,.12],[R,-.08,A*.55],"crew cell attachment pedestal"),V(t,n.rubber,.067,.035,[R,-.1375,A*.55],"y",.067,24).name="crew cell mounting isolator",F(t,n.steel,[.2,.025,.18],[R,-.1675,A*.55],"crew cell attachment shoe");for(let C of[-.065,.065])V(t,n.steel,.01,.03,[R+C,-.146,A*.55],"y",.01,6).name="crew cell shoe retaining bolt"}}for(let A of[-.27,.09])F(t,n.darkSteel,[.085,.1,1.14],[A,.025,0],"crew cell seat load crossmember");for(let A of[a+.065,l-.065])F(t,n.darkSteel,[.13,.1,1.14],[A,.025,0],"crew cell cassette end member")}else F(t,n.edge,[o,.09,r*2],[0,.045,0],"reinforced floor");let f=c-.22,u=r-.13,h=A=>A<=f?r-.065*(A-.09)/(f-.09):r-.065-.065*Math.min(1,(A-f)/(c-f)),p=n.paint.clone();p.color.set("#a0a58e"),p.metalness=.04,p.roughness=.86,p.name="crew cell interior lining";let g=n.edge.clone();g.color.set("#414b3e"),g.roughness=.7;let _=(A,R)=>(A.name="hull shell",A.userData.component=R,A),m=(A,R,C,N,B,H,ee=.018)=>{let J=new It;C.forEach(([ge,ie],fe)=>fe?J.lineTo(ge,ie):J.moveTo(ge,ie)),J.closePath(),J.holes.push(...N);let X=new Yt(J,{depth:ee,steps:1,curveSegments:12,bevelEnabled:!0,bevelSize:.0025,bevelThickness:.002,bevelSegments:3}),K=X.attributes.position;for(let ge=0;ge<K.count;ge++)K.setXYZ(ge,...B(K.getX(ge),K.getY(ge),K.getZ(ge)));X.computeVertexNormals();let q=R.clone();q.side=Tt;let ae=new De(X,q);return ae.name=H,ae.castShadow=!0,ae.receiveShadow=!0,A.add(ae),ae},d=(A,R,C)=>{let[N,B,H,ee]=A,J=_t(N,B,H,ee,.045),X=J.getPoints(12).map(q=>[q.x,q.y]);_(m(t,n.paint,_t(N-.052,B-.052,H+.052,ee+.052,.075).getPoints(12).map(q=>[q.x,q.y]),[J.clone()],(q,ae,ge)=>R(q,ae,.015+ge),"window outer retaining bezel"),"window outer retaining bezel"),m(t,n.rubber,_t(N-.012,B-.012,H+.012,ee+.012,.057).getPoints(12).map(q=>[q.x,q.y]),[_t(N+.018,B+.018,H-.018,ee-.018,.027)],(q,ae,ge)=>R(q,ae,-.02+ge),"window compression gasket",.056);let K=m(t,y,X,[],(q,ae,ge)=>R(q,ae,-.014-ge*.2),C,.012);K.castShadow=!1,_(m(t,g,_t(N-.042,B-.042,H+.042,ee+.042,.07).getPoints(12).map(q=>[q.x,q.y]),[J.clone()],(q,ae,ge)=>R(q,ae,-.057-ge),"window interior retaining frame"),"window interior retaining frame")},y=n.glass.clone();y.transparent=!0,y.opacity=.58,y.metalness=0,y.depthWrite=!1;let M=(A,R,C="cell flange retaining fastener")=>{let N=new P(...R(0)),B=new P(...R(.01)).sub(N).normalize(),H=V(A,n.steel,.02,.004,N.clone().addScaledVector(B,.002).toArray(),"y",.02,24);H.quaternion.setFromUnitVectors(new P(0,1,0),B),H.name="cell flange seated washer";let ee=V(A,n.darkSteel,.012,.009,N.clone().addScaledVector(B,.0085).toArray(),"y",.012,6);ee.quaternion.copy(H.quaternion),ee.name=C};for(let A of[-1,1]){let R=[[a,.09],[l,.09],[l-.25,c-.08],[l-.42,c],[a+.07,c]],C=_t(a+.2,.85,l-.48,c-.13,.045);lt(t,n.paint,R,[C],(N,B,H)=>[N,B,A*(h(B)-H)]),_(lt(t,p,[[a+.09,.17],[l-.07,.17],[l-.3,c-.13],[a+.09,c-.09]],[C],(N,B,H)=>[N,B,A*(h(B)-.067-H*.25)]),"interior liner"),d([a+.2,.85,l-.48,c-.13],(N,B,H)=>[N,B,A*(h(B)+H)],"protected glazing");for(let N of[a+.13,l-.38])Ke(t,g,[[N,.13,A*(h(.13)-.065)],[N,f,A*(h(f)-.065)],[N,c-.065,A*(h(c-.065)-.065)]],.025,16).name="interior shell rib";_(lt(t,g,[[a+.2,.23],[l-.2,.23],[l-.25,.71],[a+.2,.71]],[],(N,B,H)=>[N,B,A*(h(B)+.014+H*.2)]),"lower service panel recess"),_(lt(t,n.paint,[[a+.23,.26],[l-.24,.26],[l-.28,.68],[a+.23,.68]],[],(N,B,H)=>[N,B,A*(h(B)+.03+H*.2)]),"lower formed service panel"),Ke(t,n.darkSteel,[[a+.14,.17,A*(h(.17)-.09)],[a+.14,.72,A*(h(.72)-.09)],[l-.32,.72,A*(h(.72)-.09)]],.012,24).name="secured interior cable conduit";for(let N of[a+.26,l-.36])lt(t,p,[[N-.05,.3],[N+.05,.3],[N+.05,.6],[N-.05,.6]],[],(B,H,ee)=>[B,H,A*(h(H)-.08+ee*.25)]).name="interior panel retaining strip";for(let N of[a+.12,l-.2])s(N,.2,A*(r+.02));if(m(t,n.paint,[[a,.085],[l-.03,.085],[l-.03,.19],[a,.19]],[],(N,B,H)=>[N,B,A*(r-.026+H)],"formed crew cell lower sill",.03),e===3){for(let N of[a+.28,-.1,l-.32])for(let B of[.285,.655])M(t,H=>[N,B,A*(h(B)+.04+H)],"service cover retaining fastener");for(let N of[a+.18,-.1,l-.32])M(t,B=>[N,.14,A*(r+.006+B)],"lower sill flange retaining fastener");for(let N of[a+.14,l-.39]){let B=[[N-.036,.135],[N+.036,.135],[N+.036,f-.015],[N+.025,c-.092],[N-.025,c-.092],[N-.036,f-.015]];m(t,g,B,[],(H,ee,J)=>[H,ee,A*(h(ee)-.087-J)],"crew cell formed interior pillar",.033),F(t,g,[.13,.028,.16],[N,.135,A*(r-.115)],"interior pillar foot flange")}}}let v=A=>l-(A-.09)*.25/(c-.17),b=_t(-r+.16,.85,r-.16,c-.18);if(lt(t,n.paint,[[-r,.09],[r,.09],[r,c-.08],[-r,c-.08]],[b],(A,R,C)=>[v(R)-C,R,A*h(R)/r]),d([-r+.16,.85,r-.16,c-.18],(A,R,C)=>[v(R)+C,R,A*h(R)/r],"protected windshield"),e===3){let A=[[-r+.16,.255],[r-.16,.255],[r-.2,.68],[-r+.2,.68]];_(m(t,g,A,[],(R,C,N)=>[v(C)+.009+N*.25,C,R*h(C)/r],"front closure perimeter backing",.018),"front closure perimeter backing"),_(m(t,n.paint,[[-r+.18,.275],[r-.18,.275],[r-.22,.66],[-r+.22,.66]],[],(R,C,N)=>[v(C)+.018+N*.25,C,R*h(C)/r],"formed front service closure",.018),"formed front service closure");for(let R of[-r+.235,r-.235])for(let C of[.315,.62])M(t,N=>[v(C)+.0225+N,C,R*h(C)/r],"front closure retaining fastener")}let w=[[a+.07,-u],[l-.42,-u],[l-.32,-u+.1],[l-.32,u-.1],[l-.42,u],[a+.07,u],[a,u-.075],[a,-u+.075]],D=[];for(let A=0;A<=16;A++){let R=-u+A*u/8;D.push([R,c-.015+.018*(1-(R/u)**2)])}for(let A=16;A>=0;A--){let[R,C]=D[A];D.push([R,C-.028])}_(m(t,n.paint,D,[],(A,R,C)=>[a+.07+C,R,A],"crowned formed cell roof",o-.43),"formed cell roof"),_(lt(t,p,w,[],(A,R,C)=>[A,c-.061-C*.25,R]),"insulated roof liner");for(let A of[-1,1]){let R=[[a+.065,f+.075],[l-.36,f+.075],[l-.42,c-.018],[a+.065,c-.018]];_(lt(t,n.paint,R,[],(C,N,B)=>[C,N,A*(h(N)+.012+B*.35)]),"formed roof shoulder cap"),F(t,g,[o-.5,.075,.1],[-.16,c-.056,A*(u-.05)],"roof perimeter box stiffener"),F(t,n.paint,[o-.54,.036,.095],[-.16,c+.024,A*(u-.06)],"roof shoulder mounting flange");for(let C of[a+.19,l-.49])F(t,g,[.13,.035,.14],[C,c+.049,A*(u-.085)],"roof flange attachment pad"),V(t,n.steel,.014,.017,[C,c+.075,A*(u-.085)],"y",.014,6).name="roof attachment fastener"}for(let A of[a+.16,l-.45])F(t,g,[.075,.063,u*2-.09],[A,c-.056,0],"connected roof transverse box member");F(t,n.paint,[.18,.09,u*2],[l-.33,c-.055,0],"folded windshield header");let x=[[-r+.105,.18],[r-.105,.18],[r-.105,c-.31],[u-.075,c-.13],[-u+.075,c-.13],[-r+.105,c-.31]],T=new fn;if(x.forEach(([A,R],C)=>C?T.lineTo(A,R):T.moveTo(A,R)),T.closePath(),lt(t,n.paint,[[-r,.09],[r,.09],[r,c-.26],[u,c],[-u,c],[-r,c-.26]],[T],(A,R,C)=>[a+C,R,A]),e===3){let A=[[-r+.018,.108],[r-.018,.108],[r-.018,c-.267],[u-.012,c-.018],[-u+.012,c-.018],[-r+.018,c-.267]];_(m(t,n.paint,A,[T.clone()],(R,C,N)=>[a-.026+N,C,R],"boarding aperture bolted perimeter flange",.042),"boarding aperture bolted perimeter flange");for(let R of[-1,1])for(let C of[.26,.52,.8,1.035])M(t,N=>[a-.026-N,C,R*(r-.052)],"boarding perimeter retaining fastener");for(let R of[-.4,-.2,0,.2,.4])M(t,C=>[a-.026-C,.13,R],"boarding lower flange retaining fastener");for(let R of[-.36,-.18,0,.18,.36])M(t,C=>[a-.026-C,c-.062,R],"boarding header flange retaining fastener")}for(let A=0;A<x.length;A++){let[R,C]=x[A],[N,B]=x[(A+1)%x.length],H=new P(a+.077,(C+B)/2,(R+N)/2),ee=new P(0,B-C,N-R);F(t,g,[.095,ee.length()+.028,.052],H.toArray(),"rear aperture structural ring").quaternion.setFromUnitVectors(new P(0,1,0),ee.normalize())}let I=Bt("rear aperture weather seal");t.add(I);let U=x.map(([A,R])=>[a-.007,R,A]);for(let A=0;A<U.length;A++){le(I,n.rubber,U[A],U[(A+1)%U.length],.018).name="aperture gasket edge";let R=new De(new hi(.018,12,8),n.rubber);R.position.set(...U[A]),R.name="aperture gasket corner",R.castShadow=!0,R.receiveShadow=!0,I.add(R)}for(let A of[-1,1])Ke(t,g,[[a+.059,.15,A*(r-.065)],[a+.059,c-.29,A*(r-.065)],[a+.059,c-.065,A*(u-.045)]],.027,24).name="rear door jamb reinforcement",Ke(t,n.steel,[[a-.022,.46,A*(r-.04)],[a-.09,.46,A*(r-.04)],[a-.09,.77,A*(r-.04)],[a-.022,.77,A*(r-.04)]],.016,24).name="connected boarding grab handle";for(let A of[-.25,.25])F(t,n.lamp,[.17,.024,.075],[a+.24,c-.087,A],"interior overhead light");if(F(t,n.darkSteel,[o-.2,.026,r*2-.17],[0,.108,0],"non slip crew floor insert"),e===3){let A=Bt("open crew cell boarding door"),R=2*(r-.105),C=-r+.105;A.position.set(a-.014,0,C),A.rotation.y=-Math.PI*.56,t.add(A);let N=[[0,.19],[R,.19],[R,c-.32],[R-.105,c-.14],[.105,c-.14],[0,c-.32]],B=[[.105,.3],[R-.105,.3],[R-.105,c-.37],[R-.18,c-.25],[.18,c-.25],[.105,c-.37]],H=new fn;B.forEach(([X,K],q)=>q?H.lineTo(X,K):H.moveTo(X,K)),H.closePath(),_(m(A,n.paint,N,[H],(X,K,q)=>[-.045+q,K,X],"open boarding door outer skin",.025),"open boarding door outer skin"),_(lt(A,p,[[.065,.26],[R-.065,.26],[R-.065,c-.35],[R-.15,c-.21],[.15,c-.21],[.065,c-.35]],[],(X,K,q)=>[.024+q*.25,K,X]),"open boarding door interior liner");for(let X=0;X<B.length;X++){let[K,q]=B[X],[ae,ge]=B[(X+1)%B.length],ie=new P(0,ge-q,ae-K),fe=F(A,n.paint,[.048,ie.length()+.005,.017],[-.02,(q+ge)/2,(K+ae)/2],"door pressed recess return");fe.quaternion.setFromUnitVectors(new P(0,1,0),ie.normalize()),_(fe,"door pressed recess return")}_(m(A,n.paint,B,[],(X,K,q)=>[.004+q*.4,K,X],"boarding door formed face panel",.018),"boarding door formed face panel");for(let X of[.06,R-.06])F(A,g,[.07,c-.49,.065],[.017,(c+.03)/2,X],"door perimeter upright return");for(let X of[.245,c-.235])F(A,g,[.07,.065,R-.13],[.017,X,R/2],"door transverse return");F(A,g,[.05,.05,R-.18],[.062,.49,R/2],"door inner reinforcing rib");for(let X of[.38,.96]){V(t,n.steel,.029,.13,[a-.016,X,C],"y",.029,20).name="boarding door hinge pin",F(t,g,[.08,.1,.065],[a+.007,X,C-.025],"boarding hinge fixed leaf"),F(A,g,[.07,.1,.09],[.012,X,.035],"boarding hinge moving leaf");for(let K of[-.047,0,.047])V(A,g,.035,.038,[0,X+K,0],"y",.035,24).name="boarding hinge barrel knuckle";for(let K of[-.062,.062])V(t,n.darkSteel,.038,.013,[a-.014,X+K,C],"y",.038,24).name="boarding hinge pin end collar";for(let K of[-.029,.029])M(t,q=>[a-.033-q,X+K,C-.046],"fixed hinge leaf retaining fastener"),M(A,q=>[.047+q,X+K,.061],"moving hinge leaf retaining fastener")}Ke(A,n.steel,[[.061,.64,R-.14],[.105,.64,R-.14],[.105,.8,R-.14],[.061,.8,R-.14]],.013,20).name="door interior pull handle",F(A,n.darkSteel,[.08,.105,.07],[.064,.7,R-.08],"boarding door latch housing");let ee=R-.085;for(let X of[.4,1.025])F(A,g,[.048,.07,.06],[.075,X,ee],"door latch rod guide"),V(A,n.steel,.009,Math.abs(X-.7),[.094,(X+.7)/2,ee],"y",.009,16).name="guided boarding latch linkage",F(A,n.steel,[.026,.045,.055],[.086,X,ee],"boarding latch cam");for(let X of[.16,R-.16])for(let K of[.3,c-.29])M(A,q=>[.03+q,K,X],"door liner retaining fastener");F(A,g,[.018,.23,.1],[-.07,.7,R-.08],"exterior latch backing plate"),V(A,n.steel,.021,.055,[-.061,.7,R-.08],"x",.021,16).name="external latch spindle",F(A,n.steel,[.022,.04,.135],[-.092,.7,R-.13],"exterior boarding latch lever");for(let X of[.62,.78])V(A,n.steel,.009,.018,[-.079,X,R-.08],"x",.009,6).name="latch backing plate fastener";let J=new P(.035,.42,.24).applyEuler(A.rotation).add(A.position);le(t,g,[a+.015,.42,C+.1],J.toArray(),.013).name="open door restraint arm",F(t,n.darkSteel,[.07,.11,.045],[a+.025,.7,r-.105],"boarding latch keeper")}if(e===3){for(let A of[-1,1])od(t,n,-.1,A*.32,!0);F(t,n.edge,[.18,.055,1.1],[a-.08,.12,0],"boarding threshold"),F(t,n.paint,[.055,.13,1.14],[a-.015,.06,0],"formed boarding sill return")}else for(let A of[a+.26,l-.48])le(t,n.edge,[A,c-.06,-u+.07],[A,c-.06,u-.07],.027).name="roof hoop";if(e!==3)for(let A of[-1,1])for(let R of[.35,1.02])F(t,n.darkSteel,[.045,.1,.06],[a+.025,R,A*(r-.055)],"rear aperture hinge")}else if(e===5){for(let r of[-1,1]){lt(t,n.paint,[[-.92,.02],[.92,.02],[1.04,.18],[.9,.48],[-.9,.48],[-1.04,.18]],[],(o,a,l)=>[o,.12+a*.42+l,r*a*1.55]).name="V underbody plate",F(t,n.edge,[1.82,.075,.08],[0,.39,r*.67],"underbody mounting rail");for(let o of[-.65,.65])le(t,n.darkSteel,[o,.3,r*.58],[o,.44,r*.58],.032).name="energy absorbing mount",V(t,n.rubber,.047,.075,[o,.41,r*.58]),V(t,n.steel,.018,.055,[o,.455,r*.58],"y",.018,6).name="underbody attachment bolt"}le(t,n.edge,[-.94,.12,0],[.94,.12,0],.025).name="V keel joint"}else{let r=e===4||e===2?3:1,o=r===1?1.55:.57;for(let a of[.18,.79])F(t,n.edge,[r===1?1.5:1.93,.055,.06],[0,a,-.1],"protection mounting rail");for(let a=0;a<r;a++){let l=(a-(r-1)/2)*.66,c=[[l-o/2,.12],[l+o/2-.08,.12],[l+o/2,.23],[l+o/2,.77],[l+o/2-.1,.9],[l-o/2+.08,.9],[l-o/2,.8]];if(e===0)i(c,0,n.darkSteel,"inner support plate"),i(c,.18,n.paint,"outer spaced plate");else if(e===1){let u=n.paint.clone();u.color.set("#c5c0a9"),u.metalness=0,u.roughness=.94,i(c,0,n.darkSteel,"composite backing"),i(c,.045,u,"ceramic core"),i(c,.09,n.paint,"composite outer plate")}else{let u=i(c,.055,n.paint,e===2?"light formed panel":"replaceable side skirt");if(e===2){let h=u.geometry.attributes.position;for(let p=0;p<h.count;p++)h.setZ(p,h.getZ(p)+.032*Math.sin((h.getY(p)-.12)/.78*Math.PI));u.geometry.computeVertexNormals()}}let f=e===0?.235:e===1?.145:.115;for(let u of[-o*.36,o*.36])for(let h of[.23,.77])le(t,n.darkSteel,[l+u,h,-.09],[l+u,h,f],.015).name="panel standoff",s(l+u,h,f)}}return t}function cd(n,e){let t=Bt("radio suite"),i=e===1?3:e===6?2:1;for(let s=0;s<i;s++){let r=(s-(i-1)/2)*.4;F(t,n.paint,[.35,.46,.23],[r,.29,0]),F(t,n.glass,[.2,.09,.014],[r,.4,.125]);for(let o=0;o<4;o++)V(t,n.darkSteel,.026,.027,[r-.09+o*.06,.26,.135],"z");le(t,n.darkSteel,[r+.1,.5,0],[r+.1,1.1+(e===4?.6:0)+s*.13,0],.009),Ke(t,n.rubber,[[r-.08,.2,.12],[r-.2,.09,.22],[r-.15,.06,.35],[r+.17,.1,.3]],.012)}if([3,4].includes(e)){let s=1.65+e*.12;le(t,n.paint,[.42,.1,-.28],[.42,s,-.28],.028);for(let r of[-1,1])le(t,n.darkSteel,[.42,s*.8,-.28],[.42+r*.55,.02,-.28+r*.45],.006);if(e===3){let r=new De(new hi(.3,20,12,0,Math.PI*2,0,Math.PI/2),n.paint);r.rotation.x=Math.PI/2,r.position.set(.42,s,-.28),t.add(r)}}return t}function ja(n,e){let t=Bt("sensor suite");V(t,n.edge,.17,.1,[0,.05,0]),le(t,n.paint,[0,.1,0],[0,e===3?1.65:.35,0],.05);let i=e===3?1.75:.43;F(t,n.paint,[.4,.24,.22],[0,i,0]);for(let s of[-.105,.105])V(t,n.darkSteel,.078,.05,[s,i,.14],"z"),V(t,n.glass,.058,.012,[s,i,.172],"z");if((e===1||e===5)&&(F(t,n.paint,[.26,.22,.22],[.26,i-.05,0]),V(t,n.glass,.075,.025,[.26,i-.05,.13],"z")),e===3||e===6)for(let s of[-1,1])le(t,n.darkSteel,[0,.37,0],[s*.35,0,.25],.017);if(e===4){let s=new De(new hi(.28,24,12,0,Math.PI*2,0,Math.PI*.64),n.paint);s.position.set(0,.4,-.2),t.add(s)}if(e===6)for(let s of[-.5,.5]){let r=ja(n,3);r.scale.setScalar(.54),r.position.set(s,0,-.25),t.add(r)}return t}function hd(n){let e=Bt("clearance roller");F(e,n.paint,[1.1,.12,.35],[0,.48,-.1]);for(let t of[-.45,.45])le(e,n.edge,[t,.48,-.3],[t,.16,.32],.032).name="clearance roller trailing arm",V(e,n.darkSteel,.17,.13,[t,.17,.34],"x");for(let t=0;t<7;t++){let i=-.45+t*.15;V(e,n.paint,.14,.095,[i,.17,.34],"x"),Hn(e,n.steel,[i+.05,.17,.34],.1,8,"x",.013)}return e}function vx(n,e){if([0,5].includes(e))return zr(n);if([2,4].includes(e))return hd(n);let t=Bt("field equipment");if(e===1){F(t,n.paint,[1.4,.14,.85],[0,.39,0]);for(let i of[-1,1]){let s=Is(n);s.scale.setScalar(.5),s.position.set(-.15,.3,i*.43),t.add(s)}le(t,n.edge,[.7,.38,-.25],[1.28,.38,0],.036),le(t,n.edge,[.7,.38,.25],[1.28,.38,0],.036),F(t,n.paint,[1.33,.4,.8],[0,.64,0])}else{F(t,n.edge,[1.15,.06,.65],[0,.03,0]);for(let i=0;i<3;i++)F(t,n.paint,[.29,.35,.47],[-.37+i*.37,.24,0]),F(t,n.steel,[.14,.025,.018],[-.37+i*.37,.34,.25]);if(e===6)for(let i of[-.55,.55])le(t,n.darkSteel,[i,0,0],[i,.65,0],.025)}return t}function Sx(n,e){let t=Bt("engineering review");F(t,n.edge,[1.3,.065,.78],[0,.7,0]);for(let s of[-.54,.54])for(let r of[-.3,.3])le(t,n.darkSteel,[s,0,r],[s,.69,r],.023);F(t,n.darkSteel,[.95,.68,.055],[0,1.14,-.24]),F(t,n.lamp,[.88,.61,.02],[0,1.14,-.205]);let i=[n.paint,n.amber,n.glass][e%3];for(let s=0;s<4;s++)F(t,i,[.11+(s+e)%4*.035,.032,.013],[-.22+e%2*.08,.95+s*.115,-.188]),F(t,n.edge,[.16,.016,.013],[.18,.95+s*.115,-.187]);if(F(t,n.lamp,[.35,.017,.27],[-.34,.75,.18]),F(t,n.glass,[.27,.018,.19],[.36,.75,.18]),V(t,n.steel,.046,.11,[.54,.8,-.09]),[2,7,10,12,15].includes(e))for(let s=0;s<3;s++)F(t,i,[.09,.09,.08],[-.27+s*.27,1.5,-.19]),s<2&&le(t,n.darkSteel,[-.22+s*.27,1.5,-.19],[-.08+s*.27,1.5,-.19],.008);if([3,11,16,17,20].includes(e)){let s=ad(n,0);s.scale.setScalar(.22),s.position.set(0,.74,.08),t.add(s)}return t}function Nc(n,e=zi()){if(!rd.includes(n))throw new Error("Unknown 3D asset: "+n);let t=n==="TRAIN-CAP"?"CAP-C":n,[i,s]=t.split("-"),r=s.charCodeAt(0)-65,a=Lc({CAP:()=>mx(e,r),MOB:()=>r===3?xx(e):[1,2,6].includes(r)?_x(e,r):ad(e,r),FP:()=>ld(e,r),PRO:()=>yx(e,r),COM:()=>cd(e,r),SA:()=>ja(e,r),ACC:()=>vx(e,r),SE:()=>Sx(e,r)}[i](),e,i,r);return a.name=n,a.userData={assetId:n,illustrative:!0,units:"metres"},a}function Uc(n,e=zi()){if(!px.includes(n))throw new Error("Unknown 3D mission: "+n);let t=sd(n,e);t.name=n,t.userData.mission=n;let i=t.userData.roof||2.75;if(n==="COMBAT"||n==="MINE"){let s=ld(e,n==="COMBAT"?2:1);s.name="mission weapon",s.position.set(-.35,i,0),t.add(s)}if(n==="RECCE"){let s=ja(e,3);s.name="mission sensor",s.position.set(-1,i,-.48),t.add(s)}if(n==="COMMAND"){let s=cd(e,4);s.name="mission radio",s.position.set(-1.5,i,-.4),t.add(s)}if(n==="TROOP"&&Mx(t,e),n==="MINE"){let s=hd(e);s.name="mission roller",s.scale.setScalar(1.9),s.rotation.y=Math.PI/2,s.position.set(4.45,.1,0),t.add(s),bx(t,e,s)}return Si(t)}function Mx(n,e){let t=-n.userData.length/2,i=l=>t+(l-1.2)*.17/1.16,s=Bt("troop boarding ramp");s.userData.inspectionKey="body",n.add(s);let r=_t(-.74,1.34,.74,2.23,.045),o=_t(-.8,1.28,.8,2.29,.07).getPoints(12).map(l=>[l.x,l.y]);lt(n,e.edge,o,[r.clone()],(l,c,f)=>[i(c)-.004-f,c,l]).userData.component="troop ramp aperture retaining frame",lt(n,e.rubber,_t(-.756,1.316,.756,2.246,.06).getPoints(12).map(l=>[l.x,l.y]),[_t(-.695,1.346,.695,2.196,.025)],(l,c,f)=>[i(c)-.004-f*.75,c,l]).name="troop ramp continuous compression seal";let a=lt(s,e.paint,_t(-.72,1.33,.72,2.215,.035).getPoints(12).map(l=>[l.x,l.y]),[],(l,c,f)=>[i(c)-.016-f,c,l]);a.name="rear ramp",a.userData.cutawayShell=!0;for(let l of[-1,1])F(n,e.darkSteel,[.22,.105,.16],[t+.085,1.3,l*.54],"troop ramp chassis hinge bracket"),V(s,e.steel,.035,.17,[i(1.338)-.042,1.338,l*.54],"z",.035,24).name="troop ramp seated hinge barrel",V(n,e.darkSteel,.014,.23,[i(1.338)-.042,1.338,l*.54],"z",.014,24).name="troop ramp retained hinge pin",le(s,e.edge,[i(1.41)-.064,1.41,l*.58],[i(2.16)-.064,2.16,l*.58],.018).name="troop ramp supported outer stiffener",V(s,e.darkSteel,.02,.02,[i(2.16)-.063,2.16,l*.59],"x",.02,6).name="troop ramp seated latch";for(let l of[1.47,1.62,1.77,1.92,2.07])le(s,e.edge,[i(l)-.012,l,-.61],[i(l)-.012,l,.61],.01).name="troop ramp interior tread return"}function bx(n,e,t){let i=n.userData.length/2,s=Bt("mine roller carrier integration frame");s.userData.inspectionKey="chassis",n.add(s),t.updateMatrix();for(let r of[-1,1]){let o=new P(-r*.45,.48,-.3).applyMatrix4(t.matrix);F(s,e.darkSteel,[.24,.2,.28],[i-.26,.89,r*.64],"mine roller chassis bearing"),F(s,e.edge,[.25,.1,.36],[i-.26,.94,r*.78],"mine roller pivot bearing cross shoe");for(let l of[r*.74,r*.9])F(s,e.edge,[.16,.22,.035],[i-.22,.99,l],"mine roller seated pivot cheek");V(s,e.steel,.026,.3,[i-.22,1,r*.79],"z",.026,24).name="mine roller retained chassis pivot";let a=Bt("mine roller chassis-connected linkage");a.userData.inspectionKey="front",n.add(a),lt(a,e.paint,[[i-.3,.93],[o.x+.04,o.y-.07],[o.x+.04,o.y+.062],[i-.28,1.085]],[],(l,c,f)=>[l,c,o.z-.02+f]).name="mine roller continuous draw arm",V(a,e.darkSteel,.049,.1,[i-.22,1,r*.855],"z",.049,24).name="mine roller draw arm pivot bushing",V(a,e.steel,.034,.12,o.toArray(),"z",.034,24).name="mine roller implement clevis pin"}}function ud(n,e,t=zi()){let i=Uc(n,t),s=new Map;e.forEach(l=>{let c=typeof l=="string"?l:l.id;if(!rd.includes(c))throw new Error("Unknown 3D asset: "+c);c.startsWith("SE-")||s.set(c.split("-")[0],c)});let r=i.userData.length||6.25,o=i.userData.width||2.3,a=i.userData.roof||2.75;if(s.has("CAP")||s.has("MOB")){let l=[];i.traverse(c=>{c.isMesh&&c.name==="hull shell"&&l.push(c)});for(let c of l)c.material=c.material.clone(),c.material.transparent=!0,c.material.opacity=.16,c.material.depthWrite=!1}for(let[l,c]of s){let f=Nc(c,t);if(f.userData.mountedCard=c,l==="CAP"){if(f.position.set(-1.45,n==="RECOVERY"?1.75:1.4,0),n==="RECOVERY"){i.getObjectByName("recovery stowage")?.removeFromParent();let h=i.getObjectByName("recovery crane");h&&(h.position.z=-.95)}let u=f.getObjectByName("crew roof");u&&(u.visible=!1)}if(l==="MOB"&&(f.position.set(r/2-1.35,1.18,0),["MOB-B","MOB-C","MOB-D","MOB-G"].includes(c)&&f.position.set(0,.2,0)),l==="FP"&&(i.getObjectByName("mission weapon")?.removeFromParent(),f.position.set(-.35,a,0)),l==="COM"&&(i.getObjectByName("mission radio")?.removeFromParent(),f.position.set(.1,1.45,-.65)),l==="SA"&&(i.getObjectByName("mission sensor")?.removeFromParent(),f.position.set(-2.3,a,.5)),l==="PRO")if(c==="PRO-D"){let u=-r/2,h=u-1;f.position.set(h,1.07,0);let p=Bt("crew cell chassis extension");i.add(p);for(let g of[-1,1])F(p,t.darkSteel,[2.2,.16,.16],[u-.7,.81,g*.55],"crew cell carrier extension rail");for(let g of[-.61,.61])F(p,t.darkSteel,[.2,.16,1.3],[h+g,.81,0],"crew cell carrier shoe crossmember");F(p,t.darkSteel,[.16,.16,1.26],[u+.25,.81,0],"crew cell extension chassis tie")}else if(c==="PRO-G")f.position.set(-1.3,1.4,0);else if(c==="PRO-F")f.position.set(0,.55,0);else{f.position.set(-1.6,1.36,o*.46);let u=f.clone();u.rotation.y=Math.PI,u.position.z=-o*.46,i.add(u)}if(l==="ACC")if(c==="ACC-B")f.position.set(-r/2-1.43,0,0);else if(["ACC-C","ACC-E"].includes(c))i.getObjectByName("mission roller")?.removeFromParent(),f.scale.setScalar(1.9),f.rotation.y=Math.PI/2,f.position.set(r/2+1.05,.1,0);else if(["ACC-A","ACC-F"].includes(c)){i.getObjectByName("mounted WR-12")?.removeFromParent(),f.rotation.y=Math.PI/2,f.position.set(r/2+.15,1.15,0),F(i,t.edge,[.8,.27,1.3],[r/2+.1,1.015,0],"winch chassis crossmember");for(let u of[-1,1])le(i,t.darkSteel,[r/2-.3,.92,u*.44],[r/2+.38,1.12,u*.44],.035).name="winch mounting brace"}else f.position.set(-r/2+.9,1.35,0);i.add(f)}return i.userData.configuration=!0,i.userData.installed=Object.fromEntries(s),i}function dd(n){let e=[];n.traverse(s=>{s.isMesh&&(s.name==="hull shell"||s.userData.cutawayShell===!0)&&e.push({mesh:s,material:s.material,castShadow:s.castShadow,temporary:null})});let t=!1;function i(s){if(t!==!!s){t=!!s;for(let r of e)if(t){let o=a=>{let l=a.clone();return l.transparent=!0,l.opacity=.13,l.depthWrite=!1,l.needsUpdate=!0,l};r.temporary=Array.isArray(r.material)?r.material.map(o):o(r.material),r.mesh.material=r.temporary,r.mesh.castShadow=!1}else{r.mesh.material=r.material,r.mesh.castShadow=r.castShadow;for(let o of Array.isArray(r.temporary)?r.temporary:[r.temporary])o?.dispose();r.temporary=null}}}return{apply:i,dispose(){i(!1)}}}function fd(n){let e=[...n.children],t=new Map,i=!!n.userData.mission,s=(n.userData.assetId||"").split("-")[0],r=0;function o(u){return u.userData.mountedCard?"equipment:"+u.userData.mountedCard:typeof u.userData.inspectionKey=="string"&&/^engine:(?:head|block|sump|rotating|transmission|intake|exhaust|cooling|services|skid)$/.test(u.userData.inspectionKey)?u.userData.inspectionKey:u.name==="run-flat wheel"?"wheel:"+ ++r:/crane/.test(u.name)?"crane":/driver controls/.test(u.name)?"cockpit":u.name==="mission weapon"?"mount":u.name==="mission radio"?"controls":u.name==="mission sensor"?"optics":u.name==="mission roller"?"front":u.name==="mounted WR-12"?"mechanism":/hull shell|cab rear|deck|lower.*hull/.test(u.name)?"body":/glazing|mirror/.test(u.name)||u.material?.name==="optical glass"?"glass":i?u.position.y<1.25?"chassis":u.position.x>1.5?"front":"body":s==="CAP"||s==="TRAIN"?/roof/.test(u.name)?"roof":u.position.y>.39?"seating":"frame":s==="MOB"?u.position.x>.49?"cooling":u.position.y>.72?"heads":u.material?.name==="machined steel"?"connections":"powertrain":s==="FP"?u.position.x>.45?"barrel":u.position.y<.3?"mount":"controls":s==="COM"||s==="SA"?u.position.y>.65?"optics":u.material?.name==="machined steel"?"connections":"controls":s==="PRO"?u.material?.name==="machined steel"?"connections":"protection":s==="ACC"?u.position.y<.16?"frame":u.material?.name==="machined steel"?"connections":"mechanism":u.position.y>.85?"display":u.position.y>.7?"documents":"frame"}for(let u of e){let h=o(u);if(!t.has(h)){let p=new St;p.name=h,n.add(p),t.set(h,p)}t.get(h).add(u)}n.updateWorldMatrix(!0,!0);let a=new wt().setFromObject(n),l=a.getCenter(new P),c=a.getSize(new P),f=[...t].map(([u,h],p)=>{let g=new wt().setFromObject(h),_=g.getCenter(new P),m=_.clone().sub(l),d;return u==="engine:rotating"||u==="engine:skid"?d=new P:u==="engine:head"?d=new P(0,c.y*.46,0):u==="engine:block"?d=new P(0,c.y*.18,-c.z*.38):u==="engine:sump"?d=new P(0,-c.y*.25,0):u==="engine:transmission"?d=new P(-c.x*.28,0,0):u==="engine:cooling"?d=new P(c.x*.25,0,0):u==="engine:intake"?d=new P(0,c.y*.2,-c.z*.38):u==="engine:exhaust"?d=new P(0,c.y*.15,c.z*.4):u==="engine:services"?d=new P(0,0,-c.z*.3):u.startsWith("wheel:")?d=new P(0,-.15,Math.sign(_.z)||1).multiplyScalar(c.z*.4):u==="body"||u==="roof"?d=new P(0,c.y*.55,0):u==="chassis"||u==="frame"?d=new P(0,-c.y*.26,0):u==="glass"?d=new P(c.x*.18,c.y*.25,0):u==="cockpit"?d=new P(c.x*.2,c.y*.15,-c.z*.55):(m.lengthSq()<.01&&m.set(Math.sin(p*2.4),.8,Math.cos(p*2.4)),d=m.normalize().multiplyScalar(Math.max(c.length()*.24,.22)),d.y+=c.y*.16),{key:u,object:h,origin:h.position.clone(),vector:d,center:_}});return{parts:f,apply(u){if(!Number.isFinite(u)||u<0||u>1)throw Error("Invalid assembly separation");for(let h of f)h.object.position.copy(h.origin).addScaledVector(h.vector,u);n.updateWorldMatrix(!0,!0)},restore(){this.apply(0)}}}function pd(n,e,t,i=[7,4.5,7],s=null){e.updateWorldMatrix(!0,!0);let r=s||new wt().setFromObject(e,!0),o=r.getCenter(new P),a=r.getSize(new P).length()/2;n.aspect=t;let l=bs.degToRad(n.fov),c=Math.min(l/2,Math.atan(Math.tan(l/2)*t)),f=Math.max(a/Math.sin(c)/.86,1),u=new P(...i).normalize(),h=[];for(let _ of[r.min.x,r.max.x])for(let m of[r.min.y,r.max.y])for(let d of[r.min.z,r.max.z])h.push(new P(_,m,d));let p=Math.max(a*1.01,.1),g=f;n.near=.001,n.far=f+a*3+1,n.updateProjectionMatrix();for(let _=0;_<24;_++){let m=(p+g)/2;n.position.copy(o).addScaledVector(u,m),n.lookAt(o),n.updateMatrixWorld(!0);let d=0;for(let y of h){let M=y.clone().project(n);d=Math.max(d,Math.abs(M.x),Math.abs(M.y))}d>.86?p=m:g=m}return n.position.copy(o).addScaledVector(u,g),n.lookAt(o),n.near=Math.max(.01,g-a*1.5),n.far=g+a*3+1,n.updateProjectionMatrix(),n.updateMatrixWorld(!0),o}function md(n,e,t,i=null){e.updateWorldMatrix(!0,!0),n.updateWorldMatrix(!0,!1),n.target.updateWorldMatrix(!0,!1);let s=i||new wt().setFromObject(e,!0);if(s.isEmpty())return;let r=new P().setFromMatrixPosition(n.matrixWorld).sub(new P().setFromMatrixPosition(n.target.matrixWorld)).normalize();n.shadow.updateMatrices(n);let o=n.shadow.camera,a=[];for(let h of[s.min.x,s.max.x])for(let p of[s.min.y,s.max.y])for(let g of[s.min.z,s.max.z]){let _=new P(h,p,g);a.push(_),r.y>1e-4&&a.push(_.clone().addScaledVector(r,-(p-t)/r.y))}let l=new wt().setFromPoints(a.map(h=>h.applyMatrix4(o.matrixWorldInverse))),c=s.getSize(new P),f=Math.max(.08,c.length()*.025);Object.assign(o,{left:l.min.x-f,right:l.max.x+f,bottom:l.min.y-f,top:l.max.y+f,near:Math.max(.01,-l.max.z-f),far:Math.max(.1,-l.min.z+f)}),n.shadow.normalBias=Math.min(.006,Math.max(.001,c.length()*65e-5));let u=Math.max((o.right-o.left)/n.shadow.mapSize.x,(o.top-o.bottom)/n.shadow.mapSize.y);n.shadow.radius=bs.clamp(.045/u,3,48),o.updateProjectionMatrix(),n.shadow.updateMatrices(n)}function gd(n,e,t=0){n=Math.max(1,n),e=Math.max(1,e);let i=n>=850,s=!i&&e<520,r=i?{x:n-Math.min(420,n*.4),y:0,w:Math.min(420,n*.4),h:e}:s?{x:0,y:0,w:n,h:e}:{x:0,y:Math.round(e*.42),w:n,h:Math.round(e*.58)},o=i?{x:0,y:0,w:r.x,h:e}:{x:0,y:0,w:n,h:s?e:r.y},a=54,l=Math.max(1,Math.floor((r.h-140)/a));return{panel:r,model:o,rowHeight:a,capacity:l,pages:Math.max(1,Math.ceil(t/l))}}function Ex(n,e,t,i,s=0){let r=p=>e>=p.x&&e<p.x+p.w&&t>=p.y&&t<p.y+p.h,o=n.inspectionButtons?.find(r);if(o)return o.row.disabled?"__panel":o.row.key;if(n.primaryButton&&r(n.primaryButton))return n.primaryButton.row.disabled?"__panel":n.primaryButton.row.key;let a=n.panel;if(e<a.x||e>a.x+a.w||t<a.y||t>a.y+a.h)return null;let l=n.sectionButtons?.find(p=>e>=p.x&&e<p.x+p.w&&t>=p.y&&t<p.y+p.h);if(l)return l.key;let c=n.headerButtons?.find(p=>e>=p.x&&e<p.x+p.w&&t>=p.y&&t<p.y+p.h);if(c)return c.row.disabled?"__panel":c.row.key;if(n.pageButtons){let p=n.pageButtons.find(r);if(p)return p.disabled?"__panel":p.key}else if(t>=a.y+a.h-46)return e<a.x+a.w/2?"__previous":"__next";let f=n.placed?.find(p=>t>=p.y&&t<p.y+p.h&&(p.x===void 0||e>=p.x&&e<p.x+p.w)),u=Math.floor((t-a.y-88)/n.rowHeight);if(!n.placed&&(u<0||u>=n.capacity))return"__panel";let h=n.placed?f?.row:i[s*n.capacity+u];return h&&h.kind!=="text"&&!h.disabled?h.key:"__panel"}function wx(n,e,t,i=140){let s=Math.max(2,Math.floor((t-i-10)/18)),r=[[]],o=0;function a(f,u){let h=String(f??"").split(/\s+/),p=[],g="";for(let _ of h){for(;_.length>u;)g&&(p.push(g),g=""),p.push(_.slice(0,u)),_=_.slice(u);g.length+_.length+1>u?(p.push(g),g=_):g+=(g?" ":"")+_}return g&&p.push(g),p}function l(f,u){let h=Math.max(12,Math.floor(((e-24-(u-1)*8)/u-20)/8)),p=[...a(f.label,h),...a(f.value,h)],g=[];for(let _=0;_<Math.max(1,p.length);_+=s){let m=p.slice(_,_+s);g.push({row:{...f,label:m.join(`
`),value:null},h:Math.max(48,m.length*18+14)})}return g}function c(f){let u=Math.max(...f.map(h=>h.h));o+u>t-i&&r.at(-1).length&&(r.push([]),o=0),f.forEach((h,p)=>r.at(-1).push({...h,h:u,column:p,columns:f.length===2?2:1,lastInBand:p===f.length-1})),o+=u}for(let f=0;f<n.length;f++){let u=n[f];if(e>=380&&u.compact==="bid"&&n[f+1]?.compact==="bid"){let p=l(u,2),g=l(n[++f],2);for(let _=0;_<Math.max(p.length,g.length);_++){let m=[p[_],g[_]].filter(Boolean);c(m)}}else for(let p of l(u,1))c([p])}return r}function _d(){let n=new Un,e=new Jn(0,1,0,1,-10,10),t={rows:[]},i=null,s=gd(1,1),r=0,o=null,a=new Map,l=[],c={panel:"#f7f7f2",ink:"#1f302b",muted:"#52675d",line:"#d6ded5",field:"#ffffff",accent:"#365a46",selected:"#e3ece0",disabled:"#edf0e9",disabledInk:"#78877c"};function f(){for(let g of l)g.dispose();l.length=0,n.clear()}function u(g,_,m,d,y,M=0,v=0){if(m<=0||d<=0)return;let b;if(v){let x=Math.min(v,m/2,d/2),T=new It;T.moveTo(x,0),T.lineTo(m-x,0),T.quadraticCurveTo(m,0,m,x),T.lineTo(m,d-x),T.quadraticCurveTo(m,d,m-x,d),T.lineTo(x,d),T.quadraticCurveTo(0,d,0,d-x),T.lineTo(0,x),T.quadraticCurveTo(0,0,x,0),b=new pr(T),b.translate(-m/2,-d/2,0)}else b=new Fn(m,d);let w=new ai({color:y,side:Tt,toneMapped:!1,depthTest:!1,depthWrite:!1});l.push(b,w);let D=new De(b,w);D.position.set(g+m/2,_+d/2,M),n.add(D)}function h(g,_,m,d,y,M=14,v=c.ink,b="400"){if(d<=0||y<=0)return;let w=document.createElement("canvas"),D=2;w.width=Math.max(2,Math.ceil(d*D)),w.height=Math.max(2,Math.ceil(y*D));let x=w.getContext("2d");x.scale(D,D),x.font=`${b} ${M}px system-ui, sans-serif`,x.fillStyle=v,x.textBaseline="middle";let T=[];for(let C of String(g??"").split(`
`)){let N=C.split(/\s+/),B="";for(let H of N){for(;x.measureText(H).width>d-4&&H.length>1;){B&&(T.push(B),B="");let J=H.length;for(;J>1&&x.measureText(H.slice(0,J)).width>d-4;)J--;T.push(H.slice(0,J)),H=H.slice(J)}let ee=B?B+" "+H:H;x.measureText(ee).width>d-4&&B?(T.push(B),B=H):B=ee}B&&T.push(B)}T.forEach((C,N)=>x.fillText(C,2,(N+.5)*M*1.25,d-4));let I=new nr(w);I.colorSpace=zt;let U=new ai({map:I,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,side:Tt}),A=new Fn(d,y);l.push(I,U,A);let R=new De(A,U);R.scale.y=-1,R.position.set(_+d/2,m+y/2,2),n.add(R)}function p(g,_){o=[g,_],f(),s=gd(g,_);let m=s.panel,d=m.h<340,y=t.rows.find(q=>q.utility==="language"),M=t.rows.filter(q=>q.utility==="inspection"),v=t.rows.filter(q=>!q.utility),b=v.find(q=>q.primary&&q.kind==="button"&&!q.disabled),w=t.lang==="fr"?{task:"En cours",teams:"\xC9quipes",market:"Manche",tools:"Gestion",inspect:"Explorer",help:d?"Aide":"Aide / sauvegarde"}:{task:"Current",teams:"Teams",market:"Round",tools:"Manage",inspect:"Inspect",help:d?"Help":"Help / save"},D=Object.keys(w).filter(q=>v.some(ae=>(ae.section||"task")===q)),x=D.includes(t.section)?t.section:D[0]||"task",T=v.filter(q=>(q.section||"task")===x&&q.key!==b?.key),I=s.model.h===_&&m.y===0&&m.w===g,U=I&&M.length?48:0,A=I&&d?0:d?44:76,R=d?Math.max(1,D.length):Math.min(3,Math.max(1,D.length)),C=D.length>1?Math.ceil(D.length/R):0;s.contentY=A+C*48+U+8,s.section=x,a=new Map;let N=b?d?48:Math.max(52,Math.ceil((b.label.length||0)/Math.max(18,Math.floor((m.w-56)/8)))*18+18):0,B=s.contentY+N+56,H=wx(T,m.w,m.h,B);s.pages=H.length,r=Math.min(Math.max(0,Number(t.page)||0),s.pages-1);let ee=s.pages>1||I&&y?44:0;if(s.footerHeight=N+ee+12,e.left=0,e.right=g,e.top=0,e.bottom=_,e.updateProjectionMatrix(),u(m.x,m.y,m.w,m.h,c.panel),u(m.x,m.y,1,m.h,c.line,1),A&&h(t.title,m.x+20,m.y+12,m.w-(y?94:40),30,d?18:24,c.ink,"600"),!d){let q=t.context,ae=q?[q.role,q.mission].filter(Boolean).join(" \xB7 "):t.subtitle;h(ae,m.x+20,m.y+44,m.w-40,26,12,c.muted)}if(s.headerButtons=[],y){let q={row:y,x:I&&d?m.x+m.w-116:m.x+m.w-60,y:I&&d?m.y+m.h-56:m.y+4,w:48,h:44};s.headerButtons.push(q),u(q.x,q.y,q.w,q.h,c.field,1,8),h(y.label,q.x+10,q.y+13,q.w-20,26,13,c.accent,"600")}if(s.inspectionButtons=[],M.length){let q=I?m:s.model,ae=4,ge=q.x+12,ie=q.w-24,fe=Math.min(M.length,Math.max(1,Math.floor((ie+ae)/48))),W=Math.min(108,(ie-ae*(fe-1))/fe),j=q.y+(I?A:12);M.forEach((ue,ke)=>{let xe={row:ue,x:ge+ke%fe*(W+ae),y:j+Math.floor(ke/fe)*48,w:W,h:44};s.inspectionButtons.push(xe),u(xe.x,xe.y,xe.w,xe.h,ue.disabled?c.disabled:ue.selected?c.accent:c.field,1,9),h(ue.label,xe.x+5,xe.y+8,xe.w-10,32,xe.w<72?10:12,ue.disabled?c.disabledInk:ue.selected?"#ffffff":c.ink,ue.selected?"600":"400")})}s.sectionButtons=[];let J=m.y+A+U;C&&D.forEach((q,ae)=>{let ge={key:"__section:"+String(t.sectionEpoch||0)+":"+q,x:m.x+12+ae%R*(m.w-24)/R,y:J+Math.floor(ae/R)*48,w:(m.w-24)/R-4,h:44};a.set(ge.key,q),s.sectionButtons.push(ge),u(ge.x,ge.y,ge.w,ge.h,q===x?c.selected:c.panel,1,8),q===x&&u(ge.x+8,ge.y+41,ge.w-16,2,c.accent,1),h(w[q],ge.x+5,ge.y+9,ge.w-10,32,d?10:12,q===x?c.ink:c.muted,q===x?"600":"400")});let X=m.y+s.contentY;s.placed=[];for(let q of H[r]){let{row:ae,h:ge}=q,ie=m.y+m.h-s.footerHeight;if(X+ge>ie)break;let fe=(m.w-24-((q.columns||1)-1)*8)/(q.columns||1),W=m.x+12+(q.column||0)*(fe+8);s.placed.push({row:ae,x:W,w:fe,y:X,h:ge});let j=ae.kind==="text",ue=!j&&!ae.disabled;j?u(W+8,X+ge-4,fe-16,1,c.line,1):(u(W,X,fe,ge-6,ae.disabled?c.disabled:ae.kind==="button"?c.selected:c.field,1,8),ue&&ae.emphasis==="danger"&&u(W,X,3,ge-6,"#965c44",1));let ke=ae.kind==="checkbox"?(ae.label.includes("\u2713")?"\u25CF ":"\u25CB ")+ae.label:ae.label;h(ke,W+10,X+7,fe-20,ge-14,14,ae.disabled?c.disabledInk:j?c.muted:c.ink,ae.kind==="button"?"500":"400"),q.lastInBand!==!1&&(X+=ge)}s.primaryButton=null,s.pageButtons=[];let K=m.y+m.h-s.footerHeight;if(b){let q={row:b,x:m.x+12,y:K,w:m.w-24,h:N};s.primaryButton=q,u(q.x,q.y,q.w,q.h-4,b.emphasis==="danger"?"#855744":c.accent,1,10),h(b.label,q.x+12,q.y+9,q.w-24,q.h-14,d?b.label.length>70?10:12:14,"#ffffff","600"),K+=N}if(ee){let q={key:"__previous",x:m.x+12,y:K,w:48,h:44,disabled:r===0},ae={key:"__next",x:m.x+m.w-60,y:K,w:48,h:44,disabled:r===s.pages-1};s.pageButtons.push(q,ae);for(let ge of[q,ae])u(ge.x,ge.y,ge.w,ge.h-4,c.field,1,8),h(ge.key==="__previous"?"\u2039":"\u203A",ge.x+16,ge.y+7,ge.w-24,28,22,ge.disabled?c.disabledInk:c.accent);h(I&&d?`${t.title} \xB7 ${r+1}/${s.pages}`:`${r+1} / ${s.pages}`,m.x+68,K+9,m.w-(I&&d&&y?188:136),30,I&&d?10:12,c.muted)}return s}return{scene:n,camera:e,set(g,_,m,d){return t={...g,context:g.context?{...g.context}:void 0,rows:(g.rows||[]).map(y=>({...y}))},i=_,p(m,d)},resize(g,_){return o?.[0]===g&&o?.[1]===_?s:p(g,_)},hit(g,_){return Ex(s,g,_,t.rows,r)},activate(g){if(g?.startsWith("__section:")){let m=a.get(g);m&&(t.section=m,t.page=0,i?.("__section",m),o&&p(...o));return}if(g==="__previous"||g==="__next"){let m=Math.max(0,Math.min(s.pages-1,r+(g==="__next"?1:-1)));m!==r&&(t.page=m,i?.(g,m),r!==m&&o&&p(...o));return}let _=t.rows.find(m=>m.key===g);_&&_.kind!=="text"&&!_.disabled&&i?.(g)},get layout(){return s},dispose:f}}function Tx(n,e,t){let i=new Xa({antialias:!0,alpha:!1,powerPreference:"low-power"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.outputColorSpace=zt,i.toneMapping=wr,i.toneMappingExposure=.95,i.shadowMap.enabled=!0,i.shadowMap.type=Li,i.domElement.tabIndex=0,n.appendChild(i.domElement);let s=_d(),r=!1,o=new Un;o.background=new Ze("#f0f3f0");let a=new As(i),l=new Za,c=a.fromScene(l,.04);o.environment=c.texture,o.environmentIntensity=.65,l.dispose(),a.dispose(),o.add(new xr(15135231,7433055,.28));let f=new Ii(16773595,1.8);f.position.set(-5,9,6),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),Object.assign(f.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:.1,far:50}),f.shadow.normalBias=.015,f.shadow.bias=-1e-4,f.shadow.radius=5,o.add(f);let u=new Ii(15134719,.3);u.position.set(-6,5,-7),o.add(u);let h=new kt(38,1,.01,100),p=new Ka(h,i.domElement);p.enableDamping=!1,p.enablePan=!1,p.enableRotate=!1,p.minZoom=.25,p.maxZoom=5,p.maxPolarAngle=Math.PI*.49;let g=new De(new Fn(100,100),new gr({opacity:.17}));g.rotation.x=-Math.PI/2,g.receiveShadow=!0,o.add(g);let _=null,m=!1,d=null,y=0,M=!0,v=null,b=[7,4.5,7],w=null,D=null,x="assembled",T=.7,I=null,U=null;function A(){if(y=0,!M)return;let ie=Math.max(n.clientWidth,1),fe=Math.max(n.clientHeight,1);if(i.setViewport(0,0,ie,fe),i.setScissorTest(!1),i.clear(),d){let W=r?s.layout.model:{x:0,y:0,w:ie,h:fe};i.setViewport(W.x,fe-W.y-W.h,W.w,W.h),i.setScissor(W.x,fe-W.y-W.h,W.w,W.h),i.setScissorTest(!0),i.render(o,h)}r&&(i.setScissorTest(!1),i.setViewport(0,0,ie,fe),i.autoClear=!1,i.clearDepth(),i.render(s.scene,s.camera),i.autoClear=!0)}function R(){M&&!y&&(y=requestAnimationFrame(A))}p.addEventListener("change",R);function C(){let ie=Math.max(n.clientWidth,1),fe=Math.max(n.clientHeight,1);if(i.setSize(ie,fe,!1),r&&s.resize(ie,fe),!d){R();return}let W=r?s.layout.model:{w:ie,h:fe};w.apply(0);let j=new wt().setFromObject(d,!0);x==="exploded"&&(w.apply(1),j.union(new wt().setFromObject(d,!0))),g.position.y=j.min.y-.025,p.target.copy(pd(h,d,W.w/W.h,b,j)),md(f,d,g.position.y,j),w.apply(x==="exploded"?T:0),p.update(),U?.update(),R()}function N(){if(!d)return;o.remove(d);let ie=new Set,fe=new Set,W=new Set;d.traverse(j=>{j.geometry&&ie.add(j.geometry),j.material&&(Array.isArray(j.material)?j.material:[j.material]).forEach(ue=>fe.add(ue))}),ie.forEach(j=>j.dispose()),fe.forEach(j=>{for(let ue of Object.values(j))ue?.isTexture&&W.add(ue);j.dispose()}),W.forEach(j=>j.dispose()),d=null}function B(ie,fe){v=[ie,fe],H(),N();let W=zi();if(d=new St,fe.startsWith("part:")){let Pe=fe.slice(5);if(![ie.current?.id,...ie.owned.map(ot=>ot.id)].includes(Pe))throw Error("Part is not visible");d.add(Nc(Pe,W))}else d.add(fe==="configuration"?ud(ie.mission,ie.owned,W):Uc(ie.mission,W));let j=d.children[0],ue=new wt().setFromObject(j).getCenter(new P);j.position.sub(ue),d.position.copy(ue),w=fd(j);for(let Pe of w.parts)Pe.anchorLocal=d.worldToLocal(Pe.center.clone());d.traverse(Pe=>{if(Pe.isMesh){let ot=(Array.isArray(Pe.material)?Pe.material:[Pe.material]).some(re=>re.name==="optical glass");Pe.castShadow=!ot,Pe.receiveShadow=!0}}),o.add(d);let ke=new wt().setFromObject(d);g.position.y=ke.min.y-.025,h.zoom=1,b=[7,4.5,7],C(),D=dd(j);let xe=new Set;d.traverse(Pe=>{Pe.material&&xe.add(Pe.material)}),Object.values(W).forEach(Pe=>{xe.has(Pe)||Pe.dispose()})}function H(){D?.dispose(),D=null,I&&(I.removeFromParent(),I.geometry.dispose(),I.material.dispose(),I=null),U&&(o.remove(U),U.geometry.dispose(),U.material.dispose(),U=null),w=null}function ee(ie,fe){if(!w)return;if(!["assembled","exploded","cutaway"].includes(ie)||!Number.isFinite(fe)||fe<0||fe>1)throw Error("Invalid inspection view");let W=x!==ie;if(x=ie,T=fe,w.apply(x==="exploded"?T:0),D?.apply(x==="cutaway"),I&&(I.removeFromParent(),I.geometry.dispose(),I.material.dispose(),I=null),x==="exploded"){let j=[];for(let ue of w.parts)j.push(ue.anchorLocal.clone(),d.worldToLocal(new wt().setFromObject(ue.object).getCenter(new P)));I=new ds(new gt().setFromPoints(j),new Ri({color:"#748879",transparent:!0,opacity:.5})),d.add(I)}U?.update(),W?C():R()}let J=new ce,X=new Mr,K=null,q=null;function ae(ie){if(!r)return null;let fe=i.domElement.getBoundingClientRect();return s.hit((ie.clientX-fe.left)*n.clientWidth/fe.width,(ie.clientY-fe.top)*n.clientHeight/fe.height)}i.domElement.addEventListener("pointerdown",ie=>{let fe=ae(ie);fe&&(q=fe,ie.preventDefault(),ie.stopImmediatePropagation(),i.domElement.setPointerCapture(ie.pointerId))},!0),i.domElement.addEventListener("pointermove",ie=>{(q||ae(ie))&&(ie.stopImmediatePropagation(),i.domElement.style.cursor=ae(ie)&&ae(ie)!=="__panel"?"pointer":"default")},!0),i.domElement.addEventListener("pointerup",ie=>{if(q){let fe=q;q=null,ie.preventDefault(),ie.stopImmediatePropagation(),ae(ie)===fe&&(s.activate(fe),C())}},!0),i.domElement.addEventListener("wheel",ie=>{ae(ie)&&(ie.preventDefault(),ie.stopImmediatePropagation(),s.activate(ie.deltaY>0?"__next":"__previous"),C())},{capture:!0,passive:!1}),i.domElement.addEventListener("pointerdown",ie=>{K=[ie.clientX,ie.clientY],_=[ie.clientX,ie.clientY],m=!1,i.domElement.setPointerCapture(ie.pointerId)}),i.domElement.addEventListener("pointermove",ie=>{if(!_||!d)return;let fe=ie.clientX-_[0];Math.hypot(ie.clientX-K[0],ie.clientY-K[1])>4&&(m=!0,d.rotation.y+=fe*.009,d.updateWorldMatrix(!0,!0),U?.update(),C()),_=[ie.clientX,ie.clientY]}),i.domElement.addEventListener("pointercancel",()=>{_=null,K=null,q=null}),i.domElement.addEventListener("pointerup",ie=>{if(_=null,m||!K||Math.hypot(ie.clientX-K[0],ie.clientY-K[1])>5){K=null;return}if(K=null,!d||!M)return;let fe=i.domElement.getBoundingClientRect(),W=r?s.layout.model:{x:0,y:0,w:n.clientWidth,h:n.clientHeight};J.set(((ie.clientX-fe.left)*n.clientWidth/fe.width-W.x)/W.w*2-1,1-((ie.clientY-fe.top)*n.clientHeight/fe.height-W.y)/W.h*2),X.setFromCamera(J,h);for(let j of X.intersectObject(d,!0)){let ue=j.object;for(;ue&&!ue.userData.mountedCard;)ue=ue.parent;if(ue?.userData.mountedCard){t?.(ue.userData.mountedCard);break}}});let ge=new ResizeObserver(C);return ge.observe(n),i.domElement.addEventListener("webglcontextlost",ie=>{ie.preventDefault(),M=!1,y&&cancelAnimationFrame(y),y=0,e()}),i.domElement.addEventListener("webglcontextrestored",()=>{M=!0,v&&(B(...v),n.dispatchEvent(new Event("sea3drestored")))}),{update:B,inspect:ee,interface(ie,fe){r=!0;let W=s.set(ie,fe,Math.max(n.clientWidth,1),Math.max(n.clientHeight,1));return C(),W},shadows(ie){i.shadowMap.enabled=!!ie,g.visible=!!ie,R()},parts(){return w?.parts.map(ie=>ie.key)||[]},focus(ie){let fe=w?.parts.find(W=>W.key===ie);fe&&(U&&(o.remove(U),U.geometry.dispose(),U.material.dispose()),U=new br(fe.object,14001476),o.add(U),R())},view(ie){d&&(d.rotation.y=0),b=ie==="rear"?[-7,4.5,-7]:ie==="front"?[7,2.7,0]:[7,4.5,7],h.zoom=1,C()},dispose(){M=!1,ge.disconnect(),p.dispose(),s.dispose(),H(),N(),g.geometry.dispose(),g.material.dispose(),c.dispose(),i.dispose(),y&&cancelAnimationFrame(y),i.domElement.remove()}}}return Pd(Ax);})();
