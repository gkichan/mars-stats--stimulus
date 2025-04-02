import { Game, Player, Corporation, PlayerName } from "../utils/models.ts";
import { games } from "./data.ts";

export function getPlayers(): PlayerName[] {
  return Object.values(PlayerName);
}

export function isWinner(game: Game, entityName: PlayerName | Corporation): boolean {
  const maxVP = Math.max(...game.map((player: Player) => player.VP));  

  return !!game.find((player: Player) => {
    return Object.values(player).includes(entityName) && Object.values(player).includes(maxVP);
  })
}

export function sortByWinRate<T>(arr: T[]): T[] {
  return arr.sort((a, b) => {
    return getWinRate(b) - getWinRate(a)
  })
}

export function getWinRate(entityName: any): number {
  const won: number = gamesWon(entityName);
  const played: number = gamesPlayed(entityName);
  return Math.round(won / played * 100);
}

export function gamesWon(entityName: any): number {
  return games.reduce((acc: number, next: Game) => {
    return acc + (isWinner(next, entityName) ? 1 : 0);
  }, 0)
}

export function gamesPlayed(entityName: any): number {
  return games.reduce((acc: number, next: Game) => {
    return acc + (isInGame(next, entityName) ? 1 : 0);
  }, 0)
}

function isInGame(game: Game, entityName: any): boolean {
  return !!game.find((player: Player) => {
    return Object.values(player).includes(entityName);
  })
}
