import ReadMore from "./components/ReadMore";
import Header from "./components/Header"
import Image from 'next/image'
import ProductCard from "./components/ProductCard";
import { products, cards } from "./utils/constant";

export default function Home() {
  return (
    <div className="px-5">
    <Header/>
    <main className="mt-4">
      <section className="main-section">
        <div className="text">
          <h1 className="text-6xl">Meet, Eat & <span className="orange">Enjoy</span> The <span className="orange">Taste</span></h1>
          <h2 className="text-2xl font-bold mt-2">Food tastes better when you share it with your family and friends.</h2>
          
        </div>
        <Image src="/main-pizza.svg" width={365} height={365} alt="Nice big pizza"/>
      </section>
      <div>
      <button className="border-orange-400 border-4 text-orange-400 p-2 mt-2 font-bold">Go to list</button>
        <h1 className="w-full flex justify-center items-center text-5xl">Our Special Recipes</h1>
        <div className="flex justify-between mt-4">
          {products.map((product,index)=>(
            <ProductCard
              name={product.name}
              key={index}
              imageSrc={product.imageSrc} 
              tags={product.tags} 
              ingredients={product.ingredients} 
              price={product.price}/>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row justify-center gap-20 mt-20">
        {cards.map((card) => 
          <ReadMore key={card.title} icon={card.icon} title={card.title} subtitle={card.subtitle} />)}
      </div>
    </main>
    <footer>
      <section className="w-full justify-center items-center gap-4 mt-20 flex flex-col">
        <h1 className="bg-orange-400 text-4xl text-center text-black font-bold rounded-lg p-7">
          Be the first to know about new offer and events
        </h1>
        <form className="flex justify-center items-center">
          <label>
            <input type="email" placeholder="Enter your email" className="bg-gray-500 rounded-xl p-4 text-white" />
          </label>
          <button type="submit" className="bg-black text-white px-3 py-2 w-24 ml-4">Sumbit</button>
        </form>
      </section>

      <section className="grid grid-cols-3 place-items-center gap-4 mt-20">
        <div className="text-center">
          <p>Information</p>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>
        <div className="text-center">
          <p>Information</p>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>
        <div className="text-center">
          <p>Information</p>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>
      </section>

    </footer>
    </div>
  );
}
