class NegociacaoControoler{
  adiciona(event){
    event.preventDefault();

    let $ = document.querySelector.bind(document);
    let inputData = $('#data');
    let inputQuantidade = $('#quantidade');
    let inputValor = $('#valor');

    console.log(inputData);
    console.log(inputQuantidade);
    console.log(inputValor);
  }
}
