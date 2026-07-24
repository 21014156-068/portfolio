import React from "react";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Palette,
  ShoppingCart,
  GitBranch,
  Cloud,
  Shield,
  Wifi,
  Layers,
} from "lucide-react";

// Skill categories derived from the updated CV
const skillCategories = [
  {
    icon: <Code2 size={28} />,
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "Dart", level: 3 },
      { name: "HTML5 & CSS3", level: 5 },
    ],
  },
  {
    icon: <Server size={28} />,
    title: "Backend",
    skills: [
      { name: "Node.js / Express.js", level: 4 },
      { name: "NestJS", level: 4 },
      { name: "REST API Design", level: 5 },
      { name: "JWT / OAuth", level: 4 },
    ],
  },
  {
    icon: <Database size={28} />,
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "Database Modeling", level: 4 },
      { name: "TTL Indexes", level: 3 },
    ],
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile (Flutter)",
    skills: [
      { name: "Backend Integration", level: 4 },
      { name: "BLoC / Cubit", level: 4 },
      { name: "Repository Pattern", level: 3 },
      { name: "Biometric Auth", level: 3 },
    ],
  },
  {
    icon: <Palette size={28} />,
    title: "Frontend",
    skills: [
      { name: "React.js", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Responsive Design", level: 5 },
      { name: "State Management", level: 4 },
    ],
  },
  {
    icon: <ShoppingCart size={28} />,
    title: "CMS & eCommerce",
    skills: [
      { name: "WordPress / WooCommerce", level: 5 },
      { name: "Custom Theme Dev", level: 4 },
      { name: "Payment Gateways", level: 4 },
      { name: "SEO Optimization", level: 4 },
    ],
  },
  {
    icon: <GitBranch size={28} />,
    title: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 5 },
      { name: "Postman (API Testing)", level: 4 },
      { name: "VS Code / Android Studio", level: 5 },
      { name: "CI/CD (Basic)", level: 3 },
    ],
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud & Media",
    skills: [
      { name: "Cloudinary (Image Mgmt)", level: 4 },
      { name: "Vercel / Netlify", level: 4 },
      { name: "Environment Config", level: 4 },
      { name: "Multi‑env Deployments", level: 3 },
    ],
  },
  {
    icon: <Shield size={28} />,
    title: "Security & Auth",
    skills: [
      { name: "JWT Authentication", level: 4 },
      { name: "Google OAuth", level: 4 },
      { name: "Biometric Integration", level: 3 },
      { name: "Secure Credential Storage", level: 3 },
    ],
  },
  {
    icon: <Wifi size={28} />,
    title: "Real‑time & Notifications",
    skills: [
      { name: "WebSockets", level: 3 },
      { name: "Push Notifications", level: 3 },
      { name: "Unread Badge Logic", level: 3 },
      { name: "Real‑time Booking Sync", level: 4 },
    ],
  },
];

const ServicesPage = () => {
  return (
    <section
      style={{
        background: "#050505",
        color: "#fff",
        padding: "4rem 2rem",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              marginBottom: "1rem",
              background: "linear-gradient(to right, #4f46e5, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Technical Skills
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#d1d5db",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            A comprehensive overview of my technical expertise, tools, and
            technologies I work with daily.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div
              className="skill-card neumorph-animate"
              key={cat.title}
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <div className="skill-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-title">{cat.title}</h3>
              </div>
              <ul className="skill-list">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-level">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`dot ${i < skill.level ? "filled" : ""}`}
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2rem",
            textAlign: "center",
            color: "#9ca3af",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            style={{ fontSize: "0.95rem", maxWidth: "700px", margin: "0 auto" }}
          >
            I continuously expand my skill set by working on real‑world
            projects, staying current with emerging technologies, and applying
            AI‑assisted workflows to boost productivity.
          </p>
        </div>
      </div>

      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        section { animation: fadeIn 0.8s cubic-bezier(.7,.2,.3,1) both; }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: #151a22;
          border-radius: 20px;
          box-shadow:
            9px 9px 24px #0b0c10,
            -9px -9px 24px #232838;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 1.8rem 1.2rem 1.5rem;
          transition: box-shadow 0.3s, transform 0.3s;
          will-change: transform, box-shadow;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: fadeInCard 0.7s forwards cubic-bezier(.7,.2,.3,1);
        }

        .skill-card:hover {
          box-shadow:
            2px 2px 12px #0b0c10,
            -2px -2px 18px #20253a,
            0 0 16px 2px #4f46e566;
          transform: translateY(-6px) scale(1.02);
        }

        @keyframes fadeInCard {
          from { opacity: 0; transform: translateY(20px) scale(0.97);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 0.7rem;
        }

        .skill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(145deg, #181c26 60%, #23273b 100%);
          box-shadow: 2px 2px 10px #0b0c10;
          color: #c7d2fe;
        }

        .skill-title {
          font-size: 1.2rem;
          font-weight: 700;
          background: linear-gradient(to right, #4f46e5, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .skill-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.95rem;
          color: #d1d5db;
        }

        .skill-name {
          flex: 1;
          margin-right: 0.5rem;
        }

        .skill-level {
          display: flex;
          gap: 0.2rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #374151;
          transition: background 0.3s;
        }

        .dot.filled {
          background: linear-gradient(145deg, #4f46e5, #6366f1);
          box-shadow: 0 0 6px rgba(79, 70, 229, 0.6);
        }

        /* Responsive */
        @media (max-width: 700px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr;
          }
          .skill-card {
            padding: 1.2rem 0.8rem;
          }
          .skill-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
        `}
      </style>
    </section>
  );
};

export default ServicesPage;
