public class Sol811 {
    public static void main(String[] args) {
        System.out.println(myAtoi("42"));
        System.out.println(myAtoi("   -42"));
        System.out.println(myAtoi("4193 with words"));
    }

    public static int myAtoi(String s) {
        int num = 0;
        Boolean isPositive = true;
        Boolean isNumStarted = false;
        for (int index = 0; index < s.length(); index++) {
            char currentChar = s.charAt(index);

            if (currentChar >= 48 && currentChar <= 57) {
                int currentNum = currentChar - 48;
               
                if (isPositive) {
                    Boolean isOutOfUpperBound = (num > Integer.MAX_VALUE / 10) ||
                            (num == Integer.MAX_VALUE / 10 &&
                                    currentNum > 7);

                    if (isOutOfUpperBound)
                        return Integer.MAX_VALUE;
                } else {
                    Boolean isOutOfUnderBound = (num * -1 < Integer.MIN_VALUE / 10) ||
                            (num * -1 == Integer.MIN_VALUE / 10 &&
                                    currentNum * -1 < -8);

                    if (isOutOfUnderBound)
                        return Integer.MIN_VALUE;
                }

                num = num * 10 + currentNum;
                isNumStarted = true;
            } else if (isNumStarted) {
                break;
            } else {
                if (currentChar == '+') {
                    isNumStarted = true;
                } else if (currentChar == '-') {
                    isNumStarted = true;
                    isPositive = false;
                } else if (currentChar != ' ') {
                    break;
                }
            }
        }

        return isPositive ? num : num * -1;
    }
}