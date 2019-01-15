/****************************************************************
*****************************************************************
   							TRIES

Ordered tree structure, which takes advantage of the keys that it 
stores – usually strings. A node’s position in the tree defines 
the key with which that node is associated, which makes tries 
different in comparison to binary search trees

Usually, all the descendants of a node have a common prefix of the 
string associated with that node and the root is associated with 
the empty string. 
						
*****************************************************************/
/*

A popular application of this data structure is the look up in a 
dictionary of words (such as a simple auto-complete functionality 
in a text box).

Notes:
	- In a trie, every node (except the root node) stores one character or a digit.

*/

public class TrieNode {
	private HashMap<Character, TrieNode> children;
	private boolean isWord;			//we want to know for each node if it represent a complete word
	private String content;
}

public class Trie {
	private TrieNode root;

	//INSERT: O(n)
	/*
	 * ALGO:
	 *	1. Set a current node as a root node
	 *	2. Set the current letter as the first letter of the word
	 *	3. If the current node has already an existing reference to the current letter, then set current node to that referenced node. 
	 *	   Otherwise, create a new node, set the letter equal to the current letter, and also initialize current node to this new node
	 * 	4. Repeat step 3 until the key is traversed
	 */
	public void insert(String word) {
		TrieNode current = root;

		for(int i=0; i<word.length(); i++) {
			current = current.getChildren().computeIfAbsent(word.charAt(i), c -> new TrieNode());
		}
		current.setEndofWord(true);
	}


	//FIND: O(n)
	/*
	 * 1. Get children of the root
	 * 2. Iterate through each character of the String
	 * 3. Check whether that character is already a part of a sub-trie. If it isn’t present anywhere in the trie, then stop the search and return false
	 * 4. Repeat the second and the third step until there isn’t any character left in the String. If the end of the String is reached, return true
	 */
	public boolean find(String word) {
		TrieNode current = root;
		for(int i=0; i<word.length(); i++) {
			char ch = word.charAt(i);
			TrieNode node = current.getChildren().get(ch);
			if(node == null) {
				return false;
			}
			current = node;
		}
		return current.isEndOfWord();
	}


	//DELETE: O(n)
	/*
	 * 1. Check whether this element is already part of the trie
	 * 2. If the element is found, then remove it from the trie
	 */
	public void delete(String word) {
		delete(root, word, 0);
	}

	private boolean delete(TrieNode current, String word, int index) {
		if (index == word.length()) {
	        if (!current.isEndOfWord()) {
	            return false;
	        }
	        current.setEndOfWord(false);
	        return current.getChildren().isEmpty();
	    }

		char ch = word.charAt(index);
		TrieNode node = current.getChildren().get(ch);
		if(node == null) {
			return false;
		}

		boolean shouldDeleteCurrentNode = delete(node, word, index+1) && !node.isEndOfWord();

		if(shouldDeleteCurrentNode) {
			current.getChildren().remove(ch);
			return current.getChildren().isEmpty();
		}		
		return false;
	}

}