**To run the API**

At the root directory, run `node index.js`

**Sample queries and mutations**


**sample queries**



**get all posts**


query{
  getPosts{
    id,
    body,
    topic,
    user{
      id,
      name
    },
    comment{
      id,
      user
      {
        id,
        name
        
      },
      responses
    }
  }
}


**get post by id**


query {
  getPost(id: 3432) {
    body
    topic
    comment {
      responses
    }
  }
}



**get posts by topic**


query{
  getPostsByTopics(topic: "Sports"){
body
  }
}



**sample mutations**


**create post**




mutation {
  createPost(id: 2323,user:"Tom Delonge", body:"Look at this !", topic:"Astrophotography"){
    body
  }
}



**create comment**



mutation {
  addComment(id: 8965,user:"Tom Delonge", responses:"Look at this !", post:54654){
    user
    responses
  }
}






**Notes**

To minimize complexity, we assume that the users of this API will insert their username / id when creating a post. That is why the
user field in the schema is only a string and is not directly connected to the User type.
This also applies to adding a comment. Here we assume that the post field that the user fills in is the post the user is commenting on.
