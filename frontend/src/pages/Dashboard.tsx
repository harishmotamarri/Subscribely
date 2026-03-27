import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    if (user) {
      fetchDashboard();
    }
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/dashboard/${user.id}/`
      );
      setSubs(res.data);
    } catch (error) {
      console.error("Failed to fetch subscriptions", error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div style={styles.container}>
        <div className="glass-card animate-fade" style={styles.emptyCard}>
          <h1>Access Denied</h1>
          <p style={styles.emptyText}>Please sign in to view your dashboard.</p>
          <Link to="/login" className="btn-primary" style={styles.button}>Sign In</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container} className="animate-fade">
      <header style={styles.header}>
        <div>
          <h1 style={styles.welcome}>Welcome back, {user.name}</h1>
          <p style={styles.subtext}>Manage your active subscriptions and billing.</p>
        </div>
        <Link to="/pricing" className="btn-primary" style={styles.addBtn}>
          + New Subscription
        </Link>
      </header>

      {loading ? (
        <div style={styles.loader}>
          <p>Analyzing your subscription data...</p>
        </div>
      ) : subs.length > 0 ? (
        <div style={styles.grid}>
          {subs.map((s: any, index) => (
            <div key={index} className="glass-card" style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.planName}>{s.plan__name}</h3>
                <span style={styles.statusBadge}>{s.status}</span>
              </div>
              <div style={styles.cardBody}>
                <div style={styles.infoRow}>
                  <span style={styles.label}>Price</span>
                  <span style={styles.value}>${s.plan__price}</span>
                </div>
                <div style={styles.infoRow}>
                  <span style={styles.label}>Started</span>
                  <span style={styles.value}>
                    {new Date(s.start_date).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div style={styles.cardFooter}>
                <button style={styles.manageBtn}>Manage billing</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card" style={styles.emptyState}>
          <div style={styles.emptyIcon}>📂</div>
          <h3>No Subscriptions Found</h3>
          <p style={styles.emptyText}>You haven't activated any subscription plans yet.</p>
          <Link to="/pricing" className="btn-primary" style={styles.button}>
            Browse Pricing Plans
          </Link>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "3rem 5%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "4rem",
    gap: "2rem",
    flexWrap: "wrap" as const,
  },
  welcome: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
  },
  subtext: {
    color: "#94a3b8",
    fontSize: "1.1rem",
  },
  addBtn: {
    textDecoration: "none",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "2rem",
  },
  card: {
    padding: "2rem",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  planName: {
    fontSize: "1.25rem",
  },
  statusBadge: {
    padding: "0.4rem 0.8rem",
    borderRadius: "20px",
    backgroundColor: "rgba(34, 197, 94, 0.1)",
    color: "#22c55e",
    fontSize: "0.75rem",
    fontWeight: 700,
    textTransform: "uppercase" as const,
  },
  cardBody: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
    marginBottom: "2.5rem",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    paddingBottom: "1rem",
  },
  label: {
    color: "#94a3b8",
    fontSize: "0.9rem",
  },
  value: {
    fontWeight: 500,
  },
  cardFooter: {
    display: "flex",
    gap: "1rem",
  },
  manageBtn: {
    backgroundColor: "transparent",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    color: "#fff",
    padding: "0.75rem 1rem",
    borderRadius: "8px",
    width: "100%",
    fontSize: "0.9rem",
  },
  emptyCard: {
    padding: "4rem 2rem",
    textAlign: "center" as const,
    maxWidth: "500px",
    margin: "4rem auto",
  },
  emptyState: {
    padding: "6rem 2rem",
    textAlign: "center" as const,
    maxWidth: "600px",
    margin: "0 auto",
  },
  emptyIcon: {
    fontSize: "3rem",
    marginBottom: "1.5rem",
    opacity: 0.5,
  },
  emptyText: {
    color: "#94a3b8",
    marginBottom: "2rem",
    marginTop: "0.5rem",
  },
  button: {
    textDecoration: "none",
  },
  loader: {
    textAlign: "center" as const,
    padding: "4rem",
    color: "#94a3b8",
  },
};

export default Dashboard;