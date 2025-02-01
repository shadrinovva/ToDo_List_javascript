"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task__input');
  const taskList = document.getElementById('tasks__list');
  const taskForm = document.getElementById('tasks__form');
  function createTask(taskText) {
    const task = document.createElement('div');
    task.classList.add('mark_item');
    const taskTitle = document.createElement('span');
    taskTitle.classList.add('mark_text');
    taskTitle.textContent = taskText;
    const taskRemove = document.createElement('a');
    taskRemove.href = "#";
    taskRemove.classList.add('delete_mark');
    taskRemove.innerHTML = '&times;';
    taskRemove.addEventListener('click', event => {
      event.preventDefault();
      task.remove();
    });
    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    taskList.appendChild(task);
  }
  taskForm.addEventListener('submit', event => {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      createTask(taskText);
      taskInput.value = '';
    }
  });
});