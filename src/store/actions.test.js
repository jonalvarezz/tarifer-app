import reducers, { initialState } from './reducers';
import * as actions from './actions';

const state = Object.freeze({
  list: [
    { id: 1, title: 'Tariff 1' },
    { id: 2, title: 'Tariff 2' },
    { id: 3, title: 'Tariff 3' }
  ],
  sortBy: 'download',
  status: 'idle',
  error: ''
});

test('setData action should work', () => {
  const newState = reducers(
    state,
    actions.setData([{ id: 2, title: 'Tariff new' }])
  );

  expect(newState).toStrictEqual({
    list: [{ id: 2, title: 'Tariff new' }],
    sortBy: 'download',
    status: 'fetched',
    error: ''
  });
});

test('fetching action should work', () => {
  const newState = reducers(state, actions.fetching());

  expect(newState).toStrictEqual({
    list: state.list,
    sortBy: 'download',
    status: 'fetching',
    error: ''
  });
});

test('setError action should work', () => {
  const newState = reducers(
    state,
    actions.setError('Ups, something goes wrong.')
  );

  expect(newState).toStrictEqual({
    list: state.list,
    sortBy: 'download',
    status: 'error',
    error: 'Ups, something goes wrong.'
  });
});

test('sortyBy action should work', () => {
  const newState = reducers(state, actions.sortyBy('upload'));

  expect(newState).toStrictEqual({
    list: state.list,
    sortBy: 'upload',
    status: state.status,
    error: state.error
  });
});
