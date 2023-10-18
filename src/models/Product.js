  import {  Schema, model} from "mongoose"

  const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgUrl: String
  }, {
      timestamps: true, // Nos muestra cuando se guarda un nuevo dato su fecha de creacion y actualizacion
      versionKey: false // Para cuando se cree un nuevo elemento no aparezca el --v
  })

  export default model('Product', productSchema);