import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import adminReducer from './adminReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  admin: adminReducer,
  data: dataReducer,
})