import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css'
import testFiles from './testFile';
import Time from './time';

const FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
        {files.map(file => (
        <FileListItem key={file.id} file={file} />
        ))}
        </tbody>
    </table>
);

const FileListItem = ({ file }) => (
    <tr className="file-list-item">
        <FileName file={file} />
        <CommitMessage commit={file.latestCommit} />
        <td className="age">
            <Time time={file.updated_at} />
        </td>
    </tr>
);

// const FileListItem = ({ file }) => (
//   <tr className="file-list-item">
//       <td><FileIcon file={file} /></td>
//       <td><FileName file={file} /></td>
//       <td><CommitMessage commit={file.latestCommit} /></td>
//       <td><Time time={file.updated_at} /></td>
//   </tr>
// );

const FileName = ({ file }) => (
  <React.Fragment>
      <FileIcon file={file} />
      <td className='file-name'>{file.name}</td>
  </React.Fragment>
);

const FileIcon = ({ file}) => {
    let icon = 'fa-file-text-o';
    if (file.type === 'folder') {
        icon = 'fa-folder';
    }

    return (
        <td className="file-icon">
            <i className={`fa ${icon}`} />
        </td>
    );
};

const CommitMessage = ({ commit }) => (
  <td className="commit-message">
      {commit.message}
  </td>
);

FileList.propTypes = {
    files: PropTypes.array
};

FileListItem.propTypes = {
    file: PropTypes.object
};

FileIcon.propTypes = {
    file: PropTypes.object
};

FileName.propTypes = {
    file: PropTypes.object
};

CommitMessage.propTypes = {
    commit: PropTypes.object
};


ReactDOM.render(<FileList files={testFiles} />, document.getElementById('root'));


