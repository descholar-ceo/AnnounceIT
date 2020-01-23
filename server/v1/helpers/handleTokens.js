/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';

export const generateToken = (userInfo) => {
    return jwt.sign(userInfo, process.env.TOKEN_KEY,{expiresIn:'6h'});
}