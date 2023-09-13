const inputFormat = (type: string, value: string) => {
    if (type === "number") {
        if (
            value?.length === 4 ||
            value?.length === 9 ||
            value?.length === 14
        ) {
            console.log(value + " ");
            return value + " ";
        }
    }

    if (type === "expiry") {
        if (value?.length === 2) {
            return value + "/";
        }
    }
    return value;
};

export default inputFormat;
