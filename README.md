# Angular/NgRx Service Station
 
## Introduction
 
You are given an application that shows a car repairs service station. The app misses a few parts. Your goal is to add the missing parts.
 
## Setup for local environment
 
Follow the below steps if you are using zip/git mode (i.e., not available inside DevSkiller’s in-browser IDE):
 
1. `npm install` to fetch dependencies.
2. Start the app with `npm run start` and open the `http://localhost:4200/`.
3. Use `npm test` or `npm run test:watch` to see tests failing.
4. Fix issues so that the tests pass.
5. Solve all the issues mentioned here.
6. Submit your code on the DevSkiller platform to verify that the task is completed.
 
## Problem Statement
 
State management in the application is done using the NgRx library, but it is incomplete. Add the missing functionality:
 
* In `car-repairs-list.component.ts`, add:
 * Displaying car repairs under proper columns based on their state (`New`, `In progress`, `Done`). The repair states are defined in the `src/app/car-repairs/model/repair-state.type.ts` file.
 * Displaying `<div class="board"/>` only once the car repairs are fetched.
 * Hiding the spinner in the `car-repairs-list.component.ts` once the car repairs are loaded.
 * Advancing the car repair to the next state (`New` -> `In Progress` -> `Done`).
* In `car-repairs-dashboard.component.ts`, add:
 * Displaying totals of car repairs in each state (use proper state selectors).
 * Displaying the `<ng-container>` with statistics only if the car repairs data is loaded.
 * Hiding the spinner once the data is loaded.
* In `car-repairs.resolve.ts`, add fetching of car repairs, but only if it is needed.
 * Implement fetching in the `selectIsFetchingNeeded` selector, according to the following logic: __(the app did not fetch any repairs_ `OR` there was an error) `AND` the app is not fetching any repairs right now__.
 
In addition to the above business requirements, there are some technical ones:
 
1. Make the `State` (from `car-repairs-list.reducer.ts`) be an `@ngrx/entity` based state. Keep the `CarRepair` objects there.
2. Use NgRx data flow: `action -> [effect -> service] -> store an update via a reducer -> state slice selection via a selector`. 
3. Use selectors to select slices of state. Do not select the data without the selector function. The only selectors you will need are stabbed in the `car-repairs.selectors.ts`. Implement all of them. Do not modify the selectors’ names.
4. Data fetching has to be done in the following way: `action -> effect -> service -> store an update via a reducer`. Do not call the service from any other place than the effects.
5. Use only the actions provided in the `car-repairs-list.actions.ts` to implement your flows.
6. Do not modify the HTML structure if it is not necessary.
 
Meet all the above requirements and make sure unit tests pass. There may be more tests than those available to you.
