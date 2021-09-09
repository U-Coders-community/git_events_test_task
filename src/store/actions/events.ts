import {EVENTS_ACTION_TYPES} from '../action-types';

export function actionSetEvents(data: any) {
  return {
    type: EVENTS_ACTION_TYPES.SET_EVENTS,
    data,
  };
}
