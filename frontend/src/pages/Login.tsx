import { useState } from "react";
import { loginUser } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("user", JSON.stringify(response.data.user || null));
          localStorage.setItem("token", response.data.token || "");
          navigate("/dashboard");
        }
    } catch (error: any) {
      alert("Login failed! Please check your credentials.");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <div className="glass-card animate-fade" style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Enter your credentials to access your account</p>
        
        <div style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              style={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              style={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-primary" style={styles.button} onClick={handleLogin}>
            Sign In
          </button>
        </div>

        <p style={styles.footerText}>
          Don't have an account? <Link to="/register" style={styles.link}>Create one</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "4rem 1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  card: {
    width: "100%",
    maxWidth: "450px",
    padding: "3rem",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: "0.95rem",
    marginBottom: "2.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
    textAlign: "left" as const,
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#cbd5e1",
  },
  input: {
    width: "100%",
  },
  button: {
    marginTop: "1rem",
    padding: "1rem",
    fontSize: "1rem",
  },
  footerText: {
    marginTop: "2rem",
    fontSize: "0.9rem",
    color: "#94a3b8",
  },
  link: {
    color: "#8a4fff",
    fontWeight: 500,
    textDecoration: "none",
  },
};

export default Login;