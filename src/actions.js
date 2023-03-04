import axios from "axios";


export const NOT_EKLE = "NOT_EKLE"
export const NOT_SIL = "NOT_SIL"
export const GET_NOT_LS="GET_NOT_LS"

export function notEkle(not) {
  return {type:NOT_EKLE, payload:not} // ...
}

export function notSil(notId) {
  return{type:NOT_SIL, payload:notId} // ...
}

export function notLS(){
  return {type:GET_NOT_LS}
}

export const notEkleAPI = (yeniNot) => dispatch => {
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        dispatch({type:'NOT_EKLE', payload:res.data})// res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
      }
    })
    .catch((error) => console.log(error));
}

export const notSilAPI = (id) => dispatch => {
  console.log(id)
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        dispatch({type:'NOT_SIL', payload:id})//sanki payload başka olacak gibi!! // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin 
      }
    })
    .catch((error) => console.log(error));
}