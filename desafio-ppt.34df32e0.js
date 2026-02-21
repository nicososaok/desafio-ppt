// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

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
    }
  }
})({"3dtlh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var _state = require("./state");
var _router = require("./router");
var _index = require("./components/hand/index");
var _index1 = require("./pages/welcome/index");
var _index2 = require("./pages/instructions/index");
var _index3 = require("./pages/play/index");
var _index4 = require("./pages/results/index");
(function() {
    const rootElement = document.querySelector("#root");
    (0, _state.state).init();
    if (rootElement) (0, _router.initRouter)(rootElement);
    else console.error("No se encontr\xf3 el elemento #root en el HTML. Revisa tu index.html.");
})();

},{"./state":"dWXvP","./router":"4wVP1","./components/hand/index":"3TNdh","./pages/welcome/index":"cIpmw","./pages/instructions/index":"4eg7C","./pages/play/index":"lIn7X","./pages/results/index":"5wNxj"}],"dWXvP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        currentGame: {
            computerPlay: "",
            myPlay: ""
        },
        history: []
    },
    listeners: [],
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
        localStorage.setItem("ppt-history", JSON.stringify(this.data.history));
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    init () {
        const localData = localStorage.getItem("ppt-history");
        if (localData) {
            const currentState = this.getState();
            currentState.history = JSON.parse(localData);
            this.data = currentState;
        }
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        this.data = currentState;
    },
    pushToHistory () {
        const currentState = this.getState();
        const miJugada = currentState.currentGame.myPlay;
        const options = [
            "piedra",
            "papel",
            "tijera"
        ];
        const computerMove = options[Math.floor(Math.random() * 3)];
        currentState.currentGame.computerPlay = computerMove;
        const resultado = this.whoWins(miJugada, computerMove);
        currentState.history.push({
            myPlay: miJugada,
            computerPlay: computerMove,
            winner: resultado
        });
        this.setState(currentState);
    },
    whoWins (myPlay, computerPlay) {
        if (myPlay === computerPlay) return "empate";
        const ganeConTijera = myPlay === "tijera" && computerPlay === "papel";
        const ganeConPiedra = myPlay === "piedra" && computerPlay === "tijera";
        const ganeConPapel = myPlay === "papel" && computerPlay === "piedra";
        return ganeConTijera || ganeConPiedra || ganeConPapel ? "yo" : "computadora";
    },
    getScore () {
        const currentState = this.getState();
        let misPuntos = 0;
        let puntosCompu = 0;
        currentState.history.forEach((partida)=>{
            if (partida.winner === "yo") misPuntos++;
            if (partida.winner === "computadora") puntosCompu++;
        });
        return {
            yo: misPuntos,
            computadora: puntosCompu
        };
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4wVP1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _play = require("./pages/play");
var _results = require("./pages/results");
const routes = [
    {
        path: /\/welcome/,
        component: (0, _welcome.initWelcome)
    },
    {
        path: /\/instructions/,
        component: (0, _instructions.initInstructions)
    },
    {
        path: /\/play/,
        component: (0, _play.initPlay)
    },
    {
        path: /\/results/,
        component: (0, _results.initResults)
    }
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        console.log("El router recibi\xf3 la ruta:", route);
        let matched = false;
        for (const r of routes)if (r.path.test(route)) {
            matched = true;
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
            break;
        }
        if (!matched) goTo("/welcome");
    }
    const isRoot = location.pathname === "/" || location.pathname === "/desafio-m5-ppt/";
    if (isRoot) goTo("/welcome");
    else handleRoute(location.pathname);
    window.addEventListener("popstate", ()=>{
        handleRoute(location.pathname);
    });
}

},{"./pages/welcome":"cIpmw","./pages/instructions":"4eg7C","./pages/play":"lIn7X","./pages/results":"5wNxj","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cIpmw":[function(require,module,exports,__globalThis) {
// src/pages/welcome/index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome);
var _piedraPapelTijeraGreenPng = require("url:../../assets/Piedra-papel-tijera-green.png");
class WelcomePage extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
      <main class="welcome-screen">
        <img src="${_piedraPapelTijeraGreenPng}" class="welcome-title-img" />

        <button class="start-button btn-principal">Empezar</button>

        <div class="welcome-hands">
          <my-jugada jugada="piedra"></my-jugada>
          <my-jugada jugada="papel"></my-jugada>
          <my-jugada jugada="tijera"></my-jugada>
        </div>
      </main>
    `;
        const style = document.createElement("style");
        style.textContent = `
      .welcome-screen {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-top: 60px;
        padding: 60px 0 0 0; /* Padding superior para el t\xedtulo */
        box-sizing: border-box;
      }
      .welcome-title-img {
        width: 284px;
        height: auto;
      }
      .start-button {
        width: 100%;
        max-width: 322px;
        height: 87px;
        /* El margen autom\xe1tico lo empuja al centro del espacio disponible */
        margin-top: 20px;
      }
      .welcome-hands {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 30px;
        width: 100%;
        overflow: hidden; /* Evita scroll si las manos son grandes */
        height: 234px; /* Altura fija para que la base sea igual siempre */
      }
      my-jugada {
        width: 80px;
      }
    `;
        this.appendChild(style);
        this.querySelector(".start-button")?.addEventListener("click", ()=>{
            this.goTo("/instructions");
        });
    }
}
customElements.define("welcome-page", WelcomePage);
function initWelcome(params) {
    const page = document.createElement("welcome-page");
    page.goTo = params.goTo;
    return page;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","url:../../assets/Piedra-papel-tijera-green.png":"7cdmz"}],"7cdmz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Piedra-papel-tijera-green.bde282c5.png") + "?" + Date.now();

},{}],"4eg7C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructions", ()=>initInstructions);
var _presion\u00e1JugarYEleg\u00edPiedraPapelOTijeraAntesDeQuePasenLos3SegundosINSTSvg = require("url:../../assets/Presion\xe1 jugar y eleg\xed piedra, papel o tijera antes de que pasen los 3 segundos INST..svg"); // Revisa si es .svg o .svc en tu carpeta
class InstructionsPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
      <section class="instructions-screen">
        <div class="instructions-image-container">
          <img src="${_presion\u00e1JugarYEleg\u00edPiedraPapelOTijeraAntesDeQuePasenLos3SegundosINSTSvg}" class="instructions-img" alt="Instrucciones">
        </div>

        <button class="start-game-btn btn-principal">\xa1Jugar!</button>

        <div class="instructions-hands">
          <my-jugada jugada="piedra"></my-jugada>
          <my-jugada jugada="papel"></my-jugada>
          <my-jugada jugada="tijera"></my-jugada>
        </div>
      </section>
    `;
        const style = document.createElement("style");
        style.textContent = `
      .instructions-screen {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 60px 0 0 0;
        box-sizing: border-box;
      }
      .instructions-image-container {
        width: 320px; /* Tama\xf1o similar al t\xedtulo de la home */
        height: auto;
      }
      .instructions-img {
        width: 100%;
        height: auto;
      }
      .start-game-btn {
        width: 322px;
        height: 87px;
        margin-top: 20px;
      }
      .instructions-hands {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 30px;
        width: 100%;
        height: 234px;
      }
      my-jugada {
        width: 80px;
      }
    `;
        this.appendChild(style);
        this.querySelector(".start-game-btn")?.addEventListener("click", ()=>{
            this.goTo("/play");
        });
    }
}
customElements.define("instructions-page", InstructionsPage);
function initInstructions(params) {
    const page = document.createElement("instructions-page");
    page.goTo = params.goTo;
    return page;
}

},{"url:../../assets/Presioná jugar y elegí piedra, papel o tijera antes de que pasen los 3 segundos INST..svg":"gHcEk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gHcEk":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Presion\xe1 jugar y eleg\xed piedra, papel o tijera antes de que pasen los 3 segundos INST..c8d31fbc.svg") + "?" + Date.now();

},{}],"lIn7X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPlay", ()=>initPlay);
var _state = require("../../state");
class PlayPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
      <section class="play-container">
        <div class="countdown-wrapper">
          <svg class="timer-svg" viewBox="0 0 100 100">
            <circle class="timer-circle-bg" cx="50" cy="50" r="45"></circle>
            <circle class="timer-circle-path" cx="50" cy="50" r="45"></circle>
          </svg>
          <div class="number">3</div>
        </div>

        <div class="play__hands">
          <my-jugada class="hand-btn" jugada="piedra"></my-jugada>
          <my-jugada class="hand-btn" jugada="papel"></my-jugada>
          <my-jugada class="hand-btn" jugada="tijera"></my-jugada>
        </div>
      </section>
    `;
        const style = document.createElement("style");
        style.textContent = `
      .play-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-top: 350px;
      }
      .countdown-wrapper {
        position: relative;
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .timer-svg {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
      }
      .timer-circle-bg {
        fill: none;
        stroke: rgba(0, 0, 0, 0.1);
        stroke-width: 8;
      }
      .timer-circle-path {
        fill: none;
        stroke: #000;
        stroke-width: 8;
        stroke-linecap: round;
        stroke-dasharray: 283;
        stroke-dashoffset: 0;
        animation: countdown-animation 3s linear forwards;
      }
      @keyframes countdown-animation {
      from { stroke-dashoffset: 0;
      } to { stroke-dashoffset: 283; } }
      .number {
        font-size: 80px;
        font-weight: bold;
      }
      .play__hands {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 30px;
        width: 100%;
        height: 234px;
      }

      /* Clases para la animaci\xf3n del duelo */
      .showdown-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center; overflow: hidden;
      }
      .pc-hand {
        transform: rotate(180deg);
        animation: slideDown 0.5s ease-out;
      }
      .my-hand {
      animation: slideUp 0.5s ease-out;
      }
      @keyframes slideDown {
        from { transform: translateY(-100px) rotate(180deg);
      } to { transform: translateY(0) rotate(180deg); } }
      @keyframes slideUp { from { transform: translateY(100px); } to { transform: translateY(0); } }
    `;
        this.appendChild(style);
        this.startCountdown();
    }
    startCountdown() {
        const numberEl = this.querySelector(".number");
        let counter = 3;
        this.querySelectorAll(".hand-btn").forEach((hand)=>{
            hand.addEventListener("click", ()=>{
                const move = hand.getAttribute("jugada");
                (0, _state.state).setMove(move); // Guarda tu jugada en el state
                this.querySelectorAll(".hand-btn").forEach((h)=>{
                    if (h !== hand) h.style.filter = "grayscale(1) opacity(0.4)";
                    else {
                        h.style.filter = "none";
                        h.style.transform = "translateY(-30px)";
                    }
                });
            });
        });
        const intervalId = setInterval(()=>{
            counter--;
            if (numberEl) numberEl.textContent = counter.toString();
            if (counter <= 0) {
                clearInterval(intervalId);
                const currentState = (0, _state.state).getState();
                const myPlay = currentState.currentGame.myPlay;
                if (!myPlay) this.goTo("/instructions");
                else {
                    if (!currentState.currentGame.computerPlay) {
                        const moves = [
                            "piedra",
                            "papel",
                            "tijera"
                        ];
                        const randomMove = moves[Math.floor(Math.random() * 3)];
                        currentState.currentGame.computerPlay = randomMove;
                        (0, _state.state).setState(currentState);
                    }
                    this.showConfrontation(myPlay, (0, _state.state).getState().currentGame.computerPlay);
                }
            }
        }, 1000);
    }
    showConfrontation(myPlay, pcPlay) {
        this.innerHTML = `
      <section class="duel-screen">
        <my-jugada class="hand-pc" jugada="${pcPlay}"></my-jugada>
        <my-jugada class="hand-user" jugada="${myPlay}"></my-jugada>
      </section>
    `;
        const style = document.createElement("style");
        style.textContent = `
      .duel-screen {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Empuja una mano a cada extremo */
        align-items: center;
        overflow: hidden;
      }
      .hand-pc {
        transform: rotate(180deg); /* La mano de la m\xe1quina viene de arriba */
        width: 150px;
      }
      .hand-user {
        width: 150px;
      }
      /* Forzamos el tama\xf1o del componente interno */
      my-jugada {
        display: block;
        width: 150px;
        height: 300px;
      }
    `;
        this.appendChild(style);
        setTimeout(()=>{
            this.goTo("/results");
        }, 2500);
    }
}
customElements.define("play-page", PlayPage);
function initPlay(params) {
    const page = document.createElement("play-page");
    page.goTo = params.goTo;
    return page;
}

},{"../../state":"dWXvP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5wNxj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResults", ()=>initResults);
var _state = require("../../state");
var _rectangleVerdeSvg = require("url:../../assets/Rectangle-verde.svg");
var _rectangleRojoSvg = require("url:../../assets/Rectangle-rojo.svg");
var _starGreenSvg = require("url:../../assets/star-green.svg");
var _starRedSvg = require("url:../../assets/star-red.svg");
var _ganasteSvg = require("url:../../assets/ganaste.svg");
var _perdisteSvg = require("url:../../assets/perdiste.svg");
class ResultsPage extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const lastGame = (0, _state.state).getState().currentGame;
        const result = (0, _state.state).whoWins(lastGame.myPlay, lastGame.computerPlay);
        const score = (0, _state.state).getScore();
        const isWin = result === "yo";
        const bgImg = isWin ? _rectangleVerdeSvg : _rectangleRojoSvg;
        const starImg = isWin ? _starGreenSvg : _starRedSvg;
        const textImg = isWin ? _ganasteSvg : _perdisteSvg;
        this.innerHTML = `
      <section class="results-screen">
        <div class="result-container">
          <img class="star-base" src="${starImg}" />
          <img class="result-text-img" src="${textImg}" />
        </div>

        <div class="score-board">
          <h2 class="score-title">Score</h2>
          <div class="score-info">
            <p>Vos: ${score.yo}</p>
            <p>M\xe1quina: ${score.computadora}</p>
          </div>
        </div>

        <button class="return-btn btn-principal">Volver a Jugar</button>
      </section>
    `;
        const style = document.createElement("style");
        style.textContent = `
      .results-screen {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-image: url("${bgImg}");
        background-size: cover;
        background-position: center;
        position: fixed; /* Asegura que tape el fondo anterior completamente */
        top: 0;
        left: 0;
      }

      .result-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 260px;
        height: 260px;
      }

      .star-base { width: 100%; height: auto; }

      .result-text-img {
        position: absolute;
        width: 60%;
        top: 50%;
        transform: translateY(-50%);
      }

      .score-board {
        background: #FFFFFF;
        border: 10px solid #000000;
        border-radius: 10px;
        width: 260px;
        padding: 20px;
        box-sizing: border-box;
      }

      .score-title { margin: 0 0 10px 0; font-size: 55px; text-align: center; }
      .score-info { font-size: 45px; text-align: right; }
      .score-info p { margin: 5px 0; }

      .return-btn { width: 322px; height: 87px; }
    `;
        this.appendChild(style);
        this.querySelector(".return-btn")?.addEventListener("click", ()=>{
            this.goTo("/instructions");
        });
    }
}
customElements.define("results-page", ResultsPage);
function initResults(params) {
    const page = document.createElement("results-page");
    page.goTo = params.goTo;
    return page;
}

},{"../../state":"dWXvP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","url:../../assets/Rectangle-verde.svg":"55m9a","url:../../assets/Rectangle-rojo.svg":"3Ws23","url:../../assets/star-green.svg":"ejccu","url:../../assets/star-red.svg":"c7H3Z","url:../../assets/ganaste.svg":"3l49d","url:../../assets/perdiste.svg":"7Fo4k"}],"55m9a":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Rectangle-verde.f1d8c47e.svg") + "?" + Date.now();

},{}],"3Ws23":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Rectangle-rojo.dff36d3e.svg") + "?" + Date.now();

},{}],"ejccu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("star-green.868c4499.svg") + "?" + Date.now();

},{}],"c7H3Z":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("star-red.5fb256ad.svg") + "?" + Date.now();

},{}],"3l49d":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("ganaste.70ae653f.svg") + "?" + Date.now();

},{}],"7Fo4k":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("perdiste.e3416780.svg") + "?" + Date.now();

},{}],"3TNdh":[function(require,module,exports,__globalThis) {
var _manoPiedraSvg = require("url:../../assets/mano-piedra.svg");
var _manoPapelSvg = require("url:../../assets/mano-papel.svg");
var _manoTijeraSvg = require("url:../../assets/mano-tijera.svg");
class HandComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        const jugada = this.getAttribute("jugada") || "piedra";
        const images = {
            piedra: _manoPiedraSvg,
            papel: _manoPapelSvg,
            tijera: _manoTijeraSvg
        };
        this.innerHTML = `
      <div class="hand-container">
        <img src="${images[jugada]}" class="hand-img" />
      </div>
    `;
        const style = document.createElement("style");
        style.textContent = `
      :host {
        display: inline-block;
        width: 104px;   /* Medida exacta pedida */
        height: 234px;  /* Medida exacta pedida */
      }
      .hand-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end; /* Alinea la mano al fondo del contenedor */
      }
      .hand-img {
        width: 100%;
        height: auto;
        display: block;
        filter: none; /* Aseguramos que por defecto no tengan gris */
      }
    `;
        this.appendChild(style);
    }
}
customElements.define("my-jugada", HandComponent);

},{"url:../../assets/mano-piedra.svg":"fa1ek","url:../../assets/mano-papel.svg":"5hkwf","url:../../assets/mano-tijera.svg":"hcjj4"}],"fa1ek":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("mano-piedra.55aedb5f.svg") + "?" + Date.now();

},{}],"5hkwf":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("mano-papel.ec175395.svg") + "?" + Date.now();

},{}],"hcjj4":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("mano-tijera.af322a2a.svg") + "?" + Date.now();

},{}]},["3dtlh","gH3Lb"], "gH3Lb", "parcelRequireb883", {}, "./", "/")

//# sourceMappingURL=desafio-ppt.34df32e0.js.map
