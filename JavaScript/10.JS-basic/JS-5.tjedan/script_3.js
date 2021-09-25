const data = [
    {id: 1, type: 'service', name: 'Service 1', active: true, memberId: 10
    }, {id: 2, type: 'service', name: 'Service 2', active: true, memberId: 11
    }, {id: 3, type: 'service', name: 'Service 3', active: false, memberId: 10
    }, {id: 4, type: 'service', name: 'Service 4', active: true, memberId: 9
    }, { id: 5, type: 'deal', name: 'Deal 1', active: false, services: [3, 4]
    }, {id: 6, type: 'deal', name: 'Deal 6', active: false, services: [4]
    }, {id: 7, type: 'deal', name: 'Deal 7', active: true, services: [1, 3, 4]
    }, { id: 8, type: 'member', name: 'Member 1', active: true
    }, {id: 9, type: 'member', name: 'Member 2', active: true
    }, {id: 10, type: 'member', name: 'Member 3', active: true
    }, {id: 11, type: 'member', name: 'Member 4', active: false
    } ]

  // 1. zadatak

  data.filter((x)=>{
        if (x.active === true){
            console.log(x.name) ;
        }
    });
    
 //2.zadatak

 let find_name = data.find(x => x.name === 'Service 3');

 let new_array=data.filter(x => {
     if(x.id === find_name.memberId){
         console.log(x.name);
     }
 })


 //3.zadatak

 let findMember = data.find(x => x.name === 'Member 3');
let memberIDArray = [];
let findService = data.filter(x => x.memberId === findMember.id ).map(y => y.id);
let deals = [];
deals = data.filter(x => x.services?.some(y => findService.includes(y))).map(z => z.name);
console.log(...deals);



//4.zadatak

let serviceName = []
let servicesIDArray = data.filter(x => x.services).map(y => y.services).flatMap(z => z);
console.log(servicesIDArray);
let servicesList = data.filter(x => x.type === "service");
let findServices = servicesList.filter(x => !servicesIDArray.includes(x.id)).map(y => y.name);
console.log(...findServices);




//5.zadatak

let servieMembersId = data.filter(x => x.type === "service");
let membersId = servieMembersId.map(x => x.memberId);
 console.log(membersId);
let activeMembers = data.filter(x => x.type === "member" && x.active === false && membersId.includes(x.id)).map(y => y.name);
 console.log(...activeMembers);
 let membersID = data.filter(x => x.type === "service").map(y => y.memberId);
 let activeMembers = data.filter(x => x.type === "member" && x.active === false && membersID.includes(x.id)).map(y => y.name);
 console.log(...activeMembers)