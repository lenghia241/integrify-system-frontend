import axios from 'axios';
import { FETCH_CLASS_ATTENDANCE } from './types';

const fetchClassAttendance = () => dispatch => axios.get('/api/v1/attendance/history/').then((res) => {
  dispatch({
    type: FETCH_CLASS_ATTENDANCE,
    payload: res.data,
  });
});

export default fetchClassAttendance;
