import Image from 'next/image'
export interface ProductCardProps {
    imageSrc:string
    name:string;
    tags:string[],
    ingredients:string[],
    price:number
}
export default function ProductCard({imageSrc,name,ingredients,price,tags}:ProductCardProps) {
    return (
        <div className='w-full max-w-72 bg-gray-100 rounded-lg p-4'>
            <Image src={imageSrc} width={300} height={300} alt='pizza' />
            <h3 className='text-center font-bold text-xl'>{name}</h3>
            <div className='w-full flex gap-2'>
                {tags.map((tag)=>
                    <div key={tag} className='bg-orange-400 rounded-xl w-fit text-white p-1'>
                        {tag}
                    </div>
                )}
            </div>
            <ul>
                {ingredients.map(ingredient=> <li key={ingredient}>{ingredient}</li>)}
            </ul>
            <div className='w-full flex justify-center items-center gap-12'>
                <button className="bg-orange-400 rounded-xl w-full text-white p-2 mt-2 font-bold">Order</button>
                <p className='font-bold'>{price}$</p>
            </div>
        </div>
    )
}