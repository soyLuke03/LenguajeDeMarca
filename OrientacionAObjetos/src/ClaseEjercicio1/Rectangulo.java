package ClaseEjercicio1;




public class Rectangulo {
	private Integer longitud = 1;
	private Integer ancho = 1;
	
	
			//CONSTRUCTORES
	
	
	
			//METODOS
	public int calcularPerimetro() {
		int perimetro = (this.longitud * 2 + this.ancho * 2);
	
		return perimetro;
	}
	
	public int calcularArea() {
		int area = (this.longitud * this.ancho);
		
		return area;
	}
	
	
			//GETTER Y SETTERS
	
	public Integer setAncho (int ancho) {
		if (ancho < 20 && ancho > 0) {
			this.ancho = ancho;
		}else {
			System.out.println("Número [ancho] es inválido. Se usará el valor predeterminado.");
		}
		return this.ancho;
	}
	public Integer setLongitud (int longitud) {
		if (longitud < 20 && longitud > 0) {
			this.longitud = longitud;
		}else {
			System.out.println("Número [longitud] es inválido Se usará el valor predeterminado.");
		}
		
		return this.longitud;
	}
	
	
	public Integer getLongitud () {
		return this.longitud;
	}
	public Integer getAncho() {
		return this.ancho;
	}
}
