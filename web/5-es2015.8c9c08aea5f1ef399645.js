(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2kKm":function(e,t,n){"use strict";n.r(t);var o=n("fXoL"),i=n("ofXK"),c=n("F5nt"),s=n("AytR"),r=n("tk/3");const p=(()=>{class e{constructor(e,t,n){this.document=e,this.appService=t,this.httpClient=n}loadApp(e){this.configAppCurrent=null,e&&this.findConfigApp(e.pathApp).subscribe(t=>{this.configAppCurrent=t,this.loadScriptsShared(),this.loadScripts(t.tagName,e.pathApp,t.scripts)})}loadTag(e){if(console.log("tag >> "+e),e){const t=this.appService.idContainer;console.log("idContainer >> "+t);const n=this.document.getElementById(t);console.log("container >> ",n),n.innerHTML=e}}loadScripts(e,t,n){if(n&&n.length&&!this.document.getElementById("id"+e)){const o=this.document.createElement("span");for(const i of n){o.id="id"+e;const n=this.document.createElement("script");n.src=s.a.serverStatic+t+"/"+i,o.appendChild(n)}this.document.getElementsByTagName("head")[0].appendChild(o)}}loadScriptsShared(){if(!this.document.getElementById("idSharedScript")){const e=this.document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js";const t=this.document.createElement("span");t.id="idSharedScript",t.appendChild(e),this.document.getElementsByTagName("head")[0].appendChild(t)}}findConfigApp(e){return this.httpClient.get(s.a.serverStatic+e+"/config-app.json")}addlistener(){this.document.getElementsByTagName("app-seguros")[0].addEventListener("emitTypeSeguro",e=>{console.log(e)})}unloadApp(){const e=this.document.getElementsByTagName(this.configAppCurrent.tagName);e&&e.length&&e[0].remove()}}return e.ngInjectableDef=o.Ib({token:e,factory:function(t){return new(t||e)(o.dc(i.c),o.dc(c.a),o.dc(r.a))},providedIn:null}),e})();var a=n("tyNb");const d=[3,"id","innerHTML"],l=(()=>{class e{constructor(e,t,n){this.appService=e,this.loadAppService=t,this.router=n}ngOnInit(){this.loadAppService.loadApp(this.appService.menuItemSelected),this.listenerGoHome()}listenerGoHome(){APP_EVENT_BUS.subscribe("go-home",e=>{console.log("go home >>>>>"),this.loadAppService.unloadApp(),this.router.navigate(["/home"])})}}return e.ngComponentDef=o.Gb({type:e,selectors:[["app-load-app"]],factory:function(t){return new(t||e)(o.Mb(c.a),o.Mb(p),o.Mb(a.a))},consts:1,vars:2,template:function(e,t){1&e&&o.Nb(0,"div",d),2&e&&(o.uc(0),o.pc("id",t.appService.idContainer),o.oc("innerHTML",null==t.appService?null:null==t.appService.menuItemSelected?null:t.appService.menuItemSelected.tag,o.sc))},encapsulation:2}),e})();n.d(t,"LoadAppModule",function(){return h});const h=(()=>{class e{}return e.ngModuleDef=o.Kb({type:e}),e.ngInjectorDef=o.Jb({factory:function(t){return new(t||e)},providers:[p],imports:[[i.b,a.c.forChild([{path:"",component:l}])]]}),e})();a.c.forChild([{path:"",component:l}])}}]);