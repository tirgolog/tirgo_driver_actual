"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[771],{771:(C,_,l)=>{l.d(_,{S:()=>Z});var r=l(7582),c=l(7053),u=l(5e3),o=l(8058),g=l(9808),p=l(3075),m=l(8995);function f(a,d){if(1&a){const e=u.EpF();u.TgZ(0,"div",23),u.NdJ("click",function(){const i=u.CHM(e).$implicit,n=u.oxw();return u.KtG(n.delFileTechTransport(i.preview))}),u.TgZ(1,"div",24),u._UZ(2,"ion-icon",25),u.qZA(),u.TgZ(3,"div",26),u._UZ(4,"img",27),u.qZA()()}if(2&a){const e=d.$implicit,t=u.oxw();u.xp6(4),u.Q6J("src",t.file_url+e.filename,u.LSH)}}function v(a,d){if(1&a){const e=u.EpF();u.TgZ(0,"div",23),u.NdJ("click",function(){const i=u.CHM(e).index,n=u.oxw();return u.KtG(n.delFileLicense(i))}),u.TgZ(1,"div",24),u._UZ(2,"ion-icon",25),u.qZA(),u.TgZ(3,"div",26),u._UZ(4,"img",27),u.qZA()()}if(2&a){const e=d.$implicit,t=u.oxw();u.xp6(4),u.Q6J("src",t.file_url+e.filename,u.LSH)}}function E(a,d){if(1&a){const e=u.EpF();u.TgZ(0,"div",23),u.NdJ("click",function(){const i=u.CHM(e).index,n=u.oxw();return u.KtG(n.delFileCarPhoto(i))}),u.TgZ(1,"div",24),u._UZ(2,"ion-icon",25),u.qZA(),u.TgZ(3,"div",26),u._UZ(4,"img",27),u.qZA()()}if(2&a){const e=d.$implicit,t=u.oxw();u.xp6(4),u.Q6J("src",t.file_url+e.filename,u.LSH)}}let Z=(()=>{class a{constructor(e,t,s,i){this.modalController=e,this.loadingCtrl=t,this.authService=s,this.alertController=i,this.file_url="https://admin.tirgo.io/file/",this.type=0,this.maxweight=0,this.name="",this.description="",this.typetransport=[],this.files=[],this.tech_passport_files=[],this.license_files=[],this.car_photos=[],this.loadingAddTransport=!1,this.adr=!1,this.cubature="",this.state_number=""}ngOnInit(){this.type=this.item.type,this.name=this.item.name,this.description=this.item.description,this.maxweight=this.item.max_weight,this.adr=this.item.adr,this.cubature=this.item.cubature,this.state_number=this.item.state_number,this.typetransport=this.authService.typetruck.map(e=>({label:e.name,type:"radio",value:e.id}));for(let e of this.item.docks)"car_photos"===e.type_file?this.car_photos.push(e):"license_files"===e.type_file?this.license_files.push(e):"tech_passport_files"===e.type_file&&this.tech_passport_files.push(e)}close(){return(0,r.mG)(this,void 0,void 0,function*(){yield this.modalController.dismiss({accepted:!0})})}returnNameTypeTransport(e){const t=this.authService.typetruck.findIndex(s=>+s.id==+e);return t>=0?this.authService.typetruck[t].name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}returnMaxWeightTransport(e){const t=this.authService.typetruck.findIndex(s=>+s.id==+e);return t>=0?this.authService.typetruck[t].weight:0}selectTypeTransport(){return(0,r.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430",cssClass:"customAlert",inputs:this.typetransport,buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",handler:t=>(0,r.mG)(this,void 0,void 0,function*(){this.type=t,this.maxweight=this.returnMaxWeightTransport(t)})}]})).present()})}saveTransport(){return(0,r.mG)(this,void 0,void 0,function*(){this.loadingAddTransport=!0,yield this.authService.editTransport(this.name,this.description,this.maxweight,this.type,this.adr,this.item.id,this.car_photos,this.license_files,this.tech_passport_files,this.cubature,this.state_number).toPromise().then(e=>(0,r.mG)(this,void 0,void 0,function*(){e.status?(this.loadingAddTransport=!1,this.authService.mytruck=yield this.authService.getTruck().toPromise(),this.authService.myorders=yield this.authService.getMyOrders().toPromise(),yield this.close(),yield this.authService.alert("\u041e\u0442\u043b\u0438\u0447\u043d\u043e","\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d")):(this.loadingAddTransport=!1,yield this.authService.alert("\u041e\u0448\u0438\u0431\u043a\u0430",e.error))})).catch(e=>(0,r.mG)(this,void 0,void 0,function*(){this.loadingAddTransport=!1,console.log(e)}))})}addFiles(){}addFilesTechPassport(){return(0,r.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadingCtrl.create({message:"\u041e\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0444\u043e\u0442\u043e",cssClass:"custom-loading"}),yield this.authService.camera.getPicture(this.authService.optionsCamera).then(e=>(0,r.mG)(this,void 0,void 0,function*(){this.loading.present();const t=yield this.authService.transfer.create(),i={headers:{Authorization:"Bearer "+c.$.jwt},fileKey:"file",mimeType:"image/*",chunkedMode:!1,fileName:e.substr(e.lastIndexOf("/")+1),params:{typeUser:"driver",typeImage:"car-docks"}},n=JSON.parse((yield t.upload(e,this.authService.API_URL+"/users/uploadImage",i)).response);n.status&&(this.tech_passport_files.push(n.file),this.tech_passport_files.forEach(h=>{h.reviewUrl=this.file_url+h.name}),this.loading.dismiss())}))})}delFileTechTransport(e){return(0,r.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e",message:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.",cssClass:"customAlert",buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",role:"destructive",handler:s=>(0,r.mG)(this,void 0,void 0,function*(){const i=this.tech_passport_files.findIndex(n=>n.preview===e);i>=0&&this.tech_passport_files.splice(i,1)})}]})).present()})}addFilesLicense(){return(0,r.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadingCtrl.create({message:"\u041e\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0444\u043e\u0442\u043e",cssClass:"custom-loading"}),yield this.authService.camera.getPicture(this.authService.optionsCamera).then(e=>(0,r.mG)(this,void 0,void 0,function*(){this.loading.present();const t=yield this.authService.transfer.create(),i={headers:{Authorization:"Bearer "+c.$.jwt},fileKey:"file",mimeType:"image/*",chunkedMode:!1,fileName:e.substr(e.lastIndexOf("/")+1),params:{typeUser:"driver",typeImage:"car-docks"}},n=JSON.parse((yield t.upload(e,this.authService.API_URL+"/users/uploadImage",i)).response);n.status&&(this.license_files.push(n.file),this.loading.dismiss())}))})}delFileLicense(e){return(0,r.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e",message:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.",cssClass:"customAlert",buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",role:"destructive",handler:s=>(0,r.mG)(this,void 0,void 0,function*(){this.license_files.splice(e,1)})}]})).present()})}addFilesCarPhoto(){return(0,r.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadingCtrl.create({message:"\u041e\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0444\u043e\u0442\u043e",cssClass:"custom-loading"}),yield this.authService.camera.getPicture(this.authService.optionsCamera).then(e=>(0,r.mG)(this,void 0,void 0,function*(){this.loading.present();const t=yield this.authService.transfer.create(),i={headers:{Authorization:"Bearer "+c.$.jwt},fileKey:"file",mimeType:"image/*",chunkedMode:!1,fileName:e.substr(e.lastIndexOf("/")+1),params:{typeUser:"driver",typeImage:"car-docks"}},n=JSON.parse((yield t.upload(e,this.authService.API_URL+"/users/uploadImage",i)).response);n.status&&(this.car_photos.push(n.file),this.loading.dismiss())}))})}delFileCarPhoto(e){return(0,r.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e",message:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.",cssClass:"customAlert",buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",role:"destructive",handler:s=>(0,r.mG)(this,void 0,void 0,function*(){this.car_photos.splice(e,1)})}]})).present()})}setAdrUser(e){return(0,r.mG)(this,void 0,void 0,function*(){this.adr=e.target.checked})}}return a.\u0275fac=function(e){return new(e||a)(u.Y36(o.IN),u.Y36(o.HT),u.Y36(c.$),u.Y36(o.Br))},a.\u0275cmp=u.Xpm({type:a,selectors:[["app-edittransport"]],inputs:{item:"item"},decls:110,vars:71,consts:[[1,"my-custom-header"],["slot","end"],[3,"click"],[1,"wrapper-fluid","ion-padding-tabs"],[1,"body-wrap","form-block"],[1,"autorize"],["readonly","","type","text","name","name","placeholder","\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0442\u0438\u043f \u043f\u0440\u0438\u0446\u0435\u043f\u0430",3,"value","click"],["type","text","name","name","readonly","","placeholder","\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430",3,"ngModel","click","ngModelChange"],["rows","5","type","text","name","name","placeholder","\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430",3,"ngModel","ngModelChange"],["type","text","name","name","readonly","","placeholder","\u0413\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0435\u043c\u043d\u043e\u0441\u0442\u044c",3,"ngModel","click","ngModelChange"],["type","text","name","name","placeholder","\u041a\u0443\u0431\u0430\u0442\u0443\u0440\u0430 \u043f\u0440\u0438\u0446\u0435\u043f\u0430",3,"ngModel","ngModelChange"],["type","text","name","name","readonly","","placeholder","\u0413\u043e\u0441. \u043d\u043e\u043c\u0435\u0440 \u0422\u044f\u0433\u0430\u0447\u0430",3,"ngModel","click","ngModelChange"],[1,"data-checkbox"],["type","checkbox",1,"checkbox",3,"checked","change"],[1,"fake-checkbox"],[1,"file-uploads"],["class","file-group",3,"click",4,"ngFor","ngForOf"],[1,"file-group"],[1,"form-group",3,"click"],[1,"label"],[1,"title"],[1,"bottom-wrap","personal-bottom"],[1,"reg-btn",3,"disabled","click"],[1,"file-group",3,"click"],[1,"del-button"],["name","trash-bin-outline"],[1,"form-group"],["alt","",3,"src"]],template:function(e,t){1&e&&(u.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),u._uU(3),u.ALo(4,"translate"),u.qZA(),u.TgZ(5,"ion-buttons",1)(6,"ion-button",2),u.NdJ("click",function(){return t.close()}),u._uU(7),u.ALo(8,"translate"),u.qZA()()()(),u.TgZ(9,"ion-content")(10,"div",3)(11,"div",4)(12,"div",5)(13,"p")(14,"b"),u._uU(15),u.ALo(16,"translate"),u.qZA()(),u.TgZ(17,"input",6),u.NdJ("click",function(){return t.authService.alert("\u041e\u0448\u0438\u0431\u043a\u0430","\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0438\u043f \u043f\u0440\u0438\u0446\u0435\u043f\u0430 \u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442")}),u.qZA(),u.TgZ(18,"p")(19,"b"),u._uU(20),u.ALo(21,"translate"),u.qZA()(),u.TgZ(22,"input",7),u.NdJ("click",function(){return t.authService.alert("\u041e\u0448\u0438\u0431\u043a\u0430","\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u044f \u043f\u0440\u0438\u0446\u0435\u043f\u0430 \u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442")})("ngModelChange",function(i){return t.name=i}),u.qZA(),u.TgZ(23,"p")(24,"b"),u._uU(25),u.ALo(26,"translate"),u.qZA()(),u.TgZ(27,"textarea",8),u.NdJ("ngModelChange",function(i){return t.description=i}),u.qZA(),u.TgZ(28,"p")(29,"b"),u._uU(30),u.ALo(31,"translate"),u.qZA()(),u.TgZ(32,"input",9),u.NdJ("click",function(){return t.authService.alert("\u041e\u0448\u0438\u0431\u043a\u0430","\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0433\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0435\u043c\u043d\u043e\u0441\u0442\u044c \u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442")})("ngModelChange",function(i){return t.maxweight=i}),u.qZA(),u.TgZ(33,"p")(34,"b"),u._uU(35),u.ALo(36,"translate"),u.qZA()(),u.TgZ(37,"input",10),u.NdJ("ngModelChange",function(i){return t.cubature=i}),u.qZA(),u.TgZ(38,"p")(39,"b"),u._uU(40),u.ALo(41,"translate"),u.qZA()(),u.TgZ(42,"input",11),u.NdJ("click",function(){return t.authService.alert("\u041e\u0448\u0438\u0431\u043a\u0430","\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0413\u043e\u0441. \u043d\u043e\u043c\u0435\u0440 \u0422\u044f\u0433\u0430\u0447\u0430 \u0432 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442")})("ngModelChange",function(i){return t.state_number=i}),u.qZA(),u.TgZ(43,"div",12)(44,"p"),u._uU(45),u.ALo(46,"translate"),u.qZA(),u.TgZ(47,"label")(48,"input",13),u.NdJ("change",function(i){return t.setAdrUser(i)}),u.qZA(),u._UZ(49,"span",14),u._uU(50),u.ALo(51,"translate"),u.qZA()(),u.TgZ(52,"p")(53,"b"),u._uU(54),u.ALo(55,"translate"),u.qZA()(),u.TgZ(56,"div",15),u.YNc(57,f,5,1,"div",16),u.TgZ(58,"div",17)(59,"div",18),u.NdJ("click",function(){return t.addFilesTechPassport()}),u.TgZ(60,"label",19)(61,"span",20)(62,"span"),u._uU(63,"+"),u.qZA(),u._UZ(64,"br"),u._uU(65),u.ALo(66,"translate"),u._UZ(67,"br"),u._uU(68),u.ALo(69,"translate"),u.qZA()()()()(),u.TgZ(70,"p")(71,"b"),u._uU(72),u.ALo(73,"translate"),u.qZA()(),u.TgZ(74,"div",15),u.YNc(75,v,5,1,"div",16),u.TgZ(76,"div",17)(77,"div",18),u.NdJ("click",function(){return t.addFilesLicense()}),u.TgZ(78,"label",19)(79,"span",20)(80,"span"),u._uU(81,"+"),u.qZA(),u._UZ(82,"br"),u._uU(83),u.ALo(84,"translate"),u._UZ(85,"br"),u._uU(86),u.ALo(87,"translate"),u.qZA()()()()(),u.TgZ(88,"p")(89,"b"),u._uU(90),u.ALo(91,"translate"),u.qZA()(),u.TgZ(92,"div",15),u.YNc(93,E,5,1,"div",16),u.TgZ(94,"div",17)(95,"div",18),u.NdJ("click",function(){return t.addFilesCarPhoto()}),u.TgZ(96,"label",19)(97,"span",20)(98,"span"),u._uU(99,"+"),u.qZA(),u._UZ(100,"br"),u._uU(101),u.ALo(102,"translate"),u._UZ(103,"br"),u._uU(104),u.ALo(105,"translate"),u.qZA()()()()()()(),u.TgZ(106,"div",21)(107,"button",22),u.NdJ("click",function(){return t.saveTransport()}),u._uU(108),u.ALo(109,"translate"),u.qZA()()()()),2&e&&(u.xp6(3),u.Oqu(u.lcZ(4,31,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442")),u.xp6(4),u.hij(" ",u.lcZ(8,33,"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")," "),u.xp6(8),u.Oqu(u.lcZ(16,35,"\u0422\u0438\u043f \u043f\u0440\u0438\u0446\u0435\u043f\u0430")),u.xp6(2),u.Q6J("value",t.returnNameTypeTransport(t.type)),u.xp6(3),u.Oqu(u.lcZ(21,37,"\u0418\u043c\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),u.xp6(2),u.Q6J("ngModel",t.name),u.xp6(3),u.Oqu(u.lcZ(26,39,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435")),u.xp6(2),u.Q6J("ngModel",t.description),u.xp6(3),u.Oqu(u.lcZ(31,41,"\u0413\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0435\u043c\u043d\u043e\u0441\u0442\u044c")),u.xp6(2),u.Q6J("ngModel",t.maxweight),u.xp6(3),u.Oqu(u.lcZ(36,43,"\u041a\u0443\u0431\u0430\u0442\u0443\u0440\u0430 \u043f\u0440\u0438\u0446\u0435\u043f\u0430")),u.xp6(2),u.Q6J("ngModel",t.cubature),u.xp6(3),u.Oqu(u.lcZ(41,45,"\u0413\u043e\u0441. \u043d\u043e\u043c\u0435\u0440 \u0422\u044f\u0433\u0430\u0447\u0430")),u.xp6(2),u.Q6J("ngModel",t.state_number),u.xp6(3),u.Oqu(u.lcZ(46,47,"ADR")),u.xp6(3),u.Q6J("checked",t.adr),u.xp6(2),u.hij(" ",u.lcZ(51,49,"\u0415\u0441\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0443 \u043e\u043f\u0430\u0441\u043d\u044b\u0445 \u0433\u0440\u0443\u0437\u043e\u0432")," "),u.xp6(4),u.Oqu(u.lcZ(55,51,"\u0422\u0435\u0445 \u043f\u0430\u0441\u043f\u043e\u0440\u0442")),u.xp6(3),u.Q6J("ngForOf",t.tech_passport_files),u.xp6(8),u.hij("",u.lcZ(66,53,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")," "),u.xp6(3),u.hij(" ",u.lcZ(69,55,"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442"),""),u.xp6(4),u.Oqu(u.lcZ(73,57,"\u041b\u0438\u0446\u0435\u043d\u0437\u0438\u0438 \u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0443 \u0433\u0440\u0443\u0437\u043e\u0432")),u.xp6(3),u.Q6J("ngForOf",t.license_files),u.xp6(8),u.hij("",u.lcZ(84,59,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")," "),u.xp6(3),u.hij(" ",u.lcZ(87,61,"\u043b\u0438\u0446\u0435\u043d\u0437\u0438\u044e"),""),u.xp6(4),u.Oqu(u.lcZ(91,63,"\u0424\u043e\u0442\u043e \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),u.xp6(3),u.Q6J("ngForOf",t.car_photos),u.xp6(8),u.hij("",u.lcZ(102,65,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")," "),u.xp6(3),u.hij(" ",u.lcZ(105,67,"\u0444\u043e\u0442\u043e"),""),u.xp6(3),u.Q6J("disabled",t.loadingAddTransport),u.xp6(1),u.Oqu(u.lcZ(109,69,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))},dependencies:[g.sg,p.Fj,p.JJ,p.On,o.YG,o.Sm,o.W2,o.Gu,o.gu,o.wd,o.sr,m.X$],styles:[".file-group[_ngcontent-%COMP%]{max-width:112px!important;min-width:112px!important;min-height:85px!important;max-height:85px!important;width:112px!important;height:85px!important}.file-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{max-width:112px;min-width:112px;min-height:85px;max-height:85px;width:112px;height:85px;margin-right:10px}.file-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px;max-width:112px;min-width:112px;min-height:85px;max-height:85px;object-fit:cover;width:112px;height:85px}"]}),a})()}}]);