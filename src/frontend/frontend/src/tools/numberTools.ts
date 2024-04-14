const DIGIT_EXPRESSION: RegExp = /^\d+$/;

export const isDigit = (character: string | undefined | null): boolean => {
    return character != null && DIGIT_EXPRESSION.test(character || "");
};
