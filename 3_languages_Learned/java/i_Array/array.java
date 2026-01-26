package Languages_Learned.java.i_Array;

public class array {
    public static void main(String[] args) {
        // Array are stored in contiguous memory [consecutive memory locations]. array
        // has fixed size
        // both are valid declaration
        // int intArray[];
        // int[] intArray;

        // intArray = new int[20]; //allocation memory to array

        // int age[]; //declaration
        // age = new int[5]; //allocation
        int age[] = new int[5];
        age[0] = 5;
        age[1] = 2;

        System.out.println(age[0]);
        System.out.println(age[1]);
        System.out.println(age[2]);
        System.out.println("length " + age.length);

        int marks[] = { 54, 89, 56, 48 };
        System.out.println(marks[2]);

        // iteration in an array -- for loop
        String names[] = {"Ram","Harsh","Karan","Monty"};
        for(int i = 0; i<names.length; i++){
            System.out.println("Name is "+names[i]);

        }

        // iteration in an array using -- for-each
        for(String name:names){
            System.out.println("for each "+name);
            
        }
    }

}
