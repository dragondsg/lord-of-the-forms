export const capitalize = (string) => {
    // todo: build this function
    // `capitalize("jOn")` should output `"Jon"`
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export const formatPhoneNumber = (phoneString) => {
    // todo: build this function
    // `formatPhoneNumber("1234567")` should be `"12-34-56-7"`
    return `${phoneString.slice(0, 2)}-${phoneString.slice(2, 4)}-${phoneString.slice(4, 6)}-${phoneString[6]}`;
}