// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ResultRowEditing$Web from "./ResultRowEditing.bs.js";
import * as ResultRowShowing$Web from "./ResultRowShowing.bs.js";

function ResultRow(Props) {
  var result = Props.result;
  var rank = Props.rank;
  var state = Props.state;
  var dispatch = Props.dispatch;
  var editingResult = state.mode;
  var editingThis = typeof editingResult === "number" ? false : editingResult._0.id === result.id;
  if (editingThis) {
    return React.createElement(ResultRowEditing$Web.make, {
                result: result,
                rank: rank,
                dispatch: dispatch
              });
  } else {
    return React.createElement(ResultRowShowing$Web.make, {
                result: result,
                rank: rank,
                state: state,
                dispatch: dispatch
              });
  }
}

var make = ResultRow;

export {
  make ,
  
}
/* react Not a pure module */
