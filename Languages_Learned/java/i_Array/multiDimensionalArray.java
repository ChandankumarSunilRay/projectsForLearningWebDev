package Languages_Learned.java.i_Array;

public class multiDimensionalArray {
    // mult-idimensional array
    public static void main(String[] args) {

        // row-student roll number
        // column -> subject possibtion

        /*
         * int marks[][] = new int[3][5];
         * marks[0][0] = 12;
         * marks[0][1] = 98;
         * marks[0][2] = 34;
         * 
         * marks[1][0] = 12;
         * marks[1][1] = 67;
         * marks[1][2] = 87;
         * 
         * 
         * marks[2][0] = 12;
         * marks[2][1] = 98;
         * marks[2][2] = 34;
         * 
         * marks[3][0] = 12;
         * marks[3][1] = 67;
         * marks[3][2] = 87;
         */

        // AND

        int marks[][] = {
            {12,98,34},
            {10,90,30},
            {62,68,36},
            {60,96,40},
        };
        System.out.println(marks[2][1]);

    }
}
