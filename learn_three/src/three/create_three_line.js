import * as THREE from "three";

// 建立场景
const scene = new THREE.Scene();
// 建立摄像机（透视摄像机）
const camera = new THREE.PerspectiveCamera(45,
    window.innerWidth / window.innerHeight,
    1,
    500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// 创建一个 WebGL 渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染器的尺寸
renderer.setSize(window.innerWidth, window.innerHeight);
// 将渲染器添加到 document
document.body.appendChild(renderer.domElement);

// 创建线条材质
const material = new THREE.LineBasicMaterial({color: 0x0000ff});

// 创建一个带有顶点的几何体
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();