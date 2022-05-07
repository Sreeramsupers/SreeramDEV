import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './About.scss';
import { client, urlFor, urlForm } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

// const abouts = [
// 	{
// 		title: 'Web Development',
// 		description: 'I am a web developer with over 4 years of experience, and I love what I do.',
// 		imgUrl: images.about01,
// 	},
// 	{
// 		title: 'Web Design',
// 		description:
// 			'I love to make user interfaces and user experiences more intuitive, easy-to-use and beautiful.',
// 		imgUrl: images.about02,
// 	},
// 	{
// 		title: 'Frontend Design',
// 		description: "I'm a good frontend designer, I have been working on it for 3 years now.",
// 		imgUrl: images.about03,
// 	},
// 	{
// 		title: 'Summary',
// 		description:
// 			"I'm a designer and developer with a great passion for making creative solutions. I am open to new challenges and love to work in an agile way.",
// 		imgUrl: images.about04,
// 	},
// ];

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const query = '*[_type == "abouts"] | order(order asc)';

		client.fetch(query).then((data) => setAbouts(data));
	}, []);

	return (
		<>
			<h2 className='head-text'>
				Iam a <span>Software Dev</span>
				<br />
				and a <span>Student</span>
			</h2>

			<div className='app__profiles'>
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className='app__profile-item'
						key={about.title + index}>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className='bold-text' style={{ margTop: 20 }}>
							{about.title}
						</h2>
						<p className='p-text' style={{ marginTop: 20 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');
