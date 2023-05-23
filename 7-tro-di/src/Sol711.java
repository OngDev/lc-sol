public class Sol711 {
    public static void main(String[] args) throws Exception {
        System.out.println(reverse(123));
        System.out.println(reverse(1000000003));
        System.out.println(reverse(-132));
    }
    //-2147483648 INTEGER.MIN_VALUE
    // 2147483647 INTEGER.MAX_VALUE

    public static int reverse(int x) {
        int reversedNumber = 0;

        while (x != 0) {
            int remainder = x % 10;

            Boolean isOutOfUpperBound = 
                (reversedNumber > Integer.MAX_VALUE / 10) || 
                (reversedNumber == Integer.MAX_VALUE / 10 && 
                    remainder > 7);

            Boolean isOutOfUnderBound = 
                (reversedNumber < Integer.MIN_VALUE / 10) || 
                (reversedNumber == Integer.MIN_VALUE / 10 && 
                    remainder < -8);

            if (isOutOfUnderBound || isOutOfUpperBound)
                return 0;
            
            reversedNumber = reversedNumber * 10 + remainder;
            x = x / 10;
        }

        return reversedNumber;
    }
}
