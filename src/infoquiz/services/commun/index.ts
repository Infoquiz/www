// const readResponse = (response) => {
//   if (response.status === 404) {
//     response.then((r) => Promise.reject(r));
//   } else {
//     return response.then((r) => r.json());
//   }
// };

const readResponse = <T>(): ((call) => Promise<T>) => (call) => {
  const _doCall = <T>(call): Promise<T> =>
    call().then((response) => {
      switch (true) {
        case response.status === 204:
          return "204";
        case response.status < 400:
          return response.json().then((r) => r);
        default:
          return response.json().then((r) => Promise.reject(r));
      }
    }, handleError);

  return _doCall(call);
};

const handleError = (error: string): Promise<never> =>
  Promise.reject({ fetchError: error });

export const post = (url, payload) => {
  return readResponse()(() =>
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
  );
};
