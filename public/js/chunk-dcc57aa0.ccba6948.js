(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dcc57aa0"],{"2e51":function(e,s,t){},"74fd":function(e,s,t){"use strict";var a=t("8733"),i=t.n(a);i.a},"7baa":function(e,s,t){"use strict";var a=t("2e51"),i=t.n(a);i.a},8733:function(e,s,t){},f1d3:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container users-me"},[e.isLogged?t("div",[e._m(0),t("div",{staticClass:"columns is-variable is-8 has-text-left"},[t("div",{staticClass:"column is-3"},[t("nav",{staticClass:"panel user-settings-nav"},[e._m(1),t("router-link",{staticClass:"panel-block",attrs:{to:{name:"me"},tag:"a","active-class":"is-active",translate:"yes",exact:""}},[e._v("Profile")]),t("router-link",{staticClass:"panel-block",attrs:{to:{name:"meAddress"},tag:"a","active-class":"is-active",translate:"yes"}},[e._v("User address")]),t("router-link",{staticClass:"panel-block",attrs:{to:{name:"meDelivery"},tag:"a","active-class":"is-active",translate:"yes"}},[e._v("Delivery addresses")])],1)]),t("div",{staticClass:"column is-9"},[t(e.activeComponent,{tag:"component"})],1)])]):t("div",[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("h1",{staticClass:"title is-1",attrs:{translate:"yes"}},[e._v("Unauthorized")]),t("p",[t("span",{attrs:{translate:"yes"}},[e._v("It may help if you")]),e._v(" "),t("router-link",{attrs:{to:{name:"login"},tag:"a",translate:"yes"}},[e._v("log in")])],1)])])])])},i=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("h1",{staticClass:"title is-1",attrs:{translate:"yes"}},[e._v("Profile")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",{staticClass:"panel-heading"},[t("span",{attrs:{translate:"yes"}},[e._v("Your Settings")])])}],r=(t("ac6a"),t("28a5"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.$store.state.user.profile?t("div",{attrs:{id:"meInfo"}},[t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-8 has-text-centered"},[t("h2",{staticClass:"title is-2 has-text-centered"},[e._v(e._s(e.$store.state.user.profile.username))])])]),t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-4 has-text-centered"},[t("div",{staticClass:"user--avatar-wrapper is-centered",style:{"background-image":"url('"+e.userProfileImage+"')"}})]),t("div",{staticClass:"column is-4 has-text-centered"},[t("form",{on:{submit:function(s){return s.preventDefault(),e.uploadUserProfileImage(s)}}},[t("div",{staticClass:"field"},[t("b-upload",{attrs:{"drag-drop":""},model:{value:e.dropFiles,callback:function(s){e.dropFiles=s},expression:"dropFiles"}},[t("section",{staticClass:"section"},[t("div",{staticClass:"content has-text-centered"},[t("p",[t("font-awesome-icon",{staticClass:"fa-3x",attrs:{icon:"file-upload"}})],1),t("p",{staticClass:"dropFilesOrClick",attrs:{translate:"yes"}},[e._v("Drop your files here or click to upload")])])])])],1),t("div",{staticClass:"tags"},e._l(e.dropFiles,function(s,a){return t("span",{key:a,staticClass:"tag is-primary"},[e._v("\n                  "+e._s(s.name)+"\n                  "),t("button",{staticClass:"delete is-small",attrs:{type:"button"},on:{click:function(s){return e.deleteDropFile(a)}}})])}),0),e._m(0)])])]),t("div",{staticClass:"user-info-edit-form-wrapper"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-8 is-centered"},[t("div",{staticClass:"columns is-variable is-2 is-centered"},[t("div",{staticClass:"column is-12 has-text-centered"},[t("form",{on:{submit:function(s){return s.preventDefault(),e.changeUsername(s)}}},[t("div",{staticClass:"field username"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Username")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.userBasicData.username,expression:"userBasicData.username"}],staticClass:"input",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.userBasicData.username},on:{input:function(s){s.target.composing||e.$set(e.userBasicData,"username",s.target.value)}}})]),e._m(1)]),e._m(2)])])]),e._m(3),t("form",{on:{submit:function(s){return s.preventDefault(),e.changeEmail(s)}}},[t("div",{staticClass:"columns is-variable is-2 is-centered"},[t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field email"},[t("label",{staticClass:"label"},[e._v("Email")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.userBasicData.email,expression:"userBasicData.email"}],staticClass:"input",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.userBasicData.email},on:{input:function(s){s.target.composing||e.$set(e.userBasicData,"email",s.target.value)}}})]),e._m(4)])]),t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field email2"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Email Confirm")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.userBasicData.email2,expression:"userBasicData.email2"}],staticClass:"input",attrs:{type:"text",placeholder:"Email Confirm"},domProps:{value:e.userBasicData.email2},on:{input:function(s){s.target.composing||e.$set(e.userBasicData,"email2",s.target.value)}}})]),e._m(5)])])]),e._m(6)]),e._m(7),t("form",{on:{submit:function(s){return s.preventDefault(),e.changePassword(s)}}},[t("div",{staticClass:"columns is-variable is-2 is-centered"},[t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field password"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Password")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.userBasicData.password,expression:"userBasicData.password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.userBasicData.password},on:{input:function(s){s.target.composing||e.$set(e.userBasicData,"password",s.target.value)}}})])])]),t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field password2"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Password Confirm")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.userBasicData.password2,expression:"userBasicData.password2"}],staticClass:"input",attrs:{type:"password",placeholder:"Password Confirm"},domProps:{value:e.userBasicData.password2},on:{input:function(s){s.target.composing||e.$set(e.userBasicData,"password2",s.target.value)}}})]),e._m(8)])])]),e._m(9)])])])])]):e._e()}),n=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("button",{staticClass:"button is-success",attrs:{type:"submit"}},[t("span",{attrs:{translate:"yes"}},[e._v("Change Image")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"exists",translate:"yes"}},[e._v("Username already exists")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("button",{staticClass:"button is-success"},[t("span",{attrs:{translate:"yes"}},[e._v("Change Username")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-12"},[t("hr")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"exists",translate:"yes"}},[e._v("Email already exists")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"not confirmed",translate:"yes"}},[e._v("Values do not match")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"columns is-variable is-2 is-centered"},[t("div",{staticClass:"column is-12 has-text-centered"},[t("button",{staticClass:"button is-success"},[t("span",{attrs:{translate:"yes"}},[e._v("Change your Email")])])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-12"},[t("hr")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"not confirmed",translate:"yes"}},[e._v("Values do not match")]),t("div",{staticClass:"form-message",attrs:{"data-message":"unknown error",translate:"yes"}},[e._v("An error occured when changing password")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"columns is-variable is-2 is-centered"},[t("div",{staticClass:"column is-12 has-text-centered"},[t("button",{staticClass:"button is-success"},[t("span",{attrs:{translate:"yes"}},[e._v("Change your Password")])])])])}],l={name:"UserMeInfo",data:function(){return{dropFiles:[]}},computed:{userBasicData:function(){var e=this.$store.getters.getUserProfile;console.log(e);var s={username:"",email:"",email2:"",password:"",password2:""};return e&&e.username&&(s.username=e.username,s.email=e.email),s},userProfileImage:function(){return this.$store.getters.getProfileImage()}},methods:{deleteDropFile:function(e){this.dropFiles.splice(e,1)},uploadUserProfileImage:function(){var e=this,s=new FormData;if(this.dropFiles.length&&this.dropFiles.length>0)for(var t=0;t<this.dropFiles.length;t++){var a=this.dropFiles[t];s.append("files["+t+"]",a)}else s.append("files[0]",this.dropFiles);this.$httpc.post("user/image",s,{needsAuth:!0}).then(function(s){if(s&&s.data){if("'"==s.data.substr(0,1)&&"'"==s.data[s.data.length-1]){var t=s.data.length-2;s.data=s.data.substr(1,t),s.data=JSON.parse(s.data)}s.data.files&&s.data.files.length>0&&s.data.files[0].path&&(e.$store.dispatch("setUserProfileImage",s.data.files[0].path),e.$forceUpdate())}}).catch(function(e){console.log(e)}).then(function(){})},changeUsername:function(){var e=[],s=!0,t=this;this.$httpc.post("users/checkusername",{username:this.userBasicData.username}).then(function(a){a.data&&1==a.data?(s=!1,"error",e.push({target:"username",action:"already exists"})):(s=!0,s&&t.$store.dispatch("updateUser",{username:t.userBasicData.username})),console.log(e)}).catch(function(e){t.sendChangeRequest=!1,t.status="error",e.response.data&&e.response.data.errors&&t.$helpers.showFormFieldErrorsFromErrorResponse(e.response.data.errors)}).then(function(){})},changeEmail:function(){var e=!0,s=this;this.userBasicData.email&&this.userBasicData.email2&&this.userBasicData.email===this.userBasicData.email2||("error",s.$helpers.formUndecorateAndDecorateFields(["email2"],[{name:"email2",action:"not confirmed"}]),e=!1),e&&this.$httpc.post("users/checkemail",{email:this.userBasicData.email}).then(function(t){e=!0,e&&s.$store.dispatch("updateUser",{email:s.userBasicData.email})}).catch(function(e){s.sendChangeRequest=!1,s.status="error",e.response.data&&e.response.data.errors&&s.$helpers.showFormFieldErrorsFromErrorResponse(e.response.data.errors)}).then(function(){})},changePassword:function(){var e=!0,s=this;console.log(this.userBasicData.password+" !== "+this.userBasicData.password2,this.userBasicData.password!==this.userBasicData.password2),this.userBasicData.password&&this.userBasicData.password2&&this.userBasicData.password===this.userBasicData.password2||("error",s.$helpers.formUndecorateAndDecorateFields(["password2"],[{name:"password2",action:"not confirmed"}]),e=!1),e&&this.$httpc.put("user",{user:{password:this.userBasicData.password}},{needsAuth:!0}).then(function(t){e=!0,e&&s.$store.dispatch("updateUser",{email:s.userBasicData.email})}).catch(function(e){s.sendChangeRequest=!1,s.status="error",console.log(e),e.response.data&&e.response.data.errors&&s.$helpers.formUndecorateAndDecorateFields(["password2"],[{name:"password2",action:"unknown error"}])}).then(function(){})}}},c=l,o=(t("7baa"),t("2877")),d=Object(o["a"])(c,r,n,!1,null,null,null),v=d.exports,u=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.$store.state.user.profile?t("div",{attrs:{id:"meInvoice"}},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-8 is-centered"},[t("h2",{staticClass:"title is-2 has-text-centered",attrs:{translate:"yes"}},[e._v("Invoice Address")]),t("form",{on:{submit:function(s){return s.preventDefault(),e.saveUserAddresses(s)}}},[t("div",{staticClass:"deliveryAddressWrapper"},[t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field nameFirst"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("First Name")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeInvoiceAddress.nameFirst,expression:"activeInvoiceAddress.nameFirst"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"First Name"},domProps:{value:e.activeInvoiceAddress.nameFirst},on:{input:function(s){s.target.composing||e.$set(e.activeInvoiceAddress,"nameFirst",s.target.value)}}})]),e._m(0)])]),t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field nameLast"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Last Name")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeInvoiceAddress.nameLast,expression:"activeInvoiceAddress.nameLast"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Last Name"},domProps:{value:e.activeInvoiceAddress.nameLast},on:{input:function(s){s.target.composing||e.$set(e.activeInvoiceAddress,"nameLast",s.target.value)}}})]),e._m(1)])])]),t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-12"},[t("div",{staticClass:"field street"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Street")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeInvoiceAddress.street,expression:"activeInvoiceAddress.street"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Street"},domProps:{value:e.activeInvoiceAddress.street},on:{input:function(s){s.target.composing||e.$set(e.activeInvoiceAddress,"street",s.target.value)}}})]),e._m(2)])])]),t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-12"},[t("div",{staticClass:"field street2"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Street 2")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeInvoiceAddress.street2,expression:"activeInvoiceAddress.street2"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Street 2"},domProps:{value:e.activeInvoiceAddress.street2},on:{input:function(s){s.target.composing||e.$set(e.activeInvoiceAddress,"street2",s.target.value)}}})]),e._m(3)])])]),t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-4"},[t("div",{staticClass:"field zip"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("ZIP")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeInvoiceAddress.zip,expression:"activeInvoiceAddress.zip"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"ZIP"},domProps:{value:e.activeInvoiceAddress.zip},on:{input:function(s){s.target.composing||e.$set(e.activeInvoiceAddress,"zip",s.target.value)}}})]),e._m(4)])]),t("div",{staticClass:"column is-8"},[t("div",{staticClass:"field city"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("City")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeInvoiceAddress.city,expression:"activeInvoiceAddress.city"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"City"},domProps:{value:e.activeInvoiceAddress.city},on:{input:function(s){s.target.composing||e.$set(e.activeInvoiceAddress,"city",s.target.value)}}})]),e._m(5)])])]),t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field state"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("State")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeInvoiceAddress.state,expression:"activeInvoiceAddress.state"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"State"},domProps:{value:e.activeInvoiceAddress.state},on:{input:function(s){s.target.composing||e.$set(e.activeInvoiceAddress,"state",s.target.value)}}})]),e._m(6)])]),t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field country"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Country")]),t("div",{staticClass:"control select"},[e.$store.state.coredata&&e.$store.state.coredata.countries?t("select",{directives:[{name:"model",rawName:"v-model",value:e.activeInvoiceAddress.country,expression:"activeInvoiceAddress.country"}],on:{change:function(s){var t=Array.prototype.filter.call(s.target.options,function(e){return e.selected}).map(function(e){var s="_value"in e?e._value:e.value;return s});e.$set(e.activeInvoiceAddress,"country",s.target.multiple?t:t[0])}}},e._l(e.$store.state.coredata.countries,function(s){return t("option",{key:s.code,domProps:{value:s.code}},[e._v("\n                    "+e._s(s.name)+"\n                  ")])}),0):e._e()]),e._m(7)])])]),t("div",{staticClass:"columns is-variable is-2 is-centered"},[t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field phone"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Phone")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeInvoiceAddress.phone,expression:"activeInvoiceAddress.phone"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Phone"},domProps:{value:e.activeInvoiceAddress.phone},on:{input:function(s){s.target.composing||e.$set(e.activeInvoiceAddress,"phone",s.target.value)}}})]),e._m(8)])])]),t("div",{staticClass:"columns is-variable is-2 is-centered"},[t("div",{staticClass:"column has-text-centered"},[t("button",{staticClass:"button is-success"},[t("font-awesome-icon",{attrs:{icon:"check"}}),e._v("   \n              "),t("span",{attrs:{translate:"yes"}},[e._v("Set Invoice Address")])],1)])])])])])])]):e._e()},m=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])}],p={name:"UserMeInvoice",data:function(){return{activeInvoiceAddress:{type:"invoice",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""}}},mounted:function(){var e,s=this.$store.getters.getUserProfile;s.addressInvoice&&(e=s.addressInvoice);var t={type:"invoice",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""};if(e&&e.nameFirst&&(t=e),this.activeInvoiceAddress)for(var a in this.activeInvoiceAddress)this.activeInvoiceAddress.hasOwnProperty(a)&&""!=a.trim()&&(this.activeInvoiceAddress[a]=t[a]);return this.$forceUpdate(),t},methods:{saveUserAddresses:function(){var e=[];console.log("userAddressInvoice:",this.activeInvoiceAddress),this.$helpers.verifyAddress(this.activeInvoiceAddress)&&(e.push(this.activeInvoiceAddress),e.concat(this.$store.state.user.profile.addressesDelivery),this.$store.dispatch("updateUser",{addresses:e}))}}},f=p,h=Object(o["a"])(f,u,m,!1,null,null,null),y=h.exports,C=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.$store.state.user.profile?t("div",{attrs:{id:"meDelivery"}},[e._m(0),t("div",{staticClass:"columns"},[e.activeDeliveryAddress?t("div",{staticClass:"column is-8"},[t("form",{on:{submit:function(s){return s.preventDefault(),e.saveUserAddresses(s)}}},[t("div",{staticClass:"deliveryAddressWrapper"},[t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field nameFirst"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("First Name")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeDeliveryAddress.nameFirst,expression:"activeDeliveryAddress.nameFirst"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"First Name"},domProps:{value:e.activeDeliveryAddress.nameFirst},on:{input:function(s){s.target.composing||e.$set(e.activeDeliveryAddress,"nameFirst",s.target.value)}}})]),e._m(1)])]),t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field nameLast"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Last Name")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeDeliveryAddress.nameLast,expression:"activeDeliveryAddress.nameLast"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Last Name"},domProps:{value:e.activeDeliveryAddress.nameLast},on:{input:function(s){s.target.composing||e.$set(e.activeDeliveryAddress,"nameLast",s.target.value)}}})]),e._m(2)])])]),t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-12"},[t("div",{staticClass:"field street"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Street")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeDeliveryAddress.street,expression:"activeDeliveryAddress.street"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Street"},domProps:{value:e.activeDeliveryAddress.street},on:{input:function(s){s.target.composing||e.$set(e.activeDeliveryAddress,"street",s.target.value)}}})]),e._m(3)])])]),t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-12"},[t("div",{staticClass:"field street2"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Street 2")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeDeliveryAddress.street2,expression:"activeDeliveryAddress.street2"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Street 2"},domProps:{value:e.activeDeliveryAddress.street2},on:{input:function(s){s.target.composing||e.$set(e.activeDeliveryAddress,"street2",s.target.value)}}})]),e._m(4)])])]),t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-4"},[t("div",{staticClass:"field zip"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("ZIP")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeDeliveryAddress.zip,expression:"activeDeliveryAddress.zip"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"ZIP"},domProps:{value:e.activeDeliveryAddress.zip},on:{input:function(s){s.target.composing||e.$set(e.activeDeliveryAddress,"zip",s.target.value)}}})]),e._m(5)])]),t("div",{staticClass:"column is-8"},[t("div",{staticClass:"field city"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("City")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeDeliveryAddress.city,expression:"activeDeliveryAddress.city"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"City"},domProps:{value:e.activeDeliveryAddress.city},on:{input:function(s){s.target.composing||e.$set(e.activeDeliveryAddress,"city",s.target.value)}}})]),e._m(6)])])]),t("div",{staticClass:"columns is-variable is-2"},[t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field state"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("State")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeDeliveryAddress.state,expression:"activeDeliveryAddress.state"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"State"},domProps:{value:e.activeDeliveryAddress.state},on:{input:function(s){s.target.composing||e.$set(e.activeDeliveryAddress,"state",s.target.value)}}})]),e._m(7)])]),t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field country"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Country")]),t("div",{staticClass:"control select"},[e.$store.state.coredata&&e.$store.state.coredata.countries?t("select",{directives:[{name:"model",rawName:"v-model",value:e.activeDeliveryAddress.country,expression:"activeDeliveryAddress.country"}],on:{change:function(s){var t=Array.prototype.filter.call(s.target.options,function(e){return e.selected}).map(function(e){var s="_value"in e?e._value:e.value;return s});e.$set(e.activeDeliveryAddress,"country",s.target.multiple?t:t[0])}}},e._l(e.$store.state.coredata.countries,function(s){return t("option",{key:s.code,domProps:{value:s.code}},[e._v("\n                      "+e._s(s.name)+"\n                    ")])}),0):e._e()]),e._m(8)])])]),t("div",{staticClass:"columns is-variable is-2 is-centered"},[t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field phone"},[t("label",{staticClass:"label",attrs:{translate:"yes"}},[e._v("Phone")]),t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.activeDeliveryAddress.phone,expression:"activeDeliveryAddress.phone"}],staticClass:"input",attrs:{type:"text",translate:"yes",placeholder:"Phone"},domProps:{value:e.activeDeliveryAddress.phone},on:{input:function(s){s.target.composing||e.$set(e.activeDeliveryAddress,"phone",s.target.value)}}})]),e._m(9)])])]),t("div",{staticClass:"columns is-variable is-2 is-centered"},[t("div",{staticClass:"column is-6 has-text-centered"},[t("button",{staticClass:"button is-success",attrs:{type:"submit"}},[t("font-awesome-icon",{attrs:{icon:"check"}}),e._v("   \n                "),t("span",{attrs:{translate:"yes"}},[e._v("Address")])],1)])])])])]):e._e(),t("div",{staticClass:"column is-4"},[t("nav",{staticClass:"panel user-settings-delivery-nav"},[t("p",{staticClass:"panel-heading",attrs:{translate:"yes"}},[e._v("\n          Addresses\n        ")]),t("div",[t("div",{staticClass:"panel-block"},[t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryFilter,expression:"deliveryFilter"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"search"},domProps:{value:e.deliveryFilter},on:{input:function(s){s.target.composing||(e.deliveryFilter=s.target.value)}}}),e._m(10)])]),e._l(e.userDeliveryAddress,function(s,a){return t("div",{key:a},[t("div",{staticClass:"panel-block special--right-action"},[t("a",{staticClass:"user-delivery--get",on:{click:function(s){return e.getDeliveryAddress(a,s)}}},[e._v("\n                "+e._s(s.street)+", "+e._s(s.zip)+"\n              ")]),t("a",{staticClass:"user-delivery--delete",on:{click:function(s){return e.removeDeliveryAddress(a)}}},[t("font-awesome-icon",{attrs:{icon:"trash"}})],1)])])})],2),t("div",{staticClass:"panel-block"},[t("button",{staticClass:"button is-link is-outlined is-fullwidth",on:{click:e.addNewDeliveryAddress}},[t("font-awesome-icon",{attrs:{icon:"plus"}}),e._v("   \n            "),t("span",{attrs:{translate:"yes"}},[e._v("Add New Delivery Address")])],1)])])])])]):e._e()},g=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"columns is-variable is-8"},[t("div",{staticClass:"column is-8"},[t("h2",{staticClass:"title is-2 has-text-centered",attrs:{translate:"yes"}},[e._v("Delivery Addresses")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-messages is-hidden"},[t("div",{staticClass:"form-message",attrs:{"data-message":"is empty",translate:"yes"}},[e._v("This value cannot be empty")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-search",attrs:{"aria-hidden":"true"}})])}],_=(t("6b54"),{name:"UserMeDelivery",data:function(){return{activeDeliveryAddressIndex:0,activeDeliveryAddress:{type:"delivery",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""},deliveryFilter:""}},computed:{userDeliveryAddress:function(){var e=this.$store.getters.getUserProfile.addressesDelivery,s=[];if(e&&e.length>0&&(s=e,""!==this.deliveryFilter.toString().trim())){var t=this.deliveryFilter.toString().trim().toLowerCase(),a=[];e.forEach(function(e,s){var i=!1;for(var r in e)e.hasOwnProperty(r)&&e[r].toString().trim().toLowerCase().indexOf(t)>-1&&(i=!0);i&&a.push(e)}),a.length>0&&(s=a)}return console.log(s.length),s}},mounted:function(){this.getDeliveryAddress(0)},methods:{getDeliveryAddress:function(e,s){var t="undefined"!==typeof e&&e>-1?e:null;if(null===t&&(t=0),this.activeDeliveryAddressIndex=t,this.activeDeliveryAddress=this.userDeliveryAddress[t],"undefined"==typeof this.activeDeliveryAddress||!this.activeDeliveryAddress){var a=this.$store.state.user.profile.addressesDelivery[t];"undefined"!==typeof a&&(this.activeDeliveryAddress=a)}s?this.markActiveDeliveryAddress(s.target.parentNode):this.markActiveDeliveryAddress()},addNewDeliveryAddress:function(){var e=this;this.$store.dispatch("addNewDeliveryAddress",{type:"delivery",nameFirst:"",nameLast:"",street:"",street2:"",zip:"",city:"",country:"",phone:""}).then(function(){e.getDeliveryAddress(),e.$forceUpdate()}),this.$forceUpdate()},removeDeliveryAddress:function(e){var s=this;this.$store.dispatch("removeDeliveryAddress",e).then(function(){s.activeDeliveryAddressIndex=0,s.$forceUpdate(),s.saveUserAddresses()})},saveUserAddresses:function(){if(this.$helpers.verifyAddress(this.activeDeliveryAddress)){var e=[],s=this.$store.getters.getUserProfile;if(e.push(s.addressInvoice),s.addressesDelivery.length>0)for(var t=0;t<s.addressesDelivery.length;t++)e.push(s.addressesDelivery[t]);this.$store.dispatch("updateUser",{addresses:e})}},markActiveDeliveryAddress:function(e){var s="undefined"!==typeof e&&e?e:null;this.activeDeliveryAddressIndex=0,this.$store.state.user.profile&&this.$store.state.user.profile.addressesDelivery.length>1&&(this.activeDeliveryAddressIndex=this.$store.state.user.profile.addressesDelivery.length-1);var t=this.$el.querySelectorAll(".users-me #meDelivery nav.user-settings-delivery-nav .panel-block.special--right-action");t&&t.length&&t.forEach(function(e){e.classList.remove("is-active")}),s?s.classList.add("is-active"):t&&t.length>0&&t[0].classList.add("is-active")}}}),b=_,A=(t("74fd"),Object(o["a"])(b,C,g,!1,null,null,null)),D=A.exports,$={name:"UsersMe",components:{UserMeInfo:v,UserMeInvoince:y,UserMeDelivery:D},data:function(){return{activeComponent:v,menuStates:{UserMeInfo:!0,UserMeInvoince:!1,UserMeDelivery:!1},availablePaths:{address:y,delivery:D}}},computed:{isLogged:function(){return"undefined"!==typeof this.$store&&"undefined"!==typeof this.$store.state.user.logged&&this.$store.state.user.logged}},created:function(){console.log(this.$options.components);var e=this.$route.path.split("/");e=e.filter(function(e){return""!=e}),console.log(e,"pathBroken[2]",e[2]),e.length>2&&"undefined"!==typeof this.availablePaths[e[2]]&&(console.log(this.availablePaths[e[2]]),this.activeComponent=this.availablePaths[e[2]])},methods:{userComponent:function(e,s){this.$options.components&&this.$options.components[e]&&(this.activeComponent=this.$options.components[e]);var t=this.$el.querySelectorAll(".users-me nav.user-settings-nav a.panel-block");t&&t.length&&t.forEach(function(e){e.classList.remove("is-active")}),s.target.classList.add("is-active")}}},w=$,x=Object(o["a"])(w,a,i,!1,null,null,null);s["default"]=x.exports}}]);
//# sourceMappingURL=chunk-dcc57aa0.ccba6948.js.map