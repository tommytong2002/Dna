/**
 * Created by haojiachen on 2016/12/9.
 */
module.exports = (sequelize, DataTypes) => sequelize.define('roleOperation', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true,
  },
}, {
  paranoid: true,
  tableName: 'sys_role_operation'
});
