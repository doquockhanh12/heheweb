    const yes = document.querySelector('.ansyes');
    const no = document.querySelector('.ansno');
    const message = document.querySelector('.message');

    yes.addEventListener('mouseover', () => {
        console.log('Mouse over the "Yes" button');
        const x = Math.floor(Math.random() * (window.innerWidth - yes.offsetWidth));
        const y = Math.floor(Math.random() * (window.innerHeight - yes.offsetHeight));
        yes.style.position = 'fixed';
        yes.style.left = `${x}px`;
        yes.style.top = `${y}px`;
    });

    no.addEventListener('click', () => {
        console.log('Mouse over the "No" button');

        message.style.display = 'block';
    });
