import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector, useDispatch } from 'react-redux'
import { showcase } from '../redux/inviewState'
import './showcase.css'
import avatar from '../../assets/img/avatar young-man-standing-with-laptop.png'
import MovingText from 'react-moving-text'
function Showcase() {
    const showcasePage = useSelector(state => state.inview.value.showcase)
    const dispatch = useDispatch()
    const { ref, inView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        dispatch(showcase(inView)) 
    }, [inView,showcasePage.payload])

    return (
        <header ref={ref} className='section active s1 flex' id="showcase">
            <div className="wrapper flex">
               <div className="text">
                <h1>
                    <span id="sayHello">Hello ! I'm Kingsharp.</span>
                    <br />
                    Software Engineer
                </h1>
                <div className="billboard flex">
                    <span>Highly skilled at progressive enhancement, design systems & UI Engineering.</span>
                    <span>Highly skilled at progressive enhancement, design systems & UI Engineering.</span>
                </div>   
               </div>
               <div aria-label='picture of the developer' className="avator"></div> 
               {/* <div className=''></div> */}
            </div>
        </header>
    );
}

{/* <MovingText
                    type="slideInFromTop"
                    duration="1300ms"
                    delay="0s"
                    // direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none"></MovingText> */}

export default Showcase;
