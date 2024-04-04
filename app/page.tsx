"use client"

import ReadMore from "./components/ReadMore";
import Header from "./components/Header"
import Image from 'next/image'
import ProductCard from "./components/ProductCard";
import { products, cards } from "./utils/constant";
import {useState} from "react";

export default function Home() {
  const [email, setEmail] = useState('');
  const emailSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Your email: ${email}`)
  }
  return (
    <div className="px-5">
    <Header/>
    <main className="mt-4">
      <section className="main-section">
        <div className="text">
          <h1 className="text-6xl">Meet, Eat & <span className="orange">Enjoy</span> The <span className="orange">Taste</span></h1>
          <h2 className="text-2xl font-bold mt-2">Food tastes better when you share it with your family and friends.</h2>
          
        </div>
        <Image className="first-pizza" src="/main-pizza.svg" width={365} height={365} alt="Nice big pizza"/>
      </section>
      <section id="menu">
        <button className="goto-list">Go to cart</button>
        <h1 className="w-full flex mt-4 justify-center items-center text-5xl">Our Special Recipes</h1>
        <div id="product-cards" className="flex justify-between mt-4">
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
      </section>
      <div id="cards" className="w-full flex flex-row justify-center gap-20 mt-20">
        {cards.map((card) => 
          <ReadMore key={card.title} icon={card.icon} title={card.title} subtitle={card.subtitle} />)}
      </div>
    </main>
    <footer>
      <section id='services' className="w-full justify-center items-center gap-4 mt-20 flex flex-col">
        <h2 className="bg-orange-400 text-4xl text-center text-black font-bold rounded-lg p-7">
          Be the first to know about new offer and events
        </h2>
        <form className="flex justify-center items-center">
          <input
              value={email}
              className="bg-gray-500 rounded-xl p-4 text-white"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={(event)=>setEmail(event.target.value)}
          />
          <button type="submit" onClick={emailSubmitHandler} className="bg-black text-white px-3 py-2 w-24 ml-4">Submit</button>
        </form>
      </section>

      <section id="contact" className="grid grid-cols-3 place-items-center gap-4 mt-20">
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
