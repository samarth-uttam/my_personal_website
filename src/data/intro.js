export const intro = {
  statement:
    "A mechanical engineer working on robotic fabrication for construction",

  // Once the photo is in public/images/, replace null with:
  // { src: "/images/portrait.jpg", alt: "Portrait of Samarth Uttam" }
    photo: { src: "/pic.jpg", alt: "Portrait of Samarth Uttam" },

  facts: [
    { label: "Role", value: "Research Associate" },
    { label: "Institute", value: ["Institute for Computational Design and Construction (ICD)", "University of Stuttgart"] },
    { label: "Focus", value: "Construction robotics" },
    { label: "Based in", value: "Stuttgart, Germany" },
  ],

  blocks: [
    {
      label: "About",
      text: [
        "I am a mechanical engineer and research associate at the Institute for Computational Design and Construction (ICD), University of Stuttgart. My work sits between mechanical design, fabrication and robotics: developing the hardware that construction robots depend on, from process equipment and tooling to the machines themselves, and testing it at full scale.",
        "Before Stuttgart, I spent six years in Hong Kong. At HKUST, I completed an MSc and an MPhil, working on robot navigation and the robotic handling of large curved glass sheets. I then moved to industry, designing assembly fixtures and test systems at Precision Microdrives, and printer structures and slicing software at D-Shape.",
      ],
    },
    {
      label: "Now",
      text: "Developing the heating module and die assembly for a compact HDPE pipe extrusion unit for robotic underground construction, as part of the project Autonomous Manufacturing of Integrative Services.",
      // link: { label: "Project", href: "/research/hdpe-pipe-extrusion" },
    },
    {
      label: "Before",
      text: "Industrial engineering and 3D printing in Hong Kong · MPhil and MSc at HKUST",
    },
    {
      label: "Interests",
      text: "Collective robotic construction · Fabrication processes · Mechanical design · Design computation",
    },
  ],
};