import {contents,actors,content_actors} from "../models/"

export const getContents =  async(req, res) => {
    console.log('ingresa')
    try {        
        let results = await contents.findOne({where: {id:req.params.id},
            attributes: { exclude:["rating_details"]},
            include:[{
                    model:actors,
                      attributes: ["name"],
            exclude:[
                {
                    model:content_actors
                }
            ],
                through: {
                    attributes:[]
                }
          }
        ]
        });
        console.log('ingresa')
        res.json(results);
    } catch (error) {
        res.status(400).json({
            messsage: "Hubo un error al procesar tu petición"
        });
    }
};
