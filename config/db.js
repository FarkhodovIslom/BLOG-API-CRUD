const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, { 
            useNewUrlParser: true, 
            useUnifiedTechnology: true
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}