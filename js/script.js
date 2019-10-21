var timeLeft = 130;
var elem = document.getElementById('timer');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        refresh();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

function refresh() {
    window.location.reload(1)
}

function search() {
    var query = document.getElementById('searchBar').value
    var container = document.getElementById('imgList');
    fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=363d26dd3d664d199ca63adc371e22aa&pageSize=10&page=1`)
        .then(response => response.json())
        .then((myJson) =>

            // iterating data
            myJson.articles.slice(0,9).map((item, index) => {
                document.getElementById("demo").innerHTML += item.title + "<br>" + "<br>" + "<br>";
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
                else {

                    var img = document.createElement('img');
                    img.src ='http://static1.squarespace.com/static/582f2a75414fb5c5d7172211/t/5ba29eacb8a045e82a32378a/1537384155646/blank-thumbnail.jpg?format=1500w'
;
                    img.width = 100
                    img.height = 50
                    container.appendChild(img);
                    console.log('imagechk','https://homepages.cae.wisc.edu/~ece533/images/airplane.png'
);
                }
            })
        )
        
}
