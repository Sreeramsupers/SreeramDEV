import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';
import DarkMode from '../Darkmode/DarkMode';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const [active, setActive] = useState('');

	const handleOnClick = (e) => {
		e.stopPropagation();
		setToggle((prevState) => !prevState);
	};

	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<h3 className='app__navbar-logo-title'>
					<span>SREE</span>RAM
				</h3>
			</div>
			<ul className='app__navbar-links'>
				{['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
					<li className='app__flex p-text' key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
				{/* <DarkMode /> */}
			</ul>
			<DarkMode />

			<div className='app__navbar-menu'>
				<HiMenuAlt4 onClick={(e) => handleOnClick(e)} style={{ cursor: 'pointer' }} />

				{toggle && (
					<motion.div
						initial={{ width: 0 }}
						animate={{ width: 300 }}
						transition={{ duration: 0.85, ease: 'easeOut' }}>
						<motion.span
							initial={{ width: 0 }}
							animate={{ width: 70 }}
							transition={{ duration: 0.5, ease: 'easeOut' }}>
							<HiX onClick={(e) => handleOnClick(e)} style={{ cursor: 'pointer' }} />
						</motion.span>
						<ul>
							{['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
								<li key={item}>
									<a href={`#${item}`} onClick={() => setToggle(false)}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
