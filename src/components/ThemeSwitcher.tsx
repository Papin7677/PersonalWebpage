import { useTheme } from '../hooks/useTheme';
import './ThemeSwitcher.css';

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();

    const getIcon = () => {
        return theme === 'light' ? '☀️' : '🌙';
    };


    return (
        <button
            className="theme-switcher"
            onClick={toggleTheme}

        >
            <span className="theme-icon">{getIcon()}</span>
        </button>
    );
}
