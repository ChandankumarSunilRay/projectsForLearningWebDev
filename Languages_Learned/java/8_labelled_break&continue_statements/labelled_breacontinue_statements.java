public class labelled_breacontinue_statements {
    public static void main(String[] args) {
        // https://youtu.be/NNLoi8QqzaY?t=15099

        outerLoop:  //--labelled forloop
        for(int i = 0; i<10; i++){
            int j = 0;
            while (j<=5) {
                if(j ==3) break outerLoop ; 
                System.out.print(j+" ");
                j++;
            }
            System.out.println();
        }


    }
}
