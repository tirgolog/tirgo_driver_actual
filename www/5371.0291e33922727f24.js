"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5371],{4930:(J,p,i)=>{i.r(p),i.d(p,{ActiveorderPageModule:()=>b});var c=i(9808),A=i(3075),s=i(8058),g=i(1216),d=i(7582),v=i(1847),t=i(5e3),Z=i(7053),f=i(602),T=i(2553),y=i(7281),x=i(2217),m=i(8995);function q(e,o){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const u=o.$implicit,r=t.oxw(2);t.xp6(1),t.hij(" ",r.returnNameTypeTransport(u)," ")}}function O(e,o){if(1&e&&(t.TgZ(0,"span"),t.YNc(1,q,2,1,"span",10),t.qZA()),2&e){const u=t.oxw();t.xp6(1),t.Q6J("ngForOf",u.item.transport_types)}}function P(e,o){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const u=t.oxw();t.xp6(1),t.hij(" ",u.returnNameTypeTransport(u.item.transport_type)," ")}}function U(e,o){1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,2,"\u0411\u0435\u0437\u043d\u0430\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u043f\u043b\u0430\u0442\u0430")),t.xp6(3),t.Oqu("\u0414\u0430"))}function _(e,o){1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,2,"ADR")),t.xp6(3),t.Oqu("\u0414\u0430"))}function C(e,o){1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA()()),2&e&&(t.xp6(2),t.Oqu(t.lcZ(3,2,"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430\u044f \u0441\u0434\u0435\u043b\u043a\u0430")),t.xp6(3),t.Oqu("\u0414\u0430"))}function S(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA()()),2&e){const u=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),t.xp6(3),t.hij("+",u.item.userphoneorder,"")}}function N(e,o){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA()()),2&e){const u=t.oxw();t.xp6(2),t.Oqu(t.lcZ(3,2,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),t.xp6(3),t.hij("+",null==u.item.merchant?null:u.item.merchant.phoneNumbers[0],"")}}const Y=[{path:"",component:(()=>{class e{constructor(u,r,n,l,a,h,B,E){this.authService=u,this.loadingCtrl=r,this.callNumber=n,this.alertController=l,this.platform=a,this.router=h,this.modalCtrl=B,this.geolocation=E}ngOnInit(){this.item=this.authService.activeorder,this.item.transport_types=JSON.parse(this.item.transport_types),console.log(this.item),console.log(this.item.transport_types)}finishOrder(u){return(0,d.mG)(this,void 0,void 0,function*(){const r=yield this.alertController.create({header:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",message:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437?",cssClass:"customAlert",buttons:[{text:"\u041d\u0435\u0442",role:"cancel",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"\u0414\u0430",handler:()=>(0,d.mG)(this,void 0,void 0,function*(){yield r.present(),this.loading=yield this.loadingCtrl.create({message:"\u0417\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u043c \u0437\u0430\u043a\u0430\u0437"}),this.loading.present(),this.geolocation.getCurrentPosition({maximumAge:1e3,timeout:5e3,enableHighAccuracy:!0}).then(n=>(0,d.mG)(this,void 0,void 0,function*(){var l;let a;a=u.isMerchant?yield this.authService.finishMerchantOrder(this.authService.activeorder.id,n.coords.latitude.toString(),n.coords.longitude.toString(),null===(l=u.route)||void 0===l?void 0:l.to_city).toPromise():yield this.authService.finishOrder(this.authService.activeorder.id,n.coords.latitude.toString(),n.coords.longitude.toString()).toPromise(),yield(yield this.modalCtrl.create({component:v.b,swipeToClose:!0,showBackdrop:!0,breakpoints:[0,.6],initialBreakpoint:.6,presentingElement:yield this.modalCtrl.getTop(),backdropDismiss:!0,cssClass:"modalCss",mode:"ios",componentProps:{orderid:this.authService.activeorder.id,userid:this.authService.activeorder.user_id}})).present(),a.status?(this.loading.dismiss(),a.error&&(yield this.authService.alert("\u041e\u0448\u0438\u0431\u043a\u0430",a.error)),this.authService.activeorder=null,yield this.router.navigate(["/tabs/home"],{replaceUrl:!0})):(this.loading.dismiss(),yield this.authService.alert("\u041e\u0448\u0438\u0431\u043a\u0430",a.error))})).catch(n=>(0,d.mG)(this,void 0,void 0,function*(){this.loading.dismiss(),this.authService.alertLocation("\u0423\u043f\u0441","\u0414\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430 \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0437\u043d\u0430\u0442\u044c \u0432\u0430\u0448\u0443 \u0433\u0435\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u044e. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 Tirgo Driver")}))})}]});yield r.present()})}callMan(u){console.log(u),this.callNumber.callNumber("+"+u,!0)}returnNameTypeTransport(u){const r=this.authService.typetruck.findIndex(n=>+n.id==+u);return r>=0?this.authService.typetruck[r].name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}returnNameCargoType(u){const r=this.authService.typecargo.findIndex(n=>+n.id==+u);return r>=0?this.authService.typecargo[r].name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}}return e.\u0275fac=function(u){return new(u||e)(t.Y36(Z.$),t.Y36(s.HT),t.Y36(f.X),t.Y36(s.Br),t.Y36(s.t4),t.Y36(g.F0),t.Y36(s.IN),t.Y36(T.b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-activeorder"]],decls:67,vars:44,consts:[[1,"ion-padding"],[1,"order-item"],[1,"order-item-articul"],["src","assets/img/circle.svg","alt",""],[1,"table-info","table-img"],[1,"table-data"],[2,"color","#fff"],[4,"ngIf"],[1,"get-order-btn","order-succes-btn",3,"click"],[1,"get-order-btn",3,"click"],[4,"ngFor","ngForOf"]],template:function(u,r){1&u&&(t._UZ(0,"app-header"),t.TgZ(1,"ion-content",0)(2,"div",1)(3,"div",2)(4,"span"),t._UZ(5,"img",3),t._uU(6),t.qZA()(),t.TgZ(7,"table",4)(8,"tbody")(9,"tr")(10,"td"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()(),t.TgZ(15,"tr")(16,"td"),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA()()()(),t.TgZ(21,"table",5)(22,"tbody")(23,"tr")(24,"td"),t._uU(25),t.ALo(26,"translate"),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.ALo(29,"formatTime"),t.qZA()(),t.TgZ(30,"tr")(31,"td"),t._uU(32),t.ALo(33,"translate"),t.qZA(),t.TgZ(34,"td")(35,"div",6),t.YNc(36,O,2,1,"span",7),t.YNc(37,P,2,1,"span",7),t.qZA()()(),t.TgZ(38,"tr")(39,"td"),t._uU(40),t.ALo(41,"translate"),t.qZA(),t.TgZ(42,"td"),t._uU(43),t.qZA()(),t.YNc(44,U,6,4,"tr",7),t.YNc(45,_,6,4,"tr",7),t.YNc(46,C,6,4,"tr",7),t.TgZ(47,"tr")(48,"td"),t._uU(49),t.ALo(50,"translate"),t.qZA(),t.TgZ(51,"td"),t._uU(52),t.qZA()(),t.TgZ(53,"tr")(54,"td"),t._uU(55),t.ALo(56,"translate"),t.qZA(),t.TgZ(57,"td"),t._uU(58),t.qZA()(),t.YNc(59,S,6,4,"tr",7),t.YNc(60,N,6,4,"tr",7),t.qZA()(),t.TgZ(61,"button",8),t.NdJ("click",function(){return r.callMan(r.item.userphoneorder)}),t._uU(62),t.ALo(63,"translate"),t.qZA(),t.TgZ(64,"button",9),t.NdJ("click",function(){return r.finishOrder(r.item)}),t._uU(65),t.ALo(66,"translate"),t.qZA()()()),2&u&&(t.xp6(6),t.hij(" \u2116",r.authService.addLeadingZeros(null==r.item?null:r.item.id),""),t.xp6(5),t.hij("",t.lcZ(12,23,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0438\u0437"),":"),t.xp6(3),t.Oqu(null==r.item.route?null:r.item.route.from_city),t.xp6(3),t.hij("",t.lcZ(18,25,"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0432"),":"),t.xp6(3),t.Oqu(null==r.item.route?null:r.item.route.to_city),t.xp6(5),t.Oqu(t.lcZ(26,27,"\u0412\u0440\u0435\u043c\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438")),t.xp6(3),t.Oqu(t.xi3(29,29,null==r.item?null:r.item.date_send,"DD MMMM YYYY \u0432 HH:mm")),t.xp6(4),t.Oqu(t.lcZ(33,32,"\u0422\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),t.xp6(4),t.Q6J("ngIf",r.item.transport_types),t.xp6(1),t.Q6J("ngIf",r.item.transport_type&&!r.item.transport_types),t.xp6(3),t.Oqu(t.lcZ(41,34,"\u0422\u0438\u043f \u0433\u0440\u0443\u0437\u0430")),t.xp6(3),t.Oqu(r.returnNameCargoType(r.item.type_cargo)),t.xp6(1),t.Q6J("ngIf",r.item.no_cash),t.xp6(1),t.Q6J("ngIf",r.item.adr),t.xp6(1),t.Q6J("ngIf",r.item.secure_transaction),t.xp6(3),t.Oqu(t.lcZ(50,36,"\u0412\u0435\u0441 \u0433\u0440\u0443\u0437\u0430")),t.xp6(3),t.hij("",r.item.weight," \u043a\u0433."),t.xp6(3),t.Oqu(t.lcZ(56,38,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c")),t.xp6(3),t.Oqu(r.item.usernameorder),t.xp6(1),t.Q6J("ngIf",r.item.userphoneorder),t.xp6(1),t.Q6J("ngIf",null==r.item.merchant?null:r.item.merchant.phoneNumbers[0]),t.xp6(2),t.Oqu(t.lcZ(63,40,"\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c")),t.xp6(3),t.Oqu(t.lcZ(66,42,"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437")))},dependencies:[c.sg,c.O5,s.W2,y.E,x.Q,m.X$],styles:[".table-info[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:50px;padding:0 0 0 15px!important}"]}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(Y),g.Bz]}),e})();var M=i(1059),L=i(1456);let b=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,A.u5,s.Pc,F,M.HeaderPageModule,L.h,m.aw]}),e})()}}]);