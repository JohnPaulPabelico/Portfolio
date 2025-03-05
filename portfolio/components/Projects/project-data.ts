export interface ProjectData {
  title: string;
  description: string;
  slides: string[];
  techStack: string[];
  demoLink: string;
  sourceLink: string;
}

export const PROJECTS: ProjectData[] = [
  {
    title: "Candy Blinks",
    description:
      "CandyBlinks is a no-code platform/tool that leverages metaplex's Candy Machine and Solana Actions' powerful Blinks for seamless NFT distribution! We're here to empower creators by eliminating unnecessary barriers, so you can focus on what really matters—your art and your community.",
    slides: [
      "/projects/Project6/1.png",
      "/projects/Project6/2.png",
      "/projects/Project6/3.png",
      "/projects/Project6/4.png",
    ],
    techStack: ["html", "css", "ts", "nextjs", "supabase", "solana"],
    demoLink: "https://candyblinks.fun/",
    sourceLink: "https://github.com/JohnPaulPabelico/Candy-Blinks",
  },
  {
    title: "Selyo",
    description:
      "Selyo is a platform for building your on-chain reputation through events and organizations. It enables users to tokenize real-life social interactions, creating verifiable and decentralized records of participation and engagement. Powered by Web3 and IoT, Selyo brings next-gen experiences to events and organizations.",
    slides: ["/projects/Project4/1.png", "/projects/Project4/2.png"],
    techStack: ["html", "css", "ts", "next", "tailwind", "nestjs", "solidity"],
    demoLink: "https://astralember.vercel.app/",
    sourceLink: "https://github.com/JohnPaulPabelico/Astral-Ember-dapp",
  },
  {
    title: "Bantay Gastos - Finance Tracker",
    description:
      "Bantay Gastos is a finance tracker web application created in Angular to track your expenses and income. The web-app also provides charts as analysis for your financing. Furthermore, it also has an authentication functionality provided by firebase to store data in the cloud.",
    slides: [
      "/projects/Project5/1.png",
      "/projects/Project5/2.png",
      "/projects/Project5/3.png",
      "/projects/Project5/4.png",
      "/projects/Project5/5.png",
      "/projects/Project5/6.png",
    ],
    techStack: ["html", "css", "ts", "angular", "firebase"],
    demoLink: "https://bantay-gastos.web.app/",
    sourceLink: "https://github.com/JohnPaulPabelico/Bantay-Gastos",
  },

  {
    title: "Spud Squad",
    description:
      "Introducing Spud Squads, a captivating NFT project on the Solana network. With 999 limited-edition NFTs featuring adorable potato characters, Spud Squad Adventures invites users to join an exclusive community, unlocking unique perks and exploring the boundless opportunities of Web3.",
    slides: [
      "/projects/Project3/1.png",
      "/projects/Project3/2.png",
      "/projects/Project3/3.png",
      "/projects/Project3/4.png",
      "/projects/Project3/5.png",
    ],
    techStack: ["html", "css", "ts", "next", "tailwind"],
    demoLink: "https://spudsquad.vercel.app/",
    sourceLink: "https://github.com/JohnPaulPabelico/Spud-Squad-Dapp",
  },
  {
    title: "Ebak Coin Minting Site",
    description:
      "The Ebak-Coin Minting Platform was developed as a project requirement for the Arbitrm Developer's bootcamp certification. It serves as a user-friendly solution for minting and staking an ERC-20 token named Ebak-Coin, offering participants an accessible pathway to cryptocurrency creation and staking within the Arbitrum ecosystem.",
    slides: [
      "/projects/Project2/1.png",
      "/projects/Project2/2.png",
      "/projects/Project2/3.png",
      "/projects/Project2/4.png",
    ],
    techStack: ["html", "css", "ts", "next", "tailwind", "solidity"],
    demoLink: "https://ebak-coin.vercel.app/",
    sourceLink: "https://github.com/JohnPaulPabelico/Ebak-Coin",
  },
  {
    title: "NFT Fetcher",
    description:
      "NFT Explorer is an innovative web application tailored specifically for the Arbitrum ecosystem. Designed to fetch and showcase non-fungible tokens (NFTs) associated with a designated wallet address across various blockchain networks, it utilizes the Moralis API to seamlessly gather data.",
    slides: ["/projects/Project1/1.png", "/projects/Project1/2.png"],
    techStack: [
      "html",
      "css",
      "ts",
      "next",
      "expressjs",
      "tailwind",
      "solidity",
    ],
    demoLink: "https://blokc-frontend-challenge-navy.vercel.app/",
    sourceLink: "https://github.com/JohnPaulPabelico/BLOKC-Frontend-Challenge",
  },
];
