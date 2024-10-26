import { Readable } from "svelte/store";

type LanguageObject = {
    name: string;
    code: string;
    translations: TranslationObject;
};

type TranslationObject = {
    [key: string]: string;
};

type ExtendedStore<T, Get = () => T, Store = Readable<T>> = Store & { get: Get };