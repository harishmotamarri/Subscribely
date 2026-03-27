import { Link } from "react-router-dom";

function Success() {
  return (
    <div style={styles.container} className="animate-fade">
      <div className="glass-card" style={styles.card}>
        <div style={styles.icon}>✨</div>
        <h1 style={styles.title}>Payment Successful</h1>
        <p style={styles.subtitle}>
          Your subscription has been activated successfully. 
          You now have full access to your chosen plan features.
        </p>
        <Link to="/dashboard" className="btn-primary" style={styles.button}>
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "6rem 1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  card: {
    padding: "4rem 2rem",
    textAlign: "center" as const,
    maxWidth: "500px",
    width: "100%",
  },
  icon: {
    fontSize: "4rem",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "3rem",
  },
  button: {
    display: "inline-block",
    textDecoration: "none",
    padding: "1rem 2rem",
    fontSize: "1.1rem",
  },
};

export default Success;