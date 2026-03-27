import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPlans, subscribePlan } from "../api/api";
import PricingCard from "../components/PricingCard";

function Pricing() {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await getPlans();
      setPlans(res.data);
    } catch (error) {
      console.error("Failed to fetch plans", error);
    }
  };

  const handleSubscribe = async (plan: any) => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user) {
      alert("Please login first to subscribe!");
      navigate("/login");
      return;
    }

    try {
      await subscribePlan({
        user_id: user.id,
        plan_id: plan.id,
      });
      alert(`Successfully subscribed to ${plan.name}!`);
      navigate("/success");
    } catch (error) {
      alert("Subscription failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div style={styles.container} className="animate-fade">
      <header style={styles.header}>
        <h1 style={styles.title}>Simple, Transparent Pricing</h1>
        <p style={styles.subtitle}>Choose the plan that's right for your subscription needs.</p>
      </header>
      
      <div style={styles.grid}>
        {plans.map((plan: any) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            onSubscribe={handleSubscribe}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "4rem 5%",
    textAlign: "center" as const,
  },
  header: {
    marginBottom: "4rem",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#94a3b8",
    maxWidth: "600px",
    margin: "0 auto",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "2.5rem",
    flexWrap: "wrap" as const,
    marginTop: "2rem",
  },
};

export default Pricing;