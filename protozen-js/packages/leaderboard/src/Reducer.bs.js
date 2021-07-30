// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Uuid from "uuid";
import * as Belt_Map from "rescript/lib/es6/belt_Map.js";

function reducer(state, action) {
  if (typeof action === "number") {
    if (action === /* AddMode */0) {
      return {
              results: state.results,
              mode: /* Adding */0
            };
    } else {
      return {
              results: state.results,
              mode: /* Showing */1
            };
    }
  }
  switch (action.TAG | 0) {
    case /* AddResult */0 :
        var score = action.score;
        var id = Uuid.v4(undefined);
        return {
                results: Belt_Map.set(state.results, [
                      id,
                      score
                    ], {
                      id: id,
                      name: action.name,
                      score: score
                    }),
                mode: state.mode
              };
    case /* UpdateResult */1 :
        var score$1 = action.score;
        var result = action.result;
        var id$1 = result.id;
        return {
                results: Belt_Map.set(Belt_Map.remove(state.results, [
                          id$1,
                          result.score
                        ]), [
                      id$1,
                      score$1
                    ], {
                      id: id$1,
                      name: action.name,
                      score: score$1
                    }),
                mode: state.mode
              };
    case /* RemoveResult */2 :
        var result$1 = action._0;
        return {
                results: Belt_Map.remove(state.results, [
                      result$1.id,
                      result$1.score
                    ]),
                mode: state.mode
              };
    case /* EditMode */3 :
        return {
                results: state.results,
                mode: /* Editing */{
                  _0: action._0
                }
              };
    
  }
}

export {
  reducer ,
  
}
/* uuid Not a pure module */
