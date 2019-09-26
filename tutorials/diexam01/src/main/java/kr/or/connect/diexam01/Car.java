package kr.or.connect.diexam01;

public class Car {

	private Engine v8;
	
	public Car() {
		System.out.println("car constructor");
	}
	
	public void setEngine(Engine e) {
		this.v8 = e;
	}
	
	public void run() {
		System.out.println("car is running by using engine");
		v8.exec();
	}
	
	public static void main(String[] args) {
//		Engine e = new Engine();
//		Car c = new Car();
//		c.setEngine(e);
//		c.run();
	}
	
}
