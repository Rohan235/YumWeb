// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iJoNp":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c058b1e8f923b3e2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2fJC1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _esRegexpFlagsJs = require("core-js/modules/es.regexp.flags.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _modelJs = require("./model.js");
var _runtime = require("regenerator-runtime/runtime");
var _listViewJs = require("./views/listView.js");
var _listViewJsDefault = parcelHelpers.interopDefault(_listViewJs);
var _formViewJs = require("./views/formView.js");
var _formViewJsDefault = parcelHelpers.interopDefault(_formViewJs);
var _themeViewJs = require("./views/themeView.js");
var _themeViewJsDefault = parcelHelpers.interopDefault(_themeViewJs);
const controlDownload = function() {
    if (!_modelJs.state.ingredientsList[0]) return;
    const opt = {
        margin: 5,
        filename: "shoppingList.pdf",
        image: {
            type: "jpeg",
            quality: 0.98
        },
        html2canvas: {
            scale: 1
        }
    };
    html2pdf().set(opt).from((0, _listViewJsDefault.default).listToDownload.children[1]).save();
};
const controlList = function() {
    if (!_modelJs.state.ingredientsList[1]) return;
    (0, _listViewJsDefault.default).render(_modelJs.state.ingredientsList);
};
const controlClearList = function(view) {
    // if (!model.state.ingredientsList[1]) return;
    _modelJs.clearIngredients();
    if (view === "listView") (0, _listViewJsDefault.default).renderMessageInsideList();
    if (view === "formView") (0, _formViewJsDefault.default).clearForm();
};
const controlResetList = function() {
    // if (!model.state.ingredientsList[1]) return;
    _modelJs.clearIngredients();
    (0, _formViewJsDefault.default).clearForm();
    (0, _listViewJsDefault.default).render(_modelJs.state.ingredientsList);
    (0, _listViewJsDefault.default).renderMessageInsideList();
};
const controlCheckItem = function(ingredient) {
    // console.log(ingredient);
    _modelJs.removeIngredient(ingredient);
    if (!_modelJs.state.ingredientsList[1]) {
        (0, _listViewJsDefault.default).renderMessageInsideList();
        return;
    }
    (0, _listViewJsDefault.default).render(_modelJs.state.ingredientsList);
};
const controlEditList = function() {
    if (!_modelJs.state.ingredientsList[1]) {
        (0, _formViewJsDefault.default).render([
            "",
            ""
        ]);
        return;
    }
    (0, _formViewJsDefault.default).render(_modelJs.state.ingredientsList);
};
const controlRemoveItem = function(item) {
    (0, _formViewJsDefault.default).removeListItem(item);
};
const controlAddItem = function() {
    (0, _formViewJsDefault.default).addListItem();
};
const controlSubmitForm = function(formData) {
    // console.log(formData);
    _modelJs.submitListData(formData);
    if (!_modelJs.state.ingredientsList[1]) {
        (0, _listViewJsDefault.default).renderMessageInsideList();
        return;
    }
    (0, _listViewJsDefault.default).render(_modelJs.state.ingredientsList);
};
const controlTheme = function(actualTheme) {
    let newTheme = "light";
    if (actualTheme === "light") newTheme = "dark";
    _modelJs.changeTheme(newTheme);
    (0, _themeViewJsDefault.default).setTheme(newTheme);
};
const initTheme = function() {
    (0, _themeViewJsDefault.default).setTheme(_modelJs.state.theme);
};
const init = function() {
    (0, _listViewJsDefault.default).addHandlerRenderList(controlList);
    (0, _listViewJsDefault.default).addHandlerCheck(controlCheckItem);
    (0, _listViewJsDefault.default).addHandlerDownload(controlDownload);
    (0, _listViewJsDefault.default).addHandlerEditList(controlEditList);
    (0, _listViewJsDefault.default).addHandlerClear(controlClearList);
    (0, _listViewJsDefault.default).addHandlerReset(controlResetList);
    (0, _formViewJsDefault.default).addHandlerClear(controlClearList);
    (0, _formViewJsDefault.default).addHandlerAddItem(controlAddItem);
    (0, _formViewJsDefault.default).addHandlerRemoveItem(controlRemoveItem);
    (0, _formViewJsDefault.default).addHandlerSubmit(controlSubmitForm);
    (0, _formViewJsDefault.default).addHandlerDragover();
    (0, _formViewJsDefault.default).addHandlerDragstart();
    (0, _formViewJsDefault.default).addHandlerDragend();
    (0, _formViewJsDefault.default).addHandlerOnFocus();
    (0, _formViewJsDefault.default).addHandlerOnBlur();
    (0, _themeViewJsDefault.default).addHandlerChangeTheme(controlTheme);
    initTheme();
};
init();

},{"core-js/modules/es.regexp.flags.js":"gSXXb","core-js/modules/web.immediate.js":"49tUX","./model.js":"Y4A21","regenerator-runtime/runtime":"dXNgZ","./views/listView.js":"4PaTK","./views/formView.js":"aTsny","./views/themeView.js":"ezN7Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4PaTK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ListView extends (0, _viewJsDefault.default) {
    // _parentElement = document.querySelector('.list__shopping-list');
    _parentElement = document.querySelector(".list__list-container");
    _message = "Choose a recipe and start adding some ingredients to your shopping list or click 'Edit' to add your own items!";
    _buttonClear = document.querySelector(".list__btn-delete");
    _buttonDownload = document.querySelector(".list__btn-download");
    _buttonEdit = document.querySelector(".list__btn-edit");
    _buttonNav = document.querySelector(".page-options__btn--reset");
    listToDownload = document.getElementById("list");
    addHandlerRenderList(handler) {
        window.addEventListener("load", handler);
        this.renderMessageInsideList();
    }
    addHandlerReset(handler) {
        this._buttonNav.addEventListener("click", function() {
            handler();
        });
    }
    addHandlerCheck(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--check");
            if (!btn) return;
            const ingredient = e.target.closest(".list__item").querySelector(".list__ing").innerText;
            handler(ingredient);
        });
    }
    addHandlerClear(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".list__btn-delete");
            if (!btn) return;
            handler("listView");
        });
    }
    addHandlerDownload(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".list__btn-download");
            if (!btn) return;
            handler();
        });
    }
    addHandlerEditList(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".list__btn-edit");
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return ` 
    <h3 class="list__title"><span>${this._data[0]}</span></h3>
    
    <ul class="list__shopping-list">
    ${this._data.slice(1).map(this._generateMarkupItem).join("")}
    </ul>

    <div class="list__options">
                <button class="btn--list list__btn-edit">
                  <svg class="list__icon">
                    <use href="${0, _iconsSvgDefault.default}#icon-edit-pencil"></use>
                  </svg>
                </button>
                <button class="btn--list list__btn-delete">
                  <svg class="list__icon">
                    <use href="${0, _iconsSvgDefault.default}#icon-bin"></use>
                  </svg>
                </button>
                <button class="btn--list list__btn-download">
                  <svg class="list__icon">
                    <use href="${0, _iconsSvgDefault.default}#icon-download"></use>
                  </svg>
                </button>
              </div>
    `;
    }
    _generateMarkupItem(item) {
        return `
    <li class="list__item">
    <div class="list__ing">${item}</div>
    <div class="list__item-buttons">
      <button class="btn--tiny btn--check">
        <svg>
          <title>Check</title>
          <use href="${0, _iconsSvgDefault.default}#icon-checkmark"></use>
        </svg>
      </button>
    </div>
  </li>
    `;
    }
    renderMessageInsideList(message = this._message) {
        const markup = `
    <h3 class="list__title"><span>MY SHOPPING LIST</span></h3>

    <ul class="list__shopping-list" id="list">
      <div class="message">
        <div>
          <svg>
            <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
           </svg>
        </div>
        <p>${message}</p>
      </div>
    </ul>

    <div class="list__options">
      <button class="btn--list list__btn-edit">
        <svg class="list__icon">
          <use href="${(0, _iconsSvgDefault.default)}#icon-edit-pencil"></use>
        </svg>
      </button>
      <button class="btn--list list__btn-delete">
        <svg class="list__icon">
          <use href="${(0, _iconsSvgDefault.default)}#icon-bin"></use>
        </svg>
      </button>
      <button class="btn--list list__btn-download">
        <svg class="list__icon">
          <use href="${(0, _iconsSvgDefault.default)}#icon-download"></use>
        </svg>
      </button>
    </div>
      `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = new ListView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"767HJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"767HJ":[function(require,module,exports) {
module.exports = require("cda9e7189abe1de1").getBundleURL("gvR3n") + "../icons.dfd7a6db.svg" + "?" + Date.now();

},{"cda9e7189abe1de1":"lgJ39"}],"aTsny":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class FormView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".list__list-container");
    // Form handlers
    addHandlerSubmit(handler) {
        this._parentElement.addEventListener("click", function(e) {
            e.preventDefault();
            const btn = e.target.closest(".list__btn-submit");
            if (!btn) return;
            const formData = [
                ...new FormData(this.querySelector("form"))
            ];
            handler(formData);
        });
    }
    addHandlerAddItem(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".list__btn-add");
            if (!btn) return;
            handler();
        });
    }
    addHandlerClear(handler) {
        this._parentElement.parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".list__btn-clear-form");
            if (!btn) return;
            handler("formView");
        });
    }
    addHandlerRemoveItem(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn--discard");
            if (!btn) return;
            const item = e.target.closest(".list__item");
            handler(item);
        });
    }
    // Event delegation for clearing the dragging on input focus
    addHandlerOnFocus() {
        this._parentElement.addEventListener("onfocusin", function(e) {
            const input = e.target.closest(".form__input");
            if (!input) return;
            input.parentNode.setAttribute("draggable", false);
            console.log(input.parentNode);
        });
    }
    addHandlerOnBlur() {
        this._parentElement.addEventListener("onfocusout", function(e) {
            const input = e.target.closest(".form__input");
            if (!input) return;
            input.parentNode.setAttribute("draggable", true);
            console.log(input.parentNode);
        });
    }
    // Drag and drop events for list items
    addHandlerDragover() {
        this._parentElement.addEventListener("dragover", this._dragover.bind(this));
    }
    addHandlerDragstart() {
        this._parentElement.addEventListener("dragstart", function(e) {
            const draggable = e.target.closest(".list__item--draggable");
            if (!draggable) return;
            draggable.classList.add("list__item--draggable-dragging");
        });
    }
    addHandlerDragend() {
        this._parentElement.addEventListener("dragend", function(e) {
            const draggable = e.target.closest(".list__item--draggable");
            if (!draggable) return;
            draggable.classList.remove("list__item--draggable-dragging");
        });
    }
    //Drag and drop helpers
    _dragover(e) {
        e.preventDefault();
        const container = e.target.closest(".list__shopping-list");
        if (!container) return;
        const afterElement = this._getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".list__item--draggable-dragging");
        if (afterElement == null) container.appendChild(draggable);
        else container.insertBefore(draggable, afterElement);
    }
    _getDragAfterElement(container, y) {
        const draggableEls = [
            ...container.querySelectorAll(".list__item--draggable:not(.list__item--draggable-dragging)")
        ];
        return draggableEls.reduce((closest, child)=>{
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) return {
                offset: offset,
                element: child
            };
            else return closest;
        }, {
            offset: Number.NEGATIVE_INFINITY
        }).element;
    }
    // Form actions functions
    addListItem() {
        const markup = this._generateInputField();
        this._parentElement.querySelector(".list__shopping-list").insertAdjacentHTML("beforeend", markup);
    }
    removeListItem(item) {
        this._parentElement.querySelector(".list__shopping-list").removeChild(item);
    }
    clearForm() {
        let listToClear = this._parentElement.querySelector(".list__shopping-list");
        listToClear.innerHTML = "";
        this.addListItem();
    }
    //Functions for rendering
    _generateMarkup() {
        return `
    <form>
    <h3 class="list__title list__title--form"><span><input placeholder="My shopping list" class="form__title" name="title" value="${this._data[0]}"></input></span></h3>

    
    <ul class="list__shopping-list">
      ${this._data.slice(1).map((item)=>this._generateInputField(item)).join("")}
    </ul>
    </form>
    <div class="list__options form__buttons">
      <button class="btn--list list__btn-add">
        <svg class="list__icon list__icon--add">
          <use href="${0, _iconsSvgDefault.default}#icon-plus"></use>
        </svg>
      </button>
      <button class="btn--list list__btn-clear-form">
        <svg class="list__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-bin"></use>
        </svg>
      </button>
      <button class="btn--list list__btn-submit">
        <svg class="list__icon">
          <use href="${0, _iconsSvgDefault.default}#icon-checkmark"></use>
        </svg>
      </button>
    </div>
    `;
    }
    _generateInputField(item = "") {
        return `
    <li class="list__item list__item--draggable" draggable="true">
      <input class="list__ing form__input" placeholder="Your item here" name="item" value="${item}"></input>
      <div class="list__item-buttons">
        <button class="btn--tiny btn--discard">
         <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-minus"></use>
          </svg>
        </button>
      </div>
    </li>
    `;
    }
}
exports.default = new FormView();

},{"./View.js":"5cUXS","url:../../img/icons.svg":"767HJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iJoNp","2fJC1"], "2fJC1", "parcelRequire3a11")

//# sourceMappingURL=shoppingList.f923b3e2.js.map
