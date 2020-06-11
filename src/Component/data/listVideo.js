import batman from '../jacket/batman.jpg';

export const listvideo = [
    {titre: 'voiture', src: batman, synopsis: 'la voiture roule', genre: 'drama'},
    {titre: 'humain', src: batman, synopsis: 'les humains parle', genre: 'action'},
    {titre: 'alien', src: batman, synopsis: 'les aliens envahissent', genre: 'drama'},
    {titre: 'robot', src: batman, synopsis: 'les robots obéissent', genre: 'action'},
    {titre: 'nature', src: batman, genre: 'comedie'},
    {titre: 'inconnue', src: batman, synopsis: 'les inconnue je ne les connait pas', genre: 'action'},
    {titre: 'animal', src: batman, synopsis: 'les animeaux sont mignon', genre: 'drama'},
    {titre: 'molecule', src: batman, synopsis: 'les molécules sont present partout', genre: 'drama'},
    {titre: 'avion', src: batman, synopsis: 'les avion volent', genre: 'aventure'},
    {titre: 'maladie', src: batman, synopsis: 'la maladie est dangereux pour la survie', genre: 'aventure'},
    {titre: 'virus', src: batman, synopsis: 'les virus sont les pires ennemies des humains', genre: 'aventure'}
]//titre, synopsis, genre, date add

function trieGenres(){
    let result = [];
    for( let element of listvideo){
      result.push(element.genre);
    }
    result = Array.from(new Set(result));
    return result;
}

function video(){
    let video = [];
    listvideo.map((element) => 
        video.push(element.titre)
    )
    return video;
}

export const genre = trieGenres();
export const titreVideo = video();
// rajouté different catégorie de vidéo