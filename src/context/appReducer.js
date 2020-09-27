export default (state, action) => {
  switch (action.type) {
    case "DELETE_BUDGET_ITEM":
      return {
        ...state,
        budgetItems: state.budgetItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "ADD_BUDGET_ITEM":
      return {
        ...state,
        budgetItems: [action.payload, ...state.budgetItems],
      };
    default:
      return state;
  }
};
