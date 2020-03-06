import Client from "../Model/Client";

async function getClient(req,res,next){
let client;
try {
    client = await Client.findById(req.params.id);
    if (client==null) {
        return res.status(404).json({message:"Client not Found"});
    }
} catch (error) {
    return res.status(500).send(error.message);
}
res.client = client;
next();
}

export default getClient;