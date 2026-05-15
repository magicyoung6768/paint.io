import{a as e}from"./rolldown-runtime-DQO3Gir-.js";import{E as t,T as n,j as r,v as i}from"./react-vendor-C7dzpEBY.js";import{E as a,K as o,O as s,V as c,x as l,z as u}from"./antd-C-58ubHL.js";import{O as d,V as f,k as p,l as m,u as h}from"./antd-style-CcKiFJf7.js";import{a as g,i as _,n as v,r as y,t as b}from"./services-Dl_AIR2i.js";import{l as x,n as S,r as C}from"./index-CxL4IbUb.js";var w={loginContainer:`_loginContainer_1brsp_1`,particleCanvas:`_particleCanvas_1brsp_27`,shaderCanvas:`_shaderCanvas_1brsp_49`,loginBox:`_loginBox_1brsp_69`,fadeInUp:`_fadeInUp_1brsp_1`,leftSection:`_leftSection_1brsp_123`,brandInfo:`_brandInfo_1brsp_143`,slideInLeft:`_slideInLeft_1brsp_1`,brandTitle:`_brandTitle_1brsp_183`,brandSubtitle:`_brandSubtitle_1brsp_199`,decorationPattern:`_decorationPattern_1brsp_215`,rotate:`_rotate_1brsp_1`,petal:`_petal_1brsp_257`,rightSection:`_rightSection_1brsp_317`,formContainer:`_formContainer_1brsp_335`,slideInRight:`_slideInRight_1brsp_1`,cornerMark:`_cornerMark_1brsp_375`,cornerMarkContent:`_cornerMarkContent_1brsp_417`,switchLoginType:`_switchLoginType_1brsp_435`,switchLink:`_switchLink_1brsp_445`,formHeader:`_formHeader_1brsp_477`,qrcodeContainer:`_qrcodeContainer_1brsp_513`,qrcodeBox:`_qrcodeBox_1brsp_527`,qrcodePlaceholder:`_qrcodePlaceholder_1brsp_561`,qrcodeIcon:`_qrcodeIcon_1brsp_571`,qrcodeTip:`_qrcodeTip_1brsp_593`,loginForm:`_loginForm_1brsp_609`,inputField:`_inputField_1brsp_617`,inputIcon:`_inputIcon_1brsp_649`,formOptions:`_formOptions_1brsp_657`,forgotLink:`_forgotLink_1brsp_671`,loginButton:`_loginButton_1brsp_695`,divider:`_divider_1brsp_727`,dividerText:`_dividerText_1brsp_737`,socialLogin:`_socialLogin_1brsp_751`,socialButton:`_socialButton_1brsp_765`,registerLink:`_registerLink_1brsp_797`,registerText:`_registerText_1brsp_809`,cornerMarkSwitcher:`_cornerMarkSwitcher_1brsp_885`,cornerButton:`_cornerButton_1brsp_899`,active:`_active_1brsp_919`},T=e(r(),1),E={shaderCanvas:`_shaderCanvas_1jvai_1`},D=N;(function(e,t){let n=N,r=e();for(;;)try{if(parseInt(n(524))/1+-parseInt(n(489))/2+parseInt(n(484))/3*(-parseInt(n(516))/4)+parseInt(n(502))/5+-parseInt(n(495))/6*(-parseInt(n(535))/7)+-parseInt(n(501))/8*(-parseInt(n(537))/9)+parseInt(n(509))/10*(-parseInt(n(513))/11)===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(M,726527);var O=function(){let e=!0;return function(t,n){let r=e?function(){let e=N;if(n){let r=n[e(528)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();O(void 0,function(){let e=N,t=function(){let e=N,t;try{t=Function(e(536)+`{}.constructor("return this")( ));`)()}catch{t=window}return t}(),n=t[e(490)]=t[e(490)]||{},r=[e(480),`warn`,`info`,e(506),e(469),`table`,`trace`];for(let t=0;t<r[e(519)];t++){let i=O[e(475)][e(471)].bind(O),a=r[t],o=n[a]||i;i[e(488)]=O[e(483)](O),i.toString=o[e(534)].bind(o),n[a]=i}})();var k=D(515),A=`
  precision mediump float;
  
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform vec3 u_color3;
  
  // 简单的2D噪声函数
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  // 平滑噪声函数
  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));
    
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }
  
  // 简化的FBM函数
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 4; i++) {
      value += amplitude * smoothNoise(p * frequency);
      frequency *= 2.0;
      amplitude *= 0.5;
    }
    
    return value;
  }
  
  // 高斯模糊函数 - 用于柔光效果
  float gaussianBlur(vec2 uv, float sigma) {
    float blurAmount = 0.0;
    float weight = 0.0;
    
    for(int i = -2; i <= 2; i++) {
      for(int j = -2; j <= 2; j++) {
        vec2 offset = vec2(float(i), float(j)) * 0.006; // 增加模糊强度
        float dist = length(vec2(i, j));
        float gaussian = exp(-(dist * dist) / (2.0 * sigma * sigma));
        
        // 在模糊区域采样噪声值
        vec2 p = (uv + offset) * 4.0 - u_time * 0.2; // 减慢流动速度
        blurAmount += fbm(p) * gaussian;
        weight += gaussian;
      }
    }
    
    return blurAmount / weight;
  }
  
  // 生成高光点函数
  float generateHighlights(vec2 uv) {
    float highlight = 0.0;
    
    // 创建更多高光点，但减小单个强度
    for(int i = 0; i < 7; i++) { // 增加到7个高光点
      // 每个高光点的位置和参数
      float id = float(i);
      vec2 center = vec2(
        0.5 + 0.4 * sin(u_time * 0.25 + id * 1.5), // 减慢移动速度
        0.5 + 0.4 * cos(u_time * 0.35 + id * 2.0)  // 减慢移动速度
      );
      
      // 高光点的大小随时间变化
      float size = 0.04 + 0.03 * sin(u_time * 0.6 + id); // 增加大小变化范围
      
      // 计算距离并生成高斯分布的高光
      float dist = length(uv - center);
      highlight += 1.5 * exp(-(dist * dist) / (2.0 * size * size)); // 略微降低强度
    }
    
    return highlight;
  }
  
  void main() {
    // 归一化坐标
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    
    // 添加更自然的扭曲效果
    vec2 distortedUv = uv + vec2(
      0.08 * sin(u_time * 0.4 + uv.y * 3.0), // 略微减小扭曲幅度
      0.08 * cos(u_time * 0.4 + uv.x * 3.0)  // 略微减小扭曲幅度
    );
    
    // 基础的流动效果 - 减慢流动速度
    vec2 p = distortedUv * 4.0 - u_time * 0.2;
    float f = fbm(p);
    
    // 创建更自然的颜色混合过渡，减慢颜色变化
    float blendFactor1 = 0.5 + 0.5 * sin(f * 2.0 + u_time * 0.6);
    float blendFactor2 = 0.5 + 0.5 * sin(f * 3.0 + u_time * 0.4 + 1.0);
    
    // 主要使用两种颜色的渐变，第三种作为点缀
    vec3 color = mix(u_color1, u_color2, blendFactor1);
    
    // 只在某些区域添加第三种颜色，创造点缀效果
    if (blendFactor2 > 0.7) {
      color = mix(color, u_color3, 0.3 + 0.7 * blendFactor2);
    }
    
    // 添加柔光效果 - 使用模糊的噪声
    float glow = gaussianBlur(uv, 1.8); // 增加模糊度
    vec3 glowColor = mix(u_color1 * 1.6, u_color2 * 1.6, blendFactor1); // 增强柔光颜色
    
    // 添加亮点效果
    float highlights = generateHighlights(uv);
    vec3 highlightColor = mix(vec3(1.0, 1.0, 1.0), vec3(0.8, 0.9, 1.0), 0.5); // 稍微偏蓝的高光
    
    // 组合基础颜色、柔光和高光
    color = color + glow * glowColor * 0.7; // 略微降低柔光强度
    color = color + highlights * highlightColor * 0.4; // 略微降低高光强度
    
    // 添加更微妙的光照效果
    float light = 0.75 + 0.25 * cos(dot(uv * 2.5, vec2(1.0, 1.0)) + u_time * 0.2); // 减慢光照变化
    color *= light;
    
    // 确保颜色值在有效范围内，但保留一些过饱和区域以增强柔光效果
    color = clamp(color, 0.0, 1.6); // 略微放宽上限
    
    gl_FragColor = vec4(color, 1.0);
  }
`,j=({className:e=``})=>{let t=D,n=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let e=N,t=n[e(467)];if(!t)return;let r=t[e(476)](e(470));if(!r)return;let i=()=>{let n=e;t[n(472)]=window[n(512)],t[n(518)]=window[n(510)],r[n(498)](0,0,t[n(472)],t[n(518)])};i(),window.addEventListener(e(479),i);let a=(t,n)=>{let i=e,a=r.createShader(t);return a?(r[i(523)](a,n),r[i(527)](a),r[i(526)](a,r[i(520)])?a:(r[i(496)](a),null)):null},o=a(r[e(531)],k),s=a(r[e(487)],A);if(!o||!s)return;let c=r[e(517)]();if(!c||(r[e(514)](c,o),r[e(514)](c,s),r.linkProgram(c),!r[e(466)](c,r.LINK_STATUS)))return;r[e(511)](c);let l=[-1,-1,1,-1,-1,1,1,1],u=r[e(505)]();if(!u)return;r.bindBuffer(r[e(503)],u),r[e(494)](r[e(503)],new Float32Array(l),r[e(492)]);let d=r.getAttribLocation(c,e(500));if(d===-1)return;r[e(468)](d),r[e(497)](d,2,r[e(521)],!1,0,0);let f=r[e(478)](c,e(504)),p=r[e(478)](c,e(525)),m=r[e(478)](c,e(474)),h=r[e(478)](c,e(508)),g=r.getUniformLocation(c,e(507));if(!f||!p||!m||!h||!g)return;r[e(491)](m,.35,.55,1),r[e(491)](h,1,.45,.85),r[e(491)](g,.45,1,.9);let _=Date[e(477)](),v,y=!0,b=()=>{let n=e;if(!y)return;let i=(Date[n(477)]()-_)/1e3;try{r[n(511)](c),r[n(493)](f,i),r[n(530)](p,t[n(472)],t[n(518)]),r[n(481)](r[n(473)],0,4)}catch{}v=requestAnimationFrame(b)};return b(),()=>{let t=e;y=!1,cancelAnimationFrame(v),window.removeEventListener(t(479),i),r.deleteProgram(c),r[t(496)](o),r.deleteShader(s),r[t(485)](u)}},[]),S(t(522),{ref:n,className:E.shaderCanvas+` `+e})};function M(){let e=[`20etVQTv`,`innerHeight`,`useProgram`,`innerWidth`,`5519525CEBEAK`,`attachShader`,`
  attribute vec2 a_position;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,`1925316RJyWeY`,`createProgram`,`height`,`length`,`COMPILE_STATUS`,`FLOAT`,`canvas`,`shaderSource`,`1067890fjuVyw`,`u_resolution`,`getShaderParameter`,`compileShader`,`apply`,`getProgramInfoLog`,`uniform2f`,`VERTEX_SHADER`,`WebGL not supported`,`getShaderInfoLog`,`toString`,`1196643PzsOPV`,`return (function() `,`576657cZqGwq`,`getProgramParameter`,`current`,`enableVertexAttribArray`,`exception`,`webgl`,`prototype`,`width`,`TRIANGLE_STRIP`,`u_color1`,`constructor`,`getContext`,`now`,`getUniformLocation`,`resize`,`log`,`drawArrays`,`WebGL error in animation loop:`,`bind`,`9pkOKdp`,`deleteBuffer`,`Shader compilation error:`,`FRAGMENT_SHADER`,`__proto__`,`2160398UQbgJe`,`console`,`uniform3f`,`STATIC_DRAW`,`uniform1f`,`bufferData`,`24tohPHH`,`deleteShader`,`vertexAttribPointer`,`viewport`,`Program linking error:`,`a_position`,`152JjDsdE`,`6425950oTYhkl`,`ARRAY_BUFFER`,`u_time`,`createBuffer`,`error`,`u_color3`,`u_color2`];return M=function(){return e},M()}function N(e,t){return e-=466,M()[e]}(function(e,t){let n=F,r=e();for(;;)try{if(-parseInt(n(548))/1*(-parseInt(n(493))/2)+parseInt(n(516))/3*(-parseInt(n(518))/4)+parseInt(n(564))/5*(parseInt(n(508))/6)+-parseInt(n(561))/7*(parseInt(n(568))/8)+-parseInt(n(513))/9*(-parseInt(n(503))/10)+parseInt(n(481))/11*(parseInt(n(504))/12)+parseInt(n(480))/13*(-parseInt(n(479))/14)===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(I,150996);var P=function(){let e=!0;return function(t,n){let r=e?function(){let e=F;if(n){let r=n[e(519)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();P(void 0,function(){let e=F,t;try{t=Function(e(498)+e(585)+`);`)()}catch{t=window}let n=t[e(559)]=t[e(559)]||{},r=[`log`,e(530),e(535),e(507),e(552),`table`,e(570)];for(let t=0;t<r[e(576)];t++){let i=P[e(563)][e(497)][e(478)](P),a=r[t],o=n[a]||i;i[e(482)]=P[e(478)](P),i[e(473)]=o[e(473)].bind(o),n[a]=i}})();function F(e,t){return e-=467,I()[e]}function I(){let e=`loginForm,img,brandInfo,Paint,pending,登录二维码,二维码已过期,warn,Item,countdownText,qrcode,/forget-password,info,生成二维码中...,success,记住我,forgotLink,status,switchLink,user,社交登录失败，请重试,QQ登录,qrcodeUrl,formOptions,inputIcon,13TJZenJ,扫码登录成功！,qrcodeContainer,使用二维码登录,exception,redirectTo,get,用户名/邮箱,二维码将在 ,statusText,divider,console,登 录,28eKfBlZ,wechat,constructor,5KXxPhQ,请输入密码,二维码正在被扫描...,Success:,368024IIqkQx,accountLogin,trace,brandTitle,small,username,registerLink,brandSubtitle,length,登录失败:,/register,重新生成,还没有账号？,socialButton,rightSection,registerText,qrcodeStatus,{}.constructor("return this")( ),生成二维码失败，请重试,confirmed,petal,qrcodePlaceholder,div,微信登录,使用账号登录,登录成功:,loginButton,primary,toString,立即注册,登录成功！, 秒后过期,scanning,bind,392966Rjqets,104gVfOuy,22lMQbIe,__proto__,二维码登录,cornerMark,账号登录,log,switchLoginType,remember,检查二维码状态失败:,正在扫描...,社交登录成功！,account,36026PvYHXR,loginContainer,expiresIn,inputField,prototype,return (function() ,submit,current,password,message,20iyBjtz,191496VVfHbI,span,登录失败，请检查用户名和密码,error,1753422QAsEAJ,二维码已过期，请重新生成,large,qrcodeId,忘记密码？,389547mfhLQB,expired,loginBox,63996MLsoRZ,leftSection,16zYfIsy,apply,qrcodeIcon,decorationPattern,cornerMarkContent`.split(`,`);return I=function(){return e},I()}function L(){let e=F,r=t(),E=n(),[D,O]=(0,T.useState)(e(492)),k=new URLSearchParams(E.search)[e(554)](e(553))||`/`,{mutateAsync:A,isPending:M,error:N}=y(),{mutateAsync:P,isPending:I}=_(),{mutateAsync:L,data:R}=g(),{mutateAsync:z}=v(),{mutateAsync:B}=b(),[V,H]=(0,T.useState)({qrcodeId:``,qrcodeUrl:``,status:e(527),expiresIn:60}),U=(0,T.useRef)(null),[W,G]=(0,T.useState)(60),{loginSuccess:K}=x(),q=async t=>{let n=e;try{K(await A(t)),l[n(537)](n(475)),r(k)}catch(e){l.error(e[n(502)]||n(506))}},J=async t=>{let n=e;try{await P(t),l[n(537)](n(491)),r(k)}catch(e){l[n(507)](e[n(502)]||n(543))}},Y=async()=>{let t=e;try{let e=await z();H({qrcodeId:e[t(511)],qrcodeUrl:e[t(545)],status:t(527),expiresIn:e.expiresIn||60}),G(e[t(495)]||60),X(e[t(511)])}catch{l[t(507)](t(586))}},X=t=>{let n=e;U.current&&clearInterval(U[n(500)]),U[n(500)]=setInterval(async()=>{let e=n;try{let n=await B(t);H(t=>({...t,status:n[e(540)]})),n[e(540)]===e(587)&&n[e(542)]?(clearInterval(U[e(500)]),l[e(537)](e(549)),r(k)):(n[e(540)],e(477)),n[e(540)]===e(514)&&(clearInterval(U[e(500)]),l[e(507)](e(509)))}catch{}},2e3)};return(0,T.useEffect)(()=>{let t=e;if(W>0&&D===t(533)&&V.status===t(527)){let e=setTimeout(()=>G(W-1),1e3);return()=>clearTimeout(e)}else W===0&&V.status===t(527)&&(H(e=>({...e,status:t(514)})),U[t(500)]&&clearInterval(U.current))},[W,D,V.status]),(0,T.useEffect)(()=>(D===`qrcode`&&Y(),()=>{let e=F;U[e(500)]&&(clearInterval(U[e(500)]),U[e(500)]=null)}),[D]),C(e(467),{className:w[e(494)],children:[S(j,{}),C(e(467),{className:w[e(515)],children:[S(`button`,{className:w[e(484)],onClick:()=>O(D===e(492)?e(533):e(492)),children:S(e(505),{className:w[e(522)],children:D===e(492)?e(485):e(483)})}),C(e(467),{className:w[e(517)],children:[C(e(467),{className:w[e(525)],children:[S(`h1`,{className:w[e(571)],children:e(526)}),S(`p`,{className:w[e(575)],children:`发现灵感，创造美好`})]}),C(e(467),{className:w[e(521)],children:[S(e(467),{className:w[e(588)]}),S(e(467),{className:w[e(588)]}),S(`div`,{className:w[e(588)]}),S(e(467),{className:w.petal}),S(e(467),{className:w[e(588)]})]})]}),S(e(467),{className:w[e(582)],children:C(e(467),{className:w.formContainer,children:[S(e(467),{className:w.formHeader,children:S(`h2`,{children:`登录`})}),D===`account`&&C(s,{name:e(569),initialValues:{remember:!0},className:w[e(523)],onFinish:q,size:e(510),children:[S(s[e(531)],{name:e(573),rules:[{required:!0,message:`请输入用户名或邮箱`}],children:S(a,{prefix:S(h,{className:w[e(547)]}),placeholder:e(555),className:w.inputField})}),S(s[e(531)],{name:e(501),rules:[{required:!0,message:e(565)}],children:S(a.Password,{prefix:S(f,{className:w[e(547)]}),placeholder:`密码`,className:w[e(496)]})}),S(s[e(531)],{children:C(e(467),{className:w[e(546)],children:[S(s[e(531)],{name:e(488),valuePropName:`checked`,noStyle:!0,children:S(c,{children:e(538)})}),S(i,{to:e(534),className:w[e(539)],children:e(512)})]})}),C(s[e(531)],{children:[S(o,{type:e(472),htmlType:e(499),className:w[e(471)],loading:M,block:!0,children:e(560)}),S(e(467),{className:w[e(487)],children:S(e(505),{className:w[e(541)],onClick:()=>O(e(533)),children:e(551)})})]})]}),D===e(533)&&C(e(467),{className:w[e(550)],children:[C(e(467),{className:w.qrcodeBox,children:[V[e(545)]?S(e(524),{src:V[e(545)],alt:e(528),className:w.qrcodeImage}):C(`div`,{className:w[e(589)],children:[S(d,{className:w[e(520)]}),S(`p`,{children:e(536)})]}),V[e(540)]===e(477)&&S(`div`,{className:w[e(584)],children:S(`p`,{className:w.statusText,children:e(490)})}),V.status===e(514)&&C(e(467),{className:w[e(584)]+` expired`,children:[S(`p`,{className:w[e(557)],children:e(529)}),S(o,{type:`primary`,size:e(572),onClick:Y,children:e(579)})]})]}),S(`p`,{className:w.qrcodeTip,children:`请使用花瓣APP扫描二维码登录`}),V[e(540)]===e(527)&&C(`p`,{className:w[e(532)],children:[e(556),W,e(476)]}),S(e(467),{className:w[e(487)],children:S(`span`,{className:w[e(541)],onClick:()=>O(e(492)),children:e(469)})})]}),S(u,{className:w[e(558)],children:S(e(505),{className:w.dividerText,children:`或`})}),C(e(467),{className:w.socialLogin,children:[C(o,{className:w.socialButton,block:!0,loading:I,onClick:()=>J(e(562)),children:[S(m,{}),e(468)]}),C(o,{className:w[e(581)],block:!0,loading:I,onClick:()=>J(`qq`),children:[S(p,{}),e(544)]})]}),C(e(467),{className:w[e(574)],children:[e(580),S(i,{to:e(578),className:w[e(583)],children:e(474)})]})]})})]})]})}export{L as default};