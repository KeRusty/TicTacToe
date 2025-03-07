import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlayMoveResponse, RegisterLoginResponse } from './interface';

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

  async createGameSession(): Promise<RegisterLoginResponse> {
    try {
      const response = await api.post<RegisterLoginResponse>('/game/create_game_session', { startWithPlayer: true });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async playerMove(board: any, sessionID: Number): Promise<PlayMoveResponse> {
    try {
      const response = await api.post<PlayMoveResponse>('/game/player_move', { board, sessionId: sessionID });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  async cpuMove(board: any, sessionID: Number): Promise<PlayMoveResponse> {
    try {
      const response = await api.post<PlayMoveResponse>('/game/pc_move', { board, sessionId: sessionID });
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}

export default new AuthService();
