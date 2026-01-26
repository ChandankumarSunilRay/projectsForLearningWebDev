public class ifelse {
    // https://youtu.be/NNLoi8QqzaY?t=7722
    // --------------------------------------------if-else statement
    public static void main(String[] args) {
        // syntax is same as javascriptww
        int age = 4;
        if (age >= 18) {
            System.out.println("you can vote");
            System.out.println("Good Morning");
        } else {
            System.out.println("You can't vote");
        }

        // ------------------------------------------- if-else-if in java
        // in java, we have an if..else..if ladder, that can be used to execute one
        // block of code among multiple other blocks
        int day = 3;
        if (day == 1) {
            System.out.println("go to home");

        } else if (day == 3) {
            System.out.println("Have a good coffee as this is day third");

        } else if (day == 4) {
            System.out.println("work hard");

        } else {
            System.out.println("usual day wark as you want");
        }

        // ---------------------------Nested if-else statements
        // in java, we have an if..else..if ladder, that can be used to execute one
        // block of code among multiple other blocks

        int a = 4;
        int b = 8;
        int c = 2;

        if (a > b) {
            if (a > c) {
                System.out.println("A is bigger than c");
                System.out.println("A is largest");

            } else {
                System.out.println("c is bigger than a ");
                System.out.println("c is largest ");
            }
        } else {
            System.out.println("B is bigger than A");
            if(b>c){
                System.out.println("B is bigger than C");
                System.out.println("B is largest");
            }else{
                System.out.println("c is bigger than b");
            }
        }

    }

}
