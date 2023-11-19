const mongoose = require('mongoose');
const uuid = require('uuid/v4');
var assert = require('assert');
mongoose.set('debug', true);

const orderSchema = mongoose.Schema(
    {
        orderno: {
            type: String,
            default: () => uuidv4(), 
            required: true,
          },
        userId:{
            type : String
        },
        created: {
            type: Date,
            default: Date.now
        },
    },
    {
        timestamps : true
    }
)

const Order = mongoose.model('Product', orderSchema);

module.exports = Order;