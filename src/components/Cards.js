import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

class Cards extends React.Component {
  render() {
    const { name, colors, colorAction } = this.props;
    return (
      <div className='card'>
        <h2 className='card__name'>{name}</h2>
        <ul className='card__colors'>
          {colors.map((color, colorIndex) => {
            return (
              < Color
                key={colorIndex}
                colorAction={colorAction}
                color={color}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Cards.propTypes = {
  name: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  colorAction: PropTypes.func
}

export default Cards;