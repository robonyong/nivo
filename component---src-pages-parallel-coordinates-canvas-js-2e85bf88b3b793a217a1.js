(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"1jim":function(e,t,n){"use strict";n.r(t);n("1c7q");var a=n("mXGw"),r=n.n(a),i=n("HVn3"),o=n.n(i),c=n("SWlz"),l=n("6zZa"),s=n("ZS2m"),u=n("1XzN"),d=n.n(u),f=n("WwFt"),y=n("UnPv"),p=n("YKTd"),m={variables:p.a,margin:{top:50,right:60,bottom:50,left:60},layout:c.d.layout,curve:c.d.curve,colors:c.d.colors,colorBy:c.d.colorBy,strokeWidth:1,lineOpacity:.2,axesPlan:c.d.axesPlan,axesTicksPosition:c.d.axesTicksPosition,pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1},b=function(){return Object(l.h)({size:320})};t.default=function(){return r.a.createElement(s.a,{name:"ParallelCoordinatesCanvas",meta:d.a.ParallelCoordinatesCanvas,icon:"parallel-coordinates",flavors:d.a.flavors,currentFlavor:"canvas",properties:y.a,initialProperties:m,defaultProperties:c.d,propertiesMapper:f.a,generateData:b,getDataSize:function(){return 320}},(function(e,t,n){return r.a.createElement(c.c,Object.assign({data:t},e,{theme:o()({},n,{axis:{ticks:{line:{strokeWidth:2,strokeLinecap:"square"}},domain:{line:{strokeWidth:2,strokeLinecap:"square"}}}})}))}))}},SWlz:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return S})),n.d(t,"c",(function(){return W})),n.d(t,"d",(function(){return v}));n("1c7q"),n("sdqY"),n("jr56"),n("Eb4t"),n("VlJN"),n("YjJN"),n("IYjZ"),n("wDqy"),n("yvkl"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3");var a=n("mXGw"),r=n.n(a),i=n("5QYd"),o=n("ySTC"),c=n("W0B4"),l=n.n(c),s=n("llhf"),u=n("aBO9"),d=n("wbYc"),f=n("fWs0"),y=n("56Mt");function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={key:l.a.string.isRequired,ticksPosition:l.a.oneOf(["before","after"]),tickSize:l.a.number,tickPadding:l.a.number,tickRotation:l.a.number,format:l.a.oneOfType([l.a.func,l.a.string]),legend:l.a.node,legendPosition:l.a.oneOf(["start","middle","end"]),legendOffset:l.a.number},h={data:l.a.arrayOf(l.a.object).isRequired,variables:l.a.arrayOf(l.a.oneOfType([l.a.shape(b(b({},g),{},{key:l.a.string.isRequired,type:l.a.oneOf(["point"]).isRequired,padding:l.a.number,values:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.number])),tickValues:l.a.arrayOf(l.a.oneOfType([l.a.string,l.a.number]))})),l.a.shape(b(b({},g),{},{type:l.a.oneOf(["linear"]).isRequired,min:l.a.oneOfType([l.a.number,l.a.oneOf(["auto"])]),max:l.a.oneOfType([l.a.number,l.a.oneOf(["auto"])]),tickValues:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)])}))])).isRequired,layout:l.a.oneOf(["horizontal","vertical"]).isRequired,curve:i.O.isRequired,strokeWidth:l.a.number.isRequired,lineOpacity:l.a.number.isRequired,axesPlan:l.a.oneOf(["foreground","background"]).isRequired,axesTicksPosition:l.a.oneOf(["before","after"]).isRequired,colors:s.p.isRequired},v=(b(b({},h),{},{role:l.a.string.isRequired}),{layout:"horizontal",curve:"linear",colors:{scheme:"yellow_orange_red"},strokeWidth:2,lineOpacity:.35,axesPlan:"foreground",axesTicksPosition:"after",animate:!0,motionConfig:"gentle"}),x=b(b({},v),{},{role:"img"});function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function O(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=function(e){var t=e.width,n=e.height,r=e.data,o=e.variables,c=e.layout,l=e.colors,f=e.curve,y=Object(s.s)(l,"index"),p=Object(a.useMemo)((function(){return Object(u.u)().x((function(e){return e.x})).y((function(e){return e.y})).curve(Object(i.y)(f))}),[f]),m=Object(a.useMemo)((function(){return function(e){var t=e.width,n=e.height,a=e.data,r=e.variables,i=e.layout,o=Object(d.e)().range("horizontal"===i?[0,t]:[n,0]).domain(r.map((function(e){return e.key}))),c="horizontal"===i?[n,0]:[0,t],l=r.map((function(e){var t,n=new Set;if(a.forEach((function(t){return n.add(t[e.key])})),"linear"===e.type){var r=void 0!==e.min&&"auto"!==e.min?e.min:Math.min.apply(Math,O(Array.from(n))),i=void 0!==e.max&&"auto"!==e.max?e.max:Math.max.apply(Math,O(Array.from(n)));t=Object(d.b)().rangeRound(c).domain([r,i])}return"point"===e.type&&(t=Object(d.e)().range(c).domain(e.values||n),void 0!==e.padding&&t.padding(e.padding)),b(b({},e),{},{scale:t,values:Array.from(n)})})),s=a.map((function(e,t){var n=l.map((function(t){return{x:"horizontal"===i?o(t.key):t.scale(e[t.key]),y:"horizontal"===i?t.scale(e[t.key]):o(t.key)}}));return b(b({index:t},e),{},{points:n})}));return{variablesScale:o,variablesWithScale:l,dataWithPoints:s}}({width:t,height:n,data:r,variables:o,layout:c})}),[t,n,r,o,c]);return{variablesScale:m.variablesScale,variablesWithScale:m.variablesWithScale,dataWithPoints:m.dataWithPoints,getLineColor:y,lineGenerator:p}},j=Object(a.memo)((function(e){var t=e.data,n=e.variables;return r.a.createElement(y.d,{rows:n.map((function(e){return[e.key,r.a.createElement("strong",null,t[e.key])]}))})})),w=Object(a.memo)((function(e){var t=e.data,n=e.variables,o=e.lineGenerator,c=e.points,l=e.strokeWidth,s=e.color,u=e.opacity,d=Object(y.h)(),p=d.showTooltipFromEvent,m=d.hideTooltip,b=Object(a.useCallback)((function(e){p(r.a.createElement(j,{data:t,variables:n}),e)}),[t,n]),g=Object(i.ob)(),h=g.animate,v=g.config,x=Object(f.c)({path:o(c),color:s,opacity:u,config:v,immediate:!h});return r.a.createElement(f.a.path,{d:x.path,stroke:x.color,strokeWidth:l,strokeLinecap:"round",opacity:x.opacity,fill:"none",onMouseEnter:b,onMouseMove:b,onMouseLeave:m})})),T=Object(i.rb)((function(e){var t=e.data,n=e.variables,a=e.layout,c=e.width,l=e.height,s=e.margin,u=e.axesPlan,d=e.axesTicksPosition,f=e.strokeWidth,y=e.lineOpacity,p=e.curve,m=e.colors,b=e.role,g=Object(i.mb)(c,l,s),h=g.margin,v=g.innerWidth,x=g.innerHeight,k=g.outerWidth,O=g.outerHeight,j=P({width:v,height:x,data:t,variables:n,layout:a,colors:m,curve:p}),T=j.variablesScale,S=j.variablesWithScale,E=j.dataWithPoints,W=j.lineGenerator,R=j.getLineColor,q=S.map((function(e){return r.a.createElement(o.b,{key:e.key,axis:"horizontal"===a?"y":"x",length:"horizontal"===a?x:v,x:"horizontal"===a?T(e.key):0,y:"horizontal"===a?0:T(e.key),scale:e.scale,ticksPosition:e.ticksPosition||d,tickValues:e.tickValues,tickSize:e.tickSize,tickPadding:e.tickPadding,tickRotation:e.tickRotation,format:e.tickFormat,legend:e.legend,legendPosition:e.legendPosition,legendOffset:e.legendOffset})}));return r.a.createElement(i.k,{width:k,height:O,margin:h,role:b},"background"===u&&q,E.map((function(e){return r.a.createElement(w,{key:e.index,data:e,variables:n,lineGenerator:W,points:e.points,strokeWidth:f,opacity:y,color:R(e)})})),"foreground"===u&&q)}));T.defaultProps=x;var S=function(e){return r.a.createElement(i.j,null,(function(t){var n=t.width,a=t.height;return r.a.createElement(T,Object.assign({width:n,height:a},e))}))},E=Object(i.rb)((function(e){var t=e.data,n=e.layout,c=e.variables,l=e.width,s=e.height,u=e.margin,d=e.curve,f=e.colors,y=e.lineOpacity,p=e.strokeWidth,m=e.axesTicksPosition,b=e.pixelRatio,g=Object(a.useRef)(null),h=Object(i.mb)(l,s,u),v=h.margin,x=h.innerWidth,k=h.innerHeight,O=h.outerWidth,j=h.outerHeight,w=P({width:x,height:k,data:t,variables:c,layout:n,colors:f,curve:d}),T=w.variablesScale,S=w.variablesWithScale,E=w.dataWithPoints,W=w.lineGenerator,R=w.getLineColor,q=Object(i.pb)();return Object(a.useEffect)((function(){g.current.width=O*b,g.current.height=j*b;var e=g.current.getContext("2d");e.scale(b,b),e.fillStyle=q.background,e.fillRect(0,0,O,j),e.translate(v.left,v.top),W.context(e),E.forEach((function(t){e.save(),e.globalAlpha=y,e.beginPath(),W(t.points),e.strokeStyle=R(t),e.lineWidth=p,e.stroke(),e.restore()})),S.map((function(t){Object(o.f)(e,{axis:"horizontal"===n?"y":"x",scale:t.scale,x:"horizontal"===n?T(t.key):0,y:"horizontal"===n?0:T(t.key),length:"horizontal"===n?k:x,ticksPosition:m,theme:q})}))}),[g,O,j,x,k,v,W,R,y,p,E,S,n,m,q,b]),r.a.createElement("canvas",{ref:g,width:O*b,height:j*b,style:{width:O,height:j}})}));E.defaultProps=b(b({},v),{},{pixelRatio:e.window&&e.window.devicePixelRatio?e.window.devicePixelRatio:1});var W=function(e){return r.a.createElement(i.j,null,(function(t){var n=t.width,a=t.height;return r.a.createElement(E,Object.assign({width:n,height:a},e))}))}}).call(this,n("pCvA"))},UnPv:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("VlJN"),n("YjJN"),n("Eb4t"),n("Fdmb"),n("IYjZ"),n("yvkl"),n("abGl");var a=n("5QYd"),r=n("SWlz"),i=n("RQLE");var o,c=[{key:"data",group:"Base",help:"Chart data.",type:"Array<object | Array>",required:!0},{key:"variables",type:"object[]",help:"Variables configuration.",description:"\n            Variables configuration, define accessor (`key`)\n            and variable type. Type must be one of\n            `linear` or `point`, `linear`\n            variables are suitable for continuous numerical\n            data such as age or cost while\n            `point` variables are suitable for\n            discrete values such as gender.\n        ",group:"Variables",controlType:"array",controlOptions:{shouldCreate:!1,shouldRemove:!1,getItemTitle:function(e,t){return t.key+" ("+t.type+")"},props:[{key:"key",help:"Variable key, used to access to corresponding datum value.",controlType:"text",controlOptions:{disabled:!0}},{key:"type",help:"Variable type, must be one of: 'linear', 'point'.",controlType:"text",controlOptions:{disabled:!0}},{key:"min",help:"Min value of linear scale.",type:"number | 'auto'",controlType:"switchableRange",controlOptions:{when:function(e){return"linear"===e.type},disabledValue:"auto",defaultValue:0,min:-100,max:100}},{key:"max",help:"Max value of linear scale.",type:"number | 'auto'",controlType:"switchableRange",controlOptions:{when:function(e){return"linear"===e.type},disabledValue:"auto",defaultValue:1e3,min:-100,max:100}}]}},{key:"layout",help:"Chart layout.",type:"string",required:!1,defaultValue:r.d.layout,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"curve",help:"Curve interpolation.",description:"\n            Defines the curve factory to use for the line generator.\n        ",type:"string",required:!1,defaultValue:r.d.curve,controlType:"choices",group:"Base",controlOptions:{choices:a.N.map((function(e){return{label:e,value:e}}))}},{key:"axesPlan",help:"Axes plan.",type:"string",required:!1,defaultValue:r.d.axesPlan,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"foreground",value:"foreground"},{label:"background",value:"background"}]}},{key:"axesTicksPosition",help:"Axes ticks position.",type:"string",required:!1,defaultValue:r.d.axesTicksPosition,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"before",value:"before"},{label:"after",value:"after"}]}},{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using\n            `ResponsiveParallelCoords`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using\n            `ResponsiveParallelCoords`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},i.f,{key:"colors",help:"Defines color range.",type:"string | Function | string[]",required:!1,defaultValue:r.d.colors,controlType:"ordinalColors",group:"Style"},{key:"strokeWidth",help:"Lines stroke width.",type:"number",required:!1,defaultValue:r.d.strokeWidth,controlType:"lineWidth",group:"Style"},{key:"lineOpacity",help:"Lines opacity.",type:"number",required:!1,defaultValue:r.d.lineOpacity,controlType:"opacity",group:"Style"}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(o=Object(i.e)(["svg"],r.d,"react-spring"))||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),l=Object(i.d)(c)},WwFt:function(e,t,n){"use strict";var a=n("nLLr");t.a=Object(a.c)({})},YKTd:function(e,t,n){"use strict";t.a=[{key:"temp",type:"linear",min:"auto",max:"auto",ticksPosition:"before",legend:"temperature",legendPosition:"start",legendOffset:20},{key:"cost",type:"linear",min:0,max:"auto",ticksPosition:"before",legend:"cost",legendPosition:"start",legendOffset:20},{key:"color",type:"point",padding:1,values:["red","yellow","green"],legend:"color",legendPosition:"start",legendOffset:-20},{key:"target",type:"point",padding:0,values:["A","B","C","D","E"],legend:"target",legendPosition:"start",legendOffset:-20},{key:"volume",type:"linear",min:0,max:"auto",legend:"volume",legendPosition:"start",legendOffset:-20}]},ySTC:function(e,t,n){"use strict";n.d(t,"a",(function(){return q})),n.d(t,"b",(function(){return W})),n.d(t,"c",(function(){return V})),n.d(t,"d",(function(){return w})),n.d(t,"e",(function(){return M})),n.d(t,"f",(function(){return Y})),n.d(t,"g",(function(){return F}));n("xl0S"),n("1c7q"),n("uzcW"),n("nPhU"),n("8sWk"),n("wDqy"),n("yvkl"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3");var a=n("mXGw"),r=n.n(a),i=n("fWs0"),o=n("5QYd"),c=n("qsVS"),l=n("ibHE"),s=n("ZZWI"),u=n("W0B4"),d=n.n(u);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){var t=e.bandwidth();if(0===t)return e;var n=t/2;return e.round()&&(n=Math.round(n)),function(t){return e(t)+n}},b={millisecond:[c.e,c.v],second:[c.k,c.A],minute:[c.f,c.w],hour:[c.d,c.u],day:[c.a,c.s],week:[c.p,c.F],sunday:[c.l,c.B],monday:[c.g,c.x],tuesday:[c.n,c.D],wednesday:[c.o,c.E],thursday:[c.m,c.C],friday:[c.c,c.t],saturday:[c.j,c.z],month:[c.h,c.y],year:[c.r,c.G]},g=Object.keys(b),h=new RegExp("^every\\s*(\\d+)?\\s*(".concat(g.join("|"),")s?$"),"i"),v=function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},x=function(e,t){if(Array.isArray(t))return t;if(e.ticks){if(void 0===t)return e.ticks();if(v(t))return e.ticks(t);if("string"==typeof t){var n=t.match(h);if(n){var a=b[n[2]][e.useUTC?1:0];return void 0===n[1]?e.ticks(a):e.ticks(a.every(Number(n[1])))}throw new Error("Invalid tickValues: ".concat(t))}}return e.domain()},k=function(e){var t,n=e.axis,a=e.scale,r=e.ticksPosition,i=e.tickValues,c=e.tickSize,l=e.tickPadding,s=e.tickRotation,u=e.engine,d=void 0===u?"svg":u,f=x(a,i),y=o.gb[d],b=a.bandwidth?m(a):a,g={lineX:0,lineY:0},h={textX:0,textY:0},v=y.align.center,k=y.baseline.center;return"x"===n?(t=function(e){return{x:b(e),y:0}},g.lineY=c*("after"===r?1:-1),h.textY=(c+l)*("after"===r?1:-1),k="after"===r?y.baseline.top:y.baseline.bottom,0===s?v=y.align.center:"after"===r&&s<0||"before"===r&&s>0?(v=y.align.right,k=y.baseline.center):("after"===r&&s>0||"before"===r&&s<0)&&(v=y.align.left,k=y.baseline.center)):(t=function(e){return{x:0,y:b(e)}},g.lineX=c*("after"===r?1:-1),h.textX=(c+l)*("after"===r?1:-1),v="after"===r?y.align.left:y.align.right),{ticks:f.map((function(e){return p(p(p({key:e,value:e},t(e)),g),h)})),textAlign:v,textBaseline:k}},O=function(e,t){if(!e||"function"==typeof e)return e;if("time"===t.type){var n=Object(l.a)(e);return function(e){return n(new Date(e))}}return Object(s.a)(e)},P=function(e){var t,n=e.width,a=e.height,r=e.scale,i=e.axis,o=e.values,c=Array.isArray(o)?o:void 0,l=v(o)?o:void 0,s=c||x(r,l),u=r.bandwidth?m(r):r;return"x"===i?t=s.map((function(e){return{key:"".concat(e),x1:u(e),x2:u(e),y1:0,y2:a}})):"y"===i&&(t=s.map((function(e){return{key:"".concat(e),x1:0,x2:n,y1:u(e),y2:u(e)}}))),t},j={ticksPosition:d.a.oneOf(["before","after"]),tickValues:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.oneOfType([d.a.number,d.a.string,d.a.instanceOf(Date)])),d.a.string]),tickSize:d.a.number,tickPadding:d.a.number,tickRotation:d.a.number,format:d.a.oneOfType([d.a.func,d.a.string]),renderTick:d.a.func,legend:d.a.node,legendPosition:d.a.oneOf(["start","middle","end"]),legendOffset:d.a.number,ariaHidden:d.a.bool},w=d.a.shape(j),T=function(e){var t=e.value,n=e.format,a=e.lineX,c=e.lineY,l=e.onClick,s=e.textBaseline,u=e.textAnchor,d=e.animatedProps,f=Object(o.pb)(),y=t;void 0!==n&&(y=n(y));var p={opacity:d.opacity};return l&&(p.cursor="pointer"),r.a.createElement(i.a.g,Object.assign({transform:d.transform},l?{onClick:function(e){return l(e,y)}}:{},{style:p}),r.a.createElement("line",{x1:0,x2:a,y1:0,y2:c,style:f.axis.ticks.line}),r.a.createElement(i.a.text,{dominantBaseline:s,textAnchor:u,transform:d.textTransform,style:f.axis.ticks.text},y))};T.defaultProps={opacity:1,rotate:0};var S=Object(a.memo)(T),E=function(e){var t=e.axis,n=e.scale,c=e.x,l=e.y,s=e.length,u=e.ticksPosition,d=e.tickValues,f=e.tickSize,y=e.tickPadding,m=e.tickRotation,b=e.format,g=e.renderTick,h=e.legend,v=e.legendPosition,x=e.legendOffset,P=e.onClick,j=e.ariaHidden,w=Object(o.pb)(),T=Object(a.useMemo)((function(){return O(b,n)}),[b,n]),S=k({axis:t,scale:n,ticksPosition:u,tickValues:d,tickSize:f,tickPadding:y,tickRotation:m}),E=S.ticks,W=S.textAlign,R=S.textBaseline,q=null;if(void 0!==h){var z,A=0,C=0,V=0;"y"===t?(V=-90,A=x,"start"===v?(z="start",C=s):"middle"===v?(z="middle",C=s/2):"end"===v&&(z="end")):(C=x,"start"===v?z="start":"middle"===v?(z="middle",A=s/2):"end"===v&&(z="end",A=s)),q=r.a.createElement("text",{transform:"translate(".concat(A,", ").concat(C,") rotate(").concat(V,")"),textAnchor:z,style:p({dominantBaseline:"central"},w.axis.legend.text)},h)}var B=Object(o.ob)(),Y=B.animate,D=B.config,M=Object(i.c)({transform:"translate(".concat(c,",").concat(l,")"),lineX2:"x"===t?s:0,lineY2:"x"===t?0:s,config:D,immediate:!Y}),F=Object(i.e)(E,(function(e){return e.key}),{initial:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(m,")")}},from:function(e){return{opacity:0,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(m,")")}},enter:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(m,")")}},update:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(m,")")}},leave:{opacity:0},config:D,immediate:!Y});return r.a.createElement(i.a.g,{transform:M.transform,"aria-hidden":j},F.map((function(e,t){var n=e.item,a=e.props,i=e.key;return r.a.createElement(g,p(p(p({tickIndex:t,format:T,rotate:m,textBaseline:R,textAnchor:W,animatedProps:a},n),P?{onClick:P}:{}),{},{key:i}))})),r.a.createElement(i.a.line,{style:w.axis.domain.line,x1:0,x2:M.lineX2,y1:0,y2:M.lineY2}),q)};E.defaultProps={x:0,y:0,tickSize:5,tickPadding:5,tickRotation:0,renderTick:function(e){return r.a.createElement(S,e)},legendPosition:"end",legendOffset:0};var W=Object(a.memo)(E),R=["top","right","bottom","left"],q=Object(a.memo)((function(e){var t=e.xScale,n=e.yScale,a=e.width,i=e.height,o={top:e.top,right:e.right,bottom:e.bottom,left:e.left};return R.map((function(e){var c=o[e];if(!c)return null;var l="top"===e||"bottom"===e,s="top"===e||"left"===e?"before":"after";return r.a.createElement(W,Object.assign({key:e},c,{axis:l?"x":"y",x:"right"===e?a:0,y:"bottom"===e?i:0,scale:l?t:n,length:l?a:i,ticksPosition:s}))}))})),z=function(e){var t=e.animatedProps,n=Object(o.pb)();return r.a.createElement(i.a.line,Object.assign({},t,n.grid.line))};z.defaultProps={x1:0,x2:0,y1:0,y2:0};var A=Object(a.memo)(z),C=Object(a.memo)((function(e){var t=e.lines,n=Object(o.ob)(),a=n.animate,c=n.config,l=Object(i.e)(t,(function(e){return e.key}),{initial:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},from:function(e){return{opacity:0,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},enter:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},update:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},leave:{opacity:0},config:c,immediate:!a});return r.a.createElement("g",null,l.map((function(e){var t=e.item,n=e.props,a=e.key;return r.a.createElement(A,Object.assign({},t,{key:a,animatedProps:n}))})))})),V=Object(a.memo)((function(e){var t=e.width,n=e.height,i=e.xScale,o=e.yScale,c=e.xValues,l=e.yValues,s=Object(a.useMemo)((function(){return!!i&&P({width:t,height:n,scale:i,axis:"x",values:c})}),[i,c]),u=!!o&&P({width:t,height:n,scale:o,axis:"y",values:l});return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement(C,{type:"x",lines:s}),u&&r.a.createElement(C,{type:"y",lines:u}))})),B=function(e){return e*Math.PI/180},Y=function(e,t){var n=t.axis,a=t.scale,r=t.x,i=void 0===r?0:r,o=t.y,c=void 0===o?0:o,l=t.length,s=t.ticksPosition,u=t.tickValues,d=t.tickSize,f=void 0===d?5:d,y=t.tickPadding,p=void 0===y?5:y,m=t.tickRotation,b=void 0===m?0:m,g=t.format,h=t.legend,v=t.legendPosition,x=void 0===v?"end":v,O=t.legendOffset,P=void 0===O?0:O,j=t.theme,w=k({axis:n,scale:a,ticksPosition:s,tickValues:u,tickSize:f,tickPadding:p,tickRotation:b,engine:"canvas"}),T=w.ticks,S=w.textAlign,E=w.textBaseline;if(e.save(),e.translate(i,c),e.textAlign=S,e.textBaseline=E,e.font="".concat(j.axis.ticks.text.fontSize,"px ").concat(j.axis.ticks.text.fontFamily),j.axis.domain.line.strokeWidth>0&&(e.lineWidth=j.axis.domain.line.strokeWidth,e.lineCap="square",e.strokeStyle=j.axis.domain.line.stroke,e.beginPath(),e.moveTo(0,0),e.lineTo("x"===n?l:0,"x"===n?0:l),e.stroke()),T.forEach((function(t){j.axis.ticks.line.strokeWidth>0&&(e.lineWidth=j.axis.ticks.line.strokeWidth,e.lineCap="square",e.strokeStyle=j.axis.ticks.line.stroke,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+t.lineX,t.y+t.lineY),e.stroke());var n=void 0!==g?g(t.value):t.value;e.save(),e.translate(t.x+t.textX,t.y+t.textY),e.rotate(B(b)),e.fillStyle=j.axis.ticks.text.fill,e.fillText(n,0,0),e.restore()})),void 0!==h){var W,R=0,q=0,z=0;"y"===n?(z=-90,R=P,"start"===x?(W="start",q=l):"middle"===x?(W="center",q=l/2):"end"===x&&(W="end")):(q=P,"start"===x?W="start":"middle"===x?(W="center",R=l/2):"end"===x&&(W="end",R=l)),e.translate(R,q),e.rotate(B(z)),e.font="".concat(j.axis.legend.text.fontWeight?"".concat(j.axis.legend.text.fontWeight," "):"").concat(j.axis.legend.text.fontSize,"px ").concat(j.axis.legend.text.fontFamily),e.fillStyle=j.axis.legend.text.fill,e.textAlign=W,e.textBaseline="middle",e.fillText(h,0,0)}e.restore()},D=["top","right","bottom","left"],M=function(e,t){var n=t.xScale,a=t.yScale,r=t.width,i=t.height,o=t.top,c=t.right,l=t.bottom,s=t.left,u=t.theme,d={top:o,right:c,bottom:l,left:s};D.forEach((function(t){var o=d[t];if(!o)return null;var c="top"===t||"bottom"===t,l="top"===t||"left"===t?"before":"after",s=c?n:a,f=O(o.format,s);Y(e,p(p({},o),{},{axis:c?"x":"y",x:"right"===t?r:0,y:"bottom"===t?i:0,scale:s,format:f,length:c?r:i,ticksPosition:l,theme:u}))}))},F=function(e,t){var n=t.width,a=t.height,r=t.scale,i=t.axis,o=t.values;P({width:n,height:a,scale:r,axis:i,values:o}).forEach((function(t){e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()}))}}}]);
//# sourceMappingURL=component---src-pages-parallel-coordinates-canvas-js-2e85bf88b3b793a217a1.js.map