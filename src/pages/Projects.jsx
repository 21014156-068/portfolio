import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  CheckCircle2,
  Layers,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { projects } from "../components/data";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  // Find featured project index
  const featuredIndex = projects.findIndex((p) => p.isFeatured);

  // Create circular array starting from featured project
  const getCircularProjects = () => {
    const result = [];
    const total = projects.length;
    for (let i = 0; i < total; i++) {
      const index = (featuredIndex + i) % total;
      result.push(projects[index]);
    }
    return result;
  };

  const circularProjects = getCircularProjects();

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % circularProjects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev - 1 + circularProjects.length) % circularProjects.length,
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Calculate positions for cards
  const getCardPosition = (index) => {
    const totalCards = circularProjects.length;
    const centerIndex = 0; // Featured card is at index 0

    // Calculate relative position from current center
    let relativePos = (index - currentIndex + totalCards) % totalCards;
    if (relativePos > totalCards / 2) relativePos -= totalCards;

    // Convert to angle (in degrees)
    const angleStep = 30; // Degrees between cards
    const angle = relativePos * angleStep;

    // Calculate x offset based on angle
    const radius = 400; // Distance from center
    const xOffset = Math.sin(angle * (Math.PI / 180)) * radius;

    // Calculate scale and opacity based on distance from center
    const distance = Math.abs(relativePos);
    const scale = Math.max(0.7, 1 - distance * 0.15);
    const opacity = Math.max(0.4, 1 - distance * 0.2);
    const zIndex = totalCards - distance;

    return {
      x: xOffset,
      scale,
      opacity,
      zIndex,
      isCenter: relativePos === 0,
    };
  };

  return (
    <div style={styles.page}>
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <header style={styles.header}>
        <h1
          style={{
            ...styles.title,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            marginBottom: "1rem",
            background:
              "linear-gradient(to right, rgb(79, 70, 229), rgb(236, 72, 153))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Projects
        </h1>
        <p style={styles.subtitle}>
          A collection of high-impact digital products and experiences.
        </p>
      </header>

      <div style={styles.carouselContainer} ref={containerRef}>
        <button
          onClick={handlePrev}
          style={{ ...styles.navButton, ...styles.navButtonLeft }}
          disabled={isTransitioning}
        >
          <ChevronLeft size={30} />
        </button>

        <div style={styles.cardsWrapper}>
          {circularProjects.map((project, index) => {
            const position = getCardPosition(index);

            return (
              <motion.div
                key={`${project.id}-${index}`}
                style={{
                  ...styles.card,
                  zIndex: position.zIndex,
                  opacity: position.opacity,
                }}
                animate={{
                  x: position.x,
                  scale: position.scale,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  duration: 0.5,
                }}
                whileHover={
                  position.isCenter
                    ? { scale: position.scale * 1.02, translateY: -5 }
                    : {}
                }
                onClick={() => position.isCenter && setSelectedProject(project)}
              >
                {project.isFeatured && (
                  <div style={styles.featuredBadge}>
                    <Star size={12} fill="currentColor" /> Featured
                  </div>
                )}

                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.cardImage}
                  loading="lazy"
                />
                <div style={styles.cardOverlay}>
                  <span style={styles.cardCategory}>{project.category}</span>
                  <h3 style={styles.cardTitle}>{project.title}</h3>
                  {position.isCenter && (
                    <button style={styles.viewBtn}>View Project Details</button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={handleNext}
          style={{ ...styles.navButton, ...styles.navButtonRight }}
          disabled={isTransitioning}
        >
          <ChevronRight size={30} />
        </button>

        <div style={styles.pagination}>
          {circularProjects.map((_, index) => (
            <button
              key={index}
              style={{
                ...styles.paginationDot,
                backgroundColor:
                  index === currentIndex
                    ? "rgb(79, 70, 229)"
                    : "rgba(255,255,255,0.3)",
              }}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
            />
          ))}
        </div>
      </div>

      {/* Professional Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.modalBackdrop}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="hide-scrollbar"
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={styles.closeBtn}
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div style={styles.modalGrid}>
                <div style={styles.modalMedia}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={styles.modalImg}
                  />
                </div>

                <div style={styles.modalDetails}>
                  <span style={styles.modalCategory}>
                    {selectedProject.category}
                  </span>
                  <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
                  <p style={styles.modalDesc}>{selectedProject.description}</p>

                  <div style={styles.sectionTitle}>
                    <Layers size={16} color="rgb(79, 70, 229)" /> Technology
                    Used
                  </div>
                  <div style={styles.tagContainer}>
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} style={styles.tag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={styles.sectionTitle}>
                    <CheckCircle2 size={16} color="rgb(236, 72, 153)" /> Key
                    Features
                  </div>
                  <ul style={styles.featureList}>
                    {selectedProject.features.map((feat) => (
                      <li key={feat} style={{ marginBottom: "8px" }}>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div style={styles.btnGroup}>
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.primaryBtn}
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.secondaryBtn}
                      >
                        <Github size={18} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const styles = {
  page: {
    background: "#050505",
    minHeight: "100vh",
    padding: "80px 20px",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "clamp(40px, 6vw, 72px)",
    fontWeight: "900",
    letterSpacing: "-2px",
    margin: "0",
    background:
      "linear-gradient(to right, rgb(79, 70, 229), rgb(236, 72, 153))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    color: "#777",
    fontSize: "18px",
    marginTop: "15px",
    maxWidth: "600px",
    marginInline: "auto",
  },
  carouselContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative",
    padding: "40px 0 80px",
    overflow: "hidden",
  },
  cardsWrapper: {
    position: "relative",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    position: "absolute",
    width: "360px",
    height: "500px",
    borderRadius: "30px",
    overflow: "hidden",
    cursor: "pointer",
    background: "#111",
    boxShadow:
      "0 20px 40px -10px rgba(79, 70, 229, 0.3), 0 20px 40px -10px rgba(236, 72, 153, 0.3)",
    border: "1px solid rgba(255,255,255,0.05)",
    left: "50%",
    marginLeft: "-180px", // Half of width to center
  },
  featuredBadge: {
    position: "absolute",
    top: "20px",
    left: "20px",
    zIndex: 5,
    background:
      "linear-gradient(to right, rgb(79, 70, 229), rgb(236, 72, 153))",
    padding: "6px 14px",
    borderRadius: "100px",
    fontSize: "12px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "40px 30px",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.6) 50%, transparent)",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  cardCategory: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#aaa",
    fontWeight: "500",
  },
  cardTitle: {
    fontSize: "28px",
    margin: "0",
    fontWeight: "700",
  },
  viewBtn: {
    marginTop: "15px",
    background: "rgba(255,255,255,1)",
    border: "none",
    color: "#000",
    padding: "10px 20px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "700",
    width: "fit-content",
    cursor: "pointer",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
    ":hover": {
      background: "rgba(255,255,255,0.2)",
    },
    ":disabled": {
      opacity: 0.3,
      cursor: "not-allowed",
    },
  },
  navButtonLeft: {
    left: "20px",
  },
  navButtonRight: {
    right: "20px",
  },
  pagination: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "10px",
    zIndex: 10,
  },
  paginationDot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    padding: 0,
    transition: "all 0.3s ease",
  },

  // Modal Styles (unchanged)
  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.9)",
    backdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "10px",
  },
  modalContent: {
    background: "#0a0a0a",
    width: "100%",
    maxWidth: "1000px",
    maxHeight: "90vh",
    borderRadius: "32px",
    overflowY: "auto",
    position: "relative",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 0 100px rgba(79, 70, 229, 0.15)",
  },
  closeBtn: {
    position: "absolute",
    top: "25px",
    right: "25px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
  },
  modalMedia: {
    width: "100%",
    height: "100%",
    minHeight: "400px",
  },
  modalImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  modalDetails: {
    padding: "50px",
  },
  modalCategory: {
    color: "red",
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  modalTitle: {
    fontSize: "35px",
    margin: "15px 0",
    fontWeight: "600",
    background:
      "linear-gradient(to right, rgb(79, 70, 229), rgb(236, 72, 153))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  modalDesc: {
    color: "#999",
    lineHeight: "1.8",
    fontSize: "16px",
    marginBottom: "30px",
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#fff",
  },
  tagContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "30px",
  },
  tag: {
    background: "rgba(255,255,255,0.03)",
    padding: "8px 16px",
    borderRadius: "10px",
    fontSize: "13px",
    color: "#eee",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  featureList: {
    paddingLeft: "5px",
    color: "#999",
    fontSize: "15px",
    marginBottom: "40px",
    listStyle: "none",
  },
  btnGroup: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    background:
      "linear-gradient(to right, rgb(79, 70, 229), rgb(236, 72, 153))",
    color: "#000",
    padding: "14px 28px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "0.3s ease",
  },
  secondaryBtn: {
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    padding: "14px 28px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "0.3s ease",
  },
};
