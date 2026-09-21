import{a as e}from"./rolldown-runtime-BegEFbQ0.js";import{D as t,M as n,k as r}from"./react-vendor-CMKxyh_P.js";import{C as i,M as a,U as o,b as s}from"./antd-DOZUXIYe.js";import{nt as c,y as l}from"./antd-style-B0-ACxV5.js";import{n as u,r as d}from"./index-DcYn7Sqq.js";import{i as f}from"./http-FcKfoB-t.js";import{t as p}from"./marked.esm-D7XPuK9w.js";var m=e(n(),1);(function(e,t){let n=g,r=e();for(;;)try{if(parseInt(n(396))/1+parseInt(n(393))/2+-parseInt(n(374))/3+-parseInt(n(405))/4+-parseInt(n(415))/5*(-parseInt(n(412))/6)+-parseInt(n(352))/7+parseInt(n(353))/8===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(v,823991);var h=function(){let e=!0;return function(t,n){let r=e?function(){let e=g;if(n){let r=n[e(385)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();h(void 0,function(){let e=g,t=function(){let e=g,t;try{t=Function(`return (function() `+e(369)+`);`)()}catch{t=window}return t}(),n=t.console=t[e(348)]||{},r=[`log`,e(349),`info`,e(383),`exception`,e(363),e(387)];for(let t=0;t<r.length;t++){let i=h[e(386)][e(390)].bind(h),a=r[t],o=n[a]||i;i[e(367)]=h[e(416)](h),i[e(395)]=o[e(395)].bind(o),n[a]=i}})();function g(e,t){return e-=348,v()[e]}var _=()=>{let e=g,{documentId:n}=r(),h=t(),[_,v]=(0,m.useState)(``),[y,b]=(0,m.useState)(``),[x,S]=(0,m.useState)(!0),[C,w]=(0,m.useState)(!1),[T,E]=(0,m.useState)(``),D=(0,m.useRef)(null),O=(0,m.useRef)(null);(0,m.useEffect)(()=>{n&&(async()=>{let e=g;S(!0);try{let t=await f[e(417)](`/rag/documents/`+n),r=t[e(379)]||t[e(384)]?.[e(379)]||``,i=t[e(397)]||t[e(384)]?.title||e(404);v(r),b(r),E(i)}catch{s[e(383)](e(408))}finally{S(!1)}})()},[n]);let k=e=>{let t=g;if(e===t(424)&&D[t(394)]&&O[t(394)]){let e=D.current,n=O[t(394)],r=e.scrollTop/(e[t(350)]-e[t(423)]);n[t(407)]=r*(n[t(350)]-n.clientHeight)}else if(e===t(356)&&D[t(394)]&&O[t(394)]){let e=D.current,n=O[t(394)];e.scrollTop=n[t(407)]/(n[t(350)]-n[t(423)])*(e.scrollHeight-e[t(423)])}},A=async()=>{let e=g;w(!0);try{await f[e(418)](`/rag/documents/`+n,{content:y}),v(y),s[e(361)](`保存成功`)}catch(t){s.error(t[e(401)]||e(406))}finally{w(!1)}},j=()=>{h(-1)},M=p(y);return d(e(373),{style:{height:e(362),display:e(422),flexDirection:e(398),backgroundColor:e(371)},children:[d(`div`,{style:{padding:e(380),backgroundColor:e(381),borderBottom:e(375),display:e(422),justifyContent:`space-between`,alignItems:e(372)},children:[d(`div`,{style:{display:`flex`,alignItems:e(372),gap:e(388)},children:[u(o,{type:e(410),icon:u(c,{}),onClick:j,children:`返回`}),u(`span`,{style:{fontSize:e(388),fontWeight:e(399)},children:T})]}),u(a,{children:u(o,{type:e(357),icon:u(l,{}),loading:C,onClick:A,children:`保存`})})]}),x?u(e(373),{style:{flex:1,display:`flex`,justifyContent:e(372),alignItems:e(372)},children:u(i,{size:e(358),tip:e(420)})}):d(e(373),{style:{flex:1,display:`flex`,overflow:e(354)},children:[d(`div`,{style:{flex:1,display:e(422),flexDirection:e(398),borderRight:e(375),backgroundColor:`#fafbfc`},children:[d(`div`,{style:{padding:e(368),backgroundColor:e(421),borderBottom:`1px solid #e1e4e8`,fontSize:`14px`,fontWeight:600,color:e(360),display:e(422),alignItems:e(372),gap:e(359)},children:[u(e(419),{style:{width:e(359),height:e(359),borderRadius:e(403),backgroundColor:`#0366d6`,display:e(378)}}),e(355)]}),u(e(373),{style:{flex:1,overflow:e(400),padding:0},children:u(e(365),{ref:D,value:y,onChange:t=>b(t[e(382)].value),onScroll:()=>k(`editor`),spellCheck:!1,style:{width:`100%`,height:`100%`,border:e(414),outline:`none`,resize:e(414),padding:e(377),backgroundColor:e(364),fontFamily:e(402),fontSize:e(370),lineHeight:e(392),color:e(360),whiteSpace:e(351),wordWrap:e(411)}})})]}),d(e(373),{style:{flex:1,display:e(422),flexDirection:e(398),backgroundColor:e(381)},children:[d(e(373),{style:{padding:`12px 16px`,backgroundColor:e(421),borderBottom:`1px solid #e1e4e8`,fontSize:e(409),fontWeight:600,color:e(360),display:e(422),alignItems:e(372),gap:e(359)},children:[u(e(419),{style:{width:e(359),height:e(359),borderRadius:`50%`,backgroundColor:`#52c41a`,display:`inline-block`}}),e(391)]}),u(`div`,{ref:O,onScroll:()=>k(e(356)),style:{flex:1,overflow:e(400),padding:e(377),color:e(360),lineHeight:e(392)},children:M?u(e(373),{style:{maxWidth:e(414)},dangerouslySetInnerHTML:{__html:M}}):u(`div`,{style:{color:`#999`,textAlign:e(372),padding:`40px`},children:e(389)})})]})]}),u(e(376),{children:e(413)})]})};function v(){let e=[`large`,`8px`,`#24292e`,`success`,`100vh`,`table`,`#fafbfc`,`textarea`,`Failed to fetch document content:`,`__proto__`,`12px 16px`,`{}.constructor("return this")( )`,`13px`,`#f5f5f5`,`center`,`div`,`3245859ZCVQbF`,`1px solid #e8e8e8`,`style`,`20px`,`inline-block`,`content`,`12px 24px`,`#fff`,`target`,`error`,`data`,`apply`,`constructor`,`trace`,`16px`,`暂无文档内容`,`prototype`,`实时预览`,`1.6`,`55164vanfzm`,`current`,`toString`,`623633Gfrhov`,`title`,`column`,`bold`,`auto`,`message`,`'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,`50%`,`未命名文档`,`5037836eiVXbb`,`保存失败`,`scrollTop`,`获取文档内容失败`,`14px`,`text`,`break-word`,`1918512TAaIcA`,`
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
      `,`none`,`5FYOYnQ`,`bind`,`get`,`put`,`span`,`加载文档内容...`,`#f6f8fa`,`flex`,`clientHeight`,`editor`,`console`,`warn`,`scrollHeight`,`pre-wrap`,`7498855wFAwdy`,`26125608LYhxXB`,`hidden`,`Markdown 编辑`,`preview`,`primary`];return v=function(){return e},v()}export{_ as default};