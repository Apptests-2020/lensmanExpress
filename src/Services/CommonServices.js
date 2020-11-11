import React from "react";
import axios from "axios";

import { BaseUrl, base64Auth } from "../utils/constants";

export const get = (url, res, err ) => {
        console.log("10",BaseUrl+url, base64Auth);
        axios.get(BaseUrl+url,{
            header : { "Authorization" : base64Auth }
        }).then(response=>{
            res(response.data);
        }).catch(error=>{
            err(error);
        })
    }