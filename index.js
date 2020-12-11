const { ApolloServer } = require('apollo-server');
const { resolvers, typeDefs } = require('./src/schema')




const port = process.env.PORT || 9000
new ApolloServer({ resolvers, typeDefs }).listen({ port }, () =>
    console.log(`Server ready at: http://localhost:${port}`),
)
