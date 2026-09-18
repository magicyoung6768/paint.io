import{a as e}from"./rolldown-runtime-C6p345hp.js";import{D as t,M as n,k as r}from"./react-vendor-BCLM1S4H.js";import{C as i,M as a,U as o,b as s}from"./antd-BPSS73pX.js";import{dt as c,y as l}from"./antd-style-Cp6iYq2_.js";import{n as u,r as d}from"./index-Dd2R4xDr.js";import{i as f}from"./http-Dp0My32q.js";import{t as p}from"./marked.esm-D7XPuK9w.js";var m=e(n(),1);(function(e,t){let n=h,r=e();for(;;)try{if(-parseInt(n(400))/1+-parseInt(n(421))/2*(-parseInt(n(385))/3)+parseInt(n(371))/4+parseInt(n(378))/5+-parseInt(n(401))/6+-parseInt(n(375))/7*(-parseInt(n(422))/8)+-parseInt(n(365))/9===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(v,296235);function h(e,t){return e-=365,v()[e]}var g=function(){let e=!0;return function(t,n){let r=e?function(){let e=h;if(n){let r=n[e(388)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();g(void 0,function(){let e=h,t=function(){let e=h,t;try{t=Function(e(373)+e(418)+`);`)()}catch{t=window}return t}(),n=t[e(416)]=t[e(416)]||{},r=[e(384),e(406),e(439),e(428),e(389),e(429),e(374)];for(let t=0;t<r[e(382)];t++){let i=g[e(409)][e(420)][e(372)](g),a=r[t],o=n[a]||i;i[e(404)]=g[e(372)](g),i[e(370)]=o[e(370)][e(372)](o),n[a]=i}})();var _=()=>{let e=h,{documentId:n}=r(),g=t(),[_,v]=(0,m.useState)(``),[y,b]=(0,m.useState)(``),[x,S]=(0,m.useState)(!0),[C,w]=(0,m.useState)(!1),[T,E]=(0,m.useState)(``),D=(0,m.useRef)(null),O=(0,m.useRef)(null);(0,m.useEffect)(()=>{n&&(async()=>{let e=h;S(!0);try{let t=await f.get(`/rag/documents/`+n),r=t[e(394)]||t[e(414)]?.[e(394)]||``,i=t[e(412)]||t[e(414)]?.title||`未命名文档`;v(r),b(r),E(i)}catch{s[e(428)](`获取文档内容失败`)}finally{S(!1)}})()},[n]);let k=e=>{let t=h;if(e===t(379)&&D[t(391)]&&O[t(391)]){let e=D[t(391)],n=O[t(391)],r=e[t(438)]/(e[t(367)]-e.clientHeight);n[t(438)]=r*(n[t(367)]-n[t(441)])}else if(e===t(381)&&D[t(391)]&&O.current){let e=D[t(391)],n=O[t(391)],r=n[t(438)]/(n.scrollHeight-n.clientHeight);e[t(438)]=r*(e.scrollHeight-e[t(441)])}},A=async()=>{let e=h;w(!0);try{await f.put(e(426)+n,{content:y}),v(y),s[e(366)](e(369))}catch(t){s.error(t[e(415)]||e(395))}finally{w(!1)}},j=()=>{g(-1)},M=p(y);return d(e(437),{style:{height:`100vh`,display:e(435),flexDirection:`column`,backgroundColor:e(411)},children:[d(e(437),{style:{padding:e(403),backgroundColor:e(407),borderBottom:e(376),display:e(435),justifyContent:`space-between`,alignItems:e(430)},children:[d(`div`,{style:{display:e(435),alignItems:e(430),gap:`16px`},children:[u(o,{type:`text`,icon:u(c,{}),onClick:j,children:`返回`}),u(`span`,{style:{fontSize:e(417),fontWeight:e(433)},children:T})]}),u(a,{children:u(o,{type:e(432),icon:u(l,{}),loading:C,onClick:A,children:`保存`})})]}),x?u(e(437),{style:{flex:1,display:e(435),justifyContent:`center`,alignItems:e(430)},children:u(i,{size:e(392),tip:`加载文档内容...`})}):d(`div`,{style:{flex:1,display:e(435),overflow:e(396)},children:[d(e(437),{style:{flex:1,display:e(435),flexDirection:`column`,borderRight:e(376),backgroundColor:e(383)},children:[d(e(437),{style:{padding:`12px 16px`,backgroundColor:e(424),borderBottom:e(386),fontSize:e(423),fontWeight:600,color:`#24292e`,display:e(435),alignItems:`center`,gap:e(419)},children:[u(e(368),{style:{width:e(419),height:e(419),borderRadius:e(387),backgroundColor:e(410),display:e(399)}}),`Markdown 编辑`]}),u(e(437),{style:{flex:1,overflow:`auto`,padding:0},children:u(e(434),{ref:D,value:y,onChange:t=>b(t[e(380)][e(408)]),onScroll:()=>k(e(379)),spellCheck:!1,style:{width:`100%`,height:e(397),border:e(377),outline:e(377),resize:e(377),padding:`20px`,backgroundColor:e(383),fontFamily:e(398),fontSize:`13px`,lineHeight:e(431),color:e(425),whiteSpace:`pre-wrap`,wordWrap:e(427)}})})]}),d(e(437),{style:{flex:1,display:e(435),flexDirection:e(405),backgroundColor:`#fff`},children:[d(`div`,{style:{padding:e(390),backgroundColor:e(424),borderBottom:`1px solid #e1e4e8`,fontSize:e(423),fontWeight:600,color:`#24292e`,display:e(435),alignItems:e(430),gap:e(419)},children:[u(e(368),{style:{width:`8px`,height:`8px`,borderRadius:e(387),backgroundColor:e(393),display:e(399)}}),`实时预览`]}),u(e(437),{ref:O,onScroll:()=>k(`preview`),style:{flex:1,overflow:`auto`,padding:e(413),color:e(425),lineHeight:e(431)},children:M?u(e(437),{style:{maxWidth:`none`},dangerouslySetInnerHTML:{__html:M}}):u(`div`,{style:{color:e(440),textAlign:e(430),padding:`40px`},children:`暂无文档内容`})})]})]}),u(e(436),{children:`
        div[style*="max-width: none"] h1,
        div[style*="max-width: none"] h2,
        div[style*="max-width: none"] h3,
        div[style*="max-width: none"] h4,
        div[style*="max-width: none"] h5,
        div[style*="max-width: none"] h6 {
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 600;
          line-height: 1.25;
        }
        div[style*="max-width: none"] h1 { font-size: 2em; border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
        div[style*="max-width: none"] h2 { font-size: 1.5em; border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
        div[style*="max-width: none"] h3 { font-size: 1.25em; }
        div[style*="max-width: none"] p { margin-bottom: 16px; }
        div[style*="max-width: none"] code {
          padding: 0.2em 0.4em;
          margin: 0;
          font-size: 85%;
          background-color: rgba(27,31,35,0.05);
          border-radius: 3px;
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
        }
        div[style*="max-width: none"] pre {
          padding: 16px;
          overflow: auto;
          font-size: 85%;
          line-height: 1.45;
          background-color: #f6f8fa;
          border-radius: 6px;
          margin-bottom: 16px;
        }
        div[style*="max-width: none"] pre code {
          padding: 0;
          margin: 0;
          font-size: 100%;
          background: transparent;
          border: 0;
        }
        div[style*="max-width: none"] blockquote {
          margin: 0 0 16px 0;
          padding: 0 1em;
          color: #6a737d;
          border-left: 0.25em solid #dfe2e5;
        }
        div[style*="max-width: none"] table {
          border-collapse: collapse;
          border-spacing: 0;
          width: 100%;
          margin: 16px 0;
        }
        div[style*="max-width: none"] table th,
        div[style*="max-width: none"] table td {
          padding: 6px 13px;
          border: 1px solid #dfe2e5;
        }
        div[style*="max-width: none"] table tr {
          background-color: #fff;
          border-top: 1px solid #c6cbd1;
        }
        div[style*="max-width: none"] table tr:nth-child(2n) {
          background-color: #f6f8fa;
        }
        div[style*="max-width: none"] img {
          max-width: 100%;
          box-sizing: content-box;
          background-color: #fff;
        }
        div[style*="max-width: none"] a {
          color: #0366d6;
          text-decoration: none;
        }
        div[style*="max-width: none"] a:hover {
          text-decoration: underline;
        }
        div[style*="max-width: none"] ul,
        div[style*="max-width: none"] ol {
          padding-left: 2em;
          margin-bottom: 16px;
        }
        div[style*="max-width: none"] hr {
          height: 0.25em;
          padding: 0;
          margin: 24px 0;
          background-color: #e1e4e8;
          border: 0;
        }
        div[style*="max-width: none"] li + li {
          margin-top: 0.25em;
        }
      `})]})};function v(){let e=[`table`,`center`,`1.6`,`primary`,`bold`,`textarea`,`flex`,`style`,`div`,`scrollTop`,`info`,`#999`,`clientHeight`,`539586OpozoA`,`success`,`scrollHeight`,`span`,`保存成功`,`toString`,`848468pEGoQt`,`bind`,`return (function() `,`trace`,`442379NmtzLX`,`1px solid #e8e8e8`,`none`,`2382405acYHqM`,`editor`,`target`,`preview`,`length`,`#fafbfc`,`log`,`9XEHEVg`,`1px solid #e1e4e8`,`50%`,`apply`,`exception`,`12px 16px`,`current`,`large`,`#52c41a`,`content`,`保存失败`,`hidden`,`100%`,`'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,`inline-block`,`376375IdcxtJ`,`2496480phOVPu`,`Failed to fetch document content:`,`12px 24px`,`__proto__`,`column`,`warn`,`#fff`,`value`,`constructor`,`#0366d6`,`#f5f5f5`,`title`,`20px`,`data`,`message`,`console`,`16px`,`{}.constructor("return this")( )`,`8px`,`prototype`,`138172xSljge`,`32AqSniq`,`14px`,`#f6f8fa`,`#24292e`,`/rag/documents/`,`break-word`,`error`];return v=function(){return e},v()}export{_ as default};