let tower_field_1 = document.querySelector('#t1');
let tower_field_2 = document.querySelector('#t2');
let tower_field_3 = document.querySelector('#t3');
let button_start = document.querySelector('#strt');
let button_refresh = document.querySelector('#refresh');
let input_element = document.querySelector('#numid');

let tower;
let countClick = 1;
let firstElement;
let secondElement;
let firstRingWidth;
let secondRingWidth;


start();

button_refresh.addEventListener('click', function () {
    tower_field_1.innerHTML = '';
    tower_field_2.innerHTML = '';
    tower_field_3.innerHTML = '';

    start();

})

button_start.addEventListener("click", function () {
    tower_field_1.innerHTML = '';
    tower_field_2.innerHTML = '';
    tower_field_3.innerHTML = '';

    num = input_element.value;

    if (num === '') {
        n = 10;
    } else if (num > 100) {
        n = 100;
    } else if (num <= 1) {
        n = 3;
    } else {
        n = num;
    }

    tower = new Tower(n, tower_field_1);
    tower.createTower();


})


tower_field_1.addEventListener('click', function (event) {
    if (countClick === 1) {
        firstElement = document.getElementById(event.currentTarget.id);
        if (firstElement.childElementCount === 0) {  // if first tower is empty
            alert("This tower is empty. Choose other tower");
        } else {

            clickTrigger();
        }

    } else {  //if countClick === 2

        secondElement = document.getElementById(event.currentTarget.id);

        myFunction();

    }
});


tower_field_2.addEventListener('click', function (event) {
    if (countClick === 1) {
        firstElement = document.getElementById(event.currentTarget.id);
        if (firstElement.childElementCount === 0) {  // if first tower is empty
            alert("This tower is empty. Choose other tower");
        } else {

            clickTrigger();
        }

    } else {  //if countClick === 2

        secondElement = document.getElementById(event.currentTarget.id);

        myFunction();

    }
});



tower_field_3.addEventListener('click', function (event) {
    if (countClick === 1) {
        firstElement = document.getElementById(event.currentTarget.id);
        if (firstElement.childElementCount === 0) {  // if first tower is empty
            alert("This tower is empty. Choose other tower");
        } else {

            clickTrigger();
        }

    } else {  //if countClick === 2

        secondElement = document.getElementById(event.currentTarget.id);

        myFunction();

    }
});

// var timesClicked = 0;

function myFunction() {

    firstRingWidth = firstElement.lastElementChild.clientWidth;
    // console.log("firstRingWidth: " +firstRingWidth);

    if (secondElement.childElementCount > 0) {
        secondRingWidth = secondElement.lastElementChild.clientWidth;
    } else {
        secondRingWidth = 0;
    }
    // console.log("secondRingWidth: " +secondRingWidth);

    if (secondRingWidth > firstRingWidth || secondRingWidth === 0) {
        secondElement.append(firstElement.lastElementChild);
    }

    countClick = 1;

}

function clickTrigger() {
    if (countClick === 1) {
        countClick = 2;
    }

}

function start() {
    let n1 = getRandom();
    tower = new Tower(n1, tower_field_1);
    tower.createTower();

    let n2 = getRandom();
    tower = new Tower(n2, tower_field_2);
    tower.createTower();

    let n3 = getRandom();
    tower = new Tower(n3, tower_field_3);
    tower.createTower();

}

function getRandom() {
    let n = Math.ceil(Math.random() * 20) + 1;
    return n;
}