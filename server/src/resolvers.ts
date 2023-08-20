import { Resolvers } from "./types"

export const resolvers:Resolvers = {
    Query: {
        //returns an array of tracks used to populate homepage
        // *tracksForHome: (parent, args, contextValue, info) => {},
        tracksForHome: (_,__,{dataSources}) => {
            return dataSources.trackAPI.getTracksForHome()
        }
    },
    Track:{
        author:({authorId},_,{dataSources}) => {
            return dataSources.trackAPI.getAuthors(authorId)
        }
    }
}