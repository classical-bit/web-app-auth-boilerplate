
module.exports = {
    signUp: async (req, res) => {
        const {email, password} = req.body;
        console.log('User SignUP');
        res.send(JSON.stringify(req.header));
    },
    signIn: async (req, res) => {

    }
};