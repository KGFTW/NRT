package utils;

public class FactoryDriver {

	private static Driver driver;

	public static Driver getInstance() {

		if (driver == null) {

			if (Selectors.CLASSIC.equals(System.getProperty(Selectors.VIEW)))
				driver = new DriverClassic();
			else
				driver = new DriverLightning();
		}
		
		return driver;

	}

}
