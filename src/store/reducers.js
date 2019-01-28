import * as actions from './actions';

export const initialState = {
  list: [],
  sortBy: 'download',
  status: 'idle',
  error: ''
};

function reducer(state, action) {
  switch (action.type) {
    case actions.setData.toString(): {
      const newState = {
        ...state,
        list: action.payload,
        status: 'fetched'
      };
      return newState;
    }

    case actions.fetching.toString(): {
      return {
        ...state,
        status: 'fetching'
      };
    }

    case actions.setError.toString(): {
      return {
        ...state,
        status: 'error',
        error: action.payload
      };
    }

    case actions.sortyBy.toString(): {
      return {
        ...state,
        sortBy: action.payload
      };
    }

    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}

export default reducer;
