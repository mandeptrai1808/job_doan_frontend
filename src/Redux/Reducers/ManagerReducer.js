const stateDefault = {
    menuListCurrent: [],
    typeId: 0,
    initContent: {}
}

export const ManagerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_MENU_LIST":
        state.menuListCurrent = action.content;
        return {...state}
    case "SWITCH_TYPEID":
        state.typeId = action.content;
        console.log(action.content)
        return {...state}
    case "SET_INIT_CONTENT":
        state.initContent = action.content
        return {...state} 
    default:
        return {...state}
}
}