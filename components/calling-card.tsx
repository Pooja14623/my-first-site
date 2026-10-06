import { Mail } from 'lucide-react'

const EMAIL = 'poojasarsambi6@gmail.com'

export function CallingCard() {
  return (
    <article className="w-full max-w-xl overflow-hidden rounded-2xl border bg-card shadow-[0_24px_60px_-30px_oklch(0.42_0.13_330/0.45)]">
      <div className="h-2 bg-primary" aria-hidden="true" />
      <div className="flex flex-col gap-10 p-8 sm:p-12">
        <header className="flex flex-col gap-4">
          <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Pooja Bhimshankar Sarsambi
          </h1>
          <p className="font-mono text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Software Engineer
          </p>
        </header>

        <div className="h-px bg-border" aria-hidden="true" />

        <section aria-labelledby="contact-heading" className="flex flex-col gap-3">
          <h2
            id="contact-heading"
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            How to reach me
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex w-fit items-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:text-base"
          >
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            <span className="break-all">{EMAIL}</span>
          </a>
        </section>
      </div>
    </article>
  )
}
