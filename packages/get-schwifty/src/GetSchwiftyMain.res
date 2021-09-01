
switch ReactDOM.querySelector("#root") {
| Some(root) => ReactDOM.render(<GetSchwiftyApp.make />, root)
| None => Js.log("Error: could not find react element")
}
