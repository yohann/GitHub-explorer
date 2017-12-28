import PropTypes from 'prop-types';

var React = require('react');
var GitHubUser = require('../services/GitHubUser');

import UserRepos from './UserRepos';

function UserInfo(props) {
  const userInfo = props.user ?
    (
      <div className="row">
        <div className="col-lg-4">
          <img className="img-circle" src={props.user.avatar_url} alt="avatar" width="140" height="140" />
          <h2>{props.user.login}</h2>
          <p>{props.user.name}</p>
          <p>Followers: {props.user.followers} / Following: {props.user.following}</p>
          <p><a className="btn btn-default" href={props.user.html_url} role="button">View details</a></p>
        </div>
        <div className="col-lg-8">
          <UserRepos repos={props.repos} />
        </div>
      </div>
    ) : null;
  return userInfo;
}

UserInfo.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.array,
}

export default UserInfo;