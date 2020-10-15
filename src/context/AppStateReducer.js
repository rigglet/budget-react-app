export default (state, action) => {
  const ACTIONS = {
    delete: "DELETE_BUDGET",
    add: "ADD_BUDGET",
    edit: "SAVE_BUDGET",
  };

  switch (action.type) {
    case ACTIONS.delete:
      return {
        ...state,
        savedBudgets: state.savedBudgets.filter(
          (budget) => budget.id !== action.payload
        ),
      };
    case ACTIONS.edit:
      return {
        ...state,
        budgetItems: [action.payload, ...state.budgetItems],
      };
    case ACTIONS.add:
      const savedBudgets = state.savedBudgets.filter(
        (budget) => budget.id !== action.payload.id
      );
      console.log(state);
      return {
        ...state,
        savedBudgets: [action.payload, ...savedBudgets],
      };
    default:
      return state;
  }
};
