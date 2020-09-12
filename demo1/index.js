const init = () => {
  const width = 960, height = 540;

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#canvas")
  })

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width, height);
  camera.position.set(0, 0, +1000);

  const geometry = new THREE.BoxGeometry(400, 400, 400);
  const material = new THREE.MeshBasicMaterial();
  const box  = new THREE.Mesh(geometry, material);
  scene.add(box);


  const tick = () => {
    box.rotation.y += 0.01;
    renderer.render(scene, camera);

    requestAnimationFrame(tick)
  }

  tick();
}

window.addEventListener("load", init);
