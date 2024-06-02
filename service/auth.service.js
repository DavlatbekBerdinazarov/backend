const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");

class AuthService {
    async register(email, password) {
        const isExistUser = await UserModel.findOne({ email });

        if (isExistUser) {
            throw new Error("User already exist");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({ email, password: hashedPassword });
        return { user };
    }
}

module.exports = new AuthService();