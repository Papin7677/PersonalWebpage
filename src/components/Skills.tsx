import { useLocalization } from '../hooks/useLocalization';
import './Skills.css';

export function Skills() {
    const { t } = useLocalization();

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title text-center">{t.skills.title}</h2>
                <div className="skills-grid">
                    {t.skillsData.map((category) => (
                        <div key={category.category} className="skill-category">
                            <h3 className="category-title">{category.category}</h3>
                            <ul className="skills-list">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="skill-item">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
