open Belt
open State
@react.component
let make = (~state, ~dispatch) => {
  open MaterialUi
  open Icons
  open Action
  open EventHelpers

  open ValidateHelpers

  let (name, setName) = React.useState(() => "")
  let (score, setScore) = React.useState(() => 0)
  let (invalidName, setInvalidName) = React.useState(() => false)
  let (invalidNameHelper, setInvalidNameHelper) = React.useState(() => validateName(name))
  let (hintScoreHelper, setHintScoreHelper) = React.useState(() => validateScore(score))

  let isInvalid = () => {
    invalidNameHelper !== ""
  }

  <TableHead>
    <TableRow>
      <TableCell style={ReactDOM.Style.make(~minWidth="100px", ())}>
        {"Add new score:"->React.string}
      </TableCell>
      <TableCell style={ReactDOM.Style.make(~width="100%", ())} padding=#None>
        <TextField
          label={"Name"->React.string}
          helperText={invalidNameHelper->fixedHelperText->React.string}
          error={invalidName}
          variant=#Filled
          fullWidth={true}
          value={TextField.Value.string(name)}
          onChange={(event: ReactEvent.Form.t) => {
            let value = onChangeName(event)
            let valueHelper = validateName(value)
            setInvalidName(_ => valueHelper !== "")
            setInvalidNameHelper(_ => valueHelper)
            setName(_ => value)
          }}
        />
      </TableCell>
      <TableCell style={ReactDOM.Style.make(~minWidth="120px", ())} padding=#None>
        <TextField
          label={"Score"->React.string}
          helperText={hintScoreHelper->fixedHelperText->React.string}
          variant=#Filled
          fullWidth={true}
          _InputProps={"type": "number"}
          value={TextField.Value.string(score === 0 ? "" : Int.toString(score))}
          onChange={(event: ReactEvent.Form.t) => {
            let value = onChangeScore(event)
            let valueHelper = validateScore(value)
            setHintScoreHelper(_ => valueHelper)
            setScore(_ => value)
          }}
        />
      </TableCell>
      <TableCell style={ReactDOM.Style.make(~minWidth="100px", ())}>
        <IconButton
          color=#Primary
          disabled={isInvalid()}
          onClick={_ => {
            dispatch(AddResult({name: name, score: score}))
            dispatch(ShowMode)
          }}>
          <AddCircleIcon />
        </IconButton>
        <IconButton color=#Secondary onClick={_ => dispatch(ShowMode)}> <CancelIcon /> </IconButton>
      </TableCell>
    </TableRow>
  </TableHead>
}
