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
let numberOfDisks;
let gameOver = false;

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

    numberOfDisks = input_element.value;
    gameOver = false;
    countClick = 1;

    if (numberOfDisks === '') {
        n = 10;
    } else if (numberOfDisks > 100) {
        n = 100;
    } else if (numberOfDisks <= 1) {
        n = 3;
    } else {
        n = numberOfDisks;
    }

    tower = new Tower(n, tower_field_1);
    tower.createTower();

})

tower_field_1.addEventListener('click', function (event) {
    if (countClick === 1 && gameOver === false) {
        firstElement = document.getElementById(event.currentTarget.id);
        if (firstElement.childElementCount === 0) {  // if first tower is empty
            alert("This tower is empty. Choose other tower");
        } else {
            clickTrigger();
        }
    } else {  //if countClick === 2

        secondElement = document.getElementById(event.currentTarget.id);

        if (gameOver === false) {
            myFunction();
        }
    }
});

tower_field_2.addEventListener('click', function (event) {
    if (countClick === 1 && gameOver === false) {
        firstElement = document.getElementById(event.currentTarget.id);
        if (firstElement.childElementCount === 0) {  // if first tower is empty
            alert("This tower is empty. Choose other tower");
        } else {

            clickTrigger();
        }

    } else {  //if countClick === 2

        secondElement = document.getElementById(event.currentTarget.id);

        if (gameOver === false) {
            myFunction();
        }
    }
});

tower_field_3.addEventListener('click', function (event) {
    if (countClick === 1 && gameOver === false) {
        firstElement = document.getElementById(event.currentTarget.id);
        if (firstElement.childElementCount === 0) {  // if first tower is empty
            alert("This tower is empty. Choose other tower");
        } else {

            clickTrigger();
        }

    } else {  //if countClick === 2

        secondElement = document.getElementById(event.currentTarget.id);

        if (gameOver === false) {
            myFunction();
        }
    }
});

function myFunction() {

    firstRingWidth = firstElement.lastElementChild.clientWidth;

    if (secondElement.childElementCount > 0) {
        secondRingWidth = secondElement.lastElementChild.clientWidth;
    } else {
        secondRingWidth = 0;
    }

    if (secondRingWidth > firstRingWidth || secondRingWidth === 0 && gameOver === false) {
        secondElement.append(firstElement.lastElementChild);

        checkWin(secondElement);
    }

    if (gameOver === false) {
        countClick = 1;
    }
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

function checkWin(element) {

    if (element.childElementCount === Number(numberOfDisks)) {
        gameOver = true;

        var childElements = element.childNodes;
        let array = [...childElements];

        for (let i = 0; i < element.childElementCount; i++) {

            winAnimation(childElements[i]);
        }
        return true;
    }
    return false;
}

function winAnimation(element) {
    return element.animate([
        // keyframes

        { transform: 'scale(1)' },
        { backgroundColor: 'yellow' },
        { transform: 'scale(1.1)' },
        { transform: 'scale(1)' },
        { backgroundColor: 'red' },
        { transform: 'scale(0.8)' },
        { backgroundColor: 'blue' },
        { transform: 'scale(1)' },
    ], {
        // timing options
        duration: 1800
    });
}