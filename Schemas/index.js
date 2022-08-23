const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const userData = require("../MOCK_DATA.json");

const UserType = require("./TypeDefs/UserType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return userData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        gender: { type: GraphQLString },
        number: { type: GraphQLString },
        email: { type: GraphQLString },
        subscription_plan: { type: GraphQLString },
        start_date: { type: GraphQLString },
        end_date: { type: GraphQLString },
      },
      resolve(parent, args) {
        userData.push({
          id: { type: GraphQLInt },
          first_name: { type: GraphQLString },
          last_name: { type: GraphQLString },
          gender: { type: GraphQLString },
          number: { type: GraphQLString },
          email: { type: GraphQLString },
          subscription_plan: { type: GraphQLString },
          start_date: { type: GraphQLString },
          end_date: { type: GraphQLString },
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
