"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3927],{3927:(U,d,a)=>{a.r(d),a.d(d,{ArchivePageModule:()=>y});var c=a(9808),g=a(3075),i=a(8058),s=a(1216),u=a(5e3),p=a(5539),m=a(7281),A=a(2217),l=a(8995);function Z(t,o){1&t&&(u.TgZ(0,"div",4),u._UZ(1,"ion-icon",5),u.TgZ(2,"p"),u._uU(3),u.ALo(4,"translate"),u.qZA()()),2&t&&(u.xp6(3),u.hij("",u.lcZ(4,1,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0443 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),"."))}function h(t,o){if(1&t&&(u.TgZ(0,"div",6)(1,"div",7)(2,"span"),u._uU(3),u.qZA()(),u.TgZ(4,"table",8)(5,"tbody")(6,"tr")(7,"td"),u._uU(8),u.ALo(9,"translate"),u.qZA(),u.TgZ(10,"td"),u._uU(11),u.qZA()(),u.TgZ(12,"tr")(13,"td"),u._uU(14),u.ALo(15,"translate"),u.qZA(),u.TgZ(16,"td"),u._uU(17),u.qZA()()()(),u.TgZ(18,"table",9)(19,"tbody")(20,"tr")(21,"td"),u._uU(22),u.ALo(23,"translate"),u.qZA(),u.TgZ(24,"td"),u._uU(25),u.ALo(26,"formatTime"),u.qZA()(),u.TgZ(27,"tr")(28,"td"),u._uU(29),u.ALo(30,"translate"),u.qZA(),u.TgZ(31,"td"),u._uU(32),u.qZA()(),u.TgZ(33,"tr")(34,"td"),u._uU(35),u.ALo(36,"translate"),u.qZA(),u.TgZ(37,"td"),u._uU(38),u.qZA()(),u.TgZ(39,"tr")(40,"td"),u._uU(41),u.ALo(42,"translate"),u.qZA(),u.TgZ(43,"td"),u._uU(44),u.ALo(45,"translate"),u.qZA()(),u.TgZ(46,"tr")(47,"td"),u._uU(48),u.ALo(49,"translate"),u.qZA(),u.TgZ(50,"td"),u._uU(51),u.qZA()()()(),u.TgZ(52,"button",10),u._uU(53),u.ALo(54,"translate"),u.qZA()()),2&t){const e=o.$implicit,r=u.oxw();u.xp6(3),u.hij(" \u2116",r.authService.addLeadingZeros(e.id),""),u.xp6(5),u.hij("",u.lcZ(9,17,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0438\u0437"),":"),u.xp6(3),u.Oqu(e.route.from_city),u.xp6(3),u.hij("",u.lcZ(15,19,"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0432"),":"),u.xp6(3),u.Oqu(e.route.to_city),u.xp6(5),u.Oqu(u.lcZ(23,21,"\u0412\u0440\u0435\u043c\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438")),u.xp6(3),u.Oqu(u.xi3(26,23,e.date_send,"DD MMMM YYYY \u0432 HH:mm")),u.xp6(4),u.Oqu(u.lcZ(30,26,"\u0422\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),u.xp6(3),u.Oqu(r.returnNameTypeTransport(e.transport_type)),u.xp6(3),u.Oqu(u.lcZ(36,28,"\u0422\u0438\u043f \u0433\u0440\u0443\u0437\u0430")),u.xp6(3),u.Oqu(r.returnNameCargoType(e.type_cargo)),u.xp6(3),u.Oqu(u.lcZ(42,30,"\u0412\u0435\u0441 \u0433\u0440\u0443\u0437\u0430")),u.xp6(3),u.AsE("",e.weight," ",u.lcZ(45,32,"\u043a\u0433"),"."),u.xp6(4),u.Oqu(u.lcZ(49,34,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c")),u.xp6(3),u.Oqu(e.usernameorder),u.xp6(2),u.Oqu(u.lcZ(54,36,"\u0417\u0430\u043a\u0430\u0437 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d"))}}const v=[{path:"",component:(()=>{class t{constructor(e,r,n){this.authService=e,this.platform=r,this.router=n,this.items=[]}ngOnInit(){this.items=this.authService.myarchiveorders}returnNameTypeTransport(e){const r=this.authService.typetruck.findIndex(n=>+n.id==+e);return r>=0?this.authService.typetruck[r].name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}returnNameCargoType(e){const r=this.authService.typecargo.findIndex(n=>+n.id==+e);return r>=0?this.authService.typecargo[r].name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(p.$),u.Y36(i.t4),u.Y36(s.F0))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-archive"]],decls:6,vars:2,consts:[["class","noItem",4,"ngIf"],[1,"wrapper-fluid"],[1,"body-wrap","form-block","main-body","body-have-bottom-menu"],["class","order-item",4,"ngFor","ngForOf"],[1,"noItem"],["src","assets/img/wrong.svg"],[1,"order-item"],[1,"order-item-articul"],[1,"table-info","table-img"],[1,"table-data"],[1,"get-order-btn"]],template:function(e,r){1&e&&(u._UZ(0,"app-header"),u.TgZ(1,"ion-content"),u.YNc(2,Z,5,3,"div",0),u.TgZ(3,"div",1)(4,"div",2),u.YNc(5,h,55,38,"div",3),u.qZA()()()),2&e&&(u.xp6(2),u.Q6J("ngIf",r.items&&0===r.items.length),u.xp6(3),u.Q6J("ngForOf",r.items))},dependencies:[c.sg,c.O5,i.W2,i.gu,m.E,A.Q,l.X$]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[s.Bz.forChild(v),s.Bz]}),t})();var T=a(1059),x=a(1456);let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[c.ez,g.u5,i.Pc,f,T.HeaderPageModule,x.h,l.aw]}),t})()}}]);