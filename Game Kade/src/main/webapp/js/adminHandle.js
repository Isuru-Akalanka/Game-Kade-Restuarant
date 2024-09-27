/**
 * 
 */
 console.log("this is the AdminHandle.js handle");

 
 var empReqList = []
 var menuList = []
 var reservationList = []
 var pendinResList = [] 
 var ShowpendinResList = []
 var empList = []
 
 var empReqListTable = document.getElementById('empReqListTable');
 var ShowempCount = document.getElementById('employeeCount');
 var foodCount = document.getElementById('foodCount');
 
  
 var empReqListTable = document.getElementById('adminMangEmpTable'); 
 var ReservationListTable = document.getElementById('Reservation-table');
  var PendingResListTable = document.getElementById('PendingreseTableBody');
 // view empReqList
function callGetAllEmpReqServlet(){

	$.get("http://localhost:8087/Game_Kade/getAllEmpReqServlet", function(response) {
				
		empReqList = response
		var empReqLisLen = empReqList.length;
		buildAllEmpReqList(empReqList, empReqLisLen);
		
	})
}

function callGetAllEmpListServlet(){
		$.get("http://localhost:8087/Game_Kade/getAllEmpListServlet", function(response) {
                
        var empList = response;
        var empListLen = empList.length;
        console.log("This is Emp List " + empList);
        
        buildAllEmpList(empList, empListLen);
    })
}

function callGetAllPendingReserServlet(){
	$.get("http://localhost:8087/Game_Kade/getAllPendingReservations", function(response) {
				
		pendinResList = response
		var pendingResListLen = pendinResList.length;
		buildPendingResList(pendinResList, pendingResListLen);
		
	})
}


function callGetAllReserServlet(){
	
		$.get("http://localhost:8087/Game_Kade/getAllReservationsList", function(response) {
                
        reservationList = response
        var reserListLen = reservationList.length;
        buildAllReserList(reservationList, reserListLen);
        
    })
}


function buildPendingResList(pendinResList, pendingResListLen){
	PendingResListTable.innerHTML = '';
	
	for(var i = 0; i < pendingResListLen; i++){
		
		var PenResListInfo = `<tr>
				            <td>${pendinResList[i].reservationId}</td>
				            <td>${pendinResList[i].customerName}</td> 
				             <td>${pendinResList[i].date}</td>
				              <td>${pendinResList[i].timeSlot}</td>
				               <td>${pendinResList[i].numOfGuests}</td>
				                  <td><button class="btn btn-info btn-sm" onclick="viewSelectResDetails(${pendinResList[i].reservationId})">View</button></td>
				            
				          </tr>`;
				        
				          
		PendingResListTable.innerHTML += PenResListInfo;

	}
					
	
	
	
}

// Event listeners for buttons
      //  document.getElementById('approveBtn').onclick = approveReservation;
       // document.getElementById('denyBtn').onclick = denyReservation;
        
// pendingResList
 function viewSelectResDetails(reservationId) {
	
		$.get("http://localhost:8087/Game_Kade/getAllPendingReservations", function(response) {
					
			ShowpendinResList = response
			var pendingResListLen = ShowpendinResList.length;
			const reservationDetails = document.getElementById('reservationDetails');
		
		
		for(var i = 0; i < pendingResListLen; i++){
			if(ShowpendinResList[i].reservationId == reservationId){
				var PenResListInfo = `<tr>
						            <p><strong>ID:</strong> ${reservationId}</p>
					                <p><strong>Name:</strong> ${ShowpendinResList[i].customerName}</p>
					                <p><strong>Email:</strong> ${ShowpendinResList[i].customerEmail}</p>
					                <p><strong>Phone:</strong> ${ShowpendinResList[i].customerPhone}</p>
					                <p><strong>Date:</strong> ${ShowpendinResList[i].date}</p>
					                <p><strong>Time:</strong> ${ShowpendinResList[i].timeSlot}</p>
					                <p><strong>Guests:</strong> ${ShowpendinResList[i].numOfGuests}</p>
					                <p><strong>Message:</strong> ${ShowpendinResList[i].comments}</p>
				          </tr>`;
				          
				           reservationDetails.innerHTML = PenResListInfo;
				           
       
			            // Show action buttons
			            document.getElementById('actionButtons').classList.remove('hidden');
			}

		}
		
		var showActionButton = document.getElementById('actionButtons');
		
		showActionButton.innerHTML = `<button id="approveBtn" class="btn btn-approve" onclick="approveReservation(${reservationId})">Approve</button>
	            <button id="denyBtn" class="btn btn-deny" onclick="denyReservation(${reservationId})">Deny</button>`
		
		
	
        })
        
        
       // document.getElementById('approveBtn').onclick = approveReservation;
     	//document.getElementById('denyBtn').onclick = denyReservation;

  }


   function approveReservation(reservationId) {
	
	var endpoint = "http://localhost:8087/Game_Kade/updateReservation"
	var pendingResListLen = ShowpendinResList.length;
	var action = 'none'
	
	for(var i = 0; i < pendingResListLen; i++){
		
			if(ShowpendinResList[i].reservationId == reservationId){
                alert(`Reservation for ${ShowpendinResList[i].customerName} has been approved.`);
                action = 'Approved';
                
             
                $.post(endpoint, {reservationId, action}, function(response) {
					alert('Reservation : ' + reservationId + ' is ' + response)

					window.location.href = "http://localhost:8087/Game_Kade/Admin/AdminHome.html";
				})
            }
        }
        
        if(action == 'none'){
	    	alert(`Reservation ID ${reservationId} not found.`);
		}
    }

 function denyReservation(reservationId) {
	
    var endpoint = "http://localhost:8087/Game_Kade/updateReservation"
	var pendingResListLen = ShowpendinResList.length;
	var action = 'none'
	
	for(var i = 0; i < pendingResListLen; i++){
		
			if(ShowpendinResList[i].reservationId == reservationId){
                alert(`Reservation for ${ShowpendinResList[i].customerName} has been Declined.`);
                action = 'Declined';
                
             
                $.post(endpoint, {reservationId, action}, function(response) {
					alert('Reservation : ' + reservationId + ' is ' + response)

					window.location.href = "http://localhost:8087/Game_Kade/Admin/AdminHome.html";
				})
            }
        }
        
        if(action == 'none'){
	    	alert(`Reservation ID ${reservationId} not found.`);
		}
}







//All
function buildAllReserList(reservationList, reserListLen){
	ReservationListTable.innerHTML = '';
	
	for(var i = 0; i < reserListLen; i++){
		
		var ResListInfo = `<tr>
		 					<td>${reservationList[i].reservationId}</td>
		 					<td>${reservationList[i].customerName}</td>
				            <td>${reservationList[i].customerEmail}</td>
				             <td>${reservationList[i].customerPhone}</td>
				             <td>${reservationList[i].date}</td>
				              <td>${reservationList[i].timeSlot}</td>
				               <td>${reservationList[i].numOfGuests}</td>
				                <td>${reservationList[i].status}</td>
				                 <td>${reservationList[i].comments}</td>
				              
				          </tr>`;
				          
		ReservationListTable.innerHTML += ResListInfo;

	}
					
	
	
	
}

 function viewReservationDetails(reservationId) {
           
            const reservationDetails = document.getElementById('reservationDetails');
            reservationDetails.innerHTML = `
                <p><strong>ID:</strong> ${selectedReservation.id}</p>
                <p><strong>Name:</strong> ${selectedReservation.name}</p>
                <p><strong>Email:</strong> ${selectedReservation.email}</p>
                <p><strong>Phone:</strong> ${selectedReservation.phone}</p>
                <p><strong>Date:</strong> ${selectedReservation.date}</p>
                <p><strong>Time:</strong> ${selectedReservation.time}</p>
                <p><strong>Guests:</strong> ${selectedReservation.guests}</p>
                <p><strong>Message:</strong> ${selectedReservation.message}</p>
            `;

            // Show action buttons
            document.getElementById('actionButtons').classList.remove('hidden');
        }




function buildAllEmpList(empList, empListLen){
	
	adminMangEmpTable.innerHTML = '';
	
	for(var i = 0; i < pendingResListLen; i++){
		
		var EmpListInfo = `<tr>
				            <td>${empList[i].empID}</td>
				            <td>${empList[i].empName}</td> 
				             <td>${empList[i].empEmail}</td>
				              <td>${empList[i].empPosition}</td>   
				            <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#viewDetailsModal" onclick="viewEmployeeDetails(${empList[i].empID})">View Details</button>
                   			 <button class="btn btn-danger btn-sm" onclick="removeEmployee(${empList[i].empID})">Remove</button>
				          </tr>`;
				        
		adminMangEmpTable.innerHTML = EmpListInfo;
}



function buildAllEmpReqList(empReqList, empReqLisLen){
	empReqListTable.innerHTML = '';
	//var showItemCount = document.getElementById('ItemCount');
	//showItemCount.innerHTML = stockLen + ' Records are available';
	ShowempCount.innerHTML = empReqLisLen;
	$.get("http://localhost:8087/Game_Kade/getAllMenuItems", function(response) {
				
		menuList = response
		var menuListLen = menuList.length;
		foodCount.innerHTML = menuListLen;
		
	})
	
	//console.log(stock[1].itemID)
	for(var i = 0; i < empReqLisLen; i++){
					
					var Reqclass="";
					
					if((empReqList[i].status).toLowerCase() == "pending"){
						console.log("This is the pending")
						Reqclass = "badge status-pending";
					}
					
					else if((empReqList[i].status).toLowerCase() == "approved"){
						Reqclass = "badge status-approved";
						console.log("This is the accept " + empReqList[i].status)
					}
					else if((empReqList[i].status).toLowerCase()  == "declined"){
						console.log("This is the decline " + empReqList[i].status)
                        Reqclass = "badge status-declined";
                    }
                    
					
		 			var empReqInFo = `<tr>
				       
				            <td>${empReqList[i].reqId}</td>
				            <td>${empReqList[i].email}</td>
				            <td>${empReqList[i].leaveType}</td>
				            <td>${empReqList[i].Date}</td>
				            <td><span class="${Reqclass}"> ${empReqList[i].status}</span></td>
				            <td>
				              <button class="btn btn-accept" onclick="handleEmpRequest(${empReqList[i].reqId}, 'Approved')">Accept</button>
				              <button class="btn btn-decline" onclick="handleEmpRequest(${empReqList[i].reqId}, 'Declined')">Decline</button>
				            </td>
				          </tr>`;
							//console.log(stock[i].itemID);
							
							empReqListTable.innerHTML += empReqInFo;
							
							
	}
}

	function handleEmpRequest(id, action) {
	    // Get the row and email details
	    var endpoint = "http://localhost:8087/Game_Kade/updateEmpReq"
		console.log("this is the Id in hadleEmpRequest: " + id + "and action: " +action);
		if(id !== 'null'){
			
			$.post(endpoint, {id, action}, function(response) {
				alert('Emp Id : ' + id + ' is ' + response)
			})
			
			
			sendEmail(id, action);
		}
		
	    if(id == 'null'){
		    alert(`Reservation ID ${reservationId} not found.`);
		}
	    
	  }
	
	  function sendEmail(id, action) {
		let email = '';
		
		$.get("http://localhost:8087/Game_Kade/getAllEmpReqServlet", function(response) {
				
		empReqList = response
		var empReqLisLen = empReqList.length;
	
		for(var i = 0; i < empReqLisLen; i++){
                if(empReqList[i].reqId == id){
                    email = empReqList[i].email;
                }
            }
            
            const actionText = action;
		    const subject = `Your Leave Request has been ${actionText}`;
		    const body = `Hello, your leave request has been ${actionText}. Please contact HR for further details.`;
		
		    // Simulated email output in console (replace this with actual backend email logic)
		    console.log(`Email sent to ${email}:\nSubject: ${subject}\nBody: ${body}`);
		
		    // You would replace the above with actual backend email sending, e.g., using SMTP or an API like SendGrid
		    alert(`An email has been sent to ${email} about the leave request being ${actionText}.`);
		    window.location.href = "http://localhost:8087/Game_Kade/Admin/AdHome.html";
		
		})
	    
	  }
