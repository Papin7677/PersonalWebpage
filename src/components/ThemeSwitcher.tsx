import { useTheme } from '../hooks/useTheme';
import { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    const [autoCycle, setAutoCycle] = useState(false);

    const getIcon = () => {
        return theme === 'light' ? '☀️' : '🌙';
    };

    useEffect(() => {
        if (!autoCycle) return;

        const interval = setInterval(() => {
            toggleTheme();
        }, 20);

        return () => clearInterval(interval);
    }, [autoCycle, toggleTheme]);

    return (
        <div className="theme-switcher-wrapper">
            {/* Original toggle button */}
            <button
                className="theme-switcher"
                onClick={toggleTheme}
            >
                <span className="theme-icon">{getIcon()}</span>
            </button>

            {/* New auto-cycle button */}
            <button
                className="theme-auto-switcher"
                onClick={() => setAutoCycle((prev) => !prev)}
            >
                {autoCycle ? '⏹ Stop' : 'Epilepsy'}
            </button>
        </div>
    );
}