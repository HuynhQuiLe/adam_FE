export const remainCharacters = (string, max) => {
    const numString =  string.length
    const remain = max - numString
    return `${remain} characters remaining.`
}