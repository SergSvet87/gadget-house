import {
  Laptop,
  PC,
  Smartphone,
  Tablet,
  TV,
  Watch,
  Audio,
  GameConsole,
  Photo,
  Kids,
  Sale,
} from '@/assets/constants';

const items = [
  { key: '1', title: 'Smartphone', img: Smartphone, link: '/smartphones' },
  { key: '2', title: 'Laptop', img: Laptop, link: '/laptops' },
  { key: '3', title: 'Tablet', img: Tablet, link: '/tablets' },
  { key: '4', title: 'PC', img: PC, link: '/pcs' },
  { key: '5', title: 'TVs and Multimedia', img: TV, link: '/tvs' },
  { key: '6', title: 'Smart-watch', img: Watch, link: '/smartwatches' },
  { key: '7', title: 'Audio', img: Audio, link: '/audio' },
  { key: '8', title: 'Game console', img: GameConsole, link: '/consoles' },
  { key: '9', title: 'Photo and video', img: Photo, link: '/photo-video' },
  { key: '10', title: 'KIDS', img: Kids, link: '/kids' },
  {
    key: '11',
    title: 'SALE',
    img: Sale,
    link: '/sale',
  },
];

export default items;
