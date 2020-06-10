export const listvideo = [
    {titre: 'voiture',synopsis: 'la voiture roule', genre: 'drama'},
    {titre: 'humain',synopsis: 'les humains parle', genre: 'animation'},
    {titre: 'alien', synopsis: 'les aliens envahissent', genre: 'drama'},
    {titre: 'robot', synopsis: 'les robots obéissent', genre: 'action'},
    {titre: 'nature', genre: 'comedie'},
    {titre: 'inconnue', synopsis: 'les inconnue je ne les connait pas', genre: 'action'},
    {titre: 'animal', synopsis: 'les animeaux sont mignon', genre: 'show'},
    {titre: 'molecule', synopsis: 'les molécules sont present partout', genre: 'drama'},
    {titre: 'avion', synopsis: 'les avion volent', genre: 'vlog'},
    {titre: 'maladie', synopsis: 'la maladie est dangereux pour la survie', genre: 'aventure'},
    {titre: 'virus', synopsis: 'les virus sont les pires ennemies des humains', genre: 'aventure'}
]//titre, synopsis, genre, date add

export function trieGenres(){
    var genre = [];
    for( let element of listvideo){
      genre.push(element.genre);
    }
    genre = Array.from(new Set(genre));
    return genre;
}

export function video(){
    var video =[];
    listvideo.map((element) => 
    video.push(element.titre))

    return video;
}

// rajouté different catégorie de vidéo