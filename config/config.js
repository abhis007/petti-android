const env='DEV'// DEV||PROD
const baseUrlProd=''
const baseUrldev='https://petti.herokuapp.com'
const baseUrl=(env=='PROD')?baseUrlProd:baseUrldev
export {
    env,
    baseUrl
 }
