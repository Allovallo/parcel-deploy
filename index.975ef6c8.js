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
})({"igKGj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var ghpages = require("b92cbb4ae980dac");
ghpages.publish("dist", {
    branch: "main",
    repo: "https://github.com/Allovallo/parcel-deploy.git"
}, callback);

},{"b92cbb4ae980dac":"jXGW9"}],"jXGW9":[function(require,module,exports) {
var process = require("2ac5828503027b3a");
const findCacheDir = require("bd33e5ae4fc7dfd8");
const Git = require("d1d148b2142148ce");
const filenamify = require("310b2e94bbb1a84b");
const copy = require("70161b68e72c279a").copy;
const getUser = require("70161b68e72c279a").getUser;
const fs = require("f519d006d5c833e");
const globby = require("3179192507d065cf");
const path = require("4030e0584a344a61");
const util = require("dd4064e40fcc118f");
const log = util.debuglog("gh-pages");
/**
 * Get the cache directory.
 * @param {string} [optPath] Optional path.
 * @return {string} The full path to the cache directory.
 */ function getCacheDir(optPath) {
    const dir = findCacheDir({
        name: "gh-pages"
    });
    if (!optPath) return dir;
    return path.join(dir, filenamify(optPath));
}
exports.getCacheDir = getCacheDir;
function getRepo(options) {
    if (options.repo) return Promise.resolve(options.repo);
    else {
        const git = new Git(process.cwd(), options.git);
        return git.getRemoteUrl(options.remote);
    }
}
exports.defaults = {
    dest: ".",
    add: false,
    git: "git",
    depth: 1,
    dotfiles: false,
    branch: "gh-pages",
    remote: "origin",
    src: "**/*",
    remove: ".",
    push: true,
    history: true,
    message: "Updates",
    silent: false
};
/**
 * Push a git branch to a remote (pushes gh-pages by default).
 * @param {string} basePath The base path.
 * @param {object} config Publish options.
 * @param {Function} callback Callback.
 * @return {Promise} A promise.
 */ exports.publish = function publish(basePath, config, callback) {
    if (typeof config === "function") {
        callback = config;
        config = {};
    }
    const options = Object.assign({}, exports.defaults, config);
    // For backward compatibility before fixing #334
    if (options.only) options.remove = options.only;
    if (!callback) callback = function(err) {
        if (err) log(err.message);
    };
    function done(err) {
        try {
            callback(err);
        } catch (err2) {
            log("Publish callback threw: %s", err2.message);
        }
    }
    try {
        if (!fs.statSync(basePath).isDirectory()) {
            const err = new Error('The "base" option must be an existing directory');
            done(err);
            return Promise.reject(err);
        }
    } catch (err) {
        done(err);
        return Promise.reject(err);
    }
    const files = globby.sync(options.src, {
        cwd: basePath,
        dot: options.dotfiles
    }).filter((file)=>{
        return !fs.statSync(path.join(basePath, file)).isDirectory();
    });
    if (!Array.isArray(files) || files.length === 0) {
        done(new Error('The pattern in the "src" property didn\'t match any files.'));
        return;
    }
    let repoUrl;
    let userPromise;
    if (options.user) userPromise = Promise.resolve(options.user);
    else userPromise = getUser();
    return userPromise.then((user)=>getRepo(options).then((repo)=>{
            repoUrl = repo;
            const clone = getCacheDir(repo);
            log("Cloning %s into %s", repo, clone);
            return Git.clone(repo, clone, options.branch, options);
        }).then((git)=>{
            return git.getRemoteUrl(options.remote).then((url)=>{
                if (url !== repoUrl) {
                    const message = 'Remote url mismatch.  Got "' + url + '" ' + 'but expected "' + repoUrl + '" in ' + git.cwd + ".  Try running the `gh-pages-clean` script first.";
                    throw new Error(message);
                }
                return git;
            });
        }).then((git)=>{
            // only required if someone mucks with the checkout between builds
            log("Cleaning");
            return git.clean();
        }).then((git)=>{
            log("Fetching %s", options.remote);
            return git.fetch(options.remote);
        }).then((git)=>{
            log("Checking out %s/%s ", options.remote, options.branch);
            return git.checkout(options.remote, options.branch);
        }).then((git)=>{
            if (!options.history) return git.deleteRef(options.branch);
            else return git;
        }).then((git)=>{
            if (options.add) return git;
            log("Removing files");
            const files = globby.sync(options.remove, {
                cwd: path.join(git.cwd, options.dest)
            }).map((file)=>path.join(options.dest, file));
            if (files.length > 0) return git.rm(files);
            else return git;
        }).then((git)=>{
            log("Copying files");
            return copy(files, basePath, path.join(git.cwd, options.dest)).then(function() {
                return git;
            });
        }).then((git)=>{
            return Promise.resolve(options.beforeAdd && options.beforeAdd(git)).then(()=>git);
        }).then((git)=>{
            log("Adding all");
            return git.add(".");
        }).then((git)=>{
            if (!user) return git;
            return git.exec("config", "user.email", user.email).then(()=>{
                if (!user.name) return git;
                return git.exec("config", "user.name", user.name);
            });
        }).then((git)=>{
            log("Committing");
            return git.commit(options.message);
        }).then((git)=>{
            if (options.tag) {
                log("Tagging");
                return git.tag(options.tag).catch((error)=>{
                    // tagging failed probably because this tag alredy exists
                    log(error);
                    log("Tagging failed, continuing");
                    return git;
                });
            } else return git;
        }).then((git)=>{
            if (options.push) {
                log("Pushing");
                return git.push(options.remote, options.branch, !options.history);
            } else return git;
        }).then(()=>done(), (error)=>{
            if (options.silent) error = new Error("Unspecified error (run without silent option for detail)");
            done(error);
        }));
};
/**
 * Clean the cache directory.
 */ exports.clean = function clean() {
    fs.removeSync(getCacheDir());
};

},{"2ac5828503027b3a":"d5jf4","bd33e5ae4fc7dfd8":"eQ6N3","d1d148b2142148ce":"1ihxe","310b2e94bbb1a84b":"h74hA","70161b68e72c279a":"2iVR4","f519d006d5c833e":"aj3Cz","3179192507d065cf":"1ot1c","4030e0584a344a61":"loE3o","dd4064e40fcc118f":"cxohQ"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"eQ6N3":[function(require,module,exports) {
var process = require("6f3839c649d111de");
"use strict";
const path = require("f34557658b26599c");
const fs = require("a042cd9db6615145");
const commonDir = require("612d8faa769bfc78");
const pkgDir = require("cc7df75adc90b966");
const makeDir = require("b8e90bfaea436724");
const { env , cwd  } = process;
const isWritable = (path)=>{
    try {
        fs.accessSync(path, fs.constants.W_OK);
        return true;
    } catch (_) {
        return false;
    }
};
function useDirectory(directory, options) {
    if (options.create) makeDir.sync(directory);
    if (options.thunk) return (...arguments_)=>path.join(directory, ...arguments_);
    return directory;
}
function getNodeModuleDirectory(directory) {
    const nodeModules = path.join(directory, "node_modules");
    if (!isWritable(nodeModules) && (fs.existsSync(nodeModules) || !isWritable(path.join(directory)))) return;
    return nodeModules;
}
module.exports = (options = {})=>{
    if (env.CACHE_DIR && ![
        "true",
        "false",
        "1",
        "0"
    ].includes(env.CACHE_DIR)) return useDirectory(path.join(env.CACHE_DIR, options.name), options);
    let { cwd: directory = cwd()  } = options;
    if (options.files) directory = commonDir(directory, options.files);
    directory = pkgDir.sync(directory);
    if (!directory) return;
    const nodeModules = getNodeModuleDirectory(directory);
    if (!nodeModules) return undefined;
    return useDirectory(path.join(directory, "node_modules", ".cache", options.name), options);
};

},{"6f3839c649d111de":"d5jf4","f34557658b26599c":"loE3o","a042cd9db6615145":"jhUEF","612d8faa769bfc78":"eqkVA","cc7df75adc90b966":"73MZ4","b8e90bfaea436724":"lHmNK"}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var process = require("c0743715070b1b8a");
"use strict";
function assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format("/", pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"c0743715070b1b8a":"d5jf4"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"eqkVA":[function(require,module,exports) {
var path = require("b0d332d261e18486");
module.exports = function(basedir, relfiles) {
    if (relfiles) var files = relfiles.map(function(r) {
        return path.resolve(basedir, r);
    });
    else var files = basedir;
    var res = files.slice(1).reduce(function(ps, file) {
        if (!file.match(/^([A-Za-z]:)?\/|\\/)) throw new Error("relative path without a basedir");
        var xs = file.split(/\/+|\\+/);
        for(var i = 0; ps[i] === xs[i] && i < Math.min(ps.length, xs.length); i++);
        return ps.slice(0, i);
    }, files[0].split(/\/+|\\+/));
    // Windows correctly handles paths with forward-slashes
    return res.length > 1 ? res.join("/") : "/";
};

},{"b0d332d261e18486":"loE3o"}],"73MZ4":[function(require,module,exports) {
"use strict";
const path = require("8bffa7c9509e78ac");
const findUp = require("2695c209e6d6edff");
const pkgDir = async (cwd)=>{
    const filePath = await findUp("package.json", {
        cwd
    });
    return filePath && path.dirname(filePath);
};
module.exports = pkgDir;
// TODO: Remove this for the next major release
module.exports.default = pkgDir;
module.exports.sync = (cwd)=>{
    const filePath = findUp.sync("package.json", {
        cwd
    });
    return filePath && path.dirname(filePath);
};

},{"8bffa7c9509e78ac":"loE3o","2695c209e6d6edff":"dEcfz"}],"dEcfz":[function(require,module,exports) {
"use strict";
const path = require("31a00fa9785a1a9f");
const locatePath = require("37a2fbebceafb99f");
const pathExists = require("70ab310dab8faf4f");
const stop = Symbol("findUp.stop");
module.exports = async (name, options = {})=>{
    let directory = path.resolve(options.cwd || "");
    const { root  } = path.parse(directory);
    const paths = [].concat(name);
    const runMatcher = async (locateOptions)=>{
        if (typeof name !== "function") return locatePath(paths, locateOptions);
        const foundPath = await name(locateOptions.cwd);
        if (typeof foundPath === "string") return locatePath([
            foundPath
        ], locateOptions);
        return foundPath;
    };
    // eslint-disable-next-line no-constant-condition
    while(true){
        // eslint-disable-next-line no-await-in-loop
        const foundPath = await runMatcher({
            ...options,
            cwd: directory
        });
        if (foundPath === stop) return;
        if (foundPath) return path.resolve(directory, foundPath);
        if (directory === root) return;
        directory = path.dirname(directory);
    }
};
module.exports.sync = (name, options = {})=>{
    let directory = path.resolve(options.cwd || "");
    const { root  } = path.parse(directory);
    const paths = [].concat(name);
    const runMatcher = (locateOptions)=>{
        if (typeof name !== "function") return locatePath.sync(paths, locateOptions);
        const foundPath = name(locateOptions.cwd);
        if (typeof foundPath === "string") return locatePath.sync([
            foundPath
        ], locateOptions);
        return foundPath;
    };
    // eslint-disable-next-line no-constant-condition
    while(true){
        const foundPath = runMatcher({
            ...options,
            cwd: directory
        });
        if (foundPath === stop) return;
        if (foundPath) return path.resolve(directory, foundPath);
        if (directory === root) return;
        directory = path.dirname(directory);
    }
};
module.exports.exists = pathExists;
module.exports.sync.exists = pathExists.sync;
module.exports.stop = stop;

},{"31a00fa9785a1a9f":"loE3o","37a2fbebceafb99f":"i7a6H","70ab310dab8faf4f":"9VEN4"}],"i7a6H":[function(require,module,exports) {
var process = require("ffdad75070537865");
"use strict";
const path = require("9478c77db79b3e2a");
const fs = require("397f7dcee173d0a2");
const { promisify  } = require("f6331747a57616af");
const pLocate = require("c86d23958f51876c");
const fsStat = promisify(fs.stat);
const fsLStat = promisify(fs.lstat);
const typeMappings = {
    directory: "isDirectory",
    file: "isFile"
};
function checkType({ type  }) {
    if (type in typeMappings) return;
    throw new Error(`Invalid type specified: ${type}`);
}
const matchType = (type, stat)=>type === undefined || stat[typeMappings[type]]();
module.exports = async (paths, options)=>{
    options = {
        cwd: process.cwd(),
        type: "file",
        allowSymlinks: true,
        ...options
    };
    checkType(options);
    const statFn = options.allowSymlinks ? fsStat : fsLStat;
    return pLocate(paths, async (path_)=>{
        try {
            const stat = await statFn(path.resolve(options.cwd, path_));
            return matchType(options.type, stat);
        } catch (_) {
            return false;
        }
    }, options);
};
module.exports.sync = (paths, options)=>{
    options = {
        cwd: process.cwd(),
        allowSymlinks: true,
        type: "file",
        ...options
    };
    checkType(options);
    const statFn = options.allowSymlinks ? fs.statSync : fs.lstatSync;
    for (const path_ of paths)try {
        const stat = statFn(path.resolve(options.cwd, path_));
        if (matchType(options.type, stat)) return path_;
    } catch (_) {}
};

},{"ffdad75070537865":"d5jf4","9478c77db79b3e2a":"loE3o","397f7dcee173d0a2":"jhUEF","f6331747a57616af":"cxohQ","c86d23958f51876c":"jSJKE"}],"cxohQ":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var process = require("bc23a3ea4a141c0b");
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for(var i = 0; i < keys.length; i++)descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    return descriptors;
};
var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
    if (!isString(f)) {
        var objects = [];
        for(var i = 0; i < arguments.length; i++)objects.push(inspect(arguments[i]));
        return objects.join(" ");
    }
    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
        if (x === "%%") return "%";
        if (i >= len) return x;
        switch(x){
            case "%s":
                return String(args[i++]);
            case "%d":
                return Number(args[i++]);
            case "%j":
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return "[Circular]";
                }
            default:
                return x;
        }
    });
    for(var x = args[i]; i < len; x = args[++i])if (isNull(x) || !isObject(x)) str += " " + x;
    else str += " " + inspect(x);
    return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
    if (typeof process !== "undefined" && process.noDeprecation === true) return fn;
    // Allow for deprecating things in the process of starting up.
    if (typeof process === "undefined") return function() {
        return exports.deprecate(fn, msg).apply(this, arguments);
    };
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (process.throwDeprecation) throw new Error(msg);
            else if (process.traceDeprecation) console.trace(msg);
            else console.error(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};
var debugs = {};
var debugEnvRegex = /^$/;
var debugEnv;
exports.debuglog = function(set) {
    set = set.toUpperCase();
    if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
                var msg = exports.format.apply(exports, arguments);
                console.error("%s %d: %s", set, pid, msg);
            };
        } else debugs[set] = function() {};
    }
    return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */ /* legacy: obj, showHidden, depth, colors*/ function inspect(obj, opts) {
    // default options
    var ctx = {
        seen: [],
        stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) // legacy...
    ctx.showHidden = opts;
    else if (opts) // got an "options" object
    exports._extend(ctx, opts);
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
    "bold": [
        1,
        22
    ],
    "italic": [
        3,
        23
    ],
    "underline": [
        4,
        24
    ],
    "inverse": [
        7,
        27
    ],
    "white": [
        37,
        39
    ],
    "grey": [
        90,
        39
    ],
    "black": [
        30,
        39
    ],
    "blue": [
        34,
        39
    ],
    "cyan": [
        36,
        39
    ],
    "green": [
        32,
        39
    ],
    "magenta": [
        35,
        39
    ],
    "red": [
        31,
        39
    ],
    "yellow": [
        33,
        39
    ]
};
// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
    "special": "cyan",
    "number": "yellow",
    "boolean": "yellow",
    "undefined": "grey",
    "null": "bold",
    "string": "green",
    "date": "magenta",
    // "name": intentionally not styling
    "regexp": "red"
};
function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];
    if (style) return "\x1b[" + inspect.colors[style][0] + "m" + str + "\x1b[" + inspect.colors[style][1] + "m";
    else return str;
}
function stylizeNoColor(str, styleType) {
    return str;
}
function arrayToHash(array) {
    var hash = {};
    array.forEach(function(val, idx) {
        hash[val] = true;
    });
    return hash;
}
function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
    !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) ret = formatValue(ctx, ret, recurseTimes);
        return ret;
    }
    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) return primitive;
    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);
    if (ctx.showHidden) keys = Object.getOwnPropertyNames(value);
    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) return formatError(value);
    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        if (isDate(value)) return ctx.stylize(Date.prototype.toString.call(value), "date");
        if (isError(value)) return formatError(value);
    }
    var base = "", array = false, braces = [
        "{",
        "}"
    ];
    // Make Array say that they are Array
    if (isArray(value)) {
        array = true;
        braces = [
            "[",
            "]"
        ];
    }
    // Make functions say that they are functions
    if (isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
    }
    // Make RegExps say that they are RegExps
    if (isRegExp(value)) base = " " + RegExp.prototype.toString.call(value);
    // Make dates with properties first say the date
    if (isDate(value)) base = " " + Date.prototype.toUTCString.call(value);
    // Make error with message first say the error
    if (isError(value)) base = " " + formatError(value);
    if (keys.length === 0 && (!array || value.length == 0)) return braces[0] + base + braces[1];
    if (recurseTimes < 0) {
        if (isRegExp(value)) return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        else return ctx.stylize("[Object]", "special");
    }
    ctx.seen.push(value);
    var output;
    if (array) output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    else output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
    ctx.seen.pop();
    return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
    if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
    if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
    }
    if (isNumber(value)) return ctx.stylize("" + value, "number");
    if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
    // For some reason typeof null is "object", so special case here.
    if (isNull(value)) return ctx.stylize("null", "null");
}
function formatError(value) {
    return "[" + Error.prototype.toString.call(value) + "]";
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for(var i = 0, l = value.length; i < l; ++i)if (hasOwnProperty(value, String(i))) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    else output.push("");
    keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    });
    return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key]
    };
    if (desc.get) {
        if (desc.set) str = ctx.stylize("[Getter/Setter]", "special");
        else str = ctx.stylize("[Getter]", "special");
    } else if (desc.set) str = ctx.stylize("[Setter]", "special");
    if (!hasOwnProperty(visibleKeys, key)) name = "[" + key + "]";
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) str = formatValue(ctx, desc.value, null);
            else str = formatValue(ctx, desc.value, recurseTimes - 1);
            if (str.indexOf("\n") > -1) {
                if (array) str = str.split("\n").map(function(line) {
                    return "  " + line;
                }).join("\n").slice(2);
                else str = "\n" + str.split("\n").map(function(line) {
                    return "   " + line;
                }).join("\n");
            }
        } else str = ctx.stylize("[Circular]", "special");
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) return str;
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.slice(1, -1);
            name = ctx.stylize(name, "name");
        } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
        }
    }
    return name + ": " + str;
}
function reduceToSingleString(output, base, braces) {
    var numLinesEst = 0;
    var length = output.reduce(function(prev, cur) {
        numLinesEst++;
        if (cur.indexOf("\n") >= 0) numLinesEst++;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    if (length > 60) return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
    return braces[0] + base + " " + output.join(", ") + " " + braces[1];
}
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = require("6a1c15bae847a134");
function isArray(ar) {
    return Array.isArray(ar);
}
exports.isArray = isArray;
function isBoolean(arg) {
    return typeof arg === "boolean";
}
exports.isBoolean = isBoolean;
function isNull(arg) {
    return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
    return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
    return typeof arg === "number";
}
exports.isNumber = isNumber;
function isString(arg) {
    return typeof arg === "string";
}
exports.isString = isString;
function isSymbol(arg) {
    return typeof arg === "symbol";
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
    return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
    return isObject(re) && objectToString(re) === "[object RegExp]";
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
    return isObject(d) && objectToString(d) === "[object Date]";
}
exports.isDate = isDate;
exports.types.isDate = isDate;
function isError(e) {
    return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;
function isFunction(arg) {
    return typeof arg === "function";
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
    typeof arg === "undefined";
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = require("a42137cd7fc8700d");
function objectToString(o) {
    return Object.prototype.toString.call(o);
}
function pad(n) {
    return n < 10 ? "0" + n.toString(10) : n.toString(10);
}
var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
// 26 Feb 16:19:34
function timestamp() {
    var d = new Date();
    var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
    ].join(":");
    return [
        d.getDate(),
        months[d.getMonth()],
        time
    ].join(" ");
}
// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
    console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */ exports.inherits = require("a792e8e3e2aa1973");
exports._extend = function(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
};
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
exports.promisify = function promisify(original) {
    if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
    if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== "function") throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }
    function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
            promiseResolve = resolve;
            promiseReject = reject;
        });
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        args.push(function(err, value) {
            if (err) promiseReject(err);
            else promiseResolve(value);
        });
        try {
            original.apply(this, args);
        } catch (err) {
            promiseReject(err);
        }
        return promise;
    }
    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
    if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};
exports.promisify.custom = kCustomPromisifiedSymbol;
function callbackifyOnRejected(reason, cb) {
    // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
    // Because `null` is a special error value in callbacks which means "no error
    // occurred", we error-wrap so the callback consumer can distinguish between
    // "the promise rejected with null" or "the promise fulfilled with undefined".
    if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
    }
    return cb(reason);
}
function callbackify(original) {
    if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
    // We DO NOT return the promise as it gives the user a false sense that
    // the promise is actually somehow related to the callback's execution
    // and that the callback throwing will reject the promise.
    function callbackified() {
        var args = [];
        for(var i = 0; i < arguments.length; i++)args.push(arguments[i]);
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") throw new TypeError("The last argument must be of type Function");
        var self = this;
        var cb = function() {
            return maybeCb.apply(self, arguments);
        };
        // In true node style we process the callback on `nextTick` with all the
        // implications (stack, `uncaughtException`, `async_hooks`)
        original.apply(this, args).then(function(ret) {
            process.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
    }
    Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
    Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
    return callbackified;
}
exports.callbackify = callbackify;

},{"bc23a3ea4a141c0b":"d5jf4","6a1c15bae847a134":"bnQvf","a42137cd7fc8700d":"inNNy","a792e8e3e2aa1973":"bRL3M"}],"bnQvf":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
"use strict";
var isArgumentsObject = require("6b5f9ae3e436d527");
var isGeneratorFunction = require("285c2b8081bf4b68");
var whichTypedArray = require("e95b88ccd80e1671");
var isTypedArray = require("7db151546a22c2a8");
function uncurryThis(f) {
    return f.call.bind(f);
}
var BigIntSupported = typeof BigInt !== "undefined";
var SymbolSupported = typeof Symbol !== "undefined";
var ObjectToString = uncurryThis(Object.prototype.toString);
var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);
if (BigIntSupported) var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
if (SymbolSupported) var symbolValue = uncurryThis(Symbol.prototype.valueOf);
function checkBoxedPrimitive(value, prototypeValueOf) {
    if (typeof value !== "object") return false;
    try {
        prototypeValueOf(value);
        return true;
    } catch (e) {
        return false;
    }
}
exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;
// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
    return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
}
exports.isPromise = isPromise;
function isArrayBufferView(value) {
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) return ArrayBuffer.isView(value);
    return isTypedArray(value) || isDataView(value);
}
exports.isArrayBufferView = isArrayBufferView;
function isUint8Array(value) {
    return whichTypedArray(value) === "Uint8Array";
}
exports.isUint8Array = isUint8Array;
function isUint8ClampedArray(value) {
    return whichTypedArray(value) === "Uint8ClampedArray";
}
exports.isUint8ClampedArray = isUint8ClampedArray;
function isUint16Array(value) {
    return whichTypedArray(value) === "Uint16Array";
}
exports.isUint16Array = isUint16Array;
function isUint32Array(value) {
    return whichTypedArray(value) === "Uint32Array";
}
exports.isUint32Array = isUint32Array;
function isInt8Array(value) {
    return whichTypedArray(value) === "Int8Array";
}
exports.isInt8Array = isInt8Array;
function isInt16Array(value) {
    return whichTypedArray(value) === "Int16Array";
}
exports.isInt16Array = isInt16Array;
function isInt32Array(value) {
    return whichTypedArray(value) === "Int32Array";
}
exports.isInt32Array = isInt32Array;
function isFloat32Array(value) {
    return whichTypedArray(value) === "Float32Array";
}
exports.isFloat32Array = isFloat32Array;
function isFloat64Array(value) {
    return whichTypedArray(value) === "Float64Array";
}
exports.isFloat64Array = isFloat64Array;
function isBigInt64Array(value) {
    return whichTypedArray(value) === "BigInt64Array";
}
exports.isBigInt64Array = isBigInt64Array;
function isBigUint64Array(value) {
    return whichTypedArray(value) === "BigUint64Array";
}
exports.isBigUint64Array = isBigUint64Array;
function isMapToString(value) {
    return ObjectToString(value) === "[object Map]";
}
isMapToString.working = typeof Map !== "undefined" && isMapToString(new Map());
function isMap(value) {
    if (typeof Map === "undefined") return false;
    return isMapToString.working ? isMapToString(value) : value instanceof Map;
}
exports.isMap = isMap;
function isSetToString(value) {
    return ObjectToString(value) === "[object Set]";
}
isSetToString.working = typeof Set !== "undefined" && isSetToString(new Set());
function isSet(value) {
    if (typeof Set === "undefined") return false;
    return isSetToString.working ? isSetToString(value) : value instanceof Set;
}
exports.isSet = isSet;
function isWeakMapToString(value) {
    return ObjectToString(value) === "[object WeakMap]";
}
isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(new WeakMap());
function isWeakMap(value) {
    if (typeof WeakMap === "undefined") return false;
    return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;
function isWeakSetToString(value) {
    return ObjectToString(value) === "[object WeakSet]";
}
isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(new WeakSet());
function isWeakSet(value) {
    return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;
function isArrayBufferToString(value) {
    return ObjectToString(value) === "[object ArrayBuffer]";
}
isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
function isArrayBuffer(value) {
    if (typeof ArrayBuffer === "undefined") return false;
    return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;
function isDataViewToString(value) {
    return ObjectToString(value) === "[object DataView]";
}
isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
function isDataView(value) {
    if (typeof DataView === "undefined") return false;
    return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
}
exports.isDataView = isDataView;
// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
    return ObjectToString(value) === "[object SharedArrayBuffer]";
}
function isSharedArrayBuffer(value) {
    if (typeof SharedArrayBufferCopy === "undefined") return false;
    if (typeof isSharedArrayBufferToString.working === "undefined") isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
    return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;
function isAsyncFunction(value) {
    return ObjectToString(value) === "[object AsyncFunction]";
}
exports.isAsyncFunction = isAsyncFunction;
function isMapIterator(value) {
    return ObjectToString(value) === "[object Map Iterator]";
}
exports.isMapIterator = isMapIterator;
function isSetIterator(value) {
    return ObjectToString(value) === "[object Set Iterator]";
}
exports.isSetIterator = isSetIterator;
function isGeneratorObject(value) {
    return ObjectToString(value) === "[object Generator]";
}
exports.isGeneratorObject = isGeneratorObject;
function isWebAssemblyCompiledModule(value) {
    return ObjectToString(value) === "[object WebAssembly.Module]";
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
function isNumberObject(value) {
    return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;
function isStringObject(value) {
    return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;
function isBooleanObject(value) {
    return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;
function isBigIntObject(value) {
    return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;
function isSymbolObject(value) {
    return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;
function isBoxedPrimitive(value) {
    return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
}
exports.isBoxedPrimitive = isBoxedPrimitive;
function isAnyArrayBuffer(value) {
    return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;
[
    "isProxy",
    "isExternal",
    "isModuleNamespaceObject"
].forEach(function(method) {
    Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
            throw new Error(method + " is not supported in userland");
        }
    });
});

},{"6b5f9ae3e436d527":"czr4n","285c2b8081bf4b68":"2XUdn","e95b88ccd80e1671":"lVUO7","7db151546a22c2a8":"1ihkG"}],"czr4n":[function(require,module,exports) {
"use strict";
var hasToStringTag = require("e2b01ce809f132fb")();
var callBound = require("649cbf9949986a39");
var $toString = callBound("Object.prototype.toString");
var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) return false;
    return $toString(value) === "[object Arguments]";
};
var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) return true;
    return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"e2b01ce809f132fb":"9LdQ9","649cbf9949986a39":"5yYiF"}],"9LdQ9":[function(require,module,exports) {
"use strict";
var hasSymbols = require("2ef89576d4959bff");
module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};

},{"2ef89576d4959bff":"euYk7"}],"euYk7":[function(require,module,exports) {
"use strict";
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
    if (typeof Symbol.iterator === "symbol") return true;
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") return false;
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"5yYiF":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("8b08ecb81cf4de17");
var callBind = require("266fc50410cfc4a");
var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"8b08ecb81cf4de17":"dZb05","266fc50410cfc4a":"bfo8D"}],"dZb05":[function(require,module,exports) {
"use strict";
var undefined;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({}, "");
} catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require("1f00f712d594ccf")();
var hasProto = require("23730654306aa64c")();
var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
    return x.__proto__;
} // eslint-disable-line no-proto
 : null);
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    "%AsyncFromSyncIteratorPrototype%": undefined,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    "%JSON%": typeof JSON === "object" ? JSON : undefined,
    "%Map%": typeof Map === "undefined" ? undefined : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
    "%Symbol%": hasSymbols ? Symbol : undefined,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet
};
if (getProto) try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var errorProto = getProto(getProto(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
}
var doEval = function doEval(name) {
    var value;
    if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
        var fn = doEval("%AsyncGeneratorFunction%");
        if (fn) value = fn.prototype;
    } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval("%AsyncGenerator%");
        if (gen && getProto) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
    ],
    "%ArrayPrototype%": [
        "Array",
        "prototype"
    ],
    "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
    ],
    "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
    ],
    "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
    ],
    "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
    ],
    "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
    ],
    "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%BooleanPrototype%": [
        "Boolean",
        "prototype"
    ],
    "%DataViewPrototype%": [
        "DataView",
        "prototype"
    ],
    "%DatePrototype%": [
        "Date",
        "prototype"
    ],
    "%ErrorPrototype%": [
        "Error",
        "prototype"
    ],
    "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
    ],
    "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
    ],
    "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
    ],
    "%FunctionPrototype%": [
        "Function",
        "prototype"
    ],
    "%Generator%": [
        "GeneratorFunction",
        "prototype"
    ],
    "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
    ],
    "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
    ],
    "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
    ],
    "%JSONParse%": [
        "JSON",
        "parse"
    ],
    "%JSONStringify%": [
        "JSON",
        "stringify"
    ],
    "%MapPrototype%": [
        "Map",
        "prototype"
    ],
    "%NumberPrototype%": [
        "Number",
        "prototype"
    ],
    "%ObjectPrototype%": [
        "Object",
        "prototype"
    ],
    "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
    ],
    "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
    ],
    "%PromisePrototype%": [
        "Promise",
        "prototype"
    ],
    "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
    ],
    "%Promise_all%": [
        "Promise",
        "all"
    ],
    "%Promise_reject%": [
        "Promise",
        "reject"
    ],
    "%Promise_resolve%": [
        "Promise",
        "resolve"
    ],
    "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
    ],
    "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
    ],
    "%RegExpPrototype%": [
        "RegExp",
        "prototype"
    ],
    "%SetPrototype%": [
        "Set",
        "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
    ],
    "%StringPrototype%": [
        "String",
        "prototype"
    ],
    "%SymbolPrototype%": [
        "Symbol",
        "prototype"
    ],
    "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
    ],
    "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
    ],
    "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
    ],
    "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
    ],
    "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
    ],
    "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
    ],
    "%URIErrorPrototype%": [
        "URIError",
        "prototype"
    ],
    "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
    ],
    "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
    ]
};
var bind = require("7c5e688e48cd07b0");
var hasOwn = require("b03d0058935d00bf");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
        if (part === "constructor" || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"1f00f712d594ccf":"3dK91","23730654306aa64c":"6eZiF","7c5e688e48cd07b0":"6J4ob","b03d0058935d00bf":"ksyoO"}],"3dK91":[function(require,module,exports) {
"use strict";
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = require("3fb25678c62d2fce");
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") return false;
    if (typeof Symbol !== "function") return false;
    if (typeof origSymbol("foo") !== "symbol") return false;
    if (typeof Symbol("bar") !== "symbol") return false;
    return hasSymbolSham();
};

},{"3fb25678c62d2fce":"euYk7"}],"6eZiF":[function(require,module,exports) {
"use strict";
var test = {
    foo: {}
};
var $Object = Object;
module.exports = function hasProto() {
    return ({
        __proto__: test
    }).foo === test.foo && !(({
        __proto__: null
    }) instanceof $Object);
};

},{}],"6J4ob":[function(require,module,exports) {
"use strict";
var implementation = require("12e173b4dbaee960");
module.exports = Function.prototype.bind || implementation;

},{"12e173b4dbaee960":"jwaxQ"}],"jwaxQ":[function(require,module,exports) {
"use strict";
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = "[object Function]";
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.call(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat(slice.call(arguments)));
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs.push("$" + i);
    bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"ksyoO":[function(require,module,exports) {
"use strict";
var bind = require("ec4f1e1d3f29fa3e");
module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"ec4f1e1d3f29fa3e":"6J4ob"}],"bfo8D":[function(require,module,exports) {
"use strict";
var bind = require("4f9d84d5de4909bc");
var GetIntrinsic = require("68d2ad3775278f43");
var $apply = GetIntrinsic("%Function.prototype.apply%");
var $call = GetIntrinsic("%Function.prototype.call%");
var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
var $max = GetIntrinsic("%Math.max%");
if ($defineProperty) try {
    $defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $defineProperty(func, "length", {
            value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, "apply", {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"4f9d84d5de4909bc":"6J4ob","68d2ad3775278f43":"dZb05"}],"2XUdn":[function(require,module,exports) {
"use strict";
var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = require("b42ab74c25dbb155")();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function() {
    if (!hasToStringTag) return false;
    try {
        return Function("return function*() {}")();
    } catch (e) {}
};
var GeneratorFunction;
module.exports = function isGeneratorFunction(fn) {
    if (typeof fn !== "function") return false;
    if (isFnRegex.test(fnToStr.call(fn))) return true;
    if (!hasToStringTag) {
        var str = toStr.call(fn);
        return str === "[object GeneratorFunction]";
    }
    if (!getProto) return false;
    if (typeof GeneratorFunction === "undefined") {
        var generatorFunc = getGeneratorFunc();
        GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
};

},{"b42ab74c25dbb155":"9LdQ9"}],"lVUO7":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var forEach = require("2941d48f36957e3c");
var availableTypedArrays = require("beaf5502a5823cce");
var callBound = require("83f633f9b335db8f");
var gOPD = require("ce6b45c571ba4e3e");
var $toString = callBound("Object.prototype.toString");
var hasToStringTag = require("9e7ef6c88184c56")();
var g = typeof globalThis === "undefined" ? global : globalThis;
var typedArrays = availableTypedArrays();
var $slice = callBound("String.prototype.slice");
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    if (typeof g[typedArray] === "function") {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
        }
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {}
    });
    return foundName;
};
var isTypedArray = require("41b5d056a91a2f13");
module.exports = function whichTypedArray(value) {
    if (!isTypedArray(value)) return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) return $slice($toString(value), 8, -1);
    return tryTypedArrays(value);
};

},{"2941d48f36957e3c":"1Sol9","beaf5502a5823cce":"kfela","83f633f9b335db8f":"5yYiF","ce6b45c571ba4e3e":"eOTQB","9e7ef6c88184c56":"9LdQ9","41b5d056a91a2f13":"1ihkG"}],"1Sol9":[function(require,module,exports) {
"use strict";
var isCallable = require("e50ebc24bbb25feb");
var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var forEachArray = function forEachArray(array, iterator, receiver) {
    for(var i = 0, len = array.length; i < len; i++)if (hasOwnProperty.call(array, i)) {
        if (receiver == null) iterator(array[i], i, array);
        else iterator.call(receiver, array[i], i, array);
    }
};
var forEachString = function forEachString(string, iterator, receiver) {
    for(var i = 0, len = string.length; i < len; i++)// no such thing as a sparse string.
    if (receiver == null) iterator(string.charAt(i), i, string);
    else iterator.call(receiver, string.charAt(i), i, string);
};
var forEachObject = function forEachObject(object, iterator, receiver) {
    for(var k in object)if (hasOwnProperty.call(object, k)) {
        if (receiver == null) iterator(object[k], k, object);
        else iterator.call(receiver, object[k], k, object);
    }
};
var forEach = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) throw new TypeError("iterator must be a function");
    var receiver;
    if (arguments.length >= 3) receiver = thisArg;
    if (toStr.call(list) === "[object Array]") forEachArray(list, iterator, receiver);
    else if (typeof list === "string") forEachString(list, iterator, receiver);
    else forEachObject(list, iterator, receiver);
};
module.exports = forEach;

},{"e50ebc24bbb25feb":"9ocyk"}],"9ocyk":[function(require,module,exports) {
"use strict";
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") try {
    badArrayLike = Object.defineProperty({}, "length", {
        get: function() {
            throw isCallableMarker;
        }
    });
    isCallableMarker = {};
    // eslint-disable-next-line no-throw-literal
    reflectApply(function() {
        throw 42;
    }, null, badArrayLike);
} catch (_) {
    if (_ !== isCallableMarker) reflectApply = null;
}
else reflectApply = null;
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
    try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
    } catch (e) {
        return false; // not a function
    }
};
var tryFunctionObject = function tryFunctionToStr(value) {
    try {
        if (isES6ClassFn(value)) return false;
        fnToStr.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var toStr = Object.prototype.toString;
var objectClass = "[object Object]";
var fnClass = "[object Function]";
var genClass = "[object GeneratorFunction]";
var ddaClass = "[object HTMLAllCollection]"; // IE 11
var ddaClass2 = "[object HTML document.all class]";
var ddaClass3 = "[object HTMLCollection]"; // IE 9-10
var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag; // better: use `has-tostringtag`
var isIE68 = !(0 in [
    , 
]); // eslint-disable-line no-sparse-arrays, comma-spacing
var isDDA = function isDocumentDotAll() {
    return false;
};
if (typeof document === "object") {
    // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
    var all = document.all;
    if (toStr.call(all) === toStr.call(document.all)) isDDA = function isDocumentDotAll(value) {
        /* globals document: false */ // in IE 6-8, typeof document.all is "object" and it's truthy
        if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) try {
            var str = toStr.call(value);
            return (str === ddaClass || str === ddaClass2 || str === ddaClass3 // opera 12.16
             || str === objectClass // IE 6-8
            ) && value("") == null; // eslint-disable-line eqeqeq
        } catch (e) {}
        return false;
    };
}
module.exports = reflectApply ? function isCallable(value) {
    if (isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    try {
        reflectApply(value, null, badArrayLike);
    } catch (e) {
        if (e !== isCallableMarker) return false;
    }
    return !isES6ClassFn(value) && tryFunctionObject(value);
} : function isCallable(value) {
    if (isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    if (hasToStringTag) return tryFunctionObject(value);
    if (isES6ClassFn(value)) return false;
    var strClass = toStr.call(value);
    if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) return false;
    return tryFunctionObject(value);
};

},{}],"kfela":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var possibleNames = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray"
];
var g = typeof globalThis === "undefined" ? global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < possibleNames.length; i++)if (typeof g[possibleNames[i]] === "function") out[out.length] = possibleNames[i];
    return out;
};

},{}],"eOTQB":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("693e651525841e04");
var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) try {
    $gOPD([], "length");
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"693e651525841e04":"dZb05"}],"1ihkG":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var forEach = require("68abe9b54a20c572");
var availableTypedArrays = require("aafd98fda33bbd57");
var callBound = require("a32527df8bf8b924");
var $toString = callBound("Object.prototype.toString");
var hasToStringTag = require("b3f7dbb937db3363")();
var gOPD = require("af60b1967ea134c8");
var g = typeof globalThis === "undefined" ? global : globalThis;
var typedArrays = availableTypedArrays();
var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $slice = callBound("String.prototype.slice");
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {}
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== "object") return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $slice($toString(value), 8, -1);
        return $indexOf(typedArrays, tag) > -1;
    }
    if (!gOPD) return false;
    return tryTypedArrays(value);
};

},{"68abe9b54a20c572":"1Sol9","aafd98fda33bbd57":"kfela","a32527df8bf8b924":"5yYiF","b3f7dbb937db3363":"9LdQ9","af60b1967ea134c8":"eOTQB"}],"inNNy":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
    return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
};

},{}],"bRL3M":[function(require,module,exports) {
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"jSJKE":[function(require,module,exports) {
"use strict";
const pLimit = require("6196ee5b7212f765");
class EndError extends Error {
    constructor(value){
        super();
        this.value = value;
    }
}
// The input can also be a promise, so we await it
const testElement = async (element, tester)=>tester(await element);
// The input can also be a promise, so we `Promise.all()` them both
const finder = async (element)=>{
    const values = await Promise.all(element);
    if (values[1] === true) throw new EndError(values[0]);
    return false;
};
const pLocate = async (iterable, tester, options)=>{
    options = {
        concurrency: Infinity,
        preserveOrder: true,
        ...options
    };
    const limit = pLimit(options.concurrency);
    // Start all the promises concurrently with optional limit
    const items = [
        ...iterable
    ].map((element)=>[
            element,
            limit(testElement, element, tester)
        ]);
    // Check the promises either serially or concurrently
    const checkLimit = pLimit(options.preserveOrder ? 1 : Infinity);
    try {
        await Promise.all(items.map((element)=>checkLimit(finder, element)));
    } catch (error) {
        if (error instanceof EndError) return error.value;
        throw error;
    }
};
module.exports = pLocate;
// TODO: Remove this for the next major release
module.exports.default = pLocate;

},{"6196ee5b7212f765":"c0myX"}],"c0myX":[function(require,module,exports) {
"use strict";
const pTry = require("39c3b5c69f35b2d2");
const pLimit = (concurrency)=>{
    if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) return Promise.reject(new TypeError("Expected `concurrency` to be a number from 1 and up"));
    const queue = [];
    let activeCount = 0;
    const next = ()=>{
        activeCount--;
        if (queue.length > 0) queue.shift()();
    };
    const run = (fn, resolve, ...args)=>{
        activeCount++;
        const result = pTry(fn, ...args);
        resolve(result);
        result.then(next, next);
    };
    const enqueue = (fn, resolve, ...args)=>{
        if (activeCount < concurrency) run(fn, resolve, ...args);
        else queue.push(run.bind(null, fn, resolve, ...args));
    };
    const generator = (fn, ...args)=>new Promise((resolve)=>enqueue(fn, resolve, ...args));
    Object.defineProperties(generator, {
        activeCount: {
            get: ()=>activeCount
        },
        pendingCount: {
            get: ()=>queue.length
        },
        clearQueue: {
            value: ()=>{
                queue.length = 0;
            }
        }
    });
    return generator;
};
module.exports = pLimit;
module.exports.default = pLimit;

},{"39c3b5c69f35b2d2":"fTH8E"}],"fTH8E":[function(require,module,exports) {
"use strict";
const pTry = (fn, ...arguments_)=>new Promise((resolve)=>{
        resolve(fn(...arguments_));
    });
module.exports = pTry;
// TODO: remove this in the next major version
module.exports.default = pTry;

},{}],"9VEN4":[function(require,module,exports) {
"use strict";
const fs = require("10297edec5bee181");
const { promisify  } = require("3a9064a41914e154");
const pAccess = promisify(fs.access);
module.exports = async (path)=>{
    try {
        await pAccess(path);
        return true;
    } catch (_) {
        return false;
    }
};
module.exports.sync = (path)=>{
    try {
        fs.accessSync(path);
        return true;
    } catch (_) {
        return false;
    }
};

},{"10297edec5bee181":"jhUEF","3a9064a41914e154":"cxohQ"}],"lHmNK":[function(require,module,exports) {
var process = require("deb4b66d96cde5a4");
"use strict";
const fs = require("365e47b12187dd79");
const path = require("326eee46c7d90f76");
const { promisify  } = require("e0ba19670d5338b4");
const semver = require("72d47db346bcc061");
const useNativeRecursiveOption = semver.satisfies(process.version, ">=10.12.0");
// https://github.com/nodejs/node/issues/8987
// https://github.com/libuv/libuv/pull/1088
const checkPath = (pth)=>{
    if (process.platform === "win32") {
        const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path.parse(pth).root, ""));
        if (pathHasInvalidWinCharacters) {
            const error = new Error(`Path contains invalid characters: ${pth}`);
            error.code = "EINVAL";
            throw error;
        }
    }
};
const processOptions = (options)=>{
    // https://github.com/sindresorhus/make-dir/issues/18
    const defaults = {
        mode: 511,
        fs
    };
    return {
        ...defaults,
        ...options
    };
};
const permissionError = (pth)=>{
    // This replicates the exception of `fs.mkdir` with native the
    // `recusive` option when run on an invalid drive under Windows.
    const error = new Error(`operation not permitted, mkdir '${pth}'`);
    error.code = "EPERM";
    error.errno = -4048;
    error.path = pth;
    error.syscall = "mkdir";
    return error;
};
const makeDir = async (input, options)=>{
    checkPath(input);
    options = processOptions(options);
    const mkdir = promisify(options.fs.mkdir);
    const stat = promisify(options.fs.stat);
    if (useNativeRecursiveOption && options.fs.mkdir === fs.mkdir) {
        const pth = path.resolve(input);
        await mkdir(pth, {
            mode: options.mode,
            recursive: true
        });
        return pth;
    }
    const make = async (pth)=>{
        try {
            await mkdir(pth, options.mode);
            return pth;
        } catch (error) {
            if (error.code === "EPERM") throw error;
            if (error.code === "ENOENT") {
                if (path.dirname(pth) === pth) throw permissionError(pth);
                if (error.message.includes("null bytes")) throw error;
                await make(path.dirname(pth));
                return make(pth);
            }
            try {
                const stats = await stat(pth);
                if (!stats.isDirectory()) throw new Error("The path is not a directory");
            } catch (_) {
                throw error;
            }
            return pth;
        }
    };
    return make(path.resolve(input));
};
module.exports = makeDir;
module.exports.sync = (input, options)=>{
    checkPath(input);
    options = processOptions(options);
    if (useNativeRecursiveOption && options.fs.mkdirSync === fs.mkdirSync) {
        const pth = path.resolve(input);
        fs.mkdirSync(pth, {
            mode: options.mode,
            recursive: true
        });
        return pth;
    }
    const make = (pth)=>{
        try {
            options.fs.mkdirSync(pth, options.mode);
        } catch (error) {
            if (error.code === "EPERM") throw error;
            if (error.code === "ENOENT") {
                if (path.dirname(pth) === pth) throw permissionError(pth);
                if (error.message.includes("null bytes")) throw error;
                make(path.dirname(pth));
                return make(pth);
            }
            try {
                if (!options.fs.statSync(pth).isDirectory()) throw new Error("The path is not a directory");
            } catch (_) {
                throw error;
            }
        }
        return pth;
    };
    return make(path.resolve(input));
};

},{"deb4b66d96cde5a4":"d5jf4","365e47b12187dd79":"jhUEF","326eee46c7d90f76":"loE3o","e0ba19670d5338b4":"cxohQ","72d47db346bcc061":"gNliO"}],"gNliO":[function(require,module,exports) {
var process = require("190bd44ee51ed65f");
exports = module.exports = SemVer;
var debug;
/* istanbul ignore next */ typeof process === "object" && process.env && undefined;
debug = function() {};
// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = "2.0.0";
var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991;
// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16;
// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var t = exports.tokens = {};
var R = 0;
function tok(n) {
    t[n] = R++;
}
// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
tok("NUMERICIDENTIFIER");
src[t.NUMERICIDENTIFIER] = "0|[1-9]\\d*";
tok("NUMERICIDENTIFIERLOOSE");
src[t.NUMERICIDENTIFIERLOOSE] = "[0-9]+";
// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
tok("NONNUMERICIDENTIFIER");
src[t.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*";
// ## Main Version
// Three dot-separated numeric identifiers.
tok("MAINVERSION");
src[t.MAINVERSION] = "(" + src[t.NUMERICIDENTIFIER] + ")\\." + "(" + src[t.NUMERICIDENTIFIER] + ")\\." + "(" + src[t.NUMERICIDENTIFIER] + ")";
tok("MAINVERSIONLOOSE");
src[t.MAINVERSIONLOOSE] = "(" + src[t.NUMERICIDENTIFIERLOOSE] + ")\\." + "(" + src[t.NUMERICIDENTIFIERLOOSE] + ")\\." + "(" + src[t.NUMERICIDENTIFIERLOOSE] + ")";
// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
tok("PRERELEASEIDENTIFIER");
src[t.PRERELEASEIDENTIFIER] = "(?:" + src[t.NUMERICIDENTIFIER] + "|" + src[t.NONNUMERICIDENTIFIER] + ")";
tok("PRERELEASEIDENTIFIERLOOSE");
src[t.PRERELEASEIDENTIFIERLOOSE] = "(?:" + src[t.NUMERICIDENTIFIERLOOSE] + "|" + src[t.NONNUMERICIDENTIFIER] + ")";
// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
tok("PRERELEASE");
src[t.PRERELEASE] = "(?:-(" + src[t.PRERELEASEIDENTIFIER] + "(?:\\." + src[t.PRERELEASEIDENTIFIER] + ")*))";
tok("PRERELEASELOOSE");
src[t.PRERELEASELOOSE] = "(?:-?(" + src[t.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + src[t.PRERELEASEIDENTIFIERLOOSE] + ")*))";
// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
tok("BUILDIDENTIFIER");
src[t.BUILDIDENTIFIER] = "[0-9A-Za-z-]+";
// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
tok("BUILD");
src[t.BUILD] = "(?:\\+(" + src[t.BUILDIDENTIFIER] + "(?:\\." + src[t.BUILDIDENTIFIER] + ")*))";
// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
tok("FULL");
tok("FULLPLAIN");
src[t.FULLPLAIN] = "v?" + src[t.MAINVERSION] + src[t.PRERELEASE] + "?" + src[t.BUILD] + "?";
src[t.FULL] = "^" + src[t.FULLPLAIN] + "$";
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
tok("LOOSEPLAIN");
src[t.LOOSEPLAIN] = "[v=\\s]*" + src[t.MAINVERSIONLOOSE] + src[t.PRERELEASELOOSE] + "?" + src[t.BUILD] + "?";
tok("LOOSE");
src[t.LOOSE] = "^" + src[t.LOOSEPLAIN] + "$";
tok("GTLT");
src[t.GTLT] = "((?:<|>)?=?)";
// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
tok("XRANGEIDENTIFIERLOOSE");
src[t.XRANGEIDENTIFIERLOOSE] = src[t.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*";
tok("XRANGEIDENTIFIER");
src[t.XRANGEIDENTIFIER] = src[t.NUMERICIDENTIFIER] + "|x|X|\\*";
tok("XRANGEPLAIN");
src[t.XRANGEPLAIN] = "[v=\\s]*(" + src[t.XRANGEIDENTIFIER] + ")" + "(?:\\.(" + src[t.XRANGEIDENTIFIER] + ")" + "(?:\\.(" + src[t.XRANGEIDENTIFIER] + ")" + "(?:" + src[t.PRERELEASE] + ")?" + src[t.BUILD] + "?" + ")?)?";
tok("XRANGEPLAINLOOSE");
src[t.XRANGEPLAINLOOSE] = "[v=\\s]*(" + src[t.XRANGEIDENTIFIERLOOSE] + ")" + "(?:\\.(" + src[t.XRANGEIDENTIFIERLOOSE] + ")" + "(?:\\.(" + src[t.XRANGEIDENTIFIERLOOSE] + ")" + "(?:" + src[t.PRERELEASELOOSE] + ")?" + src[t.BUILD] + "?" + ")?)?";
tok("XRANGE");
src[t.XRANGE] = "^" + src[t.GTLT] + "\\s*" + src[t.XRANGEPLAIN] + "$";
tok("XRANGELOOSE");
src[t.XRANGELOOSE] = "^" + src[t.GTLT] + "\\s*" + src[t.XRANGEPLAINLOOSE] + "$";
// Coercion.
// Extract anything that could conceivably be a part of a valid semver
tok("COERCE");
src[t.COERCE] = "(^|[^\\d])(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "})" + "(?:\\.(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "}))?" + "(?:\\.(\\d{1," + MAX_SAFE_COMPONENT_LENGTH + "}))?" + "(?:$|[^\\d])";
tok("COERCERTL");
re[t.COERCERTL] = new RegExp(src[t.COERCE], "g");
// Tilde ranges.
// Meaning is "reasonably at or greater than"
tok("LONETILDE");
src[t.LONETILDE] = "(?:~>?)";
tok("TILDETRIM");
src[t.TILDETRIM] = "(\\s*)" + src[t.LONETILDE] + "\\s+";
re[t.TILDETRIM] = new RegExp(src[t.TILDETRIM], "g");
var tildeTrimReplace = "$1~";
tok("TILDE");
src[t.TILDE] = "^" + src[t.LONETILDE] + src[t.XRANGEPLAIN] + "$";
tok("TILDELOOSE");
src[t.TILDELOOSE] = "^" + src[t.LONETILDE] + src[t.XRANGEPLAINLOOSE] + "$";
// Caret ranges.
// Meaning is "at least and backwards compatible with"
tok("LONECARET");
src[t.LONECARET] = "(?:\\^)";
tok("CARETTRIM");
src[t.CARETTRIM] = "(\\s*)" + src[t.LONECARET] + "\\s+";
re[t.CARETTRIM] = new RegExp(src[t.CARETTRIM], "g");
var caretTrimReplace = "$1^";
tok("CARET");
src[t.CARET] = "^" + src[t.LONECARET] + src[t.XRANGEPLAIN] + "$";
tok("CARETLOOSE");
src[t.CARETLOOSE] = "^" + src[t.LONECARET] + src[t.XRANGEPLAINLOOSE] + "$";
// A simple gt/lt/eq thing, or just "" to indicate "any version"
tok("COMPARATORLOOSE");
src[t.COMPARATORLOOSE] = "^" + src[t.GTLT] + "\\s*(" + src[t.LOOSEPLAIN] + ")$|^$";
tok("COMPARATOR");
src[t.COMPARATOR] = "^" + src[t.GTLT] + "\\s*(" + src[t.FULLPLAIN] + ")$|^$";
// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
tok("COMPARATORTRIM");
src[t.COMPARATORTRIM] = "(\\s*)" + src[t.GTLT] + "\\s*(" + src[t.LOOSEPLAIN] + "|" + src[t.XRANGEPLAIN] + ")";
// this one has to use the /g flag
re[t.COMPARATORTRIM] = new RegExp(src[t.COMPARATORTRIM], "g");
var comparatorTrimReplace = "$1$2$3";
// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
tok("HYPHENRANGE");
src[t.HYPHENRANGE] = "^\\s*(" + src[t.XRANGEPLAIN] + ")" + "\\s+-\\s+" + "(" + src[t.XRANGEPLAIN] + ")" + "\\s*$";
tok("HYPHENRANGELOOSE");
src[t.HYPHENRANGELOOSE] = "^\\s*(" + src[t.XRANGEPLAINLOOSE] + ")" + "\\s+-\\s+" + "(" + src[t.XRANGEPLAINLOOSE] + ")" + "\\s*$";
// Star ranges basically just allow anything at all.
tok("STAR");
src[t.STAR] = "(<|>)?=?\\s*\\*";
// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for(var i = 0; i < R; i++){
    debug(i, src[i]);
    if (!re[i]) re[i] = new RegExp(src[i]);
}
exports.parse = parse;
function parse(version, options) {
    if (!options || typeof options !== "object") options = {
        loose: !!options,
        includePrerelease: false
    };
    if (version instanceof SemVer) return version;
    if (typeof version !== "string") return null;
    if (version.length > MAX_LENGTH) return null;
    var r = options.loose ? re[t.LOOSE] : re[t.FULL];
    if (!r.test(version)) return null;
    try {
        return new SemVer(version, options);
    } catch (er) {
        return null;
    }
}
exports.valid = valid;
function valid(version, options) {
    var v = parse(version, options);
    return v ? v.version : null;
}
exports.clean = clean;
function clean(version, options) {
    var s = parse(version.trim().replace(/^[=v]+/, ""), options);
    return s ? s.version : null;
}
exports.SemVer = SemVer;
function SemVer(version, options) {
    if (!options || typeof options !== "object") options = {
        loose: !!options,
        includePrerelease: false
    };
    if (version instanceof SemVer) {
        if (version.loose === options.loose) return version;
        else version = version.version;
    } else if (typeof version !== "string") throw new TypeError("Invalid Version: " + version);
    if (version.length > MAX_LENGTH) throw new TypeError("version is longer than " + MAX_LENGTH + " characters");
    if (!(this instanceof SemVer)) return new SemVer(version, options);
    debug("SemVer", version, options);
    this.options = options;
    this.loose = !!options.loose;
    var m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
    if (!m) throw new TypeError("Invalid Version: " + version);
    this.raw = version;
    // these are actually numbers
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError("Invalid major version");
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError("Invalid minor version");
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError("Invalid patch version");
    // numberify any prerelease numeric ids
    if (!m[4]) this.prerelease = [];
    else this.prerelease = m[4].split(".").map(function(id) {
        if (/^[0-9]+$/.test(id)) {
            var num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
        }
        return id;
    });
    this.build = m[5] ? m[5].split(".") : [];
    this.format();
}
SemVer.prototype.format = function() {
    this.version = this.major + "." + this.minor + "." + this.patch;
    if (this.prerelease.length) this.version += "-" + this.prerelease.join(".");
    return this.version;
};
SemVer.prototype.toString = function() {
    return this.version;
};
SemVer.prototype.compare = function(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
    return this.compareMain(other) || this.comparePre(other);
};
SemVer.prototype.compareMain = function(other) {
    if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
};
SemVer.prototype.comparePre = function(other) {
    if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) return -1;
    else if (!this.prerelease.length && other.prerelease.length) return 1;
    else if (!this.prerelease.length && !other.prerelease.length) return 0;
    var i = 0;
    do {
        var a = this.prerelease[i];
        var b = other.prerelease[i];
        debug("prerelease compare", i, a, b);
        if (a === undefined && b === undefined) return 0;
        else if (b === undefined) return 1;
        else if (a === undefined) return -1;
        else if (a === b) continue;
        else return compareIdentifiers(a, b);
    }while (++i);
};
SemVer.prototype.compareBuild = function(other) {
    if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
    var i = 0;
    do {
        var a = this.build[i];
        var b = other.build[i];
        debug("prerelease compare", i, a, b);
        if (a === undefined && b === undefined) return 0;
        else if (b === undefined) return 1;
        else if (a === undefined) return -1;
        else if (a === b) continue;
        else return compareIdentifiers(a, b);
    }while (++i);
};
// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
    switch(release){
        case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier);
            break;
        case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier);
            break;
        case "prepatch":
            // If this is already a prerelease, it will bump to the next version
            // drop any prereleases that might already exist, since they are not
            // relevant at this point.
            this.prerelease.length = 0;
            this.inc("patch", identifier);
            this.inc("pre", identifier);
            break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
            if (this.prerelease.length === 0) this.inc("patch", identifier);
            this.inc("pre", identifier);
            break;
        case "major":
            // If this is a pre-major version, bump up to the same major version.
            // Otherwise increment major.
            // 1.0.0-5 bumps to 1.0.0
            // 1.1.0 bumps to 2.0.0
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
        case "minor":
            // If this is a pre-minor version, bump up to the same minor version.
            // Otherwise increment minor.
            // 1.2.0-5 bumps to 1.2.0
            // 1.2.1 bumps to 1.3.0
            if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
            this.patch = 0;
            this.prerelease = [];
            break;
        case "patch":
            // If this is not a pre-release version, it will increment the patch.
            // If it is a pre-release it will bump up to the same patch version.
            // 1.2.0-5 patches to 1.2.0
            // 1.2.0 patches to 1.2.1
            if (this.prerelease.length === 0) this.patch++;
            this.prerelease = [];
            break;
        // This probably shouldn't be used publicly.
        // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
        case "pre":
            if (this.prerelease.length === 0) this.prerelease = [
                0
            ];
            else {
                var i = this.prerelease.length;
                while(--i >= 0)if (typeof this.prerelease[i] === "number") {
                    this.prerelease[i]++;
                    i = -2;
                }
                if (i === -1) // didn't increment anything
                this.prerelease.push(0);
            }
            if (identifier) {
                // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                if (this.prerelease[0] === identifier) {
                    if (isNaN(this.prerelease[1])) this.prerelease = [
                        identifier,
                        0
                    ];
                } else this.prerelease = [
                    identifier,
                    0
                ];
            }
            break;
        default:
            throw new Error("invalid increment argument: " + release);
    }
    this.format();
    this.raw = this.version;
    return this;
};
exports.inc = inc;
function inc(version, release, loose, identifier) {
    if (typeof loose === "string") {
        identifier = loose;
        loose = undefined;
    }
    try {
        return new SemVer(version, loose).inc(release, identifier).version;
    } catch (er) {
        return null;
    }
}
exports.diff = diff;
function diff(version1, version2) {
    if (eq(version1, version2)) return null;
    else {
        var v1 = parse(version1);
        var v2 = parse(version2);
        var prefix = "";
        if (v1.prerelease.length || v2.prerelease.length) {
            prefix = "pre";
            var defaultResult = "prerelease";
        }
        for(var key in v1)if (key === "major" || key === "minor" || key === "patch") {
            if (v1[key] !== v2[key]) return prefix + key;
        }
        return defaultResult // may be undefined
        ;
    }
}
exports.compareIdentifiers = compareIdentifiers;
var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
    var anum = numeric.test(a);
    var bnum = numeric.test(b);
    if (anum && bnum) {
        a = +a;
        b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
}
exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
    return compareIdentifiers(b, a);
}
exports.major = major;
function major(a, loose) {
    return new SemVer(a, loose).major;
}
exports.minor = minor;
function minor(a, loose) {
    return new SemVer(a, loose).minor;
}
exports.patch = patch;
function patch(a, loose) {
    return new SemVer(a, loose).patch;
}
exports.compare = compare;
function compare(a, b, loose) {
    return new SemVer(a, loose).compare(new SemVer(b, loose));
}
exports.compareLoose = compareLoose;
function compareLoose(a, b) {
    return compare(a, b, true);
}
exports.compareBuild = compareBuild;
function compareBuild(a, b, loose) {
    var versionA = new SemVer(a, loose);
    var versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
}
exports.rcompare = rcompare;
function rcompare(a, b, loose) {
    return compare(b, a, loose);
}
exports.sort = sort;
function sort(list, loose) {
    return list.sort(function(a, b) {
        return exports.compareBuild(a, b, loose);
    });
}
exports.rsort = rsort;
function rsort(list, loose) {
    return list.sort(function(a, b) {
        return exports.compareBuild(b, a, loose);
    });
}
exports.gt = gt;
function gt(a, b, loose) {
    return compare(a, b, loose) > 0;
}
exports.lt = lt;
function lt(a, b, loose) {
    return compare(a, b, loose) < 0;
}
exports.eq = eq;
function eq(a, b, loose) {
    return compare(a, b, loose) === 0;
}
exports.neq = neq;
function neq(a, b, loose) {
    return compare(a, b, loose) !== 0;
}
exports.gte = gte;
function gte(a, b, loose) {
    return compare(a, b, loose) >= 0;
}
exports.lte = lte;
function lte(a, b, loose) {
    return compare(a, b, loose) <= 0;
}
exports.cmp = cmp;
function cmp(a, op, b, loose) {
    switch(op){
        case "===":
            if (typeof a === "object") a = a.version;
            if (typeof b === "object") b = b.version;
            return a === b;
        case "!==":
            if (typeof a === "object") a = a.version;
            if (typeof b === "object") b = b.version;
            return a !== b;
        case "":
        case "=":
        case "==":
            return eq(a, b, loose);
        case "!=":
            return neq(a, b, loose);
        case ">":
            return gt(a, b, loose);
        case ">=":
            return gte(a, b, loose);
        case "<":
            return lt(a, b, loose);
        case "<=":
            return lte(a, b, loose);
        default:
            throw new TypeError("Invalid operator: " + op);
    }
}
exports.Comparator = Comparator;
function Comparator(comp, options) {
    if (!options || typeof options !== "object") options = {
        loose: !!options,
        includePrerelease: false
    };
    if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) return comp;
        else comp = comp.value;
    }
    if (!(this instanceof Comparator)) return new Comparator(comp, options);
    debug("comparator", comp, options);
    this.options = options;
    this.loose = !!options.loose;
    this.parse(comp);
    if (this.semver === ANY) this.value = "";
    else this.value = this.operator + this.semver.version;
    debug("comp", this);
}
var ANY = {};
Comparator.prototype.parse = function(comp) {
    var r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
    var m = comp.match(r);
    if (!m) throw new TypeError("Invalid comparator: " + comp);
    this.operator = m[1] !== undefined ? m[1] : "";
    if (this.operator === "=") this.operator = "";
    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) this.semver = ANY;
    else this.semver = new SemVer(m[2], this.options.loose);
};
Comparator.prototype.toString = function() {
    return this.value;
};
Comparator.prototype.test = function(version) {
    debug("Comparator.test", version, this.options.loose);
    if (this.semver === ANY || version === ANY) return true;
    if (typeof version === "string") try {
        version = new SemVer(version, this.options);
    } catch (er) {
        return false;
    }
    return cmp(version, this.operator, this.semver, this.options);
};
Comparator.prototype.intersects = function(comp, options) {
    if (!(comp instanceof Comparator)) throw new TypeError("a Comparator is required");
    if (!options || typeof options !== "object") options = {
        loose: !!options,
        includePrerelease: false
    };
    var rangeTmp;
    if (this.operator === "") {
        if (this.value === "") return true;
        rangeTmp = new Range(comp.value, options);
        return satisfies(this.value, rangeTmp, options);
    } else if (comp.operator === "") {
        if (comp.value === "") return true;
        rangeTmp = new Range(this.value, options);
        return satisfies(comp.semver, rangeTmp, options);
    }
    var sameDirectionIncreasing = (this.operator === ">=" || this.operator === ">") && (comp.operator === ">=" || comp.operator === ">");
    var sameDirectionDecreasing = (this.operator === "<=" || this.operator === "<") && (comp.operator === "<=" || comp.operator === "<");
    var sameSemVer = this.semver.version === comp.semver.version;
    var differentDirectionsInclusive = (this.operator === ">=" || this.operator === "<=") && (comp.operator === ">=" || comp.operator === "<=");
    var oppositeDirectionsLessThan = cmp(this.semver, "<", comp.semver, options) && (this.operator === ">=" || this.operator === ">") && (comp.operator === "<=" || comp.operator === "<");
    var oppositeDirectionsGreaterThan = cmp(this.semver, ">", comp.semver, options) && (this.operator === "<=" || this.operator === "<") && (comp.operator === ">=" || comp.operator === ">");
    return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
};
exports.Range = Range;
function Range(range, options) {
    if (!options || typeof options !== "object") options = {
        loose: !!options,
        includePrerelease: false
    };
    if (range instanceof Range) {
        if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) return range;
        else return new Range(range.raw, options);
    }
    if (range instanceof Comparator) return new Range(range.value, options);
    if (!(this instanceof Range)) return new Range(range, options);
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    // First, split based on boolean or ||
    this.raw = range;
    this.set = range.split(/\s*\|\|\s*/).map(function(range) {
        return this.parseRange(range.trim());
    }, this).filter(function(c) {
        // throw out any that are not relevant for whatever reason
        return c.length;
    });
    if (!this.set.length) throw new TypeError("Invalid SemVer Range: " + range);
    this.format();
}
Range.prototype.format = function() {
    this.range = this.set.map(function(comps) {
        return comps.join(" ").trim();
    }).join("||").trim();
    return this.range;
};
Range.prototype.toString = function() {
    return this.range;
};
Range.prototype.parseRange = function(range) {
    var loose = this.options.loose;
    range = range.trim();
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    var hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
    range = range.replace(hr, hyphenReplace);
    debug("hyphen replace", range);
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
    debug("comparator trim", range, re[t.COMPARATORTRIM]);
    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace);
    // normalize spaces
    range = range.split(/\s+/).join(" ");
    // At this point, the range is completely trimmed and
    // ready to be split into comparators.
    var compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
    var set = range.split(" ").map(function(comp) {
        return parseComparator(comp, this.options);
    }, this).join(" ").split(/\s+/);
    if (this.options.loose) // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
        return !!comp.match(compRe);
    });
    set = set.map(function(comp) {
        return new Comparator(comp, this.options);
    }, this);
    return set;
};
Range.prototype.intersects = function(range, options) {
    if (!(range instanceof Range)) throw new TypeError("a Range is required");
    return this.set.some(function(thisComparators) {
        return isSatisfiable(thisComparators, options) && range.set.some(function(rangeComparators) {
            return isSatisfiable(rangeComparators, options) && thisComparators.every(function(thisComparator) {
                return rangeComparators.every(function(rangeComparator) {
                    return thisComparator.intersects(rangeComparator, options);
                });
            });
        });
    });
};
// take a set of comparators and determine whether there
// exists a version which can satisfy it
function isSatisfiable(comparators, options) {
    var result = true;
    var remainingComparators = comparators.slice();
    var testComparator = remainingComparators.pop();
    while(result && remainingComparators.length){
        result = remainingComparators.every(function(otherComparator) {
            return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
    }
    return result;
}
// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, options) {
    return new Range(range, options).set.map(function(comp) {
        return comp.map(function(c) {
            return c.value;
        }).join(" ").trim().split(" ");
    });
}
// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, options) {
    debug("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug("caret", comp);
    comp = replaceTildes(comp, options);
    debug("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug("xrange", comp);
    comp = replaceStars(comp, options);
    debug("stars", comp);
    return comp;
}
function isX(id) {
    return !id || id.toLowerCase() === "x" || id === "*";
}
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, options) {
    return comp.trim().split(/\s+/).map(function(comp) {
        return replaceTilde(comp, options);
    }).join(" ");
}
function replaceTilde(comp, options) {
    var r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, function(_, M, m, p, pr) {
        debug("tilde", comp, _, M, m, p, pr);
        var ret;
        if (isX(M)) ret = "";
        else if (isX(m)) ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
        else if (isX(p)) // ~1.2 == >=1.2.0 <1.3.0
        ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
        else if (pr) {
            debug("replaceTilde pr", pr);
            ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + (+m + 1) + ".0";
        } else // ~1.2.3 == >=1.2.3 <1.3.0
        ret = ">=" + M + "." + m + "." + p + " <" + M + "." + (+m + 1) + ".0";
        debug("tilde return", ret);
        return ret;
    });
}
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, options) {
    return comp.trim().split(/\s+/).map(function(comp) {
        return replaceCaret(comp, options);
    }).join(" ");
}
function replaceCaret(comp, options) {
    debug("caret", comp, options);
    var r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    return comp.replace(r, function(_, M, m, p, pr) {
        debug("caret", comp, _, M, m, p, pr);
        var ret;
        if (isX(M)) ret = "";
        else if (isX(m)) ret = ">=" + M + ".0.0 <" + (+M + 1) + ".0.0";
        else if (isX(p)) {
            if (M === "0") ret = ">=" + M + "." + m + ".0 <" + M + "." + (+m + 1) + ".0";
            else ret = ">=" + M + "." + m + ".0 <" + (+M + 1) + ".0.0";
        } else if (pr) {
            debug("replaceCaret pr", pr);
            if (M === "0") {
                if (m === "0") ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + m + "." + (+p + 1);
                else ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + M + "." + (+m + 1) + ".0";
            } else ret = ">=" + M + "." + m + "." + p + "-" + pr + " <" + (+M + 1) + ".0.0";
        } else {
            debug("no pr");
            if (M === "0") {
                if (m === "0") ret = ">=" + M + "." + m + "." + p + " <" + M + "." + m + "." + (+p + 1);
                else ret = ">=" + M + "." + m + "." + p + " <" + M + "." + (+m + 1) + ".0";
            } else ret = ">=" + M + "." + m + "." + p + " <" + (+M + 1) + ".0.0";
        }
        debug("caret return", ret);
        return ret;
    });
}
function replaceXRanges(comp, options) {
    debug("replaceXRanges", comp, options);
    return comp.split(/\s+/).map(function(comp) {
        return replaceXRange(comp, options);
    }).join(" ");
}
function replaceXRange(comp, options) {
    comp = comp.trim();
    var r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        var xM = isX(M);
        var xm = xM || isX(m);
        var xp = xm || isX(p);
        var anyX = xp;
        if (gtlt === "=" && anyX) gtlt = "";
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
            if (gtlt === ">" || gtlt === "<") // nothing is allowed
            ret = "<0.0.0-0";
            else // nothing is forbidden
            ret = "*";
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) m = 0;
            p = 0;
            if (gtlt === ">") {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                // >1.2.3 => >= 1.2.4
                gtlt = ">=";
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === "<=") {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = "<";
                if (xm) M = +M + 1;
                else m = +m + 1;
            }
            ret = gtlt + M + "." + m + "." + p + pr;
        } else if (xm) ret = ">=" + M + ".0.0" + pr + " <" + (+M + 1) + ".0.0" + pr;
        else if (xp) ret = ">=" + M + "." + m + ".0" + pr + " <" + M + "." + (+m + 1) + ".0" + pr;
        debug("xRange return", ret);
        return ret;
    });
}
// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, options) {
    debug("replaceStars", comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], "");
}
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
    if (isX(fM)) from = "";
    else if (isX(fm)) from = ">=" + fM + ".0.0";
    else if (isX(fp)) from = ">=" + fM + "." + fm + ".0";
    else from = ">=" + from;
    if (isX(tM)) to = "";
    else if (isX(tm)) to = "<" + (+tM + 1) + ".0.0";
    else if (isX(tp)) to = "<" + tM + "." + (+tm + 1) + ".0";
    else if (tpr) to = "<=" + tM + "." + tm + "." + tp + "-" + tpr;
    else to = "<=" + to;
    return (from + " " + to).trim();
}
// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
    if (!version) return false;
    if (typeof version === "string") try {
        version = new SemVer(version, this.options);
    } catch (er) {
        return false;
    }
    for(var i = 0; i < this.set.length; i++){
        if (testSet(this.set[i], version, this.options)) return true;
    }
    return false;
};
function testSet(set, version, options) {
    for(var i = 0; i < set.length; i++){
        if (!set[i].test(version)) return false;
    }
    if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for(i = 0; i < set.length; i++){
            debug(set[i].semver);
            if (set[i].semver === ANY) continue;
            if (set[i].semver.prerelease.length > 0) {
                var allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
            }
        }
        // Version has a -pre, but it's not one of the ones we like.
        return false;
    }
    return true;
}
exports.satisfies = satisfies;
function satisfies(version, range, options) {
    try {
        range = new Range(range, options);
    } catch (er) {
        return false;
    }
    return range.test(version);
}
exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, options) {
    var max = null;
    var maxSV = null;
    try {
        var rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach(function(v) {
        if (rangeObj.test(v)) // satisfies(v, range, options)
        {
            if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
            }
        }
    });
    return max;
}
exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, options) {
    var min = null;
    var minSV = null;
    try {
        var rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach(function(v) {
        if (rangeObj.test(v)) // satisfies(v, range, options)
        {
            if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
            }
        }
    });
    return min;
}
exports.minVersion = minVersion;
function minVersion(range, loose) {
    range = new Range(range, loose);
    var minver = new SemVer("0.0.0");
    if (range.test(minver)) return minver;
    minver = new SemVer("0.0.0-0");
    if (range.test(minver)) return minver;
    minver = null;
    for(var i = 0; i < range.set.length; ++i){
        var comparators = range.set[i];
        comparators.forEach(function(comparator) {
            // Clone to avoid manipulating the comparator's semver object.
            var compver = new SemVer(comparator.semver.version);
            switch(comparator.operator){
                case ">":
                    if (compver.prerelease.length === 0) compver.patch++;
                    else compver.prerelease.push(0);
                    compver.raw = compver.format();
                /* fallthrough */ case "":
                case ">=":
                    if (!minver || gt(minver, compver)) minver = compver;
                    break;
                case "<":
                case "<=":
                    break;
                /* istanbul ignore next */ default:
                    throw new Error("Unexpected operation: " + comparator.operator);
            }
        });
    }
    if (minver && range.test(minver)) return minver;
    return null;
}
exports.validRange = validRange;
function validRange(range, options) {
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || "*";
    } catch (er) {
        return null;
    }
}
// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, options) {
    return outside(version, range, "<", options);
}
// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, options) {
    return outside(version, range, ">", options);
}
exports.outside = outside;
function outside(version, range, hilo, options) {
    version = new SemVer(version, options);
    range = new Range(range, options);
    var gtfn, ltefn, ltfn, comp, ecomp;
    switch(hilo){
        case ">":
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = ">";
            ecomp = ">=";
            break;
        case "<":
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = "<";
            ecomp = "<=";
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    // If it satisifes the range it is not outside
    if (satisfies(version, range, options)) return false;
    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    for(var i = 0; i < range.set.length; ++i){
        var comparators = range.set[i];
        var high = null;
        var low = null;
        comparators.forEach(function(comparator) {
            if (comparator.semver === ANY) comparator = new Comparator(">=0.0.0");
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) high = comparator;
            else if (ltfn(comparator.semver, low.semver, options)) low = comparator;
        });
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) return false;
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) return false;
        else if (low.operator === ecomp && ltfn(version, low.semver)) return false;
    }
    return true;
}
exports.prerelease = prerelease;
function prerelease(version, options) {
    var parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
}
exports.intersects = intersects;
function intersects(r1, r2, options) {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2);
}
exports.coerce = coerce;
function coerce(version, options) {
    if (version instanceof SemVer) return version;
    if (typeof version === "number") version = String(version);
    if (typeof version !== "string") return null;
    options = options || {};
    var match = null;
    if (!options.rtl) match = version.match(re[t.COERCE]);
    else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        var next;
        while((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)){
            if (!match || next.index + next[0].length !== match.index + match[0].length) match = next;
            re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        re[t.COERCERTL].lastIndex = -1;
    }
    if (match === null) return null;
    return parse(match[2] + "." + (match[3] || "0") + "." + (match[4] || "0"), options);
}

},{"190bd44ee51ed65f":"d5jf4"}],"1ihxe":[function(require,module,exports) {
var process = require("4fca93479ad8a4cb");
const cp = require("ab1556c6638b04b9");
const fs = require("387e9f3969378f17");
const path = require("7edfcf1ee00e3f38");
const util = require("6fffeca3a070bc09");
/**
 * @function Object() { [native code] }
 * @param {number} code Error code.
 * @param {string} message Error message.
 */ function ProcessError(code, message) {
    const callee = arguments.callee;
    Error.apply(this, [
        message
    ]);
    Error.captureStackTrace(this, callee);
    this.code = code;
    this.message = message;
    this.name = callee.name;
}
util.inherits(ProcessError, Error);
/**
 * Util function for handling spawned processes as promises.
 * @param {string} exe Executable.
 * @param {Array<string>} args Arguments.
 * @param {string} cwd Working directory.
 * @return {Promise} A promise.
 */ function spawn(exe, args, cwd) {
    return new Promise((resolve, reject)=>{
        const child = cp.spawn(exe, args, {
            cwd: cwd || process.cwd()
        });
        const buffer = [];
        child.stderr.on("data", (chunk)=>{
            buffer.push(chunk.toString());
        });
        child.stdout.on("data", (chunk)=>{
            buffer.push(chunk.toString());
        });
        child.on("close", (code)=>{
            const output = buffer.join("");
            if (code) {
                const msg = output || "Process failed: " + code;
                reject(new ProcessError(code, msg));
            } else resolve(output);
        });
    });
}
/**
 * Create an object for executing git commands.
 * @param {string} cwd Repository directory.
 * @param {string} cmd Git executable (full path if not already on path).
 * @function Object() { [native code] }
 */ function Git(cwd, cmd) {
    this.cwd = cwd;
    this.cmd = cmd || "git";
    this.output = "";
}
/**
 * Execute an arbitrary git command.
 * @param {Array<string>} args Arguments (e.g. ['remote', 'update']).
 * @return {Promise} A promise.  The promise will be resolved with this instance
 *     or rejected with an error.
 */ Git.prototype.exec = function(...args) {
    return spawn(this.cmd, [
        ...args
    ], this.cwd).then((output)=>{
        this.output = output;
        return this;
    });
};
/**
 * Initialize repository.
 * @return {Promise} A promise.
 */ Git.prototype.init = function() {
    return this.exec("init");
};
/**
 * Clean up unversioned files.
 * @return {Promise} A promise.
 */ Git.prototype.clean = function() {
    return this.exec("clean", "-f", "-d");
};
/**
 * Hard reset to remote/branch
 * @param {string} remote Remote alias.
 * @param {string} branch Branch name.
 * @return {Promise} A promise.
 */ Git.prototype.reset = function(remote, branch) {
    return this.exec("reset", "--hard", remote + "/" + branch);
};
/**
 * Fetch from a remote.
 * @param {string} remote Remote alias.
 * @return {Promise} A promise.
 */ Git.prototype.fetch = function(remote) {
    return this.exec("fetch", remote);
};
/**
 * Checkout a branch (create an orphan if it doesn't exist on the remote).
 * @param {string} remote Remote alias.
 * @param {string} branch Branch name.
 * @return {Promise} A promise.
 */ Git.prototype.checkout = function(remote, branch) {
    const treeish = remote + "/" + branch;
    return this.exec("ls-remote", "--exit-code", ".", treeish).then(()=>{
        // branch exists on remote, hard reset
        return this.exec("checkout", branch).then(()=>this.clean()).then(()=>this.reset(remote, branch));
    }, (error)=>{
        if (error instanceof ProcessError && error.code === 2) // branch doesn't exist, create an orphan
        return this.exec("checkout", "--orphan", branch);
        else // unhandled error
        throw error;
    });
};
/**
 * Remove all unversioned files.
 * @param {string | Array<string>} files Files argument.
 * @return {Promise} A promise.
 */ Git.prototype.rm = function(files) {
    if (!Array.isArray(files)) files = [
        files
    ];
    return this.exec("rm", "--ignore-unmatch", "-r", "-f", ...files);
};
/**
 * Add files.
 * @param {string | Array<string>} files Files argument.
 * @return {Promise} A promise.
 */ Git.prototype.add = function(files) {
    if (!Array.isArray(files)) files = [
        files
    ];
    return this.exec("add", ...files);
};
/**
 * Commit (if there are any changes).
 * @param {string} message Commit message.
 * @return {Promise} A promise.
 */ Git.prototype.commit = function(message) {
    return this.exec("diff-index", "--quiet", "HEAD").catch(()=>this.exec("commit", "-m", message));
};
/**
 * Add tag
 * @param {string} name Name of tag.
 * @return {Promise} A promise.
 */ Git.prototype.tag = function(name) {
    return this.exec("tag", name);
};
/**
 * Push a branch.
 * @param {string} remote Remote alias.
 * @param {string} branch Branch name.
 * @param {boolean} force Force push.
 * @return {Promise} A promise.
 */ Git.prototype.push = function(remote, branch, force) {
    const args = [
        "push",
        "--tags",
        remote,
        branch
    ];
    if (force) args.push("--force");
    return this.exec.apply(this, args);
};
/**
 * Get the URL for a remote.
 * @param {string} remote Remote alias.
 * @return {Promise<string>} A promise for the remote URL.
 */ Git.prototype.getRemoteUrl = function(remote) {
    return this.exec("config", "--get", "remote." + remote + ".url").then((git)=>{
        const repo = git.output && git.output.split(/[\n\r]/).shift();
        if (repo) return repo;
        else throw new Error("Failed to get repo URL from options or current directory.");
    }).catch((err)=>{
        throw new Error("Failed to get remote." + remote + ".url (task must either be " + "run in a git repository with a configured " + remote + " remote " + 'or must be configured with the "repo" option).');
    });
};
/**
 * Delete ref to remove branch history
 * @param {string} branch The branch name.
 * @return {Promise} A promise.  The promise will be resolved with this instance
 *     or rejected with an error.
 */ Git.prototype.deleteRef = function(branch) {
    return this.exec("update-ref", "-d", "refs/heads/" + branch);
};
/**
 * Clone a repo into the given dir if it doesn't already exist.
 * @param {string} repo Repository URL.
 * @param {string} dir Target directory.
 * @param {string} branch Branch name.
 * @param {options} options All options.
 * @return {Promise<Git>} A promise.
 */ Git.clone = function clone(repo, dir, branch, options) {
    return fs.exists(dir).then((exists)=>{
        if (exists) return Promise.resolve(new Git(dir, options.git));
        else return fs.mkdirp(path.dirname(path.resolve(dir))).then(()=>{
            const args = [
                "clone",
                repo,
                dir,
                "--branch",
                branch,
                "--single-branch",
                "--origin",
                options.remote,
                "--depth",
                options.depth
            ];
            return spawn(options.git, args).catch((err)=>{
                // try again without branch or depth options
                return spawn(options.git, [
                    "clone",
                    repo,
                    dir,
                    "--origin",
                    options.remote
                ]);
            }).then(()=>new Git(dir, options.git));
        });
    });
};
module.exports = Git;

},{"4fca93479ad8a4cb":"d5jf4","ab1556c6638b04b9":"jhUEF","387e9f3969378f17":"aj3Cz","7edfcf1ee00e3f38":"loE3o","6fffeca3a070bc09":"cxohQ"}],"aj3Cz":[function(require,module,exports) {
"use strict";
module.exports = Object.assign({}, // Export promiseified graceful-fs:
require("69014387b12c9e7f"), // Export extra methods:
require("aa41ca993d5075d0"), require("70da8016638a544"), require("76c22f12bb933e7e"), require("2e437404ed924596"), require("a3680cc5cd0857d3"), require("f4190b9fd69bfd4f"), require("ebed698971b79fb8"), require("8db78a07904d15ea"), require("7a06dd79f3bdfd4a"), require("c68dd2febbd0f5c9"), require("cb3b88ca17d1a852"));
// Export fs.promises as a getter property so that we don't trigger
// ExperimentalWarning before fs.promises is actually accessed.
const fs = require("52624daeb8e33dd");
if (Object.getOwnPropertyDescriptor(fs, "promises")) Object.defineProperty(module.exports, "promises", {
    get () {
        return fs.promises;
    }
});

},{"69014387b12c9e7f":"gwOwH","aa41ca993d5075d0":"bEP9t","70da8016638a544":"ifEND","76c22f12bb933e7e":"bnqqU","2e437404ed924596":"b66Ms","a3680cc5cd0857d3":"5ZoF1","f4190b9fd69bfd4f":"bCV4J","ebed698971b79fb8":"dIHuK","8db78a07904d15ea":"fmtjg","7a06dd79f3bdfd4a":"csLbB","c68dd2febbd0f5c9":"aA7AS","cb3b88ca17d1a852":"6tAdJ","52624daeb8e33dd":"jhUEF"}],"gwOwH":[function(require,module,exports) {
"use strict";
// This is adapted from https://github.com/normalize/mz
// Copyright (c) 2014-2016 Jonathan Ong me@jongleberry.com and Contributors
const u = require("7c19d06662e592c2").fromCallback;
const fs = require("4ac8b77667314542");
const api = [
    "access",
    "appendFile",
    "chmod",
    "chown",
    "close",
    "copyFile",
    "fchmod",
    "fchown",
    "fdatasync",
    "fstat",
    "fsync",
    "ftruncate",
    "futimes",
    "lchown",
    "lchmod",
    "link",
    "lstat",
    "mkdir",
    "mkdtemp",
    "open",
    "readFile",
    "readdir",
    "readlink",
    "realpath",
    "rename",
    "rmdir",
    "stat",
    "symlink",
    "truncate",
    "unlink",
    "utimes",
    "writeFile"
].filter((key)=>{
    // Some commands are not available on some systems. Ex:
    // fs.copyFile was added in Node.js v8.5.0
    // fs.mkdtemp was added in Node.js v5.10.0
    // fs.lchown is not available on at least some Linux
    return typeof fs[key] === "function";
});
// Export all keys:
Object.keys(fs).forEach((key)=>{
    if (key === "promises") // fs.promises is a getter property that triggers ExperimentalWarning
    // Don't re-export it here, the getter is defined in "lib/index.js"
    return;
    exports[key] = fs[key];
});
// Universalify async methods:
api.forEach((method)=>{
    exports[method] = u(fs[method]);
});
// We differ from mz/fs in that we still ship the old, broken, fs.exists()
// since we are a drop-in replacement for the native module
exports.exists = function(filename, callback) {
    if (typeof callback === "function") return fs.exists(filename, callback);
    return new Promise((resolve)=>{
        return fs.exists(filename, resolve);
    });
};
// fs.read() & fs.write need special treatment due to multiple callback args
exports.read = function(fd, buffer, offset, length, position, callback) {
    if (typeof callback === "function") return fs.read(fd, buffer, offset, length, position, callback);
    return new Promise((resolve, reject)=>{
        fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer)=>{
            if (err) return reject(err);
            resolve({
                bytesRead,
                buffer
            });
        });
    });
};
// Function signature can be
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// OR
// fs.write(fd, string[, position[, encoding]], callback)
// We need to handle both cases, so we use ...args
exports.write = function(fd, buffer, ...args) {
    if (typeof args[args.length - 1] === "function") return fs.write(fd, buffer, ...args);
    return new Promise((resolve, reject)=>{
        fs.write(fd, buffer, ...args, (err, bytesWritten, buffer)=>{
            if (err) return reject(err);
            resolve({
                bytesWritten,
                buffer
            });
        });
    });
};
// fs.realpath.native only available in Node v9.2+
if (typeof fs.realpath.native === "function") exports.realpath.native = u(fs.realpath.native);

},{"7c19d06662e592c2":"kyfTT","4ac8b77667314542":"cASLk"}],"kyfTT":[function(require,module,exports) {
"use strict";
exports.fromCallback = function(fn) {
    return Object.defineProperty(function() {
        if (typeof arguments[arguments.length - 1] === "function") fn.apply(this, arguments);
        else return new Promise((resolve, reject)=>{
            arguments[arguments.length] = (err, res)=>{
                if (err) return reject(err);
                resolve(res);
            };
            arguments.length++;
            fn.apply(this, arguments);
        });
    }, "name", {
        value: fn.name
    });
};
exports.fromPromise = function(fn) {
    return Object.defineProperty(function() {
        const cb = arguments[arguments.length - 1];
        if (typeof cb !== "function") return fn.apply(this, arguments);
        else fn.apply(this, arguments).then((r)=>cb(null, r), cb);
    }, "name", {
        value: fn.name
    });
};

},{}],"cASLk":[function(require,module,exports) {
var global = arguments[3];
var process = require("1d43a6e0d5593b0");
var fs = require("f243c08ccd73509c");
var polyfills = require("caf3f41b5711a6d8");
var legacy = require("77d9d0017ec80cfd");
var clone = require("ef2d0310db9809e5");
var util = require("f7b43a0007943ede");
/* istanbul ignore next - node 0.x polyfill */ var gracefulQueue;
var previousSymbol;
/* istanbul ignore else - node 0.x polyfill */ if (typeof Symbol === "function" && typeof Symbol.for === "function") {
    gracefulQueue = Symbol.for("graceful-fs.queue");
    // This is used in testing by future versions
    previousSymbol = Symbol.for("graceful-fs.previous");
} else {
    gracefulQueue = "___graceful-fs.queue";
    previousSymbol = "___graceful-fs.previous";
}
function noop() {}
function publishQueue(context, queue) {
    Object.defineProperty(context, gracefulQueue, {
        get: function() {
            return queue;
        }
    });
}
var debug = noop;
if (util.debuglog) debug = util.debuglog("gfs4");
else if (/\bgfs4\b/i.test("")) debug = function() {
    var m = util.format.apply(util, arguments);
    m = "GFS4: " + m.split(/\n/).join("\nGFS4: ");
    console.error(m);
};
// Once time initialization
if (!fs[gracefulQueue]) {
    // This queue can be shared by multiple loaded instances
    var queue = global[gracefulQueue] || [];
    publishQueue(fs, queue);
    // Patch fs.close/closeSync to shared queue version, because we need
    // to retry() whenever a close happens *anywhere* in the program.
    // This is essential when multiple graceful-fs instances are
    // in play at the same time.
    fs.close = function(fs$close) {
        function close(fd, cb) {
            return fs$close.call(fs, fd, function(err) {
                // This function uses the graceful-fs shared queue
                if (!err) resetQueue();
                if (typeof cb === "function") cb.apply(this, arguments);
            });
        }
        Object.defineProperty(close, previousSymbol, {
            value: fs$close
        });
        return close;
    }(fs.close);
    fs.closeSync = function(fs$closeSync) {
        function closeSync(fd) {
            // This function uses the graceful-fs shared queue
            fs$closeSync.apply(fs, arguments);
            resetQueue();
        }
        Object.defineProperty(closeSync, previousSymbol, {
            value: fs$closeSync
        });
        return closeSync;
    }(fs.closeSync);
    if (/\bgfs4\b/i.test("")) process.on("exit", function() {
        debug(fs[gracefulQueue]);
        require("87c021a6d5956f72").equal(fs[gracefulQueue].length, 0);
    });
}
if (!global[gracefulQueue]) publishQueue(global, fs[gracefulQueue]);
module.exports = patch(clone(fs));
function patch(fs) {
    // Everything that references the open() function needs to be in here
    polyfills(fs);
    fs.gracefulify = patch;
    fs.createReadStream = createReadStream;
    fs.createWriteStream = createWriteStream;
    var fs$readFile = fs.readFile;
    fs.readFile = readFile;
    function readFile(path, options, cb) {
        if (typeof options === "function") cb = options, options = null;
        return go$readFile(path, options, cb);
        function go$readFile(path, options, cb, startTime) {
            return fs$readFile(path, options, function(err) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                    go$readFile,
                    [
                        path,
                        options,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else if (typeof cb === "function") cb.apply(this, arguments);
            });
        }
    }
    var fs$writeFile = fs.writeFile;
    fs.writeFile = writeFile;
    function writeFile(path, data, options, cb) {
        if (typeof options === "function") cb = options, options = null;
        return go$writeFile(path, data, options, cb);
        function go$writeFile(path, data, options, cb, startTime) {
            return fs$writeFile(path, data, options, function(err) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                    go$writeFile,
                    [
                        path,
                        data,
                        options,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else if (typeof cb === "function") cb.apply(this, arguments);
            });
        }
    }
    var fs$appendFile = fs.appendFile;
    if (fs$appendFile) fs.appendFile = appendFile;
    function appendFile(path, data, options, cb) {
        if (typeof options === "function") cb = options, options = null;
        return go$appendFile(path, data, options, cb);
        function go$appendFile(path, data, options, cb, startTime) {
            return fs$appendFile(path, data, options, function(err) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                    go$appendFile,
                    [
                        path,
                        data,
                        options,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else if (typeof cb === "function") cb.apply(this, arguments);
            });
        }
    }
    var fs$copyFile = fs.copyFile;
    if (fs$copyFile) fs.copyFile = copyFile;
    function copyFile(src, dest, flags, cb) {
        if (typeof flags === "function") {
            cb = flags;
            flags = 0;
        }
        return go$copyFile(src, dest, flags, cb);
        function go$copyFile(src, dest, flags, cb, startTime) {
            return fs$copyFile(src, dest, flags, function(err) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                    go$copyFile,
                    [
                        src,
                        dest,
                        flags,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else if (typeof cb === "function") cb.apply(this, arguments);
            });
        }
    }
    var fs$readdir = fs.readdir;
    fs.readdir = readdir;
    var noReaddirOptionVersions = /^v[0-5]\./;
    function readdir(path, options, cb) {
        if (typeof options === "function") cb = options, options = null;
        var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir(path, options, cb, startTime) {
            return fs$readdir(path, fs$readdirCallback(path, options, cb, startTime));
        } : function go$readdir(path, options, cb, startTime) {
            return fs$readdir(path, options, fs$readdirCallback(path, options, cb, startTime));
        };
        return go$readdir(path, options, cb);
        function fs$readdirCallback(path, options, cb, startTime) {
            return function(err, files) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                    go$readdir,
                    [
                        path,
                        options,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else {
                    if (files && files.sort) files.sort();
                    if (typeof cb === "function") cb.call(this, err, files);
                }
            };
        }
    }
    if (process.version.substr(0, 4) === "v0.8") {
        var legStreams = legacy(fs);
        ReadStream = legStreams.ReadStream;
        WriteStream = legStreams.WriteStream;
    }
    var fs$ReadStream = fs.ReadStream;
    if (fs$ReadStream) {
        ReadStream.prototype = Object.create(fs$ReadStream.prototype);
        ReadStream.prototype.open = ReadStream$open;
    }
    var fs$WriteStream = fs.WriteStream;
    if (fs$WriteStream) {
        WriteStream.prototype = Object.create(fs$WriteStream.prototype);
        WriteStream.prototype.open = WriteStream$open;
    }
    Object.defineProperty(fs, "ReadStream", {
        get: function() {
            return ReadStream;
        },
        set: function(val) {
            ReadStream = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(fs, "WriteStream", {
        get: function() {
            return WriteStream;
        },
        set: function(val) {
            WriteStream = val;
        },
        enumerable: true,
        configurable: true
    });
    // legacy names
    var FileReadStream = ReadStream;
    Object.defineProperty(fs, "FileReadStream", {
        get: function() {
            return FileReadStream;
        },
        set: function(val) {
            FileReadStream = val;
        },
        enumerable: true,
        configurable: true
    });
    var FileWriteStream = WriteStream;
    Object.defineProperty(fs, "FileWriteStream", {
        get: function() {
            return FileWriteStream;
        },
        set: function(val) {
            FileWriteStream = val;
        },
        enumerable: true,
        configurable: true
    });
    function ReadStream(path, options) {
        if (this instanceof ReadStream) return fs$ReadStream.apply(this, arguments), this;
        else return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
    }
    function ReadStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
                if (that.autoClose) that.destroy();
                that.emit("error", err);
            } else {
                that.fd = fd;
                that.emit("open", fd);
                that.read();
            }
        });
    }
    function WriteStream(path, options) {
        if (this instanceof WriteStream) return fs$WriteStream.apply(this, arguments), this;
        else return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
    }
    function WriteStream$open() {
        var that = this;
        open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
                that.destroy();
                that.emit("error", err);
            } else {
                that.fd = fd;
                that.emit("open", fd);
            }
        });
    }
    function createReadStream(path, options) {
        return new fs.ReadStream(path, options);
    }
    function createWriteStream(path, options) {
        return new fs.WriteStream(path, options);
    }
    var fs$open = fs.open;
    fs.open = open;
    function open(path, flags, mode, cb) {
        if (typeof mode === "function") cb = mode, mode = null;
        return go$open(path, flags, mode, cb);
        function go$open(path, flags, mode, cb, startTime) {
            return fs$open(path, flags, mode, function(err, fd) {
                if (err && (err.code === "EMFILE" || err.code === "ENFILE")) enqueue([
                    go$open,
                    [
                        path,
                        flags,
                        mode,
                        cb
                    ],
                    err,
                    startTime || Date.now(),
                    Date.now()
                ]);
                else if (typeof cb === "function") cb.apply(this, arguments);
            });
        }
    }
    return fs;
}
function enqueue(elem) {
    debug("ENQUEUE", elem[0].name, elem[1]);
    fs[gracefulQueue].push(elem);
    retry();
}
// keep track of the timeout between retry() calls
var retryTimer;
// reset the startTime and lastTime to now
// this resets the start of the 60 second overall timeout as well as the
// delay between attempts so that we'll retry these jobs sooner
function resetQueue() {
    var now = Date.now();
    for(var i = 0; i < fs[gracefulQueue].length; ++i)// entries that are only a length of 2 are from an older version, don't
    // bother modifying those since they'll be retried anyway.
    if (fs[gracefulQueue][i].length > 2) {
        fs[gracefulQueue][i][3] = now // startTime
        ;
        fs[gracefulQueue][i][4] = now // lastTime
        ;
    }
    // call retry to make sure we're actively processing the queue
    retry();
}
function retry() {
    // clear the timer and remove it to help prevent unintended concurrency
    clearTimeout(retryTimer);
    retryTimer = undefined;
    if (fs[gracefulQueue].length === 0) return;
    var elem = fs[gracefulQueue].shift();
    var fn = elem[0];
    var args = elem[1];
    // these items may be unset if they were added by an older graceful-fs
    var err = elem[2];
    var startTime = elem[3];
    var lastTime = elem[4];
    // if we don't have a startTime we have no way of knowing if we've waited
    // long enough, so go ahead and retry this item now
    if (startTime === undefined) {
        debug("RETRY", fn.name, args);
        fn.apply(null, args);
    } else if (Date.now() - startTime >= 60000) {
        // it's been more than 60 seconds total, bail now
        debug("TIMEOUT", fn.name, args);
        var cb = args.pop();
        if (typeof cb === "function") cb.call(null, err);
    } else {
        // the amount of time between the last attempt and right now
        var sinceAttempt = Date.now() - lastTime;
        // the amount of time between when we first tried, and when we last tried
        // rounded up to at least 1
        var sinceStart = Math.max(lastTime - startTime, 1);
        // backoff. wait longer than the total time we've been retrying, but only
        // up to a maximum of 100ms
        var desiredDelay = Math.min(sinceStart * 1.2, 100);
        // it's been long enough since the last retry, do it again
        if (sinceAttempt >= desiredDelay) {
            debug("RETRY", fn.name, args);
            fn.apply(null, args.concat([
                startTime
            ]));
        } else // if we can't do this job yet, push it to the end of the queue
        // and let the next iteration check again
        fs[gracefulQueue].push(elem);
    }
    // schedule our next run if one isn't already scheduled
    if (retryTimer === undefined) retryTimer = setTimeout(retry, 0);
}

},{"1d43a6e0d5593b0":"d5jf4","f243c08ccd73509c":"jhUEF","caf3f41b5711a6d8":"kMK7F","77d9d0017ec80cfd":"lYykE","ef2d0310db9809e5":"lJTUU","f7b43a0007943ede":"cxohQ","87c021a6d5956f72":"f3tT4"}],"kMK7F":[function(require,module,exports) {
var process = require("c32553035e4480ce");
var constants = require("f6d0a5a1b2281a3");
var origCwd = process.cwd;
var cwd = null;
var platform = (0, process.platform);
process.cwd = function() {
    if (!cwd) cwd = origCwd.call(process);
    return cwd;
};
try {
    process.cwd();
} catch (er) {}
// This check is needed until node.js 12 is required
if (typeof process.chdir === "function") {
    var chdir = process.chdir;
    process.chdir = function(d) {
        cwd = null;
        chdir.call(process, d);
    };
    if (Object.setPrototypeOf) Object.setPrototypeOf(process.chdir, chdir);
}
module.exports = patch;
function patch(fs) {
    // (re-)implement some things that are known busted or missing.
    // lchmod, broken prior to 0.6.2
    // back-port the fix here.
    if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) patchLchmod(fs);
    // lutimes implementation, or no-op
    if (!fs.lutimes) patchLutimes(fs);
    // https://github.com/isaacs/node-graceful-fs/issues/4
    // Chown should not fail on einval or eperm if non-root.
    // It should not fail on enosys ever, as this just indicates
    // that a fs doesn't support the intended operation.
    fs.chown = chownFix(fs.chown);
    fs.fchown = chownFix(fs.fchown);
    fs.lchown = chownFix(fs.lchown);
    fs.chmod = chmodFix(fs.chmod);
    fs.fchmod = chmodFix(fs.fchmod);
    fs.lchmod = chmodFix(fs.lchmod);
    fs.chownSync = chownFixSync(fs.chownSync);
    fs.fchownSync = chownFixSync(fs.fchownSync);
    fs.lchownSync = chownFixSync(fs.lchownSync);
    fs.chmodSync = chmodFixSync(fs.chmodSync);
    fs.fchmodSync = chmodFixSync(fs.fchmodSync);
    fs.lchmodSync = chmodFixSync(fs.lchmodSync);
    fs.stat = statFix(fs.stat);
    fs.fstat = statFix(fs.fstat);
    fs.lstat = statFix(fs.lstat);
    fs.statSync = statFixSync(fs.statSync);
    fs.fstatSync = statFixSync(fs.fstatSync);
    fs.lstatSync = statFixSync(fs.lstatSync);
    // if lchmod/lchown do not exist, then make them no-ops
    if (fs.chmod && !fs.lchmod) {
        fs.lchmod = function(path, mode, cb) {
            if (cb) process.nextTick(cb);
        };
        fs.lchmodSync = function() {};
    }
    if (fs.chown && !fs.lchown) {
        fs.lchown = function(path, uid, gid, cb) {
            if (cb) process.nextTick(cb);
        };
        fs.lchownSync = function() {};
    }
    // on Windows, A/V software can lock the directory, causing this
    // to fail with an EACCES or EPERM if the directory contains newly
    // created files.  Try again on failure, for up to 60 seconds.
    // Set the timeout this long because some Windows Anti-Virus, such as Parity
    // bit9, may lock files for up to a minute, causing npm package install
    // failures. Also, take care to yield the scheduler. Windows scheduling gives
    // CPU to a busy looping process, which can cause the program causing the lock
    // contention to be starved of CPU by node, so the contention doesn't resolve.
    if (platform === "win32") fs.rename = typeof fs.rename !== "function" ? fs.rename : function(fs$rename) {
        function rename(from, to, cb) {
            var start = Date.now();
            var backoff = 0;
            fs$rename(from, to, function CB(er) {
                if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 60000) {
                    setTimeout(function() {
                        fs.stat(to, function(stater, st) {
                            if (stater && stater.code === "ENOENT") fs$rename(from, to, CB);
                            else cb(er);
                        });
                    }, backoff);
                    if (backoff < 100) backoff += 10;
                    return;
                }
                if (cb) cb(er);
            });
        }
        if (Object.setPrototypeOf) Object.setPrototypeOf(rename, fs$rename);
        return rename;
    }(fs.rename);
    // if read() returns EAGAIN, then just try it again.
    fs.read = typeof fs.read !== "function" ? fs.read : function(fs$read) {
        function read(fd, buffer, offset, length, position, callback_) {
            var callback;
            if (callback_ && typeof callback_ === "function") {
                var eagCounter = 0;
                callback = function(er, _, __) {
                    if (er && er.code === "EAGAIN" && eagCounter < 10) {
                        eagCounter++;
                        return fs$read.call(fs, fd, buffer, offset, length, position, callback);
                    }
                    callback_.apply(this, arguments);
                };
            }
            return fs$read.call(fs, fd, buffer, offset, length, position, callback);
        }
        // This ensures `util.promisify` works as it does for native `fs.read`.
        if (Object.setPrototypeOf) Object.setPrototypeOf(read, fs$read);
        return read;
    }(fs.read);
    fs.readSync = typeof fs.readSync !== "function" ? fs.readSync : function(fs$readSync) {
        return function(fd, buffer, offset, length, position) {
            var eagCounter = 0;
            while(true)try {
                return fs$readSync.call(fs, fd, buffer, offset, length, position);
            } catch (er) {
                if (er.code === "EAGAIN" && eagCounter < 10) {
                    eagCounter++;
                    continue;
                }
                throw er;
            }
        };
    }(fs.readSync);
    function patchLchmod(fs) {
        fs.lchmod = function(path, mode, callback) {
            fs.open(path, constants.O_WRONLY | constants.O_SYMLINK, mode, function(err, fd) {
                if (err) {
                    if (callback) callback(err);
                    return;
                }
                // prefer to return the chmod error, if one occurs,
                // but still try to close, and report closing errors if they occur.
                fs.fchmod(fd, mode, function(err) {
                    fs.close(fd, function(err2) {
                        if (callback) callback(err || err2);
                    });
                });
            });
        };
        fs.lchmodSync = function(path, mode) {
            var fd = fs.openSync(path, constants.O_WRONLY | constants.O_SYMLINK, mode);
            // prefer to return the chmod error, if one occurs,
            // but still try to close, and report closing errors if they occur.
            var threw = true;
            var ret;
            try {
                ret = fs.fchmodSync(fd, mode);
                threw = false;
            } finally{
                if (threw) try {
                    fs.closeSync(fd);
                } catch (er) {}
                else fs.closeSync(fd);
            }
            return ret;
        };
    }
    function patchLutimes(fs) {
        if (constants.hasOwnProperty("O_SYMLINK") && fs.futimes) {
            fs.lutimes = function(path, at, mt, cb) {
                fs.open(path, constants.O_SYMLINK, function(er, fd) {
                    if (er) {
                        if (cb) cb(er);
                        return;
                    }
                    fs.futimes(fd, at, mt, function(er) {
                        fs.close(fd, function(er2) {
                            if (cb) cb(er || er2);
                        });
                    });
                });
            };
            fs.lutimesSync = function(path, at, mt) {
                var fd = fs.openSync(path, constants.O_SYMLINK);
                var ret;
                var threw = true;
                try {
                    ret = fs.futimesSync(fd, at, mt);
                    threw = false;
                } finally{
                    if (threw) try {
                        fs.closeSync(fd);
                    } catch (er) {}
                    else fs.closeSync(fd);
                }
                return ret;
            };
        } else if (fs.futimes) {
            fs.lutimes = function(_a, _b, _c, cb) {
                if (cb) process.nextTick(cb);
            };
            fs.lutimesSync = function() {};
        }
    }
    function chmodFix(orig) {
        if (!orig) return orig;
        return function(target, mode, cb) {
            return orig.call(fs, target, mode, function(er) {
                if (chownErOk(er)) er = null;
                if (cb) cb.apply(this, arguments);
            });
        };
    }
    function chmodFixSync(orig) {
        if (!orig) return orig;
        return function(target, mode) {
            try {
                return orig.call(fs, target, mode);
            } catch (er) {
                if (!chownErOk(er)) throw er;
            }
        };
    }
    function chownFix(orig) {
        if (!orig) return orig;
        return function(target, uid, gid, cb) {
            return orig.call(fs, target, uid, gid, function(er) {
                if (chownErOk(er)) er = null;
                if (cb) cb.apply(this, arguments);
            });
        };
    }
    function chownFixSync(orig) {
        if (!orig) return orig;
        return function(target, uid, gid) {
            try {
                return orig.call(fs, target, uid, gid);
            } catch (er) {
                if (!chownErOk(er)) throw er;
            }
        };
    }
    function statFix(orig) {
        if (!orig) return orig;
        // Older versions of Node erroneously returned signed integers for
        // uid + gid.
        return function(target, options, cb) {
            if (typeof options === "function") {
                cb = options;
                options = null;
            }
            function callback(er, stats) {
                if (stats) {
                    if (stats.uid < 0) stats.uid += 0x100000000;
                    if (stats.gid < 0) stats.gid += 0x100000000;
                }
                if (cb) cb.apply(this, arguments);
            }
            return options ? orig.call(fs, target, options, callback) : orig.call(fs, target, callback);
        };
    }
    function statFixSync(orig) {
        if (!orig) return orig;
        // Older versions of Node erroneously returned signed integers for
        // uid + gid.
        return function(target, options) {
            var stats = options ? orig.call(fs, target, options) : orig.call(fs, target);
            if (stats) {
                if (stats.uid < 0) stats.uid += 0x100000000;
                if (stats.gid < 0) stats.gid += 0x100000000;
            }
            return stats;
        };
    }
    // ENOSYS means that the fs doesn't support the op. Just ignore
    // that, because it doesn't matter.
    //
    // if there's no getuid, or if getuid() is something other
    // than 0, and the error is EINVAL or EPERM, then just ignore
    // it.
    //
    // This specific case is a silent failure in cp, install, tar,
    // and most other unix tools that manage permissions.
    //
    // When running as root, or if other types of errors are
    // encountered, then it's strict.
    function chownErOk(er) {
        if (!er) return true;
        if (er.code === "ENOSYS") return true;
        var nonroot = !process.getuid || process.getuid() !== 0;
        if (nonroot) {
            if (er.code === "EINVAL" || er.code === "EPERM") return true;
        }
        return false;
    }
}

},{"c32553035e4480ce":"d5jf4","f6d0a5a1b2281a3":"g88Db"}],"g88Db":[function(require,module,exports) {
module.exports = JSON.parse('{"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4}');

},{}],"lYykE":[function(require,module,exports) {
var process = require("443c31013bc1efb2");
var Stream = require("fd9e514ca625ffec").Stream;
module.exports = legacy;
function legacy(fs) {
    return {
        ReadStream: ReadStream,
        WriteStream: WriteStream
    };
    function ReadStream(path, options) {
        if (!(this instanceof ReadStream)) return new ReadStream(path, options);
        Stream.call(this);
        var self = this;
        this.path = path;
        this.fd = null;
        this.readable = true;
        this.paused = false;
        this.flags = "r";
        this.mode = 438; /*=0666*/ 
        this.bufferSize = 65536;
        options = options || {};
        // Mixin options into this
        var keys = Object.keys(options);
        for(var index = 0, length = keys.length; index < length; index++){
            var key = keys[index];
            this[key] = options[key];
        }
        if (this.encoding) this.setEncoding(this.encoding);
        if (this.start !== undefined) {
            if ("number" !== typeof this.start) throw TypeError("start must be a Number");
            if (this.end === undefined) this.end = Infinity;
            else if ("number" !== typeof this.end) throw TypeError("end must be a Number");
            if (this.start > this.end) throw new Error("start must be <= end");
            this.pos = this.start;
        }
        if (this.fd !== null) {
            process.nextTick(function() {
                self._read();
            });
            return;
        }
        fs.open(this.path, this.flags, this.mode, function(err, fd) {
            if (err) {
                self.emit("error", err);
                self.readable = false;
                return;
            }
            self.fd = fd;
            self.emit("open", fd);
            self._read();
        });
    }
    function WriteStream(path, options) {
        if (!(this instanceof WriteStream)) return new WriteStream(path, options);
        Stream.call(this);
        this.path = path;
        this.fd = null;
        this.writable = true;
        this.flags = "w";
        this.encoding = "binary";
        this.mode = 438; /*=0666*/ 
        this.bytesWritten = 0;
        options = options || {};
        // Mixin options into this
        var keys = Object.keys(options);
        for(var index = 0, length = keys.length; index < length; index++){
            var key = keys[index];
            this[key] = options[key];
        }
        if (this.start !== undefined) {
            if ("number" !== typeof this.start) throw TypeError("start must be a Number");
            if (this.start < 0) throw new Error("start must be >= zero");
            this.pos = this.start;
        }
        this.busy = false;
        this._queue = [];
        if (this.fd === null) {
            this._open = fs.open;
            this._queue.push([
                this._open,
                this.path,
                this.flags,
                this.mode,
                undefined
            ]);
            this.flush();
        }
    }
}

},{"443c31013bc1efb2":"d5jf4","fd9e514ca625ffec":"j77ns"}],"j77ns":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
module.exports = Stream;
var EE = require("96b62835346f84f0").EventEmitter;
var inherits = require("4a6ee9586f51c38d");
inherits(Stream, EE);
Stream.Readable = require("e6206e1f4d20abc7");
Stream.Writable = require("a3f1405f37e1dfb1");
Stream.Duplex = require("6691a72c5fc222fd");
Stream.Transform = require("43a905ce7ec6ac9e");
Stream.PassThrough = require("dd715550d7783885");
Stream.finished = require("d90a3520974ec96e");
Stream.pipeline = require("eb2779cfd287c5c9");
// Backwards-compat with node 0.4.x
Stream.Stream = Stream;
// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.
function Stream() {
    EE.call(this);
}
Stream.prototype.pipe = function(dest, options) {
    var source = this;
    function ondata(chunk) {
        if (dest.writable) {
            if (false === dest.write(chunk) && source.pause) source.pause();
        }
    }
    source.on("data", ondata);
    function ondrain() {
        if (source.readable && source.resume) source.resume();
    }
    dest.on("drain", ondrain);
    // If the 'end' option is not supplied, dest.end() will be called when
    // source gets the 'end' or 'close' events.  Only dest.end() once.
    if (!dest._isStdio && (!options || options.end !== false)) {
        source.on("end", onend);
        source.on("close", onclose);
    }
    var didOnEnd = false;
    function onend() {
        if (didOnEnd) return;
        didOnEnd = true;
        dest.end();
    }
    function onclose() {
        if (didOnEnd) return;
        didOnEnd = true;
        if (typeof dest.destroy === "function") dest.destroy();
    }
    // don't leave dangling pipes when there are errors.
    function onerror(er) {
        cleanup();
        if (EE.listenerCount(this, "error") === 0) throw er; // Unhandled stream error in pipe.
    }
    source.on("error", onerror);
    dest.on("error", onerror);
    // remove all the event listeners that were added.
    function cleanup() {
        source.removeListener("data", ondata);
        dest.removeListener("drain", ondrain);
        source.removeListener("end", onend);
        source.removeListener("close", onclose);
        source.removeListener("error", onerror);
        dest.removeListener("error", onerror);
        source.removeListener("end", cleanup);
        source.removeListener("close", cleanup);
        dest.removeListener("close", cleanup);
    }
    source.on("end", cleanup);
    source.on("close", cleanup);
    dest.on("close", cleanup);
    dest.emit("pipe", source);
    // Allow for unix-like usage: A.pipe(B).pipe(C)
    return dest;
};

},{"96b62835346f84f0":"1VQLm","4a6ee9586f51c38d":"bRL3M","e6206e1f4d20abc7":"6NdbQ","a3f1405f37e1dfb1":"gTkcq","6691a72c5fc222fd":"kKNA3","43a905ce7ec6ac9e":"ba8Mr","dd715550d7783885":"2xP98","d90a3520974ec96e":"aOMy2","eb2779cfd287c5c9":"fyp4t"}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === "function") ReflectOwnKeys = R.ownKeys;
else if (Object.getOwnPropertySymbols) ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
};
else ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
};
function ProcessEmitWarning(warning) {
    if (console && console.warn) console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
    return value !== value;
};
function EventEmitter() {
    EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;
function checkListener(listener) {
    if (typeof listener !== "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        defaultMaxListeners = arg;
    }
});
EventEmitter.init = function() {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
};
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === "error";
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === "function") ReflectApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            // Re-assign `events` because a newListener handler could have caused the
            // this._events to be assigned to a new object
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === "function") // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [
            listener,
            existing
        ] : [
            existing,
            listener
        ];
        else if (prepend) existing.unshift(listener);
        else existing.push(listener);
        // Check for listener leak
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            // No error code for this since it is a Warning
            // eslint-disable-next-line no-restricted-syntax
            var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            ProcessEmitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    var state = {
        fired: false,
        wrapFn: undefined,
        target: target,
        type: type,
        listener: listener
    };
    var wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events, position, i, originalListener;
    checkListener(listener);
    events = this._events;
    if (events === undefined) return this;
    list = events[type];
    if (list === undefined) return this;
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) this._events = Object.create(null);
        else {
            delete events[type];
            if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
        }
    } else if (typeof list !== "function") {
        position = -1;
        for(i = list.length - 1; i >= 0; i--)if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
        }
        if (position < 0) return this;
        if (position === 0) list.shift();
        else spliceOne(list, position);
        if (list.length === 1) events[type] = list[0];
        if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events, i;
    events = this._events;
    if (events === undefined) return this;
    // not listening for removeListener, no need to emit
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) this._events = Object.create(null);
            else delete events[type];
        }
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for(i = 0; i < keys.length; ++i){
            key = keys[i];
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    listeners = events[type];
    if (typeof listeners === "function") this.removeListener(type, listeners);
    else if (listeners !== undefined) // LIFO order
    for(i = listeners.length - 1; i >= 0; i--)this.removeListener(type, listeners[i]);
    return this;
};
function _listeners(target, type, unwrap) {
    var events = target._events;
    if (events === undefined) return [];
    var evlistener = events[type];
    if (evlistener === undefined) return [];
    if (typeof evlistener === "function") return unwrap ? [
        evlistener.listener || evlistener
    ] : [
        evlistener
    ];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") return emitter.listenerCount(type);
    else return listenerCount.call(emitter, type);
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
    var events = this._events;
    if (events !== undefined) {
        var evlistener = events[type];
        if (typeof evlistener === "function") return 1;
        else if (evlistener !== undefined) return evlistener.length;
    }
    return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for(var i = 0; i < ret.length; ++i)ret[i] = arr[i].listener || arr[i];
    return ret;
}
function once(emitter, name) {
    return new Promise(function(resolve, reject) {
        function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
        }
        function resolver() {
            if (typeof emitter.removeListener === "function") emitter.removeListener("error", errorListener);
            resolve([].slice.call(arguments));
        }
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error") addErrorHandlerIfEventEmitter(emitter, errorListener, {
            once: true
        });
    });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") eventTargetAgnosticAddListener(emitter, "error", handler, flags);
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags.once) emitter.once(name, listener);
        else emitter.on(name, listener);
    } else if (typeof emitter.addEventListener === "function") // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
        // IE does not have builtin `{ once: true }` support so we
        // have to do it manually.
        if (flags.once) emitter.removeEventListener(name, wrapListener);
        listener(arg);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
}

},{}],"6NdbQ":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var global = arguments[3];
var process = require("896ff8d56553f7a");
"use strict";
module.exports = Readable;
/*<replacement>*/ var Duplex;
/*</replacement>*/ Readable.ReadableState = ReadableState;
/*<replacement>*/ var EE = require("16782d660ac22e0c").EventEmitter;
var EElistenerCount = function EElistenerCount(emitter, type) {
    return emitter.listeners(type).length;
};
/*</replacement>*/ /*<replacement>*/ var Stream = require("9a34f23fa53f83f7");
/*</replacement>*/ var Buffer = require("fb95ecaa88342eae").Buffer;
var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/ var debugUtil = require("a4a723b7297c7152");
var debug;
if (debugUtil && debugUtil.debuglog) debug = debugUtil.debuglog("stream");
else debug = function debug() {};
/*</replacement>*/ var BufferList = require("7a14cc1689b8c63e");
var destroyImpl = require("efa8155386cc4283");
var _require = require("994c984d08c7bbf2"), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require("8de60461b822641b").codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
// Lazy loaded to improve the startup performance.
var StringDecoder;
var createReadableStreamAsyncIterator;
var from;
require("19affa8ce41f090d")(Readable, Stream);
var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = [
    "error",
    "close",
    "destroy",
    "pause",
    "resume"
];
function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);
    else emitter._events[event] = [
        fn,
        emitter._events[event]
    ];
}
function ReadableState(options, stream, isDuplex) {
    Duplex = Duplex || require("f1c95f846e94e4eb");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream.
    // These options can be provided separately as readableXXX and writableXXX.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    // a flag to be able to tell if the event 'readable'/'data' is emitted
    // immediately, or on a later tick.  We set this to true at first, because
    // any actions that shouldn't happen until "later" should generally also
    // not happen before the first read call.
    this.sync = true;
    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'end' (and potentially 'finish')
    this.autoDestroy = !!options.autoDestroy;
    // has it been destroyed
    this.destroyed = false;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;
    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
        if (!StringDecoder) StringDecoder = require("6392acd10886f115").StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
    }
}
function Readable(options) {
    Duplex = Duplex || require("f1c95f846e94e4eb");
    if (!(this instanceof Readable)) return new Readable(options);
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the ReadableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    this._readableState = new ReadableState(options, this, isDuplex);
    // legacy
    this.readable = true;
    if (options) {
        if (typeof options.read === "function") this._read = options.read;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
    }
    Stream.call(this);
}
Object.defineProperty(Readable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined) return false;
        return this._readableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._readableState) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
    }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function(err, cb) {
    cb(err);
};
// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function(chunk, encoding) {
    var state = this._readableState;
    var skipChunkCheck;
    if (!state.objectMode) {
        if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
                chunk = Buffer.from(chunk, encoding);
                encoding = "";
            }
            skipChunkCheck = true;
        }
    } else skipChunkCheck = true;
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};
// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
};
function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
    debug("readableAddChunk", chunk);
    var state = stream._readableState;
    if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
    } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
        if (er) errorOrDestroy(stream, er);
        else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) chunk = _uint8ArrayToBuffer(chunk);
            if (addToFront) {
                if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
                else addChunk(stream, state, chunk, true);
            } else if (state.ended) errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            else if (state.destroyed) return false;
            else {
                state.reading = false;
                if (state.decoder && !encoding) {
                    chunk = state.decoder.write(chunk);
                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);
                    else maybeReadMore(stream, state);
                } else addChunk(stream, state, chunk, false);
            }
        } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
        }
    }
    // We can push more data if we are below the highWaterMark.
    // Also, if we have no data yet, we can stand some more bytes.
    // This is to work around cases where hwm=0, such as the repl.
    return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}
function addChunk(stream, state, chunk, addToFront) {
    if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
    } else {
        // update the buffer info.
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront) state.buffer.unshift(chunk);
        else state.buffer.push(chunk);
        if (state.needReadable) emitReadable(stream);
    }
    maybeReadMore(stream, state);
}
function chunkInvalid(state, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) er = new ERR_INVALID_ARG_TYPE("chunk", [
        "string",
        "Buffer",
        "Uint8Array"
    ], chunk);
    return er;
}
Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
};
// backwards compatibility.
Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder) StringDecoder = require("6392acd10886f115").StringDecoder;
    var decoder = new StringDecoder(enc);
    this._readableState.decoder = decoder;
    // If setEncoding(null), decoder.encoding equals utf8
    this._readableState.encoding = this._readableState.decoder.encoding;
    // Iterate over current buffer to convert already stored Buffers:
    var p = this._readableState.buffer.head;
    var content = "";
    while(p !== null){
        content += decoder.write(p.data);
        p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== "") this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
};
// Don't raise the hwm > 1GB
var MAX_HWM = 0x40000000;
function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
    else {
        // Get the next highest power of 2 to prevent increasing hwm excessively in
        // tiny amounts
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
    }
    return n;
}
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
        // Only flow one buffer at a time
        if (state.flowing && state.length) return state.buffer.head.data.length;
        else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
        state.needReadable = true;
        return 0;
    }
    return state.length;
}
// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function(n) {
    debug("read", n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;
    if (n !== 0) state.emittedReadable = false;
    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended) endReadable(this);
        else emitReadable(this);
        return null;
    }
    n = howMuchToRead(n, state);
    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
        if (state.length === 0) endReadable(this);
        return null;
    }
    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.
    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug("need readable", doRead);
    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
    }
    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
    } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        // if the length is currently zero, then we *need* a readable event.
        if (state.length === 0) state.needReadable = true;
        // call internal read method
        this._read(state.highWaterMark);
        state.sync = false;
        // If _read pushed data synchronously, then `reading` will be false,
        // and we need to re-evaluate how much data we can return to the user.
        if (!state.reading) n = howMuchToRead(nOrig, state);
    }
    var ret;
    if (n > 0) ret = fromList(n, state);
    else ret = null;
    if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
    } else {
        state.length -= n;
        state.awaitDrain = 0;
    }
    if (state.length === 0) {
        // If we have nothing in the buffer, then we want to know
        // as soon as we *do* get something into the buffer.
        if (!state.ended) state.needReadable = true;
        // If we tried to read() past the EOF, then emit end on the next tick.
        if (nOrig !== n && state.ended) endReadable(this);
    }
    if (ret !== null) this.emit("data", ret);
    return ret;
};
function onEofChunk(stream, state) {
    debug("onEofChunk");
    if (state.ended) return;
    if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
        }
    }
    state.ended = true;
    if (state.sync) // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
    else {
        // emit 'readable' now to make sure it gets picked up.
        state.needReadable = false;
        if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
        }
    }
}
// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
    var state = stream._readableState;
    debug("emitReadable", state.needReadable, state.emittedReadable);
    state.needReadable = false;
    if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
    }
}
function emitReadable_(stream) {
    var state = stream._readableState;
    debug("emitReadable_", state.destroyed, state.length, state.ended);
    if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
    }
    // The stream needs another readable event if
    // 1. It is not flowing, as the flow mechanism will take
    //    care of it.
    // 2. It is not ended.
    // 3. It is below the highWaterMark, so we can schedule
    //    another readable later.
    state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
    flow(stream);
}
// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
    if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
    }
}
function maybeReadMore_(stream, state) {
    // Attempt to read more data if we should.
    //
    // The conditions for reading more data are (one of):
    // - Not enough data buffered (state.length < state.highWaterMark). The loop
    //   is responsible for filling the buffer with enough data if such data
    //   is available. If highWaterMark is 0 and we are not in the flowing mode
    //   we should _not_ attempt to buffer any extra data. We'll get more data
    //   when the stream consumer calls read() instead.
    // - No data in the buffer, and the stream is in flowing mode. In this mode
    //   the loop below is responsible for ensuring read() is called. Failing to
    //   call read here would abort the flow and there's no other mechanism for
    //   continuing the flow if the stream consumer has just subscribed to the
    //   'data' event.
    //
    // In addition to the above conditions to keep reading data, the following
    // conditions prevent the data from being read:
    // - The stream has ended (state.ended).
    // - There is already a pending 'read' operation (state.reading). This is a
    //   case where the the stream has called the implementation defined _read()
    //   method, but they are processing the call asynchronously and have _not_
    //   called push() with new data. In this case we skip performing more
    //   read()s. The execution ends in this method again after the _read() ends
    //   up calling push() with more data.
    while(!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)){
        var len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length) break;
    }
    state.readingMore = false;
}
// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function(n) {
    errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
};
Readable.prototype.pipe = function(dest, pipeOpts) {
    var src = this;
    var state = this._readableState;
    switch(state.pipesCount){
        case 0:
            state.pipes = dest;
            break;
        case 1:
            state.pipes = [
                state.pipes,
                dest
            ];
            break;
        default:
            state.pipes.push(dest);
            break;
    }
    state.pipesCount += 1;
    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state.endEmitted) process.nextTick(endFn);
    else src.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                unpipeInfo.hasUnpiped = true;
                cleanup();
            }
        }
    }
    function onend() {
        debug("onend");
        dest.end();
    }
    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
        debug("cleanup");
        // cleanup event handlers once the pipe is broken
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        // if the reader is waiting for a drain event from this
        // specific writer, then it would cause it to never start
        // flowing again.
        // So, if this is awaiting a drain, then we just call it now.
        // If we don't know, then assume that we are waiting for one.
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }
    src.on("data", ondata);
    function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
            // If the user unpiped during `dest.write()`, it is possible
            // to get stuck in a permanently paused state if that write
            // also returned false.
            // => Check whether `dest` is still a piping destination.
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                debug("false write response, pause", state.awaitDrain);
                state.awaitDrain++;
            }
            src.pause();
        }
    }
    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) errorOrDestroy(dest, er);
    }
    // Make sure our error handler is attached before userland ones.
    prependListener(dest, "error", onerror);
    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
    }
    // tell the dest that it's being piped to
    dest.emit("pipe", src);
    // start the flow if it hasn't been started already.
    if (!state.flowing) {
        debug("pipe resume");
        src.resume();
    }
    return dest;
};
function pipeOnDrain(src) {
    return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain) state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
            state.flowing = true;
            flow(src);
        }
    };
}
Readable.prototype.unpipe = function(dest) {
    var state = this._readableState;
    var unpipeInfo = {
        hasUnpiped: false
    };
    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;
    // just one destination.  most common case.
    if (state.pipesCount === 1) {
        // passed in one, but it's not the right one.
        if (dest && dest !== state.pipes) return this;
        if (!dest) dest = state.pipes;
        // got a match.
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
    }
    // slow case. multiple pipe destinations.
    if (!dest) {
        // remove all.
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for(var i = 0; i < len; i++)dests[i].emit("unpipe", this, {
            hasUnpiped: false
        });
        return this;
    }
    // try to find the right one.
    var index = indexOf(state.pipes, dest);
    if (index === -1) return this;
    state.pipes.splice(index, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
};
// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function(ev, fn) {
    var res = Stream.prototype.on.call(this, ev, fn);
    var state = this._readableState;
    if (ev === "data") {
        // update readableListening so that resume() may be a no-op
        // a few lines down. This is needed to support once('readable').
        state.readableListening = this.listenerCount("readable") > 0;
        // Try start flowing on next tick if stream isn't explicitly paused
        if (state.flowing !== false) this.resume();
    } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug("on readable", state.length, state.reading);
            if (state.length) emitReadable(this);
            else if (!state.reading) process.nextTick(nReadingNextTick, this);
        }
    }
    return res;
};
Readable.prototype.addListener = Readable.prototype.on;
Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === undefined) // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
    return res;
};
function updateReadableListening(self1) {
    var state = self1._readableState;
    state.readableListening = self1.listenerCount("readable") > 0;
    if (state.resumeScheduled && !state.paused) // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true;
    else if (self1.listenerCount("data") > 0) self1.resume();
}
function nReadingNextTick(self1) {
    debug("readable nexttick read 0");
    self1.read(0);
}
// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function() {
    var state = this._readableState;
    if (!state.flowing) {
        debug("resume");
        // we flow only if there is no one listening
        // for readable, but we still have to call
        // resume()
        state.flowing = !state.readableListening;
        resume(this, state);
    }
    state.paused = false;
    return this;
};
function resume(stream, state) {
    if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
    }
}
function resume_(stream, state) {
    debug("resume", state.reading);
    if (!state.reading) stream.read(0);
    state.resumeScheduled = false;
    stream.emit("resume");
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
}
Readable.prototype.pause = function() {
    debug("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
};
function flow(stream) {
    var state = stream._readableState;
    debug("flow", state.flowing);
    while(state.flowing && stream.read() !== null);
}
// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function(stream) {
    var _this = this;
    var state = this._readableState;
    var paused = false;
    stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
    });
    stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder) chunk = state.decoder.write(chunk);
        // don't skip over falsy values in objectMode
        if (state.objectMode && (chunk === null || chunk === undefined)) return;
        else if (!state.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
            paused = true;
            stream.pause();
        }
    });
    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for(var i in stream)if (this[i] === undefined && typeof stream[i] === "function") this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
            return stream[method].apply(stream, arguments);
        };
    }(i);
    // proxy certain important events.
    for(var n = 0; n < kProxyEvents.length; n++)stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    this._read = function(n) {
        debug("wrapped _read", n);
        if (paused) {
            paused = false;
            stream.resume();
        }
    };
    return this;
};
if (typeof Symbol === "function") Readable.prototype[Symbol.asyncIterator] = function() {
    if (createReadableStreamAsyncIterator === undefined) createReadableStreamAsyncIterator = require("830c56f840811f05");
    return createReadableStreamAsyncIterator(this);
};
Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.highWaterMark;
    }
});
Object.defineProperty(Readable.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState && this._readableState.buffer;
    }
});
Object.defineProperty(Readable.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.flowing;
    },
    set: function set(state) {
        if (this._readableState) this._readableState.flowing = state;
    }
});
// exposed for testing purposes only.
Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._readableState.length;
    }
});
// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;
    var ret;
    if (state.objectMode) ret = state.buffer.shift();
    else if (!n || n >= state.length) {
        // read it all, truncate the list
        if (state.decoder) ret = state.buffer.join("");
        else if (state.buffer.length === 1) ret = state.buffer.first();
        else ret = state.buffer.concat(state.length);
        state.buffer.clear();
    } else // read part of list
    ret = state.buffer.consume(n, state.decoder);
    return ret;
}
function endReadable(stream) {
    var state = stream._readableState;
    debug("endReadable", state.endEmitted);
    if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
    }
}
function endReadableNT(state, stream) {
    debug("endReadableNT", state.endEmitted, state.length);
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
            // In case of duplex streams we need a way to detect
            // if the writable side is ready for autoDestroy as well
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) stream.destroy();
        }
    }
}
if (typeof Symbol === "function") Readable.from = function(iterable, opts) {
    if (from === undefined) from = require("7451b8c4bf72370");
    return from(Readable, iterable, opts);
};
function indexOf(xs, x) {
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}

},{"896ff8d56553f7a":"d5jf4","16782d660ac22e0c":"1VQLm","9a34f23fa53f83f7":"60BLS","fb95ecaa88342eae":"fCgem","a4a723b7297c7152":"jhUEF","7a14cc1689b8c63e":"hf3P2","efa8155386cc4283":"YI8DF","994c984d08c7bbf2":"61BRN","8de60461b822641b":"aJlwj","19affa8ce41f090d":"bRL3M","f1c95f846e94e4eb":"kKNA3","6392acd10886f115":"3vmkr","830c56f840811f05":"k019Y","7451b8c4bf72370":"ak0YH"}],"60BLS":[function(require,module,exports) {
module.exports = require("ed88fc9aa73f911").EventEmitter;

},{"ed88fc9aa73f911":"1VQLm"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
const base64 = require("9c62938f1dccc73c");
const ieee754 = require("aceacb6a4531a9d2");
const customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
const K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        const arr = new Uint8Array(1);
        const proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    const valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    const b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    let i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(i = 0; i < list.length; ++i){
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    let loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    let loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(let i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    const length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    let indexSize = 1;
    let arrLength = arr.length;
    let valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    let i;
    if (dir) {
        let foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            let found = true;
            for(let j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    const remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    const strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    let i;
    for(i = 0; i < length; ++i){
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    const remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    let loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    const res = [];
    let i = start;
    while(i < end){
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    const len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    let res = "";
    let i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    let out = "";
    for(let i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    const bytes = buf.slice(start, end);
    let res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(let i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    const newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset + --byteLength];
    let mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const lo = first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 256 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let val = this[offset];
    let mul = 1;
    let i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    let i = byteLength;
    let mul = 1;
    let val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    const val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 2 ** 16 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === undefined || last === undefined) boundsError(offset, this.length - 8);
    const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 256 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let mul = 1;
    let i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    let i = byteLength - 1;
    let mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = 0;
    let mul = 1;
    let sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    let i = byteLength - 1;
    let mul = 1;
    let sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    const len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    let i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
const errors = {};
function E(sym, getMessage, Base) {
    errors[sym] = class NodeError extends Base {
        constructor(){
            super();
            Object.defineProperty(this, "message", {
                value: getMessage.apply(this, arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            this.name = `${this.name} [${sym}]`;
            // Access the stack to generate the error message including the error code
            // from the name.
            this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete this.name;
        }
        get code() {
            return sym;
        }
        set code(value) {
            Object.defineProperty(this, "code", {
                configurable: true,
                enumerable: true,
                value,
                writable: true
            });
        }
        toString() {
            return `${this.name} [${sym}]: ${this.message}`;
        }
    };
}
E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
    if (name) return `${name} is outside of buffer bounds`;
    return "Attempt to access memory outside buffer bounds";
}, RangeError);
E("ERR_INVALID_ARG_TYPE", function(name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
}, TypeError);
E("ERR_OUT_OF_RANGE", function(str, range, input) {
    let msg = `The value of "${str}" is out of range.`;
    let received = input;
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) received = addNumericalSeparator(String(input));
    else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) received = addNumericalSeparator(received);
        received += "n";
    }
    msg += ` It must be ${range}. Received ${received}`;
    return msg;
}, RangeError);
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = `_${val.slice(i - 3, i)}${res}`;
    return `${val.slice(0, i)}${res}`;
}
// CHECK FUNCTIONS
// ===============
function checkBounds(buf, offset, byteLength) {
    validateNumber(offset, "offset");
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) boundsError(offset, buf.length - (byteLength + 1));
}
function checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            else range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` + `${(byteLength + 1) * 8 - 1}${n}`;
        } else range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function validateNumber(value, name) {
    if (typeof value !== "number") throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
// HELPER FUNCTIONS
// ================
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    let i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"hf3P2":[function(require,module,exports) {
"use strict";
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var _require = require("59f5d0111b7fa075"), Buffer = _require.Buffer;
var _require2 = require("eef6a677577349b8"), inspect = _require2.inspect;
var custom = inspect && inspect.custom || "inspect";
function copyBuffer(src, target, offset) {
    Buffer.prototype.copy.call(src, target, offset);
}
module.exports = /*#__PURE__*/ function() {
    function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    _createClass(BufferList, [
        {
            key: "push",
            value: function push(v) {
                var entry = {
                    data: v,
                    next: null
                };
                if (this.length > 0) this.tail.next = entry;
                else this.head = entry;
                this.tail = entry;
                ++this.length;
            }
        },
        {
            key: "unshift",
            value: function unshift(v) {
                var entry = {
                    data: v,
                    next: this.head
                };
                if (this.length === 0) this.tail = entry;
                this.head = entry;
                ++this.length;
            }
        },
        {
            key: "shift",
            value: function shift() {
                if (this.length === 0) return;
                var ret = this.head.data;
                if (this.length === 1) this.head = this.tail = null;
                else this.head = this.head.next;
                --this.length;
                return ret;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.head = this.tail = null;
                this.length = 0;
            }
        },
        {
            key: "join",
            value: function join(s) {
                if (this.length === 0) return "";
                var p = this.head;
                var ret = "" + p.data;
                while(p = p.next)ret += s + p.data;
                return ret;
            }
        },
        {
            key: "concat",
            value: function concat(n) {
                if (this.length === 0) return Buffer.alloc(0);
                var ret = Buffer.allocUnsafe(n >>> 0);
                var p = this.head;
                var i = 0;
                while(p){
                    copyBuffer(p.data, ret, i);
                    i += p.data.length;
                    p = p.next;
                }
                return ret;
            }
        },
        {
            key: "consume",
            value: function consume(n, hasStrings) {
                var ret;
                if (n < this.head.data.length) {
                    // `slice` is the same for buffers and strings.
                    ret = this.head.data.slice(0, n);
                    this.head.data = this.head.data.slice(n);
                } else if (n === this.head.data.length) // First chunk is a perfect match.
                ret = this.shift();
                else // Result spans more than one buffer.
                ret = hasStrings ? this._getString(n) : this._getBuffer(n);
                return ret;
            }
        },
        {
            key: "first",
            value: function first() {
                return this.head.data;
            }
        },
        {
            key: "_getString",
            value: function _getString(n) {
                var p = this.head;
                var c = 1;
                var ret = p.data;
                n -= ret.length;
                while(p = p.next){
                    var str = p.data;
                    var nb = n > str.length ? str.length : n;
                    if (nb === str.length) ret += str;
                    else ret += str.slice(0, n);
                    n -= nb;
                    if (n === 0) {
                        if (nb === str.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = str.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            }
        },
        {
            key: "_getBuffer",
            value: function _getBuffer(n) {
                var ret = Buffer.allocUnsafe(n);
                var p = this.head;
                var c = 1;
                p.data.copy(ret);
                n -= p.data.length;
                while(p = p.next){
                    var buf = p.data;
                    var nb = n > buf.length ? buf.length : n;
                    buf.copy(ret, ret.length - n, 0, nb);
                    n -= nb;
                    if (n === 0) {
                        if (nb === buf.length) {
                            ++c;
                            if (p.next) this.head = p.next;
                            else this.head = this.tail = null;
                        } else {
                            this.head = p;
                            p.data = buf.slice(nb);
                        }
                        break;
                    }
                    ++c;
                }
                this.length -= c;
                return ret;
            }
        },
        {
            key: custom,
            value: function value(_, options) {
                return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
                    // Only inspect one level.
                    depth: 0,
                    // It should not recurse.
                    customInspect: false
                }));
            }
        }
    ]);
    return BufferList;
}();

},{"59f5d0111b7fa075":"fCgem","eef6a677577349b8":"jhUEF"}],"YI8DF":[function(require,module,exports) {
var process = require("4284522496af5dfb");
"use strict";
// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
    var _this = this;
    var readableDestroyed = this._readableState && this._readableState.destroyed;
    var writableDestroyed = this._writableState && this._writableState.destroyed;
    if (readableDestroyed || writableDestroyed) {
        if (cb) cb(err);
        else if (err) {
            if (!this._writableState) process.nextTick(emitErrorNT, this, err);
            else if (!this._writableState.errorEmitted) {
                this._writableState.errorEmitted = true;
                process.nextTick(emitErrorNT, this, err);
            }
        }
        return this;
    }
    // we set destroyed to true before firing error callbacks in order
    // to make it re-entrance safe in case destroy() is called within callbacks
    if (this._readableState) this._readableState.destroyed = true;
    // if this is a duplex stream mark the writable part as destroyed as well
    if (this._writableState) this._writableState.destroyed = true;
    this._destroy(err || null, function(err) {
        if (!cb && err) {
            if (!_this._writableState) process.nextTick(emitErrorAndCloseNT, _this, err);
            else if (!_this._writableState.errorEmitted) {
                _this._writableState.errorEmitted = true;
                process.nextTick(emitErrorAndCloseNT, _this, err);
            } else process.nextTick(emitCloseNT, _this);
        } else if (cb) {
            process.nextTick(emitCloseNT, _this);
            cb(err);
        } else process.nextTick(emitCloseNT, _this);
    });
    return this;
}
function emitErrorAndCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
}
function emitCloseNT(self) {
    if (self._writableState && !self._writableState.emitClose) return;
    if (self._readableState && !self._readableState.emitClose) return;
    self.emit("close");
}
function undestroy() {
    if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
    }
    if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
    }
}
function emitErrorNT(self, err) {
    self.emit("error", err);
}
function errorOrDestroy(stream, err) {
    // We have tests that rely on errors being emitted
    // in the same tick, so changing this is semver major.
    // For now when you opt-in to autoDestroy we allow
    // the error to be emitted nextTick. In a future
    // semver major update we should change the default to this.
    var rState = stream._readableState;
    var wState = stream._writableState;
    if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);
    else stream.emit("error", err);
}
module.exports = {
    destroy: destroy,
    undestroy: undestroy,
    errorOrDestroy: errorOrDestroy
};

},{"4284522496af5dfb":"d5jf4"}],"61BRN":[function(require,module,exports) {
"use strict";
var ERR_INVALID_OPT_VALUE = require("4e508d569e2117ef").codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
    return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state, options, duplexKey, isDuplex) {
    var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
    if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : "highWaterMark";
            throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
    }
    // Default value
    return state.objectMode ? 16 : 16384;
}
module.exports = {
    getHighWaterMark: getHighWaterMark
};

},{"4e508d569e2117ef":"aJlwj"}],"aJlwj":[function(require,module,exports) {
"use strict";
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
var codes = {};
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError = /*#__PURE__*/ function(_Base) {
        _inheritsLoose(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
        }
        return NodeError;
    }(Base);
    NodeError.prototype.name = Base.name;
    NodeError.prototype.code = code;
    codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== "number") start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
    return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
    } else determiner = "must be";
    var msg;
    if (endsWith(name, " argument")) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    else {
        var type = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    }
    msg += ". Received type ".concat(typeof actual);
    return msg;
}, TypeError);
createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
    return "The " + name + " method is not implemented";
});
createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
createErrorType("ERR_STREAM_DESTROYED", function(name) {
    return "Cannot call " + name + " after a stream was destroyed";
});
createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
    return "Unknown encoding: " + arg;
}, TypeError);
createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
module.exports.codes = codes;

},{}],"kKNA3":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
var process = require("2ab1115635c50a9f");
"use strict";
/*<replacement>*/ var objectKeys = Object.keys || function(obj) {
    var keys = [];
    for(var key in obj)keys.push(key);
    return keys;
};
/*</replacement>*/ module.exports = Duplex;
var Readable = require("68a7582259cd5865");
var Writable = require("93d042f8bb80078e");
require("aa7b11ba5bf4defc")(Duplex, Readable);
// Allow the keys array to be GC'ed.
var keys = objectKeys(Writable.prototype);
for(var v = 0; v < keys.length; v++){
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}
function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
        if (options.readable === false) this.readable = false;
        if (options.writable === false) this.writable = false;
        if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once("end", onend);
        }
    }
}
Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
Object.defineProperty(Duplex.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
Object.defineProperty(Duplex.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
// the no-half-open enforcer
function onend() {
    // If the writable side ended, then we're ok.
    if (this._writableState.ended) return;
    // no more data can be written.
    // But allow more writes to happen in this tick.
    process.nextTick(onEndNT, this);
}
function onEndNT(self) {
    self.end();
}
Object.defineProperty(Duplex.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._readableState === undefined || this._writableState === undefined) return false;
        return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (this._readableState === undefined || this._writableState === undefined) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
    }
});

},{"2ab1115635c50a9f":"d5jf4","68a7582259cd5865":"6NdbQ","93d042f8bb80078e":"gTkcq","aa7b11ba5bf4defc":"bRL3M"}],"gTkcq":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
var global = arguments[3];
var process = require("f05a2a5a09d4d8b0");
"use strict";
module.exports = Writable;
/* <replacement> */ function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
}
// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
        onCorkedFinish(_this, state);
    };
}
/* </replacement> */ /*<replacement>*/ var Duplex;
/*</replacement>*/ Writable.WritableState = WritableState;
/*<replacement>*/ var internalUtil = {
    deprecate: require("dc51171b07b54af1")
};
/*</replacement>*/ /*<replacement>*/ var Stream = require("44a3cc22ec64fcd3");
/*</replacement>*/ var Buffer = require("de8f7fb7ccda8086").Buffer;
var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {};
function _uint8ArrayToBuffer(chunk) {
    return Buffer.from(chunk);
}
function _isUint8Array(obj) {
    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
var destroyImpl = require("acf48fb5d9dc6204");
var _require = require("9d146cd974da0f53"), getHighWaterMark = _require.getHighWaterMark;
var _require$codes = require("3c574b8881abcf86").codes, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
var errorOrDestroy = destroyImpl.errorOrDestroy;
require("10dad555ffe77dde")(Writable, Stream);
function nop() {}
function WritableState(options, stream, isDuplex) {
    Duplex = Duplex || require("c5e7171d6f58d3c0");
    options = options || {};
    // Duplex streams are both readable and writable, but share
    // the same options object.
    // However, some cases require setting options to different
    // values for the readable and the writable sides of the duplex stream,
    // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.
    if (typeof isDuplex !== "boolean") isDuplex = stream instanceof Duplex;
    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;
    if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
    // if _final has been called
    this.finalCalled = false;
    // drain event flag.
    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;
    // has it been destroyed
    this.destroyed = false;
    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || "utf8";
    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;
    // a flag to see when we're in the middle of a write.
    this.writing = false;
    // when true all writes will be buffered until .uncork() call
    this.corked = 0;
    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;
    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;
    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function(er) {
        onwrite(stream, er);
    };
    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;
    // the amount that is being written when _write is called.
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;
    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;
    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;
    // Should close be emitted on destroy. Defaults to true.
    this.emitClose = options.emitClose !== false;
    // Should .destroy() be called after 'finish' (and potentially 'end')
    this.autoDestroy = !!options.autoDestroy;
    // count buffered requests
    this.bufferedRequestCount = 0;
    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
}
WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while(current){
        out.push(current);
        current = current.next;
    }
    return out;
};
(function() {
    try {
        Object.defineProperty(WritableState.prototype, "buffer", {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
                return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
    } catch (_) {}
})();
// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
            if (realHasInstance.call(this, object)) return true;
            if (this !== Writable) return false;
            return object && object._writableState instanceof WritableState;
        }
    });
} else realHasInstance = function realHasInstance(object) {
    return object instanceof this;
};
function Writable(options) {
    Duplex = Duplex || require("c5e7171d6f58d3c0");
    // Writable ctor is applied to Duplexes, too.
    // `realHasInstance` is necessary because using plain `instanceof`
    // would return false, as no `_writableState` property is attached.
    // Trying to use the custom `instanceof` for Writable here will also break the
    // Node.js LazyTransform implementation, which has a non-trivial getter for
    // `_writableState` that would lead to infinite recursion.
    // Checking for a Stream.Duplex instance is faster here instead of inside
    // the WritableState constructor, at least with V8 6.5
    var isDuplex = this instanceof Duplex;
    if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    // legacy.
    this.writable = true;
    if (options) {
        if (typeof options.write === "function") this._write = options.write;
        if (typeof options.writev === "function") this._writev = options.writev;
        if (typeof options.destroy === "function") this._destroy = options.destroy;
        if (typeof options.final === "function") this._final = options.final;
    }
    Stream.call(this);
}
// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function() {
    errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};
function writeAfterEnd(stream, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    // TODO: defer error events consistently everywhere, not just the cb
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
}
// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
    var er;
    if (chunk === null) er = new ERR_STREAM_NULL_VALUES();
    else if (typeof chunk !== "string" && !state.objectMode) er = new ERR_INVALID_ARG_TYPE("chunk", [
        "string",
        "Buffer"
    ], chunk);
    if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
    }
    return true;
}
Writable.prototype.write = function(chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;
    var isBuf = !state.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer.isBuffer(chunk)) chunk = _uint8ArrayToBuffer(chunk);
    if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (isBuf) encoding = "buffer";
    else if (!encoding) encoding = state.defaultEncoding;
    if (typeof cb !== "function") cb = nop;
    if (state.ending) writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
    }
    return ret;
};
Writable.prototype.cork = function() {
    this._writableState.corked++;
};
Writable.prototype.uncork = function() {
    var state = this._writableState;
    if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
};
Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === "string") encoding = encoding.toLowerCase();
    if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
    ].indexOf((encoding + "").toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
};
Object.defineProperty(Writable.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState && this._writableState.getBuffer();
    }
});
function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") chunk = Buffer.from(chunk, encoding);
    return chunk;
}
Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.highWaterMark;
    }
});
// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
        }
    }
    var len = state.objectMode ? 1 : chunk.length;
    state.length += len;
    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;
    if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
            chunk: chunk,
            encoding: encoding,
            isBuf: isBuf,
            callback: cb,
            next: null
        };
        if (last) last.next = state.lastBufferedRequest;
        else state.bufferedRequest = state.lastBufferedRequest;
        state.bufferedRequestCount += 1;
    } else doWrite(stream, state, false, len, chunk, encoding, cb);
    return ret;
}
function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED("write"));
    else if (writev) stream._writev(chunk, state.onwrite);
    else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
}
function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) {
        // defer the callback if we are being called synchronously
        // to avoid piling up things on the stack
        process.nextTick(cb, er);
        // this can emit finish, and it will always happen
        // after error
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
    } else {
        // the caller expect this to happen before if
        // it is async
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        // this can emit finish, but finish must
        // always follow error
        finishMaybe(stream, state);
    }
}
function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
}
function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;
    if (typeof cb !== "function") throw new ERR_MULTIPLE_CALLBACK();
    onwriteStateUpdate(state);
    if (er) onwriteError(stream, state, sync, er, cb);
    else {
        // Check if we're actually ready to finish, but don't emit yet
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(stream, state);
        if (sync) process.nextTick(afterWrite, stream, state, finished, cb);
        else afterWrite(stream, state, finished, cb);
    }
}
function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
}
// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
    }
}
// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;
    if (stream._writev && entry && entry.next) {
        // Fast case, write everything using _writev()
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while(entry){
            buffer[count] = entry;
            if (!entry.isBuf) allBuffers = false;
            entry = entry.next;
            count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        // doWrite is almost always async, defer these to save a bit of time
        // as the hot path ends with doWrite
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
        } else state.corkedRequestsFree = new CorkedRequest(state);
        state.bufferedRequestCount = 0;
    } else {
        // Slow case, write chunks one-by-one
        while(entry){
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            // if we didn't call the onwrite immediately, then
            // it means that we need to wait until it does.
            // also, that means that the chunk and cb are currently
            // being processed, so move the buffer counter past them.
            if (state.writing) break;
        }
        if (entry === null) state.lastBufferedRequest = null;
    }
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
}
Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
};
Writable.prototype._writev = null;
Writable.prototype.end = function(chunk, encoding, cb) {
    var state = this._writableState;
    if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
    } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
    }
    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
    // .end() fully uncorks
    if (state.corked) {
        state.corked = 1;
        this.uncork();
    }
    // ignore unnecessary end() calls.
    if (!state.ending) endWritable(this, state, cb);
    return this;
};
Object.defineProperty(Writable.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        return this._writableState.length;
    }
});
function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
    stream._final(function(err) {
        state.pendingcb--;
        if (err) errorOrDestroy(stream, err);
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
    });
}
function prefinish(stream, state) {
    if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick(callFinal, stream, state);
        } else {
            state.prefinished = true;
            stream.emit("prefinish");
        }
    }
}
function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
            if (state.autoDestroy) {
                // In case of duplex streams we need a way to detect
                // if the readable side is ready for autoDestroy as well
                var rState = stream._readableState;
                if (!rState || rState.autoDestroy && rState.endEmitted) stream.destroy();
            }
        }
    }
    return need;
}
function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
        if (state.finished) process.nextTick(cb);
        else stream.once("finish", cb);
    }
    state.ended = true;
    stream.writable = false;
}
function onCorkedFinish(corkReq, state, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while(entry){
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
    }
    // reuse the free corkReq.
    state.corkedRequestsFree.next = corkReq;
}
Object.defineProperty(Writable.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: false,
    get: function get() {
        if (this._writableState === undefined) return false;
        return this._writableState.destroyed;
    },
    set: function set(value) {
        // we ignore the value if the stream
        // has not been initialized yet
        if (!this._writableState) return;
        // backward compatibility, the user is explicitly
        // managing destroyed
        this._writableState.destroyed = value;
    }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function(err, cb) {
    cb(err);
};

},{"f05a2a5a09d4d8b0":"d5jf4","dc51171b07b54af1":"j92NQ","44a3cc22ec64fcd3":"60BLS","de8f7fb7ccda8086":"fCgem","acf48fb5d9dc6204":"YI8DF","9d146cd974da0f53":"61BRN","3c574b8881abcf86":"aJlwj","10dad555ffe77dde":"bRL3M","c5e7171d6f58d3c0":"kKNA3"}],"j92NQ":[function(require,module,exports) {
/**
 * Module exports.
 */ var global = arguments[3];
module.exports = deprecate;
/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */ function deprecate(fn, msg) {
    if (config("noDeprecation")) return fn;
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (config("throwDeprecation")) throw new Error(msg);
            else if (config("traceDeprecation")) console.trace(msg);
            else console.warn(msg);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
}
/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */ function config(name) {
    // accessing global.localStorage can trigger a DOMException in sandboxed iframes
    try {
        if (!global.localStorage) return false;
    } catch (_) {
        return false;
    }
    var val = global.localStorage[name];
    if (null == val) return false;
    return String(val).toLowerCase() === "true";
}

},{}],"3vmkr":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
/*<replacement>*/ var Buffer = require("2a29807c689a070a").Buffer;
/*</replacement>*/ var isEncoding = Buffer.isEncoding || function(encoding) {
    encoding = "" + encoding;
    switch(encoding && encoding.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return true;
        default:
            return false;
    }
};
function _normalizeEncoding(enc) {
    if (!enc) return "utf8";
    var retried;
    while(true)switch(enc){
        case "utf8":
        case "utf-8":
            return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return "utf16le";
        case "latin1":
        case "binary":
            return "latin1";
        case "base64":
        case "ascii":
        case "hex":
            return enc;
        default:
            if (retried) return; // undefined
            enc = ("" + enc).toLowerCase();
            retried = true;
    }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
    var nenc = _normalizeEncoding(enc);
    if (typeof nenc !== "string" && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
    return nenc || enc;
}
// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
    this.encoding = normalizeEncoding(encoding);
    var nb;
    switch(this.encoding){
        case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
        case "utf8":
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
        case "base64":
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
        default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = Buffer.allocUnsafe(nb);
}
StringDecoder.prototype.write = function(buf) {
    if (buf.length === 0) return "";
    var r;
    var i;
    if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === undefined) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
    } else i = 0;
    if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
    return r || "";
};
StringDecoder.prototype.end = utf8End;
// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;
// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
};
// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
    if (byte <= 0x7F) return 0;
    else if (byte >> 5 === 0x06) return 2;
    else if (byte >> 4 === 0x0E) return 3;
    else if (byte >> 3 === 0x1E) return 4;
    return byte >> 6 === 0x02 ? -1 : -2;
}
// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
    var j = buf.length - 1;
    if (j < i) return 0;
    var nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
    if ((buf[0] & 0xC0) !== 0x80) {
        self.lastNeed = 0;
        return "�";
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xC0) !== 0x80) {
            self.lastNeed = 1;
            return "�";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xC0) !== 0x80) {
                self.lastNeed = 2;
                return "�";
            }
        }
    }
}
// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
    var p = this.lastTotal - this.lastNeed;
    var r = utf8CheckExtraBytes(this, buf, p);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
    var total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString("utf8", i);
    this.lastTotal = total;
    var end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
}
// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + "�";
    return r;
}
// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
    if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 0xD800 && c <= 0xDBFF) {
                this.lastNeed = 2;
                this.lastTotal = 4;
                this.lastChar[0] = buf[buf.length - 2];
                this.lastChar[1] = buf[buf.length - 1];
                return r.slice(0, -1);
            }
        }
        return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = buf[buf.length - 1];
    return buf.toString("utf16le", i, buf.length - 1);
}
// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
    }
    return r;
}
function base64Text(buf, i) {
    var n = (buf.length - i) % 3;
    if (n === 0) return buf.toString("base64", i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) this.lastChar[0] = buf[buf.length - 1];
    else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n);
}
function base64End(buf) {
    var r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    return r;
}
// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
}

},{"2a29807c689a070a":"eW7r9"}],"eW7r9":[function(require,module,exports) {
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = require("7e0d6ecd698c3ca6");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src)dst[key] = src[key];
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) module.exports = buffer;
else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === "number") throw new TypeError("Argument must not be a number");
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === "string") buf.fill(fill, encoding);
        else buf.fill(fill);
    } else buf.fill(0);
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") throw new TypeError("Argument must be a number");
    return buffer.SlowBuffer(size);
};

},{"7e0d6ecd698c3ca6":"fCgem"}],"k019Y":[function(require,module,exports) {
var process = require("96b869862a96261a");
"use strict";
var _Object$setPrototypeO;
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var finished = require("745a3cd8f6469ed5");
var kLastResolve = Symbol("lastResolve");
var kLastReject = Symbol("lastReject");
var kError = Symbol("error");
var kEnded = Symbol("ended");
var kLastPromise = Symbol("lastPromise");
var kHandlePromise = Symbol("handlePromise");
var kStream = Symbol("stream");
function createIterResult(value, done) {
    return {
        value: value,
        done: done
    };
}
function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
        var data = iter[kStream].read();
        // we defer if data is null
        // we can be expecting either 'end' or
        // 'error'
        if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
        }
    }
}
function onReadable(iter) {
    // we wait for the next tick, because it might
    // emit an error with process.nextTick
    process.nextTick(readAndResolve, iter);
}
function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
        lastPromise.then(function() {
            if (iter[kEnded]) {
                resolve(createIterResult(undefined, true));
                return;
            }
            iter[kHandlePromise](resolve, reject);
        }, reject);
    };
}
var AsyncIteratorPrototype = Object.getPrototypeOf(function() {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream () {
        return this[kStream];
    },
    next: function next() {
        var _this = this;
        // if we have detected an error in the meanwhile
        // reject straight away
        var error = this[kError];
        if (error !== null) return Promise.reject(error);
        if (this[kEnded]) return Promise.resolve(createIterResult(undefined, true));
        if (this[kStream].destroyed) // We need to defer via nextTick because if .destroy(err) is
        // called, the error will be emitted via nextTick, and
        // we cannot guarantee that there is no error lingering around
        // waiting to be emitted.
        return new Promise(function(resolve, reject) {
            process.nextTick(function() {
                if (_this[kError]) reject(_this[kError]);
                else resolve(createIterResult(undefined, true));
            });
        });
        // if we have multiple next() calls
        // we will wait for the previous Promise to finish
        // this logic is optimized to support for await loops,
        // where next() is only called once at a time
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) promise = new Promise(wrapForNext(lastPromise, this));
        else {
            // fast path needed to support multiple this.push()
            // without triggering the next() queue
            var data = this[kStream].read();
            if (data !== null) return Promise.resolve(createIterResult(data, false));
            promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
    }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    // destroy(err, cb) is a private API
    // we can guarantee we have that here, because we control the
    // Readable class this is attached to
    return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
            if (err) {
                reject(err);
                return;
            }
            resolve(createIterResult(undefined, true));
        });
    });
}), _Object$setPrototypeO), AsyncIteratorPrototype);
var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
    }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                resolve(createIterResult(data, false));
            } else {
                iterator[kLastResolve] = resolve;
                iterator[kLastReject] = reject;
            }
        },
        writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var reject = iterator[kLastReject];
            // reject if we are waiting for data in the Promise
            // returned by next() and store the error
            if (reject !== null) {
                iterator[kLastPromise] = null;
                iterator[kLastResolve] = null;
                iterator[kLastReject] = null;
                reject(err);
            }
            iterator[kError] = err;
            return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(undefined, true));
        }
        iterator[kEnded] = true;
    });
    stream.on("readable", onReadable.bind(null, iterator));
    return iterator;
};
module.exports = createReadableStreamAsyncIterator;

},{"96b869862a96261a":"d5jf4","745a3cd8f6469ed5":"aOMy2"}],"aOMy2":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).
"use strict";
var ERR_STREAM_PREMATURE_CLOSE = require("d35458f585bdd360").codes.ERR_STREAM_PREMATURE_CLOSE;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        callback.apply(this, args);
    };
}
function noop() {}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
}
function eos(stream, opts, callback) {
    if (typeof opts === "function") return eos(stream, null, opts);
    if (!opts) opts = {};
    callback = once(callback || noop);
    var readable = opts.readable || opts.readable !== false && stream.readable;
    var writable = opts.writable || opts.writable !== false && stream.writable;
    var onlegacyfinish = function onlegacyfinish() {
        if (!stream.writable) onfinish();
    };
    var writableEnded = stream._writableState && stream._writableState.finished;
    var onfinish = function onfinish() {
        writable = false;
        writableEnded = true;
        if (!readable) callback.call(stream);
    };
    var readableEnded = stream._readableState && stream._readableState.endEmitted;
    var onend = function onend() {
        readable = false;
        readableEnded = true;
        if (!writable) callback.call(stream);
    };
    var onerror = function onerror(err) {
        callback.call(stream, err);
    };
    var onclose = function onclose() {
        var err;
        if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
        }
    };
    var onrequest = function onrequest() {
        stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req) onrequest();
        else stream.on("request", onrequest);
    } else if (writable && !stream._writableState) {
        // legacy streams
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (opts.error !== false) stream.on("error", onerror);
    stream.on("close", onclose);
    return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req) stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
    };
}
module.exports = eos;

},{"d35458f585bdd360":"aJlwj"}],"ak0YH":[function(require,module,exports) {
module.exports = function() {
    throw new Error("Readable.from is not available in the browser");
};

},{}],"ba8Mr":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
"use strict";
module.exports = Transform;
var _require$codes = require("baab47252aa06434").codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = require("db11ebf938e536ed");
require("82049677fa603d40")(Transform, Duplex);
function afterTransform(er, data) {
    var ts = this._transformState;
    ts.transforming = false;
    var cb = ts.writecb;
    if (cb === null) return this.emit("error", new ERR_MULTIPLE_CALLBACK());
    ts.writechunk = null;
    ts.writecb = null;
    if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
    cb(er);
    var rs = this._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
}
function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);
    Duplex.call(this, options);
    this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
    };
    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;
    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;
    if (options) {
        if (typeof options.transform === "function") this._transform = options.transform;
        if (typeof options.flush === "function") this._flush = options.flush;
    }
    // When the writable side finishes, then flush out anything remaining.
    this.on("prefinish", prefinish);
}
function prefinish() {
    var _this = this;
    if (typeof this._flush === "function" && !this._readableState.destroyed) this._flush(function(er, data) {
        done(_this, er, data);
    });
    else done(this, null, null);
}
Transform.prototype.push = function(chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
};
// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
};
Transform.prototype._write = function(chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
};
// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function(n) {
    var ts = this._transformState;
    if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
};
Transform.prototype._destroy = function(err, cb) {
    Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
    });
};
function done(stream, er, data) {
    if (er) return stream.emit("error", er);
    if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);
    // TODO(BridgeAR): Write a test for these two error cases
    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
    if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
    return stream.push(null);
}

},{"baab47252aa06434":"aJlwj","db11ebf938e536ed":"kKNA3","82049677fa603d40":"bRL3M"}],"2xP98":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
"use strict";
module.exports = PassThrough;
var Transform = require("7ab21291895ec3d2");
require("f24ec1883eef5e9b")(PassThrough, Transform);
function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);
    Transform.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
    cb(null, chunk);
};

},{"7ab21291895ec3d2":"ba8Mr","f24ec1883eef5e9b":"bRL3M"}],"fyp4t":[function(require,module,exports) {
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).
"use strict";
var eos;
function once(callback) {
    var called = false;
    return function() {
        if (called) return;
        called = true;
        callback.apply(void 0, arguments);
    };
}
var _require$codes = require("6ba21bd580ac7d57").codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
    // Rethrow the error if it exists to avoid swallowing it
    if (err) throw err;
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
}
function destroyer(stream, reading, writing, callback) {
    callback = once(callback);
    var closed = false;
    stream.on("close", function() {
        closed = true;
    });
    if (eos === undefined) eos = require("dd7fd89dd81b8674");
    eos(stream, {
        readable: reading,
        writable: writing
    }, function(err) {
        if (err) return callback(err);
        closed = true;
        callback();
    });
    var destroyed = false;
    return function(err) {
        if (closed) return;
        if (destroyed) return;
        destroyed = true;
        // request.destroy just do .end - .abort is what we want
        if (isRequest(stream)) return stream.abort();
        if (typeof stream.destroy === "function") return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
    };
}
function call(fn) {
    fn();
}
function pipe(from, to) {
    return from.pipe(to);
}
function popCallback(streams) {
    if (!streams.length) return noop;
    if (typeof streams[streams.length - 1] !== "function") return noop;
    return streams.pop();
}
function pipeline() {
    for(var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++)streams[_key] = arguments[_key];
    var callback = popCallback(streams);
    if (Array.isArray(streams[0])) streams = streams[0];
    if (streams.length < 2) throw new ERR_MISSING_ARGS("streams");
    var error;
    var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
            if (!error) error = err;
            if (err) destroys.forEach(call);
            if (reading) return;
            destroys.forEach(call);
            callback(error);
        });
    });
    return streams.reduce(pipe);
}
module.exports = pipeline;

},{"6ba21bd580ac7d57":"aJlwj","dd7fd89dd81b8674":"aOMy2"}],"lJTUU":[function(require,module,exports) {
"use strict";
module.exports = clone;
var getPrototypeOf = Object.getPrototypeOf || function(obj) {
    return obj.__proto__;
};
function clone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (obj instanceof Object) var copy = {
        __proto__: getPrototypeOf(obj)
    };
    else var copy = Object.create(null);
    Object.getOwnPropertyNames(obj).forEach(function(key) {
        Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
    });
    return copy;
}

},{}],"f3tT4":[function(require,module,exports) {
// Currently in sync with Node.js lib/assert.js
// https://github.com/nodejs/node/commit/2a51ae424a513ec9a6aa3466baa0cc1d55dd4f3b
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
var process = require("17530e9a8e9dd8de");
"use strict";
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var _require = require("67930e3bebc18ea9"), _require$codes = _require.codes, ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT, ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE, ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
var AssertionError = require("11bdd262fb706a54");
var _require2 = require("d61a3396666721b6"), inspect = _require2.inspect;
var _require$types = require("d61a3396666721b6").types, isPromise = _require$types.isPromise, isRegExp = _require$types.isRegExp;
var objectAssign = Object.assign ? Object.assign : require("613bbc2cfb4d4558").assign;
var objectIs = Object.is ? Object.is : require("f909244cb7b0ea0c");
var errorCache = new Map();
var isDeepEqual;
var isDeepStrictEqual;
var parseExpressionAt;
var findNodeAround;
var decoder;
function lazyLoadComparison() {
    var comparison = require("131e25d2408617a4");
    isDeepEqual = comparison.isDeepEqual;
    isDeepStrictEqual = comparison.isDeepStrictEqual;
} // Escape control characters but not \n and \t to keep the line breaks and
// indentation intact.
// eslint-disable-next-line no-control-regex
var escapeSequencesRegExp = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g;
var meta = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "",
    "",
    "\\u000b",
    "\\f",
    "",
    "\\u000e",
    "\\u000f",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001a",
    "\\u001b",
    "\\u001c",
    "\\u001d",
    "\\u001e",
    "\\u001f"
];
var escapeFn = function escapeFn(str) {
    return meta[str.charCodeAt(0)];
};
var warned = false; // The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.
var assert = module.exports = ok;
var NO_EXCEPTION_SENTINEL = {}; // All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided. All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.
function innerFail(obj) {
    if (obj.message instanceof Error) throw obj.message;
    throw new AssertionError(obj);
}
function fail(actual, expected, message, operator, stackStartFn) {
    var argsLen = arguments.length;
    var internalMessage;
    if (argsLen === 0) internalMessage = "Failed";
    else if (argsLen === 1) {
        message = actual;
        actual = undefined;
    } else {
        if (warned === false) {
            warned = true;
            var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
            warn("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
        }
        if (argsLen === 2) operator = "!=";
    }
    if (message instanceof Error) throw message;
    var errArgs = {
        actual: actual,
        expected: expected,
        operator: operator === undefined ? "fail" : operator,
        stackStartFn: stackStartFn || fail
    };
    if (message !== undefined) errArgs.message = message;
    var err = new AssertionError(errArgs);
    if (internalMessage) {
        err.message = internalMessage;
        err.generatedMessage = true;
    }
    throw err;
}
assert.fail = fail; // The AssertionError is defined in internal/error.
assert.AssertionError = AssertionError;
function innerOk(fn, argLen, value, message) {
    if (!value) {
        var generatedMessage = false;
        if (argLen === 0) {
            generatedMessage = true;
            message = "No value argument passed to `assert.ok()`";
        } else if (message instanceof Error) throw message;
        var err = new AssertionError({
            actual: value,
            expected: true,
            message: message,
            operator: "==",
            stackStartFn: fn
        });
        err.generatedMessage = generatedMessage;
        throw err;
    }
} // Pure assertion tests whether a value is truthy, as determined
// by !!value.
function ok() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    innerOk.apply(void 0, [
        ok,
        args.length
    ].concat(args));
}
assert.ok = ok; // The equality assertion tests shallow, coercive equality with ==.
/* eslint-disable no-restricted-properties */ assert.equal = function equal(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
     // eslint-disable-next-line eqeqeq
    if (actual != expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "==",
        stackStartFn: equal
    });
}; // The non-equality assertion tests for whether two objects are not
// equal with !=.
assert.notEqual = function notEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
     // eslint-disable-next-line eqeqeq
    if (actual == expected) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "!=",
        stackStartFn: notEqual
    });
}; // The equivalence assertion tests a deep equality relation.
assert.deepEqual = function deepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "deepEqual",
        stackStartFn: deepEqual
    });
}; // The non-equivalence assertion tests for any deep inequality.
assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notDeepEqual",
        stackStartFn: notDeepEqual
    });
};
/* eslint-enable */ assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (!isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "deepStrictEqual",
        stackStartFn: deepStrictEqual
    });
};
assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (isDeepEqual === undefined) lazyLoadComparison();
    if (isDeepStrictEqual(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notDeepStrictEqual",
        stackStartFn: notDeepStrictEqual
    });
}
assert.strictEqual = function strictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (!objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "strictEqual",
        stackStartFn: strictEqual
    });
};
assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
    if (arguments.length < 2) throw new ERR_MISSING_ARGS("actual", "expected");
    if (objectIs(actual, expected)) innerFail({
        actual: actual,
        expected: expected,
        message: message,
        operator: "notStrictEqual",
        stackStartFn: notStrictEqual
    });
};
var Comparison = function Comparison(obj, keys, actual) {
    var _this = this;
    _classCallCheck(this, Comparison);
    keys.forEach(function(key) {
        if (key in obj) {
            if (actual !== undefined && typeof actual[key] === "string" && isRegExp(obj[key]) && obj[key].test(actual[key])) _this[key] = actual[key];
            else _this[key] = obj[key];
        }
    });
};
function compareExceptionKey(actual, expected, key, message, keys, fn) {
    if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
        if (!message) {
            // Create placeholder objects to create a nice output.
            var a = new Comparison(actual, keys);
            var b = new Comparison(expected, keys, actual);
            var err = new AssertionError({
                actual: a,
                expected: b,
                operator: "deepStrictEqual",
                stackStartFn: fn
            });
            err.actual = actual;
            err.expected = expected;
            err.operator = fn.name;
            throw err;
        }
        innerFail({
            actual: actual,
            expected: expected,
            message: message,
            operator: fn.name,
            stackStartFn: fn
        });
    }
}
function expectedException(actual, expected, msg, fn) {
    if (typeof expected !== "function") {
        if (isRegExp(expected)) return expected.test(actual); // assert.doesNotThrow does not accept objects.
        if (arguments.length === 2) throw new ERR_INVALID_ARG_TYPE("expected", [
            "Function",
            "RegExp"
        ], expected);
         // Handle primitives properly.
        if (_typeof(actual) !== "object" || actual === null) {
            var err = new AssertionError({
                actual: actual,
                expected: expected,
                message: msg,
                operator: "deepStrictEqual",
                stackStartFn: fn
            });
            err.operator = fn.name;
            throw err;
        }
        var keys = Object.keys(expected); // Special handle errors to make sure the name and the message are compared
        // as well.
        if (expected instanceof Error) keys.push("name", "message");
        else if (keys.length === 0) throw new ERR_INVALID_ARG_VALUE("error", expected, "may not be an empty object");
        if (isDeepEqual === undefined) lazyLoadComparison();
        keys.forEach(function(key) {
            if (typeof actual[key] === "string" && isRegExp(expected[key]) && expected[key].test(actual[key])) return;
            compareExceptionKey(actual, expected, key, msg, keys, fn);
        });
        return true;
    } // Guard instanceof against arrow functions as they don't have a prototype.
    if (expected.prototype !== undefined && actual instanceof expected) return true;
    if (Error.isPrototypeOf(expected)) return false;
    return expected.call({}, actual) === true;
}
function getActual(fn) {
    if (typeof fn !== "function") throw new ERR_INVALID_ARG_TYPE("fn", "Function", fn);
    try {
        fn();
    } catch (e) {
        return e;
    }
    return NO_EXCEPTION_SENTINEL;
}
function checkIsPromise(obj) {
    // Accept native ES6 promises and promises that are implemented in a similar
    // way. Do not accept thenables that use a function as `obj` and that have no
    // `catch` handler.
    // TODO: thenables are checked up until they have the correct methods,
    // but according to documentation, the `then` method should receive
    // the `fulfill` and `reject` arguments as well or it may be never resolved.
    return isPromise(obj) || obj !== null && _typeof(obj) === "object" && typeof obj.then === "function" && typeof obj.catch === "function";
}
function waitForActual(promiseFn) {
    return Promise.resolve().then(function() {
        var resultPromise;
        if (typeof promiseFn === "function") {
            // Return a rejected promise if `promiseFn` throws synchronously.
            resultPromise = promiseFn(); // Fail in case no promise is returned.
            if (!checkIsPromise(resultPromise)) throw new ERR_INVALID_RETURN_VALUE("instance of Promise", "promiseFn", resultPromise);
        } else if (checkIsPromise(promiseFn)) resultPromise = promiseFn;
        else throw new ERR_INVALID_ARG_TYPE("promiseFn", [
            "Function",
            "Promise"
        ], promiseFn);
        return Promise.resolve().then(function() {
            return resultPromise;
        }).then(function() {
            return NO_EXCEPTION_SENTINEL;
        }).catch(function(e) {
            return e;
        });
    });
}
function expectsError(stackStartFn, actual, error, message) {
    if (typeof error === "string") {
        if (arguments.length === 4) throw new ERR_INVALID_ARG_TYPE("error", [
            "Object",
            "Error",
            "Function",
            "RegExp"
        ], error);
        if (_typeof(actual) === "object" && actual !== null) {
            if (actual.message === error) throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error message "'.concat(actual.message, '" is identical to the message.'));
        } else if (actual === error) throw new ERR_AMBIGUOUS_ARGUMENT("error/message", 'The error "'.concat(actual, '" is identical to the message.'));
        message = error;
        error = undefined;
    } else if (error != null && _typeof(error) !== "object" && typeof error !== "function") throw new ERR_INVALID_ARG_TYPE("error", [
        "Object",
        "Error",
        "Function",
        "RegExp"
    ], error);
    if (actual === NO_EXCEPTION_SENTINEL) {
        var details = "";
        if (error && error.name) details += " (".concat(error.name, ")");
        details += message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "rejects" ? "rejection" : "exception";
        innerFail({
            actual: undefined,
            expected: error,
            operator: stackStartFn.name,
            message: "Missing expected ".concat(fnType).concat(details),
            stackStartFn: stackStartFn
        });
    }
    if (error && !expectedException(actual, error, message, stackStartFn)) throw actual;
}
function expectsNoError(stackStartFn, actual, error, message) {
    if (actual === NO_EXCEPTION_SENTINEL) return;
    if (typeof error === "string") {
        message = error;
        error = undefined;
    }
    if (!error || expectedException(actual, error)) {
        var details = message ? ": ".concat(message) : ".";
        var fnType = stackStartFn.name === "doesNotReject" ? "rejection" : "exception";
        innerFail({
            actual: actual,
            expected: error,
            operator: stackStartFn.name,
            message: "Got unwanted ".concat(fnType).concat(details, "\n") + 'Actual message: "'.concat(actual && actual.message, '"'),
            stackStartFn: stackStartFn
        });
    }
    throw actual;
}
assert.throws = function throws(promiseFn) {
    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
    expectsError.apply(void 0, [
        throws,
        getActual(promiseFn)
    ].concat(args));
};
assert.rejects = function rejects(promiseFn) {
    for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
    return waitForActual(promiseFn).then(function(result) {
        return expectsError.apply(void 0, [
            rejects,
            result
        ].concat(args));
    });
};
assert.doesNotThrow = function doesNotThrow(fn) {
    for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
    expectsNoError.apply(void 0, [
        doesNotThrow,
        getActual(fn)
    ].concat(args));
};
assert.doesNotReject = function doesNotReject(fn) {
    for(var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++)args[_key5 - 1] = arguments[_key5];
    return waitForActual(fn).then(function(result) {
        return expectsNoError.apply(void 0, [
            doesNotReject,
            result
        ].concat(args));
    });
};
assert.ifError = function ifError(err) {
    if (err !== null && err !== undefined) {
        var message = "ifError got unwanted exception: ";
        if (_typeof(err) === "object" && typeof err.message === "string") {
            if (err.message.length === 0 && err.constructor) message += err.constructor.name;
            else message += err.message;
        } else message += inspect(err);
        var newErr = new AssertionError({
            actual: err,
            expected: null,
            operator: "ifError",
            message: message,
            stackStartFn: ifError
        }); // Make sure we actually have a stack trace!
        var origStack = err.stack;
        if (typeof origStack === "string") {
            // This will remove any duplicated frames from the error frames taken
            // from within `ifError` and add the original error frames to the newly
            // created ones.
            var tmp2 = origStack.split("\n");
            tmp2.shift(); // Filter all frames existing in err.stack.
            var tmp1 = newErr.stack.split("\n");
            for(var i = 0; i < tmp2.length; i++){
                // Find the first occurrence of the frame.
                var pos = tmp1.indexOf(tmp2[i]);
                if (pos !== -1) {
                    // Only keep new frames.
                    tmp1 = tmp1.slice(0, pos);
                    break;
                }
            }
            newErr.stack = "".concat(tmp1.join("\n"), "\n").concat(tmp2.join("\n"));
        }
        throw newErr;
    }
}; // Expose a strict only variant of assert
function strict() {
    for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)args[_key6] = arguments[_key6];
    innerOk.apply(void 0, [
        strict,
        args.length
    ].concat(args));
}
assert.strict = objectAssign(strict, assert, {
    equal: assert.strictEqual,
    deepEqual: assert.deepStrictEqual,
    notEqual: assert.notStrictEqual,
    notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

},{"17530e9a8e9dd8de":"d5jf4","67930e3bebc18ea9":"cwQVR","11bdd262fb706a54":"lQlQt","d61a3396666721b6":"cxohQ","613bbc2cfb4d4558":"713SE","f909244cb7b0ea0c":"k2tpA","131e25d2408617a4":"d5TM9"}],"cwQVR":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/errors.js
// https://github.com/nodejs/node/commit/3b044962c48fe313905877a96b5d0894a5404f6f
/* eslint node-core/documented-errors: "error" */ /* eslint node-core/alphabetize-errors: "error" */ /* eslint node-core/prefer-util-format-errors: "error" */ "use strict"; // The whole point behind this internal module is to allow Node.js to no
// longer be forced to treat every error message change as a semver-major
// change. The NodeError classes here all expose a `code` property whose
// value statically and permanently identifies the error. While the error
// message may change, the code should not.
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var codes = {}; // Lazy loaded
var assert;
var util;
function createErrorType(code, message, Base) {
    if (!Base) Base = Error;
    function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") return message;
        else return message(arg1, arg2, arg3);
    }
    var NodeError = /*#__PURE__*/ function(_Base) {
        _inherits(NodeError, _Base);
        function NodeError(arg1, arg2, arg3) {
            var _this;
            _classCallCheck(this, NodeError);
            _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeError).call(this, getMessage(arg1, arg2, arg3)));
            _this.code = code;
            return _this;
        }
        return NodeError;
    }(Base);
    codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
    if (Array.isArray(expected)) {
        var len = expected.length;
        expected = expected.map(function(i) {
            return String(i);
        });
        if (len > 2) return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
        else if (len === 2) return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
        else return "of ".concat(thing, " ").concat(expected[0]);
    } else return "of ".concat(thing, " ").concat(String(expected));
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
    return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
    if (typeof start !== "number") start = 0;
    if (start + search.length > str.length) return false;
    else return str.indexOf(search, start) !== -1;
}
createErrorType("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
    if (assert === undefined) assert = require("f73a3052b95b9ed");
    assert(typeof name === "string", "'name' must be a string"); // determiner: 'must be' or 'must not be'
    var determiner;
    if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
    } else determiner = "must be";
    var msg;
    if (endsWith(name, " argument")) // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    else {
        var type = includes(name, ".") ? "property" : "argument";
        msg = 'The "'.concat(name, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
    } // TODO(BridgeAR): Improve the output by showing `null` and similar.
    msg += ". Received type ".concat(_typeof(actual));
    return msg;
}, TypeError);
createErrorType("ERR_INVALID_ARG_VALUE", function(name, value) {
    var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "is invalid";
    if (util === undefined) util = require("1fd472100fa8826f");
    var inspected = util.inspect(value);
    if (inspected.length > 128) inspected = "".concat(inspected.slice(0, 128), "...");
    return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
}, TypeError, RangeError);
createErrorType("ERR_INVALID_RETURN_VALUE", function(input, name, value) {
    var type;
    if (value && value.constructor && value.constructor.name) type = "instance of ".concat(value.constructor.name);
    else type = "type ".concat(_typeof(value));
    return "Expected ".concat(input, ' to be returned from the "').concat(name, '"') + " function but got ".concat(type, ".");
}, TypeError);
createErrorType("ERR_MISSING_ARGS", function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    if (assert === undefined) assert = require("f73a3052b95b9ed");
    assert(args.length > 0, "At least one arg needs to be specified");
    var msg = "The ";
    var len = args.length;
    args = args.map(function(a) {
        return '"'.concat(a, '"');
    });
    switch(len){
        case 1:
            msg += "".concat(args[0], " argument");
            break;
        case 2:
            msg += "".concat(args[0], " and ").concat(args[1], " arguments");
            break;
        default:
            msg += args.slice(0, len - 1).join(", ");
            msg += ", and ".concat(args[len - 1], " arguments");
            break;
    }
    return "".concat(msg, " must be specified");
}, TypeError);
module.exports.codes = codes;

},{"f73a3052b95b9ed":"f3tT4","1fd472100fa8826f":"cxohQ"}],"lQlQt":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/assert/assertion_error.js
// https://github.com/nodejs/node/commit/0817840f775032169ddd70c85ac059f18ffcc81c
var process = require("228da2c254a5e871");
"use strict";
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) _construct = Reflect.construct;
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
var _require = require("9984e91d63ed614c"), inspect = _require.inspect;
var _require2 = require("1670766d7c5cef96"), ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
    if (this_len === undefined || this_len > str.length) this_len = str.length;
    return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
function repeat(str, count) {
    count = Math.floor(count);
    if (str.length == 0 || count == 0) return "";
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while(count){
        str += str;
        count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
}
var blue = "";
var green = "";
var red = "";
var white = "";
var kReadableOperator = {
    deepStrictEqual: "Expected values to be strictly deep-equal:",
    strictEqual: "Expected values to be strictly equal:",
    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
    deepEqual: "Expected values to be loosely deep-equal:",
    equal: "Expected values to be loosely equal:",
    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
    notEqual: 'Expected "actual" to be loosely unequal to:',
    notIdentical: "Values identical but not reference-equal:"
}; // Comparing short primitives should just show === / !== instead of using the
// diff.
var kMaxShortLength = 10;
function copyError(source) {
    var keys = Object.keys(source);
    var target = Object.create(Object.getPrototypeOf(source));
    keys.forEach(function(key) {
        target[key] = source[key];
    });
    Object.defineProperty(target, "message", {
        value: source.message
    });
    return target;
}
function inspectValue(val) {
    // The util.inspect default values could be changed. This makes sure the
    // error messages contain the necessary information nevertheless.
    return inspect(val, {
        compact: false,
        customInspect: false,
        depth: 1000,
        maxArrayLength: Infinity,
        // Assert compares only enumerable properties (with a few exceptions).
        showHidden: false,
        // Having a long line as error is better than wrapping the line for
        // comparison for now.
        // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
        // have meta information about the inspected properties (i.e., know where
        // in what line the property starts and ends).
        breakLength: Infinity,
        // Assert does not detect proxies currently.
        showProxy: false,
        sorted: true,
        // Inspect getters as we also check them when comparing entries.
        getters: true
    });
}
function createErrDiff(actual, expected, operator) {
    var other = "";
    var res = "";
    var lastPos = 0;
    var end = "";
    var skipped = false;
    var actualInspected = inspectValue(actual);
    var actualLines = actualInspected.split("\n");
    var expectedLines = inspectValue(expected).split("\n");
    var i = 0;
    var indicator = ""; // In case both values are objects explicitly mark them as not reference equal
    // for the `strictEqual` operator.
    if (operator === "strictEqual" && _typeof(actual) === "object" && _typeof(expected) === "object" && actual !== null && expected !== null) operator = "strictEqualObject";
     // If "actual" and "expected" fit on a single line and they are not strictly
    // equal, check further special handling.
    if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
        var inputLength = actualLines[0].length + expectedLines[0].length; // If the character length of "actual" and "expected" together is less than
        // kMaxShortLength and if neither is an object and at least one of them is
        // not `zero`, use the strict equal comparison to visualize the output.
        if (inputLength <= kMaxShortLength) {
            if ((_typeof(actual) !== "object" || actual === null) && (_typeof(expected) !== "object" || expected === null) && (actual !== 0 || expected !== 0)) // -0 === +0
            return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
        } else if (operator !== "strictEqualObject") {
            // If the stderr is a tty and the input length is lower than the current
            // columns per line, add a mismatch indicator below the output. If it is
            // not a tty, use a default value of 80 characters.
            var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;
            if (inputLength < maxLength) {
                while(actualLines[0][i] === expectedLines[0][i])i++;
                 // Ignore the first characters.
                if (i > 2) {
                    // Add position indicator for the first mismatch in case it is a
                    // single line and the input length is less than the column length.
                    indicator = "\n  ".concat(repeat(" ", i), "^");
                    i = 0;
                }
            }
        }
    } // Remove all ending lines that match (this optimizes the output for
    // readability by reducing the number of total changed lines).
    var a = actualLines[actualLines.length - 1];
    var b = expectedLines[expectedLines.length - 1];
    while(a === b){
        if (i++ < 2) end = "\n  ".concat(a).concat(end);
        else other = a;
        actualLines.pop();
        expectedLines.pop();
        if (actualLines.length === 0 || expectedLines.length === 0) break;
        a = actualLines[actualLines.length - 1];
        b = expectedLines[expectedLines.length - 1];
    }
    var maxLines = Math.max(actualLines.length, expectedLines.length); // Strict equal with identical objects that are not identical by reference.
    // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })
    if (maxLines === 0) {
        // We have to get the result again. The lines were all removed before.
        var _actualLines = actualInspected.split("\n"); // Only remove lines in case it makes sense to collapse those.
        // TODO: Accept env to always show the full error.
        if (_actualLines.length > 30) {
            _actualLines[26] = "".concat(blue, "...").concat(white);
            while(_actualLines.length > 27)_actualLines.pop();
        }
        return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join("\n"), "\n");
    }
    if (i > 3) {
        end = "\n".concat(blue, "...").concat(white).concat(end);
        skipped = true;
    }
    if (other !== "") {
        end = "\n  ".concat(other).concat(end);
        other = "";
    }
    var printedLines = 0;
    var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
    var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");
    for(i = 0; i < maxLines; i++){
        // Only extra expected lines exist
        var cur = i - lastPos;
        if (actualLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(expectedLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(expectedLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the expected line to the cache.
            other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
            printedLines++; // Only extra actual lines exist
        } else if (expectedLines.length < i + 1) {
            // If the last diverging line is more than one line above and the
            // current line is at least line three, add some of the former lines and
            // also add dots to indicate skipped entries.
            if (cur > 1 && i > 2) {
                if (cur > 4) {
                    res += "\n".concat(blue, "...").concat(white);
                    skipped = true;
                } else if (cur > 3) {
                    res += "\n  ".concat(actualLines[i - 2]);
                    printedLines++;
                }
                res += "\n  ".concat(actualLines[i - 1]);
                printedLines++;
            } // Mark the current line as the last diverging one.
            lastPos = i; // Add the actual line to the result.
            res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
            printedLines++; // Lines diverge
        } else {
            var expectedLine = expectedLines[i];
            var actualLine = actualLines[i]; // If the lines diverge, specifically check for lines that only diverge by
            // a trailing comma. In that case it is actually identical and we should
            // mark it as such.
            var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ",") || actualLine.slice(0, -1) !== expectedLine); // If the expected line has a trailing comma but is otherwise identical,
            // add a comma at the end of the actual line. Otherwise the output could
            // look weird as in:
            //
            //   [
            //     1         // No comma at the end!
            // +   2
            //   ]
            //
            if (divergingLines && endsWith(expectedLine, ",") && expectedLine.slice(0, -1) === actualLine) {
                divergingLines = false;
                actualLine += ",";
            }
            if (divergingLines) {
                // If the last diverging line is more than one line above and the
                // current line is at least line three, add some of the former lines and
                // also add dots to indicate skipped entries.
                if (cur > 1 && i > 2) {
                    if (cur > 4) {
                        res += "\n".concat(blue, "...").concat(white);
                        skipped = true;
                    } else if (cur > 3) {
                        res += "\n  ".concat(actualLines[i - 2]);
                        printedLines++;
                    }
                    res += "\n  ".concat(actualLines[i - 1]);
                    printedLines++;
                } // Mark the current line as the last diverging one.
                lastPos = i; // Add the actual line to the result and cache the expected diverging
                // line so consecutive diverging lines show up as +++--- and not +-+-+-.
                res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
                other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
                printedLines += 2; // Lines are identical
            } else {
                // Add all cached information to the result before adding other things
                // and reset the cache.
                res += other;
                other = ""; // If the last diverging line is exactly one line above or if it is the
                // very first line, add the line to the result.
                if (cur === 1 || i === 0) {
                    res += "\n  ".concat(actualLine);
                    printedLines++;
                }
            }
        } // Inspected object to big (Show ~20 rows max)
        if (printedLines > 20 && i < maxLines - 2) return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
    }
    return "".concat(msg).concat(skipped ? skippedMsg : "", "\n").concat(res).concat(other).concat(end).concat(indicator);
}
var AssertionError = /*#__PURE__*/ function(_Error) {
    _inherits(AssertionError, _Error);
    function AssertionError(options) {
        var _this;
        _classCallCheck(this, AssertionError);
        if (_typeof(options) !== "object" || options === null) throw new ERR_INVALID_ARG_TYPE("options", "Object", options);
        var message = options.message, operator = options.operator, stackStartFn = options.stackStartFn;
        var actual = options.actual, expected = options.expected;
        var limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 0;
        if (message != null) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, String(message)));
        else {
            if (process.stderr && process.stderr.isTTY) {
                // Reset on each call to make sure we handle dynamically set environment
                // variables correct.
                if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
                    blue = "\x1b[34m";
                    green = "\x1b[32m";
                    white = "\x1b[39m";
                    red = "\x1b[31m";
                } else {
                    blue = "";
                    green = "";
                    white = "";
                    red = "";
                }
            } // Prevent the error stack from being visible by duplicating the error
            // in a very close way to the original in case both sides are actually
            // instances of Error.
            if (_typeof(actual) === "object" && actual !== null && _typeof(expected) === "object" && expected !== null && "stack" in actual && actual instanceof Error && "stack" in expected && expected instanceof Error) {
                actual = copyError(actual);
                expected = copyError(expected);
            }
            if (operator === "deepStrictEqual" || operator === "strictEqual") _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, createErrDiff(actual, expected, operator)));
            else if (operator === "notDeepStrictEqual" || operator === "notStrictEqual") {
                // In case the objects are equal but the operator requires unequal, show
                // the first object and say A equals B
                var base = kReadableOperator[operator];
                var res = inspectValue(actual).split("\n"); // In case "actual" is an object, it should not be reference equal.
                if (operator === "notStrictEqual" && _typeof(actual) === "object" && actual !== null) base = kReadableOperator.notStrictEqualObject;
                 // Only remove lines in case it makes sense to collapse those.
                // TODO: Accept env to always show the full error.
                if (res.length > 30) {
                    res[26] = "".concat(blue, "...").concat(white);
                    while(res.length > 27)res.pop();
                } // Only print a single input.
                if (res.length === 1) _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, " ").concat(res[0])));
                else _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, "\n\n").concat(res.join("\n"), "\n")));
            } else {
                var _res = inspectValue(actual);
                var other = "";
                var knownOperators = kReadableOperator[operator];
                if (operator === "notDeepEqual" || operator === "notEqual") {
                    _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);
                    if (_res.length > 1024) _res = "".concat(_res.slice(0, 1021), "...");
                } else {
                    other = "".concat(inspectValue(expected));
                    if (_res.length > 512) _res = "".concat(_res.slice(0, 509), "...");
                    if (other.length > 512) other = "".concat(other.slice(0, 509), "...");
                    if (operator === "deepEqual" || operator === "equal") _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
                    else other = " ".concat(operator, " ").concat(other);
                }
                _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(_res).concat(other)));
            }
        }
        Error.stackTraceLimit = limit;
        _this.generatedMessage = !message;
        Object.defineProperty(_assertThisInitialized(_this), "name", {
            value: "AssertionError [ERR_ASSERTION]",
            enumerable: false,
            writable: true,
            configurable: true
        });
        _this.code = "ERR_ASSERTION";
        _this.actual = actual;
        _this.expected = expected;
        _this.operator = operator;
        if (Error.captureStackTrace) // eslint-disable-next-line no-restricted-syntax
        Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
         // Create error message including the error code in the name.
        _this.stack; // Reset the name.
        _this.name = "AssertionError";
        return _possibleConstructorReturn(_this);
    }
    _createClass(AssertionError, [
        {
            key: "toString",
            value: function toString() {
                return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
            }
        },
        {
            key: inspect.custom,
            value: function value(recurseTimes, ctx) {
                // This limits the `actual` and `expected` property default inspection to
                // the minimum depth. Otherwise those values would be too verbose compared
                // to the actual error message which contains a combined view of these two
                // input values.
                return inspect(this, _objectSpread({}, ctx, {
                    customInspect: false,
                    depth: 0
                }));
            }
        }
    ]);
    return AssertionError;
}(_wrapNativeSuper(Error));
module.exports = AssertionError;

},{"228da2c254a5e871":"d5jf4","9984e91d63ed614c":"cxohQ","1670766d7c5cef96":"cwQVR"}],"713SE":[function(require,module,exports) {
/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */ "use strict";
function assign(target, firstSource) {
    if (target === undefined || target === null) throw new TypeError("Cannot convert first argument to object");
    var to = Object(target);
    for(var i = 1; i < arguments.length; i++){
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) continue;
        var keysArray = Object.keys(Object(nextSource));
        for(var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++){
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
        }
    }
    return to;
}
function polyfill() {
    if (!Object.assign) Object.defineProperty(Object, "assign", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: assign
    });
}
module.exports = {
    assign: assign,
    polyfill: polyfill
};

},{}],"k2tpA":[function(require,module,exports) {
"use strict";
var define = require("7a0bb7df335a6af");
var callBind = require("794ce1103c4a65ba");
var implementation = require("f52a71fcf365d3bd");
var getPolyfill = require("59addbaef079e040");
var shim = require("c0e8b0f7342ba484");
var polyfill = callBind(getPolyfill(), Object);
define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"7a0bb7df335a6af":"6eq5U","794ce1103c4a65ba":"bfo8D","f52a71fcf365d3bd":"WLxcH","59addbaef079e040":"ezjA5","c0e8b0f7342ba484":"9p2yJ"}],"6eq5U":[function(require,module,exports) {
"use strict";
var keys = require("7ff177585d1618f0");
var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction = function(fn) {
    return typeof fn === "function" && toStr.call(fn) === "[object Function]";
};
var hasPropertyDescriptors = require("c52d62086511583f")();
var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
var defineProperty = function(object, name, value, predicate) {
    if (name in object) {
        if (predicate === true) {
            if (object[name] === value) return;
        } else if (!isFunction(predicate) || !predicate()) return;
    }
    if (supportsDescriptors) origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value: value,
        writable: true
    });
    else object[name] = value; // eslint-disable-line no-param-reassign
};
var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
    for(var i = 0; i < props.length; i += 1)defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;

},{"7ff177585d1618f0":"eNyf4","c52d62086511583f":"esBLZ"}],"eNyf4":[function(require,module,exports) {
"use strict";
var slice = Array.prototype.slice;
var isArgs = require("93e8460f624c96f4");
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : require("344bb0d7b2568e03");
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if (isArgs(object)) return originalKeys(slice.call(object));
            return originalKeys(object);
        };
    } else Object.keys = keysShim;
    return Object.keys || keysShim;
};
module.exports = keysShim;

},{"93e8460f624c96f4":"1HhOq","344bb0d7b2568e03":"aV01q"}],"1HhOq":[function(require,module,exports) {
"use strict";
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
    return isArgs;
};

},{}],"aV01q":[function(require,module,exports) {
"use strict";
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = require("b0d8c8b84be91ffd"); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, "toString");
    var hasProtoEnumBug = isEnumerable.call(function() {}, "prototype");
    var dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === "undefined") return false;
        for(var k in window)try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === "undefined" || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError("Object.keys called on a non-object");
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === "prototype") && has.call(object, name)) theKeys.push(String(name));
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = keysShim;

},{"b0d8c8b84be91ffd":"1HhOq"}],"esBLZ":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("b0bf8b8435d3abc");
var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
var hasPropertyDescriptors = function hasPropertyDescriptors() {
    if ($defineProperty) try {
        $defineProperty({}, "a", {
            value: 1
        });
        return true;
    } catch (e) {
        // IE 8 has a broken defineProperty
        return false;
    }
    return false;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!hasPropertyDescriptors()) return null;
    try {
        return $defineProperty([], "length", {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = hasPropertyDescriptors;

},{"b0bf8b8435d3abc":"dZb05"}],"WLxcH":[function(require,module,exports) {
"use strict";
var numberIsNaN = function(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) return 1 / a === 1 / b;
    if (a === b) return true;
    if (numberIsNaN(a) && numberIsNaN(b)) return true;
    return false;
};

},{}],"ezjA5":[function(require,module,exports) {
"use strict";
var implementation = require("ff80ab827617d6fd");
module.exports = function getPolyfill() {
    return typeof Object.is === "function" ? Object.is : implementation;
};

},{"ff80ab827617d6fd":"WLxcH"}],"9p2yJ":[function(require,module,exports) {
"use strict";
var getPolyfill = require("f188d636391a5061");
var define = require("155865cffc557cd");
module.exports = function shimObjectIs() {
    var polyfill = getPolyfill();
    define(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};

},{"f188d636391a5061":"ezjA5","155865cffc557cd":"6eq5U"}],"d5TM9":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/comparisons.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9
"use strict";
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
var regexFlagsSupported = /a/g.flags !== undefined;
var arrayFromSet = function arrayFromSet(set) {
    var array = [];
    set.forEach(function(value) {
        return array.push(value);
    });
    return array;
};
var arrayFromMap = function arrayFromMap(map) {
    var array = [];
    map.forEach(function(value, key) {
        return array.push([
            key,
            value
        ]);
    });
    return array;
};
var objectIs = Object.is ? Object.is : require("3addb16fbdd05c1c");
var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
    return [];
};
var numberIsNaN = Number.isNaN ? Number.isNaN : require("a27e57a3fd2e2e23");
function uncurryThis(f) {
    return f.call.bind(f);
}
var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
var objectToString = uncurryThis(Object.prototype.toString);
var _require$types = require("4940125679601087").types, isAnyArrayBuffer = _require$types.isAnyArrayBuffer, isArrayBufferView = _require$types.isArrayBufferView, isDate = _require$types.isDate, isMap = _require$types.isMap, isRegExp = _require$types.isRegExp, isSet = _require$types.isSet, isNativeError = _require$types.isNativeError, isBoxedPrimitive = _require$types.isBoxedPrimitive, isNumberObject = _require$types.isNumberObject, isStringObject = _require$types.isStringObject, isBooleanObject = _require$types.isBooleanObject, isBigIntObject = _require$types.isBigIntObject, isSymbolObject = _require$types.isSymbolObject, isFloat32Array = _require$types.isFloat32Array, isFloat64Array = _require$types.isFloat64Array;
function isNonIndex(key) {
    if (key.length === 0 || key.length > 10) return true;
    for(var i = 0; i < key.length; i++){
        var code = key.charCodeAt(i);
        if (code < 48 || code > 57) return true;
    } // The maximum size for an array is 2 ** 32 -1.
    return key.length === 10 && key >= Math.pow(2, 32);
}
function getOwnNonIndexProperties(value) {
    return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
} // Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function compare(a, b) {
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
}
var ONLY_ENUMERABLE = undefined;
var kStrict = true;
var kLoose = false;
var kNoIterator = 0;
var kIsArray = 1;
var kIsSet = 2;
var kIsMap = 3; // Check if they have the same source and flags
function areSimilarRegExps(a, b) {
    return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
}
function areSimilarFloatArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    for(var offset = 0; offset < a.byteLength; offset++){
        if (a[offset] !== b[offset]) return false;
    }
    return true;
}
function areSimilarTypedArrays(a, b) {
    if (a.byteLength !== b.byteLength) return false;
    return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
}
function areEqualArrayBuffers(buf1, buf2) {
    return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
}
function isEqualBoxedPrimitive(val1, val2) {
    if (isNumberObject(val1)) return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
    if (isStringObject(val1)) return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
    if (isBooleanObject(val1)) return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
    if (isBigIntObject(val1)) return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
    return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
} // Notes: Type tags are historical [[Class]] properties that can be set by
// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
// and retrieved using Object.prototype.toString.call(obj) in JS
// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
// for a list of tags pre-defined in the spec.
// There are some unspecified tags in the wild too (e.g. typed array tags).
// Since tags can be altered, they only serve fast failures
//
// Typed arrays and buffers are checked by comparing the content in their
// underlying ArrayBuffer. This optimization requires that it's
// reasonable to interpret their underlying memory in the same way,
// which is checked by comparing their type tags.
// (e.g. a Uint8Array and a Uint16Array with the same memory content
// could still be different because they will be interpreted differently).
//
// For strict comparison, objects should have
// a) The same built-in type tags
// b) The same prototypes.
function innerDeepEqual(val1, val2, strict, memos) {
    // All identical values are equivalent, as determined by ===.
    if (val1 === val2) {
        if (val1 !== 0) return true;
        return strict ? objectIs(val1, val2) : true;
    } // Check more closely if val1 and val2 are equal.
    if (strict) {
        if (_typeof(val1) !== "object") return typeof val1 === "number" && numberIsNaN(val1) && numberIsNaN(val2);
        if (_typeof(val2) !== "object" || val1 === null || val2 === null) return false;
        if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) return false;
    } else {
        if (val1 === null || _typeof(val1) !== "object") {
            if (val2 === null || _typeof(val2) !== "object") // eslint-disable-next-line eqeqeq
            return val1 == val2;
            return false;
        }
        if (val2 === null || _typeof(val2) !== "object") return false;
    }
    var val1Tag = objectToString(val1);
    var val2Tag = objectToString(val2);
    if (val1Tag !== val2Tag) return false;
    if (Array.isArray(val1)) {
        // Check for sparse arrays and general fast path
        if (val1.length !== val2.length) return false;
        var keys1 = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (keys1.length !== keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
    } // [browserify] This triggers on certain types in IE (Map/Set) so we don't
    // wan't to early return out of the rest of the checks. However we can check
    // if the second value is one of these values and the first isn't.
    if (val1Tag === "[object Object]") {
        // return keyCheck(val1, val2, strict, memos, kNoIterator);
        if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) return false;
    }
    if (isDate(val1)) {
        if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) return false;
    } else if (isRegExp(val1)) {
        if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) return false;
    } else if (isNativeError(val1) || val1 instanceof Error) {
        // Do not compare the stack as it might differ even though the error itself
        // is otherwise identical.
        if (val1.message !== val2.message || val1.name !== val2.name) return false;
    } else if (isArrayBufferView(val1)) {
        if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
            if (!areSimilarFloatArrays(val1, val2)) return false;
        } else if (!areSimilarTypedArrays(val1, val2)) return false;
         // Buffer.compare returns true, so val1.length === val2.length. If they both
        // only contain numeric keys, we don't need to exam further than checking
        // the symbols.
        var _keys = getOwnNonIndexProperties(val1, ONLY_ENUMERABLE);
        var _keys2 = getOwnNonIndexProperties(val2, ONLY_ENUMERABLE);
        if (_keys.length !== _keys2.length) return false;
        return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
    } else if (isSet(val1)) {
        if (!isSet(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsSet);
    } else if (isMap(val1)) {
        if (!isMap(val2) || val1.size !== val2.size) return false;
        return keyCheck(val1, val2, strict, memos, kIsMap);
    } else if (isAnyArrayBuffer(val1)) {
        if (!areEqualArrayBuffers(val1, val2)) return false;
    } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) return false;
    return keyCheck(val1, val2, strict, memos, kNoIterator);
}
function getEnumerables(val, keys) {
    return keys.filter(function(k) {
        return propertyIsEnumerable(val, k);
    });
}
function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
    // For all remaining Object pairs, including Array, objects and Maps,
    // equivalence is determined by having:
    // a) The same number of owned enumerable properties
    // b) The same set of keys/indexes (although not necessarily the same order)
    // c) Equivalent values for every corresponding key/index
    // d) For Sets and Maps, equal contents
    // Note: this accounts for both named and indexed properties on Arrays.
    if (arguments.length === 5) {
        aKeys = Object.keys(val1);
        var bKeys = Object.keys(val2); // The pair must have the same number of owned properties.
        if (aKeys.length !== bKeys.length) return false;
    } // Cheap key test
    var i = 0;
    for(; i < aKeys.length; i++){
        if (!hasOwnProperty(val2, aKeys[i])) return false;
    }
    if (strict && arguments.length === 5) {
        var symbolKeysA = objectGetOwnPropertySymbols(val1);
        if (symbolKeysA.length !== 0) {
            var count = 0;
            for(i = 0; i < symbolKeysA.length; i++){
                var key = symbolKeysA[i];
                if (propertyIsEnumerable(val1, key)) {
                    if (!propertyIsEnumerable(val2, key)) return false;
                    aKeys.push(key);
                    count++;
                } else if (propertyIsEnumerable(val2, key)) return false;
            }
            var symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) return false;
        } else {
            var _symbolKeysB = objectGetOwnPropertySymbols(val2);
            if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) return false;
        }
    }
    if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) return true;
     // Use memos to handle cycles.
    if (memos === undefined) memos = {
        val1: new Map(),
        val2: new Map(),
        position: 0
    };
    else {
        // We prevent up to two map.has(x) calls by directly retrieving the value
        // and checking for undefined. The map can only contain numbers, so it is
        // safe to check for undefined only.
        var val2MemoA = memos.val1.get(val1);
        if (val2MemoA !== undefined) {
            var val2MemoB = memos.val2.get(val2);
            if (val2MemoB !== undefined) return val2MemoA === val2MemoB;
        }
        memos.position++;
    }
    memos.val1.set(val1, memos.position);
    memos.val2.set(val2, memos.position);
    var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
    memos.val1.delete(val1);
    memos.val2.delete(val2);
    return areEq;
}
function setHasEqualElement(set, val1, strict, memo) {
    // Go looking.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var val2 = setValues[i];
        if (innerDeepEqual(val1, val2, strict, memo)) {
            // Remove the matching element to make sure we do not check that again.
            set.delete(val2);
            return true;
        }
    }
    return false;
} // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
// Sadly it is not possible to detect corresponding values properly in case the
// type is a string, number, bigint or boolean. The reason is that those values
// can match lots of different string values (e.g., 1n == '+00001').
function findLooseMatchingPrimitives(prim) {
    switch(_typeof(prim)){
        case "undefined":
            return null;
        case "object":
            // Only pass in null as object!
            return undefined;
        case "symbol":
            return false;
        case "string":
            prim = +prim;
        // Loose equal entries exist only if the string is possible to convert to
        // a regular number and not NaN.
        // Fall through
        case "number":
            if (numberIsNaN(prim)) return false;
    }
    return true;
}
function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    return b.has(altValue) && !a.has(altValue);
}
function mapMightHaveLoosePrim(a, b, prim, item, memo) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    var curB = b.get(altValue);
    if (curB === undefined && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) return false;
    return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
}
function setEquiv(a, b, strict, memo) {
    // This is a lazily initiated Set of entries which have to be compared
    // pairwise.
    var set = null;
    var aValues = arrayFromSet(a);
    for(var i = 0; i < aValues.length; i++){
        var val = aValues[i]; // Note: Checking for the objects first improves the performance for object
        // heavy sets but it is a minor slow down for primitives. As they are fast
        // to check this improves the worst case scenario instead.
        if (_typeof(val) === "object" && val !== null) {
            if (set === null) set = new Set();
             // If the specified value doesn't exist in the second set its an not null
            // object (or non strict only: a not matching primitive) we'll need to go
            // hunting for something thats deep-(strict-)equal to it. To make this
            // O(n log n) complexity we have to copy these values in a new set first.
            set.add(val);
        } else if (!b.has(val)) {
            if (strict) return false; // Fast path to detect missing string, symbol, undefined and null values.
            if (!setMightHaveLoosePrim(a, b, val)) return false;
            if (set === null) set = new Set();
            set.add(val);
        }
    }
    if (set !== null) {
        var bValues = arrayFromSet(b);
        for(var _i = 0; _i < bValues.length; _i++){
            var _val = bValues[_i]; // We have to check if a primitive value is already
            // matching and only if it's not, go hunting for it.
            if (_typeof(_val) === "object" && _val !== null) {
                if (!setHasEqualElement(set, _val, strict, memo)) return false;
            } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
    // To be able to handle cases like:
    //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
    // ... we need to consider *all* matching keys, not just the first we find.
    var setValues = arrayFromSet(set);
    for(var i = 0; i < setValues.length; i++){
        var key2 = setValues[i];
        if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
            set.delete(key2);
            return true;
        }
    }
    return false;
}
function mapEquiv(a, b, strict, memo) {
    var set = null;
    var aEntries = arrayFromMap(a);
    for(var i = 0; i < aEntries.length; i++){
        var _aEntries$i = _slicedToArray(aEntries[i], 2), key = _aEntries$i[0], item1 = _aEntries$i[1];
        if (_typeof(key) === "object" && key !== null) {
            if (set === null) set = new Set();
            set.add(key);
        } else {
            // By directly retrieving the value we prevent another b.has(key) check in
            // almost all possible cases.
            var item2 = b.get(key);
            if (item2 === undefined && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
                if (strict) return false; // Fast path to detect missing string, symbol, undefined and null
                // keys.
                if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;
                if (set === null) set = new Set();
                set.add(key);
            }
        }
    }
    if (set !== null) {
        var bEntries = arrayFromMap(b);
        for(var _i2 = 0; _i2 < bEntries.length; _i2++){
            var _bEntries$_i = _slicedToArray(bEntries[_i2], 2), key = _bEntries$_i[0], item = _bEntries$_i[1];
            if (_typeof(key) === "object" && key !== null) {
                if (!mapHasEqualEntry(set, a, key, item, strict, memo)) return false;
            } else if (!strict && (!a.has(key) || !innerDeepEqual(a.get(key), item, false, memo)) && !mapHasEqualEntry(set, a, key, item, false, memo)) return false;
        }
        return set.size === 0;
    }
    return true;
}
function objEquiv(a, b, strict, keys, memos, iterationType) {
    // Sets and maps don't have their entries accessible via normal object
    // properties.
    var i = 0;
    if (iterationType === kIsSet) {
        if (!setEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsMap) {
        if (!mapEquiv(a, b, strict, memos)) return false;
    } else if (iterationType === kIsArray) for(; i < a.length; i++){
        if (hasOwnProperty(a, i)) {
            if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) return false;
        } else if (hasOwnProperty(b, i)) return false;
        else {
            // Array is sparse.
            var keysA = Object.keys(a);
            for(; i < keysA.length; i++){
                var key = keysA[i];
                if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) return false;
            }
            if (keysA.length !== Object.keys(b).length) return false;
            return true;
        }
    }
     // The pair must have equivalent values for every corresponding key.
    // Possibly expensive deep test:
    for(i = 0; i < keys.length; i++){
        var _key = keys[i];
        if (!innerDeepEqual(a[_key], b[_key], strict, memos)) return false;
    }
    return true;
}
function isDeepEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kLoose);
}
function isDeepStrictEqual(val1, val2) {
    return innerDeepEqual(val1, val2, kStrict);
}
module.exports = {
    isDeepEqual: isDeepEqual,
    isDeepStrictEqual: isDeepStrictEqual
};

},{"3addb16fbdd05c1c":"k2tpA","a27e57a3fd2e2e23":"hY4fH","4940125679601087":"cxohQ"}],"hY4fH":[function(require,module,exports) {
"use strict";
var callBind = require("8bc778ead6edc2b");
var define = require("1e9a111647ec40d6");
var implementation = require("db9e8266e38a0a1c");
var getPolyfill = require("37ae20d268339d21");
var shim = require("9fe13ad91d3d9c68");
var polyfill = callBind(getPolyfill(), Number);
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"8bc778ead6edc2b":"bfo8D","1e9a111647ec40d6":"6eq5U","db9e8266e38a0a1c":"lxsrq","37ae20d268339d21":"h00Nr","9fe13ad91d3d9c68":"cr2es"}],"lxsrq":[function(require,module,exports) {
"use strict";
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function isNaN(value) {
    return value !== value;
};

},{}],"h00Nr":[function(require,module,exports) {
"use strict";
var implementation = require("e25466f067cfd8fc");
module.exports = function getPolyfill() {
    if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) return Number.isNaN;
    return implementation;
};

},{"e25466f067cfd8fc":"lxsrq"}],"cr2es":[function(require,module,exports) {
"use strict";
var define = require("6e613ddb8bace1c6");
var getPolyfill = require("f2ce5ac0488eb372");
/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */ module.exports = function shimNumberIsNaN() {
    var polyfill = getPolyfill();
    define(Number, {
        isNaN: polyfill
    }, {
        isNaN: function testIsNaN() {
            return Number.isNaN !== polyfill;
        }
    });
    return polyfill;
};

},{"6e613ddb8bace1c6":"6eq5U","f2ce5ac0488eb372":"h00Nr"}],"bEP9t":[function(require,module,exports) {
"use strict";
module.exports = {
    copySync: require("118f445d7f26c757")
};

},{"118f445d7f26c757":"512RH"}],"512RH":[function(require,module,exports) {
var process = require("bc3605ed266c1870");
"use strict";
const fs = require("16dcd2026ceb196f");
const path = require("adc26afc911987a2");
const mkdirpSync = require("b21e5f5c2cdfdd39").mkdirsSync;
const utimesSync = require("33cb26a330022b8").utimesMillisSync;
const stat = require("abfccea2b76993b");
function copySync(src, dest, opts) {
    if (typeof opts === "function") opts = {
        filter: opts
    };
    opts = opts || {};
    opts.clobber = "clobber" in opts ? !!opts.clobber : true // default to true for now
    ;
    opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber // overwrite falls back to clobber
    ;
    // Warn about using preserveTimestamps on 32-bit node
    if (opts.preserveTimestamps && process.arch === "ia32") console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`);
    const { srcStat , destStat  } = stat.checkPathsSync(src, dest, "copy");
    stat.checkParentPathsSync(src, srcStat, dest, "copy");
    return handleFilterAndCopy(destStat, src, dest, opts);
}
function handleFilterAndCopy(destStat, src, dest, opts) {
    if (opts.filter && !opts.filter(src, dest)) return;
    const destParent = path.dirname(dest);
    if (!fs.existsSync(destParent)) mkdirpSync(destParent);
    return startCopy(destStat, src, dest, opts);
}
function startCopy(destStat, src, dest, opts) {
    if (opts.filter && !opts.filter(src, dest)) return;
    return getStats(destStat, src, dest, opts);
}
function getStats(destStat, src, dest, opts) {
    const statSync = opts.dereference ? fs.statSync : fs.lstatSync;
    const srcStat = statSync(src);
    if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts);
    else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts);
    else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts);
}
function onFile(srcStat, destStat, src, dest, opts) {
    if (!destStat) return copyFile(srcStat, src, dest, opts);
    return mayCopyFile(srcStat, src, dest, opts);
}
function mayCopyFile(srcStat, src, dest, opts) {
    if (opts.overwrite) {
        fs.unlinkSync(dest);
        return copyFile(srcStat, src, dest, opts);
    } else if (opts.errorOnExist) throw new Error(`'${dest}' already exists`);
}
function copyFile(srcStat, src, dest, opts) {
    if (typeof fs.copyFileSync === "function") {
        fs.copyFileSync(src, dest);
        fs.chmodSync(dest, srcStat.mode);
        if (opts.preserveTimestamps) return utimesSync(dest, srcStat.atime, srcStat.mtime);
        return;
    }
    return copyFileFallback(srcStat, src, dest, opts);
}
function copyFileFallback(srcStat, src, dest, opts) {
    const BUF_LENGTH = 65536;
    const _buff = require("68eb32168ed3e53")(BUF_LENGTH);
    const fdr = fs.openSync(src, "r");
    const fdw = fs.openSync(dest, "w", srcStat.mode);
    let pos = 0;
    while(pos < srcStat.size){
        const bytesRead = fs.readSync(fdr, _buff, 0, BUF_LENGTH, pos);
        fs.writeSync(fdw, _buff, 0, bytesRead);
        pos += bytesRead;
    }
    if (opts.preserveTimestamps) fs.futimesSync(fdw, srcStat.atime, srcStat.mtime);
    fs.closeSync(fdr);
    fs.closeSync(fdw);
}
function onDir(srcStat, destStat, src, dest, opts) {
    if (!destStat) return mkDirAndCopy(srcStat, src, dest, opts);
    if (destStat && !destStat.isDirectory()) throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
    return copyDir(src, dest, opts);
}
function mkDirAndCopy(srcStat, src, dest, opts) {
    fs.mkdirSync(dest);
    copyDir(src, dest, opts);
    return fs.chmodSync(dest, srcStat.mode);
}
function copyDir(src, dest, opts) {
    fs.readdirSync(src).forEach((item)=>copyDirItem(item, src, dest, opts));
}
function copyDirItem(item, src, dest, opts) {
    const srcItem = path.join(src, item);
    const destItem = path.join(dest, item);
    const { destStat  } = stat.checkPathsSync(srcItem, destItem, "copy");
    return startCopy(destStat, srcItem, destItem, opts);
}
function onLink(destStat, src, dest, opts) {
    let resolvedSrc = fs.readlinkSync(src);
    if (opts.dereference) resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
    if (!destStat) return fs.symlinkSync(resolvedSrc, dest);
    else {
        let resolvedDest;
        try {
            resolvedDest = fs.readlinkSync(dest);
        } catch (err) {
            // dest exists and is a regular file or directory,
            // Windows may throw UNKNOWN error. If dest already exists,
            // fs throws error anyway, so no need to guard against it here.
            if (err.code === "EINVAL" || err.code === "UNKNOWN") return fs.symlinkSync(resolvedSrc, dest);
            throw err;
        }
        if (opts.dereference) resolvedDest = path.resolve(process.cwd(), resolvedDest);
        if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
        // prevent copy if src is a subdir of dest since unlinking
        // dest in this case would result in removing src contents
        // and therefore a broken symlink would be created.
        if (fs.statSync(dest).isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
        return copyLink(resolvedSrc, dest);
    }
}
function copyLink(resolvedSrc, dest) {
    fs.unlinkSync(dest);
    return fs.symlinkSync(resolvedSrc, dest);
}
module.exports = copySync;

},{"bc3605ed266c1870":"d5jf4","16dcd2026ceb196f":"cASLk","adc26afc911987a2":"loE3o","b21e5f5c2cdfdd39":"bCV4J","33cb26a330022b8":"hJukW","abfccea2b76993b":"apnSw","68eb32168ed3e53":"k0Q8W"}],"bCV4J":[function(require,module,exports) {
"use strict";
const u = require("7d55876fd0887333").fromCallback;
const mkdirs = u(require("b350276bf0868fa0"));
const mkdirsSync = require("5e67cdb9a0ed3c73");
module.exports = {
    mkdirs,
    mkdirsSync,
    // alias
    mkdirp: mkdirs,
    mkdirpSync: mkdirsSync,
    ensureDir: mkdirs,
    ensureDirSync: mkdirsSync
};

},{"7d55876fd0887333":"kyfTT","b350276bf0868fa0":"Xz6dV","5e67cdb9a0ed3c73":"hbIbN"}],"Xz6dV":[function(require,module,exports) {
var process = require("8d368cb010e4a1bb");
"use strict";
const fs = require("93112a9a617856f2");
const path = require("7cf05c4a7fce7091");
const invalidWin32Path = require("b3d5d204118c342").invalidWin32Path;
const o777 = parseInt("0777", 8);
function mkdirs(p, opts, callback, made) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (!opts || typeof opts !== "object") opts = {
        mode: opts
    };
    if (process.platform === "win32" && invalidWin32Path(p)) {
        const errInval = new Error(p + " contains invalid WIN32 path characters.");
        errInval.code = "EINVAL";
        return callback(errInval);
    }
    let mode = opts.mode;
    const xfs = opts.fs || fs;
    if (mode === undefined) mode = o777 & ~process.umask();
    if (!made) made = null;
    callback = callback || function() {};
    p = path.resolve(p);
    xfs.mkdir(p, mode, (er)=>{
        if (!er) {
            made = made || p;
            return callback(null, made);
        }
        switch(er.code){
            case "ENOENT":
                if (path.dirname(p) === p) return callback(er);
                mkdirs(path.dirname(p), opts, (er, made)=>{
                    if (er) callback(er, made);
                    else mkdirs(p, opts, callback, made);
                });
                break;
            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                xfs.stat(p, (er2, stat)=>{
                    // if the stat fails, then that's super weird.
                    // let the original error be the failure reason.
                    if (er2 || !stat.isDirectory()) callback(er, made);
                    else callback(null, made);
                });
                break;
        }
    });
}
module.exports = mkdirs;

},{"8d368cb010e4a1bb":"d5jf4","93112a9a617856f2":"cASLk","7cf05c4a7fce7091":"loE3o","b3d5d204118c342":"65Y2f"}],"65Y2f":[function(require,module,exports) {
"use strict";
const path = require("3f2835253e86c33b");
// get drive on windows
function getRootPath(p) {
    p = path.normalize(path.resolve(p)).split(path.sep);
    if (p.length > 0) return p[0];
    return null;
}
// http://stackoverflow.com/a/62888/10333 contains more accurate
// TODO: expand to include the rest
const INVALID_PATH_CHARS = /[<>:"|?*]/;
function invalidWin32Path(p) {
    const rp = getRootPath(p);
    p = p.replace(rp, "");
    return INVALID_PATH_CHARS.test(p);
}
module.exports = {
    getRootPath,
    invalidWin32Path
};

},{"3f2835253e86c33b":"loE3o"}],"hbIbN":[function(require,module,exports) {
var process = require("3b2f37a81c30d457");
"use strict";
const fs = require("c879c2c9e4cf0b8d");
const path = require("969f590eda179e36");
const invalidWin32Path = require("356346447b6375ca").invalidWin32Path;
const o777 = parseInt("0777", 8);
function mkdirsSync(p, opts, made) {
    if (!opts || typeof opts !== "object") opts = {
        mode: opts
    };
    let mode = opts.mode;
    const xfs = opts.fs || fs;
    if (process.platform === "win32" && invalidWin32Path(p)) {
        const errInval = new Error(p + " contains invalid WIN32 path characters.");
        errInval.code = "EINVAL";
        throw errInval;
    }
    if (mode === undefined) mode = o777 & ~process.umask();
    if (!made) made = null;
    p = path.resolve(p);
    try {
        xfs.mkdirSync(p, mode);
        made = made || p;
    } catch (err0) {
        if (err0.code === "ENOENT") {
            if (path.dirname(p) === p) throw err0;
            made = mkdirsSync(path.dirname(p), opts, made);
            mkdirsSync(p, opts, made);
        } else {
            // In the case of any other error, just see if there's a dir there
            // already. If so, then hooray!  If not, then something is borked.
            let stat;
            try {
                stat = xfs.statSync(p);
            } catch (err1) {
                throw err0;
            }
            if (!stat.isDirectory()) throw err0;
        }
    }
    return made;
}
module.exports = mkdirsSync;

},{"3b2f37a81c30d457":"d5jf4","c879c2c9e4cf0b8d":"cASLk","969f590eda179e36":"loE3o","356346447b6375ca":"65Y2f"}],"hJukW":[function(require,module,exports) {
"use strict";
const fs = require("f266a01c9713a4a");
const os = require("3f32ccb0a87d5224");
const path = require("f30775cbb5b25258");
// HFS, ext{2,3}, FAT do not, Node.js v0.10 does not
function hasMillisResSync() {
    let tmpfile = path.join("millis-test-sync" + Date.now().toString() + Math.random().toString().slice(2));
    tmpfile = path.join(os.tmpdir(), tmpfile);
    // 550 millis past UNIX epoch
    const d = new Date(1435410243862);
    fs.writeFileSync(tmpfile, "https://github.com/jprichardson/node-fs-extra/pull/141");
    const fd = fs.openSync(tmpfile, "r+");
    fs.futimesSync(fd, d, d);
    fs.closeSync(fd);
    return fs.statSync(tmpfile).mtime > 1435410243000;
}
function hasMillisRes(callback) {
    let tmpfile = path.join("millis-test" + Date.now().toString() + Math.random().toString().slice(2));
    tmpfile = path.join(os.tmpdir(), tmpfile);
    // 550 millis past UNIX epoch
    const d = new Date(1435410243862);
    fs.writeFile(tmpfile, "https://github.com/jprichardson/node-fs-extra/pull/141", (err)=>{
        if (err) return callback(err);
        fs.open(tmpfile, "r+", (err, fd)=>{
            if (err) return callback(err);
            fs.futimes(fd, d, d, (err)=>{
                if (err) return callback(err);
                fs.close(fd, (err)=>{
                    if (err) return callback(err);
                    fs.stat(tmpfile, (err, stats)=>{
                        if (err) return callback(err);
                        callback(null, stats.mtime > 1435410243000);
                    });
                });
            });
        });
    });
}
function timeRemoveMillis(timestamp) {
    if (typeof timestamp === "number") return Math.floor(timestamp / 1000) * 1000;
    else if (timestamp instanceof Date) return new Date(Math.floor(timestamp.getTime() / 1000) * 1000);
    else throw new Error("fs-extra: timeRemoveMillis() unknown parameter type");
}
function utimesMillis(path, atime, mtime, callback) {
    // if (!HAS_MILLIS_RES) return fs.utimes(path, atime, mtime, callback)
    fs.open(path, "r+", (err, fd)=>{
        if (err) return callback(err);
        fs.futimes(fd, atime, mtime, (futimesErr)=>{
            fs.close(fd, (closeErr)=>{
                if (callback) callback(futimesErr || closeErr);
            });
        });
    });
}
function utimesMillisSync(path, atime, mtime) {
    const fd = fs.openSync(path, "r+");
    fs.futimesSync(fd, atime, mtime);
    return fs.closeSync(fd);
}
module.exports = {
    hasMillisRes,
    hasMillisResSync,
    timeRemoveMillis,
    utimesMillis,
    utimesMillisSync
};

},{"f266a01c9713a4a":"cASLk","3f32ccb0a87d5224":"6yyXu","f30775cbb5b25258":"loE3o"}],"6yyXu":[function(require,module,exports) {
exports.endianness = function() {
    return "LE";
};
exports.hostname = function() {
    if (typeof location !== "undefined") return location.hostname;
    else return "";
};
exports.loadavg = function() {
    return [];
};
exports.uptime = function() {
    return 0;
};
exports.freemem = function() {
    return Number.MAX_VALUE;
};
exports.totalmem = function() {
    return Number.MAX_VALUE;
};
exports.cpus = function() {
    return [];
};
exports.type = function() {
    return "Browser";
};
exports.release = function() {
    if (typeof navigator !== "undefined") return navigator.appVersion;
    return "";
};
exports.networkInterfaces = exports.getNetworkInterfaces = function() {
    return {};
};
exports.arch = function() {
    return "javascript";
};
exports.platform = function() {
    return "browser";
};
exports.tmpdir = exports.tmpDir = function() {
    return "/tmp";
};
exports.EOL = "\n";
exports.homedir = function() {
    return "/";
};

},{}],"apnSw":[function(require,module,exports) {
var process = require("a38a8c3c7fd8f8a");
"use strict";
const fs = require("3b59a066d6bd7800");
const path = require("aa2c037a3ac0a2db");
const NODE_VERSION_MAJOR_WITH_BIGINT = 10;
const NODE_VERSION_MINOR_WITH_BIGINT = 5;
const NODE_VERSION_PATCH_WITH_BIGINT = 0;
const nodeVersion = process.versions.node.split(".");
const nodeVersionMajor = Number.parseInt(nodeVersion[0], 10);
const nodeVersionMinor = Number.parseInt(nodeVersion[1], 10);
const nodeVersionPatch = Number.parseInt(nodeVersion[2], 10);
function nodeSupportsBigInt() {
    if (nodeVersionMajor > NODE_VERSION_MAJOR_WITH_BIGINT) return true;
    else if (nodeVersionMajor === NODE_VERSION_MAJOR_WITH_BIGINT) {
        if (nodeVersionMinor > NODE_VERSION_MINOR_WITH_BIGINT) return true;
        else if (nodeVersionMinor === NODE_VERSION_MINOR_WITH_BIGINT) {
            if (nodeVersionPatch >= NODE_VERSION_PATCH_WITH_BIGINT) return true;
        }
    }
    return false;
}
function getStats(src, dest, cb) {
    if (nodeSupportsBigInt()) fs.stat(src, {
        bigint: true
    }, (err, srcStat)=>{
        if (err) return cb(err);
        fs.stat(dest, {
            bigint: true
        }, (err, destStat)=>{
            if (err) {
                if (err.code === "ENOENT") return cb(null, {
                    srcStat,
                    destStat: null
                });
                return cb(err);
            }
            return cb(null, {
                srcStat,
                destStat
            });
        });
    });
    else fs.stat(src, (err, srcStat)=>{
        if (err) return cb(err);
        fs.stat(dest, (err, destStat)=>{
            if (err) {
                if (err.code === "ENOENT") return cb(null, {
                    srcStat,
                    destStat: null
                });
                return cb(err);
            }
            return cb(null, {
                srcStat,
                destStat
            });
        });
    });
}
function getStatsSync(src, dest) {
    let srcStat, destStat;
    if (nodeSupportsBigInt()) srcStat = fs.statSync(src, {
        bigint: true
    });
    else srcStat = fs.statSync(src);
    try {
        if (nodeSupportsBigInt()) destStat = fs.statSync(dest, {
            bigint: true
        });
        else destStat = fs.statSync(dest);
    } catch (err) {
        if (err.code === "ENOENT") return {
            srcStat,
            destStat: null
        };
        throw err;
    }
    return {
        srcStat,
        destStat
    };
}
function checkPaths(src, dest, funcName, cb) {
    getStats(src, dest, (err, stats)=>{
        if (err) return cb(err);
        const { srcStat , destStat  } = stats;
        if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) return cb(new Error("Source and destination must not be the same."));
        if (srcStat.isDirectory() && isSrcSubdir(src, dest)) return cb(new Error(errMsg(src, dest, funcName)));
        return cb(null, {
            srcStat,
            destStat
        });
    });
}
function checkPathsSync(src, dest, funcName) {
    const { srcStat , destStat  } = getStatsSync(src, dest);
    if (destStat && destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) throw new Error("Source and destination must not be the same.");
    if (srcStat.isDirectory() && isSrcSubdir(src, dest)) throw new Error(errMsg(src, dest, funcName));
    return {
        srcStat,
        destStat
    };
}
// recursively check if dest parent is a subdirectory of src.
// It works for all file types including symlinks since it
// checks the src and dest inodes. It starts from the deepest
// parent and stops once it reaches the src parent or the root path.
function checkParentPaths(src, srcStat, dest, funcName, cb) {
    const srcParent = path.resolve(path.dirname(src));
    const destParent = path.resolve(path.dirname(dest));
    if (destParent === srcParent || destParent === path.parse(destParent).root) return cb();
    if (nodeSupportsBigInt()) fs.stat(destParent, {
        bigint: true
    }, (err, destStat)=>{
        if (err) {
            if (err.code === "ENOENT") return cb();
            return cb(err);
        }
        if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) return cb(new Error(errMsg(src, dest, funcName)));
        return checkParentPaths(src, srcStat, destParent, funcName, cb);
    });
    else fs.stat(destParent, (err, destStat)=>{
        if (err) {
            if (err.code === "ENOENT") return cb();
            return cb(err);
        }
        if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) return cb(new Error(errMsg(src, dest, funcName)));
        return checkParentPaths(src, srcStat, destParent, funcName, cb);
    });
}
function checkParentPathsSync(src, srcStat, dest, funcName) {
    const srcParent = path.resolve(path.dirname(src));
    const destParent = path.resolve(path.dirname(dest));
    if (destParent === srcParent || destParent === path.parse(destParent).root) return;
    let destStat;
    try {
        if (nodeSupportsBigInt()) destStat = fs.statSync(destParent, {
            bigint: true
        });
        else destStat = fs.statSync(destParent);
    } catch (err) {
        if (err.code === "ENOENT") return;
        throw err;
    }
    if (destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev) throw new Error(errMsg(src, dest, funcName));
    return checkParentPathsSync(src, srcStat, destParent, funcName);
}
// return true if dest is a subdir of src, otherwise false.
// It only checks the path strings.
function isSrcSubdir(src, dest) {
    const srcArr = path.resolve(src).split(path.sep).filter((i)=>i);
    const destArr = path.resolve(dest).split(path.sep).filter((i)=>i);
    return srcArr.reduce((acc, cur, i)=>acc && destArr[i] === cur, true);
}
function errMsg(src, dest, funcName) {
    return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`;
}
module.exports = {
    checkPaths,
    checkPathsSync,
    checkParentPaths,
    checkParentPathsSync,
    isSrcSubdir
};

},{"a38a8c3c7fd8f8a":"d5jf4","3b59a066d6bd7800":"cASLk","aa2c037a3ac0a2db":"loE3o"}],"k0Q8W":[function(require,module,exports) {
var Buffer = require("a39accb2f56feca1").Buffer;
"use strict";
/* eslint-disable node/no-deprecated-api */ module.exports = function(size) {
    if (typeof Buffer.allocUnsafe === "function") try {
        return Buffer.allocUnsafe(size);
    } catch (e) {
        return new Buffer(size);
    }
    return new Buffer(size);
};

},{"a39accb2f56feca1":"fCgem"}],"ifEND":[function(require,module,exports) {
"use strict";
const u = require("2c701b575482d25b").fromCallback;
module.exports = {
    copy: u(require("cfe3ecc9130278b7"))
};

},{"2c701b575482d25b":"kyfTT","cfe3ecc9130278b7":"clBME"}],"clBME":[function(require,module,exports) {
var process = require("df70113f88a1dc9d");
"use strict";
const fs = require("9d1db0ec29323d5b");
const path = require("f0f4e2f5bb766bf2");
const mkdirp = require("fc1be81907283018").mkdirs;
const pathExists = require("c755d33dc975e4e3").pathExists;
const utimes = require("ab23e6d832a1112c").utimesMillis;
const stat = require("b44230577f0cd582");
function copy(src, dest, opts, cb) {
    if (typeof opts === "function" && !cb) {
        cb = opts;
        opts = {};
    } else if (typeof opts === "function") opts = {
        filter: opts
    };
    cb = cb || function() {};
    opts = opts || {};
    opts.clobber = "clobber" in opts ? !!opts.clobber : true // default to true for now
    ;
    opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber // overwrite falls back to clobber
    ;
    // Warn about using preserveTimestamps on 32-bit node
    if (opts.preserveTimestamps && process.arch === "ia32") console.warn(`fs-extra: Using the preserveTimestamps option in 32-bit node is not recommended;\n
    see https://github.com/jprichardson/node-fs-extra/issues/269`);
    stat.checkPaths(src, dest, "copy", (err, stats)=>{
        if (err) return cb(err);
        const { srcStat , destStat  } = stats;
        stat.checkParentPaths(src, srcStat, dest, "copy", (err)=>{
            if (err) return cb(err);
            if (opts.filter) return handleFilter(checkParentDir, destStat, src, dest, opts, cb);
            return checkParentDir(destStat, src, dest, opts, cb);
        });
    });
}
function checkParentDir(destStat, src, dest, opts, cb) {
    const destParent = path.dirname(dest);
    pathExists(destParent, (err, dirExists)=>{
        if (err) return cb(err);
        if (dirExists) return startCopy(destStat, src, dest, opts, cb);
        mkdirp(destParent, (err)=>{
            if (err) return cb(err);
            return startCopy(destStat, src, dest, opts, cb);
        });
    });
}
function handleFilter(onInclude, destStat, src, dest, opts, cb) {
    Promise.resolve(opts.filter(src, dest)).then((include)=>{
        if (include) return onInclude(destStat, src, dest, opts, cb);
        return cb();
    }, (error)=>cb(error));
}
function startCopy(destStat, src, dest, opts, cb) {
    if (opts.filter) return handleFilter(getStats, destStat, src, dest, opts, cb);
    return getStats(destStat, src, dest, opts, cb);
}
function getStats(destStat, src, dest, opts, cb) {
    const stat = opts.dereference ? fs.stat : fs.lstat;
    stat(src, (err, srcStat)=>{
        if (err) return cb(err);
        if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts, cb);
        else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice()) return onFile(srcStat, destStat, src, dest, opts, cb);
        else if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts, cb);
    });
}
function onFile(srcStat, destStat, src, dest, opts, cb) {
    if (!destStat) return copyFile(srcStat, src, dest, opts, cb);
    return mayCopyFile(srcStat, src, dest, opts, cb);
}
function mayCopyFile(srcStat, src, dest, opts, cb) {
    if (opts.overwrite) fs.unlink(dest, (err)=>{
        if (err) return cb(err);
        return copyFile(srcStat, src, dest, opts, cb);
    });
    else if (opts.errorOnExist) return cb(new Error(`'${dest}' already exists`));
    else return cb();
}
function copyFile(srcStat, src, dest, opts, cb) {
    if (typeof fs.copyFile === "function") return fs.copyFile(src, dest, (err)=>{
        if (err) return cb(err);
        return setDestModeAndTimestamps(srcStat, dest, opts, cb);
    });
    return copyFileFallback(srcStat, src, dest, opts, cb);
}
function copyFileFallback(srcStat, src, dest, opts, cb) {
    const rs = fs.createReadStream(src);
    rs.on("error", (err)=>cb(err)).once("open", ()=>{
        const ws = fs.createWriteStream(dest, {
            mode: srcStat.mode
        });
        ws.on("error", (err)=>cb(err)).on("open", ()=>rs.pipe(ws)).once("close", ()=>setDestModeAndTimestamps(srcStat, dest, opts, cb));
    });
}
function setDestModeAndTimestamps(srcStat, dest, opts, cb) {
    fs.chmod(dest, srcStat.mode, (err)=>{
        if (err) return cb(err);
        if (opts.preserveTimestamps) return utimes(dest, srcStat.atime, srcStat.mtime, cb);
        return cb();
    });
}
function onDir(srcStat, destStat, src, dest, opts, cb) {
    if (!destStat) return mkDirAndCopy(srcStat, src, dest, opts, cb);
    if (destStat && !destStat.isDirectory()) return cb(new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`));
    return copyDir(src, dest, opts, cb);
}
function mkDirAndCopy(srcStat, src, dest, opts, cb) {
    fs.mkdir(dest, (err)=>{
        if (err) return cb(err);
        copyDir(src, dest, opts, (err)=>{
            if (err) return cb(err);
            return fs.chmod(dest, srcStat.mode, cb);
        });
    });
}
function copyDir(src, dest, opts, cb) {
    fs.readdir(src, (err, items)=>{
        if (err) return cb(err);
        return copyDirItems(items, src, dest, opts, cb);
    });
}
function copyDirItems(items, src, dest, opts, cb) {
    const item = items.pop();
    if (!item) return cb();
    return copyDirItem(items, item, src, dest, opts, cb);
}
function copyDirItem(items, item, src, dest, opts, cb) {
    const srcItem = path.join(src, item);
    const destItem = path.join(dest, item);
    stat.checkPaths(srcItem, destItem, "copy", (err, stats)=>{
        if (err) return cb(err);
        const { destStat  } = stats;
        startCopy(destStat, srcItem, destItem, opts, (err)=>{
            if (err) return cb(err);
            return copyDirItems(items, src, dest, opts, cb);
        });
    });
}
function onLink(destStat, src, dest, opts, cb) {
    fs.readlink(src, (err, resolvedSrc)=>{
        if (err) return cb(err);
        if (opts.dereference) resolvedSrc = path.resolve(process.cwd(), resolvedSrc);
        if (!destStat) return fs.symlink(resolvedSrc, dest, cb);
        else fs.readlink(dest, (err, resolvedDest)=>{
            if (err) {
                // dest exists and is a regular file or directory,
                // Windows may throw UNKNOWN error. If dest already exists,
                // fs throws error anyway, so no need to guard against it here.
                if (err.code === "EINVAL" || err.code === "UNKNOWN") return fs.symlink(resolvedSrc, dest, cb);
                return cb(err);
            }
            if (opts.dereference) resolvedDest = path.resolve(process.cwd(), resolvedDest);
            if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) return cb(new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`));
            // do not copy if src is a subdir of dest since unlinking
            // dest in this case would result in removing src contents
            // and therefore a broken symlink would be created.
            if (destStat.isDirectory() && stat.isSrcSubdir(resolvedDest, resolvedSrc)) return cb(new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`));
            return copyLink(resolvedSrc, dest, cb);
        });
    });
}
function copyLink(resolvedSrc, dest, cb) {
    fs.unlink(dest, (err)=>{
        if (err) return cb(err);
        return fs.symlink(resolvedSrc, dest, cb);
    });
}
module.exports = copy;

},{"df70113f88a1dc9d":"d5jf4","9d1db0ec29323d5b":"cASLk","f0f4e2f5bb766bf2":"loE3o","fc1be81907283018":"bCV4J","c755d33dc975e4e3":"aA7AS","ab23e6d832a1112c":"hJukW","b44230577f0cd582":"apnSw"}],"aA7AS":[function(require,module,exports) {
"use strict";
const u = require("ab7ffa3df7dcf701").fromPromise;
const fs = require("80c0d2afacbb49c4");
function pathExists(path) {
    return fs.access(path).then(()=>true).catch(()=>false);
}
module.exports = {
    pathExists: u(pathExists),
    pathExistsSync: fs.existsSync
};

},{"ab7ffa3df7dcf701":"kyfTT","80c0d2afacbb49c4":"gwOwH"}],"bnqqU":[function(require,module,exports) {
"use strict";
const u = require("8f0f6e2e8d07f806").fromCallback;
const fs = require("18bfbdee5b740a50");
const path = require("159bd900ea283391");
const mkdir = require("814737fe733f2071");
const remove = require("7da7445b6aa7f8d2");
const emptyDir = u(function emptyDir(dir, callback) {
    callback = callback || function() {};
    fs.readdir(dir, (err, items)=>{
        if (err) return mkdir.mkdirs(dir, callback);
        items = items.map((item)=>path.join(dir, item));
        deleteItem();
        function deleteItem() {
            const item = items.pop();
            if (!item) return callback();
            remove.remove(item, (err)=>{
                if (err) return callback(err);
                deleteItem();
            });
        }
    });
});
function emptyDirSync(dir) {
    let items;
    try {
        items = fs.readdirSync(dir);
    } catch (err) {
        return mkdir.mkdirsSync(dir);
    }
    items.forEach((item)=>{
        item = path.join(dir, item);
        remove.removeSync(item);
    });
}
module.exports = {
    emptyDirSync,
    emptydirSync: emptyDirSync,
    emptyDir,
    emptydir: emptyDir
};

},{"8f0f6e2e8d07f806":"kyfTT","18bfbdee5b740a50":"cASLk","159bd900ea283391":"loE3o","814737fe733f2071":"bCV4J","7da7445b6aa7f8d2":"6tAdJ"}],"6tAdJ":[function(require,module,exports) {
"use strict";
const u = require("152dd1da058b587c").fromCallback;
const rimraf = require("8bfb87fb46b26b9a");
module.exports = {
    remove: u(rimraf),
    removeSync: rimraf.sync
};

},{"152dd1da058b587c":"kyfTT","8bfb87fb46b26b9a":"9oG19"}],"9oG19":[function(require,module,exports) {
var process = require("6218ad692773fbe");
"use strict";
const fs = require("e497ec0b2ca02524");
const path = require("4b776068600a68ad");
const assert = require("fbc569294f89a482");
const isWindows = process.platform === "win32";
function defaults(options) {
    const methods = [
        "unlink",
        "chmod",
        "stat",
        "lstat",
        "rmdir",
        "readdir"
    ];
    methods.forEach((m)=>{
        options[m] = options[m] || fs[m];
        m = m + "Sync";
        options[m] = options[m] || fs[m];
    });
    options.maxBusyTries = options.maxBusyTries || 3;
}
function rimraf(p, options, cb) {
    let busyTries = 0;
    if (typeof options === "function") {
        cb = options;
        options = {};
    }
    assert(p, "rimraf: missing path");
    assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
    assert.strictEqual(typeof cb, "function", "rimraf: callback function required");
    assert(options, "rimraf: invalid options argument provided");
    assert.strictEqual(typeof options, "object", "rimraf: options should be object");
    defaults(options);
    rimraf_(p, options, function CB(er) {
        if (er) {
            if ((er.code === "EBUSY" || er.code === "ENOTEMPTY" || er.code === "EPERM") && busyTries < options.maxBusyTries) {
                busyTries++;
                const time = busyTries * 100;
                // try again, with the same exact callback as this one.
                return setTimeout(()=>rimraf_(p, options, CB), time);
            }
            // already gone
            if (er.code === "ENOENT") er = null;
        }
        cb(er);
    });
}
// Two possible strategies.
// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
//
// Both result in an extra syscall when you guess wrong.  However, there
// are likely far more normal files in the world than directories.  This
// is based on the assumption that a the average number of files per
// directory is >= 1.
//
// If anyone ever complains about this, then I guess the strategy could
// be made configurable somehow.  But until then, YAGNI.
function rimraf_(p, options, cb) {
    assert(p);
    assert(options);
    assert(typeof cb === "function");
    // sunos lets the root user unlink directories, which is... weird.
    // so we have to lstat here and make sure it's not a dir.
    options.lstat(p, (er, st)=>{
        if (er && er.code === "ENOENT") return cb(null);
        // Windows can EPERM on stat.  Life is suffering.
        if (er && er.code === "EPERM" && isWindows) return fixWinEPERM(p, options, er, cb);
        if (st && st.isDirectory()) return rmdir(p, options, er, cb);
        options.unlink(p, (er)=>{
            if (er) {
                if (er.code === "ENOENT") return cb(null);
                if (er.code === "EPERM") return isWindows ? fixWinEPERM(p, options, er, cb) : rmdir(p, options, er, cb);
                if (er.code === "EISDIR") return rmdir(p, options, er, cb);
            }
            return cb(er);
        });
    });
}
function fixWinEPERM(p, options, er, cb) {
    assert(p);
    assert(options);
    assert(typeof cb === "function");
    if (er) assert(er instanceof Error);
    options.chmod(p, 438, (er2)=>{
        if (er2) cb(er2.code === "ENOENT" ? null : er);
        else options.stat(p, (er3, stats)=>{
            if (er3) cb(er3.code === "ENOENT" ? null : er);
            else if (stats.isDirectory()) rmdir(p, options, er, cb);
            else options.unlink(p, cb);
        });
    });
}
function fixWinEPERMSync(p, options, er) {
    let stats;
    assert(p);
    assert(options);
    if (er) assert(er instanceof Error);
    try {
        options.chmodSync(p, 438);
    } catch (er2) {
        if (er2.code === "ENOENT") return;
        else throw er;
    }
    try {
        stats = options.statSync(p);
    } catch (er3) {
        if (er3.code === "ENOENT") return;
        else throw er;
    }
    if (stats.isDirectory()) rmdirSync(p, options, er);
    else options.unlinkSync(p);
}
function rmdir(p, options, originalEr, cb) {
    assert(p);
    assert(options);
    if (originalEr) assert(originalEr instanceof Error);
    assert(typeof cb === "function");
    // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
    // if we guessed wrong, and it's not a directory, then
    // raise the original error.
    options.rmdir(p, (er)=>{
        if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")) rmkids(p, options, cb);
        else if (er && er.code === "ENOTDIR") cb(originalEr);
        else cb(er);
    });
}
function rmkids(p, options, cb) {
    assert(p);
    assert(options);
    assert(typeof cb === "function");
    options.readdir(p, (er, files)=>{
        if (er) return cb(er);
        let n = files.length;
        let errState;
        if (n === 0) return options.rmdir(p, cb);
        files.forEach((f)=>{
            rimraf(path.join(p, f), options, (er)=>{
                if (errState) return;
                if (er) return cb(errState = er);
                if (--n === 0) options.rmdir(p, cb);
            });
        });
    });
}
// this looks simpler, and is strictly *faster*, but will
// tie up the JavaScript thread and fail on excessively
// deep directory trees.
function rimrafSync(p, options) {
    let st;
    options = options || {};
    defaults(options);
    assert(p, "rimraf: missing path");
    assert.strictEqual(typeof p, "string", "rimraf: path should be a string");
    assert(options, "rimraf: missing options");
    assert.strictEqual(typeof options, "object", "rimraf: options should be object");
    try {
        st = options.lstatSync(p);
    } catch (er) {
        if (er.code === "ENOENT") return;
        // Windows can EPERM on stat.  Life is suffering.
        if (er.code === "EPERM" && isWindows) fixWinEPERMSync(p, options, er);
    }
    try {
        // sunos lets the root user unlink directories, which is... weird.
        if (st && st.isDirectory()) rmdirSync(p, options, null);
        else options.unlinkSync(p);
    } catch (er) {
        if (er.code === "ENOENT") return;
        else if (er.code === "EPERM") return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er);
        else if (er.code !== "EISDIR") throw er;
        rmdirSync(p, options, er);
    }
}
function rmdirSync(p, options, originalEr) {
    assert(p);
    assert(options);
    if (originalEr) assert(originalEr instanceof Error);
    try {
        options.rmdirSync(p);
    } catch (er) {
        if (er.code === "ENOTDIR") throw originalEr;
        else if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM") rmkidsSync(p, options);
        else if (er.code !== "ENOENT") throw er;
    }
}
function rmkidsSync(p, options) {
    assert(p);
    assert(options);
    options.readdirSync(p).forEach((f)=>rimrafSync(path.join(p, f), options));
    if (isWindows) {
        // We only end up here once we got ENOTEMPTY at least once, and
        // at this point, we are guaranteed to have removed all the kids.
        // So, we know that it won't be ENOENT or ENOTDIR or anything else.
        // try really hard to delete stuff on windows, because it has a
        // PROFOUNDLY annoying habit of not closing handles promptly when
        // files are deleted, resulting in spurious ENOTEMPTY errors.
        const startTime = Date.now();
        do try {
            const ret = options.rmdirSync(p, options);
            return ret;
        } catch (er) {}
        while (Date.now() - startTime < 500); // give up after 500ms
    } else {
        const ret = options.rmdirSync(p, options);
        return ret;
    }
}
module.exports = rimraf;
rimraf.sync = rimrafSync;

},{"6218ad692773fbe":"d5jf4","e497ec0b2ca02524":"cASLk","4b776068600a68ad":"loE3o","fbc569294f89a482":"f3tT4"}],"b66Ms":[function(require,module,exports) {
"use strict";
const file = require("88b176bf86856300");
const link = require("a154147f912456bf");
const symlink = require("f3315415dabc7c14");
module.exports = {
    // file
    createFile: file.createFile,
    createFileSync: file.createFileSync,
    ensureFile: file.createFile,
    ensureFileSync: file.createFileSync,
    // link
    createLink: link.createLink,
    createLinkSync: link.createLinkSync,
    ensureLink: link.createLink,
    ensureLinkSync: link.createLinkSync,
    // symlink
    createSymlink: symlink.createSymlink,
    createSymlinkSync: symlink.createSymlinkSync,
    ensureSymlink: symlink.createSymlink,
    ensureSymlinkSync: symlink.createSymlinkSync
};

},{"88b176bf86856300":"czG69","a154147f912456bf":"an8Mp","f3315415dabc7c14":"2M77y"}],"czG69":[function(require,module,exports) {
"use strict";
const u = require("850f0ccc477d0a7e").fromCallback;
const path = require("1cd5b949a81edf35");
const fs = require("90ce4076fa429f05");
const mkdir = require("ba61347311eee6a9");
const pathExists = require("31f8bc8df7a4f3fb").pathExists;
function createFile(file, callback) {
    function makeFile() {
        fs.writeFile(file, "", (err)=>{
            if (err) return callback(err);
            callback();
        });
    }
    fs.stat(file, (err, stats)=>{
        if (!err && stats.isFile()) return callback();
        const dir = path.dirname(file);
        pathExists(dir, (err, dirExists)=>{
            if (err) return callback(err);
            if (dirExists) return makeFile();
            mkdir.mkdirs(dir, (err)=>{
                if (err) return callback(err);
                makeFile();
            });
        });
    });
}
function createFileSync(file) {
    let stats;
    try {
        stats = fs.statSync(file);
    } catch (e) {}
    if (stats && stats.isFile()) return;
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) mkdir.mkdirsSync(dir);
    fs.writeFileSync(file, "");
}
module.exports = {
    createFile: u(createFile),
    createFileSync
};

},{"850f0ccc477d0a7e":"kyfTT","1cd5b949a81edf35":"loE3o","90ce4076fa429f05":"cASLk","ba61347311eee6a9":"bCV4J","31f8bc8df7a4f3fb":"aA7AS"}],"an8Mp":[function(require,module,exports) {
"use strict";
const u = require("1d3a26a2042f68d9").fromCallback;
const path = require("e03b816e2c509fda");
const fs = require("ca3dc388b8827074");
const mkdir = require("4b3e5f452b1f0443");
const pathExists = require("660e253caabd326b").pathExists;
function createLink(srcpath, dstpath, callback) {
    function makeLink(srcpath, dstpath) {
        fs.link(srcpath, dstpath, (err)=>{
            if (err) return callback(err);
            callback(null);
        });
    }
    pathExists(dstpath, (err, destinationExists)=>{
        if (err) return callback(err);
        if (destinationExists) return callback(null);
        fs.lstat(srcpath, (err)=>{
            if (err) {
                err.message = err.message.replace("lstat", "ensureLink");
                return callback(err);
            }
            const dir = path.dirname(dstpath);
            pathExists(dir, (err, dirExists)=>{
                if (err) return callback(err);
                if (dirExists) return makeLink(srcpath, dstpath);
                mkdir.mkdirs(dir, (err)=>{
                    if (err) return callback(err);
                    makeLink(srcpath, dstpath);
                });
            });
        });
    });
}
function createLinkSync(srcpath, dstpath) {
    const destinationExists = fs.existsSync(dstpath);
    if (destinationExists) return undefined;
    try {
        fs.lstatSync(srcpath);
    } catch (err) {
        err.message = err.message.replace("lstat", "ensureLink");
        throw err;
    }
    const dir = path.dirname(dstpath);
    const dirExists = fs.existsSync(dir);
    if (dirExists) return fs.linkSync(srcpath, dstpath);
    mkdir.mkdirsSync(dir);
    return fs.linkSync(srcpath, dstpath);
}
module.exports = {
    createLink: u(createLink),
    createLinkSync
};

},{"1d3a26a2042f68d9":"kyfTT","e03b816e2c509fda":"loE3o","ca3dc388b8827074":"cASLk","4b3e5f452b1f0443":"bCV4J","660e253caabd326b":"aA7AS"}],"2M77y":[function(require,module,exports) {
"use strict";
const u = require("ee569077431ee66d").fromCallback;
const path = require("2b008136f635a8da");
const fs = require("54212e34a26aec9a");
const _mkdirs = require("4b9c728b626cd844");
const mkdirs = _mkdirs.mkdirs;
const mkdirsSync = _mkdirs.mkdirsSync;
const _symlinkPaths = require("6df23f49adf4b64c");
const symlinkPaths = _symlinkPaths.symlinkPaths;
const symlinkPathsSync = _symlinkPaths.symlinkPathsSync;
const _symlinkType = require("7d37124fc3f01a84");
const symlinkType = _symlinkType.symlinkType;
const symlinkTypeSync = _symlinkType.symlinkTypeSync;
const pathExists = require("79277ef182acdf63").pathExists;
function createSymlink(srcpath, dstpath, type, callback) {
    callback = typeof type === "function" ? type : callback;
    type = typeof type === "function" ? false : type;
    pathExists(dstpath, (err, destinationExists)=>{
        if (err) return callback(err);
        if (destinationExists) return callback(null);
        symlinkPaths(srcpath, dstpath, (err, relative)=>{
            if (err) return callback(err);
            srcpath = relative.toDst;
            symlinkType(relative.toCwd, type, (err, type)=>{
                if (err) return callback(err);
                const dir = path.dirname(dstpath);
                pathExists(dir, (err, dirExists)=>{
                    if (err) return callback(err);
                    if (dirExists) return fs.symlink(srcpath, dstpath, type, callback);
                    mkdirs(dir, (err)=>{
                        if (err) return callback(err);
                        fs.symlink(srcpath, dstpath, type, callback);
                    });
                });
            });
        });
    });
}
function createSymlinkSync(srcpath, dstpath, type) {
    const destinationExists = fs.existsSync(dstpath);
    if (destinationExists) return undefined;
    const relative = symlinkPathsSync(srcpath, dstpath);
    srcpath = relative.toDst;
    type = symlinkTypeSync(relative.toCwd, type);
    const dir = path.dirname(dstpath);
    const exists = fs.existsSync(dir);
    if (exists) return fs.symlinkSync(srcpath, dstpath, type);
    mkdirsSync(dir);
    return fs.symlinkSync(srcpath, dstpath, type);
}
module.exports = {
    createSymlink: u(createSymlink),
    createSymlinkSync
};

},{"ee569077431ee66d":"kyfTT","2b008136f635a8da":"loE3o","54212e34a26aec9a":"cASLk","4b9c728b626cd844":"bCV4J","6df23f49adf4b64c":"gbCY0","7d37124fc3f01a84":"dUnYG","79277ef182acdf63":"aA7AS"}],"gbCY0":[function(require,module,exports) {
"use strict";
const path = require("e979ab86e3dd56ae");
const fs = require("210955694d50890b");
const pathExists = require("3f11c7189af60f3b").pathExists;
/**
 * Function that returns two types of paths, one relative to symlink, and one
 * relative to the current working directory. Checks if path is absolute or
 * relative. If the path is relative, this function checks if the path is
 * relative to symlink or relative to current working directory. This is an
 * initiative to find a smarter `srcpath` to supply when building symlinks.
 * This allows you to determine which path to use out of one of three possible
 * types of source paths. The first is an absolute path. This is detected by
 * `path.isAbsolute()`. When an absolute path is provided, it is checked to
 * see if it exists. If it does it's used, if not an error is returned
 * (callback)/ thrown (sync). The other two options for `srcpath` are a
 * relative url. By default Node's `fs.symlink` works by creating a symlink
 * using `dstpath` and expects the `srcpath` to be relative to the newly
 * created symlink. If you provide a `srcpath` that does not exist on the file
 * system it results in a broken symlink. To minimize this, the function
 * checks to see if the 'relative to symlink' source file exists, and if it
 * does it will use it. If it does not, it checks if there's a file that
 * exists that is relative to the current working directory, if does its used.
 * This preserves the expectations of the original fs.symlink spec and adds
 * the ability to pass in `relative to current working direcotry` paths.
 */ function symlinkPaths(srcpath, dstpath, callback) {
    if (path.isAbsolute(srcpath)) return fs.lstat(srcpath, (err)=>{
        if (err) {
            err.message = err.message.replace("lstat", "ensureSymlink");
            return callback(err);
        }
        return callback(null, {
            "toCwd": srcpath,
            "toDst": srcpath
        });
    });
    else {
        const dstdir = path.dirname(dstpath);
        const relativeToDst = path.join(dstdir, srcpath);
        return pathExists(relativeToDst, (err, exists)=>{
            if (err) return callback(err);
            if (exists) return callback(null, {
                "toCwd": relativeToDst,
                "toDst": srcpath
            });
            else return fs.lstat(srcpath, (err)=>{
                if (err) {
                    err.message = err.message.replace("lstat", "ensureSymlink");
                    return callback(err);
                }
                return callback(null, {
                    "toCwd": srcpath,
                    "toDst": path.relative(dstdir, srcpath)
                });
            });
        });
    }
}
function symlinkPathsSync(srcpath, dstpath) {
    let exists;
    if (path.isAbsolute(srcpath)) {
        exists = fs.existsSync(srcpath);
        if (!exists) throw new Error("absolute srcpath does not exist");
        return {
            "toCwd": srcpath,
            "toDst": srcpath
        };
    } else {
        const dstdir = path.dirname(dstpath);
        const relativeToDst = path.join(dstdir, srcpath);
        exists = fs.existsSync(relativeToDst);
        if (exists) return {
            "toCwd": relativeToDst,
            "toDst": srcpath
        };
        else {
            exists = fs.existsSync(srcpath);
            if (!exists) throw new Error("relative srcpath does not exist");
            return {
                "toCwd": srcpath,
                "toDst": path.relative(dstdir, srcpath)
            };
        }
    }
}
module.exports = {
    symlinkPaths,
    symlinkPathsSync
};

},{"e979ab86e3dd56ae":"loE3o","210955694d50890b":"cASLk","3f11c7189af60f3b":"aA7AS"}],"dUnYG":[function(require,module,exports) {
"use strict";
const fs = require("9cc4a34b126f1ab0");
function symlinkType(srcpath, type, callback) {
    callback = typeof type === "function" ? type : callback;
    type = typeof type === "function" ? false : type;
    if (type) return callback(null, type);
    fs.lstat(srcpath, (err, stats)=>{
        if (err) return callback(null, "file");
        type = stats && stats.isDirectory() ? "dir" : "file";
        callback(null, type);
    });
}
function symlinkTypeSync(srcpath, type) {
    let stats;
    if (type) return type;
    try {
        stats = fs.lstatSync(srcpath);
    } catch (e) {
        return "file";
    }
    return stats && stats.isDirectory() ? "dir" : "file";
}
module.exports = {
    symlinkType,
    symlinkTypeSync
};

},{"9cc4a34b126f1ab0":"cASLk"}],"5ZoF1":[function(require,module,exports) {
"use strict";
const u = require("923e9b950720dce8").fromCallback;
const jsonFile = require("756ef4810f10103a");
jsonFile.outputJson = u(require("461930fdbbd84833"));
jsonFile.outputJsonSync = require("4b96271be9737be0");
// aliases
jsonFile.outputJSON = jsonFile.outputJson;
jsonFile.outputJSONSync = jsonFile.outputJsonSync;
jsonFile.writeJSON = jsonFile.writeJson;
jsonFile.writeJSONSync = jsonFile.writeJsonSync;
jsonFile.readJSON = jsonFile.readJson;
jsonFile.readJSONSync = jsonFile.readJsonSync;
module.exports = jsonFile;

},{"923e9b950720dce8":"kyfTT","756ef4810f10103a":"3je1Z","461930fdbbd84833":"2tv0Y","4b96271be9737be0":"m5zjq"}],"3je1Z":[function(require,module,exports) {
"use strict";
const u = require("29e51e94098c9dc1").fromCallback;
const jsonFile = require("e7612ad85eff7b1b");
module.exports = {
    // jsonfile exports
    readJson: u(jsonFile.readFile),
    readJsonSync: jsonFile.readFileSync,
    writeJson: u(jsonFile.writeFile),
    writeJsonSync: jsonFile.writeFileSync
};

},{"29e51e94098c9dc1":"kyfTT","e7612ad85eff7b1b":"bFfSy"}],"bFfSy":[function(require,module,exports) {
var Buffer = require("f8cbe22034ffda67").Buffer;
var _fs;
try {
    _fs = require("7e60935c0592984f");
} catch (_) {
    _fs = require("2124c508a1ba4733");
}
function readFile(file, options, callback) {
    if (callback == null) {
        callback = options;
        options = {};
    }
    if (typeof options === "string") options = {
        encoding: options
    };
    options = options || {};
    var fs = options.fs || _fs;
    var shouldThrow = true;
    if ("throws" in options) shouldThrow = options.throws;
    fs.readFile(file, options, function(err, data) {
        if (err) return callback(err);
        data = stripBom(data);
        var obj;
        try {
            obj = JSON.parse(data, options ? options.reviver : null);
        } catch (err2) {
            if (shouldThrow) {
                err2.message = file + ": " + err2.message;
                return callback(err2);
            } else return callback(null, null);
        }
        callback(null, obj);
    });
}
function readFileSync(file, options) {
    options = options || {};
    if (typeof options === "string") options = {
        encoding: options
    };
    var fs = options.fs || _fs;
    var shouldThrow = true;
    if ("throws" in options) shouldThrow = options.throws;
    try {
        var content = fs.readFileSync(file, options);
        content = stripBom(content);
        return JSON.parse(content, options.reviver);
    } catch (err) {
        if (shouldThrow) {
            err.message = file + ": " + err.message;
            throw err;
        } else return null;
    }
}
function stringify(obj, options) {
    var spaces;
    var EOL = "\n";
    if (typeof options === "object" && options !== null) {
        if (options.spaces) spaces = options.spaces;
        if (options.EOL) EOL = options.EOL;
    }
    var str = JSON.stringify(obj, options ? options.replacer : null, spaces);
    return str.replace(/\n/g, EOL) + EOL;
}
function writeFile(file, obj, options, callback) {
    if (callback == null) {
        callback = options;
        options = {};
    }
    options = options || {};
    var fs = options.fs || _fs;
    var str = "";
    try {
        str = stringify(obj, options);
    } catch (err) {
        // Need to return whether a callback was passed or not
        if (callback) callback(err, null);
        return;
    }
    fs.writeFile(file, str, options, callback);
}
function writeFileSync(file, obj, options) {
    options = options || {};
    var fs = options.fs || _fs;
    var str = stringify(obj, options);
    // not sure if fs.writeFileSync returns anything, but just in case
    return fs.writeFileSync(file, str, options);
}
function stripBom(content) {
    // we do this because JSON.parse would convert it to a utf8 string if encoding wasn't specified
    if (Buffer.isBuffer(content)) content = content.toString("utf8");
    content = content.replace(/^\uFEFF/, "");
    return content;
}
var jsonfile = {
    readFile: readFile,
    readFileSync: readFileSync,
    writeFile: writeFile,
    writeFileSync: writeFileSync
};
module.exports = jsonfile;

},{"f8cbe22034ffda67":"fCgem","7e60935c0592984f":"cASLk","2124c508a1ba4733":"jhUEF"}],"2tv0Y":[function(require,module,exports) {
"use strict";
const path = require("4a04949ac8825fae");
const mkdir = require("5b52f2450006afdb");
const pathExists = require("26c8db412f67a109").pathExists;
const jsonFile = require("b7b9be028dc05cb7");
function outputJson(file, data, options, callback) {
    if (typeof options === "function") {
        callback = options;
        options = {};
    }
    const dir = path.dirname(file);
    pathExists(dir, (err, itDoes)=>{
        if (err) return callback(err);
        if (itDoes) return jsonFile.writeJson(file, data, options, callback);
        mkdir.mkdirs(dir, (err)=>{
            if (err) return callback(err);
            jsonFile.writeJson(file, data, options, callback);
        });
    });
}
module.exports = outputJson;

},{"4a04949ac8825fae":"loE3o","5b52f2450006afdb":"bCV4J","26c8db412f67a109":"aA7AS","b7b9be028dc05cb7":"3je1Z"}],"m5zjq":[function(require,module,exports) {
"use strict";
const fs = require("4ddeba2a1d9bd3ed");
const path = require("1fa68c83bbf94d67");
const mkdir = require("7cfd9f1e1574af73");
const jsonFile = require("d52df1644b79f6b6");
function outputJsonSync(file, data, options) {
    const dir = path.dirname(file);
    if (!fs.existsSync(dir)) mkdir.mkdirsSync(dir);
    jsonFile.writeJsonSync(file, data, options);
}
module.exports = outputJsonSync;

},{"4ddeba2a1d9bd3ed":"cASLk","1fa68c83bbf94d67":"loE3o","7cfd9f1e1574af73":"bCV4J","d52df1644b79f6b6":"3je1Z"}],"dIHuK":[function(require,module,exports) {
"use strict";
module.exports = {
    moveSync: require("d7620bc8471d78cc")
};

},{"d7620bc8471d78cc":"kJflC"}],"kJflC":[function(require,module,exports) {
"use strict";
const fs = require("438de57fe28cfad4");
const path = require("e9e1e259b252cada");
const copySync = require("ce13d0fe7e259389").copySync;
const removeSync = require("74dd9f0698e5eeec").removeSync;
const mkdirpSync = require("62a83d03aaffa900").mkdirpSync;
const stat = require("1fe487fc64f578cc");
function moveSync(src, dest, opts) {
    opts = opts || {};
    const overwrite = opts.overwrite || opts.clobber || false;
    const { srcStat  } = stat.checkPathsSync(src, dest, "move");
    stat.checkParentPathsSync(src, srcStat, dest, "move");
    mkdirpSync(path.dirname(dest));
    return doRename(src, dest, overwrite);
}
function doRename(src, dest, overwrite) {
    if (overwrite) {
        removeSync(dest);
        return rename(src, dest, overwrite);
    }
    if (fs.existsSync(dest)) throw new Error("dest already exists.");
    return rename(src, dest, overwrite);
}
function rename(src, dest, overwrite) {
    try {
        fs.renameSync(src, dest);
    } catch (err) {
        if (err.code !== "EXDEV") throw err;
        return moveAcrossDevice(src, dest, overwrite);
    }
}
function moveAcrossDevice(src, dest, overwrite) {
    const opts = {
        overwrite,
        errorOnExist: true
    };
    copySync(src, dest, opts);
    return removeSync(src);
}
module.exports = moveSync;

},{"438de57fe28cfad4":"cASLk","e9e1e259b252cada":"loE3o","ce13d0fe7e259389":"bEP9t","74dd9f0698e5eeec":"6tAdJ","62a83d03aaffa900":"bCV4J","1fe487fc64f578cc":"apnSw"}],"fmtjg":[function(require,module,exports) {
"use strict";
const u = require("82689688ee3fe7af").fromCallback;
module.exports = {
    move: u(require("aaf533696347067c"))
};

},{"82689688ee3fe7af":"kyfTT","aaf533696347067c":"83MPc"}],"83MPc":[function(require,module,exports) {
"use strict";
const fs = require("141496b0849bd442");
const path = require("abfe4310535ebd18");
const copy = require("89cf9d77a6e175c6").copy;
const remove = require("c9ff4c6c903bb6d1").remove;
const mkdirp = require("e032c6517514bec8").mkdirp;
const pathExists = require("fa1c3974e0e4df66").pathExists;
const stat = require("b01e0b07ca0cf760");
function move(src, dest, opts, cb) {
    if (typeof opts === "function") {
        cb = opts;
        opts = {};
    }
    const overwrite = opts.overwrite || opts.clobber || false;
    stat.checkPaths(src, dest, "move", (err, stats)=>{
        if (err) return cb(err);
        const { srcStat  } = stats;
        stat.checkParentPaths(src, srcStat, dest, "move", (err)=>{
            if (err) return cb(err);
            mkdirp(path.dirname(dest), (err)=>{
                if (err) return cb(err);
                return doRename(src, dest, overwrite, cb);
            });
        });
    });
}
function doRename(src, dest, overwrite, cb) {
    if (overwrite) return remove(dest, (err)=>{
        if (err) return cb(err);
        return rename(src, dest, overwrite, cb);
    });
    pathExists(dest, (err, destExists)=>{
        if (err) return cb(err);
        if (destExists) return cb(new Error("dest already exists."));
        return rename(src, dest, overwrite, cb);
    });
}
function rename(src, dest, overwrite, cb) {
    fs.rename(src, dest, (err)=>{
        if (!err) return cb();
        if (err.code !== "EXDEV") return cb(err);
        return moveAcrossDevice(src, dest, overwrite, cb);
    });
}
function moveAcrossDevice(src, dest, overwrite, cb) {
    const opts = {
        overwrite,
        errorOnExist: true
    };
    copy(src, dest, opts, (err)=>{
        if (err) return cb(err);
        return remove(src, cb);
    });
}
module.exports = move;

},{"141496b0849bd442":"cASLk","abfe4310535ebd18":"loE3o","89cf9d77a6e175c6":"ifEND","c9ff4c6c903bb6d1":"6tAdJ","e032c6517514bec8":"bCV4J","fa1c3974e0e4df66":"aA7AS","b01e0b07ca0cf760":"apnSw"}],"csLbB":[function(require,module,exports) {
"use strict";
const u = require("72f9760952ca9378").fromCallback;
const fs = require("7901ac504be33894");
const path = require("305f9dba163d9445");
const mkdir = require("6bd09f361d1d4dc7");
const pathExists = require("b0b0e49948f86cfb").pathExists;
function outputFile(file, data, encoding, callback) {
    if (typeof encoding === "function") {
        callback = encoding;
        encoding = "utf8";
    }
    const dir = path.dirname(file);
    pathExists(dir, (err, itDoes)=>{
        if (err) return callback(err);
        if (itDoes) return fs.writeFile(file, data, encoding, callback);
        mkdir.mkdirs(dir, (err)=>{
            if (err) return callback(err);
            fs.writeFile(file, data, encoding, callback);
        });
    });
}
function outputFileSync(file, ...args) {
    const dir = path.dirname(file);
    if (fs.existsSync(dir)) return fs.writeFileSync(file, ...args);
    mkdir.mkdirsSync(dir);
    fs.writeFileSync(file, ...args);
}
module.exports = {
    outputFile: u(outputFile),
    outputFileSync
};

},{"72f9760952ca9378":"kyfTT","7901ac504be33894":"cASLk","305f9dba163d9445":"loE3o","6bd09f361d1d4dc7":"bCV4J","b0b0e49948f86cfb":"aA7AS"}],"h74hA":[function(require,module,exports) {
"use strict";
const filenamify = require("e68e0dce9160955f");
const filenamifyPath = require("d20af6c64924bcd");
const filenamifyCombined = filenamify;
filenamifyCombined.path = filenamifyPath;
module.exports = filenamify;

},{"e68e0dce9160955f":"5fOAU","d20af6c64924bcd":"MNlfT"}],"5fOAU":[function(require,module,exports) {
"use strict";
const trimRepeated = require("39a708c8ea48691");
const filenameReservedRegex = require("458751e0609ab939");
const stripOuter = require("9cbf101589c8b041");
// Doesn't make sense to have longer filenames
const MAX_FILENAME_LENGTH = 100;
const reControlChars = /[\u0000-\u001f\u0080-\u009f]/g; // eslint-disable-line no-control-regex
const reRelativePath = /^\.+/;
const reTrailingPeriods = /\.+$/;
const filenamify = (string, options = {})=>{
    if (typeof string !== "string") throw new TypeError("Expected a string");
    const replacement = options.replacement === undefined ? "!" : options.replacement;
    if (filenameReservedRegex().test(replacement) && reControlChars.test(replacement)) throw new Error("Replacement string cannot contain reserved filename characters");
    string = string.replace(filenameReservedRegex(), replacement);
    string = string.replace(reControlChars, replacement);
    string = string.replace(reRelativePath, replacement);
    string = string.replace(reTrailingPeriods, "");
    if (replacement.length > 0) {
        string = trimRepeated(string, replacement);
        string = string.length > 1 ? stripOuter(string, replacement) : string;
    }
    string = filenameReservedRegex.windowsNames().test(string) ? string + replacement : string;
    string = string.slice(0, typeof options.maxLength === "number" ? options.maxLength : MAX_FILENAME_LENGTH);
    return string;
};
module.exports = filenamify;

},{"39a708c8ea48691":"ime65","458751e0609ab939":"6Tjzo","9cbf101589c8b041":"lOMLM"}],"ime65":[function(require,module,exports) {
"use strict";
var escapeStringRegexp = require("f5b53a2e870e7e10");
module.exports = function(str, target) {
    if (typeof str !== "string" || typeof target !== "string") throw new TypeError("Expected a string");
    return str.replace(new RegExp("(?:" + escapeStringRegexp(target) + "){2,}", "g"), target);
};

},{"f5b53a2e870e7e10":"kqFAt"}],"kqFAt":[function(require,module,exports) {
"use strict";
var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
module.exports = function(str) {
    if (typeof str !== "string") throw new TypeError("Expected a string");
    return str.replace(matchOperatorsRe, "\\$&");
};

},{}],"6Tjzo":[function(require,module,exports) {
"use strict";
/* eslint-disable no-control-regex */ // TODO: remove parens when Node.js 6 is targeted. Node.js 4 barfs at it.
module.exports = ()=>/[<>:"\/\\|?*\x00-\x1F]/g;
module.exports.windowsNames = ()=>/^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;

},{}],"lOMLM":[function(require,module,exports) {
"use strict";
var escapeStringRegexp = require("f4f8fa2d3ae81bc6");
module.exports = function(str, sub) {
    if (typeof str !== "string" || typeof sub !== "string") throw new TypeError();
    sub = escapeStringRegexp(sub);
    return str.replace(new RegExp("^" + sub + "|" + sub + "$", "g"), "");
};

},{"f4f8fa2d3ae81bc6":"kqFAt"}],"MNlfT":[function(require,module,exports) {
"use strict";
const path = require("279fe3ba4dc61d6a");
const filenamify = require("d9f79dd28f83ad58");
const filenamifyPath = (filePath, options)=>{
    filePath = path.resolve(filePath);
    return path.join(path.dirname(filePath), filenamify(path.basename(filePath), options));
};
module.exports = filenamifyPath;

},{"279fe3ba4dc61d6a":"loE3o","d9f79dd28f83ad58":"5fOAU"}],"2iVR4":[function(require,module,exports) {
const path = require("4bfb89f432d58454");
const Git = require("b686cb1a15475bf1");
const async = require("aadf81f78da1f92b");
const fs = require("db3627f5c6c2ae18");
/**
 * Generate a list of unique directory paths given a list of file paths.
 * @param {Array<string>} files List of file paths.
 * @return {Array<string>} List of directory paths.
 */ function uniqueDirs(files) {
    const dirs = new Set();
    files.forEach((filepath)=>{
        const parts = path.dirname(filepath).split(path.sep);
        let partial = parts[0] || "/";
        dirs.add(partial);
        for(let i = 1, ii = parts.length; i < ii; ++i){
            partial = path.join(partial, parts[i]);
            dirs.add(partial);
        }
    });
    return Array.from(dirs);
}
exports.uniqueDirs = uniqueDirs;
/**
 * Sort function for paths.  Sorter paths come first.  Paths of equal length are
 * sorted alphanumerically in path segment order.
 * @param {string} a First path.
 * @param {string} b Second path.
 * @return {number} Comparison.
 */ function byShortPath(a, b) {
    const aParts = a.split(path.sep);
    const bParts = b.split(path.sep);
    const aLength = aParts.length;
    const bLength = bParts.length;
    let cmp = 0;
    if (aLength < bLength) cmp = -1;
    else if (aLength > bLength) cmp = 1;
    else {
        let aPart, bPart;
        for(let i = 0; i < aLength; ++i){
            aPart = aParts[i];
            bPart = bParts[i];
            if (aPart < bPart) {
                cmp = -1;
                break;
            } else if (aPart > bPart) {
                cmp = 1;
                break;
            }
        }
    }
    return cmp;
}
exports.byShortPath = byShortPath;
/**
 * Generate a list of directories to create given a list of file paths.
 * @param {Array<string>} files List of file paths.
 * @return {Array<string>} List of directory paths ordered by path length.
 */ function dirsToCreate(files) {
    return uniqueDirs(files).sort(byShortPath);
}
exports.dirsToCreate = dirsToCreate;
/**
 * Copy a file.
 * @param {object} obj Object with src and dest properties.
 * @param {function(Error)} callback Callback
 */ function copyFile(obj, callback) {
    let called = false;
    function done(err) {
        if (!called) {
            called = true;
            callback(err);
        }
    }
    const read = fs.createReadStream(obj.src);
    read.on("error", (err)=>{
        done(err);
    });
    const write = fs.createWriteStream(obj.dest);
    write.on("error", (err)=>{
        done(err);
    });
    write.on("close", ()=>{
        done();
    });
    read.pipe(write);
}
exports.copyFile = copyFile;
/**
 * Make directory, ignoring errors if directory already exists.
 * @param {string} path Directory path.
 * @param {function(Error)} callback Callback.
 */ function makeDir(path, callback) {
    fs.mkdir(path, (err)=>{
        if (err) // check if directory exists
        fs.stat(path, (err2, stat)=>{
            if (err2 || !stat.isDirectory()) callback(err);
            else callback();
        });
        else callback();
    });
}
/**
 * Copy a list of files.
 * @param {Array<string>} files Files to copy.
 * @param {string} base Base directory.
 * @param {string} dest Destination directory.
 * @return {Promise} A promise.
 */ exports.copy = function(files, base, dest) {
    return new Promise((resolve, reject)=>{
        const pairs = [];
        const destFiles = [];
        files.forEach((file)=>{
            const src = path.resolve(base, file);
            const relative = path.relative(base, src);
            const target = path.join(dest, relative);
            pairs.push({
                src: src,
                dest: target
            });
            destFiles.push(target);
        });
        async.eachSeries(dirsToCreate(destFiles), makeDir, (err)=>{
            if (err) return reject(err);
            async.each(pairs, copyFile, (err)=>{
                if (err) return reject(err);
                else return resolve();
            });
        });
    });
};
exports.getUser = function(cwd) {
    return Promise.all([
        new Git(cwd).exec("config", "user.name"),
        new Git(cwd).exec("config", "user.email")
    ]).then((results)=>{
        return {
            name: results[0].output.trim(),
            email: results[1].output.trim()
        };
    }).catch((err)=>{
        // git config exits with 1 if name or email is not set
        return null;
    });
};

},{"4bfb89f432d58454":"loE3o","b686cb1a15475bf1":"1ihxe","aadf81f78da1f92b":"e6meC","db3627f5c6c2ae18":"aj3Cz"}],"e6meC":[function(require,module,exports) {
/**
 * Creates a continuation function with some arguments already applied.
 *
 * Useful as a shorthand when combined with other control flow functions. Any
 * arguments passed to the returned function are added to the arguments
 * originally passed to apply.
 *
 * @name apply
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {Function} fn - The function you want to eventually apply all
 * arguments to. Invokes with (arguments...).
 * @param {...*} arguments... - Any number of arguments to automatically apply
 * when the continuation is called.
 * @returns {Function} the partially-applied function
 * @example
 *
 * // using apply
 * async.parallel([
 *     async.apply(fs.writeFile, 'testfile1', 'test1'),
 *     async.apply(fs.writeFile, 'testfile2', 'test2')
 * ]);
 *
 *
 * // the same process without using apply
 * async.parallel([
 *     function(callback) {
 *         fs.writeFile('testfile1', 'test1', callback);
 *     },
 *     function(callback) {
 *         fs.writeFile('testfile2', 'test2', callback);
 *     }
 * ]);
 *
 * // It's possible to pass any number of additional arguments when calling the
 * // continuation:
 *
 * node> var fn = async.apply(sys.puts, 'one');
 * node> fn('two', 'three');
 * one
 * two
 * three
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "apply", ()=>apply);
parcelHelpers.export(exports, "applyEach", ()=>applyEach$1);
parcelHelpers.export(exports, "applyEachSeries", ()=>applyEachSeries);
parcelHelpers.export(exports, "asyncify", ()=>asyncify);
parcelHelpers.export(exports, "auto", ()=>auto);
parcelHelpers.export(exports, "autoInject", ()=>autoInject);
parcelHelpers.export(exports, "cargo", ()=>cargo);
parcelHelpers.export(exports, "cargoQueue", ()=>cargo$1);
parcelHelpers.export(exports, "compose", ()=>compose);
parcelHelpers.export(exports, "concat", ()=>concat$1);
parcelHelpers.export(exports, "concatLimit", ()=>concatLimit$1);
parcelHelpers.export(exports, "concatSeries", ()=>concatSeries$1);
parcelHelpers.export(exports, "constant", ()=>constant);
parcelHelpers.export(exports, "detect", ()=>detect$1);
parcelHelpers.export(exports, "detectLimit", ()=>detectLimit$1);
parcelHelpers.export(exports, "detectSeries", ()=>detectSeries$1);
parcelHelpers.export(exports, "dir", ()=>dir);
parcelHelpers.export(exports, "doUntil", ()=>doUntil);
parcelHelpers.export(exports, "doWhilst", ()=>doWhilst$1);
parcelHelpers.export(exports, "each", ()=>each);
parcelHelpers.export(exports, "eachLimit", ()=>eachLimit$2);
parcelHelpers.export(exports, "eachOf", ()=>eachOf$1);
parcelHelpers.export(exports, "eachOfLimit", ()=>eachOfLimit$2);
parcelHelpers.export(exports, "eachOfSeries", ()=>eachOfSeries$1);
parcelHelpers.export(exports, "eachSeries", ()=>eachSeries$1);
parcelHelpers.export(exports, "ensureAsync", ()=>ensureAsync);
parcelHelpers.export(exports, "every", ()=>every$1);
parcelHelpers.export(exports, "everyLimit", ()=>everyLimit$1);
parcelHelpers.export(exports, "everySeries", ()=>everySeries$1);
parcelHelpers.export(exports, "filter", ()=>filter$1);
parcelHelpers.export(exports, "filterLimit", ()=>filterLimit$1);
parcelHelpers.export(exports, "filterSeries", ()=>filterSeries$1);
parcelHelpers.export(exports, "forever", ()=>forever$1);
parcelHelpers.export(exports, "groupBy", ()=>groupBy);
parcelHelpers.export(exports, "groupByLimit", ()=>groupByLimit$1);
parcelHelpers.export(exports, "groupBySeries", ()=>groupBySeries);
parcelHelpers.export(exports, "log", ()=>log);
parcelHelpers.export(exports, "map", ()=>map$1);
parcelHelpers.export(exports, "mapLimit", ()=>mapLimit$1);
parcelHelpers.export(exports, "mapSeries", ()=>mapSeries$1);
parcelHelpers.export(exports, "mapValues", ()=>mapValues);
parcelHelpers.export(exports, "mapValuesLimit", ()=>mapValuesLimit$1);
parcelHelpers.export(exports, "mapValuesSeries", ()=>mapValuesSeries);
parcelHelpers.export(exports, "memoize", ()=>memoize);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "parallel", ()=>parallel$1);
parcelHelpers.export(exports, "parallelLimit", ()=>parallelLimit);
parcelHelpers.export(exports, "priorityQueue", ()=>priorityQueue);
parcelHelpers.export(exports, "queue", ()=>queue$1);
parcelHelpers.export(exports, "race", ()=>race$1);
parcelHelpers.export(exports, "reduce", ()=>reduce$1);
parcelHelpers.export(exports, "reduceRight", ()=>reduceRight);
parcelHelpers.export(exports, "reflect", ()=>reflect);
parcelHelpers.export(exports, "reflectAll", ()=>reflectAll);
parcelHelpers.export(exports, "reject", ()=>reject$2);
parcelHelpers.export(exports, "rejectLimit", ()=>rejectLimit$1);
parcelHelpers.export(exports, "rejectSeries", ()=>rejectSeries$1);
parcelHelpers.export(exports, "retry", ()=>retry);
parcelHelpers.export(exports, "retryable", ()=>retryable);
parcelHelpers.export(exports, "seq", ()=>seq);
parcelHelpers.export(exports, "series", ()=>series);
parcelHelpers.export(exports, "setImmediate", ()=>setImmediate$1);
parcelHelpers.export(exports, "some", ()=>some$1);
parcelHelpers.export(exports, "someLimit", ()=>someLimit$1);
parcelHelpers.export(exports, "someSeries", ()=>someSeries$1);
parcelHelpers.export(exports, "sortBy", ()=>sortBy$1);
parcelHelpers.export(exports, "timeout", ()=>timeout);
parcelHelpers.export(exports, "times", ()=>times);
parcelHelpers.export(exports, "timesLimit", ()=>timesLimit);
parcelHelpers.export(exports, "timesSeries", ()=>timesSeries);
parcelHelpers.export(exports, "transform", ()=>transform);
parcelHelpers.export(exports, "tryEach", ()=>tryEach$1);
parcelHelpers.export(exports, "unmemoize", ()=>unmemoize);
parcelHelpers.export(exports, "until", ()=>until);
parcelHelpers.export(exports, "waterfall", ()=>waterfall$1);
parcelHelpers.export(exports, "whilst", ()=>whilst$1);
parcelHelpers.export(exports, "all", ()=>every$1);
parcelHelpers.export(exports, "allLimit", ()=>everyLimit$1);
parcelHelpers.export(exports, "allSeries", ()=>everySeries$1);
parcelHelpers.export(exports, "any", ()=>some$1);
parcelHelpers.export(exports, "anyLimit", ()=>someLimit$1);
parcelHelpers.export(exports, "anySeries", ()=>someSeries$1);
parcelHelpers.export(exports, "find", ()=>detect$1);
parcelHelpers.export(exports, "findLimit", ()=>detectLimit$1);
parcelHelpers.export(exports, "findSeries", ()=>detectSeries$1);
parcelHelpers.export(exports, "flatMap", ()=>concat$1);
parcelHelpers.export(exports, "flatMapLimit", ()=>concatLimit$1);
parcelHelpers.export(exports, "flatMapSeries", ()=>concatSeries$1);
parcelHelpers.export(exports, "forEach", ()=>each);
parcelHelpers.export(exports, "forEachSeries", ()=>eachSeries$1);
parcelHelpers.export(exports, "forEachLimit", ()=>eachLimit$2);
parcelHelpers.export(exports, "forEachOf", ()=>eachOf$1);
parcelHelpers.export(exports, "forEachOfSeries", ()=>eachOfSeries$1);
parcelHelpers.export(exports, "forEachOfLimit", ()=>eachOfLimit$2);
parcelHelpers.export(exports, "inject", ()=>reduce$1);
parcelHelpers.export(exports, "foldl", ()=>reduce$1);
parcelHelpers.export(exports, "foldr", ()=>reduceRight);
parcelHelpers.export(exports, "select", ()=>filter$1);
parcelHelpers.export(exports, "selectLimit", ()=>filterLimit$1);
parcelHelpers.export(exports, "selectSeries", ()=>filterSeries$1);
parcelHelpers.export(exports, "wrapSync", ()=>asyncify);
parcelHelpers.export(exports, "during", ()=>whilst$1);
parcelHelpers.export(exports, "doDuring", ()=>doWhilst$1);
var process = require("be06be1e807df129");
function apply(fn, ...args) {
    return (...callArgs)=>fn(...args, ...callArgs);
}
function initialParams(fn) {
    return function(...args /*, callback*/ ) {
        var callback = args.pop();
        return fn.call(this, args, callback);
    };
}
/* istanbul ignore file */ var hasQueueMicrotask = typeof queueMicrotask === "function" && queueMicrotask;
var hasSetImmediate = typeof setImmediate === "function" && setImmediate;
var hasNextTick = typeof process === "object" && typeof process.nextTick === "function";
function fallback(fn) {
    setTimeout(fn, 0);
}
function wrap(defer) {
    return (fn, ...args)=>defer(()=>fn(...args));
}
var _defer;
if (hasQueueMicrotask) _defer = queueMicrotask;
else if (hasSetImmediate) _defer = setImmediate;
else if (hasNextTick) _defer = process.nextTick;
else _defer = fallback;
var setImmediate$1 = wrap(_defer);
/**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
 * This also means you can asyncify ES2017 `async` functions.
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
 * @param {Function} func - The synchronous function, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */ function asyncify(func) {
    if (isAsync(func)) return function(...args /*, callback*/ ) {
        const callback = args.pop();
        const promise = func.apply(this, args);
        return handlePromise(promise, callback);
    };
    return initialParams(function(args, callback) {
        var result;
        try {
            result = func.apply(this, args);
        } catch (e) {
            return callback(e);
        }
        // if result is Promise object
        if (result && typeof result.then === "function") return handlePromise(result, callback);
        else callback(null, result);
    });
}
function handlePromise(promise, callback) {
    return promise.then((value)=>{
        invokeCallback(callback, null, value);
    }, (err)=>{
        invokeCallback(callback, err && err.message ? err : new Error(err));
    });
}
function invokeCallback(callback, error, value) {
    try {
        callback(error, value);
    } catch (err) {
        setImmediate$1((e)=>{
            throw e;
        }, err);
    }
}
function isAsync(fn) {
    return fn[Symbol.toStringTag] === "AsyncFunction";
}
function isAsyncGenerator(fn) {
    return fn[Symbol.toStringTag] === "AsyncGenerator";
}
function isAsyncIterable(obj) {
    return typeof obj[Symbol.asyncIterator] === "function";
}
function wrapAsync(asyncFn) {
    if (typeof asyncFn !== "function") throw new Error("expected a function");
    return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
}
// conditionally promisify a function.
// only return a promise if a callback is omitted
function awaitify(asyncFn, arity = asyncFn.length) {
    if (!arity) throw new Error("arity is undefined");
    function awaitable(...args) {
        if (typeof args[arity - 1] === "function") return asyncFn.apply(this, args);
        return new Promise((resolve, reject)=>{
            args[arity - 1] = (err, ...cbArgs)=>{
                if (err) return reject(err);
                resolve(cbArgs.length > 1 ? cbArgs : cbArgs[0]);
            };
            asyncFn.apply(this, args);
        });
    }
    return awaitable;
}
function applyEach(eachfn) {
    return function applyEach(fns, ...callArgs) {
        const go = awaitify(function(callback) {
            var that = this;
            return eachfn(fns, (fn, cb)=>{
                wrapAsync(fn).apply(that, callArgs.concat(cb));
            }, callback);
        });
        return go;
    };
}
function _asyncMap(eachfn, arr, iteratee, callback) {
    arr = arr || [];
    var results = [];
    var counter = 0;
    var _iteratee = wrapAsync(iteratee);
    return eachfn(arr, (value, _, iterCb)=>{
        var index = counter++;
        _iteratee(value, (err, v)=>{
            results[index] = v;
            iterCb(err);
        });
    }, (err)=>{
        callback(err, results);
    });
}
function isArrayLike(value) {
    return value && typeof value.length === "number" && value.length >= 0 && value.length % 1 === 0;
}
// A temporary value used to identify if the loop should be broken.
// See #1064, #1293
const breakLoop = {};
function once(fn) {
    function wrapper(...args) {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, args);
    }
    Object.assign(wrapper, fn);
    return wrapper;
}
function getIterator(coll) {
    return coll[Symbol.iterator] && coll[Symbol.iterator]();
}
function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
        return ++i < len ? {
            value: coll[i],
            key: i
        } : null;
    };
}
function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
        var item = iterator.next();
        if (item.done) return null;
        i++;
        return {
            value: item.value,
            key: i
        };
    };
}
function createObjectIterator(obj) {
    var okeys = obj ? Object.keys(obj) : [];
    var i = -1;
    var len = okeys.length;
    return function next() {
        var key = okeys[++i];
        if (key === "__proto__") return next();
        return i < len ? {
            value: obj[key],
            key
        } : null;
    };
}
function createIterator(coll) {
    if (isArrayLike(coll)) return createArrayIterator(coll);
    var iterator = getIterator(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
}
function onlyOnce(fn) {
    return function(...args) {
        if (fn === null) throw new Error("Callback was already called.");
        var callFn = fn;
        fn = null;
        callFn.apply(this, args);
    };
}
// for async generators
function asyncEachOfLimit(generator, limit, iteratee, callback) {
    let done = false;
    let canceled = false;
    let awaiting = false;
    let running = 0;
    let idx = 0;
    function replenish() {
        //console.log('replenish')
        if (running >= limit || awaiting || done) return;
        //console.log('replenish awaiting')
        awaiting = true;
        generator.next().then(({ value , done: iterDone  })=>{
            //console.log('got value', value)
            if (canceled || done) return;
            awaiting = false;
            if (iterDone) {
                done = true;
                if (running <= 0) //console.log('done nextCb')
                callback(null);
                return;
            }
            running++;
            iteratee(value, idx, iterateeCallback);
            idx++;
            replenish();
        }).catch(handleError);
    }
    function iterateeCallback(err, result) {
        //console.log('iterateeCallback')
        running -= 1;
        if (canceled) return;
        if (err) return handleError(err);
        if (err === false) {
            done = true;
            canceled = true;
            return;
        }
        if (result === breakLoop || done && running <= 0) {
            done = true;
            //console.log('done iterCb')
            return callback(null);
        }
        replenish();
    }
    function handleError(err) {
        if (canceled) return;
        awaiting = false;
        done = true;
        callback(err);
    }
    replenish();
}
var eachOfLimit = (limit)=>{
    return (obj, iteratee, callback)=>{
        callback = once(callback);
        if (limit <= 0) throw new RangeError("concurrency limit cannot be less than 1");
        if (!obj) return callback(null);
        if (isAsyncGenerator(obj)) return asyncEachOfLimit(obj, limit, iteratee, callback);
        if (isAsyncIterable(obj)) return asyncEachOfLimit(obj[Symbol.asyncIterator](), limit, iteratee, callback);
        var nextElem = createIterator(obj);
        var done = false;
        var canceled = false;
        var running = 0;
        var looping = false;
        function iterateeCallback(err, value) {
            if (canceled) return;
            running -= 1;
            if (err) {
                done = true;
                callback(err);
            } else if (err === false) {
                done = true;
                canceled = true;
            } else if (value === breakLoop || done && running <= 0) {
                done = true;
                return callback(null);
            } else if (!looping) replenish();
        }
        function replenish() {
            looping = true;
            while(running < limit && !done){
                var elem = nextElem();
                if (elem === null) {
                    done = true;
                    if (running <= 0) callback(null);
                    return;
                }
                running += 1;
                iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
            }
            looping = false;
        }
        replenish();
    };
};
/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name eachOfLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfLimit
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`. The `key` is the item's key, or index in the case of an
 * array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 */ function eachOfLimit$1(coll, limit, iteratee, callback) {
    return eachOfLimit(limit)(coll, wrapAsync(iteratee), callback);
}
var eachOfLimit$2 = awaitify(eachOfLimit$1, 4);
// eachOf implementation optimized for array-likes
function eachOfArrayLike(coll, iteratee, callback) {
    callback = once(callback);
    var index = 0, completed = 0, { length  } = coll, canceled = false;
    if (length === 0) callback(null);
    function iteratorCallback(err, value) {
        if (err === false) canceled = true;
        if (canceled === true) return;
        if (err) callback(err);
        else if (++completed === length || value === breakLoop) callback(null);
    }
    for(; index < length; index++)iteratee(coll[index], index, onlyOnce(iteratorCallback));
}
// a generic version of eachOf which can handle array, object, and iterator cases.
function eachOfGeneric(coll, iteratee, callback) {
    return eachOfLimit$2(coll, Infinity, iteratee, callback);
}
/**
 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
 * to the iteratee.
 *
 * @name eachOf
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEachOf
 * @category Collection
 * @see [async.each]{@link module:Collections.each}
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each
 * item in `coll`.
 * The `key` is the item's key, or index in the case of an array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 * @example
 *
 * // dev.json is a file containing a valid json object config for dev environment
 * // dev.json is a file containing a valid json object config for test environment
 * // prod.json is a file containing a valid json object config for prod environment
 * // invalid.json is a file with a malformed json object
 *
 * let configs = {}; //global variable
 * let validConfigFileMap = {dev: 'dev.json', test: 'test.json', prod: 'prod.json'};
 * let invalidConfigFileMap = {dev: 'dev.json', test: 'test.json', invalid: 'invalid.json'};
 *
 * // asynchronous function that reads a json file and parses the contents as json object
 * function parseFile(file, key, callback) {
 *     fs.readFile(file, "utf8", function(err, data) {
 *         if (err) return calback(err);
 *         try {
 *             configs[key] = JSON.parse(data);
 *         } catch (e) {
 *             return callback(e);
 *         }
 *         callback();
 *     });
 * }
 *
 * // Using callbacks
 * async.forEachOf(validConfigFileMap, parseFile, function (err) {
 *     if (err) {
 *         console.error(err);
 *     } else {
 *         console.log(configs);
 *         // configs is now a map of JSON data, e.g.
 *         // { dev: //parsed dev.json, test: //parsed test.json, prod: //parsed prod.json}
 *     }
 * });
 *
 * //Error handing
 * async.forEachOf(invalidConfigFileMap, parseFile, function (err) {
 *     if (err) {
 *         console.error(err);
 *         // JSON parse error exception
 *     } else {
 *         console.log(configs);
 *     }
 * });
 *
 * // Using Promises
 * async.forEachOf(validConfigFileMap, parseFile)
 * .then( () => {
 *     console.log(configs);
 *     // configs is now a map of JSON data, e.g.
 *     // { dev: //parsed dev.json, test: //parsed test.json, prod: //parsed prod.json}
 * }).catch( err => {
 *     console.error(err);
 * });
 *
 * //Error handing
 * async.forEachOf(invalidConfigFileMap, parseFile)
 * .then( () => {
 *     console.log(configs);
 * }).catch( err => {
 *     console.error(err);
 *     // JSON parse error exception
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let result = await async.forEachOf(validConfigFileMap, parseFile);
 *         console.log(configs);
 *         // configs is now a map of JSON data, e.g.
 *         // { dev: //parsed dev.json, test: //parsed test.json, prod: //parsed prod.json}
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * //Error handing
 * async () => {
 *     try {
 *         let result = await async.forEachOf(invalidConfigFileMap, parseFile);
 *         console.log(configs);
 *     }
 *     catch (err) {
 *         console.log(err);
 *         // JSON parse error exception
 *     }
 * }
 *
 */ function eachOf(coll, iteratee, callback) {
    var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
    return eachOfImplementation(coll, wrapAsync(iteratee), callback);
}
var eachOf$1 = awaitify(eachOf, 3);
/**
 * Produces a new collection of values by mapping each value in `coll` through
 * the `iteratee` function. The `iteratee` is called with an item from `coll`
 * and a callback for when it has finished processing. Each of these callbacks
 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
 * `iteratee` passes an error to its callback, the main `callback` (for the
 * `map` function) is immediately called with the error.
 *
 * Note, that since this function applies the `iteratee` to each item in
 * parallel, there is no guarantee that the `iteratee` functions will complete
 * in order. However, the results array will be in the same order as the
 * original `coll`.
 *
 * If `map` is passed an Object, the results will be an Array.  The results
 * will roughly be in the order of the original Objects' keys (but this can
 * vary across JavaScript engines).
 *
 * @name map
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an Array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * // file1.txt is a file that is 1000 bytes in size
 * // file2.txt is a file that is 2000 bytes in size
 * // file3.txt is a file that is 3000 bytes in size
 * // file4.txt does not exist
 *
 * const fileList = ['file1.txt','file2.txt','file3.txt'];
 * const withMissingFileList = ['file1.txt','file2.txt','file4.txt'];
 *
 * // asynchronous function that returns the file size in bytes
 * function getFileSizeInBytes(file, callback) {
 *     fs.stat(file, function(err, stat) {
 *         if (err) {
 *             return callback(err);
 *         }
 *         callback(null, stat.size);
 *     });
 * }
 *
 * // Using callbacks
 * async.map(fileList, getFileSizeInBytes, function(err, results) {
 *     if (err) {
 *         console.log(err);
 *     } else {
 *         console.log(results);
 *         // results is now an array of the file size in bytes for each file, e.g.
 *         // [ 1000, 2000, 3000]
 *     }
 * });
 *
 * // Error Handling
 * async.map(withMissingFileList, getFileSizeInBytes, function(err, results) {
 *     if (err) {
 *         console.log(err);
 *         // [ Error: ENOENT: no such file or directory ]
 *     } else {
 *         console.log(results);
 *     }
 * });
 *
 * // Using Promises
 * async.map(fileList, getFileSizeInBytes)
 * .then( results => {
 *     console.log(results);
 *     // results is now an array of the file size in bytes for each file, e.g.
 *     // [ 1000, 2000, 3000]
 * }).catch( err => {
 *     console.log(err);
 * });
 *
 * // Error Handling
 * async.map(withMissingFileList, getFileSizeInBytes)
 * .then( results => {
 *     console.log(results);
 * }).catch( err => {
 *     console.log(err);
 *     // [ Error: ENOENT: no such file or directory ]
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let results = await async.map(fileList, getFileSizeInBytes);
 *         console.log(results);
 *         // results is now an array of the file size in bytes for each file, e.g.
 *         // [ 1000, 2000, 3000]
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * // Error Handling
 * async () => {
 *     try {
 *         let results = await async.map(withMissingFileList, getFileSizeInBytes);
 *         console.log(results);
 *     }
 *     catch (err) {
 *         console.log(err);
 *         // [ Error: ENOENT: no such file or directory ]
 *     }
 * }
 *
 */ function map(coll, iteratee, callback) {
    return _asyncMap(eachOf$1, coll, iteratee, callback);
}
var map$1 = awaitify(map, 3);
/**
 * Applies the provided arguments to each function in the array, calling
 * `callback` after all functions have completed. If you only provide the first
 * argument, `fns`, then it will return a function which lets you pass in the
 * arguments as if it were a single function call. If more arguments are
 * provided, `callback` is required while `args` is still optional. The results
 * for each of the applied async functions are passed to the final callback
 * as an array.
 *
 * @name applyEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} fns - A collection of {@link AsyncFunction}s
 * to all call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {AsyncFunction} - Returns a function that takes no args other than
 * an optional callback, that is the result of applying the `args` to each
 * of the functions.
 * @example
 *
 * const appliedFn = async.applyEach([enableSearch, updateSchema], 'bucket')
 *
 * appliedFn((err, results) => {
 *     // results[0] is the results for `enableSearch`
 *     // results[1] is the results for `updateSchema`
 * });
 *
 * // partial application example:
 * async.each(
 *     buckets,
 *     async (bucket) => async.applyEach([enableSearch, updateSchema], bucket)(),
 *     callback
 * );
 */ var applyEach$1 = applyEach(map$1);
/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
 *
 * @name eachOfSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfSeries
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 */ function eachOfSeries(coll, iteratee, callback) {
    return eachOfLimit$2(coll, 1, iteratee, callback);
}
var eachOfSeries$1 = awaitify(eachOfSeries, 3);
/**
 * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
 *
 * @name mapSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 */ function mapSeries(coll, iteratee, callback) {
    return _asyncMap(eachOfSeries$1, coll, iteratee, callback);
}
var mapSeries$1 = awaitify(mapSeries, 3);
/**
 * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
 *
 * @name applyEachSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.applyEach]{@link module:ControlFlow.applyEach}
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} fns - A collection of {@link AsyncFunction}s to all
 * call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {AsyncFunction} - A function, that when called, is the result of
 * appling the `args` to the list of functions.  It takes no args, other than
 * a callback.
 */ var applyEachSeries = applyEach(mapSeries$1);
const PROMISE_SYMBOL = Symbol("promiseCallback");
function promiseCallback() {
    let resolve, reject;
    function callback(err, ...args) {
        if (err) return reject(err);
        resolve(args.length > 1 ? args : args[0]);
    }
    callback[PROMISE_SYMBOL] = new Promise((res, rej)=>{
        resolve = res, reject = rej;
    });
    return callback;
}
/**
 * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
 * their requirements. Each function can optionally depend on other functions
 * being completed first, and each function is run as soon as its requirements
 * are satisfied.
 *
 * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
 * will stop. Further tasks will not execute (so any other functions depending
 * on it will not run), and the main `callback` is immediately called with the
 * error.
 *
 * {@link AsyncFunction}s also receive an object containing the results of functions which
 * have completed so far as the first argument, if they have dependencies. If a
 * task function has no dependencies, it will only be passed a callback.
 *
 * @name auto
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Object} tasks - An object. Each of its properties is either a
 * function or an array of requirements, with the {@link AsyncFunction} itself the last item
 * in the array. The object's key of a property serves as the name of the task
 * defined by that property, i.e. can be used when specifying requirements for
 * other tasks. The function receives one or two arguments:
 * * a `results` object, containing the results of the previously executed
 *   functions, only passed if the task has any dependencies,
 * * a `callback(err, result)` function, which must be called when finished,
 *   passing an `error` (which can be `null`) and the result of the function's
 *   execution.
 * @param {number} [concurrency=Infinity] - An optional `integer` for
 * determining the maximum number of tasks that can be run in parallel. By
 * default, as many as possible.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback. Results are always returned; however, if an
 * error occurs, no further `tasks` will be performed, and the results object
 * will only contain partial results. Invoked with (err, results).
 * @returns {Promise} a promise, if a callback is not passed
 * @example
 *
 * //Using Callbacks
 * async.auto({
 *     get_data: function(callback) {
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: ['get_data', 'make_folder', function(results, callback) {
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(results, callback) {
 *         // once the file is written let's email a link to it...
 *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
 *     }]
 * }, function(err, results) {
 *     if (err) {
 *         console.log('err = ', err);
 *     }
 *     console.log('results = ', results);
 *     // results = {
 *     //     get_data: ['data', 'converted to array']
 *     //     make_folder; 'folder',
 *     //     write_file: 'filename'
 *     //     email_link: { file: 'filename', email: 'user@example.com' }
 *     // }
 * });
 *
 * //Using Promises
 * async.auto({
 *     get_data: function(callback) {
 *         console.log('in get_data');
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         console.log('in make_folder');
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: ['get_data', 'make_folder', function(results, callback) {
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(results, callback) {
 *         // once the file is written let's email a link to it...
 *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
 *     }]
 * }).then(results => {
 *     console.log('results = ', results);
 *     // results = {
 *     //     get_data: ['data', 'converted to array']
 *     //     make_folder; 'folder',
 *     //     write_file: 'filename'
 *     //     email_link: { file: 'filename', email: 'user@example.com' }
 *     // }
 * }).catch(err => {
 *     console.log('err = ', err);
 * });
 *
 * //Using async/await
 * async () => {
 *     try {
 *         let results = await async.auto({
 *             get_data: function(callback) {
 *                 // async code to get some data
 *                 callback(null, 'data', 'converted to array');
 *             },
 *             make_folder: function(callback) {
 *                 // async code to create a directory to store a file in
 *                 // this is run at the same time as getting the data
 *                 callback(null, 'folder');
 *             },
 *             write_file: ['get_data', 'make_folder', function(results, callback) {
 *                 // once there is some data and the directory exists,
 *                 // write the data to a file in the directory
 *                 callback(null, 'filename');
 *             }],
 *             email_link: ['write_file', function(results, callback) {
 *                 // once the file is written let's email a link to it...
 *                 callback(null, {'file':results.write_file, 'email':'user@example.com'});
 *             }]
 *         });
 *         console.log('results = ', results);
 *         // results = {
 *         //     get_data: ['data', 'converted to array']
 *         //     make_folder; 'folder',
 *         //     write_file: 'filename'
 *         //     email_link: { file: 'filename', email: 'user@example.com' }
 *         // }
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 */ function auto(tasks, concurrency, callback) {
    if (typeof concurrency !== "number") {
        // concurrency is optional, shift the args.
        callback = concurrency;
        concurrency = null;
    }
    callback = once(callback || promiseCallback());
    var numTasks = Object.keys(tasks).length;
    if (!numTasks) return callback(null);
    if (!concurrency) concurrency = numTasks;
    var results = {};
    var runningTasks = 0;
    var canceled = false;
    var hasError = false;
    var listeners = Object.create(null);
    var readyTasks = [];
    // for cycle detection:
    var readyToCheck = []; // tasks that have been identified as reachable
    // without the possibility of returning to an ancestor task
    var uncheckedDependencies = {};
    Object.keys(tasks).forEach((key)=>{
        var task = tasks[key];
        if (!Array.isArray(task)) {
            // no dependencies
            enqueueTask(key, [
                task
            ]);
            readyToCheck.push(key);
            return;
        }
        var dependencies = task.slice(0, task.length - 1);
        var remainingDependencies = dependencies.length;
        if (remainingDependencies === 0) {
            enqueueTask(key, task);
            readyToCheck.push(key);
            return;
        }
        uncheckedDependencies[key] = remainingDependencies;
        dependencies.forEach((dependencyName)=>{
            if (!tasks[dependencyName]) throw new Error("async.auto task `" + key + "` has a non-existent dependency `" + dependencyName + "` in " + dependencies.join(", "));
            addListener(dependencyName, ()=>{
                remainingDependencies--;
                if (remainingDependencies === 0) enqueueTask(key, task);
            });
        });
    });
    checkForDeadlocks();
    processQueue();
    function enqueueTask(key, task) {
        readyTasks.push(()=>runTask(key, task));
    }
    function processQueue() {
        if (canceled) return;
        if (readyTasks.length === 0 && runningTasks === 0) return callback(null, results);
        while(readyTasks.length && runningTasks < concurrency){
            var run = readyTasks.shift();
            run();
        }
    }
    function addListener(taskName, fn) {
        var taskListeners = listeners[taskName];
        if (!taskListeners) taskListeners = listeners[taskName] = [];
        taskListeners.push(fn);
    }
    function taskComplete(taskName) {
        var taskListeners = listeners[taskName] || [];
        taskListeners.forEach((fn)=>fn());
        processQueue();
    }
    function runTask(key, task) {
        if (hasError) return;
        var taskCallback = onlyOnce((err, ...result)=>{
            runningTasks--;
            if (err === false) {
                canceled = true;
                return;
            }
            if (result.length < 2) [result] = result;
            if (err) {
                var safeResults = {};
                Object.keys(results).forEach((rkey)=>{
                    safeResults[rkey] = results[rkey];
                });
                safeResults[key] = result;
                hasError = true;
                listeners = Object.create(null);
                if (canceled) return;
                callback(err, safeResults);
            } else {
                results[key] = result;
                taskComplete(key);
            }
        });
        runningTasks++;
        var taskFn = wrapAsync(task[task.length - 1]);
        if (task.length > 1) taskFn(results, taskCallback);
        else taskFn(taskCallback);
    }
    function checkForDeadlocks() {
        // Kahn's algorithm
        // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
        // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
        var currentTask;
        var counter = 0;
        while(readyToCheck.length){
            currentTask = readyToCheck.pop();
            counter++;
            getDependents(currentTask).forEach((dependent)=>{
                if (--uncheckedDependencies[dependent] === 0) readyToCheck.push(dependent);
            });
        }
        if (counter !== numTasks) throw new Error("async.auto cannot execute tasks due to a recursive dependency");
    }
    function getDependents(taskName) {
        var result = [];
        Object.keys(tasks).forEach((key)=>{
            const task = tasks[key];
            if (Array.isArray(task) && task.indexOf(taskName) >= 0) result.push(key);
        });
        return result;
    }
    return callback[PROMISE_SYMBOL];
}
var FN_ARGS = /^(?:async\s+)?(?:function)?\s*\w*\s*\(\s*([^)]+)\s*\)(?:\s*{)/;
var ARROW_FN_ARGS = /^(?:async\s+)?\(?\s*([^)=]+)\s*\)?(?:\s*=>)/;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /(=.+)?(\s*)$/;
function stripComments(string) {
    let stripped = "";
    let index = 0;
    let endBlockComment = string.indexOf("*/");
    while(index < string.length){
        if (string[index] === "/" && string[index + 1] === "/") {
            // inline comment
            let endIndex = string.indexOf("\n", index);
            index = endIndex === -1 ? string.length : endIndex;
        } else if (endBlockComment !== -1 && string[index] === "/" && string[index + 1] === "*") {
            // block comment
            let endIndex = string.indexOf("*/", index);
            if (endIndex !== -1) {
                index = endIndex + 2;
                endBlockComment = string.indexOf("*/", index);
            } else {
                stripped += string[index];
                index++;
            }
        } else {
            stripped += string[index];
            index++;
        }
    }
    return stripped;
}
function parseParams(func) {
    const src = stripComments(func.toString());
    let match = src.match(FN_ARGS);
    if (!match) match = src.match(ARROW_FN_ARGS);
    if (!match) throw new Error("could not parse args in autoInject\nSource:\n" + src);
    let [, args] = match;
    return args.replace(/\s/g, "").split(FN_ARG_SPLIT).map((arg)=>arg.replace(FN_ARG, "").trim());
}
/**
 * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
 * tasks are specified as parameters to the function, after the usual callback
 * parameter, with the parameter names matching the names of the tasks it
 * depends on. This can provide even more readable task graphs which can be
 * easier to maintain.
 *
 * If a final callback is specified, the task results are similarly injected,
 * specified as named parameters after the initial error parameter.
 *
 * The autoInject function is purely syntactic sugar and its semantics are
 * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
 *
 * @name autoInject
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.auto]{@link module:ControlFlow.auto}
 * @category Control Flow
 * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
 * the form 'func([dependencies...], callback). The object's key of a property
 * serves as the name of the task defined by that property, i.e. can be used
 * when specifying requirements for other tasks.
 * * The `callback` parameter is a `callback(err, result)` which must be called
 *   when finished, passing an `error` (which can be `null`) and the result of
 *   the function's execution. The remaining parameters name other tasks on
 *   which the task is dependent, and the results from those tasks are the
 *   arguments of those parameters.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback, and a `results` object with any completed
 * task results, similar to `auto`.
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * //  The example from `auto` can be rewritten as follows:
 * async.autoInject({
 *     get_data: function(callback) {
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: function(get_data, make_folder, callback) {
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     },
 *     email_link: function(write_file, callback) {
 *         // once the file is written let's email a link to it...
 *         // write_file contains the filename returned by write_file.
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 *
 * // If you are using a JS minifier that mangles parameter names, `autoInject`
 * // will not work with plain functions, since the parameter names will be
 * // collapsed to a single letter identifier.  To work around this, you can
 * // explicitly specify the names of the parameters your task function needs
 * // in an array, similar to Angular.js dependency injection.
 *
 * // This still has an advantage over plain `auto`, since the results a task
 * // depends on are still spread into arguments.
 * async.autoInject({
 *     //...
 *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(write_file, callback) {
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }]
 *     //...
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 */ function autoInject(tasks, callback) {
    var newTasks = {};
    Object.keys(tasks).forEach((key)=>{
        var taskFn = tasks[key];
        var params;
        var fnIsAsync = isAsync(taskFn);
        var hasNoDeps = !fnIsAsync && taskFn.length === 1 || fnIsAsync && taskFn.length === 0;
        if (Array.isArray(taskFn)) {
            params = [
                ...taskFn
            ];
            taskFn = params.pop();
            newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
        } else if (hasNoDeps) // no dependencies, use the function as-is
        newTasks[key] = taskFn;
        else {
            params = parseParams(taskFn);
            if (taskFn.length === 0 && !fnIsAsync && params.length === 0) throw new Error("autoInject task functions require explicit parameters.");
            // remove callback param
            if (!fnIsAsync) params.pop();
            newTasks[key] = params.concat(newTask);
        }
        function newTask(results, taskCb) {
            var newArgs = params.map((name)=>results[name]);
            newArgs.push(taskCb);
            wrapAsync(taskFn)(...newArgs);
        }
    });
    return auto(newTasks, callback);
}
// Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
// used for queues. This implementation assumes that the node provided by the user can be modified
// to adjust the next and last properties. We implement only the minimal functionality
// for queue support.
class DLL {
    constructor(){
        this.head = this.tail = null;
        this.length = 0;
    }
    removeLink(node) {
        if (node.prev) node.prev.next = node.next;
        else this.head = node.next;
        if (node.next) node.next.prev = node.prev;
        else this.tail = node.prev;
        node.prev = node.next = null;
        this.length -= 1;
        return node;
    }
    empty() {
        while(this.head)this.shift();
        return this;
    }
    insertAfter(node, newNode) {
        newNode.prev = node;
        newNode.next = node.next;
        if (node.next) node.next.prev = newNode;
        else this.tail = newNode;
        node.next = newNode;
        this.length += 1;
    }
    insertBefore(node, newNode) {
        newNode.prev = node.prev;
        newNode.next = node;
        if (node.prev) node.prev.next = newNode;
        else this.head = newNode;
        node.prev = newNode;
        this.length += 1;
    }
    unshift(node) {
        if (this.head) this.insertBefore(this.head, node);
        else setInitial(this, node);
    }
    push(node) {
        if (this.tail) this.insertAfter(this.tail, node);
        else setInitial(this, node);
    }
    shift() {
        return this.head && this.removeLink(this.head);
    }
    pop() {
        return this.tail && this.removeLink(this.tail);
    }
    toArray() {
        return [
            ...this
        ];
    }
    *[Symbol.iterator]() {
        var cur = this.head;
        while(cur){
            yield cur.data;
            cur = cur.next;
        }
    }
    remove(testFn) {
        var curr = this.head;
        while(curr){
            var { next  } = curr;
            if (testFn(curr)) this.removeLink(curr);
            curr = next;
        }
        return this;
    }
}
function setInitial(dll, node) {
    dll.length = 1;
    dll.head = dll.tail = node;
}
function queue(worker, concurrency, payload) {
    if (concurrency == null) concurrency = 1;
    else if (concurrency === 0) throw new RangeError("Concurrency must not be zero");
    var _worker = wrapAsync(worker);
    var numRunning = 0;
    var workersList = [];
    const events = {
        error: [],
        drain: [],
        saturated: [],
        unsaturated: [],
        empty: []
    };
    function on(event, handler) {
        events[event].push(handler);
    }
    function once(event, handler) {
        const handleAndRemove = (...args)=>{
            off(event, handleAndRemove);
            handler(...args);
        };
        events[event].push(handleAndRemove);
    }
    function off(event, handler) {
        if (!event) return Object.keys(events).forEach((ev)=>events[ev] = []);
        if (!handler) return events[event] = [];
        events[event] = events[event].filter((ev)=>ev !== handler);
    }
    function trigger(event, ...args) {
        events[event].forEach((handler)=>handler(...args));
    }
    var processingScheduled = false;
    function _insert(data, insertAtFront, rejectOnError, callback) {
        if (callback != null && typeof callback !== "function") throw new Error("task callback must be a function");
        q.started = true;
        var res, rej;
        function promiseCallback(err, ...args) {
            // we don't care about the error, let the global error handler
            // deal with it
            if (err) return rejectOnError ? rej(err) : res();
            if (args.length <= 1) return res(args[0]);
            res(args);
        }
        var item = q._createTaskItem(data, rejectOnError ? promiseCallback : callback || promiseCallback);
        if (insertAtFront) q._tasks.unshift(item);
        else q._tasks.push(item);
        if (!processingScheduled) {
            processingScheduled = true;
            setImmediate$1(()=>{
                processingScheduled = false;
                q.process();
            });
        }
        if (rejectOnError || !callback) return new Promise((resolve, reject)=>{
            res = resolve;
            rej = reject;
        });
    }
    function _createCB(tasks) {
        return function(err, ...args) {
            numRunning -= 1;
            for(var i = 0, l = tasks.length; i < l; i++){
                var task = tasks[i];
                var index = workersList.indexOf(task);
                if (index === 0) workersList.shift();
                else if (index > 0) workersList.splice(index, 1);
                task.callback(err, ...args);
                if (err != null) trigger("error", err, task.data);
            }
            if (numRunning <= q.concurrency - q.buffer) trigger("unsaturated");
            if (q.idle()) trigger("drain");
            q.process();
        };
    }
    function _maybeDrain(data) {
        if (data.length === 0 && q.idle()) {
            // call drain immediately if there are no tasks
            setImmediate$1(()=>trigger("drain"));
            return true;
        }
        return false;
    }
    const eventMethod = (name)=>(handler)=>{
            if (!handler) return new Promise((resolve, reject)=>{
                once(name, (err, data)=>{
                    if (err) return reject(err);
                    resolve(data);
                });
            });
            off(name);
            on(name, handler);
        };
    var isProcessing = false;
    var q = {
        _tasks: new DLL(),
        _createTaskItem (data, callback) {
            return {
                data,
                callback
            };
        },
        *[Symbol.iterator] () {
            yield* q._tasks[Symbol.iterator]();
        },
        concurrency,
        payload,
        buffer: concurrency / 4,
        started: false,
        paused: false,
        push (data, callback) {
            if (Array.isArray(data)) {
                if (_maybeDrain(data)) return;
                return data.map((datum)=>_insert(datum, false, false, callback));
            }
            return _insert(data, false, false, callback);
        },
        pushAsync (data, callback) {
            if (Array.isArray(data)) {
                if (_maybeDrain(data)) return;
                return data.map((datum)=>_insert(datum, false, true, callback));
            }
            return _insert(data, false, true, callback);
        },
        kill () {
            off();
            q._tasks.empty();
        },
        unshift (data, callback) {
            if (Array.isArray(data)) {
                if (_maybeDrain(data)) return;
                return data.map((datum)=>_insert(datum, true, false, callback));
            }
            return _insert(data, true, false, callback);
        },
        unshiftAsync (data, callback) {
            if (Array.isArray(data)) {
                if (_maybeDrain(data)) return;
                return data.map((datum)=>_insert(datum, true, true, callback));
            }
            return _insert(data, true, true, callback);
        },
        remove (testFn) {
            q._tasks.remove(testFn);
        },
        process () {
            // Avoid trying to start too many processing operations. This can occur
            // when callbacks resolve synchronously (#1267).
            if (isProcessing) return;
            isProcessing = true;
            while(!q.paused && numRunning < q.concurrency && q._tasks.length){
                var tasks = [], data = [];
                var l = q._tasks.length;
                if (q.payload) l = Math.min(l, q.payload);
                for(var i = 0; i < l; i++){
                    var node = q._tasks.shift();
                    tasks.push(node);
                    workersList.push(node);
                    data.push(node.data);
                }
                numRunning += 1;
                if (q._tasks.length === 0) trigger("empty");
                if (numRunning === q.concurrency) trigger("saturated");
                var cb = onlyOnce(_createCB(tasks));
                _worker(data, cb);
            }
            isProcessing = false;
        },
        length () {
            return q._tasks.length;
        },
        running () {
            return numRunning;
        },
        workersList () {
            return workersList;
        },
        idle () {
            return q._tasks.length + numRunning === 0;
        },
        pause () {
            q.paused = true;
        },
        resume () {
            if (q.paused === false) return;
            q.paused = false;
            setImmediate$1(q.process);
        }
    };
    // define these as fixed properties, so people get useful errors when updating
    Object.defineProperties(q, {
        saturated: {
            writable: false,
            value: eventMethod("saturated")
        },
        unsaturated: {
            writable: false,
            value: eventMethod("unsaturated")
        },
        empty: {
            writable: false,
            value: eventMethod("empty")
        },
        drain: {
            writable: false,
            value: eventMethod("drain")
        },
        error: {
            writable: false,
            value: eventMethod("error")
        }
    });
    return q;
}
/**
 * Creates a `cargo` object with the specified payload. Tasks added to the
 * cargo will be processed altogether (up to the `payload` limit). If the
 * `worker` is in progress, the task is queued until it becomes available. Once
 * the `worker` has completed some tasks, each callback of those tasks is
 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
 * for how `cargo` and `queue` work.
 *
 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
 * at a time, cargo passes an array of tasks to a single worker, repeating
 * when the worker is finished.
 *
 * @name cargo
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An asynchronous function for processing an array
 * of queued tasks. Invoked with `(tasks, callback)`.
 * @param {number} [payload=Infinity] - An optional `integer` for determining
 * how many tasks should be processed per round; if omitted, the default is
 * unlimited.
 * @returns {module:ControlFlow.QueueObject} A cargo object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the cargo and inner queue.
 * @example
 *
 * // create a cargo object with payload 2
 * var cargo = async.cargo(function(tasks, callback) {
 *     for (var i=0; i<tasks.length; i++) {
 *         console.log('hello ' + tasks[i].name);
 *     }
 *     callback();
 * }, 2);
 *
 * // add some items
 * cargo.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * cargo.push({name: 'bar'}, function(err) {
 *     console.log('finished processing bar');
 * });
 * await cargo.push({name: 'baz'});
 * console.log('finished processing baz');
 */ function cargo(worker, payload) {
    return queue(worker, 1, payload);
}
/**
 * Creates a `cargoQueue` object with the specified payload. Tasks added to the
 * cargoQueue will be processed together (up to the `payload` limit) in `concurrency` parallel workers.
 * If the all `workers` are in progress, the task is queued until one becomes available. Once
 * a `worker` has completed some tasks, each callback of those tasks is
 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
 * for how `cargo` and `queue` work.
 *
 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
 * at a time, and [`cargo`]{@link module:ControlFlow.cargo} passes an array of tasks to a single worker,
 * the cargoQueue passes an array of tasks to multiple parallel workers.
 *
 * @name cargoQueue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @see [async.cargo]{@link module:ControlFLow.cargo}
 * @category Control Flow
 * @param {AsyncFunction} worker - An asynchronous function for processing an array
 * of queued tasks. Invoked with `(tasks, callback)`.
 * @param {number} [concurrency=1] - An `integer` for determining how many
 * `worker` functions should be run in parallel.  If omitted, the concurrency
 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
 * @param {number} [payload=Infinity] - An optional `integer` for determining
 * how many tasks should be processed per round; if omitted, the default is
 * unlimited.
 * @returns {module:ControlFlow.QueueObject} A cargoQueue object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the cargoQueue and inner queue.
 * @example
 *
 * // create a cargoQueue object with payload 2 and concurrency 2
 * var cargoQueue = async.cargoQueue(function(tasks, callback) {
 *     for (var i=0; i<tasks.length; i++) {
 *         console.log('hello ' + tasks[i].name);
 *     }
 *     callback();
 * }, 2, 2);
 *
 * // add some items
 * cargoQueue.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * cargoQueue.push({name: 'bar'}, function(err) {
 *     console.log('finished processing bar');
 * });
 * cargoQueue.push({name: 'baz'}, function(err) {
 *     console.log('finished processing baz');
 * });
 * cargoQueue.push({name: 'boo'}, function(err) {
 *     console.log('finished processing boo');
 * });
 */ function cargo$1(worker, concurrency, payload) {
    return queue(worker, concurrency, payload);
}
/**
 * Reduces `coll` into a single value using an async `iteratee` to return each
 * successive step. `memo` is the initial state of the reduction. This function
 * only operates in series.
 *
 * For performance reasons, it may make sense to split a call to this function
 * into a parallel map, and then use the normal `Array.prototype.reduce` on the
 * results. This function is for situations where each step in the reduction
 * needs to be async; if you can get the data before reducing it, then it's
 * probably a good idea to do so.
 *
 * @name reduce
 * @static
 * @memberOf module:Collections
 * @method
 * @alias inject
 * @alias foldl
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee completes with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * // file1.txt is a file that is 1000 bytes in size
 * // file2.txt is a file that is 2000 bytes in size
 * // file3.txt is a file that is 3000 bytes in size
 * // file4.txt does not exist
 *
 * const fileList = ['file1.txt','file2.txt','file3.txt'];
 * const withMissingFileList = ['file1.txt','file2.txt','file3.txt', 'file4.txt'];
 *
 * // asynchronous function that computes the file size in bytes
 * // file size is added to the memoized value, then returned
 * function getFileSizeInBytes(memo, file, callback) {
 *     fs.stat(file, function(err, stat) {
 *         if (err) {
 *             return callback(err);
 *         }
 *         callback(null, memo + stat.size);
 *     });
 * }
 *
 * // Using callbacks
 * async.reduce(fileList, 0, getFileSizeInBytes, function(err, result) {
 *     if (err) {
 *         console.log(err);
 *     } else {
 *         console.log(result);
 *         // 6000
 *         // which is the sum of the file sizes of the three files
 *     }
 * });
 *
 * // Error Handling
 * async.reduce(withMissingFileList, 0, getFileSizeInBytes, function(err, result) {
 *     if (err) {
 *         console.log(err);
 *         // [ Error: ENOENT: no such file or directory ]
 *     } else {
 *         console.log(result);
 *     }
 * });
 *
 * // Using Promises
 * async.reduce(fileList, 0, getFileSizeInBytes)
 * .then( result => {
 *     console.log(result);
 *     // 6000
 *     // which is the sum of the file sizes of the three files
 * }).catch( err => {
 *     console.log(err);
 * });
 *
 * // Error Handling
 * async.reduce(withMissingFileList, 0, getFileSizeInBytes)
 * .then( result => {
 *     console.log(result);
 * }).catch( err => {
 *     console.log(err);
 *     // [ Error: ENOENT: no such file or directory ]
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let result = await async.reduce(fileList, 0, getFileSizeInBytes);
 *         console.log(result);
 *         // 6000
 *         // which is the sum of the file sizes of the three files
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * // Error Handling
 * async () => {
 *     try {
 *         let result = await async.reduce(withMissingFileList, 0, getFileSizeInBytes);
 *         console.log(result);
 *     }
 *     catch (err) {
 *         console.log(err);
 *         // [ Error: ENOENT: no such file or directory ]
 *     }
 * }
 *
 */ function reduce(coll, memo, iteratee, callback) {
    callback = once(callback);
    var _iteratee = wrapAsync(iteratee);
    return eachOfSeries$1(coll, (x, i, iterCb)=>{
        _iteratee(memo, x, (err, v)=>{
            memo = v;
            iterCb(err);
        });
    }, (err)=>callback(err, memo));
}
var reduce$1 = awaitify(reduce, 4);
/**
 * Version of the compose function that is more natural to read. Each function
 * consumes the return value of the previous function. It is the equivalent of
 * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name seq
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.compose]{@link module:ControlFlow.compose}
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} a function that composes the `functions` in order
 * @example
 *
 * // Requires lodash (or underscore), express3 and dresende's orm2.
 * // Part of an app, that fetches cats of the logged user.
 * // This example uses `seq` function to avoid overnesting and error
 * // handling clutter.
 * app.get('/cats', function(request, response) {
 *     var User = request.models.User;
 *     async.seq(
 *         User.get.bind(User),  // 'User.get' has signature (id, callback(err, data))
 *         function(user, fn) {
 *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
 *         }
 *     )(req.session.user_id, function (err, cats) {
 *         if (err) {
 *             console.error(err);
 *             response.json({ status: 'error', message: err.message });
 *         } else {
 *             response.json({ status: 'ok', message: 'Cats found', data: cats });
 *         }
 *     });
 * });
 */ function seq(...functions) {
    var _functions = functions.map(wrapAsync);
    return function(...args) {
        var that = this;
        var cb = args[args.length - 1];
        if (typeof cb == "function") args.pop();
        else cb = promiseCallback();
        reduce$1(_functions, args, (newargs, fn, iterCb)=>{
            fn.apply(that, newargs.concat((err, ...nextargs)=>{
                iterCb(err, nextargs);
            }));
        }, (err, results)=>cb(err, ...results));
        return cb[PROMISE_SYMBOL];
    };
}
/**
 * Creates a function which is a composition of the passed asynchronous
 * functions. Each function consumes the return value of the function that
 * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
 * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
 *
 * If the last argument to the composed function is not a function, a promise
 * is returned when you call it.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name compose
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} an asynchronous function that is the composed
 * asynchronous `functions`
 * @example
 *
 * function add1(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n + 1);
 *     }, 10);
 * }
 *
 * function mul3(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n * 3);
 *     }, 10);
 * }
 *
 * var add1mul3 = async.compose(mul3, add1);
 * add1mul3(4, function (err, result) {
 *     // result now equals 15
 * });
 */ function compose(...args) {
    return seq(...args.reverse());
}
/**
 * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
 *
 * @name mapLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 */ function mapLimit(coll, limit, iteratee, callback) {
    return _asyncMap(eachOfLimit(limit), coll, iteratee, callback);
}
var mapLimit$1 = awaitify(mapLimit, 4);
/**
 * The same as [`concat`]{@link module:Collections.concat} but runs a maximum of `limit` async operations at a time.
 *
 * @name concatLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @alias flatMapLimit
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @returns A Promise, if no callback is passed
 */ function concatLimit(coll, limit, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    return mapLimit$1(coll, limit, (val, iterCb)=>{
        _iteratee(val, (err, ...args)=>{
            if (err) return iterCb(err);
            return iterCb(err, args);
        });
    }, (err, mapResults)=>{
        var result = [];
        for(var i = 0; i < mapResults.length; i++)if (mapResults[i]) result = result.concat(...mapResults[i]);
        return callback(err, result);
    });
}
var concatLimit$1 = awaitify(concatLimit, 4);
/**
 * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
 * the concatenated list. The `iteratee`s are called in parallel, and the
 * results are concatenated as they return. The results array will be returned in
 * the original order of `coll` passed to the `iteratee` function.
 *
 * @name concat
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @alias flatMap
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @returns A Promise, if no callback is passed
 * @example
 *
 * // dir1 is a directory that contains file1.txt, file2.txt
 * // dir2 is a directory that contains file3.txt, file4.txt
 * // dir3 is a directory that contains file5.txt
 * // dir4 does not exist
 *
 * let directoryList = ['dir1','dir2','dir3'];
 * let withMissingDirectoryList = ['dir1','dir2','dir3', 'dir4'];
 *
 * // Using callbacks
 * async.concat(directoryList, fs.readdir, function(err, results) {
 *    if (err) {
 *        console.log(err);
 *    } else {
 *        console.log(results);
 *        // [ 'file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', file5.txt ]
 *    }
 * });
 *
 * // Error Handling
 * async.concat(withMissingDirectoryList, fs.readdir, function(err, results) {
 *    if (err) {
 *        console.log(err);
 *        // [ Error: ENOENT: no such file or directory ]
 *        // since dir4 does not exist
 *    } else {
 *        console.log(results);
 *    }
 * });
 *
 * // Using Promises
 * async.concat(directoryList, fs.readdir)
 * .then(results => {
 *     console.log(results);
 *     // [ 'file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', file5.txt ]
 * }).catch(err => {
 *      console.log(err);
 * });
 *
 * // Error Handling
 * async.concat(withMissingDirectoryList, fs.readdir)
 * .then(results => {
 *     console.log(results);
 * }).catch(err => {
 *     console.log(err);
 *     // [ Error: ENOENT: no such file or directory ]
 *     // since dir4 does not exist
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let results = await async.concat(directoryList, fs.readdir);
 *         console.log(results);
 *         // [ 'file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', file5.txt ]
 *     } catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * // Error Handling
 * async () => {
 *     try {
 *         let results = await async.concat(withMissingDirectoryList, fs.readdir);
 *         console.log(results);
 *     } catch (err) {
 *         console.log(err);
 *         // [ Error: ENOENT: no such file or directory ]
 *         // since dir4 does not exist
 *     }
 * }
 *
 */ function concat(coll, iteratee, callback) {
    return concatLimit$1(coll, Infinity, iteratee, callback);
}
var concat$1 = awaitify(concat, 3);
/**
 * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
 *
 * @name concatSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @alias flatMapSeries
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
 * The iteratee should complete with an array an array of results.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @returns A Promise, if no callback is passed
 */ function concatSeries(coll, iteratee, callback) {
    return concatLimit$1(coll, 1, iteratee, callback);
}
var concatSeries$1 = awaitify(concatSeries, 3);
/**
 * Returns a function that when called, calls-back with the values provided.
 * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
 * [`auto`]{@link module:ControlFlow.auto}.
 *
 * @name constant
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {...*} arguments... - Any number of arguments to automatically invoke
 * callback with.
 * @returns {AsyncFunction} Returns a function that when invoked, automatically
 * invokes the callback with the previous given arguments.
 * @example
 *
 * async.waterfall([
 *     async.constant(42),
 *     function (value, next) {
 *         // value === 42
 *     },
 *     //...
 * ], callback);
 *
 * async.waterfall([
 *     async.constant(filename, "utf8"),
 *     fs.readFile,
 *     function (fileData, next) {
 *         //...
 *     }
 *     //...
 * ], callback);
 *
 * async.auto({
 *     hostname: async.constant("https://server.net/"),
 *     port: findFreePort,
 *     launchServer: ["hostname", "port", function (options, cb) {
 *         startServer(options, cb);
 *     }],
 *     //...
 * }, callback);
 */ function constant(...args) {
    return function(...ignoredArgs /*, callback*/ ) {
        var callback = ignoredArgs.pop();
        return callback(null, ...args);
    };
}
function _createTester(check, getResult) {
    return (eachfn, arr, _iteratee, cb)=>{
        var testPassed = false;
        var testResult;
        const iteratee = wrapAsync(_iteratee);
        eachfn(arr, (value, _, callback)=>{
            iteratee(value, (err, result)=>{
                if (err || err === false) return callback(err);
                if (check(result) && !testResult) {
                    testPassed = true;
                    testResult = getResult(true, value);
                    return callback(null, breakLoop);
                }
                callback();
            });
        }, (err)=>{
            if (err) return cb(err);
            cb(null, testPassed ? testResult : getResult(false));
        });
    };
}
/**
 * Returns the first value in `coll` that passes an async truth test. The
 * `iteratee` is applied in parallel, meaning the first iteratee to return
 * `true` will fire the detect `callback` with that result. That means the
 * result might not be the first item in the original `coll` (in terms of order)
 * that passes the test.

 * If order within the original `coll` is important, then look at
 * [`detectSeries`]{@link module:Collections.detectSeries}.
 *
 * @name detect
 * @static
 * @memberOf module:Collections
 * @method
 * @alias find
 * @category Collections
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @returns {Promise} a promise, if a callback is omitted
 * @example
 *
 * // dir1 is a directory that contains file1.txt, file2.txt
 * // dir2 is a directory that contains file3.txt, file4.txt
 * // dir3 is a directory that contains file5.txt
 *
 * // asynchronous function that checks if a file exists
 * function fileExists(file, callback) {
 *    fs.access(file, fs.constants.F_OK, (err) => {
 *        callback(null, !err);
 *    });
 * }
 *
 * async.detect(['file3.txt','file2.txt','dir1/file1.txt'], fileExists,
 *    function(err, result) {
 *        console.log(result);
 *        // dir1/file1.txt
 *        // result now equals the first file in the list that exists
 *    }
 *);
 *
 * // Using Promises
 * async.detect(['file3.txt','file2.txt','dir1/file1.txt'], fileExists)
 * .then(result => {
 *     console.log(result);
 *     // dir1/file1.txt
 *     // result now equals the first file in the list that exists
 * }).catch(err => {
 *     console.log(err);
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let result = await async.detect(['file3.txt','file2.txt','dir1/file1.txt'], fileExists);
 *         console.log(result);
 *         // dir1/file1.txt
 *         // result now equals the file in the list that exists
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 */ function detect(coll, iteratee, callback) {
    return _createTester((bool)=>bool, (res, item)=>item)(eachOf$1, coll, iteratee, callback);
}
var detect$1 = awaitify(detect, 3);
/**
 * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name detectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findLimit
 * @category Collections
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @returns {Promise} a promise, if a callback is omitted
 */ function detectLimit(coll, limit, iteratee, callback) {
    return _createTester((bool)=>bool, (res, item)=>item)(eachOfLimit(limit), coll, iteratee, callback);
}
var detectLimit$1 = awaitify(detectLimit, 4);
/**
 * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
 *
 * @name detectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findSeries
 * @category Collections
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @returns {Promise} a promise, if a callback is omitted
 */ function detectSeries(coll, iteratee, callback) {
    return _createTester((bool)=>bool, (res, item)=>item)(eachOfLimit(1), coll, iteratee, callback);
}
var detectSeries$1 = awaitify(detectSeries, 3);
function consoleFunc(name) {
    return (fn, ...args)=>wrapAsync(fn)(...args, (err, ...resultArgs)=>{
            /* istanbul ignore else */ if (typeof console === "object") {
                /* istanbul ignore else */ if (err) /* istanbul ignore else */ {
                    if (console.error) console.error(err);
                } else if (console[name]) resultArgs.forEach((x)=>console[name](x));
            }
        });
}
/**
 * Logs the result of an [`async` function]{@link AsyncFunction} to the
 * `console` using `console.dir` to display the properties of the resulting object.
 * Only works in Node.js or in browsers that support `console.dir` and
 * `console.error` (such as FF and Chrome).
 * If multiple arguments are returned from the async function,
 * `console.dir` is called on each argument in order.
 *
 * @name dir
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, {hello: name});
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.dir(hello, 'world');
 * {hello: 'world'}
 */ var dir = consoleFunc("dir");
/**
 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
 * the order of operations, the arguments `test` and `iteratee` are switched.
 *
 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
 *
 * @name doWhilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - A function which is called each time `test`
 * passes. Invoked with (callback).
 * @param {AsyncFunction} test - asynchronous truth test to perform after each
 * execution of `iteratee`. Invoked with (...args, callback), where `...args` are the
 * non-error args from the previous callback of `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped.
 * `callback` will be passed an error and any arguments passed to the final
 * `iteratee`'s callback. Invoked with (err, [results]);
 * @returns {Promise} a promise, if no callback is passed
 */ function doWhilst(iteratee, test, callback) {
    callback = onlyOnce(callback);
    var _fn = wrapAsync(iteratee);
    var _test = wrapAsync(test);
    var results;
    function next(err, ...args) {
        if (err) return callback(err);
        if (err === false) return;
        results = args;
        _test(...args, check);
    }
    function check(err, truth) {
        if (err) return callback(err);
        if (err === false) return;
        if (!truth) return callback(null, ...results);
        _fn(next);
    }
    return check(null, true);
}
var doWhilst$1 = awaitify(doWhilst, 3);
/**
 * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
 * argument ordering differs from `until`.
 *
 * @name doUntil
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {AsyncFunction} test - asynchronous truth test to perform after each
 * execution of `iteratee`. Invoked with (...args, callback), where `...args` are the
 * non-error args from the previous callback of `iteratee`
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns {Promise} a promise, if no callback is passed
 */ function doUntil(iteratee, test, callback) {
    const _test = wrapAsync(test);
    return doWhilst$1(iteratee, (...args)=>{
        const cb = args.pop();
        _test(...args, (err, truth)=>cb(err, !truth));
    }, callback);
}
function _withoutIndex(iteratee) {
    return (value, index, callback)=>iteratee(value, callback);
}
/**
 * Applies the function `iteratee` to each item in `coll`, in parallel.
 * The `iteratee` is called with an item from the list, and a callback for when
 * it has finished. If the `iteratee` passes an error to its `callback`, the
 * main `callback` (for the `each` function) is immediately called with the
 * error.
 *
 * Note, that since this function applies `iteratee` to each item in parallel,
 * there is no guarantee that the iteratee functions will complete in order.
 *
 * @name each
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEach
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to
 * each item in `coll`. Invoked with (item, callback).
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOf`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 * @example
 *
 * // dir1 is a directory that contains file1.txt, file2.txt
 * // dir2 is a directory that contains file3.txt, file4.txt
 * // dir3 is a directory that contains file5.txt
 * // dir4 does not exist
 *
 * const fileList = [ 'dir1/file2.txt', 'dir2/file3.txt', 'dir/file5.txt'];
 * const withMissingFileList = ['dir1/file1.txt', 'dir4/file2.txt'];
 *
 * // asynchronous function that deletes a file
 * const deleteFile = function(file, callback) {
 *     fs.unlink(file, callback);
 * };
 *
 * // Using callbacks
 * async.each(fileList, deleteFile, function(err) {
 *     if( err ) {
 *         console.log(err);
 *     } else {
 *         console.log('All files have been deleted successfully');
 *     }
 * });
 *
 * // Error Handling
 * async.each(withMissingFileList, deleteFile, function(err){
 *     console.log(err);
 *     // [ Error: ENOENT: no such file or directory ]
 *     // since dir4/file2.txt does not exist
 *     // dir1/file1.txt could have been deleted
 * });
 *
 * // Using Promises
 * async.each(fileList, deleteFile)
 * .then( () => {
 *     console.log('All files have been deleted successfully');
 * }).catch( err => {
 *     console.log(err);
 * });
 *
 * // Error Handling
 * async.each(fileList, deleteFile)
 * .then( () => {
 *     console.log('All files have been deleted successfully');
 * }).catch( err => {
 *     console.log(err);
 *     // [ Error: ENOENT: no such file or directory ]
 *     // since dir4/file2.txt does not exist
 *     // dir1/file1.txt could have been deleted
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         await async.each(files, deleteFile);
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * // Error Handling
 * async () => {
 *     try {
 *         await async.each(withMissingFileList, deleteFile);
 *     }
 *     catch (err) {
 *         console.log(err);
 *         // [ Error: ENOENT: no such file or directory ]
 *         // since dir4/file2.txt does not exist
 *         // dir1/file1.txt could have been deleted
 *     }
 * }
 *
 */ function eachLimit(coll, iteratee, callback) {
    return eachOf$1(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}
var each = awaitify(eachLimit, 3);
/**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfLimit`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 */ function eachLimit$1(coll, limit, iteratee, callback) {
    return eachOfLimit(limit)(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}
var eachLimit$2 = awaitify(eachLimit$1, 4);
/**
 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
 *
 * Note, that unlike [`each`]{@link module:Collections.each}, this function applies iteratee to each item
 * in series and therefore the iteratee functions will complete in order.

 * @name eachSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachSeries
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfSeries`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @returns {Promise} a promise, if a callback is omitted
 */ function eachSeries(coll, iteratee, callback) {
    return eachLimit$2(coll, 1, iteratee, callback);
}
var eachSeries$1 = awaitify(eachSeries, 3);
/**
 * Wrap an async function and ensure it calls its callback on a later tick of
 * the event loop.  If the function already calls its callback on a next tick,
 * no extra deferral is added. This is useful for preventing stack overflows
 * (`RangeError: Maximum call stack size exceeded`) and generally keeping
 * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
 * contained. ES2017 `async` functions are returned as-is -- they are immune
 * to Zalgo's corrupting influences, as they always resolve on a later tick.
 *
 * @name ensureAsync
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - an async function, one that expects a node-style
 * callback as its last argument.
 * @returns {AsyncFunction} Returns a wrapped function with the exact same call
 * signature as the function passed in.
 * @example
 *
 * function sometimesAsync(arg, callback) {
 *     if (cache[arg]) {
 *         return callback(null, cache[arg]); // this would be synchronous!!
 *     } else {
 *         doSomeIO(arg, callback); // this IO would be asynchronous
 *     }
 * }
 *
 * // this has a risk of stack overflows if many results are cached in a row
 * async.mapSeries(args, sometimesAsync, done);
 *
 * // this will defer sometimesAsync's callback if necessary,
 * // preventing stack overflows
 * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
 */ function ensureAsync(fn) {
    if (isAsync(fn)) return fn;
    return function(...args /*, callback*/ ) {
        var callback = args.pop();
        var sync = true;
        args.push((...innerArgs)=>{
            if (sync) setImmediate$1(()=>callback(...innerArgs));
            else callback(...innerArgs);
        });
        fn.apply(this, args);
        sync = false;
    };
}
/**
 * Returns `true` if every element in `coll` satisfies an async test. If any
 * iteratee call returns `false`, the main `callback` is immediately called.
 *
 * @name every
 * @static
 * @memberOf module:Collections
 * @method
 * @alias all
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 * @example
 *
 * // dir1 is a directory that contains file1.txt, file2.txt
 * // dir2 is a directory that contains file3.txt, file4.txt
 * // dir3 is a directory that contains file5.txt
 * // dir4 does not exist
 *
 * const fileList = ['dir1/file1.txt','dir2/file3.txt','dir3/file5.txt'];
 * const withMissingFileList = ['file1.txt','file2.txt','file4.txt'];
 *
 * // asynchronous function that checks if a file exists
 * function fileExists(file, callback) {
 *    fs.access(file, fs.constants.F_OK, (err) => {
 *        callback(null, !err);
 *    });
 * }
 *
 * // Using callbacks
 * async.every(fileList, fileExists, function(err, result) {
 *     console.log(result);
 *     // true
 *     // result is true since every file exists
 * });
 *
 * async.every(withMissingFileList, fileExists, function(err, result) {
 *     console.log(result);
 *     // false
 *     // result is false since NOT every file exists
 * });
 *
 * // Using Promises
 * async.every(fileList, fileExists)
 * .then( result => {
 *     console.log(result);
 *     // true
 *     // result is true since every file exists
 * }).catch( err => {
 *     console.log(err);
 * });
 *
 * async.every(withMissingFileList, fileExists)
 * .then( result => {
 *     console.log(result);
 *     // false
 *     // result is false since NOT every file exists
 * }).catch( err => {
 *     console.log(err);
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let result = await async.every(fileList, fileExists);
 *         console.log(result);
 *         // true
 *         // result is true since every file exists
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * async () => {
 *     try {
 *         let result = await async.every(withMissingFileList, fileExists);
 *         console.log(result);
 *         // false
 *         // result is false since NOT every file exists
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 */ function every(coll, iteratee, callback) {
    return _createTester((bool)=>!bool, (res)=>!res)(eachOf$1, coll, iteratee, callback);
}
var every$1 = awaitify(every, 3);
/**
 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
 *
 * @name everyLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allLimit
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 */ function everyLimit(coll, limit, iteratee, callback) {
    return _createTester((bool)=>!bool, (res)=>!res)(eachOfLimit(limit), coll, iteratee, callback);
}
var everyLimit$1 = awaitify(everyLimit, 4);
/**
 * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
 *
 * @name everySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allSeries
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in series.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 */ function everySeries(coll, iteratee, callback) {
    return _createTester((bool)=>!bool, (res)=>!res)(eachOfSeries$1, coll, iteratee, callback);
}
var everySeries$1 = awaitify(everySeries, 3);
function filterArray(eachfn, arr, iteratee, callback) {
    var truthValues = new Array(arr.length);
    eachfn(arr, (x, index, iterCb)=>{
        iteratee(x, (err, v)=>{
            truthValues[index] = !!v;
            iterCb(err);
        });
    }, (err)=>{
        if (err) return callback(err);
        var results = [];
        for(var i = 0; i < arr.length; i++)if (truthValues[i]) results.push(arr[i]);
        callback(null, results);
    });
}
function filterGeneric(eachfn, coll, iteratee, callback) {
    var results = [];
    eachfn(coll, (x, index, iterCb)=>{
        iteratee(x, (err, v)=>{
            if (err) return iterCb(err);
            if (v) results.push({
                index,
                value: x
            });
            iterCb(err);
        });
    }, (err)=>{
        if (err) return callback(err);
        callback(null, results.sort((a, b)=>a.index - b.index).map((v)=>v.value));
    });
}
function _filter(eachfn, coll, iteratee, callback) {
    var filter = isArrayLike(coll) ? filterArray : filterGeneric;
    return filter(eachfn, coll, wrapAsync(iteratee), callback);
}
/**
 * Returns a new array of all the values in `coll` which pass an async truth
 * test. This operation is performed in parallel, but the results array will be
 * in the same order as the original.
 *
 * @name filter
 * @static
 * @memberOf module:Collections
 * @method
 * @alias select
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback provided
 * @example
 *
 * // dir1 is a directory that contains file1.txt, file2.txt
 * // dir2 is a directory that contains file3.txt, file4.txt
 * // dir3 is a directory that contains file5.txt
 *
 * const files = ['dir1/file1.txt','dir2/file3.txt','dir3/file6.txt'];
 *
 * // asynchronous function that checks if a file exists
 * function fileExists(file, callback) {
 *    fs.access(file, fs.constants.F_OK, (err) => {
 *        callback(null, !err);
 *    });
 * }
 *
 * // Using callbacks
 * async.filter(files, fileExists, function(err, results) {
 *    if(err) {
 *        console.log(err);
 *    } else {
 *        console.log(results);
 *        // [ 'dir1/file1.txt', 'dir2/file3.txt' ]
 *        // results is now an array of the existing files
 *    }
 * });
 *
 * // Using Promises
 * async.filter(files, fileExists)
 * .then(results => {
 *     console.log(results);
 *     // [ 'dir1/file1.txt', 'dir2/file3.txt' ]
 *     // results is now an array of the existing files
 * }).catch(err => {
 *     console.log(err);
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let results = await async.filter(files, fileExists);
 *         console.log(results);
 *         // [ 'dir1/file1.txt', 'dir2/file3.txt' ]
 *         // results is now an array of the existing files
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 */ function filter(coll, iteratee, callback) {
    return _filter(eachOf$1, coll, iteratee, callback);
}
var filter$1 = awaitify(filter, 3);
/**
 * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name filterLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectLimit
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback provided
 */ function filterLimit(coll, limit, iteratee, callback) {
    return _filter(eachOfLimit(limit), coll, iteratee, callback);
}
var filterLimit$1 = awaitify(filterLimit, 4);
/**
 * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
 *
 * @name filterSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectSeries
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results)
 * @returns {Promise} a promise, if no callback provided
 */ function filterSeries(coll, iteratee, callback) {
    return _filter(eachOfSeries$1, coll, iteratee, callback);
}
var filterSeries$1 = awaitify(filterSeries, 3);
/**
 * Calls the asynchronous function `fn` with a callback parameter that allows it
 * to call itself again, in series, indefinitely.

 * If an error is passed to the callback then `errback` is called with the
 * error, and execution stops, otherwise it will never be called.
 *
 * @name forever
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} fn - an async function to call repeatedly.
 * Invoked with (next).
 * @param {Function} [errback] - when `fn` passes an error to it's callback,
 * this function will be called, and execution stops. Invoked with (err).
 * @returns {Promise} a promise that rejects if an error occurs and an errback
 * is not passed
 * @example
 *
 * async.forever(
 *     function(next) {
 *         // next is suitable for passing to things that need a callback(err [, whatever]);
 *         // it will result in this function being called again.
 *     },
 *     function(err) {
 *         // if next is called with a value in its first parameter, it will appear
 *         // in here as 'err', and execution will stop.
 *     }
 * );
 */ function forever(fn, errback) {
    var done = onlyOnce(errback);
    var task = wrapAsync(ensureAsync(fn));
    function next(err) {
        if (err) return done(err);
        if (err === false) return;
        task(next);
    }
    return next();
}
var forever$1 = awaitify(forever, 2);
/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
 *
 * @name groupByLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 * @returns {Promise} a promise, if no callback is passed
 */ function groupByLimit(coll, limit, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    return mapLimit$1(coll, limit, (val, iterCb)=>{
        _iteratee(val, (err, key)=>{
            if (err) return iterCb(err);
            return iterCb(err, {
                key,
                val
            });
        });
    }, (err, mapResults)=>{
        var result = {};
        // from MDN, handle object having an `hasOwnProperty` prop
        var { hasOwnProperty  } = Object.prototype;
        for(var i = 0; i < mapResults.length; i++)if (mapResults[i]) {
            var { key  } = mapResults[i];
            var { val  } = mapResults[i];
            if (hasOwnProperty.call(result, key)) result[key].push(val);
            else result[key] = [
                val
            ];
        }
        return callback(err, result);
    });
}
var groupByLimit$1 = awaitify(groupByLimit, 4);
/**
 * Returns a new object, where each value corresponds to an array of items, from
 * `coll`, that returned the corresponding key. That is, the keys of the object
 * correspond to the values passed to the `iteratee` callback.
 *
 * Note: Since this function applies the `iteratee` to each item in parallel,
 * there is no guarantee that the `iteratee` functions will complete in order.
 * However, the values for each key in the `result` will be in the same order as
 * the original `coll`. For Objects, the values will roughly be in the order of
 * the original Objects' keys (but this can vary across JavaScript engines).
 *
 * @name groupBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * // dir1 is a directory that contains file1.txt, file2.txt
 * // dir2 is a directory that contains file3.txt, file4.txt
 * // dir3 is a directory that contains file5.txt
 * // dir4 does not exist
 *
 * const files = ['dir1/file1.txt','dir2','dir4']
 *
 * // asynchronous function that detects file type as none, file, or directory
 * function detectFile(file, callback) {
 *     fs.stat(file, function(err, stat) {
 *         if (err) {
 *             return callback(null, 'none');
 *         }
 *         callback(null, stat.isDirectory() ? 'directory' : 'file');
 *     });
 * }
 *
 * //Using callbacks
 * async.groupBy(files, detectFile, function(err, result) {
 *     if(err) {
 *         console.log(err);
 *     } else {
 *	       console.log(result);
 *         // {
 *         //     file: [ 'dir1/file1.txt' ],
 *         //     none: [ 'dir4' ],
 *         //     directory: [ 'dir2']
 *         // }
 *         // result is object containing the files grouped by type
 *     }
 * });
 *
 * // Using Promises
 * async.groupBy(files, detectFile)
 * .then( result => {
 *     console.log(result);
 *     // {
 *     //     file: [ 'dir1/file1.txt' ],
 *     //     none: [ 'dir4' ],
 *     //     directory: [ 'dir2']
 *     // }
 *     // result is object containing the files grouped by type
 * }).catch( err => {
 *     console.log(err);
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let result = await async.groupBy(files, detectFile);
 *         console.log(result);
 *         // {
 *         //     file: [ 'dir1/file1.txt' ],
 *         //     none: [ 'dir4' ],
 *         //     directory: [ 'dir2']
 *         // }
 *         // result is object containing the files grouped by type
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 */ function groupBy(coll, iteratee, callback) {
    return groupByLimit$1(coll, Infinity, iteratee, callback);
}
/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
 *
 * @name groupBySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whose
 * properties are arrays of values which returned the corresponding key.
 * @returns {Promise} a promise, if no callback is passed
 */ function groupBySeries(coll, iteratee, callback) {
    return groupByLimit$1(coll, 1, iteratee, callback);
}
/**
 * Logs the result of an `async` function to the `console`. Only works in
 * Node.js or in browsers that support `console.log` and `console.error` (such
 * as FF and Chrome). If multiple arguments are returned from the async
 * function, `console.log` is called on each argument in order.
 *
 * @name log
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, 'hello ' + name);
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.log(hello, 'world');
 * 'hello world'
 */ var log = consoleFunc("log");
/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name mapValuesLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @returns {Promise} a promise, if no callback is passed
 */ function mapValuesLimit(obj, limit, iteratee, callback) {
    callback = once(callback);
    var newObj = {};
    var _iteratee = wrapAsync(iteratee);
    return eachOfLimit(limit)(obj, (val, key, next)=>{
        _iteratee(val, key, (err, result)=>{
            if (err) return next(err);
            newObj[key] = result;
            next(err);
        });
    }, (err)=>callback(err, newObj));
}
var mapValuesLimit$1 = awaitify(mapValuesLimit, 4);
/**
 * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
 *
 * Produces a new Object by mapping each value of `obj` through the `iteratee`
 * function. The `iteratee` is called each `value` and `key` from `obj` and a
 * callback for when it has finished processing. Each of these callbacks takes
 * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
 * passes an error to its callback, the main `callback` (for the `mapValues`
 * function) is immediately called with the error.
 *
 * Note, the order of the keys in the result is not guaranteed.  The keys will
 * be roughly in the order they complete, (but this is very engine-specific)
 *
 * @name mapValues
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * // file1.txt is a file that is 1000 bytes in size
 * // file2.txt is a file that is 2000 bytes in size
 * // file3.txt is a file that is 3000 bytes in size
 * // file4.txt does not exist
 *
 * const fileMap = {
 *     f1: 'file1.txt',
 *     f2: 'file2.txt',
 *     f3: 'file3.txt'
 * };
 *
 * const withMissingFileMap = {
 *     f1: 'file1.txt',
 *     f2: 'file2.txt',
 *     f3: 'file4.txt'
 * };
 *
 * // asynchronous function that returns the file size in bytes
 * function getFileSizeInBytes(file, key, callback) {
 *     fs.stat(file, function(err, stat) {
 *         if (err) {
 *             return callback(err);
 *         }
 *         callback(null, stat.size);
 *     });
 * }
 *
 * // Using callbacks
 * async.mapValues(fileMap, getFileSizeInBytes, function(err, result) {
 *     if (err) {
 *         console.log(err);
 *     } else {
 *         console.log(result);
 *         // result is now a map of file size in bytes for each file, e.g.
 *         // {
 *         //     f1: 1000,
 *         //     f2: 2000,
 *         //     f3: 3000
 *         // }
 *     }
 * });
 *
 * // Error handling
 * async.mapValues(withMissingFileMap, getFileSizeInBytes, function(err, result) {
 *     if (err) {
 *         console.log(err);
 *         // [ Error: ENOENT: no such file or directory ]
 *     } else {
 *         console.log(result);
 *     }
 * });
 *
 * // Using Promises
 * async.mapValues(fileMap, getFileSizeInBytes)
 * .then( result => {
 *     console.log(result);
 *     // result is now a map of file size in bytes for each file, e.g.
 *     // {
 *     //     f1: 1000,
 *     //     f2: 2000,
 *     //     f3: 3000
 *     // }
 * }).catch (err => {
 *     console.log(err);
 * });
 *
 * // Error Handling
 * async.mapValues(withMissingFileMap, getFileSizeInBytes)
 * .then( result => {
 *     console.log(result);
 * }).catch (err => {
 *     console.log(err);
 *     // [ Error: ENOENT: no such file or directory ]
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let result = await async.mapValues(fileMap, getFileSizeInBytes);
 *         console.log(result);
 *         // result is now a map of file size in bytes for each file, e.g.
 *         // {
 *         //     f1: 1000,
 *         //     f2: 2000,
 *         //     f3: 3000
 *         // }
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * // Error Handling
 * async () => {
 *     try {
 *         let result = await async.mapValues(withMissingFileMap, getFileSizeInBytes);
 *         console.log(result);
 *     }
 *     catch (err) {
 *         console.log(err);
 *         // [ Error: ENOENT: no such file or directory ]
 *     }
 * }
 *
 */ function mapValues(obj, iteratee, callback) {
    return mapValuesLimit$1(obj, Infinity, iteratee, callback);
}
/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
 *
 * @name mapValuesSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @returns {Promise} a promise, if no callback is passed
 */ function mapValuesSeries(obj, iteratee, callback) {
    return mapValuesLimit$1(obj, 1, iteratee, callback);
}
/**
 * Caches the results of an async function. When creating a hash to store
 * function results against, the callback is omitted from the hash and an
 * optional hash function can be used.
 *
 * **Note: if the async function errs, the result will not be cached and
 * subsequent calls will call the wrapped function.**
 *
 * If no hash function is specified, the first argument is used as a hash key,
 * which may work reasonably if it is a string or a data type that converts to a
 * distinct string. Note that objects and arrays will not behave reasonably.
 * Neither will cases where the other arguments are significant. In such cases,
 * specify your own hash function.
 *
 * The cache of results is exposed as the `memo` property of the function
 * returned by `memoize`.
 *
 * @name memoize
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function to proxy and cache results from.
 * @param {Function} hasher - An optional function for generating a custom hash
 * for storing results. It has all the arguments applied to it apart from the
 * callback, and must be synchronous.
 * @returns {AsyncFunction} a memoized version of `fn`
 * @example
 *
 * var slow_fn = function(name, callback) {
 *     // do something
 *     callback(null, result);
 * };
 * var fn = async.memoize(slow_fn);
 *
 * // fn can now be used as if it were slow_fn
 * fn('some name', function() {
 *     // callback
 * });
 */ function memoize(fn, hasher = (v)=>v) {
    var memo = Object.create(null);
    var queues = Object.create(null);
    var _fn = wrapAsync(fn);
    var memoized = initialParams((args, callback)=>{
        var key = hasher(...args);
        if (key in memo) setImmediate$1(()=>callback(null, ...memo[key]));
        else if (key in queues) queues[key].push(callback);
        else {
            queues[key] = [
                callback
            ];
            _fn(...args, (err, ...resultArgs)=>{
                // #1465 don't memoize if an error occurred
                if (!err) memo[key] = resultArgs;
                var q = queues[key];
                delete queues[key];
                for(var i = 0, l = q.length; i < l; i++)q[i](err, ...resultArgs);
            });
        }
    });
    memoized.memo = memo;
    memoized.unmemoized = fn;
    return memoized;
}
/* istanbul ignore file */ /**
 * Calls `callback` on a later loop around the event loop. In Node.js this just
 * calls `process.nextTick`.  In the browser it will use `setImmediate` if
 * available, otherwise `setTimeout(callback, 0)`, which means other higher
 * priority events may precede the execution of `callback`.
 *
 * This is used internally for browser-compatibility purposes.
 *
 * @name nextTick
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.setImmediate]{@link module:Utils.setImmediate}
 * @category Util
 * @param {Function} callback - The function to call on a later loop around
 * the event loop. Invoked with (args...).
 * @param {...*} args... - any number of additional arguments to pass to the
 * callback on the next tick.
 * @example
 *
 * var call_order = [];
 * async.nextTick(function() {
 *     call_order.push('two');
 *     // call_order now equals ['one','two']
 * });
 * call_order.push('one');
 *
 * async.setImmediate(function (a, b, c) {
 *     // a, b, and c equal 1, 2, and 3
 * }, 1, 2, 3);
 */ var _defer$1;
if (hasNextTick) _defer$1 = process.nextTick;
else if (hasSetImmediate) _defer$1 = setImmediate;
else _defer$1 = fallback;
var nextTick = wrap(_defer$1);
var parallel = awaitify((eachfn, tasks, callback)=>{
    var results = isArrayLike(tasks) ? [] : {};
    eachfn(tasks, (task, key, taskCb)=>{
        wrapAsync(task)((err, ...result)=>{
            if (result.length < 2) [result] = result;
            results[key] = result;
            taskCb(err);
        });
    }, (err)=>callback(err, results));
}, 3);
/**
 * Run the `tasks` collection of functions in parallel, without waiting until
 * the previous function has completed. If any of the functions pass an error to
 * its callback, the main `callback` is immediately called with the value of the
 * error. Once the `tasks` have completed, the results are passed to the final
 * `callback` as an array.
 *
 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
 * parallel execution of code.  If your tasks do not use any timers or perform
 * any I/O, they will actually be executed in series.  Any synchronous setup
 * sections for each task will happen one after the other.  JavaScript remains
 * single-threaded.
 *
 * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
 * execution of other tasks when a task fails.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 * results from {@link async.parallel}.
 *
 * @name parallel
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 * @returns {Promise} a promise, if a callback is not passed
 *
 * @example
 *
 * //Using Callbacks
 * async.parallel([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ], function(err, results) {
 *     console.log(results);
 *     // results is equal to ['one','two'] even though
 *     // the second function had a shorter timeout.
 * });
 *
 * // an example using an object instead of an array
 * async.parallel({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     console.log(results);
 *     // results is equal to: { one: 1, two: 2 }
 * });
 *
 * //Using Promises
 * async.parallel([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ]).then(results => {
 *     console.log(results);
 *     // results is equal to ['one','two'] even though
 *     // the second function had a shorter timeout.
 * }).catch(err => {
 *     console.log(err);
 * });
 *
 * // an example using an object instead of an array
 * async.parallel({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }).then(results => {
 *     console.log(results);
 *     // results is equal to: { one: 1, two: 2 }
 * }).catch(err => {
 *     console.log(err);
 * });
 *
 * //Using async/await
 * async () => {
 *     try {
 *         let results = await async.parallel([
 *             function(callback) {
 *                 setTimeout(function() {
 *                     callback(null, 'one');
 *                 }, 200);
 *             },
 *             function(callback) {
 *                 setTimeout(function() {
 *                     callback(null, 'two');
 *                 }, 100);
 *             }
 *         ]);
 *         console.log(results);
 *         // results is equal to ['one','two'] even though
 *         // the second function had a shorter timeout.
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * // an example using an object instead of an array
 * async () => {
 *     try {
 *         let results = await async.parallel({
 *             one: function(callback) {
 *                 setTimeout(function() {
 *                     callback(null, 1);
 *                 }, 200);
 *             },
 *            two: function(callback) {
 *                 setTimeout(function() {
 *                     callback(null, 2);
 *                 }, 100);
 *            }
 *         });
 *         console.log(results);
 *         // results is equal to: { one: 1, two: 2 }
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 */ function parallel$1(tasks, callback) {
    return parallel(eachOf$1, tasks, callback);
}
/**
 * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name parallelLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.parallel]{@link module:ControlFlow.parallel}
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 * @returns {Promise} a promise, if a callback is not passed
 */ function parallelLimit(tasks, limit, callback) {
    return parallel(eachOfLimit(limit), tasks, callback);
}
/**
 * A queue of tasks for the worker function to complete.
 * @typedef {Iterable} QueueObject
 * @memberOf module:ControlFlow
 * @property {Function} length - a function returning the number of items
 * waiting to be processed. Invoke with `queue.length()`.
 * @property {boolean} started - a boolean indicating whether or not any
 * items have been pushed and processed by the queue.
 * @property {Function} running - a function returning the number of items
 * currently being processed. Invoke with `queue.running()`.
 * @property {Function} workersList - a function returning the array of items
 * currently being processed. Invoke with `queue.workersList()`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke with `queue.idle()`.
 * @property {number} concurrency - an integer for determining how many `worker`
 * functions should be run in parallel. This property can be changed after a
 * `queue` is created to alter the concurrency on-the-fly.
 * @property {number} payload - an integer that specifies how many items are
 * passed to the worker function at a time. only applies if this is a
 * [cargo]{@link module:ControlFlow.cargo} object
 * @property {AsyncFunction} push - add a new task to the `queue`. Calls `callback`
 * once the `worker` has finished processing the task. Instead of a single task,
 * a `tasks` array can be submitted. The respective callback is used for every
 * task in the list. Invoke with `queue.push(task, [callback])`,
 * @property {AsyncFunction} unshift - add a new task to the front of the `queue`.
 * Invoke with `queue.unshift(task, [callback])`.
 * @property {AsyncFunction} pushAsync - the same as `q.push`, except this returns
 * a promise that rejects if an error occurs.
 * @property {AsyncFunction} unshiftAsync - the same as `q.unshift`, except this returns
 * a promise that rejects if an error occurs.
 * @property {Function} remove - remove items from the queue that match a test
 * function.  The test function will be passed an object with a `data` property,
 * and a `priority` property, if this is a
 * [priorityQueue]{@link module:ControlFlow.priorityQueue} object.
 * Invoked with `queue.remove(testFn)`, where `testFn` is of the form
 * `function ({data, priority}) {}` and returns a Boolean.
 * @property {Function} saturated - a function that sets a callback that is
 * called when the number of running workers hits the `concurrency` limit, and
 * further tasks will be queued.  If the callback is omitted, `q.saturated()`
 * returns a promise for the next occurrence.
 * @property {Function} unsaturated - a function that sets a callback that is
 * called when the number of running workers is less than the `concurrency` &
 * `buffer` limits, and further tasks will not be queued. If the callback is
 * omitted, `q.unsaturated()` returns a promise for the next occurrence.
 * @property {number} buffer - A minimum threshold buffer in order to say that
 * the `queue` is `unsaturated`.
 * @property {Function} empty - a function that sets a callback that is called
 * when the last item from the `queue` is given to a `worker`. If the callback
 * is omitted, `q.empty()` returns a promise for the next occurrence.
 * @property {Function} drain - a function that sets a callback that is called
 * when the last item from the `queue` has returned from the `worker`. If the
 * callback is omitted, `q.drain()` returns a promise for the next occurrence.
 * @property {Function} error - a function that sets a callback that is called
 * when a task errors. Has the signature `function(error, task)`. If the
 * callback is omitted, `error()` returns a promise that rejects on the next
 * error.
 * @property {boolean} paused - a boolean for determining whether the queue is
 * in a paused state.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke with `queue.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke with `queue.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. No more tasks
 * should be pushed to the queue after calling this function. Invoke with `queue.kill()`.
 *
 * @example
 * const q = async.queue(worker, 2)
 * q.push(item1)
 * q.push(item2)
 * q.push(item3)
 * // queues are iterable, spread into an array to inspect
 * const items = [...q] // [item1, item2, item3]
 * // or use for of
 * for (let item of q) {
 *     console.log(item)
 * }
 *
 * q.drain(() => {
 *     console.log('all done')
 * })
 * // or
 * await q.drain()
 */ /**
 * Creates a `queue` object with the specified `concurrency`. Tasks added to the
 * `queue` are processed in parallel (up to the `concurrency` limit). If all
 * `worker`s are in progress, the task is queued until one becomes available.
 * Once a `worker` completes a `task`, that `task`'s callback is called.
 *
 * @name queue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`. Invoked with (task, callback).
 * @param {number} [concurrency=1] - An `integer` for determining how many
 * `worker` functions should be run in parallel.  If omitted, the concurrency
 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can be
 * attached as certain properties to listen for specific events during the
 * lifecycle of the queue.
 * @example
 *
 * // create a queue object with concurrency 2
 * var q = async.queue(function(task, callback) {
 *     console.log('hello ' + task.name);
 *     callback();
 * }, 2);
 *
 * // assign a callback
 * q.drain(function() {
 *     console.log('all items have been processed');
 * });
 * // or await the end
 * await q.drain()
 *
 * // assign an error callback
 * q.error(function(err, task) {
 *     console.error('task experienced an error');
 * });
 *
 * // add some items to the queue
 * q.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * // callback is optional
 * q.push({name: 'bar'});
 *
 * // add some items to the queue (batch-wise)
 * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
 *     console.log('finished processing item');
 * });
 *
 * // add some items to the front of the queue
 * q.unshift({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 */ function queue$1(worker, concurrency) {
    var _worker = wrapAsync(worker);
    return queue((items, cb)=>{
        _worker(items[0], cb);
    }, concurrency, 1);
}
// Binary min-heap implementation used for priority queue.
// Implementation is stable, i.e. push time is considered for equal priorities
class Heap {
    constructor(){
        this.heap = [];
        this.pushCount = Number.MIN_SAFE_INTEGER;
    }
    get length() {
        return this.heap.length;
    }
    empty() {
        this.heap = [];
        return this;
    }
    percUp(index) {
        let p;
        while(index > 0 && smaller(this.heap[index], this.heap[p = parent(index)])){
            let t = this.heap[index];
            this.heap[index] = this.heap[p];
            this.heap[p] = t;
            index = p;
        }
    }
    percDown(index) {
        let l;
        while((l = leftChi(index)) < this.heap.length){
            if (l + 1 < this.heap.length && smaller(this.heap[l + 1], this.heap[l])) l = l + 1;
            if (smaller(this.heap[index], this.heap[l])) break;
            let t = this.heap[index];
            this.heap[index] = this.heap[l];
            this.heap[l] = t;
            index = l;
        }
    }
    push(node) {
        node.pushCount = ++this.pushCount;
        this.heap.push(node);
        this.percUp(this.heap.length - 1);
    }
    unshift(node) {
        return this.heap.push(node);
    }
    shift() {
        let [top] = this.heap;
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.percDown(0);
        return top;
    }
    toArray() {
        return [
            ...this
        ];
    }
    *[Symbol.iterator]() {
        for(let i = 0; i < this.heap.length; i++)yield this.heap[i].data;
    }
    remove(testFn) {
        let j = 0;
        for(let i = 0; i < this.heap.length; i++)if (!testFn(this.heap[i])) {
            this.heap[j] = this.heap[i];
            j++;
        }
        this.heap.splice(j);
        for(let i = parent(this.heap.length - 1); i >= 0; i--)this.percDown(i);
        return this;
    }
}
function leftChi(i) {
    return (i << 1) + 1;
}
function parent(i) {
    return (i + 1 >> 1) - 1;
}
function smaller(x, y) {
    if (x.priority !== y.priority) return x.priority < y.priority;
    else return x.pushCount < y.pushCount;
}
/**
 * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
 * completed in ascending priority order.
 *
 * @name priorityQueue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`.
 * Invoked with (task, callback).
 * @param {number} concurrency - An `integer` for determining how many `worker`
 * functions should be run in parallel.  If omitted, the concurrency defaults to
 * `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are three
 * differences between `queue` and `priorityQueue` objects:
 * * `push(task, priority, [callback])` - `priority` should be a number. If an
 *   array of `tasks` is given, all tasks will be assigned the same priority.
 * * `pushAsync(task, priority, [callback])` - the same as `priorityQueue.push`,
 *   except this returns a promise that rejects if an error occurs.
 * * The `unshift` and `unshiftAsync` methods were removed.
 */ function priorityQueue(worker, concurrency) {
    // Start with a normal queue
    var q = queue$1(worker, concurrency);
    var { push , pushAsync  } = q;
    q._tasks = new Heap();
    q._createTaskItem = ({ data , priority  }, callback)=>{
        return {
            data,
            priority,
            callback
        };
    };
    function createDataItems(tasks, priority) {
        if (!Array.isArray(tasks)) return {
            data: tasks,
            priority
        };
        return tasks.map((data)=>{
            return {
                data,
                priority
            };
        });
    }
    // Override push to accept second parameter representing priority
    q.push = function(data, priority = 0, callback) {
        return push(createDataItems(data, priority), callback);
    };
    q.pushAsync = function(data, priority = 0, callback) {
        return pushAsync(createDataItems(data, priority), callback);
    };
    // Remove unshift functions
    delete q.unshift;
    delete q.unshiftAsync;
    return q;
}
/**
 * Runs the `tasks` array of functions in parallel, without waiting until the
 * previous function has completed. Once any of the `tasks` complete or pass an
 * error to its callback, the main `callback` is immediately called. It's
 * equivalent to `Promise.race()`.
 *
 * @name race
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
 * to run. Each function can complete with an optional `result` value.
 * @param {Function} callback - A callback to run once any of the functions have
 * completed. This function gets an error or result from the first function that
 * completed. Invoked with (err, result).
 * @returns {Promise} a promise, if a callback is omitted
 * @example
 *
 * async.race([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // main callback
 * function(err, result) {
 *     // the result will be equal to 'two' as it finishes earlier
 * });
 */ function race(tasks, callback) {
    callback = once(callback);
    if (!Array.isArray(tasks)) return callback(new TypeError("First argument to race must be an array of functions"));
    if (!tasks.length) return callback();
    for(var i = 0, l = tasks.length; i < l; i++)wrapAsync(tasks[i])(callback);
}
var race$1 = awaitify(race, 2);
/**
 * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
 *
 * @name reduceRight
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reduce]{@link module:Collections.reduce}
 * @alias foldr
 * @category Collection
 * @param {Array} array - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee completes with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 * @returns {Promise} a promise, if no callback is passed
 */ function reduceRight(array, memo, iteratee, callback) {
    var reversed = [
        ...array
    ].reverse();
    return reduce$1(reversed, memo, iteratee, callback);
}
/**
 * Wraps the async function in another function that always completes with a
 * result object, even when it errors.
 *
 * The result object has either the property `error` or `value`.
 *
 * @name reflect
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function you want to wrap
 * @returns {Function} - A function that always passes null to it's callback as
 * the error. The second argument to the callback will be an `object` with
 * either an `error` or a `value` property.
 * @example
 *
 * async.parallel([
 *     async.reflect(function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff but error ...
 *         callback('bad stuff happened');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     })
 * ],
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = 'bad stuff happened'
 *     // results[2].value = 'two'
 * });
 */ function reflect(fn) {
    var _fn = wrapAsync(fn);
    return initialParams(function reflectOn(args, reflectCallback) {
        args.push((error, ...cbArgs)=>{
            let retVal = {};
            if (error) retVal.error = error;
            if (cbArgs.length > 0) {
                var value = cbArgs;
                if (cbArgs.length <= 1) [value] = cbArgs;
                retVal.value = value;
            }
            reflectCallback(null, retVal);
        });
        return _fn.apply(this, args);
    });
}
/**
 * A helper function that wraps an array or an object of functions with `reflect`.
 *
 * @name reflectAll
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.reflect]{@link module:Utils.reflect}
 * @category Util
 * @param {Array|Object|Iterable} tasks - The collection of
 * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
 * @returns {Array} Returns an array of async functions, each wrapped in
 * `async.reflect`
 * @example
 *
 * let tasks = [
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         // do some more stuff but error ...
 *         callback(new Error('bad stuff happened'));
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ];
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = Error('bad stuff happened')
 *     // results[2].value = 'two'
 * });
 *
 * // an example using an object instead of an array
 * let tasks = {
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         callback('two');
 *     },
 *     three: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'three');
 *         }, 100);
 *     }
 * };
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results.one.value = 'one'
 *     // results.two.error = 'two'
 *     // results.three.value = 'three'
 * });
 */ function reflectAll(tasks) {
    var results;
    if (Array.isArray(tasks)) results = tasks.map(reflect);
    else {
        results = {};
        Object.keys(tasks).forEach((key)=>{
            results[key] = reflect.call(this, tasks[key]);
        });
    }
    return results;
}
function reject(eachfn, arr, _iteratee, callback) {
    const iteratee = wrapAsync(_iteratee);
    return _filter(eachfn, arr, (value, cb)=>{
        iteratee(value, (err, v)=>{
            cb(err, !v);
        });
    }, callback);
}
/**
 * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
 *
 * @name reject
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * // dir1 is a directory that contains file1.txt, file2.txt
 * // dir2 is a directory that contains file3.txt, file4.txt
 * // dir3 is a directory that contains file5.txt
 *
 * const fileList = ['dir1/file1.txt','dir2/file3.txt','dir3/file6.txt'];
 *
 * // asynchronous function that checks if a file exists
 * function fileExists(file, callback) {
 *    fs.access(file, fs.constants.F_OK, (err) => {
 *        callback(null, !err);
 *    });
 * }
 *
 * // Using callbacks
 * async.reject(fileList, fileExists, function(err, results) {
 *    // [ 'dir3/file6.txt' ]
 *    // results now equals an array of the non-existing files
 * });
 *
 * // Using Promises
 * async.reject(fileList, fileExists)
 * .then( results => {
 *     console.log(results);
 *     // [ 'dir3/file6.txt' ]
 *     // results now equals an array of the non-existing files
 * }).catch( err => {
 *     console.log(err);
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let results = await async.reject(fileList, fileExists);
 *         console.log(results);
 *         // [ 'dir3/file6.txt' ]
 *         // results now equals an array of the non-existing files
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 */ function reject$1(coll, iteratee, callback) {
    return reject(eachOf$1, coll, iteratee, callback);
}
var reject$2 = awaitify(reject$1, 3);
/**
 * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name rejectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 */ function rejectLimit(coll, limit, iteratee, callback) {
    return reject(eachOfLimit(limit), coll, iteratee, callback);
}
var rejectLimit$1 = awaitify(rejectLimit, 4);
/**
 * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
 *
 * @name rejectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback is passed
 */ function rejectSeries(coll, iteratee, callback) {
    return reject(eachOfSeries$1, coll, iteratee, callback);
}
var rejectSeries$1 = awaitify(rejectSeries, 3);
function constant$1(value) {
    return function() {
        return value;
    };
}
/**
 * Attempts to get a successful response from `task` no more than `times` times
 * before returning an error. If the task is successful, the `callback` will be
 * passed the result of the successful task. If all attempts fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name retry
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @see [async.retryable]{@link module:ControlFlow.retryable}
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
 * object with `times` and `interval` or a number.
 * * `times` - The number of attempts to make before giving up.  The default
 *   is `5`.
 * * `interval` - The time to wait between retries, in milliseconds.  The
 *   default is `0`. The interval may also be specified as a function of the
 *   retry count (see example).
 * * `errorFilter` - An optional synchronous function that is invoked on
 *   erroneous result. If it returns `true` the retry attempts will continue;
 *   if the function returns `false` the retry flow is aborted with the current
 *   attempt's error and result being returned to the final callback.
 *   Invoked with (err).
 * * If `opts` is a number, the number specifies the number of times to retry,
 *   with the default interval of `0`.
 * @param {AsyncFunction} task - An async function to retry.
 * Invoked with (callback).
 * @param {Function} [callback] - An optional callback which is called when the
 * task has succeeded, or after the final failed attempt. It receives the `err`
 * and `result` arguments of the last attempt at completing the `task`. Invoked
 * with (err, results).
 * @returns {Promise} a promise if no callback provided
 *
 * @example
 *
 * // The `retry` function can be used as a stand-alone control flow by passing
 * // a callback, as shown below:
 *
 * // try calling apiMethod 3 times
 * async.retry(3, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 3 times, waiting 200 ms between each retry
 * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 10 times with exponential backoff
 * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
 * async.retry({
 *   times: 10,
 *   interval: function(retryCount) {
 *     return 50 * Math.pow(2, retryCount);
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod the default 5 times no delay between each retry
 * async.retry(apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod only when error condition satisfies, all other
 * // errors will abort the retry control flow and return to final callback
 * async.retry({
 *   errorFilter: function(err) {
 *     return err.message === 'Temporary error'; // only retry on a specific error
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // to retry individual methods that are not as reliable within other
 * // control flow functions, use the `retryable` wrapper:
 * async.auto({
 *     users: api.getUsers.bind(api),
 *     payments: async.retryable(3, api.getPayments.bind(api))
 * }, function(err, results) {
 *     // do something with the results
 * });
 *
 */ const DEFAULT_TIMES = 5;
const DEFAULT_INTERVAL = 0;
function retry(opts, task, callback) {
    var options = {
        times: DEFAULT_TIMES,
        intervalFunc: constant$1(DEFAULT_INTERVAL)
    };
    if (arguments.length < 3 && typeof opts === "function") {
        callback = task || promiseCallback();
        task = opts;
    } else {
        parseTimes(options, opts);
        callback = callback || promiseCallback();
    }
    if (typeof task !== "function") throw new Error("Invalid arguments for async.retry");
    var _task = wrapAsync(task);
    var attempt = 1;
    function retryAttempt() {
        _task((err, ...args)=>{
            if (err === false) return;
            if (err && attempt++ < options.times && (typeof options.errorFilter != "function" || options.errorFilter(err))) setTimeout(retryAttempt, options.intervalFunc(attempt - 1));
            else callback(err, ...args);
        });
    }
    retryAttempt();
    return callback[PROMISE_SYMBOL];
}
function parseTimes(acc, t) {
    if (typeof t === "object") {
        acc.times = +t.times || DEFAULT_TIMES;
        acc.intervalFunc = typeof t.interval === "function" ? t.interval : constant$1(+t.interval || DEFAULT_INTERVAL);
        acc.errorFilter = t.errorFilter;
    } else if (typeof t === "number" || typeof t === "string") acc.times = +t || DEFAULT_TIMES;
    else throw new Error("Invalid arguments for async.retry");
}
/**
 * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
 * wraps a task and makes it retryable, rather than immediately calling it
 * with retries.
 *
 * @name retryable
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.retry]{@link module:ControlFlow.retry}
 * @category Control Flow
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
 * options, exactly the same as from `retry`, except for a `opts.arity` that
 * is the arity of the `task` function, defaulting to `task.length`
 * @param {AsyncFunction} task - the asynchronous function to wrap.
 * This function will be passed any arguments passed to the returned wrapper.
 * Invoked with (...args, callback).
 * @returns {AsyncFunction} The wrapped function, which when invoked, will
 * retry on an error, based on the parameters specified in `opts`.
 * This function will accept the same parameters as `task`.
 * @example
 *
 * async.auto({
 *     dep1: async.retryable(3, getFromFlakyService),
 *     process: ["dep1", async.retryable(3, function (results, cb) {
 *         maybeProcessData(results.dep1, cb);
 *     })]
 * }, callback);
 */ function retryable(opts, task) {
    if (!task) {
        task = opts;
        opts = null;
    }
    let arity = opts && opts.arity || task.length;
    if (isAsync(task)) arity += 1;
    var _task = wrapAsync(task);
    return initialParams((args, callback)=>{
        if (args.length < arity - 1 || callback == null) {
            args.push(callback);
            callback = promiseCallback();
        }
        function taskFn(cb) {
            _task(...args, cb);
        }
        if (opts) retry(opts, taskFn, callback);
        else retry(taskFn, callback);
        return callback[PROMISE_SYMBOL];
    });
}
/**
 * Run the functions in the `tasks` collection in series, each one running once
 * the previous function has completed. If any functions in the series pass an
 * error to its callback, no more functions are run, and `callback` is
 * immediately called with the value of the error. Otherwise, `callback`
 * receives an array of results when `tasks` have completed.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function, and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 *  results from {@link async.series}.
 *
 * **Note** that while many implementations preserve the order of object
 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
 * explicitly states that
 *
 * > The mechanics and order of enumerating the properties is not specified.
 *
 * So if you rely on the order in which your series of functions are executed,
 * and want this to work on all platforms, consider using an array.
 *
 * @name series
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} tasks - A collection containing
 * [async functions]{@link AsyncFunction} to run in series.
 * Each function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This function gets a results array (or object)
 * containing all the result arguments passed to the `task` callbacks. Invoked
 * with (err, result).
 * @return {Promise} a promise, if no callback is passed
 * @example
 *
 * //Using Callbacks
 * async.series([
 *     function(callback) {
 *         setTimeout(function() {
 *             // do some async task
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             // then do another async task
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ], function(err, results) {
 *     console.log(results);
 *     // results is equal to ['one','two']
 * });
 *
 * // an example using objects instead of arrays
 * async.series({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             // do some async task
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             // then do another async task
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     console.log(results);
 *     // results is equal to: { one: 1, two: 2 }
 * });
 *
 * //Using Promises
 * async.series([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ]).then(results => {
 *     console.log(results);
 *     // results is equal to ['one','two']
 * }).catch(err => {
 *     console.log(err);
 * });
 *
 * // an example using an object instead of an array
 * async.series({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             // do some async task
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             // then do another async task
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }).then(results => {
 *     console.log(results);
 *     // results is equal to: { one: 1, two: 2 }
 * }).catch(err => {
 *     console.log(err);
 * });
 *
 * //Using async/await
 * async () => {
 *     try {
 *         let results = await async.series([
 *             function(callback) {
 *                 setTimeout(function() {
 *                     // do some async task
 *                     callback(null, 'one');
 *                 }, 200);
 *             },
 *             function(callback) {
 *                 setTimeout(function() {
 *                     // then do another async task
 *                     callback(null, 'two');
 *                 }, 100);
 *             }
 *         ]);
 *         console.log(results);
 *         // results is equal to ['one','two']
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * // an example using an object instead of an array
 * async () => {
 *     try {
 *         let results = await async.parallel({
 *             one: function(callback) {
 *                 setTimeout(function() {
 *                     // do some async task
 *                     callback(null, 1);
 *                 }, 200);
 *             },
 *            two: function(callback) {
 *                 setTimeout(function() {
 *                     // then do another async task
 *                     callback(null, 2);
 *                 }, 100);
 *            }
 *         });
 *         console.log(results);
 *         // results is equal to: { one: 1, two: 2 }
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 */ function series(tasks, callback) {
    return parallel(eachOfSeries$1, tasks, callback);
}
/**
 * Returns `true` if at least one element in the `coll` satisfies an async test.
 * If any iteratee call returns `true`, the main `callback` is immediately
 * called.
 *
 * @name some
 * @static
 * @memberOf module:Collections
 * @method
 * @alias any
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 * @example
 *
 * // dir1 is a directory that contains file1.txt, file2.txt
 * // dir2 is a directory that contains file3.txt, file4.txt
 * // dir3 is a directory that contains file5.txt
 * // dir4 does not exist
 *
 * // asynchronous function that checks if a file exists
 * function fileExists(file, callback) {
 *    fs.access(file, fs.constants.F_OK, (err) => {
 *        callback(null, !err);
 *    });
 * }
 *
 * // Using callbacks
 * async.some(['dir1/missing.txt','dir2/missing.txt','dir3/file5.txt'], fileExists,
 *    function(err, result) {
 *        console.log(result);
 *        // true
 *        // result is true since some file in the list exists
 *    }
 *);
 *
 * async.some(['dir1/missing.txt','dir2/missing.txt','dir4/missing.txt'], fileExists,
 *    function(err, result) {
 *        console.log(result);
 *        // false
 *        // result is false since none of the files exists
 *    }
 *);
 *
 * // Using Promises
 * async.some(['dir1/missing.txt','dir2/missing.txt','dir3/file5.txt'], fileExists)
 * .then( result => {
 *     console.log(result);
 *     // true
 *     // result is true since some file in the list exists
 * }).catch( err => {
 *     console.log(err);
 * });
 *
 * async.some(['dir1/missing.txt','dir2/missing.txt','dir4/missing.txt'], fileExists)
 * .then( result => {
 *     console.log(result);
 *     // false
 *     // result is false since none of the files exists
 * }).catch( err => {
 *     console.log(err);
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let result = await async.some(['dir1/missing.txt','dir2/missing.txt','dir3/file5.txt'], fileExists);
 *         console.log(result);
 *         // true
 *         // result is true since some file in the list exists
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 * async () => {
 *     try {
 *         let result = await async.some(['dir1/missing.txt','dir2/missing.txt','dir4/missing.txt'], fileExists);
 *         console.log(result);
 *         // false
 *         // result is false since none of the files exists
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 */ function some(coll, iteratee, callback) {
    return _createTester(Boolean, (res)=>res)(eachOf$1, coll, iteratee, callback);
}
var some$1 = awaitify(some, 3);
/**
 * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
 *
 * @name someLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anyLimit
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 */ function someLimit(coll, limit, iteratee, callback) {
    return _createTester(Boolean, (res)=>res)(eachOfLimit(limit), coll, iteratee, callback);
}
var someLimit$1 = awaitify(someLimit, 4);
/**
 * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
 *
 * @name someSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anySeries
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in series.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 */ function someSeries(coll, iteratee, callback) {
    return _createTester(Boolean, (res)=>res)(eachOfSeries$1, coll, iteratee, callback);
}
var someSeries$1 = awaitify(someSeries, 3);
/**
 * Sorts a list by the results of running each `coll` value through an async
 * `iteratee`.
 *
 * @name sortBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a value to use as the sort criteria as
 * its `result`.
 * Invoked with (item, callback).
 * @param {Function} callback - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is the items
 * from the original `coll` sorted by the values returned by the `iteratee`
 * calls. Invoked with (err, results).
 * @returns {Promise} a promise, if no callback passed
 * @example
 *
 * // bigfile.txt is a file that is 251100 bytes in size
 * // mediumfile.txt is a file that is 11000 bytes in size
 * // smallfile.txt is a file that is 121 bytes in size
 *
 * // asynchronous function that returns the file size in bytes
 * function getFileSizeInBytes(file, callback) {
 *     fs.stat(file, function(err, stat) {
 *         if (err) {
 *             return callback(err);
 *         }
 *         callback(null, stat.size);
 *     });
 * }
 *
 * // Using callbacks
 * async.sortBy(['mediumfile.txt','smallfile.txt','bigfile.txt'], getFileSizeInBytes,
 *     function(err, results) {
 *         if (err) {
 *             console.log(err);
 *         } else {
 *             console.log(results);
 *             // results is now the original array of files sorted by
 *             // file size (ascending by default), e.g.
 *             // [ 'smallfile.txt', 'mediumfile.txt', 'bigfile.txt']
 *         }
 *     }
 * );
 *
 * // By modifying the callback parameter the
 * // sorting order can be influenced:
 *
 * // ascending order
 * async.sortBy(['mediumfile.txt','smallfile.txt','bigfile.txt'], function(file, callback) {
 *     getFileSizeInBytes(file, function(getFileSizeErr, fileSize) {
 *         if (getFileSizeErr) return callback(getFileSizeErr);
 *         callback(null, fileSize);
 *     });
 * }, function(err, results) {
 *         if (err) {
 *             console.log(err);
 *         } else {
 *             console.log(results);
 *             // results is now the original array of files sorted by
 *             // file size (ascending by default), e.g.
 *             // [ 'smallfile.txt', 'mediumfile.txt', 'bigfile.txt']
 *         }
 *     }
 * );
 *
 * // descending order
 * async.sortBy(['bigfile.txt','mediumfile.txt','smallfile.txt'], function(file, callback) {
 *     getFileSizeInBytes(file, function(getFileSizeErr, fileSize) {
 *         if (getFileSizeErr) {
 *             return callback(getFileSizeErr);
 *         }
 *         callback(null, fileSize * -1);
 *     });
 * }, function(err, results) {
 *         if (err) {
 *             console.log(err);
 *         } else {
 *             console.log(results);
 *             // results is now the original array of files sorted by
 *             // file size (ascending by default), e.g.
 *             // [ 'bigfile.txt', 'mediumfile.txt', 'smallfile.txt']
 *         }
 *     }
 * );
 *
 * // Error handling
 * async.sortBy(['mediumfile.txt','smallfile.txt','missingfile.txt'], getFileSizeInBytes,
 *     function(err, results) {
 *         if (err) {
 *             console.log(err);
 *             // [ Error: ENOENT: no such file or directory ]
 *         } else {
 *             console.log(results);
 *         }
 *     }
 * );
 *
 * // Using Promises
 * async.sortBy(['mediumfile.txt','smallfile.txt','bigfile.txt'], getFileSizeInBytes)
 * .then( results => {
 *     console.log(results);
 *     // results is now the original array of files sorted by
 *     // file size (ascending by default), e.g.
 *     // [ 'smallfile.txt', 'mediumfile.txt', 'bigfile.txt']
 * }).catch( err => {
 *     console.log(err);
 * });
 *
 * // Error handling
 * async.sortBy(['mediumfile.txt','smallfile.txt','missingfile.txt'], getFileSizeInBytes)
 * .then( results => {
 *     console.log(results);
 * }).catch( err => {
 *     console.log(err);
 *     // [ Error: ENOENT: no such file or directory ]
 * });
 *
 * // Using async/await
 * (async () => {
 *     try {
 *         let results = await async.sortBy(['bigfile.txt','mediumfile.txt','smallfile.txt'], getFileSizeInBytes);
 *         console.log(results);
 *         // results is now the original array of files sorted by
 *         // file size (ascending by default), e.g.
 *         // [ 'smallfile.txt', 'mediumfile.txt', 'bigfile.txt']
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * })();
 *
 * // Error handling
 * async () => {
 *     try {
 *         let results = await async.sortBy(['missingfile.txt','mediumfile.txt','smallfile.txt'], getFileSizeInBytes);
 *         console.log(results);
 *     }
 *     catch (err) {
 *         console.log(err);
 *         // [ Error: ENOENT: no such file or directory ]
 *     }
 * }
 *
 */ function sortBy(coll, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    return map$1(coll, (x, iterCb)=>{
        _iteratee(x, (err, criteria)=>{
            if (err) return iterCb(err);
            iterCb(err, {
                value: x,
                criteria
            });
        });
    }, (err, results)=>{
        if (err) return callback(err);
        callback(null, results.sort(comparator).map((v)=>v.value));
    });
    function comparator(left, right) {
        var a = left.criteria, b = right.criteria;
        return a < b ? -1 : a > b ? 1 : 0;
    }
}
var sortBy$1 = awaitify(sortBy, 3);
/**
 * Sets a time limit on an asynchronous function. If the function does not call
 * its callback within the specified milliseconds, it will be called with a
 * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
 *
 * @name timeout
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} asyncFn - The async function to limit in time.
 * @param {number} milliseconds - The specified time limit.
 * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
 * to timeout Error for more information..
 * @returns {AsyncFunction} Returns a wrapped function that can be used with any
 * of the control flow functions.
 * Invoke this function with the same parameters as you would `asyncFunc`.
 * @example
 *
 * function myFunction(foo, callback) {
 *     doAsyncTask(foo, function(err, data) {
 *         // handle errors
 *         if (err) return callback(err);
 *
 *         // do some stuff ...
 *
 *         // return processed data
 *         return callback(null, data);
 *     });
 * }
 *
 * var wrapped = async.timeout(myFunction, 1000);
 *
 * // call `wrapped` as you would `myFunction`
 * wrapped({ bar: 'bar' }, function(err, data) {
 *     // if `myFunction` takes < 1000 ms to execute, `err`
 *     // and `data` will have their expected values
 *
 *     // else `err` will be an Error with the code 'ETIMEDOUT'
 * });
 */ function timeout(asyncFn, milliseconds, info) {
    var fn = wrapAsync(asyncFn);
    return initialParams((args, callback)=>{
        var timedOut = false;
        var timer;
        function timeoutCallback() {
            var name = asyncFn.name || "anonymous";
            var error = new Error('Callback function "' + name + '" timed out.');
            error.code = "ETIMEDOUT";
            if (info) error.info = info;
            timedOut = true;
            callback(error);
        }
        args.push((...cbArgs)=>{
            if (!timedOut) {
                callback(...cbArgs);
                clearTimeout(timer);
            }
        });
        // setup timer and call original function
        timer = setTimeout(timeoutCallback, milliseconds);
        fn(...args);
    });
}
function range(size) {
    var result = Array(size);
    while(size--)result[size] = size;
    return result;
}
/**
 * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name timesLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} count - The number of times to run the function.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see [async.map]{@link module:Collections.map}.
 * @returns {Promise} a promise, if no callback is provided
 */ function timesLimit(count, limit, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    return mapLimit$1(range(count), limit, _iteratee, callback);
}
/**
 * Calls the `iteratee` function `n` times, and accumulates results in the same
 * manner you would use with [map]{@link module:Collections.map}.
 *
 * @name times
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 * @returns {Promise} a promise, if no callback is provided
 * @example
 *
 * // Pretend this is some complicated async factory
 * var createUser = function(id, callback) {
 *     callback(null, {
 *         id: 'user' + id
 *     });
 * };
 *
 * // generate 5 users
 * async.times(5, function(n, next) {
 *     createUser(n, function(err, user) {
 *         next(err, user);
 *     });
 * }, function(err, users) {
 *     // we should now have 5 users
 * });
 */ function times(n, iteratee, callback) {
    return timesLimit(n, Infinity, iteratee, callback);
}
/**
 * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
 *
 * @name timesSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 * @returns {Promise} a promise, if no callback is provided
 */ function timesSeries(n, iteratee, callback) {
    return timesLimit(n, 1, iteratee, callback);
}
/**
 * A relative of `reduce`.  Takes an Object or Array, and iterates over each
 * element in parallel, each step potentially mutating an `accumulator` value.
 * The type of the accumulator defaults to the type of collection passed in.
 *
 * @name transform
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|AsyncIterable|Object} coll - A collection to iterate over.
 * @param {*} [accumulator] - The initial state of the transform.  If omitted,
 * it will default to an empty Object or Array, depending on the type of `coll`
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * collection that potentially modifies the accumulator.
 * Invoked with (accumulator, item, key, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the transformed accumulator.
 * Invoked with (err, result).
 * @returns {Promise} a promise, if no callback provided
 * @example
 *
 * // file1.txt is a file that is 1000 bytes in size
 * // file2.txt is a file that is 2000 bytes in size
 * // file3.txt is a file that is 3000 bytes in size
 *
 * // helper function that returns human-readable size format from bytes
 * function formatBytes(bytes, decimals = 2) {
 *   // implementation not included for brevity
 *   return humanReadbleFilesize;
 * }
 *
 * const fileList = ['file1.txt','file2.txt','file3.txt'];
 *
 * // asynchronous function that returns the file size, transformed to human-readable format
 * // e.g. 1024 bytes = 1KB, 1234 bytes = 1.21 KB, 1048576 bytes = 1MB, etc.
 * function transformFileSize(acc, value, key, callback) {
 *     fs.stat(value, function(err, stat) {
 *         if (err) {
 *             return callback(err);
 *         }
 *         acc[key] = formatBytes(stat.size);
 *         callback(null);
 *     });
 * }
 *
 * // Using callbacks
 * async.transform(fileList, transformFileSize, function(err, result) {
 *     if(err) {
 *         console.log(err);
 *     } else {
 *         console.log(result);
 *         // [ '1000 Bytes', '1.95 KB', '2.93 KB' ]
 *     }
 * });
 *
 * // Using Promises
 * async.transform(fileList, transformFileSize)
 * .then(result => {
 *     console.log(result);
 *     // [ '1000 Bytes', '1.95 KB', '2.93 KB' ]
 * }).catch(err => {
 *     console.log(err);
 * });
 *
 * // Using async/await
 * (async () => {
 *     try {
 *         let result = await async.transform(fileList, transformFileSize);
 *         console.log(result);
 *         // [ '1000 Bytes', '1.95 KB', '2.93 KB' ]
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * })();
 *
 * @example
 *
 * // file1.txt is a file that is 1000 bytes in size
 * // file2.txt is a file that is 2000 bytes in size
 * // file3.txt is a file that is 3000 bytes in size
 *
 * // helper function that returns human-readable size format from bytes
 * function formatBytes(bytes, decimals = 2) {
 *   // implementation not included for brevity
 *   return humanReadbleFilesize;
 * }
 *
 * const fileMap = { f1: 'file1.txt', f2: 'file2.txt', f3: 'file3.txt' };
 *
 * // asynchronous function that returns the file size, transformed to human-readable format
 * // e.g. 1024 bytes = 1KB, 1234 bytes = 1.21 KB, 1048576 bytes = 1MB, etc.
 * function transformFileSize(acc, value, key, callback) {
 *     fs.stat(value, function(err, stat) {
 *         if (err) {
 *             return callback(err);
 *         }
 *         acc[key] = formatBytes(stat.size);
 *         callback(null);
 *     });
 * }
 *
 * // Using callbacks
 * async.transform(fileMap, transformFileSize, function(err, result) {
 *     if(err) {
 *         console.log(err);
 *     } else {
 *         console.log(result);
 *         // { f1: '1000 Bytes', f2: '1.95 KB', f3: '2.93 KB' }
 *     }
 * });
 *
 * // Using Promises
 * async.transform(fileMap, transformFileSize)
 * .then(result => {
 *     console.log(result);
 *     // { f1: '1000 Bytes', f2: '1.95 KB', f3: '2.93 KB' }
 * }).catch(err => {
 *     console.log(err);
 * });
 *
 * // Using async/await
 * async () => {
 *     try {
 *         let result = await async.transform(fileMap, transformFileSize);
 *         console.log(result);
 *         // { f1: '1000 Bytes', f2: '1.95 KB', f3: '2.93 KB' }
 *     }
 *     catch (err) {
 *         console.log(err);
 *     }
 * }
 *
 */ function transform(coll, accumulator, iteratee, callback) {
    if (arguments.length <= 3 && typeof accumulator === "function") {
        callback = iteratee;
        iteratee = accumulator;
        accumulator = Array.isArray(coll) ? [] : {};
    }
    callback = once(callback || promiseCallback());
    var _iteratee = wrapAsync(iteratee);
    eachOf$1(coll, (v, k, cb)=>{
        _iteratee(accumulator, v, k, cb);
    }, (err)=>callback(err, accumulator));
    return callback[PROMISE_SYMBOL];
}
/**
 * It runs each task in series but stops whenever any of the functions were
 * successful. If one of the tasks were successful, the `callback` will be
 * passed the result of the successful task. If all tasks fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name tryEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|AsyncIterable|Object} tasks - A collection containing functions to
 * run, each function is passed a `callback(err, result)` it must call on
 * completion with an error `err` (which can be `null`) and an optional `result`
 * value.
 * @param {Function} [callback] - An optional callback which is called when one
 * of the tasks has succeeded, or all have failed. It receives the `err` and
 * `result` arguments of the last attempt at completing the `task`. Invoked with
 * (err, results).
 * @returns {Promise} a promise, if no callback is passed
 * @example
 * async.tryEach([
 *     function getDataFromFirstWebsite(callback) {
 *         // Try getting the data from the first website
 *         callback(err, data);
 *     },
 *     function getDataFromSecondWebsite(callback) {
 *         // First website failed,
 *         // Try getting the data from the backup website
 *         callback(err, data);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     Now do something with the data.
 * });
 *
 */ function tryEach(tasks, callback) {
    var error = null;
    var result;
    return eachSeries$1(tasks, (task, taskCb)=>{
        wrapAsync(task)((err, ...args)=>{
            if (err === false) return taskCb(err);
            if (args.length < 2) [result] = args;
            else result = args;
            error = err;
            taskCb(err ? null : {});
        });
    }, ()=>callback(error, result));
}
var tryEach$1 = awaitify(tryEach);
/**
 * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
 * unmemoized form. Handy for testing.
 *
 * @name unmemoize
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.memoize]{@link module:Utils.memoize}
 * @category Util
 * @param {AsyncFunction} fn - the memoized function
 * @returns {AsyncFunction} a function that calls the original unmemoized function
 */ function unmemoize(fn) {
    return (...args)=>{
        return (fn.unmemoized || fn)(...args);
    };
}
/**
 * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs.
 *
 * @name whilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns {Promise} a promise, if no callback is passed
 * @example
 *
 * var count = 0;
 * async.whilst(
 *     function test(cb) { cb(null, count < 5); },
 *     function iter(callback) {
 *         count++;
 *         setTimeout(function() {
 *             callback(null, count);
 *         }, 1000);
 *     },
 *     function (err, n) {
 *         // 5 seconds have passed, n = 5
 *     }
 * );
 */ function whilst(test, iteratee, callback) {
    callback = onlyOnce(callback);
    var _fn = wrapAsync(iteratee);
    var _test = wrapAsync(test);
    var results = [];
    function next(err, ...rest) {
        if (err) return callback(err);
        results = rest;
        if (err === false) return;
        _test(check);
    }
    function check(err, truth) {
        if (err) return callback(err);
        if (err === false) return;
        if (!truth) return callback(null, ...results);
        _fn(next);
    }
    return _test(check);
}
var whilst$1 = awaitify(whilst, 3);
/**
 * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs. `callback` will be passed an error and any
 * arguments passed to the final `iteratee`'s callback.
 *
 * The inverse of [whilst]{@link module:ControlFlow.whilst}.
 *
 * @name until
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `iteratee`. Invoked with (callback).
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns {Promise} a promise, if a callback is not passed
 *
 * @example
 * const results = []
 * let finished = false
 * async.until(function test(cb) {
 *     cb(null, finished)
 * }, function iter(next) {
 *     fetchPage(url, (err, body) => {
 *         if (err) return next(err)
 *         results = results.concat(body.objects)
 *         finished = !!body.next
 *         next(err)
 *     })
 * }, function done (err) {
 *     // all pages have been fetched
 * })
 */ function until(test, iteratee, callback) {
    const _test = wrapAsync(test);
    return whilst$1((cb)=>_test((err, truth)=>cb(err, !truth)), iteratee, callback);
}
/**
 * Runs the `tasks` array of functions in series, each passing their results to
 * the next in the array. However, if any of the `tasks` pass an error to their
 * own callback, the next function is not executed, and the main `callback` is
 * immediately called with the error.
 *
 * @name waterfall
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
 * to run.
 * Each function should complete with any number of `result` values.
 * The `result` values will be passed as arguments, in order, to the next task.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This will be passed the results of the last task's
 * callback. Invoked with (err, [results]).
 * @returns {Promise} a promise, if a callback is omitted
 * @example
 *
 * async.waterfall([
 *     function(callback) {
 *         callback(null, 'one', 'two');
 *     },
 *     function(arg1, arg2, callback) {
 *         // arg1 now equals 'one' and arg2 now equals 'two'
 *         callback(null, 'three');
 *     },
 *     function(arg1, callback) {
 *         // arg1 now equals 'three'
 *         callback(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 *
 * // Or, with named functions:
 * async.waterfall([
 *     myFirstFunction,
 *     mySecondFunction,
 *     myLastFunction,
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 * function myFirstFunction(callback) {
 *     callback(null, 'one', 'two');
 * }
 * function mySecondFunction(arg1, arg2, callback) {
 *     // arg1 now equals 'one' and arg2 now equals 'two'
 *     callback(null, 'three');
 * }
 * function myLastFunction(arg1, callback) {
 *     // arg1 now equals 'three'
 *     callback(null, 'done');
 * }
 */ function waterfall(tasks, callback) {
    callback = once(callback);
    if (!Array.isArray(tasks)) return callback(new Error("First argument to waterfall must be an array of functions"));
    if (!tasks.length) return callback();
    var taskIndex = 0;
    function nextTask(args) {
        var task = wrapAsync(tasks[taskIndex++]);
        task(...args, onlyOnce(next));
    }
    function next(err, ...args) {
        if (err === false) return;
        if (err || taskIndex === tasks.length) return callback(err, ...args);
        nextTask(args);
    }
    nextTask([]);
}
var waterfall$1 = awaitify(waterfall);
/**
 * An "async function" in the context of Async is an asynchronous function with
 * a variable number of parameters, with the final parameter being a callback.
 * (`function (arg1, arg2, ..., callback) {}`)
 * The final callback is of the form `callback(err, results...)`, which must be
 * called once the function is completed.  The callback should be called with a
 * Error as its first argument to signal that an error occurred.
 * Otherwise, if no error occurred, it should be called with `null` as the first
 * argument, and any additional `result` arguments that may apply, to signal
 * successful completion.
 * The callback must be called exactly once, ideally on a later tick of the
 * JavaScript event loop.
 *
 * This type of function is also referred to as a "Node-style async function",
 * or a "continuation passing-style function" (CPS). Most of the methods of this
 * library are themselves CPS/Node-style async functions, or functions that
 * return CPS/Node-style async functions.
 *
 * Wherever we accept a Node-style async function, we also directly accept an
 * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
 * In this case, the `async` function will not be passed a final callback
 * argument, and any thrown error will be used as the `err` argument of the
 * implicit callback, and the return value will be used as the `result` value.
 * (i.e. a `rejected` of the returned Promise becomes the `err` callback
 * argument, and a `resolved` value becomes the `result`.)
 *
 * Note, due to JavaScript limitations, we can only detect native `async`
 * functions and not transpilied implementations.
 * Your environment must have `async`/`await` support for this to work.
 * (e.g. Node > v7.6, or a recent version of a modern browser).
 * If you are using `async` functions through a transpiler (e.g. Babel), you
 * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
 * because the `async function` will be compiled to an ordinary function that
 * returns a promise.
 *
 * @typedef {Function} AsyncFunction
 * @static
 */ var index = {
    apply,
    applyEach: applyEach$1,
    applyEachSeries,
    asyncify,
    auto,
    autoInject,
    cargo,
    cargoQueue: cargo$1,
    compose,
    concat: concat$1,
    concatLimit: concatLimit$1,
    concatSeries: concatSeries$1,
    constant,
    detect: detect$1,
    detectLimit: detectLimit$1,
    detectSeries: detectSeries$1,
    dir,
    doUntil,
    doWhilst: doWhilst$1,
    each,
    eachLimit: eachLimit$2,
    eachOf: eachOf$1,
    eachOfLimit: eachOfLimit$2,
    eachOfSeries: eachOfSeries$1,
    eachSeries: eachSeries$1,
    ensureAsync,
    every: every$1,
    everyLimit: everyLimit$1,
    everySeries: everySeries$1,
    filter: filter$1,
    filterLimit: filterLimit$1,
    filterSeries: filterSeries$1,
    forever: forever$1,
    groupBy,
    groupByLimit: groupByLimit$1,
    groupBySeries,
    log,
    map: map$1,
    mapLimit: mapLimit$1,
    mapSeries: mapSeries$1,
    mapValues,
    mapValuesLimit: mapValuesLimit$1,
    mapValuesSeries,
    memoize,
    nextTick,
    parallel: parallel$1,
    parallelLimit,
    priorityQueue,
    queue: queue$1,
    race: race$1,
    reduce: reduce$1,
    reduceRight,
    reflect,
    reflectAll,
    reject: reject$2,
    rejectLimit: rejectLimit$1,
    rejectSeries: rejectSeries$1,
    retry,
    retryable,
    seq,
    series,
    setImmediate: setImmediate$1,
    some: some$1,
    someLimit: someLimit$1,
    someSeries: someSeries$1,
    sortBy: sortBy$1,
    timeout,
    times,
    timesLimit,
    timesSeries,
    transform,
    tryEach: tryEach$1,
    unmemoize,
    until,
    waterfall: waterfall$1,
    whilst: whilst$1,
    // aliases
    all: every$1,
    allLimit: everyLimit$1,
    allSeries: everySeries$1,
    any: some$1,
    anyLimit: someLimit$1,
    anySeries: someSeries$1,
    find: detect$1,
    findLimit: detectLimit$1,
    findSeries: detectSeries$1,
    flatMap: concat$1,
    flatMapLimit: concatLimit$1,
    flatMapSeries: concatSeries$1,
    forEach: each,
    forEachSeries: eachSeries$1,
    forEachLimit: eachLimit$2,
    forEachOf: eachOf$1,
    forEachOfSeries: eachOfSeries$1,
    forEachOfLimit: eachOfLimit$2,
    inject: reduce$1,
    foldl: reduce$1,
    foldr: reduceRight,
    select: filter$1,
    selectLimit: filterLimit$1,
    selectSeries: filterSeries$1,
    wrapSync: asyncify,
    during: whilst$1,
    doDuring: doWhilst$1
};
exports.default = index;

},{"be06be1e807df129":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"1ot1c":[function(require,module,exports) {
"use strict";
var Promise = require("dc5324eb5eb97ed5");
var arrayUnion = require("9bdcb536d2cf1ba5");
var objectAssign = require("d8d3eef98edea5e4");
var glob = require("923f5280c73f788c");
var pify = require("612692a199e877f3");
var globP = pify(glob, Promise).bind(glob);
function isNegative(pattern) {
    return pattern[0] === "!";
}
function isString(value) {
    return typeof value === "string";
}
function assertPatternsInput(patterns) {
    if (!patterns.every(isString)) throw new TypeError("patterns must be a string or an array of strings");
}
function generateGlobTasks(patterns, opts) {
    patterns = [].concat(patterns);
    assertPatternsInput(patterns);
    var globTasks = [];
    opts = objectAssign({
        cache: Object.create(null),
        statCache: Object.create(null),
        realpathCache: Object.create(null),
        symlinks: Object.create(null),
        ignore: []
    }, opts);
    patterns.forEach(function(pattern, i) {
        if (isNegative(pattern)) return;
        var ignore = patterns.slice(i).filter(isNegative).map(function(pattern) {
            return pattern.slice(1);
        });
        globTasks.push({
            pattern: pattern,
            opts: objectAssign({}, opts, {
                ignore: opts.ignore.concat(ignore)
            })
        });
    });
    return globTasks;
}
module.exports = function(patterns, opts) {
    var globTasks;
    try {
        globTasks = generateGlobTasks(patterns, opts);
    } catch (err) {
        return Promise.reject(err);
    }
    return Promise.all(globTasks.map(function(task) {
        return globP(task.pattern, task.opts);
    })).then(function(paths) {
        return arrayUnion.apply(null, paths);
    });
};
module.exports.sync = function(patterns, opts) {
    var globTasks = generateGlobTasks(patterns, opts);
    return globTasks.reduce(function(matches, task) {
        return arrayUnion(matches, glob.sync(task.pattern, task.opts));
    }, []);
};
module.exports.generateGlobTasks = generateGlobTasks;
module.exports.hasMagic = function(patterns, opts) {
    return [].concat(patterns).some(function(pattern) {
        return glob.hasMagic(pattern, opts);
    });
};

},{"dc5324eb5eb97ed5":"937w7","9bdcb536d2cf1ba5":"angkU","d8d3eef98edea5e4":"7OXxh","923f5280c73f788c":"a9zG0","612692a199e877f3":"2fCDq"}],"937w7":[function(require,module,exports) {
"use strict";
module.exports = typeof Promise === "function" ? Promise : require("cdcd9ab13af2e070");

},{"cdcd9ab13af2e070":"71zPU"}],"71zPU":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var PENDING = "pending";
var SETTLED = "settled";
var FULFILLED = "fulfilled";
var REJECTED = "rejected";
var NOOP = function() {};
var isNode = typeof global !== "undefined" && typeof global.process !== "undefined" && typeof global.process.emit === "function";
var asyncSetTimer = typeof setImmediate === "undefined" ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;
function asyncFlush() {
    // run promise callbacks
    for(var i = 0; i < asyncQueue.length; i++)asyncQueue[i][0](asyncQueue[i][1]);
    // reset async asyncQueue
    asyncQueue = [];
    asyncTimer = false;
}
function asyncCall(callback, arg) {
    asyncQueue.push([
        callback,
        arg
    ]);
    if (!asyncTimer) {
        asyncTimer = true;
        asyncSetTimer(asyncFlush, 0);
    }
}
function invokeResolver(resolver, promise) {
    function resolvePromise(value) {
        resolve(promise, value);
    }
    function rejectPromise(reason) {
        reject(promise, reason);
    }
    try {
        resolver(resolvePromise, rejectPromise);
    } catch (e) {
        rejectPromise(e);
    }
}
function invokeCallback(subscriber) {
    var owner = subscriber.owner;
    var settled = owner._state;
    var value = owner._data;
    var callback = subscriber[settled];
    var promise = subscriber.then;
    if (typeof callback === "function") {
        settled = FULFILLED;
        try {
            value = callback(value);
        } catch (e) {
            reject(promise, e);
        }
    }
    if (!handleThenable(promise, value)) {
        if (settled === FULFILLED) resolve(promise, value);
        if (settled === REJECTED) reject(promise, value);
    }
}
function handleThenable(promise, value) {
    var resolved;
    try {
        if (promise === value) throw new TypeError("A promises callback cannot return that same promise.");
        if (value && (typeof value === "function" || typeof value === "object")) {
            // then should be retrieved only once
            var then = value.then;
            if (typeof then === "function") {
                then.call(value, function(val) {
                    if (!resolved) {
                        resolved = true;
                        if (value === val) fulfill(promise, val);
                        else resolve(promise, val);
                    }
                }, function(reason) {
                    if (!resolved) {
                        resolved = true;
                        reject(promise, reason);
                    }
                });
                return true;
            }
        }
    } catch (e) {
        if (!resolved) reject(promise, e);
        return true;
    }
    return false;
}
function resolve(promise, value) {
    if (promise === value || !handleThenable(promise, value)) fulfill(promise, value);
}
function fulfill(promise, value) {
    if (promise._state === PENDING) {
        promise._state = SETTLED;
        promise._data = value;
        asyncCall(publishFulfillment, promise);
    }
}
function reject(promise, reason) {
    if (promise._state === PENDING) {
        promise._state = SETTLED;
        promise._data = reason;
        asyncCall(publishRejection, promise);
    }
}
function publish(promise) {
    promise._then = promise._then.forEach(invokeCallback);
}
function publishFulfillment(promise) {
    promise._state = FULFILLED;
    publish(promise);
}
function publishRejection(promise) {
    promise._state = REJECTED;
    publish(promise);
    if (!promise._handled && isNode) global.process.emit("unhandledRejection", promise._data, promise);
}
function notifyRejectionHandled(promise) {
    global.process.emit("rejectionHandled", promise);
}
/**
 * @class
 */ function Promise(resolver) {
    if (typeof resolver !== "function") throw new TypeError("Promise resolver " + resolver + " is not a function");
    if (this instanceof Promise === false) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    this._then = [];
    invokeResolver(resolver, this);
}
Promise.prototype = {
    constructor: Promise,
    _state: PENDING,
    _then: null,
    _data: undefined,
    _handled: false,
    then: function(onFulfillment, onRejection) {
        var subscriber = {
            owner: this,
            then: new this.constructor(NOOP),
            fulfilled: onFulfillment,
            rejected: onRejection
        };
        if ((onRejection || onFulfillment) && !this._handled) {
            this._handled = true;
            if (this._state === REJECTED && isNode) asyncCall(notifyRejectionHandled, this);
        }
        if (this._state === FULFILLED || this._state === REJECTED) // already resolved, call callback async
        asyncCall(invokeCallback, subscriber);
        else // subscribe
        this._then.push(subscriber);
        return subscriber.then;
    },
    catch: function(onRejection) {
        return this.then(null, onRejection);
    }
};
Promise.all = function(promises) {
    if (!Array.isArray(promises)) throw new TypeError("You must pass an array to Promise.all().");
    return new Promise(function(resolve, reject) {
        var results = [];
        var remaining = 0;
        function resolver(index) {
            remaining++;
            return function(value) {
                results[index] = value;
                if (!--remaining) resolve(results);
            };
        }
        for(var i = 0, promise; i < promises.length; i++){
            promise = promises[i];
            if (promise && typeof promise.then === "function") promise.then(resolver(i), reject);
            else results[i] = promise;
        }
        if (!remaining) resolve(results);
    });
};
Promise.race = function(promises) {
    if (!Array.isArray(promises)) throw new TypeError("You must pass an array to Promise.race().");
    return new Promise(function(resolve, reject) {
        for(var i = 0, promise; i < promises.length; i++){
            promise = promises[i];
            if (promise && typeof promise.then === "function") promise.then(resolve, reject);
            else resolve(promise);
        }
    });
};
Promise.resolve = function(value) {
    if (value && typeof value === "object" && value.constructor === Promise) return value;
    return new Promise(function(resolve) {
        resolve(value);
    });
};
Promise.reject = function(reason) {
    return new Promise(function(resolve, reject) {
        reject(reason);
    });
};
module.exports = Promise;

},{}],"angkU":[function(require,module,exports) {
"use strict";
var arrayUniq = require("92e1ae57c8ce69c5");
module.exports = function() {
    return arrayUniq([].concat.apply([], arguments));
};

},{"92e1ae57c8ce69c5":"6WZYZ"}],"6WZYZ":[function(require,module,exports) {
var global = arguments[3];
"use strict";
// there's 3 implementations written in increasing order of efficiency
// 1 - no Set type is defined
function uniqNoSet(arr) {
    var ret = [];
    for(var i = 0; i < arr.length; i++)if (ret.indexOf(arr[i]) === -1) ret.push(arr[i]);
    return ret;
}
// 2 - a simple Set type is defined
function uniqSet(arr) {
    var seen = new Set();
    return arr.filter(function(el) {
        if (!seen.has(el)) {
            seen.add(el);
            return true;
        }
        return false;
    });
}
// 3 - a standard Set type is defined and it has a forEach method
function uniqSetWithForEach(arr) {
    var ret = [];
    new Set(arr).forEach(function(el) {
        ret.push(el);
    });
    return ret;
}
// V8 currently has a broken implementation
// https://github.com/joyent/node/issues/8449
function doesForEachActuallyWork() {
    var ret = false;
    new Set([
        true
    ]).forEach(function(el) {
        ret = el;
    });
    return ret === true;
}
if ("Set" in global) {
    if (typeof Set.prototype.forEach === "function" && doesForEachActuallyWork()) module.exports = uniqSetWithForEach;
    else module.exports = uniqSet;
} else module.exports = uniqNoSet;

},{}],"7OXxh":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ "use strict";
/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for(var i = 0; i < 10; i++)test2["_" + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join("") !== "0123456789") return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};

},{}],"a9zG0":[function(require,module,exports) {
// Approach:
//
// 1. Get the minimatch set
// 2. For each pattern in the set, PROCESS(pattern, false)
// 3. Store matches per-set, then uniq them
//
// PROCESS(pattern, inGlobStar)
// Get the first [n] items from pattern that are all strings
// Join these together.  This is PREFIX.
//   If there is no more remaining, then stat(PREFIX) and
//   add to matches if it succeeds.  END.
//
// If inGlobStar and PREFIX is symlink and points to dir
//   set ENTRIES = []
// else readdir(PREFIX) as ENTRIES
//   If fail, END
//
// with ENTRIES
//   If pattern[n] is GLOBSTAR
//     // handle the case where the globstar match is empty
//     // by pruning it out, and testing the resulting pattern
//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
//     // handle other cases.
//     for ENTRY in ENTRIES (not dotfiles)
//       // attach globstar + tail onto the entry
//       // Mark that this entry is a globstar match
//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
//
//   else // not globstar
//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
//       Test ENTRY against pattern[n]
//       If fails, continue
//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
//
// Caveat:
//   Cache all stats and readdirs results to minimize syscall.  Since all
//   we ever care about is existence and directory-ness, we can just keep
//   `true` for files, and [children,...] for directories, or `false` for
//   things that don't exist.
var process = require("bbdeb104da9f01e3");
module.exports = glob;
var rp = require("5bc582ba8c5257ad");
var minimatch = require("d952e023bff267a9");
var Minimatch = minimatch.Minimatch;
var inherits = require("1f6409d1d9e2296d");
var EE = require("400ffd571443a607").EventEmitter;
var path = require("da618e4abd48dced");
var assert = require("2ccb70913ac4c2df");
var isAbsolute = require("412bcf4c26fe29f7");
var globSync = require("420b2074cb0d1f5");
var common = require("7279b2d57007e8ad");
var setopts = common.setopts;
var ownProp = common.ownProp;
var inflight = require("71890ac15acf66af");
var util = require("f31573398d4da3f1");
var childrenIgnored = common.childrenIgnored;
var isIgnored = common.isIgnored;
var once = require("a14e1ad70f85c3f5");
function glob(pattern, options, cb) {
    if (typeof options === "function") cb = options, options = {};
    if (!options) options = {};
    if (options.sync) {
        if (cb) throw new TypeError("callback provided to sync glob");
        return globSync(pattern, options);
    }
    return new Glob(pattern, options, cb);
}
glob.sync = globSync;
var GlobSync = glob.GlobSync = globSync.GlobSync;
// old api surface
glob.glob = glob;
function extend(origin, add) {
    if (add === null || typeof add !== "object") return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while(i--)origin[keys[i]] = add[keys[i]];
    return origin;
}
glob.hasMagic = function(pattern, options_) {
    var options = extend({}, options_);
    options.noprocess = true;
    var g = new Glob(pattern, options);
    var set = g.minimatch.set;
    if (!pattern) return false;
    if (set.length > 1) return true;
    for(var j = 0; j < set[0].length; j++){
        if (typeof set[0][j] !== "string") return true;
    }
    return false;
};
glob.Glob = Glob;
inherits(Glob, EE);
function Glob(pattern, options, cb) {
    if (typeof options === "function") {
        cb = options;
        options = null;
    }
    if (options && options.sync) {
        if (cb) throw new TypeError("callback provided to sync glob");
        return new GlobSync(pattern, options);
    }
    if (!(this instanceof Glob)) return new Glob(pattern, options, cb);
    setopts(this, pattern, options);
    this._didRealPath = false;
    // process each pattern in the minimatch set
    var n = this.minimatch.set.length;
    // The matches are stored as {<filename>: true,...} so that
    // duplicates are automagically pruned.
    // Later, we do an Object.keys() on these.
    // Keep them as a list so we can fill in when nonull is set.
    this.matches = new Array(n);
    if (typeof cb === "function") {
        cb = once(cb);
        this.on("error", cb);
        this.on("end", function(matches) {
            cb(null, matches);
        });
    }
    var self = this;
    this._processing = 0;
    this._emitQueue = [];
    this._processQueue = [];
    this.paused = false;
    if (this.noprocess) return this;
    if (n === 0) return done();
    var sync = true;
    for(var i = 0; i < n; i++)this._process(this.minimatch.set[i], i, false, done);
    sync = false;
    function done() {
        --self._processing;
        if (self._processing <= 0) {
            if (sync) process.nextTick(function() {
                self._finish();
            });
            else self._finish();
        }
    }
}
Glob.prototype._finish = function() {
    assert(this instanceof Glob);
    if (this.aborted) return;
    if (this.realpath && !this._didRealpath) return this._realpath();
    common.finish(this);
    this.emit("end", this.found);
};
Glob.prototype._realpath = function() {
    if (this._didRealpath) return;
    this._didRealpath = true;
    var n = this.matches.length;
    if (n === 0) return this._finish();
    var self = this;
    for(var i = 0; i < this.matches.length; i++)this._realpathSet(i, next);
    function next() {
        if (--n === 0) self._finish();
    }
};
Glob.prototype._realpathSet = function(index, cb) {
    var matchset = this.matches[index];
    if (!matchset) return cb();
    var found = Object.keys(matchset);
    var self = this;
    var n = found.length;
    if (n === 0) return cb();
    var set = this.matches[index] = Object.create(null);
    found.forEach(function(p, i) {
        // If there's a problem with the stat, then it means that
        // one or more of the links in the realpath couldn't be
        // resolved.  just return the abs value in that case.
        p = self._makeAbs(p);
        rp.realpath(p, self.realpathCache, function(er, real) {
            if (!er) set[real] = true;
            else if (er.syscall === "stat") set[p] = true;
            else self.emit("error", er) // srsly wtf right here
            ;
            if (--n === 0) {
                self.matches[index] = set;
                cb();
            }
        });
    });
};
Glob.prototype._mark = function(p) {
    return common.mark(this, p);
};
Glob.prototype._makeAbs = function(f) {
    return common.makeAbs(this, f);
};
Glob.prototype.abort = function() {
    this.aborted = true;
    this.emit("abort");
};
Glob.prototype.pause = function() {
    if (!this.paused) {
        this.paused = true;
        this.emit("pause");
    }
};
Glob.prototype.resume = function() {
    if (this.paused) {
        this.emit("resume");
        this.paused = false;
        if (this._emitQueue.length) {
            var eq = this._emitQueue.slice(0);
            this._emitQueue.length = 0;
            for(var i = 0; i < eq.length; i++){
                var e = eq[i];
                this._emitMatch(e[0], e[1]);
            }
        }
        if (this._processQueue.length) {
            var pq = this._processQueue.slice(0);
            this._processQueue.length = 0;
            for(var i = 0; i < pq.length; i++){
                var p = pq[i];
                this._processing--;
                this._process(p[0], p[1], p[2], p[3]);
            }
        }
    }
};
Glob.prototype._process = function(pattern, index, inGlobStar, cb) {
    assert(this instanceof Glob);
    assert(typeof cb === "function");
    if (this.aborted) return;
    this._processing++;
    if (this.paused) {
        this._processQueue.push([
            pattern,
            index,
            inGlobStar,
            cb
        ]);
        return;
    }
    //console.error('PROCESS %d', this._processing, pattern)
    // Get the first [n] parts of pattern that are all strings.
    var n = 0;
    while(typeof pattern[n] === "string")n++;
    // now n is the index of the first one that is *not* a string.
    // see if there's anything else
    var prefix;
    switch(n){
        // if not, then this is rather simple
        case pattern.length:
            this._processSimple(pattern.join("/"), index, cb);
            return;
        case 0:
            // pattern *starts* with some non-trivial item.
            // going to readdir(cwd), but not include the prefix in matches.
            prefix = null;
            break;
        default:
            // pattern has some string bits in the front.
            // whatever it starts with, whether that's 'absolute' like /foo/bar,
            // or 'relative' like '../baz'
            prefix = pattern.slice(0, n).join("/");
            break;
    }
    var remain = pattern.slice(n);
    // get the list of entries.
    var read;
    if (prefix === null) read = ".";
    else if (isAbsolute(prefix) || isAbsolute(pattern.map(function(p) {
        return typeof p === "string" ? p : "[*]";
    }).join("/"))) {
        if (!prefix || !isAbsolute(prefix)) prefix = "/" + prefix;
        read = prefix;
    } else read = prefix;
    var abs = this._makeAbs(read);
    //if ignored, skip _processing
    if (childrenIgnored(this, read)) return cb();
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar) this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);
    else this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
};
Glob.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this;
    this._readdir(abs, inGlobStar, function(er, entries) {
        return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
};
Glob.prototype._processReaddir2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    // if the abs isn't a dir, then nothing can match!
    if (!entries) return cb();
    // It will only match dot entries if it starts with a dot, or if
    // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
    var pn = remain[0];
    var negate = !!this.minimatch.negate;
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === ".";
    var matchedEntries = [];
    for(var i = 0; i < entries.length; i++){
        var e = entries[i];
        if (e.charAt(0) !== "." || dotOk) {
            var m;
            if (negate && !prefix) m = !e.match(pn);
            else m = e.match(pn);
            if (m) matchedEntries.push(e);
        }
    }
    //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)
    var len = matchedEntries.length;
    // If there are no matched entries, then nothing matches.
    if (len === 0) return cb();
    // if this is the last remaining pattern bit, then no need for
    // an additional stat *unless* the user has specified mark or
    // stat explicitly.  We know they exist, since readdir returned
    // them.
    if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index]) this.matches[index] = Object.create(null);
        for(var i = 0; i < len; i++){
            var e = matchedEntries[i];
            if (prefix) {
                if (prefix !== "/") e = prefix + "/" + e;
                else e = prefix + e;
            }
            if (e.charAt(0) === "/" && !this.nomount) e = path.join(this.root, e);
            this._emitMatch(index, e);
        }
        // This was the last one, and no stats were needed
        return cb();
    }
    // now test all matched entries as stand-ins for that part
    // of the pattern.
    remain.shift();
    for(var i = 0; i < len; i++){
        var e = matchedEntries[i];
        var newPattern;
        if (prefix) {
            if (prefix !== "/") e = prefix + "/" + e;
            else e = prefix + e;
        }
        this._process([
            e
        ].concat(remain), index, inGlobStar, cb);
    }
    cb();
};
Glob.prototype._emitMatch = function(index, e) {
    if (this.aborted) return;
    if (isIgnored(this, e)) return;
    if (this.paused) {
        this._emitQueue.push([
            index,
            e
        ]);
        return;
    }
    var abs = isAbsolute(e) ? e : this._makeAbs(e);
    if (this.mark) e = this._mark(e);
    if (this.absolute) e = abs;
    if (this.matches[index][e]) return;
    if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c)) return;
    }
    this.matches[index][e] = true;
    var st = this.statCache[abs];
    if (st) this.emit("stat", e, st);
    this.emit("match", e);
};
Glob.prototype._readdirInGlobStar = function(abs, cb) {
    if (this.aborted) return;
    // follow all symlinked directories forever
    // just proceed as if this is a non-globstar situation
    if (this.follow) return this._readdir(abs, false, cb);
    var lstatkey = "lstat\x00" + abs;
    var self = this;
    var lstatcb = inflight(lstatkey, lstatcb_);
    if (lstatcb) self.fs.lstat(abs, lstatcb);
    function lstatcb_(er, lstat) {
        if (er && er.code === "ENOENT") return cb();
        var isSym = lstat && lstat.isSymbolicLink();
        self.symlinks[abs] = isSym;
        // If it's not a symlink or a dir, then it's definitely a regular file.
        // don't bother doing a readdir in that case.
        if (!isSym && lstat && !lstat.isDirectory()) {
            self.cache[abs] = "FILE";
            cb();
        } else self._readdir(abs, false, cb);
    }
};
Glob.prototype._readdir = function(abs, inGlobStar, cb) {
    if (this.aborted) return;
    cb = inflight("readdir\x00" + abs + "\x00" + inGlobStar, cb);
    if (!cb) return;
    //console.error('RD %j %j', +inGlobStar, abs)
    if (inGlobStar && !ownProp(this.symlinks, abs)) return this._readdirInGlobStar(abs, cb);
    if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === "FILE") return cb();
        if (Array.isArray(c)) return cb(null, c);
    }
    var self = this;
    self.fs.readdir(abs, readdirCb(this, abs, cb));
};
function readdirCb(self, abs, cb) {
    return function(er, entries) {
        if (er) self._readdirError(abs, er, cb);
        else self._readdirEntries(abs, entries, cb);
    };
}
Glob.prototype._readdirEntries = function(abs, entries, cb) {
    if (this.aborted) return;
    // if we haven't asked to stat everything, then just
    // assume that everything in there exists, so we can avoid
    // having to stat it a second time.
    if (!this.mark && !this.stat) for(var i = 0; i < entries.length; i++){
        var e = entries[i];
        if (abs === "/") e = abs + e;
        else e = abs + "/" + e;
        this.cache[e] = true;
    }
    this.cache[abs] = entries;
    return cb(null, entries);
};
Glob.prototype._readdirError = function(f, er, cb) {
    if (this.aborted) return;
    // handle errors, and cache the information
    switch(er.code){
        case "ENOTSUP":
        case "ENOTDIR":
            var abs = this._makeAbs(f);
            this.cache[abs] = "FILE";
            if (abs === this.cwdAbs) {
                var error = new Error(er.code + " invalid cwd " + this.cwd);
                error.path = this.cwd;
                error.code = er.code;
                this.emit("error", error);
                this.abort();
            }
            break;
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
            this.cache[this._makeAbs(f)] = false;
            break;
        default:
            this.cache[this._makeAbs(f)] = false;
            if (this.strict) {
                this.emit("error", er);
                // If the error is handled, then we abort
                // if not, we threw out of here
                this.abort();
            }
            if (!this.silent) console.error("glob error", er);
            break;
    }
    return cb();
};
Glob.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this;
    this._readdir(abs, inGlobStar, function(er, entries) {
        self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
};
Glob.prototype._processGlobStar2 = function(prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    //console.error('pgs2', prefix, remain[0], entries)
    // no entries means not a dir, so it can never have matches
    // foo.txt/** doesn't match foo.txt
    if (!entries) return cb();
    // test without the globstar, and with every child both below
    // and replacing the globstar.
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [
        prefix
    ] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    // the noGlobStar pattern exits the inGlobStar state
    this._process(noGlobStar, index, false, cb);
    var isSym = this.symlinks[abs];
    var len = entries.length;
    // If it's a symlink, and we're in a globstar, then stop
    if (isSym && inGlobStar) return cb();
    for(var i = 0; i < len; i++){
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot) continue;
        // these two cases enter the inGlobStar state
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index, true, cb);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index, true, cb);
    }
    cb();
};
Glob.prototype._processSimple = function(prefix, index, cb) {
    // XXX review this.  Shouldn't it be doing the mounting etc
    // before doing stat?  kinda weird?
    var self = this;
    this._stat(prefix, function(er, exists) {
        self._processSimple2(prefix, index, er, exists, cb);
    });
};
Glob.prototype._processSimple2 = function(prefix, index, er, exists, cb) {
    //console.error('ps2', prefix, exists)
    if (!this.matches[index]) this.matches[index] = Object.create(null);
    // If it doesn't exist, then just mark the lack of results
    if (!exists) return cb();
    if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === "/") prefix = path.join(this.root, prefix);
        else {
            prefix = path.resolve(this.root, prefix);
            if (trail) prefix += "/";
        }
    }
    if (process.platform === "win32") prefix = prefix.replace(/\\/g, "/");
    // Mark this as a match
    this._emitMatch(index, prefix);
    cb();
};
// Returns either 'DIR', 'FILE', or false
Glob.prototype._stat = function(f, cb) {
    var abs = this._makeAbs(f);
    var needDir = f.slice(-1) === "/";
    if (f.length > this.maxLength) return cb();
    if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c)) c = "DIR";
        // It exists, but maybe not how we need it
        if (!needDir || c === "DIR") return cb(null, c);
        if (needDir && c === "FILE") return cb();
    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
    }
    var exists;
    var stat = this.statCache[abs];
    if (stat !== undefined) {
        if (stat === false) return cb(null, stat);
        else {
            var type = stat.isDirectory() ? "DIR" : "FILE";
            if (needDir && type === "FILE") return cb();
            else return cb(null, type, stat);
        }
    }
    var self = this;
    var statcb = inflight("stat\x00" + abs, lstatcb_);
    if (statcb) self.fs.lstat(abs, statcb);
    function lstatcb_(er, lstat) {
        if (lstat && lstat.isSymbolicLink()) // If it's a symlink, then treat it as the target, unless
        // the target does not exist, then treat it as a file.
        return self.fs.stat(abs, function(er, stat) {
            if (er) self._stat2(f, abs, null, lstat, cb);
            else self._stat2(f, abs, er, stat, cb);
        });
        else self._stat2(f, abs, er, lstat, cb);
    }
};
Glob.prototype._stat2 = function(f, abs, er, stat, cb) {
    if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
        this.statCache[abs] = false;
        return cb();
    }
    var needDir = f.slice(-1) === "/";
    this.statCache[abs] = stat;
    if (abs.slice(-1) === "/" && stat && !stat.isDirectory()) return cb(null, false, stat);
    var c = true;
    if (stat) c = stat.isDirectory() ? "DIR" : "FILE";
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c === "FILE") return cb();
    return cb(null, c, stat);
};

},{"bbdeb104da9f01e3":"d5jf4","5bc582ba8c5257ad":"fbhqL","d952e023bff267a9":"3xq9h","1f6409d1d9e2296d":"bRL3M","400ffd571443a607":"1VQLm","da618e4abd48dced":"loE3o","2ccb70913ac4c2df":"f3tT4","412bcf4c26fe29f7":"495Ap","420b2074cb0d1f5":"jIPaz","7279b2d57007e8ad":"5eDXF","71890ac15acf66af":"7bGo6","f31573398d4da3f1":"cxohQ","a14e1ad70f85c3f5":"YXzlo"}],"fbhqL":[function(require,module,exports) {
var process = require("78933daf7d23390e");
module.exports = realpath;
realpath.realpath = realpath;
realpath.sync = realpathSync;
realpath.realpathSync = realpathSync;
realpath.monkeypatch = monkeypatch;
realpath.unmonkeypatch = unmonkeypatch;
var fs = require("f514c7a5c1ae43ea");
var origRealpath = fs.realpath;
var origRealpathSync = fs.realpathSync;
var version = process.version;
var ok = /^v[0-5]\./.test(version);
var old = require("81dc14763be8c306");
function newError(er) {
    return er && er.syscall === "realpath" && (er.code === "ELOOP" || er.code === "ENOMEM" || er.code === "ENAMETOOLONG");
}
function realpath(p, cache, cb) {
    if (ok) return origRealpath(p, cache, cb);
    if (typeof cache === "function") {
        cb = cache;
        cache = null;
    }
    origRealpath(p, cache, function(er, result) {
        if (newError(er)) old.realpath(p, cache, cb);
        else cb(er, result);
    });
}
function realpathSync(p, cache) {
    if (ok) return origRealpathSync(p, cache);
    try {
        return origRealpathSync(p, cache);
    } catch (er) {
        if (newError(er)) return old.realpathSync(p, cache);
        else throw er;
    }
}
function monkeypatch() {
    fs.realpath = realpath;
    fs.realpathSync = realpathSync;
}
function unmonkeypatch() {
    fs.realpath = origRealpath;
    fs.realpathSync = origRealpathSync;
}

},{"78933daf7d23390e":"d5jf4","f514c7a5c1ae43ea":"jhUEF","81dc14763be8c306":"85bd1"}],"85bd1":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var process = require("89aaeb5ee66c5155");
var pathModule = require("1f8e9afc07bc929");
var isWindows = process.platform === "win32";
var fs = require("cc24e00e1e73ee68");
// JavaScript implementation of realpath, ported from node pre-v6
var DEBUG = undefined;
function rethrow() {
    // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
    // is fairly slow to generate.
    var callback;
    if (DEBUG) {
        var backtrace = new Error;
        callback = debugCallback;
    } else callback = missingCallback;
    return callback;
    function debugCallback(err) {
        if (err) {
            backtrace.message = err.message;
            err = backtrace;
            missingCallback(err);
        }
    }
    function missingCallback(err) {
        if (err) {
            if (process.throwDeprecation) throw err; // Forgot a callback but don't know where? Use NODE_DEBUG=fs
            else if (!process.noDeprecation) {
                var msg = "fs: missing callback " + (err.stack || err.message);
                if (process.traceDeprecation) console.trace(msg);
                else console.error(msg);
            }
        }
    }
}
function maybeCallback(cb) {
    return typeof cb === "function" ? cb : rethrow();
}
var normalize = pathModule.normalize;
// Regexp that finds the next partion of a (partial) path
// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
if (isWindows) var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
else var nextPartRe = /(.*?)(?:[\/]+|$)/g;
// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
if (isWindows) var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
else var splitRootRe = /^[\/]*/;
exports.realpathSync = function realpathSync(p, cache) {
    // make p is absolute
    p = pathModule.resolve(p);
    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) return cache[p];
    var original = p, seenLinks = {}, knownHard = {};
    // current character position in p
    var pos;
    // the partial path so far, including a trailing slash if any
    var current;
    // the partial path without a trailing slash (except when pointing at a root)
    var base;
    // the partial path scanned in the previous round, with slash
    var previous;
    start();
    function start() {
        // Skip over roots
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = "";
        // On windows, check that the root exists. On unix there is no need.
        if (isWindows && !knownHard[base]) {
            fs.lstatSync(base);
            knownHard[base] = true;
        }
    }
    // walk down the path, swapping out linked pathparts for their real
    // values
    // NB: p.length changes.
    while(pos < p.length){
        // find the next part
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        // continue if not a symlink
        if (knownHard[base] || cache && cache[base] === base) continue;
        var resolvedLink;
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) // some known symbolic link.  no need to stat again.
        resolvedLink = cache[base];
        else {
            var stat = fs.lstatSync(base);
            if (!stat.isSymbolicLink()) {
                knownHard[base] = true;
                if (cache) cache[base] = base;
                continue;
            }
            // read the link if it wasn't read before
            // dev/ino always return 0 on windows, so skip the check.
            var linkTarget = null;
            if (!isWindows) {
                var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
                if (seenLinks.hasOwnProperty(id)) linkTarget = seenLinks[id];
            }
            if (linkTarget === null) {
                fs.statSync(base);
                linkTarget = fs.readlinkSync(base);
            }
            resolvedLink = pathModule.resolve(previous, linkTarget);
            // track this, if given a cache.
            if (cache) cache[base] = resolvedLink;
            if (!isWindows) seenLinks[id] = linkTarget;
        }
        // resolve the link, then start over
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
    }
    if (cache) cache[original] = p;
    return p;
};
exports.realpath = function realpath(p, cache, cb) {
    if (typeof cb !== "function") {
        cb = maybeCallback(cache);
        cache = null;
    }
    // make p is absolute
    p = pathModule.resolve(p);
    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) return process.nextTick(cb.bind(null, null, cache[p]));
    var original = p, seenLinks = {}, knownHard = {};
    // current character position in p
    var pos;
    // the partial path so far, including a trailing slash if any
    var current;
    // the partial path without a trailing slash (except when pointing at a root)
    var base;
    // the partial path scanned in the previous round, with slash
    var previous;
    start();
    function start() {
        // Skip over roots
        var m = splitRootRe.exec(p);
        pos = m[0].length;
        current = m[0];
        base = m[0];
        previous = "";
        // On windows, check that the root exists. On unix there is no need.
        if (isWindows && !knownHard[base]) fs.lstat(base, function(err) {
            if (err) return cb(err);
            knownHard[base] = true;
            LOOP();
        });
        else process.nextTick(LOOP);
    }
    // walk down the path, swapping out linked pathparts for their real
    // values
    function LOOP() {
        // stop if scanned past end of path
        if (pos >= p.length) {
            if (cache) cache[original] = p;
            return cb(null, p);
        }
        // find the next part
        nextPartRe.lastIndex = pos;
        var result = nextPartRe.exec(p);
        previous = current;
        current += result[0];
        base = previous + result[1];
        pos = nextPartRe.lastIndex;
        // continue if not a symlink
        if (knownHard[base] || cache && cache[base] === base) return process.nextTick(LOOP);
        if (cache && Object.prototype.hasOwnProperty.call(cache, base)) // known symbolic link.  no need to stat again.
        return gotResolvedLink(cache[base]);
        return fs.lstat(base, gotStat);
    }
    function gotStat(err, stat) {
        if (err) return cb(err);
        // if not a symlink, skip to the next path part
        if (!stat.isSymbolicLink()) {
            knownHard[base] = true;
            if (cache) cache[base] = base;
            return process.nextTick(LOOP);
        }
        // stat & read the link if not read before
        // call gotTarget as soon as the link target is known
        // dev/ino always return 0 on windows, so skip the check.
        if (!isWindows) {
            var id = stat.dev.toString(32) + ":" + stat.ino.toString(32);
            if (seenLinks.hasOwnProperty(id)) return gotTarget(null, seenLinks[id], base);
        }
        fs.stat(base, function(err) {
            if (err) return cb(err);
            fs.readlink(base, function(err, target) {
                if (!isWindows) seenLinks[id] = target;
                gotTarget(err, target);
            });
        });
    }
    function gotTarget(err, target, base) {
        if (err) return cb(err);
        var resolvedLink = pathModule.resolve(previous, target);
        if (cache) cache[base] = resolvedLink;
        gotResolvedLink(resolvedLink);
    }
    function gotResolvedLink(resolvedLink) {
        // resolve the link, then start over
        p = pathModule.resolve(resolvedLink, p.slice(pos));
        start();
    }
};

},{"89aaeb5ee66c5155":"d5jf4","1f8e9afc07bc929":"loE3o","cc24e00e1e73ee68":"jhUEF"}],"3xq9h":[function(require,module,exports) {
module.exports = minimatch;
minimatch.Minimatch = Minimatch;
var path = function() {
    try {
        return require("1e60e64c203ffb5e");
    } catch (e) {}
}() || {
    sep: "/"
};
minimatch.sep = path.sep;
var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};
var expand = require("3b492394301c0014");
var plTypes = {
    "!": {
        open: "(?:(?!(?:",
        close: "))[^/]*?)"
    },
    "?": {
        open: "(?:",
        close: ")?"
    },
    "+": {
        open: "(?:",
        close: ")+"
    },
    "*": {
        open: "(?:",
        close: ")*"
    },
    "@": {
        open: "(?:",
        close: ")"
    }
};
// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = "[^/]";
// * => any number of characters
var star = qmark + "*?";
// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
// characters that need to be escaped in RegExp.
var reSpecials = charSet("().*{}+?[]^$\\!");
// "abc" -> { a:true, b:true, c:true }
function charSet(s) {
    return s.split("").reduce(function(set, c) {
        set[c] = true;
        return set;
    }, {});
}
// normalizes slashes.
var slashSplit = /\/+/;
minimatch.filter = filter;
function filter(pattern, options) {
    options = options || {};
    return function(p, i, list) {
        return minimatch(p, pattern, options);
    };
}
function ext(a, b) {
    b = b || {};
    var t = {};
    Object.keys(a).forEach(function(k) {
        t[k] = a[k];
    });
    Object.keys(b).forEach(function(k) {
        t[k] = b[k];
    });
    return t;
}
minimatch.defaults = function(def) {
    if (!def || typeof def !== "object" || !Object.keys(def).length) return minimatch;
    var orig = minimatch;
    var m = function minimatch(p, pattern, options) {
        return orig(p, pattern, ext(def, options));
    };
    m.Minimatch = function Minimatch(pattern, options) {
        return new orig.Minimatch(pattern, ext(def, options));
    };
    m.Minimatch.defaults = function defaults(options) {
        return orig.defaults(ext(def, options)).Minimatch;
    };
    m.filter = function filter(pattern, options) {
        return orig.filter(pattern, ext(def, options));
    };
    m.defaults = function defaults(options) {
        return orig.defaults(ext(def, options));
    };
    m.makeRe = function makeRe(pattern, options) {
        return orig.makeRe(pattern, ext(def, options));
    };
    m.braceExpand = function braceExpand(pattern, options) {
        return orig.braceExpand(pattern, ext(def, options));
    };
    m.match = function(list, pattern, options) {
        return orig.match(list, pattern, ext(def, options));
    };
    return m;
};
Minimatch.defaults = function(def) {
    return minimatch.defaults(def).Minimatch;
};
function minimatch(p, pattern, options) {
    assertValidPattern(pattern);
    if (!options) options = {};
    // shortcut: comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === "#") return false;
    return new Minimatch(pattern, options).match(p);
}
function Minimatch(pattern, options) {
    if (!(this instanceof Minimatch)) return new Minimatch(pattern, options);
    assertValidPattern(pattern);
    if (!options) options = {};
    pattern = pattern.trim();
    // windows support: need to use /, not \
    if (!options.allowWindowsEscape && path.sep !== "/") pattern = pattern.split(path.sep).join("/");
    this.options = options;
    this.set = [];
    this.pattern = pattern;
    this.regexp = null;
    this.negate = false;
    this.comment = false;
    this.empty = false;
    this.partial = !!options.partial;
    // make the set of regexps etc.
    this.make();
}
Minimatch.prototype.debug = function() {};
Minimatch.prototype.make = make;
function make() {
    var pattern = this.pattern;
    var options = this.options;
    // empty patterns and comments match nothing.
    if (!options.nocomment && pattern.charAt(0) === "#") {
        this.comment = true;
        return;
    }
    if (!pattern) {
        this.empty = true;
        return;
    }
    // step 1: figure out negation, etc.
    this.parseNegate();
    // step 2: expand braces
    var set = this.globSet = this.braceExpand();
    if (options.debug) this.debug = function debug() {
        console.error.apply(console, arguments);
    };
    this.debug(this.pattern, set);
    // step 3: now we have a set, so turn each one into a series of path-portion
    // matching patterns.
    // These will be regexps, except in the case of "**", which is
    // set to the GLOBSTAR object for globstar behavior,
    // and will not contain any / characters
    set = this.globParts = set.map(function(s) {
        return s.split(slashSplit);
    });
    this.debug(this.pattern, set);
    // glob --> regexps
    set = set.map(function(s, si, set) {
        return s.map(this.parse, this);
    }, this);
    this.debug(this.pattern, set);
    // filter out everything that didn't compile properly.
    set = set.filter(function(s) {
        return s.indexOf(false) === -1;
    });
    this.debug(this.pattern, set);
    this.set = set;
}
Minimatch.prototype.parseNegate = parseNegate;
function parseNegate() {
    var pattern = this.pattern;
    var negate = false;
    var options = this.options;
    var negateOffset = 0;
    if (options.nonegate) return;
    for(var i = 0, l = pattern.length; i < l && pattern.charAt(i) === "!"; i++){
        negate = !negate;
        negateOffset++;
    }
    if (negateOffset) this.pattern = pattern.substr(negateOffset);
    this.negate = negate;
}
// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function(pattern, options) {
    return braceExpand(pattern, options);
};
Minimatch.prototype.braceExpand = braceExpand;
function braceExpand(pattern, options) {
    if (!options) {
        if (this instanceof Minimatch) options = this.options;
        else options = {};
    }
    pattern = typeof pattern === "undefined" ? this.pattern : pattern;
    assertValidPattern(pattern);
    // Thanks to Yeting Li <https://github.com/yetingli> for
    // improving this regexp to avoid a ReDOS vulnerability.
    if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) // shortcut. no need to expand.
    return [
        pattern
    ];
    return expand(pattern);
}
var MAX_PATTERN_LENGTH = 65536;
var assertValidPattern = function(pattern) {
    if (typeof pattern !== "string") throw new TypeError("invalid pattern");
    if (pattern.length > MAX_PATTERN_LENGTH) throw new TypeError("pattern is too long");
};
// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse;
var SUBPARSE = {};
function parse(pattern, isSub) {
    assertValidPattern(pattern);
    var options = this.options;
    // shortcuts
    if (pattern === "**") {
        if (!options.noglobstar) return GLOBSTAR;
        else pattern = "*";
    }
    if (pattern === "") return "";
    var re = "";
    var hasMagic = !!options.nocase;
    var escaping = false;
    // ? => one single character
    var patternListStack = [];
    var negativeLists = [];
    var stateChar;
    var inClass = false;
    var reClassStart = -1;
    var classStart = -1;
    // . and .. never match anything that doesn't start with .,
    // even when options.dot is set.
    var patternStart = pattern.charAt(0) === "." ? "" // anything
     : options.dot ? "(?!(?:^|\\/)\\.{1,2}(?:$|\\/))" : "(?!\\.)";
    var self = this;
    function clearStateChar() {
        if (stateChar) {
            // we had some state-tracking character
            // that wasn't consumed by this pass.
            switch(stateChar){
                case "*":
                    re += star;
                    hasMagic = true;
                    break;
                case "?":
                    re += qmark;
                    hasMagic = true;
                    break;
                default:
                    re += "\\" + stateChar;
                    break;
            }
            self.debug("clearStateChar %j %j", stateChar, re);
            stateChar = false;
        }
    }
    for(var i = 0, len = pattern.length, c; i < len && (c = pattern.charAt(i)); i++){
        this.debug("%s	%s %s %j", pattern, i, re, c);
        // skip over any that are escaped.
        if (escaping && reSpecials[c]) {
            re += "\\" + c;
            escaping = false;
            continue;
        }
        switch(c){
            /* istanbul ignore next */ case "/":
                // completely not allowed, even escaped.
                // Should already be path-split by now.
                return false;
            case "\\":
                clearStateChar();
                escaping = true;
                continue;
            // the various stateChar values
            // for the "extglob" stuff.
            case "?":
            case "*":
            case "+":
            case "@":
            case "!":
                this.debug("%s	%s %s %j <-- stateChar", pattern, i, re, c);
                // all of those are literals inside a class, except that
                // the glob [!a] means [^a] in regexp
                if (inClass) {
                    this.debug("  in class");
                    if (c === "!" && i === classStart + 1) c = "^";
                    re += c;
                    continue;
                }
                // if we already have a stateChar, then it means
                // that there was something like ** or +? in there.
                // Handle the stateChar, then proceed with this one.
                self.debug("call clearStateChar %j", stateChar);
                clearStateChar();
                stateChar = c;
                // if extglob is disabled, then +(asdf|foo) isn't a thing.
                // just clear the statechar *now*, rather than even diving into
                // the patternList stuff.
                if (options.noext) clearStateChar();
                continue;
            case "(":
                if (inClass) {
                    re += "(";
                    continue;
                }
                if (!stateChar) {
                    re += "\\(";
                    continue;
                }
                patternListStack.push({
                    type: stateChar,
                    start: i - 1,
                    reStart: re.length,
                    open: plTypes[stateChar].open,
                    close: plTypes[stateChar].close
                });
                // negation is (?:(?!js)[^/]*)
                re += stateChar === "!" ? "(?:(?!(?:" : "(?:";
                this.debug("plType %j %j", stateChar, re);
                stateChar = false;
                continue;
            case ")":
                if (inClass || !patternListStack.length) {
                    re += "\\)";
                    continue;
                }
                clearStateChar();
                hasMagic = true;
                var pl = patternListStack.pop();
                // negation is (?:(?!js)[^/]*)
                // The others are (?:<pattern>)<type>
                re += pl.close;
                if (pl.type === "!") negativeLists.push(pl);
                pl.reEnd = re.length;
                continue;
            case "|":
                if (inClass || !patternListStack.length || escaping) {
                    re += "\\|";
                    escaping = false;
                    continue;
                }
                clearStateChar();
                re += "|";
                continue;
            // these are mostly the same in regexp and glob
            case "[":
                // swallow any state-tracking char before the [
                clearStateChar();
                if (inClass) {
                    re += "\\" + c;
                    continue;
                }
                inClass = true;
                classStart = i;
                reClassStart = re.length;
                re += c;
                continue;
            case "]":
                //  a right bracket shall lose its special
                //  meaning and represent itself in
                //  a bracket expression if it occurs
                //  first in the list.  -- POSIX.2 2.8.3.2
                if (i === classStart + 1 || !inClass) {
                    re += "\\" + c;
                    escaping = false;
                    continue;
                }
                // handle the case where we left a class open.
                // "[z-a]" is valid, equivalent to "\[z-a\]"
                // split where the last [ was, make sure we don't have
                // an invalid re. if so, re-walk the contents of the
                // would-be class to re-translate any characters that
                // were passed through as-is
                // TODO: It would probably be faster to determine this
                // without a try/catch and a new RegExp, but it's tricky
                // to do safely.  For now, this is safe and works.
                var cs = pattern.substring(classStart + 1, i);
                try {
                    RegExp("[" + cs + "]");
                } catch (er) {
                    // not a valid class!
                    var sp = this.parse(cs, SUBPARSE);
                    re = re.substr(0, reClassStart) + "\\[" + sp[0] + "\\]";
                    hasMagic = hasMagic || sp[1];
                    inClass = false;
                    continue;
                }
                // finish up the class.
                hasMagic = true;
                inClass = false;
                re += c;
                continue;
            default:
                // swallow any state char that wasn't consumed
                clearStateChar();
                if (escaping) // no need
                escaping = false;
                else if (reSpecials[c] && !(c === "^" && inClass)) re += "\\";
                re += c;
        } // switch
    } // for
    // handle the case where we left a class open.
    // "[abc" is valid, equivalent to "\[abc"
    if (inClass) {
        // split where the last [ was, and escape it
        // this is a huge pita.  We now have to re-walk
        // the contents of the would-be class to re-translate
        // any characters that were passed through as-is
        cs = pattern.substr(classStart + 1);
        sp = this.parse(cs, SUBPARSE);
        re = re.substr(0, reClassStart) + "\\[" + sp[0];
        hasMagic = hasMagic || sp[1];
    }
    // handle the case where we had a +( thing at the *end*
    // of the pattern.
    // each pattern list stack adds 3 chars, and we need to go through
    // and escape any | chars that were passed through as-is for the regexp.
    // Go through and escape them, taking care not to double-escape any
    // | chars that were already escaped.
    for(pl = patternListStack.pop(); pl; pl = patternListStack.pop()){
        var tail = re.slice(pl.reStart + pl.open.length);
        this.debug("setting tail", re, pl);
        // maybe some even number of \, then maybe 1 \, followed by a |
        tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function(_, $1, $2) {
            if (!$2) // the | isn't already escaped, so escape it.
            $2 = "\\";
            // need to escape all those slashes *again*, without escaping the
            // one that we need for escaping the | character.  As it works out,
            // escaping an even number of slashes can be done by simply repeating
            // it exactly after itself.  That's why this trick works.
            //
            // I am sorry that you have to see this.
            return $1 + $1 + $2 + "|";
        });
        this.debug("tail=%j\n   %s", tail, tail, pl, re);
        var t = pl.type === "*" ? star : pl.type === "?" ? qmark : "\\" + pl.type;
        hasMagic = true;
        re = re.slice(0, pl.reStart) + t + "\\(" + tail;
    }
    // handle trailing things that only matter at the very end.
    clearStateChar();
    if (escaping) // trailing \\
    re += "\\\\";
    // only need to apply the nodot start if the re starts with
    // something that could conceivably capture a dot
    var addPatternStart = false;
    switch(re.charAt(0)){
        case "[":
        case ".":
        case "(":
            addPatternStart = true;
    }
    // Hack to work around lack of negative lookbehind in JS
    // A pattern like: *.!(x).!(y|z) needs to ensure that a name
    // like 'a.xyz.yz' doesn't match.  So, the first negative
    // lookahead, has to look ALL the way ahead, to the end of
    // the pattern.
    for(var n = negativeLists.length - 1; n > -1; n--){
        var nl = negativeLists[n];
        var nlBefore = re.slice(0, nl.reStart);
        var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
        var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
        var nlAfter = re.slice(nl.reEnd);
        nlLast += nlAfter;
        // Handle nested stuff like *(*.js|!(*.json)), where open parens
        // mean that we should *not* include the ) in the bit that is considered
        // "after" the negated section.
        var openParensBefore = nlBefore.split("(").length - 1;
        var cleanAfter = nlAfter;
        for(i = 0; i < openParensBefore; i++)cleanAfter = cleanAfter.replace(/\)[+*?]?/, "");
        nlAfter = cleanAfter;
        var dollar = "";
        if (nlAfter === "" && isSub !== SUBPARSE) dollar = "$";
        var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
        re = newRe;
    }
    // if the re is not "" at this point, then we need to make sure
    // it doesn't match against an empty path part.
    // Otherwise a/* will match a/, which it should not.
    if (re !== "" && hasMagic) re = "(?=.)" + re;
    if (addPatternStart) re = patternStart + re;
    // parsing just a piece of a larger pattern.
    if (isSub === SUBPARSE) return [
        re,
        hasMagic
    ];
    // skip the regexp for non-magical patterns
    // unescape anything in it, though, so that it'll be
    // an exact match against a file etc.
    if (!hasMagic) return globUnescape(pattern);
    var flags = options.nocase ? "i" : "";
    try {
        var regExp = new RegExp("^" + re + "$", flags);
    } catch (er) /* istanbul ignore next - should be impossible */ {
        // If it was an invalid regular expression, then it can't match
        // anything.  This trick looks for a character after the end of
        // the string, which is of course impossible, except in multi-line
        // mode, but it's not a /m regex.
        return new RegExp("$.");
    }
    regExp._glob = pattern;
    regExp._src = re;
    return regExp;
}
minimatch.makeRe = function(pattern, options) {
    return new Minimatch(pattern, options || {}).makeRe();
};
Minimatch.prototype.makeRe = makeRe;
function makeRe() {
    if (this.regexp || this.regexp === false) return this.regexp;
    // at this point, this.set is a 2d array of partial
    // pattern strings, or "**".
    //
    // It's better to use .match().  This function shouldn't
    // be used, really, but it's pretty convenient sometimes,
    // when you just want to work with a regex.
    var set = this.set;
    if (!set.length) {
        this.regexp = false;
        return this.regexp;
    }
    var options = this.options;
    var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
    var flags = options.nocase ? "i" : "";
    var re = set.map(function(pattern) {
        return pattern.map(function(p) {
            return p === GLOBSTAR ? twoStar : typeof p === "string" ? regExpEscape(p) : p._src;
        }).join("\\/");
    }).join("|");
    // must match entire pattern
    // ending in a * or ** will make it less strict.
    re = "^(?:" + re + ")$";
    // can match anything, as long as it's not this.
    if (this.negate) re = "^(?!" + re + ").*$";
    try {
        this.regexp = new RegExp(re, flags);
    } catch (ex) /* istanbul ignore next - should be impossible */ {
        this.regexp = false;
    }
    return this.regexp;
}
minimatch.match = function(list, pattern, options) {
    options = options || {};
    var mm = new Minimatch(pattern, options);
    list = list.filter(function(f) {
        return mm.match(f);
    });
    if (mm.options.nonull && !list.length) list.push(pattern);
    return list;
};
Minimatch.prototype.match = function match(f, partial) {
    if (typeof partial === "undefined") partial = this.partial;
    this.debug("match", f, this.pattern);
    // short-circuit in the case of busted things.
    // comments, etc.
    if (this.comment) return false;
    if (this.empty) return f === "";
    if (f === "/" && partial) return true;
    var options = this.options;
    // windows: need to use /, not \
    if (path.sep !== "/") f = f.split(path.sep).join("/");
    // treat the test path as a set of pathparts.
    f = f.split(slashSplit);
    this.debug(this.pattern, "split", f);
    // just ONE of the pattern sets in this.set needs to match
    // in order for it to be valid.  If negating, then just one
    // match means that we have failed.
    // Either way, return on the first hit.
    var set = this.set;
    this.debug(this.pattern, "set", set);
    // Find the basename of the path by looking for the last non-empty segment
    var filename;
    var i;
    for(i = f.length - 1; i >= 0; i--){
        filename = f[i];
        if (filename) break;
    }
    for(i = 0; i < set.length; i++){
        var pattern = set[i];
        var file = f;
        if (options.matchBase && pattern.length === 1) file = [
            filename
        ];
        var hit = this.matchOne(file, pattern, partial);
        if (hit) {
            if (options.flipNegate) return true;
            return !this.negate;
        }
    }
    // didn't get any hits.  this is success if it's a negative
    // pattern, failure otherwise.
    if (options.flipNegate) return false;
    return this.negate;
};
// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function(file, pattern, partial) {
    var options = this.options;
    this.debug("matchOne", {
        "this": this,
        file: file,
        pattern: pattern
    });
    this.debug("matchOne", file.length, pattern.length);
    for(var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++){
        this.debug("matchOne loop");
        var p = pattern[pi];
        var f = file[fi];
        this.debug(pattern, p, f);
        // should be impossible.
        // some invalid regexp stuff in the set.
        /* istanbul ignore if */ if (p === false) return false;
        if (p === GLOBSTAR) {
            this.debug("GLOBSTAR", [
                pattern,
                p,
                f
            ]);
            // "**"
            // a/**/b/**/c would match the following:
            // a/b/x/y/z/c
            // a/x/y/z/b/c
            // a/b/x/b/x/c
            // a/b/c
            // To do this, take the rest of the pattern after
            // the **, and see if it would match the file remainder.
            // If so, return success.
            // If not, the ** "swallows" a segment, and try again.
            // This is recursively awful.
            //
            // a/**/b/**/c matching a/b/x/y/z/c
            // - a matches a
            // - doublestar
            //   - matchOne(b/x/y/z/c, b/**/c)
            //     - b matches b
            //     - doublestar
            //       - matchOne(x/y/z/c, c) -> no
            //       - matchOne(y/z/c, c) -> no
            //       - matchOne(z/c, c) -> no
            //       - matchOne(c, c) yes, hit
            var fr = fi;
            var pr = pi + 1;
            if (pr === pl) {
                this.debug("** at the end");
                // a ** at the end will just swallow the rest.
                // We have found a match.
                // however, it will not swallow /.x, unless
                // options.dot is set.
                // . and .. are *never* matched by **, for explosively
                // exponential reasons.
                for(; fi < fl; fi++){
                    if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".") return false;
                }
                return true;
            }
            // ok, let's see if we can swallow whatever we can.
            while(fr < fl){
                var swallowee = file[fr];
                this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
                // XXX remove this slice.  Just pass the start index.
                if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
                    this.debug("globstar found match!", fr, fl, swallowee);
                    // found a match.
                    return true;
                } else {
                    // can't swallow "." or ".." ever.
                    // can only swallow ".foo" when explicitly asked.
                    if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
                        this.debug("dot detected!", file, fr, pattern, pr);
                        break;
                    }
                    // ** swallows a segment, and continue.
                    this.debug("globstar swallow a segment, and continue");
                    fr++;
                }
            }
            // no match was found.
            // However, in partial mode, we can't say this is necessarily over.
            // If there's more *pattern* left, then
            /* istanbul ignore if */ if (partial) {
                // ran out of file
                this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
                if (fr === fl) return true;
            }
            return false;
        }
        // something other than **
        // non-magic patterns just have to match exactly
        // patterns with magic have been turned into regexps.
        var hit;
        if (typeof p === "string") {
            hit = f === p;
            this.debug("string match", p, f, hit);
        } else {
            hit = f.match(p);
            this.debug("pattern match", p, f, hit);
        }
        if (!hit) return false;
    }
    // Note: ending in / means that we'll get a final ""
    // at the end of the pattern.  This can only match a
    // corresponding "" at the end of the file.
    // If the file ends in /, then it can only match a
    // a pattern that ends in /, unless the pattern just
    // doesn't have any more for it. But, a/b/ should *not*
    // match "a/b/*", even though "" matches against the
    // [^/]*? pattern, except in partial mode, where it might
    // simply not be reached yet.
    // However, a/b/ should still satisfy a/*
    // now either we fell off the end of the pattern, or we're done.
    if (fi === fl && pi === pl) // ran out of pattern and filename at the same time.
    // an exact hit!
    return true;
    else if (fi === fl) // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial;
    else /* istanbul ignore else */ if (pi === pl) // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    return fi === fl - 1 && file[fi] === "";
    // should be unreachable.
    /* istanbul ignore next */ throw new Error("wtf?");
};
// replace stuff like \* with *
function globUnescape(s) {
    return s.replace(/\\(.)/g, "$1");
}
function regExpEscape(s) {
    return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

},{"1e60e64c203ffb5e":"loE3o","3b492394301c0014":"j31kp"}],"j31kp":[function(require,module,exports) {
var concatMap = require("3bebbba84c30e13a");
var balanced = require("786575cea3630ae0");
module.exports = expandTop;
var escSlash = "\x00SLASH" + Math.random() + "\x00";
var escOpen = "\x00OPEN" + Math.random() + "\x00";
var escClose = "\x00CLOSE" + Math.random() + "\x00";
var escComma = "\x00COMMA" + Math.random() + "\x00";
var escPeriod = "\x00PERIOD" + Math.random() + "\x00";
function numeric(str) {
    return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
}
function escapeBraces(str) {
    return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
}
function unescapeBraces(str) {
    return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
}
// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
    if (!str) return [
        ""
    ];
    var parts = [];
    var m = balanced("{", "}", str);
    if (!m) return str.split(",");
    var pre = m.pre;
    var body = m.body;
    var post = m.post;
    var p = pre.split(",");
    p[p.length - 1] += "{" + body + "}";
    var postParts = parseCommaParts(post);
    if (post.length) {
        p[p.length - 1] += postParts.shift();
        p.push.apply(p, postParts);
    }
    parts.push.apply(parts, p);
    return parts;
}
function expandTop(str) {
    if (!str) return [];
    // I don't know why Bash 4.3 does this, but it does.
    // Anything starting with {} will have the first two bytes preserved
    // but *only* at the top level, so {},a}b will not expand to anything,
    // but a{},b}c will be expanded to [a}c,abc].
    // One could argue that this is a bug in Bash, but since the goal of
    // this module is to match Bash's rules, we escape a leading {}
    if (str.substr(0, 2) === "{}") str = "\\{\\}" + str.substr(2);
    return expand(escapeBraces(str), true).map(unescapeBraces);
}
function identity(e) {
    return e;
}
function embrace(str) {
    return "{" + str + "}";
}
function isPadded(el) {
    return /^-?0\d/.test(el);
}
function lte(i, y) {
    return i <= y;
}
function gte(i, y) {
    return i >= y;
}
function expand(str, isTop) {
    var expansions = [];
    var m = balanced("{", "}", str);
    if (!m || /\$$/.test(m.pre)) return [
        str
    ];
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m.body.indexOf(",") >= 0;
    if (!isSequence && !isOptions) {
        // {a},b}
        if (m.post.match(/,.*\}/)) {
            str = m.pre + "{" + m.body + escClose + m.post;
            return expand(str);
        }
        return [
            str
        ];
    }
    var n;
    if (isSequence) n = m.body.split(/\.\./);
    else {
        n = parseCommaParts(m.body);
        if (n.length === 1) {
            // x{{a,b}}y ==> x{a}y x{b}y
            n = expand(n[0], false).map(embrace);
            if (n.length === 1) {
                var post = m.post.length ? expand(m.post, false) : [
                    ""
                ];
                return post.map(function(p) {
                    return m.pre + n[0] + p;
                });
            }
        }
    }
    // at this point, n is the parts, and we know it's not a comma set
    // with a single entry.
    // no need to expand pre, since it is guaranteed to be free of brace-sets
    var pre = m.pre;
    var post = m.post.length ? expand(m.post, false) : [
        ""
    ];
    var N;
    if (isSequence) {
        var x = numeric(n[0]);
        var y = numeric(n[1]);
        var width = Math.max(n[0].length, n[1].length);
        var incr = n.length == 3 ? Math.abs(numeric(n[2])) : 1;
        var test = lte;
        var reverse = y < x;
        if (reverse) {
            incr *= -1;
            test = gte;
        }
        var pad = n.some(isPadded);
        N = [];
        for(var i = x; test(i, y); i += incr){
            var c;
            if (isAlphaSequence) {
                c = String.fromCharCode(i);
                if (c === "\\") c = "";
            } else {
                c = String(i);
                if (pad) {
                    var need = width - c.length;
                    if (need > 0) {
                        var z = new Array(need + 1).join("0");
                        if (i < 0) c = "-" + z + c.slice(1);
                        else c = z + c;
                    }
                }
            }
            N.push(c);
        }
    } else N = concatMap(n, function(el) {
        return expand(el, false);
    });
    for(var j = 0; j < N.length; j++)for(var k = 0; k < post.length; k++){
        var expansion = pre + N[j] + post[k];
        if (!isTop || isSequence || expansion) expansions.push(expansion);
    }
    return expansions;
}

},{"3bebbba84c30e13a":"lCUYS","786575cea3630ae0":"1yVTs"}],"lCUYS":[function(require,module,exports) {
module.exports = function(xs, fn) {
    var res = [];
    for(var i = 0; i < xs.length; i++){
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};
var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === "[object Array]";
};

},{}],"1yVTs":[function(require,module,exports) {
"use strict";
module.exports = balanced;
function balanced(a, b, str) {
    if (a instanceof RegExp) a = maybeMatch(a, str);
    if (b instanceof RegExp) b = maybeMatch(b, str);
    var r = range(a, b, str);
    return r && {
        start: r[0],
        end: r[1],
        pre: str.slice(0, r[0]),
        body: str.slice(r[0] + a.length, r[1]),
        post: str.slice(r[1] + b.length)
    };
}
function maybeMatch(reg, str) {
    var m = str.match(reg);
    return m ? m[0] : null;
}
balanced.range = range;
function range(a, b, str) {
    var begs, beg, left, right, result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;
    if (ai >= 0 && bi > 0) {
        if (a === b) return [
            ai,
            bi
        ];
        begs = [];
        left = str.length;
        while(i >= 0 && !result){
            if (i == ai) {
                begs.push(i);
                ai = str.indexOf(a, i + 1);
            } else if (begs.length == 1) result = [
                begs.pop(),
                bi
            ];
            else {
                beg = begs.pop();
                if (beg < left) {
                    left = beg;
                    right = bi;
                }
                bi = str.indexOf(b, i + 1);
            }
            i = ai < bi && ai >= 0 ? ai : bi;
        }
        if (begs.length) result = [
            left,
            right
        ];
    }
    return result;
}

},{}],"495Ap":[function(require,module,exports) {
var process = require("d326ebb5844ad961");
"use strict";
function posix(path) {
    return path.charAt(0) === "/";
}
function win32(path) {
    // https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
    var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
    var result = splitDeviceRe.exec(path);
    var device = result[1] || "";
    var isUnc = Boolean(device && device.charAt(1) !== ":");
    // UNC paths are always absolute
    return Boolean(result[2] || isUnc);
}
module.exports = process.platform === "win32" ? win32 : posix;
module.exports.posix = posix;
module.exports.win32 = win32;

},{"d326ebb5844ad961":"d5jf4"}],"jIPaz":[function(require,module,exports) {
var process = require("467787227d10902c");
module.exports = globSync;
globSync.GlobSync = GlobSync;
var rp = require("83d78de11f9d6470");
var minimatch = require("841c96a31180e00");
var Minimatch = minimatch.Minimatch;
var Glob = require("4bafe0d4367e89fb").Glob;
var util = require("984cec1cc53f7eaf");
var path = require("8b471a922625721a");
var assert = require("a79c75f0622db82");
var isAbsolute = require("21b6e54a40a88ba6");
var common = require("ccfe6b7406d46377");
var setopts = common.setopts;
var ownProp = common.ownProp;
var childrenIgnored = common.childrenIgnored;
var isIgnored = common.isIgnored;
function globSync(pattern, options) {
    if (typeof options === "function" || arguments.length === 3) throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
    return new GlobSync(pattern, options).found;
}
function GlobSync(pattern, options) {
    if (!pattern) throw new Error("must provide pattern");
    if (typeof options === "function" || arguments.length === 3) throw new TypeError("callback provided to sync glob\nSee: https://github.com/isaacs/node-glob/issues/167");
    if (!(this instanceof GlobSync)) return new GlobSync(pattern, options);
    setopts(this, pattern, options);
    if (this.noprocess) return this;
    var n = this.minimatch.set.length;
    this.matches = new Array(n);
    for(var i = 0; i < n; i++)this._process(this.minimatch.set[i], i, false);
    this._finish();
}
GlobSync.prototype._finish = function() {
    assert.ok(this instanceof GlobSync);
    if (this.realpath) {
        var self = this;
        this.matches.forEach(function(matchset, index) {
            var set = self.matches[index] = Object.create(null);
            for(var p in matchset)try {
                p = self._makeAbs(p);
                var real = rp.realpathSync(p, self.realpathCache);
                set[real] = true;
            } catch (er) {
                if (er.syscall === "stat") set[self._makeAbs(p)] = true;
                else throw er;
            }
        });
    }
    common.finish(this);
};
GlobSync.prototype._process = function(pattern, index, inGlobStar) {
    assert.ok(this instanceof GlobSync);
    // Get the first [n] parts of pattern that are all strings.
    var n = 0;
    while(typeof pattern[n] === "string")n++;
    // now n is the index of the first one that is *not* a string.
    // See if there's anything else
    var prefix;
    switch(n){
        // if not, then this is rather simple
        case pattern.length:
            this._processSimple(pattern.join("/"), index);
            return;
        case 0:
            // pattern *starts* with some non-trivial item.
            // going to readdir(cwd), but not include the prefix in matches.
            prefix = null;
            break;
        default:
            // pattern has some string bits in the front.
            // whatever it starts with, whether that's 'absolute' like /foo/bar,
            // or 'relative' like '../baz'
            prefix = pattern.slice(0, n).join("/");
            break;
    }
    var remain = pattern.slice(n);
    // get the list of entries.
    var read;
    if (prefix === null) read = ".";
    else if (isAbsolute(prefix) || isAbsolute(pattern.map(function(p) {
        return typeof p === "string" ? p : "[*]";
    }).join("/"))) {
        if (!prefix || !isAbsolute(prefix)) prefix = "/" + prefix;
        read = prefix;
    } else read = prefix;
    var abs = this._makeAbs(read);
    //if ignored, skip processing
    if (childrenIgnored(this, read)) return;
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar) this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);
    else this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
};
GlobSync.prototype._processReaddir = function(prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    // if the abs isn't a dir, then nothing can match!
    if (!entries) return;
    // It will only match dot entries if it starts with a dot, or if
    // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
    var pn = remain[0];
    var negate = !!this.minimatch.negate;
    var rawGlob = pn._glob;
    var dotOk = this.dot || rawGlob.charAt(0) === ".";
    var matchedEntries = [];
    for(var i = 0; i < entries.length; i++){
        var e = entries[i];
        if (e.charAt(0) !== "." || dotOk) {
            var m;
            if (negate && !prefix) m = !e.match(pn);
            else m = e.match(pn);
            if (m) matchedEntries.push(e);
        }
    }
    var len = matchedEntries.length;
    // If there are no matched entries, then nothing matches.
    if (len === 0) return;
    // if this is the last remaining pattern bit, then no need for
    // an additional stat *unless* the user has specified mark or
    // stat explicitly.  We know they exist, since readdir returned
    // them.
    if (remain.length === 1 && !this.mark && !this.stat) {
        if (!this.matches[index]) this.matches[index] = Object.create(null);
        for(var i = 0; i < len; i++){
            var e = matchedEntries[i];
            if (prefix) {
                if (prefix.slice(-1) !== "/") e = prefix + "/" + e;
                else e = prefix + e;
            }
            if (e.charAt(0) === "/" && !this.nomount) e = path.join(this.root, e);
            this._emitMatch(index, e);
        }
        // This was the last one, and no stats were needed
        return;
    }
    // now test all matched entries as stand-ins for that part
    // of the pattern.
    remain.shift();
    for(var i = 0; i < len; i++){
        var e = matchedEntries[i];
        var newPattern;
        if (prefix) newPattern = [
            prefix,
            e
        ];
        else newPattern = [
            e
        ];
        this._process(newPattern.concat(remain), index, inGlobStar);
    }
};
GlobSync.prototype._emitMatch = function(index, e) {
    if (isIgnored(this, e)) return;
    var abs = this._makeAbs(e);
    if (this.mark) e = this._mark(e);
    if (this.absolute) e = abs;
    if (this.matches[index][e]) return;
    if (this.nodir) {
        var c = this.cache[abs];
        if (c === "DIR" || Array.isArray(c)) return;
    }
    this.matches[index][e] = true;
    if (this.stat) this._stat(e);
};
GlobSync.prototype._readdirInGlobStar = function(abs) {
    // follow all symlinked directories forever
    // just proceed as if this is a non-globstar situation
    if (this.follow) return this._readdir(abs, false);
    var entries;
    var lstat;
    var stat;
    try {
        lstat = this.fs.lstatSync(abs);
    } catch (er) {
        if (er.code === "ENOENT") // lstat failed, doesn't exist
        return null;
    }
    var isSym = lstat && lstat.isSymbolicLink();
    this.symlinks[abs] = isSym;
    // If it's not a symlink or a dir, then it's definitely a regular file.
    // don't bother doing a readdir in that case.
    if (!isSym && lstat && !lstat.isDirectory()) this.cache[abs] = "FILE";
    else entries = this._readdir(abs, false);
    return entries;
};
GlobSync.prototype._readdir = function(abs, inGlobStar) {
    var entries;
    if (inGlobStar && !ownProp(this.symlinks, abs)) return this._readdirInGlobStar(abs);
    if (ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (!c || c === "FILE") return null;
        if (Array.isArray(c)) return c;
    }
    try {
        return this._readdirEntries(abs, this.fs.readdirSync(abs));
    } catch (er) {
        this._readdirError(abs, er);
        return null;
    }
};
GlobSync.prototype._readdirEntries = function(abs, entries) {
    // if we haven't asked to stat everything, then just
    // assume that everything in there exists, so we can avoid
    // having to stat it a second time.
    if (!this.mark && !this.stat) for(var i = 0; i < entries.length; i++){
        var e = entries[i];
        if (abs === "/") e = abs + e;
        else e = abs + "/" + e;
        this.cache[e] = true;
    }
    this.cache[abs] = entries;
    // mark and cache dir-ness
    return entries;
};
GlobSync.prototype._readdirError = function(f, er) {
    // handle errors, and cache the information
    switch(er.code){
        case "ENOTSUP":
        case "ENOTDIR":
            var abs = this._makeAbs(f);
            this.cache[abs] = "FILE";
            if (abs === this.cwdAbs) {
                var error = new Error(er.code + " invalid cwd " + this.cwd);
                error.path = this.cwd;
                error.code = er.code;
                throw error;
            }
            break;
        case "ENOENT":
        case "ELOOP":
        case "ENAMETOOLONG":
        case "UNKNOWN":
            this.cache[this._makeAbs(f)] = false;
            break;
        default:
            this.cache[this._makeAbs(f)] = false;
            if (this.strict) throw er;
            if (!this.silent) console.error("glob error", er);
            break;
    }
};
GlobSync.prototype._processGlobStar = function(prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar);
    // no entries means not a dir, so it can never have matches
    // foo.txt/** doesn't match foo.txt
    if (!entries) return;
    // test without the globstar, and with every child both below
    // and replacing the globstar.
    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [
        prefix
    ] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar);
    // the noGlobStar pattern exits the inGlobStar state
    this._process(noGlobStar, index, false);
    var len = entries.length;
    var isSym = this.symlinks[abs];
    // If it's a symlink, and we're in a globstar, then stop
    if (isSym && inGlobStar) return;
    for(var i = 0; i < len; i++){
        var e = entries[i];
        if (e.charAt(0) === "." && !this.dot) continue;
        // these two cases enter the inGlobStar state
        var instead = gspref.concat(entries[i], remainWithoutGlobStar);
        this._process(instead, index, true);
        var below = gspref.concat(entries[i], remain);
        this._process(below, index, true);
    }
};
GlobSync.prototype._processSimple = function(prefix, index) {
    // XXX review this.  Shouldn't it be doing the mounting etc
    // before doing stat?  kinda weird?
    var exists = this._stat(prefix);
    if (!this.matches[index]) this.matches[index] = Object.create(null);
    // If it doesn't exist, then just mark the lack of results
    if (!exists) return;
    if (prefix && isAbsolute(prefix) && !this.nomount) {
        var trail = /[\/\\]$/.test(prefix);
        if (prefix.charAt(0) === "/") prefix = path.join(this.root, prefix);
        else {
            prefix = path.resolve(this.root, prefix);
            if (trail) prefix += "/";
        }
    }
    if (process.platform === "win32") prefix = prefix.replace(/\\/g, "/");
    // Mark this as a match
    this._emitMatch(index, prefix);
};
// Returns either 'DIR', 'FILE', or false
GlobSync.prototype._stat = function(f) {
    var abs = this._makeAbs(f);
    var needDir = f.slice(-1) === "/";
    if (f.length > this.maxLength) return false;
    if (!this.stat && ownProp(this.cache, abs)) {
        var c = this.cache[abs];
        if (Array.isArray(c)) c = "DIR";
        // It exists, but maybe not how we need it
        if (!needDir || c === "DIR") return c;
        if (needDir && c === "FILE") return false;
    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
    }
    var exists;
    var stat = this.statCache[abs];
    if (!stat) {
        var lstat;
        try {
            lstat = this.fs.lstatSync(abs);
        } catch (er) {
            if (er && (er.code === "ENOENT" || er.code === "ENOTDIR")) {
                this.statCache[abs] = false;
                return false;
            }
        }
        if (lstat && lstat.isSymbolicLink()) try {
            stat = this.fs.statSync(abs);
        } catch (er) {
            stat = lstat;
        }
        else stat = lstat;
    }
    this.statCache[abs] = stat;
    var c = true;
    if (stat) c = stat.isDirectory() ? "DIR" : "FILE";
    this.cache[abs] = this.cache[abs] || c;
    if (needDir && c === "FILE") return false;
    return c;
};
GlobSync.prototype._mark = function(p) {
    return common.mark(this, p);
};
GlobSync.prototype._makeAbs = function(f) {
    return common.makeAbs(this, f);
};

},{"467787227d10902c":"d5jf4","83d78de11f9d6470":"fbhqL","841c96a31180e00":"3xq9h","4bafe0d4367e89fb":"a9zG0","984cec1cc53f7eaf":"cxohQ","8b471a922625721a":"loE3o","a79c75f0622db82":"f3tT4","21b6e54a40a88ba6":"495Ap","ccfe6b7406d46377":"5eDXF"}],"5eDXF":[function(require,module,exports) {
var process = require("1df3c7b81d434c9f");
exports.setopts = setopts;
exports.ownProp = ownProp;
exports.makeAbs = makeAbs;
exports.finish = finish;
exports.mark = mark;
exports.isIgnored = isIgnored;
exports.childrenIgnored = childrenIgnored;
function ownProp(obj, field) {
    return Object.prototype.hasOwnProperty.call(obj, field);
}
var fs = require("c9770771920bcb52");
var path = require("25a18a83663f3dd1");
var minimatch = require("f93353a70d0020d4");
var isAbsolute = require("9c5b1412b3f3ce34");
var Minimatch = minimatch.Minimatch;
function alphasort(a, b) {
    return a.localeCompare(b, "en");
}
function setupIgnores(self, options) {
    self.ignore = options.ignore || [];
    if (!Array.isArray(self.ignore)) self.ignore = [
        self.ignore
    ];
    if (self.ignore.length) self.ignore = self.ignore.map(ignoreMap);
}
// ignore patterns are always in dot:true mode.
function ignoreMap(pattern) {
    var gmatcher = null;
    if (pattern.slice(-3) === "/**") {
        var gpattern = pattern.replace(/(\/\*\*)+$/, "");
        gmatcher = new Minimatch(gpattern, {
            dot: true
        });
    }
    return {
        matcher: new Minimatch(pattern, {
            dot: true
        }),
        gmatcher: gmatcher
    };
}
function setopts(self, pattern, options) {
    if (!options) options = {};
    // base-matching: just use globstar for that.
    if (options.matchBase && -1 === pattern.indexOf("/")) {
        if (options.noglobstar) throw new Error("base matching requires globstar");
        pattern = "**/" + pattern;
    }
    self.silent = !!options.silent;
    self.pattern = pattern;
    self.strict = options.strict !== false;
    self.realpath = !!options.realpath;
    self.realpathCache = options.realpathCache || Object.create(null);
    self.follow = !!options.follow;
    self.dot = !!options.dot;
    self.mark = !!options.mark;
    self.nodir = !!options.nodir;
    if (self.nodir) self.mark = true;
    self.sync = !!options.sync;
    self.nounique = !!options.nounique;
    self.nonull = !!options.nonull;
    self.nosort = !!options.nosort;
    self.nocase = !!options.nocase;
    self.stat = !!options.stat;
    self.noprocess = !!options.noprocess;
    self.absolute = !!options.absolute;
    self.fs = options.fs || fs;
    self.maxLength = options.maxLength || Infinity;
    self.cache = options.cache || Object.create(null);
    self.statCache = options.statCache || Object.create(null);
    self.symlinks = options.symlinks || Object.create(null);
    setupIgnores(self, options);
    self.changedCwd = false;
    var cwd = process.cwd();
    if (!ownProp(options, "cwd")) self.cwd = cwd;
    else {
        self.cwd = path.resolve(options.cwd);
        self.changedCwd = self.cwd !== cwd;
    }
    self.root = options.root || path.resolve(self.cwd, "/");
    self.root = path.resolve(self.root);
    if (process.platform === "win32") self.root = self.root.replace(/\\/g, "/");
    // TODO: is an absolute `cwd` supposed to be resolved against `root`?
    // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')
    self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd);
    if (process.platform === "win32") self.cwdAbs = self.cwdAbs.replace(/\\/g, "/");
    self.nomount = !!options.nomount;
    // disable comments and negation in Minimatch.
    // Note that they are not supported in Glob itself anyway.
    options.nonegate = true;
    options.nocomment = true;
    // always treat \ in patterns as escapes, not path separators
    options.allowWindowsEscape = false;
    self.minimatch = new Minimatch(pattern, options);
    self.options = self.minimatch.options;
}
function finish(self) {
    var nou = self.nounique;
    var all = nou ? [] : Object.create(null);
    for(var i = 0, l = self.matches.length; i < l; i++){
        var matches = self.matches[i];
        if (!matches || Object.keys(matches).length === 0) {
            if (self.nonull) {
                // do like the shell, and spit out the literal glob
                var literal = self.minimatch.globSet[i];
                if (nou) all.push(literal);
                else all[literal] = true;
            }
        } else {
            // had matches
            var m = Object.keys(matches);
            if (nou) all.push.apply(all, m);
            else m.forEach(function(m) {
                all[m] = true;
            });
        }
    }
    if (!nou) all = Object.keys(all);
    if (!self.nosort) all = all.sort(alphasort);
    // at *some* point we statted all of these
    if (self.mark) {
        for(var i = 0; i < all.length; i++)all[i] = self._mark(all[i]);
        if (self.nodir) all = all.filter(function(e) {
            var notDir = !/\/$/.test(e);
            var c = self.cache[e] || self.cache[makeAbs(self, e)];
            if (notDir && c) notDir = c !== "DIR" && !Array.isArray(c);
            return notDir;
        });
    }
    if (self.ignore.length) all = all.filter(function(m) {
        return !isIgnored(self, m);
    });
    self.found = all;
}
function mark(self, p) {
    var abs = makeAbs(self, p);
    var c = self.cache[abs];
    var m = p;
    if (c) {
        var isDir = c === "DIR" || Array.isArray(c);
        var slash = p.slice(-1) === "/";
        if (isDir && !slash) m += "/";
        else if (!isDir && slash) m = m.slice(0, -1);
        if (m !== p) {
            var mabs = makeAbs(self, m);
            self.statCache[mabs] = self.statCache[abs];
            self.cache[mabs] = self.cache[abs];
        }
    }
    return m;
}
// lotta situps...
function makeAbs(self, f) {
    var abs = f;
    if (f.charAt(0) === "/") abs = path.join(self.root, f);
    else if (isAbsolute(f) || f === "") abs = f;
    else if (self.changedCwd) abs = path.resolve(self.cwd, f);
    else abs = path.resolve(f);
    if (process.platform === "win32") abs = abs.replace(/\\/g, "/");
    return abs;
}
// Return true, if pattern ends with globstar '**', for the accompanying parent directory.
// Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents
function isIgnored(self, path) {
    if (!self.ignore.length) return false;
    return self.ignore.some(function(item) {
        return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path));
    });
}
function childrenIgnored(self, path) {
    if (!self.ignore.length) return false;
    return self.ignore.some(function(item) {
        return !!(item.gmatcher && item.gmatcher.match(path));
    });
}

},{"1df3c7b81d434c9f":"d5jf4","c9770771920bcb52":"jhUEF","25a18a83663f3dd1":"loE3o","f93353a70d0020d4":"3xq9h","9c5b1412b3f3ce34":"495Ap"}],"7bGo6":[function(require,module,exports) {
var process = require("db67f849dc77d8a1");
var wrappy = require("9bd7c900d7c9671e");
var reqs = Object.create(null);
var once = require("624d99b4d14e271f");
module.exports = wrappy(inflight);
function inflight(key, cb) {
    if (reqs[key]) {
        reqs[key].push(cb);
        return null;
    } else {
        reqs[key] = [
            cb
        ];
        return makeres(key);
    }
}
function makeres(key) {
    return once(function RES() {
        var cbs = reqs[key];
        var len = cbs.length;
        var args = slice(arguments);
        // XXX It's somewhat ambiguous whether a new callback added in this
        // pass should be queued for later execution if something in the
        // list of callbacks throws, or if it should just be discarded.
        // However, it's such an edge case that it hardly matters, and either
        // choice is likely as surprising as the other.
        // As it happens, we do go ahead and schedule it for later execution.
        try {
            for(var i = 0; i < len; i++)cbs[i].apply(null, args);
        } finally{
            if (cbs.length > len) {
                // added more in the interim.
                // de-zalgo, just in case, but don't call again.
                cbs.splice(0, len);
                process.nextTick(function() {
                    RES.apply(null, args);
                });
            } else delete reqs[key];
        }
    });
}
function slice(args) {
    var length = args.length;
    var array = [];
    for(var i = 0; i < length; i++)array[i] = args[i];
    return array;
}

},{"db67f849dc77d8a1":"d5jf4","9bd7c900d7c9671e":"Rj3It","624d99b4d14e271f":"YXzlo"}],"Rj3It":[function(require,module,exports) {
// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy;
function wrappy(fn, cb) {
    if (fn && cb) return wrappy(fn)(cb);
    if (typeof fn !== "function") throw new TypeError("need wrapper function");
    Object.keys(fn).forEach(function(k) {
        wrapper[k] = fn[k];
    });
    return wrapper;
    function wrapper() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        var ret = fn.apply(this, args);
        var cb = args[args.length - 1];
        if (typeof ret === "function" && ret !== cb) Object.keys(cb).forEach(function(k) {
            ret[k] = cb[k];
        });
        return ret;
    }
}

},{}],"YXzlo":[function(require,module,exports) {
var wrappy = require("f5faee48a759335a");
module.exports = wrappy(once);
module.exports.strict = wrappy(onceStrict);
once.proto = once(function() {
    Object.defineProperty(Function.prototype, "once", {
        value: function() {
            return once(this);
        },
        configurable: true
    });
    Object.defineProperty(Function.prototype, "onceStrict", {
        value: function() {
            return onceStrict(this);
        },
        configurable: true
    });
});
function once(fn) {
    var f = function() {
        if (f.called) return f.value;
        f.called = true;
        return f.value = fn.apply(this, arguments);
    };
    f.called = false;
    return f;
}
function onceStrict(fn) {
    var f = function() {
        if (f.called) throw new Error(f.onceError);
        f.called = true;
        return f.value = fn.apply(this, arguments);
    };
    var name = fn.name || "Function wrapped with `once`";
    f.onceError = name + " shouldn't be called more than once";
    f.called = false;
    return f;
}

},{"f5faee48a759335a":"Rj3It"}],"2fCDq":[function(require,module,exports) {
"use strict";
var processFn = function(fn, P, opts) {
    return function() {
        var that = this;
        var args = new Array(arguments.length);
        for(var i = 0; i < arguments.length; i++)args[i] = arguments[i];
        return new P(function(resolve, reject) {
            args.push(function(err, result) {
                if (err) reject(err);
                else if (opts.multiArgs) {
                    var results = new Array(arguments.length - 1);
                    for(var i = 1; i < arguments.length; i++)results[i - 1] = arguments[i];
                    resolve(results);
                } else resolve(result);
            });
            fn.apply(that, args);
        });
    };
};
var pify = module.exports = function(obj, P, opts) {
    if (typeof P !== "function") {
        opts = P;
        P = Promise;
    }
    opts = opts || {};
    opts.exclude = opts.exclude || [
        /.+Sync$/
    ];
    var filter = function(key) {
        var match = function(pattern) {
            return typeof pattern === "string" ? key === pattern : pattern.test(key);
        };
        return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
    };
    var ret = typeof obj === "function" ? function() {
        if (opts.excludeMain) return obj.apply(this, arguments);
        return processFn(obj, P, opts).apply(this, arguments);
    } : {};
    return Object.keys(obj).reduce(function(ret, key) {
        var x = obj[key];
        ret[key] = typeof x === "function" && filter(key) ? processFn(x, P, opts) : x;
        return ret;
    }, ret);
};
pify.all = pify;

},{}]},["igKGj","8lqZg"], "8lqZg", "parcelRequire9848")

//# sourceMappingURL=index.975ef6c8.js.map
