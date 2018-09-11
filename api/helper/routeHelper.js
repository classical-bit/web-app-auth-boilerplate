module.exports = {
    validateAuth: (req, res, next) => {
        req.body.email = req.body.email.toLowerCase();
        const email = req.body.email;
        const password = req.body.password;

        if(email == null, email == "" ){
            res.status(400).send({message: 'Email field is required!'});
        }
        else if(password ==null, password == ""){
            res.status(400).send({message: 'Password field is required!'});
        }
        else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            res.status(400).send({message: 'Invalid email address!'});
        }
        else if(password.length < 6){
            res.status(400).send({message: 'Password must contain at least six characters!'});
        }
        else if(email == password){
            res.status(400).send({message: 'Password must be different from Username!");'});
        }
        else if(!(/[0-9]/.test(password))){
            res.status(400).send({message: 'Password must contain at least one number (0-9)!'});
        }
        else if(!(/[a-z]/.test(password))){
            res.status(400).send({message: 'Password must contain at least one lowercase letter (a-z)!'});
        }
        else if(!(/[A-Z]/.test(password))){
            res.status(400).send({message: 'Password must contain at least one uppercase letter (A-Z)!'});
        }
        next();
    }
}