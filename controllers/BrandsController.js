const Brand = require('../models/Brand.js')

async function GetBrands(req,res){
    try{
        const brnds = await Brand.find();
        res.json({brands: brnds.map((e)=>{
            return {id:e.id, name: e.name};    
        })})
    }catch(e){
        res.json({error: e.message});
    }
}

async function AddBrand(req,res){
    try{
        let brand = new Brand({
            name: req.body.name
        });
        let rs = await brand.save();
        res.json({success: rs});
    }catch(e){
        res.json({error: e.message});
    }
}

async function EditBrand(req, res){
    try{
        let brd = await Brand.findById(req.params.id);
        brd.name = req.body.name;
        brd.save();
        res.json({brd});
    }catch(e){
        res.json({error: e.message});
    }
}

async function DeleteBrand(req,res){
    try{
        let brd = await Brand.findByIdAndDelete(req.params.id);
        res.json({"success":"Brand deleted."});
    }catch(e){
        res.json({error: e.message});
    }
}

module.exports = {GetBrands, AddBrand, EditBrand, DeleteBrand}