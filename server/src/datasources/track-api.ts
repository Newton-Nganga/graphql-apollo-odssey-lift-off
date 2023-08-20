import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel } from "../models";

export class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    getTracksForHome(){
        return this.get<TrackModel[]>('tracks') //calls [get] to `tracks/`
    }

    getAuthors(authorId:string){
       return this.get<AuthorModel>(`author/${authorId}`) //calls [get] to 'author/:id' 
    }
  }

