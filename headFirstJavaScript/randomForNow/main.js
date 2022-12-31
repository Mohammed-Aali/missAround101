function prop(type) {
    console.log(typeof type);
}
prop("abcd");
prop(123);
prop({});
prop([]);
prop();
prop({"abcd" : 123});
prop(["abcd", 123]);
prop(() => {return "abcd"});
