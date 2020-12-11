const { gql, PubSub, ApolloServer } = require('apollo-server')
const comments = require('../db/comments')
const posts = require('../db/posts')
const users = require('../db/users')



const typeDefs = gql
    `

  type User {
    id:ID!
    name: String!
  }

  type Post {
    id:ID!
    user: String!
    body: String!
    topic: String!
    comment: String
  }


  type Comment {
    comment_id:ID!
    user: String!
    responses: String!
    post: ID!
    
  }


  type Query {
    getPost(id: ID!): Post
    getPosts: [Post]
    getPostsByTopics(topic: String): [Post]
  }

  type Mutation {
    createPost(id:ID!, user: String!, body: String!, topic: String!, comment: String): Post !
    addComment(id:ID!, user: String!, responses: String!, post: ID!): Comment !
  }

  type Subscription {
      newPost: Post!
  }
  `


const NEW_POST = "NEW_POST"


const resolvers = {
    Query: {
        getPosts: () => posts,
        getPost: (_, { id }) => {
            const postsList = posts.find(b => b.id == id)
            return postsList
        },
        getPostsByTopics: (_, { topic }) => {
            const postList = posts.filter(b => b.topic == topic)
            return postList
        }
    },
    Mutation: {
        createPost: (_, { id, user, body, topic, comment }, { pubsub }) => {
            const writePost = { id, user, body, topic, comment }
            posts.push(writePost)
            pubsub.publish(NEW_POST, { newPost: writePost })
            return writePost
        },
        addComment: (_, { comment_id, id, user, responses, post }) => {
            const writeComment = { comment_id, id, user, responses, post }
            comments.push(writeComment)
            return writeComment

        }
    },
    Subscription: {
        newPost: {
            subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_POST),
        }
    }


}

const pubsub = new PubSub();

const apollo = new ApolloServer({ typeDefs, resolvers, context: ({ req, res }) => ({ req, res, pubsub }) })


module.exports = {
    resolvers,
    typeDefs,
    apollo
}