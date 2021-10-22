const db = require('mongoose');

const connection = async () => {
    await db.connect("mongodb://localhost:27017/fampay")
}

connection()
    .then(() => {
        console.log("db connected");
    })
    .catch((e) => {
        console.log(e);
    });