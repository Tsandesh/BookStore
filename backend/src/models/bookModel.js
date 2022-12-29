import { DataTypes } from "sequelize";
import connection from "./index.js";

export default connection.define(
  "books",
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
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM,
      values: [
        "General",
        "Arts & Design",
        "Litreature & Novel",
        "Buissness & Finanace",
        "Travel",
      ],
      default: "General",
      allowNull:false
    },
    description: {
      type: DataTypes.TEXT,
    },
    image:{
      type:DataTypes.STRING
    }
  },
  {
    timestamps: false,
  }
);
