import { en } from './en';
import { az } from './az';

export type Language = 'en' | 'az';

export const translations = {
    en,
    az,
};

export const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'az', name: 'Azerbaijani', nativeName: 'Azərbaycan' },
];
