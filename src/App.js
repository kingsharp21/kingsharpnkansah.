import Navbar from './components/navbar/Navbar'
import Showcase from './components/showcase/Showcase';
import About_Me from './components/about/About_Me';
import Projects from './components/projects/Projects';
import Sidenav from './components/sidenav/Sidenav';
import Contact_me from './components/contact_me/Contact_me';

import './App.css';

function App() {
  return (
    <>
    {/* <Changes/> */}
    <Navbar/>
    <Sidenav/>
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
