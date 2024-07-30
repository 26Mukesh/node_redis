const mongoose = require('mongoose');
// const { fillDummyData } = require('../action/fillDummyData');

exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        // await fillDummyData()
        console.log('database connected')
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}
