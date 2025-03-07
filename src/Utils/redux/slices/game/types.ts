export type GameStateType = {
  id: Number;
  board: any;
  currentPlayer: string;
  status: string;
  winner: string | null;
  userId: Number;
  userStats: Stats;
};

type Stats = {
  id: Number;
  losses: Number;
  wins: Number;
  draws: Number;
};
