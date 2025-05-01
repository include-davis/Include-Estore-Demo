interface Product {
  id: string;
  src: string;
  alt: string;
  name: string;
  price: number;
  tags: string[];
  discount: boolean;
  discountPrice?: number;
}

const products = [
  {
    id: '1',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shib',
    name: 'shib',
    price: 15,
    tags: ['big', 'cute'],
    discount: true,
    discountPrice: 12,
  },
  {
    id: '2',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 2',
    name: 'shiba number 2',
    price: 7,
    tags: ['cute'],
    discount: false,
  },
  {
    id: '3',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 3',
    name: 'shiba number 3',
    price: 108,
    tags: ['big'],
    discount: true,
    discountPrice: 95,
  },
  {
    id: '4',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shib',
    name: 'shiba number 4',
    price: 141,
    tags: ['big', 'cute', 'super duper'],
    discount: false,
  },
  {
    id: '5',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 2',
    name: 'shiba number 5',
    price: 70,
    tags: ['super duper'],
    discount: false,
  },
  {
    id: '6',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 3',
    name: 'shiba number 6',
    price: 18,
    tags: ['super duper', 'big'],
    discount: true,
    discountPrice: 15,
  },
];

export default products as Product[];
