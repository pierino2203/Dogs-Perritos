const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    height_min: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    height_max:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    weight_min: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    weight_max:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    life_time_min:  {
      type: DataTypes.STRING,
    },
    
    life_time_max:  {
      type: DataTypes.STRING,
    },
    
    createInBd:  {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    
    imgRefecence:  {
      type: DataTypes.STRING,
      allowNull: true,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true,
        default: "https://support.eset.com/storage/ESET/Platform/Publishing/images/Authoring/ImageFiles/ESET/IMG_ESN/SOLN3487/v8/eset-01.png"
    }
  });
};
