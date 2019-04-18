import qs from 'query-string';

export const request = (method: string, params: {} = {}) =>
  fetch(`${process.env.REACT_APP_API_SERVER}/v1/${method}/?${qs.stringify(params)}`)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      return res.json();
    });
