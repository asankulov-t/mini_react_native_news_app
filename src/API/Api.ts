import axios, {AxiosResponse} from "axios";
import {Root} from "../types/types";

export const Api={
    fetchArticles:()=>{
       return axios.get<AxiosResponse<Root,any>>('https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=JK035a4C4RXPUkozpUxV5AKpmhxWo7VY')
           .then(res=>res)
    }
}