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
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("ea3c7415a33b1366");
var ErrorOverlay = require("5127a92dabfe8e6");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"ea3c7415a33b1366":"786KC","5127a92dabfe8e6":"1dldy"}],"hRnQI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "35631fff3f2e41a3";
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

},{}],"19tXb":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$06db = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$06db.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _aboutSaladPng = require("../assets/Images/about_salad.png");
var _aboutSaladPngDefault = parcelHelpers.interopDefault(_aboutSaladPng);
var _aboutPizzaPng = require("../assets/Images/about_pizza.png");
var _aboutPizzaPngDefault = parcelHelpers.interopDefault(_aboutPizzaPng);
var _aboutBurgerPng = require("../assets/Images/about_burger.png");
var _aboutBurgerPngDefault = parcelHelpers.interopDefault(_aboutBurgerPng);
var _aboutVeganPng = require("../assets/Images/about_vegan.png");
var _aboutVeganPngDefault = parcelHelpers.interopDefault(_aboutVeganPng);
var _aboutStrawberryPng = require("../assets/Images/about_strawberry.png");
var _aboutStrawberryPngDefault = parcelHelpers.interopDefault(_aboutStrawberryPng);
var _aboutWatermelonPng = require("../assets/Images/about_watermelon.png");
var _aboutWatermelonPngDefault = parcelHelpers.interopDefault(_aboutWatermelonPng);
var _aboutChickenPng = require("../assets/Images/about_chicken.png");
var _aboutChickenPngDefault = parcelHelpers.interopDefault(_aboutChickenPng);
var _aboutKoreanPng = require("../assets/Images/about_korean.png");
var _aboutKoreanPngDefault = parcelHelpers.interopDefault(_aboutKoreanPng);
var _aboutRamenPng = require("../assets/Images/about_ramen.png");
var _aboutRamenPngDefault = parcelHelpers.interopDefault(_aboutRamenPng);
var _aboutVegNoodlesPng = require("../assets/Images/about_vegNoodles.png");
var _aboutVegNoodlesPngDefault = parcelHelpers.interopDefault(_aboutVegNoodlesPng);
var _aboutBobaPng = require("../assets/Images/about_boba.png");
var _aboutBobaPngDefault = parcelHelpers.interopDefault(_aboutBobaPng);
var _aboutDrinkPng = require("../assets/Images/about_drink.png");
var _aboutDrinkPngDefault = parcelHelpers.interopDefault(_aboutDrinkPng);
class About extends (0, _react.Component) {
    render() {
        return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex flex-col justify-around items-center gap-6 w-11/12 h-full mx-auto",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "flex flex-col justify-center items-center",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                    className: "text-2xl md:text-4xl lg:text-6xl font-bold md:font-extrabold text-center py-4",
                                    children: [
                                        "Discover the best food & ",
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 20,
                                            columnNumber: 40
                                        }, this),
                                        "drinks in nearest Restaurant"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/About.js",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "text-md md:text-2xl tracking-wide font-semibold p-6 text-center",
                                    children: [
                                        "The quality of our food and service is consistently top-notch,",
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 24,
                                            columnNumber: 15
                                        }, this),
                                        " and we always aim to leave our guests feeling satisfied and happy."
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/About.js",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                    target: "_blank",
                                    href: "https://github.com/VijayaKumarchinta",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        class: "middle none center rounded-lg bg-orange-500 py-2 md:py-4 px-6 md:px-10 font-sans text-md sm:text-xl font-semibold sm:font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none m-4",
                                        "data-ripple-light": "true",
                                        children: [
                                            "Know More About Us",
                                            " ",
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                className: "fa-solid fa-user pl-2",
                                                style: {
                                                    color: "#ffffff"
                                                }
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/Components/About.js",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/Components/About.js",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/About.js",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4 w-11/12",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "grid gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutBurgerPngDefault.default),
                                                alt: "Burger"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutVeganPngDefault.default),
                                                alt: "Vegan"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutBobaPngDefault.default),
                                                alt: "Boba Drink"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/About.js",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "grid gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutPizzaPngDefault.default),
                                                alt: "Pizza"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutVegNoodlesPngDefault.default),
                                                alt: "Noodles"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutDrinkPngDefault.default),
                                                alt: "Drink"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/About.js",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "grid gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutStrawberryPngDefault.default),
                                                alt: "Strawberry Drink"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutRamenPngDefault.default),
                                                alt: "Ramen"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutSaladPngDefault.default),
                                                alt: "Salad"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/About.js",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "grid gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutChickenPngDefault.default),
                                                alt: "Chicken"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutKoreanPngDefault.default),
                                                alt: "Korean"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                className: "h-auto max-w-full rounded-lg",
                                                src: (0, _aboutWatermelonPngDefault.default),
                                                alt: "Watermelon Drink"
                                            }, void 0, false, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/About.js",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/About.js",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/About.js",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    class: "min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            class: "w-full max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    class: "text-center max-w-xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                            class: "text-6xl md:text-7xl font-bold mb-5 text-gray-600",
                                            children: [
                                                "What people are",
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/Components/About.js",
                                                    lineNumber: 91,
                                                    columnNumber: 34
                                                }, this),
                                                " saying about us"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                            class: "text-xl mb-5 font-light",
                                            children: '"Feeding Souls, Nourishing Hearts: Hungry Heart\'s Culinary Art!"'
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            class: "text-center mb-10",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    class: "inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"
                                                }, void 0, false, {
                                                    fileName: "src/Components/About.js",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    class: "inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"
                                                }, void 0, false, {
                                                    fileName: "src/Components/About.js",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    class: "inline-block w-40 h-1 rounded-full bg-indigo-500"
                                                }, void 0, false, {
                                                    fileName: "src/Components/About.js",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    class: "inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"
                                                }, void 0, false, {
                                                    fileName: "src/Components/About.js",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    class: "inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"
                                                }, void 0, false, {
                                                    fileName: "src/Components/About.js",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/About.js",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    class: "-mx-3 md:flex items-start",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            class: "px-3 md:w-1/3",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    class: "w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 hover:shadow-zinc-100 hover:shadow-md hover:bg-lime-200 transition ease-in-out delay-50 hover:scale-105 duration-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            class: "w-full flex mb-4 items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    class: "overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200",
                                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                                        src: "C:\\Users\\DELL\\OneDrive\\Pictures\\WhatsApp Image 2024-03-08 at 17.29.57_03ee012d.jpg",
                                                                        alt: ""
                                                                    }, void 0, false, {
                                                                        fileName: "src/Components/About.js",
                                                                        lineNumber: 110,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "src/Components/About.js",
                                                                    lineNumber: 109,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    class: "flex-grow pl-3",
                                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h6", {
                                                                        class: "font-bold text-sm uppercase text-gray-600",
                                                                        children: "Chinta vijay kumar"
                                                                    }, void 0, false, {
                                                                        fileName: "src/Components/About.js",
                                                                        lineNumber: 113,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "src/Components/About.js",
                                                                    lineNumber: 112,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/Components/About.js",
                                                            lineNumber: 108,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            class: "w-full",
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                class: "text-sm leading-tight",
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                        class: "text-lg leading-none italic font-bold text-gray-400 mr-1",
                                                                        children: '"'
                                                                    }, void 0, false, {
                                                                        fileName: "src/Components/About.js",
                                                                        lineNumber: 120,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "I am the frontend developer",
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                        class: "text-lg leading-none italic font-bold text-gray-400 ml-1",
                                                                        children: '"'
                                                                    }, void 0, false, {
                                                                        fileName: "src/Components/About.js",
                                                                        lineNumber: 124,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/Components/About.js",
                                                                lineNumber: 119,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "src/Components/About.js",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            class: "w-full",
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                class: "text-sm leading-tight"
                                                            }, void 0, false, {
                                                                fileName: "src/Components/About.js",
                                                                lineNumber: 130,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "src/Components/About.js",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/Components/About.js",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    class: "w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 hover:shadow-zinc-100 hover:shadow-md hover:bg-yellow-200 transition ease-in-out delay-50 hover:scale-105 duration-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            class: "w-full flex mb-4 items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    class: "overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                                                                }, void 0, false, {
                                                                    fileName: "src/Components/About.js",
                                                                    lineNumber: 137,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    class: "flex-grow pl-3",
                                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h6", {
                                                                        class: "font-bold text-sm uppercase text-gray-600",
                                                                        children: "Reddnam Nihar"
                                                                    }, void 0, false, {
                                                                        fileName: "src/Components/About.js",
                                                                        lineNumber: 141,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "src/Components/About.js",
                                                                    lineNumber: 140,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/Components/About.js",
                                                            lineNumber: 136,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            class: "w-full",
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                class: "text-sm leading-tight",
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                        class: "text-lg leading-none italic font-bold text-gray-400 mr-1",
                                                                        children: '"'
                                                                    }, void 0, false, {
                                                                        fileName: "src/Components/About.js",
                                                                        lineNumber: 148,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Team leader",
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                        class: "text-lg leading-none italic font-bold text-gray-400 ml-1",
                                                                        children: '"'
                                                                    }, void 0, false, {
                                                                        fileName: "src/Components/About.js",
                                                                        lineNumber: 152,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/Components/About.js",
                                                                lineNumber: 147,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "src/Components/About.js",
                                                            lineNumber: 146,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            class: "w-full",
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                                class: "text-sm leading-tight"
                                                            }, void 0, false, {
                                                                fileName: "src/Components/About.js",
                                                                lineNumber: 158,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "src/Components/About.js",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/Components/About.js",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            class: "px-3 md:w-1/3",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6 hover:shadow-zinc-100 hover:shadow-md hover:bg-purple-200 transition ease-in-out delay-50 hover:scale-105 duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        class: "w-full flex mb-4 items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                class: "overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                                                            }, void 0, false, {
                                                                fileName: "src/Components/About.js",
                                                                lineNumber: 167,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                class: "flex-grow pl-3",
                                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h6", {
                                                                    class: "font-bold text-sm uppercase text-gray-600",
                                                                    children: "Gurrapu Sudheer"
                                                                }, void 0, false, {
                                                                    fileName: "src/Components/About.js",
                                                                    lineNumber: 171,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "src/Components/About.js",
                                                                lineNumber: 170,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/Components/About.js",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        class: "w-full",
                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                            class: "text-sm leading-tight",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                    class: "text-lg leading-none italic font-bold text-gray-400 mr-1",
                                                                    children: '"'
                                                                }, void 0, false, {
                                                                    fileName: "src/Components/About.js",
                                                                    lineNumber: 178,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "I am backend developer",
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                    class: "text-lg leading-none italic font-bold text-gray-400 ml-1",
                                                                    children: '"'
                                                                }, void 0, false, {
                                                                    fileName: "src/Components/About.js",
                                                                    lineNumber: 182,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/Components/About.js",
                                                            lineNumber: 177,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "src/Components/About.js",
                                                        lineNumber: 176,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        class: "w-full",
                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                            class: "text-sm leading-tight"
                                                        }, void 0, false, {
                                                            fileName: "src/Components/About.js",
                                                            lineNumber: 188,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "src/Components/About.js",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/Components/About.js",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/Components/About.js",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/Components/About.js",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/About.js",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/About.js",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "src/Components/About.js",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/Components/About.js",
            lineNumber: 16,
            columnNumber: 12
        }, this);
    }
}
exports.default = About;

  $parcel$ReactRefreshHelpers$06db.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","../assets/Images/about_salad.png":"4EtNh","../assets/Images/about_pizza.png":"cp1FO","../assets/Images/about_burger.png":"4Ofye","../assets/Images/about_vegan.png":"h73Co","../assets/Images/about_strawberry.png":"bnQwS","../assets/Images/about_watermelon.png":"40yKT","../assets/Images/about_chicken.png":"84J2D","../assets/Images/about_korean.png":"4hSuc","../assets/Images/about_ramen.png":"2i1um","../assets/Images/about_vegNoodles.png":"2PH7L","../assets/Images/about_boba.png":"6HEXG","../assets/Images/about_drink.png":"dwSIU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"4EtNh":[function(require,module,exports) {
module.exports = require("82ad39e4381adac4").getBundleURL("4Ab5u") + "about_salad.a7dc2d13.png" + "?" + Date.now();

},{"82ad39e4381adac4":"lgJ39"}],"cp1FO":[function(require,module,exports) {
module.exports = require("2aff293a54ac2e57").getBundleURL("4Ab5u") + "about_pizza.5d0d9653.png" + "?" + Date.now();

},{"2aff293a54ac2e57":"lgJ39"}],"4Ofye":[function(require,module,exports) {
module.exports = require("3951302812ccc365").getBundleURL("4Ab5u") + "about_burger.b6ff55d7.png" + "?" + Date.now();

},{"3951302812ccc365":"lgJ39"}],"h73Co":[function(require,module,exports) {
module.exports = require("790eceda15a0e28c").getBundleURL("4Ab5u") + "about_vegan.5e241bc0.png" + "?" + Date.now();

},{"790eceda15a0e28c":"lgJ39"}],"bnQwS":[function(require,module,exports) {
module.exports = require("a5f9ae8de5bce7dd").getBundleURL("4Ab5u") + "about_strawberry.cac04ccb.png" + "?" + Date.now();

},{"a5f9ae8de5bce7dd":"lgJ39"}],"40yKT":[function(require,module,exports) {
module.exports = require("bc85d227f29be69f").getBundleURL("4Ab5u") + "about_watermelon.f6e357df.png" + "?" + Date.now();

},{"bc85d227f29be69f":"lgJ39"}],"84J2D":[function(require,module,exports) {
module.exports = require("1a7688cbf08062ba").getBundleURL("4Ab5u") + "about_chicken.3a0ab4cd.png" + "?" + Date.now();

},{"1a7688cbf08062ba":"lgJ39"}],"4hSuc":[function(require,module,exports) {
module.exports = require("a642eca88412989c").getBundleURL("4Ab5u") + "about_korean.cd25323d.png" + "?" + Date.now();

},{"a642eca88412989c":"lgJ39"}],"2i1um":[function(require,module,exports) {
module.exports = require("81157eca2c7f459f").getBundleURL("4Ab5u") + "about_ramen.b5ccfb83.png" + "?" + Date.now();

},{"81157eca2c7f459f":"lgJ39"}],"2PH7L":[function(require,module,exports) {
module.exports = require("8ea72ff78ebe2729").getBundleURL("4Ab5u") + "about_vegNoodles.8912461c.png" + "?" + Date.now();

},{"8ea72ff78ebe2729":"lgJ39"}],"6HEXG":[function(require,module,exports) {
module.exports = require("e72d9b91935a1d54").getBundleURL("4Ab5u") + "about_boba.f226a037.png" + "?" + Date.now();

},{"e72d9b91935a1d54":"lgJ39"}],"dwSIU":[function(require,module,exports) {
module.exports = require("51ef5b061ab478b0").getBundleURL("4Ab5u") + "about_drink.5848ad6f.png" + "?" + Date.now();

},{"51ef5b061ab478b0":"lgJ39"}]},["1xC6H","hRnQI"], null, "parcelRequire06cd")

//# sourceMappingURL=About.3f2e41a3.js.map
