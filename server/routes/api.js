const { graphqlHTTP } = require('express-graphql');
const { root, schema } = require('../graphql/schema');

module.exports = graphqlHTTP({
    rootValue: root,
    schema: schema,
    graphiql: true // Если true, то отображает GraphiQL
});
