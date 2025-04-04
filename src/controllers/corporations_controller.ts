import { Controller } from "@hotwired/stimulus"
import { sortByWinRate, getCorporations, getWinRate, gamesWon, gamesPlayed } from "../utils/helpers.ts";
import { renderColumn } from "../view-components/column.ts";
import { Corporation, primaryColor } from "../utils/models.ts";

export default class extends Controller {
  connect() {
    this.element.innerHTML = sortByWinRate(getCorporations())
      .map((corporation: Corporation) => renderColumn(
        corporation,
        primaryColor,
        getWinRate(corporation),
        gamesWon(corporation),
        gamesPlayed(corporation)
      ))
      .join('');
  }
}