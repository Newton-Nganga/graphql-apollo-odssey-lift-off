import { CodegenConfig } from '@graphql-codegen/cli';

const config:CodegenConfig ={
    schema:"http://localhost:4000",
    documents:["src/**/*.tsx"],//documents to be considered i generating the types
    generates:{
        "src/__generated__/":{
            preset:"client",
            presetConfig:{
                gqlTagName:'gql' //renames to gql from the default graphql
            }
        }
    },
    //ignoreNoDocuments:true,//generates even when there is no query yet
}

export default config