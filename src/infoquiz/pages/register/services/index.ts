import { post } from "infoquiz/commun_services";

const CreateAccount = (formData) => {
  const payload = JSON.stringify(formData);
  return post("http://localhost:8000/account", payload);
};

export { CreateAccount };
