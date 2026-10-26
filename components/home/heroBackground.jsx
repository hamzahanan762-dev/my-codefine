"use client";

import React, { useEffect, useRef } from "react";

const HeroBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Resize canvas
    const handleResize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // 1. Digital Rain / Falling Particles Array
    const rainDropsCount = 30;
    const rainDrops = Array.from({ length: rainDropsCount }, () => ({
      x: Math.random() * (canvas.width || 1000),
      y: Math.random() * (canvas.height || 600),
      length: Math.random() * 60 + 25,
      speed: Math.random() * 2.5 + 1.0,
      opacity: Math.random() * 0.8,
      width: Math.random() * 2 + 1.2,
    }));

    // 2. Mouse Trail Particles Array
    const mouseTrail = [];
    const mousePos = { x: -100, y: -100 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;

      // Spawn trail particles on cursor movement
      for (let i = 0; i < 4; i++) {
        mouseTrail.push({
          x: mousePos.x + (Math.random() - 0.5) * 20,
          y: mousePos.y + (Math.random() - 0.5) * 20,
          size: Math.random() * 5 + 3,
          alpha: 0.85,
          vx: (Math.random() - 0.5) * 1.8,
          vy: (Math.random() - 0.5) * 1.8 - 0.6,
        });
      }

      if (mouseTrail.length > 80) {
        mouseTrail.splice(0, 15);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render Falling Rain Drops
      rainDrops.forEach((drop) => {
        ctx.beginPath();
        const gradient = ctx.createLinearGradient(
          drop.x,
          drop.y,
          drop.x,
          drop.y + drop.length,
        );
        gradient.addColorStop(0, `rgba(74, 125, 196, 0)`);
        gradient.addColorStop(1, `rgba(74, 125, 196, ${drop.opacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = drop.width;
        ctx.lineCap = "round";
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();

        // Update rain position
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      });

      // Render Mouse Trail Particles
      for (let i = mouseTrail.length - 1; i >= 0; i--) {
        const p = mouseTrail[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(85, 133, 200, ${p.alpha / 10})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.015;

        if (p.alpha <= 0) {
          mouseTrail.splice(i, 1);
        }
      }

      // Cursor glow removed per user request

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 h-[350vh] select-none w-full mx-[-50vw] left-1/2 right-1/2">
      {/* HTML5 Canvas for Digital Rain + Cursor Particle Trail */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
      />
      <div className="block absolute bottom-0 left-0 w-full h-[20%] bg-linear-gradient to-top from-"></div>
    </div>
  );
};

export default HeroBackground;
