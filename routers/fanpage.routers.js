const router = require('express').Router();

module.exports = (wagner) => {
    
    const FanPageCtrl = wagner.invoke((FanPage) => 
        require('../controllers/fanpage.controller')(FanPage));

    router.post('/', (req, res) => FanPageCtrl.createFanPage(req, res));          
    
    router.put('/:id', (req, res) => FanPageCtrl.Actualizar(req, res));

    router.get('/:id', (req, res) => FanPageCtrl.findById(req, res));

    router.get('/promedio/:id', (req, res) => FanPageCtrl.findByIdPromedio(req, res));
        
   
    return router;
};