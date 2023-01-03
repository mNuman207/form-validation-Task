
function myFun()
{
    const name=document.getElementById("name");
    const DoB=document.getElementById("DoB");

    const Today=document.getElementById("Start");
    const Tomorrow=document.getElementById("End");
    const File=document.getElementById('File')
    const arr=[];

    if (Today.value >= Tomorrow.value)
    {
        alert('End Date Should not be  Greater than Start Date');
    }
    arr.push({name: `${name.value}`});
    arr.push({DoB: `${DoB.value}`});
    arr.push({Today: `${Today.value}`});
    arr.push({Tomorrow: `${Tomorrow.value}`});
    arr.push({File: `${File.value}`});
    localStorage.setItem("",JSON.stringify(arr));
}