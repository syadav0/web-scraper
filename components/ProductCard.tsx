import Image from 'next/image'

interface ProductProps {
  title: string,
  price: string,
  description: string,
  imgURL: string
}

const ProductCard = ({ title, price, description, imgURL }: ProductProps) => {
  return (
    <div>

      <Image src={imgURL} className='w-6 h-6' alt='product'/>
      
      <h2>{title}</h2>
      <em><strong>{price}</strong></em>
      <p>{description}</p>

    </div>
  );
}


export default ProductCard;