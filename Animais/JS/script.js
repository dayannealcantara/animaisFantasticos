function initialTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initialTabNav();

function initialAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initialAccordion();

function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
scrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();

function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function abrirModal(e) {
      e.preventDefault();
      containerModal.classList.add('ativo');
    }
    botaoAbrir.addEventListener('click', abrirModal);

    function fecharModal(e) {
      e.preventDefault();
      containerModal.classList.remove('ativo');
    }
    botaoFechar.addEventListener('click', fecharModal);

    function fecharForaModal(e) {
      if (e.target === this) containerModal.classList.remove('ativo');
    }
    containerModal.addEventListener('click', fecharForaModal);
  }
}
initModal();

function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  })
function onMouseOver(e){
  const tooltipBox = createTooltipBox(this);

  onMouseMove.tooltipBox = tooltipBox;
  this.addEventListener('mousemove', onMouseMove);

  onMouseLeave.tooltipBox= tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener('mouseleave', onMouseLeave)
}
const onMouseLeave={
  handleEvent() {
    this.tooltipBox.remove();
    this.element.removeEventListener('mouseleave', onMouseLeave);
    this.element.removeEventListener('mousemove', onMouseMove)
  }
}
 const onMouseMove={
   handleEvent(e){
     this.tooltipBox.style.top = e.pageY + 20 + 'px';
     this.tooltipBox.style.left = e.pageX + 20 + 'px'
   }
 }

 function createTooltipBox(element) {
   const tooltipBox = document.createElement('div');
   const text = element.getAttribute('arial-label');
   tooltipBox.classList.add('tooltip');
   tooltipBox.innerText= text;
   document.body.appendChild(tooltipBox)
   return tooltipBox
 }
}
initTooltip();

function initDropdownMenu(){
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');
  dropdownMenu.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(e){
    e.preventDefault();
    this.classList.add('active')
  };
}
initDropdownMenu();

function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];
  
  if(menuButton) {
  function openMenu(event) {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuList, eventos, () => {
    console.log('teste')
  
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    })
  }
  eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
  }
}
initMenuMobile()

// function initAnimaNumeros(){
//   function animaNumeros(){
//     const numeros = document.querySelectorAll('[data-numero]');

//     numeros.forEach((numero) => {
//       const total = +numero.innerText;
//       const inscremento = Math.floor(total/100)
//       let start = 0
//       const timer=setInterval(() => {
//         start = start + inscremento
//         numero.innerText = start
//         if(start > total){
//           clearInterval(timer)
//         }
//       }, 25 * Math.random())
//     })
//   }

//   function handleMutation(mutation){
//     if(mutation[0].target.classList.contains('ativo')){
//       ResizeObserver.disconnect();
//       animaNumeros()
//     }
//   }
//   const observerTarget = document.querySelector('.numeros')
//   const observer = new MutationObserver(handleMutation)

//   observer.observe(observerTarget, {attributes: true})
// }
// initAnimaNumeros()

function initFuncionamento(){
  const funcionamento= document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
  const dataAgora=new Date()
  const diaAgora=dataAgora.getDay()
  const horarioAgora=dataAgora.getHours()

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
 if(semanaAberto && horarioAberto){
   funcionamento.classList.add('aberto')
 }
    
  }

  
  

  



initFuncionamento();


