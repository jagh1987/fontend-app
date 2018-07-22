//Use Local API
const __LOCAL_DOMAIN__= 'http://localhost/CodeIgniter/';
export const DOMAIN= __LOCAL_DOMAIN__;

//Use External API
//const __EXTERNAL_DOMAIN__= 'http://jagh1987.000webhostapp.com/';
//export const DOMAIN= __EXTERNAL_DOMAIN__;

export const __API_BASE_DOMAIN__= DOMAIN;
export const __ALL_USERS_API__ = __API_BASE_DOMAIN__+'user';
export const __GET_USER_API__ = __API_BASE_DOMAIN__+'user/';
export const __DEL_USER_API__ = __API_BASE_DOMAIN__+'user';