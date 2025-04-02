import { Controller } from "@hotwired/stimulus"
import { Game, PlayerName, Player } from "../utils/models.ts";
import { games } from "../utils/data.ts";
import { getPlayers, isWinner } from "../utils/helpers.ts";

export default class extends Controller {
  connect() {
    const content = this.last3Games
      .map((game: Game) => 
        `
          <div class="last-games__row">
            ${this.renderGameRow(game)}
          </div>
        `
      )
      .join('');
    
    this.element.outerHTML = content;
  }

  get last3Games(): Game[] {
    return games.slice(-3).reverse();
  }

  renderGameRow(game: Game): string {
    return getPlayers()
      .map((playerName: PlayerName) => this.renderPlayerInGame(game, playerName))
      .join('')
  }

  renderPlayerInGame(game: Game, player: PlayerName): string {
    const playerStats = game.find(({name}) => name === player);

    return !playerStats?.corporation && !playerStats?.VP
      ? `
          <div class="last-games__cell">
            -
          </div>
        `
      : `
          <div class="last-games__cell ${isWinner(game, player) ? 'winner' : ''}">
            <div class="last-games__corp">
              ${ playerStats.corporation }
            </div>
            <div class="last-games__vp">
              ${ playerStats.VP }
            </div>
          </div>
        `;
  }
}