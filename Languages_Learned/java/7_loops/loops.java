public class loops {
    // https://youtu.be/NNLoi8QqzaY?t=13501
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

        // ---wihle loops
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
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                System.out.println("Break at i = " + i);
                break; // Exits the for loop
            }
            System.out.println("i = " + i);
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
        outerLoop: for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                if (i == 2 && j == 2) {
                    continue outerLoop; // Skips the rest of the current 'outerLoop' iteration
                }
                System.out.println("i = " + i + ", j = " + j);
            }
        }

    }

}
