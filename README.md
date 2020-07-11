# Saving Goal Plan Simulation

A React project that simulates a saving goal plan feature for a financial platform.

### The Saving Goal Plan Simulation Screen

![Saving Goal Plan Mockup Desktop](https://github.com/GelsonMR/saving-goal-plan-simulation/blob/mockups/saving-goal-plan-desk.png)

The user will simulate saving towards the "Buy a house" savings goal.
In it, the users choose (i) the value they want to save and (ii) the date they plan to reach the goal.

When the users change the value of any of the inputs, the monthly deposit value is calculated and displayed to them.

# Tasks

- [ ] Develop the page as close as possible to the mockups, both on mobile & desktop.
- [ ] Implement business rules.
- [ ] Test the codebase.

#### Money input

- [ ] Allow only numbers
- [ ] Display the value formatted as money (e.g 3500.45 should be 3,500.44)

#### Date input

- [ ] Allow only future dates
- [ ] When clicking on the arrow buttons it should go up and down month by month
- [ ] The users should be able to move the months by typing the Left and Right arrow key on the keyboard

# Usage

This project requires `Node >=12` and `NPM >= 6`.

After you have cloned this repo, install the dependencies with:

```
npm install
```

You can then start the application running:

```
npm run dev
```

That's it. Just Access `http://localhost:1234` in your browser.

### Linting

```
npm run lint
```

### Testing

```
npm run test
```
