import mongoose, { Schema, Document } from 'mongoose'
import { Drink } from './drink_model'


interface UserDoc extends Document { 
    username: string, 
    email: string, 
    password: string, 
    drinks: [any], 
    orderCreated: boolean,
}

const UserSchema = new Schema({ 
    username: {type: String}, 
    email: {type: String}, 
    password: {type: String}, 
    drinks: [{type: Schema.Types.ObjectId, ref: 'Drink'}],
    orderCreated: {type: Boolean, default: false},
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