const AuthService = require("../service/auth.service");

class AuthController {
    async register(req, res, next) {
        try {
            const { email, password } = req.body; // Access email and password from req.body
            const data = await AuthService.register(email, password);
            res.json({ message: "User registered successfully", data });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }
    }

    async activation(req, res, next) {
        // Implement activation logic
    }
}

module.exports = new AuthController();
