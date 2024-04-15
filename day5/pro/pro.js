console.log('aApp Started');

function callAPI(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=601bcde7377e4a0e9890ea8d59d01f8d")
    .then((res)=>{
        res.json().then((data)=>{
            renderUI(data);})
        
    })

}

// callAPI();

function renderUI(data){
    //got the articles from data
    const articles=data.articles;
    // console.log(articles);

    for(let i=0;i<articles.length;i++){
    const root=document.getElementById("root");

    //single articles from the articles array
    const ar=articles[i];


    console.log(ar);

    const div=document.createElement("div");
    const h3=document.createElement("h3");
    h3.innerText=ar.title;

    const img=document.createElement("img");
    img.src=ar.urlToImage;
    div.appendChild(h3);
    div.appendChild(img);

    root.appendChild(div);
    }
}
callAPI();