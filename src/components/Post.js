import React from "react";
import { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";
import { notLS, notSil } from "../actions";
import { useDispatch } from "react-redux";


export default function Post({ item }) {

  const dispatch=useDispatch();
 
  function handleSil() {
    dispatch(notSil(item.id))// burada ilgili eylemi dispatch edin
    // sonra toast mesajı gösterin---reducer içinde gösterdim
  }

  return (
    <div className="beyazKutu p-8 pb-6 mb-4 text-sm">
      <h1>
        {formatDistanceToNow(new Date(item.date), {
          addSuffix: true,
          locale: tr,
        })}
      </h1>

      {item.body.split("|").map((li) => (
        <p className="mt-2" key={li}>
          - {li}
        </p>
      ))}

      <button className="text-xl text-black mt-4 underline hover:text-yellow-200" onClick={handleSil}>
        Bu notu sil
      </button>
    </div>
  );
}
