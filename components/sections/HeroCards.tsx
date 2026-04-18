"use client";

import { useEffect, useRef, useState } from "react";

// ─── Canvas helper ────────────────────────────────────────────────────────────
function initCanvas(canvas: HTMLCanvasElement) {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.offsetWidth || 560;
  const h = canvas.offsetHeight || 520;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext("2d")!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h };
}

/* ─────────────────────────────────────────────────────────────────────────────
   IDEA 1 — Red de Nodos (versión fuerte)
   Nodos grandes con glow potente. Conexiones activas siempre visibles.
   Partículas brillantes con trail largo. Pulso al llegar a destino.
   El ratón atrae/distorsiona la red.
───────────────────────────────────────────────────────────────────────────── */
function Idea1NodeNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { ctx, w, h } = initCanvas(canvas);
    let rafId: number;

    // Nodos con importancia variable (size) para crear jerarquía visual
    const NODES_DEF = [
      { label: "CRM",         r: 9,  importance: 1.0 },
      { label: "ERP",         r: 8,  importance: 0.9 },
      { label: "API",         r: 10, importance: 1.0 },
      { label: "WhatsApp",    r: 7,  importance: 0.7 },
      { label: "Dashboard",   r: 9,  importance: 0.9 },
      { label: "Facturación", r: 7,  importance: 0.7 },
      { label: "Stock",       r: 7,  importance: 0.7 },
      { label: "Pedidos",     r: 8,  importance: 0.85 },
      { label: "Analytics",  r: 8,  importance: 0.85 },
      { label: "Webhook",     r: 6,  importance: 0.6 },
      { label: "Clientes",    r: 7,  importance: 0.7 },
      { label: "Notif.",      r: 6,  importance: 0.6 },
    ];

    const nodes = NODES_DEF.map((def) => ({
      ...def,
      x: 70 + Math.random() * (w - 140),
      y: 60 + Math.random() * (h - 120),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      phase: Math.random() * Math.PI * 2,
      pulseRing: 0, // 0=idle, >0=expanding ring animation
    }));

    // Partículas con trail más largo y brillo mayor
    const particles = Array.from({ length: 35 }, () => {
      const ni = Math.floor(Math.random() * nodes.length);
      let nj = ni;
      while (nj === ni) nj = Math.floor(Math.random() * nodes.length);
      return {
        ni, nj,
        t: Math.random(),
        speed: 0.0025 + Math.random() * 0.004,
        brightness: 0.6 + Math.random() * 0.4,
      };
    });

    function drawGlow(x: number, y: number, r: number, alpha: number) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(2,201,120,${alpha})`);
      g.addColorStop(0.4, `rgba(2,201,120,${alpha * 0.4})`);
      g.addColorStop(1, "rgba(2,201,120,0)");
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const { x: mx, y: my } = mouseRef.current;

      // Ambient background glow (centro)
      drawGlow(w * 0.55, h * 0.45, 280, 0.06);

      // Update nodes
      for (const n of nodes) {
        const dx = mx - n.x, dy = my - n.y;
        const d = Math.hypot(dx, dy);
        if (d < 180 && d > 1) {
          n.vx += (dx / d) * 0.025 * n.importance;
          n.vy += (dy / d) * 0.025 * n.importance;
        }
        n.vx *= 0.97; n.vy *= 0.97;
        n.x += n.vx; n.y += n.vy;
        n.phase += 0.018;
        if (n.pulseRing > 0) n.pulseRing += 0.06;
        if (n.pulseRing > 1) n.pulseRing = 0;
        const margin = n.r + 20;
        if (n.x <= margin || n.x >= w - margin) n.vx *= -1;
        if (n.y <= margin || n.y >= h - margin) n.vy *= -1;
        n.x = Math.max(margin, Math.min(w - margin, n.x));
        n.y = Math.max(margin, Math.min(h - margin, n.y));
      }

      // ── Conexiones ──────────────────────────────────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const ni = nodes[i], nj = nodes[j];
          const d = Math.hypot(nj.x - ni.x, nj.y - ni.y);
          if (d > 230) continue;

          const proximity = 1 - d / 230;
          const importance = (ni.importance + nj.importance) / 2;
          const alpha = proximity * importance * 0.55;

          // Shadow/glow detrás de la línea
          ctx.beginPath();
          ctx.moveTo(ni.x, ni.y); ctx.lineTo(nj.x, nj.y);
          ctx.strokeStyle = `rgba(2,201,120,${alpha * 0.4})`;
          ctx.lineWidth = 3.5;
          ctx.stroke();

          // Línea principal
          ctx.beginPath();
          ctx.moveTo(ni.x, ni.y); ctx.lineTo(nj.x, nj.y);
          ctx.strokeStyle = `rgba(2,201,120,${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // ── Partículas ──────────────────────────────────────────────────────────
      for (const p of particles) {
        p.t += p.speed;
        if (p.t >= 1) {
          p.t = 0;
          nodes[p.nj].pulseRing = 0.01; // dispara pulse en destino
          p.ni = p.nj;
          do { p.nj = Math.floor(Math.random() * nodes.length); } while (p.nj === p.ni);
        }
        const a = nodes[p.ni], b = nodes[p.nj];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;

        // Trail largo (3 segmentos de opacidad decreciente)
        for (let seg = 1; seg <= 3; seg++) {
          const t0 = Math.max(0, p.t - seg * 0.055);
          const tx = a.x + (b.x - a.x) * t0;
          const ty = a.y + (b.y - a.y) * t0;
          ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(
            a.x + (b.x - a.x) * Math.max(0, p.t - (seg - 1) * 0.055),
            a.y + (b.y - a.y) * Math.max(0, p.t - (seg - 1) * 0.055)
          );
          ctx.strokeStyle = `rgba(2,201,120,${p.brightness * (0.5 - seg * 0.12)})`;
          ctx.lineWidth = 2.5 - seg * 0.5;
          ctx.stroke();
        }

        // Punto brillante
        drawGlow(x, y, 10, p.brightness * 0.35);
        ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(2,201,120,${p.brightness})`; ctx.fill();
      }

      // ── Nodos ────────────────────────────────────────────────────────────────
      for (const n of nodes) {
        const pr = n.r + Math.sin(n.phase) * 1.2;

        // Pulse ring cuando recibe una partícula
        if (n.pulseRing > 0) {
          const ringR = pr + n.pulseRing * 40;
          const ringAlpha = (1 - n.pulseRing) * 0.6;
          ctx.beginPath(); ctx.arc(n.x, n.y, ringR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(2,201,120,${ringAlpha})`;
          ctx.lineWidth = 1.5; ctx.stroke();
        }

        // Glow exterior grande
        drawGlow(n.x, n.y, pr * 7 * n.importance, 0.22 * n.importance);

        // Anillo exterior (segundo)
        ctx.beginPath(); ctx.arc(n.x, n.y, pr + 4, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(2,201,120,${0.12 * n.importance})`;
        ctx.lineWidth = 1; ctx.stroke();

        // Círculo principal
        ctx.beginPath(); ctx.arc(n.x, n.y, pr, 0, Math.PI * 2);
        const nodeGrad = ctx.createRadialGradient(n.x, n.y - pr * 0.3, 0, n.x, n.y, pr);
        nodeGrad.addColorStop(0, "rgba(20,38,32,1)");
        nodeGrad.addColorStop(1, "rgba(6,8,11,1)");
        ctx.fillStyle = nodeGrad;
        ctx.strokeStyle = `rgba(2,201,120,${0.7 + Math.sin(n.phase) * 0.2})`;
        ctx.lineWidth = 1.8;
        ctx.fill(); ctx.stroke();

        // Punto interior
        ctx.beginPath(); ctx.arc(n.x, n.y, pr * 0.28, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(2,201,120,${0.6 + Math.sin(n.phase) * 0.2})`; ctx.fill();

        // Label
        ctx.font = `${10 + n.r * 0.3}px monospace`;
        ctx.textAlign = "center";
        ctx.fillStyle = `rgba(240,240,240,${0.45 + n.importance * 0.2})`;
        ctx.fillText(n.label, n.x, n.y + pr + 15);
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", () => { mouseRef.current = { x: -9999, y: -9999 }; });
    return () => { cancelAnimationFrame(rafId); canvas.removeEventListener("mousemove", onMove); };
  }, []);

  return <canvas ref={canvasRef} className="w-full block" style={{ height: 520 }} />;
}

/* ─────────────────────────────────────────────────────────────────────────────
   IDEA 2 — Flujo de Partículas
   Corrientes de partículas a lo largo de caminos Bézier curvos.
   Representa datos moviéndose entre sistemas. El ratón desvía el flujo.
───────────────────────────────────────────────────────────────────────────── */
function Idea2ParticleFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { ctx, w, h } = initCanvas(canvas);
    let rafId: number;

    // [x0,y0, cx1,cy1, cx2,cy2, x1,y1] normalized 0-1
    const PATHS = [
      [0, 0.15, 0.3, 0.02, 0.7, 0.28, 1, 0.20],
      [0, 0.32, 0.25, 0.55, 0.75, 0.12, 1, 0.42],
      [0, 0.50, 0.35, 0.25, 0.65, 0.75, 1, 0.58],
      [0, 0.68, 0.28, 0.88, 0.72, 0.48, 1, 0.72],
      [0, 0.85, 0.4, 0.72, 0.6, 0.98, 1, 0.88],
    ];

    function bz(p: number[], t: number): [number, number] {
      const [x0, y0, cx1, cy1, cx2, cy2, x1, y1] = p;
      const u = 1 - t;
      return [
        (u*u*u*x0 + 3*u*u*t*cx1 + 3*u*t*t*cx2 + t*t*t*x1) * w,
        (u*u*u*y0 + 3*u*u*t*cy1 + 3*u*t*t*cy2 + t*t*t*y1) * h,
      ];
    }

    const particles = Array.from({ length: 150 }, () => ({
      pi: Math.floor(Math.random() * PATHS.length),
      t: Math.random(),
      spd: 0.0012 + Math.random() * 0.003,
      sz: 0.8 + Math.random() * 2.2,
      op: 0.25 + Math.random() * 0.65,
    }));

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const { x: mx, y: my } = mouseRef.current;

      for (const p of PATHS) {
        ctx.beginPath();
        ctx.moveTo(p[0] * w, p[1] * h);
        ctx.bezierCurveTo(p[2]*w, p[3]*h, p[4]*w, p[5]*h, p[6]*w, p[7]*h);
        ctx.strokeStyle = "rgba(2,201,120,.035)";
        ctx.lineWidth = 1; ctx.stroke();
      }

      for (const p of particles) {
        p.t += p.spd;
        if (p.t > 1) { p.t = 0; p.pi = Math.floor(Math.random() * PATHS.length); }
        const [x, y] = bz(PATHS[p.pi], p.t);
        const [tx, ty] = bz(PATHS[p.pi], Math.max(0, p.t - 0.05));
        let px = x, py = y;
        const dx = x - mx, dy = y - my;
        const d = Math.hypot(dx, dy);
        if (d < 90 && d > 1) { const f = (90 - d) / 90 * 18; px += dx/d*f; py += dy/d*f; }
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(px, py);
        ctx.strokeStyle = `rgba(2,201,120,${p.op * 0.38})`; ctx.lineWidth = p.sz * 0.7; ctx.stroke();
        ctx.beginPath(); ctx.arc(px, py, p.sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(2,201,120,${p.op})`; ctx.fill();
      }

      // Vignette
      const vg = ctx.createRadialGradient(w/2, h/2, h*0.25, w/2, h/2, h*0.8);
      vg.addColorStop(0, "rgba(6,8,11,0)"); vg.addColorStop(1, "rgba(6,8,11,.55)");
      ctx.fillStyle = vg; ctx.fillRect(0, 0, w, h);

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", () => { mouseRef.current = { x: -9999, y: -9999 }; });
    return () => { cancelAnimationFrame(rafId); canvas.removeEventListener("mousemove", onMove); };
  }, []);

  return <canvas ref={canvasRef} className="w-full block" style={{ height: 520 }} />;
}

/* ─────────────────────────────────────────────────────────────────────────────
   IDEA 3 — Grid de Transformación
   Cuadrícula de celdas: algunas "rotas" (rojo, parpadeando), el ratón las
   "arregla" al pasar (verde). Metáfora: caos manual → automatización → orden.
───────────────────────────────────────────────────────────────────────────── */
function Idea3GridTransform() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { ctx, w, h } = initCanvas(canvas);
    let rafId: number;

    const SZ = 20;
    const COLS = Math.floor(w / SZ);
    const ROWS = Math.floor(h / SZ);

    const cells = Array.from({ length: ROWS }, () =>
      Array.from({ length: COLS }, () => ({
        broken: Math.random() < 0.35,
        fixed: 0,
        phase: Math.random() * Math.PI * 2,
        decayTimer: 4000 + Math.random() * 6000,
      }))
    );

    let last = 0;
    function draw(ts: number) {
      const dt = ts - last; last = ts;
      ctx.clearRect(0, 0, w, h);
      const { x: mx, y: my } = mouseRef.current;

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const cell = cells[row][col];
          cell.phase += 0.04;

          const cx = col * SZ + SZ / 2;
          const cy = row * SZ + SZ / 2;
          const d = Math.hypot(cx - mx, cy - my);

          if (d < 90 && cell.broken && cell.fixed < 1) {
            cell.fixed = Math.min(1, cell.fixed + dt * 0.004);
            if (cell.fixed >= 1) {
              cell.broken = false;
              cell.decayTimer = 3000 + Math.random() * 5000;
            }
          }

          if (!cell.broken && cell.fixed > 0) {
            cell.decayTimer -= dt;
            if (cell.decayTimer <= 0) {
              cell.broken = true; cell.fixed = 0;
              cell.decayTimer = 4000 + Math.random() * 6000;
            }
          }

          let rc = 0, gc = 0, bc = 0, alpha = 0;
          if (cell.fixed > 0) {
            rc = 0; gc = 212; bc = 160;
            alpha = cell.fixed * (0.1 + Math.sin(cell.phase) * 0.03);
          } else if (cell.broken) {
            rc = 255; gc = 90; bc = 30;
            alpha = 0.06 + Math.abs(Math.sin(cell.phase * 2.5)) * 0.1;
          } else {
            rc = 0; gc = 212; bc = 160;
            alpha = 0.025;
          }

          const pad = 1.5;
          ctx.fillStyle = `rgba(${rc},${gc},${bc},${alpha})`;
          ctx.fillRect(col*SZ+pad, row*SZ+pad, SZ-pad*2, SZ-pad*2);
        }
      }

      if (mx > 0 && mx < w) {
        ctx.beginPath(); ctx.arc(mx, my, 90, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(2,201,120,.06)"; ctx.lineWidth = 1; ctx.stroke();
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", () => { mouseRef.current = { x: -9999, y: -9999 }; });
    return () => { cancelAnimationFrame(rafId); canvas.removeEventListener("mousemove", onMove); };
  }, []);

  return <canvas ref={canvasRef} className="w-full block" style={{ height: 520 }} />;
}

/* ─────────────────────────────────────────────────────────────────────────────
   IDEA 4 — Espiral de Código
   Fragmentos de código/datos orbitando en espiral logarítmica. Rotación lenta.
   El ratón repele los fragmentos cercanos. Más artístico y abstracto.
───────────────────────────────────────────────────────────────────────────── */
function Idea4CodeSpiral() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { ctx, w, h } = initCanvas(canvas);
    let rafId: number;

    const FRAGS = [
      "POST /api/pedidos", "→ sync ERP", "✓ 200ms", "webhook.fire()",
      "classify(input)", "order.create()", "GET /stock", "✓ validated",
      "notify → WhatsApp", "PUT /clientes", "pipeline.run()", "→ 48ms",
      "cache.flush()", "✓ automated", "cron: 0 * * *", "transform(data)",
      "→ dashboard", "✓ 0 errors", "stream.pipe()", "event.emit()",
      "trigger: pedido", "→ facturación", "✓ integrado", "api.connect()",
      "scheduler.add()", "→ notif.", "✓ en vivo", "batch.process()",
    ];

    const A = 16, B = 0.148;
    const maxAngle = 5.2;

    const frags = FRAGS.map((text, i) => {
      const angle = (i / FRAGS.length) * maxAngle;
      const radius = A * Math.exp(B * angle);
      return { text, angle, radius, ox: 0, oy: 0, vox: 0, voy: 0, fontSize: 8.5 + radius / 80 };
    });

    let rotation = 0;

    function draw() {
      ctx.clearRect(0, 0, w, h);
      rotation += 0.0025;
      const cx = w * 0.5, cy = h * 0.5;
      const { x: mx, y: my } = mouseRef.current;

      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 70);
      cg.addColorStop(0, "rgba(2,201,120,.15)"); cg.addColorStop(1, "rgba(2,201,120,0)");
      ctx.beginPath(); ctx.arc(cx, cy, 70, 0, Math.PI * 2); ctx.fillStyle = cg; ctx.fill();

      for (const f of frags) {
        const θ = f.angle + rotation;
        const sx = cx + f.radius * Math.cos(θ);
        const sy = cy + f.radius * Math.sin(θ);

        const dx = sx - mx, dy = sy - my;
        const d = Math.hypot(dx, dy);
        if (d < 100 && d > 1) { f.vox += dx/d*(100-d)*0.045; f.voy += dy/d*(100-d)*0.045; }
        f.vox *= 0.87; f.voy *= 0.87;
        f.ox += f.vox; f.oy += f.voy;
        f.ox *= 0.92; f.oy *= 0.92;

        const x = sx + f.ox, y = sy + f.oy;
        if (x < -30 || x > w + 30 || y < -20 || y > h + 20) continue;

        const alpha = Math.min(0.75, (f.radius / 180) * 0.7 + 0.1);
        ctx.font = `${f.fontSize}px monospace`;
        ctx.textAlign = "center";
        ctx.fillStyle = `rgba(2,201,120,${alpha})`;
        ctx.fillText(f.text, x, y);
      }

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", () => { mouseRef.current = { x: -9999, y: -9999 }; });
    return () => { cancelAnimationFrame(rafId); canvas.removeEventListener("mousemove", onMove); };
  }, []);

  return <canvas ref={canvasRef} className="w-full block" style={{ height: 520 }} />;
}

/* ─────────────────────────────────────────────────────────────────────────────
   IDEA 5 — Mapa de Procesos (SVG)
   Nodos abstractos conectados por trazos tipo circuito. Pulsos de luz viajan
   en secuencia. Hover sobre un nodo ilumina todas sus conexiones.
───────────────────────────────────────────────────────────────────────────── */
function Idea5ProcessMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  const VW = 720, VH = 520;

  const NODES = [
    { id: "A", x:  90, y: 260, label: "Entrada" },
    { id: "B", x: 230, y: 120, label: "Clasificar" },
    { id: "C", x: 230, y: 390, label: "Validar" },
    { id: "D", x: 380, y:  70, label: "ERP" },
    { id: "E", x: 380, y: 240, label: "Notif." },
    { id: "F", x: 380, y: 430, label: "Stock" },
    { id: "G", x: 520, y: 150, label: "Dashboard" },
    { id: "H", x: 520, y: 375, label: "Facturación" },
    { id: "I", x: 640, y: 260, label: "Salida" },
  ];

  const EDGES = [
    { from: "A", to: "B" }, { from: "A", to: "C" },
    { from: "B", to: "D" }, { from: "B", to: "E" },
    { from: "C", to: "E" }, { from: "C", to: "F" },
    { from: "D", to: "G" }, { from: "E", to: "G" },
    { from: "E", to: "H" }, { from: "F", to: "H" },
    { from: "G", to: "I" }, { from: "H", to: "I" },
  ];

  const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

  function pathD(from: string, to: string) {
    const a = nodeMap[from], b = nodeMap[to];
    const mx = (a.x + b.x) / 2;
    return `M ${a.x} ${a.y} C ${mx} ${a.y} ${mx} ${b.y} ${b.x} ${b.y}`;
  }

  function isActive(from: string, to: string) {
    return hovered ? from === hovered || to === hovered : false;
  }

  return (
    <div className="relative w-full" style={{ height: 520 }}>
      <style>{`@keyframes flow-pulse { to { stroke-dashoffset: -24; } }`}</style>
      <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="svg-glow">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {EDGES.map((e, i) => {
          const active = isActive(e.from, e.to);
          const d = pathD(e.from, e.to);
          return (
            <g key={i}>
              <path d={d} fill="none"
                stroke={active ? "rgba(2,201,120,.4)" : "rgba(255,255,255,.06)"}
                strokeWidth={active ? 1.5 : 1}
                style={{ transition: "all .25s" }}
              />
              <path d={d} fill="none"
                stroke="rgba(2,201,120,.75)"
                strokeWidth="1.5"
                strokeDasharray="5 19"
                filter="url(#svg-glow)"
                style={{
                  animation: `flow-pulse ${1.8 + i * 0.15}s linear infinite`,
                  opacity: active ? 1 : 0.12,
                  transition: "opacity .25s",
                }}
              />
            </g>
          );
        })}

        {NODES.map((n) => {
          const active = hovered === n.id;
          return (
            <g key={n.id}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              {active && (
                <circle cx={n.x} cy={n.y} r="24"
                  fill="rgba(2,201,120,.07)"
                  stroke="rgba(2,201,120,.2)"
                  strokeWidth="1"
                />
              )}
              <circle cx={n.x} cy={n.y} r="12"
                fill="#080c12"
                stroke={active ? "rgba(2,201,120,.95)" : "rgba(2,201,120,.32)"}
                strokeWidth={active ? 1.5 : 1}
                filter={active ? "url(#svg-glow)" : undefined}
                style={{ transition: "all .2s" }}
              />
              <circle cx={n.x} cy={n.y} r="3.5"
                fill={active ? "rgba(2,201,120,1)" : "rgba(2,201,120,.45)"}
                style={{ transition: "fill .2s" }}
              />
              <text x={n.x} y={n.y + 28} textAnchor="middle"
                fontSize="9" fontFamily="monospace"
                fill={active ? "rgba(240,240,240,.65)" : "rgba(240,240,240,.22)"}
                style={{ transition: "fill .2s" }}
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ACTIVO AHORA → Idea 1
   Para cambiar: comenta la línea activa y descomenta otra.
───────────────────────────────────────────────────────────────────────────── */
export const archivedHeroIdeas = [
  Idea1NodeNetwork,
  Idea2ParticleFlow,
  Idea3GridTransform,
  Idea4CodeSpiral,
] as const;

export default function HeroCards() {
  // return <Idea1NodeNetwork />;      // IDEA 1 — descartada
  // return <Idea2ParticleFlow />;    // IDEA 2 — descartada
  // return <Idea3GridTransform />;    // IDEA 3 — descartada
  // return <Idea4CodeSpiral />;      // IDEA 4 — descartada
  return <Idea5ProcessMap />;         // IDEA 5 — Mapa de Procesos
}
