import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          <span style={styles.logoAccent}>S</span>ubscribely
        </Link>
      </div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/pricing" style={styles.link}>Pricing</Link>
        {user ? (
          <>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.registerBtn}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.25rem 5%",
    backgroundColor: "rgba(10, 11, 16, 0.8)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    position: "sticky" as const,
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: "-0.03em",
  },
  logoLink: {
    color: "#fff",
    textDecoration: "none",
  },
  logoAccent: {
    color: "#8a4fff",
  },
  links: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },
  link: {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    transition: "all 0.3s ease",
  },
  registerBtn: {
    backgroundColor: "#8a4fff",
    color: "#fff",
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(138, 79, 255, 0.3)",
  },
  logoutButton: {
    backgroundColor: "transparent",
    color: "#ff4f4f",
    border: "1px solid rgba(255, 79, 79, 0.2)",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 500,
  },
};

export default Navbar;
