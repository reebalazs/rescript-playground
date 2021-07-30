// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Core from "@material-ui/core";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";

function AddResultControl(Props) {
  var state = Props.state;
  var dispatch = Props.dispatch;
  var disabled = state.mode !== /* Showing */1;
  return React.createElement(Core.IconButton, {
              onClick: (function (param) {
                  return Curry._1(dispatch, /* AddMode */0);
                }),
              children: React.createElement(AddCircleOutline, {}),
              color: "primary",
              disabled: disabled
            });
}

var make = AddResultControl;

export {
  make ,
  
}
/* react Not a pure module */
