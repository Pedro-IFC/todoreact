const express = require('express');

module.exports = (server) =>{
    const router = express.Router();
    server.use('/api', router);

    const TodoService = require('../api/todo/todoService');
    TodoService.register(router, '/todos');
}