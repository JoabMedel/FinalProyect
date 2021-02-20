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
        console.log(req.params.userId)
        const userRole={
            userId:req.params.userId,
            roleId:req.body.roleId
        }
        try{
            const results = await UserRoles.create(userRole);
            return res.status(201).json(results);}
    
        catch(error){
            console.log(error);
        }}