import { isTrackingEnabled, setEventTrackingEnabled, setEventTrackingDisabled } from './Tracker';
import { send } from './Event'

describe('setEventTrackingEnabledTest', () => {
  test('setEnabled', function () {
    setEventTrackingEnabled();
    expect(isTrackingEnabled()).toEqual(true);
  }
  );
});

describe('setEventTrackingDisabledTest', () => {
  test('setDisabled', function () {
    setEventTrackingDisabled();
    expect(isTrackingEnabled()).toEqual(false);
  }
  );
});

describe('sendEventWhenTrackingIsDisabledTest', () => {
  test('sendEvent', async function () {
    setEventTrackingDisabled();
    await expect(send('token', 'data', 'name')).resolves.toEqual(-1);
  }
  );
});