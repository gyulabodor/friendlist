export const convertEnumNumToString = (number) => {
    

    switch (number) {
        case 0:
            return "Single";
        case 1:
            return "In relationship";
        case 2:
            return "Married";
        default:
            return "Unknown";
    }

}