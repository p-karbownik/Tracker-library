import { getEnableTracking, enableEventTracking, disableEventTracking } from './Tracker';
import { send } from './Event'

describe('setEnableEventTrackingTest', () => {
  test('setEnable', function () {
    enableEventTracking();
    expect(getEnableTracking()).toEqual(true);
  }
  );
});

describe('setDisableEventTrackingTest', () => {
  test('setEnable', function () {
    disableEventTracking();
    expect(getEnableTracking()).toEqual(false);
  }
  );
});

describe('sendEventWhenDisableEventTrackingTest', () => {
  test('sendEvent', async function () {
    disableEventTracking();
    await expect(send('token', 'data')).resolves.toEqual(-1);
  }
  );
});