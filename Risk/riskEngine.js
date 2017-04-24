/**
 * 
 */
//temp values for testing
var message;

function attackConfirm(location,attackNum,defenseNum){
	var element = document.getElementById("result");
	element.innerHTML =
		"<h3>Confirm Attack Orders:</h3>"
		+"<button onclick=\"attack(\'"+location+"\',"+attackNum+","+defenseNum+")\">Confirm</button>"
		+"<button onclick=\"cancelAttack()\">Cancel</button>"
}

function attack(location,attackNum,defenseNum){
	message = "";
	if(defenseNum==0){
		offenseWins(location,attackNum,defenseNum);
		return;
	}
	else if(attackNum==0){
		defenseWins(location,attackNum,defenseNum);
		return;
	}
	
	var countD = 0;
	var countA = 0;
	//while (attackNum > 0 && defenseNum > 0){
		//roll dice
		console.log("Attacking Army Total = "+attackNum);
		console.log("Defending Army Total = "+defenseNum);
		var atkD = [0,0,0];//die roll result array for attack
		var defD = [0,0];//die roll result array for defense
		var atkDieNum = dieNumber(attackNum,3);//number of dice the attack rolls each round
		console.log("Attack Die Number = "+atkDieNum);
		var defDieNum = dieNumber(defenseNum,2);//number of dice the defense rolls each round
		console.log("Defense Die Number = "+defDieNum);
		//attack rolls
		for (i=0;i<atkDieNum;i++){
			atkD[i] = Math.floor((Math.random() * 6) + 1);
		}
		//defense rolls
		for (i=0;i<defDieNum;i++){
			defD[i] = Math.floor((Math.random() * 6) + 1);
		}
		//sort rolls
		atkD.sort(function(a, b){return b-a});
		defD.sort(function(a, b){return b-a});
		console.log(atkD);
		console.log(defD);
		//compare rolls
		if (atkD[0] > defD[0]){//if greatest attack roll is greater, defense looses 1 unit
			defenseNum--;
			countD++;
		}
		else if (atkD[0] <= defD[0]){//if greatest defense roll is greater, attack looses 1 unit
			attackNum--;
			countA++;
		}
		if (atkD[1] > 0 && defD[1] > 0){//check if there is a second die roll to compare
			if (atkD[1] > defD[1]){//if 2nd highest attack roll is greater, defense looses 1 unit
				defenseNum--;
				countD++;
			}
			else if (atkD[1] <= defD[1]){//if 2nd highest defense roll is greater, attack looses 1 unit
				attackNum--;
				countA++;
			}
		}
		//generate user messages
		if (countD>0){//defense losses each call
			message+="Defense looses "+countD+" unit"
			if(countD>1)
				message+="s";
			message+=".<br>"
		}
		if (countA>0){//attack losses each round
			message+="Attack looses "+countA+" unit"
			if(countA>1)
				message+="s";
			message+=".<br>"
		}
					
		if(defenseNum==0){
			offenseWins(location,attackNum,defenseNum);
			return;
		}
		else if(attackNum==0){
			defenseWins(location,attackNum,defenseNum);
			return;
		}
		else{
			continueAttack(location,attackNum,defenseNum);
			return;
		}
	}
	
	function continueAttack(location,attackNum,defenseNum) {//if users still have units engaged in battle check to see if attacker wishes to continue
		var element = document.getElementById("result");
		element.innerHTML = message+"<br>Attack has "+attackNum+" units left.<br>"+"Defense has "+defenseNum+" units left.<br>"
	    				+"<h3>Continue Attack on "+location+"?</h3>"
	    				+"<br><button onclick=\"attack('"+location+"','"+attackNum+"','"+defenseNum+"')\">Continue</button><button onclick=\"cancelAttack(\'"+attackNum+"\')\">Retreat</button>";
	}
	
	function offenseWins(location,attackNum,defenseNum){//result call if attacking player wins
		var element = document.getElementById("result");
		element.innerHTML = message+"<br>Attack has "+attackNum+" units left.<br>"+"Defense has "+defenseNum+" units left.<br>"
		+"<h3>Attacking player captures "+location+".</h3><br><button onclick=\"closeAttack(\'"+location+"\')\">Ok</button>";
		if(player1Turn){
			countyStats[location][0] = "uofa";
		}
		else if (!player1Turn){
			countyStats[location][0] = "asu";
		}
		countyStats[location][1] = attackNum;
	}
	
	function defenseWins(location,attackNum,defenseNum){//result call if defending player wins
		var element = document.getElementById("result");
		element.innerHTML = message+"<br>Attack has "+attackNum+" units left.<br>"+"Defense has "+defenseNum+" units left.<br>"
		+"<h3>Attacking player is defeated.</h3><br><button onclick=\"closeAttack(\'"+location+"\')\">Ok</button>";
		countyStats[location][1] = defenseNum;
	}
	
	function closeAttack(location){
		document.getElementById("attackWindow").style.display = "none";
		clearCounties();
		//endTurn();
	}
	
	function cancelAttack(attackNum){
		var element = document.getElementById("result");
		console.log(attackNum);
		element.innerHTML = "<h3>Attack aborted.</h3>"+"<button onclick=\"closeAttack(\'"+location+"\')\">Ok</button>";
		console.log(countyStats[currentCounty][1]);
		countyStats[currentCounty][1] = parseInt(countyStats[currentCounty][1],10) + parseInt(attackNum);
		console.log(countyStats[currentCounty][1]);
	}
	
	function dieNumber(total,die){//determins the number of dice to roll
		if (total > die)
			return die;
		else
			return total;
	}