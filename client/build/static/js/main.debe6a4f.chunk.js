(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){},121:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),s=a.n(o),c=a(11),i=a(12),l=a(14),u=a(13),m=a(15),d=a(18),p=a(31),h=a(16),g=a(28),b=a(88),E=a(32),f=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},v={isAuthenticated:!1,user:{}},y={},N={users:{}},O={data:{},picture:null},j=Object(g.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(E.a)({},e,{isAuthenticated:!f(t.payload),user:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},admin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_USERS":return Object(E.a)({},e,{users:t.payload});default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DATA":return Object(E.a)({},e,{data:t.payload});case"GET_PICTURE":return Object(E.a)({},e,{picture:t.payload});default:return e}}}),w=[b.a],C=Object(g.createStore)(j,{},g.applyMiddleware.apply(void 0,w)),k=a(39),R=a.n(k),S=a(19),T=a.n(S),D=function(e){e?T.a.defaults.headers.common.Authorization=e:delete T.a.defaults.headers.common.Authorization},x=function(e){return{type:"SET_CURRENT_USER",payload:e}},A=function(e){return function(t){localStorage.removeItem("jwtToken"),D(!1),t(x({})),void 0!==e&&e.push("/login")}},B=a(40),G=Object(h.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(B.a)(e,["component","auth"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))}),U=Object(h.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(B.a)(e,["component","auth"]);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return"admin@maze.com"===a.user.email?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))}),L=(a(120),a(121),a(90)),P=a.n(L),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser(a.props.history)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.auth.isAuthenticated,t=r.a.createElement("div",{className:"navContainer"},r.a.createElement("p",{className:"btn mybtn1",style:{margin:"auto"},onClick:this.onLogoutClick.bind(this)},"Log out"),r.a.createElement(d.c,{className:"btn mybtn2",style:{marginRight:"5px"},to:"/dashboard"},this.props.auth.user.email)),a=r.a.createElement("div",null);return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm fixed-top navbar-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(d.c,{to:"/"},r.a.createElement("img",{src:P.a,width:"65",height:"65",alt:""}))),e?t:a)))}}]),t}(n.Component),M=Object(h.b)(function(e){return{auth:e.auth}},{logoutUser:A})(Object(p.g)(_)),Q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",{className:"masthead",onScroll:this.handleScroll},r.a.createElement("div",{className:"container d-flex h-100 align-items-center"},r.a.createElement("div",{className:"mx-auto text-center"},r.a.createElement("h1",{className:"mx-auto my-0 text-uppercase font2"},"MAZE"),r.a.createElement(d.b,{to:"/login",className:"btn font1 mybtn1 btnLayout"},"Login"),r.a.createElement("br",null))));return r.a.createElement("div",null,e,r.a.createElement("div",null,r.a.createElement("nav",{className:"footerCss"},r.a.createElement("div",{className:"container marginP"},r.a.createElement("div",{className:"marginP"},r.a.createElement(d.b,{to:"/about"},"about MAZE"))))))}}]),t}(n.Component),I=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"underCPage"},r.a.createElement("div",{className:"notFoundPHeight blackBack"},r.a.createElement("p",{className:"notFoundPTag text-center font2"},"UNDER CONSTRUCTION")))}}]),t}(n.Component),q=a(29),H=a(23),z=a(3),F=a.n(z),Z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onChange=function(t){return e.setState(Object(q.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2,sID:e.state.sID,field:e.state.field};console.log(a),e.props.registerUser(a,e.props.history),e.setState({request:!0})},e.state={name:"",email:"",password:"",password2:"",sID:"",field:"",errors:{},request:!1},e.onChange=e.onChange.bind(Object(H.a)(e)),e.onSubmit=e.onSubmit.bind(Object(H.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"masthead"},r.a.createElement("div",{className:"container d-flex h-100 align-items-center"},r.a.createElement("div",{className:"mx-auto text-center"},r.a.createElement("h1",{className:"mx-auto my-0 text-uppercase font2"},"MAZE"),r.a.createElement("form",{onSubmit:this.onSubmit,method:"post",id:"myform"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{type:"text",name:"name",className:F()("inputLayout inputBorder form-control",{redBorder:e.name}),value:this.state.name,onChange:this.onChange,placeholder:"Full name"}),e.name&&r.a.createElement("div",{className:"errorbackgroung"},e.name)),r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{type:"email",name:"email",className:F()("inputLayout inputBorder form-control",{redBorder:e.email}),value:this.state.email,onChange:this.onChange,placeholder:"Email"}),e.email&&r.a.createElement("div",{className:"errorbackgroung"},e.email)),r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{type:"number",name:"sID",className:F()("inputLayout inputBorder form-control",{redBorder:e.sID}),value:this.state.sID,onChange:this.onChange,placeholder:"Student number"}),e.sID&&r.a.createElement("div",{className:"errorbackgroung"},e.sID)),r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{type:"password",name:"password",className:F()("inputLayout inputBorder form-control",{redBorder:e.password}),value:this.state.password,onChange:this.onChange,placeholder:"Password"}),e.password&&r.a.createElement("div",{className:"errorbackgroung"},e.password)),r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{type:"password",name:"password2",className:F()("inputLayout inputBorder form-control",{redBorder:e.password2}),value:this.state.password2,onChange:this.onChange,placeholder:"Submit password"}),e.password2&&r.a.createElement("div",{className:"errorbackgroung"},e.password2)),r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("select",{name:"field",className:F()("inputLayout inputBorder form-control",{redBorder:e.grade}),value:this.state.field,onChange:this.onChange},r.a.createElement("option",{className:"option"},"Field"),r.a.createElement("option",{className:"option",value:"E"},"Electrical engineering"),r.a.createElement("option",{className:"option",value:"C"},"Computer engineering")),e.field&&r.a.createElement("div",{className:"errorbackgroung"},e.field)),r.a.createElement("div",{className:"form-row-last"},r.a.createElement("input",{type:"submit",name:"register",className:"btn font1 mybtn1 submitLayout",value:"register"}))))),r.a.createElement("div",null,r.a.createElement("nav",{className:"footerCss"},r.a.createElement("div",{className:"container marginP"},r.a.createElement("div",{className:"marginP"},r.a.createElement(d.b,{to:"/underconstruction"},"about MAZE"))))))}}]),t}(n.Component),W=Object(h.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,t){return function(a){T.a.post("/api/users/register",e).then(function(e){return t.push("/login")}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(p.g)(Z)),J=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onChange=function(t){return e.setState(Object(q.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.loginUser(a),e.setState({request:!0})},e.state={email:"",password:"",errors:{},request:!1},e.onChange=e.onChange.bind(Object(H.a)(e)),e.onSubmit=e.onSubmit.bind(Object(H.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"masthead"},r.a.createElement("div",{className:"container d-flex h-100 align-items-center"},r.a.createElement("div",{className:"mx-auto text-center"},r.a.createElement("h1",{className:"mx-auto my-0 text-uppercase font2"},"MAZE"),r.a.createElement("form",{onSubmit:this.onSubmit,method:"post",id:"myform"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{type:"email",name:"email",className:F()("inputLayout inputBorder form-control",{redBorder:e.email}),value:this.state.email,onChange:this.onChange,placeholder:"Email"}),e.email&&r.a.createElement("div",{className:"errorbackgroung"},e.email)),r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{type:"password",name:"password",className:F()("inputLayout inputBorder form-control",{redBorder:e.password}),value:this.state.password,onChange:this.onChange,placeholder:"Password"}),e.password&&r.a.createElement("div",{className:"errorbackgroung"},e.password)),r.a.createElement("div",{className:"form-row-last"},r.a.createElement("input",{type:"submit",name:"login",className:"btn font1 mybtn1 submitLayout",value:"Login"}))))),r.a.createElement("div",null,r.a.createElement("nav",{className:"footerCss"},r.a.createElement("div",{className:"container marginP"},r.a.createElement("div",{className:"marginP"},r.a.createElement(d.b,{to:"/underconstruction"},"about MAZE"))))))}}]),t}(n.Component),Y=Object(h.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(t){T.a.post("/api/users/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),D(a);var n=R()(a);t(x(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(J),K=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onChange=function(t){return e.setState(Object(q.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={answer:e.state.answer};e.props.answerQuestion(a),window.setTimeout(window.location.reload(),1e3)},e.onClickStartGame=function(t){e.props.startGame(),window.setTimeout(window.location.reload(),1e3)},e.onClickGetQRCode=function(t){e.props.getCurrenntQRCode()},e.state={answer:""},e.onChange=e.onChange.bind(Object(H.a)(e)),e.onSubmit=e.onSubmit.bind(Object(H.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getDashBoardData()}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e,t,a,n,o=[];if(void 0!==this.props.errors&&void 0!==this.props.data.data&&void 0!==this.props.data.data.question&&void 0!==this.props.data.data.group.enable){if(void 0!==this.props.data.data.groupUsers.length)for(var s=0;s<this.props.data.data.groupUsers.length;s++)void 0!==this.props.data.data.groupUsers[s].name&&o.push(r.a.createElement("h1",{className:"font2"},this.props.data.data.groupUsers[s].name));if(void 0!==this.props.data.data.group.hints&&void 0!==this.props.data.data.group.usedHints&&(t=this.props.data.data.group.hints,a=this.props.data.data.group.usedHints),null!==this.props.data.data.group.answerdQuestions.length&&(n=r.a.createElement("div",{className:"dashHeight blackBack dashpadding"},r.a.createElement("h1",{className:"text-center font2"},"Group: ",this.props.data.data.group.groupName),r.a.createElement("h1",{className:"font2"},this.props.data.data.group.answerdQuestions.length," Answerd Questions"),r.a.createElement("h1",{className:" font2"},"Hints : ",t),r.a.createElement("h1",{className:" font2"},"Used Hints : ",a),r.a.createElement("h1",{className:"font2"},"Group Members:"),o)),this.props.data.data.group.enable)if(this.props.data.data.question){var c=this.props.data.data.currentQuestion;e=r.a.createElement("div",{className:"dashHeight blackBack dashpadding"},r.a.createElement("h1",{className:"text-center font2"},c.questionName),r.a.createElement("p",{className:""},c.questionText),r.a.createElement("form",{onSubmit:this.onSubmit,method:"post",id:"myform"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{type:"answer",name:"answer",className:"inputLayout inputBorder form-control",value:this.state.email,onChange:this.onChange,placeholder:"Answer"}),this.props.data.picture&&r.a.createElement("div",{className:"errorbackgroung"},this.props.errors.wrongAnswer)),r.a.createElement("div",{className:"form-row-last"},r.a.createElement("input",{type:"submit",name:"submit",className:"btn font1 mybtn1 submitLayout",value:"Submit"}))))}else this.props.data.data.question||(console.log("3"),e=e=r.a.createElement("div",{className:"dashHeight blackBack dashpadding"},r.a.createElement("button",{onClick:this.onClickGetQRCode,className:"btn notFoundPTag text-cente font1 mybtn1"},"Get You Gift :)")));else console.log("1"),e=r.a.createElement("div",{className:"dashHeight blackBack dashpadding"},r.a.createElement("button",{onClick:this.onClickStartGame,className:"btn notFoundPTag text-cente font1 mybtn1"},"Start Game"))}return r.a.createElement("div",{className:"underCPage"},r.a.createElement("div",{className:" admin-scroll-y"},e,n))}}]),t}(n.Component),V=Object(h.b)(function(e){return{data:e.data,auth:e.auth,errors:e.errors}},{getDashBoardData:function(e){return function(e){T.a.get("/api/users/getDashBoardData").then(function(t){e({payload:t.data,type:"GET_DATA"})}).catch(function(t){return e({type:"GET_ERRORS",payload:t.response.data})})}},getCurrenntQRCode:function(e,t){return function(e){T.a.request({url:"/api/users/getCurrentQRCode",method:"GET",responseType:"blob"}).then(function(e){var t=e.data,a=window.URL.createObjectURL(new Blob([t])),n=document.createElement("a");n.href=a,n.setAttribute("download","a.jpg"),document.body.appendChild(n),n.click(),n.remove()})}},startGame:function(e,t){return function(e){T.a.get("/api/users/startGame").then(function(t){e({payload:t.data,type:"GET_DATA"})}).catch(function(t){return e({type:"GET_ERRORS",payload:t.response.data})})}},answerQuestion:function(e){return function(t){T.a.post("/api/users/answerQuestion",e).then(function(e){e.data.wrongAnswer&&t({payload:e.data.wrongAnswer,type:"GET_PICTURE"})}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(K),X=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.url.split("/");console.log(e[e.length-1]),this.props.checkQR(e[e.length-1]),this.props.history.push("/dashboard")}},{key:"render",value:function(){return r.a.createElement("div",{className:"underCPage"},r.a.createElement("div",{className:" admin-scroll-y"},r.a.createElement("div",{className:"dashHeight blackBack dashpadding"},r.a.createElement("h1",{className:"text-center font2"},"Wrong QR Code"))))}}]),t}(n.Component),$=Object(h.b)(function(e){return{data:e.data,auth:e.auth}},{checkQR:function(e){return function(t){T.a.get("/api/users/checkQRCode/".concat(e)).then(function(e){}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(X),ee=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"masthead"},r.a.createElement("div",{className:"notFoundPHeight"},r.a.createElement("h1",{className:"notFoundPTag text-center font2"},"404")))}}]),t}(n.Component),te=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.allUsers()}},{key:"render",value:function(){var e=this.props.admin.users,t=[];return null===e&&void 0===e||e.length>0&&(t=e.map(function(e){return r.a.createElement("div",{className:"card text-center admin-card margin-top-admin"},r.a.createElement("div",{className:"card-body card-admin-background"},r.a.createElement("h5",{className:"card-title"},"name: ",e.name),r.a.createElement("h5",{className:"card-title"},"email: ",e.email),r.a.createElement("h5",{className:"card-title"},"sID: ",e.sID),r.a.createElement("h5",{className:"card-title"},"field: ",e.field),r.a.createElement("h5",{className:"card-title"},"register date: ",e.date)))})),r.a.createElement("div",{className:"masterhead-background"},r.a.createElement("br",null),r.a.createElement("div",{className:"admin-scroll-y"},t,t))}}]),t}(n.Component),ae=Object(h.b)(function(e){return{admin:e.admin}},{allUsers:function(){return function(e){T.a.get("/api/users/all").then(function(t){return e({type:"GET_ALL_USERS",payload:t.data})}).catch(function(t){return e({type:"GET_ERRORS",payload:{}})})}}})(te),ne=(a(122),a(123),a(143),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:" qwewq py-5 bg-image-full"}),r.a.createElement("section",{className:"py-5"},r.a.createElement("div",{className:"container persianDirection font3"},r.a.createElement("h1",{className:"floattt"},"\u062f\u0631 \u0628\u0627\u0631\u0647 \u06cc \u0631\u0648\u06cc\u062f\u0627\u062f"),r.a.createElement("p",{className:"persianDirection floattt"},"\u0647\u0640\u0640\u0631\u0633\u0640\u0640\u0627\u0644\u060c\u0634\u0640\u0640\u0627\u062e\u0647\u062f\u0627\u0646\u0634\u0640\u0640\u062c\u0648\u06cc\u064e\u06ccACM\u062f\u0627\u0646\u0634\u0640\u0640\u06af\u0627\u0647\u062a\u0647\u0640\u0640\u0631\u0627\u0646\u060c\u0631\u0648\u06cc\u0640\u062f\u0627\u062f\u06cc \u0628\u0640\u0631\u0627\u06cc \u0627\u0653\u0634\u0640\u0646\u0627\u06cc\u06cc \u0648\u0631\u0648\u062f\u06cc \u0647\u0640\u0627 \u0628\u0640\u0627 \u0627\u06cc\u0640\u0646 \u0634\u0640\u0627\u062e\u0647\u060c \u0645\u062d\u06cc\u0640\u0637 \u062f\u0627\u0646\u0634\u0640\u06a9\u062f\u0647 \u0648 \u062f\u0627\u0646\u0634\u0640\u062c\u0648\u0647\u0627\u06cc \u0633\u0640\u0627\u0644 \u0628\u0627\u0644\u0627\u06cc\u0640\u06cc \u0628\u0631\u06af\u0640\u0632\u0627\u0631 \u0645\u0640\u06cc \u06a9\u0646\u0640\u062f. \u06a9\u0645\u0640\u0640\u06a9 \u0628\u0640\u0640\u0647 \u062f\u0627\u0646\u0634\u0640\u0640\u062c\u0648\u0647\u0627\u06cc \u0633\u0640\u0640\u0627\u0644 \u0627\u0648\u0644 \u0628\u0640\u0640\u0631\u0627\u06cc \u062a\u062c\u0631\u0628\u0640\u0640\u0647 \u06cc \u06a9\u0627\u0631 \u06af\u0631\u0648\u0647\u0640\u0640\u06cc\u060c \u0627\u0632 \u0627\u0647\u0640\u0640\u062f\u0627\u0641 \u0645\u0647\u0640\u0640\u0645 \u0628\u0631\u06af\u0640\u0640\u0632\u0627\u0631\u06cc \u0627\u06cc\u0640\u0640\u0646 \u0631\u0648\u06cc\u0640\u0640\u062f\u0627\u062f \u0627\u0633\u0640\u0640\u062a. \u0628\u0640\u0627 \u0627\u06cc\u0646\u06a9\u0640\u0647 \u0647\u0640\u062f\u0641 \u0627\u06cc\u0640\u0646 \u0631\u0648\u06cc\u0640\u062f\u0627\u062f \u062b\u0627\u0628\u0640\u062a \u0628\u0640\u0648\u062f\u0647 \u0627\u0645\u0640\u0627 \u0646\u062d\u0640\u0648\u0647 \u06cc \u0628\u0631\u06af\u0640\u0632\u0627\u0631\u06cc \u0627\u0653\u0646 \u062a\u063a\u06cc\u06cc\u0640\u0631\u0627\u062a \u0632\u06cc\u0640\u0627\u062f\u06cc \u06a9\u0640\u0631\u062f\u0647 \u0627\u0633\u0640\u062a. \u0633\u0640\u0627\u0644 \u06af\u0630\u0634\u0640\u062a\u0647\u060c \u0628\u0640\u0631\u0627\u06cc \u0627\u0648\u0644\u06cc\u0640\u0646 \u0628\u0640\u0627\u0631\u060c \u0627\u06cc\u0640\u0646 \u0631\u0648\u06cc\u0640\u062f\u0627\u062f \u0628\u0640\u0627 \u0639\u0646\u0640\u0648\u0627\u0646 Maze \u0628\u0631\u06af\u0632\u0627\u0631 \u0634\u0640\u062f. \u0634\u0640\u0627\u062e\u0647 \u062f\u0627\u0646\u0634\u0640\u062c\u0648\u06cc\u06cc ACM \u0642\u0635\u0640\u062f \u062f\u0627\u0631\u062f \u06a9\u0640\u0647 \u0627\u0645\u0633\u0640\u0627\u0644 \u062f\u0648\u0645\u06cc\u0640\u0646 \u062f\u0648\u0631\u0647 Maze \u0631\u0627 \u062f\u0631 \u0627\u0653\u0628\u0640\u0640\u0627\u0646 \u0645\u0640\u0640\u0627\u0647 \u0628\u0640\u0640\u0631\u0627\u06cc \u0647\u0645\u0640\u0640\u0647 \u06cc \u0648\u0631\u0648\u062f\u06cc \u0647\u0640\u0640\u0627\u06cc \u062c\u062f\u06cc\u0640\u062f \u062f\u0627\u0646\u0634\u0640\u06a9\u062f\u0647 \u06cc \u0628\u0640\u0631\u0642 \u0648 \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0640\u0631 \u0628\u0631\u06af\u0640\u0632\u0627\u0631 \u06a9\u0646\u0640\u062f. Maze\u061f Maze \u06cc\u0640\u06a9 \u0645\u0633\u0640\u0627\u0628\u0642\u0647 \u0645\u0639\u0645\u0627\u06cc\u0640\u06cc \u0627\u0633\u0640\u062a \u06a9\u0640\u0647 \u0628\u0640\u0647 \u067e\u06cc\u0640\u0634 \u0646\u06cc\u0640\u0627\u0632\u06cc \u062f\u0631 \u0632\u0645\u06cc\u0646\u0640\u0647 \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0640\u0631 \u0648 \u0628\u0631\u0646\u0627\u0645\u0640\u0647 \u0646\u0648\u06cc\u0633\u0640\u06cc \u0646\u06cc\u0640\u0627\u0632 \u0646\u0640\u062f\u0627\u0631\u062f \u0648 \u062a\u0646\u0647\u0640\u0627 \u062e\u0644\u0627\u0642\u06cc\u0640\u062a \u0634\u0640\u0645\u0627 \u0631\u0627 \u0628\u0640\u0647 \u0686\u0627\u0644\u0640\u0634 \u0645\u0640\u06cc \u06a9\u0634\u0640\u062f. \u062f\u0631 \u0627\u06cc\u0640\u0646 \u0645\u0633\u0640\u0627\u0628\u0642\u0647 \u0634\u0631\u06a9\u0640\u0640\u062a \u06a9\u0646\u0646\u0640\u0640\u062f\u0647 \u0647\u0640\u0640\u0627 \u062f\u0631 \u0642\u0627\u0644\u0640\u0640\u0628 \u062a\u06cc\u0640\u0640\u0645 \u0628\u0640\u0640\u0627 \u0647\u0640\u0640\u0645 \u0645\u0633\u0640\u0640\u0627\u0628\u0642\u0647 \u0645\u0640\u0640\u06cc \u062f\u0647\u0646\u0640\u062f. \u0647\u0640\u0631 \u062a\u06cc\u0640\u0645 \u062f\u0627\u0631\u0627\u06cc \u06cc\u0640\u06a9 \u06cc\u0640\u0627 \u062f\u0648 \u0631\u0627\u0647\u0646\u0640\u0645\u0627 \u0627\u0633\u0640\u062a \u06a9\u0640\u0647 \u062f\u0631 \u062c\u0631\u06cc\u0640\u0627\u0646 \u0645\u0633\u0640\u0627\u0628\u0642\u0647 \u0628\u0640\u0647 \u062a\u06cc\u0640\u0645 \u06a9\u0645\u0640\u06a9 \u0645\u0640\u06cc \u06a9\u0646\u0646\u0640\u062f. \u0647\u0640\u0631 \u062a\u06cc\u0640\u0645 \u0628\u0640\u0627 \u0627\u0633\u0640\u0640\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0646\u0642\u0634\u0640\u0640\u0647 \u0648 \u0647\u0634\u0640\u0640\u062f\u0627\u0631\u0647\u0627\u06cc\u06cc \u06a9\u0640\u0640\u0647 \u062f\u0631 \u0645\u0633\u0640\u0640\u06cc\u0631 \u0648\u062c\u0640\u0640\u0648\u062f \u062f\u0627\u0631\u062f\u060c \u0628\u0640\u0640\u0647 \u067e\u0631\u0633\u0640\u0640\u0634 \u0647\u0640\u0640\u0627\u06cc \u0645\u0633\u0640\u0640\u0627\u0628\u0642\u0647 \u0645\u0640\u0640\u06cc \u0631\u0633\u0640\u0640\u0646\u062f \u0648 \u0633\u0640\u0640\u067e\u0633 \u0628\u0640\u0640\u0647 \u0627\u0653\u0646 \u0647\u0640\u0627 \u067e\u0627\u0633\u0640\u062e \u0645\u0640\u06cc \u062f\u0647\u0646\u0640\u062f. \u06af\u0631\u0648\u0647\u0640\u06cc \u06a9\u0640\u0647 \u0632\u0648\u062f\u062a\u0640\u0631 \u0627\u0632 \u0628\u0642\u06cc\u0640\u0647 \u0628\u0640\u0647 \u0647\u0645\u0640\u0640\u0647 \u067e\u0631\u0633\u0640\u0640\u0634 \u0647\u0640\u0640\u0627 \u067e\u0627\u0633\u0640\u0640\u062e \u062f\u0631\u0633\u0640\u0640\u062a \u0628\u062f\u0647\u0640\u0640\u062f\u060c \u0628\u0631\u0646\u0640\u0640\u062f\u0647 \u0645\u0633\u0640\u0640\u0627\u0628\u0642\u0647 \u062e\u0648\u0627\u0647\u0640\u062f \u0628\u0640\u0648\u062f."))),r.a.createElement("section",{class:" ertre py-5 bg-image-full"},r.a.createElement("div",{style:{height:"200px"}})),r.a.createElement("section",{class:"py-5"},r.a.createElement("section",{class:"py-5"},r.a.createElement("div",{class:"container persianDirection font3"},r.a.createElement("h1",{className:"floattt"},"\u0631\u0648\u0646\u062f \u0645\u0633\u0627\u0628\u0642\u0647"),r.a.createElement("p",{className:"floattt"},"\u062f\u0631 \u0627\u06cc\u0646 \u0645\u0633\u0627\u0628\u0642\u0647\u060c \u0634\u0631\u06a9\u062a \u06a9\u0646\u0646\u062f\u0647 \u0647\u0627 \u0628\u0647 \u06af\u0631\u0648\u0647 \u0647\u0627\u06cc \u0686\u0646\u062f \u0646\u0641\u0631\u0647 \u062a\u0642\u0633\u06cc\u0645 \u0645\u06cc \u0634\u0648\u0646\u062f \u0648 \u0628\u0631\u0627\u06cc \u0647\u0631 \u06af\u0631\u0648\u0647 \u06cc\u06a9 \u06cc\u0627 \u062f\u0648 \u062a\u0627 \u0631\u0627\u0647\u0646\u0645\u0627 \u062a\u0639\u06cc\u06cc\u0646 \u0645\u06cc \u0634\u0648\u062f. \u062f\u0631 \u0627\u06cc\u0646 \u0645\u0633\u0627\u0628\u0642\u0647 \u0628\u0627\u06cc\u062f \u0628\u0647 \u062a\u0639\u062f\u0627\u062f\u06cc \u0633\u0648\u0627\u0644 \u0645\u0639\u0645\u0627\u06cc \u067e\u0627\u0633\u062e \u062f\u0647\u06cc\u062f. \u0628\u0631\u0627\u06cc \u0647\u0631 \u06af\u0631\u0648\u0647 \u0645\u0633\u06cc\u0631 \u062c\u062f\u0627\u06af\u0627\u0646\u0647 \u0627\u06cc \u0627\u0632 \u06af\u0631\u0648\u0647 \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u062f\u0631 \u0646\u0638\u0631 \u06af\u0631\u0641\u062a\u0647 \u0634\u062f\u0647 \u06a9\u0647 \u062f\u0631 \u0627\u0653\u0646 \u0645\u0633\u06cc\u0631 QR Code \u0647\u0627\u06cc\u06cc \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f \u06a9\u0647 \u0628\u0627 \u0627\u0633\u06a9\u0646 \u0627\u0653\u0646 \u0647\u0627\u060c \u0633\u0648\u0627\u0644\u0627\u062a \u0628\u0631\u0627\u06cc \u0627\u0653\u0646 \u0647\u0627 \u0628\u0627\u0632 \u0645\u06cc \u0634\u0648\u062f. \u0647\u0631 \u06af\u0631\u0648\u0647 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0646\u0642\u0634\u0647 \u0648 \u0647\u0634\u062f\u0627\u0631\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0631\u0627\u06cc \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u0645\u0633\u06cc\u0631 \u0628\u0647 \u0627\u0653\u0646 \u0647\u0627 \u062f\u0627\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f\u061b \u0628\u0627\u06cc\u062f \u0628\u062a\u0648\u0627\u0646\u062f \u0645\u0633\u06cc\u0631 \u062e\u0648\u062f \u0631\u0627 \u0628\u06cc\u0627\u0628\u062f. \u067e\u0633 \u0627\u0632 \u062d\u0644 \u062f\u0631\u0633\u062a \u0647\u0631 \u0633\u0648\u0627\u0644\u060c \u0628\u0627\u06cc\u062f \u0645\u06a9\u0627\u0646 QR Code \u062f\u06cc\u06af\u0631 \u0631\u0627 \u067e\u06cc\u062f\u0627 \u06a9\u0646\u0646\u062f. \u062f\u0631 \u0646\u0647\u0627\u06cc\u062a\u060c \u06af\u0631\u0648\u0647\u06cc \u06a9\u0647 \u0632\u0648\u062f\u062a\u0631 \u0627\u0632 \u0633\u0627\u06cc\u0631 \u06af\u0631\u0648\u0647 \u0647\u0627 \u0628\u0647 \u0647\u0645\u0647 \u06cc \u0633\u0648\u0627\u0644\u0627\u062a \u067e\u0627\u0633\u062e \u062f\u0631\u0633\u062a \u0628\u062f\u0647\u062f\u060c \u0628\u0631\u0646\u062f\u0647 \u0645\u0633\u0627\u0628\u0642\u0647 \u062e\u0648\u0627\u0647\u062f \u0628\u0648\u062f."))),r.a.createElement("header",{class:" ded py-5 bg-image-full"}),r.a.createElement("section",{class:"py-5"},r.a.createElement("div",{class:"container persianDirection font3"},r.a.createElement("h1",{className:"floattt"},"\u0646\u0638\u0631 \u0628\u0686\u0647 \u0647\u0627\u06cc \u0669\u0667\u061f"),r.a.createElement("p",{className:"persianDirection floattt"},"\u0627\u0648\u0644\u06cc\u0640\u0646 \u0628\u0640\u0627\u0631\u06cc \u0628\u0640\u0648\u062f \u06a9\u0640\u0647 \u0627\u062d\u0633\u0640\u0627\u0633 \u06a9\u0640\u0631\u062f\u0645 \u0628\u0627\u0644\u0627\u062e\u0631\u0647 \u062f\u0627\u0646\u0634\u0640\u062c\u0648 \u0634\u0640\u062f\u0647 \u0627\u0645. \u0634\u0640\u0627\u06cc\u062f \u06cc\u06a9\u0640\u06cc \u0627\u0632 \u0628\u0647\u062a\u0631\u06cc\u0640\u0646 \u0631\u0648\u0632\u0647\u0640\u0627\u06cc \u062a\u0640\u0631\u0645 \u06cc\u0640\u06a9 \u0628\u0640\u0648\u062f. \u0634\u0640\u0627\u06cc\u062f \u06a9\u0640\u0647 \u0646\u0640\u0647\u060c \u0642\u0637\u0639\u0640\u0627. \u0627\u0648\u0644\u06cc\u0640\u0646 \u0631\u0648\u0632\u06cc \u0628\u0640\u0648\u062f \u06a9\u0640\u0647 \u0646\u0633\u0640\u0628\u062a \u0628\u0640\u0647 \u062f\u0627\u0646\u0634\u0640\u06af\u0627\u0647 \u0627\u062d\u0633\u0640\u0627\u0633 \u062a\u0639\u0644\u0640\u0642 \u06a9\u0640\u0631\u062f\u0645. \u0628\u0640\u0631\u0627\u06cc Maze\u060c \u06a9\u0640\u0647 \u0646\u0645\u0640\u06cc \u062f\u0627\u0646\u0633\u0640\u062a\u0645 \u0686\u06cc\u0633\u0640\u062a\u060c \u06cc\u0640\u06a9 \u0631\u0648\u0632 \u0632\u0648\u062f\u062a\u0640\u0631 \u0627\u0632 \u0634\u0647\u0631\u0633\u0640\u0640\u062a\u0627\u0646 \u0628\u0640\u0640\u0647 \u062a\u0647\u0640\u0640\u0631\u0627\u0646 \u0627\u0653\u0645\u0640\u0640\u062f\u0645 \u0648 \u0627\u0644\u0627\u0646 \u062e\u06cc\u0644\u0640\u0640\u06cc \u062e\u0640\u0640\u0648\u0634 \u062d\u0640\u0640\u0627\u0644 \u0647\u0633\u0640\u062a\u0645 \u06a9\u0640\u0647 \u0627\u0653\u0646 \u0631\u0627 \u0627\u0632 \u062f\u0633\u0640\u062a \u0646\u0640\u062f\u0627\u062f\u0645. \u0645\u0640\u06cc \u062a\u0640\u0648\u0627\u0646 \u06af\u0641\u0640\u062a \u0628\u0647\u062a\u0631\u06cc\u0640\u0646 \u0627\u0653\u063a\u0640\u0627\u0632 \u062f\u0627\u0646\u0634\u0640\u06a9\u062f\u0647 \u0628\u0640\u0648\u062f. \u0628\u0640\u0647 \u0639\u0628\u0627\u0631\u062a\u0640\u06cc \u0627\u0648\u0644\u06cc\u0640\u0646 \u0645\u062d\u06cc\u0640\u0637 \u0635\u0645\u06cc\u0645\u0640\u06cc \u062f\u0627\u0646\u0634\u0640\u06a9\u062f\u0647 \u0627\u0633\u0640\u062a \u0648 \u0633\u0640\u0627\u06cc\u062a \u0646\u0634\u0640\u06cc\u0646\u06cc \u0647\u0640\u0627\u06cc \u0637\u0648\u0644\u0627\u0646\u0640\u06cc \u0648 \u06a9\u0646\u0640\u0627\u0631 \u0647\u0640\u0645 \u0628\u0640\u0648\u062f\u0646 \u0631\u0627 \u062f\u0631 \u06cc\u0640\u06a9 \u0631\u0648\u0632 \u0628\u0640\u0647 \u0635\u0640\u0648\u0631\u062a \u06a9\u0648\u062a\u0640\u0627\u0647 \u062a\u062c\u0631\u0628\u0640\u0647 \u0645\u0640\u06cc \u06a9\u0646\u06cc\u0640\u062f. - \u0647\u0645\u06cc\u0646 \u06a9\u0647 \u062e\u0648\u0634 \u06af\u0630\u0634\u062a \u06a9\u0627\u0641\u06cc\u0633\u062a. \u0646\u06cc\u0633\u062a\u061f - \u0627\u0648\u0644 \u0627\u06cc\u0646\u06a9\u0640\u0640\u0647 \u062e\u06cc\u0644\u0640\u0640\u06cc \u062f\u0631 \u0627\u0653\u0634\u0640\u0640\u0646\u0627\u06cc\u06cc \u0648 \u0635\u0645\u06cc\u0645\u0640\u0640\u06cc \u0634\u0640\u0640\u062f\u0646 \u0628\u0686\u0640\u0647 \u0647\u0640\u0627 \u062a\u0627\u062b\u06cc\u0640\u0631 \u062f\u0627\u0634\u0640\u062a. \u0628\u0640\u0647 \u0639\u0646\u0640\u0648\u0627\u0646 \u062a\u06cc\u0640\u0645 \u0642\u0647\u0631\u0645\u0640\u0627\u0646 \u062f\u0648\u0631\u0647 \u0642\u0628\u0640\u0644\u060c \u0634\u0640\u0640\u062f\u06cc\u062f\u0627 \u062a\u0648\u0635\u06cc\u0640\u0640\u0647 \u0645\u0640\u0640\u06cc \u06a9\u0646\u0640\u0640\u0645. - \u0627\u0641\u0640\u0631\u0627\u062f \u062c\u062f\u06cc\u0640\u062f\u06cc \u0634\u0640\u0646\u0627\u062e\u062a\u0645. \u0627\u0632 \u06a9\u0627\u0631 \u062a\u06cc\u0645\u0640\u06cc \u0628\u0640\u0647 \u0634\u0640\u062f\u062a \u0644\u0640\u0640\u0630\u062a \u0628\u0640\u0640\u0631\u062f\u0645. \u062e\u0640\u0640\u0648\u062f\u0645 \u0631\u0627 \u0628\u0640\u0640\u0647 \u0628\u0647\u062a\u0631\u06cc\u0640\u0640\u0646 \u062d\u0627\u0644\u0640\u0640\u062a \u0628\u0640\u0640\u0647 \u0686\u0627\u0644\u0640\u0640\u0634 \u06a9\u0634\u0640\u0640\u06cc\u062f \u0645 .")))))}}]),t}(n.Component));if(localStorage.jwtToken){D(localStorage.jwtToken);var re=R()(localStorage.jwtToken);C.dispatch(x(re));var oe=Date.now()/1e3;re.exp<oe&&(C.dispatch(A()),window.location.href="/login")}var se=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{store:C},r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:Q}),r.a.createElement(p.b,{path:"/underconstruction",component:I}),r.a.createElement(p.b,{path:"/register",component:W}),r.a.createElement(p.b,{path:"/login",component:Y}),r.a.createElement(p.b,{path:"/about/:id",component:ne}),r.a.createElement(G,{path:"/dashboard",component:V}),r.a.createElement(G,{path:"/qrcode/:QRCodeId",component:$}),r.a.createElement(U,{path:"/allusers",component:ae}),r.a.createElement(p.b,{component:ee})))))}}]),t}(n.Component);a(144);s.a.render(r.a.createElement(se,null),document.getElementById("root"))},90:function(e,t,a){e.exports=a.p+"static/media/roanoicon.9a92b331.jpg"},91:function(e,t,a){e.exports=a(145)}},[[91,1,2]]]);
//# sourceMappingURL=main.debe6a4f.chunk.js.map