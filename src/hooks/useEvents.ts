import {Octokit} from '@octokit/core';
import {useDispatch} from 'react-redux';
import {actionSetEvents} from '../store/actions/events';

export const useEvents = () => {
  const octokit = new Octokit();
  const dispatch = useDispatch();
  const loadEvents = async () => {
    const options = {per_page: 25};
    const res = await octokit.request('GET /events', options);
    dispatch(actionSetEvents(res.data));
  };
  return {loadEvents};
};
