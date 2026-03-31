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
  "id": "ch-preliminary-3",
  "level": "1",
  "url": "ch-preliminary-3.html",
  "type": "Section",
  "number": "1.1",
  "title": "Mathematical Logic",
  "body": " Mathematical Logic   This section covers some basics of mathematical logic. I’m using this term in a relatively informal way in that Logic is a huge field requiring quite a bit more mathematical background than required for this text. Instead, I’m using logic in a way in that the mathematics that we are covering in this course should make sense in the context of the material. There are two things that we’ll cover here: 1) mathematical equations and using the equals sign correctly and 2) mathematical statements and counterexamples.    Mathematical Equations and Identities  A mathematical equation is any mathematical statement containing an equals sign . This can include a simple arithmetic statement like   or as more-complicated algebraic equation like   In each case, the main idea is that left side of the equation equals the right side. In the case of , it’s clear doing the addition on the left side results in the right side or 9.  In the case of , it’s not clear what value or values of makes this true. This is a quadratic equation and the two standard techniques to solve this is a) factoring or b) the quadratic equation. We’ll talk more about factoring below. Using either of these techniques, you should find that is a solution and plugging this value into the equation results in , a true statement.    Mathematical Identities  Let’s return to above and factor the left side of the equation. The result will be which by definition is a mathematical equation because it has an equals sign. However, this is more than just an equation. It is called a mathematical identity .    A mathematical identity is a mathematical equation with one or more variables in which the equation is true for all values of the variables where defined.    The equation in is an identity because it is true for all . For example, let , you should see , when you should see . Try a few others.  Identities often arise from mathematic properties and other simplifying techniques from algebra like factoring that was used in .    Using the Equals Sign correctly  Often, students (at many different levels) will use the equals sign incorrectly. Here’s a classic example. Let’s say that you are asked to solve and the student does:   Incorrect Use of Equals Sign   Notice that there are two equals signs here.  It is fine to use multiple equals signs in a series of mathematical steps and is encouraged, however each of them must be equal. If we simplify the equation on the right from to , so this clearly uses the equals sign correctly. The left one however says that , resulting in which isn’t right.  From the example above in the box, the thinking is correct in that the student is breaking down the problem into multiple steps and doing first and then adding 40 to the result to get 70. However, we will show a way to both include the steps to solving and using the equals sign correctly below.  Alternatively, students sometimes use an arrow instead of an equals sign. Another common way to solve this problem would be    Use of Arrows for Steps  What if you show the calculation above with the following steps?   Each of the equations are correct and the result is correct, but this requires the reader to put the pieces together since the original problem is . In short, the equations in this are correct, but this is still hard to follow.  Instead, we will start with the given problem and correctly use equals signs throughout.    Correct Version of the Problem   Notice in this case, we start with the full problem asked to do. The first equals sign (first step) adds and and keeps the along for the ride. The second equals sign (second step) adds the to to get the final answer.This is better because the original problem is the very left addition problem and the very right is the answer.    "
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
  "body": " Counterexamples  We all make mathematical mistakes. Even I (the author), who has been teaching for more than 20 years still makes little errors. I often catch them however, and this is an important skill.  One big set of catching errors is the use of a counterexample , which is an example that shows something is not true.  For example, if a student says that for all and that   Hopefully, you question this. Although it may seem right, let’s check a couple of examples. First let’s find an and a such that the square root is “nice” or an integer. Let’s say and . then   on the right side we get and on the left we get . Since 13 is not a perfect square, then is not an integer (it’s a little less than 4) and the right side is 5. Since this isn’t true, this is a counterexample.  Be careful. If we choose and , then we would get   which is a true statement. Often incorrect identities are true when plugging in 0 or 1, so avoid using those.   Looking for a Counterexample  If you have a possible identity that you are checking if it is true, then you should plug one more values into it. As soon as you find one example that makes the equation false, then you are done and that is a counterexample .Note: even if you check a few examples that are all true, that doesn’t make it an identity. That requires a proof.  Let’s look at another example. This time involving prime numbers. Recall that a number is prime if the only factors are 1 and itself. We will spend some good time with these in , but this is a nice example using a counterexample.    A student claims that is prime for all positive whole numbers . Provide a counterexample.  First, if you don’t recall, perform a little internet search to get a listing of prime numbers less than 100. Now if we let , then plugging in, we get and all of these are prime. Does that imply the statement is true?  The answer however is no, because the next one: is not prime since . Therefore is a counterexample to this statement.  The moral of this is to be skeptical. Sometimes it take a few tries to find the counterexample.    These are just a couple of examples, but good teachers have counterexamples in their toolkit to help students. We’ll see others in the course as well.   "
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
  "body": "  A student claims that is prime for all positive whole numbers . Provide a counterexample.  First, if you don’t recall, perform a little internet search to get a listing of prime numbers less than 100. Now if we let , then plugging in, we get and all of these are prime. Does that imply the statement is true?  The answer however is no, because the next one: is not prime since . Therefore is a counterexample to this statement.  The moral of this is to be skeptical. Sometimes it take a few tries to find the counterexample.   "
},
{
  "id": "sect-hindu-arabic-numbers",
  "level": "1",
  "url": "sect-hindu-arabic-numbers.html",
  "type": "Section",
  "number": "2.1",
  "title": "Hindu-Arabic Numbers and Models for Arithmetic",
  "body": " Hindu-Arabic Numbers and Models for Arithmetic   The number system primarily used throughout the world is what is called the Hindu-Arabic Number System . It uses the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (hence it is a decimal or base-10) and is a place-value system in that the location of a digit in the number represents the value of the number. We will discuss this in detail below.    Counting    The counting numbers are the numbers that we count things with, that is, . The whole numbers are the counting numbers together with 0 or .    As children learn the beginnings of numbers, they use the counting number to count things (strawberries, peas on a plate, coins). Clearly, as one progresses through school, the whole numbers are just as important and are still used to count things, but they get larger (number of candies in a jar–we'll talk about this later, your monthly salary, number of packages delivered by the post office). In this book, we'll discuss the counting number from small number to large numbers and adapt the arithmetic as needed.   Abstraction of Numbers  A overall goal in mathematics at all levels is that of abstraction and go back to the Preface in the text and reread the section on abstraction and mathematics , which we will see this throughout this book. It is important to understand that as children learn numbers that they first understand numbers as counting real objects, to counting pictures of objects to just numbers themselves.    Set and Measurement Model  There are two contexts in which young children (and most of the rest of us) use numbers: 1) counting objects, 2) measuring things. These two contexts are different and are called the set model and measurement model.     The set model of numbers is used to count discrete objects. The number of objects must be a whole number.    The measurement model is useful for measuring distances, weights, time, lengths, etc.     These models are mainly used in the idea of word problems, which will be discussed more in-depth in Chapter .    The following are examples of set models . The number of   marbles    stickers    toy cars     And the following are example of measurement models .   The length of a piece of string    The height of your sister    The amount (volume) of juice in that glass    The weight of this bag of potatoes       Another important note of difference between examples of set models and measurement models is that set models are for things that can only be whole numbers–you can't (reasonable) cut a marble in half. Those in the measurement model can take on non-whole number (fractional or decimal) values. I drank 6 1\/2 ounces of water with lunch.    Less versus Fewer  This gives me the opportunity to talk a little grammar. Most people use “less” and “fewer” interchangeably. However, less should pertain only to numbers in the measurement model (I have less milk in my glass than Charlie does) and fewer should pertain only to numbers in the set model (I have 10 fewer cookies than Amanda).     Model and Diagrams  As we just discussed models above, I have assumed that we know what a model is. Although there are many different types of models in the world (are you thinking of fashion models?), from a mathematical point of view, a model is a simplified version of a real thing or a representation of that thing.   Set Models  Let's return to the set model above. If we are thinking of 7 pencils, we could draw:          which look quite fancy. In grades K-2, this might appear in a math book, because students at this level would need more concrete examples. As students get more comfortable with abstraction, you could draw          to represent the same thing. With abstraction, however, the actual object doesn't matter and we can represent anything from a set model with dots or stars or other objects that are easier to draw.    Measurement Model Diagrams  Numbers in the measurement model, however, do not fit well with objects. If you drank 10 ounces of juice, it doesn't make sense to draw 10 objects. A great way to represent these is the number line, such as          and recall that by convention the numbers increase from left to right.  For example, we could measure the length of a fish found on \\html-tag:url{\\html-attr:href{\"https:\/\/tex.stackexchange.com\/questions\/361547\/how-to-draw-a-fish\"}https:\/\/tex.stackexchange.com\/questions\/361547\/how-to-draw-a-fish}           If we are measuring liquid, it often nice to show as a measuring cup or graduated cylinder like:          which is similar to a number line in the vertical direction.    Number Lines  Number lines are a powerful model. They are introduced early in Elementary School, generally when measuring length arises. However, they are useful in college-level mathematics, including Calculus and beyond. Here's a few things:     They can be shown horizontally or vertically as we saw with the liquid above. The classic cartesian plane (also called the -plane) is really both a horizontal and vertical number line that cross when both are 0.    The number lines don't need to have units of 1. For example:          would be a way to show numbers in the hundreds.    To understand the order of numbers (especially with Place value, see page place:value), one often uses number lines.    To introduce rounding (see section ), it is helpful to use a number line.    One can show negative numbers (see Chapter ) by continuing them to the left. Thus the number line stretching in both directions represents the integers , which include the whole number and the negative counting numbers.    The number line leads easily to the notion of a fraction as will be seen in Chapter . For example, we can use the number line:               Bar Diagrams  Another important model is that of a bar diagram . For example, the fish above can be abstracted further as the following:          and we can also just provide the bar and the length of the bar with:          Bar diagrams are powerful visual models. We will use these often in this book starting in section . In fact, with many word problems we will be able to solve some tricky problems with a diagram that typically would need algebra to solve. Bar diagrams appear in all four arithmetic operations as well as with fractions, ratios and percents. In short, they are the work horse of visual diagrams and models.     The Hindu-Arabic Number System, Egyptian numbers and the Place Value System  So far in this text we have already used numbers in this book, but need to pause a second to explain what we mean. The number system that we in the United States (and pretty much throughout the world) use is called the Hindu-Arabic system and its history is fascinating. We will also learn later in this chapter that there are other number systems.  The Hindu-Arabic number system uses the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and is what is called a place-value system in that the digit represents different values depending on its location. For example 352 means 3 hundreds, 5 tens and 2 ones. For compactness we will call this the decimal system .  This means in the decimal example that the 3 in 532 means “thirty” while the 3 in 352 means “three hundred”. Another way to look at this, is the expanded form of the number or and we will often use this form in the arithmetic algorithms in Chapter .   Egyptian Numbers  There are a lot of other number systems that have been used by humans throughout known history. We'll talk briefly here about Egyptian numbers and section will go over a few more. The Egyptian system dates to about 3000 BCE and uses symbols for powers of 10. For example:   Egyptian Numbers         Name  Symbol\/Glyph  Decimal value    Stroke  |  1    Heel    Glyph in the shape of an upside down U.     10    Coil    Glyph in the shape of an coil opening counterclockwise finishing with a tail pointing down.     100    Lotus    Glyph in the shape of an upside down U.     1000    Finger    Glyph in the shape of an upright finger with a slight bend.     10,000     To construct a number, like 4,372 (in Hindu-Arabic), we write 4 lotus symbols, 3 coil symbols, 7 heel symbols and 2 stroke symbols or       and the spatial relationship between the symbols doesn't matter. They can go left to right or stacked on top. We'll look at adding and subtracting with Egyptian later. Because the positioning doesn't matter in Egyptian, this is not a place-value system.    Place Value and Ordering  One aspect of place value that can be challenging is that of order numbers. If we have the problem, order the numbers 523, 325, 352, 532 from smallest to largest , it's important to understand place-value. For this, the smallest numbers have the smallest leading digit (representing the hundreds) and then for equal values in the hundreds, determine the same for the tens. In this case, the order from smallest to largest is   A number line is a good way to also order numbers. Once all of the numbers are on the line:          and then it is clear looking at the number line that the numbers from smallest to largest are those from left to right.    Multiplying by powers of ten  Multiplying a number by 10 in the Hindu-Arabic is quite easy. We will define multiplication later, but recall that multiplying by 10, is simply adding a zero to the end of the number. That is . We will also be able to explain this using the chip model. Multiplying by 100 or 1000 is just repeating this rule as needed and dividing works nicely as well and we'll see this in depth in Chapter .    Advantages of Place Value Systems  We're all familiar with a place-value system, so it may seem strange to think about other systems, but we just saw Egyptian numbers. Another common non-place-value number system is that of Roman Numbers, that we will see in section , which uses I for 1, V for 5, X for 10, etc.  There are many reasons why nearly everyone in modern times uses the decimal place-value system, the Hindu-Arabic numbers.     Equivalent numbers are written using fewer symbols. For example, all numbers less than ten thousand can be written down with 4 or few symbols.    This extends to decimals (we'll see later in the course), such as 123.45678    We can reasonably write down large numbers like 123,456,789,012,345,678.    Easy methods exist to do addition\/subtraction. It is much easier methods to do multiplication, division in place-value systems than others.    Multiplying and Dividing by powers of 10 are easy to do.    Every society around the world uses it.       The Coin Model for Hindu-Arabic Numbers  The following is an example of the coin model of Hindu-Arabic numbers. At first, one can think of using coins (pennies, dimes, dollar) to represent 1, 10, 100 (powers of 10). For example, the following denotes 317:          After developing this model where coins are thought of (or actually used as manipulatives), we can abstract to a chip model. We will do some addition and subtraction with this in the next section and the expand in Chapter which develops the standard algorithms for arithmetic. The chip model will give a nice way to understand the algorithms.    The Dots-Line-and-Boxes (DLB) model  A standard introduction to place value in base-10 is to use manipulatives that are similar to the following:   where the small blocks, called a unit represents 1, the sticks (called a 10-frame) with length of 10 units, represent ten, the yellow squares represent 100 and the green block represents 1000. The smallest can be represented as              (0,0) grid (1,10)  (0,0) grid (10,10)    unit  ten-frame  hundred-frame    However, as a student gets older they can abstract these with symbols that are easier to write. The result is often is the dots-lines-and-boxes (DLB) model:            Write 438 and 292 in the DLB model       . This means draw 4 boxes, 3 lines, and 8 dots or             . Draw 2 boxes 9 lines and 2 dots.                    These are exercises associated with this section.     Convert the following numbers into the indicated number system. 𓀀     Convert these to decimal: 𓎆𓎆𓎆𓎆𓎆𓏺𓏺𓏺𓏺𓏺𓏺                      Convert these to Egyptian: 12, 53, 981, 1050      Convert these to decimal: XIII, LIV, CCCXXII, MCMDLXXIV      Convert these to roman: 34, 78, 453, 1678, 2945       For each of the following, write the decimal number associated with the following:     five thousand, three hundred, fifty-one      three million, forty-seven thousand, two hundred five.      seventy-six billion, two-hundred thirty-nine million, twenty-seven thousand, three hundred.      five quadrillion, ninety-one million, forty.       Write each of the following decimal numbers in word form:     374      14,045      7,400      3,040,700      382,983,239,126       Write the following decimal numbers using coins.     38      462      1,602       Draw the appropriate portion of the number line and place the following numbers on the number line: 3802,3828, 3245, 3542      Order the following from smallest to largest: 546,465,545,654,645      What is the largest 4-digit number that can be written with the digits 3,0,8,5? What if each of the digits had to be used exactly once? Explain your answer.      "
},
{
  "id": "sect-hindu-arabic-numbers-3-2",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#sect-hindu-arabic-numbers-3-2",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  The counting numbers are the numbers that we count things with, that is, . The whole numbers are the counting numbers together with 0 or .   "
},
{
  "id": "sect-hindu-arabic-numbers-3-5-5",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#sect-hindu-arabic-numbers-3-5-5",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  The following are examples of set models . The number of   marbles    stickers    toy cars     And the following are example of measurement models .   The length of a piece of string    The height of your sister    The amount (volume) of juice in that glass    The weight of this bag of potatoes      "
},
{
  "id": "fig-pencils",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-pencils",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": "       "
},
{
  "id": "fig-dots",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-dots",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": "       "
},
{
  "id": "fig-number-line",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-number-line",
  "type": "Figure",
  "number": "2.1.5",
  "title": "",
  "body": "       "
},
{
  "id": "fig-fish",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-fish",
  "type": "Figure",
  "number": "2.1.6",
  "title": "",
  "body": "       "
},
{
  "id": "fig-measuring-cup",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-measuring-cup",
  "type": "Figure",
  "number": "2.1.7",
  "title": "",
  "body": "       "
},
{
  "id": "fig-asdf",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-asdf",
  "type": "Figure",
  "number": "2.1.8",
  "title": "",
  "body": "       "
},
{
  "id": "fig-number-line-fractions",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-number-line-fractions",
  "type": "Figure",
  "number": "2.1.9",
  "title": "",
  "body": "       "
},
{
  "id": "fig-bar-diagram-simple",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-bar-diagram-simple",
  "type": "Figure",
  "number": "2.1.10",
  "title": "",
  "body": "       "
},
{
  "id": "fig-bar-diagram-01",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-bar-diagram-01",
  "type": "Figure",
  "number": "2.1.11",
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
  "number": "2.1.12",
  "title": "Egyptian Numbers",
  "body": " Egyptian Numbers         Name  Symbol\/Glyph  Decimal value    Stroke  |  1    Heel    Glyph in the shape of an upside down U.     10    Coil    Glyph in the shape of an coil opening counterclockwise finishing with a tail pointing down.     100    Lotus    Glyph in the shape of an upside down U.     1000    Finger    Glyph in the shape of an upright finger with a slight bend.     10,000    "
},
{
  "id": "fig-number-line-02",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-number-line-02",
  "type": "Figure",
  "number": "2.1.13",
  "title": "",
  "body": "       "
},
{
  "id": "fig-ha-coin-model",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-ha-coin-model",
  "type": "Figure",
  "number": "2.1.14",
  "title": "",
  "body": "       "
},
{
  "id": "fig-dlb",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#fig-dlb",
  "type": "Figure",
  "number": "2.1.15",
  "title": "",
  "body": "       "
},
{
  "id": "sect-ha-numbers-10-8",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#sect-ha-numbers-10-8",
  "type": "Example",
  "number": "2.1.16",
  "title": "",
  "body": "  Write 438 and 292 in the DLB model       . This means draw 4 boxes, 3 lines, and 8 dots or             . Draw 2 boxes 9 lines and 2 dots.              "
},
{
  "id": "exercises--1-2",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--1-2",
  "type": "Exercise",
  "number": "2.1.4.1",
  "title": "",
  "body": "  Convert the following numbers into the indicated number system. 𓀀     Convert these to decimal: 𓎆𓎆𓎆𓎆𓎆𓏺𓏺𓏺𓏺𓏺𓏺                      Convert these to Egyptian: 12, 53, 981, 1050      Convert these to decimal: XIII, LIV, CCCXXII, MCMDLXXIV      Convert these to roman: 34, 78, 453, 1678, 2945    "
},
{
  "id": "exercises--1-3",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--1-3",
  "type": "Exercise",
  "number": "2.1.4.2",
  "title": "",
  "body": "  For each of the following, write the decimal number associated with the following:     five thousand, three hundred, fifty-one      three million, forty-seven thousand, two hundred five.      seventy-six billion, two-hundred thirty-nine million, twenty-seven thousand, three hundred.      five quadrillion, ninety-one million, forty.    "
},
{
  "id": "exercises--1-4",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--1-4",
  "type": "Exercise",
  "number": "2.1.4.3",
  "title": "",
  "body": "  Write each of the following decimal numbers in word form:     374      14,045      7,400      3,040,700      382,983,239,126    "
},
{
  "id": "exercises--1-5",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--1-5",
  "type": "Exercise",
  "number": "2.1.4.4",
  "title": "",
  "body": "  Write the following decimal numbers using coins.     38      462      1,602    "
},
{
  "id": "exercises--1-6",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--1-6",
  "type": "Exercise",
  "number": "2.1.4.5",
  "title": "",
  "body": "  Draw the appropriate portion of the number line and place the following numbers on the number line: 3802,3828, 3245, 3542   "
},
{
  "id": "exercises--1-7",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--1-7",
  "type": "Exercise",
  "number": "2.1.4.6",
  "title": "",
  "body": "  Order the following from smallest to largest: 546,465,545,654,645   "
},
{
  "id": "exercises--1-8",
  "level": "2",
  "url": "sect-hindu-arabic-numbers.html#exercises--1-8",
  "type": "Exercise",
  "number": "2.1.4.7",
  "title": "",
  "body": "  What is the largest 4-digit number that can be written with the digits 3,0,8,5? What if each of the digits had to be used exactly once? Explain your answer.   "
},
{
  "id": "sect-addition",
  "level": "1",
  "url": "sect-addition.html",
  "type": "Section",
  "number": "2.2",
  "title": "Addition",
  "body": " Addition   Addition is the mathematical operation that combines two numbers, called the summands or addends . The result is called the sum . For example,   A number line shows this quite nicely. If one starts at 3 and makes 5 hops to the right, results in 8 as shown:           Set Model  Addition in the set model usually entails if there are two collections of objects and one wants the total number of objects.    You have 8 apples and your friend has 5 apples. How many apples do you have together?    The answer is the sum and a model of this could be       But of course, as the student's abstraction increases, using circles or stars would be fine as well.      Measurement Model  Addition in the measurement model involves two measurements and you want to know the total measurement of the two.    A recipe for cookies calls for 4 cups of flour. A recipe for cake calls for 3 cups of flour. How much flour do you need to for both recipes?         and the result is 7, so you would need 7 cups of flour in total.       Properties of Addition  There are three properties of addition that you probably know just by understanding addition.    For any whole numbers, , each of the following hold:     Additive Identity       Commutative Property       Associative Property          The additive identity property shows that adding 0 to any number doesn't change the number. This make a lot of sense after understanding the concept of 0. The commutative property shows that the sum of two numbers is independent of the order of the two numbers. The associative property relies on recalling that when parentheses are present, that one must do the operation inside the parentheses first. This shows if you add the first two then add the result to the 3, the sum is the same as adding the last two, then adding to the first.    What property is being used in each of the following?                .         This is the commutative property . Notice that there are three numbers, but the first two swap places.    This is the associative property . Notice that we have changed the order of operations.    This is the additive identity.        Any-Order Property of Addition   The sum can be done in any order.    We won't present a formal proof here, but this is a consequence of the the commutative and associative properties.   Extended Any-Order Property   The sum of any number of addends can be done in any order.    Again, no formal proof will be done here but this is a consequence of a number of applications of the commutative and associative properties. The following show an example.    The numbers: can be added in any order. For example: are all valid ways to add the 4 numbers.    In Chapter , we will use this property to our advantage to rearrange the sum of numbers to pair up number that we call compatible in which the result is “nice.”    Thinking Strategies for Addition  It is a good skill to have different ways of thinking about mathematical operations. In this section we present some ways to think about addition.   Number Bonds  A number bond is useful for showing the relationship between two addends (the ends) and the sum (in the center). The following shows .       This is a nice way to visualize addition and we will see this below with four-fact families.    Counting On  When beginning to add, like , the answer is easily found by starting at the number 5 (in the counting sequence), then counting two more, ”6,7” arriving at the answer 7. This can be done with young students using fingers, but also works well with the number line, like:       This works fine with adding 1,2,3, just a few to a number, but can be extended by counting by tens as well. Consider . We can start at , add two 10s to get to 33, then add 4 to get to 37. This can be seen with the following number line:       And from the number line, you can see the result is 37.    Tens Combination  Two numbers whose sum is 10 is crucial to do arithmetic operations at all levels. For example, since the numbers 4 and 6 are a tens combination and is shown in the number bond       How many pairs are there that add to 10?     Addition and Place Value  There are multiple approaches to understanding addition and place value. First, using the expanded form of a number, then a chip model and finally the DLB model.   Expanded Form:  As seen above, an addition like is relatively straightforward once a student understands place value. If we used expanded form on these:     This gets a bit more more complicated when the total number of ones (pennies) exceeds 9. For example, can be written as   The writing of is called composing a ten or bundling as we will see with models below. Notice the way that we write these operations. We start with the original problem, and link each step with an equals sign. This is an important skill to develop and we will work on this in Chapter \\html-tag:xref{\\html-attr:ref{\"ch:mental:math\"}\\html-attr:text{\"global\"}}. Until we get there, pay attention to the steps and how they are written.     Coin Model  We can use a coin model to find as       which can be interpreted as 1 dime (10 cents) and 3 pennies (each 1 cent) plus 2 dimes and 4 pennies. The result is 3 dimes and 7 pennies or 37¢.  Again, as we saw above, within one denomination, once you exceed 9, you must bundle. The coin model for is:       The bundling occurs when we take 10 pennies and exchange them for a dime. That is we \\emph{bundle} 10 pennies for a higher denomination coin (a dime).       And it should be clear to see that what is left (not crossed out) is 6 dimes and 2 pennies or 62.    Dots Lines and Boxes (DLB) Model  Alternatively, we can use the DLB (dots, lines and boxes) model seen above. We can write 25 as two lines and 5 dots and 37 as 3 lines and 7 dots.       and we can rearrange the lines and dots to get:       and in this case, we bundle ten dots to get a line or       which again shows 6 lines and 2 dots or 62.  These two models are equivalent, however crossing out and bundling is hard to see visually with the DLB model, however they are equivalent.    "
},
{
  "id": "fig-number-line-addition",
  "level": "2",
  "url": "sect-addition.html#fig-number-line-addition",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": "       "
},
{
  "id": "sect-addition-2-4-3",
  "level": "2",
  "url": "sect-addition.html#sect-addition-2-4-3",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  You have 8 apples and your friend has 5 apples. How many apples do you have together?    The answer is the sum and a model of this could be       But of course, as the student's abstraction increases, using circles or stars would be fine as well.   "
},
{
  "id": "sect-addition-2-5-3",
  "level": "2",
  "url": "sect-addition.html#sect-addition-2-5-3",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  A recipe for cookies calls for 4 cups of flour. A recipe for cake calls for 3 cups of flour. How much flour do you need to for both recipes?         and the result is 7, so you would need 7 cups of flour in total.   "
},
{
  "id": "prop-addition",
  "level": "2",
  "url": "sect-addition.html#prop-addition",
  "type": "Axiom",
  "number": "2.2.4",
  "title": "",
  "body": "  For any whole numbers, , each of the following hold:     Additive Identity       Commutative Property       Associative Property         "
},
{
  "id": "sect-add-props-5",
  "level": "2",
  "url": "sect-addition.html#sect-add-props-5",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "  What property is being used in each of the following?                .         This is the commutative property . Notice that there are three numbers, but the first two swap places.    This is the associative property . Notice that we have changed the order of operations.    This is the additive identity.      "
},
{
  "id": "lem-any-order-add",
  "level": "2",
  "url": "sect-addition.html#lem-any-order-add",
  "type": "Lemma",
  "number": "2.2.6",
  "title": "Any-Order Property of Addition.",
  "body": " Any-Order Property of Addition   The sum can be done in any order.   "
},
{
  "id": "cor-extended-any-order-add",
  "level": "2",
  "url": "sect-addition.html#cor-extended-any-order-add",
  "type": "Corollary",
  "number": "2.2.7",
  "title": "Extended Any-Order Property.",
  "body": " Extended Any-Order Property   The sum of any number of addends can be done in any order.   "
},
{
  "id": "sect-add-props-10",
  "level": "2",
  "url": "sect-addition.html#sect-add-props-10",
  "type": "Example",
  "number": "2.2.8",
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
  "id": "sect-addition-5-3-5",
  "level": "2",
  "url": "sect-addition.html#sect-addition-5-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "composing a ten bundling "
},
{
  "id": "sect-subtraction",
  "level": "1",
  "url": "sect-subtraction.html",
  "type": "Section",
  "number": "2.3",
  "title": "Subtraction",
  "body": " Subtraction   We now turn to subtraction, which is closely tied to addition.    Subtraction is defined as a missing addend. That is is the number such that . The number is called the minuend , the number is the subtrahend and the number is called the difference .    As an example, the number is the number that fits the box: or 5. Using the terminology above:     Subtraction Interpretations:  There are a few standard diagrams associated with subtractions, however we need to define some interpretations before diagrams. Subtraction is used in many ways to solve different types of problems and it is important to understand all of the types with examples. The following show the standard 3 ways of interpreting subtraction with examples from both set and measurement models.   Part-Whole Interpretation  A part of a set or quantity is specified and we want to know how much is needed to make it whole. Find the missing part.     Set Model  There are 12 pieces of fruit (apples and oranges). If 5 are apples, then how many are oranges?    Measurement Model  It takes 19 miles to drive to school. After 7 miles, you stop for gas. How many miles are left in your trip?       Takeaway Interpretation  Remove objects from a set or decrease the measurement by a specified amount.     Set Model  Eve has a basket of 15 pieces of candy. She gives 6 pieces of candy to a friend. How many pieces of candy does Eve have left?    Measurement Model  There are 10 gallons of punch for a party. The guests drank 8 gallons of punch. How many gallons of punch are left?       Comparison Interpretation  Compare two different sets or measurements and ask how much more or less or fewer is one than the other.     Set Model  Zoë has 8 balls and Abby has 5 balls. How many more balls does Zoë have than Abby?    Measurement Model  José is 56 inches tall and Julia is 53 inches tall. How much taller is José?      For each of these the answer is the difference between the larger and smaller numbers.    Subtraction Diagrams for Set Models  Using diagrams to understand subtraction is quite helpful. We first start with set model versions of the three interpretations above:     Part-Whole  For the part-whole interpretation, we can draw the two different objects. The following shows .       This is a bit hard to envision for part-whole because you need to draw the minuend first and then rest you need to calculate, which is not in the spirit of diagrams.    Takeaway  For the take-way interpretation, we draw the total number of objects (minuend) and cross out the subtrahend. An example of is       And note that the difference (answer) is the number of objects that are not crossed out.    Comparison  For the comparison interpretation, you need to be careful to ensure that the diagram shows “how many more”. Here’s another example with fruit showing , which would be how many more cherries than apples do you have?             Subtraction Diagrams for Measurement Models  Since measurement model is applicable to problems with non-integer numbers, we'll use appropriate diagrams for such numbers. This includes number lines and bar diagrams. The following are such model for the three subtraction interpretations.     Part-Whole   . As an example, consider the example: Alice has 8 total pounds of sugar (white and brown). 3 pounds of that are brown sugar. How much is white sugar?   Recall that this means the “whole” is 8 and the part is 3 and we are looking for the remainder. We can draw this with the following:       Alternatively, you one can just use the bar diagram without the number line as:         Takeaway  The operation with the take-away interpretation can be thought of starting with the whole (as measurement) and remove the minuend. Consider the example: If you have a rope of length 8 meters and cut off a piece 3 meters in length, what is the remaining part?   We can do this on a number line with       and the number that you land on is 5 (the difference).    Comparison  Again, we will show . For comparison, two different measurements are given and we are asked how much larger, longer, smaller, etc. one is than the other. Consider the example: Joey's cat weighs 8 pounds and Jill's kitten weight 3 pounds. How much more does Joey's cat weigh than Jill's? .  Stacked bar diagrams work quite well for these, with the two quantities as the length of the two bars:            Thinking Strategies  We consider some basic thinking strategies when performing subtraction. Many of these fall into the realm of mental math, in which one does the operation in one's head.     Counting Down  If the subtrahend is a small number, then counting down is an effective way to calculate a subtraction. For example, starts at the number 7, counts backwards two spots to arrive at 5. One can think of counting down on fingers or better yet, on a number line, like       When the numbers get larger (especially the subtrahend), there are some additional strategies. Consider . Instead of counting down 24 individual numbers, one can first count down by two 10s and then count down by 4 ones.       Resulting in 34 for the answer. This is also helps with the introduction of place value and chip models.    Counting Up  When the subtrahend is larger but close in value to the minuend, \\emph{counting up} is a better strategy. For example, can be found by starting at 14 and counting up to 17, with the result of 3 steps. is to count up from 14 to 17 (for 3), the answer       Similar to counting down, if we have a problem like , we start at 15 and count up to 27. However, first count up by 10 to 25, then up 2 to 27. The answer is 12. Visually, we can see this with:         Four-Fact Families  Combining the relationship between addition, subtraction and the commutative property of addition, results in what are termed four-fact families . For example,   and the number bond that shows all 4 of these:            Subtraction and Place Value  Although we just saw that compensation can often make subtraction problems easier, in general with larger numbers, we need to understand how place value works with subtraction. Some problems, like is straightforward in that if we write this in expanded form as where basically the tens are subtracted and the ones are subtracted. However, consider the example doesn't work so well because the ones results in a negative number. In this case, we need to decompose a ten like:       Subtraction with the chip\/coin model  We will see in a chip\/coin model as a take-away model in that the minuend is drawn as coins\/chips:       and we'd like take-away 3 tens and 7 ones, however, there are not each ones. To show decomposing a ten or unbundling a 10, cross out one 10 and write 10 ones:       and note that this unbundling process shows that a ten has been changed for 10 ones. The total number in the diagram is still 63. Now, we subtract 37 by taking-away 3 tens and 7 ones. We do this by crossing out this.       which shows 2 tens and 6 ones or 26.    Subtraction with the DLB model  We can also use the DLB model to do subtraction. Much like the chip model above, we use a take-away interpretation and cross out the number in the subtrahend. The first example is and we start with writing the DLB model for the minuend:       and then we cross out 4 lines and 2 dots.       And the remaining is 2 lines and 5 dots which represents 25.   "
},
{
  "id": "sect-subtraction-2-2",
  "level": "2",
  "url": "sect-subtraction.html#sect-subtraction-2-2",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  Subtraction is defined as a missing addend. That is is the number such that . The number is called the minuend , the number is the subtrahend and the number is called the difference .   "
},
{
  "id": "sect-subtraction-6-3",
  "level": "2",
  "url": "sect-subtraction.html#sect-subtraction-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "four-fact families "
},
{
  "id": "sect-multiplication",
  "level": "1",
  "url": "sect-multiplication.html",
  "type": "Section",
  "number": "2.4",
  "title": "Multiplication",
  "body": " Multiplication   Multiplication is defined as repeated addition. The result of is the second number added to itself times. For example   In multiplication, the numbers are called the factors and the result is the product . For example,      The notation for multiplication in early elementary school is .    In higher levels, a dot is used instead, for example .       Models of Multiplication   Set Model  Use the Set model, the product is interpreted as 4 groups of 6 objects. For example, if you have 4 bags each containing 6 oranges.         Measurement Model  In this model, is interpreted as 4 hops on the number line each hop of length 6. An example, is that if you have 4 pieces of string, each piece is 6 inches. How long in total is the string?         Array Model  Another model to show multiplication is using a rectangular grid or rectangular array. The example is illustrated in each of the following ways:              Note: be careful of using the interpretation of multiplication as area until the appropriate age. Multiplication is learned quite early, whereas the notation of area is delayed a year or two.     Properties of Multiplication    The following are the axiomatic properties of multiplication, which holds for all whole numbers and :     Multiplicative Identity       Commutative Property:       Associative Property          Let's look at these properties more in depth.     Recalling that multiplication is repeated addition, means adding one time, so the answer is .    This makes sense since you can regroup objects. 4 groups of 5 oranges is the same as 5 groups of 4 oranges. A nice way to show this is with a set model. The following shows 4 groups of 5 as:       and the following shows 5 groups of 4.       Notice in this that the oranges (objects) were not rearranged in anyway, but instead the grouping was done. This is important.  Using the Rectangular Array model, you can interchange the rows and columns to explain the commutative identity, since the total number of boxes (dots) stay the same.    The Associative property adds another level of groups. The operation can be thought of 3 boxes each containing 4 bags each with 5 apples. The following diagram shows this.       This is identical to or 5 boxes, each containing 3 bags of 4 apples which can be showed with       This shows the result 5 groups of 3 groups of 4 or which shows the associative property.       What property is each of the following?    . This is the multiplicative associative property.     . This is the multiplicative identity.     . This is the multiplicative associative property.        Any-Order property of Multiplication   The operation can be done in any order. In fact, the product of any number of factors can be done in any order.     Distributive Property of Multiplication   If and are whole numbers then       Thinking Strategies for Multiplication  As with the previous operations, there are some important ways to think about multiplication. There are a few concepts.   Addition Doubles  This uses the knowledge of doubles like to introduce multiplication by 2.    Skip Counting  This starts students in understanding multiplication consider skip counting by 2, 3 and 5 such as and these are precisely multiplying by 2, 3 and 5.    Multiplication Table  Eventually, students need to know the multiplication table within 12. This should be introduced slowly, using skip counting and the knowledge of the easier rows.    Multiplying by tens or multiples of 10s  A place-value system like our Hindu-Arabic numbers make multiplying by powers of 10 quite easy.  The HA number system makes multiplying by 10, 100, 1000, … or multiples of these quite easy.     "
},
{
  "id": "prop-multiplication",
  "level": "2",
  "url": "sect-multiplication.html#prop-multiplication",
  "type": "Axiom",
  "number": "2.4.1",
  "title": "",
  "body": "  The following are the axiomatic properties of multiplication, which holds for all whole numbers and :     Multiplicative Identity       Commutative Property:       Associative Property         "
},
{
  "id": "sect-multiplication-4-5",
  "level": "2",
  "url": "sect-multiplication.html#sect-multiplication-4-5",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": "  What property is each of the following?    . This is the multiplicative associative property.     . This is the multiplicative identity.     . This is the multiplicative associative property.      "
},
{
  "id": "sect-multiplication-4-6",
  "level": "2",
  "url": "sect-multiplication.html#sect-multiplication-4-6",
  "type": "Lemma",
  "number": "2.4.3",
  "title": "Any-Order property of Multiplication.",
  "body": " Any-Order property of Multiplication   The operation can be done in any order. In fact, the product of any number of factors can be done in any order.   "
},
{
  "id": "prop-distributive-multiplication",
  "level": "2",
  "url": "sect-multiplication.html#prop-distributive-multiplication",
  "type": "Axiom",
  "number": "2.4.4",
  "title": "Distributive Property of Multiplication.",
  "body": " Distributive Property of Multiplication   If and are whole numbers then    "
},
{
  "id": "sect-division",
  "level": "1",
  "url": "sect-division.html",
  "type": "Section",
  "number": "2.5",
  "title": "Division",
  "body": " Division   Division of whole numbers is defined in terms of multiplication.  The number is defined as the number missing in the multiplication .   There are two distinct ways of thinking about division because of the commutative properties of multiplication. The division problem can be thought of as either   The answer to either of these is the same, 6, but can be interpreted a bit differently.     The first is “18 is three groups of what size?” (partitive division)    The second is “18 is how many groups of size 3” (measurement division)       Set Model for partitive and measurement  Division with a set model is interpreted as taking some objects and splitting them into groups. The following two diagrams shows with the two interpretations. The partitive interpretation means we take the objects and put them in three groups. This diagrams shows that:       showing three groups of penguins. The quotient (which is 6) is the number of penguins in each group. Alternatively, the measurement interpretation would be to put the penguins in groups of 3. The following diagram shows this:         Division Interpretation and Word Problems  Word problems clearly have a division interpretation with them. The following example shows two problems with partitive interpretation       Eight juice boxes with a total of 48 ounces come in a multi-pack. How many ounces is each box? Ans:     A string of length 21 inches is divided into 3 equal pieces. How long is each piece? Ans: .       The follow example shows two word problems with measurement interpretation.       One case holds ten juice boxes. How many cases hold 120 juice boxes. Ans:     A case of juice boxes have a total of 96 ounces of juice. If each box contains 6 ounces of juice, how many boxes are there? Ans: .         Division with Remainders  What if we need to answer the problem: How many dozens of eggs are in 30 eggs?   We know that two dozen is 24 eggs and three dozen is 36 eggs, so 30 eggs is two dozen plus some left over.   and in this case because , the quotient is 2 and the remainder is 6.  Models with division and remainders are quite helpful. Below, we show 3 eggs and 2 groups of 12 (dashed) and the remainder of 6.         Quotient-Remainder Theorem For any two whole numbers and with , there are unique whole numbers (the quotient) and (the remainder) such that and .    This can be demonstrated in a general way with the following rectangular model.       where the throughout the diagram indicates that there are an indeterminate number of boxes. Note that the number of rows is the divisor and that the remainder is the number of boxes that don’t fit into a complete row.  This is a visual way to see the quotient-remainder theorem, especially the statements that , that is the number of extra boxes (the remainder) can be 0 and up to (but not including) the number of rows.    Division by Zero  What is ? Using the definition of division, it is the missing factor. That is, we can write this as   Since nothing can go in the box to make this equation work, the answer to this is undefined .  We can also think of this in the division interpretation. From a partitive interpretation, represents the size of the group if 6 is split into 0 groups. Alternatively, from a measurement interpretation, the result is the number of groups of size 0. In either case, these don’t make sense.  What about ? Write this as and now in this case, any number works, but we still say this is undefined .   "
},
{
  "id": "sect-division-4-3",
  "level": "2",
  "url": "sect-division.html#sect-division-4-3",
  "type": "Example",
  "number": "2.5.1",
  "title": "",
  "body": "     Eight juice boxes with a total of 48 ounces come in a multi-pack. How many ounces is each box? Ans:     A string of length 21 inches is divided into 3 equal pieces. How long is each piece? Ans: .      "
},
{
  "id": "sect-division-4-5",
  "level": "2",
  "url": "sect-division.html#sect-division-4-5",
  "type": "Example",
  "number": "2.5.2",
  "title": "",
  "body": "     One case holds ten juice boxes. How many cases hold 120 juice boxes. Ans:     A case of juice boxes have a total of 96 ounces of juice. If each box contains 6 ounces of juice, how many boxes are there? Ans: .      "
},
{
  "id": "sect-division-5-7",
  "level": "2",
  "url": "sect-division.html#sect-division-5-7",
  "type": "Theorem",
  "number": "2.5.3",
  "title": "",
  "body": "  Quotient-Remainder Theorem For any two whole numbers and with , there are unique whole numbers (the quotient) and (the remainder) such that and .   "
},
{
  "id": "sect-alt-numbers",
  "level": "1",
  "url": "sect-alt-numbers.html",
  "type": "Section",
  "number": "2.6",
  "title": "Alternative Number Systems",
  "body": " Alternative Number Systems   For nearly everything that one does in mathematics will be done using the Hindu-Arabic system, we look at some alternative number systems. There are a few reasons for this.     A little history is always good, so you know a little bit about how numbers developed.    It is good to step outside your comfort zone, especially as a teacher. This gives you good perspective.       Tallies  A tally is a system where a vertical line (stroke) represents 1. After five strokes you bundle with a slash: .  This is a nice system for counting a relatively short number of things and is often used in counting in games.    Egyptian Numbers  Recall that we saw Egyptian numbers above in section . It wasn't discussed above, but it is not a place-value system, but is base-10. Also, as discussed above, the DLB model is identical this system with different symbols and we can add and subtract in Egyptian in much the same way as the DLB model. Consider in Egyptian. We will stack them to make bundling easier:       One can clearly see there are 7 coils, 11 heels and 13 strokes. Since it is standard in a similar manner to our base-10 system to have a maximum of 9 symbols, we bundle 10 strokes to get a heel, resulting in 12 heels and 3 strokes. Then 10 of the heels can be bundled into a coil, resulting in 8 coils and 2 heels. The resulting number would be       And this would show in our base-10 system, the number is 823. Subtraction can be done similarly, where unbundling may need to occur.    Roman Numerals  Another non-standard number system that is quite common is that of Roman Numbers . Similar to Egyptian numbers, there are different symbols for different values and the symbols used are typically the UPPER-CASE roman alphabetic numbers as:             symbol  I  V  X  L  C  D  M       value  1  5  10  50  100  500  1000       Because of the 5s, 50s and 500s, this system is a little more complicated than the Egyptian one especially when converting from Hindu-Arabic numbers to Roman and if you do operations in Roman. For example, we can write as LVI and 375 as CCCLXXV.  One wrinkle is how 4s, 9s, 40s, 90s, 400s and 900s are dealt with and that is for 4, 40 or 400, instead of writing IIII, XXXX, or CCCC, write IV, XL or CD. Similarly, 9, 90 and 900 is written as IX, XC and CM. Note that the relative position of the symbols is important. For example, VI is 6 and IV is 4.    Write 2437, 3046 and 994 in roman numbers:       so this is MM then CD then XXX then VII. Merge them together for MMCDXXXVII.     so this is MMM then XL then VI, then this becomes MMMXLVI     which is CM then XC then IV, then together this becomes: CMXCIV       And the following converts from Roman Numbers to Hindu-Arabic.    Write MMDCCXXXVI, MMMCDLXXIV, DCCCLXXXVIII in roman numbers:      For MMDCCXXXVI split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 2736.    For MMMCDLXXIV, split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 3974.    For DCCCLXXXVIII, split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 888.       The next couple of examples shows how to do subtraction with Roman Numbers.    Find by staying in Roman numbers and not switching to Hindu-Arabic.    The easiest way to do this is to break these up into common symbols\/values.   and now for the numerals less than 10, notice that the first number is smaller than the second, so we unbundle a X: and the result is MCDXXVII.    From the previous examples, arithmetic in roman numerals is difficult. Although there some features of place value, due to the fact that are both tens, hundreds and thousands values as well as the half values means there is a lot of bundling\/unbundling needed for even simple operations.    Babylonian Number System  The Babylonian Number system is a base-60 or sexagesimal system which has 59 non-zero digits in multiple positions. It is a blend of a positional system (like the Hindu-Arabic numbers) with different symbols for ones and tens (up to 59).  EXAMPLE?  In two main cases, this system still exists today in that our hour and minutes are subdivided into 60 minutes and 60 seconds. Additionally, breaking the circle in is a result of this as well.    Mayan Numbers  The Mayan number system is another non-decimal number system. The Mayan numbers use base-20 (vigesimal) where there are digits 0 to 19 as shown below:  Numbers are written vertically. For example:          where the bottom box is the ones, the middle box is the number of 20s (remember that's the base) and the top is the number of 400s ($20^2$).  which is which is in Hindu-Arabic numbers.  It's also interesting that the Maya's have a zero digits, which predates the Hindu-Arabic zero by a few hundred years.   Convert to Mayan  Write 1045 in Mayan     There are 2 400s.    The remainder is 245. There are 12 20s in here.    The remainder is 5.        Base-5 Numbers  We will also spend some time this semester talking about base-5 arithmetic. The first question should be why? Nobody uses base-5 at all. There's one reason for doing this and that is to understand our decimal (base-10) system at a deeper level. Before jumping into this section, make sure you understand the coin\/chip model seen in Section . For decimal numbers, recall that we use chips or coins with denominations of 1, 10, 100, 1000 (powers of 10).   Base-5 coin models  Now, let's say instead we have a set of coins (pennies, nickels-worth 5 cents, quarters-worth 25 cents and a fiftoon As far as I can tell this is a completely fictional coin. It's important that it is worth 125 cents, because , so it is the value of the 4th place value in base-5-worth 125 cents We will also write combinations of this with a 5 subscript. If we have 3 pennies, 2 nickels, 4 quarters and 1 fiftoon, which we could draw as       and like decimal numbers, we write the result as where we write the number like in decimal from left to right as largest place value (coin value) to smallest. Note, the base is written out as a subscript.    Converting from base-5 to base-10  The conversion from base-5 to base-10 is relatively straightforward if you think of money. Consider and write it in decimal. We just need to recall the amount of each coin. This number represents 1 fiftoon, 2 nickels and 3 pennies or     Converting from base-10 to base-5  This direction is a little bit more complicated. Let's write the number 486 in base-5.     We first determine the number of fiftoons to use. We can use long division (see Chapter ) as 486125 and the quotient is the number of fiftoons or 3. Then we need the remainder or 111 as well.    Next find the number of quarters in 111 and use long division: 11125 which shows it takes 4 quarters with a remainder of 11.    There are 2 nickels in 11, with 1 left over, so 1 penny.     Overall, there are 3 fiftoons, 4 quarters, 2 nickels and 1 penny. Thus the number 486 in base-5 is     "
},
{
  "id": "sect-roman-numbers-6",
  "level": "2",
  "url": "sect-alt-numbers.html#sect-roman-numbers-6",
  "type": "Example",
  "number": "2.6.1",
  "title": "",
  "body": "  Write 2437, 3046 and 994 in roman numbers:       so this is MM then CD then XXX then VII. Merge them together for MMCDXXXVII.     so this is MMM then XL then VI, then this becomes MMMXLVI     which is CM then XC then IV, then together this becomes: CMXCIV      "
},
{
  "id": "sect-roman-numbers-8",
  "level": "2",
  "url": "sect-alt-numbers.html#sect-roman-numbers-8",
  "type": "Example",
  "number": "2.6.2",
  "title": "",
  "body": "  Write MMDCCXXXVI, MMMCDLXXIV, DCCCLXXXVIII in roman numbers:      For MMDCCXXXVI split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 2736.    For MMMCDLXXIV, split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 3974.    For DCCCLXXXVIII, split into chunks that correspond to multiples of tens, hundreds and thousands. and adding these up results in 888.      "
},
{
  "id": "sect-roman-numbers-10",
  "level": "2",
  "url": "sect-alt-numbers.html#sect-roman-numbers-10",
  "type": "Example",
  "number": "2.6.3",
  "title": "",
  "body": "  Find by staying in Roman numbers and not switching to Hindu-Arabic.    The easiest way to do this is to break these up into common symbols\/values.   and now for the numerals less than 10, notice that the first number is smaller than the second, so we unbundle a X: and the result is MCDXXVII.   "
},
{
  "id": "fig-mayan",
  "level": "2",
  "url": "sect-alt-numbers.html#fig-mayan",
  "type": "Figure",
  "number": "2.6.4",
  "title": "",
  "body": "       "
},
{
  "id": "sect-diagrams-models",
  "level": "1",
  "url": "sect-diagrams-models.html",
  "type": "Section",
  "number": "3.1",
  "title": "Diagrams and Models",
  "body": " Diagrams and Models   Throughout Chapter 1, we saw how diagrams are linked to specific arithmetic problems. This chapter goes in depth into all of the types of diagrams and why we use them...    Set Diagram   Set Diagrams are generally used for small integers or operations with small whole numbers. They are drawn in a way that for each whole number an object is drawn. Generally, they are used to understand the basic operations. For example can be represented easily with a set diagram:       Notice that in Chapter , the set diagrams showed picture of whatever the word problem asked. With abstraction, it doesn’t matter what the object is, so typically diagrams can be used that are easy to draw.  Set diagrams are also helpful in subtraction problems with small whole numbers. However, it is important to understand the three different subtraction interpretations.     Take-Away  Recall that this means that you have some number of objects and take-away or remove some of them. Often, this is shown in a diagram by crossing out. The following shows :       and noting that there are 4 remaining not crossed out.    Part-Whole  This is a bit difficult to show in that you need to represent the whole and then the part. This can be done with two different colors. For example, we could have the diagram:       which could show $7-3$, however, this also shows $7-4$ or $3+4$. But these are all related by the 4-fact family.    Comparison  The number $7-3$ with a comparison interpretation can be shown with the following:       Where it is important to have a ? to be clear what is being sought.       Rectangular Grids (or Arrays)  A rectangular grid or rectangular array is a grid of boxes. It is often used to represent multiplication of small whole numbers, generally less than 10. For example, the following is a representation of .       The result is the total number of squares. They can be understood as 4 groups of 6 or 6 groups of 4.    Number Line Diagrams  A number line diagram is generally a number line with hops shown. An example is the operation and if the take-way interpretation is used, one starts at the 9 on the number line and hops down 3 spots to the result or 6.       Number lines are typically used with addition and subtraction of small whole numbers as well as understanding negative numbers. Recall that number line are quite flexible and we will see them in other chapters include Chapter with introducing fractions as well as operations on them. In addition, number lines are quite helpful for understanding decimals, especially the order properties of decimals that can be challenging to students.    Bar Diagrams   These are the most flexible of types of diagrams for two reasons: 1) a bar can represent any length, so it can be a small whole number, large whole number, fraction, ratios, percents and decimals. 2) All operations can be used in a bar diagram including division as we will see. In the simplest, here is the operation a couple of ways in a bar diagram:       One can see that there are 3 orange boxes and 6 blue ones. There are a total of 9 boxes, therefore the result is 9.  Alternatively, we don’t need to show the shading or the boxes to get:       As you can see, the length of the bar diagram is what is important and as we will see that we can represent addition and subtraction quite easily and with different interpretation multiplication and division as well. Lastly, bar diagrams are very helpful with fractions and ratios and nearly indispensable in percent problems.  We now explore bar diagrams in depth. As noted, they are the most flexible diagram and because of this, they are more complicated and care must be used in drawing and labeling them correctly. The remainder of this section goes through these diagrams in depth. Note that in each of these situations a ? indicates the result of the operation.    Addition  We saw the addition of two numbers using bar diagrams above. Recall that the two numbers being added are called the addends and if the length of each bar are the addends, then the total length is the sum. Consider as a problem to show with a diagram, then that can be represented as:       which is just a bar of length 45 and a bar of length 78 with the two bars laid end-to-end. The total length is the sum or 123.  Alternatively, bar diagrams can be stacked. We will use stacked bar diagrams in many Teacher’s Solutions in section below. These are common with word problems where two quantities are labelled. The addition problem 45 + 78 could be represented:       and as you can see in this diagram, the result (denoted by ?) is along the left side (alternatively the right side can be used as well). The result is still the total length or you can think of the total weight of the bars which is 123.    Subtraction  There are three interpretations of subtraction and all are helpful in understanding subtraction: part-whole, take-away and comparison. If needed, check in the textbook about the differences of these.   Single Bar diagram  Although all three are important to understand, the bar diagrams don’t often differ much with these. For example if we are looking at , the following would represent this.       This diagram could represent any of the three interpretations. Consider the following word problems:     Comparison  Ashley has 9 balloons and she has 3 more than Max. How many balloons does Max have?    Part-Whole  A bowl of 9 brown and white eggs are on the table. If there are 3 white eggs, how many brown ones are there?    Takeaway  Colleen has 9 pencils. If she gives 3 pencils to her sister, how many pencils does she have left?     Each of these situations can be represented with the the above diagram, however as we will see the comparison interpretation is usually better show with a stacked bar diagram.    Stacked Bar Diagram  As just noted, the comparison interpretation is clearer to use a stacked diagram with the two amounts as the lengths of the bars. For example, if we are seeking , then we can make a stacked bar diagram as:       and the difference is and this is the amount that the top bar is longer than the bottom bar.     Multiplication  Multiplication with bar diagrams is a nice way to look at some problems, but not all. For example, if we are seeking for example, we can take a bar and break it up into 6 pieces of length 23. The result is the product . The diagram can be drawn as       The result (denoted with the ?) is . This is also a nice way to see that multiplication is repeated addition. In this example, 23 is added to itself 6 times or .  Also note that a bar diagram is a better diagram for than the rectangular grid model because such a model would have a grid with 6 squares by 23 squares. The result is the same, but it’s not clear where the result comes from due to the large number of squares.  It appears that the bar diagram only works if one of the factors is small, except that we can show multiple units in the following manner. Consider in the following diagram       which shows 45 groups of size 23 each. The result is . It is a good rule of thumb to switch to the method when is more than 8 or 9.    Division  Recall that division is the missing factor in multiplication. That is if we have the problem , then the result (the quotient, ) is the value that satisfies . Try it with some actual values.  Also recall that there are two standard interpretations of division: partitive and measurement. These were covered in section .   Partitive Interpretation  Because of the missing factor notion, the bar diagram for division is the same as that of multiplication except that a factor is sought. For example if we are demonstrating , recall that for partitive interpretation, we are ask the question “45 is 9 groups of what size?” The following diagram shows this.       This diagram would be helpful for the following problem: Katie has 45 cupcakes and wants to take 9 boxes of them to the bake sale. How many cupcakes should go in each?  Notice that this diagram is the same as the multiplication diagram above with the ? and the size of the smaller box swapped locations, but this is because division is precisely the missing factor in multiplication.    Measurement Interpretation  If we examine , alternatively we can use measurement interpretation which asks “45 is how many groups of size 9”? The diagrams for this is:       This diagram would be helpful for the following problem: Katie has 45 cupcakes and wants to make boxes of 9 cupcakes per box for the bake sale. How many boxes will she have?     Other uses of Bar Diagrams  The diagrams here are not an exhaustive use of bar diagrams, but it is important to understand these basics before moving on to more complicated diagrams. We will two-step problems in the next two sections and developing the diagram for these are important in solving them precisely.  Also, we will see bar diagrams with fractions, ratios and percentages in later chapters.     Coin\/Chip Models  We saw coin models in and will spend quite a bit of time on these models in the next chapter. In the previous chapter, we used coins and the following is the coin model for the number 317.       We will abstract this a bit further with the following diagram:       We call this a chip model in that there are chips in each denomination. There is a one-to-one matching between this and the coin model, however this is slightly more abstract. It will make the models in understanding the algorithms of Chapter easier.   "
},
{
  "id": "sect-word-problems",
  "level": "1",
  "url": "sect-word-problems.html",
  "type": "Section",
  "number": "3.2",
  "title": "Word Problems",
  "body": " Word Problems   There are many important reasons for using word problems in learning mathematics. In short, mathematics comes from real-world problems and we need to develop techniques to solve these. However, there are other important reasons.   Keep Student Attention  Although knowing how to do arithmetic operations is incredibly important, they can get a boring after a while.    Showing Students How Math is Useful  Students can begin to see how problems that just arise can be solved with mathematics.    Reinforcing Mathematical Skills  Understanding word problems with different operations shows students.    Help Develop Problem-Solving Skills  Problem solving skills are important independent of mathematics, and such skills don't occur innately; they need to be taught and word problems in key in doing this.    Develop Abstract Thinking  Creating a diagram and writing down a mathematical version of a word problem is helpful in developing abstract thinking.    Developing Multi-step Problem Solving  As word problems get more complex, these can help in understanding the mathematics and works on solving harder problems.     Writing Good Word Problems  If you are trying to write a good word problem or evaluate some from another source, there are a number of things to think about:      The problem should be appropriate for what is being taught. Think about the skills that you want the student to take away. Focus on problems that develop those skills.     The problem should be appropriate for the age-level of the student. Use stickers and toy cars and dolls for example for younger kids. You can branch out to money in bank accounts for older students.     The problem should be as succinct as possible. State a problem with the information needed to solve the problem and not too much more.     Make the problem interesting. Develop a problem with items that students find interesting not too childish and not too adult.     The problem should be realistic. Don't have the student question if a problem isn't real.     The problem should have a single solution or not require knowledge outside the problem.        The following word problems don't satisfy all of the aspects of good word problem. What isn't right about each one and try to find a fix.     He has 8 things and gives 3 to her. How many things does he have left?    Catherine and her friends Gloria, Lydia and Delilah are baking sugar cookies and chocolate chip cookies and oatmeal raisin cookies. The cookies are for a bake sale for her school. The PTA is trying to raise money for new books for the school library. Catherine and her friends makes a total of 120 cookies and sells of them. If each cookie sold for $2, how much money did they raise for the books for the school library?    I am a multiple of 3 less than 30, but not a multiple of 9. What number am I?    A recipe of rum cookies has the ratio of 2:3:5 of tablespoons of rum to eggs to cups of flour? If you use 6 eggs, how much rum did you use?          This isn't an interesting problem. Spice it up. Name the two people. Use an actual item instead of the generic ``thing.'' Instead use:   Jordan has 8 toy cars and gives 3 to his sister. How many cars does Jordan have left?     This problem wanders all over the place and is not succinct. There is a lot of information here that is not relevant including the types of cookies, the names of all of her friends and where the specifics of the money is going to. Consider the following instead:   Catherine is baking cookies for a school fundraiser. She makes a total of 120 cookies and sells of them. If each cookie sold for $2, how much money did she raise?     This problem doesn't have a unique solution. The answer 6, 12, 15, 21, 24 all satisfy the conditions. Perhaps a better question may be:   I am a multiple of 3 between 20 and 30, but not a multiple of 7 or 9. What number am I?     This problem isn't so appropriate for kids at all. We can find a recipe without alcohol. How about:   A recipe of sugar cookies has the ratio of 2:3:5 of cups of sugar to eggs to cups of flour? If you use 6 eggs, how much sugar did you use?          Covering All Interpretations  From a teacher’s point of view, it is important that you are covering problems with all interpretations. Recall that for subtraction there are three interpretations. When writing or assigning problems, ensure that take-away, part-whole and comparison problems are used. For division, make sure that word problems that use both partitive and measurement division are selected.   "
},
{
  "id": "sect-word-problems-3-4",
  "level": "2",
  "url": "sect-word-problems.html#sect-word-problems-3-4",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": "  The following word problems don't satisfy all of the aspects of good word problem. What isn't right about each one and try to find a fix.     He has 8 things and gives 3 to her. How many things does he have left?    Catherine and her friends Gloria, Lydia and Delilah are baking sugar cookies and chocolate chip cookies and oatmeal raisin cookies. The cookies are for a bake sale for her school. The PTA is trying to raise money for new books for the school library. Catherine and her friends makes a total of 120 cookies and sells of them. If each cookie sold for $2, how much money did they raise for the books for the school library?    I am a multiple of 3 less than 30, but not a multiple of 9. What number am I?    A recipe of rum cookies has the ratio of 2:3:5 of tablespoons of rum to eggs to cups of flour? If you use 6 eggs, how much rum did you use?          This isn't an interesting problem. Spice it up. Name the two people. Use an actual item instead of the generic ``thing.'' Instead use:   Jordan has 8 toy cars and gives 3 to his sister. How many cars does Jordan have left?     This problem wanders all over the place and is not succinct. There is a lot of information here that is not relevant including the types of cookies, the names of all of her friends and where the specifics of the money is going to. Consider the following instead:   Catherine is baking cookies for a school fundraiser. She makes a total of 120 cookies and sells of them. If each cookie sold for $2, how much money did she raise?     This problem doesn't have a unique solution. The answer 6, 12, 15, 21, 24 all satisfy the conditions. Perhaps a better question may be:   I am a multiple of 3 between 20 and 30, but not a multiple of 7 or 9. What number am I?     This problem isn't so appropriate for kids at all. We can find a recipe without alcohol. How about:   A recipe of sugar cookies has the ratio of 2:3:5 of cups of sugar to eggs to cups of flour? If you use 6 eggs, how much sugar did you use?       "
},
{
  "id": "sect-teachers-solutions",
  "level": "1",
  "url": "sect-teachers-solutions.html",
  "type": "Section",
  "number": "3.3",
  "title": "Teacher’s Solutions",
  "body": " Teacher's Solutions   Understanding word problems from an educator's side is a crucial skill and it requires understanding a problem at a deep level. Because of this, a common task to ensure that the word problems is known well is to develop a Teacher's Solution, which require three specific parts:   Steps for a Teacher's Solution  A Teacher’s Solution is a solution to a word problem with the following.   A diagram of the word problem. The diagram should show all numerical parts of the problem (and only those in the problem) as well as a ? indicating the quantity that is sought. Most of the Teacher’s solution in this text will show bar diagrams because of the flexibility involved. However, other diagrams may be helpful.    A detailed solution with steps explained as necessary. The level of detailed needed should be compatible with the level of the problem. For example if you solving a 3rd grade problem, don’t include algebra, but at the same time a problem at the fifth grade level shouldn’t need to show details that you would require at 2nd grade.    Answer the question as a full sentence. This is just a good habit to get into.        Solving Word Problems  As discussed above, solving word problems is difficult and there is algorithmic (step-by-step) way to do this will any word problem. Here’s a few ideas about this.     Converting the word problem to an arithmetic or algebra problem. Often a diagram can help this.    Solving the arithmetic or algebra problem.    Interpreting the solution to obtain the answer to the question asked.     In this text, we will concentrate on techniques that do not use algebra, although often problems can be done in a simpler way with algebra. The main reason for this is that we are concentrating on Elementary Education here and all the word problems presented should be solvable without algebra and it is important to know how to tackle them.    Develop a Teacher’s Solution for the following: Patrick has 12 marbles. He gives away 5 of them? How many does he have left?     First we need a diagram. Since the numbers are small, a set diagram may be the right thing to do here. Since this is a take-away interpretation, we will draw 12 marbles and then cross out 5. In this case, this is simple enough not to need a ?. The following is a possible Teacher's Solution:        The answer is . Patrick has 7 marbles left.   Alternatively, we could have used the following as a Teacher's solution:        Which shows that Patrick has or 7 marbles left.   This would have been preferable if the number of marbles were larger that is if it tedious to draw or difficult to count.      Develop a Teacher’s Solution for the following: A bakery made 60 muffins on Monday and 50 on Tuesday. How many did they make altogether?     For this since the numbers are larger, use a bar diagram instead of a set diagram. Also, the context of this problem is important. It is probable that students are learning how to add multiples of 10 and that this should be done with some mental math (see for details), so the column algorithm (see for details) would not be needed.  The following is a possible Teacher's Solution:        There are a total of muffins. The bakery make 110 muffins on Monday and Tuesday.   Note: this could have been done with a stacked bar diagram and labelled Monday and Tuesday like:        This shows that there are muffins made.   The second solution shows the same result and is a bit nicer that it includes the days.    The next example shows a Teacher's solution involving division.    Find a Teacher's Solution to Margaret has 80 muffins and puts them in packages of 5. How many packages can she make?     Although this may seem straightforward, we first need a diagram. This happens to be a measurement division problem because we know the size of the groups (packages) and are looking for the number of groups (packages):        The number of packages is . Margaret can make 16 packages of muffins.       The Unitary Method and Multi-step problems  Multi-step problems are important for developing students mathematical skills in that it requires the ability to think about more complex problems. This section goes over some techniques of solving harder word problems.  We desire to construct a Teacher’s Solution to the following: A school has 120 students. Each student is wearing either a blue or a red t-shirt. If there are 4 times more blue t-shirts than red t-shirts, how many students are wearing a red t-shirt?   We first start with a diagram. We don’t know the total length of either the number of students wearing blue or red, but we do know that the length of the blue diagram should be 4 times the length of the red one. We can show this with:       First, note that this diagram is helpful whenever we know the relationship between two groups. As in the case above, it says that one group is some number times larger than the other group. In later chapters, we'll see these diagrams with fractions and ratios.   Unitary Method  Anytime a problem has a diagram with boxes of the same size including above where one is 4 times larger than the other, we can use the unitary method in which we use information in the problem to build equations with the number of units involved. The above problem will lead to and we got 5 units because the total number of students (120) represents 5 of the boxes. Next, we divide by 5 to get: and since the number of students wearing red is 1 unit, the answer is 24.  The other way to solve this problem is with algebra. If the number of students wearing red is , then the number of students wearing blue is . The total number of students would be , so so there were 24 students wearing red.  Note that the unitary method does the same steps as the algebraic method, so in a way it is a prealgebra type method. It visually builds up the relationship instead of algebraically. Knowing which method with the appropriate age group is important.     Find a Teacher's solution to the following problem using the Unitary method: Jordan weighs 7 pounds less than Charlie. Albert weighs twice that of Charlie, if they weigh 193 pounds altogether, how much does Jordan weigh?     First a diagram. Since there are three people in this problem we'll do a stacked bar diagram with 3 bars.       To find the solution, note that if Jordan weighed 7 more pounds then there would be 4 equal units in the diagram and the total weight would be . Thus, So this means that Charlie weighs 50 pounds. Jordan weighs pounds.    Note in the solution above, we added some to make 4 equivalent boxes (units) and then performed steps with the units. The following shows an similar type solution:    Find a Teacher’s solution to the following problem. Use the Unitary method: José has $240 and Maria has $180. How much should José give to Maria so then each have the same amount?     We'll start with a stacked bar diagram:       and note that the amount that José should give to Maria is half of the difference between them. One can think of moving that part to Maria's bar, so they are the same.  The difference is , so So José should give Maria $30 so they each have the same amount of money.    Note that in this example, you needed to understand that the difference in their money needs to be divided by 2. This makes two equal sized boxes (units) and hence the unitary method works.   "
},
{
  "id": "sect-teachers-solutions-2-2",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-2-2",
  "type": "Note",
  "number": "3.3.1",
  "title": "Steps for a Teacher’s Solution.",
  "body": " Steps for a Teacher's Solution  A Teacher’s Solution is a solution to a word problem with the following.   A diagram of the word problem. The diagram should show all numerical parts of the problem (and only those in the problem) as well as a ? indicating the quantity that is sought. Most of the Teacher’s solution in this text will show bar diagrams because of the flexibility involved. However, other diagrams may be helpful.    A detailed solution with steps explained as necessary. The level of detailed needed should be compatible with the level of the problem. For example if you solving a 3rd grade problem, don’t include algebra, but at the same time a problem at the fifth grade level shouldn’t need to show details that you would require at 2nd grade.    Answer the question as a full sentence. This is just a good habit to get into.     "
},
{
  "id": "sect-teachers-solutions-3-5",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-3-5",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Develop a Teacher’s Solution for the following: Patrick has 12 marbles. He gives away 5 of them? How many does he have left?     First we need a diagram. Since the numbers are small, a set diagram may be the right thing to do here. Since this is a take-away interpretation, we will draw 12 marbles and then cross out 5. In this case, this is simple enough not to need a ?. The following is a possible Teacher's Solution:        The answer is . Patrick has 7 marbles left.   Alternatively, we could have used the following as a Teacher's solution:        Which shows that Patrick has or 7 marbles left.   This would have been preferable if the number of marbles were larger that is if it tedious to draw or difficult to count.   "
},
{
  "id": "sect-teachers-solutions-3-6",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-3-6",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": "  Develop a Teacher’s Solution for the following: A bakery made 60 muffins on Monday and 50 on Tuesday. How many did they make altogether?     For this since the numbers are larger, use a bar diagram instead of a set diagram. Also, the context of this problem is important. It is probable that students are learning how to add multiples of 10 and that this should be done with some mental math (see for details), so the column algorithm (see for details) would not be needed.  The following is a possible Teacher's Solution:        There are a total of muffins. The bakery make 110 muffins on Monday and Tuesday.   Note: this could have been done with a stacked bar diagram and labelled Monday and Tuesday like:        This shows that there are muffins made.   The second solution shows the same result and is a bit nicer that it includes the days.   "
},
{
  "id": "sect-teachers-solutions-3-8",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-3-8",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Find a Teacher's Solution to Margaret has 80 muffins and puts them in packages of 5. How many packages can she make?     Although this may seem straightforward, we first need a diagram. This happens to be a measurement division problem because we know the size of the groups (packages) and are looking for the number of groups (packages):        The number of packages is . Margaret can make 16 packages of muffins.    "
},
{
  "id": "sect-teachers-solutions-4-8",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-4-8",
  "type": "Example",
  "number": "3.3.5",
  "title": "",
  "body": "  Find a Teacher's solution to the following problem using the Unitary method: Jordan weighs 7 pounds less than Charlie. Albert weighs twice that of Charlie, if they weigh 193 pounds altogether, how much does Jordan weigh?     First a diagram. Since there are three people in this problem we'll do a stacked bar diagram with 3 bars.       To find the solution, note that if Jordan weighed 7 more pounds then there would be 4 equal units in the diagram and the total weight would be . Thus, So this means that Charlie weighs 50 pounds. Jordan weighs pounds.   "
},
{
  "id": "sect-teachers-solutions-4-10",
  "level": "2",
  "url": "sect-teachers-solutions.html#sect-teachers-solutions-4-10",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": "  Find a Teacher’s solution to the following problem. Use the Unitary method: José has $240 and Maria has $180. How much should José give to Maria so then each have the same amount?     We'll start with a stacked bar diagram:       and note that the amount that José should give to Maria is half of the difference between them. One can think of moving that part to Maria's bar, so they are the same.  The difference is , so So José should give Maria $30 so they each have the same amount of money.   "
},
{
  "id": "sect-thinking-strategies",
  "level": "1",
  "url": "sect-thinking-strategies.html",
  "type": "Section",
  "number": "4.1",
  "title": "Thinking Strategies",
  "body": " Thinking Strategies   First, recall that there are three addition properties that were introduced in . Let and be any whole number. Then     Additive Identity       Additive Commutative       Additive Associative        as well as the Any Order Addition Lemma ( )  Often with the following thinking strategies, we will cite these properties.    Thinking Strategies for Addition  This section discusses good ways to think about adding numbers using the properties above.   Counting-on  This uses the idea of starting at the first addend and then counting on the second addend. For example starts with 7 and then adds on 2 to get to 9.  When the second addend is small the counting-on method is a good thinking strategy. In addition, an example like can be thought of as counting on if you count by 10s.    Commutativity  One can use the additive commutative property ( ) to help in other operation. For example, can be thought-of in the “counting-on” method, that is start at 2 and count up 6 more to get to 8. However, if we use the commutative property, then is easier to use the counting-on method. In short, if either addend is small, count on with that number.    Doubles  The double are important to know and will help when getting to multiplication. See the next section.    Tens Combinations  Recall that the tens combinations are pairs of numbers that add to 10 or .    Adding Ten or One Hundred  Consider . As we saw above, we can think of this using commutative and counting on to get and count up from 10 to 6 to get 16. After that is natural, one should be able to add multiples of ten easily. For example in , recall place value to get:     Compatible Numbers  Compatible numbers are those that add to a resulting “nice” number. This result is often a multiple of 10 or 100 and are helpful in thinking strategies. The following are example of compatible numbers with respect to addition: , , , , .  Notice in the first 3 pairs, the ones digits form a tens combination and in the latter 2 pairs, the tens digits form a tens combination.  Consider a problem like . Perhaps you might think to do the following:   Many of these steps are challenging to do mentally mainly because there is bundling that needs to occur. Instead, we might use the any-order corollary, we can add these in any way and These pairs are compatible     Compensation  The method of compensation is a way to add larger numbers in a more efficient way by changing the addends. An example is . We will see below how to think about place value with this, however if we write this as Using the Associative Property   This works by transferring any number from one addend to the other. We can also write this as        We now look at a few examples of using these thinking strategies.    Use compensation to find the following addition problems:                          One way to think about is to think about transferring 3 from the second addend to the first.       alternatively, we transfer 2 from the first to the second addend or:         One way to tackle one is to transfer 2 from the second addend to the first:         One way to approach is to transfer 7 from the second addend to the first:            Compensation is the most difficult, but perhaps the most important thinking strategy for addition. We show an algebraic as well as a diagram that shows this. First, let's say that we want to find and we can write , then the compensation is the transfer of from to .  A bar diagram leads nicely to this. We will use the example , but this works for any pair of addends. First, we will draw a bar diagram for        Next, let's consider the compensation where has been transferred from the first addend to the second one. This can be drawn as another above:         Thinking Strategies for Subtraction  This covers some ways to think about subtraction problems. We saw the counting down and counting up in , but we will explain this with some larger numbers. The compensation method is similar to that of addition, but works a bit differently.   Counting Down  If we are thinking of a problem like , you can use counting down as starting at 65 and counting down 23. However, it's easier to count first by 2 tens, then by 3 ones. The number line below shows this:         Counting Up  Similar to counting down, if we have a problem like , we start at 23 and count up to 65. However, first count up by tens to 63, then up 2 to 65. Visually, we can see this with:       and this shows that the result (difference) is the total number of hops or 42.    Compensation  Similar to that of compensation with addition, we can simplify calculations involving subtraction. Consider the following:   Note: since one can add any number, typically it's best to add or subtract a number to make the subtrahend a multiple of 10 (or as we will see later a multiple of 100). Note that if we subtract 4 from each like:   is correct, however the calculation is easier to do than . Why?    Compatible Numbers  Similar to that of compatible numbers for addition, compatible numbers for subtraction are those that are easier to do or result in “nice” numbers, like those with multiples of 10 or 100. The following are compatibles , , , . This allows us to do some operations like . If we work this from left to right:   and you should notice that the last operation was easy to do, but the first was not. Instead we can rearrange things as:   and all of these operations are relatively easy to do.     Evaluate the following subtraction problems using compensation:                             Notice that this one requires to be done which isn't too bad using counting down. However, alternatively, one can do this problem using: with the same result and this doesn't require an unbundling.       Let's look at a diagram to show why this works. We'll consider the last problem and will add 7 to both the minuend and subtrahend. To see this most easily, we'll use a stacked bar diagram like:       To demonstrate the compensation, we'll add 7 to the end of both bars. Visually, this will be easier if we do so on the left end:       And the reason this works is because the difference (the ?) hasn't changed by adding the same amount to each end of the bars.  Subtraction compensation allows for subtracting the same amount as well. This would be seen visually by removing the same amount off each bar.    Thinking Strategies for Multiplication  Recall that there are three properties of multiplication that we saw in as well as the distributive property. If and are whole numbers then     Multiplicative Identity       Multiplicative Commutative       Multiplicative Associative       Distributive Property        There are 3 standard stages for teaching mathematics which we will cover. Before this, a student should be proficient at:   counting to 100,    addition doubles from to ,    skip counting by 2, 3, 5 and 10.      Compatible Numbers and Any-Order Multiplication  Similar to that of addition, we can use any-order multiplication to do operations. Consider . Although we can go left to right in multiplication, it is simpler if we collect by compatible numbers. In this case, note that , which is an easy number to multiply.     Compensation with Multiplication  Compensation is a good thinking strategy for pairs of numbers that can be done easier in a little different form. For example, if have , we can write and then use the associative property.   The following show a few other examples:    Find the following using compensation:                                Why does compensation work for multiplication? It is basically the associative multiplicative property. In general, if we have the number and such that , Note that since we are using variables here, we use a to denote multiplication instead of the symbol. then   The following diagram also shows compensation for multiplication of . We first start with a grid showing . We'll color half as orange and half as blue.       Restacking the blocks as:       results a grid of lengths 7 and 10, showing that .    Multiplying by 4,5,8,9,10,25,100  The numbers 4,5,8,9,10,25,100 are easier to multiply than other numbers. When you see these, take advantage of the following strategies.    Multiply by 4  Just double the number twice. For example,     Multiply by 5  Take the number and halve then multiply by 10 (or flip the order of this). For example,     Multiply by 9  Use the rule . That is multiply by 10 then subtract the number. For example,     Multiply by 10  Append a 0 to the end of the number. For example,     Multiply by 25  Multiply the number by 100 and divide by 4 (or flip the order). Note: we will see division by 4 below, but you can divide by 2 twice. For example,     Multiply by 100  Append two zeros to the end of the number. For example,      Thinking Strategies for Division   Compensation  Compensation for division uses properties of division and we’ll assume that the result of the division has no remainder. Let , that is that is a multiple of , the divisor. Also, assume that and have a common factor, , that is and , therefore we can write:   There are a number of common places where compensation is nice to do with division as the following examples show.    Divide by 4  Halve twice. For example,     Divide by 5  Double then divide by 10. For example,     Divide by 10  Remove a zero from the end of the number. For example,     Divide by 25  Multiply by 4 then divide by 100. This is generally easiest to think of doubling twice. The following examples show an good way to think about this. or     "
},
{
  "id": "sect-thinking-strategies-3-11",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-3-11",
  "type": "Example",
  "number": "4.1.1",
  "title": "",
  "body": "  Use compensation to find the following addition problems:                          One way to think about is to think about transferring 3 from the second addend to the first.       alternatively, we transfer 2 from the first to the second addend or:         One way to tackle one is to transfer 2 from the second addend to the first:         One way to approach is to transfer 7 from the second addend to the first:           "
},
{
  "id": "sect-thinking-strategies-4-7",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-4-7",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  Evaluate the following subtraction problems using compensation:                             Notice that this one requires to be done which isn't too bad using counting down. However, alternatively, one can do this problem using: with the same result and this doesn't require an unbundling.      "
},
{
  "id": "sect-thinking-strategies-5-6-4",
  "level": "2",
  "url": "sect-thinking-strategies.html#sect-thinking-strategies-5-6-4",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  Find the following using compensation:                               "
},
{
  "id": "sect-mental-math",
  "level": "1",
  "url": "sect-mental-math.html",
  "type": "Section",
  "number": "4.2",
  "title": "Mental Math",
  "body": " Mental Math   As discussed earlier, mental math plays an important role in development the understanding of arithmetic. It is important to have an understanding     of the place value system,    of the properties of addition, subtraction, multiplication and division,    that answers can be arrived at in different ways with some much easier than others.     In short, educators should have a firm grasp of number sense and arithmetic operations. Practicing these techniques can help you get better at all of these and building a strong mathematical foundation.    Writing Mental Math  This section seems to be self-contradictory. Mental math means doing math in your head and writing the steps down seems to be the antithesis of what we want. There are two main reasons for becoming adept at writing mental math:     From an educator's point of view, knowing the students thinking is important, so as you learn this, writing down the steps means you are able to show your thinking.    Writing the steps down emphasizes the mathematical logic of your steps.     Written Mental MathThe following aspects show good mental math steps:     Start with the original problem, that is all parts.    For each step, use an to the next step. The left and right sides must be equal.    You can work left to right or top to bottom or a little bit of both.    Some mental math methods can be helped with annotations (examples shown below), however it should be clear what you are doing on each step.     First, here is a nice example showing how to solving a mental math problem.    Find the following using mental math and show your steps:                           Although this is sufficient to show work. If you don't quite follow, here's what we did:   For the first step (from the left side to the right side of the first =), we have used the additive any-order property and put parentheses around terms to be added.    For step two, add the terms in the parentheses.    For the last step, add the three terms. Adding multiples of 10 are fairly straightforward.   Alternatively, you can stack the steps vertically like:   and notice that the first steps (first line) shows an equation. The remaining steps mean that the line above it is equal to the current line.       This is a compensation problem and we'll add 1 to both the minuend and subtrahend to get an easier problem.       This is a compensation problem using multiplication and in short transfer a 2 from the 86 to the 5. The above steps shows this clearly.       The reason for writing mental math this way is that what this shows is that the original problem is linked to the last step by equal signs so that it is clear what the original problem's answer is.  A common way that student's often solve this before learning the details of why writing these are important would look like this:    and the spirit of the problem is there in that the student sees the terms and are compatible numbers.    Mimicking the Algorithms  If you are really good at the arithmetical algorithms (column algorithms or long division) that we will see in , perhaps you wonder why you can’t just do these in you head. The answer is, you can. Here are a few examples on how to write these out. Notice with these that you use the expanded form of the number for the first step.    Use Mental Math to show the following operations:                          For this, notice that we are using the distributive property to write these out:     For        For        For        For             Rearranging and Compatible Numbers  Rearranging often helps if one can identify compatible numbers, that is pairs or groups of numbers that combine advantageously. These can be tricky and you need to be able to identify pairs of numbers that add or multiply to “nice” number. The following shows some examples that rearrange to perform compatible numbers first.    Find the following using mental math:                                Notice that we rearranged to move the compatible numbers and , the first is 100 and the second is a multiple of 10.       In this case, we rearranged to move the 2 and 5 to multiply first, since this is 10 and it’s easy to multiply by 10.       In this case, there are 5 numbers, so try to identity terms that add nicely, so look for tens combinations. Note that since we’re looking for tens combinations, the result requires a bundling. So the tens on can be thought of as .       In this case, note that the product of and is 100, so we combine those and combine the remaining terms.         Compensation  We covered compensation Compensation can be used with all 4 arithmetics operations, but remember that each one works a little differently. If you need, Recall:     For addition, shift a number from one addend to the other:                  For subtraction, add or subtract the same number to both subtrahend and minuend:                   We could have . Why did we do the above?    For division, multiply or divide by the divisor and dividend by the same number.                     Other examples:                           "
},
{
  "id": "sect-mental-math-3-7",
  "level": "2",
  "url": "sect-mental-math.html#sect-mental-math-3-7",
  "type": "Example",
  "number": "4.2.1",
  "title": "",
  "body": "  Find the following using mental math and show your steps:                           Although this is sufficient to show work. If you don't quite follow, here's what we did:   For the first step (from the left side to the right side of the first =), we have used the additive any-order property and put parentheses around terms to be added.    For step two, add the terms in the parentheses.    For the last step, add the three terms. Adding multiples of 10 are fairly straightforward.   Alternatively, you can stack the steps vertically like:   and notice that the first steps (first line) shows an equation. The remaining steps mean that the line above it is equal to the current line.       This is a compensation problem and we'll add 1 to both the minuend and subtrahend to get an easier problem.       This is a compensation problem using multiplication and in short transfer a 2 from the 86 to the 5. The above steps shows this clearly.      "
},
{
  "id": "sect-mental-math-4-3",
  "level": "2",
  "url": "sect-mental-math.html#sect-mental-math-4-3",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Use Mental Math to show the following operations:                          For this, notice that we are using the distributive property to write these out:     For        For        For        For          "
},
{
  "id": "sect-mental-math-5-3",
  "level": "2",
  "url": "sect-mental-math.html#sect-mental-math-5-3",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  Find the following using mental math:                                Notice that we rearranged to move the compatible numbers and , the first is 100 and the second is a multiple of 10.       In this case, we rearranged to move the 2 and 5 to multiply first, since this is 10 and it’s easy to multiply by 10.       In this case, there are 5 numbers, so try to identity terms that add nicely, so look for tens combinations. Note that since we’re looking for tens combinations, the result requires a bundling. So the tens on can be thought of as .       In this case, note that the product of and is 100, so we combine those and combine the remaining terms.      "
},
{
  "id": "sect-mental-math-6-4",
  "level": "2",
  "url": "sect-mental-math.html#sect-mental-math-6-4",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Other examples:                         "
},
{
  "id": "sect-rounding",
  "level": "1",
  "url": "sect-rounding.html",
  "type": "Section",
  "number": "4.3",
  "title": "Estimation and Rounding",
  "body": " Estimation and Rounding   This section is all about getting approximations to numbers. It is often the case that we need to know ``about'' what the answer is, not exactly the answer.    Rounding  An important skill will be to find a number to the nearest multiple of 10, 100, 1000, etc. For small numbers this is relatively straightforward, but for larger numbers a grasp of place value is key.    Round 73 to the nearest ten.    First note that 73 could either be rounded up to 80 or down to 70. Because 73 is closer to 70, then this is the answer.    The following is the rounding algorithm that is typically used.   Rounding Algorithm     To round a number to the nearest ten, if the ones digit is 0,1,2,3,4 round down, and 5,6,7,8,9 round up.    To round a number to the nearest hundred, if the tens digit is 0,1,2,3,4 round down, if the tens digit is 5,6,7,8,9 round up.    To round a number to the nearest thousand, if the hundreds digit is 0,1,2,3,4 round down, if the hundreds digit is 5,6,7,8,9 round up.    Rounding to higher denominations is similar.      This can be understood visually with a number line. Consider the problem of rounding 73 to the nearest ten. We'll draw the number line with 73 with the two options 70 and 80.       The two options 70 and 80 are 3 units and 7 units away from 73 as shown with:       If a number's ones digit is 5 and you are asked to round to the nearest ten, then this might be a bit of a puzzle. Consider rounding 55 to the nearest ten. If we plot on the number line similar to above:       This is clear that 55 is equally close to 50 or 60. The convention is that if the rounding digit is a 5 that we round up .   Rounding Decimals  Rounding is also important with decimals and we will see how to do this in .     Estimation  Estimation is the process of quickly finding an operation that is close but not necessary the exact answer.  Why is this a good skill to learn?     Helps with learning place value.    Reinforces mental math.    Determines if answers are probably correct.    Helps in long division.      Rounding  Rounding By rounding numbers to the nearest ten (or power of ten), we can get a good idea of the size of a number.    Find . Since and , .     We now look at some important steps for students to work through in estimation:   Step 1:  Rounding to 1-digit arithmetic skills:           .     .     .       Step 2:  Keep track of place value.                   What is a good estimation?  Is all estimation good? For example, if we try to find . Here are some possible answers:                          Although any one if these is a reasonable estimate, The second one rounded both factors up and the resulting approximation is larger than the actual answer. The fourth rounded both factors down and the resulting approximation is smaller than the actual answer.  Perhaps if you’re trying to get close, use one that rounds one up and one down, so either the first or third.    Range Estimates  As we saw above, what we mean by a good estimate depends on what we want. However, it’s common to want to have both a high and low estimate so we know where our answer lies. For example as shown above, is between 900 and 1400. A range estimate is a pair of estimates: one too high, and one too low.  Finding range estimates depends on the operation. We saw in the example above, for multiplication, a high estimate rounds both factors up and a low one rounds both down. This idea also works for addition.    Range Estimate for Addition  Find a range estimate for to the nearest 50.    For addition a high estimate will round both up to the nearest 50   and we have used compensation mental math to do the last calculation. A low estimate is   This allows us to know that the actual value is between 1350 and 1450.    Because of the nature of both subtraction and division, range estimates a bit more difficult for these operations. Although there is a specific rule to doing high and low estimates, let’s think it through first.  Find a range estimate of .  FINISH THIS EXAMPLE    Teaching Estimates  Teaching estimates requires that we teach students why to estimate as well as what makes a good estimate. Often, we can use problems with clear results to emphasize this.    Approximate to the nearest multiple of ten.      Is closest to 61, 6.1 or 0.61?      Claire has $20 to buy groceries. If she buys products that cost $1.99, $1.25, $4.95, $8.15 and $0.95, does she have enough? What if she also has to pay 5%sales tax.      Needs more discussion here.     "
},
{
  "id": "sect-rounding-3-3",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-3-3",
  "type": "Example",
  "number": "4.3.1",
  "title": "",
  "body": "  Round 73 to the nearest ten.    First note that 73 could either be rounded up to 80 or down to 70. Because 73 is closer to 70, then this is the answer.   "
},
{
  "id": "sect-rounding-3-5",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-3-5",
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
  "body": "  Find . Since and , .   "
},
{
  "id": "sect-rounding-6-4",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-6-4",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": "  Range Estimate for Addition  Find a range estimate for to the nearest 50.    For addition a high estimate will round both up to the nearest 50   and we have used compensation mental math to do the last calculation. A low estimate is   This allows us to know that the actual value is between 1350 and 1450.   "
},
{
  "id": "sect-rounding-7-3",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-7-3",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": "  Approximate to the nearest multiple of ten.   "
},
{
  "id": "sect-rounding-7-4",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-7-4",
  "type": "Example",
  "number": "4.3.6",
  "title": "",
  "body": "  Is closest to 61, 6.1 or 0.61?   "
},
{
  "id": "sect-rounding-7-5",
  "level": "2",
  "url": "sect-rounding.html#sect-rounding-7-5",
  "type": "Example",
  "number": "4.3.7",
  "title": "",
  "body": "  Claire has $20 to buy groceries. If she buys products that cost $1.99, $1.25, $4.95, $8.15 and $0.95, does she have enough? What if she also has to pay 5%sales tax.   "
},
{
  "id": "sect-addition-algorithms",
  "level": "1",
  "url": "sect-addition-algorithms.html",
  "type": "Section",
  "number": "5.1",
  "title": "Addition Algorithms",
  "body": " Addition Algorithms   The addition algorithm is primarily used for numbers of 2 or more digits than can’t be easily done with mental math. A simple example is . First, recall the expanded form of these with place-value:   Alternatively, we can see this in a column addition format:   When any of the sums within any place value is greater than 9, this operation becomes a little more difficult. Consider     Prerequisite for Column Addition with Bundling  There are a number of skills that students need to know to handle any addition problem with bundling. These skills include     the one-digit addition for all numbers through 9,    the Place-value system of numbers from Ch. 1.     And more specifically, they must be able to     write numbers in expanded form: and ,    add multiples of 10s, 100s, 1000s: , , , and add a multiple of 10 to other numbers ,    compose a ten (bundling), which means taking 10 ones and making 1 ten or 10 tens and making 1 hundred.       Chip Models For Addition  Recall that the chip model seen in Chapter is that of a coin model where coins of the same denominator are placed in columns. Consider 325, which as a coin model would look like:       and the location of the coins doesn’t really matter.  Instead, we will put the coins in a chart as follows. This is 325 as a chip model.        Chip Model with no bundling  Let's look at an addition problem with the chip model. Consider the problem , which has no bundling within any place value. We can develop this model with:       And lastly, we will just total the chips in each column. The result is 5 hundreds chips, 3 tens chips and 8 ones, so 538 is the result. Use of the addition algorithm shows  COLUMN ALGORITHM SHOWN HERE    Chip Model with Bundling  Let’s look at another chip model for addition, where the sum within a place value exceeds 9. Consider the example .       If we simply counted up all of the chips in a given columns there are 6 tens and 13 ones. This again is a case, where we need to bundle 10 ones chips and make a ten chip. Note: this is the identical coin model where we cashed in 10 pennies for a dime.  To illustrate this on the diagram, we will draw a loop around 10 ones and produce a new ten chip. The ones chips that are exchanged should be crossed out.       And now the number in each column is less than 10, so this is complete. Now we count 7 tens chips and 3 ones chips for a total of 73.  The column algorithm version of this uses numbers for chips, but the result is the same.  COLUMN ADDITION FOR 27+46  where the small 1 in the tens column is the bundled chip from the tens column in the model above.  This procedure is often called carrying , however that term is a bit misleading in that it sounds like digits are moved from one column to another, which is not true, they are rebundled . Worse yet, is the term borrow when we get to subtraction (when is it returned?) This term will be called unbundling.   Mastery of adding two 2-digit numbers results in more difficult problems with bundling. In increasing order of difficulty:     3-digit plus 2-digit (bundle ones),    3-digit plus 3-digit (bundle ones),    3-digit plus 3-digit (bundle tens),    3-digit plus 3-digit (bundle both ones and tens and or hundreds).    4 or more digit numbers with bundling.     We show one more example that is relatively difficult, $637+528$ using the chip model. First, we note that we will need a thousands column in the chart as well.       When we bundle chips, you should work from the smaller to larger place values (columns), since bundling of chips in smaller denominations may affect those in larger ones.  When we bundle chips, you should work from the smaller to larger place values (columns), since bundling of chips in smaller denominations may affect those in larger ones.  With the bundling done, this results in 1 thousands, 1 hundred, 6 tens and 5 ones, which shows that .  COLUMN ADDITION FOR 637+528  And note that the bundled chip in the tens column is the same as the 1 in the tens column in the diagram about. The bundled chip in the 1000s place is the extra 1 in the thousands column in the answer.    Tips for creating good Addition Chip Models A chip model should clearly show the addition process with any bundling needed. Here are some features of your model that you should use.     Clearly put all addends on the diagram. Note you could have more than 2. It’s clearer if you separate each addend with a dashed line.    Show the bundling process in any of the columns that needs it. This includes circling and crossing out the bundled chips and using an arrow to show where those chips are bundled to.    The result should be clear. That is, all chips that are not crossed out should be your result.     Note: all the chip models above are good to study and to see that the tips above are included. Although the models in this book were produced with computer software, hand-drawn ones can work well. The colored chips are nice, but not required, but you should consider placing the bundled chips in locations that separate them from the addends.     Lattice Addition  There are alternatives to performing addition in the standard way using the column algorithm. One of these is called lattice addition . We will show this in multiple steps with the example, .     Step 1:  Write the addends in stacked column form with a lattice as shown below:         Step 2:  Add down the columns and place the ones digit below the diagonal and the tens above the diagonal.         Step 3:  Extend the dashed diagonal lines to the down and right. Then add down the diagonal and do any bundling that is needed.  For example on the second slot (with the 1 and 9 in it), the sum is 10 so write a 0, then the bundled 1 (shown below in red) in the next column.            Base-5 Addition  We are going to apply the addition algorithm to base-5 numbers. First, let’s do this using the chip or coin model. Let’s do . First in a similar way to that of the chip model of addition in base-5, we add the chips for each number to the chart.       Notice that when we bundle, the size of the bundle is 5 (since it is base-5). After the bundling step, just count. The result is   Another thing to note is that the chip model in base-5 is the same as the chip model from above (in base-10) with the only true difference being that any number of chips more than 4 need to be bundled. This is precisely what we mean by base-5.   "
},
{
  "id": "sect-addition-algorithms-4-9",
  "level": "2",
  "url": "sect-addition-algorithms.html#sect-addition-algorithms-4-9",
  "type": "Remark",
  "number": "5.1.1",
  "title": "",
  "body": " Tips for creating good Addition Chip Models A chip model should clearly show the addition process with any bundling needed. Here are some features of your model that you should use.     Clearly put all addends on the diagram. Note you could have more than 2. It’s clearer if you separate each addend with a dashed line.    Show the bundling process in any of the columns that needs it. This includes circling and crossing out the bundled chips and using an arrow to show where those chips are bundled to.    The result should be clear. That is, all chips that are not crossed out should be your result.     Note: all the chip models above are good to study and to see that the tips above are included. Although the models in this book were produced with computer software, hand-drawn ones can work well. The colored chips are nice, but not required, but you should consider placing the bundled chips in locations that separate them from the addends.  "
},
{
  "id": "sect-subtraction-algorithm",
  "level": "1",
  "url": "sect-subtraction-algorithm.html",
  "type": "Section",
  "number": "5.2",
  "title": "Subtraction Algorithms",
  "body": " Subtraction Algorithms   Since subtraction is finding the missing addend in a summation problem, it is not surprising that the subtraction algorithm is similar to the addition algorithm. Let's see an example with two 3-digit numbers.  Consider the subtraction algorithm . We can write this in expand form as or can be viewed in column format as  COLUMN SUBTRACTION for 478-253    Coin Model  Recall that a coin model for this problem is using the take-away interpretation. Practically, this means that put the minuend down in coins and cross out the subtrahend. This could look like:       And the chips that are left are 2 hundreds, 2 tens and 5 ones or 225.    Chip Model for Subtraction  We now apply the chip model for subtraction. We will put the minuend as coins in a table labeled with the chip value in each column. This will look like:       And then subtracting the subtrahend or 253 would be to cross out 2 hundreds chips, 5 tens chips and 3 ones chips. Because there is enough of each of those, this can be done as       The result from this is identical to the coin model or 2 hundreds, 3 tens and 5 ones or 235.    Subtraction with Unbundling  The next important step is to perform a subtraction problem with unbundling. We'll see it first in a chip model for . Let's first examine this in expand form: and the problem with this is that at grades for doing subtraction doesn't make sense. We can't take 8 away from 3. So the 50 needs to be written as and then write the 10 with the ones as:   What we have done is unbundled a ten to make 10 ones. We can unbundle any denomination more than ones to make 10 smaller denominators. For example, we can unbundle a 1000 as 10 hundreds.    Chip Model of Subtraction with Unbundling  We now turn to the chip model for the problem . Again, we will start with writing the chips for the minuend or       and our goal is to remove 2 tens and 8 ones, however, there are only 3 ones to remove in the ones column. We take one of the chips in the tens column and turn it into 10 ones chips like:       and notice that we have removed a ten (by crossing it out) and putting down ten chips in the ones column (red) and clearly show how the chip was unbundled.  The last step is to cross out the subtrahend or 2 tens and 8 ones.       and the diagram above shows that the result is 2 tens and 5 ones or 25.   Here's a few things that make a clear subtraction chip model with take-away interpretation and are recommended:     Only put the minuend on the chart with the chips.    Recall that you are only going to cross out the subtrahend. Don't put the subtrahend on the diagram\/chart.     Make sure that you have enough chips to cross out. If you don't have enough for a particular place value (1s, 10s, 100s, etc.), unbundle a chip from a higher place value, placing 10 chips in the slot you need them in.    Cross out the subtrahend from the diagram.    Count the result. Note the difference should be clear on the diagram from what is not crossed out.      The chip models in this section were designed to teach how to make the model. You can do all of the necessary steps on a single diagram, that is, the last diagram in the steps clearly shows the steps.  The next example shows a challenging subtraction problem using chip models.    Use a chip model to demonstrate using a chip model.    First, start with the minuend, on a chart:       and notice that we won't have enough hundreds or tens to cross out, so first unbundle 1 thousand into 10 hundreds and then 1 hundred into 10 tens:       At this point, there is enough chips to cross out (take-away) from the subtrahend. The last step is to do this. This crosses out 2 thousands chips, 8 hundreds chips, 5 tens chips and 2 ones chips or       And the difference (result) is the chips remaining. This shows 167.  The following is the column algorithm for   COLUMN ALGORITHM for 3019-2852    As discussed, there are many reasons for knowing the algorithms for addition and subtraction. The following example shows that we need to think a bit more abstractly to find the solution (and not let the addition and subtraction get in the way).    Produce a Teacher's Solution to the following word problem: One week, a candy company produced a total of 5327 pieces of candy (red, blue and yellow). If 2378 pieces are red and 1263 are blue, how many were yellow?     This is a two-step word problem that we can do as a single diagram as the following:       And first, we need to find and we'll use the column algorithm  COLUMN ALGORITHM for 1263+2378  For the next step subtract the result 3641 from 5327 and again we'll use the column algorithm:  COLUMN ALGORITHM for 5727-3641  There were 1686 pieces of yellow candy made in that week.    Note that we didn't use the chip model in the Teacher's solution. The chip model is helpful for understanding the column algorithms for subtraction and addition, but is not needed once learned well.    Base-5 Subtraction  We will first use a coin model to understand base-5 subtraction. This works exactly like decimal subtraction we just saw.  Let's try . Recall that do use the chip model we only put the subtrahend on the diagram at first. Then we will cross off the minuend.       Since we wish to cross on one 125s, three 25s, two 5s and 1 one, but there aren't enough 25s and 5s, so we unbundle one each of these, remember that each chip's value is 5 of the smaller chip.       Now for the last step, we cross out the subtrahend:       The result is 1 fiftoon, 1 quarter, 3 nickels and 3 pennies or .  We can also do this with the column algorithm:  Start with the subtrahend and minuend stacked:   We can subtract the rightmost column:   The 2nd rightmost column needs more so rebundle, except we can’t, so to the leftmost column: where means or 5 in decimal. We can now rebundle from the 2nd column to the 3rd:   and once again means or 1 five and 2 ones or 7 in decimal. Now we can subtract in each column: and the result is , just like we saw with the chip model.      First exercise.     "
},
{
  "id": "sect-subtraction-algorithm-6-10",
  "level": "2",
  "url": "sect-subtraction-algorithm.html#sect-subtraction-algorithm-6-10",
  "type": "Remark",
  "number": "5.2.1",
  "title": "",
  "body": " Here's a few things that make a clear subtraction chip model with take-away interpretation and are recommended:     Only put the minuend on the chart with the chips.    Recall that you are only going to cross out the subtrahend. Don't put the subtrahend on the diagram\/chart.     Make sure that you have enough chips to cross out. If you don't have enough for a particular place value (1s, 10s, 100s, etc.), unbundle a chip from a higher place value, placing 10 chips in the slot you need them in.    Cross out the subtrahend from the diagram.    Count the result. Note the difference should be clear on the diagram from what is not crossed out.     "
},
{
  "id": "sect-subtraction-algorithm-6-13",
  "level": "2",
  "url": "sect-subtraction-algorithm.html#sect-subtraction-algorithm-6-13",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  Use a chip model to demonstrate using a chip model.    First, start with the minuend, on a chart:       and notice that we won't have enough hundreds or tens to cross out, so first unbundle 1 thousand into 10 hundreds and then 1 hundred into 10 tens:       At this point, there is enough chips to cross out (take-away) from the subtrahend. The last step is to do this. This crosses out 2 thousands chips, 8 hundreds chips, 5 tens chips and 2 ones chips or       And the difference (result) is the chips remaining. This shows 167.  The following is the column algorithm for   COLUMN ALGORITHM for 3019-2852   "
},
{
  "id": "sect-subtraction-algorithm-6-15",
  "level": "2",
  "url": "sect-subtraction-algorithm.html#sect-subtraction-algorithm-6-15",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  Produce a Teacher's Solution to the following word problem: One week, a candy company produced a total of 5327 pieces of candy (red, blue and yellow). If 2378 pieces are red and 1263 are blue, how many were yellow?     This is a two-step word problem that we can do as a single diagram as the following:       And first, we need to find and we'll use the column algorithm  COLUMN ALGORITHM for 1263+2378  For the next step subtract the result 3641 from 5327 and again we'll use the column algorithm:  COLUMN ALGORITHM for 5727-3641  There were 1686 pieces of yellow candy made in that week.   "
},
{
  "id": "basics-s-sample-exercises-1",
  "level": "2",
  "url": "sect-subtraction-algorithm.html#basics-s-sample-exercises-1",
  "type": "Exercise",
  "number": "5.2.6.1",
  "title": "",
  "body": "  First exercise.   "
},
{
  "id": "sect-multiplication-algorithm",
  "level": "1",
  "url": "sect-multiplication-algorithm.html",
  "type": "Section",
  "number": "5.3",
  "title": "Multiplication Algorithms",
  "body": " Multiplication Algorithms   The goal of the multiplication algorithm is to multiply numbers that are difficult to do with mental math.  Consider first, a multiplication like . This doesn’t fit into any mental math problem, so we will develop an algorithm to solve this. In short, this will include:     writing the second factor in expanded form, ,    using the distributive property, ,    shifting place values when multiplying by 10,    using the 1-digit multiplication facts,    bundling with the addition algorithm.       Stages to Learning Multiplication     Multiplication Facts  As discussed, the multiplication table up to must be known. This was seen in .    Mental Multiplication  This helps bypass the more-complicated general multiplication algorithm.    1-digit Multiplication with no Rebundling  We can start with an example like and recall that this is the same as and can be examined with coin, chip or DLB models.    1-digit Multiplication with no Bundling  We first start with examples like or . This can be done with both chip models and the expand form as shown below.  What we’ve done here is use the distributive property of numbers in the following way:     The Full Algorithm  We will soon look at the problem . The main idea behind the full algorithm is to break up one of the factors into its basic bundles. That is . Then we will perform the operation and add it to . The only difference here is that we need to recall that and multiplying by 10 shifts the value by including a 0 at the end.       Expanded Form of Multiplication  We won’t use a chip model for this because of the size of the numbers makes for a larger number of chips. Instead, we will modify the column addition algorithm.   Notice that in this case, there are 4 single-digit multiplications (that you should do with math facts). Some of them include a multiply by 10 as well. Then the result is that these four numbers need to be added.  The reason this method works is due to the distributive property written out in a different form.   The two distributive properties in the first two steps are also commonly known as FOILing for (First-Outer-Inner-Last) that can be done in one step.    Box Model of Multiplication  An alternative way to look at the expanded form of multiplication is called the box model in which the numbers are written outside the a grid. For example:   Then the products are place inside the grid: and notice that the 4 numbers inside the grid are the same 4 products in the expanded form about in the sum section.  We now just total all four numbers. If this is too much, you can add across first and then add down to get the result 864.    Chip Models with Multiplication  Chip models are helpful in understanding how the column algorithm works and since multiplication is just repeated addition, an understanding of the chip model of addition is all that is needed. The following example shows a relatively simple multiplication problem:    Show a chip model of . Also show the column algorithm and explain the connection between them.    We will start with a simple 1-digit multiplication problem, , which will show as with the following. First start with 4 groups of 13 on the chart:       As with the chip model in addition, we need to bundle 10 of the ones into 1 ten chip.       and this shows that there are 5 tens and 2 ones or 52.  Next, we examine this using column addition. First multiply the 3 and the 4. The result, $12$ and put the ones digit below the line (in the ones column) and the tens digit above the top number. Next, multiply the 4 and the 1 to get a 4. Add the 1 from the attic to get a total of 5.     The next chip model example shows a more complicated chip model.    Show the chip model for as well as the column algorithm and explain the connection.    First start with 6 groups of 367:       and now we need to bundle ones, tens and hundreds. We'll do this in steps starting with ones:       Now we'll bundle the tens:       and next we bundle the 100s:       And this shows that the result is 2 thousands, 2 hundreds, 0 tens and 2 ones or 2,202.  Now let's look at the column algorithm for this. Start with 6 on the bottom row and 367 on the top row: the first steps is to do , write the ones digits (2) below the line and the tens digit (4) above the top row, Next, do the tens column or and add the 4 above the top line to get . Write the ones digits (0) below the line in the tens digit and the 4 above the 3 in the hundreds digit. Next, do the hundreds column and add 4 to get 22. Since this is the last step, write 22 below the line And the result is the same.      Lattice Model of Multiplication  We will look at the lattice model, used above for addition, to perform the multiplication .  First start with a grid of the size according to the number of digits in each factor, write the numbers on the top and left as follows:       And then next, fill in the 1-digit multiplications in the grid for each row\/column of the grid where the tens digit goes above the diagonal line, and the ones below the diagonal as follows:       And the last step, draw diagonal lines like for the addition lattice and add down the diagonals as this shows.       and the two 1s that are blue are the result of bundling a ten from the addition down the diagonals.    Base-5 multiplication  As before, we’ll start with base-5 multiplication’s coin model. As with base-10 multiplication, it is important to know 1-digit math facts in base-5. We will build up a multiplication table:             0  1  2  3  4    0                             1         2         3         4         and first, multiplication by 0 and 1 is quite simple:             0  1  2  3  4    0  0  0  0  0  0    1  0  1  2  3  4    2  0  2       3  0  3       4  0  4       Next, multiplying by 2 is skip counting and remembering in base-5, think pennies and nickels:             0  1  2  3  4    0  0  0  0  0  0    1  0  1  2  3  4    2  0  2  4  11  13    3  0  3  11      4  0  4  13      and the last 4 can also be done with skip counting:             0  1  2  3  4    0  0  0  0  0  0    1  0  1  2  3  4    2  0  2  4  11  14    3  0  3  11  14  22    4  0  4  13  22  31    Now we use this table to perform more complicated multiplications.    Calculate first using a chip model and then using the column algorithm.    First, put 3 copies of on the chart:       And now bundle the ones, remembering to group in size 5.       Next, we bundle the fives:       And then bundle the 25s:       and the result is 2 fiftoons, 0 quarters, 3 nickels and 2 pennies or .  We can also find the product using the column algorithm. Pull out the multiplication table that you made. We'll use the expanded version to make things a bit easier:   where the only bundling in this case needed to occur in the third column (25s) in which 5 twenty-fives became a 125.     "
},
{
  "id": "sect-multiplication-algorithm-6-3",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#sect-multiplication-algorithm-6-3",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": "  Show a chip model of . Also show the column algorithm and explain the connection between them.    We will start with a simple 1-digit multiplication problem, , which will show as with the following. First start with 4 groups of 13 on the chart:       As with the chip model in addition, we need to bundle 10 of the ones into 1 ten chip.       and this shows that there are 5 tens and 2 ones or 52.  Next, we examine this using column addition. First multiply the 3 and the 4. The result, $12$ and put the ones digit below the line (in the ones column) and the tens digit above the top number. Next, multiply the 4 and the 1 to get a 4. Add the 1 from the attic to get a total of 5.    "
},
{
  "id": "sect-multiplication-algorithm-6-5",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#sect-multiplication-algorithm-6-5",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": "  Show the chip model for as well as the column algorithm and explain the connection.    First start with 6 groups of 367:       and now we need to bundle ones, tens and hundreds. We'll do this in steps starting with ones:       Now we'll bundle the tens:       and next we bundle the 100s:       And this shows that the result is 2 thousands, 2 hundreds, 0 tens and 2 ones or 2,202.  Now let's look at the column algorithm for this. Start with 6 on the bottom row and 367 on the top row: the first steps is to do , write the ones digits (2) below the line and the tens digit (4) above the top row, Next, do the tens column or and add the 4 above the top line to get . Write the ones digits (0) below the line in the tens digit and the 4 above the 3 in the hundreds digit. Next, do the hundreds column and add 4 to get 22. Since this is the last step, write 22 below the line And the result is the same.   "
},
{
  "id": "sect-multiplication-algorithm-8-11",
  "level": "2",
  "url": "sect-multiplication-algorithm.html#sect-multiplication-algorithm-8-11",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  Calculate first using a chip model and then using the column algorithm.    First, put 3 copies of on the chart:       And now bundle the ones, remembering to group in size 5.       Next, we bundle the fives:       And then bundle the 25s:       and the result is 2 fiftoons, 0 quarters, 3 nickels and 2 pennies or .  We can also find the product using the column algorithm. Pull out the multiplication table that you made. We'll use the expanded version to make things a bit easier:   where the only bundling in this case needed to occur in the third column (25s) in which 5 twenty-fives became a 125.   "
},
{
  "id": "sect-long-division",
  "level": "1",
  "url": "sect-long-division.html",
  "type": "Section",
  "number": "5.4",
  "title": "Long Division",
  "body": " Long Division   In the time of calculators everywhere, why do we need to learn the long division algorithm to perform a calculation that can take a long time? Well there are three key reasons:     It relates fractions and decimals (we'll see this in detail in Chapter ). It's key in understanding irrational numbers.    It illustrates the notion of a successive approximation and an iterative algorithm. We will see that each step of long division gets closer to the solution.    It is used in Precalculus to factor polynomials finding partial fractions.     The curriculum sequence for division clearly starts with 1-digit divisors before 2 or more digit divisors.    Long Division with 1-digit divisors   Prerequisites  The following are needed for long division by a 1-digit whole number:     A solid understanding of place value.    A solid knowledge of the meaning of multiplication and the basic multiplication facts to .    A solid understanding of the meaning of division (both partitive and measurement).    Multi-digit subtraction with regrouping.    Understanding that [stage=0]153 means .       The Partitive Approach  We start with a partitive-division word problem to explain the steps. As we will see, coin models and examples are helpful for starting.    José wants to put 71 cents into 3 separate jars so each jar has the same number of candies. How many candies go in each? How many candies are left over?    Let's start with a coin model of 7 dimes and 1 penny, which will look like this:       We'll put the dimes into 3 equal piles:       now we unbundle the remaining dime into 10 pennies:       And this shows that there are 3 groups of 2 dimes and 3 pennies with 2 pennies left over. This shows that .  We now look at this in look at the long division version of this.     Step 1:  First, we do the same first step as the coin model above. Determine the number of dimes in each pile. This is 2 and we place the 2 above the 7.     Step 2:  Next, we subtract and bring down the 1 (pennies):     Step 3:  Next, we determine the number of pennies that can be put in each pile or 3. This goes in the ones column in the diagram:     Step 4:  Lastly, just subtract.      In short this the long division is the shorthand version of the coin model.    The following is another example, however, we will use a chip model instead:    Find using a chip model and the corresponding long division. That is think of 7 dollar coins , 3 dimes and 5 pennies divided between 4 people.    First, we'll put the chips on the chart.       Since we are dividing these into 4 groups, we'll make 4 rows in the chart to move the chips:       The next step is to move 100s chips into the rows below. Only 1 will fit in each and we'll cross out the results:       Then we need to unbundle the remaining three 100s chips and move into the 10s columns to equally spread.       For the next step, we move two chips from the top row of the 10s column into the bottom two rows to make equal sized rows:       Next, we unbundle the remaining tens chip to the ones column to equally space into the rows:       The last step is to move 2 of the chips in the ones column on the top row to the bottom two rows:       And now we are done. We have successfully moved the chips from the top row to the bottom four rows so each of the bottom four rows have an equal number in each, which has 1 hundreds chip, 8 tens chips and 5 ones chips. There are 3 ones chips left. This shows that .  We now show the long division and make the connections between the chip model and the long division. First, we'll start with the basic setup of the long division: Just the first step in the chip model, we move 1 hundreds chip into each of each of the 4 rows below it. This one (in the hundreds place of the quotient in blue) represents this. Also, shown is the next step in long division is the subtraction of in the hundreds column and is in red above. This represents the remainder in and is the chips remaining in the hundreds column couldn't be equally divided into the four rows.  This is repeated now for the tens column. The substeps here are:     The 3 from the tens column of the dividend is brought down next to the remainder from the hundreds chips. This is in orange and represents the total number of tens chips after unbundling the remaining hundreds chips.    Then is done.    The quotient 8 (in blue) is written on the top line in the tens columns. The product is written below the 33 and the 1 (in red) is the remainder.        This is now repeated for the ones column:        Measurement approach  Above we examine division using the partitive interpretation. We also can examine long division using the measurement interpretation . Let's first start with a simple example in which long division is a bit overkill to illustrate the point.  Consider , which is interpreted in the measurement sense, as 20 items put in groups of size 6. The following diagram uses the number line to demonstrate this:       One can think of a rope of length 20 inches and need to be cut into pieces of length 6. The long division algorithm:     Find using the measurement approach.    Since it is near impossible to write the number of segments of length 5 that go into 665, we will take another approach. We'll use some mental math first.     We know that , so one hundred segments of length 5 makes it to 500.    There is 165 left over.    We know that so another 30 segments of length 5 goes another 150.    There is 15 left over.     , so it takes another 3 segments. Nothing is left over.    The total number of segments is 133.            The long division algorithm and the Quotient Remainder Theorem  This section should also be titled, Why Does Long Division Work? . As discussed earlier in this text, as teachers, we need to know the why things work, not just how they work. Let's look at the example above: , which again, we can write using long division as  In short, the why this works is a combination of place value and the Quotient Remainder Theorem.  LONG DIVISION of 735 div 4     We first do the division on the hundreds digit: . From the QR theorem, this implies that . Multiplying this through by 100     Then we look at the tens step which is or     Lastly, the ones step is which can be written:     Combine these        Extending the Long Division method to multiple-digit divisors  There isn't anything different with the long division method for larger divisors. It just gets a bit more difficult. Often to make it easier, one can develop a table of multiples of the divisor. The following example shows this.    Find by first finding a table of multiples of 21 and then using the table.    First consider the table of multiples of 21. And this can be generated reasonably easier by successively adding 21 to the previous value.       Next, we'll walk through the long division algorithm using the table. First, we are looking for and looking at the table we given that , so we put 6 in the hundreds column of the quotient and the product (126) below the 129 and then also find the remainder.   The next step, we'll bring the 8 from the tens column of the dividend down and then we want to do $38 \\div 21$. From the table, this is 1 and the remainder will be 14. Put the quotient (1) on the top in the tens column, the product $1 \\times 21$ below the 35 and the remainder below that.   Just bring the 9 (ones digit of the dividend) down:   For the last step (the ones), we seek . Using the table, since 179 is not a product in the table, go to the lower one and find . Thus the quotient of is 8 and the remainder is . These all go on the long division diagram.   This is done because there is nothing left to bring down from the dividend. This shows that .      Long Division using estimation  Although this is nice, it requires that we create a multiplication table (of size 9). This may take longer than actually performing the division.  Instead, we will use estimation to do this. Consider . This one is particularly nice in that the divisor is close to 50 and it is fairly easy to estimate dividing by 50.     The first step will be to determine how many 49 go into 90 and two 49s is too many, so 1 is correct.     And the subtraction has been shown. Then next, the is combined with the , so the next step is . From Section , we handled problems like this. Since , where the last step is compensation.   and again a little mental math for is used. The last step will bring the 0 down to result in the problem , which you can find to have the quotient 3.   The next example is a little more complicated, but uses the same skills.    Find using estimation.    Start with the basics of the long division.     To determine the first quotient, we seek a number larger than the divisor. This number is 1958. We seek a approximation for . It appears that 3 is too large and we'll try 2.   and recall that when we perform the subtraction note that 516 is smaller than 721, so the 2 in the quotient was correct. (If the bottom number was larger than 721, the 3 should be done.) Bring down the 9:   And now we do which is about 7. Let's try that.   And since 122 is smaller than 721, the 7 was the correct choice. Bring down the 4:   And we look for and this is 1. Recall that above we did which is larger than 1224.   This shows that       Base-5 Long Division  We lastly look at base-5 long division. We'll start by doing a chip model of a division problem. Consider . We can write this as       Since we are dividing these into 3 groups, we'll make 3 rows in the chart to move the chips:       We move 3 of the chips in the top row of the 25s column down:       For the last chip in the top row of the 25s column, we unbundle (as 5 five-chips) and spread them evenly       Next, we move the remaining fives chips down below to make the rows even:       And lastly, we move 3 of the ones into the rows evenly:       And since each row now has 1 quarter (25), 2 nickels (5s) and 1 penny (1s) with 1 penny leftover this shows that   Let's look at this in long division style. First, as you probably realize, it is key to have 1-digit multiplication. Recall the base-5 multiplication table:             0  1  2  3  4    0  0  0  0  0  0    1  0  1  2  3  4    2  0  2  4  11  14    3  0  3  11  14  22    4  0  4  13  22  31    We'll write down the steps to solve in a manner similar to that for base-10:     Start with the long division for or     The first step will be to determine , which has a quotient of 1, so   and then we bring the 1 from the dividend down:     Next, find (base-5) which looking at the multiplication table is 2. Add that to the top of the long division and add the product and subtract:   Next, bring the 4 down from the dividend:     Lastly, do the division , which again is 1:      Showing the results are .  We now show how to think about performing long division with a 2-digit divisor:    Find using long division:    First, let's make this a bit easier and build a table of products of 21 which can be fairly easier found by successive addition:   Start the long division:   Our first task is , which from the table is ( is between 42 and 113, so round down):     bring the 4 down from the dividend:   and then we do , which is 0, so include that above the line and bring down the 1 from the dividend:   and now we do , which from the table is 4:   where recall that the subtraction is in base- . The result shows that .     "
},
{
  "id": "sect-long-division-3-3-3",
  "level": "2",
  "url": "sect-long-division.html#sect-long-division-3-3-3",
  "type": "Example",
  "number": "5.4.1",
  "title": "",
  "body": "  José wants to put 71 cents into 3 separate jars so each jar has the same number of candies. How many candies go in each? How many candies are left over?    Let's start with a coin model of 7 dimes and 1 penny, which will look like this:       We'll put the dimes into 3 equal piles:       now we unbundle the remaining dime into 10 pennies:       And this shows that there are 3 groups of 2 dimes and 3 pennies with 2 pennies left over. This shows that .  We now look at this in look at the long division version of this.     Step 1:  First, we do the same first step as the coin model above. Determine the number of dimes in each pile. This is 2 and we place the 2 above the 7.     Step 2:  Next, we subtract and bring down the 1 (pennies):     Step 3:  Next, we determine the number of pennies that can be put in each pile or 3. This goes in the ones column in the diagram:     Step 4:  Lastly, just subtract.      In short this the long division is the shorthand version of the coin model.   "
},
{
  "id": "sect-long-division-3-3-5",
  "level": "2",
  "url": "sect-long-division.html#sect-long-division-3-3-5",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "  Find using a chip model and the corresponding long division. That is think of 7 dollar coins , 3 dimes and 5 pennies divided between 4 people.    First, we'll put the chips on the chart.       Since we are dividing these into 4 groups, we'll make 4 rows in the chart to move the chips:       The next step is to move 100s chips into the rows below. Only 1 will fit in each and we'll cross out the results:       Then we need to unbundle the remaining three 100s chips and move into the 10s columns to equally spread.       For the next step, we move two chips from the top row of the 10s column into the bottom two rows to make equal sized rows:       Next, we unbundle the remaining tens chip to the ones column to equally space into the rows:       The last step is to move 2 of the chips in the ones column on the top row to the bottom two rows:       And now we are done. We have successfully moved the chips from the top row to the bottom four rows so each of the bottom four rows have an equal number in each, which has 1 hundreds chip, 8 tens chips and 5 ones chips. There are 3 ones chips left. This shows that .  We now show the long division and make the connections between the chip model and the long division. First, we'll start with the basic setup of the long division: Just the first step in the chip model, we move 1 hundreds chip into each of each of the 4 rows below it. This one (in the hundreds place of the quotient in blue) represents this. Also, shown is the next step in long division is the subtraction of in the hundreds column and is in red above. This represents the remainder in and is the chips remaining in the hundreds column couldn't be equally divided into the four rows.  This is repeated now for the tens column. The substeps here are:     The 3 from the tens column of the dividend is brought down next to the remainder from the hundreds chips. This is in orange and represents the total number of tens chips after unbundling the remaining hundreds chips.    Then is done.    The quotient 8 (in blue) is written on the top line in the tens columns. The product is written below the 33 and the 1 (in red) is the remainder.        This is now repeated for the ones column:    "
},
{
  "id": "sect-long-division-4-6",
  "level": "2",
  "url": "sect-long-division.html#sect-long-division-4-6",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": "  Find using the measurement approach.    Since it is near impossible to write the number of segments of length 5 that go into 665, we will take another approach. We'll use some mental math first.     We know that , so one hundred segments of length 5 makes it to 500.    There is 165 left over.    We know that so another 30 segments of length 5 goes another 150.    There is 15 left over.     , so it takes another 3 segments. Nothing is left over.    The total number of segments is 133.         "
},
{
  "id": "sect-long-division-6-3",
  "level": "2",
  "url": "sect-long-division.html#sect-long-division-6-3",
  "type": "Example",
  "number": "5.4.4",
  "title": "",
  "body": "  Find by first finding a table of multiples of 21 and then using the table.    First consider the table of multiples of 21. And this can be generated reasonably easier by successively adding 21 to the previous value.       Next, we'll walk through the long division algorithm using the table. First, we are looking for and looking at the table we given that , so we put 6 in the hundreds column of the quotient and the product (126) below the 129 and then also find the remainder.   The next step, we'll bring the 8 from the tens column of the dividend down and then we want to do $38 \\div 21$. From the table, this is 1 and the remainder will be 14. Put the quotient (1) on the top in the tens column, the product $1 \\times 21$ below the 35 and the remainder below that.   Just bring the 9 (ones digit of the dividend) down:   For the last step (the ones), we seek . Using the table, since 179 is not a product in the table, go to the lower one and find . Thus the quotient of is 8 and the remainder is . These all go on the long division diagram.   This is done because there is nothing left to bring down from the dividend. This shows that .   "
},
{
  "id": "sect-long-division-7-10",
  "level": "2",
  "url": "sect-long-division.html#sect-long-division-7-10",
  "type": "Example",
  "number": "5.4.5",
  "title": "",
  "body": "  Find using estimation.    Start with the basics of the long division.     To determine the first quotient, we seek a number larger than the divisor. This number is 1958. We seek a approximation for . It appears that 3 is too large and we'll try 2.   and recall that when we perform the subtraction note that 516 is smaller than 721, so the 2 in the quotient was correct. (If the bottom number was larger than 721, the 3 should be done.) Bring down the 9:   And now we do which is about 7. Let's try that.   And since 122 is smaller than 721, the 7 was the correct choice. Bring down the 4:   And we look for and this is 1. Recall that above we did which is larger than 1224.   This shows that    "
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
  "id": "sect-even-odd",
  "level": "1",
  "url": "sect-even-odd.html",
  "type": "Section",
  "number": "6.1",
  "title": "Even and Odd Numbers",
  "body": " Even and Odd Numbers   Let’s look at this through a lens of even and odd numbers. There are a few ways to describe an even number including:     An even number is any number that you can get by skip counting by twos. For example     An even number of objects can always be paired up (and none left unpaired).    A number which is twice a whole number.    A number whose last digit is 0,2,4,6, or 8.     On the surface, these are all reasonable possibilities, and they seem be consistent with what we think of with even numbers. However, from a mathematical point of view in order to prove properties of even numbers, it is important that we have a simple mathematical definition that will be useful.  Therefore, we will use the following definition:    An even number is number which is twice a whole number. An odd number is one which is 1 more than twice a whole number.    The main reason for choosing this as a definition over others is that is it easier to use to show or prove the other statements. For example, we will use this definition to show that if a number’s last digit is 0, 2, 4, 6 or 8 then the number is even.  Before getting proofs, we can also examine some diagrams of even and odd numbers. Since the notion of even numbers is twice a whole number (or the equivalent of pairing of objects), the following diagrams for 6 and 18 are helpful:       and the important notation is that there are 2 rows of boxes, indicating that it is even.   Why doesn't the following diagram show that 18 is even?        How can we show that 78 is even? We could do a diagram with 78 boxes, however, 1) it would be hard to get it accurate–you’d probably need to double or triple count to make sure, and 2) it’s easier to not have to count. We can take a lead from writing bar diagrams with multiplication that we saw in as       and note that it is clear that there are two equal rows of boxes. We can also show odd numbers by adding an extra box to the end. First, consider some small odd numbers. The following diagrams show 7 and 15:       And the following shows the odd number 37:         Lemmas, Theorems and Proofs  We have seen a few theorems and lemmas in this text. For example, the Quotient-Remainder theorem is key to handling integer division. We call the result a theorem because it is a provable statement with an important result. For more minor results, we call such a statement a lemma .    A proof of a statement is a detailed explanation of how that statement follows logically from other statements accepted as true.    The proofs that we will see in this section will be approached from two different avenues: a diagram proof and an algebraic proof.   Diagram Proof  We will use diagrams to illustrate the argument. For example, we can show an even number and an odd number using the following two diagrams:       The keep these diagrams very general. They work for any even or odd number.  We will use such diagrams below to prove statements about even and odd numbers.    Algebraic Proofs  In these proofs, we use letters to denote even and odd numbers. Typically, we will say “Let be a whole number. Then is an even number and is an odd number.”  We will the use statements we know to be true about whole numbers to prove things.   We will see how a proof is presented using even and odd numbers. We will soon prove the following theorem:    The sum of any two even numbers is even.    First, we will show a diagram proof .  Consider two even numbers as shown in the diagram below:            There are many important parts of this diagram proof. First, the two numbers (in light green and blue) are general even numbers. We don’t shows specifically the sizes of these numbers with the . The result is even because there two rows of the same size. This also clearly shows that the result is the sum of the two numbers. Note: the colors help, but could be done with shading.  Next, we’ll show an algebraic proof.   Let be any whole number. Then is an even number. Let be another whole number, with another even number. Since by the distributive property, is a whole number and is twice a whole number, the result is an even number.    Next, we will show that the sum of an even number and an odd number is odd.    The sum of an even number and a odd number is an odd number.     Diagram Proof:   Consider an even and odd number:             Algebraic Proof:   Let be a whole number, then is an even number. Let be a whole number and be an odd number. The sum is The term in the parentheses is whole, because the sum of two whole number is whole. And lastly, is an odd number.     "
},
{
  "id": "sect-even-odd-2-5",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-2-5",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  An even number is number which is twice a whole number. An odd number is one which is 1 more than twice a whole number.   "
},
{
  "id": "sect-even-odd-2-10",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-2-10",
  "type": "Remark",
  "number": "6.1.2",
  "title": "",
  "body": " Why doesn't the following diagram show that 18 is even?       "
},
{
  "id": "sect-even-odd-3-3",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-3-3",
  "type": "Definition",
  "number": "6.1.3",
  "title": "",
  "body": "  A proof of a statement is a detailed explanation of how that statement follows logically from other statements accepted as true.   "
},
{
  "id": "sect-even-odd-3-8",
  "level": "2",
  "url": "sect-even-odd.html#sect-even-odd-3-8",
  "type": "Theorem",
  "number": "6.1.4",
  "title": "",
  "body": "  The sum of any two even numbers is even.    First, we will show a diagram proof .  Consider two even numbers as shown in the diagram below:            There are many important parts of this diagram proof. First, the two numbers (in light green and blue) are general even numbers. We don’t shows specifically the sizes of these numbers with the . The result is even because there two rows of the same size. This also clearly shows that the result is the sum of the two numbers. Note: the colors help, but could be done with shading.  Next, we’ll show an algebraic proof.   Let be any whole number. Then is an even number. Let be another whole number, with another even number. Since by the distributive property, is a whole number and is twice a whole number, the result is an even number.   "
},
{
  "id": "thm-even-plus-odd",
  "level": "2",
  "url": "sect-even-odd.html#thm-even-plus-odd",
  "type": "Theorem",
  "number": "6.1.5",
  "title": "",
  "body": "  The sum of an even number and a odd number is an odd number.     Diagram Proof:   Consider an even and odd number:             Algebraic Proof:   Let be a whole number, then is an even number. Let be a whole number and be an odd number. The sum is The term in the parentheses is whole, because the sum of two whole number is whole. And lastly, is an odd number.   "
},
{
  "id": "sect-divisibility-tests",
  "level": "1",
  "url": "sect-divisibility-tests.html",
  "type": "Section",
  "number": "6.2",
  "title": "Divisibility Tests",
  "body": " Divisibility Tests   There are a number of cases when it is advantageous to know if numbers divide other numbers evenly.     You would wonder if there were 23 gloves in a box near a classroom. Which glove is missing its pair?    Why isn't 568 a reasonable answer if a student multiplied another number by 3?     For the first, example, you know that 2 does not divide 23 evenly because of the divisibility test that an even number ends in 0,2,4,6 or 8. (We will prove this soon). For the second example, we use use a divisibility by 3 test to show that a number is only divisible by 3 if the sum of its digits is also divisible by 3. (What is the sum of the digits in 568?)  We will also develop divisibility tests for 4,5,8,9,10 and 11.    We say “ is divisible by ” whenever is a multiple of , that if for some whole number . In addition, the following phrases have the same meaning:      is divisible by      divides      is a multiple of      is a factor of .       Recall that the Quotient-Remainder theorem states that for any pair of whole numbers and that there exist unique numbers and such that , which we often think of as .  Divisibility, in short, means that , that there is no remainder.    Grid Diagrams for Divisibility  Divisibility can be seen in a rectangular grid diagram. We know that 3 divides 15 and can see it in the following diagram:       There are 15 squares and there are 3 rows with the same number of squares per row (5).  In contrast, 4 does not divide 15. In the following diagram:       The remainder is not 0.  We can show this in general with the following plot. If divides , then         Long Division and Divisibility  Recall as discussed above, a number is divisible by , if under division, there is no remainder. For larger numbers, we can use long division to do this and check the remainder. The following example shows this.    Does 9 divide 4725?    We can use long division to determine this.  47259 And since the remainder is 0, this means that yes, 9 divides 4725.    The next two examples shows that we can use our mental math skills to check divisibility in some cases relatively easily.    Use mental math to determine if 3 divides 912.    We can do this first recognizing that so       Use mental math to determine if 6 divides 1240.    Similar to the example above, recognize that so   So 6 does not divide 1240.      Divisibility Lemma  In each of the two examples above, notice that we have taken a relatively large number and written it as the sum of two number, the first of which is divisible. The following lemma generalizes this idea:    Divisibility Lemma Suppose is a number divisible by . Then   If is divisible by , then is divisible by .    If is not divisible by , then is not divisible by .       Above we showed that is not divisible by . The following example uses the divisibility lemma to do this.    Use the divisibility lemma to show that is not divisible by .   First, notice that we can write , so this will be and . It is important that the first number is divisible by , in this case . Because is not divisible by 6, the divisibility lemmas shows that is not divisible by 6.      Is divisible by 7?    We will use the divisibility lemma to show this and write , noting that the first number, is divisible by 7 because and is also divisible by 7, so is divisible by 7.    Now, we tackle the proof of the divisibility lemma.   Picture Proof of the Divisibility Lemma  Recall that the theorem assumption is that is divisible by .  First, we will show that if is divisible by then is divisible by .       The picture shows that is evenly rows of some number as well as is evenly rows of some (maybe different) number. The result shows that (the total of and ) is divisible by .  The same picture shows the result that if is divisible by (indicated by is rows of some number). Then is divisible by . (indicated that is rows of some number).   Note: many of the lemmas and divisibility theorems in this chapter are proven in later in this chapter and the algebraic proof of the Divisibility Lemma is one of these.    Divisibility Test for 2,4,5,8,10 A number is divisible   by 10 if and only if its last digit is 0,    by 5 if and only if its last digit is 0 or 5,    by 2 if and only if its last digits is 0,2,4,6 or 8,    by 4 if and only if its last two digits are a number divisible by 4,    by 8 if and only if its last three digits are a number divisible by 8.            5,280 is divisible by 10 because its last digit is 0.    5,280 is divisible by 5 because its last digit is 0.    5,280 is divisible by 2 because its last digit is 0.    5,280 is divisible by 4 because its last two digits (80) are divisible by 4.    5,280 is divisible by 8 because its last three digits are divisible by 8.        Of the Divisible by 2  Let a whole number be written as   (why can it be written this way?) Since can be written as , it is divisible by 2. In addition, is divisible by 2 if and only if is 0, 2, 4, 6, or 8. By the divisibility theorem, is divisible by 2 if and only if and are divisible by 2.     Divisibility Test for 3 and 9 A number is divisible   by 3 if and only if the sum of the digits is divisible by 3,    by 9 if and only if the sum of the digits is divisible by 9,         Using the Divisibility Test for 3 Determine if the following are divisible by 3:   18,390    293,456         Since , since 21 is divisible by 3, then 18,390 is divisible by 3.    Since , since 29 is not divisible by 3, then 293,456 is not divisible by 3.         Using the Divisibility Test for 9 Determine if the following are divisible by 9:   18,390    293,454        Since , since 21 is not divisible by 9, then 18,390 is not divisible by 9.    Since , since 27 is divisible by 9, then 293,456 is divisible by 9.         Divisibility Test for 11    Divisibility Test for 11 A number is divisible by 11 if and only if the number formed by   is a multiple (whether positive, negative or 0) of 11.     Make sure that you carefully read the test for 11. Note that the sum is the odd-positioned digits, like the first, third, fifth, etc. and the even-positioned digits, like the 2nd, 4th, etc.It is common to mix this up with adding even and odd digits, but this is not what the test says.     Divisibility Test for 11 Determine if the following are divisible by 11:     93,412    208,273           so 93,412 is divisible by 11.     which is not divisible by 11, so 208,273 is not divisible by 11.        "
},
{
  "id": "sect-divisibility-tests-2-5",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-2-5",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": "  We say “ is divisible by ” whenever is a multiple of , that if for some whole number . In addition, the following phrases have the same meaning:      is divisible by      divides      is a multiple of      is a factor of .      "
},
{
  "id": "sect-divisibility-tests-4-3",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-4-3",
  "type": "Example",
  "number": "6.2.2",
  "title": "",
  "body": "  Does 9 divide 4725?    We can use long division to determine this.  47259 And since the remainder is 0, this means that yes, 9 divides 4725.   "
},
{
  "id": "sect-divisibility-tests-4-5",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-4-5",
  "type": "Example",
  "number": "6.2.3",
  "title": "",
  "body": "  Use mental math to determine if 3 divides 912.    We can do this first recognizing that so    "
},
{
  "id": "sect-divisibility-tests-4-6",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-4-6",
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
  "title": "",
  "body": "  Divisibility Lemma Suppose is a number divisible by . Then   If is divisible by , then is divisible by .    If is not divisible by , then is not divisible by .      "
},
{
  "id": "sect-divisibility-tests-5-5",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-5-5",
  "type": "Example",
  "number": "6.2.6",
  "title": "",
  "body": "  Use the divisibility lemma to show that is not divisible by .   First, notice that we can write , so this will be and . It is important that the first number is divisible by , in this case . Because is not divisible by 6, the divisibility lemmas shows that is not divisible by 6.   "
},
{
  "id": "sect-divisibility-tests-5-6",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-5-6",
  "type": "Example",
  "number": "6.2.7",
  "title": "",
  "body": "  Is divisible by 7?    We will use the divisibility lemma to show this and write , noting that the first number, is divisible by 7 because and is also divisible by 7, so is divisible by 7.   "
},
{
  "id": "sect-divisibility-tests-5-8",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-5-8",
  "type": "Proof",
  "number": "6.2.3.1",
  "title": "Picture Proof of the Divisibility Lemma.",
  "body": " Picture Proof of the Divisibility Lemma  Recall that the theorem assumption is that is divisible by .  First, we will show that if is divisible by then is divisible by .       The picture shows that is evenly rows of some number as well as is evenly rows of some (maybe different) number. The result shows that (the total of and ) is divisible by .  The same picture shows the result that if is divisible by (indicated by is rows of some number). Then is divisible by . (indicated that is rows of some number).  "
},
{
  "id": "thm-divisibility-tests",
  "level": "2",
  "url": "sect-divisibility-tests.html#thm-divisibility-tests",
  "type": "Theorem",
  "number": "6.2.8",
  "title": "",
  "body": "  Divisibility Test for 2,4,5,8,10 A number is divisible   by 10 if and only if its last digit is 0,    by 5 if and only if its last digit is 0 or 5,    by 2 if and only if its last digits is 0,2,4,6 or 8,    by 4 if and only if its last two digits are a number divisible by 4,    by 8 if and only if its last three digits are a number divisible by 8.      "
},
{
  "id": "sect-divisibility-tests-5-11",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-5-11",
  "type": "Example",
  "number": "6.2.9",
  "title": "",
  "body": "     5,280 is divisible by 10 because its last digit is 0.    5,280 is divisible by 5 because its last digit is 0.    5,280 is divisible by 2 because its last digit is 0.    5,280 is divisible by 4 because its last two digits (80) are divisible by 4.    5,280 is divisible by 8 because its last three digits are divisible by 8.      "
},
{
  "id": "sect-divisibility-tests-5-12",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-5-12",
  "type": "Proof",
  "number": "6.2.3.2",
  "title": "Of the Divisible by 2.",
  "body": " Of the Divisible by 2  Let a whole number be written as   (why can it be written this way?) Since can be written as , it is divisible by 2. In addition, is divisible by 2 if and only if is 0, 2, 4, 6, or 8. By the divisibility theorem, is divisible by 2 if and only if and are divisible by 2.  "
},
{
  "id": "sect-divisibility-tests-5-13",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-5-13",
  "type": "Theorem",
  "number": "6.2.10",
  "title": "",
  "body": "  Divisibility Test for 3 and 9 A number is divisible   by 3 if and only if the sum of the digits is divisible by 3,    by 9 if and only if the sum of the digits is divisible by 9,      "
},
{
  "id": "sect-divisibility-tests-5-14",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-5-14",
  "type": "Example",
  "number": "6.2.11",
  "title": "",
  "body": "  Using the Divisibility Test for 3 Determine if the following are divisible by 3:   18,390    293,456         Since , since 21 is divisible by 3, then 18,390 is divisible by 3.    Since , since 29 is not divisible by 3, then 293,456 is not divisible by 3.      "
},
{
  "id": "sect-divisibility-tests-5-15",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-5-15",
  "type": "Example",
  "number": "6.2.12",
  "title": "",
  "body": "  Using the Divisibility Test for 9 Determine if the following are divisible by 9:   18,390    293,454        Since , since 21 is not divisible by 9, then 18,390 is not divisible by 9.    Since , since 27 is divisible by 9, then 293,456 is divisible by 9.      "
},
{
  "id": "sect-divisibility-tests-6-2",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-6-2",
  "type": "Theorem",
  "number": "6.2.13",
  "title": "",
  "body": "  Divisibility Test for 11 A number is divisible by 11 if and only if the number formed by   is a multiple (whether positive, negative or 0) of 11.   "
},
{
  "id": "sect-divisibility-tests-6-3",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-6-3",
  "type": "Remark",
  "number": "6.2.14",
  "title": "",
  "body": " Make sure that you carefully read the test for 11. Note that the sum is the odd-positioned digits, like the first, third, fifth, etc. and the even-positioned digits, like the 2nd, 4th, etc.It is common to mix this up with adding even and odd digits, but this is not what the test says.  "
},
{
  "id": "sect-divisibility-tests-6-4",
  "level": "2",
  "url": "sect-divisibility-tests.html#sect-divisibility-tests-6-4",
  "type": "Example",
  "number": "6.2.15",
  "title": "",
  "body": "  Divisibility Test for 11 Determine if the following are divisible by 11:     93,412    208,273           so 93,412 is divisible by 11.     which is not divisible by 11, so 208,273 is not divisible by 11.      "
},
{
  "id": "sect-fundamental-theorem-arithmetic",
  "level": "1",
  "url": "sect-fundamental-theorem-arithmetic.html",
  "type": "Section",
  "number": "6.3",
  "title": "Primes and the Fundamental Theorem of Arithmetic",
  "body": " Primes and the Fundamental Theorem of Arithmetic   We can write often whole numbers as products of other whole numbers. For example and we can further write , therefore   The number 2, 3 and 5 can no longer be written as multiples of other numbers and thus called prime numbers.     A prime number is a whole number whose only factors are 1 and . Whole numbers that are not prime are called composite .      The Sieve of Eratosthenes  There are a variety of ways to find prime numbers. One such way is called the sieve of Eratosthenes, a Greek scholar c. 275 – 195 B.C.E. The sieve can be used for finding prime numbers up to any number and the following shows how to find them up to 60. First start with a grid of numbers where the lowest number 2 is written:       Each step has two parts:     Circle the smallest number not crossed out.    Cross out all multiples of that number.     In this first step, nothing is crossed out, so we circle the number 2 and then cross out multiples of 2.       For the next step, circle the 3 and cross out multiple of 3 (shown in red).       and notice that some of those crossed out were already crossed out. (What property did the number crossed out twice have?).  The next step will circle the 5 and cross out multiple of 5 (shown in blue):       This continues until all numbers are either circled or crossed out, however it is an interesting question to determine when you can stop the process, knowing that the uncrossed ones should all be circled.  The result shows:       The circled numbers are prime and the crossed out ones are composite. This shows that the following numbers less than 60 are prime: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59.   Sieve of Eratosthenes  To find a list of prime below a number, using the sieve of Eratosthenes,   Write a grid of numbers starting at 2 and up to . It is nice to use rows of 12 as shown above, and rows of 15 or 18 are nice too, but neither is a requirement.    Circle the lowest uncrossed out number.    Cross out all multiples of that number.    Repeat steps 2 and 3 until all numbers are circled or cross out   The circled numbers are prime.     Fundamental Theorem of Arithmetic Every whole number , can be written as a product of primes and this can only be done one way (except for reordering).      Find the prime factorization of , and .    We will use factor trees to do this efficiently:     First, note that , So we write:       and then note that so we can write the diagram as:       And now all of the ends of the branches are prime and this shows that and recall that repeated multiplication can be written in exponential form, so this can be written more compactly as     For , we'll start with a tree and recognize using the divisibility rules that 8 is a factor of 288.       and then factor 8 and 36 as well:       and finally factor the 6.       And all of the ends are prime now and this shows that     To find the prime factors of , we will take a less visual approach, but in the same spirit. First, recognize that 25 is a factor and you can use long division to find the other factor therefore   Next, we seek a factor of 561 and using divisibility rules, 11 is a factor and we can write . Lastly, note that 51 is divisible by 3 and . Putting all of this together, we get:          Primality Test  From the last section, we saw using the Sieve of Eratosthenes that we can find the first handful of prime numbers. This is great for finding the first few primes, but what if we want to determine if 1151 is prime? We still need to determine if the only factors are 1 and itself, but we can use the following theorem:   Primality Test   A whole number is prime unless it has a prime factor . Thus to test whether is prime one need only check divisibility by the primes that satisfy .     Algorithm to Test a Number for Primality  This basically gives use a recipe (called an algorithm) for determining if a number is prime:     Check if 2 is a factor (use the divisibility test).    Check if 3 is a factor (use the divisibility test).    Check if 5 is a factor (use the divisibility test).    Check if 7 is a factor (there is no divisibility test, so use the divisibility lemma or long division).    Check if 11 is a factor (use the divisibility test).    Continue for     If any of the primes are a factor, stop, the number is not prime.    If you reach , then stop, the number is prime.      Let's see how this works with an example.    Is 203 prime?    First of all the square root of 203 is between 14 and 15 (since and ), so we need to check if 203 is divisible by 2,3,5,7,11, and 13.     203 isn't divisible by 2 (ends in a 3)    203 is not divisible by 3 (sum of digits is 5)    203 is not divisible by 5 (doesn't end in 0 or 5)    203 is divisible by 7: 2037     This shows that , so this isn't prime.    Here's another example    Is 293 prime?     First, let's determine which primes we need to check. Since and , we can check up through 17.     293 isn't divisible by 2 (ends in a 3)    293 is not divisible by 3 (sum of digits is 14, not a multiple of 3)    293 is not divisible by 5 (doesn't end in 0 or 5)    293 is not divisible by 7: 2937    293 is not divisible by 11. Use the divisibility test , which is not a multiple of 11.    Check if 293 is divisible by 13. 29313 and since there is a nonzero remainder, it is not divisible by 13.    Check if 293 is divisible by 17. 29317 and since there is a nonzero remainder, it is not divisible by 17.        "
},
{
  "id": "sect-fundamental-theorem-arithmetic-2-3",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-2-3",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  A prime number is a whole number whose only factors are 1 and . Whole numbers that are not prime are called composite .   "
},
{
  "id": "sect-fundamental-theorem-arithmetic-3-17",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-3-17",
  "type": "Remark",
  "number": "6.3.2",
  "title": "Sieve of Eratosthenes.",
  "body": " Sieve of Eratosthenes  To find a list of prime below a number, using the sieve of Eratosthenes,   Write a grid of numbers starting at 2 and up to . It is nice to use rows of 12 as shown above, and rows of 15 or 18 are nice too, but neither is a requirement.    Circle the lowest uncrossed out number.    Cross out all multiples of that number.    Repeat steps 2 and 3 until all numbers are circled or cross out   The circled numbers are prime.  "
},
{
  "id": "sect-fundamental-theorem-arithmetic-3-18",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-3-18",
  "type": "Theorem",
  "number": "6.3.3",
  "title": "",
  "body": "  Fundamental Theorem of Arithmetic Every whole number , can be written as a product of primes and this can only be done one way (except for reordering).   "
},
{
  "id": "sect-fundamental-theorem-arithmetic-3-19",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-3-19",
  "type": "Example",
  "number": "6.3.4",
  "title": "",
  "body": "  Find the prime factorization of , and .    We will use factor trees to do this efficiently:     First, note that , So we write:       and then note that so we can write the diagram as:       And now all of the ends of the branches are prime and this shows that and recall that repeated multiplication can be written in exponential form, so this can be written more compactly as     For , we'll start with a tree and recognize using the divisibility rules that 8 is a factor of 288.       and then factor 8 and 36 as well:       and finally factor the 6.       And all of the ends are prime now and this shows that     To find the prime factors of , we will take a less visual approach, but in the same spirit. First, recognize that 25 is a factor and you can use long division to find the other factor therefore   Next, we seek a factor of 561 and using divisibility rules, 11 is a factor and we can write . Lastly, note that 51 is divisible by 3 and . Putting all of this together, we get:       "
},
{
  "id": "sect-fundamental-theorem-arithmetic-4-3",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-4-3",
  "type": "Theorem",
  "number": "6.3.5",
  "title": "Primality Test.",
  "body": " Primality Test   A whole number is prime unless it has a prime factor . Thus to test whether is prime one need only check divisibility by the primes that satisfy .   "
},
{
  "id": "sect-fundamental-theorem-arithmetic-4-4",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-4-4",
  "type": "Note",
  "number": "6.3.6",
  "title": "Algorithm to Test a Number for Primality.",
  "body": " Algorithm to Test a Number for Primality  This basically gives use a recipe (called an algorithm) for determining if a number is prime:     Check if 2 is a factor (use the divisibility test).    Check if 3 is a factor (use the divisibility test).    Check if 5 is a factor (use the divisibility test).    Check if 7 is a factor (there is no divisibility test, so use the divisibility lemma or long division).    Check if 11 is a factor (use the divisibility test).    Continue for     If any of the primes are a factor, stop, the number is not prime.    If you reach , then stop, the number is prime.     "
},
{
  "id": "sect-fundamental-theorem-arithmetic-4-6",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-4-6",
  "type": "Example",
  "number": "6.3.7",
  "title": "",
  "body": "  Is 203 prime?    First of all the square root of 203 is between 14 and 15 (since and ), so we need to check if 203 is divisible by 2,3,5,7,11, and 13.     203 isn't divisible by 2 (ends in a 3)    203 is not divisible by 3 (sum of digits is 5)    203 is not divisible by 5 (doesn't end in 0 or 5)    203 is divisible by 7: 2037     This shows that , so this isn't prime.   "
},
{
  "id": "sect-fundamental-theorem-arithmetic-4-8",
  "level": "2",
  "url": "sect-fundamental-theorem-arithmetic.html#sect-fundamental-theorem-arithmetic-4-8",
  "type": "Example",
  "number": "6.3.8",
  "title": "",
  "body": "  Is 293 prime?     First, let's determine which primes we need to check. Since and , we can check up through 17.     293 isn't divisible by 2 (ends in a 3)    293 is not divisible by 3 (sum of digits is 14, not a multiple of 3)    293 is not divisible by 5 (doesn't end in 0 or 5)    293 is not divisible by 7: 2937    293 is not divisible by 11. Use the divisibility test , which is not a multiple of 11.    Check if 293 is divisible by 13. 29313 and since there is a nonzero remainder, it is not divisible by 13.    Check if 293 is divisible by 17. 29317 and since there is a nonzero remainder, it is not divisible by 17.      "
},
{
  "id": "sect-gcf-lcm",
  "level": "1",
  "url": "sect-gcf-lcm.html",
  "type": "Section",
  "number": "6.4",
  "title": "Greatest Common Factors and Least Common Multiples",
  "body": " Greatest Common Factors and Least Common Multiples     The Greatest Common Factor of two whole numbers and , written , is the largest whole number which is a factor of both and       Find .   We can list all of the factors of both 24 and 60: and looking at the list, the largest common factor is 12. Therefore .      Calculate     In this case, it awfully difficult to write down all of the factors. Instead, another technique is to write out the prime factorization of both: and looking at the common prime factors:       Calculate     In this case, it awfully difficult to write down all of the factors. Instead, another technique is to write out the prime factorization of both: and looking at the common prime factors:       Least Common Multiple   Recall that to find the sum of two fractions, we need a common denominator. The reasons why and details are in , but consider   One way to to get a common denominator is to just multiply the denominators, however, it generally desirable to have a smaller one. A nice denominator is the least common multiple or LCM. In the example above the least common multiple of 18 and 12 is 36. For example:   Note: many people use the term least common denominator for the LCM because of this.    The Least Common Multiple of two nonzero whole numbers and , written is the smallest whole number (other than zero) that is a multiple of both and .      Find            by writing down enough multiples until the smallest one is found.       Write a few multiples of each:   and since the smallest common multiple is 36, .    And for    and you can see that 192 is the smallest multiple common to both, so .       There is a nice way to visualize the LCM using a number line. Consider . We need multiples of both numbers, which we can plot on a number line:       and the LCM will be the point on the number line where the hops first land on the same value.  Similar to the GCF, when the the numbers get larger, finding the LCM using this method is difficult and therefore, it’s easy to miss the lowest common multiple. We will, like we did for the GCF, use the prime factorization to find the LCM. The following is an example.    Find     In this case, we will write the prime factorization of both   Note: to find these, you probably need to use a factor tree to find them.  A common multiple is to multiple all factors together, but the least one is the one in which the common factors are only written once:     We can summarize finding the LCM and GCF as follows.    Consider two whole numbers and that can be written as their prime factorization:      To find the GCF, find the smaller power of all common terms.    To find the LCM, find the larger power of all common terms and include all terms that are in each number and .      The following example shows this technique to find the LCM and GCF.    Find both the LCM and GCF of using this technique.    Use a factor tree, you can show that   The GCF is the smallest power of all common terms. Since only powers of are common then , the smaller power of 2.  The LCM is the larger power of all terms, making sure that all terms are included:       Euclid’s Algorithm  What if we need to find ? Using the techniques above, we either 1) find all factors and then find the greatest common one or 2) find the prime factorization of each. In either case, this sounds ugly. Fortunately, there is another way called Euclid’s Algorithm that isn’t too difficult.    Euclid’s Algorithm  If then .    What this allows us to do is to reduce the size of the problem. As written is the dividend, is the divisor and the remainder. Since is less than and is less than (why? Think Quotient-Remainder Theorem), the sizes of the number reduces when you do this.  To use Euclid’s algorithm, we will find , the remainder of (or ). We then repeat. The following shows an example    Find the GCF using Euclid’s Algorithm Find using Euclid’s Algorithm:    First, show that (if you need to do long division on this, go ahead). Therefore,   Next, we will repeat and do , which is and no remainder. This shows that and the greatest common factor between 36 and 0 is 36. This shows that .    Let’s look at another example.    Find     First find using long division:  3315135  Since    This shows that the original problem .      Relationship between LCM and GCF       First find using Euclid’s Algorithm. Then use the above expression to find .  360135  Since    Therefore,       "
},
{
  "id": "sect-gcf-lcm-2-1",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-2-1",
  "type": "Definition",
  "number": "6.4.1",
  "title": "",
  "body": "  The Greatest Common Factor of two whole numbers and , written , is the largest whole number which is a factor of both and    "
},
{
  "id": "sect-gcf-lcm-2-2",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-2-2",
  "type": "Example",
  "number": "6.4.2",
  "title": "",
  "body": "  Find .   We can list all of the factors of both 24 and 60: and looking at the list, the largest common factor is 12. Therefore .   "
},
{
  "id": "sect-gcf-lcm-2-3",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-2-3",
  "type": "Example",
  "number": "6.4.3",
  "title": "",
  "body": "  Calculate     In this case, it awfully difficult to write down all of the factors. Instead, another technique is to write out the prime factorization of both: and looking at the common prime factors:    "
},
{
  "id": "sect-gcf-lcm-2-4",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-2-4",
  "type": "Example",
  "number": "6.4.4",
  "title": "",
  "body": "  Calculate     In this case, it awfully difficult to write down all of the factors. Instead, another technique is to write out the prime factorization of both: and looking at the common prime factors:    "
},
{
  "id": "sect-gcf-lcm-3-2-4",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-3-2-4",
  "type": "Definition",
  "number": "6.4.5",
  "title": "",
  "body": "  The Least Common Multiple of two nonzero whole numbers and , written is the smallest whole number (other than zero) that is a multiple of both and .   "
},
{
  "id": "sect-gcf-lcm-3-2-5",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-3-2-5",
  "type": "Example",
  "number": "6.4.6",
  "title": "",
  "body": "  Find            by writing down enough multiples until the smallest one is found.       Write a few multiples of each:   and since the smallest common multiple is 36, .    And for    and you can see that 192 is the smallest multiple common to both, so .      "
},
{
  "id": "sect-gcf-lcm-3-2-10",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-3-2-10",
  "type": "Example",
  "number": "6.4.7",
  "title": "",
  "body": "  Find     In this case, we will write the prime factorization of both   Note: to find these, you probably need to use a factor tree to find them.  A common multiple is to multiple all factors together, but the least one is the one in which the common factors are only written once:    "
},
{
  "id": "sect-gcf-lcm-3-2-12",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-3-2-12",
  "type": "Note",
  "number": "6.4.8",
  "title": ".",
  "body": "  Consider two whole numbers and that can be written as their prime factorization:      To find the GCF, find the smaller power of all common terms.    To find the LCM, find the larger power of all common terms and include all terms that are in each number and .     "
},
{
  "id": "sect-gcf-lcm-3-2-14",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-3-2-14",
  "type": "Example",
  "number": "6.4.9",
  "title": "",
  "body": "  Find both the LCM and GCF of using this technique.    Use a factor tree, you can show that   The GCF is the smallest power of all common terms. Since only powers of are common then , the smaller power of 2.  The LCM is the larger power of all terms, making sure that all terms are included:    "
},
{
  "id": "sect-gcf-lcm-3-3-3",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-3-3-3",
  "type": "Lemma",
  "number": "6.4.10",
  "title": "",
  "body": "  Euclid’s Algorithm  If then .   "
},
{
  "id": "sect-gcf-lcm-3-3-6",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-3-3-6",
  "type": "Example",
  "number": "6.4.11",
  "title": "",
  "body": "  Find the GCF using Euclid’s Algorithm Find using Euclid’s Algorithm:    First, show that (if you need to do long division on this, go ahead). Therefore,   Next, we will repeat and do , which is and no remainder. This shows that and the greatest common factor between 36 and 0 is 36. This shows that .   "
},
{
  "id": "sect-gcf-lcm-3-3-8",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-3-3-8",
  "type": "Example",
  "number": "6.4.12",
  "title": "",
  "body": "  Find     First find using long division:  3315135  Since    This shows that the original problem .   "
},
{
  "id": "sect-gcf-lcm-3-4-3",
  "level": "2",
  "url": "sect-gcf-lcm.html#sect-gcf-lcm-3-4-3",
  "type": "Example",
  "number": "6.4.13",
  "title": "",
  "body": "  First find using Euclid’s Algorithm. Then use the above expression to find .  360135  Since    Therefore,    "
},
{
  "id": "sect-divisibility-proofs",
  "level": "1",
  "url": "sect-divisibility-proofs.html",
  "type": "Section",
  "number": "6.5",
  "title": "Prime Number and Divisibility Proofs",
  "body": " Prime Number and Divisibility Proofs   This section dives deeper into many of the proofs in this chapter.  This Chapter covers more properties of numbers, specifically integers. In many properties like the distributive and associative were seen. Technically, these are actually mathematical axioms or statements that we assume are true. We show that they hold true using diagrams, however there is no formal mathematical proof of these, but we assume them to hold.  This chapter is all about prime numbers and factoring whole numbers. And we will see in that these play an important role for understanding fractions. We also want to build some theorems based on these ideas. As a review, formal mathematics has some key components:     Axioms  When constructing an argument, we use a sequence of known facts to make those arguments. Many times, these are properties of arithmetic like the distributive and commutative properties. Other times these are other theorems or lemmas that have been proven.    Definitions  Because of the precise nature of mathematics, defining our terms is crucial. We all need to agree that we are thinking of the same things.    Theorems and Lemmas  A theorem (important result) or a lemma (minor result) allows us to make a general statement. It is proved using mathematical facts and logic.       The Divisibility Lemma  Recall that the take a number and splits it into the sum of two numbers to help determine if a number is divisible by another. The following is the proof of that lemma.   Proof of the Divisibility Lemma  First, we will show that if is divisible by , then is divisible by . We know that divides , so that means that can be written . Also, since divides , that can be written . We will see if divides .   This means that is divisible by .  Next, we will show that if is divisible by , then is divisible by . Since is divisible by , then means that can be written as for some whole number , where is larger than . Next, we want to show that is divisible by .  The number can be written as   since and are whole numbers with larger than , then is divisible by .     Divisibility Test Proofs  Next, we revisiting the divisibility tests of 3, 4, 9 and 11 that are stated in .   Proof of the Divisibility Test by 4  Let a whole number be written as   (why can it be written this way?) Since can be written as , it is divisible by 4. In addition, is divisible by 2 if and only if is divisible by 4. By the divisibility theorem, is divisible by 2 if and only if and are divisible by 4.    Proof of the Divisibility of a 3-digit number by 3 and 9  Let be a three-digit number and let it be written:   Write and or   The term is divisible by both 3 and 9. By the Divisibility lemma, is divisible by 3 (or 9) if and only if is divisible by 3 (or 9).    Proof of the divisibility test by 11  Consider a six-digit number (other sized numbers are similar), . Write as   Rewrite as follows:   By the divisibility theorem, since the first two terms are divisible by 11, is divisible by 11 if and only if   is divisible by 11, which is the same as the statement of the theorem.     Prime Number Proofs    Every whole number is a multiple of a prime.      Let’s try this with . All of its factors are . We note that 2 is a prime factor (also 7 is). We will use this in the proof below.     List all of the factors of and call the smallest factor greater than . We will show that is prime and therefore is a multiple of a prime.  This will be shown by a technique called proof by contradiction. In short, we make an assumption that contradicts what we are trying to show, resulting in an absurd statement, thus the original statement must be correct.  Assume that is not prime. Then we can write , however both and , but this is not possible because is the smallest factor greater than 1, which contradicts the fact that is smallest factor.    (of the fundamental theorem of arithmetic)  By , write   where is prime. If , then is prime and the factors are and and this is the unique result.  If is not prime, then use to write   where is prime and thus   if , then the above is the prime factorization. If not, repeat these steps and write   with . Since the numbers are always decreasing, this process must end. Thus we can write   To prove that this is a unique factorization, we need a little more background and thus will see this in 5.5.     Of the Largest Factor Lemma  Let , where is prime by the Smallest Factor Lemma. The Since and therefore . Thus .     How many primes are there?    There are an infinite number of prime numbers.     Assume that there are a finite number of primes and let be the largest. Define the number to be   Since is not divisible by any prime between 2 and , it must also be prime and is obviously larger than , so there’s a contradiction. Since this violates the assumption that there are a finite number and is the largest, the result is that there must be an infinite number of primes.     Proof by Contradiction  The following steps shows the logic for proof by contradiction.     Either a statement or its negative is true, but not both.    Assume that the negative of a statement is true. Show how that assumption leads to a logical contradiction.    Since there is a contradiction, we conclude that the original assumption is incorrect, thus the original statement is true.     In the proof above,     We started with the original statement that we were trying to prove, “There is an infinite number of prime numbers.”    We assumed the negative of the statement: “There is a finite number of primes” and showed that this resulted in a prime larger than the largest of the finite number.    Since there is a contradiction, the original assumption that there is only a finite number of primes, leading to the result that there is an infinite number of primes.       The Greatest Common Factors and Lowest Common Multiples   (of Euclid’s Algorithm:) Assume that is a common factor of both and . Since , and , then also a common factor of . Let be the largest common factor of both then     "
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
  "body": " Proof of the divisibility test by 11  Consider a six-digit number (other sized numbers are similar), . Write as   Rewrite as follows:   By the divisibility theorem, since the first two terms are divisible by 11, is divisible by 11 if and only if   is divisible by 11, which is the same as the statement of the theorem.  "
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
  "id": "ch-fractions",
  "level": "1",
  "url": "ch-fractions.html",
  "type": "Chapter",
  "number": "7",
  "title": "Fractions",
  "body": " Fractions  Put an introduction here.  "
},
{
  "id": "ch-decimals",
  "level": "1",
  "url": "ch-decimals.html",
  "type": "Chapter",
  "number": "8",
  "title": "Decimals",
  "body": " Decimals  Put an introduction here.  "
},
{
  "id": "ch-integers",
  "level": "1",
  "url": "ch-integers.html",
  "type": "Chapter",
  "number": "9",
  "title": "Integers",
  "body": " Integers  Put an introduction here.  "
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
