import{a as e}from"./rolldown-runtime-D2ob17Bc.js";import{D as t,N as n,O as r,b as i}from"./react-vendor-DLYne9ac.js";import{D as a,I as o,R as s,T as c,U as l,b as u}from"./antd-C2_0VkJo.js";import{P as d,T as f,c as p,s as m,w as h}from"./antd-style-CCOxD768.js";import{l as g,n as _,r as v,t as y}from"./index-D8vAevxx.js";import{a as b,c as ee,i as x,l as te,o as ne,s as S,u as C}from"./hooks-CbMOCn6V.js";import"./services-2Y-ILZke.js";var w={loginContainer:`_loginContainer_1brsp_1`,particleCanvas:`_particleCanvas_1brsp_27`,shaderCanvas:`_shaderCanvas_1brsp_49`,loginBox:`_loginBox_1brsp_69`,fadeInUp:`_fadeInUp_1brsp_1`,leftSection:`_leftSection_1brsp_123`,brandInfo:`_brandInfo_1brsp_143`,slideInLeft:`_slideInLeft_1brsp_1`,brandTitle:`_brandTitle_1brsp_183`,brandSubtitle:`_brandSubtitle_1brsp_199`,decorationPattern:`_decorationPattern_1brsp_215`,rotate:`_rotate_1brsp_1`,petal:`_petal_1brsp_257`,rightSection:`_rightSection_1brsp_317`,formContainer:`_formContainer_1brsp_335`,slideInRight:`_slideInRight_1brsp_1`,cornerMark:`_cornerMark_1brsp_375`,cornerMarkContent:`_cornerMarkContent_1brsp_417`,switchLoginType:`_switchLoginType_1brsp_435`,switchLink:`_switchLink_1brsp_445`,formHeader:`_formHeader_1brsp_477`,qrcodeContainer:`_qrcodeContainer_1brsp_513`,qrcodeBox:`_qrcodeBox_1brsp_527`,qrcodePlaceholder:`_qrcodePlaceholder_1brsp_561`,qrcodeIcon:`_qrcodeIcon_1brsp_571`,qrcodeTip:`_qrcodeTip_1brsp_593`,loginForm:`_loginForm_1brsp_609`,inputField:`_inputField_1brsp_617`,inputIcon:`_inputIcon_1brsp_649`,formOptions:`_formOptions_1brsp_657`,forgotLink:`_forgotLink_1brsp_671`,loginButton:`_loginButton_1brsp_695`,divider:`_divider_1brsp_727`,dividerText:`_dividerText_1brsp_737`,socialLogin:`_socialLogin_1brsp_751`,socialButton:`_socialButton_1brsp_765`,registerLink:`_registerLink_1brsp_797`,registerText:`_registerText_1brsp_809`,cornerMarkSwitcher:`_cornerMarkSwitcher_1brsp_885`,cornerButton:`_cornerButton_1brsp_899`,active:`_active_1brsp_919`},T=e(n(),1),E={shaderCanvas:`_shaderCanvas_1jvai_1`},D=O;(function(e,t){let n=O,r=e();for(;;)try{if(parseInt(n(487))/1+-parseInt(n(537))/2+-parseInt(n(547))/3*(-parseInt(n(506))/4)+-parseInt(n(492))/5+-parseInt(n(526))/6+parseInt(n(517))/7+parseInt(n(515))/8===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(k,932003);function O(e,t){return e-=484,k()[e]}function k(){let e=[`deleteProgram`,`compileShader`,`u_color1`,`removeEventListener`,`6422268GtUmwZ`,`toString`,`Program linking error:`,`Shader compilation error:`,`shaderCanvas`,`height`,`constructor`,`viewport`,`log`,`getUniformLocation`,`
  attribute vec2 a_position;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,`1095052NBxWse`,`TRIANGLE_STRIP`,`table`,`trace`,`webgl`,`error`,`u_color2`,`uniform2f`,`deleteShader`,`return (function() `,`1112406XBHpOX`,`bind`,`console`,`deleteBuffer`,`ARRAY_BUFFER`,`bufferData`,`drawArrays`,`1743663nGDrbs`,`now`,`apply`,`info`,`COMPILE_STATUS`,`7991780TocyQR`,`FRAGMENT_SHADER`,`innerHeight`,`getShaderParameter`,`width`,`u_resolution`,`attachShader`,`resize`,`getProgramParameter`,`WebGL not supported`,`shaderSource`,`LINK_STATUS`,`__proto__`,`getAttribLocation`,`4hvCawJ`,`uniform1f`,`uniform3f`,`a_position`,`u_time`,`current`,`
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
`,`addEventListener`,`vertexAttribPointer`,`3462176NrjUjU`,`warn`,`11207182yerjpC`,`length`,`enableVertexAttribArray`,`createProgram`,`exception`];return k=function(){return e},k()}var A=function(){let e=!0;return function(t,n){let r=e?function(){let e=O;if(n){let r=n[e(489)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();A(void 0,function(){let e=O,t;try{t=Function(e(546)+`{}.constructor("return this")( ));`)()}catch{t=window}let n=t[e(549)]=t.console||{},r=[e(534),e(516),e(490),e(542),e(521),e(539),e(540)];for(let t=0;t<r[e(518)];t++){let i=A[e(532)].prototype[e(548)](A),a=r[t],o=n[a]||i;i[e(504)]=A[e(548)](A),i[e(527)]=o[e(527)][e(548)](o),n[a]=i}})();var j=D(536),M=D(512),re=({className:e=``})=>{let t=D,n=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let e=O,t=n[e(511)];if(!t)return;let r=t.getContext(e(541));if(!r)return;let i=()=>{let n=e;t.width=window.innerWidth,t[n(531)]=window[n(494)],r[n(533)](0,0,t[n(496)],t[n(531)])};i(),window[e(513)](e(499),i);let a=(t,n)=>{let i=e,a=r.createShader(t);return a?(r[i(502)](a,n),r[i(523)](a),r[i(495)](a,r[i(491)])?a:(r[i(545)](a),null)):null},o=a(r.VERTEX_SHADER,j),s=a(r[e(493)],M);if(!o||!s)return;let c=r[e(520)]();if(!c||(r[e(498)](c,o),r[e(498)](c,s),r.linkProgram(c),!r[e(500)](c,r[e(503)])))return;r.useProgram(c);let l=[-1,-1,1,-1,-1,1,1,1],u=r.createBuffer();if(!u)return;r.bindBuffer(r[e(484)],u),r[e(485)](r[e(484)],new Float32Array(l),r.STATIC_DRAW);let d=r[e(505)](c,e(509));if(d===-1)return;r[e(519)](d),r[e(514)](d,2,r.FLOAT,!1,0,0);let f=r[e(535)](c,e(510)),p=r[e(535)](c,e(497)),m=r[e(535)](c,e(524)),h=r.getUniformLocation(c,e(543)),g=r.getUniformLocation(c,`u_color3`);if(!f||!p||!m||!h||!g)return;r.uniform3f(m,.35,.55,1),r[e(508)](h,1,.45,.85),r.uniform3f(g,.45,1,.9);let _=Date[e(488)](),v,y=!0,b=()=>{let n=e;if(!y)return;let i=(Date[n(488)]()-_)/1e3;try{r.useProgram(c),r[n(507)](f,i),r[n(544)](p,t[n(496)],t[n(531)]),r[n(486)](r[n(538)],0,4)}catch{}v=requestAnimationFrame(b)};return b(),()=>{let t=e;y=!1,cancelAnimationFrame(v),window[t(525)](t(499),i),r[t(522)](c),r[t(545)](o),r[t(545)](s),r[t(550)](u)}},[]),_(`canvas`,{ref:n,className:E[t(530)]+` `+e})};(function(e,t){let n=P,r=e();for(;;)try{if(parseInt(n(178))/1*(parseInt(n(265))/2)+-parseInt(n(266))/3+parseInt(n(269))/4+-parseInt(n(176))/5+-parseInt(n(215))/6+parseInt(n(210))/7+-parseInt(n(159))/8===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(F,207031);var N=function(){let e=!0;return function(t,n){let r=e?function(){if(n){let e=n.apply(t,arguments);return n=null,e}}:function(){};return e=!1,r}}();N(void 0,function(){let e=P,t;try{t=Function(`return (function() `+e(219)+`);`)()}catch{t=window}let n=t[e(125)]=t[e(125)]||{},r=[e(241),e(246),e(179),e(233),`exception`,`table`,e(139)];for(let t=0;t<r[e(235)];t++){let i=N[e(163)][e(148)][e(221)](N),a=r[t],o=n[a]||i;i[e(126)]=N[e(221)](N),i[e(145)]=o[e(145)].bind(o),n[a]=i}})();function P(e,t){return e-=122,F()[e]}function F(){let e=[`warning`,`account`,`get`,`remember`,`trace`,`登 录`,`已有账号？`,`注册账号`,`qrcodeUrl`,`qrcodeBox`,`toString`,`使用二维码登录`,`primary`,`prototype`,`二维码正在被扫描...`,`status`,`扫码登录成功！`,`使用账号登录`,`两次输入的密码不一致`,`success`,`img`,`expired`,`用户名/邮箱`,`请输入用户名或邮箱`,`335304ApVSrW`,`请输入密码`,`password`,`message`,`constructor`,`登录成功！`,`forgotLink`,`parse`,`忘记密码？`,`redirectTo`,`wechat`,`accountLogin`,`search`,`petal`,`expiresIn`,`登录暂未开放，请先在服务端配置`,`reject`,`1967925XTxDPZ`,`pointer`,`1McYpYp`,`info`,` 秒后过期`,`brandTitle`,`qrcodeStatus`,`provider`,`pathname`,`formContainer`,`请再次输入密码`,`userInfo`,`catch`,`href`,`注册失败，请稍后重试`,`state`,`还没有账号？`,`确认密码`,`登录二维码`,`登录成功:`,`qrcodeTip`,`qrcodePlaceholder`,`qrcodeIcon`,`button`,`token`,`qrcodeId`,`small`,`生成二维码失败:`,`登录失败:`,`span`,`user`,`formHeader`,`useForm`,`cornerMark`,`2709987yHfhug`,`发现灵感，创造美好`,`socialLogin`,`setItem`,`rightSection`,`801828cxdmfB`,`large`,`countdownText`,`返回登录`,`{}.constructor("return this")( )`,`location`,`bind`,`Paint`,`registerLink`,`code`,`checked`,`replaceState`,`socialButton`,`statusText`,`二维码将在 `,`登录失败，请检查用户名和密码`,`current`,`注册成功，请登录`,`error`,`QQ登录`,`length`,`二维码已过期`,`用户名的长度最小为3,最大为16`,`二维码登录`,`/api/user/social/`,`Password`,`log`,`submit`,`scanning`,`重新生成`,`confirmed`,`warn`,`立即注册`,`/forget-password`,`loginButton`,`login`,`divider`,`inputField`,`Item`,`loginForm`,`brandInfo`,`div`,`pending`,`loginBox`,`history`,`username`,`二维码已过期，请重新生成`,`生成二维码中...`,`密码的长度最小为6,最大为16`,`resolve`,`411126figRAj`,`618483pYEIKB`,`qrcodeContainer`,`link`,`1558496uaogkc`,`dividerText`,`registerText`,`/authorize?redirectTo=`,`switchLoginType`,`setFieldsValue`,`记住我`,`console`,`__proto__`,`switchLink`,`enabled`,`qrcode`,`社交登录失败，请重试`,`then`,`stringify`,`inputIcon`,`register`];return F=function(){return e},F()}function I(){let e=P,n=r(),E=t(),[D,O]=(0,T.useState)(e(136)),[k,A]=(0,T.useState)(e(250)),j=new URLSearchParams(E[e(171)])[e(137)](e(168))||`/`,{mutateAsync:M,isPending:N,error:F}=ne(),{mutateAsync:I,isPending:L}=S(),{mutateAsync:R,isPending:z}=te(),{data:B}=C(),{mutateAsync:V}=b(),{mutateAsync:H}=x(),{mutateAsync:U}=ee(),[W,G]=(0,T.useState)({qrcodeId:``,qrcodeUrl:``,status:e(257),expiresIn:60}),K=(0,T.useRef)(null),[q,J]=(0,T.useState)(60),{loginSuccess:Y}=g(),[X]=a[e(208)](),Z=(0,T.useRef)(!1),ie=async t=>{let r=e;if(!Z[r(231)]){Z[r(231)]=!0;try{if(k===r(134)){try{await R({username:t[r(260)],password:t[r(161)]}),u.success(r(232)),X[r(123)]({password:void 0,confirmPassword:void 0}),A(r(250))}catch(e){u[r(233)](e[r(162)]||r(190))}return}try{let e=await M(t);Y(e),u[r(154)](r(164)),n(j)}catch(e){u[r(233)](e[r(162)]||r(230))}}finally{Z[r(231)]=!1}}},Q=async t=>{let n=e;if(!B?.[t]?.[n(128)]){u[n(135)]((t===n(169)?`微信`:`QQ`)+n(174));return}let r=n(239)+t+n(272)+encodeURIComponent(j);window.location[n(189)]=r};(0,T.useEffect)(()=>{let t=e,r=new URLSearchParams(window[t(220)].search),i=r.get(`social_token`),a=r[t(137)](`social_error`),o=r[t(137)](t(224)),s=r[t(137)](t(191)),c=r.get(t(183)),l=e=>{let i=t;localStorage[i(213)](`userToken`,e[i(200)]),localStorage[i(213)](i(187),JSON[i(132)](e)),Y(e),u[i(154)](i(164)),n(r.get(i(168))||j,{replace:!0})};if(i){let e={};try{e=JSON[t(166)](r[t(137)](`social_user`)||`{}`)}catch{}l({...e,token:i});return}if(a){u[t(233)](a),window[t(259)][t(226)]({},``,window[t(220)][t(184)]);return}o&&s&&c&&I({provider:c,code:o,state:s})[t(131)](e=>l(e))[t(188)](e=>{let n=t;u[n(233)](e.message||n(130)),window[n(259)][n(226)]({},``,window[n(220)].pathname)})},[]);let $=async()=>{let t=e;try{let e=await V();G({qrcodeId:e[t(201)],qrcodeUrl:e[t(143)],status:t(257),expiresIn:e[t(173)]||60}),J(e[t(173)]||60),ae(e[t(201)])}catch{u[t(233)](`生成二维码失败，请重试`)}},ae=t=>{let r=e;K[r(231)]&&clearInterval(K[r(231)]),K[r(231)]=setInterval(async()=>{let e=r;try{let r=await H(t);G(e=>({...e,status:r.status})),r[e(150)]===e(245)&&r.user?(clearInterval(K[e(231)]),K[e(231)]=null,Y(r[e(206)]),u[e(154)](e(151)),n(j,{replace:!0})):(r[e(150)],e(243)),r[e(150)]===e(156)&&(clearInterval(K.current),u[e(233)](e(261)))}catch{}},2e3)};return(0,T.useEffect)(()=>{let t=e;if(q>0&&D===t(129)&&W.status===t(257)){let e=setTimeout(()=>J(q-1),1e3);return()=>clearTimeout(e)}q===0&&W[t(150)]===t(257)&&(G(e=>({...e,status:t(156)})),K[t(231)]&&clearInterval(K[t(231)]))},[q,D,W[e(150)]]),(0,T.useEffect)(()=>{let t=e;return D===t(129)&&$(),()=>{let e=t;K.current&&(clearInterval(K[e(231)]),K[e(231)]=null)}},[D]),v(`div`,{className:w.loginContainer,children:[_(re,{}),v(`div`,{className:w[e(258)],children:[_(e(199),{className:w[e(209)],onClick:()=>O(D===e(136)?`qrcode`:`account`),children:_(e(205),{className:w.cornerMarkContent,children:D===`account`?`账号登录`:e(238)})}),v(e(256),{className:w.leftSection,children:[v(e(256),{className:w[e(255)],children:[_(`h1`,{className:w[e(181)],children:e(222)}),_(`p`,{className:w.brandSubtitle,children:e(211)})]}),v(e(256),{className:w.decorationPattern,children:[_(e(256),{className:w[e(172)]}),_(e(256),{className:w[e(172)]}),_(e(256),{className:w.petal}),_(e(256),{className:w[e(172)]}),_(e(256),{className:w[e(172)]})]})]}),_(`div`,{className:w[e(214)],children:v(`div`,{className:w[e(185)],children:[_(e(256),{className:w[e(207)],children:_(`h2`,{children:k===e(134)?`注册`:`登录`})}),D===e(136)&&v(a,{form:X,name:e(170),initialValues:{remember:!0},className:w[e(254)],onFinish:ie,size:e(216),children:[_(a[e(253)],{name:e(260),rules:[{required:!0,message:e(158)},...k===e(134)?[{min:3,max:16,message:e(237)}]:[]],children:_(c,{prefix:_(p,{className:w.inputIcon}),placeholder:e(157),className:w[e(252)]})}),_(a[e(253)],{name:`password`,rules:[{required:!0,message:e(160)},...k===`register`?[{min:6,max:16,message:e(263)}]:[]],children:_(c[e(240)],{prefix:_(d,{className:w.inputIcon}),placeholder:`密码`,className:w[e(252)]})}),k===e(134)&&_(a[e(253)],{name:`confirmPassword`,dependencies:[e(161)],rules:[{required:!0,message:e(186)},({getFieldValue:t})=>({validator(n,r){let i=e;return!r||t(i(161))===r?Promise[i(264)]():Promise[i(175)](Error(i(153)))}})],children:_(c.Password,{prefix:_(d,{className:w[e(133)]}),placeholder:e(193),className:w.inputField})}),k===e(250)&&_(a.Item,{children:v(`div`,{className:w.formOptions,children:[_(a[e(253)],{name:e(138),valuePropName:e(225),noStyle:!0,children:_(s,{children:e(124)})}),_(i,{to:e(248),className:w[e(165)],children:e(167)})]})}),v(a[e(253)],{children:[_(l,{type:e(147),htmlType:e(242),className:w[e(249)],loading:k===e(134)?z:N,block:!0,children:k===e(134)?`注 册`:e(140)}),v(e(256),{className:w[e(122)],children:[_(e(205),{className:w[e(127)],onClick:()=>A(k===e(134)?e(250):e(134)),children:k===e(134)?``:e(142)}),k===`login`&&_(e(205),{className:w[e(127)],style:{marginLeft:12},onClick:()=>O(`qrcode`),children:e(146)})]})]})]}),D===e(129)&&v(`div`,{className:w[e(267)],children:[v(e(256),{className:w[e(144)],children:[W[e(143)]?_(e(155),{src:W[e(143)],alt:e(194),className:w.qrcodeImage}):v(e(256),{className:w[e(197)],children:[_(h,{className:w[e(198)]}),_(`p`,{children:e(262)})]}),W[e(150)]===e(243)&&_(e(256),{className:w[e(182)],children:_(`p`,{className:w.statusText,children:`正在扫描...`})}),W[e(150)]===e(156)&&v(e(256),{className:w[e(182)]+` expired`,children:[_(`p`,{className:w[e(228)],children:e(236)}),_(l,{type:e(147),size:e(202),onClick:$,children:e(244)})]})]}),_(`p`,{className:w[e(196)],children:`请使用手机扫描二维码登录`}),W[e(150)]===`pending`&&v(`p`,{className:w[e(217)],children:[e(229),q,e(180)]}),W[e(150)]===`pending`&&_(l,{size:e(202),type:e(268),onClick:()=>U(W[e(201)]).catch(()=>{}),children:`模拟扫码（演示）`}),_(`div`,{className:w.switchLoginType,children:_(e(205),{className:w.switchLink,onClick:()=>O(e(136)),children:e(152)})})]}),k===e(250)&&v(y,{children:[_(o,{className:w[e(251)],children:_(e(205),{className:w[e(270)],children:`或`})}),v(e(256),{className:w[e(212)],children:[v(l,{className:w[e(227)],block:!0,loading:L,onClick:()=>Q(`wechat`),children:[_(m,{}),`微信登录`]}),v(l,{className:w[e(227)],block:!0,loading:L,onClick:()=>Q(`qq`),children:[_(f,{}),e(234)]})]})]}),v(e(256),{className:w[e(223)],children:[k===e(134)?e(141):e(192),_(e(205),{className:w[e(271)],style:{cursor:e(177)},onClick:()=>{let t=e;A(k===t(134)?`login`:t(134)),O(t(136))},children:k===e(134)?e(218):e(247)})]})]})})]})]})}export{I as default};