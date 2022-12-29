import bookModel from "../models/bookModel.js";
import { Op } from "sequelize";
import urlConstants from "../constants/urlConstants.js"

export default class BookController {

    //CRUD OPERATIONS//

  async addBook(req, res,imgName) {
    const data = await bookModel.create({ ...req.body ,image:imgName});
    if (data) {
      res.json(data);
    } else {
      res.json("Error while Adding some book ya");
    }
  }

  async getBooks(req, res) {
    let {limit} = req.query;
    if (!limit) limit = 20;
    console.log(limit)
    try {
        const data = await bookModel.findAll({
            limit: parseInt(limit),
            raw:true
            
        });
        console.log(data);
        for (let d of data) {
          d.image = urlConstants.IMG_PATH_URL + d.image;
          console.log(d.image);
        }
        res.json(data);
    } catch (error) {
        console.log(error)
    }
    
  }

  async deleteBook(req, res) {
    const { id } = req.params;
    if (id) {
      const data = await bookModel.destroy({
        where: {
          id,
        },
      });

      if (data === 1) {
        res.json({
          success: true,
          message: `Data with id ${id} was deleted Successully`,
        });
      } else {
        res.json({
          success: false,
          message: `Data with id ${id} was not delted`,
        });
      }
    }
  }

  async updateBook(req, res) {
    const { id } = req.params;
    if (id) {
      const data = await bookModel.update(req.body, {
        where: {
          id: id,
        },
      });
      console.log(id, data);
      if (data[0]) {
        res.json({
          success: true,
          message: `Data with id ${id} was updated Successully`,
        });
      } else {
        res.json({
          success: false,
          message: `Data with id ${id} was not Updated`,
        });
      }
    }
  }

  //search
async searchBook(req,res){
    const {q} = req.query;
    if(q){
       const data = await bookModel.findAll({
            where:{
                [Op.or]:{
                   name: {
                    [Op.like]:`%${q}%`
                   },
                   author: {
                    [Op.like]:`%${q}%`
                   }
                }
            }
        })
        if (data){
          for (let d of data) {
            d.image = urlConstants.IMG_PATH_URL + d.image;
            console.log(d.image);
          }
            res.json(data);
        }else{
            res.json("No data found");
        }
    }else{
        res.json({success:false,msg:"Empty Search....."})
    }
}

}
