"""Generate standalone, script-free HTML examples from the service content."""
import argparse
import json
from html import escape
from pathlib import Path
from shutil import copyfile

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "demos"
OUTPUT.mkdir(parents=True, exist_ok=True)
BRAND = ROOT / "public" / "images" / "brand"
BRAND.mkdir(parents=True, exist_ok=True)
copyfile(ROOT / "src/assets/images/logo-light.svg", BRAND / "logo-light.svg")
copyfile(ROOT / "src/assets/images/novapunk-cosmic-logo.webp", BRAND / "cosmic-logo.webp")
DATA = json.loads((ROOT / "content/service-demos.json").read_text(encoding="utf-8"))
parser = argparse.ArgumentParser()
parser.add_argument("--slugs", nargs="*", help="Regenerate only the named pages")
args = parser.parse_args()

CSS = """
:root{--ink:#111a33;--muted:#4a5470;--accent:#2456d6;--line:#e3e7f0;--surface:#f6f8fc}
*{box-sizing:border-box}body{margin:0;color:var(--ink);background:#fff;font:16px/1.7 'Segoe UI',Arial,sans-serif}a{color:var(--accent)}a:focus-visible{outline:3px solid var(--accent);outline-offset:5px}h1,h2,h3,p{margin:0}h1,h2,h3{line-height:1.2;text-wrap:balance}h1{font-size:clamp(32px,5vw,56px);letter-spacing:-.03em}h2{font-size:clamp(25px,3vw,36px);margin-bottom:18px}h3{font-size:20px;margin-bottom:10px}.wrap{width:min(1080px,100%);margin:auto;padding:0 24px}.bar{min-height:80px;display:flex;align-items:center;justify-content:space-between;gap:24px}.brand{display:block;flex-shrink:0}.brand img{width:200px;height:auto;display:block}header{border-bottom:1px solid var(--line);background:white}nav{display:flex;flex-wrap:wrap;gap:24px}nav a{font-size:14px;text-transform:uppercase;color:var(--ink);text-decoration:none}.hero{padding:64px 0;background-color:var(--surface);background-image:linear-gradient(#111a3308 1px,transparent 1px),linear-gradient(90deg,#111a3308 1px,transparent 1px);background-size:40px 40px}.eyebrow{color:var(--accent);font-size:12px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:16px}.subtitle{font-size:clamp(20px,2.5vw,26px);margin:22px 0 16px}.intro{max-width:780px;color:var(--muted)}.button{display:inline-block;margin-top:24px;padding:12px 20px;background:var(--accent);color:#fff;text-decoration:none;font-weight:600}.back{display:inline-block;margin-bottom:24px}.section{padding:56px 0;border-bottom:1px solid var(--line)}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}.panel{padding:28px;border:1px solid var(--line);background:var(--surface);min-width:0}ul{padding-left:21px;margin:12px 0 0}li{margin-bottom:8px}.status{display:inline-block;border:1px solid #bcccf3;padding:5px 12px;color:#2456d6;font-size:12px;background:#eef3ff;margin-bottom:18px}.flow{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin-top:26px}.step{padding:20px 16px;border-top:3px solid var(--accent);background:var(--surface);min-width:0}.step b{font-size:12px;color:var(--accent)}.step h3{font-size:17px;margin:10px 0}.step p{font-size:14px;color:var(--muted)}.metrics{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin:24px 0}.metric{padding:24px;background:var(--surface)}.metric strong{display:block;font-size:30px;color:var(--accent);line-height:1.3}.metric span{font-size:14px;color:var(--muted)}.note{font-size:14px;color:var(--muted);margin-top:14px}.dashboard{border:1px solid var(--line);padding:24px;margin-top:24px;background:white}.dashboard-top{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:20px}.table-wrap{overflow-x:auto}table{border-collapse:collapse;width:100%;font-size:14px;min-width:500px}th,td{text-align:left;padding:14px 12px;border-bottom:1px solid var(--line)}th{background:var(--surface)}figure{margin:28px 0 0}figure img{display:block;width:100%;height:auto;border:1px solid var(--line)}figcaption{font-size:14px;color:var(--muted);margin-top:12px}.domain-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:24px}.domain-grid .panel{padding:22px}.domain-grid p{font-size:14px}.callout{border-left:3px solid var(--accent);padding:20px 24px;background:var(--surface);margin-top:24px}.sources{display:flex;flex-direction:column;align-items:flex-start;gap:12px}.contact{padding:56px 0;background:var(--surface)}footer{background:#000;color:#fff;padding:24px 0}footer .brand img{width:200px}footer nav a{color:white}.footer-bottom{border-top:1px solid #333;margin-top:18px;padding-top:18px;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;font-size:14px}footer a{color:#c6d4ff}.page-nav{display:flex;flex-wrap:wrap;gap:16px;margin-top:28px}.page-nav a{font-size:14px;overflow-wrap:anywhere}.source-note{margin-top:18px;color:var(--muted);font-size:14px}
@media(max-width:760px){.bar{flex-wrap:wrap;padding:18px 0;gap:18px}nav{gap:16px}.hero{padding:40px 0}.section{padding:40px 0}.grid,.domain-grid{grid-template-columns:1fr}.flow{grid-template-columns:1fr}.step{padding:18px}.metrics{grid-template-columns:1fr}.metric{padding:18px}.wrap{padding:0 20px}.panel,.dashboard{padding:20px}footer .bar{align-items:flex-start}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
"""

def text(value):
    return escape(str(value), quote=True)

def bullets(items):
    return "<ul>" + "".join(f"<li>{text(item)}</li>" for item in items) + "</ul>"

def navigation():
    return '<nav aria-label="Main navigation">' + "".join(
        f'<a href="{url}">{label}</a>' for label, url in
        [("Home", "/"), ("Services", "/services"), ("Projects", "/projects"), ("About", "/about"), ("Contact", "/contact")]
    ) + "</nav>"

def detail_sections(demo):
    return "".join(
        f'<section class="section"><div class="wrap"><h2>{text(section["title"])}</h2><p class="intro">{text(section["intro"])}</p><div class="grid" style="margin-top:24px">' +
        "".join(f'<article class="panel"><h3>{text(card["title"])}</h3><p>{text(card["body"])}</p></article>' for card in section["cards"]) +
        '</div></div></section>' for section in demo.get("sections", [])
    )

def video_gallery(demo):
    if not demo.get("videos"):
        return ""
    return '<section class="section"><div class="wrap"><h2>The simulation in motion.</h2><p class="intro">Recorded MuJoCo simulations from the harvest research. Select play to watch each sequence; these recordings do not operate a physical robot.</p>' + "".join(
        f'<figure><h3>{text(video["title"])}</h3><video controls playsinline preload="metadata" aria-label="{text(video["title"])}" aria-describedby="video-caption-{i}" style="display:block;width:100%;max-width:900px;aspect-ratio:16/9;background:#000;margin-top:16px"><source src="../videos/harvest/{text(video["file"])}" type="video/mp4">Your browser does not support embedded video. <a href="../videos/harvest/{text(video["file"])}">Open the MP4 recording</a>.</video><figcaption id="video-caption-{i}">{text(video["caption"])} <a href="../videos/harvest/{text(video["file"])}">Open video separately</a></figcaption></figure>' for i, video in enumerate(demo["videos"])
    ) + '</div></section>'

def agent_architecture(demo):
    system = demo.get("systemOverview")
    if not system:
        return ""
    layers = "".join(
        f'<article class="panel"><p class="eyebrow">Layer 0{i+1}</p><h3>{text(layer["title"])}</h3><p>{text(layer["body"])}</p><p class="note"><strong>{text(layer["tools"])}</strong></p></article>'
        for i, layer in enumerate(system["layers"])
    )
    steps = "".join(
        f'<li class="panel"><h3>{text(step["title"])}</h3><p>{text(step["body"])}</p><p class="note"><strong>Output:</strong> {text(step["output"])}</p></li>'
        for step in system["steps"]
    )
    return f'''<section id="agent-architecture" class="section"><div class="wrap"><h2>AI Agent - complete system architecture.</h2><p class="intro">{text(system['intro'])}</p><div class="callout"><strong>Operational data → analytical features → prediction + retrieved knowledge → personalized action</strong><p>Workflow orchestration coordinates the data preparation; campaign records connect model outputs, generated content, and reporting.</p></div><div class="grid" style="margin-top:24px">{layers}</div><figure><a href="../images/demos/agent-system-0.webp" target="_blank" rel="noopener" aria-label="Open original AI Agent architecture at full size"><img src="../images/demos/agent-system-0.webp" alt="Walsh Retail infrastructure, data pipeline, intelligence layer and reporting architecture" loading="lazy"></a><figcaption>Original system diagram from the Walsh Retail report, Figure 39. Its historical labels include Kaggle brand reviews and Tableau/ROI analysis; the later implementation text describes synthetic reviews, Pinecone and Looker Studio. No measured campaign ROI is presented here. Select the diagram to enlarge it.</figcaption></figure></div></section>
<section id="automation-flow" class="section"><div class="wrap"><h2>Automation Flow - from data to delivery.</h2><p class="intro">Continuous ingestion and scheduled feature preparation supply the campaign workflow. Prediction, generation, delivery, and reporting follow the prepared data.</p><ol class="grid" style="padding-left:24px;margin-top:24px;gap:20px">{steps}</ol><figure><a href="../images/demos/agent-email-flow-0.webp" target="_blank" rel="noopener" aria-label="Open email automation diagram at full size"><img src="../images/demos/agent-email-flow-0.webp" alt="Campaign offer inputs flow through Gemini to subject, offer body, product description and CTA, then SendGrid delivery" loading="lazy"></a><figcaption>Email generation and delivery diagram from the report, Figure 46. The demonstration runs in Colab; the Cloud Run Job shown in this diagram is the proposed production execution path. Select the diagram to enlarge it.</figcaption></figure><div class="callout"><strong>Demonstrated workflow and production automation</strong><p>The reference project demonstrates CDC, scheduled Dataform invocation, customer targeting, generated offers, notebook-based email submission, and stored campaign records. Scheduling the complete ML-to-delivery chain, monitoring completion, retries, duplicate-send prevention, and response-driven model feedback are production integration work.</p></div></div></section>'''

def preview(kind):
    if kind == "marketing":
        return '''<div class="dashboard"><div class="dashboard-top"><h3>Campaign workspace</h3><span class="status">Illustrative layout / synthetic examples</span></div><div class="table-wrap"><table><caption class="note">Example records show the intended workflow; they are not exported execution logs.</caption><thead><tr><th>Customer</th><th>Segment</th><th>Product context</th><th>Next action</th></tr></thead><tbody><tr><td>Sample customer A</td><td>Premium</td><td>Preferred category + retrieved review</td><td>Review personalized offer</td></tr><tr><td>Sample customer B</td><td>Very High</td><td>Purchase history + catalog</td><td>Review generated email</td></tr><tr><td>Sample customer C</td><td>Other</td><td>Campaign selection rules</td><td>Excluded from target audience</td></tr></tbody></table></div><div class="callout"><strong>Offer → content → delivery → activity log</strong><p>Client-specific approval steps can be added before execution.</p></div></div>'''
    if kind == "physics":
        return '<div class="callout"><strong>Geometry → physical scene → simulated actions → labels → planner</strong><p>A single fruit is evaluated across four apertures from the same saved state. The resulting labels describe simulated outcomes.</p></div>'
    if kind == "business":
        return '<div class="domain-grid">' + "".join(
            f'<article class="panel"><h3>{title}</h3><p>{description}</p></article>' for title, description in [
                ("Retail", "Sales history and external signals feed forecasting and Monte Carlo disruption scenarios."),
                ("Energy", "PJM/EIA observations inform Grid2Op scenarios and PPO policy evaluation."),
                ("Traffic", "Hourly volume and weather feed a 24-hour TFT forecast and natural-language explanations.")]
        ) + '</div>'
    return '''<div class="grid" style="margin-top:24px"><article class="panel"><h3>Operational and analytical boundaries</h3><p>Normalized transaction tables feed a source replica. Dataform builds purpose-specific marts for BI and AI consumers, keeping their transformations separate from operational writes.</p></article><article class="panel"><h3>Verification path</h3><p>Source UPDATE → CDC replica → transformation job → analytical join. Matching timestamps provide a concrete check that the change reached the intended data product.</p></article></div><div class="callout"><strong>A reference architecture evolves.</strong><p>The original design includes Cloud Composer and a GCS landing path. The later pipeline uses direct BigQuery ingestion and Cloud Workflows. The diagrams below preserve both stages and identify their differences.</p></div>'''

generated = 0
for demo in DATA:
    if args.slugs and demo["slug"] not in args.slugs:
        continue
    metrics = "".join(f'<div class="metric"><strong>{text(m["value"])}</strong><span>{text(m["label"])}</span></div>' for m in demo["metrics"])
    flow = "" if demo.get("systemOverview") else "".join(f'<article class="step"><b>0{i+1}</b><h3>{text(s["name"])}</h3><p>{text(s["detail"])}</p></article>' for i, s in enumerate(demo["flow"]))
    figures = "".join(f'<figure><a href="../images/demos/{text(f["src"])}" target="_blank" rel="noopener" aria-label="Open full-size figure: {text(f["alt"])}"><img src="../images/demos/{text(f["src"])}" alt="{text(f["alt"])}" loading="lazy"></a><figcaption>{text(f["caption"])} Select the figure to view it at full size.</figcaption></figure>' for f in demo.get("figures", []))
    sources = "".join(f'<a href="{text(s["url"])}" target="_blank" rel="noopener noreferrer">{text(s["title"])} ↗</a>' for s in demo["sources"])
    page_nav = "".join(f'<a href="{text(d["slug"])}.html"{(" aria-current=\"page\"" if d == demo else "")}>{text(d["title"])}</a>' for d in DATA)
    static_note = "Recorded videos and figures illustrate the research. No live agent, model, or simulator runs on this page." if demo.get("videos") else "Static demonstration page. Figures and examples replace the video presentation for now; no live agent, model, or simulator runs on this page."
    html = f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{text(demo['title'])} | NovaPunk LLC</title><meta name="description" content="{text(demo['description'])}"><style>{CSS}</style></head>
<body><header><div class="wrap bar"><a class="brand" href="/"><img src="../images/brand/logo-light.svg" alt="NovaPunk LLC"></a>{navigation()}</div></header>
<main><section class="hero"><div class="wrap"><a class="back" href="/#services">← All services</a><p class="eyebrow">{text(demo['category'])}</p><h1>{text(demo['title'])}</h1><p class="subtitle">{text(demo['subtitle'])}</p><p class="intro">{text(demo['description'])}</p><a class="button" href="/contact">Discuss this service</a></div></section>
<section class="section"><div class="wrap"><h2>Built for your requirements.</h2><div class="grid"><article class="panel"><h3>The problem</h3><p>{text(demo['problem'])}</p></article><article class="panel"><h3>What we can build with you</h3>{bullets(demo['deliverables'])}</article></div></div></section>
{detail_sections(demo)}
{agent_architecture(demo)}
<section class="section"><div class="wrap"><span class="status">Internal research / prototype</span><h2>{text(demo['example'])}</h2><p>{text(demo['context'])}</p><p class="note">{static_note}</p><div class="grid" style="margin-top:24px"><article class="panel"><h3>Inputs and data</h3>{bullets(demo['inputs'])}</article><article class="panel"><h3>Example scope</h3><p>{text(demo['results'])}</p></article></div><div class="flow">{flow}</div>{preview(demo['preview'])}{figures}</div></section>
{video_gallery(demo)}
<section class="section"><div class="wrap"><h2>What the study reports.</h2><div class="metrics">{metrics}</div><p class="note">Metrics are reproduced from the supplied research or original project account. They have not been independently rerun for this website.</p><div class="panel" style="margin-top:28px"><h3>Boundaries and next work</h3>{bullets(demo['limitations'])}</div></div></section>
<section class="section"><div class="wrap"><h2>Explore the engineering.</h2><div class="sources">{sources}</div><p class="source-note">{text(demo.get('sourceNote', 'Based on the original project account by Sungwon Son.'))}</p><nav class="page-nav" aria-label="Other service examples">{page_nav}</nav></div></section>
<section class="contact"><div class="wrap"><h2>What would you like to build?</h2><p>Tell us about your workflow, available data, and the decision or task you want to improve.</p><a class="button" href="/contact">Contact NovaPunk</a></div></section></main>
<footer><div class="wrap"><div class="bar"><a class="brand" href="/"><img src="../images/brand/cosmic-logo.webp" alt="NovaPunk AI cosmic supernova logo" width="200" height="133"></a>{navigation()}</div><div class="footer-bottom"><span>© 2026 NovaPunk LLC</span><a href="mailto:sean@novapunkai.com">sean@novapunkai.com</a></div></div></footer></body></html>'''
    (OUTPUT / f"{demo['slug']}.html").write_text(html, encoding="utf-8")
    generated += 1
print(f"Generated {generated} standalone HTML service examples in {OUTPUT}")
