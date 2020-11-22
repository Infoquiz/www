import { post } from "./commun";

const GetQuestionApi = (level) => {
  return fetch(`http://localhost:8000/questions/${level}`).then((resp) =>
    resp.json()
  );
};

const CreateAccount = (formData) => {
  const payload = JSON.stringify(formData);
  return fetch(`http://localhost:8000/account`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: payload,
  });
};

const Login = async (formData): Promise<any> => {
  const payload = JSON.stringify(formData);
  return await post("http://localhost:8000/account/login", payload);
};

export { GetQuestionApi, CreateAccount, Login };
