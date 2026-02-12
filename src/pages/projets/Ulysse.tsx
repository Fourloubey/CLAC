import ProjectTemplate from "@/components/ProjectTemplate";

const images = Array.from({ length: 6 }, (_, i) => ({
  src: `https://i.imgur.com/PLACEHOLDER_ulysse-${i + 1}.jpg`,
  alt: `Projet Ulysse – Photo ${i + 1}`,
}));

const description = [
  "ulysse",
  "",
  "situation rénovation, surélévation",
  "localisation bordeaux",
  "surface créée 90.00 m²",
  "surface rénovée 75.00 m²",
  "coût 310 250 € ttc",
  "statut livraison 2023",
  "",
  "Cette surélévation totale a été pensée de façon à accueillir à l'étage 3 chambres et leurs pièces d'eau permettant ainsi de dédier le rez-de-chaussée aux pièces de vie.",
  "",
  "C'est dans le respect des proportions existantes, l'harmonie avec les maisons avoisinantes et la mise en œuvre de matériaux tels que la pierre et le bois que ce nouveau volume a été conçu.",
];

const Ulysse = () => (
  <ProjectTemplate name="ulysse" description={description} images={images} />
);

export default Ulysse;
