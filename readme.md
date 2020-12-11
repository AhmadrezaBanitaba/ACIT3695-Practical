# Final for ACIT 3695 - Advanced Topics in Web Systems

**To run the API**

At the root directory, run `node index.js`

**Sample queries and mutations**

`query {`

`Character{`

`name`

`}`

`droid(id: "2000") {`

`Name`

`}`

`}`

**Notes**

To minimize complexity, we assume that the users of this API will insert their username / id when creating a post. That is why the
user field in the schema is only a string and is not directly connected to the User type.
This also applies to adding a comment. Here we assume that the post field that the user fills in is the post the user is commenting on.
