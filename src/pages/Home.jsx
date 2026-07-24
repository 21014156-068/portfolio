// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Download,
  Briefcase,
  Code,
  Mail,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

// Achievements
const achievements = [
  { value: "15+", label: "Projects Completed" },
  { value: "3", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Updated skill icons – aligned with your About page skills
  const skillIcons = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "WordPress",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
    },
  ];

  return (
    <div
      style={{
        background: "#050505",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ===== Hero Section ===== */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: isMobile ? "0 1rem" : "0 2rem",
        }}
      >
        {/* Holographic background effects */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            opacity: 0.7,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: isMobile ? "70%" : "75%",
            width: isMobile ? "80px" : "120px",
            height: isMobile ? "80px" : "120px",
            transform: "rotateX(60deg) rotateZ(45deg)",
            opacity: 0.15,
            background:
              "linear-gradient(45deg, rgba(79, 70, 229, 0.3), rgba(236, 72, 153, 0.3))",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "hologramPyramid 10s ease-in-out infinite",
            filter: "blur(8px)",
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `
              linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            opacity: 0.2,
            pointerEvents: "none",
            animation: "holographGrid 15s linear infinite",
            perspective: "500px",
            transform: "rotateX(60deg)",
            transformStyle: "preserve-3d",
          }}
        ></div>

        {/* Hero content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            paddingTop: isMobile ? "100px" : "80px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "2rem" : "3rem",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: isMobile ? "2.2rem" : "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                background: "linear-gradient(to right, #fff, #d1d5db)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Full-Stack Developer &{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #4f46e5, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Digital Creator
              </span>
            </h1>

            <p
              style={{
                fontSize: isMobile ? "1.1rem" : "1.25rem",
                color: "#d1d5db",
                marginBottom: "2.5rem",
                maxWidth: "600px",
                lineHeight: 1.6,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              I build exceptional digital experiences that are fast, accessible,
              and visually appealing. Let's bring your ideas to life with
              cutting-edge technology.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "3rem",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <Link
                to="/projects"
                style={{ textDecoration: "none", display: "inline-block" }}
              >
                <button
                  style={{
                    padding: "0.875rem 2rem",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: "linear-gradient(145deg, #4f46e5, #6366f1)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 4px 14px rgba(79, 70, 229, 0.4)",
                    transform: "translateY(0)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow =
                      "0 8px 20px rgba(79, 70, 229, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow =
                      "0 4px 14px rgba(79, 70, 229, 0.4)";
                  }}
                >
                  View My Work
                  <ChevronRight size={20} />
                </button>
              </Link>

              <a href="/CV.pdf" download style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "0.875rem 2rem",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Download CV
                  <Download size={20} />
                </button>
              </a>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "1rem" : "1.5rem",
                flexWrap: "wrap",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              {achievements.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: isMobile ? "center" : "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: isMobile ? "1.3rem" : "1.5rem",
                      fontWeight: 700,
                      background: "linear-gradient(to right, #4f46e5, #ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.value}
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "#d1d5db",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Updated Skills Icons Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "repeat(3, 1fr)"
                : "repeat(5, 1fr)",
              gap: isMobile ? "0.8rem" : "1rem",
              justifyItems: "center",
              marginTop: isMobile ? "2rem" : "0",
            }}
          >
            {skillIcons.map((skill, index) => (
              <div
                key={index}
                style={{
                  width: isMobile ? "60px" : "70px",
                  height: isMobile ? "60px" : "70px",
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  animation: `float 3s ease-in-out infinite ${index * 0.2}s`,
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform =
                    "translateY(-5px) scale(1.1) rotateY(10deg)";
                  e.target.style.boxShadow =
                    "0 10px 25px rgba(79, 70, 229, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform =
                    "translateY(0) scale(1) rotateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{
                    width: isMobile ? "28px" : "35px",
                    height: isMobile ? "28px" : "35px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Floating CV Button */}
        <a
          href="/CV.pdf"
          download
          style={{
            position: "fixed",
            bottom: isMobile ? "1.5rem" : "2rem",
            right: isMobile ? "1.5rem" : "2rem",
            width: isMobile ? "50px" : "60px",
            height: isMobile ? "50px" : "60px",
            borderRadius: "50%",
            background: "linear-gradient(145deg, #4f46e5, #6366f1)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 20px rgba(79, 70, 229, 0.4)",
            zIndex: 100,
            animation: "float 3s ease-in-out infinite",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)";
            e.target.style.boxShadow = "0 8px 25px rgba(79, 70, 229, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 20px rgba(79, 70, 229, 0.4)";
          }}
        >
          <Download size={isMobile ? 20 : 24} />
        </a>
      </section>

      {/* ===== About Section (merged from old About.jsx) ===== */}
      <section
        style={{
          padding: isMobile ? "4rem 1rem" : "6rem 2rem",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Photo */}
            <div
              style={{
                flex: "1 1 300px",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              }}
            >
              <img
                src="/pro.jpg"
                alt="Abdullah Afzaal"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Bio & Education */}
            <div style={{ flex: "2 1 500px" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                  background: "linear-gradient(to right, #4f46e5, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                About Me
              </h2>
              <p
                style={{
                  lineHeight: 1.7,
                  color: "#d1d5db",
                  marginBottom: "1.5rem",
                }}
              >
                I'm a passionate Full‑Stack Developer and eCommerce Specialist
                with experience in full‑stack app development, AI‑assisted
                workflows, and online store customisation. My journey started
                during my studies at the University of Gujrat, where I built a
                strong foundation in information technology.
              </p>
              <p
                style={{
                  lineHeight: 1.7,
                  color: "#d1d5db",
                  marginBottom: "1.5rem",
                }}
              >
                I've built and deployed several projects, including a travel and
                documentation services platform (Paswal Tours LTD) and an
                AI‑powered eCommerce platform (Green Garden). I’m skilled in
                React, Node.js, MongoDB, WordPress, Shopify, and AI‑assisted
                development.
              </p>
              <p
                style={{
                  lineHeight: 1.7,
                  color: "#d1d5db",
                  marginBottom: "2rem",
                }}
              >
                Recently, I've expanded into Next.js, NestJS, PostgreSQL, and
                Flutter backend integration. I'm passionate about creating
                scalable, user‑friendly applications and eager to contribute to
                innovative projects.
              </p>

              {/* Education highlight card */}
              <div
                style={{
                  background: "#151a22",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "9px 9px 24px #0b0c10, -9px -9px 24px #232838",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2))",
                    borderRadius: "12px",
                    padding: "0.75rem",
                  }}
                >
                  <Calendar size={24} color="#4f46e5" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      background: "linear-gradient(to right, #4f46e5, #ec4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: "0.25rem",
                    }}
                  >
                    BS Information Technology
                  </h3>
                  <p style={{ color: "#d1d5db", margin: 0 }}>
                    University of Gujrat, Pakistan &nbsp;|&nbsp; 2021 - 2025
                  </p>
                  <p style={{ color: "#d1d5db", margin: "0.25rem 0 0 0" }}>
                    GPA: 2.78/4.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Navigation Cards Section ===== */}
      <section
        style={{
          padding: isMobile ? "4rem 1rem" : "6rem 2rem",
          background: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* My Projects Card */}
          <div
            className="neumorph-card highlight-card"
            style={{
              background: "#151a22",
              borderRadius: "20px",
              padding: "2rem",
              boxShadow: "9px 9px 24px #0b0c10, -9px -9px 24px #232838",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              position: "relative",
              zIndex: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(145deg, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2))",
                  marginRight: "1rem",
                }}
              >
                <Briefcase size={24} color="#4f46e5" />
              </div>
              <h3
                className="card-content"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  background: "linear-gradient(to right, #4f46e5, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "all 0.3s ease",
                }}
              >
                My Projects
              </h3>
            </div>
            <p
              className="card-content"
              style={{
                color: "#d1d5db",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
                transition: "all 0.3s ease",
              }}
            >
              Explore my portfolio of web applications and digital solutions.
            </p>
            <Link
              to="/projects"
              className="card-content"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#4f46e5",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              View all projects
              <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
            </Link>
          </div>

          {/* Technical Skills Card */}
          <div
            className="neumorph-card highlight-card"
            style={{
              background: "#151a22",
              borderRadius: "20px",
              padding: "2rem",
              boxShadow: "9px 9px 24px #0b0c10, -9px -9px 24px #232838",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              position: "relative",
              zIndex: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(145deg, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2))",
                  marginRight: "1rem",
                }}
              >
                <Code size={24} color="#4f46e5" />
              </div>
              <h3
                className="card-content"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  background: "linear-gradient(to right, #4f46e5, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "all 0.3s ease",
                }}
              >
                Technical Skills
              </h3>
            </div>
            <p
              className="card-content"
              style={{
                color: "#d1d5db",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
                transition: "all 0.3s ease",
              }}
            >
              A detailed overview of my languages, frameworks, and tools.
            </p>
            <Link
              to="/skills"
              className="card-content"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#4f46e5",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              See my skills
              <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
            </Link>
          </div>

          {/* Contact Me Card */}
          <div
            className="neumorph-card highlight-card"
            style={{
              background: "#151a22",
              borderRadius: "20px",
              padding: "2rem",
              boxShadow: "9px 9px 24px #0b0c10, -9px -9px 24px #232838",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              position: "relative",
              zIndex: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(145deg, rgba(79, 70, 229, 0.2), rgba(236, 72, 153, 0.2))",
                  marginRight: "1rem",
                }}
              >
                <Mail size={24} color="#4f46e5" />
              </div>
              <h3
                className="card-content"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  background: "linear-gradient(to right, #4f46e5, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "all 0.3s ease",
                }}
              >
                Contact Me
              </h3>
            </div>
            <p
              className="card-content"
              style={{
                color: "#d1d5db",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
                transition: "all 0.3s ease",
              }}
            >
              Ready to start a project? Get in touch and let's discuss your
              ideas.
            </p>
            <Link
              to="/contact"
              className="card-content"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#4f46e5",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Get in touch
              <ArrowRight size={16} style={{ marginLeft: "0.5rem" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section
        style={{
          padding: isMobile ? "4rem 1rem" : "6rem 2rem",
          background: "linear-gradient(45deg, #4f46e5, #ec4899)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background:
              "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
            animation: "gradientShift 8s ease infinite",
            transform: "rotate(30deg)",
            opacity: 0.2,
          }}
        ></div>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "2rem" : "2.5rem",
              fontWeight: 700,
              marginBottom: "1.5rem",
              background: "linear-gradient(to right, #fff, #e0e0e0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's Build Something Amazing Together
          </h2>

          <p
            style={{
              fontSize: isMobile ? "1.1rem" : "1.25rem",
              color: "#e0e0e0",
              marginBottom: "2.5rem",
              lineHeight: 1.6,
            }}
          >
            I'm currently available for freelance work and full-time
            opportunities. If you have a project that you want to get started or
            think you need my help with something, then get in touch.
          </p>
          <Link to="/contact">
            <button
              style={{
                padding: "0.875rem 2rem",
                borderRadius: "8px",
                border: "none",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: "linear-gradient(145deg, #fff, #e0e0e0)",
                color: "#4f46e5",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 4px 14px rgba(255, 255, 255, 0.4)",
                transform: "translateY(0)",
                animation: "pulse 2s infinite",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow =
                  "0 8px 20px rgba(255, 255, 255, 0.6)";
                e.target.style.animation = "none";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 14px rgba(255, 255, 255, 0.4)";
                e.target.style.animation = "pulse 2s infinite";
              }}
            >
              Get In Touch
              <Mail size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* ===== Global Styles ===== */}
      <style>
        {`
          .highlight-card:hover {
            transform: translateY(-10px);
            box-shadow: 2px 2px 12px #0b0c10, -2px -2px 18px #20253a, 0 0 16px 2px #4f46e566;
          }

          .highlight-card:hover .card-content {
            color: #fff;
            background: linear-gradient(to right, #fff, #a78bfa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: brightness(1.2);
            transform: translateY(-2px);
          }
          
          .highlight-card:hover .card-content[href] {
            color: #a78bfa !important;
            filter: brightness(1.3);
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes holographGrid {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
            100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
          }
          
          @keyframes hologramPyramid {
            0% { 
              opacity: 0.1;
              transform: rotateX(60deg) rotateZ(45deg) translateY(0);
            }
            50% { 
              opacity: 0.2;
              transform: rotateX(60deg) rotateZ(45deg) translateY(-20px);
            }
            100% { 
              opacity: 0.1;
              transform: rotateX(60deg) rotateZ(45deg) translateY(0);
            }
          }
          
          .neumorph-card:hover::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            z-index: -1;
            background: linear-gradient(45deg, #4f46e5, #ec4899, #4f46e5);
            border-radius: 22px;
            animation: holograph 3s ease-in-out infinite;
          }

          html {
            scroll-behavior: smooth;
          }
          
          @media (max-width: 968px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
            }
            
            .skills-grid {
              grid-template-columns: repeat(3, 1fr) !important;
              margin-top: 3rem;
            }
          }
          
          @media (max-width: 768px) {
            .skills-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            
            .hero-content {
              text-align: center;
            }
            
            .hero-buttons {
              justify-content: center;
            }
            
            .hero-achievements {
              justify-content: center;
            }
          }
          
          @media (max-width: 480px) {
            .skills-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 0.8rem;
            }
            
            .hero-buttons button {
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
