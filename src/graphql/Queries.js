import {gql} from '@apollo/client'

export const GET_PAGES = gql `
    query GetAllCharacters($page: Int){
        characters(page: $page){
        info {
        count
        pages
        next
        prev
        }
        results{
        name
        status
        type
        }
    }
    }

`