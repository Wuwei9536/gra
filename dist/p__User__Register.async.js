(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"5WY0":function(e,t,r){e.exports={main:"antd-pro-pages-user-register-main",getCaptcha:"antd-pro-pages-user-register-getCaptcha",submit:"antd-pro-pages-user-register-submit",login:"antd-pro-pages-user-register-login",error:"antd-pro-pages-user-register-error",success:"antd-pro-pages-user-register-success",warning:"antd-pro-pages-user-register-warning","progress-pass":"antd-pro-pages-user-register-progress-pass",progress:"antd-pro-pages-user-register-progress"}},UADf:function(e,t,r){e.exports={"ant-popover":"ant-popover","ant-popover-hidden":"ant-popover-hidden","ant-popover-placement-top":"ant-popover-placement-top","ant-popover-placement-topLeft":"ant-popover-placement-topLeft","ant-popover-placement-topRight":"ant-popover-placement-topRight","ant-popover-placement-right":"ant-popover-placement-right","ant-popover-placement-rightBottom":"ant-popover-placement-rightBottom","ant-popover-placement-rightTop":"ant-popover-placement-rightTop","ant-popover-placement-bottom":"ant-popover-placement-bottom","ant-popover-placement-bottomLeft":"ant-popover-placement-bottomLeft","ant-popover-placement-bottomRight":"ant-popover-placement-bottomRight","ant-popover-placement-left":"ant-popover-placement-left","ant-popover-placement-leftBottom":"ant-popover-placement-leftBottom","ant-popover-placement-leftTop":"ant-popover-placement-leftTop","ant-popover-inner":"ant-popover-inner","ant-popover-title":"ant-popover-title","ant-popover-inner-content":"ant-popover-inner-content","ant-popover-message":"ant-popover-message",anticon:"anticon","ant-popover-message-title":"ant-popover-message-title","ant-popover-buttons":"ant-popover-buttons","ant-popover-arrow":"ant-popover-arrow","ant-popover-content":"ant-popover-content"}},cq3J:function(e,t,r){"use strict";r.r(t);r("+L6B");var a=r("2/Rp"),o=(r("cIOH"),r("UADf"),r("q1tI")),n=r.n(o),s=r("3S7+"),i=r("wEI+"),p=r("6CfX");function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},c.apply(this,arguments)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),e}function d(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}var b=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(r[a[o]]=e[a[o]])}return r},w=function(e){function t(){var e;return m(this,t),e=d(this,v(t).apply(this,arguments)),e.saveTooltip=function(t){e.tooltip=t},e.renderPopover=function(t){var r=t.getPrefixCls,a=e.props,n=a.prefixCls,i=b(a,["prefixCls"]);delete i.title;var p=r("popover",n);return o["createElement"](s["a"],c({},i,{prefixCls:p,ref:e.saveTooltip,overlay:e.getOverlay(p)}))},e}return h(t,e),f(t,[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"getOverlay",value:function(e){var t=this.props,r=t.title,a=t.content;return Object(p["a"])(!("overlay"in this.props),"Popover","`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content"),o["createElement"]("div",null,r&&o["createElement"]("div",{className:"".concat(e,"-title")},r),o["createElement"]("div",{className:"".concat(e,"-inner-content")},a))}},{key:"render",value:function(){return o["createElement"](i["a"],null,this.renderPopover)}}]),t}(o["Component"]);w.defaultProps={placement:"top",transitionName:"zoom-big",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};r("MXD1");var E,O,P,j,S=r("CFYs"),M=(r("miYZ"),r("tsqr")),k=r("2Taf"),C=r.n(k),D=r("vZ4D"),N=r.n(D),F=r("l4Ni"),x=r.n(F),T=r("ujKo"),q=r.n(T),I=r("MhPg"),_=r.n(I),L=(r("5NDa"),r("5rEg")),z=(r("OaEy"),r("2fM7")),B=(r("y8nQ"),r("Vl3Y")),R=r("MuoO"),Y=r("Y2fQ"),U=r("mOP9"),V=r("usdK"),W=r("5WY0"),A=r.n(W),J=B["a"].Item,G=(z["a"].Option,L["a"].Group,{ok:n.a.createElement("div",{className:A.a.success},n.a.createElement(Y["FormattedMessage"],{id:"validation.password.strength.strong"})),pass:n.a.createElement("div",{className:A.a.warning},n.a.createElement(Y["FormattedMessage"],{id:"validation.password.strength.medium"})),poor:n.a.createElement("div",{className:A.a.error},n.a.createElement(Y["FormattedMessage"],{id:"validation.password.strength.short"}))}),K={ok:"success",pass:"normal",poor:"exception"},Q=(E=Object(R["connect"])(function(e){var t=e.register,r=e.loading;return{register:t,submitting:r.effects["register/submit"]}}),O=B["a"].create(),E(P=O((j=function(e){function t(){var e,r;C()(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return r=x()(this,(e=q()(t)).call.apply(e,[this].concat(o))),r.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},r.onGetCaptcha=function(){var e=59;r.setState({count:e}),r.interval=setInterval(function(){e-=1,r.setState({count:e}),0===e&&clearInterval(r.interval)},1e3),M["a"].warning(Object(Y["formatMessage"])({id:"app.login.verification-code-warning"}))},r.getPasswordStatus=function(){var e=r.props.form,t=e.getFieldValue("password");return t&&t.length>9?"ok":t&&t.length>5?"pass":"poor"},r.handleSubmit=function(e){e.preventDefault();var t=r.props,a=t.form,o=t.dispatch;a.validateFields({force:!0},function(e,t){e||o({type:"register/submit",payload:t})})},r.handleConfirmBlur=function(e){var t=e.target.value,a=r.state.confirmDirty;r.setState({confirmDirty:a||!!t})},r.checkConfirm=function(e,t,a){var o=r.props.form;t&&t!==o.getFieldValue("password")?a(Object(Y["formatMessage"])({id:"validation.password.twice"})):a()},r.checkPassword=function(e,t,a){var o=r.state,n=o.visible,s=o.confirmDirty;if(t)if(r.setState({help:""}),n||r.setState({visible:!!t}),t.length<6)a("error");else{var i=r.props.form;t&&s&&i.validateFields(["confirm"],{force:!0}),a()}else r.setState({help:Object(Y["formatMessage"])({id:"validation.password.required"}),visible:!!t}),a("error")},r.renderPasswordProgress=function(){var e=r.props.form,t=e.getFieldValue("password"),a=r.getPasswordStatus();return t&&t.length?n.a.createElement("div",{className:A.a["progress-".concat(a)]},n.a.createElement(S["a"],{status:K[a],className:A.a.progress,strokeWidth:6,percent:10*t.length>100?100:10*t.length,showInfo:!1})):null},r}return _()(t,e),N()(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.form,r=e.register,a=t.getFieldValue("mail");"ok"===r.status&&V["a"].push({pathname:"/user/register-result",state:{account:a}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,r=e.submitting,o=t.getFieldDecorator,s=this.state,i=(s.count,s.prefix,s.help),p=s.visible;return n.a.createElement("div",{className:A.a.main},n.a.createElement("h3",null,n.a.createElement(Y["FormattedMessage"],{id:"app.register.register"})),n.a.createElement(B["a"],{onSubmit:this.handleSubmit},n.a.createElement(J,null,o("name",{rules:[{required:!0,message:Object(Y["formatMessage"])({id:"validation.name.required"})}]})(n.a.createElement(L["a"],{size:"large",placeholder:Object(Y["formatMessage"])({id:"form.name.placeholder"})}))),n.a.createElement(J,null,o("mail",{rules:[{required:!0,message:Object(Y["formatMessage"])({id:"validation.email.required"})},{type:"email",message:Object(Y["formatMessage"])({id:"validation.email.wrong-format"})}]})(n.a.createElement(L["a"],{size:"large",placeholder:Object(Y["formatMessage"])({id:"form.email.placeholder"})}))),n.a.createElement(J,{help:i},n.a.createElement(w,{getPopupContainer:function(e){return e.parentNode},content:n.a.createElement("div",{style:{padding:"4px 0"}},G[this.getPasswordStatus()],this.renderPasswordProgress(),n.a.createElement("div",{style:{marginTop:10}},n.a.createElement(Y["FormattedMessage"],{id:"validation.password.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:p},o("password",{rules:[{validator:this.checkPassword}]})(n.a.createElement(L["a"],{size:"large",type:"password",placeholder:Object(Y["formatMessage"])({id:"form.password.placeholder"})})))),n.a.createElement(J,null,o("confirm",{rules:[{required:!0,message:Object(Y["formatMessage"])({id:"validation.confirm-password.required"})},{validator:this.checkConfirm}]})(n.a.createElement(L["a"],{size:"large",type:"password",placeholder:Object(Y["formatMessage"])({id:"form.confirm-password.placeholder"})}))),n.a.createElement(J,null,n.a.createElement(a["a"],{size:"large",loading:r,className:A.a.submit,type:"primary",htmlType:"submit"},n.a.createElement(Y["FormattedMessage"],{id:"app.register.register"})),n.a.createElement(U["a"],{className:A.a.login,to:"/User/Login"},n.a.createElement(Y["FormattedMessage"],{id:"app.register.sign-in"})))))}}]),t}(o["Component"]),P=j))||P)||P);t["default"]=Q}}]);