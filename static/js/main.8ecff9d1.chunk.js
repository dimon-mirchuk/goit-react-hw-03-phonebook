(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactAddForm_form__3nsMj",label:"ContactAddForm_label__2h_hJ",input:"ContactAddForm_input__zkjDO",button:"ContactAddForm_button__3Uwzv"}},,,,,,function(t,e,n){t.exports={text:"ContactListItem_text__1q6eo",span:"ContactListItem_span__1kRFs",button:"ContactListItem_button__ez36l"}},,,function(t,e,n){t.exports={list:"ContactList_list__3I9ce",item:"ContactList_item__2nATw"}},function(t,e,n){t.exports={label:"Filter_label__3UKwD",input:"Filter_input__1dXN_"}},,function(t,e,n){t.exports={container:"Container_container__3aPAG"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),o=n.n(r),s=(n(20),n(15)),i=n(3),l=n(4),u=n(7),b=n(6),d=(n(21),n(5)),h=n(2),m=n.n(h),j=n(0),p=m.a.form,f=m.a.label,O=m.a.input,_=m.a.button,v=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){return t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:p,children:[Object(j.jsxs)("label",{className:f,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ]) ? [a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange,placeholder:"Ivan Ivanov",className:O})]}),Object(j.jsxs)("label",{className:f,children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:n,placeholder:"+7 (999) 999-99-99",className:O})]}),Object(j.jsx)("button",{type:"submit",className:_,children:"Add contact"})]})}}]),n}(a.Component),x=v,C=n(10),g=n(8),y=n.n(g),N=y.a.text,A=y.a.span,S=y.a.button,k=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDelete;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{className:N,children:[n,": ",Object(j.jsx)("span",{className:A,children:a})]}),Object(j.jsx)("button",{type:"button",onClick:function(){return c(e)},title:"Delete",className:S,children:"Delete"})]})},w=n(11),D=n.n(w),F=D.a.item,I=D.a.list,L=function(t){var e=t.contacts,n=t.onDelete;return 0===e.length?null:Object(j.jsx)("ul",{className:I,children:e.map((function(t){return Object(j.jsx)("li",{className:F,children:Object(a.createElement)(k,Object(C.a)(Object(C.a)({},t),{},{onDelete:n,key:t.id}))},t.id)}))})},z=n(12),J=n.n(z),q=J.a.label,M=J.a.input,P=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:q,children:["Find contacts by name",Object(j.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,required:!0,className:M})]})},T=n(14),U=n.n(T);var Z=function(t){var e=t.children;return Object(j.jsx)("div",{className:U.a.container,children:e})},B=n(25),E=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleAddContact=function(e){var n=e.name,a=e.number,c={id:Object(B.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(s.a)(e),[c])}}))},t.handleDeleteContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return Object(j.jsxs)(Z,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(x,{onSubmit:this.handleAddContact}),Object(j.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(j.jsx)(P,{value:n,onChange:this.changeFilter}),e.length>0?Object(j.jsx)(L,{contacts:a,onDelete:this.handleDeleteContact}):Object(j.jsx)("p",{children:"Your phonebook is empty. Please add contact."})]})}}]),n}(a.Component),V=E;o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(V,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.8ecff9d1.chunk.js.map