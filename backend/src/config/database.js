const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso!');
})
.catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error.message);
});
