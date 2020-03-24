(this.webpackJsonpplayground=this.webpackJsonpplayground||[]).push([[2],{20:function(e,t,n){e.exports=n(56)},25:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var o=n(4),i=n(5),a=n(7),r=n(6),l=n(8),s=n(0),c=n.n(s),u=n(16),p=n.n(u),h=(n(25),n(9)),d=n(13),f=n(17);function g(e){var t=e.backgroundColor;return c.a.createElement("div",{className:"verticallyCenter horizontallyCenter fillHeight",style:{backgroundColor:t}},c.a.createElement(f.BeatLoader,{color:"#fff",loading:!0,size:25}))}var m=function(e){function t(e){var i;Object(o.a)(this,t),(i=Object(a.a)(this,Object(r.a)(t).call(this,e))).editor=void 0,i.lastScrollTop=0,i.state={editorComponent:void 0},i.editorDidMount=i.editorDidMount.bind(Object(h.a)(i));var l=Promise.all([n.e(0),n.e(7)]).then(n.t.bind(null,295,7));return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,355)).then((function(e){e.languages.typescript.typescriptDefaults.setCompilerOptions({noLib:!0,target:e.languages.typescript.ScriptTarget.ESNext,allowNonTsExtensions:!0}),e.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSyntaxValidation:!0,noSemanticValidation:!0}),e.editor.defineTheme("dprint-theme",{base:"vs-dark",inherit:!0,rules:[],colors:{"editorRuler.foreground":"#283430"}}),l.then((function(e){i.setState({editorComponent:e.default})})).catch((function(e){console.log(e),i.setState({editorComponent:!1})}))})).catch((function(e){console.log(e),i.setState({editorComponent:!1})})),i}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.updateScrollTop(),c.a.createElement("div",{id:"codeEditor"},this.getEditor())}},{key:"getEditor",value:function(){var e=this;return null==this.state.editorComponent?c.a.createElement(g,{backgroundColor:"#1e1e1e"}):!1===this.state.editorComponent?c.a.createElement("div",{className:"errorMessage"},"Error loading code editor. Please refresh the page to try again."):c.a.createElement(this.state.editorComponent,{width:"100%",height:"100%",value:this.props.text,theme:"dprint-theme",language:"typescript",onChange:function(t){return e.props.onChange&&e.props.onChange(t)},editorDidMount:this.editorDidMount,options:{automaticLayout:!0,renderWhitespace:"all",readOnly:this.props.readonly||!1,minimap:{enabled:!1},quickSuggestions:!1,rulers:[this.props.lineWidth]}})}},{key:"editorDidMount",value:function(e){var t=this;this.editor=e,this.editor.onDidChangeModelContent((function(){t.props.readonly&&t.editor.setPosition({column:1,lineNumber:1})})),this.editor.onDidScrollChange((function(e){e.scrollTopChanged&&t.props.onScrollTopChange&&t.props.onScrollTopChange(e.scrollTop)}))}},{key:"updateScrollTop",value:function(){var e=this;null!=this.editor&&this.lastScrollTop!==this.props.scrollTop&&setTimeout((function(){e.editor.setScrollTop(e.props.scrollTop),e.lastScrollTop=e.props.scrollTop}),0)}}]),t}(c.a.Component),v=n(19),C=n(11),b=(n(53),["always","prefer","asi"]),y=["alwaysDouble","alwaysSingle","preferDouble","preferSingle"],S=["maintain","whenNotSingleLine","always","preferNone"],T=["maintain","sameLine","nextLine","nextLineIfHanging"],E=["maintain","sameLine","nextLine"],x=["maintain","sameLine","nextLine"],O=["maintain","sameLine","nextLine"],w=["never","always","onlyMultiLine"],j=["force","maintain","preferNone"],k=["newline","blankline","maintain"],F=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"configuration"},c.a.createElement(U,{title:"Line width"},this.getNumberConfig("lineWidth")),c.a.createElement(U,{title:"Indent width"},this.getNumberConfig("indentWidth")),c.a.createElement(U,{title:"Use tabs"},this.getBooleanConfig("useTabs")),c.a.createElement(U,{title:"Semicolons"},this.getSelectForConfig("semiColons",b)),c.a.createElement(U,{title:"Quote style"},this.getSelectForConfig("quoteStyle",y)),c.a.createElement(U,{title:"Use braces"},this.getSelectForConfig("useBraces",S)),c.a.createElement(U,{title:"Brace position"},this.getSelectForConfig("bracePosition",T)),c.a.createElement(U,{title:"Single body position"},this.getSelectForConfig("singleBodyPosition",E)),c.a.createElement(U,{title:"Operator position"},this.getSelectForConfig("operatorPosition",O)),c.a.createElement(U,{title:"Next control flow position"},this.getSelectForConfig("nextControlFlowPosition",x)),c.a.createElement(U,{title:"Trailing commas"},this.getSelectForConfig("trailingCommas",w)),c.a.createElement(U,{title:"Prefer hanging"},this.getBooleanConfig("preferHanging")),c.a.createElement(U,{title:"Arrow Function - Use parentheses"},this.getSelectForConfig("arrowFunction.useParentheses",j)),c.a.createElement(U,{title:"Enum member spacing"},this.getSelectForConfig("enumDeclaration.memberSpacing",k)))}},{key:"getBooleanConfig",value:function(e){var t=this,n=this.props.config;return c.a.createElement("input",{type:"checkbox",checked:n[e],onChange:function(){return t.updateConfig(Object(C.a)({},e,!n[e]))}})}},{key:"getSelectForConfig",value:function(e,t){var n=this,o=this.props.config;return c.a.createElement("select",{value:o[e],onChange:function(t){return n.updateConfig(Object(C.a)({},e,t.target.value))}},t.map((function(e,t){return c.a.createElement("option",{key:t,value:e},e)})))}},{key:"getNumberConfig",value:function(e){var t=this,n=this.props.config;return c.a.createElement("input",{type:"number",inputMode:"numeric",value:n[e],onChange:function(n){var o=Math.max(0,Math.round(n.target.valueAsNumber));t.updateConfig(Object(C.a)({},e,o))}})}},{key:"updateConfig",value:function(e){this.props.onUpdateConfig(Object(v.a)({},this.props.config,{},e))}}]),t}(c.a.Component),U=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"configurationItem"},c.a.createElement("label",null,this.props.title,":",this.props.children))}}]),t}(c.a.Component);function P(e){return c.a.createElement("a",{id:e.id,href:e.url,rel:"noopener noreferrer"},e.text)}var N=n(12),W=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,[{key:"getUrlInfo",value:function(){var e=document.location.hash||"";return{text:function(){var t=/code\/([^/]+)/.exec(e);if(null==t||2!==t.length)return"";try{return D(t[1])}catch(n){return console.error(n),""}}(),config:function(){var t=/config\/([^/]+)/.exec(e);if(null==t||2!==t.length)return{lineWidth:80};try{return JSON.parse(D(t[1]))}catch(n){return console.error(n),{lineWidth:80}}}()}}},{key:"updateUrl",value:function(e){var t=e.text,n=e.config;window.history.replaceState(void 0,"","#code/".concat(Object(N.compressToEncodedURIComponent)(t),"/config/").concat(Object(N.compressToEncodedURIComponent)(JSON.stringify(n))))}}]),e}();function D(e){return Object(N.decompressFromEncodedURIComponent)(e.trim())||""}n(54),n(55);var L=new W,B=function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(a.a)(this,Object(r.a)(t).call(this,e))).formatText=void 0,n.resolveConfig=void 0,n.lastUpdateTimeout=void 0,n.formatText=e.formatText,n.resolveConfig=e.resolveConfig;var i=L.getUrlInfo(),l=i.text,s=i.config,c=n.resolveConfig(s),u={lineWidth:c.lineWidth,indentWidth:c.indentWidth,useTabs:c.useTabs,semiColons:c.semiColons,quoteStyle:c.quoteStyle,trailingCommas:c["tupleType.trailingCommas"],useBraces:c["ifStatement.useBraces"],bracePosition:c["arrowFunction.bracePosition"],singleBodyPosition:c["ifStatement.singleBodyPosition"],nextControlFlowPosition:c["ifStatement.nextControlFlowPosition"],operatorPosition:c["binaryExpression.operatorPosition"],preferHanging:c["arrayExpression.preferHanging"],"enumDeclaration.memberSpacing":c["enumDeclaration.memberSpacing"],"arrowFunction.useParentheses":c["arrowFunction.useParentheses"]};return n.state={text:l,formattedText:n.formatText(l,u),scrollTop:0,config:u},n.onConfigUpdate=n.onConfigUpdate.bind(Object(h.a)(n)),n.onTextChange=n.onTextChange.bind(Object(h.a)(n)),n.onScrollTopChange=n.onScrollTopChange.bind(Object(h.a)(n)),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d.a,{split:"horizontal",defaultSize:50,allowResize:!1},c.a.createElement("header",{className:"appHeader"},c.a.createElement("h1",{id:"title"},"dprint - Playground"),c.a.createElement("div",{id:"headerRight"},c.a.createElement("a",{href:"/"},"Overview"),c.a.createElement("a",{href:"/playground"},"Playground"),c.a.createElement(P,{url:"https://github.com/dsherret/dprint",text:"View on GitHub"}))),c.a.createElement(d.a,{split:"vertical",minSize:50,defaultSize:200,allowResize:!1},c.a.createElement(F,{config:this.state.config,onUpdateConfig:this.onConfigUpdate}),c.a.createElement(d.a,{split:"vertical",minSize:50,defaultSize:"50%",allowResize:!1,pane1Style:{overflowX:"hidden",overflowY:"hidden"},pane2Style:{overflowX:"hidden",overflowY:"hidden"}},c.a.createElement(m,{onChange:this.onTextChange,text:this.state.text,lineWidth:this.state.config.lineWidth||80,onScrollTopChange:this.onScrollTopChange,scrollTop:this.state.scrollTop}),c.a.createElement(m,{text:this.state.formattedText,readonly:!0,lineWidth:this.state.config.lineWidth||80,onScrollTopChange:this.onScrollTopChange,scrollTop:this.state.scrollTop})))))}},{key:"onConfigUpdate",value:function(e){this.setState({config:e,formattedText:this.getFormattedText(e)}),this.updateUrl({text:this.state.text,config:e})}},{key:"onTextChange",value:function(e){var t=this;null!=this.lastUpdateTimeout&&clearTimeout(this.lastUpdateTimeout),this.setState({text:e}),this.lastUpdateTimeout=setTimeout((function(){t.setState({formattedText:t.getFormattedText()}),t.updateUrl({text:e,config:t.state.config})}),250)}},{key:"updateUrl",value:function(e){L.updateUrl(e)}},{key:"getFormattedText",value:function(e){return this.formatText(this.state.text,e||this.state.config)}},{key:"onScrollTopChange",value:function(e){this.setState({scrollTop:e})}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(a.a)(this,Object(r.a)(t).call(this,e))).state={formatText:void 0,resolveConfig:void 0},n.e(6).then(n.bind(null,106)).then((function(e){i.setState({formatText:function(t,n){return e.format_text(t,z(n))},resolveConfig:function(t){return JSON.parse(e.resolve_config(z(t)))}})})).catch(console.error),i}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return null==this.state.formatText||null==this.state.resolveConfig?c.a.createElement(g,null):c.a.createElement(B,{formatText:this.state.formatText,resolveConfig:this.state.resolveConfig})}}]),t}(c.a.Component);function z(e){for(var t=new Map,n=0,o=Object.keys(e);n<o.length;n++){var i=o[n],a=e[i];if(null!=a){if("string"!==typeof a&&"boolean"!==typeof a&&"number"!==typeof a)throw new Error("Not supported value type '".concat(typeof a,"' for key '").concat(i,"'."));t.set(i,a.toString())}}return t}p.a.render(c.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,3,5]]]);
//# sourceMappingURL=main.7ff33bc7.chunk.js.map