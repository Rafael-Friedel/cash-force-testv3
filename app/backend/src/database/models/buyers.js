const Buyers = (sequelize, DataTypes) => {
  const buyers = sequelize.define(
    'buyer',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tradingName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cashforceTax: {
        type: DataTypes.STRING,
      },
      responsibleName: {
        type: DataTypes.STRING,
      },
      responsibleEmail: {
        type: DataTypes.STRING,
      },
      responsiblePosition: {
        type: DataTypes.STRING,
      },
      responsiblePhone: {
        type: DataTypes.STRING,
      },
      responsibleMobile: {
        type: DataTypes.STRING,
      },
      website: {
        type: DataTypes.STRING,
      },
      postalCode: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.STRING,
      },
      complement: {
        type: DataTypes.STRING,
      },
      neighborhood: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      situation: {
        type: DataTypes.STRING,
      },
      situationDate: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      cnpjId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'cnpjs',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      confirm: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      email: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'buyers',
      underscored: false,
    }
  );

  return buyers;
};

module.exports = Buyers;
