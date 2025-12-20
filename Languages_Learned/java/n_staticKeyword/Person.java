package Languages_Learned.java.n_staticKeyword;

public class Person {
    public static int count =12;

    // this is static block
    static{
        // we can initialize the class etc before anything.
        System.out.println("This is static block");
    }

    static{
        System.out.println("static block runs at the first");
    }

}
