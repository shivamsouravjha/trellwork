import Controller from "./controller";
import ClapService from '../service/clapService';
export default class ClapController extends Controller{
    constructor(response){
        super(response);
        this.service = new ClapService();
    }
    getClaps(request){
        try{
            const getMedals = this.service.getClaps();
            getMedals.then(res=>{
                this.sendResonse(res);
            }).catch(error=>{
                this.response.status(500).json({error});
            })

        }catch(error){
            this.response.status(500).json({error});
        }
    }

    addClaps(request){
        try{
            const country = request.params.country;
            const body = request.body.comment;
            const addMedals = this.service.addClaps({country,body});
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