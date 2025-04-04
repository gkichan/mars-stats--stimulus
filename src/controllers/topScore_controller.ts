import { Controller } from "@hotwired/stimulus"
import { getTopPlayer, getTopScore } from "../utils/helpers.ts";
import { playersColors, primaryColor } from "../utils/models.ts";

export default class extends Controller {
  connect() {
    this.element.innerHTML = this.renderTopScore();
  }

  renderTopScore() {
    const {name, corporation} = getTopPlayer();
    const topScore = getTopScore();

    return `
      <div class="top-score__names">
        <span style="color: ${playersColors[name]}">
          ${ name }
        </span>
        &nbsp;+&nbsp;
        <span style="color: ${primaryColor}">
          ${ corporation }
        </span>
      </div>
      <div class="top-score__number">
        ${ topScore }
      </div>
    `;
  }
}