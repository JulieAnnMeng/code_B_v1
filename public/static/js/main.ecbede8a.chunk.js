(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,s,t){},16:function(e,s,t){},18:function(e,s,t){"use strict";t.r(s);var n=t(1),c=t(10),i=t.n(c),a=(t(15),t(4)),r=(t(16),t(3)),o=t(2),l=t(0);var d=function(e){var s=e.user,t=e.addInterest,n=e.interestStar,c=e.id,i=e.topic,a=e.discussion,d=e.icon,j=e.username,b=e.commentCount,m=e.interestCount,u=e.interests,h=e.entryUserID,O=Object(r.f)();return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("br",{}),Object(l.jsxs)(o.b,{to:"/Discussion/".concat(c),className:"title",children:[" ",i," "]}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:a}),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)(o.b,{to:"/ViewUser/".concat(h),className:"small-icon",children:d})," ",j]}),Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-block",children:[Object(l.jsxs)("button",{className:"btn btn-primary bttn2",onClick:function(e){if(e.preventDefault(),s)if(!u.find((function(e){return e.discussion_id===c}))){var n=s.id;m+=1,t(n,c)}else console.log("Already interested");else O("/Login")},children:[n?" \u2605 ":" \u2606 "," ",Object(l.jsx)("span",{className:"badge bg-secondary",children:m})," Interests"]}),"\xa0 \xa0",Object(l.jsxs)(o.b,{to:s?"/CommentForm/".concat(c):"/Discussion/".concat(c),className:"btn btn-primary bttn2",children:[Object(l.jsx)("span",{className:"badge bg-secondary",children:b})," Comments"]})]}),Object(l.jsx)("br",{})]})};var j=function(e){var s=e.id,t=e.username,n=e.addInterest,c=e.topic,i=e.discussion,a=e.icon,r=e.user,o=e.comments,j=e.interests,b=e.interestCount,m=e.interestStar,u=e.entryUserID,h=o.length;return Object(l.jsxs)("div",{className:"card",id:s,children:[Object(l.jsx)(d,{id:s,user:r,interests:j,addInterest:n,interestStar:m,topic:c,discussion:i,icon:a,username:t,commentCount:h,interestCount:b,entryUserID:u},s),"\xa0"]})};var b=function(e){var s,t,n,c,i=e.board,a=e.addInterest,r=e.user;return r&&(c=r.icon?r.icon:Object(l.jsx)(o.b,{to:"/UserPage",className:"icon",children:r.first_name.charAt(0)+r.last_name.charAt(0)})),s=i.map((function(e){var s;return r?(t=!!r.userPage.interests.find((function(s){return s.discussion_id===e.id})),n=r.userPage.interests):(t=null,n=null),s=e.user.icon?e.user.icon:e.user.first_name.charAt(0)+e.user.last_name.charAt(0),Object(l.jsx)(j,{id:e.id,topic:e.topic,discussion:e.discussion,user:r,interests:n,interestStar:t,addInterest:a,icon:s,username:e.user.username,comments:e.comments,interestCount:e.interests.length,entryUserID:e.user.id},e.id)})),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"intro",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("h1",{className:"welcome",children:[" ",r?c:null," Welcome to Code ",Object(l.jsx)("span",{children:"B"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),r?Object(l.jsxs)(o.b,{to:"/DiscussionForm",className:"btn btn-primary btn-outline-success bttn discus-bttn",children:[Object(l.jsx)("br",{}),"Start a discussion",Object(l.jsx)("br",{})]}):null,Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{className:"info",children:"A forum for all coding discussions, where users can interact with each other and continue their education in programming."}),Object(l.jsx)("br",{})]}),Object(l.jsx)("h2",{className:"board",children:"Discussion Board"}),"\xa0",s,"\xa0 \xa0"]})};var m=function(e){var s,t=e.user,c=e.board,i=e.setSearchReturn,d=e.logOut,j=Object(r.f)(),b=Object(n.useState)(""),m=Object(a.a)(b,2),u=m[0],h=m[1];return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar",id:"Navbar",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsxs)("a",{href:"/",id:"Navbar-title",children:["Code ",Object(l.jsx)("span",{children:"B"})]}),Object(l.jsxs)("form",{className:"d-flex",onSubmit:function(e){e.preventDefault(),s=c.filter((function(e){return e.topic.toLowerCase().includes(u.toLowerCase())||e.discussion.toLowerCase().includes(u.toLowerCase())})),i(s),j("/")},children:[Object(l.jsx)("input",{id:"search",className:"form-control me-2 bttn",type:"search",placeholder:"\ud83d\udd0d Search code_B","aria-label":"Search",name:"search",value:u,onChange:function(e){h(e.target.value)}}),Object(l.jsx)("button",{className:"bttn",type:"submit",children:"Search"})]}),Object(l.jsxs)("ul",{className:"nav",children:[Object(l.jsx)("li",{children:t?Object(l.jsx)("button",{className:"bttn",onClick:d,children:"Logout"}):Object(l.jsx)("a",{href:"/Login",className:"bttn",id:"navBar-bttn",children:"Login"})}),"\xa0 \xa0",Object(l.jsx)("li",{children:t?Object(l.jsx)(o.b,{to:"/ProfilePage",className:"bttn",id:"navBar-bttn",children:"\ud83d\udc64"}):Object(l.jsx)("a",{href:"/Signup",className:"bttn",id:"navBar-bttn",children:"Signup"})})]})]})})})},u=t(7),h=t(5);var O=function(e){var s=e.logIn,t=(e.errors,{username:"",password:""}),c=Object(n.useState)(t),i=Object(a.a)(c,2),r=i[0],d=i[1];function j(e){d(Object(h.a)(Object(h.a)({},r),{},Object(u.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"form-title",children:"Login"}),"\xa0",Object(l.jsx)("div",{className:"container login-outside",children:Object(l.jsxs)("div",{className:"container login-inside",children:["\xa0",Object(l.jsxs)("form",{className:"container login-form",onSubmit:function(e){e.preventDefault(),console.log(r),s(r),d(t)},children:[Object(l.jsxs)("div",{className:"fields",children:[Object(l.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsx)("label",{className:"col-form-label login-label",children:Object(l.jsx)("span",{children:"Username"})})}),Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsx)("input",{id:"username-login",className:"form-control input",size:"50","aria-describedby":"usernameHelpInline",placeholder:"Username",name:"username",value:r.username,onChange:j})})]}),"\xa0 \xa0",Object(l.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsx)("label",{className:"col-form-label login-label",children:Object(l.jsx)("span",{children:" Password  "})})}),Object(l.jsx)("div",{className:"col-auto ",children:Object(l.jsx)("input",{id:"password-login",className:"form-control input",size:"50","aria-describedby":"passwordHelpInline",placeholder:"Password",type:"password",name:"password",value:r.password,onChange:j})})]})]}),"\xa0",Object(l.jsxs)("div",{className:"submit d-grid gap-2 d-md-block",children:[Object(l.jsx)("button",{type:"submit",className:"btn btn-primary bttn",children:"Login"}),"\xa0 \xa0",Object(l.jsx)(o.b,{to:"/signup",className:"btn btn-primary bttn",children:Object(l.jsx)("p",{className:"signup-link",children:"Signup"})})]})]})]})})]})};var x=function(e){var s=e.signUp,t={first_name:"",last_name:"",username:"",password:"",password_confirmation:""},c=Object(n.useState)(t),i=Object(a.a)(c,2),r=i[0],o=i[1];function d(e){console.log(r),o(Object(h.a)(Object(h.a)({},r),{},Object(u.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"form-title",children:"Signup"}),"\xa0",Object(l.jsx)("div",{className:"container signup-outside",children:Object(l.jsxs)("div",{className:"container signup-inside",children:[Object(l.jsx)("h1",{className:"form-type-title",children:"Personal Information: "}),"\xa0",Object(l.jsxs)("form",{className:"container signup-form right",onSubmit:function(e){e.preventDefault(),console.log(r),s(r),o(t)},children:[Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("label",{className:"col-sm-2 col-form-label signup-label signup-label",children:Object(l.jsx)("span",{children:"Firstname"})}),Object(l.jsx)("div",{className:"col-sm-10 signup-input",children:Object(l.jsx)("input",{id:"firstname-signup",className:"form-control input",type:"firstname",placeholder:"First name",name:"first_name",value:r.first_name,onChange:d})})]}),"\xa0",Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("label",{className:"col-sm-2 col-form-label signup-label",children:Object(l.jsx)("span",{children:"Lastname"})}),Object(l.jsx)("div",{className:"col-sm-10 signup-input",children:Object(l.jsx)("input",{id:"lastname-signup",type:"lastname",className:"form-control input",placeholder:"Last name",name:"last_name",value:r.last_name,onChange:d})})]}),"\xa0",Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("label",{className:"col-sm-2 col-form-label signup-label",children:Object(l.jsx)("span",{children:"Username"})}),Object(l.jsx)("div",{className:"col-sm-10 signup-input",children:Object(l.jsx)("input",{id:"username-signup",type:"username",className:"form-control input",placeholder:"username",name:"username",value:r.username,onChange:d})})]}),"\xa0",Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("label",{className:"col-sm-2 col-form-label signup-label",children:Object(l.jsx)("span",{children:"Password"})}),Object(l.jsx)("div",{className:"col-sm-10 signup-input",children:Object(l.jsx)("input",{id:"password-signup",type:"password",className:"form-control input",placeholder:"password",name:"password",value:r.password,onChange:d})})]}),"\xa0",Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("label",{className:"col-sm-2 col-form-label signup-label",children:Object(l.jsx)("span",{children:"Password Confirmation"})}),Object(l.jsx)("div",{className:"col-sm-10 signup-input",children:Object(l.jsx)("input",{id:"password-confirmation-signup",type:"password",className:"form-control input",placeholder:"Password confirmation",name:"password_confirmation",value:r.password_confirmation,onChange:d})})]}),Object(l.jsx)("div",{className:"signup-btn",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-primary center bttn",children:"Signup"})})]})]})})]})};var p=function(e){e.id;var s,t=e.comment,n=e.commentor;return n&&(s=n.icon?n.icon:Object(l.jsx)(o.b,{to:"/ViewUser/".concat(n.id),className:"small-icon",children:n.first_name.charAt(0)+n.last_name.charAt(0)})),Object(l.jsxs)("div",{className:"card container",children:["\xa0",Object(l.jsx)("p",{children:t}),Object(l.jsxs)("p",{children:[s," ",n.user]})]})};var f=function(e){var s,t,n,c,i,a,d,j,b=e.user,m=e.addInterest,u=e.board,h=Object(r.g)().id,O=Object(r.f)();return u&&(n=(t=u.find((function(e){return e.id===parseInt(h)}))).interests.length,s="".concat(t.comments.length," comments below. Join the discussion!"),j=t.user.icon?t.user.icon:t.user.first_name.charAt(0)+t.user.last_name.charAt(0),t.comments?i=t.comments.map((function(e){return Object(l.jsx)(p,{id:e.id,logOn:b,comment:e.comment,commentor:e.commentor},e.id)})):(s="No comments available",i=null)),b?(d=b.icon?b.icon:Object(l.jsx)(o.b,{to:"/UserPage",className:"icon",children:b.first_name.charAt(0)+b.last_name.charAt(0)}),a=!!b.userPage.interests.find((function(e){return e.discussion_id===parseInt(h)})),c=s):(null,c="Login or signup to participate"),Object(l.jsxs)("div",{className:"container",children:[t?Object(l.jsxs)(l.Fragment,{children:["\xa0",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("h1",{className:"welcome",children:[" ",b?d:null," Welcome to Code ",Object(l.jsx)("span",{children:"B"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),b?Object(l.jsxs)(o.b,{to:"/DiscussionForm",className:"btn btn-primary btn-outline-success bttn discus-bttn",children:[Object(l.jsx)("br",{}),"Start a discussion",Object(l.jsx)("br",{})]}):null,Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("h4",{className:"board",children:t.topic}),"\xa0",Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("p",{children:t.discussion}),Object(l.jsxs)("p",{children:[Object(l.jsx)(o.b,{to:"/ViewUser/".concat(t.user.id),className:"small-icon",children:j})," ",t.user.username]}),"\xa0",Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-block",children:[Object(l.jsxs)("button",{className:"btn btn-primary bttn2",onClick:function(e){if(e.preventDefault(),b)if(!b.userPage.interests.find((function(e){return e.discussion_id===parseInt(h)}))){var s=b.id;m(s,h)}else console.log("Already interested");else O("/Login")},children:[a?" \u2605 ":" \u2606 ",Object(l.jsx)("span",{className:"badge bg-secondary",children:n})," Interests"]}),"\xa0 \xa0",Object(l.jsxs)(o.b,{to:b?"/CommentForm/".concat(h):"/Login",className:"btn btn-primary bttn2",children:[Object(l.jsx)("span",{className:"badge bg-secondary",children:t.comments.length})," Comments"]})]}),"\xa0"]}),Object(l.jsxs)("div",{children:["\xa0",Object(l.jsx)("h4",{className:"board",children:"Comments"}),"\xa0 \xa0",Object(l.jsxs)("div",{className:"card container info-alert",children:[Object(l.jsx)("br",{}),Object(l.jsx)("table",{children:Object(l.jsx)("tbody",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:c}),Object(l.jsx)("td",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:b?Object(l.jsx)(o.b,{to:"/CommentForm/".concat(h),className:"btn btn-primary bttn2",children:"Comment"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,{to:"/Login",className:"btn btn-primary bttn2",children:"Login"}),Object(l.jsx)(o.b,{to:"/Signup",className:"btn btn-primary bttn2",children:"Signup"})]})})]})})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),i]})]})]}):Object(l.jsx)("div",{className:"spinner-border text-info center container",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),"\xa0"]})};var N=function(e){var s,t,c=e.user,i=e.addComment,o=e.editUserComment,d=e.board,j=Object(r.g)(),b=j.discussion_id,m=j.id;d&&(b?(s=d.find((function(e){return e.id===parseInt(b)})).comments.find((function(e){return e.id===parseInt(m)})),t={topic:d.find((function(e){return e.id===parseInt(b)})).topic,discussion:d.find((function(e){return e.id===parseInt(b)})).discussion}):(s={user_id:c.id,discussion_id:m,comment:""},t={topic:d.find((function(e){return e.id===parseInt(m)})).topic,discussion:d.find((function(e){return e.id===parseInt(m)})).discussion}));var u=Object(n.useState)(s),O=Object(a.a)(u,2),x=O[0],p=O[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{className:"board",children:"Submit a Comment"}),t?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("h2",{className:"title",children:t.topic}),Object(l.jsx)("p",{children:t.discussion}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("br",{}),Object(l.jsxs)("form",{className:"container comment-form",onSubmit:function(e){e.preventDefault(),b?(o(x),p({user_id:c.id,discussion_id:m,comment:""})):(i(x),p({user_id:c.id,discussion_id:m,comment:""}))},children:[Object(l.jsx)("div",{className:"fields",children:Object(l.jsxs)("div",{className:"row g-3 align-items-center",children:[Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsx)("label",{className:"col-form-label login-label",children:Object(l.jsx)("span",{children:"Comment"})})}),Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsx)("textarea",{id:"comment-entry",className:"form-control input","aria-describedby":"commententryHelpInline",placeholder:"Discussion comment",name:"comment",value:x.comment,onChange:function(e){p(Object(h.a)(Object(h.a)({},x),{},{comment:e.target.value}))}})})]})}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary bttn",children:"Submit"})]}),Object(l.jsx)("br",{})]})]})}):Object(l.jsx)("div",{className:"spinner-border text-info center container",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})};var g=function(e){var s=e.user,t=e.startDiscussion,c=e.editUserDiscussion,i=e.board,o=Object(r.g)().id,d={user_id:s.id,topic:"",discussion:""};i&&(d=o?i.find((function(e){return parseInt(e.id)===parseInt(o)})):{user_id:s.id,topic:"",discussion:""});var j=Object(n.useState)(d),b=Object(a.a)(j,2),m=b[0],O=b[1];function x(e){O(Object(h.a)(Object(h.a)({},m),{},Object(u.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{className:"board",children:"Submit a Discussion Topic"}),s?Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("br",{}),Object(l.jsxs)("form",{className:"container comment-form right",onSubmit:function(e){e.preventDefault(),o?(c(m),O({user_id:s.id,topic:"",discussion:""})):(t(m),O({user_id:s.id,topic:"",discussion:""}))},children:[Object(l.jsxs)("div",{className:"fields",children:[Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsx)("label",{className:"col-form-label discussion-label",children:Object(l.jsx)("span",{children:"Topic"})})}),Object(l.jsx)("div",{className:"col-sm-10 discussion-input",children:Object(l.jsx)("input",{id:"topic-discussion",className:"form-control input",type:"topic",placeholder:"discussion topic",name:"topic",value:m.topic,onChange:x})})]}),Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsx)("label",{className:"col-form-label discussion-label",children:Object(l.jsx)("span",{children:"Discussion"})})}),Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsx)("textarea",{id:"discussion-entry",className:"form-control input","aria-describedby":"discussionentryHelpInline",placeholder:"Discussion",name:"discussion",value:m.discussion,onChange:x})})]})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary bttn",children:"Submit"})]}),Object(l.jsx)("br",{})]})}):Object(l.jsx)("div",{className:"spinner-border text-info center container",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})};var v=function(e){var s=e.user,t=e.id,n=e.interest_id,c=e.discussion_id,i=e.type,a=e.topic,d=e.discussion,j=e.comment,b=e.date,m=e.deleteTypeSwitch,u=e.setUpdate,h=Object(r.f)();function O(e){e.preventDefault(),"discussion"===i?(u(!0),h("/DiscussionForm/".concat(t))):(u(!0),h("/Discussion/".concat(c,"/CommentForm/").concat(t)))}function x(e){e.preventDefault(),"interest"===i&&(t=n),m(i,t)}return Object(l.jsxs)("div",{className:"container",children:["discussion"===i||"interest"===i?Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)(o.b,{to:"/Discussion/".concat(t),className:"title",children:[" ",a," "]})," ",Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:d}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Date created/updated: "}),b]}),"user"===s?Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-block",children:["\xa0","interest"===i?null:Object(l.jsx)("button",{className:"btn btn-primary bttn2",onClick:O,children:" Edit "}),"\xa0 \xa0",Object(l.jsx)("button",{className:"btn btn-primary bttn2",onClick:x,children:" Delete"})]}):null,Object(l.jsx)("br",{}),"\xa0"]}):Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)(o.b,{to:"/Discussion/".concat(c),className:"title",children:[" ",a," "]}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:d}),Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("p",{children:j}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Date created/updated: "}),b]}),"user"===s?Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-block",children:["\xa0",Object(l.jsx)("button",{className:"btn btn-primary bttn2",onClick:O,children:" Edit "}),"\xa0 \xa0",Object(l.jsx)("button",{className:"btn btn-primary bttn2",onClick:x,children:" Delete"})]}):null,Object(l.jsx)("br",{})]}),"\xa0"]}),"\xa0",Object(l.jsx)("br",{})]})};var y=function(e){var s,t,c,i,r,d,j,b=e.user,m=e.getUser,u=Object(n.useState)(!1),h=Object(a.a)(u,2),O=h[0],x=h[1];function p(e,s){switch(e){case"interest":fetch("/interests/".concat(s),{method:"DELETE"}).then(x(!0)).catch((function(e){return console.log(e)}));break;case"discussion":fetch("/discussions/".concat(s),{method:"DELETE"}).then(x(!0)).catch((function(e){return console.log(e)}));break;case"comment":fetch("/comments/".concat(s),{method:"DELETE"}).then(x(!0)).catch((function(e){return console.log(e)}));break;default:console.log(e),console.log(s)}}if(Object(n.useEffect)((function(){m(),x(!1)}),[O]),b){s=b.userPage.interests,t=b.userPage.discussions,c=b.userPage.userComments;var f="user";i=s.map((function(e){if(null!==e)return Object(l.jsx)(v,{id:e.discussion_id,interest_id:e.id,type:"interest",topic:e.topic,discussion:e.discussion,user:f,date:e.interested_date,deleteTypeSwitch:p,setUpdate:x},e.id)})),r=t.map((function(e){if(null!==e)return Object(l.jsx)(v,{id:e.id,type:"discussion",topic:e.topic,discussion:e.discussion,user:f,date:e.discussion_date,deleteTypeSwitch:p,setUpdate:x},e.id)})),d=c.map((function(e){if(null!==e)return Object(l.jsx)(v,{id:e.id,discussion_id:e.discussion_id,type:"comment",topic:e.discussion_topic,discussion:e.discussion,user:f,comment:e.comment,date:e.comment_date,deleteTypeSwitch:p,setUpdate:x},e.id)}))}return b?j=b.icon?b.icon:Object(l.jsx)(o.b,{to:"/ViewUser/".concat(b.id),className:"icon",children:b.first_name.charAt(0)+b.last_name.charAt(0)}):m(),Object(l.jsxs)("div",{className:"container",children:["\xa0 \xa0",b?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("br",{}),Object(l.jsxs)("h1",{className:"welcome",children:[j," Welcome ",b.first_name+" "+b.last_name]}),Object(l.jsx)("br",{})]}),"\xa0",Object(l.jsx)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-center",children:Object(l.jsxs)(o.b,{to:"/DiscussionForm",className:"btn btn-primary btn-outline-success bttn me-2",children:[Object(l.jsx)("br",{}),"Start a discussion",Object(l.jsx)("br",{})]})}),"\xa0",Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h2",{className:"board",children:"Interested Discussions"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"container",children:i})]}),"\xa0",Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h2",{className:"board",children:"Started Discussions"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"container",children:r})]}),"\xa0",Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h2",{className:"board",children:"Comments"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"container",children:d})]})]}):Object(l.jsx)("div",{className:"spinner-border text-info center container",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})};var w=function(e){var s,t=e.user;return t&&(s=t.icon?t.icon:t.first_name.charAt(0)+t.last_name.charAt(0)),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("h1",{className:"welcome",children:[Object(l.jsx)(o.b,{to:"/UserPage",className:"icon",children:s})," Welcome ",t.first_name+" "+t.last_name]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)(o.b,{to:"/DiscussionForm",className:"btn btn-primary btn-outline-success bttn discus-bttn",children:[Object(l.jsx)("br",{}),"Start a discussion",Object(l.jsx)("br",{})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"container card",children:[Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"input-group mb-3 justify-content-between",children:[Object(l.jsxs)("div",{className:"input-group-prepend",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h2",{className:"board profile-title",children:"Profile"}),Object(l.jsx)("br",{})]}),Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[Object(l.jsx)("br",{}),Object(l.jsx)(o.b,{to:"/ProfileEdit",className:"btn btn-primary bttn2 edit-btn","aria-label":"editbutton","aria-describedby":"basic-addon1",children:Object(l.jsx)("span",{className:"edit-btn",children:"EDIT"})}),Object(l.jsx)("br",{})]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"container card",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h3",{className:"title",children:"Personal Info"}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Name: "}),t.first_name," ",t.last_name]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Username: "}),t.username]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Icon: "}),"\xa0",Object(l.jsx)("a",{href:"/UserPage",className:"small-icon",children:s})]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Password: "}),"**********"]}),Object(l.jsx)("br",{})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"container card",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h3",{className:"title",children:"Personal Stats"}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Discussions: "}),t.profilePage.discussion]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Comments: "}),t.profilePage.comment]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{children:"Interests: "}),t.profilePage.interest]}),Object(l.jsx)("br",{})]})})]}),Object(l.jsx)("br",{})]}),Object(l.jsx)("br",{})]})};var _=function(e){var s,t=e.user,c=e.userEdit,i=Object(n.useState)({first_name:"",last_name:"",username:"",icon:"",password:"",new_password:"",new_password_confirmation:""}),r=Object(a.a)(i,2),d=r[0],j=r[1],b=Object(n.useState)(!1),m=Object(a.a)(b,2),O=m[0],x=m[1],p=Object(n.useState)(!0),f=Object(a.a)(p,2),N=f[0],g=f[1];function v(e){j(Object(h.a)(Object(h.a)({},d),{},Object(u.a)({},e.target.name,e.target.value)))}function y(){d.new_password!==d.new_password_confirmation?g(!1):g(!0)}return t&&(s=t.icon?t.icon:t.first_name.charAt(0)+t.last_name.charAt(0)),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("h1",{className:"welcome",children:[Object(l.jsx)(o.b,{to:"/UserPage",className:"icon",children:s})," Welcome ",t.first_name+" "+t.last_name]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("h1",{className:"form-title",children:"Profile Edits"}),Object(l.jsxs)("div",{className:"container card edit-outside",children:[Object(l.jsxs)("div",{className:"container edit-inside",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h1",{className:"form-type-title",children:"Personal Information: "}),Object(l.jsx)("br",{}),"\xa0",Object(l.jsxs)("form",{className:"container edit-form right",onSubmit:function(e){e.preventDefault(),null===d.password?console.log("Current password is required"):O&&null===d.new_password&&null===d.new_password_confirmation?console.log("Please confirm your passwords"):d.new_password!==d.new_password_confirmation?(console.log("Passwords must match"),y()):(y(),c(t.id,d),j(""))},children:[Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("label",{className:"col-sm-2 col-form-label edit-label edit-label",children:Object(l.jsx)("span",{children:"Firstname"})}),Object(l.jsx)("div",{className:"col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end",style:{width:"55%"},children:Object(l.jsx)("input",{id:"firstname-edit",className:"form-control input",type:"firstname",placeholder:"First name",name:"first_name",pattern:"/^[A-Za-z]+$/",value:d.first_name,onChange:v})})]}),"\xa0",Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("label",{className:"col-sm-2 col-form-label edit-label",children:Object(l.jsx)("span",{children:"Lastname"})}),Object(l.jsx)("div",{className:"col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end",style:{width:"55%"},children:Object(l.jsx)("input",{id:"lastname-edit",type:"lastname",className:"form-control input",placeholder:"Last name",name:"last_name",pattern:"/^[A-Za-z]+$/",value:d.last_name,onChange:v})})]}),"\xa0",Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("label",{className:"col-sm-2 col-form-label edit-label",children:Object(l.jsx)("span",{children:"Username"})}),Object(l.jsx)("div",{className:"col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end",style:{width:"55%"},children:Object(l.jsx)("input",{id:"username-edit",type:"username",className:"form-control input",placeholder:"username",name:"username",value:d.username,onChange:v})})]}),"\xa0",Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("label",{className:"col-sm-2 col-form-label edit-label",children:Object(l.jsx)("span",{children:"Icon URL"})}),Object(l.jsx)("div",{className:"col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end",style:{width:"55%"},children:Object(l.jsx)("input",{id:"icon-edit",type:"icon",className:"form-control input",placeholder:"icon",name:"icon",value:d.icon,onChange:v})})]}),"\xa0",Object(l.jsxs)("div",{className:"row mb-3",children:[Object(l.jsx)("h2",{className:"title",children:"To confirm your changes, please enter your password"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{className:"col-sm-2 col-form-label edit-label",children:Object(l.jsx)("span",{children:"Current Password"})}),Object(l.jsx)("div",{className:"col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end",style:{width:"55%"},children:Object(l.jsx)("input",{id:"current-password-edit",type:"password",className:"form-control input",placeholder:"Current Password",name:"password",value:d.password,onChange:v,required:!0})})]}),"\xa0",Object(l.jsxs)("div",{className:"submit d-grid gap-2 d-md-block",children:[Object(l.jsx)("button",{type:"submit",className:"btn btn-primary bttn",children:"Update"}),"\xa0 \xa0",Object(l.jsxs)("button",{className:"btn btn-primary password-bttn bttn",onClick:function(e){e.preventDefault(),x(!O)},children:[" ",O?"Nevermind":"Change Password"," "]})]}),Object(l.jsxs)("div",{className:O?void 0:"hidden",children:[Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"edit-password conatainer card",children:[Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"edit-password row mb-3",children:[Object(l.jsx)("label",{className:"col-sm-2 col-form-label edit-label",children:Object(l.jsx)("span",{children:"New Password"})}),Object(l.jsx)("div",{className:"col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end",style:{width:"55%"},children:Object(l.jsx)("input",{id:"new-password-edit",type:"password",className:"form-control input",placeholder:"New Password",name:"new_password",value:d.new_password,onChange:v,required:O,style:{backgroundColor:N?"none":"red"}})})]}),"\xa0",Object(l.jsxs)("div",{className:"edit-password row mb-3",children:[Object(l.jsx)("label",{className:"col-sm-2 col-form-label edit-label",children:Object(l.jsx)("span",{children:"New Password Confirmation"})}),Object(l.jsx)("div",{className:"col-sm-10 edit-input d-grid gap-2 d-md-flex justify-content-md-end",style:{width:"55%"},children:Object(l.jsx)("input",{id:"new-password-confirmation-edit",type:"password",className:"form-control input",placeholder:"New Password confirmation",name:"new_password_confirmation",value:d.new_password_confirmation,onChange:v,required:O,style:{backgroundColor:N?"none":"red"}})})]})]})]})]}),Object(l.jsx)("br",{})]}),Object(l.jsx)("br",{})]}),Object(l.jsx)("br",{})]})};var C=function(e){var s,t,c,i,d,j,b=e.user,m=Object(n.useState)(null),u=Object(a.a)(m,2),h=u[0],O=u[1],x=Object(r.g)().id,p=Object(r.f)();if(b&&(j=b.icon?b.icon:Object(l.jsx)(o.b,{to:"/UserPage",className:"icon",children:b.first_name.charAt(0)+b.last_name.charAt(0)})),Object(n.useEffect)((function(){null===b||parseInt(x)!==b.id?fetch("/users/".concat(x)).then((function(e){return e.json()})).then((function(e){return O(e)})).catch((function(e){return console.log(e)})):p("/UserPage")}),[x]),h){h.userPage.interests,s=h.userPage.discussions,t=h.userPage.userComments,d=h.icon?b.icon:Object(l.jsx)(o.b,{to:"#",className:"icon",children:h.first_name.charAt(0)+h.last_name.charAt(0)});var f="userView";c=s.map((function(e){if(null!==e)return Object(l.jsx)(v,{id:e.id,type:"discussion",topic:e.topic,discussion:e.discussion,date:e.discussion_date,user:f},e.id)})),i=t.map((function(e){if(null!==e)return Object(l.jsx)(v,{id:e.id,discussion_id:e.discussion_id,type:"comment",topic:e.discussion_topic,discussion:e.discussion,comment:e.comment,date:e.comment_date,user:f},e.id)}))}return Object(l.jsxs)("div",{className:"container",children:["\xa0 \xa0",h?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("h1",{className:"welcome",children:[" ",b?j:null," Welcome to Code ",Object(l.jsx)("span",{children:"B"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("h1",{className:"welcome-2",children:[d," ",h.username,"'s Info Page"]}),Object(l.jsx)("br",{})]}),"\xa0",Object(l.jsx)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-center",children:Object(l.jsxs)(o.b,{to:"/DiscussionForm",className:"btn btn-primary btn-outline-success bttn me-2",children:[Object(l.jsx)("br",{}),"Start a discussion",Object(l.jsx)("br",{})]})}),"\xa0",Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h2",{className:"board",children:"Started Discussions"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"container",children:c})]}),"\xa0",Object(l.jsxs)("div",{className:"card container",children:[Object(l.jsx)("br",{}),Object(l.jsx)("h2",{className:"board",children:"Comments"}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"container",children:i})]})]}):Object(l.jsx)("div",{className:"spinner-border text-info center container",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})]})};var S=function(){var e=Object(n.useState)(null),s=Object(a.a)(e,2),t=s[0],c=s[1],i=Object(n.useState)(null),o=Object(a.a)(i,2),j=o[0],u=o[1],h=Object(n.useState)(null),p=Object(a.a)(h,2),v=p[0],S=p[1],P=Object(n.useState)(!1),D=Object(a.a)(P,2),I=D[0],L=D[1],U=Object(n.useState)(null),k=Object(a.a)(U,2),T=k[0],A=k[1],F=Object(r.f)();function E(){fetch("/discussions").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return A(e)}))}function B(){fetch("/me").then((function(e){e.ok?e.json().then((function(e){u(e)})):e.json().then(u(null))})).catch((function(e){return A(e)}))}function J(e,s){fetch("/addInterest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e,discussion_id:s})}).then((function(e){e.ok?e.json():e.json().then((function(e){return A(e.errors)})),B(),E()})).catch((function(e){return console.log("Log in incorrect: ",e)}))}return Object(n.useEffect)((function(){E(),B()}),[I]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m,{user:j,board:t,setSearchReturn:S,logOut:function(){fetch("/logout",{method:"DELETE"}).then((function(){F("/"),u(null),L(!1)}))}}),Object(l.jsx)(r.c,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",element:t?Object(l.jsx)(b,{addInterest:J,user:j,board:v||t}):Object(l.jsx)("div",{className:"spinner-border text-info center container",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),Object(l.jsx)(r.a,{exact:!0,path:j?"/Logout":"/Login",element:j?null:Object(l.jsx)(O,{logIn:function(e){fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.ok?e.json().then((function(e){u(e),L(!0),F("/UserPage")})):e.json().then((function(e){return A(e.errors)}))})).catch((function(e){return console.log("Log in incorrect: ",e)}))},errors:T})}),Object(l.jsx)(r.a,{exact:!0,path:j?"/ProfilePage":"/Signup",element:j?Object(l.jsx)(w,{user:j}):Object(l.jsx)(x,{signUp:function(e){fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){e.ok?e.json().then((function(e){u(e),L(!0),F("/UserPage")})):e.json().then((function(e){return A(e.errors)}))})).catch((function(e){return console.log("Log in incorrect: ",e)}))}})}),Object(l.jsx)(r.a,{exact:!0,path:"/UserPage",element:Object(l.jsx)(y,{user:j,getUser:B})}),Object(l.jsx)(r.a,{exact:!0,path:"/ProfileEdit",element:Object(l.jsx)(_,{user:j,userEdit:function(e,s){var t=Object.fromEntries(Object.entries(s).filter((function(e){var s=Object(a.a)(e,2);s[0];return""!==s[1]})));fetch("/userEdit/".concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.ok?e.json():e.json().then((function(e){return A(e.errors)})),B(),F("/ProfilePage")})).catch((function(e){return console.log("Log in incorrect: ",e)}))}})}),Object(l.jsx)(r.a,{exact:!0,path:"/Discussion",element:Object(l.jsx)(f,{user:j,board:t,addInterest:J})}),Object(l.jsx)(r.a,{exact:!0,path:"/DiscussionCard",element:Object(l.jsx)(d,{})}),Object(l.jsx)(r.a,{exact:!0,path:"/Discussion/:id",element:Object(l.jsx)(f,{user:j,board:t,addInterest:J})}),Object(l.jsx)(r.a,{exact:!0,path:"/DiscussionForm",element:Object(l.jsx)(g,{user:j,startDiscussion:function(e){fetch("/discussions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return F("/Discussion/".concat(e.id))})).catch((function(e){return console.log("Log in incorrect: ",e)}))}})}),Object(l.jsx)(r.a,{exact:!0,path:"/DiscussionForm/:id",element:Object(l.jsx)(g,{user:j,board:t,editUserDiscussion:function(e){fetch("/discussions/".concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:e.user_id,topic:e.topic,discussion:e.discussion})}).then((function(e){e.ok?e.json():e.json().then((function(e){return A(e.errors)})),F("/UserPage")})).catch((function(e){return console.log("Log in incorrect: ",e)}))}})}),Object(l.jsx)(r.a,{exact:!0,path:"/CommentForm/:id",element:Object(l.jsx)(N,{user:j,board:t,getDiscussions:E,addComment:function(e){fetch("/comments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(s){s.ok?s.json():s.json().then((function(e){return A(e.errors)})),E(),F("/Discussion/".concat(e.discussion_id))})).catch((function(e){return console.log("Log in incorrect: ",e)}))}})}),Object(l.jsx)(r.a,{exact:!0,path:"/Discussion/:discussion_id/CommentForm/:id/",element:Object(l.jsx)(N,{user:j,getDiscussions:E,board:t,editUserComment:function(e){fetch("/comments/".concat(e.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:e.comment})}).then((function(e){e.ok?e.json():e.json().then((function(e){return A(e.errors)})),F("/UserPage")})).catch((function(e){return console.log("Log in incorrect: ",e)}))}})}),Object(l.jsx)(r.a,{exact:!0,path:"/ViewUser/:id",element:Object(l.jsx)(C,{user:j})})]})})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(s){var t=s.getCLS,n=s.getFID,c=s.getFCP,i=s.getLCP,a=s.getTTFB;t(e),n(e),c(e),i(e),a(e)}))};i.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),P()}},[[18,1,2]]]);
//# sourceMappingURL=main.ecbede8a.chunk.js.map