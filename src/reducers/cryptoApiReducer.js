import {
  GET_CRYPTO_API,
  LOADING_CRYPTO_API,
  GET_CRYPTO_API_ERROR,
} from '../types';

const intialState = {
  data: [],
  loading: false,
  error: null,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case LOADING_CRYPTO_API:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_CRYPTO_API:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case GET_CRYPTO_API_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
