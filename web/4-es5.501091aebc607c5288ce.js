(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2kKm":function(t,e,n){"use strict";n.r(e);var o=n("TYT/"),i=n("Valr"),r=n("F5nt"),p=n("mrSG"),a=n("AytR"),c=n("cUzu"),s=function(){function t(t,e,n){this.document=t,this.appService=e,this.httpClient=n}return t.prototype.loadApp=function(t){var e=this;this.configAppCurrent=null,t&&this.findConfigApp(t.pathApp).subscribe(function(n){e.configAppCurrent=n,e.loadScriptsShared(),e.loadScripts(n.tagName,t.pathApp,n.scripts)})},t.prototype.loadTag=function(t){if(console.log("tag >> "+t),t){var e=this.appService.idContainer;console.log("idContainer >> "+e);var n=this.document.getElementById(e);console.log("container >> ",n)}},t.prototype.loadScripts=function(t,e,n){var o,i;if(n&&n.length&&!this.document.getElementById("id"+t)){var r=this.document.createElement("span");try{for(var c=p.h(n),s=c.next();!s.done;s=c.next()){var l=s.value;r.id="id"+t;var d=this.document.createElement("script");d.src=a.a.serverStatic+e+"/"+l,r.appendChild(d)}}catch(u){o={error:u}}finally{try{s&&!s.done&&(i=c.return)&&i.call(c)}finally{if(o)throw o.error}}this.document.getElementsByTagName("head")[0].appendChild(r)}},t.prototype.loadScriptsShared=function(){if(!this.document.getElementById("idSharedScript")){var t=this.document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js";var e=this.document.createElement("span");e.id="idSharedScript",e.appendChild(t),this.document.getElementsByTagName("head")[0].appendChild(e)}},t.prototype.findConfigApp=function(t){return this.httpClient.get(a.a.serverStatic+t+"/config-app.json")},t.prototype.addlistener=function(){this.document.getElementsByTagName("app-seguros")[0].addEventListener("emitTypeSeguro",function(t){console.log(t)})},t.prototype.unloadApp=function(){var t=this.document.getElementsByTagName(this.configAppCurrent.tagName);t&&t.length&&t[0].remove()},t.ngInjectableDef=o.Ib({token:t,factory:function(e){return new(e||t)(o.dc(i.c),o.dc(r.a),o.dc(c.a))},providedIn:null}),t}(),l=n("DUip"),d=n("E1rE"),u=function(){function t(t,e,n,o){this.appService=t,this.loadAppService=e,this.router=n,this.sanitizer=o}return t.prototype.ngAfterContentInit=function(){console.log(">> app-load-app > ngAfterContentInit"),this.sanitizerTag(this.appService.menuItemSelected),this.loadAppService.loadApp(this.appService.menuItemSelected),this.listenerGoHome()},t.prototype.sanitizerTag=function(t){console.log(">>> itemMenu",t),t&&t.tag&&(this.tagApp=this.sanitizer.bypassSecurityTrustHtml(t.tag),console.log(">>> tagApp 1",this.tagApp)),console.log(">>> tagApp 2",this.tagApp)},t.prototype.listenerGoHome=function(){var t=this;APP_EVENT_BUS.subscribe("go-home",function(e){console.log("go home >>>>>"),t.loadAppService.unloadApp(),t.router.navigate(["/home"])})},t.ngComponentDef=o.Gb({type:t,selectors:[["app-load-app"]],factory:function(e){return new(e||t)(o.Mb(r.a),o.Mb(s),o.Mb(l.a),o.Mb(d.b))},consts:0,vars:0,template:function(t,e){},encapsulation:2}),t}();n.d(e,"LoadAppModule",function(){return h});var h=function(){function t(){}return t.ngModuleDef=o.Kb({type:t}),t.ngInjectorDef=o.Jb({factory:function(e){return new(e||t)},providers:[s],imports:[[i.b,l.c.forChild([{path:"",component:u}])]]}),t}();l.c.forChild([{path:"",component:u}])}}]);