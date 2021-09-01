
switch ReactDOM.querySelector("#root") {
| Some(root) => ReactDOM.render(<WebApp.app />, root)
| None => Js.log("Error: could not find react element")
}
