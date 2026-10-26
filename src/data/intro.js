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
    { label: "Cluster of Excellence", value: ["IntCDC", " AP55 · Autonomous Manufacturing of Integrative Services"] },
    // { label: "Based in", value: "Stuttgart, Germany" },
  ],

  blocks: [
    {
      label: "About",
      text: [
        "Hi, I am samarth and I am a mechanical engineer and research associate at the Institute for Computational Design and Construction (ICD), University of Stuttgart. My work bridges mechanical systems, digital fabrication, and robotics—focusing on the design, engineering, and full-scale testing of hardware and process tooling that physical robotic construction relies on.",
        "Before Stuttgart, I spent six years in Hong Kong. At HKUST, I completed an MSc and an MPhil, working on robot navigation and the  handling of large curved glass sheets. I then moved to industry, designing assembly fixtures and test systems at Precision Microdrives, and printer structures and slicing software at D-Shape.",
      ],
    },
    {
      label: "Now",
      text: "Working on : AP55 - Autonomous Manufacturing of Integrative Services at Institute for Computational Design and Construction (ICD) University of Stuttgart focussing on Fabrication of Integrated Services: Robotic Construction for On-Site Production and Installation of Building Systems in Construction and Infrastructure. " ,
      // link: { label: "Project", href: "/research/hdpe-pipe-extrusion" },
    },
    {
      label: "Before",
      text: ["· Industrial engineering and Software development for LFAM - large format additive manufacturing in Hong Kong",
      "· MPhil and MSc at The Hong Kong University of Science and Technology (HKUST)",]
    },
    {
      label: "Interests",
      text: "Robotic construction · Fabrication processes · Mechanical design · Design computation",
    },
  ],
};