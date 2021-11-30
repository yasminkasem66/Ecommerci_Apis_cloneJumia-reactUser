export const cartItemReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                id: action.id,
                count: action.count,
            };
        case "REMOVE_FROM_CART":
            return state.id !== action.id;
        case "UPDATE_CART_ITEM":
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                count: action.count,
            });
        default:
            return state;
    }
};