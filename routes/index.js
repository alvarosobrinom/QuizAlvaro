var express = requiere('express');
var router = express.Router();
/* GET home page. */
router.get('/',function(req,res){
  res.render('index',{title:'Quiz'});
});

var quizController = require('../controllers/quiz_controller');

// Definición de rutas de /quizes
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',quizController.answer);

module.exports=router;
