/**
 * Validates if any of the strings received contains non valid characters that can be used in SQL injections
 * @param {Array of Strings} stringsArray 
 * @returns true if all the strings are valid, false otherwise.
 */
export const validateSQLInyection = (stringsArray) => {
    const isValidWord =(string)=> ([";", "-", "'"].forEach((char) =>  !string.includes(char)));
    return stringsArray.every(isValidWord);

}