export const setData = data => ({
  type: 'setData',
  payload: data
});
setData.toString = () => 'setData';

export const fetching = () => ({
  type: 'fetching'
});
fetching.toString = () => 'fetching';

export const setError = errorMessage => ({
  type: 'setError',
  payload: errorMessage
});
setError.toString = () => 'setError';

export const sortyBy = value => ({
  type: 'sortyBy',
  payload: value
});
sortyBy.toString = () => 'sortyBy';
