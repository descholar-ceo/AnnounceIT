/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';

export const generateToken = (userInfo) => {
    const token = jwt.sign(userInfo, process.env.TOKEN_KEY, { expiresIn: '6h' });
    return token;
}