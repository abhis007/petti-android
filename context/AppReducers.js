export default (state, action) => {
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        ...state,
        isSignedIn:  true,
        refreshToken: action.payload.refreshToken,
        authToken: action.payload.authToken,
        fbToken:action.payload.fbToken,
        isLoading:false,
      };
    }
    case 'RESTORE_TOKENS':{
      return{

      }

    }

    case'ENABLE_LIST_RELOAD':{
        return{
          ...state,
          blnReloadList:true,

        }
    }

    case'DISABLE_LIST_RELOAD':{
      return{
        ...state,
        blnReloadList:false,

      }
  }
    case 'SIGN_OUT':{
      return {
        ...state,
        isSignedIn:  false,
        refreshToken: null,
        authToken: null,
        fbToken:null
      };
    }
    case 'LOADING':{
   
      return{
        ...state,
        isLoading:true
      }
    
    }

    case 'LOADING_END':{
      return{
        ...state,
        isLoading:false
      }
    
    }

    default:
      return state;
  }
};
