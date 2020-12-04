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

export { CreateAccount };
