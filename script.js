//complete this code
class Rectangle {
	constructor(width,height)
	{
	this.heigh=height;
	this.width=width;
	}
	get width()
	{
	return(this.width);
	}
	get height()
	{
	return(this.height);
	}
	getArea()
	{
		const are=this.height * this.width;
		return(are);
	}
}

class Square extends Rectangle {
	constructor(side);
	{
	this.side=side;
	super(side,side);
	}
getPerimeter()
{
this.perim=4*this.side;
	return(this.perim);
}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
