const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema (
    {
        reactionId: {
            //use mongoose's objectId date type
            //default value is set to a new objectId
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),

        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
         toJSON: {
            virtuals: true,
            getters: true
         },
         id: false
    }
)
//thought schema
const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 280

        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: 
            //Array of nested documented created with the reactionSchema
            [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true //timestamp
        },
        id: false
    }
    );
    
    // get total count of thoughts on retrieval
    ThoughtSchema.virtual('thoughtCount').get(function() {
        return this.thought.length;
    }
);

//create the User model using the userschema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;