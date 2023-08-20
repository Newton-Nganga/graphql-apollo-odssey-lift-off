const gql = require("graphql-tag")

//our type definitions
const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]
  }
  "A track is a group  of modules that teaches a specific topic"
  type Track {
    id: ID!
    "the tracks title"
    title: String!
    "the tracks main author"
    author: Author!
    "the tracks main illustration to display in track card and track details"
    thumbnail: String
    "the tracks approximate length to complete in minutes"
    length: Int
    "the number of modules this track contains"
    moduleCount: Int
  }
  "Author of a complete track"
  type Author {
    id: ID!
    "Authors first and last name"
    name: String!
    "Authors profile picture url"
    photo: String
  }
`;

export default typeDefs
