public class nested_loops {
    public static void main(String[] args) {
        // if a loop exits inside the body of another looop, it's called a nested loop.

        // int i = 1;

        // for (int count = 0; count < 10; count++) {
        //     for (i = 0; i < 6; i++) {
        //         System.out.print(i + " ");
        //     }
        //     // System.out.println();
        //     System.out.println("printed "+count);
        // }

                // printing pattern
        for(int i=0; i<5; i++){
            for(int j=0; j<i; j++){
                System.out.print(j+" ");
            }
            System.out.println();
        }



    }
}
