export const services = [
  {
    slug: "custom-ai-agents", category: "AI Agents", title: "Custom AI Agents",
    description: "Start with your business requirements and data. NovaPunk analyzes your data, selects and adapts AI models, and develops a custom agent around your goals and workflows. We bring data analysis, model development, performance measurement, and continuous improvement together in one complete solution.",
    details: "Your agent is designed to automate connected tasks, measure their impact against agreed business goals, and use the results to guide ongoing improvements. We build evaluation and feedback loops that test changes and automate improvements within defined limits, with human approval where needed. The result is an AI agent built for your business, with a continuous process for improving the outcomes that matter to you.",
    demo: "Retail marketing automation", deliverables: "Data analysis · Custom agent development · Continuous evaluation & improvement",
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
  {
    slug: "custom-website-development", category: "Web Development", title: "Custom Website Development",
    description: "We use AI technology to build custom websites quickly around your business needs. Instead of Wix, Squarespace, Shopify, or WordPress with a page builder, we build and deploy directly in your own cloud environment on Google Cloud or AWS. When you need to manage content yourself, we can integrate Payload CMS with a custom administration interface.",
    deliverables: "AI-assisted development · Built for your business · Deployed in your cloud",
    example: "This website was built in three days with GPT-6 assistance, using Node.js, TypeScript, and Tailwind CSS, and deployed on Google Cloud through Firebase Hosting.",
  },
] as const;

