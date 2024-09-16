'use client'; // mention to nextJs this file is client component.
import {useEffect, useState} from 'react'
import Image from 'next/image'

import burgerImg from '../../assets/burger.jpg'
import curryImg from '../../assets/curry.jpg'
import dumplingsImg from '../../assets/dumplings.jpg'
import macncheeseImg from '../../assets/macncheese.jpg'
import pizzaImg from '../../assets/pizza.jpg'
import schnitzelImg from '../../assets/schnitzel.jpg'
import tomatoSaladImg from '../../assets/tomato-salad.jpg'
import classes from './image-slide.module.css'

const images= [
    { image: burgerImg, alt: 'A delicious, juicy burger', id: "1b" },
    { image: curryImg, alt: 'A delicious, spicy curry',id: "2b" },
    { image: dumplingsImg, alt: 'Steamed dumplings', id: "3b" },
    { image: macncheeseImg, alt: 'Mac and cheese', id: "4b" },
    { image: pizzaImg, alt: 'A delicious pizza', id: "5b" },
    { image: schnitzelImg, alt: 'A delicious schnitzel', id: "6b" },
    { image: tomatoSaladImg, alt: 'A delicious tomato salad', id: "7b" },
]

export default function ImageSlideShow() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(()=> {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => 
                prevIndex < images.lenth -1 ? prevIndex +1 : 0
            )
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className={classes.slideshow}>
            {images.map ((image, index) => (
                <Image
                    key={image.id}
                    src={image.image}
                    alt={image.alt}
                    className={index === currentImage ? classes.active : ''}
                />
            ))}
        </div>
    )
}