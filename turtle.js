let turtle1 = anime({
    targets: '.turtle-1',
    translateY: [0, 1000],
    translateX: [15, -20, 5],
    duration: 4500,
    easing: 'steps(12)',
    loop: true,
});

let turtle2 = anime({
    targets: '.turtle-2',
    translateY: [0, 1000],
    translateX: [-10, 15, 0],
    duration: 4000,
    easing: 'steps(9)',
    loop: true,
});

let turtle3 = anime({
    targets: '.turtle-3',
    translateY: [0, 1000],
    translateX: [5, -20, 15],
    duration: 5000,
    // easing: 'easeInOutSine',
    easing: 'steps(15)',
    loop: true,
});