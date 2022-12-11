import mongoose from 'mongoose'

interface PetInterface {
  name: string,
  owner_name: string
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const PetSchema = new mongoose.Schema<PetInterface>({
  name: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  owner_name: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide the pet owner's name"],
    maxlength: [60, "Owner's Name cannot be more than 60 characters"],
  },
})

export default (mongoose.models.Pet as mongoose.Model<PetInterface>) || mongoose.model<PetInterface>('Pet', PetSchema)
