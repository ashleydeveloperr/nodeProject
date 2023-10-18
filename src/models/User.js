import {  Schema, model} from "mongoose"
import bcrypt from 'bcryptjs' //Nos sirve para encryptar la contraseña

const userSchema = new Schema({
  username:{
      type: String,
      unique: true
  } ,
  email:{
    type: String,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  
 roles : [  {
       ref: "Role",                        // De esta froma estamos relacinando los roles con el esquema que se encuentra en role.js
       type: Schema.Types.ObjectId
 },
],
},
{
    timestamps: true, 
      versionKey: false,

});

// Metodo para encryptar la contraseña
userSchema.statics.encryptPassword = async (password)=> {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

// Metodo para comparar la contraseña almacenada retorna true o false

userSchema.statics.comparePassword = async (password, receivedPassword)=> {
    return await bcrypt.compare(password, receivedPassword)
}

export default model('User', userSchema);

