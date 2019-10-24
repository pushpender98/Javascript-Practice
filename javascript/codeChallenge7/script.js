// CODING CHALLENGE 7
/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

    var Question = function(question, option, correctAnswer){
        this.question = question;
        this.option = option;
        this.correctAnswer = correctAnswer;
        
    }

2. Create a couple of questions using the constructor

var firstQuestion = new Question('What is your name?', ['pushpender', 'jony'], 0);
var secondQuestion = new Question('What do you play?', ['basketball', 'cricket', 'volleyball'], 2);
var thirdQuestion = new Question('What is your fav sweet?', ['barfi', 'ladaoo'], 1);

3. Store them all inside an array

var questionArray = [firstQuestion, secondQuestion, thirdQuestion];

4. Select one random question and log it on the console, together with the possible answers 
    (each question should have a number) (Hint: write a method for the Question objects for this task).

    var randomQuestion = Math.round(Math.random() * (questionArray.length-1));
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
    
        for(i= 0; i<= this.option.length - 1; i++){
            console.log(i + ' : ' + this.option[i]);
        }
    }
    
    questionArray[randomQuestion].displayQuestion();


5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the
 correct answer such as you displayed it on Task 4.
 
    var userAnswer = window.prompt('Type your answer here:');

6. Check if the answer is correct and print to the console whether the answer is correct ot nor 
(Hint: write another method for this).

    Question.prototype.checkAnswer = function(){
        if(this.correctAnswer === parseInt(userAnswer)){
            console.log('Answer is correct');
        }
        else {
            console.log('Answer is wrong');
        }
    }
    questionArray[randomQuestion].checkAnswer();


7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that
all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special
     technique to do exactly that). = IIFE
     
     (function (){
     
     var Question = function(question, option, correctAnswer){
         this.question = question;
         this.option = option;
         this.correctAnswer = correctAnswer;
         
     }
     var firstQuestion = new Question('What is your name?', ['pushpender', 'jony'], 0);
     var secondQuestion = new Question('What do you play?', ['basketball', 'cricket', 'volleyball'], 2);
     var thirdQuestion = new Question('What is your fav sweet?', ['barfi', 'ladaoo'], 1);
     
     var questionArray = [firstQuestion, secondQuestion, thirdQuestion];
     
     var randomQuestion = Math.round(Math.random() * (questionArray.length-1));
     
     Question.prototype.displayQuestion = function(){
         console.log(this.question);
     
         for(i= 0; i<= this.option.length - 1; i++){
             console.log(i + ' : ' + this.option[i]);
         }
     }
     
     questionArray[randomQuestion].displayQuestion();
     
     var userAnswer = window.prompt('Type your answer here:');
     
     Question.prototype.checkAnswer = function(){
         if(this.correctAnswer === parseInt(userAnswer)){
             console.log('Answer is correct');
         }
         else {
             console.log('Answer is wrong');
         }
     }
     
     questionArray[randomQuestion].checkAnswer();
     })();
*/


/*
--- Expert level ---

8. After you display the result, display the next 
random question, so that the game never ends (Hint: 
    write a function for this and call it right after displaying the result)
   
    (function (){

    var Question = function(question, option, correctAnswer){
        this.question = question;
        this.option = option;
        this.correctAnswer = correctAnswer;
        
    }
    var firstQuestion = new Question('What is your name?', ['pushpender', 'jony'], 0);
    var secondQuestion = new Question('What do you play?', ['basketball', 'cricket', 'volleyball'], 2);
    var thirdQuestion = new Question('What is your fav sweet?', ['barfi', 'ladaoo'], 1);

    var questionArray = [firstQuestion, secondQuestion, thirdQuestion];

    init();
    function init(){
        var randomQuestion = Math.round(Math.random() * (questionArray.length-1));
        var userAnswer = window.prompt('Type your answer here:');

        Question.prototype.displayQuestion = function(){
            console.log(this.question);

            for(i= 0; i<= this.option.length - 1; i++){
                console.log(i + ' : ' + this.option[i]);
            }
        }

        Question.prototype.checkAnswer = function(){
            if(this.correctAnswer === parseInt(userAnswer)){
                console.log('Answer is correct');
            }
            else {
                console.log('Answer is wrong');
            }
            init();
        }

        questionArray[randomQuestion].displayQuestion();
        questionArray[randomQuestion].checkAnswer();
    }
    })();

    9. Be careful: after Task 8, the game literally never ends. 
    So include the option to quit the game if the user writes 'exit'
    instead of the answer. In this case, DON'T call the function from task 8.
  */
 /*

 (function (){

    var Question = function(question, option, correctAnswer){
        this.question = question;
        this.option = option;
        this.correctAnswer = correctAnswer;
        
    }
    var firstQuestion = new Question('What is your name?', ['pushpender', 'jony'], 0);
    var secondQuestion = new Question('What do you play?', ['basketball', 'cricket', 'volleyball'], 2);
    var thirdQuestion = new Question('What is your fav sweet?', ['barfi', 'ladaoo'], 1);

    Question.prototype.displayQuestion = function(){
        console.log(this.question);

        for(i= 0; i<= this.option.length - 1; i++){
            console.log(i + ' : ' + this.option[i]);
        }
    }

    Question.prototype.checkAnswer = function(userAnswer){
        if(this.correctAnswer === parseInt(userAnswer)){
            console.log('Answer is correct');
        }
        else {
            console.log('Answer is wrong');
            
        } 
    }

    var questionArray = [firstQuestion, secondQuestion, thirdQuestion];
    
    nextQuestion();
    
    function nextQuestion(){
        var randomQuestion = Math.round(Math.random() * (questionArray.length-1));

        questionArray[randomQuestion].displayQuestion();

        var userAnswer = window.prompt('Type your answer here:');
        
        if(userAnswer != 'exit'){
            questionArray[randomQuestion].checkAnswer(userAnswer);
            nextQuestion();
        }else{
            console.log('You have exited the Quiz');
        }
    }
    })();
    */
/*
10. Track the user's score to make the game more fun! So each time an 
answer is correct, add 1 point to the score (Hint: I'm going to use the power
 of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
 */

 (function (){

    var Question = function(question, option, correctAnswer){
        this.question = question;
        this.option = option;
        this.correctAnswer = correctAnswer;
        
    }
    var firstQuestion = new Question('What is your name?', ['pushpender', 'jony'], 0);
    var secondQuestion = new Question('What do you play?', ['basketball', 'cricket', 'volleyball'], 2);
    var thirdQuestion = new Question('What is your fav sweet?', ['barfi', 'ladaoo'], 1);

    Question.prototype.displayQuestion = function(){
        console.log(this.question);

        for(i= 0; i<= this.option.length - 1; i++){
            console.log(i + ' : ' + this.option[i]);
        }
    }

    Question.prototype.checkAnswer = function(userAnswer, score){
        var sc;

        if(this.correctAnswer === parseInt(userAnswer)){
            console.log('Answer is correct');
           sc= score(true);
        }
        else {
            console.log('Answer is wrong');
            sc = score(false);
        } 
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(Score){
        console.log(Score);
    }

    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var questionArray = [firstQuestion, secondQuestion, thirdQuestion];
    var keepScore = score();
    nextQuestion();
    

    function nextQuestion(){
        var randomQuestion = Math.round(Math.random() * (questionArray.length-1));

        questionArray[randomQuestion].displayQuestion();

        var userAnswer = window.prompt('Type your answer here:');
        
        if(userAnswer != 'exit'){
            questionArray[randomQuestion].checkAnswer(userAnswer, keepScore);
            nextQuestion();
        }else{
            console.log('You have exited the Quiz');
        }
    }
    })();

/*
11. Display the score in the console. Use yet another method for this.
*/

