import React from 'react';
import PropTypes from 'prop-types';
import './index.css'
import FileIcon from "./FileIcon";
import FileName from "./FileName";
import Time from "./time";
import CommitMessage from "./CommitMessage";


const FileListItem = ({ file }) => (
    <tr className="file-list-item">
        <td><FileIcon file={file} /></td>
        <td><FileName file={file} /></td>
        <td><CommitMessage commit={file.latestCommit} /></td>
        <td><Time time={file.updated_at} /></td>
    </tr>
);

FileListItem.propTypes = {
    file: PropTypes.object
};

export default FileListItem;
