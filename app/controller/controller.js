export default class Controller {
    constructor(response){
        this.response= response;
    }
    sendResonse(data){
        this.response.status(200).json({data});
        
    }
}