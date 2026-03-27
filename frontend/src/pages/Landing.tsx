import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={styles.container}>
      <section style={styles.hero} className="animate-fade">
        <h1 style={styles.title}>
          Manage Your Subscriptions <br />
          <span style={styles.gradientText}>With Intelligence</span>
        </h1>
        <p style={styles.subtitle}>
          The modern platform to track, optimize, and manage all your 
          recurring payments in one secure place.
        </p>
        <div style={styles.ctaContainer}>
          <Link to="/pricing" className="btn-primary" style={styles.ctaBtn}>
            Get Started Now
          </Link>
          <Link to="/register" style={styles.secondaryBtn}>
            Create Free Account
          </Link>
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.featureGrid}>
          <div className="glass-card" style={styles.featureCard}>
            <div style={styles.icon}>🚀</div>
            <h3>Fast Integration</h3>
            <p>Connect your favorite services in seconds and start tracking immediately.</p>
          </div>
          <div className="glass-card" style={styles.featureCard}>
            <div style={styles.icon}>🛡️</div>
            <h3>Secure Payments</h3>
            <p>Enterprise-grade security for all your transactions and sensitive data.</p>
          </div>
          <div className="glass-card" style={styles.featureCard}>
            <div style={styles.icon}>📊</div>
            <h3>Smart Insights</h3>
            <p>Get detailed analytics on your monthly spending and optimization tips.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "0 5%",
  },
  hero: {
    padding: "6rem 0",
    textAlign: "center" as const,
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "4.5rem",
    lineHeight: "1.1",
    marginBottom: "1.5rem",
    letterSpacing: "-0.04em",
  },
  gradientText: {
    background: "linear-gradient(135deg, #8a4fff, #ff4f9a)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#94a3b8",
    marginBottom: "3rem",
    lineHeight: "1.6",
  },
  ctaContainer: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
  },
  ctaBtn: {
    fontSize: "1.1rem",
    padding: "1rem 2rem",
    textDecoration: "none",
  },
  secondaryBtn: {
    padding: "1rem 2rem",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.3s ease",
  },
  features: {
    padding: "4rem 0 8rem",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
  },
  featureCard: {
    padding: "2.5rem",
    textAlign: "left" as const,
  },
  icon: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
  },
};

export default Landing;