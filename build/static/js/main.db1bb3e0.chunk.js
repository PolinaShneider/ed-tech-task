(this["webpackJsonped-tech-task"]=this["webpackJsonped-tech-task"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),i=n.n(a),o=(n(10),n(11),n(3)),j=n(2),A=(n(12),n(13),n(0)),r=function(e){var t=e.first,n=e.second,s=e.checkAnswer,a=e.isCorrect,i=e.reset,o=Object(c.useState)(""),r=Object(j.a)(o,2),u=r[0],O=r[1];return Object(A.jsxs)("div",{className:"Task-wrapper",children:[Object(A.jsxs)("div",{className:"Task",children:[Object(A.jsxs)("div",{children:[t," x ",n," ="]}),Object(A.jsx)("input",{className:""===u||null===a?"":a?"Task_input_correct":"Task_input_wrong",value:u,onChange:function(e){return O(e.target.value)},onFocus:function(){i(),O("")}})]}),Object(A.jsx)("button",{className:"Task_button",onClick:function(){""!==u&&s(+u===t*n)},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},u=(n(15),function(e){var t=Math.floor(e/60),n=e%60;return"".concat(t).padStart(2,"0")+":"+"".concat(n).padStart(2,"0")}),O=function(e){var t=e.state,n=e.isCorrect,s=Object(c.useState)(60),a=Object(j.a)(s,2),i=a[0],o=a[1];return Object(c.useEffect)((function(){var e=setInterval((function(){o(i>0?i-1:60)}),1e3);return function(){return clearTimeout(e)}})),"solve"===t?function(e){return!0===e?Object(A.jsx)("div",{className:"Timer_answer",children:"\u0421\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u0432\u0435\u0440\u043d\u043e!"}):!1===e?Object(A.jsx)("div",{className:"Timer_answer_wrong",children:"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0435\u0449\u0451 \u0440\u0430\u0437"}):null}(n):Object(A.jsx)("div",{className:"Timer",children:Object(A.jsx)("span",{className:"Timer_digits",children:u(i)})})},b=(n(16),n.p+"static/media/miracles.b5c88052.png"),l="data:image/png;base64,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",m=(n(17),function(e,t,n){var c=e.first;return t<=e.second&&n<=c?"active":""}),d=function(e){for(var t=[],n=1;n<=9;n++){for(var c=[],s=1;s<=9;s++)c.push(Object(A.jsx)("td",{className:m(e,n,s),children:n*s}));t.push(Object(A.jsx)("tr",{className:"MultiplicationTable_row",children:c}))}return Object(A.jsx)("table",{className:"MultiplicationTable",children:t.map((function(e){return e}))})},g=function(e){var t=e.state;return Object(A.jsx)("div",{className:["solve"===t?"show":"","VisualExample_demo_answer"].join(" "),children:Object(A.jsx)("img",{width:600,src:b})})},x=function(e){return Object(A.jsx)("div",{className:"VisualExample",children:Object(A.jsxs)("div",{className:"VisualExample_holder",children:[Object(A.jsxs)("div",{className:"VisualExample_pics",children:[g(e),Object(A.jsxs)("div",{className:"VisualExample_demo",children:["demo"===e.state?Object(A.jsx)("img",{src:l}):Object(A.jsx)("img",{style:{opacity:0},src:l}),Object(A.jsx)("img",{src:b})]})]}),Object(A.jsx)(d,Object(o.a)({},e))]})})},v=function(){var e=Object(c.useState)("demo"),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),i=Object(j.a)(a,2),u=i[0],b=i[1],l={first:7,second:2,checkAnswer:function(e){s("solve"),b(e)},state:n,isCorrect:u,reset:function(){s("demo"),b(null)}};return Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:"Demo",children:[Object(A.jsx)(r,Object(o.a)({},l)),Object(A.jsx)(O,{state:n,isCorrect:u})]}),Object(A.jsx)(x,Object(o.a)({count:l.second},l))]})};var f=function(){return Object(A.jsx)("div",{className:"App",children:Object(A.jsx)(v,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(A.jsx)(s.a.StrictMode,{children:Object(A.jsx)(f,{})}),document.getElementById("root")),T()}],[[18,1,2]]]);
//# sourceMappingURL=main.db1bb3e0.chunk.js.map