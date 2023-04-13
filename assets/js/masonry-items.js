

const posts = []

const images = [
    'assets/img/stills/masonry1.webp',
    'assets/img/stills/masonry2.webp',
    'assets/img/stills/masonry3.webp',
    'assets/img/stills/masonry4.webp',
    'assets/img/stills/masonry5.webp'
]

let imageIndex = 0;

for(let i = 1; i <= 80; i++){
    let item = {
        id: i,
        title: ``,
        date: `${i < 10 ? 0 : ''}${i}/10/2021 `,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts)
