

const posts = []

const images = [
    'assets/img/stills/masonry1.png',
    'assets/img/stills/masonry2.png',
    'assets/img/stills/masonry3.jpg',
    'assets/img/stills/masonry4.png',
    'assets/img/stills/masonry5.png',
    'assets/img/stills/masonry6.png',
    'assets/img/stills/masonry7.png',
    'assets/img/stills/masonry8.png',
    'assets/img/stills/masonry9.png'
]

let imageIndex = 0;

for(let i = 1; i <= 80; i++){
    let item = {
        id: i,
        title: `Post ${i}`,
        date: `${i < 10 ? 0 : ''}${i}/10/2021 `,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts)
