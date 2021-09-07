import ClapStructure from "../structure/claps";
export default class MedalService{
    async getClaps(){
        try{
            const countries = await ClapStructure.find({}).sort({'claps':-1});
            return countries
        }catch(error){
            throw error;
        }
    }
    async addClaps(args){
        try{
            let countries;
            console.log(args);
            args['country']=args['country'].toLowerCase();

            countries = await ClapStructure.findOne({'country':args['country']});
            if(!countries){
                countries = new ClapStructure({country:args['country'],claps:1,comments:[]});
            }
            else{
                countries['claps']+=1;
            }
            console.log(countries);

            if(args.body){
                countries['comments'].push(args['body']);
            }
            await countries.save();
            return {"status":"successful"}
        }catch(error){
            throw error;
        }
    }
}