alert('WELCOME');

var more = true;

while (more === true) {
    var name = prompt('Enter name :');
    alert('Hello ' + name);

    more = confirm('Wanna type another name?');
}

alert('Thanks a lot :) ');
