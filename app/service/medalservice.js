import MedalStructure from "../structure/medal";
export default class MedalService{
    async getMedals(){
        try{
            console.log("at getmedals");
            const countries = await MedalStructure.find({}).sort({'G_medal':-1,'S_medal':-1,'B_medal':-1});
            console.log(countries);
            return countries
        }catch(error){
            throw error;
        }
    }
    async addMedals(args){
        try{
            let countries;
            args['country']=args['country'].toLowerCase();
            countries = await MedalStructure.findOne({'country':args['country']});
            if(!countries){
                console.log(args['country'])
                countries = new MedalStructure({country:args['country'],G_medal:args['G_medal'],
                S_medal:args['S_medal'],B_medal:args['B_medal'] 
                });
            }
            else{
                countries['G_medal']=args['G_medal']
                countries['S_medal']=args['S_medal']
                countries['B_medal']=args['B_medal']
            }
            await countries.save();
            return {"status":"successful"}
        }catch(error){
            throw error;
        }
    }
}