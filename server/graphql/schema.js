
const { buildSchema } = require('graphql');
const posts = require('../database/posts');
const _ = require('lodash');



const schema = buildSchema(`
    type Query {
        post(id: Int!): Post,
        posts: [Post],
        postTitle: String
    }
    type Post {
        id: Int
        title: String
        body: String
        img: String
    }
`);

const root = {
    post: ({id}) => {
        const post = _.find(posts, {id: id});
        console.log(post);
        return post;
        },
    posts: () => {
        return posts;
    },
    postTitle: () => {
        return 'Build a Simple GraphQL Server With Express and NodeJS';
    },
};


module.exports = {root ,schema};

