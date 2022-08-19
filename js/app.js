// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

//variavel armazena todos os links que comecam com #
const menuItems = document.querySelectorAll('.nav-links a[href^="#"]');

//funcao possui parametro element que pega o href e retorna o valor da var ID
function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

//funcao que add o evento de smooth que vai de 0 até a variavel clicada
function scrollToPosition(to) {
  // Caso queira o nativo apenas
  // window.scroll({
  // top: to,
  // behavior: "smooth",
  // })
  smoothScrollTo(0, to);
}

//funcao recebe event como parametro previne padrao e pega o target (#link) - 80 pixels
function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget) - 70;
  //ao clique insere a funcao abaixo
  scrollToPosition(to);
}
//percorre todos os itens atraves do foreah e add evento ao clique
menuItems.forEach((item) => {
  item.addEventListener('click', scrollToIdOnClick);
});

/*

CODIGO DE TERCEIROS


*/
// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 800;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}
