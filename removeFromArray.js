
const removeFromArray = function(userArray, ...removeString) {
    for (i = 0; i < removeString.length; i++) {
    let removePosition = userArray.indexOf(removeString[i]);
    if (removePosition == -1) {
        continue; 
    }
    userArray.splice(removePosition, 1);
    }
    return userArray;
}

module.exports = removeFromArray
