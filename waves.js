let wave1 = anime({
    targets: '.wave-1',
    translateX: 20,
    // translateY: -15,
    duration: 2000,
    easing: 'linear',
    loop: true,
    direction: 'alternate',
});

let wave2 = anime({
    targets: '.wave-2',
    translateX: -10,
    translateY: 5,
    duration: 5000,
    easing: 'linear',
    loop: true,
    direction: 'alternate',
});

let wave3 = anime({
    targets: '.wave-3',
    translateX: 50,
    translateY: -15,
    // delay: -50,
    duration: 1500,
    easing: 'linear',
    loop: true,
    direction: 'alternate',
});