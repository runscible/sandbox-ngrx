 export function reducer (state, action){
   switch(action.type){
      case 'EDIT_TEXT':
        return {
          ...state,
          textAdapter: action.payload
        };
      default:
        return state
    }
 }
