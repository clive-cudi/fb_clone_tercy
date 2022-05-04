import { ApolloError, ApolloServer, gql} from 'apollo-server';
import mongoose from 'mongoose';
const URI = process.env.MONGO_URI;
import { typeDefs } from './schemas/index.js';
import { resolvers } from './resolvers/index.js';

mongoose.connect(URI, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log(`Database connection successful`)
})

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=>{
    console.log(`Server up at ${url}`)
})