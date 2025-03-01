import axios from "axios";

export async function registerUser(data: {
  username: string;
  email: string;
  password: string;
  password2: string;
}) {
  const response = await axios.post(
    "https://resumescreener.up.railway.app/register/",
    data
  );
  return response;
}

export async function loginUser(data: { email: string; password: string }) {
  const response = await axios.post(
    "https://resumescreener.up.railway.app/login/",
    {
      username: data.email,
      password: data.password,
    }
  );
  return response;
}
