import { get } from "infoquiz/commun_services";

const GetQuestionApi = (level): Promise<Record<string, any>[] | null> => {
  return get(`http://localhost:8000/questions/${level}`);
};

export { GetQuestionApi };
