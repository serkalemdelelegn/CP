/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        // Create a dummy node to serve as the head of the result list
        ListNode* dummyHead = new ListNode(0);
        ListNode* current = dummyHead; // Pointer to build the result list
        int carry = 0; // To store the carry over
        
        // Loop until both l1 and l2 are exhausted, and no carry remains
        while (l1 != nullptr || l2 != nullptr || carry != 0) {
            // Get the current values from l1 and l2, or 0 if one list is shorter
            int x = (l1 != nullptr) ? l1->val : 0;
            int y = (l2 != nullptr) ? l2->val : 0;
            
            // Calculate the sum of l1's digit, l2's digit, and the carry
            int sum = x + y + carry;
            
            // Update the carry for the next iteration (sum / 10 gives carry)
            carry = sum / 10;
            
            // The new digit is sum % 10
            current->next = new ListNode(sum % 10);
            
            // Move to the next node in the result list
            current = current->next;
            
            // Move to the next nodes in l1 and l2 if they exist
            if (l1 != nullptr) l1 = l1->next;
            if (l2 != nullptr) l2 = l2->next;
        }
        
        // Return the next node of dummyHead (since dummyHead is a placeholder)
        return dummyHead->next;
    }
};
