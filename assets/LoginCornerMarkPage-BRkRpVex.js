import{a as e}from"./rolldown-runtime-BHggaoP9.js";import{D as t,E as n,M as r,y as i}from"./react-vendor-D-wEKAWK.js";import{D as a,I as o,R as s,T as c,U as l,b as u}from"./antd-BZ8YbdFq.js";import{E as d,I as f,T as p,c as m,s as h}from"./antd-style-CMV1lGoZ.js";import{l as g,n as _,r as v,t as y}from"./index-CGxSQunX.js";import{a as b,c as ee,i as x,l as S,o as C,s as w,u as T}from"./hooks-AIwRH4Y1.js";import"./services-CiwF4D1U.js";var E={loginContainer:`_loginContainer_1brsp_1`,particleCanvas:`_particleCanvas_1brsp_27`,shaderCanvas:`_shaderCanvas_1brsp_49`,loginBox:`_loginBox_1brsp_69`,fadeInUp:`_fadeInUp_1brsp_1`,leftSection:`_leftSection_1brsp_123`,brandInfo:`_brandInfo_1brsp_143`,slideInLeft:`_slideInLeft_1brsp_1`,brandTitle:`_brandTitle_1brsp_183`,brandSubtitle:`_brandSubtitle_1brsp_199`,decorationPattern:`_decorationPattern_1brsp_215`,rotate:`_rotate_1brsp_1`,petal:`_petal_1brsp_257`,rightSection:`_rightSection_1brsp_317`,formContainer:`_formContainer_1brsp_335`,slideInRight:`_slideInRight_1brsp_1`,cornerMark:`_cornerMark_1brsp_375`,cornerMarkContent:`_cornerMarkContent_1brsp_417`,switchLoginType:`_switchLoginType_1brsp_435`,switchLink:`_switchLink_1brsp_445`,formHeader:`_formHeader_1brsp_477`,qrcodeContainer:`_qrcodeContainer_1brsp_513`,qrcodeBox:`_qrcodeBox_1brsp_527`,qrcodePlaceholder:`_qrcodePlaceholder_1brsp_561`,qrcodeIcon:`_qrcodeIcon_1brsp_571`,qrcodeTip:`_qrcodeTip_1brsp_593`,loginForm:`_loginForm_1brsp_609`,inputField:`_inputField_1brsp_617`,inputIcon:`_inputIcon_1brsp_649`,formOptions:`_formOptions_1brsp_657`,forgotLink:`_forgotLink_1brsp_671`,loginButton:`_loginButton_1brsp_695`,divider:`_divider_1brsp_727`,dividerText:`_dividerText_1brsp_737`,socialLogin:`_socialLogin_1brsp_751`,socialButton:`_socialButton_1brsp_765`,registerLink:`_registerLink_1brsp_797`,registerText:`_registerText_1brsp_809`,cornerMarkSwitcher:`_cornerMarkSwitcher_1brsp_885`,cornerButton:`_cornerButton_1brsp_899`,active:`_active_1brsp_919`},D=e(r(),1),O={shaderCanvas:`_shaderCanvas_1jvai_1`},k=M;(function(e,t){let n=M,r=e();for(;;)try{if(-parseInt(n(325))/1*(-parseInt(n(314))/2)+parseInt(n(329))/3*(-parseInt(n(336))/4)+-parseInt(n(306))/5+parseInt(n(275))/6*(-parseInt(n(295))/7)+-parseInt(n(307))/8*(parseInt(n(327))/9)+parseInt(n(330))/10*(parseInt(n(300))/11)+parseInt(n(292))/12===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(j,400121);var A=function(){let e=!0;return function(t,n){let r=e?function(){let e=M;if(n){let r=n[e(285)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();A(void 0,function(){let e=M,t=function(){let e=M,t;try{t=Function(e(278)+e(333)+`);`)()}catch{t=window}return t}(),n=t[e(324)]=t[e(324)]||{},r=[e(286),e(344),e(281),`error`,e(282),e(303),`trace`];for(let t=0;t<r[e(294)];t++){let i=A[e(331)].prototype.bind(A),a=r[t],o=n[a]||i;i[e(298)]=A[e(320)](A),i[e(302)]=o[e(302)][e(320)](o),n[a]=i}})();function j(){let e=[`
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
`,`u_color2`,`36584rVstlo`,`error`,`WebGL not supported`,`shaderSource`,`bufferData`,`uniform2f`,`TRIANGLE_STRIP`,`LINK_STATUS`,`warn`,`ARRAY_BUFFER`,`linkProgram`,`getShaderInfoLog`,`a_position`,`2441454WXVSnn`,`useProgram`,`u_color3`,`return (function() `,`shaderCanvas`,`deleteProgram`,`info`,`exception`,`bindBuffer`,`WebGL error in animation loop:`,`apply`,`log`,`Shader compilation error:`,`Program linking error:`,`STATIC_DRAW`,`attachShader`,`getProgramParameter`,`9916380KbKwjo`,`resize`,`length`,`7cYGSyO`,`createProgram`,`enableVertexAttribArray`,`__proto__`,`now`,`11SIkoAB`,`
  attribute vec2 a_position;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,`toString`,`table`,`innerWidth`,`webgl`,`2821350iARHsA`,`1722472JKcGzn`,`addEventListener`,`width`,`compileShader`,`current`,`deleteShader`,`deleteBuffer`,`648254VUOlzz`,`height`,`VERTEX_SHADER`,`getShaderParameter`,`createBuffer`,`u_time`,`bind`,`getUniformLocation`,`removeEventListener`,`vertexAttribPointer`,`console`,`2hPtymL`,`FLOAT`,`9XafTJd`,`getAttribLocation`,`114McfXaL`,`4595380FagAUV`,`constructor`,`uniform3f`,`{}.constructor("return this")( )`];return j=function(){return e},j()}function M(e,t){return e-=274,j()[e]}var N=k(301),P=k(334),F=({className:e=``})=>{let t=k,n=(0,D.useRef)(null);return(0,D.useEffect)(()=>{let e=M,t=n[e(311)];if(!t)return;let r=t.getContext(e(305));if(!r)return;let i=()=>{let n=e;t[n(309)]=window[n(304)],t[n(315)]=window.innerHeight,r.viewport(0,0,t[n(309)],t[n(315)])};i(),window[e(308)](e(293),i);let a=(t,n)=>{let i=e,a=r.createShader(t);return a?(r[i(339)](a,n),r[i(310)](a),r[i(317)](a,r.COMPILE_STATUS)?a:(r[i(312)](a),null)):null},o=a(r[e(316)],N),s=a(r.FRAGMENT_SHADER,P);if(!o||!s)return;let c=r[e(296)]();if(!c||(r[e(290)](c,o),r[e(290)](c,s),r[e(346)](c),!r[e(291)](c,r[e(343)])))return;r[e(276)](c);let l=[-1,-1,1,-1,-1,1,1,1],u=r[e(318)]();if(!u)return;r[e(283)](r[e(345)],u),r[e(340)](r[e(345)],new Float32Array(l),r[e(289)]);let d=r[e(328)](c,e(274));if(d===-1)return;r[e(297)](d),r[e(323)](d,2,r[e(326)],!1,0,0);let f=r[e(321)](c,e(319)),p=r[e(321)](c,`u_resolution`),m=r[e(321)](c,`u_color1`),h=r[e(321)](c,e(335)),g=r[e(321)](c,e(277));if(!f||!p||!m||!h||!g)return;r.uniform3f(m,.35,.55,1),r[e(332)](h,1,.45,.85),r[e(332)](g,.45,1,.9);let _=Date.now(),v,y=!0,b=()=>{let n=e;if(!y)return;let i=(Date[n(299)]()-_)/1e3;try{r.useProgram(c),r.uniform1f(f,i),r[n(341)](p,t[n(309)],t[n(315)]),r.drawArrays(r[n(342)],0,4)}catch{}v=requestAnimationFrame(b)};return b(),()=>{let t=e;y=!1,cancelAnimationFrame(v),window[t(322)](t(293),i),r[t(280)](c),r[t(312)](o),r[t(312)](s),r[t(313)](u)}},[]),_(`canvas`,{ref:n,className:O[t(279)]+` `+e})};(function(e,t){let n=R,r=e();for(;;)try{if(parseInt(n(542))/1*(-parseInt(n(566))/2)+-parseInt(n(621))/3+parseInt(n(613))/4*(parseInt(n(511))/5)+-parseInt(n(502))/6*(-parseInt(n(640))/7)+-parseInt(n(578))/8*(-parseInt(n(522))/9)+parseInt(n(533))/10*(-parseInt(n(590))/11)+parseInt(n(563))/12===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(z,529221);var I=function(){let e=!0;return function(t,n){let r=e?function(){let e=R;if(n){let r=n[e(523)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}(),L=I(void 0,function(){let e=R,t=function(){let e=R,t;try{t=Function(`return (function() `+e(518)+`);`)()}catch{t=window}return t}(),n=t[e(525)]=t[e(525)]||{},r=[`log`,e(529),e(592),e(497),e(596),`table`,e(609)];for(let t=0;t<r.length;t++){let i=I[e(581)][e(532)][e(550)](I),a=r[t],o=n[a]||i;i.__proto__=I[e(550)](I),i[e(545)]=o[e(545)][e(550)](o),n[a]=i}});function R(e,t){return e-=496,z()[e]}L();function z(){let e=[`large`,`注 册`,`90NEFOYO`,`注册失败，请稍后重试`,`密码的长度最小为6,最大为16`,`confirmed`,`检查二维码状态失败:`,`password`,`socialButton`,`span`,`pointer`,`35fLdpPl`,`qrcodeStatus`,`loginContainer`,`登录失败:`,`brandInfo`,`qrcodePlaceholder`,`confirmPassword`,`{}.constructor("return this")( )`,`log`,`petal`,`qrcodeIcon`,`9dvgySN`,`apply`,`立即注册`,`console`,`pathname`,`返回登录`,`loginBox`,`warn`,`social_token`,`userInfo`,`prototype`,`10uaBlsz`,`primary`,`location`,`decorationPattern`,`state`,`redirectTo`,`userToken`,`pending`,`请使用手机扫描二维码登录`,`9845UkWoRl`,`parse`,`loginForm`,`toString`,`login`,`登录二维码`,`statusText`,`Paint`,`bind`,`resolve`,`二维码已过期，请重新生成`,`/api/user/social/`,`stringify`,`token`,`button`,`正在扫描...`,`qrcode`,`enabled`,`用户名的长度最小为3,最大为16`,`divider`,`wechat`,`10650240IubPLE`,`登录暂未开放，请先在服务端配置`,`register`,`2bHeKth`,`div`,`登录成功！`,`cornerMark`,`二维码将在 `,`注册账号`,`forgotLink`,`get`,`brandSubtitle`,`social_user`,`Password`,`二维码正在被扫描...`,`1582392zFKonU`,`small`,`QQ登录`,`constructor`,`account`,`qrcodeUrl`,`registerText`,`catch`,`qrcodeContainer`,`请再次输入密码`,`两次输入的密码不一致`,`useForm`,`10795433AhnYAl`,`inputField`,`info`,`二维码已过期`,`登 录`,`请输入用户名或邮箱`,`exception`,`checked`,`social_error`,`scanning`,`账号登录`,`expiresIn`,`socialLogin`,`二维码登录`,`provider`,`switchLink`,`expired`,`发现灵感，创造美好`,`使用二维码登录`,`trace`,`success`,`生成二维码失败，请重试`,`登录成功:`,`182536NHsNxE`,`inputIcon`,`dividerText`,`search`,` expired`,`Success:`,`/authorize?redirectTo=`,`记住我`,`2501859rYjYNc`,`注册成功，请登录`,`确认密码`,`img`,`warning`,`current`,`使用账号登录`,`Item`,`微信登录`,`href`,`qrcodeImage`,`reject`,`user`,`code`,`status`,`忘记密码？`,`replaceState`,`switchLoginType`,`/forget-password`,`443177gQAjTM`,`请输入密码`,`qrcodeId`,`then`,`error`,`history`,`message`];return z=function(){return e},z()}function B(){let e=R,r=t(),O=n(),[k,A]=(0,D.useState)(e(582)),[j,M]=(0,D.useState)(e(546)),N=new URLSearchParams(O[e(616)])[e(573)](e(538))||`/`,{mutateAsync:P,isPending:I,error:L}=C(),{mutateAsync:z,isPending:B}=w(),{mutateAsync:V,isPending:H}=S(),{data:U}=T(),{mutateAsync:te}=b(),{mutateAsync:ne}=x(),{mutateAsync:re}=ee(),[W,G]=(0,D.useState)({qrcodeId:``,qrcodeUrl:``,status:`pending`,expiresIn:60}),K=(0,D.useRef)(null),[q,J]=(0,D.useState)(60),{loginSuccess:Y}=g(),[X]=a[e(589)](),Z=(0,D.useRef)(!1),ie=async t=>{let n=e;if(!Z[n(626)]){Z[n(626)]=!0;try{if(j===n(565)){try{await V({username:t.username,password:t[n(507)]}),u[n(610)](n(622)),X.setFieldsValue({password:void 0,confirmPassword:void 0}),M(n(546))}catch(e){u[n(497)](e[n(499)]||n(503))}return}try{let e=await P(t);Y(e),u[n(610)](n(568)),r(N)}catch(e){u[n(497)](e[n(499)]||`登录失败，请检查用户名和密码`)}}finally{Z[n(626)]=!1}}},Q=async t=>{let n=e;if(!U?.[t]?.[n(559)]){u[n(625)]((t===n(562)?`微信`:`QQ`)+n(564));return}let r=n(553)+t+n(619)+encodeURIComponent(N);window[n(535)][n(630)]=r};(0,D.useEffect)(()=>{let t=e,n=new URLSearchParams(window.location.search),i=n[t(573)](t(530)),a=n[t(573)](t(598)),o=n[t(573)](t(634)),s=n.get(t(537)),c=n[t(573)](t(604)),l=e=>{let i=t;localStorage.setItem(i(539),e[i(555)]),localStorage.setItem(i(531),JSON[i(554)](e)),Y(e),u.success(i(568)),r(n[i(573)](i(538))||N,{replace:!0})};if(i){let e={};try{e=JSON[t(543)](n[t(573)](t(575))||`{}`)}catch{}l({...e,token:i});return}if(a){u[t(497)](a),window[t(498)][t(637)]({},``,window[t(535)][t(526)]);return}o&&s&&c&&z({provider:c,code:o,state:s})[t(496)](e=>l(e))[t(585)](e=>{let n=t;u.error(e[n(499)]||`社交登录失败，请重试`),window[n(498)][n(637)]({},``,window[n(535)].pathname)})},[]);let $=async()=>{let t=e;try{let e=await te();G({qrcodeId:e[t(642)],qrcodeUrl:e[t(583)],status:`pending`,expiresIn:e[t(601)]||60}),J(e.expiresIn||60),ae(e[t(642)])}catch{u[t(497)](t(611))}},ae=t=>{let n=e;K[n(626)]&&clearInterval(K[n(626)]),K[n(626)]=setInterval(async()=>{let e=n;try{let n=await ne(t);G(t=>({...t,status:n[e(635)]})),n[e(635)]===e(505)&&n[e(633)]?(clearInterval(K[e(626)]),K[e(626)]=null,Y(n[e(633)]),u[e(610)](`扫码登录成功！`),r(N,{replace:!0})):n.status,n[e(635)]===`expired`&&(clearInterval(K[e(626)]),u[e(497)](e(552)))}catch{}},2e3)};return(0,D.useEffect)(()=>{let t=e;if(q>0&&k===t(558)&&W[t(635)]===t(540)){let e=setTimeout(()=>J(q-1),1e3);return()=>clearTimeout(e)}q===0&&W.status===`pending`&&(G(e=>({...e,status:t(606)})),K[t(626)]&&clearInterval(K[t(626)]))},[q,k,W[e(635)]]),(0,D.useEffect)(()=>{let t=e;return k===t(558)&&$(),()=>{let e=t;K[e(626)]&&(clearInterval(K[e(626)]),K.current=null)}},[k]),v(e(567),{className:E[e(513)],children:[_(F,{}),v(e(567),{className:E[e(528)],children:[_(e(556),{className:E[e(569)],onClick:()=>A(k===e(582)?`qrcode`:e(582)),children:_(`span`,{className:E.cornerMarkContent,children:k===e(582)?e(600):e(603)})}),v(e(567),{className:E.leftSection,children:[v(`div`,{className:E[e(515)],children:[_(`h1`,{className:E.brandTitle,children:e(549)}),_(`p`,{className:E[e(574)],children:e(607)})]}),v(e(567),{className:E[e(536)],children:[_(e(567),{className:E[e(520)]}),_(e(567),{className:E[e(520)]}),_(`div`,{className:E[e(520)]}),_(e(567),{className:E.petal}),_(e(567),{className:E.petal})]})]}),_(e(567),{className:E.rightSection,children:v(e(567),{className:E.formContainer,children:[_(`div`,{className:E.formHeader,children:_(`h2`,{children:j===`register`?`注册`:`登录`})}),k===`account`&&v(a,{form:X,name:`accountLogin`,initialValues:{remember:!0},className:E[e(544)],onFinish:ie,size:e(500),children:[_(a.Item,{name:`username`,rules:[{required:!0,message:e(595)},...j===e(565)?[{min:3,max:16,message:e(560)}]:[]],children:_(c,{prefix:_(m,{className:E[e(614)]}),placeholder:`用户名/邮箱`,className:E[e(591)]})}),_(a[e(628)],{name:e(507),rules:[{required:!0,message:e(641)},...j===e(565)?[{min:6,max:16,message:e(504)}]:[]],children:_(c[e(576)],{prefix:_(f,{className:E[e(614)]}),placeholder:`密码`,className:E[e(591)]})}),j===e(565)&&_(a[e(628)],{name:e(517),dependencies:[e(507)],rules:[{required:!0,message:e(587)},({getFieldValue:t})=>({validator(n,r){let i=e;return!r||t(i(507))===r?Promise[i(551)]():Promise[i(632)](Error(i(588)))}})],children:_(c[e(576)],{prefix:_(f,{className:E.inputIcon}),placeholder:e(623),className:E[e(591)]})}),j===e(546)&&_(a.Item,{children:v(e(567),{className:E.formOptions,children:[_(a[e(628)],{name:`remember`,valuePropName:e(597),noStyle:!0,children:_(s,{children:e(620)})}),_(i,{to:e(639),className:E[e(572)],children:e(636)})]})}),v(a[e(628)],{children:[_(l,{type:e(534),htmlType:`submit`,className:E.loginButton,loading:j===e(565)?H:I,block:!0,children:j===e(565)?e(501):e(594)}),v(e(567),{className:E[e(638)],children:[_(e(509),{className:E[e(605)],onClick:()=>M(j===e(565)?`login`:`register`),children:j===e(565)?``:e(571)}),j===e(546)&&_(`span`,{className:E.switchLink,style:{marginLeft:12},onClick:()=>A(e(558)),children:e(608)})]})]})]}),k===e(558)&&v(e(567),{className:E[e(586)],children:[v(e(567),{className:E.qrcodeBox,children:[W[e(583)]?_(e(624),{src:W[e(583)],alt:e(547),className:E[e(631)]}):v(e(567),{className:E[e(516)],children:[_(p,{className:E[e(521)]}),_(`p`,{children:`生成二维码中...`})]}),W[e(635)]===e(599)&&_(e(567),{className:E[e(512)],children:_(`p`,{className:E[e(548)],children:e(557)})}),W[e(635)]===e(606)&&v(e(567),{className:E.qrcodeStatus+e(617),children:[_(`p`,{className:E[e(548)],children:e(593)}),_(l,{type:`primary`,size:`small`,onClick:$,children:`重新生成`})]})]}),_(`p`,{className:E.qrcodeTip,children:e(541)}),W.status===`pending`&&v(`p`,{className:E.countdownText,children:[e(570),q,` 秒后过期`]}),W[e(635)]===`pending`&&_(l,{size:e(579),type:`link`,onClick:()=>re(W[e(642)]).catch(()=>{}),children:`模拟扫码（演示）`}),_(e(567),{className:E[e(638)],children:_(e(509),{className:E[e(605)],onClick:()=>A(e(582)),children:e(627)})})]}),j===e(546)&&v(y,{children:[_(o,{className:E[e(561)],children:_(`span`,{className:E[e(615)],children:`或`})}),v(`div`,{className:E[e(602)],children:[v(l,{className:E.socialButton,block:!0,loading:B,onClick:()=>Q(e(562)),children:[_(h,{}),e(629)]}),v(l,{className:E[e(508)],block:!0,loading:B,onClick:()=>Q(`qq`),children:[_(d,{}),e(580)]})]})]}),v(e(567),{className:E.registerLink,children:[j===`register`?`已有账号？`:`还没有账号？`,_(`span`,{className:E[e(584)],style:{cursor:e(510)},onClick:()=>{let t=e;M(j===t(565)?`login`:t(565)),A(t(582))},children:e(j===`register`?527:524)})]})]})})]})]})}export{B as default};