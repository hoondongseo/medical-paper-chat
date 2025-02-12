const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat');
const crypto = require('crypto');

const signup = (req, res) => {
    try {
        const { fullName, userName, password, phoneNumber } = req.body;

        const userId = crypto.randomBytes(16).toString('hex');

        const serverClient = connect();

    } catch (error) {
        console.log(error);

        resizeBy.status(500).json({ message: error });
        
    }
};

const login = (req, res) => {
    try {

    } catch (error) {
        console.log(error);

        resizeBy.status(500).json({ message: error });
    }
};

module.exports = { signup, login };