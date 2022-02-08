const input = [
    { name: "Mr. Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2},
    { name: "Mr. Raju", birthYear: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority: 1},
];

// Card distribution function
const cardDistribution = (data = []) => {
    const results = data.map((item, idx) => {
        let cardNumber = item.district.substring(0,2).toUpperCase()
            + item.currentYear.toString().substring(2)
            + item.postNo.toString().substring(0,2) 
            + item.birthYear.toString()
            + Array(Math.max(6 - String((idx+1).toString()).length + 1, 0)).join(0)
            + (idx+1).toString(); 
        
        const gift = Number(cardNumber.slice(-1)) % 2 ? "W" : "R";
        const priority = item.priority;
        return {cardNumber, gift, priority};
    }).sort((a, b) => a.priority - b.priority);
    // console.log({results});
    return results;
}

const output = cardDistribution(input); // Call function for distribution of cards
console.log(output);