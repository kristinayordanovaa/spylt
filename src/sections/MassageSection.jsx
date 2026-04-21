import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);



export default function MassageSection() {
  
    useGSAP(() => {
      const firstMsgSplit = new SplitText(".first-message", { type: "words" });
      const secondMsgSplit = new SplitText(".second-message", { type: "words" });
      const paragraphSplit = new SplitText(".message-content p", { type: "words, lines" }, { linesClass: "paragraph-line" });

      gsap.to(firstMsgSplit.words, {
        color:"#faeade",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
            trigger: ".message-content",
            start: "top center",
            end: "30% center",
            scrub: true,
        }
      });
      gsap.to(secondMsgSplit.words, {
        color:"#faeade",
        ease: "power1.in",
        stagger: 1,
        scrollTrigger: {
            trigger: ".second-message",
            start: "top center",
            end: "bottom center",
            scrub: true,
        }
      });
      const revealTL = gsap.timeline({
        delay: 1,
        scrollTrigger: {
            trigger: ".msg-text-scroll",
            start: "top 60%",
        }
      });
        revealTL.to(".msg-text-scroll", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
            duration: 1
        
        });

        const paragraphTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".message-content p",
                start: "top center",
            }
        });
        paragraphTL.from(paragraphSplit.words, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.1
        });
    }); 


    return (
    <section className="message-content">
        <div className="contaienr mx-auto flex-center py-28 relative">
            <div className="w-full h-full">
                <div className="msg-wrapper">
                    <h1 className="first-message">Stir up your feaerless past and</h1>
                    <div className="msg-text-scroll" style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}>
                        <div className="bg-light-brown md:pb-5 pb-3 px-5">
                            <h2 className="text-red-brown">Fuel Up</h2>
                        </div>
                    </div>
                    <h1 className="second-message">your future with every gulp of perfect protein</h1>
                </div>

                <div className="flex-center md:mt-20 mt-10">
                    <div className="max-w-md px-10 flex-center overflow-hidden">
                        <p>SPYLT is the ultimate blend of protein and caffeine, designed to fuel your body and mind for peak performance. </p>
                    </div>
                </div>
            </div>
        </div>


    </section>
    
)};