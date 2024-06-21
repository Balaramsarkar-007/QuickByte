const sampleData = [
    {
        title: "Chocolate Chip Cookies",
        about: "Classic homemade cookies with chunks of chocolate",
        category: "snacks",
        image : { 
            url :"https://media.istockphoto.com/id/174478330/photo/chocolate-chip-cookies-on-white.webp?s=2048x2048&w=is&k=20&c=_cJfeFPRNxEHCTpAwPuAftduwQR0acX-_5Bflgp4-TI=",
            filename : "foddlistingimage",
        },
        price: 5,
        shopname: "Sweet Delights"
    },
    {
        title: "Strawberry Ice Cream",
        about: "Creamy strawberry flavored ice cream",
        category: "ice cream",
        image: {
            url : "https://media.istockphoto.com/id/678771308/photo/strawberry-cream-ice-cream-in-white-bowl.jpg?s=2048x2048&w=is&k=20&c=psB5L6FHF1ph7nRYOYK6obN3qzrVEzkxWdKi5EkHmvw=",
            filename : "foddlistingimage",
        },
        price: 30,
        shopname: "Frozen Treats"
    },
    {
        title: "Cheeseburger",
        about: "Juicy beef patty topped with melted cheese",
        category: "snacks",
        image: {
            url : "https://media.istockphoto.com/id/1438143625/photo/double-cheese-beef-burger-with-kitchen-background.webp?b=1&s=170667a&w=0&k=20&c=eHoWSf-8VZbNmfiqwAe8-WdKefLdLAbT_1KpaqHRyqY=",
            filename : "foddlistingimage",
        },
        price: 80,
        shopname: "Burger Haven"
    },
    {
        title: "Iced Coffee",
        about: "Refreshing coffee served over ice",
        category: "juice/coldDrinks",
        image: {
        url : "https://media.istockphoto.com/id/1366672341/photo/glass-with-ice-and-coffee.jpg?s=2048x2048&w=is&k=20&c=Htoe_x_uab6ys92C_WXJaEHrKFBhGpmWZXQ0wNyFRQQ=",
        filename : "foddlistingimage",
        },
        price: 40,
        shopname: "Cool Beans Cafe"
    },
    {
        title: "Salted Caramel Popcorn",
        about: "Sweet and salty popcorn snack",
        category: "snacks",
        image:{
            url : "https://media.istockphoto.com/id/1130641722/photo/salted-caramel-popcorn.webp?b=1&s=170667a&w=0&k=20&c=C2gt1Q3yZgHeY9HyPzeH9jP5c9qb33AujbNkU_UuD1g=",
            filename : "foddlistingimage",
        },
        price: 30,
        shopname: "Popcorn Paradise"
    },
    {
        title: "Mint Chocolate Chip Ice Cream",
        about: "Rich chocolate ice cream with mint flavoring and chocolate chips",
        category: "ice cream",
        image:{
            url : "https://media.istockphoto.com/id/664712462/photo/sweet-homemade-pistachio-ice-cream.webp?b=1&s=170667a&w=0&k=20&c=W1vAFXskUmDDByvScnVsxtMwuT-ObTuLeGHJ4opw70k=",
            filename : "foddlistingimage",
        },
        price: 40,
        shopname: "Sweet Tooth Creamery"
    },
    {
        title: "Chicken Caesar Salad",
        about: "Fresh romaine lettuce topped with grilled chicken, croutons, and Caesar dressing",
        category: "snacks",
        image:{
            url : "https://media.istockphoto.com/id/169986941/photo/chicken-salad.webp?b=1&s=170667a&w=0&k=20&c=sLnGzphC2t2m-TULdfhuVHbmKsvb-LNMacn3KhI4lzc=",
            filename : "foddlistingimage",
        },
        price: 70,
        shopname: "Salad Sensation"
    },
    {
        title: "Lemonade",
        about: "Tangy and sweet lemon-flavored drink",
        category: "juice/coldDrinks",
        image: {
        url :"https://media.istockphoto.com/id/500202440/photo/freshly-made-lemonade-with-a-hint-of-mint.webp?b=1&s=170667a&w=0&k=20&c=rMWcYIxu7RW8Jr-MbDQHLYJUH2UBJCKLA-iK57TlS2A=",
        filename : "foddlistingimage",
        },
        price: 20,
        shopname: "Fresh Squeeze"
    },
    {
        title: "Nachos",
        about: "Tortilla chips topped with cheese, jalapenos, salsa, and sour cream",
        category: "snacks",
        image:{
            url : "https://plus.unsplash.com/premium_photo-1679816176733-e9b260edc969?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmFjaG9zfGVufDB8fDB8fHww",
            filename : "foddlistingimage",
        },
        price: 60,
        shopname: "Nacho Fiesta"
    },
    {
        title: "Vanilla Bean Ice Cream",
        about: "Smooth vanilla flavored ice cream made with real vanilla beans",
        category: "ice cream",
        image:{
            url : "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VmFuaWxsYSUyMEJlYW4lMjBJY2UlMjBDcmVhbXxlbnwwfHwwfHx8MA%3D%3D",
            filename : "foddlistingimage",
        },
        price: 30,
        shopname: "Vanilla Dreams"
    },
    {
        title: "Pepperoni Pizza",
        about: "Classic pizza topped with pepperoni and mozzarella cheese",
        category: "snacks",
        image: {
            url : "https://media.istockphoto.com/id/1387688651/photo/cheese-capsicum-onion-pizza.jpg?s=2048x2048&w=is&k=20&c=B8PLAGedHeQFcYttfoB_7GuumITRqEcS4wEPlJ7fs44=",
            filename : "foddlistingimage",
        },
        price: 100,
        shopname: "Pizza Palace"
    },
    {
        title: "Fruit Smoothie",
        about: "Blended mix of assorted fruits",
        category: "juice/coldDrinks",
        image:{
            url : "https://media.istockphoto.com/id/995925924/photo/fresh-acai-blueberry-smoothie-in-bottle-on-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=hxhqNtIorqnI_gGnK-G_XTugHI_NJBaQ260h2LGqmkQ=",
            filename : "foddlistingimage",
        },
        price: 50,
        shopname: "Smoothie Junction"
    },
    {
        title: "Garlic Bread",
        about: "Toasted bread with garlic butter spread",
        category: "snacks",
        image: {
            url : "https://media.istockphoto.com/id/1181825866/photo/garlic-bread-on-rustic-wooden-table.webp?b=1&s=170667a&w=0&k=20&c=OnuYBzXWsXTz4St1TOJhGpcVaShVp4bhavDvPPhihFk=",
            filename : "foddlistingimage",
        },
        price: 30,
        shopname: "Garlic Goodness"
    },
    {
        title: "Root Beer Float",
        about: "Soda float made with root beer and vanilla ice cream",
        category: "juice/coldDrinks",
        image :{
            url : "https://media.istockphoto.com/id/184620728/photo/rootbeer-float.webp?b=1&s=170667a&w=0&k=20&c=6RLJvS7XmBmW3zwXYQ6Vt0DP_3QmrI_KR8Irb1RArIM=",
            filename : "foddlistingimage",
        },
        price: 40,
        shopname: "Frosty Fizz"
    },
    {
        title: "Caramel Corn",
        about: "Crunchy caramel-coated popcorn",
        category: "snacks",
        image: {
            url : "https://media.istockphoto.com/id/497715915/photo/homemade-golden-caramel-popcorn.webp?b=1&s=170667a&w=0&k=20&c=zg4busba2nvGX69VxFx4UH0tf-1nOkS_MbbQtabV0rk=",
            filename : "foddlistingimage",
        },
        price: 40,
        shopname: "Caramel Crunch"
    },
    {
        title: "Mango Sorbet",
        about: "Refreshing mango-flavored frozen dessert",
        category: "ice cream",
        image: {
            url : "https://media.istockphoto.com/id/1601883106/photo/sweets.webp?b=1&s=170667a&w=0&k=20&c=U-jF0OJH0vHxN68hPDXQxcnRi__6C1DYv0Kx6AtfkQs=",
            filename : "foddlistingimage",
        },
        price: 30,
        shopname: "Tropical Treats"
    },
    {
        title: "Pretzels",
        about: "Twisted bread snacks with salt",
        category: "snacks",
        image:{
            url : "https://media.istockphoto.com/id/1251657918/photo/selective-focus-on-indian-food-on-a-plate.webp?b=1&s=170667a&w=0&k=20&c=HSiVBH8ODkaqJ6Ba4lHEHPYTMva-pah78eWE-710Yyg=",
            filename : "foddlistingimage",
        },
        price: 20,
        shopname: "Twisty Treats"
    },
    {
        title: "Iced Tea",
        about: "Chilled tea served over ice",
        category: "juice/coldDrinks",
        image: {
            url : "https://media.istockphoto.com/id/172363416/photo/glass-full-of-fresh-iced-tea-with-lemon-in-artistic-splash.webp?b=1&s=170667a&w=0&k=20&c=nY-Ms3ypNkyFrQ97L37wZxyCNfwOtE8vX3VgvuSZJVg=",
            filename : "foddlistingimage",
        },
        price: 20,
        shopname: "Tea Time Cafe"
    },
    {
        title: "BBQ Wings",
        about: "Succulent chicken wings grilled and glazed with BBQ sauce",
        category: "snacks",
        image: {
            url : "https://media.istockphoto.com/id/485373174/photo/bbq-sauce-chicken-wings.webp?b=1&s=170667a&w=0&k=20&c=Mr1EjnCTLxB1F3peDMh8jQYkfPgivaBLhV5hEpRA7eU=",
            filename : "foddlistingimage",
        },
        price: 80,
        shopname: "Wing Heaven"
    },
    {
        title: "Orange Sorbet",
        about: "Citrusy orange-flavored frozen dessert",
        category: "ice cream",
        image:{
            url : "https://media.istockphoto.com/id/471170065/photo/orange-peach-sorbet-in-dessert-bowl-with-cookies.webp?b=1&s=170667a&w=0&k=20&c=ahe3W87encZYqsz1525NYId3n0DOS2_BrRei_SY3Om4=",
            filename : "foddlistingimage",
        },
        price: 30,
        shopname: "Citrus Delight"
    },
];

module.exports = {data: sampleData};
