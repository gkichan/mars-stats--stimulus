import { Controller } from "@hotwired/stimulus"
import { PlayerName, playersColors } from "../utils/models.ts";
import { gamesPlayed, gamesWon, getPlayers, getWinRate, sortByWinRate } from "../utils/helpers.ts";
import { renderColumn } from "../view-components/column.ts";

export default class extends Controller<HTMLFormElement> {
  connect() {
    this.element.innerHTML = sortByWinRate(getPlayers())
      .map((player: PlayerName) => renderColumn(
        player,
        playersColors[player],
        getWinRate(player),
        gamesWon(player),
        gamesPlayed(player)
      ))
      .join('');
  }
}
