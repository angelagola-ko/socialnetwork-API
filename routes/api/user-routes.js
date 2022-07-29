const router = require('express').Router();

const {
    getAllUser,
    createUser,
    getUserById,
    deleteUser
} = require('../../controllers/user-controller');

router
.route('/')
.get(getAllUser)
.post(createUser);

router
.route('/:id')
.get(getUserById)
.delete(deleteUser);

module.exports = router;