import { ApolloError, ApolloServer, gql} from 'apollo-server';
import mongoose from 'mongoose';
const URI = `mongodb+srv://admin:cloud1234@cluster0.gbgg4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
import { typeDefs } from './schemas/index.js';
import { resolvers } from './resolvers/index.js';

mongoose.connect(URI, {useNewUrlParser: true});

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

// const typeDefs = gql`
//     type Book {
//         title: String
//         author: String
//     }

//     type Query {
//         books: [Book]
//     }
// `;

// const resolvers = {
//     Query: {
//         books: ()=> books,
//     },
// };

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log(`Database connection successful`)
})

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=>{
    console.log(`Server up at ${url}`)
})