function HideMenu() {
    document.getElementById("menu").classList.add('hide');
}

function DisplayMenu() {
    document.getElementById("menu").classList.remove('hide');
}

function DisplayPage(el) {
    HideMenu();
    document.getElementById(el.dataset.menuItem).classList.remove('hide');
}

function HidePage(el) {
    DisplayMenu();
    document.getElementById(el.dataset.menuItem).classList.add('hide');
}

function AbrirModal(){
    document.getElementById("modal").classList.remove('hide');
}

function FecharModal(){
    document.getElementById("modal").classList.add('hide');
}