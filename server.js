const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', '*'); 
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
		next();
});

app.get('/', (req, res) => res.send('API RUNNING'));

app.use('/api/email', require('./routes/email'))

//PORT & Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`))
