let imgHeader = document.querySelector('.js-img-h');
let modalModos = document.querySelector('.js-modos');
let menuMod = document.querySelector('.js-menu-modos');
let cardLeft = document.querySelector('.js-card-1');
let cardLeft2 = document.querySelector('.js-card-2');
let btnSkin = document.querySelector('.js-btn-skin1');
let btnSkin2 = document.querySelector('.js-btn-skin2');

function modalOpen(ev) {
  ev.preventDefault();
  menuMod.classList.toggle('active');
  modalModos.classList.add('active');
}

function modalClose(ev) {
  menuMod.classList.remove('active');
  modalModos.classList.remove('active');
}

function setText(ev) {
  ev.preventDefault();
  let txtBox = document.querySelector('.js-text-card');
  txtBox.classList.toggle('active');
}
function setText2(ev) {
  ev.preventDefault();
  let txtBox2 = document.querySelector('.js-text-card2');
  txtBox2.classList.toggle('active');
}

function setImage(ev) {
  imgHeader.src = './img/eterno.png';
}

function setImageA(ev) {
  imgHeader.src = './img/armadura.png';
}

function alertVota(ev) {
  ev.preventDefault();

  swal({
    title: 'Bruxa Surfista!',
    text: 'Tem certeza que deseja votar nessa skin?!',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  }).then(willDelete => {
    if (willDelete) {
      swal('Obrigado por votar!', {
        icon: 'success',
      });
    } else {
      swal('Escolha sua skin e continue votando!');
    }
  });
}
function alertVota2(ev) {
  ev.preventDefault();

  swal({
    title: 'Arlequina!',
    text: 'Tem certeza que deseja votar nessa skin?!',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  }).then(willDelete => {
    if (willDelete) {
      swal('Obrigado por votar!', {
        icon: 'success',
      });
    } else {
      swal('Escolha sua skin e continue votando!');
    }
  });
}

menuMod.addEventListener('mouseleave', modalClose);
modalModos.addEventListener('mouseenter', modalOpen);
imgHeader.addEventListener('mouseenter', setImage);
imgHeader.addEventListener('mouseleave', setImageA);
cardLeft.addEventListener('mouseenter', setText);
cardLeft.addEventListener('mouseleave', setText);
cardLeft2.addEventListener('mouseenter', setText2);
cardLeft2.addEventListener('mouseleave', setText2);
btnSkin.addEventListener('click', alertVota);
btnSkin2.addEventListener('click', alertVota2);
