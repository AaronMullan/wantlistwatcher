import React from 'react';
import PropTypes from 'prop-types';

const InfoItem = ({ infoitem }) => (
  <section>
    <h2>{infoitem.artist}</h2>
    <h3>{infoitem.title}</h3>
    <p>{infoitem.price}</p>
  </section>
);

InfoItem.propTypes = {
  infoitem: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired
};

export default InfoItem;
