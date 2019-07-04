import express from 'express';
import LogModel from 'models/log'

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/criar', (req, res) => {
  let log = new LogModel()
  log.name = req.query.name
  log.type = req.query.type
  let promise = log.save();
  
  promise.then(function(doc){
    res.status(204).json({});  
  }, function(err){
    res.status(401).json({error: err});  
  })
})

router.get('/listar', (req, res) => {
  LogModel.find({}, function(err, docs) {
    if (!err){ 
        console.log(docs);
        res.json(docs);
        process.exit();
    } else {throw err;}
});
})

export default router;
