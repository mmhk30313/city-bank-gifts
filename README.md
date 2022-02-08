# Task Name: 
##  City Bank Gifts

## Task:
###  ‘City Bank’ is planning gifts for the newly registered credit user on this International  `Mother Language Day` from 21 February to 28 February. 
They need to distribute the card to  their user. You need to help to generate their card number and gift. 

#### You will have to take each person's info to register them. For creating their card number:  
1.take first 2 characters from the district name and make it capital letter. Example-from  Dhaka , take DH,  
2. From current year pick last two number 
3. Concat first two numbers of the user postal number.  
4. Add user birthdate 4 digit year 
5. After that generate serial number with padding 0 in left from each user 6. Total character length will be 16  
Create a function named ‘cardDistribution()’ which will take an array of objects. Each  object will have each person's information. (You must use exact function name, or your  test case may fail) 
While distributing sort data alphabetically with fist characters. Sort them with priority  numbers. If the user has priority number 1 will be given first.  
If the last number of the card is even, give the user Red Rose , if odd give white Rose.  

R = red rose 
W = white rose 

### input:
const inputData = [
    { name: "Mr. Rashed", birthYear: 1999, currentYear: 2022, district: "Dhaka", postNo: 1200, priority: 2},
    { name: "Mr. Raju", birthYear: 1995, currentYear: 2022, district: "Rajshahi", postNo: 1211, priority: 1},
];

### output:
[
  { cardNumber: 'RA22121995000002', gift: 'R', priority: 1 },
  { cardNumber: 'DH22121999000001', gift: 'W', priority: 2 }
]


##  Used Language:
  ### Javascript
