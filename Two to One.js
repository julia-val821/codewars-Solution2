https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

    function longest(s1, s2) {
        let arr = (s1 + s2).split('');
        return arr.filter((elm, i) => i === arr.indexOf(elm)).sort().join('');
    }