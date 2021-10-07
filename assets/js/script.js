const items = [
    {
        id: 0,
        nome: 'Camiseta Vasco Templária',
        img: 'camisa01.jpg',
        quantidade: 0
    },
    {
        id: 1,
        nome: 'Camiseta Vasco LGBT Branca',
        img: 'camisa02.jpg',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Camiseta Vasco Preta',
        img: 'camisa03.jpg',
        quantidade: 0
    },
    {
        id: 3,
        nome: 'Camiseta Vasco Branca',
        img: 'camisa04.jpg',
        quantidade: 0
    },
    {
        id: 4,
        nome: 'Camiseta Vasco Goleiro III',
        img: 'camisa05.jpg',
        quantidade: 0
    },
    {
        id: 5,
        nome: 'Camiseta Vasco LGBT Preta',
        img: 'camisa06.jpg',
        quantidade: 0
    },
]


inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
       containerProdutos.innerHTML+= `
       
       <div class="produto-single">
            <img src="./assets/img/`+val.img+`" />
            <p>`+val.nome+`</p>
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