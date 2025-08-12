
        function myFunction(subject) {
            let subid = "marks_" + subject
            let marks = prompt("Please enter " + subject + " Marks", "0");
           // alert(document.getElementById("numsub").value );
            let numsub = document.getElementById("numsub").value;
            let total = document.getElementById("total").value;
            let average = document.getElementById("average").value;
            if (marks != null) {
                document.getElementById(subid).value = marks;
                document.getElementById("numsub").value = parseInt(numsub)+1
                document.getElementById("total").value = parseInt(total) + parseInt(marks);
                document.getElementById("average").value = (parseInt(total) + parseInt(marks))/ (parseInt(numsub)+1);
            }
        }
         function calculateGrade() {
                            let total = document.getElementById("total").value;
                            let average = document.getElementById("average").value;
                            let grade = "";
                            if (average >= 90) {
                                grade = "A+";
                            } else if (average >= 80) {
                                grade = "A";
                            } else if (average >= 70) {
                                grade = "B";
                            } else if (average >= 60) {
                                grade = "C";
                            } else if (average >= 50) {
                                grade = "D";
                            } else {
                                grade = "F";
                            }
                            alert("Total Marks: " + total + "<br>Average: " + average + "<br>Grade: " + grade);
                        }

                        function resetForm() {
                            document.getElementById("gradeForm").reset();
                           // document.getElementById("result").innerHTML = "";
                        }
   