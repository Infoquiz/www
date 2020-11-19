const GetQuestionApi = (level) => {
  return fetch(`http://localhost:8000/questions/${level}`).then((resp) =>
    resp.json()
  );
};

const CreateAccount = (formData) => {
  const payload = JSON.stringify( formData );
  console.log(payload)
  return fetch(`http://localhost:8000/account`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: payload,
  });
};

export { GetQuestionApi, CreateAccount };
