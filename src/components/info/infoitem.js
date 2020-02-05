import React from 'react';
import PropTypes from 'prop-types';

const InfoItem = ({ infoitem }) => (
  <section>
    <h2>{infoitem.infoartist}</h2>
    <h3>{infoitem.infotitle}</h3>
    <p>{infoitem.infoprice}</p>
  </section>
);

InfoItem.propTypes = {
  infoitem: PropTypes.shape({
    infoartist: PropTypes.string.isRequired,
    infotitle: PropTypes.string.isRequired,
    infoprice: PropTypes.string.isRequired
  }).isRequired
};

export default InfoItem;
