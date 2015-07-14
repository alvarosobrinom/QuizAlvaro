var express = requiere('express');
var router = express.Router();
router.get('/',function(req,res){
  res.render('index',{title:'Quiz'});
});

var quizController = require('../controllers/quiz_controller');

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer',quizController.answer);

module.exports=router;
