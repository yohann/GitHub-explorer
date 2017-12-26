var React = require('react');

import SearchUser from './SearchUser';

class GitHub extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchUser />
      </div>
    );
  }
};

export default GitHub;