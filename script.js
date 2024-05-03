const COLORS = ["#fff2", "#fff4", "#fff7"]

const generateSpaceLayer = (size, selector, totalStars, duration) => {
   const layer = [];
   
   for (let i = 0; i < totalStars; i++) {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const x = Math.floor(Math.random() * 100)
      const y = Math.floor(Math.random() * 100)
      layer.push(`${x}vw ${y}vh 0 white, ${x}vw ${y + 100}vh 0 white`);
   }
   const container = document.querySelector(selector);
   container.style.setProperty("--space-layer", layer.join(","));
   container.style.setProperty("--size", size);
   container.style.setProperty("--duration", duration)
}

generateSpaceLayer('1px', '.space-1', 200, "50s")
generateSpaceLayer('2px', '.space-2', 200, "45s")
generateSpaceLayer('3px', '.space-3', 200, "40s")