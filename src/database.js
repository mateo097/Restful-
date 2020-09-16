import mongoose, { connect } from 'mongoose';

mongoose.connect('mongodb://Localhost/companydb', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
})
    .then( db => console.log('db is connected'))
    .catch(error => console.log(error))