const express = require('express');
import MedalController from '../app/controller/medals';
import ClapsController from '../app/controller/claps';
import ScheduleController from '../app/controller/schedule';

const Medals =  express.Router();
const Claps =  express.Router();
const Schedule =  express.Router();


Medals.get('/getmedal',(request,response)=>{
    const medalController = new MedalController(response);
    medalController.getMedals(request);
});
Medals.post('/update/medal',(request,response)=>{
    const medalController = new MedalController(response);
    medalController.addMedals(request);
});

Claps.get('/getclaps',(request,response)=>{
    const clapsController = new ClapsController(response);
    clapsController.getClaps(request);
});
Claps.post('/update/:country',(request,response)=>{
    const clapsController = new ClapsController(response);
    clapsController.addClaps(request);
});


Schedule.post('/getSchedule',(request,response)=>{
    const clapsController = new ScheduleController(response);
    clapsController.getEvent(request);
});
Schedule.post('/addevent',(request,response)=>{
    const clapsController = new ScheduleController(response);
    clapsController.addEvent(request);
});
Schedule.patch('/update/:event',(request,response)=>{
    const clapsController = new ScheduleController(response);
    clapsController.updateEvent(request);
});
export default {Medals,Claps,Schedule};
