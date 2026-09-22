import{a as e}from"./rolldown-runtime-D2ob17Bc.js";import{A as t,N as n,O as r}from"./react-vendor-DLYne9ac.js";import{C as i,M as a,U as o,b as s}from"./antd-C2_0VkJo.js";import{nt as c,y as l}from"./antd-style-CCOxD768.js";import{n as u,r as d}from"./index-D8vAevxx.js";import{i as f}from"./http-foNIYXyw.js";import{t as p}from"./marked.esm-D7XPuK9w.js";var m=e(n(),1);function h(e,t){return e-=378,g()[e]}function g(){let e=[`/rag/documents/`,`#52c41a`,`#fff`,`editor`,`134PeIuoj`,`style`,`保存成功`,`12px 24px`,`get`,`break-word`,`100%`,`scrollTop`,`#f6f8fa`,`50%`,`content`,`6497992BeYLxK`,`current`,`message`,`exception`,`__proto__`,`13px`,`{}.constructor("return this")( )`,`column`,`put`,`hidden`,`#999`,`4040524QJUtbq`,`large`,`space-between`,`获取文档内容失败`,`bind`,`inline-block`,`40px`,`Markdown 编辑`,`target`,`table`,`369970xJdaXd`,`scrollHeight`,`100vh`,`trace`,`暂无文档内容`,`auto`,`flex`,`#24292e`,`9CMVwhs`,`1831956GSuaVw`,`12px 16px`,`'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,`toString`,`success`,`1px solid #e8e8e8`,`8px`,`span`,`1px solid #e1e4e8`,`14px`,`text`,`保存失败`,`12074NsHUxI`,`none`,`1.6`,`console`,`7KtNBVZ`,`16px`,`title`,`bold`,`preview`,`clientHeight`,`center`,`apply`,`#fafbfc`,`5411923ddgZFC`,`div`,`info`,`error`,`8833900xiTEeF`,`实时预览`,`constructor`,`3NFIKxZ`,`未命名文档`];return g=function(){return e},g()}(function(e,t){let n=h,r=e();for(;;)try{if(-parseInt(n(448))/1*(parseInt(n(422))/2)+-parseInt(n(442))/3*(parseInt(n(391))/4)+-parseInt(n(401))/5+parseInt(n(410))/6+-parseInt(n(426))/7*(-parseInt(n(380))/8)+-parseInt(n(409))/9*(-parseInt(n(439))/10)+parseInt(n(435))/11===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(g,599875);var _=function(){let e=!0;return function(t,n){let r=e?function(){let e=h;if(n){let r=n[e(433)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();_(void 0,function(){let e=h,t=function(){let e=h,t;try{t=Function(`return (function() `+e(386)+`);`)()}catch{t=window}return t}(),n=t.console=t[e(425)]||{},r=[`log`,`warn`,e(437),e(438),e(383),e(400),e(404)];for(let t=0;t<r.length;t++){let i=_[e(441)].prototype[e(395)](_),a=r[t],o=n[a]||i;i[e(384)]=_[e(395)](_),i[e(413)]=o[e(413)][e(395)](o),n[a]=i}})();var v=()=>{let e=h,{documentId:n}=t(),g=r(),[_,v]=(0,m.useState)(``),[y,b]=(0,m.useState)(``),[x,S]=(0,m.useState)(!0),[C,w]=(0,m.useState)(!1),[T,E]=(0,m.useState)(``),D=(0,m.useRef)(null),O=(0,m.useRef)(null);(0,m.useEffect)(()=>{n&&(async()=>{let e=h;S(!0);try{let t=await f[e(452)](e(444)+n),r=t[e(379)]||t.data?.[e(379)]||``,i=t.title||t.data?.[e(428)]||e(443);v(r),b(r),E(i)}catch{s[e(438)](e(394))}finally{S(!1)}})()},[n]);let k=e=>{let t=h;if(e===t(447)&&D[t(381)]&&O.current){let e=D[t(381)],n=O[t(381)],r=e[t(455)]/(e.scrollHeight-e[t(431)]);n[t(455)]=r*(n[t(402)]-n[t(431)])}else if(e===t(430)&&D[t(381)]&&O[t(381)]){let e=D[t(381)],n=O.current,r=n[t(455)]/(n.scrollHeight-n[t(431)]);e[t(455)]=r*(e.scrollHeight-e[t(431)])}},A=async()=>{let e=h;w(!0);try{await f[e(388)](e(444)+n,{content:y}),v(y),s[e(414)](e(450))}catch(t){s[e(438)](t[e(382)]||e(421))}finally{w(!1)}},j=()=>{g(-1)},M=p(y);return d(e(436),{style:{height:e(403),display:e(407),flexDirection:e(387),backgroundColor:`#f5f5f5`},children:[d(e(436),{style:{padding:e(451),backgroundColor:e(446),borderBottom:e(415),display:`flex`,justifyContent:e(393),alignItems:`center`},children:[d(`div`,{style:{display:`flex`,alignItems:e(432),gap:`16px`},children:[u(o,{type:e(420),icon:u(c,{}),onClick:j,children:`返回`}),u(`span`,{style:{fontSize:e(427),fontWeight:e(429)},children:T})]}),u(a,{children:u(o,{type:`primary`,icon:u(l,{}),loading:C,onClick:A,children:`保存`})})]}),x?u(e(436),{style:{flex:1,display:e(407),justifyContent:e(432),alignItems:e(432)},children:u(i,{size:e(392),tip:`加载文档内容...`})}):d(`div`,{style:{flex:1,display:e(407),overflow:e(389)},children:[d(e(436),{style:{flex:1,display:e(407),flexDirection:e(387),borderRight:`1px solid #e8e8e8`,backgroundColor:e(434)},children:[d(e(436),{style:{padding:e(411),backgroundColor:e(456),borderBottom:e(418),fontSize:e(419),fontWeight:600,color:e(408),display:e(407),alignItems:e(432),gap:e(416)},children:[u(`span`,{style:{width:e(416),height:e(416),borderRadius:`50%`,backgroundColor:`#0366d6`,display:e(396)}}),e(398)]}),u(e(436),{style:{flex:1,overflow:e(406),padding:0},children:u(`textarea`,{ref:D,value:y,onChange:t=>b(t[e(399)].value),onScroll:()=>k(e(447)),spellCheck:!1,style:{width:e(454),height:e(454),border:e(423),outline:e(423),resize:e(423),padding:`20px`,backgroundColor:`#fafbfc`,fontFamily:e(412),fontSize:e(385),lineHeight:e(424),color:e(408),whiteSpace:`pre-wrap`,wordWrap:e(453)}})})]}),d(e(436),{style:{flex:1,display:e(407),flexDirection:`column`,backgroundColor:e(446)},children:[d(`div`,{style:{padding:e(411),backgroundColor:e(456),borderBottom:e(418),fontSize:e(419),fontWeight:600,color:e(408),display:e(407),alignItems:e(432),gap:`8px`},children:[u(e(417),{style:{width:e(416),height:e(416),borderRadius:e(378),backgroundColor:e(445),display:e(396)}}),e(440)]}),u(e(436),{ref:O,onScroll:()=>k(e(430)),style:{flex:1,overflow:e(406),padding:`20px`,color:e(408),lineHeight:e(424)},children:M?u(e(436),{style:{maxWidth:e(423)},dangerouslySetInnerHTML:{__html:M}}):u(e(436),{style:{color:e(390),textAlign:e(432),padding:e(397)},children:e(405)})})]})]}),u(e(449),{children:`
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
      `})]})};export{v as default};