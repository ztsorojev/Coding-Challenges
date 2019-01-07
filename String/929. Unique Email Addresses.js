/*
Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

Example 1:

Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

/**
 * @param {string[]} emails
 * @return {number}

    1. Create hash table to keep track of unique emails
    2. Loop through input
    3. For each element, split with '@'
    4. Take first element. Split with '+'. Take first element.
    5. Split with '.' and then join. 
    6. We will now have the local name.
    7. If not already in hash table, put it there and increment counter.

 */
var numUniqueEmails = function(emails) {
    let hash = {};
    let count = 0;
    for(let x of emails) {
        let parts = x.split('@');
        let local_name = parts[0].split('+')[0].split('.').join('');
        //NB: I could also use replace() to remove all the '.'
        let email = local_name + '@' + parts[1];
        if(!hash[email]) {
            hash[email] = 1;
            count++;
        }
    }
    return count;
};