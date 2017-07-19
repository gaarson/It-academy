import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { deck } from '../actions/index.js';
import { Link } from 'react-router-dom';

const mapStateToProps = ({decks, addingDeck}) => ({
	decks, 
	addingDeck
})

const mapDispatchToProps = dispatch => ({
	addDeck: (name) => dispatch(decks.addDeck(name)),
	showAddDeck: () => dispatch(decks.showAddDeck()),
	hideAddDeck: () => dispatch(add.hideAddDeck())
})

class Sidebar extends React.Component {
	componentDidUpdate() {

	}

	createDeck(evt) {
		if(evt.which != 13) return;

		let name = ReactDOM.findDOMNode(this.refs.add).value;
		this.props.addDeck(name);
		this.props.hideAddDeck();
	}

	render() {
		let props = this.props;

		return (
			<div className='sidebar'>
				<h2> All Decks </h2>
				<ul> 
					{
						props.decks.map((deck, i) => {
							<li key={i}>
								<Link to={`/deck/${deck.id}`}> {deck.name} </Link>
							</li>
						})
					}
				</ul>
				{ props.addingDeck && <input ref="add" onKeyPress={this.createDeck} />}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
