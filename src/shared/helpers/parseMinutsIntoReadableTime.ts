export function parseMinutsIntoReadableTime( inMin: number ): string {
    let hours = inMin / 60;
    let absoluteHours = Math.floor( hours );
    let h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    let minutes = ( hours - absoluteHours ) * 60;
    let absoluteMinutes = Math.floor( minutes );
    let m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    let seconds = ( minutes - absoluteMinutes ) * 60;
    let absoluteSeconds = Math.floor( seconds );
    let s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;
    return h + ':' + m + ':' + s;
}