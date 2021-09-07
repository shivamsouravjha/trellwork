import ScheduleStructure from "../structure/scheduler";
export default class MedalService{
    async getEvent(args){
        try{
            const events = await ScheduleStructure.find({});
            console.log(events);
            return events
        }catch(error){
            throw error;
        }
    }
    async updateEvent(args){
        try{
            console.log(args)
            let event;
            const argss= args['data'];
            // argss['country']=argss['country'].toLowerCase();
            event = await ScheduleStructure.findOne({'eventName':argss['eventName'],"participants":argss['country']});
            console.log(event)
            // if(!countries){
            //     console.log(args['country'])
            //     countries = new ScheduleStructure({country:args['country'],G_medal:args['G_medal'],
            //     S_medal:args['S_medal'],B_medal:args['B_medal'] 
            //     });
            // }
            // else{
            //     countries['G_medal']=args['G_medal']
            //     countries['S_medal']=args['S_medal']
            //     countries['B_medal']=args['B_medal']
            // }
            // await countries.save();
            return {"status":"successful"}
        }catch(error){
            console.log(error)
            throw error;
        }
    }
    async addEvent(args){
        try{
            let event;
            args['eventName']= args['eventName'].toLowerCase();
            event = await ScheduleStructure.findOne({'eventName':args['eventName']});
            console.log(event)
            if(!event){
                event = new ScheduleStructure({eventName:args['eventName'],participants:args['participants'],
                eventDate:args['eventDate']
                });
                console.log(event)
            }
            else{
                throw {"error":"event already exists"}
            }
            await event.save();
            return {"status":"successful"}
        }catch(error){
            console.log(error)
            throw error;
        }
    }
}