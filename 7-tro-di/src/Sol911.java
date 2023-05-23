public class Sol911 {
    public static void main(String[] args) {
        
    }

    public static boolean isPalindrome1(int x) {
        String str = Integer.toString(x);
        String reversedStr = new StringBuilder(str).reverse().toString();

        return str.equals(reversedStr);
    }

    public static boolean isPalindrome2(int x) {
        if (x < 0 || (x != 0 && x % 10 == 0)) {
            return false;
        }

        int y = 0;

        while (x > y) {
            y = y*10 + x%10;
            x = x/10;
        }

        return x == y || x == y / 10;
    }
}
