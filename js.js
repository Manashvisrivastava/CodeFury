            var isProjectAssigned = true; // Set this to true if the project is assigned, false otherwise
            var projectName = "Sample Project";
            var projectManager = "John Doe";
            var startDate = "2023-09-10";
            var projectMembers = "John Doe, Jane Smith, Mark Johnson";

            // Check if the project is assigned
            if (isProjectAssigned) {
                document.write("<h2>" + projectName + "</h2>");
                document.write("<p>Manager: " + projectManager + "</p>");
                document.write("<p>Start Date: " + startDate + "</p>");
                document.write("<p>List of Members: " + projectMembers + "</p>");
            } else {
                document.write("<div class='message'>You are not assigned to any project.</div>");
            }
