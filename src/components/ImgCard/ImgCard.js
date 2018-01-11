import React from 'react';
import './ImgCard.css';

const ImgCard = props => (
	<div className='card'>

		<img src={ props.image } alt={ props.name  }/>

	</div>
);

export default ImgCard;
