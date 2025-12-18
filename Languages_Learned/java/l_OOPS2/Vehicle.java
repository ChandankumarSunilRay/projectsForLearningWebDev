package Languages_Learned.java.l_OOPS2;
// Java Inheritance

// -Inheritance is one of the key features of OOP that allows us to create a new

// class from an existing class.
// -The new class that is created is known as subclass (child or derived class)
// and the existing class from where the cihld class is derived is knows as
// superclass(parent or base class)
/*
 * ------ parent
 * ---------|
 * ---------|--------------extends
 * ---------|
 * ------child
 * 
 * 
 */

public class Vehicle {

    int gears;

    public static void main(String[] args) {

    }

    int wheelsCount;

    Vehicle() {
        System.out.println("creating a vehicle instance");
    }

    void start() {
        System.out.println("Vehicle is starting");
    }

    final void accelerate() {
        System.out.println("final keyword used");
    }

}
