package Languages_Learned.java.q_learnInnerClass;

public class LearnInnerClass {

    class Toy{        // this is non-static class
        int price;
    }
    static class Playstation{
        int price ; 

    }

    public static void main(String[] args) {
        LearnInnerClass obj= new LearnInnerClass();
        Toy toy = obj.new Toy();
        toy.price = 45;

        Playstation playstation = new LearnInnerClass.Playstation();
        

    }
}
