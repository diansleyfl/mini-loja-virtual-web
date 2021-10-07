const items = [
    {
        id: 0,
        nome: 'Camiseta Vasco Templária',
        img: 'camisa01.jpg',
        quantidade: 0,
        preco: "49,90"
    },
    {
        id: 1,
        nome: 'Camiseta Vasco LGBT Branca',
        img: 'camisa02.jpg',
        quantidade: 0,
        preco: "179,90"
    },
    {
        id: 2,
        nome: 'Camiseta Vasco Preta',
        img: 'camisa03.jpg',
        quantidade: 0,
        preco: "199,90"
    },
    {
        id: 3,
        nome: 'Camiseta Vasco Branca',
        img: 'camisa04.jpg',
        quantidade: 0,
        preco: "199,90"
    },
    {
        id: 4,
        nome: 'Camiseta Vasco Goleiro III',
        img: 'camisa05.jpg',
        quantidade: 0,
        preco: "169,90"
    },
    {
        id: 5,
        nome: 'Camiseta Vasco LGBT Preta',
        img: 'camisa06.jpg',
        quantidade: 0,
        preco: "179,90"
    },
]


inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
       containerProdutos.innerHTML+= `
       
       <div class="produto-single">
            <img src="./assets/img/`+val.img+`" />
            <p class="descricao">`+val.nome+`</p>
            <p class="preco">`+val.preco+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao carrinho<a/>
        </div>
    
       `;
    })
}

inicializarLoja();


atualizarCarrinho = () => {
   var containerCarrinho = document.getElementById('carrinho');
   containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
       containerCarrinho.innerHTML+= `
       
       <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
       <hr>
       
       `;
        }
    })
}


var links = document.getElementsByTagName('a');

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}