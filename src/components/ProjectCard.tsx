import { useLocalization } from '../hooks/useLocalization';
import type { TranslationKeys } from '../locales/en';
import './ProjectCard.css';

interface ProjectCardProps {
    project: TranslationKeys['projectData'][number];
    onNdaClick: () => void;
}

export function ProjectCard({ project, onNdaClick }: ProjectCardProps) {
    const { t } = useLocalization();

    return (
        <article className="project-card">
            <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                    <a
                        href={project.githubUrl || "#"}
                        target={project.githubUrl ? "_blank" : undefined}
                        rel={project.githubUrl ? "noopener noreferrer" : undefined}
                        className="project-link"
                        aria-label="View source code on GitHub"
                        onClick={(e) => {
                            if (!project.githubUrl) {
                                e.preventDefault();
                                onNdaClick();
                            }
                        }}
                    >
                        {t.projects.links.github}
                    </a>
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label="View live demo"
                        >
                            {t.projects.links.liveDemo}
                        </a>
                    )}
                    {(project as any).blogUrl && (
                        <a
                            href={(project as any).blogUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label="Read blog post"
                        >
                            {(t.projects.links as any).blogPost}
                        </a>
                    )}
                </div>
            </div>

            <p className="project-description">{project.description}</p>

            {project.highlights && project.highlights.length > 0 && (
                <div className="project-highlights">
                    <h4 className="highlights-title">{t.projects.keyPoints}</h4>
                    <ul className="highlights-list">
                        {project.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="project-tech">
                {project.technologies?.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                ))}
            </div>
        </article>
    );
}
