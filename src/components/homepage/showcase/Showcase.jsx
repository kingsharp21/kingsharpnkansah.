import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector, useDispatch } from 'react-redux'
import { showcase } from '../../redux/inviewState'
import './showcase.css'
import avatar from '../../../assets/img/avatar young-man-standing-with-laptop.png'
import MovingText from 'react-moving-text'
import handsome from '../../../assets/img/handsome1.jpg'

function Showcase() {
    const showcasePage = useSelector(state => state.inview.value.showcase)
    const dispatch = useDispatch()
    const { ref, inView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        dispatch(showcase(inView)) 
    }, [inView,showcasePage.payload])

    return (
        <header ref={ref} className='section active s1 ' id="showcase">
            <div className="wrapper flex">
               <div className="text">
                <h1>
                    <span id="sayHello">Hello ! I'm Kingsharp.</span>
                    <br />
                    Software Engineer
                </h1>
                <div className="highlight grid">
                    <span>Highly skilled at progressive enhancement, design systems & AI Engineering.</span>
                    <span>A few years of experience building products with amazing teams across several countries.</span>
                </div>   
               </div>
               {/* <div ></div>  */}
               <img aria-label='picture of the developer' className="avator"src={handsome} alt="" />
               {/* <div className=''></div> */}
            </div>
        </header>
    );
}



export default Showcase;
