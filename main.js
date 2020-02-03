function AbrirModal(){
    document.getElementById("modal").classList.remove('hide');
}

function FecharModal(){
    document.getElementById("modal").classList.add('hide');
}

function AbrirPortifolio(){
    document.getElementById("menu").classList.add('hide');
    document.getElementById("portifolio").classList.remove('hide');
}

function AbrirProjetos(){
    document.getElementById("menu").classList.add('hide');
    document.getElementById("projetos").classList.remove('hide');
}

function AbrirSobremim(){
    document.getElementById("menu").classList.add('hide');
    document.getElementById("sobremim").classList.remove('hide');
}

function AbrirContato(){
    document.getElementById("menu").classList.add('hide');
    document.getElementById("contato").classList.remove('hide');
}

function VoltarPortifolio(){
    document.getElementById("portifolio").classList.add('hide');
    document.getElementById("menu").classList.remove('hide');
}
function VoltarProjetos(){
    document.getElementById("projetos").classList.add('hide');
    document.getElementById("menu").classList.remove('hide');
}
function VoltarSobremim(){
    document.getElementById("sobremim").classList.add('hide');
    document.getElementById("menu").classList.remove('hide');
}
function VoltarContato(){
    document.getElementById("contato").classList.add('hide');
    document.getElementById("menu").classList.remove('hide');
}