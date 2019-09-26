package kr.or.connect.diexam01;

public class UserBean {
	
//	Specs of Bean
//	1) it have default constructor
//	2) field needs to be deflared as 'private'
//	3) it have getter & setter methods
	
	private String name;
	private int age;
	private boolean male;
	
	public UserBean() {}
	public UserBean(String name, int age, boolean male) {
		this.name = name;
		this.age = age;
		this.male = male; 
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public boolean isMale() {
		return male;
	}
	public void setMale(boolean male) {
		this.male = male;
	}
	
}
