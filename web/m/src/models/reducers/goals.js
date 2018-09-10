const goals = (state , action) => {
  switch(action.type){
    case 'ADD_GOLD':
      return Object.assign({},state);
    default:
      return state;
  }
}

export default goals;