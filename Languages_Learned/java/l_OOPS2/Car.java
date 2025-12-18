// we caLanguages_Learned.java.l_OOPS2 too a ( parent < child < child < child )    --- inheritance chaining.
// run time polymorphism and compile time polymorphism 
package Languages_Learned.java.l_OOPS2;

public class Car extends Vehicle {
    // Java Inheritance
    // Method Overriding--- If a subclass provides the specific implementation of the method that has been declared by one of it's parent class it is knows as method overriding. Method overriding is also knows as runtime polymorphism. Hence, we can achieve Polymorphism in java with the help of inheritance. 
    void start(){
        System.out.println("car is starting");  // method overriding
    }

    Car(){
        
        System.out.println("Car is begin created");
    }

    public static void main(String[] args) {
        Car obj = new Car();
        obj.wheelsCount = 4 ;
        // obj.model = "I10";
        obj.start();
        

    }
    
}
