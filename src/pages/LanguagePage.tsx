import { useParams } from "react-router-dom";
import { languages } from "../data/languagesData";
import { motion } from "framer-motion";
import RosRepl from "../components/RosRpel"; // 👈 REPL

export default function LanguagePage() {
  const { slug } = useParams<{ slug: string }>();
  const lang = languages.find((l) => l.slug === slug);

  if (!lang) return <div style={{ color: "white" }}>Language not found 😢</div>;

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* 👇 Logo */}
      <img
        src={lang.logo}
        alt={lang.name}
        style={{ width: "120px", height: "120px", objectFit: "contain", marginBottom: "1rem" }}
      />

      <h1>{lang.name}</h1>
      <p>{lang.description}</p>

      {/* Conditionally show REPL for ROS */}
      {lang.slug === "ros" && (
        <div style={{ marginTop: "2rem" }}>
          <RosRepl />
        </div>
      )}

      {/* Optional: link buttons */}
      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        {lang.website && (
          <a
            href={lang.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            🌐 Website
          </a>
        )}
        {lang.discord && (
          <a
            href={lang.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            💬 Discord
          </a>
        )}
      </div>
    </motion.div>
  );
}
