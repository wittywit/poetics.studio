// Sample quotes for welcome screen
const morningQuotes = [
    "The future depends on what you do today. - Mahatma Gandhi",
    "The early morning has gold in its mouth. - Benjamin Franklin",
    "Morning is an important time of day, because how you spend your morning can often tell you what kind of day you are going to have. - Lemony Snicket",
    "Write it on your heart that every day is the best day in the year. - Ralph Waldo Emerson",
    "Every morning you have two choices: continue to sleep with your dreams, or wake up and chase them. - Unknown"
];

// Sample relaxing music tracks - using short audio samples for demo
const musicTracks = [
    "https://assets.mixkit.co/active_storage/sfx/2515/2515-preview.mp3",
    "https://assets.mixkit.co/active_storage/sfx/209/209-preview.mp3",
    "https://assets.mixkit.co/active_storage/sfx/2516/2516-preview.mp3"
];

// Audio player for background music
const audioPlayer = new Audio();

// Global variables for state
let routineTasks = [];
let dayTasks = [];
let currentTaskIndex = -1;
let currentDialogType = 'routine';

// When DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded");
    initApp();
});

// Initialize the app
function initApp() {
    // Load data from localStorage
    loadData();
    
    // Update date and time
    updateDateTime();
    setInterval(updateDateTime, 60000);
    
    // Set random quote
    setRandomQuote();
    
    // Check for new day
    checkForNewDay();
    
    // Set up event listeners
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    // Start button
    const startBtn = document.getElementById('startBtn');
    const welcomeScreen = document.getElementById('welcomeScreen');
    
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            welcomeScreen.style.display = 'none';
        });
    }
    
    // Focus button
    const focusBtn = document.getElementById('focusBtn');
    if (focusBtn) {
        focusBtn.addEventListener('click', enterFocusMode);
    }
    
    // Close focus mode
    const focusCloseBtn = document.getElementById('focusCloseBtn');
    const focusMode = document.getElementById('focusMode');
    
    if (focusCloseBtn) {
        focusCloseBtn.addEventListener('click', function() {
            focusMode.classList.remove('active');
            audioPlayer.pause();
        });
    }
    
    // Close app
    const closeBtn = document.getElementById('closeBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            alert('App would close here in a real implementation');
        });
    }
    
    // Add task buttons
    const addRoutineBtn = document.getElementById('addRoutineBtn');
    const addDayTaskBtn = document.getElementById('addDayTaskBtn');
    
    if (addRoutineBtn) {
        addRoutineBtn.addEventListener('click', function() {
            showAddTaskDialog('routine');
        });
    }
    
    if (addDayTaskBtn) {
        addDayTaskBtn.addEventListener('click', function() {
            showAddTaskDialog('day');
        });
    }
    
    // Input fields
    const routineInput = document.getElementById('routineInput');
    const dayTaskInput = document.getElementById('dayTaskInput');
    
    if (routineInput) {
        routineInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                showAddTaskDialog('routine', routineInput.value.trim());
            }
        });
    }
    
    if (dayTaskInput) {
        dayTaskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                showAddTaskDialog('day', dayTaskInput.value.trim());
            }
        });
    }
    
    // Task dialog
    const saveTaskBtn = document.getElementById('saveTask');
    const cancelTaskBtn = document.getElementById('cancelTask');
    const taskDialog = document.getElementById('taskDialog');
    const taskText = document.getElementById('taskText');
    const taskTime = document.getElementById('taskTime');
    const repeatDaily = document.getElementById('repeatDaily');
    
    if (saveTaskBtn) {
        saveTaskBtn.addEventListener('click', function() {
            const text = taskText.value.trim();
            const time = taskTime.value;
            const isRepeatDaily = repeatDaily.checked;
            
            if (text) {
                addTask(currentDialogType, text, time, isRepeatDaily);
                taskDialog.style.display = 'none';
            }
        });
    }
    
    if (cancelTaskBtn) {
        cancelTaskBtn.addEventListener('click', function() {
            taskDialog.style.display = 'none';
        });
    }
    
    // Toggle buttons
    const routineToggle = document.getElementById('routineToggle');
    const todayToggle = document.getElementById('todayToggle');
    
    if (routineToggle) {
        routineToggle.addEventListener('click', function() {
            showSection('routine');
        });
    }
    
    if (todayToggle) {
        todayToggle.addEventListener('click', function() {
            showSection('today');
        });
    }
    
    // Setup drag and drop for task items
    const routineList = document.getElementById('routineList');
    const dayTasksList = document.getElementById('dayTasksList');
    
    if (routineList && dayTasksList) {
        routineList.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        
        dayTasksList.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        
        routineList.addEventListener('drop', function(e) {
            handleDrop(e, routineList, 'routine');
        });
        
        dayTasksList.addEventListener('drop', function(e) {
            handleDrop(e, dayTasksList, 'day');
        });
    }
}

// Handle drop event
function handleDrop(e, container, listType) {
    e.preventDefault();
    
    const targetElement = e.target.closest('.task-item') || e.target.closest('.hour-task');
    if (!targetElement) return;
    
    const targetItems = Array.from(container.querySelectorAll('.task-item, .hour-task'));
    const targetIndex = targetItems.indexOf(targetElement);
    
    if (targetIndex === -1) return;
    
    const sourceListType = e.dataTransfer.getData('listType');
    const sourceIndex = parseInt(e.dataTransfer.getData('index'));
    
    let sourceList = sourceListType === 'routine' ? routineTasks : dayTasks;
    let targetList = listType === 'routine' ? routineTasks : dayTasks;
    
    // Remove from source list
    const [task] = sourceList.splice(sourceIndex, 1);
    
    // Add to target list
    targetList.splice(targetIndex, 0, task);
    
    // Re-render lists
    renderTaskList(document.getElementById('routineList'), routineTasks);
    renderTaskList(document.getElementById('dayTasksList'), dayTasks);
    
    // Save data
    saveData();
}

// Handle drag start
function handleDragStart(e, listType, index) {
    e.dataTransfer.setData('listType', listType);
    e.dataTransfer.setData('index', index);
}

// Set a random morning quote
function setRandomQuote() {
    const quoteElement = document.querySelector('.quote');
    if (quoteElement) {
        const randomQuote = morningQuotes[Math.floor(Math.random() * morningQuotes.length)];
        quoteElement.textContent = randomQuote;
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('routineTasks', JSON.stringify(routineTasks));
    localStorage.setItem('dayTasks', JSON.stringify(dayTasks));
}

// Load data from localStorage
function loadData() {
    const savedRoutineTasks = localStorage.getItem('routineTasks');
    const savedDayTasks = localStorage.getItem('dayTasks');
    
    if (savedRoutineTasks) {
        routineTasks = JSON.parse(savedRoutineTasks);
        renderTaskList(document.getElementById('routineList'), routineTasks);
    }
    
    if (savedDayTasks) {
        dayTasks = JSON.parse(savedDayTasks);
        renderTaskList(document.getElementById('dayTasksList'), dayTasks);
    }
}

// Update date and time displays
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateStr = now.toLocaleDateString('en-US', options);
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    const currentDate = document.getElementById('currentDate');
    const currentTime = document.getElementById('currentTime');
    const focusDate = document.getElementById('focusDate');
    const focusTime = document.getElementById('focusTime');
    
    if (currentDate) currentDate.textContent = dateStr;
    if (currentTime) currentTime.textContent = timeStr;
    if (focusDate) focusDate.textContent = dateStr;
    if (focusTime) focusTime.textContent = timeStr;
    
    // Update focus mode background based on time of day
    const hour = now.getHours();
    const focusMode = document.getElementById('focusMode');
    const sun = document.getElementById('sun');
    
    if (focusMode && sun) {
        if (hour >= 5 && hour < 12) {
            // Morning
            focusMode.className = 'focus-mode morning';
            sun.style.backgroundColor = '#ff7b00';
            sun.style.bottom = '30%';
            focusMode.style.backgroundImage = 'linear-gradient(to bottom, #e6e2dd, #f2f0ed, #ffffff)';
        } else if (hour >= 12 && hour < 17) {
            // Daytime
            focusMode.className = 'focus-mode day';
            sun.style.backgroundColor = '#ffcc00';
            sun.style.bottom = '50%';
            focusMode.style.backgroundImage = 'linear-gradient(to bottom, #d4f1f9, #e6f7ff, #ffffff)';
        } else {
            // Evening/Night
            focusMode.className = 'focus-mode evening';
            sun.style.backgroundColor = '#ff7b00';
            sun.style.bottom = '70%';
            focusMode.style.backgroundImage = 'linear-gradient(to bottom, #fde9d9, #fff0e6, #ffffff)';
        }
    }
}

// Check for new day and reset daily tasks
function checkForNewDay() {
    const lastDate = localStorage.getItem('lastDate');
    const today = new Date().toDateString();
    
    if (lastDate !== today) {
        // It's a new day, reset daily tasks
        resetDailyTasks();
        localStorage.setItem('lastDate', today);
    }
}

// Reset daily tasks and restore routine tasks
function resetDailyTasks() {
    // Reset completion status of routine tasks
    routineTasks.forEach(task => {
        if (task.repeatDaily) {
            task.completed = false;
        }
    });
    
    // Keep only non-completed day tasks
    dayTasks = dayTasks.filter(task => !task.completed);
    
    saveData();
    renderTaskList(document.getElementById('routineList'), routineTasks);
    renderTaskList(document.getElementById('dayTasksList'), dayTasks);
}

// Format time for display
function formatTimeForDisplay(timeString) {
    if (!timeString) return '';
    
    try {
        const [hours, minutes] = timeString.split(':');
        const hour = parseInt(hours);
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${period}`;
    } catch (e) {
        return timeString;
    }
}

// Add a new task
function addTask(listType, text, time = null, repeatDaily = false) {
    if (!text.trim()) return;
    
    const newTask = {
        text: text,
        completed: false,
        time: time,
        repeatDaily: repeatDaily
    };
    
    if (listType === 'routine') {
        routineTasks.push(newTask);
        renderTaskList(document.getElementById('routineList'), routineTasks);
        const routineInput = document.getElementById('routineInput');
        if (routineInput) routineInput.value = '';
    } else {
        dayTasks.push(newTask);
        renderTaskList(document.getElementById('dayTasksList'), dayTasks);
        const dayTaskInput = document.getElementById('dayTaskInput');
        if (dayTaskInput) dayTaskInput.value = '';
    }
    
    saveData();
}

// Show add task dialog
function showAddTaskDialog(type, prefilledText = '') {
    currentDialogType = type;
    
    const taskDialog = document.getElementById('taskDialog');
    const taskText = document.getElementById('taskText');
    const dialogTitle = document.getElementById('dialogTitle');
    const repeatCheckbox = document.getElementById('repeatDaily');
    
    if (!taskDialog || !taskText || !dialogTitle || !repeatCheckbox) return;
    
    taskDialog.style.display = 'block';
    taskText.value = prefilledText;
    taskText.focus();
    
    if (type === 'routine') {
        dialogTitle.textContent = 'Add Daily Routine Task';
        repeatCheckbox.checked = true;
    } else {
        dialogTitle.textContent = "Add Today's Task";
        repeatCheckbox.checked = false;
    }
}

// Show section (routine or today's tasks)
function showSection(section) {
    const routineToggle = document.getElementById('routineToggle');
    const todayToggle = document.getElementById('todayToggle');
    const todayTasksTitle = document.getElementById('todayTasksTitle');
    const dayTasksList = document.getElementById('dayTasksList');
    const addDayTaskBtn = document.getElementById('addDayTaskBtn');
    const routineList = document.getElementById('routineList');
    const addRoutineBtn = document.getElementById('addRoutineBtn');
    const mainHeader = document.getElementById('mainHeader');
    
    if (!routineToggle || !todayToggle || !todayTasksTitle || !dayTasksList || !addDayTaskBtn || !routineList || !addRoutineBtn || !mainHeader) {
        return;
    }
    
    if (section === 'routine') {
        // Show routine section
        routineToggle.classList.add('active');
        todayToggle.classList.remove('active');
        
        todayTasksTitle.style.display = 'none';
        dayTasksList.style.display = 'none';
        addDayTaskBtn.style.display = 'none';
        
        routineList.style.display = 'block';
        addRoutineBtn.style.display = 'block';
        
        mainHeader.textContent = 'Daily Routine';
    } else {
        // Show today's tasks section
        routineToggle.classList.remove('active');
        todayToggle.classList.add('active');
        
        todayTasksTitle.style.display = 'block';
        dayTasksList.style.display = 'block';
        addDayTaskBtn.style.display = 'block';
        
        routineList.style.display = 'none';
        addRoutineBtn.style.display = 'none';
        
        mainHeader.textContent = "Today's Tasks";
    }
}

// Toggle task completed status
function toggleTaskCompleted(listType, index) {
    const taskList = listType === 'routine' ? routineTasks : dayTasks;
    
    if (index >= 0 && index < taskList.length) {
        taskList[index].completed = !taskList[index].completed;
        
        // Re-render the task list
        const listElement = listType === 'routine' ? 
            document.getElementById('routineList') : 
            document.getElementById('dayTasksList');
        
        renderTaskList(listElement, taskList);
        
        // Save data
        saveData();
    }
}

// Render task list
function renderTaskList(container, tasks) {
    if (!container) return;
    
    // Get the input element
    const inputElement = container.querySelector('input');
    
    // Clear container but keep the input element
    container.innerHTML = '';
    
    // Add input back
    if (inputElement) {
        container.appendChild(inputElement);
    }
    
    // Add each task
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task-item' + (task.completed ? ' completed' : '');
        taskElement.draggable = true;
        
        // Set drag events
        taskElement.addEventListener('dragstart', function(e) {
            const listType = container.id === 'routineList' ? 'routine' : 'day';
            handleDragStart(e, listType, index);
        });
        
        // Set click event to toggle completion
        taskElement.addEventListener('click', function() {
            const listType = container.id === 'routineList' ? 'routine' : 'day';
            toggleTaskCompleted(listType, index);
        });
        
        // Create task content
        let taskContent = task.text;
        
        // Add time if available
        if (task.time) {
            const formattedTime = formatTimeForDisplay(task.time);
            taskContent = `<span style="color: #666;">${formattedTime}</span> - ${taskContent}`;
        }
        
        // Add repeat indicator if applicable
        if (task.repeatDaily) {
            taskContent += ' <span style="float: right; color: #ff7b00;">↻</span>';
        }
        
        taskElement.innerHTML = taskContent;
        container.appendChild(taskElement);
    });
}

// Enter focus mode
function enterFocusMode() {
    // Get all incomplete tasks
    const allTasks = [...routineTasks, ...dayTasks].filter(task => !task.completed);
    
    // If no tasks, show a message
    if (allTasks.length === 0) {
        alert('No tasks to focus on. Add some tasks first!');
        return;
    }
    
    // Sort tasks by time if available
    allTasks.sort((a, b) => {
        if (!a.time) return 1;
        if (!b.time) return -1;
        return a.time.localeCompare(b.time);
    });
    
    // Get the focus mode elements
    const focusMode = document.getElementById('focusMode');
    const currentFocusTask = document.getElementById('currentFocusTask');
    const previousFocusTask = document.getElementById('previousFocusTask');
    
    if (!focusMode || !currentFocusTask || !previousFocusTask) return;
    
    // Increment task index or reset to 0 if at the end
    currentTaskIndex = (currentTaskIndex + 1) % allTasks.length;
    
    // Update tasks display
    currentFocusTask.textContent = allTasks[currentTaskIndex].text;
    
    // Show previous task if available
    if (allTasks.length > 1) {
        const prevIndex = (currentTaskIndex - 1 + allTasks.length) % allTasks.length;
        previousFocusTask.textContent = allTasks[prevIndex].text;
        previousFocusTask.style.opacity = '0.5';
    } else {
        previousFocusTask.textContent = '';
    }
    
    // Show focus mode
    focusMode.classList.add('active');
    
    // Play random background music
    const randomTrack = musicTracks[Math.floor(Math.random() * musicTracks.length)];
    audioPlayer.src = randomTrack;
    audioPlayer.loop = true;
    audioPlayer.play();
}

// Delete task
function deleteTask(listType, index) {
    const taskList = listType === 'routine' ? routineTasks : dayTasks;
    
    if (index >= 0 && index < taskList.length) {
        taskList.splice(index, 1);
        
        // Re-render the task list
        const listElement = listType === 'routine' ? 
            document.getElementById('routineList') : 
            document.getElementById('dayTasksList');
        
        renderTaskList(listElement, taskList);
        
        // Save data
        saveData();
    }
}

// Edit task
function editTask(listType, index) {
    const taskList = listType === 'routine' ? routineTasks : dayTasks;
    
    if (index >= 0 && index < taskList.length) {
        const task = taskList[index];
        
        // Show add task dialog with task data
        showAddTaskDialog(listType, task.text);
        
        // Set time and repeat status
        const taskTime = document.getElementById('taskTime');
        const repeatDaily = document.getElementById('repeatDaily');
        
        if (taskTime && task.time) {
            taskTime.value = task.time;
        }
        
        if (repeatDaily) {
            repeatDaily.checked = task.repeatDaily;
        }
        
        // Delete the task after editing
        deleteTask(listType, index);
    }
}