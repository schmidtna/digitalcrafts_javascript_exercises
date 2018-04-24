var phonebookDict = {
    Alice: '703-493-1834',
    Bob: '857-384-1234',
    Elizabeth: '484-584-2923'
  }

// console.log(phonebookDict.Elizabeth);

// phonebookDict.Kareem = "938-489-1234";

// console.log(phonebookDict.Kareem);

// delete phonebookDict.Alice;
// phonebookDict.Bob = "123-456-7890";

// var personName = "Elizabeth";
// console.log(phonebookDict[personName]);

phoneEntries = [];
var i;
for (i in phonebookDict) {
    phoneEntries.push(i + " : " + phonebookDict[i]);
};

console.log(phoneEntries);
