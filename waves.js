let wave1 = anime({
    targets: '.wave-1',
    translateX: 20,
    rotate: 0.5,
    duration: 2000,
    easing: 'linear',
    loop: true,
    direction: 'alternate',
});

let wave2 = anime({
    targets: '.wave-2',
    translateX: -10,
    translateY: 15,
    duration: -4000,
    easing: 'linear',
    loop: true,
    direction: 'alternate',
});

let wave3 = anime({
    targets: '.wave-3',
    translateX: 50,
    translateY: -10,
    duration: 2500,
    easing: 'linear',
    loop: true,
    direction: 'alternate',
});

let turtleUnderwater = anime({
    targets: '.turtle-underwater',
    translateX: -100,
    translateY: -20,
    rotate: -2,
    scale: 1.1,
    duration: 3000,
    easing: 'linear',
    loop: true,
    direction: 'alternate',
});