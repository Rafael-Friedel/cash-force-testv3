/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @returns
 */
const CNPJS = (sequelize, DataTypes) => {
  const CNPJS = sequelize.define(
    'CNPJ',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      companyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      tableName: 'cnpjs',
      underscored: false,
    }
  );
  return CNPJS;
};

module.exports = CNPJS;
