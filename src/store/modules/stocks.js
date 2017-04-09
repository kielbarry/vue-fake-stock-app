import stocks from '../../data/stocks';

const state = {
	stocks: []
};

const mutations = {
	'SET_STOCKS' (state, stocks){
		state.stocks = stocks;
	},
	'RND_STOCKS'(state){

	}
};

const actions = {
	buyStock: function({commit}, order){
		commit();
	},
	initStocks: function({commit}, stocks ){

	},
	randomizeStocks: function({commit}){
		commit('RND_STOCKS');
	}
};

const getters = {
	stocks: function(state){
		return state.stocks;
	}
}

export default {
	state: state,
	mutations: mutations,
	actions: actions,
	getters: getters
}