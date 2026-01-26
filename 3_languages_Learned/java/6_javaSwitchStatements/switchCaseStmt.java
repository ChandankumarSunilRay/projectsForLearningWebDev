import java.util.Scanner;

public class switchCaseStmt {
    public static void main(String[] args) {
        // switch case is optimized version of if else

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the day");
        int day = sc.nextInt();

        switch (day) {
            case 1:
                System.out.println("Today is sunday");
                break;
            case 2:
                System.out.println("Today is monday");
                break;

            case 3:
                System.out.println("Today is Tuesday");
                break;

            case 4:
                System.out.println("Today is Wednesday");
                break;

            case 5:
                System.out.println("Today is Thrusday");
                break;

            case 6:
                System.out.println("Today is Friday");
                break;

            case 7:
                System.out.println("Today is Saturday");
                break;
            default:
                System.out.println("Enter valid day number");
        }
        sc.close();
    }

}
