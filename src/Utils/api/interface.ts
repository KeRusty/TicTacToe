type RegisteLoginrUserObj = {
  id: Number;
  email: string;
  name: string;
};

export type RegisterLoginResponse = {
  user: RegisteLoginrUserObj;
  token: string;
};

export type PlayMoveResponse = {
  board: any;
  sessionId: Number;
};
