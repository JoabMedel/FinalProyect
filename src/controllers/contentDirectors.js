import { content_directors, directors, contents } from "../models";

export const addcontent_directors = async (req, res) => {
  try {
    const results = await content_directors.create({
      director_id: req.body.director_id,
      content_id: req.body.content_id,
    });
    return res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ message: "Ocurrio un problema intente mas tarde" });
  }
};

export const updatecontent_directors = async (req, res) => {
  const findcontent_directors = await content_directors.findOne({
    where: { id: req.params.id },
  });
  if (findcontent_directors) {
    try {
      content_directors.update(
        {
          director_id: req.body.actor_id,
          content_id: req.body.content_id,
        },
        { where: { id: req.params.id } }
      );
      res.status(200).json({ message: "actualizacion exitosa" });
    } catch (error) {
      res.satatus(500).json({ message: "ocurrio un error intente mas tarde" });
    }
  } else {
    res
      .status(400)
      .json({ message: "hubo un problema para actualizar rol de usuario" });
  }
};

export const getcontent_directors = async (req, res) => {
  try {
    let results = await content_directors.findAll({
      include: [
        {
          model: directors,
          attributes: ["name"],
        },
        { model: contents, attributes: ["title"] },
      ],
    });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const getcontent_director = async (req, res) => {
  try {
    let results = await content_directors.findOne({
      include: [
        {
          model: directors,
          attributes: ["name"],
        },
        { model: contents, attributes: ["title"] },
      ],
      where: { id: req.params.id },
    });
    res.json(results);
  } catch (error) {
    res.status(400).json({
      messsage: "Hubo un error al procesar tu petición",
    });
  }
};

export const erasecontent_directors = async (req, res) => {
  const findcontent_directors = await content_directors.findOne({
    where: { id: req.params.id },
  });
  if (findcontent_directors) {
    try {
      content_directors.destroy({ where: { id: req.params.id } });
      res.status(200).json({ message: "Registro eliminado." });
    } catch (error) {
      res.status(400).json({
        messsage: "Hubo un error al procesar tu petición",
      });
    }
  }
};
