const Category = require('../models/Category.js');
const c = console.log.bind();
async function GetCategories(req,res){
    try{
    const cats = await Category.find();
    let list = cats.map((e)=>{
        return {id: e.id, name: e.name};
    });
    res.json({categories: list});
    }catch(e){
        res.json({error: e.message});
    }

};

async function AddCategory(req, res){
    try{

        const cat = new Category({
            name: req.body.name
    });
    const rs = await cat.save();
    res.json({success: rs});
    }catch(e){
        res.json({error: e.message});
    }

}

async function GetCategory(req,res){
    try{
        let cat = await Category.findById(req.params.id);
        res.json({cat});
    }catch(e){
        res.json({error: e.message})
    }
}

async function EditCategory(req, res){
    try{
        let cat = await Category.findById(req.params.id);
        cat.name = req.body.name;
        cat.save();
        res.json({cat});
    }catch(e){
        res.json({error: e.message});
    }
}

async function DeleteCategory(req,res){
    try{
        let cat = await Category.findByIdAndDelete(req.params.id);
        res.json({"success":"Category deleted."});
    }catch(e){
        res.json({error: e.message});
    }
}

module.exports = { GetCategories,GetCategory ,  AddCategory, EditCategory, DeleteCategory }