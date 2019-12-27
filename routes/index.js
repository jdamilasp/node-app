const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  
  const resBody  = { method : 'GET', url : '/' }
  console.log(resBody)
  return res.status(200).json(resBody)

});

router.post('/', (req, res, next) => {
  
  const resBody  = { method : 'GET', url : '/', body: req.body }
  console.log(resBody)
  return res.status(200).json(resBody)
  
});

module.exports = router;
