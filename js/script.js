function search(){
    var query = document.getElementById('searchBar').value
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=363d26dd3d664d199ca63adc371e22aa&pageSize=10&page=1`)
    .then(response=> response.json())
        .then(myJson=> 
        
        // iterating data
        myJson.articles.map((item, index) => {
            // appending description
            document.getElementById("demo").innerHTML += index + ":" + item.description + "<br>"; 
        })
        )
}
