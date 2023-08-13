import  jwt  from "jsonwebtoken"

const secretKey = 'your_secret_key';

export const isAuth = (req, res, next) => {
    try{
        const authorization = req.headers.authorization; //which i am giving authorization bearer beside next token
        if (authorization) {
          const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
          console.log(token)
          jwt.verify( token,  secretKey,
            (err, decode) => {
              if (err) {
                res.status(401).send({ message: 'Invalid Token' });
              } else {
                //const decode = { name: 'John Doe', email: 'johndoe@example.com', isAdmin: true }; user object
                // const { name, email, isAdmin } = req.user;
               // const decoded = jwt.verify(token,config.secret);
                //req.user = decoded
                //after verfiying the token it will be decoded
                req.user = decode;
                // If the operations are successful, call next() to pass control to the next middleware or route handler
                next(); //then it will call the createJobschema function
              }
            }
          );
        } else {
          res.status(401).send({ message: 'No Token' });
        }
    }catch(error){
      console.log("what is there in this",error)
    }
  };


export const generateToken = (user) => {
    return jwt.sign({ _id: user._id } , secretKey, 
    {
            expiresIn: '1hr'
    } ) 

}; 

export const refreshToken = (user) => {
    return jwt.sign({ _id: user._id }, secretKey,
{
    expiresIn: '2hr'
})
}




export const isAdmin = (req,res, next) => {
    console.log("what is there in this" ,req.user)
    // if(req.user && req.user.isAdmin === "superAdmin"){
    //     console.log(req.user)
    //     console.log("hello............")
    //     next();
    // }else{
    //     res.status(401).send({ message: 'Invalid superAdmin Token'})
    // }
}