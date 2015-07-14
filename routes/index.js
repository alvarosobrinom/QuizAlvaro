var app = require('express');
var router = app.Router();
/* GET home page. */
router.get('/',function(req,res){
  res.render('index',{title:'Quiz'});
});

var quizController = require('../controllers/quiz_controller');

// Definición de rutas de /quizes
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',quizController.answer);

Module.exports=router;
