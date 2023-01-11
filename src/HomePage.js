import Navbar from './components/navbar/Navbar'
import Showcase from './components/homepage/showcase/Showcase';
import About_Me from './components/homepage/about/About_Me';
import Projects from './components/homepage/projects/Projects';
import Sidenav from './components/sidenav/Sidenav';
import Contact_me from './components/homepage/contact_me/Contact_me';

import './HomePage.css'
function App() {
  return (
    <>
    <Sidenav/>
    <Navbar/>
    <div id="fullpage">
    <Showcase/>
    <About_Me/>
    <Projects/>
    <Contact_me/>
    </div>
    </>
  );
}

export default App;
