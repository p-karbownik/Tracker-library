import fetch from 'node-fetch';
import { getEnableTracking } from './Tracker';

export async function send(token: string, data: string) {
    if (getEnableTracking()) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ websiteToken: token, appearanceDate: Date.now(), eventData: data })
        };
        const response = await fetch('https://activity-tracker-server.herokuapp.com/events/new_event', requestOptions);
        console.log('Sending event ended with status:' + response.status);
        return response.status
    } else {
        console.log('Tracking is disable!');
        return -1;
    }
}

