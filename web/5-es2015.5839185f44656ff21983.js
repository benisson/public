(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2kKm":function(e,t,n){"use strict";n.r(t);var o=n("fXoL"),i=n("ofXK"),s=n("F5nt"),c=n("AytR"),a=n("tk/3");const p=(()=>{class e{constructor(e,t,n){this.document=e,this.appService=t,this.httpClient=n}loadApp(e){e&&this.findConfigApp(e.pathApp).subscribe(t=>{this.configAppCurrent=t,this.loadTag(e.tag,t.tagName),this.loadScriptsShared(),this.loadScripts(t.tagName,e.pathApp,t.scripts)})}loadTag(e,t){if(console.log("tag >> "+e),e){const e=this.appService.idContainer;console.log("idContainer >> "+e);const n=this.document.getElementById(e);console.log("container >> ",n);const o=this.document.createElement(t);n.appendChild(o)}}loadScripts(e,t,n){if(n&&n.length&&!this.document.getElementById("id"+e)){const o=this.document.createElement("span");for(const i of n){o.id="id"+e;const n=this.document.createElement("script");n.src=c.a.serverStatic+t+"/"+i,o.appendChild(n)}this.document.getElementsByTagName("head")[0].appendChild(o)}}loadScriptsShared(){if(!this.document.getElementById("idSharedScript")){const e=this.document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js";const t=this.document.createElement("span");t.id="idSharedScript",t.appendChild(e),this.document.getElementsByTagName("head")[0].appendChild(t)}}findConfigApp(e){return this.httpClient.get(c.a.serverStatic+e+"/config-app.json")}addlistener(){this.document.getElementsByTagName("app-seguros")[0].addEventListener("emitTypeSeguro",e=>{console.log(e)})}unloadApp(){const e=this.document.getElementsByTagName(this.configAppCurrent.tagName);e&&e.length&&e[0].remove()}}return e.ngInjectableDef=o.Ib({token:e,factory:function(t){return new(t||e)(o.dc(i.c),o.dc(s.a),o.dc(a.a))},providedIn:null}),e})();var r=n("tyNb");const d=[3,"id"],l=(()=>{class e{constructor(e,t,n){this.appService=e,this.loadAppService=t,this.router=n}ngOnInit(){this.loadAppService.loadApp(this.appService.menuItemSelected),this.listenerGoHome()}listenerGoHome(){APP_EVENT_BUS.subscribe("go-home",e=>{console.log("go home >>>>>"),this.loadAppService.unloadApp(),this.router.navigate(["/home"])})}}return e.ngComponentDef=o.Gb({type:e,selectors:[["app-load-app"]],factory:function(t){return new(t||e)(o.Mb(s.a),o.Mb(p),o.Mb(r.a))},consts:1,vars:1,template:function(e,t){1&e&&o.Nb(0,"div",d),2&e&&(o.tc(0),o.pc("id",t.appService.idContainer))},encapsulation:2}),e})();n.d(t,"LoadAppModule",function(){return h});const h=(()=>{class e{}return e.ngModuleDef=o.Kb({type:e}),e.ngInjectorDef=o.Jb({factory:function(t){return new(t||e)},providers:[p],imports:[[i.b,r.c.forChild([{path:"",component:l}])]]}),e})();r.c.forChild([{path:"",component:l}])}}]);