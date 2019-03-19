import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

const FileName = ({ file }) => (
    <span className='file-name'>{file.name}</span>
);

FileName.propTypes = {
    file: PropTypes.object
};

export default FileName;
