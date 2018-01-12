import React from 'react';
import './ImgCard.css';

const ImgCard = props => (
	<div className='card col-lg-3 col-md-4 col-xs-6'>
		<img src={ props.image } alt={ props.name } className='cardImage img-fluid' />
	</div>
);

export default ImgCard;
