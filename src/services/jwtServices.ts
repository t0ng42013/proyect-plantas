import jwt from 'jsonwebtoken';

export const decode = (token: string) => {
    try {
        return jwt.decode(token) as { id: string, isAdmin: boolean }
    } catch (error) {
        console.error('Error decode token ' + error);
    }
};