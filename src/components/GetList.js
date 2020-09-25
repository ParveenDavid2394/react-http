/*
    React does care how AJAX calls work but they need to know how to display data
    that is received and data that is to be sent to server

    - there are many libraries that can perform get and post action such as fetch api and axios
    - we will use axios
*/

import React, {Component} from 'react'
import axios from 'axios'

class GetList extends Component{

    constructor(props){
        super()

        this.state = {
            posts : [],
            errorMessage : ''
        }

    }

    // perfect time to execute async calls
    componentDidMount(){
        axios.get("")
        .then( response => {
            console.log(response)

            // set response.data into state
            this.setState({
                posts: response.data
            })            
        })
        .catch( error =>{
            console.log(error)

            // set error Message
            this.setState({
                errorMessage:"Something went wrong"
            })
        })
    } 

    render(){

        const { posts, errorMessage } = this.state

        return(
            <div>
                Post List
                {
                    posts.length ? 
                    posts.map( post => <div key={post.id}>{post.title}</div>) :
                    null
                }

                {
                    errorMessage ? <div>{errorMessage}</div> : null
                }
            </div>
        )
    }
}

export default GetList