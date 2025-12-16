package Languages_Learned.java.j_string;

import java.util.Scanner;

public class learnString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name: ");
        String firstName = sc.nextLine();
        
        System.out.println("Enter your last Name: ");
        String lastName = sc.nextLine();

        System.out.println("Your full name is "+ firstName+" "+lastName);
        sc.close();

        
    }
}
