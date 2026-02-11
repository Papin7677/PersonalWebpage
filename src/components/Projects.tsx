import { useState, useEffect } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { ProjectCard } from './ProjectCard';
import './Projects.css';

interface ProjectsProps {
    onNdaClick: () => void;
}

export function Projects({ onNdaClick }: ProjectsProps) {
    const { t } = useLocalization();
    const [showAll, setShowAll] = useState(false);
    const [columnCount, setColumnCount] = useState(3);
    const [isMobile, setIsMobile] = useState(false);
    const INITIAL_PROJECT_COUNT = 2;

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setIsMobile(true);
                setColumnCount(1);
            } else if (width <= 1024) {
                setIsMobile(false);
                setColumnCount(2);
            } else {
                setIsMobile(false);
                setColumnCount(3);
            }
        };

        // Check initially
        handleResize();

        // Add listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determine which projects to display
    // On desktop, always show all projects
    // On mobile, show all if showAll is true, otherwise show limited count
    const visibleProjects = !isMobile || showAll
        ? t.projectData
        : t.projectData.slice(0, INITIAL_PROJECT_COUNT);

    const hasMoreProjects = t.projectData.length > INITIAL_PROJECT_COUNT;

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="projects-header">
                    <h2 className="section-title">{t.projects.title}</h2>
                    <p className="section-description">{t.projects.description}</p>
                </div>

                <div className="projects-grid">
                    {Array.from({ length: columnCount }).map((_, colIndex) => (
                        <div key={colIndex} className="projects-column">
                            {visibleProjects
                                .filter((_, index) => {
                                    // Custom distribution logic: Middle (1) -> Left (0) -> Right (2)
                                    if (columnCount === 3) {
                                        const remainder = index % 3;
                                        if (remainder === 0) return colIndex === 1; // 1st item -> Middle
                                        if (remainder === 1) return colIndex === 0; // 2nd item -> Left
                                        if (remainder === 2) return colIndex === 2; // 3rd item -> Right
                                    }
                                    // Default distribution for 1 or 2 columns
                                    return index % columnCount === colIndex;
                                })
                                .map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        onNdaClick={onNdaClick}
                                    />
                                ))}
                        </div>
                    ))}
                </div>

                {isMobile && hasMoreProjects && (
                    <div className="projects-actions">
                        <button
                            className="btn btn-secondary reveal-btn"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? t.projects.showLess : t.projects.showMore}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
