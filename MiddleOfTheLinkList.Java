class Solution {
    public ListNode middleNode(ListNode head) {
        
         //
        // TWO POINTERS (first and second one set to head)
        ListNode slow = head;
        ListNode fast = head;
        // ITERATE TO LINK LIST 
        while(fast != null && fast.next != null){
            fast = fast.next.next;
            slow = slow.next;
            
        }
            return slow;
        
       
        // second pointer would steps +2 of head pointer
        
        // [1,2,3,4,5,6]
        //        s      f =null
    }
}