import axios from 'axios';

const call = (url, method, data, formData = null, token = '', headers) => {
  if (typeof method !== 'string') {
    throw new Error('Method must be a string!');
  }

  if (data !== undefined && typeof data !== 'object') {
    throw new Error('Data must be an object!');
  }

  let dataRequest =
    ['put', 'post', 'patch'].includes(method.toLowerCase()) && data;
  if (formData !== null) {
    dataRequest = formData;
  }

  let dataHeaders = headers;
  if (token !== '') {
    dataHeaders.Authorization = `Bearer ${token}`;
  }

  const axiosConfig = {
    method,
    url: url,
    data: dataRequest,
    headers: dataHeaders ?? null,
    params: method.toLowerCase() === 'get' && data,
  };
  const res = axios(axiosConfig);
  return res;
};

export default call;
