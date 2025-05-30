export interface Product {
  id: string;
  src: string; // main image only
  alt: string;
  name: string;
  price: number; // original price, discount already applied visually
  description: string;
  customizations?: Record<string, string[]>;
  discount?: number; // e.g. 10 = 10% off
  tags: string[];
}

const products: Product[] = [
  {
    id: '1',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shib',
    name: 'shib',
    price: 15,
    discount: 0.2,
    description:
      'About 9 in (23 cm) tall, this Shiba Inu plushie is made from soft, hypoallergenic polyester with embroidered eyes and durable stitching.',
    customizations: {
      Size: ['Small', 'Medium', 'Large'],
      Color: ['Red', 'Blue'],
    },
    tags: ['tag1', 'tag2'],
  },
  {
    id: '2',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 2',
    name: 'shiba number 2',
    price: 7,
    discount: 0.1,
    description:
      'Compact and cuddly, this plushie is perfect for on-the-go comfort and snuggles.',
    customizations: {
      Size: ['Standard'],
    },
    tags: [],
  },
  {
    id: '3',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 3',
    name: 'shiba number 3',
    price: 108,
    discount: 0.15,
    description:
      'Premium plushie designed with ultra-soft material, ideal for collectors.',
    tags: [],
  },
  {
    id: '4',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 4',
    name: 'shiba number 4',
    price: 141.25,
    discount: 0.15,
    description:
      'Extra large shiba plush for maximum huggability. Available in multiple colors.',
    customizations: {
      Size: ['Standard', 'XL'],
      Color: ['Red', 'Blue'],
    },
    tags: [],
  },
  {
    id: '5',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 5',
    name: 'shiba number 5',
    price: 70,
    discount: 0.5,
    description: 'A gift-ready shiba plush with premium stitching and fluff.',
    tags: [],
  },
  {
    id: '6',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 6',
    name: 'shiba number 6',
    price: 18,
    discount: 0.3,
    description: 'The ultimate customizable plushie with swappable features.',
    customizations: {
      Size: ['Small', 'Medium', 'Large'],
      Color: ['White', 'Brown'],
      Model: ['OG', 'Rizz'],
    },
    tags: [],
  },
];

export default products;
