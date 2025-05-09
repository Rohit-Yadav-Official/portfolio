
import Bounce from '../bouncing/bounce';
import Intro from '../intro/intro';
import Skills from '../skills/skills';
import Project from '../projects/projects';
import Dsa from  '../dsa/dsa';
import Contact from '../contact us/contact'


function HomePage(){
  return(
    <div className="content">
        <Bounce /> {/* Below Navbar */}
        <Intro /> {/* Below Bounce */}
        <Skills /> {/* Below Intro */}
       <Project/>
        <Dsa/>
        <Contact/>
        
      </div>
    );


}
export default HomePage;