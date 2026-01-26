package Languages_Learned.java.o_OOPS4;

public class abstraction {
    /*
     * 1.The abstract keyword
     * 2.Abstraction
     * 3.Java interfaces
     * 4.Inner class & Nested static classes
     * 5.Anonymous Classes
     * 6.Functional INterfaces
     * 7.Lambda expressions
     * 
     */

    /*
     * The abstract class in Java cannot be instantiated(wecannot create objects of
     * abstract class.) We use the abstract keyword to declare an abstract class.
     * ..An abstract class can have both the regular method and abstract method.
     * ..A method that doesn't have its body is known as an abstract method.
     * ..Though abstract classes cannot be instantiated, we can reate subclasses from it . We can then access members of the abstract class using the object of the cubclass.
     * ..If the abstract class includes any abstract method, then all the child classes inherited from the abstract superclass must provide the implementation the abstract method.
     */

    public static void main(String[] args) {
        abstraction obj = new abstraction();
        Car c1 = obj.new Car();
        c1.accelerate();
        c1.brakes(4);

    }

    abstract class Vehicle {
        abstract void accelerate();

        abstract int brakes(int wheels);

    }

    class Car extends Vehicle {

        @Override
        void accelerate() {
            System.out.println("Car is Accelerating");
        }

        @Override
        int brakes(int wheels) {
            System.out.println("Car breaks are pushed");
            return wheels;
        }
    }
}
