import { post } from "infoquiz/commun_services";

const CreateAccount = async <T>(formData): Promise<T> => {
  const payload = JSON.stringify(formData);
  return await post("http://localhost:8000/account", payload);
};

export { CreateAccount };
