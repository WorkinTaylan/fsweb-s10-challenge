import { NOT_EKLE, NOT_SIL, GET_NOTS_FROM_LS} from "./actions";
import { toast } from "react-toastify";

 const s10chLocalStorageKey = "s10ch";

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function baslangicDegerleriBelirle(key, initObj) {
  const eskiNotlar = localStorageStateOku(key);

  if (eskiNotlar) {
    return eskiNotlar;
  } else {
    return initObj
  }
}
const train =(state=baslangicDegerleriBelirle(s10chLocalStorageKey,baslangicDegerleri), action)=>{
  switch(action.type){
    case NOT_EKLE:
      let yeniState=
        {
      notlar:[...state.notlar, action.payload]
        }
      
      localStorageStateYaz(s10chLocalStorageKey, yeniState)
      
      toast.success('Harika! Not eklendi.')
    return yeniState;

    case NOT_SIL:
      const removed=state.notlar.filter((item)=>item.id!==action.payload)
      localStorageStateYaz(s10chLocalStorageKey, {notlar:removed})
      toast.warn('Çıkarıldınız!!')
      return {
        ...state,
        notlar:removed
      }

      default:
      return state
   
  }
}


export default train;