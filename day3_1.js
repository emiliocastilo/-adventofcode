var doc = document.getElementsByTagName("pre")[0].innerText;
var arr = doc.split("\n");
arr.splice(-1,1);
var values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (var i = 0; i<arr.length; i++) {
    var element = arr[i].split('')
    for (var j = 0; j<element.length; j++) {
        values[j] += parseInt(element[j])
    }
}

var gammaArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var epsilonArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (var i = 0; i<values.length; i++) {
	gammaArr[i] = (values[i] - (arr.length/2)) > 0 ? 1 : 0;
}
for (var i = 0; i<values.length; i++) {
	epsilonArr[i] = (values[i] - (arr.length/2)) < 0 ? 1 : 0;
}

var gamma = parseInt( gammaArr.join(''), 2);
var epsilon = parseInt( epsilonArr.join(''), 2);

console.log("Gamma: " + gamma + ", Epsilon: " + epsilon + ". Resultado: " + (gamma * epsilon));