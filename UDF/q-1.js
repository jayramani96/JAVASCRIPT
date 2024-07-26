
    function countVowels(str) {
        let count = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i].toLowerCase())) {
                count++;
            }
        }
        return count;
    }
    document.getElementById('string').addEventListener('input', function() {
        let str = document.getElementById('string').value;
        document.getElementById('ans').textContent = countVowels(str);
    });
