const pm = require("../models/plantModel");

const plantModel = new pm(); 

class plantController{
    async createPlant(req,res){
        const resp = await plantModel.createPlant()

        return res.json(resp);
    }
}

module.exports = plantController;