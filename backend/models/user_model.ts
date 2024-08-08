import mongoose, { Schema, Document } from 'mongoose'


interface UserDoc extends Document { 
    username: string, 
    email: string, 
    password: string, 
    salt: string, 
    order: mongoose.Types.ObjectId[],
}

const UserSchema = new Schema({ 
    username: {type: String, require: true, unique: true}, 
    email: {type: String, require: true, unique: true}, 
    password: {type: String, require: true}, 
    salt: {type: String, require: true},
    order: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
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