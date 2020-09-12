const width = 960, height = 540;

const init = () => {
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#canvas")
  })


  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, +1000);
  // 球体を作成
  const geometry = new THREE.SphereGeometry(300, 30, 30);

  const loader = new THREE.TextureLoader();
  const texture = loader.load("../assets/875earth.jpg")
  const material = new THREE.MeshStandardMaterial({map: texture});
  // メッシュを作成
  const mesh = new THREE.Mesh(geometry, material);
  // 3D空間にメッシュを追加
  scene.add(mesh);

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
  directionalLight.position.set(0, 0, 1);
  // シーンに追加
  scene.add(directionalLight);

  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {
    // メッシュを回転させる
    mesh.rotation.y += 0.01;
    // レンダリング
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
  }
}
window.addEventListener("load", init);
