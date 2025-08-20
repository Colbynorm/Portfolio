import{e as eh,i as _e,l as nh,n as rh,f as Go,b as tt,w as Tt,r as Ct,d as er,a as ke,T as sh,F as ih,g as oh,o as Is,c as ah,t as nr,_ as uh}from"./index-DDiKYFFk.js";import{S as ch}from"./Snackbar-B7wVmiKh.js";const lh=()=>{};var Ko={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},hh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},du={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,T=(o&3)<<4|c>>4;let w=(c&15)<<2|d>>6,C=d&63;h||(C=64,a||(w=64)),r.push(e[m],e[T],e[w],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(hu(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):hh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||d==null||T==null)throw new dh;const w=o<<2|c>>4;if(r.push(w),d!==64){const C=c<<4&240|d>>2;if(r.push(C),T!==64){const b=d<<6&192|T;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fh=function(n){const t=hu(n);return du.encodeByteArray(t,!0)},gr=function(n){return fh(n).replace(/\./g,"")},mh=function(n){try{return du.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=()=>ph().__FIREBASE_DEFAULTS__,_h=()=>{if(typeof process>"u"||typeof Ko>"u")return;const n=Ko.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&mh(n[1]);return t&&JSON.parse(t)},si=()=>{try{return lh()||gh()||_h()||yh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Eh=n=>{var t,e;return(e=(t=si())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},vh=n=>{const t=Eh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},fu=()=>{var n;return(n=si())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n){return n.endsWith(".cloudworkstations.dev")}async function Ih(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gr(JSON.stringify(e)),gr(JSON.stringify(a)),""].join(".")}const gn={};function Ah(){const n={prod:[],emulator:[]};for(const t of Object.keys(gn))gn[t]?n.emulator.push(t):n.prod.push(t);return n}function Rh(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Wo=!1;function Ch(n,t){if(typeof window>"u"||typeof document>"u"||!ii(window.location.host)||gn[n]===t||gn[n]||Wo)return;gn[n]=t;function e(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=Ah().prod.length>0;function a(){const w=document.getElementById(r);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,C){w.setAttribute("width","24"),w.setAttribute("id",C),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Wo=!0,a()},w}function m(w,C){w.setAttribute("id",C),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=Rh(r),C=e("text"),b=document.getElementById(C)||document.createElement("span"),N=e("learnmore"),D=document.getElementById(N)||document.createElement("a"),H=e("preprendIcon"),U=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const j=w.element;c(j),m(D,N);const X=d();h(U,H),j.append(U,b,D,X),document.body.appendChild(j)}o?(b.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sh(){var n;const t=(n=si())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ph(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vh(){return!Sh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mu(){try{return typeof indexedDB=="object"}catch{return!1}}function pu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Dh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="FirebaseError";class le extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=kh,Object.setPrototypeOf(this,le.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kr.prototype.create)}}class kr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Nh(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new le(s,c,r)}}function Nh(n,t){return n.replace(xh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const xh=/\{\$([^}]+)}/g;function In(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Qo(o)&&Qo(a)){if(!In(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Qo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=1e3,Mh=2,Lh=4*60*60*1e3,Fh=.5;function Xo(n,t=Oh,e=Mh){const r=t*Math.pow(e,n),s=Math.round(Fh*r*(Math.random()-.5)*2);return Math.min(Lh,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n){return n&&n._delegate?n._delegate:n}class qt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Th;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($h(t))try{this.getOrInitializeService({instanceIdentifier:ye})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ye){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ye){return this.instances.has(t)}getOptions(t=ye){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ye){return this.component?this.component.multipleInstances?t:ye:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bh(n){return n===ye?void 0:n}function $h(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Uh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const qh={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},zh=z.INFO,Hh={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Gh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Hh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class oi{constructor(t){this.name=t,this._logLevel=zh,this._logHandler=Gh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?qh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const Kh=(n,t)=>t.some(e=>n instanceof e);let Yo,Jo;function Wh(){return Yo||(Yo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qh(){return Jo||(Jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gu=new WeakMap,xs=new WeakMap,_u=new WeakMap,ws=new WeakMap,ai=new WeakMap;function Xh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Jt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&gu.set(e,n)}).catch(()=>{}),ai.set(t,n),t}function Yh(n){if(xs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});xs.set(n,t)}let Os={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return xs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||_u.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jh(n){Os=n(Os)}function Zh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(As(this),t,...e);return _u.set(r,t.sort?t.sort():[t]),Jt(r)}:Qh().includes(n)?function(...t){return n.apply(As(this),t),Jt(gu.get(this))}:function(...t){return Jt(n.apply(As(this),t))}}function td(n){return typeof n=="function"?Zh(n):(n instanceof IDBTransaction&&Yh(n),Kh(n,Wh())?new Proxy(n,Os):n)}function Jt(n){if(n instanceof IDBRequest)return Xh(n);if(ws.has(n))return ws.get(n);const t=td(n);return t!==n&&(ws.set(n,t),ai.set(t,n)),t}const As=n=>ai.get(n);function yu(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Jt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Jt(a.result),h.oldVersion,h.newVersion,Jt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const ed=["get","getKey","getAll","getAllKeys","count"],nd=["put","add","delete","clear"],Rs=new Map;function Zo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Rs.get(t))return Rs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=nd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ed.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[e](...c),s&&h.done]))[0]};return Rs.set(t,o),o}Jh(n=>({...n,get:(t,e,r)=>Zo(t,e)||n.get(t,e,r),has:(t,e)=>!!Zo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(sd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function sd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ms="@firebase/app",ta="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new oi("@firebase/app"),id="@firebase/app-compat",od="@firebase/analytics-compat",ad="@firebase/analytics",ud="@firebase/app-check-compat",cd="@firebase/app-check",ld="@firebase/auth",hd="@firebase/auth-compat",dd="@firebase/database",fd="@firebase/data-connect",md="@firebase/database-compat",pd="@firebase/functions",gd="@firebase/functions-compat",_d="@firebase/installations",yd="@firebase/installations-compat",Ed="@firebase/messaging",vd="@firebase/messaging-compat",Td="@firebase/performance",Id="@firebase/performance-compat",wd="@firebase/remote-config",Ad="@firebase/remote-config-compat",Rd="@firebase/storage",Cd="@firebase/storage-compat",bd="@firebase/firestore",Sd="@firebase/ai",Pd="@firebase/firestore-compat",Vd="firebase",Dd="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="[DEFAULT]",kd={[Ms]:"fire-core",[id]:"fire-core-compat",[ad]:"fire-analytics",[od]:"fire-analytics-compat",[cd]:"fire-app-check",[ud]:"fire-app-check-compat",[ld]:"fire-auth",[hd]:"fire-auth-compat",[dd]:"fire-rtdb",[fd]:"fire-data-connect",[md]:"fire-rtdb-compat",[pd]:"fire-fn",[gd]:"fire-fn-compat",[_d]:"fire-iid",[yd]:"fire-iid-compat",[Ed]:"fire-fcm",[vd]:"fire-fcm-compat",[Td]:"fire-perf",[Id]:"fire-perf-compat",[wd]:"fire-rc",[Ad]:"fire-rc-compat",[Rd]:"fire-gcs",[Cd]:"fire-gcs-compat",[bd]:"fire-fst",[Pd]:"fire-fst-compat",[Sd]:"fire-vertex","fire-js":"fire-js",[Vd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map,Nd=new Map,Fs=new Map;function ea(n,t){try{n.container.addComponent(t)}catch(e){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function re(n){const t=n.name;if(Fs.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;Fs.set(t,n);for(const e of _r.values())ea(e,n);for(const e of Nd.values())ea(e,n);return!0}function Vn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function xd(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new kr("app","Firebase",Od);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=Dd;function Eu(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ls,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Zt.create("bad-app-name",{appName:String(s)});if(e||(e=fu()),!e)throw Zt.create("no-options");const o=_r.get(s);if(o){if(In(e,o.options)&&In(r,o.config))return o;throw Zt.create("duplicate-app",{appName:s})}const a=new jh(s);for(const h of Fs.values())a.addComponent(h);const c=new Md(e,r,a);return _r.set(s,c),c}function vu(n=Ls){const t=_r.get(n);if(!t&&n===Ls&&fu())return Eu();if(!t)throw Zt.create("no-app",{appName:n});return t}function xt(n,t,e){var r;let s=(r=kd[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(c.join(" "));return}re(new qt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="firebase-heartbeat-database",Ud=1,wn="firebase-heartbeat-store";let Cs=null;function Tu(){return Cs||(Cs=yu(Fd,Ud,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(wn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),Cs}async function Bd(n){try{const e=(await Tu()).transaction(wn),r=await e.objectStore(wn).get(Iu(n));return await e.done,r}catch(t){if(t instanceof le)zt.warn(t.message);else{const e=Zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zt.warn(e.message)}}}async function na(n,t){try{const r=(await Tu()).transaction(wn,"readwrite");await r.objectStore(wn).put(t,Iu(n)),await r.done}catch(e){if(e instanceof le)zt.warn(e.message);else{const r=Zt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});zt.warn(r.message)}}}function Iu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=1024,jd=30;class qd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Hd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ra();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>jd){const a=Gd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){zt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ra(),{heartbeatsToSend:r,unsentEntries:s}=zd(this._heartbeatsCache.heartbeats),o=gr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return zt.warn(e),""}}}function ra(){return new Date().toISOString().substring(0,10)}function zd(n,t=$d){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),sa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),sa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Hd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mu()?pu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Bd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return na(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return na(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function sa(n){return gr(JSON.stringify({version:2,heartbeats:n})).length}function Gd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n){re(new qt("platform-logger",t=>new rd(t),"PRIVATE")),re(new qt("heartbeat",t=>new qd(t),"PRIVATE")),xt(Ms,ta,n),xt(Ms,ta,"esm2017"),xt("fire-js","")}Kd("");var ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var te,wu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,p){function _(){}_.prototype=p.prototype,I.D=p.prototype,I.prototype=new _,I.prototype.constructor=I,I.C=function(y,v,E){for(var g=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)g[Bt-2]=arguments[Bt];return p.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=I.g[0],_=I.g[1],v=I.g[2];var E=I.g[3],g=p+(E^_&(v^E))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=E+(v^p&(_^v))+y[1]+3905402710&4294967295,E=p+(g<<12&4294967295|g>>>20),g=v+(_^E&(p^_))+y[2]+606105819&4294967295,v=E+(g<<17&4294967295|g>>>15),g=_+(p^v&(E^p))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(E^_&(v^E))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=E+(v^p&(_^v))+y[5]+1200080426&4294967295,E=p+(g<<12&4294967295|g>>>20),g=v+(_^E&(p^_))+y[6]+2821735955&4294967295,v=E+(g<<17&4294967295|g>>>15),g=_+(p^v&(E^p))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(E^_&(v^E))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=E+(v^p&(_^v))+y[9]+2336552879&4294967295,E=p+(g<<12&4294967295|g>>>20),g=v+(_^E&(p^_))+y[10]+4294925233&4294967295,v=E+(g<<17&4294967295|g>>>15),g=_+(p^v&(E^p))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(E^_&(v^E))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=E+(v^p&(_^v))+y[13]+4254626195&4294967295,E=p+(g<<12&4294967295|g>>>20),g=v+(_^E&(p^_))+y[14]+2792965006&4294967295,v=E+(g<<17&4294967295|g>>>15),g=_+(p^v&(E^p))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(v^E&(_^v))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=E+(_^v&(p^_))+y[6]+3225465664&4294967295,E=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(E^p))+y[11]+643717713&4294967295,v=E+(g<<14&4294967295|g>>>18),g=_+(E^p&(v^E))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^E&(_^v))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=E+(_^v&(p^_))+y[10]+38016083&4294967295,E=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(E^p))+y[15]+3634488961&4294967295,v=E+(g<<14&4294967295|g>>>18),g=_+(E^p&(v^E))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^E&(_^v))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=E+(_^v&(p^_))+y[14]+3275163606&4294967295,E=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(E^p))+y[3]+4107603335&4294967295,v=E+(g<<14&4294967295|g>>>18),g=_+(E^p&(v^E))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^E&(_^v))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=E+(_^v&(p^_))+y[2]+4243563512&4294967295,E=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(E^p))+y[7]+1735328473&4294967295,v=E+(g<<14&4294967295|g>>>18),g=_+(E^p&(v^E))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(_^v^E)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=E+(p^_^v)+y[8]+2272392833&4294967295,E=p+(g<<11&4294967295|g>>>21),g=v+(E^p^_)+y[11]+1839030562&4294967295,v=E+(g<<16&4294967295|g>>>16),g=_+(v^E^p)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^E)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=E+(p^_^v)+y[4]+1272893353&4294967295,E=p+(g<<11&4294967295|g>>>21),g=v+(E^p^_)+y[7]+4139469664&4294967295,v=E+(g<<16&4294967295|g>>>16),g=_+(v^E^p)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^E)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=E+(p^_^v)+y[0]+3936430074&4294967295,E=p+(g<<11&4294967295|g>>>21),g=v+(E^p^_)+y[3]+3572445317&4294967295,v=E+(g<<16&4294967295|g>>>16),g=_+(v^E^p)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^E)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=E+(p^_^v)+y[12]+3873151461&4294967295,E=p+(g<<11&4294967295|g>>>21),g=v+(E^p^_)+y[15]+530742520&4294967295,v=E+(g<<16&4294967295|g>>>16),g=_+(v^E^p)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(v^(_|~E))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=E+(_^(p|~v))+y[7]+1126891415&4294967295,E=p+(g<<10&4294967295|g>>>22),g=v+(p^(E|~_))+y[14]+2878612391&4294967295,v=E+(g<<15&4294967295|g>>>17),g=_+(E^(v|~p))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~E))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=E+(_^(p|~v))+y[3]+2399980690&4294967295,E=p+(g<<10&4294967295|g>>>22),g=v+(p^(E|~_))+y[10]+4293915773&4294967295,v=E+(g<<15&4294967295|g>>>17),g=_+(E^(v|~p))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~E))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=E+(_^(p|~v))+y[15]+4264355552&4294967295,E=p+(g<<10&4294967295|g>>>22),g=v+(p^(E|~_))+y[6]+2734768916&4294967295,v=E+(g<<15&4294967295|g>>>17),g=_+(E^(v|~p))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~E))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=E+(_^(p|~v))+y[11]+3174756917&4294967295,E=p+(g<<10&4294967295|g>>>22),g=v+(p^(E|~_))+y[2]+718787259&4294967295,v=E+(g<<15&4294967295|g>>>17),g=_+(E^(v|~p))+y[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+E&4294967295}r.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var _=p-this.blockSize,y=this.B,v=this.h,E=0;E<p;){if(v==0)for(;E<=_;)s(this,I,E),E+=this.blockSize;if(typeof I=="string"){for(;E<p;)if(y[v++]=I.charCodeAt(E++),v==this.blockSize){s(this,y),v=0;break}}else for(;E<p;)if(y[v++]=I[E++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var _=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=_&255,_/=256;for(this.u(I),I=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)I[_++]=this.g[p]>>>y&255;return I};function o(I,p){var _=c;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=p(I)}function a(I,p){this.h=p;for(var _=[],y=!0,v=I.length-1;0<=v;v--){var E=I[v]|0;y&&E==p||(_[v]=E,y=!1)}this.g=_}var c={};function h(I){return-128<=I&&128>I?o(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return T;if(0>I)return D(d(-I));for(var p=[],_=1,y=0;I>=_;y++)p[y]=I/_|0,_*=4294967296;return new a(p,0)}function m(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return D(m(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(p,8)),y=T,v=0;v<I.length;v+=8){var E=Math.min(8,I.length-v),g=parseInt(I.substring(v,v+E),p);8>E?(E=d(Math.pow(p,E)),y=y.j(E).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var T=h(0),w=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-D(this).m();for(var I=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);I+=(0<=y?y:4294967296+y)*p,p*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(N(this))return"-"+D(this).toString(I);for(var p=d(Math.pow(I,6)),_=this,y="";;){var v=X(_,p).g;_=H(_,v.j(p));var E=((0<_.g.length?_.g[0]:_.h)>>>0).toString(I);if(_=v,b(_))return E+y;for(;6>E.length;)E="0"+E;y=E+y}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function N(I){return I.h==-1}n.l=function(I){return I=H(this,I),N(I)?-1:b(I)?0:1};function D(I){for(var p=I.g.length,_=[],y=0;y<p;y++)_[y]=~I.g[y];return new a(_,~I.h).add(w)}n.abs=function(){return N(this)?D(this):this},n.add=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],y=0,v=0;v<=p;v++){var E=y+(this.i(v)&65535)+(I.i(v)&65535),g=(E>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);y=g>>>16,E&=65535,g&=65535,_[v]=g<<16|E}return new a(_,_[_.length-1]&-2147483648?-1:0)};function H(I,p){return I.add(D(p))}n.j=function(I){if(b(this)||b(I))return T;if(N(this))return N(I)?D(this).j(D(I)):D(D(this).j(I));if(N(I))return D(this.j(D(I)));if(0>this.l(C)&&0>I.l(C))return d(this.m()*I.m());for(var p=this.g.length+I.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<I.g.length;v++){var E=this.i(y)>>>16,g=this.i(y)&65535,Bt=I.i(v)>>>16,Qe=I.i(v)&65535;_[2*y+2*v]+=g*Qe,U(_,2*y+2*v),_[2*y+2*v+1]+=E*Qe,U(_,2*y+2*v+1),_[2*y+2*v+1]+=g*Bt,U(_,2*y+2*v+1),_[2*y+2*v+2]+=E*Bt,U(_,2*y+2*v+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function U(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function j(I,p){this.g=I,this.h=p}function X(I,p){if(b(p))throw Error("division by zero");if(b(I))return new j(T,T);if(N(I))return p=X(D(I),p),new j(D(p.g),D(p.h));if(N(p))return p=X(I,D(p)),new j(D(p.g),p.h);if(30<I.g.length){if(N(I)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var _=w,y=p;0>=y.l(I);)_=Vt(_),y=Vt(y);var v=rt(_,1),E=rt(y,1);for(y=rt(y,2),_=rt(_,2);!b(y);){var g=E.add(y);0>=g.l(I)&&(v=v.add(_),E=g),y=rt(y,1),_=rt(_,1)}return p=H(I,v.j(p)),new j(v,p)}for(v=T;0<=I.l(p);){for(_=Math.max(1,Math.floor(I.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),E=d(_),g=E.j(p);N(g)||0<g.l(I);)_-=y,E=d(_),g=E.j(p);b(E)&&(E=w),v=v.add(E),I=H(I,g)}return new j(v,I)}n.A=function(I){return X(this,I).h},n.and=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&I.i(y);return new a(_,this.h&I.h)},n.or=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|I.i(y);return new a(_,this.h|I.h)},n.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^I.i(y);return new a(_,this.h^I.h)};function Vt(I){for(var p=I.g.length+1,_=[],y=0;y<p;y++)_[y]=I.i(y)<<1|I.i(y-1)>>>31;return new a(_,I.h)}function rt(I,p){var _=p>>5;p%=32;for(var y=I.g.length-_,v=[],E=0;E<y;E++)v[E]=0<p?I.i(E+_)>>>p|I.i(E+_+1)<<32-p:I.i(E+_);return new a(v,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,te=a}).apply(typeof ia<"u"?ia:typeof self<"u"?self:typeof window<"u"?window:{});var rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Au,fn,Ru,lr,Us,Cu,bu,Su;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof rr=="object"&&rr];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in l))break t;l=l[A]}i=i[i.length-1],f=l[i],u=u(f),u!=f&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,f=!1,A={next:function(){if(!f&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function d(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,l){return i.call.apply(i.bind,arguments)}function T(i,u,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(u,A)}}return function(){return i.apply(u,arguments)}}function w(i,u,l){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:T,w.apply(null,arguments)}function C(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function b(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,A,R){for(var V=Array(arguments.length-2),W=2;W<arguments.length;W++)V[W-2]=arguments[W];return u.prototype[A].apply(f,V)}}function N(i){const u=i.length;if(0<u){const l=Array(u);for(let f=0;f<u;f++)l[f]=i[f];return l}return[]}function D(i,u){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const A=i.length||0,R=f.length||0;i.length=A+R;for(let V=0;V<R;V++)i[A+V]=f[V]}else i.push(f)}}class H{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(i){return/^[\s\xa0]*$/.test(i)}function j(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function X(i){return X[" "](i),i}X[" "]=function(){};var Vt=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function rt(i,u,l){for(const f in i)u.call(l,i[f],f,i)}function I(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function p(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let l,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(l in f)i[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function v(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function E(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Jr;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Bt{constructor(){this.h=this.g=null}add(u,l){const f=Qe.get();f.set(u,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Qe=new H(()=>new vl,i=>i.reset());class vl{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Xe,Ye=!1,Jr=new Bt,Hi=()=>{const i=c.Promise.resolve(void 0);Xe=()=>{i.then(Tl)}};var Tl=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){E(l)}var u=Qe;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}Ye=!1};function Kt(){this.s=this.s,this.C=this.C}Kt.prototype.s=!1,Kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var Il=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function Je(i,u){if(dt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Vt){t:{try{X(u.nodeName);var A=!0;break t}catch{}A=!1}A||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:wl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Je.aa.h.call(this)}}b(Je,dt);var wl={2:"touch",3:"pen",4:"mouse"};Je.prototype.h=function(){Je.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Mn="closure_listenable_"+(1e6*Math.random()|0),Al=0;function Rl(i,u,l,f,A){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!f,this.ha=A,this.key=++Al,this.da=this.fa=!1}function Ln(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Fn(i){this.src=i,this.g={},this.h=0}Fn.prototype.add=function(i,u,l,f,A){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var V=ts(i,u,f,A);return-1<V?(u=i[V],l||(u.fa=!1)):(u=new Rl(u,this.src,R,!!f,A),u.fa=l,i.push(u)),u};function Zr(i,u){var l=u.type;if(l in i.g){var f=i.g[l],A=Array.prototype.indexOf.call(f,u,void 0),R;(R=0<=A)&&Array.prototype.splice.call(f,A,1),R&&(Ln(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function ts(i,u,l,f){for(var A=0;A<i.length;++A){var R=i[A];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==f)return A}return-1}var es="closure_lm_"+(1e6*Math.random()|0),ns={};function Gi(i,u,l,f,A){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Gi(i,u[R],l,f,A);return null}return l=Qi(l),i&&i[Mn]?i.K(u,l,d(f)?!!f.capture:!1,A):Cl(i,u,l,!1,f,A)}function Cl(i,u,l,f,A,R){if(!u)throw Error("Invalid event type");var V=d(A)?!!A.capture:!!A,W=ss(i);if(W||(i[es]=W=new Fn(i)),l=W.add(u,l,f,V,R),l.proxy)return l;if(f=bl(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)Il||(A=V),A===void 0&&(A=!1),i.addEventListener(u.toString(),f,A);else if(i.attachEvent)i.attachEvent(Wi(u.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function bl(){function i(l){return u.call(i.src,i.listener,l)}const u=Sl;return i}function Ki(i,u,l,f,A){if(Array.isArray(u))for(var R=0;R<u.length;R++)Ki(i,u[R],l,f,A);else f=d(f)?!!f.capture:!!f,l=Qi(l),i&&i[Mn]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=ts(R,l,f,A),-1<l&&(Ln(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=ss(i))&&(u=i.g[u.toString()],i=-1,u&&(i=ts(u,l,f,A)),(l=-1<i?u[i]:null)&&rs(l))}function rs(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Mn])Zr(u.i,i);else{var l=i.type,f=i.proxy;u.removeEventListener?u.removeEventListener(l,f,i.capture):u.detachEvent?u.detachEvent(Wi(l),f):u.addListener&&u.removeListener&&u.removeListener(f),(l=ss(u))?(Zr(l,i),l.h==0&&(l.src=null,u[es]=null)):Ln(i)}}}function Wi(i){return i in ns?ns[i]:ns[i]="on"+i}function Sl(i,u){if(i.da)i=!0;else{u=new Je(u,this);var l=i.listener,f=i.ha||i.src;i.fa&&rs(i),i=l.call(f,u)}return i}function ss(i){return i=i[es],i instanceof Fn?i:null}var is="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qi(i){return typeof i=="function"?i:(i[is]||(i[is]=function(u){return i.handleEvent(u)}),i[is])}function ft(){Kt.call(this),this.i=new Fn(this),this.M=this,this.F=null}b(ft,Kt),ft.prototype[Mn]=!0,ft.prototype.removeEventListener=function(i,u,l,f){Ki(this,i,u,l,f)};function Et(i,u){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=u.type||u,typeof u=="string")u=new dt(u,i);else if(u instanceof dt)u.target=u.target||i;else{var A=u;u=new dt(f,i),y(u,A)}if(A=!0,l)for(var R=l.length-1;0<=R;R--){var V=u.g=l[R];A=Un(V,f,!0,u)&&A}if(V=u.g=i,A=Un(V,f,!0,u)&&A,A=Un(V,f,!1,u)&&A,l)for(R=0;R<l.length;R++)V=u.g=l[R],A=Un(V,f,!1,u)&&A}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],f=0;f<l.length;f++)Ln(l[f]);delete i.g[u],i.h--}}this.F=null},ft.prototype.K=function(i,u,l,f){return this.i.add(String(i),u,!1,l,f)},ft.prototype.L=function(i,u,l,f){return this.i.add(String(i),u,!0,l,f)};function Un(i,u,l,f){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var A=!0,R=0;R<u.length;++R){var V=u[R];if(V&&!V.da&&V.capture==l){var W=V.listener,ut=V.ha||V.src;V.fa&&Zr(i.i,V),A=W.call(ut,f)!==!1&&A}}return A&&!f.defaultPrevented}function Xi(i,u,l){if(typeof i=="function")l&&(i=w(i,l));else if(i&&typeof i.handleEvent=="function")i=w(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function Yi(i){i.g=Xi(()=>{i.g=null,i.i&&(i.i=!1,Yi(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Pl extends Kt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Yi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(i){Kt.call(this),this.h=i,this.g={}}b(Ze,Kt);var Ji=[];function Zi(i){rt(i.g,function(u,l){this.g.hasOwnProperty(l)&&rs(u)},i),i.g={}}Ze.prototype.N=function(){Ze.aa.N.call(this),Zi(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var os=c.JSON.stringify,Vl=c.JSON.parse,Dl=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function as(){}as.prototype.h=null;function to(i){return i.h||(i.h=i.i())}function eo(){}var tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function us(){dt.call(this,"d")}b(us,dt);function cs(){dt.call(this,"c")}b(cs,dt);var fe={},no=null;function Bn(){return no=no||new ft}fe.La="serverreachability";function ro(i){dt.call(this,fe.La,i)}b(ro,dt);function en(i){const u=Bn();Et(u,new ro(u))}fe.STAT_EVENT="statevent";function so(i,u){dt.call(this,fe.STAT_EVENT,i),this.stat=u}b(so,dt);function vt(i){const u=Bn();Et(u,new so(u,i))}fe.Ma="timingevent";function io(i,u){dt.call(this,fe.Ma,i),this.size=u}b(io,dt);function nn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function rn(){this.g=!0}rn.prototype.xa=function(){this.g=!1};function kl(i,u,l,f,A,R){i.info(function(){if(i.g)if(R)for(var V="",W=R.split("&"),ut=0;ut<W.length;ut++){var G=W[ut].split("=");if(1<G.length){var mt=G[0];G=G[1];var pt=mt.split("_");V=2<=pt.length&&pt[1]=="type"?V+(mt+"="+G+"&"):V+(mt+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+u+`
`+l+`
`+V})}function Nl(i,u,l,f,A,R,V){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+u+`
`+l+`
`+R+" "+V})}function Se(i,u,l,f){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ol(i,l)+(f?" "+f:"")})}function xl(i,u){i.info(function(){return"TIMEOUT: "+u})}rn.prototype.info=function(){};function Ol(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<A.length;V++)A[V]=""}}}}return os(l)}catch{return u}}var $n={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ls;function jn(){}b(jn,as),jn.prototype.g=function(){return new XMLHttpRequest},jn.prototype.i=function(){return{}},ls=new jn;function Wt(i,u,l,f){this.j=i,this.i=u,this.l=l,this.R=f||1,this.U=new Ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ao}function ao(){this.i=null,this.g="",this.h=!1}var uo={},hs={};function ds(i,u,l){i.L=1,i.v=Gn($t(u)),i.m=l,i.P=!0,co(i,null)}function co(i,u){i.F=Date.now(),qn(i),i.A=$t(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Ao(l.i,"t",f),i.C=0,l=i.j.J,i.h=new ao,i.g=jo(i.j,l?u:null,!i.m),0<i.O&&(i.M=new Pl(w(i.Y,i,i.g),i.O)),u=i.U,l=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ji[0]=A.toString()),A=Ji);for(var R=0;R<A.length;R++){var V=Gi(l,A[R],f||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),en(),kl(i.i,i.u,i.A,i.l,i.R,i.m)}Wt.prototype.ca=function(i){i=i.target;const u=this.M;u&&jt(i)==3?u.j():this.Y(i)},Wt.prototype.Y=function(i){try{if(i==this.g)t:{const pt=jt(this.g);var u=this.g.Ba();const De=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Do(this.g)))){this.J||pt!=4||u==7||(u==8||0>=De?en(3):en(2)),fs(this);var l=this.g.Z();this.X=l;e:if(lo(this)){var f=Do(this.g);i="";var A=f.length,R=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){me(this),sn(this);var V="";break e}this.h.i=new c.TextDecoder}for(u=0;u<A;u++)this.h.h=!0,i+=this.h.i.decode(f[u],{stream:!(R&&u==A-1)});f.length=0,this.h.g+=i,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=l==200,Nl(this.i,this.u,this.A,this.l,this.R,pt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ut=this.g;if((W=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(W)){var G=W;break e}}G=null}if(l=G)Se(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ms(this,l);else{this.o=!1,this.s=3,vt(12),me(this),sn(this);break t}}if(this.P){l=!0;let Dt;for(;!this.J&&this.C<V.length;)if(Dt=Ml(this,V),Dt==hs){pt==4&&(this.s=4,vt(14),l=!1),Se(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==uo){this.s=4,vt(15),Se(this.i,this.l,V,"[Invalid Chunk]"),l=!1;break}else Se(this.i,this.l,Dt,null),ms(this,Dt);if(lo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||V.length!=0||this.h.h||(this.s=1,vt(16),l=!1),this.o=this.o&&l,!l)Se(this.i,this.l,V,"[Invalid Chunked Response]"),me(this),sn(this);else if(0<V.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),vs(mt),mt.M=!0,vt(11))}}else Se(this.i,this.l,V,null),ms(this,V);pt==4&&me(this),this.o&&!this.J&&(pt==4?Fo(this.j,this):(this.o=!1,qn(this)))}else Zl(this.g),l==400&&0<V.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),me(this),sn(this)}}}catch{}finally{}};function lo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Ml(i,u){var l=i.C,f=u.indexOf(`
`,l);return f==-1?hs:(l=Number(u.substring(l,f)),isNaN(l)?uo:(f+=1,f+l>u.length?hs:(u=u.slice(f,f+l),i.C=f+l,u)))}Wt.prototype.cancel=function(){this.J=!0,me(this)};function qn(i){i.S=Date.now()+i.I,ho(i,i.I)}function ho(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=nn(w(i.ba,i),u)}function fs(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Wt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(xl(this.i,this.A),this.L!=2&&(en(),vt(17)),me(this),this.s=2,sn(this)):ho(this,this.S-i)};function sn(i){i.j.G==0||i.J||Fo(i.j,i)}function me(i){fs(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Zi(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function ms(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||ps(l.h,i))){if(!i.K&&ps(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Jn(l),Xn(l);else break t;Es(l),vt(18)}}else l.za=A[1],0<l.za-l.T&&37500>A[2]&&l.F&&l.v==0&&!l.C&&(l.C=nn(w(l.Za,l),6e3));if(1>=po(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ge(l,11)}else if((i.K||l.g==i)&&Jn(l),!U(u))for(A=l.Da.g.parse(u),u=0;u<A.length;u++){let G=A[u];if(l.T=G[0],G=G[1],l.G==2)if(G[0]=="c"){l.K=G[1],l.ia=G[2];const mt=G[3];mt!=null&&(l.la=mt,l.j.info("VER="+l.la));const pt=G[4];pt!=null&&(l.Aa=pt,l.j.info("SVER="+l.Aa));const De=G[5];De!=null&&typeof De=="number"&&0<De&&(f=1.5*De,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Dt=i.g;if(Dt){const tr=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tr){var R=f.h;R.g||tr.indexOf("spdy")==-1&&tr.indexOf("quic")==-1&&tr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(gs(R,R.h),R.h=null))}if(f.D){const Ts=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ts&&(f.ya=Ts,Q(f.I,f.D,Ts))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var V=i;if(f.qa=$o(f,f.J?f.ia:null,f.W),V.K){go(f.h,V);var W=V,ut=f.L;ut&&(W.I=ut),W.B&&(fs(W),qn(W)),f.g=V}else Mo(f);0<l.i.length&&Yn(l)}else G[0]!="stop"&&G[0]!="close"||ge(l,7);else l.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?ge(l,7):ys(l):G[0]!="noop"&&l.l&&l.l.ta(G),l.v=0)}}en(4)}catch{}}var Ll=class{constructor(i,u){this.g=i,this.map=u}};function fo(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function po(i){return i.h?1:i.g?i.g.size:0}function ps(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function gs(i,u){i.g?i.g.add(u):i.h=u}function go(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}fo.prototype.cancel=function(){if(this.i=_o(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function _o(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return N(i.i)}function Fl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,f=0;f<l;f++)u.push(i[f]);return u}u=[],l=0;for(f in i)u[l++]=i[f];return u}function Ul(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const f in i)u[l++]=f;return u}}}function yo(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=Ul(i),f=Fl(i),A=f.length,R=0;R<A;R++)u.call(void 0,f[R],l&&l[R],i)}var Eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bl(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),A=null;if(0<=f){var R=i[l].substring(0,f);A=i[l].substring(f+1)}else R=i[l];u(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function pe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof pe){this.h=i.h,zn(this,i.j),this.o=i.o,this.g=i.g,Hn(this,i.s),this.l=i.l;var u=i.i,l=new un;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),vo(this,l),this.m=i.m}else i&&(u=String(i).match(Eo))?(this.h=!1,zn(this,u[1]||"",!0),this.o=on(u[2]||""),this.g=on(u[3]||"",!0),Hn(this,u[4]),this.l=on(u[5]||"",!0),vo(this,u[6]||"",!0),this.m=on(u[7]||"")):(this.h=!1,this.i=new un(null,this.h))}pe.prototype.toString=function(){var i=[],u=this.j;u&&i.push(an(u,To,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(an(u,To,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(an(l,l.charAt(0)=="/"?ql:jl,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",an(l,Hl)),i.join("")};function $t(i){return new pe(i)}function zn(i,u,l){i.j=l?on(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Hn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function vo(i,u,l){u instanceof un?(i.i=u,Gl(i.i,i.h)):(l||(u=an(u,zl)),i.i=new un(u,i.h))}function Q(i,u,l){i.i.set(u,l)}function Gn(i){return Q(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function on(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function an(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,$l),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function $l(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var To=/[#\/\?@]/g,jl=/[#\?:]/g,ql=/[#\?]/g,zl=/[#\?@]/g,Hl=/#/g;function un(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Qt(i){i.g||(i.g=new Map,i.h=0,i.i&&Bl(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=un.prototype,n.add=function(i,u){Qt(this),this.i=null,i=Pe(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function Io(i,u){Qt(i),u=Pe(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function wo(i,u){return Qt(i),u=Pe(i,u),i.g.has(u)}n.forEach=function(i,u){Qt(this),this.g.forEach(function(l,f){l.forEach(function(A){i.call(u,A,f,this)},this)},this)},n.na=function(){Qt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let f=0;f<u.length;f++){const A=i[f];for(let R=0;R<A.length;R++)l.push(u[f])}return l},n.V=function(i){Qt(this);let u=[];if(typeof i=="string")wo(this,i)&&(u=u.concat(this.g.get(Pe(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return Qt(this),this.i=null,i=Pe(this,i),wo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function Ao(i,u,l){Io(i,u),0<l.length&&(i.i=null,i.g.set(Pe(i,u),N(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var f=u[l];const R=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var A=R;V[f]!==""&&(A+="="+encodeURIComponent(String(V[f]))),i.push(A)}}return this.i=i.join("&")};function Pe(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Gl(i,u){u&&!i.j&&(Qt(i),i.i=null,i.g.forEach(function(l,f){var A=f.toLowerCase();f!=A&&(Io(this,f),Ao(this,A,l))},i)),i.j=u}function Kl(i,u){const l=new rn;if(c.Image){const f=new Image;f.onload=C(Xt,l,"TestLoadImage: loaded",!0,u,f),f.onerror=C(Xt,l,"TestLoadImage: error",!1,u,f),f.onabort=C(Xt,l,"TestLoadImage: abort",!1,u,f),f.ontimeout=C(Xt,l,"TestLoadImage: timeout",!1,u,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else u(!1)}function Wl(i,u){const l=new rn,f=new AbortController,A=setTimeout(()=>{f.abort(),Xt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?Xt(l,"TestPingServer: ok",!0,u):Xt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(A),Xt(l,"TestPingServer: error",!1,u)})}function Xt(i,u,l,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(l)}catch{}}function Ql(){this.g=new Dl}function Xl(i,u,l){const f=l||"";try{yo(i,function(A,R){let V=A;d(A)&&(V=os(A)),u.push(f+R+"="+encodeURIComponent(V))})}catch(A){throw u.push(f+"type="+encodeURIComponent("_badmap")),A}}function Kn(i){this.l=i.Ub||null,this.j=i.eb||!1}b(Kn,as),Kn.prototype.g=function(){return new Wn(this.l,this.j)},Kn.prototype.i=function(i){return function(){return i}}({});function Wn(i,u){ft.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Wn,ft),n=Wn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,ln(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,cn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ro(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ro(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?cn(this):ln(this),this.readyState==3&&Ro(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,cn(this))},n.Qa=function(i){this.g&&(this.response=i,cn(this))},n.ga=function(){this.g&&cn(this)};function cn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,ln(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function ln(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Co(i){let u="";return rt(i,function(l,f){u+=f,u+=":",u+=l,u+=`\r
`}),u}function _s(i,u,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Co(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Q(i,u,l))}function Z(i){ft.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Z,ft);var Yl=/^https?$/i,Jl=["POST","PUT"];n=Z.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ls.g(),this.v=this.o?to(this.o):to(ls),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){bo(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)l.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),A=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Jl,u,void 0))||f||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of l)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){bo(this,R)}};function bo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,So(i),Qn(i)}function So(i){i.A||(i.A=!0,Et(i,"complete"),Et(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Et(this,"complete"),Et(this,"abort"),Qn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qn(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Po(this):this.bb())},n.bb=function(){Po(this)};function Po(i){if(i.h&&typeof a<"u"&&(!i.v[1]||jt(i)!=4||i.Z()!=2)){if(i.u&&jt(i)==4)Xi(i.Ea,0,i);else if(Et(i,"readystatechange"),jt(i)==4){i.h=!1;try{const V=i.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var f;if(f=V===0){var A=String(i.D).match(Eo)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!Yl.test(A?A.toLowerCase():"")}l=f}if(l)Et(i,"complete"),Et(i,"success");else{i.m=6;try{var R=2<jt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",So(i)}}finally{Qn(i)}}}}function Qn(i,u){if(i.g){Vo(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||Et(i,"ready");try{l.onreadystatechange=f}catch{}}}function Vo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function jt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Vl(u)}};function Do(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Zl(i){const u={};i=(i.g&&2<=jt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(U(i[f]))continue;var l=v(i[f]);const A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[A]||[];u[A]=R,R.push(l)}I(u,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hn(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function ko(i){this.Aa=0,this.i=[],this.j=new rn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hn("baseRetryDelayMs",5e3,i),this.cb=hn("retryDelaySeedMs",1e4,i),this.Wa=hn("forwardChannelMaxRetries",2,i),this.wa=hn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new fo(i&&i.concurrentRequestLimit),this.Da=new Ql,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ko.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,f){vt(0),this.W=i,this.H=u||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=$o(this,null,this.W),Yn(this)};function ys(i){if(No(i),i.G==3){var u=i.U++,l=$t(i.I);if(Q(l,"SID",i.K),Q(l,"RID",u),Q(l,"TYPE","terminate"),dn(i,l),u=new Wt(i,i.j,u),u.L=2,u.v=Gn($t(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=jo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),qn(u)}Bo(i)}function Xn(i){i.g&&(vs(i),i.g.cancel(),i.g=null)}function No(i){Xn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Jn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Yn(i){if(!mo(i.h)&&!i.s){i.s=!0;var u=i.Ga;Xe||Hi(),Ye||(Xe(),Ye=!0),Jr.add(u,i),i.B=0}}function th(i,u){return po(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=nn(w(i.Ga,i,u),Uo(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Wt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(u+=f,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=Oo(this,A,u),l=$t(this.I),Q(l,"RID",i),Q(l,"CVER",22),this.D&&Q(l,"X-HTTP-Session-Id",this.D),dn(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(Co(R)))+"&"+u:this.m&&_s(l,this.m,R)),gs(this.h,A),this.Ua&&Q(l,"TYPE","init"),this.P?(Q(l,"$req",u),Q(l,"SID","null"),A.T=!0,ds(A,l,null)):ds(A,l,u),this.G=2}}else this.G==3&&(i?xo(this,i):this.i.length==0||mo(this.h)||xo(this))};function xo(i,u){var l;u?l=u.l:l=i.U++;const f=$t(i.I);Q(f,"SID",i.K),Q(f,"RID",l),Q(f,"AID",i.T),dn(i,f),i.m&&i.o&&_s(f,i.m,i.o),l=new Wt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=Oo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),gs(i.h,l),ds(l,f,u)}function dn(i,u){i.H&&rt(i.H,function(l,f){Q(u,f,l)}),i.l&&yo({},function(l,f){Q(u,f,l)})}function Oo(i,u,l){l=Math.min(i.i.length,l);var f=i.l?w(i.l.Na,i.l,i):null;t:{var A=i.i;let R=-1;for(;;){const V=["count="+l];R==-1?0<l?(R=A[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let W=!0;for(let ut=0;ut<l;ut++){let G=A[ut].g;const mt=A[ut].map;if(G-=R,0>G)R=Math.max(0,A[ut].g-100),W=!1;else try{Xl(mt,V,"req"+G+"_")}catch{f&&f(mt)}}if(W){f=V.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,f}function Mo(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;Xe||Hi(),Ye||(Xe(),Ye=!0),Jr.add(u,i),i.v=0}}function Es(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=nn(w(i.Fa,i),Uo(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Lo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=nn(w(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Xn(this),Lo(this))};function vs(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Lo(i){i.g=new Wt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=$t(i.qa);Q(u,"RID","rpc"),Q(u,"SID",i.K),Q(u,"AID",i.T),Q(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&Q(u,"TO",i.ja),Q(u,"TYPE","xmlhttp"),dn(i,u),i.m&&i.o&&_s(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Gn($t(u)),l.m=null,l.P=!0,co(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Xn(this),Es(this),vt(19))};function Jn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Fo(i,u){var l=null;if(i.g==u){Jn(i),vs(i),i.g=null;var f=2}else if(ps(i.h,u))l=u.D,go(i.h,u),f=1;else return;if(i.G!=0){if(u.o)if(f==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var A=i.B;f=Bn(),Et(f,new io(f,l)),Yn(i)}else Mo(i);else if(A=u.s,A==3||A==0&&0<u.X||!(f==1&&th(i,u)||f==2&&Es(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),A){case 1:ge(i,5);break;case 4:ge(i,10);break;case 3:ge(i,6);break;default:ge(i,2)}}}function Uo(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function ge(i,u){if(i.j.info("Error code "+u),u==2){var l=w(i.fb,i),f=i.Xa;const A=!f;f=new pe(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||zn(f,"https"),Gn(f),A?Kl(f.toString(),l):Wl(f.toString(),l)}else vt(2);i.G=0,i.l&&i.l.sa(u),Bo(i),No(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Bo(i){if(i.G=0,i.ka=[],i.l){const u=_o(i.h);(u.length!=0||i.i.length!=0)&&(D(i.ka,u),D(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function $o(i,u,l){var f=l instanceof pe?$t(l):new pe(l);if(f.g!="")u&&(f.g=u+"."+f.g),Hn(f,f.s);else{var A=c.location;f=A.protocol,u=u?u+"."+A.hostname:A.hostname,A=+A.port;var R=new pe(null);f&&zn(R,f),u&&(R.g=u),A&&Hn(R,A),l&&(R.l=l),f=R}return l=i.D,u=i.ya,l&&u&&Q(f,l,u),Q(f,"VER",i.la),dn(i,f),f}function jo(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new Z(new Kn({eb:l})):new Z(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qo(){}n=qo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zn(){}Zn.prototype.g=function(i,u){return new Rt(i,u)};function Rt(i,u){ft.call(this),this.g=new ko(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!U(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ve(this)}b(Rt,ft),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){ys(this.g)},Rt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=os(i),i=l);u.i.push(new Ll(u.Ya++,i)),u.G==3&&Yn(u)},Rt.prototype.N=function(){this.g.l=null,delete this.j,ys(this.g),delete this.g,Rt.aa.N.call(this)};function zo(i){us.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}b(zo,us);function Ho(){cs.call(this),this.status=1}b(Ho,cs);function Ve(i){this.g=i}b(Ve,qo),Ve.prototype.ua=function(){Et(this.g,"a")},Ve.prototype.ta=function(i){Et(this.g,new zo(i))},Ve.prototype.sa=function(i){Et(this.g,new Ho)},Ve.prototype.ra=function(){Et(this.g,"b")},Zn.prototype.createWebChannel=Zn.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,Su=function(){return new Zn},bu=function(){return Bn()},Cu=fe,Us={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$n.NO_ERROR=0,$n.TIMEOUT=8,$n.HTTP_ERROR=6,lr=$n,oo.COMPLETE="complete",Ru=oo,eo.EventType=tn,tn.OPEN="a",tn.CLOSE="b",tn.ERROR="c",tn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,fn=eo,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Au=Z}).apply(typeof rr<"u"?rr:typeof self<"u"?self:typeof window<"u"?window:{});const oa="@firebase/firestore",aa="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let He="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new oi("@firebase/firestore");function Ne(){return Te.logLevel}function k(n,...t){if(Te.logLevel<=z.DEBUG){const e=t.map(ui);Te.debug(`Firestore (${He}): ${n}`,...e)}}function Ht(n,...t){if(Te.logLevel<=z.ERROR){const e=t.map(ui);Te.error(`Firestore (${He}): ${n}`,...e)}}function Fe(n,...t){if(Te.logLevel<=z.WARN){const e=t.map(ui);Te.warn(`Firestore (${He}): ${n}`,...e)}}function ui(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Pu(n,r,e)}function Pu(n,t,e){let r=`FIRESTORE (${He}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ht(r),new Error(r)}function K(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Pu(t,s,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends le{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class Qd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Xd{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ee,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ee)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new Vu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new _t(t)}}class Yd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Jd{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Yd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ua{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xd(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ua(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ua(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=tf(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Bs(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return B(r,s);{const o=Du(),a=ef(o.encode(ca(n,e)),o.encode(ca(t,e)));return a!==0?a:B(r,s)}}e+=r>65535?2:1}return B(n.length,t.length)}function ca(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function ef(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return B(n[e],t[e]);return B(n.length,t.length)}function Ue(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=-62135596800,ha=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ha);return new it(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<la)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ha}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-la;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new it(0,0))}static max(){return new L(new it(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="__name__";class Nt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Nt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Nt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Nt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=Nt.isNumericId(t),s=Nt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Nt.extractNumericId(t).compare(Nt.extractNumericId(e)):Bs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return te.fromString(t.substring(4,t.length-2))}}class Y extends Nt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const nf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Nt{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return nf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===da}static keyField(){return new lt([da])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new x(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new x(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Y.fromString(t))}static fromName(t){return new O(Y.fromString(t).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Y(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=-1;function rf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new it(e+1,0):new it(e,r));return new se(s,O.empty(),t)}function sf(n){return new se(n.readTime,n.key,An)}class se{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new se(L.min(),O.empty(),An)}static max(){return new se(L.max(),O.empty(),An)}}function of(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==af)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(s=>s?S.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new S((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function cf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ke(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>e.writeSequenceNumber(r))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Nr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=-1;function xr(n){return n==null}function yr(n){return n===0&&1/n==-1/0}function lf(n){return typeof n=="number"&&Number.isInteger(n)&&!yr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="";function hf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=fa(t)),t=df(n.get(e),t);return fa(t)}function df(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Nu:e+="";break;default:e+=o}}return e}function fa(n){return n+Nu+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function he(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function xu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new sr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new sr(this.root,t,this.comparator,!1)}getReverseIterator(){return new sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new sr(this.root,t,this.comparator,!0)}}class sr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ct(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new pa(this.data.getIterator())}getIteratorFrom(t){return new pa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class pa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new bt([])}unionWith(t){let e=new ot(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ue(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ou("Invalid base64 string: "+o):o}}(t);return new ht(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const ff=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ie(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=ff.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function oe(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="server_timestamp",Lu="__type__",Fu="__previous_value__",Uu="__local_write_time__";function li(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Lu])===null||e===void 0?void 0:e.stringValue)===Mu}function Or(n){const t=n.mapValue.fields[Fu];return li(t)?Or(t):t}function Rn(n){const t=ie(n.mapValue.fields[Uu].timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,e,r,s,o,a,c,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const Er="(default)";class Cn{constructor(t,e){this.projectId=t,this.database=e||Er}static empty(){return new Cn("","")}get isDefaultDatabase(){return this.database===Er}isEqual(t){return t instanceof Cn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="__type__",pf="__max__",ir={mapValue:{}},$u="__vector__",vr="value";function ae(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?li(n)?4:_f(n)?9007199254740991:gf(n)?10:11:M(28295,{value:n})}function Ft(n,t){if(n===t)return!0;const e=ae(n);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Rn(n).isEqual(Rn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ie(s.timestampValue),c=ie(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return oe(s.bytesValue).isEqual(oe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return et(s.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return et(s.integerValue)===et(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=et(s.doubleValue),c=et(o.doubleValue);return a===c?yr(a)===yr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return Ue(n.arrayValue.values||[],t.arrayValue.values||[],Ft);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(ma(a)!==ma(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Ft(a[h],c[h])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function bn(n,t){return(n.values||[]).find(e=>Ft(e,t))!==void 0}function Be(n,t){if(n===t)return 0;const e=ae(n),r=ae(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=et(o.integerValue||o.doubleValue),h=et(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return ga(n.timestampValue,t.timestampValue);case 4:return ga(Rn(n),Rn(t));case 5:return Bs(n.stringValue,t.stringValue);case 6:return function(o,a){const c=oe(o),h=oe(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const m=B(c[d],h[d]);if(m!==0)return m}return B(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=B(et(o.latitude),et(a.latitude));return c!==0?c:B(et(o.longitude),et(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return _a(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,d,m;const T=o.fields||{},w=a.fields||{},C=(c=T[vr])===null||c===void 0?void 0:c.arrayValue,b=(h=w[vr])===null||h===void 0?void 0:h.arrayValue,N=B(((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0,((m=b==null?void 0:b.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:_a(C,b)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===ir.mapValue&&a===ir.mapValue)return 0;if(o===ir.mapValue)return 1;if(a===ir.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const w=Bs(h[T],m[T]);if(w!==0)return w;const C=Be(c[h[T]],d[m[T]]);if(C!==0)return C}return B(h.length,m.length)}(n.mapValue,t.mapValue);default:throw M(23264,{Pe:e})}}function ga(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ie(n),r=ie(t),s=B(e.seconds,r.seconds);return s!==0?s:B(e.nanos,r.nanos)}function _a(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Be(e[s],r[s]);if(o)return o}return B(e.length,r.length)}function $e(n){return $s(n)}function $s(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ie(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return oe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=$s(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${$s(e.fields[a])}`;return s+"}"}(n.mapValue):M(61005,{value:n})}function hr(n){switch(ae(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Or(n);return t?16+hr(t):16;case 5:return 2*n.stringValue.length;case 6:return oe(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+hr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return he(r.fields,(o,a)=>{s+=o.length+hr(a)}),s}(n.mapValue);default:throw M(13486,{value:n})}}function js(n){return!!n&&"integerValue"in n}function hi(n){return!!n&&"arrayValue"in n}function ya(n){return!!n&&"nullValue"in n}function Ea(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function dr(n){return!!n&&"mapValue"in n}function gf(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Bu])===null||e===void 0?void 0:e.stringValue)===$u}function _n(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return he(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=_n(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=_n(n.arrayValue.values[e]);return t}return Object.assign({},n)}function _f(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===pf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!dr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_n(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=_n(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());dr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ft(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];dr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){he(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new wt(_n(this.value))}}function ju(n){const t=[];return he(n.fields,(e,r)=>{const s=new lt([e]);if(dr(r)){const o=ju(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new bt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new yt(t,0,L.min(),L.min(),L.min(),wt.empty(),0)}static newFoundDocument(t,e,r,s){return new yt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new yt(t,2,e,L.min(),L.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,L.min(),L.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e){this.position=t,this.inclusive=e}}function va(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Be(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ta(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ft(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e="asc"){this.field=t,this.dir=e}}function yf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{}class st extends qu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new vf(t,e,r):e==="array-contains"?new wf(t,r):e==="in"?new Af(t,r):e==="not-in"?new Rf(t,r):e==="array-contains-any"?new Cf(t,r):new st(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Tf(t,r):new If(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Be(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison(Be(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends qu{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Ut(t,e)}matches(t){return zu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function zu(n){return n.op==="and"}function Hu(n){return Ef(n)&&zu(n)}function Ef(n){for(const t of n.filters)if(t instanceof Ut)return!1;return!0}function qs(n){if(n instanceof st)return n.field.canonicalString()+n.op.toString()+$e(n.value);if(Hu(n))return n.filters.map(t=>qs(t)).join(",");{const t=n.filters.map(e=>qs(e)).join(",");return`${n.op}(${t})`}}function Gu(n,t){return n instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&Ft(r.value,s.value)}(n,t):n instanceof Ut?function(r,s){return s instanceof Ut&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&Gu(a,s.filters[c]),!0):!1}(n,t):void M(19439)}function Ku(n){return n instanceof st?function(e){return`${e.field.canonicalString()} ${e.op} ${$e(e.value)}`}(n):n instanceof Ut?function(e){return e.op.toString()+" {"+e.getFilters().map(Ku).join(" ,")+"}"}(n):"Filter"}class vf extends st{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Tf extends st{constructor(t,e){super(t,"in",e),this.keys=Wu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class If extends st{constructor(t,e){super(t,"not-in",e),this.keys=Wu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Wu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class wf extends st{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hi(e)&&bn(e.arrayValue,this.value)}}class Af extends st{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&bn(this.value.arrayValue,e)}}class Rf extends st{constructor(t,e){super(t,"not-in",e)}matches(t){if(bn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!bn(this.value.arrayValue,e)}}class Cf extends st{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>bn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.Ie=null}}function Ia(n,t=null,e=[],r=[],s=null,o=null,a=null){return new bf(n,t,e,r,s,o,a)}function di(n){const t=F(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>qs(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),xr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>$e(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>$e(r)).join(",")),t.Ie=e}return t.Ie}function fi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!yf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Gu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ta(n.startAt,t.startAt)&&Ta(n.endAt,t.endAt)}function zs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Sf(n,t,e,r,s,o,a,c){return new Mr(n,t,e,r,s,o,a,c)}function Qu(n){return new Mr(n)}function wa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Pf(n){return n.collectionGroup!==null}function yn(n){const t=F(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ot(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new Ir(o,r))}),e.has(lt.keyField().canonicalString())||t.Ee.push(new Ir(lt.keyField(),r))}return t.Ee}function Ot(n){const t=F(n);return t.de||(t.de=Vf(t,yn(n))),t.de}function Vf(n,t){if(n.limitType==="F")return Ia(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Ir(s.field,o)});const e=n.endAt?new Tr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Tr(n.startAt.position,n.startAt.inclusive):null;return Ia(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Hs(n,t,e){return new Mr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Lr(n,t){return fi(Ot(n),Ot(t))&&n.limitType===t.limitType}function Xu(n){return`${di(Ot(n))}|lt:${n.limitType}`}function xe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Ku(s)).join(", ")}]`),xr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>$e(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>$e(s)).join(",")),`Target(${r})`}(Ot(n))}; limitType=${n.limitType})`}function Fr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of yn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=va(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,yn(r),s)||r.endAt&&!function(a,c,h){const d=va(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,yn(r),s))}(n,t)}function Df(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yu(n){return(t,e)=>{let r=!1;for(const s of yn(n)){const o=kf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function kf(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Be(h,d):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){he(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return xu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new J(O.comparator);function Gt(){return Nf}const Ju=new J(O.comparator);function mn(...n){let t=Ju;for(const e of n)t=t.insert(e.key,e);return t}function Zu(n){let t=Ju;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ee(){return En()}function tc(){return En()}function En(){return new Ce(n=>n.toString(),(n,t)=>n.isEqual(t))}const xf=new J(O.comparator),Of=new ot(O.comparator);function $(...n){let t=Of;for(const e of n)t=t.add(e);return t}const Mf=new ot(B);function Lf(){return Mf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yr(t)?"-0":t}}function ec(n){return{integerValue:""+n}}function Ff(n,t){return lf(t)?ec(t):mi(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this._=void 0}}function Uf(n,t,e){return n instanceof wr?function(s,o){const a={fields:{[Lu]:{stringValue:Mu},[Uu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&li(o)&&(o=Or(o)),o&&(a.fields[Fu]=o),{mapValue:a}}(e,t):n instanceof Sn?rc(n,t):n instanceof Pn?sc(n,t):function(s,o){const a=nc(s,o),c=Aa(a)+Aa(s.Re);return js(a)&&js(s.Re)?ec(c):mi(s.serializer,c)}(n,t)}function Bf(n,t,e){return n instanceof Sn?rc(n,t):n instanceof Pn?sc(n,t):e}function nc(n,t){return n instanceof Ar?function(r){return js(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class wr extends Ur{}class Sn extends Ur{constructor(t){super(),this.elements=t}}function rc(n,t){const e=ic(t);for(const r of n.elements)e.some(s=>Ft(s,r))||e.push(r);return{arrayValue:{values:e}}}class Pn extends Ur{constructor(t){super(),this.elements=t}}function sc(n,t){let e=ic(t);for(const r of n.elements)e=e.filter(s=>!Ft(s,r));return{arrayValue:{values:e}}}class Ar extends Ur{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Aa(n){return et(n.integerValue||n.doubleValue)}function ic(n){return hi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function $f(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Sn&&s instanceof Sn||r instanceof Pn&&s instanceof Pn?Ue(r.elements,s.elements,Ft):r instanceof Ar&&s instanceof Ar?Ft(r.Re,s.Re):r instanceof wr&&s instanceof wr}(n.transform,t.transform)}class jf{constructor(t,e){this.version=t,this.transformResults=e}}class kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Br{}function oc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new pi(n.key,kt.none()):new Dn(n.key,n.data,kt.none());{const e=n.data,r=wt.empty();let s=new ot(lt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new de(n.key,r,new bt(s.toArray()),kt.none())}}function qf(n,t,e){n instanceof Dn?function(s,o,a){const c=s.value.clone(),h=Ca(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof de?function(s,o,a){if(!fr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=Ca(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(ac(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function vn(n,t,e,r){return n instanceof Dn?function(o,a,c,h){if(!fr(o.precondition,a))return c;const d=o.value.clone(),m=ba(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof de?function(o,a,c,h){if(!fr(o.precondition,a))return c;const d=ba(o.fieldTransforms,h,a),m=a.data;return m.setAll(ac(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,c){return fr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function zf(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=nc(r.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function Ra(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ue(r,s,(o,a)=>$f(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Dn extends Br{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class de extends Br{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ac(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ca(n,t,e){const r=new Map;K(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Bf(a,c,e[s]))}return r}function ba(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Uf(o,a,t))}return r}class pi extends Br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hf extends Br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&qf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=vn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=vn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=tc();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=oc(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$())}isEqual(t){return this.batchId===t.batchId&&Ue(this.mutations,t.mutations,(e,r)=>Ra(e,r))&&Ue(this.baseMutations,t.baseMutations,(e,r)=>Ra(e,r))}}class gi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){K(t.mutations.length===r.length,58842,{fe:t.mutations.length,ge:r.length});let s=function(){return xf}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new gi(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,q;function Qf(n){switch(n){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function uc(n){if(n===void 0)return Ht("GRPC error has no .code"),P.UNKNOWN;switch(n){case nt.OK:return P.OK;case nt.CANCELLED:return P.CANCELLED;case nt.UNKNOWN:return P.UNKNOWN;case nt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case nt.INTERNAL:return P.INTERNAL;case nt.UNAVAILABLE:return P.UNAVAILABLE;case nt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case nt.NOT_FOUND:return P.NOT_FOUND;case nt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case nt.ABORTED:return P.ABORTED;case nt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case nt.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:n})}}(q=nt||(nt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new te([4294967295,4294967295],0);function Sa(n){const t=Du().encode(n),e=new wu;return e.update(t),new Uint8Array(e.digest())}function Pa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new te([e,r],0),new te([s,o],0)]}class _i{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new pn(`Invalid padding: ${e}`);if(r<0)throw new pn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new pn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new pn(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=te.fromNumber(this.pe)}we(t,e,r){let s=t.add(e.multiply(te.fromNumber(r)));return s.compare(Xf)===1&&(s=new te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=Sa(t),[r,s]=Pa(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);if(!this.be(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new _i(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.pe===0)return;const e=Sa(t),[r,s]=Pa(e);for(let o=0;o<this.hashCount;o++){const a=this.we(r,s,o);this.Se(a)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class pn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,kn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new $r(L.min(),s,new J(B),Gt(),$())}}class kn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new kn(r,e,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e,r,s){this.De=t,this.removedTargetIds=e,this.key=r,this.ve=s}}class cc{constructor(t,e){this.targetId=t,this.Ce=e}}class lc{constructor(t,e,r=ht.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Va{constructor(){this.Fe=0,this.Me=Da(),this.xe=ht.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=$(),e=$(),r=$();return this.Me.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:o})}}),new kn(this.xe,this.Oe,t,e,r)}Qe(){this.Ne=!1,this.Me=Da()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,K(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Yf{constructor(t){this.ze=t,this.je=new Map,this.He=Gt(),this.Je=or(),this.Ye=or(),this.Ze=new J(B)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const r=this.rt(e);switch(t.state){case 0:this.it(e)&&r.ke(t.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(t.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(e);break;case 3:this.it(e)&&(r.Ge(),r.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),r.ke(t.resumeToken));break;default:M(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((r,s)=>{this.it(s)&&e(s)})}ot(t){const e=t.targetId,r=t.Ce.count,s=this._t(e);if(s){const o=s.target;if(zs(o))if(r===0){const a=new O(o.path);this.tt(e,a,yt.newNoDocument(a,L.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this.ut(e);if(a!==r){const c=this.ct(t),h=c?this.lt(c,t,a):1;if(h!==0){this.st(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=oe(r).toUint8Array()}catch(h){if(h instanceof Ou)return Fe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new _i(a,s,o)}catch(h){return Fe(h instanceof pn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.pe===0?null:c}lt(t,e,r){return e.Ce.count===r-this.Tt(t,e.targetId)?0:2}Tt(t,e){const r=this.ze.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.ze.Pt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.tt(e,o,null),s++)}),s}It(t){const e=new Map;this.je.forEach((o,a)=>{const c=this._t(a);if(c){if(o.current&&zs(c.target)){const h=new O(c.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,yt.newNoDocument(h,t))}o.Le&&(e.set(a,o.qe()),o.Qe())}});let r=$();this.Ye.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(t));const s=new $r(t,e,this.Ze,this.He,r);return this.He=Gt(),this.Je=or(),this.Ye=or(),this.Ze=new J(B),s}et(t,e){if(!this.it(t))return;const r=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,r),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,r){if(!this.it(t))return;const s=this.rt(t);this.dt(t,e)?s.$e(e,1):s.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),r&&(this.He=this.He.insert(e,r))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new Va,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new ot(B),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new ot(B),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Va),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function or(){return new J(O.comparator)}function Da(){return new J(O.comparator)}const Jf={asc:"ASCENDING",desc:"DESCENDING"},Zf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tm={and:"AND",or:"OR"};class em{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Gs(n,t){return n.useProto3Json||xr(t)?t:{value:t}}function Rr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function nm(n,t){return Rr(n,t.toTimestamp())}function Mt(n){return K(!!n,49232),L.fromTimestamp(function(e){const r=ie(e);return new it(r.seconds,r.nanos)}(n))}function yi(n,t){return Ks(n,t).canonicalString()}function Ks(n,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function dc(n){const t=Y.fromString(n);return K(_c(t),10190,{key:t.toString()}),t}function Ws(n,t){return yi(n.databaseId,t.path)}function bs(n,t){const e=dc(t);if(e.get(1)!==n.databaseId.projectId)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(mc(e))}function fc(n,t){return yi(n.databaseId,t)}function rm(n){const t=dc(n);return t.length===4?Y.emptyPath():mc(t)}function Qs(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function mc(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ka(n,t,e){return{name:Ws(n,t),fields:e.value.mapValue.fields}}function sm(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(K(m===void 0||typeof m=="string",58123),ht.fromBase64String(m||"")):(K(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ht.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(d){const m=d.code===void 0?P.UNKNOWN:uc(d.code);return new x(m,d.message||"")}(a);e=new lc(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=bs(n,r.document.name),o=Mt(r.document.updateTime),a=r.document.createTime?Mt(r.document.createTime):L.min(),c=new wt({mapValue:{fields:r.document.fields}}),h=yt.newFoundDocument(s,o,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];e=new mr(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=bs(n,r.document),o=r.readTime?Mt(r.readTime):L.min(),a=yt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new mr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=bs(n,r.document),o=r.removedTargetIds||[];e=new mr([],o,s,null)}else{if(!("filter"in t))return M(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Wf(s,o),c=r.targetId;e=new cc(c,a)}}return e}function im(n,t){let e;if(t instanceof Dn)e={update:ka(n,t.key,t.value)};else if(t instanceof pi)e={delete:Ws(n,t.key)};else if(t instanceof de)e={update:ka(n,t.key,t.data),updateMask:mm(t.fieldMask)};else{if(!(t instanceof Hf))return M(16599,{ft:t.type});e={verify:Ws(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof wr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Sn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ar)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw M(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:nm(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function om(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Mt(s.updateTime):Mt(o);return a.isEqual(L.min())&&(a=Mt(o)),new jf(a,s.transformResults||[])}(e,t))):[]}function am(n,t){return{documents:[fc(n,t.path)]}}function um(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=fc(n,s);const o=function(d){if(d.length!==0)return gc(Ut.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(w){return{field:Oe(w.field),direction:hm(w.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Gs(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{gt:e,parent:s}}function cm(n){let t=rm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){K(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const w=pc(T);return w instanceof Ut&&Hu(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(w=>function(b){return new Ir(Me(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(T){let w;return w=typeof T=="object"?T.value:T,xr(w)?null:w}(e.limit));let h=null;e.startAt&&(h=function(T){const w=!!T.before,C=T.values||[];return new Tr(C,w)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const w=!T.before,C=T.values||[];return new Tr(C,w)}(e.endAt)),Sf(t,s,a,o,c,"F",h,d)}function lm(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function pc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Me(e.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Me(e.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Me(e.unaryFilter.field);return st.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Me(e.unaryFilter.field);return st.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return st.create(Me(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ut.create(e.compositeFilter.filters.map(r=>pc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function hm(n){return Jf[n]}function dm(n){return Zf[n]}function fm(n){return tm[n]}function Oe(n){return{fieldPath:n.canonicalString()}}function Me(n){return lt.fromServerFormat(n.fieldPath)}function gc(n){return n instanceof st?function(e){if(e.op==="=="){if(Ea(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NAN"}};if(ya(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ea(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NOT_NAN"}};if(ya(e.value))return{unaryFilter:{field:Oe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oe(e.field),op:dm(e.op),value:e.value}}}(n):n instanceof Ut?function(e){const r=e.getFilters().map(s=>gc(s));return r.length===1?r[0]:{compositeFilter:{op:fm(e.op),filters:r}}}(n):M(54877,{filter:n})}function mm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function _c(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,e,r,s,o=L.min(),a=L.min(),c=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Yt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t){this.wt=t}}function gm(n){const t=cm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Hs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.Cn=new ym}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(se.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(se.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class ym{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ot(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ot(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yc=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(yc,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new je(0)}static lr(){return new je(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="LruGarbageCollector",Em=1048576;function Oa([n,t],[e,r]){const s=B(n,e);return s===0?B(t,r):s}class vm{constructor(t){this.Er=t,this.buffer=new ot(Oa),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Oa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Tm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){k(xa,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ke(e)?k(xa,"Ignoring IndexedDB error during garbage collection: ",e):await Ge(e)}await this.mr(3e5)})}}class Im{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Nr.le);const r=new vm(e);return this.gr.forEachTarget(t,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(t,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.gr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(Na)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Na):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let r,s,o,a,c,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(t,s))).next(T=>(r=T,c=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(d=Date.now(),Ne()<=z.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:T})))}}function wm(n,t){return new Im(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.changes=new Ce(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&vn(r.mutation,s,bt.empty(),it.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,$()).next(()=>r))}getLocalViewOfDocuments(t,e,r=$()){const s=Ee();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=mn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Ee();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,$()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=Gt();const a=En(),c=function(){return En()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof de)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),vn(m.mutation,d,m.mutation.getFieldMask(),it.now())):a.set(d.key,bt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var T;return c.set(d,new Rm(m,(T=a.get(d))!==null&&T!==void 0?T:null))}),c))}recalculateAndSaveOverlays(t,e){const r=En();let s=new J((a,c)=>a-c),o=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||bt.empty();m=c.applyToLocalView(d,m),r.set(h,m);const T=(s.get(c.batchId)||$()).add(h);s=s.insert(c.batchId,T)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,m=h.value,T=tc();m.forEach(w=>{if(!o.has(w)){const C=oc(e.get(w),r.get(w));C!==null&&T.set(w,C),o=o.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Pf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(Ee());let c=An,h=o;return a.next(d=>S.forEach(d,(m,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(t,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,$())).next(m=>({batchId:c,changes:Zu(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=mn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=mn();return this.indexManager.getCollectionParents(t,o).next(c=>S.forEach(c,h=>{const d=function(T,w){return new Mr(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((T,w)=>{a=a.insert(T,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,yt.newInvalidDocument(m)))});let c=mn();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&vn(m.mutation,d,bt.empty(),it.now()),Fr(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return S.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Mt(s.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(s){return{name:s.name,query:gm(s.bundledQuery),readTime:Mt(s.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.overlays=new J(O.comparator),this.Qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ee();return S.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=Ee(),o=e.length+1,a=new O(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new J((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Ee(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Ee(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return S.resolve(c)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Kf(e,r));let o=this.Qr.get(e);o===void 0&&(o=$(),this.Qr.set(e,o)),this.Qr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.$r=new ot(at.Ur),this.Kr=new ot(at.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const r=new at(t,e);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.zr(new at(t,e))}jr(t,e){t.forEach(r=>this.removeReference(r,e))}Hr(t){const e=new O(new Y([])),r=new at(e,t),s=new at(e,t+1),o=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new O(new Y([])),r=new at(e,t),s=new at(e,t+1);let o=$();return this.Kr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.$r.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return O.comparator(t.key,e.key)||B(t.Zr,e.Zr)}static Wr(t,e){return B(t.Zr,e.Zr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new ot(at.Ur)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Gf(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.Xr=this.Xr.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.ti(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?ci:this.nr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),s=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,s],a=>{const c=this.ei(a.Zr);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(B);return e.forEach(s=>{const o=new at(s,0),a=new at(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],c=>{r=r.add(c.Zr)})}),S.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new at(new O(o),0);let c=new ot(B);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Zr)),!0)},a),S.resolve(this.ni(c))}ni(t){const e=[];return t.forEach(r=>{const s=this.ei(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){K(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return S.forEach(e.mutations,s=>{const o=new at(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Xr=r})}sr(t){}containsKey(t,e){const r=new at(e,0),s=this.Xr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(t){this.ii=t,this.docs=function(){return new J(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ii(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let r=Gt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():yt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Gt();const a=e.path,c=new O(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||of(sf(m),r)<=0||(s.has(m.key)||Fr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M(9500)}si(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new km(this)}getSize(t){return S.resolve(this.size)}}class km extends Am{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Br.addEntry(t,s)):this.Br.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t){this.persistence=t,this.oi=new Ce(e=>di(e),fi),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this._i=0,this.ai=new Ei,this.targetCount=0,this.ui=je.cr()}forEachTarget(t,e){return this.oi.forEach((r,s)=>e(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this._i&&(this._i=e),S.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new je(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Tr(e),S.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.oi.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.oi.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.ai.Gr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.ai.jr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.ai.Yr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e){this.ci={},this.overlays={},this.li=new Nr(0),this.hi=!1,this.hi=!0,this.Pi=new Pm,this.referenceDelegate=t(this),this.Ti=new Nm(this),this.indexManager=new _m,this.remoteDocumentCache=function(s){return new Dm(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new pm(e),this.Ei=new bm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ci[t.toKey()];return r||(r=new Vm(e,this.referenceDelegate),this.ci[t.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const s=new xm(this.li.next());return this.referenceDelegate.di(),r(s).next(o=>this.referenceDelegate.Ai(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ri(t,e){return S.or(Object.values(this.ci).map(r=>()=>r.containsKey(t,e)))}}class xm extends uf{constructor(t){super(),this.currentSequenceNumber=t}}class vi{constructor(t){this.persistence=t,this.Vi=new Ei,this.mi=null}static fi(t){return new vi(t)}get gi(){if(this.mi)return this.mi;throw M(60996)}addReference(t,e,r){return this.Vi.addReference(r,e),this.gi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Vi.removeReference(r,e),this.gi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.gi,r=>{const s=O.fromPath(r);return this.pi(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(r=>{r?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return S.or([()=>S.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class Cr{constructor(t,e){this.persistence=t,this.yi=new Ce(r=>hf(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=wm(this,e)}static fi(t,e){return new Cr(t,e)}di(){}Ai(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.br(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}br(t){let e=0;return this.yr(t,r=>{e++}).next(()=>e)}yr(t,e){return S.forEach(this.yi,(r,s)=>this.Dr(t,r,s).next(o=>o?S.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.si(t,a=>this.Dr(t,a,e).next(c=>{c||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.yi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),S.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=hr(t.data.value)),e}Dr(t,e,r){return S.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.yi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.ds=r,this.As=s}static Rs(t,e){let r=$(),s=$();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ti(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Vh()?8:cf(bh())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ws(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.bs(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Om;return this.Ss(t,e,a).next(c=>{if(o.result=c,this.fs)return this.Ds(t,e,a,c.size)})}).next(()=>o.result)}Ds(t,e,r,s){return r.documentReadCount<this.gs?(Ne()<=z.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",xe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),S.resolve()):(Ne()<=z.DEBUG&&k("QueryEngine","Query:",xe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Ne()<=z.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",xe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ot(e))):S.resolve())}ws(t,e){if(wa(e))return S.resolve(null);let r=Ot(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Hs(e,null,"F"),r=Ot(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=$(...o);return this.ys.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.vs(e,c);return this.Cs(e,d,a,h.readTime)?this.ws(t,Hs(e,null,"F")):this.Fs(t,d,e,h)}))})))}bs(t,e,r,s){return wa(e)||s.isEqual(L.min())?S.resolve(null):this.ys.getDocuments(t,r).next(o=>{const a=this.vs(e,o);return this.Cs(e,a,r,s)?S.resolve(null):(Ne()<=z.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xe(e)),this.Fs(t,a,e,rf(s,An)).next(c=>c))})}vs(t,e){let r=new ot(Yu(t));return e.forEach((s,o)=>{Fr(t,o)&&(r=r.add(o))}),r}Cs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ss(t,e,r){return Ne()<=z.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",xe(e)),this.ys.getDocumentsMatchingQuery(t,e,se.min(),r)}Fs(t,e,r,s){return this.ys.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="LocalStore",Lm=3e8;class Fm{constructor(t,e,r,s){this.persistence=t,this.Ms=e,this.serializer=s,this.xs=new J(B),this.Os=new Ce(o=>di(o),fi),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(r)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Cm(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function Um(n,t,e,r){return new Fm(n,t,e,r)}async function vc(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=$();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:c}))})})}function Bm(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,m){const T=d.batch,w=T.keys();let C=S.resolve();return w.forEach(b=>{C=C.next(()=>m.getEntry(h,b)).next(N=>{const D=d.docVersions.get(b);K(D!==null,48541),N.version.compareTo(D)<0&&(T.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),m.addEntry(N)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=$();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Tc(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function $m(n,t){const e=F(n),r=t.snapshotVersion;let s=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.Bs.newChangeBuffer({trackRemovals:!0});s=e.xs;const c=[];t.targetChanges.forEach((m,T)=>{const w=s.get(T);if(!w)return;c.push(e.Ti.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.Ti.addMatchingKeys(o,m.addedDocuments,T)));let C=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?C=C.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,r)),s=s.insert(T,C),function(N,D,H){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Lm?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(w,C,m)&&c.push(e.Ti.updateTargetData(o,C))});let h=Gt(),d=$();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(jm(o,a,t.documentUpdates).next(m=>{h=m.qs,d=m.Qs})),!r.isEqual(L.min())){const m=e.Ti.getLastRemoteSnapshotVersion(o).next(T=>e.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return S.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.xs=s,o))}function jm(n,t,e){let r=$(),s=$();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Gt();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):k(Ii,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{qs:a,Qs:s}})}function qm(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=ci),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function zm(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ti.getTargetData(r,t).next(o=>o?(s=o,S.resolve(s)):e.Ti.allocateTargetId(r).next(a=>(s=new Yt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.xs=e.xs.insert(r.targetId,r),e.Os.set(t,r.targetId)),r})}async function Xs(n,t,e){const r=F(n),s=r.xs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ke(a))throw a;k(Ii,`Failed to update sequence numbers for target ${t}: ${a}`)}r.xs=r.xs.remove(t),r.Os.delete(s.target)}function Ma(n,t,e){const r=F(n);let s=L.min(),o=$();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const T=F(h),w=T.Os.get(m);return w!==void 0?S.resolve(T.xs.get(w)):T.Ti.getTargetData(d,m)}(r,a,Ot(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:$())).next(c=>(Hm(r,Df(t),c),{documents:c,$s:o})))}function Hm(n,t,e){let r=n.Ns.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(t,r)}class La{constructor(){this.activeTargetIds=Lf()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gm{constructor(){this.xo=new La,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,r){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new La,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="ConnectivityMonitor";class Ua{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){k(Fa,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){k(Fa,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar=null;function Ys(){return ar===null?ar=function(){return 268435456+Math.round(2147483648*Math.random())}():ar++,"0x"+ar.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss="RestConnection",Wm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Qm{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Er?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(t,e,r,s,o){const a=Ys(),c=this.jo(t,e.toUriEncodedString());k(Ss,`Sending RPC '${t}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,s,o);const{host:d}=new URL(c),m=ii(d);return this.Jo(t,c,h,r,m).then(T=>(k(Ss,`Received RPC '${t}' ${a}: `,T),T),T=>{throw Fe(Ss,`RPC '${t}' ${a} failed with error: `,T,"url: ",c,"request:",r),T})}Yo(t,e,r,s,o,a){return this.zo(t,e,r,s,o)}Ho(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+He}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}jo(t,e){const r=Wm[t];return`${this.Ko}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class Ym extends Qm{constructor(t){super(t),this.l_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,s,o){const a=Ys();return new Promise((c,h)=>{const d=new Au;d.setWithCredentials(!0),d.listenOnce(Ru.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case lr.NO_ERROR:const T=d.getResponseJson();k(gt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(T)),c(T);break;case lr.TIMEOUT:k(gt,`RPC '${t}' ${a} timed out`),h(new x(P.DEADLINE_EXCEEDED,"Request time out"));break;case lr.HTTP_ERROR:const w=d.getStatus();if(k(gt,`RPC '${t}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const b=C==null?void 0:C.error;if(b&&b.status&&b.message){const N=function(H){const U=H.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(U)>=0?U:P.UNKNOWN}(b.status);h(new x(N,b.message))}else h(new x(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new x(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{h_:t,streamId:a,P_:d.getLastErrorCode(),T_:d.getLastError()})}}finally{k(gt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);k(gt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)})}I_(t,e,r){const s=Ys(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Su(),c=bu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");k(gt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const T=a.createWebChannel(m,h);this.E_(T);let w=!1,C=!1;const b=new Xm({Zo:D=>{C?k(gt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(w||(k(gt,`Opening RPC '${t}' stream ${s} transport.`),T.open(),w=!0),k(gt,`RPC '${t}' stream ${s} sending:`,D),T.send(D))},Xo:()=>T.close()}),N=(D,H,U)=>{D.listen(H,j=>{try{U(j)}catch(X){setTimeout(()=>{throw X},0)}})};return N(T,fn.EventType.OPEN,()=>{C||(k(gt,`RPC '${t}' stream ${s} transport opened.`),b.__())}),N(T,fn.EventType.CLOSE,()=>{C||(C=!0,k(gt,`RPC '${t}' stream ${s} transport closed`),b.u_(),this.d_(T))}),N(T,fn.EventType.ERROR,D=>{C||(C=!0,Fe(gt,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),b.u_(new x(P.UNAVAILABLE,"The operation could not be completed")))}),N(T,fn.EventType.MESSAGE,D=>{var H;if(!C){const U=D.data[0];K(!!U,16349);const j=U,X=(j==null?void 0:j.error)||((H=j[0])===null||H===void 0?void 0:H.error);if(X){k(gt,`RPC '${t}' stream ${s} received error:`,X);const Vt=X.status;let rt=function(_){const y=nt[_];if(y!==void 0)return uc(y)}(Vt),I=X.message;rt===void 0&&(rt=P.INTERNAL,I="Unknown error status: "+Vt+" with message "+X.message),C=!0,b.u_(new x(rt,I)),T.close()}else k(gt,`RPC '${t}' stream ${s} received:`,U),b.c_(U)}}),N(c,Cu.STAT_EVENT,D=>{D.stat===Us.PROXY?k(gt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Us.NOPROXY&&k(gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.a_()},0),b}terminate(){this.l_.forEach(t=>t.close()),this.l_=[]}E_(t){this.l_.push(t)}d_(t){this.l_=this.l_.filter(e=>e===t)}}function Ps(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n){return new em(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t,e,r=1e3,s=1.5,o=6e4){this.xi=t,this.timerId=e,this.A_=r,this.R_=s,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(t){this.cancel();const e=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,e-r);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),t())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="PersistentStream";class wc{constructor(t,e,r,s,o,a,c,h){this.xi=t,this.S_=r,this.D_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Ic(t,e)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(t){this.U_(),this.stream.send(t)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(t,e){this.U_(),this.K_(),this.x_.cancel(),this.v_++,t!==4?this.x_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ht(e.toString()),Ht("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}W_(){}auth(){this.state=1;const t=this.G_(this.v_),e=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===e&&this.z_(r,s)},r=>{t(()=>{const s=new x(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(t,e){const r=this.G_(this.v_);this.stream=this.H_(t,e),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(t){return k(Ba,`close with error: ${t}`),this.stream=null,this.close(4,t)}G_(t){return e=>{this.xi.enqueueAndForget(()=>this.v_===t?e():(k(Ba,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jm extends wc{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}H_(t,e){return this.connection.I_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.x_.reset();const e=sm(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Mt(a.readTime):L.min()}(t);return this.listener.Y_(e,r)}Z_(t){const e={};e.database=Qs(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=zs(h)?{documents:am(o,h)}:{query:um(o,h).gt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=hc(o,a.resumeToken);const d=Gs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=Rr(o,a.snapshotVersion.toTimestamp());const d=Gs(o,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=lm(this.serializer,t);r&&(e.labels=r),this.Q_(e)}X_(t){const e={};e.database=Qs(this.serializer),e.removeTarget=t,this.Q_(e)}}class Zm extends wc{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(t,e){return this.connection.I_("Write",t,e)}J_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.na()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.x_.reset();const e=om(t.writeResults,t.commitTime),r=Mt(t.commitTime);return this.listener.ra(r,e)}ia(){const t={};t.database=Qs(this.serializer),this.Q_(t)}ta(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>im(this.serializer,r))};this.Q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{}class ep extends tp{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(t,Ks(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(P.UNKNOWN,o.toString())})}Yo(t,e,r,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Yo(t,Ks(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(P.UNKNOWN,a.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class np{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(t){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.la("Offline")))}set(t){this.Ta(),this._a=0,t==="Online"&&(this.ua=!1),this.la(t)}la(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ha(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Ht(e),this.ua=!1):k("OnlineStateTracker",e)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="RemoteStore";class rp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=o,this.Ra.No(a=>{r.enqueueAndForget(async()=>{be(this)&&(k(Ie,"Restarting streams for network reachability change."),await async function(h){const d=F(h);d.da.add(4),await Nn(d),d.Va.set("Unknown"),d.da.delete(4),await qr(d)}(this))})}),this.Va=new np(r,s)}}async function qr(n){if(be(n))for(const t of n.Aa)await t(!0)}async function Nn(n){for(const t of n.Aa)await t(!1)}function Ac(n,t){const e=F(n);e.Ea.has(t.targetId)||(e.Ea.set(t.targetId,t),Ci(e)?Ri(e):We(e).N_()&&Ai(e,t))}function wi(n,t){const e=F(n),r=We(e);e.Ea.delete(t),r.N_()&&Rc(e,t),e.Ea.size===0&&(r.N_()?r.k_():be(e)&&e.Va.set("Unknown"))}function Ai(n,t){if(n.ma.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}We(n).Z_(t)}function Rc(n,t){n.ma.Ke(t),We(n).X_(t)}function Ri(n){n.ma=new Yf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n.Ea.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),We(n).start(),n.Va.ca()}function Ci(n){return be(n)&&!We(n).O_()&&n.Ea.size>0}function be(n){return F(n).da.size===0}function Cc(n){n.ma=void 0}async function sp(n){n.Va.set("Online")}async function ip(n){n.Ea.forEach((t,e)=>{Ai(n,t)})}async function op(n,t){Cc(n),Ci(n)?(n.Va.Pa(t),Ri(n)):n.Va.set("Unknown")}async function ap(n,t,e){if(n.Va.set("Online"),t instanceof lc&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ea.delete(c),s.ma.removeTarget(c))}(n,t)}catch(r){k(Ie,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await br(n,r)}else if(t instanceof mr?n.ma.Xe(t):t instanceof cc?n.ma.ot(t):n.ma.nt(t),!e.isEqual(L.min()))try{const r=await Tc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.ma.It(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ea.get(d);m&&o.Ea.set(d,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const m=o.Ea.get(h);if(!m)return;o.Ea.set(h,m.withResumeToken(ht.EMPTY_BYTE_STRING,m.snapshotVersion)),Rc(o,h);const T=new Yt(m.target,h,d,m.sequenceNumber);Ai(o,T)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){k(Ie,"Failed to raise snapshot:",r),await br(n,r)}}async function br(n,t,e){if(!Ke(t))throw t;n.da.add(1),await Nn(n),n.Va.set("Offline"),e||(e=()=>Tc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k(Ie,"Retrying IndexedDB access"),await e(),n.da.delete(1),await qr(n)})}function bc(n,t){return t().catch(e=>br(n,e,t))}async function zr(n){const t=F(n),e=ue(t);let r=t.Ia.length>0?t.Ia[t.Ia.length-1].batchId:ci;for(;up(t);)try{const s=await qm(t.localStore,r);if(s===null){t.Ia.length===0&&e.k_();break}r=s.batchId,cp(t,s)}catch(s){await br(t,s)}Sc(t)&&Pc(t)}function up(n){return be(n)&&n.Ia.length<10}function cp(n,t){n.Ia.push(t);const e=ue(n);e.N_()&&e.ea&&e.ta(t.mutations)}function Sc(n){return be(n)&&!ue(n).O_()&&n.Ia.length>0}function Pc(n){ue(n).start()}async function lp(n){ue(n).ia()}async function hp(n){const t=ue(n);for(const e of n.Ia)t.ta(e.mutations)}async function dp(n,t,e){const r=n.Ia.shift(),s=gi.from(r,t,e);await bc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await zr(n)}async function fp(n,t){t&&ue(n).ea&&await async function(r,s){if(function(a){return Qf(a)&&a!==P.ABORTED}(s.code)){const o=r.Ia.shift();ue(r).L_(),await bc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await zr(r)}}(n,t),Sc(n)&&Pc(n)}async function $a(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k(Ie,"RemoteStore received new credentials");const r=be(e);e.da.add(3),await Nn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await qr(e)}async function mp(n,t){const e=F(n);t?(e.da.delete(2),await qr(e)):t||(e.da.add(2),await Nn(e),e.Va.set("Unknown"))}function We(n){return n.fa||(n.fa=function(e,r,s){const o=F(e);return o.oa(),new Jm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:sp.bind(null,n),n_:ip.bind(null,n),i_:op.bind(null,n),Y_:ap.bind(null,n)}),n.Aa.push(async t=>{t?(n.fa.L_(),Ci(n)?Ri(n):n.Va.set("Unknown")):(await n.fa.stop(),Cc(n))})),n.fa}function ue(n){return n.ga||(n.ga=function(e,r,s){const o=F(e);return o.oa(),new Zm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:lp.bind(null,n),i_:fp.bind(null,n),na:hp.bind(null,n),ra:dp.bind(null,n)}),n.Aa.push(async t=>{t?(n.ga.L_(),await zr(n)):(await n.ga.stop(),n.Ia.length>0&&(k(Ie,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new bi(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Si(n,t){if(Ht("AsyncQueue",`${t}: ${n}`),Ke(n))return new x(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{static emptySet(t){return new Le(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=mn(),this.sortedSet=new J(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Le)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Le;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.pa=new J(O.comparator)}track(t){const e=t.doc.key,r=this.pa.get(e);r?t.type!==0&&r.type===3?this.pa=this.pa.insert(e,t):t.type===3&&r.type!==1?this.pa=this.pa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.pa=this.pa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.pa=this.pa.remove(e):t.type===1&&r.type===2?this.pa=this.pa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.pa=this.pa.insert(e,{type:2,doc:t.doc}):M(63341,{Vt:t,ya:r}):this.pa=this.pa.insert(e,t)}wa(){const t=[];return this.pa.inorderTraversal((e,r)=>{t.push(r)}),t}}class qe{constructor(t,e,r,s,o,a,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new qe(t,e,Le.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Lr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(t=>t.va())}}class gp{constructor(){this.queries=qa(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=qa(),o.forEach((a,c)=>{for(const h of c.Sa)h.onError(r)})})(this,new x(P.ABORTED,"Firestore shutting down"))}}function qa(){return new Ce(n=>Xu(n),Lr)}async function _p(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Da()&&t.va()&&(r=2):(o=new pp,r=t.va()?0:1);try{switch(r){case 0:o.ba=await e.onListen(s,!0);break;case 1:o.ba=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=Si(a,`Initialization of query '${xe(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.Sa.push(t),t.Fa(e.onlineState),o.ba&&t.Ma(o.ba)&&Pi(e)}async function yp(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.Sa.indexOf(t);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?s=t.va()?0:1:!o.Da()&&t.va()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Ep(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.Sa)c.Ma(s)&&(r=!0);a.ba=s}}r&&Pi(e)}function vp(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.Sa)o.onError(e);r.queries.delete(t)}function Pi(n){n.Ca.forEach(t=>{t.next()})}var Js,za;(za=Js||(Js={})).xa="default",za.Cache="cache";class Tp{constructor(t,e,r){this.query=t,this.Oa=e,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new qe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Na?this.La(t)&&(this.Oa.next(t),e=!0):this.ka(t,this.onlineState)&&(this.qa(t),e=!0),this.Ba=t,e}onError(t){this.Oa.error(t)}Fa(t){this.onlineState=t;let e=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,t)&&(this.qa(this.Ba),e=!0),e}ka(t,e){if(!t.fromCache||!this.va())return!0;const r=e!=="Offline";return(!this.options.Qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}La(t){if(t.docChanges.length>0)return!0;const e=this.Ba&&this.Ba.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}qa(t){t=qe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Na=!0,this.Oa.next(t)}va(){return this.options.source!==Js.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t){this.key=t}}class Dc{constructor(t){this.key=t}}class Ip{constructor(t,e){this.query=t,this.Ha=e,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=$(),this.mutatedKeys=$(),this.Za=Yu(t),this.Xa=new Le(this.Za)}get eu(){return this.Ha}tu(t,e){const r=e?e.nu:new ja,s=e?e.Xa:this.Xa;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,T)=>{const w=s.get(m),C=Fr(this.query,T)?T:null,b=!!w&&this.mutatedKeys.has(w.key),N=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;w&&C?w.data.isEqual(C.data)?b!==N&&(r.track({type:3,doc:C}),D=!0):this.ru(w,C)||(r.track({type:2,doc:C}),D=!0,(h&&this.Za(C,h)>0||d&&this.Za(C,d)<0)&&(c=!0)):!w&&C?(r.track({type:0,doc:C}),D=!0):w&&!C&&(r.track({type:1,doc:w}),D=!0,(h||d)&&(c=!0)),D&&(C?(a=a.add(C),o=N?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{Xa:a,nu:r,Cs:c,mutatedKeys:o}}ru(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Xa;this.Xa=t.Xa,this.mutatedKeys=t.mutatedKeys;const a=t.nu.wa();a.sort((m,T)=>function(C,b){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{Vt:D})}};return N(C)-N(b)}(m.type,T.type)||this.Za(m.doc,T.doc)),this.iu(r),s=s!=null&&s;const c=e&&!s?this.su():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Ja;return this.Ja=h,a.length!==0||d?{snapshot:new qe(this.query,t.Xa,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:c}:{ou:c}}Fa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new ja,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(t){return!this.Ha.has(t)&&!!this.Xa.has(t)&&!this.Xa.get(t).hasLocalMutations}iu(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}su(){if(!this.current)return[];const t=this.Ya;this.Ya=$(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new Dc(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new Vc(r))}),e}au(t){this.Ha=t.$s,this.Ya=$();const e=this.tu(t.documents);return this.applyChanges(e,!0)}uu(){return qe.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Vi="SyncEngine";class wp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ap{constructor(t){this.key=t,this.cu=!1}}class Rp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.lu={},this.hu=new Ce(c=>Xu(c),Lr),this.Pu=new Map,this.Tu=new Set,this.Iu=new J(O.comparator),this.Eu=new Map,this.du=new Ei,this.Au={},this.Ru=new Map,this.Vu=je.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function Cp(n,t,e=!0){const r=Lc(n);let s;const o=r.hu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.uu()):s=await kc(r,t,e,!0),s}async function bp(n,t){const e=Lc(n);await kc(e,t,!0,!1)}async function kc(n,t,e,r){const s=await zm(n.localStore,Ot(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Sp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ac(n.remoteStore,s),c}async function Sp(n,t,e,r,s){n.fu=(T,w,C)=>async function(N,D,H,U){let j=D.view.tu(H);j.Cs&&(j=await Ma(N.localStore,D.query,!1).then(({documents:I})=>D.view.tu(I,j)));const X=U&&U.targetChanges.get(D.targetId),Vt=U&&U.targetMismatches.get(D.targetId)!=null,rt=D.view.applyChanges(j,N.isPrimaryClient,X,Vt);return Ga(N,D.targetId,rt.ou),rt.snapshot}(n,T,w,C);const o=await Ma(n.localStore,t,!0),a=new Ip(t,o.$s),c=a.tu(o.documents),h=kn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);Ga(n,e,d.ou);const m=new wp(t,e,a);return n.hu.set(t,m),n.Pu.has(e)?n.Pu.get(e).push(t):n.Pu.set(e,[t]),d.snapshot}async function Pp(n,t,e){const r=F(n),s=r.hu.get(t),o=r.Pu.get(s.targetId);if(o.length>1)return r.Pu.set(s.targetId,o.filter(a=>!Lr(a,t))),void r.hu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&wi(r.remoteStore,s.targetId),Zs(r,s.targetId)}).catch(Ge)):(Zs(r,s.targetId),await Xs(r.localStore,s.targetId,!0))}async function Vp(n,t){const e=F(n),r=e.hu.get(t),s=e.Pu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),wi(e.remoteStore,r.targetId))}async function Dp(n,t,e){const r=Fp(n);try{const s=await function(a,c){const h=F(a),d=it.now(),m=c.reduce((C,b)=>C.add(b.key),$());let T,w;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let b=Gt(),N=$();return h.Bs.getEntries(C,m).next(D=>{b=D,b.forEach((H,U)=>{U.isValidDocument()||(N=N.add(H))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,b)).next(D=>{T=D;const H=[];for(const U of c){const j=zf(U,T.get(U.key).overlayedDocument);j!=null&&H.push(new de(U.key,j,ju(j.value.mapValue),kt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,d,H,c)}).next(D=>{w=D;const H=D.applyToLocalDocumentSet(T,N);return h.documentOverlayCache.saveOverlays(C,D.batchId,H)})}).then(()=>({batchId:w.batchId,changes:Zu(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Au[a.currentUser.toKey()];d||(d=new J(B)),d=d.insert(c,h),a.Au[a.currentUser.toKey()]=d}(r,s.batchId,e),await xn(r,s.changes),await zr(r.remoteStore)}catch(s){const o=Si(s,"Failed to persist write");e.reject(o)}}async function Nc(n,t){const e=F(n);try{const r=await $m(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Eu.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.cu=!0:s.modifiedDocuments.size>0?K(a.cu,14607):s.removedDocuments.size>0&&(K(a.cu,42227),a.cu=!1))}),await xn(e,r,t)}catch(r){await Ge(r)}}function Ha(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.hu.forEach((o,a)=>{const c=a.view.Fa(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=F(a);h.onlineState=c;let d=!1;h.queries.forEach((m,T)=>{for(const w of T.Sa)w.Fa(c)&&(d=!0)}),d&&Pi(h)}(r.eventManager,t),s.length&&r.lu.Y_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kp(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new J(O.comparator);a=a.insert(o,yt.newNoDocument(o,L.min()));const c=$().add(o),h=new $r(L.min(),new Map,new J(B),a,c);await Nc(r,h),r.Iu=r.Iu.remove(o),r.Eu.delete(t),Di(r)}else await Xs(r.localStore,t,!1).then(()=>Zs(r,t,e)).catch(Ge)}async function Np(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Bm(e.localStore,t);Oc(e,r,null),xc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await xn(e,s)}catch(s){await Ge(s)}}async function xp(n,t,e){const r=F(n);try{const s=await function(a,c){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,c).next(T=>(K(T!==null,37113),m=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);Oc(r,t,e),xc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await xn(r,s)}catch(s){await Ge(s)}}function xc(n,t){(n.Ru.get(t)||[]).forEach(e=>{e.resolve()}),n.Ru.delete(t)}function Oc(n,t,e){const r=F(n);let s=r.Au[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Au[r.currentUser.toKey()]=s}}function Zs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Pu.get(t))n.hu.delete(r),e&&n.lu.gu(r,e);n.Pu.delete(t),n.isPrimaryClient&&n.du.Hr(t).forEach(r=>{n.du.containsKey(r)||Mc(n,r)})}function Mc(n,t){n.Tu.delete(t.path.canonicalString());const e=n.Iu.get(t);e!==null&&(wi(n.remoteStore,e),n.Iu=n.Iu.remove(t),n.Eu.delete(e),Di(n))}function Ga(n,t,e){for(const r of e)r instanceof Vc?(n.du.addReference(r.key,t),Op(n,r)):r instanceof Dc?(k(Vi,"Document no longer in limbo: "+r.key),n.du.removeReference(r.key,t),n.du.containsKey(r.key)||Mc(n,r.key)):M(19791,{pu:r})}function Op(n,t){const e=t.key,r=e.path.canonicalString();n.Iu.get(e)||n.Tu.has(r)||(k(Vi,"New document in limbo: "+e),n.Tu.add(r),Di(n))}function Di(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const t=n.Tu.values().next().value;n.Tu.delete(t);const e=new O(Y.fromString(t)),r=n.Vu.next();n.Eu.set(r,new Ap(e)),n.Iu=n.Iu.insert(e,r),Ac(n.remoteStore,new Yt(Ot(Qu(e.path)),r,"TargetPurposeLimboResolution",Nr.le))}}async function xn(n,t,e){const r=F(n),s=[],o=[],a=[];r.hu.isEmpty()||(r.hu.forEach((c,h)=>{a.push(r.fu(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){s.push(d);const T=Ti.Rs(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.lu.Y_(s),await async function(h,d){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>S.forEach(d,w=>S.forEach(w.ds,C=>m.persistence.referenceDelegate.addReference(T,w.targetId,C)).next(()=>S.forEach(w.As,C=>m.persistence.referenceDelegate.removeReference(T,w.targetId,C)))))}catch(T){if(!Ke(T))throw T;k(Ii,"Failed to update sequence numbers: "+T)}for(const T of d){const w=T.targetId;if(!T.fromCache){const C=m.xs.get(w),b=C.snapshotVersion,N=C.withLastLimboFreeSnapshotVersion(b);m.xs=m.xs.insert(w,N)}}}(r.localStore,o))}async function Mp(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k(Vi,"User change. New user:",t.toKey());const r=await vc(e.localStore,t);e.currentUser=t,function(o,a){o.Ru.forEach(c=>{c.forEach(h=>{h.reject(new x(P.CANCELLED,a))})}),o.Ru.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await xn(e,r.ks)}}function Lp(n,t){const e=F(n),r=e.Eu.get(t);if(r&&r.cu)return $().add(r.key);{let s=$();const o=e.Pu.get(t);if(!o)return s;for(const a of o){const c=e.hu.get(a);s=s.unionWith(c.view.eu)}return s}}function Lc(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Nc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kp.bind(null,t),t.lu.Y_=Ep.bind(null,t.eventManager),t.lu.gu=vp.bind(null,t.eventManager),t}function Fp(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Np.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xp.bind(null,t),t}class Sr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=jr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Su(t),await this.persistence.start(),this.localStore=this.Du(t),this.gcScheduler=this.vu(t,this.localStore),this.indexBackfillerScheduler=this.Cu(t,this.localStore)}vu(t,e){return null}Cu(t,e){return null}Du(t){return Um(this.persistence,new Mm,t.initialUser,this.serializer)}Su(t){return new Ec(vi.fi,this.serializer)}bu(t){return new Gm}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sr.provider={build:()=>new Sr};class Up extends Sr{constructor(t){super(),this.cacheSizeBytes=t}vu(t,e){K(this.persistence.referenceDelegate instanceof Cr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Tm(r,t.asyncQueue,e)}Su(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Ec(r=>Cr.fi(r,e),this.serializer)}}class ti{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ha(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mp.bind(null,this.syncEngine),await mp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new gp}()}createDatastore(t){const e=jr(t.databaseInfo.databaseId),r=function(o){return new Ym(o)}(t.databaseInfo);return function(o,a,c,h){return new ep(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new rp(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ha(this.syncEngine,e,0),function(){return Ua.C()?new Ua:new Km}())}createSyncEngine(t,e){return function(s,o,a,c,h,d,m){const T=new Rp(s,o,a,c,h,d);return m&&(T.mu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);k(Ie,"RemoteStore shutting down."),o.da.add(5),await Nn(o),o.Ra.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ti.provider={build:()=>new ti};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Mu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Mu(this.observer.error,t):Ht("Uncaught Error in snapshot listener:",t.toString()))}xu(){this.muted=!0}Mu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="FirestoreClient";class $p{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=ku.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{k(ce,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(k(ce,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Si(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Vs(n,t){n.asyncQueue.verifyOperationInProgress(),k(ce,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await vc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ka(n,t){n.asyncQueue.verifyOperationInProgress();const e=await jp(n);k(ce,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>$a(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>$a(t.remoteStore,s)),n._onlineComponents=t}async function jp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(ce,"Using user provided OfflineComponentProvider");try{await Vs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Fe("Error using user provided cache. Falling back to memory cache: "+e),await Vs(n,new Sr)}}else k(ce,"Using default OfflineComponentProvider"),await Vs(n,new Up(void 0));return n._offlineComponents}async function Fc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(ce,"Using user provided OnlineComponentProvider"),await Ka(n,n._uninitializedComponentsProvider._online)):(k(ce,"Using default OnlineComponentProvider"),await Ka(n,new ti))),n._onlineComponents}function qp(n){return Fc(n).then(t=>t.syncEngine)}async function zp(n){const t=await Fc(n),e=t.eventManager;return e.onListen=Cp.bind(null,t.syncEngine),e.onUnlisten=Pp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=bp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vp.bind(null,t.syncEngine),e}function Hp(n,t,e={}){const r=new ee;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,d){const m=new Bp({next:w=>{m.xu(),a.enqueueAndForget(()=>yp(o,T)),w.fromCache&&h.source==="server"?d.reject(new x(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),T=new Tp(c,m,{includeMetadataChanges:!0,Qa:!0});return _p(o,T)}(await zp(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n,t,e){if(!e)throw new x(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Gp(n,t,e,r){if(t===!0&&r===!0)throw new x(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Qa(n){if(!O.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xa(n){if(O.isDocumentKey(n))throw new x(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ki(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function we(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ki(n);throw new x(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="firestore.googleapis.com",Ya=!0;class Ja{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$c,this.ssl=Ya}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Ya;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=yc;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Em)throw new x(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Gp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Hr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ja({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ja(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wd;switch(r.type){case"firstParty":return new Jd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Wa.get(e);r&&(k("ComponentProvider","Removing Datastore"),Wa.delete(e),r.terminate())}(this),Promise.resolve()}}function Kp(n,t,e,r={}){var s;n=we(n,Hr);const o=ii(t),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Ih(`https://${h}`),Ch("Firestore",!0)),a.host!==$c&&a.host!==h&&Fe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!In(d,c)&&(n._setSettings(d),r.mockUserToken)){let m,T;if(typeof r.mockUserToken=="string")m=r.mockUserToken,T=_t.MOCK_USER;else{m=wh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new x(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new _t(w)}n._authCredentials=new Qd(new Vu(m,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Gr(this.firestore,t,this._query)}}class Pt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Pt(this.firestore,t,this._key)}}class ne extends Gr{constructor(t,e,r){super(t,e,Qu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Pt(this.firestore,null,new O(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function Za(n,t,...e){if(n=Lt(n),Bc("collection","path",t),n instanceof Hr){const r=Y.fromString(t,...e);return Xa(r),new ne(n,null,r)}{if(!(n instanceof Pt||n instanceof ne))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Xa(r),new ne(n.firestore,null,r)}}function ei(n,t,...e){if(n=Lt(n),arguments.length===1&&(t=ku.newId()),Bc("doc","path",t),n instanceof Hr){const r=Y.fromString(t,...e);return Qa(r),new Pt(n,null,new O(r))}{if(!(n instanceof Pt||n instanceof ne))throw new x(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Qa(r),new Pt(n.firestore,n instanceof ne?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="AsyncQueue";class eu{constructor(t=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Ic(this,"async_queue_retry"),this.rc=()=>{const r=Ps();r&&k(tu,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=t;const e=Ps();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.oc(),this._c(t)}enterRestrictedMode(t){if(!this.Yu){this.Yu=!0,this.tc=t||!1;const e=Ps();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.rc)}}enqueue(t){if(this.oc(),this.Yu)return new Promise(()=>{});const e=new ee;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ju.push(t),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(t){if(!Ke(t))throw t;k(tu,"Operation failed with retryable error: "+t)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(t){const e=this.sc.then(()=>(this.ec=!0,t().catch(r=>{throw this.Xu=r,this.ec=!1,Ht("INTERNAL UNHANDLED ERROR: ",nu(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=e,e}enqueueAfterDelay(t,e,r){this.oc(),this.nc.indexOf(t)>-1&&(e=0);const s=bi.createAndSchedule(this,t,e,r,o=>this.uc(o));return this.Zu.push(s),s}oc(){this.Xu&&M(47125,{cc:nu(this.Xu)})}verifyOperationInProgress(){}async lc(){let t;do t=this.sc,await t;while(t!==this.sc)}hc(t){for(const e of this.Zu)if(e.timerId===t)return!0;return!1}Pc(t){return this.lc().then(()=>{this.Zu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Zu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.lc()})}Tc(t){this.nc.push(t)}uc(t){const e=this.Zu.indexOf(t);this.Zu.splice(e,1)}}function nu(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class On extends Hr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new eu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new eu(t),this._firestoreClient=void 0,await t}}}function Wp(n,t){const e=typeof n=="object"?n:vu(),r=typeof n=="string"?n:Er,s=Vn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=vh("firestore");o&&Kp(s,...o)}return s}function jc(n){if(n._terminated)throw new x(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qp(n),n._firestoreClient}function Qp(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,d,m){return new mf(c,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Uc(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new $p(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ze(ht.fromBase64String(t))}catch(e){throw new x(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ze(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=/^__.*__$/;class Yp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new de(t,this.data,this.fieldMask,e,this.fieldTransforms):new Dn(t,this.data,e,this.fieldTransforms)}}class qc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new de(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function zc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ic:n})}}class Mi{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ec(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(t){return new Mi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Vc(t),s}mc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(t){return this.dc({path:void 0,Rc:!0})}gc(t){return Pr(t,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ec(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vc(this.path.get(t))}Vc(t){if(t.length===0)throw this.gc("Document fields must not be empty");if(zc(this.Ic)&&Xp.test(t))throw this.gc('Document fields cannot begin and end with "__"')}}class Jp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||jr(t)}bc(t,e,r,s=!1){return new Mi({Ic:t,methodName:e,wc:r,path:lt.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hc(n){const t=n._freezeSettings(),e=jr(n._databaseId);return new Jp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Zp(n,t,e,r,s,o={}){const a=n.bc(o.merge||o.mergeFields?2:0,t,e,s);Li("Data must be an object, but it was:",a,r);const c=Gc(r,a);let h,d;if(o.merge)h=new bt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const w=ni(t,T,e);if(!a.contains(w))throw new x(P.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Wc(m,w)||m.push(w)}h=new bt(m),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new Yp(new wt(c),h,d)}class Wr extends Ni{_toFieldTransform(t){if(t.Ic!==2)throw t.Ic===1?t.gc(`${this._methodName}() can only appear at the top level of your update data`):t.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Wr}}function tg(n,t,e,r){const s=n.bc(1,t,e);Li("Data must be an object, but it was:",s,r);const o=[],a=wt.empty();he(r,(h,d)=>{const m=Fi(t,h,e);d=Lt(d);const T=s.mc(m);if(d instanceof Wr)o.push(m);else{const w=Qr(d,T);w!=null&&(o.push(m),a.set(m,w))}});const c=new bt(o);return new qc(a,c,s.fieldTransforms)}function eg(n,t,e,r,s,o){const a=n.bc(1,t,e),c=[ni(t,r,e)],h=[s];if(o.length%2!=0)throw new x(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)c.push(ni(t,o[w])),h.push(o[w+1]);const d=[],m=wt.empty();for(let w=c.length-1;w>=0;--w)if(!Wc(d,c[w])){const C=c[w];let b=h[w];b=Lt(b);const N=a.mc(C);if(b instanceof Wr)d.push(C);else{const D=Qr(b,N);D!=null&&(d.push(C),m.set(C,D))}}const T=new bt(d);return new qc(m,T,a.fieldTransforms)}function Qr(n,t){if(Kc(n=Lt(n)))return Li("Unsupported field value:",t,n),Gc(n,t);if(n instanceof Ni)return function(r,s){if(!zc(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Rc&&t.Ic!==4)throw t.gc("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=Qr(c,s.fc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ff(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:Rr(s.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rr(s.serializer,o)}}if(r instanceof xi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ze)return{bytesValue:hc(s.serializer,r._byteString)};if(r instanceof Pt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.gc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:yi(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Oi)return function(a,c){return{mapValue:{fields:{[Bu]:{stringValue:$u},[vr]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.gc("VectorValues must only contain numeric values.");return mi(c.serializer,d)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${ki(r)}`)}(n,t)}function Gc(n,t){const e={};return xu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):he(n,(r,s)=>{const o=Qr(s,t.Ac(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Kc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof it||n instanceof xi||n instanceof ze||n instanceof Pt||n instanceof Ni||n instanceof Oi)}function Li(n,t,e){if(!Kc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=ki(e);throw r==="an object"?t.gc(n+" a custom object"):t.gc(n+" "+r)}}function ni(n,t,e){if((t=Lt(t))instanceof Kr)return t._internalPath;if(typeof t=="string")return Fi(n,t);throw Pr("Field path arguments must be of type string or ",n,!1,void 0,e)}const ng=new RegExp("[~\\*/\\[\\]]");function Fi(n,t,e){if(t.search(ng)>=0)throw Pr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Kr(...t.split("."))._internalPath}catch{throw Pr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Pr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(P.INVALID_ARGUMENT,c+n+h)}function Wc(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new rg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Xc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class rg extends Qc{data(){return super.data()}}function Xc(n,t){return typeof t=="string"?Fi(n,t):t instanceof Kr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ig{convertValue(t,e="none"){switch(ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return he(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[vr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>et(a.doubleValue));return new Oi(o)}convertGeoPoint(t){return new xi(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Or(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Rn(t));default:return null}}convertTimestamp(t){const e=ie(t);return new it(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);K(_c(r),9688,{name:t});const s=new Cn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||Ht(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ag extends Qc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new pr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Xc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class pr extends ag{data(t={}){return super.data(t)}}class ug{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ur(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new pr(this._firestore,this._userDataWriter,r.key,r,new ur(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new pr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ur(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new pr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ur(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:cg(c.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function cg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}class lg extends ig{constructor(t){super(),this.firestore=t}convertBytes(t){return new ze(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Pt(this.firestore,null,e)}}function hg(n){n=we(n,Gr);const t=we(n.firestore,On),e=jc(t),r=new lg(t);return sg(n._query),Hp(e,n._query).then(s=>new ug(t,r,n,s))}function dg(n,t,e,...r){n=we(n,Pt);const s=we(n.firestore,On),o=Hc(s);let a;return a=typeof(t=Lt(t))=="string"||t instanceof Kr?eg(o,"updateDoc",n._key,t,e,r):tg(o,"updateDoc",n._key,t),Ui(s,[a.toMutation(n._key,kt.exists(!0))])}function fg(n){return Ui(we(n.firestore,On),[new pi(n._key,kt.none())])}function mg(n,t){const e=we(n.firestore,On),r=ei(n),s=og(n.converter,t);return Ui(e,[Zp(Hc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,kt.exists(!1))]).then(()=>r)}function Ui(n,t){return function(r,s){const o=new ee;return r.asyncQueue.enqueueAndForget(async()=>Dp(await qp(r),s,o)),o.promise}(jc(n),t)}(function(t,e=!0){(function(s){He=s})(Ld),re(new qt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new On(new Xd(r.getProvider("auth-internal")),new Zd(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cn(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),xt(oa,aa,t),xt(oa,aa,"esm2017")})();var pg="firebase",gg="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(pg,gg,"app");const Yc="@firebase/installations",Bi="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=1e4,Zc=`w:${Bi}`,tl="FIS_v2",_g="https://firebaseinstallations.googleapis.com/v1",yg=60*60*1e3,Eg="installations",vg="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ae=new kr(Eg,vg,Tg);function el(n){return n instanceof le&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl({projectId:n}){return`${_g}/projects/${n}/installations`}function rl(n){return{token:n.token,requestStatus:2,expiresIn:wg(n.expiresIn),creationTime:Date.now()}}async function sl(n,t){const r=(await t.json()).error;return Ae.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function il({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Ig(n,{refreshToken:t}){const e=il(n);return e.append("Authorization",Ag(t)),e}async function ol(n){const t=await n();return t.status>=500&&t.status<600?n():t}function wg(n){return Number(n.replace("s","000"))}function Ag(n){return`${tl} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=nl(n),s=il(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:tl,appId:n.appId,sdkVersion:Zc},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await ol(()=>fetch(r,c));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:rl(d.authToken)}}else throw await sl("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=/^[cdef][\w-]{21}$/,ri="";function Sg(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Pg(n);return bg.test(e)?e:ri}catch{return ri}}function Pg(n){return Cg(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=new Map;function cl(n,t){const e=Xr(n);ll(e,t),Vg(e,t)}function ll(n,t){const e=ul.get(n);if(e)for(const r of e)r(t)}function Vg(n,t){const e=Dg();e&&e.postMessage({key:n,fid:t}),kg()}let ve=null;function Dg(){return!ve&&"BroadcastChannel"in self&&(ve=new BroadcastChannel("[Firebase] FID Change"),ve.onmessage=n=>{ll(n.data.key,n.data.fid)}),ve}function kg(){ul.size===0&&ve&&(ve.close(),ve=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="firebase-installations-database",xg=1,Re="firebase-installations-store";let Ds=null;function $i(){return Ds||(Ds=yu(Ng,xg,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Re)}}})),Ds}async function Vr(n,t){const e=Xr(n),s=(await $i()).transaction(Re,"readwrite"),o=s.objectStore(Re),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&cl(n,t.fid),t}async function hl(n){const t=Xr(n),r=(await $i()).transaction(Re,"readwrite");await r.objectStore(Re).delete(t),await r.done}async function Yr(n,t){const e=Xr(n),s=(await $i()).transaction(Re,"readwrite"),o=s.objectStore(Re),a=await o.get(e),c=t(a);return c===void 0?await o.delete(e):await o.put(c,e),await s.done,c&&(!a||a.fid!==c.fid)&&cl(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(n){let t;const e=await Yr(n.appConfig,r=>{const s=Og(r),o=Mg(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===ri?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Og(n){const t=n||{fid:Sg(),registrationStatus:0};return dl(t)}function Mg(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ae.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Lg(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Fg(n)}:{installationEntry:t}}async function Lg(n,t){try{const e=await Rg(n,t);return Vr(n.appConfig,e)}catch(e){throw el(e)&&e.customData.serverCode===409?await hl(n.appConfig):await Vr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Fg(n){let t=await ru(n.appConfig);for(;t.registrationStatus===1;)await al(100),t=await ru(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await ji(n);return r||e}return t}function ru(n){return Yr(n,t=>{if(!t)throw Ae.create("installation-not-found");return dl(t)})}function dl(n){return Ug(n)?{fid:n.fid,registrationStatus:0}:n}function Ug(n){return n.registrationStatus===1&&n.registrationTime+Jc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg({appConfig:n,heartbeatServiceProvider:t},e){const r=$g(n,e),s=Ig(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Zc,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},h=await ol(()=>fetch(r,c));if(h.ok){const d=await h.json();return rl(d)}else throw await sl("Generate Auth Token",h)}function $g(n,{fid:t}){return`${nl(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(n,t=!1){let e;const r=await Yr(n.appConfig,o=>{if(!fl(o))throw Ae.create("not-registered");const a=o.authToken;if(!t&&zg(a))return o;if(a.requestStatus===1)return e=jg(n,t),o;{if(!navigator.onLine)throw Ae.create("app-offline");const c=Gg(o);return e=qg(n,c),c}});return e?await e:r.authToken}async function jg(n,t){let e=await su(n.appConfig);for(;e.authToken.requestStatus===1;)await al(100),e=await su(n.appConfig);const r=e.authToken;return r.requestStatus===0?qi(n,t):r}function su(n){return Yr(n,t=>{if(!fl(t))throw Ae.create("not-registered");const e=t.authToken;return Kg(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function qg(n,t){try{const e=await Bg(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Vr(n.appConfig,r),e}catch(e){if(el(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await hl(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Vr(n.appConfig,r)}throw e}}function fl(n){return n!==void 0&&n.registrationStatus===2}function zg(n){return n.requestStatus===2&&!Hg(n)}function Hg(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+yg}function Gg(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Kg(n){return n.requestStatus===1&&n.requestTime+Jc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wg(n){const t=n,{installationEntry:e,registrationPromise:r}=await ji(t);return r?r.catch(console.error):qi(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(n,t=!1){const e=n;return await Xg(e),(await qi(e,t)).token}async function Xg(n){const{registrationPromise:t}=await ji(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(n){if(!n||!n.options)throw ks("App Configuration");if(!n.name)throw ks("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw ks(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ks(n){return Ae.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="installations",Jg="installations-internal",Zg=n=>{const t=n.getProvider("app").getImmediate(),e=Yg(t),r=Vn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},t_=n=>{const t=n.getProvider("app").getImmediate(),e=Vn(t,ml).getImmediate();return{getId:()=>Wg(e),getToken:s=>Qg(e,s)}};function e_(){re(new qt(ml,Zg,"PUBLIC")),re(new qt(Jg,t_,"PRIVATE"))}e_();xt(Yc,Bi);xt(Yc,Bi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="analytics",n_="firebase_id",r_="origin",s_=60*1e3,i_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zi="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new oi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},St=new kr("analytics","Analytics",o_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(n){if(!n.startsWith(zi)){const t=St.create("invalid-gtag-resource",{gtagURL:n});return At.warn(t.message),""}return n}function pl(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function u_(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function c_(n,t){const e=u_("firebase-js-sdk-policy",{createScriptURL:a_}),r=document.createElement("script"),s=`${zi}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function l_(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function h_(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await pl(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(c){At.error(c)}n("config",s,o)}async function d_(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await pl(e);for(const h of a){const d=c.find(T=>T.measurementId===h),m=d&&t[d.appId];if(m)o.push(m);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){At.error(o)}}function f_(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[c,h]=a;await d_(n,t,e,c,h)}else if(o==="config"){const[c,h]=a;await h_(n,t,e,r,c,h)}else if(o==="consent"){const[c,h]=a;n("consent",c,h)}else if(o==="get"){const[c,h,d]=a;n("get",c,h,d)}else if(o==="set"){const[c]=a;n("set",c)}else n(o,...a)}catch(c){At.error(c)}}return s}function m_(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=f_(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function p_(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(zi)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=30,__=1e3;class y_{constructor(t={},e=__){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const gl=new y_;function E_(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function v_(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:E_(r)},o=i_.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let c="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(c=h.error.message)}catch{}throw St.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function T_(n,t=gl,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw St.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw St.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new A_;return setTimeout(async()=>{c.abort()},s_),_l({appId:r,apiKey:s,measurementId:o},a,c,t)}async function _l(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=gl){var o;const{appId:a,measurementId:c}=n;try{await I_(r,t)}catch(h){if(c)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw h}try{const h=await v_(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!w_(d)){if(s.deleteThrottleMetadata(a),c)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:c};throw h}const m=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?Xo(e,s.intervalMillis,g_):Xo(e,s.intervalMillis),T={throttleEndTimeMillis:Date.now()+m,backoffCount:e+1};return s.setThrottleMetadata(a,T),At.debug(`Calling attemptFetch again in ${m} millis`),_l(n,T,r,s)}}function I_(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(St.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function w_(n){if(!(n instanceof le)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class A_{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function R_(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(){if(mu())try{await pu()}catch(n){return At.warn(St.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return At.warn(St.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function b_(n,t,e,r,s,o,a){var c;const h=T_(n);h.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>At.error(C)),t.push(h);const d=C_().then(C=>{if(C)return r.getId()}),[m,T]=await Promise.all([h,d]);p_(o)||c_(o,m.measurementId),s("js",new Date);const w=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return w[r_]="firebase",w.update=!0,T!=null&&(w[n_]=T),s("config",m.measurementId,w),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t){this.app=t}_delete(){return delete Tn[this.app.options.appId],Promise.resolve()}}let Tn={},iu=[];const ou={};let Ns="dataLayer",P_="gtag",au,yl,uu=!1;function V_(){const n=[];if(Ph()&&n.push("This is a browser extension environment."),Dh()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=St.create("invalid-analytics-context",{errorInfo:t});At.warn(e.message)}}function D_(n,t,e){V_();const r=n.options.appId;if(!r)throw St.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw St.create("no-api-key");if(Tn[r]!=null)throw St.create("already-exists",{id:r});if(!uu){l_(Ns);const{wrappedGtag:o,gtagCore:a}=m_(Tn,iu,ou,Ns,P_);yl=o,au=a,uu=!0}return Tn[r]=b_(n,iu,ou,t,au,Ns,e),new S_(n)}function k_(n=vu()){n=Lt(n);const t=Vn(n,Dr);return t.isInitialized()?t.getImmediate():N_(n)}function N_(n,t={}){const e=Vn(n,Dr);if(e.isInitialized()){const s=e.getImmediate();if(In(t,e.getOptions()))return s;throw St.create("already-initialized")}return e.initialize({options:t})}function x_(n,t,e,r){n=Lt(n),R_(yl,Tn[n.app.options.appId],t,e,r).catch(s=>At.error(s))}const cu="@firebase/analytics",lu="0.10.16";function O_(){re(new qt(Dr,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return D_(r,s,e)},"PUBLIC")),re(new qt("analytics-internal",n,"PRIVATE")),xt(cu,lu),xt(cu,lu,"esm2017");function n(t){try{const e=t.getProvider(Dr).getImmediate();return{logEvent:(r,s,o)=>x_(e,r,s,o)}}catch(e){throw St.create("interop-component-reg-failed",{reason:e})}}}O_();const M_={apiKey:"AIzaSyDH7GLv3ES7_g7ErrdrGKJ3dn2WU6fzT2g",authDomain:"portfolio-workout-tracker.firebaseapp.com",projectId:"portfolio-workout-tracker",storageBucket:"portfolio-workout-tracker.firebasestorage.app",messagingSenderId:"263589849483",appId:"1:263589849483:web:07d47bafebc5187ac8a78e",measurementId:"G-Z21MWHJP60"},El=Eu(M_);k_(El);const cr=Wp(El),L_={class:"workout-app"},F_={class:"workout-item"},U_={class:"workout-text"},B_={class:"workout-title"},$_={class:"workout-subtitle"},j_={class:"workout-actions"},q_=eh({__name:"Workout",setup(n){function t(C){switch(C.toLowerCase()){case"cardio":return"mdi-run-fast";case"strength":return"mdi-dumbbell";case"mobility":return"mdi-yoga";default:return"mdi-help-circle-outline"}}const e=_e(!1),r=_e(""),s=_e("info");function o(C,b="info"){r.value=C,e.value=!0,s.value=b}const a=_e(!1),c=_e(null),h=_e({name:"",type:"",duration:0,date:""}),d=_e([]);nh(async()=>{const C=await hg(Za(cr,"workouts"));d.value=C.docs.map(b=>({id:b.id,...b.data()}))}),rh(a,C=>{C||(h.value={name:"",type:"",duration:0,date:""},c.value=null)});async function m(){if(!h.value.name||!h.value.type||!h.value.date){o("Please fill in all required fields.","error");return}if(c.value)try{const C=ei(cr,"workouts",c.value.id);await dg(C,{...h.value});const b=d.value.findIndex(N=>N.id===c.value.id);d.value[b]={...d.value[b],...h.value},o("Workout updated!","success"),a.value=!1}catch(C){console.error(C),o("Error updating workout.","error")}else{const C={name:h.value.name,type:h.value.type,duration:h.value.duration,date:h.value.date,createdAt:new Date().toISOString()};try{const b=await mg(Za(cr,"workouts"),C);d.value.unshift({...C,id:b.id}),a.value=!1,o("Workout saved!","success")}catch(b){console.error(b),o("Error saving workout.","error")}}}function T(C){c.value=C,h.value={...C},a.value=!0}async function w(C){try{await fg(ei(cr,"workouts",C)),d.value=d.value.filter(b=>b.id!==C),o("Workout deleted!","success")}catch(b){console.error(b),o("Error deleting workout.","error")}}return(C,b)=>{const N=Ct("v-btn"),D=Ct("v-icon"),H=Ct("v-list-item"),U=Ct("v-list"),j=Ct("v-card-title"),X=Ct("v-text-field"),Vt=Ct("v-select"),rt=Ct("v-card-text"),I=Ct("v-spacer"),p=Ct("v-card-actions"),_=Ct("v-card"),y=Ct("v-dialog"),v=Ct("v-container");return Is(),Go("div",L_,[tt(v,null,{default:Tt(()=>[tt(N,{color:"primary",onClick:b[0]||(b[0]=E=>a.value=!0)},{default:Tt(()=>b[8]||(b[8]=[er("+ Add Workout")])),_:1,__:[8]}),tt(U,null,{default:Tt(()=>[b[9]||(b[9]=ke("h2",{class:"section-title"},"My Workouts",-1)),tt(sh,{name:"fade",tag:"div"},{default:Tt(()=>[(Is(!0),Go(ih,null,oh(d.value,E=>(Is(),ah(H,{key:E.id,class:"mb-2 workout-card"},{default:Tt(()=>[ke("div",F_,[tt(D,{icon:t(E.type),size:"28",class:"workout-icon"},null,8,["icon"]),ke("div",U_,[ke("div",B_,nr(E.name),1),ke("div",$_,nr(E.type)+" – "+nr(E.duration)+" min on "+nr(new Date(E.date).toLocaleString()),1)]),ke("div",j_,[tt(N,{icon:"",onClick:g=>T(E)},{default:Tt(()=>[tt(D,{icon:"mdi-pencil"})]),_:2},1032,["onClick"]),tt(N,{icon:"",color:"red",onClick:g=>w(E.id)},{default:Tt(()=>[tt(D,{icon:"mdi-delete"})]),_:2},1032,["onClick"])])])]),_:2},1024))),128))]),_:1})]),_:1,__:[9]}),tt(y,{modelValue:a.value,"onUpdate:modelValue":b[6]||(b[6]=E=>a.value=E),"max-width":"500px",persistent:""},{default:Tt(()=>[tt(_,null,{default:Tt(()=>[tt(j,null,{default:Tt(()=>b[10]||(b[10]=[er("Add Workout")])),_:1,__:[10]}),tt(rt,null,{default:Tt(()=>[tt(X,{modelValue:h.value.name,"onUpdate:modelValue":b[1]||(b[1]=E=>h.value.name=E),label:"Exercise Name"},null,8,["modelValue"]),tt(Vt,{modelValue:h.value.type,"onUpdate:modelValue":b[2]||(b[2]=E=>h.value.type=E),items:["Cardio","Strength","Mobility"],label:"Type"},null,8,["modelValue"]),tt(X,{modelValue:h.value.duration,"onUpdate:modelValue":b[3]||(b[3]=E=>h.value.duration=E),type:"number",label:"Duration (min)"},null,8,["modelValue"]),tt(X,{modelValue:h.value.date,"onUpdate:modelValue":b[4]||(b[4]=E=>h.value.date=E),label:"Date/Time",type:"datetime-local"},null,8,["modelValue"])]),_:1}),tt(p,null,{default:Tt(()=>[tt(I),tt(N,{color:"green",onClick:m},{default:Tt(()=>b[11]||(b[11]=[er("Save")])),_:1,__:[11]}),tt(N,{onClick:b[5]||(b[5]=E=>a.value=!1)},{default:Tt(()=>b[12]||(b[12]=[er("Cancel")])),_:1,__:[12]})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),tt(ch,{modelValue:e.value,"onUpdate:modelValue":b[7]||(b[7]=E=>e.value=E),message:r.value,color:s.value},null,8,["modelValue","message","color"])])}}}),K_=uh(q_,[["__scopeId","data-v-f0b04167"]]);export{K_ as default};
