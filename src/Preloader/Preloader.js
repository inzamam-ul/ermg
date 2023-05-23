import React from 'react';
import Spinner from 'react-spinkit';
import './preloader.css';
const Preloader = () => {
  return (
    <div
      className="preloader"
      style={{
        height: '100vh',
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      <Spinner className="spiner" name="cube-grid" color="purple" />
    </div>
  );
};

export default Preloader;
