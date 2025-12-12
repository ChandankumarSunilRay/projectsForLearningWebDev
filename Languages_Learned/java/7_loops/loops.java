public class loops {
    // https://youtu.be/NNLoi8QqzaY?t=14088
    public static void main(String[] args) {
        // ---common way--
        // System.out.println("Loops");
        // System.out.println("Loops");
        // System.out.println("Loops");
        // System.out.println("Loops");
        // System.out.println("Loops");

        // ---for loop
        for (int i = 0; i < 100; i++) { // initialize condition increment
            System.out.println("Loops");

        }

        // ---while loops:
        // in while lool we don't know how many times we want to run loop (while
        // condition don't fulfill keep running)
        int i = 1; // infinte loop (bad practice)
        while (i < 5) {
            System.out.println(i);
        }

        // do-while loop
        // A do-while loop is a control flow statement in programming that executes a
        // block of code at least once, and then repeatedly executes it as long as a
        // specified Boolean condition remains true.
        int ii = 9;
        do {
            System.out.println(i);
            ii++;
        } while (ii <= 5);

        // ---------------------------break and continue
        // --break means get out of loop
        for (int j = 1; j <= 10; j++) {
            if (i == 5) {
                System.out.println("Break at i = " + j);
                break; // Exits the for loop
            }
            System.out.println("i = " + j);
        }
        // Output:
        // i = 1
        // i = 2
        // i = 3
        // i = 4
        // Break at i = 5
        // Loop ended.
        System.out.println("Loop ended.");

        // --The continue statement in Java is a loop control statement used to skip the
        // current iteration of a for, while, or do-while loop and immediately proceed
        // to the next iteration.

        int[] numbers = { 5, -2, 7, -1, 9 };

        for (int m = 0; m < numbers.length; m++) {
            if (numbers[m] < 0) {
                continue; // Skip the rest of the loop body for negative numbers
            }
            System.out.println("Processing positive number: " + numbers[m]);
        }

    }

}
