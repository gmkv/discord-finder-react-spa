import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  handleChange = evt => this.setState({ [evt.target.name]: evt.target.value });

  handleSubmit = evt => {
    evt.preventDefault();
    // test string is only spaces or empty
    if (/^\s*$/.test(this.state.text)) {
      this.props.setAlert('Please enter something', 'danger');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <input
            type='submit'
            className='btn btn-dark btn-block'
            value='Search'
          />
          {showClear && (
            <button
              type='button'
              className='btn btn-light btn-block'
              onClick={clearUsers}
            >
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
