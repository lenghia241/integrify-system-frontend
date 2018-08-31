import axios from 'axios';
import { GET_CLASS_ATTENDANCE } from './types';

const getClassAttendance = () => dispatch => axios.get('/api/v1/attendance/history/').then((res) => {
  dispatch({
    type: GET_CLASS_ATTENDANCE,
    payload: res.data,
  });
});

export default getClassAttendance;
