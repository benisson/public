(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2kKm":function(e,t,n){"use strict";n.r(t);var o=n("TYT/"),i=n("Valr"),r=n("F5nt"),p=n("mrSG"),a=n("AytR"),c=n("cUzu"),d=function(){function e(e,t,n){this.document=e,this.appService=t,this.httpClient=n}return e.prototype.loadApp=function(e){var t=this;this.configAppCurrent=null,e&&this.findConfigApp(e.pathApp).subscribe(function(n){t.configAppCurrent=n,t.loadScriptsShared(),t.loadScripts(n.tagName,e.pathApp,n.scripts)})},e.prototype.loadTag=function(e){if(console.log("tag >> "+e),e){var t=this.appService.idContainer;console.log("idContainer >> "+t);var n=this.document.getElementById(t);console.log("container >> ",n),n.innerHTML=e}},e.prototype.loadScripts=function(e,t,n){var o,i;if(n&&n.length&&!this.document.getElementById("id"+e)){var r=this.document.createElement("span");try{for(var c=p.h(n),d=c.next();!d.done;d=c.next()){var s=d.value;r.id="id"+e;var l=this.document.createElement("script");l.src=a.a.serverStatic+t+"/"+s,r.appendChild(l)}}catch(u){o={error:u}}finally{try{d&&!d.done&&(i=c.return)&&i.call(c)}finally{if(o)throw o.error}}this.document.getElementsByTagName("head")[0].appendChild(r)}},e.prototype.loadScriptsShared=function(){if(!this.document.getElementById("idSharedScript")){var e=this.document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js";var t=this.document.createElement("span");t.id="idSharedScript",t.appendChild(e),this.document.getElementsByTagName("head")[0].appendChild(t)}},e.prototype.findConfigApp=function(e){return this.httpClient.get(a.a.serverStatic+e+"/config-app.json")},e.prototype.addlistener=function(){this.document.getElementsByTagName("app-seguros")[0].addEventListener("emitTypeSeguro",function(e){console.log(e)})},e.prototype.unloadApp=function(){var e=this.document.getElementsByTagName(this.configAppCurrent.tagName);e&&e.length&&e[0].remove()},e.ngInjectableDef=o.Ib({token:e,factory:function(t){return new(t||e)(o.dc(i.c),o.dc(r.a),o.dc(c.a))},providedIn:null}),e}(),s=n("DUip"),l=[3,"id","innerHTML"],u=function(){function e(e,t,n){this.appService=e,this.loadAppService=t,this.router=n}return e.prototype.ngOnInit=function(){this.loadAppService.loadApp(this.appService.menuItemSelected),this.listenerGoHome()},e.prototype.listenerGoHome=function(){var e=this;APP_EVENT_BUS.subscribe("go-home",function(t){console.log("go home >>>>>"),e.loadAppService.unloadApp(),e.router.navigate(["/home"])})},e.ngComponentDef=o.Gb({type:e,selectors:[["app-load-app"]],factory:function(t){return new(t||e)(o.Mb(r.a),o.Mb(d),o.Mb(s.a))},consts:1,vars:2,template:function(e,t){1&e&&o.Nb(0,"div",l),2&e&&(o.uc(0),o.pc("id",t.appService.idContainer),o.oc("innerHTML",null==t.appService?null:null==t.appService.menuItemSelected?null:t.appService.menuItemSelected.tag,o.sc))},encapsulation:2}),e}();n.d(t,"LoadAppModule",function(){return h});var h=function(){function e(){}return e.ngModuleDef=o.Kb({type:e}),e.ngInjectorDef=o.Jb({factory:function(t){return new(t||e)},providers:[d],imports:[[i.b,s.c.forChild([{path:"",component:u}])]]}),e}();s.c.forChild([{path:"",component:u}])}}]);