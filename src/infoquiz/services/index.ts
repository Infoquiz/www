const GetQuestionApi = (level) => {
  return fetch(`http://localhost:8000/questions/${level}`).then((resp) =>
    resp.json()
  );
};

export { GetQuestionApi };
