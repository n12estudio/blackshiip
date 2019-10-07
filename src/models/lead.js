import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const LeadSchema = new Schema({
    startup:{
      type:Boolean,
      default:false
    },
    nombre_empresa:{
      type:String
    },
    nombre: {
        type: String
    },
    apellidos: {
        type: String
    },
    tel: {
        type: String
    },
    direccion: {
        type: String
    },
    codigo_postal: {
        type: String
    },
    cargo:{
        type:String
    },
    reto:{
      type:String
    },
    solucion:{
      type:String
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (email) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
            },
            message: '{VALUE} is not a valid email address!',

        },
        required: [true, 'Email address required']
    },
    web:{
      type:String
    },
    comentarios:{
      type:String
    },
    active:{
        type:Boolean,
        default:true
    }
},
{
    versionKey: false,
    usePushEach: true,
    timestamps:true
});

export default mongoose.model('Lead', LeadSchema);
