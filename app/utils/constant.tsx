import Container2Icon from "../assets/Container2Icon"
import ContainerIcon from "../assets/ContainerIcon"
import CutleryIcon from "../assets/CutleryIcon"
import { ProductCardProps } from "../components/ProductCard"

export const cards = [
    {
        icon: <ContainerIcon/>,
        title: "Order Food !",
        subtitle: 'As easy as never ever before ! Now with our advanced stuff, ordering food it’s a piece of cake ! Also you can order online, something even easier with our brand new website !'
    },
    {
        icon: <Container2Icon/>,
        title: "Pick-Up Food !",
        subtitle: 'Pick-Up your food if you are taking it away or just seat, relax and have it on your table when ready !'
    },
    {
        icon: <CutleryIcon/>,
        title: "Enjoy Food !",
        subtitle: 'As soon as you get your food you can enjoy it till the last piece of it and come back soon for another one !'
    }
  ]
  
export const products:ProductCardProps[]=
[
    {
      imageSrc:"/main-pizza.svg",
      name:"Peperoni",
      tags:["Toppings", "Best Sales"],
      ingredients:["Fresh Basil", "Slices", "Red Pepper"],
      price:10
    },
    {
      imageSrc:"/main-pizza.svg",
      name:"Peperoni",
      tags:["Toppings", "Best Sales"],
      ingredients:["Fresh Basil", "Slices", "Red Pepper"],
      price:20
    },
    {
      imageSrc:"/main-pizza.svg",
      name:"Peperoni",
      tags:["Toppings", "Best Sales"],
      ingredients:["Fresh Basil", "Slices", "Red Pepper"],
      price:30
    }
]
