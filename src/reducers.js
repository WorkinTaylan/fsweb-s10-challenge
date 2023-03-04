import { NOT_EKLE, NOT_SIL, GET_NOT_LS} from "./actions";
import { toast } from "react-toastify";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

const train =(state=baslangicDegerleri, action)=>{
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
      localStorageStateYaz(s10chLocalStorageKey, removed)
      toast.warn('Removed it')
      return {
        ...state,
        notlar:removed
      }

      case GET_NOT_LS:
      const updatedNotes = baslangicNotlariniGetir(s10chLocalStorageKey);
      return {
        ...state,
        notlar: updatedNotes,
      };
      
      default:
      return state
   
  }
}



export function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri
  }
}

export default train;