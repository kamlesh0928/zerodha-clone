const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');

const UsersSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please enter a valid email address'], // Email format validation
        },
        password: {
            type: String,
            required: true,
            minlength: 8, // Minimum password length
        },
        phone: {
            type: String,
            required: true,
            unique: true,
            match: [/^[0-9]{10,15}$/, 'Please enter a valid phone number (between 10 and 15 digits)'], // Phone number format validation
        },
    },
    {
        timestamps: true, // Add timestamps fields (createdAt, updatedAt)
    }
);

// Hash the user's password before saving it to the database
UsersSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10); // Generate salt
        this.password = await bcrypt.hash(this.password, salt); // Hash password with salt
        next();
    } catch (err) {
        next(err); // Pass the error to the next middleware
    }
});

// Method to compare entered password with the hashed password
UsersSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password); // Compare password with hash
    } catch (err) {
        throw new Error('Password comparison failed');
    }
};

module.exports = { UsersSchema };