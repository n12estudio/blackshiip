import {fetchStatus,getErrors,setHJson} from '../utils'
let API = '/api/v1'
// if(process.env.NODE_ENV==='production'){
//   API = process.env.PROD_URL
// }
export const api = {
    getCampaigns() {
        return fetch(`${API}/campaigns`)
        .then(fetchStatus)
        .catch(getErrors)
    },
    postTokenRenew(){
      let init
      init = setHJson(init,'GET')
      return fetch(`${API}/auth/renew_token`,init)
      .then(fetchStatus)
      .catch(getErrors)
    }
}

export const local = {
  setLocalToken(token){
  return sessionStorage.setItem('token_bs',token)
  },
  revokeLocalToken(){
  return sessionStorage.clear()
  }
}

export const api_public = {
  verifyAccount(verifyData){
    let init
    init = setHJson(init,'POST',verifyData)
    return fetch(`${API}/auth/verify_account`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postLoginData(loginData){
    let init
    init = setHJson(init,'POST',loginData)
    return fetch(`${API}/auth/login`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postSignupData(signupData){
    let init
    init = setHJson(init,'POST',signupData)
    return fetch(`${API}/auth/sign_up`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postDataLead(dataLead){
    let init
    init = setHJson(init,'POST',dataLead)
    return fetch(`${API}/public/leads`,init)
    .then(fetchStatus)
    .catch(getErrors)
  },
  postSubscribe(dataSubs){
    let init
    init = setHJson(init,'POST',dataSubs)
    return fetch(`${API}/public/subscribers`,init)
    .then(fetchStatus)
    .catch(getErrors)
  }
}

export const bmx = {
  getSeries(){
      return fetch(`${API}/public/bmx_series`)
      .then(fetchStatus)
      .catch(getErrors)

  }
}
