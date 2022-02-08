const inputData = [
    {
        name: "Mr. Rashed",
        birthYear: 1999,
        currentYear: 2022,
        district: "Dhaka",
        postNo: 1200,
        priority: 2
    },
    {
        name: "Mr. Raju",
        birthYear: 1995,
        currentYear: 2022,
        district: "Rajshahi",
        postNo: 1211,
        priority: 1
    },
];

const cardDistribution = (data = []) => {
    const results = data.map((item, idx) => {
        let cardNumber = item.district.substring(0,2).toUpperCase()
            + item.currentYear.toString().substring(2)
            + item.postNo.toString().substring(0,2) 
            + item.birthYear.toString()
            + Array(Math.max(6 - String((idx+1).toString()).length + 1, 0)).join(0)
            + (idx+1).toString(); 
        // let pd_zero_with_number = Array(Math.max(6 - String((idx+1).toString()).length + 1, 0)).join(0)                           
        // let pd_zero_with_number = (idx+1).toString();
        // let zeros_length = 6 - pd_zero_with_number.length;
        // let zeros = ''
        // while(zeros_length){
        //     zeros += "0";
        //     zeros_length--;
        // }
        // cardNumber += zeros + pd_zero_with_number;
        // cardNumber += pd_zero_with_number;
        const gift = Number(cardNumber.slice(-1)) % 2 ? "W" : "R";
        const priority = item.priority;
        return {cardNumber, gift, priority};
    }).sort((a, b) => a.priority - b.priority);
    // console.log({results});
    return results;
}
const output_data = cardDistribution(inputData);
console.log(output_data);