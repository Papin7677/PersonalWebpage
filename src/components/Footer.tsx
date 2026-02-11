import { useLocalization } from '../hooks/useLocalization';
import './Footer.css';

export function Footer() {
    const { t } = useLocalization();
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>{t.footer.getInTouch}</h3>
                        <p className="text-muted">
                            {t.footer.description}
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>{t.footer.contact}</h4>
                        <ul className="contact-list">
                            <li>
                                <a href="mailto:vuqar76772@gmail.com">vuqar76772@gmail.com</a>

                            </li>
                            <li>
                                <a href="tel:+994502922292">+994 50 292 22 92</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>{t.footer.connect}</h4>
                        <ul className="social-links">
                            <li>
                                <a href="https://github.com/Papin7677" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/vugar-gurbanov-2b9b60236/ " target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="text-muted">
                        © {currentYear} {t.header.logo}. {t.footer.builtWith}.
                    </p>
                </div>
            </div>
        </footer>
    );
}
