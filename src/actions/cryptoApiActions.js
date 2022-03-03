import {
  LOADING_CRYPTO_API,
  GET_CRYPTO_API,
  GET_CRYPTO_API_ERROR,
} from '../types';
import clientAxios from '../config/axios';

// Get Cryptos
export function getCryptoAction(count) {
  return async dispatch => {
    dispatch(startLoading());

    try {
      const res = await clientAxios.get(`/coins?limit=${count}`);
      dispatch(getCrypto(res));
      console.log(res);
    } catch (error) {
      console.log(error);
      dispatch(getCryptoError());
    }
  };
}

const startLoading = () => ({
  type: LOADING_CRYPTO_API,
  payload: true,
});

const getCrypto = info => ({
  type: GET_CRYPTO_API,
  payload: info.data.coins,
});

const getCryptoError = () => ({
  type: GET_CRYPTO_API_ERROR,
  payload: true,
});
