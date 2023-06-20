export const getString = (str: unknown) => {
    return typeof str === 'string' ? str : '';
};

export const getNumber = (str: unknown) => {
    return Number(str);
};