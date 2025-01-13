const baseUrl = "http://localhost:8000/auth";

type UserCredentials = {
  username: string;
  password: string;
  email: string;
  city: string;
};

const createUser = async (userData: UserCredentials) => {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
