import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function FlavorSlider() {
    const sliderRef = useRef();

    useGSAP(() => {
        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
        const sliderTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".flavor-section",
                start: "2% top",
                end: `+=${scrollAmount + 1500}px`,
                pin: true,
                scrub: true,
            }
        });
        sliderTL.to('.flavor-section', {
            x: `-${scrollAmount + 1500}px`,
            ease: "power1.inOut"
        
        });
    });
    return (
        <div ref={sliderRef} className="slider-wrapper">
            <div className="flavors">
            {flavorlists.map((flavor) => (
                <div key={flavor.name} className={`relative lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>
                    <img src={`/images/${flavor.color}-bg.svg`} alt={flavor.name} className="absolute bottom-0"/>
                     <img src={`/images/${flavor.color}-drink.webp`} alt={flavor.name} className="drinks"/>
                     <img src={`/images/${flavor.color}-elements.webp`} alt={flavor.name} className="elements"/>
                     <h1>{flavor.name}</h1>
                </div>
            ))
             }
            </div>
        </div>
    )
}