let enableTracking: boolean = false;

export function enableEventTracking() {
    enableTracking = true;
    console.log('Tracking enable!');
}
export function disableEventTracking() {
    enableTracking = false;
    console.log('Tracking disable!');
}
export function initialiseTracker() {
    // TODO
    console.log('Not implemented yet!')
}
export function getEnableTracking() {
    return enableTracking;
}
