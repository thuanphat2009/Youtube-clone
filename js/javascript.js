const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menu = $(".header__item-left-icon");
const subMenu = $(".content__left-submenu");
const mainMenu = $(".content__left-mainmenu");
const itemMainMenu = $$(".content__left-mainmenu-item");
const iconMainMenu = $$(".content__left-mainmenu-icon");
const desMainMenu = $$(".content__left-mainmenu-item-descrip");
const itemSubMenu = $$(".content__left-submenu-item");
const iconSubMenu = $$(".content__left-submenu-icon");
const btnContentRight = $$(".content__right-menu-link");
const btnRecord = $(".fa-video-plus");
const tableBtnRecord = $(".header__item-right-item-record");
const btnApp = $(".fa-th");
const tableApp = $(".header__item-right-item-app");
const btnNoti = $(".fa-bell");
const tableNoti = $(".header__item-right-item-notify");
const btnNext = $(".content__right-menu-next-icon");
const btnAvatar = $(".header__item-right-item-avatar");
const tableInfo = $(".header__item-right-item-user-more");
const menuList = $$(".content__right-menu-link");

const body = $('body');


body.onclick = function(){
  tableBtnRecord.classList.remove("active");
  btnRecord.classList.remove("fas");
  btnRecord.classList.add("far");
  tableApp.classList.remove("active");
  btnApp.classList.remove("fas");
  btnApp.classList.add("far");
  tableInfo.classList.remove("active");
  tableNoti.classList.remove("active");
  btnNoti.classList.remove("fas");
  btnNoti.classList.add("far");
}


// Click mở đóng menu
menu.onclick = function () {
  subMenu.classList.toggle("active");
  mainMenu.classList.toggle("active");
};

// Click Active các phẩn tử trong Main Menu
itemMainMenu.forEach(function (value, index) {
  value.onclick = function () {
    const iconMainActive = $(".content__left-mainmenu-icon.fas");
    iconMainActive.classList.remove("fas");
    iconMainActive.classList.add("fal");
    $(".content__left-mainmenu-item.active").classList.remove("active");
    this.classList.add("active");
    desMainMenu[index].classList.add("active");
    iconMainMenu[index].classList.remove("fal");
    iconMainMenu[index].classList.add("fas");
  };
});

// Click Active các phẩn tử trong Sub Menu
itemSubMenu.forEach(function (value, index) {
  value.onclick = function () {
    const iconSubActive = $(".content__left-submenu-icon.fas");
    iconSubActive.classList.remove("fas");
    iconSubActive.classList.add("fal");
    iconSubMenu[index].classList.remove("fal");
    iconSubMenu[index].classList.add("fas");
  };
});

// Click Active các nút phần tử bên Content Right

btnContentRight.forEach(function (value, index) {
  value.onclick = function () {
    $(".content__right-menu-link.active").classList.remove("active");
    this.classList.add("active");
  };
});

// Click Icon Record

btnRecord.onclick = function(e) {
  e.stopPropagation()
  tableBtnRecord.classList.toggle("active");
  if ($(".header__item-right-item-record.active")) {
    this.classList.remove("far");
    this.classList.add("fas");
  } else {
    this.classList.remove("fas");
    this.classList.add("far");
  }
};

// Click Icon App
btnApp.onclick = function (e) {
  e.stopPropagation()
  tableApp.classList.toggle("active");
  if ($(".header__item-right-item-app.active")) {
    this.classList.remove("far");
    this.classList.add("fas");
  } else {
    this.classList.remove("fas");
    this.classList.add("far");
  }
};

// Click Icon Avatar
btnAvatar.onclick = function (e) {
  e.stopPropagation()
  tableInfo.classList.toggle("active");
};


// Click Icon Noti
btnNoti.onclick = function (e) {
  e.stopPropagation()
  tableNoti.classList.toggle("active");
  if ($(".header__item-right-item-notify.active")) {
    this.classList.remove("far");
    this.classList.add("fas");
  } else {
    this.classList.remove("fas");
    this.classList.add("far");
  }
};


