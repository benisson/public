(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2kKm":function(t,e,n){"use strict";n.r(e);var i=n("fXoL"),o=n("ofXK"),s=n("F5nt"),a=n("AytR"),c=n("tk/3");const r=(()=>{class t{constructor(t,e,n){this.document=t,this.appService=e,this.httpClient=n}loadApp(t){this.configAppCurrent=null,t&&this.findConfigApp(t.pathApp).subscribe(e=>{this.configAppCurrent=e,this.loadScriptsShared(),this.loadScripts(e.tagName,t.pathApp,e.scripts)})}loadTag(t){if(console.log("tag >> "+t),t){const t=this.appService.idContainer;console.log("idContainer >> "+t);const e=this.document.getElementById(t);console.log("container >> ",e)}}loadScripts(t,e,n){if(n&&n.length&&!this.document.getElementById("id"+t)){const i=this.document.createElement("span");for(const o of n){i.id="id"+t;const n=this.document.createElement("script");n.src=a.a.serverStatic+e+"/"+o,i.appendChild(n)}this.document.getElementsByTagName("head")[0].appendChild(i)}}loadScriptsShared(){if(!this.document.getElementById("idSharedScript")){const t=this.document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js";const e=this.document.createElement("span");e.id="idSharedScript",e.appendChild(t),this.document.getElementsByTagName("head")[0].appendChild(e)}}findConfigApp(t){return this.httpClient.get(a.a.serverStatic+t+"/config-app.json")}addlistener(){this.document.getElementsByTagName("app-seguros")[0].addEventListener("emitTypeSeguro",t=>{console.log(t)})}unloadApp(){const t=this.document.getElementsByTagName(this.configAppCurrent.tagName);t&&t.length&&t[0].remove()}}return t.ngInjectableDef=i.Ib({token:t,factory:function(e){return new(e||t)(i.dc(o.c),i.dc(s.a),i.dc(c.a))},providedIn:null}),t})();var p=n("tyNb"),d=n("jhN1");const l=[3,"innerHTML"],h=(()=>{class t{constructor(t,e,n,i){this.appService=t,this.loadAppService=e,this.router=n,this.sanitizer=i}ngOnInit(){this.tagApp=null,this.sanitizerTag(this.appService.menuItemSelected),this.loadAppService.loadApp(this.appService.menuItemSelected),this.listenerGoHome()}sanitizerTag(t){t&&t.tag&&(this.tagApp=this.sanitizer.bypassSecurityTrustHtml(t.tag))}listenerGoHome(){APP_EVENT_BUS.subscribe("go-home",t=>{console.log("go home >>>>>"),this.loadAppService.unloadApp(),this.router.navigate(["/home"])})}}return t.ngComponentDef=i.Gb({type:t,selectors:[["app-load-app"]],factory:function(e){return new(e||t)(i.Mb(s.a),i.Mb(r),i.Mb(p.a),i.Mb(d.b))},consts:1,vars:1,template:function(t,e){1&t&&i.Nb(0,"span",l),2&t&&(i.uc(0),i.oc("innerHTML",e.tagApp,i.sc))},encapsulation:2}),t})();n.d(e,"LoadAppModule",function(){return u});const u=(()=>{class t{}return t.ngModuleDef=i.Kb({type:t}),t.ngInjectorDef=i.Jb({factory:function(e){return new(e||t)},providers:[r],imports:[[o.b,p.c.forChild([{path:"",component:h}])]]}),t})();p.c.forChild([{path:"",component:h}])}}]);