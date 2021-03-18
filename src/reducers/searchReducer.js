import { SEARCH, RENDER } from '../actions/searchAction.js';
import jsondata from '../data.json';

const initialState = {
  contents: jsondata.userdata,
  value: ''
};

export default function reducer(state = initialState, action) {
  console.log("action type", action.type);
  switch (action.type) {
    case SEARCH:
      const { value } = action;
      return {
        ...state,
        value
      };

    case RENDER:
      const { data } = action;
      console.log("Reducer data", data);
      return {
        ...state,
        data
      };

    default:
      return state;
  }
}
