const env='DEV'// DEV||PROD

const shareWebUrl='https://petti-web.herokuapp.com/Respond/'
const baseUrlProd='https://petti.herokuapp.com'
const baseUrldev='https://petti.herokuapp.com'

const baseUrl=(env=='PROD')?baseUrlProd:baseUrldev
export {
    env,
    baseUrl,
    shareWebUrl
 }
