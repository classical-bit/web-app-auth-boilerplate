module.exports = {
    signUp: (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password;
        
        res.status(201).send({email, password});
    }
}