import React from 'react';
import PropTypes from 'prop-types';
import InfoItem from './infoitem';
import styles from '../App.css';

const Info = ({ info }) => {
  const infoElements = info.map((item, i) => (
    <li key={i}>
      <InfoItem infoitem={item} />
    </li>
  ));
  return (
    <>
      <div className={styles.Info}>
        <h2>Info</h2>
        <ul>
          {infoElements}
        </ul>
      </div>
    </>
  );
};

Info.propTypes = {
  info: PropTypes.arrayOf(PropTypes.shape({
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired 
  })).isRequired
};

export default Info;
