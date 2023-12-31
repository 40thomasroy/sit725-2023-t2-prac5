let express = require('express');
//const { MongoClient, ServerApiVersion } = require('mongodb');
let app = express();
let port = process.env.port || 3000;
require('./dbconnection');
let router = require('./routers/router');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

/*const uri = "mongodb+srv://40thomasroy:40Thomasroy@cluster0.klekhm5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let collection;

async function runDB() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });

        collection = client.db().collection('Cats');
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (ex) {
        console.error(ex);
    }
}

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});




app.post('/api/cat', (req,res)=>{
    let cat = req.body;
    console.log(cat);
    insertCat(cat, (err,result) => {
        if(!err){
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
});

app.get('/api/cats', (req,res)=>{
    getAllCats((err,result)=>{
        console.log(result);
        if(!err){
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
});

function insertCat(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

runDB().catch(console.dir);*/

app.listen(port, async () => {
    console.log(`Server started on port ${port}`);
    // await runDB();
});
