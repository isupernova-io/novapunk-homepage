export default function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="lg:px-7.5 md:px-5 px-4">
    <div className="container pt-36 md:pt-44 pb-16 px-6 md:px-10 space-y-5 bg-default-50">
      <p className="text-primary text-sm uppercase tracking-wider">{eyebrow}</p>
      <h1 className="text-4xl md:text-6xl max-w-200">{title}</h1>
      <div className="max-w-175 leading-relaxed">{children}</div>
    </div>
  </section>;
}

