const { gql } = require('apollo-server')
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
  `


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
        createPost: (_, { id, user, body, topic, comment }) => {
            const writePost = { id, user, body, topic, comment }
            posts.push(writePost)
            return writePost
        },
        addComment: (_, { comment_id, id, user, responses, post }) => {
            const writeComment = { comment_id, id, user, responses, post }
            comments.push(writeComment)
            return writeComment

        }
    }


}




module.exports = {
    resolvers,
    typeDefs,
}