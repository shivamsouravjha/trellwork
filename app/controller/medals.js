import Controller from "./controller";
import MedalService from './../service/medalservice';
export default class MedalController extends Controller{
    constructor(response){
        super(response);
        this.service = new MedalService();
    }
    getMedals(request){
        try{
            const getMedals = this.service.getMedals();
            getMedals.then(res=>{
                this.sendResonse(res);
            }).catch(error=>{
                this.response.status(500).json({error});
            })

        }catch(error){
            this.response.status(500).json({error});
        }
    }

    addMedals(request){
        try{
            const addMedals = this.service.addMedals(request.body);
            addMedals.then(res=>{
                this.sendResonse(res);
            }).catch(error=>{
                console.log(error)
                this.response.status(500).json({error});
            })

        }catch(error){
            this.response.status(500).json({error});
        }
    }
}