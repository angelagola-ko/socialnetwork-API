const router = require('express').Router();

const {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');
///api/users GET all and POST
router
.route('/')
.get(getAllUser)
.post(createUser);

// /api/users/:getUserById GET one user, PUT and DELETE by users ID
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

//api/users/userId/friendir
router
.route('/:userId/:friendId')
.put(addFriend)
.delete(deleteFriend);

module.exports = router;