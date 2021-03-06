import PropTypes from 'prop-types';
var React = require('react');
var GitHubUser = require('../services/GitHubUser');

class SearchUser extends React.Component{
  handleSubmit(e) {
    e.preventDefault();
    GitHubUser.getByUsername(this.refs.username.value).then(function(response){
      this.props.updateUser(response.data);
    }.bind(this));
    GitHubUser.getReposByUsername(this.refs.username.value).then(function(response){
      this.props.updateRepos(response.data);
    }.bind(this));
  }
  render () {
    return(
         <div className="jumbotron">
           <h1>GitHub Info</h1>
           <div className="row">
             <form onSubmit={this.handleSubmit.bind(this)}>
               <div className="form-group">
                 <label>Username</label>
                 <input
                   type="text"
                   ref="username"
                   className="form-control"
                   placeholder="Ex: yohann"
                   />
               </div>
               <button
                 type="submit"
                 className="btn btn-primary">Buscar
               </button>
             </form>
           </div>
         </div>
    );
  }
};

SearchUser.propTypes = {
  updateUser: PropTypes.func,
  updateRepos: PropTypes.func.isRequired,
}

export default SearchUser;