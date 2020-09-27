const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

let schema = buildSchema(`
  type Query {
    postTitle: String,
    blogTitle: String,
    hui: String,
    test_array: [Int],
  }
`);

/* root предоставляет функции распознования для каждого
   endpoint'a */

let root = {
    postTitle: () => {
        return 'Build a Simple GraphQL Server With Express and NodeJS';
    },
    blogTitle: () => {
        return 'scotch.io';
    },
    hui: () => {
        return 'Хуй Всем!'
    },
    test_array: () => {
        const data = [1,2,3,4];
        return data;
    }
};

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true // Если true, то отображает GraphiQL
});
