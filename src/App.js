import React, { Component } from 'react';
import {Button, SideNav, SideNavItem} from 'react-materialize'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div class="container" >
        <SideNav
          trigger={<i id="hamburger" class="medium material-icons black-text">menu</i>}
          options={{ closeOnClick: true }}
          >
          <SideNavItem userView
            user={{
              image: './images/beard.png'
            }}
          />
          <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
          <SideNavItem href='#!second'>Second Link</SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Social</SideNavItem>
          <SideNavItem waves href='https://github.com/kylecom2000'>
            <FontAwesomeIcon icon="cloud" />GitHub</SideNavItem>
        </SideNav>
            <div class="row" id="top-bar">
                <div class="col s3">
                    <a href="/" data-target="slide-out" class="sidenav-trigger" id="MyMenu"><i id="hamburger" class="medium material-icons black-text">menu</i></a>
                </div>
                <div class="col s6">
                    <h1 href="#">Kyle Bauer</h1>
                    <h4>Web Developer</h4>
                    <h4 id="iconSkills">
                        <i class="fab fa-html5 fa-2x"></i>
                        <i class="fab fa-css3-alt fa-2x"></i>
                        <i class="fab fa-js fa-2x"></i>
                        <i class="fab fa-node fa-2x"></i>
                        <br/>
                        <i class="fab fa-react fa-2x"></i>
                        <i class="fab fa-git-square fa-2x"></i>
                        <i class="fab fa-laravel fa-2x"></i>
                    </h4>
                </div>
                <div class="col s3">
                    <a href="#user"><img class="large responsive-img" id="beard" alt="@fat.cheetah" src="./images/beardL.png"></img></a>
                </div>
            </div>
                        
{/* // 1st Parallax Image */}
            <div class="parallax-container">
                <div class="parallax"><img src="./images/01Background.jpg" alt="Kyle Bauer"></img>
                </div>
            </div>
{/* // About Me Section */}
            <div class="section white">
                <div class="row container">
                    <h2 class="header center section scrollspy" id="AboutMe">About Me</h2>
                    <br/>
                    <br/>
                    <p class="grey-text text-darken-3 lighten-3">
                        Web Developer with 10 years of experience in IT helpdesk for the U.S. Coast Guard.  Strong 
                        background in troubleshooting and understanding user-friendly solutions to everyday problems and training on how to utilize technology using plain english. Recent college graduate with a BS in psychology which has provided even more perspective on the human experience and a keen sense on what people are looking for in design.  Passionate about helping others achieve their goals through collaboration by pointing out their strengths and using them to their best ability. Always continuing to strengthen my abilities as a web developer and as a small team leader.
                    </p>
{/* // Collapsible menu in ABOUT ME */}
                    <ul class="collapsible">
                        <li>
                            <div class="collapsible-header section scrollspy"><i class="fas fa-dungeon"></i>More About Me</div>
                            <div class="collapsible-body"><span>
                                I was homeschooled throughout my elementary and highschool career and after I graduated I joined the U.S. Coast Guard where I spent 8 years as an Information Systems Technician working helpdesk troubleshooting user issues on networked computers, printers, and phones. After I fulfilled my obligation to the government, I spent 2 years as a contractor under Dell Services: Federal Government performing the same services for the Coast Guard. The job went away after a government shutdown and I pursued a degree at Texas A&M University Corpus Christi where I graduated Magna Cum Laude with a BA in Psychology and a minor in theatre. I spent a year in Florida helping out my sister and brother-in-law with their family business. Moving back to Texas after a year allowed me the opportunity to go back into the learning environment at UT Austin for a 12-week coding bootcamp which has allowed me to call myself a junior developer. I am currently seeking an entry level position where my past knowledge and skills will allow me to stay in this learning mode and flourish within the ever creative field of full-stack web development.
                                <br/><br/>
                                </span>
                              </div>
                        </li>
{/* // EDUCATION DROPDOWN */}
                        <li>    
                            <div class="collapsible-header"><i class="fas fa-book-reader"></i>Education</div>
                            <div class="collapsible-body"><span>
                                <table>
                                    <tr>
                                        <th>School</th>
                                        <th>Certificate</th>
                                        <th>Completed</th>
                                    </tr>
                                    <tr>
                                        <td>University of Texas at Austin</td>
                                        <td>Coding Bootcamp Certificate</td>
                                        <td>Jan. 2019</td>
                                    </tr>
                                    <tr>
                                        <td>Texas A&M Univeristy - Corpus Christi</td>
                                        <td>BS - Psychology, Minor - Theatre<br/><i>Dean's List, Magna Cum Laude</i></td>
                                        <td>May 2017</td>
                                    </tr>
                                    <tr>
                                        <td>United States Coast Guard</td>
                                        <td>Information Systems Technician</td>
                                        <td>May 2005</td>
                                    </tr>
                                </table>
                                </span>
                            </div>
                        </li>
{/* // Technical SKills Dropdown */}
                        <li>    
                            <div class="collapsible-header"><i class="fas fa-briefcase"></i>Technical Skills</div>
                            <div class="collapsible-body"><span>

                                    Computer Science 
                                    • Design Patterns 
                                    • Algorithms
                                    
                                    Browser Based Technologies
                                    • HTML5
                                    • CSS
                                    • Responsive Design
                                    • CSS Frameworks (Bootstrap, Materialize)
                                    • JavaScript
                                    • jQuery
                                    • Handlebars
                                    • Cookies, Local Storage
                                    • React.js
                                    
                                    Deployment 
                                    • Heroku 
                                    • Git
                                    
                                    PHP (Server Side Development) 
                                    • Laravel
                                    
                                    Node.js (Server Side Development)
                                    • Express
                                    • Security and Session Storage
                                    • User Authentication
                                    • MERN Stack (MongoDB, Express.js, React.js, Node.js)
                                    
                                    Databases
                                    • Firebase 
                                    • MySQL
                                    • MongoDB
                                    
                                    Quality Assurance 
                                    • Writing Tests
                                    
                                    Internet Marketing 
                                    • SEO
                                    • Semantic HTML
                                </span>
                            </div>
                        </li>
{/* // Work History Dropdown */}
                        <li>
                            <div class="collapsible-header"><i class="fas fa-building"></i>Work History</div>
                            <div class="collapsible-body"><span>
                                <table>
                                    <tr>
                                        <th>Company</th>
                                        <th>Title</th>
                                        <th>Dates</th>
                                    </tr>
                                    <tr>
                                        <td>Urban Axes</td>
                                        <td>Axe Coach</td>
                                        <td>July 2018 - Present</td>
                                    </tr>
                                    <tr>
                                        <td>JB Tutoring LLC</td>
                                        <td>Math Tutor</td>
                                        <td>July 2018 - Present</td>
                                    </tr>
                                    <tr>
                                        <td>Strong Landscaping</td>
                                        <td>Designer</td>
                                        <td>July 2017 - Jun. 2018</td>
                                    </tr>
                                    <tr>
                                        <td>Texas A&M Univeristy - Corpus Christi</td>
                                        <td>Learning Community Mentor</td>
                                        <td>Jan. 2017 - May 2017</td>
                                    </tr>
                                    <tr>
                                        <td>Dell Services: Federal Government</td>
                                        <td>Systems Analyst II</td>
                                        <td>Mar. 2012 - Jan. 2014</td>
                                    </tr>
                                    <tr>
                                        <td>United States Coast Guard</td>
                                        <td>Information Systems Technician 2nd Class</td>
                                        <td>May 2004 - May 2012</td>
                                    </tr>
                                </table>
                                </span>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            </div>
{/* // 2nd Parallax image */}
            <div class="parallax-container">
                <div class="parallax"><img src="./images/kyleWall.png" alt="Kyle B."></img></div>
            </div>
{/* // Portfolio Section */}
            <div class="section white">
                    <h2 class="header center section scrollspy" id="Portfolio">Portfolio</h2>
                    <br/>
                    <br/>
                    <div class="slider">
                        <ul class="slides">
                            <li>
                                <img class="sliderImage" src="./images/grocherie.png" alt="Grodheri App"></img>
                                <div class="caption left-align">
                                    <a href="https://grocherie.herokuapp.com/" target="_blank" rel="noopener noreferrer"><h3 class="btn">Grochérie <i class="fas fa-arrow-circle-right"></i></h3></a>
                                    <h5>Team Project/Authentication</h5>
                                    <p>Grochérie is a web app that allows multiple users to view, edit, and complete shopping lists shared across devices. It's geared towards roommates, families, offices, or any groups of people that shop together. </p>
                                </div>
                            </li>
                            <li>
                                <img class="sliderImage" src="./images/ido.png" alt="I.Do App"></img>
                                <div class="caption right-align">
                                    <a href="https://i-dooo.herokuapp.com/" target="_blank" rel="noopener noreferrer"><h3 class="btn">i.Do <i class="fas fa-arrow-circle-right"></i></h3></a>
                                    <h5>React.JS/#TeamDad</h5>
                                    <p> Getting address' from multiple sources and combining them into a single address book can be time consuming.
                                    This app allows people to create themselves inside someone else's contacts. By allowing individuals to submit their own data, some of the burden of event planning to be automated.</p>
                                </div>
                            </li>
                            <li>
                                <img class="sliderImage" src="./images/ForkOff.png" alt="Fork Off!"></img>
                                <div class="caption left-align">
                                    <a href="https://kylecom2000.github.io/TeamOne-ProjectOne/" target="_blank" rel="noopener noreferrer"><h3 class="btn">Fork Off! <i class="fas fa-arrow-circle-right"></i></h3></a>
                                    <h5>Team Project/APIs/GitHub</h5>
                                    <p>Google Maps and Zomato APIs used to retrieve local resturant info and Google Firebase database to sync 2 or more users to choose a resturant in a Tinder-like fashion.</p>
                                </div>
                            </li>
                            <li>
                                <img class="sliderImage" src="./images/CrystalCollector.png" alt="Crystal Collector"></img>
                                <div class="caption right-align">
                                    <a href="https://kylecom2000.github.io/unit-4-game/" target="_blank" rel="noopener noreferrer"><h3 class="btn">Crystal Collector <i class="fas fa-arrow-circle-right"></i></h3></a>
                                    <h5>Javascript/jQuery</h5>
                                    <p>Using jQuery and Javascript to manipulate HTML. CSS styling using Bootstrap.</p>
                                </div>
                            </li>
                            <li>
                                <img class="sliderImage" src="./images/GIPHY.png" alt="Giphy App"></img>
                                <div class="caption left-align">
                                    <a href="https://kylecom2000.github.io/GIPHYApp/" target="_blank" rel="noopener noreferrer"><h3 class="btn">Immortals <i class="fas fa-arrow-circle-right"></i></h3></a>
                                    <h5>GIPHY API/AJAX/jQuery</h5>
                                    <p>A simple app using JavaScript and jQuery to change HTML to populate GIFs and AJAX for retrieving data from GIPHY. Clicking changes the "data state" (animate/still). The search box adds buttons to page for querying GIPHY.</p>
                                </div>
                            </li>
                            <li>
                                <img class="sliderImage" src="./images/trivia.png" alt="Trivia"></img>
                                <div class="caption right-align">
                                    <a href="https://kylecom2000.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer"><h3 class="btn">Trivia <i class="fas fa-arrow-circle-right"></i></h3></a>
                                    <h5>jQuery Dom Manipulation</h5>
                                    <p>A random triva app using JavaScript and jQuery to manipulate HTML and keep track of answers.</p>
                                </div>
                            </li>
                            
                              

                        </ul>
                    </div>
            </div>
{/* // Contact Section */}
            <div class="section white center">
                <h2 class="header center">Contact</h2>
                <br/>
                <a class="waves-effect black-text" href="https://github.com/kylecom2000" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x fa-fw"></i>GitHub</a>
                <a class="waves-effect black-text" href="https://www.linkedin.com/in/kylebauertx" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x fa-fw"></i>LinkedIn</a>
                <a class="waves-effect black-text" href="https://www.instagram.com/kylecom2000/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-2x fa-fw"></i>Instagram</a>
                <br/>
                {/* <a onclick="M.toast({html: 'Copied to Clipboard'})" class="waves-effect black-text email-address"><i class="fas fa-at fa-2x fa-fw"></i>Copy My Email Address</a> */}
                <br/>
                <br/>
                <br/>
            </div>
        
            <footer>
                <div>Photos by <a href="https://www.instagram.com/kalfin2000/">@kalfin2000</a></div>
                <div>Graphic by <a href="https://www.instagram.com/fat.cheetah/">@fat.cheetah</a></div>
            </footer>
            
        </div>
    );
  }
}

export default App;
