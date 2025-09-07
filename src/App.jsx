import Navbar from './components/Navbar';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-green-600 to-emerald-900 text-white">
      <Navbar />

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 py-24">
        <img
          src="/images/hero-ev.jpg"
          alt="EV roadside assistance"
          className="absolute inset-0 w-full h-full object-cover -z-9 opacity-30 pointer-events-none"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/80 via-green-700/70 to-emerald-900/90 -z-10 pointer-events-none" />

        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Power Motion Rescue
          </h1>
          <p className="mt-4 text-lg text-emerald-10">
            Fast, reliable roadside assistance for electrical vehicles and more.
          </p>

          {/* Scroll to contact form */}
          <a href="#quote" className="inline-block mt-8 px-6 py-3 rounded-xl bg-white text-emerald-900 font-semibold hover:bg-emerald-100 transition"
          >
            Get Help Now
          </a>
        </div>
      </section>

      {/* About */}
      <About />

      {/* Services */}
      <Services />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
