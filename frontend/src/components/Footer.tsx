import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.brand}>
            <h3 style={styles.logo}>Subscribely</h3>
            <p style={styles.tagline}>
              Empowering your subscription management with intelligent insights and secure payments.
            </p>
          </div>

          <div style={styles.linkGroup}>
            <h4 style={styles.heading}>Product</h4>
            <Link to="/pricing" style={styles.link}>Pricing</Link>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
          </div>

          <div style={styles.linkGroup}>
            <h4 style={styles.heading}>Account</h4>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </div>

          <div style={styles.linkGroup}>
            <h4 style={styles.heading}>Technology</h4>
            <span style={styles.techItem}>React & Vite</span>
            <span style={styles.techItem}>Django Rest</span>
            <span style={styles.techItem}>PayPal SDK</span>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.copyright}>&copy; 2026 Subscribely. Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0a0b10",
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
    padding: "6rem 5% 3rem",
    marginTop: "auto",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "4rem",
    marginBottom: "4rem",
  },
  brand: {
    gridColumn: "span 1",
  },
  logo: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    fontWeight: 700,
  },
  tagline: {
    color: "#64748b",
    fontSize: "0.9rem",
    lineHeight: "1.6",
  },
  linkGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.8rem",
  },
  heading: {
    fontSize: "1rem",
    marginBottom: "1rem",
    color: "#cbd5e1",
  },
  link: {
    color: "#64748b",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.3s ease",
  },
  techItem: {
    color: "#475569",
    fontSize: "0.85rem",
  },
  bottom: {
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
    paddingTop: "2.5rem",
    textAlign: "center" as const,
  },
  copyright: {
    color: "#475569",
    fontSize: "0.8rem",
  },
};

export default Footer;