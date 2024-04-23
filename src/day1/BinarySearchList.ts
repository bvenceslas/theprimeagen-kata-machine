export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        // divide the array to get the middle
        const middle = Math.floor(low + (high - low) / 2);
        const value = haystack[middle];
        //tests
        if (value === needle) {
            return true;
        } else if (value > needle) {
            // means we have to look to the lower values: left
            high = middle;
        } else {
            // means we have to look to the higher values: right
            low = middle + 1;
        }
    } while (low < high);
    return false;
}
