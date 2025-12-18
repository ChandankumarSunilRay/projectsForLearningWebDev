package Languages_Learned.java.k_OOPS1;

public class oops {
    public static void main(String[] args) {
        // Classes & objects
        // ----class is a blueprint which defines some properties and behaviors. An object  is an instance of a class which has those properties and behaviours attached.
        // ----a class is not allocated memory when it is defined. An object is allocated memory when when it is created.
        // ----class is a logical entity whereas objects are physical entities.
        // ----A class is declare only once. On the other hand we can create multiple objects of a class.


        Dog d1 = new Dog();
        d1.name = "Tommy";
        d1.bark();
        
        Dog d2 = new Dog();
        d2.name = "Leo";
        d2.walk();




    }
}


class Dog{  // factory

    String name;
    int age;
    String color;

    void walk(){
        System.out.println(name + " is walking");

    }
    void bark(){
        System.out.println(name + " is barking");

    }
    

}


class Cat{

}