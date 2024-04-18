var mangas = {
    "manga": [
        {
            "nome": "Manga1",
            "url": "/projeto/index.html", 
            "banner": "https://picsum.photos/200/300",
            "description": "Manga is a manga reader and a manga writer.", 
            "genero": "Shonen"
        },
        
        {
            "nome": "Manga2",
            "url": "/projeto/index.html", 
            "banner": "https://picsum.photos/200/300",
            "description": "Manga is a manga reader and a manga writer.", 
            "genero": "Shonen"
        }, 
        
        {
            "nome": "Manga3",
            "url": "/projeto/index.html", 
            "banner": "https://picsum.photos/200/300",
            "description": "Manga is a manga reader and a manga writer.", 
            "genero": "Seinen"
        },

        {
            "nome": "Manga4",
            "url": "/projeto/index.html", 
            "banner": "https://picsum.photos/200/300",
            "description": "Manga is a manga reader and a manga writer.", 
            "genero": "Shonen"
        },

        {
            "nome": "Manga5",
            "url": "/projeto/index.html", 
            "banner": "https://picsum.photos/200/300",
            "description": "Manga is a manga reader and a manga writer.", 
            "genero": "Seinen"
        }

    ]
};
    for(var i = 0; i < mangas.manga.length; i++){
        var secao = document.getElementById("mangas");
        var div = document.createElement("div");
        var manga = document.createElement("a");
        manga.href = mangas.manga[i].url;
        manga.className = "manga";
        var genero = document.createElement("h1");
        genero.innerHTML = mangas.manga[i].genero;
        genero.className = "genero";
        var nome = document.createElement("h1");
        nome.innerHTML = mangas.manga[i].nome;
        nome.className = "nome";
        var banner = document.createElement("img");
        banner.src = mangas.manga[i].banner;
        
        div.append(genero);
        div.append(banner);
        div.append(nome);
        manga.append(div);
        secao.append(manga);
    }

