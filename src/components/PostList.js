import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {notEkleAPI, notLS} from "../actions"
  

const PostList = () => {
  const notlar = useSelector((store)=>store.notlar);
  console.log(notlar)
  const dispatch=useDispatch();

/*useEffect(() => {
  dispatch(notEkleAPI())
  dispatch(notLS())
}, [])*/



  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id} />
      ))}
    </div>
  );
};

export default PostList;
