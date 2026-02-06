
import Bounce from '../bouncing/bounce';
import Intro from '../intro/intro';
import Skills from '../skills/skills';
import Project from '../projects/projects';
import Dsa from  '../dsa/dsa';
import Gallery from '../gallery/gallery';
import Contact from '../contact us/contact';
import Footer from '../footer/footer';
import HireMeMarquee from '../HireMeMarquee/hireMeMarquee';

function HomePage(){
  return(
    <>
      <div className="content">
        <Bounce /> {/* Below Navbar */}
        <Intro /> {/* Below Bounce */}
       
        <Skills /> {/* Below Intro */} 
        <HireMeMarquee /> {/* Below Intro */}
        <Project/>
        <Dsa/>
        <Gallery /> {/* Gallery with SEO optimized images */}
        <Contact/>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </>
  );


}
export default HomePage;