import { createSelector } from "reselect";

const selectFromClickedStateDomain = (globalState) => globalState.clickedState;

const makeSelectClickedData = () =>
  createSelector(
    selectFromClickedStateDomain,
    (clickedState) => clickedState.clicked
  );

export { makeSelectClickedData };
