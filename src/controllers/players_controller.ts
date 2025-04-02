import { Controller } from "@hotwired/stimulus"
import { PlayerName, playersColors } from "../utils/models.ts";
import { gamesPlayed, gamesWon, getPlayers, getWinRate, sortByWinRate } from "../utils/helpers.ts";

export default class extends Controller<HTMLFormElement> {
  connect() {
    this.element.innerHTML = sortByWinRate(getPlayers())
      .map((player: PlayerName) => this.renderColumn(player))
      .join('');
  }

  renderColumn(player: PlayerName) {
    const color = playersColors[player];
    const winRate = getWinRate(player);
    const won = gamesWon(player);
    const played = gamesPlayed(player);

    return `
      <div class="column">
        <div class="text-content ta-center" style="color: ${color}">
          ${ player }
        </div>
        <div class="column__data-viz" style="background-color: ${color}; height: ${winRate * 2.5}px"></div>
        <div class="text-content">
          ${ winRate }%
        </div>
        <div class="text-content">
          ${ won }&nbsp;/&nbsp;${ played }
        </div>
      </div>
    `;
  }
}
