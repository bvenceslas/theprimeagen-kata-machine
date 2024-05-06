//Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.

export default function two_crystal_balls(breaks: boolean[]): number {
    // specify the jumping distance (sqrt(N))
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // we go back sqrt(N)
    i -= jmpAmount;
    for (let j = 0; j < jmpAmount && j < breaks.length; j++, i++) {
        // we linear by sqrt(N)
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
