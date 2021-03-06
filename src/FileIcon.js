import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

const FileIcon = ({ file}) => {
    let icon = 'fa-file-text-o';
    if (file.type === 'folder') {
        icon = 'fa-folder';
    }

    return (
        <span className="file-icon">
            <i className={`fa ${icon}`} />
        </span>
    );
};

FileIcon.propTypes = {
    file: PropTypes.object
};

export default FileIcon;
