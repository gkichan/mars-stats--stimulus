import { Controller } from "@hotwired/stimulus"
import { PlayerName, playersColors } from "../utils/models.ts";

export default class extends Controller<HTMLFormElement> {
  // player = `<div class="last-games__cell" *ngFor="let player of players">
  //             <span [style.color]="playersColors[player]">
  //               {{ player }}
  //             </span>
  //           </div>`;
  connect() {
    this.element.innerHTML = this.renderPlayer(PlayerName.Oleh)
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