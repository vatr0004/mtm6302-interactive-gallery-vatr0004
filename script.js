const $pictureContainer = document.getElementById('picture-container')
const $pic = document.querySelector('.pic')
const imgArr = []

const imagesObject = [
  {
    src: 'images/bigeyecat-300.jpg',
    large: 'images/bigeyecat-2400.jpg',
    caption: '(Image from Pexels) Image of a big eyed cat',
    alt: 'Big eyed kitten image',
  },

  {
    src: 'images/ChillingCat-300.jpg',
    large: 'images/ChillingCat-2400.jpg',
    caption: '(Image from Pexel) Chilling cat',
    alt: 'Desert image',
  },

  {
    src: 'images/DoubleCats-300.jpg',
    large: 'images/DoubleCats-2400.jpg',
    caption: '(Image from Pexel) Two cats together',
    alt: 'two cats',
  },
  {
    src: 'images/SmallCat-300.jpg',
    large: 'images/SmallCat-2400.jpg',
    caption: '(Image from Pexel) Tiny cat laying down',
    alt: 'small cat',
  },

  {
    src: 'images/SnowCats-300.jpg',
    large: 'images/SnowCats-2400.jpg',
    caption: '(Image from Pexel) Two cats together in snow',
    alt: 'two cats in snow',
  },

  {
    src: 'images/SunlightCats-300.jpg',
    large: 'images/SunlightCats-2400.jpg',
    caption: '(Image from Pexel) Cats in sunlight',
    alt: 'cats bathing in sunlight',
  },

  {
    src: 'images/TreeCat-300.jpg',
    large: 'images/TreeCat-2400.jpg',
    caption: '(Image from Pexel) Cat in a tree',
    alt: 'cat staying in a tree',
  },

  {
    src: 'images/grasscat-300.jpg',
    large: 'images/grasscat-2400.jpg',
    caption: '(Image from Pexel) Cat in grass',
    alt: 'cat staying in grass',
  },

  {
    src: 'images/orangecat-300.jpg',
    large: 'images/orangecat-2400.jpg',
    caption: '(Image from Pexel) Cute orange cat',
    alt: 'orange cat',
  },

  {
    src: 'images/lickingcat-300.jpg',
    large: 'images/lickingcat-2400.jpg',
    caption: '(Image from Pexel) Licking cat',
    alt: 'cat licking themselves',
  },

  {
    src: 'images/happycat-300.jpg',
    large: 'images/happycat-2400.jpg',
    caption: '(Image from Pexel) Happy cat',
    alt: 'cat being happy',
  },

  {
    src: 'images/upsidedowncat-300.jpg',
    large: 'images/upsidedowncat-2400.jpg',
    caption: '(Image from Pexel) Upside down cat',
    alt: 'cat being upside down',
  },


]

for (const imageData of imagesObject) {
  imgArr.push(`<img class="thumb" src="${imageData.src}" alt="${imageData.alt}" data-large="${imageData.large}" data-caption="${imageData.caption}">
  `)
}

$pictureContainer.innerHTML = imgArr.join('')

$pictureContainer.addEventListener('click', function (e) {
  const $thumb = e.target.closest('.thumb')
  $pic.innerHTML = `
    <img src="${$thumb.dataset.large}">   
    <small>${$thumb.dataset.caption}</small>`
  $pic.classList.add('show')
})

$pic.addEventListener('click', function () {
  $pic.classList.remove('show')
})