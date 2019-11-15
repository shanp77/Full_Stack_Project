import React from 'react';
//import { fetchSearchResults } from '../../actions/search_actions';
import { connect } from 'react-redux';

const msp = state => {
  let localState ={
    query: ""
  } 
  return ({
    state: localState
  });
};

const mdp = dispatch => ({

  fetchSearchResults: query => dispatch(fetchSearchResults(query))
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(e) {
    this.setState({query: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = this.state.query;
    console.log(this.state.query);
    this.setState({query: ""});
    // return this.props.fetchSearchResults(query);
  }

  render() {

    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit} >
          <input className="search-text" type="text" onChange={this.update} placeholder="Search and Discover music" value={this.state.query} />
          <input className="search-button" onClick={this.handleSubmit} type="submit" value="" />
        </form>
      </div>
      
    );
  }

}

export default connect(msp, mdp)(SearchBar)