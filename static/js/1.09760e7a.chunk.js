(this["webpackJsonponboard-wallet-auth"]=this["webpackJsonponboard-wallet-auth"]||[]).push([[1],{530:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isAsync=void 0;var n,o=r(655),a=(n=o)&&n.__esModule?n:{default:n};var s="function"===typeof Symbol;function i(e){return s&&"AsyncFunction"===e[Symbol.toStringTag]}t.default=function(e){return i(e)?(0,a.default)(e):e},t.isAsync=i},540:function(e,t,r){"use strict";r.r(t);r(79);var n=r(115),o=(r(39),r(81),r(80),r(936)),a=r.n(o),s=r(940),i=r.n(s),u=r(945),c=r.n(u),d=r(947),l=r.n(d),f=r(948),p=r.n(f);t.default=function(e){var t=e.getAccounts,r=e.signTransaction,o=e.rpcUrl,s=e.processMessage,u=e.processPersonalMessage,d=e.signMessage,f=e.signPersonalMessage,h=Object(n.e)(n.a).blockPollingInterval,g=t&&new c.a({getAccounts:t,signTransaction:r,processMessage:s,processPersonalMessage:u,signMessage:d,signPersonalMessage:f}),v=new i.a({rpcUrl:o.includes("http")?o:"https://".concat(o)}),m=new a.a({pollingInterval:h});return m.addProvider(new l.a),m.addProvider(new p.a),g&&m.addProvider(g),m.addProvider(v),m.start(),m.on("error",console.error),m}},541:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t|=0;for(var r=Math.max(e.length-t,0),n=Array(r),o=0;o<r;o++)n[o]=e[t+o];return n},e.exports=t.default},551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){if(null!==e){var t=e;e=null,t.apply(this,arguments)}}},e.exports=t.default},552:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){if(null===e)throw new Error("Callback was already called.");var t=e;e=null,t.apply(this,arguments)}},e.exports=t.default},575:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){((0,n.default)(e)?f:p)(e,(0,d.default)(t),r)};var n=l(r(538)),o=l(r(576)),a=l(r(652)),s=l(r(578)),i=l(r(529)),u=l(r(551)),c=l(r(552)),d=l(r(530));function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){r=(0,u.default)(r||i.default);var n=0,a=0,s=e.length;function d(e,t){e?r(e):++a!==s&&t!==o.default||r(null)}for(0===s&&r(null);n<s;n++)t(e[n],n,(0,c.default)(d))}var p=(0,s.default)(a.default,1/0);e.exports=t.default},576:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={},e.exports=t.default},577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,r,u){if(u=(0,o.default)(u||n.default),e<=0||!t)return u(null);var c=(0,a.default)(t),d=!1,l=0,f=!1;function p(e,t){if(l-=1,e)d=!0,u(e);else{if(t===i.default||d&&l<=0)return d=!0,u(null);f||h()}}function h(){for(f=!0;l<e&&!d;){var t=c();if(null===t)return d=!0,void(l<=0&&u(null));l+=1,r(t.value,t.key,(0,s.default)(p))}f=!1}h()}};var n=u(r(529)),o=u(r(551)),a=u(r(653)),s=u(r(552)),i=u(r(576));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},578:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return function(r,n,o){return e(r,t,n,o)}},e.exports=t.default},602:function(e,t,r){var n=r(939),o=r(116);e.exports=function(e){return o({id:n(),jsonrpc:"2.0",params:[]},e)}},650:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(651)),o=a(r(658));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.default)(o.default),e.exports=t.default},651:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,r,a){return e(n.default,t,(0,o.default)(r),a)}};var n=a(r(575)),o=a(r(530));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,a){(0,n.default)(t)(e,(0,o.default)(r),a)};var n=a(r(577)),o=a(r(530));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},653:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if((0,n.default)(e))return function(e){var t=-1,r=e.length;return function(){return++t<r?{value:e[t],key:t}:null}}(e);var t=(0,o.default)(e);return t?function(e){var t=-1;return function(){var r=e.next();return r.done?null:(t++,{value:r.value,key:t})}}(t):function(e){var t=(0,a.default)(e),r=-1,n=t.length;return function(){var o=t[++r];return r<n?{value:e[o],key:o}:null}}(e)};var n=s(r(538)),o=s(r(654)),a=s(r(633));function s(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},654:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return n&&e[n]&&e[n]()};var n="function"===typeof Symbol&&Symbol.iterator;e.exports=t.default},655:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,o.default)((function(t,r){var o;try{o=e.apply(this,t)}catch(a){return r(a)}(0,n.default)(o)&&"function"===typeof o.then?o.then((function(e){i(r,null,e)}),(function(e){i(r,e.message?e:new Error(e))})):r(null,o)}))};var n=s(r(596)),o=s(r(656)),a=s(r(657));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r){try{e(t,r)}catch(n){(0,a.default)(u,n)}}function u(e){throw e}e.exports=t.default},656:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=(0,a.default)(arguments),r=t.pop();e.call(this,t,r)}};var n,o=r(541),a=(n=o)&&n.__esModule?n:{default:n};e.exports=t.default},657:function(e,t,r){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.hasNextTick=t.hasSetImmediate=void 0,t.fallback=d,t.wrap=l;var o,a=r(541),s=(o=a)&&o.__esModule?o:{default:o};var i,u=t.hasSetImmediate="function"===typeof e&&e,c=t.hasNextTick="object"===typeof n&&"function"===typeof n.nextTick;function d(e){setTimeout(e,0)}function l(e){return function(t){var r=(0,s.default)(arguments,1);e((function(){t.apply(null,r)}))}}i=u?e:c?n.nextTick:d,t.default=l(i)}).call(this,r(118).setImmediate,r(14))},658:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,a){a=a||n.default,t=t||[];var s=[],i=0,u=(0,o.default)(r);e(t,(function(e,t,r){var n=i++;u(e,(function(e,t){s[n]=t,r(e)}))}),(function(e){a(e,s)}))};var n=a(r(529)),o=a(r(530));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},659:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(660)),o=a(r(578));function a(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.default)(n.default,1),e.exports=t.default},660:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,s){(0,n.default)(t)(e,(0,o.default)((0,a.default)(r)),s)};var n=s(r(577)),o=s(r(661)),a=s(r(530));function s(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},661:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,r,n){return e(t,n)}},e.exports=t.default},662:function(e,t,r){var n=r(602);function o(){}e.exports=o,o.prototype.setEngine=function(e){var t=this;t.engine||(t.engine=e,e.on("block",(function(e){t.currentBlock=e})),e.on("start",(function(){t.start()})),e.on("stop",(function(){t.stop()})))},o.prototype.handleRequest=function(e,t,r){throw new Error("Subproviders should override `handleRequest`.")},o.prototype.emitPayload=function(e,t){this.engine.sendAsync(n(e),t)},o.prototype.stop=function(){},o.prototype.start=function(){}},663:function(e,t,r){var n=r(37),o=r(38),a=r(75),s=r(76),i=r(550),u=r(642),c=function(e){"use strict";a(r,e);var t=s(r);function r(e,o,a){var s;if(n(this,r),!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!o||"string"!==typeof o)throw new Error('"message" must be a nonempty string.');return(s=t.call(this,o)).code=e,void 0!==a&&(s.data=a),s}return o(r,[{key:"serialize",value:function(){var e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}},{key:"toString",value:function(){return u(this.serialize(),l,2)}}]),r}(i(Error)),d=function(e){"use strict";a(r,e);var t=s(r);function r(e,o,a){if(n(this,r),!function(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');return t.call(this,e,o,a)}return r}(c);function l(e,t){if("[Circular]"!==t)return t}e.exports={EthereumRpcError:c,EthereumProviderError:d}},664:function(e){e.exports=JSON.parse('{"rpc":{"invalidInput":-32000,"resourceNotFound":-32001,"resourceUnavailable":-32002,"transactionRejected":-32003,"methodNotSupported":-32004,"parse":-32700,"invalidRequest":-32600,"methodNotFound":-32601,"invalidParams":-32602,"internal":-32603},"provider":{"userRejectedRequest":4001,"unauthorized":4100,"unsupportedMethod":4200}}')},665:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(t=(0,a.default)(t||o.default),!(0,n.default)(e))return t(new Error("First argument to waterfall must be an array of functions"));if(!e.length)return t();var r=0;function c(t){var n=(0,u.default)(e[r++]);t.push((0,i.default)(d)),n.apply(null,t)}function d(n){if(n||r===e.length)return t.apply(null,arguments);c((0,s.default)(arguments,1))}c([])};var n=c(r(597)),o=c(r(529)),a=c(r(551)),s=c(r(541)),i=c(r(552)),u=c(r(530));function c(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){(0,o.default)(n.default,e,t)};var n=a(r(575)),o=a(r(667));function a(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},667:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){r=r||n.default;var i=(0,o.default)(t)?[]:{};e(t,(function(e,t,r){(0,s.default)(e)((function(e,n){arguments.length>2&&(n=(0,a.default)(arguments,1)),i[t]=n,r(e)}))}),(function(e){r(e,i)}))};var n=i(r(529)),o=i(r(538)),a=i(r(541)),s=i(r(530));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},738:function(e,t,r){var n=r(943),o=r(664).rpc.internal,a=r(663).EthereumRpcError,s="Unspecified server error.",i="Unspecified error message. This is a bug, please report it.",u={code:o,message:c(o)};function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;if(Number.isInteger(e)){var r=e.toString();if(n[r])return n[r].message;if(l(e))return s}return t}function d(e){if(!Number.isInteger(e))return!1;var t=e.toString();return!!n[t]||!!l(e)}function l(e){return e>=-32099&&e<=-32e3}function f(e){return e&&"object"===typeof e&&!Array.isArray(e)?Object.assign({},e):e}e.exports={getMessageFromCode:c,isValidCode:d,serializeError:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;if(!t||!Number.isInteger(t.code)||"string"!==typeof t.message)throw new Error("fallbackError must contain integer number code and string message.");if(e instanceof a)return e.serialize();var r={};return e&&d(e.code)?(r.code=e.code,e.message&&"string"===typeof e.message?(r.message=e.message,e.hasOwnProperty("data")&&(r.data=e.data)):(r.message=c(r.code),r.data={originalError:f(e)})):(r.code=t.code,r.message=e&&e.message?e.message:t.message,r.data={originalError:f(e)}),e&&e.stack&&(r.stack=e.stack),r},JSON_RPC_SERVER_ERROR_MESSAGE:s}},739:function(e,t,r){var n=r(37),o=r(38),a=r(75),s=r(76),i=function(e){"use strict";a(r,e);var t=s(r);function r(e){var o;if(n(this,r),o=t.call(this),!e)throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");return o._constructorFn=e,o}return o(r,[{key:"setEngine",value:function(e){if(this.middleware)throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");var t=e._blockTracker,r=this._constructorFn({engine:e,provider:e,blockTracker:t});if(!r)throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");if("function"!==typeof r)throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");this.middleware=r}},{key:"handleRequest",value:function(e,t,r){var n={id:e.id};this.middleware(e,n,(function(e){t((function(t,r,o){t?(delete n.result,n.error={message:t.message||t}):n.result=r,e?e(o):o()}))}),(function(e){if(e)return r(e);r(null,n.result)}))}}]),r}(r(662));e.exports=i},936:function(e,t,r){var n=r(30).EventEmitter,o=r(113).inherits,a=r(537),s=r(630),i=r(650),u=r(659),c=r(937),d=(r(938),r(602));function l(e){var t=this;n.call(t),t.setMaxListeners(30),e=e||{};var r={sendAsync:t._handleAsync.bind(t)},o=e.blockTrackerProvider||r;t._blockTracker=e.blockTracker||new s({provider:o,pollingInterval:e.pollingInterval||4e3,setSkipCacheFlag:!0}),t._ready=new c,t.currentBlock=null,t._providers=[]}function f(e){return{number:a.toBuffer(e.number),hash:a.toBuffer(e.hash),parentHash:a.toBuffer(e.parentHash),nonce:a.toBuffer(e.nonce),mixHash:a.toBuffer(e.mixHash),sha3Uncles:a.toBuffer(e.sha3Uncles),logsBloom:a.toBuffer(e.logsBloom),transactionsRoot:a.toBuffer(e.transactionsRoot),stateRoot:a.toBuffer(e.stateRoot),receiptsRoot:a.toBuffer(e.receiptRoot||e.receiptsRoot),miner:a.toBuffer(e.miner),difficulty:a.toBuffer(e.difficulty),totalDifficulty:a.toBuffer(e.totalDifficulty),size:a.toBuffer(e.size),extraData:a.toBuffer(e.extraData),gasLimit:a.toBuffer(e.gasLimit),gasUsed:a.toBuffer(e.gasUsed),timestamp:a.toBuffer(e.timestamp),transactions:e.transactions}}e.exports=l,o(l,n),l.prototype.start=function(){var e=this,t=this;t._ready.go(),t._blockTracker.on("latest",(function(r){t._getBlockByNumberWithRetry(r,(function(r,n){if(r)e.emit("error",r);else{if(!n)return console.log(n),void e.emit("error",new Error("Could not find block"));var o=f(n);t._setCurrentBlock(o),t.emit("rawBlock",n),t.emit("latest",n)}}))})),t._blockTracker.on("sync",t.emit.bind(t,"sync")),t._blockTracker.on("error",t.emit.bind(t,"error")),t._running=!0,t.emit("start")},l.prototype.stop=function(){var e=this;e._blockTracker.removeAllListeners(),e._running=!1,e.emit("stop")},l.prototype.isRunning=function(){return this._running},l.prototype.addProvider=function(e,t){"number"===typeof t?this._providers.splice(t,0,e):this._providers.push(e),e.setEngine(this)},l.prototype.removeProvider=function(e){var t=this._providers.indexOf(e);if(t<0)throw new Error("Provider not found.");this._providers.splice(t,1)},l.prototype.send=function(e){throw new Error("Web3ProviderEngine does not support synchronous requests.")},l.prototype.sendAsync=function(e,t){var r=this;r._ready.await((function(){Array.isArray(e)?i(e,r._handleAsync.bind(r),t):r._handleAsync(e,t)}))},l.prototype._getBlockByNumberWithRetry=function(e,t){var r=this,n=5;return void o();function o(){r._getBlockByNumber(e,a)}function a(e,r){return e?t(e):r?void t(null,r):n>0?(n--,void setTimeout((function(){o()}),1e3)):void t(null,null)}},l.prototype._getBlockByNumber=function(e,t){var r=d({method:"eth_getBlockByNumber",params:[e,!1],skipCache:!0});this._handleAsync(r,(function(e,r){return e?t(e):t(null,r.result)}))},l.prototype._handleAsync=function(e,t){var r=this,n=-1,o=null,a=null,s=[];function i(r,n){a=r,o=n,u(s,(function(e,t){e?e(a,o,t):t()}),(function(){var r={id:e.id,jsonrpc:e.jsonrpc,result:o};null!=a?(r.error={message:a.stack||a.message||a,code:-32e3},t(a,r)):t(null,r)}))}!function t(o){if(n+=1,s.unshift(o),n>=r._providers.length)i(new Error('Request for method "'+e.method+'" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));else try{r._providers[n].handleRequest(e,t,i)}catch(a){i(a)}}()},l.prototype._setCurrentBlock=function(e){this.currentBlock=e,this.emit("block",e)}},937:function(e,t,r){var n=r(30).EventEmitter,o=r(113).inherits;function a(){n.call(this),this.isLocked=!0}e.exports=a,o(a,n),a.prototype.go=function(){this.isLocked=!1,this.emit("unlock")},a.prototype.stop=function(){this.isLocked=!0,this.emit("lock")},a.prototype.await=function(e){this.isLocked?this.once("unlock",e):setTimeout(e)}},938:function(e,t,r){var n=r(599);function o(e){return"never"!==i(e)}function a(e){var t=s(e);return t>=e.params.length?e.params:"eth_getBlockByNumber"===e.method?e.params.slice(1):e.params.slice(0,t)}function s(e){switch(e.method){case"eth_getStorageAt":return 2;case"eth_getBalance":case"eth_getCode":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":return 1;case"eth_getBlockByNumber":return 0;default:return}}function i(e){switch(e.method){case"web3_clientVersion":case"web3_sha3":case"eth_protocolVersion":case"eth_getBlockTransactionCountByHash":case"eth_getUncleCountByBlockHash":case"eth_getCode":case"eth_getBlockByHash":case"eth_getTransactionByHash":case"eth_getTransactionByBlockHashAndIndex":case"eth_getTransactionReceipt":case"eth_getUncleByBlockHashAndIndex":case"eth_getCompilers":case"eth_compileLLL":case"eth_compileSolidity":case"eth_compileSerpent":case"shh_version":return"perma";case"eth_getBlockByNumber":case"eth_getBlockTransactionCountByNumber":case"eth_getUncleCountByBlockNumber":case"eth_getTransactionByBlockNumberAndIndex":case"eth_getUncleByBlockNumberAndIndex":return"fork";case"eth_gasPrice":case"eth_getBalance":case"eth_getStorageAt":case"eth_getTransactionCount":case"eth_call":case"eth_estimateGas":case"eth_getFilterLogs":case"eth_getLogs":case"eth_blockNumber":return"block";case"net_version":case"net_peerCount":case"net_listening":case"eth_syncing":case"eth_sign":case"eth_coinbase":case"eth_mining":case"eth_hashrate":case"eth_accounts":case"eth_sendTransaction":case"eth_sendRawTransaction":case"eth_newFilter":case"eth_newBlockFilter":case"eth_newPendingTransactionFilter":case"eth_uninstallFilter":case"eth_getFilterChanges":case"eth_getWork":case"eth_submitWork":case"eth_submitHashrate":case"db_putString":case"db_getString":case"db_putHex":case"db_getHex":case"shh_post":case"shh_newIdentity":case"shh_hasIdentity":case"shh_newGroup":case"shh_addToGroup":case"shh_newFilter":case"shh_uninstallFilter":case"shh_getFilterChanges":case"shh_getMessages":return"never"}}e.exports={cacheIdentifierForPayload:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!o(e))return null;var r=t.includeBlockRef,s=r?e.params:a(e);return e.method+":"+n(s)},canCache:o,blockTagForPayload:function(e){var t=s(e);if(t>=e.params.length)return null;return e.params[t]},paramsWithoutBlockTag:a,blockTagParamIndex:s,cacheTypeForPayload:i}},939:function(e,t){e.exports=function(){return Math.floor(Number.MAX_SAFE_INTEGER*Math.random())}},940:function(e,t,r){(function(t){var n=t.browser?r(221):r(941),o=r(113).inherits,a=r(602),s=r(662),i=r(942),u=i.ethErrors,c=i.serializeError;function d(e){this.rpcUrl=e.rpcUrl}e.exports=d,o(d,s),d.prototype.handleRequest=function(e,t,r){var o=this.rpcUrl,s=function(e){return{id:e.id,jsonrpc:e.jsonrpc,method:e.method,params:e.params}}(e),i=a(s);n({uri:o,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i),rejectUnauthorized:!1,timeout:2e4},(function(e,t,n){if(e)return r(c(e));switch(t.statusCode){case 405:return r(u.rpc.methodNotFound());case 504:return function(){var e=new Error("Gateway timeout. The request took too long to process. This can happen when querying logs over too wide a block range.");return r(c(e))}();case 429:return function(){var e=new Error("Too Many Requests");return r(c(e))}();default:if(200!=t.statusCode){var o="Unknown Error: "+t.body,a=new Error(o);return r(c(a))}}var s;try{s=JSON.parse(n)}catch(e){return console.error(e.stack),r(c(e))}if(s.error)return r(s.error);r(null,s.result)}))}}).call(this,r(14))},942:function(e,t,r){var n=r(663),o=n.EthereumRpcError,a=n.EthereumProviderError,s=r(738),i=s.serializeError,u=s.getMessageFromCode,c=r(944),d=r(664);e.exports={ethErrors:c,EthereumRpcError:o,EthereumProviderError:a,serializeError:i,getMessageFromCode:u,ERROR_CODES:d}},943:function(e){e.exports=JSON.parse('{"4001":{"standard":"EIP 1193","message":"User rejected the request."},"4100":{"standard":"EIP 1193","message":"The requested account and/or method has not been authorized by the user."},"4200":{"standard":"EIP 1193","message":"The requested method is not supported by this Ethereum provider."},"-32700":{"standard":"JSON RPC 2.0","message":"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{"standard":"JSON RPC 2.0","message":"The JSON sent is not a valid Request object."},"-32601":{"standard":"JSON RPC 2.0","message":"The method does not exist / is not available."},"-32602":{"standard":"JSON RPC 2.0","message":"Invalid method parameter(s)."},"-32603":{"standard":"JSON RPC 2.0","message":"Internal JSON-RPC error."},"-32000":{"standard":"EIP 1474","message":"Invalid input."},"-32001":{"standard":"EIP 1474","message":"Resource not found."},"-32002":{"standard":"EIP 1474","message":"Resource unavailable."},"-32003":{"standard":"EIP 1474","message":"Transaction rejected."},"-32004":{"standard":"EIP 1474","message":"Method not supported."}}')},944:function(e,t,r){var n=r(53),o=r(663),a=o.EthereumRpcError,s=o.EthereumProviderError,i=r(738).getMessageFromCode,u=r(664);function c(e,t){var r=l(t),o=n(r,2),s=o[0],u=o[1];return new a(e,s||i(e),u)}function d(e,t){var r=l(t),o=n(r,2),a=o[0],u=o[1];return new s(e,a||i(e),u)}function l(e){var t,r;return e&&("string"===typeof e?t=e:"object"!==typeof e||Array.isArray(e)||(t=e.message,r=e.data)),[t,r]}e.exports={rpc:{parse:function(e){return c(u.rpc.parse,e)},invalidRequest:function(e){return c(u.rpc.invalidRequest,e)},invalidParams:function(e){return c(u.rpc.invalidParams,e)},methodNotFound:function(e){return c(u.rpc.methodNotFound,e)},internal:function(e){return c(u.rpc.internal,e)},server:function(e){if(!e||"object"!==typeof e||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");var t=e.code;if(!Number.isInteger(t)||t>-32005||t<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return c(t,e)},invalidInput:function(e){return c(u.rpc.invalidInput,e)},resourceNotFound:function(e){return c(u.rpc.resourceNotFound,e)},resourceUnavailable:function(e){return c(u.rpc.resourceUnavailable,e)},transactionRejected:function(e){return c(u.rpc.transactionRejected,e)},methodNotSupported:function(e){return c(u.rpc.methodNotSupported,e)}},provider:{userRejectedRequest:function(e){return d(u.provider.userRejectedRequest,e)},unauthorized:function(e){return d(u.provider.unauthorized,e)},unsupportedMethod:function(e){return d(u.provider.unsupportedMethod,e)},custom:function(e){if(!e||"object"!==typeof e||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");var t=e.code,r=e.message,n=e.data;if(!r||"string"!==typeof r)throw new Error('"message" must be a nonempty string');return new s(t,r,n)}}}},945:function(e,t,r){var n=r(665),o=r(666),a=r(113).inherits,s=r(537),i=r(636),u=r(116),c=r(639),d=r(662),l=r(946),f=/^[0-9A-Fa-f]+$/g;function p(e){var t=this;t.nonceLock=c(1),e.getAccounts&&(t.getAccounts=e.getAccounts),e.processTransaction&&(t.processTransaction=e.processTransaction),e.processMessage&&(t.processMessage=e.processMessage),e.processPersonalMessage&&(t.processPersonalMessage=e.processPersonalMessage),e.processTypedMessage&&(t.processTypedMessage=e.processTypedMessage),t.approveTransaction=e.approveTransaction||t.autoApprove,t.approveMessage=e.approveMessage||t.autoApprove,t.approvePersonalMessage=e.approvePersonalMessage||t.autoApprove,t.approveDecryptMessage=e.approveDecryptMessage||t.autoApprove,t.approveEncryptionPublicKey=e.approveEncryptionPublicKey||t.autoApprove,t.approveTypedMessage=e.approveTypedMessage||t.autoApprove,e.signTransaction&&(t.signTransaction=e.signTransaction||y("signTransaction")),e.signMessage&&(t.signMessage=e.signMessage||y("signMessage")),e.signPersonalMessage&&(t.signPersonalMessage=e.signPersonalMessage||y("signPersonalMessage")),e.decryptMessage&&(t.decryptMessage=e.decryptMessage||y("decryptMessage")),e.encryptionPublicKey&&(t.encryptionPublicKey=e.encryptionPublicKey||y("encryptionPublicKey")),e.signTypedMessage&&(t.signTypedMessage=e.signTypedMessage||y("signTypedMessage")),e.recoverPersonalSignature&&(t.recoverPersonalSignature=e.recoverPersonalSignature),e.publishTransaction&&(t.publishTransaction=e.publishTransaction),t.estimateGas=e.estimateGas||t.estimateGas,t.getGasPrice=e.getGasPrice||t.getGasPrice}function h(e){return e.toLowerCase()}function g(e){var t=s.addHexPrefix(e);return s.isValidAddress(t)}function v(e){var t=s.addHexPrefix(e);return!s.isValidAddress(t)&&m(e)}function m(e){return"string"===typeof e&&("0x"===e.slice(0,2)&&e.slice(2).match(f))}function y(e){return function(t,r){r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "'+e+'" fn in constructor options'))}}e.exports=p,a(p,d),p.prototype.handleRequest=function(e,t,r){var o,a,s,i,c,d=this;switch(d._parityRequests={},d._parityRequestCount=0,e.method){case"eth_coinbase":return void d.getAccounts((function(e,t){if(e)return r(e);var n=t[0]||null;r(null,n)}));case"eth_accounts":return void d.getAccounts((function(e,t){if(e)return r(e);r(null,t)}));case"eth_sendTransaction":return o=e.params[0],void n([function(e){return d.validateTransaction(o,e)},function(e){return d.processTransaction(o,e)}],r);case"eth_signTransaction":return o=e.params[0],void n([function(e){return d.validateTransaction(o,e)},function(e){return d.processSignTransaction(o,e)}],r);case"eth_sign":return c=e.params[0],i=e.params[1],s=e.params[2]||{},a=u(s,{from:c,data:i}),void n([function(e){return d.validateMessage(a,e)},function(e){return d.processMessage(a,e)}],r);case"personal_sign":return function(){var t=e.params[0];if(v(e.params[1])&&g(t)){"[message, address]. This was previously handled incorrectly, ","and has been corrected automatically. ","Please switch this param order for smooth behavior in the future.",console.warn("The eth_personalSign method requires params ordered [message, address]. This was previously handled incorrectly, and has been corrected automatically. Please switch this param order for smooth behavior in the future."),c=e.params[0],i=e.params[1]}else i=e.params[0],c=e.params[1];s=e.params[2]||{},a=u(s,{from:c,data:i}),n([function(e){return d.validatePersonalMessage(a,e)},function(e){return d.processPersonalMessage(a,e)}],r)}();case"eth_decryptMessage":return function(){var t=e.params[0];if(v(e.params[1])&&g(t)){"[message, address]. This was previously handled incorrectly, ","and has been corrected automatically. ","Please switch this param order for smooth behavior in the future.",console.warn("The eth_decryptMessage method requires params ordered [message, address]. This was previously handled incorrectly, and has been corrected automatically. Please switch this param order for smooth behavior in the future."),c=e.params[0],i=e.params[1]}else i=e.params[0],c=e.params[1];s=e.params[2]||{},a=u(s,{from:c,data:i}),n([function(e){return d.validateDecryptMessage(a,e)},function(e){return d.processDecryptMessage(a,e)}],r)}();case"encryption_public_key":return function(){var t=e.params[0];n([function(e){return d.validateEncryptionPublicKey(t,e)},function(e){return d.processEncryptionPublicKey(t,e)}],r)}();case"personal_ecRecover":return function(){i=e.params[0];var t=e.params[1];s=e.params[2]||{},a=u(s,{sig:t,data:i}),d.recoverPersonalSignature(a,r)}();case"eth_signTypedData":case"eth_signTypedData_v3":case"eth_signTypedData_v4":return function(){var t=e.params[0],o=e.params[1];g(t)?(c=t,i=o):(i=t,c=o),s=e.params[2]||{},a=u(s,{from:c,data:i}),n([function(e){return d.validateTypedMessage(a,e)},function(e){return d.processTypedMessage(a,e)}],r)}();case"parity_postTransaction":return o=e.params[0],void d.parityPostTransaction(o,r);case"parity_postSign":return c=e.params[0],i=e.params[1],void d.parityPostSign(c,i,r);case"parity_checkRequest":return function(){var t=e.params[0];d.parityCheckRequest(t,r)}();case"parity_defaultAccount":return void d.getAccounts((function(e,t){if(e)return r(e);var n=t[0]||null;r(null,n)}));default:return void t()}},p.prototype.getAccounts=function(e){e(null,[])},p.prototype.processTransaction=function(e,t){var r=this;n([function(t){return r.approveTransaction(e,t)},function(e,t){return r.checkApproval("transaction",e,t)},function(t){return r.finalizeAndSubmitTx(e,t)}],t)},p.prototype.processSignTransaction=function(e,t){var r=this;n([function(t){return r.approveTransaction(e,t)},function(e,t){return r.checkApproval("transaction",e,t)},function(t){return r.finalizeTx(e,t)}],t)},p.prototype.processMessage=function(e,t){var r=this;n([function(t){return r.approveMessage(e,t)},function(e,t){return r.checkApproval("message",e,t)},function(t){return r.signMessage(e,t)}],t)},p.prototype.processPersonalMessage=function(e,t){var r=this;n([function(t){return r.approvePersonalMessage(e,t)},function(e,t){return r.checkApproval("message",e,t)},function(t){return r.signPersonalMessage(e,t)}],t)},p.prototype.processDecryptMessage=function(e,t){var r=this;n([function(t){return r.approveDecryptMessage(e,t)},function(e,t){return r.checkApproval("decryptMessage",e,t)},function(t){return r.decryptMessage(e,t)}],t)},p.prototype.processEncryptionPublicKey=function(e,t){var r=this;n([function(t){return r.approveEncryptionPublicKey(e,t)},function(e,t){return r.checkApproval("encryptionPublicKey",e,t)},function(t){return r.encryptionPublicKey(e,t)}],t)},p.prototype.processTypedMessage=function(e,t){var r=this;n([function(t){return r.approveTypedMessage(e,t)},function(e,t){return r.checkApproval("message",e,t)},function(t){return r.signTypedMessage(e,t)}],t)},p.prototype.autoApprove=function(e,t){t(null,!0)},p.prototype.checkApproval=function(e,t,r){r(t?null:new Error("User denied "+e+" signature."))},p.prototype.parityPostTransaction=function(e,t){var r=this,n=r._parityRequestCount,o="0x".concat(n.toString(16));r._parityRequestCount++,r.emitPayload({method:"eth_sendTransaction",params:[e]},(function(e,t){if(e)r._parityRequests[o]={error:e};else{var n=t.result;r._parityRequests[o]=n}})),t(null,o)},p.prototype.parityPostSign=function(e,t,r){var n=this,o=n._parityRequestCount,a="0x".concat(o.toString(16));n._parityRequestCount++,n.emitPayload({method:"eth_sign",params:[e,t]},(function(e,t){if(e)n._parityRequests[a]={error:e};else{var r=t.result;n._parityRequests[a]=r}})),r(null,a)},p.prototype.parityCheckRequest=function(e,t){var r=this._parityRequests[e]||null;return r?r.error?t(r.error):void t(null,r):t(null,null)},p.prototype.recoverPersonalSignature=function(e,t){var r;try{r=i.recoverPersonalSignature(e)}catch(n){return t(n)}t(null,r)},p.prototype.validateTransaction=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign transaction."));this.validateSender(e.from,(function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to sign transaction for this address: "'.concat(e.from,'"')))}))},p.prototype.validateMessage=function(e,t){if(void 0===e.from)return t(new Error("Undefined address - from address required to sign message."));this.validateSender(e.from,(function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from,'"')))}))},p.prototype.validatePersonalMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign personal message.")):void 0===e.data?t(new Error("Undefined message - message required to sign personal message.")):m(e.data)?void this.validateSender(e.from,(function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from,'"')))})):t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))},p.prototype.validateDecryptMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to decrypt message.")):void 0===e.data?t(new Error("Undefined message - message required to decrypt message.")):m(e.data)?void this.validateSender(e.from,(function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to decrypt message for this address: "'.concat(e.from,'"')))})):t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."))},p.prototype.validateEncryptionPublicKey=function(e,t){this.validateSender(e,(function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to obtain encryption public key for this address: "'.concat(e,'"')))}))},p.prototype.validateTypedMessage=function(e,t){return void 0===e.from?t(new Error("Undefined address - from address required to sign typed data.")):void 0===e.data?t(new Error("Undefined data - message required to sign typed data.")):void this.validateSender(e.from,(function(r,n){return r?t(r):n?void t():t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from,'"')))}))},p.prototype.validateSender=function(e,t){if(!e)return t(null,!1);this.getAccounts((function(r,n){if(r)return t(r);var o=-1!==n.map(h).indexOf(e.toLowerCase());t(null,o)}))},p.prototype.finalizeAndSubmitTx=function(e,t){var r=this;r.nonceLock.take((function(){n([r.fillInTxExtras.bind(r,e),r.signTransaction.bind(r),r.publishTransaction.bind(r)],(function(e,n){if(r.nonceLock.leave(),e)return t(e);t(null,n)}))}))},p.prototype.finalizeTx=function(e,t){var r=this;r.nonceLock.take((function(){n([r.fillInTxExtras.bind(r,e),r.signTransaction.bind(r)],(function(n,o){if(r.nonceLock.leave(),n)return t(n);t(null,{raw:o,tx:e})}))}))},p.prototype.publishTransaction=function(e,t){this.emitPayload({method:"eth_sendRawTransaction",params:[e]},(function(e,r){if(e)return t(e);t(null,r.result)}))},p.prototype.estimateGas=function(e,t){l(this.engine,e,t)},p.prototype.getGasPrice=function(e){this.emitPayload({method:"eth_gasPrice",params:[]},(function(t,r){if(t)return e(t);e(null,r.result)}))},p.prototype.fillInTxExtras=function(e,t){var r=this,n=e.from,a={};void 0===e.gasPrice&&(a.gasPrice=r.getGasPrice.bind(r)),void 0===e.nonce&&(a.nonce=r.emitPayload.bind(r,{method:"eth_getTransactionCount",params:[n,"pending"]})),void 0===e.gas&&(a.gas=r.estimateGas.bind(r,function(e){return{from:e.from,to:e.to,value:e.value,data:e.data,gas:e.gas,gasPrice:e.gasPrice,nonce:e.nonce}}(e))),o(a,(function(r,n){if(r)return t(r);var o={};n.gasPrice&&(o.gasPrice=n.gasPrice),n.nonce&&(o.nonce=n.nonce.result),n.gas&&(o.gas=n.gas),t(null,u(e,o))}))}},946:function(e,t,r){var n=r(602);e.exports=function(e,t,r){e.sendAsync(n({method:"eth_estimateGas",params:[t]}),(function(e,t){if(e)return"no contract code at given address"===e.message?r(null,"0xcf08"):r(e);r(null,t.result)}))}},947:function(e,t,r){var n=r(37),o=r(75),a=r(76),s=r(739),i=r(644),u=function(e){"use strict";o(r,e);var t=a(r);function r(){return n(this,r),t.call(this,(function(e){var t=e.blockTracker,r=e.provider,n=e.engine,o=i({blockTracker:t,provider:r}),a=o.events,s=o.middleware;return a.on("notification",(function(e){return n.emit("data",null,e)})),s}))}return r}(s);e.exports=u},948:function(e,t,r){var n=r(37),o=r(75),a=r(76),s=r(739),i=r(601),u=function(e){"use strict";o(r,e);var t=a(r);function r(){return n(this,r),t.call(this,(function(e){var t=e.blockTracker,r=e.provider;e.engine;return i({blockTracker:t,provider:r})}))}return r}(s);e.exports=u}}]);
//# sourceMappingURL=1.09760e7a.chunk.js.map