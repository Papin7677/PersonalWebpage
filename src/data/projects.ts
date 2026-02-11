import type { Project, SkillCategory } from '../types';

// Sample project data - Replace with your actual projects
export const projects: Project[] = [
    {
        id: 'project-1',
        title: 'Example Project',
        description: 'A brief description of what this project does and the problem it solves.',
        longDescription: 'Extended description with more context about the project.',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
        githubUrl: 'https://github.com/yourusername/project',
        liveUrl: 'https://project-demo.com',
        highlights: [
            'Implemented real-time collaboration using WebSockets',
            'Chose PostgreSQL over MongoDB for ACID guarantees',
            'Optimized bundle size by 40% through code splitting',
        ],
    },
    // Add more projects here
];

// Skills organized by category
export const skills: SkillCategory[] = [
    {
        category: 'Languages',
        skills: ['TypeScript', 'JavaScript', 'Python', 'Go'],
    },
    {
        category: 'Frontend',
        skills: ['React', 'Next.js', 'CSS', 'HTML'],
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    },
    {
        category: 'Tools',
        skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
    },
];
