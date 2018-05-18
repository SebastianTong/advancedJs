(function() {

    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
    
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    };
    
    Question.prototype.checkAnswer = function(ans){
        if(ans === this.correct){
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer! Try again.');
        }
    }
    
    
    var q1 = new Question('What is the name of the current student?', ['Jane', 'Brad', 'Seba'], 2);
    var q2 = new Question('How old is the current student?', [23, 35, 16], 0);
    var q3 = new Question('What is the current stundent\'s favourite food?', ['bbq', 'tacos', 'sushi'], 2);
    
    var questions = [q1, q2, q3];

    function score (){
        var sc = 0;
        return function(correct){
            if (correct){
                sc++;
            }
            return score;
        }
    }
    
var keepScore = score();

    function nextQuestion(){
        var random = Math.floor(Math.random() * questions.length);
    
         questions[random].displayQuestion();
    
        var answer = prompt('Please select the correct answer.');
    
        if(answer !== 'exit') {
            questions[random].checkAnswer(parseInt(answer));
            
            nextQuestion();
        }
    }
    
    nextQuestion();

})()


