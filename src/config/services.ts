export const services = [
  {
    slug: "custom-ai-agents", category: "AI Agents", title: "Custom AI Agents",
    description: "Connect customer understanding, targeting, content generation, and execution in one business workflow. NovaPunk builds agents that use purchase signals and retrieved product knowledge to create personalized offers, integrate delivery, and make campaign activity visible through dashboards and logs.",
    demo: "Retail marketing automation", deliverables: "Workflow integration · Targeting models · Personalized content",
  },
  {
    slug: "physics-world-models", category: "Physics World Models", title: "Physics World Model Applications",
    description: "Test physical actions before they reach the real world. We build simulation environments and predictive models for planning, using physical constraints to generate training data and evaluate the consequences of an action.",
    demo: "AI Harvest Planner with MuJoCo", deliverables: "Simulation environments · Outcome models · Planning tools",
  },
  {
    slug: "business-world-models", category: "Business World Models", title: "Business World Models & Analytics",
    description: "Explore how demand, resources, and operations respond to disruption. We combine exploratory data analysis, forecasting, and scenario simulation to help teams compare possible outcomes and understand the signals behind them.",
    demo: "Retail, energy & traffic scenarios", deliverables: "EDA & visualizations · Forecasts · Scenario analysis",
  },
  {
    slug: "cloud-data-ai", category: "Cloud & Data Engineering", title: "Cloud Data Architecture & Engineering",
    description: "Connect operational systems to analytics and AI through a deliberate cloud data architecture. We design schemas and warehouse models, migrate data, implement CDC and SQL transformation pipelines, and orchestrate and validate the flow using GCP services such as Cloud SQL, BigQuery, Datastream, and Dataform.",
    demo: "GCP architecture, CDC & analytical pipelines", deliverables: "Data modelling & migration · CDC & transformations · Orchestration & validation",
  },
] as const;

