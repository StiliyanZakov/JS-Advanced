function solve() {
    // Get input values from the HTML form
    let text = document.getElementById('text').value;
    let namingConvention = document.getElementById('naming-convention').value;
    
    // Convert the text to lowercase and split by spaces
    let words = text.toLowerCase().split(' ');
    
    let result = '';
    
    if (namingConvention === 'Camel Case') {
        // For Camel Case, lowercase first word, capitalize subsequent words
        result = words[0];
        for (let i = 1; i < words.length; i++) {
            result += words[i][0].toUpperCase() + words[i].slice(1);
        }
    } else if (namingConvention === 'Pascal Case') {
        // For Pascal Case, capitalize all words
        for (let word of words) {
            result += word[0].toUpperCase() + word.slice(1);
        }
    } else {
        // If the naming convention is not valid, return "Error!"
        result = 'Error!';
    }

    // Set the result as the content of the <span> element
    document.getElementById('result').textContent = result;
}