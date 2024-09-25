 function extractText() {
            // Get all list items
            const items = document.querySelectorAll('ul li');
            // Get the textarea
            const textarea = document.getElementById('result');
            // Iterate over list items and collect their text
            let text = '';
            items.forEach((item) => {
                text += item.textContent + '\n';
            });
            // Set the collected text to the textarea
            textarea.value = text;
        }