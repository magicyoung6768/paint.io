import{a as e}from"./rolldown-runtime-BN6EOTlp.js";import{D as t,E as n,M as r,y as i}from"./react-vendor-B4q4MPZw.js";import{D as a,I as o,R as s,T as c,U as l,b as u}from"./antd-CQsc4cad.js";import{F as d,T as f,c as p,s as m,w as h}from"./antd-style-eo7QFt6Q.js";import{l as g,n as _,r as v}from"./index-BKetrAe8.js";import{a as y,c as b,i as x,l as S,o as C,s as w}from"./hooks-Csihv9tQ.js";import"./services-BJuVyoNP.js";var T={loginContainer:`_loginContainer_1brsp_1`,particleCanvas:`_particleCanvas_1brsp_27`,shaderCanvas:`_shaderCanvas_1brsp_49`,loginBox:`_loginBox_1brsp_69`,fadeInUp:`_fadeInUp_1brsp_1`,leftSection:`_leftSection_1brsp_123`,brandInfo:`_brandInfo_1brsp_143`,slideInLeft:`_slideInLeft_1brsp_1`,brandTitle:`_brandTitle_1brsp_183`,brandSubtitle:`_brandSubtitle_1brsp_199`,decorationPattern:`_decorationPattern_1brsp_215`,rotate:`_rotate_1brsp_1`,petal:`_petal_1brsp_257`,rightSection:`_rightSection_1brsp_317`,formContainer:`_formContainer_1brsp_335`,slideInRight:`_slideInRight_1brsp_1`,cornerMark:`_cornerMark_1brsp_375`,cornerMarkContent:`_cornerMarkContent_1brsp_417`,switchLoginType:`_switchLoginType_1brsp_435`,switchLink:`_switchLink_1brsp_445`,formHeader:`_formHeader_1brsp_477`,qrcodeContainer:`_qrcodeContainer_1brsp_513`,qrcodeBox:`_qrcodeBox_1brsp_527`,qrcodePlaceholder:`_qrcodePlaceholder_1brsp_561`,qrcodeIcon:`_qrcodeIcon_1brsp_571`,qrcodeTip:`_qrcodeTip_1brsp_593`,loginForm:`_loginForm_1brsp_609`,inputField:`_inputField_1brsp_617`,inputIcon:`_inputIcon_1brsp_649`,formOptions:`_formOptions_1brsp_657`,forgotLink:`_forgotLink_1brsp_671`,loginButton:`_loginButton_1brsp_695`,divider:`_divider_1brsp_727`,dividerText:`_dividerText_1brsp_737`,socialLogin:`_socialLogin_1brsp_751`,socialButton:`_socialButton_1brsp_765`,registerLink:`_registerLink_1brsp_797`,registerText:`_registerText_1brsp_809`,cornerMarkSwitcher:`_cornerMarkSwitcher_1brsp_885`,cornerButton:`_cornerButton_1brsp_899`,active:`_active_1brsp_919`},E=e(r(),1),D={shaderCanvas:`_shaderCanvas_1jvai_1`},O=j;(function(e,t){let n=j,r=e();for(;;)try{if(-parseInt(n(433))/1*(parseInt(n(387))/2)+parseInt(n(419))/3+parseInt(n(450))/4*(-parseInt(n(413))/5)+-parseInt(n(385))/6*(parseInt(n(418))/7)+parseInt(n(431))/8+-parseInt(n(439))/9*(-parseInt(n(391))/10)+parseInt(n(386))/11===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(A,671800);var k=function(){let e=!0;return function(t,n){let r=e?function(){let e=j;if(n){let r=n[e(434)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();k(void 0,function(){let e=j,t=function(){let e=j,t;try{t=Function(e(430)+e(390)+`);`)()}catch{t=window}return t}(),n=t[e(423)]=t[e(423)]||{},r=[e(383),e(449),e(442),e(388),e(452),e(399),e(411)];for(let t=0;t<r[e(416)];t++){let i=k[e(436)].prototype[e(422)](k),a=r[t],o=n[a]||i;i[e(395)]=k[e(422)](k),i[e(414)]=o[e(414)][e(422)](o),n[a]=i}})();function A(){let e=[`7384586gRaGXr`,`46Uinkvw`,`error`,`shaderSource`,`{}.constructor("return this")( )`,`10ivBMuU`,`LINK_STATUS`,`vertexAttribPointer`,`ARRAY_BUFFER`,`__proto__`,`addEventListener`,`
  attribute vec2 a_position;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,`u_color3`,`table`,`bindBuffer`,`WebGL not supported`,`deleteShader`,`innerHeight`,`bufferData`,`getShaderInfoLog`,`Shader compilation error:`,`getUniformLocation`,`WebGL error in animation loop:`,`drawArrays`,`now`,`trace`,`attachShader`,`50Nsrhet`,`toString`,`Program linking error:`,`length`,`FRAGMENT_SHADER`,`7evzQfz`,`1317069OlYRvu`,`getShaderParameter`,`u_color1`,`bind`,`console`,`TRIANGLE_STRIP`,`uniform1f`,`getAttribLocation`,`innerWidth`,`useProgram`,`getProgramInfoLog`,`return (function() `,`10343240llWzCC`,`deleteBuffer`,`9481rJgkUn`,`apply`,`createBuffer`,`constructor`,`FLOAT`,`compileShader`,`6751017kywzKL`,`getProgramParameter`,`viewport`,`info`,`u_resolution`,`uniform2f`,`removeEventListener`,`width`,`u_color2`,`STATIC_DRAW`,`warn`,`378544JheOTA`,`getContext`,`exception`,`createShader`,`enableVertexAttribArray`,`linkProgram`,`resize`,`
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
`,`current`,`height`,`log`,`shaderCanvas`,`7902864RdNivG`];return A=function(){return e},A()}function j(e,t){return e-=381,A()[e]}var M=O(397),N=O(457),P=({className:e=``})=>{let t=O,n=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let e=j,t=n[e(381)];if(!t)return;let r=t[e(451)](`webgl`);if(!r)return;let i=()=>{let n=e;t[n(446)]=window[n(427)],t.height=window[n(403)],r[n(441)](0,0,t.width,t[n(382)])};i(),window[e(396)](e(456),i);let a=(t,n)=>{let i=e,a=r[i(453)](t);return a?(r[i(389)](a,n),r[i(438)](a),r[i(420)](a,r.COMPILE_STATUS)?a:(r[i(402)](a),null)):null},o=a(r.VERTEX_SHADER,M),s=a(r[e(417)],N);if(!o||!s)return;let c=r.createProgram();if(!c||(r[e(412)](c,o),r[e(412)](c,s),r[e(455)](c),!r[e(440)](c,r[e(392)])))return;r[e(428)](c);let l=[-1,-1,1,-1,-1,1,1,1],u=r[e(435)]();if(!u)return;r[e(400)](r[e(394)],u),r[e(404)](r[e(394)],new Float32Array(l),r[e(448)]);let d=r[e(426)](c,`a_position`);if(d===-1)return;r[e(454)](d),r[e(393)](d,2,r[e(437)],!1,0,0);let f=r[e(407)](c,`u_time`),p=r[e(407)](c,e(443)),m=r[e(407)](c,e(421)),h=r[e(407)](c,e(447)),g=r[e(407)](c,e(398));if(!f||!p||!m||!h||!g)return;r.uniform3f(m,.35,.55,1),r.uniform3f(h,1,.45,.85),r.uniform3f(g,.45,1,.9);let _=Date.now(),v,y=!0,b=()=>{let n=e;if(!y)return;let i=(Date[n(410)]()-_)/1e3;try{r[n(428)](c),r[n(425)](f,i),r[n(444)](p,t.width,t[n(382)]),r[n(409)](r[n(424)],0,4)}catch{}v=requestAnimationFrame(b)};return b(),()=>{let t=e;y=!1,cancelAnimationFrame(v),window[t(445)](t(456),i),r.deleteProgram(c),r[t(402)](o),r[t(402)](s),r[t(432)](u)}},[]),_(`canvas`,{ref:n,className:D[t(384)]+` `+e})};(function(e,t){let n=L,r=e();for(;;)try{if(parseInt(n(281))/1*(-parseInt(n(280))/2)+parseInt(n(334))/3*(-parseInt(n(316))/4)+-parseInt(n(338))/5*(parseInt(n(319))/6)+parseInt(n(286))/7+-parseInt(n(335))/8+-parseInt(n(259))/9*(parseInt(n(258))/10)+parseInt(n(357))/11===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(I,851331);var F=function(){let e=!0;return function(t,n){let r=e?function(){let e=L;if(n){let r=n[e(250)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();F(void 0,function(){let e=L,t;try{t=Function(e(248)+e(276)+`);`)()}catch{t=window}let n=t.console=t[e(318)]||{},r=[e(243),e(359),e(299),e(362),e(303),`table`,e(266)];for(let t=0;t<r[e(261)];t++){let i=F[e(271)][e(278)][e(305)](F),a=r[t],o=n[a]||i;i.__proto__=F[e(305)](F),i.toString=o[e(308)].bind(o),n[a]=i}})();function I(){let e=`info,catch,pathname,switchLoginType,exception,Password,bind, expired,username,toString,then,请输入密码,loginForm,button,QQ登录,brandTitle,get,859476NeUnFf,social_token,console,108bHUsAc,userToken,user,dividerText,status,span,qrcodeContainer,token,divider,account,password,provider,生成二维码失败，请重试,expiresIn,生成二维码失败:,15jekyzW,13236096eRAbOA,qrcodeBox,formContainer,310955KbjBzz,decorationPattern,message,code,primary,qrcodeImage,登 录,请使用手机扫描二维码登录,userInfo,登录暂未开放，请先在服务端配置,social_user,formHeader,登录成功！,qrcodeStatus,switchLink,warning,small,petal,enabled,58287471xbxCGt,二维码已过期，请重新生成,warn,location,div,error,scanning,rightSection,setItem,Paint,/forget-password,search,qrcodeId,log,qrcode,登录失败:,用户名/邮箱,success,return (function() ,statusText,apply,登录失败，请检查用户名和密码,扫码登录成功！,二维码将在 ,social_error,socialButton,expired,cornerMarkContent,7636330KJPyBx,9oQegHs,current,length,模拟扫码（演示）,forgotLink,/api/user/social/,inputIcon,trace,confirmed,wechat,href,pending,constructor,inputField,loginContainer,link,检查二维码状态失败:,{}.constructor("return this")( ),qrcodeUrl,prototype,登录成功:,10186TtOgdD,85mptBck,large,立即注册,formOptions,使用账号登录,4181121jsBbeF,正在扫描...,registerText,Item,/register,账号登录,socialLogin,还没有账号？,qrcodeIcon,二维码正在被扫描...,leftSection,生成二维码中...,remember`.split(`,`);return I=function(){return e},I()}function L(e,t){return e-=241,I()[e]}function R(){let e=L,r=t(),D=n(),[O,k]=(0,E.useState)(e(328)),A=new URLSearchParams(D.search)[e(315)](`redirectTo`)||`/`,{mutateAsync:j,isPending:M,error:N}=C(),{mutateAsync:F,isPending:I}=w(),{data:R}=S(),{mutateAsync:z}=y(),{mutateAsync:B}=x(),{mutateAsync:V}=b(),[H,U]=(0,E.useState)({qrcodeId:``,qrcodeUrl:``,status:e(270),expiresIn:60}),W=(0,E.useRef)(null),[G,K]=(0,E.useState)(60),{loginSuccess:q}=g(),J=async t=>{let n=e;try{let e=await j(t);q(e),u.success(`登录成功！`),r(A)}catch(e){u.error(e[n(340)]||n(251))}},Y=async t=>{let n=e;if(!R?.[t]?.[n(356)]){u[n(353)]((t===`wechat`?`微信`:`QQ`)+n(347));return}let r=n(264)+t+`/authorize?redirectTo=`+encodeURIComponent(A);window[n(360)][n(269)]=r};(0,E.useEffect)(()=>{let t=e,n=new URLSearchParams(window[t(360)][t(241)]),i=n[t(315)](t(317)),a=n.get(t(254)),o=n[t(315)](t(341)),s=n[t(315)](`state`),c=n.get(t(330)),l=e=>{let i=t;localStorage[i(365)](i(320),e[i(326)]),localStorage[i(365)](i(346),JSON.stringify(e)),q(e),u[i(247)](i(350)),r(n[i(315)](`redirectTo`)||A,{replace:!0})};if(i){let e={};try{e=JSON.parse(n[t(315)](t(348))||`{}`)}catch{}l({...e,token:i});return}if(a){u.error(a),window.history.replaceState({},``,window[t(360)][t(301)]);return}o&&s&&c&&F({provider:c,code:o,state:s})[t(309)](e=>l(e)).catch(e=>{let n=t;u[n(362)](e[n(340)]||`社交登录失败，请重试`),window.history.replaceState({},``,window[n(360)].pathname)})},[]);let X=async()=>{let t=e;try{let e=await z();U({qrcodeId:e[t(242)],qrcodeUrl:e[t(277)],status:t(270),expiresIn:e[t(332)]||60}),K(e[t(332)]||60),Z(e.qrcodeId)}catch{u[t(362)](t(331))}},Z=t=>{let n=e;W[n(260)]&&clearInterval(W[n(260)]),W[n(260)]=setInterval(async()=>{let e=n;try{let n=await B(t);U(t=>({...t,status:n[e(323)]})),n[e(323)]===e(267)&&n[e(321)]?(clearInterval(W[e(260)]),W[e(260)]=null,q(n[e(321)]),u.success(e(252)),r(A,{replace:!0})):n[e(323)],n[e(323)]===e(256)&&(clearInterval(W.current),u[e(362)](e(358)))}catch{}},2e3)};return(0,E.useEffect)(()=>{let t=e;if(G>0&&O===t(244)&&H[t(323)]===t(270)){let e=setTimeout(()=>K(G-1),1e3);return()=>clearTimeout(e)}G===0&&H.status===`pending`&&(U(e=>({...e,status:t(256)})),W[t(260)]&&clearInterval(W[t(260)]))},[G,O,H.status]),(0,E.useEffect)(()=>{let t=e;return O===t(244)&&X(),()=>{let e=t;W[e(260)]&&(clearInterval(W[e(260)]),W[e(260)]=null)}},[O]),v(e(361),{className:T[e(273)],children:[_(P,{}),v(e(361),{className:T.loginBox,children:[_(e(312),{className:T.cornerMark,onClick:()=>k(O===e(328)?`qrcode`:e(328)),children:_(`span`,{className:T[e(257)],children:O===e(328)?e(291):`二维码登录`})}),v(e(361),{className:T[e(296)],children:[v(`div`,{className:T.brandInfo,children:[_(`h1`,{className:T[e(314)],children:e(366)}),_(`p`,{className:T.brandSubtitle,children:`发现灵感，创造美好`})]}),v(`div`,{className:T[e(339)],children:[_(`div`,{className:T[e(355)]}),_(e(361),{className:T.petal}),_(`div`,{className:T.petal}),_(e(361),{className:T[e(355)]}),_(e(361),{className:T[e(355)]})]})]}),_(e(361),{className:T[e(364)],children:v(`div`,{className:T[e(337)],children:[_(e(361),{className:T[e(349)],children:_(`h2`,{children:`登录`})}),O===e(328)&&v(a,{name:`accountLogin`,initialValues:{remember:!0},className:T[e(311)],onFinish:J,size:e(282),children:[_(a[e(289)],{name:e(307),rules:[{required:!0,message:`请输入用户名或邮箱`}],children:_(c,{prefix:_(p,{className:T[e(265)]}),placeholder:e(246),className:T.inputField})}),_(a[e(289)],{name:e(329),rules:[{required:!0,message:e(310)}],children:_(c[e(304)],{prefix:_(d,{className:T[e(265)]}),placeholder:`密码`,className:T[e(272)]})}),_(a.Item,{children:v(e(361),{className:T[e(284)],children:[_(a[e(289)],{name:e(298),valuePropName:`checked`,noStyle:!0,children:_(s,{children:`记住我`})}),_(i,{to:e(367),className:T[e(263)],children:`忘记密码？`})]})}),v(a[e(289)],{children:[_(l,{type:`primary`,htmlType:`submit`,className:T.loginButton,loading:M,block:!0,children:e(344)}),_(e(361),{className:T[e(302)],children:_(`span`,{className:T[e(352)],onClick:()=>k(e(244)),children:`使用二维码登录`})})]})]}),O===e(244)&&v(e(361),{className:T[e(325)],children:[v(`div`,{className:T[e(336)],children:[H[e(277)]?_(`img`,{src:H[e(277)],alt:`登录二维码`,className:T[e(343)]}):v(e(361),{className:T.qrcodePlaceholder,children:[_(h,{className:T[e(294)]}),_(`p`,{children:e(297)})]}),H[e(323)]===e(363)&&_(e(361),{className:T[e(351)],children:_(`p`,{className:T[e(249)],children:e(287)})}),H[e(323)]===e(256)&&v(e(361),{className:T[e(351)]+e(306),children:[_(`p`,{className:T[e(249)],children:`二维码已过期`}),_(l,{type:e(342),size:`small`,onClick:X,children:`重新生成`})]})]}),_(`p`,{className:T.qrcodeTip,children:e(345)}),H[e(323)]===`pending`&&v(`p`,{className:T.countdownText,children:[e(253),G,` 秒后过期`]}),H[e(323)]===e(270)&&_(l,{size:e(354),type:e(274),onClick:()=>V(H[e(242)])[e(300)](()=>{}),children:e(262)}),_(e(361),{className:T.switchLoginType,children:_(e(324),{className:T[e(352)],onClick:()=>k(`account`),children:e(285)})})]}),_(o,{className:T[e(327)],children:_(e(324),{className:T[e(322)],children:`或`})}),v(e(361),{className:T[e(292)],children:[v(l,{className:T[e(255)],block:!0,loading:I,onClick:()=>Y(e(268)),children:[_(m,{}),`微信登录`]}),v(l,{className:T[e(255)],block:!0,loading:I,onClick:()=>Y(`qq`),children:[_(f,{}),e(313)]})]}),v(e(361),{className:T.registerLink,children:[e(293),_(i,{to:e(290),className:T[e(288)],children:e(283)})]})]})})]})]})}export{R as default};