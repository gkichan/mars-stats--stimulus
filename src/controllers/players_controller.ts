import { Controller } from "@hotwired/stimulus"
import { PlayerName, playersColors } from "../utils/models.ts";

export default class extends Controller<HTMLFormElement> {
  connect() {
    this.element.innerHTML = Object.values(PlayerName)
      .map((playerName: PlayerName) => this.renderPlayer(playerName))
      .join('');
  }
  
  renderPlayer(player: PlayerName) {
    return `
      <div class="last-games__cell">
        <span style="color: ${playersColors[player]}">
          ${player}
        </span>
      </div>
    `;
  }
}