var SEAThree=(()=>{var el=Object.defineProperty;var Md=Object.getOwnPropertyDescriptor;var bd=Object.getOwnPropertyNames;var Ed=Object.prototype.hasOwnProperty;var wd=(n,e)=>{for(var t in e)el(n,t,{get:e[t],enumerable:!0})},Td=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of bd(e))!Ed.call(n,s)&&s!==t&&el(n,s,{get:()=>e[s],enumerable:!(i=Md(e,s))||i.enumerable});return n};var Ad=n=>Td(el({},"__esModule",{value:!0}),n);var Sx={};wd(Sx,{mount:()=>vx});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var fi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Th=0,Bl=1,Ah=2;var Li=1,Rh=2,vs=3,mi=0,zt=1,Tt=2,Fn=0,Ss=1,zl=2,kl=3,Vl=4,Ch=5;var Di=100,Ph=101,Ih=102,Lh=103,Dh=104,Nh=200,Uh=201,Fh=202,Oh=203,Hl=204,Gl=205,Bh=206,zh=207,kh=208,Vh=209,Hh=210,Gh=211,Wh=212,Xh=213,qh=214,mo=0,go=1,_o=2,rs=3,xo=4,yo=5,vo=6,So=7,jo=0,Yh=1,Zh=2,En=0,Wl=1,Xl=2,ql=3,Er=4,Yl=5,Zl=6,Jl=7;var Kl=300,gi=301,Ni=302,Qo=303,ea=304,wr=306,Mo=1e3,Pn=1001,bo=1002,Ut=1003,Jh=1004;var Tr=1005;var Bt=1006,ta=1007;var _i=1008;var jt=1009,$l=1010,jl=1011,Ms=1012,na=1013,wn=1014,fn=1015,Tn=1016,ia=1017,sa=1018,bs=1020,Ql=35902,ec=35899,tc=1021,nc=1022,pn=1023,In=1026,xi=1027,ra=1028,oa=1029,yi=1030,aa=1031;var la=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,ca=35840,ha=35841,ua=35842,da=35843,fa=36196,pa=37492,ma=37496,ga=37488,_a=37489,Ir=37490,xa=37491,ya=37808,va=37809,Sa=37810,Ma=37811,ba=37812,Ea=37813,wa=37814,Ta=37815,Aa=37816,Ra=37817,Ca=37818,Pa=37819,Ia=37820,La=37821,Da=36492,Na=36494,Ua=36495,Fa=36283,Oa=36284,Lr=36285,Ba=36286;var Xs=2300,Eo=2301,fo=2302,Tl=2303,Al=2400,Rl=2401,Cl=2402;var Kh=3200;var Dr=0,$h=1,Zn="",Ft="srgb",qs="srgb-linear",Ys="linear",ut="srgb";var po=7680;var jh=519,Qh=512,eu=513,tu=514,za=515,nu=516,iu=517,ka=518,su=519,ru=35044;var ic="300 es",vn=2e3,os=2001;function Rd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ou(){let n=Zs("canvas");return n.style.display="block",n}var Wc={},as=null;function sc(...n){let e="THREE."+n.shift();as?as("log",e,...n):console.log(e,...n)}function au(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=au(n);let e="THREE."+n.shift();if(as)as("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=au(n);let e="THREE."+n.shift();if(as)as("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ai(...n){let e=n.join(" ");e in Wc||(Wc[e]=!0,He(...n))}function lu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var cu={[mo]:go,[_o]:vo,[xo]:So,[rs]:yo,[go]:mo,[vo]:_o,[So]:xo,[yo]:rs},Sn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=1234567,Vs=Math.PI/180,ls=180/Math.PI;function Ui(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function rc(n,e){return(n%e+e)%e}function Pd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Id(n,e,t){return n!==e?(t-n)/(e-n):0}function Hs(n,e,t){return(1-t)*n+t*e}function Ld(n,e,t,i){return Hs(n,e,1-Math.exp(-t*i))}function Dd(n,e=1){return e-Math.abs(rc(n,e*2)-e)}function Nd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ud(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Fd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Od(n,e){return n+Math.random()*(e-n)}function Bd(n){return n*(.5-Math.random())}function zd(n){n!==void 0&&(Xc=n);let e=Xc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kd(n){return n*Vs}function Vd(n){return n*ls}function Hd(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Gd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xd(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),f=o((e+i)/2),u=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*f,c*u,c*h,a*l);break;case"YZY":n.set(c*h,a*f,c*u,a*l);break;case"ZXZ":n.set(c*u,c*h,a*f,a*l);break;case"XZX":n.set(a*f,c*p,c*d,a*l);break;case"YXY":n.set(c*d,a*f,c*p,a*l);break;case"ZYZ":n.set(c*p,c*d,a*f,a*l);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Es={DEG2RAD:Vs,RAD2DEG:ls,generateUUID:Ui,clamp:Qe,euclideanModulo:rc,mapLinear:Pd,inverseLerp:Id,lerp:Hs,damp:Ld,pingpong:Dd,smoothstep:Nd,smootherstep:Ud,randInt:Fd,randFloat:Od,randFloatSpread:Bd,seededRandom:zd,degToRad:kd,radToDeg:Vd,isPowerOfTwo:Hd,ceilPowerOfTwo:Gd,floorPowerOfTwo:Wd,setQuaternionFromProperEuler:Xd,normalize:qt,denormalize:is},ce=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},on=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],f=i[s+2],u=i[s+3],h=r[o+0],d=r[o+1],p=r[o+2],g=r[o+3];if(u!==g||c!==h||l!==d||f!==p){let _=c*h+l*d+f*p+u*g;_<0&&(h=-h,d=-d,p=-p,g=-g,_=-_);let m=1-a;if(_<.9995){let M=Math.acos(_),A=Math.sin(M);m=Math.sin(m*M)/A,a=Math.sin(a*M)/A,c=c*m+h*a,l=l*m+d*a,f=f*m+p*a,u=u*m+g*a}else{c=c*m+h*a,l=l*m+d*a,f=f*m+p*a,u=u*m+g*a;let M=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=M,l*=M,f*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],f=i[s+3],u=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+f*u+c*d-l*h,e[t+1]=c*p+f*h+l*u-a*d,e[t+2]=l*p+f*d+a*h-c*u,e[t+3]=f*p-a*u-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(s/2),u=a(r/2),h=c(i/2),d=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=h*f*u+l*d*p,this._y=l*d*u-h*f*p,this._z=l*f*p+h*d*u,this._w=l*f*u-h*d*p;break;case"YXZ":this._x=h*f*u+l*d*p,this._y=l*d*u-h*f*p,this._z=l*f*p-h*d*u,this._w=l*f*u+h*d*p;break;case"ZXY":this._x=h*f*u-l*d*p,this._y=l*d*u+h*f*p,this._z=l*f*p+h*d*u,this._w=l*f*u-h*d*p;break;case"ZYX":this._x=h*f*u-l*d*p,this._y=l*d*u+h*f*p,this._z=l*f*p-h*d*u,this._w=l*f*u+h*d*p;break;case"YZX":this._x=h*f*u+l*d*p,this._y=l*d*u+h*f*p,this._z=l*f*p-h*d*u,this._w=l*f*u-h*d*p;break;case"XZY":this._x=h*f*u-l*d*p,this._y=l*d*u-h*f*p,this._z=l*f*p+h*d*u,this._w=l*f*u+h*d*p;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],f=t[6],u=t[10],h=i+a+u;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(f-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+f)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+o*a+s*l-r*c,this._y=s*f+o*c+r*a-i*l,this._z=r*f+o*l+i*c-s*a,this._w=o*f-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),f=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*f,this.y=i+c*f+a*l-r*u,this.z=s+c*u+r*f-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tl=new L,qc=new on,Je=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=c,f[6]=i,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],f=i[4],u=i[7],h=i[2],d=i[5],p=i[8],g=s[0],_=s[3],m=s[6],M=s[1],A=s[4],v=s[7],w=s[2],b=s[5],D=s[8];return r[0]=o*g+a*M+c*w,r[3]=o*_+a*A+c*b,r[6]=o*m+a*v+c*D,r[1]=l*g+f*M+u*w,r[4]=l*_+f*A+u*b,r[7]=l*m+f*v+u*D,r[2]=h*g+d*M+p*w,r[5]=h*_+d*A+p*b,r[8]=h*m+d*v+p*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*o*f-t*a*l-i*r*f+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=f*o-a*l,h=a*c-f*r,d=l*r-o*c,p=t*u+i*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=u*g,e[1]=(s*l-f*i)*g,e[2]=(a*i-s*o)*g,e[3]=h*g,e[4]=(f*t-s*c)*g,e[5]=(s*r-a*t)*g,e[6]=d*g,e[7]=(i*c-l*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nl.makeScale(e,t)),this}rotate(e){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nl.makeRotation(-e)),this}translate(e,t){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nl=new Je,Yc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qd(){let n={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qs]:{primaries:e,whitePoint:i,transfer:Ys,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),n}var rt=qd();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gi,wo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gi===void 0&&(Gi=Zs("canvas")),Gi.width=e.width,Gi.height=e.height;let s=Gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Gi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yd=0,cs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(il(s[o].image)):r.push(il(s[o]))}else r=il(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function il(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Zd=0,sl=new L,Zt=class n extends Sn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Pn,s=Pn,r=Bt,o=_i,a=pn,c=jt,l=n.DEFAULT_ANISOTROPY,f=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ui(),this.name="",this.source=new cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sl).x}get height(){return this.source.getSize(sl).y}get depth(){return this.source.getSize(sl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Kl;Zt.DEFAULT_ANISOTROPY=1;var bt=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],f=c[4],u=c[8],h=c[1],d=c[5],p=c[9],g=c[2],_=c[6],m=c[10];if(Math.abs(f-h)<.01&&Math.abs(u-g)<.01&&Math.abs(p-_)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+g)<.1&&Math.abs(p+_)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,v=(d+1)/2,w=(m+1)/2,b=(f+h)/4,D=(u+g)/4,x=(p+_)/4;return A>v&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=b/i,r=D/i):v>w?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=b/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=D/r,s=x/r),this.set(i,s,r,t),this}let M=Math.sqrt((_-p)*(_-p)+(u-g)*(u-g)+(h-f)*(h-f));return Math.abs(M)<.001&&(M=1),this.x=(_-p)/M,this.y=(u-g)/M,this.z=(h-f)/M,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},To=class extends Sn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Zt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new cs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends To{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Js=class extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ao=class extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var dt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,f,u,h,d,p,g,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,f,u,h,d,p,g,_)}set(e,t,i,s,r,o,a,c,l,f,u,h,d,p,g,_){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=f,m[10]=u,m[14]=h,m[3]=d,m[7]=p,m[11]=g,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),f=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=o*f,d=o*u,p=a*f,g=a*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=h-g*l,t[9]=-a*c,t[2]=g-h*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*f,d=c*u,p=l*f,g=l*u;t[0]=h+g*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*f,t[9]=-a,t[2]=d*a-p,t[6]=g+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*f,d=c*u,p=l*f,g=l*u;t[0]=h-g*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*f,t[9]=g-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*f,d=o*u,p=a*f,g=a*u;t[0]=c*f,t[4]=p*l-d,t[8]=h*l+g,t[1]=c*u,t[5]=g*l+h,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,d=o*l,p=a*c,g=a*l;t[0]=c*f,t[4]=g-h*u,t[8]=p*u+d,t[1]=u,t[5]=o*f,t[9]=-a*f,t[2]=-l*f,t[6]=d*u+p,t[10]=h-g*u}else if(e.order==="XZY"){let h=o*c,d=o*l,p=a*c,g=a*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=h*u+g,t[5]=o*f,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*f,t[10]=g*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jd,e,Kd)}lookAt(e,t,i){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Qn.crossVectors(i,nn),Qn.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Qn.crossVectors(i,nn)),Qn.normalize(),Vr.crossVectors(nn,Qn),s[0]=Qn.x,s[4]=Vr.x,s[8]=nn.x,s[1]=Qn.y,s[5]=Vr.y,s[9]=nn.y,s[2]=Qn.z,s[6]=Vr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],f=i[1],u=i[5],h=i[9],d=i[13],p=i[2],g=i[6],_=i[10],m=i[14],M=i[3],A=i[7],v=i[11],w=i[15],b=s[0],D=s[4],x=s[8],T=s[12],C=s[1],U=s[5],E=s[9],P=s[13],R=s[2],N=s[6],O=s[10],V=s[14],Q=s[3],J=s[7],q=s[11],K=s[15];return r[0]=o*b+a*C+c*R+l*Q,r[4]=o*D+a*U+c*N+l*J,r[8]=o*x+a*E+c*O+l*q,r[12]=o*T+a*P+c*V+l*K,r[1]=f*b+u*C+h*R+d*Q,r[5]=f*D+u*U+h*N+d*J,r[9]=f*x+u*E+h*O+d*q,r[13]=f*T+u*P+h*V+d*K,r[2]=p*b+g*C+_*R+m*Q,r[6]=p*D+g*U+_*N+m*J,r[10]=p*x+g*E+_*O+m*q,r[14]=p*T+g*P+_*V+m*K,r[3]=M*b+A*C+v*R+w*Q,r[7]=M*D+A*U+v*N+w*J,r[11]=M*x+A*E+v*O+w*q,r[15]=M*T+A*P+v*V+w*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],f=e[2],u=e[6],h=e[10],d=e[14],p=e[3],g=e[7],_=e[11],m=e[15],M=c*d-l*h,A=a*d-l*u,v=a*h-c*u,w=o*d-l*f,b=o*h-c*f,D=o*u-a*f;return t*(g*M-_*A+m*v)-i*(p*M-_*w+m*b)+s*(p*A-g*w+m*D)-r*(p*v-g*b+_*D)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],f=e[10];return t*(o*f-a*l)-i*(r*f-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],f=e[8],u=e[9],h=e[10],d=e[11],p=e[12],g=e[13],_=e[14],m=e[15],M=t*a-i*o,A=t*c-s*o,v=t*l-r*o,w=i*c-s*a,b=i*l-r*a,D=s*l-r*c,x=f*g-u*p,T=f*_-h*p,C=f*m-d*p,U=u*_-h*g,E=u*m-d*g,P=h*m-d*_,R=M*P-A*E+v*U+w*C-b*T+D*x;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/R;return e[0]=(a*P-c*E+l*U)*N,e[1]=(s*E-i*P-r*U)*N,e[2]=(g*D-_*b+m*w)*N,e[3]=(h*b-u*D-d*w)*N,e[4]=(c*C-o*P-l*T)*N,e[5]=(t*P-s*C+r*T)*N,e[6]=(_*v-p*D-m*A)*N,e[7]=(f*D-h*v+d*A)*N,e[8]=(o*E-a*C+l*x)*N,e[9]=(i*C-t*E-r*x)*N,e[10]=(p*b-g*v+m*M)*N,e[11]=(u*v-f*b-d*M)*N,e[12]=(a*T-o*U-c*x)*N,e[13]=(t*U-i*T+s*x)*N,e[14]=(g*A-p*w-_*M)*N,e[15]=(f*w-u*A+h*M)*N,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,f=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,f*a+i,f*c-s*o,0,l*c-s*a,f*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,f=o+o,u=a+a,h=r*l,d=r*f,p=r*u,g=o*f,_=o*u,m=a*u,M=c*l,A=c*f,v=c*u,w=i.x,b=i.y,D=i.z;return s[0]=(1-(g+m))*w,s[1]=(d+v)*w,s[2]=(p-A)*w,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(h+m))*b,s[6]=(_+M)*b,s[7]=0,s[8]=(p+A)*D,s[9]=(_-M)*D,s[10]=(1-(h+g))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Wi.set(s[0],s[1],s[2]).length(),a=Wi.set(s[4],s[5],s[6]).length(),c=Wi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),_n.copy(this);let l=1/o,f=1/a,u=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=f,_n.elements[5]*=f,_n.elements[6]*=f,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=vn,c=!1){let l=this.elements,f=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),p,g;if(c)p=r/(o-r),g=o*r/(o-r);else if(a===vn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===os)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=vn,c=!1){let l=this.elements,f=2/(t-e),u=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s),p,g;if(c)p=1/(o-r),g=o/(o-r);else if(a===vn)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===os)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Wi=new L,_n=new dt,Jd=new L(0,0,0),Kd=new L(1,1,1),Qn=new L,Vr=new L,nn=new L,Jc=new dt,Kc=new on,Ln=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],f=s[9],u=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$d=0,$c=new L,Xi=new on,kn=new dt,Hr=new L,Ds=new L,jd=new L,Qd=new on,jc=new L(1,0,0),Qc=new L(0,1,0),eh=new L(0,0,1),th={type:"added"},ef={type:"removed"},qi={type:"childadded",child:null},rl={type:"childremoved",child:null},Pt=class n extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new L,t=new Ln,i=new on,s=new L(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Je}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return $c.copy(e).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Ds,Hr,this.up):kn.lookAt(Hr,Ds,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(kn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),qi.child=e,this.dispatchEvent(qi),qi.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ef),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Qd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let c=[];for(let l in a){let f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pt.DEFAULT_UP=new L(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},tf={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let g of e.hand.values()){let _=t.getJointPose(g,i),m=this._getHandJoint(l,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&h>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function ol(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ze=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=rt.workingColorSpace){if(e=rc(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ol(o,r,e+1/3),this.g=ol(o,r,e),this.b=ol(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let i=hu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return rt.workingToColorSpace(Ht.copy(this),e),Math.round(Qe(Ht.r*255,0,255))*65536+Math.round(Qe(Ht.g*255,0,255))*256+Math.round(Qe(Ht.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Ht.copy(this),t);let i=Ht.r,s=Ht.g,r=Ht.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,f=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=f<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Ft){rt.workingToColorSpace(Ht.copy(this),e);let t=Ht.r,i=Ht.g,s=Ht.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Gr);let i=Hs(ei.h,Gr.h,t),s=Hs(ei.s,Gr.s,t),r=Hs(ei.l,Gr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ht=new Ze;Ze.NAMES=hu;var Dn=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xn=new L,Vn=new L,al=new L,Hn=new L,Yi=new L,Zi=new L,nh=new L,ll=new L,cl=new L,hl=new L,ul=new bt,dl=new bt,fl=new bt,si=class n{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xn.subVectors(e,t),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xn.subVectors(s,t),Vn.subVectors(i,t),al.subVectors(e,t);let o=xn.dot(xn),a=xn.dot(Vn),c=xn.dot(al),l=Vn.dot(Vn),f=Vn.dot(al),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let h=1/u,d=(l*c-a*f)*h,p=(o*f-a*c)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return ul.setScalar(0),dl.setScalar(0),fl.setScalar(0),ul.fromBufferAttribute(e,t),dl.fromBufferAttribute(e,i),fl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(dl,r.y),o.addScaledVector(fl,r.z),o}static isFrontFacing(e,t,i,s){return xn.subVectors(i,t),Vn.subVectors(e,t),xn.cross(Vn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),xn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Yi.subVectors(s,i),Zi.subVectors(r,i),ll.subVectors(e,i);let c=Yi.dot(ll),l=Zi.dot(ll);if(c<=0&&l<=0)return t.copy(i);cl.subVectors(e,s);let f=Yi.dot(cl),u=Zi.dot(cl);if(f>=0&&u<=f)return t.copy(s);let h=c*u-f*l;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Yi,o);hl.subVectors(e,r);let d=Yi.dot(hl),p=Zi.dot(hl);if(p>=0&&d<=p)return t.copy(r);let g=d*l-c*p;if(g<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(i).addScaledVector(Zi,a);let _=f*p-d*u;if(_<=0&&u-f>=0&&d-p>=0)return nh.subVectors(r,s),a=(u-f)/(u-f+(d-p)),t.copy(s).addScaledVector(nh,a);let m=1/(_+g+h);return o=g*m,a=h*m,t.copy(i).addScaledVector(Yi,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Et=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Xr.subVectors(this.max,Ns),Ji.subVectors(e.a,Ns),Ki.subVectors(e.b,Ns),$i.subVectors(e.c,Ns),ti.subVectors(Ki,Ji),ni.subVectors($i,Ki),Mi.subVectors(Ji,$i);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Mi.z,Mi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Mi.z,0,-Mi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Mi.y,Mi.x,0];return!pl(t,Ji,Ki,$i,Xr)||(t=[1,0,0,0,1,0,0,0,1],!pl(t,Ji,Ki,$i,Xr))?!1:(qr.crossVectors(ti,ni),t=[qr.x,qr.y,qr.z],pl(t,Ji,Ki,$i,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gn=[new L,new L,new L,new L,new L,new L,new L,new L],yn=new L,Wr=new Et,Ji=new L,Ki=new L,$i=new L,ti=new L,ni=new L,Mi=new L,Ns=new L,Xr=new L,qr=new L,bi=new L;function pl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){bi.fromArray(n,r);let a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),c=e.dot(bi),l=t.dot(bi),f=i.dot(bi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}var Ct=new L,Yr=new ce,nf=0,Yt=class extends Sn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ru,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=is(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=is(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=is(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ks=class extends Yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var $s=class extends Yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var tt=class extends Yt{constructor(e,t,i){super(new Float32Array(e),t,i)}},sf=new Et,Us=new L,ml=new L,qn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):sf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);let t=Us.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Us,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ml.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(ml)),this.expandByPoint(Us.copy(e.center).sub(ml))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},rf=0,dn=new dt,gl=new Pt,ji=new L,sn=new Et,Fs=new Et,Nt=new L,gt=class n extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rd(e)?$s:Ks)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Et);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(sn.min,Fs.min),sn.expandByPoint(Nt),Nt.addVectors(sn.max,Fs.max),sn.expandByPoint(Nt)):(sn.expandByPoint(Fs.min),sn.expandByPoint(Fs.max))}sn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Nt.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(e,l),Nt.add(ji)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Yt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new L,c[x]=new L;let l=new L,f=new L,u=new L,h=new ce,d=new ce,p=new ce,g=new L,_=new L;function m(x,T,C){l.fromBufferAttribute(i,x),f.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),f.sub(l),u.sub(l),d.sub(h),p.sub(h);let U=1/(d.x*p.y-p.x*d.y);isFinite(U)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(U),_.copy(u).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(U),a[x].add(g),a[T].add(g),a[C].add(g),c[x].add(_),c[T].add(_),c[C].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){let C=M[x],U=C.start,E=C.count;for(let P=U,R=U+E;P<R;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let A=new L,v=new L,w=new L,b=new L;function D(x){w.fromBufferAttribute(s,x),b.copy(w);let T=a[x];A.copy(T),A.sub(w.multiplyScalar(w.dot(T))).normalize(),v.crossVectors(b,T);let U=v.dot(c[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,U)}for(let x=0,T=M.length;x<T;++x){let C=M[x],U=C.start,E=C.count;for(let P=U,R=U+E;P<R;P+=3)D(e.getX(P+0)),D(e.getX(P+1)),D(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,f=new L,u=new L;if(e)for(let h=0,d=e.count;h<d;h+=3){let p=e.getX(h+0),g=e.getX(h+1),_=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),a.add(f),c.add(f),l.add(f),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(_,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,r),u.subVectors(s,r),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){let l=a.array,f=a.itemSize,u=a.normalized,h=new l.constructor(c.length*f),d=0,p=0;for(let g=0,_=c.length;g<_;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*f;for(let m=0;m<f;m++)h[p++]=l[d++]}return new Yt(h,f,u)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let f=0,u=l.length;f<u;f++){let h=l[f],d=e(h,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let u=0,h=l.length;u<h;u++){let d=l[u];f.push(d.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let f=s[l];this.setAttribute(l,f.clone(t))}let r=e.morphAttributes;for(let l in r){let f=[],u=r[l];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,f=o.length;l<f;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var _l=new L,of=new L,af=new Je,rn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=_l.subVectors(i,t).cross(of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(_l),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||af.getNormalMatrix(e),s=this.coplanarPoint(_l).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},lf=0,Mn=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Ss,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Gl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new rn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Wn=new L,xl=new L,Zr=new L,Jr=new L,ri=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xl.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(xl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Zr),a=Jr.dot(this.direction),c=-Jr.dot(Zr),l=Jr.lengthSq(),f=Math.abs(1-o*o),u,h,d,p;if(f>0)if(u=o*c-a,h=o*a-c,p=r*f,u>=0)if(h>=-p)if(h<=p){let g=1/f;u*=g,h*=g,d=u*(u+o*h+2*a)+h*(o*u+h+2*c)+l}else h=r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;else h=-r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;else h<=-p?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+l):h<=p?(u=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+h*(h+2*c)+l);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xl).addScaledVector(Zr,h),d}intersectSphere(e,t){if(e.radius<0)return null;Wn.subVectors(e.center,this.origin);let i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),f>=0?(r=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,f=a.z,u=e.x-o.x,h=e.y-o.y,d=e.z-o.z,p=t.x-o.x,g=t.y-o.y,_=t.z-o.z,m=i.x-o.x,M=i.y-o.y,A=i.z-o.z,v=Math.abs(c),w=Math.abs(l),b=Math.abs(f),D,x,T,C,U,E,P,R,N,O,V,Q;if(v>=w&&v>=b?(T=c,E=u,N=p,Q=m,c>=0?(D=l,x=f,C=h,U=d,P=g,R=_,O=M,V=A):(D=f,x=l,C=d,U=h,P=_,R=g,O=A,V=M)):w>=b?(T=l,E=h,N=g,Q=M,l>=0?(D=f,x=c,C=d,U=u,P=_,R=p,O=A,V=m):(D=c,x=f,C=u,U=d,P=p,R=_,O=m,V=A)):(T=f,E=d,N=_,Q=A,f>=0?(D=c,x=l,C=u,U=h,P=p,R=g,O=m,V=M):(D=l,x=c,C=h,U=u,P=g,R=p,O=M,V=m)),T===0)return null;let J=D/T,q=x/T,K=1/T,ae=C-J*E,pe=U-q*E,ke=P-J*N,ie=R-q*N,ge=O-J*Q,G=V-q*Q,j=ge*ie-G*ke,ue=ae*G-pe*ge,Ge=ke*pe-ie*ae;if(s){if(j<0||ue<0||Ge<0)return null}else if((j<0||ue<0||Ge<0)&&(j>0||ue>0||Ge>0))return null;let Ae=j+ue+Ge;if(Ae===0)return null;let Ce=K*(j*E+ue*N+Ge*Q);return(Ae>0?Ce<0:Ce>0)?null:this.at(Ce/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ih=new dt,Ei=new ri,Kr=new qn,sh=new L,$r=new L,jr=new L,Qr=new L,yl=new L,eo=new L,rh=new L,to=new L,Ne=class extends Pt{constructor(e=new gt,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let f=a[c],u=r[c];f!==0&&(yl.fromBufferAttribute(u,e),o?eo.addScaledVector(yl,f):eo.addScaledVector(yl.sub(t),f))}t.add(eo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(Kr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Kr,sh)===null||Ei.origin.distanceToSquared(sh)>(e.far-e.near)**2))&&(ih.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(ih),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,f=r.attributes.uv1,u=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=h.length;p<g;p++){let _=h[p],m=o[_.materialIndex],M=Math.max(_.start,d.start),A=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let v=M,w=A;v<w;v+=3){let b=a.getX(v),D=a.getX(v+1),x=a.getX(v+2);s=no(this,m,e,i,l,f,u,b,D,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){let M=a.getX(_),A=a.getX(_+1),v=a.getX(_+2);s=no(this,o,e,i,l,f,u,M,A,v),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,g=h.length;p<g;p++){let _=h[p],m=o[_.materialIndex],M=Math.max(_.start,d.start),A=Math.min(c.count,Math.min(_.start+_.count,d.start+d.count));for(let v=M,w=A;v<w;v+=3){let b=v,D=v+1,x=v+2;s=no(this,m,e,i,l,f,u,b,D,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){let M=_,A=_+1,v=_+2;s=no(this,o,e,i,l,f,u,M,A,v),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}};function cf(n,e,t,i,s,r,o,a){let c;if(e.side===zt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===mi,a),c===null)return null;to.copy(a),to.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(to);return l<t.near||l>t.far?null:{distance:l,point:to.clone(),object:n}}function no(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,$r),n.getVertexPosition(c,jr),n.getVertexPosition(l,Qr);let f=cf(n,e,t,i,$r,jr,Qr,rh);if(f){let u=new L;si.getBarycoord(rh,$r,jr,Qr,u),s&&(f.uv=si.getInterpolatedAttribute(s,a,c,l,u,new ce)),r&&(f.uv1=si.getInterpolatedAttribute(r,a,c,l,u,new ce)),o&&(f.normal=si.getInterpolatedAttribute(o,a,c,l,u,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new L,materialIndex:0};si.getNormal($r,jr,Qr,h.normal),f.face=h,f.barycoord=u}return f}var js=class extends Zt{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Ut,f=Ut,u,h){super(null,o,a,c,l,f,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends Yt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qi=new dt,oh=new dt,io=[],ah=new Et,hf=new dt,Os=new Ne,Bs=new qn,er=class extends Ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,hf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Et),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),ah.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(ah)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qi),Bs.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(i),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),oh.multiplyMatrices(i,Qi),Os.matrixWorld=oh,Os.raycast(e,io);for(let o=0,a=io.length;o<a;o++){let c=io[o];c.instanceId=r,c.object=this,t.push(c)}io.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new js(new Float32Array(s*this.count),s,this.count,ra,fn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wi=new qn,uf=new ce(.5,.5),so=new L,ds=class{constructor(e=new rn,t=new rn,i=new rn,s=new rn,r=new rn,o=new rn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vn,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],f=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],M=r[12],A=r[13],v=r[14],w=r[15];if(s[0].setComponents(l-o,d-f,m-p,w-M).normalize(),s[1].setComponents(l+o,d+f,m+p,w+M).normalize(),s[2].setComponents(l+a,d+u,m+g,w+A).normalize(),s[3].setComponents(l-a,d-u,m-g,w-A).normalize(),i)s[4].setComponents(c,h,_,v).normalize(),s[5].setComponents(l-c,d-h,m-_,w-v).normalize();else if(s[4].setComponents(l-c,d-h,m-_,w-v).normalize(),t===vn)s[5].setComponents(l+c,d+h,m+_,w+v).normalize();else if(t===os)s[5].setComponents(c,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);let t=uf.distanceTo(e.center);return wi.radius=.7071067811865476+t,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(so.x=s.normal.x>0?e.max.x:e.min.x,so.y=s.normal.y>0?e.max.y:e.min.y,so.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ri=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ro=new L,Co=new L,lh=new dt,zs=new ri,ro=new qn,vl=new L,ch=new L,Po=class extends Pt{constructor(e=new gt,t=new Ri){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ro.fromBufferAttribute(t,s-1),Co.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ro.distanceTo(Co);e.setAttribute("lineDistance",new tt(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;lh.copy(s).invert(),zs.copy(e.ray).applyMatrix4(lh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,_=p-1;g<_;g+=l){let m=f.getX(g),M=f.getX(g+1),A=oo(this,e,zs,c,m,M,g);A&&t.push(A)}if(this.isLineLoop){let g=f.getX(p-1),_=f.getX(d),m=oo(this,e,zs,c,g,_,p-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p-1;g<_;g+=l){let m=oo(this,e,zs,c,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){let g=oo(this,e,zs,c,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function oo(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Ro.fromBufferAttribute(a,s),Co.fromBufferAttribute(a,r),t.distanceSqToSegment(Ro,Co,vl,ch)>i)return;vl.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(vl);if(!(l<e.near||l>e.far))return{distance:l,point:ch.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var hh=new L,uh=new L,fs=class extends Po{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)hh.fromBufferAttribute(t,s),uh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+hh.distanceTo(uh);e.setAttribute("lineDistance",new tt(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tr=class extends Zt{constructor(e=[],t=gi,i,s,r,o,a,c,l,f){super(e,t,i,s,r,o,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nr=class extends Zt{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends Zt{constructor(e,t,i=wn,s,r,o,a=Ut,c=Ut,l,f=In,u=1){if(f!==In&&f!==xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:u};super(h,s,r,o,a,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Io=class extends ai{constructor(e,t=wn,i=gi,s,r,o=Ut,a=Ut,c,l=In){let f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,i,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ir=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Kt=class n extends gt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],f=[],u=[],h=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(u,2));function p(g,_,m,M,A,v,w,b,D,x,T){let C=v/D,U=w/x,E=v/2,P=w/2,R=b/2,N=D+1,O=x+1,V=0,Q=0,J=new L;for(let q=0;q<O;q++){let K=q*U-P;for(let ae=0;ae<N;ae++){let pe=ae*C-E;J[g]=pe*M,J[_]=K*A,J[m]=R,l.push(J.x,J.y,J.z),J[g]=0,J[_]=0,J[m]=b>0?1:-1,f.push(J.x,J.y,J.z),u.push(ae/D),u.push(1-q/x),V+=1}}for(let q=0;q<x;q++)for(let K=0;K<D;K++){let ae=h+K+N*q,pe=h+K+N*(q+1),ke=h+(K+1)+N*(q+1),ie=h+(K+1)+N*q;c.push(ae,pe,ie),c.push(pe,ke,ie),Q+=6}a.addGroup(d,Q,T),d+=Q,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},sr=class n extends gt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],f=t/2,u=Math.PI/2*e,h=t,d=2*u+h,p=i*2+r,g=s+1,_=new L,m=new L;for(let M=0;M<=p;M++){let A=0,v=0,w=0,b=0;if(M<=i){let T=M/i,C=T*Math.PI/2;v=-f-e*Math.cos(C),w=e*Math.sin(C),b=-e*Math.cos(C),A=T*u}else if(M<=i+r){let T=(M-i)/r;v=-f+T*t,w=e,b=0,A=u+T*h}else{let T=(M-i-r)/i,C=T*Math.PI/2;v=f+e*Math.sin(C),w=e*Math.cos(C),b=e*Math.sin(C),A=u+h+T*u}let D=Math.max(0,Math.min(1,A/d)),x=0;M===0?x=.5/s:M===p&&(x=-.5/s);for(let T=0;T<=s;T++){let C=T/s,U=C*Math.PI*2,E=Math.sin(U),P=Math.cos(U);m.x=-w*P,m.y=v,m.z=w*E,a.push(m.x,m.y,m.z),_.set(-w*P,b,w*E),_.normalize(),c.push(_.x,_.y,_.z),l.push(C+x,D)}if(M>0){let T=(M-1)*g;for(let C=0;C<s;C++){let U=T+C,E=T+C+1,P=M*g+C,R=M*g+C+1;o.push(U,E,P),o.push(E,R,P)}}}this.setIndex(o),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var rr=class n extends gt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let f=[],u=[],h=[],d=[],p=0,g=[],_=i/2,m=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(f),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function M(){let v=new L,w=new L,b=0,D=(t-e)/i;for(let x=0;x<=r;x++){let T=[],C=x/r,U=C*(t-e)+e;for(let E=0;E<=s;E++){let P=E/s,R=P*c+a,N=Math.sin(R),O=Math.cos(R);w.x=U*N,w.y=-C*i+_,w.z=U*O,u.push(w.x,w.y,w.z),v.set(N,D,O).normalize(),h.push(v.x,v.y,v.z),d.push(P,1-C),T.push(p++)}g.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let C=g[T][x],U=g[T+1][x],E=g[T+1][x+1],P=g[T][x+1];(e>0||T!==0)&&(f.push(C,U,P),b+=3),(t>0||T!==r-1)&&(f.push(U,E,P),b+=3)}l.addGroup(m,b,0),m+=b}function A(v){let w=p,b=new ce,D=new L,x=0,T=v===!0?e:t,C=v===!0?1:-1;for(let E=1;E<=s;E++)u.push(0,_*C,0),h.push(0,C,0),d.push(.5,.5),p++;let U=p;for(let E=0;E<=s;E++){let R=E/s*c+a,N=Math.cos(R),O=Math.sin(R);D.x=T*O,D.y=_*C,D.z=T*N,u.push(D.x,D.y,D.z),h.push(0,C,0),b.x=N*.5+.5,b.y=O*.5*C+.5,d.push(b.x,b.y),p++}for(let E=0;E<s;E++){let P=w+E,R=U+E;v===!0?f.push(R,R+1,P):f.push(R+1,R,P),x+=3}l.addGroup(m,x,v===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var an=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let f=i[s],h=i[s+1]-f,d=(o-f)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ce:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new L,s=[],r=[],o=[],a=new L,c=new dt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,f=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);f<=l&&(l=f,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),h<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ps=class extends an{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*f-d*u+this.aX,l=h*u+d*f+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lo=class extends ps{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function oc(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,f,u){let h=(o-r)/l-(a-r)/(l+f)+(a-o)/f,d=(a-o)/f-(c-o)/(f+u)+(c-a)/u;h*=f,d*=f,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var dh=new L,fh=new L,Sl=new oc,Ml=new oc,bl=new oc,ms=class extends an{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new L){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,f;this.closed||a>0?l=s[(a-1)%r]:(fh.subVectors(s[0],s[1]).add(s[0]),l=fh);let u=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(dh.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=dh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d);g<1e-4&&(g=1),p<1e-4&&(p=g),_<1e-4&&(_=g),Sl.initNonuniformCatmullRom(l.x,u.x,h.x,f.x,p,g,_),Ml.initNonuniformCatmullRom(l.y,u.y,h.y,f.y,p,g,_),bl.initNonuniformCatmullRom(l.z,u.z,h.z,f.z,p,g,_)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(l.x,u.x,h.x,f.x,this.tension),Ml.initCatmullRom(l.y,u.y,h.y,f.y,this.tension),bl.initCatmullRom(l.z,u.z,h.z,f.z,this.tension));return i.set(Sl.calc(c),Ml.calc(c),bl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ph(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function df(n,e){let t=1-n;return t*t*e}function ff(n,e){return 2*(1-n)*n*e}function pf(n,e){return n*n*e}function Gs(n,e,t,i){return df(n,e)+ff(n,t)+pf(n,i)}function mf(n,e){let t=1-n;return t*t*t*e}function gf(n,e){let t=1-n;return 3*t*t*n*e}function _f(n,e){return 3*(1-n)*n*n*e}function xf(n,e){return n*n*n*e}function Ws(n,e,t,i,s){return mf(n,e)+gf(n,t)+_f(n,i)+xf(n,s)}var or=class extends an{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ws(e,s.x,r.x,o.x,a.x),Ws(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Do=class extends an{constructor(e=new L,t=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ws(e,s.x,r.x,o.x,a.x),Ws(e,s.y,r.y,o.y,a.y),Ws(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ar=class extends an{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends an{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lr=class extends an{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(e,s.x,r.x,o.x),Gs(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cr=class extends an{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Gs(e,s.x,r.x,o.x),Gs(e,s.y,r.y,o.y),Gs(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hr=class extends an{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],f=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(ph(a,c.x,l.x,f.x,u.x),ph(a,c.y,l.y,f.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Uo=Object.freeze({__proto__:null,ArcCurve:Lo,CatmullRomCurve3:ms,CubicBezierCurve:or,CubicBezierCurve3:Do,EllipseCurve:ps,LineCurve:ar,LineCurve3:No,QuadraticBezierCurve:lr,QuadraticBezierCurve3:cr,SplineCurve:hr}),Fo=class extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let f=c[l];i&&i.equals(f)||(t.push(f),i=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Uo[s.type]().fromJSON(s))}return this}},Nn=class extends Fo{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ar(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new lr(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new or(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new hr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+l,t+f,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new ps(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$t=class extends Nn{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Nn().fromJSON(s))}return this}};function yf(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=uu(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Ef(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let f=a,u=c;for(let h=t;h<s;h+=t){let d=n[h],p=n[h+1];d<a&&(a=d),p<c&&(c=p),d>f&&(f=d),p>u&&(u=p)}l=Math.max(f-a,u-c),l=l!==0?32767/l:0}return ur(r,o,t,a,c,l,0),o}function uu(n,e,t,i,s){let r;if(s===Uf(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=mh(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=mh(o/i|0,n[o],n[o+1],r);return r&&gs(r,r.next)&&(fr(r),r=r.next),r}function Ci(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(gs(t,t.next)||wt(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ur(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Cf(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Sf(n,i,s,r):vf(n)){e.push(c.i,n.i,l.i),fr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Mf(Ci(n),e),ur(n,e,t,i,s,r,2)):o===2&&bf(n,e,t,i,s,r):ur(Ci(n),e,t,i,s,r,1);break}}}function vf(n){let e=n.prev,t=n,i=n.next;if(wt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,f=Math.min(s,r,o),u=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l),p=i.next;for(;p!==e;){if(p.x>=f&&p.x<=h&&p.y>=u&&p.y<=d&&ks(s,a,r,c,o,l,p.x,p.y)&&wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Sf(n,e,t,i){let s=n.prev,r=n,o=n.next;if(wt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,f=s.y,u=r.y,h=o.y,d=Math.min(a,c,l),p=Math.min(f,u,h),g=Math.max(a,c,l),_=Math.max(f,u,h),m=Pl(d,p,e,t,i),M=Pl(g,_,e,t,i),A=n.prevZ,v=n.nextZ;for(;A&&A.z>=m&&v&&v.z<=M;){if(A.x>=d&&A.x<=g&&A.y>=p&&A.y<=_&&A!==s&&A!==o&&ks(a,f,c,u,l,h,A.x,A.y)&&wt(A.prev,A,A.next)>=0||(A=A.prevZ,v.x>=d&&v.x<=g&&v.y>=p&&v.y<=_&&v!==s&&v!==o&&ks(a,f,c,u,l,h,v.x,v.y)&&wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;A&&A.z>=m;){if(A.x>=d&&A.x<=g&&A.y>=p&&A.y<=_&&A!==s&&A!==o&&ks(a,f,c,u,l,h,A.x,A.y)&&wt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=g&&v.y>=p&&v.y<=_&&v!==s&&v!==o&&ks(a,f,c,u,l,h,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Mf(n,e){let t=n;do{let i=t.prev,s=t.next.next;!gs(i,s)&&fu(i,t,t.next,s)&&dr(i,s)&&dr(s,i)&&(e.push(i.i,t.i,s.i),fr(t),fr(t.next),t=n=s),t=t.next}while(t!==n);return Ci(t)}function bf(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lf(o,a)){let c=pu(o,a);o=Ci(o,o.next),c=Ci(c,c.next),ur(o,e,t,i,s,r,0),ur(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ef(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=uu(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(If(l))}s.sort(wf);for(let r=0;r<s.length;r++)t=Tf(s[r],t);return t}function wf(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Tf(n,e){let t=Af(n,e);if(!t)return e;let i=pu(t,n);return Ci(i,i.next),Ci(t,t.next)}function Af(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(gs(n,t))return t;do{if(gs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,f=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&du(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);dr(t,n)&&(u<f||u===f&&(t.x>o.x||t.x===o.x&&Rf(o,t)))&&(o=t,f=u)}t=t.next}while(t!==a);return o}function Rf(n,e){return wt(n.prev,n,e.prev)<0&&wt(e.next,n,n.next)<0}function Cf(n,e,t,i){let s=n;do s.z===0&&(s.z=Pl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Pf(s)}function Pf(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Pl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function If(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function du(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ks(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&du(n,e,t,i,s,r,o,a)}function Lf(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Df(n,e)&&(dr(n,e)&&dr(e,n)&&Nf(n,e)&&(wt(n.prev,n,e.prev)||wt(n,e.prev,e))||gs(n,e)&&wt(n.prev,n,n.next)>0&&wt(e.prev,e,e.next)>0)}function wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function gs(n,e){return n.x===e.x&&n.y===e.y}function fu(n,e,t,i){let s=lo(wt(n,e,t)),r=lo(wt(n,e,i)),o=lo(wt(t,i,n)),a=lo(wt(t,i,e));return!!(s!==r&&o!==a||s===0&&ao(n,t,e)||r===0&&ao(n,i,e)||o===0&&ao(t,n,i)||a===0&&ao(t,e,i))}function ao(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function lo(n){return n>0?1:n<0?-1:0}function Df(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&fu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function dr(n,e){return wt(n.prev,n,n.next)<0?wt(n,e,n.next)>=0&&wt(n,n.prev,e)>=0:wt(n,e,n.prev)<0||wt(n,n.next,e)<0}function Nf(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function pu(n,e){let t=Il(n.i,n.x,n.y),i=Il(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function mh(n,e,t,i){let s=Il(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function fr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Il(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Uf(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ll=class{static triangulate(e,t,i=2){return yf(e,t,i)}},Ti=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];gh(e),_h(i,e);let o=e.length;t.forEach(gh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,_h(i,t[c]);let a=Ll.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function gh(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function _h(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ln=class n extends gt{constructor(e=new $t([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Ff,A,v=!1,w,b,D,x;if(m){A=m.getSpacedPoints(f),v=!0,h=!1;let se=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(f,se),b=new L,D=new L,x=new L}h||(_=0,d=0,p=0,g=0);let T=a.extractPoints(l),C=T.shape,U=T.holes;if(!Ti.isClockWise(C)){C=C.reverse();for(let se=0,he=U.length;se<he;se++){let de=U[se];Ti.isClockWise(de)&&(U[se]=de.reverse())}}function P(se){let de=10000000000000001e-36,fe=se[0];for(let xe=1;xe<=se.length;xe++){let We=xe%se.length,Ve=se[We],Ye=Ve.x-fe.x,Ke=Ve.y-fe.y,B=Ye*Ye+Ke*Ke,lt=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(fe.x),Math.abs(fe.y)),it=de*lt*lt;if(B<=it){se.splice(We,1),xe--;continue}fe=Ve}}P(C),U.forEach(P);let R=U.length,N=C;for(let se=0;se<R;se++){let he=U[se];C=C.concat(he)}function O(se,he,de){return he||qe("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(he,de)}let V=C.length;function Q(se,he,de){let fe,xe,We,Ve=se.x-he.x,Ye=se.y-he.y,Ke=de.x-se.x,B=de.y-se.y,lt=Ve*Ve+Ye*Ye,it=Ve*B-Ye*Ke;if(Math.abs(it)>Number.EPSILON){let I=Math.sqrt(lt),y=Math.sqrt(Ke*Ke+B*B),H=he.x-Ye/I,Z=he.y+Ve/I,ee=de.x-B/y,me=de.y+Ke/y,_e=((ee-H)*B-(me-Z)*Ke)/(Ve*B-Ye*Ke);fe=H+Ve*_e-se.x,xe=Z+Ye*_e-se.y;let te=fe*fe+xe*xe;if(te<=2)return new ce(fe,xe);We=Math.sqrt(te/2)}else{let I=!1;Ve>Number.EPSILON?Ke>Number.EPSILON&&(I=!0):Ve<-Number.EPSILON?Ke<-Number.EPSILON&&(I=!0):Math.sign(Ye)===Math.sign(B)&&(I=!0),I?(fe=-Ye,xe=Ve,We=Math.sqrt(lt)):(fe=Ve,xe=Ye,We=Math.sqrt(lt/2))}return new ce(fe/We,xe/We)}let J=[];for(let se=0,he=N.length,de=he-1,fe=se+1;se<he;se++,de++,fe++)de===he&&(de=0),fe===he&&(fe=0),J[se]=Q(N[se],N[de],N[fe]);let q=[],K,ae=J.concat();for(let se=0,he=R;se<he;se++){let de=U[se];K=[];for(let fe=0,xe=de.length,We=xe-1,Ve=fe+1;fe<xe;fe++,We++,Ve++)We===xe&&(We=0),Ve===xe&&(Ve=0),K[fe]=Q(de[fe],de[We],de[Ve]);q.push(K),ae=ae.concat(K)}let pe;if(_===0)pe=Ti.triangulateShape(N,U);else{let se=[],he=[];for(let de=0;de<_;de++){let fe=de/_,xe=d*Math.cos(fe*Math.PI/2),We=p*Math.sin(fe*Math.PI/2)+g;for(let Ve=0,Ye=N.length;Ve<Ye;Ve++){let Ke=O(N[Ve],J[Ve],We);ue(Ke.x,Ke.y,-xe),fe===0&&se.push(Ke)}for(let Ve=0,Ye=R;Ve<Ye;Ve++){let Ke=U[Ve];K=q[Ve];let B=[];for(let lt=0,it=Ke.length;lt<it;lt++){let I=O(Ke[lt],K[lt],We);ue(I.x,I.y,-xe),fe===0&&B.push(I)}fe===0&&he.push(B)}}pe=Ti.triangulateShape(se,he)}let ke=pe.length,ie=p+g;for(let se=0;se<V;se++){let he=h?O(C[se],ae[se],ie):C[se];v?(D.copy(w.normals[0]).multiplyScalar(he.x),b.copy(w.binormals[0]).multiplyScalar(he.y),x.copy(A[0]).add(D).add(b),ue(x.x,x.y,x.z)):ue(he.x,he.y,0)}for(let se=1;se<=f;se++)for(let he=0;he<V;he++){let de=h?O(C[he],ae[he],ie):C[he];v?(D.copy(w.normals[se]).multiplyScalar(de.x),b.copy(w.binormals[se]).multiplyScalar(de.y),x.copy(A[se]).add(D).add(b),ue(x.x,x.y,x.z)):ue(de.x,de.y,u/f*se)}for(let se=_-1;se>=0;se--){let he=se/_,de=d*Math.cos(he*Math.PI/2),fe=p*Math.sin(he*Math.PI/2)+g;for(let xe=0,We=N.length;xe<We;xe++){let Ve=O(N[xe],J[xe],fe);ue(Ve.x,Ve.y,u+de)}for(let xe=0,We=U.length;xe<We;xe++){let Ve=U[xe];K=q[xe];for(let Ye=0,Ke=Ve.length;Ye<Ke;Ye++){let B=O(Ve[Ye],K[Ye],fe);v?ue(B.x,B.y+A[f-1].y,A[f-1].x+de):ue(B.x,B.y,u+de)}}}ge(),G();function ge(){let se=s.length/3;if(h){let he=0,de=V*he;for(let fe=0;fe<ke;fe++){let xe=pe[fe];Ge(xe[2]+de,xe[1]+de,xe[0]+de)}he=f+_*2,de=V*he;for(let fe=0;fe<ke;fe++){let xe=pe[fe];Ge(xe[0]+de,xe[1]+de,xe[2]+de)}}else{for(let he=0;he<ke;he++){let de=pe[he];Ge(de[2],de[1],de[0])}for(let he=0;he<ke;he++){let de=pe[he];Ge(de[0]+V*f,de[1]+V*f,de[2]+V*f)}}i.addGroup(se,s.length/3-se,0)}function G(){let se=s.length/3,he=0;j(N,he),he+=N.length;for(let de=0,fe=U.length;de<fe;de++){let xe=U[de];j(xe,he),he+=xe.length}i.addGroup(se,s.length/3-se,1)}function j(se,he){let de=se.length;for(;--de>=0;){let fe=de,xe=de-1;xe<0&&(xe=se.length-1);for(let We=0,Ve=f+_*2;We<Ve;We++){let Ye=V*We,Ke=V*(We+1),B=he+fe+Ye,lt=he+xe+Ye,it=he+xe+Ke,I=he+fe+Ke;Ae(B,lt,it,I)}}}function ue(se,he,de){c.push(se),c.push(he),c.push(de)}function Ge(se,he,de){Ce(se),Ce(he),Ce(de);let fe=s.length/3,xe=M.generateTopUV(i,s,fe-3,fe-2,fe-1);ot(xe[0]),ot(xe[1]),ot(xe[2])}function Ae(se,he,de,fe){Ce(se),Ce(he),Ce(fe),Ce(he),Ce(de),Ce(fe);let xe=s.length/3,We=M.generateSideWallUV(i,s,xe-6,xe-3,xe-2,xe-1);ot(We[0]),ot(We[1]),ot(We[3]),ot(We[1]),ot(We[2]),ot(We[3])}function Ce(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function ot(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Of(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Uo[s.type]().fromJSON(s)),new n(i,e.options)}},Ff={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],f=e[s*3+1];return[new ce(r,o),new ce(a,c),new ce(l,f)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],f=e[i*3+1],u=e[i*3+2],h=e[s*3],d=e[s*3+1],p=e[s*3+2],g=e[r*3],_=e[r*3+1],m=e[r*3+2];return Math.abs(a-f)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-u),new ce(h,1-p),new ce(g,1-m)]:[new ce(a,1-c),new ce(f,1-u),new ce(d,1-p),new ce(_,1-m)]}};function Of(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var li=class n extends gt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],f=1/t,u=new L,h=new ce,d=new L,p=new L,g=new L,_=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:_=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-_,d.z=m*0,g.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:_=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-_,d.z=m*0,p.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),c.push(d.x,d.y,d.z),g.copy(p)}for(let M=0;M<=t;M++){let A=i+M*f*s,v=Math.sin(A),w=Math.cos(A);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*v,u.y=e[b].y,u.z=e[b].x*w,o.push(u.x,u.y,u.z),h.x=M/t,h.y=b/(e.length-1),a.push(h.x,h.y);let D=c[3*b+0]*v,x=c[3*b+1],T=c[3*b+0]*w;l.push(D,x,T)}}for(let M=0;M<t;M++)for(let A=0;A<e.length-1;A++){let v=A+M*e.length,w=v,b=v+e.length,D=v+e.length+1,x=v+1;r.push(w,b,x),r.push(D,x,b)}this.setIndex(r),this.setAttribute("position",new tt(o,3)),this.setAttribute("uv",new tt(a,2)),this.setAttribute("normal",new tt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Un=class n extends gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,f=c+1,u=e/a,h=t/c,d=[],p=[],g=[],_=[];for(let m=0;m<f;m++){let M=m*h-o;for(let A=0;A<l;A++){let v=A*u-r;p.push(v,-M,0),g.push(0,0,1),_.push(A/a),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let A=M+l*m,v=M+l*(m+1),w=M+1+l*(m+1),b=M+1+l*m;d.push(A,v,b),d.push(v,w,b)}this.setIndex(d),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ci=class n extends gt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,f=[],u=new L,h=new L,d=[],p=[],g=[],_=[];for(let m=0;m<=i;m++){let M=[],A=m/i,v=o+A*a,w=e*Math.cos(v),b=Math.sqrt(e*e-w*w),D=0;m===0&&o===0?D=.5/t:m===i&&c===Math.PI&&(D=-.5/t);for(let x=0;x<=t;x++){let T=x/t,C=s+T*r;u.x=-b*Math.cos(C),u.y=w,u.z=b*Math.sin(C),p.push(u.x,u.y,u.z),h.copy(u).normalize(),g.push(h.x,h.y,h.z),_.push(T+D,1-A),M.push(l++)}f.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){let A=f[m][M+1],v=f[m][M],w=f[m+1][M],b=f[m+1][M+1];(m!==0||o>0)&&d.push(A,v,b),(m!==i-1||c<Math.PI)&&d.push(v,w,b)}this.setIndex(d),this.setAttribute("position",new tt(p,3)),this.setAttribute("normal",new tt(g,3)),this.setAttribute("uv",new tt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Gt=class n extends gt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],f=[],u=[],h=new L,d=new L,p=new L;for(let g=0;g<=i;g++){let _=o+g/i*a;for(let m=0;m<=s;m++){let M=m/s*r;d.x=(e+t*Math.cos(_))*Math.cos(M),d.y=(e+t*Math.cos(_))*Math.sin(M),d.z=t*Math.sin(_),l.push(d.x,d.y,d.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),p.subVectors(d,h).normalize(),f.push(p.x,p.y,p.z),u.push(m/s),u.push(g/i)}}for(let g=1;g<=i;g++)for(let _=1;_<=s;_++){let m=(s+1)*g+_-1,M=(s+1)*(g-1)+_-1,A=(s+1)*(g-1)+_,v=(s+1)*g+_;c.push(m,M,v),c.push(M,A,v)}this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var pr=class n extends gt{constructor(e=new cr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new ce,f=new L,u=[],h=[],d=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function g(){for(let A=0;A<t;A++)_(A);_(r===!1?t:0),M(),m()}function _(A){f=e.getPointAt(A/t,f);let v=o.normals[A],w=o.binormals[A];for(let b=0;b<=s;b++){let D=b/s*Math.PI*2,x=Math.sin(D),T=-Math.cos(D);c.x=T*v.x+x*w.x,c.y=T*v.y+x*w.y,c.z=T*v.z+x*w.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=f.x+i*c.x,a.y=f.y+i*c.y,a.z=f.z+i*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let A=1;A<=t;A++)for(let v=1;v<=s;v++){let w=(s+1)*(A-1)+(v-1),b=(s+1)*A+(v-1),D=(s+1)*A+v,x=(s+1)*(A-1)+v;p.push(w,b,x),p.push(b,D,x)}}function M(){for(let A=0;A<=t;A++)for(let v=0;v<=s;v++)l.x=A/t,l.y=v/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var mr=class extends Mn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Fi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(xh(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(xh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Wt(n){let e={};for(let t=0;t<n.length;t++){let i=Fi(n[t]);for(let s in i)e[s]=i[s]}return e}function xh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bf(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ac(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var mu={clone:Fi,merge:Wt},zf=`void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
  gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new L().fromArray(s.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[i].value=new dt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oo=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bn=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_s=class extends bn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pi=class extends Mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dr,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bo=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zo=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function es(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function El(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var hi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ko=class extends hi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Al,endingEnd:Al}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rl:r=e,a=2*t-i;break;case Cl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Rl:o=e,c=2*i-t;break;case Cl:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,f=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),g=p*p,_=g*p,m=-h*_+2*h*g-h*p,M=(1+h)*_+(-1.5-2*h)*g+(-.5+h)*p+1,A=(-1-d)*_+(1.5+d)*g+.5*p,v=d*_-d*g;for(let w=0;w!==a;++w)r[w]=m*o[f+w]+M*o[l+w]+A*o[c+w]+v*o[u+w];return r}},Vo=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=(i-t)/(s-t),u=1-f;for(let h=0;h!==a;++h)r[h]=o[l+h]*u+o[c+h]*f;return r}},Ho=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Go=class extends hi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,f=this.inTangents,u=this.outTangents;if(!f||!u){let p=(i-t)/(s-t),g=1-p;for(let _=0;_!==a;++_)r[_]=o[l+_]*g+o[c+_]*p;return r}let h=a*2,d=e-1;for(let p=0;p!==a;++p){let g=o[l+p],_=o[c+p],m=d*h+p*2,M=u[m],A=u[m+1],v=e*h+p*2,w=f[v],b=f[v+1],D=Hf(i,t,M,w,s);r[p]=gu(D,g,A,b,_)}return r}};function gu(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Vf(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Hf(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=gu(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=Vf(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),El(e.settings)&&(i.settings={inTangents:es(e.settings.inTangents,Array),outTangents:es(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Go(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case Eo:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth;break;case Tl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return fo;case this.InterpolantFactoryMethodBezier:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;El(this.settings)&&(yh(this.settings.inTangents,e),yh(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){qe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){qe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Cd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){qe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fo,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],f=e[a+1];if(l!==f&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,h=u-i,d=u+i;for(let p=0;p!==i;++p){let g=t[u+p];if(g!==t[h+p]||g!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,El(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function yh(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Eo;var ui=class extends hn{constructor(e,t,i){super(e,t,i)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Xs;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};Wo.prototype.ValueTypeName="color";var Xo=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};Xo.prototype.ValueTypeName="number";var qo=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let f=l+a;l!==f;l+=4)on.slerpFlat(r,0,o,l-a,o,l,c);return r}},gr=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new qo(this.times,this.values,this.getValueSize(),e)}};gr.prototype.ValueTypeName="quaternion";gr.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends hn{constructor(e,t,i){super(e,t,i)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Xs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};Yo.prototype.ValueTypeName="vector";var Zo=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){let u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=l.length;u<h;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_u=new Zo,Jo=class{constructor(e){this.manager=e!==void 0?e:_u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Jo.DEFAULT_MATERIAL_NAME="__DEFAULT";var xs=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_r=class extends xs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wl=new dt,vh=new L,Sh=new L,xr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=jt,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(vh),Sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(wl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===os||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},co=new L,ho=new on,Cn=new L,yr=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(co,ho,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,ho,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(co,ho,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(co,ho,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ii=new L,Mh=new ce,bh=new ce,Ot=class extends yr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Mh,bh),t.subVectors(bh,Mh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Dl=class extends xr{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0}},vr=class extends xs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Dl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Yn=class extends yr{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nl=class extends xr{constructor(){super(new Yn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ii=class extends xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Nl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ts=-90,ns=1,Ko=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(ts,ns,e,t);s.layers=this.layers,this.add(s);let r=new Ot(ts,ns,e,t);r.layers=this.layers,this.add(r);let o=new Ot(ts,ns,e,t);o.layers=this.layers,this.add(o);let a=new Ot(ts,ns,e,t);a.layers=this.layers,this.add(a);let c=new Ot(ts,ns,e,t);c.layers=this.layers,this.add(c);let l=new Ot(ts,ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===os)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(u,h,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},$o=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var lc="\\[\\]\\.:\\/",Gf=new RegExp("["+lc+"]","g"),cc="[^"+lc+"]",Wf="[^"+lc.replace("\\.","")+"]",Xf=/((?:WC+[\/:])*)/.source.replace("WC",cc),qf=/(WCOD+)?/.source.replace("WCOD",Wf),Yf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),Zf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),Jf=new RegExp("^"+Xf+qf+Yf+Zf+"$"),Kf=["material","materials","bones","map"],Ul=class{constructor(e,t,i){let s=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gf,"")}static parseTrackName(e){let t=Jf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Kf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Ul;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bx=new Float32Array(1);var Eh=new dt,Sr=class{constructor(e,t,i=0,s=1/0){this.ray=new ri(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eh),this}intersectObject(e,t=!0,i=[]){return Fl(e,this,i,t),i.sort(wh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Fl(e[s],this,i,t);return i.sort(wh),i}};function wh(n,e){return n.distance-e.distance}function Fl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Fl(r[o],e,t,!0)}}var ys=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ol=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var uo=new Et,Mr=class extends fs{constructor(e,t=16776960){let i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new gt;r.setIndex(new Yt(i,1)),r.setAttribute("position",new Yt(s,3)),super(r,new Ri({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&uo.setFromObject(this.object),uo.isEmpty())return;let e=uo.min,t=uo.max,i=this.geometry.attributes.position,s=i.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var br=class extends Sn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function hc(n,e,t,i){let s=$f(i);switch(t){case tc:return n*e;case ra:return n*e/s.components*s.byteLength;case oa:return n*e/s.components*s.byteLength;case yi:return n*e*2/s.components*s.byteLength;case aa:return n*e*2/s.components*s.byteLength;case nc:return n*e*3/s.components*s.byteLength;case pn:return n*e*4/s.components*s.byteLength;case la:return n*e*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cr:case Pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ha:case da:return Math.max(n,16)*Math.max(e,8)/4;case ca:case ua:return Math.max(n,8)*Math.max(e,8)/2;case fa:case pa:case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ma:case Ir:case xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ba:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case La:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Da:case Na:case Ua:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Fa:case Oa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Lr:case Ba:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $f(n){switch(n){case jt:case $l:return{byteLength:1,components:1};case Ms:case jl:case Tn:return{byteLength:2,components:1};case ia:case sa:return{byteLength:2,components:4};case wn:case na:case fn:return{byteLength:4,components:1};case Ql:case ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zu(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ep(n){let e=new WeakMap;function t(a,c){let l=a.array,f=a.usage,u=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,f),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let f=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,f);else{u.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<u.length;d++){let p=u[h],g=u[d];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++h,u[h]=g)}u.length=h+1;for(let d=0,p=u.length;d<p;d++){let g=u[d];n.bufferSubData(l,g.start*f.BYTES_PER_ELEMENT,f,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var tp=`#ifdef USE_ALPHAHASH
  if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
  diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
  uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
  #ifdef ALPHA_TO_COVERAGE
  diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
  if ( diffuseColor.a == 0.0 ) discard;
  #else
  if ( diffuseColor.a < alphaTest ) discard;
  #endif
#endif`,op=`#ifdef USE_ALPHATEST
  uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
  uniform sampler2D aoMap;
  uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
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
#endif`,hp=`#ifdef USE_BATCHING
  mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
  vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
  vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
  uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
  vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  diffuseColor *= vColor;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ep=`#define PI 3.141592653589793
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
} // validated`,wp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
  uniform sampler2D displacementMap;
  uniform float displacementScale;
  uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
  transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
  vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
  #ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
    emissiveColor = sRGBTransferEOTF( emissiveColor );
  #endif
  totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
  uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`vec4 LinearTransferOETF( in vec4 value ) {
  return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
  uniform float envMapIntensity;
  uniform mat3 envMapRotation;
  #ifdef ENVMAP_TYPE_CUBE
    uniform samplerCube envMap;
  #else
    uniform sampler2D envMap;
  #endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
  #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
    #define ENV_WORLDPOS
  #endif
  #ifdef ENV_WORLDPOS

    varying vec3 vWorldPosition;
  #else
    varying vec3 vReflect;
    uniform float refractionRatio;
  #endif
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
  varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vp=`#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Gp=`#ifdef USE_LIGHTMAP
  uniform sampler2D lightMap;
  uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
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
#endif`,Qp=`uniform sampler2D dfgLUT;
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
}`,em=`
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
  #if defined( LAMBERT ) || defined( PHONG )
    irradiance += iblIrradiance;
  #endif
  RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
  RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  uniform float logDepthBufFC;
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  vFragDepth = 1.0 + gl_Position.w;
  vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D( map, vMapUv );
  #ifdef DECODE_VIDEO_TEXTURE
    sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
  #endif
  diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
  uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,um=`#if defined( USE_POINTS_UV )
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
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
  vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
  metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
  uniform sampler2D metalnessMap;
#endif`,pm=`#ifdef USE_INSTANCING_MORPH
  float morphTargetInfluences[ MORPHTARGETS_COUNT ];
  float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
  }
#endif`,mm=`#if defined( USE_MORPHCOLORS )
  vColor *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    #if defined( USE_COLOR_ALPHA )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
    #elif defined( USE_COLOR )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
    #endif
  }
#endif`,gm=`#ifdef USE_MORPHNORMALS
  objectNormal *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
  transformed *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sm=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,Mm=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,bm=`#ifndef FLAT_SHADED
  vNormal = normalize( transformedNormal );
  #ifdef USE_TANGENT
    vTangent = normalize( transformedTangent );
    vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
    #ifdef FLIP_SIDED
      vBitangent = - vBitangent;
    #endif
  #endif
#endif`,Em=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
  vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
  vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
  clearcoatMapN.xy *= clearcoatNormalScale;
  clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Am=`#ifdef USE_CLEARCOATMAP
  uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  uniform sampler2D clearcoatNormalMap;
  uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
  uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
  gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
  gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
  vec3 dithering( vec3 color ) {
    float grid_position = rand( gl_FragCoord.xy );
    vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
    dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
    return color + dither_shift_RGB;
  }
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
  vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
  roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
  uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Vm=`#ifdef USE_SKINNING
  mat4 boneMatX = getBoneMatrix( skinIndex.x );
  mat4 boneMatY = getBoneMatrix( skinIndex.y );
  mat4 boneMatZ = getBoneMatrix( skinIndex.z );
  mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Gm=`#ifdef USE_SKINNING
  vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
  vec4 skinned = vec4( 0.0 );
  skinned += boneMatX * skinVertex * skinWeight.x;
  skinned += boneMatY * skinVertex * skinWeight.y;
  skinned += boneMatZ * skinVertex * skinWeight.z;
  skinned += boneMatW * skinVertex * skinWeight.w;
  transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
  vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
  specularStrength = texelSpecular.r;
#else
  specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
  uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
  vec4 worldPosition = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
    worldPosition = batchingMatrix * worldPosition;
  #endif
  #ifdef USE_INSTANCING
    worldPosition = instanceMatrix * worldPosition;
  #endif
  worldPosition = modelMatrix * worldPosition;
#endif`,t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
  vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,s0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,o0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
  vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
  gl_FragColor = texColor;
  gl_FragColor.a *= opacity;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,a0=`#include <common>
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
}`,l0=`#if DEPTH_PACKING == 3200
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
}`,c0=`#define DISTANCE
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
}`,h0=`#define DISTANCE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
  vec3 direction = normalize( vWorldDirection );
  vec2 sampleUV = equirectUv( direction );
  gl_FragColor = texture2D( tEquirect, sampleUV );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,x0=`#define LAMBERT
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
}`,y0=`#define MATCAP
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
}`,v0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,M0=`#define NORMAL
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
}`,b0=`#define PHONG
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
}`,E0=`#define PHONG
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
}`,w0=`#define STANDARD
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
}`,T0=`#define STANDARD
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
}`,A0=`#define TOON
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
}`,R0=`#define TOON
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
}`,C0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,L0=`uniform vec3 color;
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
}`,D0=`uniform float rotation;
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
}`,N0=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:tp,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:op,aomap_fragment:ap,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:dp,bsdfs:fp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:xp,clipping_planes_vertex:yp,color_fragment:vp,color_pars_fragment:Sp,color_pars_vertex:Mp,color_vertex:bp,common:Ep,cube_uv_reflection_fragment:wp,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Ip,colorspace_pars_fragment:Lp,envmap_fragment:Dp,envmap_common_pars_fragment:Np,envmap_pars_fragment:Up,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:Yp,envmap_vertex:Op,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:kp,fog_pars_fragment:Vp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:qp,lights_toon_fragment:Zp,lights_toon_pars_fragment:Jp,lights_phong_fragment:Kp,lights_phong_pars_fragment:$p,lights_physical_fragment:jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:em,lights_fragment_maps:tm,lights_fragment_end:nm,lightprobes_pars_fragment:im,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:rm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:am,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:hm,map_particle_pars_fragment:um,metalnessmap_fragment:dm,metalnessmap_pars_fragment:fm,morphinstance_vertex:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:xm,normal_fragment_begin:ym,normal_fragment_maps:vm,normal_pars_fragment:Sm,normal_pars_vertex:Mm,normal_vertex:bm,normalmap_pars_fragment:Em,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Am,iridescence_pars_fragment:Rm,opaque_fragment:Cm,packing:Pm,premultiplied_alpha_fragment:Im,project_vertex:Lm,dithering_fragment:Dm,dithering_pars_fragment:Nm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Vm,skinning_pars_vertex:Hm,skinning_vertex:Gm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:Zm,transmission_fragment:Jm,transmission_pars_fragment:Km,uv_pars_fragment:$m,uv_pars_vertex:jm,uv_vertex:Qm,worldpos_vertex:e0,background_vert:t0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:s0,cube_vert:r0,cube_frag:o0,depth_vert:a0,depth_frag:l0,distance_vert:c0,distance_frag:h0,equirect_vert:u0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:x0,meshmatcap_vert:y0,meshmatcap_frag:v0,meshnormal_vert:S0,meshnormal_frag:M0,meshphong_vert:b0,meshphong_frag:E0,meshphysical_vert:w0,meshphysical_frag:T0,meshtoon_vert:A0,meshtoon_frag:R0,points_vert:C0,points_frag:P0,shadow_vert:I0,shadow_frag:L0,sprite_vert:D0,sprite_frag:N0},Ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Bn={basic:{uniforms:Wt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Wt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Wt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Wt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Wt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Wt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Wt([Ee.points,Ee.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Wt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Wt([Ee.common,Ee.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Wt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Wt([Ee.sprite,Ee.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Wt([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Wt([Ee.lights,Ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Bn.physical={uniforms:Wt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Va={r:0,b:0,g:0},U0=new dt,ku=new Je;ku.set(-1,0,0,0,1,0,0,0,1);function F0(n,e,t,i,s,r){let o=new Ze(0),a=s===!0?0:1,c,l,f=null,u=0,h=null;function d(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let v=M.backgroundBlurriness>0;A=e.get(A,v)}return A}function p(M){let A=!1,v=d(M);v===null?_(o,a):v&&v.isColor&&(_(v,1),A=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,A){let v=d(A);v&&(v.isCubeTexture||v.mapping===wr)?(l===void 0&&(l=new Ne(new Kt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Fi(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,b,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ku),l.material.toneMapped=rt.getTransfer(v.colorSpace)!==ut,(f!==v||u!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ne(new Un(2,2),new cn({name:"BackgroundMaterial",uniforms:Fi(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=rt.getTransfer(v.colorSpace)!==ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function _(M,A){M.getRGB(Va,ac(n)),t.buffers.color.setClear(Va.r,Va.g,Va.b,A,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,_(o,a)},render:p,addToRenderList:g,dispose:m}}function O0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(U,E,P,R,N){let O=!1,V=u(U,R,P,E);r!==V&&(r=V,l(r.object)),O=d(U,R,P,N),O&&p(U,R,P,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(U,E,P,R),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function f(U){return n.deleteVertexArray(U)}function u(U,E,P,R){let N=R.wireframe===!0,O=i[E.id];O===void 0&&(O={},i[E.id]=O);let V=U.isInstancedMesh===!0?U.id:0,Q=O[V];Q===void 0&&(Q={},O[V]=Q);let J=Q[P.id];J===void 0&&(J={},Q[P.id]=J);let q=J[N];return q===void 0&&(q=h(c()),J[N]=q),q}function h(U){let E=[],P=[],R=[];for(let N=0;N<t;N++)E[N]=0,P[N]=0,R[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:P,attributeDivisors:R,object:U,attributes:{},index:null}}function d(U,E,P,R){let N=r.attributes,O=E.attributes,V=0,Q=P.getAttributes();for(let J in Q)if(Q[J].location>=0){let K=N[J],ae=O[J];if(ae===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),K===void 0||K.attribute!==ae||ae&&K.data!==ae.data)return!0;V++}return r.attributesNum!==V||r.index!==R}function p(U,E,P,R){let N={},O=E.attributes,V=0,Q=P.getAttributes();for(let J in Q)if(Q[J].location>=0){let K=O[J];K===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(K=U.instanceColor));let ae={};ae.attribute=K,K&&K.data&&(ae.data=K.data),N[J]=ae,V++}r.attributes=N,r.attributesNum=V,r.index=R}function g(){let U=r.newAttributes;for(let E=0,P=U.length;E<P;E++)U[E]=0}function _(U){m(U,0)}function m(U,E){let P=r.newAttributes,R=r.enabledAttributes,N=r.attributeDivisors;P[U]=1,R[U]===0&&(n.enableVertexAttribArray(U),R[U]=1),N[U]!==E&&(n.vertexAttribDivisor(U,E),N[U]=E)}function M(){let U=r.newAttributes,E=r.enabledAttributes;for(let P=0,R=E.length;P<R;P++)E[P]!==U[P]&&(n.disableVertexAttribArray(P),E[P]=0)}function A(U,E,P,R,N,O,V){V===!0?n.vertexAttribIPointer(U,E,P,N,O):n.vertexAttribPointer(U,E,P,R,N,O)}function v(U,E,P,R){g();let N=R.attributes,O=P.getAttributes(),V=E.defaultAttributeValues;for(let Q in O){let J=O[Q];if(J.location>=0){let q=N[Q];if(q===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(q=U.instanceColor)),q!==void 0){let K=q.normalized,ae=q.itemSize,pe=e.get(q);if(pe===void 0)continue;let ke=pe.buffer,ie=pe.type,ge=pe.bytesPerElement,G=ie===n.INT||ie===n.UNSIGNED_INT||q.gpuType===na;if(q.isInterleavedBufferAttribute){let j=q.data,ue=j.stride,Ge=q.offset;if(j.isInstancedInterleavedBuffer){for(let Ae=0;Ae<J.locationSize;Ae++)m(J.location+Ae,j.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ae=0;Ae<J.locationSize;Ae++)_(J.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Ae=0;Ae<J.locationSize;Ae++)A(J.location+Ae,ae/J.locationSize,ie,K,ue*ge,(Ge+ae/J.locationSize*Ae)*ge,G)}else{if(q.isInstancedBufferAttribute){for(let j=0;j<J.locationSize;j++)m(J.location+j,q.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let j=0;j<J.locationSize;j++)_(J.location+j);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let j=0;j<J.locationSize;j++)A(J.location+j,ae/J.locationSize,ie,K,ae*ge,ae/J.locationSize*j*ge,G)}}else if(V!==void 0){let K=V[Q];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(J.location,K);break;case 3:n.vertexAttrib3fv(J.location,K);break;case 4:n.vertexAttrib4fv(J.location,K);break;default:n.vertexAttrib1fv(J.location,K)}}}}M()}function w(){T();for(let U in i){let E=i[U];for(let P in E){let R=E[P];for(let N in R){let O=R[N];for(let V in O)f(O[V].object),delete O[V];delete R[N]}}delete i[U]}}function b(U){if(i[U.id]===void 0)return;let E=i[U.id];for(let P in E){let R=E[P];for(let N in R){let O=R[N];for(let V in O)f(O[V].object),delete O[V];delete R[N]}}delete i[U.id]}function D(U){for(let E in i){let P=i[E];for(let R in P){let N=P[R];if(N[U.id]===void 0)continue;let O=N[U.id];for(let V in O)f(O[V].object),delete O[V];delete N[U.id]}}}function x(U){for(let E in i){let P=i[E],R=U.isInstancedMesh===!0?U.id:0,N=P[R];if(N!==void 0){for(let O in N){let V=N[O];for(let Q in V)f(V[Q].object),delete V[Q];delete N[O]}delete P[R],Object.keys(P).length===0&&delete i[E]}}}function T(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:_,disableUnusedAttributes:M}}function B0(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,f){f!==0&&(n.drawArraysInstanced(i,c,l,f),t.update(l,i,f))}function a(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,f);let h=0;for(let d=0;d<f;d++)h+=l[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function z0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==pn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let x=D===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==jt&&D!==fn&&!x&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",f=c(l);f!==l&&(He("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:v,maxSamples:w,samples:b}}function k0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new rn,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||i!==0||s;return s=h,i=u.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,d){let p=u.clippingPlanes,g=u.clipIntersection,_=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!_)r?f(null):l();else{let M=r?0:i,A=M*4,v=m.clippingState||null;c.value=v,v=f(p,h,A,d);for(let w=0;w!==A;++w)v[w]=t[w];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,d,p){let g=u!==null?u.length:0,_=null;if(g!==0){if(_=c.value,p!==!0||_===null){let m=d+g*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(_===null||_.length<m)&&(_=new Float32Array(m));for(let A=0,v=d;A!==g;++A,v+=4)o.copy(u[A]).applyMatrix4(M,a),o.normal.toArray(_,v),_[v+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}var Ts=4,V0=6,H0=20,G0=256,Nr=new Yn,xu=new Ze,uc=null,dc=0,fc=0,pc=!1,W0=new L,Oi=new L,Rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=W0}=r;uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uc,dc,fc),this._renderer.xr.enabled=pc,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Tn,format:pn,colorSpace:qs,depthBuffer:!1},s=yu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=X0(r)),this._blurMaterial=Y0(r,e,t),this._ggxMaterial=q0(r,e,t)}return s}_compileMaterial(e){let t=new Ne(new gt,e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,i,s,r){let c=new Ot(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(xu),u.toneMapping=En,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new Kt,new oi({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,_=g.material,m=!1,M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,m=!0):(_.color.copy(xu),m=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+f[A],r.y,r.z)):v===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+f[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+f[A]));let w=this._cubeSize;ws(s,v*w,A>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(g,c),u.render(e,c)}u.toneMapping=d,u.autoClear=h,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===gi||e.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;ws(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Nr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-f*f),h=l*1.25,d=u*h,{_lodMax:p}=this,g=this._sizeLods[i],_=3*g*(i>p-Ts?i-p+Ts:0),m=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=p-t,ws(r,_,m,3*g,2*g),s.setRenderTarget(r),s.render(a,Nr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-i,ws(e,_,m,3*g,2*g),s.setRenderTarget(e),s.render(a,Nr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let f=this._sizeLods[s],u=3*f*(s>this._lodMax-Ts?s-this._lodMax+Ts:0),h=4*(this._cubeSize-f);ws(t,u,h,3*f,2*f),o.setRenderTarget(t),o.render(c,Nr)}};function X0(n){let e=[],t=[],i=n,s=n-Ts+1+V0;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),c=-a,l=1+a,f=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,h=6,d=3,p=new Float32Array(d*h*u),g=new Float32Array(d*h*u);for(let m=0;m<u;m++){let M=m%3*2/3-1,A=m>2?0:-1,v=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];p.set(v,d*h*m);for(let w=0;w<h;w++){let b=f[w*2]*2-1,D=f[w*2+1]*2-1;m===0?Oi.set(1,D,b):m===1?Oi.set(-b,1,-D):m===2?Oi.set(-b,D,1):m===3?Oi.set(-1,D,-b):m===4?Oi.set(-b,-1,D):Oi.set(b,D,-1),Oi.toArray(g,(m*h+w)*d)}}let _=new gt;_.setAttribute("position",new Yt(p,d)),_.setAttribute("outputDirection",new Yt(g,d)),t.push(new Ne(_,null)),i>Ts&&i--}return{lodMeshes:t,sizeLods:e}}function yu(n,e,t){let i=new Jt(n,e,t);return i.texture.mapping=wr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function q0(n,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

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
    `,blending:Fn,depthTest:!1,depthWrite:!1})}function Y0(n,e,t){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:H0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

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
    `,blending:Fn,depthTest:!1,depthWrite:!1})}function vu(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
    `,blending:Fn,depthTest:!1,depthWrite:!1})}function Su(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

      precision mediump float;
      precision mediump int;

      uniform float flipEnvMap;

      varying vec3 vOutputDirection;

      uniform samplerCube envMap;

      void main() {

        gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

      }
    `,blending:Fn,depthTest:!1,depthWrite:!1})}function Xa(){return`

    precision mediump float;
    precision mediump int;

    attribute vec3 outputDirection;

    varying vec3 vOutputDirection;

    void main() {

      vOutputDirection = outputDirection;
      gl_Position = vec4( position, 1.0 );

    }
  `}var Ga=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new tr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
      `},s=new Kt(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Fi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Fn});r.uniforms.tEquirect.value=t;let o=new Ne(s,r),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=Bt),new Ko(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function Z0(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Qo||d===ea)if(e.has(h)){let p=e.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let g=new Ga(p.height);return g.fromEquirectangularTexture(n,h),e.set(h,g),h.addEventListener("dispose",l),a(g.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,p=d===Qo||d===ea,g=d===gi||d===Ni;if(p||g){let _=t.get(h),m=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new Rs(n)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{let M=h.image;return p&&M&&M.height>0||g&&M&&c(M)?(i===null&&(i=new Rs(n)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",f),_.texture):null}}}return h}function a(h,d){return d===Qo?h.mapping=gi:d===ea&&(h.mapping=Ni),h}function c(h){let d=0,p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function l(h){let d=h.target;d.removeEventListener("dispose",l);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(h){let d=h.target;d.removeEventListener("dispose",f);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function J0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ai("WebGLRenderer: "+i+" extension not supported."),s}}}function K0(n,e,t,i){let s={},r=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function c(u){let h=u.attributes;for(let d in h)e.update(h[d],n.ARRAY_BUFFER)}function l(u){let h=[],d=u.index,p=u.attributes.position,g=0;if(p===void 0)return;if(d!==null){let M=d.array;g=d.version;for(let A=0,v=M.length;A<v;A+=3){let w=M[A+0],b=M[A+1],D=M[A+2];h.push(w,b,b,D,D,w)}}else{let M=p.array;g=p.version;for(let A=0,v=M.length/3-1;A<v;A+=3){let w=A+0,b=A+1,D=A+2;h.push(w,b,b,D,D,w)}}let _=new(p.count>=65535?$s:Ks)(h,1);_.version=g;let m=r.get(u);m&&e.remove(m),r.set(u,_)}function f(u){let h=r.get(u);if(h){let d=u.index;d!==null&&h.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:f}}function $0(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,h){n.drawElements(i,h,r,u*o),t.update(h,i,1)}function l(u,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,u*o,d),t.update(h,i,d))}function f(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function j0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Q0(n,e,t){let i=new WeakMap,s=new bt;function r(o,a,c){let l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,h=i.get(a);if(h===void 0||h.count!==u){let T=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;d===!0&&(A=1),p===!0&&(A=2),g===!0&&(A=3);let v=a.attributes.position.count*A,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let b=new Float32Array(v*w*4*u),D=new Js(b,v,w,u);D.type=fn,D.needsUpdate=!0;let x=A*4;for(let C=0;C<u;C++){let U=_[C],E=m[C],P=M[C],R=v*w*4*C;for(let N=0;N<U.count;N++){let O=N*x;d===!0&&(s.fromBufferAttribute(U,N),b[R+O+0]=s.x,b[R+O+1]=s.y,b[R+O+2]=s.z,b[R+O+3]=0),p===!0&&(s.fromBufferAttribute(E,N),b[R+O+4]=s.x,b[R+O+5]=s.y,b[R+O+6]=s.z,b[R+O+7]=0),g===!0&&(s.fromBufferAttribute(P,N),b[R+O+8]=s.x,b[R+O+9]=s.y,b[R+O+10]=s.z,b[R+O+11]=P.itemSize===4?s.w:1)}}h={count:u,texture:D,size:new ce(v,w)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",p),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function eg(n,e,t,i,s){let r=new WeakMap;function o(l){let f=s.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return h}function a(){r=new WeakMap}function c(l){let f=l.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}var tg={[Wl]:"LINEAR_TONE_MAPPING",[Xl]:"REINHARD_TONE_MAPPING",[ql]:"CINEON_TONE_MAPPING",[Er]:"ACES_FILMIC_TONE_MAPPING",[Zl]:"AGX_TONE_MAPPING",[Jl]:"NEUTRAL_TONE_MAPPING",[Yl]:"CUSTOM_TONE_MAPPING"};function ng(n,e,t,i,s,r){let o=new Jt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new gt;l.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new tt([0,2,0,0,2,0],2));let f=new Oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
      }`,depthTest:!1,depthWrite:!1}),u=new Ne(l,f),h=new Yn(-1,1,1,-1,0,1),d=null,p=null,g=!1,_,m=null,M=[],A=!1;this.setSize=function(v,w){o.setSize(v,w),a!==null&&a.setSize(v,w),c!==null&&c.setSize(v,w);for(let b=0;b<M.length;b++){let D=M[b];D.setSize&&D.setSize(v,w)}},this.setEffects=function(v){M=v,A=M.length>0&&M[0].isRenderPass===!0;let w=o.width,b=o.height;M.length>0&&a===null&&(a=new Jt(w,b,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),c=new Jt(w,b,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<M.length;D++){let x=M[D];x.setSize&&x.setSize(w,b)}},this.begin=function(v,w){if(g||v.toneMapping===En&&M.length===0)return!1;if(m=w,w!==null){let b=w.width,D=w.height;(o.width!==b||o.height!==D)&&this.setSize(b,D)}return A===!1&&v.setRenderTarget(o),_=v.toneMapping,v.toneMapping=En,!0},this.hasRenderPass=function(){return A},this.end=function(v,w){v.toneMapping=_,g=!0;let b=o,D=a;for(let x=0;x<M.length;x++){let T=M[x];T.enabled!==!1&&(T.render(v,D,b,w),T.needsSwap!==!1&&(b=D,D=D===a?c:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,f.defines={},rt.getTransfer(d)===ut&&(f.defines.SRGB_TRANSFER="");let x=tg[p];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(m),v.render(u,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),f.dispose()}}var Vu=new Zt,_c=new ai(1,1),Hu=new Js,Gu=new Ao,Wu=new tr,Mu=[],bu=[],Eu=new Float32Array(16),wu=new Float32Array(9),Tu=new Float32Array(4);function Cs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qa(n,e){let t=bu[e];t===void 0&&(t=new Int32Array(e),bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ig(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function sg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function rg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function og(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function ag(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Tu.set(i),n.uniformMatrix2fv(this.addr,!1,Tu),Lt(t,i)}}function lg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;wu.set(i),n.uniformMatrix3fv(this.addr,!1,wu),Lt(t,i)}}function cg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Eu.set(i),n.uniformMatrix4fv(this.addr,!1,Eu),Lt(t,i)}}function hg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ug(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function dg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function fg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function pg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function gg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function _g(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function xg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_c.compareFunction=t.isReversedDepthBuffer()?ka:za,r=_c):r=Vu,t.setTexture2D(e||r,s)}function yg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Gu,s)}function vg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Wu,s)}function Sg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hu,s)}function Mg(n){switch(n){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return og;case 35674:return ag;case 35675:return lg;case 35676:return cg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return Sg}}function bg(n,e){n.uniform1fv(this.addr,e)}function Eg(n,e){let t=Cs(e,this.size,2);n.uniform2fv(this.addr,t)}function wg(n,e){let t=Cs(e,this.size,3);n.uniform3fv(this.addr,t)}function Tg(n,e){let t=Cs(e,this.size,4);n.uniform4fv(this.addr,t)}function Ag(n,e){let t=Cs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Rg(n,e){let t=Cs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cg(n,e){let t=Cs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Pg(n,e){n.uniform1iv(this.addr,e)}function Ig(n,e){n.uniform2iv(this.addr,e)}function Lg(n,e){n.uniform3iv(this.addr,e)}function Dg(n,e){n.uniform4iv(this.addr,e)}function Ng(n,e){n.uniform1uiv(this.addr,e)}function Ug(n,e){n.uniform2uiv(this.addr,e)}function Fg(n,e){n.uniform3uiv(this.addr,e)}function Og(n,e){n.uniform4uiv(this.addr,e)}function Bg(n,e,t){let i=this.cache,s=e.length,r=qa(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=_c:o=Vu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function zg(n,e,t){let i=this.cache,s=e.length,r=qa(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Gu,r[o])}function kg(n,e,t){let i=this.cache,s=e.length,r=qa(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wu,r[o])}function Vg(n,e,t){let i=this.cache,s=e.length,r=qa(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hu,r[o])}function Hg(n){switch(n){case 5126:return bg;case 35664:return Eg;case 35665:return wg;case 35666:return Tg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ng;case 36294:return Ug;case 36295:return Fg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Vg}}var xc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Mg(t.type)}},yc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hg(t.type)}},vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},mc=/(\w+)(\])?(\[|\.)?/g;function Au(n,e){n.seq.push(e),n.map[e.id]=e}function Gg(n,e,t){let i=n.name,s=i.length;for(mc.lastIndex=0;;){let r=mc.exec(i),o=mc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Au(t,l===void 0?new xc(a,n,e):new yc(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new vc(a),Au(t,u)),t=u}}}var As=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Gg(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Ru(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Wg=37297,Xg=0;function qg(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Cu=new Je;function Yg(n){rt._getMatrix(Cu,rt.workingColorSpace,n);let e=`mat3( ${Cu.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case Ys:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+qg(n.getShaderSource(e),a)}else return r}function Zg(n,e){let t=Yg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Jg={[Wl]:"Linear",[Xl]:"Reinhard",[ql]:"Cineon",[Er]:"ACESFilmic",[Zl]:"AgX",[Jl]:"Neutral",[Yl]:"Custom"};function Kg(n,e){let t=Jg[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ha=new L;function $g(){rt.getLuminanceCoefficients(Ha);let n=Ha.x.toFixed(4),e=Ha.y.toFixed(4),t=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Qg(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function e_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Fr(n){return n!==""}function Iu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(n){return n.replace(t_,i_)}var n_=new Map;function i_(n,e){let t=nt[e];if(t===void 0){let i=n_.get(e);if(i!==void 0)t=nt[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sc(t)}var s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(n){return n.replace(s_,r_)}function r_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var o_={[Li]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function a_(n){return o_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var l_={[gi]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE_UV"};function c_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":l_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var h_={[Ni]:"ENVMAP_MODE_REFRACTION"};function u_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":h_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var d_={[jo]:"ENVMAP_BLENDING_MULTIPLY",[Yh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function f_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":d_[n.combine]||"ENVMAP_BLENDING_NONE"}function p_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function m_(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=a_(t),l=c_(t),f=u_(t),u=f_(t),h=p_(t),d=jg(t),p=Qg(r),g=s.createProgram(),_,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fr).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Fr).join(`
`),m.length>0&&(m+=`
`)):(_=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),m=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?nt.tonemapping_pars_fragment:"",t.toneMapping!==En?Kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Zg("linearToOutputTexel",t.outputColorSpace),$g(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),o=Sc(o),o=Iu(o,t),o=Lu(o,t),a=Sc(a),a=Iu(a,t),a=Lu(a,t),o=Du(o),a=Du(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=M+_+o,v=M+m+a,w=Ru(s,s.VERTEX_SHADER,A),b=Ru(s,s.FRAGMENT_SHADER,v);s.attachShader(g,w),s.attachShader(g,b),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(U){if(n.debug.checkShaderErrors){let E=s.getProgramInfoLog(g)||"",P=s.getShaderInfoLog(w)||"",R=s.getShaderInfoLog(b)||"",N=E.trim(),O=P.trim(),V=R.trim(),Q=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,w,b);else{let q=Pu(s,w,"vertex"),K=Pu(s,b,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+q+`
`+K)}else N!==""?He("WebGLProgram: Program Info Log:",N):(O===""||V==="")&&(J=!1);J&&(U.diagnostics={runnable:Q,programLog:N,vertexShader:{log:O,prefix:_},fragmentShader:{log:V,prefix:m}})}s.deleteShader(w),s.deleteShader(b),x=new As(s,g),T=e_(s,g)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(g,Wg)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=b,this}var g_=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new bc(e),t.set(e,i)),i}},bc=class{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}};function __(n){return n===yi||n===Ir||n===Lr}function x_(n,e,t,i,s,r){let o=new hs,a=new Mc,c=new Set,l=[],f=new Map,u=i.logarithmicDepthBuffer,h=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,T,C,U,E,P){let R=U.fog,N=E.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=e.get(x.envMap||O,V),J=Q&&Q.mapping===wr?Q.image.height:null,q=d[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ae=K!==void 0?K.length:0,pe=0;N.morphAttributes.position!==void 0&&(pe=1),N.morphAttributes.normal!==void 0&&(pe=2),N.morphAttributes.color!==void 0&&(pe=3);let ke,ie,ge,G;if(q){let _t=Bn[q];ke=_t.vertexShader,ie=_t.fragmentShader}else{ke=x.vertexShader,ie=x.fragmentShader;let _t=a.getVertexShaderStage(x),ct=a.getFragmentShaderStage(x);a.update(x,_t,ct),ge=_t.id,G=ct.id}let j=n.getRenderTarget(),ue=n.state.buffers.depth.getReversed(),Ge=E.isInstancedMesh===!0,Ae=E.isBatchedMesh===!0,Ce=!!x.map,ot=!!x.matcap,se=!!Q,he=!!x.aoMap,de=!!x.lightMap,fe=!!x.bumpMap&&x.wireframe===!1,xe=!!x.normalMap,We=!!x.displacementMap,Ve=!!x.emissiveMap,Ye=!!x.metalnessMap,Ke=!!x.roughnessMap,B=x.anisotropy>0,lt=x.clearcoat>0,it=x.dispersion>0,I=x.retroreflectivity>0,y=x.iridescence>0,H=x.sheen>0,Z=x.transmission>0,ee=B&&!!x.anisotropyMap,me=lt&&!!x.clearcoatMap,_e=lt&&!!x.clearcoatNormalMap,te=lt&&!!x.clearcoatRoughnessMap,re=y&&!!x.iridescenceMap,ye=y&&!!x.iridescenceThicknessMap,Oe=H&&!!x.sheenColorMap,be=H&&!!x.sheenRoughnessMap,ve=!!x.specularMap,Be=!!x.specularColorMap,Xe=!!x.specularIntensityMap,je=Z&&!!x.transmissionMap,k=Z&&!!x.thicknessMap,Se=!!x.gradientMap,ne=!!x.alphaMap,Me=x.alphaTest>0,Re=!!x.alphaHash,le=!!x.extensions,ze=En;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ze=n.toneMapping);let Ue={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:ie,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:G,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&E._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&E.instanceColor!==null,instancingMorph:Ge&&E.morphTexture!==null,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:ot,envMap:se,envMapMode:se&&Q.mapping,envMapCubeUVHeight:J,aoMap:he,lightMap:de,bumpMap:fe,normalMap:xe,displacementMap:We,emissiveMap:Ve,normalMapObjectSpace:xe&&x.normalMapType===$h,normalMapTangentSpace:xe&&x.normalMapType===Dr,packedNormalMap:xe&&x.normalMapType===Dr&&__(x.normalMap.format),metalnessMap:Ye,roughnessMap:Ke,anisotropy:B,anisotropyMap:ee,clearcoat:lt,clearcoatMap:me,clearcoatNormalMap:_e,clearcoatRoughnessMap:te,dispersion:it,retroreflection:I,iridescence:y,iridescenceMap:re,iridescenceThicknessMap:ye,sheen:H,sheenColorMap:Oe,sheenRoughnessMap:be,specularMap:ve,specularColorMap:Be,specularIntensityMap:Xe,transmission:Z,transmissionMap:je,thicknessMap:k,gradientMap:Se,opaque:x.transparent===!1&&x.blending===Ss&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:Me,alphaHash:Re,combine:x.combine,mapUv:Ce&&p(x.map.channel),aoMapUv:he&&p(x.aoMap.channel),lightMapUv:de&&p(x.lightMap.channel),bumpMapUv:fe&&p(x.bumpMap.channel),normalMapUv:xe&&p(x.normalMap.channel),displacementMapUv:We&&p(x.displacementMap.channel),emissiveMapUv:Ve&&p(x.emissiveMap.channel),metalnessMapUv:Ye&&p(x.metalnessMap.channel),roughnessMapUv:Ke&&p(x.roughnessMap.channel),anisotropyMapUv:ee&&p(x.anisotropyMap.channel),clearcoatMapUv:me&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(x.sheenRoughnessMap.channel),specularMapUv:ve&&p(x.specularMap.channel),specularColorMapUv:Be&&p(x.specularColorMap.channel),specularIntensityMapUv:Xe&&p(x.specularIntensityMap.channel),transmissionMapUv:je&&p(x.transmissionMap.channel),thicknessMapUv:k&&p(x.thicknessMap.channel),alphaMapUv:ne&&p(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xe||B),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!N.attributes.uv&&(Ce||ne),fog:!!R,useFog:x.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ue,skinning:E.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:pe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&rt.getTransfer(x.map.colorSpace)===ut,decodeVideoTextureEmissive:Ve&&x.emissiveMap.isVideoTexture===!0&&rt.getTransfer(x.emissiveMap.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tt,flipSided:x.side===zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function _(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(T,x),M(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let T=d[x.type],C;if(T){let U=Bn[T];C=mu.clone(U.uniforms)}else C=x.uniforms;return C}function v(x,T){let C=f.get(T);return C!==void 0?++C.usedTimes:(C=new m_(n,T,x,s),l.push(C),f.set(T,C)),C}function w(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),f.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function D(){a.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:A,acquireProgram:v,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:D}}function y_(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function v_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Uu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,g,_,m){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=p,M.materialVariant=o(h),M.groupOrder=g,M.renderOrder=h.renderOrder,M.z=_,M.group=m),e++,M}function c(h,d,p,g,_,m,M){M.reversedDepth===!0&&(_=-_);let A=a(h,d,p,g,_,m);p.transmission>0?i.push(A):p.transparent===!0?s.push(A):t.push(A)}function l(h,d,p,g,_,m){let M=a(h,d,p,g,_,m);p.transmission>0?i.unshift(M):p.transparent===!0?s.unshift(M):t.unshift(M)}function f(h,d){t.length>1&&t.sort(h||v_),i.length>1&&i.sort(d||Uu),s.length>1&&s.sort(d||Uu)}function u(){for(let h=e,d=n.length;h<d;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:f}}function S_(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Fu,n.set(i,[o])):s>=r.length?(o=new Fu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function M_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Ze};break;case"SpotLight":t={position:new L,direction:new L,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function b_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var E_=0;function w_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function T_(n){let e=new M_,t=b_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);let s=new L,r=new dt,o=new dt;function a(l){let f=0,u=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,p=0,g=0,_=0,m=0,M=0,A=0,v=0,w=0,b=0,D=0,x=0,T=0,C=0;l.sort(w_);for(let E=0,P=l.length;E<P;E++){let R=l[E],N=R.color,O=R.intensity,V=R.distance,Q=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===yi?Q=R.shadow.map.texture:Q=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)f+=N.r*O,u+=N.g*O,h+=N.b*O;else if(R.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(R.sh.coefficients[J],O);C++}else if(R.isSunLight){let J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,K=t.get(R);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),i.sunShadow[p]=K,i.sunShadowMap[p]=Q;let ae=q.getViewportCount();for(let pe=0;pe<ae;pe++)i.sunShadowMatrix[g+pe]=q.getMatrix(pe),i.sunShadowCascade[g+pe]=q._cascadeData[pe];g+=ae,p++}i.sun[d]=J,d++}else if(R.isDirectionalLight){let J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,K=t.get(R);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,i.directionalShadow[_]=K,i.directionalShadowMap[_]=Q,i.directionalShadowMatrix[_]=R.shadow.matrix,w++}i.directional[_]=J,_++}else if(R.isSpotLight){let J=e.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(N).multiplyScalar(O),J.distance=V,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,i.spot[M]=J;let q=R.shadow;if(R.map&&(i.spotLightMap[x]=R.map,x++,q.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[M]=q.matrix,R.castShadow){let K=t.get(R);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,i.spotShadow[M]=K,i.spotShadowMap[M]=Q,D++}M++}else if(R.isRectAreaLight){let J=e.get(R);J.color.copy(N).multiplyScalar(O),J.halfWidth.set(R.width*.5,0,0),J.halfHeight.set(0,R.height*.5,0),i.rectArea[A]=J,A++}else if(R.isPointLight){let J=e.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity),J.distance=R.distance,J.decay=R.decay,R.castShadow){let q=R.shadow,K=t.get(R);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,K.shadowCameraNear=q.camera.near,K.shadowCameraFar=q.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=R.shadow.matrix,b++}i.point[m]=J,m++}else if(R.isHemisphereLight){let J=e.get(R);J.skyColor.copy(R.color).multiplyScalar(O),J.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[v]=J,v++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;let U=i.hash;(U.sunLength!==d||U.directionalLength!==_||U.pointLength!==m||U.spotLength!==M||U.rectAreaLength!==A||U.hemiLength!==v||U.numSunShadows!==p||U.numDirectionalShadows!==w||U.numPointShadows!==b||U.numSpotShadows!==D||U.numSpotMaps!==x||U.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=_,i.spot.length=M,i.rectArea.length=A,i.point.length=m,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=g,i.sunShadowCascade.length=g,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,U.sunLength=d,U.directionalLength=_,U.pointLength=m,U.spotLength=M,U.rectAreaLength=A,U.hemiLength=v,U.numSunShadows=p,U.numDirectionalShadows=w,U.numPointShadows=b,U.numSpotShadows=D,U.numSpotMaps=x,U.numLightProbes=C,i.version=E_++)}function c(l,f){let u=0,h=0,d=0,p=0,g=0,_=0,m=f.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let v=l[M];if(v.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),h++}else if(v.isSpotLight){let w=i.spot[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let w=i.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let w=i.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Ou(n){let e=new T_(n),t=[],i=[],s=[];function r(h){u.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function f(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function A_(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ou(n),e.set(s,[a])):r>=o.length?(a=new Ou(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var R_=`void main() {
  gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`,P_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],I_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Bu=new dt,Ur=new L,gc=new L;function L_(n,e,t){let i=new ds,s=new ce,r=new ce,o=new bt,a=new Bo,c=new zo,l={},f=t.maxTextureSize,u={[mi]:zt,[zt]:mi,[Tt]:Tt},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new gt;p.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ne(p,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Li;let m=this.type;this.render=function(b,D,x){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||b.length===0)return;this.type===Rh&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Li);let T=n.getRenderTarget(),C=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),E=n.state;E.setBlending(Fn),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let P=m!==this.type;P&&D.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(N=>N.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,N=b.length;R<N;R++){let O=b[R],V=O.shadow;if(V===void 0){He("WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Q=V.getFrameExtents();s.multiply(Q),r.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y));let J=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||P===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===vs){if(O.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Jt(s.x,s.y,{format:yi,type:Tn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),V.map.texture.name=O.name+".shadowMap",V.map.depthTexture=new ai(s.x,s.y,fn),V.map.depthTexture.name=O.name+".shadowMapDepth",V.map.depthTexture.format=In,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ut,V.map.depthTexture.magFilter=Ut}else O.isPointLight?(V.map=new Ga(s.x),V.map.depthTexture=new Io(s.x,wn)):(V.map=new Jt(s.x,s.y),V.map.depthTexture=new ai(s.x,s.y,wn)),V.map.depthTexture.name=O.name+".shadowMap",V.map.depthTexture.format=In,this.type===Li?(V.map.depthTexture.compareFunction=J?ka:za,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ut,V.map.depthTexture.magFilter=Ut);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();O.isPointLight!==!0&&V.updateMatrices(O,x);for(let K=0;K<q;K++){let ae=V.getCamera(K);if(O.isPointLight){let pe=V.camera,ke=V.matrix,ie=O.distance||pe.far;ie!==pe.far&&(pe.far=ie,pe.updateProjectionMatrix()),Ur.setFromMatrixPosition(O.matrixWorld),pe.position.copy(Ur),gc.copy(pe.position),gc.add(P_[K]),pe.up.copy(I_[K]),pe.lookAt(gc),pe.updateMatrixWorld(),ke.makeTranslation(-Ur.x,-Ur.y,-Ur.z),Bu.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Bu,pe.coordinateSystem,pe.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,K),n.clear();else{K===0&&(n.setRenderTarget(V.map),n.clear());let pe=V.getViewport(K);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),E.viewport(o)}i=V.getFrustum(K),v(D,x,ae,O,this.type)}V.isPointLightShadow!==!0&&this.type===vs&&M(V,x),V.needsUpdate=!1}m=this.type,_.needsUpdate=!1,n.setRenderTarget(T,C,U)};function M(b,D){let x=e.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Jt(s.x,s.y,{format:yi,type:Tn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(D,null,x,h,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(D,null,x,d,g,null)}function A(b,D,x,T){let C=null,U=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(U!==void 0)C=U;else if(C=x.isPointLight===!0?c:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let E=C.uuid,P=D.uuid,R=l[E];R===void 0&&(R={},l[E]=R);let N=R[P];N===void 0&&(N=C.clone(),R[P]=N,D.addEventListener("dispose",w)),C=N}if(C.visible=D.visible,C.wireframe=D.wireframe,T===vs?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:u[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let E=n.properties.get(C);E.light=x}return C}function v(b,D,x,T,C){if(b.visible===!1)return;if(b.layers.test(D.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===vs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let P=e.update(b),R=b.material;if(Array.isArray(R)){let N=P.groups;for(let O=0,V=N.length;O<V;O++){let Q=N[O],J=R[Q.materialIndex];if(J&&J.visible){let q=A(b,J,T,C);b.onBeforeShadow(n,b,D,x,P,q,Q),n.renderBufferDirect(x,null,P,q,b,Q),b.onAfterShadow(n,b,D,x,P,q,Q)}}}else if(R.visible){let N=A(b,R,T,C);b.onBeforeShadow(n,b,D,x,P,N,null),n.renderBufferDirect(x,null,P,N,b,null),b.onAfterShadow(n,b,D,x,P,N,null)}}let E=b.children;for(let P=0,R=E.length;P<R;P++)v(E[P],D,x,T,C)}function w(b){b.target.removeEventListener("dispose",w);for(let x in l){let T=l[x],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function D_(n,e){function t(){let k=!1,Se=new bt,ne=null,Me=new bt(0,0,0,0);return{setMask:function(Re){ne!==Re&&!k&&(n.colorMask(Re,Re,Re,Re),ne=Re)},setLocked:function(Re){k=Re},setClear:function(Re,le,ze,Ue,_t){_t===!0&&(Re*=Ue,le*=Ue,ze*=Ue),Se.set(Re,le,ze,Ue),Me.equals(Se)===!1&&(n.clearColor(Re,le,ze,Ue),Me.copy(Se))},reset:function(){k=!1,ne=null,Me.set(-1,0,0,0)}}}function i(){let k=!1,Se=!1,ne=null,Me=null,Re=null;return{setReversed:function(le){if(Se!==le){let ze=e.get("EXT_clip_control");le?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Se=le;let Ue=Re;Re=null,this.setClear(Ue)}},getReversed:function(){return Se},setTest:function(le){le?j(n.DEPTH_TEST):ue(n.DEPTH_TEST)},setMask:function(le){ne!==le&&!k&&(n.depthMask(le),ne=le)},setFunc:function(le){if(Se&&(le=cu[le]),Me!==le){switch(le){case mo:n.depthFunc(n.NEVER);break;case go:n.depthFunc(n.ALWAYS);break;case _o:n.depthFunc(n.LESS);break;case rs:n.depthFunc(n.LEQUAL);break;case xo:n.depthFunc(n.EQUAL);break;case yo:n.depthFunc(n.GEQUAL);break;case vo:n.depthFunc(n.GREATER);break;case So:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=le}},setLocked:function(le){k=le},setClear:function(le){Re!==le&&(Re=le,Se&&(le=1-le),n.clearDepth(le))},reset:function(){k=!1,ne=null,Me=null,Re=null,Se=!1}}}function s(){let k=!1,Se=null,ne=null,Me=null,Re=null,le=null,ze=null,Ue=null,_t=null;return{setTest:function(ct){k||(ct?j(n.STENCIL_TEST):ue(n.STENCIL_TEST))},setMask:function(ct){Se!==ct&&!k&&(n.stencilMask(ct),Se=ct)},setFunc:function(ct,gn,An){(ne!==ct||Me!==gn||Re!==An)&&(n.stencilFunc(ct,gn,An),ne=ct,Me=gn,Re=An)},setOp:function(ct,gn,An){(le!==ct||ze!==gn||Ue!==An)&&(n.stencilOp(ct,gn,An),le=ct,ze=gn,Ue=An)},setLocked:function(ct){k=ct},setClear:function(ct){_t!==ct&&(n.clearStencil(ct),_t=ct)},reset:function(){k=!1,Se=null,ne=null,Me=null,Re=null,le=null,ze=null,Ue=null,_t=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,f={},u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,M=null,A=null,v=null,w=null,b=null,D=null,x=new Ze(0,0,0),T=0,C=!1,U=null,E=null,P=null,R=null,N=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Q=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=Q>=1):J.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=Q>=2);let q=null,K={},ae=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),ke=new bt().fromArray(ae),ie=new bt().fromArray(pe);function ge(k,Se,ne,Me){let Re=new Uint8Array(4),le=n.createTexture();n.bindTexture(k,le),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<ne;ze++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(Se+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return le}let G={};G[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(n.DEPTH_TEST),o.setFunc(rs),fe(!1),xe(Bl),j(n.CULL_FACE),he(Fn);function j(k){f[k]!==!0&&(n.enable(k),f[k]=!0)}function ue(k){f[k]!==!1&&(n.disable(k),f[k]=!1)}function Ge(k,Se){return h[k]!==Se?(n.bindFramebuffer(k,Se),h[k]=Se,k===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Se),k===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ae(k,Se){let ne=p,Me=!1;if(k){ne=d.get(Se),ne===void 0&&(ne=[],d.set(Se,ne));let Re=k.textures;if(ne.length!==Re.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let le=0,ze=Re.length;le<ze;le++)ne[le]=n.COLOR_ATTACHMENT0+le;ne.length=Re.length,Me=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Me=!0);Me&&n.drawBuffers(ne)}function Ce(k){return g!==k?(n.useProgram(k),g=k,!0):!1}let ot={[Di]:n.FUNC_ADD,[Ph]:n.FUNC_SUBTRACT,[Ih]:n.FUNC_REVERSE_SUBTRACT};ot[Lh]=n.MIN,ot[Dh]=n.MAX;let se={[Nh]:n.ZERO,[Uh]:n.ONE,[Fh]:n.SRC_COLOR,[Hl]:n.SRC_ALPHA,[Hh]:n.SRC_ALPHA_SATURATE,[kh]:n.DST_COLOR,[Bh]:n.DST_ALPHA,[Oh]:n.ONE_MINUS_SRC_COLOR,[Gl]:n.ONE_MINUS_SRC_ALPHA,[Vh]:n.ONE_MINUS_DST_COLOR,[zh]:n.ONE_MINUS_DST_ALPHA,[Gh]:n.CONSTANT_COLOR,[Wh]:n.ONE_MINUS_CONSTANT_COLOR,[Xh]:n.CONSTANT_ALPHA,[qh]:n.ONE_MINUS_CONSTANT_ALPHA};function he(k,Se,ne,Me,Re,le,ze,Ue,_t,ct){if(k===Fn){_===!0&&(ue(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),k!==Ch){if(k!==m||ct!==C){if((M!==Di||w!==Di)&&(n.blendEquation(n.FUNC_ADD),M=Di,w=Di),ct)switch(k){case Ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFunc(n.ONE,n.ONE);break;case kl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",k);break}else switch(k){case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kl:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vl:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",k);break}A=null,v=null,b=null,D=null,x.set(0,0,0),T=0,m=k,C=ct}return}Re=Re||Se,le=le||ne,ze=ze||Me,(Se!==M||Re!==w)&&(n.blendEquationSeparate(ot[Se],ot[Re]),M=Se,w=Re),(ne!==A||Me!==v||le!==b||ze!==D)&&(n.blendFuncSeparate(se[ne],se[Me],se[le],se[ze]),A=ne,v=Me,b=le,D=ze),(Ue.equals(x)===!1||_t!==T)&&(n.blendColor(Ue.r,Ue.g,Ue.b,_t),x.copy(Ue),T=_t),m=k,C=!1}function de(k,Se){k.side===Tt?ue(n.CULL_FACE):j(n.CULL_FACE);let ne=k.side===zt;Se&&(ne=!ne),fe(ne),k.blending===Ss&&k.transparent===!1?he(Fn):he(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let Me=k.stencilWrite;a.setTest(Me),Me&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ve(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(k){U!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),U=k)}function xe(k){k!==Th?(j(n.CULL_FACE),k!==E&&(k===Bl?n.cullFace(n.BACK):k===Ah?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ue(n.CULL_FACE),E=k}function We(k){k!==P&&(V&&n.lineWidth(k),P=k)}function Ve(k,Se,ne){k?(j(n.POLYGON_OFFSET_FILL),(R!==Se||N!==ne)&&(R=Se,N=ne,o.getReversed()&&(Se=-Se),n.polygonOffset(Se,ne))):ue(n.POLYGON_OFFSET_FILL)}function Ye(k){k?j(n.SCISSOR_TEST):ue(n.SCISSOR_TEST)}function Ke(k){k===void 0&&(k=n.TEXTURE0+O-1),q!==k&&(n.activeTexture(k),q=k)}function B(k,Se,ne){ne===void 0&&(q===null?ne=n.TEXTURE0+O-1:ne=q);let Me=K[ne];Me===void 0&&(Me={type:void 0,texture:void 0},K[ne]=Me),(Me.type!==k||Me.texture!==Se)&&(q!==ne&&(n.activeTexture(ne),q=ne),n.bindTexture(k,Se||G[k]),Me.type=k,Me.texture=Se)}function lt(){let k=K[q];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function it(){try{n.compressedTexImage2D(...arguments)}catch(k){qe("WebGLState:",k)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(k){qe("WebGLState:",k)}}function y(){try{n.texSubImage2D(...arguments)}catch(k){qe("WebGLState:",k)}}function H(){try{n.texSubImage3D(...arguments)}catch(k){qe("WebGLState:",k)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(k){qe("WebGLState:",k)}}function ee(){try{n.compressedTexSubImage3D(...arguments)}catch(k){qe("WebGLState:",k)}}function me(){try{n.texStorage2D(...arguments)}catch(k){qe("WebGLState:",k)}}function _e(){try{n.texStorage3D(...arguments)}catch(k){qe("WebGLState:",k)}}function te(){try{n.texImage2D(...arguments)}catch(k){qe("WebGLState:",k)}}function re(){try{n.texImage3D(...arguments)}catch(k){qe("WebGLState:",k)}}function ye(k){return u[k]!==void 0?u[k]:n.getParameter(k)}function Oe(k,Se){u[k]!==Se&&(n.pixelStorei(k,Se),u[k]=Se)}function be(k){ke.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ke.copy(k))}function ve(k){ie.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ie.copy(k))}function Be(k,Se){let ne=l.get(Se);ne===void 0&&(ne=new WeakMap,l.set(Se,ne));let Me=ne.get(k);Me===void 0&&(Me=n.getUniformBlockIndex(Se,k.name),ne.set(k,Me))}function Xe(k,Se){let Me=l.get(Se).get(k);c.get(Se)!==Me&&(n.uniformBlockBinding(Se,Me,k.__bindingPointIndex),c.set(Se,Me))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},u={},q=null,K={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,M=null,A=null,v=null,w=null,b=null,D=null,x=new Ze(0,0,0),T=0,C=!1,U=null,E=null,P=null,R=null,N=null,ke.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ue,bindFramebuffer:Ge,drawBuffers:Ae,useProgram:Ce,setBlending:he,setMaterial:de,setFlipSided:fe,setCullFace:xe,setLineWidth:We,setPolygonOffset:Ve,setScissorTest:Ye,activeTexture:Ke,bindTexture:B,unbindTexture:lt,compressedTexImage2D:it,compressedTexImage3D:I,texImage2D:te,texImage3D:re,pixelStorei:Oe,getParameter:ye,updateUBOMapping:Be,uniformBlockBinding:Xe,texStorage2D:me,texStorage3D:_e,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:Z,compressedTexSubImage3D:ee,scissor:be,viewport:ve,reset:je}}function N_(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,f=new WeakMap,u=new Set,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,y){return p?new OffscreenCanvas(I,y):Zs("canvas")}function _(I,y,H){let Z=1,ee=it(I);if((ee.width>H||ee.height>H)&&(Z=H/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let me=Math.floor(Z*ee.width),_e=Math.floor(Z*ee.height);h===void 0&&(h=g(me,_e));let te=y?g(me,_e):h;return te.width=me,te.height=_e,te.getContext("2d").drawImage(I,0,0,me,_e),He("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+me+"x"+_e+")."),te}else return"data"in I&&He("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function m(I){return I.generateMipmaps}function M(I){n.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(I,y,H,Z,ee,me=!1){if(I!==null){if(n[I]!==void 0)return n[I];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _e;Z&&(_e=e.get("EXT_texture_norm16"),_e||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=y;if(y===n.RED&&(H===n.FLOAT&&(te=n.R32F),H===n.HALF_FLOAT&&(te=n.R16F),H===n.UNSIGNED_BYTE&&(te=n.R8),H===n.UNSIGNED_SHORT&&_e&&(te=_e.R16_EXT),H===n.SHORT&&_e&&(te=_e.R16_SNORM_EXT)),y===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.R8UI),H===n.UNSIGNED_SHORT&&(te=n.R16UI),H===n.UNSIGNED_INT&&(te=n.R32UI),H===n.BYTE&&(te=n.R8I),H===n.SHORT&&(te=n.R16I),H===n.INT&&(te=n.R32I)),y===n.RG&&(H===n.FLOAT&&(te=n.RG32F),H===n.HALF_FLOAT&&(te=n.RG16F),H===n.UNSIGNED_BYTE&&(te=n.RG8),H===n.UNSIGNED_SHORT&&_e&&(te=_e.RG16_EXT),H===n.SHORT&&_e&&(te=_e.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.RG8UI),H===n.UNSIGNED_SHORT&&(te=n.RG16UI),H===n.UNSIGNED_INT&&(te=n.RG32UI),H===n.BYTE&&(te=n.RG8I),H===n.SHORT&&(te=n.RG16I),H===n.INT&&(te=n.RG32I)),y===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.RGB8UI),H===n.UNSIGNED_SHORT&&(te=n.RGB16UI),H===n.UNSIGNED_INT&&(te=n.RGB32UI),H===n.BYTE&&(te=n.RGB8I),H===n.SHORT&&(te=n.RGB16I),H===n.INT&&(te=n.RGB32I)),y===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),H===n.UNSIGNED_INT&&(te=n.RGBA32UI),H===n.BYTE&&(te=n.RGBA8I),H===n.SHORT&&(te=n.RGBA16I),H===n.INT&&(te=n.RGBA32I)),y===n.RGB&&(H===n.UNSIGNED_SHORT&&_e&&(te=_e.RGB16_EXT),H===n.SHORT&&_e&&(te=_e.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),y===n.RGBA){let re=me?Ys:rt.getTransfer(ee);H===n.FLOAT&&(te=n.RGBA32F),H===n.HALF_FLOAT&&(te=n.RGBA16F),H===n.UNSIGNED_BYTE&&(te=re===ut?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&_e&&(te=_e.RGBA16_EXT),H===n.SHORT&&_e&&(te=_e.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function w(I,y){let H;return I?y===null||y===wn||y===bs?H=n.DEPTH24_STENCIL8:y===fn?H=n.DEPTH32F_STENCIL8:y===Ms&&(H=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===wn||y===bs?H=n.DEPTH_COMPONENT24:y===fn?H=n.DEPTH_COMPONENT32F:y===Ms&&(H=n.DEPTH_COMPONENT16),H}function b(I,y){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ut&&I.minFilter!==Bt?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function D(I){let y=I.target;y.removeEventListener("dispose",D),T(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&u.delete(y)}function x(I){let y=I.target;y.removeEventListener("dispose",x),U(y)}function T(I){let y=i.get(I);if(y.__webglInit===void 0)return;let H=I.source,Z=d.get(H);if(Z){let ee=Z[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(I),Object.keys(Z).length===0&&d.delete(H)}i.remove(I)}function C(I){let y=i.get(I);n.deleteTexture(y.__webglTexture);let H=I.source,Z=d.get(H);delete Z[y.__cacheKey],o.memory.textures--}function U(I){let y=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ee=0;ee<y.__webglFramebuffer[Z].length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[Z][ee]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let H=I.textures;for(let Z=0,ee=H.length;Z<ee;Z++){let me=i.get(H[Z]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(H[Z])}i.remove(I)}let E=0;function P(){E=0}function R(){return E}function N(I){E=I}function O(){let I=E;return I>=s.maxTextures&&He("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),E+=1,I}function V(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function Q(I,y){let H=i.get(I);if(I.isVideoTexture&&B(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let Z=I.image;if(Z===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,I,y);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+y)}function J(I,y){let H=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){ue(H,I,y);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+y)}function q(I,y){let H=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){ue(H,I,y);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+y)}function K(I,y){let H=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&H.__version!==I.version){Ge(H,I,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+y)}let ae={[Mo]:n.REPEAT,[Pn]:n.CLAMP_TO_EDGE,[bo]:n.MIRRORED_REPEAT},pe={[Ut]:n.NEAREST,[Jh]:n.NEAREST_MIPMAP_NEAREST,[Tr]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[ta]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},ke={[Qh]:n.NEVER,[su]:n.ALWAYS,[eu]:n.LESS,[za]:n.LEQUAL,[tu]:n.EQUAL,[ka]:n.GEQUAL,[nu]:n.GREATER,[iu]:n.NOTEQUAL};function ie(I,y){if(y.type===fn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Bt||y.magFilter===ta||y.magFilter===Tr||y.magFilter===_i||y.minFilter===Bt||y.minFilter===ta||y.minFilter===Tr||y.minFilter===_i)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,ae[y.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,pe[y.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,pe[y.minFilter]),y.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,ke[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ut||y.minFilter!==Tr&&y.minFilter!==_i||y.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ge(I,y){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",D));let Z=y.source,ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));let me=V(y);if(me!==I.__cacheKey){ee[me]===void 0&&(ee[me]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[me].usedTimes++;let _e=ee[I.__cacheKey];_e!==void 0&&(ee[I.__cacheKey].usedTimes--,_e.usedTimes===0&&C(y)),I.__cacheKey=me,I.__webglTexture=ee[me].texture}return H}function G(I,y,H){return Math.floor(Math.floor(I/H)/y)}function j(I,y,H,Z){let me=I.updateRanges;if(me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,H,Z,y.data);else{me.sort((Oe,be)=>Oe.start-be.start);let _e=0;for(let Oe=1;Oe<me.length;Oe++){let be=me[_e],ve=me[Oe],Be=be.start+be.count,Xe=G(ve.start,y.width,4),je=G(be.start,y.width,4);ve.start<=Be+1&&Xe===je&&G(ve.start+ve.count-1,y.width,4)===Xe?be.count=Math.max(be.count,ve.start+ve.count-be.start):(++_e,me[_e]=ve)}me.length=_e+1;let te=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),ye=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Oe=0,be=me.length;Oe<be;Oe++){let ve=me[Oe],Be=Math.floor(ve.start/4),Xe=Math.ceil(ve.count/4),je=Be%y.width,k=Math.floor(Be/y.width),Se=Xe,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,je,k,Se,ne,H,Z,y.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function ue(I,y,H){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);let ee=ge(I,y),me=y.source;t.bindTexture(Z,I.__webglTexture,n.TEXTURE0+H);let _e=i.get(me);if(me.version!==_e.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ne=rt.getPrimaries(rt.workingColorSpace),Me=y.colorSpace===Zn?null:rt.getPrimaries(y.colorSpace),Re=y.colorSpace===Zn||ne===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let re=_(y.image,!1,s.maxTextureSize);re=lt(y,re);let ye=r.convert(y.format,y.colorSpace),Oe=r.convert(y.type),be=v(y.internalFormat,ye,Oe,y.normalized,y.colorSpace,y.isVideoTexture);ie(Z,y);let ve,Be=y.mipmaps,Xe=y.isVideoTexture!==!0,je=_e.__version===void 0||ee===!0,k=me.dataReady,Se=b(y,re);if(y.isDepthTexture)be=w(y.format===xi,y.type),je&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,be,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,be,re.width,re.height,0,ye,Oe,null));else if(y.isDataTexture)if(Be.length>0){Xe&&je&&t.texStorage2D(n.TEXTURE_2D,Se,be,Be[0].width,Be[0].height);for(let ne=0,Me=Be.length;ne<Me;ne++)ve=Be[ne],Xe?k&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ve.width,ve.height,ye,Oe,ve.data):t.texImage2D(n.TEXTURE_2D,ne,be,ve.width,ve.height,0,ye,Oe,ve.data);y.generateMipmaps=!1}else Xe?(je&&t.texStorage2D(n.TEXTURE_2D,Se,be,re.width,re.height),k&&j(y,re,ye,Oe)):t.texImage2D(n.TEXTURE_2D,0,be,re.width,re.height,0,ye,Oe,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xe&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,be,Be[0].width,Be[0].height,re.depth);for(let ne=0,Me=Be.length;ne<Me;ne++)if(ve=Be[ne],y.format!==pn)if(ye!==null)if(Xe){if(k)if(y.layerUpdates.size>0){let Re=hc(ve.width,ve.height,y.format,y.type);for(let le of y.layerUpdates){let ze=ve.data.subarray(le*Re/ve.data.BYTES_PER_ELEMENT,(le+1)*Re/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,le,ve.width,ve.height,1,ye,ze)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ve.width,ve.height,re.depth,ye,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,be,ve.width,ve.height,re.depth,0,ve.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ve.width,ve.height,re.depth,ye,Oe,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,be,ve.width,ve.height,re.depth,0,ye,Oe,ve.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Xe&&je&&t.texStorage2D(n.TEXTURE_2D,Se,be,Be[0].width,Be[0].height);for(let ne=0,Me=Be.length;ne<Me;ne++)ve=Be[ne],y.format!==pn?ye!==null?Xe?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,be,ve.width,ve.height,0,ve.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?k&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ve.width,ve.height,ye,Oe,ve.data):t.texImage2D(n.TEXTURE_2D,ne,be,ve.width,ve.height,0,ye,Oe,ve.data)}else if(y.isDataArrayTexture)if(Xe){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,be,re.width,re.height,re.depth),k)if(y.layerUpdates.size>0){let ne=hc(re.width,re.height,y.format,y.type);for(let Me of y.layerUpdates){let Re=re.data.subarray(Me*ne/re.data.BYTES_PER_ELEMENT,(Me+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Me,re.width,re.height,1,ye,Oe,Re)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,Oe,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,ye,Oe,re.data);else if(y.isData3DTexture)Xe?(je&&t.texStorage3D(n.TEXTURE_3D,Se,be,re.width,re.height,re.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,Oe,re.data)):t.texImage3D(n.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,ye,Oe,re.data);else if(y.isFramebufferTexture){if(je)if(Xe)t.texStorage2D(n.TEXTURE_2D,Se,be,re.width,re.height);else{let ne=re.width,Me=re.height;for(let Re=0;Re<Se;Re++)t.texImage2D(n.TEXTURE_2D,Re,be,ne,Me,0,ye,Oe,null),ne>>=1,Me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),re.parentNode!==ne){ne.appendChild(re),u.add(y),ne.onpaint=Me=>{let Re=Me.changedElements;for(let le of u)Re.includes(le.image)&&(le.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{let Re=n.RGBA,le=n.RGBA,ze=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Re,le,ze,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Xe&&je){let ne=it(Be[0]);t.texStorage2D(n.TEXTURE_2D,Se,be,ne.width,ne.height)}for(let ne=0,Me=Be.length;ne<Me;ne++)ve=Be[ne],Xe?k&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ye,Oe,ve):t.texImage2D(n.TEXTURE_2D,ne,be,ye,Oe,ve);y.generateMipmaps=!1}else if(Xe){if(je){let ne=it(re);t.texStorage2D(n.TEXTURE_2D,Se,be,ne.width,ne.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Oe,re)}else t.texImage2D(n.TEXTURE_2D,0,be,ye,Oe,re);m(y)&&M(Z),_e.__version=me.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Ge(I,y,H){if(y.image.length!==6)return;let Z=ge(I,y),ee=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+H);let me=i.get(ee);if(ee.version!==me.__version||Z===!0){t.activeTexture(n.TEXTURE0+H);let _e=rt.getPrimaries(rt.workingColorSpace),te=y.colorSpace===Zn?null:rt.getPrimaries(y.colorSpace),re=y.colorSpace===Zn||_e===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ye=y.isCompressedTexture||y.image[0].isCompressedTexture,Oe=y.image[0]&&y.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!ye&&!Oe?be[le]=_(y.image[le],!0,s.maxCubemapSize):be[le]=Oe?y.image[le].image:y.image[le],be[le]=lt(y,be[le]);let ve=be[0],Be=r.convert(y.format,y.colorSpace),Xe=r.convert(y.type),je=v(y.internalFormat,Be,Xe,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,Se=me.__version===void 0||Z===!0,ne=ee.dataReady,Me=b(y,ve);ie(n.TEXTURE_CUBE_MAP,y);let Re;if(ye){k&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,je,ve.width,ve.height);for(let le=0;le<6;le++){Re=be[le].mipmaps;for(let ze=0;ze<Re.length;ze++){let Ue=Re[ze];y.format!==pn?Be!==null?k?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,0,0,Ue.width,Ue.height,Be,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,je,Ue.width,Ue.height,0,Ue.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,0,0,Ue.width,Ue.height,Be,Xe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze,je,Ue.width,Ue.height,0,Be,Xe,Ue.data)}}}else{if(Re=y.mipmaps,k&&Se){Re.length>0&&Me++;let le=it(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,je,le.width,le.height)}for(let le=0;le<6;le++)if(Oe){k?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,Be,Xe,be[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,be[le].width,be[le].height,0,Be,Xe,be[le].data);for(let ze=0;ze<Re.length;ze++){let _t=Re[ze].image[le].image;k?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,0,0,_t.width,_t.height,Be,Xe,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,je,_t.width,_t.height,0,Be,Xe,_t.data)}}else{k?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Be,Xe,be[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Be,Xe,be[le]);for(let ze=0;ze<Re.length;ze++){let Ue=Re[ze];k?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,0,0,Be,Xe,Ue.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ze+1,je,Be,Xe,Ue.image[le])}}}m(y)&&M(n.TEXTURE_CUBE_MAP),me.__version=ee.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Ae(I,y,H,Z,ee,me){let _e=r.convert(H.format,H.colorSpace),te=r.convert(H.type),re=v(H.internalFormat,_e,te,H.normalized,H.colorSpace),ye=i.get(y),Oe=i.get(H);if(Oe.__renderTarget=y,!ye.__hasExternalTextures){let be=Math.max(1,y.width>>me),ve=Math.max(1,y.height>>me);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,me,re,be,ve,y.depth,0,_e,te,null):t.texImage2D(ee,me,re,be,ve,0,_e,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),Ke(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ee,Oe.__webglTexture,0,Ye(y)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ee,Oe.__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(I,y,H){if(n.bindRenderbuffer(n.RENDERBUFFER,I),y.depthBuffer){let Z=y.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,me=w(y.stencilBuffer,ee),_e=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ke(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(y),me,y.width,y.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(y),me,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,me,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,I)}else{let Z=y.textures;for(let ee=0;ee<Z.length;ee++){let me=Z[ee],_e=r.convert(me.format,me.colorSpace),te=r.convert(me.type),re=v(me.internalFormat,_e,te,me.normalized,me.colorSpace);Ke(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(y),re,y.width,y.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(y),re,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,re,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ot(I,y,H){let Z=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=i.get(y.depthTexture);if(ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,y.depthTexture.addEventListener("dispose",D)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(n.TEXTURE_CUBE_MAP,y.depthTexture);let ye=r.convert(y.depthTexture.format),Oe=r.convert(y.depthTexture.type),be;y.depthTexture.format===In?be=n.DEPTH_COMPONENT24:y.depthTexture.format===xi&&(be=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,be,y.width,y.height,0,ye,Oe,null)}}else Q(y.depthTexture,0);let me=ee.__webglTexture,_e=Ye(y),te=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,re=y.depthTexture.format===xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===In)Ke(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,me,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,re,te,me,0);else if(y.depthTexture.format===xi)Ke(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,me,0,_e):n.framebufferTexture2D(n.FRAMEBUFFER,re,te,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(I){let y=i.get(I),H=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let Z=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){let ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=Z}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let Z=0;Z<6;Z++)ot(y.__webglFramebuffer[Z],I,Z);else{let Z=I.texture.mipmaps;Z&&Z.length>0?ot(y.__webglFramebuffer[0],I,0):ot(y.__webglFramebuffer,I,0)}else if(H){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=n.createRenderbuffer(),Ce(y.__webglDepthbuffer[Z],I,!1);else{let ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=y.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,me)}}else{let Z=I.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ce(y.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(I,y,H){let Z=i.get(I);y!==void 0&&Ae(Z.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&se(I)}function de(I){let y=I.texture,H=i.get(I),Z=i.get(y);I.addEventListener("dispose",x);let ee=I.textures,me=I.isWebGLCubeRenderTarget===!0,_e=ee.length>1;if(_e||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,o.memory.textures++),me){H.__webglFramebuffer=[];for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[te]=[];for(let re=0;re<y.mipmaps.length;re++)H.__webglFramebuffer[te][re]=n.createFramebuffer()}else H.__webglFramebuffer[te]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let te=0;te<y.mipmaps.length;te++)H.__webglFramebuffer[te]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(_e)for(let te=0,re=ee.length;te<re;te++){let ye=i.get(ee[te]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Ke(I)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){let re=ee[te];H.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[te]);let ye=r.convert(re.format,re.colorSpace),Oe=r.convert(re.type),be=v(re.internalFormat,ye,Oe,re.normalized,re.colorSpace,I.isXRRenderTarget===!0),ve=Ye(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,be,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,H.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ce(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(me){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ie(n.TEXTURE_CUBE_MAP,y);for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)Ae(H.__webglFramebuffer[te][re],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,re);else Ae(H.__webglFramebuffer[te],I,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(y)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let te=0,re=ee.length;te<re;te++){let ye=ee[te],Oe=i.get(ye),be=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(be=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,Oe.__webglTexture),ie(be,ye),Ae(H.__webglFramebuffer,I,ye,n.COLOR_ATTACHMENT0+te,be,0),m(ye)&&M(be)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,Z.__webglTexture),ie(te,y),y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)Ae(H.__webglFramebuffer[re],I,y,n.COLOR_ATTACHMENT0,te,re);else Ae(H.__webglFramebuffer,I,y,n.COLOR_ATTACHMENT0,te,0);m(y)&&M(te),t.unbindTexture()}I.depthBuffer&&se(I)}function fe(I){let y=I.textures;for(let H=0,Z=y.length;H<Z;H++){let ee=y[H];if(m(ee)){let me=A(I),_e=i.get(ee).__webglTexture;t.bindTexture(me,_e),M(me),t.unbindTexture()}}}let xe=[],We=[];function Ve(I){if(I.samples>0){if(Ke(I)===!1){let y=I.textures,H=I.width,Z=I.height,ee=n.COLOR_BUFFER_BIT,me=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(I),te=y.length>1;if(te)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let re=I.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let Oe=i.get(y[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,H,Z,0,0,H,Z,ee,n.NEAREST),c===!0&&(xe.length=0,We.length=0,xe.push(n.COLOR_ATTACHMENT0+ye),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(xe.push(me),We.push(me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);let Oe=i.get(y[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let y=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Ye(I){return Math.min(s.maxSamples,I.samples)}function Ke(I){let y=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(I){let y=o.render.frame;f.get(I)!==y&&(f.set(I,y),I.update())}function lt(I,y){let H=I.colorSpace,Z=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==qs&&H!==Zn&&(rt.getTransfer(H)===ut?(Z!==pn||ee!==jt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",H)),y}function it(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.getTextureUnits=R,this.setTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=J,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=he,this.setupRenderTarget=de,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function U_(n,e){function t(i,s=Zn){let r,o=rt.getTransfer(s);if(i===jt)return n.UNSIGNED_BYTE;if(i===ia)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ql)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ec)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===$l)return n.BYTE;if(i===jl)return n.SHORT;if(i===Ms)return n.UNSIGNED_SHORT;if(i===na)return n.INT;if(i===wn)return n.UNSIGNED_INT;if(i===fn)return n.FLOAT;if(i===Tn)return n.HALF_FLOAT;if(i===tc)return n.ALPHA;if(i===nc)return n.RGB;if(i===pn)return n.RGBA;if(i===In)return n.DEPTH_COMPONENT;if(i===xi)return n.DEPTH_STENCIL;if(i===ra)return n.RED;if(i===oa)return n.RED_INTEGER;if(i===yi)return n.RG;if(i===aa)return n.RG_INTEGER;if(i===la)return n.RGBA_INTEGER;if(i===Ar||i===Rr||i===Cr||i===Pr)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ca||i===ha||i===ua||i===da)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fa||i===pa||i===ma||i===ga||i===_a||i===Ir||i===xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fa||i===pa)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ma)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ga)return r.COMPRESSED_R11_EAC;if(i===_a)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ir)return r.COMPRESSED_RG11_EAC;if(i===xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ya||i===va||i===Sa||i===Ma||i===ba||i===Ea||i===wa||i===Ta||i===Aa||i===Ra||i===Ca||i===Pa||i===Ia||i===La)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ya)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===va)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ma)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ba)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ea)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ta)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Aa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ra)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ia)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===La)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Da||i===Na||i===Ua)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Da)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Fa||i===Oa||i===Lr||i===Ba)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var F_=`
void main() {

  gl_Position = vec4( position, 1.0 );

}`,O_=`
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

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ir(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new cn({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wc=class extends Sn{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,f=null,u=null,h=null,d=null,p=null,g=typeof XRWebGLBinding<"u",_=new Ec,m={},M=t.getContextAttributes(),A=null,v=null,w=[],b=[],D=new ce,x=null,T=null,C=new Ot;C.viewport=new bt;let U=new Ot;U.viewport=new bt;let E=[C,U],P=new $o,R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let j=w[G];return j===void 0&&(j=new us,w[G]=j),j.getTargetRaySpace()},this.getControllerGrip=function(G){let j=w[G];return j===void 0&&(j=new us,w[G]=j),j.getGripSpace()},this.getHand=function(G){let j=w[G];return j===void 0&&(j=new us,w[G]=j),j.getHandSpace()};function O(G){let j=b.indexOf(G.inputSource);if(j===-1)return;let ue=w[j];ue!==void 0&&(ue.update(G.inputSource,G.frame,l||o),ue.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Q);for(let G=0;G<w.length;G++){let j=b[G];j!==null&&(b[G]=null,w[G].disconnect(j))}R=null,N=null,_.reset();for(let G in m)delete m[G];if(e.setRenderTarget(A),d=null,h=null,u=null,s=null,v=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),T!==null){let G=T.camera;G.fov=T.fov,G.zoom=T.zoom,G.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Q),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Ge=null,Ae=null;M.depth&&(Ae=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=M.stencil?xi:In,Ge=M.stencil?bs:wn);let Ce={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Ce),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Jt(h.textureWidth,h.textureHeight,{format:pn,type:jt,depthTexture:new ai(h.textureWidth,h.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ue={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Jt(d.framebufferWidth,d.framebufferHeight,{format:pn,type:jt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ge.setContext(s),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(G){for(let j=0;j<G.removed.length;j++){let ue=G.removed[j],Ge=b.indexOf(ue);Ge>=0&&(b[Ge]=null,w[Ge].disconnect(ue))}for(let j=0;j<G.added.length;j++){let ue=G.added[j],Ge=b.indexOf(ue);if(Ge===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=b.length){b.push(ue),Ge=Ce;break}else if(b[Ce]===null){b[Ce]=ue,Ge=Ce;break}if(Ge===-1)break}let Ae=w[Ge];Ae&&Ae.connect(ue)}}let J=new L,q=new L;function K(G,j,ue){J.setFromMatrixPosition(j.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);let Ge=J.distanceTo(q),Ae=j.projectionMatrix.elements,Ce=ue.projectionMatrix.elements,ot=Ae[14]/(Ae[10]-1),se=Ae[14]/(Ae[10]+1),he=(Ae[9]+1)/Ae[5],de=(Ae[9]-1)/Ae[5],fe=(Ae[8]-1)/Ae[0],xe=(Ce[8]+1)/Ce[0],We=ot*fe,Ve=ot*xe,Ye=Ge/(-fe+xe),Ke=Ye*-fe;if(j.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ke),G.translateZ(Ye),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ae[10]===-1)G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let B=ot+Ye,lt=se+Ye,it=We-Ke,I=Ve+(Ge-Ke),y=he*se/lt*B,H=de*se/lt*B;G.projectionMatrix.makePerspective(it,I,y,H,B,lt),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ae(G,j){j===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(j.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let j=G.near,ue=G.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),P.near=U.near=C.near=j,P.far=U.far=C.far=ue,(R!==P.near||N!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),R=P.near,N=P.far),P.layers.mask=G.layers.mask|6,C.layers.mask=P.layers.mask&-5,U.layers.mask=P.layers.mask&-3;let Ge=G.parent,Ae=P.cameras;ae(P,Ge);for(let Ce=0;Ce<Ae.length;Ce++)ae(Ae[Ce],Ge);Ae.length===2?K(P,C,U):P.projectionMatrix.copy(C.projectionMatrix),T===null&&G.isPerspectiveCamera&&(T={camera:G,fov:G.fov,zoom:G.zoom}),pe(G,P,Ge)};function pe(G,j,ue){ue===null?G.matrix.copy(j.matrixWorld):(G.matrix.copy(ue.matrixWorld),G.matrix.invert(),G.matrix.multiply(j.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(j.projectionMatrix),G.projectionMatrixInverse.copy(j.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ls*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(G){c=G,h!==null&&(h.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(G){return m[G]};let ke=null;function ie(G,j){if(f=j.getViewerPose(l||o),p=j,f!==null){let ue=f.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ge=!1;ue.length!==P.cameras.length&&(P.cameras.length=0,Ge=!0);for(let se=0;se<ue.length;se++){let he=ue[se],de=null;if(d!==null)de=d.getViewport(he);else{let xe=u.getViewSubImage(h,he);de=xe.viewport,se===0&&(e.setRenderTargetTextures(v,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(v))}let fe=E[se];fe===void 0&&(fe=new Ot,fe.layers.enable(se),fe.viewport=new bt,E[se]=fe),fe.matrix.fromArray(he.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(he.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(de.x,de.y,de.width,de.height),se===0&&(P.matrix.copy(fe.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ge===!0&&P.cameras.push(fe)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let se=u.getDepthInformation(ue[0]);se&&se.isValid&&se.texture&&_.init(se,s.renderState)}if(Ae&&Ae.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let se=0;se<ue.length;se++){let he=ue[se].camera;if(he){let de=m[he];de||(de=new ir,m[he]=de);let fe=u.getCameraImage(he);de.sourceTexture=fe}}}}for(let ue=0;ue<w.length;ue++){let Ge=b[ue],Ae=w[ue];Ge!==null&&Ae!==void 0&&Ae.update(Ge,j,l||o)}ke&&ke(G,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),p=null}let ge=new zu;ge.setAnimationLoop(ie),this.setAnimationLoop=function(G){ke=G},this.dispose=function(){}}},B_=new dt,Xu=new Je;Xu.set(-1,0,0,0,1,0,0,0,1);function z_(n,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function i(_,m){m.color.getRGB(_.fogColor.value,ac(n)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,M,A,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(_,m):m.isMeshLambertMaterial?(r(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(_,m),u(_,m)):m.isMeshPhongMaterial?(r(_,m),f(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(_,m),h(_,m),m.isMeshPhysicalMaterial&&d(_,m,v)):m.isMeshMatcapMaterial?(r(_,m),p(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),g(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?c(_,m,M,A):m.isSpriteMaterial?l(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===zt&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===zt&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let M=e.get(m),A=M.envMap,v=M.envMapRotation;A&&(_.envMap.value=A,_.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Xu),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,M,A){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*M,_.scale.value=A*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function l(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function f(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function h(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function d(_,m,M){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zt&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function p(_,m){m.matcap&&(_.matcap.value=m.matcap)}function g(_,m){let M=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function k_(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,w){let b=w.program;i.uniformBlockBinding(v,b)}function l(v,w){let b=s[v.id];b===void 0&&(_(v),b=f(v),s[v.id]=b,v.addEventListener("dispose",M));let D=w.program;i.updateUBOMapping(v,D);let x=e.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function f(v){let w=u();v.__bindingPointIndex=w;let b=n.createBuffer(),D=v.__size,x=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,D,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let w=s[v.id],b=v.uniforms,D=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,T=b.length;x<T;x++){let C=b[x];if(Array.isArray(C))for(let U=0,E=C.length;U<E;U++)d(C[U],x,U,D);else d(C,x,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,w,b,D){if(g(v,w,b,D)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let U=0;U<T.length;U++){let E=T[U],P=m(E);p(E,v.__data,C),typeof E!="number"&&typeof E!="boolean"&&!E.isMatrix3&&!ArrayBuffer.isView(E)&&(C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,v.__data)}}function p(v,w,b){typeof v=="number"||typeof v=="boolean"?w[0]=v:v.isMatrix3?(w[0]=v.elements[0],w[1]=v.elements[1],w[2]=v.elements[2],w[3]=0,w[4]=v.elements[3],w[5]=v.elements[4],w[6]=v.elements[5],w[7]=0,w[8]=v.elements[6],w[9]=v.elements[7],w[10]=v.elements[8],w[11]=0):ArrayBuffer.isView(v)?w.set(new v.constructor(v.buffer,v.byteOffset,w.length)):v.toArray(w,b)}function g(v,w,b,D){let x=v.value,T=w+"_"+b;if(D[T]===void 0)return typeof x=="number"||typeof x=="boolean"?D[T]=x:ArrayBuffer.isView(x)?D[T]=x.slice():D[T]=x.clone(),!0;{let C=D[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return D[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function _(v){let w=v.uniforms,b=0,D=16;for(let T=0,C=w.length;T<C;T++){let U=Array.isArray(w[T])?w[T]:[w[T]];for(let E=0,P=U.length;E<P;E++){let R=U[E],N=Array.isArray(R.value)?R.value:[R.value];for(let O=0,V=N.length;O<V;O++){let Q=N[O],J=m(Q),q=b%D,K=q%J.boundary,ae=q+K;b+=K,ae!==0&&D-ae<J.storage&&(b+=D-ae),R.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=J.storage}}}let x=b%D;return x>0&&(b+=D-x),v.__size=b,v.__cache={},this}function m(v){let w={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(w.boundary=4,w.storage=4):v.isVector2?(w.boundary=8,w.storage=8):v.isVector3||v.isColor?(w.boundary=16,w.storage=12):v.isVector4?(w.boundary=16,w.storage=16):v.isMatrix3?(w.boundary=48,w.storage=48):v.isMatrix4?(w.boundary=64,w.storage=64):v.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(w.boundary=16,w.storage=v.byteLength):He("WebGLRenderer: Unsupported uniform value type.",v),w}function M(v){let w=v.target;w.removeEventListener("dispose",M);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:A}}var V_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function H_(){return On===null&&(On=new js(V_,16,16,yi,Tn),On.name="DFG_LUT",On.minFilter=Bt,On.magFilter=Bt,On.wrapS=Pn,On.wrapT=Pn,On.generateMipmaps=!1,On.needsUpdate=!0),On}var Wa=class{constructor(e={}){let{canvas:t=ou(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=jt}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=d,_=new Set([la,aa,oa]),m=new Set([jt,wn,Ms,bs,ia,sa]),M=new Uint32Array(4),A=new Int32Array(4),v=new L,w=null,b=null,D=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,U=!1,E=null,P=null,R=null,N=null;this._outputColorSpace=Ft;let O=0,V=0,Q=null,J=-1,q=null,K=new bt,ae=new bt,pe=null,ke=new Ze(0),ie=0,ge=t.width,G=t.height,j=1,ue=null,Ge=null,Ae=new bt(0,0,ge,G),Ce=new bt(0,0,ge,G),ot=!1,se=new ds,he=!1,de=!1,fe=new dt,xe=new L,We=new bt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function Ke(){return Q===null?j:1}let B=i;function lt(S,z){return t.getContext(S,z)}let it,I,y,H,Z,ee,me,_e,te,re,ye,Oe,be,ve,Be,Xe,je,k,Se,ne,Me,Re,le;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",gn,!1),B===null){let z="webgl2";if(B=lt(z,S),B===null)throw lt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(S){throw t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),qe("WebGLRenderer: "+S.message),S}function ze(){it=new J0(B),it.init(),Me=new U_(B,it),I=new z0(B,it,e,Me),y=new D_(B,it),I.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),P=B.createFramebuffer(),R=B.createFramebuffer(),N=B.createFramebuffer(),H=new j0(B),Z=new y_,ee=new N_(B,it,y,Z,I,Me,H),me=new Z0(C),_e=new ep(B),Re=new O0(B,_e),te=new K0(B,_e,H,Re),re=new eg(B,te,_e,Re,H),k=new Q0(B,I,ee),Be=new k0(Z),ye=new x_(C,me,it,I,Re,Be),Oe=new z_(C,Z),be=new S_,ve=new A_(it),je=new F0(C,me,y,re,p,c),Xe=new L_(C,re,I),le=new k_(B,H,I,y),Se=new B0(B,it,H),ne=new $0(B,it,H),H.programs=ye.programs,C.capabilities=I,C.extensions=it,C.properties=Z,C.renderLists=be,C.shadowMap=Xe,C.state=y,C.info=H}g!==jt&&(T=new ng(g,t.width,t.height,a,s,r));let Ue=new wc(C,B);this.xr=Ue,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=it.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=it.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(ge,G,!1))},this.getSize=function(S){return S.set(ge,G)},this.setSize=function(S,z,$=!0){if(Ue.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=S,G=z,t.width=Math.floor(S*j),t.height=Math.floor(z*j),$===!0&&(t.style.width=S+"px",t.style.height=z+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(ge*j,G*j).floor()},this.setDrawingBufferSize=function(S,z,$){ge=S,G=z,j=$,t.width=Math.floor(S*$),t.height=Math.floor(z*$),this.setViewport(0,0,S,z)},this.setEffects=function(S){if(g===jt){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let z=0;z<S.length;z++)if(S[z].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(K)},this.getViewport=function(S){return S.copy(Ae)},this.setViewport=function(S,z,$,W){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,z,$,W),y.viewport(K.copy(Ae).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(Ce)},this.setScissor=function(S,z,$,W){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,z,$,W),y.scissor(ae.copy(Ce).multiplyScalar(j).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(S){y.setScissorTest(ot=S)},this.setOpaqueSort=function(S){ue=S},this.setTransparentSort=function(S){Ge=S},this.getClearColor=function(S){return S.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,$=!0){let W=0;if(S){let X=!1;if(Q!==null){let Te=Q.texture.format;X=_.has(Te)}if(X){let Te=Q.texture.type,Ie=m.has(Te),we=je.getClearColor(),Le=je.getClearAlpha(),Fe=we.r,et=we.g,st=we.b;Ie?(M[0]=Fe,M[1]=et,M[2]=st,M[3]=Le,B.clearBufferuiv(B.COLOR,0,M)):(A[0]=Fe,A[1]=et,A[2]=st,A[3]=Le,B.clearBufferiv(B.COLOR,0,A))}else W|=B.COLOR_BUFFER_BIT}z&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),E=S},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",gn,!1),je.dispose(),be.dispose(),ve.dispose(),Z.dispose(),me.dispose(),re.dispose(),Re.dispose(),le.dispose(),ye.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Uc),Ue.removeEventListener("sessionend",Fc),Si.stop()};function _t(S){S.preventDefault(),sc("WebGLRenderer: Context Lost."),U=!0}function ct(){sc("WebGLRenderer: Context Restored."),U=!1;let S=H.autoReset,z=Xe.enabled,$=Xe.autoUpdate,W=Xe.needsUpdate,X=Xe.type;ze(),H.autoReset=S,Xe.enabled=z,Xe.autoUpdate=$,Xe.needsUpdate=W,Xe.type=X}function gn(S){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function An(S){let z=S.target;z.removeEventListener("dispose",An),md(z)}function md(S){gd(S),Z.remove(S)}function gd(S){let z=Z.get(S).programs;z!==void 0&&(z.forEach(function($){ye.releaseProgram($)}),S.isShaderMaterial&&ye.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,$,W,X,Te){z===null&&(z=Ve);let Ie=X.isMesh&&X.matrixWorld.determinantAffine()<0,we=yd(S,z,$,W,X);y.setMaterial(W,Ie);let Le=$.index,Fe=1;if(W.wireframe===!0){if(Le=te.getWireframeAttribute($),Le===void 0)return;Fe=2}let et=$.drawRange,st=$.attributes.position,De=et.start*Fe,ht=(et.start+et.count)*Fe;Te!==null&&(De=Math.max(De,Te.start*Fe),ht=Math.min(ht,(Te.start+Te.count)*Fe)),Le!==null?(De=Math.max(De,0),ht=Math.min(ht,Le.count)):st!=null&&(De=Math.max(De,0),ht=Math.min(ht,st.count));let Rt=ht-De;if(Rt<0||Rt===1/0)return;Re.setup(X,W,we,$,Le);let St,mt=Se;if(Le!==null&&(St=_e.get(Le),mt=ne,mt.setIndex(St)),X.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*Ke()),mt.setMode(B.LINES)):mt.setMode(B.TRIANGLES);else if(X.isLine){let kt=W.linewidth;kt===void 0&&(kt=1),y.setLineWidth(kt*Ke()),X.isLineSegments?mt.setMode(B.LINES):X.isLineLoop?mt.setMode(B.LINE_LOOP):mt.setMode(B.LINE_STRIP)}else X.isPoints?mt.setMode(B.POINTS):X.isSprite&&mt.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(it.get("WEBGL_multi_draw"))mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let kt=X._multiDrawStarts,Pe=X._multiDrawCounts,Xt=X._multiDrawCount,at=Le?_e.get(Le).bytesPerElement:1,un=Z.get(W).currentProgram.getUniforms();for(let Rn=0;Rn<Xt;Rn++)un.setValue(B,"_gl_DrawID",Rn),mt.render(kt[Rn]/at,Pe[Rn])}else if(X.isInstancedMesh)mt.renderInstances(De,Rt,X.count);else if($.isInstancedBufferGeometry){let kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Pe=Math.min($.instanceCount,kt);mt.renderInstances(De,Rt,Pe)}else mt.render(De,Rt)};function Nc(S,z,$,W){E!==null&&S.isNodeMaterial&&E.setObject(W,S),he===!0&&Be.setState(S,$,!1),S.transparent===!0&&S.side===Tt&&S.forceSinglePass===!1?(S.side=zt,S.needsUpdate=!0,kr(S,z,W),S.side=mi,S.needsUpdate=!0,kr(S,z,W),S.side=Tt):kr(S,z,W)}this.compile=function(S,z,$=null){$===null&&($=S),E!==null&&E.renderStart(S,z,$),b=ve.get($),b.init(z),x.push(b),$.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),S!==$&&S.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),E!==null&&E.updateLights(b.state.lightsArray),de=this.localClippingEnabled,he=Be.init(this.clippingPlanes,de),he===!0&&Be.setGlobalState(this.clippingPlanes,z),E!==null&&Xe.render(b.state.shadowsArray,$,z);let W=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Te=X.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){let we=Te[Ie];Nc(we,$,z,X),W.add(we)}else Nc(Te,$,z,X),W.add(Te)}),b=x.pop(),E!==null&&E.renderEnd(),W},this.compileAsync=function(S,z,$=null){let W=this.compile(S,z,$);return new Promise(X=>{function Te(){if(W.forEach(function(Ie){let Le=Z.get(Ie).currentProgram;(Le===void 0||Le.isReady())&&W.delete(Ie)}),W.size===0){X(S);return}setTimeout(Te,10)}it.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ja=null;function _d(S){ja&&ja(S)}function Uc(){Si.stop()}function Fc(){Si.start()}let Si=new zu;Si.setAnimationLoop(_d),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(S){ja=S,Ue.setAnimationLoop(S),S===null?Si.stop():Si.start()},Ue.addEventListener("sessionstart",Uc),Ue.addEventListener("sessionend",Fc),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;E!==null&&E.renderStart(S,z);let $=Ue.enabled===!0&&Ue.isPresenting===!0,W=T!==null&&(Q===null||$)&&T.begin(C,Q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(z),z=Ue.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,z,Q),b=ve.get(S,x.length),b.init(z),b.state.textureUnits=ee.getTextureUnits(),x.push(b),fe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(fe,vn,z.reversedDepth),de=this.localClippingEnabled,he=Be.init(this.clippingPlanes,de),w=be.get(S,D.length),w.init(),D.push(w),Ue.enabled===!0&&Ue.isPresenting===!0){let Ie=C.xr.getDepthSensingMesh();Ie!==null&&Qa(Ie,z,-1/0,C.sortObjects)}Qa(S,z,0,C.sortObjects),w.finish(),E!==null&&E.updateLights(b.state.lightsArray),C.sortObjects===!0&&w.sort(ue,Ge),Ye=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Ye&&je.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&Be.beginShadows();let X=b.state.shadowsArray;if(Xe.render(X,S,z),he===!0&&Be.endShadows(),(W&&T.hasRenderPass())===!1){let Ie=w.opaque,we=w.transmissive;if(b.setupLights(),z.isArrayCamera){let Le=z.cameras;if(we.length>0)for(let Fe=0,et=Le.length;Fe<et;Fe++){let st=Le[Fe];Bc(Ie,we,S,st)}Ye&&je.render(S);for(let Fe=0,et=Le.length;Fe<et;Fe++){let st=Le[Fe];Oc(w,S,st,st.viewport)}}else we.length>0&&Bc(Ie,we,S,z),Ye&&je.render(S),Oc(w,S,z)}Q!==null&&V===0&&(ee.updateMultisampleRenderTarget(Q),ee.updateRenderTargetMipmap(Q)),W&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,z),Re.resetDefaultState(),J=-1,q=null,x.pop(),x.length>0?(b=x[x.length-1],ee.setTextureUnits(b.state.textureUnits),he===!0&&Be.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,D.pop(),D.length>0?w=D[D.length-1]:w=null,E!==null&&E.renderEnd()};function Qa(S,z,$,W){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)$=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(se)){W&&We.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);let Ie=re.update(S),we=S.material;we.visible&&w.push(S,Ie,we,$,We.z,null,z)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(se))){let Ie=re.update(S),we=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),We.copy(S.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),We.copy(Ie.boundingSphere.center)),We.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(we)){let Le=Ie.groups;for(let Fe=0,et=Le.length;Fe<et;Fe++){let st=Le[Fe],De=we[st.materialIndex];De&&De.visible&&w.push(S,Ie,De,$,We.z,st,z)}}else we.visible&&w.push(S,Ie,we,$,We.z,null,z)}}let Te=S.children;for(let Ie=0,we=Te.length;Ie<we;Ie++)Qa(Te[Ie],z,$,W)}function Oc(S,z,$,W){let{opaque:X,transmissive:Te,transparent:Ie}=S;b.setupLightsView($),he===!0&&Be.setGlobalState(C.clippingPlanes,$),W&&y.viewport(K.copy(W)),X.length>0&&zr(X,z,$),Te.length>0&&zr(Te,z,$),Ie.length>0&&zr(Ie,z,$),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Bc(S,z,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){let De=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Jt(1,1,{generateMipmaps:!0,type:De?Tn:jt,minFilter:_i,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let Te=b.state.transmissionRenderTarget[W.id],Ie=W.viewport||K;Te.setSize(Ie.z*C.transmissionResolutionScale,Ie.w*C.transmissionResolutionScale);let we=C.getRenderTarget(),Le=C.getActiveCubeFace(),Fe=C.getActiveMipmapLevel();C.setRenderTarget(Te),C.getClearColor(ke),ie=C.getClearAlpha(),ie<1&&C.setClearColor(16777215,.5),C.clear(),Ye&&je.render($);let et=C.toneMapping;C.toneMapping=En;let st=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),he===!0&&Be.setGlobalState(C.clippingPlanes,W),zr(S,$,W),ee.updateMultisampleRenderTarget(Te),ee.updateRenderTargetMipmap(Te),it.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ht=0,Rt=z.length;ht<Rt;ht++){let St=z[ht],{object:mt,geometry:kt,material:Pe,group:Xt}=St;if(Pe.side===Tt&&mt.layers.test(W.layers)){let at=Pe.side;Pe.side=zt,Pe.needsUpdate=!0,zc(mt,$,W,kt,Pe,Xt),Pe.side=at,Pe.needsUpdate=!0,De=!0}}De===!0&&(ee.updateMultisampleRenderTarget(Te),ee.updateRenderTargetMipmap(Te))}C.setRenderTarget(we,Le,Fe),C.setClearColor(ke,ie),st!==void 0&&(W.viewport=st),C.toneMapping=et}function zr(S,z,$){let W=z.isScene===!0?z.overrideMaterial:null;for(let X=0,Te=S.length;X<Te;X++){let Ie=S[X],{object:we,geometry:Le,group:Fe}=Ie,et=Ie.material;et.allowOverride===!0&&W!==null&&(et=W),we.layers.test($.layers)&&zc(we,z,$,Le,et,Fe)}}function zc(S,z,$,W,X,Te){E!==null&&X.isNodeMaterial&&E.setObject(S,X),S.onBeforeRender(C,z,$,W,X,Te),S.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(C,z,$,W,S,Te),X.transparent===!0&&X.side===Tt&&X.forceSinglePass===!1?(X.side=zt,X.needsUpdate=!0,C.renderBufferDirect($,z,W,X,S,Te),X.side=mi,X.needsUpdate=!0,C.renderBufferDirect($,z,W,X,S,Te),X.side=Tt):C.renderBufferDirect($,z,W,X,S,Te),S.onAfterRender(C,z,$,W,X,Te)}function kr(S,z,$){z.isScene!==!0&&(z=Ve);let W=Z.get(S),X=b.state.lights,Te=b.state.shadowsArray,Ie=X.state.version,we=ye.getParameters(S,X.state,Te,z,$,b.state.lightProbeGridArray),Le=ye.getProgramCacheKey(we),Fe=W.programs;W.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?z.environment:null,W.fog=z.fog;let et=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;W.envMap=me.get(S.envMap||W.environment,et),W.envMapRotation=W.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",An),Fe=new Map,W.programs=Fe);let st=Fe.get(Le);if(st!==void 0){if(W.currentProgram===st&&W.lightsStateVersion===Ie)return Vc(S,we),st}else we.uniforms=ye.getUniforms(S),E!==null&&S.isNodeMaterial&&E.build(S,$,we),S.onBeforeCompile(we,C),st=ye.acquireProgram(we,Le),Fe.set(Le,st),W.uniforms=we.uniforms;let De=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(De.clippingPlanes=Be.uniform),Vc(S,we),W.needsLights=Sd(S),W.lightsStateVersion=Ie,W.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.sunLights.value=X.state.sun,De.sunLightShadows.value=X.state.sunShadow,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.sunShadowMatrix.value=X.state.sunShadowMatrix,De.sunShadowCascade.value=X.state.sunShadowCascade,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=b.state.lightProbeGridArray.length>0,W.currentProgram=st,W.uniformsList=null,st}function kc(S){if(S.uniformsList===null){let z=S.currentProgram.getUniforms();S.uniformsList=As.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function Vc(S,z){let $=Z.get(S);$.outputColorSpace=z.outputColorSpace,$.batching=z.batching,$.batchingColor=z.batchingColor,$.instancing=z.instancing,$.instancingColor=z.instancingColor,$.instancingMorph=z.instancingMorph,$.skinning=z.skinning,$.morphTargets=z.morphTargets,$.morphNormals=z.morphNormals,$.morphColors=z.morphColors,$.morphTargetsCount=z.morphTargetsCount,$.numClippingPlanes=z.numClippingPlanes,$.numIntersection=z.numClipIntersection,$.vertexAlphas=z.vertexAlphas,$.vertexTangents=z.vertexTangents,$.toneMapping=z.toneMapping}function xd(S,z){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let $=0,W=S.length;$<W;$++){let X=S[$];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function yd(S,z,$,W,X){z.isScene!==!0&&(z=Ve),ee.resetTextureUnits();let Te=z.fog,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?z.environment:null,we=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:rt.workingColorSpace,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Fe=me.get(W.envMap||Ie,Le),et=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,st=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!$.morphAttributes.position,ht=!!$.morphAttributes.normal,Rt=!!$.morphAttributes.color,St=En;W.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(St=C.toneMapping);let mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,kt=mt!==void 0?mt.length:0,Pe=Z.get(W),Xt=b.state.lights;if(he===!0&&(de===!0||S!==q)){let xt=S===q&&W.id===J;Be.setState(W,S,xt)}let at=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Xt.state.version||Pe.outputColorSpace!==we||X.isBatchedMesh&&Pe.batching===!1||!X.isBatchedMesh&&Pe.batching===!0||X.isBatchedMesh&&Pe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Pe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Pe.instancing===!1||!X.isInstancedMesh&&Pe.instancing===!0||X.isSkinnedMesh&&Pe.skinning===!1||!X.isSkinnedMesh&&Pe.skinning===!0||X.isInstancedMesh&&Pe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pe.instancingMorph===!1&&X.morphTexture!==null||Pe.envMap!==Fe||W.fog===!0&&Pe.fog!==Te||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Be.numPlanes||Pe.numIntersection!==Be.numIntersection)||Pe.vertexAlphas!==et||Pe.vertexTangents!==st||Pe.morphTargets!==De||Pe.morphNormals!==ht||Pe.morphColors!==Rt||Pe.toneMapping!==St||Pe.morphTargetsCount!==kt||!!Pe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Pe.__version=W.version);let un=Pe.currentProgram;at===!0&&(un=kr(W,z,X),E&&W.isNodeMaterial&&E.onUpdateProgram(W,un,Pe));let Rn=!1,Kn=!1,Vi=!1,pt=un.getUniforms(),At=Pe.uniforms;if(y.useProgram(un.program)&&(Rn=!0,Kn=!0,Vi=!0),W.id!==J&&(J=W.id,Kn=!0),Pe.needsLights){let xt=xd(b.state.lightProbeGridArray,X);Pe.lightProbeGrid!==xt&&(Pe.lightProbeGrid=xt,Kn=!0)}if(Rn||q!==S){y.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pt.setValue(B,"projectionMatrix",S.projectionMatrix),pt.setValue(B,"viewMatrix",S.matrixWorldInverse);let jn=pt.map.cameraPosition;jn!==void 0&&jn.setValue(B,xe.setFromMatrixPosition(S.matrixWorld)),I.logarithmicDepthBuffer&&pt.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pt.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),q!==S&&(q=S,Kn=!0,Vi=!0)}if(Pe.needsLights&&(Xt.state.sunShadowMap.length>0&&pt.setValue(B,"sunShadowMap",Xt.state.sunShadowMap,ee),Xt.state.directionalShadowMap.length>0&&pt.setValue(B,"directionalShadowMap",Xt.state.directionalShadowMap,ee),Xt.state.spotShadowMap.length>0&&pt.setValue(B,"spotShadowMap",Xt.state.spotShadowMap,ee),Xt.state.pointShadowMap.length>0&&pt.setValue(B,"pointShadowMap",Xt.state.pointShadowMap,ee)),X.isSkinnedMesh){pt.setOptional(B,X,"bindMatrix"),pt.setOptional(B,X,"bindMatrixInverse");let xt=X.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),pt.setValue(B,"boneTexture",xt.boneTexture,ee))}X.isBatchedMesh&&(pt.setOptional(B,X,"batchingTexture"),pt.setValue(B,"batchingTexture",X._matricesTexture,ee),pt.setOptional(B,X,"batchingIdTexture"),pt.setValue(B,"batchingIdTexture",X._indirectTexture,ee),pt.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&pt.setValue(B,"batchingColorTexture",X._colorsTexture,ee));let $n=$.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&k.update(X,$,un),(Kn||Pe.receiveShadow!==X.receiveShadow)&&(Pe.receiveShadow=X.receiveShadow,pt.setValue(B,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&z.environment!==null&&(At.envMapIntensity.value=z.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=H_()),Kn){if(pt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Pe.needsLights&&vd(At,Vi),Te&&W.fog===!0&&Oe.refreshFogUniforms(At,Te),Oe.refreshMaterialUniforms(At,W,j,G,b.state.transmissionRenderTarget[S.id]),Pe.needsLights&&Pe.lightProbeGrid){let xt=Pe.lightProbeGrid;At.probesSH.value=xt.texture,At.probesMin.value.copy(xt.boundingBox.min),At.probesMax.value.copy(xt.boundingBox.max),At.probesResolution.value.copy(xt.resolution)}As.upload(B,kc(Pe),At,ee)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(As.upload(B,kc(Pe),At,ee),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pt.setValue(B,"center",X.center),pt.setValue(B,"modelViewMatrix",X.modelViewMatrix),pt.setValue(B,"normalMatrix",X.normalMatrix),pt.setValue(B,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let xt=W.uniformsGroups;for(let jn=0,Hi=xt.length;jn<Hi;jn++){let Gc=xt[jn];le.update(Gc,un),le.bind(Gc,un)}}return un}function vd(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.sunLights.needsUpdate=z,S.sunLightShadows.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Sd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(S,z,$){let W=Z.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Z.get(S.texture).__webglTexture=z,Z.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){let $=Z.get(S);$.__webglFramebuffer=z,$.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,$=0){Q=S,O=z,V=$;let W=null,X=!1,Te=!1;if(S){let we=Z.get(S);if(we.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,we.__webglFramebuffer),K.copy(S.viewport),ae.copy(S.scissor),pe=S.scissorTest,y.viewport(K),y.scissor(ae),y.setScissorTest(pe),J=-1;return}else if(we.__webglFramebuffer===void 0)ee.setupRenderTarget(S);else if(we.__hasExternalTextures)ee.rebindTextures(S,Z.get(S.texture).__webglTexture,Z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let et=S.depthTexture;if(we.__boundDepthTexture!==et){if(et!==null&&Z.has(et)&&(S.width!==et.image.width||S.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(S)}}let Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Te=!0);let Fe=Z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?W=Fe[z][$]:W=Fe[z],X=!0):S.samples>0&&ee.useMultisampledRTT(S)===!1?W=Z.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?W=Fe[$]:W=Fe,K.copy(S.viewport),ae.copy(S.scissor),pe=S.scissorTest}else K.copy(Ae).multiplyScalar(j).floor(),ae.copy(Ce).multiplyScalar(j).floor(),pe=ot;if($!==0&&(W=P),y.bindFramebuffer(B.FRAMEBUFFER,W)&&y.drawBuffers(S,W),y.viewport(K),y.scissor(ae),y.setScissorTest(pe),X){let we=Z.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,$)}else if(Te){let we=z;for(let Le=0;Le<S.textures.length;Le++){let Fe=Z.get(S.textures[Le]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Le,Fe.__webglTexture,$,we)}}else if(S!==null&&$!==0){let we=Z.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,we.__webglTexture,$)}J=-1};function Hc(S){let z=Z.get(S);return(z.__readFormat!==S.format||z.__readType!==S.type)&&(z.__readFormat=S.format,z.__readType=S.type,z.__formatReadable=I.textureFormatReadable(S.format),z.__typeReadable=I.textureTypeReadable(S.type)),z}this.readRenderTargetPixels=function(S,z,$,W,X,Te,Ie,we=0){if(!(S&&S.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le){y.bindFramebuffer(B.FRAMEBUFFER,Le);try{let Fe=S.textures[we],et=Fe.format,st=Fe.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we);let De=Hc(Fe);if(De.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-W&&$>=0&&$<=S.height-X&&B.readPixels(z,$,W,X,Me.convert(et),Me.convert(st),Te)}finally{let Fe=Q!==null?Z.get(Q).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(S,z,$,W,X,Te,Ie,we=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ie!==void 0&&(Le=Le[Ie]),Le)if(z>=0&&z<=S.width-W&&$>=0&&$<=S.height-X){y.bindFramebuffer(B.FRAMEBUFFER,Le);let Fe=S.textures[we],et=Fe.format,st=Fe.type;S.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+we);let De=Hc(Fe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.bufferData(B.PIXEL_PACK_BUFFER,Te.byteLength,B.STREAM_READ),B.readPixels(z,$,W,X,Me.convert(et),Me.convert(st),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Rt=Q!==null?Z.get(Q).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Rt);let St=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await lu(B,St,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Te),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ht),B.deleteSync(St),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,$=0){let W=Math.pow(2,-$),X=Math.floor(S.image.width*W),Te=Math.floor(S.image.height*W),Ie=z!==null?z.x:0,we=z!==null?z.y:0;ee.setTexture2D(S,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Ie,we,X,Te),y.unbindTexture()},this.copyTextureToTexture=function(S,z,$=null,W=null,X=0,Te=0){let Ie,we,Le,Fe,et,st,De,ht,Rt,St=S.isCompressedTexture?S.mipmaps[Te]:S.image;if($!==null)Ie=$.max.x-$.min.x,we=$.max.y-$.min.y,Le=$.isBox3?$.max.z-$.min.z:1,Fe=$.min.x,et=$.min.y,st=$.isBox3?$.min.z:0;else{let At=Math.pow(2,-X);Ie=Math.floor(St.width*At),we=Math.floor(St.height*At),S.isDataArrayTexture?Le=St.depth:S.isData3DTexture?Le=Math.floor(St.depth*At):Le=1,Fe=0,et=0,st=0}W!==null?(De=W.x,ht=W.y,Rt=W.z):(De=0,ht=0,Rt=0);let mt=Me.convert(z.format),kt=Me.convert(z.type),Pe;z.isData3DTexture?(ee.setTexture3D(z,0),Pe=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ee.setTexture2DArray(z,0),Pe=B.TEXTURE_2D_ARRAY):(ee.setTexture2D(z,0),Pe=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let Xt=y.getParameter(B.UNPACK_ROW_LENGTH),at=y.getParameter(B.UNPACK_IMAGE_HEIGHT),un=y.getParameter(B.UNPACK_SKIP_PIXELS),Rn=y.getParameter(B.UNPACK_SKIP_ROWS),Kn=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,St.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,St.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Fe),y.pixelStorei(B.UNPACK_SKIP_ROWS,et),y.pixelStorei(B.UNPACK_SKIP_IMAGES,st);let Vi=S.isDataArrayTexture||S.isData3DTexture,pt=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){let At=Z.get(S),$n=Z.get(z),xt=Z.get(At.__renderTarget),jn=Z.get($n.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,xt.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Hi=0;Hi<Le;Hi++)Vi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Z.get(S).__webglTexture,X,st+Hi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Z.get(z).__webglTexture,Te,Rt+Hi)),B.blitFramebuffer(Fe,et,Ie,we,De,ht,Ie,we,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||Z.has(S)){let At=Z.get(S),$n=Z.get(z);y.bindFramebuffer(B.READ_FRAMEBUFFER,R),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,N);for(let xt=0;xt<Le;xt++)Vi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,At.__webglTexture,X,st+xt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,At.__webglTexture,X),pt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$n.__webglTexture,Te,Rt+xt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,$n.__webglTexture,Te),X!==0?B.blitFramebuffer(Fe,et,Ie,we,De,ht,Ie,we,B.COLOR_BUFFER_BIT,B.NEAREST):pt?B.copyTexSubImage3D(Pe,Te,De,ht,Rt+xt,Fe,et,Ie,we):B.copyTexSubImage2D(Pe,Te,De,ht,Fe,et,Ie,we);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else pt?S.isDataTexture||S.isData3DTexture?B.texSubImage3D(Pe,Te,De,ht,Rt,Ie,we,Le,mt,kt,St.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,Te,De,ht,Rt,Ie,we,Le,mt,St.data):B.texSubImage3D(Pe,Te,De,ht,Rt,Ie,we,Le,mt,kt,St):S.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Te,De,ht,Ie,we,mt,kt,St.data):S.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Te,De,ht,St.width,St.height,mt,St.data):B.texSubImage2D(B.TEXTURE_2D,Te,De,ht,Ie,we,mt,kt,St);y.pixelStorei(B.UNPACK_ROW_LENGTH,Xt),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at),y.pixelStorei(B.UNPACK_SKIP_PIXELS,un),y.pixelStorei(B.UNPACK_SKIP_ROWS,Rn),y.pixelStorei(B.UNPACK_SKIP_IMAGES,Kn),Te===0&&z.generateMipmaps&&B.generateMipmap(Pe),y.unbindTexture()},this.initRenderTarget=function(S){Z.get(S).__webglFramebuffer===void 0&&ee.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ee.setTextureCube(S,0):S.isData3DTexture?ee.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ee.setTexture2DArray(S,0):ee.setTexture2D(S,0),y.unbindTexture()},this.resetState=function(){O=0,V=0,Q=null,y.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var Ya=class extends Dn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Kt;e.deleteAttribute("uv");let t=new bn({side:zt}),i=new bn,s=new vr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ne(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new er(e,i,6),a=new Pt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new Ne(e,Ps(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ne(e,Ps(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let f=new Ne(e,Ps(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let u=new Ne(e,Ps(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let h=new Ne(e,Ps(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let d=new Ne(e,Ps(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ps(n){return new Pi({color:0,emissive:16777215,emissiveIntensity:n})}var qu={type:"change"},Ac={type:"start"},Zu={type:"end"},Za=new ri,Yu=new rn,G_=Math.cos(70*Es.DEG2RAD),Dt=new L,Qt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tc=1e-6,Ja=class extends br{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fi.ROTATE,MIDDLE:fi.DOLLY,RIGHT:fi.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new on,this._lastTargetPosition=new L,this._quat=new on().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ys,this._sphericalDelta=new ys,this._scale=1,this._panOffset=new L,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new L,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=X_.bind(this),this._onPointerDown=W_.bind(this),this._onPointerUp=q_.bind(this),this._onContextMenu=Q_.bind(this),this._onMouseWheel=J_.bind(this),this._onKeyDown=K_.bind(this),this._onTouchStart=$_.bind(this),this._onTouchMove=j_.bind(this),this._onMouseDown=Y_.bind(this),this._onMouseMove=Z_.bind(this),this._interceptControlDown=ex.bind(this),this._interceptControlUp=tx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ft.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qu),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Qt:i>Math.PI&&(i-=Qt),s<-Math.PI?s+=Qt:s>Math.PI&&(s-=Qt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Dt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Za.origin.copy(this.object.position),Za.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Za.direction))<G_?this.object.lookAt(this.target):(Yu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Za.intersectPlane(Yu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tc||this._lastTargetPosition.distanceToSquared(this.target)>Tc?(this.dispatchEvent(qu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Dt.copy(s).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function W_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function X_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function q_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zu),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Y_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ft.DOLLY;break;case fi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}break;case fi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Ac)}function Z_(n){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function J_(n){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(n.preventDefault(),this.dispatchEvent(Ac),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Zu))}function K_(n){this.enabled!==!1&&this._handleKeyDown(n)}function $_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ft.TOUCH_ROTATE;break;case pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ft.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Ac)}function j_(n){switch(this._trackPointer(n),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ft.NONE}}function Q_(n){this.enabled!==!1&&n.preventDefault()}function ex(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Or=new L;function mn(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Or.copy(e),Or[i]=0,Or.normalize();let l=.5*o/(o+a),f=1-Or.angleTo(n)/c;return Math.sign(Or[t])===1?f*l:a/(o+a)+l+l*(1-f)}var Jn=class n extends Kt{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new L,l=new L,f=new L(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,g=new L,_=.5/o;for(let m=0,M=0;m<u.length;m+=3,M+=2)switch(c.fromArray(u,m),l.copy(c),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),u[m+0]=f.x*Math.sign(c.x)+l.x*r,u[m+1]=f.y*Math.sign(c.y)+l.y*r,u[m+2]=f.z*Math.sign(c.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[M+0]=mn(g,l,"z","y",r,i),d[M+1]=1-mn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[M+0]=1-mn(g,l,"z","y",r,i),d[M+1]=1-mn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[M+0]=1-mn(g,l,"x","z",r,e),d[M+1]=mn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[M+0]=1-mn(g,l,"x","z",r,e),d[M+1]=1-mn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[M+0]=1-mn(g,l,"x","y",r,e),d[M+1]=1-mn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[M+0]=mn(g,l,"x","y",r,e),d[M+1]=1-mn(g,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Ju(n=!1){let e=(t,i=.7,s=0)=>n?new Pi({color:t}):new bn({color:t,roughness:i,metalness:s});return{paint:e("#60654b",.74,.25),edge:e("#464b37",.78,.3),steel:e("#8b9290",.32,.85),darkSteel:e("#3b4140",.5,.75),rubber:e("#242726",.95),glass:e("#233e45",.19,.45),amber:e("#ca852b",.3),lamp:e("#dce1d2",.23),red:e("#9d3026",.4)}}function Ka(n,e,t,i=[0,0,0],s=""){let r=new Ne(e,t);return r.position.set(...i),r.name=s,r.castShadow=!0,r.receiveShadow=!0,n.add(r),r}function F(n,e,t,i,s=""){return Ka(n,new Kt(...t),e,i,s)}function Y(n,e,t,i,s,r="y",o=t,a=20){let c=Ka(n,new rr(o,t,i,a),e,s);return r==="x"&&(c.rotation.z=Math.PI/2),r==="z"&&(c.rotation.x=Math.PI/2),c}function oe(n,e,t,i,s=.018){let r=new L(...t),o=new L(...i),a=o.clone().sub(r),c=Y(n,e,s,a.length(),r.clone().add(o).multiplyScalar(.5).toArray());return c.quaternion.setFromUnitVectors(new L(0,1,0),a.normalize()),c}function $e(n,e,t,i=.018,s=40){let r=new ms(t.map(o=>new L(...o)));return Ka(n,new pr(r,s,i,8,!1),e)}function Is(n,e,t){let i=new gt,s=[];for(let o=1;o<t.length-1;o++)s.push(...t[0],...t[o],...t[o+1]);i.setAttribute("position",new tt(s,3)),i.computeVertexNormals();let r=e.clone();return r.side=Tt,Ka(n,i,r)}function zn(n,e,t,i,s=8,r="z",o=.014){for(let a=0;a<s;a++){let c=a/s*Math.PI*2,l=[...t];r==="z"?(l[0]+=Math.cos(c)*i,l[1]+=Math.sin(c)*i):(l[1]+=Math.cos(c)*i,l[2]+=Math.sin(c)*i),Y(n,e,o,o*1.3,l,r,o,6)}}function Br(n=Ju()){let e=new yt;e.name="WR-12 hydraulic recovery winch",e.userData={units:"metres",concept:!0,sharedPart:"WR-12",ratedLoad:"unspecified illustrative model"},F(e,n.edge,[1.12,.085,.56],[0,.0425,0],"mounting skid");for(let s of[-.42,.42])for(let r of[-.2,.2])Y(e,n.steel,.023,.022,[s,.097,r],"y",.023,6);for(let s of[-.42,.42])F(e,n.paint,[.1,.44,.4],[s,.29,0],"bearing pedestal"),Y(e,n.paint,.225,.065,[s,.34,0],"x"),zn(e,n.steel,[s+(s>0?.04:-.04),.34,0],.176,8,"x");Y(e,n.darkSteel,.14,.71,[0,.34,0],"x");for(let s of[-.34,.34])Y(e,n.steel,.212,.025,[s,.34,0],"x");let t=[];for(let s=0;s<=720;s++){let r=s/720,o=r*Math.PI*2*36;t.push([-.326+r*.652,.34+Math.cos(o)*.172,Math.sin(o)*.172])}$e(e,n.steel,t,.0075,900),Y(e,n.paint,.12,.24,[-.59,.34,0],"x"),Y(e,n.darkSteel,.079,.15,[-.75,.34,0],"x");for(let s of[.205,.445])oe(e,n.steel,[-.45,s,.27],[.45,s,.27],.035);for(let s of[-.43,.43])oe(e,n.steel,[s,.19,.27],[s,.46,.27],.035);$e(e,n.darkSteel,[[-.71,.38,-.08],[-.74,.52,-.12],[-.43,.56,-.18],[-.39,.17,-.21]],.016),$e(e,n.darkSteel,[[-.67,.31,-.09],[-.74,.2,-.12],[-.61,.12,-.2],[-.41,.12,-.22]],.014),$e(e,n.steel,[[0,.34,.17],[0,.32,.33],[0,.21,.46]],.012);let i=new yt;return i.name="forged hook and safety latch",e.add(i),$e(i,n.steel,[[0,.23,.46],[.04,.14,.47],[.1,.085,.49],[.11,.027,.51],[.06,-.015,.52],[-.02,-.012,.52],[-.073,.05,.51],[-.071,.12,.49]],.025),oe(i,n.darkSteel,[-.07,.12,.49],[.031,.15,.48],.008),e}function Ls(n){let e=new yt;e.name="run-flat wheel";let t=Y(e,n.rubber,.585,.37,[0,0,0],"z");for(let i of[-.196,.196])Y(e,n.rubber,.505,.026,[0,0,i],"z"),Y(e,n.paint,.325,.03,[0,0,i*1.09],"z"),Y(e,n.darkSteel,.19,.04,[0,0,i*1.22],"z"),Y(e,n.paint,.105,.055,[0,0,i*1.4],"z"),zn(e,n.steel,[0,0,i*1.26],.247,10,"z",.018);for(let i=0;i<30;i++)for(let s of[-1,1]){let r=i/30*Math.PI*2+s*.035,o=F(e,n.rubber,[.095,.075,.16],[Math.sin(r)*.586,Math.cos(r)*.586,s*.1]);o.rotation.z=-r,o.rotation.y=s*.24}return e}function Ku(n=Ju()){let e=new yt;e.name="R8 recovery vehicle",e.userData={units:"metres",concept:!0,axles:4,sharedPart:"WR-12"},F(e,n.darkSteel,[6.25,.24,1.2],[0,.91,0],"chassis"),F(e,n.edge,[5.85,.48,2.18],[-.1,1.27,0],"lower armored hull"),F(e,n.paint,[6.15,.25,2.4],[0,1.63,0],"deck");for(let h of[-2.17,-.74,.72,2.15]){Y(e,n.darkSteel,.085,2.15,[h,.73,0],"z"),F(e,n.darkSteel,[.35,.23,.42],[h,.75,0],"differential");for(let d of[-1,1]){let p=Ls(n);p.position.set(h,.605,d*1.19),e.add(p),oe(e,n.steel,[h-.13,.84,d*.81],[h+.19,1.34,d*.85],.043),F(e,n.paint,[1.2,.1,.47],[h,1.3,d*1.19],"wheel guard")}}let t=1.15,i=h=>[[.52,1.74,h*t],[2.94,1.74,h*t],[1.98,2.75,h*t],[.52,2.75,h*t]];Is(e,n.paint,i(1)),Is(e,n.paint,i(-1).reverse()),Is(e,n.paint,[[.52,2.75,-t],[1.98,2.75,-t],[1.98,2.75,t],[.52,2.75,t]]),Is(e,n.paint,[[2.94,1.74,-t],[2.94,1.74,t],[1.98,2.75,t],[1.98,2.75,-t]]),F(e,n.edge,[.08,1.03,2.3],[.49,2.25,0],"cab rear wall");let s=h=>2.94-(h-1.74)*(.96/1.01)+.008;for(let h of[[-1.02,-.09],[.09,1.02]])Is(e,n.glass,[[s(2.03),2.03,h[0]],[s(2.03),2.03,h[1]],[s(2.57),2.57,h[1]],[s(2.57),2.57,h[0]]]),oe(e,n.rubber,[s(2.06)+.018,2.06,(h[0]+h[1])*.5],[s(2.4)+.018,2.4,h[1]-.1],.012);for(let h of[-1,1])Is(e,n.glass,[[.76,2.15,h*1.158],[1.95,2.15,h*1.158],[1.87,2.57,h*1.158],[.76,2.57,h*1.158]]),oe(e,n.edge,[.64,1.86,h*1.166],[.64,2.66,h*1.166],.01),oe(e,n.edge,[.64,1.86,h*1.166],[1.7,1.86,h*1.166],.01),F(e,n.steel,[.15,.027,.033],[.87,2.015,h*1.185],"door handle"),oe(e,n.darkSteel,[2.11,2.25,h*1.16],[2.1,2.32,h*1.47],.024),F(e,n.glass,[.06,.22,.16],[2.1,2.32,h*1.47],"mirror"),F(e,n.edge,[.68,.07,.3],[1.17,1.61,h*1.36],"entry step");F(e,n.darkSteel,[.18,.24,2.53],[3.13,1.46,0],"front bumper");for(let h of[-1,1])Y(e,n.lamp,.08,.04,[3.02,1.79,h*.83],"x"),Y(e,n.amber,.036,.04,[3.025,1.79,h*1.02],"x"),Y(e,n.steel,.075,.07,[3.25,1.42,h*.92],"x"),F(e,n.red,[.035,.09,.14],[-3.13,1.57,h*.99]);let r=Br(n);r.name="mounted WR-12",r.rotation.y=Math.PI/2,r.position.set(2.98,1,0),e.add(r);let o=new yt;o.name="recovery stowage",e.add(o);for(let h of[-1,1]){F(o,n.paint,[2.6,.51,.43],[-1.56,1.99,h*.97],"tool locker");for(let d of[-2.3,-1.55,-.8])F(o,n.edge,[.014,.36,.017],[d,1.99,h*1.197]),F(o,n.steel,[.07,.018,.025],[d+.12,2.05,h*1.207]);oe(o,n.darkSteel,[-2.6,2.3,h*.8],[-.59,2.3,h*.8],.025)}let a=new yt;a.name="recovery crane",e.add(a),Y(a,n.darkSteel,.44,.14,[-.85,1.84,0]),Y(a,n.paint,.33,.36,[-.85,2.04,0]),F(a,n.edge,[.48,.4,.48],[-.85,2.32,0],"crane pivot");let c=[-.85,2.49,0],l=[-2.51,3.13,0],f=new L(...l).sub(new L(...c));F(a,n.paint,[.34,f.length(),.34],new L(...c).add(new L(...l)).multiplyScalar(.5).toArray(),"main crane boom").quaternion.setFromUnitVectors(new L(0,1,0),f.clone().normalize()),oe(a,n.darkSteel,[-2.47,3.115,0],[-3,3.32,0],.112),oe(a,n.paint,[-.84,2.1,.24],[-1.74,2.78,.24],.078),oe(a,n.steel,[-1.74,2.78,.24],[-2.13,2.99,.24],.035),Y(a,n.darkSteel,.105,.15,[-3.03,3.31,0],"z"),oe(a,n.darkSteel,[-3.06,3.26,0],[-3.06,2.55,0],.012),$e(a,n.steel,[[-3.06,2.56,0],[-3.13,2.47,0],[-3.1,2.37,0],[-3,2.37,0],[-2.98,2.45,0]],.028),$e(a,n.rubber,[[-.67,2.09,.28],[-.54,2.49,.27],[-.94,2.66,.25],[-1.7,2.95,.22]],.018),Y(e,n.paint,.29,.05,[1.04,2.8,0],"y"),Y(e,n.amber,.065,.14,[.6,2.9,-.72]),oe(e,n.darkSteel,[.37,2.8,.73],[.37,3.69,.73],.012);for(let h of[-1,1])for(let d=0;d<12;d++)Y(e,n.steel,.014,.018,[-2.7+d*.45,1.79,h*1.22],"z",.014,6);return e}var nx=Object.freeze({coated:Object.freeze({wavelength:65e-5,variation:.022,directional:0}),pressed:Object.freeze({wavelength:8e-4,variation:.016,directional:0}),cast:Object.freeze({wavelength:.002,variation:.045,directional:0}),machined:Object.freeze({wavelength:35e-5,variation:.018,directional:1}),rubber:Object.freeze({wavelength:.0012,variation:.023,directional:0}),upholstery:Object.freeze({wavelength:9e-4,variation:.065,directional:2})}),$u=Object.freeze({coated:Object.freeze({wavelength:.065,roughness:.055,tone:.018}),pressed:Object.freeze({wavelength:.095,roughness:.035,tone:.01}),cast:Object.freeze({wavelength:.03,roughness:.12,tone:.045}),machined:Object.freeze({wavelength:.055,roughness:.04,tone:.008}),rubber:Object.freeze({wavelength:.04,roughness:.05,tone:.012}),upholstery:Object.freeze({wavelength:.035,roughness:.065,tone:.025})}),ix=`
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
`,Rc=class extends _s{constructor(e={},t="coated"){super(e),this.finish=t,this.finishProfile={...ju(t)},this.surfaceProfile={...$u[t]}}copy(e){return super.copy(e),this.finish=e.finish??"coated",this.finishProfile={...e.finishProfile??ju(this.finish)},this.surfaceProfile={...e.surfaceProfile??$u[this.finish]},this}customProgramCacheKey(){return"sea-metres-finish-v2"}onBeforeCompile(e){let t="#include <project_vertex>",i="#include <roughnessmap_fragment>",s="#include <color_fragment>";if(!e.vertexShader.includes(t)||!e.fragmentShader.includes(i)||!e.fragmentShader.includes(s))throw new Error("SEA finish shader anchors changed");let r=this.finishProfile;e.uniforms.seaFinish={value:new L(r.wavelength,r.variation,r.directional)};let o=this.surfaceProfile;e.uniforms.seaSurface={value:new L(o.wavelength,o.roughness,o.tone)},e.vertexShader=`varying vec3 vSeaFinishPosition;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(t,`
   vSeaFinishPosition=transformed*vec3(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz),length(modelMatrix[2].xyz));
   ${t}
  `),e.fragmentShader=ix+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(s,`${s}
float seaSurfaceResponse=seaVisibleSurface();
diffuseColor.rgb*=1.0+seaSurfaceResponse*seaSurface.z;`),e.fragmentShader=e.fragmentShader.replace(i,`${i}
roughnessFactor=clamp(roughnessFactor+seaSurfaceFinish()+seaSurfaceResponse*seaSurface.y,0.04,1.0);`)}};function ju(n){let e=nx[n];if(!e)throw new Error(`Unknown SEA material finish: ${n}`);return e}function zi(){let n=(s,r,o,a,c={})=>new Rc({color:s,roughness:r,metalness:o,...c},a),e=(s,r,o=0,a={})=>new _s({color:s,roughness:r,metalness:o,...a}),t={paint:n("#626e51",.53,0,"coated",{clearcoat:.1,clearcoatRoughness:.48}),edge:n("#394136",.61,.08,"pressed"),steel:n("#a0a7a5",.29,.92,"machined"),darkSteel:n("#41494a",.46,.86,"cast"),rubber:n("#222622",.82,0,"rubber"),glass:e("#78949a",.065,0,{ior:1.5,clearcoat:0,envMapIntensity:1.15}),amber:e("#dc9b30",.25,0,{clearcoat:.32,clearcoatRoughness:.16}),lamp:e("#e2e9db",.22,0,{clearcoat:.3,clearcoatRoughness:.14}),red:e("#a94432",.39,0,{clearcoat:.16,clearcoatRoughness:.28}),pressedSteel:n("#828c87",.4,.88,"pressed"),castSteel:n("#596160",.55,.84,"cast"),upholstery:n("#343a32",.91,0,"upholstery",{sheen:.2,sheenColor:"#565d4d",sheenRoughness:.9})},i={paint:"powder coated metal",edge:"coated frame metal",steel:"machined steel",darkSteel:"cast dark steel",rubber:"moulded rubber",glass:"optical glass",amber:"amber lamp lens",lamp:"clear lamp lens",red:"red lamp lens",pressedSteel:"pressed steel",castSteel:"cast steel",upholstery:"woven seat upholstery"};for(let[s,r]of Object.entries(i))t[s].name=r;return t}function vi(n){return n.traverse(e=>{if(e.isMesh&&e.geometry.type==="BoxGeometry"){let{width:t,height:i,depth:s}=e.geometry.parameters;Math.min(t,i,s)>.045&&(e.geometry.dispose(),e.geometry=new Jn(t,i,s,1,Math.min(.024,Math.min(t,i,s)*.12)))}}),n}function ed(n,e,t,i,s="z"){let r=F(n,e.paint,t,i,"service panel"),[o,a,c]=i;if(s==="z")for(let l of[-1,1])for(let f of[-1,1])Y(n,e.steel,.009,.012,[o+l*t[0]*.4,a+f*t[1]*.4,c+Math.sign(c||1)*(t[2]/2+.007)],"z",.009,6);return r}function Pc(n,e,t,i){if(t==="MOB")return Cc(n,e),vi(n);if(t==="CAP")return vi(n);if(t==="FP"){for(let s of[-1,1])Y(n,e.steel,.075,.07,[0,.56,s*.3],"z"),zn(n,e.darkSteel,[0,.56,s*.345],.05,6,"z",.009);ed(n,e,[.31,.25,.018],[-.15,.5,-.57]),oe(n,e.darkSteel,[-.26,.63,-.58],[-.04,.63,-.58],.014),$e(n,e.rubber,[[-.13,.12,.22],[-.3,.28,.35],[-.27,.57,.36],[.08,.69,.32]],.017)}else{if(t==="PRO")return vi(n);if(t==="COM")for(let s=0;s<(i===1?3:i===6?2:1);s++){let r=(s-((i===1?3:i===6?2:1)-1)/2)*.4;oe(n,e.darkSteel,[r-.13,.47,.17],[r+.13,.47,.17],.015);for(let o=0;o<7;o++)F(n,e.darkSteel,[.26,.012,.025],[r,.15+o*.042,-.13]);for(let o of[-.085,.085])Y(n,e.steel,.02,.025,[r+o,.17,.145],"z"),$e(n,e.rubber,[[r+o,.17,.16],[r+o,.1,.23],[r+o+.08,.06,.3]],.012);for(let o=0;o<3;o++)F(n,e.lamp,[.025,.006,.003],[r-.065+o*.05,.41,.134])}else if(t==="SA"){for(let s of[-.105,.105])Y(n,e.steel,.081,.014,[s,i===3?1.75:.43,.172],"z"),Y(n,e.glass,.055,.012,[s,i===3?1.75:.43,.185],"z");$e(n,e.rubber,[[0,.07,-.08],[.12,.17,-.14],[.12,.37,-.14]],.012)}else if(t==="ACC"){if([0,5].includes(i))F(n,e.amber,[.13,.05,.022],[.18,.49,.29],"safety marking");else if(i===1){for(let s of[-1,1])F(n,e.red,[.025,.05,.11],[-.73,.45,s*.3]),oe(n,e.steel,[-.65,.8,s*.38],[.6,.8,s*.38],.014);Y(n,e.darkSteel,.055,.12,[1.27,.38,0],"y")}else if([3,6].includes(i)){for(let s=0;s<3;s++){oe(n,e.darkSteel,[-.47+s*.37,.4,.24],[-.3+s*.37,.4,.24],.012);for(let r of[-1,1])Y(n,e.steel,.009,.016,[-.46+s*.37,.24,r*.245],"z",.009,6)}$e(n,e.rubber,[[-.6,.03,-.29],[-.51,.1,-.35],[.5,.1,-.35],[.6,.04,-.29]],.018)}}else if(t==="SE"){F(n,e.darkSteel,[.44,.025,.29],[.25,.75,.12],"laptop base");for(let s=0;s<4;s++)for(let r=0;r<10;r++)F(n,e.steel,[.025,.003,.023],[.09+r*.032,.766,.03+s*.034]);F(n,e.rubber,[.09,.003,.045],[.25,.766,.23],"trackpad"),F(n,e.paint,[.28,.019,.22],[-.38,.758,.15],"review binder");for(let s=0;s<4;s++)F(n,e.lamp,[.25,.003,.19],[-.38+s*.003,.772+s*.003,.15]);oe(n,e.darkSteel,[-.54,.78,.26],[-.32,.78,.26],.005)}}return cx(n,e,t,i),Cc(n,e),vi(n)}function ki(n,e,t){let i=[];for(let a=1;a<t.length-1;a++)i.push(...t[0],...t[a],...t[a+1]);let s=new gt;s.setAttribute("position",new tt(i,3)),s.computeVertexNormals();let r=e.clone();r.side=Tt;let o=new Ne(s,r);return o.name=e.name==="optical glass"?"cab glazing":"hull shell",n.add(o),o}function en(n,e,t,i,s=.045){let r=new Nn;return r.moveTo(n+s,e),r.lineTo(t-s,e),r.quadraticCurveTo(t,e,t,e+s),r.lineTo(t,i-s),r.quadraticCurveTo(t,i,t-s,i),r.lineTo(n+s,i),r.quadraticCurveTo(n,i,n,i-s),r.lineTo(n,e+s),r.quadraticCurveTo(n,e,n+s,e),r}function vt(n,e,t,i,s){let r=new $t;t.forEach(([f,u],h)=>h?r.lineTo(f,u):r.moveTo(f,u)),r.closePath(),r.holes.push(...i);let o=new ln(r,{depth:.04,steps:1,curveSegments:6,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:3}),a=o.attributes.position;for(let f=0;f<a.count;f++)a.setXYZ(f,...s(a.getX(f),a.getY(f),a.getZ(f)));o.computeVertexNormals();let c=e.clone();c.side=Tt;let l=new Ne(o,c);return l.name="hull shell",l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function td(n,e){if(n==="RECOVERY"){let h=Ku(e);h.traverse(g=>{g.isMesh&&g.geometry.type==="BufferGeometry"&&g.material.name!=="optical glass"&&(g.name="hull shell")}),sx(h,e);let d=h.getObjectByName("mounted WR-12"),p=Pc(Br(e),e,"ACC",5);return p.name="mounted WR-12",p.position.copy(d.position),p.quaternion.copy(d.quaternion),d.removeFromParent(),d.traverse(g=>g.geometry?.dispose()),h.add(p),Qu(h,e,6.25,2.3),vi(h)}let t={COMBAT:[6.8,2.65,4],RECCE:[5.5,2.3,2],TROOP:[6.9,2.6,3],COMMAND:[6.7,2.6,3],MINE:[6.8,2.65,4]}[n],[i,s,r]=t,o=new yt;o.name=n,o.userData={units:"metres",concept:!0,axles:r,roof:2.37,length:i,width:s};let a=i/2,c=-a,l=s/2;F(o,e.darkSteel,[i-.45,.2,s*.58],[0,.82,0],"chassis"),F(o,e.edge,[i-.25,.48,s*.8],[0,1.16,0],"lower hull");for(let h of[-1,1])ki(o,e.paint,[[c,1.2,h*l*.75],[a,1.2,h*l*.75],[a-.75,2.36,h*l*.85],[c+.17,2.36,h*l*.85]]);ki(o,e.paint,[[c+.17,2.36,-l*.85],[a-.75,2.36,-l*.85],[a-.75,2.36,l*.85],[c+.17,2.36,l*.85]]),ki(o,e.paint,[[a,1.2,-l*.75],[a,1.2,l*.75],[a-.75,2.36,l*.85],[a-.75,2.36,-l*.85]]);let f=h=>a-(h-1.2)*.75/1.16+.012;for(let h of[[-l*.67,-.09],[.09,l*.67]]){ki(o,e.glass,[[f(1.8),1.8,h[0]],[f(1.8),1.8,h[1]],[f(2.13),2.13,h[1]],[f(2.13),2.13,h[0]]]);for(let d of[1.8,2.13])oe(o,e.rubber,[f(d)+.005,d,h[0]],[f(d)+.005,d,h[1]],.012);for(let d of h)oe(o,e.rubber,[f(1.8)+.005,1.8,d],[f(2.13)+.005,2.13,d],.012);oe(o,e.rubber,[f(1.83)+.018,1.83,(h[0]+h[1])*.5],[f(2.03)+.018,2.03,h[1]-.08],.009)}ki(o,e.edge,[[c,1.2,-l*.75],[c+.17,2.36,-l*.85],[c+.17,2.36,l*.85],[c,1.2,l*.75]]);let u=r===2?[-1.67,1.67]:r===3?[-2.25,-.75,1.9]:[-2.55,-1.05,1,2.4];for(let h of u){Y(o,e.darkSteel,.06,s*.81,[h,.67,0],"z"),Y(o,e.edge,.13,.31,[h,.67,0],"z");for(let d of[-1,1]){let p=Ls(e);p.position.set(h,.62,d*l*.88),o.add(p),oe(o,e.steel,[h-.15,.75,d*l*.62],[h+.1,1.2,d*l*.68],.045),F(o,e.paint,[1.22,.075,.48],[h,1.3,d*l*.91],"wheel guard")}}for(let h of[-1,1]){let d=h*l*.855,p=g=>h*l*(.75+(g-1.2)*.1/1.16)+h*.01;ki(o,e.glass,[[a-.93,1.88,p(1.88)],[a-1.88,1.88,p(1.88)],[a-1.88,2.16,p(2.16)],[a-1.05,2.16,p(2.16)]]),oe(o,e.darkSteel,[a-2.05,1.55,d],[a-2.05,2.29,d],.009),oe(o,e.steel,[a-1.83,1.78,d+.02*h],[a-1.61,1.78,d+.02*h],.014),F(o,e.edge,[.68,.05,.32],[a-1.61,1.36,h*(l*.87+.14)],"entry step"),oe(o,e.darkSteel,[a-.98,1.86,d],[a-.9,2.07,h*(l+.1)],.02),F(o,e.glass,[.055,.2,.15],[a-.9,2.07,h*(l+.1)],"mirror");for(let g=0;g<4;g++){let _=c+.6+g*.64;ed(o,e,[.51,.49,.04],[_,1.95,h*l*.85])}for(let g=0;g<10;g++)F(o,e.darkSteel,[.02,.22,.02],[a-1.6+g*.06,2.38,h*.57],"vent grille");Y(o,e.lamp,.067,.05,[a+.012,1.36,h*l*.65],"x"),Y(o,e.amber,.028,.055,[a+.015,1.36,h*l*.76],"x"),F(o,e.red,[.03,.07,.13],[c-.02,1.32,h*l*.65])}F(o,e.darkSteel,[.15,.17,s*.85],[a,1.12,0],"front bumper");for(let h of[-1,1])Y(o,e.steel,.055,.08,[a+.1,1.14,h*.73],"x"),oe(o,e.steel,[c+.25,1.44,h*.5],[c+.25,2.05,h*.5],.016);return Y(o,e.edge,.32,.04,[.4,2.39,.5],"roof hatch"),Qu(o,e,i,s),vi(o)}function sx(n,e){let t=n.children.filter(p=>p.isMesh&&p.geometry.type==="BufferGeometry"),i=t.filter(p=>p.material.name!=="optical glass"),s=t.filter(p=>p.material.name==="optical glass");function r(p,g){if(!p)return;let _=[];for(let m=1;m<g.length-1;m++)_.push(...g[0],...g[m],...g[m+1]);p.geometry.dispose(),p.geometry=new gt,p.geometry.setAttribute("position",new tt(_,3)),p.geometry.computeVertexNormals()}let o=p=>2.94-(p-1.74)*(.47/1.01)+.012;rx(n,e);for(let p of[...n.children]){let g=p.geometry?.type==="CylinderGeometry"&&p.geometry.parameters.radiusTop===.01&&Math.abs(Math.abs(p.position.z)-1.166)<.001;(p.name==="door handle"||g)&&(p.removeFromParent(),p.geometry?.dispose())}for(let p of n.children.filter(g=>g.name==="wheel guard")){let g=new $t;g.moveTo(-.74,-.04),g.lineTo(-.74,.19),g.quadraticCurveTo(-.72,.25,-.68,.31),g.lineTo(-.47,.68),g.quadraticCurveTo(-.43,.74,-.36,.74),g.lineTo(.36,.74),g.quadraticCurveTo(.43,.74,.47,.68),g.lineTo(.68,.31),g.quadraticCurveTo(.72,.25,.74,.19),g.lineTo(.74,-.04),g.lineTo(.66,-.04),g.lineTo(.66,.18),g.lineTo(.39,.66),g.lineTo(-.39,.66),g.lineTo(-.66,.18),g.lineTo(-.66,-.04),g.closePath(),p.geometry.dispose(),p.geometry=new ln(g,{depth:.5,curveSegments:5,bevelEnabled:!0,bevelSize:.016,bevelThickness:.016,bevelSegments:3,steps:1}),p.name="recovery formed wheel guard",p.position.y=.605,p.position.z-=.25}for(let p of i)p.removeFromParent(),p.geometry.dispose(),p.material.dispose();for(let p of[-1,1]){vt(n,e.paint,[[.52,1.74],[2.94,1.74],[2.47,2.75],[.52,2.75]],[en(1.22,2.15,2.28,2.6)],(g,_,m)=>[g,_,p*(1.15-m)]),vt(n,e.paint,[[.52,1.4],[2.83,1.4],[2.98,1.65],[2.94,1.74],[.52,1.74]],[],(g,_,m)=>[g,_,p*(1.15-m)]),vt(n,e.paint,[[1.08,1.78],[2.32,1.78],[2.55,2.1],[2.34,2.64],[1.08,2.64]],[en(1.24,2.17,2.26,2.58)],(g,_,m)=>[g,_,p*(1.174-m*.35)]),F(n,e.edge,[.34,.58,.017],[.8,2.11,p*1.171],"rear cab access gasket"),F(n,e.paint,[.3,.54,.025],[.8,2.11,p*1.183],"rear cab service cover");for(let g of[1.87,2.35])F(n,e.darkSteel,[.04,.07,.021],[.65,g,p*1.202],"cab service cover hinge");F(n,e.darkSteel,[.035,.09,.023],[.92,2.1,p*1.203],"cab service cover latch")}let a=[[-1.15,1.74],[1.15,1.74],[1.15,2.75],[-1.15,2.75]];vt(n,e.paint,a,[en(-1.02,2.04,-.07,2.62),en(.07,2.04,1.02,2.62)],(p,g,_)=>[o(g)-_,g,p]);let c=new Ne(new Jn(1.95,.07,2.3,3,.028),e.paint);c.position.set(1.495,2.745,0),c.name="hull shell",c.castShadow=!0,c.receiveShadow=!0,n.add(c),vt(n,e.paint,[[-1.15,1.49],[1.15,1.49],[1.15,1.74],[-1.15,1.74]],[],(p,g,_)=>[2.98-(g-1.49)*.16-_,g,p]);let l=e.glass.clone();l.color.set("#a9c8c5"),l.transparent=!0,l.opacity=.28,l.metalness=0,l.roughness=.12,l.depthWrite=!1;for(let p of s)p.material.dispose(),p.material=l,p.castShadow=!1;let f=[];n.traverse(p=>{p.material===e.rubber&&p.geometry.type==="CylinderGeometry"&&p.geometry.parameters.radiusTop===.012&&p.position.y>2.1&&f.push(p)});for(let p of f)p.removeFromParent(),p.geometry.dispose();for(let[p,g]of[[0,[-1.02,-.07]],[1,[.07,1.02]]]){let _=[[o(2.04),2.04,g[0]],[o(2.04),2.04,g[1]],[o(2.62),2.62,g[1]],[o(2.62),2.62,g[0]]];r(s[p],_),s[p].name="cab glazing";for(let M=0;M<4;M++)oe(n,e.rubber,_[M],_[(M+1)%4],.018);let m=(g[0]+g[1])/2;oe(n,e.darkSteel,[o(2.05)+.018,2.05,m],[o(2.3)+.024,2.3,m-.2],.014),oe(n,e.rubber,[o(2.21)+.025,2.21,m-.27],[o(2.47)+.025,2.47,m-.09],.012)}for(let[p,g]of[[2,-1],[3,1]]){let _=[[1.25,2.18,g*1.178],[2.25,2.18,g*1.178],[2.25,2.57,g*1.178],[1.25,2.57,g*1.178]];r(s[p],_),s[p].name="cab glazing";for(let m=0;m<4;m++)oe(n,e.rubber,_[m],_[(m+1)%4],.017);F(n,e.edge,[.025,.39,.025],[2.05,2.375,g*1.196],"door quarter window divider"),F(n,e.rubber,[.085,.25,.18],[2.065,2.32,g*1.47],"mirror housing"),oe(n,e.darkSteel,[2.11,2.08,g*1.16],[2.1,2.24,g*1.46],.018);for(let m of[1.93,2.47])F(n,e.darkSteel,[.065,.13,.035],[1.09,m,g*1.185],"door hinge");F(n,e.edge,[.2,.1,.021],[1.3,2.015,g*1.194],"door handle recess"),oe(n,e.steel,[1.25,2.015,g*1.213],[1.37,2.015,g*1.213],.013).name="door release pull",F(n,e.edge,[.22,.26,.13],[2.99,1.79,g*.83],"recessed headlight surround"),Y(n,e.lamp,.08,.033,[3.112,1.79,g*.83],"x",.08,32),Y(n,e.amber,.029,.024,[2.25,2.79,g*.9],"y",.029,20)}let u=F(n,e.edge,[.025,.28,1.35],[o(1.84)+.015,1.84,0],"radiator grille frame");u.rotation.z=Math.atan(.47/1.01);for(let p=0;p<7;p++){let g=1.73+p*.033;F(n,e.darkSteel,[.025,.025,1.24],[o(g)+.034,g,0],"radiator grille slat")}for(let p of[-.52,0,.52]){let g=F(n,e.edge,[.034,.27,.023],[o(1.83)+.055,1.83,p],"grille support");g.rotation.z=Math.atan(.47/1.01)}oe(n,e.edge,[2.47,2.75,-1.15],[2.47,2.75,1.15],.031);for(let p of[-.75,-.38,0,.38,.75])F(n,e.amber,[.12,.04,.07],[2.38,2.8,p],"roof clearance lamp");let h=n.getObjectByName("recovery stowage");if(h){for(let p of h.children.filter(g=>g.name==="tool locker"))p.geometry.dispose(),p.geometry=new Kt(2.6,.64,.43),p.position.y=1.99;for(let p of[-1,1])for(let g of[-2.41,-1.56,-.71]){F(h,e.edge,[.78,.54,.015],[g,1.99,p*1.195],"locker door gasket"),F(h,e.paint,[.73,.49,.019],[g,1.99,p*1.21],"formed locker door");for(let _ of[1.83,2.15])F(h,e.darkSteel,[.05,.08,.028],[g-.31,_,p*1.235],"locker hinge");F(h,e.darkSteel,[.13,.14,.019],[g+.23,2.04,p*1.237],"recessed latch cup"),oe(h,e.steel,[g+.19,2.04,p*1.253],[g+.27,2.04,p*1.253],.012).name="locker latch lever"}for(let p of[-1,1]){F(h,e.darkSteel,[2.64,.055,.47],[-1.56,1.68,p*.97],"locker load bearing plinth");for(let g of[-2.41,-1.56,-.71]){for(let _ of[1.84,2.14])F(h,e.paint,[.55,.018,.016],[g-.03,_,p*1.225],"pressed locker stiffening rib");F(h,e.edge,[.045,.59,.025],[g-.4,1.99,p*1.212],"locker frame stile")}}for(let p of[-1,1]){F(h,e.darkSteel,[2.58,.024,.41],[-1.56,2.325,p*.97],"locker top tread plate");for(let g=0;g<13;g++){let _=-2.75+g*.19;oe(h,e.steel,[_,2.342,p*.97-.14],[_+.075,2.342,p*.97+.14],.006).name="raised walkway tread"}}}ox(n,e),F(n,e.edge,[.26,.055,.18],[.43,2.755,.73],"rear bulkhead antenna bracket"),Y(n,e.rubber,.04,.075,[.37,2.81,.73],"y",.04,24).name="antenna spring base",Y(n,e.edge,.088,.08,[.6,2.8,-.72],"y",.088,32).name="beacon mounting pedestal";let d=n.getObjectByName("recovery crane");d&&ax(d,e)}function rx(n,e){for(let i of["chassis","lower armored hull","deck"]){let s=n.getObjectByName(i);s&&(s.removeFromParent(),s.geometry.dispose())}let t=new yt;t.name="reinforced recovery chassis",n.add(t);for(let i of[-1,1]){let s=i*.52;F(t,e.darkSteel,[6.05,.26,.055],[0,.91,s],"chassis rail web");for(let r of[.77,1.05])F(t,e.darkSteel,[6.05,.04,.16],[0,r,s],"chassis rail flange");F(t,e.edge,[3.4,.17,.085],[-1.1,1.135,s],"crane subframe rail");for(let r of[-2.6,-1.6,-.85,-.3])F(t,e.darkSteel,[.14,.51,.12],[r,1.38,i*.76],"deck support post"),oe(t,e.edge,[r,1.12,s],[r,1.55,i*1.02],.035).name="deck outrigger brace";vt(t,e.paint,[[.53,1.4],[2.83,1.4],[2.83,1.57],[.53,1.57]],[],(r,o,a)=>[r,o,i*(1.11-a)]).name="cab sill skirt";for(let r of[-2.17,-.74,.72,2.15]){F(t,e.darkSteel,[.23,.16,.16],[r+.19,1.3,i*.85],"suspension upper mount"),F(t,e.edge,[.23,.23,.15],[r+.19,1.45,i*.85],"suspension deck hanger"),F(t,e.edge,[.55,.24,.08],[r,1.45,i*1.12],"wheel guard mounting apron"),F(t,e.edge,[.46,.042,.1],[r,.86,i*.52],"axle spring saddle");for(let o=0;o<3;o++)F(t,e.darkSteel,[.64-o*.08,.016,.1],[r,.83-o*.018,i*.52],"leaf spring pack")}}for(let i of[-2.85,-2.17,-.85,.72,2.15,2.82])F(t,e.darkSteel,[.12,.17,1.22],[i,.93,0],"chassis crossmember");F(t,e.paint,[6.12,.08,2.38],[-.005,1.6,0],"formed load deck");for(let i of[-1,1])F(t,e.edge,[6.08,.11,.05],[-.005,1.57,i*1.175],"deck folded edge");F(t,e.darkSteel,[1.14,.16,1.6],[-.85,1.68,0],"crane foundation crossbeam");for(let i of[-1,1])vt(t,e.darkSteel,[[-1.28,1.19],[-.44,1.19],[-.62,1.59],[-1.1,1.59]],[],(s,r,o)=>[s,r,i*(.56+o)]).name="crane foundation gusset";F(t,e.edge,[.32,.22,2.08],[-2.92,1.16,0],"stabilizer crossbeam");for(let i of[-1,1])F(t,e.darkSteel,[.24,.14,.93],[-2.92,1.16,i*.58],"stowed telescopic stabilizer beam"),F(t,e.paint,[.32,.36,.24],[-2.92,1.13,i*1.02],"stabilizer jack guide"),Y(t,e.paint,.08,.33,[-2.92,.92,i*1.02],"y",.08,32).name="stabilizer jack barrel",Y(t,e.steel,.033,.12,[-2.92,.72,i*1.02],"y",.033,24).name="stowed jack piston",Y(t,e.darkSteel,.06,.17,[-2.92,.68,i*1.02],"z",.06,24).name="jack foot pivot",F(t,e.darkSteel,[.27,.065,.29],[-2.92,.64,i*1.02],"carried stabilizer foot"),$e(t,e.rubber,[[-2.55,1.25,i*.6],[-2.75,1.3,i*.7],[-2.94,1.3,i*.89],[-2.96,1.06,i*.93]],.018,24).name="stabilizer hydraulic supply",F(t,e.edge,[.1,.21,.41],[-3.035,1.4,i*.92],"rear lamp carrier"),F(t,e.red,[.025,.09,.2],[-3.1,1.43,i*.97],"rear tail lamp"),F(t,e.amber,[.026,.07,.09],[-3.1,1.43,i*.79],"rear turn lamp"),F(t,e.rubber,[.05,.37,.26],[-2.88,.9,i*1.28],"rear flexible mudflap");F(t,e.darkSteel,[.18,.25,1.25],[-3.015,1.1,0],"rear towing crossmember"),F(t,e.edge,[.21,.23,.28],[-3.075,1.1,0],"rear tow coupling body"),Y(t,e.steel,.034,.3,[-3.15,1.1,0],"y",.034,24).name="tow coupling pin"}function ox(n,e){let t=new yt;t.name="cab services",n.add(t);for(let i of[-1,1])F(t,e.darkSteel,[.37,.065,.38],[.24,1.8,i*.79],"service tower deck bracket");Y(t,e.edge,.135,.65,[.24,2.14,.79],"y",.135,40).name="air cleaner housing",Y(t,e.darkSteel,.153,.036,[.24,2.47,.79],"y",.153,40).name="air cleaner lid",Y(t,e.paint,.1,.25,[.24,2.61,.79],"y",.1,32).name="intake riser",Y(t,e.edge,.17,.05,[.24,2.75,.79],"y",.17,40).name="intake rain cap";for(let i of[1.94,2.35]){let s=new Ne(new Gt(.137,.012,8,36),e.steel);s.rotation.x=Math.PI/2,s.position.set(.24,i,.79),s.name="air cleaner retaining band",t.add(s),F(t,e.edge,[.2,.065,.065],[.39,i,.79],"bulkhead service bracket")}$e(t,e.rubber,[[.24,1.84,.79],[.24,1.7,.79],[.34,1.58,.64],[.6,1.5,.64]],.065,24).name="connected air inlet duct",Y(t,e.darkSteel,.093,.75,[.24,2.22,-.79],"y",.093,40).name="exhaust silencer";for(let i=0;i<12;i++){let s=i*Math.PI/6;oe(t,e.steel,[.24+Math.cos(s)*.12,1.87,-.79+Math.sin(s)*.12],[.24+Math.cos(s)*.12,2.57,-.79+Math.sin(s)*.12],.012).name="exhaust heat shield rib"}for(let i of[1.88,2.08,2.37,2.57]){let s=new Ne(new Gt(.12,.013,8,36),e.darkSteel);s.rotation.x=Math.PI/2,s.position.set(.24,i,-.79),s.name="heat shield retaining band",t.add(s)}$e(t,e.darkSteel,[[.24,1.85,-.79],[.24,1.7,-.79],[.35,1.57,-.72],[.59,1.5,-.72]],.05,24).name="exhaust inlet elbow",$e(t,e.darkSteel,[[.24,2.59,-.79],[.24,2.75,-.79],[.1,2.83,-.79]],.053,24).name="exhaust outlet elbow";for(let i of[1.97,2.42])F(t,e.edge,[.2,.07,.07],[.39,i,-.79],"exhaust bulkhead bracket");F(t,e.paint,[.54,.28,.64],[-.04,1.16,-.48],"underbody utility tank");for(let i of[-.2,.13])F(t,e.darkSteel,[.044,.31,.68],[i,1.16,-.48],"utility tank strap");$e(t,e.darkSteel,[[.2,1.29,-.7],[.35,1.29,-.7],[.45,1.43,-.79]],.014,20).name="tank supply pipe"}function ax(n,e){for(let l of[...n.children])l.removeFromParent(),l.traverse(f=>f.geometry?.dispose());let t=(l,f,u,h,d,p,g)=>{let _=new L(...f).sub(new L(...l)),m=_.length(),M=[],A=([T,C],U,E)=>{let P=T/2-U,R=C/2-U,N=Math.min(P,R)*.28;return[[-P+N,-R,E],[P-N,-R,E],[P,-R+N,E],[P,R-N,E],[P-N,R,E],[-P+N,R,E],[-P,R-N,E],[-P,-R+N,E]]},v=[A(u,0,0),A(h,0,m)],w=[A(u,d,0),A(h,d,m)],b=(T,C,U,E)=>M.push(...T,...C,...U,...T,...U,...E);for(let T=0;T<8;T++){let C=(T+1)%8;b(v[0][T],v[0][C],v[1][C],v[1][T]),b(w[0][C],w[0][T],w[1][T],w[1][C]),b(v[0][C],v[0][T],w[0][T],w[0][C]),b(v[1][T],v[1][C],w[1][C],w[1][T])}let D=new gt;D.setAttribute("position",new tt(M,3)),D.computeVertexNormals();let x=new Ne(D,p);return x.position.set(...l),x.quaternion.setFromUnitVectors(new L(0,0,1),_.normalize()),x.name=g,x.castShadow=!0,x.receiveShadow=!0,n.add(x),x};F(n,e.edge,[.95,.12,1.2],[-.85,1.78,0],"crane mounting crossmember"),Y(n,e.darkSteel,.44,.14,[-.85,1.88,0],"y",.44,48).name="slewing ring",Y(n,e.paint,.33,.32,[-.85,2.1,0],"y",.33,40).name="crane pedestal";for(let l of[-1,1])vt(n,e.paint,[[-1.17,2.1],[-1.13,2.51],[-1.04,2.62],[-.66,2.62],[-.57,2.51],[-.53,2.1]],[],(f,u,h)=>[f,u,l*(.27+h)]).name="crane pivot cheek",Y(n,e.steel,.095,.075,[-.85,2.46,l*.32],"z",.095,40).name="boom pivot bearing",oe(n,e.edge,[-.85,1.8,l*.55],[-.85,2.14,l*.29],.045).name="pedestal brace";Y(n,e.darkSteel,.075,.73,[-.85,2.46,0],"z",.075,40).name="boom hinge pin",t([-.65,2.38,0],[-2.47,3.12,0],[.42,.46],[.32,.34],.025,e.paint,"formed main boom"),t([-2.34,3.067,0],[-3.05,3.356,0],[.245,.26],[.205,.22],.017,e.darkSteel,"telescoping extension"),t([-2.37,3.079,0],[-2.49,3.128,0],[.36,.38],[.355,.375],.026,e.edge,"boom mouth reinforcement");for(let l of[-1,1]){let f=F(n,e.rubber,[.14,.12,.035],[-2.435,3.105,l*.141],"telescopic wear pad");f.rotation.z=-.386}for(let l of[-1,1])Y(n,e.paint,.16,.055,[-.85,2.46,l*.225],"z",.16,40).name="boom root trunnion";vt(n,e.paint,[[-2.02,2.77],[-2.25,2.85],[-2.2,2.99],[-1.96,2.89]],[],(l,f,u)=>[l,f,.25+u]).name="boom cylinder lug";let i=[-.73,2.08,.32],s=[-2.13,2.91,.32],r=new L(...s).sub(new L(...i)),o=l=>new L(...i).addScaledVector(r,l).toArray(),a=o(.68);oe(n,e.paint,i,a,.085).name="lift cylinder barrel",oe(n,e.steel,a,s,.032).name="lift piston rod",oe(n,e.darkSteel,o(.65),o(.71),.103).name="cylinder gland",oe(n,e.edge,o(.04),o(.12),.098).name="cylinder end cap";for(let[l,f]of[[i[0],i[1]],[s[0],s[1]]])Y(n,e.steel,.067,.13,[l,f,.32],"z",.067,32).name="cylinder clevis pin",F(n,e.paint,[.17,.17,.08],[l,f,.26],"lift cylinder clevis");Y(n,e.edge,.135,.34,[-.36,2.37,0],"z",.135,48).name="hoist drum";for(let l=0;l<13;l++){let f=new Ne(new Gt(.137,.0075,6,36),e.darkSteel);f.position.set(-.36,2.37,-.15+l*.025),f.name="hoist cable winding",n.add(f)}for(let l of[-1,1])Y(n,e.steel,.18,.03,[-.36,2.37,l*.185],"z",.18,40).name="hoist drum flange",vt(n,e.paint,[[-.62,2.1],[-.08,2.1],[-.08,2.36],[-.2,2.54],[-.47,2.54],[-.62,2.36]],[],(f,u,h)=>[f,u,l*(.225+h)]).name="hoist bearing cradle";F(n,e.edge,[.55,.065,.6],[-.35,2.105,0],"hoist cradle base"),oe(n,e.edge,[-.68,2.1,0],[-.35,2.1,0],.055).name="hoist support tie",Y(n,e.paint,.17,.13,[-.36,2.37,-.335],"z",.14,40).name="planetary hoist gearbox",Y(n,e.darkSteel,.095,.21,[-.36,2.37,-.505],"z",.095,32).name="hoist hydraulic motor",$e(n,e.rubber,[[-.36,2.35,-.6],[-.18,2.2,-.62],[-.44,2.06,-.46],[-.73,2,-.36]],.018,24).name="hoist motor supply";for(let l of[-1,1])vt(n,e.paint,[[-3.13,3.19],[-3.17,3.4],[-2.94,3.48],[-2.85,3.35]],[],(f,u,h)=>[f,u,l*(.12+h)]).name="boom head cheek";Y(n,e.darkSteel,.095,.18,[-3.04,3.35,0],"z",.095,40).name="head sheave",Y(n,e.steel,.035,.35,[-3.04,3.35,0],"z",.035,32).name="head sheave axle";for(let l of[-1,1]){let f=new Ne(new Gt(.086,.013,8,36),e.steel);f.position.set(-3.04,3.35,l*.075),f.name="sheave flange",n.add(f)}oe(n,e.darkSteel,[-.36,2.507,0],[-2.995,3.433,0],.011).name="hoist rope";let c=[];for(let l=0;l<=12;l++){let f=Math.PI*.34+l/12*Math.PI*.66;c.push([-3.04+Math.cos(f)*.095,3.35+Math.sin(f)*.095,0])}$e(n,e.darkSteel,c,.011,24).name="hoist rope sheave wrap",oe(n,e.darkSteel,[-3.135,3.35,0],[-3.135,2.79,0],.011).name="hoist rope fall",Y(n,e.darkSteel,.047,.16,[-3.12,2.77,0]).name="hook swivel",$e(n,e.amber,[[-3.12,2.7,0],[-3.19,2.65,0],[-3.23,2.54,0],[-3.18,2.45,0],[-3.07,2.46,0],[-3.01,2.55,0],[-3.04,2.61,0]],.033,32).name="forged lifting hook",oe(n,e.darkSteel,[-3.04,2.61,0],[-3.14,2.67,0],.008).name="hook safety latch";for(let l=0;l<2;l++){let f=o(.58+l*.05),u=.44+l*.045;Y(n,e.steel,.025,.065,[f[0],f[1],.409],"z",.025,24).name="lift cylinder hose union",$e(n,e.rubber,[[-.8,2,u],[-.59,2.18,u+.03],[-.71,2.59,u+.03],[-1.16,2.67,u],[f[0],f[1],.444]],.018,32).name="lift cylinder hydraulic line"}}function lx(n,e){let t=new yt;t.name="driver controls",n.add(t);let i=new bn({color:"#79816f",roughness:.86,metalness:0});i.name="cab interior trim";let s=e.upholstery.clone();s.name="woven seat upholstery";let r=(h,d,p,g,_=.035)=>{let m=new Ne(new Jn(...d,3,_),h);return m.position.set(...p),m.name=g,m.castShadow=!0,m.receiveShadow=!0,t.add(m),m},o=1.79;r(e.rubber,[1.86,.045,1.99],[1.49,o,0],"cab floor mat",.018);let a=new $t;[[2.11,1.85],[2.71,1.85],[2.75,2.05],[2.58,2.14],[2.18,2.14]].forEach(([h,d],p)=>p?a.lineTo(h,d):a.moveTo(h,d)),a.closePath();let c=new Ne(new ln(a,{depth:1.98,steps:1,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2}),i);c.position.z=-.99,c.name="dashboard cowl",c.castShadow=!0,c.receiveShadow=!0,t.add(c),r(e.edge,[.08,.23,1.86],[2.13,2.025,0],"dashboard instrument fascia",.015),r(e.rubber,[.26,.07,.63],[2.06,2.155,-.5],"instrument sun hood",.025),r(i,[.05,.075,.6],[2.075,2.015,.55],"glove compartment",.012),oe(t,e.darkSteel,[2.043,1.99,.44],[2.043,1.99,.65],.011).name="glove compartment pull";for(let h of[-.85,.14,.81]){r(e.darkSteel,[.014,.1,.15],[2.075,2.075,h],"dashboard air vent",.005);for(let d=0;d<4;d++)F(t,e.edge,[.015,.01,.13],[2.064,2.04+d*.023,h],"vent louvre")}for(let h of[-1,1]){let d=h*.58;for(let g of[-.16,.16])F(t,e.darkSteel,[.59,.046,.044],[1.27,o+.042,d+g],"seat adjustment rail");r(e.darkSteel,[.39,.105,.34],[1.27,1.91,d],"seat suspension pan",.016),r(s,[.54,.15,.43],[1.33,2.02,d],"driver seat",.055);let p=r(s,[.16,.52,.42],[1.065,2.245,d],"seat back",.05);p.rotation.z=-.08;for(let g of[-.19,.19]){let _=r(s,[.12,.48,.072],[1.14,2.235,d+g],"seat back bolster",.025);_.rotation.z=-.08,r(s,[.43,.1,.066],[1.36,2.09,d+g],"seat cushion bolster",.023)}for(let g of[-.13,.13])oe(t,e.steel,[1.04,2.43,d+g],[1.04,2.56,d+g],.013).name="headrest support";r(s,[.14,.18,.3],[1.03,2.57,d],"driver head restraint",.035);for(let g of[-.11,0,.11])oe(t,e.edge,[1.18,2.09,d+g],[1.51,2.09,d+g],.003).name="upholstery stitch channel";$e(t,e.darkSteel,[[1.15,2.46,d+h*.16],[1.23,2.29,d],[1.33,2.12,d-h*.13],[1.52,2.08,d-h*.17]],.014,24).name="diagonal restraint",$e(t,e.darkSteel,[[1.18,2.105,d+h*.19],[1.48,2.105,d+h*.14],[1.52,2.08,d-h*.17]],.012,20).name="lap restraint",r(e.red,[.035,.036,.04],[1.52,2.08,d-h*.17],"restraint buckle",.006),r(i,[1.51,.3,.038],[1.51,1.98,h*1.108],"door interior liner",.018),oe(t,e.darkSteel,[1.38,2.06,h*1.077],[1.74,2.06,h*1.077],.021).name="door interior grab pull"}let l=new Ne(new Gt(.18,.018,10,48),e.rubber);l.rotation.y=Math.PI/2-.28,l.position.set(1.86,2.16,-.58),l.name="steering wheel",t.add(l);let f=new L(1,0,0).applyAxisAngle(new L(0,1,0),-.28),u=new L(1.86,2.16,-.58);for(let h=0;h<3;h++){let d=h*Math.PI*2/3,p=new L(0,Math.cos(d)*.155,Math.sin(d)*.155).applyAxisAngle(new L(0,1,0),-.28).add(u);oe(t,e.darkSteel,u.toArray(),p.toArray(),.013).name="steering spoke"}oe(t,e.darkSteel,u.toArray(),[2.08,2.04,-.58],.033).name="steering column",oe(t,e.edge,u.clone().addScaledVector(f,-.025).toArray(),u.clone().addScaledVector(f,.025).toArray(),.045).name="steering hub";for(let[h,d]of[[-.65,.06],[-.48,.052],[-.32,.033],[-.23,.033]])Y(t,e.steel,d+.006,.009,[2.074,2.04,h],"x",d+.006,32).name="instrument bezel",Y(t,e.rubber,d,.012,[2.064,2.04,h],"x",d,32).name="instrument dial",oe(t,e.lamp,[2.055,2.04,h],[2.055,2.04+d*.58,h+d*.3],.003).name="instrument needle";for(let h of[-.71,-.55,-.39]){oe(t,e.darkSteel,[2.24,o+.025,h],[2.05,o+.17,h],.014).name="pedal arm";let d=F(t,e.rubber,[.1,.025,.085],[2.05,o+.18,h],"driver pedal");d.rotation.z=-.5}r(i,[.42,.22,.2],[1.76,1.92,0],"centre console",.028),oe(t,e.darkSteel,[1.76,2.04,0],[1.72,2.18,0],.017).name="gear selector",r(e.rubber,[.06,.06,.065],[1.72,2.2,0],"selector grip",.015)}function Qu(n,e,t,i){if(n.userData.sharedPart==="WR-12")lx(n,e);else{let o=new yt;o.name="driver controls",n.add(o);let a=t/2-1.4,c=n.userData.roof?1.53:1.86;F(o,e.edge,[.22,.26,1.42],[a+.17,c+.14,0],"dashboard");for(let u of[-1,1])F(o,e.rubber,[.48,.14,.47],[a-.45,c,u*.48],"driver seat"),F(o,e.rubber,[.12,.58,.47],[a-.68,c+.27,u*.48],"seat back"),oe(o,e.steel,[a-.45,c-.3,u*.48],[a-.45,c-.07,u*.48],.026);let l=new Ne(new Gt(.18,.017,8,40),e.rubber);l.rotation.y=Math.PI/2,l.position.set(a-.15,c+.41,-.48),o.add(l);for(let u=0;u<3;u++){let h=u*Math.PI*2/3;oe(o,e.darkSteel,[a-.15,c+.41,-.48],[a-.15,c+.41+Math.cos(h)*.16,-.48+Math.sin(h)*.16],.009)}for(let u=0;u<4;u++)Y(o,e.glass,.034,.012,[a+.045,c+.21,-.57+u*.09],"x");let f=c-.12;F(o,e.edge,[1.5,.05,1.8],[a-.18,f,0],"cab floor");for(let u of[-1,1]){for(let h of[u*.48-.16,u*.48+.16])F(o,e.darkSteel,[.58,.045,.04],[a-.47,f+.04,h],"seat adjustment rail");F(o,e.rubber,[.13,.17,.32],[a-.67,c+.6,u*.48],"driver head restraint");for(let h of[u*.48-.1,u*.48+.1])oe(o,e.steel,[a-.67,c+.5,h],[a-.67,c+.6,h],.013);oe(o,e.darkSteel,[a-.6,c+.41,u*.65],[a-.13,c-.02,u*.34],.012).name="diagonal restraint",F(o,e.red,[.025,.035,.045],[a-.13,c-.015,u*.34],"restraint buckle"),$e(o,e.darkSteel,[[a-.67,c+.2,u*.73],[a-.41,c-.02,u*.73],[a-.13,c-.02,u*.34]],.009,22).name="lap restraint"}oe(o,e.darkSteel,[a-.15,c+.41,-.48],[a+.07,c+.3,-.48],.026).name="steering column",Y(o,e.edge,.04,.06,[a-.15,c+.41,-.48],"x",.04,24).name="steering hub";for(let u of[-.6,-.43,-.26]){oe(o,e.steel,[a+.2,f+.025,u],[a+.08,f+.13,u],.012).name="pedal arm";let h=F(o,e.rubber,[.09,.025,.07],[a+.08,f+.14,u],"driver pedal");h.rotation.z=-.45}F(o,e.edge,[.3,.16,.19],[a-.1,f+.1,.02],"gear selector console"),oe(o,e.darkSteel,[a-.1,f+.18,.02],[a-.14,c+.16,.02],.012).name="gear selector",Y(o,e.rubber,.03,.045,[a-.14,c+.18,.02]).name="selector grip";for(let u=0;u<4;u++){let h=-.57+u*.09;Y(o,e.darkSteel,.037,.009,[a+.035,c+.21,h],"x",.037,24).name="instrument bezel",oe(o,e.lamp,[a+.028,c+.21,h],[a+.028,c+.23,h+.009],.0025).name="instrument needle"}}if(Cc(n,e),n.userData.sharedPart==="WR-12")return;let s=[];n.traverse(o=>{o.name==="wheel guard"&&s.push(o)});for(let o of s){let a=new $t;for(let c=0;c<=12;c++){let l=c*Math.PI/12,f=Math.cos(l)*.7,u=Math.sin(l)*.7;c?a.lineTo(f,u):a.moveTo(f,u)}for(let c=12;c>=0;c--){let l=c*Math.PI/12;a.lineTo(Math.cos(l)*.64,Math.sin(l)*.64)}a.closePath(),o.geometry.dispose(),o.geometry=new ln(a,{depth:.46,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.009,bevelThickness:.009}),o.position.y=.62,o.position.z-=.23}for(let o of[-1,1]){let a=o*i*.45;for(let c of[-t*.38,-t*.22])F(n,e.edge,[.028,.12,.028],[c,1.75,a],"panel hinge"),Y(n,e.steel,.011,.07,[c,1.75,a+o*.024],"y",.011,12);for(let c=0;c<6;c++)F(n,e.darkSteel,[.3,.02,.03],[-t*.27,2.08+c*.035,a+o*.018],"louvred cooling intake");oe(n,e.darkSteel,[t*.36,1.38,a],[t*.36,1.95,a],.016)}oe(n,e.darkSteel,[-t*.34,.8,0],[t*.31,.8,0],.06),F(n,e.edge,[t*.56,.065,i*.48],[0,.9,0],"belly protection"),Y(n,e.darkSteel,.11,.85,[-t*.22,1.18,-i*.28],"x"),$e(n,e.darkSteel,[[-t*.22,1.18,-i*.28],[-t*.38,1.18,-i*.28],[-t*.42,1.37,-i*.37]],.034);let r=-t/2;for(let o of[-1,1])$e(n,e.darkSteel,[[r+.7,1.4,o*i*.43],[r+.7,2.1,o*i*.46],[r+1.3,2.13,o*i*.46]],.024),F(n,e.edge,[.4,.2,.42],[r+.55,1.07,o*i*.39],"mud flap");for(let o=0;o<4;o++)oe(n,e.steel,[r+.1,1.15+o*.18,-.3],[r+.1,1.15+o*.18,.3],.014)}function Cc(n,e){let t=[];n.traverse(i=>{i.name==="run-flat wheel"&&t.push(i)});for(let i of t){if(i.userData.detailed)continue;i.userData.detailed=!0;let s=i.children[0];for(let c of[...i.children].slice(1))c.removeFromParent(),c.geometry?.dispose();s.geometry.dispose();let r=[[.315,-.165],[.33,-.185],[.4,-.211],[.48,-.213],[.54,-.19],[.574,-.152],[.588,-.096],[.59,-.04],[.59,.04],[.588,.096],[.574,.152],[.54,.19],[.48,.213],[.4,.211],[.33,.185],[.315,.165],[.315,-.165]].map(([c,l])=>new ce(c,l));s.geometry=new li(r,64),s.rotation.x=Math.PI/2,s.name="rounded tyre carcass";let o=new $t;o.moveTo(-.055,-.071),o.lineTo(.018,-.071),o.lineTo(.059,-.035),o.lineTo(.043,.071),o.lineTo(-.027,.071),o.lineTo(-.063,.025),o.closePath();let a=new ln(o,{depth:.03,steps:1,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:1});a.rotateX(Math.PI/2);for(let c=0;c<32;c++)for(let l of[-1,1]){let f=c*Math.PI/16+l*.028,u=new Ne(a,e.rubber);u.position.set(Math.sin(f)*.607,Math.cos(f)*.607,l*.091),u.rotation.z=-f,u.rotation.y=l*.24,u.name="directional tread lug",u.castShadow=!0,u.receiveShadow=!0,i.add(u)}for(let c of[-1,1]){let l=[[.11,.08],[.15,.095],[.23,.13],[.31,.173],[.325,.19],[.334,.184],[.331,.164],[.307,.15],[.236,.109],[.15,.071],[.11,.068]].map(([g,_])=>new ce(g,_)),f=new Ne(new li(l,48),e.paint);f.rotation.x=c*Math.PI/2,f.name="dished wheel rim",i.add(f);let u=new Ne(new Gt(.322,.012,8,48),e.darkSteel);u.position.z=c*.184,u.name="rim bead retaining lip",i.add(u),Y(i,e.darkSteel,.11,.08,[0,0,c*.112],"z",.11,40).name="wheel hub shoulder",Y(i,e.paint,.085,.07,[0,0,c*.16],"z",.085,40).name="hub cap";for(let g=0;g<10;g++){let _=g*Math.PI/5;Y(i,e.steel,.015,.021,[Math.sin(_)*.15,Math.cos(_)*.15,c*.12],"z",.015,6).name="hub fastener"}let h=c===-Math.sign(i.position.z),d=Y(i,e.steel,.265,.015,[0,0,c*.066],"z",.265,48);d.name=h?"ventilated brake rotor":"rim inner web",h&&F(i,e.darkSteel,[.12,.21,.08],[.23,0,c*.065],"brake caliper"),Y(i,e.steel,.012,.025,[.12,.28,c*.18],"z",.012,8).name="tyre valve";let p=new Ne(new Gt(.47,.0035,6,48),e.rubber);p.position.z=c*.214,p.name="moulded sidewall seam",i.add(p)}}}function cx(n,e,t,i){if(t==="CAP"){let s=[];n.traverse(r=>{r.name==="crew seat cushion"&&s.push(r)});for(let r of s){let{x:o,z:a}=r.position;F(n,e.rubber,[.12,.15,.28],[o-.19,1.06,a],"head restraint");for(let c of[-1,1])oe(n,e.darkSteel,[o-.16,.73,a+c*.25],[o+.18,.73,a+c*.25],.021),Y(n,e.steel,.023,.025,[o-.18,.28,a+c*.17],"z");F(n,e.amber,[.035,.045,.028],[o+.13,.51,a+.22],"belt buckle");for(let c=0;c<3;c++)F(n,e.edge,[.31,.005,.009],[o,.56,a+(c-1)*.08],"seat seam")}}else if(t==="FP"){F(n,e.darkSteel,[.39,.12,.14],[.12,.73,0],"breech cover");for(let s=0;s<7;s++)F(n,e.edge,[.018,.04,.13],[-.06+s*.045,.81,0],"receiver cooling fin");for(let s of[-1,1])F(n,e.paint,[.055,.27,.3],[-.1,.55,s*.31],"mount cheek"),Y(n,e.steel,.045,.038,[-.1,.57,s*.35],"z",.045,32);for(let s=0;s<8;s++)Y(n,e.amber,.018,.08,[-.24+s*.034,.58,-.4],"y",.013,12);$e(n,e.rubber,[[-.23,.38,-.37],[-.36,.48,-.3],[-.35,.64,-.17],[-.1,.72,-.11]],.018,24);for(let s=0;s<6;s++)F(n,e.steel,[.033,.007,.017],[.18+s*.038,.8,0],"accessory rail")}else if(t==="COM"){let s=i===1?3:i===6?2:1;for(let r=0;r<s;r++){let o=(r-(s-1)/2)*.4;for(let a of[-.13,.13])for(let c of[.12,.47])Y(n,e.steel,.008,.012,[o+a,c,.127],"z",.008,6);for(let a=0;a<4;a++)Y(n,e.steel,.013,.012,[o-.1+a*.063,.1,.13],"z"),Y(n,e.darkSteel,.009,.016,[o-.1+a*.063,.1,.14],"z");F(n,e.darkSteel,[.04,.18,.023],[o+.145,.3,.126],"grip")}}else if(t==="SA"){let s=i===3?1.75:.43;for(let r of[-.105,.105]){let o=new Ne(new Gt(.068,.008,8,40),e.darkSteel);o.position.set(r,s,.198),n.add(o),F(n,e.edge,[.19,.025,.18],[r,s+.14,.065],"lens sunshade");for(let a of[-.09,.09])Y(n,e.steel,.006,.012,[r+a,s+.09,.123],"z",.006,6)}}else if(t==="ACC"&&[0,5].includes(i)){for(let r of[-.42,.42]){F(n,e.edge,[.09,.08,.46],[r,.14,0],"gusseted pedestal");for(let o of[-.19,.19])Y(n,e.steel,.011,.02,[r,.19,o],"y",.011,6),ki(n,e.paint,[[r-.085,.085,o],[r+.085,.085,o],[r,.26,o]]).name="bearing pedestal gusset"}Y(n,e.paint,.145,.15,[-.57,.34,0],"x",.145,40).name="reduction gearcase",Y(n,e.darkSteel,.155,.026,[-.66,.34,0],"x",.155,40).name="gearcase joint",zn(n,e.steel,[-.678,.34,0],.123,8,"x",.009);for(let r=0;r<6;r++)Y(n,e.darkSteel,.086,.012,[-.7-r*.021,.34,0],"x",.086,32).name="hydraulic motor cooling ring";Y(n,e.paint,.09,.025,[-.835,.34,0],"x",.09,32).name="motor end cover";for(let r of[.21,.46])oe(n,e.darkSteel,[-.42,r,-.235],[.42,r,-.235],.018).name="rear frame tie rod";F(n,e.paint,[.21,.065,.12],[-.23,.602,.12],"hydraulic valve block");for(let r of[-.3,-.16])oe(n,e.darkSteel,[-.42,.49,.12],[r,.57,.12],.013).name="valve block support",Y(n,e.steel,.017,.03,[r,.65,.12]).name="valve port";for(let[r,o]of[[-.3,-.74],[-.16,-.79]])$e(n,e.rubber,[[r,.65,.12],[r,.68,.12],[-.52,.69,.1],[o,.52,.065],[o,.38,.065]],.013,40).name="motor hydraulic supply";Y(n,e.steel,.02,.055,[0,.235,.455]).name="rope ferrule";let s=new Ne(new Gt(.035,.007,8,28),e.steel);s.rotation.y=Math.PI/2,s.position.set(0,.22,.46),s.name="rope eye thimble",n.add(s),Y(n,e.darkSteel,.027,.025,[-.068,.122,.49],"z",.027,20).name="hook latch pivot"}}var hx=Object.freeze(["COMBAT","RECCE","TROOP","COMMAND","RECOVERY","MINE"]),nd=Object.freeze([...["ACC","CAP","COM","FP","MOB","PRO","SA"].flatMap(n=>"ABCDEFG".split("").map(e=>`${n}-${e}`)),..."ABCDEFGHIJKLMNOPQRSTU".split("").map(n=>`SE-${n}`),"TRAIN-CAP"]);function tn(n){let e=new yt;return e.name=n,e}function id(n,e,t,i,s=!1){let o=tn("supported crew seat");o.position.set(t,.4,i),n.add(o);let a=e.upholstery.clone();a.name="woven seat upholstery";let c=(u,h,d,p,g)=>{let _=new Ne(new Jn(...h,3,p),u);return _.position.set(...d),_.name=g,o.add(_),_};if(s){F(o,e.darkSteel,[.48,.055,.36],[.01,.148,0],"crew seat floor mounting cassette");for(let u of[-1,1]){F(o,e.edge,[.49,.035,.07],[.01,.128,u*.145],"crew seat bolted floor rail");for(let h of[-.17,.19])Y(o,e.steel,.012,.023,[h,.157,u*.145],"y",.012,6).name="seat rail retaining fastener";F(o,e.edge,[.36,.18,.035],[0,.25,u*.145],"seat suspension side cheek");for(let h of[-.13,.13])Y(o,e.steel,.021,.044,[h,.25,u*.165],"z",.021,12).name="suspension pivot"}F(o,e.darkSteel,[.3,.14,.22],[0,.25,0],"seat suspension bellows");for(let u of[.197,.232,.267,.302])F(o,e.rubber,[.325,.018,.25],[0,u,0],"suspension bellows convolution");F(o,e.edge,[.41,.047,.33],[0,.338,0],"suspension upper cradle");for(let u of[-1,1])F(o,e.edge,[.075,.28,.055],[-.22,.515,u*.135],"connected seat back support"),Y(o,e.steel,.038,.052,[-.21,.4,u*.19],"z",.038,20).name="seat back recline housing"}else for(let u of[-1,1]){F(o,e.darkSteel,[.49,.035,.035],[.01,.15,u*.15],"seat adjustment rail");for(let h of[-.16,.19])F(o,e.edge,[.065,.04,.09],[h,.105,u*.15],"seat floor foot"),Y(o,e.steel,.009,.015,[h,.134,u*.15],"y",.009,6),oe(o,e.steel,[h,.17,u*.15],[h-.04,.35,u*.15],.018)}F(o,e.edge,[.44,.045,.4],[0,.37,0],"seat suspension pan"),c(a,[.43,.11,.36],[.025,.45,0],.045,"crew seat cushion");for(let u of[-1,1]){let h=new Ne(new sr(.038,.31,6,14),a);h.rotation.z=Math.PI/2,h.position.set(.015,.505,u*.17),h.name="cushion side bolster",o.add(h)}let l=c(e.edge,[.074,.49,.38],[-.215,.77,0],.025,"seat back shell");l.rotation.z=.12;let f=c(a,[.095,.46,.32],[-.16,.78,0],.035,"contoured back cushion");if(f.rotation.z=.12,s){let u=a.clone();u.color.multiplyScalar(.82),u.roughness=.93,u.name="crew seat woven center insert";let h=c(u,[.018,.335,.205],[-.108,.782,0],.008,"crew seat contoured back insert");h.rotation.z=.12,c(u,[.295,.018,.235],[.045,.508,0],.008,"crew seat cushion center insert");for(let d of[-1,1])$e(o,e.darkSteel,[[-.08,.632,d*.065],[-.098,.782,d*.065],[-.117,.932,d*.065]],.0018,18).name="seat back stitched channel",$e(o,e.darkSteel,[[-.087,.52,d*.075],[.045,.52,d*.075],[.175,.52,d*.075]],.0018,18).name="seat cushion stitched channel"}for(let u of[-1,1]){let h=c(a,[.1,.39,.075],[-.135,.77,u*.16],.03,"back side bolster");h.rotation.z=.12,oe(o,e.steel,[-.225,.99,u*.09],[-.225,1.08,u*.09],.009)}c(a,[.115,.15,.28],[-.225,1.085,0],.04,"adjustable head restraint");for(let u of[.66,.82])$e(o,e.edge,[[-.111-(u-.78)*.12,u,-.11],[-.108-(u-.78)*.12,u,0],[-.111-(u-.78)*.12,u,.11]],.003,16).name="back upholstery seam";$e(o,e.darkSteel,[[-.14,.98,-.125],[-.095,.82,-.055],[-.075,.65,.05],[.005,.518,.1],[.1,.513,.115]],.012,24),$e(o,e.darkSteel,[[.08,.515,-.19],[.1,.518,0],[.08,.515,.19]],.013,20),c(e.steel,[.035,.024,.042],[.1,.526,.065],.006,"restraint buckle"),F(o,e.red,[.018,.007,.025],[.105,.542,.065],"restraint release");for(let u of[-1,1])oe(o,e.edge,[-.14,.38,u*.21],[-.14,.65,u*.21],.014),c(a,[.29,.05,.055],[.005,.65,u*.225],.018,"supported armrest");for(let u of o.children)u.position.y-=.4;return o}function ux(n,e){let t=tn("crew bay"),i=[6,6,4,8,5,5,4][e],s=[2.65,3.05,2.05,3.25,2.2,2.5,2.1][e],r=e===6?1.26:1.47,o=Math.ceil(i/2),a=(s-.65)/o,c=s/2,l=r/2,f=e===4||e===6;F(t,n.paint,[s,.1,r],[0,.055,0],"crew module floor");for(let u of[-1,1])F(t,n.edge,[s-.12,.055,.075],[0,.105,u*(l-.06)],"floor edge rail"),F(t,n.darkSteel,[s-.12,.06,.08],[0,.035,u*(l-.13)],"module lower mounting rail");for(let u of[-c+.15,c-.15])for(let h of[-1,1])F(t,n.edge,[.19,.055,.16],[u,.023,h*(l-.1)],"module chassis mounting foot"),Y(t,n.steel,.015,.025,[u,.065,h*(l-.1)],"y",.015,6);for(let u=0;u<o;u++){let h=(u-(o-1)/2)*a;F(t,n.darkSteel,[.065,.04,r-.16],[h,.104,0],"seat row crossmember")}for(let u=0;u<i;u++){let h=Math.floor(u/2),d=u===i-1&&i%2;id(t,n,(h-(o-1)/2)*a,d?0:(u%2?1:-1)*r*.25)}if(e!==4){for(let u of[-c+.05,c-.05]){let h=[[-l,.12],[l,.12],[l,1.12],[l-.13,1.3],[-l+.13,1.3],[-l,1.12]],d=en(-l+.07,.18,l-.07,1.23,.065);vt(t,n.paint,h,[d],(p,g,_)=>[u+_,g,p]).name="hull shell";for(let p of[-1,1])oe(t,n.steel,[u,.24,p*(l-.04)],[u,.6,p*(l-.04)],.015).name="boarding grab handle"}for(let u of[-1,1])if(F(t,n.edge,[s-.12,.065,.075],[0,1.28,u*(l-.1)],"roof perimeter rail"),f)oe(t,n.steel,[-c+.05,.56,u*l],[c-.05,.56,u*l],.019).name="open module side rail";else{let h=e===5?1.1:.62,d=[[-c,.13],[c,.13],[c-.06,h],[-c+.06,h]],p=[];if(e===5)for(let g of[-s*.25,s*.25])p.push(en(g-.23,.79,g+.23,1,.035));if(vt(t,n.paint,d,p,(g,_,m)=>[g,_,u*(l-m)]).name="hull shell",e===5)for(let g of[-s*.25,s*.25])F(t,n.rubber,[.48,.25,.016],[g,.895,u*(l+.008)],"window gasket"),F(t,n.glass,[.43,.2,.017],[g,.895,u*(l+.018)],"protected crew glazing");for(let g of[-c+.12,c-.12])for(let _ of[.22,h-.08])Y(t,n.steel,.009,.018,[g,_,u*(l+.028)],"z",.009,6)}for(let u of[-c+.17,c-.17])F(t,n.edge,[.065,.055,r-.14],[u,1.28,0],"roof crossmember");if(!f){for(let u of[-1,1])F(t,n.paint,[s-.16,.047,r*.22],[0,1.31,u*r*.34],"hull shell");F(t,n.paint,[s-.16,.045,r*.3],[0,1.32,0],"hull shell")}}else for(let u of[-1,1])for(let h of[-c+.15,c-.15])F(t,n.steel,[.08,.07,.075],[h,.13,u*(l-.1)],"removable pallet latch"),oe(t,n.darkSteel,[h-.035,.18,u*(l-.1)],[h+.035,.18,u*(l-.1)],.012);return F(t,n.edge,[.15,.05,r-.18],[c+.03,.09,0],"boarding threshold"),t}function dx(n,e,t,i,s="x",r="cast transmission casing"){let o=new li(t.map(([c,l])=>new ce(c,l)),40),a=new Ne(o,e);return a.position.set(...i),a.rotation[s==="x"?"z":"x"]=Math.PI/2,a.name=r,n.add(a),a}function sd(n,e){let t=tn("inline diesel power pack"),i=e===5,s=n.castSteel||n.darkSteel,r=n.pressedSteel||n.steel,o=(d,p,g,_,m)=>{let M=new Ne(new Jn(...p,3,_),d);return M.position.set(...g),M.name=m,M.castShadow=M.receiveShadow=!0,t.add(M),M},a=(d,p,g,_,m)=>{let M=new $t;d.forEach(([D,x],T)=>T?M.lineTo(D,x):M.moveTo(D,x)),M.closePath();let A=new ln(M,{depth:p,steps:1,bevelEnabled:!0,bevelSize:.009,bevelThickness:.007,bevelSegments:3}),v=A.attributes.position;for(let D=0;D<v.count;D++)v.setXYZ(D,g+v.getZ(D),v.getY(D),v.getX(D));A.computeVertexNormals();let w=_.clone();w.side=Tt;let b=new Ne(A,w);return b.name=m,b.castShadow=b.receiveShadow=!0,t.add(b),b},c=(d,p,g,_)=>{let m=$e(t,d,p,g,32);return m.name=_,m},l=(d,p,g,_="z",m=.042)=>{Y(t,s,m,.02,[d,p,g],_,m,24).name="manifold seated port flange"};for(let d of[-.38,.38])F(t,n.edge,[2.17,.09,.085],[-.2,.11,d],"power pack skid rail");for(let d of[-1.08,.77])F(t,n.edge,[.1,.07,e===4?1.35:.85],[d,.13,e===4?-.24:0],"skid crossmember");a([[-.22,.31],[-.26,.4],[-.25,.58],[-.205,.7],[.205,.7],[.25,.58],[.26,.4],[.22,.31]],.96,-.48,n.paint,"cast crankcase with tapered shoulders"),a([[-.215,.315],[-.215,.265],[-.145,.195],[.145,.195],[.215,.265],[.215,.315]],.85,-.425,s,"pressed deep oil sump"),o(r,[.91,.025,.46],[0,.317,0],.01,"continuous sump sealing flange"),Y(t,n.steel,.018,.026,[.27,.198,0],"y",.018,6).name="seated sump drain plug",o(n.paint,[1,.175,.49],[0,.7875,0],.025,"cast cylinder head with port band"),o(n.darkSteel,[1.018,.019,.455],[0,.881,0],.006,"rocker cover continuous gasket"),a([[-.222,.885],[-.222,.935],[-.17,1.015],[.17,1.015],[.222,.935],[.222,.885]],.99,-.495,n.edge,"formed crowned rocker cover");for(let d of[-.4,-.24,-.08,.08,.24,.4]){for(let p of[-1,1]){a([[p*.237,.365],[p*.272,.405],[p*.257,.62],[p*.218,.69],[p*.211,.69],[p*.237,.4]],.032,d-.016,n.paint,"cast crankcase buttress"),o(s,[.122,.16,.024],[d,.535,p*.254],.018,"recessed crankcase service cover");for(let g of[.48,.59])Y(t,n.steel,.007,.012,[d,g,p*.272],"z",.007,6).name="service cover captive fastener";Y(t,n.darkSteel,.009,.022,[d,.902,p*.19],"y",.009,6).name="rocker cover seated fastener"}l(d,.79,.255),l(d,.8,-.255),c(s,[[d,.79,.25],[d,.775,.305],[d+.028,.735,.375]],.033,"exhaust branch into collector"),c(n.paint,[[d,.8,-.25],[d,.815,-.3],[d,.825,-.345]],.036,"intake runner into plenum")}o(n.paint,[.98,.115,.105],[0,.835,-.355],.045,"continuous intake plenum"),c(s,[[-.44,.735,.375],[0,.735,.375],[.43,.735,.375]],.046,"continuous cast exhaust collector");let f=(d,p,g)=>{Y(t,p,.104,.09,[d,.755,.49],"x",.117,32).name=g+" backing";let _=[];for(let m=0;m<=40;m++){let M=m/40*Math.PI*2,A=.094+.026*m/40;_.push([d,.755+Math.cos(M)*A,.49+Math.sin(M)*A])}c(p,_,.037,g+" scroll")};f(-.205,s,"turbine housing"),f(-.365,r,"compressor housing"),Y(t,n.steel,.057,.12,[-.285,.755,.49],"x",.057,24).name="turbo centre bearing",c(s,[[-.06,.735,.375],[-.16,.79,.398],[-.205,.848,.46]],.043,"collector to turbine inlet"),c(s,[[-.205,.76,.612],[-.205,.91,.65],[-.205,1.075,.65]],.046,"supported exhaust riser"),Y(t,n.steel,.053,.012,[-.205,1.052,.65],"y",.053,24).name="exhaust riser seated clamp",oe(t,n.edge,[-.205,.89,.65],[-.205,.85,.25],.013).name="exhaust riser support bracket",c(n.steel,[[-.365,.895,.49],[-.1,1.1,.44],[.32,1.09,.3],[.4,1.02,-.16],[.35,.835,-.355]],.055,"compressor delivery to intake plenum");for(let[d,p,g]of[[-.1,1.1,.44],[.32,1.09,.3]])Y(t,n.darkSteel,.063,.043,[d,p,g],"x",.063,24).name="charge pipe coupling";Y(t,n.darkSteel,.122,.44,[-.085,1.18,-.39],"x",.122,32).name="air cleaner cylindrical shell";for(let d of[-.315,.145])Y(t,n.edge,.13,.018,[d,1.18,-.39],"x",.13,32).name="air cleaner retained end cap";for(let d of[-.22,.055])Y(t,n.steel,.125,.018,[d,1.18,-.39],"x",.125,32).name="air cleaner mounting band",oe(t,n.edge,[d,1.07,-.39],[d,.87,-.355],.018).name="air cleaner plenum bracket";c(n.rubber,[[-.315,1.18,-.39],[-.59,1.16,-.37],[-.61,.96,.23],[-.52,.755,.49],[-.412,.755,.49]],.061,"air cleaner outlet to compressor inlet"),c(n.steel,[[-.275,.745,.49],[-.27,.56,.34],[-.27,.39,.24]],.01,"turbo oil return into crankcase"),dx(t,s,[[0,-.03],[.2,-.03],[.27,.025],[.29,.13],[.265,.26],[.175,.54],[.125,.69],[0,.69]],[-.48,.51,0],"x","cast flywheel and transmission casing");for(let d of[-.58,-.7,-.83,-.98])Y(t,n.darkSteel,d<-.8?.185:.275,.015,[d,.51,0],"x",d<-.8?.185:.275,32).name="transmission casting stiffening ring";for(let d=0;d<6;d++){let p=d*Math.PI/3;oe(t,s,[-.61,.51+Math.cos(p)*.265,Math.sin(p)*.265],[-1.1,.51+Math.cos(p)*.13,Math.sin(p)*.13],.017).name="transmission longitudinal casting rib"}zn(t,n.steel,[-.514,.51,0],.243,10,"x",.01),Y(t,n.steel,.083,.08,[-1.19,.51,0],"x").name="transmission output coupling",o(n.darkSteel,[.085,.82,.69],[.8,.665,0],.008,"radiator dark fin substrate");for(let d of[-.389,.389])o(r,[.135,.88,.075],[.8,.665,d],.018,"radiator formed side tank");for(let d of[.215,1.115])o(r,[.135,.08,.84],[.8,d,0],.017,"radiator folded header");for(let d=0;d<36;d++)F(t,r,[.012,.8,.005],[.849,.665,-.333+d*.019],"radiator vertical cooling passage");for(let d=0;d<28;d++)F(t,s,[.008,.005,.68],[.856,.273+d*.029,0],"radiator transverse fin fold");for(let d of[-.388,.388]){F(t,n.edge,[.17,.07,.13],[.8,.178,d],"radiator bolted skid foot");for(let p of[.3,1.04])Y(t,n.steel,.01,.019,[.879,p,d],"x",.01,6).name="radiator frame fastener"}let u=new Ne(new Gt(.291,.019,8,48),n.darkSteel);u.rotation.y=Math.PI/2,u.position.set(.691,.665,0),u.name="open circular cooling fan shroud",t.add(u);for(let d of[-1,1])oe(t,n.darkSteel,[.7,.665,d*.291],[.754,.665,d*.34],.023).name="shroud to radiator support";Y(t,n.darkSteel,.063,.1,[.651,.665,0],"x",.063,32).name="cooling fan driven hub";for(let d=0;d<7;d++){let p=d*Math.PI*2/7,g=new $t;g.moveTo(.045,-.025),g.quadraticCurveTo(.17,-.055,.267,-.01),g.lineTo(.26,.04),g.quadraticCurveTo(.16,.023,.045,.025),g.closePath();let _=new ln(g,{depth:.013,bevelEnabled:!0,bevelSize:.003,bevelThickness:.002,bevelSegments:2}),m=_.attributes.position;for(let v=0;v<m.count;v++){let w=m.getX(v),b=m.getY(v),D=m.getZ(v);m.setXYZ(v,.647+D+w*.035,.665+Math.cos(p)*w-Math.sin(p)*b,Math.sin(p)*w+Math.cos(p)*b)}_.computeVertexNormals();let M=n.darkSteel.clone();M.side=Tt;let A=new Ne(_,M);A.name="swept cooling fan blade",A.castShadow=!0,t.add(A)}o(n.paint,[.075,.38,.34],[.516,.515,0],.035,"front timing gear housing"),oe(t,s,[.516,.665,0],[.652,.665,0],.041).name="water pump and fan shaft",c(n.rubber,[[.43,.84,.19],[.59,.96,.29],[.64,.965,.389],[.72,.965,.389],[.8,.965,.389]],.04,"upper coolant hose seated into side tank"),c(n.rubber,[[.48,.4,.16],[.6,.26,.29],[.64,.285,.389],[.72,.285,.389],[.8,.285,.389]],.037,"lower coolant hose seated into side tank");for(let d of[.965,.285])Y(t,r,.047,.09,[.7275,d,.389],"x",.047,24).name="radiator coolant inlet neck",Y(t,n.steel,.049,.024,[.705,d,.389],"x",.049,24).name="coolant hose seated clamp";Y(t,r,.08,.135,[.493,.462,-.245],"x",.08,28).name="alternator ventilated body";for(let d=0;d<10;d++){let p=d*Math.PI/5;oe(t,s,[.44,.462+Math.cos(p)*.078,-.245+Math.sin(p)*.078],[.546,.462+Math.cos(p)*.078,-.245+Math.sin(p)*.078],.008).name="alternator longitudinal cooling rib"}F(t,n.edge,[.16,.05,.16],[.435,.365,-.205],"alternator seated mounting bracket");let h=(d,p,g)=>{Y(t,n.darkSteel,g,.029,[.575,d,p],"x",g,32).name="accessory drive pulley",Y(t,n.steel,g*.34,.034,[.579,d,p],"x",g*.34,24).name="pulley seated hub"};oe(t,s,[.54,.425,0],[.58,.425,0],.043).name="crank pulley shaft into timing housing",h(.425,0,.106),h(.665,0,.075),h(.462,-.245,.064),c(n.rubber,[[.595,.322,0],[.595,.34,-.195],[.595,.43,-.31],[.595,.515,-.272],[.595,.739,-.024],[.595,.714,.056],[.595,.431,.106],[.595,.322,0]],.009,"continuous accessory drive belt"),o(s,[.16,.09,.17],[.11,.57,-.285],.02,"oil filter connected housing"),Y(t,n.lamp,.059,.19,[.11,.434,-.285],"y",.059,28).name="replaceable oil filter canister",Y(t,n.steel,.062,.017,[.11,.529,-.285],"y",.062,24).name="oil filter sealing rim",oe(t,n.steel,[.34,.39,.24],[.34,.68,.32],.005).name="oil dipstick seated guide",Y(t,n.amber,.02,.009,[.34,.69,.325],"z",.02,16).name="dipstick service handle";for(let d of[-.34,.31])for(let p of[-1,1])F(t,n.edge,[.14,.03,.13],[d,.166,p*.38],"engine skid mounting shoe"),Y(t,n.rubber,.048,.072,[d,.217,p*.38],"y",.048,24).name="engine mounting isolator",a([[p*.235,.36],[p*.42,.258],[p*.42,.25],[p*.33,.25],[p*.235,.29]],.115,d-.0575,n.paint,"cast engine mounting ear"),Y(t,n.steel,.009,.043,[d,.266,p*.38],"y",.009,6).name="engine mount seated retaining bolt";if(e===4){o(n.paint,[.76,.68,.4],[-.54,.535,-.78],.05,"long range fuel reservoir");for(let d of[-.79,-.29])F(t,n.darkSteel,[.04,.7,.42],[d,.535,-.78],"fuel tank restraint"),F(t,n.edge,[.18,.06,.45],[d,.17,-.78],"fuel tank supported saddle");Y(t,n.steel,.045,.04,[-.54,.889,-.78],"y",.045,24).name="fuel reservoir filler cap",c(n.rubber,[[-.28,.25,-.62],[-.18,.33,-.5],[.11,.5,-.35],[.11,.57,-.285]],.014,"reservoir fuel supply seated at filter housing")}return i&&t.scale.setScalar(.78),t}function Ic(n,{wheels:e=!1,light:t=!1,adaptive:i=!1,springs:s=!1}={}){let r=tn("connected drive axle"),o=t?1.3:1.65,a=.44,c=t?.13:.19,l=new Ne(new ci(c,32,20),n.paint);l.scale.set(1.18,1,1.05),l.position.set(0,a,0),l.name="cast differential housing",r.add(l),Y(r,n.darkSteel,c*.9,.055,[c*.8,a,0],"x",c*.9,32),Y(r,n.steel,.065,.17,[c*1.2,a,0],"x");for(let f of[-1,1]){oe(r,n.paint,[0,a,f*.07],[0,a,f*o*.43],t?.043:.068);for(let h=0;h<5;h++)Y(r,n.rubber,t?.06:.09,.045,[0,a,f*(.24+h*.05)],"z",t?.06:.09,24);if(Y(r,n.steel,.16,.045,[0,a,f*o*.47],"z",.16,32),Y(r,n.darkSteel,.1,.1,[0,a,f*o*.46],"z"),e){let h=Ls(n);h.scale.setScalar(t?.56:.76),h.position.set(0,a,f*o*.49),r.add(h)}else zn(r,n.steel,[0,a,f*(o*.47+.03)],.115,8,"z",.014);let u=f*o*.29;if(oe(r,n.edge,[-.28,a+.03,u],[.12,a+.41,u],t?.025:.043),oe(r,n.edge,[.28,a+.03,u],[.12,a+.41,u],t?.025:.043),F(r,n.edge,[.16,.095,.15],[.12,a+.43,u],"suspension upper mount"),s){oe(r,n.steel,[-.1,a+.03,u],[-.1,a+.58,u],.022);let h=[];for(let d=0;d<=144;d++){let p=d/144*Math.PI*16;h.push([-.1+Math.cos(p)*.074,a+.09+d/144*.4,u+Math.sin(p)*.074])}$e(r,n.darkSteel,h,.015,144),Y(r,n.amber,.034,.32,[.12,a+.18,u]),oe(r,n.steel,[.12,a+.34,u],[.12,a+.61,u],.018)}}oe(r,n.darkSteel,[-.21,a-.07,-o*.42],[-.21,a-.07,o*.42],.023);for(let f of[-1,1])oe(r,n.darkSteel,[-.21,a-.07,f*o*.42],[0,a,f*o*.45],.023);if(i){F(r,n.steel,[.37,.1,.34],[0,a+.23,0],"traction controller");for(let f of[-1,1])$e(r,n.rubber,[[0,a+.23,f*.12],[.19,a+.18,f*.2],[.14,a-.15,f*.42],[0,a,f*o*.45]],.015,28)}return r}function fx(n,e){if(e!==2)return Ic(n,{wheels:e===1,adaptive:e===6,springs:e===1});let t=Ic(n,{wheels:!0,light:!0,springs:!0});t.name="lightweight running gear";for(let i of[-.3,.3])F(t,n.paint,[.075,.09,.83],[i,.22,0],"lightweight cradle crossmember");for(let i of[-.4,.4])F(t,n.paint,[.67,.09,.07],[0,.22,i],"lightweight cradle side rail");return t}function px(n){return Ic(n,{springs:!0})}function rd(n,e){let t=tn("weapon station");Y(t,n.edge,.37,.12,[0,.06,0]),Y(t,n.paint,.28,.27,[0,.25,0]),F(t,n.paint,[.6,.42,.5],[0,.49,0]);let i=[.68,1.05,1.6,.74,.65,1.14,1.04][e],s=e===6?2:1;for(let r=0;r<s;r++){let o=s===2?(r-.5)*.44:0;F(t,n.edge,[.44,.17,.17],[.18,.7,o]),Y(t,n.darkSteel,e===2?.055:.032,i,[.45+i/2,.7,o],"x"),Y(t,n.darkSteel,.07,.15,[.45+i,.7,o],"x"),Y(t,n.rubber,.03,.003,[.53+i,.7,o],"x")}F(t,n.paint,[.34,.35,.34],[-.15,.51,-.39]);for(let r of[-.2,.2])zn(t,n.steel,[r,.45,.27],.055,5);if([3,5].includes(e)){let r=$a(n,0);r.scale.setScalar(.42),r.position.set(-.1,.73,.29),t.add(r)}return t}function mx(n,e){let t=tn("protection kit"),i=(r,o,a=n.paint,c="formed protection panel")=>{let l=vt(t,a,r,[],(f,u,h)=>[f,u,o+h]);return l.name=c,l},s=(r,o,a)=>{Y(t,n.steel,.016,.035,[r,o,a],"z",.016,6).name="protection attachment bolt",Y(t,n.darkSteel,.024,.008,[r,o,a-.015],"z").name="attachment washer"};if([3,6].includes(e)){let r=e===3?.67:.77,o=e===3?1.7:2.3,a=-o/2,c=o/2,l=e===3?1.38:1.3;if(e===3){F(t,n.edge,[o,.024,r*2],[0,.083,0],"crew cell cassette deck");for(let E of[-1,1]){F(t,n.darkSteel,[o,.12,.12],[0,.015,E*.55],"crew cell longitudinal floor sill");for(let P of[-.61,.61]){F(t,n.darkSteel,[.16,.08,.12],[P,-.08,E*.55],"crew cell attachment pedestal"),Y(t,n.rubber,.067,.035,[P,-.1375,E*.55],"y",.067,24).name="crew cell mounting isolator",F(t,n.steel,[.2,.025,.18],[P,-.1675,E*.55],"crew cell attachment shoe");for(let R of[-.065,.065])Y(t,n.steel,.01,.03,[P+R,-.146,E*.55],"y",.01,6).name="crew cell shoe retaining bolt"}}for(let E of[-.27,.09])F(t,n.darkSteel,[.085,.1,1.14],[E,.025,0],"crew cell seat load crossmember");for(let E of[a+.065,c-.065])F(t,n.darkSteel,[.13,.1,1.14],[E,.025,0],"crew cell cassette end member")}else F(t,n.edge,[o,.09,r*2],[0,.045,0],"reinforced floor");let f=l-.22,u=r-.13,h=E=>E<=f?r-.065*(E-.09)/(f-.09):r-.065-.065*Math.min(1,(E-f)/(l-f)),d=n.paint.clone();d.color.set("#a0a58e"),d.metalness=.04,d.roughness=.86,d.name="crew cell interior lining";let p=n.edge.clone();p.color.set("#414b3e"),p.roughness=.7;let g=(E,P)=>(E.name="hull shell",E.userData.component=P,E),_=(E,P,R,N,O,V,Q=.018)=>{let J=new $t;R.forEach(([ke,ie],ge)=>ge?J.lineTo(ke,ie):J.moveTo(ke,ie)),J.closePath(),J.holes.push(...N);let q=new ln(J,{depth:Q,steps:1,curveSegments:12,bevelEnabled:!0,bevelSize:.0025,bevelThickness:.002,bevelSegments:3}),K=q.attributes.position;for(let ke=0;ke<K.count;ke++)K.setXYZ(ke,...O(K.getX(ke),K.getY(ke),K.getZ(ke)));q.computeVertexNormals();let ae=P.clone();ae.side=Tt;let pe=new Ne(q,ae);return pe.name=V,pe.castShadow=!0,pe.receiveShadow=!0,E.add(pe),pe},m=(E,P,R)=>{let[N,O,V,Q]=E,J=en(N,O,V,Q,.045),q=J.getPoints(12).map(ae=>[ae.x,ae.y]);g(_(t,n.paint,en(N-.052,O-.052,V+.052,Q+.052,.075).getPoints(12).map(ae=>[ae.x,ae.y]),[J.clone()],(ae,pe,ke)=>P(ae,pe,.015+ke),"window outer retaining bezel"),"window outer retaining bezel"),_(t,n.rubber,en(N-.012,O-.012,V+.012,Q+.012,.057).getPoints(12).map(ae=>[ae.x,ae.y]),[en(N+.018,O+.018,V-.018,Q-.018,.027)],(ae,pe,ke)=>P(ae,pe,-.02+ke),"window compression gasket",.056);let K=_(t,M,q,[],(ae,pe,ke)=>P(ae,pe,-.014-ke*.2),R,.012);K.castShadow=!1,g(_(t,p,en(N-.042,O-.042,V+.042,Q+.042,.07).getPoints(12).map(ae=>[ae.x,ae.y]),[J.clone()],(ae,pe,ke)=>P(ae,pe,-.057-ke),"window interior retaining frame"),"window interior retaining frame")},M=n.glass.clone();M.transparent=!0,M.opacity=.58,M.metalness=0,M.depthWrite=!1;let A=(E,P,R="cell flange retaining fastener")=>{let N=new L(...P(0)),O=new L(...P(.01)).sub(N).normalize(),V=Y(E,n.steel,.02,.004,N.clone().addScaledVector(O,.002).toArray(),"y",.02,24);V.quaternion.setFromUnitVectors(new L(0,1,0),O),V.name="cell flange seated washer";let Q=Y(E,n.darkSteel,.012,.009,N.clone().addScaledVector(O,.0085).toArray(),"y",.012,6);Q.quaternion.copy(V.quaternion),Q.name=R};for(let E of[-1,1]){let P=[[a,.09],[c,.09],[c-.25,l-.08],[c-.42,l],[a+.07,l]],R=en(a+.2,.85,c-.48,l-.13,.045);vt(t,n.paint,P,[R],(N,O,V)=>[N,O,E*(h(O)-V)]),g(vt(t,d,[[a+.09,.17],[c-.07,.17],[c-.3,l-.13],[a+.09,l-.09]],[R],(N,O,V)=>[N,O,E*(h(O)-.067-V*.25)]),"interior liner"),m([a+.2,.85,c-.48,l-.13],(N,O,V)=>[N,O,E*(h(O)+V)],"protected glazing");for(let N of[a+.13,c-.38])$e(t,p,[[N,.13,E*(h(.13)-.065)],[N,f,E*(h(f)-.065)],[N,l-.065,E*(h(l-.065)-.065)]],.025,16).name="interior shell rib";g(vt(t,p,[[a+.2,.23],[c-.2,.23],[c-.25,.71],[a+.2,.71]],[],(N,O,V)=>[N,O,E*(h(O)+.014+V*.2)]),"lower service panel recess"),g(vt(t,n.paint,[[a+.23,.26],[c-.24,.26],[c-.28,.68],[a+.23,.68]],[],(N,O,V)=>[N,O,E*(h(O)+.03+V*.2)]),"lower formed service panel"),$e(t,n.darkSteel,[[a+.14,.17,E*(h(.17)-.09)],[a+.14,.72,E*(h(.72)-.09)],[c-.32,.72,E*(h(.72)-.09)]],.012,24).name="secured interior cable conduit";for(let N of[a+.26,c-.36])vt(t,d,[[N-.05,.3],[N+.05,.3],[N+.05,.6],[N-.05,.6]],[],(O,V,Q)=>[O,V,E*(h(V)-.08+Q*.25)]).name="interior panel retaining strip";for(let N of[a+.12,c-.2])s(N,.2,E*(r+.02));if(_(t,n.paint,[[a,.085],[c-.03,.085],[c-.03,.19],[a,.19]],[],(N,O,V)=>[N,O,E*(r-.026+V)],"formed crew cell lower sill",.03),e===3){for(let N of[a+.28,-.1,c-.32])for(let O of[.285,.655])A(t,V=>[N,O,E*(h(O)+.04+V)],"service cover retaining fastener");for(let N of[a+.18,-.1,c-.32])A(t,O=>[N,.14,E*(r+.006+O)],"lower sill flange retaining fastener");for(let N of[a+.14,c-.39]){let O=[[N-.036,.135],[N+.036,.135],[N+.036,f-.015],[N+.025,l-.092],[N-.025,l-.092],[N-.036,f-.015]];_(t,p,O,[],(V,Q,J)=>[V,Q,E*(h(Q)-.087-J)],"crew cell formed interior pillar",.033),F(t,p,[.13,.028,.16],[N,.135,E*(r-.115)],"interior pillar foot flange")}}}let v=E=>c-(E-.09)*.25/(l-.17),w=en(-r+.16,.85,r-.16,l-.18);if(vt(t,n.paint,[[-r,.09],[r,.09],[r,l-.08],[-r,l-.08]],[w],(E,P,R)=>[v(P)-R,P,E*h(P)/r]),m([-r+.16,.85,r-.16,l-.18],(E,P,R)=>[v(P)+R,P,E*h(P)/r],"protected windshield"),e===3){let E=[[-r+.16,.255],[r-.16,.255],[r-.2,.68],[-r+.2,.68]];g(_(t,p,E,[],(P,R,N)=>[v(R)+.009+N*.25,R,P*h(R)/r],"front closure perimeter backing",.018),"front closure perimeter backing"),g(_(t,n.paint,[[-r+.18,.275],[r-.18,.275],[r-.22,.66],[-r+.22,.66]],[],(P,R,N)=>[v(R)+.018+N*.25,R,P*h(R)/r],"formed front service closure",.018),"formed front service closure");for(let P of[-r+.235,r-.235])for(let R of[.315,.62])A(t,N=>[v(R)+.0225+N,R,P*h(R)/r],"front closure retaining fastener")}let b=[[a+.07,-u],[c-.42,-u],[c-.32,-u+.1],[c-.32,u-.1],[c-.42,u],[a+.07,u],[a,u-.075],[a,-u+.075]],D=[];for(let E=0;E<=16;E++){let P=-u+E*u/8;D.push([P,l-.015+.018*(1-(P/u)**2)])}for(let E=16;E>=0;E--){let[P,R]=D[E];D.push([P,R-.028])}g(_(t,n.paint,D,[],(E,P,R)=>[a+.07+R,P,E],"crowned formed cell roof",o-.43),"formed cell roof"),g(vt(t,d,b,[],(E,P,R)=>[E,l-.061-R*.25,P]),"insulated roof liner");for(let E of[-1,1]){let P=[[a+.065,f+.075],[c-.36,f+.075],[c-.42,l-.018],[a+.065,l-.018]];g(vt(t,n.paint,P,[],(R,N,O)=>[R,N,E*(h(N)+.012+O*.35)]),"formed roof shoulder cap"),F(t,p,[o-.5,.075,.1],[-.16,l-.056,E*(u-.05)],"roof perimeter box stiffener"),F(t,n.paint,[o-.54,.036,.095],[-.16,l+.024,E*(u-.06)],"roof shoulder mounting flange");for(let R of[a+.19,c-.49])F(t,p,[.13,.035,.14],[R,l+.049,E*(u-.085)],"roof flange attachment pad"),Y(t,n.steel,.014,.017,[R,l+.075,E*(u-.085)],"y",.014,6).name="roof attachment fastener"}for(let E of[a+.16,c-.45])F(t,p,[.075,.063,u*2-.09],[E,l-.056,0],"connected roof transverse box member");F(t,n.paint,[.18,.09,u*2],[c-.33,l-.055,0],"folded windshield header");let x=[[-r+.105,.18],[r-.105,.18],[r-.105,l-.31],[u-.075,l-.13],[-u+.075,l-.13],[-r+.105,l-.31]],T=new Nn;if(x.forEach(([E,P],R)=>R?T.lineTo(E,P):T.moveTo(E,P)),T.closePath(),vt(t,n.paint,[[-r,.09],[r,.09],[r,l-.26],[u,l],[-u,l],[-r,l-.26]],[T],(E,P,R)=>[a+R,P,E]),e===3){let E=[[-r+.018,.108],[r-.018,.108],[r-.018,l-.267],[u-.012,l-.018],[-u+.012,l-.018],[-r+.018,l-.267]];g(_(t,n.paint,E,[T.clone()],(P,R,N)=>[a-.026+N,R,P],"boarding aperture bolted perimeter flange",.042),"boarding aperture bolted perimeter flange");for(let P of[-1,1])for(let R of[.26,.52,.8,1.035])A(t,N=>[a-.026-N,R,P*(r-.052)],"boarding perimeter retaining fastener");for(let P of[-.4,-.2,0,.2,.4])A(t,R=>[a-.026-R,.13,P],"boarding lower flange retaining fastener");for(let P of[-.36,-.18,0,.18,.36])A(t,R=>[a-.026-R,l-.062,P],"boarding header flange retaining fastener")}for(let E=0;E<x.length;E++){let[P,R]=x[E],[N,O]=x[(E+1)%x.length],V=new L(a+.077,(R+O)/2,(P+N)/2),Q=new L(0,O-R,N-P);F(t,p,[.095,Q.length()+.028,.052],V.toArray(),"rear aperture structural ring").quaternion.setFromUnitVectors(new L(0,1,0),Q.normalize())}let C=tn("rear aperture weather seal");t.add(C);let U=x.map(([E,P])=>[a-.007,P,E]);for(let E=0;E<U.length;E++){oe(C,n.rubber,U[E],U[(E+1)%U.length],.018).name="aperture gasket edge";let P=new Ne(new ci(.018,12,8),n.rubber);P.position.set(...U[E]),P.name="aperture gasket corner",P.castShadow=!0,P.receiveShadow=!0,C.add(P)}for(let E of[-1,1])$e(t,p,[[a+.059,.15,E*(r-.065)],[a+.059,l-.29,E*(r-.065)],[a+.059,l-.065,E*(u-.045)]],.027,24).name="rear door jamb reinforcement",$e(t,n.steel,[[a-.022,.46,E*(r-.04)],[a-.09,.46,E*(r-.04)],[a-.09,.77,E*(r-.04)],[a-.022,.77,E*(r-.04)]],.016,24).name="connected boarding grab handle";for(let E of[-.25,.25])F(t,n.lamp,[.17,.024,.075],[a+.24,l-.087,E],"interior overhead light");if(F(t,n.darkSteel,[o-.2,.026,r*2-.17],[0,.108,0],"non slip crew floor insert"),e===3){let E=tn("open crew cell boarding door"),P=2*(r-.105),R=-r+.105;E.position.set(a-.014,0,R),E.rotation.y=-Math.PI*.56,t.add(E);let N=[[0,.19],[P,.19],[P,l-.32],[P-.105,l-.14],[.105,l-.14],[0,l-.32]],O=[[.105,.3],[P-.105,.3],[P-.105,l-.37],[P-.18,l-.25],[.18,l-.25],[.105,l-.37]],V=new Nn;O.forEach(([q,K],ae)=>ae?V.lineTo(q,K):V.moveTo(q,K)),V.closePath(),g(_(E,n.paint,N,[V],(q,K,ae)=>[-.045+ae,K,q],"open boarding door outer skin",.025),"open boarding door outer skin"),g(vt(E,d,[[.065,.26],[P-.065,.26],[P-.065,l-.35],[P-.15,l-.21],[.15,l-.21],[.065,l-.35]],[],(q,K,ae)=>[.024+ae*.25,K,q]),"open boarding door interior liner");for(let q=0;q<O.length;q++){let[K,ae]=O[q],[pe,ke]=O[(q+1)%O.length],ie=new L(0,ke-ae,pe-K),ge=F(E,n.paint,[.048,ie.length()+.005,.017],[-.02,(ae+ke)/2,(K+pe)/2],"door pressed recess return");ge.quaternion.setFromUnitVectors(new L(0,1,0),ie.normalize()),g(ge,"door pressed recess return")}g(_(E,n.paint,O,[],(q,K,ae)=>[.004+ae*.4,K,q],"boarding door formed face panel",.018),"boarding door formed face panel");for(let q of[.06,P-.06])F(E,p,[.07,l-.49,.065],[.017,(l+.03)/2,q],"door perimeter upright return");for(let q of[.245,l-.235])F(E,p,[.07,.065,P-.13],[.017,q,P/2],"door transverse return");F(E,p,[.05,.05,P-.18],[.062,.49,P/2],"door inner reinforcing rib");for(let q of[.38,.96]){Y(t,n.steel,.029,.13,[a-.016,q,R],"y",.029,20).name="boarding door hinge pin",F(t,p,[.08,.1,.065],[a+.007,q,R-.025],"boarding hinge fixed leaf"),F(E,p,[.07,.1,.09],[.012,q,.035],"boarding hinge moving leaf");for(let K of[-.047,0,.047])Y(E,p,.035,.038,[0,q+K,0],"y",.035,24).name="boarding hinge barrel knuckle";for(let K of[-.062,.062])Y(t,n.darkSteel,.038,.013,[a-.014,q+K,R],"y",.038,24).name="boarding hinge pin end collar";for(let K of[-.029,.029])A(t,ae=>[a-.033-ae,q+K,R-.046],"fixed hinge leaf retaining fastener"),A(E,ae=>[.047+ae,q+K,.061],"moving hinge leaf retaining fastener")}$e(E,n.steel,[[.061,.64,P-.14],[.105,.64,P-.14],[.105,.8,P-.14],[.061,.8,P-.14]],.013,20).name="door interior pull handle",F(E,n.darkSteel,[.08,.105,.07],[.064,.7,P-.08],"boarding door latch housing");let Q=P-.085;for(let q of[.4,1.025])F(E,p,[.048,.07,.06],[.075,q,Q],"door latch rod guide"),Y(E,n.steel,.009,Math.abs(q-.7),[.094,(q+.7)/2,Q],"y",.009,16).name="guided boarding latch linkage",F(E,n.steel,[.026,.045,.055],[.086,q,Q],"boarding latch cam");for(let q of[.16,P-.16])for(let K of[.3,l-.29])A(E,ae=>[.03+ae,K,q],"door liner retaining fastener");F(E,p,[.018,.23,.1],[-.07,.7,P-.08],"exterior latch backing plate"),Y(E,n.steel,.021,.055,[-.061,.7,P-.08],"x",.021,16).name="external latch spindle",F(E,n.steel,[.022,.04,.135],[-.092,.7,P-.13],"exterior boarding latch lever");for(let q of[.62,.78])Y(E,n.steel,.009,.018,[-.079,q,P-.08],"x",.009,6).name="latch backing plate fastener";let J=new L(.035,.42,.24).applyEuler(E.rotation).add(E.position);oe(t,p,[a+.015,.42,R+.1],J.toArray(),.013).name="open door restraint arm",F(t,n.darkSteel,[.07,.11,.045],[a+.025,.7,r-.105],"boarding latch keeper")}if(e===3){for(let E of[-1,1])id(t,n,-.1,E*.32,!0);F(t,n.edge,[.18,.055,1.1],[a-.08,.12,0],"boarding threshold"),F(t,n.paint,[.055,.13,1.14],[a-.015,.06,0],"formed boarding sill return")}else for(let E of[a+.26,c-.48])oe(t,n.edge,[E,l-.06,-u+.07],[E,l-.06,u-.07],.027).name="roof hoop";if(e!==3)for(let E of[-1,1])for(let P of[.35,1.02])F(t,n.darkSteel,[.045,.1,.06],[a+.025,P,E*(r-.055)],"rear aperture hinge")}else if(e===5){for(let r of[-1,1]){vt(t,n.paint,[[-.92,.02],[.92,.02],[1.04,.18],[.9,.48],[-.9,.48],[-1.04,.18]],[],(o,a,c)=>[o,.12+a*.42+c,r*a*1.55]).name="V underbody plate",F(t,n.edge,[1.82,.075,.08],[0,.39,r*.67],"underbody mounting rail");for(let o of[-.65,.65])oe(t,n.darkSteel,[o,.3,r*.58],[o,.44,r*.58],.032).name="energy absorbing mount",Y(t,n.rubber,.047,.075,[o,.41,r*.58]),Y(t,n.steel,.018,.055,[o,.455,r*.58],"y",.018,6).name="underbody attachment bolt"}oe(t,n.edge,[-.94,.12,0],[.94,.12,0],.025).name="V keel joint"}else{let r=e===4||e===2?3:1,o=r===1?1.55:.57;for(let a of[.18,.79])F(t,n.edge,[r===1?1.5:1.93,.055,.06],[0,a,-.1],"protection mounting rail");for(let a=0;a<r;a++){let c=(a-(r-1)/2)*.66,l=[[c-o/2,.12],[c+o/2-.08,.12],[c+o/2,.23],[c+o/2,.77],[c+o/2-.1,.9],[c-o/2+.08,.9],[c-o/2,.8]];if(e===0)i(l,0,n.darkSteel,"inner support plate"),i(l,.18,n.paint,"outer spaced plate");else if(e===1){let u=n.paint.clone();u.color.set("#c5c0a9"),u.metalness=0,u.roughness=.94,i(l,0,n.darkSteel,"composite backing"),i(l,.045,u,"ceramic core"),i(l,.09,n.paint,"composite outer plate")}else{let u=i(l,.055,n.paint,e===2?"light formed panel":"replaceable side skirt");if(e===2){let h=u.geometry.attributes.position;for(let d=0;d<h.count;d++)h.setZ(d,h.getZ(d)+.032*Math.sin((h.getY(d)-.12)/.78*Math.PI));u.geometry.computeVertexNormals()}}let f=e===0?.235:e===1?.145:.115;for(let u of[-o*.36,o*.36])for(let h of[.23,.77])oe(t,n.darkSteel,[c+u,h,-.09],[c+u,h,f],.015).name="panel standoff",s(c+u,h,f)}}return t}function od(n,e){let t=tn("radio suite"),i=e===1?3:e===6?2:1;for(let s=0;s<i;s++){let r=(s-(i-1)/2)*.4;F(t,n.paint,[.35,.46,.23],[r,.29,0]),F(t,n.glass,[.2,.09,.014],[r,.4,.125]);for(let o=0;o<4;o++)Y(t,n.darkSteel,.026,.027,[r-.09+o*.06,.26,.135],"z");oe(t,n.darkSteel,[r+.1,.5,0],[r+.1,1.1+(e===4?.6:0)+s*.13,0],.009),$e(t,n.rubber,[[r-.08,.2,.12],[r-.2,.09,.22],[r-.15,.06,.35],[r+.17,.1,.3]],.012)}if([3,4].includes(e)){let s=1.65+e*.12;oe(t,n.paint,[.42,.1,-.28],[.42,s,-.28],.028);for(let r of[-1,1])oe(t,n.darkSteel,[.42,s*.8,-.28],[.42+r*.55,.02,-.28+r*.45],.006);if(e===3){let r=new Ne(new ci(.3,20,12,0,Math.PI*2,0,Math.PI/2),n.paint);r.rotation.x=Math.PI/2,r.position.set(.42,s,-.28),t.add(r)}}return t}function $a(n,e){let t=tn("sensor suite");Y(t,n.edge,.17,.1,[0,.05,0]),oe(t,n.paint,[0,.1,0],[0,e===3?1.65:.35,0],.05);let i=e===3?1.75:.43;F(t,n.paint,[.4,.24,.22],[0,i,0]);for(let s of[-.105,.105])Y(t,n.darkSteel,.078,.05,[s,i,.14],"z"),Y(t,n.glass,.058,.012,[s,i,.172],"z");if((e===1||e===5)&&(F(t,n.paint,[.26,.22,.22],[.26,i-.05,0]),Y(t,n.glass,.075,.025,[.26,i-.05,.13],"z")),e===3||e===6)for(let s of[-1,1])oe(t,n.darkSteel,[0,.37,0],[s*.35,0,.25],.017);if(e===4){let s=new Ne(new ci(.28,24,12,0,Math.PI*2,0,Math.PI*.64),n.paint);s.position.set(0,.4,-.2),t.add(s)}if(e===6)for(let s of[-.5,.5]){let r=$a(n,3);r.scale.setScalar(.54),r.position.set(s,0,-.25),t.add(r)}return t}function ad(n){let e=tn("clearance roller");F(e,n.paint,[1.1,.12,.35],[0,.48,-.1]);for(let t of[-.45,.45])oe(e,n.edge,[t,.48,-.3],[t,.16,.32],.032),Y(e,n.darkSteel,.17,.13,[t,.17,.34],"x");for(let t=0;t<7;t++){let i=-.45+t*.15;Y(e,n.paint,.14,.095,[i,.17,.34],"x"),zn(e,n.steel,[i+.05,.17,.34],.1,8,"x",.013)}return e}function gx(n,e){if([0,5].includes(e))return Br(n);if([2,4].includes(e))return ad(n);let t=tn("field equipment");if(e===1){F(t,n.paint,[1.4,.14,.85],[0,.39,0]);for(let i of[-1,1]){let s=Ls(n);s.scale.setScalar(.5),s.position.set(-.15,.3,i*.43),t.add(s)}oe(t,n.edge,[.7,.38,-.25],[1.28,.38,0],.036),oe(t,n.edge,[.7,.38,.25],[1.28,.38,0],.036),F(t,n.paint,[1.33,.4,.8],[0,.64,0])}else{F(t,n.edge,[1.15,.06,.65],[0,.03,0]);for(let i=0;i<3;i++)F(t,n.paint,[.29,.35,.47],[-.37+i*.37,.24,0]),F(t,n.steel,[.14,.025,.018],[-.37+i*.37,.34,.25]);if(e===6)for(let i of[-.55,.55])oe(t,n.darkSteel,[i,0,0],[i,.65,0],.025)}return t}function _x(n,e){let t=tn("engineering review");F(t,n.edge,[1.3,.065,.78],[0,.7,0]);for(let s of[-.54,.54])for(let r of[-.3,.3])oe(t,n.darkSteel,[s,0,r],[s,.69,r],.023);F(t,n.darkSteel,[.95,.68,.055],[0,1.14,-.24]),F(t,n.lamp,[.88,.61,.02],[0,1.14,-.205]);let i=[n.paint,n.amber,n.glass][e%3];for(let s=0;s<4;s++)F(t,i,[.11+(s+e)%4*.035,.032,.013],[-.22+e%2*.08,.95+s*.115,-.188]),F(t,n.edge,[.16,.016,.013],[.18,.95+s*.115,-.187]);if(F(t,n.lamp,[.35,.017,.27],[-.34,.75,.18]),F(t,n.glass,[.27,.018,.19],[.36,.75,.18]),Y(t,n.steel,.046,.11,[.54,.8,-.09]),[2,7,10,12,15].includes(e))for(let s=0;s<3;s++)F(t,i,[.09,.09,.08],[-.27+s*.27,1.5,-.19]),s<2&&oe(t,n.darkSteel,[-.22+s*.27,1.5,-.19],[-.08+s*.27,1.5,-.19],.008);if([3,11,16,17,20].includes(e)){let s=sd(n,0);s.scale.setScalar(.22),s.position.set(0,.74,.08),t.add(s)}return t}function Lc(n,e=zi()){if(!nd.includes(n))throw new Error("Unknown 3D asset: "+n);let t=n==="TRAIN-CAP"?"CAP-C":n,[i,s]=t.split("-"),r=s.charCodeAt(0)-65,a=Pc({CAP:()=>ux(e,r),MOB:()=>r===3?px(e):[1,2,6].includes(r)?fx(e,r):sd(e,r),FP:()=>rd(e,r),PRO:()=>mx(e,r),COM:()=>od(e,r),SA:()=>$a(e,r),ACC:()=>gx(e,r),SE:()=>_x(e,r)}[i](),e,i,r);return a.name=n,a.userData={assetId:n,illustrative:!0,units:"metres"},a}function Dc(n,e=zi()){if(!hx.includes(n))throw new Error("Unknown 3D mission: "+n);let t=td(n,e);t.name=n,t.userData.mission=n;let i=t.userData.roof||2.75;if(n==="COMBAT"||n==="MINE"){let s=rd(e,n==="COMBAT"?2:1);s.name="mission weapon",s.position.set(-.35,i,0),t.add(s)}if(n==="RECCE"){let s=$a(e,3);s.name="mission sensor",s.position.set(-1,i,-.48),t.add(s)}if(n==="COMMAND"){let s=od(e,4);s.name="mission radio",s.position.set(-1.5,i,-.4),t.add(s)}if(n==="TROOP"){F(t,e.edge,[.055,.85,1.5],[-3.46,1.75,0],"rear ramp");for(let s of[-1,1])oe(t,e.steel,[-3.5,1.45,s*.52],[-3.5,2.05,s*.52],.018)}if(n==="MINE"){let s=ad(e);s.name="mission roller",s.scale.setScalar(1.9),s.rotation.y=Math.PI/2,s.position.set(4.45,.1,0),t.add(s)}return vi(t)}function ld(n,e,t=zi()){let i=Dc(n,t),s=new Map;e.forEach(c=>{let l=typeof c=="string"?c:c.id;if(!nd.includes(l))throw new Error("Unknown 3D asset: "+l);l.startsWith("SE-")||s.set(l.split("-")[0],l)});let r=i.userData.length||6.25,o=i.userData.width||2.3,a=i.userData.roof||2.75;if(s.has("CAP")||s.has("MOB")){let c=[];i.traverse(l=>{l.isMesh&&l.name==="hull shell"&&c.push(l)});for(let l of c)l.material=l.material.clone(),l.material.transparent=!0,l.material.opacity=.16,l.material.depthWrite=!1}for(let[c,l]of s){let f=Lc(l,t);if(f.userData.mountedCard=l,c==="CAP"){if(f.position.set(-1.45,n==="RECOVERY"?1.75:1.4,0),n==="RECOVERY"){i.getObjectByName("recovery stowage")?.removeFromParent();let h=i.getObjectByName("recovery crane");h&&(h.position.z=-.95)}let u=f.getObjectByName("crew roof");u&&(u.visible=!1)}if(c==="MOB"&&(f.position.set(r/2-1.35,1.18,0),["MOB-B","MOB-C","MOB-D","MOB-G"].includes(l)&&f.position.set(0,.2,0)),c==="FP"&&(i.getObjectByName("mission weapon")?.removeFromParent(),f.position.set(-.35,a,0)),c==="COM"&&(i.getObjectByName("mission radio")?.removeFromParent(),f.position.set(.1,1.45,-.65)),c==="SA"&&(i.getObjectByName("mission sensor")?.removeFromParent(),f.position.set(-2.3,a,.5)),c==="PRO")if(l==="PRO-D"){let u=-r/2,h=u-1;f.position.set(h,1.07,0);let d=tn("crew cell chassis extension");i.add(d);for(let p of[-1,1])F(d,t.darkSteel,[2.2,.16,.16],[u-.7,.81,p*.55],"crew cell carrier extension rail");for(let p of[-.61,.61])F(d,t.darkSteel,[.2,.16,1.3],[h+p,.81,0],"crew cell carrier shoe crossmember");F(d,t.darkSteel,[.16,.16,1.26],[u+.25,.81,0],"crew cell extension chassis tie")}else if(l==="PRO-G")f.position.set(-1.3,1.4,0);else if(l==="PRO-F")f.position.set(0,.55,0);else{f.position.set(-1.6,1.36,o*.46);let u=f.clone();u.rotation.y=Math.PI,u.position.z=-o*.46,i.add(u)}if(c==="ACC")if(l==="ACC-B")f.position.set(-r/2-1.43,0,0);else if(["ACC-C","ACC-E"].includes(l))i.getObjectByName("mission roller")?.removeFromParent(),f.scale.setScalar(1.9),f.rotation.y=Math.PI/2,f.position.set(r/2+1.05,.1,0);else if(["ACC-A","ACC-F"].includes(l)){i.getObjectByName("mounted WR-12")?.removeFromParent(),f.rotation.y=Math.PI/2,f.position.set(r/2+.15,1.15,0),F(i,t.edge,[.8,.27,1.3],[r/2+.1,1.015,0],"winch chassis crossmember");for(let u of[-1,1])oe(i,t.darkSteel,[r/2-.3,.92,u*.44],[r/2+.38,1.12,u*.44],.035).name="winch mounting brace"}else f.position.set(-r/2+.9,1.35,0);i.add(f)}return i.userData.configuration=!0,i.userData.installed=Object.fromEntries(s),i}function cd(n){let e=[];n.traverse(s=>{s.isMesh&&s.name==="hull shell"&&e.push({mesh:s,material:s.material,castShadow:s.castShadow,temporary:null})});let t=!1;function i(s){if(t!==!!s){t=!!s;for(let r of e)if(t){let o=a=>{let c=a.clone();return c.transparent=!0,c.opacity=.13,c.depthWrite=!1,c.needsUpdate=!0,c};r.temporary=Array.isArray(r.material)?r.material.map(o):o(r.material),r.mesh.material=r.temporary,r.mesh.castShadow=!1}else{r.mesh.material=r.material,r.mesh.castShadow=r.castShadow;for(let o of Array.isArray(r.temporary)?r.temporary:[r.temporary])o?.dispose();r.temporary=null}}}return{apply:i,dispose(){i(!1)}}}function hd(n){let e=[...n.children],t=new Map,i=!!n.userData.mission,s=(n.userData.assetId||"").split("-")[0],r=0;function o(u){return u.userData.mountedCard?"equipment:"+u.userData.mountedCard:u.name==="run-flat wheel"?"wheel:"+ ++r:/crane/.test(u.name)?"crane":/driver controls/.test(u.name)?"cockpit":u.name==="mission weapon"?"mount":u.name==="mission radio"?"controls":u.name==="mission sensor"?"optics":u.name==="mission roller"?"front":u.name==="mounted WR-12"?"mechanism":/hull shell|cab rear|deck|lower.*hull/.test(u.name)?"body":/glazing|mirror/.test(u.name)||u.material?.name==="optical glass"?"glass":i?u.position.y<1.25?"chassis":u.position.x>1.5?"front":"body":s==="CAP"||s==="TRAIN"?/roof/.test(u.name)?"roof":u.position.y>.39?"seating":"frame":s==="MOB"?u.position.x>.49?"cooling":u.position.y>.72?"heads":u.material?.name==="machined steel"?"connections":"powertrain":s==="FP"?u.position.x>.45?"barrel":u.position.y<.3?"mount":"controls":s==="COM"||s==="SA"?u.position.y>.65?"optics":u.material?.name==="machined steel"?"connections":"controls":s==="PRO"?u.material?.name==="machined steel"?"connections":"protection":s==="ACC"?u.position.y<.16?"frame":u.material?.name==="machined steel"?"connections":"mechanism":u.position.y>.85?"display":u.position.y>.7?"documents":"frame"}for(let u of e){let h=o(u);if(!t.has(h)){let d=new yt;d.name=h,n.add(d),t.set(h,d)}t.get(h).add(u)}n.updateWorldMatrix(!0,!0);let a=new Et().setFromObject(n),c=a.getCenter(new L),l=a.getSize(new L),f=[...t].map(([u,h],d)=>{let p=new Et().setFromObject(h),g=p.getCenter(new L),_=g.clone().sub(c),m;return u.startsWith("wheel:")?m=new L(0,-.15,Math.sign(g.z)||1).multiplyScalar(l.z*.4):u==="body"||u==="roof"?m=new L(0,l.y*.55,0):u==="chassis"||u==="frame"?m=new L(0,-l.y*.26,0):u==="glass"?m=new L(l.x*.18,l.y*.25,0):u==="cockpit"?m=new L(l.x*.2,l.y*.15,-l.z*.55):(_.lengthSq()<.01&&_.set(Math.sin(d*2.4),.8,Math.cos(d*2.4)),m=_.normalize().multiplyScalar(Math.max(l.length()*.24,.22)),m.y+=l.y*.16),{key:u,object:h,origin:h.position.clone(),vector:m,center:g}});return{parts:f,apply(u){if(!Number.isFinite(u)||u<0||u>1)throw Error("Invalid assembly separation");for(let h of f)h.object.position.copy(h.origin).addScaledVector(h.vector,u);n.updateWorldMatrix(!0,!0)},restore(){this.apply(0)}}}function ud(n,e,t,i=[7,4.5,7],s=null){e.updateWorldMatrix(!0,!0);let r=s||new Et().setFromObject(e,!0),o=r.getCenter(new L),a=r.getSize(new L).length()/2;n.aspect=t;let c=Es.degToRad(n.fov),l=Math.min(c/2,Math.atan(Math.tan(c/2)*t)),f=Math.max(a/Math.sin(l)/.86,1),u=new L(...i).normalize(),h=[];for(let g of[r.min.x,r.max.x])for(let _ of[r.min.y,r.max.y])for(let m of[r.min.z,r.max.z])h.push(new L(g,_,m));let d=Math.max(a*1.01,.1),p=f;n.near=.001,n.far=f+a*3+1,n.updateProjectionMatrix();for(let g=0;g<24;g++){let _=(d+p)/2;n.position.copy(o).addScaledVector(u,_),n.lookAt(o),n.updateMatrixWorld(!0);let m=0;for(let M of h){let A=M.clone().project(n);m=Math.max(m,Math.abs(A.x),Math.abs(A.y))}m>.86?d=_:p=_}return n.position.copy(o).addScaledVector(u,p),n.lookAt(o),n.near=Math.max(.01,p-a*1.5),n.far=p+a*3+1,n.updateProjectionMatrix(),n.updateMatrixWorld(!0),o}function dd(n,e,t,i=null){e.updateWorldMatrix(!0,!0),n.updateWorldMatrix(!0,!1),n.target.updateWorldMatrix(!0,!1);let s=i||new Et().setFromObject(e,!0);if(s.isEmpty())return;let r=new L().setFromMatrixPosition(n.matrixWorld).sub(new L().setFromMatrixPosition(n.target.matrixWorld)).normalize();n.shadow.updateMatrices(n);let o=n.shadow.camera,a=[];for(let h of[s.min.x,s.max.x])for(let d of[s.min.y,s.max.y])for(let p of[s.min.z,s.max.z]){let g=new L(h,d,p);a.push(g),r.y>1e-4&&a.push(g.clone().addScaledVector(r,-(d-t)/r.y))}let c=new Et().setFromPoints(a.map(h=>h.applyMatrix4(o.matrixWorldInverse))),l=s.getSize(new L),f=Math.max(.08,l.length()*.025);Object.assign(o,{left:c.min.x-f,right:c.max.x+f,bottom:c.min.y-f,top:c.max.y+f,near:Math.max(.01,-c.max.z-f),far:Math.max(.1,-c.min.z+f)}),n.shadow.normalBias=Math.min(.006,Math.max(.001,l.length()*65e-5));let u=Math.max((o.right-o.left)/n.shadow.mapSize.x,(o.top-o.bottom)/n.shadow.mapSize.y);n.shadow.radius=Es.clamp(.045/u,3,48),o.updateProjectionMatrix(),n.shadow.updateMatrices(n)}function fd(n,e,t=0){n=Math.max(1,n),e=Math.max(1,e);let i=n>=850,s=!i&&e<520,r=i?{x:n-Math.min(420,n*.4),y:0,w:Math.min(420,n*.4),h:e}:s?{x:0,y:0,w:n,h:e}:{x:0,y:Math.round(e*.42),w:n,h:Math.round(e*.58)},o=i?{x:0,y:0,w:r.x,h:e}:{x:0,y:0,w:n,h:s?e:r.y},a=54,c=Math.max(1,Math.floor((r.h-140)/a));return{panel:r,model:o,rowHeight:a,capacity:c,pages:Math.max(1,Math.ceil(t/c))}}function xx(n,e,t,i,s=0){let r=n.panel;if(e<r.x||e>r.x+r.w||t<r.y||t>r.y+r.h)return null;let o=n.sectionButtons?.find(u=>e>=u.x&&e<u.x+u.w&&t>=u.y&&t<u.y+u.h);if(o)return o.key;let a=n.headerButtons?.find(u=>e>=u.x&&e<u.x+u.w&&t>=u.y&&t<u.y+u.h);if(a)return a.row.disabled?"__panel":a.row.key;if(t>=r.y+r.h-46)return e<r.x+r.w/2?"__previous":"__next";let c=n.placed?.find(u=>t>=u.y&&t<u.y+u.h),l=Math.floor((t-r.y-88)/n.rowHeight);if(!n.placed&&(l<0||l>=n.capacity))return"__panel";let f=n.placed?c?.row:i[s*n.capacity+l];return f&&f.kind!=="text"&&!f.disabled?f.key:"__panel"}function yx(n,e,t,i=140){let s=Math.max(16,Math.floor((e-48)/8)),r=Math.max(2,Math.floor((t-i-10)/18)),o=[[]],a=0;function c(l){let f=String(l??"").split(/\s+/),u=[],h="";for(let d of f){for(;d.length>s;)h&&(u.push(h),h=""),u.push(d.slice(0,s)),d=d.slice(s);h.length+d.length+1>s?(u.push(h),h=d):h+=(h?" ":"")+d}return h&&u.push(h),u}for(let l of n){let f=c(l.label),u=c(l.value),h=[...f,...u];for(let d=0;d<Math.max(1,h.length);d+=r){let p=h.slice(d,d+r),g=Math.max(48,p.length*18+14);a+g>t-i&&o.at(-1).length&&(o.push([]),a=0),o.at(-1).push({row:{...l,label:p.join(`
`),value:null},h:g}),a+=g}}return o}function pd(){let n=new Dn,e=new Yn(0,1,0,1,-10,10),t={rows:[]},i=null,s=fd(1,1),r=0,o=null,a=new Map,c=[],l={panel:"#f1efe7",ink:"#202a29",muted:"#596359",line:"#c9cec2",info:"#e8e6de",field:"#fffef9",action:"#dde6d8",accent:"#465144",disabled:"#e4e4dd",disabledInk:"#73796f"};function f(){for(let p of c)p.dispose();c.length=0,n.clear()}function u(p,g,_,m,M,A=0){let v=new Un(_,m),w=new oi({color:M,side:Tt,toneMapped:!1,depthTest:!1,depthWrite:!1});c.push(v,w);let b=new Ne(v,w);b.position.set(p+_/2,g+m/2,A),n.add(b)}function h(p,g,_,m,M,A=14,v=l.ink,w=A>=20?"600":"400"){let b=document.createElement("canvas"),D=2;b.width=Math.max(2,Math.ceil(m*D)),b.height=Math.max(2,Math.ceil(M*D));let x=b.getContext("2d");x.scale(D,D),x.font=`${w} ${A}px system-ui, sans-serif`,x.fillStyle=v,x.textBaseline="middle";let T=[];for(let R of String(p??"").split(`
`)){let N=R.split(/\s+/),O="";for(let V of N){let Q=O?O+" "+V:V;x.measureText(Q).width>m-4&&O?(T.push(O),O=V):O=Q}O&&T.push(O)}T.forEach((R,N)=>x.fillText(R,2,(N+.5)*A*1.25,m-4));let C=new nr(b);C.colorSpace=Ft;let U=new oi({map:C,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,side:Tt}),E=new Un(m,M);c.push(C,U,E);let P=new Ne(E,U);P.scale.y=-1,P.position.set(g+m/2,_+M/2,2),n.add(P)}function d(p,g){o=[p,g],f();let _=t.rows.find(R=>R.utility==="language"),m=t.rows.filter(R=>R.utility!=="language"),M=t.lang==="fr"?{task:"En cours",teams:"\xC9quipes",market:"Manche",tools:"Gestion",inspect:"Explorer",help:"Aide / sauvegarde"}:{task:"Current",teams:"Teams",market:"Round",tools:"Manage",inspect:"Inspect",help:"Help / save"},A=Object.keys(M).filter(R=>m.some(N=>(N.section||"task")===R)),v=A.includes(t.section)?t.section:A[0]||"task",w=m.filter(R=>(R.section||"task")===v);s=fd(p,g,w.length);let b=s.panel.h<300,D=b?48:88,x=A.length>1?b?1:Math.ceil(A.length/3):0;s.contentY=D+x*48,s.section=v,a=new Map;let T=yx(w,s.panel.w,s.panel.h,s.contentY+48);s.pages=T.length,r=Math.min(Math.max(0,Number(t.page)||0),s.pages-1),e.left=0,e.right=p,e.top=0,e.bottom=g,e.updateProjectionMatrix();let C=s.panel;if(u(C.x,C.y,C.w,C.h,l.panel),u(C.x,C.y,1,C.h,l.line,1),s.headerButtons=[],_){let R={row:_,x:C.x+C.w-62,y:C.y+(b?0:10),w:48,h:44};s.headerButtons.push(R),u(R.x,R.y,R.w,R.h,l.field,1),h(_.label,R.x+8,R.y+12,R.w-16,28,14,l.accent)}h(t.title,C.x+20,C.y+14,C.w-(_?100:40),30,22),b||h(t.subtitle,C.x+20,C.y+48,C.w-40,36,12,l.muted),u(C.x+20,C.y+D-4,C.w-40,1,l.line,1),s.sectionButtons=[];let U=b&&x?[A[(A.indexOf(v)+A.length-1)%A.length],v,A[(A.indexOf(v)+1)%A.length]]:A;x&&U.forEach((R,N)=>{let O={key:"__section:"+String(t.sectionEpoch||0)+":"+R,x:C.x+14+N%3*(C.w-28)/3,y:C.y+D+Math.floor(N/3)*48,w:(C.w-28)/3-4,h:44};a.set(O.key,R),s.sectionButtons.push(O),u(O.x,O.y,O.w,O.h,R===v?l.action:l.field,1),h(M[R],O.x+6,O.y+9,O.w-12,32,12,R===v?l.ink:l.muted)});let E=C.y+s.contentY;s.placed=[];for(let R of T[r]){let{row:N,h:O}=R;s.placed.push({row:N,y:E,h:O});let V=N.kind==="text",Q=!V&&!N.disabled,J=N.emphasis==="danger"?"#eee0d8":N.emphasis==="primary"?"#cfddca":l.action;u(C.x+14,E,C.w-28,O-6,V?l.info:N.disabled?l.disabled:N.kind==="button"?J:l.field,1),V||(u(C.x+14,E+O-7,C.w-28,1,l.line,1),Q&&u(C.x+14,E,3,O-6,N.emphasis==="danger"?"#915e49":l.accent,1)),h(N.label,C.x+24,E+7,C.w-48,O-14,14,N.disabled?l.disabledInk:V?l.muted:l.ink),E+=O}let P=C.y+C.h-42;return u(C.x+14,P,C.w-28,34,l.field,1),u(C.x+C.w/2,P+7,1,20,l.line,1),h(`\u2039  Page ${r+1} / ${s.pages}  \u203A`,C.x+28,C.y+C.h-37,C.w-56,26,14,l.accent),s}return{scene:n,camera:e,set(p,g,_,m){return t={...p,rows:(p.rows||[]).map(M=>({...M}))},i=g,d(_,m)},resize(p,g){return o?.[0]===p&&o?.[1]===g?s:d(p,g)},hit(p,g){return xx(s,p,g,t.rows,r)},activate(p){if(p?.startsWith("__section:")){let g=a.get(p);g&&(t.section=g,t.page=0,i?.("__section",g),o&&d(...o));return}if(p==="__previous"||p==="__next"){let g=Math.max(0,Math.min(s.pages-1,r+(p==="__next"?1:-1)));g!==r&&(t.page=g,i?.(p,g),r!==g&&o&&d(...o));return}p&&p!=="__panel"&&i?.(p)},get layout(){return s},dispose:f}}function vx(n,e,t){let i=new Wa({antialias:!0,alpha:!1,powerPreference:"low-power"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),i.outputColorSpace=Ft,i.toneMapping=Er,i.toneMappingExposure=.95,i.shadowMap.enabled=!0,i.shadowMap.type=Li,i.domElement.tabIndex=0,n.appendChild(i.domElement);let s=pd(),r=!1,o=new Dn;o.background=new Ze("#f0f3f0");let a=new Rs(i),c=new Ya,l=a.fromScene(c,.04);o.environment=l.texture,o.environmentIntensity=.65,c.dispose(),a.dispose(),o.add(new _r(15135231,7433055,.28));let f=new Ii(16773595,1.8);f.position.set(-5,9,6),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),Object.assign(f.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:.1,far:50}),f.shadow.normalBias=.015,f.shadow.bias=-1e-4,f.shadow.radius=5,o.add(f);let u=new Ii(15134719,.3);u.position.set(-6,5,-7),o.add(u);let h=new Ot(38,1,.01,100),d=new Ja(h,i.domElement);d.enableDamping=!1,d.enablePan=!1,d.enableRotate=!1,d.minZoom=.25,d.maxZoom=5,d.maxPolarAngle=Math.PI*.49;let p=new Ne(new Un(100,100),new mr({opacity:.17}));p.rotation.x=-Math.PI/2,p.receiveShadow=!0,o.add(p);let g=null,_=!1,m=null,M=0,A=!0,v=null,w=[7,4.5,7],b=null,D=null,x="assembled",T=.7,C=null,U=null;function E(){if(M=0,!A)return;let ie=Math.max(n.clientWidth,1),ge=Math.max(n.clientHeight,1);if(i.setViewport(0,0,ie,ge),i.setScissorTest(!1),i.clear(),m){let G=r?s.layout.model:{x:0,y:0,w:ie,h:ge};i.setViewport(G.x,ge-G.y-G.h,G.w,G.h),i.setScissor(G.x,ge-G.y-G.h,G.w,G.h),i.setScissorTest(!0),i.render(o,h)}r&&(i.setScissorTest(!1),i.setViewport(0,0,ie,ge),i.autoClear=!1,i.clearDepth(),i.render(s.scene,s.camera),i.autoClear=!0)}function P(){A&&!M&&(M=requestAnimationFrame(E))}d.addEventListener("change",P);function R(){let ie=Math.max(n.clientWidth,1),ge=Math.max(n.clientHeight,1);if(i.setSize(ie,ge,!1),r&&s.resize(ie,ge),!m){P();return}let G=r?s.layout.model:{w:ie,h:ge};b.apply(0);let j=new Et().setFromObject(m,!0);x==="exploded"&&(b.apply(1),j.union(new Et().setFromObject(m,!0))),p.position.y=j.min.y-.025,d.target.copy(ud(h,m,G.w/G.h,w,j)),dd(f,m,p.position.y,j),b.apply(x==="exploded"?T:0),d.update(),U?.update(),P()}function N(){if(!m)return;o.remove(m);let ie=new Set,ge=new Set,G=new Set;m.traverse(j=>{j.geometry&&ie.add(j.geometry),j.material&&(Array.isArray(j.material)?j.material:[j.material]).forEach(ue=>ge.add(ue))}),ie.forEach(j=>j.dispose()),ge.forEach(j=>{for(let ue of Object.values(j))ue?.isTexture&&G.add(ue);j.dispose()}),G.forEach(j=>j.dispose()),m=null}function O(ie,ge){v=[ie,ge],V(),N();let G=zi();if(m=new yt,ge.startsWith("part:")){let Ce=ge.slice(5);if(![ie.current?.id,...ie.owned.map(ot=>ot.id)].includes(Ce))throw Error("Part is not visible");m.add(Lc(Ce,G))}else m.add(ge==="configuration"?ld(ie.mission,ie.owned,G):Dc(ie.mission,G));let j=m.children[0],ue=new Et().setFromObject(j).getCenter(new L);j.position.sub(ue),m.position.copy(ue),b=hd(j);for(let Ce of b.parts)Ce.anchorLocal=m.worldToLocal(Ce.center.clone());m.traverse(Ce=>{if(Ce.isMesh){let ot=(Array.isArray(Ce.material)?Ce.material:[Ce.material]).some(se=>se.name==="optical glass");Ce.castShadow=!ot,Ce.receiveShadow=!0}}),o.add(m);let Ge=new Et().setFromObject(m);p.position.y=Ge.min.y-.025,h.zoom=1,w=[7,4.5,7],R(),D=cd(j);let Ae=new Set;m.traverse(Ce=>{Ce.material&&Ae.add(Ce.material)}),Object.values(G).forEach(Ce=>{Ae.has(Ce)||Ce.dispose()})}function V(){D?.dispose(),D=null,C&&(C.removeFromParent(),C.geometry.dispose(),C.material.dispose(),C=null),U&&(o.remove(U),U.geometry.dispose(),U.material.dispose(),U=null),b=null}function Q(ie,ge){if(!b)return;if(!["assembled","exploded","cutaway"].includes(ie)||!Number.isFinite(ge)||ge<0||ge>1)throw Error("Invalid inspection view");let G=x!==ie;if(x=ie,T=ge,b.apply(x==="exploded"?T:0),D?.apply(x==="cutaway"),C&&(C.removeFromParent(),C.geometry.dispose(),C.material.dispose(),C=null),x==="exploded"){let j=[];for(let ue of b.parts)j.push(ue.anchorLocal.clone(),m.worldToLocal(new Et().setFromObject(ue.object).getCenter(new L)));C=new fs(new gt().setFromPoints(j),new Ri({color:"#748879",transparent:!0,opacity:.5})),m.add(C)}U?.update(),G?R():P()}let J=new ce,q=new Sr,K=null,ae=null;function pe(ie){if(!r)return null;let ge=i.domElement.getBoundingClientRect();return s.hit((ie.clientX-ge.left)*n.clientWidth/ge.width,(ie.clientY-ge.top)*n.clientHeight/ge.height)}i.domElement.addEventListener("pointerdown",ie=>{let ge=pe(ie);ge&&(ae=ge,ie.preventDefault(),ie.stopImmediatePropagation(),i.domElement.setPointerCapture(ie.pointerId))},!0),i.domElement.addEventListener("pointermove",ie=>{(ae||pe(ie))&&(ie.stopImmediatePropagation(),i.domElement.style.cursor=pe(ie)&&pe(ie)!=="__panel"?"pointer":"default")},!0),i.domElement.addEventListener("pointerup",ie=>{if(ae){let ge=ae;ae=null,ie.preventDefault(),ie.stopImmediatePropagation(),pe(ie)===ge&&(s.activate(ge),R())}},!0),i.domElement.addEventListener("wheel",ie=>{pe(ie)&&(ie.preventDefault(),ie.stopImmediatePropagation(),s.activate(ie.deltaY>0?"__next":"__previous"),R())},{capture:!0,passive:!1}),i.domElement.addEventListener("pointerdown",ie=>{K=[ie.clientX,ie.clientY],g=[ie.clientX,ie.clientY],_=!1,i.domElement.setPointerCapture(ie.pointerId)}),i.domElement.addEventListener("pointermove",ie=>{if(!g||!m)return;let ge=ie.clientX-g[0];Math.hypot(ie.clientX-K[0],ie.clientY-K[1])>4&&(_=!0,m.rotation.y+=ge*.009,m.updateWorldMatrix(!0,!0),U?.update(),R()),g=[ie.clientX,ie.clientY]}),i.domElement.addEventListener("pointercancel",()=>{g=null,K=null,ae=null}),i.domElement.addEventListener("pointerup",ie=>{if(g=null,_||!K||Math.hypot(ie.clientX-K[0],ie.clientY-K[1])>5){K=null;return}if(K=null,!m||!A)return;let ge=i.domElement.getBoundingClientRect(),G=r?s.layout.model:{x:0,y:0,w:n.clientWidth,h:n.clientHeight};J.set(((ie.clientX-ge.left)*n.clientWidth/ge.width-G.x)/G.w*2-1,1-((ie.clientY-ge.top)*n.clientHeight/ge.height-G.y)/G.h*2),q.setFromCamera(J,h);for(let j of q.intersectObject(m,!0)){let ue=j.object;for(;ue&&!ue.userData.mountedCard;)ue=ue.parent;if(ue?.userData.mountedCard){t?.(ue.userData.mountedCard);break}}});let ke=new ResizeObserver(R);return ke.observe(n),i.domElement.addEventListener("webglcontextlost",ie=>{ie.preventDefault(),A=!1,M&&cancelAnimationFrame(M),M=0,e()}),i.domElement.addEventListener("webglcontextrestored",()=>{A=!0,v&&(O(...v),n.dispatchEvent(new Event("sea3drestored")))}),{update:O,inspect:Q,interface(ie,ge){r=!0;let G=s.set(ie,ge,Math.max(n.clientWidth,1),Math.max(n.clientHeight,1));return R(),G},shadows(ie){i.shadowMap.enabled=!!ie,p.visible=!!ie,P()},parts(){return b?.parts.map(ie=>ie.key)||[]},focus(ie){let ge=b?.parts.find(G=>G.key===ie);ge&&(U&&(o.remove(U),U.geometry.dispose(),U.material.dispose()),U=new Mr(ge.object,14001476),o.add(U),P())},view(ie){m&&(m.rotation.y=0),w=ie==="rear"?[-7,4.5,-7]:ie==="front"?[7,2.7,0]:[7,4.5,7],h.zoom=1,R()},dispose(){A=!1,ke.disconnect(),d.dispose(),s.dispose(),V(),N(),p.geometry.dispose(),p.material.dispose(),l.dispose(),i.dispose(),M&&cancelAnimationFrame(M),i.domElement.remove()}}}return Ad(Sx);})();
