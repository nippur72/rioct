export declare function mount(selector?: string, tag?: any, props?: any): void;
export declare function updateStyles(style?: string): void;
export type StyleParser = (css: string) => string;
export declare function setStyleParser(parser: StyleParser): void;
