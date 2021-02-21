const {Roles, UserRoles} = require("../models");


export const addRole = async (req, res) => {
    try{
        const results = await Roles.create(req.body);
        return res.status(201).json(results);}

    catch(error){
        console.log(error);
    }}
    
    export const addRoleUser = async (req, res) => {
        console.log('ingresa')
        console.log(req.params.roleId)
        const userRole={
            userId:req.body.userId,
            roleId:req.params.roleId
        }
        try{
            const results = await UserRoles.create(userRole);
            return res.status(201).json(results);}
    
        catch(error){
            console.log(error);
        }}