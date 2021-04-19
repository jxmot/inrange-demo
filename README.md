# inrange-demo

Demonstrates the use of the `ip-range-check` and `ip-subnet-calculator` Node.js packages for checking an IP address against a CIDR range. 

## Purpose

This was initially created to demo and test code that will be implemented in other projects. 

## Details

**Code:**

```
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
```

**Output:**

```
[
  {
    ipLow: 3232235620,
    ipLowStr: '192.168.0.100',
    ipHigh: 3232235623,
    ipHighStr: '192.168.0.103',
    prefixMask: 4294967292,
    prefixMaskStr: '255.255.255.252',
    prefixSize: 30,
    invertedMask: 3,
    invertedMaskStr: '0.0.0.3',
    invertedSize: 2
  },
  {
    ipLow: 3232235624,
    ipLowStr: '192.168.0.104',
    ipHigh: 3232235627,
    ipHighStr: '192.168.0.107',
    prefixMask: 4294967292,
    prefixMaskStr: '255.255.255.252',
    prefixSize: 30,
    invertedMask: 3,
    invertedMaskStr: '0.0.0.3',
    invertedSize: 2
  },
  {
    ipLow: 3232235628,
    ipLowStr: '192.168.0.108',
    ipHigh: 3232235629,
    ipHighStr: '192.168.0.109',
    prefixMask: 4294967294,
    prefixMaskStr: '255.255.255.254',
    prefixSize: 31,
    invertedMask: 1,
    invertedMaskStr: '0.0.0.1',
    invertedSize: 1
  }
]
[ '192.168.0.100/30', '192.168.0.104/30', '192.168.0.108/31' ]
192.168.0.105 in range? - Yes
192.168.0.120 0n range? - No
```

## Uses

* Security - test if visiting IP addresses are white or black listed based on IP range.
* Routing - use IP address to route to a destination specific resource based on IP range.

---
<img src="http://webexperiment.info/extcounter/mdcount.php?id=inrange-demo">

 