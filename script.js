let soccerTeams = ["Ajax","Milan","Liverpool","Barcelona","Juventus"]
console.log(soccerTeams)

soccerTeams.splice(0,0, "Wolfsburg")
console.log(soccerTeams)

soccerTeams.splice(5,1)
console.log(soccerTeams)

soccerTeams.splice(5,2, "Chelsea","Porto")
console.log(soccerTeams)

soccerTeams.splice(0,1)
console.log(soccerTeams)

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort(function(a,b){
    return(a-b)
})
console.log(numbers)