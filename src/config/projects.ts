// Published project case studies, newest first. Shown on Home (Latest projects), Projects and under Custom AI Agents.
export const projects = [
  {
    slug: "novanutri",
    title: "NovaNutri",
    tagline: "From a food photo to the next meal: an AI agent built end to end on AWS",
    status: "Completed November 2026",
    service: "custom-ai-agents",
    summary:
      "An AI agent that reads a photo of a meal, works out the foods, grams and nutrition, and suggests a balanced next meal with " +
      "sources from the U.S. Dietary Guidelines. Built from the data pipeline and model training to a deployed service on Amazon " +
      "Web Services.",
    demoUrl: "https://novanutri.novapunkai.com",
    video: {
      hd: "/videos/novanutri/novanutri-demo-1080p.mp4",
      light: "/videos/novanutri/novanutri-demo-720p.mp4",
      poster: "/videos/novanutri/novanutri-demo-poster.jpg",
      length: "2:03",
    },
    highlights: [
      "Own vision model for foods and grams, with its test error published (about 26 percent calorie error)",
      "Nutrition calculated by code, never by a language model",
      "Two models side by side, each sentence checked against the plate and the cited guidelines",
      "Agent tools through an MCP server; data, model, agent and service each built and verified on AWS",
    ],
    stack: [
      "Python", "LangGraph", "MCP", "FastAPI", "React", "Amazon Bedrock", "Amazon ECS", "Amazon EKS", "SageMaker", "AWS Glue",
      "Step Functions", "Aurora PostgreSQL", "Apache Airflow", "Terraform", "GitHub Actions",
    ],
  },
] as const;

export type Project = (typeof projects)[number];
