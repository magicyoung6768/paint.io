import{a as e}from"./rolldown-runtime-BegEFbQ0.js";import{D as t,E as n,M as r,y as i}from"./react-vendor-CMKxyh_P.js";import{D as a,I as o,R as s,T as c,U as l,b as u}from"./antd-DOZUXIYe.js";import{P as d,T as f,c as p,s as m,w as h}from"./antd-style-B0-ACxV5.js";import{l as g,n as _,r as v,t as y}from"./index-DcYn7Sqq.js";import{a as b,c as x,i as S,l as C,o as w,s as T,u as ee}from"./hooks-Di4XSUM0.js";import"./services-CJ1m8VNc.js";var E={loginContainer:`_loginContainer_1brsp_1`,particleCanvas:`_particleCanvas_1brsp_27`,shaderCanvas:`_shaderCanvas_1brsp_49`,loginBox:`_loginBox_1brsp_69`,fadeInUp:`_fadeInUp_1brsp_1`,leftSection:`_leftSection_1brsp_123`,brandInfo:`_brandInfo_1brsp_143`,slideInLeft:`_slideInLeft_1brsp_1`,brandTitle:`_brandTitle_1brsp_183`,brandSubtitle:`_brandSubtitle_1brsp_199`,decorationPattern:`_decorationPattern_1brsp_215`,rotate:`_rotate_1brsp_1`,petal:`_petal_1brsp_257`,rightSection:`_rightSection_1brsp_317`,formContainer:`_formContainer_1brsp_335`,slideInRight:`_slideInRight_1brsp_1`,cornerMark:`_cornerMark_1brsp_375`,cornerMarkContent:`_cornerMarkContent_1brsp_417`,switchLoginType:`_switchLoginType_1brsp_435`,switchLink:`_switchLink_1brsp_445`,formHeader:`_formHeader_1brsp_477`,qrcodeContainer:`_qrcodeContainer_1brsp_513`,qrcodeBox:`_qrcodeBox_1brsp_527`,qrcodePlaceholder:`_qrcodePlaceholder_1brsp_561`,qrcodeIcon:`_qrcodeIcon_1brsp_571`,qrcodeTip:`_qrcodeTip_1brsp_593`,loginForm:`_loginForm_1brsp_609`,inputField:`_inputField_1brsp_617`,inputIcon:`_inputIcon_1brsp_649`,formOptions:`_formOptions_1brsp_657`,forgotLink:`_forgotLink_1brsp_671`,loginButton:`_loginButton_1brsp_695`,divider:`_divider_1brsp_727`,dividerText:`_dividerText_1brsp_737`,socialLogin:`_socialLogin_1brsp_751`,socialButton:`_socialButton_1brsp_765`,registerLink:`_registerLink_1brsp_797`,registerText:`_registerText_1brsp_809`,cornerMarkSwitcher:`_cornerMarkSwitcher_1brsp_885`,cornerButton:`_cornerButton_1brsp_899`,active:`_active_1brsp_919`},D=e(r(),1),O={shaderCanvas:`_shaderCanvas_1jvai_1`};function k(e,t){return e-=336,N()[e]}var A=k;(function(e,t){let n=k,r=e();for(;;)try{if(parseInt(n(391))/1*(parseInt(n(355))/2)+-parseInt(n(387))/3*(-parseInt(n(386))/4)+-parseInt(n(376))/5+-parseInt(n(406))/6*(-parseInt(n(352))/7)+-parseInt(n(379))/8*(-parseInt(n(388))/9)+parseInt(n(392))/10+parseInt(n(354))/11*(-parseInt(n(399))/12)===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(N,217574);var j=function(){let e=!0;return function(t,n){let r=e?function(){let e=k;if(n){let r=n[e(393)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}(),M=j(void 0,function(){let e=k,t=function(){let e=k,t;try{t=Function(e(351)+e(385)+`);`)()}catch{t=window}return t}(),n=t[e(398)]=t[e(398)]||{},r=[e(394),`warn`,e(367),e(348),e(338),e(342),e(371)];for(let t=0;t<r[e(373)];t++){let i=j[e(336)].prototype[e(359)](j),a=r[t],o=n[a]||i;i.__proto__=j[e(359)](j),i[e(395)]=o[e(395)][e(359)](o),n[a]=i}});function N(){let e=[`1670jMhZKl`,`getProgramInfoLog`,`
  attribute vec2 a_position;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,`removeEventListener`,`bind`,`
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
`,`u_color3`,`COMPILE_STATUS`,`createBuffer`,`uniform3f`,`attachShader`,`deleteShader`,`info`,`enableVertexAttribArray`,`webgl`,`WebGL error in animation loop:`,`trace`,`compileShader`,`length`,`WebGL not supported`,`width`,`328895Stlmwt`,`height`,`bindBuffer`,`8xpUflm`,`u_color2`,`innerHeight`,`deleteBuffer`,`uniform1f`,`uniform2f`,`{}.constructor("return this")( )`,`20qzkHdP`,`94893HXkEeG`,`2837547txltce`,`addEventListener`,`createShader`,`420zMzrWy`,`1013630RqWrMb`,`apply`,`log`,`toString`,`current`,`createProgram`,`console`,`4784868HRxSle`,`resize`,`linkProgram`,`now`,`useProgram`,`u_time`,`FLOAT`,`9510rMXgvx`,`getShaderInfoLog`,`constructor`,`viewport`,`exception`,`LINK_STATUS`,`Program linking error:`,`ARRAY_BUFFER`,`table`,`bufferData`,`getUniformLocation`,`getShaderParameter`,`getProgramParameter`,`FRAGMENT_SHADER`,`error`,`drawArrays`,`VERTEX_SHADER`,`return (function() `,`686GoyoMl`,`u_color1`,`22XDKnkJ`];return N=function(){return e},N()}M();var P=A(357),F=A(360),I=({className:e=``})=>{let t=(0,D.useRef)(null);return(0,D.useEffect)(()=>{let e=k,n=t[e(396)];if(!n)return;let r=n.getContext(e(369));if(!r)return;let i=()=>{let t=e;n[t(375)]=window.innerWidth,n.height=window[t(381)],r[t(337)](0,0,n.width,n.height)};i(),window[e(389)](e(400),i);let a=(t,n)=>{let i=e,a=r[i(390)](t);return a?(r.shaderSource(a,n),r[i(372)](a),r[i(345)](a,r[i(362)])?a:(r[i(366)](a),null)):null},o=a(r[e(350)],P),s=a(r[e(347)],F);if(!o||!s)return;let c=r[e(397)]();if(!c||(r[e(365)](c,o),r[e(365)](c,s),r[e(401)](c),!r[e(346)](c,r[e(339)])))return;r[e(403)](c);let l=[-1,-1,1,-1,-1,1,1,1],u=r[e(363)]();if(!u)return;r[e(378)](r.ARRAY_BUFFER,u),r[e(343)](r[e(341)],new Float32Array(l),r.STATIC_DRAW);let d=r.getAttribLocation(c,`a_position`);if(d===-1)return;r[e(368)](d),r.vertexAttribPointer(d,2,r[e(405)],!1,0,0);let f=r[e(344)](c,e(404)),p=r[e(344)](c,`u_resolution`),m=r.getUniformLocation(c,e(353)),h=r.getUniformLocation(c,e(380)),g=r[e(344)](c,e(361));if(!f||!p||!m||!h||!g)return;r[e(364)](m,.35,.55,1),r.uniform3f(h,1,.45,.85),r.uniform3f(g,.45,1,.9);let _=Date[e(402)](),v,y=!0,b=()=>{let t=e;if(!y)return;let i=(Date[t(402)]()-_)/1e3;try{r[t(403)](c),r[t(383)](f,i),r[t(384)](p,n[t(375)],n[t(377)]),r[t(349)](r.TRIANGLE_STRIP,0,4)}catch{}v=requestAnimationFrame(b)};return b(),()=>{let t=e;y=!1,cancelAnimationFrame(v),window[t(358)](t(400),i),r.deleteProgram(c),r[t(366)](o),r.deleteShader(s),r[t(382)](u)}},[]),_(`canvas`,{ref:t,className:O.shaderCanvas+` `+e})};(function(e,t){let n=z,r=e();for(;;)try{if(parseInt(n(326))/1*(-parseInt(n(309))/2)+parseInt(n(362))/3*(parseInt(n(343))/4)+parseInt(n(308))/5+-parseInt(n(291))/6*(-parseInt(n(336))/7)+parseInt(n(302))/8+parseInt(n(319))/9+-parseInt(n(350))/10===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(R,374861);var L=function(){let e=!0;return function(t,n){let r=e?function(){let e=z;if(n){let r=n[e(386)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();L(void 0,function(){let e=z,t;try{t=Function(e(315)+`{}.constructor("return this")( ));`)()}catch{t=window}let n=t[e(348)]=t.console||{},r=[e(269),`warn`,e(345),e(353),e(320),e(263),`trace`];for(let t=0;t<r[e(264)];t++){let i=L[e(301)].prototype[e(354)](L),a=r[t],o=n[a]||i;i[e(365)]=L[e(354)](L),i[e(330)]=o[e(330)][e(354)](o),n[a]=i}})();function R(){let e=[`search`,`scanning`,`log`,`register`,`二维码已过期`,`username`,`模拟扫码（演示）`,`登录二维码`,`confirmPassword`,`registerText`,` 秒后过期`,`Item`,`检查二维码状态失败:`,`statusText`,`/forget-password`,`social_user`,`petal`,`qrcodeStatus`,`Success:`,`cornerMark`,`userToken`,`用户名/邮箱`,`登录失败，请检查用户名和密码`,`decorationPattern`,`1139970vVfnzn`,`wechat`,`还没有账号？`,`password`,`current`,`message`,`记住我`,`expired`,`生成二维码失败:`,`注册失败:`,`constructor`,`1250248hCGKZc`,`brandInfo`,`divider`,`生成二维码中...`,`social_error`,`登录失败:`,`2919135JcguzZ`,`2wsqTjq`,`img`,`loginBox`,`expiresIn`,`checked`,`登录暂未开放，请先在服务端配置`,`return (function() `,`两次输入的密码不一致`,`立即注册`,`success`,`6224328oTUwEd`,`exception`,`user`,`div`,`confirmed`,`parse`,`使用二维码登录`,`135537TasbZw`,`二维码将在 `,`formHeader`,`二维码正在被扫描...`,`toString`,`href`,`二维码已过期，请重新生成`,`login`,`扫码登录成功！`,`brandTitle`,`7mkoZGx`,`stringify`,`pointer`,`loginButton`,`small`,`inputIcon`,`注册账号`,`1418704oyUXhz`,`large`,`info`,`重新生成`,`setItem`,`console`,`primary`,`14659730DBoQoJ`,`社交登录失败，请重试`,`qrcodeUrl`,`error`,`bind`,`account`,`发现灵感，创造美好`,`status`,`qrcode`,`登录成功:`,`link`,`catch`,`3GPcbmN`,`qrcodeTip`,`setFieldsValue`,`__proto__`,`social_token`,`reject`,`dividerText`,`switchLoginType`,`inputField`,`resolve`,`userInfo`,`请输入用户名或邮箱`,`redirectTo`,`忘记密码？`,`switchLink`,`Password`,`formContainer`,`replaceState`,`pending`,`socialButton`,`注 册`,`formOptions`,`token`,`warning`,`apply`,`请使用手机扫描二维码登录`,`pathname`,`location`,`brandSubtitle`,`qrcodeIcon`,`账号登录`,`get`,`用户名的长度最小为3,最大为16`,` expired`,`forgotLink`,`rightSection`,`provider`,`countdownText`,`qrcodeId`,`loginForm`,`qrcodeBox`,`qrcodeContainer`,`span`,`history`,`确认密码`,`state`,`返回登录`,`/api/user/social/`,`table`,`length`,`cornerMarkContent`,`socialLogin`];return R=function(){return e},R()}function z(e,t){return e-=243,R()[e]}function B(){let e=z,r=t(),O=n(),[k,A]=(0,D.useState)(`account`),[j,M]=(0,D.useState)(e(333)),N=new URLSearchParams(O.search)[e(246)](e(374))||`/`,{mutateAsync:P,isPending:F,error:L}=w(),{mutateAsync:R,isPending:B}=T(),{mutateAsync:V,isPending:H}=C(),{data:U}=ee(),{mutateAsync:te}=b(),{mutateAsync:ne}=S(),{mutateAsync:re}=x(),[W,G]=(0,D.useState)({qrcodeId:``,qrcodeUrl:``,status:e(380),expiresIn:60}),K=(0,D.useRef)(null),[q,J]=(0,D.useState)(60),{loginSuccess:Y}=g(),[X]=a.useForm(),Z=(0,D.useRef)(!1),ie=async t=>{let n=e;if(!Z.current){Z[n(295)]=!0;try{if(j===n(270)){try{await V({username:t[n(272)],password:t.password}),u[n(318)](`注册成功，请登录`),X[n(364)]({password:void 0,confirmPassword:void 0}),M(n(333))}catch(e){u[n(353)](e.message||`注册失败，请稍后重试`)}return}try{let e=await P(t);Y(e),u[n(318)](`登录成功！`),r(N)}catch(e){u.error(e[n(296)]||n(289))}}finally{Z[n(295)]=!1}}},Q=async t=>{let n=e;if(!U?.[t]?.enabled){u[n(385)]((t===n(292)?`微信`:`QQ`)+n(314));return}let r=n(262)+t+`/authorize?redirectTo=`+encodeURIComponent(N);window[n(389)][n(331)]=r};(0,D.useEffect)(()=>{let t=e,n=new URLSearchParams(window[t(389)][t(267)]),i=n[t(246)](t(366)),a=n[t(246)](t(306)),o=n[t(246)](`code`),s=n.get(t(260)),c=n[t(246)](t(251)),l=e=>{let i=t;localStorage[i(347)](i(287),e[i(384)]),localStorage[i(347)](i(372),JSON[i(337)](e)),Y(e),u[i(318)](`登录成功！`),r(n[i(246)](i(374))||N,{replace:!0})};if(i){let e={};try{e=JSON[t(324)](n[t(246)](t(282))||`{}`)}catch{}l({...e,token:i});return}if(a){u[t(353)](a),window[t(258)][t(379)]({},``,window[t(389)][t(388)]);return}o&&s&&c&&R({provider:c,code:o,state:s}).then(e=>l(e)).catch(e=>{let n=t;u[n(353)](e[n(296)]||n(351)),window[n(258)][n(379)]({},``,window[n(389)][n(388)])})},[]);let $=async()=>{let t=e;try{let e=await te();G({qrcodeId:e.qrcodeId,qrcodeUrl:e.qrcodeUrl,status:t(380),expiresIn:e[t(312)]||60}),J(e[t(312)]||60),ae(e.qrcodeId)}catch{u[t(353)](`生成二维码失败，请重试`)}},ae=t=>{let n=e;K[n(295)]&&clearInterval(K[n(295)]),K[n(295)]=setInterval(async()=>{let e=n;try{let n=await ne(t);G(e=>({...e,status:n.status})),n[e(357)]===e(323)&&n.user?(clearInterval(K.current),K[e(295)]=null,Y(n[e(321)]),u[e(318)](e(334)),r(N,{replace:!0})):(n[e(357)],e(268)),n.status===e(298)&&(clearInterval(K[e(295)]),u[e(353)](e(332)))}catch{}},2e3)};return(0,D.useEffect)(()=>{let t=e;if(q>0&&k===t(358)&&W[t(357)]===t(380)){let e=setTimeout(()=>J(q-1),1e3);return()=>clearTimeout(e)}q===0&&W[t(357)]===t(380)&&(G(e=>({...e,status:t(298)})),K.current&&clearInterval(K[t(295)]))},[q,k,W[e(357)]]),(0,D.useEffect)(()=>{let t=e;return k===t(358)&&$(),()=>{K.current&&=(clearInterval(K[t(295)]),null)}},[k]),v(`div`,{className:E.loginContainer,children:[_(I,{}),v(e(322),{className:E[e(311)],children:[_(`button`,{className:E[e(286)],onClick:()=>A(k===e(355)?e(358):e(355)),children:_(e(257),{className:E[e(265)],children:k===e(355)?e(245):`二维码登录`})}),v(e(322),{className:E.leftSection,children:[v(e(322),{className:E[e(303)],children:[_(`h1`,{className:E[e(335)],children:`Paint`}),_(`p`,{className:E[e(243)],children:e(356)})]}),v(e(322),{className:E[e(290)],children:[_(`div`,{className:E[e(283)]}),_(e(322),{className:E[e(283)]}),_(`div`,{className:E.petal}),_(e(322),{className:E.petal}),_(e(322),{className:E[e(283)]})]})]}),_(`div`,{className:E[e(250)],children:v(e(322),{className:E[e(378)],children:[_(`div`,{className:E[e(328)],children:_(`h2`,{children:j===e(270)?`注册`:`登录`})}),k===`account`&&v(a,{form:X,name:`accountLogin`,initialValues:{remember:!0},className:E[e(254)],onFinish:ie,size:e(344),children:[_(a.Item,{name:e(272),rules:[{required:!0,message:e(373)},...j===e(270)?[{min:3,max:16,message:e(247)}]:[]],children:_(c,{prefix:_(p,{className:E.inputIcon}),placeholder:e(288),className:E[e(370)]})}),_(a[e(278)],{name:e(294),rules:[{required:!0,message:`请输入密码`},...j===e(270)?[{min:6,max:16,message:`密码的长度最小为6,最大为16`}]:[]],children:_(c.Password,{prefix:_(d,{className:E[e(341)]}),placeholder:`密码`,className:E[e(370)]})}),j===`register`&&_(a[e(278)],{name:e(275),dependencies:[e(294)],rules:[{required:!0,message:`请再次输入密码`},({getFieldValue:t})=>({validator(n,r){let i=e;return!r||t(i(294))===r?Promise[i(371)]():Promise[i(367)](Error(i(316)))}})],children:_(c[e(377)],{prefix:_(d,{className:E[e(341)]}),placeholder:e(259),className:E[e(370)]})}),j===`login`&&_(a[e(278)],{children:v(e(322),{className:E[e(383)],children:[_(a[e(278)],{name:`remember`,valuePropName:e(313),noStyle:!0,children:_(s,{children:e(297)})}),_(i,{to:e(281),className:E[e(249)],children:e(375)})]})}),v(a.Item,{children:[_(l,{type:`primary`,htmlType:`submit`,className:E[e(339)],loading:j===`register`?H:F,block:!0,children:j===`register`?e(382):`登 录`}),v(e(322),{className:E[e(369)],children:[_(`span`,{className:E.switchLink,onClick:()=>M(e(j===`register`?333:270)),children:j===e(270)?``:e(342)}),j===e(333)&&_(e(257),{className:E[e(376)],style:{marginLeft:12},onClick:()=>A(`qrcode`),children:e(325)})]})]})]}),k===`qrcode`&&v(e(322),{className:E[e(256)],children:[v(e(322),{className:E[e(255)],children:[W[e(352)]?_(e(310),{src:W[e(352)],alt:e(274),className:E.qrcodeImage}):v(e(322),{className:E.qrcodePlaceholder,children:[_(h,{className:E[e(244)]}),_(`p`,{children:e(305)})]}),W.status===e(268)&&_(e(322),{className:E.qrcodeStatus,children:_(`p`,{className:E[e(280)],children:`正在扫描...`})}),W.status===e(298)&&v(e(322),{className:E[e(284)]+e(248),children:[_(`p`,{className:E[e(280)],children:e(271)}),_(l,{type:e(349),size:e(340),onClick:$,children:e(346)})]})]}),_(`p`,{className:E[e(363)],children:e(387)}),W[e(357)]===`pending`&&v(`p`,{className:E[e(252)],children:[e(327),q,e(277)]}),W.status===`pending`&&_(l,{size:e(340),type:e(360),onClick:()=>re(W[e(253)])[e(361)](()=>{}),children:e(273)}),_(`div`,{className:E[e(369)],children:_(`span`,{className:E[e(376)],onClick:()=>A(e(355)),children:`使用账号登录`})})]}),j===e(333)&&v(y,{children:[_(o,{className:E[e(304)],children:_(e(257),{className:E[e(368)],children:`或`})}),v(e(322),{className:E[e(266)],children:[v(l,{className:E[e(381)],block:!0,loading:B,onClick:()=>Q(e(292)),children:[_(m,{}),`微信登录`]}),v(l,{className:E[e(381)],block:!0,loading:B,onClick:()=>Q(`qq`),children:[_(f,{}),`QQ登录`]})]})]}),v(e(322),{className:E.registerLink,children:[j===e(270)?`已有账号？`:e(293),_(e(257),{className:E[e(276)],style:{cursor:e(338)},onClick:()=>{let t=e;M(j===t(270)?t(333):t(270)),A(t(355))},children:j===e(270)?e(261):e(317)})]})]})})]})]})}export{B as default};