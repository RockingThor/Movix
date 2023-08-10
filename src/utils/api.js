import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";
const TMDB_TOKEN = secrets.TMDB_API_KEY;

const headers ={
    Authorization: "bearer "+ TMDB_TOKEN
};

export const fetchDataFromApi= async(url,params)=>{
    try{
        const {data}= await axios.get(BASE_URL+url, {
            headers: headers,
            params: params
        });
        return data;
    }catch(err){
        console.log(err);
        return err;
    }
}
