/*! For license information please see main.1e4b0213.chunk.js.LICENSE.txt */
(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{33:function(e,t,a){},46:function(e,t,a){e.exports={bgLoading:"LoadingComponent_bgLoading__1RuqF"}},55:function(e,t,a){},56:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(28),n=a.n(c),r=(a(55),a.p,a(56),a(16)),i=a(8),o=a(4),l=a(50),u=a(17),d=a(30),j=a(22),b=a(20),m=a(0),f=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(m.jsx)("a",{className:"navbar-brand",href:"#",children:"TodoList"}),Object(m.jsxs)("div",{className:"collapse navbar-collapse",id:"collapsibleNavId",children:[Object(m.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsxs)(r.b,{className:"nav-link active",to:"/home",activeClassName:"bg-white text-dark",children:["Home ",Object(m.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link",to:"/todolistRCC",activeClassName:"bg-white text-dark",children:"TodoListRCC"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link",to:"/todolistRFC",activeClassName:"bg-white text-dark",children:"TodoListRFC"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link",to:"/todoListThunk",activeClassName:"bg-white text-dark",children:"TodoListThunk"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(r.b,{className:"nav-link",to:"/todoListSaga",activeClassName:"bg-white text-dark",children:"TodoListSaga"})})]}),Object(m.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(m.jsx)("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search"}),Object(m.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]})]})})}}]),a}(s.Component),h=f,O=a(46),k=a.n(O),p=a.p+"static/media/loading.9ca08101.gif",x=a(15);function v(){var e=Object(x.c)((function(e){return e.LoadingReducer})),t=e.isLoading;return console.log("isLoading",t),t?Object(m.jsxs)("div",{className:k.a.bgLoading,children:["\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ",Object(m.jsx)("img",{src:p,alt:"loading"}),"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 "]}):""}var N=["Component"],g=function(e){var t=e.Component,a=Object(l.a)(e,N);return Object(m.jsx)(i.a,Object(o.a)(Object(o.a)({},a),{},{render:function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{}),Object(m.jsx)(v,{}),Object(m.jsx)(t,Object(o.a)({},e))]})}}))};function T(){return Object(m.jsx)("div",{children:"Home Page"})}var y=a(24),L=(a(33),a(18)),_=a.n(L),C="http://svcy.myclass.vn/api/ToDoList",A=200,w=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).getTaskListApi=function(){return e.get("GetAllTask")},e.addTaskApi=function(t){return e.post("AddTask",t)},e.deletaskApi=function(t){return e.delete("deleteTask?taskName=".concat(t))},e.finishTaskApi=function(t){return e.put("doneTask?taskName=".concat(t))},e.rejectTaskApi=function(t){return console.log("rejectTaskApi",t),e.put("rejectTask?taskName=".concat(t))},e}return a}((function e(){Object(u.a)(this,e),this.get=function(e){return _()({url:"".concat(C,"/").concat(e),method:"GET"})},this.delete=function(e){return _()({url:"".concat(C,"/").concat(e),method:"DELETE"})},this.post=function(e,t){return _()({url:"".concat(C,"/").concat(e),method:"POST",data:t})},this.put=function(e){return _()({url:"".concat(C,"/").concat(e),method:"PUT"})}})),S=new w,E=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={taskList:[],values:{taskName:""},errors:{taskName:""},valid:!0},e.getTaskList=function(){var t=S.getTaskListApi();t.then((function(t){var a=t.data;e.setState(Object(o.a)(Object(o.a)({},e.state),{},{values:{taskName:""},taskList:a}),(function(){}))})),t.catch((function(e){console.log("error in getTaskList",e)}))},e.renderTaskTodo=function(){return e.state.taskList.filter((function(e){return!e.status})).map((function(t,a){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:t.taskName}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{type:"button",className:"remove",onClick:function(){e.deleteTask(t.taskName)},children:Object(m.jsx)("i",{className:"fa fa-trash-alt"})}),Object(m.jsxs)("button",{className:"complete",type:"button",onClick:function(){e.finishTask(t.taskName)},children:[Object(m.jsx)("i",{className:"far fa-check-circle"}),Object(m.jsx)("i",{className:"fas fa-check-circle"})]})]})]},a)}))},e.renderTaskTodoDone=function(){return e.state.taskList.filter((function(e){return e.status})).map((function(t,a){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:t.taskName}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{type:"button",className:"remove",onClick:function(){e.deleteTask(t.taskName)},children:Object(m.jsx)("i",{className:"fa fa-trash-alt"})}),Object(m.jsxs)("button",{type:"button",className:"complete",onClick:function(){e.rejectTask(t.taskName)},children:[Object(m.jsx)("i",{className:"far fa-undo"}),Object(m.jsx)("i",{className:"fas fa-undo"})]})]})]},a)}))},e.handleChange=function(t){var a=t.target,s=a.name,c=a.value,n=Object(o.a)(Object(o.a)({},e.state.values),{},Object(y.a)({},s,c)),r="";""!==c.trim()&&/^[a-z A-Z]+$/.test(c)||(r="".concat(s," is invalid"));var i=Object(o.a)(Object(o.a)({},e.state.errors),{},Object(y.a)({},s,r));e.setState(Object(o.a)(Object(o.a)({},e.state),{},{values:n,errors:i}),(function(){e.checkValid()}))},e.checkValid=function(){""!==e.state.errors.taskName?e.setState(Object(o.a)(Object(o.a)({},e.state),{},{valid:!1}),(function(){})):e.setState(Object(o.a)(Object(o.a)({},e.state),{},{valid:!0}),(function(){}))},e.addTask=function(t){if(t.preventDefault(),e.state.valid){var a={taskName:e.state.values.taskName},s=S.addTaskApi(a);s.then((function(t){console.log("newTask",t.data),e.getTaskList()})),s.catch((function(e){alert(e.response.data)}))}else alert("taskName k h\u1ee3p l\u1ec7, ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ee9a k\xed t\u1ef1 ch\u1eef")},e.deleteTask=function(t){var a=S.deletaskApi(t);a.then((function(t){console.log("deletedTask",t.data),e.getTaskList()})),a.catch((function(e){alert(e.response.data)}))},e.finishTask=function(t){var a=S.finishTaskApi(t);a.then((function(t){console.log("finishTask",t.data),e.getTaskList()})),a.catch((function(e){alert(e.response.data)}))},e.rejectTask=function(t){var a=S.rejectTaskApi(t);a.then((function(t){console.log("rejectTask",t.data),e.getTaskList()})),a.catch((function(e){alert(e.response.data)}))},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(m.jsx)("form",{onSubmit:this.addTask,children:Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card__",children:Object(m.jsx)("img",{src:"./img/bgTodoList.png"})}),Object(m.jsx)("div",{className:"card__body",children:Object(m.jsxs)("div",{className:"card__content",children:[Object(m.jsxs)("div",{className:"card__title",children:[Object(m.jsx)("h2",{children:"My Tasks"}),Object(m.jsx)("p",{children:"2021"})]}),Object(m.jsxs)("div",{className:"card__add",children:[Object(m.jsx)("input",{name:"taskName",value:this.state.values.taskName,id:"newTask",onChange:this.handleChange,type:"text",placeholder:"Enter an activity..."}),Object(m.jsx)("button",{id:"addItem",type:"button",onClick:this.addTask,children:Object(m.jsx)("i",{className:"fa fa-plus"})})]}),Object(m.jsxs)("p",{className:"text-danger",children:[" ",this.state.errors.taskName]}),Object(m.jsxs)("div",{className:"card__todo",children:[Object(m.jsx)("ul",{className:"todo",id:"todo",children:this.renderTaskTodo()}),Object(m.jsx)("ul",{className:"todo",id:"completed",children:this.renderTaskTodoDone()})]})]})})]})})})}},{key:"componentDidMount",value:function(){this.getTaskList()}}]),a}(s.Component),D=E,R=a(21);function I(){var e=Object(s.useState)({taskList:[],values:{taskName:""},errors:{taskName:""}}),t=Object(R.a)(e,2),a=t[0],c=t[1],n=function(){var e=S.getTaskListApi();e.then((function(e){var t=e.data;c(Object(o.a)(Object(o.a)({},a),{},{values:{taskName:""},taskList:t}))})),e.catch((function(e){console.log("error in getTaskList",e)}))};Object(s.useEffect)((function(){return n(),function(){}}),[]);var r=function(e){if(e.preventDefault(),""===a.errors.taskName){var t={taskName:a.values.taskName};console.log("newTask",t);var s=S.addTaskApi(t);s.then((function(e){console.log("newTask",e.data),n()})),s.catch((function(e){alert(e.response.data)}))}else alert("taskName k h\u1ee3p l\u1ec7, ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ee9a k\xed t\u1ef1 ch\u1eef")},i=function(e){var t=S.deletaskApi(e);t.then((function(e){console.log("deletedTask",e.data),n()})),t.catch((function(e){alert(e.response.data)}))},l=function(e){var t=S.finishTaskApi(e);t.then((function(e){console.log("finishTask",e.data),n()})),t.catch((function(e){alert(e.response.data)}))},u=function(e){var t=S.rejectTaskApi(e);t.then((function(e){console.log("rejectTask",e.data),n()})),t.catch((function(e){alert(e.response.data)}))};return Object(m.jsxs)("div",{className:"card",onSubmit:r,children:[Object(m.jsx)("div",{className:"card__",children:Object(m.jsx)("img",{src:"./img/bgTodoList.png"})}),Object(m.jsx)("div",{className:"card__body",children:Object(m.jsxs)("div",{className:"card__content",children:[Object(m.jsxs)("div",{className:"card__title",children:[Object(m.jsx)("h2",{children:"My Tasks"}),Object(m.jsx)("p",{children:"2021"})]}),Object(m.jsxs)("div",{className:"card__add",children:[Object(m.jsx)("input",{id:"newTask",value:a.values.taskName,name:"taskName",onChange:function(e){var t=e.target,s=t.name,n=t.value,r=Object(o.a)({},a.values);r[s]=n;var i=Object(o.a)({},a.errors);/^[a-z A-Z]+$/.test(n)&&""!==n.trim()?i[s]="":i[s]=s+" invalid !",c(Object(o.a)(Object(o.a)({},a),{},{values:r,errors:i}))},type:"text",placeholder:"Enter an activity..."}),Object(m.jsx)("button",{id:"addItem",type:"button",onClick:r,children:Object(m.jsx)("i",{className:"fa fa-plus"})})]}),Object(m.jsxs)("p",{className:"text-danger",children:[" ",a.errors.taskName]}),Object(m.jsxs)("div",{className:"card__todo",children:[Object(m.jsx)("ul",{className:"todo",id:"todo",children:a.taskList.filter((function(e){return!e.status})).map((function(e,t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:e.taskName}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{type:"button",className:"remove",onClick:function(){i(e.taskName)},children:Object(m.jsx)("i",{className:"fa fa-trash-alt"})}),Object(m.jsxs)("button",{className:"complete",type:"button",onClick:function(){l(e.taskName)},children:[Object(m.jsx)("i",{className:"far fa-check-circle"}),Object(m.jsx)("i",{className:"fas fa-check-circle"})]})]})]},t)}))}),Object(m.jsx)("ul",{className:"todo",id:"completed",children:a.taskList.filter((function(e){return e.status})).map((function(e,t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:e.taskName}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{type:"button",className:"remove",onClick:function(){i(e.taskName)},children:Object(m.jsx)("i",{className:"fa fa-trash-alt"})}),Object(m.jsxs)("button",{type:"button",className:"complete",onClick:function(){u(e.taskName)},children:[Object(m.jsx)("i",{className:"far fa-undo"}),Object(m.jsx)("i",{className:"fas fa-undo"})]})]})]},t)}))})]})]})})]})}var G="GET_TASK_LIST",F="GET_TASK_SAGA",K="ADD_TASK_SAGA",P="DELETE_TASK_SAGA",M="DONE_TASK_SAGA",z="REJECT_TASK_SAGA",Z={taskList:[]},$=a(7),H=a.n($),J=a(35),B=function(){return function(){var e=Object(J.a)(H.a.mark((function e(t){var a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.getTaskListApi();case 3:(a=e.sent).status===A&&(console.log("taskList data",a.data),t({type:G,taskList:a.data})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error",e.t0.resonse.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()};function V(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.TodoListReducer})),a=t.taskList,c=Object(s.useState)({values:{taskName:""},errors:{taskName:""}}),n=Object(R.a)(c,2),r=n[0],i=n[1];Object(s.useEffect)((function(){return e(B()),function(){}}),[]);var l=function(t){if(t.preventDefault(),""===r.errors.taskName){var a={taskName:r.values.taskName};e(function(e){return function(){var t=Object(J.a)(H.a.mark((function t(a){var s,c,n;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.addTaskApi(e);case 3:s=t.sent,c=s.data,n=s.status,console.log("newTask",c),n===A&&a(B()),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("error",t.t0.resonse.data);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(a)),i(Object(o.a)(Object(o.a)({},r),{},{values:{taskName:""}}))}else alert("taskName k h\u1ee3p l\u1ec7, ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ee9a k\xed t\u1ef1 ch\u1eef")},u=function(t){e(function(e){return function(t){var a=S.deletaskApi(e);a.then((function(e){console.log("deletedTask",e.data),t(B())})),a.catch((function(e){alert(e.response.data)}))}}(t))},d=function(t){e(function(e){return function(t){var a=S.finishTaskApi(e);a.then((function(e){console.log("finishTask",e.data),t(B())})),a.catch((function(e){alert(e.response.data)}))}}(t))},j=function(t){e(function(e){return function(t){var a=S.rejectTaskApi(e);a.then((function(e){console.log("rejectTask",e.data),t(B())})),a.catch((function(e){alert(e.response.data)}))}}(t))};return Object(m.jsxs)("form",{className:"card",onSubmit:l,children:[Object(m.jsx)("div",{className:"card__",children:Object(m.jsx)("img",{src:"./img/bgTodoList.png"})}),Object(m.jsx)("div",{className:"card__body",children:Object(m.jsxs)("div",{className:"card__content",children:[Object(m.jsxs)("div",{className:"card__title",children:[Object(m.jsx)("h2",{children:"My Tasks"}),Object(m.jsx)("p",{children:"2021"})]}),Object(m.jsxs)("div",{className:"card__add",children:[Object(m.jsx)("input",{id:"newTask",value:r.values.taskName,name:"taskName",onChange:function(e){var t=e.target,a=t.name,s=t.value,c=Object(o.a)({},r.values);c[a]=s;var n=Object(o.a)({},r.errors);/^[a-z A-Z]+$/.test(s)&&""!==s.trim()?n[a]="":n[a]=a+" invalid !",i(Object(o.a)(Object(o.a)({},r),{},{values:c,errors:n}))},type:"text",placeholder:"Enter an activity..."}),Object(m.jsx)("button",{id:"addItem",type:"button",onClick:l,children:Object(m.jsx)("i",{className:"fa fa-plus"})})]}),Object(m.jsxs)("p",{className:"text-danger",children:[" ",r.errors.taskName]}),Object(m.jsxs)("div",{className:"card__todo",children:[Object(m.jsx)("ul",{className:"todo",id:"todo",children:a.filter((function(e){return!e.status})).map((function(e,t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:e.taskName}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{type:"button",className:"remove",onClick:function(){u(e.taskName)},children:Object(m.jsx)("i",{className:"fa fa-trash-alt"})}),Object(m.jsxs)("button",{className:"complete",type:"button",onClick:function(){d(e.taskName)},children:[Object(m.jsx)("i",{className:"far fa-check-circle"}),Object(m.jsx)("i",{className:"fas fa-check-circle"})]})]})]},t)}))}),Object(m.jsx)("ul",{className:"todo",id:"completed",children:a.filter((function(e){return e.status})).map((function(e,t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:e.taskName}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{type:"button",className:"remove",onClick:function(){u(e.taskName)},children:Object(m.jsx)("i",{className:"fa fa-trash-alt"})}),Object(m.jsxs)("button",{type:"button",className:"complete",onClick:function(){j(e.taskName)},children:[Object(m.jsx)("i",{className:"far fa-undo"}),Object(m.jsx)("i",{className:"fas fa-undo"})]})]})]},t)}))})]})]})})]})}function q(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.TodoListReducer})),a=t.taskList,c=Object(s.useState)({values:{taskName:""},errors:{taskName:""}}),n=Object(R.a)(c,2),r=n[0],i=n[1];Object(s.useEffect)((function(){return e({type:F}),function(){}}),[]);var l=function(t){if(t.preventDefault(),""===r.errors.taskName){var a={taskName:r.values.taskName};e({type:K,newTask:a}),i(Object(o.a)(Object(o.a)({},r),{},{values:{taskName:""}}))}else alert("taskName k h\u1ee3p l\u1ec7, ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ee9a k\xed t\u1ef1 ch\u1eef")},u=function(t){e({type:P,taskName:t})},d=function(t){e({type:M,taskName:t})},j=function(t){e({type:z,taskName:t})};return Object(m.jsxs)("form",{className:"card",onSubmit:l,children:[Object(m.jsx)("div",{className:"card__",children:Object(m.jsx)("img",{src:"./img/bgTodoList.png"})}),Object(m.jsx)("div",{className:"card__body",children:Object(m.jsxs)("div",{className:"card__content",children:[Object(m.jsxs)("div",{className:"card__title",children:[Object(m.jsx)("h2",{children:"My Tasks"}),Object(m.jsx)("p",{children:"2021"})]}),Object(m.jsxs)("div",{className:"card__add",children:[Object(m.jsx)("input",{id:"newTask",value:r.values.taskName,name:"taskName",onChange:function(e){var t=e.target,a=t.name,s=t.value,c=Object(o.a)({},r.values);c[a]=s;var n=Object(o.a)({},r.errors);/^[a-z A-Z]+$/.test(s)&&""!==s.trim()?n[a]="":n[a]=a+" invalid !",i(Object(o.a)(Object(o.a)({},r),{},{values:c,errors:n}))},type:"text",placeholder:"Enter an activity..."}),Object(m.jsx)("button",{id:"addItem",type:"button",onClick:l,children:Object(m.jsx)("i",{className:"fa fa-plus"})})]}),Object(m.jsxs)("p",{className:"text-danger",children:[" ",r.errors.taskName]}),Object(m.jsxs)("div",{className:"card__todo",children:[Object(m.jsx)("ul",{className:"todo",id:"todo",children:a.filter((function(e){return!e.status})).map((function(e,t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:e.taskName}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{type:"button",className:"remove",onClick:function(){u(e.taskName)},children:Object(m.jsx)("i",{className:"fa fa-trash-alt"})}),Object(m.jsxs)("button",{className:"complete",type:"button",onClick:function(){d(e.taskName)},children:[Object(m.jsx)("i",{className:"far fa-check-circle"}),Object(m.jsx)("i",{className:"fas fa-check-circle"})]})]})]},t)}))}),Object(m.jsx)("ul",{className:"todo",id:"completed",children:a.filter((function(e){return e.status})).map((function(e,t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:e.taskName}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{type:"button",className:"remove",onClick:function(){u(e.taskName)},children:Object(m.jsx)("i",{className:"fa fa-trash-alt"})}),Object(m.jsxs)("button",{type:"button",className:"complete",onClick:function(){j(e.taskName)},children:[Object(m.jsx)("i",{className:"far fa-undo"}),Object(m.jsx)("i",{className:"fas fa-undo"})]})]})]},t)}))})]})]})})]})}var U=function(){return Object(m.jsx)(r.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(g,{exact:!0,path:"/",Component:T}),Object(m.jsx)(g,{exact:!0,path:"/home",Component:T}),Object(m.jsx)(g,{exact:!0,path:"/todolistRCC",Component:D}),Object(m.jsx)(g,{exact:!0,path:"/todolistRFC",Component:I}),Object(m.jsx)(g,{exact:!0,path:"/todoListThunk",Component:V}),Object(m.jsx)(g,{exact:!0,path:"/todoListSaga",Component:q})]})})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,84)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))},Q=a(23),W=a(48),X=a(49),ee=a(9),te="DISPLAY_LOADING",ae="HIDE_LOADING",se=H.a.mark(be),ce=H.a.mark(me),ne=H.a.mark(fe),re=H.a.mark(he),ie=H.a.mark(Oe),oe=H.a.mark(ke),le=H.a.mark(pe),ue=H.a.mark(xe),de=H.a.mark(ve),je=H.a.mark(Ne);function be(e){var t,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.d)({type:te});case 2:return e.next=4,Object(ee.c)(1e3);case 4:return e.prev=4,e.next=7,Object(ee.b)((function(){return S.getTaskListApi()}));case 7:if(t=e.sent,a=t.data,t.status!==A){e.next=13;break}return e.next=13,Object(ee.d)({type:G,taskList:a});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log("error",e.t0.response.data);case 18:return e.next=20,Object(ee.d)({type:ae});case 20:case"end":return e.stop()}}),se,null,[[4,15]])}function me(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.e)(F,be);case 2:case"end":return e.stop()}}),ce)}function fe(e){var t,a;return H.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,t=e.newTask,s.next=4,Object(ee.b)((function(){return S.addTaskApi(t)}));case 4:if(a=s.sent,a.data,a.status!==A){s.next=10;break}return s.next=10,Object(ee.d)({type:F});case 10:s.next=15;break;case 12:s.prev=12,s.t0=s.catch(0),console.log("error",s.t0.response.data);case 15:case"end":return s.stop()}}),ne,null,[[0,12]])}function he(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.e)(K,fe);case 2:case"end":return e.stop()}}),re)}function Oe(e){var t,a;return H.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,t=e.taskName,s.next=4,Object(ee.b)((function(){return S.deletaskApi(t)}));case 4:if(a=s.sent,a.data,a.status!==A){s.next=10;break}return s.next=10,Object(ee.d)({type:F});case 10:s.next=15;break;case 12:s.prev=12,s.t0=s.catch(0),console.log("error",s.t0.response.data);case 15:case"end":return s.stop()}}),ie,null,[[0,12]])}function ke(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.e)(P,Oe);case 2:case"end":return e.stop()}}),oe)}function pe(e){var t,a;return H.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,t=e.taskName,s.next=4,Object(ee.b)((function(){return S.finishTaskApi(t)}));case 4:if(a=s.sent,a.data,a.status!==A){s.next=10;break}return s.next=10,Object(ee.d)({type:F});case 10:s.next=15;break;case 12:s.prev=12,s.t0=s.catch(0),console.log("error",s.t0.response.data);case 15:case"end":return s.stop()}}),le,null,[[0,12]])}function xe(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.e)(M,pe);case 2:case"end":return e.stop()}}),ue)}function ve(e){var t,a;return H.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,t=e.taskName,s.next=4,Object(ee.b)((function(){return S.rejectTaskApi(t)}));case 4:if(a=s.sent,a.data,a.status!==A){s.next=10;break}return s.next=10,Object(ee.d)({type:F});case 10:s.next=15;break;case 12:s.prev=12,s.t0=s.catch(0),console.log("error",s.t0.response.data);case 15:case"end":return s.stop()}}),de,null,[[0,12]])}function Ne(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.e)(z,ve);case 2:case"end":return e.stop()}}),je)}var ge=H.a.mark(Te);function Te(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([me(),he(),ke(),xe(),Ne()]);case 2:case"end":return e.stop()}}),ge)}var ye={isLoading:!1},Le=Object(X.a)(),_e=Object(Q.b)({TodoListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type===G?(e.taskList=t.taskList,Object(o.a)({},e)):e},LoadingReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!0});case ae:return Object(o.a)(Object(o.a)({},e),{},{isLoading:!1});default:return e}}}),Ce=Object(Q.d)(_e,Object(Q.a)(W.a,Le));Le.run(Te),n.a.render(Object(m.jsx)(x.a,{store:Ce,children:Object(m.jsx)(U,{})}),document.getElementById("root")),Y()}},[[83,1,2]]]);
//# sourceMappingURL=main.1e4b0213.chunk.js.map