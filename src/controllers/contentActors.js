import { content_actors } from "../models";

export const addContentActor = async (req, res) => {
  try {
    const results = await content_actors.create({
      actor_id: req.body.actor_id,
      content_id: req.body.content_id,
    });
    return res.status(201).json(results);
  } catch (error) {
    res.satatus(500).json({ message: "Ocurrio un problema intente mas tarde" });
  }
};

export const updateContentActor = async (req, res) => {
  const findContentActor = await content_actors.findOne({
    where: { id: req.params.id },
  });
  if (findContentActor) {
    try {
      content_actors.update(
        {
          actor_id: req.body.actor_id,
          content_id: req.body.content_id,
        },
        { where: { id: req.params.id } }
      );
      res.status(200).json({ message: "actualizacion exitosa" });
    } catch (error) {
      res.satatus(500).json({ message: "ocurrio un error intente mas tarde" });
    }
  } else {
    res.status(400).json({ message: "hubo un problema para actualizar" });
  }
};

export const getContentActors = async (req, res) => {
  try {
    //agregar al endpoint un param "limit" para limitar la cantidad.
    let results = await content_actors.findAll({
      limit: req.query.limit,
    });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const getOneContentActor = async (req, res) => {
  try {
    let results = await content_actors.findOne({
      where: { id: req.params.id },
    });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const eraseContentActor = async (req, res) => {
  const findContentActor = await content_actors.findOne({
    where: { id: req.params.id },
  });
  if (findContentActor) {
    try {
      content_actors.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: "actualizacion exitosa" });
    } catch (error) {
      res.status(400).json({
        messsage: "Hubo un error al procesar tu petición",
      });
    }
  }
};
