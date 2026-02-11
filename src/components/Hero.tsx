import { useLocalization } from '../hooks/useLocalization';
import './Hero.css';

export function Hero() {
    const { t } = useLocalization();

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {t.hero.greeting} <span className="highlight">{t.hero.name}</span>
                    </h1>
                    <p className="hero-subtitle">{t.hero.role}</p>
                    <p className="hero-description">
                        {t.hero.description}
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            {t.hero.cta.viewWork}
                        </a>
                        <a href="/resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                            {t.hero.cta.downloadResume}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
