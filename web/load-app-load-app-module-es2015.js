(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["load-app-load-app-module"],{

/***/ "./src/app/load-app/load-app.component.ts":
/*!************************************************!*\
  !*** ./src/app/load-app/load-app.component.ts ***!
  \************************************************/
/*! exports provided: LoadAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAppComponent", function() { return LoadAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _shared_load_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/load-app.service */ "./src/app/load-app/shared/load-app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = [3, "id"];
class LoadAppComponent {
    constructor(appService, loadAppService, router) {
        this.appService = appService;
        this.loadAppService = loadAppService;
        this.router = router;
    }
    ngOnInit() {
        this.loadAppService.loadApp(this.appService.menuItemSelected);
        this.listenerGoHome();
    }
    listenerGoHome() {
        APP_EVENT_BUS.subscribe("go-home", go => {
            console.log("go home >>>>>");
            this.loadAppService.unloadApp();
            this.router.navigate(['/home']);
        });
    }
}
LoadAppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadAppComponent, selectors: [["app-load-app"]], factory: function LoadAppComponent_Factory(t) { return new (t || LoadAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_load_app_service__WEBPACK_IMPORTED_MODULE_2__["LoadAppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); }, consts: 1, vars: 1, template: function LoadAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", _c0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.appService.idContainer);
    } }, encapsulation: 2 });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadAppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-load-app',
                templateUrl: './load-app.component.html'
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _shared_load_app_service__WEBPACK_IMPORTED_MODULE_2__["LoadAppService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null);


/***/ }),

/***/ "./src/app/load-app/load-app.module.ts":
/*!*********************************************!*\
  !*** ./src/app/load-app/load-app.module.ts ***!
  \*********************************************/
/*! exports provided: LoadAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAppModule", function() { return LoadAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _load_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-app.component */ "./src/app/load-app/load-app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_load_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/load-app.service */ "./src/app/load-app/shared/load-app.service.ts");







class LoadAppModule {
}
LoadAppModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoadAppModule });
LoadAppModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoadAppModule_Factory(t) { return new (t || LoadAppModule)(); }, providers: [_shared_load_app_service__WEBPACK_IMPORTED_MODULE_4__["LoadAppService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _load_app_component__WEBPACK_IMPORTED_MODULE_2__["LoadAppComponent"]
                }
            ])
        ]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadAppModule, { declarations: [_load_app_component__WEBPACK_IMPORTED_MODULE_2__["LoadAppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadAppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _load_app_component__WEBPACK_IMPORTED_MODULE_2__["LoadAppComponent"]
                        }
                    ])
                ],
                declarations: [_load_app_component__WEBPACK_IMPORTED_MODULE_2__["LoadAppComponent"]],
                providers: [_shared_load_app_service__WEBPACK_IMPORTED_MODULE_4__["LoadAppService"]]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/load-app/shared/load-app.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/load-app/shared/load-app.service.ts ***!
  \*****************************************************/
/*! exports provided: LoadAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAppService", function() { return LoadAppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class LoadAppService {
    constructor(document, appService, httpClient) {
        this.document = document;
        this.appService = appService;
        this.httpClient = httpClient;
    }
    /**
     * Inclui a nova app a ser rederizada na pagina.
     *
     * @param itemMenu
     */
    loadApp(itemMenu) {
        if (itemMenu) {
            this.findConfigApp(itemMenu.pathApp)
                .subscribe(configApp => {
                this.configAppCurrent = configApp;
                this.loadTag(itemMenu.tag);
                this.loadScriptsShared();
                this.loadScripts(configApp.tagName, itemMenu.pathApp, configApp.scripts);
            });
        }
    }
    /**
     * Inclui a tag do custom element da funcionalidade dentro da div container da
     * página.
     *
     * @param tag
     */
    loadTag(tag) {
        if (tag) {
            const idContainer = this.appService.idContainer;
            const container = this.document.getElementById(idContainer);
            container.innerHTML = tag;
        }
    }
    /**
     * Verifica se a tag que envolve os scripts já esta no DOM,
     * caso não esteja cria uma tag span e inclui as tags scripts
     * e adiciona ao header da pagina.
     *
     * @param scripts
     */
    loadScripts(tagName, pathApp, scripts) {
        if (scripts && scripts.length) {
            const idSpanContainerScript = "id" + tagName;
            const spanContainerLoaderd = this.document.getElementById(idSpanContainerScript);
            if (!spanContainerLoaderd) {
                const spanContainerScript = this.document.createElement("span");
                for (const script of scripts) {
                    spanContainerScript.id = "id" + tagName;
                    const elementScript = this.document.createElement("script");
                    elementScript.src = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverStatic + pathApp + "/" + script;
                    //elementScript.src =  script;
                    spanContainerScript.appendChild(elementScript);
                }
                /**
                 * TODO - INCLUIR NO HEAD NÃO É LEGAL, COLOCAR NO BODY
                 */
                const header = this.document.getElementsByTagName("head")[0];
                header.appendChild(spanContainerScript);
            }
        }
    }
    loadScriptsShared() {
        const idSpanSharedScript = "idSharedScript";
        const spanContainerLoaderd = this.document.getElementById(idSpanSharedScript);
        if (!spanContainerLoaderd) {
            const elementScript = this.document.createElement("script");
            elementScript.src = "https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js";
            const spanSharedScript = this.document.createElement("span");
            spanSharedScript.id = idSpanSharedScript;
            spanSharedScript.appendChild(elementScript);
            const header = this.document.getElementsByTagName("head")[0];
            header.appendChild(spanSharedScript);
        }
    }
    /**
     * Busca as configurações da app a ser carregada.
     *
     *
     * @param pathApp
     */
    findConfigApp(pathApp) {
        //return this.httpClient.get("/config-app.json");
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverStatic + pathApp + "/config-app.json");
    }
    addlistener() {
        const appSeguros = this.document.getElementsByTagName("app-seguros")[0];
        appSeguros.addEventListener('emitTypeSeguro', event => {
            console.log(event);
        });
    }
    unloadApp() {
        const elementApp = this.document.getElementsByTagName(this.configAppCurrent.tagName);
        if (elementApp && elementApp.length) {
            elementApp[0].remove();
        }
    }
}
LoadAppService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoadAppService, factory: function LoadAppService_Factory(t) { return new (t || LoadAppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); }, providedIn: null });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadAppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null);


/***/ })

}]);
//# sourceMappingURL=load-app-load-app-module-es2015.js.map