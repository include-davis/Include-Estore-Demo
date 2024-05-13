interface Product {
  id: string;
  src: string;
  alt: string;
  name: string;
  price: number;
}

const products = [
  {
    id: '1',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shib',
    name: 'shib',
    price: 15,
  },
  {
    id: '2',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 2',
    name: 'shiba number 2',
    price: 7,
  },
  {
    id: '3',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 3',
    name: 'shiba number 3',
    price: 108,
  },
  {
    id: '4',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shib',
    name: 'shiba number 4',
    price: 141.25,
  },
  {
    id: '5',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 2',
    name: 'shiba number 5',
    price: 70,
  },
  {
    id: '6',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 3',
    name: 'shiba number 6',
    price: 18,
  },
];

export default products as Product[];
