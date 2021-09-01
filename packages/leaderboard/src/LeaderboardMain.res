switch ReactDOM.querySelector("#root") {
| Some(root) => ReactDOM.render(<LeaderboardApp />, root)
| None => Js.log("Error: could not find react element")
}
