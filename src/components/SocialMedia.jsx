import React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';

const SocialMedia = () => {
	return (
		<div className='app__social'>
			<a href='https://twitter.com/GamingSreeram' target='_blank' rel='noreferrer'>
				<div>
					<BsTwitter />
				</div>
			</a>
			<a href='https://github.com/Sreeramsupers' target='_blank' rel='noreferrer'>
				<div>
					<BsGithub />
				</div>
			</a>
		</div>
	);
};

export default SocialMedia;
