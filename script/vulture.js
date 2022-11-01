let vulture1 = anime({
    targets: '.vulture-1',
    translateX: [0, 70],
    translateY: [50, 0],
    duration: 1500,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
});

let vulture2 = anime({
    targets: '.vulture-2',
    translateX: [0, -100],
    translateY: [30, 0],
    delay: 100,
    duration: 2500,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
});