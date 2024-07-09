export function formatNumber(number: number) {
    return new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3,
    }).format(number);
}

export function formatTimeInSeconds(time: number) {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    function str_pad_left(string: number, pad: string, length: number) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }

    return minutes + ":" + str_pad_left(seconds, "0", 2);
}
