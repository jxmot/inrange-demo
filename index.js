/*
    Demonstration Code - Demonstrates the use of ip-range-check 
    and ip-subnet-calculator for checking an IP address against 
    a CIDR range. 

    This was initially created to demo and test code that will 
    be implemented in other projects. 

*/
const IpSubnetCalculator = require( 'ip-subnet-calculator' );
const ipRangeCheck = require('ip-range-check');

// convert the range to 1 or more CIDR notations...
var temp = IpSubnetCalculator.calculate('192.168.0.100', '192.168.0.109');
console.log(temp);

// get the info we need to build an array of CIDRs
var cidrs = [];
temp.forEach((cidr) => {
    // create the CIDR string
    let tmp = cidr.ipLowStr + '/' + cidr.prefixSize;
    // save it
    cidrs.push(tmp);
});

// our array of CIDRs
console.log(cidrs);

// test an IP to see if it is in the CIDR range
console.log('192.168.0.105 in range? - '+(ipRangeCheck('192.168.0.105', cidrs) === true ? 'Yes' : 'No'));
console.log('192.168.0.120 0n range? - '+(ipRangeCheck('192.168.0.120', cidrs) === true ? 'Yes' : 'No'));

