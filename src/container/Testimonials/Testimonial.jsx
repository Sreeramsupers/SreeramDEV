import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonials.scss';

const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [testimonials, setTestimonials] = useState([]);
	const [brands, setBrands] = useState([]);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const query = '*[_type == "testimonials"]';
		const brandsQuery = '*[_type == "brands"]';

		client.fetch(query).then((data) => {
			setTestimonials(data);
		});

		client.fetch(brandsQuery).then((data) => {
			setBrands(data);
		});
	}, []);

	return (
		<>
			<h2 className='head-text'>
				Feed<span>backs</span>
			</h2>
			{testimonials.length && (
				<Carousel
					showArrows={true}
					infiniteLoop={true}
					showThumbs={false}
					showStatus={false}
					autoPlay={true}
					interval={6100}>
					{testimonials.map((item, index) => (
						<div key={item + index}>
							<img src={urlFor(item?.imgurl)} alt='image' />
							<div className='myCarousel'>
								<h3 className='head-text  '>{item.name}</h3>
								<h4 className='testimonial-text'>{item.company}</h4>
								<p className='p-text testimonial-text'>{item.feedback}</p>
							</div>
						</div>
					))}
				</Carousel>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Testimonial, 'app__testimonial'),
	'testimonials',
	'app__primarybg'
);
