import fetch from 'node-fetch';
import { isTrackingEnabled } from './Tracker';

export async function send(token: string, data: string, name: string) {
    if (isTrackingEnabled()) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ websiteToken: token, appearanceDate: Date.now(), eventData: data, eventName: name })
        };
        const response = await fetch('https://activity-tracker-server.herokuapp.com/events/new_event', requestOptions);
        console.log('Sending event ended with status:' + response.status);
        return response.status
    } else {
        console.log('Tracking is disabled!');
        return -1;
    }
}

