class Solution {
    public int[] twoSum(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int sum = nums[right] + nums[left];
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return new int[] { left, right };
                // for returning a newly instantiated primitive int array yes,
                // although it's comma separated for n values.

                // question are we returning new array ?

            }
        }

        return new int[] { left - 1, right - 1, };
        // so if you're attempting the two sum that i believe you are, then consider
        // your logic you're trying to achieve.
        // you're declaring a variable & initializing it to something but then never
        // referencing it again.

    }
}