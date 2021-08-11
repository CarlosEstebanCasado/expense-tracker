const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Por favor añade algún texto']
    },
    amount: {
        type: Number,
        required: [true, 'Por favor, añade un numero negativo o positivo']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);