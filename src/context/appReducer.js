export default (state, action) => {
  const ACTIONS = {
    delete: "DELETE_BUDGET_ITEM",
    add: "ADD_BUDGET_ITEM",
    edit: "EDIT_BUDGET_ITEM",
  };

  switch (action.type) {
    case ACTIONS.delete:
      return {
        ...state,
        budgetItems: state.budgetItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    case ACTIONS.add:
      return {
        ...state,
        budgetItems: [action.payload, ...state.budgetItems],
      };
    case ACTIONS.edit:
      const bi = state.budgetItems.filter(
        (item) => item.id !== action.payload.id
      );
      //console.log(bi);
      return {
        ...state,
        budgetItems: [action.payload, ...bi],
      };
    default:
      return state;
  }
};
