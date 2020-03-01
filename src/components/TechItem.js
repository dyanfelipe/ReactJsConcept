import React from 'react';
import PropTypes from 'prop-types';

function TechItem(props) {
  const { tech, onDelete } = props;
  return (
    <li>
      {tech}{' '}
      <button onClick={onDelete} type="button">
        remove
      </button>
    </li>
  );
}
TechItem.defaultProps = {
  tech: 'Oculto'
};

TechItem.propTypes = {
  tech: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
