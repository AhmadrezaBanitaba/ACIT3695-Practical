const { ApolloServer } = require('apollo-server');
const { resolvers, typeDefs, apollo } = require('./src/schema')


apollo.listen().then(({ port }) => {
    console.log(`🚀  Server ready at ${port}`);
});