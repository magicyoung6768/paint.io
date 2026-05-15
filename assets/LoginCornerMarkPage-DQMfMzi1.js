import{a as e}from"./rolldown-runtime-Bw_VZj1I.js";import{E as t,T as n,j as r,v as i}from"./react-vendor-DHm6WKMX.js";import{E as a,K as o,O as s,V as c,x as l,z as u}from"./antd-Ckyyxd0w.js";import{O as d,V as f,k as p,l as m,u as h}from"./antd-style-mb-D6pPz.js";import{a as g,i as _,n as v,r as y,t as b}from"./services-DKxQ-jF-.js";import{l as x,n as S,r as C}from"./index-C3xUmjko.js";var w={loginContainer:`_loginContainer_1brsp_1`,particleCanvas:`_particleCanvas_1brsp_27`,shaderCanvas:`_shaderCanvas_1brsp_49`,loginBox:`_loginBox_1brsp_69`,fadeInUp:`_fadeInUp_1brsp_1`,leftSection:`_leftSection_1brsp_123`,brandInfo:`_brandInfo_1brsp_143`,slideInLeft:`_slideInLeft_1brsp_1`,brandTitle:`_brandTitle_1brsp_183`,brandSubtitle:`_brandSubtitle_1brsp_199`,decorationPattern:`_decorationPattern_1brsp_215`,rotate:`_rotate_1brsp_1`,petal:`_petal_1brsp_257`,rightSection:`_rightSection_1brsp_317`,formContainer:`_formContainer_1brsp_335`,slideInRight:`_slideInRight_1brsp_1`,cornerMark:`_cornerMark_1brsp_375`,cornerMarkContent:`_cornerMarkContent_1brsp_417`,switchLoginType:`_switchLoginType_1brsp_435`,switchLink:`_switchLink_1brsp_445`,formHeader:`_formHeader_1brsp_477`,qrcodeContainer:`_qrcodeContainer_1brsp_513`,qrcodeBox:`_qrcodeBox_1brsp_527`,qrcodePlaceholder:`_qrcodePlaceholder_1brsp_561`,qrcodeIcon:`_qrcodeIcon_1brsp_571`,qrcodeTip:`_qrcodeTip_1brsp_593`,loginForm:`_loginForm_1brsp_609`,inputField:`_inputField_1brsp_617`,inputIcon:`_inputIcon_1brsp_649`,formOptions:`_formOptions_1brsp_657`,forgotLink:`_forgotLink_1brsp_671`,loginButton:`_loginButton_1brsp_695`,divider:`_divider_1brsp_727`,dividerText:`_dividerText_1brsp_737`,socialLogin:`_socialLogin_1brsp_751`,socialButton:`_socialButton_1brsp_765`,registerLink:`_registerLink_1brsp_797`,registerText:`_registerText_1brsp_809`,cornerMarkSwitcher:`_cornerMarkSwitcher_1brsp_885`,cornerButton:`_cornerButton_1brsp_899`,active:`_active_1brsp_919`},T=e(r(),1),E={shaderCanvas:`_shaderCanvas_1jvai_1`},D=A;(function(e,t){let n=A,r=e();for(;;)try{if(parseInt(n(491))/1*(-parseInt(n(501))/2)+parseInt(n(457))/3*(parseInt(n(468))/4)+parseInt(n(448))/5*(-parseInt(n(511))/6)+-parseInt(n(464))/7+parseInt(n(486))/8*(parseInt(n(477))/9)+-parseInt(n(473))/10+parseInt(n(519))/11*(parseInt(n(498))/12)===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(P,441421);var O=function(){let e=!0;return function(t,n){let r=e?function(){let e=A;if(n){let r=n[e(513)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}(),k=O(void 0,function(){let e=A,t;try{t=Function(`return (function() `+e(492)+`);`)()}catch{t=window}let n=t[e(523)]=t.console||{},r=[e(509),e(489),e(461),e(506),e(450),`table`,e(479)];for(let t=0;t<r[e(499)];t++){let i=O[e(516)][e(522)][e(474)](O),a=r[t],o=n[a]||i;i[e(459)]=O[e(474)](O),i.toString=o[e(481)].bind(o),n[a]=i}});function A(e,t){return e-=446,P()[e]}k();var j=D(470),M=`
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
`,N=({className:e=``})=>{let t=D,n=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let e=A,t=n[e(512)];if(!t)return;let r=t[e(520)](e(469));if(!r)return;let i=()=>{let n=e;t[n(521)]=window[n(449)],t[n(502)]=window[n(493)],r[n(467)](0,0,t[n(521)],t[n(502)])};i(),window[e(484)](e(452),i);let a=(t,n)=>{let i=e,a=r[i(503)](t);return a?(r[i(517)](a,n),r[i(485)](a),r.getShaderParameter(a,r[i(505)])?a:(r[i(508)](a),null)):null},o=a(r[e(507)],j),s=a(r[e(476)],M);if(!o||!s)return;let c=r.createProgram();if(!c||(r[e(496)](c,o),r[e(496)](c,s),r[e(495)](c),!r[e(447)](c,r.LINK_STATUS)))return;r[e(518)](c);let l=[-1,-1,1,-1,-1,1,1,1],u=r[e(463)]();if(!u)return;r[e(466)](r[e(475)],u),r[e(515)](r[e(475)],new Float32Array(l),r[e(471)]);let d=r[e(458)](c,e(490));if(d===-1)return;r.enableVertexAttribArray(d),r[e(480)](d,2,r[e(497)],!1,0,0);let f=r.getUniformLocation(c,e(504)),p=r.getUniformLocation(c,e(462)),m=r.getUniformLocation(c,e(478)),h=r.getUniformLocation(c,e(488)),g=r[e(483)](c,e(510));if(!f||!p||!m||!h||!g)return;r.uniform3f(m,.35,.55,1),r[e(455)](h,1,.45,.85),r[e(455)](g,.45,1,.9);let _=Date[e(456)](),v,y=!0,b=()=>{let n=e;if(!y)return;let i=(Date.now()-_)/1e3;try{r[n(518)](c),r[n(500)](f,i),r[n(514)](p,t[n(521)],t[n(502)]),r[n(494)](r[n(460)],0,4)}catch{}v=requestAnimationFrame(b)};return b(),()=>{let t=e;y=!1,cancelAnimationFrame(v),window[t(465)](t(452),i),r[t(472)](c),r[t(508)](o),r[t(508)](s),r[t(446)](u)}},[]),S(`canvas`,{ref:n,className:E[t(454)]+` `+e})};function P(){let e=[`createShader`,`u_time`,`COMPILE_STATUS`,`error`,`VERTEX_SHADER`,`deleteShader`,`log`,`u_color3`,`1771518VbWuqf`,`current`,`apply`,`uniform2f`,`bufferData`,`constructor`,`shaderSource`,`useProgram`,`11HiVpaw`,`getContext`,`width`,`prototype`,`console`,`deleteBuffer`,`getProgramParameter`,`5iYHKVB`,`innerWidth`,`exception`,`WebGL not supported`,`resize`,`getShaderInfoLog`,`shaderCanvas`,`uniform3f`,`now`,`341892bXepbu`,`getAttribLocation`,`__proto__`,`TRIANGLE_STRIP`,`info`,`u_resolution`,`createBuffer`,`3000207MdNflM`,`removeEventListener`,`bindBuffer`,`viewport`,`4OsftLT`,`webgl`,`
  attribute vec2 a_position;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,`STATIC_DRAW`,`deleteProgram`,`7384730IqwNFO`,`bind`,`ARRAY_BUFFER`,`FRAGMENT_SHADER`,`243GTUmxj`,`u_color1`,`trace`,`vertexAttribPointer`,`toString`,`WebGL error in animation loop:`,`getUniformLocation`,`addEventListener`,`compileShader`,`138328GvUrcg`,`Shader compilation error:`,`u_color2`,`warn`,`a_position`,`7231IwxnBa`,`{}.constructor("return this")( )`,`innerHeight`,`drawArrays`,`linkProgram`,`attachShader`,`FLOAT`,`23944920qznMkO`,`length`,`uniform1f`,`186oNdzFY`,`height`];return P=function(){return e},P()}(function(e,t){let n=L,r=e();for(;;)try{if(parseInt(n(394))/1*(parseInt(n(417))/2)+-parseInt(n(379))/3*(parseInt(n(461))/4)+-parseInt(n(423))/5*(-parseInt(n(432))/6)+parseInt(n(450))/7+-parseInt(n(472))/8+-parseInt(n(441))/9+parseInt(n(462))/10===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(I,445314);var F=function(){let e=!0;return function(t,n){let r=e?function(){let e=L;if(n){let r=n[e(467)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();F(void 0,function(){let e=L,t=function(){let e=L,t;try{t=Function(e(427)+e(411)+`);`)()}catch{t=window}return t}(),n=t.console=t.console||{},r=[e(444),e(470),e(377),e(435),`exception`,e(387),`trace`];for(let t=0;t<r[e(383)];t++){let i=F[e(391)][e(381)].bind(F),a=r[t],o=n[a]||i;i[e(458)]=F[e(465)](F),i[e(431)]=o[e(431)][e(465)](o),n[a]=i}})();function I(){let e=`6335ecjPRO,发现灵感，创造美好,pending,petal,return (function() ,button,立即注册,qrcodeStatus,toString,2154ZGOunC,账号登录,redirectTo,error,socialButton,div,switchLink,brandInfo,large,2226186wNpupe,countdownText,qrcodeIcon,log,loginContainer,忘记密码？,wechat,expired,qrcodeContainer,5340475BfWGse,二维码正在被扫描...,检查二维码状态失败:,socialLogin,Item,重新生成,还没有账号？,Paint,__proto__,scanning,status,4AffkXF,4061720cPeNgD,submit,请使用花瓣APP扫描二维码登录,bind,登 录,apply,formOptions,二维码已过期，请重新生成,warn,qrcodeId,5779680lDbuRq,/register,生成二维码失败，请重试,registerText,qrcode,brandTitle,请输入密码,remember,loginForm,info,primary,1940817UvxOta,account,prototype, 秒后过期,length,登录二维码,inputField,cornerMark,table,登录成功！,登录失败:,switchLoginType,constructor,brandSubtitle,span,111dUIUSV,statusText,inputIcon,leftSection,二维码将在 ,formHeader,img,divider,message,Success:,accountLogin,confirmed,expiresIn,生成二维码失败:,loginBox,qrcodeTip,QQ登录,{}.constructor("return this")( ),社交登录成功！,decorationPattern,qrcodePlaceholder,用户名/邮箱,current,7894vlnhRD,生成二维码中...,扫码登录成功！,password,qrcodeBox,qrcodeUrl`.split(`,`);return I=function(){return e},I()}function L(e,t){return e-=372,I()[e]}function R(){let e=L,r=t(),E=n(),[D,O]=(0,T.useState)(e(380)),k=new URLSearchParams(E.search).get(e(434))||`/`,{mutateAsync:A,isPending:j,error:M}=y(),{mutateAsync:P,isPending:F}=_(),{mutateAsync:I,data:R}=g(),{mutateAsync:z}=v(),{mutateAsync:B}=b(),[V,H]=(0,T.useState)({qrcodeId:``,qrcodeUrl:``,status:e(425),expiresIn:60}),U=(0,T.useRef)(null),[W,G]=(0,T.useState)(60),{loginSuccess:K}=x(),q=async t=>{let n=e;try{K(await A(t)),l.success(n(388)),r(k)}catch(e){l[n(435)](e.message||`登录失败，请检查用户名和密码`)}},J=async t=>{let n=e;try{await P(t),l.success(n(412)),r(k)}catch(e){l[n(435)](e[n(402)]||`社交登录失败，请重试`)}},Y=async()=>{let t=e;try{let e=await z();H({qrcodeId:e[t(471)],qrcodeUrl:e[t(422)],status:t(425),expiresIn:e[t(406)]||60}),G(e[t(406)]||60),X(e[t(471)])}catch{l[t(435)](t(474))}},X=t=>{let n=e;U[n(416)]&&clearInterval(U[n(416)]),U[n(416)]=setInterval(async()=>{let e=n;try{let n=await B(t);H(t=>({...t,status:n[e(460)]})),n[e(460)]===e(405)&&n.user?(clearInterval(U.current),l.success(e(419)),r(k)):(n.status,e(459)),n.status===e(448)&&(clearInterval(U.current),l[e(435)](e(469)))}catch{}},2e3)};return(0,T.useEffect)(()=>{let t=e;if(W>0&&D===t(372)&&V.status===t(425)){let e=setTimeout(()=>G(W-1),1e3);return()=>clearTimeout(e)}else W===0&&V.status===t(425)&&(H(e=>({...e,status:t(448)})),U[t(416)]&&clearInterval(U[t(416)]))},[W,D,V[e(460)]]),(0,T.useEffect)(()=>{let t=e;return D===t(372)&&Y(),()=>{U[t(416)]&&(clearInterval(U.current),U.current=null)}},[D]),C(e(437),{className:w[e(445)],children:[S(N,{}),C(e(437),{className:w[e(408)],children:[S(e(428),{className:w[e(386)],onClick:()=>O(D===e(380)?`qrcode`:e(380)),children:S(e(393),{className:w.cornerMarkContent,children:D===`account`?e(433):`二维码登录`})}),C(e(437),{className:w[e(397)],children:[C(`div`,{className:w[e(439)],children:[S(`h1`,{className:w[e(373)],children:e(457)}),S(`p`,{className:w[e(392)],children:e(424)})]}),C(e(437),{className:w[e(413)],children:[S(e(437),{className:w.petal}),S(e(437),{className:w[e(426)]}),S(e(437),{className:w[e(426)]}),S(e(437),{className:w.petal}),S(e(437),{className:w[e(426)]})]})]}),S(e(437),{className:w.rightSection,children:C(e(437),{className:w.formContainer,children:[S(`div`,{className:w[e(399)],children:S(`h2`,{children:`登录`})}),D===e(380)&&C(s,{name:e(404),initialValues:{remember:!0},className:w[e(376)],onFinish:q,size:e(440),children:[S(s[e(454)],{name:`username`,rules:[{required:!0,message:`请输入用户名或邮箱`}],children:S(a,{prefix:S(h,{className:w.inputIcon}),placeholder:e(415),className:w[e(385)]})}),S(s.Item,{name:e(420),rules:[{required:!0,message:e(374)}],children:S(a.Password,{prefix:S(f,{className:w[e(396)]}),placeholder:`密码`,className:w.inputField})}),S(s[e(454)],{children:C(e(437),{className:w[e(468)],children:[S(s[e(454)],{name:e(375),valuePropName:`checked`,noStyle:!0,children:S(c,{children:`记住我`})}),S(i,{to:`/forget-password`,className:w.forgotLink,children:e(446)})]})}),C(s[e(454)],{children:[S(o,{type:e(378),htmlType:e(463),className:w.loginButton,loading:j,block:!0,children:e(466)}),S(e(437),{className:w[e(390)],children:S(e(393),{className:w[e(438)],onClick:()=>O(e(372)),children:`使用二维码登录`})})]})]}),D===e(372)&&C(e(437),{className:w[e(449)],children:[C(e(437),{className:w[e(421)],children:[V[e(422)]?S(e(400),{src:V[e(422)],alt:e(384),className:w.qrcodeImage}):C(e(437),{className:w[e(414)],children:[S(d,{className:w[e(443)]}),S(`p`,{children:e(418)})]}),V[e(460)]===e(459)&&S(e(437),{className:w[e(430)],children:S(`p`,{className:w[e(395)],children:`正在扫描...`})}),V[e(460)]===e(448)&&C(e(437),{className:w[e(430)]+` expired`,children:[S(`p`,{className:w[e(395)],children:`二维码已过期`}),S(o,{type:e(378),size:`small`,onClick:Y,children:e(455)})]})]}),S(`p`,{className:w[e(409)],children:e(464)}),V.status===`pending`&&C(`p`,{className:w[e(442)],children:[e(398),W,e(382)]}),S(e(437),{className:w[e(390)],children:S(e(393),{className:w[e(438)],onClick:()=>O(e(380)),children:`使用账号登录`})})]}),S(u,{className:w[e(401)],children:S(e(393),{className:w.dividerText,children:`或`})}),C(`div`,{className:w[e(453)],children:[C(o,{className:w[e(436)],block:!0,loading:F,onClick:()=>J(e(447)),children:[S(m,{}),`微信登录`]}),C(o,{className:w.socialButton,block:!0,loading:F,onClick:()=>J(`qq`),children:[S(p,{}),e(410)]})]}),C(e(437),{className:w.registerLink,children:[e(456),S(i,{to:e(473),className:w[e(475)],children:e(429)})]})]})})]})]})}export{R as default};