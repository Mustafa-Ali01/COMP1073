// Grab the core elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Enforce a maximum character limit of 30
taskInput.maxLength = 30;

// Listen for the Add button click
addBtn.addEventListener('click', function() {
    
    // Only proceed if there is text in the input
    if (taskInput.value !== '') {
        
        // Create the elements
        const li = document.createElement('li');
        const textNode = document.createTextNode(taskInput.value);

        // Assemble the list item
        li.appendChild(textNode);
        
        // Add to the page
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = '';
    }
});