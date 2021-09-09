import {EventsDefaults} from '../../data/defaults';
import {ActionInterface} from '../../types/action';
import {EVENTS_ACTION_TYPES} from '../action-types';

export const eventsReducer = (
  state: Event[] = EventsDefaults,
  action: ActionInterface,
) => {
  switch (action.type) {
    case EVENTS_ACTION_TYPES.SET_EVENTS: {
      return action.data;
    }
    default:
      return state;
  }
};
