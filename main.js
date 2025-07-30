$(document).ready(function() {
    $('#taskForm').submit(function(e) {
        e.preventDefault();
        
        const taskText = $('#taskInput').val().trim();
        
        if (taskText !== '') {
            const listItem = $('<li>').text(taskText);
            $('#taskList').append(listItem);
            $('#taskInput').val('');
        }
    });
    
    $(document).on('click', '#taskList li', function() {
        $(this).toggleClass('completed');
    });
});