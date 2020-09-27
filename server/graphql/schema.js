
const { buildSchema } = require('graphql');
const posts = require('../database/posts');
const _ = require('lodash');



const schema = buildSchema(`
    type Query {
        post(id: Int!): Post,
        posts: [Post],
    }
    type Post {
        id: Int
        title: String
        descriptionShort: String
        descriptionLarge: String
        img: String
    }
`);

const root = {
    post: ({id}) => {
        return _.find(posts, {id: id});
        },
    posts: () => {
        return posts;
    },
};


module.exports = {root ,schema};

