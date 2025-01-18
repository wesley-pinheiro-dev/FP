let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicators = document.querySelector('.indicators');
let dots = indicators.querySelectorAll('ul li');

let active = 0; // Índice do item ativo
let lastPosition = items.length - 1; // Última posição na lista

// Função para atualizar o estado ativo
function updateActiveItem(newIndex) {
    // Remove a classe "active" do item e indicador atuais
    let itemOld = container.querySelector('.list .item.active');
    let dotOld = indicators.querySelector('ul li.active');

    if (itemOld) itemOld.classList.remove('active');
    if (dotOld) dotOld.classList.remove('active');

    // Adiciona a classe "active" ao novo item e indicador
    items[newIndex].classList.add('active');
    dots[newIndex].classList.add('active');

    // Atualiza o índice ativo
    active = newIndex;
}

// Clique no botão "next"
nextButton.onclick = () => {
    let newIndex = active + 1 > lastPosition ? 0 : active + 1; // Cicla para o início se for o último
    updateActiveItem(newIndex);
};

// Clique no botão "prev"
prevButton.onclick = () => {
    let newIndex = active - 1 < 0 ? lastPosition : active - 1; // Cicla para o final se for o primeiro
    updateActiveItem(newIndex);
};