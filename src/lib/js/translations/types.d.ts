type LanguageObject = {
    name: string;
    code: string;
    translations: TranslationObject;
};

type TranslationObject = {
    [key: string]: string;
};