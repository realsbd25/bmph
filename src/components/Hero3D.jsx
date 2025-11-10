import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Raycaster for hover detection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xD4A574,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create geometric shapes with enhanced materials
    const torusGeometry = new THREE.TorusGeometry(1.5, 0.4, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0xFDE2C7,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      emissive: 0xFDE2C7,
      emissiveIntensity: 0
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 0, -3);
    torus.userData = { 
      originalColor: 0xFDE2C7, 
      hoverColor: 0xD4A574,
      isHovered: false,
      originalEmissiveIntensity: 0,
      hoverEmissiveIntensity: 0.5
    };
    scene.add(torus);

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4A574,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
      emissive: 0xD4A574,
      emissiveIntensity: 0
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(4, -1, -4);
    sphere.userData = { 
      originalColor: 0xD4A574, 
      hoverColor: 0xFDE2C7,
      isHovered: false,
      originalEmissiveIntensity: 0,
      hoverEmissiveIntensity: 0.5
    };
    scene.add(sphere);

    // Interactive objects array
    const interactiveObjects = [torus, sphere];

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xD4A574, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xFDE2C7, 0.8);
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);

    camera.position.z = 5;

    // Animation variables
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    // Mouse move handler for parallax
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update raycaster for hover detection
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Scroll handler for parallax effect
    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth scroll parallax
      scrollY += (targetScrollY - scrollY) * 0.05;
      const parallaxY = scrollY * 0.0015;
      const parallaxRotation = scrollY * 0.0005;

      // Rotate particles with parallax
      particlesMesh.rotation.y = elapsedTime * 0.05 + parallaxRotation;
      particlesMesh.rotation.x = elapsedTime * 0.025;
      particlesMesh.position.y = -parallaxY * 2;

      // Update raycaster
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects);

      // Reset all objects to not hovered
      interactiveObjects.forEach(obj => {
        obj.userData.isHovered = false;
      });

      // Mark hovered objects
      if (intersects.length > 0) {
        intersects[0].object.userData.isHovered = true;
        document.body.style.cursor = 'pointer';
      } else {
        document.body.style.cursor = 'default';
      }

      // Animate shapes with parallax and hover effects
      interactiveObjects.forEach((obj, index) => {
        // Base rotation
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.005;

        // Parallax movement (different speeds for depth)
        const parallaxFactor = 1 + index * 0.3;
        obj.position.y += ((-parallaxY * parallaxFactor) - obj.position.y) * 0.05;

        // Hover effect - smooth color and glow transition
        const material = obj.material;
        const userData = obj.userData;
        
        if (userData.isHovered) {
          // Transition to hover color
          material.color.lerp(new THREE.Color(userData.hoverColor), 0.1);
          material.emissiveIntensity += (userData.hoverEmissiveIntensity - material.emissiveIntensity) * 0.1;
          material.opacity += (0.6 - material.opacity) * 0.1;
          
          // Add pulsing effect on hover
          const pulse = Math.sin(elapsedTime * 3) * 0.1 + 1;
          obj.scale.lerp(new THREE.Vector3(pulse, pulse, pulse), 0.1);
        } else {
          // Transition back to original color
          material.color.lerp(new THREE.Color(userData.originalColor), 0.1);
          material.emissiveIntensity += (userData.originalEmissiveIntensity - material.emissiveIntensity) * 0.1;
          material.opacity += ((index === 0 ? 0.3 : 0.2) - material.opacity) * 0.1;
          
          // Reset scale
          obj.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
        }
      });

      // Camera follows mouse with parallax
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.position.z = 5 - parallaxY * 5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.cursor = 'default';
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}