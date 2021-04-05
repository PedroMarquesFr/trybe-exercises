const plantSchema = require("./schema/plantSchema");

class plantModel {
  async createPlant() {
    const resp = await plantSchema.collection.insertOne({
      breed: "sdfsdf",
      needsSun: false,
      origin: "brazil",
      size: 120,
      specialCare: { waterFrequency: 2 },
      lastEdited: new Date(),
    });

    return resp;
  }
}

module.exports = plantModel;
