import { useState } from "react";
import { registerUser } from "../api/api";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await registerUser({ name, email, password });
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert("Registration successful! Please login.");
        navigate("/login");
      }
    } catch (error: any) {
      alert("Registration failed! Please try again.");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <div className="glass-card animate-fade" style={styles.card}>
        <h1 style={styles.title}>Create Account</h1>
        <p style={styles.subtitle}>Join Subscribely to manage your subscriptions</p>
        
        <div style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              placeholder="John Doe"
              style={styles.input}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <button className="btn-primary" style={styles.button} onClick={handleRegister}>
            Create Account
          </button>
        </div>

        <p style={styles.footerText}>
          Already have an account? <Link to="/login" style={styles.link}>Sign in</Link>
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
    gap: "1.25rem",
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

export default Register;