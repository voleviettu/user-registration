import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://user-registration-r1o2.onrender.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export interface RegisterUserData {
  email: string;
  password: string;
  fullName: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    id: number;
    email: string;
    fullName: string;
    createdAt: string;
  };
}

export const registerUser = async (userData: RegisterUserData): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>('/user/register', userData);
  return response.data;
};
