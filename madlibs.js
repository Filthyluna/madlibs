function madlibs() {
  var storyChoice = prompt("Would you like Story One or Story Two?");
  switch (storyChoice) {
    case "Story One":
      var adjective = prompt("type an adjective");
      var genPlace = prompt("type a general place");
      var vName = prompt("type a vehicle name (plural)");
      var game = prompt("type the name of a game");
      var plNoun = prompt("type a plural noun");
      var ingVerb = prompt("type an 'ing' verb");
      var ingVerb2 = prompt("type another 'ing' verb");
      var foodName = prompt("type a food name (plural)");
      var sport = prompt("type the name of a sport");
      var ingVerb3 = prompt("type another 'ing' verb");
      var emotion = prompt("type an emotion");
      var num = prompt("type a number");

      var storyOne =
      "A vacation is when you take a trip to some " + adjective + " place near an amazing " + genPlace +
      ". A good vacation place is one where you can ride " + vName + " or play " + game + " or go hunting for " + plNoun +
      ". I like to spend my time " + ingVerb + " or " + ingVerb2 + ". When parents go on a vacation, they spend their time eating three " + foodName +
      " a day. Usually, fathers play " + sport + ", and mothers spend their time " + ingVerb3 + ". Adults need vacations more than kids because adults are always very " + emotion +
      " because they have to work " + num + " hours every day all year just to afford their vacations!"
      
      return document.getElementById("story1").innerHTML = storyOne;
      //return console.log(storyOne);
    case "Story Two":
      var adjective = prompt("type an adjective");
      var famousPlace = prompt("type a famous place");
      var plNoun = prompt("type a plural noun");
      var adjective2 = prompt("type another adjective");
      var food = prompt("type a food (plural)");
      var emotion = prompt("type an emotion");
      var ingVerb = prompt("type an 'ing' verb");
      var commonPlace = prompt("type a common place");
      var adjective3 = prompt("type another adjective");
      var noun = prompt("type a noun");
      var adjective4 = prompt("type another adjective");
      var noun2 = prompt("type another noun");
      var famMember = prompt("type a family member");
      var adjective5 = prompt("type another adjective");

      var storyTwo =
      "Today we took a " + adjective + " fieldtrip to " + famousPlace + ". They're famous for making " + plNoun + " and for cooking " + adjective2 + " " + food +
      ". Eating all that food made me feel " + emotion + ". Next we enjoyed the local tradition of " + ingVerb + " in the middle of the " + commonPlace +
      "! Finally, we went shopping for souvenirs. I bought a " + adjective3 + " " + noun + " for myself, and a " + adjective4 + " " + noun2 + " for my favorite " + famMember +
      ". I'll definitely never forget this " + adjective5 + " trip!"
      
      return document.getElementById("story2").innerHTML = storyTwo;
      //return console.log(storyTwo);
  }
}

madlibs()


