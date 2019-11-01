import axios from 'axios';
import { GET_DATA, GET_ERRORS, GET_PICTURE } from './types'; 

//Register User
export const getDashBoardData = (history) => dispatch => {
  axios
    .get('/api/users/getDashBoardData')
    .then(res => {
      dispatch({
        payload: res.data,
        type: GET_DATA,
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getCurrenntQRCode = (userData, history) => dispatch => {
  const method = 'GET';
  const url = '/api/users/getCurrentQRCode';
  axios
    .request({
      url,
      method,
      responseType: 'blob',
    })
    .then(({ data }) => {
      const downloadUrl = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'a.jpg'); //any other extension
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
};

export const startGame = (userData, history) => dispatch => {
  axios
    .get('/api/users/startGame')
    .then(res => {
      dispatch({
        payload: res.data,
        type: GET_DATA,
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const answerQuestion = (answer) => dispatch => {
  axios
    .post('/api/users/answerQuestion', answer)
    .then(res => {
      if(res.data.wrongAnswer) {
        dispatch({
          payload: res.data.wrongAnswer,
          type: GET_PICTURE,
        });
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const checkQR = (answer) => dispatch => {
  axios
    .get(`/api/users/checkQRCode/${answer}`)
    .then(res => {
      return
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};