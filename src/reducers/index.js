import { combineReducers } from 'redux';
import cryptoApiReducer from './cryptoApiReducer';

const reducer = combineReducers({
  cryptos: cryptoApiReducer,
});

export default reducer;
