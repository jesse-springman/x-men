/* pegar os personagens no JS para poder verificar quando o usuário passar o cursor do mouseem cima de um deles */

const personagens = document.querySelectorAll('.personagem');




/* adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse */

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
  

      //se a tela for menor que 450 a tela sera redimencionada

      if(window.innerWidth < 450){
        window.scrollTo({top:0, behavior: 'smooth'});
      }

        /*verificar se já existe um personagem selecioando, se sim, devemos remover a seleção dele */

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');


      /* pegar o elemento do personagem grande pra adicionar as informações nele */

      alterarImagemPersonagemGrande(personagem);

       // alterar o nome do personagem grande
      alterarNomePersonagem(personagem);

      //alterar a descrição do personagem grande
      alterarDescricaoPersonagem(personagem);
    })
})


function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById('descricao-personagem');

  descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagem(personagem) {
  const nomePersonagem = document.getElementById('nome-personagem');

  nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemGrande(personagem) {
  const imagemPersonagemGrande = document.querySelector('.personagem-grande');


  // alterar a imagem do personagem grande
  const idPersonagem = personagem.attributes.id.value;

  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado');
  personagemSelecionado.classList.remove('selecionado');
}

