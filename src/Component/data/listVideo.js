import batman from '../jacket/batman.jpg';

export const listvideo = [
    {id: 1, titre: 'Heirs', src: 'https://i.skyrock.net/6619/78816619/pics/3205583447_1_10_bEzNeVD2.jpg', synopsis: 'Héritiers d\'une grosse fortune...' , genre: 'drama'},
    {id: 2, titre: 'Hitman', src: 'https://fr.web.img5.acsta.net/r_1280_720/medias/nmedia/18/64/61/90/18920333.jpg', synopsis: 'hitman est un tueur...', genre: 'action'},
    {id: 3, titre: 'Moon lover', src: 'https://www.nautiljon.com/images/drama/00/08/moon_lovers_scarlet_heart_ryeo_2080.jpg', synopsis: 'Il était une fois un prince...', genre: 'drama'},
    {id: 4, titre: 'Fast an Furious', src: 'https://fr.web.img4.acsta.net/pictures/19/06/13/16/39/3685647.jpg', synopsis: 'Dom doit maintenant faire face...', genre: 'action'},
    {id: 5, titre: 'Punisher', src: 'https://fr.web.img4.acsta.net/pictures/17/07/18/12/32/313669.jpg', synopsis: 'Dans une ville ou la délinquance domin...', genre: 'action'},
    {id: 6, titre: 'Batman', src: batman, synopsis: 'Il y a un héro dans l\'ombre...', genre: 'action'},
    {id: 7, titre: 'WereWolf', src: 'https://www.nautiljon.com/images/asian-movie/00/29/a_werewolf_boy_1692.jpg', synopsis: 'Un étrange garçon vivant dans la...', genre: 'drama'},
    {id: 8, titre: 'Ghost', src: 'https://upload.wikimedia.org/wikipedia/en/7/72/Hey_Ghost%2C_Let%27s_Fight_-_Poster.jpg', synopsis: 'Il fait la rencontre d\'une fantome...', genre: 'drama'},
    {id: 9, titre: 'Jumanji', src: 'https://cdn-s-www.estrepublicain.fr/images/ec8d4371-4cf7-446e-b80b-c6ecc9342c53/BES_06/illustration-jumanji-next-level_1-1577698367.jpg', synopsis: 'ils decouvrirent un jeu dans leur...', genre: 'aventure'},
    {id: 10, titre: 'Seigneur des anneaux', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjRfQVW19158aqB86-YaHm5irpfTffm3NEyvB2dmG0VGCJyWEO&usqp=CAU', synopsis: 'Un jeune garçon se retrouve...', genre: 'aventure'},
    {id: 11, titre: 'Avatar', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF_r6fnn_l8uGg9HFQF3vhskffRUB173jeaA9G6dRbBoZqKNRK&usqp=CAU', synopsis: 'A la découverte d\'une planète...', genre: 'aventure'}
]

export const episode = [
    {id: 1, titre: 'episode 1', src: 'https://i.skyrock.net/6619/78816619/pics/3205583447_1_10_bEzNeVD2.jpg'},
    {id: 1, titre: 'episode 2', src: 'https://i.skyrock.net/6619/78816619/pics/3205583447_1_10_bEzNeVD2.jpg'},
    {id: 1, titre: 'episode 3', src: 'https://i.skyrock.net/6619/78816619/pics/3205583447_1_10_bEzNeVD2.jpg'},
    {id: 1, titre: 'episode 4', src: 'https://i.skyrock.net/6619/78816619/pics/3205583447_1_10_bEzNeVD2.jpg'},
    {id: 5, titre: 'episode 1', src: 'https://fr.web.img4.acsta.net/pictures/17/07/18/12/32/313669.jpg'},
    {id: 5, titre: 'episode 2', src: 'https://fr.web.img4.acsta.net/pictures/17/07/18/12/32/313669.jpg'},
    {id: 5, titre: 'episode 3', src: 'https://fr.web.img4.acsta.net/pictures/17/07/18/12/32/313669.jpg'},
    {id: 5, titre: 'episode 4', src: 'https://fr.web.img4.acsta.net/pictures/17/07/18/12/32/313669.jpg'},
    {id: 11, titre: 'episode 1', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF_r6fnn_l8uGg9HFQF3vhskffRUB173jeaA9G6dRbBoZqKNRK&usqp=CAU'},
    {id: 11, titre: 'episode 2', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF_r6fnn_l8uGg9HFQF3vhskffRUB173jeaA9G6dRbBoZqKNRK&usqp=CAU'},
    {id: 11, titre: 'episode 3', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF_r6fnn_l8uGg9HFQF3vhskffRUB173jeaA9G6dRbBoZqKNRK&usqp=CAU'},
    {id: 11, titre: 'episode 4', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQF_r6fnn_l8uGg9HFQF3vhskffRUB173jeaA9G6dRbBoZqKNRK&usqp=CAU'}
];

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