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

modalModos.addEventListener('mouseenter', modalOpen);

function modalClose(ev) {
  menuMod.classList.remove('active');
  modalModos.classList.remove('active');
}

menuMod.addEventListener('mouseleave', modalClose);

function setText(ev) {
  ev.preventDefault();
  let txtBox = document.querySelector('.js-text-card');
  txtBox.classList.toggle('active');
}

cardLeft.addEventListener('mouseenter', setText);
cardLeft.addEventListener('mouseleave', setText);

function setText2(ev) {
  ev.preventDefault();
  let txtBox2 = document.querySelector('.js-text-card2');
  txtBox2.classList.toggle('active');
}

cardLeft2.addEventListener('mouseenter', setText2);
cardLeft2.addEventListener('mouseleave', setText2);

function setImage(ev) {
  imgHeader.src = './img/eterno.png';
}

imgHeader.addEventListener('mouseenter', setImage);

function setImageA(ev) {
  imgHeader.src = './img/armadura.png';
}

imgHeader.addEventListener('mouseleave', setImageA);

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

btnSkin.addEventListener('click', alertVota);

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

btnSkin2.addEventListener('click', alertVota2);
