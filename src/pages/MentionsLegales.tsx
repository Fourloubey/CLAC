import Layout from "@/components/Layout";

const MentionsLegales = () => {
  return (
    <Layout>
      <section className="w-full px-6 md:px-16 lg:px-20 py-12 md:py-20 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-10">Mentions légales</h1>

        <h2 className="text-lg font-bold mb-4">Éditeur du site</h2>
        <p className="mb-2 leading-relaxed">CLAC – Architecture</p>
        <p className="mb-2 leading-relaxed">44 Rue Chevalier, 33000 Bordeaux</p>
        <p className="mb-2 leading-relaxed">Téléphone : 07 72 09 02 55</p>
        <p className="mb-6 leading-relaxed">Email : contact@clac.archi</p>

        <h2 className="text-lg font-bold mb-4 mt-8">Directrices de la publication</h2>
        <p className="mb-6 leading-relaxed">Cécile et Hélène, co-fondatrices de CLAC.</p>

        <h2 className="text-lg font-bold mb-4 mt-8">Hébergement</h2>
        <p className="mb-6 leading-relaxed">
          Ce site est hébergé par Lovable (lovable.dev).
        </p>

        <h2 className="text-lg font-bold mb-4 mt-8">Propriété intellectuelle</h2>
        <p className="mb-6 leading-relaxed">
          L'ensemble du contenu de ce site (textes, images, photographies, illustrations, logos) est la propriété exclusive de CLAC ou de ses partenaires. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de CLAC.
        </p>

        <h2 className="text-lg font-bold mb-4 mt-8">Crédits photographiques</h2>
        <p className="mb-6 leading-relaxed">
          Les photographies présentées sur ce site sont protégées par le droit d'auteur. Leur utilisation sans autorisation est strictement interdite.
        </p>
      </section>
    </Layout>
  );
};

export default MentionsLegales;
