// John Score
var firstGameScoreJohn = 89;
var secondGameScoreJohn = 120;
var thirdGameScoreJohn = 103;

var avgJohn = (firstGameScoreJohn + secondGameScoreJohn + thirdGameScoreJohn) /3;
console.log(avgJohn);

// Mike Score
var firstGameScoreMike = 116;
var secondGameScoreMike = 94;
var thirdGameScoreMike = 123; 

var avgMike = (firstGameScoreMike+secondGameScoreMike+thirdGameScoreMike)/3;
console.log(avgMike);

// Mary Score
var firstGameScoreMary = 97;
var secondGameScoreMary = 134;
var thirdGameScoreMary = 105; 

var avgMary = (firstGameScoreMary + secondGameScoreMary + thirdGameScoreMary)/3;
console.log(avgMary);

var output;

if(avgJohn > avgMike){
    output = "Average of John is greater. Average score is: " + avgJohn;
}
else if(avgJohn < avgMike){
    output = "Average of Mike is greater. Average score is: " + avgMike;
}
else{
    output = "This is a draw";
}
console.log(output);

var newOutput;

if(avgJohn > avgMike && avgJohn < avgMary){
    newOutput = "Average of John is greater. Average score is: " + avgJohn;
}
else if(avgJohn < avgMike && avgMike > avgMary){
    newOutput = "Average of Mike is greater. Average score is: " + avgMike;
}
else if(avgJohn < avgMary && avgMike < avgMary){
    newOutput = "Average of Mary is greater. Average score is: " + avgMary;
}
else{
    output = "This is a draw";
}
console.log(newOutput);