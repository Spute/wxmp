"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9354],{9354:(e,t,n)=>{function r(e){return{type:e,style:"keyword"}}n.r(t),n.d(t,{haxe:()=>ae,hxml:()=>ie});var a,i=r("keyword a"),o=r("keyword b"),l=r("keyword c"),u=r("operator"),c={type:"atom",style:"atom"},f={type:"attribute",style:"attribute"},s=r("typedef"),d={if:i,while:i,else:o,do:o,try:o,return:l,break:l,continue:l,new:l,throw:l,var:r("var"),inline:f,static:f,using:r("import"),public:f,private:f,cast:r("cast"),import:r("import"),macro:r("macro"),function:r("function"),catch:r("catch"),untyped:r("untyped"),callback:r("cb"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:u,never:r("property_access"),trace:r("trace"),class:s,abstract:s,enum:s,interface:s,typedef:s,extends:s,implements:s,dynamic:s,true:c,false:c,null:c},p=/[+\-*&%=<>!?|]/;function m(e,t,n){return t.tokenize=n,n(e,t)}function v(e,t){for(var n,r=!1;null!=(n=e.next());){if(n==t&&!r)return!0;r=!r&&"\\"==n}}function y(e,t,n){return s=e,a=n,t}function b(e,t){var n=e.next();if('"'==n||"'"==n)return m(e,t,(r=n,function(e,t){return v(e,r)&&(t.tokenize=b),y("string","string")}));if(/[\[\]{}\(\),;\:\.]/.test(n))return y(n);if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),y("number","number");if(/\d/.test(n)||"-"==n&&e.eat(/\d/))return e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),y("number","number");if(t.reAllowed&&"~"==n&&e.eat(/\//))return v(e,"/"),e.eatWhile(/[gimsu]/),y("regexp","string.special");if("/"==n)return e.eat("*")?m(e,t,h):e.eat("/")?(e.skipToEnd(),y("comment","comment")):(e.eatWhile(p),y("operator",null,e.current()));if("#"==n)return e.skipToEnd(),y("conditional","meta");if("@"==n)return e.eat(/:/),e.eatWhile(/[\w_]/),y("metadata","meta");if(p.test(n))return e.eatWhile(p),y("operator",null,e.current());if(/[A-Z]/.test(n))return e.eatWhile(/[\w_<>]/),y("type","type",a=e.current());e.eatWhile(/[\w_]/);var r,a=e.current(),i=d.propertyIsEnumerable(a)&&d[a];return i&&t.kwAllowed?y(i.type,i.style,a):y("variable","variable",a)}function h(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=b;break}r="*"==n}return y("comment","comment")}var k={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function x(e,t,n,r,a,i){this.indented=e,this.column=t,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function w(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0}function g(e,t){if(/[a-z]/.test(t.charAt(0)))return!1;for(var n=e.importedtypes.length,r=0;r<n;r++)if(e.importedtypes[r]==t)return!0}function A(e){for(var t=V.state,n=t.importedtypes;n;n=n.next)if(n.name==e)return;t.importedtypes={name:e,next:t.importedtypes}}var V={state:null,column:null,marked:null,cc:null};function S(){for(var e=arguments.length-1;e>=0;e--)V.cc.push(arguments[e])}function W(){return S.apply(null,arguments),!0}function z(e,t){for(var n=t;n;n=n.next)if(n.name==e)return!0;return!1}function T(e){var t=V.state;if(t.context){if(V.marked="def",z(e,t.localVars))return;t.localVars={name:e,next:t.localVars}}else if(t.globalVars){if(z(e,t.globalVars))return;t.globalVars={name:e,next:t.globalVars}}}var E={name:"this",next:null};function D(){V.state.context||(V.state.localVars=E),V.state.context={prev:V.state.context,vars:V.state.localVars}}function O(){V.state.localVars=V.state.context.vars,V.state.context=V.state.context.prev}function Z(e,t){var n=function(){var n=V.state;n.lexical=new x(n.indented,V.stream.column(),e,null,n.lexical,t)};return n.lex=!0,n}function P(){var e=V.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function _(e){return function t(n){return n==e?W():";"==e?S():W(t)}}function I(e){return"@"==e?W(F):"var"==e?W(Z("vardef"),Q,_(";"),P):"keyword a"==e?W(Z("form"),C,I,P):"keyword b"==e?W(Z("form"),I,P):"{"==e?W(Z("}"),D,M,P,O):";"==e?W():"attribute"==e?W(B):"function"==e?W(Y):"for"==e?W(Z("form"),_("("),Z(")"),U,_(")"),P,I,P):"variable"==e?W(Z("stat"),H):"switch"==e?W(Z("form"),C,Z("}","switch"),_("{"),M,P,P):"case"==e?W(C,_(":")):"default"==e?W(_(":")):"catch"==e?W(Z("form"),D,_("("),re,_(")"),I,P,O):"import"==e?W(q,_(";")):"typedef"==e?W(G):S(Z("stat"),C,_(";"),P)}function C(e){return k.hasOwnProperty(e)||"type"==e?W($):"function"==e?W(Y):"keyword c"==e?W(N):"("==e?W(Z(")"),N,_(")"),P,$):"operator"==e?W(C):"["==e?W(Z("]"),L(N,"]"),P,$):"{"==e?W(Z("}"),L(K,"}"),P,$):W()}function N(e){return e.match(/[;\}\)\],]/)?S():S(C)}function $(e,t){return"operator"==e&&/\+\+|--/.test(t)?W($):"operator"==e||":"==e?W(C):";"!=e?"("==e?W(Z(")"),L(C,")"),P,$):"."==e?W(J,$):"["==e?W(Z("]"),C,_("]"),P,$):void 0:void 0}function B(e){return"attribute"==e?W(B):"function"==e?W(Y):"var"==e?W(Q):void 0}function F(e){return":"==e||"variable"==e?W(F):"("==e?W(Z(")"),L(j,")"),P,I):void 0}function j(e){if("variable"==e)return W()}function q(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(A(t),W()):"variable"==e||"property"==e||"."==e||"*"==t?W(q):void 0}function G(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(A(t),W()):"type"==e&&/[A-Z]/.test(t.charAt(0))?W():void 0}function H(e){return":"==e?W(P,I):S($,_(";"),P)}function J(e){if("variable"==e)return V.marked="property",W()}function K(e){if("variable"==e&&(V.marked="property"),k.hasOwnProperty(e))return W(_(":"),C)}function L(e,t){function n(r){return","==r?W(e,n):r==t?W():W(_(t))}return function(r){return r==t?W():S(e,n)}}function M(e){return"}"==e?W():S(I,M)}function Q(e,t){return"variable"==e?(T(t),W(ee,R)):W()}function R(e,t){return"="==t?W(C,R):","==e?W(Q):void 0}function U(e,t){return"variable"==e?(T(t),W(X,C)):S()}function X(e,t){if("in"==t)return W()}function Y(e,t){return"variable"==e||"type"==e?(T(t),W(Y)):"new"==t?W(Y):"("==e?W(Z(")"),D,L(re,")"),P,ee,I,O):void 0}function ee(e){if(":"==e)return W(te)}function te(e){return"type"==e||"variable"==e?W():"{"==e?W(Z("}"),L(ne,"}"),P):void 0}function ne(e){if("variable"==e)return W(ee)}function re(e,t){if("variable"==e)return T(t),W(ee)}O.lex=!0,P.lex=!0;const ae={name:"haxe",startState:function(e){return{tokenize:b,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new x(-e,0,"block",!1),importedtypes:["Int","Float","String","Void","Std","Bool","Dynamic","Array"],context:null,indented:0}},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation()),e.eatSpace())return null;var n=t.tokenize(e,t);return"comment"==s?n:(t.reAllowed=!("operator"!=s&&"keyword c"!=s&&!s.match(/^[\[{}\(,;:]$/)),t.kwAllowed="."!=s,function(e,t,n,r,a){var i=e.cc;for(V.state=e,V.stream=a,V.marked=null,V.cc=i,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():I)(n,r)){for(;i.length&&i[i.length-1].lex;)i.pop()();return V.marked?V.marked:"variable"==n&&w(e,r)?"variableName.local":"variable"==n&&g(e,r)?"variableName.special":t}}(t,n,s,a,e))},indent:function(e,t,n){if(e.tokenize!=b)return 0;var r=t&&t.charAt(0),a=e.lexical;"stat"==a.type&&"}"==r&&(a=a.prev);var i=a.type,o=r==i;return"vardef"==i?a.indented+4:"form"==i&&"{"==r?a.indented:"stat"==i||"form"==i?a.indented+n.unit:"switch"!=a.info||o?a.align?a.column+(o?0:1):a.indented+(o?0:n.unit):a.indented+(/^(?:case|default)\b/.test(t)?n.unit:2*n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}},ie={name:"hxml",startState:function(){return{define:!1,inString:!1}},token:function(e,t){var n=e.peek(),r=e.sol();if("#"==n)return e.skipToEnd(),"comment";if(r&&"-"==n){var a="variable-2";return e.eat(/-/),"-"==e.peek()&&(e.eat(/-/),a="keyword a"),"D"==e.peek()&&(e.eat(/[D]/),a="keyword c",t.define=!0),e.eatWhile(/[A-Z]/i),a}n=e.peek();return 0==t.inString&&"'"==n&&(t.inString=!0,e.next()),1==t.inString?(e.skipTo("'")||e.skipToEnd(),"'"==e.peek()&&(e.next(),t.inString=!1),"string"):(e.next(),null)},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=9354.b9cff541.chunk.js.map