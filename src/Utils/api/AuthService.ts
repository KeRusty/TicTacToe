import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RegisterLoginResponse } from './interface';

class AuthService {
  async login(email: string, password: string): Promise<RegisterLoginResponse> {
    try {
      const response = await api.post<RegisterLoginResponse>('/auth/login', { email, password });
      const { token } = response.data;
      if (token) {
        await AsyncStorage.setItem('token', token?.toString());
      }
      return response.data;
    } catch (error: any) {
      console.error('Login failed:', error.response?.data || error.message);
      throw error;
    }
  }

  async register(email: string, password: string, name: string): Promise<RegisterLoginResponse> {
    try {
      const response = await api.post<RegisterLoginResponse>('/auth/register', { email, password, name });
      const { token } = response.data;
      if (token) {
        await AsyncStorage.setItem('token', token?.toString());
      }
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async logout(): Promise<void> {
    await AsyncStorage.removeItem('token');
  }

  //   async getUserProfile(): Promise<UserProfile> {
  //     try {
  //       const response = await api.get<UserProfile>('/auth/me');
  //       return response.data;
  //     } catch (error: any) {
  //       console.error('Error fetching user profile:', error.response?.data || error.message);
  //       throw error;
  //     }
  //   }

  //   async isAuthenticated(): Promise<boolean> {
  //     const token = await AsyncStorage.getItem('token');
  //     return !!token;
  //   }
}

export default new AuthService();
