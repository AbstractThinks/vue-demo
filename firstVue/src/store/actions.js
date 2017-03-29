import * as types from './mutations'

export const addToCart = ({commit}, product) => {
	commit(types.ADD_TO_CART, { id: product.id })
}