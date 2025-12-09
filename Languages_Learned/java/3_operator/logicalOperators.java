public class logicalOperators {
    public static void main(String[] args) {
        // logical operators
        // && -- AND
        // || -- OR

        int time = 21 ; 

        if(time>=10 && time <=20){
            System.out.println("Office is Open");

        }else{
            System.out.println("Office is Closed");
        }

        if(time ==12 || time == 18){
            System.out.println("Time for snack");

        }else{
            System.out.println("Time for work");
        }
    }
}
