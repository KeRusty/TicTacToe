type RegisteLoginrUserObj = {
  id: Number;
  email: string;
  name: string;
};

type StatisticsObj = {
  id: Number;
  wins: Number;
  losses: Number;
  draws: Number;
};

export type RegisterLoginResponse = {
  user: RegisteLoginrUserObj;
  token: string;
};

export type PlayMoveResponse = {
  board: any;
  sessionId: Number;
};

export type StatisticsResponse = {
  stats: StatisticsObj;
  id: Number;
};
