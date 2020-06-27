const env='DEV'// DEV||PROD
const baseUrlProd=''
const baseUrldev='http://192.168.42.76:3000'
const baseUrl=(env=='PROD')?baseUrlProd:baseUrldev
export {
    env,
    baseUrl
 }
