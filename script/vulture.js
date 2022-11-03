let vulture1 = anime({
    targets: '.vulture-1',
    translateX: [1500, 0],
    translateY: [1000, 0],
    rotate: [0, 3],
    duration: 1500,
    easing: 'spring(10, 60, 30, 2)',
    loop: true,
    direction: 'alternate',
});

let vulture2 = anime({
    targets: '.vulture-2',
    translateX: [0, -100],
    translateY: [30, 0],
    rotate: [0, -3],
    delay: 100,
    duration: 2500,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
});

let vulture3 = anime({
    targets: '.vulture-3',
    translateX: [0, 150],
    translateY: [30, 0],
    rotate: [0, 3],
    delay: 300,
    duration: 3500,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
});