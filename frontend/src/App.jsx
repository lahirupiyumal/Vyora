function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-white">
      <section className="max-w-2xl text-center">
        <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-400/30">
          React + Vite + Tailwind CSS
        </span>
        <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-7xl">
          Vyora frontend is ready.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Start building by editing{' '}
          <code className="rounded bg-white/10 px-2 py-1 text-cyan-200">
            src/App.jsx
          </code>
          .
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a
            className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
          >
            React Docs
          </a>
          <a
            className="rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:bg-white/10"
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind Docs
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
