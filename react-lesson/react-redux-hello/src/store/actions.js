
import axios from 'axios'
export const getUsers = () => async dispatch => {
  const res = await axios.get('http://localhost:3008/users')
  dispatch({type: 'getUsers', payload: res.data})
}