/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");


class ThreeJSContainer {
    scene;
    light;
    cloud;
    particleVelocity;
    constructor() {
    }
    // レンダラーのDOMを作成
    createRendererDOM = (width, height, cameraPos) => {
        const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x000000));
        renderer.shadowMap.enabled = true;
        // カメラの設定
        const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0));
        const orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, renderer.domElement);
        this.createScene();
        // アニメーションループ
        const render = () => {
            orbitControls.update();
            renderer.render(this.scene, camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    };
    // シーンの作成
    createScene = () => {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
        // 地面の作成
        const phongMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial();
        const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(40, 40);
        const planeMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(planeGeometry, phongMaterial);
        planeMesh.material.side = three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide; // 両面
        planeMesh.rotateX(-Math.PI / 2);
        // シーンへ追加
        this.scene.add(planeMesh);
        // 3段雪だるまの作成
        let createSnowman1 = () => {
            const bodyMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0xffffff });
            const sphereBottom = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(1.5, 32, 32);
            const sphereMiddle = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(1, 32, 32);
            const sphereTop = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.75, 32, 32);
            const snowmanBottom = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(sphereBottom, bodyMaterial);
            snowmanBottom.position.set(-3, 1.5, 8);
            this.scene.add(snowmanBottom);
            const snowmanMiddle = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(sphereMiddle, bodyMaterial);
            snowmanMiddle.position.set(-3, 3.5, 8);
            this.scene.add(snowmanMiddle);
            const snowmanTop = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(sphereTop, bodyMaterial);
            snowmanTop.position.set(-3, 5, 8);
            this.scene.add(snowmanTop);
            // 目と鼻の追加
            const eyeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x000000 });
            const eyeGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.1, 32, 32);
            const eyeLeft = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(eyeGeometry, eyeMaterial);
            eyeLeft.position.set(-3.25, 5, 8.75);
            this.scene.add(eyeLeft);
            const eyeRight = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(eyeGeometry, eyeMaterial);
            eyeRight.position.set(-2.75, 5, 8.75);
            this.scene.add(eyeRight);
            const noseMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0xff0000 });
            const noseGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.ConeGeometry(0.2, 1, 32);
            const nose = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(noseGeometry, noseMaterial);
            nose.position.set(-3, 4.95, 8.75);
            nose.rotation.x = Math.PI / 2;
            this.scene.add(nose);
        };
        createSnowman1();
        // 太っちょ雪だるまの作成2
        let createSnowman2 = () => {
            const bodyMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0xffffff });
            const sphereBottom = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(1.5, 32, 32);
            const sphereTop = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(1, 32, 32);
            const snowmanBottom = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(sphereBottom, bodyMaterial);
            snowmanBottom.position.set(3, 1.5, 8);
            this.scene.add(snowmanBottom);
            const snowmanTop = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(sphereTop, bodyMaterial);
            snowmanTop.position.set(3, 3.5, 8);
            this.scene.add(snowmanTop);
            // 目と鼻とボタンの追加
            const eyeMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x000000 });
            const eyeGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.1, 32, 32);
            const eyeLeft = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(eyeGeometry, eyeMaterial);
            eyeLeft.position.set(2.75, 3.5, 9);
            this.scene.add(eyeLeft);
            const eyeRight = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(eyeGeometry, eyeMaterial);
            eyeRight.position.set(3.25, 3.5, 9);
            this.scene.add(eyeRight);
            const noseMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0xff0000 });
            const noseGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.ConeGeometry(0.2, 1, 32);
            const nose = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(noseGeometry, noseMaterial);
            nose.position.set(3, 3.25, 9);
            nose.rotation.x = Math.PI / 2;
            this.scene.add(nose);
            const buttonMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x0000ff });
            const buttonGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(0.1, 32, 32);
            const buttonBottom = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(buttonGeometry, buttonMaterial);
            buttonBottom.position.set(3, 1.5, 9.5);
            this.scene.add(buttonBottom);
            const buttonMiddle = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(buttonGeometry, buttonMaterial);
            buttonMiddle.position.set(3, 2, 9.45);
            this.scene.add(buttonMiddle);
            const buttonTop = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(buttonGeometry, buttonMaterial);
            buttonTop.position.set(3, 2.5, 9.15);
            this.scene.add(buttonTop);
        };
        createSnowman2();
        // 家の作成
        let createHouse = () => {
            const wallMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0xdeb887 });
            const roofMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0xffffff });
            // 壁の作成
            const wallGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(10, 5, 10);
            const walls = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(wallGeometry, wallMaterial);
            walls.position.set(0, 2.5, -4);
            this.scene.add(walls);
            // 屋根の作成
            const roofGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.ConeGeometry(8, 6, 8);
            const roof = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(roofGeometry, roofMaterial);
            roof.position.set(0, 8, -4);
            roof.rotation.y = Math.PI / 4;
            this.scene.add(roof);
            // ドアの作成
            const doorMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x8b4513 });
            const doorGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(1.5, 3, 0.1);
            const door = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(doorGeometry, doorMaterial);
            door.position.set(0, 1.5, 1);
            this.scene.add(door);
        };
        createHouse();
        // 木の作成
        let createTree = (x, z) => {
            const trunkMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x8B4513 });
            const leavesMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x2f4f4f });
            // 幹の作成
            const trunkGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.5, 0.5, 3);
            const trunk = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(trunkGeometry, trunkMaterial);
            trunk.position.set(x, 1.5, z);
            this.scene.add(trunk);
            // 葉の作成
            const leavesGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.ConeGeometry(2, 4, 8);
            const leaves = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(leavesGeometry, leavesMaterial);
            leaves.position.set(x, 4, z);
            this.scene.add(leaves);
        };
        // 複数の木を配置
        const treePositions = [
            { x: -7, z: -12 },
            { x: 7, z: -12 },
            { x: -10, z: -6 },
            { x: 10, z: -6 },
            { x: -12, z: 0 },
            { x: 12, z: 0 },
            { x: -10, z: 6 },
            { x: 10, z: 6 },
            { x: -8, z: 10 },
            { x: 8, z: 10 },
            { x: -12, z: 12 },
            { x: 12, z: 12 },
        ];
        treePositions.forEach(pos => createTree(pos.x, pos.z));
        // パーティクルの作成
        let createParticles = () => {
            const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry();
            const textureLoader = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader();
            const texture = textureLoader.load('snow1.png');
            const material = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({
                size: 0.3,
                map: texture,
                blending: three__WEBPACK_IMPORTED_MODULE_1__.AdditiveBlending,
                color: 0xffffff,
                depthWrite: false,
                transparent: true,
                opacity: 0.8
            });
            const particleNum = 4000;
            const positions = new Float32Array(particleNum * 3);
            let particleIndex = 0;
            this.particleVelocity = [];
            for (let i = 0; i < particleNum; i++) {
                positions[particleIndex++] = Math.random() * 40 - 20;
                positions[particleIndex++] = Math.random() * 30;
                positions[particleIndex++] = Math.random() * 40 - 20;
                this.particleVelocity.push(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, Math.random() * -0.1, 0));
            }
            geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_1__.BufferAttribute(positions, 3));
            this.cloud = new three__WEBPACK_IMPORTED_MODULE_1__.Points(geometry, material);
            this.scene.add(this.cloud);
        };
        createParticles();
        // ライトの設定
        this.light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff);
        const lvec = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1).clone().normalize();
        this.light.position.set(lvec.x, lvec.y, lvec.z);
        this.scene.add(this.light);
        // 更新ループ
        const clock = new three__WEBPACK_IMPORTED_MODULE_1__.Clock();
        let update = () => {
            const deltaTime = clock.getDelta();
            const speed = 3.0;
            const geom = this.cloud.geometry;
            const positions = geom.getAttribute('position'); // 座標データ
            for (let i = 0; i < positions.count; i++) {
                let newY = positions.getY(i) + this.particleVelocity[i].y * deltaTime * speed;
                if (newY < 0) {
                    newY = 5; // 下に到達したら上に戻る
                }
                positions.setY(i, newY);
            }
            positions.needsUpdate = true;
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };
}
window.addEventListener("DOMContentLoaded", init);
function init() {
    let container = new ThreeJSContainer();
    let viewport = container.createRendererDOM(640, 480, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 5, 20));
    document.body.appendChild(viewport);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcgprendering"] = self["webpackChunkcgprendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_three_examples_jsm_controls_OrbitControls_js"], () => (__webpack_require__("./src/app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssR0FBRyxJQUFJLHVDQUFVLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQzNELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdEIsT0FBTztZQUNQLE1BQU0sY0FBYyxHQUFHLElBQUksK0NBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLE1BQU0sR0FBRyxJQUFJLHVDQUFVLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQztRQUVELFVBQVU7UUFDVixNQUFNLGFBQWEsR0FBRztZQUNsQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDakIsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNoQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2YsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNoQixFQUFFLENBQUMsRUFBRSxF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V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scyc7XG5cbmNsYXNzIFRocmVlSlNDb250YWluZXIge1xuICAgIHByaXZhdGUgc2NlbmU6IFRIUkVFLlNjZW5lO1xuICAgIHByaXZhdGUgbGlnaHQ6IFRIUkVFLkxpZ2h0O1xuICAgIHByaXZhdGUgY2xvdWQ6IFRIUkVFLlBvaW50cztcbiAgICBwcml2YXRlIHBhcnRpY2xlVmVsb2NpdHk6IFRIUkVFLlZlY3RvcjNbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIC8vIOODrOODs+ODgOODqeODvOOBrkRPTeOCkuS9nOaIkFxuICAgIHB1YmxpYyBjcmVhdGVSZW5kZXJlckRPTSA9ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2FtZXJhUG9zOiBUSFJFRS5WZWN0b3IzKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHgwMDAwMDApKTtcbiAgICAgICAgcmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIOOCq+ODoeODqeOBruioreWumlxuICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpZHRoIC8gaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShjYW1lcmFQb3MpO1xuICAgICAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcblxuICAgICAgICBjb25zdCBvcmJpdENvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG5cbiAgICAgICAgLy8g44Ki44OL44Oh44O844K344On44Oz44Or44O844OXXG4gICAgICAgIGNvbnN0IHJlbmRlcjogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBvcmJpdENvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIGNhbWVyYSk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5jc3NGbG9hdCA9IFwibGVmdFwiO1xuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xuICAgICAgICByZXR1cm4gcmVuZGVyZXIuZG9tRWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyDjgrfjg7zjg7Pjga7kvZzmiJBcbiAgICBwcml2YXRlIGNyZWF0ZVNjZW5lID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICAgICAgLy8g5Zyw6Z2i44Gu5L2c5oiQXG4gICAgICAgIGNvbnN0IHBob25nTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoKTtcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDQwLCA0MCk7XG4gICAgICAgIGNvbnN0IHBsYW5lTWVzaCA9IG5ldyBUSFJFRS5NZXNoKHBsYW5lR2VvbWV0cnksIHBob25nTWF0ZXJpYWwpO1xuICAgICAgICBwbGFuZU1lc2gubWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7IC8vIOS4oemdolxuICAgICAgICBwbGFuZU1lc2gucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICAgICAgICAvLyDjgrfjg7zjg7Pjgbjov73liqBcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocGxhbmVNZXNoKTtcblxuICAgICAgICAvLyAz5q616Zuq44Gg44KL44G+44Gu5L2c5oiQXG4gICAgICAgIGxldCBjcmVhdGVTbm93bWFuMSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJvZHlNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcbiAgICAgICAgICAgIGNvbnN0IHNwaGVyZUJvdHRvbSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjUsIDMyLCAzMik7XG4gICAgICAgICAgICBjb25zdCBzcGhlcmVNaWRkbGUgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMSwgMzIsIDMyKTtcbiAgICAgICAgICAgIGNvbnN0IHNwaGVyZVRvcCA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgwLjc1LCAzMiwgMzIpO1xuXG4gICAgICAgICAgICBjb25zdCBzbm93bWFuQm90dG9tID0gbmV3IFRIUkVFLk1lc2goc3BoZXJlQm90dG9tLCBib2R5TWF0ZXJpYWwpO1xuICAgICAgICAgICAgc25vd21hbkJvdHRvbS5wb3NpdGlvbi5zZXQoLTMsIDEuNSwgOCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChzbm93bWFuQm90dG9tKTtcblxuICAgICAgICAgICAgY29uc3Qgc25vd21hbk1pZGRsZSA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZU1pZGRsZSwgYm9keU1hdGVyaWFsKTtcbiAgICAgICAgICAgIHNub3dtYW5NaWRkbGUucG9zaXRpb24uc2V0KC0zLCAzLjUsIDgpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoc25vd21hbk1pZGRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNub3dtYW5Ub3AgPSBuZXcgVEhSRUUuTWVzaChzcGhlcmVUb3AsIGJvZHlNYXRlcmlhbCk7XG4gICAgICAgICAgICBzbm93bWFuVG9wLnBvc2l0aW9uLnNldCgtMywgNSwgOCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChzbm93bWFuVG9wKTtcblxuICAgICAgICAgICAgLy8g55uu44Go6by744Gu6L+95YqgXG4gICAgICAgICAgICBjb25zdCBleWVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDAwMCB9KTtcbiAgICAgICAgICAgIGNvbnN0IGV5ZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDAuMSwgMzIsIDMyKTtcblxuICAgICAgICAgICAgY29uc3QgZXllTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUdlb21ldHJ5LCBleWVNYXRlcmlhbCk7XG4gICAgICAgICAgICBleWVMZWZ0LnBvc2l0aW9uLnNldCgtMy4yNSwgNSwgOC43NSk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChleWVMZWZ0KTtcblxuICAgICAgICAgICAgY29uc3QgZXllUmlnaHQgPSBuZXcgVEhSRUUuTWVzaChleWVHZW9tZXRyeSwgZXllTWF0ZXJpYWwpO1xuICAgICAgICAgICAgZXllUmlnaHQucG9zaXRpb24uc2V0KC0yLjc1LCA1LCA4Ljc1KTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKGV5ZVJpZ2h0KTtcblxuICAgICAgICAgICAgY29uc3Qgbm9zZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMDAwIH0pO1xuICAgICAgICAgICAgY29uc3Qgbm9zZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeSgwLjIsIDEsIDMyKTtcblxuICAgICAgICAgICAgY29uc3Qgbm9zZSA9IG5ldyBUSFJFRS5NZXNoKG5vc2VHZW9tZXRyeSwgbm9zZU1hdGVyaWFsKTtcbiAgICAgICAgICAgIG5vc2UucG9zaXRpb24uc2V0KC0zLCA0Ljk1LCA4Ljc1KTtcbiAgICAgICAgICAgIG5vc2Uucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQobm9zZSk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlU25vd21hbjEoKTtcblxuICAgICAgICAvLyDlpKrjgaPjgaHjgofpm6rjgaDjgovjgb7jga7kvZzmiJAyXG4gICAgICAgIGxldCBjcmVhdGVTbm93bWFuMiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJvZHlNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcbiAgICAgICAgICAgIGNvbnN0IHNwaGVyZUJvdHRvbSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLjUsIDMyLCAzMik7XG4gICAgICAgICAgICBjb25zdCBzcGhlcmVUb3AgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMSwgMzIsIDMyKTtcblxuICAgICAgICAgICAgY29uc3Qgc25vd21hbkJvdHRvbSA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZUJvdHRvbSwgYm9keU1hdGVyaWFsKTtcbiAgICAgICAgICAgIHNub3dtYW5Cb3R0b20ucG9zaXRpb24uc2V0KDMsIDEuNSwgOCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChzbm93bWFuQm90dG9tKTtcblxuICAgICAgICAgICAgY29uc3Qgc25vd21hblRvcCA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZVRvcCwgYm9keU1hdGVyaWFsKTtcbiAgICAgICAgICAgIHNub3dtYW5Ub3AucG9zaXRpb24uc2V0KDMsIDMuNSwgOCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChzbm93bWFuVG9wKTtcblxuICAgICAgICAgICAgLy8g55uu44Go6by744Go44Oc44K/44Oz44Gu6L+95YqgXG4gICAgICAgICAgICBjb25zdCBleWVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDAwMCB9KTtcbiAgICAgICAgICAgIGNvbnN0IGV5ZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDAuMSwgMzIsIDMyKTtcblxuICAgICAgICAgICAgY29uc3QgZXllTGVmdCA9IG5ldyBUSFJFRS5NZXNoKGV5ZUdlb21ldHJ5LCBleWVNYXRlcmlhbCk7XG4gICAgICAgICAgICBleWVMZWZ0LnBvc2l0aW9uLnNldCgyLjc1LCAzLjUsIDkpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoZXllTGVmdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV5ZVJpZ2h0ID0gbmV3IFRIUkVFLk1lc2goZXllR2VvbWV0cnksIGV5ZU1hdGVyaWFsKTtcbiAgICAgICAgICAgIGV5ZVJpZ2h0LnBvc2l0aW9uLnNldCgzLjI1LCAzLjUsIDkpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoZXllUmlnaHQpO1xuXG4gICAgICAgICAgICBjb25zdCBub3NlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHhmZjAwMDAgfSk7XG4gICAgICAgICAgICBjb25zdCBub3NlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ29uZUdlb21ldHJ5KDAuMiwgMSwgMzIpO1xuXG4gICAgICAgICAgICBjb25zdCBub3NlID0gbmV3IFRIUkVFLk1lc2gobm9zZUdlb21ldHJ5LCBub3NlTWF0ZXJpYWwpO1xuICAgICAgICAgICAgbm9zZS5wb3NpdGlvbi5zZXQoMywgMy4yNSwgOSk7XG4gICAgICAgICAgICBub3NlLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKG5vc2UpO1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25NYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDBmZiB9KTtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDAuMSwgMzIsIDMyKTtcblxuICAgICAgICAgICAgY29uc3QgYnV0dG9uQm90dG9tID0gbmV3IFRIUkVFLk1lc2goYnV0dG9uR2VvbWV0cnksIGJ1dHRvbk1hdGVyaWFsKTtcbiAgICAgICAgICAgIGJ1dHRvbkJvdHRvbS5wb3NpdGlvbi5zZXQoMywgMS41LCA5LjUpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoYnV0dG9uQm90dG9tKTtcblxuICAgICAgICAgICAgY29uc3QgYnV0dG9uTWlkZGxlID0gbmV3IFRIUkVFLk1lc2goYnV0dG9uR2VvbWV0cnksIGJ1dHRvbk1hdGVyaWFsKTtcbiAgICAgICAgICAgIGJ1dHRvbk1pZGRsZS5wb3NpdGlvbi5zZXQoMywgMiwgOS40NSk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChidXR0b25NaWRkbGUpO1xuXG4gICAgICAgICAgICBjb25zdCBidXR0b25Ub3AgPSBuZXcgVEhSRUUuTWVzaChidXR0b25HZW9tZXRyeSwgYnV0dG9uTWF0ZXJpYWwpO1xuICAgICAgICAgICAgYnV0dG9uVG9wLnBvc2l0aW9uLnNldCgzLCAyLjUsIDkuMTUpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoYnV0dG9uVG9wKTtcblxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZVNub3dtYW4yKCk7XG5cbiAgICAgICAgLy8g5a6244Gu5L2c5oiQXG4gICAgICAgIGxldCBjcmVhdGVIb3VzZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweGRlYjg4NyB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJvb2ZNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcblxuICAgICAgICAgICAgLy8g5aOB44Gu5L2c5oiQXG4gICAgICAgICAgICBjb25zdCB3YWxsR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDUsIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHdhbGxzID0gbmV3IFRIUkVFLk1lc2god2FsbEdlb21ldHJ5LCB3YWxsTWF0ZXJpYWwpO1xuICAgICAgICAgICAgd2FsbHMucG9zaXRpb24uc2V0KDAsIDIuNSwgLTQpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQod2FsbHMpO1xuXG4gICAgICAgICAgICAvLyDlsYvmoLnjga7kvZzmiJBcbiAgICAgICAgICAgIGNvbnN0IHJvb2ZHZW9tZXRyeSA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkoOCwgNiwgOCk7XG4gICAgICAgICAgICBjb25zdCByb29mID0gbmV3IFRIUkVFLk1lc2gocm9vZkdlb21ldHJ5LCByb29mTWF0ZXJpYWwpO1xuICAgICAgICAgICAgcm9vZi5wb3NpdGlvbi5zZXQoMCwgOCwgLTQpO1xuICAgICAgICAgICAgcm9vZi5yb3RhdGlvbi55ID0gTWF0aC5QSSAvIDQ7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChyb29mKTtcblxuICAgICAgICAgICAgLy8g44OJ44Ki44Gu5L2c5oiQXG4gICAgICAgICAgICBjb25zdCBkb29yTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHg4YjQ1MTMgfSk7XG4gICAgICAgICAgICBjb25zdCBkb29yR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMS41LCAzLCAwLjEpO1xuICAgICAgICAgICAgY29uc3QgZG9vciA9IG5ldyBUSFJFRS5NZXNoKGRvb3JHZW9tZXRyeSwgZG9vck1hdGVyaWFsKTtcbiAgICAgICAgICAgIGRvb3IucG9zaXRpb24uc2V0KDAsIDEuNSwgMSk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChkb29yKTtcbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVIb3VzZSgpO1xuXG4gICAgICAgIC8vIOacqOOBruS9nOaIkFxuICAgICAgICBsZXQgY3JlYXRlVHJlZSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJ1bmtNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDhCNDUxMyB9KTtcbiAgICAgICAgICAgIGNvbnN0IGxlYXZlc01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MmY0ZjRmIH0pO1xuXG4gICAgICAgICAgICAvLyDlubnjga7kvZzmiJBcbiAgICAgICAgICAgIGNvbnN0IHRydW5rR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjUsIDAuNSwgMyk7XG4gICAgICAgICAgICBjb25zdCB0cnVuayA9IG5ldyBUSFJFRS5NZXNoKHRydW5rR2VvbWV0cnksIHRydW5rTWF0ZXJpYWwpO1xuICAgICAgICAgICAgdHJ1bmsucG9zaXRpb24uc2V0KHgsIDEuNSwgeik7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZCh0cnVuayk7XG5cbiAgICAgICAgICAgIC8vIOiRieOBruS9nOaIkFxuICAgICAgICAgICAgY29uc3QgbGVhdmVzR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ29uZUdlb21ldHJ5KDIsIDQsIDgpO1xuICAgICAgICAgICAgY29uc3QgbGVhdmVzID0gbmV3IFRIUkVFLk1lc2gobGVhdmVzR2VvbWV0cnksIGxlYXZlc01hdGVyaWFsKTtcbiAgICAgICAgICAgIGxlYXZlcy5wb3NpdGlvbi5zZXQoeCwgNCwgeik7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChsZWF2ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g6KSH5pWw44Gu5pyo44KS6YWN572uXG4gICAgICAgIGNvbnN0IHRyZWVQb3NpdGlvbnMgPSBbXG4gICAgICAgICAgICB7IHg6IC03LCB6OiAtMTIgfSxcbiAgICAgICAgICAgIHsgeDogNywgejogLTEyIH0sXG4gICAgICAgICAgICB7IHg6IC0xMCwgejogLTYgfSxcbiAgICAgICAgICAgIHsgeDogMTAsIHo6IC02IH0sXG4gICAgICAgICAgICB7IHg6IC0xMiwgejogMCB9LFxuICAgICAgICAgICAgeyB4OiAxMiwgejogMCB9LFxuICAgICAgICAgICAgeyB4OiAtMTAsIHo6IDYgfSxcbiAgICAgICAgICAgIHsgeDogMTAsIHo6IDYgfSxcbiAgICAgICAgICAgIHsgeDogLTgsIHo6IDEwIH0sXG4gICAgICAgICAgICB7IHg6IDgsIHo6IDEwIH0sXG4gICAgICAgICAgICB7IHg6IC0xMiwgejogMTIgfSxcbiAgICAgICAgICAgIHsgeDogMTIsIHo6IDEyIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgdHJlZVBvc2l0aW9ucy5mb3JFYWNoKHBvcyA9PiBjcmVhdGVUcmVlKHBvcy54LCBwb3MueikpO1xuXG4gICAgICAgIC8vIOODkeODvOODhuOCo+OCr+ODq+OBruS9nOaIkFxuICAgICAgICBsZXQgY3JlYXRlUGFydGljbGVzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVMb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRleHR1cmVMb2FkZXIubG9hZCgnc25vdzEucG5nJyk7XG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7XG4gICAgICAgICAgICAgICAgc2l6ZTogMC4zLFxuICAgICAgICAgICAgICAgIG1hcDogdGV4dHVyZSxcbiAgICAgICAgICAgICAgICBibGVuZGluZzogVEhSRUUuQWRkaXRpdmVCbGVuZGluZyxcbiAgICAgICAgICAgICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcGFydGljbGVOdW0gPSA0MDAwO1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShwYXJ0aWNsZU51bSAqIDMpO1xuICAgICAgICAgICAgbGV0IHBhcnRpY2xlSW5kZXggPSAwO1xuXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlVmVsb2NpdHkgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZU51bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW3BhcnRpY2xlSW5kZXgrK10gPSBNYXRoLnJhbmRvbSgpICogNDAgLSAyMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbcGFydGljbGVJbmRleCsrXSA9IE1hdGgucmFuZG9tKCkgKiAzMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbcGFydGljbGVJbmRleCsrXSA9IE1hdGgucmFuZG9tKCkgKiA0MCAtIDIwO1xuICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVWZWxvY2l0eS5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKDAsIE1hdGgucmFuZG9tKCkgKiAtMC4xLCAwKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpO1xuXG4gICAgICAgICAgICB0aGlzLmNsb3VkID0gbmV3IFRIUkVFLlBvaW50cyhnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jbG91ZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY3JlYXRlUGFydGljbGVzKCk7XG5cbiAgICAgICAgLy8g44Op44Kk44OI44Gu6Kit5a6aXG4gICAgICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4gICAgICAgIGNvbnN0IGx2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKS5ub3JtYWxpemUoKTtcbiAgICAgICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQobHZlYy54LCBsdmVjLnksIGx2ZWMueik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gICAgICAgIC8vIOabtOaWsOODq+ODvOODl1xuICAgICAgICBjb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuXG4gICAgICAgIGxldCB1cGRhdGU6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gY2xvY2suZ2V0RGVsdGEoKTtcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gMy4wO1xuXG4gICAgICAgICAgICBjb25zdCBnZW9tID0gPFRIUkVFLkJ1ZmZlckdlb21ldHJ5PnRoaXMuY2xvdWQuZ2VvbWV0cnk7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBnZW9tLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgLy8g5bqn5qiZ44OH44O844K/XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3WSA9IHBvc2l0aW9ucy5nZXRZKGkpICsgdGhpcy5wYXJ0aWNsZVZlbG9jaXR5W2ldLnkgKiBkZWx0YVRpbWUgKiBzcGVlZDtcblxuICAgICAgICAgICAgICAgIGlmIChuZXdZIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdZID0gNTsgLy8g5LiL44Gr5Yiw6YGU44GX44Gf44KJ5LiK44Gr5oi744KLXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5zZXRZKGksIG5ld1kpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zaXRpb25zLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG4gICAgbGV0IHZpZXdwb3J0ID0gY29udGFpbmVyLmNyZWF0ZVJlbmRlcmVyRE9NKDY0MCwgNDgwLCBuZXcgVEhSRUUuVmVjdG9yMygwLCA1LCAyMCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodmlld3BvcnQpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjZ3ByZW5kZXJpbmdcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2dwcmVuZGVyaW5nXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc190aHJlZV9leGFtcGxlc19qc21fY29udHJvbHNfT3JiaXRDb250cm9sc19qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==