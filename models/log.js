import mongoose from 'mongoose'

const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

  const LogSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    created_at: {type: Date, default: Date.now}
  })

  let Log = mongoose.model('Log', LogSchema)
  export default Log