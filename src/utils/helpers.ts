import { Game, Player, Corporation, PlayerName } from "../utils/models.ts";

export function isWinner(game: Game, entityName: PlayerName | Corporation): boolean {
  const maxVP = Math.max(...game.map((player: Player) => player.VP));  

  return !!game.find((player: Player) => {
    return Object.values(player).includes(entityName) && Object.values(player).includes(maxVP);
  })
}