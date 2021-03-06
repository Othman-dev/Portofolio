import React, { useContext, useState } from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../../context/mainContext.js';
import classNames from 'classnames';
import Logo from '../../assets/logo.png';
import Wood from '../../assets/wood.jpeg';
import ReactPlayer from 'react-player/lazy';
import Slider from 'react-input-slider';
import { FaMusic } from 'react-icons/fa';


const Navbar = () => {

		const { main, dispatch } = useContext(MainContext);

		const [playing, setPlaying] = useState(false);
		const [volume, setVolume] = useState({y:0})

		const musicClass = classNames({
				'lightOff': true,
				'lightOn' : main.music ? true : false
		});

		const frenchClass = classNames({
				'lightOff': true,
				'lightOn' : main.french ? true : false
		});

		const knobClass = classNames({
				'knob':true,
				'knobAbout': main.page === 'about' ? true : false,
				'knobProjects': main.page === 'projects' ? true : false,
				'knobSkills': main.page === 'skills' ? true : false,
				'knobContact': main.page === 'contact' ? true : false
		});

		const musicTextContainer = classNames({
				'musicTextContainer':true,
				'musicTextContainerOn': main.music ? true : false
		});

		function musicClick() {
				dispatch({type: 'musicSwitch'});
				setPlaying(!playing);
				playing === false ? setVolume({y:0.5}) : setVolume({y:0})

		};

		function musicLink() {
				window.open('https://www.youtube.com/watch?v=HxF_ws9aeB0', '_blank');
		};

		function linkClick(){
				dispatch({type: 'setNavbarFlex'})
		};
		const sliderStyle = {
				track: {
						height: '16vh',
						width: '.15rem',
						minWidth: '.23vh',
						backgroundColor: 'black',
						borderRadius: '50%/5%'
				},
				active: {
						backgroundColor: '#7DB003'
				},
				thumb: {
						backgroundColor: '#c0c0c0',
						borderRadius: '10%/10%',
						height: '1rem',
						minHeight: '1.8vh',
						width: '2rem',
						minWidth: '3.6vh',
						boxShadow: '0 0 .3rem .09rem black'
				}
		}

return(
		<div className='navbar'>
				<img className='imageBg' src={Wood} alt='wood'/>
				<div className='logoContainer'>
						<NavLink to='/'><img src={Logo} alt='Logo' className='logo'/></NavLink>
				</div>
				<div className='menu'>
						<div className='menuTop'>
								<NavLink className='contact' activeClassName='activeLink' to='/contact' onClick={linkClick}>Contact</NavLink>
								<NavLink exact className='off' activeClassName='activeLink' to='/' onClick={linkClick}>{!main.french ? 'Home': 'Accueil'}</NavLink>
								<NavLink className='about' activeClassName='activeLink' to='/about' onClick={linkClick}>{!main.french ? 'About' : 'A propos'}</NavLink>
						</div>
						<div className={knobClass}>
								<div className='knobEffect'/>
								<div className='knobMarker'/>
				
						</div>
						<div className='menuBottom'>
								<NavLink className='projects' activeClassName='activeLink' to='/projects' onClick={linkClick}>{!main.french ? 'Projects' : 'Projets'}</NavLink>
								<NavLink className='skills' activeClassName='activeLink' to='/skills' onClick={linkClick}>{!main.french ? 'Skills' : 'Aptitudes'}</NavLink>
						</div>
				</div>
				<div className='musicContainer' onClick={musicLink}>
						<div className={musicTextContainer}>
								<p className='musicText'>Merkaba</p>
								<p className='musicText'>Solar  Ohm</p>
								<p className='musicText'>Merkaba</p>
								<p className='musicText'>Solar  Ohm</p>
						</div>
						<ReactPlayer className='musicPlayer' url='https://www.youtube.com/watch?v=HxF_ws9aeB0' loop={true} volume={volume.y} playing={playing}/>
				</div>
				<div className='switches'>
						<div className={musicClass}/>
						<button onClick={musicClick}>
								<FaMusic className='faMusic'/>
						</button>
						<div className='sliderContainer'>
								<Slider yreverse={true} axis='y' y={volume.y} ymin={0} ymax={1} ystep={0.1} onChange={setVolume} styles={sliderStyle}/>
						</div>
						<div className={frenchClass}/>
						<button onClick={() => dispatch({type: 'frenchSwitch'})}>
								<div className='flag'>
										<div className='flagBlue'/>
										<div className='flagWhite'/>
										<div className='flagRed'/>
								</div>
						</button>
				</div>
		</div>
)};

export default Navbar;
