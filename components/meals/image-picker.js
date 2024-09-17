'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image' 


export default function ImagePicker ({label, name}) {
    const [pickedImage, setPickedImage]= useState()
    const imageInput = useRef()

    function handlePickClick(){
        imageInput.current.click()
    }
    function handleImageChange(event){
        const file = event.target.files[0]
        if (!file){
            setPickedImage(null)
            return;
        }
        const fileReader = new FileReader(); 
        fileReader.onload =() => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file) // Read file data as image on web page
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls} >
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet</p>}
                    {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill /> }
                </div>
                <input 
                    type='file'
                    accept='image/png, image/jpeg' 
                    name={name}
                    id={name}
                    className={classes.input}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button 
                    className={classes.button} 
                    type="button" 
                    onClick={handlePickClick}
                >
                    Pick an image
                </button>
            </div>
        </div>
    )
}