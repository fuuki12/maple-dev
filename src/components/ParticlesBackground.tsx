import { onMount } from "solid-js";
import { css } from "solid-styled";

export default function ParticlesBackground() {
  onMount(() => {
    const canvas = document.getElementById(
      "particles-canvas"
    ) as HTMLCanvasElement;
    const context = canvas.getContext("2d");

    if (!context) {
      // contextがnullの場合、ここで処理を中断またはエラーハンドリング
      console.error("2D コンテキストを取得できませんでした。");
      return;
    }

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];
    const particleCount = 100;
    const maxVelocity = 2;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() * 2 - 1) * maxVelocity,
          vy: (Math.random() * 2 - 1) * maxVelocity,
          size: Math.random() * 3 + 1,
        });
      }
    }

    function updateParticles() {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });
    }

    function drawParticles() {
      context?.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        if (context) {
          context.beginPath();
          context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          context.fillStyle = "rgba(255, 255, 255, 0.8)";
          context.fill();
          context.closePath();
        }
      });
    }

    function animate() {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    createParticles();
    animate();
  });

  css`
    #particles-canvas {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
    }
  `;

  return <canvas id="particles-canvas"></canvas>;
}
