function search() {
    var query = document.getElementById('searchBar').value
    var container = document.getElementById('imgList');
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=363d26dd3d664d199ca63adc371e22aa&pageSize=10&page=1`)
        .then(response => response.json())
        .then((myJson) =>

            // iterating data

            myJson.articles.map((item, index) => {
                document.getElementById("demo").innerHTML += item.description + "<br>";
                if (item.urlToImage !== null) {
                    var imageSpan = document.createElement('span')
                    var img = document.createElement('img');
                    var linebreak = document.createElement("br");
                    img.src = item.urlToImage;
                    img.width = 100
                    img.height = 50
                    imageSpan.appendChild(img);

                    container.appendChild(imageSpan);
                    console.log('imagechk', item.urlToImage);
                }
            })
        )
}
