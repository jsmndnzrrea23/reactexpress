const express = require("express");

const app = express();

app.get('/api/clients', (req, res) => {
    const clients = [
        {id: 1, firstName: 'Jessmond', lastName: 'Nazarrea'},
        {id: 2, firstName: 'Hannah', lastName: 'Chua'},
        {id: 3, firstName: 'Mitchell', lastName: 'Ladores'}               
    ];
    res.json(clients);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));