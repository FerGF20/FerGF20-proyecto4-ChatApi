const checkUserCredentials = require('./auth.controller')
const response = require('../utils/handleResponses')
const jwt = require('jsonwebtoken')

const postLogin = (req, res) => {
    const { email, password } = req.body
    checkUserCredentials(email, password)
        .then(data => {
            if(data){

                const token = jwt.sign({
                    id: data.id,
                    email: data.email
                }, 'academlo')

                response.success({
                    res,
                    status: 200,
                    message: 'Correct Credentials!',
                    data: token
                })
            }else{
                response.error({
                    res,
                    status: 401,
                    message: 'Invalid Credentials!'
                })
            }
        })
        .catch(err => {
            response.error({
                res,
                status: 401,
                data: err,
                message: 'Something bad'
            })
        })
}

module.exports = postLogin