import * as bcrypt from 'bcrypt';

const comparePasswords = async (password: string, hashedPassword: string) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        throw error;
    }
}

export default comparePasswords;