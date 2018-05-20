//Step 2
var reportArray=[];
var d = new Date();
var date = ""; 
	date += d.getMonth()+"/";
	date += d.getDay()+ "/";
	date += d.getFullYear()+":";
	date += d.getHours() + ":";
	date += d.getMinutes() + ":";
	date += d.getSeconds();



function init()
{
	
	// Step 6
	if(localStorage.storeReport)
	{
		 //Step 7
		reportArray = JSON.parse(localStorage.storeReport);
		console.log("Length is " +reportArray.length);
		
		//Step 8
		for (var i = 0; i < reportArray.length; i++) 
		{
			console.log(reportArray[i].isssueType);
			if(reportArray[i].isssueType == "shops")
				{
				var table = document.getElementById('issuesCampusShopsReport');
				console.log("table referenced is " +table);
				callReports(table,i+1,reportArray[i].todaysDate,reportArray[i].studentName,reportArray[i].isssueType,reportArray[i].issueDesc);
				}
			else if (reportArray[i].isssueType == "electricity")
		     	{
				var table = document.getElementById('issuesElectricityReport');
				console.log("table referenced is " +table);
				callReports(table,i+1,reportArray[i].todaysDate,reportArray[i].studentName,reportArray[i].isssueType,reportArray[i].issueDesc);
				}
			else if (reportArray[i].isssueType == "garbage")
		     	{
				var table = document.getElementById('issuesGarbageReport');
				console.log("table referenced is " +table);
				callReports(table,i+1,reportArray[i].todaysDate,reportArray[i].studentName,reportArray[i].isssueType,reportArray[i].issueDesc);
				}
			else if (reportArray[i].isssueType == "parks")
		     	{
				var table = document.getElementById('issuesParksReport');
				console.log("table referenced is " +table);
				callReports(table,i+1,reportArray[i].todaysDate,reportArray[i].studentName,reportArray[i].isssueType,reportArray[i].issueDesc);
				}
			else if (reportArray[i].isssueType == "ROADS")
		     	{
				var table = document.getElementById('issuesRoadsReport');
				console.log("table referenced is " +table);
				callReports(table,i+1,reportArray[i].todaysDate,reportArray[i].studentName,reportArray[i].isssueType,reportArray[i].issueDesc);
				}
			else if (reportArray[i].isssueType == "transport")
		     	{
				var table = document.getElementById('issuesPublicTransportReport');
				console.log("table referenced is " +table);
				callReports(table,i+1,reportArray[i].todaysDate,reportArray[i].studentName,reportArray[i].isssueType,reportArray[i].issueDesc);
				}
			else if (reportArray[i].isssueType == "traffic")
		     	{
				var table = document.getElementById('issuesTrafficReport');
				console.log("table referenced is " +table);
				callReports(table,i+1,reportArray[i].todaysDate,reportArray[i].studentName,reportArray[i].isssueType,reportArray[i].issueDesc);
				}
			else if (reportArray[i].isssueType == "trees")
		     	{
				var table = document.getElementById('issuesTreesReport');
				console.log("table referenced is " +table);
				callReports(table,i+1,reportArray[i].todaysDate,reportArray[i].studentName,reportArray[i].isssueType,reportArray[i].issueDesc);
				}
			else if (reportArray[i].isssueType == "water")
		     	{
				var table = document.getElementById('issuesWaterReport');
				console.log("table referenced is " +table);
				callReports(table,i+1,reportArray[i].todaysDate,reportArray[i].studentName,reportArray[i].isssueType,reportArray[i].issueDesc);
				}
			
	   }
	} 
}

function callReports(table, i, todaysDate, studentName, isssueType, issueDesc)
{
createTable(table, i, todaysDate, studentName, isssueType, issueDesc);
}
function formResults()
			{
				
				var namevalue= document.getElementById("fnname").value;
				var socialmedialink= document.getElementById("sociallink").value;
				var issuetypeid= document.getElementById("optionval").value;
				var issuedescriptionid= document.getElementById("issuedetails").value;
				var imageforsaving= document.getElementById("imagesave").value;
				
				
				alert("Thanks. Your response has been saved "+ namevalue);
				
				

				//createTable("1","2",namevalue,issuetypeid, issuedescriptionid);
				
				//Step 1
				
				report = 	 {
							  todaysDate: "2",
							  studentName: namevalue,
						      isssueType: issuetypeid, 
						      issueDesc: issuedescriptionid
						      };
				//Step 3
				reportArray.push(report);
				
				//Step 4
				//createTable(table,"1","2",namevalue,issuetypeid, issuedescriptionid);
				
				// Step 5	
				localStorage.storeReport = JSON.stringify(reportArray);
			
				
				document.getElementById("fnname").value ="";
				document.getElementById("sociallink").value="";
				document.getElementById("optionval").value="";
				document.getElementById("issuedetails").value="";
				document.getElementById("imagesave").value="";
					
			}

function createTable(table,sno, date, name, issuetypeid, issuedescriptionid)
{
	
	console.log(table);
	var row = table.insertRow(0);
	var snoCell = row.insertCell(0);
	var dateCell = row.insertCell(1);
	var nameCell = row.insertCell(2);
	var issueTypeCell = row.insertCell(3);
	var issueDesCell = row.insertCell(4);

	snoCell.innerHTML =sno;
	dateCell.innerHTML = date;
	nameCell.innerHTML =name ;
	issueTypeCell.innerHTML = issuetypeid;
	issueDesCell.innerHTML = issuedescriptionid;
}


function imageexpand()
			{
			 document.images['Loyal'].src = "Images/Loyal-Hawk.jpg";
			}
			
function imagecollapse()
			{
				document.images['Loyal'].src = "Images/hawk.png";
			}
			

