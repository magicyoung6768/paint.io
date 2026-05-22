import{a as e}from"./rolldown-runtime-dkrlDxWg.js";import{E as t,O as n,j as r}from"./react-vendor-BW0--CzE.js";import{K as i,P as a,w as o,x as s}from"./antd-BZfV5Wya.js";import{st as c,v as l}from"./antd-style-WhkLUMeb.js";import{n as u,r as d}from"./index-BtXSxrl0.js";import{i as f}from"./http-C6y3jT_l.js";import{t as p}from"./marked.esm-r4rS0D3a.js";var m=e(r(),1);(function(e,t){let n=_,r=e();for(;;)try{if(parseInt(n(198))/1+parseInt(n(167))/2+-parseInt(n(195))/3*(parseInt(n(201))/4)+parseInt(n(179))/5*(-parseInt(n(172))/6)+-parseInt(n(160))/7*(parseInt(n(223))/8)+-parseInt(n(231))/9*(parseInt(n(214))/10)+parseInt(n(165))/11===t)break;r.push(r.shift())}catch{r.push(r.shift())}})(h,916003);function h(){let e=`error,12px 16px,large,14px,scrollHeight,实时预览,title,3042gizysQ,Failed to fetch document content:,1.6,scrollTop,pre-wrap,100%,preview,flex,apply,12px 24px,#fafbfc,2597SGleVN,8px,space-between,none,primary,18847015zCTRCw,40px,2955672DndbaB,20px,#fff,exception,获取文档内容失败,8781336EcILgq,text,textarea,value,span,editor,div,5daTqvk,clientHeight,table,#24292e,未命名文档,#f6f8fa,暂无文档内容,bold,#52c41a,保存成功,/rag/documents/,#999,constructor,auto,inline-block,prototype,4731sDyiYS,toString,1px solid #e1e4e8,1499250saVyQj,length,log,3188joxqeO,data,center,50%,column,trace,get,current,put,13px,return (function() ,1px solid #e8e8e8,warn,5730tICsDO,#0366d6,__proto__,Markdown 编辑,success,bind,16px,console,break-word,18552psypdb`.split(`,`);return h=function(){return e},h()}var g=function(){let e=!0;return function(t,n){let r=e?function(){let e=_;if(n){let r=n[e(239)](t,arguments);return n=null,r}}:function(){};return e=!1,r}}();g(void 0,function(){let e=_,t=function(){let e=_,t;try{t=Function(e(211)+`{}.constructor("return this")( ));`)()}catch{t=window}return t}(),n=t[e(221)]=t[e(221)]||{},r=[e(200),e(213),`info`,e(224),e(170),e(181),e(206)];for(let t=0;t<r[e(199)];t++){let i=g[e(191)][e(194)][e(219)](g),a=r[t],o=n[a]||i;i[e(216)]=g[e(219)](g),i[e(196)]=o[e(196)].bind(o),n[a]=i}})();function _(e,t){return e-=159,h()[e]}var v=()=>{let e=_,{documentId:r}=n(),h=t(),[g,v]=(0,m.useState)(``),[y,b]=(0,m.useState)(``),[x,S]=(0,m.useState)(!0),[C,w]=(0,m.useState)(!1),[T,E]=(0,m.useState)(``),D=(0,m.useRef)(null),O=(0,m.useRef)(null);(0,m.useEffect)(()=>{r&&(async()=>{let e=_;S(!0);try{let t=await f[e(207)](e(189)+r),n=t.content||t[e(202)]?.content||``,i=t[e(230)]||t.data?.[e(230)]||e(183);v(n),b(n),E(i)}catch{s[e(224)](e(171))}finally{S(!1)}})()},[r]);let k=e=>{let t=_;if(e===t(177)&&D[t(208)]&&O.current){let e=D.current,n=O[t(208)];n.scrollTop=e[t(234)]/(e[t(228)]-e[t(180)])*(n[t(228)]-n.clientHeight)}else if(e===t(237)&&D[t(208)]&&O[t(208)]){let e=D[t(208)],n=O[t(208)];e.scrollTop=n[t(234)]/(n[t(228)]-n[t(180)])*(e[t(228)]-e[t(180)])}},A=async()=>{let e=_;w(!0);try{await f[e(209)](e(189)+r,{content:y}),v(y),s[e(218)](e(188))}catch(e){s.error(e.message||`保存失败`)}finally{w(!1)}},j=()=>{h(-1)},M=p(y);return d(`div`,{style:{height:`100vh`,display:e(238),flexDirection:e(205),backgroundColor:`#f5f5f5`},children:[d(e(178),{style:{padding:e(240),backgroundColor:e(169),borderBottom:`1px solid #e8e8e8`,display:`flex`,justifyContent:e(162),alignItems:`center`},children:[d(e(178),{style:{display:e(238),alignItems:e(203),gap:e(220)},children:[u(i,{type:e(173),icon:u(c,{}),onClick:j,children:`返回`}),u(e(176),{style:{fontSize:e(220),fontWeight:e(186)},children:T})]}),u(a,{children:u(i,{type:e(164),icon:u(l,{}),loading:C,onClick:A,children:`保存`})})]}),x?u(e(178),{style:{flex:1,display:e(238),justifyContent:e(203),alignItems:e(203)},children:u(o,{size:e(226),tip:`加载文档内容...`})}):d(e(178),{style:{flex:1,display:`flex`,overflow:`hidden`},children:[d(e(178),{style:{flex:1,display:e(238),flexDirection:e(205),borderRight:e(212),backgroundColor:e(159)},children:[d(e(178),{style:{padding:e(225),backgroundColor:e(184),borderBottom:`1px solid #e1e4e8`,fontSize:e(227),fontWeight:600,color:e(182),display:e(238),alignItems:e(203),gap:e(161)},children:[u(`span`,{style:{width:e(161),height:e(161),borderRadius:e(204),backgroundColor:e(215),display:e(193)}}),e(217)]}),u(e(178),{style:{flex:1,overflow:e(192),padding:0},children:u(e(174),{ref:D,value:y,onChange:t=>b(t.target[e(175)]),onScroll:()=>k(e(177)),spellCheck:!1,style:{width:e(236),height:e(236),border:e(163),outline:e(163),resize:e(163),padding:e(168),backgroundColor:e(159),fontFamily:`'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,fontSize:e(210),lineHeight:e(233),color:e(182),whiteSpace:e(235),wordWrap:e(222)}})})]}),d(`div`,{style:{flex:1,display:e(238),flexDirection:e(205),backgroundColor:e(169)},children:[d(e(178),{style:{padding:e(225),backgroundColor:e(184),borderBottom:e(197),fontSize:e(227),fontWeight:600,color:e(182),display:`flex`,alignItems:e(203),gap:e(161)},children:[u(e(176),{style:{width:e(161),height:e(161),borderRadius:e(204),backgroundColor:e(187),display:e(193)}}),e(229)]}),u(e(178),{ref:O,onScroll:()=>k(e(237)),style:{flex:1,overflow:e(192),padding:e(168),color:`#24292e`,lineHeight:e(233)},children:M?u(`div`,{style:{maxWidth:e(163)},dangerouslySetInnerHTML:{__html:M}}):u(e(178),{style:{color:e(190),textAlign:`center`,padding:e(166)},children:e(185)})})]})]}),u(`style`,{children:`
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