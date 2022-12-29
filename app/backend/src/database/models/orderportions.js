const Orderportions = (sequelize, DataTypes) => {
  const Orderportions = sequelize.define(
    'orderportions',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nDup: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dVenc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cDup: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      availableToMarket: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'orders',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    },
    {
      tableName: 'orderportions',
      underscored: false,
    }
  );
  return Orderportions;
};

module.exports = Orderportions;
