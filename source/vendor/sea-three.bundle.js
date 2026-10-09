var SEAThree=(()=>{var Qo=Object.defineProperty;var gd=Object.getOwnPropertyDescriptor;var _d=Object.getOwnPropertyNames;var xd=Object.prototype.hasOwnProperty;var yd=(i,t)=>{for(var e in t)Qo(i,e,{get:t[e],enumerable:!0})},vd=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of _d(t))!xd.call(i,s)&&s!==e&&Qo(i,s,{get:()=>t[s],enumerable:!(n=gd(t,s))||n.enumerable});return i};var Md=i=>vd(Qo({},"__esModule",{value:!0}),i);var cx={};yd(cx,{mount:()=>lx});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Th=0,Ol=1,wh=2;var Li=1,Ah=2,ys=3,li=0,Be=1,Ne=2,Pn=0,vs=1,Bl=2,zl=3,kl=4,Rh=5;var Di=100,Ch=101,Ph=102,Ih=103,Lh=104,Dh=200,Nh=201,Uh=202,Fh=203,Vl=204,Hl=205,Oh=206,Bh=207,zh=208,kh=209,Vh=210,Hh=211,Gh=212,Wh=213,Xh=214,pa=0,ma=1,ga=2,is=3,_a=4,xa=5,ya=6,va=7,Ka=0,qh=1,Yh=2,yn=0,Gl=1,Wl=2,Xl=3,Sr=4,ql=5,Yl=6,Zl=7;var Jl=300,ci=301,Ni=302,$a=303,ja=304,br=306,ss=1e3,Tn=1001,Ma=1002,De=1003,Zh=1004;var Er=1005;var Oe=1006,Qa=1007;var hi=1008;var Je=1009,Kl=1010,$l=1011,Ms=1012,to=1013,vn=1014,ln=1015,Mn=1016,eo=1017,no=1018,Ss=1020,jl=35902,Ql=35899,tc=1021,ec=1022,cn=1023,wn=1026,ui=1027,io=1028,so=1029,di=1030,ro=1031;var ao=1033,Tr=33776,wr=33777,Ar=33778,Rr=33779,oo=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37488,go=37489,Cr=37490,_o=37491,xo=37808,yo=37809,vo=37810,Mo=37811,So=37812,bo=37813,Eo=37814,To=37815,wo=37816,Ao=37817,Ro=37818,Co=37819,Po=37820,Io=37821,Lo=36492,Do=36494,No=36495,Uo=36283,Fo=36284,Pr=36285,Oo=36286;var Xs=2300,Sa=2301,da=2302,Tl=2303,wl=2400,Al=2401,Rl=2402;var Jh=3200;var Ir=0,Kh=1,Hn="",Ue="srgb",qs="srgb-linear",Ys="linear",ce="srgb";var fa=7680;var $h=519,jh=512,Qh=513,tu=514,Bo=515,eu=516,nu=517,zo=518,iu=519,su=35044;var nc="300 es",mn=2e3,rs=2001;function Sd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){let i=Zs("canvas");return i.style.display="block",i}var Gc={},as=null;function ic(...i){let t="THREE."+i.shift();as?as("log",t,...i):console.log(t,...i)}function au(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=au(i);let t="THREE."+i.shift();if(as)as("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=au(i);let t="THREE."+i.shift();if(as)as("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Mi(...i){let t=i.join(" ");t in Gc||(Gc[t]=!0,kt(...i))}function ou(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lu={[pa]:ma,[ga]:ya,[_a]:va,[is]:xa,[ma]:pa,[ya]:ga,[va]:_a,[xa]:is},gn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=1234567,Vs=Math.PI/180,os=180/Math.PI;function Ui(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function sc(i,t){return(i%t+t)%t}function Ed(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Td(i,t,e){return i!==t?(e-i)/(t-i):0}function Hs(i,t,e){return(1-e)*i+e*t}function wd(i,t,e,n){return Hs(i,t,1-Math.exp(-e*n))}function Ad(i,t=1){return t-Math.abs(sc(i,t*2)-t)}function Rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Id(i,t){return i+Math.random()*(t-i)}function Ld(i){return i*(.5-Math.random())}function Dd(i){i!==void 0&&(Wc=i);let t=Wc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(i){return i*Vs}function Ud(i){return i*os}function Fd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*u,o*c);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Lr={DEG2RAD:Vs,RAD2DEG:os,generateUUID:Ui,clamp:$t,euclideanModulo:sc,mapLinear:Ed,inverseLerp:Td,lerp:Hs,damp:wd,pingpong:Ad,smoothstep:Rd,smootherstep:Cd,randInt:Pd,randFloat:Id,randFloatSpread:Ld,seededRandom:Dd,degToRad:Nd,radToDeg:Ud,isPowerOfTwo:Fd,ceilPowerOfTwo:Od,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:zd,normalize:We,denormalize:es},at=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(d!==_||l!==h||c!==f||u!==m){let g=l*h+c*f+u*m+d*_;g<0&&(h=-h,f=-f,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let S=Math.acos(g),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,l=l*p+h*o,c=c*p+f*o,u=u*p+m*o,d=d*p+_*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+m*o,d=d*p+_*o;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+u*d+l*f-c*h,t[e+1]=l*m+u*h+c*d-o*f,t[e+2]=c*m+u*f+o*h-l*d,t[e+3]=u*m-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tl.copy(this).projectOnVector(t),this.sub(tl)}reflect(t){return this.sub(tl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tl=new C,Xc=new tn,Zt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],S=s[1],w=s[4],v=s[7],E=s[2],b=s[5],R=s[8];return r[0]=a*_+o*S+l*E,r[3]=a*g+o*w+l*b,r[6]=a*p+o*v+l*R,r[1]=c*_+u*S+d*E,r[4]=c*g+u*w+d*b,r[7]=c*p+u*v+d*R,r[2]=h*_+f*S+m*E,r[5]=h*g+f*w+m*b,r[8]=h*p+f*v+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,m=e*d+n*h+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Mi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(el.makeScale(t,e)),this}rotate(t){return Mi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(el.makeRotation(-t)),this}translate(t,e){return Mi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},el=new Zt,qc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kd(){let i={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qs]:{primaries:t,whitePoint:n,transfer:Ys,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var ie=kd();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vi,ba=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vi===void 0&&(Vi=Zs("canvas")),Vi.width=t.width,Vi.height=t.height;let s=Vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Zs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vd=0,ls=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nl(s[a].image)):r.push(nl(s[a]))}else r=nl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var Hd=0,il=new C,qe=class i extends gn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Tn,s=Tn,r=Oe,a=hi,o=cn,l=Je,c=i.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Ui(),this.name="",this.source=new ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ss:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ss:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Jl;qe.DEFAULT_ANISOTROPY=1;var Me=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(f+1)/2,E=(p+1)/2,b=(u+h)/4,R=(d+_)/4,y=(m+g)/4;return w>v&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=R/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=y/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ea=class extends gn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new qe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ls(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Ea{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Js=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ta=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var de=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,m,_,g)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,m=o*u,_=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,m=c*u,_=c*d;e[0]=h+_*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-m,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,m=c*u,_=c*d;e[0]=h-_*o,e[4]=-a*d,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,m=o*u,_=o*d;e[0]=l*u,e[4]=m*c-f,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*u,e[4]=_-h*d,e[8]=m*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+m,e[10]=h-_*d}else if(t.order==="XZY"){let h=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=a*u,e[9]=f*d-m,e[2]=m*d-f,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gd,t,Wd)}lookAt(t,e,n){let s=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),Yn.crossVectors(n,$e),Yn.lengthSq()===0&&(Math.abs(n.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),Yn.crossVectors(n,$e)),Yn.normalize(),Vr.crossVectors($e,Yn),s[0]=Yn.x,s[4]=Vr.x,s[8]=$e.x,s[1]=Yn.y,s[5]=Vr.y,s[9]=$e.y,s[2]=Yn.z,s[6]=Vr.z,s[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],S=n[3],w=n[7],v=n[11],E=n[15],b=s[0],R=s[4],y=s[8],T=s[12],P=s[1],N=s[5],F=s[9],z=s[13],L=s[2],O=s[6],q=s[10],X=s[14],st=s[3],Z=s[7],j=s[11],Q=s[15];return r[0]=a*b+o*P+l*L+c*st,r[4]=a*R+o*N+l*O+c*Z,r[8]=a*y+o*F+l*q+c*j,r[12]=a*T+o*z+l*X+c*Q,r[1]=u*b+d*P+h*L+f*st,r[5]=u*R+d*N+h*O+f*Z,r[9]=u*y+d*F+h*q+f*j,r[13]=u*T+d*z+h*X+f*Q,r[2]=m*b+_*P+g*L+p*st,r[6]=m*R+_*N+g*O+p*Z,r[10]=m*y+_*F+g*q+p*j,r[14]=m*T+_*z+g*X+p*Q,r[3]=S*b+w*P+v*L+E*st,r[7]=S*R+w*N+v*O+E*Z,r[11]=S*y+w*F+v*q+E*j,r[15]=S*T+w*z+v*X+E*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15],S=l*f-c*h,w=o*f-c*d,v=o*h-l*d,E=a*f-c*u,b=a*h-l*u,R=a*d-o*u;return e*(_*S-g*w+p*v)-n*(m*S-g*E+p*b)+s*(m*w-_*E+p*R)-r*(m*v-_*b+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],S=e*o-n*a,w=e*l-s*a,v=e*c-r*a,E=n*l-s*o,b=n*c-r*o,R=s*c-r*l,y=u*_-d*m,T=u*g-h*m,P=u*p-f*m,N=d*g-h*_,F=d*p-f*_,z=h*p-f*g,L=S*z-w*F+v*N+E*P-b*T+R*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return t[0]=(o*z-l*F+c*N)*O,t[1]=(s*F-n*z-r*N)*O,t[2]=(_*R-g*b+p*E)*O,t[3]=(h*b-d*R-f*E)*O,t[4]=(l*P-a*z-c*T)*O,t[5]=(e*z-s*P+r*T)*O,t[6]=(g*v-m*R-p*w)*O,t[7]=(u*R-h*v+f*w)*O,t[8]=(a*F-o*P+c*y)*O,t[9]=(n*P-e*F-r*y)*O,t[10]=(m*b-_*v+p*S)*O,t[11]=(d*v-u*b-f*S)*O,t[12]=(o*T-a*N-l*y)*O,t[13]=(e*N-n*T+s*y)*O,t[14]=(_*w-m*E-g*S)*O,t[15]=(u*E-d*w+h*S)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,m=r*d,_=a*u,g=a*d,p=o*d,S=l*c,w=l*u,v=l*d,E=n.x,b=n.y,R=n.z;return s[0]=(1-(_+p))*E,s[1]=(f+v)*E,s[2]=(m-w)*E,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(h+p))*b,s[6]=(g+S)*b,s[7]=0,s[8]=(m+w)*R,s[9]=(g-S)*R,s[10]=(1-(h+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Hi.set(s[0],s[1],s[2]).length(),o=Hi.set(s[4],s[5],s[6]).length(),l=Hi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),dn.copy(this);let c=1/a,u=1/o,d=1/l;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,e.setFromRotationMatrix(dn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=mn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===mn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===rs)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===mn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===rs)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Hi=new C,dn=new de,Gd=new C(0,0,0),Wd=new C(1,1,1),Yn=new C,Vr=new C,$e=new C,Zc=new de,Jc=new tn,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var cs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xd=0,Kc=new C,Gi=new tn,Nn=new de,Hr=new C,Ds=new C,qd=new C,Yd=new tn,$c=new C(1,0,0),jc=new C(0,1,0),Qc=new C(0,0,1),th={type:"added"},Zd={type:"removed"},Wi={type:"childadded",child:null},sl={type:"childremoved",child:null},Re=class i extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new An,n=new tn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Zt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis($c,t)}rotateY(t){return this.rotateOnAxis(jc,t)}rotateZ(t){return this.rotateOnAxis(Qc,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($c,t)}translateY(t){return this.translateOnAxis(jc,t)}translateZ(t){return this.translateOnAxis(Qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hr.copy(t):Hr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ds,Hr,this.up):Nn.lookAt(Hr,Ds,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(th),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zd),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(th),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,Yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Re.DEFAULT_UP=new C(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jd={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function rl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=sc(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=rl(a,r,t+1/3),this.g=rl(a,r,t),this.b=rl(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ie.workingToColorSpace(Ve.copy(this),t),Math.round($t(Ve.r*255,0,255))*65536+Math.round($t(Ve.g*255,0,255))*256+Math.round($t(Ve.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ve.copy(this),e);let n=Ve.r,s=Ve.g,r=Ve.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Ue){ie.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,s=Ve.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(Gr);let n=Hs(Zn.h,Gr.h,e),s=Hs(Zn.s,Gr.s,e),r=Hs(Zn.l,Gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Yt;Yt.NAMES=cu;var Rn=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},fn=new C,Un=new C,al=new C,Fn=new C,Xi=new C,qi=new C,eh=new C,ol=new C,ll=new C,cl=new C,hl=new Me,ul=new Me,dl=new Me,jn=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fn.subVectors(t,e),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fn.subVectors(s,e),Un.subVectors(n,e),al.subVectors(t,e);let a=fn.dot(fn),o=fn.dot(Un),l=fn.dot(al),c=Un.dot(Un),u=Un.dot(al),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,m=(a*u-o*l)*h;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return hl.setScalar(0),ul.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,n),dl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(hl,r.x),a.addScaledVector(ul,r.y),a.addScaledVector(dl,r.z),a}static isFrontFacing(t,e,n,s){return fn.subVectors(n,e),Un.subVectors(t,e),fn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Xi.subVectors(s,n),qi.subVectors(r,n),ol.subVectors(t,n);let l=Xi.dot(ol),c=qi.dot(ol);if(l<=0&&c<=0)return e.copy(n);ll.subVectors(t,s);let u=Xi.dot(ll),d=qi.dot(ll);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Xi,a);cl.subVectors(t,r);let f=Xi.dot(cl),m=qi.dot(cl);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(qi,o);let g=u*m-f*d;if(g<=0&&d-u>=0&&f-m>=0)return eh.subVectors(r,s),o=(d-u)/(d-u+(f-m)),e.copy(s).addScaledVector(eh,o);let p=1/(g+_+h);return a=_*p,o=h*p,e.copy(n).addScaledVector(Xi,a).addScaledVector(qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Te=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),Xr.subVectors(this.max,Ns),Yi.subVectors(t.a,Ns),Zi.subVectors(t.b,Ns),Ji.subVectors(t.c,Ns),Jn.subVectors(Zi,Yi),Kn.subVectors(Ji,Zi),gi.subVectors(Yi,Ji);let e=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-gi.z,gi.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,gi.z,0,-gi.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-gi.y,gi.x,0];return!fl(e,Yi,Zi,Ji,Xr)||(e=[1,0,0,0,1,0,0,0,1],!fl(e,Yi,Zi,Ji,Xr))?!1:(qr.crossVectors(Jn,Kn),e=[qr.x,qr.y,qr.z],fl(e,Yi,Zi,Ji,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},On=[new C,new C,new C,new C,new C,new C,new C,new C],pn=new C,Wr=new Te,Yi=new C,Zi=new C,Ji=new C,Jn=new C,Kn=new C,gi=new C,Ns=new C,Xr=new C,qr=new C,_i=new C;function fl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_i.fromArray(i,r);let o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ae=new C,Yr=new at,Kd=0,Xe=class extends gn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ks=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $s=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},$d=new Te,Us=new C,pl=new C,kn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);let e=Us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add(pl)),this.expandByPoint(Us.copy(t.center).sub(pl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},jd=0,on=new de,ml=new Re,Ki=new C,je=new Te,Fs=new Te,Le=new C,ve=class i extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?$s:Ks)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return ml.lookAt(t),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Te);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Le.addVectors(je.min,Fs.min),je.expandByPoint(Le),Le.addVectors(je.max,Fs.max),je.expandByPoint(Le)):(je.expandByPoint(Fs.min),je.expandByPoint(Fs.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Le.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(t,c),Le.add(Ki)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new C,l[y]=new C;let c=new C,u=new C,d=new C,h=new at,f=new at,m=new at,_=new C,g=new C;function p(y,T,P){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),h.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,P),u.sub(c),d.sub(c),f.sub(h),m.sub(h);let N=1/(f.x*m.y-m.x*f.y);isFinite(N)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(N),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(N),o[y].add(_),o[T].add(_),o[P].add(_),l[y].add(g),l[T].add(g),l[P].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let y=0,T=S.length;y<T;++y){let P=S[y],N=P.start,F=P.count;for(let z=N,L=N+F;z<L;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let w=new C,v=new C,E=new C,b=new C;function R(y){E.fromBufferAttribute(s,y),b.copy(E);let T=o[y];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),v.crossVectors(b,T);let N=v.dot(l[y])<0?-1:1;a.setXYZW(y,w.x,w.y,w.z,N)}for(let y=0,T=S.length;y<T;++y){let P=S[y],N=P.start,F=P.count;for(let z=N,L=N+F;z<L;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,u=new C,d=new C;if(t)for(let h=0,f=t.count;h<f;h+=3){let m=t.getX(h+0),_=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[m++]=c[f++]}return new Xe(h,u,d)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gl=new C,Qd=new C,tf=new Zt,Qe=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gl.subVectors(n,e).cross(Qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(gl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||tf.getNormalMatrix(t),s=this.coplanarPoint(gl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ef=0,_n=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=vs,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Hl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Qe().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Bn=new C,_l=new C,Zr=new C,Jr=new C,Qn=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_l.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),Jr.copy(this.origin).sub(_l);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Zr),o=Jr.dot(this.direction),l=-Jr.dot(Zr),c=Jr.lengthSq(),u=Math.abs(1-a*a),d,h,f,m;if(u>0)if(d=a*l-o,h=a*o-l,m=r*u,d>=0)if(h>=-m)if(h<=m){let _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_l).addScaledVector(Zr,h),f}intersectSphere(t,e){if(t.radius<0)return null;Bn.subVectors(t.center,this.origin);let n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,m=e.x-a.x,_=e.y-a.y,g=e.z-a.z,p=n.x-a.x,S=n.y-a.y,w=n.z-a.z,v=Math.abs(l),E=Math.abs(c),b=Math.abs(u),R,y,T,P,N,F,z,L,O,q,X,st;if(v>=E&&v>=b?(T=l,F=d,O=m,st=p,l>=0?(R=c,y=u,P=h,N=f,z=_,L=g,q=S,X=w):(R=u,y=c,P=f,N=h,z=g,L=_,q=w,X=S)):E>=b?(T=c,F=h,O=_,st=S,c>=0?(R=u,y=l,P=f,N=d,z=g,L=m,q=w,X=p):(R=l,y=u,P=d,N=f,z=m,L=g,q=p,X=w)):(T=u,F=f,O=g,st=w,u>=0?(R=l,y=c,P=d,N=h,z=m,L=_,q=p,X=S):(R=c,y=l,P=h,N=d,z=_,L=m,q=S,X=p)),T===0)return null;let Z=R/T,j=y/T,Q=1/T,It=P-Z*F,At=N-j*F,it=z-Z*O,dt=L-j*O,Ct=q-Z*st,H=X-j*st,J=Ct*dt-H*it,Mt=It*H-At*Ct,Vt=it*At-dt*It;if(s){if(J<0||Mt<0||Vt<0)return null}else if((J<0||Mt<0||Vt<0)&&(J>0||Mt>0||Vt>0))return null;let ft=J+Mt+Vt;if(ft===0)return null;let Wt=Q*(J*F+Mt*O+Vt*st);return(ft>0?Wt<0:Wt>0)?null:this.at(Wt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ti=class extends _n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nh=new de,xi=new Qn,Kr=new kn,ih=new C,$r=new C,jr=new C,Qr=new C,xl=new C,ta=new C,sh=new C,ea=new C,jt=class extends Re{constructor(t=new ve,e=new ti){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(xl.fromBufferAttribute(d,t),a?ta.addScaledVector(xl,u):ta.addScaledVector(xl.sub(e),u))}e.add(ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(Kr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Kr,ih)===null||xi.origin.distanceToSquared(ih)>(t.far-t.near)**2))&&(nh.copy(r).invert(),xi.copy(t.ray).applyMatrix4(nh),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){let g=h[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,E=w;v<E;v+=3){let b=o.getX(v),R=o.getX(v+1),y=o.getX(v+2);s=na(this,p,t,n,c,u,d,b,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let S=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);s=na(this,a,t,n,c,u,d,S,w,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=h.length;m<_;m++){let g=h[m],p=a[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,E=w;v<E;v+=3){let b=v,R=v+1,y=v+2;s=na(this,p,t,n,c,u,d,b,R,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let S=g,w=g+1,v=g+2;s=na(this,a,t,n,c,u,d,S,w,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function nf(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===li,o),l===null)return null;ea.copy(o),ea.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:i}}function na(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,$r),i.getVertexPosition(l,jr),i.getVertexPosition(c,Qr);let u=nf(i,t,e,n,$r,jr,Qr,sh);if(u){let d=new C;jn.getBarycoord(sh,$r,jr,Qr,d),s&&(u.uv=jn.getInterpolatedAttribute(s,o,l,c,d,new at)),r&&(u.uv1=jn.getInterpolatedAttribute(r,o,l,c,d,new at)),a&&(u.normal=jn.getInterpolatedAttribute(a,o,l,c,d,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new C,materialIndex:0};jn.getNormal($r,jr,Qr,h.normal),u.face=h,u.barycoord=d}return u}var Si=class extends qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=De,u=De,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var js=class extends Xe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},$i=new de,rh=new de,ia=[],ah=new Te,sf=new de,Os=new jt,Bs=new kn,Qs=class extends jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new js(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Te),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),ah.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(ah)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Bs.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),rh.multiplyMatrices(n,$i),Os.matrixWorld=rh,Os.raycast(t,ia);for(let a=0,o=ia.length;a<o;a++){let l=ia[a];l.instanceId=r,l.object=this,e.push(l)}ia.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Si(new Float32Array(s*this.count),s,this.count,io,ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yi=new kn,rf=new at(.5,.5),sa=new C,us=class{constructor(t=new Qe,e=new Qe,n=new Qe,s=new Qe,r=new Qe,a=new Qe){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],S=r[12],w=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-a,f-u,p-m,E-S).normalize(),s[1].setComponents(c+a,f+u,p+m,E+S).normalize(),s[2].setComponents(c+o,f+d,p+_,E+w).normalize(),s[3].setComponents(c-o,f-d,p-_,E-w).normalize(),n)s[4].setComponents(l,h,g,v).normalize(),s[5].setComponents(c-l,f-h,p-g,E-v).normalize();else if(s[4].setComponents(c-l,f-h,p-g,E-v).normalize(),e===mn)s[5].setComponents(c+l,f+h,p+g,E+v).normalize();else if(e===rs)s[5].setComponents(l,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);let e=rf.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(sa.x=s.normal.x>0?t.max.x:t.min.x,sa.y=s.normal.y>0?t.max.y:t.min.y,sa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bi=class extends _n{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},wa=new C,Aa=new C,oh=new de,zs=new Qn,ra=new kn,yl=new C,lh=new C,Ra=class extends Re{constructor(t=new ve,e=new bi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)wa.fromBufferAttribute(e,s-1),Aa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wa.distanceTo(Aa);t.setAttribute("lineDistance",new se(n,1))}else kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;oh.copy(s).invert(),zs.copy(t.ray).applyMatrix4(oh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){let p=u.getX(_),S=u.getX(_+1),w=aa(this,t,zs,l,p,S,_);w&&e.push(w)}if(this.isLineLoop){let _=u.getX(m-1),g=u.getX(f),p=aa(this,t,zs,l,_,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=c){let p=aa(this,t,zs,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=aa(this,t,zs,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function aa(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(wa.fromBufferAttribute(o,s),Aa.fromBufferAttribute(o,r),e.distanceSqToSegment(wa,Aa,yl,lh)>n)return;yl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(yl);if(!(c<t.near||c>t.far))return{distance:c,point:lh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ch=new C,hh=new C,ds=class extends Ra{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ch.fromBufferAttribute(e,s),hh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ch.distanceTo(hh);t.setAttribute("lineDistance",new se(n,1))}else kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tr=class extends qe{constructor(t=[],e=ci,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},er=class extends qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ei=class extends qe{constructor(t,e,n=vn,s,r,a,o=De,l=De,c,u=wn,d=1){if(u!==wn&&u!==ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ca=class extends ei{constructor(t,e=vn,n=ci,s,r,a=De,o=De,l,c=wn){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},nr=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ze=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2));function m(_,g,p,S,w,v,E,b,R,y,T){let P=v/R,N=E/y,F=v/2,z=E/2,L=b/2,O=R+1,q=y+1,X=0,st=0,Z=new C;for(let j=0;j<q;j++){let Q=j*N-z;for(let It=0;It<O;It++){let At=It*P-F;Z[_]=At*S,Z[g]=Q*w,Z[p]=L,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[g]=0,Z[p]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(It/R),d.push(1-j/y),X+=1}}for(let j=0;j<y;j++)for(let Q=0;Q<R;Q++){let It=h+Q+O*j,At=h+Q+O*(j+1),it=h+(Q+1)+O*(j+1),dt=h+(Q+1)+O*j;l.push(It,At,dt),l.push(At,it,dt),st+=6}o.addGroup(f,st,T),f+=st,h+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ir=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],m=0,_=[],g=n/2,p=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2));function S(){let v=new C,E=new C,b=0,R=(e-t)/n;for(let y=0;y<=r;y++){let T=[],P=y/r,N=P*(e-t)+t;for(let F=0;F<=s;F++){let z=F/s,L=z*l+o,O=Math.sin(L),q=Math.cos(L);E.x=N*O,E.y=-P*n+g,E.z=N*q,d.push(E.x,E.y,E.z),v.set(O,R,q).normalize(),h.push(v.x,v.y,v.z),f.push(z,1-P),T.push(m++)}_.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let P=_[T][y],N=_[T+1][y],F=_[T+1][y+1],z=_[T][y+1];(t>0||T!==0)&&(u.push(P,N,z),b+=3),(e>0||T!==r-1)&&(u.push(N,F,z),b+=3)}c.addGroup(p,b,0),p+=b}function w(v){let E=m,b=new at,R=new C,y=0,T=v===!0?t:e,P=v===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*P,0),h.push(0,P,0),f.push(.5,.5),m++;let N=m;for(let F=0;F<=s;F++){let L=F/s*l+o,O=Math.cos(L),q=Math.sin(L);R.x=T*q,R.y=g*P,R.z=T*O,d.push(R.x,R.y,R.z),h.push(0,P,0),b.x=O*.5+.5,b.y=q*.5*P+.5,f.push(b.x,b.y),m++}for(let F=0;F<s;F++){let z=E+F,L=N+F;v===!0?u.push(L,L+1,z):u.push(L+1,L,z),y+=3}c.addGroup(p,y,v===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new de;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos($t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($t(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},fs=class extends en{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pa=class extends fs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var uh=new C,dh=new C,vl=new rc,Ml=new rc,Sl=new rc,ps=class extends en{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(dh.subVectors(s[0],s[1]).add(s[0]),c=dh);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(uh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=uh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),vl.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,m,_,g),Ml.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,m,_,g),Sl.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Ml.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Sl.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(vl.calc(l),Ml.calc(l),Sl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function af(i,t){let e=1-i;return e*e*t}function of(i,t){return 2*(1-i)*i*t}function lf(i,t){return i*i*t}function Gs(i,t,e,n){return af(i,t)+of(i,e)+lf(i,n)}function cf(i,t){let e=1-i;return e*e*e*t}function hf(i,t){let e=1-i;return 3*e*e*i*t}function uf(i,t){return 3*(1-i)*i*i*t}function df(i,t){return i*i*i*t}function Ws(i,t,e,n,s){return cf(i,t)+hf(i,e)+uf(i,n)+df(i,s)}var sr=class extends en{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,s.x,r.x,a.x,o.x),Ws(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ia=class extends en{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ws(t,s.x,r.x,a.x,o.x),Ws(t,s.y,r.y,a.y,o.y),Ws(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},rr=class extends en{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},La=class extends en{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ar=class extends en{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},or=class extends en{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y),Gs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lr=class extends en{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(fh(o,l.x,c.x,u.x,d.x),fh(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},Da=Object.freeze({__proto__:null,ArcCurve:Pa,CatmullRomCurve3:ps,CubicBezierCurve:sr,CubicBezierCurve3:Ia,EllipseCurve:fs,LineCurve:rr,LineCurve3:La,QuadraticBezierCurve:ar,QuadraticBezierCurve3:or,SplineCurve:lr}),Na=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Da[s.type]().fromJSON(s))}return this}},Ei=class extends Na{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new rr(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ar(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new sr(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new lr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new fs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ni=class extends Ei{constructor(t){super(t),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ei().fromJSON(s))}return this}};function ff(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=hu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=xf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,d=l;for(let h=e;h<s;h+=e){let f=i[h],m=i[h+1];f<o&&(o=f),m<l&&(l=m),f>u&&(u=f),m>d&&(d=m)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return cr(r,a,e,o,l,c,0),a}function hu(i,t,e,n,s){let r;if(s===Cf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ph(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ph(a/n|0,i[a],i[a+1],r);return r&&ms(r,r.next)&&(ur(r),r=r.next),r}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ms(e,e.next)||Se(e.prev,e,e.next)===0)){if(ur(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&bf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?mf(i,n,s,r):pf(i)){t.push(l.i,i.i,c.i),ur(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=gf(Ti(i),t),cr(i,t,e,n,s,r,2)):a===2&&_f(i,t,e,n,s,r):cr(Ti(i),t,e,n,s,r,1);break}}}function pf(i){let t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&ks(s,o,r,l,a,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function mf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Se(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),m=Math.min(u,d,h),_=Math.max(o,l,c),g=Math.max(u,d,h),p=Cl(f,m,t,e,n),S=Cl(_,g,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=p&&v&&v.z<=S;){if(w.x>=f&&w.x<=_&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&ks(o,u,l,d,c,h,w.x,w.y)&&Se(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&ks(o,u,l,d,c,h,v.x,v.y)&&Se(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=_&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&ks(o,u,l,d,c,h,w.x,w.y)&&Se(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&ks(o,u,l,d,c,h,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function gf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ms(n,s)&&du(n,e,e.next,s)&&hr(n,s)&&hr(s,n)&&(t.push(n.i,e.i,s.i),ur(e),ur(e.next),e=i=s),e=e.next}while(e!==i);return Ti(e)}function _f(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wf(a,o)){let l=fu(a,o);a=Ti(a,a.next),l=Ti(l,l.next),cr(a,t,e,n,s,r,0),cr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function xf(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=hu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Tf(c))}s.sort(yf);for(let r=0;r<s.length;r++)e=vf(s[r],e);return e}function yf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function vf(i,t){let e=Mf(i,t);if(!e)return t;let n=fu(e,i);return Ti(n,n.next),Ti(e,e.next)}function Mf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ms(i,e))return e;do{if(ms(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&uu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);hr(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&Sf(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function Sf(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function bf(i,t,e,n){let s=i;do s.z===0&&(s.z=Cl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ef(s)}function Ef(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Cl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Tf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function uu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ks(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&uu(i,t,e,n,s,r,a,o)}function wf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Af(i,t)&&(hr(i,t)&&hr(t,i)&&Rf(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||ms(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ms(i,t){return i.x===t.x&&i.y===t.y}function du(i,t,e,n){let s=la(Se(i,t,e)),r=la(Se(i,t,n)),a=la(Se(e,n,i)),o=la(Se(e,n,t));return!!(s!==r&&a!==o||s===0&&oa(i,e,t)||r===0&&oa(i,n,t)||a===0&&oa(e,i,n)||o===0&&oa(e,t,n))}function oa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function la(i){return i>0?1:i<0?-1:0}function Af(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&du(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function hr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function Rf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function fu(i,t){let e=Pl(i.i,i.x,i.y),n=Pl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ph(i,t,e,n){let s=Pl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Il=class{static triangulate(t,e,n=2){return ff(t,e,n)}},vi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];mh(t),gh(n,t);let a=t.length;e.forEach(mh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,gh(n,e[l]);let o=Il.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function mh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function gh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var wi=class i extends ve{constructor(t=new ni([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Pf,w,v=!1,E,b,R,y;if(p){w=p.getSpacedPoints(u),v=!0,h=!1;let nt=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(u,nt),b=new C,R=new C,y=new C}h||(g=0,f=0,m=0,_=0);let T=o.extractPoints(c),P=T.shape,N=T.holes;if(!vi.isClockWise(P)){P=P.reverse();for(let nt=0,ot=N.length;nt<ot;nt++){let ct=N[nt];vi.isClockWise(ct)&&(N[nt]=ct.reverse())}}function z(nt){let ct=10000000000000001e-36,ht=nt[0];for(let gt=1;gt<=nt.length;gt++){let Ht=gt%nt.length,zt=nt[Ht],qt=zt.x-ht.x,Jt=zt.y-ht.y,I=qt*qt+Jt*Jt,ae=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(ht.x),Math.abs(ht.y)),ee=ct*ae*ae;if(I<=ee){nt.splice(Ht,1),gt--;continue}ht=zt}}z(P),N.forEach(z);let L=N.length,O=P;for(let nt=0;nt<L;nt++){let ot=N[nt];P=P.concat(ot)}function q(nt,ot,ct){return ot||Xt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ot,ct)}let X=P.length;function st(nt,ot,ct){let ht,gt,Ht,zt=nt.x-ot.x,qt=nt.y-ot.y,Jt=ct.x-nt.x,I=ct.y-nt.y,ae=zt*zt+qt*qt,ee=zt*I-qt*Jt;if(Math.abs(ee)>Number.EPSILON){let A=Math.sqrt(ae),x=Math.sqrt(Jt*Jt+I*I),B=ot.x-qt/A,G=ot.y+zt/A,K=ct.x-I/x,ut=ct.y+Jt/x,mt=((K-B)*I-(ut-G)*Jt)/(zt*I-qt*Jt);ht=B+zt*mt-nt.x,gt=G+qt*mt-nt.y;let $=ht*ht+gt*gt;if($<=2)return new at(ht,gt);Ht=Math.sqrt($/2)}else{let A=!1;zt>Number.EPSILON?Jt>Number.EPSILON&&(A=!0):zt<-Number.EPSILON?Jt<-Number.EPSILON&&(A=!0):Math.sign(qt)===Math.sign(I)&&(A=!0),A?(ht=-qt,gt=zt,Ht=Math.sqrt(ae)):(ht=zt,gt=qt,Ht=Math.sqrt(ae/2))}return new at(ht/Ht,gt/Ht)}let Z=[];for(let nt=0,ot=O.length,ct=ot-1,ht=nt+1;nt<ot;nt++,ct++,ht++)ct===ot&&(ct=0),ht===ot&&(ht=0),Z[nt]=st(O[nt],O[ct],O[ht]);let j=[],Q,It=Z.concat();for(let nt=0,ot=L;nt<ot;nt++){let ct=N[nt];Q=[];for(let ht=0,gt=ct.length,Ht=gt-1,zt=ht+1;ht<gt;ht++,Ht++,zt++)Ht===gt&&(Ht=0),zt===gt&&(zt=0),Q[ht]=st(ct[ht],ct[Ht],ct[zt]);j.push(Q),It=It.concat(Q)}let At;if(g===0)At=vi.triangulateShape(O,N);else{let nt=[],ot=[];for(let ct=0;ct<g;ct++){let ht=ct/g,gt=f*Math.cos(ht*Math.PI/2),Ht=m*Math.sin(ht*Math.PI/2)+_;for(let zt=0,qt=O.length;zt<qt;zt++){let Jt=q(O[zt],Z[zt],Ht);Mt(Jt.x,Jt.y,-gt),ht===0&&nt.push(Jt)}for(let zt=0,qt=L;zt<qt;zt++){let Jt=N[zt];Q=j[zt];let I=[];for(let ae=0,ee=Jt.length;ae<ee;ae++){let A=q(Jt[ae],Q[ae],Ht);Mt(A.x,A.y,-gt),ht===0&&I.push(A)}ht===0&&ot.push(I)}}At=vi.triangulateShape(nt,ot)}let it=At.length,dt=m+_;for(let nt=0;nt<X;nt++){let ot=h?q(P[nt],It[nt],dt):P[nt];v?(R.copy(E.normals[0]).multiplyScalar(ot.x),b.copy(E.binormals[0]).multiplyScalar(ot.y),y.copy(w[0]).add(R).add(b),Mt(y.x,y.y,y.z)):Mt(ot.x,ot.y,0)}for(let nt=1;nt<=u;nt++)for(let ot=0;ot<X;ot++){let ct=h?q(P[ot],It[ot],dt):P[ot];v?(R.copy(E.normals[nt]).multiplyScalar(ct.x),b.copy(E.binormals[nt]).multiplyScalar(ct.y),y.copy(w[nt]).add(R).add(b),Mt(y.x,y.y,y.z)):Mt(ct.x,ct.y,d/u*nt)}for(let nt=g-1;nt>=0;nt--){let ot=nt/g,ct=f*Math.cos(ot*Math.PI/2),ht=m*Math.sin(ot*Math.PI/2)+_;for(let gt=0,Ht=O.length;gt<Ht;gt++){let zt=q(O[gt],Z[gt],ht);Mt(zt.x,zt.y,d+ct)}for(let gt=0,Ht=N.length;gt<Ht;gt++){let zt=N[gt];Q=j[gt];for(let qt=0,Jt=zt.length;qt<Jt;qt++){let I=q(zt[qt],Q[qt],ht);v?Mt(I.x,I.y+w[u-1].y,w[u-1].x+ct):Mt(I.x,I.y,d+ct)}}}Ct(),H();function Ct(){let nt=s.length/3;if(h){let ot=0,ct=X*ot;for(let ht=0;ht<it;ht++){let gt=At[ht];Vt(gt[2]+ct,gt[1]+ct,gt[0]+ct)}ot=u+g*2,ct=X*ot;for(let ht=0;ht<it;ht++){let gt=At[ht];Vt(gt[0]+ct,gt[1]+ct,gt[2]+ct)}}else{for(let ot=0;ot<it;ot++){let ct=At[ot];Vt(ct[2],ct[1],ct[0])}for(let ot=0;ot<it;ot++){let ct=At[ot];Vt(ct[0]+X*u,ct[1]+X*u,ct[2]+X*u)}}n.addGroup(nt,s.length/3-nt,0)}function H(){let nt=s.length/3,ot=0;J(O,ot),ot+=O.length;for(let ct=0,ht=N.length;ct<ht;ct++){let gt=N[ct];J(gt,ot),ot+=gt.length}n.addGroup(nt,s.length/3-nt,1)}function J(nt,ot){let ct=nt.length;for(;--ct>=0;){let ht=ct,gt=ct-1;gt<0&&(gt=nt.length-1);for(let Ht=0,zt=u+g*2;Ht<zt;Ht++){let qt=X*Ht,Jt=X*(Ht+1),I=ot+ht+qt,ae=ot+gt+qt,ee=ot+gt+Jt,A=ot+ht+Jt;ft(I,ae,ee,A)}}}function Mt(nt,ot,ct){l.push(nt),l.push(ot),l.push(ct)}function Vt(nt,ot,ct){Wt(nt),Wt(ot),Wt(ct);let ht=s.length/3,gt=S.generateTopUV(n,s,ht-3,ht-2,ht-1);ue(gt[0]),ue(gt[1]),ue(gt[2])}function ft(nt,ot,ct,ht){Wt(nt),Wt(ot),Wt(ht),Wt(ot),Wt(ct),Wt(ht);let gt=s.length/3,Ht=S.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);ue(Ht[0]),ue(Ht[1]),ue(Ht[3]),ue(Ht[1]),ue(Ht[2]),ue(Ht[3])}function Wt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function ue(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return If(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Da[s.type]().fromJSON(s)),new i(n,t.options)}},Pf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new at(r,a),new at(o,l),new at(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-d),new at(h,1-m),new at(_,1-p)]:[new at(o,1-l),new at(u,1-d),new at(f,1-m),new at(g,1-p)]}};function If(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ai=class i extends ve{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$t(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,d=new C,h=new at,f=new C,m=new C,_=new C,g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(m)}for(let S=0;S<=e;S++){let w=n+S*u*s,v=Math.sin(w),E=Math.cos(w);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*v,d.y=t[b].y,d.z=t[b].x*E,a.push(d.x,d.y,d.z),h.x=S/e,h.y=b/(t.length-1),o.push(h.x,h.y);let R=l[3*b+0]*v,y=l[3*b+1],T=l[3*b+0]*E;c.push(R,y,T)}}for(let S=0;S<e;S++)for(let w=0;w<t.length-1;w++){let v=w+S*t.length,E=v,b=v+t.length,R=v+t.length+1,y=v+1;r.push(E,b,y),r.push(R,y,b)}this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Cn=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){let S=p*h-a;for(let w=0;w<c;w++){let v=w*d-r;m.push(v,-S,0),_.push(0,0,1),g.push(w/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let w=S+c*p,v=S+c*(p+1),E=S+1+c*(p+1),b=S+1+c*p;f.push(w,v,b),f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ri=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new C,h=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let S=[],w=p/n,v=a+w*o,E=t*Math.cos(v),b=Math.sqrt(t*t-E*E),R=0;p===0&&a===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){let T=y/e,P=s+T*r;d.x=-b*Math.cos(P),d.y=E,d.z=b*Math.sin(P),m.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),g.push(T+R,1-w),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let w=u[p][S+1],v=u[p][S],E=u[p+1][S],b=u[p+1][S+1];(p!==0||a>0)&&f.push(w,v,b),(p!==n-1||l<Math.PI)&&f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new se(m,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ci=class i extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new C,f=new C,m=new C;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(S),f.y=(t+e*Math.cos(g))*Math.sin(S),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),m.subVectors(f,h).normalize(),u.push(m.x,m.y,m.z),d.push(p/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let p=(s+1)*_+g-1,S=(s+1)*(_-1)+g-1,w=(s+1)*(_-1)+g,v=(s+1)*_+g;l.push(p,S,v),l.push(S,w,v)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var dr=class i extends ve{constructor(t=new or(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new at,u=new C,d=[],h=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(f,2));function _(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),S(),p()}function g(w){u=t.getPointAt(w/e,u);let v=a.normals[w],E=a.binormals[w];for(let b=0;b<=s;b++){let R=b/s*Math.PI*2,y=Math.sin(R),T=-Math.cos(R);l.x=T*v.x+y*E.x,l.y=T*v.y+y*E.y,l.z=T*v.z+y*E.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){let E=(s+1)*(w-1)+(v-1),b=(s+1)*w+(v-1),R=(s+1)*w+v,y=(s+1)*(w-1)+v;m.push(E,b,y),m.push(b,R,y)}}function S(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)c.x=w/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Da[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var fr=class extends _n{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Yt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Fi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(_h(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(_h(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=Fi(i[e]);for(let s in n)t[s]=n[s]}return t}function _h(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ac(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var pu={clone:Fi,merge:He},Df=`void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
  gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends _n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=Lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new at().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new de().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ua=class extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xn=class extends _n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},gs=class extends xn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Pi=class extends _n{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ka,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Fa=class extends _n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oa=class extends _n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ji(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ii=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ba=class extends ii{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Al:r=t,o=2*e-n;break;case Rl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Al:a=t,l=2*n-e;break;case Rl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-h*g+2*h*_-h*m,S=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,w=(-1-f)*g+(1.5+f)*_+.5*m,v=f*g-f*_;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+S*a[c+E]+w*a[l+E]+v*a[d+E];return r}},za=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},ka=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Va=class extends ii{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let m=(n-e)/(s-e),_=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*m;return r}let h=o*2,f=t-1;for(let m=0;m!==o;++m){let _=a[c+m],g=a[l+m],p=f*h+m*2,S=d[p],w=d[p+1],v=t*h+m*2,E=u[v],b=u[v+1],R=Ff(n,e,S,E,s);r[m]=mu(R,_,w,b,g)}return r}};function mu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Uf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ff(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=mu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Uf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ji(e,this.TimeBufferType),this.values=ji(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ji(t.times,Array),values:ji(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),bl(t.settings)&&(n.settings={inTangents:ji(t.settings.inTangents,Array),outTangents:ji(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Va(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xs:e=this.InterpolantFactoryMethodDiscrete;break;case Sa:e=this.InterpolantFactoryMethodLinear;break;case da:e=this.InterpolantFactoryMethodSmooth;break;case Tl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return da;case this.InterpolantFactoryMethodBezier:return Tl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;bl(this.settings)&&(xh(this.settings.inTangents,t),xh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Xt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&bd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===da,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){let _=e[d+m];if(_!==e[h+m]||_!==e[f+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,bl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function xh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Sa;var si=class extends sn{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=Xs;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Ha.prototype.ValueTypeName="color";var Ga=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Ga.prototype.ValueTypeName="number";var Wa=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)tn.slerpFlat(r,0,a,c-o,a,c,l);return r}},pr=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Wa(this.times,this.values,this.getValueSize(),t)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends sn{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Xs;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Xa=class extends sn{constructor(t,e,n,s){super(t,e,n,s)}};Xa.prototype.ValueTypeName="vector";var qa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gu=new qa,Ya=class{constructor(t){this.manager=t!==void 0?t:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},mr=class extends _s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},El=new de,yh=new C,vh=new C,gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Je,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new us,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(yh),vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){El.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(El,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===rs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(El)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ca=new C,ha=new tn,En=new C,_r=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ca,ha,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,En.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ca,ha,En),En.x===1&&En.y===1&&En.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,En.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$n=new C,Mh=new at,Sh=new at,Fe=class extends _r{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Mh,Sh),e.subVectors(Sh,Mh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ll=class extends gr{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0}},xr=class extends _s{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ll}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Vn=class extends _r{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Dl=class extends gr{constructor(){super(new Vn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ii=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Dl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Qi=-90,ts=1,Za=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(Qi,ts,t,e);s.layers=this.layers,this.add(s);let r=new Fe(Qi,ts,t,e);r.layers=this.layers,this.add(r);let a=new Fe(Qi,ts,t,e);a.layers=this.layers,this.add(a);let o=new Fe(Qi,ts,t,e);o.layers=this.layers,this.add(o);let l=new Fe(Qi,ts,t,e);l.layers=this.layers,this.add(l);let c=new Fe(Qi,ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ja=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var oc="\\[\\]\\.:\\/",Of=new RegExp("["+oc+"]","g"),lc="[^"+oc+"]",Bf="[^"+oc.replace("\\.","")+"]",zf=/((?:WC+[\/:])*)/.source.replace("WC",lc),kf=/(WCOD+)?/.source.replace("WCOD",Bf),Vf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lc),Hf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lc),Gf=new RegExp("^"+zf+kf+Vf+Hf+"$"),Wf=["material","materials","bones","map"],Nl=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Of,"")}static parseTrackName(t){let e=Gf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Nl;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ux=new Float32Array(1);var bh=new de,yr=class{constructor(t,e,n=0,s=1/0){this.ray=new Qn(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(t,e=!0,n=[]){return Ul(t,this,n,e),n.sort(Eh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ul(t[s],this,n,e);return n.sort(Eh),n}};function Eh(i,t){return i.distance-t.distance}function Ul(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ul(r[a],t,e,!0)}}var xs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Fl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var ua=new Te,vr=class extends ds{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new ve;r.setIndex(new Xe(n,1)),r.setAttribute("position",new Xe(s,3)),super(r,new bi({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ua.setFromObject(this.object),ua.isEmpty())return;let t=ua.min,e=ua.max,n=this.geometry.attributes.position,s=n.array;s[0]=e.x,s[1]=e.y,s[2]=e.z,s[3]=t.x,s[4]=e.y,s[5]=e.z,s[6]=t.x,s[7]=t.y,s[8]=e.z,s[9]=e.x,s[10]=t.y,s[11]=e.z,s[12]=e.x,s[13]=e.y,s[14]=t.z,s[15]=t.x,s[16]=e.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=e.x,s[22]=t.y,s[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Mr=class extends gn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function cc(i,t,e,n){let s=Xf(n);switch(e){case tc:return i*t;case io:return i*t/s.components*s.byteLength;case so:return i*t/s.components*s.byteLength;case di:return i*t*2/s.components*s.byteLength;case ro:return i*t*2/s.components*s.byteLength;case ec:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case ao:return i*t*4/s.components*s.byteLength;case Tr:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:case ho:return Math.max(i,16)*Math.max(t,8)/4;case oo:case co:return Math.max(i,8)*Math.max(t,8)/2;case uo:case fo:case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:case Cr:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lo:case Do:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uo:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Pr:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xf(i){switch(i){case Je:case Kl:return{byteLength:1,components:1};case Ms:case $l:case Mn:return{byteLength:2,components:1};case eo:case no:return{byteLength:2,components:4};case vn:case to:case ln:return{byteLength:4,components:1};case jl:case Ql:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zf(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){let m=d[h],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Jf=`#ifdef USE_ALPHAHASH
  if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
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
#endif`,$f=`#ifdef USE_ALPHAMAP
  diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
  uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef USE_ALPHATEST
  #ifdef ALPHA_TO_COVERAGE
  diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
  if ( diffuseColor.a == 0.0 ) discard;
  #else
  if ( diffuseColor.a < alphaTest ) discard;
  #endif
#endif`,tp=`#ifdef USE_ALPHATEST
  uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_AOMAP
  uniform sampler2D aoMap;
  uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
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
#endif`,sp=`#ifdef USE_BATCHING
  mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
  vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
  vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lp=`#ifdef USE_IRIDESCENCE
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
#endif`,cp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
  uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
  varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
  vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  diffuseColor *= vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
  varying vec4 vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
  varying vec4 vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xp=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
  uniform sampler2D displacementMap;
  uniform float displacementScale;
  uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
  transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
  vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
  #ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
    emissiveColor = sRGBTransferEOTF( emissiveColor );
  #endif
  totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
  uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`vec4 LinearTransferOETF( in vec4 value ) {
  return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
  uniform float envMapIntensity;
  uniform mat3 envMapRotation;
  #ifdef ENVMAP_TYPE_CUBE
    uniform samplerCube envMap;
  #else
    uniform sampler2D envMap;
  #endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
  #if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
    #define ENV_WORLDPOS
  #endif
  #ifdef ENV_WORLDPOS

    varying vec3 vWorldPosition;
  #else
    varying vec3 vReflect;
    uniform float refractionRatio;
  #endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
  vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
  varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
  uniform vec3 fogColor;
  varying float vFogDepth;
  #ifdef FOG_EXP2
    uniform float fogDensity;
  #else
    uniform float fogNear;
    uniform float fogFar;
  #endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
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
}`,Op=`#ifdef USE_LIGHTMAP
  uniform sampler2D lightMap;
  uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,Yp=`uniform sampler2D dfgLUT;
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
}`,Zp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
  #if defined( LAMBERT ) || defined( PHONG )
    irradiance += iblIrradiance;
  #endif
  RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
  RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
  uniform float logDepthBufFC;
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  varying float vFragDepth;
  varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
  vFragDepth = 1.0 + gl_Position.w;
  vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
  vec4 sampledDiffuseColor = texture2D( map, vMapUv );
  #ifdef DECODE_VIDEO_TEXTURE
    sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
  #endif
  diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
  uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
  vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
  metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
  uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
  float morphTargetInfluences[ MORPHTARGETS_COUNT ];
  float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
  }
#endif`,cm=`#if defined( USE_MORPHCOLORS )
  vColor *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    #if defined( USE_COLOR_ALPHA )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
    #elif defined( USE_COLOR )
      if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
    #endif
  }
#endif`,hm=`#ifdef USE_MORPHNORMALS
  objectNormal *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
  transformed *= morphTargetBaseInfluence;
  for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
    if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
  }
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,gm=`#ifndef FLAT_SHADED
  varying vec3 vNormal;
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif`,_m=`#ifndef FLAT_SHADED
  vNormal = normalize( transformedNormal );
  #ifdef USE_TANGENT
    vTangent = normalize( transformedTangent );
    vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
    #ifdef FLIP_SIDED
      vBitangent = - vBitangent;
    #endif
  #endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,ym=`#ifdef USE_CLEARCOAT
  vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
  vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
  clearcoatMapN.xy *= clearcoatNormalScale;
  clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
  uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
  uniform sampler2D clearcoatNormalMap;
  uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
  uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
  uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
  uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
  gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
  gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
  vec3 dithering( vec3 color ) {
    float grid_position = rand( gl_FragCoord.xy );
    vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
    dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
    return color + dither_shift_RGB;
  }
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
  vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
  roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
  uniform sampler2D roughnessMap;
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
  mat4 boneMatX = getBoneMatrix( skinIndex.x );
  mat4 boneMatY = getBoneMatrix( skinIndex.y );
  mat4 boneMatZ = getBoneMatrix( skinIndex.z );
  mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
  vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
  vec4 skinned = vec4( 0.0 );
  skinned += boneMatX * skinVertex * skinWeight.x;
  skinned += boneMatY * skinVertex * skinWeight.y;
  skinned += boneMatZ * skinVertex * skinWeight.z;
  skinned += boneMatW * skinVertex * skinWeight.w;
  transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
  vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
  specularStrength = texelSpecular.r;
#else
  specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
  uniform sampler2D specularMap;
#endif`,Vm=`#if defined( TONE_MAPPING )
  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
  vec4 worldPosition = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
    worldPosition = batchingMatrix * worldPosition;
  #endif
  #ifdef USE_INSTANCING
    worldPosition = instanceMatrix * worldPosition;
  #endif
  worldPosition = modelMatrix * worldPosition;
#endif`,Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
  vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
  gl_Position.z = gl_Position.w;
}`,t0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
  vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
  gl_FragColor = texColor;
  gl_FragColor.a *= opacity;
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,e0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,i0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
  vWorldDirection = transformDirection( position, modelMatrix );
  #include <begin_vertex>
  #include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
  vec3 direction = normalize( vWorldDirection );
  vec2 sampleUV = equirectUv( direction );
  gl_FragColor = texture2D( tEquirect, sampleUV );
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,o0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#define LAMBERT
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
}`,d0=`#define LAMBERT
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
}`,f0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,_0=`#define PHONG
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
}`,x0=`#define PHONG
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
}`,y0=`#define STANDARD
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
}`,v0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,S0=`#define TOON
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
}`,b0=`uniform float size;
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,w0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Jf,alphahash_pars_fragment:Kf,alphamap_fragment:$f,alphamap_pars_fragment:jf,alphatest_fragment:Qf,alphatest_pars_fragment:tp,aomap_fragment:ep,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:rp,beginnormal_vertex:ap,bsdfs:op,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:dp,clipping_planes_vertex:fp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:_p,common:xp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:vp,displacementmap_pars_vertex:Mp,displacementmap_vertex:Sp,emissivemap_fragment:bp,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:wp,envmap_fragment:Ap,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Cp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Vp,envmap_vertex:Ip,fog_vertex:Lp,fog_pars_vertex:Dp,fog_fragment:Np,fog_pars_fragment:Up,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Op,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:zp,lights_pars_begin:kp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Gp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:qp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Zp,lights_fragment_maps:Jp,lights_fragment_end:Kp,lightprobes_pars_fragment:$p,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:em,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:dm,normal_fragment_begin:fm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:_m,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:Sm,opaque_fragment:bm,packing:Em,premultiplied_alpha_fragment:Tm,project_vertex:wm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Im,shadowmap_pars_vertex:Lm,shadowmap_vertex:Dm,shadowmask_pars_fragment:Nm,skinbase_vertex:Um,skinning_pars_vertex:Fm,skinning_vertex:Om,skinnormal_vertex:Bm,specularmap_fragment:zm,specularmap_pars_fragment:km,tonemapping_fragment:Vm,tonemapping_pars_fragment:Hm,transmission_fragment:Gm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:Zm,background_vert:Jm,background_frag:Km,backgroundCube_vert:$m,backgroundCube_frag:jm,cube_vert:Qm,cube_frag:t0,depth_vert:e0,depth_frag:n0,distance_vert:i0,distance_frag:s0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:d0,meshmatcap_vert:f0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:x0,meshphysical_vert:y0,meshphysical_frag:v0,meshtoon_vert:M0,meshtoon_frag:S0,points_vert:b0,points_frag:E0,shadow_vert:T0,shadow_frag:w0,sprite_vert:A0,sprite_frag:R0},bt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Ln={basic:{uniforms:He([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:He([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:He([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:He([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:He([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:He([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:He([bt.points,bt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:He([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:He([bt.common,bt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:He([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:He([bt.sprite,bt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:He([bt.common,bt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:He([bt.lights,bt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Ln.physical={uniforms:He([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var ko={r:0,b:0,g:0},C0=new de,zu=new Zt;zu.set(-1,0,0,0,1,0,0,0,1);function P0(i,t,e,n,s,r){let a=new Yt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let v=S.backgroundBlurriness>0;w=t.get(w,v)}return w}function m(S){let w=!1,v=f(S);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===br)?(c===void 0&&(c=new jt(new Ze(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Fi(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zu),c.material.toneMapped=ie.getTransfer(v.colorSpace)!==ce,(u!==v||d!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new jt(new Cn(2,2),new nn({name:"BackgroundMaterial",uniforms:Fi(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ie.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,w){S.getRGB(ko,ac(i)),e.buffers.color.setClear(ko.r,ko.g,ko.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:m,addToRenderList:_,dispose:p}}function I0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(N,F,z,L,O){let q=!1,X=d(N,L,z,F);r!==X&&(r=X,c(r.object)),q=f(N,L,z,O),q&&m(N,L,z,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(N,F,z,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function d(N,F,z,L){let O=L.wireframe===!0,q=n[F.id];q===void 0&&(q={},n[F.id]=q);let X=N.isInstancedMesh===!0?N.id:0,st=q[X];st===void 0&&(st={},q[X]=st);let Z=st[z.id];Z===void 0&&(Z={},st[z.id]=Z);let j=Z[O];return j===void 0&&(j=h(l()),Z[O]=j),j}function h(N){let F=[],z=[],L=[];for(let O=0;O<e;O++)F[O]=0,z[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:L,object:N,attributes:{},index:null}}function f(N,F,z,L){let O=r.attributes,q=F.attributes,X=0,st=z.getAttributes();for(let Z in st)if(st[Z].location>=0){let Q=O[Z],It=q[Z];if(It===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(It=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(It=N.instanceColor)),Q===void 0||Q.attribute!==It||It&&Q.data!==It.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function m(N,F,z,L){let O={},q=F.attributes,X=0,st=z.getAttributes();for(let Z in st)if(st[Z].location>=0){let Q=q[Z];Q===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));let It={};It.attribute=Q,Q&&Q.data&&(It.data=Q.data),O[Z]=It,X++}r.attributes=O,r.attributesNum=X,r.index=L}function _(){let N=r.newAttributes;for(let F=0,z=N.length;F<z;F++)N[F]=0}function g(N){p(N,0)}function p(N,F){let z=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;z[N]=1,L[N]===0&&(i.enableVertexAttribArray(N),L[N]=1),O[N]!==F&&(i.vertexAttribDivisor(N,F),O[N]=F)}function S(){let N=r.newAttributes,F=r.enabledAttributes;for(let z=0,L=F.length;z<L;z++)F[z]!==N[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function w(N,F,z,L,O,q,X){X===!0?i.vertexAttribIPointer(N,F,z,O,q):i.vertexAttribPointer(N,F,z,L,O,q)}function v(N,F,z,L){_();let O=L.attributes,q=z.getAttributes(),X=F.defaultAttributeValues;for(let st in q){let Z=q[st];if(Z.location>=0){let j=O[st];if(j===void 0&&(st==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),st==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let Q=j.normalized,It=j.itemSize,At=t.get(j);if(At===void 0)continue;let it=At.buffer,dt=At.type,Ct=At.bytesPerElement,H=dt===i.INT||dt===i.UNSIGNED_INT||j.gpuType===to;if(j.isInterleavedBufferAttribute){let J=j.data,Mt=J.stride,Vt=j.offset;if(J.isInstancedInterleavedBuffer){for(let ft=0;ft<Z.locationSize;ft++)p(Z.location+ft,J.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ft=0;ft<Z.locationSize;ft++)g(Z.location+ft);i.bindBuffer(i.ARRAY_BUFFER,it);for(let ft=0;ft<Z.locationSize;ft++)w(Z.location+ft,It/Z.locationSize,dt,Q,Mt*Ct,(Vt+It/Z.locationSize*ft)*Ct,H)}else{if(j.isInstancedBufferAttribute){for(let J=0;J<Z.locationSize;J++)p(Z.location+J,j.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<Z.locationSize;J++)g(Z.location+J);i.bindBuffer(i.ARRAY_BUFFER,it);for(let J=0;J<Z.locationSize;J++)w(Z.location+J,It/Z.locationSize,dt,Q,It*Ct,It/Z.locationSize*J*Ct,H)}}else if(X!==void 0){let Q=X[st];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(Z.location,Q);break;case 3:i.vertexAttrib3fv(Z.location,Q);break;case 4:i.vertexAttrib4fv(Z.location,Q);break;default:i.vertexAttrib1fv(Z.location,Q)}}}}S()}function E(){T();for(let N in n){let F=n[N];for(let z in F){let L=F[z];for(let O in L){let q=L[O];for(let X in q)u(q[X].object),delete q[X];delete L[O]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;let F=n[N.id];for(let z in F){let L=F[z];for(let O in L){let q=L[O];for(let X in q)u(q[X].object),delete q[X];delete L[O]}}delete n[N.id]}function R(N){for(let F in n){let z=n[F];for(let L in z){let O=z[L];if(O[N.id]===void 0)continue;let q=O[N.id];for(let X in q)u(q[X].object),delete q[X];delete O[N.id]}}}function y(N){for(let F in n){let z=n[F],L=N.isInstancedMesh===!0?N.id:0,O=z[L];if(O!==void 0){for(let q in O){let X=O[q];for(let st in X)u(X[st].object),delete X[st];delete O[q]}delete z[L],Object.keys(z).length===0&&delete n[F]}}}function T(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function L0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function D0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==cn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let y=R===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Je&&R!==ln&&!y&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(kt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,maxSamples:E,samples:b}}function N0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Qe,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let S=r?0:n,w=S*4,v=p.clippingState||null;l.value=v,v=u(m,h,w,f);for(let E=0;E!==w;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,v=f;w!==_;++w,v+=4)a.copy(d[w]).applyMatrix4(S,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Es=4,U0=6,F0=20,O0=256,Dr=new Vn,_u=new Yt,hc=null,uc=0,dc=0,fc=!1,B0=new C,Oi=new C,ws=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=B0}=r;hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hc,uc,dc),this._renderer.xr.enabled=fc,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hc=this._renderer.getRenderTarget(),uc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Mn,format:cn,colorSpace:qs,depthBuffer:!1},s=xu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=z0(r)),this._blurMaterial=V0(r,t,e),this._ggxMaterial=k0(r,t,e)}return s}_compileMaterial(t){let e=new jt(new ve,t);this._renderer.compile(e,Dr)}_sceneToCubeUV(t,e,n,s,r){let l=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(_u),d.toneMapping=yn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new jt(new Ze,new ti({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(_u),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));let E=this._cubeSize;bs(s,v*E,w>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ci||t.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Dr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Es?n-m+Es:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,bs(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Dr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,bs(t,g,p,3*_,2*_),s.setRenderTarget(t),s.render(o,Dr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Es?s-this._lodMax+Es:0),h=4*(this._cubeSize-u);bs(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Dr)}};function z0(i){let t=[],e=[],n=i,s=i-Es+1+U0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,m=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,w=p>2?0:-1,v=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];m.set(v,f*h*p);for(let E=0;E<h;E++){let b=u[E*2]*2-1,R=u[E*2+1]*2-1;p===0?Oi.set(1,R,b):p===1?Oi.set(-b,1,-R):p===2?Oi.set(-b,R,1):p===3?Oi.set(-1,R,-b):p===4?Oi.set(-b,-1,R):Oi.set(b,R,-1),Oi.toArray(_,(p*h+E)*f)}}let g=new ve;g.setAttribute("position",new Xe(m,f)),g.setAttribute("outputDirection",new Xe(_,f)),e.push(new jt(g,null)),n>Es&&n--}return{lodMeshes:e,sizeLods:t}}function xu(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function k0(i,t,e){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
    `,blending:Pn,depthTest:!1,depthWrite:!1})}function V0(i,t,e){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:F0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
    `,blending:Pn,depthTest:!1,depthWrite:!1})}function yu(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
    `,blending:Pn,depthTest:!1,depthWrite:!1})}function vu(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

      precision mediump float;
      precision mediump int;

      uniform float flipEnvMap;

      varying vec3 vOutputDirection;

      uniform samplerCube envMap;

      void main() {

        gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

      }
    `,blending:Pn,depthTest:!1,depthWrite:!1})}function Wo(){return`

    precision mediump float;
    precision mediump int;

    attribute vec3 outputDirection;

    varying vec3 vOutputDirection;

    void main() {

      vOutputDirection = outputDirection;
      gl_Position = vec4( position, 1.0 );

    }
  `}var Ho=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
      `},s=new Ze(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Pn});r.uniforms.tEquirect.value=e;let a=new jt(s,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=Oe),new Za(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function H0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===$a||f===ja)if(t.has(h)){let m=t.get(h).texture;return o(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let _=new Ho(m.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,m=f===$a||f===ja,_=f===ci||f===Ni;if(m||_){let g=e.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new ws(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let S=h.image;return m&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new ws(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===$a?h.mapping=ci:f===ja&&(h.mapping=Ni),h}function l(h){let f=0,m=6;for(let _=0;_<m;_++)h[_]!==void 0&&f++;return f===m}function c(h){let f=h.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function G0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Mi("WebGLRenderer: "+n+" extension not supported."),s}}}function W0(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(f!==null){let S=f.array;_=f.version;for(let w=0,v=S.length;w<v;w+=3){let E=S[w+0],b=S[w+1],R=S[w+2];h.push(E,b,b,R,R,E)}}else{let S=m.array;_=m.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let E=w+0,b=w+1,R=w+2;h.push(E,b,b,R,R,E)}}let g=new(m.count>=65535?$s:Ks)(h,1);g.version=_;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function X0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function q0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Y0(i,t,e){let n=new WeakMap,s=new Me;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),_===!0&&(w=3);let v=o.attributes.position.count*w,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*E*4*d),R=new Js(b,v,E,d);R.type=ln,R.needsUpdate=!0;let y=w*4;for(let P=0;P<d;P++){let N=g[P],F=p[P],z=S[P],L=v*E*4*P;for(let O=0;O<N.count;O++){let q=O*y;f===!0&&(s.fromBufferAttribute(N,O),b[L+q+0]=s.x,b[L+q+1]=s.y,b[L+q+2]=s.z,b[L+q+3]=0),m===!0&&(s.fromBufferAttribute(F,O),b[L+q+4]=s.x,b[L+q+5]=s.y,b[L+q+6]=s.z,b[L+q+7]=0),_===!0&&(s.fromBufferAttribute(z,O),b[L+q+8]=s.x,b[L+q+9]=s.y,b[L+q+10]=s.z,b[L+q+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new at(v,E)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Z0(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var J0={[Gl]:"LINEAR_TONE_MAPPING",[Wl]:"REINHARD_TONE_MAPPING",[Xl]:"CINEON_TONE_MAPPING",[Sr]:"ACES_FILMIC_TONE_MAPPING",[Yl]:"AGX_TONE_MAPPING",[Zl]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function K0(i,t,e,n,s,r){let a=new Ye(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ve;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));let u=new Ua({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
      }`,depthTest:!1,depthWrite:!1}),d=new jt(c,u),h=new Vn(-1,1,1,-1,0,1),f=null,m=null,_=!1,g,p=null,S=[],w=!1;this.setSize=function(v,E){a.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let b=0;b<S.length;b++){let R=S[b];R.setSize&&R.setSize(v,E)}},this.setEffects=function(v){S=v,w=S.length>0&&S[0].isRenderPass===!0;let E=a.width,b=a.height;S.length>0&&o===null&&(o=new Ye(E,b,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(E,b,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let y=S[R];y.setSize&&y.setSize(E,b)}},this.begin=function(v,E){if(_||v.toneMapping===yn&&S.length===0)return!1;if(p=E,E!==null){let b=E.width,R=E.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return w===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=yn,!0},this.hasRenderPass=function(){return w},this.end=function(v,E){v.toneMapping=g,_=!0;let b=a,R=o;for(let y=0;y<S.length;y++){let T=S[y];T.enabled!==!1&&(T.render(v,R,b,E),T.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,u.defines={},ie.getTransfer(f)===ce&&(u.defines.SRGB_TRANSFER="");let y=J0[m];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var ku=new qe,gc=new ei(1,1),Vu=new Js,Hu=new Ta,Gu=new tr,Mu=[],Su=[],bu=new Float32Array(16),Eu=new Float32Array(9),Tu=new Float32Array(4);function As(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xo(i,t){let e=Su[t];e===void 0&&(e=new Int32Array(t),Su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Tu.set(n),i.uniformMatrix2fv(this.addr,!1,Tu),Pe(e,n)}}function ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;Eu.set(n),i.uniformMatrix3fv(this.addr,!1,Eu),Pe(e,n)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;bu.set(n),i.uniformMatrix4fv(this.addr,!1,bu),Pe(e,n)}}function sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gc.compareFunction=e.isReversedDepthBuffer()?zo:Bo,r=gc):r=ku,e.setTexture2D(t||r,s)}function fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hu,s)}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gu,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vu,s)}function gg(i){switch(i){case 5126:return $0;case 35664:return j0;case 35665:return Q0;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function _g(i,t){i.uniform1fv(this.addr,t)}function xg(i,t){let e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function yg(i,t){let e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function vg(i,t){let e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function Mg(i,t){let e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sg(i,t){let e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bg(i,t){let e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Eg(i,t){i.uniform1iv(this.addr,t)}function Tg(i,t){i.uniform2iv(this.addr,t)}function wg(i,t){i.uniform3iv(this.addr,t)}function Ag(i,t){i.uniform4iv(this.addr,t)}function Rg(i,t){i.uniform1uiv(this.addr,t)}function Cg(i,t){i.uniform2uiv(this.addr,t)}function Pg(i,t){i.uniform3uiv(this.addr,t)}function Ig(i,t){i.uniform4uiv(this.addr,t)}function Lg(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=gc:a=ku;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Dg(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Hu,r[a])}function Ng(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gu,r[a])}function Ug(i,t,e){let n=this.cache,s=t.length,r=Xo(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vu,r[a])}function Fg(i){switch(i){case 5126:return _g;case 35664:return xg;case 35665:return yg;case 35666:return vg;case 35674:return Mg;case 35675:return Sg;case 35676:return bg;case 5124:case 35670:return Eg;case 35667:case 35671:return Tg;case 35668:case 35672:return wg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Ug}}var _c=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gg(e.type)}},xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fg(e.type)}},yc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},pc=/(\w+)(\])?(\[|\.)?/g;function wu(i,t){i.seq.push(t),i.map[t.id]=t}function Og(i,t,e){let n=i.name,s=n.length;for(pc.lastIndex=0;;){let r=pc.exec(n),a=pc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wu(e,c===void 0?new _c(o,i,t):new xc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new yc(o),wu(e,d)),e=d}}}var Ts=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Og(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Au(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Bg=37297,zg=0;function kg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ru=new Zt;function Vg(i){ie._getMatrix(Ru,ie.workingColorSpace,i);let t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Ys:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+kg(i.getShaderSource(t),o)}else return r}function Hg(i,t){let e=Vg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Gg={[Gl]:"Linear",[Wl]:"Reinhard",[Xl]:"Cineon",[Sr]:"ACESFilmic",[Yl]:"AgX",[Zl]:"Neutral",[ql]:"Custom"};function Wg(i,t){let e=Gg[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vo=new C;function Xg(){ie.getLuminanceCoefficients(Vo);let i=Vo.x.toFixed(4),t=Vo.y.toFixed(4),e=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function Yg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ur(i){return i!==""}function Pu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Iu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(Jg,$g)}var Kg=new Map;function $g(i,t){let e=te[t];if(e===void 0){let n=Kg.get(t);if(n!==void 0)e=te[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vc(e)}var jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(i){return i.replace(jg,Qg)}function Qg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Du(i){let t=`precision ${i.precision} float;
  precision ${i.precision} int;
  precision ${i.precision} sampler2D;
  precision ${i.precision} samplerCube;
  precision ${i.precision} sampler3D;
  precision ${i.precision} sampler2DArray;
  precision ${i.precision} sampler2DShadow;
  precision ${i.precision} samplerCubeShadow;
  precision ${i.precision} sampler2DArrayShadow;
  precision ${i.precision} isampler2D;
  precision ${i.precision} isampler3D;
  precision ${i.precision} isamplerCube;
  precision ${i.precision} isampler2DArray;
  precision ${i.precision} usampler2D;
  precision ${i.precision} usampler3D;
  precision ${i.precision} usamplerCube;
  precision ${i.precision} usampler2DArray;
  `;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var t_={[Li]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function e_(i){return t_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var n_={[ci]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function i_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":n_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var s_={[Ni]:"ENVMAP_MODE_REFRACTION"};function r_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":s_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a_={[Ka]:"ENVMAP_BLENDING_MULTIPLY",[qh]:"ENVMAP_BLENDING_MIX",[Yh]:"ENVMAP_BLENDING_ADD"};function o_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a_[i.combine]||"ENVMAP_BLENDING_NONE"}function l_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function c_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=e_(e),c=i_(e),u=r_(e),d=o_(e),h=l_(e),f=qg(e),m=Yg(r),_=s.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ur).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(g=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?te.tonemapping_pars_fragment:"",e.toneMapping!==yn?Wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),Xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),a=vc(a),a=Pu(a,e),a=Iu(a,e),o=vc(o),o=Pu(o,e),o=Iu(o,e),a=Lu(a),o=Lu(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=S+g+a,v=S+p+o,E=Au(s,s.VERTEX_SHADER,w),b=Au(s,s.FRAGMENT_SHADER,v);s.attachShader(_,E),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(N){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(E)||"",L=s.getShaderInfoLog(b)||"",O=F.trim(),q=z.trim(),X=L.trim(),st=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,b);else{let j=Cu(s,E,"vertex"),Q=Cu(s,b,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+O+`
`+j+`
`+Q)}else O!==""?kt("WebGLProgram: Program Info Log:",O):(q===""||X==="")&&(Z=!1);Z&&(N.diagnostics={runnable:st,programLog:O,vertexShader:{log:q,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(E),s.deleteShader(b),y=new Ts(s,_),T=Zg(s,_)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,Bg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}var h_=0,Mc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sc(t),e.set(t,n)),n}},Sc=class{constructor(t){this.id=h_++,this.code=t,this.usedTimes=0}};function u_(i){return i===di||i===Cr||i===Pr}function d_(i,t,e,n,s,r){let a=new cs,o=new Mc,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,T,P,N,F,z){let L=N.fog,O=F.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,st=t.get(y.envMap||q,X),Z=st&&st.mapping===br?st.image.height:null,j=f[y.type];y.precision!==null&&(h=n.getMaxPrecision(y.precision),h!==y.precision&&kt("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));let Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,It=Q!==void 0?Q.length:0,At=0;O.morphAttributes.position!==void 0&&(At=1),O.morphAttributes.normal!==void 0&&(At=2),O.morphAttributes.color!==void 0&&(At=3);let it,dt,Ct,H;if(j){let ge=Ln[j];it=ge.vertexShader,dt=ge.fragmentShader}else{it=y.vertexShader,dt=y.fragmentShader;let ge=o.getVertexShaderStage(y),oe=o.getFragmentShaderStage(y);o.update(y,ge,oe),Ct=ge.id,H=oe.id}let J=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Vt=F.isInstancedMesh===!0,ft=F.isBatchedMesh===!0,Wt=!!y.map,ue=!!y.matcap,nt=!!st,ot=!!y.aoMap,ct=!!y.lightMap,ht=!!y.bumpMap&&y.wireframe===!1,gt=!!y.normalMap,Ht=!!y.displacementMap,zt=!!y.emissiveMap,qt=!!y.metalnessMap,Jt=!!y.roughnessMap,I=y.anisotropy>0,ae=y.clearcoat>0,ee=y.dispersion>0,A=y.retroreflectivity>0,x=y.iridescence>0,B=y.sheen>0,G=y.transmission>0,K=I&&!!y.anisotropyMap,ut=ae&&!!y.clearcoatMap,mt=ae&&!!y.clearcoatNormalMap,$=ae&&!!y.clearcoatRoughnessMap,et=x&&!!y.iridescenceMap,_t=x&&!!y.iridescenceThicknessMap,Ft=B&&!!y.sheenColorMap,St=B&&!!y.sheenRoughnessMap,xt=!!y.specularMap,Ot=!!y.specularColorMap,Gt=!!y.specularIntensityMap,Kt=G&&!!y.transmissionMap,U=G&&!!y.thicknessMap,yt=!!y.gradientMap,tt=!!y.alphaMap,vt=y.alphaTest>0,wt=!!y.alphaHash,rt=!!y.extensions,Bt=yn;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Nt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:it,fragmentShader:dt,defines:y.defines,customVertexShaderID:Ct,customFragmentShaderID:H,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:ft,batchingColor:ft&&F._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&F.instanceColor!==null,instancingMorph:Vt&&F.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Wt,matcap:ue,envMap:nt,envMapMode:nt&&st.mapping,envMapCubeUVHeight:Z,aoMap:ot,lightMap:ct,bumpMap:ht,normalMap:gt,displacementMap:Ht,emissiveMap:zt,normalMapObjectSpace:gt&&y.normalMapType===Kh,normalMapTangentSpace:gt&&y.normalMapType===Ir,packedNormalMap:gt&&y.normalMapType===Ir&&u_(y.normalMap.format),metalnessMap:qt,roughnessMap:Jt,anisotropy:I,anisotropyMap:K,clearcoat:ae,clearcoatMap:ut,clearcoatNormalMap:mt,clearcoatRoughnessMap:$,dispersion:ee,retroreflection:A,iridescence:x,iridescenceMap:et,iridescenceThicknessMap:_t,sheen:B,sheenColorMap:Ft,sheenRoughnessMap:St,specularMap:xt,specularColorMap:Ot,specularIntensityMap:Gt,transmission:G,transmissionMap:Kt,thicknessMap:U,gradientMap:yt,opaque:y.transparent===!1&&y.blending===vs&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:vt,alphaHash:wt,combine:y.combine,mapUv:Wt&&m(y.map.channel),aoMapUv:ot&&m(y.aoMap.channel),lightMapUv:ct&&m(y.lightMap.channel),bumpMapUv:ht&&m(y.bumpMap.channel),normalMapUv:gt&&m(y.normalMap.channel),displacementMapUv:Ht&&m(y.displacementMap.channel),emissiveMapUv:zt&&m(y.emissiveMap.channel),metalnessMapUv:qt&&m(y.metalnessMap.channel),roughnessMapUv:Jt&&m(y.roughnessMap.channel),anisotropyMapUv:K&&m(y.anisotropyMap.channel),clearcoatMapUv:ut&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:mt&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:St&&m(y.sheenRoughnessMap.channel),specularMapUv:xt&&m(y.specularMap.channel),specularColorMapUv:Ot&&m(y.specularColorMap.channel),specularIntensityMapUv:Gt&&m(y.specularIntensityMap.channel),transmissionMapUv:Kt&&m(y.transmissionMap.channel),thicknessMapUv:U&&m(y.thicknessMap.channel),alphaMapUv:tt&&m(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(gt||I),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Wt||tt),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&gt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:At,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Wt&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===ce,decodeVideoTextureEmissive:zt&&y.emissiveMap.isVideoTexture===!0&&ie.getTransfer(y.emissiveMap.colorSpace)===ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ne,flipSided:y.side===Be,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&y.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function g(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(T,y),S(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function w(y){let T=f[y.type],P;if(T){let N=Ln[T];P=pu.clone(N.uniforms)}else P=y.uniforms;return P}function v(y,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new c_(i,T,y,s),c.push(P),u.set(T,P)),P}function E(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function R(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:R}}function f_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Nu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,m,_,g,p){let S=i[t];return S===void 0?(S={id:h.id,object:h,geometry:f,material:m,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[t]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=m,S.materialVariant=a(h),S.groupOrder=_,S.renderOrder=h.renderOrder,S.z=g,S.group=p),t++,S}function l(h,f,m,_,g,p,S){S.reversedDepth===!0&&(g=-g);let w=o(h,f,m,_,g,p);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):e.push(w)}function c(h,f,m,_,g,p){let S=o(h,f,m,_,g,p);m.transmission>0?n.unshift(S):m.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,f){e.length>1&&e.sort(h||p_),n.length>1&&n.sort(f||Nu),s.length>1&&s.sort(f||Nu)}function d(){for(let h=t,f=i.length;h<f;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function m_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Uu,i.set(n,[a])):s>=r.length?(a=new Uu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function g_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new Yt};break;case"SpotLight":e={position:new C,direction:new C,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function __(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var x_=0;function y_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v_(i){let t=new g_,e=__(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new de,a=new de;function o(c){let u=0,d=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,S=0,w=0,v=0,E=0,b=0,R=0,y=0,T=0,P=0;c.sort(y_);for(let F=0,z=c.length;F<z;F++){let L=c[F],O=L.color,q=L.intensity,X=L.distance,st=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===di?st=L.shadow.map.texture:st=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=O.r*q,d+=O.g*q,h+=O.b*q;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],q);P++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,Q=e.get(L);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=st;let It=j.getViewportCount();for(let At=0;At<It;At++)n.sunShadowMatrix[_+At]=j.getMatrix(At),n.sunShadowCascade[_+At]=j._cascadeData[At];_+=It,m++}n.sun[f]=Z,f++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,Q=e.get(L);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=st,n.directionalShadowMatrix[g]=L.shadow.matrix,E++}n.directional[g]=Z,g++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(O).multiplyScalar(q),Z.distance=X,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[S]=Z;let j=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,j.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[S]=j.matrix,L.castShadow){let Q=e.get(L);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.spotShadow[S]=Q,n.spotShadowMap[S]=st,R++}S++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(O).multiplyScalar(q),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=Z,w++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let j=L.shadow,Q=e.get(L);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=st,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=Z,p++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(q),Z.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[v]=Z,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let N=n.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==p||N.spotLength!==S||N.rectAreaLength!==w||N.hemiLength!==v||N.numSunShadows!==m||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==R||N.numSpotMaps!==y||N.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=g,n.spot.length=S,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,N.sunLength=f,N.directionalLength=g,N.pointLength=p,N.spotLength=S,N.rectAreaLength=w,N.hemiLength=v,N.numSunShadows=m,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=R,N.numSpotMaps=y,N.numLightProbes=P,n.version=x_++)}function l(c,u){let d=0,h=0,f=0,m=0,_=0,g=0,p=u.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){let v=c[S];if(v.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(v.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Fu(i){let t=new v_(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function M_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Fu(i),t.set(s,[o])):r>=a.length?(o=new Fu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var S_=`void main() {
  gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
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
}`,E_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],T_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Ou=new de,Nr=new C,mc=new C;function w_(i,t,e){let n=new us,s=new at,r=new at,a=new Me,o=new Fa,l=new Oa,c={},u=e.maxTextureSize,d={[li]:Be,[Be]:li,[Ne]:Ne},h=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:S_,fragmentShader:b_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let m=new ve;m.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new jt(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Li;let p=this.type;this.render=function(b,R,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Ah&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Li);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Pn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let z=p!==this.type;z&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=b.length;L<O;L++){let q=b[L],X=q.shadow;if(X===void 0){kt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let st=X.getFrameExtents();s.multiply(st),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,X.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Z,X.map===null||z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ys){if(q.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ye(s.x,s.y,{format:di,type:Mn,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new ei(s.x,s.y,ln),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=wn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=De,X.map.depthTexture.magFilter=De}else q.isPointLight?(X.map=new Ho(s.x),X.map.depthTexture=new Ca(s.x,vn)):(X.map=new Ye(s.x,s.y),X.map.depthTexture=new ei(s.x,s.y,vn)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=wn,this.type===Li?(X.map.depthTexture.compareFunction=Z?zo:Bo,X.map.depthTexture.minFilter=Oe,X.map.depthTexture.magFilter=Oe):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=De,X.map.depthTexture.magFilter=De);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let j=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,y);for(let Q=0;Q<j;Q++){let It=X.getCamera(Q);if(q.isPointLight){let At=X.camera,it=X.matrix,dt=q.distance||At.far;dt!==At.far&&(At.far=dt,At.updateProjectionMatrix()),Nr.setFromMatrixPosition(q.matrixWorld),At.position.copy(Nr),mc.copy(At.position),mc.add(E_[Q]),At.up.copy(T_[Q]),At.lookAt(mc),At.updateMatrixWorld(),it.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Ou.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Ou,At.coordinateSystem,At.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(X.map),i.clear());let At=X.getViewport(Q);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),F.viewport(a)}n=X.getFrustum(Q),v(R,y,It,q,this.type)}X.isPointLightShadow!==!0&&this.type===ys&&S(X,y),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,P,N)};function S(b,R){let y=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Ye(s.x,s.y,{format:di,type:Mn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,y,h,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,y,f,_,null)}function w(b,R,y,T){let P=null,N=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)P=N;else if(P=y.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let F=P.uuid,z=R.uuid,L=c[F];L===void 0&&(L={},c[F]=L);let O=L[z];O===void 0&&(O=P.clone(),L[z]=O,R.addEventListener("dispose",E)),P=O}if(P.visible=R.visible,P.wireframe=R.wireframe,T===ys?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=i.properties.get(P);F.light=y}return P}function v(b,R,y,T,P){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===ys)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let z=t.update(b),L=b.material;if(Array.isArray(L)){let O=z.groups;for(let q=0,X=O.length;q<X;q++){let st=O[q],Z=L[st.materialIndex];if(Z&&Z.visible){let j=w(b,Z,T,P);b.onBeforeShadow(i,b,R,y,z,j,st),i.renderBufferDirect(y,null,z,j,b,st),b.onAfterShadow(i,b,R,y,z,j,st)}}}else if(L.visible){let O=w(b,L,T,P);b.onBeforeShadow(i,b,R,y,z,O,null),i.renderBufferDirect(y,null,z,O,b,null),b.onAfterShadow(i,b,R,y,z,O,null)}}let F=b.children;for(let z=0,L=F.length;z<L;z++)v(F[z],R,y,T,P)}function E(b){b.target.removeEventListener("dispose",E);for(let y in c){let T=c[y],P=b.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function A_(i,t){function e(){let U=!1,yt=new Me,tt=null,vt=new Me(0,0,0,0);return{setMask:function(wt){tt!==wt&&!U&&(i.colorMask(wt,wt,wt,wt),tt=wt)},setLocked:function(wt){U=wt},setClear:function(wt,rt,Bt,Nt,ge){ge===!0&&(wt*=Nt,rt*=Nt,Bt*=Nt),yt.set(wt,rt,Bt,Nt),vt.equals(yt)===!1&&(i.clearColor(wt,rt,Bt,Nt),vt.copy(yt))},reset:function(){U=!1,tt=null,vt.set(-1,0,0,0)}}}function n(){let U=!1,yt=!1,tt=null,vt=null,wt=null;return{setReversed:function(rt){if(yt!==rt){let Bt=t.get("EXT_clip_control");rt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),yt=rt;let Nt=wt;wt=null,this.setClear(Nt)}},getReversed:function(){return yt},setTest:function(rt){rt?J(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(rt){tt!==rt&&!U&&(i.depthMask(rt),tt=rt)},setFunc:function(rt){if(yt&&(rt=lu[rt]),vt!==rt){switch(rt){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=rt}},setLocked:function(rt){U=rt},setClear:function(rt){wt!==rt&&(wt=rt,yt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){U=!1,tt=null,vt=null,wt=null,yt=!1}}}function s(){let U=!1,yt=null,tt=null,vt=null,wt=null,rt=null,Bt=null,Nt=null,ge=null;return{setTest:function(oe){U||(oe?J(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(oe){yt!==oe&&!U&&(i.stencilMask(oe),yt=oe)},setFunc:function(oe,un,Sn){(tt!==oe||vt!==un||wt!==Sn)&&(i.stencilFunc(oe,un,Sn),tt=oe,vt=un,wt=Sn)},setOp:function(oe,un,Sn){(rt!==oe||Bt!==un||Nt!==Sn)&&(i.stencilOp(oe,un,Sn),rt=oe,Bt=un,Nt=Sn)},setLocked:function(oe){U=oe},setClear:function(oe){ge!==oe&&(i.clearStencil(oe),ge=oe)},reset:function(){U=!1,yt=null,tt=null,vt=null,wt=null,rt=null,Bt=null,Nt=null,ge=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,S=null,w=null,v=null,E=null,b=null,R=null,y=new Yt(0,0,0),T=0,P=!1,N=null,F=null,z=null,L=null,O=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,st=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=st>=1):Z.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=st>=2);let j=null,Q={},It=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),it=new Me().fromArray(It),dt=new Me().fromArray(At);function Ct(U,yt,tt,vt){let wt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(U,rt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<tt;Bt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(yt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return rt}let H={};H[i.TEXTURE_2D]=Ct(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=Ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=Ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=Ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(is),ht(!1),gt(Ol),J(i.CULL_FACE),ot(Pn);function J(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Mt(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Vt(U,yt){return h[U]!==yt?(i.bindFramebuffer(U,yt),h[U]=yt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=yt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function ft(U,yt){let tt=m,vt=!1;if(U){tt=f.get(yt),tt===void 0&&(tt=[],f.set(yt,tt));let wt=U.textures;if(tt.length!==wt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Bt=wt.length;rt<Bt;rt++)tt[rt]=i.COLOR_ATTACHMENT0+rt;tt.length=wt.length,vt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(tt)}function Wt(U){return _!==U?(i.useProgram(U),_=U,!0):!1}let ue={[Di]:i.FUNC_ADD,[Ch]:i.FUNC_SUBTRACT,[Ph]:i.FUNC_REVERSE_SUBTRACT};ue[Ih]=i.MIN,ue[Lh]=i.MAX;let nt={[Dh]:i.ZERO,[Nh]:i.ONE,[Uh]:i.SRC_COLOR,[Vl]:i.SRC_ALPHA,[Vh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[Hl]:i.ONE_MINUS_SRC_ALPHA,[kh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Gh]:i.ONE_MINUS_CONSTANT_COLOR,[Wh]:i.CONSTANT_ALPHA,[Xh]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(U,yt,tt,vt,wt,rt,Bt,Nt,ge,oe){if(U===Pn){g===!0&&(Mt(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),U!==Rh){if(U!==p||oe!==P){if((S!==Di||E!==Di)&&(i.blendEquation(i.FUNC_ADD),S=Di,E=Di),oe)switch(U){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",U);break}else switch(U){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kl:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",U);break}w=null,v=null,b=null,R=null,y.set(0,0,0),T=0,p=U,P=oe}return}wt=wt||yt,rt=rt||tt,Bt=Bt||vt,(yt!==S||wt!==E)&&(i.blendEquationSeparate(ue[yt],ue[wt]),S=yt,E=wt),(tt!==w||vt!==v||rt!==b||Bt!==R)&&(i.blendFuncSeparate(nt[tt],nt[vt],nt[rt],nt[Bt]),w=tt,v=vt,b=rt,R=Bt),(Nt.equals(y)===!1||ge!==T)&&(i.blendColor(Nt.r,Nt.g,Nt.b,ge),y.copy(Nt),T=ge),p=U,P=!1}function ct(U,yt){U.side===Ne?Mt(i.CULL_FACE):J(i.CULL_FACE);let tt=U.side===Be;yt&&(tt=!tt),ht(tt),U.blending===vs&&U.transparent===!1?ot(Pn):ot(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let vt=U.stencilWrite;o.setTest(vt),vt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),zt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(U){N!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),N=U)}function gt(U){U!==Th?(J(i.CULL_FACE),U!==F&&(U===Ol?i.cullFace(i.BACK):U===wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),F=U}function Ht(U){U!==z&&(X&&i.lineWidth(U),z=U)}function zt(U,yt,tt){U?(J(i.POLYGON_OFFSET_FILL),(L!==yt||O!==tt)&&(L=yt,O=tt,a.getReversed()&&(yt=-yt),i.polygonOffset(yt,tt))):Mt(i.POLYGON_OFFSET_FILL)}function qt(U){U?J(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Jt(U){U===void 0&&(U=i.TEXTURE0+q-1),j!==U&&(i.activeTexture(U),j=U)}function I(U,yt,tt){tt===void 0&&(j===null?tt=i.TEXTURE0+q-1:tt=j);let vt=Q[tt];vt===void 0&&(vt={type:void 0,texture:void 0},Q[tt]=vt),(vt.type!==U||vt.texture!==yt)&&(j!==tt&&(i.activeTexture(tt),j=tt),i.bindTexture(U,yt||H[U]),vt.type=U,vt.texture=yt)}function ae(){let U=Q[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function x(){try{i.texSubImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function B(){try{i.texSubImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function ut(){try{i.texStorage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function mt(){try{i.texStorage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function $(){try{i.texImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function et(){try{i.texImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function _t(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function Ft(U,yt){d[U]!==yt&&(i.pixelStorei(U,yt),d[U]=yt)}function St(U){it.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),it.copy(U))}function xt(U){dt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),dt.copy(U))}function Ot(U,yt){let tt=c.get(yt);tt===void 0&&(tt=new WeakMap,c.set(yt,tt));let vt=tt.get(U);vt===void 0&&(vt=i.getUniformBlockIndex(yt,U.name),tt.set(U,vt))}function Gt(U,yt){let vt=c.get(yt).get(U);l.get(yt)!==vt&&(i.uniformBlockBinding(yt,vt,U.__bindingPointIndex),l.set(yt,vt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,Q={},h={},f=new WeakMap,m=[],_=null,g=!1,p=null,S=null,w=null,v=null,E=null,b=null,R=null,y=new Yt(0,0,0),T=0,P=!1,N=null,F=null,z=null,L=null,O=null,it.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:Mt,bindFramebuffer:Vt,drawBuffers:ft,useProgram:Wt,setBlending:ot,setMaterial:ct,setFlipSided:ht,setCullFace:gt,setLineWidth:Ht,setPolygonOffset:zt,setScissorTest:qt,activeTexture:Jt,bindTexture:I,unbindTexture:ae,compressedTexImage2D:ee,compressedTexImage3D:A,texImage2D:$,texImage3D:et,pixelStorei:Ft,getParameter:_t,updateUBOMapping:Ot,uniformBlockBinding:Gt,texStorage2D:ut,texStorage3D:mt,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:K,scissor:St,viewport:xt,reset:Kt}}function R_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap,d=new Set,h,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return m?new OffscreenCanvas(A,x):Zs("canvas")}function g(A,x,B){let G=1,K=ee(A);if((K.width>B||K.height>B)&&(G=B/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ut=Math.floor(G*K.width),mt=Math.floor(G*K.height);h===void 0&&(h=_(ut,mt));let $=x?_(ut,mt):h;return $.width=ut,$.height=mt,$.getContext("2d").drawImage(A,0,0,ut,mt),kt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ut+"x"+mt+")."),$}else return"data"in A&&kt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function S(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,x,B,G,K,ut=!1){if(A!==null){if(i[A]!==void 0)return i[A];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;G&&(mt=t.get("EXT_texture_norm16"),mt||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&mt&&($=mt.R16_EXT),B===i.SHORT&&mt&&($=mt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),x===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&mt&&($=mt.RG16_EXT),B===i.SHORT&&mt&&($=mt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&mt&&($=mt.RGB16_EXT),B===i.SHORT&&mt&&($=mt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){let et=ut?Ys:ie.getTransfer(K);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=et===ce?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&mt&&($=mt.RGBA16_EXT),B===i.SHORT&&mt&&($=mt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function E(A,x){let B;return A?x===null||x===vn||x===Ss?B=i.DEPTH24_STENCIL8:x===ln?B=i.DEPTH32F_STENCIL8:x===Ms&&(B=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vn||x===Ss?B=i.DEPTH_COMPONENT24:x===ln?B=i.DEPTH_COMPONENT32F:x===Ms&&(B=i.DEPTH_COMPONENT16),B}function b(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==De&&A.minFilter!==Oe?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){let x=A.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function y(A){let x=A.target;x.removeEventListener("dispose",y),N(x)}function T(A){let x=n.get(A);if(x.__webglInit===void 0)return;let B=A.source,G=f.get(B);if(G){let K=G[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(A),Object.keys(G).length===0&&f.delete(B)}n.remove(A)}function P(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let B=A.source,G=f.get(B);delete G[x.__cacheKey],a.memory.textures--}function N(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let K=0;K<x.__webglFramebuffer[G].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[G][K]);else i.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)i.deleteFramebuffer(x.__webglFramebuffer[G]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=A.textures;for(let G=0,K=B.length;G<K;G++){let ut=n.get(B[G]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(B[G])}n.remove(A)}let F=0;function z(){F=0}function L(){return F}function O(A){F=A}function q(){let A=F;return A>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function X(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function st(A,x){let B=n.get(A);if(A.isVideoTexture&&I(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let G=A.image;if(G===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Z(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Mt(B,A,x);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function j(A,x){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Mt(B,A,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function Q(A,x){let B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Vt(B,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let It={[ss]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},At={[De]:i.NEAREST,[Zh]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Oe]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},it={[jh]:i.NEVER,[iu]:i.ALWAYS,[Qh]:i.LESS,[Bo]:i.LEQUAL,[tu]:i.EQUAL,[zo]:i.GEQUAL,[eu]:i.GREATER,[nu]:i.NOTEQUAL};function dt(A,x){if(x.type===ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Oe||x.magFilter===Qa||x.magFilter===Er||x.magFilter===hi||x.minFilter===Oe||x.minFilter===Qa||x.minFilter===Er||x.minFilter===hi)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,It[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,It[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,It[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,At[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,At[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,it[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===De||x.minFilter!==Er&&x.minFilter!==hi||x.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ct(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));let G=x.source,K=f.get(G);K===void 0&&(K={},f.set(G,K));let ut=X(x);if(ut!==A.__cacheKey){K[ut]===void 0&&(K[ut]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[ut].usedTimes++;let mt=K[A.__cacheKey];mt!==void 0&&(K[A.__cacheKey].usedTimes--,mt.usedTimes===0&&P(x)),A.__cacheKey=ut,A.__webglTexture=K[ut].texture}return B}function H(A,x,B){return Math.floor(Math.floor(A/B)/x)}function J(A,x,B,G){let ut=A.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,G,x.data);else{ut.sort((Ft,St)=>Ft.start-St.start);let mt=0;for(let Ft=1;Ft<ut.length;Ft++){let St=ut[mt],xt=ut[Ft],Ot=St.start+St.count,Gt=H(xt.start,x.width,4),Kt=H(St.start,x.width,4);xt.start<=Ot+1&&Gt===Kt&&H(xt.start+xt.count-1,x.width,4)===Gt?St.count=Math.max(St.count,xt.start+xt.count-St.start):(++mt,ut[mt]=xt)}ut.length=mt+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ft=0,St=ut.length;Ft<St;Ft++){let xt=ut[Ft],Ot=Math.floor(xt.start/4),Gt=Math.ceil(xt.count/4),Kt=Ot%x.width,U=Math.floor(Ot/x.width),yt=Gt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Kt,U,yt,tt,B,G,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function Mt(A,x,B){let G=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=i.TEXTURE_3D);let K=Ct(A,x),ut=x.source;e.bindTexture(G,A.__webglTexture,i.TEXTURE0+B);let mt=n.get(ut);if(ut.version!==mt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let tt=ie.getPrimaries(ie.workingColorSpace),vt=x.colorSpace===Hn?null:ie.getPrimaries(x.colorSpace),wt=x.colorSpace===Hn||tt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let et=g(x.image,!1,s.maxTextureSize);et=ae(x,et);let _t=r.convert(x.format,x.colorSpace),Ft=r.convert(x.type),St=v(x.internalFormat,_t,Ft,x.normalized,x.colorSpace,x.isVideoTexture);dt(G,x);let xt,Ot=x.mipmaps,Gt=x.isVideoTexture!==!0,Kt=mt.__version===void 0||K===!0,U=ut.dataReady,yt=b(x,et);if(x.isDepthTexture)St=E(x.format===ui,x.type),Kt&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,St,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,St,et.width,et.height,0,_t,Ft,null));else if(x.isDataTexture)if(Ot.length>0){Gt&&Kt&&e.texStorage2D(i.TEXTURE_2D,yt,St,Ot[0].width,Ot[0].height);for(let tt=0,vt=Ot.length;tt<vt;tt++)xt=Ot[tt],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,xt.width,xt.height,_t,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,tt,St,xt.width,xt.height,0,_t,Ft,xt.data);x.generateMipmaps=!1}else Gt?(Kt&&e.texStorage2D(i.TEXTURE_2D,yt,St,et.width,et.height),U&&J(x,et,_t,Ft)):e.texImage2D(i.TEXTURE_2D,0,St,et.width,et.height,0,_t,Ft,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Gt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,St,Ot[0].width,Ot[0].height,et.depth);for(let tt=0,vt=Ot.length;tt<vt;tt++)if(xt=Ot[tt],x.format!==cn)if(_t!==null)if(Gt){if(U)if(x.layerUpdates.size>0){let wt=cc(xt.width,xt.height,x.format,x.type);for(let rt of x.layerUpdates){let Bt=xt.data.subarray(rt*wt/xt.data.BYTES_PER_ELEMENT,(rt+1)*wt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,rt,xt.width,xt.height,1,_t,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,xt.width,xt.height,et.depth,_t,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,St,xt.width,xt.height,et.depth,0,xt.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,xt.width,xt.height,et.depth,_t,Ft,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,St,xt.width,xt.height,et.depth,0,_t,Ft,xt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Gt&&Kt&&e.texStorage2D(i.TEXTURE_2D,yt,St,Ot[0].width,Ot[0].height);for(let tt=0,vt=Ot.length;tt<vt;tt++)xt=Ot[tt],x.format!==cn?_t!==null?Gt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,St,xt.width,xt.height,0,xt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?U&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,xt.width,xt.height,_t,Ft,xt.data):e.texImage2D(i.TEXTURE_2D,tt,St,xt.width,xt.height,0,_t,Ft,xt.data)}else if(x.isDataArrayTexture)if(Gt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,St,et.width,et.height,et.depth),U)if(x.layerUpdates.size>0){let tt=cc(et.width,et.height,x.format,x.type);for(let vt of x.layerUpdates){let wt=et.data.subarray(vt*tt/et.data.BYTES_PER_ELEMENT,(vt+1)*tt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,et.width,et.height,1,_t,Ft,wt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,_t,Ft,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,et.width,et.height,et.depth,0,_t,Ft,et.data);else if(x.isData3DTexture)Gt?(Kt&&e.texStorage3D(i.TEXTURE_3D,yt,St,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,_t,Ft,et.data)):e.texImage3D(i.TEXTURE_3D,0,St,et.width,et.height,et.depth,0,_t,Ft,et.data);else if(x.isFramebufferTexture){if(Kt)if(Gt)e.texStorage2D(i.TEXTURE_2D,yt,St,et.width,et.height);else{let tt=et.width,vt=et.height;for(let wt=0;wt<yt;wt++)e.texImage2D(i.TEXTURE_2D,wt,St,tt,vt,0,_t,Ft,null),tt>>=1,vt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),et.parentNode!==tt){tt.appendChild(et),d.add(x),tt.onpaint=vt=>{let wt=vt.changedElements;for(let rt of d)wt.includes(rt.image)&&(rt.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let wt=i.RGBA,rt=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,rt,Bt,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(Gt&&Kt){let tt=ee(Ot[0]);e.texStorage2D(i.TEXTURE_2D,yt,St,tt.width,tt.height)}for(let tt=0,vt=Ot.length;tt<vt;tt++)xt=Ot[tt],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,_t,Ft,xt):e.texImage2D(i.TEXTURE_2D,tt,St,_t,Ft,xt);x.generateMipmaps=!1}else if(Gt){if(Kt){let tt=ee(et);e.texStorage2D(i.TEXTURE_2D,yt,St,tt.width,tt.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ft,et)}else e.texImage2D(i.TEXTURE_2D,0,St,_t,Ft,et);p(x)&&S(G),mt.__version=ut.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Vt(A,x,B){if(x.image.length!==6)return;let G=Ct(A,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let ut=n.get(K);if(K.version!==ut.__version||G===!0){e.activeTexture(i.TEXTURE0+B);let mt=ie.getPrimaries(ie.workingColorSpace),$=x.colorSpace===Hn?null:ie.getPrimaries(x.colorSpace),et=x.colorSpace===Hn||mt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let _t=x.isCompressedTexture||x.image[0].isCompressedTexture,Ft=x.image[0]&&x.image[0].isDataTexture,St=[];for(let rt=0;rt<6;rt++)!_t&&!Ft?St[rt]=g(x.image[rt],!0,s.maxCubemapSize):St[rt]=Ft?x.image[rt].image:x.image[rt],St[rt]=ae(x,St[rt]);let xt=St[0],Ot=r.convert(x.format,x.colorSpace),Gt=r.convert(x.type),Kt=v(x.internalFormat,Ot,Gt,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,yt=ut.__version===void 0||G===!0,tt=K.dataReady,vt=b(x,xt);dt(i.TEXTURE_CUBE_MAP,x);let wt;if(_t){U&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,xt.width,xt.height);for(let rt=0;rt<6;rt++){wt=St[rt].mipmaps;for(let Bt=0;Bt<wt.length;Bt++){let Nt=wt[Bt];x.format!==cn?Ot!==null?U?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Nt.width,Nt.height,Ot,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,Kt,Nt.width,Nt.height,0,Nt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,0,0,Nt.width,Nt.height,Ot,Gt,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt,Kt,Nt.width,Nt.height,0,Ot,Gt,Nt.data)}}}else{if(wt=x.mipmaps,U&&yt){wt.length>0&&vt++;let rt=ee(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ft){U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,St[rt].width,St[rt].height,Ot,Gt,St[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,St[rt].width,St[rt].height,0,Ot,Gt,St[rt].data);for(let Bt=0;Bt<wt.length;Bt++){let ge=wt[Bt].image[rt].image;U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,ge.width,ge.height,Ot,Gt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,Kt,ge.width,ge.height,0,Ot,Gt,ge.data)}}else{U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,Gt,St[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,Ot,Gt,St[rt]);for(let Bt=0;Bt<wt.length;Bt++){let Nt=wt[Bt];U?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,0,0,Ot,Gt,Nt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Bt+1,Kt,Ot,Gt,Nt.image[rt])}}}p(x)&&S(i.TEXTURE_CUBE_MAP),ut.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ft(A,x,B,G,K,ut){let mt=r.convert(B.format,B.colorSpace),$=r.convert(B.type),et=v(B.internalFormat,mt,$,B.normalized,B.colorSpace),_t=n.get(x),Ft=n.get(B);if(Ft.__renderTarget=x,!_t.__hasExternalTextures){let St=Math.max(1,x.width>>ut),xt=Math.max(1,x.height>>ut);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ut,et,St,xt,x.depth,0,mt,$,null):e.texImage2D(K,ut,et,St,xt,0,mt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Jt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,K,Ft.__webglTexture,0,qt(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,K,Ft.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(A,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let G=x.depthTexture,K=G&&G.isDepthTexture?G.type:null,ut=E(x.stencilBuffer,K),mt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Jt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(x),ut,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(x),ut,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ut,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,A)}else{let G=x.textures;for(let K=0;K<G.length;K++){let ut=G[K],mt=r.convert(ut.format,ut.colorSpace),$=r.convert(ut.type),et=v(ut.internalFormat,mt,$,ut.normalized,ut.colorSpace);Jt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(x),et,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(x),et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(A,x,B){let G=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),dt(i.TEXTURE_CUBE_MAP,x.depthTexture);let _t=r.convert(x.depthTexture.format),Ft=r.convert(x.depthTexture.type),St;x.depthTexture.format===wn?St=i.DEPTH_COMPONENT24:x.depthTexture.format===ui&&(St=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,St,x.width,x.height,0,_t,Ft,null)}}else st(x.depthTexture,0);let ut=K.__webglTexture,mt=qt(x),$=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,et=x.depthTexture.format===ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===wn)Jt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,$,ut,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,et,$,ut,0);else if(x.depthTexture.format===ui)Jt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,$,ut,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,et,$,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){let x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let G=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=G}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)ue(x.__webglFramebuffer[G],A,G);else{let G=A.texture.mipmaps;G&&G.length>0?ue(x.__webglFramebuffer[0],A,0):ue(x.__webglFramebuffer,A,0)}else if(B){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=i.createRenderbuffer(),Wt(x.__webglDepthbuffer[G],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ut)}}else{let G=A.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Wt(x.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ut)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(A,x,B){let G=n.get(A);x!==void 0&&ft(G.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&nt(A)}function ct(A){let x=A.texture,B=n.get(A),G=n.get(x);A.addEventListener("dispose",y);let K=A.textures,ut=A.isWebGLCubeRenderTarget===!0,mt=K.length>1;if(mt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=x.version,a.memory.textures++),ut){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let et=0;et<x.mipmaps.length;et++)B.__webglFramebuffer[$][et]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(mt)for(let $=0,et=K.length;$<et;$++){let _t=n.get(K[$]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Jt(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){let et=K[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let _t=r.convert(et.format,et.colorSpace),Ft=r.convert(et.type),St=v(et.internalFormat,_t,Ft,et.normalized,et.colorSpace,A.isXRRenderTarget===!0),xt=qt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,St,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),dt(i.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)ft(B.__webglFramebuffer[$][et],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,et);else ft(B.__webglFramebuffer[$],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(x)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let $=0,et=K.length;$<et;$++){let _t=K[$],Ft=n.get(_t),St=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(St=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Ft.__webglTexture),dt(St,_t),ft(B.__webglFramebuffer,A,_t,i.COLOR_ATTACHMENT0+$,St,0),p(_t)&&S(St)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,G.__webglTexture),dt($,x),x.mipmaps&&x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)ft(B.__webglFramebuffer[et],A,x,i.COLOR_ATTACHMENT0,$,et);else ft(B.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,$,0);p(x)&&S($),e.unbindTexture()}A.depthBuffer&&nt(A)}function ht(A){let x=A.textures;for(let B=0,G=x.length;B<G;B++){let K=x[B];if(p(K)){let ut=w(A),mt=n.get(K).__webglTexture;e.bindTexture(ut,mt),S(ut),e.unbindTexture()}}}let gt=[],Ht=[];function zt(A){if(A.samples>0){if(Jt(A)===!1){let x=A.textures,B=A.width,G=A.height,K=i.COLOR_BUFFER_BIT,ut=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(A),$=x.length>1;if($)for(let _t=0;_t<x.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let et=A.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);let Ft=n.get(x[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,K,i.NEAREST),l===!0&&(gt.length=0,Ht.length=0,gt.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(gt.push(ut),Ht.push(ut),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let _t=0;_t<x.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);let Ft=n.get(x[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function qt(A){return Math.min(s.maxSamples,A.samples)}function Jt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function I(A){let x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function ae(A,x){let B=A.colorSpace,G=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==qs&&B!==Hn&&(ie.getTransfer(B)===ce?(G!==cn||K!==Je)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",B)),x}function ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=st,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=Q,this.rebindTextures=ot,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function C_(i,t){function e(n,s=Hn){let r,a=ie.getTransfer(s);if(n===Je)return i.UNSIGNED_BYTE;if(n===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===no)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ql)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kl)return i.BYTE;if(n===$l)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===to)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===tc)return i.ALPHA;if(n===ec)return i.RGB;if(n===cn)return i.RGBA;if(n===wn)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===io)return i.RED;if(n===so)return i.RED_INTEGER;if(n===di)return i.RG;if(n===ro)return i.RG_INTEGER;if(n===ao)return i.RGBA_INTEGER;if(n===Tr||n===wr||n===Ar||n===Rr)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===Cr||n===_o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===fo)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===po)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===mo)return r.COMPRESSED_R11_EAC;if(n===go)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Cr)return r.COMPRESSED_RG11_EAC;if(n===_o)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xo||n===yo||n===vo||n===Mo||n===So||n===bo||n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===To)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lo||n===Do||n===No)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lo)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===Fo||n===Pr||n===Oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var P_=`
void main() {

  gl_Position = vec4( position, 1.0 );

}`,I_=`
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

}`,bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new nr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new nn({vertexShader:P_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ec=class extends gn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new bc,p={},S=e.getContextAttributes(),w=null,v=null,E=[],b=[],R=new at,y=null,T=null,P=new Fe;P.viewport=new Me;let N=new Fe;N.viewport=new Me;let F=[P,N],z=new Ja,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=E[H];return J===void 0&&(J=new hs,E[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=E[H];return J===void 0&&(J=new hs,E[H]=J),J.getGripSpace()},this.getHand=function(H){let J=E[H];return J===void 0&&(J=new hs,E[H]=J),J.getHandSpace()};function q(H){let J=b.indexOf(H.inputSource);if(J===-1)return;let Mt=E[J];Mt!==void 0&&(Mt.update(H.inputSource,H.frame,c||a),Mt.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",st);for(let H=0;H<E.length;H++){let J=b[H];J!==null&&(b[H]=null,E[H].disconnect(J))}L=null,O=null,g.reset();for(let H in p)delete p[H];if(t.setRenderTarget(w),f=null,h=null,d=null,s=null,v=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),T!==null){let H=T.camera;H.fov=T.fov,H.zoom=T.zoom,H.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",st),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Vt=null,ft=null;S.depth&&(ft=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=S.stencil?ui:wn,Vt=S.stencil?Ss:vn);let Wt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Wt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new Ye(h.textureWidth,h.textureHeight,{format:cn,type:Je,depthTexture:new ei(h.textureWidth,h.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ye(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function st(H){for(let J=0;J<H.removed.length;J++){let Mt=H.removed[J],Vt=b.indexOf(Mt);Vt>=0&&(b[Vt]=null,E[Vt].disconnect(Mt))}for(let J=0;J<H.added.length;J++){let Mt=H.added[J],Vt=b.indexOf(Mt);if(Vt===-1){for(let Wt=0;Wt<E.length;Wt++)if(Wt>=b.length){b.push(Mt),Vt=Wt;break}else if(b[Wt]===null){b[Wt]=Mt,Vt=Wt;break}if(Vt===-1)break}let ft=E[Vt];ft&&ft.connect(Mt)}}let Z=new C,j=new C;function Q(H,J,Mt){Z.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(Mt.matrixWorld);let Vt=Z.distanceTo(j),ft=J.projectionMatrix.elements,Wt=Mt.projectionMatrix.elements,ue=ft[14]/(ft[10]-1),nt=ft[14]/(ft[10]+1),ot=(ft[9]+1)/ft[5],ct=(ft[9]-1)/ft[5],ht=(ft[8]-1)/ft[0],gt=(Wt[8]+1)/Wt[0],Ht=ue*ht,zt=ue*gt,qt=Vt/(-ht+gt),Jt=qt*-ht;if(J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Jt),H.translateZ(qt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ft[10]===-1)H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let I=ue+qt,ae=nt+qt,ee=Ht-Jt,A=zt+(Vt-Jt),x=ot*nt/ae*I,B=ct*nt/ae*I;H.projectionMatrix.makePerspective(ee,A,x,B,I,ae),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function It(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let J=H.near,Mt=H.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),z.near=N.near=P.near=J,z.far=N.far=P.far=Mt,(L!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,O=z.far),z.layers.mask=H.layers.mask|6,P.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;let Vt=H.parent,ft=z.cameras;It(z,Vt);for(let Wt=0;Wt<ft.length;Wt++)It(ft[Wt],Vt);ft.length===2?Q(z,P,N):z.projectionMatrix.copy(P.projectionMatrix),T===null&&H.isPerspectiveCamera&&(T={camera:H,fov:H.fov,zoom:H.zoom}),At(H,z,Vt)};function At(H,J,Mt){Mt===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(Mt.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=os*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(H){return p[H]};let it=null;function dt(H,J){if(u=J.getViewerPose(c||a),m=J,u!==null){let Mt=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Vt=!1;Mt.length!==z.cameras.length&&(z.cameras.length=0,Vt=!0);for(let nt=0;nt<Mt.length;nt++){let ot=Mt[nt],ct=null;if(f!==null)ct=f.getViewport(ot);else{let gt=d.getViewSubImage(h,ot);ct=gt.viewport,nt===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let ht=F[nt];ht===void 0&&(ht=new Fe,ht.layers.enable(nt),ht.viewport=new Me,F[nt]=ht),ht.matrix.fromArray(ot.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ot.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),nt===0&&(z.matrix.copy(ht.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Vt===!0&&z.cameras.push(ht)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let nt=d.getDepthInformation(Mt[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,s.renderState)}if(ft&&ft.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let nt=0;nt<Mt.length;nt++){let ot=Mt[nt].camera;if(ot){let ct=p[ot];ct||(ct=new nr,p[ot]=ct);let ht=d.getCameraImage(ot);ct.sourceTexture=ht}}}}for(let Mt=0;Mt<E.length;Mt++){let Vt=b[Mt],ft=E[Mt];Vt!==null&&ft!==void 0&&ft.update(Vt,J,c||a)}it&&it(H,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}let Ct=new Bu;Ct.setAnimationLoop(dt),this.setAnimationLoop=function(H){it=H},this.dispose=function(){}}},L_=new de,Wu=new Zt;Wu.set(-1,0,0,0,1,0,0,0,1);function D_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ac(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,S,w):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),w=S.envMap,v=S.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Wu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function N_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let b=E.program;n.uniformBlockBinding(v,b)}function c(v,E){let b=s[v.id];b===void 0&&(g(v),b=u(v),s[v.id]=b,v.addEventListener("dispose",S));let R=E.program;n.updateUBOMapping(v,R);let y=t.render.frame;r[v.id]!==y&&(h(v),r[v.id]=y)}function u(v){let E=d();v.__bindingPointIndex=E;let b=i.createBuffer(),R=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let E=s[v.id],b=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let y=0,T=b.length;y<T;y++){let P=b[y];if(Array.isArray(P))for(let N=0,F=P.length;N<F;N++)f(P[N],y,N,R);else f(P,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,E,b,R){if(_(v,E,b,R)===!0){let y=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let N=0;N<T.length;N++){let F=T[N],z=p(F);m(F,v.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function m(v,E,b){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,b)}function _(v,E,b,R){let y=v.value,T=E+"_"+b;if(R[T]===void 0)return typeof y=="number"||typeof y=="boolean"?R[T]=y:ArrayBuffer.isView(y)?R[T]=y.slice():R[T]=y.clone(),!0;{let P=R[T];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return R[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function g(v){let E=v.uniforms,b=0,R=16;for(let T=0,P=E.length;T<P;T++){let N=Array.isArray(E[T])?E[T]:[E[T]];for(let F=0,z=N.length;F<z;F++){let L=N[F],O=Array.isArray(L.value)?L.value:[L.value];for(let q=0,X=O.length;q<X;q++){let st=O[q],Z=p(st),j=b%R,Q=j%Z.boundary,It=j+Q;b+=Q,It!==0&&R-It<Z.storage&&(b+=R-It),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=Z.storage}}}let y=b%R;return y>0&&(b+=R-y),v.__size=b,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",v),E}function S(v){let E=v.target;E.removeEventListener("dispose",S);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var U_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),In=null;function F_(){return In===null&&(In=new Si(U_,16,16,di,Mn),In.name="DFG_LUT",In.minFilter=Oe,In.magFilter=Oe,In.wrapS=Tn,In.wrapT=Tn,In.generateMipmaps=!1,In.needsUpdate=!0),In}var Go=class{constructor(t={}){let{canvas:e=ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Je}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=f,g=new Set([ao,ro,so]),p=new Set([Je,vn,Ms,Ss,eo,no]),S=new Uint32Array(4),w=new Int32Array(4),v=new C,E=null,b=null,R=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,F=null,z=null,L=null,O=null;this._outputColorSpace=Ue;let q=0,X=0,st=null,Z=-1,j=null,Q=new Me,It=new Me,At=null,it=new Yt(0),dt=0,Ct=e.width,H=e.height,J=1,Mt=null,Vt=null,ft=new Me(0,0,Ct,H),Wt=new Me(0,0,Ct,H),ue=!1,nt=new us,ot=!1,ct=!1,ht=new de,gt=new C,Ht=new Me,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Jt(){return st===null?J:1}let I=n;function ae(M,D){return e.getContext(M,D)}let ee,A,x,B,G,K,ut,mt,$,et,_t,Ft,St,xt,Ot,Gt,Kt,U,yt,tt,vt,wt,rt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",un,!1),I===null){let D="webgl2";if(I=ae(D,M),I===null)throw ae(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(M){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",un,!1),Xt("WebGLRenderer: "+M.message),M}function Bt(){ee=new G0(I),ee.init(),vt=new C_(I,ee),A=new D0(I,ee,t,vt),x=new A_(I,ee),A.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),z=I.createFramebuffer(),L=I.createFramebuffer(),O=I.createFramebuffer(),B=new q0(I),G=new f_,K=new R_(I,ee,x,G,A,vt,B),ut=new H0(P),mt=new Zf(I),wt=new I0(I,mt),$=new W0(I,mt,B,wt),et=new Z0(I,$,mt,wt,B),U=new Y0(I,A,K),Ot=new N0(G),_t=new d_(P,ut,ee,A,wt,Ot),Ft=new D_(P,G),St=new m_,xt=new M_(ee),Kt=new P0(P,ut,x,et,m,l),Gt=new w_(P,et,A),rt=new N_(I,B,A,x),yt=new L0(I,ee,B),tt=new X0(I,ee,B),B.programs=_t.programs,P.capabilities=A,P.extensions=ee,P.properties=G,P.renderLists=St,P.shadowMap=Gt,P.state=x,P.info=B}_!==Je&&(T=new K0(_,e.width,e.height,o,s,r));let Nt=new Ec(P,I);this.xr=Nt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let M=ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(M){M!==void 0&&(J=M,this.setSize(Ct,H,!1))},this.getSize=function(M){return M.set(Ct,H)},this.setSize=function(M,D,W=!0){if(Nt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=M,H=D,e.width=Math.floor(M*J),e.height=Math.floor(D*J),W===!0&&(e.style.width=M+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Ct*J,H*J).floor()},this.setDrawingBufferSize=function(M,D,W){Ct=M,H=D,J=W,e.width=Math.floor(M*W),e.height=Math.floor(D*W),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(_===Je){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(ft)},this.setViewport=function(M,D,W,k){M.isVector4?ft.set(M.x,M.y,M.z,M.w):ft.set(M,D,W,k),x.viewport(Q.copy(ft).multiplyScalar(J).round())},this.getScissor=function(M){return M.copy(Wt)},this.setScissor=function(M,D,W,k){M.isVector4?Wt.set(M.x,M.y,M.z,M.w):Wt.set(M,D,W,k),x.scissor(It.copy(Wt).multiplyScalar(J).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(M){x.setScissorTest(ue=M)},this.setOpaqueSort=function(M){Mt=M},this.setTransparentSort=function(M){Vt=M},this.getClearColor=function(M){return M.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,W=!0){let k=0;if(M){let V=!1;if(st!==null){let Tt=st.texture.format;V=g.has(Tt)}if(V){let Tt=st.texture.type,Pt=p.has(Tt),Et=Kt.getClearColor(),Lt=Kt.getClearAlpha(),Ut=Et.r,Qt=Et.g,ne=Et.b;Pt?(S[0]=Ut,S[1]=Qt,S[2]=ne,S[3]=Lt,I.clearBufferuiv(I.COLOR,0,S)):(w[0]=Ut,w[1]=Qt,w[2]=ne,w[3]=Lt,I.clearBufferiv(I.COLOR,0,w))}else k|=I.COLOR_BUFFER_BIT}D&&(k|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",un,!1),Kt.dispose(),St.dispose(),xt.dispose(),G.dispose(),ut.dispose(),et.dispose(),wt.dispose(),rt.dispose(),_t.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Nc),Nt.removeEventListener("sessionend",Uc),mi.stop()};function ge(M){M.preventDefault(),ic("WebGLRenderer: Context Lost."),N=!0}function oe(){ic("WebGLRenderer: Context Restored."),N=!1;let M=B.autoReset,D=Gt.enabled,W=Gt.autoUpdate,k=Gt.needsUpdate,V=Gt.type;Bt(),B.autoReset=M,Gt.enabled=D,Gt.autoUpdate=W,Gt.needsUpdate=k,Gt.type=V}function un(M){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Sn(M){let D=M.target;D.removeEventListener("dispose",Sn),cd(D)}function cd(M){hd(M),G.remove(M)}function hd(M){let D=G.get(M).programs;D!==void 0&&(D.forEach(function(W){_t.releaseProgram(W)}),M.isShaderMaterial&&_t.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,W,k,V,Tt){D===null&&(D=zt);let Pt=V.isMesh&&V.matrixWorld.determinantAffine()<0,Et=fd(M,D,W,k,V);x.setMaterial(k,Pt);let Lt=W.index,Ut=1;if(k.wireframe===!0){if(Lt=$.getWireframeAttribute(W),Lt===void 0)return;Ut=2}let Qt=W.drawRange,ne=W.attributes.position,Dt=Qt.start*Ut,le=(Qt.start+Qt.count)*Ut;Tt!==null&&(Dt=Math.max(Dt,Tt.start*Ut),le=Math.min(le,(Tt.start+Tt.count)*Ut)),Lt!==null?(Dt=Math.max(Dt,0),le=Math.min(le,Lt.count)):ne!=null&&(Dt=Math.max(Dt,0),le=Math.min(le,ne.count));let we=le-Dt;if(we<0||we===1/0)return;wt.setup(V,k,Et,W,Lt);let xe,me=yt;if(Lt!==null&&(xe=mt.get(Lt),me=tt,me.setIndex(xe)),V.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*Jt()),me.setMode(I.LINES)):me.setMode(I.TRIANGLES);else if(V.isLine){let ze=k.linewidth;ze===void 0&&(ze=1),x.setLineWidth(ze*Jt()),V.isLineSegments?me.setMode(I.LINES):V.isLineLoop?me.setMode(I.LINE_LOOP):me.setMode(I.LINE_STRIP)}else V.isPoints?me.setMode(I.POINTS):V.isSprite&&me.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))me.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let ze=V._multiDrawStarts,Rt=V._multiDrawCounts,Ge=V._multiDrawCount,re=Lt?mt.get(Lt).bytesPerElement:1,an=G.get(k).currentProgram.getUniforms();for(let bn=0;bn<Ge;bn++)an.setValue(I,"_gl_DrawID",bn),me.render(ze[bn]/re,Rt[bn])}else if(V.isInstancedMesh)me.renderInstances(Dt,we,V.count);else if(W.isInstancedBufferGeometry){let ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Rt=Math.min(W.instanceCount,ze);me.renderInstances(Dt,we,Rt)}else me.render(Dt,we)};function Dc(M,D,W,k){F!==null&&M.isNodeMaterial&&F.setObject(k,M),ot===!0&&Ot.setState(M,W,!1),M.transparent===!0&&M.side===Ne&&M.forceSinglePass===!1?(M.side=Be,M.needsUpdate=!0,kr(M,D,k),M.side=li,M.needsUpdate=!0,kr(M,D,k),M.side=Ne):kr(M,D,k)}this.compile=function(M,D,W=null){W===null&&(W=M),F!==null&&F.renderStart(M,D,W),b=xt.get(W),b.init(D),y.push(b),W.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),M!==W&&M.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),F!==null&&F.updateLights(b.state.lightsArray),ct=this.localClippingEnabled,ot=Ot.init(this.clippingPlanes,ct),ot===!0&&Ot.setGlobalState(this.clippingPlanes,D),F!==null&&Gt.render(b.state.shadowsArray,W,D);let k=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Tt=V.material;if(Tt)if(Array.isArray(Tt))for(let Pt=0;Pt<Tt.length;Pt++){let Et=Tt[Pt];Dc(Et,W,D,V),k.add(Et)}else Dc(Tt,W,D,V),k.add(Tt)}),b=y.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(M,D,W=null){let k=this.compile(M,D,W);return new Promise(V=>{function Tt(){if(k.forEach(function(Pt){let Lt=G.get(Pt).currentProgram;(Lt===void 0||Lt.isReady())&&k.delete(Pt)}),k.size===0){V(M);return}setTimeout(Tt,10)}ee.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let $o=null;function ud(M){$o&&$o(M)}function Nc(){mi.stop()}function Uc(){mi.start()}let mi=new Bu;mi.setAnimationLoop(ud),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(M){$o=M,Nt.setAnimationLoop(M),M===null?mi.stop():mi.start()},Nt.addEventListener("sessionstart",Nc),Nt.addEventListener("sessionend",Uc),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(M,D);let W=Nt.enabled===!0&&Nt.isPresenting===!0,k=T!==null&&(st===null||W)&&T.begin(P,st);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(D),D=Nt.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,D,st),b=xt.get(M,y.length),b.init(D),b.state.textureUnits=K.getTextureUnits(),y.push(b),ht.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),nt.setFromProjectionMatrix(ht,mn,D.reversedDepth),ct=this.localClippingEnabled,ot=Ot.init(this.clippingPlanes,ct),E=St.get(M,R.length),E.init(),R.push(E),Nt.enabled===!0&&Nt.isPresenting===!0){let Pt=P.xr.getDepthSensingMesh();Pt!==null&&jo(Pt,D,-1/0,P.sortObjects)}jo(M,D,0,P.sortObjects),E.finish(),F!==null&&F.updateLights(b.state.lightsArray),P.sortObjects===!0&&E.sort(Mt,Vt),qt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,qt&&Kt.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ot.beginShadows();let V=b.state.shadowsArray;if(Gt.render(V,M,D),ot===!0&&Ot.endShadows(),(k&&T.hasRenderPass())===!1){let Pt=E.opaque,Et=E.transmissive;if(b.setupLights(),D.isArrayCamera){let Lt=D.cameras;if(Et.length>0)for(let Ut=0,Qt=Lt.length;Ut<Qt;Ut++){let ne=Lt[Ut];Oc(Pt,Et,M,ne)}qt&&Kt.render(M);for(let Ut=0,Qt=Lt.length;Ut<Qt;Ut++){let ne=Lt[Ut];Fc(E,M,ne,ne.viewport)}}else Et.length>0&&Oc(Pt,Et,M,D),qt&&Kt.render(M),Fc(E,M,D)}st!==null&&X===0&&(K.updateMultisampleRenderTarget(st),K.updateRenderTargetMipmap(st)),k&&T.end(P),M.isScene===!0&&M.onAfterRender(P,M,D),wt.resetDefaultState(),Z=-1,j=null,y.pop(),y.length>0?(b=y[y.length-1],K.setTextureUnits(b.state.textureUnits),ot===!0&&Ot.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,F!==null&&F.renderEnd()};function jo(M,D,W,k){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(nt)){k&&Ht.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ht);let Pt=et.update(M),Et=M.material;Et.visible&&E.push(M,Pt,Et,W,Ht.z,null,D)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(nt))){let Pt=et.update(M),Et=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ht.copy(M.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Ht.copy(Pt.boundingSphere.center)),Ht.applyMatrix4(M.matrixWorld).applyMatrix4(ht)),Array.isArray(Et)){let Lt=Pt.groups;for(let Ut=0,Qt=Lt.length;Ut<Qt;Ut++){let ne=Lt[Ut],Dt=Et[ne.materialIndex];Dt&&Dt.visible&&E.push(M,Pt,Dt,W,Ht.z,ne,D)}}else Et.visible&&E.push(M,Pt,Et,W,Ht.z,null,D)}}let Tt=M.children;for(let Pt=0,Et=Tt.length;Pt<Et;Pt++)jo(Tt[Pt],D,W,k)}function Fc(M,D,W,k){let{opaque:V,transmissive:Tt,transparent:Pt}=M;b.setupLightsView(W),ot===!0&&Ot.setGlobalState(P.clippingPlanes,W),k&&x.viewport(Q.copy(k)),V.length>0&&zr(V,D,W),Tt.length>0&&zr(Tt,D,W),Pt.length>0&&zr(Pt,D,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Oc(M,D,W,k){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){let Dt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new Ye(1,1,{generateMipmaps:!0,type:Dt?Mn:Je,minFilter:hi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let Tt=b.state.transmissionRenderTarget[k.id],Pt=k.viewport||Q;Tt.setSize(Pt.z*P.transmissionResolutionScale,Pt.w*P.transmissionResolutionScale);let Et=P.getRenderTarget(),Lt=P.getActiveCubeFace(),Ut=P.getActiveMipmapLevel();P.setRenderTarget(Tt),P.getClearColor(it),dt=P.getClearAlpha(),dt<1&&P.setClearColor(16777215,.5),P.clear(),qt&&Kt.render(W);let Qt=P.toneMapping;P.toneMapping=yn;let ne=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),ot===!0&&Ot.setGlobalState(P.clippingPlanes,k),zr(M,W,k),K.updateMultisampleRenderTarget(Tt),K.updateRenderTargetMipmap(Tt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let le=0,we=D.length;le<we;le++){let xe=D[le],{object:me,geometry:ze,material:Rt,group:Ge}=xe;if(Rt.side===Ne&&me.layers.test(k.layers)){let re=Rt.side;Rt.side=Be,Rt.needsUpdate=!0,Bc(me,W,k,ze,Rt,Ge),Rt.side=re,Rt.needsUpdate=!0,Dt=!0}}Dt===!0&&(K.updateMultisampleRenderTarget(Tt),K.updateRenderTargetMipmap(Tt))}P.setRenderTarget(Et,Lt,Ut),P.setClearColor(it,dt),ne!==void 0&&(k.viewport=ne),P.toneMapping=Qt}function zr(M,D,W){let k=D.isScene===!0?D.overrideMaterial:null;for(let V=0,Tt=M.length;V<Tt;V++){let Pt=M[V],{object:Et,geometry:Lt,group:Ut}=Pt,Qt=Pt.material;Qt.allowOverride===!0&&k!==null&&(Qt=k),Et.layers.test(W.layers)&&Bc(Et,D,W,Lt,Qt,Ut)}}function Bc(M,D,W,k,V,Tt){F!==null&&V.isNodeMaterial&&F.setObject(M,V),M.onBeforeRender(P,D,W,k,V,Tt),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(P,D,W,k,M,Tt),V.transparent===!0&&V.side===Ne&&V.forceSinglePass===!1?(V.side=Be,V.needsUpdate=!0,P.renderBufferDirect(W,D,k,V,M,Tt),V.side=li,V.needsUpdate=!0,P.renderBufferDirect(W,D,k,V,M,Tt),V.side=Ne):P.renderBufferDirect(W,D,k,V,M,Tt),M.onAfterRender(P,D,W,k,V,Tt)}function kr(M,D,W){D.isScene!==!0&&(D=zt);let k=G.get(M),V=b.state.lights,Tt=b.state.shadowsArray,Pt=V.state.version,Et=_t.getParameters(M,V.state,Tt,D,W,b.state.lightProbeGridArray),Lt=_t.getProgramCacheKey(Et),Ut=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,k.fog=D.fog;let Qt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=ut.get(M.envMap||k.environment,Qt),k.envMapRotation=k.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",Sn),Ut=new Map,k.programs=Ut);let ne=Ut.get(Lt);if(ne!==void 0){if(k.currentProgram===ne&&k.lightsStateVersion===Pt)return kc(M,Et),ne}else Et.uniforms=_t.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,W,Et),M.onBeforeCompile(Et,P),ne=_t.acquireProgram(Et,Lt),Ut.set(Lt,ne),k.uniforms=Et.uniforms;let Dt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Dt.clippingPlanes=Ot.uniform),kc(M,Et),k.needsLights=md(M),k.lightsStateVersion=Pt,k.needsLights&&(Dt.ambientLightColor.value=V.state.ambient,Dt.lightProbe.value=V.state.probe,Dt.sunLights.value=V.state.sun,Dt.sunLightShadows.value=V.state.sunShadow,Dt.directionalLights.value=V.state.directional,Dt.directionalLightShadows.value=V.state.directionalShadow,Dt.spotLights.value=V.state.spot,Dt.spotLightShadows.value=V.state.spotShadow,Dt.rectAreaLights.value=V.state.rectArea,Dt.ltc_1.value=V.state.rectAreaLTC1,Dt.ltc_2.value=V.state.rectAreaLTC2,Dt.pointLights.value=V.state.point,Dt.pointLightShadows.value=V.state.pointShadow,Dt.hemisphereLights.value=V.state.hemi,Dt.sunShadowMatrix.value=V.state.sunShadowMatrix,Dt.sunShadowCascade.value=V.state.sunShadowCascade,Dt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Dt.spotLightMatrix.value=V.state.spotLightMatrix,Dt.spotLightMap.value=V.state.spotLightMap,Dt.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=ne,k.uniformsList=null,ne}function zc(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=Ts.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function kc(M,D){let W=G.get(M);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function dd(M,D){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let W=0,k=M.length;W<k;W++){let V=M[W];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function fd(M,D,W,k,V){D.isScene!==!0&&(D=zt),K.resetTextureUnits();let Tt=D.fog,Pt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?D.environment:null,Et=st===null?P.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ie.workingColorSpace,Lt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ut=ut.get(k.envMap||Pt,Lt),Qt=k.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ne=!!W.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Dt=!!W.morphAttributes.position,le=!!W.morphAttributes.normal,we=!!W.morphAttributes.color,xe=yn;k.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(xe=P.toneMapping);let me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ze=me!==void 0?me.length:0,Rt=G.get(k),Ge=b.state.lights;if(ot===!0&&(ct===!0||M!==j)){let _e=M===j&&k.id===Z;Ot.setState(k,M,_e)}let re=!1;k.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ge.state.version||Rt.outputColorSpace!==Et||V.isBatchedMesh&&Rt.batching===!1||!V.isBatchedMesh&&Rt.batching===!0||V.isBatchedMesh&&Rt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Rt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Rt.instancing===!1||!V.isInstancedMesh&&Rt.instancing===!0||V.isSkinnedMesh&&Rt.skinning===!1||!V.isSkinnedMesh&&Rt.skinning===!0||V.isInstancedMesh&&Rt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Rt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Rt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Rt.instancingMorph===!1&&V.morphTexture!==null||Rt.envMap!==Ut||k.fog===!0&&Rt.fog!==Tt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ot.numPlanes||Rt.numIntersection!==Ot.numIntersection)||Rt.vertexAlphas!==Qt||Rt.vertexTangents!==ne||Rt.morphTargets!==Dt||Rt.morphNormals!==le||Rt.morphColors!==we||Rt.toneMapping!==xe||Rt.morphTargetsCount!==ze||!!Rt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,Rt.__version=k.version);let an=Rt.currentProgram;re===!0&&(an=kr(k,D,V),F&&k.isNodeMaterial&&F.onUpdateProgram(k,an,Rt));let bn=!1,Wn=!1,zi=!1,pe=an.getUniforms(),Ee=Rt.uniforms;if(x.useProgram(an.program)&&(bn=!0,Wn=!0,zi=!0),k.id!==Z&&(Z=k.id,Wn=!0),Rt.needsLights){let _e=dd(b.state.lightProbeGridArray,V);Rt.lightProbeGrid!==_e&&(Rt.lightProbeGrid=_e,Wn=!0)}if(bn||j!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pe.setValue(I,"projectionMatrix",M.projectionMatrix),pe.setValue(I,"viewMatrix",M.matrixWorldInverse);let qn=pe.map.cameraPosition;qn!==void 0&&qn.setValue(I,gt.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pe.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Wn=!0,zi=!0)}if(Rt.needsLights&&(Ge.state.sunShadowMap.length>0&&pe.setValue(I,"sunShadowMap",Ge.state.sunShadowMap,K),Ge.state.directionalShadowMap.length>0&&pe.setValue(I,"directionalShadowMap",Ge.state.directionalShadowMap,K),Ge.state.spotShadowMap.length>0&&pe.setValue(I,"spotShadowMap",Ge.state.spotShadowMap,K),Ge.state.pointShadowMap.length>0&&pe.setValue(I,"pointShadowMap",Ge.state.pointShadowMap,K)),V.isSkinnedMesh){pe.setOptional(I,V,"bindMatrix"),pe.setOptional(I,V,"bindMatrixInverse");let _e=V.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),pe.setValue(I,"boneTexture",_e.boneTexture,K))}V.isBatchedMesh&&(pe.setOptional(I,V,"batchingTexture"),pe.setValue(I,"batchingTexture",V._matricesTexture,K),pe.setOptional(I,V,"batchingIdTexture"),pe.setValue(I,"batchingIdTexture",V._indirectTexture,K),pe.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&pe.setValue(I,"batchingColorTexture",V._colorsTexture,K));let Xn=W.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&U.update(V,W,an),(Wn||Rt.receiveShadow!==V.receiveShadow)&&(Rt.receiveShadow=V.receiveShadow,pe.setValue(I,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&D.environment!==null&&(Ee.envMapIntensity.value=D.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=F_()),Wn){if(pe.setValue(I,"toneMappingExposure",P.toneMappingExposure),Rt.needsLights&&pd(Ee,zi),Tt&&k.fog===!0&&Ft.refreshFogUniforms(Ee,Tt),Ft.refreshMaterialUniforms(Ee,k,J,H,b.state.transmissionRenderTarget[M.id]),Rt.needsLights&&Rt.lightProbeGrid){let _e=Rt.lightProbeGrid;Ee.probesSH.value=_e.texture,Ee.probesMin.value.copy(_e.boundingBox.min),Ee.probesMax.value.copy(_e.boundingBox.max),Ee.probesResolution.value.copy(_e.resolution)}Ts.upload(I,zc(Rt),Ee,K)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ts.upload(I,zc(Rt),Ee,K),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pe.setValue(I,"center",V.center),pe.setValue(I,"modelViewMatrix",V.modelViewMatrix),pe.setValue(I,"normalMatrix",V.normalMatrix),pe.setValue(I,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let _e=k.uniformsGroups;for(let qn=0,ki=_e.length;qn<ki;qn++){let Hc=_e[qn];rt.update(Hc,an),rt.bind(Hc,an)}}return an}function pd(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function md(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(M,D,W){let k=G.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=D,G.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:W,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let W=G.get(M);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,W=0){st=M,q=D,X=W;let k=null,V=!1,Tt=!1;if(M){let Et=G.get(M);if(Et.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(I.FRAMEBUFFER,Et.__webglFramebuffer),Q.copy(M.viewport),It.copy(M.scissor),At=M.scissorTest,x.viewport(Q),x.scissor(It),x.setScissorTest(At),Z=-1;return}else if(Et.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(Et.__hasExternalTextures)K.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Qt=M.depthTexture;if(Et.__boundDepthTexture!==Qt){if(Qt!==null&&G.has(Qt)&&(M.width!==Qt.image.width||M.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}let Lt=M.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Tt=!0);let Ut=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[D])?k=Ut[D][W]:k=Ut[D],V=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?k=G.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?k=Ut[W]:k=Ut,Q.copy(M.viewport),It.copy(M.scissor),At=M.scissorTest}else Q.copy(ft).multiplyScalar(J).floor(),It.copy(Wt).multiplyScalar(J).floor(),At=ue;if(W!==0&&(k=z),x.bindFramebuffer(I.FRAMEBUFFER,k)&&x.drawBuffers(M,k),x.viewport(Q),x.scissor(It),x.setScissorTest(At),V){let Et=G.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Et.__webglTexture,W)}else if(Tt){let Et=D;for(let Lt=0;Lt<M.textures.length;Lt++){let Ut=G.get(M.textures[Lt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Lt,Ut.__webglTexture,W,Et)}}else if(M!==null&&W!==0){let Et=G.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Et.__webglTexture,W)}Z=-1};function Vc(M){let D=G.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=A.textureFormatReadable(M.format),D.__typeReadable=A.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,W,k,V,Tt,Pt,Et=0){if(!(M&&M.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt){x.bindFramebuffer(I.FRAMEBUFFER,Lt);try{let Ut=M.textures[Et],Qt=Ut.format,ne=Ut.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Et);let Dt=Vc(Ut);if(Dt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-k&&W>=0&&W<=M.height-V&&I.readPixels(D,W,k,V,vt.convert(Qt),vt.convert(ne),Tt)}finally{let Ut=st!==null?G.get(st).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(M,D,W,k,V,Tt,Pt,Et=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pt!==void 0&&(Lt=Lt[Pt]),Lt)if(D>=0&&D<=M.width-k&&W>=0&&W<=M.height-V){x.bindFramebuffer(I.FRAMEBUFFER,Lt);let Ut=M.textures[Et],Qt=Ut.format,ne=Ut.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Et);let Dt=Vc(Ut);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),I.readPixels(D,W,k,V,vt.convert(Qt),vt.convert(ne),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let we=st!==null?G.get(st).__webglFramebuffer:null;x.bindFramebuffer(I.FRAMEBUFFER,we);let xe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ou(I,xe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,le),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(le),I.deleteSync(xe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,W=0){let k=Math.pow(2,-W),V=Math.floor(M.image.width*k),Tt=Math.floor(M.image.height*k),Pt=D!==null?D.x:0,Et=D!==null?D.y:0;K.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,Pt,Et,V,Tt),x.unbindTexture()},this.copyTextureToTexture=function(M,D,W=null,k=null,V=0,Tt=0){let Pt,Et,Lt,Ut,Qt,ne,Dt,le,we,xe=M.isCompressedTexture?M.mipmaps[Tt]:M.image;if(W!==null)Pt=W.max.x-W.min.x,Et=W.max.y-W.min.y,Lt=W.isBox3?W.max.z-W.min.z:1,Ut=W.min.x,Qt=W.min.y,ne=W.isBox3?W.min.z:0;else{let Ee=Math.pow(2,-V);Pt=Math.floor(xe.width*Ee),Et=Math.floor(xe.height*Ee),M.isDataArrayTexture?Lt=xe.depth:M.isData3DTexture?Lt=Math.floor(xe.depth*Ee):Lt=1,Ut=0,Qt=0,ne=0}k!==null?(Dt=k.x,le=k.y,we=k.z):(Dt=0,le=0,we=0);let me=vt.convert(D.format),ze=vt.convert(D.type),Rt;D.isData3DTexture?(K.setTexture3D(D,0),Rt=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(K.setTexture2DArray(D,0),Rt=I.TEXTURE_2D_ARRAY):(K.setTexture2D(D,0),Rt=I.TEXTURE_2D),x.activeTexture(I.TEXTURE0),x.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let Ge=x.getParameter(I.UNPACK_ROW_LENGTH),re=x.getParameter(I.UNPACK_IMAGE_HEIGHT),an=x.getParameter(I.UNPACK_SKIP_PIXELS),bn=x.getParameter(I.UNPACK_SKIP_ROWS),Wn=x.getParameter(I.UNPACK_SKIP_IMAGES);x.pixelStorei(I.UNPACK_ROW_LENGTH,xe.width),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe.height),x.pixelStorei(I.UNPACK_SKIP_PIXELS,Ut),x.pixelStorei(I.UNPACK_SKIP_ROWS,Qt),x.pixelStorei(I.UNPACK_SKIP_IMAGES,ne);let zi=M.isDataArrayTexture||M.isData3DTexture,pe=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let Ee=G.get(M),Xn=G.get(D),_e=G.get(Ee.__renderTarget),qn=G.get(Xn.__renderTarget);x.bindFramebuffer(I.READ_FRAMEBUFFER,_e.__webglFramebuffer),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let ki=0;ki<Lt;ki++)zi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(M).__webglTexture,V,ne+ki),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,G.get(D).__webglTexture,Tt,we+ki)),I.blitFramebuffer(Ut,Qt,Pt,Et,Dt,le,Pt,Et,I.DEPTH_BUFFER_BIT,I.NEAREST);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||G.has(M)){let Ee=G.get(M),Xn=G.get(D);x.bindFramebuffer(I.READ_FRAMEBUFFER,L),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,O);for(let _e=0;_e<Lt;_e++)zi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.__webglTexture,V,ne+_e):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ee.__webglTexture,V),pe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xn.__webglTexture,Tt,we+_e):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xn.__webglTexture,Tt),V!==0?I.blitFramebuffer(Ut,Qt,Pt,Et,Dt,le,Pt,Et,I.COLOR_BUFFER_BIT,I.NEAREST):pe?I.copyTexSubImage3D(Rt,Tt,Dt,le,we+_e,Ut,Qt,Pt,Et):I.copyTexSubImage2D(Rt,Tt,Dt,le,Ut,Qt,Pt,Et);x.bindFramebuffer(I.READ_FRAMEBUFFER,null),x.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pe?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Rt,Tt,Dt,le,we,Pt,Et,Lt,me,ze,xe.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Rt,Tt,Dt,le,we,Pt,Et,Lt,me,xe.data):I.texSubImage3D(Rt,Tt,Dt,le,we,Pt,Et,Lt,me,ze,xe):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,Dt,le,Pt,Et,me,ze,xe.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,Dt,le,xe.width,xe.height,me,xe.data):I.texSubImage2D(I.TEXTURE_2D,Tt,Dt,le,Pt,Et,me,ze,xe);x.pixelStorei(I.UNPACK_ROW_LENGTH,Ge),x.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re),x.pixelStorei(I.UNPACK_SKIP_PIXELS,an),x.pixelStorei(I.UNPACK_SKIP_ROWS,bn),x.pixelStorei(I.UNPACK_SKIP_IMAGES,Wn),Tt===0&&D.generateMipmaps&&I.generateMipmap(Rt),x.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){q=0,X=0,st=null,x.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var qo=class extends Rn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ze;t.deleteAttribute("uv");let e=new xn({side:Be}),n=new xn,s=new xr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new jt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Qs(t,n,6),o=new Re;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new jt(t,Cs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new jt(t,Cs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new jt(t,Cs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new jt(t,Cs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new jt(t,Cs(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new jt(t,Cs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Cs(i){return new Pi({color:0,emissive:16777215,emissiveIntensity:i})}var Xu={type:"change"},wc={type:"start"},Yu={type:"end"},Yo=new Qn,qu=new Qe,O_=Math.cos(70*Lr.DEG2RAD),Ie=new C,Ke=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tc=1e-6,Zo=class extends Mr{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new tn,this._lastTargetPosition=new C,this._quat=new tn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xs,this._sphericalDelta=new xs,this._scale=1,this._panOffset=new C,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new C,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z_.bind(this),this._onPointerDown=B_.bind(this),this._onPointerUp=k_.bind(this),this._onContextMenu=Y_.bind(this),this._onMouseWheel=G_.bind(this),this._onKeyDown=W_.bind(this),this._onTouchStart=X_.bind(this),this._onTouchMove=q_.bind(this),this._onMouseDown=V_.bind(this),this._onMouseMove=H_.bind(this),this._interceptControlDown=Z_.bind(this),this._interceptControlUp=J_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xu),this.update(),this.state=fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),s<-Math.PI?s+=Ke:s>Math.PI&&(s-=Ke),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ie.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Yo.origin.copy(this.object.position),Yo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yo.direction))<O_?this.object.lookAt(this.target):(qu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yo.intersectPlane(qu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tc||this._lastTargetPosition.distanceToSquared(this.target)>Tc?(this.dispatchEvent(Xu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ie.copy(s).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function B_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function z_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function k_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yu),this.state=fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function V_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ai.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case ai.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case ai.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(wc)}function H_(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function G_(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent(wc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Yu))}function W_(i){this.enabled!==!1&&this._handleKeyDown(i)}function X_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(wc)}function q_(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function Y_(i){this.enabled!==!1&&i.preventDefault()}function Z_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zu(i=!1){let t=(e,n=.7,s=0)=>i?new Pi({color:e}):new xn({color:e,roughness:n,metalness:s});return{paint:t("#60654b",.74,.25),edge:t("#464b37",.78,.3),steel:t("#8b9290",.32,.85),darkSteel:t("#3b4140",.5,.75),rubber:t("#242726",.95),glass:t("#233e45",.19,.45),amber:t("#ca852b",.3),lamp:t("#dce1d2",.23),red:t("#9d3026",.4)}}function Jo(i,t,e,n=[0,0,0],s=""){let r=new jt(t,e);return r.position.set(...n),r.name=s,r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}function Y(i,t,e,n,s=""){return Jo(i,new Ze(...e),t,n,s)}function lt(i,t,e,n,s,r="y",a=e,o=20){let l=Jo(i,new ir(a,e,n,o),t,s);return r==="x"&&(l.rotation.z=Math.PI/2),r==="z"&&(l.rotation.x=Math.PI/2),l}function pt(i,t,e,n,s=.018){let r=new C(...e),a=new C(...n),o=a.clone().sub(r),l=lt(i,t,s,o.length(),r.clone().add(a).multiplyScalar(.5).toArray());return l.quaternion.setFromUnitVectors(new C(0,1,0),o.normalize()),l}function he(i,t,e,n=.018,s=40){let r=new ps(e.map(a=>new C(...a)));return Jo(i,new dr(r,s,n,8,!1),t)}function Ps(i,t,e){let n=new ve,s=[];for(let a=1;a<e.length-1;a++)s.push(...e[0],...e[a],...e[a+1]);n.setAttribute("position",new se(s,3)),n.computeVertexNormals();let r=t.clone();return r.side=Ne,Jo(i,n,r)}function Gn(i,t,e,n,s=8,r="z",a=.014){for(let o=0;o<s;o++){let l=o/s*Math.PI*2,c=[...e];r==="z"?(c[0]+=Math.cos(l)*n,c[1]+=Math.sin(l)*n):(c[1]+=Math.cos(l)*n,c[2]+=Math.sin(l)*n),lt(i,t,a,a*1.3,c,r,a,6)}}function Fr(i=Zu()){let t=new be;t.name="WR-12 hydraulic recovery winch",t.userData={units:"metres",concept:!0,sharedPart:"WR-12",ratedLoad:"unspecified illustrative model"},Y(t,i.edge,[1.12,.085,.56],[0,.0425,0],"mounting skid");for(let s of[-.42,.42])for(let r of[-.2,.2])lt(t,i.steel,.023,.022,[s,.097,r],"y",.023,6);for(let s of[-.42,.42])Y(t,i.paint,[.1,.44,.4],[s,.29,0],"bearing pedestal"),lt(t,i.paint,.225,.065,[s,.34,0],"x"),Gn(t,i.steel,[s+(s>0?.04:-.04),.34,0],.176,8,"x");lt(t,i.darkSteel,.14,.71,[0,.34,0],"x");for(let s of[-.34,.34])lt(t,i.steel,.212,.025,[s,.34,0],"x");let e=[];for(let s=0;s<=720;s++){let r=s/720,a=r*Math.PI*2*36;e.push([-.326+r*.652,.34+Math.cos(a)*.172,Math.sin(a)*.172])}he(t,i.steel,e,.0075,900),lt(t,i.paint,.12,.24,[-.59,.34,0],"x"),lt(t,i.darkSteel,.079,.15,[-.75,.34,0],"x");for(let s of[.205,.445])pt(t,i.steel,[-.45,s,.27],[.45,s,.27],.035);for(let s of[-.43,.43])pt(t,i.steel,[s,.19,.27],[s,.46,.27],.035);he(t,i.darkSteel,[[-.71,.38,-.08],[-.74,.52,-.12],[-.43,.56,-.18],[-.39,.17,-.21]],.016),he(t,i.darkSteel,[[-.67,.31,-.09],[-.74,.2,-.12],[-.61,.12,-.2],[-.41,.12,-.22]],.014),he(t,i.steel,[[0,.34,.17],[0,.32,.33],[0,.21,.46]],.012);let n=new be;return n.name="forged hook and safety latch",t.add(n),he(n,i.steel,[[0,.23,.46],[.04,.14,.47],[.1,.085,.49],[.11,.027,.51],[.06,-.015,.52],[-.02,-.012,.52],[-.073,.05,.51],[-.071,.12,.49]],.025),pt(n,i.darkSteel,[-.07,.12,.49],[.031,.15,.48],.008),t}function Is(i){let t=new be;t.name="run-flat wheel";let e=lt(t,i.rubber,.585,.37,[0,0,0],"z");for(let n of[-.196,.196])lt(t,i.rubber,.505,.026,[0,0,n],"z"),lt(t,i.paint,.325,.03,[0,0,n*1.09],"z"),lt(t,i.darkSteel,.19,.04,[0,0,n*1.22],"z"),lt(t,i.paint,.105,.055,[0,0,n*1.4],"z"),Gn(t,i.steel,[0,0,n*1.26],.247,10,"z",.018);for(let n=0;n<30;n++)for(let s of[-1,1]){let r=n/30*Math.PI*2+s*.035,a=Y(t,i.rubber,[.095,.075,.16],[Math.sin(r)*.586,Math.cos(r)*.586,s*.1]);a.rotation.z=-r,a.rotation.y=s*.24}return t}function Ju(i=Zu()){let t=new be;t.name="R8 recovery vehicle",t.userData={units:"metres",concept:!0,axles:4,sharedPart:"WR-12"},Y(t,i.darkSteel,[6.25,.24,1.2],[0,.91,0],"chassis"),Y(t,i.edge,[5.85,.48,2.18],[-.1,1.27,0],"lower armored hull"),Y(t,i.paint,[6.15,.25,2.4],[0,1.63,0],"deck");for(let h of[-2.17,-.74,.72,2.15]){lt(t,i.darkSteel,.085,2.15,[h,.73,0],"z"),Y(t,i.darkSteel,[.35,.23,.42],[h,.75,0],"differential");for(let f of[-1,1]){let m=Is(i);m.position.set(h,.605,f*1.19),t.add(m),pt(t,i.steel,[h-.13,.84,f*.81],[h+.19,1.34,f*.85],.043),Y(t,i.paint,[1.2,.1,.47],[h,1.3,f*1.19],"wheel guard")}}let e=1.15,n=h=>[[.52,1.74,h*e],[2.94,1.74,h*e],[1.98,2.75,h*e],[.52,2.75,h*e]];Ps(t,i.paint,n(1)),Ps(t,i.paint,n(-1).reverse()),Ps(t,i.paint,[[.52,2.75,-e],[1.98,2.75,-e],[1.98,2.75,e],[.52,2.75,e]]),Ps(t,i.paint,[[2.94,1.74,-e],[2.94,1.74,e],[1.98,2.75,e],[1.98,2.75,-e]]),Y(t,i.edge,[.08,1.03,2.3],[.49,2.25,0],"cab rear wall");let s=h=>2.94-(h-1.74)*(.96/1.01)+.008;for(let h of[[-1.02,-.09],[.09,1.02]])Ps(t,i.glass,[[s(2.03),2.03,h[0]],[s(2.03),2.03,h[1]],[s(2.57),2.57,h[1]],[s(2.57),2.57,h[0]]]),pt(t,i.rubber,[s(2.06)+.018,2.06,(h[0]+h[1])*.5],[s(2.4)+.018,2.4,h[1]-.1],.012);for(let h of[-1,1])Ps(t,i.glass,[[.76,2.15,h*1.158],[1.95,2.15,h*1.158],[1.87,2.57,h*1.158],[.76,2.57,h*1.158]]),pt(t,i.edge,[.64,1.86,h*1.166],[.64,2.66,h*1.166],.01),pt(t,i.edge,[.64,1.86,h*1.166],[1.7,1.86,h*1.166],.01),Y(t,i.steel,[.15,.027,.033],[.87,2.015,h*1.185],"door handle"),pt(t,i.darkSteel,[2.11,2.25,h*1.16],[2.1,2.32,h*1.47],.024),Y(t,i.glass,[.06,.22,.16],[2.1,2.32,h*1.47],"mirror"),Y(t,i.edge,[.68,.07,.3],[1.17,1.61,h*1.36],"entry step");Y(t,i.darkSteel,[.18,.24,2.53],[3.13,1.46,0],"front bumper");for(let h of[-1,1])lt(t,i.lamp,.08,.04,[3.02,1.79,h*.83],"x"),lt(t,i.amber,.036,.04,[3.025,1.79,h*1.02],"x"),lt(t,i.steel,.075,.07,[3.25,1.42,h*.92],"x"),Y(t,i.red,[.035,.09,.14],[-3.13,1.57,h*.99]);let r=Fr(i);r.name="mounted WR-12",r.rotation.y=Math.PI/2,r.position.set(2.98,1,0),t.add(r);let a=new be;a.name="recovery stowage",t.add(a);for(let h of[-1,1]){Y(a,i.paint,[2.6,.51,.43],[-1.56,1.99,h*.97],"tool locker");for(let f of[-2.3,-1.55,-.8])Y(a,i.edge,[.014,.36,.017],[f,1.99,h*1.197]),Y(a,i.steel,[.07,.018,.025],[f+.12,2.05,h*1.207]);pt(a,i.darkSteel,[-2.6,2.3,h*.8],[-.59,2.3,h*.8],.025)}let o=new be;o.name="recovery crane",t.add(o),lt(o,i.darkSteel,.44,.14,[-.85,1.84,0]),lt(o,i.paint,.33,.36,[-.85,2.04,0]),Y(o,i.edge,[.48,.4,.48],[-.85,2.32,0],"crane pivot");let l=[-.85,2.49,0],c=[-2.51,3.13,0],u=new C(...c).sub(new C(...l));Y(o,i.paint,[.34,u.length(),.34],new C(...l).add(new C(...c)).multiplyScalar(.5).toArray(),"main crane boom").quaternion.setFromUnitVectors(new C(0,1,0),u.clone().normalize()),pt(o,i.darkSteel,[-2.47,3.115,0],[-3,3.32,0],.112),pt(o,i.paint,[-.84,2.1,.24],[-1.74,2.78,.24],.078),pt(o,i.steel,[-1.74,2.78,.24],[-2.13,2.99,.24],.035),lt(o,i.darkSteel,.105,.15,[-3.03,3.31,0],"z"),pt(o,i.darkSteel,[-3.06,3.26,0],[-3.06,2.55,0],.012),he(o,i.steel,[[-3.06,2.56,0],[-3.13,2.47,0],[-3.1,2.37,0],[-3,2.37,0],[-2.98,2.45,0]],.028),he(o,i.rubber,[[-.67,2.09,.28],[-.54,2.49,.27],[-.94,2.66,.25],[-1.7,2.95,.22]],.018),lt(t,i.paint,.29,.05,[1.04,2.8,0],"y"),lt(t,i.amber,.065,.14,[.6,2.9,-.72]),pt(t,i.darkSteel,[.37,2.8,.73],[.37,3.69,.73],.012);for(let h of[-1,1])for(let f=0;f<12;f++)lt(t,i.steel,.014,.018,[-2.7+f*.45,1.79,h*1.22],"z",.014,6);return t}var Or=new C;function hn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Or.copy(t),Or[n]=0,Or.normalize();let c=.5*a/(a+o),u=1-Or.angleTo(i)/l;return Math.sign(Or[e])===1?u*c:o/(a+o)+c+c*(1-u)}var Br=class i extends Ze{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new C,c=new C,u=new C(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,m=d.length/6,_=new C,g=.5/a;for(let p=0,S=0;p<d.length;p+=3,S+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[p+0]=u.x*Math.sign(l.x)+c.x*r,d[p+1]=u.y*Math.sign(l.y)+c.y*r,d[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/m)){case 0:_.set(1,0,0),f[S+0]=hn(_,c,"z","y",r,n),f[S+1]=1-hn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[S+0]=1-hn(_,c,"z","y",r,n),f[S+1]=1-hn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[S+0]=1-hn(_,c,"x","z",r,t),f[S+1]=hn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[S+0]=1-hn(_,c,"x","z",r,t),f[S+1]=1-hn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[S+0]=1-hn(_,c,"x","y",r,t),f[S+1]=1-hn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[S+0]=hn(_,c,"x","y",r,t),f[S+1]=1-hn(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function Ls(){let i=new Uint8Array(16384),t=947;for(let r=0;r<i.length;r+=4){t=Math.imul(t,1664525)+1013904223>>>0;let a=205+(t>>>27);i.set([a,a,a,255],r)}let e=new Si(i,64,64);e.wrapS=e.wrapT=ss,e.repeat.set(4,4),e.needsUpdate=!0;let n=(r,a,o=0,l={})=>new xn({color:r,roughness:a,metalness:o,...l}),s={paint:new gs({color:"#596548",roughness:.72,metalness:.12,roughnessMap:e,bumpMap:e,bumpScale:.006,clearcoat:.12,clearcoatRoughness:.6}),edge:n("#343d32",.72,.24,{roughnessMap:e}),steel:n("#969e9c",.27,.88),darkSteel:n("#42494a",.44,.8),rubber:n("#191c19",.93,0,{bumpMap:e,bumpScale:.012}),glass:new gs({color:"#173137",roughness:.08,metalness:.18,clearcoat:1,envMapIntensity:1.5}),amber:n("#e1a33c",.29,.2),lamp:n("#e2e9db",.24,.1),red:n("#b34736",.42)};for(let[r,a]of Object.entries({paint:"powder coated metal",steel:"machined steel",rubber:"moulded rubber",glass:"optical glass"}))s[r].name=a;return s}function Bi(i){return i.traverse(t=>{if(t.isMesh&&t.geometry.type==="BoxGeometry"){let{width:e,height:n,depth:s}=t.geometry.parameters;Math.min(e,n,s)>.045&&(t.geometry.dispose(),t.geometry=new Br(e,n,s,1,Math.min(.024,Math.min(e,n,s)*.12)))}}),i}function Ac(i,t,e,n,s="z"){let r=Y(i,t.paint,e,n,"service panel"),[a,o,l]=n;if(s==="z")for(let c of[-1,1])for(let u of[-1,1])lt(i,t.steel,.009,.012,[a+c*e[0]*.4,o+u*e[1]*.4,l+Math.sign(l||1)*(e[2]/2+.007)],"z",.009,6);return r}function Cc(i,t,e,n){if(e==="MOB")return Rc(i,t),Bi(i);if(e==="CAP"){for(let s of[-1,1])pt(i,t.darkSteel,[-1.12,.15,s*.59],[1.12,.15,s*.59],.018),Ac(i,t,[.62,.36,.018],[-.65,.38,s*.75]),pt(i,t.steel,[.75,.25,s*.74],[.75,.6,s*.74],.016);Y(i,t.darkSteel,[.48,.04,.28],[1.25,.12,0],"boarding step")}else if(e==="FP"){for(let s of[-1,1])lt(i,t.steel,.075,.07,[0,.56,s*.3],"z"),Gn(i,t.darkSteel,[0,.56,s*.345],.05,6,"z",.009);Ac(i,t,[.31,.25,.018],[-.15,.5,-.57]),pt(i,t.darkSteel,[-.26,.63,-.58],[-.04,.63,-.58],.014),he(i,t.rubber,[[-.13,.12,.22],[-.3,.28,.35],[-.27,.57,.36],[.08,.69,.32]],.017)}else{if(e==="PRO")return Bi(i);if(e==="COM")for(let s=0;s<(n===1?3:n===6?2:1);s++){let r=(s-((n===1?3:n===6?2:1)-1)/2)*.4;pt(i,t.darkSteel,[r-.13,.47,.17],[r+.13,.47,.17],.015);for(let a=0;a<7;a++)Y(i,t.darkSteel,[.26,.012,.025],[r,.15+a*.042,-.13]);for(let a of[-.085,.085])lt(i,t.steel,.02,.025,[r+a,.17,.145],"z"),he(i,t.rubber,[[r+a,.17,.16],[r+a,.1,.23],[r+a+.08,.06,.3]],.012);for(let a=0;a<3;a++)Y(i,t.lamp,[.025,.006,.003],[r-.065+a*.05,.41,.134])}else if(e==="SA"){for(let s of[-.105,.105])lt(i,t.steel,.081,.014,[s,n===3?1.75:.43,.172],"z"),lt(i,t.glass,.055,.012,[s,n===3?1.75:.43,.185],"z");he(i,t.rubber,[[0,.07,-.08],[.12,.17,-.14],[.12,.37,-.14]],.012)}else if(e==="ACC"){if([0,5].includes(n))Y(i,t.amber,[.13,.05,.022],[.18,.49,.29],"safety marking");else if(n===1){for(let s of[-1,1])Y(i,t.red,[.025,.05,.11],[-.73,.45,s*.3]),pt(i,t.steel,[-.65,.8,s*.38],[.6,.8,s*.38],.014);lt(i,t.darkSteel,.055,.12,[1.27,.38,0],"y")}else if([3,6].includes(n)){for(let s=0;s<3;s++){pt(i,t.darkSteel,[-.47+s*.37,.4,.24],[-.3+s*.37,.4,.24],.012);for(let r of[-1,1])lt(i,t.steel,.009,.016,[-.46+s*.37,.24,r*.245],"z",.009,6)}he(i,t.rubber,[[-.6,.03,-.29],[-.51,.1,-.35],[.5,.1,-.35],[.6,.04,-.29]],.018)}}else if(e==="SE"){Y(i,t.darkSteel,[.44,.025,.29],[.25,.75,.12],"laptop base");for(let s=0;s<4;s++)for(let r=0;r<10;r++)Y(i,t.steel,[.025,.003,.023],[.09+r*.032,.766,.03+s*.034]);Y(i,t.rubber,[.09,.003,.045],[.25,.766,.23],"trackpad"),Y(i,t.paint,[.28,.019,.22],[-.38,.758,.15],"review binder");for(let s=0;s<4;s++)Y(i,t.lamp,[.25,.003,.19],[-.38+s*.003,.772+s*.003,.15]);pt(i,t.darkSteel,[-.54,.78,.26],[-.32,.78,.26],.005)}}return $_(i,t,e,n),Rc(i,t),Bi(i)}function fi(i,t,e){let n=[];for(let o=1;o<e.length-1;o++)n.push(...e[0],...e[o],...e[o+1]);let s=new ve;s.setAttribute("position",new se(n,3)),s.computeVertexNormals();let r=t.clone();r.side=Ne;let a=new jt(s,r);return a.name=t.name==="optical glass"?"cab glazing":"hull shell",i.add(a),a}function pi(i,t,e,n,s=.045){let r=new Ei;return r.moveTo(i+s,t),r.lineTo(e-s,t),r.quadraticCurveTo(e,t,e,t+s),r.lineTo(e,n-s),r.quadraticCurveTo(e,n,e-s,n),r.lineTo(i+s,n),r.quadraticCurveTo(i,n,i,n-s),r.lineTo(i,t+s),r.quadraticCurveTo(i,t,i+s,t),r}function rn(i,t,e,n,s){let r=new ni;e.forEach(([u,d],h)=>h?r.lineTo(u,d):r.moveTo(u,d)),r.closePath(),r.holes.push(...n);let a=new wi(r,{depth:.04,steps:1,curveSegments:6,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:3}),o=a.attributes.position;for(let u=0;u<o.count;u++)o.setXYZ(u,...s(o.getX(u),o.getY(u),o.getZ(u)));a.computeVertexNormals();let l=t.clone();l.side=Ne;let c=new jt(a,l);return c.name="hull shell",c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function $u(i,t){if(i==="RECOVERY"){let h=Ju(t);h.traverse(_=>{_.isMesh&&_.geometry.type==="BufferGeometry"&&_.material.name!=="optical glass"&&(_.name="hull shell")}),K_(h,t);let f=h.getObjectByName("mounted WR-12"),m=Cc(Fr(t),t,"ACC",5);return m.name="mounted WR-12",m.position.copy(f.position),m.quaternion.copy(f.quaternion),f.removeFromParent(),f.traverse(_=>_.geometry?.dispose()),h.add(m),Ku(h,t,6.25,2.3),Bi(h)}let e={COMBAT:[6.8,2.65,4],RECCE:[5.5,2.3,2],TROOP:[6.9,2.6,3],COMMAND:[6.7,2.6,3],MINE:[6.8,2.65,4]}[i],[n,s,r]=e,a=new be;a.name=i,a.userData={units:"metres",concept:!0,axles:r,roof:2.37,length:n,width:s};let o=n/2,l=-o,c=s/2;Y(a,t.darkSteel,[n-.45,.2,s*.58],[0,.82,0],"chassis"),Y(a,t.edge,[n-.25,.48,s*.8],[0,1.16,0],"lower hull");for(let h of[-1,1])fi(a,t.paint,[[l,1.2,h*c*.75],[o,1.2,h*c*.75],[o-.75,2.36,h*c*.85],[l+.17,2.36,h*c*.85]]);fi(a,t.paint,[[l+.17,2.36,-c*.85],[o-.75,2.36,-c*.85],[o-.75,2.36,c*.85],[l+.17,2.36,c*.85]]),fi(a,t.paint,[[o,1.2,-c*.75],[o,1.2,c*.75],[o-.75,2.36,c*.85],[o-.75,2.36,-c*.85]]);let u=h=>o-(h-1.2)*.75/1.16+.012;for(let h of[[-c*.67,-.09],[.09,c*.67]]){fi(a,t.glass,[[u(1.8),1.8,h[0]],[u(1.8),1.8,h[1]],[u(2.13),2.13,h[1]],[u(2.13),2.13,h[0]]]);for(let f of[1.8,2.13])pt(a,t.rubber,[u(f)+.005,f,h[0]],[u(f)+.005,f,h[1]],.012);for(let f of h)pt(a,t.rubber,[u(1.8)+.005,1.8,f],[u(2.13)+.005,2.13,f],.012);pt(a,t.rubber,[u(1.83)+.018,1.83,(h[0]+h[1])*.5],[u(2.03)+.018,2.03,h[1]-.08],.009)}fi(a,t.edge,[[l,1.2,-c*.75],[l+.17,2.36,-c*.85],[l+.17,2.36,c*.85],[l,1.2,c*.75]]);let d=r===2?[-1.67,1.67]:r===3?[-2.25,-.75,1.9]:[-2.55,-1.05,1,2.4];for(let h of d){lt(a,t.darkSteel,.06,s*.81,[h,.67,0],"z"),lt(a,t.edge,.13,.31,[h,.67,0],"z");for(let f of[-1,1]){let m=Is(t);m.position.set(h,.62,f*c*.88),a.add(m),pt(a,t.steel,[h-.15,.75,f*c*.62],[h+.1,1.2,f*c*.68],.045),Y(a,t.paint,[1.22,.075,.48],[h,1.3,f*c*.91],"wheel guard")}}for(let h of[-1,1]){let f=h*c*.855,m=_=>h*c*(.75+(_-1.2)*.1/1.16)+h*.01;fi(a,t.glass,[[o-.93,1.88,m(1.88)],[o-1.88,1.88,m(1.88)],[o-1.88,2.16,m(2.16)],[o-1.05,2.16,m(2.16)]]),pt(a,t.darkSteel,[o-2.05,1.55,f],[o-2.05,2.29,f],.009),pt(a,t.steel,[o-1.83,1.78,f+.02*h],[o-1.61,1.78,f+.02*h],.014),Y(a,t.edge,[.68,.05,.32],[o-1.61,1.36,h*(c*.87+.14)],"entry step"),pt(a,t.darkSteel,[o-.98,1.86,f],[o-.9,2.07,h*(c+.1)],.02),Y(a,t.glass,[.055,.2,.15],[o-.9,2.07,h*(c+.1)],"mirror");for(let _=0;_<4;_++){let g=l+.6+_*.64;Ac(a,t,[.51,.49,.04],[g,1.95,h*c*.85])}for(let _=0;_<10;_++)Y(a,t.darkSteel,[.02,.22,.02],[o-1.6+_*.06,2.38,h*.57],"vent grille");lt(a,t.lamp,.067,.05,[o+.012,1.36,h*c*.65],"x"),lt(a,t.amber,.028,.055,[o+.015,1.36,h*c*.76],"x"),Y(a,t.red,[.03,.07,.13],[l-.02,1.32,h*c*.65])}Y(a,t.darkSteel,[.15,.17,s*.85],[o,1.12,0],"front bumper");for(let h of[-1,1])lt(a,t.steel,.055,.08,[o+.1,1.14,h*.73],"x"),pt(a,t.steel,[l+.25,1.44,h*.5],[l+.25,2.05,h*.5],.016);return lt(a,t.edge,.32,.04,[.4,2.39,.5],"roof hatch"),Ku(a,t,n,s),Bi(a)}function K_(i,t){let e=i.children.filter(m=>m.isMesh&&m.geometry.type==="BufferGeometry"),n=e.filter(m=>m.material.name!=="optical glass"),s=e.filter(m=>m.material.name==="optical glass");function r(m,_){if(!m)return;let g=[];for(let p=1;p<_.length-1;p++)g.push(..._[0],..._[p],..._[p+1]);m.geometry.dispose(),m.geometry=new ve,m.geometry.setAttribute("position",new se(g,3)),m.geometry.computeVertexNormals()}let a=m=>2.94-(m-1.74)*(.47/1.01)+.012;for(let m of i.children.filter(_=>_.name==="wheel guard")){let _=new ni;[[-.72,0],[-.72,.2],[-.44,.68],[.44,.68],[.72,.2],[.72,0],[.65,0],[.65,.18],[.4,.61],[-.4,.61],[-.65,.18],[-.65,0]].forEach(([p,S],w)=>w?_.lineTo(p,S):_.moveTo(p,S)),_.closePath(),m.geometry.dispose(),m.geometry=new wi(_,{depth:.48,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2,steps:1}),m.name="recovery formed wheel guard",m.position.y=.605,m.position.z-=.24}for(let m of n)m.removeFromParent(),m.geometry.dispose(),m.material.dispose();for(let m of[-1,1])rn(i,t.paint,[[.52,1.74],[2.94,1.74],[2.47,2.75],[.52,2.75]],[pi(.76,2.15,2.28,2.6)],(_,g,p)=>[_,g,m*(1.15-p)]),rn(i,t.paint,[[.52,1.4],[2.83,1.4],[2.98,1.65],[2.94,1.74],[.52,1.74]],[],(_,g,p)=>[_,g,m*(1.15-p)]),rn(i,t.paint,[[.7,1.78],[2.32,1.78],[2.55,2.1],[2.34,2.64],[.7,2.64]],[pi(.78,2.17,2.26,2.58)],(_,g,p)=>[_,g,m*(1.174-p*.35)]);let o=[[-1.15,1.74],[1.15,1.74],[1.15,2.75],[-1.15,2.75]];rn(i,t.paint,o,[pi(-1.02,2.04,-.07,2.62),pi(.07,2.04,1.02,2.62)],(m,_,g)=>[a(_)-g,_,m]);let l=new jt(new Br(1.95,.07,2.3,3,.028),t.paint);l.position.set(1.495,2.745,0),l.name="hull shell",l.castShadow=!0,l.receiveShadow=!0,i.add(l),rn(i,t.paint,[[-1.15,1.49],[1.15,1.49],[1.15,1.74],[-1.15,1.74]],[],(m,_,g)=>[2.98-(_-1.49)*.16-g,_,m]);let c=t.glass.clone();c.transparent=!0,c.opacity=.68,c.metalness=0,c.depthWrite=!1;for(let m of s)m.material.dispose(),m.material=c;let u=[];i.traverse(m=>{m.material===t.rubber&&m.geometry.type==="CylinderGeometry"&&m.geometry.parameters.radiusTop===.012&&m.position.y>2.1&&u.push(m)});for(let m of u)m.removeFromParent(),m.geometry.dispose();for(let[m,_]of[[0,[-1.02,-.07]],[1,[.07,1.02]]]){let g=[[a(2.04),2.04,_[0]],[a(2.04),2.04,_[1]],[a(2.62),2.62,_[1]],[a(2.62),2.62,_[0]]];r(s[m],g),s[m].name="cab glazing";for(let S=0;S<4;S++)pt(i,t.rubber,g[S],g[(S+1)%4],.018);let p=(_[0]+_[1])/2;pt(i,t.darkSteel,[a(2.05)+.018,2.05,p],[a(2.3)+.024,2.3,p-.2],.014),pt(i,t.rubber,[a(2.21)+.025,2.21,p-.27],[a(2.47)+.025,2.47,p-.09],.012)}for(let[m,_]of[[2,-1],[3,1]]){let g=[[.79,2.18,_*1.178],[2.25,2.18,_*1.178],[2.25,2.57,_*1.178],[.79,2.57,_*1.178]];r(s[m],g),s[m].name="cab glazing";for(let p=0;p<4;p++)pt(i,t.rubber,g[p],g[(p+1)%4],.017);Y(i,t.edge,[.045,.39,.025],[1.45,2.375,_*1.196],"sliding window mullion"),Y(i,t.rubber,[.085,.25,.18],[2.065,2.32,_*1.47],"mirror housing"),pt(i,t.darkSteel,[2.11,2.08,_*1.16],[2.1,2.24,_*1.46],.018);for(let p of[1.93,2.47])Y(i,t.darkSteel,[.065,.13,.035],[.66,p,_*1.185],"door hinge");Y(i,t.edge,[.22,.26,.13],[2.99,1.79,_*.83],"recessed headlight surround"),lt(i,t.lamp,.08,.033,[3.112,1.79,_*.83],"x",.08,32),lt(i,t.amber,.029,.024,[2.25,2.79,_*.9],"y",.029,20)}let d=Y(i,t.edge,[.025,.28,1.35],[a(1.84)+.015,1.84,0],"radiator grille frame");d.rotation.z=Math.atan(.47/1.01);for(let m=0;m<7;m++){let _=1.73+m*.033;Y(i,t.darkSteel,[.025,.025,1.24],[a(_)+.034,_,0],"radiator grille slat")}for(let m of[-.52,0,.52]){let _=Y(i,t.edge,[.034,.27,.023],[a(1.83)+.055,1.83,m],"grille support");_.rotation.z=Math.atan(.47/1.01)}pt(i,t.edge,[2.47,2.75,-1.15],[2.47,2.75,1.15],.031);for(let m of[-.75,-.38,0,.38,.75])Y(i,t.amber,[.12,.04,.07],[2.38,2.8,m],"roof clearance lamp");let h=i.getObjectByName("recovery stowage");if(h){for(let m of h.children.filter(_=>_.name==="tool locker"))m.geometry.dispose(),m.geometry=new Ze(2.6,.64,.43),m.position.y=1.99;for(let m of[-1,1])for(let _ of[-2.41,-1.56,-.71]){Y(h,t.edge,[.78,.54,.015],[_,1.99,m*1.195],"locker door gasket"),Y(h,t.paint,[.73,.49,.019],[_,1.99,m*1.21],"formed locker door");for(let g of[1.83,2.15])Y(h,t.darkSteel,[.05,.08,.028],[_-.31,g,m*1.235],"locker hinge");Y(h,t.darkSteel,[.055,.09,.021],[_+.25,2.04,m*1.237],"recessed locker latch")}}let f=i.getObjectByName("recovery crane");if(f){for(let m of[-1,1])fi(f,t.paint,[[-1.17,2.15,m*.29],[-1.1,2.59,m*.29],[-.61,2.59,m*.29],[-.54,2.15,m*.29]]).name="crane pivot cheek",lt(f,t.steel,.082,.064,[-.85,2.49,m*.33],"z",.082,32),he(f,t.rubber,[[-.8,1.98,m*.36],[-.6,2.19,m*.39],[-.69,2.59,m*.38],[-1.12,2.71,m*.25],[-1.99,3.04,m*.25]],.021,36),pt(f,t.steel,[-.85,1.78,m*.55],[-.85,2.1,m*.28],.04);Y(f,t.edge,[.82,.11,1.1],[-.85,1.77,0],"crane mounting crossmember");for(let m of[-1,1])Y(f,t.paint,[.46,.24,.15],[-2.69,1.51,m*1.11],"stowed stabilizer"),lt(f,t.darkSteel,.064,.31,[-2.69,1.28,m*1.11]),Y(f,t.darkSteel,[.23,.045,.24],[-2.69,1.11,m*1.11],"stabilizer foot")}}function Ku(i,t,e,n){let s=new be;s.name="driver controls",i.add(s);let r=e/2-1.4,a=i.userData.roof?1.53:1.86;Y(s,t.edge,[.22,.26,1.42],[r+.17,a+.14,0],"dashboard");for(let d of[-1,1])Y(s,t.rubber,[.48,.14,.47],[r-.45,a,d*.48],"driver seat"),Y(s,t.rubber,[.12,.58,.47],[r-.68,a+.27,d*.48],"seat back"),pt(s,t.steel,[r-.45,a-.3,d*.48],[r-.45,a-.07,d*.48],.026);let o=new jt(new Ci(.18,.017,8,40),t.rubber);o.rotation.y=Math.PI/2,o.position.set(r-.15,a+.41,-.48),s.add(o);for(let d=0;d<3;d++){let h=d*Math.PI*2/3;pt(s,t.darkSteel,[r-.15,a+.41,-.48],[r-.15,a+.41+Math.cos(h)*.16,-.48+Math.sin(h)*.16],.009)}for(let d=0;d<4;d++)lt(s,t.glass,.034,.012,[r+.045,a+.21,-.57+d*.09],"x");let l=a-.12;Y(s,t.edge,[1.5,.05,1.8],[r-.18,l,0],"cab floor");for(let d of[-1,1]){for(let h of[d*.48-.16,d*.48+.16])Y(s,t.darkSteel,[.58,.045,.04],[r-.47,l+.04,h],"seat adjustment rail");Y(s,t.rubber,[.13,.17,.32],[r-.67,a+.6,d*.48],"driver head restraint");for(let h of[d*.48-.1,d*.48+.1])pt(s,t.steel,[r-.67,a+.5,h],[r-.67,a+.6,h],.013);pt(s,t.darkSteel,[r-.6,a+.41,d*.65],[r-.13,a-.02,d*.34],.012).name="diagonal restraint",Y(s,t.red,[.025,.035,.045],[r-.13,a-.015,d*.34],"restraint buckle"),he(s,t.darkSteel,[[r-.67,a+.2,d*.73],[r-.41,a-.02,d*.73],[r-.13,a-.02,d*.34]],.009,22).name="lap restraint"}pt(s,t.darkSteel,[r-.15,a+.41,-.48],[r+.07,a+.3,-.48],.026).name="steering column",lt(s,t.edge,.04,.06,[r-.15,a+.41,-.48],"x",.04,24).name="steering hub";for(let d of[-.6,-.43,-.26]){pt(s,t.steel,[r+.2,l+.025,d],[r+.08,l+.13,d],.012).name="pedal arm";let h=Y(s,t.rubber,[.09,.025,.07],[r+.08,l+.14,d],"driver pedal");h.rotation.z=-.45}Y(s,t.edge,[.3,.16,.19],[r-.1,l+.1,.02],"gear selector console"),pt(s,t.darkSteel,[r-.1,l+.18,.02],[r-.14,a+.16,.02],.012).name="gear selector",lt(s,t.rubber,.03,.045,[r-.14,a+.18,.02]).name="selector grip";for(let d=0;d<4;d++){let h=-.57+d*.09;lt(s,t.darkSteel,.037,.009,[r+.035,a+.21,h],"x",.037,24).name="instrument bezel",pt(s,t.lamp,[r+.028,a+.21,h],[r+.028,a+.23,h+.009],.0025).name="instrument needle"}Rc(i,t);let c=[];i.traverse(d=>{d.name==="wheel guard"&&c.push(d)});for(let d of c){let h=new ni;for(let f=0;f<=12;f++){let m=f*Math.PI/12,_=Math.cos(m)*.7,g=Math.sin(m)*.7;f?h.lineTo(_,g):h.moveTo(_,g)}for(let f=12;f>=0;f--){let m=f*Math.PI/12;h.lineTo(Math.cos(m)*.64,Math.sin(m)*.64)}h.closePath(),d.geometry.dispose(),d.geometry=new wi(h,{depth:.46,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.009,bevelThickness:.009}),d.position.y=.62,d.position.z-=.23}for(let d of[-1,1]){let h=d*n*.45;for(let f of[-e*.38,-e*.22])Y(i,t.edge,[.028,.12,.028],[f,1.75,h],"panel hinge"),lt(i,t.steel,.011,.07,[f,1.75,h+d*.024],"y",.011,12);for(let f=0;f<6;f++)Y(i,t.darkSteel,[.3,.02,.03],[-e*.27,2.08+f*.035,h+d*.018],"louvred cooling intake");pt(i,t.darkSteel,[e*.36,1.38,h],[e*.36,1.95,h],.016)}pt(i,t.darkSteel,[-e*.34,.8,0],[e*.31,.8,0],.06),Y(i,t.edge,[e*.56,.065,n*.48],[0,.9,0],"belly protection"),lt(i,t.darkSteel,.11,.85,[-e*.22,1.18,-n*.28],"x"),he(i,t.darkSteel,[[-e*.22,1.18,-n*.28],[-e*.38,1.18,-n*.28],[-e*.42,1.37,-n*.37]],.034);let u=-e/2;for(let d of[-1,1])he(i,t.darkSteel,[[u+.7,1.4,d*n*.43],[u+.7,2.1,d*n*.46],[u+1.3,2.13,d*n*.46]],.024),Y(i,t.edge,[.4,.2,.42],[u+.55,1.07,d*n*.39],"mud flap");for(let d=0;d<4;d++)pt(i,t.steel,[u+.1,1.15+d*.18,-.3],[u+.1,1.15+d*.18,.3],.014)}function Rc(i,t){let e=[];i.traverse(n=>{n.name==="run-flat wheel"&&e.push(n)});for(let n of e){if(n.userData.detailed)continue;n.userData.detailed=!0;let s=n.children[0];s.geometry.dispose();let r=[[0,-.185],[.37,-.185],[.51,-.18],[.565,-.145],[.585,-.08],[.585,.08],[.565,.145],[.51,.18],[.37,.185],[0,.185]].map(([a,o])=>new at(a,o));s.geometry=new Ai(r,48),s.rotation.x=Math.PI/2;for(let a of[-1,1]){let o=lt(n,t.steel,.275,.015,[0,0,a*.18],"z",.275,48);o.name=a===-Math.sign(n.position.z)?"ventilated brake rotor":"rim retaining ring";for(let l=0;l<16;l++){let c=l*Math.PI/8;lt(n,t.darkSteel,.012,.018,[Math.sin(c)*.23,Math.cos(c)*.23,a*.191],"z",.012,8)}a===-Math.sign(n.position.z)&&Y(n,t.darkSteel,[.12,.21,.09],[.23,0,a*.17],"brake caliper");for(let l=0;l<8;l++){let c=l*Math.PI/4;lt(n,t.darkSteel,.025,.012,[Math.sin(c)*.286,Math.cos(c)*.286,a*.228],"z",.025,10)}lt(n,t.steel,.012,.025,[.12,.3,a*.23],"z",.012,8)}}}function $_(i,t,e,n){if(e==="CAP"){let s=[];i.traverse(r=>{r.name==="crew seat cushion"&&s.push(r)});for(let r of s){let{x:a,z:o}=r.position;Y(i,t.rubber,[.12,.15,.28],[a-.19,1.06,o],"head restraint");for(let l of[-1,1])pt(i,t.darkSteel,[a-.16,.73,o+l*.25],[a+.18,.73,o+l*.25],.021),lt(i,t.steel,.023,.025,[a-.18,.28,o+l*.17],"z");Y(i,t.amber,[.035,.045,.028],[a+.13,.51,o+.22],"belt buckle");for(let l=0;l<3;l++)Y(i,t.edge,[.31,.005,.009],[a,.56,o+(l-1)*.08],"seat seam")}}else if(e==="FP"){Y(i,t.darkSteel,[.39,.12,.14],[.12,.73,0],"breech cover");for(let s=0;s<7;s++)Y(i,t.edge,[.018,.04,.13],[-.06+s*.045,.81,0],"receiver cooling fin");for(let s of[-1,1])Y(i,t.paint,[.055,.27,.3],[-.1,.55,s*.31],"mount cheek"),lt(i,t.steel,.045,.038,[-.1,.57,s*.35],"z",.045,32);for(let s=0;s<8;s++)lt(i,t.amber,.018,.08,[-.24+s*.034,.58,-.4],"y",.013,12);he(i,t.rubber,[[-.23,.38,-.37],[-.36,.48,-.3],[-.35,.64,-.17],[-.1,.72,-.11]],.018,24);for(let s=0;s<6;s++)Y(i,t.steel,[.033,.007,.017],[.18+s*.038,.8,0],"accessory rail")}else if(e==="COM"){let s=n===1?3:n===6?2:1;for(let r=0;r<s;r++){let a=(r-(s-1)/2)*.4;for(let o of[-.13,.13])for(let l of[.12,.47])lt(i,t.steel,.008,.012,[a+o,l,.127],"z",.008,6);for(let o=0;o<4;o++)lt(i,t.steel,.013,.012,[a-.1+o*.063,.1,.13],"z"),lt(i,t.darkSteel,.009,.016,[a-.1+o*.063,.1,.14],"z");Y(i,t.darkSteel,[.04,.18,.023],[a+.145,.3,.126],"grip")}}else if(e==="SA"){let s=n===3?1.75:.43;for(let r of[-.105,.105]){let a=new jt(new Ci(.068,.008,8,40),t.darkSteel);a.position.set(r,s,.198),i.add(a),Y(i,t.edge,[.19,.025,.18],[r,s+.14,.065],"lens sunshade");for(let o of[-.09,.09])lt(i,t.steel,.006,.012,[r+o,s+.09,.123],"z",.006,6)}}else if(e==="ACC"&&[0,5].includes(n)){for(let r of[-.42,.42]){Y(i,t.edge,[.09,.08,.46],[r,.14,0],"gusseted pedestal");for(let a of[-.19,.19])lt(i,t.steel,.011,.02,[r,.19,a],"y",.011,6),fi(i,t.paint,[[r-.085,.085,a],[r+.085,.085,a],[r,.26,a]]).name="bearing pedestal gusset"}lt(i,t.paint,.145,.15,[-.57,.34,0],"x",.145,40).name="reduction gearcase",lt(i,t.darkSteel,.155,.026,[-.66,.34,0],"x",.155,40).name="gearcase joint",Gn(i,t.steel,[-.678,.34,0],.123,8,"x",.009);for(let r=0;r<6;r++)lt(i,t.darkSteel,.086,.012,[-.7-r*.021,.34,0],"x",.086,32).name="hydraulic motor cooling ring";lt(i,t.paint,.09,.025,[-.835,.34,0],"x",.09,32).name="motor end cover";for(let r of[.21,.46])pt(i,t.darkSteel,[-.42,r,-.235],[.42,r,-.235],.018).name="rear frame tie rod";Y(i,t.paint,[.21,.065,.12],[-.23,.602,.12],"hydraulic valve block");for(let r of[-.3,-.16])pt(i,t.darkSteel,[-.42,.49,.12],[r,.57,.12],.013).name="valve block support",lt(i,t.steel,.017,.03,[r,.65,.12]).name="valve port";for(let[r,a]of[[-.3,-.74],[-.16,-.79]])he(i,t.rubber,[[r,.65,.12],[r,.68,.12],[-.52,.69,.1],[a,.52,.065],[a,.38,.065]],.013,40).name="motor hydraulic supply";lt(i,t.steel,.02,.055,[0,.235,.455]).name="rope ferrule";let s=new jt(new Ci(.035,.007,8,28),t.steel);s.rotation.y=Math.PI/2,s.position.set(0,.22,.46),s.name="rope eye thimble",i.add(s),lt(i,t.darkSteel,.027,.025,[-.068,.122,.49],"z",.027,20).name="hook latch pivot"}}var j_=Object.freeze(["COMBAT","RECCE","TROOP","COMMAND","RECOVERY","MINE"]),ju=Object.freeze([...["ACC","CAP","COM","FP","MOB","PRO","SA"].flatMap(i=>"ABCDEFG".split("").map(t=>`${i}-${t}`)),..."ABCDEFGHIJKLMNOPQRSTU".split("").map(i=>`SE-${i}`),"TRAIN-CAP"]);function Dn(i){let t=new be;return t.name=i,t}function Qu(i,t,e,n){Y(i,t.edge,[.48,.12,.48],[e,.4,n]),Y(i,t.rubber,[.44,.13,.43],[e,.49,n],"crew seat cushion"),Y(i,t.rubber,[.12,.52,.44],[e-.19,.8,n]),pt(i,t.darkSteel,[e-.19,.93,n-.13],[e+.12,.49,n+.13],.013);for(let s of[-1,1])pt(i,t.steel,[e+s*.17,.06,n],[e+s*.17,.36,n],.018)}function Q_(i,t){let e=Dn("crew bay"),n=[6,6,4,8,5,5,4][t],s=[2.65,3.05,2.05,3.25,2.2,2.5,2.1][t],r=t===6?1.26:1.47,a=Math.ceil(n/2),o=(s-.65)/a;Y(e,i.paint,[s,.12,r],[0,.06,0]);for(let l=0;l<n;l++){let c=Math.floor(l/2),u=l===n-1&&n%2;Qu(e,i,(c-(a-1)/2)*o,u?0:(l%2?1:-1)*r*.25)}if(t!==4){for(let l of[-1,1]){Y(e,i.paint,[s,t===5?.93:.55,t===5?.1:.055],[0,t===5?.52:.34,l*(r/2+.035)]);for(let c of[-s/2+.08,s/2-.08])pt(e,i.edge,[c,.12,l*r/2],[c,1.24,l*r/2],t===5?.046:.032)}Y(e,i.paint,[s+.1,.065,r+.1],[0,1.28,0],"crew roof")}if(t===5){for(let l of[-1,1])for(let c of[-.65,.25])Y(e,i.rubber,[.44,.2,.018],[c,.86,l*(r/2+.09)]),Y(e,i.glass,[.38,.14,.02],[c,.86,l*(r/2+.103)]);Y(e,i.edge,[s,.07,r],[0,.1,0],"reinforced floor")}if(t===4)for(let l of[-1,1])pt(e,i.steel,[-s/2,.09,l*.5],[s/2,.09,l*.5],.018);return e}function tx(i,t,e,n,s="x",r="cast transmission casing"){let a=new Ai(e.map(([l,c])=>new at(l,c)),40),o=new jt(a,t);return o.position.set(...n),o.rotation[s==="x"?"z":"x"]=Math.PI/2,o.name=r,i.add(o),o}function td(i,t){let e=Dn("inline diesel power pack"),n=t===5;for(let s of[-.38,.38])Y(e,i.edge,[2.05,.09,.085],[-.2,.11,s],"power pack skid rail");for(let s of[-1.05,.7])Y(e,i.edge,[.08,.07,.84],[s,.13,0],"skid crossmember");Y(e,i.paint,[.97,.42,.45],[0,.48,0],"cast inline engine block"),Y(e,i.darkSteel,[.86,.18,.36],[0,.25,0],"sump"),Y(e,i.paint,[1.01,.18,.47],[0,.82,0],"cylinder head"),Y(e,i.edge,[1.02,.12,.43],[0,.97,0],"single rocker cover");for(let s=0;s<6;s++){let r=-.4+s*.16;Y(e,i.darkSteel,[.019,.34,.015],[r,.48,.237],"casting web"),he(e,i.steel,[[r,.78,.25],[r,.66,.36],[r+.04,.53,.42]],.023,18),he(e,i.darkSteel,[[r,.86,-.22],[r,.76,-.31],[r,.62,-.34]],.026,18)}he(e,i.darkSteel,[[-.42,.53,.42],[.4,.53,.42],[.48,.68,.38]],.046,28),tx(e,i.steel,[[0,-.04],[.11,-.04],[.23,.03],[.27,.13],[.23,.26],[.17,.52],[.12,.68],[0,.68]],[-.48,.52,0]);for(let s of[-.69,-.82,-.95])lt(e,i.darkSteel,.2,.025,[s,.52,0],"x",.2,40);lt(e,i.steel,.1,.1,[-1.2,.52,0],"x"),Y(e,i.darkSteel,[.1,.88,.76],[.68,.61,0],"radiator core");for(let s of[-.4,.4])Y(e,i.paint,[.14,.93,.06],[.68,.61,s],"radiator side tank");for(let s of[.17,1.05])Y(e,i.steel,[.14,.045,.83],[.68,s,0],"radiator header");for(let s=0;s<22;s++)Y(e,i.steel,[.013,.77,.009],[.743,.61,-.35+s*.033],"radiator fin");lt(e,i.edge,.25,.07,[.57,.62,0],"x",.25,40);for(let s=0;s<7;s++){let r=s*Math.PI*2/7,a=Y(e,i.darkSteel,[.025,.24,.075],[.535,.62+Math.cos(r)*.13,Math.sin(r)*.13],"cooling fan blade");a.rotation.x=r}he(e,i.rubber,[[.4,.85,-.2],[.45,1.06,-.24],[.64,1.06,-.24]],.045,28),he(e,i.rubber,[[.35,.33,-.23],[.48,.2,-.29],[.64,.2,-.29]],.039,28),lt(e,i.darkSteel,.11,.45,[-.04,1.13,-.34],"x",.11,32),he(e,i.rubber,[[.2,1.13,-.34],[.36,1.13,-.34],[.39,.88,-.26]],.062,30),lt(e,i.steel,.085,.12,[.2,.52,.36],"x",.085,32);for(let s=0;s<8;s++)Y(e,i.steel,[.012,.14,.05],[.15+s*.018,.52,.37],"alternator cooling rib");for(let[s,r,a]of[[.41,0,.11],[.68,.17,.067]])lt(e,i.darkSteel,a,.035,[.5,s,r],"x",a,32);he(e,i.rubber,[[.525,.32,0],[.525,.48,-.09],[.525,.74,.12],[.525,.69,.23],[.525,.33,.06],[.525,.32,0]],.012,40);for(let s of[-.35,.32])for(let r of[-.25,.25])lt(e,i.rubber,.04,.09,[s,.2,r]),pt(e,i.steel,[s,.22,r],[s,.38,r],.022);if(t===4){Y(e,i.paint,[.72,.75,.42],[-.52,.56,-.74],"long range fuel reservoir");for(let s of[-.78,-.28])Y(e,i.darkSteel,[.036,.77,.45],[s,.56,-.74],"fuel tank restraint");lt(e,i.steel,.048,.045,[-.52,.96,-.74]),he(e,i.rubber,[[-.3,.29,-.72],[-.09,.3,-.58],[.04,.55,-.26]],.016,30)}return n&&e.scale.setScalar(.78),e}function Pc(i,{wheels:t=!1,light:e=!1,adaptive:n=!1,springs:s=!1}={}){let r=Dn("connected drive axle"),a=e?1.3:1.65,o=.44,l=e?.13:.19,c=new jt(new Ri(l,32,20),i.paint);c.scale.set(1.18,1,1.05),c.position.set(0,o,0),c.name="cast differential housing",r.add(c),lt(r,i.darkSteel,l*.9,.055,[l*.8,o,0],"x",l*.9,32),lt(r,i.steel,.065,.17,[l*1.2,o,0],"x");for(let u of[-1,1]){pt(r,i.paint,[0,o,u*.07],[0,o,u*a*.43],e?.043:.068);for(let h=0;h<5;h++)lt(r,i.rubber,e?.06:.09,.045,[0,o,u*(.24+h*.05)],"z",e?.06:.09,24);if(lt(r,i.steel,.16,.045,[0,o,u*a*.47],"z",.16,32),lt(r,i.darkSteel,.1,.1,[0,o,u*a*.46],"z"),t){let h=Is(i);h.scale.setScalar(e?.56:.76),h.position.set(0,o,u*a*.49),r.add(h)}else Gn(r,i.steel,[0,o,u*(a*.47+.03)],.115,8,"z",.014);let d=u*a*.29;if(pt(r,i.edge,[-.28,o+.03,d],[.12,o+.41,d],e?.025:.043),pt(r,i.edge,[.28,o+.03,d],[.12,o+.41,d],e?.025:.043),Y(r,i.edge,[.16,.095,.15],[.12,o+.43,d],"suspension upper mount"),s){pt(r,i.steel,[-.1,o+.03,d],[-.1,o+.58,d],.022);let h=[];for(let f=0;f<=144;f++){let m=f/144*Math.PI*16;h.push([-.1+Math.cos(m)*.074,o+.09+f/144*.4,d+Math.sin(m)*.074])}he(r,i.darkSteel,h,.015,144),lt(r,i.amber,.034,.32,[.12,o+.18,d]),pt(r,i.steel,[.12,o+.34,d],[.12,o+.61,d],.018)}}pt(r,i.darkSteel,[-.21,o-.07,-a*.42],[-.21,o-.07,a*.42],.023);for(let u of[-1,1])pt(r,i.darkSteel,[-.21,o-.07,u*a*.42],[0,o,u*a*.45],.023);if(n){Y(r,i.steel,[.37,.1,.34],[0,o+.23,0],"traction controller");for(let u of[-1,1])he(r,i.rubber,[[0,o+.23,u*.12],[.19,o+.18,u*.2],[.14,o-.15,u*.42],[0,o,u*a*.45]],.015,28)}return r}function ex(i,t){if(t!==2)return Pc(i,{wheels:t===1,adaptive:t===6,springs:t===1});let e=Pc(i,{wheels:!0,light:!0,springs:!0});e.name="lightweight running gear";for(let n of[-.3,.3])Y(e,i.paint,[.075,.09,.83],[n,.22,0],"lightweight cradle crossmember");for(let n of[-.4,.4])Y(e,i.paint,[.67,.09,.07],[0,.22,n],"lightweight cradle side rail");return e}function nx(i){return Pc(i,{springs:!0})}function ed(i,t){let e=Dn("weapon station");lt(e,i.edge,.37,.12,[0,.06,0]),lt(e,i.paint,.28,.27,[0,.25,0]),Y(e,i.paint,[.6,.42,.5],[0,.49,0]);let n=[.68,1.05,1.6,.74,.65,1.14,1.04][t],s=t===6?2:1;for(let r=0;r<s;r++){let a=s===2?(r-.5)*.44:0;Y(e,i.edge,[.44,.17,.17],[.18,.7,a]),lt(e,i.darkSteel,t===2?.055:.032,n,[.45+n/2,.7,a],"x"),lt(e,i.darkSteel,.07,.15,[.45+n,.7,a],"x"),lt(e,i.rubber,.03,.003,[.53+n,.7,a],"x")}Y(e,i.paint,[.34,.35,.34],[-.15,.51,-.39]);for(let r of[-.2,.2])Gn(e,i.steel,[r,.45,.27],.055,5);if([3,5].includes(t)){let r=Ko(i,0);r.scale.setScalar(.42),r.position.set(-.1,.73,.29),e.add(r)}return e}function ix(i,t){let e=Dn("protection kit"),n=(r,a,o=i.paint,l="formed protection panel")=>{let c=rn(e,o,r,[],(u,d,h)=>[u,d,a+h]);return c.name=l,c},s=(r,a,o)=>{lt(e,i.steel,.016,.035,[r,a,o],"z",.016,6).name="protection attachment bolt",lt(e,i.darkSteel,.024,.008,[r,a,o-.015],"z").name="attachment washer"};if([3,6].includes(t)){let r=t===3?.67:.77,a=t===3?1.7:2.3,o=-a/2,l=a/2,c=t===3?1.38:1.3;Y(e,i.edge,[a,.09,r*2],[0,.045,0],"reinforced floor");let u=i.glass.clone();u.transparent=!0,u.opacity=.58,u.metalness=0,u.depthWrite=!1;for(let f of[-1,1]){let m=[[o,.09],[l,.09],[l-.25,c-.08],[l-.42,c],[o+.07,c]],_=pi(o+.2,.85,l-.48,c-.13,.045);rn(e,i.paint,m,[_],(p,S,w)=>[p,S,f*(r-w)]);let g=rn(e,u,[[o+.22,.87],[l-.5,.87],[l-.5,c-.15],[o+.22,c-.15]],[],(p,S,w)=>[p,S,f*(r+.008-w*.2)]);g.name="protected glazing";for(let p of[o+.13,0,l-.38])pt(e,i.edge,[p,.1,f*(r-.08)],[p,c-.07,f*(r-.08)],.026).name="interior shell rib";for(let p of[o+.12,l-.2])s(p,.2,f*(r+.02))}let d=f=>l-(f-.09)*.25/(c-.17);rn(e,i.paint,[[-r,.09],[r,.09],[r,c-.08],[-r,c-.08]],[pi(-r+.16,.85,r-.16,c-.18)],(f,m,_)=>[d(m)-_,m,f]);let h=rn(e,u,[[-r+.18,.87],[r-.18,.87],[r-.18,c-.2],[-r+.18,c-.2]],[],(f,m,_)=>[d(m)+.008-_*.2,m,f]);if(h.name="protected windshield",Y(e,i.paint,[a-.39,.07,r*2],[o+(a-.39)/2,c-.02,0],"formed cell roof"),Y(e,i.paint,[.18,.09,r*2],[l-.33,c-.055,0],"folded windshield header"),rn(e,i.paint,[[-r,.09],[r,.09],[r,c],[-r,c]],[pi(-r+.1,.17,r-.1,c-.11)],(f,m,_)=>[o+_,m,f]),t===3){for(let f of[-1,1])Qu(e,i,-.1,f*.32),pt(e,i.darkSteel,[-.29,1.08,f*.48],[.02,.47,f*.2],.013).name="crew cell restraint";Y(e,i.edge,[.18,.055,1.1],[o-.08,.12,0],"boarding threshold")}else for(let f of[o+.26,l-.48])pt(e,i.edge,[f,c-.06,-r+.07],[f,c-.06,r-.07],.027).name="roof hoop";for(let f of[-1,1])for(let m of[.35,1.02])Y(e,i.darkSteel,[.045,.1,.06],[o+.025,m,f*(r-.055)],"rear aperture hinge")}else if(t===5){for(let r of[-1,1]){rn(e,i.paint,[[-.92,.02],[.92,.02],[1.04,.18],[.9,.48],[-.9,.48],[-1.04,.18]],[],(a,o,l)=>[a,.12+o*.42+l,r*o*1.55]).name="V underbody plate",Y(e,i.edge,[1.82,.075,.08],[0,.39,r*.67],"underbody mounting rail");for(let a of[-.65,.65])pt(e,i.darkSteel,[a,.3,r*.58],[a,.44,r*.58],.032).name="energy absorbing mount",lt(e,i.rubber,.047,.075,[a,.41,r*.58]),lt(e,i.steel,.018,.055,[a,.455,r*.58],"y",.018,6).name="underbody attachment bolt"}pt(e,i.edge,[-.94,.12,0],[.94,.12,0],.025).name="V keel joint"}else{let r=t===4||t===2?3:1,a=r===1?1.55:.57;for(let o of[.18,.79])Y(e,i.edge,[r===1?1.5:1.93,.055,.06],[0,o,-.1],"protection mounting rail");for(let o=0;o<r;o++){let l=(o-(r-1)/2)*.66,c=[[l-a/2,.12],[l+a/2-.08,.12],[l+a/2,.23],[l+a/2,.77],[l+a/2-.1,.9],[l-a/2+.08,.9],[l-a/2,.8]];if(t===0)n(c,0,i.darkSteel,"inner support plate"),n(c,.18,i.paint,"outer spaced plate");else if(t===1){let d=i.paint.clone();d.color.set("#c5c0a9"),d.metalness=0,d.roughness=.94,n(c,0,i.darkSteel,"composite backing"),n(c,.045,d,"ceramic core"),n(c,.09,i.paint,"composite outer plate")}else{let d=n(c,.055,i.paint,t===2?"light formed panel":"replaceable side skirt");if(t===2){let h=d.geometry.attributes.position;for(let f=0;f<h.count;f++)h.setZ(f,h.getZ(f)+.032*Math.sin((h.getY(f)-.12)/.78*Math.PI));d.geometry.computeVertexNormals()}}let u=t===0?.235:t===1?.145:.115;for(let d of[-a*.36,a*.36])for(let h of[.23,.77])pt(e,i.darkSteel,[l+d,h,-.09],[l+d,h,u],.015).name="panel standoff",s(l+d,h,u)}}return e}function nd(i,t){let e=Dn("radio suite"),n=t===1?3:t===6?2:1;for(let s=0;s<n;s++){let r=(s-(n-1)/2)*.4;Y(e,i.paint,[.35,.46,.23],[r,.29,0]),Y(e,i.glass,[.2,.09,.014],[r,.4,.125]);for(let a=0;a<4;a++)lt(e,i.darkSteel,.026,.027,[r-.09+a*.06,.26,.135],"z");pt(e,i.darkSteel,[r+.1,.5,0],[r+.1,1.1+(t===4?.6:0)+s*.13,0],.009),he(e,i.rubber,[[r-.08,.2,.12],[r-.2,.09,.22],[r-.15,.06,.35],[r+.17,.1,.3]],.012)}if([3,4].includes(t)){let s=1.65+t*.12;pt(e,i.paint,[.42,.1,-.28],[.42,s,-.28],.028);for(let r of[-1,1])pt(e,i.darkSteel,[.42,s*.8,-.28],[.42+r*.55,.02,-.28+r*.45],.006);if(t===3){let r=new jt(new Ri(.3,20,12,0,Math.PI*2,0,Math.PI/2),i.paint);r.rotation.x=Math.PI/2,r.position.set(.42,s,-.28),e.add(r)}}return e}function Ko(i,t){let e=Dn("sensor suite");lt(e,i.edge,.17,.1,[0,.05,0]),pt(e,i.paint,[0,.1,0],[0,t===3?1.65:.35,0],.05);let n=t===3?1.75:.43;Y(e,i.paint,[.4,.24,.22],[0,n,0]);for(let s of[-.105,.105])lt(e,i.darkSteel,.078,.05,[s,n,.14],"z"),lt(e,i.glass,.058,.012,[s,n,.172],"z");if((t===1||t===5)&&(Y(e,i.paint,[.26,.22,.22],[.26,n-.05,0]),lt(e,i.glass,.075,.025,[.26,n-.05,.13],"z")),t===3||t===6)for(let s of[-1,1])pt(e,i.darkSteel,[0,.37,0],[s*.35,0,.25],.017);if(t===4){let s=new jt(new Ri(.28,24,12,0,Math.PI*2,0,Math.PI*.64),i.paint);s.position.set(0,.4,-.2),e.add(s)}if(t===6)for(let s of[-.5,.5]){let r=Ko(i,3);r.scale.setScalar(.54),r.position.set(s,0,-.25),e.add(r)}return e}function id(i){let t=Dn("clearance roller");Y(t,i.paint,[1.1,.12,.35],[0,.48,-.1]);for(let e of[-.45,.45])pt(t,i.edge,[e,.48,-.3],[e,.16,.32],.032),lt(t,i.darkSteel,.17,.13,[e,.17,.34],"x");for(let e=0;e<7;e++){let n=-.45+e*.15;lt(t,i.paint,.14,.095,[n,.17,.34],"x"),Gn(t,i.steel,[n+.05,.17,.34],.1,8,"x",.013)}return t}function sx(i,t){if([0,5].includes(t))return Fr(i);if([2,4].includes(t))return id(i);let e=Dn("field equipment");if(t===1){Y(e,i.paint,[1.4,.14,.85],[0,.39,0]);for(let n of[-1,1]){let s=Is(i);s.scale.setScalar(.5),s.position.set(-.15,.3,n*.43),e.add(s)}pt(e,i.edge,[.7,.38,-.25],[1.28,.38,0],.036),pt(e,i.edge,[.7,.38,.25],[1.28,.38,0],.036),Y(e,i.paint,[1.33,.4,.8],[0,.64,0])}else{Y(e,i.edge,[1.15,.06,.65],[0,.03,0]);for(let n=0;n<3;n++)Y(e,i.paint,[.29,.35,.47],[-.37+n*.37,.24,0]),Y(e,i.steel,[.14,.025,.018],[-.37+n*.37,.34,.25]);if(t===6)for(let n of[-.55,.55])pt(e,i.darkSteel,[n,0,0],[n,.65,0],.025)}return e}function rx(i,t){let e=Dn("engineering review");Y(e,i.edge,[1.3,.065,.78],[0,.7,0]);for(let s of[-.54,.54])for(let r of[-.3,.3])pt(e,i.darkSteel,[s,0,r],[s,.69,r],.023);Y(e,i.darkSteel,[.95,.68,.055],[0,1.14,-.24]),Y(e,i.lamp,[.88,.61,.02],[0,1.14,-.205]);let n=[i.paint,i.amber,i.glass][t%3];for(let s=0;s<4;s++)Y(e,n,[.11+(s+t)%4*.035,.032,.013],[-.22+t%2*.08,.95+s*.115,-.188]),Y(e,i.edge,[.16,.016,.013],[.18,.95+s*.115,-.187]);if(Y(e,i.lamp,[.35,.017,.27],[-.34,.75,.18]),Y(e,i.glass,[.27,.018,.19],[.36,.75,.18]),lt(e,i.steel,.046,.11,[.54,.8,-.09]),[2,7,10,12,15].includes(t))for(let s=0;s<3;s++)Y(e,n,[.09,.09,.08],[-.27+s*.27,1.5,-.19]),s<2&&pt(e,i.darkSteel,[-.22+s*.27,1.5,-.19],[-.08+s*.27,1.5,-.19],.008);if([3,11,16,17,20].includes(t)){let s=td(i,0);s.scale.setScalar(.22),s.position.set(0,.74,.08),e.add(s)}return e}function Ic(i,t=Ls()){if(!ju.includes(i))throw new Error("Unknown 3D asset: "+i);let e=i==="TRAIN-CAP"?"CAP-C":i,[n,s]=e.split("-"),r=s.charCodeAt(0)-65,o=Cc({CAP:()=>Q_(t,r),MOB:()=>r===3?nx(t):[1,2,6].includes(r)?ex(t,r):td(t,r),FP:()=>ed(t,r),PRO:()=>ix(t,r),COM:()=>nd(t,r),SA:()=>Ko(t,r),ACC:()=>sx(t,r),SE:()=>rx(t,r)}[n](),t,n,r);return o.name=i,o.userData={assetId:i,illustrative:!0,units:"metres"},o}function Lc(i,t=Ls()){if(!j_.includes(i))throw new Error("Unknown 3D mission: "+i);let e=$u(i,t);e.name=i,e.userData.mission=i;let n=e.userData.roof||2.75;if(i==="COMBAT"||i==="MINE"){let s=ed(t,i==="COMBAT"?2:1);s.name="mission weapon",s.position.set(-.35,n,0),e.add(s)}if(i==="RECCE"){let s=Ko(t,3);s.name="mission sensor",s.position.set(-1,n,-.48),e.add(s)}if(i==="COMMAND"){let s=nd(t,4);s.name="mission radio",s.position.set(-1.5,n,-.4),e.add(s)}if(i==="TROOP"){Y(e,t.edge,[.055,.85,1.5],[-3.46,1.75,0],"rear ramp");for(let s of[-1,1])pt(e,t.steel,[-3.5,1.45,s*.52],[-3.5,2.05,s*.52],.018)}if(i==="MINE"){let s=id(t);s.name="mission roller",s.scale.setScalar(1.9),s.rotation.y=Math.PI/2,s.position.set(4.45,.1,0),e.add(s)}return Bi(e)}function sd(i,t,e=Ls()){let n=Lc(i,e),s=new Map;t.forEach(l=>{let c=typeof l=="string"?l:l.id;if(!ju.includes(c))throw new Error("Unknown 3D asset: "+c);c.startsWith("SE-")||s.set(c.split("-")[0],c)});let r=n.userData.length||6.25,a=n.userData.width||2.3,o=n.userData.roof||2.75;if(s.has("CAP")||s.has("MOB")){let l=[];n.traverse(c=>{c.isMesh&&c.name==="hull shell"&&l.push(c)});for(let c of l)c.material=c.material.clone(),c.material.transparent=!0,c.material.opacity=.16,c.material.depthWrite=!1}for(let[l,c]of s){let u=Ic(c,e);if(u.userData.mountedCard=c,l==="CAP"){if(u.position.set(-1.45,i==="RECOVERY"?1.75:1.4,0),i==="RECOVERY"){n.getObjectByName("recovery stowage")?.removeFromParent();let h=n.getObjectByName("recovery crane");h&&(h.position.z=-.95)}let d=u.getObjectByName("crew roof");d&&(d.visible=!1)}if(l==="MOB"&&(u.position.set(r/2-1.35,1.18,0),["MOB-B","MOB-C","MOB-D","MOB-G"].includes(c)&&u.position.set(0,.2,0)),l==="FP"&&(n.getObjectByName("mission weapon")?.removeFromParent(),u.position.set(-.35,o,0)),l==="COM"&&(n.getObjectByName("mission radio")?.removeFromParent(),u.position.set(.1,1.45,-.65)),l==="SA"&&(n.getObjectByName("mission sensor")?.removeFromParent(),u.position.set(-2.3,o,.5)),l==="PRO")if(c==="PRO-D")u.position.set(-r/2-.78,.94,0),Y(n,e.edge,[1.1,.12,1.16],[-r/2-.44,.92,0],"crew cell chassis extension");else if(c==="PRO-G")u.position.set(-1.3,1.4,0);else if(c==="PRO-F")u.position.set(0,.55,0);else{u.position.set(-1.6,1.36,a*.46);let d=u.clone();d.rotation.y=Math.PI,d.position.z=-a*.46,n.add(d)}if(l==="ACC")if(c==="ACC-B")u.position.set(-r/2-1.43,0,0);else if(["ACC-C","ACC-E"].includes(c))n.getObjectByName("mission roller")?.removeFromParent(),u.scale.setScalar(1.9),u.rotation.y=Math.PI/2,u.position.set(r/2+1.05,.1,0);else if(["ACC-A","ACC-F"].includes(c)){n.getObjectByName("mounted WR-12")?.removeFromParent(),u.rotation.y=Math.PI/2,u.position.set(r/2+.15,1.15,0),Y(n,e.edge,[.8,.27,1.3],[r/2+.1,1.015,0],"winch chassis crossmember");for(let d of[-1,1])pt(n,e.darkSteel,[r/2-.3,.92,d*.44],[r/2+.38,1.12,d*.44],.035).name="winch mounting brace"}else u.position.set(-r/2+.9,1.35,0);n.add(u)}return n.userData.configuration=!0,n.userData.installed=Object.fromEntries(s),n}function rd(i){let t=[...i.children],e=new Map,n=!!i.userData.mission,s=(i.userData.assetId||"").split("-")[0],r=0;function a(d){return d.userData.mountedCard?"equipment:"+d.userData.mountedCard:d.name==="run-flat wheel"?"wheel:"+ ++r:/crane/.test(d.name)?"crane":/driver controls/.test(d.name)?"cockpit":d.name==="mission weapon"?"mount":d.name==="mission radio"?"controls":d.name==="mission sensor"?"optics":d.name==="mission roller"?"front":d.name==="mounted WR-12"?"mechanism":/hull shell|cab rear|deck|lower.*hull/.test(d.name)?"body":/glazing|mirror/.test(d.name)||d.material?.name==="optical glass"?"glass":n?d.position.y<1.25?"chassis":d.position.x>1.5?"front":"body":s==="CAP"||s==="TRAIN"?/roof/.test(d.name)?"roof":d.position.y>.39?"seating":"frame":s==="MOB"?d.position.x>.49?"cooling":d.position.y>.72?"heads":d.material?.name==="machined steel"?"connections":"powertrain":s==="FP"?d.position.x>.45?"barrel":d.position.y<.3?"mount":"controls":s==="COM"||s==="SA"?d.position.y>.65?"optics":d.material?.name==="machined steel"?"connections":"controls":s==="PRO"?d.material?.name==="machined steel"?"connections":"protection":s==="ACC"?d.position.y<.16?"frame":d.material?.name==="machined steel"?"connections":"mechanism":d.position.y>.85?"display":d.position.y>.7?"documents":"frame"}for(let d of t){let h=a(d);if(!e.has(h)){let f=new be;f.name=h,i.add(f),e.set(h,f)}e.get(h).add(d)}i.updateWorldMatrix(!0,!0);let o=new Te().setFromObject(i),l=o.getCenter(new C),c=o.getSize(new C),u=[...e].map(([d,h],f)=>{let m=new Te().setFromObject(h),_=m.getCenter(new C),g=_.clone().sub(l),p;return d.startsWith("wheel:")?p=new C(0,-.15,Math.sign(_.z)||1).multiplyScalar(c.z*.4):d==="body"||d==="roof"?p=new C(0,c.y*.55,0):d==="chassis"||d==="frame"?p=new C(0,-c.y*.26,0):d==="glass"?p=new C(c.x*.18,c.y*.25,0):d==="cockpit"?p=new C(c.x*.2,c.y*.15,-c.z*.55):(g.lengthSq()<.01&&g.set(Math.sin(f*2.4),.8,Math.cos(f*2.4)),p=g.normalize().multiplyScalar(Math.max(c.length()*.24,.22)),p.y+=c.y*.16),{key:d,object:h,origin:h.position.clone(),vector:p,center:_}});return{parts:u,apply(d){if(!Number.isFinite(d)||d<0||d>1)throw Error("Invalid assembly separation");for(let h of u)h.object.position.copy(h.origin).addScaledVector(h.vector,d);i.updateWorldMatrix(!0,!0)},restore(){this.apply(0)}}}function ad(i,t,e,n=[7,4.5,7]){t.updateWorldMatrix(!0,!0);let s=new Te().setFromObject(t,!0),r=s.getCenter(new C),a=s.getSize(new C).length()/2;i.aspect=e;let o=Lr.degToRad(i.fov),l=Math.min(o/2,Math.atan(Math.tan(o/2)*e)),c=Math.max(a/Math.sin(l)/.86,1),u=new C(...n).normalize(),d=[];for(let m of[s.min.x,s.max.x])for(let _ of[s.min.y,s.max.y])for(let g of[s.min.z,s.max.z])d.push(new C(m,_,g));let h=Math.max(a*1.01,.1),f=c;i.near=.001,i.far=c+a*3+1,i.updateProjectionMatrix();for(let m=0;m<24;m++){let _=(h+f)/2;i.position.copy(r).addScaledVector(u,_),i.lookAt(r),i.updateMatrixWorld(!0);let g=0;for(let p of d){let S=p.clone().project(i);g=Math.max(g,Math.abs(S.x),Math.abs(S.y))}g>.86?h=_:f=_}return i.position.copy(r).addScaledVector(u,f),i.lookAt(r),i.near=Math.max(.01,f-a*1.5),i.far=f+a*3+1,i.updateProjectionMatrix(),i.updateMatrixWorld(!0),r}function od(i,t,e=0){i=Math.max(1,i),t=Math.max(1,t);let n=i>=850,s=!n&&t<400,r=n?{x:i-Math.min(420,i*.4),y:0,w:Math.min(420,i*.4),h:t}:s?{x:0,y:0,w:i,h:t}:{x:0,y:Math.round(t*.42),w:i,h:Math.round(t*.58)},a=n?{x:0,y:0,w:r.x,h:t}:{x:0,y:0,w:i,h:s?t:r.y},o=54,l=Math.max(1,Math.floor((r.h-140)/o));return{panel:r,model:a,rowHeight:o,capacity:l,pages:Math.max(1,Math.ceil(e/l))}}function ax(i,t,e,n,s=0){let r=i.panel;if(t<r.x||t>r.x+r.w||e<r.y||e>r.y+r.h)return null;if(e>=r.y+r.h-46)return t<r.x+r.w/2?"__previous":"__next";let a=i.placed?.find(c=>e>=c.y&&e<c.y+c.h),o=Math.floor((e-r.y-88)/i.rowHeight);if(!i.placed&&(o<0||o>=i.capacity))return"__panel";let l=i.placed?a?.row:n[s*i.capacity+o];return l&&l.kind!=="text"&&!l.disabled?l.key:"__panel"}function ox(i,t,e){let n=Math.max(16,Math.floor((t-48)/8)),s=Math.max(2,Math.floor((e-150)/18)),r=[[]],a=0;function o(l){let c=String(l??"").split(/\s+/),u=[],d="";for(let h of c){for(;h.length>n;)d&&(u.push(d),d=""),u.push(h.slice(0,n)),h=h.slice(n);d.length+h.length+1>n?(u.push(d),d=h):d+=(d?" ":"")+h}return d&&u.push(d),u}for(let l of i){let c=o(l.label),u=o(l.value),d=[...c,...u];for(let h=0;h<Math.max(1,d.length);h+=s){let f=d.slice(h,h+s),m=Math.max(48,f.length*18+14);a+m>e-140&&r.at(-1).length&&(r.push([]),a=0),r.at(-1).push({row:{...l,label:f.join(`
`),value:null},h:m}),a+=m}}return r}function ld(){let i=new Rn,t=new Vn(0,1,0,1,-10,10),e={rows:[]},n=null,s=od(1,1),r=0,a=null,o=[],l={panel:"#f1efe7",ink:"#202a29",muted:"#596359",line:"#c9cec2",info:"#e8e6de",field:"#fffef9",action:"#dde6d8",accent:"#465144",disabled:"#e4e4dd",disabledInk:"#73796f"};function c(){for(let f of o)f.dispose();o.length=0,i.clear()}function u(f,m,_,g,p,S=0){let w=new Cn(_,g),v=new ti({color:p,side:Ne,toneMapped:!1,depthTest:!1,depthWrite:!1});o.push(w,v);let E=new jt(w,v);E.position.set(f+_/2,m+g/2,S),i.add(E)}function d(f,m,_,g,p,S=14,w=l.ink,v=S>=20?"600":"400"){let E=document.createElement("canvas"),b=2;E.width=Math.max(2,Math.ceil(g*b)),E.height=Math.max(2,Math.ceil(p*b));let R=E.getContext("2d");R.scale(b,b),R.font=`${v} ${S}px system-ui, sans-serif`,R.fillStyle=w,R.textBaseline="middle";let y=[];for(let z of String(f??"").split(`
`)){let L=z.split(/\s+/),O="";for(let q of L){let X=O?O+" "+q:q;R.measureText(X).width>g-4&&O?(y.push(O),O=q):O=X}O&&y.push(O)}y.forEach((z,L)=>R.fillText(z,2,(L+.5)*S*1.25,g-4));let T=new er(E);T.colorSpace=Ue;let P=new ti({map:T,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,side:Ne}),N=new Cn(g,p);o.push(T,P,N);let F=new jt(N,P);F.scale.y=-1,F.position.set(m+g/2,_+p/2,2),i.add(F)}function h(f,m){a=[f,m],c(),s=od(f,m,e.rows.length);let _=ox(e.rows,s.panel.w,s.panel.h);s.pages=_.length,r=Math.min(Math.max(0,Number(e.page)||0),s.pages-1),t.left=0,t.right=f,t.top=0,t.bottom=m,t.updateProjectionMatrix();let g=s.panel;u(g.x,g.y,g.w,g.h,l.panel),u(g.x,g.y,1,g.h,l.line,1),d(e.title,g.x+20,g.y+14,g.w-40,30,22),d(e.subtitle,g.x+20,g.y+48,g.w-40,36,12,l.muted),u(g.x+20,g.y+84,g.w-40,1,l.line,1);let p=g.y+88;s.placed=[];for(let w of _[r]){let{row:v,h:E}=w;s.placed.push({row:v,y:p,h:E});let b=v.kind==="text",R=!b&&!v.disabled;u(g.x+14,p,g.w-28,E-6,b?l.info:v.disabled?l.disabled:v.kind==="button"?l.action:l.field,1),b||(u(g.x+14,p+E-7,g.w-28,1,l.line,1),R&&u(g.x+14,p,3,E-6,l.accent,1)),d(v.label,g.x+24,p+7,g.w-48,E-14,14,v.disabled?l.disabledInk:b?l.muted:l.ink),p+=E}let S=g.y+g.h-42;return u(g.x+14,S,g.w-28,34,l.field,1),u(g.x+g.w/2,S+7,1,20,l.line,1),d(`\u2039  Page ${r+1} / ${s.pages}  \u203A`,g.x+28,g.y+g.h-37,g.w-56,26,14,l.accent),s}return{scene:i,camera:t,set(f,m,_,g){return e={...f,rows:(f.rows||[]).map(p=>({...p}))},n=m,h(_,g)},resize(f,m){return a?.[0]===f&&a?.[1]===m?s:h(f,m)},hit(f,m){return ax(s,f,m,e.rows,r)},activate(f){if(f==="__previous"||f==="__next"){let m=Math.max(0,Math.min(s.pages-1,r+(f==="__next"?1:-1)));m!==r&&(e.page=m,n?.(f,m),r!==m&&a&&h(...a));return}f&&f!=="__panel"&&n?.(f)},get layout(){return s},dispose:c}}function lx(i,t,e){let n=new Go({antialias:!0,alpha:!1,powerPreference:"low-power"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.outputColorSpace=Ue,n.toneMapping=Sr,n.toneMappingExposure=.95,n.shadowMap.enabled=!0,n.shadowMap.type=Li,n.domElement.tabIndex=0,i.appendChild(n.domElement);let s=ld(),r=!1,a=new Rn;a.background=new Yt("#f0f3f0");let o=new ws(n),l=new qo,c=o.fromScene(l,.04);a.environment=c.texture,a.environmentIntensity=.35,l.dispose(),o.dispose(),a.add(new mr(15135231,7433055,.4));let u=new Ii(16773595,2.5);u.position.set(-5,9,6),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),Object.assign(u.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:.1,far:50}),u.shadow.normalBias=.015,u.shadow.bias=-1e-4,u.shadow.radius=3,a.add(u);let d=new Ii(15134719,.32);d.position.set(-6,5,-7),a.add(d);let h=new Fe(38,1,.01,100),f=new Zo(h,n.domElement);f.enableDamping=!1,f.enablePan=!1,f.enableRotate=!1,f.minZoom=.25,f.maxZoom=5,f.maxPolarAngle=Math.PI*.49;let m=new jt(new Cn(100,100),new fr({opacity:.27}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,a.add(m);let _=null,g=!1,p=null,S=0,w=!0,v=null,E=[7,4.5,7],b=null,R="assembled",y=.7,T=null,P=null;function N(){if(S=0,!w)return;let it=Math.max(i.clientWidth,1),dt=Math.max(i.clientHeight,1);if(n.setViewport(0,0,it,dt),n.setScissorTest(!1),n.clear(),p){let Ct=r?s.layout.model:{x:0,y:0,w:it,h:dt};n.setViewport(Ct.x,dt-Ct.y-Ct.h,Ct.w,Ct.h),n.setScissor(Ct.x,dt-Ct.y-Ct.h,Ct.w,Ct.h),n.setScissorTest(!0),n.render(a,h)}r&&(n.setScissorTest(!1),n.setViewport(0,0,it,dt),n.autoClear=!1,n.clearDepth(),n.render(s.scene,s.camera),n.autoClear=!0)}function F(){w&&!S&&(S=requestAnimationFrame(N))}f.addEventListener("change",F);function z(){let it=Math.max(i.clientWidth,1),dt=Math.max(i.clientHeight,1);if(n.setSize(it,dt,!1),r&&s.resize(it,dt),!p){F();return}let Ct=r?s.layout.model:{w:it,h:dt};R==="exploded"&&b.apply(1),m.position.y=new Te().setFromObject(p).min.y-.025,f.target.copy(ad(h,p,Ct.w/Ct.h,E)),b.apply(R==="exploded"?y:0),f.update(),P?.update(),F()}function L(){if(!p)return;a.remove(p);let it=new Set,dt=new Set,Ct=new Set;p.traverse(H=>{H.geometry&&it.add(H.geometry),H.material&&(Array.isArray(H.material)?H.material:[H.material]).forEach(J=>dt.add(J))}),it.forEach(H=>H.dispose()),dt.forEach(H=>{for(let J of Object.values(H))J?.isTexture&&Ct.add(J);H.dispose()}),Ct.forEach(H=>H.dispose()),p=null}function O(it,dt){v=[it,dt],q(),L();let Ct=Ls();if(p=new be,dt.startsWith("part:")){let ft=dt.slice(5);if(![it.current?.id,...it.owned.map(Wt=>Wt.id)].includes(ft))throw Error("Part is not visible");p.add(Ic(ft,Ct))}else p.add(dt==="configuration"?sd(it.mission,it.owned,Ct):Lc(it.mission,Ct));let H=p.children[0],J=new Te().setFromObject(H).getCenter(new C);H.position.sub(J),p.position.copy(J),b=rd(H);for(let ft of b.parts)ft.anchorLocal=p.worldToLocal(ft.center.clone());p.traverse(ft=>{ft.isMesh&&(ft.castShadow=!0,ft.receiveShadow=!0)}),a.add(p);let Mt=new Te().setFromObject(p);m.position.y=Mt.min.y-.025,h.zoom=1,E=[7,4.5,7],z();let Vt=new Set;p.traverse(ft=>{ft.material&&Vt.add(ft.material)}),Object.values(Ct).forEach(ft=>{Vt.has(ft)||ft.dispose()})}function q(){T&&(T.removeFromParent(),T.geometry.dispose(),T.material.dispose(),T=null),P&&(a.remove(P),P.geometry.dispose(),P.material.dispose(),P=null),b=null}function X(it,dt){if(!b)return;if(!["assembled","exploded","cutaway"].includes(it)||!Number.isFinite(dt)||dt<0||dt>1)throw Error("Invalid inspection view");let Ct=R!==it;if(R=it,y=dt,b.apply(R==="exploded"?y:0),p.traverse(H=>{H.isMesh&&H.name==="hull shell"&&(H.material.transparent=R==="cutaway",H.material.opacity=R==="cutaway"?.13:1,H.material.depthWrite=R!=="cutaway")}),T&&(T.removeFromParent(),T.geometry.dispose(),T.material.dispose(),T=null),R==="exploded"){let H=[];for(let J of b.parts)H.push(J.anchorLocal.clone(),p.worldToLocal(new Te().setFromObject(J.object).getCenter(new C)));T=new ds(new ve().setFromPoints(H),new bi({color:"#748879",transparent:!0,opacity:.5})),p.add(T)}P?.update(),Ct?z():F()}let st=new at,Z=new yr,j=null,Q=null;function It(it){if(!r)return null;let dt=n.domElement.getBoundingClientRect();return s.hit((it.clientX-dt.left)*i.clientWidth/dt.width,(it.clientY-dt.top)*i.clientHeight/dt.height)}n.domElement.addEventListener("pointerdown",it=>{let dt=It(it);dt&&(Q=dt,it.preventDefault(),it.stopImmediatePropagation(),n.domElement.setPointerCapture(it.pointerId))},!0),n.domElement.addEventListener("pointermove",it=>{(Q||It(it))&&(it.stopImmediatePropagation(),n.domElement.style.cursor=It(it)&&It(it)!=="__panel"?"pointer":"default")},!0),n.domElement.addEventListener("pointerup",it=>{if(Q){let dt=Q;Q=null,it.preventDefault(),it.stopImmediatePropagation(),It(it)===dt&&(s.activate(dt),z())}},!0),n.domElement.addEventListener("wheel",it=>{It(it)&&(it.preventDefault(),it.stopImmediatePropagation(),s.activate(it.deltaY>0?"__next":"__previous"),z())},{capture:!0,passive:!1}),n.domElement.addEventListener("pointerdown",it=>{j=[it.clientX,it.clientY],_=[it.clientX,it.clientY],g=!1,n.domElement.setPointerCapture(it.pointerId)}),n.domElement.addEventListener("pointermove",it=>{if(!_||!p)return;let dt=it.clientX-_[0];Math.hypot(it.clientX-j[0],it.clientY-j[1])>4&&(g=!0,p.rotation.y+=dt*.009,p.updateWorldMatrix(!0,!0),P?.update(),z()),_=[it.clientX,it.clientY]}),n.domElement.addEventListener("pointercancel",()=>{_=null,j=null,Q=null}),n.domElement.addEventListener("pointerup",it=>{if(_=null,g||!j||Math.hypot(it.clientX-j[0],it.clientY-j[1])>5){j=null;return}if(j=null,!p||!w)return;let dt=n.domElement.getBoundingClientRect(),Ct=r?s.layout.model:{x:0,y:0,w:i.clientWidth,h:i.clientHeight};st.set(((it.clientX-dt.left)*i.clientWidth/dt.width-Ct.x)/Ct.w*2-1,1-((it.clientY-dt.top)*i.clientHeight/dt.height-Ct.y)/Ct.h*2),Z.setFromCamera(st,h);for(let H of Z.intersectObject(p,!0)){let J=H.object;for(;J&&!J.userData.mountedCard;)J=J.parent;if(J?.userData.mountedCard){e?.(J.userData.mountedCard);break}}});let At=new ResizeObserver(z);return At.observe(i),n.domElement.addEventListener("webglcontextlost",it=>{it.preventDefault(),w=!1,S&&cancelAnimationFrame(S),S=0,t()}),n.domElement.addEventListener("webglcontextrestored",()=>{w=!0,v&&(O(...v),i.dispatchEvent(new Event("sea3drestored")))}),{update:O,inspect:X,interface(it,dt){r=!0;let Ct=s.set(it,dt,Math.max(i.clientWidth,1),Math.max(i.clientHeight,1));return z(),Ct},shadows(it){n.shadowMap.enabled=!!it,m.visible=!!it,F()},parts(){return b?.parts.map(it=>it.key)||[]},focus(it){let dt=b?.parts.find(Ct=>Ct.key===it);dt&&(P&&(a.remove(P),P.geometry.dispose(),P.material.dispose()),P=new vr(dt.object,14001476),a.add(P),F())},view(it){p&&(p.rotation.y=0),E=it==="rear"?[-7,4.5,-7]:it==="front"?[7,2.7,0]:[7,4.5,7],h.zoom=1,z()},dispose(){w=!1,At.disconnect(),f.dispose(),s.dispose(),q(),L(),m.geometry.dispose(),m.material.dispose(),c.dispose(),n.dispose(),S&&cancelAnimationFrame(S),n.domElement.remove()}}}return Md(cx);})();
