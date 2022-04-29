import { User } from "../schemas/DB/user.model.js";

const createUser = (parent, args) => {
    const {firstName, surname, email, mobile, password} = args.input;

    const user = {
        firstName,
        surname,
        email,
        mobile,
        password
    };
    //PUSH TO MONGODB

    const newUser = new User({
        ...user
    });

    newUser.save().then(()=>{
        console.log(user);
    }).catch((e)=>{
        console.log(e);
    })

    return user;
}

const sayHello = ()=>{
    return {message: "Hi"};
}

export const userOps = {
    mutations: {
        registerUser: createUser,
    },
    query: {
        sayHello
    }
}