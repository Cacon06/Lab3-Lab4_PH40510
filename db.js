const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const uri = 'mongodb+srv://huongvxph40510:huongvxph40510@cluster0.1dczug4.mongodb.net/AND103';

const connect = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });
        console.log("Connected ");
    } catch (error) {
        console.error("Connection failed:", error);
    }
};

 module.exports= {connect} // Call the connect function to initiate connection
