import * as THREE from 'three';

export const createThree = () => {
    // 建立场景
    const scene = new THREE.Scene();
    // 建立摄像机（透视摄像机）
    const camera = new THREE.PerspectiveCamera(75, // 视野角度（单位是°）
        window.innerWidth / window.innerHeight, // 长宽比
        0.1, // 近截面
        1000); // 远截面

    // 创建一个 WebGL 渲染器
    const renderer = new THREE.WebGLRenderer();
    // 设置渲染器的尺寸
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 将渲染器添加到 document
    document.body.appendChild(renderer.domElement);

    // 添加立方体
    // 创建立方体对象
    const geometry = new THREE.BoxGeometry();
    // 创建材质
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    // 创建网格
    const cube = new THREE.Mesh(geometry, material);
    // 将立方体添加到场景
    scene.add(cube);

    // 设置摄像机，防止摄像机和立方体重叠
    camera.position.z = 5;

    // 渲染场景

    function animate() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}