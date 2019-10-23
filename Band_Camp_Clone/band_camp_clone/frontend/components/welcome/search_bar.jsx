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
    super(props)
    this.state = this.props.state;
  }

  update(e) {
    return e => this.props.setState({query: e.target.value});
  }

  handleSubmit() {
    e.preventDefault();
    let query = this.state;
    return this.props.fetchSearchResults(query);
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.update()} value="Search and Discover music" />
          <input type="submit" />
        </form>
      </div>
      
    );
  }

}

export default connect(msp, mdp)(SearchBar)