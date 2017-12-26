var React = require('react');
var GitHubUser = require('../services/GitHubUser');

class SearchUser extends React.Component{
  handleSubmit(e) {
    e.preventDefault();
    GitHubUser.getByUsername(this.refs.username.value).then(function(response){
      console.log(response);
    });
    GitHubUser.getReposByUsername(this.refs.username.value).then(function(response){
      console.log(response);
    });
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
                   placeholder="Ex: matheusml"
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

export default SearchUser;