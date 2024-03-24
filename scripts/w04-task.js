/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Ivan Romero',
    photo: 'images/profilepicture.jpg',
    favoriteFoods: [
        'Shawarma',
        'Sushi',
        'Pizza',
        'Paella',
        'Tamal'
    ],
    hobbies: [
        'Guitar',
        'Family History',
        'Chess'
    ],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place:'Guatemala', length:'23 years'});
myProfile.placesLived.push({place:'Bolivia', length:'2 years'});
myProfile.placesLived.push({place:'Canada', length:'7 years'});

/* DOM Manipulation - Output */

document.querySelector('#photo').setAttribute('src',myProfile['photo']);

/* Name */
document.querySelector('#name').textContent = myProfile.name

/* Photo with attributes */
document.getElementById('photo').setAttribute('alt',myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((element) =>{
    let newElement = document.createElement('li');
    newElement.textContent = element;
    document.querySelector('#favorite-foods').appendChild(newElement);
});

/* Hobbies List */

myProfile.hobbies.forEach((element) =>{
    let newElement = document.createElement('li');
    newElement.textContent = element;
    document.querySelector('#hobbies').appendChild(newElement);
});

/* Places Lived DataList */

for(let i = 0; i<myProfile.placesLived.length;i++){
    let dt = document.createElement('dt');
    dt.textContent = myProfile['placesLived'][i]['place']

    let dd = document.createElement('dd');
    dd.textContent = myProfile['placesLived'][i]['length']

    document.querySelector('#places-lived').appendChild(dt)
    document.querySelector('#places-lived').appendChild(dd)
}

