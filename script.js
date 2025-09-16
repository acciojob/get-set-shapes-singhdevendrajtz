//complete this code
class Rectangle {
  /**
   * Initializes a new Rectangle with a given width and height.
   * @param {number} width The width of the rectangle.
   * @param {number} height The height of the rectangle.
   */
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  /**
   * Getter method to retrieve the width of the rectangle.
   * @returns {number} The width of the rectangle.
   */
  get width() {
    return this._width;
  }

  /**
   * Getter method to retrieve the height of the rectangle.
   * @returns {number} The height of the rectangle.
   */
  get height() {
    return this._height;
  }

  /**
   * Calculates the area of the rectangle.
   * @returns {number} The area of the rectangle.
   */
  getArea() {
    return this.width * this.height;
  }
}

// 2. Square Class
class Square extends Rectangle {
  /**
   * Initializes a new Square with a given side length.
   * Inherits from the Rectangle class, setting both width and height to the same value.
   * @param {number} side The side length of the square.
   */
  constructor(side) {
    super(side, side); // Call the parent (Rectangle) constructor
  }

  /**
   * Calculates the perimeter of the square.
   * @returns {number} The perimeter of the square.
   */
  getPerimeter() {
    return 4 * this.width;
  }
}
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
