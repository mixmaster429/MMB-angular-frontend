/**
 * Language main object
 */
export class Language {
    language: {
        name: string;
    };
    uuid: string;
    name: string;
}


/**
 * Language View Model - support for backend interaction
 */
export class LanguageViewModel {
    language?: number;
    language_custom?: string;
    name?: string;
    id?: number;
}
