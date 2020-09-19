const serializeQueryParams = paramObj => {
    if (paramObj) {
      return `?${Object.keys(paramObj)
        .map(k => {
          if (typeof paramObj[k] === 'object') {
            return (
              paramObj[k] &&
              paramObj[k]
                .map(v => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
                .join('&')
            );
          }
          return `${encodeURIComponent(k)}=${encodeURIComponent(paramObj[k])}`;
        })
        .join('&')}`;
    }
    return '';
  };
  export default {
    makeRequest(path, callback, params) {
        path += serializeQueryParams(params);
        fetch(path)
        .then((response) => {
            response.json()
            .then( (data) => {
                callback(data)
            })
        })
    }
}