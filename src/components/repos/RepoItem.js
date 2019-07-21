import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card'>
      <h2>
        <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
          {repo.name}
        </a>
      </h2>

      {repo.description && (
        <p>
          <small className='repo__desc'>{repo.description}</small>
        </p>
      )}
      <div className='repo__badges'>
        {repo.language && (
          <div className='badge badge-language badge-primary'>
            Language: {repo.language}
          </div>
        )}
        <div>
          {repo.open_issues_count !== 0 && (
            <div className='badge badge-light'>
              Open issues: {repo.open_issues_count}
            </div>
          )}

          {repo.stargazers_count && (
            <div className='badge badge-light'>
              Stars: {repo.stargazers_count}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
