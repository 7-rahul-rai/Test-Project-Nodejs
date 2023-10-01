const { sequelize } = require("sequelize");
const db = require("../Models/index");
const inventry = db.inventry;

const home = (req, res) => {
  res.render("index.ejs");
};

const postItem = async (req, res) => {
  var { itemName,description,price,quantity } = req.body;
  var items = await inventry.create({
    itemName,
    description,
    price,
    quantity
  });
  res.redirect("/show");
};

const showItem = async (req, res) => {
  const items = await inventry.findAll();
  res.render("show.ejs", { items });
};

// const deleteItem = async (req, res) => {
//   var id = req.params.id;
//   await expenses.destroy({
//     where: {
//       id: id,
//     },
//   });
//   res.redirect("/show");
// };

const editItem = async (req, res) => {
  var id = req.params.id;
  var item = await inventry.findOne({
    where: {
      id: id,
    },
  });
  res.render("edit.ejs", { item });
};

const updateItem = async (req, res) => {
  var id = req.params.id;
  var { itemName,description,price,quantity } = req.body;
  await inventry.update({  
      itemName,
      description,
      price,
      quantity
    },
    {
    where:{id:id}
    })
    res.redirect("/show");
  };

  const update1 = async(req,res)=>{
    var id=req.params.id; 
  var data = await inventry.findOne({
    attributes: ['quantity'], // Replace 'fieldName' with the name of the field you want to retrieve
    where: { id:id },
  })
    if(data && data.quantity){
      await inventry.update({
        quantity : data.quantity-1
      },{
        where:{id:id}
    })
    }
    res.redirect('/show')
  }

  const update2 = async(req,res)=>{
    var id=req.params.id; 
  var data = await inventry.findOne({
    attributes: ['quantity'], // Replace 'fieldName' with the name of the field you want to retrieve
    where: { id:id },
  })
    if(data && data.quantity){
      await inventry.update({
        quantity : data.quantity-2
      },{
        where:{id:id}
    })
    }
    res.redirect('/show')
  }

  const update3 = async(req,res)=>{
    var id=req.params.id; 
  var data = await inventry.findOne({
    attributes: ['quantity'], // Replace 'fieldName' with the name of the field you want to retrieve
    where: { id:id },
  })
    if(data && data.quantity){
      await inventry.update({
        quantity : data.quantity-3
      },{
        where:{id:id}
    })
    }
    res.redirect('/show')
  }

module.exports = {
  home,
  postItem,
  showItem,
  updateItem,
  editItem,
  update1,
  update2,
  update3
  // deleteItem
};
