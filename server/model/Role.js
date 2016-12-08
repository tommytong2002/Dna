/**
 * Created by haojiachen on 2016/12/5.
 */
module.exports = (sequelize, DataTypes) => sequelize.define('role', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  remark: DataTypes.STRING
}, {
  paranoid: true,
  tableName: 'sys_role',
  classMethods: {
    associate: ({ User, Role, UserRole, Permission, RolePermission }) => {
      Role.belongsToMany(User, { through: UserRole });
      Role.belongsToMany(Permission, { through: RolePermission });
    }
  }
});

