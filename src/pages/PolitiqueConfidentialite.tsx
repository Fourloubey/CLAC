import Layout from "@/components/Layout";

const PolitiqueConfidentialite = () => {
  return (
    <Layout>
      <section className="w-full px-6 md:px-16 lg:px-20 py-12 md:py-20 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-10">Politique de confidentialité</h1>

        <h2 className="text-lg font-bold mb-4">Collecte des données personnelles</h2>
        <p className="mb-6 leading-relaxed">
          Les données personnelles collectées sur ce site (nom, email, téléphone) via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont en aucun cas transmises à des tiers.
        </p>

        <h2 className="text-lg font-bold mb-4 mt-8">Responsable du traitement</h2>
        <p className="mb-6 leading-relaxed">
          CLAC – Architecture<br />
          44 Rue Chevalier, 33000 Bordeaux<br />
          Email : contact@clac.archi
        </p>

        <h2 className="text-lg font-bold mb-4 mt-8">Durée de conservation</h2>
        <p className="mb-6 leading-relaxed">
          Les données personnelles collectées sont conservées pour une durée maximale de 3 ans à compter du dernier contact, conformément aux recommandations de la CNIL.
        </p>

        <h2 className="text-lg font-bold mb-4 mt-8">Droits des utilisateurs</h2>
        <p className="mb-6 leading-relaxed">
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles. Pour exercer ces droits, contactez-nous à l'adresse : contact@clac.archi.
        </p>

        <h2 className="text-lg font-bold mb-4 mt-8">Cookies</h2>
        <p className="mb-6 leading-relaxed">
          Ce site n'utilise pas de cookies de suivi ou de publicité. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.
        </p>

        <h2 className="text-lg font-bold mb-4 mt-8">Modifications</h2>
        <p className="leading-relaxed">
          CLAC se réserve le droit de modifier la présente politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur le site.
        </p>
      </section>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
