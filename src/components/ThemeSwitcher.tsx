import { useTheme } from '../hooks/useTheme';
import './ThemeSwitcher.css';

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    const getIcon = () => {
        return theme === 'light' ? '☀️' : '🌙';
    };

    const nextThemeLabel = theme === 'light' ? 'dark' : 'light';

    return (
        <button
            className="theme-switcher"
            onClick={toggleTheme}
            aria-label={`Current theme: ${theme}. Click to switch to ${nextThemeLabel} mode`}
            title={`Switch to ${nextThemeLabel} mode`}
        >
            <span className="theme-icon">{getIcon()}</span>
        </button>
    );
}
