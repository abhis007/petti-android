const env='DEV'// DEV||PROD

const shareWebUrl='http://www.petti.in/respond/'
const baseUrlProd='http://ec2-3-16-31-122.us-east-2.compute.amazonaws.com:3000'
const baseUrldev='http://ec2-3-16-31-122.us-east-2.compute.amazonaws.com:3000'

const baseUrl=(env=='PROD')?baseUrlProd:baseUrldev
export {
    env,
    baseUrl,
    shareWebUrl
 }
