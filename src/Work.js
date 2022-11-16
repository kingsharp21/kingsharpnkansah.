import Navbar from './components/navbar/Navbar';
import img from '../src/assets/img/kante.jpg'
import img1 from '../src/assets/img/guest a number shot.jpg'
import img2 from '../src/assets/img/travel.jpg'
import img3 from '../src/assets/img/kante.jpg'
import portweb from '../src/assets/img/portfolio.jpg'

import './work.css'
function Work() {
    return (
        <>
        <Navbar/>
        <section id="work">
                <div className="work-page-header">
                    <h1>./work</h1>
                    <p>Selected projects I've worked on in the past.</p>
                    {/* <div className="cate flex">
                        <p>All</p>
                        <p>Web</p>
                        <p>AI</p>
                        <p>AI</p>
                    </div> */}
                </div>
                <div className="work-display flex">
                    <a href='https://kingsharp21.github.io/GuestANumber/' className="projects">
                        <img src={img1} alt="" />
                        <div className="projects-desc">
                        <h3>Guess My Number Game</h3>
                        <p>www.GuestANumber.com</p>
                        </div>
                    </a>
                    <a href='#' className="projects">
                        <img src={portweb} alt="" />
                        <div className="projects-desc">
                        <h3>Projects Name</h3>
                        <p>www.com</p>
                        </div>
                    </a>
                    <a href='https://kingsharp21.github.io/country-tour-advisor/' className="projects">
                        <img src={img2} alt="" />
                        <div className="projects-desc">
                        <h3>Travel Companion</h3>
                        <p>www.travelcompanion.com</p>
                        </div>
                    </a>
                    <a href='#' className="projects">
                        <img src={img} alt="" />
                        <div className="projects-desc">
                        <h3>Projects Name</h3>
                        <p>www.com</p>
                        </div>
                    </a>
                    <a href='#' className="projects">
                        <img src={img} alt="" />
                        <div className="projects-desc">
                        <h3>Projects Name</h3>
                        <p>www.com</p>
                        </div>
                    </a>
                    <a href='#' className="projects">
                        <img src={img} alt="" />
                        <div className="projects-desc">
                        <h3>Projects Name</h3>
                        <p>www.com</p>
                        </div>
                    </a>
                </div>
        </section>
       </>
  );
}

export default Work;