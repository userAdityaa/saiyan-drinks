import mongoose, { Schema, Document } from 'mongoose'
import { User } from './user_model'

interface DrinkDoc extends Document { 
    user: any, 
    name: string, 
    quantity: number, 
    price: number, 
    images: [string],
}

const DrinkSchema = new Schema({ 
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: String}, 
    quantity: {type: Number}, 
    price: {type: Number}, 
    images: {type: [String]},
}, {
    toJSON: { 
        transform(doc, ret) { 
            delete ret._v, 
            delete ret.createdAt,
            delete ret.updatedAt
        }
    }, 
    timestamps: true, 
})

const Drink = mongoose.model<DrinkDoc>('drink', DrinkSchema);
export {Drink}