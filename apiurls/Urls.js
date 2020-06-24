import  {baseUrl} from '../config/config'

const URLS_AUTH ={
    'login':baseUrl+'/user/oauth/facebook/',
    'logout':''

}

const URLS_CONTEST={
    'create':baseUrl+'/v1/contests',
    'update':'',
    'delete':''

}


const URLS_QUESTION ={
    'create':baseUrl+'/questions/',
    'mycontest':baseUrl+'/questions/myquestions'
}
export   {URLS_AUTH,URLS_CONTEST,URLS_QUESTION} 

 