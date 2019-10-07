const chalk = require('chalk')
const mongoose = require('mongoose')

export const mongooseConnection = (URI) => {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);
    mongoose.set('useCreateIndex', true);

    mongoose.connection.openUri(URI, { useNewUrlParser: true })
    .then(() => {
        console.log('%s Connected to db: %s successfully via MONGOOSE', chalk.green('✓'), URI)
    })
    .catch(err => {
        console.log(err)
        console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'))
        process.exit(1)
    })
}
