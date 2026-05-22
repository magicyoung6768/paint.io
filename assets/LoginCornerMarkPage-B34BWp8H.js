import{a as e}from"./rolldown-runtime-dkrlDxWg.js";import{E as t,T as n,j as r,v as i}from"./react-vendor-BW0--CzE.js";import{E as a,K as o,O as s,V as c,x as l,z as u}from"./antd-BZfV5Wya.js";import{C as d,P as f,c as p,s as m,w as h}from"./antd-style-WhkLUMeb.js";import{a as g,i as _,n as v,r as y,t as b}from"./services-9MH6Mnij.js";import{l as x,n as S,r as C}from"./index-BtXSxrl0.js";var w={loginContainer:`_loginContainer_1brsp_1`,particleCanvas:`_particleCanvas_1brsp_27`,shaderCanvas:`_shaderCanvas_1brsp_49`,loginBox:`_loginBox_1brsp_69`,fadeInUp:`_fadeInUp_1brsp_1`,leftSection:`_leftSection_1brsp_123`,brandInfo:`_brandInfo_1brsp_143`,slideInLeft:`_slideInLeft_1brsp_1`,brandTitle:`_brandTitle_1brsp_183`,brandSubtitle:`_brandSubtitle_1brsp_199`,decorationPattern:`_decorationPattern_1brsp_215`,rotate:`_rotate_1brsp_1`,petal:`_petal_1brsp_257`,rightSection:`_rightSection_1brsp_317`,formContainer:`_formContainer_1brsp_335`,slideInRight:`_slideInRight_1brsp_1`,cornerMark:`_cornerMark_1brsp_375`,cornerMarkContent:`_cornerMarkContent_1brsp_417`,switchLoginType:`_switchLoginType_1brsp_435`,switchLink:`_switchLink_1brsp_445`,formHeader:`_formHeader_1brsp_477`,qrcodeContainer:`_qrcodeContainer_1brsp_513`,qrcodeBox:`_qrcodeBox_1brsp_527`,qrcodePlaceholder:`_qrcodePlaceholder_1brsp_561`,qrcodeIcon:`_qrcodeIcon_1brsp_571`,qrcodeTip:`_qrcodeTip_1brsp_593`,loginForm:`_loginForm_1brsp_609`,inputField:`_inputField_1brsp_617`,inputIcon:`_inputIcon_1brsp_649`,formOptions:`_formOptions_1brsp_657`,forgotLink:`_forgotLink_1brsp_671`,loginButton:`_loginButton_1brsp_695`,divider:`_divider_1brsp_727`,dividerText:`_dividerText_1brsp_737`,socialLogin:`_socialLogin_1brsp_751`,socialButton:`_socialButton_1brsp_765`,registerLink:`_registerLink_1brsp_797`,registerText:`_registerText_1brsp_809`,cornerMarkSwitcher:`_cornerMarkSwitcher_1brsp_885`,cornerButton:`_cornerButton_1brsp_899`,active:`_active_1brsp_919`},T=e(r(),1),E={shaderCanvas:`_shaderCanvas_1jvai_1`},D=A;(function(e,t){let n=A,r=e();for(;;)try{if(-parseInt(n(426))/1*(parseInt(n(484))/2)+-parseInt(n(458))/3*(parseInt(n(480))/4)+parseInt(n(482))/5*(parseInt(n(434))/6)+parseInt(n(455))/7*(-parseInt(n(486))/8)+parseInt(n(477))/9*(-parseInt(n(491))/10)+-parseInt(n(462))/11+parseInt(n(443))/12===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(k,971929);var O=function(){let e=!0;return function(t,n){let r=e?function(){let e=A;if(n){let r=n[e(485)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();O(void 0,function(){let e=A,t;try{t=Function(e(432)+e(461)+`);`)()}catch{t=window}let n=t[e(436)]=t[e(436)]||{},r=[`log`,e(449),`info`,e(483),e(464),e(444),e(488)];for(let t=0;t<r.length;t++){let i=O.constructor[e(471)].bind(O),a=r[t],o=n[a]||i;i.__proto__=O[e(430)](O),i.toString=o[e(459)][e(430)](o),n[a]=i}})();function k(){let e=[`a_position`,`54206856eiDGHN`,`table`,`deleteShader`,`addEventListener`,`createShader`,`Program linking error:`,`warn`,`u_time`,`linkProgram`,`shaderCanvas`,`enableVertexAttribArray`,`u_resolution`,`7rcAvWY`,`vertexAttribPointer`,`height`,`111879OMFmmT`,`toString`,`Shader compilation error:`,`{}.constructor("return this")( )`,`5370068OPibce`,`shaderSource`,`exception`,`deleteBuffer`,`getShaderParameter`,`viewport`,`removeEventListener`,`getContext`,`deleteProgram`,`prototype`,`getProgramInfoLog`,`useProgram`,`
  attribute vec2 a_position;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,`COMPILE_STATUS`,`VERTEX_SHADER`,`495CXBzzh`,`
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
`,`width`,`140LLHPtF`,`TRIANGLE_STRIP`,`485takBrS`,`error`,`616rvgZpy`,`apply`,`13610312XoBvtU`,`u_color1`,`trace`,`getUniformLocation`,`FRAGMENT_SHADER`,`38860NYlYSy`,`getShaderInfoLog`,`uniform3f`,`canvas`,`current`,`createBuffer`,`WebGL error in animation loop:`,`u_color3`,`getAttribLocation`,`u_color2`,`resize`,`1107KvuFmp`,`WebGL not supported`,`STATIC_DRAW`,`attachShader`,`bind`,`now`,`return (function() `,`getProgramParameter`,`31182DCTieN`,`innerHeight`,`console`,`FLOAT`,`createProgram`,`bufferData`,`LINK_STATUS`,`bindBuffer`];return k=function(){return e},k()}function A(e,t){return e-=422,k()[e]}var j=D(474),M=D(478),N=({className:e=``})=>{let t=D,n=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let e=A,t=n[e(495)];if(!t)return;let r=t[e(469)](`webgl`);if(!r)return;let i=()=>{let n=e;t[n(479)]=window.innerWidth,t[n(457)]=window[n(435)],r[n(467)](0,0,t[n(479)],t[n(457)])};i(),window[e(446)](e(425),i);let a=(t,n)=>{let i=e,a=r[i(447)](t);return a?(r[i(463)](a,n),r.compileShader(a),r[i(466)](a,r[i(475)])?a:(r[i(445)](a),null)):null},o=a(r[e(476)],j),s=a(r[e(490)],M);if(!o||!s)return;let c=r[e(438)]();if(!c||(r[e(429)](c,o),r[e(429)](c,s),r[e(451)](c),!r[e(433)](c,r[e(440)])))return;r[e(473)](c);let l=[-1,-1,1,-1,-1,1,1,1],u=r[e(496)]();if(!u)return;r[e(441)](r.ARRAY_BUFFER,u),r[e(439)](r.ARRAY_BUFFER,new Float32Array(l),r[e(428)]);let d=r[e(423)](c,e(442));if(d===-1)return;r[e(453)](d),r[e(456)](d,2,r[e(437)],!1,0,0);let f=r.getUniformLocation(c,e(450)),p=r[e(489)](c,e(454)),m=r.getUniformLocation(c,e(487)),h=r[e(489)](c,e(424)),g=r[e(489)](c,e(422));if(!f||!p||!m||!h||!g)return;r[e(493)](m,.35,.55,1),r[e(493)](h,1,.45,.85),r[e(493)](g,.45,1,.9);let _=Date[e(431)](),v,y=!0,b=()=>{let n=e;if(!y)return;let i=(Date[n(431)]()-_)/1e3;try{r.useProgram(c),r.uniform1f(f,i),r.uniform2f(p,t[n(479)],t[n(457)]),r.drawArrays(r[n(481)],0,4)}catch{}v=requestAnimationFrame(b)};return b(),()=>{let t=e;y=!1,cancelAnimationFrame(v),window[t(468)](t(425),i),r[t(470)](c),r[t(445)](o),r[t(445)](s),r[t(465)](u)}},[]),S(t(494),{ref:n,className:E[t(452)]+` `+e})};function P(e,t){return e-=297,L()[e]}(function(e,t){let n=P,r=e();for(;;)try{if(-parseInt(n(330))/1*(-parseInt(n(371))/2)+-parseInt(n(315))/3*(parseInt(n(400))/4)+-parseInt(n(297))/5+parseInt(n(358))/6+-parseInt(n(399))/7+-parseInt(n(398))/8*(-parseInt(n(367))/9)+parseInt(n(303))/10*(parseInt(n(344))/11)===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(L,835739);var F=function(){let e=!0;return function(t,n){let r=e?function(){let e=P;if(n){let r=n[e(374)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}(),I=F(void 0,function(){let e=P,t;try{t=Function(e(386)+e(349)+`);`)()}catch{t=window}let n=t[e(403)]=t[e(403)]||{},r=[e(383),e(321),e(324),e(375),e(311),`table`,`trace`];for(let t=0;t<r[e(372)];t++){let i=F[e(346)].prototype[e(392)](F),a=r[t],o=n[a]||i;i[e(313)]=F.bind(F),i[e(361)]=o.toString[e(392)](o),n[a]=i}});function L(){let e=`brandSubtitle,expired,toString,primary,请输入用户名或邮箱,scanning,生成二维码中...,登录成功！,7180020FgVZcz,/forget-password,社交登录成功！,loginContainer,18YMtHwc,length,decorationPattern,apply,error,立即注册,brandInfo,inputIcon,Paint,current,qrcode,账号登录,log,user,checked,return (function() ,password,dividerText,忘记密码？,cornerMarkContent,/register,bind,qrcodeTip,get,记住我,large,微信登录,16teibGd,6957776YpaziR,2971540zTFwpv,Password,search,console,success,Item,二维码已过期，请重新生成,registerText,username,inputField,使用二维码登录,Success:,5501970anvYmE,qrcodeIcon,switchLink,registerLink,account,二维码将在 ,10sWHknP,用户名/邮箱,正在扫描...,loginForm,formOptions,QQ登录,status,社交登录失败，请重试,exception,二维码登录,__proto__,二维码已过期,3YEVDFh,登录失败:,formHeader,生成二维码失败，请重试,brandTitle,message,warn,检查二维码状态失败:,qrcodeStatus,info,expiresIn,请输入密码,confirmed,wechat,divider,83586gGjeCg,二维码正在被扫描...,登录成功:,switchLoginType,socialButton,重新生成,forgotLink,button, expired,statusText,redirectTo,accountLogin,div,pending,9950842lYixrI,使用账号登录,constructor,发现灵感，创造美好,还没有账号？,{}.constructor("return this")( ),socialLogin,leftSection,rightSection,qrcodeUrl,登录失败，请检查用户名和密码,submit,span,petal,2523180oyCtTI`.split(`,`);return L=function(){return e},L()}I();function R(){let e=P,r=t(),E=n(),[D,O]=(0,T.useState)(e(301)),k=new URLSearchParams(E[e(402)])[e(394)](e(340))||`/`,{mutateAsync:A,isPending:j,error:M}=y(),{mutateAsync:F,isPending:I}=_(),{mutateAsync:L,data:R}=g(),{mutateAsync:z}=v(),{mutateAsync:B}=b(),[V,H]=(0,T.useState)({qrcodeId:``,qrcodeUrl:``,status:e(343),expiresIn:60}),U=(0,T.useRef)(null),[W,G]=(0,T.useState)(60),{loginSuccess:K}=x(),q=async t=>{let n=e;try{K(await A(t)),l[n(404)](n(366)),r(k)}catch(e){l.error(e.message||n(354))}},J=async t=>{let n=e;try{await F(t),l.success(n(369)),r(k)}catch(e){l[n(375)](e[n(320)]||n(310))}},Y=async()=>{let t=e;try{let e=await z();H({qrcodeId:e.qrcodeId,qrcodeUrl:e.qrcodeUrl,status:`pending`,expiresIn:e[t(325)]||60}),G(e.expiresIn||60),X(e.qrcodeId)}catch{l.error(t(318))}},X=t=>{let n=e;U.current&&clearInterval(U[n(380)]),U[n(380)]=setInterval(async()=>{let e=n;try{let n=await B(t);H(t=>({...t,status:n[e(309)]})),n.status===e(327)&&n[e(384)]?(clearInterval(U.current),l[e(404)](`扫码登录成功！`),r(k)):(n.status,e(364)),n[e(309)]===`expired`&&(clearInterval(U.current),l.error(e(406)))}catch{}},2e3)};return(0,T.useEffect)(()=>{let t=e;if(W>0&&D===t(381)&&V[t(309)]===t(343)){let e=setTimeout(()=>G(W-1),1e3);return()=>clearTimeout(e)}else W===0&&V[t(309)]===t(343)&&(H(e=>({...e,status:t(360)})),U[t(380)]&&clearInterval(U[t(380)]))},[W,D,V[e(309)]]),(0,T.useEffect)(()=>{let t=e;return D===t(381)&&Y(),()=>{let e=t;U[e(380)]&&(clearInterval(U[e(380)]),U[e(380)]=null)}},[D]),C(e(342),{className:w[e(370)],children:[S(N,{}),C(e(342),{className:w.loginBox,children:[S(e(337),{className:w.cornerMark,onClick:()=>O(D===e(301)?e(381):e(301)),children:S(e(356),{className:w[e(390)],children:D===e(301)?e(382):e(312)})}),C(e(342),{className:w[e(351)],children:[C(e(342),{className:w[e(377)],children:[S(`h1`,{className:w[e(319)],children:e(379)}),S(`p`,{className:w[e(359)],children:e(347)})]}),C(e(342),{className:w[e(373)],children:[S(e(342),{className:w[e(357)]}),S(e(342),{className:w.petal}),S(`div`,{className:w[e(357)]}),S(e(342),{className:w.petal}),S(e(342),{className:w[e(357)]})]})]}),S(e(342),{className:w[e(352)],children:C(`div`,{className:w.formContainer,children:[S(`div`,{className:w[e(317)],children:S(`h2`,{children:`登录`})}),D===e(301)&&C(s,{name:e(341),initialValues:{remember:!0},className:w[e(306)],onFinish:q,size:e(396),children:[S(s[e(405)],{name:e(408),rules:[{required:!0,message:e(363)}],children:S(a,{prefix:S(p,{className:w[e(378)]}),placeholder:e(304),className:w[e(409)]})}),S(s[e(405)],{name:e(387),rules:[{required:!0,message:e(326)}],children:S(a[e(401)],{prefix:S(f,{className:w.inputIcon}),placeholder:`密码`,className:w.inputField})}),S(s[e(405)],{children:C(e(342),{className:w[e(307)],children:[S(s[e(405)],{name:`remember`,valuePropName:e(385),noStyle:!0,children:S(c,{children:e(395)})}),S(i,{to:e(368),className:w[e(336)],children:e(389)})]})}),C(s[e(405)],{children:[S(o,{type:e(362),htmlType:e(355),className:w.loginButton,loading:j,block:!0,children:`登 录`}),S(`div`,{className:w.switchLoginType,children:S(`span`,{className:w[e(299)],onClick:()=>O(e(381)),children:e(410)})})]})]}),D===e(381)&&C(e(342),{className:w.qrcodeContainer,children:[C(e(342),{className:w.qrcodeBox,children:[V[e(353)]?S(`img`,{src:V[e(353)],alt:`登录二维码`,className:w.qrcodeImage}):C(e(342),{className:w.qrcodePlaceholder,children:[S(d,{className:w[e(298)]}),S(`p`,{children:e(365)})]}),V[e(309)]===e(364)&&S(e(342),{className:w[e(323)],children:S(`p`,{className:w[e(339)],children:e(305)})}),V[e(309)]===e(360)&&C(e(342),{className:w.qrcodeStatus+e(338),children:[S(`p`,{className:w.statusText,children:e(314)}),S(o,{type:`primary`,size:`small`,onClick:Y,children:e(335)})]})]}),S(`p`,{className:w[e(393)],children:`请使用花瓣APP扫描二维码登录`}),V[e(309)]===e(343)&&C(`p`,{className:w.countdownText,children:[e(302),W,` 秒后过期`]}),S(e(342),{className:w[e(333)],children:S(e(356),{className:w.switchLink,onClick:()=>O(e(301)),children:e(345)})})]}),S(u,{className:w[e(329)],children:S(e(356),{className:w[e(388)],children:`或`})}),C(e(342),{className:w[e(350)],children:[C(o,{className:w[e(334)],block:!0,loading:I,onClick:()=>J(e(328)),children:[S(m,{}),e(397)]}),C(o,{className:w[e(334)],block:!0,loading:I,onClick:()=>J(`qq`),children:[S(h,{}),e(308)]})]}),C(`div`,{className:w[e(300)],children:[e(348),S(i,{to:e(391),className:w[e(407)],children:e(376)})]})]})})]})]})}export{R as default};