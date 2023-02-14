const { DataTypes } = require("sequelize");

const db = require("../utils/database");
const Participants = require("./participants.models");

const Messages = db.define("messages", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  participantId: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
        model: Participants,
        key: 'id'
    }
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

module.exports = Messages