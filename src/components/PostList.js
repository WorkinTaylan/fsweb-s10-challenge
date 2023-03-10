import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotsFromLocalStorage } from "../actions";

import Post from "./Post";
  

const PostList = () => {
  
  const dispatch=useDispatch();
  const notlar= useSelector((store) => store.notlar);
  
  console.log('notlar burada mı?',notlar)
  

  return notlar.length === 0 ? (
    <div className="beyazKutu text-center p-6 text-2xl font-abc text-white">Hiç notunuz yok</div>
  ) : (
    <div>
      {notlar.map((not) => (
        <Post item={not} key={not.id}/>
      ))}
    </div>
  );
};

export default PostList;
