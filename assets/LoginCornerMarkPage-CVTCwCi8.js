import{a as e}from"./rolldown-runtime-C6p345hp.js";import{D as t,E as n,M as r,y as i}from"./react-vendor-BCLM1S4H.js";import{D as a,I as o,R as s,T as c,U as l,b as u}from"./antd-BPSS73pX.js";import{F as d,T as f,c as p,s as m,w as h}from"./antd-style-Cp6iYq2_.js";import{l as g,n as _,r as v,t as y}from"./index-Dd2R4xDr.js";import{a as b,c as x,i as S,l as C,o as w,s as T,u as ee}from"./hooks-DFQ8l90k.js";import"./services-DrgIhuZk.js";var E={loginContainer:`_loginContainer_1brsp_1`,particleCanvas:`_particleCanvas_1brsp_27`,shaderCanvas:`_shaderCanvas_1brsp_49`,loginBox:`_loginBox_1brsp_69`,fadeInUp:`_fadeInUp_1brsp_1`,leftSection:`_leftSection_1brsp_123`,brandInfo:`_brandInfo_1brsp_143`,slideInLeft:`_slideInLeft_1brsp_1`,brandTitle:`_brandTitle_1brsp_183`,brandSubtitle:`_brandSubtitle_1brsp_199`,decorationPattern:`_decorationPattern_1brsp_215`,rotate:`_rotate_1brsp_1`,petal:`_petal_1brsp_257`,rightSection:`_rightSection_1brsp_317`,formContainer:`_formContainer_1brsp_335`,slideInRight:`_slideInRight_1brsp_1`,cornerMark:`_cornerMark_1brsp_375`,cornerMarkContent:`_cornerMarkContent_1brsp_417`,switchLoginType:`_switchLoginType_1brsp_435`,switchLink:`_switchLink_1brsp_445`,formHeader:`_formHeader_1brsp_477`,qrcodeContainer:`_qrcodeContainer_1brsp_513`,qrcodeBox:`_qrcodeBox_1brsp_527`,qrcodePlaceholder:`_qrcodePlaceholder_1brsp_561`,qrcodeIcon:`_qrcodeIcon_1brsp_571`,qrcodeTip:`_qrcodeTip_1brsp_593`,loginForm:`_loginForm_1brsp_609`,inputField:`_inputField_1brsp_617`,inputIcon:`_inputIcon_1brsp_649`,formOptions:`_formOptions_1brsp_657`,forgotLink:`_forgotLink_1brsp_671`,loginButton:`_loginButton_1brsp_695`,divider:`_divider_1brsp_727`,dividerText:`_dividerText_1brsp_737`,socialLogin:`_socialLogin_1brsp_751`,socialButton:`_socialButton_1brsp_765`,registerLink:`_registerLink_1brsp_797`,registerText:`_registerText_1brsp_809`,cornerMarkSwitcher:`_cornerMarkSwitcher_1brsp_885`,cornerButton:`_cornerButton_1brsp_899`,active:`_active_1brsp_919`},D=e(r(),1),O={shaderCanvas:`_shaderCanvas_1jvai_1`};function k(){let e=[`FRAGMENT_SHADER`,`u_time`,`uniform3f`,`linkProgram`,`ARRAY_BUFFER`,`a_position`,`534620OBJrJJ`,`STATIC_DRAW`,`3oXrjbF`,`bind`,`70128iAXeFu`,`canvas`,`uniform2f`,`toString`,`getShaderParameter`,`constructor`,`21gXszTT`,`Program linking error:`,`
  attribute vec2 a_position;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,`shaderCanvas`,`67272xMYiir`,`height`,`getShaderInfoLog`,`useProgram`,`
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
`,`501782EMmEGh`,`info`,`119864PtXAkI`,`trace`,`deleteShader`,`console`,`LINK_STATUS`,`exception`,`11SStdqI`,`drawArrays`,`attachShader`,`return (function() `,`resize`,`u_color1`,`shaderSource`,`getProgramParameter`,`length`,`32Jfubrb`,`current`,`compileShader`,`bufferData`,`16915RrUcLV`,`deleteBuffer`,`addEventListener`,`apply`,`getContext`,`createBuffer`,`error`,`getUniformLocation`,`bindBuffer`,`table`,`warn`,`viewport`,`u_resolution`,`width`,`vertexAttribPointer`,`WebGL error in animation loop:`,`now`,`getAttribLocation`,`63SwvWPG`,`61422yHUEju`];return k=function(){return e},k()}var A=M;(function(e,t){let n=M,r=e();for(;;)try{if(parseInt(n(170))/1+parseInt(n(119))/2*(-parseInt(n(168))/3)+-parseInt(n(136))/4*(parseInt(n(140))/5)+-parseInt(n(159))/6+parseInt(n(176))/7*(parseInt(n(121))/8)+-parseInt(n(158))/9*(-parseInt(n(166))/10)+-parseInt(n(127))/11*(parseInt(n(180))/12)===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(k,195513);var j=function(){let e=!0;return function(t,n){let r=e?function(){let e=M;if(n){let r=n[e(143)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();j(void 0,function(){let e=M,t=function(){let e=M,t;try{t=Function(e(130)+`{}.constructor("return this")( ));`)()}catch{t=window}return t}(),n=t[e(124)]=t[e(124)]||{},r=[`log`,e(150),e(120),e(146),e(126),e(149),e(122)];for(let t=0;t<r[e(135)];t++){let i=j[e(175)].prototype.bind(j),a=r[t],o=n[a]||i;i.__proto__=j.bind(j),i[e(173)]=o.toString[e(169)](o),n[a]=i}})();function M(e,t){return e-=117,k()[e]}var N=A(178),P=A(118),F=({className:e=``})=>{let t=A,n=(0,D.useRef)(null);return(0,D.useEffect)(()=>{let e=M,t=n[e(137)];if(!t)return;let r=t[e(144)](`webgl`);if(!r)return;let i=()=>{let n=e;t[n(153)]=window.innerWidth,t[n(181)]=window.innerHeight,r[n(151)](0,0,t[n(153)],t[n(181)])};i(),window[e(142)](e(131),i);let a=(t,n)=>{let i=e,a=r.createShader(t);return a?(r[i(133)](a,n),r[i(138)](a),r[i(174)](a,r.COMPILE_STATUS)?a:(r[i(123)](a),null)):null},o=a(r.VERTEX_SHADER,N),s=a(r[e(160)],P);if(!o||!s)return;let c=r.createProgram();if(!c||(r[e(129)](c,o),r[e(129)](c,s),r[e(163)](c),!r[e(134)](c,r[e(125)])))return;r[e(117)](c);let l=[-1,-1,1,-1,-1,1,1,1],u=r[e(145)]();if(!u)return;r[e(148)](r[e(164)],u),r[e(139)](r[e(164)],new Float32Array(l),r[e(167)]);let d=r[e(157)](c,e(165));if(d===-1)return;r.enableVertexAttribArray(d),r[e(154)](d,2,r.FLOAT,!1,0,0);let f=r.getUniformLocation(c,e(161)),p=r.getUniformLocation(c,e(152)),m=r.getUniformLocation(c,e(132)),h=r[e(147)](c,`u_color2`),g=r.getUniformLocation(c,`u_color3`);if(!f||!p||!m||!h||!g)return;r[e(162)](m,.35,.55,1),r[e(162)](h,1,.45,.85),r[e(162)](g,.45,1,.9);let _=Date[e(156)](),v,y=!0,b=()=>{let n=e;if(!y)return;let i=(Date[n(156)]()-_)/1e3;try{r[n(117)](c),r.uniform1f(f,i),r[n(172)](p,t[n(153)],t[n(181)]),r[n(128)](r.TRIANGLE_STRIP,0,4)}catch{}v=requestAnimationFrame(b)};return b(),()=>{let t=e;y=!1,cancelAnimationFrame(v),window.removeEventListener(t(131),i),r.deleteProgram(c),r[t(123)](o),r[t(123)](s),r[t(141)](u)}},[]),_(t(171),{ref:n,className:O[t(179)]+` `+e})};(function(e,t){let n=R,r=e();for(;;)try{if(-parseInt(n(436))/1*(-parseInt(n(440))/2)+parseInt(n(398))/3*(-parseInt(n(402))/4)+-parseInt(n(382))/5*(-parseInt(n(459))/6)+-parseInt(n(480))/7+-parseInt(n(387))/8+parseInt(n(413))/9*(parseInt(n(499))/10)+parseInt(n(483))/11*(-parseInt(n(368))/12)===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(z,619682);var I=function(){let e=!0;return function(t,n){let r=e?function(){let e=R;if(n){let r=n[e(361)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}(),L=I(void 0,function(){let e=R,t;try{t=Function(e(408)+e(423)+`);`)()}catch{t=window}let n=t[e(463)]=t[e(463)]||{},r=[`log`,e(489),e(409),e(470),e(435),e(379),`trace`];for(let t=0;t<r[e(414)];t++){let i=I[e(422)][e(462)][e(446)](I),a=r[t],o=n[a]||i;i[e(500)]=I[e(446)](I),i[e(417)]=o[e(417)][e(446)](o),n[a]=i}});function R(e,t){return e-=358,z()[e]}L();function z(){let e=[`brandInfo`,`发现灵感，创造美好`,`qrcodePlaceholder`,`/authorize?redirectTo=`,`apply`,`resolve`,`div`,`catch`,`location`,`password`,`请输入用户名或邮箱`,`12uGguXV`,`username`,`petal`,`search`,`inputIcon`,`扫码登录成功！`,`wechat`,`small`,`两次输入的密码不一致`,`注 册`,`state`,`table`,`user`,`已有账号？`,`852135QUmjyL`,`qrcodeTip`,`使用二维码登录`,`立即注册`,`注册失败，请稍后重试`,`581688QDGuiV`,`qrcodeId`,`social_user`,`formOptions`,`formHeader`,`log`,`Paint`,`inputField`,`code`,`登录二维码`,`Password`,`375OryjqX`,`qrcodeBox`,`检查二维码状态失败:`,`registerLink`,`25132bZeTQs`,`replaceState`,`leftSection`,`请输入密码`,`scanning`,`二维码登录`,`return (function() `,`info`,`message`,`社交登录失败，请重试`,`用户名/邮箱`,`270faNphA`,`length`,`socialButton`,`登录暂未开放，请先在服务端配置`,`toString`,`loginBox`,`expired`,`stringify`,`switchLink`,`constructor`,`{}.constructor("return this")( )`,`expiresIn`,`Item`,`status`,`large`,`success`,`primary`,`pathname`,`生成二维码失败:`,`loginForm`,`登录失败:`,`qrcodeContainer`,`exception`,`171246HHhfNF`,`登 录`,`divider`,`social_token`,`12pOHmng`,`QQ登录`,`account`,`confirmed`,`返回登录`,`qrcode`,`bind`,`二维码正在被扫描...`,`setItem`,`current`,`用户名的长度最小为3,最大为16`,`/forget-password`,`生成二维码失败，请重试`,`重新生成`,`rightSection`,`dividerText`,`userInfo`,`pointer`,`get`,`18MUTysE`,`switchLoginType`,`login`,`prototype`,`console`,`正在扫描...`,`微信登录`,`记住我`,`parse`,` expired`,`span`,`error`,`注册成功，请登录`,`redirectTo`,`cornerMark`,`qrcodeIcon`,`还没有账号？`,`密码的长度最小为6,最大为16`,`qrcodeUrl`,`register`,`registerText`,`1643950oHMOdL`,`socialLogin`,`then`,`8024159zlnRQf`,`history`,`brandSubtitle`,`qrcodeStatus`,`生成二维码中...`,`button`,`warn`,`二维码已过期`,`账号登录`,`请再次输入密码`,`reject`,`formContainer`,`qrcodeImage`,`/api/user/social/`,`enabled`,`登录成功！`,`301110bwYJzd`,`__proto__`,`decorationPattern`,`pending`,`Success:`];return z=function(){return e},z()}function B(){let e=R,r=t(),O=n(),[k,A]=(0,D.useState)(e(442)),[j,M]=(0,D.useState)(e(461)),N=new URLSearchParams(O[e(371)]).get(e(472))||`/`,{mutateAsync:P,isPending:I,error:L}=w(),{mutateAsync:z,isPending:B}=T(),{mutateAsync:V,isPending:H}=C(),{data:U}=ee(),{mutateAsync:te}=b(),{mutateAsync:ne}=S(),{mutateAsync:re}=x(),[W,G]=(0,D.useState)({qrcodeId:``,qrcodeUrl:``,status:e(502),expiresIn:60}),K=(0,D.useRef)(null),[q,J]=(0,D.useState)(60),{loginSuccess:Y}=g(),[X]=a.useForm(),Z=(0,D.useRef)(!1),ie=async t=>{let n=e;if(!Z[n(449)]){Z[n(449)]=!0;try{if(j===`register`){try{await V({username:t[n(369)],password:t[n(366)]}),u[n(428)](n(471)),X.setFieldsValue({password:void 0,confirmPassword:void 0}),M(n(461))}catch(e){u.error(e[n(410)]||n(386))}return}try{let e=await P(t);Y(e),u[n(428)](n(498)),r(N)}catch(e){u[n(470)](e[n(410)]||`登录失败，请检查用户名和密码`)}}finally{Z[n(449)]=!1}}},Q=async t=>{let n=e;if(!U?.[t]?.[n(497)]){u.warning((t===`wechat`?`微信`:`QQ`)+n(416));return}let r=n(496)+t+n(360)+encodeURIComponent(N);window[n(365)].href=r};(0,D.useEffect)(()=>{let t=e,n=new URLSearchParams(window.location[t(371)]),i=n[t(458)](t(439)),a=n[t(458)](`social_error`),o=n.get(t(395)),s=n[t(458)](t(378)),c=n[t(458)](`provider`),l=e=>{let i=t;localStorage[i(448)](`userToken`,e.token),localStorage[i(448)](i(456),JSON[i(420)](e)),Y(e),u.success(`登录成功！`),r(n.get(i(472))||N,{replace:!0})};if(i){let e={};try{e=JSON[t(467)](n[t(458)](t(389))||`{}`)}catch{}l({...e,token:i});return}if(a){u.error(a),window.history[t(403)]({},``,window[t(365)].pathname);return}o&&s&&c&&z({provider:c,code:o,state:s})[t(482)](e=>l(e))[t(364)](e=>{let n=t;u[n(470)](e[n(410)]||n(411)),window[n(484)][n(403)]({},``,window.location[n(430)])})},[]);let $=async()=>{let t=e;try{let e=await te();G({qrcodeId:e[t(388)],qrcodeUrl:e[t(477)],status:t(502),expiresIn:e[t(424)]||60}),J(e[t(424)]||60),ae(e[t(388)])}catch{u[t(470)](t(452))}},ae=t=>{let n=e;K.current&&clearInterval(K[n(449)]),K[n(449)]=setInterval(async()=>{let e=n;try{let n=await ne(t);G(t=>({...t,status:n[e(426)]})),n[e(426)]===e(443)&&n.user?(clearInterval(K[e(449)]),K[e(449)]=null,Y(n[e(380)]),u.success(e(373)),r(N,{replace:!0})):(n.status,e(406)),n[e(426)]===e(419)&&(clearInterval(K.current),u[e(470)](`二维码已过期，请重新生成`))}catch{}},2e3)};return(0,D.useEffect)(()=>{let t=e;if(q>0&&k===t(445)&&W[t(426)]===t(502)){let e=setTimeout(()=>J(q-1),1e3);return()=>clearTimeout(e)}q===0&&W[t(426)]===t(502)&&(G(e=>({...e,status:t(419)})),K.current&&clearInterval(K[t(449)]))},[q,k,W[e(426)]]),(0,D.useEffect)(()=>{let t=e;return k===t(445)&&$(),()=>{let e=t;K[e(449)]&&(clearInterval(K[e(449)]),K[e(449)]=null)}},[k]),v(e(363),{className:E.loginContainer,children:[_(F,{}),v(`div`,{className:E[e(418)],children:[_(e(488),{className:E[e(473)],onClick:()=>A(k===e(442)?e(445):e(442)),children:_(e(469),{className:E.cornerMarkContent,children:k===e(442)?e(491):e(407)})}),v(e(363),{className:E[e(404)],children:[v(e(363),{className:E[e(504)],children:[_(`h1`,{className:E.brandTitle,children:e(393)}),_(`p`,{className:E[e(485)],children:e(358)})]}),v(`div`,{className:E[e(501)],children:[_(e(363),{className:E[e(370)]}),_(e(363),{className:E[e(370)]}),_(e(363),{className:E[e(370)]}),_(`div`,{className:E[e(370)]}),_(e(363),{className:E[e(370)]})]})]}),_(e(363),{className:E[e(454)],children:v(e(363),{className:E[e(494)],children:[_(e(363),{className:E[e(391)],children:_(`h2`,{children:j===`register`?`注册`:`登录`})}),k===`account`&&v(a,{form:X,name:`accountLogin`,initialValues:{remember:!0},className:E[e(432)],onFinish:ie,size:e(427),children:[_(a[e(425)],{name:`username`,rules:[{required:!0,message:e(367)},...j===`register`?[{min:3,max:16,message:e(450)}]:[]],children:_(c,{prefix:_(p,{className:E[e(372)]}),placeholder:e(412),className:E[e(394)]})}),_(a[e(425)],{name:e(366),rules:[{required:!0,message:e(405)},...j===e(478)?[{min:6,max:16,message:e(476)}]:[]],children:_(c[e(397)],{prefix:_(d,{className:E[e(372)]}),placeholder:`密码`,className:E[e(394)]})}),j===e(478)&&_(a[e(425)],{name:`confirmPassword`,dependencies:[e(366)],rules:[{required:!0,message:e(492)},({getFieldValue:t})=>({validator(n,r){let i=e;return!r||t(i(366))===r?Promise[i(362)]():Promise[i(493)](Error(i(376)))}})],children:_(c.Password,{prefix:_(d,{className:E[e(372)]}),placeholder:`确认密码`,className:E.inputField})}),j===`login`&&_(a.Item,{children:v(e(363),{className:E[e(390)],children:[_(a[e(425)],{name:`remember`,valuePropName:`checked`,noStyle:!0,children:_(s,{children:e(466)})}),_(i,{to:e(451),className:E.forgotLink,children:`忘记密码？`})]})}),v(a.Item,{children:[_(l,{type:e(429),htmlType:`submit`,className:E.loginButton,loading:j===e(478)?H:I,block:!0,children:e(j===`register`?377:437)}),v(e(363),{className:E[e(460)],children:[_(e(469),{className:E[e(421)],onClick:()=>M(j===`register`?`login`:e(478)),children:j===e(478)?``:`注册账号`}),j===e(461)&&_(e(469),{className:E.switchLink,style:{marginLeft:12},onClick:()=>A(e(445)),children:e(384)})]})]})]}),k===e(445)&&v(e(363),{className:E[e(434)],children:[v(`div`,{className:E[e(399)],children:[W[e(477)]?_(`img`,{src:W[e(477)],alt:e(396),className:E[e(495)]}):v(e(363),{className:E[e(359)],children:[_(h,{className:E[e(474)]}),_(`p`,{children:e(487)})]}),W.status===e(406)&&_(e(363),{className:E[e(486)],children:_(`p`,{className:E.statusText,children:e(464)})}),W[e(426)]===`expired`&&v(e(363),{className:E.qrcodeStatus+e(468),children:[_(`p`,{className:E.statusText,children:e(490)}),_(l,{type:e(429),size:e(375),onClick:$,children:e(453)})]})]}),_(`p`,{className:E[e(383)],children:`请使用手机扫描二维码登录`}),W[e(426)]===e(502)&&v(`p`,{className:E.countdownText,children:[`二维码将在 `,q,` 秒后过期`]}),W[e(426)]===e(502)&&_(l,{size:e(375),type:`link`,onClick:()=>re(W.qrcodeId)[e(364)](()=>{}),children:`模拟扫码（演示）`}),_(`div`,{className:E[e(460)],children:_(`span`,{className:E[e(421)],onClick:()=>A(e(442)),children:`使用账号登录`})})]}),j===e(461)&&v(y,{children:[_(o,{className:E[e(438)],children:_(e(469),{className:E[e(455)],children:`或`})}),v(e(363),{className:E[e(481)],children:[v(l,{className:E.socialButton,block:!0,loading:B,onClick:()=>Q(e(374)),children:[_(m,{}),e(465)]}),v(l,{className:E[e(415)],block:!0,loading:B,onClick:()=>Q(`qq`),children:[_(f,{}),e(441)]})]})]}),v(e(363),{className:E[e(401)],children:[j===e(478)?e(381):e(475),_(e(469),{className:E[e(479)],style:{cursor:e(457)},onClick:()=>{let t=e;M(j===t(478)?t(461):t(478)),A(`account`)},children:j===e(478)?e(444):e(385)})]})]})})]})]})}export{B as default};