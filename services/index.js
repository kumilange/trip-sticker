const fs = require('fs');

module.exports = (config) => {

  let services = {};
  fs.readdirSync(__dirname).forEach((fileName) => {
    if(fileName.indexOf('.') === -1){
      const serviceName = fileName;
      services[fileName] = require(`${__dirname}/${fileName}`)(config[fileName]);
    }
  });

  return services;
};
