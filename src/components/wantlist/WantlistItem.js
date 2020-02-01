import React from 'react';
import PropTypes from 'prop-types';

const WantlistItem = ({ wantlistitem }) => (
  <section>
    <h2>{wantlistitem.artist}</h2>
    <h3>{wantlistitem.title}</h3>
    <p>{wantlistitem.release_id}</p>
  </section>
);

WantlistItem.propTypes = {
  wantlistitem: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_id: PropTypes.string.isRequired
  }).isRequired
};

export default WantlistItem;
