import ProjectTemplate from "@/components/ProjectTemplate";

const images = Array.from({ length: 8 }, (_, i) => ({
  src: `https://i.imgur.com/PLACEHOLDER_hippolyte-${i + 1}.jpg`,
  alt: `Projet Hippolyte – Photo ${i + 1}`,
}));

const description = [
  "hippolyte",
  "",
  "situation texte",
  "localisation texte",
  "surface créée texte",
  "coût texte",
  "statut texte",
  "",
  "texte texte texte",
];

const Hippolyte = () => (
  <ProjectTemplate name="hippolyte" description={description} images={images} />
);

export default Hippolyte;
