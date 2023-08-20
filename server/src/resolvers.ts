import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    //A resolver to return a specific track by its id
    // ! Note that we are using the same name "track" as the one declared in schema.js

    track:(_,{id},{dataSources}) =>{
      return dataSources.trackAPI.getTrack(id);
    }
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    //id is retrieved from the parent object passed from the resultant tracks
    modules:({id},_,{dataSources})=>{
      return dataSources.trackAPI.getTrackModules(id);
    }
  },
};
