# Upwork profile and Project Catalog drafts (NovaPunk LLC, Sean Son)

Drafted 2026-11-24 for the owner's review. Copy each block into Upwork. Prices are suggestions for the owner to decide.
(검토용 초안입니다. 각 블록을 Upwork에 그대로 붙여 넣으시면 됩니다. 가격은 제안이며 결정은 직접 하셔야 합니다.)

Before taking paid work: confirm with the school's DSO or an immigration attorney that freelance work fits the current
OPT conditions (STEM OPT does not allow self-employment).

## 1. Profile title (up to about 70 characters)

Option A: `AI Agent & Data Engineer | RAG, LLM Agents, AWS & GCP Pipelines`
Option B: `Custom AI Agents & Data Pipelines | 20+ Years in Data, AWS & GCP`

## 2. Overview (Upwork allows up to 5,000 characters; this is about 2,100)

```text
I build AI agents and data systems that work in production, not only in a notebook.

I have 20+ years in data: Oracle ERP at LG CNS, data warehouses, CRM and BI for large retailers in Korea, predictive
models as an analyst, and the Samsung integrated marketing data platform. I recently finished a master's in AI/ML and run
NovaPunk LLC, a small company that builds custom AI agents and data systems on request.

What I can do for you
- AI agents and RAG: document Q&A, workflow automation, agents that call your tools and data (MCP), with answers checked
  against your sources and numbers computed by code, not guessed by a model.
- Data pipelines: Airflow, SQL ETL with data quality rules, AWS Glue and Athena, BigQuery, dbt, CDC, Iceberg.
- Cloud deployment: Docker, AWS (ECS, EKS, Lambda, API Gateway, Bedrock, SageMaker) and Google Cloud, set up with
  Terraform and GitHub Actions, with no stored keys and costs kept low.
- Analytics and forecasting: EDA, predictive models, dashboards.

Recent project: NovaNutri (case study and 2-minute video at novapunkai.com/projects/novanutri)
An AI agent that reads a meal photo, works out foods, grams and nutrition, and suggests a balanced next meal with cited
sources. I built every layer: the data pipeline, model training and evaluation, the agent (two LLMs choosing tools on an
MCP server), and the deployment on AWS with CI/CD. One live recommendation costs about two cents.

How I work
1. You send the task and what "done" looks like.
2. I reply within two business days with questions or a fixed quote: scope, timeline and price.
3. I deliver in small steps with regular updates, document what I build, and fix bugs for 14 days after delivery.
   The code is yours.

I am honest about fit: if a request is better solved another way, or is not a good match for me, I will say so.

Time zone: US Eastern. English and Korean.
```

## 3. Skills (Upwork allows up to 15)

AI Agent Development, Retrieval Augmented Generation, LLM Prompt Engineering, Python, SQL, Data Engineering,
ETL Pipeline, Apache Airflow, Amazon Web Services, Google Cloud Platform, BigQuery, Docker, Terraform, Machine Learning,
Data Analysis

## 4. Hourly rate

Suggestion: start at $60 to $75 an hour to win the first reviews, then raise after 3 to 5 good reviews (AI and data
engineers with long experience commonly charge $80 to $150 on Upwork). Owner decides.

## 5. Portfolio items

1. **NovaNutri: an AI agent built end to end on AWS**
   - Link: https://novapunkai.com/projects/novanutri/ (add the live demo https://novanutri.novapunkai.com)
   - Images: the demo video still and the architecture figure.
   - Description: "Meal photo to foods, grams, nutrition and a balanced next meal with cited sources. Data pipeline
     (Airflow, Glue, Iceberg), model evaluation and SageMaker Pipelines, agent with LangGraph, MCP and Amazon Bedrock,
     deployment on ECS and EKS with GitHub Actions. About $0.02 per live recommendation."
   - Skills: AI Agent Development, RAG, AWS, Python, Data Engineering.
2. **NovaPunk company website with a project request system**
   - Link: https://novapunkai.com
   - Description: "Next.js site on Firebase Hosting with keyless CI/CD, a request form on Cloud Functions and Firestore
     with email notices, and Google Analytics 4 with region-based consent."
3. **Retail marketing automation on Google Cloud (Walsh Retail case)** if the owner wants it shown:
   - Link: the demo page on novapunkai.com (/demos/custom-ai-agents.html) and the blog series on isupernova.io.

## 6. Project Catalog offers (fixed price, three tiers)

Upwork Project Catalog sells fixed-scope packages. Keep each one small and clearly bounded.

### Offer 1: "I will build a document Q&A AI agent (RAG) on your files"

| Tier | Scope | Delivery | Suggested price |
|---|---|---|---|
| Starter | Up to 50 documents, one source type, simple web chat page, answers with citations | 2 weeks | $1,500 |
| Standard | Up to 500 documents, two sources, answer checks against sources, usage log | 4 weeks | $3,500 |
| Advanced | Your data and tools through an MCP server, evaluation set, deployment in your AWS or GCP account | 6 to 8 weeks | $7,500 |

Requirements from the buyer: sample documents, 10 real questions with good answers, where it should run.

### Offer 2: "I will build a data pipeline with quality checks on AWS or Google Cloud"

| Tier | Scope | Delivery | Suggested price |
|---|---|---|---|
| Starter | One source to cloud storage, daily schedule, basic checks | 2 weeks | $1,200 |
| Standard | SQL transforms with documented cleansing rules, query-ready tables (BigQuery or Athena/Iceberg) | 3 weeks | $3,000 |
| Advanced | Event-driven orchestration, data quality rules, infrastructure as code, run book | 4 weeks | $6,000 |

### Offer 3: "I will automate a data task or fix your Python, SQL or chatbot script"

| Tier | Scope | Delivery | Suggested price |
|---|---|---|---|
| Starter | One script or query fixed or automated | 1 week | $300 |
| Standard | A small automation with tests and a short guide | 1 to 2 weeks | $800 |
| Advanced | Automation plus scheduling and deployment in your cloud | 2 weeks | $1,800 |

Delivery times follow the owner's rule of realistic durations; a larger AI agent build (1 to 3 months) is quoted
separately after the first conversation.

## 7. First proposals: a short template

```text
Hi [name], I read your post about [their problem in one line].

How I would approach it: [2 or 3 concrete steps].
A similar project: NovaNutri, an AI agent I built end to end on AWS (case study and video:
novapunkai.com/projects/novanutri). [one sentence on the matching part].

I can deliver [first milestone] in [time]. Two questions so I can quote a fixed price:
1. [question about data or scope]
2. [question about where it runs or what "done" means]

Sean
```

Tips: answer within hours of a post, send 2 to 3 focused proposals a day, and prefer small fixed-price jobs first to
build reviews.
