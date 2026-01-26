package Languages_Learned.java.p_interfaces;

public class Interface {

    // Animal a1 = new Animal()
    public static void main(String[] args) {
        Monkey monkey = new Monkey();
        monkey.eats();

    }
    

}

interface Animal {
    void eats();
}

interface Human{
    void walk();
}

class Monkey implements Animal{
    @Override
    public void eats(){
        System.out.println("Monkey is eating");
    }


}
