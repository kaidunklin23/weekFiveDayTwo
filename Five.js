let places = [
    {name: 'Florida', beach: true},
    {name: 'Indiana', beach: false},
    {name: 'Virgina', beach: true},
    {name: 'NewYork', beach: false}
];

let goPlaces = [];
for (let i = 0; i < places.length; i++) {
    let p = places[i];
    if(p.name) {
        goPlaces.push(p);
    }
}
console.log(goPlaces)

let beachPlaces =[];
beachPlaces = (places.filter((p)=>{
    return p.beach;
}));
console.log(beachPlaces);

var age= 18;
function birthday(age) {
  return age + 1;
}

var newAge = birthday(age);
console.log(newAge);

var movieList = ["Saw 6", "Scream 3", "Us", "The Grudge"];

function add(list, movieName) {
  return [...list, movieName];
}

function remove(list, movieName) {
  return list.filter(movie => movie !== movieName);
}

var newMovieList = add(movieList, 'It');
var newerMovieList = remove(movieList, 'Us');

console.log(newerMovieList);

const family = [
{    name: 'Jesus', age: 21, gender: 'male'},
{    name: 'Amina', age: 17, gender: 'female'},
{   name: 'Leila', age: 17, gender: 'female'},
{   name: 'Raja', age: 13, gender: 'female'},
{   name: 'Judah', age: 7, gender: 'female'}
];

const yearsAlive = family.map(family => family.age);
console.log(yearsAlive);
