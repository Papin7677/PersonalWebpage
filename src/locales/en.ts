// English translations
export const en = {
    // Header
    header: {
        logo: "Vugar Gurbanov",
        nav: {
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
        },
    },

    // Hero section
    hero: {
        greeting: "Hi, I'm",
        name: "Vugar",
        role: "Software Engineer & Game Developer",
        description:
            "I build immersive games and scalable web solutions with clean code. Passionate about creating engaging experiences and solving complex problems with simple architecture.",
        cta: {
            viewWork: "View My Work",
            downloadResume: "Download Resume",
        },
    },

    // Projects section
    projects: {
        title: "Featured Projects",
        description:
            "A selection of projects showcasing technical decisions, trade-offs, and problem-solving",
        keyPoints: "Key Points:",
        links: {
            github: "GitHub",
            liveDemo: "Live Demo",
            blogPost: "Blog Post",
            ndaMessage: "Sorry, the project is either closed-source, under NDA, or client-owned.",
            back: "Back",
        },
        showMore: "Show More",
        showLess: "Show Less",
    },

    // Skills section
    skills: {
        title: "Technical Skills",
    },

    // Footer
    footer: {
        getInTouch: "Get In Touch",
        description:
            "I'm always open to discussing new opportunities and interesting projects.",
        contact: "Contact",
        connect: "Connect",
        builtWith: "Built with React & TypeScript",
    },

    // Language switcher
    language: {
        label: "Language",
    },

    // Project data
    projectData: [
        {
            id: "project-1",
            title: "Ebaz.az",
            description: "The upcoming official mobile application for Ebaz.az, facilitating seamless buying, selling, and renting of real estate and vehicles for Azerbaijan.",
            technologies: ["React Native", "TypeScript", "REST API"],
            githubUrl: "",
            liveUrl: "",
            highlights: [
                "Developed a high-performance cross-platform mobile app using React Native",
                "Implemented advanced filtering and search for thousands of listings",
                "Integrated secure user authentication and real-time data synchronization",
            ],

        },
        {
            id: "project-2",
            title: "Gemini AI Chatbot",
            description: "An AI-powered assistant using Gemini 2 Flash to help users find cars and homes through natural language queries, integrated with Ebaz.az's filtering system.",
            technologies: ["Gemini 2 Flash", "REST API", "TypeScript"],
            githubUrl: "",
            liveUrl: "",
            highlights: [
                "Leveraged Gemini 2 Flash for high-speed, low-latency natural language processing",
                "Integrated with REST APIs to perform complex filtering based on user intent",
                "Automated the retrieval of real estate and automotive listings through conversational UI",
            ],
        },
        {
            id: "project-3",
            title: "Neural Translator: EN to AZ",
            description: "A Transformer-based neural machine translation system trained from scratch to translate English text into Azerbaijani, focusing on low-resource language optimization.",
            technologies: ["PyTorch", "Transformers", "NLP", "Python"],
            githubUrl: "",
            liveUrl: "",
            blogUrl: "https://medium.com/@vuqar76772/from-english-to-azerbaijani-building-a-transformer-based-neural-translator-from-scratch-06b412046063",
            highlights: [
                "Built a complete Transformer architecture from scratch using PyTorch",
                "Curated and preprocessed translation data from the Tatoeba dataset",
                "Implemented LoRA and subword tokenization to handle low-resource constraints",
                "Optimized translation quality using Beam Search decoding and label smoothing",
                "Even though the result was a failure, it was a great learning opportunity",
            ],
        },
        {
            id: 'svetloyar',
            title: 'Svetloyar',
            description: 'A 2D deck-building roguelike game developed in Unity with a team of 9. Players strategically manage cards to battle enemies in turn-based combat, featuring complex attack and defense mechanics.',
            technologies: ['Unity', 'C#', 'Collaborative Git', 'Game Design'],
            githubUrl: '',
            liveUrl: '',
            highlights: [
                'Collaborated with a team of 9 developers and artists',
                'Implemented complex card interaction and combat systems',
                'Designed responsive enemy AI with varied attack patterns'
            ]
        }
    ],

    // Skills data
    skillsData: [
        {
            category: "Languages",
            skills: ["TypeScript", "JavaScript", "Python", "Unity C#"],
        },
        {
            category: "Frontend",
            skills: ["React", "Next.js", "CSS", "HTML"],
        },
        {
            category: "Backend",
            skills: ["Node.js", "PostgreSQL", "MySQL"],
        },
        {
            category: "Tools",
            skills: ["Git", "Rest API", "Unity"],
        },
    ],
};

export type TranslationKeys = typeof en;
