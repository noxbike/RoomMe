export const listvideo = [
    {titre: 'voiture'},
    {titre: 'humain'},
    {titre: 'alien'},
    {titre: 'robot'},
    {titre: 'nature'},
    {titre: 'inconnue'},
    {titre: 'animal'},
    {titre: 'molecule'},
    {titre: 'avion'},
    {titre: 'maladie'},
    {titre: 'virus'}
]

export function video(){
    var video =[];
    listvideo.map((element) => 
    video.push(element.titre))

    return video;
}