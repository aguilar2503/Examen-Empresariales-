const http = require('http');
const path = require('path');
const status = require('http-status');

let _fanpage;
const createFanPage = (req, res) => {
    //var a = req.body.total
    //var b = req.params.name 
    const fanpage = req.body;

    _fanpage.create(fanpage)
        .then((data) => {
            res.status(200);
            res.json({
                msg: "Pagina creada ",
                data: data
            });
        })
        .catch((err) => {
            res.status(400);
            res.json({
                msg: "Error!!!!",
                data: err
            });
        })
}
const Actualizar = (req, res) =>{
    const {id} = req.params;
    const fanpag = req.body;

    _fanpage.findByIdAndUpdate(id, fanpag) 
      .then(data => {
          res.status(200);
          res.json({msg:"Actualizado correctamente"});
      })  
      .catch(err=> {
        res.status(404);
        res.json({msg:"Error"});
      })
    }

    const findById = (req, res) => {
        const { id } = req.params;
        const params = {
            _id: id
        };
        _fanpage.findOne(params)
            .then((data) => {
                if (data.length == 0) {
                    res.status(status.NO_CONTENT);
                    res.json({ msg: "Fanpage no encontrada intente con otro id" });
                } else {
                    res.status(status.OK);
                    res.json({ msg: "Éxito puede ver los comentarios a continuacion!!!", data: data });
                }
            })
            .catch((err) => {
                res.status(status.NO_CONTENT);
                res.json({ msg: "Error!!!" });
            });
    };

    const findByIdPromedio = (req, res) => {
        const { id } = req.params;
        const params = {
            _id: id
        };
        _fanpage.findOne(params)
            .then((data) => {
                if (data.length == 0) {
                    res.status(status.NO_CONTENT);
                    res.json({ msg: "Fanpage no encontrada intente con otro id" });
                } else {

                    res.status(status.OK);
                    res.json({ msg: "Éxito puede ver el promedio de calificacion!!!", 
                    data: (data.calificacion.reduce((previous, current) => current += previous)/data.calificacion.length)
                });
                    
                }
            })
            .catch((err) => {
                res.status(status.NO_CONTENT);
                res.json({ msg: "Error!!!" });
            });
    };

/*function promedio (arreglo){
    var suma = 0;
for(var x = 0; x < arreglo.length; x++){
  suma += arreglo[x];
}
var promedio = suma / arreglo.length;
return promedio
}*/




module.exports = (FanPage) => {
    _fanpage = FanPage;
    return ({
        createFanPage,
        Actualizar,
        findById,
        findByIdPromedio 
        
    });
}