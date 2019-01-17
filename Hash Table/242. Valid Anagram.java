/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/
class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;
        
        char[] s2 = s.toCharArray();
        char[] t2 = t.toCharArray();
        
        Arrays.sort(s2);
        Arrays.sort(t2);
        
        return Arrays.equals(s2,t2);
    }
}

/*************************************************************************/

class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;
        Map<Character, Integer> mapS = new HashMap<>();
        Map<Character, Integer> mapT = new HashMap<>();
        
        for(int i=0; i<s.length(); i++) {
            char c = s.charAt(i);
            mapS.put(c, mapS.getOrDefault(c,0)+1);
            
            char c2 = t.charAt(i);
            mapT.put(c2, mapT.getOrDefault(c2,0)+1);
        }
        
        for(int i=0; i<s.length(); i++) {
            if(mapS.get(s.charAt(i)) != mapT.get(s.charAt(i))) {
                return false;
            }   
        }
        return true;
    }
}