import { useLocalization } from '../hooks/useLocalization';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import './Header.css';

export function Header() {
    const { t } = useLocalization();

    return (
        <header className="header">
            <div className="container">
                <nav className="nav" aria-label="Main navigation">
                    <a href="#" className="logo">{t.header.logo}</a>
                    <div className="nav-right">
                        <ul className="nav-links">
                            <li><a href="#projects">{t.header.nav.projects}</a></li>
                            <li><a href="#skills">{t.header.nav.skills}</a></li>
                            <li><a href="#contact">{t.header.nav.contact}</a></li>
                        </ul>
                        <ThemeSwitcher />
                        <LanguageSwitcher />
                    </div>
                </nav>
            </div>
        </header>
    );
}
