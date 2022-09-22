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
}

btn.addEventListener('click', fetchImage);
