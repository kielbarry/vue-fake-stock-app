const state= {
	funds: 1000000,
	stocks: []
}

const mutations = {
	'BUY_STOCK' (state, { stock.id, quantity, stockPrice }){
		const record = state.stocks.find(function(element){
			return element.id === stockId;
			record.quantity ? quantity += quantity : state.stocks.push({ id:stockId, quantity:quantity });
		});
		state.funds -= stock.price * quantity;
	},
	'SELL_STOCK' (state, {stockId, quantity, stockPrice}){
				const record = state.stocks.find(function(element){
					if(record.quantity > quantity){
						 record.quantity -= quantity
					} 
					else {
						state.stocks.splice(state.stocks.indexOf(record), 1);
					}
					state.funds += stock.price * quantity;
				});
	}
}

const actions = {
	sellStock({commit}, order){
		commit('SELL_STOCK', order);
	}
}

const getters = {

};