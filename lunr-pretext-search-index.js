var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "  Preface for Instructors  This is the product of teaching a class called Informal Number Theory at Fitchburg State University over many semesters. Although the text I used to use was quite good, I felt the pull of Open Education Resources and earned a grant to take my notes and adapt them to the class.    Preface for Future Educators  One of the great things about teaching a class and writing a book to a future educator is that I know precisely where you will be in a few years. You will be in an Elementary School classroom and a large chunk of your time will be thinking mathematics and mathematically. I get the sense, however, that many of you don't think that math will be that important in being a teacher, and so I feel excited to show you the beauty of mathematics at the Elementary school level.  When I started my teaching career at the college level, I don't think I ever would have written that previous sentence. I thought that elementary school mathematics is just the basics that you need to do interesting mathematics, but it's far from the case. A few things that I find interesting with this material     Models for this class are amazing. Although I don't think I have every thought of chip models, they perfectly explain the standard arithmetic algorithms that you'll see in , even long division.    Mental Math is the ability to do math in your head.      "
},
{
  "id": "ch-preliminary-3",
  "level": "1",
  "url": "ch-preliminary-3.html",
  "type": "Section",
  "number": "1.1",
  "title": "Mathematical Logic",
  "body": " Mathematical Logic   This section covers some basics of mathematical logic. I'm using this term in a relatively informal way in that Logic is a huge field requiring quite a bit more mathematical background than required for this text. Instead, I'm using logic in a way in that the mathematics that we are covering in this course should make sense in the context of the material. There are two things that we'll cover here: 1) mathematical equations and using the equals sign correctly and 2) mathematical statements and counterexamples.    Mathematical Equations and Identities  A mathematical equation is any mathematical statement containing an equals sign . This can include a simple arithmetic statement like   or as more-complicated algebraic equation like   In each case, the main idea is that left side of the equation equals the right side. In the case of , it's clear doing the addition on the left side results in the right side or 9.  In the case of , it's not clear what value or values of makes this true. This is a quadratic equation and the two standard techniques to solve this is a) factoring or b) the quadratic equation. We'll talk more about factoring below. Using either of these techniques, you should find that is a solution and plugging this value into the equation results in , a true statement.    Mathematical Identities  Let's return to above and factor the left side of the equation. The result will be which by definition is a mathematical equation because it has an equals sign. However, this is more than just an equation. It is called a mathematical identity .    A mathematical identity is a mathematical equation with one or more variables in which the equation is true for all values of the variables where defined.    The equation in is an identity because it is true for all . For example, let , you should see , when you should see . Try a few others.  Identities often arise from mathematic properties and other simplifying techniques from algebra like factoring that was used in . It is important to understand the difference between equations and identities even though both use the equals sign.    Using the Equals Sign correctly  Often, students (at many different levels) will use the equals sign incorrectly. Here's a classic example. Let's say that you are asked to solve and the student does:   Incorrect Use of Equals Sign   Notice that there are two equals signs here.  It is fine to use multiple equals signs in a series of mathematical steps and is encouraged, however each of them must be equal. If we simplify the equation on the right from to , so this clearly uses the equals sign correctly. The left one however says that , resulting in which isn't right.  From the example above in the box, the thinking is correct in that the student is breaking down the problem into multiple steps and doing first and then adding 40 to the result to get 70. However, we will show a way to both include the steps to solving and using the equals sign correctly below.  Alternatively, students sometimes use an arrow instead of an equals sign. Another common way to solve this problem would be    Use of Arrows for Steps  What if you show the calculation above with the following steps?   Each of the equations are correct and the result is correct, but this requires the reader to put the pieces together since the original problem is . In short, the equations in this are correct, but this is still hard to follow.  Instead, we will start with the given problem and correctly use equals signs throughout.    Correct Version of the Problem   Notice in this case, we start with the full problem asked to do. The first equals sign (first step) adds and and keeps the along for the ride. The second equals sign (second step) adds the to to get the final answer.This is better because the original problem is the very left addition problem and the very right is the answer.    "
},
{
  "id": "ch-preliminary-3-4-2",
  "level": "2",
  "url": "ch-preliminary-3.html#ch-preliminary-3-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mathematical identity "
},
{
  "id": "ch-preliminary-3-4-3",
  "level": "2",
  "url": "ch-preliminary-3.html#ch-preliminary-3-4-3",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A mathematical identity is a mathematical equation with one or more variables in which the equation is true for all values of the variables where defined.   "
},
{
  "id": "ch-preliminary-4",
  "level": "1",
  "url": "ch-preliminary-4.html",
  "type": "Section",
  "number": "1.2",
  "title": "Counterexamples",
  "body": " Counterexamples  We all make mathematical mistakes. Even I (the author), who has been teaching for more than 20 years still makes little errors. I often catch them however, and this is an important skill.  One big set of catching errors is the use of a counterexample , which is an example that shows something is not true.  For example, consider a student that write or uses as a possible idenity.  Hopefully, you question this. Although it may seem right, let's check a couple of examples. First let's find an and a such that the square root is “nice” or an integer. Let's say and . then   on the right side we get and on the left we get . Since 13 is not a perfect square, then is not an integer (it's a little less than 4) and the right side is 5. Since this isn't true, this is a counterexample.  Be careful. If we choose and , then we would get   which is a true statement. Often incorrect identities are true when plugging in 0 or 1, so avoid using those.   Looking for a Counterexample  If you have a possible identity that you are checking if it is true or some other statement that a student might use in general, then you should plug one more values into it. As soon as you find one example that makes the equation false, then you are done and that is a counterexample . Note: even if you check a few examples that are all true, that doesn't make it an identity. That requires a proof.  Let's look at another example, which involves prime numbers. Recall that a number is prime if the only factors are 1 and itself. We will spend some good time with these in , but this is a nice example using a counterexample.    A student claims that is prime for all positive whole numbers . Provide a counterexample.  First, if you don't recall, perform a little internet search to get a listing of prime numbers less than 100. Now if we let , then plugging in, we get and all of these are prime. Does that imply the statement is true?  The answer however is no, because the next one: is not prime since . Therefore is a counterexample to this statement.  The moral of this is to be skeptical. Sometimes it take a few tries to find the counterexample.    These are just a couple of examples, but good teachers have counterexamples in their toolkit to help students. We'll see others in the course as well.   "
},
{
  "id": "ch-preliminary-4-9-2",
  "level": "2",
  "url": "ch-preliminary-4.html#ch-preliminary-4-9-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "counterexample "
},
{
  "id": "ch-preliminary-4-9-4",
  "level": "2",
  "url": "ch-preliminary-4.html#ch-preliminary-4-9-4",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": "  A student claims that is prime for all positive whole numbers . Provide a counterexample.  First, if you don't recall, perform a little internet search to get a listing of prime numbers less than 100. Now if we let , then plugging in, we get and all of these are prime. Does that imply the statement is true?  The answer however is no, because the next one: is not prime since . Therefore is a counterexample to this statement.  The moral of this is to be skeptical. Sometimes it take a few tries to find the counterexample.   "
},
{
  "id": "sect-abstraction",
  "level": "1",
  "url": "sect-abstraction.html",
  "type": "Section",
  "number": "1.3",
  "title": "Mathematical Abstraction",
  "body": " Mathematical Abstraction  One of the most important parts of mathematics is the notion of abstraction and as a teacher you need to ensure that you understand how it plays a role in both mathematics and in teaching.  I will start with an example that we will see in the text however you probably understand this already. Let's look at the notion of addition. We have the properties of addition in (additive identity), (additive commutative) and (additive associative).  As student start out the can learn with small whole numbers that this properties hold                   "
},
{
  "id": "sect-calculators",
  "level": "1",
  "url": "sect-calculators.html",
  "type": "Section",
  "number": "1.4",
  "title": "Calculators and Computers",
  "body": " Calculators and Computers  Computers are wonderful things and clearly they have changed many ways of life over the past 30-40 years and of course calculators can do multi-digit arithmetic very quickly and accurately. However, I will spend this section of the book discussing why calculators should not be in the elementary school classroom and that means for both you, a teacher, and the students.  In , we will discuss doing mental math, and in short this is doing operations in your head. There are many techniques that are helpful in doing this and as you (yes you the future teacher) will learn how to do things more quickly in your head than finding that calculator (or cell phone) and entering the numbers in. So in many cases you can do operations more quickly in your head than with a calculator .  There are more important reasons. The idea of number sense is that of having the ability to understand numbers and operations and I hope that you continue to refine your number sense with this book. There are often multiple ways of doing the same problem and it's key as an educator to understand those multiple ways.  I also hope that you will develop a good sense of estimation in this course. People who use numbers often in their profession and teachers of mathematics use estimation all the time to double check things. You should always ask yourself, does this make sense? or is that the right answer? and using estimation can help do this. We will see in section how to improve our estimation skills, which are always done quickly with mental math.  "
},
{
  "id": "sect-mathematical-curiosity",
  "level": "1",
  "url": "sect-mathematical-curiosity.html",
  "type": "Section",
  "number": "1.5",
  "title": "Mathematical Curiosity",
  "body": " Mathematical Curiosity  Another good trait for teachers in that of curiosity. It is important to understand the mathematics at a reasonably deep level or at least understanding problems from multiple points of view.  As an example, we will cover the addition of whole numbers in both and and the revisit addition of fractions and decimals later in the book. You might feel that addition is very straightforward and you got it . However, as you proceed through the chapters look at addition through different lens. We cover many models to understand addition (set models, coin models for example), each which try to point out different aspects of addition.  Try to ask yourself (or others) why something works. Or ask why its important to look at addition in so many different ways.  We are going to cover different number systems (egyptian, mayan and base-5). If we don't teach our students these systems, why do I need to know these.  In short, developing this curiosity will make you a better teacher of mathematics and help your students.  "
},
{
  "id": "sect-hindu-arabic-numbers",
  "level": "1",
  "url": "sect-hindu-arabic-numbers.html",
  "type": "Section",
  "number": "2.1",
  "title": "Decimal Numbers and Models for Arithmetic",
  "body": " Decimal Numbers and Models for Arithmetic     Understand set model and measurement models of whole numbers.    Draw set model and measurement diagrams.    Understand the basics of the egyptian number system and how it differs from the decimal system.    Understand place value systems.    Understand how to develop a coin model and a dot-line-box model for a whole number.      The number system primarily used throughout the world is what is called the Hindu-Arabic Number System or the Standard Decimal System . It uses the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (hence it is a decimal or base-10) and is a place-value system in that the location of a digit in the number represents the value of the number.    Counting    The counting numbers are the numbers that we count things with, that is, . The whole numbers are the counting numbers together with 0 or .    As children learn the beginnings of numbers, they use the counting number to count things (strawberries, peas on a plate, coins). Clearly, as one progresses through school, the whole numbers are just as important and are still used to count things, but they get larger (number of candies in a jar-we'll talk about this later, your monthly salary, number of packages delivered by the post office). In this book, we'll discuss the counting number from small number to large numbers and adapt the arithmetic as needed.   Abstraction of Numbers  A overall goal in mathematics at all levels is that of abstraction and go back to the Preface in the text and reread the section on abstraction and mathematics , which we will see this throughout this book. It is important to understand that as children learn numbers that they first understand numbers as counting real objects, to counting pictures of objects to just numbers themselves.    Set and Measurement Model  There are two contexts in which young children (and most of the rest of us) use numbers: 1) counting objects, 2) measuring things. These two contexts are different and are called the set model and measurement model.     The set model of numbers is used to count discrete objects. The number of objects must be a whole number.    The measurement model is useful for measuring distances, weights, time, lengths, etc. Although in general measuring things can result in non whole numbers, we will start with examples that only uses such numbers.     These models are mainly used in the idea of word problems, which will be discussed more in-depth in Chapter .    The following are examples of set models . The number of   marbles    stickers    toy cars     And the following are example of measurement models .   The length of a piece of string    The height of your sister    The amount (volume) of juice in that glass    The weight of this bag of potatoes       Another important note of difference between examples of set models and measurement models is that set models are for things that can only be whole numbers-you can't (reasonable) cut a marble in half. Those in the measurement model can take on non-whole number (fractional or decimal) values. I drank 6 1\/2 ounces of water with lunch.    Less versus Fewer  This gives me the opportunity to talk a little grammar. Most people use “less” and “fewer” interchangeably. However, less should pertain only to numbers in the measurement model (I have less milk in my glass than Charlie does) and fewer should pertain only to numbers in the set model (I have 10 fewer cookies than Amanda).     Model and Diagrams  As we just discussed models above, I have assumed that we know what a model is. Although there are many different types of models in the world (are you thinking of fashion models?), from a mathematical point of view, a model is a simplified version of a real thing or a representation of that thing.   Set Models  Let's return to the set model above. If we are thinking of 7 pencils, we could draw:   An image of 7 pencils in a single row.    which look quite fancy. In grades K-2, this might appear in a math book, because students at this level would need more concrete examples. As students get more comfortable with abstraction, you could draw   A image of seven dots.    to represent the same thing. With abstraction, however, the actual object doesn't matter and we can represent anything from a set model with dots or stars or other objects that are easier to draw.    Measurement Model Diagrams  Numbers in the measurement model, however, do not fit well with objects. If you drank 10 ounces of juice, it doesn't make sense to draw 10 objects. A great way to represent these is the number line, such as   A number line with the numbers 0, 1, 2, 3, 4, 5 from left to right.    and recall that by convention the numbers increase from left to right.  For example, we could measure the length of a fish found on stackexchange.com    A cartoon fish with a number line below it to help determine the length of the fish.    If we are measuring liquid, it often nice to show as a measuring cup or graduated cylinder like:   A three-dimensional view of a cylinder with a liquid in it. On the outside, the markings 1l, 2l, 3l, 4l and the depth of the water looks like it is 3l.    which is similar to a number line in the vertical direction.    Number Lines  Number lines are a powerful model. They are introduced early in Elementary School, generally when measuring length arises. However, they are useful in college-level mathematics, including Calculus and beyond. Here's a few things:     They can be shown horizontally or vertically as we saw with the liquid above. The classic cartesian plane (also called the -plane) is really both a horizontal and vertical number line that cross when both are 0.    The number lines don't need to have units of 1. For example:   A number line with the numbers 0, 100, 200, 300, 400, 500 marked on the line with the numbers increasing from left to right.    would be a way to show numbers in the hundreds.    To understand the order of numbers, one often uses number lines. There are examples in .    To introduce rounding (see ), it is helpful to use a number line.    One can show negative numbers (see Chapter ) by continuing them to the left. Thus the number line stretching in both directions represents the integers , which include the whole number and the negative counting numbers.    The number line leads easily to the notion of a fraction as will be seen in Chapter . For example, we can use the number line:               Bar Diagrams  Another important model is that of a bar diagram . For example, the fish above can be abstracted further as the following:          and we can also just provide the bar and the length of the bar with:          Bar diagrams are powerful visual models. We will use these often in this book starting in . In fact, with many word problems we will be able to solve some tricky problems with a diagram that typically would need algebra to solve. Bar diagrams appear in all four arithmetic operations as well as with fractions, ratios and percents. In short, they are the work horse of visual diagrams and models.     The Decimal Number System, Egyptian numbers and the Place Value System  So far in this text we have already used numbers in this book, but need to pause a second to explain what we mean. The number system that we in the United States (and pretty much throughout the world) use is called the Hindu-Arabic system and its history is fascinating. We will also learn later in this chapter that there are other number systems.  The Hindu-Arabic number system uses the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and is what is called a place-value system in that the digit represents different values depending on its location. For example 352 means 3 hundreds, 5 tens and 2 ones. For compactness we will call this the decimal system .  This means in the decimal example that the 3 in 532 means “thirty” while the 3 in 352 means “three hundred”. Another way to look at this, is the expanded form of the number or and we will often use this form in the arithmetic algorithms in Chapter .   Egyptian Numbers  There are a lot of other number systems that have been used by humans throughout known history. We'll talk briefly here about Egyptian numbers and section will go over a few more. The Egyptian system dates to about 3000 BCE and uses symbols for powers of 10. For example:   Egyptian Numbers         Name  Symbol\/Glyph  Decimal value    Stroke    Glyph that is a vertical line.     1    Heel    Glyph in the shape of an upside down U.     10    Coil    Glyph in the shape of an coil opening counterclockwise finishing with a tail pointing down.     100    Lotus    Glyph in the shape of an upside down U.     1000    Finger    Glyph in the shape of an upright finger with a slight bend.     10,000     To construct a number, like 4,372 (in decimal), we write 4 lotus symbols, 3 coil symbols, 7 heel symbols and 2 stroke symbols or   An image of egyptian numeric symbols. From left to right there are 4 lotus symbols, 3 coils, 7 heels and 2 strokes.    and the spatial relationship between the symbols doesn't matter. They can go left to right or stacked on top. We'll look at adding and subtracting with Egyptian later. Because the positioning doesn't matter in Egyptian, this is not a place-value system.    Place Value and Ordering  One aspect of place value that can be challenging is that of order numbers. If we have the problem, order the numbers 523, 325, 352, 532 from smallest to largest , it's important to understand place-value. For this, the smallest numbers have the smallest leading digit (representing the hundreds) and then for equal values in the hundreds, determine the same for the tens. In this case, the order from smallest to largest is   A number line is a good way to also order numbers. Once all of the numbers are on the line:   A number line from 300 to 600 marked on the 100s. Also marked from left to right in the correct positions are 325, 352, 523 and 532.    and then it is clear looking at the number line that the numbers from smallest to largest are those from left to right.    Multiplying by powers of ten  Multiplying a number by 10 in decimal is quite easy. We will define multiplication later, but recall that multiplying by 10, is simply adding a zero to the end of the number. That is . Multiplying by 100 or 1000 is just repeating this rule as needed and dividing works nicely as well and we'll see this in depth in .    Advantages of Place Value Systems  We're all familiar with a place-value system, so it may seem strange to think about other systems, but we just saw Egyptian numbers. Another common non-place-value number system is that of Roman Numbers, that we will see in section , which uses I for 1, V for 5, X for 10, etc.  There are many reasons why nearly everyone in modern times uses the decimal place-value system, the Hindu-Arabic numbers.     Equivalent numbers are written using fewer symbols. For example, all numbers less than ten thousand can be written down with 4 or few symbols.    This extends to decimals (we'll see later in the course), such as 123.45678    We can reasonably write down large numbers like 123,456,789,012,345,678.    Easy methods exist to do addition\/subtraction. It is much easier methods to do multiplication, division in place-value systems than others.    Multiplying and Dividing by powers of 10 are easy to do.    Every society around the world uses it.       The Coin Model for Decimal Numbers  The following is an example of the coin model of decimal numbers. At first, one can think of using coins (pennies, dimes, dollar) to represent 1, 10, 100 (powers of 10). For example, the following denotes 317:   An image with coins from left to right. there are three 100 coins, one 10 coin and seven 1-coins.    After developing this model where coins are thought of (or actually used as manipulatives), we can abstract to a chip model. We will do some addition and subtraction with this in the next section and the expand in which develops the standard algorithms for arithmetic. The chip model will give a nice way to understand the algorithms.    The Dots-Line-and-Boxes (DLB) model  A standard introduction to place value in base-10 is to use manipulatives that are similar to the following:   An photo of manipulatives. There are small cubes, sticks, squares of size 10 by 10 and large cubes with 1000 small cubes.   The small blocks, called a unit represent 1, the sticks (called a 10-frame) with length of 10 units, represent ten, the yellow squares represent 100 and the green block represents 1000. The smallest can be represented as         An image of a square.       A image of a vertical strip showing 10 squares       An image of a grid of 10 by 10 squares.       unit  ten-frame  hundred-frame    However, as a student gets older they can abstract these with symbols that are easier to write. The result is often is the dots-lines-and-boxes (DLB) model:            Write 438 and 292 in the DLB model       . This means draw 4 boxes, 3 lines, and 8 dots or     An image of 4 boxes, 3 vertical lines and 8 dots.        . Draw 2 boxes 9 lines and 2 dots.     An image showing two boxes, 9 vertical lines and 2 dots.              These are exercises associated with this section.     Convert the following numbers into the indicated number system.    Convert these to decimal:   An image showing 5 egyptian heels and 8 strokes.     An image showing 4 coils and 3 heels.     An image showing 2 lotus symbols, 3 coils, 4 heels and 6 strokes.       Convert these to Egyptian: 12, 53, 981, 1050      Convert these to decimal: XIII, LIV, CCCXXII, MCMDLXXIV      Convert these to roman: 34, 78, 453, 1678, 2945       For each of the following, write the decimal number associated with the following:     five thousand, three hundred, fifty-one      three million, forty-seven thousand, two hundred five.      seventy-six billion, two-hundred thirty-nine million, twenty-seven thousand, three hundred.      five quadrillion, ninety-one million, forty.       Write each of the following decimal numbers in word form:     374      14,045      7,400      3,040,700      382,983,239,126       Write the following decimal numbers using coins.     38      462      1,602       Draw the appropriate portion of the number line and place the following numbers on the number line: 3802,3828, 3245, 3542      Order the following from smallest to largest: 546,465,545,654,645      What is the largest 4-digit number that can be written with the digits 3,0,8,5? What if each of the digits had to be used exactly once? Explain your answer.      This problem compares multiplying in decimal versus egyptian.     Multiply   An image showing 2 egyptian coils, 4 heels and 6 strokes.    by 10 and write in egyptian.      Multiply by 10 and write in decimal.      Fill in the blanks: Multiplying an egpytian number by 10 shifts each of the symbols according to the rule    .      Fill in the blank: Multiplying a decimal number by 10, one shifts each digit and inserting a in the ones place.       Group Work for Decimal Numbers     Why might the decimal system that we use today be the number system that we have today? Explain your answer and include the compactness of writing a number (how many glyphs is needed to write a number) as well as the simplicity of performing addition.      How is the Egyptian system similar to our decimal system? How is it different?      In this section, the book claims that the DLB (dots-lines-boxes) model is the same as the Egyptian system. Do you this this is true? Explain.      Consider the number .     Write the number using words.      Create a chip model for the number.      Find and explain how to multiply any whole number by 10.      Write the chip model for the number in (c). How is it similar to the chip model in (b) and how is it different?       "
},
{
  "id": "sect-hindu-arabic-numbers-2",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#sect-hindu-arabic-numbers-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "   Understand set model and measurement models of whole numbers.    Draw set model and measurement diagrams.    Understand the basics of the egyptian number system and how it differs from the decimal system.    Understand place value systems.    Understand how to develop a coin model and a dot-line-box model for a whole number.    "
},
{
  "id": "sect-hindu-arabic-numbers-4-2",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#sect-hindu-arabic-numbers-4-2",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  The counting numbers are the numbers that we count things with, that is, . The whole numbers are the counting numbers together with 0 or .   "
},
{
  "id": "sect-hindu-arabic-numbers-4-5-5",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#sect-hindu-arabic-numbers-4-5-5",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  The following are examples of set models . The number of   marbles    stickers    toy cars     And the following are example of measurement models .   The length of a piece of string    The height of your sister    The amount (volume) of juice in that glass    The weight of this bag of potatoes      "
},
{
  "id": "fig-number-line-fractions",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-number-line-fractions",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": "       "
},
{
  "id": "fig-bar-diagram-simple",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-bar-diagram-simple",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": "       "
},
{
  "id": "fig-bar-diagram-01",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-bar-diagram-01",
  "type": "Figure",
  "number": "2.1.5",
  "title": "",
  "body": "       "
},
{
  "id": "sect-ha-numbers-3",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#sect-ha-numbers-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decimal system "
},
{
  "id": "sect-ha-numbers-5-3",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#sect-ha-numbers-5-3",
  "type": "Table",
  "number": "2.1.6",
  "title": "Egyptian Numbers",
  "body": " Egyptian Numbers         Name  Symbol\/Glyph  Decimal value    Stroke    Glyph that is a vertical line.     1    Heel    Glyph in the shape of an upside down U.     10    Coil    Glyph in the shape of an coil opening counterclockwise finishing with a tail pointing down.     100    Lotus    Glyph in the shape of an upside down U.     1000    Finger    Glyph in the shape of an upright finger with a slight bend.     10,000    "
},
{
  "id": "fig-dlb",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-dlb",
  "type": "Figure",
  "number": "2.1.7",
  "title": "",
  "body": "       "
},
{
  "id": "sect-ha-numbers-10-8",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#sect-ha-numbers-10-8",
  "type": "Example",
  "number": "2.1.8",
  "title": "",
  "body": "  Write 438 and 292 in the DLB model       . This means draw 4 boxes, 3 lines, and 8 dots or     An image of 4 boxes, 3 vertical lines and 8 dots.        . Draw 2 boxes 9 lines and 2 dots.     An image showing two boxes, 9 vertical lines and 2 dots.         "
},
{
  "id": "exercises--2",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--2",
  "type": "Exercise",
  "number": "2.1.4.1",
  "title": "",
  "body": "  Convert the following numbers into the indicated number system.    Convert these to decimal:   An image showing 5 egyptian heels and 8 strokes.     An image showing 4 coils and 3 heels.     An image showing 2 lotus symbols, 3 coils, 4 heels and 6 strokes.       Convert these to Egyptian: 12, 53, 981, 1050      Convert these to decimal: XIII, LIV, CCCXXII, MCMDLXXIV      Convert these to roman: 34, 78, 453, 1678, 2945    "
},
{
  "id": "exercises--3",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--3",
  "type": "Exercise",
  "number": "2.1.4.2",
  "title": "",
  "body": "  For each of the following, write the decimal number associated with the following:     five thousand, three hundred, fifty-one      three million, forty-seven thousand, two hundred five.      seventy-six billion, two-hundred thirty-nine million, twenty-seven thousand, three hundred.      five quadrillion, ninety-one million, forty.    "
},
{
  "id": "exercises--4",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--4",
  "type": "Exercise",
  "number": "2.1.4.3",
  "title": "",
  "body": "  Write each of the following decimal numbers in word form:     374      14,045      7,400      3,040,700      382,983,239,126    "
},
{
  "id": "exercises--5",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--5",
  "type": "Exercise",
  "number": "2.1.4.4",
  "title": "",
  "body": "  Write the following decimal numbers using coins.     38      462      1,602    "
},
{
  "id": "exercises--6",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--6",
  "type": "Exercise",
  "number": "2.1.4.5",
  "title": "",
  "body": "  Draw the appropriate portion of the number line and place the following numbers on the number line: 3802,3828, 3245, 3542   "
},
{
  "id": "exercises--7",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--7",
  "type": "Exercise",
  "number": "2.1.4.6",
  "title": "",
  "body": "  Order the following from smallest to largest: 546,465,545,654,645   "
},
{
  "id": "exercises--8",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--8",
  "type": "Exercise",
  "number": "2.1.4.7",
  "title": "",
  "body": "  What is the largest 4-digit number that can be written with the digits 3,0,8,5? What if each of the digits had to be used exactly once? Explain your answer.   "
},
{
  "id": "exercises--9",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--9",
  "type": "Exercise",
  "number": "2.1.4.8",
  "title": "",
  "body": "  This problem compares multiplying in decimal versus egyptian.     Multiply   An image showing 2 egyptian coils, 4 heels and 6 strokes.    by 10 and write in egyptian.      Multiply by 10 and write in decimal.      Fill in the blanks: Multiplying an egpytian number by 10 shifts each of the symbols according to the rule    .      Fill in the blank: Multiplying a decimal number by 10, one shifts each digit and inserting a in the ones place.    "
},
{
  "id": "ws-decimal-numbers-2-1",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#ws-decimal-numbers-2-1",
  "type": "Worksheet Exercise",
  "number": "2.1.5.1",
  "title": "",
  "body": "  Why might the decimal system that we use today be the number system that we have today? Explain your answer and include the compactness of writing a number (how many glyphs is needed to write a number) as well as the simplicity of performing addition.   "
},
{
  "id": "ws-decimal-numbers-2-2",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#ws-decimal-numbers-2-2",
  "type": "Worksheet Exercise",
  "number": "2.1.5.2",
  "title": "",
  "body": "  How is the Egyptian system similar to our decimal system? How is it different?   "
},
{
  "id": "ws-decimal-numbers-2-3",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#ws-decimal-numbers-2-3",
  "type": "Worksheet Exercise",
  "number": "2.1.5.3",
  "title": "",
  "body": "  In this section, the book claims that the DLB (dots-lines-boxes) model is the same as the Egyptian system. Do you this this is true? Explain.   "
},
{
  "id": "ws-decimal-numbers-2-4",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#ws-decimal-numbers-2-4",
  "type": "Worksheet Exercise",
  "number": "2.1.5.4",
  "title": "",
  "body": "  Consider the number .     Write the number using words.      Create a chip model for the number.      Find and explain how to multiply any whole number by 10.      Write the chip model for the number in (c). How is it similar to the chip model in (b) and how is it different?    "
},
{
  "id": "sect-addition",
  "level": "1",
  "url": "sect-addition.html",
  "type": "Section",
  "number": "2.2",
  "title": "Addition",
  "body": " Addition     Know the definition of addition with the names of the terms.    Understand the properties of addition.    Understand some thinking strategies for addition.    Know addition with place values.    Use models in performing addition.      Addition is the mathematical operation that combines two numbers, called the summands or addends . The result is called the sum . For example,   A number line shows this quite nicely. If one starts at 3 and makes 5 hops to the right, results in 8 as shown:   A number line from 0 to 10 showing 5 hops from 3 to 4 up to 8.    This shows that .   Set Model  Addition in the set model usually entails if there are two collections of objects and one wants the total number of objects.    You have 8 apples and your friend has 5 apples. How many apples do you have together?    The answer is the sum and a model of this could be   An image of 8 apples surrounded by a dashed line and 5 separate apples surrounded by a dashed line.    But of course, as the student's abstraction increases, using circles or stars would be fine as well.      Measurement Model  Addition in the measurement model involves two measurements and you want to know the total measurement of the two.    A recipe for cookies calls for 4 cups of flour. A recipe for cake calls for 3 cups of flour. How much flour do you need to for both recipes?     A number line from 0 to 10. There are 3 hops from 4 to 5 to 6 to 7.    and the result is 7, so you would need 7 cups of flour in total.       Properties of Addition  There are three properties of addition that you probably know just by understanding addition.    For any whole numbers, , each of the following hold:     Additive Identity       Commutative Property       Associative Property          The additive identity property shows that adding 0 to any number doesn't change the number. This make a lot of sense after understanding the concept of 0. The commutative property shows that the sum of two numbers is independent of the order of the two numbers. The associative property relies on recalling that when parentheses are present, that one must do the operation inside the parentheses first. This shows if you add the first two then add the result to the 3, the sum is the same as adding the last two, then adding to the first.    What property is being used in each of the following?                .         This is the commutative property . Notice that there are three numbers, but the first two swap places.    This is the associative property . Notice that we have changed the order of operations.    This is the additive identity.        Any-Order Property of Addition   The sum can be done in any order.    We won't present a formal proof here, but this is a consequence of the the commutative and associative properties.   Extended Any-Order Property   The sum of any number of addends can be done in any order.    Again, no formal proof will be done here but this is a consequence of a number of applications of the commutative and associative properties. The following show an example.    The numbers: can be added in any order. For example: are all valid ways to add the 4 numbers.    In Chapter , we will use this property to our advantage to rearrange the sum of numbers to pair up number that we call compatible in which the result is easier to compute.    Thinking Strategies for Addition  It is a good skill to have different ways of thinking about mathematical operations. In this section we present some ways to think about addition.   Number Bonds  A number bond is useful for showing the relationship between two addends (the ends) and the sum (in the center). The following shows .   The number 7 in a box to the left. Above and right connected by a line is the number 3 in a box. Below and right of the 7 and connected by a line is the number 4 in a box.    This is a nice way to visualize addition and we will see this below with four-fact families.    Counting On  When beginning to add, like , the answer is easily found by starting at the number 5 (in the counting sequence), then counting two more, ”6,7” arriving at the answer 7. This can be done with young students using fingers, but also works well with the number line, like:   A number line from 0 to 10. There are two hops from 5 to 6 to 7 from left to right.    This works fine with adding 1,2,3, just a few to a number, but can be extended by counting by tens as well. Consider . We can start at , add two 10s to get to 33, then add 4 to get to 37. This can be seen with the following number line:   A number line from 0 to 40. There is a hop from 13 to 23 and a hop from 23 to 33, then 4 hops to 37.    And from the number line, you can see the result is 37.    Tens Combination  Two numbers whose sum is 10 is crucial to do arithmetic operations at all levels. For example, since the numbers 4 and 6 are a tens combination and is shown in the number bond   A number bond image with 10 in a box, then above right is 6 and below right is 4.    How many pairs are there that add to 10?     Addition and Place Value  There are multiple approaches to understanding addition and place value. First, using the expanded form of a number, then a chip model and finally the DLB model.   Expanded Form:  As seen above, an addition like is relatively straightforward once a student understands place value. If we used expanded form on these:     This gets a bit more more complicated when the total number of ones (pennies) exceeds 9. For example, can be written as   The writing of is called composing a ten or bundling as we will see with models below. Notice the way that we write these operations. We start with the original problem, and link each step with an equals sign. This is an important skill to develop and we will work on this in . Until we get there, pay attention to the steps and how they are written.     Coin Model  A coin model is used to represent a whole number with 1-coins (like pennies) and 10-coins (like dimes). Here we will see how to combine (add) the two addend. In later sections, we will see coin models with larger numbers.  We can use a coin model to find as   An image of three 1-coins and one 10-coins to the left and four 1-coins and two 10-coins to the right.    which can be interpreted as 1 dime (10 cents) and 3 pennies (each 1 cent) plus 2 dimes and 4 pennies. The result is 3 dimes and 7 pennies or 37¢.  Again, as we saw above, within one denomination, once you exceed 9, you must bundle. The coin model for is:   An image of five 1-coins and two 10-coins to the left and eight 1-coins and three 10-coins to the right.    The bundling occurs when we take 10 pennies and exchange them for a dime. That is we bundle 10 pennies for a higher denomination coin (a dime).   The image from above with five 1-coins and two 10-coins to the left and eight 1-coins and three 10-coins to the right. 10 of the 1-coins are in a box and crossed out. There is an arrow from the box to a new 10-coin.    And it should be clear to see that what is left (not crossed out) is 6 dimes and 2 pennies or 62.    Dots Lines and Boxes (DLB) Model  Alternatively, we can use the DLB (dots, lines and boxes) model seen above. We can write 25 as two lines and 5 dots and 37 as 3 lines and 7 dots.   An image with 2 vertical lines and 5 dots to the left and 3 vertical lines and 7 dots to the right.    and we can rearrange the lines and dots to get:   An image of 5 vertical lines and then 10 dots and then two dots.    and in this case, we bundle ten dots to get a line or   An image of 6 vertical lines and two dots.    which again shows 6 lines and 2 dots or 62.  These two models are equivalent, however crossing out and bundling is hard to see visually with the DLB model, however they are equivalent.      The following are exercises that can be done with the content in this section.     For each of the following addition problems, show a number line and counting on.                    In each of the following addition problems, show the expanded form as in                     In each of the following addition problems, show the coin model as in                     What fundamental difference is there between Problem 2a)\/3a) and 2b)\/3b)? How is it demonstrated in the expanded form? How is it demonstrated in the coin model.      Which thinking strategy or arithmetic property(ies) is(are) used in the following?                   28 + (72 + 46) = 46 + 100       One can add numbers which differ by 2 by a relate to double strategy: take the average and double. For example, . Use that strategy to find the following sums.                                  The following show common examples of inappropriate or incorrect uses of the symbol ``=''. First, explain the error and then correct each statement.     A student writes Stephanie $2 .      If the question says Write 4.8203 correct to one decimal place with the answer: 4.8203=4.8.      The question says Simplify and the student writes: .       Group Work for Addition     Identify which thinking strategy\/arithmetic property is used.                                  Explain why arithmetic properties and thinking strategies are important from an educators point of view. (You don't need to give a \"textbook answer\" to this, just give me some thoughts.)      Create a simple word problem (grade 1 or 2) that illustrates using a measurement model.      For each of the following, create simple word problems that illustrate the given subtraction using the given interpretation and model:      using part-whole and a set model.       using take-away and a set model.       using and a set model.       "
},
{
  "id": "sect-addition-2",
  "level": "2",
  "url": "sect-addition.html#sect-addition-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "   Know the definition of addition with the names of the terms.    Understand the properties of addition.    Understand some thinking strategies for addition.    Know addition with place values.    Use models in performing addition.    "
},
{
  "id": "sect-addition-3-5-3",
  "level": "2",
  "url": "sect-addition.html#sect-addition-3-5-3",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": "  You have 8 apples and your friend has 5 apples. How many apples do you have together?    The answer is the sum and a model of this could be   An image of 8 apples surrounded by a dashed line and 5 separate apples surrounded by a dashed line.    But of course, as the student's abstraction increases, using circles or stars would be fine as well.   "
},
{
  "id": "sect-addition-3-6-3",
  "level": "2",
  "url": "sect-addition.html#sect-addition-3-6-3",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  A recipe for cookies calls for 4 cups of flour. A recipe for cake calls for 3 cups of flour. How much flour do you need to for both recipes?     A number line from 0 to 10. There are 3 hops from 4 to 5 to 6 to 7.    and the result is 7, so you would need 7 cups of flour in total.   "
},
{
  "id": "prop-addition",
  "level": "2",
  "url": "sect-addition.html#prop-addition",
  "type": "Property",
  "number": "2.2.3",
  "title": "",
  "body": "  For any whole numbers, , each of the following hold:     Additive Identity       Commutative Property       Associative Property         "
},
{
  "id": "sect-add-props-5",
  "level": "2",
  "url": "sect-addition.html#sect-add-props-5",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  What property is being used in each of the following?                .         This is the commutative property . Notice that there are three numbers, but the first two swap places.    This is the associative property . Notice that we have changed the order of operations.    This is the additive identity.      "
},
{
  "id": "lem-any-order-add",
  "level": "2",
  "url": "sect-addition.html#lem-any-order-add",
  "type": "Lemma",
  "number": "2.2.5",
  "title": "Any-Order Property of Addition.",
  "body": " Any-Order Property of Addition   The sum can be done in any order.   "
},
{
  "id": "cor-extended-any-order-add",
  "level": "2",
  "url": "sect-addition.html#cor-extended-any-order-add",
  "type": "Corollary",
  "number": "2.2.6",
  "title": "Extended Any-Order Property.",
  "body": " Extended Any-Order Property   The sum of any number of addends can be done in any order.   "
},
{
  "id": "sect-add-props-10",
  "level": "2",
  "url": "sect-addition.html#sect-add-props-10",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": "  The numbers: can be added in any order. For example: are all valid ways to add the 4 numbers.   "
},
{
  "id": "sect-add-strategies-5-2",
  "level": "2",
  "url": "sect-addition.html#sect-add-strategies-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tens combination "
},
{
  "id": "sect-addition-place-value-3-5",
  "level": "2",
  "url": "sect-addition.html#sect-addition-place-value-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "composing a ten bundling "
},
{
  "id": "sect-addition-place-value-4-8",
  "level": "2",
  "url": "sect-addition.html#sect-addition-place-value-4-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bundle "
},
{
  "id": "exercises-sect-addition-2",
  "level": "2",
  "url": "sect-addition.html#exercises-sect-addition-2",
  "type": "Exercise",
  "number": "2.2.4.1",
  "title": "",
  "body": "  For each of the following addition problems, show a number line and counting on.                 "
},
{
  "id": "exercises-sect-addition-3",
  "level": "2",
  "url": "sect-addition.html#exercises-sect-addition-3",
  "type": "Exercise",
  "number": "2.2.4.2",
  "title": "",
  "body": "  In each of the following addition problems, show the expanded form as in                  "
},
{
  "id": "exercises-sect-addition-4",
  "level": "2",
  "url": "sect-addition.html#exercises-sect-addition-4",
  "type": "Exercise",
  "number": "2.2.4.3",
  "title": "",
  "body": "  In each of the following addition problems, show the coin model as in                  "
},
{
  "id": "exercises-sect-addition-5",
  "level": "2",
  "url": "sect-addition.html#exercises-sect-addition-5",
  "type": "Exercise",
  "number": "2.2.4.4",
  "title": "",
  "body": "  What fundamental difference is there between Problem 2a)\/3a) and 2b)\/3b)? How is it demonstrated in the expanded form? How is it demonstrated in the coin model.   "
},
{
  "id": "exercises-sect-addition-6",
  "level": "2",
  "url": "sect-addition.html#exercises-sect-addition-6",
  "type": "Exercise",
  "number": "2.2.4.5",
  "title": "",
  "body": "  Which thinking strategy or arithmetic property(ies) is(are) used in the following?                   28 + (72 + 46) = 46 + 100    "
},
{
  "id": "exercises-sect-addition-7",
  "level": "2",
  "url": "sect-addition.html#exercises-sect-addition-7",
  "type": "Exercise",
  "number": "2.2.4.6",
  "title": "",
  "body": "  One can add numbers which differ by 2 by a relate to double strategy: take the average and double. For example, . Use that strategy to find the following sums.                               "
},
{
  "id": "exercises-sect-addition-8",
  "level": "2",
  "url": "sect-addition.html#exercises-sect-addition-8",
  "type": "Exercise",
  "number": "2.2.4.7",
  "title": "",
  "body": "  The following show common examples of inappropriate or incorrect uses of the symbol ``=''. First, explain the error and then correct each statement.     A student writes Stephanie $2 .      If the question says Write 4.8203 correct to one decimal place with the answer: 4.8203=4.8.      The question says Simplify and the student writes: .    "
},
{
  "id": "ws-addition-2-1",
  "level": "2",
  "url": "sect-addition.html#ws-addition-2-1",
  "type": "Worksheet Exercise",
  "number": "2.2.5.1",
  "title": "",
  "body": "  Identify which thinking strategy\/arithmetic property is used.                               "
},
{
  "id": "ws-addition-2-2",
  "level": "2",
  "url": "sect-addition.html#ws-addition-2-2",
  "type": "Worksheet Exercise",
  "number": "2.2.5.2",
  "title": "",
  "body": "  Explain why arithmetic properties and thinking strategies are important from an educators point of view. (You don't need to give a \"textbook answer\" to this, just give me some thoughts.)   "
},
{
  "id": "ws-addition-2-3",
  "level": "2",
  "url": "sect-addition.html#ws-addition-2-3",
  "type": "Worksheet Exercise",
  "number": "2.2.5.3",
  "title": "",
  "body": "  Create a simple word problem (grade 1 or 2) that illustrates using a measurement model.   "
},
{
  "id": "ws-addition-2-4",
  "level": "2",
  "url": "sect-addition.html#ws-addition-2-4",
  "type": "Worksheet Exercise",
  "number": "2.2.5.4",
  "title": "",
  "body": "  For each of the following, create simple word problems that illustrate the given subtraction using the given interpretation and model:      using part-whole and a set model.       using take-away and a set model.       using and a set model.    "
},
{
  "id": "sect-subtraction",
  "level": "1",
  "url": "sect-subtraction.html",
  "type": "Section",
  "number": "2.3",
  "title": "Subtraction",
  "body": " Subtraction     Know the definition of subtraction with the names of the terms.    Understand the interpretations of subtraction.    Use diagrams to explain subtraction.    Understand some thinking strategies for subtraction.    Know subtraction with place values.    Use coin models in performing addition.      We now turn to subtraction, which is closely tied to addition.    Subtraction is defined as a missing addend. That is is the number such that . The number is called the minuend , the number is the subtrahend and the number is called the difference .    As an example, the number is the number that fits the box: or 5. Using the terminology above:     Subtraction Interpretations:  There are a few standard diagrams associated with subtractions, however we need to define some interpretations before diagrams. Subtraction is used in many ways to solve different types of problems and it is important to understand all of the types with examples. The following show the standard 3 ways of interpreting subtraction with examples from both set and measurement models.   Part-Whole Interpretation  A part of a set or quantity is specified and we want to know how much is needed to make it whole. Find the missing part.     Set Model  There are 12 pieces of fruit (apples and oranges). If 5 are apples, then how many are oranges?    Measurement Model  A ribbon is 13 inches long. Frida cuts the ribbon and takes 5 inches. How long is the remaining part?       Takeaway Interpretation  Remove objects from a set or decrease the measurement by a specified amount.     Set Model  Eve has a basket of 15 pieces of candy. She gives 6 pieces of candy to a friend. How many pieces of candy does Eve have left?    Measurement Model  There are 10 gallons of punch for a party. The guests drank 8 gallons of punch. How many gallons of punch are left?       Comparison Interpretation  Compare two different sets or measurements and ask how much more or less or fewer is one than the other.     Set Model  Zoë has 8 balls and Abby has 5 balls. How many more balls does Zoë have than Abby?    Measurement Model  José is 56 inches tall and Julia is 53 inches tall. How much taller is José?      For each of these the answer is the difference between the larger and smaller numbers.    Subtraction Diagrams for Set Models  Using diagrams to understand subtraction is quite helpful. We first start with set model versions of the three interpretations above:     Part-Whole  For the part-whole interpretation, we can draw the two different objects. The following shows and a possible word problem that this shows is: There are 13 pieces of fruit (either oranges or apples). If there are five apples, how many oranges are there?    An image of 8 oranges on the left and 5 apples on the right.    This is a bit hard to envision for part-whole because you need to draw the minuend first and then rest you need to calculate, which is not in the spirit of diagrams.    Takeaway  For the take-way interpretation, we draw the total number of objects (minuend) and cross out the subtrahend. An example of is below and a word problem that describes this could be: James has 12 lemons. He give 5 to his sister. How many lemons does James have left?    An image of 12 lemons. Five of the lemons are crossed out.    And note that the difference (answer) is the number of objects that are not crossed out.    Comparison  For the comparison interpretation, you need to be careful to ensure that the diagram shows “how many more”. Here's another example with fruit showing . A possible word problem describing this could be Natalie has 9 cherries and 6 apples. How many more cherries than apples does Natalie have?    A row of 9 cherries and below a row of 6 apples. The three cherries that stick out to the right of the apples are in a box.         Subtraction Diagrams for Measurement Models  Since measurement model is applicable to problems with non-integer numbers, we'll use appropriate diagrams for such numbers. This includes number lines and bar diagrams. The following are such model for the three subtraction interpretations.     Part-Whole   . As an example, consider the example: Alice has 8 total pounds of sugar (white and brown). 3 pounds of that are brown sugar. How much is white sugar?   Recall that this means the “whole” is 8 and the part is 3 and we are looking for the remainder. We can draw this with the following:   A number line from 0 to 10. There is a bar above the line. The left side of the bar goes from 0 to 3 and the right side from 3 to 8. Above the right side is a question mark denoting the length of this side.    Alternatively, you one can just use the bar diagram without the number line as:   A bar divided into two parts. The left side has a 3 denoted above and the right side has a ? above. Below the bar indicates that the total length is 8.      Takeaway  The operation with the take-away interpretation can be thought of starting with the whole (as measurement) and remove the minuend. Consider the example: Pedro has a rope of length 8 meters and cuts off a piece 3 meters in length to give to his friend. How much rope does Pedro have left?   We can do this on a number line with   A number line from 0 to 10. There is a arrow from 8 to 5 with a 3 above the arrow.    and the number that you land on is 5 (the difference).    Comparison  Again, we will show . For comparison, two different measurements are given and we are asked how much larger, longer, smaller, etc. one is than the other. Consider the example: Joey's cat weighs 8 pounds and Jill's kitten weight 3 pounds. How much more does Joey's cat weigh than Jill's? .  Stacked bar diagrams work quite well for these, with the two quantities as the length of the two bars:   A stacked bar diagram with horizontal bars. The top bar is denoted length 8 and the bottom denoted 3. The gap in the difference of lengths is denoted with a ?         Thinking Strategies  We consider some basic thinking strategies when performing subtraction. Many of these fall into the realm of mental math, in which one does the operation in one's head.     Counting Down  If the subtrahend is a small number, then counting down is an effective way to calculate a subtraction. For example, starts at the number 7, counts backwards two spots to arrive at 5. One can think of counting down on fingers or better yet, on a number line, like   A number line from 0 to 10. There are two hops from right to left from 7 to 6 to 5.    When the numbers get larger (especially the subtrahend), there are some additional strategies. Consider . Instead of counting down 24 individual numbers, one can first count down by two 10s and then count down by 4 ones.   A number line from 30 to 60. There is a right to left hop from 58 to 48 then another from 48 to 38. There are four shop hops from 38 to 37 to 36 to 35 to 34.    Resulting in 34 for the answer.    Counting Up  When the subtrahend is larger but close in value to the minuend, counting up is a better strategy. For example, can be found by starting at 14 and counting up to 17, with the result of 3 steps. is to count up from 14 to 17 (for 3), the answer   A number line from 10 to 20. There are 3 left to right hops from 14 to 15 to 16 to 17.    Similar to counting down, if we have a problem like , we start at 15 and count up to 27. However, first count up by 10 to 25, then up 2 to 27. The answer is 12. Visually, we can see this with:   A number line from 0 to 30. There is a hop from 15 to 25, then two shorter hops from 25 to 26 to 27.      Four-Fact Families  Combining the relationship between addition, subtraction and the commutative property of addition, results in what are termed four-fact families . For example,   and the number bond that shows all 4 of these:   A number bond diagram with an 8 boxed connected to a 3 (above right) and 5 (below right) both in boxes.         Subtraction and Place Value  Although we just saw that compensation can often make subtraction problems easier, in general with larger numbers, we need to understand how place value works with subtraction. Some problems, like is straightforward in that if we write this in expanded form as where basically the tens are subtracted and the ones are subtracted. However, consider the example doesn't work so well because the ones results in a negative number. In this case, we need to decompose a ten like:       Subtraction with the chip\/coin model  Let's look at the subtraction using the chip\/coin model. We start with the minuend drawn as coins first and we'll use the takeaway interpretation and remove the subtrahend.   A diagram showing a row of six 10-coins and below a row of seven 1-coins.    We now cross out (takeaway) the minuend or .   A diagram showing a row of six 10-coins and below a row of seven 1-coins.    And the coins\/chips that are left show two 10-coins and five 1-coin or 25. The next example shows how to handle when the ones digit of the minuend is smaller than the ones digit of the subtrahend.    Use a coin\/chip model to demonstrate     We will see in a chip\/coin model as a take-away model in that the minuend is drawn as coins\/chips:   A diagram showing a row of six 10-coins and below a row of three 1-coins.    and we'd like take-away 3 tens and 7 ones, however, there are not each ones. To show decomposing a ten or unbundling a 10, cross out one 10 and write 10 ones:   The diagram above with a 10-coin crossed out with an arrow to ten 1-coins in a box.    and note that this unbundling process shows that a ten has been changed for 10 ones. The total number in the diagram is still 63. Now, we subtract 37 by taking-away 3 tens and 7 ones. We do this by crossing out this.       which shows 2 tens and 6 ones or 26.      Subtraction with the DLB model  We can also use the DLB model to do subtraction. Much like the chip model above, we use a take-away interpretation and cross out the number in the subtrahend. The first example is and we start with writing the DLB model for the minuend:       and then we cross out 4 lines and 2 dots.       And the remaining is 2 lines and 5 dots which represents 25.     The following are exercises that can be done with the content in this section.     For each of the following, create a simple subtraction word problem with both minuend and subtrahend between 5 and 19.     Takeaway set model      Comparison measurement model.      Part-whole measurement model.      Comparison set model.       For Problem 1a) and 1d) produce diagrams that show the result. Use the examples in as examples. If the objects you used in your problems are easily drawn, then use those, otherwise use more abstract objects like dots, circles or stars.      In the previous problem, why weren't you asked to produce similar diagrams for problems 1b) and 1c)?      For Problem 1b) and 1c) produce diagrams that show the result. Use the examples in as examples. Make sure that you diagram has a number line and bars if appropriate.      The following parts illustrate interpretations of .     Illustrate the take-away interpretation for using a coin model. If needed, show any unbundling (exchanging a dime for 10 pennies). Recall for take-way, do not show the subtrahend on the diagram, just cross out the terms to show this.      Illustrate the counting-up method for by showing two hops on the number line.      Illustrate the comparison interpretation for by using a set model (use pennies and dimes for both subtrahend and minuend and ask a question. For comparison, do not cross out anything.)      Illustrate the comparison interpretation for by using bar diagram. (No question is necessary, but put a ? on the diagram to represent the difference.)       This problem shows a number of ways to explain using models     Illustrate the take-away interpretation for using a set model. (Draw 5 dimes and 4 pennies and cross some out. If needed exchange dimes for pennies or vice versa. Note: for take-away, do not show the subtrahend, just cross out the appropriate ones.)      Illustrate the counting-up method for by showing two hops on the number line.      Illustrate the comparison interpretation for by using a set model (use pennies and dimes for both subtrahend and minuend and ask a question. For comparison, do not cross out anything.)      Illustrate the comparison interpretation for by using bar diagram. (No question is necessary, but put a ? on the diagram to represent the difference.)       Make up first grade word problems of the following types:     The take-away interpretation for finding .      The part-whole interpretation for .      The comparison interpretation for .       Group Work for Subtraction     Explain the difference between the three types of subtraction interpretations: part-whole, takeaway and comparison.      For each of the following, produce an appropriate diagram. (Note: there may be multiply ways of answering a problem. )     Show using a counting down measurement model.      Show use a part-whole set model.      Show using the takeaway measurement model.       For each of the following, produce a simple word problem that indicates the given interpretation model.      using a part-whole measurement model       using a comparison set model.       using a takeaway set model.         Each of the following is a thinking strategy used for subtraction. Explain each one.      using counting down.       using counting up.       Show using a coin model. Clearly show the unbundling needed.      "
},
{
  "id": "sect-subtraction-2",
  "level": "2",
  "url": "sect-subtraction.html#sect-subtraction-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "   Know the definition of subtraction with the names of the terms.    Understand the interpretations of subtraction.    Use diagrams to explain subtraction.    Understand some thinking strategies for subtraction.    Know subtraction with place values.    Use coin models in performing addition.    "
},
{
  "id": "sect-subtraction-3-2",
  "level": "2",
  "url": "sect-subtraction.html#sect-subtraction-3-2",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  Subtraction is defined as a missing addend. That is is the number such that . The number is called the minuend , the number is the subtrahend and the number is called the difference .   "
},
{
  "id": "sect-thinking-strategies-subtraction-3",
  "level": "2",
  "url": "sect-subtraction.html#sect-thinking-strategies-subtraction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "four-fact families "
},
{
  "id": "sect-subtraction-9-7",
  "level": "2",
  "url": "sect-subtraction.html#sect-subtraction-9-7",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  Use a coin\/chip model to demonstrate     We will see in a chip\/coin model as a take-away model in that the minuend is drawn as coins\/chips:   A diagram showing a row of six 10-coins and below a row of three 1-coins.    and we'd like take-away 3 tens and 7 ones, however, there are not each ones. To show decomposing a ten or unbundling a 10, cross out one 10 and write 10 ones:   The diagram above with a 10-coin crossed out with an arrow to ten 1-coins in a box.    and note that this unbundling process shows that a ten has been changed for 10 ones. The total number in the diagram is still 63. Now, we subtract 37 by taking-away 3 tens and 7 ones. We do this by crossing out this.       which shows 2 tens and 6 ones or 26.   "
},
{
  "id": "exercises-sect-subtraction-2",
  "level": "2",
  "url": "sect-subtraction.html#exercises-sect-subtraction-2",
  "type": "Exercise",
  "number": "2.3.8.1",
  "title": "",
  "body": "  For each of the following, create a simple subtraction word problem with both minuend and subtrahend between 5 and 19.     Takeaway set model      Comparison measurement model.      Part-whole measurement model.      Comparison set model.    "
},
{
  "id": "exercises-sect-subtraction-3",
  "level": "2",
  "url": "sect-subtraction.html#exercises-sect-subtraction-3",
  "type": "Exercise",
  "number": "2.3.8.2",
  "title": "",
  "body": "  For Problem 1a) and 1d) produce diagrams that show the result. Use the examples in as examples. If the objects you used in your problems are easily drawn, then use those, otherwise use more abstract objects like dots, circles or stars.   "
},
{
  "id": "exercises-sect-subtraction-4",
  "level": "2",
  "url": "sect-subtraction.html#exercises-sect-subtraction-4",
  "type": "Exercise",
  "number": "2.3.8.3",
  "title": "",
  "body": "  In the previous problem, why weren't you asked to produce similar diagrams for problems 1b) and 1c)?   "
},
{
  "id": "exercises-sect-subtraction-5",
  "level": "2",
  "url": "sect-subtraction.html#exercises-sect-subtraction-5",
  "type": "Exercise",
  "number": "2.3.8.4",
  "title": "",
  "body": "  For Problem 1b) and 1c) produce diagrams that show the result. Use the examples in as examples. Make sure that you diagram has a number line and bars if appropriate.   "
},
{
  "id": "exercises-sect-subtraction-6",
  "level": "2",
  "url": "sect-subtraction.html#exercises-sect-subtraction-6",
  "type": "Exercise",
  "number": "2.3.8.5",
  "title": "",
  "body": "  The following parts illustrate interpretations of .     Illustrate the take-away interpretation for using a coin model. If needed, show any unbundling (exchanging a dime for 10 pennies). Recall for take-way, do not show the subtrahend on the diagram, just cross out the terms to show this.      Illustrate the counting-up method for by showing two hops on the number line.      Illustrate the comparison interpretation for by using a set model (use pennies and dimes for both subtrahend and minuend and ask a question. For comparison, do not cross out anything.)      Illustrate the comparison interpretation for by using bar diagram. (No question is necessary, but put a ? on the diagram to represent the difference.)    "
},
{
  "id": "exercises-sect-subtraction-7",
  "level": "2",
  "url": "sect-subtraction.html#exercises-sect-subtraction-7",
  "type": "Exercise",
  "number": "2.3.8.6",
  "title": "",
  "body": "  This problem shows a number of ways to explain using models     Illustrate the take-away interpretation for using a set model. (Draw 5 dimes and 4 pennies and cross some out. If needed exchange dimes for pennies or vice versa. Note: for take-away, do not show the subtrahend, just cross out the appropriate ones.)      Illustrate the counting-up method for by showing two hops on the number line.      Illustrate the comparison interpretation for by using a set model (use pennies and dimes for both subtrahend and minuend and ask a question. For comparison, do not cross out anything.)      Illustrate the comparison interpretation for by using bar diagram. (No question is necessary, but put a ? on the diagram to represent the difference.)    "
},
{
  "id": "exercises-sect-subtraction-8",
  "level": "2",
  "url": "sect-subtraction.html#exercises-sect-subtraction-8",
  "type": "Exercise",
  "number": "2.3.8.7",
  "title": "",
  "body": "  Make up first grade word problems of the following types:     The take-away interpretation for finding .      The part-whole interpretation for .      The comparison interpretation for .    "
},
{
  "id": "ws-subtraction-2-1",
  "level": "2",
  "url": "sect-subtraction.html#ws-subtraction-2-1",
  "type": "Worksheet Exercise",
  "number": "2.3.9.1",
  "title": "",
  "body": "  Explain the difference between the three types of subtraction interpretations: part-whole, takeaway and comparison.   "
},
{
  "id": "ws-subtraction-2-2",
  "level": "2",
  "url": "sect-subtraction.html#ws-subtraction-2-2",
  "type": "Worksheet Exercise",
  "number": "2.3.9.2",
  "title": "",
  "body": "  For each of the following, produce an appropriate diagram. (Note: there may be multiply ways of answering a problem. )     Show using a counting down measurement model.      Show use a part-whole set model.      Show using the takeaway measurement model.    "
},
{
  "id": "ws-subtraction-2-3",
  "level": "2",
  "url": "sect-subtraction.html#ws-subtraction-2-3",
  "type": "Worksheet Exercise",
  "number": "2.3.9.3",
  "title": "",
  "body": "  For each of the following, produce a simple word problem that indicates the given interpretation model.      using a part-whole measurement model       using a comparison set model.       using a takeaway set model.    "
},
{
  "id": "ws-subtraction-3-1",
  "level": "2",
  "url": "sect-subtraction.html#ws-subtraction-3-1",
  "type": "Worksheet Exercise",
  "number": "2.3.9.4",
  "title": "",
  "body": "  Each of the following is a thinking strategy used for subtraction. Explain each one.      using counting down.       using counting up.    "
},
{
  "id": "ws-subtraction-3-2",
  "level": "2",
  "url": "sect-subtraction.html#ws-subtraction-3-2",
  "type": "Worksheet Exercise",
  "number": "2.3.9.5",
  "title": "",
  "body": "  Show using a coin model. Clearly show the unbundling needed.   "
},
{
  "id": "sect-multiplication",
  "level": "1",
  "url": "sect-multiplication.html",
  "type": "Section",
  "number": "2.4",
  "title": "Multiplication",
  "body": " Multiplication     Understand the definition of multiplication and the terms used.    Understand models used in multiplication.    Learn and use the properties of multiplication.    Understand and use the thinking strategies in multiplication.      Multiplication is defined as repeated addition. The result of is the second number added to itself times. For example   In multiplication, the numbers are called the factors and the result is the product . For example,      The notation for multiplication in early elementary school is .    In higher levels, a dot is used instead, for example . This often because algebra is introduced and a common variable is used and can be easily confused with .       Models of Multiplication   Set Model  Use the set model, the product is interpreted as 4 groups of 6 objects. For example, if you have 4 bags each containing 6 oranges, the following diagram can show this.         Measurement Model  In this model, is interpreted as 4 hops on the number line each hop of length 6. An example is: Catarina has 4 pieces of string, and each piece is 6 inches. How long in total is the string?          Array Model  Another model to show multiplication is using a rectangular grid or rectangular array. The example is illustrated in each of the following ways:               Be careful of using the interpretation of multiplication as area until the appropriate age. Multiplication is learned quite early, whereas the notation of area is delayed a year or two.      Properties of Multiplication    The following are the axiomatic properties of multiplication, which holds for all whole numbers and :     Multiplicative Identity       Commutative Property       Associative Property          Let's look at these properties more in depth.     Recalling that multiplication is repeated addition, means adding one time, so the answer is .    This makes sense since you can regroup objects. 4 groups of 5 oranges is the same as 5 groups of 4 oranges. A nice way to show this is with a set model. The following shows 4 groups of 5 as:       and the following shows 5 groups of 4.       Notice in this that the oranges (objects) were not rearranged in anyway, but instead the grouping was done. This is important.  Using the Rectangular Array model, you can interchange the rows and columns to explain the commutative identity, since the total number of boxes (dots) stay the same.    The Associative property adds another level of groups. The operation can be thought of 3 boxes each containing 4 bags each with 5 apples. The following diagram shows this.       This is identical to or 5 boxes, each containing 3 bags of 4 apples which can be showed with       This shows the result 5 groups of 3 groups of 4 or which shows the associative property.       What property is each of the following?          This is the multiplicative associative property.           This is the multiplicative identity.           This is the multiplicative associative property.      Any-Order property of Multiplication   The operation can be done in any order. In fact, the product of any number of factors can be done in any order.     Distributive Property of Multiplication   If and are whole numbers then     Notice that the distributive properties is a blend of addition and multiplication. When you get to algebra, it is used for expanding across parentheses (often with FOILing) or in the reverse it is factoring.  We can use any of the models above to show this property for specific and . For example to we can use the following diagram:   A grid that is 5 high and 7 wide. The left side is 3 wide and is shaded a different color than the right side which is 4 wide.    The overall number of squares is . The individual colors are and .    Thinking Strategies for Multiplication  As with the previous operations, there are some important ways to think about multiplication. There are a few concepts.   Addition Doubles  This uses the knowledge of doubles like to introduce multiplication by 2.    Skip Counting  This starts students in understanding multiplication consider skip counting by 2, 3 and 5 such as and these are precisely multiplying by 2, 3 and 5.    Multiplication Table  Eventually, students need to know the multiplication table within 12. This should be introduced slowly, using skip counting and the knowledge of the easier rows.    Multiplying by tens or multiples of 10s  A place-value system like decimal numbers make multiplying by powers of 10 quite easy.        Produce the multiplication table up to 12.      This problem examines how to think about multiplication by 9 by using the fact that and then the distributive law      The following diagram shows as        Explain how this shows using       Repeat the diagram above for .      Use this method to find the following mentally (don't use a calculator or the column method): , , , .      By this method . The result is less than 70 and more than 60, so it's tens digit is 6. If fact, whenever a 1-digit number is multiplied by 9, the tens digit of the product is what?      Note that the ones digit of is 3. How is the ones-digit of the product of 9 times any 1-digit number related to the number?      Use the results of parts (d) and (e) here to explain what you see in the multiplication table for the 9s row or 9s column.      If you don't know the fingers method of multiplying by 9, check out this YouTube video. Use the facts in this problem to explain why this work. In particular, explain clearly why the tens digits and one digit works for the finger method.       Illustrate each of the following multiplication statements using a set or rectangular model. In each case, each side of the statement show be clearly indicated on the model.                           .       Identify the arithmetic property(ies) that is(are) used:                                                Group Work for Multiplication     Identify which arithmetic property is used in each case.                                         Prove that the distributive property holds for using a rectangular grid model. Clearly show the left side and the right side are the same through different diagrams or proper shading.      Prove that the commutative property holds using a set model. You should show the same interpretation on either side of the equals sign with a set model and explicitly show how you can rearrange one to the other.      "
},
{
  "id": "sect-multiplication-2",
  "level": "2",
  "url": "sect-multiplication.html#sect-multiplication-2",
  "type": "Objectives",
  "number": "2.4",
  "title": "",
  "body": "   Understand the definition of multiplication and the terms used.    Understand models used in multiplication.    Learn and use the properties of multiplication.    Understand and use the thinking strategies in multiplication.    "
},
{
  "id": "sect-multiplication-4-4-4",
  "level": "2",
  "url": "sect-multiplication.html#sect-multiplication-4-4-4",
  "type": "Note",
  "number": "2.4.1",
  "title": "",
  "body": " Be careful of using the interpretation of multiplication as area until the appropriate age. Multiplication is learned quite early, whereas the notation of area is delayed a year or two.  "
},
{
  "id": "prop-multiplication",
  "level": "2",
  "url": "sect-multiplication.html#prop-multiplication",
  "type": "Property",
  "number": "2.4.2",
  "title": "",
  "body": "  The following are the axiomatic properties of multiplication, which holds for all whole numbers and :     Multiplicative Identity       Commutative Property       Associative Property         "
},
{
  "id": "sect-multiplication-5-5",
  "level": "2",
  "url": "sect-multiplication.html#sect-multiplication-5-5",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": "  What property is each of the following?          This is the multiplicative associative property.           This is the multiplicative identity.           This is the multiplicative associative property.    "
},
{
  "id": "sect-multiplication-5-6",
  "level": "2",
  "url": "sect-multiplication.html#sect-multiplication-5-6",
  "type": "Lemma",
  "number": "2.4.4",
  "title": "Any-Order property of Multiplication.",
  "body": " Any-Order property of Multiplication   The operation can be done in any order. In fact, the product of any number of factors can be done in any order.   "
},
{
  "id": "prop-distributive-multiplication",
  "level": "2",
  "url": "sect-multiplication.html#prop-distributive-multiplication",
  "type": "Property",
  "number": "2.4.5",
  "title": "Distributive Property of Multiplication.",
  "body": " Distributive Property of Multiplication   If and are whole numbers then    "
},
{
  "id": "exercises-multiplication-1",
  "level": "2",
  "url": "sect-multiplication.html#exercises-multiplication-1",
  "type": "Exercise",
  "number": "2.4.4.1",
  "title": "",
  "body": "  Produce the multiplication table up to 12.   "
},
{
  "id": "exercises-multiplication-2",
  "level": "2",
  "url": "sect-multiplication.html#exercises-multiplication-2",
  "type": "Exercise",
  "number": "2.4.4.2",
  "title": "",
  "body": "  This problem examines how to think about multiplication by 9 by using the fact that and then the distributive law      The following diagram shows as        Explain how this shows using       Repeat the diagram above for .      Use this method to find the following mentally (don't use a calculator or the column method): , , , .      By this method . The result is less than 70 and more than 60, so it's tens digit is 6. If fact, whenever a 1-digit number is multiplied by 9, the tens digit of the product is what?      Note that the ones digit of is 3. How is the ones-digit of the product of 9 times any 1-digit number related to the number?      Use the results of parts (d) and (e) here to explain what you see in the multiplication table for the 9s row or 9s column.      If you don't know the fingers method of multiplying by 9, check out this YouTube video. Use the facts in this problem to explain why this work. In particular, explain clearly why the tens digits and one digit works for the finger method.    "
},
{
  "id": "exercises-multiplication-3",
  "level": "2",
  "url": "sect-multiplication.html#exercises-multiplication-3",
  "type": "Exercise",
  "number": "2.4.4.3",
  "title": "",
  "body": "  Illustrate each of the following multiplication statements using a set or rectangular model. In each case, each side of the statement show be clearly indicated on the model.                           .    "
},
{
  "id": "exercises-multiplication-4",
  "level": "2",
  "url": "sect-multiplication.html#exercises-multiplication-4",
  "type": "Exercise",
  "number": "2.4.4.4",
  "title": "",
  "body": "  Identify the arithmetic property(ies) that is(are) used:                                             "
},
{
  "id": "ws-multiplication-2-1",
  "level": "2",
  "url": "sect-multiplication.html#ws-multiplication-2-1",
  "type": "Worksheet Exercise",
  "number": "2.4.5.1",
  "title": "",
  "body": "  Identify which arithmetic property is used in each case.                                      "
},
{
  "id": "ws-multiplication-2-2",
  "level": "2",
  "url": "sect-multiplication.html#ws-multiplication-2-2",
  "type": "Worksheet Exercise",
  "number": "2.4.5.2",
  "title": "",
  "body": "  Prove that the distributive property holds for using a rectangular grid model. Clearly show the left side and the right side are the same through different diagrams or proper shading.   "
},
{
  "id": "ws-multiplication-2-3",
  "level": "2",
  "url": "sect-multiplication.html#ws-multiplication-2-3",
  "type": "Worksheet Exercise",
  "number": "2.4.5.3",
  "title": "",
  "body": "  Prove that the commutative property holds using a set model. You should show the same interpretation on either side of the equals sign with a set model and explicitly show how you can rearrange one to the other.   "
},
{
  "id": "sect-division",
  "level": "1",
  "url": "sect-division.html",
  "type": "Section",
  "number": "2.5",
  "title": "Division",
  "body": " Division     Understand the definition of division and the terms used.    Understand the two interpretations of division.    Understand models used in multiplication.    Understand division with remainders and the Quotient-Remainder Theorem.    Understand how to interpret division by zero.      Division of whole numbers is defined in terms of multiplication.  The number is defined as the number missing in the multiplication .   There are two distinct ways of thinking about division because of the commutative properties of multiplication. The division problem can be thought of as either   The answer to either of these is the same, 6, but can be interpreted a bit differently.     The first is “18 is three groups of what size?” (partitive division)    The second is “18 is how many groups of size 3” (measurement division)     We will see these two interpretations throughout the book, so it is important to understand the difference.    Set Model for partitive and measurement  Division with a set model is interpreted as taking some objects and splitting them into groups. The following two diagrams shows with the two interpretations. The partitive interpretation means we take the objects and put them in three groups.       This diagram shows three groups of penguins. The quotient (which is 6) is the number of penguins in each group. Alternatively, the measurement interpretation would be to put the penguins in groups of size 3. The following diagram shows this:         Division Interpretation and Word Problems  Word problems clearly have a division interpretation with them. The following example shows two problems with partitive interpretation       Eight juice boxes with a total of 48 ounces come in a multi-pack. How many ounces is each box? Ans:     A string of length 21 inches is divided into 3 equal pieces. How long is each piece? Ans: .       The follow example shows two word problems with measurement interpretation.       One case holds ten juice boxes. How many cases hold 120 juice boxes. Ans:     A case of juice boxes have a total of 96 ounces of juice. If each box contains 6 ounces of juice, how many boxes are there? Ans: .         Division with Remainders  What if we need to answer the problem: How many dozens of eggs are in 30 eggs?   We know that two dozen is 24 eggs and three dozen is 36 eggs, so 30 eggs is two dozen plus some left over.   and in this case because , the quotient is 2 and the remainder is 6.  Models with division and remainders are quite helpful. Below, we show 3 eggs and 2 groups of 12 (dashed) and the remainder of 6.        Quotient-Remainder Theorem   For any two positive whole numbers and , there are unique whole numbers (the quotient) and (the remainder) such that and .    This can be demonstrated in a general way with the following rectangular model.       where the throughout the diagram indicates that there are an indeterminate number of boxes. Note that the number of rows is the divisor and that the remainder is the number of boxes that don’t fit into a complete row.  This is a visual way to see the quotient-remainder theorem, especially the statements that , that is the number of extra boxes (the remainder) can be 0 and up to (but not including) the number of rows.    Division by Zero  What is ? Using the definition of division, it is the missing factor. That is, we can write this as   Since nothing can go in the box to make this equation work, the answer to this is undefined .  We can also think of this in the division interpretation. From a partitive interpretation, represents the size of the group if 6 is split into 0 groups. Alternatively, from a measurement interpretation, the result is the number of groups of size 0. In either case, these don’t make sense.  What about ? Write this as and now in this case, any number works, but we still say this is undefined .     The following are exercises that can be done with the content in this section.     For each of the following division problems, write the corresponding multiplication problem.                    For each of the following word problems identify if each is a measurement (MD) or partitive (PD) problem.     Julia put 30 lollipops into 6 bags. How many lollipops went into each bag?      Lucy had a ribbon of length 72 inches. If she cut it in pieces of length 8 inches per piece, how many pieces did she have?      A package of pens come in 5 different colors. If there are the same number of pens for each color and the number of pens is 30, how many pens are in each color?      Mrs. Stevenson bought 18 containers of juice for her class. If she spent $36 on juice, what was the cost per container?      Jeremiah drove from Washington DC to Seattle in seven days. The total distance was 2800 miles. How many miles did he drive on average each day?       For each of the following statements, if it is true, explain why, and if it is false, give a counterexample.                    Each of the following parts lists a division operation. Produce a bar diagram for either Measurement Division (MD) or Partitive Division (PD) as indicated.      using MD       using MD       using PD       using PD       using MD       Produce word problems for each division problem and interpretation.     using measurement division     using partitive division      Illustrate the Quotient-Remainder Theorem as specified:     A number line picture for . (Show jumps of size 10).      A set model for       A bar diagram using measurement division for       A rectangular array for        Explain in your own words the difference between and . You can use examples or a word problem to explain the difference.     "
},
{
  "id": "sect-division-2",
  "level": "2",
  "url": "sect-division.html#sect-division-2",
  "type": "Objectives",
  "number": "2.5",
  "title": "",
  "body": "   Understand the definition of division and the terms used.    Understand the two interpretations of division.    Understand models used in multiplication.    Understand division with remainders and the Quotient-Remainder Theorem.    Understand how to interpret division by zero.    "
},
{
  "id": "sect-division-5-3",
  "level": "2",
  "url": "sect-division.html#sect-division-5-3",
  "type": "Example",
  "number": "2.5.1",
  "title": "",
  "body": "     Eight juice boxes with a total of 48 ounces come in a multi-pack. How many ounces is each box? Ans:     A string of length 21 inches is divided into 3 equal pieces. How long is each piece? Ans: .      "
},
{
  "id": "sect-division-5-5",
  "level": "2",
  "url": "sect-division.html#sect-division-5-5",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": "     One case holds ten juice boxes. How many cases hold 120 juice boxes. Ans:     A case of juice boxes have a total of 96 ounces of juice. If each box contains 6 ounces of juice, how many boxes are there? Ans: .      "
},
{
  "id": "thm-quotient-remainder",
  "level": "2",
  "url": "sect-division.html#thm-quotient-remainder",
  "type": "Theorem",
  "number": "2.5.3",
  "title": "Quotient-Remainder Theorem.",
  "body": " Quotient-Remainder Theorem   For any two positive whole numbers and , there are unique whole numbers (the quotient) and (the remainder) such that and .   "
},
{
  "id": "exercises-sect-division-2",
  "level": "2",
  "url": "sect-division.html#exercises-sect-division-2",
  "type": "Exercise",
  "number": "2.5.5.1",
  "title": "",
  "body": "  For each of the following division problems, write the corresponding multiplication problem.                 "
},
{
  "id": "exercises-sect-division-3",
  "level": "2",
  "url": "sect-division.html#exercises-sect-division-3",
  "type": "Exercise",
  "number": "2.5.5.2",
  "title": "",
  "body": "  For each of the following word problems identify if each is a measurement (MD) or partitive (PD) problem.     Julia put 30 lollipops into 6 bags. How many lollipops went into each bag?      Lucy had a ribbon of length 72 inches. If she cut it in pieces of length 8 inches per piece, how many pieces did she have?      A package of pens come in 5 different colors. If there are the same number of pens for each color and the number of pens is 30, how many pens are in each color?      Mrs. Stevenson bought 18 containers of juice for her class. If she spent $36 on juice, what was the cost per container?      Jeremiah drove from Washington DC to Seattle in seven days. The total distance was 2800 miles. How many miles did he drive on average each day?    "
},
{
  "id": "exercises-sect-division-4",
  "level": "2",
  "url": "sect-division.html#exercises-sect-division-4",
  "type": "Exercise",
  "number": "2.5.5.3",
  "title": "",
  "body": "  For each of the following statements, if it is true, explain why, and if it is false, give a counterexample.                 "
},
{
  "id": "exercises-sect-division-5",
  "level": "2",
  "url": "sect-division.html#exercises-sect-division-5",
  "type": "Exercise",
  "number": "2.5.5.4",
  "title": "",
  "body": "  Each of the following parts lists a division operation. Produce a bar diagram for either Measurement Division (MD) or Partitive Division (PD) as indicated.      using MD       using MD       using PD       using PD       using MD    "
},
{
  "id": "exercises-sect-division-6",
  "level": "2",
  "url": "sect-division.html#exercises-sect-division-6",
  "type": "Exercise",
  "number": "2.5.5.5",
  "title": "",
  "body": "  Produce word problems for each division problem and interpretation.     using measurement division     using partitive division   "
},
{
  "id": "exercises-sect-division-7",
  "level": "2",
  "url": "sect-division.html#exercises-sect-division-7",
  "type": "Exercise",
  "number": "2.5.5.6",
  "title": "",
  "body": "  Illustrate the Quotient-Remainder Theorem as specified:     A number line picture for . (Show jumps of size 10).      A set model for       A bar diagram using measurement division for       A rectangular array for     "
},
{
  "id": "exercises-sect-division-8",
  "level": "2",
  "url": "sect-division.html#exercises-sect-division-8",
  "type": "Exercise",
  "number": "2.5.5.7",
  "title": "",
  "body": "  Explain in your own words the difference between and . You can use examples or a word problem to explain the difference.   "
},
{
  "id": "sect-alt-numbers",
  "level": "1",
  "url": "sect-alt-numbers.html",
  "type": "Section",
  "number": "2.6",
  "title": "Alternative Number Systems",
  "body": " Alternative Number Systems     Learn about alternative number systems including tallies, egyptian numbers, roman number, mayan numbers, and babylonian numbers.    Be able to rewrite decimal numbers in other numbers and vise versa.    Understand numbers in other bases.      Although modern society throughout the world uses the decimal system we know from years of schooling, we look at some alternative number systems. There are a few reasons for this.     A little history is always good, so you know a little bit about how numbers developed.    It is good to step outside your comfort zone, especially as a teacher. This gives you good perspective.       Tallies  A tally is a system where a vertical line (stroke) represents 1. After five strokes you bundle with a slash: .  This is a nice system for counting a relatively short number of things and is often used in counting in games.    Egyptian Numbers  Recall that we saw Egyptian numbers above in , which is not a place-value system, but it is base-10. Also, as discussed above, the DLB model is identical this system with different symbols and we can add and subtract in Egyptian in much the same way as the DLB model. Consider in Egyptian. We will stack them to make bundling easier:       One can clearly see there are 7 coils, 11 heels and 13 strokes. Since it is standard in a similar manner to our base-10 system to have a maximum of 9 symbols, we bundle 10 strokes to get a heel, resulting in 12 heels and 3 strokes. Then 10 of the heels can be bundled into a coil, resulting in 8 coils and 2 heels. The resulting number would be       And this would be 823 in decimal. Subtraction can be done similarly, where unbundling may need to occur as the next example shows.    Find the following subtraction problem keeping in the egyptian system.         In egyptian, it's often easiest to think about subtraction using the takeaway interpretation and for this we will write the minuend and cross out the subtrahend. In this case, there are enough strokes (ones) and coils (hundreds) to cross out, but not enough heels. Therefore, we will unbundle a coil and add another 10 heels. The minuend then can be written down as       and then we will cross out three coils, 6 heels and 4 strokes (the subtrahend).       The result shows is       which in decimal is 394.      Roman Numerals  Another non-standard number system that is quite common is that of Roman Numbers . Similar to Egyptian numbers, there are different symbols for different values and the symbols used are typically the UPPER-CASE roman alphabetic numbers as:             symbol  I  V  X  L  C  D  M       value  1  5  10  50  100  500  1000       Because of the 5s, 50s and 500s, this system is a little more complicated than the Egyptian one especially when converting from decimal numbers to Roman and if you do operations in Roman. For example, we can write as LVI and 375 as CCCLXXV.  One wrinkle is how 4s, 9s, 40s, 90s, 400s and 900s are dealt with and that is for 4, 40 or 400, instead of writing IIII, XXXX, or CCCC, write IV, XL or CD. Similarly, 9, 90 and 900 is written as IX, XC and CM. Note that the relative position of the symbols is important. For example, VI is 6 and IV is 4.    Write 2437, 3046 and 994 in roman numbers:       so this is MM then CD then XXX then VII. Merge them together for MMCDXXXVII.     so this is MMM then XL then VI, then this becomes MMMXLVI     which is CM then XC then IV, then together this becomes: CMXCIV       And the following converts from Roman Numbers to decimal.    Write MMDCCXXXVI, MMMCDLXXIV, DCCCLXXXVIII in roman numbers:      For MMDCCXXXVI split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 2736.    For MMMCDLXXIV, split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 3974.    For DCCCLXXXVIII, split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 888.       The next couple of examples shows how to do subtraction with Roman Numbers.    Find by staying in Roman numbers and not switching to decimal.    The easiest way to do this is to break these up into common symbols\/values.   and now for the numerals less than 10, notice that the first number is smaller than the second, so we unbundle a X: and the result is MCDXXVII.    From the previous examples, arithmetic in roman numerals is difficult. Although there some features of place value, due to the fact that are both tens, hundreds and thousands values as well as the half values means there is a lot of bundling\/unbundling needed for even simple operations.     Mayan Numbers  The Mayan number system is another non-decimal number system. The Mayan numbers use base-20 (vigesimal) where there are digits 0 to 19 as shown below:  Numbers are written vertically. For example:          where the bottom box is the ones, the middle box is the number of 20s (remember that's the base) and the top is the number of 400s ($20^2$).  which is which is in decimal numbers.  It's also interesting that the Mayan system has a zero digit, which predates the Hindu-Arabic zero by a few hundred years.   Convert to Mayan  Write 1045 in Mayan     There are 2 400s.    The remainder is 245. There are 12 20s in here.    The remainder is 5.        Base-5 Numbers  We will also spend some time this semester talking about base-5 arithmetic. The first question should be why? Nobody uses base-5 at all. There's one reason for doing this and that is to understand our decimal (base-10) system at a deeper level. Before jumping into this section, make sure you understand the coin\/chip model seen in Section . For decimal numbers, recall that we use chips or coins with denominations of 1, 10, 100, 1000 (powers of 10).   Base-5 coin models  Now, let's say instead we have a set of coins (pennies, nickels-worth 5 cents, quarters-worth 25 cents and a fiftoon As far as I can tell this is a completely fictional coin. It's important that it is worth 125 cents, because , so it is the value of the 4th place value in base-5-worth 125 cents We will also write combinations of this with a 5 subscript. If we have 3 pennies, 2 nickels, 4 quarters and 1 fiftoon, which we could draw as       and like decimal numbers, we write the result as where we write the number like in decimal from left to right as largest place value (coin value) to smallest. Note, the base is written out as a subscript.    Converting from base-5 to base-10  The conversion from base-5 to base-10 is relatively straightforward if you think of money. Consider and write it in decimal. We just need to recall the amount of each coin. This number represents 1 fiftoon, 2 nickels and 3 pennies or     Converting from base-10 to base-5  This direction is a little bit more complicated. Let's write the number 486 in base-5.     We first determine the number of fiftoons to use. We can use long division (see Chapter ) as 486125 and the quotient is the number of fiftoons or 3. Then we need the remainder or 111 as well.    Next find the number of quarters in 111 and use long division: 11125 which shows it takes 4 quarters with a remainder of 11.    There are 2 nickels in 11, with 1 left over, so 1 penny.     Overall, there are 3 fiftoons, 4 quarters, 2 nickels and 1 penny. Thus the number 486 in base-5 is       The following are exercises that can be done with the content in this section.           For each of the following base-5 numbers, convert to decimal. Note: in part (c), the number goes beyond the fiftoon coin, but can still be calculated.                              Write the number seven-hundred sixty five and one-thousand six-hundred thirty three in     decimal      Egyptian      Roman      Mayan       Perform the following additions in the given numeral system. Do not convert to decimal numbers and pay attention to any regrouping needed. Leave your solution in the same number system as it began.                                      Why might the decimal system that we use today be the number system that we have today? Explain your answer and include the compactness of writing a number (how many glyphs is needed to write a number) as well as the simplicity of performing addition.      "
},
{
  "id": "sect-alt-numbers-2",
  "level": "2",
  "url": "sect-alt-numbers.html#sect-alt-numbers-2",
  "type": "Objectives",
  "number": "2.6",
  "title": "",
  "body": "   Learn about alternative number systems including tallies, egyptian numbers, roman number, mayan numbers, and babylonian numbers.    Be able to rewrite decimal numbers in other numbers and vise versa.    Understand numbers in other bases.    "
},
{
  "id": "sect-alt-numbers-5-7",
  "level": "2",
  "url": "sect-alt-numbers.html#sect-alt-numbers-5-7",
  "type": "Example",
  "number": "2.6.1",
  "title": "",
  "body": "  Find the following subtraction problem keeping in the egyptian system.         In egyptian, it's often easiest to think about subtraction using the takeaway interpretation and for this we will write the minuend and cross out the subtrahend. In this case, there are enough strokes (ones) and coils (hundreds) to cross out, but not enough heels. Therefore, we will unbundle a coil and add another 10 heels. The minuend then can be written down as       and then we will cross out three coils, 6 heels and 4 strokes (the subtrahend).       The result shows is       which in decimal is 394.   "
},
{
  "id": "sect-roman-numbers-6",
  "level": "2",
  "url": "sect-alt-numbers.html#sect-roman-numbers-6",
  "type": "Example",
  "number": "2.6.2",
  "title": "",
  "body": "  Write 2437, 3046 and 994 in roman numbers:       so this is MM then CD then XXX then VII. Merge them together for MMCDXXXVII.     so this is MMM then XL then VI, then this becomes MMMXLVI     which is CM then XC then IV, then together this becomes: CMXCIV      "
},
{
  "id": "sect-roman-numbers-8",
  "level": "2",
  "url": "sect-alt-numbers.html#sect-roman-numbers-8",
  "type": "Example",
  "number": "2.6.3",
  "title": "",
  "body": "  Write MMDCCXXXVI, MMMCDLXXIV, DCCCLXXXVIII in roman numbers:      For MMDCCXXXVI split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 2736.    For MMMCDLXXIV, split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 3974.    For DCCCLXXXVIII, split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 888.      "
},
{
  "id": "sect-roman-numbers-10",
  "level": "2",
  "url": "sect-alt-numbers.html#sect-roman-numbers-10",
  "type": "Example",
  "number": "2.6.4",
  "title": "",
  "body": "  Find by staying in Roman numbers and not switching to decimal.    The easiest way to do this is to break these up into common symbols\/values.   and now for the numerals less than 10, notice that the first number is smaller than the second, so we unbundle a X: and the result is MCDXXVII.   "
},
{
  "id": "fig-mayan",
  "level": "2",
  "url": "sect-alt-numbers.html#fig-mayan",
  "type": "Figure",
  "number": "2.6.5",
  "title": "",
  "body": "       "
},
{
  "id": "exercises-alt-numbers-2",
  "level": "2",
  "url": "sect-alt-numbers.html#exercises-alt-numbers-2",
  "type": "Exercise",
  "number": "2.6.6.1",
  "title": "",
  "body": "     "
},
{
  "id": "exercises-alt-numbers-3",
  "level": "2",
  "url": "sect-alt-numbers.html#exercises-alt-numbers-3",
  "type": "Exercise",
  "number": "2.6.6.2",
  "title": "",
  "body": "  For each of the following base-5 numbers, convert to decimal. Note: in part (c), the number goes beyond the fiftoon coin, but can still be calculated.                        "
},
{
  "id": "ws-alt-numbers-1-1",
  "level": "2",
  "url": "sect-alt-numbers.html#ws-alt-numbers-1-1",
  "type": "Worksheet Exercise",
  "number": "2.6.7.1",
  "title": "",
  "body": "  Write the number seven-hundred sixty five and one-thousand six-hundred thirty three in     decimal      Egyptian      Roman      Mayan    "
},
{
  "id": "ws-alt-numbers-1-2",
  "level": "2",
  "url": "sect-alt-numbers.html#ws-alt-numbers-1-2",
  "type": "Worksheet Exercise",
  "number": "2.6.7.2",
  "title": "",
  "body": "  Perform the following additions in the given numeral system. Do not convert to decimal numbers and pay attention to any regrouping needed. Leave your solution in the same number system as it began.                                 "
},
{
  "id": "ws-alt-numbers-2-1",
  "level": "2",
  "url": "sect-alt-numbers.html#ws-alt-numbers-2-1",
  "type": "Worksheet Exercise",
  "number": "2.6.7.3",
  "title": "",
  "body": "  Why might the decimal system that we use today be the number system that we have today? Explain your answer and include the compactness of writing a number (how many glyphs is needed to write a number) as well as the simplicity of performing addition.   "
},
{
  "id": "sect-diagrams-models",
  "level": "1",
  "url": "sect-diagrams-models.html",
  "type": "Section",
  "number": "3.1",
  "title": "Diagrams and Models",
  "body": " Diagrams and Models     Understand the different types of diagrams and models and when to use them.    Understand how to use set diagrams, rectangular grids, number line diagrams, bar diagrams and coin\/chip models to represent arithmetic problems.      Throughout , we saw how diagrams are linked to specific arithmetic problems. This section goes in depth into all of the types of diagrams and why we use them. There are many different type of diagrams and models and it will be important to understand when to use each of them and how to use them correctly.    Set Diagram   Set Diagrams are generally used in understanding arithmetic operations for small integers. They are drawn in a way that for each whole number an object is drawn. For example can be represented easily with a set diagram:   A set diagram with 3 stars in a group and 6 stars in another group.    Notice that in , the set diagrams showed picture of whatever the word problem asked. With abstraction, it doesn't matter what the object is, so typically diagrams can be used that are easy to draw. However, when presenting to younger students, it is often helpful to use the actual objects in the word problem.  Set diagrams are also helpful in subtraction problems with small whole numbers. However, it is important to understand the three different subtraction interpretations.     Take-Away  Recall that this means that you have some number of objects and take-away or remove some of them. Often, this is shown in a diagram by crossing out. The following shows :   An image with 7 circles and the first 3 are crossed out.    and noting that there are 4 remaining not crossed out.    Part-Whole  This is a bit difficult to show in that you need to represent the whole and then the part. This can be done with two different colors. For example, we could have the diagram:   An image of 7 circles. The leftmost 4 are orange and the rightmost 3 are yellow.    which could show , however, this also shows or . But these are all related by the 4-fact family as explained in .    Comparison  The number with a comparison interpretation can be shown with the following:   An image with two rows of circles. The top row has 7 circles and the bottom row has 3 circles. The rows are aligned on the left. The gap on the second row without circles has a brace and a question mark.    Where it is important to have a ? to be clear what is being sought.       Rectangular Grids (or Arrays)  A rectangular grid or rectangular array is a grid of boxes. It is often used to represent multiplication of small whole numbers, generally less than 10. For example, the following is a representation of .   An image of a rectangular grid that is 4 rows and 6 columns.    The result is the total number of squares. They can be understood as 4 groups of 6 or 6 groups of 4.    Number Line Diagrams  A number line diagram is generally a number line with hops shown. An example is the operation and if the take-way interpretation is used, one starts at the 9 on the number line and hops down 3 spots to the result of 6.   A number line stretching from 0 to 9. Three hops going from 9 to 8, from 8 to 7 and from 7 to 6 are shown as arrows from right to left.    Number lines are typically used with addition and subtraction of small whole numbers as well as understanding negative numbers. Recall that number line are quite flexible and we will see them in other chapters including in which fractions and operations are explained. In addition, number lines are quite helpful for understanding decimals as in , especially the order properties of decimals that can be challenging to students.    Bar Diagrams  Bar diagrams are the most flexible of types of diagrams for two reasons: 1) a bar can represent any length, so it can be a small whole number, large whole number, fraction, ratios, percents and decimals. 2) All operations can be used in a bar diagram including division as we will see. In the simplest, here is the operation :   A bar diagram in which the bar is divided into 9 boxes, which 6 of them shaded.    One can see that there are 3 orange boxes and 6 blue ones. There are a total of 9 boxes, therefore the result is 9.  Alternatively, we don't need to show the shading or the boxes to get:   A bar diagram in which the bar is divided into two parts, the left is denoted to be length 3 and the right is length 6. There is a question mark over the top of the diagram indicating the total length.    As you can see, the length of the bar diagram is what is important and as we will see that we can represent addition and subtraction quite easily. Different bar diagrams can show multiplication and division as well. Lastly, bar diagrams are very helpful with fractions and ratios and nearly indispensable in percent problems.  We now explore bar diagrams in depth. As noted, they are the most flexible diagram and because of this, they are more complicated and care must be used in drawing and labeling them correctly. The remainder of this section goes through these diagrams in depth. Note that in each of these situations a ? indicates the result of the operation.   Addition  We saw the addition of two numbers using bar diagrams above. Recall that the two numbers being added are called the addends and if the length of each bar are the addends, then the total length is the sum. Consider as a problem to show with a diagram, then that can be represented as:   A bar diagram divided into two parts. The left part has length 45 and the right part has length 78. There is a question mark denoting the total length along the top of the bar.    which is just a bar of length 45 and a bar of length 78 with the two bars laid end-to-end. The total length is the sum or 123.  Alternatively, bar diagrams can be stacked. We will use stacked bar diagrams in many Teacher's Solutions in . These are common with word problems where two quantities are labelled. The addition problem 45 + 78 could also be represented with this diagram:   A stacked bar diagram with the bars extending to the right. The top bar is denoted with length 78 and the bottom one 45. There is a question mark along the left side indicating the total of the two bars.    This diagram also shows the sum or and the result (denoted by ?) is along the left side (alternatively the right side can be used as well). The result is still the total length or you can think of the total weight of the bars which is 123.    Subtraction  There are three interpretations of subtraction and all are helpful in understanding subtraction: part-whole, take-away and comparison. If needed, check in the textbook about the differences of these.   Single Bar diagram   Although all three are important to understand, the bar diagrams don't often differ much with these. For example if we are looking at , the following would represent this.   A horizontal bar diagram with the total length 9 denoted on the top of the bar. The left part of the diagram is denoted with a question mark and the right part the value 3.    This diagram could represent any of the three interpretations. Consider the following word problems:     Comparison  Ashley has 9 balloons and she has 3 more than Max. How many balloons does Max have?    Part-Whole  A bowl of 9 eggs are on the table. Each egg is either brown or white. If there are 3 white eggs, how many brown ones are there?    Takeaway  Colleen has 9 pencils. If she gives 3 pencils to her sister, how many pencils does she have left?     Each of these situations can be represented with the the above diagram, however the comparison interpretation is usually better show with a stacked bar diagram. This could be useful for a word problem like: Emily travels 78 miles to visit her grandparents and Raul travels 45 miles. How much further does Emily need to travel than Raul in visiting her grandparents?    Stacked Bar Diagram   As just noted, the comparison interpretation is clearer to use a stacked diagram with the two amounts as the lengths of the bars. For example, if we are seeking , then we can make a stacked bar diagram as:   Two stacked horizontal bar diagrams with the length of the top one of 78 and the length of the bottom is 45. The part that the top one extends beyond the bottom one is denoted with a question mark.    and the difference is and this is the amount that the top bar is longer than the bottom bar.    Multiplication  Multiplication with bar diagrams is a nice way to look at some problems, but not all. For example, if we are seeking for example, we can take a bar and break it up into 6 pieces of length 23. The result is the product . The diagram can be drawn as   A bar diagram with 6 sections. The first section is denoted with length 23. There is a question mark along the top of the bar indicating the total length.    The result (denoted with the ?) is . This is also a nice way to see that multiplication is repeated addition. In this example, 23 is added to itself 6 times or .  Also note that a bar diagram is a better diagram for than the rectangular grid model because such a model would have a grid with 6 squares by 23 squares. The result is the same, but it's not clear where the result comes from due to the large number of squares.  It appears that the bar diagram only works if one of the factors is small, except that we can show multiple units in the following manner. Consider in the following diagram   A horizontal bar diagram with 3 sections along the left side, then a large section with dots then 45 then more dots and one more section. The first section is denoted to be length 23 and there is a question mark along the top indicating the bar length is unknown.    which shows 45 groups of size 23 each. The result is . It is a good rule of thumb to switch to the method when is more than 8 or 9.    Division  Recall that division is the missing factor in multiplication. That is if we have the problem , then the result (the quotient, ) is the value that satisfies . Try it with some actual values.  Also recall that there are two standard interpretations of division: partitive and measurement. These were covered in and it is a good idea to review this.   Partitive Interpretation   Because of the missing factor notion, the bar diagram for division is the same as that of multiplication except that a factor is sought. For example if we are demonstrating , recall that for partitive interpretation, we are ask the question “45 is 9 groups of what size?” The following diagram shows this.   A horizontal bar diagram with 9 sections and there is a 45 along the top denoting the length. The leftmost section has a question mark underneath it indicated the length of one section.    This diagram would be helpful for the following problem: Katie has 45 cupcakes and wants to take 9 boxes of them to the bake sale. How many cupcakes should go in each?   Notice that this diagram is the same as the multiplication diagram above with the ? and the size of the smaller box swapped locations, but this is because division is precisely the missing factor in multiplication.   Measurement Interpretation   If we examine , alternatively we can use measurement interpretation which asks “45 is how many groups of size 9”? The diagrams for this is:   A horizontal bar diagram with two sections along the left with the first one having length 9. The top has a \"45\" indicting the total length. There is a large section on the right part of the bar with dots, then a question mark, then dots.    This diagram would be helpful for the following problem: Katie has 45 cupcakes and wants to make boxes of 9 cupcakes per box for the bake sale. How many boxes will she have?     Other uses of Bar Diagrams  The diagrams here are not an exhaustive use of bar diagrams, but it is important to understand these basics before moving on to more complicated diagrams. We will two-step problems in the next two sections and developing the diagram for these are important in solving them precisely.  Also, we will see bar diagrams with fractions, ratios and percentages in later chapters.     Coin\/Chip Models  We saw coin models in and will spend quite a bit of time on these models in the next chapter. In the previous chapter, we used coins and the following is the coin model for the number 317.   This diagram shows three circles or coins labelled 100 each, the to the right one coin labelled 10 and then 7 coins labelled \"1\" to the right of those.    We will abstract this a bit further with the following diagram:   A chip model of 317. The model has three columns with headers labelled \"1s\", \"10s\" and \"100s\" from right to left and then in the \"1s\" column there are 7 dots, in the \"10s\" column is one dot and in the \"100s\" column 3 dots.    We call this a chip model in that there are chips in each denomination. There is a one-to-one matching between this and the coin model, however this is slightly more abstract and easier to use with operations. These models help in understanding the algorithms of .      For each of the following scenarios, draw a set diagram:     that represents       uses the takeaway interpretation for       uses the comparison interpretation for       that represents        Show a bar diagram for each of the following scenarios. Make sure each bar has both numbers indicated as well as a ? for the answer.     the problem as a single bar.      the problem as a stacked bar.      the problem as a single bar.      the problem as a stacked bar.      the problem       the problem as partitive interpretation.      the problem as a measurement interpretation.      "
},
{
  "id": "sect-diagrams-models-2",
  "level": "2",
  "url": "sect-diagrams-models.html#sect-diagrams-models-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "   Understand the different types of diagrams and models and when to use them.    Understand how to use set diagrams, rectangular grids, number line diagrams, bar diagrams and coin\/chip models to represent arithmetic problems.    "
},
{
  "id": "exercises-diagrams-1",
  "level": "2",
  "url": "sect-diagrams-models.html#exercises-diagrams-1",
  "type": "Exercise",
  "number": "3.1.6.1",
  "title": "",
  "body": "  For each of the following scenarios, draw a set diagram:     that represents       uses the takeaway interpretation for       uses the comparison interpretation for       that represents     "
},
{
  "id": "exercises-diagrams-2",
  "level": "2",
  "url": "sect-diagrams-models.html#exercises-diagrams-2",
  "type": "Exercise",
  "number": "3.1.6.2",
  "title": "",
  "body": "  Show a bar diagram for each of the following scenarios. Make sure each bar has both numbers indicated as well as a ? for the answer.     the problem as a single bar.      the problem as a stacked bar.      the problem as a single bar.      the problem as a stacked bar.      the problem       the problem as partitive interpretation.      the problem as a measurement interpretation.    "
},
{
  "id": "sect-word-problems",
  "level": "1",
  "url": "sect-word-problems.html",
  "type": "Section",
  "number": "3.2",
  "title": "Word Problems",
  "body": " Word Problems     Understand the usefulness of word problems.    Learn the pitfalls of poorly-written word problems and how to write good problems.      There are many important reasons for using word problems in learning mathematics. In short, mathematics comes from real-world problems and we need to develop techniques to solve these. However, there are other important reasons.   Keep Student Attention  Although knowing how to do arithmetic operations is incredibly important, they can get a boring after a while.    Showing Students How Math is Useful  Students can begin to see how problems that just arise can be solved with mathematics.    Reinforcing Mathematical Skills  Understanding word problems with different operations shows students.    Help Develop Problem-Solving Skills  Problem solving skills are important independent of mathematics, and such skills don't occur innately; they need to be taught and word problems in key in doing this.    Develop Abstract Thinking  Creating a diagram and writing down a mathematical version of a word problem is helpful in developing abstract thinking.    Developing Multi-step Problem Solving  As word problems get more complex, these can help in understanding the mathematics and works on solving harder problems.     Writing Good Word Problems  If you are trying to write a good word problem or evaluate some from another source, there are a number of things to think about:      The problem should be appropriate for what is being taught. Think about the skills that you want the student to take away. Focus on problems that develop those skills.     The problem should be appropriate for the age-level of the student. Use stickers and toy cars and dolls for example for younger kids. You can branch out to money in bank accounts for older students.     The problem should be as succinct as possible. State a problem with the information needed to solve the problem and not too much more.     Make the problem interesting. Develop a problem with items that students find interesting not too childish and not too adult.     The problem should be realistic. Don't have the student question if a problem isn't real.     The problem should have a single solution or not require knowledge outside the problem.        The following word problems don't satisfy all of the aspects of good word problem. What isn't right about each one and try to find a fix.     He has 8 things and gives 3 to her. How many things does he have left?    Catherine and her friends Gloria, Lydia and Delilah are baking sugar cookies and chocolate chip cookies and oatmeal raisin cookies. The cookies are for a bake sale for her school. The PTA is trying to raise money for new books for the school library. Catherine and her friends makes a total of 120 cookies and sells of them. If each cookie sold for $2, how much money did they raise for the books for the school library?    I am a multiple of 3 less than 30, but not a multiple of 9. What number am I?    A recipe of rum cookies has the ratio of 2:3:5 of tablespoons of rum to eggs to cups of flour? If you use 6 eggs, how much rum did you use?          This isn't an interesting problem. Spice it up. Name the two people. Use an actual item instead of the generic ``thing.'' Instead use:   Jordan has 8 toy cars and gives 3 to his sister. How many cars does Jordan have left?     This problem wanders all over the place and is not succinct. There is a lot of information here that is not relevant including the types of cookies, the names of all of her friends and where the specifics of the money is going to. Consider the following instead:   Catherine is baking cookies for a school fundraiser. She makes a total of 120 cookies and sells of them. If each cookie sold for $2, how much money did she raise?     This problem doesn't have a unique solution. The answer 6, 12, 15, 21, 24 all satisfy the conditions. Perhaps a better question may be:   I am a multiple of 3 between 20 and 30, but not a multiple of 7 or 9. What number am I?     This problem isn't so appropriate for kids at all. We can find a recipe without alcohol. How about:   A recipe of sugar cookies has the ratio of 2:3:5 of cups of sugar to eggs to cups of flour? If you use 6 eggs, how much sugar did you use?          Covering All Interpretations  From a teacher’s point of view, it is important that you are covering problems with all interpretations. Recall that for subtraction there are three interpretations. When writing or assigning problems, ensure that take-away, part-whole and comparison problems are used. For division, make sure that word problems that use both partitive and measurement division are selected.      Write good word problems appropriate for 2nd, 3rd or 4th grade students with the following characteristics.     The problem demonstrates .      The problem demonstrates using comparison interpretation.      The problem demonstrates using part-whole interpretation.      The problem demonstrates .      The problem demonstrates using measurement division.      The problem demonstrates using partitive division.       For each of the following, write a bad word problem and then write a fix for it.     The problem demonstrates       The problem demonstrates using comparison interpretation      The problem demonstrates       The problem demonstrates using measurement division.          Consider the following word problems. For each explain why each problem is not a ``good'' problem and fix each one:     The boy has 18 things and puts them in groups of 3. How many things goes in each group?      Sarah goes to the store. She runs into her friend halfway there? How far did she go?      Fred is 30 inches tall. His father is 35 inches tall. How much taller is Fred's father than Fred?       "
},
{
  "id": "sect-word-problems-2",
  "level": "2",
  "url": "sect-word-problems.html#sect-word-problems-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "   Understand the usefulness of word problems.    Learn the pitfalls of poorly-written word problems and how to write good problems.    "
},
{
  "id": "sect-word-problems-4-4",
  "level": "2",
  "url": "sect-word-problems.html#sect-word-problems-4-4",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": "  The following word problems don't satisfy all of the aspects of good word problem. What isn't right about each one and try to find a fix.     He has 8 things and gives 3 to her. How many things does he have left?    Catherine and her friends Gloria, Lydia and Delilah are baking sugar cookies and chocolate chip cookies and oatmeal raisin cookies. The cookies are for a bake sale for her school. The PTA is trying to raise money for new books for the school library. Catherine and her friends makes a total of 120 cookies and sells of them. If each cookie sold for $2, how much money did they raise for the books for the school library?    I am a multiple of 3 less than 30, but not a multiple of 9. What number am I?    A recipe of rum cookies has the ratio of 2:3:5 of tablespoons of rum to eggs to cups of flour? If you use 6 eggs, how much rum did you use?          This isn't an interesting problem. Spice it up. Name the two people. Use an actual item instead of the generic ``thing.'' Instead use:   Jordan has 8 toy cars and gives 3 to his sister. How many cars does Jordan have left?     This problem wanders all over the place and is not succinct. There is a lot of information here that is not relevant including the types of cookies, the names of all of her friends and where the specifics of the money is going to. Consider the following instead:   Catherine is baking cookies for a school fundraiser. She makes a total of 120 cookies and sells of them. If each cookie sold for $2, how much money did she raise?     This problem doesn't have a unique solution. The answer 6, 12, 15, 21, 24 all satisfy the conditions. Perhaps a better question may be:   I am a multiple of 3 between 20 and 30, but not a multiple of 7 or 9. What number am I?     This problem isn't so appropriate for kids at all. We can find a recipe without alcohol. How about:   A recipe of sugar cookies has the ratio of 2:3:5 of cups of sugar to eggs to cups of flour? If you use 6 eggs, how much sugar did you use?       "
},
{
  "id": "exercises-word-problems-1",
  "level": "2",
  "url": "sect-word-problems.html#exercises-word-problems-1",
  "type": "Exercise",
  "number": "3.2.3.1",
  "title": "",
  "body": "  Write good word problems appropriate for 2nd, 3rd or 4th grade students with the following characteristics.     The problem demonstrates .      The problem demonstrates using comparison interpretation.      The problem demonstrates using part-whole interpretation.      The problem demonstrates .      The problem demonstrates using measurement division.      The problem demonstrates using partitive division.    "
},
{
  "id": "exercises-word-problems-2",
  "level": "2",
  "url": "sect-word-problems.html#exercises-word-problems-2",
  "type": "Exercise",
  "number": "3.2.3.2",
  "title": "",
  "body": "  For each of the following, write a bad word problem and then write a fix for it.     The problem demonstrates       The problem demonstrates using comparison interpretation      The problem demonstrates       The problem demonstrates using measurement division.    "
},
{
  "id": "ws-word-problems-1-1",
  "level": "2",
  "url": "sect-word-problems.html#ws-word-problems-1-1",
  "type": "Worksheet Exercise",
  "number": "3.2.4.1",
  "title": "",
  "body": "  Consider the following word problems. For each explain why each problem is not a ``good'' problem and fix each one:     The boy has 18 things and puts them in groups of 3. How many things goes in each group?      Sarah goes to the store. She runs into her friend halfway there? How far did she go?      Fred is 30 inches tall. His father is 35 inches tall. How much taller is Fred's father than Fred?    "
},
{
  "id": "sect-teachers-solutions",
  "level": "1",
  "url": "sect-teachers-solutions.html",
  "type": "Section",
  "number": "3.3",
  "title": "Teacher’s Solutions",
  "body": " Teacher's Solutions     Understand how to produce a Teacher's Solution.    Explain why it is important to know how to produce a Teacher's solution.    Be able to solve a diverse selection of word problems.    Understand how to use the Unitary method to solve complicated word problems.      Understanding word problems from an educator's side is a crucial skill and it requires understanding a problem at a deep level. Because of this, a common task to ensure that the word problems is known well is to develop a Teacher's Solution, which require three specific parts:   Steps for a Teacher's Solution  A Teacher's Solution is a solution to a word problem with the following.   A diagram of the word problem. The diagram should show all numerical parts of the problem (and only those in the problem) as well as a ? indicating the quantity that is sought. Most of the Teacher's solution in this text will show bar diagrams because of the flexibility involved. However, other diagrams may be helpful.    A detailed solution with steps explained as necessary. The level of detailed needed should be compatible with the level of the problem. For example if you solving a 3rd grade problem, don't include algebra, but at the same time a problem at the fifth grade level shouldn't need to show details that you would require at 2nd grade.    Answer the question as a full sentence. This is just a good habit to get into.        Solving Word Problems  As discussed above, solving word problems is difficult and there is algorithmic (step-by-step) way to do this will any word problem. Here's a few ideas about this.     Converting the word problem to an arithmetic or algebra problem. Often a diagram can help this.    Solving the arithmetic or algebra problem.    Interpreting the solution to obtain the answer to the question asked.     In this text, we will concentrate on techniques that do not use algebra, although often problems can be done in a simpler way with algebra. The main reason for this is that we are concentrating on Elementary Education here and all the word problems presented should be solvable without algebra and it is important to know how to tackle them.    Develop a Teacher's Solution for the following: Patrick has 12 marbles. He gives away 5 of them? How many does he have left?     First we need a diagram. Since the numbers are small, a set diagram may be the right thing to do here. Since this is a take-away interpretation, we will draw 12 marbles and then cross out 5. In this case, this is simple enough not to need a ?. The following is a possible Teacher's Solution:        The answer is . Patrick has 7 marbles left.   Alternatively, we could have used the following as a Teacher's solution:        Which shows that Patrick has or 7 marbles left.   This would have been preferable if the number of marbles were larger that is if it tedious to draw or difficult to count.      Develop a Teacher's Solution for the following: A bakery made 60 muffins on Monday and 50 on Tuesday. How many did they make altogether?     For this since the numbers are larger, use a bar diagram instead of a set diagram. Also, the context of this problem is important. It is probable that students are learning how to add multiples of 10 and that this should be done with some mental math (see for details), so the column algorithm (see for details) would not be needed.  The following is a possible Teacher's Solution:        There are a total of muffins. The bakery make 110 muffins on Monday and Tuesday.   Note: this could have been done with a stacked bar diagram and labelled Monday and Tuesday like:        The bakery make .   The second solution shows the same result and is a bit nicer that it includes the days.    The next example shows a Teacher's solution involving division.    Find a Teacher's Solution to: Margaret has 80 muffins and puts them in packages of 5. How many packages can she make?     Although this may seem straightforward, we first need a diagram. This happens to be a measurement division problem because we know the size of the groups (packages) and are looking for the number of groups (packages):        The number of packages is . Margaret can make 16 packages of muffins.       The Unitary Method and Multi-step problems  Multi-step problems are important for developing students mathematical skills in that it requires the ability to think about more complex problems. This section goes over some techniques of solving harder word problems.  We desire to construct a Teacher's Solution to the following: A school has 120 students. Each student is wearing either a blue or a red t-shirt. If there are 4 times more blue t-shirts than red t-shirts, how many students are wearing a red t-shirt?   We first start with a diagram. We don't know the total length of either the number of students wearing blue or red, but we do know that the length of the blue diagram should be 4 times the length of the red one. We can show this with:       First, note that this diagram is helpful whenever we know the relationship between two groups. As in the case above, it says that one group is some number times larger than the other group. In later chapters, we'll see these diagrams with fractions and ratios.   Unitary Method  Anytime a problem has a diagram with boxes of the same size including above where one is 4 times larger than the other, we can use the unitary method in which we use information in the problem to build equations with the number of units involved. The above problem will lead to and we got 5 units because the total number of students (120) represents 5 of the boxes. Next, we divide by 5 to get: and since the number of students wearing red is 1 unit, the answer is 24.  The other way to solve this problem is with algebra. If the number of students wearing red is , then the number of students wearing blue is . The total number of students would be , so so there were 24 students wearing red.  Note that the unitary method does the same steps as the algebraic method, so in a way it is a prealgebra type method. It visually builds up the relationship instead of algebraically. Knowing which method with the appropriate age group is important.     Find a Teacher's solution to the following problem using the Unitary method: Jordan weighs 7 pounds less than Charlie. Albert weighs twice that of Charlie, if they weigh 193 pounds altogether, how much does Jordan weigh?     First a diagram. Since there are three people in this problem we'll do a stacked bar diagram with 3 bars.       To find the solution, note that if Jordan weighed 7 more pounds then there would be 4 equal units in the diagram and the total weight would be . Thus, So this means that Charlie weighs 50 pounds. Jordan weighs pounds.    Note in the solution above, we added some to make 4 equivalent boxes (units) and then performed steps with the units. The following shows an similar type solution:    Find a Teacher's solution to the following problem. Use the Unitary method: José has $240 and Maria has $180. How much should José give to Maria so then each have the same amount?     We'll start with a stacked bar diagram:       and note that the amount that José should give to Maria is half of the difference between them. One can think of moving that part to Maria's bar, so they are the same.  The difference is , so So José should give Maria $30 so they each have the same amount of money.    Note that in this example, you needed to understand that the difference in their money needs to be divided by 2. This makes two equal sized boxes (units) and hence the unitary method works.      Produce a bar diagram for each of the following problems and solve     Mrs. Lee bought 10 towels. Each towel cost $8. How much did she pay?      There are 9 red balloons. there are 3 times as many blue balloons as red balloons. How many balloons are there altogether?      Lynn poured 16 qt of syrup equally into 4 bottles. How many quarts of syrup were there in each bottle?       Produce a bar diagram for each of the following problems and solve     Mark earned $3915. He spent $1268 on food and $1380 on rent and transport. How much did he have left?      A refrigerator costs $1739. A oven is $850 cheaper than the refrigerator. Mrs. Coles buys both the refrigerator and the oven. How much does she pay?       Produce a Teacher's Solution for each of the following problems. Note: for the solution the Unitary method may be helpful.     John is 15 kg heavier than Peter. Their total weight is 127 kg. Find John's weight.      There are 3 times as many boys as girls. If there are 24 more boys than girls, how many children are there altogether?      Pablo has $180 and Ryan has $150. How much money must Pablo give Ryan so that they each will have an equal amount of money?      Matthew has twice as many stickers as David. How many stickers must Matthew give David so that they each will have 120 stickers?      Peter has twice as many stickers as Joe. Joe has 40 more stickers than Emily. They have 300 stickers altogether. How many stickers does Peter have?      At a book fair, Juan bought 24 books at 3 for $5 and had $2 left. How much money did he have at first?      Lucia bought 3 books and a magazine. She paid $30 to the cashier and received $5 change. If the magazine cost twice as much as each book, find the cost of the magazine.      Harry bought 155 oranges for $35. He found that 15 of them were rotten. He sold all the remaining oranges at 7 for $2. How much money did he make?      John and Paul spent $45 altogether. John and Henry spent $65 altogether. If Henry spent 3 times as much as Paul, how much did John spend?      Ashley had 600 cookies. She packed them into packets of 24. How many packets of cookies did she get?      There are 2204 children in a school. 925 of them are girls. How many more boys than girls are there?      3 pieces of ribbon, each 85 cm long, are cut from a length of ribbon 3 m long. What is the length of the remaining piece of ribbon?      Peter, John and Dan shared $1458 equally. Peter used part of his shared to buy a bicycle and had $139 left. What was the cost of the bicycle?      Oranges are packed in a box in 4 layers. Each layer has 6 rows of oranges with 8 oranges in each row. How may oranges are there in the box?      Pierre's weight is 90 kg. He is 5 times as heavy as his daughter. Find the total weight of Pierre and his daughter.      "
},
{
  "id": "sect-teachers-solutions-2",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "   Understand how to produce a Teacher's Solution.    Explain why it is important to know how to produce a Teacher's solution.    Be able to solve a diverse selection of word problems.    Understand how to use the Unitary method to solve complicated word problems.    "
},
{
  "id": "sect-teachers-solutions-3-2",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-3-2",
  "type": "Note",
  "number": "3.3.1",
  "title": "Steps for a Teacher’s Solution.",
  "body": " Steps for a Teacher's Solution  A Teacher's Solution is a solution to a word problem with the following.   A diagram of the word problem. The diagram should show all numerical parts of the problem (and only those in the problem) as well as a ? indicating the quantity that is sought. Most of the Teacher's solution in this text will show bar diagrams because of the flexibility involved. However, other diagrams may be helpful.    A detailed solution with steps explained as necessary. The level of detailed needed should be compatible with the level of the problem. For example if you solving a 3rd grade problem, don't include algebra, but at the same time a problem at the fifth grade level shouldn't need to show details that you would require at 2nd grade.    Answer the question as a full sentence. This is just a good habit to get into.     "
},
{
  "id": "sect-teachers-solutions-4-5",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-4-5",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Develop a Teacher's Solution for the following: Patrick has 12 marbles. He gives away 5 of them? How many does he have left?     First we need a diagram. Since the numbers are small, a set diagram may be the right thing to do here. Since this is a take-away interpretation, we will draw 12 marbles and then cross out 5. In this case, this is simple enough not to need a ?. The following is a possible Teacher's Solution:        The answer is . Patrick has 7 marbles left.   Alternatively, we could have used the following as a Teacher's solution:        Which shows that Patrick has or 7 marbles left.   This would have been preferable if the number of marbles were larger that is if it tedious to draw or difficult to count.   "
},
{
  "id": "sect-teachers-solutions-4-6",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-4-6",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Develop a Teacher's Solution for the following: A bakery made 60 muffins on Monday and 50 on Tuesday. How many did they make altogether?     For this since the numbers are larger, use a bar diagram instead of a set diagram. Also, the context of this problem is important. It is probable that students are learning how to add multiples of 10 and that this should be done with some mental math (see for details), so the column algorithm (see for details) would not be needed.  The following is a possible Teacher's Solution:        There are a total of muffins. The bakery make 110 muffins on Monday and Tuesday.   Note: this could have been done with a stacked bar diagram and labelled Monday and Tuesday like:        The bakery make .   The second solution shows the same result and is a bit nicer that it includes the days.   "
},
{
  "id": "sect-teachers-solutions-4-8",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-4-8",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Find a Teacher's Solution to: Margaret has 80 muffins and puts them in packages of 5. How many packages can she make?     Although this may seem straightforward, we first need a diagram. This happens to be a measurement division problem because we know the size of the groups (packages) and are looking for the number of groups (packages):        The number of packages is . Margaret can make 16 packages of muffins.    "
},
{
  "id": "sect-teachers-solutions-5-8",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-5-8",
  "type": "Example",
  "number": "3.3.5",
  "title": "",
  "body": "  Find a Teacher's solution to the following problem using the Unitary method: Jordan weighs 7 pounds less than Charlie. Albert weighs twice that of Charlie, if they weigh 193 pounds altogether, how much does Jordan weigh?     First a diagram. Since there are three people in this problem we'll do a stacked bar diagram with 3 bars.       To find the solution, note that if Jordan weighed 7 more pounds then there would be 4 equal units in the diagram and the total weight would be . Thus, So this means that Charlie weighs 50 pounds. Jordan weighs pounds.   "
},
{
  "id": "sect-teachers-solutions-5-10",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-5-10",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": "  Find a Teacher's solution to the following problem. Use the Unitary method: José has $240 and Maria has $180. How much should José give to Maria so then each have the same amount?     We'll start with a stacked bar diagram:       and note that the amount that José should give to Maria is half of the difference between them. One can think of moving that part to Maria's bar, so they are the same.  The difference is , so So José should give Maria $30 so they each have the same amount of money.   "
},
{
  "id": "exercises-teachers-solutions-1",
  "level": "2",
  "url": "sect-teachers-solutions.html#exercises-teachers-solutions-1",
  "type": "Exercise",
  "number": "3.3.3.1",
  "title": "",
  "body": "  Produce a bar diagram for each of the following problems and solve     Mrs. Lee bought 10 towels. Each towel cost $8. How much did she pay?      There are 9 red balloons. there are 3 times as many blue balloons as red balloons. How many balloons are there altogether?      Lynn poured 16 qt of syrup equally into 4 bottles. How many quarts of syrup were there in each bottle?    "
},
{
  "id": "exercises-teachers-solutions-2",
  "level": "2",
  "url": "sect-teachers-solutions.html#exercises-teachers-solutions-2",
  "type": "Exercise",
  "number": "3.3.3.2",
  "title": "",
  "body": "  Produce a bar diagram for each of the following problems and solve     Mark earned $3915. He spent $1268 on food and $1380 on rent and transport. How much did he have left?      A refrigerator costs $1739. A oven is $850 cheaper than the refrigerator. Mrs. Coles buys both the refrigerator and the oven. How much does she pay?    "
},
{
  "id": "exercises-teachers-solutions-3",
  "level": "2",
  "url": "sect-teachers-solutions.html#exercises-teachers-solutions-3",
  "type": "Exercise",
  "number": "3.3.3.3",
  "title": "",
  "body": "  Produce a Teacher's Solution for each of the following problems. Note: for the solution the Unitary method may be helpful.     John is 15 kg heavier than Peter. Their total weight is 127 kg. Find John's weight.      There are 3 times as many boys as girls. If there are 24 more boys than girls, how many children are there altogether?      Pablo has $180 and Ryan has $150. How much money must Pablo give Ryan so that they each will have an equal amount of money?      Matthew has twice as many stickers as David. How many stickers must Matthew give David so that they each will have 120 stickers?      Peter has twice as many stickers as Joe. Joe has 40 more stickers than Emily. They have 300 stickers altogether. How many stickers does Peter have?      At a book fair, Juan bought 24 books at 3 for $5 and had $2 left. How much money did he have at first?      Lucia bought 3 books and a magazine. She paid $30 to the cashier and received $5 change. If the magazine cost twice as much as each book, find the cost of the magazine.      Harry bought 155 oranges for $35. He found that 15 of them were rotten. He sold all the remaining oranges at 7 for $2. How much money did he make?      John and Paul spent $45 altogether. John and Henry spent $65 altogether. If Henry spent 3 times as much as Paul, how much did John spend?      Ashley had 600 cookies. She packed them into packets of 24. How many packets of cookies did she get?      There are 2204 children in a school. 925 of them are girls. How many more boys than girls are there?      3 pieces of ribbon, each 85 cm long, are cut from a length of ribbon 3 m long. What is the length of the remaining piece of ribbon?      Peter, John and Dan shared $1458 equally. Peter used part of his shared to buy a bicycle and had $139 left. What was the cost of the bicycle?      Oranges are packed in a box in 4 layers. Each layer has 6 rows of oranges with 8 oranges in each row. How may oranges are there in the box?      Pierre's weight is 90 kg. He is 5 times as heavy as his daughter. Find the total weight of Pierre and his daughter.    "
},
{
  "id": "sect-thinking-strategies",
  "level": "1",
  "url": "sect-thinking-strategies.html",
  "type": "Section",
  "number": "4.1",
  "title": "Thinking Strategies",
  "body": " Thinking Strategies     Understand the thinking strategies for addition, subtraction, multiplication and division.    Show using diagrams why thinking strategies\/properties result in the same answer.    Use thinking strategies to simplify arithmetic problems.      First, recall that there are three addition properties that were introduced in . Let and be any whole number. Then     Additive Identity       Additive Commutative       Additive Associative        as well as the Any Order Addition Lemma ( )  Often with the following thinking strategies, we will cite these properties.    Thinking Strategies for Addition  This section discusses good ways to think about adding numbers using the properties above.   Counting-on  This uses the idea of starting at the first addend and then counting on the second addend. For example starts with 7 and then adds on 2 to get to 9.  When the second addend is small the counting-on method is a good thinking strategy. In addition, an example like can be thought of as counting on if you count by 10s.    Commutativity  One can use the additive commutative property ( ) to help in other operation. For example, can be thought-of in the “counting-on” method, that is start at 2 and count up 6 more to get to 8. However, if we use the commutative property, then is easier to use the counting-on method. In short, if either addend is small, count on with that number.    Doubles  The double are important to know and will help when getting to multiplication. See the next section.    Tens Combinations  Recall that the tens combinations are pairs of numbers that add to 10 or .    Adding Ten or One Hundred  Consider . As we saw above, we can think of this using commutative and counting on to get and count up from 10 to 6 to get 16. After that is natural, one should be able to add multiples of ten easily. For example in , recall place value to get:     Compatible Numbers  Compatible numbers are those that add to a resulting “nice” number. This result is often a multiple of 10 or 100 and are helpful in thinking strategies. The following are example of compatible numbers with respect to addition: , , , , .  Notice in the first 3 pairs, the ones digits form a tens combination and in the latter 2 pairs, the tens digits form a tens combination.  Consider a problem like . Perhaps you might think to do the following:   Many of these steps are challenging to do mentally mainly because there is bundling that needs to occur. Instead, we might use the any-order corollary, we can add these in any way and These pairs are compatible     Compensation  The method of compensation is a way to add larger numbers in a more efficient way by changing the addends. An example is . We will see below how to think about place value with this, however if we write this as Using the Associative Property   This works by transferring any number from one addend to the other. We can also write this as   An equation 48+34=50+32=82. On top of the 48+34 an arrow is shown from the 34 to the 48 with a +2 on top.     We now look at a few examples of using these thinking strategies.    Use compensation to find the following addition problems:                          One way to think about is to think about transferring 3 from the second addend to the first.   An equation 67+38 = 70 + 35 = 105. On top of the 67+38 an arrow is shown from the 38 to the 67 with a +3 on top.    alternatively, we transfer 2 from the first to the second addend or:   An equation 67+38 = 65+40 = 105. On top of the 67+38 an arrow is shown from the 67 to the 38 with a +2 on top.      One way to tackle one is to transfer 2 from the second addend to the first:   An equation 98+23=100+21=121. On top of the 98+23 an arrow is shown from the 23 to the 98 with a +2 on top.      One way to approach is to transfer 7 from the second addend to the first:   An equation 993+231=1000+224=1224. On top of the 993+231 an arrow is shown from the 231 to the 993 with a +7 on top.         Compensation is the most difficult, but perhaps the most important thinking strategy for addition. We show an algebraic as well as a diagram that shows this. First, let's say that we want to find and we can write , then the compensation is the transfer of from to .  A bar diagram leads nicely to this. We will use the example , but this works for any pair of addends. First, we will draw a bar diagram for    A horizontal bar split in two pieces. Below the left part shows a length of 43 and the below the right shows 56. Over the top of both, shows the length is ?.    Next, let's consider the compensation where has been transferred from the first addend to the second one. This can be drawn as another above:   A pair of horizontal bars. The top bar is split in two pieces. Below the left part shows a length of 40 and the below the right shows 59. Over the top of both, shows the length is ?. Below the left part of the bottom bar shows a length of 43 and the below the right shows 56. There is a dashed line in the same horizontal location as the dividing line of the bar above.      Thinking Strategies for Subtraction  This covers some ways to think about subtraction problems. We saw the counting down and counting up in , but we will explain this with some larger numbers. The compensation method is similar to that of addition, but works a bit differently.   Counting Down  If we are thinking of a problem like , you can use counting down as starting at 65 and counting down 23. However, it's easier to count first by 2 tens, then by 3 ones. The number line below shows this:   A number line from 40 to 70 counting by 5s. Starting at 65, there are two hops to the left of length ten and then 3 right to left hops of size 1. The last hop finishes at 42.      Counting Up  Similar to counting down, if we have a problem like , we start at 23 and count up to 65. However, first count up by tens to 63, then up 2 to 65. Visually, we can see this with:   A number line from 20 to 70. Starting at 23, there are 4 left to right hops of length 10 that hit at 33, 43, 53 and finishes at 63. There are then two hops to the right of length one with the ending at 64.    and this shows that the result (difference) is the total number of hops or 42.    Compensation  Similar to that of compensation with addition, we can simplify calculations involving subtraction. Consider the following:   Note: since one can add any number, typically it's best to add or subtract a number to make the subtrahend a multiple of 10 (or as we will see later a multiple of 100). Note that if we subtract 4 from each like:   is correct, however the calculation is easier to do than . Why?    Compatible Numbers  Similar to that of compatible numbers for addition, compatible numbers for subtraction are those that are easier to do or result in “nice” numbers, like those with multiples of 10 or 100. The following are compatibles , , , . This allows us to do some operations like . If we work this from left to right:   and you should notice that the last operation was easy to do, but the first was not. Instead we can rearrange things as:   and all of these operations are relatively easy to do.     Evaluate the following subtraction problems using compensation:                             Notice that this one requires to be done which isn't too bad using counting down. However, alternatively, one can do this problem using: with the same result and this doesn't require an unbundling.       Let's look at a diagram to show why this works. We'll consider the last problem and will add 7 to both the minuend and subtrahend. To see this most easily, we'll use a stacked bar diagram like:   A pair of horizontal bars. The top bar is shown to be length 92 and the bottom bar length 43. There is a ? shows the difference in lengths between the two.    To demonstrate the compensation, we'll add 7 to the end of both bars. Visually, this will be easier if we do so on the left end:   A pair of horizontal bars. The top bar is in two pieces. The left piece is length 7 and the right is length 92. The bottom bar is also in two pieces. The left piece is length 7 and the right 43. The difference in lengths is denoted with a ?    And the reason this works is because the difference (the ?) hasn't changed by adding the same amount to each end of the bars.  Subtraction compensation allows for subtracting the same amount as well. This would be seen visually by removing the same amount off each bar.    Thinking Strategies for Multiplication  Recall that there are three properties of multiplication that we saw in as well as the distributive property. If and are whole numbers then     Multiplicative Identity       Multiplicative Commutative       Multiplicative Associative       Distributive Property        There are 3 standard stages for teaching mathematics which we will cover. Before this, a student should be proficient at:   counting to 100,    addition doubles from to ,    skip counting by 2, 3, 5 and 10.      Compatible Numbers and Any-Order Multiplication  Similar to that of addition, we can use any-order multiplication to do operations. Consider . Although we can go left to right in multiplication, it is simpler if we collect by compatible numbers. In this case, note that , which is an easy number to multiply.     Compensation with Multiplication  Compensation is a good thinking strategy for pairs of numbers that can be done easier in a little different form. For example, if have , we can write and then use the associative property.   The following show a few other examples:    Find the following using compensation:                                Why does compensation work for multiplication? It is basically the associative multiplicative property. In general, if we have the number and such that , Note that since we are using variables here, we use a to denote multiplication instead of the symbol. then   The following diagram also shows compensation for multiplication of . We first start with a grid showing . We'll color half as orange and half as blue.   A grid of height 5 squares and length of 14. The left 5 by 7 grid is shaded light blue and the right 5 by 7 is shaded dark orange.    Restacking the blocks as:   A grid of height 10 squares and length 7. The top half is 5 squares by 7 and is shaded dark orange. The bottom half is 5 squares by 7 and is shaded light blue.    results a grid of lengths 7 and 10, showing that .    Multiplying by 4,5,8,9,10,25,100  The numbers 4,5,8,9,10,25,100 are easier to multiply than other numbers. When you see these, take advantage of the following strategies.    Multiply by 4  Just double the number twice. For example,     Multiply by 5  Take the number and halve then multiply by 10 (or flip the order of this). For example,     Multiply by 9  Use the rule . That is multiply by 10 then subtract the number. For example,     Multiply by 10  Append a 0 to the end of the number. For example,     Multiply by 25  Multiply the number by 100 and divide by 4 (or flip the order). Note: we will see division by 4 below, but you can divide by 2 twice. For example,     Multiply by 100  Append two zeros to the end of the number. For example,      Thinking Strategies for Division   Compensation  Compensation for division uses properties of division and we’ll assume that the result of the division has no remainder. Let , that is that is a multiple of , the divisor. Also, assume that and have a common factor, , that is and , therefore we can write:   There are a number of common places where compensation is nice to do with division as the following examples show.    Divide by 4  Halve twice. For example,     Divide by 5  Double then divide by 10. For example,     Divide by 10  Remove a zero from the end of the number. For example,     Divide by 25  Multiply by 4 then divide by 100. This is generally easiest to think of doubling twice. The following examples show an good way to think about this. or        Use compatible numbers to simplify the following addition problems. Show all steps in your thinking.                           Use compensation to simplify the following addition problems. Show all steps in your thinking using an arrow to show the transfer. Note: there may be more than one way to perform the compensation.                                  Use counting down and a number line to show the following subtraction problems.                           Use compensation to simplify the following subtraction problems. Show all steps in your thinking. Note: there may be more than one way to perform the compensation.                           Use compatible numbers and any-order multiplication to simplify the following multiplication problems.                    Use compensation with any-order to simplify the following multiplication problems.                           Review the multiplication by 4, 5, 8, 9, 10, 25, 100 and mentally perform the following products.                                                                                                 Review the division by 4, 5, 10, 25 and perform the following using compensation.                                                             "
},
{
  "id": "sect-thinking-strategies-2",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-2",
  "type": "Objectives",
  "number": "4.1",
  "title": "",
  "body": "   Understand the thinking strategies for addition, subtraction, multiplication and division.    Show using diagrams why thinking strategies\/properties result in the same answer.    Use thinking strategies to simplify arithmetic problems.    "
},
{
  "id": "sect-thinking-strategies-4-11",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-4-11",
  "type": "Example",
  "number": "4.1.1",
  "title": "",
  "body": "  Use compensation to find the following addition problems:                          One way to think about is to think about transferring 3 from the second addend to the first.   An equation 67+38 = 70 + 35 = 105. On top of the 67+38 an arrow is shown from the 38 to the 67 with a +3 on top.    alternatively, we transfer 2 from the first to the second addend or:   An equation 67+38 = 65+40 = 105. On top of the 67+38 an arrow is shown from the 67 to the 38 with a +2 on top.      One way to tackle one is to transfer 2 from the second addend to the first:   An equation 98+23=100+21=121. On top of the 98+23 an arrow is shown from the 23 to the 98 with a +2 on top.      One way to approach is to transfer 7 from the second addend to the first:   An equation 993+231=1000+224=1224. On top of the 993+231 an arrow is shown from the 231 to the 993 with a +7 on top.        "
},
{
  "id": "sect-thinking-strategies-5-7",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-5-7",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  Evaluate the following subtraction problems using compensation:                             Notice that this one requires to be done which isn't too bad using counting down. However, alternatively, one can do this problem using: with the same result and this doesn't require an unbundling.      "
},
{
  "id": "sect-thinking-strategies-6-6-4",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-6-6-4",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  Find the following using compensation:                               "
},
{
  "id": "sect-thinking-strategies-8-1",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-8-1",
  "type": "Exercise",
  "number": "4.1.5.1",
  "title": "",
  "body": "  Use compatible numbers to simplify the following addition problems. Show all steps in your thinking.                        "
},
{
  "id": "sect-thinking-strategies-8-2",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-8-2",
  "type": "Exercise",
  "number": "4.1.5.2",
  "title": "",
  "body": "  Use compensation to simplify the following addition problems. Show all steps in your thinking using an arrow to show the transfer. Note: there may be more than one way to perform the compensation.                               "
},
{
  "id": "sect-thinking-strategies-8-3",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-8-3",
  "type": "Exercise",
  "number": "4.1.5.3",
  "title": "",
  "body": "  Use counting down and a number line to show the following subtraction problems.                        "
},
{
  "id": "sect-thinking-strategies-8-4",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-8-4",
  "type": "Exercise",
  "number": "4.1.5.4",
  "title": "",
  "body": "  Use compensation to simplify the following subtraction problems. Show all steps in your thinking. Note: there may be more than one way to perform the compensation.                        "
},
{
  "id": "sect-thinking-strategies-8-5",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-8-5",
  "type": "Exercise",
  "number": "4.1.5.5",
  "title": "",
  "body": "  Use compatible numbers and any-order multiplication to simplify the following multiplication problems.                 "
},
{
  "id": "sect-thinking-strategies-8-6",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-8-6",
  "type": "Exercise",
  "number": "4.1.5.6",
  "title": "",
  "body": "  Use compensation with any-order to simplify the following multiplication problems.                        "
},
{
  "id": "sect-thinking-strategies-8-7",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-8-7",
  "type": "Exercise",
  "number": "4.1.5.7",
  "title": "",
  "body": "  Review the multiplication by 4, 5, 8, 9, 10, 25, 100 and mentally perform the following products.                                                                                              "
},
{
  "id": "sect-thinking-strategies-8-8",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-8-8",
  "type": "Exercise",
  "number": "4.1.5.8",
  "title": "",
  "body": "  Review the division by 4, 5, 10, 25 and perform the following using compensation.                                                           "
},
{
  "id": "sect-mental-math",
  "level": "1",
  "url": "sect-mental-math.html",
  "type": "Section",
  "number": "4.2",
  "title": "Mental Math",
  "body": " Mental Math     Be able to use mental math skills to refine and quicken your arithmetic abilities.    Write out the steps of your mental to be able to show your thinking.    Solve multi-step arithmetic problems mentally.      As discussed earlier, mental math plays an important role in development the understanding of arithmetic. It is important to have an understanding     of the place value system,    of the properties of addition, subtraction, multiplication and division,    that answers can be arrived at in different ways with some much easier than others.     In short, educators should have a firm grasp of number sense and arithmetic operations. Practicing these techniques can help you get better at all of these and building a strong mathematical foundation.    Writing Mental Math  This section seems to be self-contradictory. Mental math means doing math in your head and writing the steps down seems to be the antithesis of what we want. There are two main reasons for becoming adept at writing mental math:     From an educator's point of view, knowing the students thinking is important, so as you learn this, writing down the steps means you are able to show your thinking.    Writing the steps down emphasizes the mathematical logic of your steps.     Written Mental MathThe following aspects show good mental math steps:     Start with the original problem, that is all parts.    For each step, use an to the next step. The left and right sides must be equal.    You can work left to right or top to bottom or a little bit of both.    Some mental math methods can be helped with annotations (examples shown below), however it should be clear what you are doing on each step.     First, here is a nice example showing how to solving a mental math problem.    Find the following using mental math and show your steps:                           Although this is sufficient to show work. If you don't quite follow, here's what we did:   For the first step (from the left side to the right side of the first =), we have used the additive any-order property and put parentheses around terms to be added.    For step two, add the terms in the parentheses.    For the last step, add the three terms. Adding multiples of 10 are fairly straightforward.   Alternatively, you can stack the steps vertically like:   and notice that the first steps (first line) shows an equation. The remaining steps mean that the line above it is equal to the current line.       This is a compensation problem and we'll add 1 to both the minuend and subtrahend to get an easier problem.       This is a compensation problem using multiplication and in short transfer a 2 from the 86 to the 5. The above steps shows this clearly.       The reason for writing mental math this way is that what this shows is that the original problem is linked to the last step by equal signs so that it is clear what the original problem's answer is.  A common way that student's often solve this before learning the details of why writing these are important would look like this:    and the spirit of the problem is there in that the student sees the terms and are compatible numbers.    Mimicking the Algorithms  If you are really good at the arithmetical algorithms (column algorithms or long division) that we will see in , perhaps you wonder why you can’t just do these in you head. The answer is, you can. Here are a few examples on how to write these out. Notice with these that you use the expanded form of the number for the first step.    Use Mental Math to show the following operations:                          For this, notice that we are using the distributive property to write these out:     For        For        For        For             Rearranging and Compatible Numbers  Rearranging often helps if one can identify compatible numbers, that is pairs or groups of numbers that combine advantageously. These can be tricky and you need to be able to identify pairs of numbers that add or multiply to “nice” number. The following shows some examples that rearrange to perform compatible numbers first.    Find the following using mental math:                                Notice that we rearranged to move the compatible numbers and , the first is 100 and the second is a multiple of 10.       In this case, we rearranged to move the 2 and 5 to multiply first, since this is 10 and it’s easy to multiply by 10.       In this case, there are 5 numbers, so try to identity terms that add nicely, so look for tens combinations. Note that since we’re looking for tens combinations, the result requires a bundling. So the tens on can be thought of as .       In this case, note that the product of and is 100, so we combine those and combine the remaining terms.         Compensation  We covered compensation Compensation can be used with all 4 arithmetics operations, but remember that each one works a little differently. If you need, Recall:     For addition, shift a number from one addend to the other:                  For subtraction, add or subtract the same number to both subtrahend and minuend:                   We could have . Why did we do the above?    For division, multiply or divide by the divisor and dividend by the same number.                     Other examples:                            Mental Math and the Algorithms  It is common that once student of mathematics I'm thinking of you (future teachers) and me know the algorithms that you have learned to do the arithmetic operations, why use anything else. They work all of the times.  In this section, sometimes the standard algorithms are perfect to use if the numbers are setup correctly. For example, and if we add the tens and the ones separately, there is no bundling and the result is . Let's look a number of examples:    For each of the following, use the standard algorithms to do mentally.          Recall that                           For multiplication problems, the numbers have to be just right to avoid need to bundle, which can make a problem hard to do mentally. In this case, it would probably be easier to do the multiplication by 4 rule, which is to double twice.          Calculate mental by rearranging, using compatible numbers, etc. Show all intermediate steps in the manner of above.                                                Calculate mentally using compatible numbers:                           Calculate mentally using compensation.                                                Calculate each using the standard algorithm mentally.                                         Calculate mentally using any method:                                               "
},
{
  "id": "sect-mental-math-2",
  "level": "2",
  "url": "sect-mental-math.html#sect-mental-math-2",
  "type": "Objectives",
  "number": "4.2",
  "title": "",
  "body": "   Be able to use mental math skills to refine and quicken your arithmetic abilities.    Write out the steps of your mental to be able to show your thinking.    Solve multi-step arithmetic problems mentally.    "
},
{
  "id": "sect-mental-math-4-7",
  "level": "2",
  "url": "sect-mental-math.html#sect-mental-math-4-7",
  "type": "Example",
  "number": "4.2.1",
  "title": "",
  "body": "  Find the following using mental math and show your steps:                           Although this is sufficient to show work. If you don't quite follow, here's what we did:   For the first step (from the left side to the right side of the first =), we have used the additive any-order property and put parentheses around terms to be added.    For step two, add the terms in the parentheses.    For the last step, add the three terms. Adding multiples of 10 are fairly straightforward.   Alternatively, you can stack the steps vertically like:   and notice that the first steps (first line) shows an equation. The remaining steps mean that the line above it is equal to the current line.       This is a compensation problem and we'll add 1 to both the minuend and subtrahend to get an easier problem.       This is a compensation problem using multiplication and in short transfer a 2 from the 86 to the 5. The above steps shows this clearly.      "
},
{
  "id": "sect-mental-math-5-3",
  "level": "2",
  "url": "sect-mental-math.html#sect-mental-math-5-3",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Use Mental Math to show the following operations:                          For this, notice that we are using the distributive property to write these out:     For        For        For        For          "
},
{
  "id": "sect-mental-math-6-3",
  "level": "2",
  "url": "sect-mental-math.html#sect-mental-math-6-3",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Find the following using mental math:                                Notice that we rearranged to move the compatible numbers and , the first is 100 and the second is a multiple of 10.       In this case, we rearranged to move the 2 and 5 to multiply first, since this is 10 and it’s easy to multiply by 10.       In this case, there are 5 numbers, so try to identity terms that add nicely, so look for tens combinations. Note that since we’re looking for tens combinations, the result requires a bundling. So the tens on can be thought of as .       In this case, note that the product of and is 100, so we combine those and combine the remaining terms.      "
},
{
  "id": "sect-mental-math-7-4",
  "level": "2",
  "url": "sect-mental-math.html#sect-mental-math-7-4",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Other examples:                         "
},
{
  "id": "subsec-mental-math-algorithms-4",
  "level": "2",
  "url": "sect-mental-math.html#subsec-mental-math-algorithms-4",
  "type": "Example",
  "number": "4.2.5",
  "title": "",
  "body": "  For each of the following, use the standard algorithms to do mentally.          Recall that                           For multiplication problems, the numbers have to be just right to avoid need to bundle, which can make a problem hard to do mentally. In this case, it would probably be easier to do the multiplication by 4 rule, which is to double twice.     "
},
{
  "id": "exercises-mental-math-1",
  "level": "2",
  "url": "sect-mental-math.html#exercises-mental-math-1",
  "type": "Exercise",
  "number": "4.2.6.1",
  "title": "",
  "body": "  Calculate mental by rearranging, using compatible numbers, etc. Show all intermediate steps in the manner of above.                                             "
},
{
  "id": "exercises-mental-math-2",
  "level": "2",
  "url": "sect-mental-math.html#exercises-mental-math-2",
  "type": "Exercise",
  "number": "4.2.6.2",
  "title": "",
  "body": "  Calculate mentally using compatible numbers:                        "
},
{
  "id": "exercises-mental-math-3",
  "level": "2",
  "url": "sect-mental-math.html#exercises-mental-math-3",
  "type": "Exercise",
  "number": "4.2.6.3",
  "title": "",
  "body": "  Calculate mentally using compensation.                                             "
},
{
  "id": "exercises-mental-math-4",
  "level": "2",
  "url": "sect-mental-math.html#exercises-mental-math-4",
  "type": "Exercise",
  "number": "4.2.6.4",
  "title": "",
  "body": "  Calculate each using the standard algorithm mentally.                                      "
},
{
  "id": "exercises-mental-math-5",
  "level": "2",
  "url": "sect-mental-math.html#exercises-mental-math-5",
  "type": "Exercise",
  "number": "4.2.6.5",
  "title": "",
  "body": "  Calculate mentally using any method:                                             "
},
{
  "id": "sect-rounding",
  "level": "1",
  "url": "sect-rounding.html",
  "type": "Section",
  "number": "4.3",
  "title": "Estimation and Rounding",
  "body": " Estimation and Rounding     Be able to round to nearest power of ten.    Use rounding to quickly perform estimations of numerical expressions.    Use range estimates to know where the actual answer lies as well as use range estimates to solve word problems.      This section is all about getting approximations to numbers. It is often the case that we need to know about what the answer is, not exactly the answer.    Rounding  An important skill will be to find a number to the nearest multiple of 10, 100, 1000, etc. For small numbers this is relatively straightforward, but for larger numbers a grasp of place value is key.    Round 73 to the nearest ten.    First note that 73 could either be rounded up to 80 or down to 70. Because 73 is closer to 70, then this is the answer.    The following is the rounding algorithm that is typically used.   Rounding Algorithm     To round a number to the nearest ten, if the ones digit is 0,1,2,3,4 round down, and 5,6,7,8,9 round up.    To round a number to the nearest hundred, if the tens digit is 0,1,2,3,4 round down, if the tens digit is 5,6,7,8,9 round up.    To round a number to the nearest thousand, if the hundreds digit is 0,1,2,3,4 round down, if the hundreds digit is 5,6,7,8,9 round up.    Rounding to higher denominations is similar.      This can be understood visually with a number line. Consider the problem of rounding 73 to the nearest ten. We'll draw the number line with 73 with the two options 70 and 80.   A number line from 70 to 80. The number 73 is also marked.    The two options 70 and 80 are 3 units and 7 units away from 73 as shown with:   A number line from 70 to 80. The number 73 is also marked. There is an arrow from 73 to 70 with the number 3 atop and an arrow from 73 to 80 with the number 7 on top.    If a number's ones digit is 5 and you are asked to round to the nearest ten, then this might be a bit of a puzzle. Consider rounding 55 to the nearest ten. If we plot on the number line similar to above:   A number line from 50 to 60. The number 55 is also marked. There is an arrow from 55 to 50 with the number 5 atop and an arrow from 55 to 60 with the number 5 on top.    This is clear that 55 is equally close to 50 or 60. The convention is that if the rounding digit is a 5 that we round up .   Rounding Decimals  Rounding is also important with decimals and we will see how to do this in .     Estimation  Estimation is the process of quickly finding an operation that is close but not necessary the exact answer.  Why is this a good skill to learn?     Helps with learning place value.    Reinforces mental math.    Determines if answers are probably correct.    Helps in long division.      Rounding  Rounding By rounding numbers to the nearest ten (or power of ten), we can get a good idea of the size of a number.    Find .    Since and , .     We now look at some important steps for students to work through in estimation:   Step 1:  Rounding to 1-digit arithmetic skills:           .     .     .       Step 2:  Keep track of place value.                   What is a good estimation?  Is all estimation good? For example, if we try to find . Here are some possible answers:                          Although any one if these is a reasonable estimate, The second one rounded both factors up and the resulting approximation is larger than the actual answer. The fourth rounded both factors down and the resulting approximation is smaller than the actual answer.  Perhaps if you're trying to get close, use one that rounds one up and one down, so either the first or third.    Range Estimates  As we saw above, what we mean by a good estimate depends on what we want. However, it's common to want to have both a high and low estimate so we know where our answer lies. For example as shown above, is between 900 and 1400. A range estimate is a pair of estimates: one too high, and one too low.  Finding range estimates depends on the operation. We saw in the example above, for both addition and multiplication, a high estimate rounds both factors up and a low one rounds both down. However, for subtraction and division, a high estimate rounds the subtrahend and dividend up and then the minuend or divisor down. A low estimate reverses these. We look at end of these with examples.   Range Estimates for Addition    Find a range estimate for to the nearest 50.    For addition a high estimate will round both up to the nearest 50   and we have used compensation mental math to do the last calculation. A low estimate is   This allows us to know that the actual value is between 1350 and 1450.      Range Estimates for Subtraction  For subtraction,    Give a range estimate for     As mentioned above, because a larger minuend makes for a smaller difference, to find the high and low estimates requires mixing the rounding.     High Estimate  For this a simple estimate is to round up to and then to round the minuend down to . This would result in   But this is not a good estimate. Let's instead round to the nearest ten or where can be found easily with compensation as     Low Estimate  If we round to the nearest 100, then we will round down the subtrahend and up the minuend or   This isn't a great estimate. Let's try rounding to the nearest tens or where mentally you can do with compensation.     Therefore the best estimate puts the range as between 120 and 140, which is a good tight estimate.      Range Estimates for Multiplication    Find a range estimate of .    For this, we will find both a high and low estimate of both numbers. We'll round 18 to the nearest 10 and 315 to the nearest hundred.   Low Estimate       High Estimate        Because both numbers in the low estimate are smaller than the original, the actual value of must be larger than 3000. Similarly, since both numbers in the high estimate is larger than the original, the actual value is smaller than 8000. We can say then that is between 3000 and 8000.    Looking at the last estimate, you may think that the range 3000 to 8000 is very wide. However, if you are using it to check an answer it could be useful to eliminate errors often associated with place value.  However, what if we want a tighter range estimate. We can round to other values instead. For example, for a low estimate we can round 18 to 15 and 315 to 300 to get where is not too difficult to do mentally. If you're better at mental math another low estimate could be   On the high estimate, it's natural to round the 18 to 20, but if we round 315 to 320 instead we get or if you refine those mental math skills   Thus, a tighter range estimate for this problem is 5400 to 6300.    Range Estimates for Division  Similar to subtraction, a range estimate for division requires different rounding for the dividend and divisor. For a high estimate, round the dividend up and the divisor down. For a low estimate, round the dividend down and the divisor up.  Also, since division either often results in a remainder or as we will see a fraction, estimates with division often require either rounding to compatible numbers, that is ones that either result in a whole number or if there is a remainder, round the remainder up or down.    Find a range estimate for     In this case, a dividend in the hundreds and the divisor in the tens will probably result in a quotient in the tens. Thus, we should round the dividend to the nearest tens instead of hundreds.     High Estimate  For a high estimate, we need to round the dividend up and the divisor down.     Low Estimate  For a low estimate, we need to round the dividend down and the divisor up.      Thus a range estimate for this is 18 to 38.       Teaching Estimates  Teaching estimates requires that we teach students why to estimate as well as what makes a good estimate. Often, we can use problems with clear results to emphasize this. As with other parts of mathematics, good practical examples are often helpful. We look at a few examples.    Johnny and Felix both collect Magic, the Gathering cards. Johnny has 3 piles and knows that there are 51, 69 and 73 in the piles. Felix has 4 piles of cards and there are 29, 52, 43 and 35 cards in the piles. Who has more cards?    As before, we could add up the number for each, but perhaps an estimate is sufficient.  We will find a range estimate for both of them.   Johnny  The low estimate could be and a high estimate would be     Felix  The low estimate could be and a high estimate could be      We see that Johnny has a least 180 cards and Felix has at most. If we look at the estimate, there was rounding going on, to this means that Johnny has more cards.      There are 24 bottles of apple juice in a case. Each apple juice is 12 ounces. A school needs 1000 ounces of juice for an event. How many cases would they need?    If we estimate the ounces in a case, then   And then to determine the number of cases, we would need to estimate   And this is a little more that 4. Would the school need to then purchase 5 cases?  Clearly to be safe that would be wise, however, if the number of ounces in a case is more than 250, then the school would only need 4 cases.  Notice that by rounding 12 down to 10, we have underestimated by an amount that is or more than 10. Thus we know that is greater than 250. Therefore 4 cases is plenty.    The next problem helps with the long division algorithm in .    Is closest to 610, 61 or 6.1?    Since we are just looking for closest, we can do just an estimate. and thus 610 is the best answer.      Claire has $20 to buy groceries. If she buys products that cost $1.99, $1.25, $4.95, $8.15 and $0.95, does she have enough? What if she also has to pay 5% sales tax.    Even though we haven't covered decimals yet, you the student have and should have the ability to understand this problem.  Since we want to make sure she has enough, if we produce a high estimate, and it comes in below $20, she will have enough. So it appears she will have enough.  To include the 5% sales tax, note that for $20, 5% is $1, so that would add another dollar to the total. Again, since this is a high estimate, Claire will have enough money.     "
},
{
  "id": "sect-rounding-2",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-2",
  "type": "Objectives",
  "number": "4.3",
  "title": "",
  "body": "   Be able to round to nearest power of ten.    Use rounding to quickly perform estimations of numerical expressions.    Use range estimates to know where the actual answer lies as well as use range estimates to solve word problems.    "
},
{
  "id": "sect-rounding-4-3",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-4-3",
  "type": "Example",
  "number": "4.3.1",
  "title": "",
  "body": "  Round 73 to the nearest ten.    First note that 73 could either be rounded up to 80 or down to 70. Because 73 is closer to 70, then this is the answer.   "
},
{
  "id": "sect-rounding-4-5",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-4-5",
  "type": "Note",
  "number": "4.3.2",
  "title": "Rounding Algorithm.",
  "body": " Rounding Algorithm     To round a number to the nearest ten, if the ones digit is 0,1,2,3,4 round down, and 5,6,7,8,9 round up.    To round a number to the nearest hundred, if the tens digit is 0,1,2,3,4 round down, if the tens digit is 5,6,7,8,9 round up.    To round a number to the nearest thousand, if the hundreds digit is 0,1,2,3,4 round down, if the hundreds digit is 5,6,7,8,9 round up.    Rounding to higher denominations is similar.     "
},
{
  "id": "sect-estimation-5-3",
  "level": "2",
  "url": "sect-rounding.html#sect-estimation-5-3",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "  Find .    Since and , .   "
},
{
  "id": "sect-rounding-7-4-2",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-7-4-2",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Find a range estimate for to the nearest 50.    For addition a high estimate will round both up to the nearest 50   and we have used compensation mental math to do the last calculation. A low estimate is   This allows us to know that the actual value is between 1350 and 1450.   "
},
{
  "id": "sect-rounding-7-5-3",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-7-5-3",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": "  Give a range estimate for     As mentioned above, because a larger minuend makes for a smaller difference, to find the high and low estimates requires mixing the rounding.     High Estimate  For this a simple estimate is to round up to and then to round the minuend down to . This would result in   But this is not a good estimate. Let's instead round to the nearest ten or where can be found easily with compensation as     Low Estimate  If we round to the nearest 100, then we will round down the subtrahend and up the minuend or   This isn't a great estimate. Let's try rounding to the nearest tens or where mentally you can do with compensation.     Therefore the best estimate puts the range as between 120 and 140, which is a good tight estimate.   "
},
{
  "id": "sect-rounding-7-6-2",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-7-6-2",
  "type": "Example",
  "number": "4.3.6",
  "title": "",
  "body": "  Find a range estimate of .    For this, we will find both a high and low estimate of both numbers. We'll round 18 to the nearest 10 and 315 to the nearest hundred.   Low Estimate       High Estimate        Because both numbers in the low estimate are smaller than the original, the actual value of must be larger than 3000. Similarly, since both numbers in the high estimate is larger than the original, the actual value is smaller than 8000. We can say then that is between 3000 and 8000.   "
},
{
  "id": "sect-rounding-7-7-4",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-7-7-4",
  "type": "Example",
  "number": "4.3.7",
  "title": "",
  "body": "  Find a range estimate for     In this case, a dividend in the hundreds and the divisor in the tens will probably result in a quotient in the tens. Thus, we should round the dividend to the nearest tens instead of hundreds.     High Estimate  For a high estimate, we need to round the dividend up and the divisor down.     Low Estimate  For a low estimate, we need to round the dividend down and the divisor up.      Thus a range estimate for this is 18 to 38.   "
},
{
  "id": "sect-rounding-8-3",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-8-3",
  "type": "Example",
  "number": "4.3.8",
  "title": "",
  "body": "  Johnny and Felix both collect Magic, the Gathering cards. Johnny has 3 piles and knows that there are 51, 69 and 73 in the piles. Felix has 4 piles of cards and there are 29, 52, 43 and 35 cards in the piles. Who has more cards?    As before, we could add up the number for each, but perhaps an estimate is sufficient.  We will find a range estimate for both of them.   Johnny  The low estimate could be and a high estimate would be     Felix  The low estimate could be and a high estimate could be      We see that Johnny has a least 180 cards and Felix has at most. If we look at the estimate, there was rounding going on, to this means that Johnny has more cards.   "
},
{
  "id": "sect-rounding-8-4",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-8-4",
  "type": "Example",
  "number": "4.3.9",
  "title": "",
  "body": "  There are 24 bottles of apple juice in a case. Each apple juice is 12 ounces. A school needs 1000 ounces of juice for an event. How many cases would they need?    If we estimate the ounces in a case, then   And then to determine the number of cases, we would need to estimate   And this is a little more that 4. Would the school need to then purchase 5 cases?  Clearly to be safe that would be wise, however, if the number of ounces in a case is more than 250, then the school would only need 4 cases.  Notice that by rounding 12 down to 10, we have underestimated by an amount that is or more than 10. Thus we know that is greater than 250. Therefore 4 cases is plenty.   "
},
{
  "id": "sect-rounding-8-6",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-8-6",
  "type": "Example",
  "number": "4.3.10",
  "title": "",
  "body": "  Is closest to 610, 61 or 6.1?    Since we are just looking for closest, we can do just an estimate. and thus 610 is the best answer.   "
},
{
  "id": "sect-rounding-8-7",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-8-7",
  "type": "Example",
  "number": "4.3.11",
  "title": "",
  "body": "  Claire has $20 to buy groceries. If she buys products that cost $1.99, $1.25, $4.95, $8.15 and $0.95, does she have enough? What if she also has to pay 5% sales tax.    Even though we haven't covered decimals yet, you the student have and should have the ability to understand this problem.  Since we want to make sure she has enough, if we produce a high estimate, and it comes in below $20, she will have enough. So it appears she will have enough.  To include the 5% sales tax, note that for $20, 5% is $1, so that would add another dollar to the total. Again, since this is a high estimate, Claire will have enough money.   "
},
{
  "id": "sect-addition-algorithms",
  "level": "1",
  "url": "sect-addition-algorithms.html",
  "type": "Section",
  "number": "5.1",
  "title": "Addition Algorithms",
  "body": " Addition Algorithms     Develop the expanded version of addition.    Understand the Chip models for addition.    Understand how bundling works in expansion version and chip models.    Extend the ideas in the chip model and expanded version to the column algorithm for addition.    Use the chip model and the column algorithm to add numbers in base-5.      The addition algorithm is primarily used for numbers of 2 or more digits than can’t be easily done with mental math. A simple example is . First, recall the expanded form of these with place-value:   Alternatively, we can see this in a column addition format:   When any of the sums within any place value is greater than 9, this operation becomes a little more difficult. Consider     Prerequisite for Column Addition with Bundling  There are a number of skills that students need to know to handle any addition problem with bundling. These skills include     knowing the one-digit addition for all numbers through ,    knowing the place-value system of numbers from .     And more specifically, student must be able to     write numbers in expanded form. For example, and ,    add multiples of 10s, 100s, 1000s: , , , and add a multiple of 10 to other numbers ,    compose a ten (bundling), which means taking 10 ones and making 1 ten or 10 tens and making 1 hundred.       Chip Models For Addition  Recall that the chip model seen in Chapter is that of a coin model where coins of the same denominator are placed in columns. Consider 325, which as a coin model would look like:   Three horizontal rows of coins. The top row has 3 coins, each denoted 100. The second row has 2 coins, each denoted with a 10 and the last row shows 5 coins each denoted with a 1.    and the location of the coins doesn’t really matter. We did some simple operations with the coin model in to understand the bundling\/unbundling with addition and subtraction.  However, as the numbers get larger, the chip model is more useful instead. The same number can be put on the following chart.   A grid with headers 100s, 10s, 1s from left to right. Below the header shows 3 circles (filled in), 2 circles and 5 circles.     Chip Model with no bundling  Let's look at an addition problem with the chip model. Consider the problem , which has no bundling within any place value. We can develop this model with:   A grid with headers 100s, 10s, 1s from left to right. Below the header shows 3 circles , 2 circles and 5 circles from left to right. On the bottom row, there are 2 circles, one circle and 3 circles.    And lastly, we will just total the chips in each column. The result is 5 hundreds chips, 3 tens chips and 8 ones, so 538 is the result. Use of the addition algorithm shows     Chip Model with Bundling  Let’s look at another chip model for addition, where the sum within a place value exceeds 9. Consider the example .   A grid with the first row as the headers 10s and 1s (left to right). The second row shows 2 circles, then 7 circles. The third row show 4 circles and 6 circles.    If we simply counted up all of the chips in a given columns there are 6 tens and 13 ones. This again is a case, where we need to bundle 10 ones chips and make a ten chip. Note: this is the identical coin model where we cashed in 10 pennies for a dime.  To illustrate this on the diagram, we will draw a loop around 10 ones and produce a new ten chip. The ones chips that are exchanged should be crossed out.   A grid with the first row as the headers 10s and 1s (left to right). The second row shows 2 circles, then 7 circles. The third row show 4 circles and 6 circles. The seven circles in the 2nd row of the grid and three of the circles in the third row are surrounded by a dashed line and all ten are crossed out. There is an arrow to a circle in the 10s column.    And now the number in each column is less than 10, so this is complete. Now we count 7 tens chips and 3 ones chips for a total of 73.  The column algorithm version of this uses numbers for chips, but the result is the same. where the small 1 in the tens column is the bundled chips from the tens column in the model above.  This procedure is often called carrying , however that term is a bit misleading in that it sounds like digits are moved from one column to another, which is not true, they are bundled or composed .  Mastery of adding two 2-digit numbers results in more difficult problems with bundling. In increasing order of difficulty:     3-digit plus 2-digit (bundle ones),    3-digit plus 3-digit (bundle ones),    3-digit plus 3-digit (bundle tens),    3-digit plus 3-digit (bundle both ones and tens and or hundreds).    4 or more digit numbers with bundling.     We show one more example that is relatively difficult, using the chip model. First, we note that we will need a thousands column in the chart as well.      When we bundle chips, you should work from the smaller to larger place values (columns), since bundling of chips in smaller denominations may affect those in larger ones.  When we bundle chips, you should work from the smaller to larger place values (columns), since bundling of chips in smaller denominations may affect those in larger ones.  With the bundling done, this results in 1 thousands, 1 hundred, 6 tens and 5 ones, which shows that .   And note that the bundled chip in the tens column is the same as the 1 in the tens column in the diagram about. The bundled chip in the 1000s place is the extra 1 in the thousands column in the answer.    Tips for creating good Addition Chip Models  A chip model should clearly show the addition process with any bundling needed. Here are some features of your model that you should use.     Clearly put all addends on the diagram. Note you could have more than 2. It’s clearer if you separate each addend with a dashed line.    Show the bundling process in any of the columns that needs it. This includes circling and crossing out the bundled chips and using an arrow to show where those chips are bundled to.    The result should be clear. That is, all chips that are not crossed out should be your result.    There a tendency to put the sum on the diagram as well to make it look like the result of the column addition, however, this can be confusing and the result after any bundling should show the sum.     Note: all the chip models above are good to study and to see that the tips above are included. Although the models in this book were produced with computer software, hand-drawn ones can work well. The colored chips are nice, but not required, but you should consider placing the bundled chips in locations that separate them from the addends.     Lattice Addition  There are alternatives to performing addition in the standard way using the column algorithm. One of these is called lattice addition . We will show this in multiple steps with the example, .     Step 1:  Write the addends in stacked column form with a lattice as shown below:   The number 736 in a row above a row saying \"+ 867\". Below this is a row of three boxes with dashed diagonal (lower left to upper right) lines through each.      Step 2:  Add down the columns and place the ones digit below the diagonal and the tens above the diagonal.   The number 736 in a row above a row saying \"+ 867\". Below this is a row of three boxes with dashed diagonal (lower left to upper right) lines through each. In the leftmost box, there is a 1 above the dashed line and a 5 below. In the center box, there is a 0 above the dashed line and a 9 below. In the rightmost box, there is a 1 above the dashed line and a 3 below.      Step 3:  Extend the dashed diagonal lines to the down and right. Then add down the diagonal and do any bundling that is needed.  For example on the second slot (with the 1 and 9 in it), the sum is 10 so write a 0, then the bundled 1 (shown below in red) in the next column.   The number 736 in a row above a row saying \"+ 867\". Below this is a row of three boxes with dashed diagonal (lower left to upper right) lines through each. In the leftmost box, there is a 1 above the dashed line and a 5 below. In the center box, there is a 0 above the dashed line and a 9 below. In the rightmost box, there is a 1 above the dashed line and a 3 below. The dashed lines are extended below the boxes. From left to right, there are the numbers 1 6 0 3 and above right to the 6 there is a small 1.         Base-5 Addition  We are going to apply the addition algorithm to base-5 numbers. First, let’s do this using the chip or coin model. Let’s do . First in a similar way to that of the chip model of addition in base-5, we add the chips for each number to the chart.   A grid with a header row on top with 125s, 25s, 5s, 1s from left to right. In the first row, there is one circle in the first column, 2 in the 3rd column and 3 in the 4th. In the second row, there are 2 circles in the first column, 3 in the 2nd, 4 in the 3rd and 2 in the fourth. In the 4th column (1s), all 5 circles are crossed out, surrounded by a dashed line with an arrow to a circle in the 5s column. In the 3rd column (5s), 5 of the original 6 circles are crossed out, surrounded by a dashed line with an arrow to a circle in the 25s column.    Notice that when we bundle, the size of the bundle is 5 (since it is base-5). After the bundling step, just count. The result is   Another thing to note is that the chip model in base-5 is the same as the chip model from above (in base-10) with the only true difference being that any number of chips more than 4 need to be bundled. This is precisely what we mean by base-5.  Recall that in base-10, the column algorithm is just a compact way of creating the chip model. This is also true in base-5. The column algorithm can be written as   A few things to note about the column algorithm.   The rightmost column sums to 5 and thus bundling occurs (the 1 above the 2nd rightmost column) with 0 remaining.    The 2nd rightmost column sums to 6 and thus bundling occurs (the 1 above the 3nd rightmost column) with 1 remaining.    The left two columns can be summed without bundling.         For each of the following, produce a chip model as above. Make sure that the diagram corresponds to the . Also show the column algorithm for the problem.                                  For each of the following find the sum using the lattice method. Note: on (c) you can sum all three numbers at the same time.                           For each of the following base-5 sums, show a chip model like above as well as the column addition.                    Other bases can be done. The following are base-8 additions. Perform a chip model (what are the header columns?) and a column algorithm                   "
},
{
  "id": "sect-addition-algorithms-2",
  "level": "2",
  "url": "sect-addition-algorithms.html#sect-addition-algorithms-2",
  "type": "Objectives",
  "number": "5.1",
  "title": "",
  "body": "   Develop the expanded version of addition.    Understand the Chip models for addition.    Understand how bundling works in expansion version and chip models.    Extend the ideas in the chip model and expanded version to the column algorithm for addition.    Use the chip model and the column algorithm to add numbers in base-5.    "
},
{
  "id": "remark-good-addition-chip-model",
  "level": "2",
  "url": "sect-addition-algorithms.html#remark-good-addition-chip-model",
  "type": "Remark",
  "number": "5.1.1",
  "title": "Tips for creating good Addition Chip Models.",
  "body": " Tips for creating good Addition Chip Models  A chip model should clearly show the addition process with any bundling needed. Here are some features of your model that you should use.     Clearly put all addends on the diagram. Note you could have more than 2. It’s clearer if you separate each addend with a dashed line.    Show the bundling process in any of the columns that needs it. This includes circling and crossing out the bundled chips and using an arrow to show where those chips are bundled to.    The result should be clear. That is, all chips that are not crossed out should be your result.    There a tendency to put the sum on the diagram as well to make it look like the result of the column addition, however, this can be confusing and the result after any bundling should show the sum.     Note: all the chip models above are good to study and to see that the tips above are included. Although the models in this book were produced with computer software, hand-drawn ones can work well. The colored chips are nice, but not required, but you should consider placing the bundled chips in locations that separate them from the addends.  "
},
{
  "id": "exercises-addition-algorithm-1",
  "level": "2",
  "url": "sect-addition-algorithms.html#exercises-addition-algorithm-1",
  "type": "Exercise",
  "number": "5.1.5.1",
  "title": "",
  "body": "  For each of the following, produce a chip model as above. Make sure that the diagram corresponds to the . Also show the column algorithm for the problem.                               "
},
{
  "id": "exercises-addition-algorithm-2",
  "level": "2",
  "url": "sect-addition-algorithms.html#exercises-addition-algorithm-2",
  "type": "Exercise",
  "number": "5.1.5.2",
  "title": "",
  "body": "  For each of the following find the sum using the lattice method. Note: on (c) you can sum all three numbers at the same time.                        "
},
{
  "id": "exercises-addition-algorithm-3",
  "level": "2",
  "url": "sect-addition-algorithms.html#exercises-addition-algorithm-3",
  "type": "Exercise",
  "number": "5.1.5.3",
  "title": "",
  "body": "  For each of the following base-5 sums, show a chip model like above as well as the column addition.                 "
},
{
  "id": "exercises-addition-algorithm-4",
  "level": "2",
  "url": "sect-addition-algorithms.html#exercises-addition-algorithm-4",
  "type": "Exercise",
  "number": "5.1.5.4",
  "title": "",
  "body": "  Other bases can be done. The following are base-8 additions. Perform a chip model (what are the header columns?) and a column algorithm                 "
},
{
  "id": "sect-subtraction-algorithm",
  "level": "1",
  "url": "sect-subtraction-algorithm.html",
  "type": "Section",
  "number": "5.2",
  "title": "Subtraction Algorithms",
  "body": " Subtraction Algorithms     Understanding subtraction for larger numbers with place value.    Use a chip model to model subtraction problems with the take-away interpretation.    Develop an understanding of the column algorithm from the chip model.    Perform subtraction in bases other than 10 using the chip model and column algorithm.      Since subtraction is finding the missing addend in a summation problem, it is not surprising that the subtraction algorithm is similar to the addition algorithm. Let's see an example with two 3-digit numbers.  Consider the subtraction algorithm . We can write this in expand form as or can be viewed in column format as   where subtraction is done in each column. Also, note that the top number in each column (place value) is greater than the bottom number in that column, so we can subtract without any issues.    Coin Model  Recall that a coin model for this problem is using the take-away interpretation. Practically, this means that put the minuend down in coins and cross out the subtrahend. This could look like:      And the chips that are left are 3 hundreds, 2 tens and 5 ones or 325.    Chip Model for Subtraction  We now apply the chip model for subtraction. We will put the minuend as coins in a table labeled with the chip value in each column. This will look like:   A grid with a header row of 100s, 10s and 1s. In the 100s column there are 5 chips. In the 10s column there are 7 chips. In the 1s column there are 8 chips.    And then subtracting the subtrahend or 253 would be to cross out 2 hundreds chips, 5 tens chips and 3 ones chips. Because there is enough of each of those, this can be done as   A grid with a header row of 100s, 10s and 1s. In the 100s column there are 5 chips and 2 of them are crossed out. In the 10s column there are 7 chips and 5 of them are crossed out. In the 1s column there are 8 chips and 3 of them are crossed out.    The result from this is identical to the coin model or 3 hundreds, 2 tens and 5 ones or 325.    Subtraction with Unbundling  The next important step is to perform a subtraction problem with unbundling. We'll see it first in a chip model for . Let's first examine this in expand form: and the problem with this is that at grades for doing subtraction doesn't make sense. We can't take 8 away from 3. So the 50 needs to be written as and then write the 10 with the ones as:   What we have done is unbundled a ten to make 10 ones. We can unbundle any denomination more than ones to make 10 smaller denominators. For example, we can unbundle a 1000 as 10 hundreds.    Chip Model of Subtraction with Unbundling  We now turn to the chip model for the problem . Again, we will start with writing the chips for the minuend or   A grid with a header row of 10s and 1s. In the 10s column there are 5 chips. In the 1s column there are 3 chips.    and our goal is to remove 2 tens and 8 ones, however, there are only 3 ones to remove in the ones column. We take one of the chips in the tens column and turn it into 10 ones chips like:   A grid with a header row of 10s and 1s. In the 10s column there are 5 chips. In the 1s column there are 3 chips. One of the 10s chips is crossed out and an arrow points from it to the 1s column. There are 10 chips in a dashed box in the 1s column.    and notice that we have removed a ten (by crossing it out) and putting down ten chips in the ones column (red) and clearly show how the chip was unbundled.  The last step is to cross out the subtrahend or 2 tens and 8 ones.   A grid with a header row of 10s and 1s. In the 10s column there are 5 chips. In the 1s column there are 3 chips. One of the 10s chips is crossed out and an arrow points from it to the 1s column. There are 10 chips in a dashed box in the 1s column. There are two additional 10s chips crossed out and 8 ones chips crossed out. There are two 10s chips and 5 ones chips that are not crossed out.    and the diagram above shows that the result is 2 tens and 5 ones or 25.   Tips for creating good chip models for subtraction  Here's a few things that make a clear subtraction chip model with take-away interpretation and are recommended:     Only put the minuend on the chart with the chips.    Recall that you are only going to cross out the subtrahend. Don't put the subtrahend on the diagram\/chart.     Make sure that you have enough chips to cross out. If you don't have enough for a particular place value (1s, 10s, 100s, etc.), unbundle a chip from a higher place value, placing 10 chips in the slot you need them in.    Cross out the subtrahend from the diagram.    Count the result. Note the difference should be clear on the diagram from what is not crossed out.      The chip model for can now be used to show the subtraction algorithm in column format as and note that in the ones column the 3 is less that 8, so we need to unbundle a ten from the tens column and add it to the 3 in the ones column to get 13. This is shown as follows: And now there are 13 in the ones column and 4 in the tens column, so we can subtract 8 from 13 and 2 from 4 to get the answer of 25.   The chip models in this section were designed to teach how to make the model. You can do all of the necessary steps on a single diagram, that is, the last diagram in the steps clearly shows the steps.  The next example shows a challenging subtraction problem using chip models.    Use a chip model to demonstrate using a chip model.    First, start with the minuend, on a chart:   A grid with a header row of 1000s, 100s, 10s and 1s. In the 1000s column there are 3 chips. In the 100s column there are 0 chips. In the 10s column there are 1 chip. In the 1s column there are 9 chips.    and notice that we won't have enough hundreds or tens to cross out, so first unbundle 1 thousand into 10 hundreds and then 1 hundred into 10 tens:   A grid with a header row of 1000s, 100s, 10s and 1s. In the 1000s column there are 3 chips. In the 100s column there are 0 chips. In the 10s column there are 1 chip. In the 1s column there are 9 chips. One of the 100s chips is crossed out and an arrow points from it to the 10s column. There are 10 chips in a dashed box in the 10s column. One of the 1000s chips is crossed out and an arrow points from it to the 100s column. There are 10 chips in a dashed box in the 100s column.    At this point, there is enough chips to cross out (take-away) from the subtrahend. The last step is to do this. This crosses out 2 thousands chips, 8 hundreds chips, 5 tens chips and 2 ones chips or   A grid with a header row of 1000s, 100s, 10s and 1s. In the 1000s column there are 3 chips. In the 100s column there are 0 chips. In the 10s column there are 1 chip. In the 1s column there are 9 chips. One of the 100s chips is crossed out and an arrow points from it to the 10s column. There are 10 chips in a dashed box in the 10s column. One of the 1000s chips is crossed out and an arrow points from it to the 100s column. There are 10 chips in a dashed box in the 100s column. There are two additional 1000s chips crossed out, 8 hundreds chips crossed out, 5 tens chips crossed out and 2 ones chips crossed out. There are no 1000s chips, 1 100s chips, 6 10s chips and 6 ones chips that are not crossed out.    And the difference (result) is the chips remaining. This shows 167.  Let's now perform the column algorithm for . Start with the problem in column format: and now we subtract from right to left. The ones column has the larger number on top, so we can just subtract: Now for the tens column, since 1 is less than 5, we need to unbundle a hundred from the hundreds column. However, this is not possible, so instead, we need to unbundle a thousand from the thousands column and then unbundle a hundred from the hundreds column. This is shown as follows: Now we can unbundle one of the 100s and add to the tens column as follows: Now each of the columns have the top number larger than the bottom and we can subtract column by column.     Note that the column algorithm is identical to the chip model, but the column algorithm is more efficient than the chip model.    As discussed, there are many reasons for knowing the algorithms for addition and subtraction. The following example shows that we need to think a bit more abstractly to find the solution (and not let the addition and subtraction get in the way).    Produce a Teacher's Solution to the following word problem: One week, a candy company produced a total of 5327 pieces of candy (red, blue and yellow). If 2378 pieces are red and 1263 are blue, how many were yellow?     This is a two-step word problem that we can do as a single diagram as the following:      The first operation is and this would most like be given in a course in which the column algorithm is taught, so we will use the column algorithm to find this sum.   For the next step subtract the result 3641 from 5327 and again we'll use the column algorithm:   There were 1686 pieces of yellow candy made in that week.    Note that we didn't use the chip model in the Teacher's solution. The chip model is helpful for understanding the column algorithms for subtraction and addition, but is not needed once learned well.    Base-5 Subtraction  We continue now with base-5 arithmetic. Recall that the important takeaway from this section is a deeper understanding of subtraction and the subtraction algorithm, so we will use the chip model to understand subtraction in base-5.  We will first use a coin model to understand base-5 subtraction. This works exactly like decimal subtraction we just saw.  Let's try . Recall that do use the chip model we only put the subtrahend on the diagram at first and remember that the headers are powers of 5.   A grid with a header row of 125s, 25s, 5s and 1s. In the 125s column there are 3 chips. In the 25s column there are 0 chips. In the 5s column there are 2 chips. In the 1s column there are 4 chips.    Since we wish to cross on one 125s, three 25s, two 5s and 1 one, but there aren't enough 25s and 5s, so we unbundle one each of these, remember that each chip's value is 5 of the smaller chip.   A grid with a header row of 125s, 25s, 5s and 1s. In the 125s column there are 3 chips. In the 25s column there are 0 chips. In the 5s column there are 2 chips. In the 1s column there are 4 chips. One of the chips in the 125s column is crossed out and an arrow points from it to the 25s column which unbundles it into 5 chips in the 25s column. One of the chips in the 25s column is crossed out and an arrow points from it to the 5s column which unbundles it into 5 chips in the 5s column.    Now for the last step, we cross out the subtrahend:   A grid with a header row of 125s, 25s, 5s and 1s. In the 125s column there are 3 chips. In the 25s column there are 0 chips. In the 5s column there are 2 chips. In the 1s column there are 4 chips. One of the chips in the 125s column is crossed out and an arrow points from it to the 25s column which unbundles it into 5 chips in the 25s column. One of the chips in the 25s column is crossed out and an arrow points from it to the 5s column which unbundles it into 5 chips in the 5s column. One additional chip in the 125s column is crossed out, three chips in the 25s column are crossed out, two chips in the 5s column are crossed out and one chip in the 1s column is crossed out. There is one 125s chip, one 25s chips, three 5s chips and three 1s chips that are not crossed out.    The result is 1 fiftoon, 1 quarter, 3 nickels and 3 pennies or .  We can also do this with the column algorithm:  Start with the subtrahend and minuend stacked:   We can subtract the rightmost column:   The 2nd rightmost column needs more so rebundle, except we can’t, so to the leftmost column: where means or 5 in decimal. We can now rebundle from the 2nd column to the 3rd:   and once again means or 1 five and 2 ones or 7 in decimal. Now we can subtract in each column: and the result is , just like we saw with the chip model.      For each of the following, produce a chip model as above. Make sure that the diagram corresponds to the Also show the column algorithm for the problem.                                  For each of the following, produce a Teacher's Solution. All operations should be done with the column algorithm.     Collette collects stamps. She has 532 stamps in her collection. If 237 of them are from the United States and 126 are from Canada, how many stamps does she have from other countries?      The Sugar Me Up candy company produced 5327 pieces of candy (red, blue and yellow) in one week. If 2378 pieces are red and 1263 are blue, how many were yellow?       For each of the following perform the base-5 (or base-8) subtraction with the chip model and the column algorithm.                          "
},
{
  "id": "sect-subtraction-algorithm-2",
  "level": "2",
  "url": "sect-subtraction-algorithm.html#sect-subtraction-algorithm-2",
  "type": "Objectives",
  "number": "5.2",
  "title": "",
  "body": "   Understanding subtraction for larger numbers with place value.    Use a chip model to model subtraction problems with the take-away interpretation.    Develop an understanding of the column algorithm from the chip model.    Perform subtraction in bases other than 10 using the chip model and column algorithm.    "
},
{
  "id": "remark-good-subtraction-chip-model",
  "level": "2",
  "url": "sect-subtraction-algorithm.html#remark-good-subtraction-chip-model",
  "type": "Remark",
  "number": "5.2.1",
  "title": "Tips for creating good chip models for subtraction.",
  "body": " Tips for creating good chip models for subtraction  Here's a few things that make a clear subtraction chip model with take-away interpretation and are recommended:     Only put the minuend on the chart with the chips.    Recall that you are only going to cross out the subtrahend. Don't put the subtrahend on the diagram\/chart.     Make sure that you have enough chips to cross out. If you don't have enough for a particular place value (1s, 10s, 100s, etc.), unbundle a chip from a higher place value, placing 10 chips in the slot you need them in.    Cross out the subtrahend from the diagram.    Count the result. Note the difference should be clear on the diagram from what is not crossed out.     "
},
{
  "id": "sect-subtraction-algorithm-7-14",
  "level": "2",
  "url": "sect-subtraction-algorithm.html#sect-subtraction-algorithm-7-14",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  Use a chip model to demonstrate using a chip model.    First, start with the minuend, on a chart:   A grid with a header row of 1000s, 100s, 10s and 1s. In the 1000s column there are 3 chips. In the 100s column there are 0 chips. In the 10s column there are 1 chip. In the 1s column there are 9 chips.    and notice that we won't have enough hundreds or tens to cross out, so first unbundle 1 thousand into 10 hundreds and then 1 hundred into 10 tens:   A grid with a header row of 1000s, 100s, 10s and 1s. In the 1000s column there are 3 chips. In the 100s column there are 0 chips. In the 10s column there are 1 chip. In the 1s column there are 9 chips. One of the 100s chips is crossed out and an arrow points from it to the 10s column. There are 10 chips in a dashed box in the 10s column. One of the 1000s chips is crossed out and an arrow points from it to the 100s column. There are 10 chips in a dashed box in the 100s column.    At this point, there is enough chips to cross out (take-away) from the subtrahend. The last step is to do this. This crosses out 2 thousands chips, 8 hundreds chips, 5 tens chips and 2 ones chips or   A grid with a header row of 1000s, 100s, 10s and 1s. In the 1000s column there are 3 chips. In the 100s column there are 0 chips. In the 10s column there are 1 chip. In the 1s column there are 9 chips. One of the 100s chips is crossed out and an arrow points from it to the 10s column. There are 10 chips in a dashed box in the 10s column. One of the 1000s chips is crossed out and an arrow points from it to the 100s column. There are 10 chips in a dashed box in the 100s column. There are two additional 1000s chips crossed out, 8 hundreds chips crossed out, 5 tens chips crossed out and 2 ones chips crossed out. There are no 1000s chips, 1 100s chips, 6 10s chips and 6 ones chips that are not crossed out.    And the difference (result) is the chips remaining. This shows 167.  Let's now perform the column algorithm for . Start with the problem in column format: and now we subtract from right to left. The ones column has the larger number on top, so we can just subtract: Now for the tens column, since 1 is less than 5, we need to unbundle a hundred from the hundreds column. However, this is not possible, so instead, we need to unbundle a thousand from the thousands column and then unbundle a hundred from the hundreds column. This is shown as follows: Now we can unbundle one of the 100s and add to the tens column as follows: Now each of the columns have the top number larger than the bottom and we can subtract column by column.     Note that the column algorithm is identical to the chip model, but the column algorithm is more efficient than the chip model.   "
},
{
  "id": "sect-subtraction-algorithm-7-16",
  "level": "2",
  "url": "sect-subtraction-algorithm.html#sect-subtraction-algorithm-7-16",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  Produce a Teacher's Solution to the following word problem: One week, a candy company produced a total of 5327 pieces of candy (red, blue and yellow). If 2378 pieces are red and 1263 are blue, how many were yellow?     This is a two-step word problem that we can do as a single diagram as the following:      The first operation is and this would most like be given in a course in which the column algorithm is taught, so we will use the column algorithm to find this sum.   For the next step subtract the result 3641 from 5327 and again we'll use the column algorithm:   There were 1686 pieces of yellow candy made in that week.   "
},
{
  "id": "exercises-subtraction-algorithm-1",
  "level": "2",
  "url": "sect-subtraction-algorithm.html#exercises-subtraction-algorithm-1",
  "type": "Exercise",
  "number": "5.2.6.1",
  "title": "",
  "body": "  For each of the following, produce a chip model as above. Make sure that the diagram corresponds to the Also show the column algorithm for the problem.                               "
},
{
  "id": "exercises-subtraction-algorithm-2",
  "level": "2",
  "url": "sect-subtraction-algorithm.html#exercises-subtraction-algorithm-2",
  "type": "Exercise",
  "number": "5.2.6.2",
  "title": "",
  "body": "  For each of the following, produce a Teacher's Solution. All operations should be done with the column algorithm.     Collette collects stamps. She has 532 stamps in her collection. If 237 of them are from the United States and 126 are from Canada, how many stamps does she have from other countries?      The Sugar Me Up candy company produced 5327 pieces of candy (red, blue and yellow) in one week. If 2378 pieces are red and 1263 are blue, how many were yellow?    "
},
{
  "id": "exercises-subtraction-algorithm-3",
  "level": "2",
  "url": "sect-subtraction-algorithm.html#exercises-subtraction-algorithm-3",
  "type": "Exercise",
  "number": "5.2.6.3",
  "title": "",
  "body": "  For each of the following perform the base-5 (or base-8) subtraction with the chip model and the column algorithm.                        "
},
{
  "id": "sect-multiplication-algorithm",
  "level": "1",
  "url": "sect-multiplication-algorithm.html",
  "type": "Section",
  "number": "5.3",
  "title": "Multiplication Algorithms",
  "body": " Multiplication Algorithms     Understand the expanded form of multiplication.    Understand the Box Model of multiplication    Understand the chip model of multiplication.    Use the chip model to understand the column algorithm.    Understand the lattice model of multiplication.    Perform base-5 multiplication with both a chip model and the column algorithm.      The goal of the multiplication algorithm is to multiply numbers that are difficult to do with mental math.  Consider first, a multiplication like . This doesn't fit into any mental math problem, so we will develop an algorithm to solve this. In short, this will include:     writing the second factor in expanded form, ,    using the distributive property, ,    shifting place values when multiplying by 10,    using the 1-digit multiplication facts,    bundling with the addition algorithm.       Stages to Learning Multiplication     Multiplication Facts  As discussed, the multiplication table up to must be known. This was seen in .    Mental Multiplication  This helps bypass the more-complicated general multiplication algorithm.    1-digit Multiplication with no Bundling  We can start with an example like and recall that this is the same as and can be examined with coin, chip or DLB models.    1-digit Multiplication with Bundling  We first start with examples like or . This can be done with both chip models and the expand form as shown below.  What we've done here is use the distributive property of numbers in the following way:     The Full Algorithm  We will soon look at the problem . The main idea behind the full algorithm is to break up one of the factors into its basic bundles. That is . Then we will perform the operation and add it to . The only difference here is that we need to recall that and multiplying by 10 shifts the value by including a 0 at the end.       Expanded Form of Multiplication  We won't use a chip model for this because of the size of the numbers makes for a larger number of chips. Instead, we will modify the column addition algorithm.   Notice that in this case, there are 4 single-digit multiplications (that you should do with math facts). Some of them include a multiply by 10 as well. Then the result is that these four numbers need to be added.  The reason this method works is due to the distributive property written out in a different form.   The two distributive properties in the first two steps are also commonly known as FOILing for (First-Outer-Inner-Last) that can be done in one step.    Box Model of Multiplication  An alternative way to look at the expanded form of multiplication is called the box model in which the numbers are written outside the a grid. For example:   Then the products are place inside the grid: and notice that the 4 numbers inside the grid are the same 4 products in the expanded form about in the sum section.  We now just total all four numbers. If this is too much, you can add across first and then add down to get the result 864.  This model is useful to understand place value and multiplication and then realized that after the 1-digit multiplication that the result is the sum of (in this case) for numbers.    Chip Models with Multiplication  Chip models are helpful in understanding how the column algorithm works and since multiplication is just repeated addition, an understanding of the chip model of addition is all that is needed. The following example shows a relatively simple multiplication problem:    Show a chip model of . Also show the column algorithm and explain the connection between them.    We will start with a simple 1-digit multiplication problem, , which will show as with the following. First start with 4 groups of 13 on the chart:      As with the chip model in addition, we need to bundle 10 of the ones into 1 ten chip.      and this shows that there are 5 tens and 2 ones or 52.  Next, we examine this using column addition. First multiply the 3 and the 4. The result, and put the ones digit below the line (in the ones column) and the tens digit above the top number. Next, multiply the 4 and the 1 to get a 4. Add the 1 from the attic to get a total of 5.     The next chip model example shows a more complicated chip model.    Show the chip model for as well as the column algorithm and explain the connection.    First start with 6 groups of 367 and we will need a 1000s column, so we include it from the beginning.      As with the addition algorithm, we start by bundling the ones.      Now we'll bundle the tens:      and next we bundle the 100s:      And this shows that the result is 2 thousands, 2 hundreds, 0 tens and 2 ones or 2,202.  Now let's look at the column algorithm for this. Start with 6 on the bottom row and 367 on the top row: the first steps is to do , write the ones digits (2) below the line and the tens digit (4) above the top row, Next, do the tens column or and add the 4 above the top line to get . Write the ones digits (0) below the line in the tens digit and the 4 above the 3 in the hundreds digit. Next, do the hundreds column and add 4 to get 22. Since this is the last step, write 22 below the line And the result is the same.      Lattice Model of Multiplication  We will look at the lattice model, used above for addition, to perform the multiplication .  First start with a grid of the size according to the number of digits in each factor, write the numbers on the top and left as follows:      And then next, fill in the 1-digit multiplications in the grid for each row\/column of the grid where the tens digit goes above the diagonal line, and the ones below the diagonal as follows:      And the last step, draw diagonal lines like for the addition lattice and add down the diagonals as this shows.      and the two 1s that are blue are the result of bundling a ten from the addition down the diagonals.    Base-5 multiplication  As before, we'll start with base-5 multiplication's coin model. As with base-10 multiplication, it is important to know 1-digit math facts in base-5. We will build up a multiplication table:           0  1  2  3  4    0         1         2         3         4         and first, multiplication by 0 and 1 is quite simple:           0  1  2  3  4    0  0  0  0  0  0    1  0  1  2  3  4    2  0  2       3  0  3       4  0  4       Next, multiplying by 2 is skip counting and remembering in base-5, think pennies and nickels:           0  1  2  3  4    0  0  0  0  0  0    1  0  1  2  3  4    2  0  2  4  11  13    3  0  3  11      4  0  4  13      and the last 4 can also be done with skip counting:           0  1  2  3  4    0  0  0  0  0  0    1  0  1  2  3  4    2  0  2  4  11  14    3  0  3  11  14  22    4  0  4  13  22  31    Now we use this table to perform more complicated multiplications.    Calculate first using a chip model and then using the column algorithm.    First, put 3 copies of on the chart:      And now bundle the ones, remembering to group in size 5.      Next, we bundle the fives:      And then bundle the 25s:      and the result is 2 fiftoons, 0 quarters, 3 nickels and 2 pennies or .  We can also find the product using the column algorithm. Pull out the multiplication table that you made. We'll use the expanded version to make things a bit easier:   where the only bundling in this case needed to occur in the third column (25s) in which 5 twenty-fives became a 125.        For each of the following, use the expanded form of multiplication. Show all details.                    For each of the following, use the box form of multiplication. Show all details.                    For each of the following, use the chip model of multiplication with the repeated addition interpretation. Show all details and show the column algorithm.                    For each of the following, use the lattice form of multiplication as well as the column algorithm                           Write a Teacher's solution for each of the following problems. Include a bar diagram and use the column algorithm for the multiplication.     Maya is building a community garden shaped like a rectangle. The garden is 72 feet long and 35 feet wide. What is the total area of Maya's community garden in square feet?      At a regional soccer tournament, there are 16 teams. Each team has 17 players on its roster. How many players will there be at the tournament?       Find each of the following multiplications and note that they are not in base-10.                          "
},
{
  "id": "sect-multiplication-algorithm-2",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#sect-multiplication-algorithm-2",
  "type": "Objectives",
  "number": "5.3",
  "title": "",
  "body": "   Understand the expanded form of multiplication.    Understand the Box Model of multiplication    Understand the chip model of multiplication.    Use the chip model to understand the column algorithm.    Understand the lattice model of multiplication.    Perform base-5 multiplication with both a chip model and the column algorithm.    "
},
{
  "id": "sect-multiplication-algorithm-7-3",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#sect-multiplication-algorithm-7-3",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": "  Show a chip model of . Also show the column algorithm and explain the connection between them.    We will start with a simple 1-digit multiplication problem, , which will show as with the following. First start with 4 groups of 13 on the chart:      As with the chip model in addition, we need to bundle 10 of the ones into 1 ten chip.      and this shows that there are 5 tens and 2 ones or 52.  Next, we examine this using column addition. First multiply the 3 and the 4. The result, and put the ones digit below the line (in the ones column) and the tens digit above the top number. Next, multiply the 4 and the 1 to get a 4. Add the 1 from the attic to get a total of 5.    "
},
{
  "id": "sect-multiplication-algorithm-7-5",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#sect-multiplication-algorithm-7-5",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": "  Show the chip model for as well as the column algorithm and explain the connection.    First start with 6 groups of 367 and we will need a 1000s column, so we include it from the beginning.      As with the addition algorithm, we start by bundling the ones.      Now we'll bundle the tens:      and next we bundle the 100s:      And this shows that the result is 2 thousands, 2 hundreds, 0 tens and 2 ones or 2,202.  Now let's look at the column algorithm for this. Start with 6 on the bottom row and 367 on the top row: the first steps is to do , write the ones digits (2) below the line and the tens digit (4) above the top row, Next, do the tens column or and add the 4 above the top line to get . Write the ones digits (0) below the line in the tens digit and the 4 above the 3 in the hundreds digit. Next, do the hundreds column and add 4 to get 22. Since this is the last step, write 22 below the line And the result is the same.   "
},
{
  "id": "sect-multiplication-algorithm-9-11",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#sect-multiplication-algorithm-9-11",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  Calculate first using a chip model and then using the column algorithm.    First, put 3 copies of on the chart:      And now bundle the ones, remembering to group in size 5.      Next, we bundle the fives:      And then bundle the 25s:      and the result is 2 fiftoons, 0 quarters, 3 nickels and 2 pennies or .  We can also find the product using the column algorithm. Pull out the multiplication table that you made. We'll use the expanded version to make things a bit easier:   where the only bundling in this case needed to occur in the third column (25s) in which 5 twenty-fives became a 125.   "
},
{
  "id": "exercises-mulitiplication-algorithm-1",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#exercises-mulitiplication-algorithm-1",
  "type": "Exercise",
  "number": "5.3.7.1",
  "title": "",
  "body": "  For each of the following, use the expanded form of multiplication. Show all details.                 "
},
{
  "id": "exercises-mulitiplication-algorithm-2",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#exercises-mulitiplication-algorithm-2",
  "type": "Exercise",
  "number": "5.3.7.2",
  "title": "",
  "body": "  For each of the following, use the box form of multiplication. Show all details.                 "
},
{
  "id": "exercises-mulitiplication-algorithm-3",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#exercises-mulitiplication-algorithm-3",
  "type": "Exercise",
  "number": "5.3.7.3",
  "title": "",
  "body": "  For each of the following, use the chip model of multiplication with the repeated addition interpretation. Show all details and show the column algorithm.                 "
},
{
  "id": "exercises-mulitiplication-algorithm-4",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#exercises-mulitiplication-algorithm-4",
  "type": "Exercise",
  "number": "5.3.7.4",
  "title": "",
  "body": "  For each of the following, use the lattice form of multiplication as well as the column algorithm                        "
},
{
  "id": "exercises-mulitiplication-algorithm-5",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#exercises-mulitiplication-algorithm-5",
  "type": "Exercise",
  "number": "5.3.7.5",
  "title": "",
  "body": "  Write a Teacher's solution for each of the following problems. Include a bar diagram and use the column algorithm for the multiplication.     Maya is building a community garden shaped like a rectangle. The garden is 72 feet long and 35 feet wide. What is the total area of Maya's community garden in square feet?      At a regional soccer tournament, there are 16 teams. Each team has 17 players on its roster. How many players will there be at the tournament?    "
},
{
  "id": "exercises-mulitiplication-algorithm-6",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#exercises-mulitiplication-algorithm-6",
  "type": "Exercise",
  "number": "5.3.7.6",
  "title": "",
  "body": "  Find each of the following multiplications and note that they are not in base-10.                        "
},
{
  "id": "sect-long-division",
  "level": "1",
  "url": "sect-long-division.html",
  "type": "Section",
  "number": "5.4",
  "title": "Long Division",
  "body": " Long Division     Use a coin and chip model to perform division with 1-digit divisors.    Understand the difference between partitive and measurement approve for long division.    Perform the long division algorithm and understand the relationship to the quotient remainder theorem.    Use tables or estimation to find long division problems with 2 or more digit divisors.    Perform the long division algorithm in base-5 or other non decimal bases.      In the time of calculators everywhere, why do we need to learn the long division algorithm to perform a calculation that can take a long time? Well there are three key reasons:     It relates fractions and decimals (we'll see this in detail in ). It's key in understanding irrational numbers.    It illustrates the notion of a successive approximation and an iterative algorithm. We will see that each step of long division gets closer to the solution.    It is used in Precalculus to factor polynomials finding partial fractions.     The curriculum sequence for division clearly starts with 1-digit divisors before 2 or more digit divisors.    Long Division with 1-digit divisors   Prerequisites  The following are needed for long division by a 1-digit whole number:     A solid understanding of place value.    A solid knowledge of the meaning of multiplication and the basic multiplication facts to .    A solid understanding of the meaning of division (both partitive and measurement).    Multi-digit subtraction with regrouping.    Understanding that means .       The Partitive Approach  We start with a partitive-division word problem to explain the steps. As we will see, coin models and examples are helpful for starting. Consider the following example:    José wants to put 73 cents into 3 separate jars so each jar has the same number of candies. How many candies go in each? How many candies are left over?    We will use a coin model to understand this problem first. Consider 7 dimes and 1 penny, which will look like this:   Seven 10s coins (dimes) and one 3s coin (penny).    Since we would like to put these coins in three separate jars, we start with the 10s (dimes). There are 7 of these and the best we can do is 3 jars of 2 dimes each.   Three groups of 2 10s coins (surrounded by a dashed line) with one 10s coin and three 1s coin left.    To get the remaining coins into the 3 jars, we unbundle the remaining dime into 10 pennies:   Two rows of coins. The top row shows 3 groups of 2 10s coins and one 10s coin crossed out with an arrow to the ten 1s coin in a dashed lined in the second row. To the right of that group is three 1s coins.    The next step is to take the 13 1s coins and put them in 3 piles (jars).   Two rows of coins. The top row shows 3 groups of 2 10s coins. The bottom row shows 3 groups of 4 1s coins with 1 penny not in a group.    And this shows that there are 3 groups of 2 dimes and 4 pennies in each pile\/jar with 1 penny left over. This shows that .  We now look at this in look at the long division version of .     Step 1:  We start with the division bracket (also called the division house or division box):   The divisor goes to the left side and the dividend on the inside.    Step 2:  We need to do division from largest place value to smallest (from left to right), so the start is to find . With some mental math this is 2 and we write this number above the 7.     Note that the 2 is the number of dimes in each of the piles in the coin model above. The 6 is the total number of dimes in the 3 piles.    Step 3:  Next, we subtract and bring down the 3 in the dividend:   The \"13\" in the bottom row consists of two parts. The 1 is the number of 10s left over after dividing the 7 10s into 3 piles. The 3 is the number of 1s from the dividend (we just brought it down). The 13 is the total number of 1s after unbundling.    Step 4:  Next, we determine the number of pennies that can be put in each pile of size 3. This is and the 4 goes in the top in the ones column.   Note that the 4 in the ones column on the top row (quotient) is the number of 1s in each pile\/jar and the 12 in the bottom row is the total number of 1s in the 3 piles\/jars ( ).    Step 5:  Lastly, just subtract.   And the bottom row is the remainder.     In short, the long division is the shorthand version of the coin model.  The following is another example, however, we will use a chip model instead:    Find using a chip model and the corresponding long division. That is think of 7 dollar coins , 3 dimes and 5 pennies divided between 4 people.    First, we'll put the chips on the chart.   A grid with headers 100s, 10s, 1s. In the 100s column there are 7 chips. In the 10s column, there are 3 chips. In the 1s column, there are 5 chips.    Since we are dividing these into 4 groups, we'll make 4 rows in the chart to move the chips:   A grid with headers 100s, 10s, 1s. In the 100s column there are 7 chips. In the 10s column, there are 3 chips. In the 1s column, there are 5 chips. Below the top row are 4 empty rows separated by dashed lines.    The next step is to move 100s chips into the rows below. Only 1 will fit in each and we'll cross out the results:   A grid with headers 100s, 10s, 1s. In the 100s column there are 7 chips. In the 10s column, there are 3 chips. In the 1s column, there are 5 chips. Below the top row are 4 rows separated by dashed lines. Four of the chips in the top row of the 100s column are crossed out. In each of the 4 bottom rows a chip appears.    Then we need to unbundle the remaining three 100s chips and move into the 10s columns to equally spread.   A continuation of the previous image. The remaining 3 chips in the top row of the 100s column are crossed out with arrows to the 4 bottom rows of the 10s column. There are 8 in the 2nd and 3rd rows and 7 in the 4th and 5th rows. These chips are grouped in size 10 surrounded by dashed lines.    For the next step, we move two chips from the top row of the 10s column into the bottom two rows to make equal sized rows:   A continuation of the previous image. Two of the chips in the top row of the 10s column are crossed out and moved to the 4th and 5th rows.    Next, we unbundle the remaining tens chip to the ones column to equally space into the rows:   A continuation of the previous image. The remaining chip in the top row of the 10s column is crossed out    The last step is to move 2 of the chips in the ones column on the top row to the bottom two rows:   A continuation of the previous image with two of the 5 chips in the top row of the 1s column crossed out and moved to the 4th and 5th rows in the 1s column. The diagram now shows that the top row has all chips in the 100s and 10s colummn crossed out and 2 of the five in the 1s column crossed out. For each of the following rows there is one 100s chip, 8 10s chips and 3 1s chips in each row.    And now we are done. We have successfully moved the chips from the top row to the bottom four rows so each of the bottom four rows have an equal number in each, which has 1 hundreds chip, 8 tens chips and 5 ones chips. There are 3 ones chips left. This shows that .  We now show the long division and make the connections between the chip model and the long division. First, we'll start with the basic setup of the long division: Just the first step in the chip model, we move 1 hundreds chip into each of each of the 4 rows below it. This one (in the hundreds place of the quotient in blue) represents this. Also, shown is the next step in long division is the subtraction of in the hundreds column and is in red above. This represents the remainder in and is the chips remaining in the hundreds column couldn't be equally divided into the four rows.  This is repeated now for the tens column. The substeps here are:     The 3 from the tens column of the dividend is brought down next to the remainder from the hundreds chips. This is in orange and represents the total number of tens chips after unbundling the remaining hundreds chips.    Then is done.    The quotient 8 (in blue) is written on the top line in the tens columns. The product is written below the 33 and the 1 (in red) is the remainder.        This is now repeated for the ones column:       Measurement approach  Above we examined division using the partitive interpretation. We also can examine long division using the measurement interpretation . Let's first start with a simple example in which long division is a bit overkill to illustrate the point.  Consider , which is interpreted in the measurement sense, as 20 items put in groups of size 6. The following diagram uses the number line to demonstrate this:      One can think of a rope of length 20 inches and need to be cut into pieces of length 6. The long division algorithm:     Find using the measurement approach.    Since it is near impossible to write the number of segments of length 5 that go into 665, we will take another approach. We'll use some mental math first.     We know that , so one hundred segments of length 5 makes it to 500.    There is 165 left over.    We know that so another 30 segments of length 5 goes another 150.    There is 15 left over.     , so it takes another 3 segments. Nothing is left over.    The total number of segments is 133.     The long division shows this as well:          The long division algorithm and the Quotient Remainder Theorem  This section should also be titled, Why Does Long Division Work? . As discussed earlier in this text, as teachers, we need to know the why things work, not just how they work. Let's look at the example above: , which again, we can write using long division as  In short, the why this works is a combination of place value and the Quotient Remainder Theorem. Let's look at the long division algorithm for this problem.        We first do the division on the hundreds digit: . From the QR theorem, this implies that . Multiplying this through by 100     Then we look at the tens step which is or     Lastly, the ones step is which can be written:     Combine these        Extending the Long Division method to multiple-digit divisors  There isn't anything different with the long division method for larger divisors. It just gets a bit more difficult. Often to make it easier, one can develop a table of multiples of the divisor. The following example shows this.    Find by first finding a table of multiples of 21 and then using the table.    First consider the table of multiples of 21. And this can be generated reasonably easier by successively adding 21 to the previous value.                   Next, we'll walk through the long division algorithm using the table. First, we are looking for and looking at the table we given that , so we put 6 in the hundreds column of the quotient and the product (126) below the 129 and then also find the remainder.   The next step, we'll bring the 8 from the tens column of the dividend down and then we want to do . From the table, this is 1 and the remainder will be 14. Put the quotient (1) on the top in the tens column, the product below the 35 and the remainder below that.   Just bring the 9 (ones digit of the dividend) down:   For the last step (the ones), we seek . Using the table, since 179 is not a product in the table, go to the lower one and find . Thus the quotient of is 8 and the remainder is . These all go on the long division diagram.   This is done because there is nothing left to bring down from the dividend. This shows that .  Also, as a check, we use multiplication to see if this is correct. So the division was correct. Note: the multiplication algorithm was used here but not shown.      Long Division using estimation  Although this is nice, it requires that we create a multiplication table (of size 9). This may take longer than actually performing the division.  Instead, we will use estimation to do this. Consider . This one is particularly nice in that the divisor is close to 50 and it is fairly easy to estimate dividing by 50.     The first step will be to determine how many 49 go into 90 and two 49s is too many, so 1 is correct.     And the subtraction has been shown. Then next, the is combined with the , so the next step is . From Section , we handled problems like this. Since , where the last step is compensation.   and again a little mental math for is used. The last step will bring the 0 down to result in the problem , which you can find to have the quotient 3.   The next example is a little more complicated, but uses the same skills.    Find using estimation.    Start with the basics of the long division.     To determine the first quotient, we seek a number larger than the divisor. This number is 1958. We seek a approximation for . It appears that 3 is too large and we'll try 2.   and recall that when we perform the subtraction note that 516 is smaller than 721, so the 2 in the quotient was correct. (If the bottom number was larger than 721, then 3 should be used instead.) Bring down the 9:   And now we do which is about 7. Let's try that.   And since 122 is smaller than 721, the 7 was the correct choice. Bring down the 4:   And we look for and this is 1. Recall that above we did which is larger than 1224.   This shows that       Base-5 Long Division  We lastly look at base-5 long division. We'll start by doing a chip model of a division problem. Consider . We can write this as      Since we are dividing these into 3 groups, we'll make 3 rows in the chart to move the chips:      We move 3 of the chips in the top row of the 25s column down:      For the last chip in the top row of the 25s column, we unbundle (as 5 five-chips) and spread them evenly      Next, we move the remaining fives chips down below to make the rows even:      And lastly, we move 3 of the ones into the rows evenly:      And since each row now has 1 quarter (25), 2 nickels (5s) and 1 penny (1s) with 1 penny leftover this shows that   Let's look at this in long division style. First, as you probably realize, it is key to have 1-digit multiplication. Recall the base-5 multiplication table:           0  1  2  3  4    0  0  0  0  0  0    1  0  1  2  3  4    2  0  2  4  11  14    3  0  3  11  14  22    4  0  4  13  22  31    We'll write down the steps to solve in a manner similar to that for base-10:     Start with the long division for or     The first step will be to determine , which has a quotient of 1, so   and then we bring the 1 from the dividend down:     Next, find (base-5) which looking at the multiplication table is 2. Add that to the top of the long division and add the product and subtract:   Next, bring the 4 down from the dividend:     Lastly, do the division , which again is 1:      Showing the results are .  We now show how to think about performing long division with a 2-digit divisor:    Find using long division:    First, let's make this a bit easier and build a table of products of 21 which can be fairly easier found by successive addition:   Start the long division:   Our first task is , which from the table is ( is between 42 and 113, so round down):     bring the 4 down from the dividend:   and then we do , which is 0, so include that above the line and bring down the 1 from the dividend:   and now we do , which from the table is 4:   where recall that the subtraction is in base- . The result shows that .        Produce a partitive interpretation chip model of the following division problems. Also find the result using long division and explain the relationship between the two.                    For each of the following division problems, use a measurement approach to explaining the solution. Use as an example.                   For each of the following build a table of multiples of the divisor then use the table to perform the long division.                            For each of the following, use estimation as in to determine the quotient using long division.                           Use the chip model to perform . Show the results and you may use the base-5 multiplication table.      Use long division to find the following division problems that are not in base-10.                          "
},
{
  "id": "sect-long-division-2",
  "level": "2",
  "url": "sect-long-division.html#sect-long-division-2",
  "type": "Objectives",
  "number": "5.4",
  "title": "",
  "body": "   Use a coin and chip model to perform division with 1-digit divisors.    Understand the difference between partitive and measurement approve for long division.    Perform the long division algorithm and understand the relationship to the quotient remainder theorem.    Use tables or estimation to find long division problems with 2 or more digit divisors.    Perform the long division algorithm in base-5 or other non decimal bases.    "
},
{
  "id": "sect-long-division-4-3-3",
  "level": "2",
  "url": "sect-long-division.html#sect-long-division-4-3-3",
  "type": "Example",
  "number": "5.4.1",
  "title": "",
  "body": "  José wants to put 73 cents into 3 separate jars so each jar has the same number of candies. How many candies go in each? How many candies are left over?   "
},
{
  "id": "sect-long-division-4-3-17",
  "level": "2",
  "url": "sect-long-division.html#sect-long-division-4-3-17",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "  Find using a chip model and the corresponding long division. That is think of 7 dollar coins , 3 dimes and 5 pennies divided between 4 people.    First, we'll put the chips on the chart.   A grid with headers 100s, 10s, 1s. In the 100s column there are 7 chips. In the 10s column, there are 3 chips. In the 1s column, there are 5 chips.    Since we are dividing these into 4 groups, we'll make 4 rows in the chart to move the chips:   A grid with headers 100s, 10s, 1s. In the 100s column there are 7 chips. In the 10s column, there are 3 chips. In the 1s column, there are 5 chips. Below the top row are 4 empty rows separated by dashed lines.    The next step is to move 100s chips into the rows below. Only 1 will fit in each and we'll cross out the results:   A grid with headers 100s, 10s, 1s. In the 100s column there are 7 chips. In the 10s column, there are 3 chips. In the 1s column, there are 5 chips. Below the top row are 4 rows separated by dashed lines. Four of the chips in the top row of the 100s column are crossed out. In each of the 4 bottom rows a chip appears.    Then we need to unbundle the remaining three 100s chips and move into the 10s columns to equally spread.   A continuation of the previous image. The remaining 3 chips in the top row of the 100s column are crossed out with arrows to the 4 bottom rows of the 10s column. There are 8 in the 2nd and 3rd rows and 7 in the 4th and 5th rows. These chips are grouped in size 10 surrounded by dashed lines.    For the next step, we move two chips from the top row of the 10s column into the bottom two rows to make equal sized rows:   A continuation of the previous image. Two of the chips in the top row of the 10s column are crossed out and moved to the 4th and 5th rows.    Next, we unbundle the remaining tens chip to the ones column to equally space into the rows:   A continuation of the previous image. The remaining chip in the top row of the 10s column is crossed out    The last step is to move 2 of the chips in the ones column on the top row to the bottom two rows:   A continuation of the previous image with two of the 5 chips in the top row of the 1s column crossed out and moved to the 4th and 5th rows in the 1s column. The diagram now shows that the top row has all chips in the 100s and 10s colummn crossed out and 2 of the five in the 1s column crossed out. For each of the following rows there is one 100s chip, 8 10s chips and 3 1s chips in each row.    And now we are done. We have successfully moved the chips from the top row to the bottom four rows so each of the bottom four rows have an equal number in each, which has 1 hundreds chip, 8 tens chips and 5 ones chips. There are 3 ones chips left. This shows that .  We now show the long division and make the connections between the chip model and the long division. First, we'll start with the basic setup of the long division: Just the first step in the chip model, we move 1 hundreds chip into each of each of the 4 rows below it. This one (in the hundreds place of the quotient in blue) represents this. Also, shown is the next step in long division is the subtraction of in the hundreds column and is in red above. This represents the remainder in and is the chips remaining in the hundreds column couldn't be equally divided into the four rows.  This is repeated now for the tens column. The substeps here are:     The 3 from the tens column of the dividend is brought down next to the remainder from the hundreds chips. This is in orange and represents the total number of tens chips after unbundling the remaining hundreds chips.    Then is done.    The quotient 8 (in blue) is written on the top line in the tens columns. The product is written below the 33 and the 1 (in red) is the remainder.        This is now repeated for the ones column:    "
},
{
  "id": "ex-division-measurement",
  "level": "2",
  "url": "sect-long-division.html#ex-division-measurement",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": "  Find using the measurement approach.    Since it is near impossible to write the number of segments of length 5 that go into 665, we will take another approach. We'll use some mental math first.     We know that , so one hundred segments of length 5 makes it to 500.    There is 165 left over.    We know that so another 30 segments of length 5 goes another 150.    There is 15 left over.     , so it takes another 3 segments. Nothing is left over.    The total number of segments is 133.     The long division shows this as well:      "
},
{
  "id": "sect-long-division-6-3",
  "level": "2",
  "url": "sect-long-division.html#sect-long-division-6-3",
  "type": "Example",
  "number": "5.4.4",
  "title": "",
  "body": "  Find by first finding a table of multiples of 21 and then using the table.    First consider the table of multiples of 21. And this can be generated reasonably easier by successively adding 21 to the previous value.                   Next, we'll walk through the long division algorithm using the table. First, we are looking for and looking at the table we given that , so we put 6 in the hundreds column of the quotient and the product (126) below the 129 and then also find the remainder.   The next step, we'll bring the 8 from the tens column of the dividend down and then we want to do . From the table, this is 1 and the remainder will be 14. Put the quotient (1) on the top in the tens column, the product below the 35 and the remainder below that.   Just bring the 9 (ones digit of the dividend) down:   For the last step (the ones), we seek . Using the table, since 179 is not a product in the table, go to the lower one and find . Thus the quotient of is 8 and the remainder is . These all go on the long division diagram.   This is done because there is nothing left to bring down from the dividend. This shows that .  Also, as a check, we use multiplication to see if this is correct. So the division was correct. Note: the multiplication algorithm was used here but not shown.   "
},
{
  "id": "sect-long-division-estimation-10",
  "level": "2",
  "url": "sect-long-division.html#sect-long-division-estimation-10",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": "  Find using estimation.    Start with the basics of the long division.     To determine the first quotient, we seek a number larger than the divisor. This number is 1958. We seek a approximation for . It appears that 3 is too large and we'll try 2.   and recall that when we perform the subtraction note that 516 is smaller than 721, so the 2 in the quotient was correct. (If the bottom number was larger than 721, then 3 should be used instead.) Bring down the 9:   And now we do which is about 7. Let's try that.   And since 122 is smaller than 721, the 7 was the correct choice. Bring down the 4:   And we look for and this is 1. Recall that above we did which is larger than 1224.   This shows that    "
},
{
  "id": "sect-long-division-8-21",
  "level": "2",
  "url": "sect-long-division.html#sect-long-division-8-21",
  "type": "Example",
  "number": "5.4.6",
  "title": "",
  "body": "  Find using long division:    First, let's make this a bit easier and build a table of products of 21 which can be fairly easier found by successive addition:   Start the long division:   Our first task is , which from the table is ( is between 42 and 113, so round down):     bring the 4 down from the dividend:   and then we do , which is 0, so include that above the line and bring down the 1 from the dividend:   and now we do , which from the table is 4:   where recall that the subtraction is in base- . The result shows that .   "
},
{
  "id": "exercises-long-division-1",
  "level": "2",
  "url": "sect-long-division.html#exercises-long-division-1",
  "type": "Exercise",
  "number": "5.4.6.1",
  "title": "",
  "body": "  Produce a partitive interpretation chip model of the following division problems. Also find the result using long division and explain the relationship between the two.                 "
},
{
  "id": "exercises-long-division-2",
  "level": "2",
  "url": "sect-long-division.html#exercises-long-division-2",
  "type": "Exercise",
  "number": "5.4.6.2",
  "title": "",
  "body": "  For each of the following division problems, use a measurement approach to explaining the solution. Use as an example.                   For each of the following build a table of multiples of the divisor then use the table to perform the long division.                         "
},
{
  "id": "exercises-long-division-3",
  "level": "2",
  "url": "sect-long-division.html#exercises-long-division-3",
  "type": "Exercise",
  "number": "5.4.6.3",
  "title": "",
  "body": "  For each of the following, use estimation as in to determine the quotient using long division.                        "
},
{
  "id": "exercises-long-division-4",
  "level": "2",
  "url": "sect-long-division.html#exercises-long-division-4",
  "type": "Exercise",
  "number": "5.4.6.4",
  "title": "",
  "body": "  Use the chip model to perform . Show the results and you may use the base-5 multiplication table.   "
},
{
  "id": "exercises-long-division-5",
  "level": "2",
  "url": "sect-long-division.html#exercises-long-division-5",
  "type": "Exercise",
  "number": "5.4.6.5",
  "title": "",
  "body": "  Use long division to find the following division problems that are not in base-10.                        "
},
{
  "id": "sect-even-odd",
  "level": "1",
  "url": "sect-even-odd.html",
  "type": "Section",
  "number": "6.1",
  "title": "Even and Odd Numbers",
  "body": " Even and Odd Numbers     Know the definition of even and odd numbers.    Use picture proofs and algebraic proofs to prove properties of even and odd numbers.      Let’s look at this through a lens of even and odd numbers. There are a few ways to describe an even number including:     An even number is any number that you can get by skip counting by twos. For example     An even number of objects can always be paired up (and none left unpaired).    A number which is twice a whole number.    A number whose last digit is 0,2,4,6, or 8.     On the surface, these are all reasonable possibilities, and they seem be consistent with what we think of with even numbers. However, from a mathematical point of view in order to prove properties of even numbers, it is important that we have a simple mathematical definition that will be useful.  Therefore, we will use the following definition:    An even number is number which is twice a whole number. An odd number is one which is 1 more than twice a whole number.    The main reason for choosing this as a definition over others is that is it easier to use to show or prove the other statements. For example, we will use this definition to show that if a number’s last digit is 0, 2, 4, 6 or 8 then the number is even.  Before getting proofs, we can also examine some diagrams of even and odd numbers. Since the notion of even numbers is twice a whole number (or the equivalent of pairing of objects), the following diagrams for 6 and 18 are helpful:   A diagram of 6 and 18 shown with rectangular grids.   Two rectangular grids. The first is 2 rows and 3 columns. The second is 2 rows and 9 columns.     and the important notation is that there are 2 rows of boxes, indicating that it is even.   Why doesn't the following diagram show that 18 is even?   A rectangular grid with 3 rows and 6 columns.     How can we show that 78 is even? We could do a diagram with 78 boxes, however, 1) it would be hard to get it accurate–you’d probably need to double or triple count to make sure, and 2) it’s easier to not have to count. We can take a lead from writing bar diagrams with multiplication that we saw in as   A rectangular grid showing 78 as a even number with two rows of boxes.   A rectangular grid with two rows. The first few pairs of boxes are shown, then in the middle ***78*** is shown, then pairs of boxes at the end.     and note that it is clear that there are two equal rows of boxes. We can also show odd numbers by adding an extra box to the end. First, consider some small odd numbers. The following diagrams show 7 and 15:   Two rectangular grid models. The first has two rows. The top has 4 boxes and the bottom has 3 boxes. The other grid model has two rows. The top with 8 boxes and the bottom with 7 boxes.    And the following shows the odd number 37:   A rectangular grid model of 37. Note because 37 is odd there is an extra box at the end.   A rectangular grid with two rows. The top row has one more box than the 2nd row. Within the middle, ...37... is depicted.       Lemmas, Theorems and Proofs  We have seen a few theorems and lemmas in this text. For example, the Quotient-Remainder theorem is key to handling integer division. We call the result a theorem because it is a provable statement with an important result. For more minor results, we call such a statement a lemma .    A proof of a statement is a detailed explanation of how that statement follows logically from other statements accepted as true.    The proofs that we will see in this section will be approached from two different avenues: a diagram proof and an algebraic proof.   Diagram Proof  We will use diagrams to illustrate the argument. For example, we can show an even number and an odd number using the following two diagrams:   Two grid diagrams. The left one shows an even number grid diagram with two rows and an number of columns with ... shown. The right side shows an odd number with the same as the even number with an extra box at the end.    The keep these diagrams very general. They work for any even or odd number.  We will use such diagrams below to prove statements about even and odd numbers.    Algebraic Proofs  In these proofs, we use letters to denote even and odd numbers. Typically, we will say “Let be a whole number. Then is an even number and is an odd number.”  We will the use statements we know to be true about whole numbers to prove things.   We will see how a proof is presented using even and odd numbers. We will soon prove the following theorem:    The sum of any two even numbers is even.    First, we will show a diagram proof .  Consider two even numbers as shown in the diagram below:   A pair of diagrams. The left one shows an even number grid diagram with two rows and an number of columns with ... shown. The right side shows an even number grid diagram with two rows and an number of columns with ... shown. There is a ? with a brace under both diagrams.     This diagram shows the two grid diagrams together which shows two rows with ... pairs of boxes.    There are many important parts of this diagram proof. First, the two numbers (in light green and blue) are general even numbers. We don’t shows specifically the sizes of these numbers with the . The result is even because there two rows of the same size. This also clearly shows that the result is the sum of the two numbers. Note: the colors help, but could be done with shading.  Next, we’ll show an algebraic proof.   Let be any whole number. Then is an even number. Let be another whole number, with another even number. Since by the distributive property, is a whole number and is twice a whole number, the result is an even number.    Next, we will show that the sum of an even number and an odd number is odd.    The sum of an even number and a odd number is an odd number.     Diagram Proof:   Consider an even and odd number:   A pair of diagrams. The left one shows an even number grid diagram with two rows and an number of columns with ... shown. The right side shows an odd number with the same as the even number with an extra box at the end. There is a ? with a brace under both diagrams.     This diagram shows the two grid diagrams together which shows two rows with ... pairs of boxes with an extra box at the end.     Algebraic Proof:   Let be a whole number, then is an even number. Let be a whole number and be an odd number. The sum is The term in the parentheses is whole, because the sum of two whole number is whole. And lastly, is an odd number.        Illustrate with diagram as in . Do the same for using instead of showing every box.      Illustrate using diagrams as in and .      Prove that that sum of two odd numbers is even using     a picture proof.      an algebraic proof.       Use the to explain why every whole number A can be modeled by one of the following two diagrams:      (Hint: when we write , what are the possibilities for ?)      Give algebraic proofs of the following two statements about whole numbers:     Suppose is even. If is even, then is even.      Suppose is even. If is even, then is even.      "
},
{
  "id": "sect-even-odd-2",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-2",
  "type": "Objectives",
  "number": "6.1",
  "title": "",
  "body": "   Know the definition of even and odd numbers.    Use picture proofs and algebraic proofs to prove properties of even and odd numbers.    "
},
{
  "id": "sect-even-odd-3-5",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-3-5",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  An even number is number which is twice a whole number. An odd number is one which is 1 more than twice a whole number.   "
},
{
  "id": "fig-even-diagrams",
  "level": "2",
  "url": "sect-even-odd.html#fig-even-diagrams",
  "type": "Figure",
  "number": "6.1.2",
  "title": "",
  "body": " A diagram of 6 and 18 shown with rectangular grids.   Two rectangular grids. The first is 2 rows and 3 columns. The second is 2 rows and 9 columns.    "
},
{
  "id": "sect-even-odd-3-10",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-3-10",
  "type": "Remark",
  "number": "6.1.3",
  "title": "",
  "body": " Why doesn't the following diagram show that 18 is even?   A rectangular grid with 3 rows and 6 columns.    "
},
{
  "id": "fig-even-rectangular-grid",
  "level": "2",
  "url": "sect-even-odd.html#fig-even-rectangular-grid",
  "type": "Figure",
  "number": "6.1.4",
  "title": "",
  "body": " A rectangular grid showing 78 as a even number with two rows of boxes.   A rectangular grid with two rows. The first few pairs of boxes are shown, then in the middle ***78*** is shown, then pairs of boxes at the end.    "
},
{
  "id": "fig-odd-rectangular-grid",
  "level": "2",
  "url": "sect-even-odd.html#fig-odd-rectangular-grid",
  "type": "Figure",
  "number": "6.1.5",
  "title": "",
  "body": " A rectangular grid model of 37. Note because 37 is odd there is an extra box at the end.   A rectangular grid with two rows. The top row has one more box than the 2nd row. Within the middle, ...37... is depicted.    "
},
{
  "id": "sect-lemmas-theorem-proofs-3",
  "level": "2",
  "url": "sect-even-odd.html#sect-lemmas-theorem-proofs-3",
  "type": "Definition",
  "number": "6.1.6",
  "title": "",
  "body": "  A proof of a statement is a detailed explanation of how that statement follows logically from other statements accepted as true.   "
},
{
  "id": "sect-lemmas-theorem-proofs-8",
  "level": "2",
  "url": "sect-even-odd.html#sect-lemmas-theorem-proofs-8",
  "type": "Theorem",
  "number": "6.1.7",
  "title": "",
  "body": "  The sum of any two even numbers is even.    First, we will show a diagram proof .  Consider two even numbers as shown in the diagram below:   A pair of diagrams. The left one shows an even number grid diagram with two rows and an number of columns with ... shown. The right side shows an even number grid diagram with two rows and an number of columns with ... shown. There is a ? with a brace under both diagrams.     This diagram shows the two grid diagrams together which shows two rows with ... pairs of boxes.    There are many important parts of this diagram proof. First, the two numbers (in light green and blue) are general even numbers. We don’t shows specifically the sizes of these numbers with the . The result is even because there two rows of the same size. This also clearly shows that the result is the sum of the two numbers. Note: the colors help, but could be done with shading.  Next, we’ll show an algebraic proof.   Let be any whole number. Then is an even number. Let be another whole number, with another even number. Since by the distributive property, is a whole number and is twice a whole number, the result is an even number.   "
},
{
  "id": "thm-even-plus-odd",
  "level": "2",
  "url": "sect-even-odd.html#thm-even-plus-odd",
  "type": "Theorem",
  "number": "6.1.8",
  "title": "",
  "body": "  The sum of an even number and a odd number is an odd number.     Diagram Proof:   Consider an even and odd number:   A pair of diagrams. The left one shows an even number grid diagram with two rows and an number of columns with ... shown. The right side shows an odd number with the same as the even number with an extra box at the end. There is a ? with a brace under both diagrams.     This diagram shows the two grid diagrams together which shows two rows with ... pairs of boxes with an extra box at the end.     Algebraic Proof:   Let be a whole number, then is an even number. Let be a whole number and be an odd number. The sum is The term in the parentheses is whole, because the sum of two whole number is whole. And lastly, is an odd number.   "
},
{
  "id": "exercises-even-odd-1",
  "level": "2",
  "url": "sect-even-odd.html#exercises-even-odd-1",
  "type": "Exercise",
  "number": "6.1.2.1",
  "title": "",
  "body": "  Illustrate with diagram as in . Do the same for using instead of showing every box.   "
},
{
  "id": "exercises-even-odd-2",
  "level": "2",
  "url": "sect-even-odd.html#exercises-even-odd-2",
  "type": "Exercise",
  "number": "6.1.2.2",
  "title": "",
  "body": "  Illustrate using diagrams as in and .   "
},
{
  "id": "exercises-even-odd-3",
  "level": "2",
  "url": "sect-even-odd.html#exercises-even-odd-3",
  "type": "Exercise",
  "number": "6.1.2.3",
  "title": "",
  "body": "  Prove that that sum of two odd numbers is even using     a picture proof.      an algebraic proof.    "
},
{
  "id": "exercises-even-odd-4",
  "level": "2",
  "url": "sect-even-odd.html#exercises-even-odd-4",
  "type": "Exercise",
  "number": "6.1.2.4",
  "title": "",
  "body": "  Use the to explain why every whole number A can be modeled by one of the following two diagrams:      (Hint: when we write , what are the possibilities for ?)   "
},
{
  "id": "exercises-even-odd-5",
  "level": "2",
  "url": "sect-even-odd.html#exercises-even-odd-5",
  "type": "Exercise",
  "number": "6.1.2.5",
  "title": "",
  "body": "  Give algebraic proofs of the following two statements about whole numbers:     Suppose is even. If is even, then is even.      Suppose is even. If is even, then is even.    "
},
{
  "id": "sect-divisibility-tests",
  "level": "1",
  "url": "sect-divisibility-tests.html",
  "type": "Section",
  "number": "6.2",
  "title": "Divisibility Tests",
  "body": " Divisibility Tests     Understand what divisibility means.    Know how diagram help understand divisibility.    Make connections between long division and divisibility.    Understand and be able to use the divisibility lemma.      There are a number of cases when it is advantageous to know if numbers divide other numbers evenly.     You found 23 gloves in a box near a classroom. Which glove is missing its pair?    Why isn't 568 a reasonable answer if a student had the problem ?     For the first, example, you know that 2 does not divide 23 evenly because of the divisibility test that an even number ends in 0,2,4,6 or 8. (We will prove this soon). For the second example, we use use a divisibility by 3 test to show that a number is only divisible by 3 if the sum of its digits is also divisible by 3. (What is the sum of the digits in 568?)  We will also develop divisibility tests for 4, 5, 7, 8, 9, 10 and 11. Let's recall what we mean by divisibility.    We say “ is divisible by ” whenever is a multiple of , that if for some whole number . In addition, the following phrases have the same meaning:      is divisible by      divides      is a multiple of      is a factor of .       Recall that the states that for any pair of whole numbers and that there exist unique numbers and such that , which we often think of as . Divisibility, in short, means that , that there is no remainder.    Grid Diagrams for Divisibility  Divisibility can be seen in a rectangular grid diagram. We know that 3 divides 15 and can see it in the following diagram:   A grid diagram with 3 rows and 5 columns.    There are 15 squares and there are 3 rows with the same number of squares per row (5).  In contrast, 4 does not divide 15. In the following diagram:   A grid diagram with 4 rows and 3 columns and the the last row has only 3 squares.    The remainder is not 0.  We can show this in general with the following plot. If divides , then   A grid diagram with k rows and some number of column. All rows have the same number of columns.      Long Division and Divisibility  Recall as discussed above, a number is divisible by , if under division, there is no remainder. For larger numbers, we can use long division to do this and check the remainder. The following example shows this.    Does 9 divide 4725?    We can use long division to determine this.   And since the remainder is 0, this means that yes, 9 divides 4725. We will see below an easier way to do this.    The next two examples shows that we can use our mental math skills to check divisibility in some cases relatively easily.    Use mental math to determine if 3 divides 912.    We can do this first recognizing that so       Use mental math to determine if 6 divides 1240.    Similar to the example above, recognize that so   So 6 does not divide 1240.    In both of these examples, we found a number that was divisible by the dividend and then checked if the other number was divisible. Formally, this is done below and shown why this works.    Divisibility Lemma  In each of the two examples above, notice that we have taken a relatively large number and written it as the sum of two number, the first of which is divisible. The following lemma generalizes this idea:   Divisibility Lemma   Suppose is a number divisible by . Then   If is divisible by , then is divisible by .    If is not divisible by , then is not divisible by .       Above we showed that is not divisible by . The following example uses the divisibility lemma to do this.    Use the divisibility lemma to show that is not divisible by .    First, notice that we can write , so this will be and . It is important that the first number is divisible by , in this case . Because is not divisible by 6, the divisibility lemmas shows that is not divisible by 6.      Is divisible by 7?    We will use the divisibility lemma to show this and write , noting that the first number, is divisible by 7 because and is also divisible by 7, so is divisible by 7.    Now, we tackle the proof of the divisibility lemma.   Picture Proof of the Divisibility Lemma  The assumption from the theorem is that is divisible by .  First, we will show that if is divisible by then is divisible by .      The picture shows that is evenly rows of some number as well as is evenly rows of some (maybe different) number. The result shows that (the total of and ) is divisible by .  The same picture shows the result that if is divisible by (indicated by is rows of some number). Then is divisible by . (indicated that is rows of some number).   Note: many of the lemmas and divisibility theorems in this chapter are proven in later in this chapter and the algebraic proof of the is one of these.    Divisibility Test for small whole numbers  As we have discussed in this section, divisibility tests are helpful to determine divisibility without needed to do the division (usually long division) and often can be done mentally. There are a number of standard divisibility tests that you should know. This will give you more insight into numbers, often called number sense as well.   Divisibility Test for 2,4,5,8,10   A number is divisible   by 10 if and only if its last digit is 0,    by 5 if and only if its last digit is 0 or 5,    by 2 if and only if its last digits is 0,2,4,6 or 8,    by 4 if and only if its last two digits are a number divisible by 4,    by 8 if and only if its last three digits are a number divisible by 8.            5,280 is divisible by 10 because its last digit is 0.    5,280 is divisible by 5 because its last digit is 0.    5,280 is divisible by 2 because its last digit is 0.    5,280 is divisible by 4 because its last two digits (80) are divisible by 4.    5,280 is divisible by 8 because its last three digits are divisible by 8.       It's also good to know why these test work and the following proof gives you a sense of how to prove the other tests and why they work.   Proof Of the Divisible by 2 test  Let a whole number be written as   (why can it be written this way?) Since can be written as , it is divisible by 2. In addition, is divisible by 2 if and only if is 0, 2, 4, 6, or 8. By the divisibility theorem, is divisible by 2 if and only if and are divisible by 2.    Divisibility Tests for 3 and 9   A number is divisible   by 3 if and only if the sum of the digits is divisible by 3,    by 9 if and only if the sum of the digits is divisible by 9,       The proof for this is in and is similar to the proof for the divisibility by 2.   Using the Divisibility Test for 3   Determine if the following are divisible by 3:          Since , since 21 is divisible by 3, then 18,390 is divisible by 3.      293,456    Since , since 29 is not divisible by 3, then 293,456 is not divisible by 3.      Using the Divisibility Test for 9   Determine if the following are divisible by 9:   18,390    293,454        Since , since 21 is not divisible by 9, then 18,390 is not divisible by 9.    Since , since 27 is divisible by 9, then 293,456 is divisible by 9.        Other Divisibility Tests (Optional)  As we will see, it's very helpful to know divisibility tests and we will see them in to help determine if large numbers are prime. The other tests we'll cover here are the tests for 7 and 11 and after knowing these, you will have the divisibility of all primes up to 13.  Let's first look at the divisibility by 7 test.   Divisibility by 7 Test   Let be a number. If you take the last digit of and subtract it from the remaining digits of and that is divisible by , then is divisible by .    A few examples are helpful to understand this.    Use the to determine if the following are divisible by 7.     91    First, double the last digit to . Then subtract from the rest or , which is divsible by 7, so 91 is divisible by 7.           Double the last digit to and then subtract from the other digits or . Since 28 is divisible by 7, then so is .      2653    Start with doubling the last digit to and subtracting from or .  It's not easy to know if is divisible by 7, so let's do it again. Double to and subtract from the other digits or and since is divisible by , then both and are divisible by 7.           Double the last digit to and then subtract from the other digits or .  Again, check if is divisible by by doubling the last digit and subtracting from the others or . Since is not divisible by then neither nor is divisible by .       Divisibility Test for 11 A number is divisible by 11 if and only if the number formed by   is a multiple (whether positive, negative or 0) of 11.     Make sure that you carefully read the test for 11. Note that the sum is the odd-positioned digits, like the first, third, fifth, etc. and the even-positioned digits, like the 2nd, 4th, etc.It is common to mix this up with adding even and odd digits, but this is not what the test says.     Divisibility Test for 11 Determine if the following are divisible by 11:     93,412    208,273           so 93,412 is divisible by 11.     which is not divisible by 11, so 208,273 is not divisible by 11.            Which of the following numbers are divisible by 2? 4? 5? 8? 10?     4735      8120      15624      234,270      9,234,510      123,456,780       Which of the following numbers are divisible by 3? by 9? by 11?     612      576      589      2937      8602      90,090       Test if the following numbers are divisible by 7     623      793      5124      5685      64,673       Which of the following numbers divide 186,426?  2, 3, 4, 5, 7, 8, 9, 10, 11      Let be a whole umber. If 18 divides , then 3 and 6 divide as well. Show that the converse is not necessarily true by finding a counterexample, that is a number which is divisible by 3 and 6 by not 18.      Prove the Divisibility Test for 4. (Hint: adapt the divisibility test for 2.)      Prove the Divisibility Test for 9 for 4-digit numbers.     "
},
{
  "id": "sect-divisibility-tests-2",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-2",
  "type": "Objectives",
  "number": "6.2",
  "title": "",
  "body": "   Understand what divisibility means.    Know how diagram help understand divisibility.    Make connections between long division and divisibility.    Understand and be able to use the divisibility lemma.    "
},
{
  "id": "sect-divisibility-tests-3-5",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-3-5",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "  We say “ is divisible by ” whenever is a multiple of , that if for some whole number . In addition, the following phrases have the same meaning:      is divisible by      divides      is a multiple of      is a factor of .      "
},
{
  "id": "sect-divisibility-tests-5-3",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-5-3",
  "type": "Example",
  "number": "6.2.2",
  "title": "",
  "body": "  Does 9 divide 4725?    We can use long division to determine this.   And since the remainder is 0, this means that yes, 9 divides 4725. We will see below an easier way to do this.   "
},
{
  "id": "sect-divisibility-tests-5-5",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-5-5",
  "type": "Example",
  "number": "6.2.3",
  "title": "",
  "body": "  Use mental math to determine if 3 divides 912.    We can do this first recognizing that so    "
},
{
  "id": "sect-divisibility-tests-5-6",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-5-6",
  "type": "Example",
  "number": "6.2.4",
  "title": "",
  "body": "  Use mental math to determine if 6 divides 1240.    Similar to the example above, recognize that so   So 6 does not divide 1240.   "
},
{
  "id": "lem-divisibility",
  "level": "2",
  "url": "sect-divisibility-tests.html#lem-divisibility",
  "type": "Lemma",
  "number": "6.2.5",
  "title": "Divisibility Lemma.",
  "body": " Divisibility Lemma   Suppose is a number divisible by . Then   If is divisible by , then is divisible by .    If is not divisible by , then is not divisible by .      "
},
{
  "id": "sect-divisibility-tests-6-5",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-6-5",
  "type": "Example",
  "number": "6.2.6",
  "title": "",
  "body": "  Use the divisibility lemma to show that is not divisible by .    First, notice that we can write , so this will be and . It is important that the first number is divisible by , in this case . Because is not divisible by 6, the divisibility lemmas shows that is not divisible by 6.   "
},
{
  "id": "sect-divisibility-tests-6-6",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-6-6",
  "type": "Example",
  "number": "6.2.7",
  "title": "",
  "body": "  Is divisible by 7?    We will use the divisibility lemma to show this and write , noting that the first number, is divisible by 7 because and is also divisible by 7, so is divisible by 7.   "
},
{
  "id": "sect-divisibility-tests-6-8",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-6-8",
  "type": "Proof",
  "number": "6.2.3.1",
  "title": "Picture Proof of the Divisibility Lemma.",
  "body": " Picture Proof of the Divisibility Lemma  The assumption from the theorem is that is divisible by .  First, we will show that if is divisible by then is divisible by .      The picture shows that is evenly rows of some number as well as is evenly rows of some (maybe different) number. The result shows that (the total of and ) is divisible by .  The same picture shows the result that if is divisible by (indicated by is rows of some number). Then is divisible by . (indicated that is rows of some number).  "
},
{
  "id": "thm-divisibility-tests",
  "level": "2",
  "url": "sect-divisibility-tests.html#thm-divisibility-tests",
  "type": "Theorem",
  "number": "6.2.8",
  "title": "Divisibility Test for 2,4,5,8,10.",
  "body": " Divisibility Test for 2,4,5,8,10   A number is divisible   by 10 if and only if its last digit is 0,    by 5 if and only if its last digit is 0 or 5,    by 2 if and only if its last digits is 0,2,4,6 or 8,    by 4 if and only if its last two digits are a number divisible by 4,    by 8 if and only if its last three digits are a number divisible by 8.      "
},
{
  "id": "subsect-divisibility-tests-4",
  "level": "2",
  "url": "sect-divisibility-tests.html#subsect-divisibility-tests-4",
  "type": "Example",
  "number": "6.2.9",
  "title": "",
  "body": "     5,280 is divisible by 10 because its last digit is 0.    5,280 is divisible by 5 because its last digit is 0.    5,280 is divisible by 2 because its last digit is 0.    5,280 is divisible by 4 because its last two digits (80) are divisible by 4.    5,280 is divisible by 8 because its last three digits are divisible by 8.      "
},
{
  "id": "subsect-divisibility-tests-6",
  "level": "2",
  "url": "sect-divisibility-tests.html#subsect-divisibility-tests-6",
  "type": "Proof",
  "number": "6.2.4.1",
  "title": "Proof Of the Divisible by 2 test.",
  "body": " Proof Of the Divisible by 2 test  Let a whole number be written as   (why can it be written this way?) Since can be written as , it is divisible by 2. In addition, is divisible by 2 if and only if is 0, 2, 4, 6, or 8. By the divisibility theorem, is divisible by 2 if and only if and are divisible by 2.  "
},
{
  "id": "thm-divisibility-test-3-9",
  "level": "2",
  "url": "sect-divisibility-tests.html#thm-divisibility-test-3-9",
  "type": "Theorem",
  "number": "6.2.10",
  "title": "Divisibility Tests for 3 and 9.",
  "body": " Divisibility Tests for 3 and 9   A number is divisible   by 3 if and only if the sum of the digits is divisible by 3,    by 9 if and only if the sum of the digits is divisible by 9,      "
},
{
  "id": "subsect-divisibility-tests-9",
  "level": "2",
  "url": "sect-divisibility-tests.html#subsect-divisibility-tests-9",
  "type": "Example",
  "number": "6.2.11",
  "title": "Using the Divisibility Test for 3.",
  "body": " Using the Divisibility Test for 3   Determine if the following are divisible by 3:          Since , since 21 is divisible by 3, then 18,390 is divisible by 3.      293,456    Since , since 29 is not divisible by 3, then 293,456 is not divisible by 3.    "
},
{
  "id": "subsect-divisibility-tests-10",
  "level": "2",
  "url": "sect-divisibility-tests.html#subsect-divisibility-tests-10",
  "type": "Example",
  "number": "6.2.12",
  "title": "Using the Divisibility Test for 9.",
  "body": " Using the Divisibility Test for 9   Determine if the following are divisible by 9:   18,390    293,454        Since , since 21 is not divisible by 9, then 18,390 is not divisible by 9.    Since , since 27 is divisible by 9, then 293,456 is divisible by 9.      "
},
{
  "id": "thm-divisibility-7",
  "level": "2",
  "url": "sect-divisibility-tests.html#thm-divisibility-7",
  "type": "Theorem",
  "number": "6.2.13",
  "title": "Divisibility by 7 Test.",
  "body": " Divisibility by 7 Test   Let be a number. If you take the last digit of and subtract it from the remaining digits of and that is divisible by , then is divisible by .   "
},
{
  "id": "subsect-divisibility-tests-11-6",
  "level": "2",
  "url": "sect-divisibility-tests.html#subsect-divisibility-tests-11-6",
  "type": "Example",
  "number": "6.2.14",
  "title": "",
  "body": "  Use the to determine if the following are divisible by 7.     91    First, double the last digit to . Then subtract from the rest or , which is divsible by 7, so 91 is divisible by 7.           Double the last digit to and then subtract from the other digits or . Since 28 is divisible by 7, then so is .      2653    Start with doubling the last digit to and subtracting from or .  It's not easy to know if is divisible by 7, so let's do it again. Double to and subtract from the other digits or and since is divisible by , then both and are divisible by 7.           Double the last digit to and then subtract from the other digits or .  Again, check if is divisible by by doubling the last digit and subtracting from the others or . Since is not divisible by then neither nor is divisible by .    "
},
{
  "id": "subsect-divisibility-tests-11-7",
  "level": "2",
  "url": "sect-divisibility-tests.html#subsect-divisibility-tests-11-7",
  "type": "Theorem",
  "number": "6.2.15",
  "title": "",
  "body": "  Divisibility Test for 11 A number is divisible by 11 if and only if the number formed by   is a multiple (whether positive, negative or 0) of 11.   "
},
{
  "id": "subsect-divisibility-tests-11-8",
  "level": "2",
  "url": "sect-divisibility-tests.html#subsect-divisibility-tests-11-8",
  "type": "Remark",
  "number": "6.2.16",
  "title": "",
  "body": " Make sure that you carefully read the test for 11. Note that the sum is the odd-positioned digits, like the first, third, fifth, etc. and the even-positioned digits, like the 2nd, 4th, etc.It is common to mix this up with adding even and odd digits, but this is not what the test says.  "
},
{
  "id": "subsect-divisibility-tests-11-9",
  "level": "2",
  "url": "sect-divisibility-tests.html#subsect-divisibility-tests-11-9",
  "type": "Example",
  "number": "6.2.17",
  "title": "",
  "body": "  Divisibility Test for 11 Determine if the following are divisible by 11:     93,412    208,273           so 93,412 is divisible by 11.     which is not divisible by 11, so 208,273 is not divisible by 11.      "
},
{
  "id": "exercises-divisibility-tests-1",
  "level": "2",
  "url": "sect-divisibility-tests.html#exercises-divisibility-tests-1",
  "type": "Exercise",
  "number": "6.2.5.1",
  "title": "",
  "body": "  Which of the following numbers are divisible by 2? 4? 5? 8? 10?     4735      8120      15624      234,270      9,234,510      123,456,780    "
},
{
  "id": "exercises-divisibility-tests-2",
  "level": "2",
  "url": "sect-divisibility-tests.html#exercises-divisibility-tests-2",
  "type": "Exercise",
  "number": "6.2.5.2",
  "title": "",
  "body": "  Which of the following numbers are divisible by 3? by 9? by 11?     612      576      589      2937      8602      90,090    "
},
{
  "id": "exercises-divisibility-tests-3",
  "level": "2",
  "url": "sect-divisibility-tests.html#exercises-divisibility-tests-3",
  "type": "Exercise",
  "number": "6.2.5.3",
  "title": "",
  "body": "  Test if the following numbers are divisible by 7     623      793      5124      5685      64,673    "
},
{
  "id": "exercises-divisibility-tests-4",
  "level": "2",
  "url": "sect-divisibility-tests.html#exercises-divisibility-tests-4",
  "type": "Exercise",
  "number": "6.2.5.4",
  "title": "",
  "body": "  Which of the following numbers divide 186,426?  2, 3, 4, 5, 7, 8, 9, 10, 11   "
},
{
  "id": "exercises-divisibility-tests-5",
  "level": "2",
  "url": "sect-divisibility-tests.html#exercises-divisibility-tests-5",
  "type": "Exercise",
  "number": "6.2.5.5",
  "title": "",
  "body": "  Let be a whole umber. If 18 divides , then 3 and 6 divide as well. Show that the converse is not necessarily true by finding a counterexample, that is a number which is divisible by 3 and 6 by not 18.   "
},
{
  "id": "exercises-divisibility-tests-6",
  "level": "2",
  "url": "sect-divisibility-tests.html#exercises-divisibility-tests-6",
  "type": "Exercise",
  "number": "6.2.5.6",
  "title": "",
  "body": "  Prove the Divisibility Test for 4. (Hint: adapt the divisibility test for 2.)   "
},
{
  "id": "exercises-divisibility-tests-7",
  "level": "2",
  "url": "sect-divisibility-tests.html#exercises-divisibility-tests-7",
  "type": "Exercise",
  "number": "6.2.5.7",
  "title": "",
  "body": "  Prove the Divisibility Test for 9 for 4-digit numbers.   "
},
{
  "id": "sect-fundamental-theorem-arithmetic",
  "level": "1",
  "url": "sect-fundamental-theorem-arithmetic.html",
  "type": "Section",
  "number": "6.3",
  "title": "Primes and the Fundamental Theorem of Arithmetic",
  "body": " Primes and the Fundamental Theorem of Arithmetic     Understand the definition of a prime number.    Understand how the Sieve of Eratosthenes produces prime numbers.    Find the prime factorization of a number using factor trees.    Know how to test numbers for primality.      We can write often whole numbers as products of other whole numbers. For example and we can further write , therefore   The number 2, 3 and 5 can no longer be written as multiples of other numbers and thus called prime numbers.     A prime number is a whole number whose only factors are 1 and . Whole numbers that are not prime are called composite .      The Sieve of Eratosthenes  There are a variety of ways to find prime numbers. One such way is called the sieve of Eratosthenes, a Greek scholar c. 275 – 195 B.C.E. The sieve can be used for finding prime numbers up to any number and the following shows how to find them up to 60. First start with a grid of numbers where the lowest number 2 is written:   Sieve of Eratosthenes                 2  3  4  5  6  7  8  9  10  11  12    13  14  15  16  17  18  19  20  21  22  23  24    25  26  27  28  29  30  31  32  33  34  35  36    37  38  39  40  41  42  43  44  45  46  47  48    49  50  51  52  53  54  55  56  57  58  59  60     Each step has two parts:     Circle the smallest number not crossed out.    Cross out all multiples of that number.     In this first step, nothing is crossed out, so we circle the number 2 and then cross out multiples of 2.                                                                                      For the next step, circle the 3 and cross out all multiples of 3.                                                                                      and notice that some of those crossed out were already crossed out. (What property did the number crossed out twice have?).  The next step will circle the 5 and cross out multiple of 5 (shown in blue):                                                                                      This continues until all numbers are either circled or crossed out, however it is an interesting question to determine when you can stop the process, knowing that the uncrossed ones should all be circled.  The result shows:                                                                                      The circled numbers are prime and the crossed out ones are composite. This shows that the following numbers less than 60 are prime: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59.   Sieve of Eratosthenes  To find a list of prime below a number, using the sieve of Eratosthenes,   Write a grid of numbers starting at 2 and up to . It is nice to use rows of 12 as shown above, and rows of 15 or 18 are nice too, but neither is a requirement.    Circle the lowest uncrossed out number.    Cross out all multiples of that number.    Repeat steps 2 and 3 until all numbers are circled or crossed out.   The circled numbers are prime.    Fundamental Theorem of Arithmetic   Every whole number , can be written as a product of primes and this can only be done one way (except for reordering).    Knowing how to write whole numbers in term of its prime factors is an important step in understanding the structure of whole numbers and operations on them. We show an efficient way to do this in the next section.    Prime Factorization and Factor Trees  In light of the Fundamental Theorem of Arithmetic, because every whole number can be written as a unique, product of primes, it is quite helpful to find this factorization. In general to do this, we will build a factor tree . This is best understood with an example.  If we look for the prime factorization of 60, then we start with 60 and show the two branches.   The number 60 with lines from it to below left and below right.    At the ends of the lines, you find a pair of factors of 60. There are many it doesn't matter what you start with. Let's try 6 and 10 to get   The number 60 with lines from it to below left connected to a 6 and below right connection to a 10.    At this point, write a pair of factors of 6 and a pair for ten as follows:   The number 60 with lines from it to below left connected to a 6 and below right connection to a 10. From the 6 there are lines below it to a 2 and a 3. From the 10 there are lines below it to a 5 and 2.    And note that at this point, all of the ends of the tree You may be why this is called a tree. It doesn't look like a tree (but perhaps it does if it is flipped upside down). The term tree comes from a branch of mathematics called Graph Theory . A tree is a graph (which has nodes and edges) with no internal connections or cycles. That is every node (where the numbers are in our factor trees) branches to two or more. are prime and you write down the factorization as the product of the ends of the tree or where either form is fine and in general the prime factors are written from smallest to largest. The form is called the exponential form because repeated factors are written as exponents.  You may be asking what if I chose a different factor of 60? A mathematical answer is that because of the Fundamental Theorem of Arithmetic, every whole number has a unique factor, so you would get the same answer. If you are not convinced, let's take a look at the next example.    Find an alternative factor tree of 60 and find the resulting factorization.    Let's start with factoring 60 as    The number 60 with lines from it to below left connected to a 2 and below right connection to a 30.    and then factor 30 as or   The number 60 with lines from it to below left connected to a 2 and below right connection to a 30. Below the 30 are lines to a 2 and to a 15. Below the 15 are lines to a 3 and a 5.    The result is the product of the ends of the branches which is the same as above or .    The result of this example shows that it doesn't matter how you perform the factorization. The resulting tree will be different but the factors and thus the factorization will be the same.    Find the prime factorization of , and .    We will use factor trees to do this efficiently:     First, note that , So we write:   The number 56 with lines from it to below left connected to a 8 and below right connection to a 7.    and then note that so we can write the diagram as:   The number 56 with lines from it to below left connected to a 8 and below right connection to a 7. Below the 8 are three lines connected each to a 2.    And now all of the ends of the branches are prime and this shows that and recall that repeated multiplication can be written in exponential form, so this can be written more compactly as     For , we'll start with a tree and recognize using the divisibility rules that 8 is a factor of 288.   The number 288 with lines from it to below left connected to a 8 and below right connection to a 36.    and then factor 8 and 36 as well:   The number 288 with lines from it to below left connected to a 8 and below right connection to a 36. Connected to the 8 are three lines below it each connected to a 2. Connected to the 36 are two lines each connected to a 6.    and finally factor the 6.   The number 288 with lines from it to below left connected to a 8 and below right connection to a 36. Connected to the 8 are three lines below it each connected to a 2. Connected to the 36 are two lines each connected to a 6. Connected to each 6 are a line to a 2 and a line to a 3.    And all of the ends are prime now and this shows that     To find the prime factors of , we will take a less visual approach, but in the same spirit. First, recognize that 25 is a factor and you can use long division to find the other factor therefore   Next, we seek a factor of 561 and using divisibility rules, 11 is a factor and we can write . Lastly, note that 51 is divisible by 3 and . Putting all of this together, we get:        As we stated above, the initial factoring doesn't matter in the result, however if you pick a small factor for each stage, then it may take more steps. For example, on the factoring of 288 shown in the previous example, we could have done resulting in 6 steps instead of the 3 it took in the previous example.    Primality Test  From the last section, we saw using the Sieve of Eratosthenes that we can find the first handful of prime numbers. This is great for finding the first few primes, but what if we want to determine if 1151 is prime? We still need to determine if the only factors are 1 and itself, but we can use the following theorem:   Primality Test   A whole number is prime unless it has a prime factor . Thus to test whether is prime one need only check divisibility by the primes that satisfy .    This theorem can be turned into an algorithm to determine if a number is prime.   Algorithm to Test a Number for Primality  This basically gives use a recipe (called an algorithm) for determining if a number is prime:     Check if 2 is a factor (use the divisibility test).    Check if 3 is a factor (use the divisibility test).    Check if 5 is a factor (use the divisibility test).    Check if 7 is a factor (use the divisibility test if you learned it, the divisibility lemma or long division).    Check if 11 is a factor (use the divisibility test).    Continue for     If any of the primes are a factor, stop, the number is not prime.    If you reach , then stop, the number is prime.      Let's see how this works with an example.    Is 203 prime?    First of all the square root of 203 is between 13 and 15 (since and ), so we need to check if 203 is divisible by 2,3,5,7,11, and 13.     203 isn't divisible by 2 (ends in a 3)    203 is not divisible by 3 (sum of digits is 5)    203 is not divisible by 5 (doesn't end in 0 or 5)    203 is divisible by 7. Double 3 and subtract it from 20 to get , which is a multiple of 7, so 203 is divisible by 7. You can use the divisibility lemma or long division to find the other factor, which is 29, so .     At this point we stop because we found a pair of factors. This shows that , so this isn't prime.    Here's another example    Is 293 prime?     First, let's determine which primes we need to check. Since and , we can check up through 17.     293 isn't divisible by 2 (ends in a 3)    293 is not divisible by 3 (sum of digits is 14, not a multiple of 3)    293 is not divisible by 5 (doesn't end in 0 or 5)    293 is not divisible by 7. If you learned the divisibility test, then double the 3 and subtract it from 29 to get , which is not a multiple of 7, so 293 is not divisible by 7. If you didn't learn the test, then this can be done with the Divisibility Lemma . and since 13 is not divisible by 7, then 293 is not either. Using long division show:     293 is not divisible by 11. Use the divisibility test , which is not a multiple of 11.    Check if 293 is divisible by 13. Using long division, and since there is a nonzero remainder, it is not divisible by 13.    Check if 293 is divisible by 17. Using long division, and since there is a nonzero remainder, it is not divisible by 17.     Since no primes than satisfy , then 293 is prime.      Applications of Prime Factorization  To further understand prime factorization, we look at a interesting function, the factorial. The factorial of a number is the product of all whole from down to . The factorial is written with a ! after the number. For example   In this section, we'll look at the prime factorization of these numbers. To accomplish this, instead of starting at the whole number 120 or 5040, we write out the factorial as the product of whole numbers and factor all composite numbers.    For each of the following factorials, write the prime factorization.     5!    Start with the product of all of the numbers 5 down to 1 (not including, since 1 isn't prime). and then we factor the only composite number there: where in the last step we wrote exponents and rearranged the factors.                 We can also use a nice property of factorials in that we can start writing the product of the terms and stop at any point putting the factorial. Notice that So for example we can write:   And this let's us find larger prime factorization. where the factoization of 7! was found in the previous example. This can be rearranged and written in exponential form as   Notice that the primes less than 12 are in and this will always be true. The number of each factor needs to be found as above.  We'll use the prime factorization in the problems to answer questions.      Find the prime factorization of the following numbers. Write the result in exponential form.     770      1540      69,300      1456       Use the primality test to determine if each of the following is prime.     127      221      233      323      349       The complete list of factors of 30 can be arranged in pairs so that the product of each pair is 30:    1  2  3  5    30  15  10  6       Make similar lists of all of the factors of 56, 84 and 144      Prove that a number has an even number of factors unless it is the square of a whole number. (Hint: Each factor has a partner  unless what is true about ?)       For each following number, provide the prime factorization.                    Is 10! divisible by 10? by 30? by 120? by 1000? (Hint: factor 10, 30, 120 and 1000 and determine if the factors are in 10! that you found in the previous problem. )      Find the largest such that is divisible by .      In the prime factorization of , you should notice that there was a and for some . This means that there is a factor of 100 in therefore ends in 2 zeros. Use the number of s in each of the following to determine the number of zeros in each factor. (Note: you do not need to fully factor the number, just determine the number of 5s).                          "
},
{
  "id": "sect-fundamental-theorem-arithmetic-2",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-2",
  "type": "Objectives",
  "number": "6.3",
  "title": "",
  "body": "   Understand the definition of a prime number.    Understand how the Sieve of Eratosthenes produces prime numbers.    Find the prime factorization of a number using factor trees.    Know how to test numbers for primality.    "
},
{
  "id": "sect-fundamental-theorem-arithmetic-3-3",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-3-3",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  A prime number is a whole number whose only factors are 1 and . Whole numbers that are not prime are called composite .   "
},
{
  "id": "table-numbers-1-60",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#table-numbers-1-60",
  "type": "Table",
  "number": "6.3.2",
  "title": "Sieve of Eratosthenes",
  "body": " Sieve of Eratosthenes                 2  3  4  5  6  7  8  9  10  11  12    13  14  15  16  17  18  19  20  21  22  23  24    25  26  27  28  29  30  31  32  33  34  35  36    37  38  39  40  41  42  43  44  45  46  47  48    49  50  51  52  53  54  55  56  57  58  59  60    "
},
{
  "id": "sect-fundamental-theorem-arithmetic-4-17",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-4-17",
  "type": "Remark",
  "number": "6.3.3",
  "title": "Sieve of Eratosthenes.",
  "body": " Sieve of Eratosthenes  To find a list of prime below a number, using the sieve of Eratosthenes,   Write a grid of numbers starting at 2 and up to . It is nice to use rows of 12 as shown above, and rows of 15 or 18 are nice too, but neither is a requirement.    Circle the lowest uncrossed out number.    Cross out all multiples of that number.    Repeat steps 2 and 3 until all numbers are circled or crossed out.   The circled numbers are prime.  "
},
{
  "id": "sect-fundamental-theorem-arithmetic-4-18",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-4-18",
  "type": "Theorem",
  "number": "6.3.4",
  "title": "Fundamental Theorem of Arithmetic.",
  "body": " Fundamental Theorem of Arithmetic   Every whole number , can be written as a product of primes and this can only be done one way (except for reordering).   "
},
{
  "id": "sect-factor-trees-2",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-factor-trees-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factor tree "
},
{
  "id": "sect-factor-trees-9",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-factor-trees-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tree exponential form "
},
{
  "id": "sect-factor-trees-11",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-factor-trees-11",
  "type": "Example",
  "number": "6.3.5",
  "title": "",
  "body": "  Find an alternative factor tree of 60 and find the resulting factorization.    Let's start with factoring 60 as    The number 60 with lines from it to below left connected to a 2 and below right connection to a 30.    and then factor 30 as or   The number 60 with lines from it to below left connected to a 2 and below right connection to a 30. Below the 30 are lines to a 2 and to a 15. Below the 15 are lines to a 3 and a 5.    The result is the product of the ends of the branches which is the same as above or .   "
},
{
  "id": "sect-factor-trees-13",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-factor-trees-13",
  "type": "Example",
  "number": "6.3.6",
  "title": "",
  "body": "  Find the prime factorization of , and .    We will use factor trees to do this efficiently:     First, note that , So we write:   The number 56 with lines from it to below left connected to a 8 and below right connection to a 7.    and then note that so we can write the diagram as:   The number 56 with lines from it to below left connected to a 8 and below right connection to a 7. Below the 8 are three lines connected each to a 2.    And now all of the ends of the branches are prime and this shows that and recall that repeated multiplication can be written in exponential form, so this can be written more compactly as     For , we'll start with a tree and recognize using the divisibility rules that 8 is a factor of 288.   The number 288 with lines from it to below left connected to a 8 and below right connection to a 36.    and then factor 8 and 36 as well:   The number 288 with lines from it to below left connected to a 8 and below right connection to a 36. Connected to the 8 are three lines below it each connected to a 2. Connected to the 36 are two lines each connected to a 6.    and finally factor the 6.   The number 288 with lines from it to below left connected to a 8 and below right connection to a 36. Connected to the 8 are three lines below it each connected to a 2. Connected to the 36 are two lines each connected to a 6. Connected to each 6 are a line to a 2 and a line to a 3.    And all of the ends are prime now and this shows that     To find the prime factors of , we will take a less visual approach, but in the same spirit. First, recognize that 25 is a factor and you can use long division to find the other factor therefore   Next, we seek a factor of 561 and using divisibility rules, 11 is a factor and we can write . Lastly, note that 51 is divisible by 3 and . Putting all of this together, we get:       "
},
{
  "id": "sect-fundamental-theorem-arithmetic-6-3",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-6-3",
  "type": "Theorem",
  "number": "6.3.7",
  "title": "Primality Test.",
  "body": " Primality Test   A whole number is prime unless it has a prime factor . Thus to test whether is prime one need only check divisibility by the primes that satisfy .   "
},
{
  "id": "sect-fundamental-theorem-arithmetic-6-5",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-6-5",
  "type": "Note",
  "number": "6.3.8",
  "title": "Algorithm to Test a Number for Primality.",
  "body": " Algorithm to Test a Number for Primality  This basically gives use a recipe (called an algorithm) for determining if a number is prime:     Check if 2 is a factor (use the divisibility test).    Check if 3 is a factor (use the divisibility test).    Check if 5 is a factor (use the divisibility test).    Check if 7 is a factor (use the divisibility test if you learned it, the divisibility lemma or long division).    Check if 11 is a factor (use the divisibility test).    Continue for     If any of the primes are a factor, stop, the number is not prime.    If you reach , then stop, the number is prime.     "
},
{
  "id": "sect-fundamental-theorem-arithmetic-6-7",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-6-7",
  "type": "Example",
  "number": "6.3.9",
  "title": "",
  "body": "  Is 203 prime?    First of all the square root of 203 is between 13 and 15 (since and ), so we need to check if 203 is divisible by 2,3,5,7,11, and 13.     203 isn't divisible by 2 (ends in a 3)    203 is not divisible by 3 (sum of digits is 5)    203 is not divisible by 5 (doesn't end in 0 or 5)    203 is divisible by 7. Double 3 and subtract it from 20 to get , which is a multiple of 7, so 203 is divisible by 7. You can use the divisibility lemma or long division to find the other factor, which is 29, so .     At this point we stop because we found a pair of factors. This shows that , so this isn't prime.   "
},
{
  "id": "sect-fundamental-theorem-arithmetic-6-9",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-6-9",
  "type": "Example",
  "number": "6.3.10",
  "title": "",
  "body": "  Is 293 prime?     First, let's determine which primes we need to check. Since and , we can check up through 17.     293 isn't divisible by 2 (ends in a 3)    293 is not divisible by 3 (sum of digits is 14, not a multiple of 3)    293 is not divisible by 5 (doesn't end in 0 or 5)    293 is not divisible by 7. If you learned the divisibility test, then double the 3 and subtract it from 29 to get , which is not a multiple of 7, so 293 is not divisible by 7. If you didn't learn the test, then this can be done with the Divisibility Lemma . and since 13 is not divisible by 7, then 293 is not either. Using long division show:     293 is not divisible by 11. Use the divisibility test , which is not a multiple of 11.    Check if 293 is divisible by 13. Using long division, and since there is a nonzero remainder, it is not divisible by 13.    Check if 293 is divisible by 17. Using long division, and since there is a nonzero remainder, it is not divisible by 17.     Since no primes than satisfy , then 293 is prime.   "
},
{
  "id": "subsec-prime-applications-4",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#subsec-prime-applications-4",
  "type": "Example",
  "number": "6.3.11",
  "title": "",
  "body": "  For each of the following factorials, write the prime factorization.     5!    Start with the product of all of the numbers 5 down to 1 (not including, since 1 isn't prime). and then we factor the only composite number there: where in the last step we wrote exponents and rearranged the factors.                "
},
{
  "id": "exercises-primes-1",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#exercises-primes-1",
  "type": "Exercise",
  "number": "6.3.5.1",
  "title": "",
  "body": "  Find the prime factorization of the following numbers. Write the result in exponential form.     770      1540      69,300      1456    "
},
{
  "id": "exercises-primes-2",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#exercises-primes-2",
  "type": "Exercise",
  "number": "6.3.5.2",
  "title": "",
  "body": "  Use the primality test to determine if each of the following is prime.     127      221      233      323      349    "
},
{
  "id": "exercises-primes-3",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#exercises-primes-3",
  "type": "Exercise",
  "number": "6.3.5.3",
  "title": "",
  "body": "  The complete list of factors of 30 can be arranged in pairs so that the product of each pair is 30:    1  2  3  5    30  15  10  6       Make similar lists of all of the factors of 56, 84 and 144      Prove that a number has an even number of factors unless it is the square of a whole number. (Hint: Each factor has a partner  unless what is true about ?)    "
},
{
  "id": "exercises-primes-4",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#exercises-primes-4",
  "type": "Exercise",
  "number": "6.3.5.4",
  "title": "",
  "body": "  For each following number, provide the prime factorization.                 "
},
{
  "id": "exercises-primes-5",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#exercises-primes-5",
  "type": "Exercise",
  "number": "6.3.5.5",
  "title": "",
  "body": "  Is 10! divisible by 10? by 30? by 120? by 1000? (Hint: factor 10, 30, 120 and 1000 and determine if the factors are in 10! that you found in the previous problem. )   "
},
{
  "id": "exercises-primes-6",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#exercises-primes-6",
  "type": "Exercise",
  "number": "6.3.5.6",
  "title": "",
  "body": "  Find the largest such that is divisible by .   "
},
{
  "id": "exercises-primes-7",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#exercises-primes-7",
  "type": "Exercise",
  "number": "6.3.5.7",
  "title": "",
  "body": "  In the prime factorization of , you should notice that there was a and for some . This means that there is a factor of 100 in therefore ends in 2 zeros. Use the number of s in each of the following to determine the number of zeros in each factor. (Note: you do not need to fully factor the number, just determine the number of 5s).                        "
},
{
  "id": "sect-gcf-lcm",
  "level": "1",
  "url": "sect-gcf-lcm.html",
  "type": "Section",
  "number": "6.4",
  "title": "Greatest Common Factors and Least Common Multiples",
  "body": " Greatest Common Factors and Least Common Multiples     Explain the Greatest Common Factor and be able to find values of it.    Explain the Least Common Multiple and be able to find values of it.    Understand the relationship between the Greatest Common Factor and the Least Common Multiple.      In this section, we introduce the Greatest Common Factor (GCF) and the Least Common Multiple (LCM) which comes up naturally in solving problems. Let's start with a couple of nice word problems that help illustrate these concepts.    A baker has 48 chocolate chip cookies and 64 sugar cookies. They want to pack them into identical boxes for a fundraiser so that every box has the exact same combination of cookies, and no cookies are left over. What is the maximum number of boxes they can make?    Because we are looking for the number of boxes that will evenly fill with chocolate chip and sugar cookies, we are looking for factors of 48 and 64 respectively and since each box will be filled with the same number, then we are looking for a common factor. For example, 8 is a common factor and if we had 8 boxes with 6 chocolate chip and 8 sugar cookies, that will work, however, is this the greatest common factor?    A clockmaker is designing a mechanism for a custom clock using two interlocking gears:   Gear A (the smaller drive gear) has 15 teeth.    Gear B (the larger wheel gear) has 20 teeth.   The clockmaker marks one tooth on Gear A and one tooth on Gear B with a white dot. They mesh the gears together so that the two dotted teeth are touching perfectly at the starting point.   How many teeth on Gear A must pass the interlocking point before the two white dots touch each other again?    How many full rotations will Gear A have made when this happens?    How many full rotations will Gear B have made when this happens?      A model of the gear problem. Gear A (15 teeth) and Gear B (20 teeth) share identical tooth spacing and size, allowing them to mesh cleanly at the contact line.          Greatest Common Factor  We start with the greatest common factor.    The Greatest Common Factor of two whole numbers and , written , is the largest whole number which is a factor of both and     We will see in this section that there are a few ways to calculate this. For the first one, we simply write out all of the factors as shown in the next example.    Find by writing all factors of each number.    We can list all of the factors of both 24 and 60: and looking at the list, the largest common factor is 12. Therefore .    As the numbers get larger, this is an infeasible way to find the GCF. Instead, as shown in the next two examples, we can use prime factorizations.    Find the greatest common factor for each of the following by using prime factorization:     Calculate     Start with the prime factorizations. (Note: if you need to, use a factor tree to do these). and looking at the common prime factors. In each number there are two 2s and two 3s. So       Calculate     Again, write out the prime factorization: .  To find the GCF, we notice the largest number of prime factors that are common to both. This is one 2, one 3 and 2 fives or      It take a long time to find the prime factorization for large numbers, so below, we'll learn even another method for finding the GCF.    Find the solution to the problem in .    In this case, we are looking for . We can either write down all factors or the prime factorization. The latter is easier to do, so and the GCF is the product of the largest common prime factors or , so the number of boxes the baker can make is 16.      Least Common Multiple  Recall that to find the sum of two fractions, we need a common denominator. The reasons why and details are in , but consider   One way to to get a common denominator is to just multiply the denominators, however, it generally desirable to have a smaller one. A nice denominator is the least common multiple or LCM. In the example above the least common multiple of 18 and 12 is 36. For example:   Note: many people use the term least common denominator for the LCM because of this.    The Least Common Multiple of two nonzero whole numbers and , written is the smallest whole number (other than zero) that is a multiple of both and .      Find            by writing down enough multiples until the smallest one is found.       Write a few multiples of each:   and since the smallest common multiple is 36, .    And for    and you can see that 192 is the smallest multiple common to both, so .       There is a nice way to visualize the LCM using a number line. Consider . We need multiples of both numbers, which we can plot on a number line:      and the LCM will be the point on the number line where the hops first land on the same value.  Similar to the GCF, when the the numbers get larger, finding the LCM using this method is difficult and therefore, it's easy to miss the lowest common multiple. We will, like we did for the GCF, use the prime factorization to find the LCM. The following is an example.    Find     In this case, we will write the prime factorization of both   Note: to find these, you probably need to use a factor tree to find them.  A common multiple is to multiple all factors together, but the least one is the one in which the common factors are only written once:      Summary of GCF and LCM  We can summarize finding the LCM and GCF as follows.    Consider two whole numbers and that can be written as their prime factorization:      To find the GCF, find the smaller power of all common terms.    To find the LCM, find the larger power of all common terms and include all terms that are in each number and .      The following example shows this technique to find the LCM and GCF.    Find both the LCM and GCF of using this technique.    Use a factor tree, you can show that   The GCF is the smallest power of all common terms. Since only powers of are common then , the smaller power of 2.  The LCM is the larger power of all terms, making sure that all terms are included:        Euclid's Algorithm  What if we need to find ? Using the techniques above, we either 1) find all factors and then find the greatest common one or 2) find the prime factorization of each. In either case, this sounds ugly. Fortunately, there is another way called Euclid's Algorithm that isn't too difficult.    Euclid's Algorithm  If then .    What this allows us to do is to reduce the size of the problem. As written is the dividend, is the divisor and the remainder. Since is less than and is less than (why? Think Quotient-Remainder Theorem), the sizes of the number reduces when you do this.  To use Euclid's algorithm, we will find , the remainder of (or ). We then repeat. The following shows an example    Find the GCF using Euclid's Algorithm Find using Euclid's Algorithm:    First, show that (if you need to do long division on this, go ahead). Therefore,   Next, we will repeat and do , which is and no remainder. This shows that and the greatest common factor between 36 and 0 is 36. This shows that .    Let's look at another example.    Find     First find using long division:   Since    This shows that the original problem .      Relationship between LCM and GCF       First find using Euclid's Algorithm. Then use the above expression to find .    First, to find the remainder of , we'll use long division:   Since    Therefore,         Use the method of writing out all factors to find                    Use prime factorization to find                    Use the method of writing out enough factors to find     LCM(18,24)      LCM(20,45)       Use prime factorization to find     LCM(200,180)      LCM(144,180)       Use Euclid's method to find each of the following. Write out the steps carefully like in the examples above.                    Use Euclid's Algorithm and to find                    If is a prime number, then explain why for any number .      Two gears in a machine are aligned by a mark that is drawn from the center of the first gear to the center of the second gear. If there are 192 teeth on the first gear and 320 teeth on the second gear, how many revolutions of the first gear are needed to realign the mark.      The gymnastics club is having an event and they want to group all the participants neatly in rows. However, whether they try to use rows of 2, 3, 4, 5, 6, 7 or 8, there is always one gymnast left over. If there are fewer than 1000 gymnasts, how many are there? (Hint: what happens if one gymnast leaves the room, and use knowledge in this section.)     "
},
{
  "id": "sect-gcf-lcm-2",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-2",
  "type": "Objectives",
  "number": "6.4",
  "title": "",
  "body": "   Explain the Greatest Common Factor and be able to find values of it.    Explain the Least Common Multiple and be able to find values of it.    Understand the relationship between the Greatest Common Factor and the Least Common Multiple.    "
},
{
  "id": "ex-gcf-baker",
  "level": "2",
  "url": "sect-gcf-lcm.html#ex-gcf-baker",
  "type": "Example",
  "number": "6.4.1",
  "title": "",
  "body": "  A baker has 48 chocolate chip cookies and 64 sugar cookies. They want to pack them into identical boxes for a fundraiser so that every box has the exact same combination of cookies, and no cookies are left over. What is the maximum number of boxes they can make?   "
},
{
  "id": "sect-gcf-lcm-3-4",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-3-4",
  "type": "Example",
  "number": "6.4.2",
  "title": "",
  "body": "  A clockmaker is designing a mechanism for a custom clock using two interlocking gears:   Gear A (the smaller drive gear) has 15 teeth.    Gear B (the larger wheel gear) has 20 teeth.   The clockmaker marks one tooth on Gear A and one tooth on Gear B with a white dot. They mesh the gears together so that the two dotted teeth are touching perfectly at the starting point.   How many teeth on Gear A must pass the interlocking point before the two white dots touch each other again?    How many full rotations will Gear A have made when this happens?    How many full rotations will Gear B have made when this happens?      A model of the gear problem. Gear A (15 teeth) and Gear B (20 teeth) share identical tooth spacing and size, allowing them to mesh cleanly at the contact line.       "
},
{
  "id": "sect-gcf-lcm-4-3",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-4-3",
  "type": "Definition",
  "number": "6.4.4",
  "title": "",
  "body": "  The Greatest Common Factor of two whole numbers and , written , is the largest whole number which is a factor of both and    "
},
{
  "id": "sect-gcf-lcm-4-5",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-4-5",
  "type": "Example",
  "number": "6.4.5",
  "title": "",
  "body": "  Find by writing all factors of each number.    We can list all of the factors of both 24 and 60: and looking at the list, the largest common factor is 12. Therefore .   "
},
{
  "id": "sect-gcf-lcm-4-7",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-4-7",
  "type": "Example",
  "number": "6.4.6",
  "title": "",
  "body": "  Find the greatest common factor for each of the following by using prime factorization:     Calculate     Start with the prime factorizations. (Note: if you need to, use a factor tree to do these). and looking at the common prime factors. In each number there are two 2s and two 3s. So       Calculate     Again, write out the prime factorization: .  To find the GCF, we notice the largest number of prime factors that are common to both. This is one 2, one 3 and 2 fives or     "
},
{
  "id": "sect-gcf-lcm-4-9",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-4-9",
  "type": "Example",
  "number": "6.4.7",
  "title": "",
  "body": "  Find the solution to the problem in .    In this case, we are looking for . We can either write down all factors or the prime factorization. The latter is easier to do, so and the GCF is the product of the largest common prime factors or , so the number of boxes the baker can make is 16.   "
},
{
  "id": "sect-gcf-lcm-5-5",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-5-5",
  "type": "Definition",
  "number": "6.4.8",
  "title": "",
  "body": "  The Least Common Multiple of two nonzero whole numbers and , written is the smallest whole number (other than zero) that is a multiple of both and .   "
},
{
  "id": "sect-gcf-lcm-5-6",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-5-6",
  "type": "Example",
  "number": "6.4.9",
  "title": "",
  "body": "  Find            by writing down enough multiples until the smallest one is found.       Write a few multiples of each:   and since the smallest common multiple is 36, .    And for    and you can see that 192 is the smallest multiple common to both, so .      "
},
{
  "id": "sect-gcf-lcm-5-11",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-5-11",
  "type": "Example",
  "number": "6.4.10",
  "title": "",
  "body": "  Find     In this case, we will write the prime factorization of both   Note: to find these, you probably need to use a factor tree to find them.  A common multiple is to multiple all factors together, but the least one is the one in which the common factors are only written once:    "
},
{
  "id": "sect-gcf-lcm-5-12-3",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-5-12-3",
  "type": "Note",
  "number": "6.4.11",
  "title": ".",
  "body": "  Consider two whole numbers and that can be written as their prime factorization:      To find the GCF, find the smaller power of all common terms.    To find the LCM, find the larger power of all common terms and include all terms that are in each number and .     "
},
{
  "id": "sect-gcf-lcm-5-12-5",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-5-12-5",
  "type": "Example",
  "number": "6.4.12",
  "title": "",
  "body": "  Find both the LCM and GCF of using this technique.    Use a factor tree, you can show that   The GCF is the smallest power of all common terms. Since only powers of are common then , the smaller power of 2.  The LCM is the larger power of all terms, making sure that all terms are included:    "
},
{
  "id": "sect-gcf-lcm-6-3",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-6-3",
  "type": "Lemma",
  "number": "6.4.13",
  "title": "",
  "body": "  Euclid's Algorithm  If then .   "
},
{
  "id": "sect-gcf-lcm-6-6",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-6-6",
  "type": "Example",
  "number": "6.4.14",
  "title": "",
  "body": "  Find the GCF using Euclid's Algorithm Find using Euclid's Algorithm:    First, show that (if you need to do long division on this, go ahead). Therefore,   Next, we will repeat and do , which is and no remainder. This shows that and the greatest common factor between 36 and 0 is 36. This shows that .   "
},
{
  "id": "sect-gcf-lcm-6-8",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-6-8",
  "type": "Example",
  "number": "6.4.15",
  "title": "",
  "body": "  Find     First find using long division:   Since    This shows that the original problem .   "
},
{
  "id": "sect-gcf-lcm-7-3",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-7-3",
  "type": "Example",
  "number": "6.4.16",
  "title": "",
  "body": "  First find using Euclid's Algorithm. Then use the above expression to find .    First, to find the remainder of , we'll use long division:   Since    Therefore,    "
},
{
  "id": "exercises-gcf-lcm-1",
  "level": "2",
  "url": "sect-gcf-lcm.html#exercises-gcf-lcm-1",
  "type": "Exercise",
  "number": "6.4.5.1",
  "title": "",
  "body": "  Use the method of writing out all factors to find                 "
},
{
  "id": "exercises-gcf-lcm-2",
  "level": "2",
  "url": "sect-gcf-lcm.html#exercises-gcf-lcm-2",
  "type": "Exercise",
  "number": "6.4.5.2",
  "title": "",
  "body": "  Use prime factorization to find                 "
},
{
  "id": "exercises-gcf-lcm-3",
  "level": "2",
  "url": "sect-gcf-lcm.html#exercises-gcf-lcm-3",
  "type": "Exercise",
  "number": "6.4.5.3",
  "title": "",
  "body": "  Use the method of writing out enough factors to find     LCM(18,24)      LCM(20,45)    "
},
{
  "id": "exercises-gcf-lcm-4",
  "level": "2",
  "url": "sect-gcf-lcm.html#exercises-gcf-lcm-4",
  "type": "Exercise",
  "number": "6.4.5.4",
  "title": "",
  "body": "  Use prime factorization to find     LCM(200,180)      LCM(144,180)    "
},
{
  "id": "exercises-gcf-lcm-5",
  "level": "2",
  "url": "sect-gcf-lcm.html#exercises-gcf-lcm-5",
  "type": "Exercise",
  "number": "6.4.5.5",
  "title": "",
  "body": "  Use Euclid's method to find each of the following. Write out the steps carefully like in the examples above.                 "
},
{
  "id": "exercises-gcf-lcm-6",
  "level": "2",
  "url": "sect-gcf-lcm.html#exercises-gcf-lcm-6",
  "type": "Exercise",
  "number": "6.4.5.6",
  "title": "",
  "body": "  Use Euclid's Algorithm and to find                 "
},
{
  "id": "exercises-gcf-lcm-7",
  "level": "2",
  "url": "sect-gcf-lcm.html#exercises-gcf-lcm-7",
  "type": "Exercise",
  "number": "6.4.5.7",
  "title": "",
  "body": "  If is a prime number, then explain why for any number .   "
},
{
  "id": "exercises-gcf-lcm-8",
  "level": "2",
  "url": "sect-gcf-lcm.html#exercises-gcf-lcm-8",
  "type": "Exercise",
  "number": "6.4.5.8",
  "title": "",
  "body": "  Two gears in a machine are aligned by a mark that is drawn from the center of the first gear to the center of the second gear. If there are 192 teeth on the first gear and 320 teeth on the second gear, how many revolutions of the first gear are needed to realign the mark.   "
},
{
  "id": "exercises-gcf-lcm-9",
  "level": "2",
  "url": "sect-gcf-lcm.html#exercises-gcf-lcm-9",
  "type": "Exercise",
  "number": "6.4.5.9",
  "title": "",
  "body": "  The gymnastics club is having an event and they want to group all the participants neatly in rows. However, whether they try to use rows of 2, 3, 4, 5, 6, 7 or 8, there is always one gymnast left over. If there are fewer than 1000 gymnasts, how many are there? (Hint: what happens if one gymnast leaves the room, and use knowledge in this section.)   "
},
{
  "id": "sect-divisibility-proofs",
  "level": "1",
  "url": "sect-divisibility-proofs.html",
  "type": "Section",
  "number": "6.5",
  "title": "Prime Number and Divisibility Proofs",
  "body": " Prime Number and Divisibility Proofs   This section dives deeper into many of the proofs in this chapter.  This Chapter covers more properties of numbers, specifically integers. In many properties like the distributive and associative were seen. Technically, these are actually mathematical axioms or statements that we assume are true. We show that they hold true using diagrams, however there is no formal mathematical proof of these, but we assume them to hold.  This chapter is all about prime numbers and factoring whole numbers. And we will see in that these play an important role for understanding fractions. We also want to build some theorems based on these ideas. As a review, formal mathematics has some key components:     Axioms  When constructing an argument, we use a sequence of known facts to make those arguments. Many times, these are properties of arithmetic like the distributive and commutative properties. Other times these are other theorems or lemmas that have been proven.    Definitions  Because of the precise nature of mathematics, defining our terms is crucial. We all need to agree that we are thinking of the same things.    Theorems and Lemmas  A theorem (important result) or a lemma (minor result) allows us to make a general statement. It is proved using mathematical facts and logic.       The Divisibility Lemma  Recall that the take a number and splits it into the sum of two numbers to help determine if a number is divisible by another. The following is the proof of that lemma.   Proof of the Divisibility Lemma  First, we will show that if is divisible by , then is divisible by . We know that divides , so that means that can be written . Also, since divides , that can be written . We will see if divides .   This means that is divisible by .  Next, we will show that if is divisible by , then is divisible by . Since is divisible by , then means that can be written as for some whole number , where is larger than . Next, we want to show that is divisible by .  The number can be written as   since and are whole numbers with larger than , then is divisible by .     Divisibility Test Proofs  Next, we revisiting the divisibility tests of 3, 4, 9 and 11 that are stated in .   Proof of the Divisibility Test by 4  Let a whole number be written as   (why can it be written this way?) Since can be written as , it is divisible by 4. In addition, is divisible by 2 if and only if is divisible by 4. By the divisibility theorem, is divisible by 2 if and only if and are divisible by 4.    Proof of the Divisibility of a 3-digit number by 3 and 9  Let be a three-digit number and let it be written:   Write and or   The term is divisible by both 3 and 9. By the Divisibility lemma, is divisible by 3 (or 9) if and only if is divisible by 3 (or 9).    Proof of the divisibility test by 11  Consider a six-digit number (other sized numbers are similar), . Write as   Rewrite as follows: which can be written as   By the divisibility theorem, since the first two terms are divisible by 11, is divisible by 11 if and only if   is divisible by 11, which is the same as the statement of the theorem.     Prime Number Proofs    Every whole number is a multiple of a prime.      Let’s try this with . All of its factors are . We note that 2 is a prime factor (also 7 is). We will use this in the proof below.     List all of the factors of and call the smallest factor greater than . We will show that is prime and therefore is a multiple of a prime.  This will be shown by a technique called proof by contradiction. In short, we make an assumption that contradicts what we are trying to show, resulting in an absurd statement, thus the original statement must be correct.  Assume that is not prime. Then we can write , however both and , but this is not possible because is the smallest factor greater than 1, which contradicts the fact that is smallest factor.    (of the fundamental theorem of arithmetic)  By , write   where is prime. If , then is prime and the factors are and and this is the unique result.  If is not prime, then use to write   where is prime and thus   if , then the above is the prime factorization. If not, repeat these steps and write   with . Since the numbers are always decreasing, this process must end. Thus we can write   To prove that this is a unique factorization, we need a little more background and thus will see this in 5.5.     Of the Largest Factor Lemma  Let , where is prime by the Smallest Factor Lemma. The Since and therefore . Thus .     How many primes are there?    There are an infinite number of prime numbers.     Assume that there are a finite number of primes and let be the largest. Define the number to be   Since is not divisible by any prime between 2 and , it must also be prime and is obviously larger than , so there’s a contradiction. Since this violates the assumption that there are a finite number and is the largest, the result is that there must be an infinite number of primes.     Proof by Contradiction  The following steps shows the logic for proof by contradiction.     Either a statement or its negative is true, but not both.    Assume that the negative of a statement is true. Show how that assumption leads to a logical contradiction.    Since there is a contradiction, we conclude that the original assumption is incorrect, thus the original statement is true.     In the proof above,     We started with the original statement that we were trying to prove, “There is an infinite number of prime numbers.”    We assumed the negative of the statement: “There is a finite number of primes” and showed that this resulted in a prime larger than the largest of the finite number.    Since there is a contradiction, the original assumption that there is only a finite number of primes, leading to the result that there is an infinite number of primes.       The Greatest Common Factors and Lowest Common Multiples   (of Euclid’s Algorithm:) Assume that is a common factor of both and . Since , and , then also a common factor of . Let be the largest common factor of both then     "
},
{
  "id": "sect-divisibility-proofs-3-3",
  "level": "2",
  "url": "sect-divisibility-proofs.html#sect-divisibility-proofs-3-3",
  "type": "Proof",
  "number": "6.5.1.1",
  "title": "Proof of the Divisibility Lemma.",
  "body": " Proof of the Divisibility Lemma  First, we will show that if is divisible by , then is divisible by . We know that divides , so that means that can be written . Also, since divides , that can be written . We will see if divides .   This means that is divisible by .  Next, we will show that if is divisible by , then is divisible by . Since is divisible by , then means that can be written as for some whole number , where is larger than . Next, we want to show that is divisible by .  The number can be written as   since and are whole numbers with larger than , then is divisible by .  "
},
{
  "id": "sect-divisibility-proofs-4-3",
  "level": "2",
  "url": "sect-divisibility-proofs.html#sect-divisibility-proofs-4-3",
  "type": "Proof",
  "number": "6.5.2.1",
  "title": "Proof of the Divisibility Test by 4.",
  "body": " Proof of the Divisibility Test by 4  Let a whole number be written as   (why can it be written this way?) Since can be written as , it is divisible by 4. In addition, is divisible by 2 if and only if is divisible by 4. By the divisibility theorem, is divisible by 2 if and only if and are divisible by 4.  "
},
{
  "id": "sect-divisibility-proofs-4-4",
  "level": "2",
  "url": "sect-divisibility-proofs.html#sect-divisibility-proofs-4-4",
  "type": "Proof",
  "number": "6.5.2.2",
  "title": "Proof of the Divisibility of a 3-digit number by 3 and 9.",
  "body": " Proof of the Divisibility of a 3-digit number by 3 and 9  Let be a three-digit number and let it be written:   Write and or   The term is divisible by both 3 and 9. By the Divisibility lemma, is divisible by 3 (or 9) if and only if is divisible by 3 (or 9).  "
},
{
  "id": "sect-divisibility-proofs-4-5",
  "level": "2",
  "url": "sect-divisibility-proofs.html#sect-divisibility-proofs-4-5",
  "type": "Proof",
  "number": "6.5.2.3",
  "title": "Proof of the divisibility test by 11.",
  "body": " Proof of the divisibility test by 11  Consider a six-digit number (other sized numbers are similar), . Write as   Rewrite as follows: which can be written as   By the divisibility theorem, since the first two terms are divisible by 11, is divisible by 11 if and only if   is divisible by 11, which is the same as the statement of the theorem.  "
},
{
  "id": "lem-multiple-prime",
  "level": "2",
  "url": "sect-divisibility-proofs.html#lem-multiple-prime",
  "type": "Lemma",
  "number": "6.5.1",
  "title": "",
  "body": "  Every whole number is a multiple of a prime.   "
},
{
  "id": "sect-divisibility-proofs-5-3",
  "level": "2",
  "url": "sect-divisibility-proofs.html#sect-divisibility-proofs-5-3",
  "type": "Example",
  "number": "6.5.2",
  "title": "",
  "body": "  Let’s try this with . All of its factors are . We note that 2 is a prime factor (also 7 is). We will use this in the proof below.   "
},
{
  "id": "sect-divisibility-proofs-5-4",
  "level": "2",
  "url": "sect-divisibility-proofs.html#sect-divisibility-proofs-5-4",
  "type": "Proof",
  "number": "6.5.3.1",
  "title": "",
  "body": " List all of the factors of and call the smallest factor greater than . We will show that is prime and therefore is a multiple of a prime.  This will be shown by a technique called proof by contradiction. In short, we make an assumption that contradicts what we are trying to show, resulting in an absurd statement, thus the original statement must be correct.  Assume that is not prime. Then we can write , however both and , but this is not possible because is the smallest factor greater than 1, which contradicts the fact that is smallest factor.  "
},
{
  "id": "sect-divisibility-proofs-5-5",
  "level": "2",
  "url": "sect-divisibility-proofs.html#sect-divisibility-proofs-5-5",
  "type": "Proof",
  "number": "6.5.3.2",
  "title": "",
  "body": " (of the fundamental theorem of arithmetic)  By , write   where is prime. If , then is prime and the factors are and and this is the unique result.  If is not prime, then use to write   where is prime and thus   if , then the above is the prime factorization. If not, repeat these steps and write   with . Since the numbers are always decreasing, this process must end. Thus we can write   To prove that this is a unique factorization, we need a little more background and thus will see this in 5.5.  "
},
{
  "id": "sect-divisibility-proofs-5-7",
  "level": "2",
  "url": "sect-divisibility-proofs.html#sect-divisibility-proofs-5-7",
  "type": "Proof",
  "number": "6.5.3.3",
  "title": "Of the Largest Factor Lemma.",
  "body": " Of the Largest Factor Lemma  Let , where is prime by the Smallest Factor Lemma. The Since and therefore . Thus .  "
},
{
  "id": "sect-divisibility-proofs-6-2",
  "level": "2",
  "url": "sect-divisibility-proofs.html#sect-divisibility-proofs-6-2",
  "type": "Theorem",
  "number": "6.5.3",
  "title": "",
  "body": "  There are an infinite number of prime numbers.   "
},
{
  "id": "sect-divisibility-proofs-6-3",
  "level": "2",
  "url": "sect-divisibility-proofs.html#sect-divisibility-proofs-6-3",
  "type": "Proof",
  "number": "6.5.4.1",
  "title": "",
  "body": " Assume that there are a finite number of primes and let be the largest. Define the number to be   Since is not divisible by any prime between 2 and , it must also be prime and is obviously larger than , so there’s a contradiction. Since this violates the assumption that there are a finite number and is the largest, the result is that there must be an infinite number of primes.  "
},
{
  "id": "sect-divisibility-proofs-8-2",
  "level": "2",
  "url": "sect-divisibility-proofs.html#sect-divisibility-proofs-8-2",
  "type": "Proof",
  "number": "6.5.6.1",
  "title": "",
  "body": " (of Euclid’s Algorithm:) Assume that is a common factor of both and . Since , and , then also a common factor of . Let be the largest common factor of both then   "
},
{
  "id": "sect-fraction-basics",
  "level": "1",
  "url": "sect-fraction-basics.html",
  "type": "Section",
  "number": "7.1",
  "title": "Fraction Basics",
  "body": " Fraction Basics   Before we get into operations with fractions, there are some basics of fractions that we will study.    Fractions and Units  Until the abstract concept of a number is understood, it is always advantageous to think of a number with units (5 toys, 6 miles, 3 ounces) and with fractions this is no different. In fact, we will use units to emphasize the notion of a fraction. Consider 2\/3 of a foot. where is the number of parts one the whole (1 foot) and the numerator (2) is the number of the fractional parts.  If we have an understanding of a third, then is 2 ''thirds'' and we can handle it    Fraction Models  As with other numbers and operations in mathematics, models are very important in understanding fractions. Models then help with operations involving fractions.  One pitfall is that the models for fractions are often very similar to those of multiplication and division and so it is important to be very clear about what is being asked for.     Area or regional model  The following models are useful for describing fractions. The shaded area relative to the total area represents the fraction. In each case, the fraction is 3\/4.   Three area models. On the left is a circle cut into 4 equal pieces with 3 of the pieces shaded. The model in the middle is a box with 4 equally-spaced slices. Three of the slices are shaded. The rightmost model is a box with lines from opposite corners that divide the box into four equal sized pieces. Three of the slices are shaded.      Linear Measurement Model  This uses the number line. This is helpful for word problems with length or distance for example.   A number line with the numbers 0\/4, 1\/4, up to 5\/4 below the line and a box stretching from 0\/4 to 3\/4 above the line.      Set Model  A set model can be used as long as it is clear what is asked. In the following, if we have red and blue marbles and ask what fraction are red, you can see that the picture represents 3\/5. Be careful with this, because we often use the same model for either multiplication ( ) or division ( ).   An array of 20 circles with 4 rows and 5 columns. On the left is 4 by 3 array of circles shaded red and on the right is 4 by 2 circles shaded blue.         Ordering of Fractions     In counting by fractional units ( one-fourth, two-fourths, three-fourths,  ) they count both verbally and in writing.    In ordering (which in general is saved until later), we do two easier concepts:   Ordering with the same denominator. This shows that .   Two area models. On the left is a circular area model with 3 of 4 pieces shaded. On the right is a circular area model with 1 of 4 pieces shaded.      If you have the same numerator, then the fraction with the smaller denominator is larger. The model below shows that    Two area models with horizontal strips. The top model shows 2 of 5 shaded. The bottom model shows 2 of 7 shaded.      Using an intermediate fraction: Compare and . Since neither the numerators or denominators are equal, we can't use the above methods, but we know that and , so .          Fraction Equivalents  The next big understanding with fractions is to note that many different fractions represent the same value. For example can be written as .  The following two models represents in multiple ways:     A fractional strip:   Four area models that each represent the same number. Each are horizontal strips with a fraction of the strip shaded. The top model shows 2 of 3 strips shaded. The second model shows 4 or 6 strips shaded. The third model shows 6 of 9 strips shaded. The bottom model shows 8 of 12 strips shaded. All three show the same area.      A subdivided area (rectangular model):   A series of rectangles in which each has the bottom 2\/3 shaded with two shaded rectangles. The top rectangle shows 2\/3. The second rectangle has a line dividing the two boxes into 4. This is to denote 4\/6. The third rectangle has two lines dividing the original two boxes into 6 and this denotes 6\/9. The bottom rectangles has many vertical lines and labels n vertical boxes thus showing 2n\/3n.      Numbers: Once you understand the above pictures, you can fill in the missing values:      We summarize the results of the above models with the following:   Equivalent Fractions   Let and be positive whole numbers. Then     We will see that the two most important reasons for understanding equivalent fractions are   Finding a common denominator for addition and subtraction of fractions.    Reducing a fraction to a simpler form.     We will see the first item here in the next section of the text, But the following shows a few examples on how to reduce a fraction or shows that a fraction is in reduced form.   Fraction in Simple Form   A Fraction in Reduce or Simplest Form A fraction is in reduced form or simplest form if     This is a rule that can check if a fraction is in simplest form. If a fraction is not in reduced form and , then factoring out of the numerator and denominator will result in a fraction in reduced form.    Determine if the following fractions are in reduced form.          The prime factorization of 144 is and the prime factorization of 195 is . Since they have a common factor of 3, then , so this is not in reduced form.           In this case, since 53 is a prime number, then and this is in reduced form.     We now show some examples that if , how to reduce the fraction. That is if we have a fraction in the form that we reduce it to     Reduce the following fractions to simplest form:          In this case, the numerator and denominator are small, so noticing a common factor is where the fraction on the right is in simplest form because there is no other factor (other than 1) between 4 and 9.           As we saw in the example above, So we can write the original fraction as and there is a common value , so we write this as      We can also use equivalent fractions for the following problem in which we compare two fractions.   Comparing Fractions   Which of the following is larger: or ?    We saw above that it is relatively straightforward to determine which of two fractions is larger if the two denominators are the same or if the two numerators are the same. This example doesn't fit either of these. We'll use equivalent fractions to determine this.  We'll make the two denominators the same by multiplying the first by the factor and the second by  and now it is clear that the one with the larger numerator is the larger fraction so       Improper Fractions and Mixed Numbers  \"How much sliced cheese would you like,\" asks the person behind the deli counter? \"A pound and a quarter\" you say.  The fraction in the exchange above is a mixed number and often write it as and this is used in many situations. Below we define this as well as \"regular\" fractions which are either proper or improper.    Mixed Numbers, Improper and Proper Fractions If and are whole numbers, then   A mixed number is a fraction expressed as the sum of a whole number and a fraction.    An improper fraction is a fraction with .    A proper fraction is a fraction with .        Proper and Improper Fractions and Mixed Numbers      The number is a mixed number and is shorthand notation for .    The number is an improper fraction because the top is greater than the bottom.    The number is a proper fraction because the top is smaller than the bottom.        Converting between mixed numbers and improper fractions    Use an area model to convert to an improper fraction.    For this, we'll use circles, but other shapes work the same. Draw two full circles plus a third of another:      And each whole can be subdivided into 3 pieces to get      This shows that is equal to . This can be done arithmetically by , so       Use long division to write as a mixed number. Since , then        Teachers' Solutions  Word problems are key to understand fractions. We use fractions in common language and its helpful to show students how we use fractions in this context.  Any type of model that we have shown in this section can be used in a Teacher's Solution and it's easiest to see this with specific questions.    Produce a Teacher's Solution on the following problem: Jack drank of a carton of orange juice. His sister Sarah drank of the carton. How much of the carton did they drink altogether?     We can use any type of model, but an area model may be most helpful. We will use a rectangle one (since this looks like a carton) with vertical slices.      And the total area shaded is .  Jack and Sarah together drank of the carton of orange juice.      Produce a Teacher's Solution on the following problem: Derek had 9 bananas. He ate of them. How many bananas did he have left?     For this, let's use a set model since bananas are discrete (we can count them). We could use pictures of bananas, but students who are working with fractions have some abstract skills and we'll just use circles.      The bananas that he ate are shaded red and those he didn't each, are shaded blue.  He has 6 bananas left.    As word problems get more difficult, the needed diagrams get more difficult as well. The following shows an example of a two-step word problem.    Develop a Teacher's Solution to the following: Mrs. Murphy has a bowl of 300 marbles. of them are red and the rest are blue. She handed out of the red marbles. How many marbles are left in the bowl?     As stated above, this is a two-step word problem. One way to solve this is to first find the number of red and blue marbles, then determine the number handed out and from that, the number left can be determined. We can represent this with a two-step diagram as follows:      In the top diagram, because the fraction of marbles in the bowl is given in fifths, we divide the bar into 5 equal pieces. Each square in the top is marbles so there are two squares worth of red marbles or red marbles.  The second step is only in terms of the red marbles, so we use an arrow to denote that the red marbles in the top is the same as that in the bottom diagram. Because in the second step, there is , we divide the bottom diagram in 4 equal pieces. The 4 squares in the bottom diagram represents 120 marbles, so each square in the bottom diagram is marbles. The 3 shaded is marbles. and the red marbles left is one square or 30 marbles.  There were blue marbles in the diagram and together with the 30 red marbles, means there are marbles left in the bowl.    The last example was a bit more complicated and we'll see more like this later in the text. We will use this technique of dividing a bar into sections in other fraction problems as well as ratio and proportions in .      For each of the following fraction, show the given model      Using a horizontal strip.       using a area model with a circle.       using a set model shading in the way consistent with the fraction.       Use any type of model shown in this section to demonstrate the following inequalities.                    Explain using any type of model why       A student claims that cannot be equal to because while How do you respond?      Produce a Teacher's Solution for each of the following word problem. Use the requested type of model in the solution.     Javier used of a bottle of oil for a recipe, where the bottle holds . How much oil did the bottle hold? (Use an area model)       of all students in a class wore t-shirt on the field trip. If there were children on the field trip, how many wore t-shirts. (Use a measurement model).      Catherine had 12 donut holes. She gave of them to friends. How many donut holes did she give away. (use a set model.)      Teresa had 200 stickers. of the stickers had dinosaurs on them. If she gave away of her dinosaur stickers to Damian. How many stickers did she give away (two-step bar diagram.)      "
},
{
  "id": "prop-equivalent-fractions",
  "level": "2",
  "url": "sect-fraction-basics.html#prop-equivalent-fractions",
  "type": "Property",
  "number": "7.1.1",
  "title": "Equivalent Fractions.",
  "body": " Equivalent Fractions   Let and be positive whole numbers. Then    "
},
{
  "id": "sect-fraction-basics-6-9",
  "level": "2",
  "url": "sect-fraction-basics.html#sect-fraction-basics-6-9",
  "type": "Lemma",
  "number": "7.1.2",
  "title": "Fraction in Simple Form.",
  "body": " Fraction in Simple Form   A Fraction in Reduce or Simplest Form A fraction is in reduced form or simplest form if    "
},
{
  "id": "sect-fraction-basics-6-11",
  "level": "2",
  "url": "sect-fraction-basics.html#sect-fraction-basics-6-11",
  "type": "Example",
  "number": "7.1.3",
  "title": "",
  "body": "  Determine if the following fractions are in reduced form.          The prime factorization of 144 is and the prime factorization of 195 is . Since they have a common factor of 3, then , so this is not in reduced form.           In this case, since 53 is a prime number, then and this is in reduced form.    "
},
{
  "id": "sect-fraction-basics-6-13",
  "level": "2",
  "url": "sect-fraction-basics.html#sect-fraction-basics-6-13",
  "type": "Example",
  "number": "7.1.4",
  "title": "",
  "body": "  Reduce the following fractions to simplest form:          In this case, the numerator and denominator are small, so noticing a common factor is where the fraction on the right is in simplest form because there is no other factor (other than 1) between 4 and 9.           As we saw in the example above, So we can write the original fraction as and there is a common value , so we write this as     "
},
{
  "id": "sect-fraction-basics-6-15",
  "level": "2",
  "url": "sect-fraction-basics.html#sect-fraction-basics-6-15",
  "type": "Example",
  "number": "7.1.5",
  "title": "Comparing Fractions.",
  "body": " Comparing Fractions   Which of the following is larger: or ?    We saw above that it is relatively straightforward to determine which of two fractions is larger if the two denominators are the same or if the two numerators are the same. This example doesn't fit either of these. We'll use equivalent fractions to determine this.  We'll make the two denominators the same by multiplying the first by the factor and the second by  and now it is clear that the one with the larger numerator is the larger fraction so    "
},
{
  "id": "sect-fraction-basics-7-4",
  "level": "2",
  "url": "sect-fraction-basics.html#sect-fraction-basics-7-4",
  "type": "Definition",
  "number": "7.1.6",
  "title": "",
  "body": "  Mixed Numbers, Improper and Proper Fractions If and are whole numbers, then   A mixed number is a fraction expressed as the sum of a whole number and a fraction.    An improper fraction is a fraction with .    A proper fraction is a fraction with .      "
},
{
  "id": "sect-fraction-basics-7-5",
  "level": "2",
  "url": "sect-fraction-basics.html#sect-fraction-basics-7-5",
  "type": "Example",
  "number": "7.1.7",
  "title": "Proper and Improper Fractions and Mixed Numbers.",
  "body": " Proper and Improper Fractions and Mixed Numbers      The number is a mixed number and is shorthand notation for .    The number is an improper fraction because the top is greater than the bottom.    The number is a proper fraction because the top is smaller than the bottom.      "
},
{
  "id": "sect-fraction-basics-7-6-2",
  "level": "2",
  "url": "sect-fraction-basics.html#sect-fraction-basics-7-6-2",
  "type": "Example",
  "number": "7.1.8",
  "title": "",
  "body": "  Use an area model to convert to an improper fraction.    For this, we'll use circles, but other shapes work the same. Draw two full circles plus a third of another:      And each whole can be subdivided into 3 pieces to get      This shows that is equal to . This can be done arithmetically by , so    "
},
{
  "id": "sect-fraction-basics-7-6-3",
  "level": "2",
  "url": "sect-fraction-basics.html#sect-fraction-basics-7-6-3",
  "type": "Example",
  "number": "7.1.9",
  "title": "",
  "body": "  Use long division to write as a mixed number. Since , then    "
},
{
  "id": "subsec-teachers-solutions-4",
  "level": "2",
  "url": "sect-fraction-basics.html#subsec-teachers-solutions-4",
  "type": "Example",
  "number": "7.1.10",
  "title": "",
  "body": "  Produce a Teacher's Solution on the following problem: Jack drank of a carton of orange juice. His sister Sarah drank of the carton. How much of the carton did they drink altogether?     We can use any type of model, but an area model may be most helpful. We will use a rectangle one (since this looks like a carton) with vertical slices.      And the total area shaded is .  Jack and Sarah together drank of the carton of orange juice.   "
},
{
  "id": "subsec-teachers-solutions-5",
  "level": "2",
  "url": "sect-fraction-basics.html#subsec-teachers-solutions-5",
  "type": "Example",
  "number": "7.1.11",
  "title": "",
  "body": "  Produce a Teacher's Solution on the following problem: Derek had 9 bananas. He ate of them. How many bananas did he have left?     For this, let's use a set model since bananas are discrete (we can count them). We could use pictures of bananas, but students who are working with fractions have some abstract skills and we'll just use circles.      The bananas that he ate are shaded red and those he didn't each, are shaded blue.  He has 6 bananas left.   "
},
{
  "id": "subsec-teachers-solutions-7",
  "level": "2",
  "url": "sect-fraction-basics.html#subsec-teachers-solutions-7",
  "type": "Example",
  "number": "7.1.12",
  "title": "",
  "body": "  Develop a Teacher's Solution to the following: Mrs. Murphy has a bowl of 300 marbles. of them are red and the rest are blue. She handed out of the red marbles. How many marbles are left in the bowl?     As stated above, this is a two-step word problem. One way to solve this is to first find the number of red and blue marbles, then determine the number handed out and from that, the number left can be determined. We can represent this with a two-step diagram as follows:      In the top diagram, because the fraction of marbles in the bowl is given in fifths, we divide the bar into 5 equal pieces. Each square in the top is marbles so there are two squares worth of red marbles or red marbles.  The second step is only in terms of the red marbles, so we use an arrow to denote that the red marbles in the top is the same as that in the bottom diagram. Because in the second step, there is , we divide the bottom diagram in 4 equal pieces. The 4 squares in the bottom diagram represents 120 marbles, so each square in the bottom diagram is marbles. The 3 shaded is marbles. and the red marbles left is one square or 30 marbles.  There were blue marbles in the diagram and together with the 30 red marbles, means there are marbles left in the bowl.   "
},
{
  "id": "exercises-fraction-basics-1",
  "level": "2",
  "url": "sect-fraction-basics.html#exercises-fraction-basics-1",
  "type": "Exercise",
  "number": "7.1.7.1",
  "title": "",
  "body": "  For each of the following fraction, show the given model      Using a horizontal strip.       using a area model with a circle.       using a set model shading in the way consistent with the fraction.    "
},
{
  "id": "exercises-fraction-basics-2",
  "level": "2",
  "url": "sect-fraction-basics.html#exercises-fraction-basics-2",
  "type": "Exercise",
  "number": "7.1.7.2",
  "title": "",
  "body": "  Use any type of model shown in this section to demonstrate the following inequalities.                 "
},
{
  "id": "exercises-fraction-basics-3",
  "level": "2",
  "url": "sect-fraction-basics.html#exercises-fraction-basics-3",
  "type": "Exercise",
  "number": "7.1.7.3",
  "title": "",
  "body": "  Explain using any type of model why    "
},
{
  "id": "exercises-fraction-basics-4",
  "level": "2",
  "url": "sect-fraction-basics.html#exercises-fraction-basics-4",
  "type": "Exercise",
  "number": "7.1.7.4",
  "title": "",
  "body": "  A student claims that cannot be equal to because while How do you respond?   "
},
{
  "id": "exercises-fraction-basics-5",
  "level": "2",
  "url": "sect-fraction-basics.html#exercises-fraction-basics-5",
  "type": "Exercise",
  "number": "7.1.7.5",
  "title": "",
  "body": "  Produce a Teacher's Solution for each of the following word problem. Use the requested type of model in the solution.     Javier used of a bottle of oil for a recipe, where the bottle holds . How much oil did the bottle hold? (Use an area model)       of all students in a class wore t-shirt on the field trip. If there were children on the field trip, how many wore t-shirts. (Use a measurement model).      Catherine had 12 donut holes. She gave of them to friends. How many donut holes did she give away. (use a set model.)      Teresa had 200 stickers. of the stickers had dinosaurs on them. If she gave away of her dinosaur stickers to Damian. How many stickers did she give away (two-step bar diagram.)    "
},
{
  "id": "ch-fractions-4",
  "level": "1",
  "url": "ch-fractions-4.html",
  "type": "Section",
  "number": "7.2",
  "title": "Addition and Subtraction of Fractions",
  "body": " Addition and Subtraction of Fractions   Since clearly that fractions are numbers, we seek to perform the same operations that we did with whole numbers. We first start with addition and subtraction of fractions. This is done is two stages. The first stage shows and explains how to add and subtract with the same denominators and then it is moved onto the more-difficult addition and subtraction with unlike denominators.    Addition and Subtracting with same denominators  We move on to introducing addition and subtraction. We move from understanding that              as long as we are talking about keeping the unit consistent that       and that adding and subtracting fractions in a common unit is identical to whole number addition and subtraction with units. That is,   This leads to the following fraction rule with the same denominator.   Addition and Subtraction of Fractions with Like Denominators   Let and be positive whole numbers. Then      Models for Addition and Subtraction  Of course, when done correctly, models are important. For example, look at the model for    A circle area model divided into 4 equal parts. Two of the parts are shaded blue and one shaded red.     which clearly shows that the result is .    Word Problems    Bernie had a candy bar and gave his sister Flo of it to eat. He ate of it. How much was left?    We start with a diagram for this.   A bar diagram divided into 5 equal pieces. The first two are labeled with Bernie and one piece is labelled with Flo.    The amount that Bernie and Flo ate is 3 of the pieces with shows that of the candy bar. The remaining part is two pieces or .  So there is of the candy bar left.     The relationship between division and fractions    Partitive division example: If 8 kids share 3 pizzas equally, how much should each get?   We can solve this with area models and in this case, use circles. The three pizzas are   An image of three circles.    And each whole can be subdivided into 8 pieces to get   Three circles, each divided into 8 equal pieces.    And now we have (or 24 slices) of a pizza and each child would get slices or of a pizza.     Fraction-Division Equivalence   Let and be positive whole numbers, then.     This rule shows that division is the same as a fraction and this allows students to be able to solve fraction problems via division and division problems via ideas from fractions.    If 5 people equally share a 32 oz. soda, how much does each get?    Knowing this is a division problem and there are four possible answers to this:                          Which is the correct (or best) way to write the answer. The first is probably incorrect, because that would mean removing 2 ounces from the soda and then splitting the remaining 30 oz. This doesn't make too much sense, because we can divide 2 ounces of soda equally.  The 2nd answer, although more correct, is difficult to think of. How do you measure ounces?  The 3rd and fourth are good solutions to this. Each would depend on how to measure the ounces. Some measuring cup may list fractions of ounces as fractions and other may list them as decimals.       Adding Fractions with unlike Denominators  We know how to add fractions with like denominators using , however if they are the same, then we need to write them with the same denominator. In short, we will use to rewrite each fraction as necessary.  First, we will show with a model how this is done, then we will progress to using fraction rules in a more abstract way.    Find     If we produce a diagram with this as   Two bar diagrams. On top, the bar is divided into 5 equal pieces and 2 are shaded. On the bottom, the bar is divided into 3 equal pieces and 1 is shaded.    Since the denominators are not the same, the units are not the same, so we need to break up the top into another 5ths and the bottoms into thirds to get:   Two bar diagrams. On top, the bar is divided into 15 equal pieces and 6 are shaded. On the bottom, the bar is divided into 15 equal pieces and 5 is shaded.    and these are equivalent fractions and we can see that   Alternatively, we can divide the two fractions using the following subdivided area models for and respectively.    A subdivided area model with a grid of 3 squares tall by 5 squares wide. There are 2 wide and 3 high on the left that are shaded.     A subdivided area model with a grid of 3 squares tall by 5 squares wide. The bottom 1 high by 5 wide is shaded.     which we can combine to get:   A subdivided area model with a grid of 3 squares tall by 5 squares wide. There is the same 3 high by 2 wide shaded on the left and the 5 other squares rearranged and on the right.    The result shows that there are 11 shaded boxes out of 15, so the answer is .    Note that the shading and subdivision need to be in opposite directions.    Find using a rectangular grid.    First, we need to create a grid that shows fourths in one direction and thirds in the other, like:   A grid of squares that is 4 wide and 3 high.    and we will use a take-away model so put the minuend on the grid:   A grid of squares that is 4 wide and 3 high. The leftmost 3 high by 3 wide is shaded.    We need to remove (take-way) 2\/3 of the grid, so we rearrange the squares to get:   A grid of squares that is 4 wide and 3 high. The top left square is shaded and the bottom two rows (4 wide by 2 high) is also shaded.    and lastly we cross out 2\/3 of the grid like:   A grid of squares that is 4 wide and 3 high. The top left square is shaded and the bottom two rows (4 wide by 2 high) is also shaded.    There is only 1 shaded grid that isn't crossed out. This shows and this diagram shows       Algebraic Form for Adding\/Subtracting Fractions  The two examples above can be summarized as the rule for adding\/subtraction with unlike denominators. In short we need a common denominator and following shows how to achieve this for the previous two examples:   Addition with Unlike Denominators   Use equivalent fractions to find .   Not surprisingly, from the diagrams above, the common denominator is the product of the denominators or in this case . We can write So we can write:      Subtraction with Unlike Denominators   Use equivalent fractions to find .   Again, we find a common denominator which is just and find equivalent fractions with this denominator: which is the same that we found with the diagrams above.    This can be summarized as the following rule.   Adding and Subtracting Fractions with Unlike Denominators   Let and be positive whole numbers, then       Finding a Common Denominator  The above examples showed how to find a common denominator by just multiplying the two denominators. In many cases, we can find a simpler example.    Find     A straightforward way to do this is to just multiply to find the common denominator as above. In this case, and this is fine, but notice we probably need to use the algorithms to do although is reasonably done with mental math.   This result isn't in simplest form. You can further reduce the fraction using , but as we will see, often we can to better.      Using the Lowest Common Multiple to find a Common Denominator  Since a common denominator is a multiple of each of the two denominators, it is natural to think of using the least common multiple (LCM) for the common denominator. We'll do the previous example above first by noting that and and we repeat the same steps as above except with the common denominator 72 instead of 432.  So we can write and this is in simplest form because (and 41 is prime). We show another example in which we use subtraction and the LCM.    Find     First note that and we'll use this to find the lowest common multiple. and   And although this is correct, it is not in reduced form. Factoring out shows that   Some mental math was used to do some of the calculations above. If needed, you can use the algorithm instead to calculate and .      Adding and Subtracting Mixed Numbers  We finish up this section with the addition and subtraction of mixed numbers. Consider   First, let's look at this on a number line and use the counting up skill. Start at on the number line and count up until we reach .   A number line with ticks labeled from 0 to 6. In between each whole number, there are 2 equally-spaced ticks. Starting at 1 2\/3, a hop to the right is made to 2, then 3 hops of size 1, then a hop of size 1\/3 ending at 5 1\/3.    where we have first done a hop of , then 3 hops of size 1 and then a hop of size . The total amount counted up was .  Alternatively, we can represent these as area models. We first start with as the following.   Five circles and one third of a circle.    And as we have seen often the take-away interpretation is used for subtraction. We'll shade areas to be removed. We need to shade 1 full circle however, we need to break up one of the circles into 3 pieces to remove two. The following shows this.   Five circles and one third of a circle. The leftmost circle is shaded. The rightmost full circle is divided into 3 equal pieces with one shaded. The remaining one third of a circle is shaded.    and if the shaded areas are removed (from subtraction), what is left is .      Use long division to convert each of the following to a mixed number.                    Convert the following mixed numbers to an improper fraction                           Use Euclid's Algorithm to reduce (Hint: find )      Use Euclid's Algorithm to show that the fraction is in reduce form. (Hint: find )     "
},
{
  "id": "fraction-rule-addition-subtraction-like-denominators",
  "level": "2",
  "url": "ch-fractions-4.html#fraction-rule-addition-subtraction-like-denominators",
  "type": "Property",
  "number": "7.2.1",
  "title": "Addition and Subtraction of Fractions with Like Denominators.",
  "body": " Addition and Subtraction of Fractions with Like Denominators   Let and be positive whole numbers. Then    "
},
{
  "id": "ch-fractions-4-4-2",
  "level": "2",
  "url": "ch-fractions-4.html#ch-fractions-4-4-2",
  "type": "Example",
  "number": "7.2.2",
  "title": "",
  "body": "  Bernie had a candy bar and gave his sister Flo of it to eat. He ate of it. How much was left?    We start with a diagram for this.   A bar diagram divided into 5 equal pieces. The first two are labeled with Bernie and one piece is labelled with Flo.    The amount that Bernie and Flo ate is 3 of the pieces with shows that of the candy bar. The remaining part is two pieces or .  So there is of the candy bar left.   "
},
{
  "id": "ch-fractions-4-4-3-2",
  "level": "2",
  "url": "ch-fractions-4.html#ch-fractions-4-4-3-2",
  "type": "Example",
  "number": "7.2.3",
  "title": "",
  "body": "  Partitive division example: If 8 kids share 3 pizzas equally, how much should each get?   We can solve this with area models and in this case, use circles. The three pizzas are   An image of three circles.    And each whole can be subdivided into 8 pieces to get   Three circles, each divided into 8 equal pieces.    And now we have (or 24 slices) of a pizza and each child would get slices or of a pizza.   "
},
{
  "id": "prop-fraction-division-equivalence",
  "level": "2",
  "url": "ch-fractions-4.html#prop-fraction-division-equivalence",
  "type": "Property",
  "number": "7.2.4",
  "title": "Fraction-Division Equivalence.",
  "body": " Fraction-Division Equivalence   Let and be positive whole numbers, then.    "
},
{
  "id": "ch-fractions-4-4-3-5",
  "level": "2",
  "url": "ch-fractions-4.html#ch-fractions-4-4-3-5",
  "type": "Example",
  "number": "7.2.5",
  "title": "",
  "body": "  If 5 people equally share a 32 oz. soda, how much does each get?    Knowing this is a division problem and there are four possible answers to this:                          Which is the correct (or best) way to write the answer. The first is probably incorrect, because that would mean removing 2 ounces from the soda and then splitting the remaining 30 oz. This doesn't make too much sense, because we can divide 2 ounces of soda equally.  The 2nd answer, although more correct, is difficult to think of. How do you measure ounces?  The 3rd and fourth are good solutions to this. Each would depend on how to measure the ounces. Some measuring cup may list fractions of ounces as fractions and other may list them as decimals.   "
},
{
  "id": "ch-fractions-4-5-4",
  "level": "2",
  "url": "ch-fractions-4.html#ch-fractions-4-5-4",
  "type": "Example",
  "number": "7.2.6",
  "title": "",
  "body": "  Find     If we produce a diagram with this as   Two bar diagrams. On top, the bar is divided into 5 equal pieces and 2 are shaded. On the bottom, the bar is divided into 3 equal pieces and 1 is shaded.    Since the denominators are not the same, the units are not the same, so we need to break up the top into another 5ths and the bottoms into thirds to get:   Two bar diagrams. On top, the bar is divided into 15 equal pieces and 6 are shaded. On the bottom, the bar is divided into 15 equal pieces and 5 is shaded.    and these are equivalent fractions and we can see that   Alternatively, we can divide the two fractions using the following subdivided area models for and respectively.    A subdivided area model with a grid of 3 squares tall by 5 squares wide. There are 2 wide and 3 high on the left that are shaded.     A subdivided area model with a grid of 3 squares tall by 5 squares wide. The bottom 1 high by 5 wide is shaded.     which we can combine to get:   A subdivided area model with a grid of 3 squares tall by 5 squares wide. There is the same 3 high by 2 wide shaded on the left and the 5 other squares rearranged and on the right.    The result shows that there are 11 shaded boxes out of 15, so the answer is .   "
},
{
  "id": "ch-fractions-4-5-6",
  "level": "2",
  "url": "ch-fractions-4.html#ch-fractions-4-5-6",
  "type": "Example",
  "number": "7.2.7",
  "title": "",
  "body": "  Find using a rectangular grid.    First, we need to create a grid that shows fourths in one direction and thirds in the other, like:   A grid of squares that is 4 wide and 3 high.    and we will use a take-away model so put the minuend on the grid:   A grid of squares that is 4 wide and 3 high. The leftmost 3 high by 3 wide is shaded.    We need to remove (take-way) 2\/3 of the grid, so we rearrange the squares to get:   A grid of squares that is 4 wide and 3 high. The top left square is shaded and the bottom two rows (4 wide by 2 high) is also shaded.    and lastly we cross out 2\/3 of the grid like:   A grid of squares that is 4 wide and 3 high. The top left square is shaded and the bottom two rows (4 wide by 2 high) is also shaded.    There is only 1 shaded grid that isn't crossed out. This shows and this diagram shows    "
},
{
  "id": "ch-fractions-4-6-3",
  "level": "2",
  "url": "ch-fractions-4.html#ch-fractions-4-6-3",
  "type": "Example",
  "number": "7.2.8",
  "title": "Addition with Unlike Denominators.",
  "body": " Addition with Unlike Denominators   Use equivalent fractions to find .   Not surprisingly, from the diagrams above, the common denominator is the product of the denominators or in this case . We can write So we can write:    "
},
{
  "id": "ch-fractions-4-6-4",
  "level": "2",
  "url": "ch-fractions-4.html#ch-fractions-4-6-4",
  "type": "Example",
  "number": "7.2.9",
  "title": "Subtraction with Unlike Denominators.",
  "body": " Subtraction with Unlike Denominators   Use equivalent fractions to find .   Again, we find a common denominator which is just and find equivalent fractions with this denominator: which is the same that we found with the diagrams above.   "
},
{
  "id": "rule-fraction-addition-subtraction-unlike-denominators",
  "level": "2",
  "url": "ch-fractions-4.html#rule-fraction-addition-subtraction-unlike-denominators",
  "type": "Property",
  "number": "7.2.10",
  "title": "Adding and Subtracting Fractions with Unlike Denominators.",
  "body": " Adding and Subtracting Fractions with Unlike Denominators   Let and be positive whole numbers, then    "
},
{
  "id": "ch-fractions-4-7-3",
  "level": "2",
  "url": "ch-fractions-4.html#ch-fractions-4-7-3",
  "type": "Example",
  "number": "7.2.11",
  "title": "",
  "body": "  Find     A straightforward way to do this is to just multiply to find the common denominator as above. In this case, and this is fine, but notice we probably need to use the algorithms to do although is reasonably done with mental math.   This result isn't in simplest form. You can further reduce the fraction using , but as we will see, often we can to better.   "
},
{
  "id": "ch-fractions-4-8-4",
  "level": "2",
  "url": "ch-fractions-4.html#ch-fractions-4-8-4",
  "type": "Example",
  "number": "7.2.12",
  "title": "",
  "body": "  Find     First note that and we'll use this to find the lowest common multiple. and   And although this is correct, it is not in reduced form. Factoring out shows that   Some mental math was used to do some of the calculations above. If needed, you can use the algorithm instead to calculate and .   "
},
{
  "id": "exercises-adding-subtracting-fractions-1",
  "level": "2",
  "url": "ch-fractions-4.html#exercises-adding-subtracting-fractions-1",
  "type": "Exercise",
  "number": "7.2.8.1",
  "title": "",
  "body": "  Use long division to convert each of the following to a mixed number.                 "
},
{
  "id": "exercises-adding-subtracting-fractions-2",
  "level": "2",
  "url": "ch-fractions-4.html#exercises-adding-subtracting-fractions-2",
  "type": "Exercise",
  "number": "7.2.8.2",
  "title": "",
  "body": "  Convert the following mixed numbers to an improper fraction                        "
},
{
  "id": "exercises-adding-subtracting-fractions-3",
  "level": "2",
  "url": "ch-fractions-4.html#exercises-adding-subtracting-fractions-3",
  "type": "Exercise",
  "number": "7.2.8.3",
  "title": "",
  "body": "  Use Euclid's Algorithm to reduce (Hint: find )   "
},
{
  "id": "exercises-adding-subtracting-fractions-4",
  "level": "2",
  "url": "ch-fractions-4.html#exercises-adding-subtracting-fractions-4",
  "type": "Exercise",
  "number": "7.2.8.4",
  "title": "",
  "body": "  Use Euclid's Algorithm to show that the fraction is in reduce form. (Hint: find )   "
},
{
  "id": "sect-multiplication-fractions",
  "level": "1",
  "url": "sect-multiplication-fractions.html",
  "type": "Section",
  "number": "7.3",
  "title": "Multiplication of Fractions",
  "body": " Multiplication of Fractions   Multiplication of fractions is done, like much of mathematics in stages, building on what is known. We will first look at a whole numbers times a fraction, move to multiplication of proper fractions and last speak to multiplication of mixed numbers or improper fractions.  As we will see, diagrams will play a huge role, both grid and bar diagrams are generally the most helpful.    Multiplication of a whole number and a fraction  If we return to the interpretation of multiplication, is the number added to itself times. It can also be interpreted as groups of items each size and jumps on the number line of size . We can think of each of these interpretations. For example, consider .   A nice way to think about a whole number times a fraction is to use the number like to do the whole number of hops of size the fraction. Here's :   A number lines from 0 to 1 with fractions of 1\/5, 2\/5, 3\/5, 4\/5 as well. There are four hops shown from 0 up to 4\/5.    This shows that .    Fraction times a whole number  We can use a grid model to show multiplication, but you need to be careful with it. Consider . The fraction can be a unit where 1 of 5 parts is shaded. In the other direction the 4 can just be 4 units as shown below:   A grid diagram that is 5 units high by 4 wide. The horizontal is labelled as 4 units. The vertical side is labelled as 1 unit.    There are 4 shaded squares and note that a single square is , so this shows that .  This could also be interpreted as and noting that this would show that so the commutative property of integers also seems to hold for fractions as well.    Fraction times a fraction  Our next step in fractionland is a fraction times a fraction (we'll just consider proper fractions right now). As an example, let's look at and we'll interpret this as of . Let's think of this as a diagram like where we'll break up into 5 equal pieces and shade three of them:   A bar diagram with the bar of length 1 unit divided into 5 equal parts.    and the shaded area represents .  Since we seek to find of this, then we also break the unit into fourths in the other direction:   A grid diagram that is 4 squares high and 5 squares wide. The entire width is labelled 1 unit and the entire height is labelled 1 unit. One vertical square is labelled 1\/4 unit. One horizontal square is labelled 1\/5 unit. The left 4 high by 3 wide squares is shaded blue. Within that, the bottom 3 squares is shaded red.    and each box in the grid above is . The red shaded area represents the answer or . This shows that    Fraction Multiplication   Let and be positive whole numbers, then             Notice that a common denominator is not needed for multiplication, only for addition and subtraction.     Mixed number times mixed number  Similar to that of addition and subtraction, we can multiply mixed numbers. However, it is quite difficult to do so directly because of how a mixed number is interpreted. For example can be written as and you would have to apply the distributive properties. Instead, a much easier way to convert to improper numbers first as is shown in the next example.    Multiplying Mixed Numbers  Find     First, we can write and and then where the last step used equivalent fractions to reduce it.      Factoring Fractions and Canceling  The previous example performed some cancelling to reduce the answer. There are often two different ways to perform a multiplication for example we find using two different techniques.     No factoring   .  If you you need to reduce the fraction and generally that is the best, then at this step you'll need to note that     Reduce first  Instead, if we reduce the fraction before multiplying      Almost always, it's easier to perform reducing the fraction before multiplying. This is because the resulting number is smaller.    Word Problems  The following are two different word problems involving multiplication with fractions.    Develop a Teacher's solution of the following: Mrs. Baker had lb of sugar. She used of it in a recipe. How much sugar did she use?     The answer is of as this is most easily shown as the following bar diagram:   A bar diagram with 4 equal parts and 3 of them are shaded. Above the bar, there is a brace over the entire length labelled with \"2\/3 pound\". Below the bar there is a brace across the 3 shaded parts labelled with a ?.    The amount of sugar used is the product of and    Mrs. Baker used of a pound of sugar.        Perform the following multiplications. If there is a mixed number, then convert it to an improper fraction first.                                  For each of the following multiplications, find the product in reduce form. (Hint: reduce the fraction first before multiplying as shown in ).                    One common student error is to write Explain how the student arrived at his answer, and explain the correct answer using a rectangular grid model.      Develop Teacher's Solutions to the following multiplication word problems     Paul filled a bowl with 80 ounces of punch. If of the bowl was filled, find the capacity of the bowl.      Lucia made 40 cupcakes for a party. of the cupcakes were eaten. How many cupcakes were left?       of a class wore a t-shirt on a field trip.   What fraction of the students did not wear a t-shirt?    If 24 students wore a t-shirt, how many children are there altogether?    How many more students wore t-shirts than didn't?         "
},
{
  "id": "axiom-fraction-multiplication",
  "level": "2",
  "url": "sect-multiplication-fractions.html#axiom-fraction-multiplication",
  "type": "Property",
  "number": "7.3.1",
  "title": "Fraction Multiplication.",
  "body": " Fraction Multiplication   Let and be positive whole numbers, then    "
},
{
  "id": "sect-multiplication-fractions-5-9",
  "level": "2",
  "url": "sect-multiplication-fractions.html#sect-multiplication-fractions-5-9",
  "type": "Example",
  "number": "7.3.2",
  "title": "",
  "body": "      "
},
{
  "id": "sect-multiplication-fractions-5-10",
  "level": "2",
  "url": "sect-multiplication-fractions.html#sect-multiplication-fractions-5-10",
  "type": "Note",
  "number": "7.3.3",
  "title": "",
  "body": " Notice that a common denominator is not needed for multiplication, only for addition and subtraction.  "
},
{
  "id": "sect-multiplication-fractions-6-3",
  "level": "2",
  "url": "sect-multiplication-fractions.html#sect-multiplication-fractions-6-3",
  "type": "Example",
  "number": "7.3.4",
  "title": "",
  "body": "  Multiplying Mixed Numbers  Find     First, we can write and and then where the last step used equivalent fractions to reduce it.   "
},
{
  "id": "sect-multiplication-fractions-8-3",
  "level": "2",
  "url": "sect-multiplication-fractions.html#sect-multiplication-fractions-8-3",
  "type": "Example",
  "number": "7.3.5",
  "title": "",
  "body": "  Develop a Teacher's solution of the following: Mrs. Baker had lb of sugar. She used of it in a recipe. How much sugar did she use?     The answer is of as this is most easily shown as the following bar diagram:   A bar diagram with 4 equal parts and 3 of them are shaded. Above the bar, there is a brace over the entire length labelled with \"2\/3 pound\". Below the bar there is a brace across the 3 shaded parts labelled with a ?.    The amount of sugar used is the product of and    Mrs. Baker used of a pound of sugar.   "
},
{
  "id": "exercises-fraction-multiplication-1",
  "level": "2",
  "url": "sect-multiplication-fractions.html#exercises-fraction-multiplication-1",
  "type": "Exercise",
  "number": "7.3.7.1",
  "title": "",
  "body": "  Perform the following multiplications. If there is a mixed number, then convert it to an improper fraction first.                               "
},
{
  "id": "exercises-fraction-multiplication-2",
  "level": "2",
  "url": "sect-multiplication-fractions.html#exercises-fraction-multiplication-2",
  "type": "Exercise",
  "number": "7.3.7.2",
  "title": "",
  "body": "  For each of the following multiplications, find the product in reduce form. (Hint: reduce the fraction first before multiplying as shown in ).                 "
},
{
  "id": "exercises-fraction-multiplication-3",
  "level": "2",
  "url": "sect-multiplication-fractions.html#exercises-fraction-multiplication-3",
  "type": "Exercise",
  "number": "7.3.7.3",
  "title": "",
  "body": "  One common student error is to write Explain how the student arrived at his answer, and explain the correct answer using a rectangular grid model.   "
},
{
  "id": "exercises-fraction-multiplication-4",
  "level": "2",
  "url": "sect-multiplication-fractions.html#exercises-fraction-multiplication-4",
  "type": "Exercise",
  "number": "7.3.7.4",
  "title": "",
  "body": "  Develop Teacher's Solutions to the following multiplication word problems     Paul filled a bowl with 80 ounces of punch. If of the bowl was filled, find the capacity of the bowl.      Lucia made 40 cupcakes for a party. of the cupcakes were eaten. How many cupcakes were left?       of a class wore a t-shirt on a field trip.   What fraction of the students did not wear a t-shirt?    If 24 students wore a t-shirt, how many children are there altogether?    How many more students wore t-shirts than didn't?       "
},
{
  "id": "ch-fractions-6",
  "level": "1",
  "url": "ch-fractions-6.html",
  "type": "Section",
  "number": "7.4",
  "title": "Division of Fractions",
  "body": " Division of Fractions   Although dividing two fractions in proper or improper form is quite straightforward, division is difficult in terms of word problems. So we start with a reminder of the difference between partitive and measurement division.    Review of Partitive and Measurement Division     Measurement Division  If you know the size, and are determining the number of parts. 15 is how many of size 3?     Partitive Division  If you know the number of parts and are determining the size. 15 is 3 groups of what size?      Also remember that the following bar diagrams are very useful for these:     Measurement Division  This shows with measurement division interpretation.   A bar diagram with the length labelled 15. There are two squares to the right and the left part is labelled ...?... One of the square is denoted of length 3.      Partitive Division  This shows with a measurement division interpretation.   A bar diagram of 3 equal parts. The length of the bar is 15 and one square is labelled with a ?.        Partitive Word Problems  The following is a number of word problems that are partitive. Remember that the important part is that the divisor represents the number of parts.     Eddie has 15 marbles. He puts them equally in 3 bags. How many marbles are in each bag?    Sally has 3 pizzas. She gives each of 8 friends the same amount of pizza. How much pizza does each friend get?    The perimeter of a square flower bed is m. Find the length of each side in meters.    Steven drank 4\/5 of a carton of milk. If he drank 8 oz. of milk, how big was the carton? 4\/5 of what is 8 oz.?        Measurement Word Problems  The following is a number of word problems that are measurement. Remember that the important part is that the divisor represents the size of each part.     Elizabeth has 15 cookies. She gives each of her friends 3 cookies. How many friends does she give cookies?    Matthew has a rope that is 8 meters long. He cuts a piece of it off that is 3 meters long. How much of the rope did he cut?    5 is 3\/4 of what number?    Tallulah rode her bike to her Grandmother's house. She stopped 3 miles along the way and was 3\/4 of the way to her Grandmother's house. When she got to the house, how far did she ride?    Mr. Taylor is building a fence. Each board is 5\/6 of foot. How many boards does he need to build a fence that is 13 1\/3 feet long?    A rope of length feet is cut into pieces of length of a foot. How many pieces of rope were there?        Drawing a Partitive Division Diagram  Draw a diagram for 7 is of what size?      This can be interpreted as .    We are looking for a bar of some length:   A bar diagram with length labelled with a ?      Shade in of the bar:   A bar diagram of 4 equal parts and 3 are shaded. The length is labelled with a ?      The problem says 7 is of what size? That is we label the shaded area.   A bar diagram of 4 equal parts and 3 are shaded. The length is labelled with a ?. The length of shaded parts is labelled with a 7.      To finish the problem, each segment is length . Thus, the total length is 4 times this or      Let's take a look at an example.    Draw a diagram for 6 is of what size?      Again, this is a diagram for .    This time, the unknown is smaller than 6:   A bar diagram of 5 equal parts and all are shaded. The length is labelled with a 6. The length of shaded parts is labelled with a ?.      And the entire bar is shaded.    Since there are 5 units, each unit is in length and we are looking for 4 of these so        This is most complicated (both mechanically and conceptually) of the four operations involving fractions.  Recall that the definition of two numbers if The number is the divisor, is the dividend, and is the quotient.    Dividing a whole number by a whole number  Although a problem like is relatively easy, what happens if the dividend is not a multiple of the divisor? The following example uses visuals to explain.    Eight children share 3 pizzas equally. How much pizza does each child get?   This is a partitive division problem and the result is . We saw this with the diagram:   A digram with 3 circles.    And each whole can be subdivided into 8 pieces to get   A diagram with 3 circles, each are divided into 8 equal pieces.    So each child gets of a pizza.      Dividing a fraction by a whole number    Three-fourths of a pizza is divided equally between 6 people. What fraction of a pizza does each person get?    Let's start with a diagram and since we're using pizzas, we will use a circular area diagram. Divide into 4 area and shade 3 of them.   A circle is divided into 4 equal pieces and 3 of them are shaded. A second circle with the same shading and the shaded area is divided into 8 equal pieces.    and since the shaded area is now divided into 6 equally-sized pieces, then each person receives of the pizza. So       Show using an bar diagram    We first start representing 2\/3 as shading 2 of 3 parts of a bar diagram. Then each area is divided into 5 equal pieces.   A bar diagram with 3 equal parts and 2 are shaded. A second bar diagram with 3 equal parts and 2 are shaded and each part is divided into 5 equal pieces. Each bar diagram has length 1 unit.    The result shows      Show using a rectangular grid model.    First, let's produce a diagram that shows .   A bar diagram with 3 equal parts and 2 are shaded. This is shown with the bar vertical. The full height is labeled \"1 unit\".    If we then subdivide by 5 vertically to get:   The diagram from above subdivided vertically as well. The diagram is a 3 high by 5 wide grid with the two squares in the left column (bottom 2) shaded red and the remaining 4 columns in the bottom two row shaded blue.    where the light red shows the result and the fraction shaded is .      Dividing a whole number by a fraction  The next step to understanding fraction division is dividing a whole number by a fraction. Consider . This can be represented by the following diagram showing the measurement interpretation.   A bar diagram denoted length 4 and showing a few subdivided squares and the remaining with a ...?... One of the squares is labelled with length 1\/2.    Another interpretation of this is with the following word problem.    Joey cut four cookies in half. How many halves did he have?    The following area model shows this:   A diagram with 4 circles and each circle cut vertically into 2 equal halves.    and you can see 8 halves from the diagram so       Dividing a fraction by a fraction  The last stage in fraction division is dividing a fraction by a fraction. Let's look at the following example:    A stick of length of a meter, stretches of the way across a table. How wide is the table?    Imagine laying the stick on top of the table. This situation can be seen in this diagram:   A bar diagram with 5 equal parts. The length is labelled with a ? and two of the parts is labelled with length 1\/4.    In this case, we can see that one unit would be . Therefore the entire length is , so the table width is of a meter.   Alternative Solution       of the table width is of a meter. Divide by 2:     of the table width if of a meter. Multiply by 5:    1 of the table width is of a meter.      Prealgebra Solution   Let be the width of the table, then       Find .    Let's first assume that this a measurement interpretation. The we can create a diagram that shows the total length (10\/3 or the dividend) and the length of the part (2\/3 or the divisor)   A bar diagram with a few equal parts shown and ...?... on the rest. The total length is 10\/3 and one of the parts is 2\/3.    From this diagram, it would take 5 units to make the length of , so the answer is 5.  If instead, we do partitive division, then this can be interpreted as is of what size?    A bar diagram with 3 equal parts. The length is labelled with a ? and two of the parts is labelled with length 10\/3.    From this diagram, 2 units have length so 1 unit is . To get one full length is 3 units or , the same answer as above.      Fraction Division Rule  The last arithmetic operation we have not seen as a rule is that of division.   Fraction Division        This rule can actually be used for any division of fractions and notice that there are two interpretations. The one on the left results in another division, the one on the right is a fraction. Either is correct and which to use often depends on the context.   Picture Proof of the Fraction Division Rule  We can interpret using a measurement division. That is, let be divided into pieces of size . The total number of pieces is .   A bar diagram with a few equal parts shown and ...?... on the rest. The total length is a\/b and one of the parts is c\/b.    If we rescaled the picture, to a total length of and piece size , the number of pieces is the same. That is, the number of pieces is .   A bar diagram with a few equal parts shown and ...?... on the rest. The total length is a and one of the parts is c.    Since the number of parts is the same in both pictures, then .     Use to evaluate the following division problems:          Using the Fraction Division property and note that this is the same as .           Note that to use , a common denominator must be found. This is and we write both and with a denominator of 12. Since and , where we have used the fraction version of division in this case since 2 does not divide 9.     We will see a more general division rule below, but first some other terminology.    The reciprocal of a fraction is the fraction found by switching the numerator and denominator. It is also called the inverse of the fraction.         The reciprocal of is     The reciprocal of is     The reciprocal of is .       The next property uses a different format of fraction division and is more general than because a common denominator does not need to be found.   Fraction Division: Invert and Multiply   Let and be positive whole numbers,      Explaining the Invert and Multiply Rule  Why does this work? We use a particular example with partitive interpretation, measurement interpretation and some prealgebra to help explain this property.     Partitive Interpretation  Consider the problem 12 is of what number which is the operation .   A bar diagram with three equal parts and the total length is labelled ?. Two of the parts have length 12.    Since two parts is 12, then one part is 6. The total length is three parts or . This means that can be found by first multiplying by , then multiplying by 3 or     Measurement Interpretation  How many units of size is 12. Counting in thirds, is 36 thirds, so how many units of size is 36. The answer is 18.   A bar length with 18 equal parts. The entire length is labelled 12. One part is labelled 2\/3.    This is the same as changing units:   A bar length with 18 equal parts. The entire length is labelled 36. One part is labelled 2.    In both cases, we have shown that     Prealgebra  Recall that the division problem can be thought of as times something equals 12 or         Word Problem for Measurement Division    Develop a word problem for .       Interpret this as is how many pieces of length ?    Diagram   A bar diagram with a few equal parts shown and ...?... on the rest. The total length is 36 3\/4 and one of the parts is 1 3\/4.      The answer is     Choose a unit. (inches) So we're dividing up something of length into pieces of length . Licorice string.     A long piece of licorice is inches long. If it is divided up into pieces that are inches long, how many pieces are there?          Word Problem for Partitive Division    Develop a word problem for        We can often this of these problems as 60 is of what number?    A diagram for this is:   A bar of with 5 equal sized parts. 4 of the parts are shaded and the shaded parts have length 60. The entire bar is denoted ?.      And the answer is     Although money is a good use for these problems, let's use boys and girls for the two fractions of things.    Problem: 60 boys attended a summer camp and of the campers are boys. How many children were there?          Develop a two-step fraction word problem based on the following diagram:   A stacked bar diagram. The top diagram has 5 equal parts and is shaded red and label at the \"red\" diagram. The bottom diagram has two equal parts, in which each part is the same length as a part in the top diagram. along the left side, there is a brace covering both bars and there is a ?. The difference in the length has a brace that is labelled as 30.      This shows that of the total things (let's say t-shirts) are blue and the rest are red. This also shows there are 30 more red t-shirts than blue ones. The following is a good problem:    of a stack of t-shirts are blue. The rest are red. If there are 30 more red t-shirts, how many t-shirts are there altogether?       2-step fraction word problems  A 2-step word problem with fractions can be difficult. Here is a couple of examples with these. Note: in both of these examples we use a unitary method, however, the unit can change.   2-step Teacher's Solution   Develop a Teacher's solution of this problem: 3\/5 of Sollie's marble collection are blue. She gave 3\/4 of her blue marbles to her sister which is 45 marbles. How many marbles did Sollie start with?     We first start with showing a bar diagram with 3\/5 (which represents the blue marbles).   A stacked bar diagram. The top diagram has 5 equal parts. Three of them are shaded blue and the total length is labelled ?. There is a arrow from the three shaded parts to a second bar diagram with four equal parts and three of them are shaded green. The three parts shaded green have a brace denoting they contain 45.    To solve this, we use the unitary method keeping track of the top and bottom units are different:     Bottom Diagram       Top Diagram  Since the full bar on the bottom is identical to 3 units on the top bar then:   So the top bar is 100.     Sollie had 100 marbles to start with.      Develop a Teacher's Solution of the following problem. A roomful of people watched a chess match between Angela and Bryce. 4\/11 of the spectators favored Angela and the rest favored Bryce. If 12 more people favored Bryce over Angela, how many spectators were in the room?      A stacked bar diagram. The top diagram is labelled Angela and has 4 equal parts. The bottom diagram is labelled Bryce and has 7 equal parts. The size of each part for both diagrams are the same. The difference in length between the two diagrams is labelled 12. There is a brace covering both braces on the right and is labelled with a ?.    The three squares that differ between the lengths are 12. We now use the unitary method to solve this:   There are 44 spectators in the room.        Use to find the following division problems                    Use to find the following fraction division problems. Write the result in reduced form. (Hint: for (d) rewrite the mixed number as an improper fraction.)                                  Illustrate the following division problems with a bar diagram and solve the problem.     Measurement division for       Measurement division for       Partitive division for       Partitive division for        Develop Teacher's Solutions for each of the following word problems.     A string of length m is cut into 2 equal pieces. What is the length of each piece?       of the money collected at a garage sale was divided early among 4 clubs. What fractions did each club receive?      6 packets of cookies weigh kg. Find the weight of 1 packet of cookies.      Sara poured quarts of fruit juice equally into 4 cups. How much fruit juice was there in each cup?      The perimeter of a square flower bed is m. Find the length of each side in meters.       Make up short word problems for each of the following type specified.     measurement division for       partitive division for       measurement division for       partitive division for       partitive division for        Make up a 2-step fraction word problem such that the bar diagram in the Teacher's Solution is the following:       A stacked bar diagram with the top labelled \"women\" with 5 equal parts and the bottom labelled \"Men\" with two equal parts. The difference in lengths of the two bars is labelled 72 and there is a brace on the right side covering both bars labelled ?.          A two-step bar diagram. The top diagram has 3 equal parts and the total length is labelled 450 with the first part shaded red. The latter two parts have a arrow down to a bar with the same length as the two parts. The lower bar has 5 equal parts with the first two part shaded and the last three parts with a ? underneath.           A staked bar diagram with the top bar labelled \"Shirt\" and has two equal parts, the first part shaded purple. The bottom bar labelled hat as three equal parts with the first part shaded orange. Below these is a bar diagram with 6 equal parts. The first three are shaded purple and the next two are labelled orange. The first 5 have a brace with label \"$30\" and the last part is labeled with ?        "
},
{
  "id": "ch-fractions-6-3-5",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-3-5",
  "type": "Note",
  "number": "7.4.1",
  "title": "Partitive Word Problems.",
  "body": " Partitive Word Problems  The following is a number of word problems that are partitive. Remember that the important part is that the divisor represents the number of parts.     Eddie has 15 marbles. He puts them equally in 3 bags. How many marbles are in each bag?    Sally has 3 pizzas. She gives each of 8 friends the same amount of pizza. How much pizza does each friend get?    The perimeter of a square flower bed is m. Find the length of each side in meters.    Steven drank 4\/5 of a carton of milk. If he drank 8 oz. of milk, how big was the carton? 4\/5 of what is 8 oz.?      "
},
{
  "id": "ch-fractions-6-3-6",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-3-6",
  "type": "Note",
  "number": "7.4.2",
  "title": "Measurement Word Problems.",
  "body": " Measurement Word Problems  The following is a number of word problems that are measurement. Remember that the important part is that the divisor represents the size of each part.     Elizabeth has 15 cookies. She gives each of her friends 3 cookies. How many friends does she give cookies?    Matthew has a rope that is 8 meters long. He cuts a piece of it off that is 3 meters long. How much of the rope did he cut?    5 is 3\/4 of what number?    Tallulah rode her bike to her Grandmother's house. She stopped 3 miles along the way and was 3\/4 of the way to her Grandmother's house. When she got to the house, how far did she ride?    Mr. Taylor is building a fence. Each board is 5\/6 of foot. How many boards does he need to build a fence that is 13 1\/3 feet long?    A rope of length feet is cut into pieces of length of a foot. How many pieces of rope were there?     "
},
{
  "id": "ch-fractions-6-4-5",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-4-5",
  "type": "Example",
  "number": "7.4.3",
  "title": "",
  "body": "  Draw a diagram for 6 is of what size?      Again, this is a diagram for .    This time, the unknown is smaller than 6:   A bar diagram of 5 equal parts and all are shaded. The length is labelled with a 6. The length of shaded parts is labelled with a ?.      And the entire bar is shaded.    Since there are 5 units, each unit is in length and we are looking for 4 of these so       "
},
{
  "id": "ch-fractions-6-5-3",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-5-3",
  "type": "Example",
  "number": "7.4.4",
  "title": "",
  "body": "  Eight children share 3 pizzas equally. How much pizza does each child get?   This is a partitive division problem and the result is . We saw this with the diagram:   A digram with 3 circles.    And each whole can be subdivided into 8 pieces to get   A diagram with 3 circles, each are divided into 8 equal pieces.    So each child gets of a pizza.   "
},
{
  "id": "ch-fractions-6-6-2",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-6-2",
  "type": "Example",
  "number": "7.4.5",
  "title": "",
  "body": "  Three-fourths of a pizza is divided equally between 6 people. What fraction of a pizza does each person get?    Let's start with a diagram and since we're using pizzas, we will use a circular area diagram. Divide into 4 area and shade 3 of them.   A circle is divided into 4 equal pieces and 3 of them are shaded. A second circle with the same shading and the shaded area is divided into 8 equal pieces.    and since the shaded area is now divided into 6 equally-sized pieces, then each person receives of the pizza. So    "
},
{
  "id": "ch-fractions-6-6-3",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-6-3",
  "type": "Example",
  "number": "7.4.6",
  "title": "",
  "body": "  Show using an bar diagram    We first start representing 2\/3 as shading 2 of 3 parts of a bar diagram. Then each area is divided into 5 equal pieces.   A bar diagram with 3 equal parts and 2 are shaded. A second bar diagram with 3 equal parts and 2 are shaded and each part is divided into 5 equal pieces. Each bar diagram has length 1 unit.    The result shows   "
},
{
  "id": "ch-fractions-6-6-4",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-6-4",
  "type": "Example",
  "number": "7.4.7",
  "title": "",
  "body": "  Show using a rectangular grid model.    First, let's produce a diagram that shows .   A bar diagram with 3 equal parts and 2 are shaded. This is shown with the bar vertical. The full height is labeled \"1 unit\".    If we then subdivide by 5 vertically to get:   The diagram from above subdivided vertically as well. The diagram is a 3 high by 5 wide grid with the two squares in the left column (bottom 2) shaded red and the remaining 4 columns in the bottom two row shaded blue.    where the light red shows the result and the fraction shaded is .   "
},
{
  "id": "ch-fractions-6-7-5",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-7-5",
  "type": "Example",
  "number": "7.4.8",
  "title": "",
  "body": "  Joey cut four cookies in half. How many halves did he have?    The following area model shows this:   A diagram with 4 circles and each circle cut vertically into 2 equal halves.    and you can see 8 halves from the diagram so    "
},
{
  "id": "ch-fractions-6-8-3",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-8-3",
  "type": "Example",
  "number": "7.4.9",
  "title": "",
  "body": "  A stick of length of a meter, stretches of the way across a table. How wide is the table?    Imagine laying the stick on top of the table. This situation can be seen in this diagram:   A bar diagram with 5 equal parts. The length is labelled with a ? and two of the parts is labelled with length 1\/4.    In this case, we can see that one unit would be . Therefore the entire length is , so the table width is of a meter.   Alternative Solution       of the table width is of a meter. Divide by 2:     of the table width if of a meter. Multiply by 5:    1 of the table width is of a meter.      Prealgebra Solution   Let be the width of the table, then    "
},
{
  "id": "ex-fraction-division",
  "level": "2",
  "url": "ch-fractions-6.html#ex-fraction-division",
  "type": "Example",
  "number": "7.4.10",
  "title": "",
  "body": "  Find .    Let's first assume that this a measurement interpretation. The we can create a diagram that shows the total length (10\/3 or the dividend) and the length of the part (2\/3 or the divisor)   A bar diagram with a few equal parts shown and ...?... on the rest. The total length is 10\/3 and one of the parts is 2\/3.    From this diagram, it would take 5 units to make the length of , so the answer is 5.  If instead, we do partitive division, then this can be interpreted as is of what size?    A bar diagram with 3 equal parts. The length is labelled with a ? and two of the parts is labelled with length 10\/3.    From this diagram, 2 units have length so 1 unit is . To get one full length is 3 units or , the same answer as above.   "
},
{
  "id": "prop-fraction-division",
  "level": "2",
  "url": "ch-fractions-6.html#prop-fraction-division",
  "type": "Property",
  "number": "7.4.11",
  "title": "Fraction Division.",
  "body": " Fraction Division       "
},
{
  "id": "ch-fractions-6-9-5",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-9-5",
  "type": "Proof",
  "number": "7.4.7.1",
  "title": "Picture Proof of the Fraction Division Rule.",
  "body": " Picture Proof of the Fraction Division Rule  We can interpret using a measurement division. That is, let be divided into pieces of size . The total number of pieces is .   A bar diagram with a few equal parts shown and ...?... on the rest. The total length is a\/b and one of the parts is c\/b.    If we rescaled the picture, to a total length of and piece size , the number of pieces is the same. That is, the number of pieces is .   A bar diagram with a few equal parts shown and ...?... on the rest. The total length is a and one of the parts is c.    Since the number of parts is the same in both pictures, then .  "
},
{
  "id": "ch-fractions-6-9-6",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-9-6",
  "type": "Example",
  "number": "7.4.12",
  "title": "",
  "body": "  Use to evaluate the following division problems:          Using the Fraction Division property and note that this is the same as .           Note that to use , a common denominator must be found. This is and we write both and with a denominator of 12. Since and , where we have used the fraction version of division in this case since 2 does not divide 9.    "
},
{
  "id": "ch-fractions-6-9-8",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-9-8",
  "type": "Definition",
  "number": "7.4.13",
  "title": "",
  "body": "  The reciprocal of a fraction is the fraction found by switching the numerator and denominator. It is also called the inverse of the fraction.   "
},
{
  "id": "ch-fractions-6-9-9",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-9-9",
  "type": "Example",
  "number": "7.4.14",
  "title": "",
  "body": "     The reciprocal of is     The reciprocal of is     The reciprocal of is .      "
},
{
  "id": "prop-invert-multiply",
  "level": "2",
  "url": "ch-fractions-6.html#prop-invert-multiply",
  "type": "Property",
  "number": "7.4.15",
  "title": "Fraction Division: Invert and Multiply.",
  "body": " Fraction Division: Invert and Multiply   Let and be positive whole numbers,    "
},
{
  "id": "ch-fractions-6-10-2",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-10-2",
  "type": "Example",
  "number": "7.4.16",
  "title": "",
  "body": "  Develop a word problem for .       Interpret this as is how many pieces of length ?    Diagram   A bar diagram with a few equal parts shown and ...?... on the rest. The total length is 36 3\/4 and one of the parts is 1 3\/4.      The answer is     Choose a unit. (inches) So we're dividing up something of length into pieces of length . Licorice string.     A long piece of licorice is inches long. If it is divided up into pieces that are inches long, how many pieces are there?       "
},
{
  "id": "ch-fractions-6-11-2",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-11-2",
  "type": "Example",
  "number": "7.4.17",
  "title": "",
  "body": "  Develop a word problem for        We can often this of these problems as 60 is of what number?    A diagram for this is:   A bar of with 5 equal sized parts. 4 of the parts are shaded and the shaded parts have length 60. The entire bar is denoted ?.      And the answer is     Although money is a good use for these problems, let's use boys and girls for the two fractions of things.    Problem: 60 boys attended a summer camp and of the campers are boys. How many children were there?       "
},
{
  "id": "ch-fractions-6-11-3",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-11-3",
  "type": "Example",
  "number": "7.4.18",
  "title": "",
  "body": "  Develop a two-step fraction word problem based on the following diagram:   A stacked bar diagram. The top diagram has 5 equal parts and is shaded red and label at the \"red\" diagram. The bottom diagram has two equal parts, in which each part is the same length as a part in the top diagram. along the left side, there is a brace covering both bars and there is a ?. The difference in the length has a brace that is labelled as 30.      This shows that of the total things (let's say t-shirts) are blue and the rest are red. This also shows there are 30 more red t-shirts than blue ones. The following is a good problem:    of a stack of t-shirts are blue. The rest are red. If there are 30 more red t-shirts, how many t-shirts are there altogether?    "
},
{
  "id": "ch-fractions-6-12-3",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-12-3",
  "type": "Example",
  "number": "7.4.19",
  "title": "2-step Teacher’s Solution.",
  "body": " 2-step Teacher's Solution   Develop a Teacher's solution of this problem: 3\/5 of Sollie's marble collection are blue. She gave 3\/4 of her blue marbles to her sister which is 45 marbles. How many marbles did Sollie start with?     We first start with showing a bar diagram with 3\/5 (which represents the blue marbles).   A stacked bar diagram. The top diagram has 5 equal parts. Three of them are shaded blue and the total length is labelled ?. There is a arrow from the three shaded parts to a second bar diagram with four equal parts and three of them are shaded green. The three parts shaded green have a brace denoting they contain 45.    To solve this, we use the unitary method keeping track of the top and bottom units are different:     Bottom Diagram       Top Diagram  Since the full bar on the bottom is identical to 3 units on the top bar then:   So the top bar is 100.     Sollie had 100 marbles to start with.   "
},
{
  "id": "ch-fractions-6-12-4",
  "level": "2",
  "url": "ch-fractions-6.html#ch-fractions-6-12-4",
  "type": "Example",
  "number": "7.4.20",
  "title": "",
  "body": "  Develop a Teacher's Solution of the following problem. A roomful of people watched a chess match between Angela and Bryce. 4\/11 of the spectators favored Angela and the rest favored Bryce. If 12 more people favored Bryce over Angela, how many spectators were in the room?      A stacked bar diagram. The top diagram is labelled Angela and has 4 equal parts. The bottom diagram is labelled Bryce and has 7 equal parts. The size of each part for both diagrams are the same. The difference in length between the two diagrams is labelled 12. There is a brace covering both braces on the right and is labelled with a ?.    The three squares that differ between the lengths are 12. We now use the unitary method to solve this:   There are 44 spectators in the room.   "
},
{
  "id": "exercises-fraction-division-1",
  "level": "2",
  "url": "ch-fractions-6.html#exercises-fraction-division-1",
  "type": "Exercise",
  "number": "7.4.11.1",
  "title": "",
  "body": "  Use to find the following division problems                 "
},
{
  "id": "exercises-fraction-division-2",
  "level": "2",
  "url": "ch-fractions-6.html#exercises-fraction-division-2",
  "type": "Exercise",
  "number": "7.4.11.2",
  "title": "",
  "body": "  Use to find the following fraction division problems. Write the result in reduced form. (Hint: for (d) rewrite the mixed number as an improper fraction.)                               "
},
{
  "id": "exercises-fraction-division-3",
  "level": "2",
  "url": "ch-fractions-6.html#exercises-fraction-division-3",
  "type": "Exercise",
  "number": "7.4.11.3",
  "title": "",
  "body": "  Illustrate the following division problems with a bar diagram and solve the problem.     Measurement division for       Measurement division for       Partitive division for       Partitive division for     "
},
{
  "id": "exercises-fraction-division-4",
  "level": "2",
  "url": "ch-fractions-6.html#exercises-fraction-division-4",
  "type": "Exercise",
  "number": "7.4.11.4",
  "title": "",
  "body": "  Develop Teacher's Solutions for each of the following word problems.     A string of length m is cut into 2 equal pieces. What is the length of each piece?       of the money collected at a garage sale was divided early among 4 clubs. What fractions did each club receive?      6 packets of cookies weigh kg. Find the weight of 1 packet of cookies.      Sara poured quarts of fruit juice equally into 4 cups. How much fruit juice was there in each cup?      The perimeter of a square flower bed is m. Find the length of each side in meters.    "
},
{
  "id": "exercises-fraction-division-5",
  "level": "2",
  "url": "ch-fractions-6.html#exercises-fraction-division-5",
  "type": "Exercise",
  "number": "7.4.11.5",
  "title": "",
  "body": "  Make up short word problems for each of the following type specified.     measurement division for       partitive division for       measurement division for       partitive division for       partitive division for     "
},
{
  "id": "exercises-fraction-division-6",
  "level": "2",
  "url": "ch-fractions-6.html#exercises-fraction-division-6",
  "type": "Exercise",
  "number": "7.4.11.6",
  "title": "",
  "body": "  Make up a 2-step fraction word problem such that the bar diagram in the Teacher's Solution is the following:       A stacked bar diagram with the top labelled \"women\" with 5 equal parts and the bottom labelled \"Men\" with two equal parts. The difference in lengths of the two bars is labelled 72 and there is a brace on the right side covering both bars labelled ?.          A two-step bar diagram. The top diagram has 3 equal parts and the total length is labelled 450 with the first part shaded red. The latter two parts have a arrow down to a bar with the same length as the two parts. The lower bar has 5 equal parts with the first two part shaded and the last three parts with a ? underneath.           A staked bar diagram with the top bar labelled \"Shirt\" and has two equal parts, the first part shaded purple. The bottom bar labelled hat as three equal parts with the first part shaded orange. Below these is a bar diagram with 6 equal parts. The first three are shaded purple and the next two are labelled orange. The first 5 have a brace with label \"$30\" and the last part is labeled with ?      "
},
{
  "id": "ch-fractions-7",
  "level": "1",
  "url": "ch-fractions-7.html",
  "type": "Section",
  "number": "7.5",
  "title": "An Axiomatic View of Understanding Fractions",
  "body": " An Axiomatic View of Understanding Fractions   This section takes a deeper dive into fractions. In the previous section, we covered the properties of fractions and here we provide algebraic proofs.  We summarize the known arithmetic facts about fractions:           .  Finding common denominators                  Finding common denominators this is the invert and multiply rule:        Product of Reciprocals    Existence of a reciprocal Any nonzero fraction has a reciprocal whose product       A fractional unit is a the multiplicative inverse of a nonzero whole number.    The fractional units are .    A fraction is a whole number times a fractional unit.      Product of Fractions The product of the fraction units is the fraction unit .           Proofs of the 5 Properties  Here we prove the 5 properties above by using only a) the definition of a fraction b) the arithmetic properties from and c) the above lemma.         Proof for :        This is true if and only if whose proof is           and this is true if and only if and the proof of this is: therefore (5) is satisfied.     Proof of the common denominator form of the addition of fractions:        "
},
{
  "id": "ch-fractions-7-3-2",
  "level": "2",
  "url": "ch-fractions-7.html#ch-fractions-7-3-2",
  "type": "Lemma",
  "number": "7.5.1",
  "title": "",
  "body": "  Existence of a reciprocal Any nonzero fraction has a reciprocal whose product    "
},
{
  "id": "ch-fractions-7-3-3",
  "level": "2",
  "url": "ch-fractions-7.html#ch-fractions-7-3-3",
  "type": "Definition",
  "number": "7.5.2",
  "title": "",
  "body": "  A fractional unit is a the multiplicative inverse of a nonzero whole number.   "
},
{
  "id": "ch-fractions-7-3-5",
  "level": "2",
  "url": "ch-fractions-7.html#ch-fractions-7-3-5",
  "type": "Definition",
  "number": "7.5.3",
  "title": "",
  "body": "  A fraction is a whole number times a fractional unit.   "
},
{
  "id": "ch-fractions-7-3-6",
  "level": "2",
  "url": "ch-fractions-7.html#ch-fractions-7-3-6",
  "type": "Lemma",
  "number": "7.5.4",
  "title": "",
  "body": "  Product of Fractions The product of the fraction units is the fraction unit .        "
},
{
  "id": "ch-fractions-7-4-3",
  "level": "2",
  "url": "ch-fractions-7.html#ch-fractions-7-4-3",
  "type": "Proof",
  "number": "7.5.2.1",
  "title": "",
  "body": "       Proof for :        This is true if and only if whose proof is           and this is true if and only if and the proof of this is: therefore (5) is satisfied.     Proof of the common denominator form of the addition of fractions:      "
},
{
  "id": "sect-ratios-proportions",
  "level": "1",
  "url": "sect-ratios-proportions.html",
  "type": "Section",
  "number": "8.1",
  "title": "Ratios and Proportions",
  "body": " Ratios and Proportions     Understand a ratio and proportions.    Be able to create diagrams with ratios and proportions.    Be able to solve problems using ratios.      When we measure things, it is extremely important to use units. Add 3 milk to 2 flours makes no sense in a recipe. Did you mean cups? bags? For a particular recipe the exact amount is crucial, however, we can scale a recipe (double it, half it, for example) easily and if so, the relative amounts are important. We can say that a recipe calls for twice as much flour as sugar and we extend this to the idea of proportional and ratios.    We say that the ratio between two quantities is if there is a unit so that the first quantity measures units and the second measure units.  However, in writing the ratio, one does not specify the unit.    We will often compare two things in the same unit and then the ratio is the numbers (without the units) of each.       A recipe calls for 2 cups of flour and 1 cup of sugar. The ratio of flour to sugar is .    If a recipe calls for 3 cups of milk and 2 cups of flour, then the ratio of milk to flour is .       We can build a ratio for any pair of quantities. Consider the following example.    Bernard has 3 marbles for every 2 that Zara has. This means that the ratio of Bernard's marbles to Zara's is 3:2.      Extending Ratios  We can also extend ratios to more than two quantities.    Art, Beth and Cheryl each has some money in their pockets. Art has 20, Beth has 10 and Cheryl has $40.  The ratio of the amount of money that Art has to Beth to Cheryl is 20:10:40.    Astute readers will note that the above ratio is not the simplest and we will address this next.    Equivalent Ratios    Two ratios are equivalent (are equal ratios ) if one obtained from the other by multiplying or dividing all of the measurements by the same nonzero number. That is, the ratio is equivalent to for all positive whole numbers and .      The ratios 3:2 and 6:4 are equivalent because multiplying both 3 and 2 by 2 gives the second ratio.      Word Problems  This section, more than others, depends on word problems due to the nature of the way that ratios are used. That is, they tend to be used in applications rather than in more pure mathematical sense.    Mary and her brother shared $28 in a 3:4 ratio. How much money did Mary have?    We first start with a diagram   A stacked bar diagram. The top bar is labelled \"Mary\" and has 3 equal parts and the length is labelled with a ?. The bottom bar is 4 equal parts (each part is the same as the above bar) and is labelled \"Mary's Brother\". There is a brace along the left side labelled \"$28\".    This type (and most ratio problems) naturally fit the unitary method. We start with the 7 units and try to get to 3 units.   This shows that Mary has 3 units. Therefore, Mary has $12.    The next word problem shows an extended ratio.    John, Tom and David share a sum of money in the ratio 4:5:6. If David receives $60 more than John, find the sum of money shared by the three boys.    Again, start with a diagram. There are three amounts so we'll make a stacked bar diagram. Since the ratio is given, we'll make the bar lengths in this ratio.   A stacked bar diagram with three horizontal bars with equal parts across the bars. The top bar is labelled \"John\" and has 4 parts. The middle bar is labeled \"Tom\" and has 5 parts. The bottom bar is labeled \"David\" and has 6 parts. The distance between the longest bar (David) and the shortest one (John) is labelled \"$60\". There is a brace along all three bars to the right labelled ?.    Again, we'll use the unitary method and start with 2 units, because we know that is $60. The total number of units is , so we try to get to 15 units.   The sum of money shared by all three boys is $450.      Proportions  A proportion is a statement that two ratios are equal.    In order to make play dough, the following table is used to determine the amount of flour and salt to use:         cups of Flour  2  4  8  10    cups of Salt  1  2  4  5    The ratio of flour to salt is 2:1 or 4:2 or 8:4. This discusses the proportion of flour to salt.    We will often use proportions (or equivalent ratios) to solve problems.    The two unequal sides of a rectangle has a ratio of 2:3. If the shorter side is 10 cm, find the longer side.    In this case, we use the equivalent ratios to solve this problem with as the length of the longer side.   We note that since , then . The length of the longer side is 15.      The ratio of blue marbles to green marbles in a jar is 2:5. If there are 24 blue marbles, how many marbles are there altogether?    In this case, we'll solve this first using proportions, then as bar diagrams.     Using proportions  In this case the number of blue marbles to green marbles is proportional to 2:5 or we can say that where is the number of green marbles. Since these are equivalent, multiplying 2 by 12 gives 24, therefore multiplying 5 by 12 gives so . The total number of marbles is .    Using a bar diagram  Again, start with a diagram. We'll make it stacked with the two colors and the length according to the proportion.   A stacked bar diagram with two horiztonal bars. The top bar is labelled \"blue\" and has length 24. It is also subdivided into two equal parts. The lower bar is labelled \"green\" and is 5 equal parts with the part length the same as the part length in the green bar. There is a brace on the right side covering both bars and labelled with a ?.    We'll use the unitary method start with 2 units being 24 and get to units.     There are 84 marbles.         Changing Ratios  Another common problem with ratios is that of changing ratios. There is some situation where the ratio is given and items are added or removed and we want to know the new ratio. This is solved in the same way as before, but often a second diagram is needed.   Changing Ratios   48 marbles are in a bag with a ratio of 2:1 white to red marbles. If 4 more white marbles are added, what is the new ratio of white to red marbles? Write the ratio in reduced form.    First, we'll do a diagram with the situation before marbles are added. We'll need to know the number of white and red marbles.   A stacked bar diagram with two horizontal bars. The top one is labelled \"red\" and the length is labelled with a ?. The bottom is labelled \"white\" and is twice the length of the red one and the length is labelled with a ?. There is a brace on the right covering both bars and is labelled with a 48.    We'll use the unitary method with 3 units equalling 48.   And this shows that there are 16 red marbles and 32 white marbles.  If 4 more white marbles are added then the ratio of white to red marbles is 36:16. To reduce this note that so the new ratio of white to red is 9:4.        For each of the following, write the ratio is simplest form. (Hint: for (c) find the greatest common factor)                           Provide Teacher's Solutions for the following problems involving ratios:     David cuts a rope 60 m long into two pieces in the ratio of . What is the length of the shorter piece of rope?      Adam and John have stickers with the number in the ratio of . If Adam has 72 stickers, how many stickers does John have?      The ratio of the number of boys to the number of girls is . If there are 100 boys, how many children are there altogether?      The ratio of David's weight to Ryan's weight to Ali's weight is . If Ryan weighs 30 kg, find the total weight of the 3 boys.      3 boys share a sum of money in the ratio . If the smallest share is $30, find the biggest share.       The following word problems involve changing ratios. Develop a Teacher's Solution for each.     Charlotte and Delilah each have some money in the ratio of . Together they have $60. Charlotte spends $5. What is the new ratio of Charlotte's money to Delilah's?      Coen and Jack each have some toy cars. Coen receives four new cars for his birthday and now the ratio of Coen's cars to Jack's is . If altogether, they have 40 cars, what what the ratio of the number of Coen's cars to Jack's originally?       A class is presented with the following problem: In a bag of marbles, the ratio of white marbles to red marbles is 2:3 and the ratio of red to black marbles is 6:11. What is the ratio of white to black marbles?   Conner, who likes fractions, writes and announces, without explanation, that the ratio of white to black marbles is . Explain why he is right. (Hint: taking the number of black marbles to the be whole unit, what fraction are red, and then what fraction are white?)     "
},
{
  "id": "sect-ratios-proportions-2",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-2",
  "type": "Objectives",
  "number": "8.1",
  "title": "",
  "body": "   Understand a ratio and proportions.    Be able to create diagrams with ratios and proportions.    Be able to solve problems using ratios.    "
},
{
  "id": "sect-ratios-proportions-3-2",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-3-2",
  "type": "Definition",
  "number": "8.1.1",
  "title": "",
  "body": "  We say that the ratio between two quantities is if there is a unit so that the first quantity measures units and the second measure units.  However, in writing the ratio, one does not specify the unit.   "
},
{
  "id": "sect-ratios-proportions-3-4",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-3-4",
  "type": "Example",
  "number": "8.1.2",
  "title": "",
  "body": "     A recipe calls for 2 cups of flour and 1 cup of sugar. The ratio of flour to sugar is .    If a recipe calls for 3 cups of milk and 2 cups of flour, then the ratio of milk to flour is .      "
},
{
  "id": "sect-ratios-proportions-3-6",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-3-6",
  "type": "Example",
  "number": "8.1.3",
  "title": "",
  "body": "  Bernard has 3 marbles for every 2 that Zara has. This means that the ratio of Bernard's marbles to Zara's is 3:2.   "
},
{
  "id": "sect-ratios-proportions-4-3",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-4-3",
  "type": "Example",
  "number": "8.1.4",
  "title": "",
  "body": "  Art, Beth and Cheryl each has some money in their pockets. Art has 20, Beth has 10 and Cheryl has $40.  The ratio of the amount of money that Art has to Beth to Cheryl is 20:10:40.   "
},
{
  "id": "sect-ratios-proportions-5-2",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-5-2",
  "type": "Definition",
  "number": "8.1.5",
  "title": "",
  "body": "  Two ratios are equivalent (are equal ratios ) if one obtained from the other by multiplying or dividing all of the measurements by the same nonzero number. That is, the ratio is equivalent to for all positive whole numbers and .   "
},
{
  "id": "sect-ratios-proportions-5-3",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-5-3",
  "type": "Example",
  "number": "8.1.6",
  "title": "",
  "body": "  The ratios 3:2 and 6:4 are equivalent because multiplying both 3 and 2 by 2 gives the second ratio.   "
},
{
  "id": "sect-ratios-proportions-6-3",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-6-3",
  "type": "Example",
  "number": "8.1.7",
  "title": "",
  "body": "  Mary and her brother shared $28 in a 3:4 ratio. How much money did Mary have?    We first start with a diagram   A stacked bar diagram. The top bar is labelled \"Mary\" and has 3 equal parts and the length is labelled with a ?. The bottom bar is 4 equal parts (each part is the same as the above bar) and is labelled \"Mary's Brother\". There is a brace along the left side labelled \"$28\".    This type (and most ratio problems) naturally fit the unitary method. We start with the 7 units and try to get to 3 units.   This shows that Mary has 3 units. Therefore, Mary has $12.   "
},
{
  "id": "sect-ratios-proportions-6-5",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-6-5",
  "type": "Example",
  "number": "8.1.8",
  "title": "",
  "body": "  John, Tom and David share a sum of money in the ratio 4:5:6. If David receives $60 more than John, find the sum of money shared by the three boys.    Again, start with a diagram. There are three amounts so we'll make a stacked bar diagram. Since the ratio is given, we'll make the bar lengths in this ratio.   A stacked bar diagram with three horizontal bars with equal parts across the bars. The top bar is labelled \"John\" and has 4 parts. The middle bar is labeled \"Tom\" and has 5 parts. The bottom bar is labeled \"David\" and has 6 parts. The distance between the longest bar (David) and the shortest one (John) is labelled \"$60\". There is a brace along all three bars to the right labelled ?.    Again, we'll use the unitary method and start with 2 units, because we know that is $60. The total number of units is , so we try to get to 15 units.   The sum of money shared by all three boys is $450.   "
},
{
  "id": "sect-ratios-proportions-7-3",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-7-3",
  "type": "Example",
  "number": "8.1.9",
  "title": "",
  "body": "  In order to make play dough, the following table is used to determine the amount of flour and salt to use:         cups of Flour  2  4  8  10    cups of Salt  1  2  4  5    The ratio of flour to salt is 2:1 or 4:2 or 8:4. This discusses the proportion of flour to salt.   "
},
{
  "id": "sect-ratios-proportions-7-5",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-7-5",
  "type": "Example",
  "number": "8.1.10",
  "title": "",
  "body": "  The two unequal sides of a rectangle has a ratio of 2:3. If the shorter side is 10 cm, find the longer side.    In this case, we use the equivalent ratios to solve this problem with as the length of the longer side.   We note that since , then . The length of the longer side is 15.   "
},
{
  "id": "sect-ratios-proportions-7-6",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-7-6",
  "type": "Example",
  "number": "8.1.11",
  "title": "",
  "body": "  The ratio of blue marbles to green marbles in a jar is 2:5. If there are 24 blue marbles, how many marbles are there altogether?    In this case, we'll solve this first using proportions, then as bar diagrams.     Using proportions  In this case the number of blue marbles to green marbles is proportional to 2:5 or we can say that where is the number of green marbles. Since these are equivalent, multiplying 2 by 12 gives 24, therefore multiplying 5 by 12 gives so . The total number of marbles is .    Using a bar diagram  Again, start with a diagram. We'll make it stacked with the two colors and the length according to the proportion.   A stacked bar diagram with two horiztonal bars. The top bar is labelled \"blue\" and has length 24. It is also subdivided into two equal parts. The lower bar is labelled \"green\" and is 5 equal parts with the part length the same as the part length in the green bar. There is a brace on the right side covering both bars and labelled with a ?.    We'll use the unitary method start with 2 units being 24 and get to units.     There are 84 marbles.      "
},
{
  "id": "sect-ratios-proportions-8-3",
  "level": "2",
  "url": "sect-ratios-proportions.html#sect-ratios-proportions-8-3",
  "type": "Example",
  "number": "8.1.12",
  "title": "Changing Ratios.",
  "body": " Changing Ratios   48 marbles are in a bag with a ratio of 2:1 white to red marbles. If 4 more white marbles are added, what is the new ratio of white to red marbles? Write the ratio in reduced form.    First, we'll do a diagram with the situation before marbles are added. We'll need to know the number of white and red marbles.   A stacked bar diagram with two horizontal bars. The top one is labelled \"red\" and the length is labelled with a ?. The bottom is labelled \"white\" and is twice the length of the red one and the length is labelled with a ?. There is a brace on the right covering both bars and is labelled with a 48.    We'll use the unitary method with 3 units equalling 48.   And this shows that there are 16 red marbles and 32 white marbles.  If 4 more white marbles are added then the ratio of white to red marbles is 36:16. To reduce this note that so the new ratio of white to red is 9:4.   "
},
{
  "id": "exercises-ratios-1",
  "level": "2",
  "url": "sect-ratios-proportions.html#exercises-ratios-1",
  "type": "Exercise",
  "number": "8.1.6.1",
  "title": "",
  "body": "  For each of the following, write the ratio is simplest form. (Hint: for (c) find the greatest common factor)                        "
},
{
  "id": "exercises-ratios-2",
  "level": "2",
  "url": "sect-ratios-proportions.html#exercises-ratios-2",
  "type": "Exercise",
  "number": "8.1.6.2",
  "title": "",
  "body": "  Provide Teacher's Solutions for the following problems involving ratios:     David cuts a rope 60 m long into two pieces in the ratio of . What is the length of the shorter piece of rope?      Adam and John have stickers with the number in the ratio of . If Adam has 72 stickers, how many stickers does John have?      The ratio of the number of boys to the number of girls is . If there are 100 boys, how many children are there altogether?      The ratio of David's weight to Ryan's weight to Ali's weight is . If Ryan weighs 30 kg, find the total weight of the 3 boys.      3 boys share a sum of money in the ratio . If the smallest share is $30, find the biggest share.    "
},
{
  "id": "exercises-ratios-3",
  "level": "2",
  "url": "sect-ratios-proportions.html#exercises-ratios-3",
  "type": "Exercise",
  "number": "8.1.6.3",
  "title": "",
  "body": "  The following word problems involve changing ratios. Develop a Teacher's Solution for each.     Charlotte and Delilah each have some money in the ratio of . Together they have $60. Charlotte spends $5. What is the new ratio of Charlotte's money to Delilah's?      Coen and Jack each have some toy cars. Coen receives four new cars for his birthday and now the ratio of Coen's cars to Jack's is . If altogether, they have 40 cars, what what the ratio of the number of Coen's cars to Jack's originally?    "
},
{
  "id": "exercises-ratios-4",
  "level": "2",
  "url": "sect-ratios-proportions.html#exercises-ratios-4",
  "type": "Exercise",
  "number": "8.1.6.4",
  "title": "",
  "body": "  A class is presented with the following problem: In a bag of marbles, the ratio of white marbles to red marbles is 2:3 and the ratio of red to black marbles is 6:11. What is the ratio of white to black marbles?   Conner, who likes fractions, writes and announces, without explanation, that the ratio of white to black marbles is . Explain why he is right. (Hint: taking the number of black marbles to the be whole unit, what fraction are red, and then what fraction are white?)   "
},
{
  "id": "sect-percents",
  "level": "1",
  "url": "sect-percents.html",
  "type": "Section",
  "number": "8.2",
  "title": "Percentages",
  "body": " Percentages     Understand what a percentage is and how it relates to fractions.    Understand the importance of the whole unit in percentage problems.    Use bar diagrams to solve percentage problems.    Use the unitary method to solve percentage problems.      Percentages are ubiquitous in any context involving numbers. For example:   Shopping   Shoes are now 35% off! Buy one, get the second for 50% off.     Grades   Your final grade is 85%.     Sports   Her shooting percentage is 65% (basketball) or the quarterback's completion percentage is 78% (football).     Money   Earn 2.1% on this savings account. Your tax rate is 18%. The interest rate on your credit card is 15.5%.       Percentage   A percentage is a fraction with a denominator of 100. That is, is the fraction .    For example, 36% and 50% or . It is important to have a firm grasp of fractions, especially equivalent fractions, to handle percentages effectively.    A farmer collects eggs and finds that 21 out of 25 eggs are brown. What percentage of the eggs are brown?    First, we express this as the fraction . We then use equivalent fractions to write this with a denominator of 100: . So, 84% of the eggs are brown.      Percentages and the Whole Unit  Since a percentage is a fraction with a denominator of 100, understanding percentages requires identifying what the whole unit is. In the egg example above, the whole unit is the total number of eggs. The 84% value is relative to that whole unit.  While this is straightforward in simple cases, percentages are often used to make comparisons. When that happens, the quantity being compared to serves as the whole unit. The following table shows a number of examples:      Phrase  Whole Unit (100%)    Johanna scored 5% more than Charlie on the exam.  Charlie's score on the exam.    Fred's income will rise 3% next year.  Fred's current income.    Becky's bake sale sold 10% fewer cookies than Faye's.  Number of cookies Faye's bake sale sold.    With a coupon, the price of the shirt will be reduced an additional 25% off the sale price.  The sale price of the shirt.     Knowing the Whole Unit is Key  It cannot be emphasized enough how vital it is to understand the whole unit in a percentage problem. Because these problems can be tricky, you must think clearly to consistently solve them correctly.    Bar Diagrams and Percentages  A very helpful way to visualize percentage problems is with a diagram, and in most situations, a bar diagram works best. When drawing one, always include a percentage scale along the top of the diagram. The bar below demonstrates the whole unit representing 100%.   A horizontal line with 10 tick marks. The leftmost is labeled 0%, the middle is 50%, and the rightmost is 100%. Below the line is a bar containing the word \"Whole\".     Good Diagrams with Percentages  Producing an accurate diagram for percentage problems can be subtle. Here are some core strategies to help:   Clearly identify which quantity represents 100%.    When a problem compares two distinct quantities, use a stacked bar diagram.    All given percentages and sought-after target percentages belong exclusively on the percentage scale.    Any absolute quantities that you know or are searching for belong directly on or inside the bars, never on the percent scale.      We present a few examples of word problems alongside their diagrams below.    Jonathan's rope is 420 cm long and Kendra's is 350 cm long. What percentage of the length of Kendra's rope is the length of Jonathan's rope?    As discussed, the crucial first step is determining what represents 100%. In this case, it is the length of Kendra's rope. On the percentage scale, we align the end of Kendra's bar with 100%. Because we are seeking a percentage, we label the on the percentage scale directly above the end of Jonathan's bar.   Stacked bar diagram with two bars. Percent scale goes from 0 to over 100 percent. The top bar is Jonathan (420cm). The bottom bar is Kendra (350cm aligned to 100%).    The ratio of the length of Jonathan's rope relative to Kendra's rope is:   So, the length of Jonathan's rope is 120% of the length of Kendra's rope.      There are 400 spaces in a parking lot. If 320 spaces have vehicles parked in them, what percentage fewer empty spots are there than filled spots?    We set up two bars: one representing filled spots and one for empty spots. The filled bar has a value of 320, and we denote the total combined capacity of 400 on the right. Since the filled spots act as our baseline comparison (100%), we align 100% on the scale with the end of the filled bar.  Since the problem asks for the percentage change \"fewer than filled\", we measure the missing percentage value below the 100% threshold.   Stacked bar diagram with filled bar (320) and empty bar. A brace on the right groups them to total 400. The percent scale above tracks the relative difference.    The number of empty spaces is , making the fraction of empty spaces relative to filled spots is: Since , the percentage of empty spots compared to filled spots is 25%. Thus, there are fewer empty spots than filled spots.       The Unitary Method  We previously used the unitary method in to help solve problems. Here, we adapt a modified version explicitly tailored for working with percentages. Let's return to the rope problem featuring Jonathan and Kendra.  From our visual model, we notice that a specific quantity is associated directly with a percentage benchmark. We start from that fixed ratio, applying uniform multiplication or division operations across both fields until we arrive at our target value.  In this context, we know that 100% corresponds to 350 cm, and we want to find out what percentage corresponds to 420 cm: Now that we have isolated 420 cm, we can clearly see it represents 120%.   Allowed Operations in the Unitary Method  We can only use multiplication and division when using the Unitary method. Recall that we always begin with a known percentage and it corresponding value. The we manipulate it to find an unknown target scale. Determining the steps efficiently can sometimes be tricky.  Generally, the safest first step is scaling down the values using division. You can divide by the Greatest Common Factor of both sides, though any common factor works. Once you establish a smaller base value, you can easily scale up to your target configuration.   In our rope problem, the GCD of 100 and 350 is 50. Dividing by the full GCD instead would look like this:   Notice that while we arrive at the exact same answer, navigating a step up from 2% to 120% involves slightly larger multipliers, making the mental math a bit more complex.    Teacher's Solutions of Percentage Problems  We will now examine how to develop formal step-by-step Teacher's Solutions for percentage applications. Like our previous models, every solution must include an explicit bar diagram. Remember that the diagram should have a percentage scale along the top, and all percentage values should be placed on that scale. Any values that are quantities should be placed on or inside the bars, never on the percentage scale.    Find a Teacher's Solution to the following problem: The price of an ounce of gold is $500. If it rises by 200%, find the new price.     Here, the base price of $500 represents our initial 100% value. Because an explicit comparative change is occurring, we will model this using a stacked bar diagram.   A stacked bar diagram with two bars and a percent scale. The top bar is labelled \"current\" and has length \"$500\". The bottom bar is labelled \"After\" and the length is labelled ?. The percent scale is above the two bars. The left is labelled 0% and the right (which is even with the \"after\" bar) is labelled 300%. There is a mark on the percent scale even with the length of the \"current\" bar and is labelled 100%. The distance on the percent scale between the 100% mark and the 300% mark is labelled 200%.    Using the unitary method starting with our baseline equation: Thus, the new price of gold is $1500 per ounce.      Find a Teacher's Solution to the following problem: Mary bought a dress at a discount of 25%. If the discount saved her $15, how much did she pay for the dress?     To begin, 100% represents the original full price of the dress. Since we are isolating what she actually paid after the markdown, our diagram looks like this:   A stacked bar diagram with two bars and a percent scale. The top bar is labelled \"discounted price\" and is labelled ?. The bottom bar is labelled \"full price\". The difference between the two bar lengths is labelled $15. The percent scale is above the two bars. The left is labelled 0% and the right (which is even with the \"full price\" bar) is labelled 100%. There is a mark on the percent scale even with the length of the \"discounted price\" bar. The distance on the percent scale with this mark and the 100% mark is labelled \"25%\".    To resolve the value, we evaluate our known core relationship using the unitary method: Mary paid $45 for the dress. (Alternatively, finding 100% yields a full price of $60, and evaluating confirms our result.)      Find a Teacher's Solution to the following problem: Alfred has 10% more stickers than Xavier. If they have 420 stickers altogether, how many stickers does Alfred have?     We construct the diagram, noting that because Alfred is being compared directly to Xavier, Xavier's stickers represent our 100% base. The 10% delta and the absolute total of 420 are mapped out below:   A stacked bar diagram with two bars and a percent scale. The top bar is labelled \"Alfred\" and has a label of ? The bottom bar is labelled \"Xavier\". Together the two bars have a brace on the right and labelled \\$420. The percent scale is above the two bars. The left is labelled 0% and the right (which is even with the \"Alfred\" bar) is labelled 100%. There is a mark on the percent scale even with the length of the \"Xavier\" bar. The distance on the percent scale with this mark and the 100% mark is labelled \"10%\".    Since Alfred's stickers represents 110% of Xavier's stickers and Xavier holds 100%, their combined total represents 210% of our base unit, matching 420 stickers. We apply the unitary method to isolate Alfred's 110%: Thus, Alfred has 220 stickers.      Find a Teacher's Solution to the following problem: If an initial price is reduced by 20% and the resulting sale price is subsequently reduced by an additional 30%, what is the overall total percentage reduction?     This is a classic multi-step problem that catches many students because the two sequential markdown percentages apply to entirely different whole units. To keep things clear and readable, we can assign a hypothetical baseline original price of $100. This ensures our dollar changes map perfectly 1:1 back to overall percentages.  Step 1: The initial markdown of 20% applies directly to our original base unit ($100).   A stacked bar diagram with two bars and a percent scale. The top bar is labelled \"Original\" and has a length of $100. The bottom bar is labelled \"First Sale\" and has a length of ?. The percent scale is above the two bars. The left is labelled 0% and the right (which is even with the \"Original\" bar) is labelled 100%. There is a mark on the percent scale even with the length of the \"First Sale\" bar. The distance on the percent scale with this mark and the 100% mark is labelled \"20%\".    This initial phase leaves us with of the original price, which translates directly to $80.  Step 2: We re-evaluate the system. The new 30% markdown treats our intermediate $80 value as its new 100% whole unit base.   Stacked diagram displaying the second reduction. There are three horizontal bars and a percent scale above. The top bar is labelled \"Original\" and has a length of $100. The middle bar is labelled \"First Sale\" and has a length of $80. The bottom bar is labelled \"Second Sale\" and has a length of ?. The percent scale is above the three bars. The left is labelled 0% and the right (which is even with the \"First Sale\" bar) is labelled 100%. There is a mark on the percent scale even with the length of the \"Second Sale\" bar. The distance on the percent scale with this mark and the 100% mark is labelled \"30%\".    In this secondary scope, our baseline 100% is $80. Slashing that by 30% means the final price retains exactly 70% of that intermediate value: . Our final net price is $56.  This means our new final price is 56% of our absolute starting original price. Evaluating the raw difference yields: . Because we carefully based our initialization on a clean $100 baseline, this absolute loss translates perfectly to a total net reduction of 44%.        Provide a complete Teacher's Solution for each problem below, making sure to explicitly identify what represents the baseline whole unit . It is highly recommended to use the unitary method. Hint on (e): The answer is not 10%.     Exactly 36 out of 400 seats in a movie theater are vacant. What percentage of the total seats are vacant?      Exactly of the students enrolled at a school wear prescription glasses. What percentage of the student body wears glasses?      Eva started with 3 m of fabric cloth. She used 75 cm of it to construct a miniature dress for her doll. What percentage of her original cloth stock did she use for the dress?      A total of 45 medals were awarded at a regional band competition. If there were 22 bronze medals and 14 silver medals awarded with the remainder consisting entirely of gold medals, what percentage of the total were gold medals?      Kristine spends 30% of her total savings on a luxury watch, and then uses 60% of her remaining savings to purchase a designer dress. What percentage of her original savings is left over?       Provide a complete Teacher's Solution for each problem below. Be careful; some configurations require subtle tracking. Make sure you explicitly state what represents the base whole unit and track your transformations via the unitary method.     There are 200 members in a community club. If 60% of them are male, what percentage more males are there than females?      Exactly 40% of the beads inside a craft box are red, while the remaining balance are yellow. If there are 36 more yellow beads than red beads inside the container, how many total beads are there altogether?      A shop offers variable promotional discounts to different customers. Libby paid $600 for a premium watch at a fixed discount of 20%. Scott purchased the exact same watch model but paid $630. What percentage markdown was given to Scott?      Mary's salary is 10% higher than Alice's salary. If their combined total salary is $4200, what is Mary's individual salary?      John spent 20% of his money on lunch. He then spent of his remaining funds on a toy. If the toy cost exactly $12, how much money did John have originally?      "
},
{
  "id": "sect-percents-2",
  "level": "2",
  "url": "sect-percents.html#sect-percents-2",
  "type": "Objectives",
  "number": "8.2",
  "title": "",
  "body": "   Understand what a percentage is and how it relates to fractions.    Understand the importance of the whole unit in percentage problems.    Use bar diagrams to solve percentage problems.    Use the unitary method to solve percentage problems.    "
},
{
  "id": "sect-percents-3-2",
  "level": "2",
  "url": "sect-percents.html#sect-percents-3-2",
  "type": "Definition",
  "number": "8.2.1",
  "title": "Percentage.",
  "body": " Percentage   A percentage is a fraction with a denominator of 100. That is, is the fraction .   "
},
{
  "id": "sect-percents-3-4",
  "level": "2",
  "url": "sect-percents.html#sect-percents-3-4",
  "type": "Example",
  "number": "8.2.2",
  "title": "",
  "body": "  A farmer collects eggs and finds that 21 out of 25 eggs are brown. What percentage of the eggs are brown?    First, we express this as the fraction . We then use equivalent fractions to write this with a denominator of 100: . So, 84% of the eggs are brown.   "
},
{
  "id": "sect-percents-4-5",
  "level": "2",
  "url": "sect-percents.html#sect-percents-4-5",
  "type": "Note",
  "number": "8.2.3",
  "title": "Knowing the Whole Unit is Key.",
  "body": " Knowing the Whole Unit is Key  It cannot be emphasized enough how vital it is to understand the whole unit in a percentage problem. Because these problems can be tricky, you must think clearly to consistently solve them correctly.  "
},
{
  "id": "sect-percents-4-6-4",
  "level": "2",
  "url": "sect-percents.html#sect-percents-4-6-4",
  "type": "Note",
  "number": "8.2.4",
  "title": "Good Diagrams with Percentages.",
  "body": " Good Diagrams with Percentages  Producing an accurate diagram for percentage problems can be subtle. Here are some core strategies to help:   Clearly identify which quantity represents 100%.    When a problem compares two distinct quantities, use a stacked bar diagram.    All given percentages and sought-after target percentages belong exclusively on the percentage scale.    Any absolute quantities that you know or are searching for belong directly on or inside the bars, never on the percent scale.     "
},
{
  "id": "sect-percents-4-6-6",
  "level": "2",
  "url": "sect-percents.html#sect-percents-4-6-6",
  "type": "Example",
  "number": "8.2.5",
  "title": "",
  "body": "  Jonathan's rope is 420 cm long and Kendra's is 350 cm long. What percentage of the length of Kendra's rope is the length of Jonathan's rope?    As discussed, the crucial first step is determining what represents 100%. In this case, it is the length of Kendra's rope. On the percentage scale, we align the end of Kendra's bar with 100%. Because we are seeking a percentage, we label the on the percentage scale directly above the end of Jonathan's bar.   Stacked bar diagram with two bars. Percent scale goes from 0 to over 100 percent. The top bar is Jonathan (420cm). The bottom bar is Kendra (350cm aligned to 100%).    The ratio of the length of Jonathan's rope relative to Kendra's rope is:   So, the length of Jonathan's rope is 120% of the length of Kendra's rope.   "
},
{
  "id": "sect-percents-4-6-7",
  "level": "2",
  "url": "sect-percents.html#sect-percents-4-6-7",
  "type": "Example",
  "number": "8.2.6",
  "title": "",
  "body": "  There are 400 spaces in a parking lot. If 320 spaces have vehicles parked in them, what percentage fewer empty spots are there than filled spots?    We set up two bars: one representing filled spots and one for empty spots. The filled bar has a value of 320, and we denote the total combined capacity of 400 on the right. Since the filled spots act as our baseline comparison (100%), we align 100% on the scale with the end of the filled bar.  Since the problem asks for the percentage change \"fewer than filled\", we measure the missing percentage value below the 100% threshold.   Stacked bar diagram with filled bar (320) and empty bar. A brace on the right groups them to total 400. The percent scale above tracks the relative difference.    The number of empty spaces is , making the fraction of empty spaces relative to filled spots is: Since , the percentage of empty spots compared to filled spots is 25%. Thus, there are fewer empty spots than filled spots.   "
},
{
  "id": "sect-percents-5-5",
  "level": "2",
  "url": "sect-percents.html#sect-percents-5-5",
  "type": "Note",
  "number": "8.2.7",
  "title": "Allowed Operations in the Unitary Method.",
  "body": " Allowed Operations in the Unitary Method  We can only use multiplication and division when using the Unitary method. Recall that we always begin with a known percentage and it corresponding value. The we manipulate it to find an unknown target scale. Determining the steps efficiently can sometimes be tricky.  Generally, the safest first step is scaling down the values using division. You can divide by the Greatest Common Factor of both sides, though any common factor works. Once you establish a smaller base value, you can easily scale up to your target configuration.  "
},
{
  "id": "subsect-percent-teacher-solution-3",
  "level": "2",
  "url": "sect-percents.html#subsect-percent-teacher-solution-3",
  "type": "Example",
  "number": "8.2.8",
  "title": "",
  "body": "  Find a Teacher's Solution to the following problem: The price of an ounce of gold is $500. If it rises by 200%, find the new price.     Here, the base price of $500 represents our initial 100% value. Because an explicit comparative change is occurring, we will model this using a stacked bar diagram.   A stacked bar diagram with two bars and a percent scale. The top bar is labelled \"current\" and has length \"$500\". The bottom bar is labelled \"After\" and the length is labelled ?. The percent scale is above the two bars. The left is labelled 0% and the right (which is even with the \"after\" bar) is labelled 300%. There is a mark on the percent scale even with the length of the \"current\" bar and is labelled 100%. The distance on the percent scale between the 100% mark and the 300% mark is labelled 200%.    Using the unitary method starting with our baseline equation: Thus, the new price of gold is $1500 per ounce.   "
},
{
  "id": "subsect-percent-teacher-solution-4",
  "level": "2",
  "url": "sect-percents.html#subsect-percent-teacher-solution-4",
  "type": "Example",
  "number": "8.2.9",
  "title": "",
  "body": "  Find a Teacher's Solution to the following problem: Mary bought a dress at a discount of 25%. If the discount saved her $15, how much did she pay for the dress?     To begin, 100% represents the original full price of the dress. Since we are isolating what she actually paid after the markdown, our diagram looks like this:   A stacked bar diagram with two bars and a percent scale. The top bar is labelled \"discounted price\" and is labelled ?. The bottom bar is labelled \"full price\". The difference between the two bar lengths is labelled $15. The percent scale is above the two bars. The left is labelled 0% and the right (which is even with the \"full price\" bar) is labelled 100%. There is a mark on the percent scale even with the length of the \"discounted price\" bar. The distance on the percent scale with this mark and the 100% mark is labelled \"25%\".    To resolve the value, we evaluate our known core relationship using the unitary method: Mary paid $45 for the dress. (Alternatively, finding 100% yields a full price of $60, and evaluating confirms our result.)   "
},
{
  "id": "subsect-percent-teacher-solution-5",
  "level": "2",
  "url": "sect-percents.html#subsect-percent-teacher-solution-5",
  "type": "Example",
  "number": "8.2.10",
  "title": "",
  "body": "  Find a Teacher's Solution to the following problem: Alfred has 10% more stickers than Xavier. If they have 420 stickers altogether, how many stickers does Alfred have?     We construct the diagram, noting that because Alfred is being compared directly to Xavier, Xavier's stickers represent our 100% base. The 10% delta and the absolute total of 420 are mapped out below:   A stacked bar diagram with two bars and a percent scale. The top bar is labelled \"Alfred\" and has a label of ? The bottom bar is labelled \"Xavier\". Together the two bars have a brace on the right and labelled \\$420. The percent scale is above the two bars. The left is labelled 0% and the right (which is even with the \"Alfred\" bar) is labelled 100%. There is a mark on the percent scale even with the length of the \"Xavier\" bar. The distance on the percent scale with this mark and the 100% mark is labelled \"10%\".    Since Alfred's stickers represents 110% of Xavier's stickers and Xavier holds 100%, their combined total represents 210% of our base unit, matching 420 stickers. We apply the unitary method to isolate Alfred's 110%: Thus, Alfred has 220 stickers.   "
},
{
  "id": "subsect-percent-teacher-solution-6",
  "level": "2",
  "url": "sect-percents.html#subsect-percent-teacher-solution-6",
  "type": "Example",
  "number": "8.2.11",
  "title": "",
  "body": "  Find a Teacher's Solution to the following problem: If an initial price is reduced by 20% and the resulting sale price is subsequently reduced by an additional 30%, what is the overall total percentage reduction?     This is a classic multi-step problem that catches many students because the two sequential markdown percentages apply to entirely different whole units. To keep things clear and readable, we can assign a hypothetical baseline original price of $100. This ensures our dollar changes map perfectly 1:1 back to overall percentages.  Step 1: The initial markdown of 20% applies directly to our original base unit ($100).   A stacked bar diagram with two bars and a percent scale. The top bar is labelled \"Original\" and has a length of $100. The bottom bar is labelled \"First Sale\" and has a length of ?. The percent scale is above the two bars. The left is labelled 0% and the right (which is even with the \"Original\" bar) is labelled 100%. There is a mark on the percent scale even with the length of the \"First Sale\" bar. The distance on the percent scale with this mark and the 100% mark is labelled \"20%\".    This initial phase leaves us with of the original price, which translates directly to $80.  Step 2: We re-evaluate the system. The new 30% markdown treats our intermediate $80 value as its new 100% whole unit base.   Stacked diagram displaying the second reduction. There are three horizontal bars and a percent scale above. The top bar is labelled \"Original\" and has a length of $100. The middle bar is labelled \"First Sale\" and has a length of $80. The bottom bar is labelled \"Second Sale\" and has a length of ?. The percent scale is above the three bars. The left is labelled 0% and the right (which is even with the \"First Sale\" bar) is labelled 100%. There is a mark on the percent scale even with the length of the \"Second Sale\" bar. The distance on the percent scale with this mark and the 100% mark is labelled \"30%\".    In this secondary scope, our baseline 100% is $80. Slashing that by 30% means the final price retains exactly 70% of that intermediate value: . Our final net price is $56.  This means our new final price is 56% of our absolute starting original price. Evaluating the raw difference yields: . Because we carefully based our initialization on a clean $100 baseline, this absolute loss translates perfectly to a total net reduction of 44%.   "
},
{
  "id": "exercises-percentages-1",
  "level": "2",
  "url": "sect-percents.html#exercises-percentages-1",
  "type": "Exercise",
  "number": "8.2.4.1",
  "title": "",
  "body": "  Provide a complete Teacher's Solution for each problem below, making sure to explicitly identify what represents the baseline whole unit . It is highly recommended to use the unitary method. Hint on (e): The answer is not 10%.     Exactly 36 out of 400 seats in a movie theater are vacant. What percentage of the total seats are vacant?      Exactly of the students enrolled at a school wear prescription glasses. What percentage of the student body wears glasses?      Eva started with 3 m of fabric cloth. She used 75 cm of it to construct a miniature dress for her doll. What percentage of her original cloth stock did she use for the dress?      A total of 45 medals were awarded at a regional band competition. If there were 22 bronze medals and 14 silver medals awarded with the remainder consisting entirely of gold medals, what percentage of the total were gold medals?      Kristine spends 30% of her total savings on a luxury watch, and then uses 60% of her remaining savings to purchase a designer dress. What percentage of her original savings is left over?    "
},
{
  "id": "exercises-percentages-2",
  "level": "2",
  "url": "sect-percents.html#exercises-percentages-2",
  "type": "Exercise",
  "number": "8.2.4.2",
  "title": "",
  "body": "  Provide a complete Teacher's Solution for each problem below. Be careful; some configurations require subtle tracking. Make sure you explicitly state what represents the base whole unit and track your transformations via the unitary method.     There are 200 members in a community club. If 60% of them are male, what percentage more males are there than females?      Exactly 40% of the beads inside a craft box are red, while the remaining balance are yellow. If there are 36 more yellow beads than red beads inside the container, how many total beads are there altogether?      A shop offers variable promotional discounts to different customers. Libby paid $600 for a premium watch at a fixed discount of 20%. Scott purchased the exact same watch model but paid $630. What percentage markdown was given to Scott?      Mary's salary is 10% higher than Alice's salary. If their combined total salary is $4200, what is Mary's individual salary?      John spent 20% of his money on lunch. He then spent of his remaining funds on a toy. If the toy cost exactly $12, how much money did John have originally?    "
},
{
  "id": "sect-convert-units",
  "level": "1",
  "url": "sect-convert-units.html",
  "type": "Section",
  "number": "8.3",
  "title": "Converting Units",
  "body": " Converting Units     Understand the dimensional analysis method of converting units.    Understand how dimensional analysis works for powers of unit conversions.    Understand the metric system and how prefix values change the unit quantity.      If we want to know how many feet are in 5 miles, we need to know the number of feet in a mile, which is 5280, but do we multiply or divide? Thinking through the two sizes and knowing that the answer should be large you might result in which is correct, but what if we have units that we aren't as familiar with. How many milliliters are in 8 gallons? How many meters per second are you traveling if you are going 30 miles per hour? The method called Dimensional Analysis is a very general way that using both unit conversions as well as handling problems involving rates in .    Dimensional Analysis  The idea of dimensional analysis is that if you start with some quantity and multiply by 1, then the quantity doesn't change. The idea then is to find a create form of 1 to multiply by.  For example, since 1 mile is the same as 5280 feet, then both of the following fractions are creative forms of 1. and this will always work for any unit. To use this to convert 5 miles to feet we actually will do and the important part here is that the units work out. That is the miles in the top and bottom cancel or   This method also extends to combining units which the next example shows.    Convert 8 quarts to milliliters. You should use the fact that 1 quart is 0.94635 liters and 1 liter is 1000 mL.    First, we are going to start with 8 quarts. The next step is to use a fraction to multiply. These could be either and we select the second one because the unit quart is in the denominator and will cancel the unit that we are starting with. That is,   We now covert liters to milliliters (mL) using the conversion: .  If we need to do multiple steps like this, we can do these in a single step as in the following: .     Using Calculators with Unit Conversion  In the problem above and throughout this section, we have used a calculator to perform the operations (unless it can be done with mental math). The point of this is to do unit conversion and not on the arithmetic operations.   The next shows an example with weight or mass.    Convert 3.25 pounds to grams (g). Use the following: 1 kilogram (kg) is 2.2046 pounds (lb) and 1 kg is 1000 grams (g).    We start with 3.25 pounds, because that's what we want to convert from. Then we use each factor with the units set to cancel:     The following converts a rate, which is a combination of units, and is a common use of dimensional analysis. We will see more with rates in , but as you will see below, we can use the same technique to convert rates from one unit to another.    Convert 88 feet per second to miles per hour. Recall that 60 seconds = 1 minutes, 60 minutes = 1 hour and 5280 feet = 1 mile.    We start with what is given and that is 88 feet per second. We have the following relationships We will then use the fraction formed from these to cover to miles per hour. and notice that all of the units cancel except for miles on top and hours on the bottom, which is what we want.    Units don't have to be things that we measure (like length, volume, weight). The following shows that we can use it for currency conversion.    On a given day 1.87382 U.S. Dollar (USD) trades for 1 british pound (£). If you exchange $100 (USD), how many pounds would that be.    In this example, we use the relationship that and then multiply the given amount $100 by the right fraction. which has been rounded next hundredth of a pound (also called a pence).      Advanced Dimensional Analysis  A basketball court is 4700 square feet. What is it's area in square meters?  There are two ways to approach this problem. First, if we know how many square meter are one square foot, then we can calculate this just like above. For example, if we know then we can use dimensional analysis to do this with   The above way to solve this required that we knew the convert from square meters to square feet. However, what if we only had the conversion that 1 foot is 0.3048 meters. We can use this to find the conversion of 4700 square ft.  As before, if we start with 4700 square feet and then use the relationship of with the proper power. Recall that the fraction well since this is 1, we can also square the fraction (including the units) to get and now we use this to do the conversion.   The next example show a volume conversion problem.    The interior of an rectangular cooler is 0.40 m by 0.20 m by 0.25 m on its three sides. Find the number of liters (L) for the cooler. Use the fact that 1 m = 100 cm, 1 mL (milliliter) = 1 and 1000 mL = 1 L.  Note: liters is a common measurement of volume for things like coolers and backpacks.    We first need to calculate the volume of the cooler and this is   We then start with this and multiply by the creative forms of 1 with the unit conversion. and we note that the second term if cubed. Therefore this can be written: so the cooler has a volume of 200 liters.      More Details on Units  Also, recall that there are typically two different unit systems. The U.S. System also known as the imperial system and the Metric or SI (International System). It is common in engineering and business (who sell products throughout the world) to need to convert between these systems.  One of the key features of the metric system is that there are a series of units for a given quantity that are nice relationships to one another. For example, for measuring length, the standard unit is meters (abbreviated m), but also centimeters (cm), kilometers (km) and other units. The following table give   Standard Metric System Prefixes and Multipliers    Prefix  Symbol  Exponential Form  Decimal Scale \/ Word Value    Pico  p   0.000000000001 (One trillionth)    Nano  n   0.000000001 (One billionth)    Micro  µ   0.000001 (One millionth)    Milli  m   0.001 (One thousandth)    Centi  c   0.01 (One hundredth)    Deci  d   0.1 (One tenth)    Base Unit  —   1 (One)    Deka  da   10 (Ten)    Hecto  h   100 (One hundred)    Kilo  k   1,000 (One thousand)    Mega  M   1,000,000 (One million)    Giga  G   1,000,000,000 (One billion)    Tera  T   1,000,000,000,000 (One trillion)    Peta  P   One quadrillion     To use this table, if you have a kilometer (km), it is or 1000 meters. A millimeter is or 0.001 meters.  This works for other types of quantities. For example a micro second ( ) is seconds. A kilogram (kg) is 1000 grams (g).   Length Units  The following tables list some common length units as well as the conversions.   Common Units of Length    System  Unit Name  Abbreviation    SI (Metric)  Millimeter  mm    SI (Metric)  Centimeter  cm    SI (Metric)  Meter  m    SI (Metric)  Kilometer  km    U.S. Customary  Inch  in    U.S. Customary  Foot \/ Feet  ft    U.S. Customary  Mile  mi     And here are some conversions between the two:   Common Length Conversions    Starting Unit  Target Unit  Conversion Factor \/ Exact Value    1 foot ( ft )  Inches     1 yard ( yd )  Feet     1 mile ( mi )  Feet     1 inch ( in )  Centimeters  (Exact)    1 foot ( ft )  Meters  (Exact)    1 mile ( mi )  Kilometers  (Exact)     Note that all of these are exact values. Within the U.S. Customary system, the conversions are exact by definition. The conversions between the U.S. Customary and SI systems are also exact because they are defined to be that way.    Mass and Weight Units   Common Units of Mass and Weight    System  Unit Name  Abbreviation    SI (Metric)  Milligram  mg    SI (Metric)  Gram  g    SI (Metric)  Kilogram  kg    U.S. Customary  Ounce  oz    U.S. Customary  Pound  lb      Common Mass and Weight Conversions    Starting Unit  Target Unit  Conversion Factor \/ Value    1 pound ( lb )  Ounces     1 ton ( ton )  Pounds  (Short ton)    1 ounce ( oz )  Grams     1 pound ( lb )  Kilograms     1 ton ( ton )  Kilograms     1 metric ton ( t )  Pounds        Time Units   Common Units of Time    System  Unit Name  Abbreviation    Universal  Second  s or sec    Universal  Minute  min    Universal  Hour  hr    Universal  Day  d      Common Time Conversions    Starting Unit  Target Unit  Conversion Factor \/ Value    1 minute ( min )  Seconds     1 hour ( hr )  Minutes     1 day ( d )  Hours     1 week ( wk )  Days     1 year ( yr )  Days  (Standard calendar year)    1 year ( yr )  Weeks        Volume Units   Common Units of Volume    System  Unit Name  Abbreviation    SI (Metric)  Milliliter  mL    SI (Metric)  Liter  L    U.S. Customary  Fluid Ounce  fl oz    U.S. Customary  Cup  c    U.S. Customary  Gallon  gal      Common Volume and Capacity Conversions    Starting Unit  Target Unit  Conversion Factor \/ Value    1 tablespoon ( tbsp )  Teaspoons     1 fluid ounce ( fl oz )  Tablespoons     1 cup ( c )  Fluid Ounces     1 pint ( pt )  Cups     1 quart ( qt )  Pints     1 gallon ( gal )  Quarts     1 fluid ounce ( fl oz )  Milliliters     1 liter ( L )  Quarts     1 milliliter ( mL )  Cubic Centimeters  (Exact)        Exercises    For each of the following using dimensional analysis to perform the unit conversion. Use only the unit conversion in the tables in .    A piece of lumber is cut to a length of 4.5 feet. Convert this length into inches.    A package weighs 3.5 pounds. How many ounces is this package?    An experiment takes 2.5 hours to run. Convert this duration into minutes.    A recipe calls for 6 tablespoons of olive oil. How many teaspoons of olive oil is this?    A laboratory sample has a mass of 1,250 grams. Express this mass in kilograms.      Perform the following unit conversions using dimensional analysis. Use only the unit conversion in the tables in . Note these will take multiple steps.     A high-speed maglev train travels at a constant speed of 432 kilometers per hour ( km\/hr ). Convert this speed into feet per second ( ft\/s ).      An industrial cleanroom floor layout measures exactly 180 square meters ( m^2 ). Determine the equivalent surface area of the floor in square inches ( in^2 ).      The density of a specialized polymer compound is determined to be 1.25 grams per cubic centimeter ( g\/cm^3 ). Calculate its equivalent density in pounds per cubic foot ( lb\/ft^3 ).      A water filtration system processes fluid at a rate of 45 gallons per minute ( gal\/min ). Convert this volumetric flow rate into liters per second ( L\/s ).      A microfluidic channel has a total internal volume capacity of 850 cubic millimeters ( mm^3 ). Express this fluid capacity in fluid ounces ( fl oz ).      "
},
{
  "id": "sect-convert-units-2",
  "level": "2",
  "url": "sect-convert-units.html#sect-convert-units-2",
  "type": "Objectives",
  "number": "8.3",
  "title": "",
  "body": "   Understand the dimensional analysis method of converting units.    Understand how dimensional analysis works for powers of unit conversions.    Understand the metric system and how prefix values change the unit quantity.    "
},
{
  "id": "subsect-dimensional-analysis-5",
  "level": "2",
  "url": "sect-convert-units.html#subsect-dimensional-analysis-5",
  "type": "Example",
  "number": "8.3.1",
  "title": "",
  "body": "  Convert 8 quarts to milliliters. You should use the fact that 1 quart is 0.94635 liters and 1 liter is 1000 mL.    First, we are going to start with 8 quarts. The next step is to use a fraction to multiply. These could be either and we select the second one because the unit quart is in the denominator and will cancel the unit that we are starting with. That is,   We now covert liters to milliliters (mL) using the conversion: .  If we need to do multiple steps like this, we can do these in a single step as in the following: .   "
},
{
  "id": "subsect-dimensional-analysis-6",
  "level": "2",
  "url": "sect-convert-units.html#subsect-dimensional-analysis-6",
  "type": "Note",
  "number": "8.3.2",
  "title": "Using Calculators with Unit Conversion.",
  "body": " Using Calculators with Unit Conversion  In the problem above and throughout this section, we have used a calculator to perform the operations (unless it can be done with mental math). The point of this is to do unit conversion and not on the arithmetic operations.  "
},
{
  "id": "subsect-dimensional-analysis-8",
  "level": "2",
  "url": "sect-convert-units.html#subsect-dimensional-analysis-8",
  "type": "Example",
  "number": "8.3.3",
  "title": "",
  "body": "  Convert 3.25 pounds to grams (g). Use the following: 1 kilogram (kg) is 2.2046 pounds (lb) and 1 kg is 1000 grams (g).    We start with 3.25 pounds, because that's what we want to convert from. Then we use each factor with the units set to cancel:    "
},
{
  "id": "subsect-dimensional-analysis-10",
  "level": "2",
  "url": "sect-convert-units.html#subsect-dimensional-analysis-10",
  "type": "Example",
  "number": "8.3.4",
  "title": "",
  "body": "  Convert 88 feet per second to miles per hour. Recall that 60 seconds = 1 minutes, 60 minutes = 1 hour and 5280 feet = 1 mile.    We start with what is given and that is 88 feet per second. We have the following relationships We will then use the fraction formed from these to cover to miles per hour. and notice that all of the units cancel except for miles on top and hours on the bottom, which is what we want.   "
},
{
  "id": "subsect-dimensional-analysis-12",
  "level": "2",
  "url": "sect-convert-units.html#subsect-dimensional-analysis-12",
  "type": "Example",
  "number": "8.3.5",
  "title": "",
  "body": "  On a given day 1.87382 U.S. Dollar (USD) trades for 1 british pound (£). If you exchange $100 (USD), how many pounds would that be.    In this example, we use the relationship that and then multiply the given amount $100 by the right fraction. which has been rounded next hundredth of a pound (also called a pence).   "
},
{
  "id": "subsec-advanced-dimensional-analysis-7",
  "level": "2",
  "url": "sect-convert-units.html#subsec-advanced-dimensional-analysis-7",
  "type": "Example",
  "number": "8.3.6",
  "title": "",
  "body": "  The interior of an rectangular cooler is 0.40 m by 0.20 m by 0.25 m on its three sides. Find the number of liters (L) for the cooler. Use the fact that 1 m = 100 cm, 1 mL (milliliter) = 1 and 1000 mL = 1 L.  Note: liters is a common measurement of volume for things like coolers and backpacks.    We first need to calculate the volume of the cooler and this is   We then start with this and multiply by the creative forms of 1 with the unit conversion. and we note that the second term if cubed. Therefore this can be written: so the cooler has a volume of 200 liters.   "
},
{
  "id": "table-metric-prefixes",
  "level": "2",
  "url": "sect-convert-units.html#table-metric-prefixes",
  "type": "Table",
  "number": "8.3.7",
  "title": "Standard Metric System Prefixes and Multipliers",
  "body": " Standard Metric System Prefixes and Multipliers    Prefix  Symbol  Exponential Form  Decimal Scale \/ Word Value    Pico  p   0.000000000001 (One trillionth)    Nano  n   0.000000001 (One billionth)    Micro  µ   0.000001 (One millionth)    Milli  m   0.001 (One thousandth)    Centi  c   0.01 (One hundredth)    Deci  d   0.1 (One tenth)    Base Unit  —   1 (One)    Deka  da   10 (Ten)    Hecto  h   100 (One hundred)    Kilo  k   1,000 (One thousand)    Mega  M   1,000,000 (One million)    Giga  G   1,000,000,000 (One billion)    Tera  T   1,000,000,000,000 (One trillion)    Peta  P   One quadrillion    "
},
{
  "id": "table-units-length",
  "level": "2",
  "url": "sect-convert-units.html#table-units-length",
  "type": "Table",
  "number": "8.3.8",
  "title": "Common Units of Length",
  "body": " Common Units of Length    System  Unit Name  Abbreviation    SI (Metric)  Millimeter  mm    SI (Metric)  Centimeter  cm    SI (Metric)  Meter  m    SI (Metric)  Kilometer  km    U.S. Customary  Inch  in    U.S. Customary  Foot \/ Feet  ft    U.S. Customary  Mile  mi    "
},
{
  "id": "table-length-conversions",
  "level": "2",
  "url": "sect-convert-units.html#table-length-conversions",
  "type": "Table",
  "number": "8.3.9",
  "title": "Common Length Conversions",
  "body": " Common Length Conversions    Starting Unit  Target Unit  Conversion Factor \/ Exact Value    1 foot ( ft )  Inches     1 yard ( yd )  Feet     1 mile ( mi )  Feet     1 inch ( in )  Centimeters  (Exact)    1 foot ( ft )  Meters  (Exact)    1 mile ( mi )  Kilometers  (Exact)    "
},
{
  "id": "table-units-mass-weight",
  "level": "2",
  "url": "sect-convert-units.html#table-units-mass-weight",
  "type": "Table",
  "number": "8.3.10",
  "title": "Common Units of Mass and Weight",
  "body": " Common Units of Mass and Weight    System  Unit Name  Abbreviation    SI (Metric)  Milligram  mg    SI (Metric)  Gram  g    SI (Metric)  Kilogram  kg    U.S. Customary  Ounce  oz    U.S. Customary  Pound  lb    "
},
{
  "id": "table-mass-weight-conversions",
  "level": "2",
  "url": "sect-convert-units.html#table-mass-weight-conversions",
  "type": "Table",
  "number": "8.3.11",
  "title": "Common Mass and Weight Conversions",
  "body": " Common Mass and Weight Conversions    Starting Unit  Target Unit  Conversion Factor \/ Value    1 pound ( lb )  Ounces     1 ton ( ton )  Pounds  (Short ton)    1 ounce ( oz )  Grams     1 pound ( lb )  Kilograms     1 ton ( ton )  Kilograms     1 metric ton ( t )  Pounds     "
},
{
  "id": "table-units-time",
  "level": "2",
  "url": "sect-convert-units.html#table-units-time",
  "type": "Table",
  "number": "8.3.12",
  "title": "Common Units of Time",
  "body": " Common Units of Time    System  Unit Name  Abbreviation    Universal  Second  s or sec    Universal  Minute  min    Universal  Hour  hr    Universal  Day  d    "
},
{
  "id": "table-time-conversions",
  "level": "2",
  "url": "sect-convert-units.html#table-time-conversions",
  "type": "Table",
  "number": "8.3.13",
  "title": "Common Time Conversions",
  "body": " Common Time Conversions    Starting Unit  Target Unit  Conversion Factor \/ Value    1 minute ( min )  Seconds     1 hour ( hr )  Minutes     1 day ( d )  Hours     1 week ( wk )  Days     1 year ( yr )  Days  (Standard calendar year)    1 year ( yr )  Weeks     "
},
{
  "id": "table-units-volume",
  "level": "2",
  "url": "sect-convert-units.html#table-units-volume",
  "type": "Table",
  "number": "8.3.14",
  "title": "Common Units of Volume",
  "body": " Common Units of Volume    System  Unit Name  Abbreviation    SI (Metric)  Milliliter  mL    SI (Metric)  Liter  L    U.S. Customary  Fluid Ounce  fl oz    U.S. Customary  Cup  c    U.S. Customary  Gallon  gal    "
},
{
  "id": "table-volume-conversions",
  "level": "2",
  "url": "sect-convert-units.html#table-volume-conversions",
  "type": "Table",
  "number": "8.3.15",
  "title": "Common Volume and Capacity Conversions",
  "body": " Common Volume and Capacity Conversions    Starting Unit  Target Unit  Conversion Factor \/ Value    1 tablespoon ( tbsp )  Teaspoons     1 fluid ounce ( fl oz )  Tablespoons     1 cup ( c )  Fluid Ounces     1 pint ( pt )  Cups     1 quart ( qt )  Pints     1 gallon ( gal )  Quarts     1 fluid ounce ( fl oz )  Milliliters     1 liter ( L )  Quarts     1 milliliter ( mL )  Cubic Centimeters  (Exact)    "
},
{
  "id": "exercises-unit-conversions-2",
  "level": "2",
  "url": "sect-convert-units.html#exercises-unit-conversions-2",
  "type": "Exercise",
  "number": "8.3.4.1",
  "title": "",
  "body": "  For each of the following using dimensional analysis to perform the unit conversion. Use only the unit conversion in the tables in .    A piece of lumber is cut to a length of 4.5 feet. Convert this length into inches.    A package weighs 3.5 pounds. How many ounces is this package?    An experiment takes 2.5 hours to run. Convert this duration into minutes.    A recipe calls for 6 tablespoons of olive oil. How many teaspoons of olive oil is this?    A laboratory sample has a mass of 1,250 grams. Express this mass in kilograms.   "
},
{
  "id": "exercise-advanced-conversions",
  "level": "2",
  "url": "sect-convert-units.html#exercise-advanced-conversions",
  "type": "Exercise",
  "number": "8.3.4.2",
  "title": "",
  "body": "  Perform the following unit conversions using dimensional analysis. Use only the unit conversion in the tables in . Note these will take multiple steps.     A high-speed maglev train travels at a constant speed of 432 kilometers per hour ( km\/hr ). Convert this speed into feet per second ( ft\/s ).      An industrial cleanroom floor layout measures exactly 180 square meters ( m^2 ). Determine the equivalent surface area of the floor in square inches ( in^2 ).      The density of a specialized polymer compound is determined to be 1.25 grams per cubic centimeter ( g\/cm^3 ). Calculate its equivalent density in pounds per cubic foot ( lb\/ft^3 ).      A water filtration system processes fluid at a rate of 45 gallons per minute ( gal\/min ). Convert this volumetric flow rate into liters per second ( L\/s ).      A microfluidic channel has a total internal volume capacity of 850 cubic millimeters ( mm^3 ). Express this fluid capacity in fluid ounces ( fl oz ).    "
},
{
  "id": "sect-rates",
  "level": "1",
  "url": "sect-rates.html",
  "type": "Section",
  "number": "8.4",
  "title": "Rates, Speed, and Arithmetic with Units",
  "body": " Rates, Speed, and Arithmetic with Units     Understand the notion of a rate.    Find the rate given two quantities.   Use rates in solving problems.    Solving Joint Work Rate Problems.      How would you solve: If you drive 30 miles per hour, how far do you drive in 2 hours? .  This is an example of a rate problem with the rate 30 miles per hour. Hopefully this problem is intuitive enough to realize the answer is 60 miles (multiply 30 and 2). But other rate problems might require dividing the numbers. How do you know what is appropriate?  The problems in this section will use the Dimensional Analysis technique from .    Rates  With the example above, you might remember that a rate tells you how fast (or slow) something is occurring in that it is some quantity per some unit of time. The example above is miles per hour, but other rates could in feet per second, or cupcakes per week or gallons per minute.    Janette can ride her bicycle 3 miles in 20 minutes. What is her speed (rate) is miles per minute? In miles per hour?    However, we're going to broaden this idea of rate requiring a unit of time to the following:   Rate   A rate is a quotient of two quantities with different specified units.    Using this definition of rate, 10 feet per second, 500 cupcakes per week and 15 gallons per minutes all fit this definition, however, the following work as well:   We desire to solve problems that have rates that fit these as well.   Solving Problems with Rates  Consider a word problem in which units play a role. There are generally two different pieces of information in the problem.    rates which are often written as sentences that given how a unit represents some other unit.     given information , which is often in the question of the problem. This should have a unit as well.     To solve this we will use Dimensional Analysis like the previous section as:   Write all rates as fractions with the units.    Start with the given information (a number with a unit).    Multiply the quantity in #2 by rates, to ensure that the units cancel resulting in the correct unit in the answer.      The steps above probably seem quite vague, so we spend the rest of this section covering examples in detail.    If you drive 30 miles per hour, how far do you drive in 2 hours?    First, we need to identify the rates and the given information. In this case, the rate is 30 miles per hour and is written:   The given information is 2 hours. To solve this, we start with this quantity and multiply by rates: where it is important that the unit hours cancels.    Since rates include units, sometimes it's important to do unit conversion as well. The next couple of examples show this.    You are on a road trip and are driving 40 miles per hour.     How far do you drive in 15 minutes?    Clearly, the main rate given in the problem has the relationship:   However if we start with the given information of 15 minutes, the rate doesn't have minutes, so we need the conversion 1 hour = 60 minutes as well   And the units cancel correctly, but you show also remember from that an efficient way to find the answer is first cancel common terms and   So you drive 10 miles in 15 minutes.      How long would it take you to drive 100 miles?    For the second question of how long it would take to drive 100 miles, this is the given information, so we start with this and the rate. where 1) notice that the units cancel giving the answer in hours and 2) we have used the reciprocal of the rate as given in the problem to get the units to cancel.  The answer is or probably easier to say hours.       A bakery makes 60 cupcakes in an hour. The bakery is open 8 hours each day. How many cupcakes can they make in 1 week?    There are two rates in this problem. We can write them as   The starting info is 1 week and from the question, we're looking for the unit of cupcakes . Before we begin, we note that the starting unit of week is not in either of the rates, so we will need the conversion as well. and some mental math or using the algorithm finishes the problem. The bakery can make 3360 cupcakes in a week.      A hose can fill a 5 gallon bucket in 15 minutes. In how many hours, will it take the hose to fill a 600 gallon pool?    In this case we start with 600 gallons and convert to hours. There is also one rate given in the problem. . Note that we need a conversion from minutes to hours so will also need to use . and again, use factoring within the fraction to simplify the final operation which shows that it will take 30 hours to fill the pool.    The previous examples used rates with time, however as we noted, any types can work as the next example shows.    A pattern for a shirt uses fabric. 4 shirts require 10 yd of fabric. How many shirts can be made with 60 yd ?    First, note that the rate in this problem is and we start with 60 yd and convert to the unit shirts .       A brine mixture for a Thanksgiving turkey calls for 1\/3 cup of salt for every quart of water. How much salt is needed for a 4 gallon brine?    The primary rate from the problem is . Note even though both are volume measure, the quantity of salt or water is needed with the unit.  Also, we will need the volume conversion of , then start with the given quantity of and then use the rates in the proper form: or as a mixed number, cups salt.      Joint Work Rate Problems  Another common problem involving rates is that of combining them, such as if two people are doing the same job, how long will it take if they work together? Consider the following example:    Paul can do a job in 2 hours, whereas Quinn can do the same job in 1 hour. How long will it take for them to do the job together?    Maybe these don't seem like rates, but we can write them as   Since we want to combine these, it seems natural to add them, but since rates work as two possible fractions, let's look at both of these.     Option A       Option B:      and since the units are equal for the two rates (fraction), it's fine to add them, but remember to add them as fractions. Finding the resulting rate is:     Option A:       Option B:        Which is the correct combined rates? Let's think about it a bit. It should be that if two people do a job, that together will be faster than either along. In Option A, they can do jobs (or jobs) in one hour, which is faster than either by themselves. In Option B, the will take 3 hours to do the job, which is slower. Clearly Option A is correct.  Finally, to finish the problem, we start with the unit 1 job and find the amount of time as we have done with other problems in this section. where we have also introduce the unit conversion of hours to minutes.  Since there are two ways of adding rates (either the rates as given or flipped), here's a good rule of thumb.   Combining Rates  If there are two rates that are to be combined in the sense of completing a task, add the rates with the time unit in the denominator.   This should help us in combining rates and we'll see this in the following example.    Brandon can shovel a driveway in 30 minutes. Eric can shovel the same driveway in 60 minutes. If they work together, how long will it take them?    The rates in this problem are and if we take the rule of thumb above, we'll add them with the minutes in the denominator.   Lastly, we'll start with 1 driveway and convert to minutes: so it will take them 20 minutes to shovel the driveway.    This last example shows that this also works for more than 2 rates.    Bernard can paint a house in 30 hours. Cindy can paint the same house in 20 hours and Declan can do it in 40 hours. How long will it take to paint the house together?    In this case, there are three rates: and using the rate combining rule of thumb we'll add them with hours in the denominator:   Recall that to make this problem easier use the LCM of these three numbers, or 120   Finally, to answer the question, we'll start with 1 house and multiply by the rate: and converting this to a mixed number, it will take them hours to paint the house.        Solve each of the following introductory rate problems. Ensure your final answers include the correct compound units.     A delivery drone flies a straight-line distance of 24 miles in exactly 45 minutes. Calculate the average speed of the drone in miles per hour ( mi\/hr ).      A garden hose fills a 15-gallon backyard pool in exactly 6 minutes. Determine the volumetric flow rate of the water in gallons per minute ( gal\/min ).      An automated manufacturing assembly line produces 1,800 microchips during an 8-hour shift. Find the production rate of the line in microchips per minute.      A backup generator burns through 12 liters of diesel fuel over the course of 5 hours of continuous operation. What is the generator's fuel consumption rate in liters per hour ( L\/hr )?      A computer network connection downloads a 450-megabyte ( MB ) video file in exactly 12 seconds. Calculate the average data transfer speed in megabytes per second ( MB\/s ).       Use the given rates in each scenario to isolate and calculate the missing non-rate quantity. Pay close attention to unit cancellations.     A commercial airliner cruises at a constant speed of 540 miles per hour ( mi\/hr ). If the flight lasts for exactly 3.5 hours, what is the total distance traveled by the aircraft?      A chemical processing pump dispenses liquid reactant at a steady volumetric flow rate of 2.4 liters per minute ( L\/min ). How many total liters of reactant are pumped into a mixing vat during a 15-minute production cycle?      An automated industrial packaging machine wraps boxes at a consistent rate of 45 boxes per minute. How many minutes will it take for the machine to wrap a bulk order of 1,125 boxes?      A localized irrigation system leaks water into the soil at an average rate of 150 milliliters per hour ( mL\/hr ). If the leak goes unnoticed for exactly 4 days, what is the total volume of water lost in milliliters?      A cloud server uploads backup data over a fiber-optic link at a sustained speed of 18 megabytes per second ( MB\/s ). If the upload process runs continuously for exactly 5 minutes, determine the total size of the uploaded data package in megabytes ( MB ).       Solve each of the following complex rate problems. Each scenario requires performing multi-step dimensional analysis and unit conversions to isolate the requested non-rate quantity.     A research meteorologist tracks a severe storm front advancing at a steady speed of meters per second ( m\/s ). Determine how many total miles ( mi ) the storm front will travel if it maintains this speed for exactly hours.      An industrial drainage pipe discharges wastewater into a holding pond at a rate of gallons per second ( gal\/s ). If the pipe runs continuously for hours, calculate the total volume of water discharged in cubic meters ( ).      A mining conveyor belt loads crushed ore onto a cargo ship at a continuous rate of pounds per minute ( lb\/min ). How many hours ( hr ) will it take for the conveyor system to move a bulk payload weighing exactly metric tons ( t )?      A hospital intravenous (IV) pump is calibrated to deliver a saline solution to a patient at a steady rate of drops per minute. Assuming the IV tubing factor dictates that exactly drops equal milliliter ( mL ), how many total liters ( L ) of solution will the patient receive over a continuous -hour period?      A commercial solar array generates electrical power at an average rate of kilowatts ( kW ), where . Calculate the total amount of energy generated by the array in megajoules ( MJ ) during hours of peak afternoon sunlight.       Solve the following rate problems where the constant rate represents a spatial, structural, or material ratio rather than a change over time.     An agricultural fertilizer mixture calls for milliliter ( mL ) of liquid concentrate for every liters ( L ) of water. How many total milliliters ( mL ) of concentrate are required to mix a large batch containing liters ( L ) of water?      A heavy-duty steel suspension cable has a material linear density rate of ounces ( oz ) of weight for every inches ( in ) of length. Calculate the total weight of this cable in pounds ( lb ) if a construction project requires a continuous span of yards ( yd ).      An industrial asphalt sealant specifies an application rate of gallons ( gal ) of sealant for every square feet ( ft^2 ) of pavement surface area. If a commercial parking lot measuring square meters ( m^2 ) needs to be coated, how many liters ( L ) of sealant must be purchased?      A mechanical winch system pulls in centimeters ( cm ) of steel cable for every complete revolutions of its drive gear. Determine how many total yards ( yd ) of cable will be reeled in if the drive motor spins the gear a total of times.       Solve the following joint work rate problems by determining individual production rates per unit of time and combining them.     Sarah can grade a stack of research papers in hours, while David takes hours to grade the exact same size stack. If they collaborate and grade the single stack of papers together, how many hours will it take them?      Three 3D printers are working on identical manufacturing components. Printer A can finish a part in hours, Printer B takes hours, and Printer C takes hours. If all three printers are turned on simultaneously to manufacture a single component together, how many hours will the print take?      Working together, two automated software scripts can scan a company database for security vulnerabilities in minutes. If Script 1 runs alone, it takes exactly minutes to complete the scan by itself. How many minutes would it take Script 2 to scan the database alone?      Elena can stock the shelves of a grocery store aisle in minutes, and Marcus can stock the same aisle in minutes. Elena begins stocking the aisle alone and works for exactly minutes. At that point, Marcus joins her, and they finish stocking the rest of the aisle together. How many additional minutes will it take them to finish the job after Marcus arrives?      "
},
{
  "id": "sect-rates-2",
  "level": "2",
  "url": "sect-rates.html#sect-rates-2",
  "type": "Objectives",
  "number": "8.4",
  "title": "",
  "body": "   Understand the notion of a rate.    Find the rate given two quantities.   Use rates in solving problems.    Solving Joint Work Rate Problems.    "
},
{
  "id": "subsect-rates-3",
  "level": "2",
  "url": "sect-rates.html#subsect-rates-3",
  "type": "Example",
  "number": "8.4.1",
  "title": "",
  "body": "  Janette can ride her bicycle 3 miles in 20 minutes. What is her speed (rate) is miles per minute? In miles per hour?   "
},
{
  "id": "subsect-rates-5",
  "level": "2",
  "url": "sect-rates.html#subsect-rates-5",
  "type": "Definition",
  "number": "8.4.2",
  "title": "Rate.",
  "body": " Rate   A rate is a quotient of two quantities with different specified units.   "
},
{
  "id": "subsect-rates-8",
  "level": "2",
  "url": "sect-rates.html#subsect-rates-8",
  "type": "Note",
  "number": "8.4.3",
  "title": "Solving Problems with Rates.",
  "body": " Solving Problems with Rates  Consider a word problem in which units play a role. There are generally two different pieces of information in the problem.    rates which are often written as sentences that given how a unit represents some other unit.     given information , which is often in the question of the problem. This should have a unit as well.     To solve this we will use Dimensional Analysis like the previous section as:   Write all rates as fractions with the units.    Start with the given information (a number with a unit).    Multiply the quantity in #2 by rates, to ensure that the units cancel resulting in the correct unit in the answer.     "
},
{
  "id": "subsect-rates-10",
  "level": "2",
  "url": "sect-rates.html#subsect-rates-10",
  "type": "Example",
  "number": "8.4.4",
  "title": "",
  "body": "  If you drive 30 miles per hour, how far do you drive in 2 hours?    First, we need to identify the rates and the given information. In this case, the rate is 30 miles per hour and is written:   The given information is 2 hours. To solve this, we start with this quantity and multiply by rates: where it is important that the unit hours cancels.   "
},
{
  "id": "subsect-rates-12",
  "level": "2",
  "url": "sect-rates.html#subsect-rates-12",
  "type": "Example",
  "number": "8.4.5",
  "title": "",
  "body": "  You are on a road trip and are driving 40 miles per hour.     How far do you drive in 15 minutes?    Clearly, the main rate given in the problem has the relationship:   However if we start with the given information of 15 minutes, the rate doesn't have minutes, so we need the conversion 1 hour = 60 minutes as well   And the units cancel correctly, but you show also remember from that an efficient way to find the answer is first cancel common terms and   So you drive 10 miles in 15 minutes.      How long would it take you to drive 100 miles?    For the second question of how long it would take to drive 100 miles, this is the given information, so we start with this and the rate. where 1) notice that the units cancel giving the answer in hours and 2) we have used the reciprocal of the rate as given in the problem to get the units to cancel.  The answer is or probably easier to say hours.    "
},
{
  "id": "subsect-rates-13",
  "level": "2",
  "url": "sect-rates.html#subsect-rates-13",
  "type": "Example",
  "number": "8.4.6",
  "title": "",
  "body": "  A bakery makes 60 cupcakes in an hour. The bakery is open 8 hours each day. How many cupcakes can they make in 1 week?    There are two rates in this problem. We can write them as   The starting info is 1 week and from the question, we're looking for the unit of cupcakes . Before we begin, we note that the starting unit of week is not in either of the rates, so we will need the conversion as well. and some mental math or using the algorithm finishes the problem. The bakery can make 3360 cupcakes in a week.   "
},
{
  "id": "subsect-rates-14",
  "level": "2",
  "url": "sect-rates.html#subsect-rates-14",
  "type": "Example",
  "number": "8.4.7",
  "title": "",
  "body": "  A hose can fill a 5 gallon bucket in 15 minutes. In how many hours, will it take the hose to fill a 600 gallon pool?    In this case we start with 600 gallons and convert to hours. There is also one rate given in the problem. . Note that we need a conversion from minutes to hours so will also need to use . and again, use factoring within the fraction to simplify the final operation which shows that it will take 30 hours to fill the pool.   "
},
{
  "id": "subsect-rates-16",
  "level": "2",
  "url": "sect-rates.html#subsect-rates-16",
  "type": "Example",
  "number": "8.4.8",
  "title": "",
  "body": "  A pattern for a shirt uses fabric. 4 shirts require 10 yd of fabric. How many shirts can be made with 60 yd ?    First, note that the rate in this problem is and we start with 60 yd and convert to the unit shirts .    "
},
{
  "id": "subsect-rates-17",
  "level": "2",
  "url": "sect-rates.html#subsect-rates-17",
  "type": "Example",
  "number": "8.4.9",
  "title": "",
  "body": "  A brine mixture for a Thanksgiving turkey calls for 1\/3 cup of salt for every quart of water. How much salt is needed for a 4 gallon brine?    The primary rate from the problem is . Note even though both are volume measure, the quantity of salt or water is needed with the unit.  Also, we will need the volume conversion of , then start with the given quantity of and then use the rates in the proper form: or as a mixed number, cups salt.   "
},
{
  "id": "sect-rates-5-3",
  "level": "2",
  "url": "sect-rates.html#sect-rates-5-3",
  "type": "Example",
  "number": "8.4.10",
  "title": "",
  "body": "  Paul can do a job in 2 hours, whereas Quinn can do the same job in 1 hour. How long will it take for them to do the job together?   "
},
{
  "id": "sect-rates-5-11",
  "level": "2",
  "url": "sect-rates.html#sect-rates-5-11",
  "type": "Note",
  "number": "8.4.11",
  "title": "Combining Rates.",
  "body": " Combining Rates  If there are two rates that are to be combined in the sense of completing a task, add the rates with the time unit in the denominator.  "
},
{
  "id": "sect-rates-5-13",
  "level": "2",
  "url": "sect-rates.html#sect-rates-5-13",
  "type": "Example",
  "number": "8.4.12",
  "title": "",
  "body": "  Brandon can shovel a driveway in 30 minutes. Eric can shovel the same driveway in 60 minutes. If they work together, how long will it take them?    The rates in this problem are and if we take the rule of thumb above, we'll add them with the minutes in the denominator.   Lastly, we'll start with 1 driveway and convert to minutes: so it will take them 20 minutes to shovel the driveway.   "
},
{
  "id": "sect-rates-5-15",
  "level": "2",
  "url": "sect-rates.html#sect-rates-5-15",
  "type": "Example",
  "number": "8.4.13",
  "title": "",
  "body": "  Bernard can paint a house in 30 hours. Cindy can paint the same house in 20 hours and Declan can do it in 40 hours. How long will it take to paint the house together?    In this case, there are three rates: and using the rate combining rule of thumb we'll add them with hours in the denominator:   Recall that to make this problem easier use the LCM of these three numbers, or 120   Finally, to answer the question, we'll start with 1 house and multiply by the rate: and converting this to a mixed number, it will take them hours to paint the house.   "
},
{
  "id": "exercise-simple-rate-problems",
  "level": "2",
  "url": "sect-rates.html#exercise-simple-rate-problems",
  "type": "Exercise",
  "number": "8.4.3.1",
  "title": "",
  "body": "  Solve each of the following introductory rate problems. Ensure your final answers include the correct compound units.     A delivery drone flies a straight-line distance of 24 miles in exactly 45 minutes. Calculate the average speed of the drone in miles per hour ( mi\/hr ).      A garden hose fills a 15-gallon backyard pool in exactly 6 minutes. Determine the volumetric flow rate of the water in gallons per minute ( gal\/min ).      An automated manufacturing assembly line produces 1,800 microchips during an 8-hour shift. Find the production rate of the line in microchips per minute.      A backup generator burns through 12 liters of diesel fuel over the course of 5 hours of continuous operation. What is the generator's fuel consumption rate in liters per hour ( L\/hr )?      A computer network connection downloads a 450-megabyte ( MB ) video file in exactly 12 seconds. Calculate the average data transfer speed in megabytes per second ( MB\/s ).    "
},
{
  "id": "exercise-inverse-rate-problems",
  "level": "2",
  "url": "sect-rates.html#exercise-inverse-rate-problems",
  "type": "Exercise",
  "number": "8.4.3.2",
  "title": "",
  "body": "  Use the given rates in each scenario to isolate and calculate the missing non-rate quantity. Pay close attention to unit cancellations.     A commercial airliner cruises at a constant speed of 540 miles per hour ( mi\/hr ). If the flight lasts for exactly 3.5 hours, what is the total distance traveled by the aircraft?      A chemical processing pump dispenses liquid reactant at a steady volumetric flow rate of 2.4 liters per minute ( L\/min ). How many total liters of reactant are pumped into a mixing vat during a 15-minute production cycle?      An automated industrial packaging machine wraps boxes at a consistent rate of 45 boxes per minute. How many minutes will it take for the machine to wrap a bulk order of 1,125 boxes?      A localized irrigation system leaks water into the soil at an average rate of 150 milliliters per hour ( mL\/hr ). If the leak goes unnoticed for exactly 4 days, what is the total volume of water lost in milliliters?      A cloud server uploads backup data over a fiber-optic link at a sustained speed of 18 megabytes per second ( MB\/s ). If the upload process runs continuously for exactly 5 minutes, determine the total size of the uploaded data package in megabytes ( MB ).    "
},
{
  "id": "exercise-advanced-rate-conversion-problems",
  "level": "2",
  "url": "sect-rates.html#exercise-advanced-rate-conversion-problems",
  "type": "Exercise",
  "number": "8.4.3.3",
  "title": "",
  "body": "  Solve each of the following complex rate problems. Each scenario requires performing multi-step dimensional analysis and unit conversions to isolate the requested non-rate quantity.     A research meteorologist tracks a severe storm front advancing at a steady speed of meters per second ( m\/s ). Determine how many total miles ( mi ) the storm front will travel if it maintains this speed for exactly hours.      An industrial drainage pipe discharges wastewater into a holding pond at a rate of gallons per second ( gal\/s ). If the pipe runs continuously for hours, calculate the total volume of water discharged in cubic meters ( ).      A mining conveyor belt loads crushed ore onto a cargo ship at a continuous rate of pounds per minute ( lb\/min ). How many hours ( hr ) will it take for the conveyor system to move a bulk payload weighing exactly metric tons ( t )?      A hospital intravenous (IV) pump is calibrated to deliver a saline solution to a patient at a steady rate of drops per minute. Assuming the IV tubing factor dictates that exactly drops equal milliliter ( mL ), how many total liters ( L ) of solution will the patient receive over a continuous -hour period?      A commercial solar array generates electrical power at an average rate of kilowatts ( kW ), where . Calculate the total amount of energy generated by the array in megajoules ( MJ ) during hours of peak afternoon sunlight.    "
},
{
  "id": "exercise-spatial-non-time-rates",
  "level": "2",
  "url": "sect-rates.html#exercise-spatial-non-time-rates",
  "type": "Exercise",
  "number": "8.4.3.4",
  "title": "",
  "body": "  Solve the following rate problems where the constant rate represents a spatial, structural, or material ratio rather than a change over time.     An agricultural fertilizer mixture calls for milliliter ( mL ) of liquid concentrate for every liters ( L ) of water. How many total milliliters ( mL ) of concentrate are required to mix a large batch containing liters ( L ) of water?      A heavy-duty steel suspension cable has a material linear density rate of ounces ( oz ) of weight for every inches ( in ) of length. Calculate the total weight of this cable in pounds ( lb ) if a construction project requires a continuous span of yards ( yd ).      An industrial asphalt sealant specifies an application rate of gallons ( gal ) of sealant for every square feet ( ft^2 ) of pavement surface area. If a commercial parking lot measuring square meters ( m^2 ) needs to be coated, how many liters ( L ) of sealant must be purchased?      A mechanical winch system pulls in centimeters ( cm ) of steel cable for every complete revolutions of its drive gear. Determine how many total yards ( yd ) of cable will be reeled in if the drive motor spins the gear a total of times.    "
},
{
  "id": "exercise-joint-work-rates",
  "level": "2",
  "url": "sect-rates.html#exercise-joint-work-rates",
  "type": "Exercise",
  "number": "8.4.3.5",
  "title": "",
  "body": "  Solve the following joint work rate problems by determining individual production rates per unit of time and combining them.     Sarah can grade a stack of research papers in hours, while David takes hours to grade the exact same size stack. If they collaborate and grade the single stack of papers together, how many hours will it take them?      Three 3D printers are working on identical manufacturing components. Printer A can finish a part in hours, Printer B takes hours, and Printer C takes hours. If all three printers are turned on simultaneously to manufacture a single component together, how many hours will the print take?      Working together, two automated software scripts can scan a company database for security vulnerabilities in minutes. If Script 1 runs alone, it takes exactly minutes to complete the scan by itself. How many minutes would it take Script 2 to scan the database alone?      Elena can stock the shelves of a grocery store aisle in minutes, and Marcus can stock the same aisle in minutes. Elena begins stocking the aisle alone and works for exactly minutes. At that point, Marcus joins her, and they finish stocking the rest of the aisle together. How many additional minutes will it take them to finish the job after Marcus arrives?    "
},
{
  "id": "sect-negative-numbers",
  "level": "1",
  "url": "sect-negative-numbers.html",
  "type": "Section",
  "number": "9.1",
  "title": "Negative Numbers",
  "body": " Negative Numbers     Understanding models for integers.    Understanding negative numbers and some rules associated with negative numbers.      Negative numbers are most easily introduced with the number line   a number line from -6 to 6    which extends the number line backwards (to the left)    The integers are the numbers and the number greater than zero are called positive numbers and those less than 0 are called negative .  The numbers (zero and the positive numbers) are called nonnegative integers. The numbers (the negative numbers and zero) called the nonpositive numbers.      Models for the integers     Temperature  In the two standard ways of measuring temperature (Fahrenheit and Celsius), there are both negative and positive temperature and using a scale like a thermometer shows the relationship.      One should note though that temperature (like any measurement) does not have to just be an integer and any real number is possible.    Elevation  We typically take the elevation of a point on land (measured in either feet or meters) as positive for those points above sea level and depths in the ocean as negative number.     These model will be developed below with details.    Basics of Integers  Understanding the number line is key to understanding integers.   a number line from -6 to 6    First, the numbers to the left of 0 are the negative numbers and the more to the left, the more negative a number is and the bigger the number without the negative sign is.  Also, the negative symbol like is the same number for subtraction and may be difficult for students new to them to understand what this means.   Distance  The notion of how far a number is from zero is quite important. We call this the distance from 0. The numbers and are both 3 from 0. Looking at the number line above, is three steps to the right of 0 and is three steps to the left.  The idea of absolute value is the distance from zero and is introduced about the same time as negative numbers. Using the example above, and .    Opposite Numbers  Every integer has an opposite, which we denote . The number is the same distance from 0 as but is located in the opposite direction, . The number line can help with this:   A number line with the numbers 0, a and -a on the line. There is an arrow from a to -a and another from -a to a.    The number is opposite of and the number is opposite .  We can generalize opposite numbers in the following property of integers.   Additive Inverse Property   For each integer , there exists a unique integer called the opposite of denoted by which satisfies     The diagram above shows the following property of integers:   Opposite Integers    for any integer     From the diagram above, starting at , this says that the opposite of this (which is ) is just . Another way to look at this if we start at , the number on the right, then find the opposite to get to , then take the opposite again, we return to .  A few other things to note about this:     Don't forget that this also applies to negative numbers. that is if , then .    Don't read this rule as saying . This isn't talking about multiplication.       Ordering Integers  We order all integers in the same way that we order all whole numbers. If is to the right of on the number line, then we say . If is to the left of , then we say .     Integer Addition  How do we do addition with integers (positive and negatives). There are four cases and we go through each in detail:   Positive Positive:  We've done this already. Typically, recall that we can think of this as counting on and the number line. Find    A number line from 0 to 10. Starting at 5, there are three hops to the right, ending at 8.      Negative Positive  This works the same way because the second number is positive. We start at the first number and again ``count on''. The figure below shows    A number line from -5 to 5. Starting at -4, there are three hops to the right, ending at -1.      Positive Negative  If we think of the ``count on'' again with this, let's see what happens. Try so we start at 5 and count up and to determine this, we use the notion that is the opposite of , so we interpret as start at 5 and count down 3.   A number line from -5 to 5. Starting at 5, there are three hops to the left, ending at 2.    We will use this model to also explain that .    Negative Negative:  Once we understand the previous case, this is interpreted the same way. Consider . This means start at and count down .   A number line from -5 to 5. Starting at -3, there are two hops to the right, ending at -5.     The last two examples of adding a negative integer results in the following property   Addition of a negative integer    for any two integers .    The idea behind this is that the term is interpreted as the opposite of . If , then starts at on the number line and hops left units. This is the same as subtraction.    Other models for Integers  Above, we had the models of temperature and elevation as ways to understand negative numbers. We end this section we three additional models.   Vector Model  Each number is represented as a vector (arrow) along the number line. The following shows .        Chip Model  In this case chips can be used (one color for positive numbers and another for negative numbers) and combine the opposite colors and remove.  The following can be used to show .   A diagram with 3 red circles and 5 blue circles. There are lines through pairs of opposite colors with two blue circle not crossed out.    The line through the two colors cancel each other out. The result is the two blue (represent ).  This can be a problem if you can't remember which color represents positive\/negative.    Money Model  Money can be used to investigate negative numbers. Money that you have (assets) are generally thought of as positive numbers. Debits (or money that you owe) can be thought of a negative numbers.  This can be shown abstractly with the chip model above, or can be used with manipulative that look like money. In that case, it needs to be clear that the money that a student has in the positive numbers and there is something representing costs like a purchased object.    Patterns in Addition  Our last model is to generate patterns in addition. We will add a number of integers to 4. and looking at the pattern, it appears the last one will be 3. We can continue this a bit further:        Generate a chip model for the following addition problems.             .       Produce a pattern for and show from to .      Use the vector model to show the four operations, , , , . Place each on a separate number line.      Determine if the following are true or false. If it is false, give a counterexample to the statement. If it is true, provide a model (vector or money) and explanation.     Every integer is a whole number.      The sum of two negative numbers is always negative.      A negative number plus a positive number is always negative.      A positive number plus a negative number is always negative.      To add two negative numbers, we find the sum of their absolute values and take the negative sign for the answer.      "
},
{
  "id": "sect-negative-numbers-2",
  "level": "2",
  "url": "sect-negative-numbers.html#sect-negative-numbers-2",
  "type": "Objectives",
  "number": "9.1",
  "title": "",
  "body": "   Understanding models for integers.    Understanding negative numbers and some rules associated with negative numbers.    "
},
{
  "id": "sect-negative-numbers-3-4",
  "level": "2",
  "url": "sect-negative-numbers.html#sect-negative-numbers-3-4",
  "type": "Definition",
  "number": "9.1.1",
  "title": "",
  "body": "  The integers are the numbers and the number greater than zero are called positive numbers and those less than 0 are called negative .  The numbers (zero and the positive numbers) are called nonnegative integers. The numbers (the negative numbers and zero) called the nonpositive numbers.   "
},
{
  "id": "sect-negative-numbers-5-6-2",
  "level": "2",
  "url": "sect-negative-numbers.html#sect-negative-numbers-5-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "distance "
},
{
  "id": "sect-negative-numbers-5-6-3",
  "level": "2",
  "url": "sect-negative-numbers.html#sect-negative-numbers-5-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "absolute value "
},
{
  "id": "axiom-additive-inverse",
  "level": "2",
  "url": "sect-negative-numbers.html#axiom-additive-inverse",
  "type": "Property",
  "number": "9.1.2",
  "title": "Additive Inverse Property.",
  "body": " Additive Inverse Property   For each integer , there exists a unique integer called the opposite of denoted by which satisfies    "
},
{
  "id": "axiom-opposite-integers",
  "level": "2",
  "url": "sect-negative-numbers.html#axiom-opposite-integers",
  "type": "Property",
  "number": "9.1.3",
  "title": "Opposite Integers.",
  "body": " Opposite Integers    for any integer    "
},
{
  "id": "axiom-addition-negatives",
  "level": "2",
  "url": "sect-negative-numbers.html#axiom-addition-negatives",
  "type": "Property",
  "number": "9.1.4",
  "title": "Addition of a negative integer.",
  "body": " Addition of a negative integer    for any two integers .   "
},
{
  "id": "exercises-negative-numbers-1",
  "level": "2",
  "url": "sect-negative-numbers.html#exercises-negative-numbers-1",
  "type": "Exercise",
  "number": "9.1.5.1",
  "title": "",
  "body": "  Generate a chip model for the following addition problems.             .    "
},
{
  "id": "exercises-negative-numbers-2",
  "level": "2",
  "url": "sect-negative-numbers.html#exercises-negative-numbers-2",
  "type": "Exercise",
  "number": "9.1.5.2",
  "title": "",
  "body": "  Produce a pattern for and show from to .   "
},
{
  "id": "exercises-negative-numbers-3",
  "level": "2",
  "url": "sect-negative-numbers.html#exercises-negative-numbers-3",
  "type": "Exercise",
  "number": "9.1.5.3",
  "title": "",
  "body": "  Use the vector model to show the four operations, , , , . Place each on a separate number line.   "
},
{
  "id": "exercises-negative-numbers-4",
  "level": "2",
  "url": "sect-negative-numbers.html#exercises-negative-numbers-4",
  "type": "Exercise",
  "number": "9.1.5.4",
  "title": "",
  "body": "  Determine if the following are true or false. If it is false, give a counterexample to the statement. If it is true, provide a model (vector or money) and explanation.     Every integer is a whole number.      The sum of two negative numbers is always negative.      A negative number plus a positive number is always negative.      A positive number plus a negative number is always negative.      To add two negative numbers, we find the sum of their absolute values and take the negative sign for the answer.    "
},
{
  "id": "sect-arithmetic-integers",
  "level": "1",
  "url": "sect-arithmetic-integers.html",
  "type": "Section",
  "number": "9.2",
  "title": "Arithmetic With Integers",
  "body": " Arithmetic With Integers   With the understanding of addition of integers and their models in , we turn to the other arithmetic operations on integers.    Subtraction of Integers  Knowing how to add negative numbers and the properties gives use the tools that we need to perform subtraction. Let's start with with the example .  As before, subtraction is defined as the missing addend. That is what fits in the box for   Using the number line, we start at and determine the number of hops that results in 4. This can be shown with   A number line from -5 to 5. There are 6 hops starting at -2 and finishing at 4.     Chip Models of Subtraction  In , we also used chip models. These can also be used with subtraction when we use a takeaway interpretation. Returning to , we will start with positive chips and remove 2 negative chips. We start with 4 positive (blue) chips.   A diagram with 4 blue circles. Each circle contains a + sign.    However, there are no negative chips. We use the to add 0 to the model as . This means including two additional blue and two additional red chips.   A diagram with 2 red circles and 6 blue circles.    And lastly, cross out two negative (red) chips:   A diagram with 2 red circles and 6 blue circles. The two red chips are crossed out.    And the result shows 6 blue (positive) chip, so this shows     Vector Models of Subtraction  A vector model is also recommended to use with subtraction recalling that subtraction switches the direction. For example for , we start with a vector from 0 to 4. To subtract, we general move in the other direction, however, since subtracting , this switches back as a vector in the positive direction.   A number line from -3 to 7. There is a vector (arrow) above the line from 0 to 4. There is a second vector above this from 4 to 6.    This shows that     Patterns in Subtraction  Similar to patterns in addition of integers, we can do the same with subtraction. If we start with what we know from subtracting positive integers and following the pattern into negative integers: and looking at this pattern, it appears the last one will be 5. If we continue     Integer Subtraction Property  From the models above, it appears that subtracting integers results in addition resulting in the following:   Subtraction of Integers Property   For integers and ,        Integer Multiplication  We next look at integer multiplication. We extend the ideas and models of integer addition to understand multiplication. Let's first look at an example of . Recall that we can interpret this as repeated addition as which we know from the is , but using a number line, we can start at zero and perform three hops of size .   A number line from -7 to 3. There are 3 hops from right to left of size 2 starting at 0 and finishing at -6.     Chip Model  We can also use the chip model to show multiplication of integers. To model , we can interpret this as 3 groups of size , and we will use red to model negative numbers.      The result is 6 negative (red) chips so .  Next, let's look at a model for  You as a fantastic mathematics student say to yourself isn't ? and yes this is correct, but we are going to build to that. . We are going to interpret this as removing 2 groups of 3 positive chips. This is a bit strange, but we are going to start with 0 for the model and then remove some chips. And we start with 6 pairs of positive and negative chips.      Now we remove 2 groups of 3 positive chips (this is the ).      And the chips left are 6 negative (red) chips so this shows that .    Vector Model  A vector model, like the chip model, uses the fact that multiplication is repeated addition. The model for uses three arrows, each of length 2, that point in the negative direction.      And as before, this shows that .    Multiplication Properties  The discussion above leads to the following multiplication properties.    Let and be integers. Then        Integer Division  Integer division results in fractions as seen in or when and are whole numbers, but how about if or or both are negative?  Recall that if is the number such that            Arithmetic Properties  We summary the arithmetic properties of the integers here. Let and be integers. Then the following hold:     Additive Commutative       Multiplicative Commutative       Additive Associative       Multiplicative Associative       Distributive       Additive Identity       Multiplicative Identity          Arithmetic Proofs  This section covers the proofs of the properties that we have seen in this chapter. The crux of these proofs is that of . Since the right hand side of this property is zero, we are often going to add zero to a property that we want to prove.   Proof of  We start with and the the sum of this and 0.       Proof of  missing factor of or   Answer: so the missing factor is , therefore     Proof of  Since we are trying to rewrite a subtraction, we will recall that it is the missing addend. That is is the same as      Proof of Rule 3       Proof of Rule 5  Let , then . We need to show that    Since then so        For each of the following subtraction problems, show with a i) a chip model and ii) a vector model.                    Produce a pattern of values of , starting with through .      For each of the multiplication problems listed below, develop a chip model. Note: if the first number is positive, then consider it as repeated addition. If the first number is negative, perform a takeaway interpretation of some number of groups.                           For each of the multiplication problems listed below, develop a vector model. Note: if the first number is positive, then consider it as repeated addition. If the first number is negative, use the opposite notion as shown above.                           Find the resultant integer or fraction of the following division problems. If the result is a fraction, write in reduced form.                                 "
},
{
  "id": "axiom-integer-subtraction",
  "level": "2",
  "url": "sect-arithmetic-integers.html#axiom-integer-subtraction",
  "type": "Property",
  "number": "9.2.1",
  "title": "Subtraction of Integers Property.",
  "body": " Subtraction of Integers Property   For integers and ,    "
},
{
  "id": "prop-multiplication-integers",
  "level": "2",
  "url": "sect-arithmetic-integers.html#prop-multiplication-integers",
  "type": "Property",
  "number": "9.2.2",
  "title": "",
  "body": "  Let and be integers. Then    "
},
{
  "id": "axiom-negative-fractions",
  "level": "2",
  "url": "sect-arithmetic-integers.html#axiom-negative-fractions",
  "type": "Property",
  "number": "9.2.3",
  "title": "",
  "body": "      "
},
{
  "id": "subsec-arithmetic-proofs-3",
  "level": "2",
  "url": "sect-arithmetic-integers.html#subsec-arithmetic-proofs-3",
  "type": "Proof",
  "number": "9.2.5.1",
  "title": "Proof of Opposite Integers.",
  "body": " Proof of  We start with and the the sum of this and 0.     "
},
{
  "id": "subsec-arithmetic-proofs-4",
  "level": "2",
  "url": "sect-arithmetic-integers.html#subsec-arithmetic-proofs-4",
  "type": "Proof",
  "number": "9.2.5.2",
  "title": "Proof of Addition of a negative integer.",
  "body": " Proof of  missing factor of or   Answer: so the missing factor is , therefore   "
},
{
  "id": "subsec-arithmetic-proofs-5",
  "level": "2",
  "url": "sect-arithmetic-integers.html#subsec-arithmetic-proofs-5",
  "type": "Proof",
  "number": "9.2.5.3",
  "title": "Proof of Subtraction of Integers Property.",
  "body": " Proof of  Since we are trying to rewrite a subtraction, we will recall that it is the missing addend. That is is the same as    "
},
{
  "id": "subsec-arithmetic-proofs-6",
  "level": "2",
  "url": "sect-arithmetic-integers.html#subsec-arithmetic-proofs-6",
  "type": "Proof",
  "number": "9.2.5.4",
  "title": "Proof of Rule 3.",
  "body": " Proof of Rule 3     "
},
{
  "id": "subsec-arithmetic-proofs-7",
  "level": "2",
  "url": "sect-arithmetic-integers.html#subsec-arithmetic-proofs-7",
  "type": "Proof",
  "number": "9.2.5.5",
  "title": "Proof of Rule 5.",
  "body": " Proof of Rule 5  Let , then . We need to show that    Since then so   "
},
{
  "id": "exercises-arithmetic-integers-1",
  "level": "2",
  "url": "sect-arithmetic-integers.html#exercises-arithmetic-integers-1",
  "type": "Exercise",
  "number": "9.2.6.1",
  "title": "",
  "body": "  For each of the following subtraction problems, show with a i) a chip model and ii) a vector model.                 "
},
{
  "id": "exercises-arithmetic-integers-2",
  "level": "2",
  "url": "sect-arithmetic-integers.html#exercises-arithmetic-integers-2",
  "type": "Exercise",
  "number": "9.2.6.2",
  "title": "",
  "body": "  Produce a pattern of values of , starting with through .   "
},
{
  "id": "exercises-arithmetic-integers-3",
  "level": "2",
  "url": "sect-arithmetic-integers.html#exercises-arithmetic-integers-3",
  "type": "Exercise",
  "number": "9.2.6.3",
  "title": "",
  "body": "  For each of the multiplication problems listed below, develop a chip model. Note: if the first number is positive, then consider it as repeated addition. If the first number is negative, perform a takeaway interpretation of some number of groups.                        "
},
{
  "id": "exercises-arithmetic-integers-4",
  "level": "2",
  "url": "sect-arithmetic-integers.html#exercises-arithmetic-integers-4",
  "type": "Exercise",
  "number": "9.2.6.4",
  "title": "",
  "body": "  For each of the multiplication problems listed below, develop a vector model. Note: if the first number is positive, then consider it as repeated addition. If the first number is negative, use the opposite notion as shown above.                        "
},
{
  "id": "exercises-arithmetic-integers-5",
  "level": "2",
  "url": "sect-arithmetic-integers.html#exercises-arithmetic-integers-5",
  "type": "Exercise",
  "number": "9.2.6.5",
  "title": "",
  "body": "  Find the resultant integer or fraction of the following division problems. If the result is a fraction, write in reduced form.                               "
},
{
  "id": "sect-order-integers",
  "level": "1",
  "url": "sect-order-integers.html",
  "type": "Section",
  "number": "9.3",
  "title": "Order Properties of Integers",
  "body": " Order Properties of Integers   The last section about integers is that about ordering of the integers. As discussed in , a number is less than or denoted if is to the left of on the number line. A more technical definition of this ordering is given in the following definition.    Let and be integers.    is less than , denoted if there exists a positive number such that .     is greater than , denoted if there exists a positive number such that .       Note there are also definitions for less than or equal to and greater than or equal to. We examine these in the exercises.        For any two numbers and , one and only one of the statements , , is true.    (Transitive Property) If and , then .    Adding a constant to both sides does not change an inequality: if , then for any .    Multiplying by a positive number preserves inequalities: if and , then .       Proofs of Lemmas    If is a positive integer then is negative.           If and , then .          "
},
{
  "id": "def-order-integers",
  "level": "2",
  "url": "sect-order-integers.html#def-order-integers",
  "type": "Definition",
  "number": "9.3.1",
  "title": "",
  "body": "  Let and be integers.    is less than , denoted if there exists a positive number such that .     is greater than , denoted if there exists a positive number such that .      "
},
{
  "id": "lem-1",
  "level": "2",
  "url": "sect-order-integers.html#lem-1",
  "type": "Lemma",
  "number": "9.3.2",
  "title": "",
  "body": "  If is a positive integer then is negative.        "
},
{
  "id": "lem-",
  "level": "2",
  "url": "sect-order-integers.html#lem-",
  "type": "Lemma",
  "number": "9.3.3",
  "title": "",
  "body": "  If and , then .        "
},
{
  "id": "sect-decimals",
  "level": "1",
  "url": "sect-decimals.html",
  "type": "Section",
  "number": "10.1",
  "title": "Decimals",
  "body": " Decimals    Decimals are numbers written as sums of fractions with powers of ten in the denominator,  (picture of 7.132 on the number line)    Introduction of Decimals     Decimals are introduced in grade 4 as a shorthand way to write some fractions.     Introduce decimals with measurement models (metric system), set model using chips and money with a penny as $0.01 and a dime as $0.1.    Rectangular grid models       Operations with Decimals  If we understand place value with whole numbers, then additions\/subtractions work the same way, that is add\/subtract ones, tenths, hundredths, etc. bundling or unbundling as necessary.    Find using a chip model      Find using a chip model      Find using a chip model      Multiplying and Dividing by 10  One of the nice features of the decimal number system is that multiplying or dividing by 10 (or multiples of 10) is quite easy   The same is true for decimals.      Multiplying a decimal number by 10 means shifting the decimal 1 place to the right.    Dividing a decimal number by 10 means shifting the decimal 1 place to the left.       Find by writing as a fraction.           Multi-digit Decimal Multiplication and Division  Although chip models are helpful, they may not be needed for students with a firm grasp of rebundling. An alternative is use fractions to do multiplication and division.    Find using fractions         Multiplication of Decimals Multiplication of decimal numbers can be performed by   Ignore the decimal points and multiply the factors as they are integers.    Insert a decimal point in the product so that the total number of decimal places are equal on both sides.     Alternative ways to find the decimal point     Estimation: , so should have the decimal point to the right of the 16.    Shifting Decimal points: If we seeking out , then we can shift the decimal point in right 3 spaces and 1010 left three spaces or   This works if we write the decimal as a fraction:   And in the case of division, and this works because        Find by estimating then finding the exact value.    1462430      Dividing Decimals  To divide one decimal number by a second decimal number   Shift the decimal point of the divisor to make it a whole number and then shift the decimal point of the dividend the same number of places.    Find the quotient by long division, aligning the decimal points of the quotient and the dividend.       "
},
{
  "id": "sect-decimals-4-3",
  "level": "2",
  "url": "sect-decimals.html#sect-decimals-4-3",
  "type": "Example",
  "number": "10.1.1",
  "title": "",
  "body": "  Find using a chip model   "
},
{
  "id": "sect-decimals-4-4",
  "level": "2",
  "url": "sect-decimals.html#sect-decimals-4-4",
  "type": "Example",
  "number": "10.1.2",
  "title": "",
  "body": "  Find using a chip model   "
},
{
  "id": "sect-decimals-4-5",
  "level": "2",
  "url": "sect-decimals.html#sect-decimals-4-5",
  "type": "Example",
  "number": "10.1.3",
  "title": "",
  "body": "  Find using a chip model   "
},
{
  "id": "sect-decimals-5-5",
  "level": "2",
  "url": "sect-decimals.html#sect-decimals-5-5",
  "type": "Example",
  "number": "10.1.4",
  "title": "",
  "body": "  Find by writing as a fraction.        "
},
{
  "id": "sect-decimals-6-3",
  "level": "2",
  "url": "sect-decimals.html#sect-decimals-6-3",
  "type": "Example",
  "number": "10.1.5",
  "title": "",
  "body": "  Find using fractions        "
},
{
  "id": "sect-decimals-6-7",
  "level": "2",
  "url": "sect-decimals.html#sect-decimals-6-7",
  "type": "Example",
  "number": "10.1.6",
  "title": "",
  "body": "  Find by estimating then finding the exact value.    1462430    "
},
{
  "id": "ch-decimals-4",
  "level": "1",
  "url": "ch-decimals-4.html",
  "type": "Section",
  "number": "10.2",
  "title": "Decimals and Rational Numbers",
  "body": " Decimals and Rational Numbers   There are many decimals that we should know each rational representation in simplest form. For example   If we don't know a given decimal to fraction conversion, we can convert by writing it as we did last section and then reduce a fraction as in Ch. 6:    Convert to a rational number and simplify     and since (13 is prime), then this is in simplest form.      Fractions with denominators  From the examples we've seen, it's fairly clear that in the most straightforward way, the denominator of a decimal is a power of 10 or more generally . Since   This means that any finite decimal has a denominator that is a product of 2's and 5's. All of the above examples fit this. For example has denominator .    Converting a fraction to a decimal using long division  We saw in Chapter 6 the connection between fractions and division. We can use this connection to convert a fraction to a decimal using long division.    Find the decimal representation of using long division     and since the remainder is 0, this shows that     This an all of the other examples of fractions that we have seen so far is called a finite decimal.    A decimal number with only a finite number of digits is called a finite decimal .      Rational-Decimal Fact 1  A rational number in simplest form can be written as a finite decimal if and only if the denominator is a product of 2's and 5's.    If a number is a finite decimal, then we saw that it can be written as which shows the denominator is a product of 2's and 5's.   If a fraction has the form then there are three cases. if , then this can be written: which is a finite decimal found by moving the decimal point on  places to the left and if , then we can write this as which is the finite decimal found by moving the decimal point on  places to the left and finally if , then can be written which is the finite decimal found by moving the decimal point on  places to the left.     Write as a fraction in simplest form.           Write the number as a decimal.          "
},
{
  "id": "ch-decimals-4-2-3",
  "level": "2",
  "url": "ch-decimals-4.html#ch-decimals-4-2-3",
  "type": "Example",
  "number": "10.2.1",
  "title": "",
  "body": "  Convert to a rational number and simplify     and since (13 is prime), then this is in simplest form.   "
},
{
  "id": "ch-decimals-4-4-3",
  "level": "2",
  "url": "ch-decimals-4.html#ch-decimals-4-4-3",
  "type": "Example",
  "number": "10.2.2",
  "title": "",
  "body": "  Find the decimal representation of using long division     and since the remainder is 0, this shows that    "
},
{
  "id": "ch-decimals-4-4-5",
  "level": "2",
  "url": "ch-decimals-4.html#ch-decimals-4-4-5",
  "type": "Definition",
  "number": "10.2.3",
  "title": "",
  "body": "  A decimal number with only a finite number of digits is called a finite decimal .   "
},
{
  "id": "ch-decimals-4-5-3",
  "level": "2",
  "url": "ch-decimals-4.html#ch-decimals-4-5-3",
  "type": "Proof",
  "number": "10.2.3.1",
  "title": "",
  "body": "  If a number is a finite decimal, then we saw that it can be written as which shows the denominator is a product of 2's and 5's.   If a fraction has the form then there are three cases. if , then this can be written: which is a finite decimal found by moving the decimal point on  places to the left and if , then we can write this as which is the finite decimal found by moving the decimal point on  places to the left and finally if , then can be written which is the finite decimal found by moving the decimal point on  places to the left.  "
},
{
  "id": "ch-decimals-4-5-4",
  "level": "2",
  "url": "ch-decimals-4.html#ch-decimals-4-5-4",
  "type": "Example",
  "number": "10.2.4",
  "title": "",
  "body": "  Write as a fraction in simplest form.        "
},
{
  "id": "ch-decimals-4-5-5",
  "level": "2",
  "url": "ch-decimals-4.html#ch-decimals-4-5-5",
  "type": "Example",
  "number": "10.2.5",
  "title": "",
  "body": "  Write the number as a decimal.        "
},
{
  "id": "ch-decimals-5",
  "level": "1",
  "url": "ch-decimals-5.html",
  "type": "Section",
  "number": "10.3",
  "title": "Non-finite Decimals",
  "body": " Non-finite Decimals     Write as a decimal.     311   And notice that the 3 and 6 repeat. This is an example of a repeating decimal. We generally write this as       Write as a decimal.     523900   and we can write this as       The number of digits in the shortest sequence of repeating digits in a repeating decimal is the period .      Write as a decimal and find its period.    We'll use long division until we get a repeat.   17       Rational-Decimal Fact 2    Every rational number can be written as a finite or repeating decimal.    Let be a rational number and without loss of generality, assume that . In any step of long division, the quotient-remainder theorem states that the remainder, on the step has satisfies . If , then the result is a finite decimal and from Rational-Decimal Fact 1, this only occurs if is a product of powers of 2's and 5's. In all other cases, could be one of . Thus there are only choices before the remainder, repeats, therefore the result is a repeating decimal.      The decimal expansion of is a repeating decimal with period 16.      Rational-Decimal Fact 3  Every repeating decimal is a rational number.  We won't prove this, but will show the algorithm in the two examples below. The proof involves showing that the algorithm works in general.    Converting Repeating Decimals to rational numbers    Convert to a rational number.   Let and we will find (because the period is 2) and subtract    So which can be reduced to .      Convert 0.34555555 to a rational number.    We let and notice that the period is 1, so let's find . which would result in , which is not a rational number. However, if we multiply the top and bottom by 100, we get which is.  Alternatively, we can write so that the shifts the repeating part to just right of the decimal point and the other is 10 times this.   So the solution is , which is in simplest form. (Why?)     "
},
{
  "id": "ch-decimals-5-2-1",
  "level": "2",
  "url": "ch-decimals-5.html#ch-decimals-5-2-1",
  "type": "Example",
  "number": "10.3.1",
  "title": "",
  "body": "  Write as a decimal.     311   And notice that the 3 and 6 repeat. This is an example of a repeating decimal. We generally write this as    "
},
{
  "id": "ch-decimals-5-2-2",
  "level": "2",
  "url": "ch-decimals-5.html#ch-decimals-5-2-2",
  "type": "Example",
  "number": "10.3.2",
  "title": "",
  "body": "  Write as a decimal.     523900   and we can write this as    "
},
{
  "id": "ch-decimals-5-2-3",
  "level": "2",
  "url": "ch-decimals-5.html#ch-decimals-5-2-3",
  "type": "Definition",
  "number": "10.3.3",
  "title": "",
  "body": "  The number of digits in the shortest sequence of repeating digits in a repeating decimal is the period .   "
},
{
  "id": "ch-decimals-5-2-4",
  "level": "2",
  "url": "ch-decimals-5.html#ch-decimals-5-2-4",
  "type": "Example",
  "number": "10.3.4",
  "title": "",
  "body": "  Write as a decimal and find its period.    We'll use long division until we get a repeat.   17    "
},
{
  "id": "ch-decimals-5-3-2",
  "level": "2",
  "url": "ch-decimals-5.html#ch-decimals-5-3-2",
  "type": "Theorem",
  "number": "10.3.5",
  "title": "",
  "body": "  Every rational number can be written as a finite or repeating decimal.    Let be a rational number and without loss of generality, assume that . In any step of long division, the quotient-remainder theorem states that the remainder, on the step has satisfies . If , then the result is a finite decimal and from Rational-Decimal Fact 1, this only occurs if is a product of powers of 2's and 5's. In all other cases, could be one of . Thus there are only choices before the remainder, repeats, therefore the result is a repeating decimal.   "
},
{
  "id": "ch-decimals-5-3-3",
  "level": "2",
  "url": "ch-decimals-5.html#ch-decimals-5-3-3",
  "type": "Example",
  "number": "10.3.6",
  "title": "",
  "body": "  The decimal expansion of is a repeating decimal with period 16.   "
},
{
  "id": "ch-decimals-5-5-2",
  "level": "2",
  "url": "ch-decimals-5.html#ch-decimals-5-5-2",
  "type": "Example",
  "number": "10.3.7",
  "title": "",
  "body": "  Convert to a rational number.   Let and we will find (because the period is 2) and subtract    So which can be reduced to .   "
},
{
  "id": "ch-decimals-5-5-3",
  "level": "2",
  "url": "ch-decimals-5.html#ch-decimals-5-5-3",
  "type": "Example",
  "number": "10.3.8",
  "title": "",
  "body": "  Convert 0.34555555 to a rational number.    We let and notice that the period is 1, so let's find . which would result in , which is not a rational number. However, if we multiply the top and bottom by 100, we get which is.  Alternatively, we can write so that the shifts the repeating part to just right of the decimal point and the other is 10 times this.   So the solution is , which is in simplest form. (Why?)   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
