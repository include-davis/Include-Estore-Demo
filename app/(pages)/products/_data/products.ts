interface Product {
  id: string;
  src: string;
  alt: string;
  name: string;
  description: string;
  price: number;
  options?: string[]; // optional array of selectable options (like sizes or colors)
}

const products: Product[] = [
  {
    id: '1',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shib',
    name: 'shib',
    description:
      'About 9 in (23 cm) tall, this Shiba Inu plushie is made from soft, hypoallergenic polyester with embroidered eyes and durable stitching. It’s machine-washable (gentle cycle) and suitable for ages 3 and up.',
    price: 15,
    options: ['Small', 'Medium', 'Large'],
  },
  {
    id: '2',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 2',
    name: 'shiba number 2',
    description:
      'About 9 in (23 cm) tall, this Shiba Inu plushie is made from soft, hypoallergenic polyester with embroidered eyes and durable stitching. It’s machine-washable (gentle cycle) and suitable for ages 3 and up.',
    price: 7,
    options: ['Standard'],
  },
  {
    id: '3',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 3',
    name: 'shiba number 3',
    description:
      'About 9 in (23 cm) tall, this Shiba Inu plushie is made from soft, hypoallergenic polyester with embroidered eyes and durable stitching. It’s machine-washable (gentle cycle) and suitable for ages 3 and up.',
    price: 108,
  },
  {
    id: '4',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shib',
    name: 'shiba number 4',
    description:
      'About 9 in (23 cm) tall, this Shiba Inu plushie is made from soft, hypoallergenic polyester with embroidered eyes and durable stitching. It’s machine-washable (gentle cycle) and suitable for ages 3 and up.',
    price: 141.25,
    options: ['Standard', 'XL'],
  },
  {
    id: '5',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 5',
    name: 'shiba number 5',
    description:
      'About 9 in (23 cm) tall, this Shiba Inu plushie is made from soft, hypoallergenic polyester with embroidered eyes and durable stitching. It’s machine-washable (gentle cycle) and suitable for ages 3 and up.',
    price: 70,
  },
  {
    id: '6',
    src: '/shop/dummy_data/shib.jpg',
    alt: 'shiba number 6',
    name: 'shiba number 6',
    description:
      'About 9 in (23 cm) tall, this Shiba Inu plushie is made from soft, hypoallergenic polyester with embroidered eyes and durable stitching. It’s machine-washable (gentle cycle) and suitable for ages 3 and up.',
    price: 18,
    options: ['Small', 'Medium', 'Large'],
  },
];

export default products;
