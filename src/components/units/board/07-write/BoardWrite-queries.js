import { gql } from '@apollo/client'

export const graphqlSetting = gql`
    mutation createBoard($writer:String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`