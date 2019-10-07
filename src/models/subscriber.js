import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const SubscriberSchema = new Schema({
    email: {
        type: String,
        required: true
    }
},
{
    versionKey: false,
    usePushEach: true
});

export default mongoose.model('Subscriber', SubscriberSchema);
