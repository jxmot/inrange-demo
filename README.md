# inrange-demo

Demonstrates the use of the `ip-range-check` and `ip-subnet-calculator` Node.js packages for checking an IP address against a CIDR range. 

## Purpose

This was initially created to demo and test code that will be implemented in other projects. 

## Details

**Code:**

```
var IpSubnetCalculator = require( 'ip-subnet-calculator' );
var ipRangeCheck = require('ip-range-check');

// convert the range to 1 or more CIDR notations...
var temp = IpSubnetCalculator.calculate( '192.168.0.100', '192.168.0.109' );
//console.log(temp);

// get the info we need to build an array of CIDRs
var cidrs = [];
temp.forEach((cidr) => {
    // create the CIDR string
    var tmp = cidr.ipLowStr + '/' + cidr.prefixSize;
    // save it
    cidrs.push(tmp);
});

// our array of CIDRs
console.log(cidrs);

// test an IP to see if it is in the CIDR range
console.log('?? - '+ipRangeCheck('192.168.0.105', cidrs));
console.log('?? - '+ipRangeCheck('192.168.0.120', cidrs));
```
## Uses

* Security - test if visiting IP addresses are white or black listed.
* Routing - use IP address to route to a destination specific resource

---
<img src="http://webexperiment.info/extcounter/mdcount.php?id=inrange-demo">

 