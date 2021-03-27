name_of_students_array=[];
function submit(){
var display_students_array=[];
for(var j=1;j<=4;j++){
    var name_of_the_students=document.getElementById("name_of_the_student_"+j).value;
console.log(name_of_the_students);
name_of_students_array.push(name_of_the_students);
}
console.log(name_of_students_array);
var length_of_name_of_students_array=name_of_students_array.length;
console.log(length_of_name_of_students_array);
for(var k=0;k<length_of_name_of_students_array;k++){
    display_students_array.push("<h4>name - "+name_of_students_array[k]+"</h4>");
    console.log(display_students_array);
}
console.log(display_students_array);
document.getElementById("display_name_with_commas").innerHTML=display_students_array;
var remove_commas=display_students_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_students_array.sort();
    console.log(name_of_students_array);
    var display_student_array_sorting=[];
    var length_of_name_of_students_array=name_of_students_array.length;
    console.log(length_of_name_of_students_array);
    for(k=0;k<length_of_name_of_students_array;k++){
        display_student_array_sorting.push("<h4>name - "+name_of_students_array[k]+"</h4>");
        console.log(display_student_array_sorting);
    }
var remove_commas=display_student_array_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}