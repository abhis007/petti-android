import  {baseUrl} from '../config/config'

const URLS_AUTH ={
    'login':baseUrl+'/auth/facebook/access?accessToken=',
    'logout':''

}

const URLS_CONTEST={
    'create':baseUrl+'/v1/contests',
    'update':'',
    'delete':''

}
export   {URLS_AUTH,URLS_CONTEST} 

 