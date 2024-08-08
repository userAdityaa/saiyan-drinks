import mongoose, {Schema, Document} from 'mongoose';

interface OrderDoc extends Document {
    user: any,
    drinks: [any],
}

const DrinkSchema = new Schema({
    drink: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    drinks: [DrinkSchema]
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret._v;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: true,
});

const Order = mongoose.model<OrderDoc>('order', OrderSchema);
export { Order };