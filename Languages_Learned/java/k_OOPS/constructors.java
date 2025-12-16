package Languages_Learned.java.k_OOPS;

public class constructors {
    public static void main(String[] args) {
        /*
         * instance or object are same thing(just to remember)
         * Constructors:
         * 1. Constructors are invoked implicitly when you instantiate objects.
         * 2. The two rules for creating a constructor are:
         * ---a.The name of the constructor should be the same as the class.
         * ---b.A java constructor must not have a return type.
         * 3.If a class doesn't have a constructor, the java compiler automatically
         * creates a default constructor during run-time. The default constructor
         * initializes instance variables with default values.
         * 4.Default Constructor -a constructor that is automatically created by the
         * java compliler if it is not explicitly defined.
         * 5.A Constructor cannot be abstract or static or final.
         * 6.A constructor can be overloaded but can not be overridden.
         * 
         * 
         */
        Complex num1 = new Complex(2,3);
        Complex num2 = new Complex(4,1);
        num1.print();
        num2.print();

    }
}

class Complex {
    int a, b;

    public Complex(int real, int imaginary ) {
        a = real;
        b = imaginary;
    }

    void print() {
        System.out.println(a + " + " + b + "i");
    }
}