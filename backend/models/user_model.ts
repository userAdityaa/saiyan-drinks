import mongoose, { Schema, Document } from 'mongoose'
import { Drink } from './drink_model'


interface UserDoc extends Document { 
    username: string, 
    email: string, 
    password: string, 
    drinks: [any], 
    salt: string, 
}

const UserSchema = new Schema({ 
    username: {type: String, require: true, unique: true}, 
    email: {type: String, require: true, unique: true}, 
    password: {type: String, require: true}, 
    salt: {type: String, require: true},
    drinks: [{type: Schema.Types.ObjectId, ref: 'Drink'}],
}, 
    { 
        toJSON: { 
            transform(doc, ret) { 
                delete ret._v, 
                delete ret.createdAt,
                delete ret.updatedAt
            }
        },
        timestamps: true,
    }
)

const User = mongoose.model<UserDoc>('user', UserSchema);
export { User }