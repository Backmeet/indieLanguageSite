import { useParams } from "react-router-dom";
import { languages } from "../data/languagesData";
import { motion } from "framer-motion";
import RosRepl from "../components/RosRpel"; // 👈 REPL
import WppRepl from "../components/WppRepl"; // 👈 REPL
import X3Repl from "../components/X3Repl"; // 👈 NEW: Make sure this path is correct
import "./LanguagePage.css";

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
      {/* Language card */}
      <div className="language-page-card">
        <img
          src={lang.logo}
          alt={lang.name}
          style={{
            width: "120px",
            height: "120px",
            objectFit: "contain",
            marginBottom: "1rem",
          }}
        />
        <h1>{lang.name}</h1>
        <p>{lang.description}</p>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
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
          {lang.github && (
            <a
              href={lang.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              🐙 GitHub
            </a>
          )}
        </div>
      </div>

      {/* REPL outside the card */}
      {lang.slug === "ros" && (
        <div style={{ marginTop: "2rem" }}>
          <RosRepl />
        </div>
      )}
      {lang.slug === "wpp" && (
        <div style={{ marginTop: "2rem" }}>
          <WppRepl />
        </div>
      )}
      {lang.slug === "x3" && (
        <div style={{ marginTop: "2rem" }}>
          <X3Repl />
        </div>
      )}
    </motion.div>
  );
}
