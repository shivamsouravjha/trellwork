import Controller from "./controller";
import ScheduleService from '../service/scheduleService';
export default class MedalController extends Controller{
    constructor(response){
        super(response);
        this.service = new ScheduleService();
    }
    getEvent(request){
        try{
            const getMedals = this.service.getEvent(request.body);
            getMedals.then(res=>{
                this.sendResonse(res);
            }).catch(error=>{
                this.response.status(500).json({error});
            })

        }catch(error){
            this.response.status(500).json({error});
        }
    }

    updateEvent(request){
        try{
            const body= {['data']:request.body};
            body['header']= request.params.event
            const addMedals = this.service.updateEvent(body);
            addMedals.then(res=>{
                this.sendResonse(res);
            }).catch(error=>{
                this.response.status(500).json({error});
            })

        }catch(error){
            this.response.status(500).json({error});
        }
    }
    addEvent(request){
        try{
            const addMedals = this.service.addEvent(request.body);
            addMedals.then(res=>{
                this.sendResonse(res);
            }).catch(error=>{
                this.response.status(500).json({error});
            })

        }catch(error){
            this.response.status(500).json({error});
        }
    }
}