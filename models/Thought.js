const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema (
    {
        reactionId: {
            //use mongoose's objectId date type
            //default value is set to a new objectId

        },
        reactionBody: {
            type: String,
            required: true,
            //280 char max
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
    }
)

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            trim: true,
            //between 1 and 280 char
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
    UserSchema.virtual('thoughtCount').get(function() {
        return this.thought.length;
    }
);

const Comment = model('Comment', CommentSchema);

module.exports = Thought;