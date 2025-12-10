public class loops {
    // https://youtu.be/NNLoi8QqzaY?t=12820
    public static void main (String[] args){
        // ---common way--
        // System.out.println("Loops");
        // System.out.println("Loops");
        // System.out.println("Loops");
        // System.out.println("Loops");
        // System.out.println("Loops");

        // ---for loop
        for(int i = 0; i<100; i++){          // initialize condition increment
            System.out.println("Loops");

        }

        // ---wihle loops
        // in while lool we don't know how many times we want to run loop (while condition don't fulfill keep running)
        int i = 1 ;   // infinte loop (bad practice) 
        while (i < 5){
            System.out.println(i);
        }        

        // do-while loop
        // A do-while loop is a control flow statement in programming that executes a block of code at least once, and then repeatedly executes it as long as a specified Boolean condition remains true.
        int ii = 9;
        do{
            System.out.println(i);
            ii++;
        }while(ii <= 5);

        

    }

}
