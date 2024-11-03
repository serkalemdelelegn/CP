/*
 * @lc app=leetcode id=796 lang=java
 *
 * [796] Rotate String
 */
class Solution {
    public boolean rotateString(String A, String B) {
        if(A.length()!=B.length()){
            return false;
        }
        if(A.length()==0&&B.length()==0){
            return true;
        }

        char[] chars=A.toCharArray();
        StringBuffer sb=new StringBuffer();
        for(int i=0;i<chars.length;i++){
            char first=chars[0];
            for(int j=1;j<chars.length;j++){
                chars[j-1]=chars[j];
            }
            chars[chars.length-1]=first;
            
            if(B.equals(new String(chars))){
                return true;
            }
        }
        return false;

        
    }
}