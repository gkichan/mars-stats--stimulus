export function renderColumn(name, color, winRate, won, played): string {
  return `
    <div class="column">
      <div class="text-content ta-center" style="color: ${color}">
        ${ name }
      </div>
      <div class="column__data-viz" style="background-color: ${color}; height: ${winRate * 2.5}px"></div>
      <div class="text-content">
        ${ winRate }%
      </div>
      <div class="text-content">
        ${ won }&nbsp;/&nbsp;${ played }
      </div>
    </div>
  `
}