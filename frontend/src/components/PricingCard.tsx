function PricingCard({ plan, onSubscribe }: any) {
  const isPopular = plan.name.toLowerCase().includes("pro") || plan.name.toLowerCase().includes("popular");

  return (
    <div className="glass-card animate-fade" style={{
      ...styles.card,
      ...(isPopular ? styles.popularCard : {})
    }}>
      {isPopular && <div style={styles.badge}>Most Popular</div>}
      <h3 style={styles.name}>{plan.name}</h3>
      <div style={styles.priceContainer}>
        <span style={styles.dollar}>$</span>
        <span style={styles.price}>{plan.price}</span>
        <span style={styles.cycle}>/{plan.billing_cycle}</span>
      </div>
      <p style={styles.description}>
        Complete access to all features, priority support, and secure integration.
      </p>
      <ul style={styles.features}>
        <li style={styles.feature}>✓ Full Dashboard Access</li>
        <li style={styles.feature}>✓ Secure Data Encryption</li>
        <li style={styles.feature}>✓ 24/7 Priority Support</li>
      </ul>
      <button 
        className="btn-primary" 
        style={{
          ...styles.button,
          ...(isPopular ? styles.popularButton : {})
        }} 
        onClick={() => onSubscribe(plan)}
      >
        Choose {plan.name}
      </button>
    </div>
  );
}

const styles = {
  card: {
    padding: "2.5rem 2rem",
    width: "320px",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    position: "relative" as const,
    transition: "transform 0.3s ease",
  },
  popularCard: {
    borderColor: "rgba(138, 79, 255, 0.4)",
    transform: "scale(1.05)",
    background: "rgba(138, 79, 255, 0.05)",
  },
  badge: {
    position: "absolute" as const,
    top: "-12px",
    background: "linear-gradient(135deg, #8a4fff, #ff4f9a)",
    padding: "0.4rem 1rem",
    borderRadius: "20px",
    fontSize: "0.75rem",
    fontWeight: 700,
    textTransform: "uppercase" as const,
    color: "#fff",
  },
  name: {
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    color: "#fff",
  },
  priceContainer: {
    display: "flex",
    alignItems: "baseline",
    marginBottom: "1.5rem",
  },
  dollar: {
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#cbd5e1",
    marginRight: "2px",
  },
  price: {
    fontSize: "3rem",
    fontWeight: 700,
    color: "#fff",
  },
  cycle: {
    fontSize: "1rem",
    color: "#94a3b8",
    marginLeft: "4px",
  },
  description: {
    fontSize: "0.9rem",
    color: "#94a3b8",
    marginBottom: "2rem",
    textAlign: "center" as const,
  },
  features: {
    listStyle: "none",
    padding: 0,
    marginBottom: "2.5rem",
    width: "100%",
    textAlign: "left" as const,
  },
  feature: {
    fontSize: "0.9rem",
    color: "#cbd5e1",
    marginBottom: "0.75rem",
  },
  button: {
    width: "100%",
    padding: "1rem",
    fontSize: "1rem",
  },
  popularButton: {
    boxShadow: "0 10px 25px rgba(138, 79, 255, 0.4)",
  },
};

export default PricingCard;