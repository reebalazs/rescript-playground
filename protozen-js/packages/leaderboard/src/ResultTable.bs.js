// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_Map from "rescript/lib/es6/belt_Map.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as ResultRow$Web from "./ResultRow.bs.js";
import * as ResultHeader$Web from "./ResultHeader.bs.js";
import * as Core from "@material-ui/core";

function ResultTable(Props) {
  var state = Props.state;
  var dispatch = Props.dispatch;
  var resultComponents = Belt_Array.mapWithIndex(Belt_Map.valuesToArray(state.results), (function (index, result) {
          return React.createElement(ResultRow$Web.make, {
                      result: result,
                      rank: index + 1 | 0,
                      state: state,
                      dispatch: dispatch,
                      key: result.id
                    });
        }));
  return React.createElement(Core.Table, {
              children: null,
              stickyHeader: true,
              style: {
                paddingTop: "25px"
              }
            }, React.createElement(ResultHeader$Web.make, {
                  state: state,
                  dispatch: dispatch
                }), React.createElement(Core.TableBody, {
                  children: resultComponents
                }));
}

var make = ResultTable;

export {
  make ,
  
}
/* react Not a pure module */
