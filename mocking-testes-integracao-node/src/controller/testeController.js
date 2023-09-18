module.exports = {
  testeController: (app) => {
    const exeTesteModel = require('../model/TestModel');
    var resulmostrar = exeTesteModel();

    app.get("/", function(req, res){
	  res.send('Seja bem vindo ao App');
    });
    
    app.get("/teste", function (req, res) {
      res.send('' + resulmostrar);
    });

  }
};
