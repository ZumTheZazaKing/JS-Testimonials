let image = document.getElementById('image');

let client = document.getElementById('name');

let comment = document.getElementById('comment');

let nextButton = document.getElementById('next');

let previousButton = document.getElementById('previous');

let names = ['Johnny Joestar', 'Jeff Geek', 'Nicolas Bothersome'];

let comments = [

    'He may have outsmarted me, but I outsmarted his outsmarting!',
    'Phenomenal work.',
    'Amazing. That\'s all I can say'

]

let images = [

    'person1.jpeg',
    'person2.jpeg',
    'person3.jpeg'

]

let counter = 0;

function previous(){

    if (counter == 0){

        counter = names.length-1;

        image.src = images[counter];

        client.innerHTML = names[counter];

        comment.innerHTML = comments[counter];

    } else if (counter != 0){

        counter--;

        image.src = images[counter];

        client.innerHTML = names[counter];

        comment.innerHTML = comments[counter];


    }

}

function next(){

    if (counter == names.length-1){

        counter = 0;

        image.src = images[counter];

        client.innerHTML = names[counter];

        comment.innerHTML = comments[counter];

    } else if (counter != names.length-1){

        counter++;

        image.src = images[counter];

        client.innerHTML = names[counter];

        comment.innerHTML = comments[counter];


    }

}