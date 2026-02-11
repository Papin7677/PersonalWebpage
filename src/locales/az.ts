// Azerbaijani translations
import type { TranslationKeys } from './en';

export const az: TranslationKeys = {
    // Header
    header: {
        logo: "Vüqar Qurbanov",
        nav: {
            projects: "Layihələr",
            skills: "Bacarıqlar",
            contact: "Əlaqə",
        },
    },

    // Hero section
    hero: {
        greeting: "Salam, mən",
        name: "Vüqaram",
        role: "Proqram Mühəndisi və Oyun Yaradıcısı",
        description:
            "Təmiz kodla maraqlı oyunlar və miqyaslanan veb həllər yaradıram. Cəlbedici təcrübələr yaratmağa və mürəkkəb problemləri sadə arxitektura ilə həll etməyə həvəsliyəm.",
        cta: {
            viewWork: "İşlərə Baxın",
            viewResume: "CV-yə Baxın",
        },
    },

    // Projects section
    projects: {
        title: "Seçilmiş Layihələr",
        description:
            "Texniki qərarları, güzəştləri və problem həllini nümayiş etdirən layihələr",
        keyPoints: "Əsas Nöqtələr:",
        links: {
            github: "GitHub",
            liveDemo: "Canlı Demo",
            blogPost: "Bloq Postu",
            ndaMessage: "Üzr istəyirik, layihə ya qapalı mənbəlidir, ya gizlilik müqaviləsi (NDA) altındadır, ya da müştəriyə məxsusdur.",
            back: "Geri",
        },
        showMore: "Daha çox göstər",
        showLess: "Daha az göstər",
    },

    // Skills section
    skills: {
        title: "Texniki Bacarıqlar",
    },

    // Footer
    footer: {
        getInTouch: "Əlaqə Saxlayın",
        description:
            "Mən həmişə yeni imkanları və maraqlı layihələri müzakirə etməyə açığam.",
        contact: "Əlaqə",
        connect: "Bağlantı",
        builtWith: "React və TypeScript ilə hazırlanıb",
    },

    // Language switcher
    language: {
        label: "Dil",
    },

    // Project data
    projectData: [
        {
            id: "project-1",
            title: "Ebaz.az",
            description: "Daşınmaz əmlak və avtomobillərin alqı-satqısı və icarəsi üçün Ebaz.az platformasının gələcək rəsmi mobil tətbiqi.",
            technologies: ["React Native", "TypeScript", "REST API"],
            githubUrl: "",
            liveUrl: "",
            highlights: [
                "React Native istifadə edərək sürətli çarpaz platformalı mobil tətbiq hazırladım",
                "Minlərlə elan üçün qabaqcıl axtarış və filtrasiya sistemi tətbiqi",
                "Təhlükəsiz istifadəçi girişi və real vaxt məlumat sinxronizasiyasını inteqrasisı",
            ],
        },
        {
            id: "project-2",
            title: "Gemini AI Çatbotu",
            description: "İstifadəçilərin istəkləri əsasında avtomobil və evləri tapmağa kömək edən, Gemini 2 Flash ilə təchiz olunmuş süni intellekt köməkçisi.",
            technologies: ["Gemini 2 Flash", "REST API", "TypeScript"],
            githubUrl: "",
            liveUrl: "",
            highlights: [
                "Təbii dilin sürətli emalı üçün Gemini 2 Flash modelindən istifadə etdim",
                "İstifadəçi niyyətinə uyğun mürəkkəb filtrasiya üçün REST API-lər ilə inteqrasiya etdim",
                "Danışıq interfeysi vasitəsilə daşınmaz əmlak və avtomobil elanlarının axtarışını avtomatlaşdırdım",
            ],
        },
        {
            id: "project-3",
            title: "Süni Tərcüməçi: EN-dən AZ-a",
            description: "İngilis dilindəki mətnləri Azərbaycan dilinə tərcümə etmək üçün sıfırdan hazırlanmış, Transformer memarlığına əsaslanan neyron tərcümə sistemi.",
            technologies: ["PyTorch", "Transformers", "NLP", "Python"],
            githubUrl: "",
            liveUrl: "",
            blogUrl: "https://medium.com/@vuqar76772/from-english-to-azerbaijani-building-a-transformer-based-neural-translator-from-scratch-06b412046063",
            highlights: [
                "PyTorch vasitəsilə tam Transformer memarlığını sıfırdan qurdum",
                "Tatoeba verilənlər bazasından tərcümə məlumatlarını topladım və emal etdim",
                "LoRA və subword tokenizasiyası tətbiq edərək az-resurslu dil məhdudiyyətlərini həll etdim",
                "Beam Search və label smoothing istifadə edərək tərcümə keyfiyyətini optimallaşdırdım",
            ],
        },
        {
            id: 'svetloyar',
            title: 'Svetloyar',
            description: '9 nəfərlik komanda ilə Unity-də hazırlanmış 2D göyərtə qurma roguelike oyunu. Oyunçular növbəli döyüşlərdə düşmənlərlə vuruşmaq üçün kartları strateji idarə edir.',
            technologies: ['Unity', 'C#', 'Git (Komanda)', 'Oyun Dizaynı'],
            githubUrl: '',
            liveUrl: '',
            highlights: [
                '9 nəfərlik komanda ilə kollaborativ iş',
                'Mürəkkəb kart qarşılıqlı əlaqəsi və döyüş sistemləri',
                'Müxtəlif hücum nümunələri olan düşmən süni intellekti'
            ]
        }
    ],

    // Skills data
    skillsData: [
        {
            category: "Dillər",
            skills: ["TypeScript", "JavaScript", "Python", "C#", "SQL"],
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express.js", "PostgreSQL", "MySQL"],
        },
        {
            category: "Frontend",
            skills: ["React", "CSS", "HTML"],
        },
        {
            category: "Alətlər",
            skills: ["Git", "RESTful APIs", "Unity", "Postman"],
        },
    ],
};
