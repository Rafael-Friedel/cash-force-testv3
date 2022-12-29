const Orders = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    'order',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      orderNfId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      orderNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      orderPath: {
        type: DataTypes.STRING,
        unique: true,
      },
      orderFileName: {
        type: DataTypes.STRING,
        unique: true,
      },
      orderOriginalName: {
        type: DataTypes.STRING,
        unique: true,
      },
      emissionDate: {
        type: DataTypes.STRING,
      },
      pdfFile: {
        type: DataTypes.STRING,
      },
      emitedTo: {
        type: DataTypes.STRING,
      },
      nNf: {
        type: DataTypes.STRING,
      },
      CTE: {
        type: DataTypes.STRING,
      },
      value: {
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
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      buyerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'buyers',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      providerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'providers',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      orderStatusBuyer: {
        type: DataTypes.STRING,
        defaultValue: '0',
      },
      orderStatusProvider: {
        type: DataTypes.STRING,
        defaultValue: '0',
      },
      deliveryReceipt: DataTypes.STRING,
      cargoPackingList: DataTypes.STRING,
      deliveryCtrc: DataTypes.STRING,
    },
    {
      tableName: 'orders',
      underscored: false,
    }
  );

  // Orders.associate = (models) => {
  //   Orders.belongsTo(models.provider, {
  //     foreignKey: 'providerId',
  //     as: 'provider',
  //   });

  //   Orders.belongsTo(models.buyer, {
  //     foreignKey: 'buyerId',
  //     as: 'buyer',
  //   });

  //   Orders.belongsTo(models.user, {
  //     foreignKey: 'userId',
  //     as: 'user',
  //   });

  //   Orders.belongsTo(models.cnpj, {
  //     foreignKey: 'cnpjId',
  //     as: 'cnpj',
  //   });
  // };

  return Orders;
};

module.exports = Orders;
