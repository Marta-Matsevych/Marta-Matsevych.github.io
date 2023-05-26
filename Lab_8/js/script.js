(function () {
    let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    let bye = speakBye();
    let hello = speakHello();

    console.log("Сортування імен за першою літерою.(Якщо перша літера J or j)");
    for (let i = 0; i < names.length; i++) {
        const item = names[i];
        if (item.charAt(0) === "J" || item.toLowerCase().charAt(0) === "j") {
            bye(item);
        } else {
            hello(item);
        }
    }


    console.log("Сортування імен з парною кількістю літер.");
    names.forEach(item => {
        if (item.length % 2 === 0) {
            bye(item);
        } else {
            hello(item);
        }
    });
}());
