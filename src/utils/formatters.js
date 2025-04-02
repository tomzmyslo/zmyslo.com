export function formatPhoneNumber(number) {
    const areaCode = number.slice(0, 3);
    const prefix = number.slice(3, 6);
    const lineNumber = number.slice(6);

    return `(${areaCode}) ${prefix}-${lineNumber}`;
}