public class ternaryOperator {

    public static void main(String[] args) {
        // java ternary operator
        /*
         * A ternary operator evaluates the test condition and executes a block of code
         * based on the result of the condition.
         * -- ?
         * -- :
         * 
         */
        int a = 12;
        int b = 43;
        int max = 0;

        /*
         * if(a>b){
         * max = a;
         * }else{
         * max = b ;
         * }
         * 
         * System.out.println("the value of max " + max);
         */

        // instead of using if-else statements use ternary operators
        max = a > b ? a : b;      // if a is greater than b but a into a otherwise b
        System.out.println(max);
    }
}
