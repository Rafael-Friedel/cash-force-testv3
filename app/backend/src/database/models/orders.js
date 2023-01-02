const Buyers = require('./buyers');
const Providers = require('./providers');
const Users = require('./users');
const CNPJS = require('./cnpjs');

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
      emissionDate: DataTypes.STRING,
      pdfFile: DataTypes.STRING,
      emitedTo: DataTypes.STRING,
      nNf: DataTypes.STRING,
      CTE: DataTypes.STRING,
      value: DataTypes.STRING,
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

  Orders.associate = (models) => {
    Orders.belongsTo(models.provider, {
      constraint: true,
      foreignKey: 'providerId',
    });

    Orders.belongsTo(models.buyer, {
      constraint: true,
      foreignKey: 'buyerId',
    });

    Orders.belongsTo(models.user, {
      constraint: true,
      foreignKey: 'userId',
    });

    Orders.belongsTo(models.CNPJ, {
      constraint: true,
      foreignKey: 'cnpjId',
    });
  };

  Providers.associate = (models) => {
    Providers.hasMany(models.orders, {
      foreignKey: 'providerId',
    });
  };

  Users.associate = (models) => {
    Users.hasMany(models.orders, {
      foreignKey: 'userId',
    });
  };

  CNPJS.associate = (models) => {
    CNPJS.hasMany(models.orders, {
      foreignKey: 'cnpjId',
    });
  };

  Buyers.associate = (models) => {
    Buyers.hasMany(models.orders, {
      foreignKey: 'buyerId',
    });
  };

  return Orders;
};

module.exports = Orders;
