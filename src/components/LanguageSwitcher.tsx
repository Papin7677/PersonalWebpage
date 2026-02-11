import { useLocalization } from '../hooks/useLocalization';
import { languages } from '../locales';
import './LanguageSwitcher.css';

export function LanguageSwitcher() {
    const { language, setLanguage } = useLocalization();

    return (
        <div className="language-switcher">
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'az')}
                className="language-select"
                aria-label="Select language"
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.nativeName}
                    </option>
                ))}
            </select>
        </div>
    );
}
