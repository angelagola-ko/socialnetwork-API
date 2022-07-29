const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//username/email/thoughts/friends
const UserSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        //validate

    },
    thoughts: [
        //Array of _id values references the Thought model
        {
            type: Schema.Types.ObjectId,
            ref: 'thoughts'
        }
    ],
    friends: [
        //Array of _id values referencing the User model (self-reference)
        {
            type: Schema.Types.ObjectId,
            ref: 'friends'
        }
    ]
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
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('user', UserSchema);

module.exports = User;