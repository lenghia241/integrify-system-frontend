import axios from 'axios';
import { GET_CLASS_ATTENDANCE } from './types';

const getClassAttendance = () => {
  const res = axios.get('/api/v1/attendance/history/');
  console.log('TCL: getClassAttendance -> res', res);
  return {
    type: GET_CLASS_ATTENDANCE,
    payload: res.data,
  };
};
export default getClassAttendance;
