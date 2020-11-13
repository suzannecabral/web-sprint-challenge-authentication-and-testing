const router = require('express').Router();

router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  // implement login
  res.status(200).json({message:'Login here'});
});

router.get('/', (req,res)=>{
  res.status(200).json({message:'Welcome, please log in'});
});

module.exports = router;
