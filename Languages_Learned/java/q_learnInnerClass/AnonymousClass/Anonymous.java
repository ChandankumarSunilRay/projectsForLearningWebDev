package Languages_Learned.java.q_learnInnerClass.AnonymousClass;

public class Anonymous {

    // class InnerClass extends OuterClass{

    // }

    OuterClass obj = new OuterClass(){
        void sing(){

        }

        public void outerMethod(){
            
        }

    };


    
}

class OuterClass{



    public void outerMethod(){

    }
}
