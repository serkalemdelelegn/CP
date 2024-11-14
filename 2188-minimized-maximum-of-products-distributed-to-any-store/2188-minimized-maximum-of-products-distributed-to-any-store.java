
//JAVA
import java.util.*;

import java.util.*;

class Solution {
    private boolean canAssign(int mid, int n, int[] quantities) {
        int count = 0;
        for (int quantity : quantities) {
            count += Math.ceil((double) quantity / mid);
        }
        return count <= n;
    }

    public int minimizedMaximum(int n, int[] quantities) {
        int low = 1;
        int high = Arrays.stream(quantities).max().orElse(0);
        int ans = Integer.MAX_VALUE;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (canAssign(mid, n, quantities)) {
                ans = Math.min(ans, mid);
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }
}

