const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Usha Adhikari | Electrical & Electronics Engineer</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    :root {
      --primary: #2563eb;
      --secondary: #06b6d4;
      --accent: #9333ea;
      --dark: #0f172a;
      --light: #f8fafc;
      --text-dark: #1e293b;
      --text-light: #475569;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: "Inter", sans-serif;
      background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
      color: var(--text-dark);
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* ===== NAV ===== */
    nav {
      position: sticky;
      top: 0;
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(12px);
      padding: 16px 0;
      z-index: 100;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    nav a {
      color: #e5e7eb;
      margin: 0 24px;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      position: relative;
      display: inline-block;
    }

    nav a::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      transition: width 0.3s ease;
    }

    nav a:hover {
      color: var(--secondary);
    }

    nav a:hover::after {
      width: 100%;
    }

    /* ===== HERO ===== */
    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 20px;
      animation: fadeInUp 0.8s ease;
    }

    .hero-text h1 {
      font-family: "Poppins", sans-serif;
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 16px;
      background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      line-height: 1.1;
    }

    .hero-text p {
      font-size: 1.15rem;
      margin-bottom: 32px;
      color: var(--text-light);
      line-height: 1.8;
    }

    .hero-text span {
      color: var(--primary);
      font-weight: 700;
    }

    .hero-img {
      text-align: center;
      animation: float 3s ease-in-out infinite;
    }

    .hero-img img {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      object-fit: cover;
      border: 8px solid #fff;
      box-shadow: 0 30px 60px rgba(37, 99, 235, 0.25);
      transition: transform 0.3s ease;
    }

    .hero-img img:hover {
      transform: scale(1.05);
    }

    /* ===== SECTION ===== */
    section {
      max-width: 1200px;
      margin: 100px auto;
      padding: 0 20px;
    }

    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 50px;
      color: var(--dark);
      position: relative;
      display: inline-block;
    }

    h2::after {
      content: "";
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      position: absolute;
      left: 0;
      bottom: -12px;
      border-radius: 2px;
    }

    /* ===== ABOUT ===== */
    .about-box {
      background: #fff;
      padding: 50px;
      border-radius: 24px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(0, 0, 0, 0.05);
      line-height: 1.8;
      color: var(--text-light);
      font-size: 1.05rem;
    }

    /* ===== SKILLS GRID ===== */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
      margin-top: 40px;
    }

    .skill-card {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: #fff;
      padding: 30px 20px;
      border-radius: 16px;
      text-align: center;
      font-weight: 600;
      font-size: 1.05rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
    }

    .skill-card:hover {
      transform: translateY(-12px) scale(1.02);
      background: linear-gradient(135deg, var(--secondary), var(--accent));
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
    }

    /* ===== PROJECTS ===== */
    .projects-container {
      display: grid;
      gap: 24px;
      margin-top: 40px;
    }

    .project {
      background: #fff;
      padding: 32px;
      border-radius: 16px;
      border-left: 6px solid var(--primary);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border: 1px solid rgba(0, 0, 0, 0.05);
    }

    .project:hover {
      transform: translateX(8px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
      border-left-color: var(--secondary);
    }

    .project h3 {
      font-family: "Poppins", sans-serif;
      font-size: 1.3rem;
      margin-bottom: 12px;
      color: var(--dark);
    }

    .project p {
      color: var(--text-light);
      margin-bottom: 16px;
    }

    .project-link {
      text-decoration: none;
      color: var(--primary);
      font-weight: 600;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .project-link:hover {
      color: var(--secondary);
      transform: translateX(4px);
    }

    /* ===== CONTACT SECTION ===== */
    #contact h2 {
      text-align: center;
      display: block;
      width: 100%;
    }

    .contact-links {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-top: 50px;
      flex-wrap: wrap;
    }

    .contact-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      text-decoration: none;
      font-size: 1.5rem;
      transition: all 0.3s ease;
      box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
    }

    .contact-link:hover {
      transform: translateY(-6px) scale(1.1);
      box-shadow: 0 12px 30px rgba(37, 99, 235, 0.4);
    }

    /* ===== FOOTER ===== */
    footer {
      background: var(--dark);
      color: #cbd5f5;
      text-align: center;
      padding: 40px 20px;
      margin-top: 120px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    footer p {
      font-size: 0.95rem;
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 900px) {
      .hero {
        grid-template-columns: 1fr;
        padding: 80px 20px;
        gap: 40px;
      }

      .hero-text h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      .hero-text p {
        text-align: center;
      }

      h2 {
        font-size: 2rem;
      }

      nav a {
        margin: 0 12px;
        font-size: 0.9rem;
      }

      section {
        margin: 60px auto;
      }
    }

    @media (max-width: 600px) {
      .hero-text h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      nav a {
        margin: 0 8px;
        font-size: 0.85rem;
      }
    }
  </style>
</head>
<body>
  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>

  <div class="hero">
    <div class="hero-text">
      <h1>Usha Adhikari</h1>
      <p>
        <span>Electrical & Electronics Engineer</span><br>
        Specializing in hydropower modelling, dynamic system analysis, and renewable energy applications.
      </p>
    </div>
    <div class="hero-img">
      <img src="/profile.jpg" alt="Usha Adhikari" loading="lazy">
    </div>
  </div>

  <section id="about">
    <h2>About Me</h2>
    <div class="about-box">
      I am a driven Electrical and Electronics Engineer with a strong foundation in analytical thinking, system-level problem solving, and applied research. I approach engineering challenges with a practical, solution-oriented mindset, ensuring projects are executed efficiently and to a high technical standard. My expertise centers on the dynamic modeling and simulation of hydropower systems, with particular emphasis on advanced control strategies for system stability, frequency regulation, and optimized power generation. I have hands-on experience translating theoretical models into practical solutions that support reliable and resilient energy systems. I am an effective communicator and collaborative team member, comfortable working across disciplines and with diverse stakeholders. Highly adaptable and detail-oriented, I perform well under pressure and manage time and resources efficiently. I am continually motivated to expand my technical expertise and contribute to innovative research and engineering efforts that accelerate the transition toward clean, intelligent, and sustainable energy systems.
    </div>
  </section>

  <section id="skills">
    <h2>Core Skills</h2>
    <div class="skills-grid">
      <div class="skill-card">Hydropower Modelling</div>
      <div class="skill-card">Dynamic Systems</div>
      <div class="skill-card">Python</div>
      <div class="skill-card">MATLAB / Simulink</div>
      <div class="skill-card">OpenModelica</div>
      <div class="skill-card">Julia</div>
      <div class="skill-card">Renewable Energy Systems</div>
    </div>
  </section>

  <section id="projects">
    <h2>Projects & Research</h2>
    <div class="projects-container">
      <div class="project">
        <h3>📊 Control Study of Hydropower System</h3>
        <p>Control Study of Hydropower System with Francis Turbine in Isolated Operation</p>
        <a href="https://www.mic-journal.no/PDF/2025/MIC-2025-2-3.pdf" class="project-link">View Publication →</a>
      </div>
      <div class="project">
        <h3>⚡ Hydropower System Control</h3>
        <p>Hydropower System with Francis Turbine for Control-Study</p>
        <a href="https://doi.org/10.1109/PowerCon60995.2024.10870523" class="project-link">View Paper →</a>
      </div>
    </div>
  </section>

  <section id="contact">
    <h2>Let's Connect</h2>
    <div class="contact-links">
      <a href="mailto:ushaadhikary25@gmail.com" class="contact-link" title="Send Email">✉️</a>
      <a href="https://www.linkedin.com/in/usha-adhikari-7a41851b0/" class="contact-link" target="_blank" title="LinkedIn Profile">💼</a>
      <a href="https://www.researchgate.net/profile/Usha-Adhikari-3?ev=hdr_xprf" class="contact-link" target="_blank" title="ResearchGate Profile">📚</a>
    </div>
  </section>

  <footer>
    <p>© 2026 Usha Adhikari. All rights reserved.</p>
  </footer>
</body>
</html>
`;

export default {
  async fetch(request, env) {
    // Try to serve static assets from the \`public\` bucket via env.ASSETS
    try {
      const assetResp = await env.ASSETS.fetch(request);
      // If asset exists, return it directly
      if (assetResp && assetResp.status !== 404) return assetResp;
    } catch (e) {
      // ignore and fall back to serving HTML
    }

    // Fallback: serve the embedded HTML for index/root
    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  },
};
