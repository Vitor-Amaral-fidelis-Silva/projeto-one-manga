function carregarMangas() {
    const mangasSalvos = localStorage.getItem('mangas');
    if (mangasSalvos) {
        return JSON.parse(mangasSalvos);
    } else {
        // mangas padrão
        let man = [
            {
                "nome": "Manga1",
                "url": "./assets/mangas/exemplo/inicio.html", 
                "banner": "https://picsum.photos/200/300",
                "description": "Manga is a manga reader and a manga writer.", 
                "genero": "Shonen", 
                "notamedia": 10,
                "notatotal": 10,
                "qtdAvaliacoes": 1,
                "capitulos": [
                    {
                        "numero": 1,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    },
                    {
                        "numero": 2,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    },
                    {
                        "numero": 3,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    },
                    {
                        "numero": 4,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    }
                ],
                "avaliacoes": [
                    {
                        "email": "adm@adm.com",
                        "nota": 10
                    }
                ]
                
            },
            
            {
                "nome": "Manga2",
                "url": "./assets/mangas/exemplo/inicio.html", 
                "banner": "https://picsum.photos/200/300",
                "description": "Manga is a manga reader and a manga writer.", 
                "genero": "Seinen",
                "notamedia": 8,
                "notatotal": 8,
                "qtdAvaliacoes": 1,
                "capitulos": [
                    {
                        "numero": 1,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    },
                    {
                        "numero": 2,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    }
                ],
                "avaliacoes": [
                    {
                        "email": "adm@adm.com",
                        "nota": 8
                    }
                ]
            }, 
            
            {
                "nome": "Manga3",
                "url": "./assets/mangas/exemplo/inicio.html", 
                "banner": "https://picsum.photos/200/300",
                "description": "Manga is a manga reader and a manga writer.", 
                "genero": "Mecha",
                "notamedia": 9,
                "notatotal": 9,
                "qtdAvaliacoes": 1,
                "capitulos": [
                    {
                        "numero": 1,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    },
                    {
                        "numero": 2,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    }
                ],
                "avaliacoes": [
                    {
                        "email": "adm@adm.com",
                        "nota": 9
                    }
                ]
            },
        
            {
                "nome": "Manga4",
                "url": "./assets/mangas/exemplo/inicio.html",  
                "banner": "https://picsum.photos/200/300",
                "description": "Manga is a manga reader and a manga writer.", 
                "genero": "Isekai", 
                "notamedia": 10,
                "notatotal": 10,
                "qtdAvaliacoes": 1,
                "capitulos": [
                    {
                        "numero": 1,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    },
                    {
                        "numero": 2,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    }
                ],
                "avaliacoes": [
                    {
                        "email": "adm@adm.com",
                        "nota": 10
                    }
                ]
            },
        
            {
                "nome": "Manga5",
                "url": "./assets/mangas/exemplo/inicio.html", 
                "banner": "https://picsum.photos/200/300",
                "description": "Manga is a manga reader and a manga writer.", 
                "genero": "Seinen", 
                "notamedia": 7,
                "notatotal": 7,
                "qtdAvaliacoes": 1,
                "capitulos": [
                    {
                        "numero": 1,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    },
                    {
                        "numero": 2,
                        "imagens": [
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300",
                            "https://picsum.photos/200/300"
                        ]
                    }
                ],
                "avaliacoes": [
                    {
                        "email": "adm@adm.com",
                        "nota": 7
                    }
                ]
            }
        
        ];
        localStorage.setItem('mangas', JSON.stringify(man));
        return man;
    }
}
function salvarMangas(mangas) {
    localStorage.setItem('mangas', JSON.stringify(mangas));
}



function setSecaoAtual(manga) {
    localStorage.setItem('mangaAtual', JSON.stringify(manga));
}

function carregarAtual() {
    const Atual = localStorage.getItem('mangaAtual');
    if(Atual){
        return JSON.parse(Atual);
    }
    else{
        console.log("Deu erro");
    }
    
}


var mangas = carregarMangas();
console.log(mangas);
for (var i = 0; i < mangas.length; i++) {
    (function(i) {  
        var secao = document.getElementById("mangas");
        var div = document.createElement("div");
        var manga = document.createElement("a");
        manga.href = mangas[i].url;
        manga.className = "manga";
        var genero = document.createElement("h1");
        genero.innerHTML = mangas[i].genero;
        genero.className = "genero";
        var nome = document.createElement("h1");
        nome.innerHTML = mangas[i].nome;
        nome.className = "nome";
        var banner = document.createElement("img");
        banner.src = mangas[i].banner;
        var notamedia = document.createElement("h1");
        notamedia.innerHTML = "Nota Média: "; 
        notamedia.innerHTML += mangas[i].notamedia; 
        
        manga.addEventListener('click', function(event) {
            event.preventDefault();
            setSecaoAtual(mangas[i]); 
            var temp = carregarAtual();
            console.log(temp);
            window.location.href = 'assets/mangas/exemplo/inicio.html';
        });
        
        div.append(nome);
        div.append(banner);
        div.append(genero);
        div.append(notamedia);
        
        manga.append(div);
        secao.append(manga);
    })(i);  
}


