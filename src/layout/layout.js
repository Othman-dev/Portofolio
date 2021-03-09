import React from 'react';
import './layout.scss';
import MainContextProvider from '../context/mainContext.js';
import Navbar from '../components/navbar/navbar.js';
import Display from '../components/display/display.js';
import {
		BrowserRouter as Router,
		Switch,
		Route
} from 'react-router-dom';
/*import Home from '../pages/home/home.js';
import About from '../pages/about/about.js';
import Skills from '../pages/skills/skills.js';
import Projects from '../pages/projects/projects.js';
import Contact from '../pages/contact/contact.js';
import Error from '../pages/error/error.js';
import CursorAnim from '../components/cursorAnim/cursorAnim.js';
*/
const Layout = () => {

return(
		<div className='layout'>
		<MainContextProvider>
		<Router>
				<div className='navbarContainer'>
						<Navbar/>
				</div>
				<div className='pageContainer'>
		{/*				<CursorAnim/>
						<Switch>
						<Route exact path='/'  component={Home}/>
						<Route exact path='/about'  component={About}/>
						<Route exact path='/skills' component={Skills}/>
						<Route exact path='/projects' component={Projects}/>
						<Route exact path='/contact' component={Contact}/>
						<Route component={Error}/>
						</Switch> */}
						<Display/>
				</div>
		</Router>
		</MainContextProvider>
		</div>
)};

export default Layout;
