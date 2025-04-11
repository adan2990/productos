const URLMain ="https://fakestoreapi.com/products/";
const main= document.getElementsByTagName("main").item(0);

function getData(){
    const options ={"metod":"GET"};
    fetch(URLMain)
    .then((response)=>{
        console.log(response,options);
        //convierte la respuesta en JSON
        response.json().then((res)=>{
            // console.log(res.length);//20 productos
            // console.log(res[2].title);
            createCards(res);
        }); 
    })
    .catch((err)=>{
        main.insertAdjacentElement("beforeend",
            `<div class="alert alert-danger" role="alert">
            ${err.message}
            </div>)
            `);

    });

}//getData

getData();

function createCards(prods){

    // main.insertAdjacentElement("beforebegin",
    //     `hola`
    // );
    
    prods.forEach((d) => {
        //main.insertAdjacentHTML("beforebegin", `hola ${prods[d].title}`);
        main.insertAdjacentHTML("beforeend", 
            // titulo: ${d.title}\n 
            // description : ${d.description}\n
            // category: ${d.category}\n
            // image: ${d.image}\n
            // ------------------------\n
            //<div class="card" style="width: 18rem; style=border-color:black border-width: medium">
            
            `<div class="card col-md-4 mb-4">
                <img src="${d.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${d.title}</h5>
            <p class="card-text">${d.description}</p>
            </div style="margin-bottom:50px">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Categoria: ${d.category}</li>
                    <li class="list-group-item">Precio: ${d.price}</li>
                </ul>
            </div>          
            `);
        //console.log(d);


        
    });


}//createcards