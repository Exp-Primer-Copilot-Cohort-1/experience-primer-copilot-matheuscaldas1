function skillsMembers()
{
    var member = document.getElementById("member").value;
    var skill = document.getElementById("skill").value;
    var url = "skillsMembers.php?member=" + member + "&skill=" + skill;
    window.open(url, "_self");
}