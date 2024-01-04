const Product = require("../model/product.js");

const getallproducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (featured) {
    queryObject.featured = featured;
  }

  let apidata = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.replace(",", " ");
    apidata = apidata.sort(sortFix);
  }

  if (select) {
    let sortFix = select.split(",").join(" ");
    apidata = apidata.select(sortFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;
  let skip = (page - 1) * limit;

  apidata = apidata.skip(skip).limit(limit);

  console.log(queryObject);
  const Products = await apidata;
  console.log(Products);
  res.status(200).json({ ProductsnbHits: Product.length });
};

//
//

//
const getallproductstest = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (featured) {
    queryObject.featured = featured;
  }

  let apidata = Product.find(queryObject);

  if (select) {
    let sortFix = select.split(",").join(" ");
    apidata = apidata.select(sortFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;
  let skip = (page - 1) * limit;

  apidata = apidata.skip(skip).limit(limit);

  console.log(queryObject);
  const Products = await apidata;
  console.log(mydata);
  res.status(200).json({ Products });
};

module.exports = { getallproducts, getallproductstest };
