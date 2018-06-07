package utils;

public class FactoryDriver {

	private static Driver driver;

	public static Driver getInstance() {

		if (driver == null) {

			if (System.getProperty("view").equals("classic"))
				driver = new DriverClassic();
			else
				driver = new DriverLightning();
		}
		
		return driver;

	}

}
