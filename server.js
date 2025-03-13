const exrpess = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})

app.use('/api', require('./routes/postRouter'));

app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Этот маршрут не существует'
    });
})

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})

