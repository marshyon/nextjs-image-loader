import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



export default function DogImage(prop) {
    console.log(prop.imgSrc)
    return (
        <>

            <LazyLoadImage
                alt="dog"
                src={prop.imgSrc} // use normal <img> attributes as props
                width="800"
                effect="blur" />
            <span>"{prop.imgSrc} ..."</span>




        </>
    )



}



// height="400"


