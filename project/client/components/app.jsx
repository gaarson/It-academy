import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({decks}) => ({
	decks
})

const mapDispatchToProps = dispatch => ({

})

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>hello</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
