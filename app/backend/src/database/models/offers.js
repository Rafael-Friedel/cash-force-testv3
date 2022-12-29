const Offers = (sequelize, DataTypes) => {
  const Offers = sequelize.define(
    'offer',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      tax: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tariff: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adValorem: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      float: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iof: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expiresIn: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      paymentStatusSponsor: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      paymentStatusProvider: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
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
      sponsorId: {
        type: DataTypes.INTEGER(11),
        references: {
          model: 'sponsors',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    },
    {
      tableName: 'offers',
      underscored: false,
    }
  );
  return Offers;
};

module.exports = Offers;
