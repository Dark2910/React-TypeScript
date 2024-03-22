import * as bcrypt from 'bcrypt';

const hashPassword = async (password: string) => {
    try {
        const saltRounds: number = 10;
        const hash: string = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        throw error;
    }
};

export default hashPassword;