import { useState } from "react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <Layout>
      <section className="w-full px-6 md:px-16 lg:px-20 py-12 md:py-20">
        {/* Coordinates */}
        <div className="mb-12 md:mb-16 text-sm leading-relaxed">
          <p className="font-bold mb-1">CLAC</p>
          <p>44 Rue Chevalier — 33000 Bordeaux</p>
          <p className="mt-2">
            <a href="tel:0772090255" className="hover:underline underline-offset-4">07 72 09 02 55</a>
          </p>
          <p>
            <a href="mailto:contact@clac.archi" className="hover:underline underline-offset-4">contact@clac.archi</a>
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-20">
            <p className="text-lg">Merci pour votre message. Nous reviendrons vers vous rapidement.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                required
                maxLength={100}
                className="w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
              />
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                required
                maxLength={100}
                className="w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
              />
            </div>

            <input
              type="text"
              name="objet"
              placeholder="Objet"
              required
              maxLength={200}
              className="w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              maxLength={255}
              className="w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
            />

            <textarea
              name="message"
              placeholder="Message"
              required
              maxLength={2000}
              rows={5}
              className="w-full border-b border-foreground/30 bg-transparent py-3 text-sm outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground resize-none"
            />

            <div>
              <button
                type="submit"
                className="bg-black/8 backdrop-blur-md border border-black/10 text-black text-xs tracking-[0.1em] px-4 py-1.5 rounded-full shadow-sm hover:bg-black/15 transition-colors"
              >
                Envoyer
              </button>
            </div>
          </form>
        )}
      </section>
    </Layout>
  );
};

export default Contact;
