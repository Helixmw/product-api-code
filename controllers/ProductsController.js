const Product = require('../models/Product.js');
const Category = require('../models/Category.js');

async function GetProducts(req,res){
    try{
        const prod = await Product.find();
        let prods = prod.map((e) => {        
            let prd = {id: e.id, name: e.name, description: e.description, price: e.price};
            return prd;
        });
        res.json({products: prods})
    }catch(e){
        res.json({error: e.message});
    }
}

async function ProductsByCategory(req,res){
    try{
        let cat = await Category.findById(req.params.id);

        let ct = {
            id: cat.id,
            name: cat.name
        };
        let prods = await Product.find({category: ct.id}).exec();
        let list = prods.map((e) => {
            let _price = parseFloat(e.price).toFixed(2);
            let prd = {name: e.name, description: e.description, price: _price};
            return prd;
        })
        res.json({products: list});
    }catch(e){  
        res.json({error: e.message});
    }
}

async function AddProduct(req,res){
    try{
        const prod = new Product({
            name: req.body.name,
            category: req.body.category,
            quantity:req.body.quantity,
            price:req.body.price,
            description:req.body.description
        });
        const rs = await prod.save();
        res.json({success: rs});
    }catch(e){
        res.json({error: e.message})
    }
}

async function GetProduct(req,res){
    try{
        const prod = await Product.findById(req.params.id);
        const rs = {
            id: prod.id,
            name:prod.name,
            description:prod.description,
            price:prod.price
        };
        res.json({product: rs});
    }catch(e){
        res.json({error: e.message})
    }
}

async function EditProduct(req, res){
    try{
        let prod = await Product.findById(req.params.id);
        prod.name = req.body.name;
        prod.name = req.body.price;
        prod.save();
        res.json({prod});
    }catch(e){
        res.json({error: e.message});
    }
}

async function DeleteProduct(req,res){
    try{
        let brd = await Product.findByIdAndDelete(req.params.id);
        res.json({"success":"Product deleted."});
    }catch(e){
        res.json({error: e.message});
    }
}

module.exports = {GetProducts, GetProduct, AddProduct, ProductsByCategory, EditProduct, DeleteProduct}