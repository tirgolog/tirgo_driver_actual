"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9061],{9061:(T,_,d)=>{d.d(_,{i:()=>x});var s=d(7582),c=d(7053),e=d(5e3),o=d(8058),h=d(9808),p=d(3075),g=d(8995);function m(n,l){if(1&n){const i=e.EpF();e.TgZ(0,"div",23),e.NdJ("click",function(){const u=e.CHM(i).$implicit,a=e.oxw();return e.KtG(a.delFileTechTransport(u.preview.toString()))}),e.TgZ(1,"div",24),e._UZ(2,"ion-icon",25),e.qZA(),e.TgZ(3,"div",26),e._UZ(4,"img",27),e.qZA()()}if(2&n){const i=l.$implicit,t=e.oxw();e.xp6(4),e.Q6J("src",t.file_url+i.filename,e.LSH)}}function v(n,l){if(1&n){const i=e.EpF();e.TgZ(0,"div",23),e.NdJ("click",function(){const u=e.CHM(i).index,a=e.oxw();return e.KtG(a.delFileLicense(u))}),e.TgZ(1,"div",24),e._UZ(2,"ion-icon",25),e.qZA(),e.TgZ(3,"div",26),e._UZ(4,"img",27),e.qZA()()}if(2&n){const i=l.$implicit,t=e.oxw();e.xp6(4),e.Q6J("src",t.file_url+i.filename,e.LSH)}}function f(n,l){if(1&n){const i=e.EpF();e.TgZ(0,"div",16)(1,"div",17),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.addFilesLicense())}),e.TgZ(2,"label",18)(3,"span",19)(4,"span"),e._uU(5,"+"),e.qZA(),e._UZ(6,"br"),e._uU(7),e.ALo(8,"translate"),e._UZ(9,"br"),e._uU(10),e.ALo(11,"translate"),e.qZA()()()()}2&n&&(e.xp6(7),e.hij("",e.lcZ(8,2,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")," "),e.xp6(3),e.hij(" ",e.lcZ(11,4,"\u043b\u0438\u0446\u0435\u043d\u0437\u0438\u044e"),""))}function A(n,l){if(1&n){const i=e.EpF();e.TgZ(0,"div",23),e.NdJ("click",function(){const u=e.CHM(i).index,a=e.oxw();return e.KtG(a.delFileCarPhoto(u))}),e.TgZ(1,"div",24),e._UZ(2,"ion-icon",25),e.qZA(),e.TgZ(3,"div",26),e._UZ(4,"img",27),e.qZA()()}if(2&n){const i=l.$implicit,t=e.oxw();e.xp6(4),e.Q6J("src",t.file_url+i.filename,e.LSH)}}function Z(n,l){if(1&n){const i=e.EpF();e.TgZ(0,"div",16)(1,"div",17),e.NdJ("click",function(){e.CHM(i);const r=e.oxw();return e.KtG(r.addFilesCarPhoto())}),e.TgZ(2,"label",18)(3,"span",19)(4,"span"),e._uU(5,"+"),e.qZA(),e._UZ(6,"br"),e._uU(7),e.ALo(8,"translate"),e._UZ(9,"br"),e._uU(10),e.ALo(11,"translate"),e.qZA()()()()}2&n&&(e.xp6(7),e.hij("",e.lcZ(8,2,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")," "),e.xp6(3),e.hij(" ",e.lcZ(11,4,"\u0444\u043e\u0442\u043e"),""))}let x=(()=>{class n{constructor(i,t,r,u){this.modalController=i,this.loadingCtrl=t,this.authService=r,this.alertController=u,this.file_url="https://admin.tirgo.io/file/",this.type=0,this.maxweight=21e3,this.name="",this.description="",this.typetransport=[],this.adr=!1,this.cubature="96",this.state_number="",this.tech_passport_files=[],this.license_files=[],this.car_photos=[],this.loadingAddTransport=!1}ngOnInit(){this.typetransport=this.authService.typetruck.map(i=>({label:i.name,type:"radio",value:i.id}))}close(){return(0,s.mG)(this,void 0,void 0,function*(){yield this.modalController.dismiss({accepted:!0})})}returnNameTypeTransport(i){const t=this.authService.typetruck.findIndex(r=>+r.id==+i);return t>=0?this.authService.typetruck[t].name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}returnMaxWeightTransport(i){const t=this.authService.typetruck.findIndex(r=>+r.id==+i);return t>=0?this.authService.typetruck[t].weight:0}selectTypeTransport(){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430",cssClass:"customAlert",inputs:this.typetransport,buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",handler:t=>(0,s.mG)(this,void 0,void 0,function*(){this.type=t,this.maxweight=this.returnMaxWeightTransport(t)})}]})).present()})}selectCubature(){return(0,s.mG)(this,void 0,void 0,function*(){0===this.type?this.authService.alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f","\u0414\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u043a\u0443\u0431\u0430\u0442\u0443\u0440\u044b \u043f\u0440\u0438\u0446\u0435\u043f\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u0438\u043f \u043f\u0440\u0438\u0446\u0435\u043f\u0430"):yield(yield this.alertController.create({header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0431\u0430\u0442\u0443\u0440\u0443",cssClass:"customAlert",inputs:[{label:"82 m3",type:"radio",value:82},{label:"90 m3",type:"radio",value:90},{label:"96 m3",type:"radio",value:96},{label:"105 m3",type:"radio",value:105},{label:"110 m3",type:"radio",value:110},{label:"120 m3",type:"radio",value:120}],buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",handler:t=>(0,s.mG)(this,void 0,void 0,function*(){this.cubature=t})}]})).present()})}saveTransport(){return(0,s.mG)(this,void 0,void 0,function*(){this.loadingAddTransport=!0,0===this.type&&(this.authService.alert("\u041e\u0448\u0438\u0431\u043a\u0430","\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430."),this.loadingAddTransport=!1),yield this.authService.addTransport(this.name,this.description,this.maxweight,this.type,this.car_photos,this.license_files,this.tech_passport_files,this.adr,this.cubature,this.state_number).toPromise().then(i=>(0,s.mG)(this,void 0,void 0,function*(){i.status&&(this.authService.mytruck=yield this.authService.getTruck().toPromise(),this.authService.myorders=yield this.authService.getMyOrders().toPromise(),yield this.close(),yield this.authService.alert("\u041e\u0442\u043b\u0438\u0447\u043d\u043e","\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"))})).catch(i=>(0,s.mG)(this,void 0,void 0,function*(){console.log(i)}))})}addFilesTechPassport(){return(0,s.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadingCtrl.create({message:"\u041e\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0444\u043e\u0442\u043e",cssClass:"custom-loading"}),yield this.authService.camera.getPicture(this.authService.optionsCamera).then(i=>(0,s.mG)(this,void 0,void 0,function*(){this.loading.present();const t=yield this.authService.transfer.create(),u={headers:{Authorization:"Bearer "+c.$.jwt},fileKey:"file",mimeType:"image/*",chunkedMode:!1,fileName:i.substr(i.lastIndexOf("/")+1),params:{typeUser:"driver",typeImage:"car-docks"}},a=JSON.parse((yield t.upload(i,this.authService.API_URL+"/users/uploadImage",u)).response);a.status&&(this.tech_passport_files.push(a.file),this.loading.dismiss())}))})}delFileTechTransport(i){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e",message:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.",cssClass:"customAlert",buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",role:"destructive",handler:r=>(0,s.mG)(this,void 0,void 0,function*(){const u=this.tech_passport_files.findIndex(a=>a.preview===i);u>=0&&this.tech_passport_files.splice(u,1)})}]})).present()})}addFilesLicense(){return(0,s.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadingCtrl.create({message:"\u041e\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0444\u043e\u0442\u043e",cssClass:"custom-loading"}),yield this.authService.camera.getPicture(this.authService.optionsCamera).then(i=>(0,s.mG)(this,void 0,void 0,function*(){this.loading.present();const t=yield this.authService.transfer.create(),u={headers:{Authorization:"Bearer "+c.$.jwt},fileKey:"file",mimeType:"image/*",chunkedMode:!1,fileName:i.substr(i.lastIndexOf("/")+1),params:{typeUser:"driver",typeImage:"car-docks"}},a=JSON.parse((yield t.upload(i,this.authService.API_URL+"/users/uploadImage",u)).response);a.status&&(this.license_files.push(a.file),this.loading.dismiss())}))})}delFileLicense(i){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e",message:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.",cssClass:"customAlert",buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",role:"destructive",handler:r=>(0,s.mG)(this,void 0,void 0,function*(){this.license_files.splice(i,1)})}]})).present()})}addFilesCarPhoto(){return(0,s.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadingCtrl.create({message:"\u041e\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0444\u043e\u0442\u043e",cssClass:"custom-loading"}),yield this.authService.camera.getPicture(this.authService.optionsCamera).then(i=>(0,s.mG)(this,void 0,void 0,function*(){this.loading.present();const t=yield this.authService.transfer.create(),u={headers:{Authorization:"Bearer "+c.$.jwt},fileKey:"file",mimeType:"image/*",chunkedMode:!1,fileName:i.substr(i.lastIndexOf("/")+1),params:{typeUser:"driver",typeImage:"car-docks"}},a=JSON.parse((yield t.upload(i,this.authService.API_URL+"/users/uploadImage",u)).response);a.status&&(this.car_photos.push(a.file),this.loading.dismiss())}))})}delFileCarPhoto(i){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e",message:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.",cssClass:"customAlert",buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",role:"destructive",handler:r=>(0,s.mG)(this,void 0,void 0,function*(){this.license_files.splice(i,1)})}]})).present()})}setAdrUser(i){return(0,s.mG)(this,void 0,void 0,function*(){this.adr=i.target.checked})}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(o.IN),e.Y36(o.HT),e.Y36(c.$),e.Y36(o.Br))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-addtransport"]],decls:98,vars:73,consts:[[1,"my-custom-header"],["slot","end"],[3,"click"],[1,"wrapper-fluid","ion-padding-tabs"],[1,"body-wrap","form-block"],[1,"autorize"],["type","text","name","name","readonly","",3,"placeholder","value","click"],["type","text","name","name",3,"placeholder","ngModel","ngModelChange"],["rows","5","type","text","name","name",3,"placeholder","ngModel","ngModelChange"],["readonly","","type","text","name","name",3,"placeholder","value","click"],["type","text","name","name","placeholder","\u0413\u043e\u0441. \u043d\u043e\u043c\u0435\u0440 \u0422\u044f\u0433\u0430\u0447\u0430",3,"ngModel","ngModelChange"],[1,"data-checkbox"],["type","checkbox",1,"checkbox",3,"checked","change"],[1,"fake-checkbox"],[1,"file-uploads"],["class","file-group",3,"click",4,"ngFor","ngForOf"],[1,"file-group"],[1,"form-group",3,"click"],[1,"label"],[1,"title"],["class","file-group",4,"ngIf"],[1,"bottom-wrap","personal-bottom"],[1,"reg-btn",3,"disabled","click"],[1,"file-group",3,"click"],[1,"del-button"],["name","trash-bin-outline"],[1,"form-group"],["alt","",3,"src"]],template:function(i,t){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"ion-buttons",1)(6,"ion-button",2),e.NdJ("click",function(){return t.close()}),e._uU(7),e.ALo(8,"translate"),e.qZA()()()(),e.TgZ(9,"ion-content")(10,"div",3)(11,"div",4)(12,"div",5)(13,"p")(14,"b"),e._uU(15),e.ALo(16,"translate"),e.qZA()(),e.TgZ(17,"input",6),e.NdJ("click",function(){return t.selectTypeTransport()}),e.ALo(18,"translate"),e.qZA(),e.ynx(19),e.TgZ(20,"p")(21,"b"),e._uU(22),e.ALo(23,"translate"),e.qZA()(),e.TgZ(24,"input",7),e.NdJ("ngModelChange",function(u){return t.name=u}),e.ALo(25,"translate"),e.qZA(),e.BQk(),e.ynx(26),e.TgZ(27,"p")(28,"b"),e._uU(29),e.ALo(30,"translate"),e.qZA()(),e.TgZ(31,"textarea",8),e.NdJ("ngModelChange",function(u){return t.description=u}),e.ALo(32,"translate"),e.qZA(),e.BQk(),e.ynx(33),e.TgZ(34,"p")(35,"b"),e._uU(36),e.ALo(37,"translate"),e.qZA()(),e.TgZ(38,"input",7),e.NdJ("ngModelChange",function(u){return t.maxweight=u}),e.ALo(39,"translate"),e.qZA(),e.BQk(),e.ynx(40),e.TgZ(41,"p")(42,"b"),e._uU(43),e.ALo(44,"translate"),e.qZA()(),e.TgZ(45,"input",9),e.NdJ("click",function(){return t.selectCubature()}),e.ALo(46,"translate"),e.qZA(),e.BQk(),e.ynx(47),e.TgZ(48,"p")(49,"b"),e._uU(50),e.ALo(51,"translate"),e.qZA()(),e.TgZ(52,"input",10),e.NdJ("ngModelChange",function(u){return t.state_number=u}),e.qZA(),e.BQk(),e.ynx(53),e.TgZ(54,"div",11)(55,"p"),e._uU(56,"ADR"),e.qZA(),e.TgZ(57,"label")(58,"input",12),e.NdJ("change",function(u){return t.setAdrUser(u)}),e.qZA(),e._UZ(59,"span",13),e._uU(60),e.ALo(61,"translate"),e.qZA()(),e.BQk(),e.TgZ(62,"p")(63,"b"),e._uU(64),e.ALo(65,"translate"),e.qZA()(),e.TgZ(66,"div",14),e.YNc(67,m,5,1,"div",15),e.TgZ(68,"div",16)(69,"div",17),e.NdJ("click",function(){return t.addFilesTechPassport()}),e.TgZ(70,"label",18)(71,"span",19)(72,"span"),e._uU(73,"+"),e.qZA(),e._UZ(74,"br"),e._uU(75),e.ALo(76,"translate"),e._UZ(77,"br"),e._uU(78),e.ALo(79,"translate"),e.qZA()()()()(),e.TgZ(80,"p")(81,"b"),e._uU(82),e.ALo(83,"translate"),e.qZA()(),e.TgZ(84,"div",14),e.YNc(85,v,5,1,"div",15),e.YNc(86,f,12,6,"div",20),e.qZA(),e.TgZ(87,"p")(88,"b"),e._uU(89),e.ALo(90,"translate"),e.qZA()(),e.TgZ(91,"div",14),e.YNc(92,A,5,1,"div",15),e.YNc(93,Z,12,6,"div",20),e.qZA()()(),e.TgZ(94,"div",21)(95,"button",22),e.NdJ("click",function(){return t.saveTransport()}),e._uU(96),e.ALo(97,"translate"),e.qZA()()()()),2&i&&(e.xp6(3),e.Oqu(e.lcZ(4,33,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442")),e.xp6(4),e.hij(" ",e.lcZ(8,35,"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")," "),e.xp6(8),e.Oqu(e.lcZ(16,37,"\u0422\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),e.xp6(2),e.s9C("placeholder",e.lcZ(18,39,"\u0422\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),e.Q6J("value",t.returnNameTypeTransport(t.type)),e.xp6(5),e.Oqu(e.lcZ(23,41,"\u041c\u0430\u0440\u043a\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),e.xp6(2),e.s9C("placeholder",e.lcZ(25,43,"\u041c\u0430\u0440\u043a\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),e.Q6J("ngModel",t.name),e.xp6(5),e.Oqu(e.lcZ(30,45,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435")),e.xp6(2),e.s9C("placeholder",e.lcZ(32,47,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435")),e.Q6J("ngModel",t.description),e.xp6(5),e.Oqu(e.lcZ(37,49,"\u0413\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0435\u043c\u043d\u043e\u0441\u0442\u044c")),e.xp6(2),e.s9C("placeholder",e.lcZ(39,51,"\u0413\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0435\u043c\u043d\u043e\u0441\u0442\u044c")),e.Q6J("ngModel",t.maxweight),e.xp6(5),e.Oqu(e.lcZ(44,53,"\u041a\u0443\u0431\u0430\u0442\u0443\u0440\u0430 \u043f\u0440\u0438\u0446\u0435\u043f\u0430")),e.xp6(2),e.s9C("placeholder",e.lcZ(46,55,"\u041a\u0443\u0431\u0430\u0442\u0443\u0440\u0430 \u043f\u0440\u0438\u0446\u0435\u043f\u0430")),e.Q6J("value",t.cubature+" m3"),e.xp6(5),e.Oqu(e.lcZ(51,57,"\u0413\u043e\u0441. \u043d\u043e\u043c\u0435\u0440 \u0422\u044f\u0433\u0430\u0447\u0430")),e.xp6(2),e.Q6J("ngModel",t.state_number),e.xp6(6),e.Q6J("checked",t.adr),e.xp6(2),e.hij(" ",e.lcZ(61,59,"\u0415\u0441\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0443 \u043e\u043f\u0430\u0441\u043d\u044b\u0445 \u0433\u0440\u0443\u0437\u043e\u0432")," "),e.xp6(4),e.Oqu(e.lcZ(65,61,"\u0422\u0435\u0445 \u043f\u0430\u0441\u043f\u043e\u0440\u0442")),e.xp6(3),e.Q6J("ngForOf",t.tech_passport_files),e.xp6(8),e.hij("",e.lcZ(76,63,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")," "),e.xp6(3),e.hij(" ",e.lcZ(79,65,"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442"),""),e.xp6(4),e.Oqu(e.lcZ(83,67,"\u041b\u0438\u0446\u0435\u043d\u0437\u0438\u0438 \u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0443 \u0433\u0440\u0443\u0437\u043e\u0432")),e.xp6(3),e.Q6J("ngForOf",t.license_files),e.xp6(1),e.Q6J("ngIf",t.license_files.length<3),e.xp6(3),e.Oqu(e.lcZ(90,69,"\u0424\u043e\u0442\u043e \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),e.xp6(3),e.Q6J("ngForOf",t.car_photos),e.xp6(1),e.Q6J("ngIf",t.car_photos.length<4),e.xp6(2),e.Q6J("disabled",t.loadingAddTransport),e.xp6(1),e.Oqu(e.lcZ(97,71,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))},dependencies:[h.sg,h.O5,p.Fj,p.JJ,p.On,o.YG,o.Sm,o.W2,o.Gu,o.gu,o.wd,o.sr,g.X$],styles:[".file-group[_ngcontent-%COMP%]{max-width:112px!important;min-width:112px!important;min-height:85px!important;max-height:85px!important;width:112px!important;height:85px!important}.file-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{max-width:112px;min-width:112px;min-height:85px;max-height:85px;width:112px;height:85px;margin-right:10px}.file-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px;max-width:112px;min-width:112px;min-height:85px;max-height:85px;object-fit:cover;width:112px;height:85px}"]}),n})()}}]);