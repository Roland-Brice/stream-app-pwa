/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/app.animations.css","1ccd01154539468cc4cc52a27fdacab2"],["/app.animations.js","c5673ef9d2bc4a54e4b21a258d171580"],["/app.config.js","0555fd4237c2d543fa41f40c1b33d8f7"],["/app.css","5537a59021d0b66c596913a819bec5ce"],["/app.module.js","6e60bbcf57701e5806ee6e135c32c2ab"],["/app.spec.js","8c9ee196bb7080ae0b370c29c51f17c1"],["/audio/audio.css","58ac0ba674e50d1cea47c57304be2af2"],["/audio/audio.html","39c89cca62dedf2fff5e6d5dea37c924"],["/audio/audio.js","8f68b8471ad296ebdb47461acabceddd"],["/audio/audio1.html","0267ea71f7d382798e38416dd15b27bf"],["/audio/audio1.js","8f6688503f4636dd1b12c743faf79392"],["/audio/bwd.png","e915ede972207bb39cbb4cc11ec3b24e"],["/audio/forward.png","04e8a8dd9ffcbc4efe7e774ee9aae732"],["/audio/fwd.png","0f480ad02fc794bbdc4c4740ae7b1407"],["/audio/images.png","cb3e57689e5b6e830b7b7402b234f44f"],["/audio/index.png","7f602fac8cda0a9ec5d9594ccdacef44"],["/audio/logo.png","fe6e7a93918ccdc7c69be579fd5eccc5"],["/audio/pause.png","d7d03d83928546ee86cba0bb5b74214c"],["/audio/play.jpg","6b93f6d0438921087e1908b0bc85182d"],["/audio/playy.jpg","2c42595e16b0d441dabb1b6670f927d3"],["/audio/prv-th.png","4bbfe91aa8bae4e137466f43b71c5cb1"],["/bower_components/angular-animate/angular-animate.js","e51a5ce7b2e98b6e5fd622c8ef1a199a"],["/bower_components/angular-animate/angular-animate.min.js","fb4ae45e62f1c6956679f4711c225b80"],["/bower_components/angular-animate/index.js","eca59ea32960ae595dd18ad9480185b1"],["/bower_components/angular-mocks/angular-mocks.js","8647cbc10d5ba9cd54fb5a3587b7fb9f"],["/bower_components/angular-mocks/ngAnimateMock.js","ed7195f7cbba99b06f95a715d6027375"],["/bower_components/angular-mocks/ngMock.js","38d4e7768ae37daa27dd22d750d062fd"],["/bower_components/angular-mocks/ngMockE2E.js","afaf184834005c99ba7f80720439dba2"],["/bower_components/angular-resource/angular-resource.js","94057d75def9dc6fda8d31ef47e044db"],["/bower_components/angular-resource/angular-resource.min.js","e260665695e31fb9ce9290da1d045d8c"],["/bower_components/angular-resource/index.js","9c4b1d1506e42984b0ba6feaf20e5943"],["/bower_components/angular-route/angular-route.js","af8451c8133c29f745ef0328dde15df9"],["/bower_components/angular-route/angular-route.min.js","509d359ea63ba4f79c4e6bec32fa13b3"],["/bower_components/angular-route/index.js","a3320f99fcd749cc422bb5add3888b34"],["/bower_components/angular/angular-csp.css","5d7bf1728c2447221cad6c6263557306"],["/bower_components/angular/angular.js","32c1fc614a07225c035770296e4eea2d"],["/bower_components/angular/angular.min.js","c2ad694ba54a332992cc370fafd0d367"],["/bower_components/angular/index.js","0d848853205d22ab8be985876aec948a"],["/bower_components/bootstrap/Gruntfile.js","87045c78d2be8288de1d2efbba487953"],["/bower_components/bootstrap/dist/css/bootstrap-theme.css","b9b46bcc4dad6cc90fc4f95073c50735"],["/bower_components/bootstrap/dist/css/bootstrap-theme.min.css","ab6b02efeaf178e0247b9504051472fb"],["/bower_components/bootstrap/dist/css/bootstrap.css","b1a97090fb5718ed20e8b296ef19a22e"],["/bower_components/bootstrap/dist/css/bootstrap.min.css","ec3bb52a00e176a7181d454dffaea219"],["/bower_components/bootstrap/dist/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/bower_components/bootstrap/dist/js/bootstrap.min.js","5869c96cc8f19086aee625d670d741f9"],["/bower_components/bootstrap/dist/js/npm.js","ccb7f3909e30b1eb8f65a24393c6e12b"],["/bower_components/bootstrap/grunt/bs-commonjs-generator.js","5fe1dfe91713b6707426ae8409d8dd5d"],["/bower_components/bootstrap/grunt/bs-glyphicons-data-generator.js","5dd2716ebfffc9ef3f28fe67e8ae51d1"],["/bower_components/bootstrap/grunt/bs-lessdoc-parser.js","c38c42bedfd206a384eff550872c76e3"],["/bower_components/bootstrap/grunt/bs-raw-files-generator.js","62dc129ecc688d30023efad29e47c43e"],["/bower_components/bootstrap/grunt/change-version.js","6ed38b1232de40ee64c0691d60c6518a"],["/bower_components/bootstrap/js/affix.js","76d0f746d06d24675053cf712c832ff8"],["/bower_components/bootstrap/js/alert.js","facbbd4e8afa141b7341ea417d8af151"],["/bower_components/bootstrap/js/button.js","c4c661f012bbd357893f925e18de01a2"],["/bower_components/bootstrap/js/carousel.js","fdcec9762e6028f443113b7664fdff4f"],["/bower_components/bootstrap/js/collapse.js","d76d9e35b465bc2773ed6306169524bc"],["/bower_components/bootstrap/js/dropdown.js","45aa760b64065a1d9025f9f3982f8cfe"],["/bower_components/bootstrap/js/modal.js","5cc53746133c2e8e639a6df9a299a14a"],["/bower_components/bootstrap/js/popover.js","0d19a9c5c9ccdb8d81583badcebb57f6"],["/bower_components/bootstrap/js/scrollspy.js","916e7d014861d391f425951bc6a6b9b1"],["/bower_components/bootstrap/js/tab.js","2a1d3172ce3411d32338e466ae507601"],["/bower_components/bootstrap/js/tooltip.js","dd4086570011e65a42a27de92e33b418"],["/bower_components/bootstrap/js/transition.js","db7d039381f3a80c478fb67652c30155"],["/bower_components/bootstrap/package.js","a21c03dc818cd8fec4eef90f56ac1a17"],["/bower_components/jquery/dist/core.js","a9fa8dc408292a14bfd0f36476972876"],["/bower_components/jquery/dist/jquery.js","6a07da9fae934baf3f749e876bbfdd96"],["/bower_components/jquery/dist/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/bower_components/jquery/dist/jquery.slim.js","450d478c0491cf0b2d365997faff70dd"],["/bower_components/jquery/dist/jquery.slim.min.js","99b0a83cf1b0b1e2cb16041520e87641"],["/bower_components/jquery/external/sizzle/dist/sizzle.js","88f56d86d94c7e2f4589a9312c360c55"],["/bower_components/jquery/external/sizzle/dist/sizzle.min.js","a7da9ea7bd03729fae7b8a8c7a596ed1"],["/bower_components/jquery/src/ajax.js","8fdb7c9b56b0e31725301a1b49edcd2d"],["/bower_components/jquery/src/ajax/jsonp.js","ef3213d86b390afe6d40ae210b4ecb08"],["/bower_components/jquery/src/ajax/load.js","0e36f31298013142e95dfbb507acce5e"],["/bower_components/jquery/src/ajax/parseXML.js","1dc77355e5b4154006c86ed894e5095d"],["/bower_components/jquery/src/ajax/script.js","9878bca97ea247869613a955084e79c5"],["/bower_components/jquery/src/ajax/var/location.js","1effe93501b51c83d7825474e73a8aae"],["/bower_components/jquery/src/ajax/var/nonce.js","6390675839bac890901126c5411ad974"],["/bower_components/jquery/src/ajax/var/rquery.js","0cea5be4c1cb48604c76fe1e49501d9a"],["/bower_components/jquery/src/ajax/xhr.js","ee3af0d4bfeed7b0aa74990748c81b48"],["/bower_components/jquery/src/attributes.js","e3b938fc47b1ddf14846fc5cbede18a1"],["/bower_components/jquery/src/attributes/attr.js","e4535aeb388bd9f3d14c373bba24bcd5"],["/bower_components/jquery/src/attributes/classes.js","85c5351e36fc4bb816ac27fd6a179ab9"],["/bower_components/jquery/src/attributes/prop.js","a3b5116692ba1c0c61d9daec297fa5e9"],["/bower_components/jquery/src/attributes/support.js","87c02d854903b60b55c82f12e5cbb951"],["/bower_components/jquery/src/attributes/val.js","a823702dd2bfdced63944843de5be7ea"],["/bower_components/jquery/src/callbacks.js","ba5548d6bf5f053eddc8cec1195b29ac"],["/bower_components/jquery/src/core.js","a9fa8dc408292a14bfd0f36476972876"],["/bower_components/jquery/src/core/DOMEval.js","7f8788eb4b9eca172bb4ee0f613546ca"],["/bower_components/jquery/src/core/access.js","c3eb1451f1fba647f0e420ab92db4002"],["/bower_components/jquery/src/core/camelCase.js","b71ee379b47f47cccbb1014a189aa634"],["/bower_components/jquery/src/core/init.js","a6b3173e0f82e4e3282d0a9e465ee56e"],["/bower_components/jquery/src/core/nodeName.js","a0a157a603ed1550a056bddabc120c74"],["/bower_components/jquery/src/core/parseHTML.js","984984492643b1081f812b27558d4fd7"],["/bower_components/jquery/src/core/ready-no-deferred.js","06c7cce2a2bc597e7aeb7e7ad82765ab"],["/bower_components/jquery/src/core/ready.js","057984e702d0f10267fb266553151572"],["/bower_components/jquery/src/core/readyException.js","a4eaadadf4d1420be6f30e03ba32c0b2"],["/bower_components/jquery/src/core/stripAndCollapse.js","a0c3d45cff620ce773f146a51cf67ead"],["/bower_components/jquery/src/core/support.js","a1fdd851ac2e51ceac1e388460c9ea9b"],["/bower_components/jquery/src/core/toType.js","1fe108a028d710cd5b6b89b293e09fff"],["/bower_components/jquery/src/core/var/rsingleTag.js","d6ac5fb411468c45818898044af9ccc8"],["/bower_components/jquery/src/css.js","e51101bc98de0b33ea83462ff0a151a3"],["/bower_components/jquery/src/css/addGetHookIf.js","39e2ba4bf431074cde3dcef95d1ea269"],["/bower_components/jquery/src/css/adjustCSS.js","57d330b837c9fd6b5b9228bf4d2af8fc"],["/bower_components/jquery/src/css/curCSS.js","e46534815e68ef0df2938cf5c4fcb424"],["/bower_components/jquery/src/css/hiddenVisibleSelectors.js","46ad6606fc658bf81331ac866c8dff05"],["/bower_components/jquery/src/css/showHide.js","54cab17f823997ec76defd99a42fba25"],["/bower_components/jquery/src/css/support.js","db85f9da12e975332524cd9eb7ae75e6"],["/bower_components/jquery/src/css/var/cssExpand.js","97946b11fa6b665f8107a0355ebd21a9"],["/bower_components/jquery/src/css/var/getStyles.js","6c085f1a5b10741fb4f47652d826e8b7"],["/bower_components/jquery/src/css/var/isHiddenWithinTree.js","3ab2e617a068a7281d1aa4bd5c00986b"],["/bower_components/jquery/src/css/var/rboxStyle.js","acd42f54a6af31f365cb4ce43d3f1aad"],["/bower_components/jquery/src/css/var/rnumnonpx.js","76441e4d11353acf6c624b9174c10d28"],["/bower_components/jquery/src/css/var/swap.js","caec1d33fb755d503bba6dde7135b888"],["/bower_components/jquery/src/data.js","c7a2ac0c7a0b105259f5d90d6b60ad91"],["/bower_components/jquery/src/data/Data.js","5ac49569ccc87cdae270f7c195c03abf"],["/bower_components/jquery/src/data/var/acceptData.js","784eb09770f6731c4fb5c57207955cfb"],["/bower_components/jquery/src/data/var/dataPriv.js","5793e35236c3a32cb1e4a6b4401211a3"],["/bower_components/jquery/src/data/var/dataUser.js","5793e35236c3a32cb1e4a6b4401211a3"],["/bower_components/jquery/src/deferred.js","e706325bb1d3f2c5f27a45f3ea920726"],["/bower_components/jquery/src/deferred/exceptionHook.js","bdd1af0b6da071ae9fb638040e56493e"],["/bower_components/jquery/src/deprecated.js","8fe12d6c98bc4358ed31807c9bd382c0"],["/bower_components/jquery/src/dimensions.js","ceffc4af725cba9ea206ba3356de57f0"],["/bower_components/jquery/src/effects.js","e3b3b14cc689006326b83ebaf92d4127"],["/bower_components/jquery/src/effects/Tween.js","1ededd3dbfc9d3ee6bb1ccd74a947c04"],["/bower_components/jquery/src/effects/animatedSelector.js","c6282b6a67db32fcf5e5ed312d8ae626"],["/bower_components/jquery/src/event.js","56e6435eb06e9015898809041fdda483"],["/bower_components/jquery/src/event/ajax.js","ab2368042f88d56a4e8eb7ef0885d52d"],["/bower_components/jquery/src/event/alias.js","4d207f908b195d3cf91e31510e6b1165"],["/bower_components/jquery/src/event/focusin.js","a49297140eed77038234070114fc9e10"],["/bower_components/jquery/src/event/support.js","911a4c1a08cc3b6401cb2d046e148f6a"],["/bower_components/jquery/src/event/trigger.js","38cd36d76c488a95eb5a51f4a018fb59"],["/bower_components/jquery/src/exports/amd.js","0ce022aabd17f908da7d12221283b8ff"],["/bower_components/jquery/src/exports/global.js","17721874f4081fd75192ae8752ca1fe8"],["/bower_components/jquery/src/jquery.js","684d47f888a3c40366bc0bfc18bd6cb7"],["/bower_components/jquery/src/manipulation.js","6c4c75f03e4587ce6bb1f3e560a8083f"],["/bower_components/jquery/src/manipulation/_evalUrl.js","273280943dfd7c57f45e531df20aa797"],["/bower_components/jquery/src/manipulation/buildFragment.js","d6f05070b9c8a67230603f33906d1ad3"],["/bower_components/jquery/src/manipulation/getAll.js","9485d5b6e9a8669242045d424b4fe61b"],["/bower_components/jquery/src/manipulation/setGlobalEval.js","45e10fe7bb054db32f6177ac8c190997"],["/bower_components/jquery/src/manipulation/support.js","7278ee59c62f54227229eab552dbe041"],["/bower_components/jquery/src/manipulation/var/rcheckableType.js","5f76cc651dda52520c04b10e96e56604"],["/bower_components/jquery/src/manipulation/var/rscriptType.js","83456aa7fecc9142aa110cd77099225e"],["/bower_components/jquery/src/manipulation/var/rtagName.js","2fbe6bcebf3ef64351e4738514bee668"],["/bower_components/jquery/src/manipulation/wrapMap.js","bd6bd7cfc997ee4dbe32d0f46719b9a6"],["/bower_components/jquery/src/offset.js","e933cae61dd8e11e760eac5ecee4ea77"],["/bower_components/jquery/src/queue.js","594e10b2dde30b339a323d240418f620"],["/bower_components/jquery/src/queue/delay.js","6b3b3baf444126f92d5fb08ad67e78ec"],["/bower_components/jquery/src/selector-native.js","09e3c6e382c9dc5e8b4ff8c0684dd0a8"],["/bower_components/jquery/src/selector-sizzle.js","e552c731b58c5253574ff6a4c72730df"],["/bower_components/jquery/src/selector.js","254a3ebd012ddf4c1268afb301fb0804"],["/bower_components/jquery/src/serialize.js","7527c184b4ea9e716e7d8495a073b272"],["/bower_components/jquery/src/traversing.js","7d76358e1463f0396d8ecfbc6f55c7f6"],["/bower_components/jquery/src/traversing/findFilter.js","f0664baaa0027bfb03f3fb741b302c47"],["/bower_components/jquery/src/traversing/var/dir.js","3e37162fe277c99009aef1bc3576cf66"],["/bower_components/jquery/src/traversing/var/rneedsContext.js","f8237f8e3c92d1846c801b8900e70285"],["/bower_components/jquery/src/traversing/var/siblings.js","872fe79c18c63237b878541e25f65792"],["/bower_components/jquery/src/var/ObjectFunctionString.js","c81564edaa40fb0aa2a6ff6eb363f2d6"],["/bower_components/jquery/src/var/arr.js","d88b9159a6350fa26ad2755c2c803842"],["/bower_components/jquery/src/var/class2type.js","8008cada8581f6317a43762b481af585"],["/bower_components/jquery/src/var/concat.js","7479d21ee167a8c9c5c0c6de20944e49"],["/bower_components/jquery/src/var/document.js","28ad506eb48f42c7144716e7f781513c"],["/bower_components/jquery/src/var/documentElement.js","b42747c44c5f46813de9cfc409863bd9"],["/bower_components/jquery/src/var/fnToString.js","779df484d863e0154c7d27ad74144b4b"],["/bower_components/jquery/src/var/getProto.js","cc39bf4d74b2346688c1289d64587ae9"],["/bower_components/jquery/src/var/hasOwn.js","ea807ca4509ac0a9337ee60c8e756acd"],["/bower_components/jquery/src/var/indexOf.js","91f549f495364b948fc51d475276baff"],["/bower_components/jquery/src/var/isFunction.js","d36ffb940132bc8deddfc84a4a0cc401"],["/bower_components/jquery/src/var/isWindow.js","fca9e9ad697b59e79425529af437401d"],["/bower_components/jquery/src/var/pnum.js","8bb2e88e531e9cd2bc9059df5b5f0595"],["/bower_components/jquery/src/var/push.js","0fbcbedbfc38e86883db047628486e6b"],["/bower_components/jquery/src/var/rcssNum.js","d05e443af01d56ae50f9ae29b516cdbb"],["/bower_components/jquery/src/var/rnothtmlwhite.js","9e3e63909ac61a5a1b1a9db11847cb99"],["/bower_components/jquery/src/var/slice.js","52a787d2ca995b614bd97d5bf8ae5218"],["/bower_components/jquery/src/var/support.js","2d3a2082ece44cf22f02c83ca6992615"],["/bower_components/jquery/src/var/toString.js","1a5b3ede2aafabfb4b6b1795a012b361"],["/bower_components/jquery/src/wrap.js","d70039df56a311b4db73e78c455398e0"],["/core/core.module.js","92dfe04aed7519a39508ab182912033c"],["/core/song/song.module.js","cb8e25493c8ad0b0d375189a4e992cdb"],["/core/song/song.service.js","702beb6fb7c32d8b23267704809e45b1"],["/images/audio1.png","f921c2c46c0764513bc5dd5ab79ab546"],["/images/audio2.jpg","b164a08511c7e914784ea4f05ce3ee26"],["/images/audio3.png","8b8cebf2b8b813a903c276fb6e643018"],["/images/yeoman.png","42092f929161dae9c08a21bfb46ece4d"],["/images/yeoman144.png","8f13d43443ebe18dd1d4d163287b356b"],["/images/yeoman192.png","731d8be9b6c582ba5faa37c89c0364ec"],["/images/yeoman512.png","f9024e33612321054ee534bd95ed4ac5"],["/index.html","2699595414f431d721b39740eaf6404d"],["/song-list/song-list.component.js","754b462ef9e04a4504bf152257d6d133"],["/song-list/song-list.module.js","fe5ab46a6a9024d3f6fe4c5497fd2d9e"],["/song-list/song-list.template.html","c798d166c80e991e7f78b46f809603e1"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







