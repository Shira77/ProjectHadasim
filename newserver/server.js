const express = require('express');
const cors = require('cors');
const app = express();
const port = 4001;
const corona=require('./routes/CoronaVirus')
const employee=require('./routes/Employee')

app.use(cors());
app.use(express.json());
app.use('/employee',employee);
app.use('/corona',corona);
app.listen(port, () => {
    console.log('server is up and running');
})