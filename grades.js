var prevMaxPt = 0;

document.getElementById("curPt")
    .addEventListener("keyup", function(event) 
    {
        event.preventDefault();
        if (event.keyCode === 13) 
        {
            document.getElementById("curPtButton").click();
            document.getElementById("curPt").select();
        }
    }
);

document.getElementById("maxPt")
    .addEventListener("keyup", function(event) 
    {
        event.preventDefault();
        if (event.keyCode === 13) 
        {
            maxPtClick();
        }
    }
);

function maxPtClick()
{
    var maxPt = document.getElementById("maxPt").value;

    var o = document.getElementById("curPt");
    if(isNaN(o.value))
    {
        o.value = 0;
    }

    if(Number(o.value) > maxPt)
    {
        o.value = maxPt;
    }
    o.select();
    o.focus();

    curPtClick();
}

function updateGradeTable(refTable, factor)
{
    var tableContent = "";
    tableContent += "<table id=\"gradeTable\"><tr>";
    tableContent += "<th>pisteet</th>";
    tableContent += "<th>arvosana</th>";
    tableContent += "</tr><tr>";
   
    var rawMinPrev = Number(refTable["ref"]);
    var prevMin = Math.round(rawMinPrev / factor);
    var prevPrinted = prevMin+1;
    var forcePrint = true;

    for(const row of refTable["table"])
    {
        rawMin = Number(row["min"]);
        const myMin = Math.round(rawMin / factor);

        if(forcePrint || (prevPrinted != myMin))
        {
            const myMax = prevPrinted -1;
            if(myMin != myMax)
            {
                tableContent += "<td>"+myMax+"-"+myMin+"</td><td>"+row["grade"]+"</td>";
            }
            else
            {
                tableContent += "<td style=\"white-space:nowrap\">"+myMin+"</td><td>"+row["grade"]+"</td>";
            }
            prevPrinted = myMin;
            forcePrint = false;

            tableContent += "</tr>";
        }
        prevMin = myMin;
    }
    tableContent += "</table>";

    document.getElementById("gradeLog").innerHTML = tableContent;

}


function getGrade(curPt, maxPt)
{
    if((maxPt < 10) || (maxPt > 200))
    {
        return "error(maxPt)";
    }

    if((curPt < 0) || (curPt > maxPt))
    {
        return "error(curPt)";
    }

    const refTable = pickReferenceTable(maxPt);
    const refValue = Number(refTable["ref"]);

    const factor = refValue / maxPt;
    const adjustedPt = curPt * factor;

    if(prevMaxPt != maxPt)
    {
        updateGradeTable(refTable, factor);
        console.log("maxPt="+maxPt+", using reference table for "+refValue+"pts");
        prevMaxPt = maxPt;
    }


    for(const row of refTable["table"])
    {
        if(adjustedPt >= row["min"])
        {
            return row["grade"];
        }
    }
    return "error(other)";
}

function curPtClick()
{
    var maxPt = Number(document.getElementById("maxPt").value);
    var curPt = Number(document.getElementById("curPt").value);

    var grade = getGrade(curPt, maxPt);

    document.getElementById("resGrade").innerHTML = grade

    gradeTable = "pt="+curPt+", max="+maxPt+", grade="+grade;

    console.log();
}

function init()
{
    curPtClick();
}



