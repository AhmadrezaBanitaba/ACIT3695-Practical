**To run the API**

At the root directory, run `node index.js`

**Sample queries and mutations**


**sample queries**



**get all posts**


`query{
  getPosts{
    id,
    body,
    topic,
    user,
    comment
  }
}
`


**get post by id**


`query {
  getPost(id: 3432) {
    body
    topic
    comment
  }
}
`


**get posts by topic**


`query{
  getPostsByTopics(topic: "Sports"){
body
  }
}`



**sample mutations**


**create post**




`mutation {
  createPost(id: 2323,user:"Tom Delonge", body:"Look at this !", topic:"Astrophotography"){
    body
  }
}`



**create comment**



`mutation {
  addComment(id: 8965,user:"Tom Delonge", responses:"Look at this !", post:54654){
    user
    responses
  }
}`


**sample subscription**
In GraphQL Playground, open two tabs. In one tab use and execute this subscription. This will start listening for added posts.

`subscription {
  newPost {
    id
    body
  }
}`

In the other tab execute the following sample mutation.

`mutation {
  createPost(id: 5555,user:"Tom Delonge", body:"Look at this !", topic:"Astrophotography"){
    body
  }
}`



**Notes**

To minimize complexity, we assume that the users of this API will insert their username / id when creating a post. That is why the
user field in the schema is only a string and is not directly connected to the User type.
This also applies to adding a comment. Here we assume that the post field that the user fills in is the post the user is commenting on.
