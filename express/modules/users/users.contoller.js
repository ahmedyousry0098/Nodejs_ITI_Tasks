let users = [
    {name: 'Nour', age: 25, job: 'civil-engineer', email: 'nour@gmail.com'},
    {name: 'Abdullah', age: 28, job: 'graphic designer', email: 'abdullah@gmail.com'},
];

const getAllUsers = (req, res) => {
    return res.json({users})
};

const addUser = (req, res) => {
    const {name, age, job, email} = req.body;
    const user = users.find(u => u.email === email);
    if (user) {
        return res.json({message: 'User already exist!'})
    } else {
        users.push({name, age, job, email});
        return res.json({message: 'Done!'})
    }
};

const getSortedUsers = (req, res) => {
    const sortedUsers = [...users].sort((a, b) => {
        if (a.name > b.name) return 1;
        return -1
    });
    return res.json({sortedUsers})
}

const deleteUser = (req, res) => {
    const {email} = req.body;
    const updatedUsers = users.filter(u => u.email !== email);
    return res.json({message: 'Done!', users: updatedUsers})
};

const updateUser = (req, res) => {
    const {name, age, job, email} = req.body;
    const updatedUser = users.map(user => {
        return user.email === email ? {name, age, job, email} : user;
    });
    return res.json({message: 'Done!', updatedUser});
};

const findUser = (req, res) => {
    const {email} = req.body;
    const user = users.find(u => u.email === email);
    if (user) {
        return res.json({message: "User Found", user});
    } else {
        return res.json({message: "User Not Exist!"});
    }
}

module.exports = {getAllUsers, addUser, getSortedUsers, deleteUser, updateUser, findUser}