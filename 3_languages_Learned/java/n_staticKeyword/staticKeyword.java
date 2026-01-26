package Languages_Learned.java.n_staticKeyword;

public class staticKeyword {
    //Static Variables
    /*
        Only a single copy of the static variable is created and shared among all the instances of the class.
        Because it is a class-level variable, memory allocation of such variables only happens once when the class is loaded in the memory.
        If an object modifies the value of a static variable, the change is reflected across all objects.
        Static variables can be used in any type of method: static or non-static.
        Non-static variable cannot be used inside static methods. It will throw a compile time error.
     */
    public static void main(String[] args) {
        Person p1 = new Person();
        System.out.println(p1.count);
        
        p1.count= 50;
        System.out.println(p1.count);


    }
}
