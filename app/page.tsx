export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur z-50 flex justify-between items-center px-6 py-4">
        
        {/* LOGO */}
        <img
          src="/logo.png"
          alt="Logo"
          className="h-8 w-auto"
        />

        <a href="#contact" className="text-sm opacity-70 hover:opacity-100">
          Contact
        </a>
      </nav>

      {/* SPACING FOR FIXED NAV */}
      <div className="h-20" />

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Journals
        </h2>
        <p className="opacity-70 max-w-xl mx-auto">
          Independent Music Label
          <br/>
          Driven by rhythm. Built for community.
        </p>
      </section>

      {/* ARTISTS + PLAYLISTS (SIDE BY SIDE) */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold mb-2">Our Artists</h3>
            <p className="opacity-70 mb-6">Sorrwy</p>

            {/* SPOTIFY EMBED (ARTIST) */}
            <div className="w-full h-[352px]">
              {/* 🔁 REPLACE THIS IFRAME WITH REAL SPOTIFY EMBED */}
              <iframe
                src="https://open.spotify.com/embed/artist/53VCwbE1OVv7SANfZRPkRB?"
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold mb-2">Our Playlists</h3>
            <p className="opacity-70 mb-6">Best of Deep House 2026</p>

            {/* SPOTIFY EMBED (PLAYLIST) */}
            <div className="w-full h-[352px]">
              {/* 🔁 REPLACE THIS IFRAME WITH REAL SPOTIFY EMBED */}
              <iframe
                src="https://open.spotify.com/embed/playlist/1GBcFgTJke9cCKOO4QLCvl?"
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Demo Submissions</h3>
        <p className="opacity-70">
          Send demos to:{" "}
          <a href="mailto:demo@journalsmusic.com" className="underline">
            demo@journalsmusic.com
          </a>
          <br/>
          <br/>
          <div style={{fontSize: "12px"}}>
            Add a few words about yourself and your project in the email. 
          <br/>
          We do not accept files; please add a link to Dropbox, SoundCloud, Google Drive etc.
          </div>
          
        </p>
      </section>

      {/* FOOTER */}
      <footer className="p-6 text-sm opacity-50 text-center">
        © {new Date().getFullYear()} Journals
      </footer>

    </main>
  );
}