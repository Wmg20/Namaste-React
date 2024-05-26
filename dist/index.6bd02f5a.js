// create an element using react
// const heading = React.createElement(
//   "h1",
//   {
//     // use for passing attributes
//     id: "heading",
//     className: "heading-class",
//   },
//   "An h1 element created usign react createElement"
// );
// creating a nested parent and children structure
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, // for passing more elements like both h1, h2 we need to use [h1, h2], it will throw an error for key
[
    React.createElement("h1", {
        id: "heading"
    }, " I'm an h1 element "),
    React.createElement("h2", {
        id: "heading-2"
    }, " I'm an h2 element ")
]));
//** As you can see the parent elements structure it is very hard to follow the above code structure i.e why we use JSX to avoid using React.createElement every time and easy nesting of elements and tags **/
// created a root
const root = ReactDOM.createRoot(document.getElementById("root"));
// render the element - and convert elements into tags
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
