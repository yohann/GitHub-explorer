var React = require('react');

import SearchUser from './SearchUser';
import UserInfo from './UserInfo';

class GitHub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      repos: [],
    };

    this.updateUser = this.updateUser.bind(this);
    this.updateRepos = this.updateRepos.bind(this);
  }
  updateUser(user){
    // console.log(this.state);
    this.setState({user: user});
  }
  updateRepos(repos){
    // console.log(this.state);
    this.setState({repos: repos});
  }
  render() {
    return (
      <div className="container">
        <SearchUser 
          updateUser={this.updateUser}
          updateRepos={this.updateRepos}
        />
        <UserInfo
          user={this.state.user}
          repos={this.state.repos}
        />
      </div>
    );
  }
};

export default GitHub;