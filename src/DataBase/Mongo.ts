import mongoose from "mongoose";
import config from "config";

class MongoDb {
    connect() {
        mongoose.connect(config.get('MongoLink'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    }
    connect_once() {
        mongoose.connection.once('open', () => {
            console.log("🤠 DB connected");
        })
    }
}
const Mongo = new MongoDb();
export default Mongo;
