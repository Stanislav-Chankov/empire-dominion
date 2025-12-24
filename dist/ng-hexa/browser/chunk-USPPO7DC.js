import{A as Gc,B as Wc,C as Xc,a as Fc,m as Qt,n as Ji,o as Uc,u as Oc,v as Bc,w as kc,x as zc,y as Vc,z as Hc}from"./chunk-OI5VUCAE.js";import{$a as Bn,Aa as tt,Ba as ni,Ca as Un,Da as vt,Ea as yt,Fa as ot,Ga as J,Ha as Z,Ia as _t,Ja as Re,Ka as Ie,La as Xi,Ma as qi,Na as Is,Oa as mt,Pa as On,Q as ei,Qa as qe,Ra as Lc,Sa as Qa,T as Ka,Ta as Ps,Ua as Yi,Va as Zi,Wa as yi,Xa as Ut,Y as nn,Ya as q,Z as rn,Za as De,_a as Rt,a as Fn,aa as Pc,ab as Dc,b as Gi,bb as Nc,ca as Rs,db as bi,eb as Mi,kb as Ls,lb as $i,ma as Wi,na as z,p as Ic,pa as Bt,qa as pt,ra as ti,vb as ja,ya as Tn,za as et}from"./chunk-5A2YSUWG.js";var xh=0,Il=1,vh=2;var ms=1,yh=2,wr=3,Zn=0,Zt=1,Rn=2,In=0,Ai=1,Pl=2,Ll=3,Dl=4,bh=5,ci=100,Mh=101,Sh=102,wh=103,Eh=104,Th=200,Ch=201,Ah=202,Rh=203,io=204,ro=205,Ih=206,Ph=207,Lh=208,Dh=209,Nh=210,Fh=211,Uh=212,Oh=213,Bh=214,Io=0,Po=1,Lo=2,Ri=3,Do=4,No=5,Fo=6,Uo=7,Nl=0,kh=1,zh=2,Mn=0,Fl=1,Ul=2,Ol=3,Bl=4,kl=5,zl=6,Vl=7;var Sl=300,pi=301,Fi=302,Oo=303,Bo=304,gs=306,so=1e3,Cn=1001,oo=1002,Ft=1003,Vh=1004;var _s=1005;var Et=1006,ko=1007;var mi=1008;var hn=1009,Hl=1010,Gl=1011,Er=1012,zo=1013,Sn=1014,wn=1015,Pn=1016,Vo=1017,Ho=1018,Tr=1020,Wl=35902,Xl=35899,ql=1021,Yl=1022,mn=1023,An=1026,gi=1027,Zl=1028,Go=1029,Ui=1030,Wo=1031;var Xo=1033,xs=33776,vs=33777,ys=33778,bs=33779,qo=35840,Yo=35841,Zo=35842,$o=35843,Jo=36196,Ko=37492,Qo=37496,jo=37488,ea=37489,ta=37490,na=37491,ia=37808,ra=37809,sa=37810,oa=37811,aa=37812,la=37813,ca=37814,ha=37815,da=37816,ua=37817,fa=37818,pa=37819,ma=37820,ga=37821,_a=36492,xa=36494,va=36495,ya=36283,ba=36284,Ma=36285,Sa=36286;var Xr=2300,ao=2301,no=2302,wl=2400,El=2401,Tl=2402;var Hh=3200;var Gh=0,Wh=1,Qn="",Vt="srgb",Ii="srgb-linear",qr="linear",nt="srgb";var Ci=7680;var Cl=519,Xh=512,qh=513,Yh=514,wa=515,Zh=516,$h=517,Ea=518,Jh=519,lo=35044;var $l="300 es",bn=2e3,Yr=2001;function Jl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kh(){let i=Zr("canvas");return i.style.display="block",i}var qc={},pr=null;function $r(...i){let e="THREE."+i.shift();pr?pr("log",e,...i):console.log(e,...i)}function Le(...i){let e="THREE."+i.shift();pr?pr("warn",e,...i):console.warn(e,...i)}function Pe(...i){let e="THREE."+i.shift();pr?pr("error",e,...i):console.error(e,...i)}function mr(...i){let e=i.join(" ");e in qc||(qc[e]=!0,Le(...i))}function Qh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var $n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=1234567,Gr=Math.PI/180,gr=180/Math.PI;function qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Kl(i,e){return(i%e+e)%e}function qd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Yd(i,e,t){return i!==e?(t-i)/(e-i):0}function Wr(i,e,t){return(1-t)*i+t*e}function Zd(i,e,t,n){return Wr(i,e,1-Math.exp(-t*n))}function $d(i,e=1){return e-Math.abs(Kl(i,e*2)-e)}function Jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jd(i,e){return i+Math.random()*(e-i)}function eu(i){return i*(.5-Math.random())}function tu(i){i!==void 0&&(Yc=i);let e=Yc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nu(i){return i*Gr}function iu(i){return i*gr}function ru(i){return(i&i-1)===0&&i!==0}function su(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ou(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function au(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),_=o((n-e)/2);switch(r){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*h,a*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ql={DEG2RAD:Gr,RAD2DEG:gr,generateUUID:qn,clamp:Ye,euclideanModulo:Kl,mapLinear:qd,inverseLerp:Yd,lerp:Wr,damp:Zd,pingpong:$d,smoothstep:Jd,smootherstep:Kd,randInt:Qd,randFloat:jd,randFloatSpread:eu,seededRandom:tu,degToRad:nu,radToDeg:iu,isPowerOfTwo:ru,ceilPowerOfTwo:su,floorPowerOfTwo:ou,setQuaternionFromProperEuler:au,normalize:at,denormalize:yn},Oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3],f=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==f||c!==p||h!==_){let m=l*f+c*p+h*_+d*v;m<0&&(f=-f,p=-p,_=-_,v=-v,m=-m);let u=1-a;if(m<.9995){let S=Math.acos(m),E=Math.sin(S);u=Math.sin(u*S)/E,a=Math.sin(a*S)/E,l=l*u+f*a,c=c*u+p*a,h=h*u+_*a,d=d*u+v*a}else{l=l*u+f*a,c=c*u+p*a,h=h*u+_*a,d=d*u+v*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+h*d+l*p-c*f,e[t+1]=l*_+h*f+c*d-a*p,e[t+2]=c*_+h*p+a*f-l*d,e[t+3]=h*_-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),f=l(n/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"YZX":this._x=f*h*d+c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d-f*p*_;break;case"XZY":this._x=f*h*d-c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d+f*p*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new N,Zc=new Jn,Be=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],_=n[8],v=r[0],m=r[3],u=r[6],S=r[1],E=r[4],w=r[7],T=r[2],A=r[5],R=r[8];return s[0]=o*v+a*S+l*T,s[3]=o*m+a*E+l*A,s[6]=o*u+a*w+l*R,s[1]=c*v+h*S+d*T,s[4]=c*m+h*E+d*A,s[7]=c*u+h*w+d*R,s[2]=f*v+p*S+_*T,s[5]=f*m+p*E+_*A,s[8]=f*u+p*w+_*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,p=c*s-o*l,_=t*d+n*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=d*v,e[1]=(r*c-h*n)*v,e[2]=(a*n-r*o)*v,e[3]=f*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},tl=new Be,$c=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lu(){let i={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?qr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ii]:{primaries:e,whitePoint:n,transfer:qr,toXYZ:$c,fromXYZ:Jc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:$c,fromXYZ:Jc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}var $e=lu();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ki,co=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=Zr("canvas")),Ki.width=e.width,Ki.height=e.height;let r=Ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cu=0,_r=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nl(r[o].image)):s.push(nl(r[o]))}else s=nl(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var hu=0,il=new N,$t=(()=>{class i extends $n{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Cn,s=Cn,o=Et,a=mi,l=mn,c=hn,h=i.DEFAULT_ANISOTROPY,d=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=qn(),this.name="",this.source=new _r(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case so:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case so:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=Sl,i.DEFAULT_ANISOTROPY=1,i})(),Tt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,w=(p+1)/2,T=(u+1)/2,A=(h+f)/4,R=(d+v)/4,O=(_+m)/4;return E>w&&E>T?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=A/n,s=R/n):w>T?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=A/r,s=O/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=R/s,r=O/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-v)/S,this.z=(f-h)/S,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ho=class extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new $t(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new _r(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends ho{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jr=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var uo=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox)),Ds.applyMatrix4(e.matrixWorld),this.union(Ds)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Ns.subVectors(this.max,Fr),Qi.subVectors(e.a,Fr),ji.subVectors(e.b,Fr),er.subVectors(e.c,Fr),ii.subVectors(ji,Qi),ri.subVectors(er,ji),Si.subVectors(Qi,er);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Si.z,Si.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Si.z,0,-Si.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Si.y,Si.x,0];return!rl(t,Qi,ji,er,Ns)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,Qi,ji,er,Ns))?!1:(Fs.crossVectors(ii,ri),t=[Fs.x,Fs.y,Fs.z],rl(t,Qi,ji,er,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kn=[new N,new N,new N,new N,new N,new N,new N,new N],_n=new N,Ds=new hi,Qi=new N,ji=new N,er=new N,ii=new N,ri=new N,Si=new N,Fr=new N,Ns=new N,Fs=new N,wi=new N;function rl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wi.fromArray(i,s);let a=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var du=new hi,Ur=new N,sl=new N,Pi=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):du.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ur,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(sl)),this.expandByPoint(Ur.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zn=new N,ol=new N,Us=new N,si=new N,al=new N,Os=new N,ll=new N,xr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ol.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ol);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Us),a=si.dot(this.direction),l=-si.dot(Us),c=si.lengthSq(),h=Math.abs(1-o*o),d,f,p,_;if(h>0)if(d=o*l-a,f=o*a-l,_=s*h,d>=0)if(f>=-_)if(f<=_){let v=1/h;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ol).addScaledVector(Us,f),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);let n=zn.dot(this.direction),r=zn.dot(zn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,r,s){al.subVectors(t,e),Os.subVectors(n,e),ll.crossVectors(al,Os);let o=this.direction.dot(ll),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);let l=a*this.direction.dot(Os.crossVectors(si,Os));if(l<0)return null;let c=a*this.direction.dot(al.cross(si));if(c<0||l+c>o)return null;let h=-a*si.dot(ll);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class i{constructor(e,t,n,r,s,o,a,l,c,h,d,f,p,_,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,d,f,p,_,v,m)}set(e,t,n,r,s,o,a,l,c,h,d,f,p,_,v,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),s=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*h,p=o*d,_=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,_=c*h,v=c*d;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,_=c*h,v=c*d;t[0]=f-v*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*d,_=a*h,v=a*d;t[0]=l*h,t[4]=_*c-p,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=v-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*d+_,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=o*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uu,e,fu)}lookAt(e,t,n){let r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),oi.crossVectors(n,sn),oi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),oi.crossVectors(n,sn)),oi.normalize(),Bs.crossVectors(sn,oi),r[0]=oi.x,r[4]=Bs.x,r[8]=sn.x,r[1]=oi.y,r[5]=Bs.y,r[9]=sn.y,r[2]=oi.z,r[6]=Bs.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],_=n[2],v=n[6],m=n[10],u=n[14],S=n[3],E=n[7],w=n[11],T=n[15],A=r[0],R=r[4],O=r[8],y=r[12],b=r[1],P=r[5],H=r[9],V=r[13],K=r[2],Y=r[6],W=r[10],k=r[14],ee=r[3],pe=r[7],he=r[11],me=r[15];return s[0]=o*A+a*b+l*K+c*ee,s[4]=o*R+a*P+l*Y+c*pe,s[8]=o*O+a*H+l*W+c*he,s[12]=o*y+a*V+l*k+c*me,s[1]=h*A+d*b+f*K+p*ee,s[5]=h*R+d*P+f*Y+p*pe,s[9]=h*O+d*H+f*W+p*he,s[13]=h*y+d*V+f*k+p*me,s[2]=_*A+v*b+m*K+u*ee,s[6]=_*R+v*P+m*Y+u*pe,s[10]=_*O+v*H+m*W+u*he,s[14]=_*y+v*V+m*k+u*me,s[3]=S*A+E*b+w*K+T*ee,s[7]=S*R+E*P+w*Y+T*pe,s[11]=S*O+E*H+w*W+T*he,s[15]=S*y+E*V+w*k+T*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],v=e[7],m=e[11],u=e[15],S=l*p-c*f,E=a*p-c*d,w=a*f-l*d,T=o*p-c*h,A=o*f-l*h,R=o*d-a*h;return t*(v*S-m*E+u*w)-n*(_*S-m*T+u*A)+r*(_*E-v*T+u*R)-s*(_*w-v*A+m*R)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],v=e[13],m=e[14],u=e[15],S=d*m*c-v*f*c+v*l*p-a*m*p-d*l*u+a*f*u,E=_*f*c-h*m*c-_*l*p+o*m*p+h*l*u-o*f*u,w=h*v*c-_*d*c+_*a*p-o*v*p-h*a*u+o*d*u,T=_*d*l-h*v*l-_*a*f+o*v*f+h*a*m-o*d*m,A=t*S+n*E+r*w+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=S*R,e[1]=(v*f*s-d*m*s-v*r*p+n*m*p+d*r*u-n*f*u)*R,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*u+n*l*u)*R,e[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*p-n*l*p)*R,e[4]=E*R,e[5]=(h*m*s-_*f*s+_*r*p-t*m*p-h*r*u+t*f*u)*R,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*u-t*l*u)*R,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*p+t*l*p)*R,e[8]=w*R,e[9]=(_*d*s-h*v*s-_*n*p+t*v*p+h*n*u-t*d*u)*R,e[10]=(o*v*s-_*a*s+_*n*c-t*v*c-o*n*u+t*a*u)*R,e[11]=(h*a*s-o*d*s-h*n*c+t*d*c+o*n*p-t*a*p)*R,e[12]=T*R,e[13]=(h*v*r-_*d*r+_*n*f-t*v*f-h*n*m+t*d*m)*R,e[14]=(_*a*r-o*v*r-_*n*l+t*v*l+o*n*m-t*a*m)*R,e[15]=(o*d*r-h*a*r+h*n*l-t*d*l-o*n*f+t*a*f)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,p=s*h,_=s*d,v=o*h,m=o*d,u=a*d,S=l*c,E=l*h,w=l*d,T=n.x,A=n.y,R=n.z;return r[0]=(1-(v+u))*T,r[1]=(p+w)*T,r[2]=(_-E)*T,r[3]=0,r[4]=(p-w)*A,r[5]=(1-(f+u))*A,r[6]=(m+S)*A,r[7]=0,r[8]=(_+E)*R,r[9]=(m-S)*R,r[10]=(1-(f+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=tr.set(r[0],r[1],r[2]).length(),o=tr.set(r[4],r[5],r[6]).length(),a=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),xn.copy(this);let c=1/s,h=1/o,d=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,t.setFromRotationMatrix(xn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=bn,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r),_,v;if(l)_=s/(o-s),v=o*s/(o-s);else if(a===bn)_=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Yr)_=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=bn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r),_,v;if(l)_=1/(o-s),v=o/(o-s);else if(a===bn)_=-2/(o-s),v=-(o+s)/(o-s);else if(a===Yr)_=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tr=new N,xn=new bt,uu=new N(0,0,0),fu=new N(1,1,1),oi=new N,Bs=new N,sn=new N,Kc=new bt,Qc=new Jn,Li=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],h=s[5],d=s[9],f=s[2],p=s[6],_=s[10];switch(n){case"XYZ":this._y=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,_),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pu=0,jc=new N,nr=new Jn,Vn=new bt,ks=new N,Or=new N,mu=new N,gu=new Jn,eh=new N(1,0,0),th=new N(0,1,0),nh=new N(0,0,1),ih={type:"added"},_u={type:"removed"},ir={type:"childadded",child:null},cl={type:"childremoved",child:null},jn=(()=>{class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,n=new Li,r=new Jn,s=new N(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Be}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return nr.setFromAxisAngle(t,n),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,n){return nr.setFromAxisAngle(t,n),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(th,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,n){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(th,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?ks.copy(t):ks.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Or,ks,this.up):Vn.lookAt(ks,Or,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Vn),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Pe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),ir.child=t,this.dispatchEvent(ir),ir.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(_u),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,mu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>Gi(Fn({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>Fn({},l)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){let f=c[h];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),f=a(t.shapes),p=a(t.skeletons),_=a(t.animations),v=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),h.length>0&&(r.textures=h),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),p.length>0&&(r.skeletons=p),_.length>0&&(r.animations=_),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(l){let c=[];for(let h in l){let d=l[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new N(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),vn=new N,Hn=new N,hl=new N,Gn=new N,rr=new N,sr=new N,rh=new N,dl=new N,ul=new N,fl=new N,pl=new Tt,ml=new Tt,gl=new Tt,Wn=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){vn.subVectors(r,t),Hn.subVectors(n,t),hl.subVectors(e,t);let o=vn.dot(vn),a=vn.dot(Hn),l=vn.dot(hl),c=Hn.dot(Hn),h=Hn.dot(hl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(c*l-a*h)*f,_=(o*h-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(pl,s.x),o.addScaledVector(ml,s.y),o.addScaledVector(gl,s.z),o}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),Hn.subVectors(e,t),vn.cross(Hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),vn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;rr.subVectors(r,n),sr.subVectors(s,n),dl.subVectors(e,n);let l=rr.dot(dl),c=sr.dot(dl);if(l<=0&&c<=0)return t.copy(n);ul.subVectors(e,r);let h=rr.dot(ul),d=sr.dot(ul);if(h>=0&&d<=h)return t.copy(r);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(rr,o);fl.subVectors(e,s);let p=rr.dot(fl),_=sr.dot(fl);if(_>=0&&p<=_)return t.copy(s);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(sr,a);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return rh.subVectors(s,r),a=(d-h)/(d-h+(p-_)),t.copy(r).addScaledVector(rh,a);let u=1/(m+v+f);return o=v*u,a=f*u,t.copy(n).addScaledVector(rr,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},zs={h:0,s:0,l:0};function _l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=Kl(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=_l(o,s,e+1/3),this.g=_l(o,s,e),this.b=_l(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return $e.workingToColorSpace(zt.copy(this),e),Math.round(Ye(zt.r*255,0,255))*65536+Math.round(Ye(zt.g*255,0,255))*256+Math.round(Ye(zt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(zt.copy(this),t);let n=zt.r,r=zt.g,s=zt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Vt){$e.workingToColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,r=zt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(zs);let n=Wr(ai.h,zs.h,t),r=Wr(ai.s,zs.s,t),s=Wr(ai.l,zs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Ze;Ze.NAMES=jh;var xu=0,Kn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Ai,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=ro,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kr=class extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var It=new N,Vs=new Oe,vu=0,Ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lo,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lo&&(e.usage=this.usage),e}};var Qr=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var jr=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var jt=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},yu=0,un=new bt,xl=new jn,or=new N,on=new hi,Br=new hi,Nt=new N,Yt=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jl(e)?jr:Qr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(on.min,Br.min),on.expandByPoint(Nt),Nt.addVectors(on.max,Br.max),on.expandByPoint(Nt)):(on.expandByPoint(Br.min),on.expandByPoint(Br.max))}on.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),Nt.add(or)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new N,l[O]=new N;let c=new N,h=new N,d=new N,f=new Oe,p=new Oe,_=new Oe,v=new N,m=new N;function u(O,y,b){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,b),f.fromBufferAttribute(s,O),p.fromBufferAttribute(s,y),_.fromBufferAttribute(s,b),h.sub(c),d.sub(c),p.sub(f),_.sub(f);let P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(P),a[O].add(v),a[y].add(v),a[b].add(v),l[O].add(m),l[y].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,y=S.length;O<y;++O){let b=S[O],P=b.start,H=b.count;for(let V=P,K=P+H;V<K;V+=3)u(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let E=new N,w=new N,T=new N,A=new N;function R(O){T.fromBufferAttribute(r,O),A.copy(T);let y=a[O];E.copy(y),E.sub(T.multiplyScalar(T.dot(y))).normalize(),w.crossVectors(A,y);let P=w.dot(l[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,P)}for(let O=0,y=S.length;O<y;++O){let b=S[O],P=b.start,H=b.count;for(let V=P,K=P+H;V<K;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){let _=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let u=0;u<h;u++)f[_++]=c[p++]}return new Ot(f,h,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sh=new bt,Ei=new xr,Hs=new Pi,oh=new N,Gs=new N,Ws=new N,Xs=new N,vl=new N,qs=new N,ah=new N,Ys=new N,pn=class extends jn{constructor(e=new Yt,t=new Kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){qs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(vl.fromBufferAttribute(d,e),o?qs.addScaledVector(vl,h):qs.addScaledVector(vl.sub(t),h))}t.add(qs)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),Ei.copy(e.ray).recast(e.near),!(Hs.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Hs,oh)===null||Ei.origin.distanceToSquared(oh)>(e.far-e.near)**2))&&(sh.copy(s).invert(),Ei.copy(e.ray).applyMatrix4(sh),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let m=f[_],u=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=S,T=E;w<T;w+=3){let A=a.getX(w),R=a.getX(w+1),O=a.getX(w+2);r=Zs(this,u,e,n,c,h,d,A,R,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){let S=a.getX(m),E=a.getX(m+1),w=a.getX(m+2);r=Zs(this,o,e,n,c,h,d,S,E,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let m=f[_],u=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=S,T=E;w<T;w+=3){let A=w,R=w+1,O=w+2;r=Zs(this,u,e,n,c,h,d,A,R,O),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){let S=m,E=m+1,w=m+2;r=Zs(this,o,e,n,c,h,d,S,E,w),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function bu(i,e,t,n,r,s,o,a){let l;if(e.side===Zt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Zn,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:i}}function Zs(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Gs),i.getVertexPosition(l,Ws),i.getVertexPosition(c,Xs);let h=bu(i,e,t,n,Gs,Ws,Xs,ah);if(h){let d=new N;Wn.getBarycoord(ah,Gs,Ws,Xs,d),r&&(h.uv=Wn.getInterpolatedAttribute(r,a,l,c,d,new Oe)),s&&(h.uv1=Wn.getInterpolatedAttribute(s,a,l,c,d,new Oe)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};Wn.getNormal(Gs,Ws,Xs,f.normal),h.face=f,h.barycoord=d}return h}var yr=class i extends Yt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function _(v,m,u,S,E,w,T,A,R,O,y){let b=w/R,P=T/O,H=w/2,V=T/2,K=A/2,Y=R+1,W=O+1,k=0,ee=0,pe=new N;for(let he=0;he<W;he++){let me=he*P-V;for(let We=0;We<Y;We++){let Ve=We*b-H;pe[v]=Ve*S,pe[m]=me*E,pe[u]=K,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[m]=0,pe[u]=A>0?1:-1,h.push(pe.x,pe.y,pe.z),d.push(We/R),d.push(1-he/O),k+=1}}for(let he=0;he<O;he++)for(let me=0;me<R;me++){let We=f+me+Y*he,Ve=f+me+Y*(he+1),xt=f+(me+1)+Y*(he+1),gt=f+(me+1)+Y*he;l.push(We,Ve,gt),l.push(Ve,xt,gt),ee+=6}a.addGroup(p,ee,y),p+=ee,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){let e={};for(let t=0;t<i.length;t++){let n=Oi(i[t]);for(let r in n)e[r]=n[r]}return e}function Mu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var ed={clone:Oi,merge:Gt},Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=Mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},es=class extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new N,lh=new Oe,ch=new Oe,Ht=class extends es{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,lh,ch),t.subVectors(ch,lh)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ar=-90,lr=1,fo=class extends jn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ht(ar,lr,e,t);r.layers=this.layers,this.add(r);let s=new Ht(ar,lr,e,t);s.layers=this.layers,this.add(s);let o=new Ht(ar,lr,e,t);o.layers=this.layers,this.add(o);let a=new Ht(ar,lr,e,t);a.layers=this.layers,this.add(a);let l=new Ht(ar,lr,e,t);l.layers=this.layers,this.add(l);let c=new Ht(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ts=class extends $t{constructor(e=[],t=pi,n,r,s,o,a,l,c,h){super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ns=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ts(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yr(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:In});s.uniforms.tEquirect.value=t;let o=new pn(r,s),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=Et),new fo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Xn=class extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Eu={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Eu)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var is=class extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},po=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lo,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qt=new N,rs=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Mr=class extends Kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cr,kr=new N,hr=new N,dr=new N,ur=new Oe,zr=new Oe,td=new bt,$s=new N,Vr=new N,Js=new N,hh=new Oe,yl=new Oe,dh=new Oe,ss=class extends jn{constructor(e=new Mr){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new Yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new po(t,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new rs(n,3,0,!1)),cr.setAttribute("uv",new rs(n,2,3,!1))}this.geometry=cr,this.material=e,this.center=new Oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Pe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),td.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-dr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;Ks($s.set(-.5,-.5,0),dr,o,hr,r,s),Ks(Vr.set(.5,-.5,0),dr,o,hr,r,s),Ks(Js.set(.5,.5,0),dr,o,hr,r,s),hh.set(0,0),yl.set(1,0),dh.set(1,1);let a=e.ray.intersectTriangle($s,Vr,Js,!1,kr);if(a===null&&(Ks(Vr.set(-.5,.5,0),dr,o,hr,r,s),yl.set(0,1),a=e.ray.intersectTriangle($s,Js,Vr,!1,kr),a===null))return;let l=e.ray.origin.distanceTo(kr);l<e.near||l>e.far||t.push({distance:l,point:kr.clone(),uv:Wn.getInterpolation(kr,$s,Vr,Js,hh,yl,dh,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ks(i,e,t,n,r,s){ur.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(zr.x=s*ur.x-r*ur.y,zr.y=r*ur.x+s*ur.y):zr.copy(ur),i.copy(e),i.x+=zr.x,i.y+=zr.y,i.applyMatrix4(td)}var mo=class extends $t{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Ft,h=Ft,d,f){super(null,o,a,l,c,h,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bl=new N,Tu=new N,Cu=new Be,fn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=bl.subVectors(n,t).cross(Tu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cu.getNormalMatrix(e),r=this.coplanarPoint(bl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new Pi,Au=new Oe(.5,.5),Qs=new N,os=class{constructor(e=new fn,t=new fn,n=new fn,r=new fn,s=new fn,o=new fn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],p=s[7],_=s[8],v=s[9],m=s[10],u=s[11],S=s[12],E=s[13],w=s[14],T=s[15];if(r[0].setComponents(c-o,p-h,u-_,T-S).normalize(),r[1].setComponents(c+o,p+h,u+_,T+S).normalize(),r[2].setComponents(c+a,p+d,u+v,T+E).normalize(),r[3].setComponents(c-a,p-d,u-v,T-E).normalize(),n)r[4].setComponents(l,f,m,w).normalize(),r[5].setComponents(c-l,p-f,u-m,T-w).normalize();else if(r[4].setComponents(c-l,p-f,u-m,T-w).normalize(),t===bn)r[5].setComponents(c+l,p+f,u+m,T+w).normalize();else if(t===Yr)r[5].setComponents(l,f,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=Au.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Qs.x=r.normal.x>0?e.max.x:e.min.x,Qs.y=r.normal.y>0?e.max.y:e.min.y,Qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Di=class extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},go=new N,_o=new N,uh=new bt,Hr=new xr,js=new Pi,Ml=new N,fh=new N,as=class extends jn{constructor(e=new Yt,t=new Di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)go.fromBufferAttribute(t,r-1),_o.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=go.distanceTo(_o);e.setAttribute("lineDistance",new jt(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),js.radius+=s,e.ray.intersectsSphere(js)===!1)return;uh.copy(r).invert(),Hr.copy(e.ray).applyMatrix4(uh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){let u=h.getX(v),S=h.getX(v+1),E=eo(this,e,Hr,l,u,S,v);E&&t.push(E)}if(this.isLineLoop){let v=h.getX(_-1),m=h.getX(p),u=eo(this,e,Hr,l,v,m,_-1);u&&t.push(u)}}else{let p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){let u=eo(this,e,Hr,l,v,v+1,v);u&&t.push(u)}if(this.isLineLoop){let v=eo(this,e,Hr,l,_-1,p,_-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function eo(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(go.fromBufferAttribute(a,r),_o.fromBufferAttribute(a,s),t.distanceSqToSegment(go,_o,Ml,fh)>n)return;Ml.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ml);if(!(c<e.near||c>e.far))return{distance:c,point:fh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ph=new N,mh=new N,ls=class extends as{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ph.fromBufferAttribute(t,r),mh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ph.distanceTo(mh);e.setAttribute("lineDistance",new jt(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},cs=class extends as{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}};var Sr=class extends $t{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},di=class extends $t{constructor(e,t,n=Sn,r,s,o,a=Ft,l=Ft,c,h=An,d=1){if(h!==An&&h!==gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xo=class extends di{constructor(e,t=Sn,n=pi,r,s,o=Ft,a=Ft,l,c=An){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},hs=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ds=class i extends Yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=t/l,p=[],_=[],v=[],m=[];for(let u=0;u<h;u++){let S=u*f-o;for(let E=0;E<c;E++){let w=E*d-s;_.push(w,-S,0),v.push(0,0,1),m.push(E/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<a;S++){let E=S+c*u,w=S+c*(u+1),T=S+1+c*(u+1),A=S+1+c*u;p.push(E,w,A),p.push(w,T,A)}this.setIndex(p),this.setAttribute("position",new jt(_,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var vo=class extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var yo=class extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bo=class extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function to(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Ni=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mo=class extends Ni{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case El:s=e,a=2*t-n;break;case Tl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case El:o=e,l=2*n-t;break;case Tl:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(r-t),v=_*_,m=v*_,u=-f*m+2*f*v-f*_,S=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*_+1,E=(-1-p)*m+(1.5+p)*v+.5*_,w=p*m-p*v;for(let T=0;T!==a;++T)s[T]=u*o[h+T]+S*o[c+T]+E*o[l+T]+w*o[d+T];return s}},So=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(r-t),d=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*h;return s}},wo=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},cn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case no:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return no}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Pe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Pe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Xd(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Pe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===no,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){let v=t[d+_];if(v!==t[f+_]||v!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=ao;var ui=class extends cn{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Xr;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends cn{constructor(e,t,n,r){super(e,t,n,r)}};Eo.prototype.ValueTypeName="color";var To=class extends cn{constructor(e,t,n,r){super(e,t,n,r)}};To.prototype.ValueTypeName="number";var Co=class extends Ni{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let h=c+a;c!==h;c+=4)Jn.slerpFlat(s,0,o,c-a,o,c,l);return s}},us=class extends cn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}};us.prototype.ValueTypeName="quaternion";us.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends cn{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Xr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends cn{constructor(e,t,n,r){super(e,t,n,r)}};Ao.prototype.ValueTypeName="vector";var fs=class extends es{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Ro=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ec="\\[\\]\\.:\\/",Ru=new RegExp("["+ec+"]","g"),tc="[^"+ec+"]",Iu="[^"+ec.replace("\\.","")+"]",Pu=/((?:WC+[\/:])*)/.source.replace("WC",tc),Lu=/(WCOD+)?/.source.replace("WCOD",Iu),Du=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tc),Nu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tc),Fu=new RegExp("^"+Pu+Lu+Du+Nu+"$"),Uu=["material","materials","bones","map"],Al=class{constructor(e,t,n){let r=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ru,"")}static parseTrackName(t){let n=Fu.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);Uu.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=n.objectIndex;switch(r){case"materials":if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(h!==void 0){if(t[h]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=n.nodeName;Pe("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=Al,i})();wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nx=new Float32Array(1);var gh=new bt,ps=class{constructor(e,t,n=0,r=1/0){this.ray=new xr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(e,t=!0,n=[]){return Rl(e,this,n,t),n.sort(_h),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Rl(e[r],this,n,t);return n.sort(_h),n}};function _h(i,e){return i.distance-e.distance}function Rl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Rl(s[o],e,t,!0)}}function nc(i,e,t,n){let r=Ou(n);switch(t){case ql:return i*e;case Zl:return i*e/r.components*r.byteLength;case Go:return i*e/r.components*r.byteLength;case Ui:return i*e*2/r.components*r.byteLength;case Wo:return i*e*2/r.components*r.byteLength;case Yl:return i*e*3/r.components*r.byteLength;case mn:return i*e*4/r.components*r.byteLength;case Xo:return i*e*4/r.components*r.byteLength;case xs:case vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ys:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yo:case $o:return Math.max(i,16)*Math.max(e,8)/4;case qo:case Zo:return Math.max(i,8)*Math.max(e,8)/2;case Jo:case Ko:case jo:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qo:case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _a:case xa:case va:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ya:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ou(i){switch(i){case hn:case Hl:return{byteLength:1,components:1};case Er:case Gl:case Pn:return{byteLength:2,components:1};case Vo:case Ho:return{byteLength:2,components:4};case Sn:case zo:case wn:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function wd(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ku(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vu=`#ifdef USE_ALPHAHASH
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
#endif`,Hu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qu=`#ifdef USE_AOMAP
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
#endif`,Yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zu=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ju=`#ifdef USE_IRIDESCENCE
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
#endif`,ef=`#ifdef USE_BUMPMAP
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hf=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
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
}`,Rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Df=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bf=`PhysicalMaterial material;
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
#endif`,kf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,zf=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jf=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cp=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Ep=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`#include <common>
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
}`,Yp=`#if DEPTH_PACKING == 3200
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
}`,Zp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
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
void main () {
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
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
}`,jp=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#define LAMBERT
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
}`,im=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,rm=`#define MATCAP
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
}`,sm=`#define MATCAP
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
}`,om=`#define NORMAL
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
}`,am=`#define NORMAL
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
}`,lm=`#define PHONG
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
}`,cm=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,hm=`#define STANDARD
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
}`,dm=`#define STANDARD
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
}`,um=`#define TOON
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
}`,fm=`#define TOON
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
}`,pm=`uniform float size;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,vm=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:zu,alphahash_pars_fragment:Vu,alphamap_fragment:Hu,alphamap_pars_fragment:Gu,alphatest_fragment:Wu,alphatest_pars_fragment:Xu,aomap_fragment:qu,aomap_pars_fragment:Yu,batching_pars_vertex:Zu,batching_vertex:$u,begin_vertex:Ju,beginnormal_vertex:Ku,bsdfs:Qu,iridescence_fragment:ju,bumpmap_pars_fragment:ef,clipping_planes_fragment:tf,clipping_planes_pars_fragment:nf,clipping_planes_pars_vertex:rf,clipping_planes_vertex:sf,color_fragment:of,color_pars_fragment:af,color_pars_vertex:lf,color_vertex:cf,common:hf,cube_uv_reflection_fragment:df,defaultnormal_vertex:uf,displacementmap_pars_vertex:ff,displacementmap_vertex:pf,emissivemap_fragment:mf,emissivemap_pars_fragment:gf,colorspace_fragment:_f,colorspace_pars_fragment:xf,envmap_fragment:vf,envmap_common_pars_fragment:yf,envmap_pars_fragment:bf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:Df,envmap_vertex:Sf,fog_vertex:wf,fog_pars_vertex:Ef,fog_fragment:Tf,fog_pars_fragment:Cf,gradientmap_pars_fragment:Af,lightmap_pars_fragment:Rf,lights_lambert_fragment:If,lights_lambert_pars_fragment:Pf,lights_pars_begin:Lf,lights_toon_fragment:Nf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Uf,lights_phong_pars_fragment:Of,lights_physical_fragment:Bf,lights_physical_pars_fragment:kf,lights_fragment_begin:zf,lights_fragment_maps:Vf,lights_fragment_end:Hf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Wf,logdepthbuf_pars_vertex:Xf,logdepthbuf_vertex:qf,map_fragment:Yf,map_pars_fragment:Zf,map_particle_fragment:$f,map_particle_pars_fragment:Jf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Qf,morphinstance_vertex:jf,morphcolor_vertex:ep,morphnormal_vertex:tp,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:rp,normal_fragment_maps:sp,normal_pars_fragment:op,normal_pars_vertex:ap,normal_vertex:lp,normalmap_pars_fragment:cp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:up,iridescence_pars_fragment:fp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:_p,dithering_fragment:xp,dithering_pars_fragment:vp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:bp,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:Sp,shadowmap_vertex:wp,shadowmask_pars_fragment:Ep,skinbase_vertex:Tp,skinning_pars_vertex:Cp,skinning_vertex:Ap,skinnormal_vertex:Rp,specularmap_fragment:Ip,specularmap_pars_fragment:Pp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Dp,transmission_fragment:Np,transmission_pars_fragment:Fp,uv_pars_fragment:Up,uv_pars_vertex:Op,uv_vertex:Bp,worldpos_vertex:kp,background_vert:zp,background_frag:Vp,backgroundCube_vert:Hp,backgroundCube_frag:Gp,cube_vert:Wp,cube_frag:Xp,depth_vert:qp,depth_frag:Yp,distance_vert:Zp,distance_frag:$p,equirect_vert:Jp,equirect_frag:Kp,linedashed_vert:Qp,linedashed_frag:jp,meshbasic_vert:em,meshbasic_frag:tm,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:rm,meshmatcap_frag:sm,meshnormal_vert:om,meshnormal_frag:am,meshphong_vert:lm,meshphong_frag:cm,meshphysical_vert:hm,meshphysical_frag:dm,meshtoon_vert:um,meshtoon_frag:fm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:_m,sprite_vert:xm,sprite_frag:vm},de={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Dn={basic:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Gt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Gt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Gt([de.points,de.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Gt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Gt([de.common,de.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Gt([de.sprite,de.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Gt([de.common,de.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Gt([de.lights,de.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Dn.physical={uniforms:Gt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Ta={r:0,b:0,g:0},Bi=new Li,ym=new bt;function bm(i,e,t,n,r,s,o){let a=new Ze(0),l=s===!0?0:1,c,h,d=null,f=0,p=null;function _(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function v(E){let w=!1,T=_(E);T===null?u(a,l):T&&T.isColor&&(u(T,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,w){let T=_(w);T&&(T.isCubeTexture||T.mapping===gs)?(h===void 0&&(h=new pn(new yr(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Oi(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Bi.copy(w.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(Bi)),h.material.toneMapped=$e.getTransfer(T.colorSpace)!==nt,(d!==T||f!==T.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=T,f=T.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new pn(new ds(2,2),new ln({name:"BackgroundMaterial",uniforms:Oi(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=$e.getTransfer(T.colorSpace)!==nt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,w){E.getRGB(Ta,jl(i)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,w,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),l=w,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(a,l)},render:v,addToRenderList:m,dispose:S}}function Mm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(b,P,H,V,K){let Y=!1,W=d(V,H,P);s!==W&&(s=W,c(s.object)),Y=p(b,V,H,K),Y&&_(b,V,H,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,w(b,P,H,V),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function d(b,P,H){let V=H.wireframe===!0,K=n[b.id];K===void 0&&(K={},n[b.id]=K);let Y=K[P.id];Y===void 0&&(Y={},K[P.id]=Y);let W=Y[V];return W===void 0&&(W=f(l()),Y[V]=W),W}function f(b){let P=[],H=[],V=[];for(let K=0;K<t;K++)P[K]=0,H[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:V,object:b,attributes:{},index:null}}function p(b,P,H,V){let K=s.attributes,Y=P.attributes,W=0,k=H.getAttributes();for(let ee in k)if(k[ee].location>=0){let he=K[ee],me=Y[ee];if(me===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),he===void 0||he.attribute!==me||me&&he.data!==me.data)return!0;W++}return s.attributesNum!==W||s.index!==V}function _(b,P,H,V){let K={},Y=P.attributes,W=0,k=H.getAttributes();for(let ee in k)if(k[ee].location>=0){let he=Y[ee];he===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(he=b.instanceColor));let me={};me.attribute=he,he&&he.data&&(me.data=he.data),K[ee]=me,W++}s.attributes=K,s.attributesNum=W,s.index=V}function v(){let b=s.newAttributes;for(let P=0,H=b.length;P<H;P++)b[P]=0}function m(b){u(b,0)}function u(b,P){let H=s.newAttributes,V=s.enabledAttributes,K=s.attributeDivisors;H[b]=1,V[b]===0&&(i.enableVertexAttribArray(b),V[b]=1),K[b]!==P&&(i.vertexAttribDivisor(b,P),K[b]=P)}function S(){let b=s.newAttributes,P=s.enabledAttributes;for(let H=0,V=P.length;H<V;H++)P[H]!==b[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function E(b,P,H,V,K,Y,W){W===!0?i.vertexAttribIPointer(b,P,H,K,Y):i.vertexAttribPointer(b,P,H,V,K,Y)}function w(b,P,H,V){v();let K=V.attributes,Y=H.getAttributes(),W=P.defaultAttributeValues;for(let k in Y){let ee=Y[k];if(ee.location>=0){let pe=K[k];if(pe===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),pe!==void 0){let he=pe.normalized,me=pe.itemSize,We=e.get(pe);if(We===void 0)continue;let Ve=We.buffer,xt=We.type,gt=We.bytesPerElement,$=xt===i.INT||xt===i.UNSIGNED_INT||pe.gpuType===zo;if(pe.isInterleavedBufferAttribute){let te=pe.data,xe=te.stride,ke=pe.offset;if(te.isInstancedInterleavedBuffer){for(let be=0;be<ee.locationSize;be++)u(ee.location+be,te.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let be=0;be<ee.locationSize;be++)m(ee.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let be=0;be<ee.locationSize;be++)E(ee.location+be,me/ee.locationSize,xt,he,xe*gt,(ke+me/ee.locationSize*be)*gt,$)}else{if(pe.isInstancedBufferAttribute){for(let te=0;te<ee.locationSize;te++)u(ee.location+te,pe.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let te=0;te<ee.locationSize;te++)m(ee.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let te=0;te<ee.locationSize;te++)E(ee.location+te,me/ee.locationSize,xt,he,me*gt,me/ee.locationSize*te*gt,$)}}else if(W!==void 0){let he=W[k];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(ee.location,he);break;case 3:i.vertexAttrib3fv(ee.location,he);break;case 4:i.vertexAttrib4fv(ee.location,he);break;default:i.vertexAttrib1fv(ee.location,he)}}}}S()}function T(){O();for(let b in n){let P=n[b];for(let H in P){let V=P[H];for(let K in V)h(V[K].object),delete V[K];delete P[H]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let H in P){let V=P[H];for(let K in V)h(V[K].object),delete V[K];delete P[H]}delete n[b.id]}function R(b){for(let P in n){let H=n[P];if(H[b.id]===void 0)continue;let V=H[b.id];for(let K in V)h(V[K].object),delete V[K];delete H[b.id]}}function O(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Sm(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];t.update(p,n,1)}function l(c,h,d,f){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v]*f[v];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let O=R===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wn&&!O)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:w,maxSamples:T,samples:A}}function Em(i){let e=this,t=null,n=0,r=!1,s=!1,o=new fn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):c();else{let S=s?0:n,E=S*4,w=u.clippingState||null;l.value=w,w=h(_,f,E,p);for(let T=0;T!==E;++T)w[T]=t[T];u.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,_){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let u=p+v*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,w=p;E!==v;++E,w+=4)o.copy(d[E]).applyMatrix4(S,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Tm(i){let e=new WeakMap;function t(o,a){return a===Oo?o.mapping=pi:a===Bo&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Oo||a===Bo)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ns(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var _i=4,nd=[.125,.215,.35,.446,.526,.582],zi=20,Cm=256,Ms=new fs,id=new Ze,ic=null,rc=0,sc=0,oc=!1,Am=new N,Aa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=Am}=s;ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,rc,sc),this._renderer.xr.enabled=oc,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Pn,format:mn,colorSpace:Ii,depthBuffer:!1},r=rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rd(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Rm(s)),this._blurMaterial=Pm(s,e,t),this._ggxMaterial=Im(s,e,t)}return r}_compileMaterial(e){let t=new pn(new Yt,e);this._renderer.compile(t,Ms)}_sceneToCubeUV(e,t,n,r,s){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(id),d.toneMapping=Mn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pn(new yr,new Kr({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,u=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,u=!0):(m.color.copy(id),u=!0);for(let E=0;E<6;E++){let w=E%3;w===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[E],s.y,s.z)):w===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[E]));let T=this._cubeSize;Cr(r,w*T,E>2?T:0,T,T),d.setRenderTarget(r),u&&d.render(v,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===pi||e.mapping===Fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Cr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ms)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=0+c*1.25,p=d*f,{_lodMax:_}=this,v=this._sizeLods[n],m=3*v*(n>_-_i?n-_+_i:0),u=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-t,Cr(s,m,u,3*v,2*v),r.setRenderTarget(s),r.render(a,Ms),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Cr(e,m,u,3*v,2*v),r.setRenderTarget(e),r.render(a,Ms)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[r];d.material=c;let f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zi-1),v=s/_,m=isFinite(s)?1+Math.floor(h*v):zi;m>zi&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let u=[],S=0;for(let R=0;R<zi;++R){let O=R/v,y=Math.exp(-O*O/2);u.push(y),R===0?S+=y:R<m&&(S+=2*y)}for(let R=0;R<u.length;R++)u[R]=u[R]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;let w=this._sizeLods[r],T=3*w*(r>E-_i?r-E+_i:0),A=4*(this._cubeSize-w);Cr(t,T,A,3*w,2*w),l.setRenderTarget(t),l.render(d,Ms)}};function Rm(i){let e=[],t=[],n=[],r=i,s=i-_i+1+nd.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-_i?l=nd[o-i+_i-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,v=3,m=2,u=1,S=new Float32Array(v*_*p),E=new Float32Array(m*_*p),w=new Float32Array(u*_*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,O=A>2?0:-1,y=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];S.set(y,v*_*A),E.set(f,m*_*A);let b=[A,A,A,A,A,A];w.set(b,u*_*A)}let T=new Yt;T.setAttribute("position",new Ot(S,v)),T.setAttribute("uv",new Ot(E,m)),T.setAttribute("faceIndex",new Ot(w,u)),n.push(new pn(T,null)),r>_i&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function rd(i,e,t){let n=new an(i,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Im(i,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ia(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Pm(i,e,t){let n=new Float32Array(zi),r=new N(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function sd(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function od(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Oo||l===Bo,h=l===pi||l===Fi;if(c||h){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Aa(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new Aa(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Dm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&mr("WebGLRenderer: "+n+" extension not supported."),r}}}function Nm(i,e,t,n){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,_=d.attributes.position,v=0;if(p!==null){let S=p.array;v=p.version;for(let E=0,w=S.length;E<w;E+=3){let T=S[E+0],A=S[E+1],R=S[E+2];f.push(T,A,A,R,R,T)}}else if(_!==void 0){let S=_.array;v=_.version;for(let E=0,w=S.length/3-1;E<w;E+=3){let T=E+0,A=E+1,R=E+2;f.push(T,A,A,R,R,T)}}else return;let m=new(Jl(f)?jr:Qr)(f,1);m.version=v;let u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Fm(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,f*o,_),t.update(p,n,_))}function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];t.update(m,n,1)}function d(f,p,_,v){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,_);let u=0;for(let S=0;S<_;S++)u+=p[S]*v[S];t.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Um(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Pe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Om(i,e,t){let n=new WeakMap,r=new Tt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let b=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var p=b;f!==void 0&&f.texture.dispose();let _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],w=0;_===!0&&(w=1),v===!0&&(w=2),m===!0&&(w=3);let T=a.attributes.position.count*w,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let R=new Float32Array(T*A*4*d),O=new Jr(R,T,A,d);O.type=wn,O.needsUpdate=!0;let y=w*4;for(let P=0;P<d;P++){let H=u[P],V=S[P],K=E[P],Y=T*A*4*P;for(let W=0;W<H.count;W++){let k=W*y;_===!0&&(r.fromBufferAttribute(H,W),R[Y+k+0]=r.x,R[Y+k+1]=r.y,R[Y+k+2]=r.z,R[Y+k+3]=0),v===!0&&(r.fromBufferAttribute(V,W),R[Y+k+4]=r.x,R[Y+k+5]=r.y,R[Y+k+6]=r.z,R[Y+k+7]=0),m===!0&&(r.fromBufferAttribute(K,W),R[Y+k+8]=r.x,R[Y+k+9]=r.y,R[Y+k+10]=r.z,R[Y+k+11]=K.itemSize===4?r.w:1)}}f={count:d,texture:O,size:new Oe(T,A)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];let v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Bm(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var km={[Fl]:"LINEAR_TONE_MAPPING",[Ul]:"REINHARD_TONE_MAPPING",[Ol]:"CINEON_TONE_MAPPING",[Bl]:"ACES_FILMIC_TONE_MAPPING",[zl]:"AGX_TONE_MAPPING",[Vl]:"NEUTRAL_TONE_MAPPING",[kl]:"CUSTOM_TONE_MAPPING"};function zm(i,e,t,n,r){let s=new an(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new an(e,t,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),a=new Yt;a.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new jt([0,2,0,0,2,0],2));let l=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new pn(a,l),h=new fs(-1,1,1,-1,0,1),d=null,f=null,p=!1,_,v=null,m=[],u=!1;this.setSize=function(S,E){s.setSize(S,E),o.setSize(S,E);for(let w=0;w<m.length;w++){let T=m[w];T.setSize&&T.setSize(S,E)}},this.setEffects=function(S){m=S,u=m.length>0&&m[0].isRenderPass===!0;let E=s.width,w=s.height;for(let T=0;T<m.length;T++){let A=m[T];A.setSize&&A.setSize(E,w)}},this.begin=function(S,E){if(p||S.toneMapping===Mn&&m.length===0)return!1;if(v=E,E!==null){let w=E.width,T=E.height;(s.width!==w||s.height!==T)&&this.setSize(w,T)}return u===!1&&S.setRenderTarget(s),_=S.toneMapping,S.toneMapping=Mn,!0},this.hasRenderPass=function(){return u},this.end=function(S,E){S.toneMapping=_,p=!0;let w=s,T=o;for(let A=0;A<m.length;A++){let R=m[A];if(R.enabled!==!1&&(R.render(S,T,w,E),R.needsSwap!==!1)){let O=w;w=T,T=O}}if(d!==S.outputColorSpace||f!==S.toneMapping){d=S.outputColorSpace,f=S.toneMapping,l.defines={},$e.getTransfer(d)===nt&&(l.defines.SRGB_TRANSFER="");let A=km[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(v),S.render(c,h),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Ed=new $t,cc=new di(1,1),Td=new Jr,Cd=new uo,Ad=new ts,ad=[],ld=[],cd=new Float32Array(16),hd=new Float32Array(9),dd=new Float32Array(4);function Rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ad[r];if(s===void 0&&(s=new Float32Array(r),ad[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Pa(i,e){let t=ld[e];t===void 0&&(t=new Int32Array(e),ld[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),Lt(t,n)}}function qm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;hd.set(n),i.uniformMatrix3fv(this.addr,!1,hd),Lt(t,n)}}function Ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;cd.set(n),i.uniformMatrix4fv(this.addr,!1,cd),Lt(t,n)}}function Zm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function Qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function ng(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cc.compareFunction=t.isReversedDepthBuffer()?Ea:wa,s=cc):s=Ed,t.setTexture2D(e||s,r)}function ig(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Cd,r)}function rg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ad,r)}function sg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Td,r)}function og(i){switch(i){case 5126:return Vm;case 35664:return Hm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return $m;case 35668:case 35672:return Jm;case 35669:case 35673:return Km;case 5125:return Qm;case 36294:return jm;case 36295:return eg;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return sg}}function ag(i,e){i.uniform1fv(this.addr,e)}function lg(i,e){let t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function cg(i,e){let t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function hg(i,e){let t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function dg(i,e){let t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ug(i,e){let t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fg(i,e){let t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function pg(i,e){i.uniform1iv(this.addr,e)}function mg(i,e){i.uniform2iv(this.addr,e)}function gg(i,e){i.uniform3iv(this.addr,e)}function _g(i,e){i.uniform4iv(this.addr,e)}function xg(i,e){i.uniform1uiv(this.addr,e)}function vg(i,e){i.uniform2uiv(this.addr,e)}function yg(i,e){i.uniform3uiv(this.addr,e)}function bg(i,e){i.uniform4uiv(this.addr,e)}function Mg(i,e,t){let n=this.cache,r=e.length,s=Pa(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=cc:o=Ed;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Sg(i,e,t){let n=this.cache,r=e.length,s=Pa(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Cd,s[o])}function wg(i,e,t){let n=this.cache,r=e.length,s=Pa(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ad,s[o])}function Eg(i,e,t){let n=this.cache,r=e.length,s=Pa(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Td,s[o])}function Tg(i){switch(i){case 5126:return ag;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return dg;case 35675:return ug;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return vg;case 36295:return yg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Eg}}var hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=og(t.type)}},dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tg(t.type)}},uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},ac=/(\w+)(\])?(\[|\.)?/g;function ud(i,e){i.seq.push(e),i.map[e.id]=e}function Cg(i,e,t){let n=i.name,r=n.length;for(ac.lastIndex=0;;){let s=ac.exec(n),o=ac.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ud(t,c===void 0?new hc(a,i,e):new dc(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new uc(a),ud(t,d)),t=d}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Cg(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function fd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ag=37297,Rg=0;function Ig(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var pd=new Be;function Pg(i){$e._getMatrix(pd,$e.workingColorSpace,i);let e=`mat3( ${pd.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case qr:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function md(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Ig(i.getShaderSource(e),a)}else return s}function Lg(i,e){let t=Pg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Dg={[Fl]:"Linear",[Ul]:"Reinhard",[Ol]:"Cineon",[Bl]:"ACESFilmic",[zl]:"AgX",[Vl]:"Neutral",[kl]:"Custom"};function Ng(i,e){let t=Dg[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ca=new N;function Fg(){$e.getLuminanceCoefficients(Ca);let i=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function Og(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ws(i){return i!==""}function gd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(i){return i.replace(kg,Vg)}var zg=new Map;function Vg(i,e){let t=ze[e];if(t===void 0){let n=zg.get(e);if(n!==void 0)t=ze[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}var Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(i){return i.replace(Hg,Gg)}function Gg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vd(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Wg={[ms]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function Xg(i){return Wg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qg={[pi]:"ENVMAP_TYPE_CUBE",[Fi]:"ENVMAP_TYPE_CUBE",[gs]:"ENVMAP_TYPE_CUBE_UV"};function Yg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":qg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Zg={[Fi]:"ENVMAP_MODE_REFRACTION"};function $g(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Jg={[Nl]:"ENVMAP_BLENDING_MULTIPLY",[kh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function Kg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jg[i.combine]||"ENVMAP_BLENDING_NONE"}function Qg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jg(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Xg(t),c=Yg(t),h=$g(t),d=Kg(t),f=Qg(t),p=Ug(t),_=Og(s),v=r.createProgram(),m,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ws).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ws).join(`
`),u.length>0&&(u+=`
`)):(m=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),u=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Lg("linearToOutputTexel",t.outputColorSpace),Fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),o=fc(o),o=gd(o,t),o=_d(o,t),a=fc(a),a=gd(a,t),a=_d(a,t),o=xd(o),a=xd(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let E=S+m+o,w=S+u+a,T=fd(r,r.VERTEX_SHADER,E),A=fd(r,r.FRAGMENT_SHADER,w);r.attachShader(v,T),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(P){if(i.debug.checkShaderErrors){let H=r.getProgramInfoLog(v)||"",V=r.getShaderInfoLog(T)||"",K=r.getShaderInfoLog(A)||"",Y=H.trim(),W=V.trim(),k=K.trim(),ee=!0,pe=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,T,A);else{let he=md(r,T,"vertex"),me=md(r,A,"fragment");Pe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+he+`
`+me)}else Y!==""?Le("WebGLProgram: Program Info Log:",Y):(W===""||k==="")&&(pe=!1);pe&&(P.diagnostics={runnable:ee,programLog:Y,vertexShader:{log:W,prefix:m},fragmentShader:{log:k,prefix:u}})}r.deleteShader(T),r.deleteShader(A),O=new Ar(r,v),y=Bg(r,v)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,Ag)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=A,this}var e0=0,pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mc(e),t.set(e,n)),n}},mc=class{constructor(e){this.id=e0++,this.code=e,this.usedTimes=0}};function t0(i,e,t,n,r,s,o){let a=new vr,l=new pc,c=new Set,h=[],d=new Map,f=r.logarithmicDepthBuffer,p=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,P,H,V){let K=H.fog,Y=V.geometry,W=y.isMeshStandardMaterial?H.environment:null,k=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),ee=k&&k.mapping===gs?k.image.height:null,pe=_[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&Le("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,me=he!==void 0?he.length:0,We=0;Y.morphAttributes.position!==void 0&&(We=1),Y.morphAttributes.normal!==void 0&&(We=2),Y.morphAttributes.color!==void 0&&(We=3);let Ve,xt,gt,$;if(pe){let rt=Dn[pe];Ve=rt.vertexShader,xt=rt.fragmentShader}else Ve=y.vertexShader,xt=y.fragmentShader,l.update(y),gt=l.getVertexShaderID(y),$=l.getFragmentShaderID(y);let te=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),ke=V.isInstancedMesh===!0,be=V.isBatchedMesh===!0,Ke=!!y.map,Dt=!!y.matcap,Je=!!k,it=!!y.aoMap,ct=!!y.lightMap,He=!!y.bumpMap,Ct=!!y.normalMap,C=!!y.displacementMap,At=!!y.emissiveMap,je=!!y.metalnessMap,dt=!!y.roughnessMap,Se=y.anisotropy>0,M=y.clearcoat>0,g=y.dispersion>0,L=y.iridescence>0,X=y.sheen>0,j=y.transmission>0,G=Se&&!!y.anisotropyMap,Ee=M&&!!y.clearcoatMap,oe=M&&!!y.clearcoatNormalMap,Me=M&&!!y.clearcoatRoughnessMap,Fe=L&&!!y.iridescenceMap,ie=L&&!!y.iridescenceThicknessMap,le=X&&!!y.sheenColorMap,ye=X&&!!y.sheenRoughnessMap,we=!!y.specularMap,ae=!!y.specularColorMap,Ge=!!y.specularIntensityMap,I=j&&!!y.transmissionMap,fe=j&&!!y.thicknessMap,re=!!y.gradientMap,ge=!!y.alphaMap,ne=y.alphaTest>0,Q=!!y.alphaHash,se=!!y.extensions,Ue=Mn;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let ut={shaderID:pe,shaderType:y.type,shaderName:y.name,vertexShader:Ve,fragmentShader:xt,defines:y.defines,customVertexShaderID:gt,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:be,batchingColor:be&&V._colorsTexture!==null,instancing:ke,instancingColor:ke&&V.instanceColor!==null,instancingMorph:ke&&V.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ii,alphaToCoverage:!!y.alphaToCoverage,map:Ke,matcap:Dt,envMap:Je,envMapMode:Je&&k.mapping,envMapCubeUVHeight:ee,aoMap:it,lightMap:ct,bumpMap:He,normalMap:Ct,displacementMap:C,emissiveMap:At,normalMapObjectSpace:Ct&&y.normalMapType===Wh,normalMapTangentSpace:Ct&&y.normalMapType===Gh,metalnessMap:je,roughnessMap:dt,anisotropy:Se,anisotropyMap:G,clearcoat:M,clearcoatMap:Ee,clearcoatNormalMap:oe,clearcoatRoughnessMap:Me,dispersion:g,iridescence:L,iridescenceMap:Fe,iridescenceThicknessMap:ie,sheen:X,sheenColorMap:le,sheenRoughnessMap:ye,specularMap:we,specularColorMap:ae,specularIntensityMap:Ge,transmission:j,transmissionMap:I,thicknessMap:fe,gradientMap:re,opaque:y.transparent===!1&&y.blending===Ai&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:ne,alphaHash:Q,combine:y.combine,mapUv:Ke&&v(y.map.channel),aoMapUv:it&&v(y.aoMap.channel),lightMapUv:ct&&v(y.lightMap.channel),bumpMapUv:He&&v(y.bumpMap.channel),normalMapUv:Ct&&v(y.normalMap.channel),displacementMapUv:C&&v(y.displacementMap.channel),emissiveMapUv:At&&v(y.emissiveMap.channel),metalnessMapUv:je&&v(y.metalnessMap.channel),roughnessMapUv:dt&&v(y.roughnessMap.channel),anisotropyMapUv:G&&v(y.anisotropyMap.channel),clearcoatMapUv:Ee&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(y.sheenRoughnessMap.channel),specularMapUv:we&&v(y.specularMap.channel),specularColorMapUv:ae&&v(y.specularColorMap.channel),specularIntensityMapUv:Ge&&v(y.specularIntensityMap.channel),transmissionMapUv:I&&v(y.transmissionMap.channel),thicknessMapUv:fe&&v(y.thicknessMap.channel),alphaMapUv:ge&&v(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ct||Se),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(Ke||ge),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:We,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ke&&y.map.isVideoTexture===!0&&$e.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:At&&y.emissiveMap.isVideoTexture===!0&&$e.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Rn,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:se&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&y.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function u(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(S(b,y),E(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function S(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function E(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function w(y){let b=_[y.type],P;if(b){let H=Dn[b];P=ed.clone(H.uniforms)}else P=y.uniforms;return P}function T(y,b){let P=d.get(b);return P!==void 0?++P.usedTimes:(P=new jg(i,b,y,s),h.push(P),d.set(b,P)),P}function A(y){if(--y.usedTimes===0){let b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),d.delete(y.cacheKey),y.destroy()}}function R(y){l.remove(y)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:w,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:O}}function n0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function i0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bd(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,p,_,v,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=m),e++,u}function a(d,f,p,_,v,m){let u=o(d,f,p,_,v,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function l(d,f,p,_,v,m){let u=o(d,f,p,_,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||i0),n.length>1&&n.sort(f||yd),r.length>1&&r.sort(f||yd)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function r0(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new bd,i.set(n,[o])):r>=s.length?(o=new bd,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function s0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ze};break;case"SpotLight":t={position:new N,direction:new N,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function o0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var a0=0;function l0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function c0(i){let e=new s0,t=o0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let r=new N,s=new bt,o=new bt;function a(c){let h=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,_=0,v=0,m=0,u=0,S=0,E=0,w=0,T=0,A=0,R=0;c.sort(l0);for(let y=0,b=c.length;y<b;y++){let P=c[y],H=P.color,V=P.intensity,K=P.distance,Y=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ui?Y=P.shadow.map.texture:Y=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*V,d+=H.g*V,f+=H.b*V;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],V);R++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,ee=t.get(P);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=P.shadow.matrix,S++}n.directional[p]=W,p++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(H).multiplyScalar(V),W.distance=K,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[v]=W;let k=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,k.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=k.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,n.spotShadow[v]=ee,n.spotShadowMap[v]=Y,w++}v++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(H).multiplyScalar(V),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let k=P.shadow,ee=t.get(P);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,ee.shadowCameraNear=k.camera.near,ee.shadowCameraFar=k.camera.far,n.pointShadow[_]=ee,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=P.shadow.matrix,E++}n.point[_]=W,_++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(V),W.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[u]=W,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let O=n.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==u||O.numDirectionalShadows!==S||O.numPointShadows!==E||O.numSpotShadows!==w||O.numSpotMaps!==T||O.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=w+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,O.directionalLength=p,O.pointLength=_,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=u,O.numDirectionalShadows=S,O.numPointShadows=E,O.numSpotShadows=w,O.numSpotMaps=T,O.numLightProbes=R,n.version=a0++)}function l(c,h){let d=0,f=0,p=0,_=0,v=0,m=h.matrixWorldInverse;for(let u=0,S=c.length;u<S;u++){let E=c[u];if(E.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),d++}else if(E.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let w=n.hemi[v];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Md(i){let e=new c0(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function h0(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Md(i),e.set(r,[a])):s>=o.length?(a=new Md(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u0=`uniform sampler2D shadow_pass;
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
}`,f0=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],p0=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Sd=new bt,Ss=new N,lc=new N;function m0(i,e,t){let n=new os,r=new Oe,s=new Oe,o=new Tt,a=new yo,l=new bo,c={},h=t.maxTextureSize,d={[Zn]:Zt,[Zt]:Zn,[Rn]:Rn},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:d0,fragmentShader:u0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Yt;_.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new pn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let u=this.type;this.render=function(A,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===yh&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=ms);let y=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(In),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let V=u!==this.type;V&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(Y=>Y.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,Y=A.length;K<Y;K++){let W=A[K],k=W.shadow;if(k===void 0){Le("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let ee=k.getFrameExtents();if(r.multiply(ee),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ee.x),r.x=s.x*ee.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ee.y),r.y=s.y*ee.y,k.mapSize.y=s.y)),k.map===null||V===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===wr){if(W.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new an(r.x,r.y,{format:Ui,type:Pn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new di(r.x,r.y,wn),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=An,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ft,k.map.depthTexture.magFilter=Ft}else{W.isPointLight?(k.map=new ns(r.x),k.map.depthTexture=new xo(r.x,Sn)):(k.map=new an(r.x,r.y),k.map.depthTexture=new di(r.x,r.y,Sn)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=An;let he=i.state.buffers.depth.getReversed();this.type===ms?(k.map.depthTexture.compareFunction=he?Ea:wa,k.map.depthTexture.minFilter=Et,k.map.depthTexture.magFilter=Et):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ft,k.map.depthTexture.magFilter=Ft)}k.camera.updateProjectionMatrix()}let pe=k.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<pe;he++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,he),i.clear();else{he===0&&(i.setRenderTarget(k.map),i.clear());let me=k.getViewport(he);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),H.viewport(o)}if(W.isPointLight){let me=k.camera,We=k.matrix,Ve=W.distance||me.far;Ve!==me.far&&(me.far=Ve,me.updateProjectionMatrix()),Ss.setFromMatrixPosition(W.matrixWorld),me.position.copy(Ss),lc.copy(me.position),lc.add(f0[he]),me.up.copy(p0[he]),me.lookAt(lc),me.updateMatrixWorld(),We.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Sd.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Sd,me.coordinateSystem,me.reversedDepth)}else k.updateMatrices(W);n=k.getFrustum(),w(R,O,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===wr&&S(k,O),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(y,b,P)};function S(A,R){let O=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new an(r.x,r.y,{format:Ui,type:Pn})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,O,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,O,p,v,null)}function E(A,R,O,y){let b=null,P=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)b=P;else if(b=O.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let H=b.uuid,V=R.uuid,K=c[H];K===void 0&&(K={},c[H]=K);let Y=K[V];Y===void 0&&(Y=b.clone(),K[V]=Y,R.addEventListener("dispose",T)),b=Y}if(b.visible=R.visible,b.wireframe=R.wireframe,y===wr?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=i.properties.get(b);H.light=O}return b}function w(A,R,O,y,b){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===wr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let V=e.update(A),K=A.material;if(Array.isArray(K)){let Y=V.groups;for(let W=0,k=Y.length;W<k;W++){let ee=Y[W],pe=K[ee.materialIndex];if(pe&&pe.visible){let he=E(A,pe,y,b);A.onBeforeShadow(i,A,R,O,V,he,ee),i.renderBufferDirect(O,null,V,he,A,ee),A.onAfterShadow(i,A,R,O,V,he,ee)}}}else if(K.visible){let Y=E(A,K,y,b);A.onBeforeShadow(i,A,R,O,V,Y,null),i.renderBufferDirect(O,null,V,Y,A,null),A.onAfterShadow(i,A,R,O,V,Y,null)}}let H=A.children;for(let V=0,K=H.length;V<K;V++)w(H[V],R,O,y,b)}function T(A){A.target.removeEventListener("dispose",T);for(let O in c){let y=c[O],b=A.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}var g0={[Io]:Po,[Lo]:Fo,[Do]:Uo,[Ri]:No,[Po]:Io,[Fo]:Lo,[Uo]:Do,[No]:Ri};function _0(i,e){function t(){let I=!1,fe=new Tt,re=null,ge=new Tt(0,0,0,0);return{setMask:function(ne){re!==ne&&!I&&(i.colorMask(ne,ne,ne,ne),re=ne)},setLocked:function(ne){I=ne},setClear:function(ne,Q,se,Ue,ut){ut===!0&&(ne*=Ue,Q*=Ue,se*=Ue),fe.set(ne,Q,se,Ue),ge.equals(fe)===!1&&(i.clearColor(ne,Q,se,Ue),ge.copy(fe))},reset:function(){I=!1,re=null,ge.set(-1,0,0,0)}}}function n(){let I=!1,fe=!1,re=null,ge=null,ne=null;return{setReversed:function(Q){if(fe!==Q){let se=e.get("EXT_clip_control");Q?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),fe=Q;let Ue=ne;ne=null,this.setClear(Ue)}},getReversed:function(){return fe},setTest:function(Q){Q?te(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Q){re!==Q&&!I&&(i.depthMask(Q),re=Q)},setFunc:function(Q){if(fe&&(Q=g0[Q]),ge!==Q){switch(Q){case Io:i.depthFunc(i.NEVER);break;case Po:i.depthFunc(i.ALWAYS);break;case Lo:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case Do:i.depthFunc(i.EQUAL);break;case No:i.depthFunc(i.GEQUAL);break;case Fo:i.depthFunc(i.GREATER);break;case Uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Q}},setLocked:function(Q){I=Q},setClear:function(Q){ne!==Q&&(fe&&(Q=1-Q),i.clearDepth(Q),ne=Q)},reset:function(){I=!1,re=null,ge=null,ne=null,fe=!1}}}function r(){let I=!1,fe=null,re=null,ge=null,ne=null,Q=null,se=null,Ue=null,ut=null;return{setTest:function(rt){I||(rt?te(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(rt){fe!==rt&&!I&&(i.stencilMask(rt),fe=rt)},setFunc:function(rt,En,Nn){(re!==rt||ge!==En||ne!==Nn)&&(i.stencilFunc(rt,En,Nn),re=rt,ge=En,ne=Nn)},setOp:function(rt,En,Nn){(Q!==rt||se!==En||Ue!==Nn)&&(i.stencilOp(rt,En,Nn),Q=rt,se=En,Ue=Nn)},setLocked:function(rt){I=rt},setClear:function(rt){ut!==rt&&(i.clearStencil(rt),ut=rt)},reset:function(){I=!1,fe=null,re=null,ge=null,ne=null,Q=null,se=null,Ue=null,ut=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,u=null,S=null,E=null,w=null,T=null,A=null,R=new Ze(0,0,0),O=0,y=!1,b=null,P=null,H=null,V=null,K=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,k=0,ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ee)[1]),W=k>=1):ee.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),W=k>=2);let pe=null,he={},me=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),Ve=new Tt().fromArray(me),xt=new Tt().fromArray(We);function gt(I,fe,re,ge){let ne=new Uint8Array(4),Q=i.createTexture();i.bindTexture(I,Q),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<re;se++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(fe+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Q}let $={};$[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(Ri),He(!1),Ct(Il),te(i.CULL_FACE),it(In);function te(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function xe(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function ke(I,fe){return d[I]!==fe?(i.bindFramebuffer(I,fe),d[I]=fe,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=fe),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function be(I,fe){let re=p,ge=!1;if(I){re=f.get(fe),re===void 0&&(re=[],f.set(fe,re));let ne=I.textures;if(re.length!==ne.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,se=ne.length;Q<se;Q++)re[Q]=i.COLOR_ATTACHMENT0+Q;re.length=ne.length,ge=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,ge=!0);ge&&i.drawBuffers(re)}function Ke(I){return _!==I?(i.useProgram(I),_=I,!0):!1}let Dt={[ci]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[Sh]:i.FUNC_REVERSE_SUBTRACT};Dt[wh]=i.MIN,Dt[Eh]=i.MAX;let Je={[Th]:i.ZERO,[Ch]:i.ONE,[Ah]:i.SRC_COLOR,[io]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Lh]:i.DST_COLOR,[Ih]:i.DST_ALPHA,[Rh]:i.ONE_MINUS_SRC_COLOR,[ro]:i.ONE_MINUS_SRC_ALPHA,[Dh]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Fh]:i.CONSTANT_COLOR,[Uh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[Bh]:i.ONE_MINUS_CONSTANT_ALPHA};function it(I,fe,re,ge,ne,Q,se,Ue,ut,rt){if(I===In){v===!0&&(xe(i.BLEND),v=!1);return}if(v===!1&&(te(i.BLEND),v=!0),I!==bh){if(I!==m||rt!==y){if((u!==ci||w!==ci)&&(i.blendEquation(i.FUNC_ADD),u=ci,w=ci),rt)switch(I){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pl:i.blendFunc(i.ONE,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pe("WebGLState: Invalid blending: ",I);break}else switch(I){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ll:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",I);break}S=null,E=null,T=null,A=null,R.set(0,0,0),O=0,m=I,y=rt}return}ne=ne||fe,Q=Q||re,se=se||ge,(fe!==u||ne!==w)&&(i.blendEquationSeparate(Dt[fe],Dt[ne]),u=fe,w=ne),(re!==S||ge!==E||Q!==T||se!==A)&&(i.blendFuncSeparate(Je[re],Je[ge],Je[Q],Je[se]),S=re,E=ge,T=Q,A=se),(Ue.equals(R)===!1||ut!==O)&&(i.blendColor(Ue.r,Ue.g,Ue.b,ut),R.copy(Ue),O=ut),m=I,y=!1}function ct(I,fe){I.side===Rn?xe(i.CULL_FACE):te(i.CULL_FACE);let re=I.side===Zt;fe&&(re=!re),He(re),I.blending===Ai&&I.transparent===!1?it(In):it(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let ge=I.stencilWrite;a.setTest(ge),ge&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),At(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){b!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),b=I)}function Ct(I){I!==xh?(te(i.CULL_FACE),I!==P&&(I===Il?i.cullFace(i.BACK):I===vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),P=I}function C(I){I!==H&&(W&&i.lineWidth(I),H=I)}function At(I,fe,re){I?(te(i.POLYGON_OFFSET_FILL),(V!==fe||K!==re)&&(i.polygonOffset(fe,re),V=fe,K=re)):xe(i.POLYGON_OFFSET_FILL)}function je(I){I?te(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function dt(I){I===void 0&&(I=i.TEXTURE0+Y-1),pe!==I&&(i.activeTexture(I),pe=I)}function Se(I,fe,re){re===void 0&&(pe===null?re=i.TEXTURE0+Y-1:re=pe);let ge=he[re];ge===void 0&&(ge={type:void 0,texture:void 0},he[re]=ge),(ge.type!==I||ge.texture!==fe)&&(pe!==re&&(i.activeTexture(re),pe=re),i.bindTexture(I,fe||$[I]),ge.type=I,ge.texture=fe)}function M(){let I=he[pe];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(I){Pe("WebGLState:",I)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(I){Pe("WebGLState:",I)}}function X(){try{i.texSubImage2D(...arguments)}catch(I){Pe("WebGLState:",I)}}function j(){try{i.texSubImage3D(...arguments)}catch(I){Pe("WebGLState:",I)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Pe("WebGLState:",I)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Pe("WebGLState:",I)}}function oe(){try{i.texStorage2D(...arguments)}catch(I){Pe("WebGLState:",I)}}function Me(){try{i.texStorage3D(...arguments)}catch(I){Pe("WebGLState:",I)}}function Fe(){try{i.texImage2D(...arguments)}catch(I){Pe("WebGLState:",I)}}function ie(){try{i.texImage3D(...arguments)}catch(I){Pe("WebGLState:",I)}}function le(I){Ve.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ve.copy(I))}function ye(I){xt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),xt.copy(I))}function we(I,fe){let re=c.get(fe);re===void 0&&(re=new WeakMap,c.set(fe,re));let ge=re.get(I);ge===void 0&&(ge=i.getUniformBlockIndex(fe,I.name),re.set(I,ge))}function ae(I,fe){let ge=c.get(fe).get(I);l.get(fe)!==ge&&(i.uniformBlockBinding(fe,ge,I.__bindingPointIndex),l.set(fe,ge))}function Ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pe=null,he={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,u=null,S=null,E=null,w=null,T=null,A=null,R=new Ze(0,0,0),O=0,y=!1,b=null,P=null,H=null,V=null,K=null,Ve.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:xe,bindFramebuffer:ke,drawBuffers:be,useProgram:Ke,setBlending:it,setMaterial:ct,setFlipSided:He,setCullFace:Ct,setLineWidth:C,setPolygonOffset:At,setScissorTest:je,activeTexture:dt,bindTexture:Se,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Fe,texImage3D:ie,updateUBOMapping:we,uniformBlockBinding:ae,texStorage2D:oe,texStorage3D:Me,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:G,compressedTexSubImage3D:Ee,scissor:le,viewport:ye,reset:Ge}}function x0(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):Zr("canvas")}function v(M,g,L){let X=1,j=Se(M);if((j.width>L||j.height>L)&&(X=L/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let G=Math.floor(X*j.width),Ee=Math.floor(X*j.height);d===void 0&&(d=_(G,Ee));let oe=g?_(G,Ee):d;return oe.width=G,oe.height=Ee,oe.getContext("2d").drawImage(M,0,0,G,Ee),Le("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+G+"x"+Ee+")."),oe}else return"data"in M&&Le("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function m(M){return M.generateMipmaps}function u(M){i.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(M,g,L,X,j=!1){if(M!==null){if(i[M]!==void 0)return i[M];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let G=g;if(g===i.RED&&(L===i.FLOAT&&(G=i.R32F),L===i.HALF_FLOAT&&(G=i.R16F),L===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.R8UI),L===i.UNSIGNED_SHORT&&(G=i.R16UI),L===i.UNSIGNED_INT&&(G=i.R32UI),L===i.BYTE&&(G=i.R8I),L===i.SHORT&&(G=i.R16I),L===i.INT&&(G=i.R32I)),g===i.RG&&(L===i.FLOAT&&(G=i.RG32F),L===i.HALF_FLOAT&&(G=i.RG16F),L===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.RG8UI),L===i.UNSIGNED_SHORT&&(G=i.RG16UI),L===i.UNSIGNED_INT&&(G=i.RG32UI),L===i.BYTE&&(G=i.RG8I),L===i.SHORT&&(G=i.RG16I),L===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.RGB8UI),L===i.UNSIGNED_SHORT&&(G=i.RGB16UI),L===i.UNSIGNED_INT&&(G=i.RGB32UI),L===i.BYTE&&(G=i.RGB8I),L===i.SHORT&&(G=i.RGB16I),L===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),L===i.UNSIGNED_INT&&(G=i.RGBA32UI),L===i.BYTE&&(G=i.RGBA8I),L===i.SHORT&&(G=i.RGBA16I),L===i.INT&&(G=i.RGBA32I)),g===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),g===i.RGBA){let Ee=j?qr:$e.getTransfer(X);L===i.FLOAT&&(G=i.RGBA32F),L===i.HALF_FLOAT&&(G=i.RGBA16F),L===i.UNSIGNED_BYTE&&(G=Ee===nt?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function w(M,g){let L;return M?g===null||g===Sn||g===Tr?L=i.DEPTH24_STENCIL8:g===wn?L=i.DEPTH32F_STENCIL8:g===Er&&(L=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Sn||g===Tr?L=i.DEPTH_COMPONENT24:g===wn?L=i.DEPTH_COMPONENT32F:g===Er&&(L=i.DEPTH_COMPONENT16),L}function T(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ft&&M.minFilter!==Et?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function A(M){let g=M.target;g.removeEventListener("dispose",A),O(g),g.isVideoTexture&&h.delete(g)}function R(M){let g=M.target;g.removeEventListener("dispose",R),b(g)}function O(M){let g=n.get(M);if(g.__webglInit===void 0)return;let L=M.source,X=f.get(L);if(X){let j=X[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(M),Object.keys(X).length===0&&f.delete(L)}n.remove(M)}function y(M){let g=n.get(M);i.deleteTexture(g.__webglTexture);let L=M.source,X=f.get(L);delete X[g.__cacheKey],o.memory.textures--}function b(M){let g=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let j=0;j<g.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[X][j]);else i.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)i.deleteFramebuffer(g.__webglFramebuffer[X]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let L=M.textures;for(let X=0,j=L.length;X<j;X++){let G=n.get(L[X]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(L[X])}n.remove(M)}let P=0;function H(){P=0}function V(){let M=P;return M>=r.maxTextures&&Le("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),P+=1,M}function K(M){let g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function Y(M,g){let L=n.get(M);if(M.isVideoTexture&&je(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&L.__version!==M.version){let X=M.image;if(X===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{$(L,M,g);return}}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+g)}function W(M,g){let L=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){$(L,M,g);return}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+g)}function k(M,g){let L=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){$(L,M,g);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+g)}function ee(M,g){let L=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&L.__version!==M.version){te(L,M,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+g)}let pe={[so]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[oo]:i.MIRRORED_REPEAT},he={[Ft]:i.NEAREST,[Vh]:i.NEAREST_MIPMAP_NEAREST,[_s]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},me={[Xh]:i.NEVER,[Jh]:i.ALWAYS,[qh]:i.LESS,[wa]:i.LEQUAL,[Yh]:i.EQUAL,[Ea]:i.GEQUAL,[Zh]:i.GREATER,[$h]:i.NOTEQUAL};function We(M,g){if(g.type===wn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Et||g.magFilter===ko||g.magFilter===_s||g.magFilter===mi||g.minFilter===Et||g.minFilter===ko||g.minFilter===_s||g.minFilter===mi)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,pe[g.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,pe[g.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,pe[g.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,he[g.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ft||g.minFilter!==_s&&g.minFilter!==mi||g.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ve(M,g){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",A));let X=g.source,j=f.get(X);j===void 0&&(j={},f.set(X,j));let G=K(g);if(G!==M.__cacheKey){j[G]===void 0&&(j[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),j[G].usedTimes++;let Ee=j[M.__cacheKey];Ee!==void 0&&(j[M.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(g)),M.__cacheKey=G,M.__webglTexture=j[G].texture}return L}function xt(M,g,L){return Math.floor(Math.floor(M/L)/g)}function gt(M,g,L,X){let G=M.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,L,X,g.data);else{G.sort((ie,le)=>ie.start-le.start);let Ee=0;for(let ie=1;ie<G.length;ie++){let le=G[Ee],ye=G[ie],we=le.start+le.count,ae=xt(ye.start,g.width,4),Ge=xt(le.start,g.width,4);ye.start<=we+1&&ae===Ge&&xt(ye.start+ye.count-1,g.width,4)===ae?le.count=Math.max(le.count,ye.start+ye.count-le.start):(++Ee,G[Ee]=ye)}G.length=Ee+1;let oe=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Fe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ie=0,le=G.length;ie<le;ie++){let ye=G[ie],we=Math.floor(ye.start/4),ae=Math.ceil(ye.count/4),Ge=we%g.width,I=Math.floor(we/g.width),fe=ae,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ge,I,fe,re,L,X,g.data)}M.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Fe)}}function $(M,g,L){let X=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=i.TEXTURE_3D);let j=Ve(M,g),G=g.source;t.bindTexture(X,M.__webglTexture,i.TEXTURE0+L);let Ee=n.get(G);if(G.version!==Ee.__version||j===!0){t.activeTexture(i.TEXTURE0+L);let oe=$e.getPrimaries($e.workingColorSpace),Me=g.colorSpace===Qn?null:$e.getPrimaries(g.colorSpace),Fe=g.colorSpace===Qn||oe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ie=v(g.image,!1,r.maxTextureSize);ie=dt(g,ie);let le=s.convert(g.format,g.colorSpace),ye=s.convert(g.type),we=E(g.internalFormat,le,ye,g.colorSpace,g.isVideoTexture);We(X,g);let ae,Ge=g.mipmaps,I=g.isVideoTexture!==!0,fe=Ee.__version===void 0||j===!0,re=G.dataReady,ge=T(g,ie);if(g.isDepthTexture)we=w(g.format===gi,g.type),fe&&(I?t.texStorage2D(i.TEXTURE_2D,1,we,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,le,ye,null));else if(g.isDataTexture)if(Ge.length>0){I&&fe&&t.texStorage2D(i.TEXTURE_2D,ge,we,Ge[0].width,Ge[0].height);for(let ne=0,Q=Ge.length;ne<Q;ne++)ae=Ge[ne],I?re&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,le,ye,ae.data):t.texImage2D(i.TEXTURE_2D,ne,we,ae.width,ae.height,0,le,ye,ae.data);g.generateMipmaps=!1}else I?(fe&&t.texStorage2D(i.TEXTURE_2D,ge,we,ie.width,ie.height),re&&gt(g,ie,le,ye)):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,le,ye,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){I&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,we,Ge[0].width,Ge[0].height,ie.depth);for(let ne=0,Q=Ge.length;ne<Q;ne++)if(ae=Ge[ne],g.format!==mn)if(le!==null)if(I){if(re)if(g.layerUpdates.size>0){let se=nc(ae.width,ae.height,g.format,g.type);for(let Ue of g.layerUpdates){let ut=ae.data.subarray(Ue*se/ae.data.BYTES_PER_ELEMENT,(Ue+1)*se/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Ue,ae.width,ae.height,1,le,ut)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,ie.depth,le,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,we,ae.width,ae.height,ie.depth,0,ae.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,ie.depth,le,ye,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,we,ae.width,ae.height,ie.depth,0,le,ye,ae.data)}else{I&&fe&&t.texStorage2D(i.TEXTURE_2D,ge,we,Ge[0].width,Ge[0].height);for(let ne=0,Q=Ge.length;ne<Q;ne++)ae=Ge[ne],g.format!==mn?le!==null?I?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,we,ae.width,ae.height,0,ae.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,le,ye,ae.data):t.texImage2D(i.TEXTURE_2D,ne,we,ae.width,ae.height,0,le,ye,ae.data)}else if(g.isDataArrayTexture)if(I){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,we,ie.width,ie.height,ie.depth),re)if(g.layerUpdates.size>0){let ne=nc(ie.width,ie.height,g.format,g.type);for(let Q of g.layerUpdates){let se=ie.data.subarray(Q*ne/ie.data.BYTES_PER_ELEMENT,(Q+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,le,ye,se)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,le,ye,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,le,ye,ie.data);else if(g.isData3DTexture)I?(fe&&t.texStorage3D(i.TEXTURE_3D,ge,we,ie.width,ie.height,ie.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,le,ye,ie.data)):t.texImage3D(i.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,le,ye,ie.data);else if(g.isFramebufferTexture){if(fe)if(I)t.texStorage2D(i.TEXTURE_2D,ge,we,ie.width,ie.height);else{let ne=ie.width,Q=ie.height;for(let se=0;se<ge;se++)t.texImage2D(i.TEXTURE_2D,se,we,ne,Q,0,le,ye,null),ne>>=1,Q>>=1}}else if(Ge.length>0){if(I&&fe){let ne=Se(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ge,we,ne.width,ne.height)}for(let ne=0,Q=Ge.length;ne<Q;ne++)ae=Ge[ne],I?re&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,le,ye,ae):t.texImage2D(i.TEXTURE_2D,ne,we,le,ye,ae);g.generateMipmaps=!1}else if(I){if(fe){let ne=Se(ie);t.texStorage2D(i.TEXTURE_2D,ge,we,ne.width,ne.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,ye,ie)}else t.texImage2D(i.TEXTURE_2D,0,we,le,ye,ie);m(g)&&u(X),Ee.__version=G.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function te(M,g,L){if(g.image.length!==6)return;let X=Ve(M,g),j=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+L);let G=n.get(j);if(j.version!==G.__version||X===!0){t.activeTexture(i.TEXTURE0+L);let Ee=$e.getPrimaries($e.workingColorSpace),oe=g.colorSpace===Qn?null:$e.getPrimaries(g.colorSpace),Me=g.colorSpace===Qn||Ee===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Fe=g.isCompressedTexture||g.image[0].isCompressedTexture,ie=g.image[0]&&g.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!Fe&&!ie?le[Q]=v(g.image[Q],!0,r.maxCubemapSize):le[Q]=ie?g.image[Q].image:g.image[Q],le[Q]=dt(g,le[Q]);let ye=le[0],we=s.convert(g.format,g.colorSpace),ae=s.convert(g.type),Ge=E(g.internalFormat,we,ae,g.colorSpace),I=g.isVideoTexture!==!0,fe=G.__version===void 0||X===!0,re=j.dataReady,ge=T(g,ye);We(i.TEXTURE_CUBE_MAP,g);let ne;if(Fe){I&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ge,ye.width,ye.height);for(let Q=0;Q<6;Q++){ne=le[Q].mipmaps;for(let se=0;se<ne.length;se++){let Ue=ne[se];g.format!==mn?we!==null?I?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se,0,0,Ue.width,Ue.height,we,Ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se,Ge,Ue.width,Ue.height,0,Ue.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se,0,0,Ue.width,Ue.height,we,ae,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se,Ge,Ue.width,Ue.height,0,we,ae,Ue.data)}}}else{if(ne=g.mipmaps,I&&fe){ne.length>0&&ge++;let Q=Se(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Ge,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,we,ae,le[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,le[Q].width,le[Q].height,0,we,ae,le[Q].data);for(let se=0;se<ne.length;se++){let ut=ne[se].image[Q].image;I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se+1,0,0,ut.width,ut.height,we,ae,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se+1,Ge,ut.width,ut.height,0,we,ae,ut.data)}}else{I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,we,ae,le[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ge,we,ae,le[Q]);for(let se=0;se<ne.length;se++){let Ue=ne[se];I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se+1,0,0,we,ae,Ue.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,se+1,Ge,we,ae,Ue.image[Q])}}}m(g)&&u(i.TEXTURE_CUBE_MAP),G.__version=j.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function xe(M,g,L,X,j,G){let Ee=s.convert(L.format,L.colorSpace),oe=s.convert(L.type),Me=E(L.internalFormat,Ee,oe,L.colorSpace),Fe=n.get(g),ie=n.get(L);if(ie.__renderTarget=g,!Fe.__hasExternalTextures){let le=Math.max(1,g.width>>G),ye=Math.max(1,g.height>>G);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,G,Me,le,ye,g.depth,0,Ee,oe,null):t.texImage2D(j,G,Me,le,ye,0,Ee,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),At(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,ie.__webglTexture,0,C(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,ie.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(M,g,L){if(i.bindRenderbuffer(i.RENDERBUFFER,M),g.depthBuffer){let X=g.depthTexture,j=X&&X.isDepthTexture?X.type:null,G=w(g.stencilBuffer,j),Ee=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;At(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),G,g.width,g.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,M)}else{let X=g.textures;for(let j=0;j<X.length;j++){let G=X[j],Ee=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),Me=E(G.internalFormat,Ee,oe,G.colorSpace);At(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(g),Me,g.width,g.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(g),Me,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Me,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(M,g,L){let X=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(g.depthTexture);if(j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),We(i.TEXTURE_CUBE_MAP,g.depthTexture);let Fe=s.convert(g.depthTexture.format),ie=s.convert(g.depthTexture.type),le;g.depthTexture.format===An?le=i.DEPTH_COMPONENT24:g.depthTexture.format===gi&&(le=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,le,g.width,g.height,0,Fe,ie,null)}}else Y(g.depthTexture,0);let G=j.__webglTexture,Ee=C(g),oe=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,Me=g.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===An)At(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,oe,G,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,Me,oe,G,0);else if(g.depthTexture.format===gi)At(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,oe,G,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,Me,oe,G,0);else throw new Error("Unknown depthTexture format")}function Ke(M){let g=n.get(M),L=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){let X=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){let j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=X}if(M.depthTexture&&!g.__autoAllocateDepthBuffer)if(L)for(let X=0;X<6;X++)be(g.__webglFramebuffer[X],M,X);else{let X=M.texture.mipmaps;X&&X.length>0?be(g.__webglFramebuffer[0],M,0):be(g.__webglFramebuffer,M,0)}else if(L){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=i.createRenderbuffer(),ke(g.__webglDepthbuffer[X],M,!1);else{let j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,G)}}else{let X=M.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ke(g.__webglDepthbuffer,M,!1);else{let j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(M,g,L){let X=n.get(M);g!==void 0&&xe(X.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Ke(M)}function Je(M){let g=M.texture,L=n.get(M),X=n.get(g);M.addEventListener("dispose",R);let j=M.textures,G=M.isWebGLCubeRenderTarget===!0,Ee=j.length>1;if(Ee||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=g.version,o.memory.textures++),G){L.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[oe]=[];for(let Me=0;Me<g.mipmaps.length;Me++)L.__webglFramebuffer[oe][Me]=i.createFramebuffer()}else L.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let oe=0;oe<g.mipmaps.length;oe++)L.__webglFramebuffer[oe]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let oe=0,Me=j.length;oe<Me;oe++){let Fe=n.get(j[oe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&At(M)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){let Me=j[oe];L.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[oe]);let Fe=s.convert(Me.format,Me.colorSpace),ie=s.convert(Me.type),le=E(Me.internalFormat,Fe,ie,Me.colorSpace,M.isXRRenderTarget===!0),ye=C(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,le,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,L.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(L.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),We(i.TEXTURE_CUBE_MAP,g);for(let oe=0;oe<6;oe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)xe(L.__webglFramebuffer[oe][Me],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me);else xe(L.__webglFramebuffer[oe],M,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let oe=0,Me=j.length;oe<Me;oe++){let Fe=j[oe],ie=n.get(Fe),le=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(le=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,ie.__webglTexture),We(le,Fe),xe(L.__webglFramebuffer,M,Fe,i.COLOR_ATTACHMENT0+oe,le,0),m(Fe)&&u(le)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(oe=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,X.__webglTexture),We(oe,g),g.mipmaps&&g.mipmaps.length>0)for(let Me=0;Me<g.mipmaps.length;Me++)xe(L.__webglFramebuffer[Me],M,g,i.COLOR_ATTACHMENT0,oe,Me);else xe(L.__webglFramebuffer,M,g,i.COLOR_ATTACHMENT0,oe,0);m(g)&&u(oe),t.unbindTexture()}M.depthBuffer&&Ke(M)}function it(M){let g=M.textures;for(let L=0,X=g.length;L<X;L++){let j=g[L];if(m(j)){let G=S(M),Ee=n.get(j).__webglTexture;t.bindTexture(G,Ee),u(G),t.unbindTexture()}}}let ct=[],He=[];function Ct(M){if(M.samples>0){if(At(M)===!1){let g=M.textures,L=M.width,X=M.height,j=i.COLOR_BUFFER_BIT,G=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(M),oe=g.length>1;if(oe)for(let Fe=0;Fe<g.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let Me=M.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Fe=0;Fe<g.length;Fe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);let ie=n.get(g[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,L,X,0,0,L,X,j,i.NEAREST),l===!0&&(ct.length=0,He.length=0,ct.push(i.COLOR_ATTACHMENT0+Fe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ct.push(G),He.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Fe=0;Fe<g.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Fe]);let ie=n.get(g[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let g=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function C(M){return Math.min(r.maxSamples,M.samples)}function At(M){let g=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function je(M){let g=o.render.frame;h.get(M)!==g&&(h.set(M,g),M.update())}function dt(M,g){let L=M.colorSpace,X=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==Ii&&L!==Qn&&($e.getTransfer(L)===nt?(X!==mn||j!==hn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",L)),g}function Se(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=ee,this.rebindTextures=Dt,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function v0(i,e){function t(n,r=Qn){let s,o=$e.getTransfer(r);if(n===hn)return i.UNSIGNED_BYTE;if(n===Vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hl)return i.BYTE;if(n===Gl)return i.SHORT;if(n===Er)return i.UNSIGNED_SHORT;if(n===zo)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===ql)return i.ALPHA;if(n===Yl)return i.RGB;if(n===mn)return i.RGBA;if(n===An)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===Go)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===Wo)return i.RG_INTEGER;if(n===Xo)return i.RGBA_INTEGER;if(n===xs||n===vs||n===ys||n===bs)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Yo||n===Zo||n===$o)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===Ko||n===Qo||n===jo||n===ea||n===ta||n===na)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Jo||n===Ko)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qo)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===jo)return s.COMPRESSED_R11_EAC;if(n===ea)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return s.COMPRESSED_RG11_EAC;if(n===na)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ia||n===ra||n===sa||n===oa||n===aa||n===la||n===ca||n===ha||n===da||n===ua||n===fa||n===pa||n===ma||n===ga)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ia)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ua)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===xa||n===va)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===_a)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ya||n===ba||n===Ma||n===Sa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ya)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b0=`
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

}`,gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new hs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ln({vertexShader:y0,fragmentShader:b0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_c=class extends $n{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,_=null,v=typeof XRWebGLBinding<"u",m=new gc,u={},S=t.getContextAttributes(),E=null,w=null,T=[],A=[],R=new Oe,O=null,y=new Ht;y.viewport=new Tt;let b=new Ht;b.viewport=new Tt;let P=[y,b],H=new Ro,V=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=T[$];return te===void 0&&(te=new br,T[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=T[$];return te===void 0&&(te=new br,T[$]=te),te.getGripSpace()},this.getHand=function($){let te=T[$];return te===void 0&&(te=new br,T[$]=te),te.getHandSpace()};function Y($){let te=A.indexOf($.inputSource);if(te===-1)return;let xe=T[te];xe!==void 0&&(xe.update($.inputSource,$.frame,c||o),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",k);for(let $=0;$<T.length;$++){let te=A[$];te!==null&&(A[$]=null,T[$].disconnect(te))}V=null,K=null,m.reset();for(let $ in u)delete u[$];e.setRenderTarget(E),p=null,f=null,d=null,r=null,w=null,gt.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",W),r.addEventListener("inputsourceschange",k),S.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ke=null,be=null;S.depth&&(be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=S.stencil?gi:An,ke=S.stencil?Tr:Sn);let Ke={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ke),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new an(f.textureWidth,f.textureHeight,{format:mn,type:hn,depthTexture:new di(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new an(p.framebufferWidth,p.framebufferHeight,{format:mn,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),gt.setContext(r),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k($){for(let te=0;te<$.removed.length;te++){let xe=$.removed[te],ke=A.indexOf(xe);ke>=0&&(A[ke]=null,T[ke].disconnect(xe))}for(let te=0;te<$.added.length;te++){let xe=$.added[te],ke=A.indexOf(xe);if(ke===-1){for(let Ke=0;Ke<T.length;Ke++)if(Ke>=A.length){A.push(xe),ke=Ke;break}else if(A[Ke]===null){A[Ke]=xe,ke=Ke;break}if(ke===-1)break}let be=T[ke];be&&be.connect(xe)}}let ee=new N,pe=new N;function he($,te,xe){ee.setFromMatrixPosition(te.matrixWorld),pe.setFromMatrixPosition(xe.matrixWorld);let ke=ee.distanceTo(pe),be=te.projectionMatrix.elements,Ke=xe.projectionMatrix.elements,Dt=be[14]/(be[10]-1),Je=be[14]/(be[10]+1),it=(be[9]+1)/be[5],ct=(be[9]-1)/be[5],He=(be[8]-1)/be[0],Ct=(Ke[8]+1)/Ke[0],C=Dt*He,At=Dt*Ct,je=ke/(-He+Ct),dt=je*-He;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(dt),$.translateZ(je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Se=Dt+je,M=Je+je,g=C-dt,L=At+(ke-dt),X=it*Je/M*Se,j=ct*Je/M*Se;$.projectionMatrix.makePerspective(g,L,X,j,Se,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function me($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let te=$.near,xe=$.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),H.near=b.near=y.near=te,H.far=b.far=y.far=xe,(V!==H.near||K!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),V=H.near,K=H.far),H.layers.mask=$.layers.mask|6,y.layers.mask=H.layers.mask&3,b.layers.mask=H.layers.mask&5;let ke=$.parent,be=H.cameras;me(H,ke);for(let Ke=0;Ke<be.length;Ke++)me(be[Ke],ke);be.length===2?he(H,y,b):H.projectionMatrix.copy(y.projectionMatrix),We($,H,ke)};function We($,te,xe){xe===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=gr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function($){return u[$]};let Ve=null;function xt($,te){if(h=te.getViewerPose(c||o),_=te,h!==null){let xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let ke=!1;xe.length!==H.cameras.length&&(H.cameras.length=0,ke=!0);for(let Je=0;Je<xe.length;Je++){let it=xe[Je],ct=null;if(p!==null)ct=p.getViewport(it);else{let Ct=d.getViewSubImage(f,it);ct=Ct.viewport,Je===0&&(e.setRenderTargetTextures(w,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(w))}let He=P[Je];He===void 0&&(He=new Ht,He.layers.enable(Je),He.viewport=new Tt,P[Je]=He),He.matrix.fromArray(it.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(it.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ct.x,ct.y,ct.width,ct.height),Je===0&&(H.matrix.copy(He.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ke===!0&&H.cameras.push(He)}let be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let Je=d.getDepthInformation(xe[0]);Je&&Je.isValid&&Je.texture&&m.init(Je,r.renderState)}if(be&&be.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Je=0;Je<xe.length;Je++){let it=xe[Je].camera;if(it){let ct=u[it];ct||(ct=new hs,u[it]=ct);let He=d.getCameraImage(it);ct.sourceTexture=He}}}}for(let xe=0;xe<T.length;xe++){let ke=A[xe],be=T[xe];ke!==null&&be!==void 0&&be.update(ke,te,c||o)}Ve&&Ve($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}let gt=new wd;gt.setAnimationLoop(xt),this.setAnimationLoop=function($){Ve=$},this.dispose=function(){}}},ki=new Li,M0=new bt;function S0(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,jl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,S,E,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,w)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,S,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Zt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Zt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let S=e.get(u),E=S.envMap,w=S.envMapRotation;E&&(m.envMap.value=E,ki.copy(w),ki.x*=-1,ki.y*=-1,ki.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(M0.makeRotationFromEuler(ki)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,S,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*S,m.scale.value=E*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,S){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Zt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let S=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function w0(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){let w=E.program;n.uniformBlockBinding(S,w)}function c(S,E){let w=r[S.id];w===void 0&&(_(S),w=h(S),r[S.id]=w,S.addEventListener("dispose",m));let T=E.program;n.updateUBOMapping(S,T);let A=e.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function h(S){let E=d();S.__bindingPointIndex=E;let w=i.createBuffer(),T=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let E=r[S.id],w=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,R=w.length;A<R;A++){let O=Array.isArray(w[A])?w[A]:[w[A]];for(let y=0,b=O.length;y<b;y++){let P=O[y];if(p(P,A,y,T)===!0){let H=P.__offset,V=Array.isArray(P.value)?P.value:[P.value],K=0;for(let Y=0;Y<V.length;Y++){let W=V[Y],k=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,H+K,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,K),K+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,E,w,T){let A=S.value,R=E+"_"+w;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{let O=T[R];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return T[R]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function _(S){let E=S.uniforms,w=0,T=16;for(let R=0,O=E.length;R<O;R++){let y=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,P=y.length;b<P;b++){let H=y[b],V=Array.isArray(H.value)?H.value:[H.value];for(let K=0,Y=V.length;K<Y;K++){let W=V[K],k=v(W),ee=w%T,pe=ee%k.boundary,he=ee+pe;w+=pe,he!==0&&T-he<k.storage&&(w+=T-he),H.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=k.storage}}}let A=w%T;return A>0&&(w+=T-A),S.__size=w,S.__cache={},this}function v(S){let E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){let E=S.target;E.removeEventListener("dispose",m);let w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function u(){for(let S in r)i.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}var E0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function T0(){return Ln===null&&(Ln=new mo(E0,16,16,Ui,Pn),Ln.name="DFG_LUT",Ln.minFilter=Et,Ln.magFilter=Et,Ln.wrapS=Cn,Ln.wrapT=Cn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var Ra=class{constructor(e={}){let{canvas:t=Kh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=hn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let v=p,m=new Set([Xo,Wo,Go]),u=new Set([hn,Sn,Er,Tr,Vo,Ho]),S=new Uint32Array(4),E=new Int32Array(4),w=null,T=null,A=[],R=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=Vt;let P=0,H=0,V=null,K=-1,Y=null,W=new Tt,k=new Tt,ee=null,pe=new Ze(0),he=0,me=t.width,We=t.height,Ve=1,xt=null,gt=null,$=new Tt(0,0,me,We),te=new Tt(0,0,me,We),xe=!1,ke=new os,be=!1,Ke=!1,Dt=new bt,Je=new N,it=new Tt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function Ct(){return V===null?Ve:1}let C=n;function At(x,D){return t.getContext(x,D)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",rt,!1),C===null){let D="webgl2";if(C=At(D,x),C===null)throw At(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Pe("WebGLRenderer: "+x.message),x}let je,dt,Se,M,g,L,X,j,G,Ee,oe,Me,Fe,ie,le,ye,we,ae,Ge,I,fe,re,ge,ne;function Q(){je=new Dm(C),je.init(),re=new v0(C,je),dt=new wm(C,je,e,re),Se=new _0(C,je),dt.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),M=new Um(C),g=new n0,L=new x0(C,je,Se,g,dt,re,M),X=new Tm(y),j=new Lm(y),G=new ku(C),ge=new Mm(C,G),Ee=new Nm(C,G,M,ge),oe=new Bm(C,Ee,G,M),Ge=new Om(C,dt,L),ye=new Em(g),Me=new t0(y,X,j,je,dt,ge,ye),Fe=new S0(y,g),ie=new r0,le=new h0(je),ae=new bm(y,X,j,Se,oe,_,l),we=new m0(y,oe,dt),ne=new w0(C,M,dt,Se),I=new Sm(C,je,M),fe=new Fm(C,je,M),M.programs=Me.programs,y.capabilities=dt,y.extensions=je,y.properties=g,y.renderLists=ie,y.shadowMap=we,y.state=Se,y.info=M}Q(),v!==hn&&(O=new zm(v,t.width,t.height,r,s));let se=new _c(y,C);this.xr=se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(x){x!==void 0&&(Ve=x,this.setSize(me,We,!1))},this.getSize=function(x){return x.set(me,We)},this.setSize=function(x,D,B=!0){if(se.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}me=x,We=D,t.width=Math.floor(x*Ve),t.height=Math.floor(D*Ve),B===!0&&(t.style.width=x+"px",t.style.height=D+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(me*Ve,We*Ve).floor()},this.setDrawingBufferSize=function(x,D,B){me=x,We=D,Ve=B,t.width=Math.floor(x*B),t.height=Math.floor(D*B),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(v===hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(W)},this.getViewport=function(x){return x.copy($)},this.setViewport=function(x,D,B,U){x.isVector4?$.set(x.x,x.y,x.z,x.w):$.set(x,D,B,U),Se.viewport(W.copy($).multiplyScalar(Ve).round())},this.getScissor=function(x){return x.copy(te)},this.setScissor=function(x,D,B,U){x.isVector4?te.set(x.x,x.y,x.z,x.w):te.set(x,D,B,U),Se.scissor(k.copy(te).multiplyScalar(Ve).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(x){Se.setScissorTest(xe=x)},this.setOpaqueSort=function(x){xt=x},this.setTransparentSort=function(x){gt=x},this.getClearColor=function(x){return x.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,B=!0){let U=0;if(x){let F=!1;if(V!==null){let ce=V.texture.format;F=m.has(ce)}if(F){let ce=V.texture.type,_e=u.has(ce),ue=ae.getClearColor(),ve=ae.getClearAlpha(),Te=ue.r,Ne=ue.g,Ce=ue.b;_e?(S[0]=Te,S[1]=Ne,S[2]=Ce,S[3]=ve,C.clearBufferuiv(C.COLOR,0,S)):(E[0]=Te,E[1]=Ne,E[2]=Ce,E[3]=ve,C.clearBufferiv(C.COLOR,0,E))}else U|=C.COLOR_BUFFER_BIT}D&&(U|=C.DEPTH_BUFFER_BIT),B&&(U|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",rt,!1),ae.dispose(),ie.dispose(),le.dispose(),g.dispose(),X.dispose(),j.dispose(),oe.dispose(),ge.dispose(),ne.dispose(),Me.dispose(),se.dispose(),se.removeEventListener("sessionstart",Sc),se.removeEventListener("sessionend",wc),xi.stop()};function Ue(x){x.preventDefault(),$r("WebGLRenderer: Context Lost."),b=!0}function ut(){$r("WebGLRenderer: Context Restored."),b=!1;let x=M.autoReset,D=we.enabled,B=we.autoUpdate,U=we.needsUpdate,F=we.type;Q(),M.autoReset=x,we.enabled=D,we.autoUpdate=B,we.needsUpdate=U,we.type=F}function rt(x){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function En(x){let D=x.target;D.removeEventListener("dispose",En),Nn(D)}function Nn(x){Od(x),g.remove(x)}function Od(x){let D=g.get(x).programs;D!==void 0&&(D.forEach(function(B){Me.releaseProgram(B)}),x.isShaderMaterial&&Me.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,B,U,F,ce){D===null&&(D=ct);let _e=F.isMesh&&F.matrixWorld.determinant()<0,ue=kd(x,D,B,U,F);Se.setMaterial(U,_e);let ve=B.index,Te=1;if(U.wireframe===!0){if(ve=Ee.getWireframeAttribute(B),ve===void 0)return;Te=2}let Ne=B.drawRange,Ce=B.attributes.position,Xe=Ne.start*Te,lt=(Ne.start+Ne.count)*Te;ce!==null&&(Xe=Math.max(Xe,ce.start*Te),lt=Math.min(lt,(ce.start+ce.count)*Te)),ve!==null?(Xe=Math.max(Xe,0),lt=Math.min(lt,ve.count)):Ce!=null&&(Xe=Math.max(Xe,0),lt=Math.min(lt,Ce.count));let Mt=lt-Xe;if(Mt<0||Mt===1/0)return;ge.setup(F,U,ue,B,ve);let St,ht=I;if(ve!==null&&(St=G.get(ve),ht=fe,ht.setIndex(St)),F.isMesh)U.wireframe===!0?(Se.setLineWidth(U.wireframeLinewidth*Ct()),ht.setMode(C.LINES)):ht.setMode(C.TRIANGLES);else if(F.isLine){let Ae=U.linewidth;Ae===void 0&&(Ae=1),Se.setLineWidth(Ae*Ct()),F.isLineSegments?ht.setMode(C.LINES):F.isLineLoop?ht.setMode(C.LINE_LOOP):ht.setMode(C.LINE_STRIP)}else F.isPoints?ht.setMode(C.POINTS):F.isSprite&&ht.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)mr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))ht.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ae=F._multiDrawStarts,st=F._multiDrawCounts,Qe=F._multiDrawCount,en=ve?G.get(ve).bytesPerElement:1,Hi=g.get(U).currentProgram.getUniforms();for(let tn=0;tn<Qe;tn++)Hi.setValue(C,"_gl_DrawID",tn),ht.render(Ae[tn]/en,st[tn])}else if(F.isInstancedMesh)ht.renderInstances(Xe,Mt,F.count);else if(B.isInstancedBufferGeometry){let Ae=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,st=Math.min(B.instanceCount,Ae);ht.renderInstances(Xe,Mt,st)}else ht.render(Xe,Mt)};function Mc(x,D,B){x.transparent===!0&&x.side===Rn&&x.forceSinglePass===!1?(x.side=Zt,x.needsUpdate=!0,As(x,D,B),x.side=Zn,x.needsUpdate=!0,As(x,D,B),x.side=Rn):As(x,D,B)}this.compile=function(x,D,B=null){B===null&&(B=x),T=le.get(B),T.init(D),R.push(T),B.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),x!==B&&x.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(T.pushLight(F),F.castShadow&&T.pushShadow(F))}),T.setupLights();let U=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ce=F.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){let ue=ce[_e];Mc(ue,B,F),U.add(ue)}else Mc(ce,B,F),U.add(ce)}),T=R.pop(),U},this.compileAsync=function(x,D,B=null){let U=this.compile(x,D,B);return new Promise(F=>{function ce(){if(U.forEach(function(_e){g.get(_e).currentProgram.isReady()&&U.delete(_e)}),U.size===0){F(x);return}setTimeout(ce,10)}je.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Za=null;function Bd(x){Za&&Za(x)}function Sc(){xi.stop()}function wc(){xi.start()}let xi=new wd;xi.setAnimationLoop(Bd),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(x){Za=x,se.setAnimationLoop(x),x===null?xi.stop():xi.start()},se.addEventListener("sessionstart",Sc),se.addEventListener("sessionend",wc),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;let B=se.enabled===!0&&se.isPresenting===!0,U=O!==null&&(V===null||B)&&O.begin(y,V);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(D),D=se.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,D,V),T=le.get(x,R.length),T.init(D),R.push(T),Dt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ke.setFromProjectionMatrix(Dt,bn,D.reversedDepth),Ke=this.localClippingEnabled,be=ye.init(this.clippingPlanes,Ke),w=ie.get(x,A.length),w.init(),A.push(w),se.enabled===!0&&se.isPresenting===!0){let _e=y.xr.getDepthSensingMesh();_e!==null&&$a(_e,D,-1/0,y.sortObjects)}$a(x,D,0,y.sortObjects),w.finish(),y.sortObjects===!0&&w.sort(xt,gt),He=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,He&&ae.addToRenderList(w,x),this.info.render.frame++,be===!0&&ye.beginShadows();let F=T.state.shadowsArray;if(we.render(F,x,D),be===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(U&&O.hasRenderPass())===!1){let _e=w.opaque,ue=w.transmissive;if(T.setupLights(),D.isArrayCamera){let ve=D.cameras;if(ue.length>0)for(let Te=0,Ne=ve.length;Te<Ne;Te++){let Ce=ve[Te];Tc(_e,ue,x,Ce)}He&&ae.render(x);for(let Te=0,Ne=ve.length;Te<Ne;Te++){let Ce=ve[Te];Ec(w,x,Ce,Ce.viewport)}}else ue.length>0&&Tc(_e,ue,x,D),He&&ae.render(x),Ec(w,x,D)}V!==null&&H===0&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),U&&O.end(y),x.isScene===!0&&x.onAfterRender(y,x,D),ge.resetDefaultState(),K=-1,Y=null,R.pop(),R.length>0?(T=R[R.length-1],be===!0&&ye.setGlobalState(y.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?w=A[A.length-1]:w=null};function $a(x,D,B,U){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)T.pushLight(x),x.castShadow&&T.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ke.intersectsSprite(x)){U&&it.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Dt);let _e=oe.update(x),ue=x.material;ue.visible&&w.push(x,_e,ue,B,it.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ke.intersectsObject(x))){let _e=oe.update(x),ue=x.material;if(U&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),it.copy(x.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),it.copy(_e.boundingSphere.center)),it.applyMatrix4(x.matrixWorld).applyMatrix4(Dt)),Array.isArray(ue)){let ve=_e.groups;for(let Te=0,Ne=ve.length;Te<Ne;Te++){let Ce=ve[Te],Xe=ue[Ce.materialIndex];Xe&&Xe.visible&&w.push(x,_e,Xe,B,it.z,Ce)}}else ue.visible&&w.push(x,_e,ue,B,it.z,null)}}let ce=x.children;for(let _e=0,ue=ce.length;_e<ue;_e++)$a(ce[_e],D,B,U)}function Ec(x,D,B,U){let{opaque:F,transmissive:ce,transparent:_e}=x;T.setupLightsView(B),be===!0&&ye.setGlobalState(y.clippingPlanes,B),U&&Se.viewport(W.copy(U)),F.length>0&&Cs(F,D,B),ce.length>0&&Cs(ce,D,B),_e.length>0&&Cs(_e,D,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Tc(x,D,B,U){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[U.id]===void 0){let Xe=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[U.id]=new an(1,1,{generateMipmaps:!0,type:Xe?Pn:hn,minFilter:mi,samples:dt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let ce=T.state.transmissionRenderTarget[U.id],_e=U.viewport||W;ce.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);let ue=y.getRenderTarget(),ve=y.getActiveCubeFace(),Te=y.getActiveMipmapLevel();y.setRenderTarget(ce),y.getClearColor(pe),he=y.getClearAlpha(),he<1&&y.setClearColor(16777215,.5),y.clear(),He&&ae.render(B);let Ne=y.toneMapping;y.toneMapping=Mn;let Ce=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),T.setupLightsView(U),be===!0&&ye.setGlobalState(y.clippingPlanes,U),Cs(x,B,U),L.updateMultisampleRenderTarget(ce),L.updateRenderTargetMipmap(ce),je.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let lt=0,Mt=D.length;lt<Mt;lt++){let St=D[lt],{object:ht,geometry:Ae,material:st,group:Qe}=St;if(st.side===Rn&&ht.layers.test(U.layers)){let en=st.side;st.side=Zt,st.needsUpdate=!0,Cc(ht,B,U,Ae,st,Qe),st.side=en,st.needsUpdate=!0,Xe=!0}}Xe===!0&&(L.updateMultisampleRenderTarget(ce),L.updateRenderTargetMipmap(ce))}y.setRenderTarget(ue,ve,Te),y.setClearColor(pe,he),Ce!==void 0&&(U.viewport=Ce),y.toneMapping=Ne}function Cs(x,D,B){let U=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ce=x.length;F<ce;F++){let _e=x[F],{object:ue,geometry:ve,group:Te}=_e,Ne=_e.material;Ne.allowOverride===!0&&U!==null&&(Ne=U),ue.layers.test(B.layers)&&Cc(ue,D,B,ve,Ne,Te)}}function Cc(x,D,B,U,F,ce){x.onBeforeRender(y,D,B,U,F,ce),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(y,D,B,U,x,ce),F.transparent===!0&&F.side===Rn&&F.forceSinglePass===!1?(F.side=Zt,F.needsUpdate=!0,y.renderBufferDirect(B,D,U,F,x,ce),F.side=Zn,F.needsUpdate=!0,y.renderBufferDirect(B,D,U,F,x,ce),F.side=Rn):y.renderBufferDirect(B,D,U,F,x,ce),x.onAfterRender(y,D,B,U,F,ce)}function As(x,D,B){D.isScene!==!0&&(D=ct);let U=g.get(x),F=T.state.lights,ce=T.state.shadowsArray,_e=F.state.version,ue=Me.getParameters(x,F.state,ce,D,B),ve=Me.getProgramCacheKey(ue),Te=U.programs;U.environment=x.isMeshStandardMaterial?D.environment:null,U.fog=D.fog,U.envMap=(x.isMeshStandardMaterial?j:X).get(x.envMap||U.environment),U.envMapRotation=U.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Te===void 0&&(x.addEventListener("dispose",En),Te=new Map,U.programs=Te);let Ne=Te.get(ve);if(Ne!==void 0){if(U.currentProgram===Ne&&U.lightsStateVersion===_e)return Rc(x,ue),Ne}else ue.uniforms=Me.getUniforms(x),x.onBeforeCompile(ue,y),Ne=Me.acquireProgram(ue,ve),Te.set(ve,Ne),U.uniforms=ue.uniforms;let Ce=U.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=ye.uniform),Rc(x,ue),U.needsLights=Vd(x),U.lightsStateVersion=_e,U.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),U.currentProgram=Ne,U.uniformsList=null,Ne}function Ac(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=Ar.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Rc(x,D){let B=g.get(x);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function kd(x,D,B,U,F){D.isScene!==!0&&(D=ct),L.resetTextureUnits();let ce=D.fog,_e=U.isMeshStandardMaterial?D.environment:null,ue=V===null?y.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ii,ve=(U.isMeshStandardMaterial?j:X).get(U.envMap||_e),Te=U.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Ce=!!B.morphAttributes.position,Xe=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color,Mt=Mn;U.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Mt=y.toneMapping);let St=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ht=St!==void 0?St.length:0,Ae=g.get(U),st=T.state.lights;if(be===!0&&(Ke===!0||x!==Y)){let Xt=x===Y&&U.id===K;ye.setState(U,x,Xt)}let Qe=!1;U.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==st.state.version||Ae.outputColorSpace!==ue||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==ve||U.fog===!0&&Ae.fog!==ce||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ye.numPlanes||Ae.numIntersection!==ye.numIntersection)||Ae.vertexAlphas!==Te||Ae.vertexTangents!==Ne||Ae.morphTargets!==Ce||Ae.morphNormals!==Xe||Ae.morphColors!==lt||Ae.toneMapping!==Mt||Ae.morphTargetsCount!==ht)&&(Qe=!0):(Qe=!0,Ae.__version=U.version);let en=Ae.currentProgram;Qe===!0&&(en=As(U,D,F));let Hi=!1,tn=!1,Nr=!1,ft=en.getUniforms(),Jt=Ae.uniforms;if(Se.useProgram(en.program)&&(Hi=!0,tn=!0,Nr=!0),U.id!==K&&(K=U.id,tn=!0),Hi||Y!==x){Se.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ft.setValue(C,"projectionMatrix",x.projectionMatrix),ft.setValue(C,"viewMatrix",x.matrixWorldInverse);let Kt=ft.map.cameraPosition;Kt!==void 0&&Kt.setValue(C,Je.setFromMatrixPosition(x.matrixWorld)),dt.logarithmicDepthBuffer&&ft.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ft.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),Y!==x&&(Y=x,tn=!0,Nr=!0)}if(Ae.needsLights&&(st.state.directionalShadowMap.length>0&&ft.setValue(C,"directionalShadowMap",st.state.directionalShadowMap,L),st.state.spotShadowMap.length>0&&ft.setValue(C,"spotShadowMap",st.state.spotShadowMap,L),st.state.pointShadowMap.length>0&&ft.setValue(C,"pointShadowMap",st.state.pointShadowMap,L)),F.isSkinnedMesh){ft.setOptional(C,F,"bindMatrix"),ft.setOptional(C,F,"bindMatrixInverse");let Xt=F.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),ft.setValue(C,"boneTexture",Xt.boneTexture,L))}F.isBatchedMesh&&(ft.setOptional(C,F,"batchingTexture"),ft.setValue(C,"batchingTexture",F._matricesTexture,L),ft.setOptional(C,F,"batchingIdTexture"),ft.setValue(C,"batchingIdTexture",F._indirectTexture,L),ft.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&ft.setValue(C,"batchingColorTexture",F._colorsTexture,L));let dn=B.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Ge.update(F,B,en),(tn||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,ft.setValue(C,"receiveShadow",F.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Jt.envMap.value=ve,Jt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&D.environment!==null&&(Jt.envMapIntensity.value=D.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=T0()),tn&&(ft.setValue(C,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&zd(Jt,Nr),ce&&U.fog===!0&&Fe.refreshFogUniforms(Jt,ce),Fe.refreshMaterialUniforms(Jt,U,Ve,We,T.state.transmissionRenderTarget[x.id]),Ar.upload(C,Ac(Ae),Jt,L)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Ar.upload(C,Ac(Ae),Jt,L),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ft.setValue(C,"center",F.center),ft.setValue(C,"modelViewMatrix",F.modelViewMatrix),ft.setValue(C,"normalMatrix",F.normalMatrix),ft.setValue(C,"modelMatrix",F.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let Xt=U.uniformsGroups;for(let Kt=0,Ja=Xt.length;Kt<Ja;Kt++){let vi=Xt[Kt];ne.update(vi,en),ne.bind(vi,en)}}return en}function zd(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function Vd(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(x,D,B){let U=g.get(x);U.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),g.get(x.texture).__webglTexture=D,g.get(x.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:B,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){let B=g.get(x);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0};let Hd=C.createFramebuffer();this.setRenderTarget=function(x,D=0,B=0){V=x,P=D,H=B;let U=null,F=!1,ce=!1;if(x){let ue=g.get(x);if(ue.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(C.FRAMEBUFFER,ue.__webglFramebuffer),W.copy(x.viewport),k.copy(x.scissor),ee=x.scissorTest,Se.viewport(W),Se.scissor(k),Se.setScissorTest(ee),K=-1;return}else if(ue.__webglFramebuffer===void 0)L.setupRenderTarget(x);else if(ue.__hasExternalTextures)L.rebindTextures(x,g.get(x.texture).__webglTexture,g.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ne=x.depthTexture;if(ue.__boundDepthTexture!==Ne){if(Ne!==null&&g.has(Ne)&&(x.width!==Ne.image.width||x.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(x)}}let ve=x.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ce=!0);let Te=g.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Te[D])?U=Te[D][B]:U=Te[D],F=!0):x.samples>0&&L.useMultisampledRTT(x)===!1?U=g.get(x).__webglMultisampledFramebuffer:Array.isArray(Te)?U=Te[B]:U=Te,W.copy(x.viewport),k.copy(x.scissor),ee=x.scissorTest}else W.copy($).multiplyScalar(Ve).floor(),k.copy(te).multiplyScalar(Ve).floor(),ee=xe;if(B!==0&&(U=Hd),Se.bindFramebuffer(C.FRAMEBUFFER,U)&&Se.drawBuffers(x,U),Se.viewport(W),Se.scissor(k),Se.setScissorTest(ee),F){let ue=g.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue.__webglTexture,B)}else if(ce){let ue=D;for(let ve=0;ve<x.textures.length;ve++){let Te=g.get(x.textures[ve]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ve,Te.__webglTexture,B,ue)}}else if(x!==null&&B!==0){let ue=g.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ue.__webglTexture,B)}K=-1},this.readRenderTargetPixels=function(x,D,B,U,F,ce,_e,ue=0){if(!(x&&x.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve){Se.bindFramebuffer(C.FRAMEBUFFER,ve);try{let Te=x.textures[ue],Ne=Te.format,Ce=Te.type;if(!dt.textureFormatReadable(Ne)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ce)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-U&&B>=0&&B<=x.height-F&&(x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ue),C.readPixels(D,B,U,F,re.convert(Ne),re.convert(Ce),ce))}finally{let Te=V!==null?g.get(V).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(x,D,B,U,F,ce,_e,ue=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=g.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_e!==void 0&&(ve=ve[_e]),ve)if(D>=0&&D<=x.width-U&&B>=0&&B<=x.height-F){Se.bindFramebuffer(C.FRAMEBUFFER,ve);let Te=x.textures[ue],Ne=Te.format,Ce=Te.type;if(!dt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.bufferData(C.PIXEL_PACK_BUFFER,ce.byteLength,C.STREAM_READ),x.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ue),C.readPixels(D,B,U,F,re.convert(Ne),re.convert(Ce),0);let lt=V!==null?g.get(V).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,lt);let Mt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Qh(C,Mt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ce),C.deleteBuffer(Xe),C.deleteSync(Mt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,B=0){let U=Math.pow(2,-B),F=Math.floor(x.image.width*U),ce=Math.floor(x.image.height*U),_e=D!==null?D.x:0,ue=D!==null?D.y:0;L.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,_e,ue,F,ce),Se.unbindTexture()};let Gd=C.createFramebuffer(),Wd=C.createFramebuffer();this.copyTextureToTexture=function(x,D,B=null,U=null,F=0,ce=null){ce===null&&(F!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=F,F=0):ce=0);let _e,ue,ve,Te,Ne,Ce,Xe,lt,Mt,St=x.isCompressedTexture?x.mipmaps[ce]:x.image;if(B!==null)_e=B.max.x-B.min.x,ue=B.max.y-B.min.y,ve=B.isBox3?B.max.z-B.min.z:1,Te=B.min.x,Ne=B.min.y,Ce=B.isBox3?B.min.z:0;else{let dn=Math.pow(2,-F);_e=Math.floor(St.width*dn),ue=Math.floor(St.height*dn),x.isDataArrayTexture?ve=St.depth:x.isData3DTexture?ve=Math.floor(St.depth*dn):ve=1,Te=0,Ne=0,Ce=0}U!==null?(Xe=U.x,lt=U.y,Mt=U.z):(Xe=0,lt=0,Mt=0);let ht=re.convert(D.format),Ae=re.convert(D.type),st;D.isData3DTexture?(L.setTexture3D(D,0),st=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(L.setTexture2DArray(D,0),st=C.TEXTURE_2D_ARRAY):(L.setTexture2D(D,0),st=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let Qe=C.getParameter(C.UNPACK_ROW_LENGTH),en=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Hi=C.getParameter(C.UNPACK_SKIP_PIXELS),tn=C.getParameter(C.UNPACK_SKIP_ROWS),Nr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,St.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,St.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Te),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ne),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce);let ft=x.isDataArrayTexture||x.isData3DTexture,Jt=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){let dn=g.get(x),Xt=g.get(D),Kt=g.get(dn.__renderTarget),Ja=g.get(Xt.__renderTarget);Se.bindFramebuffer(C.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ja.__webglFramebuffer);for(let vi=0;vi<ve;vi++)ft&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(x).__webglTexture,F,Ce+vi),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,g.get(D).__webglTexture,ce,Mt+vi)),C.blitFramebuffer(Te,Ne,_e,ue,Xe,lt,_e,ue,C.DEPTH_BUFFER_BIT,C.NEAREST);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||g.has(x)){let dn=g.get(x),Xt=g.get(D);Se.bindFramebuffer(C.READ_FRAMEBUFFER,Gd),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wd);for(let Kt=0;Kt<ve;Kt++)ft?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,dn.__webglTexture,F,Ce+Kt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,dn.__webglTexture,F),Jt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Xt.__webglTexture,ce,Mt+Kt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Xt.__webglTexture,ce),F!==0?C.blitFramebuffer(Te,Ne,_e,ue,Xe,lt,_e,ue,C.COLOR_BUFFER_BIT,C.NEAREST):Jt?C.copyTexSubImage3D(st,ce,Xe,lt,Mt+Kt,Te,Ne,_e,ue):C.copyTexSubImage2D(st,ce,Xe,lt,Te,Ne,_e,ue);Se.bindFramebuffer(C.READ_FRAMEBUFFER,null),Se.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Jt?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(st,ce,Xe,lt,Mt,_e,ue,ve,ht,Ae,St.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(st,ce,Xe,lt,Mt,_e,ue,ve,ht,St.data):C.texSubImage3D(st,ce,Xe,lt,Mt,_e,ue,ve,ht,Ae,St):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ce,Xe,lt,_e,ue,ht,Ae,St.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ce,Xe,lt,St.width,St.height,ht,St.data):C.texSubImage2D(C.TEXTURE_2D,ce,Xe,lt,_e,ue,ht,Ae,St);C.pixelStorei(C.UNPACK_ROW_LENGTH,Qe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,en),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Hi),C.pixelStorei(C.UNPACK_SKIP_ROWS,tn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Nr),ce===0&&D.generateMipmaps&&C.generateMipmap(st),Se.unbindTexture()},this.initRenderTarget=function(x){g.get(x).__webglFramebuffer===void 0&&L.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?L.setTextureCube(x,0):x.isData3DTexture?L.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?L.setTexture2DArray(x,0):L.setTexture2D(x,0),Se.unbindTexture()},this.resetState=function(){P=0,H=0,V=null,Se.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};function Rd(i){let e=i,t=["map","alphaMap","aoMap","bumpMap","displacementMap","emissiveMap","envMap","lightMap","metalnessMap","normalMap","roughnessMap"];for(let n of t){let r=e[n];r instanceof $t&&r.dispose()}i.dispose()}function Vi(i){i.traverse(e=>{let t=e,n=t.geometry;n&&n.dispose();let r=t.material;Array.isArray(r)?r.forEach(Rd):r&&Rd(r)})}function La(i){switch(i){case 1:return"#FBBF24";case 2:return"#22C55E";case 3:return"#A3A3A3";case 4:return"#C084FC";case 5:return"#10B981";case 6:return"#22D3EE";case 7:return"#F59E0B";case 8:return"#60A5FA";case 9:return"#EF4444";case 10:return"#2563EB";default:return"#00ff00"}}var Da=class{scene;camera;canvas;raycaster=new ps;ground=new fn(new N(0,1,0),0);target=new N(0,0,0);dragging=!1;dragLastPoint=new N;dragPointerId=null;dragStartClientX=0;dragStartClientY=0;dragIsPanning=!1;zoomMinDistance=20;zoomMaxDistance=220;hexLines;labelsGroup;iconMaterials=new Map;zoneIdToTypeId=new Map;staticTilesByKey=new Map;staticZonesById=new Map;staticShapeRadius=0;rings;hexRadius=3;selectedHex;tileClickEnabled=!0;onTileClick;onPointerDown;onPointerMove;onPointerUp;onWheel;createScene(){let e=new is;return e.background=new Ze(0),this.scene=e,e}createCamera(e){let t=new Ht(50,1,.1,5e3);return t.position.set(0,55,55),t.lookAt(this.target),this.camera=t,t}init(e){this.canvas=e.canvas,this.loadAndBuildStaticMap().catch(()=>{this.buildFallbackGrid()}),this.onPointerDown=t=>this.handlePointerDown(t),this.onPointerMove=t=>this.handlePointerMove(t),this.onPointerUp=t=>this.handlePointerUp(t),this.onWheel=t=>this.handleWheel(t),this.canvas.addEventListener("pointerdown",this.onPointerDown,{passive:!1}),this.canvas.addEventListener("pointermove",this.onPointerMove,{passive:!1}),this.canvas.addEventListener("wheel",this.onWheel,{passive:!1}),window.addEventListener("pointerup",this.onPointerUp,{passive:!0}),window.addEventListener("pointercancel",this.onPointerUp,{passive:!0})}update(e,t){}dispose(){this.onPointerDown&&this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.onPointerMove&&this.canvas.removeEventListener("pointermove",this.onPointerMove),this.onWheel&&this.canvas.removeEventListener("wheel",this.onWheel),this.onPointerUp&&(window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp)),this.hexLines&&Vi(this.hexLines),this.hexLines=void 0,this.labelsGroup&&Vi(this.labelsGroup),this.labelsGroup=void 0,this.iconMaterials.forEach(e=>{e.map?.dispose(),e.dispose()}),this.iconMaterials.clear()}handlePointerDown(e){if(e.button!==0)return;let t=this.pointerToGround(e);if(t){this.dragging=!0,this.dragPointerId=e.pointerId,this.dragLastPoint.copy(t),this.dragStartClientX=e.clientX,this.dragStartClientY=e.clientY,this.dragIsPanning=!1;try{this.canvas.setPointerCapture(e.pointerId)}catch{}e.preventDefault()}}handlePointerMove(e){if(!this.dragging||this.dragPointerId!=null&&e.pointerId!==this.dragPointerId)return;let t=e.clientX-this.dragStartClientX,n=e.clientY-this.dragStartClientY,r=t*t+n*n;if(!this.dragIsPanning){if(r<16)return;this.dragIsPanning=!0}let s=this.pointerToGround(e);if(!s)return;let o=s.clone().sub(this.dragLastPoint);this.dragLastPoint.copy(s),this.target.sub(o),this.camera.position.sub(o),this.camera.lookAt(this.target),e.preventDefault()}handlePointerUp(e){if(this.dragging&&this.dragPointerId!=null&&e.pointerId===this.dragPointerId){if(!this.dragIsPanning){let t=this.pointerToGround(e);t&&this.tryClickTileAtWorld(t)}this.dragging=!1,this.dragPointerId=null,this.dragIsPanning=!1}}handleWheel(e){let t=Math.sign(e.deltaY);if(t===0)return;let n=this.camera.position.clone().sub(this.target),r=n.length();if(r<=1e-4)return;let s=Math.pow(1.08,t),o=Ql.clamp(r*s,this.zoomMinDistance,this.zoomMaxDistance);n.normalize().multiplyScalar(o),this.camera.position.copy(this.target).add(n),this.camera.lookAt(this.target),e.preventDefault()}pointerToGround(e){let t=this.canvas.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*2-1,r=-((e.clientY-t.top)/t.height*2-1),s=new Oe(n,r);this.raycaster.setFromCamera(s,this.camera);let o=new N;return this.raycaster.ray.intersectPlane(this.ground,o)?o:null}setTileClickHandler(e){this.onTileClick=e}setTileClickEnabled(e){this.tileClickEnabled=e}setSelectedTile(e,t){let n=yc(this.hexRadius,e,t),r=L0(this.hexRadius*.98),s=new Di({color:65280,transparent:!0,opacity:.85}),o=new cs(r,s);o.position.set(n.x,.08,n.z),this.selectedHex&&(Vi(this.selectedHex),this.scene.remove(this.selectedHex)),this.scene.add(o),this.selectedHex=o}clearSelectedTile(){this.selectedHex&&(Vi(this.selectedHex),this.scene.remove(this.selectedHex),this.selectedHex=void 0)}getZoneById(e){return this.staticZonesById.get(e)}getControlTypeForAxial(e,t){if(!this.rings||!this.staticShapeRadius)return"contested";let n=R0(A0(e,t),{x:0,y:0,z:0});return n>=this.rings.outerStartDistance?"starting":n>=this.rings.contestedStartDistance?"contested":"pvp"}tryClickTileAtWorld(e){if(!this.tileClickEnabled)return;let t=P0(this.hexRadius,e.x,e.z);if(!t)return;let n=vc(t.q,t.r),r=this.staticTilesByKey.get(n);r&&this.onTileClick?.(r)}async loadAndBuildStaticMap(){let e=await fetch("/game-data/static-map.json",{cache:"no-store"});if(!e.ok)throw new Error(`static-map fetch failed: ${e.status}`);let t=await e.json();await this.buildFromStaticMap(t)}buildFallbackGrid(){this.hexRadius=3,this.staticShapeRadius=6,this.rings={outerStartDistance:Math.floor(6*.66),contestedStartDistance:Math.floor(6*.33)};let n=[];for(let r=-6;r<=6;r++)for(let s=-6;s<=6;s++)C0(r,s,6)&&n.push({q:r,r:s,zoneId:0});this.staticTilesByKey=new Map(n.map(r=>[vc(r.q,r.r),r])),this.buildTiles(3,n)}async buildFromStaticMap(e){this.hexRadius=3,this.staticShapeRadius=e.shape.radius,this.rings=e.rings,this.zoneIdToTypeId=new Map(e.zones.map(n=>[n.zoneId,n.zoneTypeId])),this.staticZonesById=new Map(e.zones.map(n=>[n.zoneId,n])),this.staticTilesByKey=new Map(e.tiles.map(n=>[vc(n.q,n.r),n])),await this.buildTiles(3,e.tiles,e.zones)}async buildTiles(e,t,n){this.hexLines&&(Vi(this.hexLines),this.scene.remove(this.hexLines),this.hexLines=void 0),this.labelsGroup&&(Vi(this.labelsGroup),this.scene.remove(this.labelsGroup),this.labelsGroup=void 0),this.iconMaterials.forEach(c=>{c.map?.dispose(),c.dispose()}),this.iconMaterials.clear();let r=D0(e,t),s=new Di({color:65280,linewidth:1}),o=new ls(r,s);o.frustumCulled=!0,this.scene.add(o),this.hexLines=o,n&&(this.zoneIdToTypeId=new Map(n.map(c=>[c.zoneId,c.zoneTypeId])));let a=new Set;for(let c of t){let h=this.zoneIdToTypeId.get(c.zoneId)??1;a.add(h)}await Promise.all([...a].map(async c=>{await this.ensureIconMaterial(c)}));let l=new Xn;l.name="zone-icons";for(let c of t){let h=yc(e,c.q,c.r),d=this.zoneIdToTypeId.get(c.zoneId)??1,f=new ss(this.iconMaterials.get(d));f.position.set(h.x,.05,h.z),f.scale.set(e*1.55,e*1.55,1),l.add(f)}this.scene.add(l),this.labelsGroup=l}async ensureIconMaterial(e){if(this.iconMaterials.has(e))return;let t,n=La(e);try{t=await N0(`/zone-icons/${e}.svg`,n)}catch{t=B0(String(e),n)}let r=new Mr({map:t,transparent:!0,depthTest:!0,depthWrite:!1});this.iconMaterials.set(e,r)}getMinimapState(){let e={targetX:this.target.x,targetZ:this.target.z,cameraY:this.camera?.position.y??0};try{let t=[new Oe(-1,-1),new Oe(1,-1),new Oe(1,1),new Oe(-1,1)],n=[];for(let r of t){this.raycaster.setFromCamera(r,this.camera);let s=new N;this.raycaster.ray.intersectPlane(this.ground,s)&&n.push(s)}if(n.length>=2){let r=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;for(let l of n)r=Math.min(r,l.x),s=Math.max(s,l.x),o=Math.min(o,l.z),a=Math.max(a,l.z);return Gi(Fn({},e),{viewRect:{minX:r,maxX:s,minZ:o,maxZ:a}})}}catch{}return e}setTargetXZ(e,t){if(!this.camera)return;let n=this.camera.position.clone().sub(this.target);this.target.set(e,0,t),this.camera.position.copy(this.target).add(n),this.camera.lookAt(this.target)}};function C0(i,e,t){let n=i,r=e,s=-n-r;return Math.max(Math.abs(n),Math.abs(s),Math.abs(r))<=t}function yc(i,e,t){let r=Math.sqrt(3)*i*(e+t/2),s=1.5*i*t;return{x:r,z:s}}function vc(i,e){return`${i},${e}`}function A0(i,e){let t=i,n=e,r=-t-n;return{x:t,y:r,z:n}}function R0(i,e){return Math.max(Math.abs(i.x-e.x),Math.abs(i.y-e.y),Math.abs(i.z-e.z))}function I0(i){let e=Math.round(i.x),t=Math.round(i.y),n=Math.round(i.z),r=Math.abs(e-i.x),s=Math.abs(t-i.y),o=Math.abs(n-i.z);return r>s&&r>o?e=-t-n:s>o?t=-e-n:n=-e-t,{x:e,y:t,z:n}}function P0(i,e,t){let n=Math.sqrt(3),r=2/3*(t/i),s=e/(n*i)-r/2,o=I0({x:s,y:-s-r,z:r});return{q:o.x,r:o.z}}function L0(i){let e=[];for(let s=0;s<6;s++){let o=Math.PI/180*(60*s-30);e.push(new N(Math.cos(o)*i,0,Math.sin(o)*i))}e.push(e[0].clone());let t=new Float32Array(e.length*3),n=0;for(let s of e)t[n++]=s.x,t[n++]=s.y,t[n++]=s.z;let r=new Yt;return r.setAttribute("position",new Ot(t,3)),r.computeBoundingSphere(),r}function D0(i,e){let t=e.length,n=12,r=3,s=new Float32Array(t*n*r),o=new Float32Array(n*r),a=[];for(let d=0;d<6;d++){let f=Math.PI/180*(60*d-30);a.push(new N(Math.cos(f)*i,0,Math.sin(f)*i))}let l=0;for(let d=0;d<6;d++){let f=a[d],p=a[(d+1)%6];o[l++]=f.x,o[l++]=f.y,o[l++]=f.z,o[l++]=p.x,o[l++]=p.y,o[l++]=p.z}let c=0;for(let d of e){let f=yc(i,d.q,d.r);for(let p=0;p<o.length;p+=3)s[c++]=o[p]+f.x,s[c++]=o[p+1],s[c++]=o[p+2]+f.z}let h=new Yt;return h.setAttribute("position",new Ot(s,3)),h.computeBoundingSphere(),h}async function N0(i,e){let t=await fetch(i,{cache:"force-cache"});if(!t.ok)throw new Error(`icon fetch failed: ${t.status}`);let n=await t.text(),r=U0(n,e),s=new Blob([r],{type:"image/svg+xml"}),o=URL.createObjectURL(s);try{let a=await F0(o);return O0(a)}finally{URL.revokeObjectURL(o)}}function F0(i){return new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=r=>t(r),n.src=i})}function U0(i,e){let t=i;return t=t.replace(/fill\s*=\s*["']currentColor["']/gi,`fill="${e}"`),t=t.replace(/<svg\b([^>]*)>/i,(n,r)=>`<svg${String(r).replace(/\sfill\s*=\s*["'][^"']*["']/gi,"")} fill="${e}">`),t}function O0(i){let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");if(!n){let h=new $t;return h.needsUpdate=!0,h}n.clearRect(0,0,128,128);let r=6,s=128/2,o=128/2,a=128/2-r;n.save(),n.beginPath();for(let h=0;h<6;h++){let d=Math.PI/180*(60*h-30),f=s+Math.cos(d)*a,p=o+Math.sin(d)*a;h===0?n.moveTo(f,p):n.lineTo(f,p)}n.closePath(),n.clip();let l=18;n.drawImage(i,l,l,128-l*2,128-l*2),n.restore(),n.save(),n.beginPath();for(let h=0;h<6;h++){let d=Math.PI/180*(60*h-30),f=s+Math.cos(d)*a,p=o+Math.sin(d)*a;h===0?n.moveTo(f,p):n.lineTo(f,p)}n.closePath(),n.lineWidth=3,n.strokeStyle="rgba(0,255,0,0.18)",n.stroke(),n.restore();let c=new Sr(t);return c.colorSpace=Vt,c.minFilter=Et,c.magFilter=Et,c.generateMipmaps=!1,c.needsUpdate=!0,c}function B0(i,e){let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");if(!n){let s=new $t;return s.needsUpdate=!0,s}n.clearRect(0,0,t.width,t.height),n.textAlign="center",n.textBaseline="middle",n.font="bold 56px system-ui, -apple-system, Segoe UI, Roboto, Arial",n.lineWidth=10,n.strokeStyle="rgba(0,0,0,0.7)",n.strokeText(i,t.width/2,t.height/2),n.fillStyle=e,n.fillText(i,t.width/2,t.height/2);let r=new Sr(t);return r.colorSpace=Vt,r.minFilter=Et,r.magFilter=Et,r.generateMipmaps=!1,r.needsUpdate=!0,r}function Id(){let i=Array.from({length:18},(e,t)=>{let n=t+1,r=8+t%6,s=["Whisperfen","Stonewatch Ridge","Greenfire Glade","Duskbarrow","Sunken Hollow"],o=s[t%s.length];return{id:`q-extra-${n}`,title:`Bounty: Hexmarked ${n}`,level:r,zone:o,description:"A small job posted on the board. Quick coin for quick work.",text:`The board is nailed into old oak.

Someone has marked a target with green wax.

Bring proof and collect your reward.`,objectives:[{text:"Defeat the marked target",current:0,required:1},{text:"Return to the bounty board"}],rewards:[{name:"Gold",quantity:25+t*3}]}});return{gold:2450,hero:{raceClass:"Human Warlock",HeroName:"Stanislav",stats:{level:12,hp:{current:1320,max:1650,regen:6.3},mana:{current:540,max:860,regen:3.1},xp:{current:1840,max:2600},attack:{min:84,max:92,speed:1.5},armor:9.7,moveSpeed:315}},abilities:[{id:"q",name:"Hex Bolt",key:"Q",level:3,maxLevel:4,cooldownSeconds:8,cooldownRemainingSeconds:0,manaCost:90},{id:"w",name:"Ward Field",key:"W",level:2,maxLevel:4,cooldownSeconds:14,cooldownRemainingSeconds:0,manaCost:120},{id:"e",name:"Arc Step",key:"E",level:1,maxLevel:4,cooldownSeconds:18,cooldownRemainingSeconds:0,manaCost:60},{id:"r",name:"Overgrowth Protocol",key:"R",level:1,maxLevel:3,cooldownSeconds:90,cooldownRemainingSeconds:27,manaCost:200}],inventory:{main:[{id:"boots",name:"Swift Boots",cost:1400,rarity:"common"},{id:"wand",name:"Wand of Sparks",cost:450,charges:7,rarity:"common"},{id:"blade",name:"Green Blade",cost:2100,rarity:"rare"},null,{id:"orb",name:"Orb of Sight",cost:950,rarity:"common"},null],backpack:[{id:"smoke",name:"Smoke",cost:80,charges:2,rarity:"common"},null,null],stash:[{id:"gem",name:"Emerald Gem",cost:900,rarity:"epic"},null,null,null,null,null]},quests:[{id:"q-verdant-embers",title:"Verdant Embers",level:12,zone:"Greenfire Glade",description:"The glade smolders with unnatural life. Follow the trail of ash to its source.",text:`The forest does not burn like wood.

It breathes.

Track the embers and find what feeds them. The air itself tastes of hex and sap.`,objectives:[{text:"Collect Verdant Ash",current:6,required:8},{text:"Slay Ash-Touched Sprites",current:3,required:6},{text:"Confront the Green Flame at the clearing"}],rewards:[{name:"Emerald Sigil"},{name:"Gold",quantity:125}],isTracked:!0},{id:"q-warding-runestones",title:"Warding Runestones",level:11,zone:"Stonewatch Ridge",description:"Reinforce the ward lines by restoring ancient runestones.",text:`The warding stones along the ridge were carved to hold back older things.

Place new runes where the lines have snapped, or the night will find its way in.`,objectives:[{text:"Restore broken runestones",current:2,required:5},{text:"Recover a Rune Core from a Stonewatch Sentinel",done:!1}],rewards:[{name:"Warden\u2019s Band"}]},{id:"q-the-last-wisp",title:"The Last Wisp",level:10,zone:"Whisperfen",description:"Find the lost wisp near the fen and guide it back to the lantern-tree.",text:`In the fog, light is a promise.

Find the wisp. Do not let it fade.

Return it to the lantern-tree so the fen remembers the way home.`,objectives:[{text:"Locate the lost wisp",done:!0},{text:"Escort the wisp to the lantern-tree"}],isComplete:!1},...i],empire:{name:"Emerald Dominion",zoneTypeIds:[1,2,3,4,5,6,7,8,9,10],troops:[{id:"t-1",name:"1st Spear Cohort",role:"Spearmen",level:3,assignment:"Patrolling Greenfire Glade"},{id:"t-2",name:"Ridgewatch Rangers",role:"Rangers",level:2},{id:"t-3",name:"Hexguard Initiates",role:"Battlemages",level:1,assignment:"Escorting supply caravan"},{id:"t-4",name:"Stonewall Shieldbearers",role:"Shieldbearers",level:4},{id:"t-5",name:"Duskbarrow Scouts",role:"Scouts",level:2,assignment:"Recon: Duskbarrow outskirts"},{id:"t-6",name:"Riverwatch Sentries",role:"Sentries",level:3},{id:"t-7",name:"Sunken Hollow Wardens",role:"Wardens",level:4,assignment:"Holding the ward line"},{id:"t-8",name:"Coastline Corsairs",role:"Corsairs",level:2},{id:"t-9",name:"Frostwild Trackers",role:"Trackers",level:3,assignment:"Tracking raiders in Frostwild"},{id:"t-10",name:"Badlands Skirmishers",role:"Skirmishers",level:2},{id:"t-11",name:"Cave Delvers",role:"Delvers",level:1,assignment:"Clearing Crystal Caves access"},{id:"t-12",name:"Volcanic Vanguards",role:"Vanguards",level:5,assignment:"Securing obsidian ridge"}],workers:[{id:"w-1",name:"Mire Diggers",role:"Miners",level:2,assignment:"Extracting iron (Stonewatch Ridge)"},{id:"w-2",name:"Lanternwrights",role:"Carpenters",level:1},{id:"w-3",name:"Greenfire Herbalists",role:"Herbalists",level:3,assignment:"Gathering herbs (Greenfire Glade)"},{id:"w-4",name:"Riverline Anglers",role:"Fishers",level:2},{id:"w-5",name:"Heartland Farmhands",role:"Farmhands",level:1,assignment:"Harvesting grain (Heartland Plains)"},{id:"w-6",name:"Coastal Gatherers",role:"Gatherers",level:2,assignment:"Collecting seaweed (Coastal Isles)"},{id:"w-7",name:"Saltpan Crew",role:"Gatherers",level:2},{id:"w-8",name:"Highland Quarry",role:"Quarrymen",level:3,assignment:"Cutting stone (Highland Mountains)"},{id:"w-9",name:"Tundra Hunters",role:"Hunters",level:2,assignment:"Collecting fur (Tundra Frostwild)"},{id:"w-10",name:"Cave Pickers",role:"Delvers",level:1},{id:"w-11",name:"Smelter Line",role:"Smelters",level:2,assignment:"Smelting iron ingots"},{id:"w-12",name:"Alchemist Bench",role:"Alchemists",level:3,assignment:"Brewing basic potions"},{id:"w-13",name:"Stone Masonry",role:"Masons",level:2},{id:"w-14",name:"Weaving Hall",role:"Weavers",level:2,assignment:"Spinning thread"}]}}}var Es=Uc(Xc),Pd=Ji(Es,i=>i.heroInventoryOpen),Ld=Ji(Es,i=>i.questLogOpen),Dd=Ji(Es,i=>i.zoneInfoOpen),Nd=Ji(Es,i=>i.zoneInfoTile),Na=Ji(Es,i=>i.empirePanelOpen);var Fa=class{opts;resizeObserver;rafId;running=!1;renderer;scene;camera;lastTs=0;elapsed=0;constructor(e){this.opts=Fn({antialias:e.antialias??!0,alpha:e.alpha??!0,dprCap:e.dprCap??2},e)}start(){if(this.running)return;this.running=!0,this.createRenderer();let e=this.computeSize();this.scene=this.opts.controller.createScene(),this.camera=this.opts.controller.createCamera(e),this.applySize(e),this.opts.controller.init({host:this.opts.host,canvas:this.opts.canvas,renderer:this.renderer,scene:this.scene,camera:this.camera,size:e}),this.resizeObserver=new ResizeObserver(t=>{let n=t[0];if(!n)return;let{width:r,height:s}=n.contentRect,o=this.computeSize(r,s);this.applySize(o),this.opts.controller.onResize?.(o)}),this.resizeObserver.observe(this.opts.host),this.lastTs=performance.now(),this.loop()}stop(){this.running&&(this.running=!1,this.rafId!=null&&cancelAnimationFrame(this.rafId),this.rafId=void 0,this.resizeObserver?.disconnect(),this.resizeObserver=void 0)}dispose(){this.stop(),this.opts.controller.dispose(),this.renderer?.dispose()}createRenderer(){let{canvas:e}=this.opts;this.renderer=new Ra({canvas:e,antialias:this.opts.antialias,alpha:this.opts.alpha})}computeSize(e,t){let n=this.opts.host.getBoundingClientRect(),r=Math.max(1,Math.floor(e??n.width)),s=Math.max(1,Math.floor(t??n.height)),o=Math.min(window.devicePixelRatio??1,this.opts.dprCap);return{width:r,height:s,dpr:o}}applySize(e){this.renderer.setPixelRatio(e.dpr),this.renderer.setSize(e.width,e.height,!1);let t=this.camera;t.isPerspectiveCamera?(t.aspect=e.width/e.height,t.updateProjectionMatrix()):t.isOrthographicCamera&&t.updateProjectionMatrix()}loop(){let e=t=>{if(!this.running)return;let n=Math.min(.1,Math.max(0,(t-this.lastTs)/1e3));this.lastTs=t,this.elapsed+=n,this.opts.controller.update(n,this.elapsed),this.renderer.render(this.scene,this.camera),this.rafId=requestAnimationFrame(e)};this.rafId=requestAnimationFrame(e)}};var k0=["host"],z0=["canvas"],Ua=class i{constructor(e){this.zone=e}controller;hostRef;canvasRef;engine;ngAfterViewInit(){if(!this.controller)throw new Error("ThreeViewportComponent: controller input is required.");this.engine=new Fa({host:this.hostRef.nativeElement,canvas:this.canvasRef.nativeElement,controller:this.controller,dprCap:2,antialias:!0,alpha:!0}),this.zone.runOutsideAngular(()=>this.engine?.start())}ngOnDestroy(){this.engine?.dispose(),this.engine=void 0}static \u0275fac=function(t){return new(t||i)(Bt(Rs))};static \u0275cmp=pt({type:i,selectors:[["app-three-viewport"]],viewQuery:function(t,n){if(t&1&&Ps(k0,7)(z0,7),t&2){let r;Yi(r=Zi())&&(n.hostRef=r.first),Yi(r=Zi())&&(n.canvasRef=r.first)}},inputs:{controller:"controller"},decls:4,vars:0,consts:[["host",""],["canvas",""],["aria-label","Three.js viewport",1,"host"],[1,"canvas"]],template:function(t,n){t&1&&(Re(0,"div",2,0),Xi(2,"canvas",3,1),Ie())},styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.host[_ngcontent-%COMP%]{width:100%;height:100%}.canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%}"],changeDetection:0})};var Oa=class i{hero;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=pt({type:i,selectors:[["app-hud-hero-avatar"]],inputs:{hero:"hero"},standalone:!1,decls:29,vars:17,consts:[[1,"hero__content"],["aria-label","Hero portrait",1,"hero__portrait"],[1,"hero__level"],[1,"hero__bars"],[1,"hero__name"],[1,"hero__nameTitle"],[1,"hero__nameSub"],[1,"bar","hp"],[1,"bar__fill"],[1,"bar__text"],[1,"bar__regen"],[1,"bar","mana"],["aria-label","Experience",1,"bar","xp"],[1,"bar__label"]],template:function(t,n){t&1&&(J(0,"div",0)(1,"div",1)(2,"div",2),q(3),Z()(),J(4,"div",3)(5,"div",4)(6,"div",5),q(7),Z(),J(8,"div",6),q(9),Z()(),J(10,"div",7),_t(11,"div",8),J(12,"div",9),q(13),J(14,"span",10),q(15),Z()()(),J(16,"div",11),_t(17,"div",8),J(18,"div",9),q(19),J(20,"span",10),q(21),Z()()(),J(22,"div",12),_t(23,"div",8),J(24,"div",9)(25,"span",13),q(26,"XP"),Z(),J(27,"span"),q(28),Z()()()()()),t&2&&(z(3),Rt("Lv ",n.hero.stats.level),z(4),De(n.hero.raceClass),z(2),De(n.hero.HeroName),z(2),yi("width",n.hero.stats.hp.current/n.hero.stats.hp.max*100,"%"),z(2),Bn(" ",n.hero.stats.hp.current," / ",n.hero.stats.hp.max," "),z(2),Rt("+",n.hero.stats.hp.regen),z(2),yi("width",n.hero.stats.mana.current/n.hero.stats.mana.max*100,"%"),z(2),Bn(" ",n.hero.stats.mana.current," / ",n.hero.stats.mana.max," "),z(2),Rt("+",n.hero.stats.mana.regen),z(2),yi("width",n.hero.stats.xp.current/n.hero.stats.xp.max*100,"%"),z(5),Bn("",n.hero.stats.xp.current," / ",n.hero.stats.xp.max))},styles:[".hero__content[_ngcontent-%COMP%]{display:grid;grid-template-columns:84px 1fr;gap:10px;padding:10px}.hero__portrait[_ngcontent-%COMP%]{border-radius:12px;border:1px solid rgba(0,255,0,.2);background:radial-gradient(circle at 30% 25%,rgba(0,255,0,.12),transparent 55%),linear-gradient(135deg,#ffffff0f,#ffffff05);height:84px;position:relative}.hero__level[_ngcontent-%COMP%]{position:absolute;left:8px;bottom:8px;font-size:11px;font-weight:700;padding:4px 6px;border-radius:8px;background:#0009;border:1px solid rgba(255,255,255,.14)}.hero__name[_ngcontent-%COMP%]{margin-bottom:6px}.hero__nameTitle[_ngcontent-%COMP%]{font-weight:800;font-size:13px;line-height:1.1}.hero__nameSub[_ngcontent-%COMP%]{margin-top:2px;font-size:12px;color:#e7ecffa6}.bar[_ngcontent-%COMP%]{position:relative;border-radius:10px;height:18px;overflow:hidden;border:1px solid rgba(255,255,255,.14);background:#ffffff0f}.bar[_ngcontent-%COMP%] + .bar[_ngcontent-%COMP%]{margin-top:6px}.bar__fill[_ngcontent-%COMP%]{position:absolute;inset:0;width:40%}.bar__text[_ngcontent-%COMP%]{position:relative;z-index:1;font-size:11px;line-height:18px;padding:0 8px;display:flex;justify-content:space-between;color:#ffffffe6}.bar__regen[_ngcontent-%COMP%]{color:#e7ecffb3}.hp[_ngcontent-%COMP%]   .bar__fill[_ngcontent-%COMP%]{background:linear-gradient(90deg,#1fd35e,#0b8b39)}.mana[_ngcontent-%COMP%]   .bar__fill[_ngcontent-%COMP%]{background:linear-gradient(90deg,#3aa3ff,#2463ff)}.xp[_ngcontent-%COMP%]   .bar__fill[_ngcontent-%COMP%]{background:linear-gradient(90deg,#b07cff,#7c3aed)}.bar__label[_ngcontent-%COMP%]{font-weight:900;letter-spacing:.08em;color:#e7ecffd9}"],changeDetection:0})};var G0=(i,e)=>e.id;function W0(i,e){i&1&&(J(0,"span",6),q(1,"PASSIVE"),Z())}function X0(i,e){if(i&1&&(J(0,"span",6),q(1),Z(),J(2,"span",6),q(3),Z()),i&2){let t=qe().$implicit;z(),Rt("",t.manaCost," MP"),z(2),Rt("",t.cooldownSeconds,"s")}}function q0(i,e){if(i&1&&(J(0,"div",7),_t(1,"div",8),J(2,"div",9),q(3),Z()()),i&2){let t=qe().$implicit;z(3),Rt("",t.cooldownRemainingSeconds,"s")}}function Y0(i,e){if(i&1&&(J(0,"button",1),_t(1,"div",2),J(2,"div",3)(3,"div",4),q(4),Z(),J(5,"div",5),et(6,W0,2,0,"span",6)(7,X0,4,2),Z()(),et(8,q0,4,1,"div",7),Z()),i&2){let t=e.$implicit;Tn("aria-label",t.name),z(3),ot("title",t.name),z(),De(t.name),z(2),tt(t.isPassive?6:7),z(2),tt(!t.isPassive&&t.cooldownRemainingSeconds>0?8:-1)}}var Ba=class i{abilities;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=pt({type:i,selectors:[["app-hud-abilities"]],inputs:{abilities:"abilities"},standalone:!1,decls:3,vars:0,consts:[[1,"abilities__row"],["type","button",1,"ability"],[1,"ability__icon"],[1,"ability__meta"],[1,"ability__name",3,"title"],[1,"ability__sub"],[1,"pill"],[1,"ability__cd"],[1,"ability__cdShade"],[1,"ability__cdText"]],template:function(t,n){t&1&&(J(0,"div",0),vt(1,Y0,9,5,"button",1,G0),Z()),t&2&&(z(),yt(n.abilities))},styles:[".abilities__row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;padding:10px}.ability[_ngcontent-%COMP%]{all:unset;cursor:pointer;position:relative;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:#ffffff0a;padding:9px;display:grid;gap:8px}.ability[_ngcontent-%COMP%]:hover{border-color:#00ff0047;background:#00ff000f}.ability__icon[_ngcontent-%COMP%]{height:44px;border-radius:10px;border:1px solid rgba(0,255,0,.18);background:radial-gradient(circle at 25% 20%,rgba(0,255,0,.16),transparent 55%),linear-gradient(135deg,#ffffff0f,#ffffff05)}.ability__name[_ngcontent-%COMP%]{font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ability__sub[_ngcontent-%COMP%]{display:flex;gap:6px;flex-wrap:wrap}.pill[_ngcontent-%COMP%]{font-size:10px;padding:3px 6px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:#00000059;color:#e7ecffbf}.ability__cd[_ngcontent-%COMP%]{position:absolute;inset:0;border-radius:12px;overflow:hidden}.ability__cdShade[_ngcontent-%COMP%]{position:absolute;inset:0;background:#0000008c}.ability__cdText[_ngcontent-%COMP%]{position:absolute;inset:0;display:grid;place-items:center;font-weight:900;color:#fff;text-shadow:0 0 22px rgba(0,0,0,.6)}"],changeDetection:0})};var ka=class i{constructor(e){this.store=e}gold;inventory;toggleHeroInventory(){this.store.dispatch(Bc())}static \u0275fac=function(t){return new(t||i)(Bt(Qt))};static \u0275cmp=pt({type:i,selectors:[["app-hud-inventory"]],inputs:{gold:"gold",inventory:"inventory"},standalone:!1,decls:7,vars:1,consts:[["aria-label","Gold",1,"inventory__meta"],[1,"inventory__goldLabel"],[1,"inventory__goldValue"],["type","button",1,"inventory__toggle","ed-hud-action-btn",3,"click"]],template:function(t,n){t&1&&(J(0,"div",0)(1,"span",1),q(2,"Gold"),Z(),J(3,"span",2),q(4),Z(),J(5,"button",3),mt("click",function(){return n.toggleHeroInventory()}),q(6," Inventory "),Z()()),t&2&&(z(4),De(n.gold))},styles:[".inventory__meta[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:flex-end;gap:8px;padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.08);background:#ffffff05}.inventory__goldLabel[_ngcontent-%COMP%]{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:#e7ecffa6}.inventory__goldValue[_ngcontent-%COMP%]{font-size:12px;font-weight:800;color:#ffd45a;text-shadow:0 0 10px rgba(255,212,90,.18)}.inventory__toggle[_ngcontent-%COMP%]{margin-left:auto}.inventory__sections[_ngcontent-%COMP%]{padding:8px 10px 10px}.invBlock__title[_ngcontent-%COMP%]{font-size:10px;letter-spacing:.14em;color:#e7ecff99;margin-bottom:6px}.slots[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}.slot[_ngcontent-%COMP%]{position:relative;border-radius:10px;min-height:44px;border:1px solid rgba(255,255,255,.12);background:#ffffff08;padding:6px;display:grid;gap:5px}.slot--empty[_ngcontent-%COMP%]{border-style:dashed;border-color:#ffffff24;background:#0000002e}.slot__icon[_ngcontent-%COMP%]{height:18px;border-radius:7px;border:1px solid rgba(0,255,0,.18);background:radial-gradient(circle at 25% 20%,rgba(0,255,0,.16),transparent 60%),linear-gradient(135deg,#ffffff0f,#ffffff05)}.slot__name[_ngcontent-%COMP%]{font-size:10px;font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#e7ecffe6}.slot__badge[_ngcontent-%COMP%]{position:absolute;right:6px;top:6px;font-size:9px;font-weight:900;padding:2px 6px;border-radius:999px;background:#0009;border:1px solid rgba(255,255,255,.16)}"],changeDetection:0})};var J0=["canvas"],K0=["host"],za=class i{constructor(e){this.zone=e}scene;canvasRef;hostRef;destroyed=!1;rafId;resizeObserver;map;zoneIdToTypeId=new Map;bounds;baseCanvas;ngAfterViewInit(){this.loadMap(),this.setupResize(),this.zone.runOutsideAngular(()=>this.loop())}ngOnDestroy(){this.destroyed=!0,this.rafId!=null&&cancelAnimationFrame(this.rafId),this.resizeObserver?.disconnect()}onClick(e){if(!this.bounds)return;let n=this.canvasRef.nativeElement.getBoundingClientRect(),r=(e.clientX-n.left)/n.width,s=(e.clientY-n.top)/n.height,o=this.bounds.minX+r*(this.bounds.maxX-this.bounds.minX),a=this.bounds.minZ+s*(this.bounds.maxZ-this.bounds.minZ);this.scene.setTargetXZ(o,a)}setupResize(){let e=this.hostRef.nativeElement;this.resizeObserver=new ResizeObserver(()=>this.redraw()),this.resizeObserver.observe(e)}loop(){let e=()=>{this.destroyed||(this.redraw(),this.rafId=requestAnimationFrame(e))};e()}async loadMap(){let e=await fetch("/game-data/static-map.json",{cache:"no-store"});if(!e.ok)return;let t=await e.json();this.map=t,this.zoneIdToTypeId=new Map(t.zones.map(n=>[n.zoneId,n.zoneTypeId])),this.computeBounds(),this.buildBaseCanvas(),this.redraw()}computeBounds(){if(!this.map)return;let e=3,t=Math.sqrt(3),n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(let l of this.map.tiles){let c=t*e*(l.q+l.r/2),h=1.5*e*l.r;n=Math.min(n,c),r=Math.max(r,c),s=Math.min(s,h),o=Math.max(o,h)}let a=e*2;this.bounds={minX:n-a,maxX:r+a,minZ:s-a,maxZ:o+a}}buildBaseCanvas(){if(!this.map||!this.bounds)return;let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height);for(let n of this.map.tiles){let r=this.zoneIdToTypeId.get(n.zoneId)??1,s=La(r),o=this.tileToWorld(n.q,n.r),a=this.worldToPxX(o.x,e.width),l=this.worldToPxY(o.z,e.height);t.beginPath(),t.arc(a,l,2.2,0,Math.PI*2),t.fillStyle=s,t.fill()}t.strokeStyle="rgba(255,255,255,0.12)",t.lineWidth=2,t.strokeRect(1,1,e.width-2,e.height-2),this.baseCanvas=e}}redraw(){let e=this.canvasRef.nativeElement,n=this.hostRef.nativeElement.getBoundingClientRect(),r=Math.max(1,Math.floor(n.width)),s=Math.max(1,Math.floor(n.height));e.width!==r&&(e.width=r),e.height!==s&&(e.height=s);let o=e.getContext("2d");if(!o)return;o.clearRect(0,0,r,s),this.baseCanvas?(o.imageSmoothingEnabled=!0,o.drawImage(this.baseCanvas,0,0,r,s)):(o.fillStyle="#050a06",o.fillRect(0,0,r,s));let{targetX:a,targetZ:l,viewRect:c}=this.scene.getMinimapState();if(this.bounds){let h=this.worldToPxX(a,r),d=this.worldToPxY(l,s);if(o.beginPath(),o.arc(h,d,4,0,Math.PI*2),o.fillStyle="rgba(255,255,255,0.95)",o.fill(),c){let f=this.worldToPxX(c.minX,r),p=this.worldToPxX(c.maxX,r),_=this.worldToPxY(c.minZ,s),v=this.worldToPxY(c.maxZ,s),m=Math.min(f,p),u=Math.min(_,v),S=Math.abs(p-f),E=Math.abs(v-_);o.strokeStyle="rgba(255,255,255,0.65)",o.lineWidth=2,o.strokeRect(m,u,S,E)}}}tileToWorld(e,t){let s=Math.sqrt(3)*3*(e+t/2),o=1.5*3*t;return{x:s,z:o}}worldToPxX(e,t){let n=this.bounds;return(e-n.minX)/(n.maxX-n.minX)*t}worldToPxY(e,t){let n=this.bounds;return(e-n.minZ)/(n.maxZ-n.minZ)*t}static \u0275fac=function(t){return new(t||i)(Bt(Rs))};static \u0275cmp=pt({type:i,selectors:[["app-minimap"]],viewQuery:function(t,n){if(t&1&&Ps(J0,7)(K0,7),t&2){let r;Yi(r=Zi())&&(n.canvasRef=r.first),Yi(r=Zi())&&(n.hostRef=r.first)}},inputs:{scene:"scene"},standalone:!1,decls:4,vars:0,consts:[["host",""],["canvas",""],[1,"host"],["aria-label","Minimap",1,"canvas",3,"click"]],template:function(t,n){if(t&1){let r=qi();J(0,"div",2,0)(2,"canvas",3,1),mt("click",function(o){return nn(r),rn(n.onClick(o))}),Z()()}},styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%}.host[_ngcontent-%COMP%]{width:100%;height:100%}.canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block;cursor:pointer}"],changeDetection:0})};function j0(i,e){if(i&1&&_t(0,"app-minimap",4),i&2){let t=qe();ot("scene",t.mapScene)}}function e_(i,e){i&1&&_t(0,"div",5)}var Va=class i{constructor(e){this.store=e}state;mapScene;toggleQuestLog(){this.store.dispatch(zc())}static \u0275fac=function(t){return new(t||i)(Bt(Qt))};static \u0275cmp=pt({type:i,selectors:[["app-hud-panels"]],inputs:{state:"state",mapScene:"mapScene"},standalone:!1,decls:22,vars:5,consts:[[1,"bottombar"],["aria-label","Minimap",1,"panel","minimap"],[1,"panel__title"],[1,"minimap__viewport"],[3,"scene"],[1,"minimap__grid"],["aria-label","Hero panel",1,"panel","hero"],[3,"hero"],["aria-label","Abilities",1,"panel","abilities"],[3,"abilities"],["aria-label","Inventory",1,"panel","inventory"],[3,"gold","inventory"],["aria-label","HUD quick actions",1,"cornerActions"],["type","button",1,"cornerActions__btn","ed-hud-action-btn",3,"click"]],template:function(t,n){t&1&&(J(0,"div",0)(1,"section",1)(2,"div",2),q(3,"MAP"),Z(),J(4,"div",3),et(5,j0,1,1,"app-minimap",4)(6,e_,1,0,"div",5),Z()(),J(7,"section",6)(8,"div",2),q(9,"HERO"),Z(),_t(10,"app-hud-hero-avatar",7),Z(),J(11,"section",8)(12,"div",2),q(13,"ABILITIES"),Z(),_t(14,"app-hud-abilities",9),Z(),J(15,"section",10)(16,"div",2),q(17,"INVENTORY"),Z(),_t(18,"app-hud-inventory",11),Z()(),J(19,"div",12)(20,"button",13),mt("click",function(){return n.toggleQuestLog()}),q(21," Quests "),Z()()),t&2&&(z(5),tt(n.mapScene?5:6),z(5),ot("hero",n.state.hero),z(4),ot("abilities",n.state.abilities),z(4),ot("gold",n.state.gold)("inventory",n.state.inventory))},dependencies:[Oa,Ba,ka,za],styles:[".bottombar[_ngcontent-%COMP%]{pointer-events:none;position:absolute;left:0;right:0;bottom:0;padding:8px 10px;display:grid;grid-template-columns:210px 340px 1fr 360px;gap:10px;background:linear-gradient(to top,#000000e6,#00000059 60%,#0000)}.cornerActions[_ngcontent-%COMP%]{pointer-events:auto;position:absolute;right:14px;bottom:132px;display:grid;gap:10px}.panel[_ngcontent-%COMP%]{pointer-events:auto;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:#0000008c;box-shadow:0 18px 60px #00000073;overflow:hidden}.panel__title[_ngcontent-%COMP%]{padding:8px 10px;font-size:11px;letter-spacing:.18em;color:#e7ecffa6;border-bottom:1px solid rgba(255,255,255,.1);background:#ffffff08}.minimap__viewport[_ngcontent-%COMP%]{height:104px;margin:10px;border-radius:10px;border:1px solid rgba(0,255,0,.18);overflow:hidden;position:relative;background:#050a06}.minimap__grid[_ngcontent-%COMP%]{position:absolute;inset:0;background-image:linear-gradient(rgba(0,255,0,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,0,.06) 1px,transparent 1px);background-size:18px 18px;opacity:.8}@media(max-width:1100px){.bottombar[_ngcontent-%COMP%]{grid-template-columns:200px 320px 1fr}.inventory[_ngcontent-%COMP%]{display:none}.cornerActions[_ngcontent-%COMP%]{bottom:124px}}"],changeDetection:0})};var Ha=class i{state;mapScene;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=pt({type:i,selectors:[["app-hud"]],inputs:{state:"state",mapScene:"mapScene"},standalone:!1,decls:2,vars:2,consts:[["aria-label","HUD",1,"hud"],[3,"state","mapScene"]],template:function(t,n){t&1&&(J(0,"div",0),_t(1,"app-hud-panels",1),Z()),t&2&&(z(),ot("state",n.state)("mapScene",n.mapScene))},dependencies:[Va],styles:[".hud[_ngcontent-%COMP%]{pointer-events:none;position:absolute;inset:0;display:block;color:var(--ed-text);font-family:var(--ed-font-ui)}"],changeDetection:0})};function i_(i,e){if(i&1&&(Re(0,"div",20),q(1),Ie()),i&2){let t=qe().$implicit,n=qe();Is("title",n.equipment[t].name),z(),De(n.equipment[t].name)}}function r_(i,e){i&1&&(Re(0,"div",21),q(1,"Empty"),Ie())}function s_(i,e){if(i&1&&(Re(0,"div",18)(1,"div",19),q(2),Ie(),et(3,i_,2,2,"div",20)(4,r_,2,0,"div",21),Ie()),i&2){let t=e.$implicit,n=qe();Ut("slot--empty",!n.equipment[t]),Tn("data-slot",t),z(2),De(t),z(),tt(n.equipment[t]?3:4)}}function o_(i,e){if(i&1&&(Re(0,"div",20),q(1),Ie()),i&2){let t=qe().$implicit,n=qe();Is("title",n.equipment[t].name),z(),De(n.equipment[t].name)}}function a_(i,e){i&1&&(Re(0,"div",21),q(1,"Empty"),Ie())}function l_(i,e){if(i&1&&(Re(0,"div",22)(1,"div",19),q(2),Ie(),et(3,o_,2,2,"div",20)(4,a_,2,0,"div",21),Ie()),i&2){let t=e.$implicit,n=qe();Ut("slot--empty",!n.equipment[t]),Tn("data-slot",t),z(2),De(t),z(),tt(n.equipment[t]?3:4)}}function c_(i,e){if(i&1&&(Re(0,"div",20),q(1),Ie()),i&2){let t=qe().$implicit,n=qe();Is("title",n.equipment[t].name),z(),De(n.equipment[t].name)}}function h_(i,e){i&1&&(Re(0,"div",21),q(1,"Empty"),Ie())}function d_(i,e){if(i&1&&(Re(0,"div",18)(1,"div",19),q(2),Ie(),et(3,c_,2,2,"div",20)(4,h_,2,0,"div",21),Ie()),i&2){let t=e.$implicit,n=qe();Ut("slot--empty",!n.equipment[t]),Tn("data-slot",t),z(2),De(t),z(),tt(n.equipment[t]?3:4)}}var Ga=class i{constructor(e){this.store=e}hero;equipment;leftSlots=["Head","Neck","Shoulder","Back","Chest","Shirt","Tabard","Wrist"];rightSlots=["Hands","Waist","Legs","Feet","Ring1","Ring2","Trinket1","Trinket2"];weaponSlots=["MainHand","OffHand"];close(){this.store.dispatch(Oc())}static \u0275fac=function(t){return new(t||i)(Bt(Qt))};static \u0275cmp=pt({type:i,selectors:[["app-hero-inventory"]],inputs:{hero:"hero",equipment:"equipment"},decls:25,vars:2,consts:[["role","dialog","aria-label","Inventory",1,"overlay",3,"pointerdown","click","wheel"],[1,"backdrop",3,"pointerdown","click"],[1,"window",3,"pointerdown","click","wheel"],[1,"window__header"],[1,"title"],[1,"title__top"],[1,"title__bottom"],["type","button","aria-label","Close",1,"close",3,"click"],[1,"content"],["aria-label","Equipment left side",1,"gear","gear--left"],[1,"slot",3,"slot--empty"],["aria-label","Hero visualization",1,"paperdoll"],["aria-label","Hero model",1,"paperdoll__figure"],[1,"paperdoll__glow"],[1,"paperdoll__silhouette"],["aria-label","Weapons",1,"weapons"],[1,"slot","slot--weapon",3,"slot--empty"],["aria-label","Equipment right side",1,"gear","gear--right"],[1,"slot"],[1,"slot__label"],[1,"slot__item",3,"title"],[1,"slot__item","slot__item--empty"],[1,"slot","slot--weapon"]],template:function(t,n){t&1&&(Re(0,"div",0),On("pointerdown",function(s){return s.stopPropagation()})("click",function(s){return s.stopPropagation()})("wheel",function(s){return s.stopPropagation()}),Re(1,"div",1),On("pointerdown",function(s){return s.stopPropagation()})("click",function(s){return s.stopPropagation(),n.close()}),Ie(),Re(2,"div",2),On("pointerdown",function(s){return s.stopPropagation()})("click",function(s){return s.stopPropagation()})("wheel",function(s){return s.stopPropagation()}),Re(3,"header",3)(4,"div",4)(5,"div",5),q(6),Ie(),Re(7,"div",6),q(8),Ie()(),Re(9,"button",7),On("click",function(){return n.close()}),q(10," \u2715 "),Ie()(),Re(11,"div",8)(12,"aside",9),vt(13,s_,5,5,"div",10,Un),Ie(),Re(15,"section",11)(16,"div",12),Xi(17,"div",13)(18,"div",14),Ie(),Re(19,"div",15),vt(20,l_,5,5,"div",16,Un),Ie()(),Re(22,"aside",17),vt(23,d_,5,5,"div",10,Un),Ie()()()()),t&2&&(z(6),De(n.hero.raceClass),z(2),De(n.hero.HeroName),z(5),yt(n.leftSlots),z(7),yt(n.weaponSlots),z(3),yt(n.rightSlots))},styles:[".overlay[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:50;pointer-events:auto;display:grid;place-items:center}.backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background:rgb(var(--ed-bg-rgb)/.55);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.window[_ngcontent-%COMP%]{position:relative;width:min(1120px,100vw - 28px);height:min(680px,100vh - 120px);border-radius:16px;border:var(--ed-panel-border-width) solid rgb(var(--ed-accent-rgb)/.22);background:rgb(var(--ed-bg-rgb)/.82);box-shadow:0 24px 90px #0000008c;overflow:hidden}.window__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.1);background:rgb(var(--ed-border-rgb)/.03)}.title__top[_ngcontent-%COMP%]{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:rgb(var(--ed-text-rgb)/.7)}.title__bottom[_ngcontent-%COMP%]{margin-top:2px;font-size:18px;font-weight:900}.close[_ngcontent-%COMP%]{all:unset;cursor:pointer;width:34px;height:34px;display:grid;place-items:center;border-radius:10px;border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.14);background:rgb(var(--ed-border-rgb)/.04)}.close[_ngcontent-%COMP%]:hover{border-color:rgb(var(--ed-accent-rgb)/.3);background:rgb(var(--ed-accent-rgb)/.07)}.content[_ngcontent-%COMP%]{height:calc(100% - 63px);display:grid;grid-template-columns:260px 1fr 260px;gap:14px;padding:14px}.gear[_ngcontent-%COMP%]{display:grid;gap:10px;align-content:start}.paperdoll[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr auto;gap:14px}.paperdoll__figure[_ngcontent-%COMP%]{position:relative;border-radius:16px;border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.12);background:radial-gradient(circle at 35% 30%,rgb(var(--ed-accent-rgb)/.12),transparent 55%),radial-gradient(circle at 70% 65%,rgba(58,163,255,.08),transparent 55%),rgb(var(--ed-border-rgb)/.03);overflow:hidden}.paperdoll__glow[_ngcontent-%COMP%]{position:absolute;inset:-40px;background:radial-gradient(circle at 50% 35%,rgb(var(--ed-accent-rgb)/.18),transparent 60%);filter:blur(10px)}.paperdoll__silhouette[_ngcontent-%COMP%]{position:absolute;left:50%;top:52%;width:220px;height:420px;transform:translate(-50%,-50%);border-radius:120px;background:linear-gradient(180deg,rgb(var(--ed-text-rgb)/.14),rgb(var(--ed-text-rgb)/.03));border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.12);box-shadow:0 30px 120px #0000008c,0 0 0 1px #00000059 inset}.weapons[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:10px}.slot[_ngcontent-%COMP%]{border-radius:12px;border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.12);background:rgb(var(--ed-border-rgb)/.03);padding:10px;min-height:58px}.slot--weapon[_ngcontent-%COMP%]{min-height:66px}.slot--empty[_ngcontent-%COMP%]{border-style:dashed;border-color:rgb(var(--ed-border-rgb)/.14);background:rgb(var(--ed-bg-rgb)/.2)}.slot__label[_ngcontent-%COMP%]{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ed-text-muted)}.slot__item[_ngcontent-%COMP%]{margin-top:6px;font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.slot__item--empty[_ngcontent-%COMP%]{font-weight:600;color:rgb(var(--ed-text-rgb)/.45)}@media(max-width:980px){.window[_ngcontent-%COMP%]{height:min(760px,100vh - 90px)}.content[_ngcontent-%COMP%], .weapons[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0})};var Ir=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ti({type:i});static \u0275inj=ei({imports:[$i]})};var f_=[[["","logTop",""]],"*"],p_=["[logTop]","*"];function m_(i,e){if(i&1&&(J(0,"div",4),q(1),Z()),i&2){let t=qe();z(),De(t.count)}}var Pr=class i{label;count;ariaLabel;dragging=!1;dragScroll;onScrollAreaPointerDown(e){if(e.button!==0)return;let t=e.currentTarget;if(t){this.dragScroll={pointerId:e.pointerId,startY:e.clientY,startScrollTop:t.scrollTop,moved:!1},this.dragging=!0;try{t.setPointerCapture(e.pointerId)}catch{}e.preventDefault()}}onScrollAreaPointerMove(e){if(!this.dragScroll||e.pointerId!==this.dragScroll.pointerId)return;let t=e.currentTarget;if(!t)return;let n=e.clientY-this.dragScroll.startY;!this.dragScroll.moved&&Math.abs(n)>3&&(this.dragScroll.moved=!0),t.scrollTop=this.dragScroll.startScrollTop-n,this.dragScroll.moved&&e.preventDefault()}onScrollAreaPointerUp(e){if(!this.dragScroll||e.pointerId!==this.dragScroll.pointerId)return;let t=e.currentTarget;try{t?.releasePointerCapture(e.pointerId)}catch{}this.dragScroll=void 0,this.dragging=!1}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=pt({type:i,selectors:[["app-log-list"]],hostVars:2,hostBindings:function(t,n){t&2&&Ut("dragging",n.dragging)},inputs:{label:"label",count:"count",ariaLabel:"ariaLabel"},standalone:!1,ngContentSelectors:p_,decls:9,vars:5,consts:[["role","group",1,"log"],[1,"log__top"],[1,"log__heading"],[1,"log__label"],[1,"log__count"],["role","list",1,"log__list",3,"pointerdown","pointermove","pointerup","pointercancel"]],template:function(t,n){t&1&&(Lc(f_),J(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),q(4),Z(),et(5,m_,2,1,"div",4),Z(),Qa(6),Z(),J(7,"div",5),mt("pointerdown",function(s){return n.onScrollAreaPointerDown(s)})("pointermove",function(s){return n.onScrollAreaPointerMove(s)})("pointerup",function(s){return n.onScrollAreaPointerUp(s)})("pointercancel",function(s){return n.onScrollAreaPointerUp(s)}),Qa(8,1),Z()()),t&2&&(Tn("aria-label",n.ariaLabel??n.label),z(4),De(n.label),z(),tt(n.count!=null?5:-1),z(2),Ut("log__list--dragging",n.dragging))},styles:["[_nghost-%COMP%]{display:block;min-height:0;height:100%}.log[_ngcontent-%COMP%]{height:100%;border-radius:14px;border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.12);background:rgb(var(--ed-border-rgb)/.03);overflow:hidden;display:grid;grid-template-rows:auto 1fr;min-height:0}.log__top[_ngcontent-%COMP%]{padding:10px 10px 12px;border-bottom:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.1);background:rgb(var(--ed-bg-rgb)/.2)}.log__heading[_ngcontent-%COMP%]{display:flex;align-items:baseline;justify-content:space-between}.log__label[_ngcontent-%COMP%]{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--ed-text-muted)}.log__count[_ngcontent-%COMP%]{font-size:12px;font-weight:800;color:rgb(var(--ed-text-rgb)/.8)}.log__list[_ngcontent-%COMP%]{overflow:auto;padding:8px;display:grid;gap:6px;min-height:0;overscroll-behavior:contain;align-content:start;grid-auto-rows:54px;scrollbar-gutter:stable;cursor:grab;touch-action:pan-y;scrollbar-width:thin;scrollbar-color:rgb(var(--ed-accent-rgb)/.38) rgb(var(--ed-bg-rgb)/.25)}.log__list--dragging[_ngcontent-%COMP%]{cursor:grabbing;-webkit-user-select:none;user-select:none}.log__list[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}.log__list[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:rgb(var(--ed-bg-rgb)/.25);border-left:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.08)}.log__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:linear-gradient(180deg,rgb(var(--ed-accent-rgb)/.35),rgb(var(--ed-bg-rgb)/.2));border:var(--ed-panel-border-width) solid rgb(var(--ed-accent-rgb)/.22);border-radius:999px}.log__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,rgb(var(--ed-accent-rgb)/.5),rgb(var(--ed-bg-rgb)/.22));border-color:rgb(var(--ed-accent-rgb)/.34)}[_nghost-%COMP%]     .log__list .entry{all:unset;cursor:pointer;display:block;width:100%;box-sizing:border-box;border-radius:12px;border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.12);background:rgb(var(--ed-bg-rgb)/.22);height:54px;padding:6px 8px;display:grid;align-content:center}[_nghost-%COMP%]     .log__list .entry:hover{border-color:rgb(var(--ed-accent-rgb)/.25);background:rgb(var(--ed-accent-rgb)/.06)}[_nghost-%COMP%]     .log__list .entry--active{border-color:rgb(var(--ed-accent-rgb)/.32);background:linear-gradient(180deg,rgb(var(--ed-accent-rgb)/.14),rgb(var(--ed-bg-rgb)/.2));box-shadow:0 0 0 1px rgb(var(--ed-accent-rgb)/.1) inset}"],changeDetection:0})};var g_=(i,e)=>e.id;function __(i,e){i&1&&(J(0,"span",22),q(1,"Tracked"),Z())}function x_(i,e){if(i&1){let t=qi();J(0,"button",16),mt("click",function(){let r=nn(t).$implicit,s=qe();return rn(s.selectQuest(r.id))}),J(1,"div",17)(2,"div",18),q(3),Z(),J(4,"div",19),q(5),Z()(),J(6,"div",20)(7,"span",21),q(8),Z(),et(9,__,2,0,"span",22),Z()()}if(i&2){let t=e.$implicit,n=qe();Ut("entry--active",t.id===(n.selectedQuest==null?null:n.selectedQuest.id)),z(2),ot("title",t.title),z(),De(t.title),z(2),De(t.level),z(3),De(t.zone),z(),tt(t.isTracked?9:-1)}}function v_(i,e){i&1&&(J(0,"div",12),q(1,"No matches."),Z())}function y_(i,e){if(i&1&&(J(0,"p"),q(1),Z()),i&2){let t=qe().$implicit;z(),De(t)}}function b_(i,e){i&1&&_t(0,"div",36)}function M_(i,e){if(i&1&&et(0,y_,2,1,"p")(1,b_,1,0,"div",36),i&2){let t=e.$implicit;tt(t.trim().length?0:1)}}function S_(i,e){if(i&1&&(J(0,"span",40),q(1),Z()),i&2){let t=qe().$implicit;z(),Bn("(",t.current??0,"/",t.required,")")}}function w_(i,e){if(i&1&&(J(0,"div",37),_t(1,"span",38),J(2,"div",39)(3,"span"),q(4),Z(),et(5,S_,2,2,"span",40),Z()()),i&2){let t=e.$implicit,n=t.done||!!t.required&&(t.current??0)>=t.required;Ut("objective--done",n),z(4),De(t.text),z(),tt(t.required?5:-1)}}function E_(i,e){if(i&1&&(J(0,"span",46),q(1),Z()),i&2){let t=qe().$implicit;z(),Rt("\xD7",t.quantity)}}function T_(i,e){if(i&1&&(J(0,"div",42),_t(1,"div",43),J(2,"div",44)(3,"span",45),q(4),Z(),et(5,E_,2,1,"span",46),Z()()),i&2){let t=e.$implicit;z(4),De(t.name),z(),tt(t.quantity?5:-1)}}function C_(i,e){if(i&1&&(J(0,"div",32)(1,"div",33),q(2,"Rewards"),Z(),J(3,"div",41),vt(4,T_,6,2,"div",42,ni),Z()()),i&2){let t=qe();z(4),yt(t.rewards)}}function A_(i,e){if(i&1&&(J(0,"header",23)(1,"div",24),q(2),Z(),J(3,"div",25)(4,"span",26),q(5),Z(),J(6,"span",27),q(7,"\u2022"),Z(),J(8,"span",28),q(9),Z()()(),J(10,"div",29)(11,"div",30),q(12),Z(),J(13,"div",31),vt(14,M_,2,1,null,null,ni),Z(),J(16,"div",32)(17,"div",33),q(18,"Objectives"),Z(),J(19,"div",34),vt(20,w_,6,4,"div",35,ni),Z()(),et(22,C_,6,0,"div",32),Z()),i&2){let t=e;z(2),De(t.title),z(3),Rt("Level ",t.level),z(4),De(t.zone),z(3),De(t.description),z(2),yt(t.text.split(`
`)),z(6),yt(t.objectives),z(2),tt(t.rewards!=null&&t.rewards.length?22:-1)}}function R_(i,e){i&1&&(J(0,"div",15),q(1,"No quests."),Z())}var Lr=class i{constructor(e){this.store=e}heroName;quests;selectedQuestId;query="";ngOnInit(){this.selectedQuestId??=this.visibleQuests[0]?.id}selectQuest(e){this.selectedQuestId=e}setQuery(e){this.query=e;let t=this.visibleQuests;if(!t.length){this.selectedQuestId=void 0;return}this.selectedQuestId&&t.some(n=>n.id===this.selectedQuestId)||(this.selectedQuestId=t[0].id)}get visibleQuests(){let e=this.query.trim().toLowerCase();return e?this.quests.filter(t=>t.title.toLowerCase().includes(e)||t.zone.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)):this.quests}get selectedQuest(){let e=this.visibleQuests;return this.selectedQuestId?e.find(t=>t.id===this.selectedQuestId)??e[0]:e[0]}close(){this.store.dispatch(kc())}onKeyDown(e){e.key==="Escape"&&this.close()}static \u0275fac=function(t){return new(t||i)(Bt(Qt))};static \u0275cmp=pt({type:i,selectors:[["app-quest-log"]],hostBindings:function(t,n){t&1&&mt("keydown",function(s){return n.onKeyDown(s)},Wi)},inputs:{heroName:"heroName",quests:"quests"},decls:21,vars:5,consts:[["role","dialog","aria-label","Quest log",1,"overlay",3,"pointerdown","click","wheel"],[1,"backdrop",3,"pointerdown","click"],[1,"window",3,"pointerdown","click","wheel"],[1,"window__header"],[1,"title"],[1,"title__top"],[1,"title__bottom"],["type","button","aria-label","Close",1,"close",3,"click"],[1,"content"],["label","Quests","ariaLabel","Quest list",3,"count"],["logTop","","type","text","placeholder","Search","aria-label","Search quests",1,"log__search",3,"input","value"],["type","button","role","listitem",1,"entry",3,"entry--active"],["aria-label","No matching quests",1,"log__empty"],["aria-label","Quest details",1,"details"],[1,"paper"],[1,"paper__empty"],["type","button","role","listitem",1,"entry",3,"click"],[1,"entry__row"],[1,"entry__title",3,"title"],[1,"entry__level"],[1,"entry__meta"],[1,"entry__zone"],[1,"entry__tag"],[1,"paper__header"],[1,"paper__title"],[1,"paper__sub"],[1,"paper__level"],[1,"paper__dot"],[1,"paper__zone"],[1,"paper__body"],[1,"paper__desc"],[1,"paper__text"],[1,"section"],[1,"section__title"],[1,"objectives"],[1,"objective",3,"objective--done"],[1,"paper__spacer"],[1,"objective"],["aria-hidden","true",1,"objective__bullet"],[1,"objective__text"],[1,"objective__progress"],[1,"rewards"],[1,"reward"],["aria-hidden","true",1,"reward__icon"],[1,"reward__text"],[1,"reward__name"],[1,"reward__qty"]],template:function(t,n){if(t&1&&(J(0,"div",0),mt("pointerdown",function(s){return s.stopPropagation()})("click",function(s){return s.stopPropagation()})("wheel",function(s){return s.stopPropagation()}),J(1,"div",1),mt("pointerdown",function(s){return s.stopPropagation()})("click",function(s){return s.stopPropagation(),n.close()}),Z(),J(2,"div",2),mt("pointerdown",function(s){return s.stopPropagation()})("click",function(s){return s.stopPropagation()})("wheel",function(s){return s.stopPropagation()}),J(3,"header",3)(4,"div",4)(5,"div",5),q(6,"Quest Log"),Z(),J(7,"div",6),q(8),Z()(),J(9,"button",7),mt("click",function(){return n.close()}),q(10," \u2715 "),Z()(),J(11,"div",8)(12,"app-log-list",9)(13,"input",10),mt("input",function(s){return n.setQuery(s.target.value)}),Z(),vt(14,x_,10,7,"button",11,g_),et(16,v_,2,0,"div",12),Z(),J(17,"section",13)(18,"div",14),et(19,A_,23,5)(20,R_,2,0,"div",15),Z()()()()()),t&2){let r;z(8),De(n.heroName),z(4),ot("count",n.visibleQuests.length),z(),ot("value",n.query),z(),yt(n.visibleQuests),z(2),tt(n.visibleQuests.length?-1:16),z(3),tt((r=n.selectedQuest)?19:20,r)}},dependencies:[Ir,Pr],styles:[".overlay[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:50;pointer-events:auto;display:grid;place-items:center}.backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background:rgb(var(--ed-bg-rgb)/.55);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.window[_ngcontent-%COMP%]{position:relative;width:min(1080px,100vw - 28px);height:min(680px,100vh - 120px);border-radius:16px;border:var(--ed-panel-border-width) solid rgb(var(--ed-accent-rgb)/.22);background:rgb(var(--ed-bg-rgb)/.82);box-shadow:0 24px 90px #0000008c;overflow:hidden;overscroll-behavior:contain;display:grid;grid-template-rows:auto 1fr}.window__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.1);background:rgb(var(--ed-border-rgb)/.03)}.title__top[_ngcontent-%COMP%]{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:rgb(var(--ed-text-rgb)/.7)}.title__bottom[_ngcontent-%COMP%]{margin-top:2px;font-size:18px;font-weight:900}.close[_ngcontent-%COMP%]{all:unset;cursor:pointer;width:34px;height:34px;display:grid;place-items:center;border-radius:10px;border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.14);background:rgb(var(--ed-border-rgb)/.04)}.close[_ngcontent-%COMP%]:hover{border-color:rgb(var(--ed-accent-rgb)/.3);background:rgb(var(--ed-accent-rgb)/.07)}.content[_ngcontent-%COMP%]{display:grid;grid-template-columns:360px 1fr;gap:14px;padding:14px;min-height:0}app-log-list[_ngcontent-%COMP%]{min-height:0}.log__search[_ngcontent-%COMP%]{margin-top:10px;width:100%;padding:9px 10px;border-radius:12px;border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.12);background:rgb(var(--ed-bg-rgb)/.35);color:rgb(var(--ed-text-rgb)/.92);outline:none}.log__search[_ngcontent-%COMP%]::placeholder{color:rgb(var(--ed-text-rgb)/.45)}.log__search[_ngcontent-%COMP%]:focus{border-color:rgb(var(--ed-accent-rgb)/.28);box-shadow:0 0 0 3px rgb(var(--ed-accent-rgb)/.08)}.entry__row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:baseline}.entry__title[_ngcontent-%COMP%]{font-size:12px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.entry__level[_ngcontent-%COMP%]{font-size:11px;font-weight:900;color:rgb(var(--ed-text-rgb)/.7);border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.14);border-radius:10px;padding:1px 7px;background:rgb(var(--ed-border-rgb)/.03)}.entry__meta[_ngcontent-%COMP%]{margin-top:2px;display:flex;align-items:center;gap:10px;color:rgb(var(--ed-text-rgb)/.6);font-size:11px;min-width:0}.entry__zone[_ngcontent-%COMP%]{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.entry__tag[_ngcontent-%COMP%]{font-size:10px;padding:1px 7px;border-radius:999px;border:var(--ed-panel-border-width) solid rgb(var(--ed-accent-rgb)/.28);background:rgb(var(--ed-accent-rgb)/.07);color:rgb(var(--ed-text-rgb)/.88)}.details[_ngcontent-%COMP%]{min-width:0;min-height:0}.paper[_ngcontent-%COMP%]{height:100%;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:radial-gradient(circle at 25% 20%,rgba(255,220,140,.18),transparent 50%),radial-gradient(circle at 75% 70%,rgba(255,220,140,.1),transparent 55%),linear-gradient(180deg,#ffffff0f,#0000002e),#0000003d;overflow:hidden;display:grid;grid-template-rows:auto 1fr;min-height:0}.paper__header[_ngcontent-%COMP%]{padding:16px 16px 12px;border-bottom:1px solid rgba(0,0,0,.25);background:#0000001f}.paper__title[_ngcontent-%COMP%]{font-size:20px;font-weight:950;color:#fff1d6fa;text-shadow:0 1px 0 rgba(0,0,0,.4)}.paper__sub[_ngcontent-%COMP%]{margin-top:6px;display:flex;align-items:center;gap:8px;color:#fff1d6b8;font-size:12px;letter-spacing:.06em}.paper__dot[_ngcontent-%COMP%]{opacity:.7}.paper__body[_ngcontent-%COMP%]{padding:14px 16px 16px;overflow:auto;color:#fff1d6e6;min-height:0}.paper__desc[_ngcontent-%COMP%]{font-weight:800;color:#fff1d6eb}.paper__text[_ngcontent-%COMP%]{margin-top:12px;color:#fff1d6d1;line-height:1.5;font-size:13px}.paper__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 10px}.paper__spacer[_ngcontent-%COMP%]{height:8px}.section[_ngcontent-%COMP%]{margin-top:14px;padding-top:12px;border-top:1px dashed rgba(0,0,0,.3)}.section__title[_ngcontent-%COMP%]{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#fff1d6b8}.objectives[_ngcontent-%COMP%]{margin-top:10px;display:grid;gap:8px}.objective[_ngcontent-%COMP%]{display:grid;grid-template-columns:14px 1fr;gap:10px;align-items:start}.objective__bullet[_ngcontent-%COMP%]{width:12px;height:12px;margin-top:2px;border-radius:3px;border:1px solid rgba(0,0,0,.35);background:#fff1d638;box-shadow:0 1px #00000040 inset}.objective__text[_ngcontent-%COMP%]{display:inline-flex;gap:8px;flex-wrap:wrap;color:#fff1d6eb;font-weight:650}.objective__progress[_ngcontent-%COMP%]{color:#fff1d6b3;font-weight:800}.objective--done[_ngcontent-%COMP%]   .objective__bullet[_ngcontent-%COMP%]{background:rgb(var(--ed-accent-rgb)/.22);border-color:rgb(var(--ed-accent-rgb)/.22)}.objective--done[_ngcontent-%COMP%]   .objective__text[_ngcontent-%COMP%]{color:#fff1d6b8;text-decoration:line-through}.rewards[_ngcontent-%COMP%]{margin-top:10px;display:grid;gap:8px}.reward[_ngcontent-%COMP%]{display:grid;grid-template-columns:26px 1fr;gap:10px;align-items:center}.reward__icon[_ngcontent-%COMP%]{width:26px;height:26px;border-radius:8px;border:1px solid rgba(0,0,0,.35);background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.18),transparent 55%),#fff1d633}.reward__text[_ngcontent-%COMP%]{display:inline-flex;gap:8px;align-items:baseline;flex-wrap:wrap}.reward__name[_ngcontent-%COMP%]{font-weight:900}.reward__qty[_ngcontent-%COMP%]{color:#fff1d6b3;font-weight:900}.paper__empty[_ngcontent-%COMP%]{padding:16px;color:#fff1d6bf}.log__empty[_ngcontent-%COMP%]{padding:10px;border-radius:12px;border:var(--ed-panel-border-width) dashed rgb(var(--ed-border-rgb)/.16);background:rgb(var(--ed-bg-rgb)/.16);color:var(--ed-text-muted);font-size:12px}@media(max-width:980px){.window[_ngcontent-%COMP%]{height:min(760px,100vh - 90px)}.content[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0})};function P_(i,e){if(i&1&&(Re(0,"span",25),q(1),Ie()),i&2){let t=e.$implicit;z(),De(t)}}function L_(i,e){if(i&1&&(Re(0,"li"),q(1),Ie()),i&2){let t=e.$implicit;z(),De(t)}}function D_(i,e){if(i&1&&(Re(0,"li"),q(1),Ie()),i&2){let t=e.$implicit;z(),De(t)}}var Wa=class i{constructor(e){this.store=e}zone;close(){this.store.dispatch(Hc())}get bannerUrl(){let e=this.zone.controlType;return e==="starting"?"assets/zone-banners/starting.svg":e==="contested"?"assets/zone-banners/contested.svg":"assets/zone-banners/pvp.svg"}get controlLabel(){return this.zone.controlType==="starting"?"Starting Zone":this.zone.controlType==="contested"?"Contested":"PvP Zone"}onKeyDown(e){e.key==="Escape"&&this.close()}static \u0275fac=function(t){return new(t||i)(Bt(Qt))};static \u0275cmp=pt({type:i,selectors:[["app-zone-info"]],hostBindings:function(t,n){t&1&&mt("keydown",function(s){return n.onKeyDown(s)},Wi)},inputs:{zone:"zone"},decls:70,vars:15,consts:[["role","dialog","aria-label","Zone info",1,"overlay"],[1,"backdrop",3,"click"],[1,"window",3,"wheel"],[1,"window__header"],[1,"title"],[1,"title__top"],[1,"title__bottom"],["type","button","aria-label","Close",1,"close",3,"click"],[1,"content"],[1,"left"],[1,"card"],[1,"card__title"],[1,"kv"],[1,"kv__k"],[1,"kv__v"],["aria-label","Resources gathered",1,"bar"],[1,"bar__fill"],[1,"bar__text"],[1,"right"],[1,"paper"],[1,"paper__title"],[1,"paper__body"],[1,"section"],[1,"section__title"],[1,"chips"],[1,"chip"],[1,"list"]],template:function(t,n){t&1&&(Re(0,"div",0)(1,"div",1),On("click",function(){return n.close()}),Ie(),Re(2,"div",2),On("wheel",function(s){return s.stopPropagation()}),Re(3,"header",3)(4,"div",4)(5,"div",5),q(6),Ie(),Re(7,"div",6),q(8),Ie()(),Re(9,"button",7),On("click",function(){return n.close()}),q(10," \u2715 "),Ie()(),Re(11,"div",8)(12,"section",9)(13,"div",10)(14,"div",11),q(15,"Zone"),Ie(),Re(16,"div",12)(17,"div",13),q(18,"Biome"),Ie(),Re(19,"div",14),q(20),Ie()(),Re(21,"div",12)(22,"div",13),q(23,"Level Range"),Ie(),Re(24,"div",14),q(25),Ie()(),Re(26,"div",12)(27,"div",13),q(28,"Tile"),Ie(),Re(29,"div",14),q(30),Ie()()(),Re(31,"div",10)(32,"div",11),q(33,"Progress"),Ie(),Re(34,"div",12)(35,"div",13),q(36,"Resources gathered"),Ie(),Re(37,"div",14)(38,"span",15),Xi(39,"span",16),Ie(),Re(40,"span",17),q(41),Ie()()(),Re(42,"div",12)(43,"div",13),q(44,"Quests"),Ie(),Re(45,"div",14),q(46),Ie()()()(),Re(47,"section",18)(48,"div",19)(49,"div",20),q(50,"Field Notes"),Ie(),Re(51,"div",21)(52,"div",22)(53,"div",23),q(54,"Recommended professions"),Ie(),Re(55,"div",24),vt(56,P_,2,1,"span",25,ni),Ie()(),Re(58,"div",22)(59,"div",23),q(60,"Hazards"),Ie(),Re(61,"ul",26),vt(62,L_,2,1,"li",null,ni),Ie()(),Re(64,"div",22)(65,"div",23),q(66,"Useful info"),Ie(),Re(67,"ul",26),vt(68,D_,2,1,"li",null,ni),Ie()()()()()()()()),t&2&&(z(2),yi("background-image","url("+n.bannerUrl+")"),z(4),De(n.controlLabel),z(2),De(n.zone.zoneName),z(12),De(n.zone.biomeName),z(5),Bn("",n.zone.levelRange.min,"\u2013",n.zone.levelRange.max),z(5),Dc("#",n.zone.tileId," (q=",n.zone.q,", r=",n.zone.r,")"),z(9),yi("width",n.zone.resourcesGatheredPercent,"%"),z(2),Rt("",n.zone.resourcesGatheredPercent,"%"),z(5),Bn(" ",n.zone.questsCompleted,"/",n.zone.questsAvailable," completed "),z(10),yt(n.zone.recommendedProfessions),z(6),yt(n.zone.hazards),z(6),yt(n.zone.notes))},styles:['.overlay[_ngcontent-%COMP%]{position:absolute;inset:0;pointer-events:auto;display:grid;place-items:center}.backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background:#0000008c;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}.window[_ngcontent-%COMP%]{position:relative;width:min(1060px,100vw - 28px);height:min(680px,100vh - 120px);border-radius:16px;border:1px solid rgba(0,255,0,.22);background-color:#000000d6;background-repeat:no-repeat;background-position:center;background-size:cover;box-shadow:0 24px 90px #0000008c;overflow:hidden;overscroll-behavior:contain}.window[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:#000000ad}.window__header[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.1);background:#ffffff08}.title__top[_ngcontent-%COMP%]{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#e7ecffb3}.title__bottom[_ngcontent-%COMP%]{margin-top:2px;font-size:18px;font-weight:950}.close[_ngcontent-%COMP%]{all:unset;cursor:pointer;width:34px;height:34px;display:grid;place-items:center;border-radius:10px;border:1px solid rgba(255,255,255,.14);background:#ffffff0a}.close[_ngcontent-%COMP%]:hover{border-color:#00ff004d;background:#00ff0012}.content[_ngcontent-%COMP%]{position:relative;height:calc(100% - 63px);display:grid;grid-template-columns:360px 1fr;gap:14px;padding:14px;min-height:0}.left[_ngcontent-%COMP%]{display:grid;gap:14px;align-content:start;min-height:0}.card[_ngcontent-%COMP%]{border-radius:14px;border:1px solid rgba(255,255,255,.12);background:#0000008c;overflow:hidden}.card__title[_ngcontent-%COMP%]{padding:10px 12px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#e7ecffa6;border-bottom:1px solid rgba(255,255,255,.1);background:#ffffff08}.kv[_ngcontent-%COMP%]{padding:10px 12px;display:grid;grid-template-columns:1fr 1.4fr;gap:10px;align-items:center;border-top:1px solid rgba(255,255,255,.06)}.kv[_ngcontent-%COMP%]:first-of-type{border-top:none}.kv__k[_ngcontent-%COMP%]{color:#e7ecffa6;font-size:12px;font-weight:700}.kv__v[_ngcontent-%COMP%]{color:#e7ecffeb;font-size:12px;font-weight:900;min-width:0}.bar[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;width:140px;height:10px;border-radius:999px;border:1px solid rgba(255,255,255,.16);background:#00000059;overflow:hidden;margin-right:8px}.bar__fill[_ngcontent-%COMP%]{display:block;height:100%;background:linear-gradient(90deg,#00ff008c,#3aa3ff59)}.bar__text[_ngcontent-%COMP%]{font-weight:900;color:#e7ecffcc}.right[_ngcontent-%COMP%]{min-width:0;min-height:0}.paper[_ngcontent-%COMP%]{height:100%;border-radius:14px;border:1px solid rgba(255,255,255,.12);background:radial-gradient(circle at 25% 20%,rgba(255,220,140,.16),transparent 52%),radial-gradient(circle at 75% 70%,rgba(255,220,140,.1),transparent 55%),linear-gradient(180deg,#ffffff0f,#0003),#00000038;overflow:hidden;display:grid;grid-template-rows:auto 1fr;min-height:0}.paper__title[_ngcontent-%COMP%]{padding:14px 14px 12px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#fff1d6b8;border-bottom:1px solid rgba(0,0,0,.25);background:#0000001f}.paper__body[_ngcontent-%COMP%]{padding:12px 14px 14px;overflow:auto;min-height:0;color:#fff1d6e6;line-height:1.45;scrollbar-width:thin;scrollbar-color:rgba(0,255,0,.38) rgba(0,0,0,.25)}.paper__body[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px}.paper__body[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#00000040;border-left:1px solid rgba(255,255,255,.08)}.paper__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#00ff0059,#0003);border:1px solid rgba(0,255,0,.22);border-radius:999px}.paper__body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,#00ff0080,#00000038);border-color:#00ff0057}.section[_ngcontent-%COMP%] + .section[_ngcontent-%COMP%]{margin-top:12px;padding-top:12px;border-top:1px dashed rgba(0,0,0,.3)}.section__title[_ngcontent-%COMP%]{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#fff1d6b8}.chips[_ngcontent-%COMP%]{margin-top:10px;display:flex;flex-wrap:wrap;gap:8px}.chip[_ngcontent-%COMP%]{display:inline-block;padding:4px 9px;border-radius:999px;border:1px solid rgba(0,0,0,.35);background:#fff1d61f;color:#fff1d6eb;font-weight:900;font-size:12px}.list[_ngcontent-%COMP%]{margin:10px 0 0;padding-left:18px;color:#fff1d6e0}.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:6px}@media(max-width:980px){.window[_ngcontent-%COMP%]{height:min(760px,100vh - 90px)}.content[_ngcontent-%COMP%]{grid-template-columns:1fr}}'],changeDetection:0})};var bc=(i,e)=>e.id;function F_(i,e){if(i&1&&(J(0,"span",24),q(1,"Occupied"),Z()),i&2){let t=qe().$implicit;ot("title",t.assignment)}}function U_(i,e){i&1&&(J(0,"span",25),q(1,"Idle"),Z())}function O_(i,e){if(i&1&&(J(0,"button",18)(1,"div",19)(2,"div",20),q(3),Z(),J(4,"div",21),q(5),Z()(),J(6,"div",22)(7,"span",23),q(8),Z(),et(9,F_,2,1,"span",24)(10,U_,2,0,"span",25),Z()()),i&2){let t=e.$implicit;Ut("entry--active",!!t.assignment),z(2),ot("title",t.name),z(),De(t.name),z(2),Rt("Lv ",t.level),z(3),De(t.role),z(),tt(t.assignment?9:10)}}function B_(i,e){if(i&1&&(J(0,"app-log-list",11)(1,"div",14)(2,"span",15),q(3),Z(),J(4,"span",16),q(5),Z()(),vt(6,O_,11,7,"button",17,bc),Z()),i&2){let t=qe();ot("count",t.empire.troops.length),z(3),Rt("Idle ",t.idleCount(t.empire.troops)),z(2),Rt("Occupied ",t.occupiedCount(t.empire.troops)),z(),yt(t.empire.troops)}}function k_(i,e){if(i&1&&(J(0,"span",15),q(1),Z()),i&2){let t=e.$implicit;z(),De(t)}}function z_(i,e){if(i&1&&(J(0,"span",16),q(1),Z()),i&2){let t=e.$implicit;z(),De(t)}}function V_(i,e){if(i&1&&(J(0,"span",24),q(1,"Occupied"),Z()),i&2){let t=qe().$implicit;ot("title",t.assignment)}}function H_(i,e){i&1&&(J(0,"span",25),q(1,"Idle"),Z())}function G_(i,e){if(i&1&&(J(0,"button",18)(1,"div",19)(2,"div",20),q(3),Z(),J(4,"div",21),q(5),Z()(),J(6,"div",22)(7,"span",23),q(8),Z(),et(9,V_,2,1,"span",24)(10,H_,2,0,"span",25),Z()()),i&2){let t=e.$implicit;Ut("entry--active",!!t.assignment),z(2),ot("title",t.name),z(),De(t.name),z(2),Rt("Lv ",t.level),z(3),De(t.role),z(),tt(t.assignment?9:10)}}function W_(i,e){if(i&1&&(J(0,"app-log-list",12)(1,"div",26)(2,"span",15),q(3),Z(),J(4,"span",16),q(5),Z()(),J(6,"div",27)(7,"div",28),q(8,"Available professions"),Z(),J(9,"div",29),vt(10,k_,2,1,"span",15,Un),vt(12,z_,2,1,"span",16,Un),Z()(),vt(14,G_,11,7,"button",17,bc),Z()),i&2){let t=qe();ot("count",t.empire.workers.length),z(3),Rt("Idle ",t.idleCount(t.empire.workers)),z(2),Rt("Occupied ",t.occupiedCount(t.empire.workers)),z(5),yt(t.availableWorkerTypes.gatherers),z(2),yt(t.availableWorkerTypes.crafters),z(2),yt(t.empire.workers)}}function X_(i,e){if(i&1&&(J(0,"span",31),q(1),Z()),i&2){let t=e.$implicit,n=qe(2);z(),De(n.zoneTypeLabel(t))}}function q_(i,e){if(i&1&&(J(0,"span",25),q(1),Z()),i&2){let t=e.$implicit,n=qe(3);z(),De(n.zoneTypeLabel(t))}}function Y_(i,e){if(i&1&&(J(0,"button",18)(1,"div",19)(2,"div",20),q(3),Z(),J(4,"div",21),q(5),Z()(),J(6,"div",22)(7,"span",23),vt(8,q_,2,1,"span",25,Un),Z()()()),i&2){let t=e.$implicit;z(2),ot("title",t.name),z(),De(t.name),z(2),De(t.category),z(3),yt(t.fromZoneTypeIds)}}function Z_(i,e){if(i&1&&(J(0,"app-log-list",13)(1,"div",30),vt(2,X_,2,1,"span",31,Un),Z(),vt(4,Y_,10,3,"button",18,bc),Z()),i&2){let t=qe();ot("count",t.availableResources.length),z(2),yt(t.empire.zoneTypeIds),z(2),yt(t.availableResources)}}var Dr=class i{constructor(e){this.store=e;this.open$=this.store.select(Na)}empire;open$;tab="troops";toggle(){this.store.dispatch(Wc())}close(){this.store.dispatch(Gc())}setTab(e){this.tab=e}occupiedCount(e){return e.reduce((t,n)=>t+(n.assignment?1:0),0)}idleCount(e){return e.length-this.occupiedCount(e)}get availableResources(){let e=new Set(this.empire.zoneTypeIds??[]),t={1:[{id:"grain",name:"Grain"},{id:"clay",name:"Clay"}],2:[{id:"timber",name:"Timber"},{id:"herbs",name:"Herbs"},{id:"hides",name:"Hides"}],3:[{id:"iron_ore",name:"Iron Ore"},{id:"stone",name:"Stone"},{id:"gems",name:"Gems"}],4:[{id:"crystals",name:"Crystals"},{id:"mushrooms",name:"Cave Mushrooms"}],5:[{id:"reeds",name:"Reeds"},{id:"bog_iron",name:"Bog Iron"}],6:[{id:"fish",name:"Fish"},{id:"flax",name:"Flax"}],7:[{id:"salt",name:"Salt"},{id:"spice",name:"Spice"}],8:[{id:"fur",name:"Fur"},{id:"ice",name:"Ice Shards"}],9:[{id:"sulfur",name:"Sulfur"},{id:"obsidian",name:"Obsidian"}],10:[{id:"seaweed",name:"Seaweed"},{id:"coral",name:"Coral"}]},n=[{id:"planks",name:"Planks",requires:["timber"]},{id:"ingots",name:"Iron Ingots",requires:["iron_ore"]},{id:"leather",name:"Leather",requires:["hides"]},{id:"potions",name:"Potions",requires:["herbs"]},{id:"rations",name:"Rations",requires:["fish","grain"]},{id:"stone_blocks",name:"Stone Blocks",requires:["stone"]},{id:"thread",name:"Thread",requires:["flax"]}],r=new Map;for(let[a,l]of Object.entries(t)){let c=Number(a);if(e.has(c))for(let h of l){let d=r.get(h.id);d?d.fromZoneTypeIds.push(c):r.set(h.id,Gi(Fn({},h),{fromZoneTypeIds:[c]}))}}let s=[];for(let a of n){if(!a.requires.some(h=>r.has(h)))continue;let c=new Set;a.requires.forEach(h=>r.get(h)?.fromZoneTypeIds.forEach(d=>c.add(d))),s.push({id:a.id,name:a.name,fromZoneTypeIds:Array.from(c).sort((h,d)=>h-d)})}let o=[];for(let a of Array.from(r.values()).sort((l,c)=>l.name.localeCompare(c.name)))o.push({id:a.id,name:a.name,category:"Gathering",fromZoneTypeIds:a.fromZoneTypeIds.sort((l,c)=>l-c)});for(let a of s.sort((l,c)=>l.name.localeCompare(c.name)))o.push({id:a.id,name:a.name,category:"Crafting",fromZoneTypeIds:a.fromZoneTypeIds});return o}get availableWorkerTypes(){let e=this.availableResources,t=new Set,n=new Set;return e.filter(r=>r.category==="Gathering").forEach(r=>{switch(r.id){case"timber":t.add("Lumberjacks");break;case"herbs":t.add("Herbalists");break;case"hides":case"fur":t.add("Hunters");break;case"iron_ore":case"bog_iron":t.add("Miners");break;case"stone":t.add("Quarrymen");break;case"fish":t.add("Fishers");break;case"flax":t.add("Farmhands");break;case"crystals":t.add("Delvers");break;default:t.add("Gatherers")}}),e.filter(r=>r.category==="Crafting").forEach(r=>{switch(r.id){case"planks":n.add("Carpenters");break;case"ingots":n.add("Smelters"),n.add("Blacksmiths");break;case"leather":n.add("Tanners");break;case"potions":n.add("Alchemists");break;case"rations":n.add("Cooks");break;case"stone_blocks":n.add("Masons");break;case"thread":n.add("Weavers");break;default:n.add("Crafters")}}),{gatherers:Array.from(t).sort((r,s)=>r.localeCompare(s)),crafters:Array.from(n).sort((r,s)=>r.localeCompare(s))}}zoneTypeLabel(e){switch(e){case 1:return"Heartland Plains";case 2:return"Ancient Forest";case 3:return"Highland Mountains";case 4:return"Crystal Caves";case 5:return"Swamp Mire";case 6:return"Riverlands";case 7:return"Desert Badlands";case 8:return"Tundra Frostwild";case 9:return"Volcanic Wastes";case 10:return"Coastal Isles";default:return`Zone Type ${e}`}}onKeyDown(e){e.key==="Escape"&&this.close()}static \u0275fac=function(t){return new(t||i)(Bt(Qt))};static \u0275cmp=pt({type:i,selectors:[["app-empire-panel"]],hostBindings:function(t,n){t&1&&mt("keydown",function(s){return n.onKeyDown(s)},Wi)},inputs:{empire:"empire"},decls:25,vars:15,consts:[["aria-label","Empire panel toggle",1,"dock"],["type","button",1,"dock__btn","ed-hud-action-btn",3,"click"],["role","complementary","aria-label","Empire",1,"panel",3,"pointerdown","click","wheel"],[1,"panel__header"],[1,"title"],[1,"title__top"],[1,"title__bottom"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-label","Empire categories",1,"tabs"],["type","button",1,"tab",3,"click"],[1,"panel__body"],["label","Troops",3,"count"],["label","Workers",3,"count"],["label","Resources",3,"count"],["logTop","","aria-label","Troops summary",1,"chips"],[1,"chip","chip--idle"],[1,"chip","chip--busy"],["type","button","role","listitem",1,"entry",3,"entry--active"],["type","button","role","listitem",1,"entry"],[1,"entry__row"],[1,"entry__title",3,"title"],[1,"entry__level"],[1,"entry__meta"],[1,"entry__zone"],[1,"entry__tag",3,"title"],[1,"entry__tag"],["logTop","","aria-label","Workers summary",1,"chips"],["logTop","",1,"subsection"],[1,"subsection__title"],[1,"chips"],["logTop","","aria-label","Known biomes",1,"chips"],[1,"chip"]],template:function(t,n){if(t&1){let r=qi();Nc(0),bi(1,"async"),J(2,"div",0)(3,"button",1),mt("click",function(){return nn(r),rn(n.toggle())}),q(4," Empire "),Z()(),J(5,"aside",2),mt("pointerdown",function(o){return nn(r),rn(o.stopPropagation())})("click",function(o){return nn(r),rn(o.stopPropagation())})("wheel",function(o){return nn(r),rn(o.stopPropagation())}),J(6,"header",3)(7,"div",4)(8,"div",5),q(9,"Empire"),Z(),J(10,"div",6),q(11),Z()(),J(12,"button",7),mt("click",function(){return nn(r),rn(n.close())}),q(13," \u2715 "),Z()(),J(14,"nav",8)(15,"button",9),mt("click",function(){return nn(r),rn(n.setTab("troops"))}),q(16," Troops "),Z(),J(17,"button",9),mt("click",function(){return nn(r),rn(n.setTab("workers"))}),q(18," Workers "),Z(),J(19,"button",9),mt("click",function(){return nn(r),rn(n.setTab("resources"))}),q(20," Resources "),Z()(),J(21,"div",10),et(22,B_,8,3,"app-log-list",11),et(23,W_,16,3,"app-log-list",12),et(24,Z_,6,1,"app-log-list",13),Z()()}if(t&2){let r=Mi(1,13,n.open$)??!1;z(3),Tn("aria-expanded",r),z(2),Ut("panel--open",r),z(6),De(n.empire.name),z(4),Ut("tab--active",n.tab==="troops"),z(2),Ut("tab--active",n.tab==="workers"),z(2),Ut("tab--active",n.tab==="resources"),z(3),tt(n.tab==="troops"?22:-1),z(),tt(n.tab==="workers"?23:-1),z(),tt(n.tab==="resources"?24:-1)}},dependencies:[Ir,Pr,Ls],styles:[".dock[_ngcontent-%COMP%]{pointer-events:auto;position:absolute;left:12px;top:140px;z-index:20}.dock__btn[_ngcontent-%COMP%]{display:inline-grid}.panel[_ngcontent-%COMP%]{pointer-events:none;position:absolute;left:12px;top:90px;height:min(560px,100vh - 260px);width:min(420px,100vw - 24px);border-radius:16px;border:var(--ed-panel-border-width) solid rgb(var(--ed-accent-rgb)/.22);background:rgb(var(--ed-bg-rgb)/.82);box-shadow:0 24px 90px #0000008c;overflow:hidden;display:grid;grid-template-rows:auto auto 1fr;transform:translate(calc(-100% - 16px));opacity:0;transition:transform .56s cubic-bezier(.2,.9,.2,1),opacity .56s cubic-bezier(.2,.9,.2,1);z-index:20}.panel--open[_ngcontent-%COMP%]{pointer-events:auto;transform:translate(0);opacity:1}.panel__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.1);background:rgb(var(--ed-border-rgb)/.03)}.title__top[_ngcontent-%COMP%]{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:rgb(var(--ed-text-rgb)/.7)}.title__bottom[_ngcontent-%COMP%]{margin-top:2px;font-size:18px;font-weight:900}.close[_ngcontent-%COMP%]{all:unset;cursor:pointer;width:34px;height:34px;display:grid;place-items:center;border-radius:10px;border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.14);background:rgb(var(--ed-border-rgb)/.04)}.close[_ngcontent-%COMP%]:hover{border-color:rgb(var(--ed-accent-rgb)/.3);background:rgb(var(--ed-accent-rgb)/.07)}.panel__body[_ngcontent-%COMP%]{padding:14px;min-height:0;display:grid;grid-template-rows:1fr;gap:14px}.tabs[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding:10px 12px;border-bottom:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.1);background:rgb(var(--ed-bg-rgb)/.18)}.tab[_ngcontent-%COMP%]{all:unset;cursor:pointer;-webkit-user-select:none;user-select:none;text-align:center;padding:8px 10px;border-radius:12px;border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.14);background:rgb(var(--ed-border-rgb)/.03);font-size:11px;font-weight:950;letter-spacing:.08em;text-transform:uppercase;color:rgb(var(--ed-text-rgb)/.78)}.tab[_ngcontent-%COMP%]:hover{border-color:rgb(var(--ed-accent-rgb)/.22);background:rgb(var(--ed-accent-rgb)/.06);color:rgb(var(--ed-text-rgb)/.92)}.tab--active[_ngcontent-%COMP%]{border-color:rgb(var(--ed-accent-rgb)/.32);background:linear-gradient(180deg,rgb(var(--ed-accent-rgb)/.12),rgb(var(--ed-bg-rgb)/.18));color:rgb(var(--ed-text-rgb)/.95);box-shadow:0 0 0 1px rgb(var(--ed-accent-rgb)/.08) inset}.chips[_ngcontent-%COMP%]{margin-top:10px;display:flex;flex-wrap:wrap;gap:8px}.chip[_ngcontent-%COMP%]{font-size:10px;padding:2px 8px;border-radius:999px;border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.14);background:rgb(var(--ed-bg-rgb)/.18);color:rgb(var(--ed-text-rgb)/.82);font-weight:900}.chip--idle[_ngcontent-%COMP%]{border-color:#3aa3ff47;background:#3aa3ff14}.chip--busy[_ngcontent-%COMP%]{border-color:rgb(var(--ed-accent-rgb)/.28);background:rgb(var(--ed-accent-rgb)/.08)}.entry__row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:baseline}.entry__title[_ngcontent-%COMP%]{font-size:12px;font-weight:900;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.entry__level[_ngcontent-%COMP%]{font-size:11px;font-weight:900;color:rgb(var(--ed-text-rgb)/.7);border:var(--ed-panel-border-width) solid rgb(var(--ed-border-rgb)/.14);border-radius:10px;padding:1px 7px;background:rgb(var(--ed-border-rgb)/.03)}.entry__meta[_ngcontent-%COMP%]{margin-top:2px;display:flex;align-items:center;gap:10px;color:rgb(var(--ed-text-rgb)/.6);font-size:11px;min-width:0}.entry__zone[_ngcontent-%COMP%]{min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.entry__tag[_ngcontent-%COMP%]{font-size:10px;padding:1px 7px;border-radius:999px;border:var(--ed-panel-border-width) solid rgb(var(--ed-accent-rgb)/.28);background:rgb(var(--ed-accent-rgb)/.07);color:rgb(var(--ed-text-rgb)/.88);white-space:nowrap}.subsection[_ngcontent-%COMP%]{margin-top:10px;padding:10px;border-radius:12px;border:var(--ed-panel-border-width) dashed rgb(var(--ed-border-rgb)/.14);background:rgb(var(--ed-bg-rgb)/.16)}.subsection__title[_ngcontent-%COMP%]{font-size:11px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:rgb(var(--ed-text-rgb)/.6)}@media(max-width:1100px){.panel[_ngcontent-%COMP%]{height:min(540px,100vh - 240px)}}"],changeDetection:0})};function J_(i,e){if(i&1&&_t(0,"app-hero-inventory",9),i&2){let t=qe();ot("hero",t.hud.hero)("equipment",t.equipment)}}function K_(i,e){if(i&1&&_t(0,"app-quest-log",10),i&2){let t=qe();ot("heroName",t.hud.hero.HeroName)("quests",t.hud.quests)}}function Q_(i,e){if(i&1&&_t(0,"app-zone-info",11),i&2){let t=qe(2);ot("zone",t.zoneInfoFromTile(e))}}function j_(i,e){if(i&1&&(et(0,Q_,1,1,"app-zone-info",11),bi(1,"async")),i&2){let t,n=qe();tt((t=Mi(1,1,n.zoneInfoTile$))?0:-1,t)}}var Xa=class i{store=Ka(Qt);destroyRef=Ka(Pc);scene=new Da;hud=Id();heroInventoryOpen$=this.store.select(Pd);questLogOpen$=this.store.select(Ld);zoneInfoOpen$=this.store.select(Dd);empirePanelOpen$=this.store.select(Na);zoneInfoTile$=this.store.select(Nd);constructor(){this.scene.setTileClickHandler(e=>{this.scene.setSelectedTile(e.q,e.r),this.store.dispatch(Vc({tile:e}))}),Ic([this.zoneInfoOpen$,this.heroInventoryOpen$,this.questLogOpen$,this.empirePanelOpen$]).pipe(Fc(this.destroyRef)).subscribe(([e,t,n,r])=>{this.scene.setTileClickEnabled(!(e||t||n||r)),e||this.scene.clearSelectedTile()})}zoneInfoFromTile(e){let t=this.scene.getZoneById(e.zoneId),n=this.scene.getControlTypeForAxial(e.q,e.r),r=t?.zoneTypeId??1,s=ex(r),o=t?.name??(e.zoneId?`Zone ${e.zoneId}`:"Wilderness"),a=t?.levelRange??(n==="starting"?{min:1,max:12}:n==="contested"?{min:12,max:28}:{min:28,max:50}),l=Math.abs(e.zoneId*2654435761+e.q*73856093+e.r*19349663)>>>0,c=18+l%73,h=n==="starting"?8+l%7:n==="contested"?10+l%9:12+l%10,d=Math.min(h,Math.floor(c/100*h)),f=n==="starting"?["Low threat patrols; ideal for gathering and first contracts.","Faster travel between nodes; plenty of basic reagents.","NPC caravans occasionally spawn vendor restocks."]:n==="contested"?["Mixed threats and roaming elites; bring consumables.","Resource nodes can be interrupted by skirmishes.","Expect dynamic events that open temporary quest chains."]:["High risk: enemy hunters and dangerous elites.","Rare nodes appear after combat events; stay mobile.","Control points rotate\u2014watch for ambushes."],p=r===2?["Herbalism","Alchemy","Skinning"]:r===3?["Mining","Blacksmithing","Engineering"]:r===6?["Fishing","Cooking","Alchemy"]:r===9?["Mining","Engineering","Alchemy"]:["Gathering","Cooking","Crafting"],_=n==="starting"?["Wandering critters","Minor debuffs near ruins"]:n==="contested"?["Roaming elites","Skirmish events","Ambush patrols"]:["PvP ambushes","Elite packs","Zone-wide hazards during events"];return{tileId:`${e.q},${e.r}`,q:e.q,r:e.r,zoneId:e.zoneId,zoneName:o,biomeName:s,biomeTypeId:r,controlType:n,levelRange:a,resourcesGatheredPercent:c,questsAvailable:h,questsCompleted:d,notes:f,recommendedProfessions:p,hazards:_}}equipment={Head:{id:"head-1",name:"Cowl of the Green Flame",slot:"Head",rarity:"rare"},Neck:{id:"neck-1",name:"Pendant of Hexes",slot:"Neck",rarity:"common"},Shoulder:{id:"shoulder-1",name:"Mantle of Thorns",slot:"Shoulder",rarity:"rare"},Back:{id:"back-1",name:"Cloak of Night Winds",slot:"Back",rarity:"common"},Chest:{id:"chest-1",name:"Robes of the Warlock",slot:"Chest",rarity:"rare"},Wrist:{id:"wrist-1",name:"Bindings of Focus",slot:"Wrist",rarity:"common"},Hands:{id:"hands-1",name:"Gloves of Rituals",slot:"Hands",rarity:"common"},Waist:{id:"waist-1",name:"Runed Sash",slot:"Waist",rarity:"common"},Legs:{id:"legs-1",name:"Legwraps of Embers",slot:"Legs",rarity:"rare"},Feet:{id:"feet-1",name:"Boots of Quiet Steps",slot:"Feet",rarity:"common"},Ring1:{id:"ring-1",name:"Band of Sparks",slot:"Ring1",rarity:"common"},Ring2:{id:"ring-2",name:"Emerald Signet",slot:"Ring2",rarity:"rare"},Trinket1:{id:"trinket-1",name:"Totem of Echoes",slot:"Trinket1",rarity:"common"},Trinket2:{id:"trinket-2",name:"Charm of Warding",slot:"Trinket2",rarity:"common"},MainHand:{id:"mh-1",name:"Staff of Verdant Power",slot:"MainHand",rarity:"epic"},OffHand:{id:"oh-1",name:"Hex Tome",slot:"OffHand",rarity:"rare"}};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=pt({type:i,selectors:[["app-map"]],standalone:!1,decls:17,vars:13,consts:[[1,"page"],[1,"header"],[1,"title"],[1,"subtitle"],[1,"panel"],[1,"viewport"],[3,"controller"],[3,"state","mapScene"],[3,"empire"],[3,"hero","equipment"],[3,"heroName","quests"],[3,"zone"]],template:function(t,n){t&1&&(J(0,"div",0)(1,"header",1)(2,"div",2),q(3,"Map"),Z(),J(4,"div",3),q(5,"Drag with mouse to pan (prototype)"),Z()(),J(6,"section",4)(7,"div",5),_t(8,"app-three-viewport",6)(9,"app-hud",7)(10,"app-empire-panel",8),et(11,J_,1,2,"app-hero-inventory",9),bi(12,"async"),et(13,K_,1,2,"app-quest-log",10),bi(14,"async"),et(15,j_,2,3),bi(16,"async"),Z()()()),t&2&&(z(8),ot("controller",n.scene),z(),ot("state",n.hud)("mapScene",n.scene),z(),ot("empire",n.hud.empire),z(),tt(Mi(12,7,n.heroInventoryOpen$)?11:-1),z(2),tt(Mi(14,9,n.questLogOpen$)?13:-1),z(2),tt(Mi(16,11,n.zoneInfoOpen$)?15:-1))},dependencies:[Ua,Ha,Ga,Lr,Wa,Dr,Ls],styles:[".page[_ngcontent-%COMP%]{height:100vh;display:grid;grid-template-rows:auto 1fr;background:#000;color:#e7ecff;overflow:hidden}.header[_ngcontent-%COMP%]{padding:20px 24px 12px;border-bottom:1px solid rgba(0,255,0,.15)}.title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;letter-spacing:.2px}.subtitle[_ngcontent-%COMP%]{margin-top:4px;color:#e7ecffb3;font-size:13px}.panel[_ngcontent-%COMP%]{padding:16px;min-height:0;overflow:hidden}.viewport[_ngcontent-%COMP%]{height:100%;border-radius:14px;overflow:hidden;border:1px solid rgba(0,255,0,.2);position:relative}"]})};function ex(i){switch(i){case 1:return"Heartland Plains";case 2:return"Ancient Forest";case 3:return"Highland Mountains";case 4:return"Crystal Caves";case 5:return"Swamp Mire";case 6:return"Riverlands";case 7:return"Desert Badlands";case 8:return"Tundra Frostwild";case 9:return"Volcanic Wastes";case 10:return"Coastal Isles";default:return"Unknown Biome"}}var tx=[{path:"",component:Xa}],qa=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ti({type:i});static \u0275inj=ei({imports:[ja.forChild(tx),ja]})};var Ya=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ti({type:i});static \u0275inj=ei({imports:[$i]})};var Ud=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ti({type:i});static \u0275inj=ei({imports:[$i,qa,Ya,Lr,Dr]})};export{Ud as MapModule};
