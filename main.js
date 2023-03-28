const DUCK = [];
let frame = 0;
var help = null;
let frameDelay;
let Stage;
let CurrentTextX;
let CurrentTextY;
var canvas = new fabric. Canvas ('myCanvas')
ctx = canvas.getContext("2d");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img)
	{
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight (block_image_height);
		block_image_object.set({
			top:block_y, 
			left: block_x
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
//console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image('rr1.png');
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png');
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png');
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png');
	}
	if (keyPressed == "75" && DUCK.length == 0)
	{
		DUCK.push("K");
		console.log("1 of 8 Locks");
	}
	if (keyPressed == "65" && DUCK.length == 1 && DUCK[0] == "K")
	{
		DUCK.push("A");
		console.log("2 of 8 Locks");
	}
	if (keyPressed == "85" && DUCK.length == 2 && DUCK[0] == "K" && DUCK[1] == "A")
	{
		DUCK.push("U");
		console.log("3 of 8 Locks");
	}
	if (keyPressed == "83" && DUCK.length == 3 && DUCK[0] == "K" && DUCK[1] == "A" && DUCK[2] == "U")
	{
		DUCK.push("S");
		console.log("4 of 8 Locks");
	}
	if (keyPressed == "84" && DUCK.length == 4 && DUCK[0] == "K" && DUCK[1] == "A" && DUCK[2] == "U" && DUCK[3] == "S")
	{
		DUCK.push("T");
		console.log("5 of 8 Locks");
	}
	if (keyPressed == "85" && DUCK.length == 5 && DUCK[0] == "K" && DUCK[1] == "A" && DUCK[2] == "U" && DUCK[3] == "S" && DUCK[4] == "T")
	{
		DUCK.push("U");
		console.log("6 of 8 Locks");
	}
	if (keyPressed == "66" && DUCK.length == 6 && DUCK[0] == "K" && DUCK[1] == "A" && DUCK[2] == "U" && DUCK[3] == "S" && DUCK[4] == "T" && DUCK[5] == "U")
	{
		DUCK.push("B");
		console.log("7 of 8 Locks");
	}
	if (keyPressed == "72" && DUCK.length == 7 && DUCK[0] == "K" && DUCK[1] == "A" && DUCK[2] == "U" && DUCK[3] == "S" && DUCK[4] == "T" && DUCK[5] == "U" && DUCK[6] == "B")
	{
		DUCK.push("H");
		console.log("8 of 8 Locks");
		Activate();
	}
	if(keyPressed == 32 && Stage == 1)
	{
		frame = 0;
		help = setInterval(Frame1, frameDelay);
	}
	if(keyPressed == 55 && Stage == 2)
	{
		frame = 0;
		help = setInterval(Frame2, frameDelay);
	}
}
function Activate()
{
	Clear();
	Stage = 0;
	CurrentTextX = 50;
	CurrentTextY = 50;
	frameDelay = 100;
	ctx.font = "20px Georgia";
	help = setInterval(Frame, frameDelay);
}
function Clear()
{
	ctx.clearRect(0,0,canvas.width, canvas.height);
}
function Frame() 
{
	frame++;
	Clear()
	if(frame == 1)
	{
		ctx.strokeText("H", CurrentTextX, CurrentTextY);
	}
	if(frame == 2)
	{
		ctx.strokeText("He", CurrentTextX, CurrentTextY);
	}
	if(frame == 3)
	{
		ctx.strokeText("Hel", CurrentTextX, CurrentTextY);
	}
	if(frame == 4)
	{
		ctx.strokeText("Hell", CurrentTextX, CurrentTextY);
	}
	if(frame == 5)
	{
		ctx.strokeText("Hello", CurrentTextX, CurrentTextY);
	}
	if(frame >= 6)
	{
		if(frame <= 21)
		{
			ctx.strokeText("Hello,", CurrentTextX, CurrentTextY);
		}
	}
	if(frame == 22)
	{
		ctx.font = "55px Georgia"
		CurrentTextX = 250;
		CurrentTextY = 225;
		ctx.strokeText("P", CurrentTextX, CurrentTextY);
	}
	if(frame == 23)
	{
		ctx.strokeText("Pr", CurrentTextX, CurrentTextY);
	}
	if(frame == 24)
	{
		ctx.strokeText("Pre", CurrentTextX, CurrentTextY);
	}
	if(frame == 25)
	{
		ctx.strokeText("Pres", CurrentTextX, CurrentTextY);
	}
	if(frame == 26)
	{
		ctx.strokeText("Press", CurrentTextX, CurrentTextY);
	}
	if(frame == 27)
	{
		ctx.strokeText("Press S", CurrentTextX, CurrentTextY);
	}
	if(frame == 28)
	{
		ctx.strokeText("Press Sp", CurrentTextX, CurrentTextY);
	}
	if(frame == 29)
	{
		ctx.strokeText("Press Spa", CurrentTextX, CurrentTextY);
	}
	if(frame == 30)
	{
		ctx.strokeText("Press Spac", CurrentTextX, CurrentTextY);
	}
	if(frame == 31)
	{
		ctx.strokeText("Press Space", CurrentTextX, CurrentTextY);
	}
	if(frame == 32)
	{
		ctx.strokeText("Press Space T", CurrentTextX, CurrentTextY);
	}
	if(frame == 33)
	{
		ctx.strokeText("Press Space To", CurrentTextX, CurrentTextY);
	}
	if(frame == 34)
	{
		ctx.strokeText("Press Space To C", CurrentTextX, CurrentTextY);
	}
	if(frame == 35)
	{
		ctx.strokeText("Press Space To Ca", CurrentTextX, CurrentTextY);
	}
	if(frame == 36)
	{
		ctx.strokeText("Press Space To Cal", CurrentTextX, CurrentTextY);
	}
	if(frame == 37)
	{
		ctx.strokeText("Press Space To Cali", CurrentTextX, CurrentTextY);
	}
	if(frame == 38)
	{
		ctx.strokeText("Press Space To Calib", CurrentTextX, CurrentTextY);
	}
	if(frame == 39)
	{
		ctx.strokeText("Press Space To Calibr", CurrentTextX, CurrentTextY);
	}
	if(frame == 40)
	{
		ctx.strokeText("Press Space To Calibra", CurrentTextX, CurrentTextY);
	}
	if(frame == 41)
	{
		ctx.strokeText("Press Space To Calibrat", CurrentTextX, CurrentTextY);
	}
	if(frame == 42)
	{
		ctx.strokeText("Press Space To Calibrate", CurrentTextX, CurrentTextY);
		Stage = 1;
		clearInterval(help);
	}
}
function Frame1()
{
	frame++;
	Clear();
	if(frame == 1)
	{
		ctx.strokeText("P", CurrentTextX, CurrentTextY);
	}
	if(frame == 2)
	{
		ctx.strokeText("Pr", CurrentTextX, CurrentTextY);
	}
	if(frame == 3)
	{
		ctx.strokeText("Pre", CurrentTextX, CurrentTextY);
	}
	if(frame == 4)
	{
		ctx.strokeText("Pres", CurrentTextX, CurrentTextY);
	}
	if(frame == 5)
	{
		ctx.strokeText("Press", CurrentTextX, CurrentTextY);
	}
	if(frame == 6)
	{
		ctx.strokeText("Press S", CurrentTextX, CurrentTextY);
	}
	if(frame == 7)
	{
		ctx.strokeText("Press Se", CurrentTextX, CurrentTextY);
	}
	if(frame == 8)
	{
		ctx.strokeText("Press Sev", CurrentTextX, CurrentTextY);
	}
	if(frame == 9)
	{
		ctx.strokeText("Press Seve", CurrentTextX, CurrentTextY);
	}
	if(frame == 10)
	{
		ctx.strokeText("Press Seven", CurrentTextX, CurrentTextY);
	}
	if(frame == 11)
	{
		ctx.strokeText("Press Seven T", CurrentTextX, CurrentTextY);
	}
	if(frame == 12)
	{
		ctx.strokeText("Press Seven To", CurrentTextX, CurrentTextY);
	}
	if(frame == 13)
	{
		ctx.strokeText("Press Seven To C", CurrentTextX, CurrentTextY);
	}
	if(frame == 14)
	{
		ctx.strokeText("Press Seven To Ca", CurrentTextX, CurrentTextY);
	}
	if(frame == 15)
	{
		ctx.strokeText("Press Seven To Cal", CurrentTextX, CurrentTextY);
	}
	if(frame == 16)
	{
		ctx.strokeText("Press Seven To Cali", CurrentTextX, CurrentTextY);
	}
	if(frame == 17)
	{
		ctx.strokeText("Press Seven To Calib", CurrentTextX, CurrentTextY);
	}
	if(frame == 18)
	{
		ctx.strokeText("Press Seven To Calibr", CurrentTextX, CurrentTextY);
	}
	if(frame == 19)
	{
		ctx.strokeText("Press Seven To Calibra", CurrentTextX, CurrentTextY);
	}
	if(frame == 20)
	{
		ctx.strokeText("Press Seven To Calibrat", CurrentTextX, CurrentTextY);
	}
	if(frame == 21)
	{
		ctx.strokeText("Press Seven To Calibrate", CurrentTextX, CurrentTextY);
		Stage = 2;
		clearInterval(help);
	}
}
function Frame2()
{
	frame++;
	Clear();
	if(frame == 1)
	{
		ctx.strokeText("Y", CurrentTextX, CurrentTextY);
	}
	if(frame == 2)
	{
		ctx.strokeText("Yo", CurrentTextX, CurrentTextY);
	}
	if(frame == 3)
	{
		ctx.strokeText("You", CurrentTextX, CurrentTextY);
	}
	if(frame == 4)
	{
		ctx.strokeText("You S", CurrentTextX, CurrentTextY);
	}
	if(frame == 5)
	{
		ctx.strokeText("You Sh", CurrentTextX, CurrentTextY);
	}
	if(frame == 6)
	{
		ctx.strokeText("You Sho", CurrentTextX, CurrentTextY);
	}
	if(frame == 7)
	{
		ctx.strokeText("You Shou", CurrentTextX, CurrentTextY);
	}
	if(frame == 8)
	{
		ctx.strokeText("You Shoul", CurrentTextX, CurrentTextY);
	}
	if(frame == 9)
	{
		ctx.strokeText("You Should", CurrentTextX, CurrentTextY);
	}
	if(frame == 10)
	{
		ctx.strokeText("You Shouldn", CurrentTextX, CurrentTextY);
	}
	if(frame == 11)
	{
		ctx.strokeText("You Shouldn'", CurrentTextX, CurrentTextY);
	}
	if(frame == 12)
	{
		ctx.strokeText("You Shouldn't", CurrentTextX, CurrentTextY);
	}
	if(frame == 13)
	{
		ctx.strokeText("You Shouldn't B", CurrentTextX, CurrentTextY);
	}
	if(frame == 14)
	{
		ctx.strokeText("You Shouldn't Be", CurrentTextX, CurrentTextY);
	}
	if(frame == 15)
	{
		ctx.strokeText("You Shouldn't Be H", CurrentTextX, CurrentTextY);
	}
	if(frame == 16)
	{
		ctx.strokeText("You Shouldn't Be He", CurrentTextX, CurrentTextY);
	}
	if(frame == 17)
	{
		ctx.strokeText("You Shouldn't Be Her", CurrentTextX, CurrentTextY);
	}
	if(frame >= 18 && frame <= 28)
	{
		ctx.strokeText("You Shouldn't Be Here", CurrentTextX, CurrentTextY);
	}
	if(frame == 29)
	{
		ctx.strokeText("Y", CurrentTextX, CurrentTextY);
	}
	if(frame == 30)
	{
		ctx.strokeText("Yo", CurrentTextX, CurrentTextY);
	}
	if(frame == 31)
	{
		ctx.strokeText("You", CurrentTextX, CurrentTextY);
	}
	if(frame == 32)
	{
		ctx.strokeText("You L", CurrentTextX, CurrentTextY);
	}
	if(frame == 33)
	{
		ctx.strokeText("You Lo", CurrentTextX, CurrentTextY);
	}
	if(frame == 34)
	{
		ctx.strokeText("You Loo", CurrentTextX, CurrentTextY);
	}
	if(frame == 35)
	{
		ctx.strokeText("You Look", CurrentTextX, CurrentTextY);
	}
	if(frame == 36)
	{
		ctx.strokeText("You Looke", CurrentTextX, CurrentTextY);
	}
	if(frame == 37)
	{
		ctx.strokeText("You Looked", CurrentTextX, CurrentTextY);
	}
	if(frame == 38)
	{
		ctx.strokeText("You Looked A", CurrentTextX, CurrentTextY);
	}
	if(frame == 39)
	{
		ctx.strokeText("You Looked At ", CurrentTextX, CurrentTextY);
	}
	if(frame == 40)
	{
		ctx.strokeText("You Looked At T", CurrentTextX, CurrentTextY);
	}
	if(frame == 41)
	{
		ctx.strokeText("You Looked At Th", CurrentTextX, CurrentTextY);
	}
	if(frame == 42)
	{
		ctx.strokeText("You Looked At The", CurrentTextX, CurrentTextY);
	}
	if(frame == 43)
	{
		ctx.strokeText("You Looked At The C", CurrentTextX, CurrentTextY);
	}
	if(frame == 44)
	{
		ctx.strokeText("You Looked At The Co", CurrentTextX, CurrentTextY);
	}
	if(frame == 45)
	{
		ctx.strokeText("You Looked At The Cod", CurrentTextX, CurrentTextY);
	}
	if(frame >= 46 && frame < 57)
	{
		ctx.strokeText("You Looked At The Code", CurrentTextX, CurrentTextY);
	}
	if(frame == 57)
	{
		ctx.font = "120px Georgia";
		ctx.strokeText("S", CurrentTextX, CurrentTextY);
	}
	if(frame == 58)
	{
		ctx.strokeText("So", CurrentTextX, CurrentTextY);
	}
	if(frame == 59)
	{
		ctx.strokeText("So G", CurrentTextX, CurrentTextY);
	}
	if(frame == 60)
	{
		ctx.strokeText("So Go", CurrentTextX, CurrentTextY);
	}
	if(frame == 61)
	{
		ctx.strokeText("So Goo", CurrentTextX, CurrentTextY);
	}
	if(frame == 62)
	{
		ctx.strokeText("So Good", CurrentTextX, CurrentTextY);
	}
	if(frame == 63)
	{
		ctx.strokeText("So Goodb", CurrentTextX, CurrentTextY);
	}
	if(frame == 64)
	{
		ctx.strokeText("So Goodby", CurrentTextX, CurrentTextY);
	}
	if(frame > 64 && frame <= 80)
	{
		ctx.strokeText("So Goodbye", CurrentTextX, CurrentTextY);
	}
	if(frame == 81)
	{
		Clear();
		clearInterval(help);
		DUCK[0] = "DUCK Activated";
	}
}
