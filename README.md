# Algorithms in Javascript

## Merge Sort

### Overview

The First exercice is a merge sort of a list of numbers, in the /Merge.js using /list.txt file.
The program reads a list of numbers from a file, validates them, and sorts them using the Merge Sort algorithm.
It also counts the total number of comparisons made during the sorting process.

### Features

- File input: Read numbers from a text file passed as a command-line argument.
- Validation: Check if the file exists, is not empty, and contains only valid numbers.
- Merge Sort: Efficient divide-and-conquer sorting algorithm.
- Comparison counter: Displays the number of comparisons performed.

### How to use

1. Ensure you have Node.js installed.
2. Place your input numbers in the list.txt file.
3. Run : `node Merge.js list.txt`

## Exercices on on different type of algorithms

### Overview

#### Problem 1 — Sum to k

Given a list of integers and a target number k, create a method that returns a boolean indicating whether two distinct numbers in the list sum up to k.

#### Problem 2 — Sunset View

Given a list representing the height (in floors) of buildings from east to west, write a function that returns how many buildings have at least one apartment with a view of the sunset (west).

### Challenges

- Exo_1: Solve Problem 1 with O(n²) complexity (two nested loops).
- Exo_2: Solve Problem 2 with O(n²) complexity (two nested loops).
- Exo_3: Solve Problem 1 with O(n) complexity — multiple passes allowed, but no nested loops.
- Exo_4: Solve Problem 2 with O(n) complexity — multiple passes allowed, but no nested loops.
- Exo_5: Solve Problem 1 in O(n) with a single pass through the list.
- Exo_6: Solve Problem 2 in O(n) with a single pass through the list.