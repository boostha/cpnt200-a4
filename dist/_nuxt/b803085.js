(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{251:function(t,e,l){"use strict";l.r(e);l(32),l(47);var n={data:function(){return{idea:{title:"",description:"",counter:0},ideas:[]}},methods:{addIdea:function(){return this.ideas.push({title:this.idea.title,description:this.idea.description,counter:this.idea.counter})},onSubmit:function(t){t.preventDefault()}}},o=l(46),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",{staticClass:"flex flex-col items-center justify-center gap-10 my-10"},[l("form",{on:{submit:function(e){return e.preventDefault(),t.addIdea.apply(null,arguments)}}},[l("fieldset",{staticClass:"flex flex-col gap-2 items-start justify-center border-solid border-2 p-10"},[l("legend",{staticClass:"text-2xl"},[t._v("Add Your Ideas Below")]),t._v(" "),l("label",{staticClass:"text-xl",attrs:{for:"idea-title"}},[t._v("Idea Title")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.idea.title,expression:"idea.title"}],staticClass:"border-solid border-2 p-1",attrs:{type:"text",name:"idea-title"},domProps:{value:t.idea.title},on:{input:function(e){e.target.composing||t.$set(t.idea,"title",e.target.value)}}}),t._v(" "),l("label",{staticClass:"text-xl",attrs:{for:"idea-description"}},[t._v("Idea Description")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.idea.description,expression:"idea.description"}],staticClass:"border-solid border-2 p-1",attrs:{type:"text",name:"idea-description"},domProps:{value:t.idea.description},on:{input:function(e){e.target.composing||t.$set(t.idea,"description",e.target.value)}}}),t._v(" "),l("button",{staticClass:"bg-red-300 py-1 px-4 mt-4 rounded",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[t._v("Add Idea")])])]),t._v(" "),l("section",{staticClass:" flex flex-col gap-10"},[l("h2",{staticClass:"text-4xl border-b-2"},[t._v("Ideas")]),t._v(" "),l("ul",{staticClass:"flex flex-col gap-10"},t._l(t.ideas,(function(e){return l("li",{key:e.id,staticClass:"text-xl"},[l("div",{staticClass:"border-solid border-2"},[l("h3",{staticClass:"bg-gray-200 px-4"},[t._v(t._s(e.title)+" ")]),t._v(" "),l("p",{staticClass:"px-4"},[t._v(t._s(e.description)+" ")])]),t._v(" "),l("div",{staticClass:"flex gap-2"},[l("button",{on:{click:function(t){e.counter+=1}}},[t._v("Like:")]),t._v(" "),l("p",[t._v(t._s(e.counter))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Section:l(251).default})}}]);