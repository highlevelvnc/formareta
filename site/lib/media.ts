// Mapping of real Forma Reta media assets stored in /public/images
// Kept as stable IDs so components stay readable while the files keep their
// original UUID filenames.

export const PHOTOS = {
  bannerOutdoor: "/images/a27627b1-cfbc-4b3e-af22-857d629e8ffc.JPG",
  demolicaoWorker: "/images/4f6b2d64-79ec-4a6c-989a-a50e0721971c.JPG",
  reabilitacaoWorker: "/images/13034865-e975-4523-a21c-fb47a4f8b16b.JPG",
  buildingGutted: "/images/3e6fa798-d284-4e2f-956c-cc93348d66ad.JPG",
  interiorBeams: "/images/3f6b210e-0cb6-447c-a9ef-66e8804f4ed8.JPG",
  reinforcementMesh: "/images/6a2aecfc-d71e-4e3e-8076-5084d926ce34.JPG",
  teamReinforcement: "/images/65f06fde-e65a-4f78-8994-8eef06d63fe7.JPG",
  outdoorTeam: "/images/71a2ed91-d7b1-42ad-a885-48879222eb22.JPG",
  roofBeams: "/images/7dc5f269-7d77-40f4-816d-894c2eb80240.JPG",
  interiorWork: "/images/9306e54e-0df1-4952-8dd8-c7b91e0272de.JPG",
  rooftopView: "/images/b213f903-729c-480d-96d7-2c233c754391.JPG",
  columnDetail: "/images/e2651ad9-658a-43b3-a544-f550e84fab36.JPG",
  steelBeam: "/images/e98e44d9-c1d9-452a-8844-15c1cbc44c23.JPG",
  teamWheelbarrows: "/images/f142e15d-a46b-4b3c-87c4-af0a668ac0b1.JPG",
  obra1: "/images/obra1.jpeg",
} as const;

// Short clips that are cheap to preload; the heavier 30-40s videos are left
// out on purpose to keep the site snappy on mobile connections.
export const REELS = [
  {
    id: "reel-01",
    src: "/images/83153ac6-8b33-4a86-a710-9864bbfb40e6.MP4",
    poster: PHOTOS.roofBeams,
    label: "Vigamento · Lisboa",
  },
  {
    id: "reel-02",
    src: "/images/765c716d-cc52-4b76-acba-1310ddf2accd.MP4",
    poster: PHOTOS.interiorBeams,
    label: "Reforço estrutural",
  },
  {
    id: "reel-03",
    src: "/images/54570c33-0745-4936-9907-f9c1f4a317e6.MP4",
    poster: PHOTOS.demolicaoWorker,
    label: "Demolição controlada",
  },
  {
    id: "reel-04",
    src: "/images/31a26eb8-9848-431d-a3f3-7c2e4d7b239b.MP4",
    poster: PHOTOS.steelBeam,
    label: "Viga metálica",
  },
  {
    id: "reel-05",
    src: "/images/b1626bb4-f0d5-40b5-a711-ebff8d27d237.MP4",
    poster: PHOTOS.outdoorTeam,
    label: "Equipa em obra",
  },
  {
    id: "reel-06",
    src: "/images/9f9c125a-9e77-486f-bc6a-4533a7ad7836.MP4",
    poster: PHOTOS.teamReinforcement,
    label: "Reabilitação integral",
  },
] as const;
