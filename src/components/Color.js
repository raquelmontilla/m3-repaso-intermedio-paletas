import React from 'react';
import PropTypes from 'prop-types';

class Color extends React.Component {
  render() {
    const { colorAction, color } = this.props;
    return (
      <li
        className='card__color'
        style={{ backgroundColor: `#${color}` }}
        onClick={colorAction}
      >
        {color}
      </li>
    );
  }
}

Color.propTypes = {
  colorAction: PropTypes.func,
  color: PropTypes.string
}

export default Color;