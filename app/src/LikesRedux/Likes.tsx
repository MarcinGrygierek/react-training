import {LikesCount} from "./LikesCount";
import {Posts} from "./Posts";
import React, {useState} from "react";
import { Provider } from 'react-redux';
import store from "./store";

export const Likes = () => {
   return (
       <Provider store={store}>
           <LikesCount />
           <Posts />
       </Provider>
   );
}
