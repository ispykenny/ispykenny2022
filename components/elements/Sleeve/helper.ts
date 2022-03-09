export const wrapText = (text:string, styles:any, delay: number = 20) => {
  let string = '';
  const stringCleanUp = text.split(' ');
  for(let i = 0; i < stringCleanUp.length; i++) {
    string += 
    `<span class=${styles.sleeve}>`+
    `<span 
        style="transition-delay: ${delay * i}ms"
        class=${styles.sleeveItem}>`+
        `${stringCleanUp[i]}`+
      `</span>`+
    `</span> `
  }
  return {__html: string}
}