interface Product {
  id: string;
  src: string;
  alt: string;
  name: string;
  price: number;
  tags: string[];
}

const products = [
  {
    id: '1',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shib',
    name: 'shib',
    price: 15,
    tags: ['big', 'cute'],
  },
  {
    id: '2',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 2',
    name: 'shiba number 2',
    price: 7,
    tags: ['cute'],
  },
  {
    id: '3',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 3',
    name: 'shiba number 3',
    price: 108,
    tags: ['big'],
  },
  {
    id: '4',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shib',
    name: 'shiba number 4',
    price: 141.25,
    tags: ['big', 'cute', 'super duper'],
  },
  {
    id: '5',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 2',
    name: 'shiba number 5',
    price: 70,
    tags: ['super duper'],
  },
  {
    id: '6',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 3',
    name: 'shiba number 6',
    price: 18,
    tags: ['super duper', 'big'],
  },
];

export default products as Product[];
