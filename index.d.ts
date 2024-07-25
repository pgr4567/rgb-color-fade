declare module '@chriscodesthings/color-looks-like-rgba' {
    function looksLikeRGBA(rgba: string): boolean;
    export = looksLikeRGBA;
}

declare function diff(n1: number, n2: number): number;

declare function modifyRGBA(rgba: number[], f?: number): number[] | undefined;

export default modifyRGBA;