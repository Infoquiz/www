const readResponse = <T>(call): Promise<T> => {
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
  Promise.reject({ fetchError: error }); // Internal error > 500

const post = <T>(url: string, payload): Promise<T> => {
  return readResponse(() =>
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

const get = async <T>(url: string): Promise<T> => {
  return await readResponse(() =>
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
  );
};

export { post, get };
