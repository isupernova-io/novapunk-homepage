import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ProjectVideo from "@/components/ProjectVideo";
import { projects } from "@/config/projects";

const project = projects.find((p) => p.slug === "novanutri")!;

export const metadata: Metadata = {
  title: "NovaNutri",
  description: "NovaNutri: an AI agent that turns a meal photo into nutrition facts and a balanced next meal, built end to end on AWS.",
};

const stages = [
  ["Data pipeline", "Apache Airflow on an on-premise server cleans each day's records by documented rules and lands them in Amazon S3. "
    + "EventBridge starts Step Functions, AWS Glue writes Apache Iceberg tables with Data Quality rules, and Athena checks the counts."],
  ["Model", "A vision model on DINOv2 features predicts foods and grams. It was evaluated once on an untouched test split; SageMaker "
    + "Pipelines reproduced it and registered it in the Model Registry."],
  ["Agent", "A LangGraph workflow corrects the plate, calculates nutrition in code and asks two models on Amazon Bedrock for the next "
    + "meal. The models choose their own tools on a NovaNutri MCP server; a Bedrock Knowledge Base holds the guidelines and a "
    + "Guardrail scores each sentence."],
  ["Service", "One container image runs the API and the MCP server on Amazon ECS behind API Gateway with a Cognito sign-in. GitHub "
    + "Actions tests the shipped image and deploys it without stored keys. The same services also ran on Amazon EKS with Helm."],
  ["Web demo", "A React page on CloudFront replays recorded results for every visitor; a signed-in live mode runs real photos "
    + "through the service."],
] as const;

const results = [
  ["About 26%", "calorie error of the vision model on the untouched test split"],
  ["2 models", "gpt-oss-120b and Amazon Nova 2 Lite, answering side by side"],
  ["About $0.02", "per live recommendation from both models, measured on AWS"],
  ["0 stored keys", "OIDC for CI/CD, IAM roles and tokens for the service"],
] as const;

export default function NovaNutri() {
  return <>
    <PageIntro eyebrow="Project · Custom AI Agents" title={project.title}>
      <div className="space-y-5">
        <p className="text-xl text-default-900">{project.tagline}.</p>
        <p>{project.summary}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={project.demoUrl} target="_blank" rel="noopener" className="inline-block bg-primary hover:bg-primary-hover text-white px-6 py-3">
            Open the live demo <span aria-hidden="true">↗</span>
          </a>
          <Link href="/contact" className="inline-block border-2 border-default-200 hover:border-primary text-default-900 px-6 py-3">
            Discuss a similar agent
          </Link>
        </div>
      </div>
    </PageIntro>

    <section className="lg:px-7.5 md:px-5 px-4">
      <div className="container px-6 md:px-10 py-16 space-y-3">
        <ProjectVideo video={project.video} title={project.title} />
        <p className="text-sm text-default-600">Demo video, {project.video.length}. Real screens of the public demo and of each stage on AWS.</p>
      </div>
    </section>

    <section className="lg:px-7.5 md:px-5 px-4">
      <div className="container px-6 md:px-10 pb-16 space-y-6">
        <h2 className="text-3xl">The problem</h2>
        <p className="max-w-200 leading-relaxed">Photo food apps usually show one calorie number without the foods and amounts behind it, and general chat models can
          state numbers that are not on the plate. NovaNutri treats this as an agent problem: a model makes the first guess, the guess is
          corrected, numbers come from code and reference data, and every suggestion is grounded in a cited source.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {project.highlights.map((h) => (
            <p key={h} className="border-2 border-default-100 p-5 leading-relaxed">{h}</p>
          ))}
        </div>
      </div>
    </section>

    <section className="lg:px-7.5 md:px-5 px-4">
      <div className="container px-6 md:px-10 pb-16 space-y-6">
        <h2 className="text-3xl">What was built</h2>
        <img src="/images/projects/novanutri/architecture.png" alt="NovaNutri architecture: on-premise ETL, data pipeline, model, agent and deployment on AWS"
          className="w-full border-2 border-default-100" loading="lazy" />
        <div className="divide-y divide-default-200 border-y border-default-200">
          {stages.map(([name, text]) => (
            <div key={name} className="grid md:grid-cols-[12rem_1fr] gap-2 md:gap-6 py-5">
              <h3 className="text-xl text-default-900">{name}</h3>
              <p className="leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="lg:px-7.5 md:px-5 px-4">
      <div className="container px-6 md:px-10 pb-16 space-y-6">
        <h2 className="text-3xl">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map(([big, text]) => (
            <div key={big} className="border-2 border-default-100 p-6 space-y-2">
              <p className="text-3xl text-primary font-semibold">{big}</p>
              <p className="text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-default-600 max-w-200">The sample photos on the demo were chosen from dishes the model predicted well, so they do not show
          its typical accuracy; the published error comes from the whole test split.</p>
      </div>
    </section>

    <section className="lg:px-7.5 md:px-5 px-4">
      <div className="container px-6 md:px-10 pb-16 space-y-6">
        <h2 className="text-3xl">Built with cost and security in mind</h2>
        <ul className="list-disc pl-5 space-y-2 max-w-200 leading-relaxed">
          <li><strong className="text-default-900">About $0.014 to $0.019 per live recommendation</strong>, both models together, measured on AWS.</li>
          <li><strong className="text-default-900">No stored keys.</strong> GitHub Actions deploys through OpenID Connect roles; the service signs in to its
            database with short-lived IAM tokens.</li>
          <li><strong className="text-default-900">Protected entry.</strong> The public demo sits behind AWS WAF; the live API answers only the owner&apos;s sign-in.</li>
          <li><strong className="text-default-900">Nothing runs without a reason.</strong> Every stage was priced before it was built; experiment stacks were
            removed after they were proven, and the live service stops itself after an hour without requests.</li>
        </ul>
        <p className="text-sm text-default-600">Stack: {project.stack.join(" · ")}</p>
      </div>
    </section>

    <section className="lg:px-7.5 md:px-5 px-4">
      <div className="container px-6 md:px-10 pb-16 space-y-4 text-sm text-default-600 border-t border-default-200 pt-8">
        <h2 className="text-lg text-default-900">Disclaimer, credits and trademarks</h2>
        <p>NovaNutri is a technology demonstration. It gives general healthy eating information only and is not medical, nutrition, or dietary
          advice. Results come from AI models and may be wrong; calories and nutrients are estimates. Meal pictures are AI illustrations.</p>
        <p>Food photos: Nutrition5k, Google Research, licensed under <a className="underline" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>.
          Nutrient values: Nutrition5k and USDA FoodData Central (public domain).</p>
        <p>NovaNutri runs on Amazon Web Services as a regular paying customer. AWS, Amazon Bedrock and other product and model names are trademarks
          of their owners. NovaPunk LLC is not affiliated with, sponsored by, or endorsed by Amazon Web Services or any other company named here.</p>
      </div>
    </section>
  </>;
}
