import { DECK, CARD, RECEIVE_DATA } from '../consts/index.js';

export const decks = (state, action) => {
	switch(action.type) {
		case RECEIVE_DATA: 
			return action.data.decks || state;
			
		case DECK.ADD_DECK: 
			let newDeck = { name: action.data, id: +new Date }
			return state.concat([newDeck]);

		default: return state || []
	}
}