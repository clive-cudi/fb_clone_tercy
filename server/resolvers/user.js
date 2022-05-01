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

    const userUpload = newUser.save().then(()=>{
        console.log(user);
        return {
            success: true,
            user
        }
    }).catch((e)=>{
        console.log(e);
        return {
            success: false,
            user
        }
    });

    return userUpload;
}

const loginUser = (parent, args)=>{
    const {email, password} = args.input;

    const userLogin = User.findOne({'email': email}, (err, result)=>{
        if (err){
            console.log(err);
        }
        if (result?.password == password){
            return {
                success: true,
                user: {
                    firstName: result.firstName,
                    surname: result.surname,
                    email: result.email,
                    mobile: result.mobile,
                    password: result.password
                }
            }
        } else {
            return {
                success: false,
                user: null
            }
        }
    }).clone().catch((e)=>{console.log(e)});


    return userLogin;
}

const sayHello = ()=>{
    return {message: "Hi"};
}

export const userOps = {
    mutations: {
        registerUser: createUser,
        loginUser: loginUser
    },
    query: {
        sayHello
    }
}