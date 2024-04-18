// Imports //
import { randomInt } from './utility.js';

// Variables //
let assignments = [];
let priorityLevel = {
    5 : 'No Deadline',
    4 : 'Low',
    3 : 'Medium',
    2 : 'High',
    1 : 'Critical'
};
let taskQueue = [];
const dayLength = 24;

// Classes //
class Task {
    constructor(name, id, duration, priority, deadline, minSplit, maxSplit) {
        this.name = name;
        this.id = id;
        this.duration = duration;
        this.priority = priority;
        this.deadline = deadline;
        this.minSplit = minSplit;
        this.maxSplit = maxSplit;
    }

    DisplayCalendarBlock() {
        return this.name + '<br />Deadline: ' + this.deadline.toDateString() + '<br />' + this.duration + ' hr<br />' + this.priority;
    }
}

class TaskChunk {
    constructor(id, start, end) {
        this.id = id;
        this.start = start;
        this.end = end;
    }

    length() {
        return this.end - this.start;
    }
}


// Functions //
function assignmentCreation(numOfAssigns) {
    // Random Assignment
    for (let i = 0; i < numOfAssigns; i++) {
        assignments.push(
            new Task(
                'Assignment ' + i, // Assignment Name
                i,
                8.25, // Duration
                priorityLevel[randomInt(0, Object.keys(priorityLevel).length + 1)], // Priority
                new Date(2024, 3, randomInt(1, 32), randomInt(0, 24), randomInt(0, 61)), // Deadline
                0.5, // Minimum Block Split
                4 // Maximum Block Split
            )
        );
    }
}

function fillCalendar(assignList) {
    assignList.sort((a, b) => a.deadline - b.deadline);

    let aIndex = 1;
    let minIncrement = 15;
    let currentTime = 0;
    while (assignList.length != 0) {
        
        
        currentTime += minIncrement;
    }

    // Uncomment after creating new array for above while function, because the current function
    // will break the code below
    // for (let i = 0; i < assignList.length; i++) {
    //     document.getElementById(assignList[i].deadline.getDate()).innerHTML += assignList[i].DisplayCalendarBlock();
    // }
}


// Main //
function main() {
    assignmentCreation(5);
    fillCalendar(assignments);
}

main();