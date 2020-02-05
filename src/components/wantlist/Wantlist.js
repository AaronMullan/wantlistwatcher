import React from 'react';
import PropTypes from 'prop-types';
import WantlistItem from './WantlistItem';
import styles from '../App.css';

const Wantlist = ({ wantlist }) => {
  const wantlistElements = wantlist.map((item, id) => (
    <li key={id}>
      <WantlistItem wantlistItem={item} />
    </li>
  ));
  return (
    <>
      <div className={styles.Wantlist}>
        <h2>Wantlist</h2>
        <ul>
          {wantlistElements}
        </ul>
      </div>
    </>
  );
};

Wantlist.propTypes = {
  wantlist: PropTypes.arrayOf(PropTypes.shape({
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_id: PropTypes.string.isRequired
  })).isRequired
};

export default Wantlist;
