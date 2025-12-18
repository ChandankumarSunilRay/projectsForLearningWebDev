package Languages_Learned.java.k_OOPS1;

public class methodOverloading {

    /*
        1.Two or more methods can have the same name inside the same class if they accept different argumnts. This feature is known as method overloading.
        2.Method overloading is achieved by either:
        ---changing the number of arguments
        ---or changing the data type of arguments.
        3.It is not method overloading if only change the return type of methods.
        --There must be differences in the number of parameters.

     */

    public static void main(String[] args) {
        Greet obj = new Greet();
        obj.greetings();
        obj.greetings("Suraj ");
        obj.greetings("chandan",5);


    }
}

class Greet{
    void greetings(){
        System.out.println("Hello, Good Morning");

    }
    void greetings(String name){
        System.out.println("Hello "+ name+ "Good Morning");

    }
    void greetings(String name, int count){
        for (int i = 0; i<count; i++){
            System.out.println("Hello "+name+", Good Morning");

        }
    }
}
