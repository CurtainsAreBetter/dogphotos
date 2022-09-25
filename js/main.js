const img = document.querySelector('img');
const btn = document.querySelector('button')

function fetchImage () {
    fetch('https://dog.ceo/api/breed/corgi/cardigan/images/random')
        .then(res => res.json())
        .then(data => {
            console.info(`Image fetched from: ${data.message}`)
            img.setAttribute('src', data.message);
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    console.log('woof');
    fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random')
        .then(res => res.json())
        .then(data => {
            console.log(data[0].audio);
            const audio = new Audio(data[0].audio);
            audio.play();
            
        })
        .catch(err => console.log(`Error from ${url}: ${err}`));
}

btn.addEventListener('click', fetchImage);
