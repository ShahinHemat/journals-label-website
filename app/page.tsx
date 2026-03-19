export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAV */}
      <nav className="p-6 flex justify-between border-b border-gray-800">
        <h1 className="text-xl font-bold">Your Label</h1>
        <a href="#contact" className="text-sm opacity-70 hover:opacity-100">
          Contact
        </a>
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Independent Music Label
        </h2>
        <p className="opacity-70 max-w-xl mx-auto">
          Discover our artists and latest releases.
        </p>
      </section>

      {/* ARTISTS */}
      <section className="px-6 py-16 border-t border-gray-800">
        <h3 className="text-2xl font-semibold mb-6">Artists</h3>

        <div className="space-y-4">
          <div>
            <p className="font-medium">Artist Name</p>
            <a
              href="https://spotify.com"
              target="_blank"
              className="text-sm opacity-70 hover:opacity-100"
            >
              Listen
            </a>
          </div>

          <div>
            <p className="font-medium">Another Artist</p>
            <a
              href="https://soundcloud.com"
              target="_blank"
              className="text-sm opacity-70 hover:opacity-100"
            >
              Listen
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16 border-t border-gray-800">
        <h3 className="text-2xl font-semibold mb-4">Demo Submissions</h3>
        <p className="opacity-70">
          Send demos to:{" "}
          <a href="mailto:demo@label.com" className="underline">
            demo@label.com
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="p-6 border-t border-gray-800 text-sm opacity-50 text-center">
        © {new Date().getFullYear()} Your Label
      </footer>
    </main>
  );
}