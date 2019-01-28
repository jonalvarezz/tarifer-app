import data from './data';

// Simulate API call
export const fetchData = () =>
  new Promise(resolve => {
    const timeout = window.Math.random() * (2000 - 300) + 300;
    window.setTimeout(() => resolve(data), timeout);
  });
